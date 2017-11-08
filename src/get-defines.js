const {transform} = require('babel-core')
const {parse} = require('babylon')
const {NodePath} = require('babel-traverse')
const {helper} = require('./helper')

const assert = require('assert')

const {fields} = require('./fields')

const getDefines = (src, where) => {
    const definedTypes = {}

    const plugin = babel => {
        const {types: t, template} = babel

        const getProp = (name, key) => {
            if (!definedTypes[name].props[key]) {
                definedTypes[name].props[key] = {
                    validate: [],
                }
            }
            return definedTypes[name].props[key]
        }

        const propBuild = (propPath, cb) => {
            const keys = helper
                .find(propPath, t, 'value.elements.*', ['ArrayExpression', null, 'StringLiteral'])
                .nodePaths.map(p => p.node.value)
            cb(keys)
        }

        const visitor = {
            Program: (nodePath, state) => {
                nodePath.traverse({
                    SpreadElement: (nodePath2) => {
                        if (nodePath2.parent.type === 'CallExpression') {
                            return
                        }

                        assert(nodePath2.parent.type === 'ObjectExpression')
                        const name = nodePath2.node.argument.name
                        const init = nodePath2.scope.bindings[name].path.node.init
                        if (!init) {
                            nodePath2.remove()
                            return
                        }
                        assert(init.type === 'ObjectExpression')

                        nodePath2.replaceWithMultiple(init.properties)
                        // console.log(init.properties.key.name)
                        // value

                        // console.log(nodePath2.parentPath.parent)
                    }
                })
            },
            CallExpression: (nodePath, state) => {
                if (!t.is('Identifier', nodePath.node.callee, {name: 'defineType'})) {
                    return
                }

                const name = nodePath.node.arguments[0].value
                if (!name) {
                    assert(where === 'typescript.js')
                    assert(nodePath.node.arguments[1].properties[0].key.name === 'aliases')
                    assert(nodePath.node.arguments[1].properties[0].value.elements[0].value === 'TSType')

                    const tsKeywordTypes = [
                        "TSAnyKeyword",
                        "TSNumberKeyword",
                        "TSObjectKeyword",
                        "TSBooleanKeyword",
                        "TSStringKeyword",
                        "TSSymbolKeyword",
                        "TSVoidKeyword",
                        "TSUndefinedKeyword",
                        "TSNullKeyword",
                        "TSNeverKeyword",
                    ]
                    tsKeywordTypes.forEach(key => {
                        definedTypes[key] = {
                            name: key,
                            props: {},
                            where,
                            aliases: ['TSType']
                        }
                    })
    
                    return
                }

                assert(!definedTypes[name])

                definedTypes[name] = {
                    name,
                    props: {},
                    where,
                }

                if (name === 'Identifier') {
                    return
                }

                helper
                    .find(nodePath, t, 'arguments.1.properties.*', [null, 'ObjectExpression', null, 'ObjectProperty'])
                    .nodePaths.forEach(propPath => {
                        const key = propPath.node.key.name
                        switch (key) {
                            case 'fields': {
                                fields(t, propPath, (key2, validate) => {
                                    if (validate) {
                                        getProp(name, key2).validate.push(validate)
                                    }
                                })
                                break
                            }

                            case 'visitor':
                            case 'aliases':
                            case 'builder': {
                                const cb = {
                                    'builder': (keys) => keys.forEach(k => (getProp(name, k).isBuild = true)),
                                    'visitor': (keys) => keys.forEach(k => (getProp(name, k).isVisit = true)),
                                    'aliases': (keys) => definedTypes[name].aliases = keys
                                }
                                propBuild(propPath, cb[key])
                                break
                            }

                            case 'deprecatedAlias':
                            case 'inherits': {
                                // inherits 処理しないと new とか function expressionが…
                                return
                            }

                            default: {
                                throw new Error(`unknown: ${key}`)
                            }
                        }
                    })
            },
        }

        return {
            inherits: require('babel-plugin-syntax-object-rest-spread').default,
            visitor,
        }
    }

    // const ast = parse(src)
    // const p = NodePath.get({parent: ast, container: ast, key: 'program'})
    // console.log(p.get('body.0.expression').node)

    const {code} = transform(src, {plugins: [plugin]})

    return Object.keys(definedTypes).map(key => definedTypes[key])
}

module.exports = {getDefines}

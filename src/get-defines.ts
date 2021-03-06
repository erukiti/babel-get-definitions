import {transform} from 'babel-core'
import {parse} from 'babylon'
import {NodePath} from 'babel-traverse'
import {helper} from './helper'

const assert = require('assert')

import {fields} from './fields'

export const getDefines = (src, where) => {
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
                    ImportDeclaration: (nodePath2) => {
                        // console.log(nodePath2.node)
                    },
                    SpreadProperty: (nodePath2) => {
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
                                const res = fields(t, propPath)
                                Object.keys(res).forEach(key => {
                                    getProp(name, key).validate = res[key].validate
                                    getProp(name, key).optional = res[key].optional
                                    getProp(name, key).default = res[key].default
                                })
                                break
                            }

                            case 'visitor':
                            case 'aliases':
                            case 'builder': {
                                const cb = {
                                    'builder': (keys) => definedTypes[name].builder = keys,
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
            inherits: require('@babel/plugin-syntax-object-rest-spread').default,
            visitor,
        }
    }

    const {code} = transform(src, {plugins: [plugin]})

    return Object.keys(definedTypes).map(key => definedTypes[key])
}


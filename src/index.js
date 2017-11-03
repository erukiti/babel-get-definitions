const {transform} = require('babel-core')
const {parse} = require('babylon')
const {NodePath} = require('babel-traverse')
const {helper} = require('babel-helper')

const assert = require('assert')

const definedTypes = {}

const src = `
defineType("ArrayExpression", {
    fields: {
      elements: {
        validate: chain(
          assertValueType("array"),
          assertEach(
            assertNodeOrValueType("null", "Expression", "SpreadElement"),
          ),
        ),
        default: [],
      },
    },
    visitor: ["elements"],
    aliases: ["Expression"],
  });
  
  defineType("AssignmentExpression", {
    fields: {
      operator: {
        validate: assertValueType("string"),
      },
      left: {
        validate: assertNodeType("LVal"),
      },
      right: {
        validate: assertNodeType("Expression"),
      },
    },
    builder: ["operator", "left", "right"],
    visitor: ["left", "right"],
    aliases: ["Expression"],
  });
  
  defineType("BinaryExpression", {
    builder: ["operator", "left", "right"],
    fields: {
      operator: {
        validate: assertOneOf(...BINARY_OPERATORS),
      },
      left: {
        validate: assertNodeType("Expression"),
      },
      right: {
        validate: assertNodeType("Expression"),
      },
    },
    visitor: ["left", "right"],
    aliases: ["Binary", "Expression"],
  });
  
  defineType("Directive", {
    visitor: ["value"],
    fields: {
      value: {
        validate: assertNodeType("DirectiveLiteral"),
      },
    },
  });
`

const plugin = (babel) => {
    const {types: t, template} = babel

    const getProp = (name, key) => {
        if (!definedTypes[name].props[key]) {
            definedTypes[name].props[key] = {
                validate: []
            }
        }
        return definedTypes[name].props[key]
    }

    const visitor = {
        CallExpression: (nodePath, state) => {
            if (!t.is('Identifier', nodePath.node.callee, {name: 'defineType'})) {
                return
            }

            const name = nodePath.node.arguments[0].value
            assert(!definedTypes[name])

            definedTypes[name] = {
                name,
                props: {},
                where: '',
            }

            if (name === 'Identifier') {
                return
            }

            helper.find(nodePath, t, 'arguments.1.properties.*', [null, 'ObjectExpression', null, 'ObjectProperty']).nodePaths.forEach(propPath => {

                const key = propPath.node.key.name
                switch (key) {
                    case 'fields': {
                        propPath.get('value.properties').map(propPath2 => {
                            if (propPath2.type === 'SpreadElement') {
                                return
                            }
                            const key2 = propPath2.node.key.name
                            if (name === 'ObjectProperty' && key2 === 'key') {
                                return
                            }
                            if (name === 'ObjectMethod' && key2 === 'key') {
                                return
                            }
                            if (name === 'WithStatement' && key2 === 'object') {
                                return
                            }
                            helper.find(propPath2, t, 'value.properties.*', ['ObjectExpression', null, 'ObjectProperty']).nodePaths.map(propPath3 => {
                                if (propPath3.node.key.name === 'default') {
                                    return
                                    // console.log(propPath3.node)
                                    // process.exit(1)
                                }
                                if (propPath3.node.key.name === 'optional') {
                                    return
                                    // console.log(propPath3.node)
                                    // process.exit(1)
                                }
                                if (name === 'MemberExpression') {
                                    return
                                }
                                if (propPath3.node.key.name !== 'validate') {
                                    console.log(name, key2)
                                    console.log(propPath3.node)
                                    assert(false)
                                }
                                assert(propPath3.node.key.name === 'validate')
                                if (!propPath3.node.value) {
                                    console.log(name, key, key2, propPath3.node)
                                    assert(false)
                                }
                                assert(propPath3.node.value.type === 'CallExpression')

                                switch (propPath3.node.value.callee.name) {
                                    case 'assertValueType':
                                    case 'assertNodeType': {
                                        propPath3.node.value.arguments.forEach(n => {
                                            assert(n.type === 'StringLiteral')
                                            getProp(name, key2).validate.push(n.value)
                                        })

                                        break
                                    }
                                    case 'assertOneOf': {
                                        if (name === 'CallExpression' && key2 === 'optional') {
                                            assert(propPath3.node.value.arguments.length === 2)
                                            assert(propPath3.node.value.arguments[0].type === 'BooleanLiteral')
                                            assert(propPath3.node.value.arguments[1].type === 'BooleanLiteral')
                                            return
                                        }
                                        if (name === 'Program' && key2 === 'sourceType') {
                                            return
                                        }
                                        if (propPath3.node.value.arguments.length !== 1) {
                                            console.log(name, propPath3.node.value.arguments)
                                            assert(false)
                                        }
                                        assert(propPath3.node.value.arguments.length === 1)
                                        assert(propPath3.node.value.arguments[0].type === 'SpreadElement')
                                        assert(propPath3.node.value.arguments[0].argument.type === 'Identifier')
                                        getProp(name, key2).validate.push(propPath3.node.value.arguments[0].argument.name)
                                        break
                                    }

                                    case 'chain': {
                                        return
                                        // console.log(name)
                                        // console.log(propPath3.node.value.arguments)
                                        // assert(false)
                                        // break
                                    }

                                    default: {
                                        console.log(name, key2, propPath3.node.value.callee.name)
                                        console.log(propPath3.node.value)
                                        assert(false)
                                    }
                                }
                            })
                            // const validatePath = propPath2.get('value.properties').find(vPath => vPath.node.key.name === 'validate')
    
                            // console.log(key2, validatePath.get('value.callee.name').node, validatePath.get('value.arguments').map(p => p.node.value))
                        })
                        break
                    }
                    case 'builder': {
                        const keys = helper.find(propPath, t, 'value.elements.*', ['ArrayExpression', null, 'StringLiteral']).nodePaths.map(p => p.node.value)
                        keys.forEach(k => getProp(name, k).isBuild = true)
                        break
                    }
                    case 'visitor': {
                        const keys = helper.find(propPath, t, 'value.elements.*', ['ArrayExpression', null, 'StringLiteral']).nodePaths.map(p => p.node.value)
                        keys.forEach(k => getProp(name, k).isVisit = true)
                        break
                    }
                    case 'aliases': {
                        const keys = helper.find(propPath, t, 'value.elements.*', ['ArrayExpression', null, 'StringLiteral']).nodePaths.map(p => p.node.value)
                        definedTypes[name].aliases = keys
                        break
                    }
                    case 'deprecatedAlias':
                    case 'inherits': {
                        return
                    }
                    default: {
                        throw new Error(`unknown: ${key}`)
                    }
                }
            })
        }
    }

    return {
        visitor
    }
}

// const ast = parse(src)
// const p = NodePath.get({parent: ast, container: ast, key: 'program'})
// console.log(p.get('body.0.expression').node)

const {code} = transform(src, {plugins: [plugin, 'transform-object-rest-spread']})

console.log(JSON.stringify(definedTypes, null, '  '))

const {transform} = require('babel-core')
const {parse} = require('babylon')
const {NodePath} = require('babel-traverse')
const {helper} = require('babel-helper')

const assert = require('assert')

const {fields} = require('./fields')

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

            helper
                .find(nodePath, t, 'arguments.1.properties.*', [null, 'ObjectExpression', null, 'ObjectProperty'])
                .nodePaths.forEach(propPath => {
                    const key = propPath.node.key.name
                    switch (key) {
                        case 'fields': {
                            fields(t, name, propPath, (key2, validate) => {
                                getProp(name, key2).validate.push(validate)
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
        visitor,
    }
}

// const ast = parse(src)
// const p = NodePath.get({parent: ast, container: ast, key: 'program'})
// console.log(p.get('body.0.expression').node)

const {code} = transform(src, {plugins: [plugin, 'transform-object-rest-spread']})

console.log(JSON.stringify(definedTypes, null, '  '))

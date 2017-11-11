const {helper} = require('./helper')
const assert = require('assert')
const t = require('babel-types')

class PropertyValidator {
    type
    arrayType
    s
    static fromType(s, arrayType = null) {
        return new PropertyValidator('type', s, arrayType)
    }

    static constChars(s) {
        return new PropertyValidator('char', s)
    }

    static literal(s) {
        return new PropertyValidator('literal', s)
    }

    constructor(type, s, arrayType = null) {
        this.type = type
        this.arrayType = arrayType
        this.s = s
    }

    getSampleNode() {
        const samples = {
            string: `'string'`,
            number: `42`,
            boolean: `true`,
            LVal: `t.identifier('lval')`,
            Expression: `t.identifier('expr')`,
            BINARY_OPERATORS: `'+'`,
            Statement: `t.returnStatement(t.identifier('statement'))`,
            Program: `t.program([])`,
            BlockStatement: `t.blockStatement([])`,
            Identifier: `t.identifier('identifier')`,
            LOGICAL_OPERATORS: `'&&'`,
            UNARY_OPERATORS: `'!'`,
            UPDATE_OPERATORS: `'++'`,
            VariableDeclarator: `t.variableDeclarator(t.identifier('hoge'), t.numericLiteral(1))`,
            PatternLike: `t.identifier('patternLike')`,
        }

        switch (this.type) {
            case 'type':
            case 'char': {
                let key = null
                if (!Array.isArray(this.s)) {
                    key = this.s
                } else {
                    key = this.s.find(s => s in samples)
                }

                if (key) {
                    if (this.arrayType === 'array') {
                        return `[${samples[key]}]`
                    } else if (this.arrayType) {
                        console.log(this.arrayType)
                    } else {
                        return samples[key]
                    }
                }

                console.log('unknown', this.type, this.arrayType, this.s)
                return
            }

            case 'literal': {
                switch(typeof this.s[0]) {
                    case 'string': {
                        return `'${this.s[0]}'`
                    }
                    default: {
                        return this.s[0]
                    }
                }
            }
        }

    }
}

export const convertValidateCaller = (nodePath, arrayType = null) => {
    assert(nodePath.type === 'CallExpression')
    switch (nodePath.node.callee.name) {
        case 'assertNodeOrValueType':
        case 'assertValueType':
        case 'assertNodeType': {
            const s = nodePath.node.arguments.map(node => {
                assert(node.type === 'StringLiteral')
                return node.value
            })
            return PropertyValidator.fromType(s, arrayType)
        }

        case 'assertOneOf': { 
            const args = nodePath.node.arguments
            if (args[0].type === 'SpreadElement') {
                assert(args.length === 1)
                return PropertyValidator.constChars(nodePath.node.arguments[0].argument.name)
            }

            const s = args.map(node => {
                // assert(t.isLiteral(node))
                return node.value
            })

            return PropertyValidator.literal(s)
        }

        case 'chain': {
            assert(nodePath.node.arguments.length === 2)
            assert(nodePath.node.arguments[0].type === 'CallExpression')
            assert(nodePath.node.arguments[0].callee.name === 'assertValueType')
            assert(nodePath.node.arguments[0].arguments.length === 1)
            assert(nodePath.node.arguments[0].arguments[0].type === 'StringLiteral')

            assert(nodePath.node.arguments[1].type === 'CallExpression')
            if (nodePath.node.arguments[1].callee.name === 'assertEach') {
                return convertValidateCaller(
                    nodePath.get('arguments.1.arguments.0'),
                    nodePath.node.arguments[0].arguments[0].value,
                )
            }
            return convertValidateCaller(
                nodePath.get('arguments.1'),
                nodePath.node.arguments[0].arguments[0].value,
            )
        }

        case undefined: {
            return
        }

        default: {
            console.log(nodePath.node.callee.name)
            console.log(nodePath.node)
            assert(false)
            return
        }
    }
}

export const fields = (t, propPath) => {
    const result = {}

    if (propPath.node.value.type === 'Identifier') {
        return result
    }
    assert(propPath.node.value.type === 'ObjectExpression')

    propPath.get('value.properties').forEach(propPath2 => {
        const key2 = propPath2.node.key.name
        result[key2] = {}
        helper
            .find(propPath2, t, 'value.properties.*', ['ObjectExpression', null, 'ObjectProperty'])
            .nodePaths.map(propPath3 => {
                if (propPath3.node.key.name === 'default') {
                    result[key2].default = propPath3.node.value
                    return
                }
                if (propPath3.node.key.name === 'optional') {
                    assert(propPath3.node.value.type === 'BooleanLiteral')
                    result[key2].optional = propPath3.node.value.value
                    return
                }

                if (propPath3.node.key.name === 'object') {
                    return
                }
                assert(propPath3.node.key.name === 'validate')
                assert(propPath3.node.value.type === 'CallExpression')

                result[key2].validate = convertValidateCaller(propPath3.get('value'))
            })
    })

    return result
}

const {helper} = require('babel-helper')
const assert = require('assert')

class PropertyValidator {
    static fromType(s, arrayType = null) {
        return new PropertyValidator('type', s, arrayType)
    }

    static constChars(s) {
        return new PropertyValidator('char', s)
    }

    static constString(s) {
        return new PropertyValidator('string', s)
    }

    constructor(type, s, arrayType = null) {
        this.type = type
        this.arrayType = arrayType
        this.s = s
    }
}

const convertValidateCaller = (nodePath, arrayType = null) => {
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
            return PropertyValidator.constChars(nodePath.node.arguments[0].argument.name)
        }

        case 'chain': {
            assert(nodePath.node.arguments.length === 2)
            assert(nodePath.node.arguments[0].type === 'CallExpression')
            assert(nodePath.node.arguments[0].callee.name === 'assertValueType')
            assert(nodePath.node.arguments[0].arguments.length === 1)
            assert(nodePath.node.arguments[0].arguments[0].type === 'StringLiteral')

            assert(nodePath.node.arguments[1].type === 'CallExpression')
            assert(nodePath.node.arguments[1].callee.name === 'assertEach')
            // console.log(nodePath.get('arguments.1').node)
            // return
            return convertValidateCaller(
                nodePath.get('arguments.1.arguments.0'),
                nodePath.node.arguments[0].arguments[0].value,
            )
        }

        default: {
            console.log(nodePath.node)
            assert(false)
            return
        }
    }
}

// FIXME name を消す
const fields = (t, propPath, pushValidate) => {
    propPath.get('value.properties').map(propPath2 => {
        if (propPath2.type === 'SpreadElement') {
            return
        }
        const key2 = propPath2.node.key.name
        helper
            .find(propPath2, t, 'value.properties.*', ['ObjectExpression', null, 'ObjectProperty'])
            .nodePaths.map(propPath3 => {
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

                assert(propPath3.node.key.name === 'validate')
                assert(propPath3.node.value.type === 'CallExpression')

                const validates = convertValidateCaller(propPath3.get('value'))
                validates.forEach(validate => {
                    pushValidate(key2, validate)
                })
            })
        // const validatePath = propPath2.get('value.properties').find(vPath => vPath.node.key.name === 'validate')

        // console.log(key2, validatePath.get('value.callee.name').node, validatePath.get('value.arguments').map(p => p.node.value))
    })
}

module.exports = {fields, convertValidateCaller}

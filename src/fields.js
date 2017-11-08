const {helper} = require('babel-helper')
const assert = require('assert')

class PropertyValidator {
    static nodeType(s) {
        return new PropertyValidator('node', s)
    }

    static valueType(s) {
        return new PropertyValidator('value', s)
    }

    static constChars(s) {
        return new PropertyValidator('char', s)
    }

    static constString(s) {
        return new PropertyValidator('string', s)
    }

    constructor(type, s) {
        this.type = type
        this.s = s
    }
}



const convertValidateCaller = (nodePath) => {
    switch (nodePath.node.callee.name) {
        case 'assertValueType': {
            return nodePath.node.arguments.map(node => {
                assert(node.type === 'StringLiteral')
                return PropertyValidator.valueType(node.value)
            })
        }
        case 'assertNodeType': {
            return nodePath.node.arguments.map(node => {
                assert(node.type === 'StringLiteral')
                return PropertyValidator.nodeType(node.value)
            })
        }

        case 'assertOneOf': {
            return [PropertyValidator.constChars(nodePath.node.arguments[0].argument.name)]
        }

        default: {
            console.log(nodePath.node)
            assert(false)
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

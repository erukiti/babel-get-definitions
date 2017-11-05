const {helper} = require('babel-helper')
const assert = require('assert')

const convertValidateCaller = (nodePath) => {
    switch (nodePath.node.callee.name) {
        case 'assertValueType':
        case 'assertNodeType': {
            return nodePath.node.arguments.map(node => {
                assert(node.type === 'StringLiteral')
                return node.value
            })
        }

        case 'assertOneOf': {
            return [nodePath.node.arguments[0].argument.name]
        }

        default: {
            console.log(nodePath.node)
            assert(false)
        }
    }
}

// FIXME name を消す
const fields = (t, name, propPath, pushValidate) => {
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

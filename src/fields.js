const {helper} = require('babel-helper')
const assert = require('assert')
const fields = (t, name, propPath, getProp) => {
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
}

module.exports = {fields}

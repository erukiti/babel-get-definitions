"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { helper } = require('./helper');
const assert = require('assert');
class PropertyValidator {
    static fromType(s, arrayType = null) {
        return new PropertyValidator('type', s, arrayType);
    }
    static constChars(s) {
        return new PropertyValidator('char', s);
    }
    static literal(s) {
        return new PropertyValidator('literal', s);
    }
    constructor(type, s, arrayType = null) {
        this.type = type;
        this.arrayType = arrayType;
        this.s = s;
    }
}
exports.convertValidateCaller = (nodePath, arrayType = null) => {
    assert(nodePath.type === 'CallExpression');
    switch (nodePath.node.callee.name) {
        case 'assertNodeOrValueType':
        case 'assertValueType':
        case 'assertNodeType': {
            const s = nodePath.node.arguments.map(node => {
                assert(node.type === 'StringLiteral');
                return node.value;
            });
            return PropertyValidator.fromType(s, arrayType);
        }
        case 'assertOneOf': {
            const args = nodePath.node.arguments;
            if (args[0].type === 'SpreadElement') {
                assert(args.length === 1);
                return PropertyValidator.constChars(nodePath.node.arguments[0].argument.name);
            }
            const s = args.map(node => {
                // assert(t.isLiteral(node))
                return node.value;
            });
            return PropertyValidator.literal(s);
        }
        case 'chain': {
            assert(nodePath.node.arguments.length === 2);
            assert(nodePath.node.arguments[0].type === 'CallExpression');
            assert(nodePath.node.arguments[0].callee.name === 'assertValueType');
            assert(nodePath.node.arguments[0].arguments.length === 1);
            assert(nodePath.node.arguments[0].arguments[0].type === 'StringLiteral');
            assert(nodePath.node.arguments[1].type === 'CallExpression');
            if (nodePath.node.arguments[1].callee.name === 'assertEach') {
                return exports.convertValidateCaller(nodePath.get('arguments.1.arguments.0'), nodePath.node.arguments[0].arguments[0].value);
            }
            return exports.convertValidateCaller(nodePath.get('arguments.1'), nodePath.node.arguments[0].arguments[0].value);
        }
        case undefined: {
            return;
        }
        default: {
            console.log(nodePath.node.callee.name);
            console.log(nodePath.node);
            assert(false);
            return;
        }
    }
};
exports.fields = (t, propPath, pushValidate) => {
    if (propPath.node.value.type === 'Identifier') {
        return;
    }
    assert(propPath.node.value.type === 'ObjectExpression');
    propPath.get('value.properties').forEach(propPath2 => {
        // if (propPath2.type === 'SpreadElement') {
        //     const name = propPath2.node.argument.name
        //     console.log(name)
        //     // console.log(propPath2.scope.bindings['functionCommon'].path.node)
        //     // process.exit(1)
        //     return
        // }
        const key2 = propPath2.node.key.name;
        helper
            .find(propPath2, t, 'value.properties.*', ['ObjectExpression', null, 'ObjectProperty'])
            .nodePaths.map(propPath3 => {
            if (propPath3.node.key.name === 'default') {
                return;
                // console.log(propPath3.node)
                // process.exit(1)
            }
            if (propPath3.node.key.name === 'optional') {
                return;
                // console.log(propPath3.node)
                // process.exit(1)
            }
            if (propPath3.node.key.name === 'object') {
                return;
            }
            assert(propPath3.node.key.name === 'validate');
            assert(propPath3.node.value.type === 'CallExpression');
            pushValidate(key2, exports.convertValidateCaller(propPath3.get('value')));
        });
    });
};
//# sourceMappingURL=fields.js.map
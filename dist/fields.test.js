const test = require('ava');
const types = require('babel-types');
const { parse, parseExpression } = require('babylon');
const { NodePath } = require('babel-traverse');
const { fields, convertValidateCaller } = require('./fields');
const getNodePath = (s) => {
    const ast = parse(s);
    return NodePath.get({ parent: ast, container: ast, key: 'program' }).get('body.0.expression');
};
test('assertValueType', t => {
    const nodePath = getNodePath(`assertValueType('string')`);
    const result = convertValidateCaller(nodePath);
    t.true(result.type === 'type');
    t.deepEqual(result.s, ['string']);
});
test('assertValueType', t => {
    const nodePath = getNodePath(`assertNodeType('LVal')`);
    const result = convertValidateCaller(nodePath);
    t.true(result.type === 'type');
    t.deepEqual(result.s, ['LVal']);
});
test('assertOneOf', t => {
    const nodePath = getNodePath(`assertOneOf(...BINARY_OPERATORS)`);
    const result = convertValidateCaller(nodePath);
    t.true(result.type === 'char');
    t.true(result.s === 'BINARY_OPERATORS');
});
test('chain array ', t => {
    const nodePath = getNodePath(`chain(
            assertValueType("array"),
            assertEach(assertNodeOrValueType("null", "Expression", "SpreadElement"))
        )`);
    const result = convertValidateCaller(nodePath);
    t.true(result.type === 'type');
    t.true(result.arrayType === 'array');
    t.deepEqual(result.s, ['null', 'Expression', 'SpreadElement']);
});
//# sourceMappingURL=fields.test.js.map
const test = require('ava')

const types = require('babel-types')
const {parse, parseExpression} = require('babylon')
const {NodePath} = require('babel-traverse')

const {fields, convertValidateCaller} = require('./fields')

const getNodePath = (s) => {
    const ast = parse(s)
    return NodePath.get({parent: ast, container: ast, key: 'program'}).get('body.0.expression')
}


test('assertValueType', t => {
    const nodePath = getNodePath(`assertValueType('string')`)
    const result = convertValidateCaller(nodePath)
    t.true(result.length === 1)
    t.true(result[0].type === 'value')
    t.true(result[0].s === 'string')
})

test('assertValueType', t => {
    const nodePath = getNodePath(`assertNodeType('LVal')`)
    const result = convertValidateCaller(nodePath)
    t.true(result.length === 1)
    t.true(result[0].type === 'node')
    t.true(result[0].s === 'LVal')
})

test('assertOneOf', t => {
    const nodePath = getNodePath(`assertOneOf(...BINARY_OPERATORS)`)
    const result = convertValidateCaller(nodePath)
    t.true(result.length === 1)
    t.true(result[0].type === 'char')
    t.true(result[0].s === 'BINARY_OPERATORS')
})


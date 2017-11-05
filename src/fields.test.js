const test = require('ava')

const types = require('babel-types')
const {parse, parseExpression} = require('babylon')
const {NodePath} = require('babel-traverse')

const {fields, convertValidateCaller} = require('./fields')

test('assertValueType', t => {
    const src = `assertValueType('string')`
    const ast = parse(src)
    const nodePath = NodePath.get({parent: ast, container: ast, key: 'program'}).get('body.0.expression')
    const result = convertValidateCaller(nodePath)
    t.true(result.length === 1)
    t.true(result[0] === 'string')
})

test('assertValueType', t => {
    const src = `assertNodeType('LVal')`
    const ast = parse(src)
    const nodePath = NodePath.get({parent: ast, container: ast, key: 'program'}).get('body.0.expression')
    const result = convertValidateCaller(nodePath)
    t.true(result.length === 1)
    t.true(result[0] === 'LVal')
})

test('assertOneOf', t => {
    const src = `assertOneOf(...BINARY_OPERATORS)`
    const ast = parse(src)
    const nodePath = NodePath.get({parent: ast, container: ast, key: 'program'}).get('body.0.expression')
    const result = convertValidateCaller(nodePath)
    t.true(result.length === 1)
    t.true(result[0] === 'BINARY_OPERATORS')
})

// FIXME ['let', 'const', 'var'] みたいなやつどうひょうんげんする？

import test from 'ava'

import {parse} from 'babylon'
import {NodePath} from 'babel-traverse'
import * as types from 'babel-types'
import {helper} from './index'

const src = `
defineType('AssignmentExpression', {
    fields: {
        operator: {
            validate: assertValueType('string'),
        },
        left: {
            validate: assertNodeType('LVal'),
        },
        right: {
            validate: assertNodeType('Expression'),
        },
    },
    builder: ['operator', 'left', 'right'],
    visitor: ['left', 'right'],
    aliases: ['Expression'],
})
`

test('', t => {
    const ast = parse(src)
    const v: any = NodePath
    const p = v.get({parent: ast, container: ast, key: 'program'})

    const paths = helper.find(p, types, 'body').getPaths()

    t.true(Array.isArray(paths))
    t.true(paths.length === 1)

    t.true(Array.isArray(paths[0]))
    t.true(paths[0].length === 1)
    const {node} = paths[0][0]
    t.true(node.type === 'ExpressionStatement')
})

test('', t => {
    const ast = parse(src)
    const v: any = NodePath
    const p = v.get({parent: ast, container: ast, key: 'program'})

    const paths = helper.find(p, types, 'body.0').getPaths()

    t.true(Array.isArray(paths))
    t.true(paths.length === 1)

    t.true(!Array.isArray(paths[0]))
    const {node} = paths[0] as NodePath
    t.true(node.type === 'ExpressionStatement')
})

test('', t => {
    const ast = parse(src)
    const v: any = NodePath
    const p = v.get({parent: ast, container: ast, key: 'program'})

    const paths = helper.find(p, types, 'body.0.expression').getPaths()

    t.true(Array.isArray(paths))
    t.true(paths.length === 1)

    t.true(!Array.isArray(paths[0]))
    const {node} = paths[0]
    t.true(node.type === 'CallExpression')
})

test('', t => {
    const ast = parse(src)
    const v: any = NodePath
    const p = v.get({parent: ast, container: ast, key: 'program'})

    const paths = helper.find(p, types, 'body.0.expression.callee').getPaths()

    t.true(Array.isArray(paths))
    t.true(paths.length === 1)

    t.true(!Array.isArray(paths[0]))
    const {node} = paths[0]
    t.true(node.type === 'Identifier')
    t.true(node.name === 'defineType')
})

test('', t => {
    const ast = parse(src)
    const v: any = NodePath
    const p = v.get({parent: ast, container: ast, key: 'program'})

    const paths = helper.find(p, types, 'body.0.expression.callee', [null, 'ExpressionStatement', 'CallExpression', 'Identifier']).getPaths()

    t.true(Array.isArray(paths))
    t.true(paths.length === 1)

    t.true(!Array.isArray(paths[0]))
    const {node} = paths[0]
    t.true(node.type === 'Identifier')
    t.true(node.name === 'defineType')
})

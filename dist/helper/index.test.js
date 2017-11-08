"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const babylon_1 = require("babylon");
const babel_traverse_1 = require("babel-traverse");
const types = require("babel-types");
const index_1 = require("./index");
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
`;
ava_1.default('', t => {
    const ast = babylon_1.parse(src);
    const v = babel_traverse_1.NodePath;
    const p = v.get({ parent: ast, container: ast, key: 'program' });
    const paths = index_1.helper.find(p, types, 'body').getPaths();
    t.true(Array.isArray(paths));
    t.true(paths.length === 1);
    t.true(Array.isArray(paths[0]));
    t.true(paths[0].length === 1);
    const { node } = paths[0][0];
    t.true(node.type === 'ExpressionStatement');
});
ava_1.default('', t => {
    const ast = babylon_1.parse(src);
    const v = babel_traverse_1.NodePath;
    const p = v.get({ parent: ast, container: ast, key: 'program' });
    const paths = index_1.helper.find(p, types, 'body.0').getPaths();
    t.true(Array.isArray(paths));
    t.true(paths.length === 1);
    t.true(!Array.isArray(paths[0]));
    const { node } = paths[0];
    t.true(node.type === 'ExpressionStatement');
});
ava_1.default('', t => {
    const ast = babylon_1.parse(src);
    const v = babel_traverse_1.NodePath;
    const p = v.get({ parent: ast, container: ast, key: 'program' });
    const paths = index_1.helper.find(p, types, 'body.0.expression').getPaths();
    t.true(Array.isArray(paths));
    t.true(paths.length === 1);
    t.true(!Array.isArray(paths[0]));
    const { node } = paths[0];
    t.true(node.type === 'CallExpression');
});
ava_1.default('', t => {
    const ast = babylon_1.parse(src);
    const v = babel_traverse_1.NodePath;
    const p = v.get({ parent: ast, container: ast, key: 'program' });
    const paths = index_1.helper.find(p, types, 'body.0.expression.callee').getPaths();
    t.true(Array.isArray(paths));
    t.true(paths.length === 1);
    t.true(!Array.isArray(paths[0]));
    const { node } = paths[0];
    t.true(node.type === 'Identifier');
    t.true(node.name === 'defineType');
});
ava_1.default('', t => {
    const ast = babylon_1.parse(src);
    const v = babel_traverse_1.NodePath;
    const p = v.get({ parent: ast, container: ast, key: 'program' });
    const paths = index_1.helper.find(p, types, 'body.0.expression.callee', [null, 'ExpressionStatement', 'CallExpression', 'Identifier']).getPaths();
    t.true(Array.isArray(paths));
    t.true(paths.length === 1);
    t.true(!Array.isArray(paths[0]));
    const { node } = paths[0];
    t.true(node.type === 'Identifier');
    t.true(node.name === 'defineType');
});
//# sourceMappingURL=index.test.js.map
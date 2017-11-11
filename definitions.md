## ArrayExpression

### aliases

Expression

## AssignmentExpression

### aliases

Expression
### properties

  * operator: string
  * left: LVal
  * right: Expression

### example
```js
t.assignmentExpression('string', t.identifier('lval'), t.identifier('expr'))
```

```json
{
  "type": "AssignmentExpression",
  "operator": "string",
  "left": {
    "type": "Identifier",
    "name": "lval"
  },
  "right": {
    "type": "Identifier",
    "name": "expr"
  }
}
```


```js
lval string expr
```


## BinaryExpression

### aliases

Binary, Expression
### properties

  * operator: BINARY_OPERATORS
  * left: Expression
  * right: Expression

### example
```js
t.binaryExpression('+', t.identifier('expr'), t.identifier('expr'))
```

```json
{
  "type": "BinaryExpression",
  "operator": "+",
  "left": {
    "type": "Identifier",
    "name": "expr"
  },
  "right": {
    "type": "Identifier",
    "name": "expr"
  }
}
```


```js
expr + expr
```


## Directive


## DirectiveLiteral

### properties

  * value: string

### example
```js
t.directiveLiteral('string')
```

```json
{
  "type": "DirectiveLiteral",
  "value": "string"
}
```


```js
"string"
```


## BlockStatement

### aliases

Scopable, BlockParent, Block, Statement
### properties

  * body: Statement
  * directives: Directive

### example
```js
t.blockStatement([t.returnStatement(t.identifier('statement'))], [])
```

```json
{
  "type": "BlockStatement",
  "body": [
    {
      "type": "ReturnStatement",
      "argument": {
        "type": "Identifier",
        "name": "statement"
      }
    }
  ],
  "directives": []
}
```


```js
{
  return statement;
}
```


## BreakStatement

### aliases

Statement, Terminatorless, CompletionStatement

## CallExpression

### aliases

Expression
### properties

  * callee: Expression
  * arguments: Expression,SpreadElement,JSXNamespacedName

### example
```js
t.callExpression(t.identifier('expr'), [t.identifier('expr')])
```

```json
{
  "type": "CallExpression",
  "callee": {
    "type": "Identifier",
    "name": "expr"
  },
  "arguments": [
    {
      "type": "Identifier",
      "name": "expr"
    }
  ]
}
```


```js
expr(expr)
```


## CatchClause

### aliases

Scopable, BlockParent

## ConditionalExpression

### aliases

Expression, Conditional

## ContinueStatement

### aliases

Statement, Terminatorless, CompletionStatement

## DebuggerStatement

### aliases

Statement

## DoWhileStatement

### aliases

Statement, BlockParent, Loop, While, Scopable

## EmptyStatement

### aliases

Statement

## ExpressionStatement

### aliases

Statement, ExpressionWrapper

## File

### properties

  * program: Program

### example
```js
t.file(t.program([]))
```

```json
{
  "type": "File",
  "program": {
    "type": "Program",
    "body": [],
    "directives": [],
    "sourceType": "script"
  },
  "comments": null,
  "tokens": null
}
```


```js

```


## ForInStatement

### aliases

Scopable, Statement, For, BlockParent, Loop, ForXStatement

## ForStatement

### aliases

Scopable, Statement, For, BlockParent, Loop

## FunctionDeclaration

### aliases

Scopable, Function, BlockParent, FunctionParent, Statement, Pureish, Declaration
### properties

  * id: Identifier
  * params: LVal
  * body: BlockStatement
  * generator: boolean
  * async: boolean

### example
```js
t.functionDeclaration(t.identifier('identifier'), [t.identifier('lval')], t.blockStatement([]), false, false)
```

```json
{
  "type": "FunctionDeclaration",
  "id": {
    "type": "Identifier",
    "name": "identifier"
  },
  "params": [
    {
      "type": "Identifier",
      "name": "lval"
    }
  ],
  "body": {
    "type": "BlockStatement",
    "body": [],
    "directives": []
  },
  "generator": false,
  "async": false
}
```


```js
function identifier(lval) {}
```


## FunctionExpression

### aliases

Scopable, Function, BlockParent, FunctionParent, Expression, Pureish

## Identifier


## IfStatement

### aliases

Statement, Conditional

## LabeledStatement

### aliases

Statement

## StringLiteral

### aliases

Expression, Pureish, Literal, Immutable
### properties

  * value: string

### example
```js
t.stringLiteral('string')
```

```json
{
  "type": "StringLiteral",
  "value": "string"
}
```


```js
"string"
```


## NumericLiteral

### aliases

Expression, Pureish, Literal, Immutable
### properties

  * value: number

### example
```js
t.numericLiteral(42)
```

```json
{
  "type": "NumericLiteral",
  "value": 42
}
```


```js
42
```


## NullLiteral

### aliases

Expression, Pureish, Literal, Immutable

## BooleanLiteral

### aliases

Expression, Pureish, Literal, Immutable
### properties

  * value: boolean

### example
```js
t.booleanLiteral(true)
```

```json
{
  "type": "BooleanLiteral",
  "value": true
}
```


```js
true
```


## RegExpLiteral

### aliases

Expression, Literal
### properties

  * pattern: string
  * flags: string

### example
```js
t.regExpLiteral('string', "")
```

```json
{
  "type": "RegExpLiteral",
  "pattern": "string",
  "flags": ""
}
```


```js
/string/
```


## LogicalExpression

### aliases

Binary, Expression
### properties

  * operator: LOGICAL_OPERATORS
  * left: Expression
  * right: Expression

### example
```js
t.logicalExpression('&&', t.identifier('expr'), t.identifier('expr'))
```

```json
{
  "type": "LogicalExpression",
  "operator": "&&",
  "left": {
    "type": "Identifier",
    "name": "expr"
  },
  "right": {
    "type": "Identifier",
    "name": "expr"
  }
}
```


```js
expr && expr
```


## MemberExpression

### aliases

Expression, LVal
### properties

  * object: Expression
  * property: 
  * computed: 
  * optional: true,false

### example
```js
t.memberExpression(t.identifier('expr'), t.identifier('identifier'), false, true)
```

```json
{
  "type": "MemberExpression",
  "object": {
    "type": "Identifier",
    "name": "expr"
  },
  "property": {
    "type": "Identifier",
    "name": "identifier"
  },
  "computed": false,
  "optional": true
}
```


```js
expr?.identifier
```


## NewExpression


## Program

### aliases

Scopable, BlockParent, Block
### properties

  * body: Statement
  * directives: Directive
  * sourceType: script,module

### example
```js
t.program([t.returnStatement(t.identifier('statement'))], [], "script")
```

```json
{
  "type": "Program",
  "body": [
    {
      "type": "ReturnStatement",
      "argument": {
        "type": "Identifier",
        "name": "statement"
      }
    }
  ],
  "directives": [],
  "sourceType": "script"
}
```


```js
return statement;
```


## ObjectExpression

### aliases

Expression

## ObjectMethod

### aliases

UserWhitespacable, Function, Scopable, BlockParent, FunctionParent, Method, ObjectMember
### properties

  * kind: method,get,set
  * key: 
  * params: LVal
  * body: BlockStatement
  * computed: boolean

### example
```js
t.objectMethod("method", t.identifier('identifier'), [t.identifier('lval')], t.blockStatement([]), false)
```

```json
{
  "type": "ObjectMethod",
  "kind": "method",
  "key": {
    "type": "Identifier",
    "name": "identifier"
  },
  "params": [
    {
      "type": "Identifier",
      "name": "lval"
    }
  ],
  "body": {
    "type": "BlockStatement",
    "body": [],
    "directives": []
  },
  "computed": false
}
```


```js
identifier(lval) {}
```


## ObjectProperty

### aliases

UserWhitespacable, Property, ObjectMember
### properties

  * key: 
  * value: Expression,PatternLike
  * computed: boolean
  * shorthand: boolean
  * decorators: Decorator

### example
```js
t.objectProperty(t.identifier('identifier'), t.identifier('expr'), false, false, )
```

```json
{
  "type": "ObjectProperty",
  "key": {
    "type": "Identifier",
    "name": "identifier"
  },
  "value": {
    "type": "Identifier",
    "name": "expr"
  },
  "computed": false,
  "shorthand": false,
  "decorators": null
}
```


```js
identifier: expr
```


## RestElement

### aliases

LVal, PatternLike
### properties

  * argument: LVal

### example
```js
t.restElement(t.identifier('lval'))
```

```json
{
  "type": "RestElement",
  "argument": {
    "type": "Identifier",
    "name": "lval"
  }
}
```


```js
...lval
```


## ReturnStatement

### aliases

Statement, Terminatorless, CompletionStatement

## SequenceExpression

### aliases

Expression

## SwitchCase


## SwitchStatement

### aliases

Statement, BlockParent, Scopable

## ThisExpression

### aliases

Expression

## ThrowStatement

### aliases

Statement, Terminatorless, CompletionStatement

## TryStatement

### aliases

Statement

## UnaryExpression

### aliases

UnaryLike, Expression
### properties

  * operator: UNARY_OPERATORS
  * argument: Expression
  * prefix: 

### example
```js
t.unaryExpression('!', t.identifier('expr'), true)
```

```json
{
  "type": "UnaryExpression",
  "operator": "!",
  "argument": {
    "type": "Identifier",
    "name": "expr"
  },
  "prefix": true
}
```


```js
!expr
```


## UpdateExpression

### aliases

Expression
### properties

  * operator: UPDATE_OPERATORS
  * argument: Expression
  * prefix: 

### example
```js
t.updateExpression('++', t.identifier('expr'), false)
```

```json
{
  "type": "UpdateExpression",
  "operator": "++",
  "argument": {
    "type": "Identifier",
    "name": "expr"
  },
  "prefix": false
}
```


```js
expr++
```


## VariableDeclaration

### aliases

Statement, Declaration
### properties

  * kind: var,let,const
  * declarations: VariableDeclarator

### example
```js
t.variableDeclaration('var', [t.variableDeclarator(t.identifier('hoge'), t.numericLiteral(1))])
```

```json
{
  "type": "VariableDeclaration",
  "kind": "var",
  "declarations": [
    {
      "type": "VariableDeclarator",
      "id": {
        "type": "Identifier",
        "name": "hoge"
      },
      "init": {
        "type": "NumericLiteral",
        "value": 1
      }
    }
  ]
}
```


```js
var hoge = 1;
```


## VariableDeclarator


## WhileStatement

### aliases

Statement, BlockParent, Loop, While, Scopable

## WithStatement

### aliases

Statement



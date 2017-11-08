## Expression

### ArrayExpression (ECMAScript®2017)

* elements (null \| Expression \| SpreadElement)

### AssignmentExpression (ECMAScript®2017)

* operator (string)
* left (LVal)
* right (Expression)

### BinaryExpression (ECMAScript®2017)

* operator (BINARY_OPERATORS)
* left (Expression)
* right (Expression)

### CallExpression (ECMAScript®2017)

* callee (Expression)
* arguments (Expression \| SpreadElement \| JSXNamespacedName)
* typeParameters (TypeParameterInstantiation)
* optional (true \| false)

### ConditionalExpression (ECMAScript®2017)

* test (Expression)
* consequent (Expression)
* alternate (Expression)

### FunctionExpression (ECMAScript®2017)

* params (LVal)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* id (Identifier)
* body (BlockStatement)

### StringLiteral (ECMAScript®2017)

* value (string)

### NumericLiteral (ECMAScript®2017)

* value (number)

### NullLiteral (ECMAScript®2017)


### BooleanLiteral (ECMAScript®2017)

* value (boolean)

### RegExpLiteral (ECMAScript®2017)

* pattern (string)
* flags (string)

### LogicalExpression (ECMAScript®2017)

* operator (LOGICAL_OPERATORS)
* left (Expression)
* right (Expression)

### MemberExpression (ECMAScript®2017)

* object (Expression)
* property 
* computed 
* optional (true \| false)

### ObjectExpression (ECMAScript®2017)

* properties (ObjectMethod \| ObjectProperty \| SpreadElement)

### SequenceExpression (ECMAScript®2017)

* expressions (Expression)

### ThisExpression (ECMAScript®2017)


### UnaryExpression (ECMAScript®2017)

* operator (UNARY_OPERATORS)
* argument (Expression)
* prefix 

### UpdateExpression (ECMAScript®2017)

* operator (UPDATE_OPERATORS)
* argument (Expression)
* prefix 

### ArrowFunctionExpression (ECMAScript®2017)

* params 
* body (BlockStatement \| Expression)
* async 
* returnType 
* typeParameters 
* expression (boolean)

### ClassExpression (ECMAScript®2017)

* typeParameters (TypeParameterDeclaration \| Noop)
* body (ClassBody)(ClassBody)
* superClass (Expression)(Expression)
* superTypeParameters (TypeParameterInstantiation)
* implements (TSExpressionWithTypeArguments \| FlowClassImplements)
* id (Identifier)
* decorators (Decorator)

### MetaProperty (ECMAScript®2017)

* meta (Identifier)
* property (Identifier)

### Super (ECMAScript®2017)


### TaggedTemplateExpression (ECMAScript®2017)

* tag (Expression)
* quasi (TemplateLiteral)

### TemplateLiteral (ECMAScript®2017)

* quasis (TemplateElement)
* expressions (Expression)

### YieldExpression (ECMAScript®2017)

* argument (Expression)
* delegate (boolean)

### AwaitExpression (experimental)

* argument (Expression)

### BindExpression (experimental)

* object 
* callee 

### Import (experimental)


### DoExpression (experimental)

* body (BlockStatement)

### TypeCastExpression (flow)

* expression 
* typeAnnotation 

### JSXElement (jsx)

* openingElement (JSXOpeningElement)
* closingElement (JSXClosingElement)
* children (JSXText \| JSXExpressionContainer \| JSXSpreadChild \| JSXElement \| JSXFragment)
* selfClosing 

### JSXEmptyExpression (jsx)


### JSXIdentifier (jsx)

* name (string)

### JSXMemberExpression (jsx)

* object (JSXMemberExpression \| JSXIdentifier)
* property (JSXIdentifier)

### JSXFragment (jsx)

* openingFragment (JSXOpeningFragment)
* closingFragment (JSXClosingFragment)
* children (JSXText \| JSXExpressionContainer \| JSXSpreadChild \| JSXElement \| JSXFragment)

### TSAsExpression (typescript)

* expression 
* typeAnnotation 

### TSTypeAssertion (typescript)

* typeAnnotation 
* expression 

### TSNonNullExpression (typescript)

* expression 

## Binary

### BinaryExpression (ECMAScript®2017)

* operator (BINARY_OPERATORS)
* left (Expression)
* right (Expression)

### LogicalExpression (ECMAScript®2017)

* operator (LOGICAL_OPERATORS)
* left (Expression)
* right (Expression)

## Scopable

### BlockStatement (ECMAScript®2017)

* body (Statement)
* directives (Directive)

### CatchClause (ECMAScript®2017)

* param (Identifier)
* body (BlockStatement)

### DoWhileStatement (ECMAScript®2017)

* test (Expression)
* body (Statement)

### ForInStatement (ECMAScript®2017)

* left (VariableDeclaration \| LVal)
* right (Expression)
* body (Statement)

### ForStatement (ECMAScript®2017)

* init (VariableDeclaration \| Expression)
* test (Expression)
* update (Expression)
* body (Statement)

### FunctionDeclaration (ECMAScript®2017)

* id (Identifier)
* params (LVal)
* body (BlockStatement)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* declare (boolean)

### FunctionExpression (ECMAScript®2017)

* params (LVal)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* id (Identifier)
* body (BlockStatement)

### Program (ECMAScript®2017)

* directives (Directive)
* body (Statement)
* sourceType (script \| module)
* sourceFile (string)

### ObjectMethod (ECMAScript®2017)

* kind (method \| get \| set)
* key 
* params (LVal)
* body (BlockStatement)
* computed (boolean)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* decorators (Decorator)

### SwitchStatement (ECMAScript®2017)

* discriminant (Expression)
* cases (SwitchCase)

### WhileStatement (ECMAScript®2017)

* test (Expression)
* body (BlockStatement \| Statement)

### ArrowFunctionExpression (ECMAScript®2017)

* params 
* body (BlockStatement \| Expression)
* async 
* returnType 
* typeParameters 
* expression (boolean)

### ClassDeclaration (ECMAScript®2017)

* id (Identifier)
* superClass (Expression)
* body (ClassBody)
* decorators (Decorator)
* mixins 
* typeParameters (TypeParameterDeclaration \| Noop)
* superTypeParameters (TypeParameterInstantiation)
* implements (TSExpressionWithTypeArguments \| FlowClassImplements)
* declare (boolean)
* abstract (boolean)

### ClassExpression (ECMAScript®2017)

* typeParameters (TypeParameterDeclaration \| Noop)
* body (ClassBody)(ClassBody)
* superClass (Expression)(Expression)
* superTypeParameters (TypeParameterInstantiation)
* implements (TSExpressionWithTypeArguments \| FlowClassImplements)
* id (Identifier)
* decorators (Decorator)

### ForOfStatement (ECMAScript®2017)

* left (VariableDeclaration \| LVal)
* right (Expression)
* body (Statement)
* await (boolean)

### ClassMethod (ECMAScript®2017)

* kind (get \| set \| method \| constructor)
* key 
* params 
* body (BlockStatement)
* computed (boolean)
* static (boolean)
* decorators (Decorator)
* returnType 
* typeParameters 
* abstract (boolean)
* accessibility (public \| private \| protected)
* optional (boolean)
* access (public \| private \| protected)

## BlockParent

### BlockStatement (ECMAScript®2017)

* body (Statement)
* directives (Directive)

### CatchClause (ECMAScript®2017)

* param (Identifier)
* body (BlockStatement)

### DoWhileStatement (ECMAScript®2017)

* test (Expression)
* body (Statement)

### ForInStatement (ECMAScript®2017)

* left (VariableDeclaration \| LVal)
* right (Expression)
* body (Statement)

### ForStatement (ECMAScript®2017)

* init (VariableDeclaration \| Expression)
* test (Expression)
* update (Expression)
* body (Statement)

### FunctionDeclaration (ECMAScript®2017)

* id (Identifier)
* params (LVal)
* body (BlockStatement)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* declare (boolean)

### FunctionExpression (ECMAScript®2017)

* params (LVal)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* id (Identifier)
* body (BlockStatement)

### Program (ECMAScript®2017)

* directives (Directive)
* body (Statement)
* sourceType (script \| module)
* sourceFile (string)

### ObjectMethod (ECMAScript®2017)

* kind (method \| get \| set)
* key 
* params (LVal)
* body (BlockStatement)
* computed (boolean)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* decorators (Decorator)

### SwitchStatement (ECMAScript®2017)

* discriminant (Expression)
* cases (SwitchCase)

### WhileStatement (ECMAScript®2017)

* test (Expression)
* body (BlockStatement \| Statement)

### ArrowFunctionExpression (ECMAScript®2017)

* params 
* body (BlockStatement \| Expression)
* async 
* returnType 
* typeParameters 
* expression (boolean)

### ForOfStatement (ECMAScript®2017)

* left (VariableDeclaration \| LVal)
* right (Expression)
* body (Statement)
* await (boolean)

### ClassMethod (ECMAScript®2017)

* kind (get \| set \| method \| constructor)
* key 
* params 
* body (BlockStatement)
* computed (boolean)
* static (boolean)
* decorators (Decorator)
* returnType 
* typeParameters 
* abstract (boolean)
* accessibility (public \| private \| protected)
* optional (boolean)
* access (public \| private \| protected)

## Block

### BlockStatement (ECMAScript®2017)

* body (Statement)
* directives (Directive)

### Program (ECMAScript®2017)

* directives (Directive)
* body (Statement)
* sourceType (script \| module)
* sourceFile (string)

## Statement

### BlockStatement (ECMAScript®2017)

* body (Statement)
* directives (Directive)

### BreakStatement (ECMAScript®2017)

* label (Identifier)

### ContinueStatement (ECMAScript®2017)

* label (Identifier)

### DebuggerStatement (ECMAScript®2017)


### DoWhileStatement (ECMAScript®2017)

* test (Expression)
* body (Statement)

### EmptyStatement (ECMAScript®2017)


### ExpressionStatement (ECMAScript®2017)

* expression (Expression)

### ForInStatement (ECMAScript®2017)

* left (VariableDeclaration \| LVal)
* right (Expression)
* body (Statement)

### ForStatement (ECMAScript®2017)

* init (VariableDeclaration \| Expression)
* test (Expression)
* update (Expression)
* body (Statement)

### FunctionDeclaration (ECMAScript®2017)

* id (Identifier)
* params (LVal)
* body (BlockStatement)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* declare (boolean)

### IfStatement (ECMAScript®2017)

* test (Expression)
* consequent (Statement)
* alternate (Statement)

### LabeledStatement (ECMAScript®2017)

* label (Identifier)
* body (Statement)

### ReturnStatement (ECMAScript®2017)

* argument (Expression)

### SwitchStatement (ECMAScript®2017)

* discriminant (Expression)
* cases (SwitchCase)

### ThrowStatement (ECMAScript®2017)

* argument (Expression)

### TryStatement (ECMAScript®2017)

* block (BlockStatement)
* handler (CatchClause)
* finalizer (BlockStatement)

### VariableDeclaration (ECMAScript®2017)

* kind (var \| let \| const)
* declarations (VariableDeclarator)
* declare (boolean)

### WhileStatement (ECMAScript®2017)

* test (Expression)
* body (BlockStatement \| Statement)

### WithStatement (ECMAScript®2017)

* object 
* body (BlockStatement \| Statement)

### ClassDeclaration (ECMAScript®2017)

* id (Identifier)
* superClass (Expression)
* body (ClassBody)
* decorators (Decorator)
* mixins 
* typeParameters (TypeParameterDeclaration \| Noop)
* superTypeParameters (TypeParameterInstantiation)
* implements (TSExpressionWithTypeArguments \| FlowClassImplements)
* declare (boolean)
* abstract (boolean)

### ExportAllDeclaration (ECMAScript®2017)

* source (StringLiteral)

### ExportDefaultDeclaration (ECMAScript®2017)

* declaration (FunctionDeclaration \| TSDeclareFunction \| ClassDeclaration \| Expression)

### ExportNamedDeclaration (ECMAScript®2017)

* declaration (Declaration)
* specifiers (ExportSpecifier \| ExportDefaultSpecifier \| ExportNamespaceSpecifier)
* source (StringLiteral)

### ForOfStatement (ECMAScript®2017)

* left (VariableDeclaration \| LVal)
* right (Expression)
* body (Statement)
* await (boolean)

### ImportDeclaration (ECMAScript®2017)

* specifiers (ImportSpecifier \| ImportDefaultSpecifier \| ImportNamespaceSpecifier)
* source (StringLiteral)

### DeclareClass (flow)

* id 
* typeParameters 
* extends 
* body 

### DeclareFunction (flow)

* id 

### DeclareInterface (flow)

* id 
* typeParameters 
* extends 
* body 

### DeclareModule (flow)

* id 
* body 

### DeclareModuleExports (flow)

* typeAnnotation 

### DeclareTypeAlias (flow)

* id 
* typeParameters 
* right 

### DeclareOpaqueType (flow)

* id 
* typeParameters 
* supertype 

### DeclareVariable (flow)

* id 

### DeclareExportDeclaration (flow)

* declaration 
* specifiers 
* source 

### DeclareExportAllDeclaration (flow)

* source 

### InterfaceDeclaration (flow)

* id 
* typeParameters 
* extends 
* body 

### OpaqueType (flow)

* id 
* typeParameters 
* supertype 
* impltype 

### TypeAlias (flow)

* id 
* typeParameters 
* right 

### TSDeclareFunction (typescript)

* id 
* typeParameters 
* params 
* returnType 

### TSInterfaceDeclaration (typescript)

* id 
* typeParameters 
* extends 
* body 

### TSTypeAliasDeclaration (typescript)

* id 
* typeParameters 
* typeAnnotation 

### TSEnumDeclaration (typescript)

* id 
* members 

### TSModuleDeclaration (typescript)

* id 
* body 

### TSImportEqualsDeclaration (typescript)

* id 
* moduleReference 

### TSExportAssignment (typescript)

* expression 

### TSNamespaceExportDeclaration (typescript)

* id 

## Terminatorless

### BreakStatement (ECMAScript®2017)

* label (Identifier)

### ContinueStatement (ECMAScript®2017)

* label (Identifier)

### ReturnStatement (ECMAScript®2017)

* argument (Expression)

### ThrowStatement (ECMAScript®2017)

* argument (Expression)

### YieldExpression (ECMAScript®2017)

* argument (Expression)
* delegate (boolean)

### AwaitExpression (experimental)

* argument (Expression)

## CompletionStatement

### BreakStatement (ECMAScript®2017)

* label (Identifier)

### ContinueStatement (ECMAScript®2017)

* label (Identifier)

### ReturnStatement (ECMAScript®2017)

* argument (Expression)

### ThrowStatement (ECMAScript®2017)

* argument (Expression)

## Conditional

### ConditionalExpression (ECMAScript®2017)

* test (Expression)
* consequent (Expression)
* alternate (Expression)

### IfStatement (ECMAScript®2017)

* test (Expression)
* consequent (Statement)
* alternate (Statement)

## Loop

### DoWhileStatement (ECMAScript®2017)

* test (Expression)
* body (Statement)

### ForInStatement (ECMAScript®2017)

* left (VariableDeclaration \| LVal)
* right (Expression)
* body (Statement)

### ForStatement (ECMAScript®2017)

* init (VariableDeclaration \| Expression)
* test (Expression)
* update (Expression)
* body (Statement)

### WhileStatement (ECMAScript®2017)

* test (Expression)
* body (BlockStatement \| Statement)

### ForOfStatement (ECMAScript®2017)

* left (VariableDeclaration \| LVal)
* right (Expression)
* body (Statement)
* await (boolean)

## While

### DoWhileStatement (ECMAScript®2017)

* test (Expression)
* body (Statement)

### WhileStatement (ECMAScript®2017)

* test (Expression)
* body (BlockStatement \| Statement)

## ExpressionWrapper

### ExpressionStatement (ECMAScript®2017)

* expression (Expression)

### TypeCastExpression (flow)

* expression 
* typeAnnotation 

## For

### ForInStatement (ECMAScript®2017)

* left (VariableDeclaration \| LVal)
* right (Expression)
* body (Statement)

### ForStatement (ECMAScript®2017)

* init (VariableDeclaration \| Expression)
* test (Expression)
* update (Expression)
* body (Statement)

### ForOfStatement (ECMAScript®2017)

* left (VariableDeclaration \| LVal)
* right (Expression)
* body (Statement)
* await (boolean)

## ForXStatement

### ForInStatement (ECMAScript®2017)

* left (VariableDeclaration \| LVal)
* right (Expression)
* body (Statement)

### ForOfStatement (ECMAScript®2017)

* left (VariableDeclaration \| LVal)
* right (Expression)
* body (Statement)
* await (boolean)

## Function

### FunctionDeclaration (ECMAScript®2017)

* id (Identifier)
* params (LVal)
* body (BlockStatement)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* declare (boolean)

### FunctionExpression (ECMAScript®2017)

* params (LVal)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* id (Identifier)
* body (BlockStatement)

### ObjectMethod (ECMAScript®2017)

* kind (method \| get \| set)
* key 
* params (LVal)
* body (BlockStatement)
* computed (boolean)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* decorators (Decorator)

### ArrowFunctionExpression (ECMAScript®2017)

* params 
* body (BlockStatement \| Expression)
* async 
* returnType 
* typeParameters 
* expression (boolean)

### ClassMethod (ECMAScript®2017)

* kind (get \| set \| method \| constructor)
* key 
* params 
* body (BlockStatement)
* computed (boolean)
* static (boolean)
* decorators (Decorator)
* returnType 
* typeParameters 
* abstract (boolean)
* accessibility (public \| private \| protected)
* optional (boolean)
* access (public \| private \| protected)

## FunctionParent

### FunctionDeclaration (ECMAScript®2017)

* id (Identifier)
* params (LVal)
* body (BlockStatement)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* declare (boolean)

### FunctionExpression (ECMAScript®2017)

* params (LVal)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* id (Identifier)
* body (BlockStatement)

### ObjectMethod (ECMAScript®2017)

* kind (method \| get \| set)
* key 
* params (LVal)
* body (BlockStatement)
* computed (boolean)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* decorators (Decorator)

### ArrowFunctionExpression (ECMAScript®2017)

* params 
* body (BlockStatement \| Expression)
* async 
* returnType 
* typeParameters 
* expression (boolean)

### ClassMethod (ECMAScript®2017)

* kind (get \| set \| method \| constructor)
* key 
* params 
* body (BlockStatement)
* computed (boolean)
* static (boolean)
* decorators (Decorator)
* returnType 
* typeParameters 
* abstract (boolean)
* accessibility (public \| private \| protected)
* optional (boolean)
* access (public \| private \| protected)

## Pureish

### FunctionDeclaration (ECMAScript®2017)

* id (Identifier)
* params (LVal)
* body (BlockStatement)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* declare (boolean)

### FunctionExpression (ECMAScript®2017)

* params (LVal)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* id (Identifier)
* body (BlockStatement)

### StringLiteral (ECMAScript®2017)

* value (string)

### NumericLiteral (ECMAScript®2017)

* value (number)

### NullLiteral (ECMAScript®2017)


### BooleanLiteral (ECMAScript®2017)

* value (boolean)

### ArrowFunctionExpression (ECMAScript®2017)

* params 
* body (BlockStatement \| Expression)
* async 
* returnType 
* typeParameters 
* expression (boolean)

### ClassDeclaration (ECMAScript®2017)

* id (Identifier)
* superClass (Expression)
* body (ClassBody)
* decorators (Decorator)
* mixins 
* typeParameters (TypeParameterDeclaration \| Noop)
* superTypeParameters (TypeParameterInstantiation)
* implements (TSExpressionWithTypeArguments \| FlowClassImplements)
* declare (boolean)
* abstract (boolean)

### ClassExpression (ECMAScript®2017)

* typeParameters (TypeParameterDeclaration \| Noop)
* body (ClassBody)(ClassBody)
* superClass (Expression)(Expression)
* superTypeParameters (TypeParameterInstantiation)
* implements (TSExpressionWithTypeArguments \| FlowClassImplements)
* id (Identifier)
* decorators (Decorator)

## Declaration

### FunctionDeclaration (ECMAScript®2017)

* id (Identifier)
* params (LVal)
* body (BlockStatement)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* declare (boolean)

### VariableDeclaration (ECMAScript®2017)

* kind (var \| let \| const)
* declarations (VariableDeclarator)
* declare (boolean)

### ClassDeclaration (ECMAScript®2017)

* id (Identifier)
* superClass (Expression)
* body (ClassBody)
* decorators (Decorator)
* mixins 
* typeParameters (TypeParameterDeclaration \| Noop)
* superTypeParameters (TypeParameterInstantiation)
* implements (TSExpressionWithTypeArguments \| FlowClassImplements)
* declare (boolean)
* abstract (boolean)

### ExportAllDeclaration (ECMAScript®2017)

* source (StringLiteral)

### ExportDefaultDeclaration (ECMAScript®2017)

* declaration (FunctionDeclaration \| TSDeclareFunction \| ClassDeclaration \| Expression)

### ExportNamedDeclaration (ECMAScript®2017)

* declaration (Declaration)
* specifiers (ExportSpecifier \| ExportDefaultSpecifier \| ExportNamespaceSpecifier)
* source (StringLiteral)

### ImportDeclaration (ECMAScript®2017)

* specifiers (ImportSpecifier \| ImportDefaultSpecifier \| ImportNamespaceSpecifier)
* source (StringLiteral)

### DeclareClass (flow)

* id 
* typeParameters 
* extends 
* body 

### DeclareFunction (flow)

* id 

### DeclareInterface (flow)

* id 
* typeParameters 
* extends 
* body 

### DeclareModule (flow)

* id 
* body 

### DeclareModuleExports (flow)

* typeAnnotation 

### DeclareTypeAlias (flow)

* id 
* typeParameters 
* right 

### DeclareOpaqueType (flow)

* id 
* typeParameters 
* supertype 

### DeclareVariable (flow)

* id 

### DeclareExportDeclaration (flow)

* declaration 
* specifiers 
* source 

### DeclareExportAllDeclaration (flow)

* source 

### InterfaceDeclaration (flow)

* id 
* typeParameters 
* extends 
* body 

### OpaqueType (flow)

* id 
* typeParameters 
* supertype 
* impltype 

### TypeAlias (flow)

* id 
* typeParameters 
* right 

### TSDeclareFunction (typescript)

* id 
* typeParameters 
* params 
* returnType 

### TSInterfaceDeclaration (typescript)

* id 
* typeParameters 
* extends 
* body 

### TSTypeAliasDeclaration (typescript)

* id 
* typeParameters 
* typeAnnotation 

### TSEnumDeclaration (typescript)

* id 
* members 

### TSModuleDeclaration (typescript)

* id 
* body 

## Literal

### StringLiteral (ECMAScript®2017)

* value (string)

### NumericLiteral (ECMAScript®2017)

* value (number)

### NullLiteral (ECMAScript®2017)


### BooleanLiteral (ECMAScript®2017)

* value (boolean)

### RegExpLiteral (ECMAScript®2017)

* pattern (string)
* flags (string)

### TemplateLiteral (ECMAScript®2017)

* quasis (TemplateElement)
* expressions (Expression)

## Immutable

### StringLiteral (ECMAScript®2017)

* value (string)

### NumericLiteral (ECMAScript®2017)

* value (number)

### NullLiteral (ECMAScript®2017)


### BooleanLiteral (ECMAScript®2017)

* value (boolean)

### JSXAttribute (jsx)

* name (JSXIdentifier \| JSXNamespacedName)
* value (JSXElement \| JSXFragment \| StringLiteral \| JSXExpressionContainer)

### JSXClosingElement (jsx)

* name (JSXIdentifier \| JSXMemberExpression)

### JSXElement (jsx)

* openingElement (JSXOpeningElement)
* closingElement (JSXClosingElement)
* children (JSXText \| JSXExpressionContainer \| JSXSpreadChild \| JSXElement \| JSXFragment)
* selfClosing 

### JSXExpressionContainer (jsx)

* expression (Expression)

### JSXSpreadChild (jsx)

* expression (Expression)

### JSXOpeningElement (jsx)

* name (JSXIdentifier \| JSXMemberExpression)
* attributes (JSXAttribute \| JSXSpreadAttribute)
* selfClosing (boolean)

### JSXText (jsx)

* value (string)

### JSXFragment (jsx)

* openingFragment (JSXOpeningFragment)
* closingFragment (JSXClosingFragment)
* children (JSXText \| JSXExpressionContainer \| JSXSpreadChild \| JSXElement \| JSXFragment)

### JSXOpeningFragment (jsx)


### JSXClosingFragment (jsx)


## LVal

### MemberExpression (ECMAScript®2017)

* object (Expression)
* property 
* computed 
* optional (true \| false)

### RestElement (ECMAScript®2017)

* argument (LVal)
* typeAnnotation (TypeAnnotation \| TSTypeAnnotation \| Noop)
* decorators (Decorator)

### AssignmentPattern (ECMAScript®2017)

* left (Identifier \| ObjectPattern \| ArrayPattern)
* right (Expression)
* decorators (Decorator)

### ArrayPattern (ECMAScript®2017)

* elements (PatternLike)
* typeAnnotation 
* decorators (Decorator)

### ObjectPattern (ECMAScript®2017)

* properties (RestElement \| ObjectProperty)
* typeAnnotation 

### TSParameterProperty (typescript)

* parameter (Identifier \| AssignmentPattern)
* accessibility (public \| private \| protected)
* readonly (boolean)

## UserWhitespacable

### ObjectMethod (ECMAScript®2017)

* kind (method \| get \| set)
* key 
* params (LVal)
* body (BlockStatement)
* computed (boolean)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* decorators (Decorator)

### ObjectProperty (ECMAScript®2017)

* key 
* value (Expression \| PatternLike)
* computed (boolean)
* shorthand (boolean)
* decorators (Decorator)

### ObjectTypeCallProperty (flow)

* value 

### ObjectTypeIndexer (flow)

* id 
* key 
* value 

### ObjectTypeProperty (flow)

* key 
* value 

### ObjectTypeSpreadProperty (flow)

* argument 

## Method

### ObjectMethod (ECMAScript®2017)

* kind (method \| get \| set)
* key 
* params (LVal)
* body (BlockStatement)
* computed (boolean)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* decorators (Decorator)

### ClassMethod (ECMAScript®2017)

* kind (get \| set \| method \| constructor)
* key 
* params 
* body (BlockStatement)
* computed (boolean)
* static (boolean)
* decorators (Decorator)
* returnType 
* typeParameters 
* abstract (boolean)
* accessibility (public \| private \| protected)
* optional (boolean)
* access (public \| private \| protected)

## ObjectMember

### ObjectMethod (ECMAScript®2017)

* kind (method \| get \| set)
* key 
* params (LVal)
* body (BlockStatement)
* computed (boolean)
* generator (boolean)
* async (boolean)
* returnType (TypeAnnotation \| TSTypeAnnotation \| Noop)
* typeParameters (TypeParameterDeclaration \| Noop)
* decorators (Decorator)

### ObjectProperty (ECMAScript®2017)

* key 
* value (Expression \| PatternLike)
* computed (boolean)
* shorthand (boolean)
* decorators (Decorator)

## Property

### ObjectProperty (ECMAScript®2017)

* key 
* value (Expression \| PatternLike)
* computed (boolean)
* shorthand (boolean)
* decorators (Decorator)

### ClassProperty (experimental)

* key 
* value (Expression)
* typeAnnotation (TypeAnnotation \| TSTypeAnnotation \| Noop)
* decorators (Decorator)
* computed 
* readonly (boolean)

## PatternLike

### RestElement (ECMAScript®2017)

* argument (LVal)
* typeAnnotation (TypeAnnotation \| TSTypeAnnotation \| Noop)
* decorators (Decorator)

### AssignmentPattern (ECMAScript®2017)

* left (Identifier \| ObjectPattern \| ArrayPattern)
* right (Expression)
* decorators (Decorator)

### ArrayPattern (ECMAScript®2017)

* elements (PatternLike)
* typeAnnotation 
* decorators (Decorator)

### ObjectPattern (ECMAScript®2017)

* properties (RestElement \| ObjectProperty)
* typeAnnotation 

## UnaryLike

### UnaryExpression (ECMAScript®2017)

* operator (UNARY_OPERATORS)
* argument (Expression)
* prefix 

### SpreadElement (ECMAScript®2017)

* argument (Expression)

## Pattern

### AssignmentPattern (ECMAScript®2017)

* left (Identifier \| ObjectPattern \| ArrayPattern)
* right (Expression)
* decorators (Decorator)

### ArrayPattern (ECMAScript®2017)

* elements (PatternLike)
* typeAnnotation 
* decorators (Decorator)

### ObjectPattern (ECMAScript®2017)

* properties (RestElement \| ObjectProperty)
* typeAnnotation 

## Class

### ClassDeclaration (ECMAScript®2017)

* id (Identifier)
* superClass (Expression)
* body (ClassBody)
* decorators (Decorator)
* mixins 
* typeParameters (TypeParameterDeclaration \| Noop)
* superTypeParameters (TypeParameterInstantiation)
* implements (TSExpressionWithTypeArguments \| FlowClassImplements)
* declare (boolean)
* abstract (boolean)

### ClassExpression (ECMAScript®2017)

* typeParameters (TypeParameterDeclaration \| Noop)
* body (ClassBody)(ClassBody)
* superClass (Expression)(Expression)
* superTypeParameters (TypeParameterInstantiation)
* implements (TSExpressionWithTypeArguments \| FlowClassImplements)
* id (Identifier)
* decorators (Decorator)

## ModuleDeclaration

### ExportAllDeclaration (ECMAScript®2017)

* source (StringLiteral)

### ExportDefaultDeclaration (ECMAScript®2017)

* declaration (FunctionDeclaration \| TSDeclareFunction \| ClassDeclaration \| Expression)

### ExportNamedDeclaration (ECMAScript®2017)

* declaration (Declaration)
* specifiers (ExportSpecifier \| ExportDefaultSpecifier \| ExportNamespaceSpecifier)
* source (StringLiteral)

### ImportDeclaration (ECMAScript®2017)

* specifiers (ImportSpecifier \| ImportDefaultSpecifier \| ImportNamespaceSpecifier)
* source (StringLiteral)

## ExportDeclaration

### ExportAllDeclaration (ECMAScript®2017)

* source (StringLiteral)

### ExportDefaultDeclaration (ECMAScript®2017)

* declaration (FunctionDeclaration \| TSDeclareFunction \| ClassDeclaration \| Expression)

### ExportNamedDeclaration (ECMAScript®2017)

* declaration (Declaration)
* specifiers (ExportSpecifier \| ExportDefaultSpecifier \| ExportNamespaceSpecifier)
* source (StringLiteral)

## ModuleSpecifier

### ExportSpecifier (ECMAScript®2017)

* local (Identifier)
* exported (Identifier)

### ImportDefaultSpecifier (ECMAScript®2017)

* local (Identifier)

### ImportNamespaceSpecifier (ECMAScript®2017)

* local (Identifier)

### ImportSpecifier (ECMAScript®2017)

* local (Identifier)
* imported (Identifier)
* importKind ( \| type \| typeof)

### ExportDefaultSpecifier (experimental)

* exported (Identifier)

### ExportNamespaceSpecifier (experimental)

* exported (Identifier)

## Flow

### AnyTypeAnnotation (flow)


### ArrayTypeAnnotation (flow)

* elementType 

### BooleanTypeAnnotation (flow)


### BooleanLiteralTypeAnnotation (flow)


### NullLiteralTypeAnnotation (flow)


### ClassImplements (flow)

* id 
* typeParameters 

### DeclareClass (flow)

* id 
* typeParameters 
* extends 
* body 

### DeclareFunction (flow)

* id 

### DeclareInterface (flow)

* id 
* typeParameters 
* extends 
* body 

### DeclareModule (flow)

* id 
* body 

### DeclareModuleExports (flow)

* typeAnnotation 

### DeclareTypeAlias (flow)

* id 
* typeParameters 
* right 

### DeclareOpaqueType (flow)

* id 
* typeParameters 
* supertype 

### DeclareVariable (flow)

* id 

### DeclareExportDeclaration (flow)

* declaration 
* specifiers 
* source 

### DeclareExportAllDeclaration (flow)

* source 

### DeclaredPredicate (flow)

* value 

### ExistsTypeAnnotation (flow)


### FunctionTypeAnnotation (flow)

* typeParameters 
* params 
* rest 
* returnType 

### FunctionTypeParam (flow)

* name 
* typeAnnotation 

### GenericTypeAnnotation (flow)

* id 
* typeParameters 

### InferredPredicate (flow)


### InterfaceExtends (flow)

* id 
* typeParameters 

### InterfaceDeclaration (flow)

* id 
* typeParameters 
* extends 
* body 

### IntersectionTypeAnnotation (flow)

* types 

### MixedTypeAnnotation (flow)


### EmptyTypeAnnotation (flow)


### NullableTypeAnnotation (flow)

* typeAnnotation 

### NumberLiteralTypeAnnotation (flow)


### NumberTypeAnnotation (flow)


### ObjectTypeAnnotation (flow)

* properties 
* indexers 
* callProperties 

### ObjectTypeCallProperty (flow)

* value 

### ObjectTypeIndexer (flow)

* id 
* key 
* value 

### ObjectTypeProperty (flow)

* key 
* value 

### ObjectTypeSpreadProperty (flow)

* argument 

### OpaqueType (flow)

* id 
* typeParameters 
* supertype 
* impltype 

### QualifiedTypeIdentifier (flow)

* id 
* qualification 

### StringLiteralTypeAnnotation (flow)


### StringTypeAnnotation (flow)


### ThisTypeAnnotation (flow)


### TupleTypeAnnotation (flow)

* types 

### TypeofTypeAnnotation (flow)

* argument 

### TypeAlias (flow)

* id 
* typeParameters 
* right 

### TypeAnnotation (flow)

* typeAnnotation (Flow)

### TypeCastExpression (flow)

* expression 
* typeAnnotation 

### TypeParameter (flow)

* bound (TypeAnnotation)
* default (Flow)
* name (string)

### TypeParameterDeclaration (flow)

* params (TypeParameter)

### TypeParameterInstantiation (flow)

* params (Flow)

### UnionTypeAnnotation (flow)

* types 

### VoidTypeAnnotation (flow)


## FlowBaseAnnotation

### AnyTypeAnnotation (flow)


### BooleanTypeAnnotation (flow)


### NullLiteralTypeAnnotation (flow)


### MixedTypeAnnotation (flow)


### EmptyTypeAnnotation (flow)


### NumberTypeAnnotation (flow)


### StringTypeAnnotation (flow)


### ThisTypeAnnotation (flow)


### VoidTypeAnnotation (flow)


## FlowDeclaration

### DeclareClass (flow)

* id 
* typeParameters 
* extends 
* body 

### DeclareFunction (flow)

* id 

### DeclareInterface (flow)

* id 
* typeParameters 
* extends 
* body 

### DeclareModule (flow)

* id 
* body 

### DeclareModuleExports (flow)

* typeAnnotation 

### DeclareTypeAlias (flow)

* id 
* typeParameters 
* right 

### DeclareOpaqueType (flow)

* id 
* typeParameters 
* supertype 

### DeclareVariable (flow)

* id 

### DeclareExportDeclaration (flow)

* declaration 
* specifiers 
* source 

### DeclareExportAllDeclaration (flow)

* source 

### InterfaceDeclaration (flow)

* id 
* typeParameters 
* extends 
* body 

### OpaqueType (flow)

* id 
* typeParameters 
* supertype 
* impltype 

### TypeAlias (flow)

* id 
* typeParameters 
* right 

## FlowPredicate

### DeclaredPredicate (flow)

* value 

### InferredPredicate (flow)


## JSX

### JSXAttribute (jsx)

* name (JSXIdentifier \| JSXNamespacedName)
* value (JSXElement \| JSXFragment \| StringLiteral \| JSXExpressionContainer)

### JSXClosingElement (jsx)

* name (JSXIdentifier \| JSXMemberExpression)

### JSXElement (jsx)

* openingElement (JSXOpeningElement)
* closingElement (JSXClosingElement)
* children (JSXText \| JSXExpressionContainer \| JSXSpreadChild \| JSXElement \| JSXFragment)
* selfClosing 

### JSXEmptyExpression (jsx)


### JSXExpressionContainer (jsx)

* expression (Expression)

### JSXSpreadChild (jsx)

* expression (Expression)

### JSXIdentifier (jsx)

* name (string)

### JSXMemberExpression (jsx)

* object (JSXMemberExpression \| JSXIdentifier)
* property (JSXIdentifier)

### JSXNamespacedName (jsx)

* namespace (JSXIdentifier)
* name (JSXIdentifier)

### JSXOpeningElement (jsx)

* name (JSXIdentifier \| JSXMemberExpression)
* attributes (JSXAttribute \| JSXSpreadAttribute)
* selfClosing (boolean)

### JSXSpreadAttribute (jsx)

* argument (Expression)

### JSXText (jsx)

* value (string)

### JSXFragment (jsx)

* openingFragment (JSXOpeningFragment)
* closingFragment (JSXClosingFragment)
* children (JSXText \| JSXExpressionContainer \| JSXSpreadChild \| JSXElement \| JSXFragment)

### JSXOpeningFragment (jsx)


### JSXClosingFragment (jsx)


## TSEntityName

### TSQualifiedName (typescript)

* left 
* right 

## TSTypeElement

### TSPropertySignature (typescript)

* key 
* typeAnnotation 
* initializer 

### TSMethodSignature (typescript)

* key 
* typeParameters 
* parameters 
* typeAnnotation 

### TSIndexSignature (typescript)

* parameters 
* typeAnnotation 

## TSType

### TSAnyKeyword (typescript)


### TSNumberKeyword (typescript)


### TSObjectKeyword (typescript)


### TSBooleanKeyword (typescript)


### TSStringKeyword (typescript)


### TSSymbolKeyword (typescript)


### TSVoidKeyword (typescript)


### TSUndefinedKeyword (typescript)


### TSNullKeyword (typescript)


### TSNeverKeyword (typescript)


### TSThisType (typescript)


### TSTypeReference (typescript)

* typeName 
* typeParameters 

### TSTypePredicate (typescript)

* parameterName 
* typeAnnotation 

### TSTypeQuery (typescript)

* exprName 

### TSTypeLiteral (typescript)

* members 

### TSArrayType (typescript)

* elementType 

### TSTupleType (typescript)

* elementTypes 

### TSParenthesizedType (typescript)

* typeAnnotation 

### TSTypeOperator (typescript)

* typeAnnotation 

### TSIndexedAccessType (typescript)

* objectType 
* indexType 

### TSMappedType (typescript)

* typeParameter 
* typeAnnotation 

### TSLiteralType (typescript)

* literal 

### TSExpressionWithTypeArguments (typescript)

* expression 
* typeParameters 



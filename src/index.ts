const fs = require('fs')
const path = require('path')
const assert = require('assert')

const generate = require('@babel/generator').default

const {getDefines} = require('./get-defines')


const definitions = []
const aliases = {}

fs.readdirSync('definitions').forEach(filename => {
    const src = fs.readFileSync(path.join('definitions', filename)).toString()
    getDefines(src, filename).forEach(def => {
        definitions.push(def)
        if (def.aliases) {
            def.aliases.forEach(alias => {
                if (!(alias in aliases)) {
                    aliases[alias] = []
                }
                aliases[alias].push(def)
            })
        }
    })
})

let markdownText = ''

// Object.keys(aliases).forEach(key => {
//     markdownText += `## ${key}\n\n`

//     aliases[key].forEach(def => {
//         const where = def.where.replace('.js', '').replace(/(core|es2015)/, 'ECMAScript®2017')
//         markdownText += `### ${def.name}\n\n`
//         markdownText += `${where}  ${def.builder}\n\n`
//         Object.keys(def.props).forEach(key => {
//             markdownText += `* ${key}`
//             const v = def.props[key].validate
//             if (v) {
//                 if (Array.isArray(v.s)) {
//                     markdownText += `(${v.s.join(' \\| ')})`
//                 } else {
//                     markdownText += `(${v.s})`
//                 }
//             }
//             markdownText += '\n'
//         })
//         markdownText += '\n'
//     })
// })

definitions.forEach(def => {
    if (def.where !== 'core.js') {
        return
    }
    const apiName = `t.${def.name.substr(0, 1).toLowerCase()}${def.name.substr(1)}`

    markdownText += `## ${def.name}\n`
    markdownText += `\n`
    if (def.aliases) {
        markdownText += `### aliases\n\n`
        markdownText += `${def.aliases.join(', ')}\n`
    }

    if (!def.builder) {
        markdownText += '\n'
        return
    }

    // FIXME 表にする
    // builderに含まれてないプロパティを…

    markdownText += '### properties\n\n'
    const props = def.builder
        .filter(key => def.props[key])
        .map(key => {
            const prop = def.props[key]
            markdownText += `  * ${key}: `
            if (prop.validate) {
                markdownText += `${prop.validate.s}`
            }
            markdownText += '\n'
            if (def.props[key].default) {
                return generate(def.props[key].default).code
            } else {
                if (!def.props[key].validate) {
                    if (def.name === 'MemberExpression' && key === 'property') {
                        return `t.identifier('identifier')`
                    }
                    if (def.name === 'ObjectMethod' && key === 'key') {
                        return `t.identifier('identifier')`
                    }
                    if (def.name === 'ObjectProperty' && key === 'key') {
                        return `t.identifier('identifier')`
                    }
                    console.log(1, def.name, key)
                }
                if (typeof def.props[key].validate.getSampleNode !== 'function') {
                    console.log(2, def.name, key)
                }
                return def.props[key].validate.getSampleNode()
            }
        })
        .join(', ')

    markdownText += '\n'

    const sourceCode = `${apiName}(${props})`

    // console.log(sourceCode)

    const node = eval(`
    const t = require('@babel/types')
    ${sourceCode}
    `)

    // console.log(generate(node).code)

    markdownText += `### example\n`
    markdownText += '```js\n'
    markdownText += `${sourceCode}\n`
    markdownText += '```\n'
    markdownText += '\n'

    markdownText += '```json\n'
    markdownText += `${JSON.stringify(node, null, '  ')}\n`
    markdownText += '```\n'
    markdownText += '\n'
    markdownText += '\n'

    markdownText += '```js\n'
    markdownText += `${generate(node).code}\n`
    markdownText += '```\n'
    markdownText += '\n'
    markdownText += '\n'
})

console.log(markdownText)

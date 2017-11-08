const fs = require('fs')
const path = require('path')
const assert = require('assert')

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

const sources = ['ecma-262', 'experimental', 'flow', 'jsx', 'typescript']

const defToMarkdown = (def) => {
    const props = Object.keys(def.props).map(key => {
        // console.log(def.props[key2].validate)
        const validate = def.props[key].validate.map(v => {
            if (!v) {
                return ''
            }
            if (Array.isArray(v.s)) {
                return v.s.join('\\|')
            } else {
                return v.s
            }
        }).join(', ')
        if (validate) {
            return `${key} (${validate})`
        }
        return `${key}`
    }).join(', ')
    if (props) {
        text += `${def.name} | ${props}\n`
    }
}

let markdownText = ''

Object.keys(aliases).forEach(key => {
    markdownText += `## ${key}\n\n`

    aliases[key].forEach(def => {
        const where = def.where.replace('.js', '').replace(/(core|es2015)/, 'ECMAScript®2017')
        markdownText += `### ${def.name} (${where})\n\n`
        Object.keys(def.props).forEach(key => {
            markdownText += `* ${key} `
            def.props[key].validate.forEach(v => {
                if (Array.isArray(v.s)) {
                    markdownText += `(${v.s.join(' \\| ')})`
                } else {
                    markdownText += `(${v.s})`
                }
            })
            markdownText += '\n'
        })
        markdownText += '\n'
    })
})

console.log(markdownText)

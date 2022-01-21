const postcssNesting = require('postcss-nesting')
const postcssImport = require('postcss-import')

module.exports = {
    plugins: [
        postcssImport({ path: ['src'] }),
        postcssNesting(),
    ]
}
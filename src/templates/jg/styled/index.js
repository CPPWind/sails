/* required values:
      name
      partPath
      partClass
      cssFile
      cssPath
      cssSelector
*/

const cc = require('change-case')
const srcPath = require(process.cwd() + '/.generators').helpers.srcPath

const CSS_FILE_NAME = 'styles.module.css'

module.exports = {
  params: ({ args }) => {
    // make the canonical Part name
    const pascal = cc.pascal(args.name)
    const camel = cc.camel(pascal)

    args.componentPath = srcPath('components', pascal, 'index.js')

    args.componentName = pascal
    args.cssFile = './' + CSS_FILE_NAME
    args.cssPath = srcPath('components', pascal, CSS_FILE_NAME)
    args.cssSelector = camel

    console.log('args', args)
    return args
  },
}

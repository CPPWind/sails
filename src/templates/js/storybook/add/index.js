/* required values:
      name
      partPath
      partClass
      cssFile
      cssPath
      cssSelector
*/

const cc = require('change-case')
const srcPath = require(process.cwd() + '/.hygen').helpers.srcPath

const CSS_FILE_NAME = 'styles.module.css'

module.exports = {
  params: ({ args }) => {
    if (!args.parent) {
      console.warn("must call with --parent")
      process.exit(1)
    }
    // make the canonical Part name
    const pascal = cc.pascal(args.name)
    const camel = cc.camel(pascal)
    const parent = cc.pascal(args.parent)

    args.storyPath = srcPath('stories', parent, 'index.js')

    args.componentPath = srcPath('stories', parent, `${pascal}.js`)

    args.componentName = pascal
    args.cssFile = './' + CSS_FILE_NAME
    args.cssPath = srcPath('stories', parent, CSS_FILE_NAME)
    args.cssSelector = camel
    console.log('args', args)
    return args
  },
}

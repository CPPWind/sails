const cc = require('change-case')
const fs = require('fs')

const clientParent = fs.existsSync('./app') ? './client' : './src'
const appParent = './app'
const projectName = cc.camel(process.cwd().split('/').pop())

const CLIENT_DIRS = [
  'components',
  'panes',
  'styles',
  'utils',
]

const sourcePaths = CLIENT_DIRS.reduce(
  (hsh, sub) => (hsh[sub] = `${clientParent}/${sub}/`) && hsh,
  {}
)

sourcePaths.types = `${appParent}/graphql/types/`

const extRegex = /^\./

const pathTo = (source, ...parts) => {
  if (parts.length === 0) return sourcePaths[source]
  if (parts.slice(-1)[0].match(extRegex)) {
    const ext = parts.pop()
    parts[parts.length - 1] = parts[parts.length - 1] + ext
  }
  return sourcePaths[source] + parts.join('/')
}

module.exports = {
  helpers: {
    srcPath: pathTo,
    allDirs: CLIENT_DIRS,
    projectName
  },
}

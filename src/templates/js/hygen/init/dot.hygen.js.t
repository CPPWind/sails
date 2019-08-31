---
to: <%-  process.cwd() + '/.hygen.js'  %>
---
const cc = require('change-case')
const fs = require('fs')
const path = require('path')

const PROJECT = {
  ROOT: '<%- process.cwd() %>',
  NAME:  '<%-  projectName  %>',
  CSS_FILE: 'styles.module.css',
  SRC_DIRS: {
    // add more paths here if using multiple source directories
    default: '<%- dirSource %>',
  },
  SRC_ROOTS: {
    default: '<%- path.normalize(path.join(process.cwd, dirSource)) %>'
  },
  SUB_DIRS: {
    default: ['<%- subDirs.join("', '") %>']
  },
  SUB_DIR_ROOTS: {
    <%- subDirs.map(subDir => `    ${subDir}: '${}',`).join("\n") %>
  }
}

const SRC_ROOT =
const SRC_DIRS = [
    <%-  subDirs.map(subDir => `  \'${subDir}\',` ).join('\n')  %>
]

const sourcePaths = CLIENT_DIRS.reduce(
  (hsh, sub) => (hsh[sub] = path.join(SRC_ROOT, sub)) && hsh,
  {}
)
//
// sourcePaths.types = `${appParent}/graphql/types/`
//
// const extRegex = /^\./
//
// const pathTo = (source, ...parts) => {
//   if (parts.length === 0) return sourcePaths[source]
//   if (parts.slice(-1)[0].match(extRegex)) {
//     const ext = parts.pop()
//     parts[parts.length - 1] = parts[parts.length - 1] + ext
//   }
//   return sourcePaths[source] + parts.join('/')
// }
//
// module.exports = {
//   helpers: {
//     srcPath: pathTo,
//     allDirs: CLIENT_DIRS,
//     projectName
//   },
// }


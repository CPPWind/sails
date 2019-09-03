---
  to: <%-   process.cwd() + '/.hygen.js'   %>
---
const cc = require('change-case')
const fs = require('fs')
const path = require('path')
const { pathTo } = require('@bit/cppwind.sails.template-helpers/index.js')

const rootPathTo = new pathTo(process.cwd())

const CLIENT_DIRS = [
  '<%-  subDirs.join("', \n  '")  %>',
]

const project = {
    root: rootPathTo,
    name: '<%-   projectName   %>',
    css_file: 'styles.module.css',
    clientDirs: CLIENT_DIRS,
    srcDirs: {
      // add more dirs here if using multiple source directories
      default: '<%-  dirSource  %>',
    },
    subDirs: {
      default: {
      // add more dirs here
<%- subDirs.map(
  subDir => `      ${subDir}: rootPathTo('${dirSource}','${subDir}')`
).join(",\n")  %>,
    },
  },
}

module.exports = {
  helpers: {
    project,
  },
}


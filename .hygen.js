const cc = require('change-case')
const fs = require('fs')
const path = require('path')
const { pathTo } = require('@bit/cppwind.sails.template-helpers')

const rootPathTo = new pathTo(process.cwd())

const CLIENT_DIRS = [
  'components', 
  'models', 
  'pages', 
  'panes', 
  'styles', 
  'utils',
]

const project = {
    root: rootPathTo,
    name: 'sails',
    css_file: 'styles.module.css',
    clientDirs: CLIENT_DIRS,
    srcDirs: {
      // add more dirs here if using multiple source directories
      default: 'src',
    },
    subDirs: {
      default: {
      // add more dirs here
      components: rootPathTo('src','components'),
      models: rootPathTo('src','models'),
      pages: rootPathTo('src','pages'),
      panes: rootPathTo('src','panes'),
      styles: rootPathTo('src','styles'),
      utils: rootPathTo('src','utils'),
    },
  },
}

module.exports = {
  helpers: {
    srcPath: pathTo,
    allDirs: CLIENT_DIRS,
    project,
  },
}


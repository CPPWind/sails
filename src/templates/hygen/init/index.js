const cc = require('change-case')
const fs = require('fs')
const path = require('path')

const STANDARD_SRC_ROOT = ['client', 'app']
const STANDARD_SRC_DEFAULT = 'src'
const SRC_ROOT =
  STANDARD_SRC_ROOT.find(p => fs.existsSync(`./${p}`)) || STANDARD_SRC_DEFAULT
const DEFAULT_PROJECT_NAME = cc.camel(path.basename(process.cwd()))

const mkPathMaker = root => sub => path.normalize(path.join(root, sub))
const mkPath = sub =>
module.exports = {
  prompt: ({ prompter, args: { v, verbose, ...args } }) => {
    const beVerbose = v || verbose
    return prompter
      .prompt([
        {
          type: 'input',
          name: 'projectName',
          default: args.name || DEFAULT_PROJECT_NAME,
          message: 'What is the name of your project?',
        },
        {
          type: 'input',
          name: 'dirSource',
          default: args.src || SRC_ROOT,
          message: 'What is the source directory?',
        },
        {
          type: 'input',
          name: 'subDirs',
          default:
            args.dirs || 'components, models, pages, panes, styles, utils',
          message: 'What sub-directories to use? (Separate by comma)',
        },
        {
          type: 'confirm',
          name: 'createDirs',
          message: 'Create sub-directories with .keep ?',
        },
      ])
      .then(answers => {
        const dirs = {
          root: process.cwd(),
        }
        dirs.src = mkPath.normalize(path.join(dirs.root, answers.dirSource))
        dirs.default = {
          answers.subDirs
            .trim()
            .split(/,\s*/)
            .filter(p => p).reduce((hsh, p) => (hsh[p] = path.normalize(path.join(dirs.src, p)) && hsh) )
        }
        const final = {
          ...args,
          ...answers,
          dirs,
          beVerbose,
        }
        if (beVerbose) console.log('Template Data:', final)
        return final
      })
  },
}
const subDirs = ['a','b']
const all = subDirs.map(subDir => `    ${subDir}: '${}',`).join("\n") %>

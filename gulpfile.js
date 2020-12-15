const { series, parallel } = require('gulp')
const server = require('./gulp/tasks/server.js')
const watch = require('./gulp/tasks/watch.js')
const style = require('./gulp/tasks/style.js')
const script = require('./gulp/tasks/script.js')
const view = require('./gulp/tasks/view.js')
const image = require('./gulp/tasks/image.js')
const file = require('./gulp/tasks/file.js')
const lib = require('./gulp/tasks/lib.js')
const clean = require('./gulp/tasks/clean.js')

const setDevEnv = done => {
  if (process.env.NODE_ENV === undefined) {
    process.env.NODE_ENV = 'development'
  }
  done()
}

const setBuildEnv = done => {
  if (process.env.NODE_ENV === undefined) {
    process.env.NODE_ENV = 'production'
  }
  done()
}

module.exports = {
  default: series(setDevEnv, clean, view, style, script, image, file, lib, server, watch),
  build: series(setBuildEnv, clean, parallel(view, style, script, image, file, lib))
}

// -------------------------------------
//  Watch
// -------------------------------------
const { watch } = require('gulp')
const config = require('../config.js')
const style = require('./style.js')
const view = require('./view.js')
const image = require('./image.js')
const file = require('./file.js')
const lib = require('./lib.js')

function watcher() {
  watch(`${config.src.style}**/*.scss`).on('change', style)
  watch(`${config.src.view}**/*.pug`).on('change', view)
  watch(`${config.src.image}**/*.{gif,jpg,jpeg,png,svg}`, image)
  watch(`${config.src.file}**/*.*`, file)
  watch(`${config.src.lib}**/*.*`, lib)
}

module.exports = watcher

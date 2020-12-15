// -------------------------------------
//  Files
// -------------------------------------
const { src, dest, task } = require('gulp')
const config = require('../config.js')

function file() {
  return src(`${config.src.lib}**/*.*`)
    .pipe(dest(`${config[process.env.NODE_ENV].root}${config.dist.lib}`))
}

task(file)

module.exports = file

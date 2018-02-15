const sourcemaps = require('gulp-sourcemaps')
const collect = require('gulp-collect-pattern')
const notify = require('freedesktop-notifications')
const babel = require("gulp-babel")
const open = require('open')
const gulp = require('gulp')
const del = require('del')

function onError (err) {
  console.error(err.message)
  notify.createNotification({
      body: err.toString(),
      actions: { default: '' }
  }).on( 'action' , action => {
    if (err.filename && err.loc)
      open(`${err.filename}:${err.loc.line}:${err.loc.column}`, 'atom-beta')
  }).push()
  this.emit('end')
}

gulp.task("default", () =>
  gulp.src([ 'src/**/*.js', 'src/**/*.jsx' ])
    .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(collect({
        file: './dist/styles.css',
        regex: /<style>([\s\S]+?)<\/style>/g,
        capture: 1
      }))
      .pipe(babel({
        "presets": [
          "env",
          "react"
        ],
        "plugins": [
          "transform-object-rest-spread",
          [ "transform-rename-import", { original: '^(.+?)\\.jsx$', replacement: '$1.js' } ]
        ],
        sourceMaps: true
      }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"))
)

gulp.task('clean', () => del('./dist'))

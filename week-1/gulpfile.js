'use strict';

var gulp          = require('gulp');
// ===== Postcss
var postcss       = require('gulp-postcss');
// ===== CSS/Sass
var autoprefixer  = require('autoprefixer');
var sass          = require('gulp-sass');
var sourcemaps    = require('gulp-sourcemaps');
// ===== JS
var webpack       = require('webpack-stream');
// ===== Other Stuff
var watch         = require('gulp-watch');
var browsersync   = require('browser-sync').create();

/*
    Build All JS files
*/
gulp.task('scripts', function() {
  return gulp.src('scripts/src/index.js')
      .pipe(webpack(require('./webpack.config.js')))
      .pipe(gulp.dest('./scripts/dist/'));
});

/*
 *    Compile Sass to CSS
 */
gulp.task('sass', function() {
    var processors = [
        autoprefixer('last 2 version', 'ie 9'),
    ];
    return gulp.src('./styles/all.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'))
        .pipe(browsersync.stream({ match: '/**/*.css' }));
});

/*
 *    Setup Browser Sync
 */
gulp.task('bs', function() {
    browsersync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('bs-reload', function() {
    browsersync.reload();
});

/*
 *    Setup Gulp watch task
 *
 *    DESC: Watches for changes inside SCSS and JS files and reloads browser after recompiling
 */
gulp.task('watch', function() {
    gulp.watch('./styles/**/*.scss', ['sass', 'bs-reload']);
    //gulp.watch('./scripts/**/*.js', ['scripts', 'bs-reload']);
});

/*
 *    Default gulp task, runs on `gulp`
 */
gulp.task('default', ['sass', 'scripts', 'watch', 'bs']);

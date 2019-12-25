//'use strict';

const gulp = require('gulp');

const js = function () {
  const babel = require('gulp-babel');

  return gulp.src('src/*.js')
    .pipe(babel({
        presets: ['react-app']
      }))
    .pipe(gulp.dest('dist'));
};

const css = function () {
  const sass = require('gulp-sass');
  sass.compiler = require('node-sass');

  return gulp.src('src/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
};

exports.default = gulp.series(js, css);
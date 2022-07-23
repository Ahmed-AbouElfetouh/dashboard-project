const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const livereload = require('gulp-livereload');
const sourcemaps = require('gulp-sourcemaps'); 
const concat = require('gulp-concat');
const { parallel } = require('gulp');
const minify = require('gulp-minify');
const newer = require('gulp-newer');

function htmlFilesHandler() {
  return gulp
    .src('src/html/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
}

function cssFilesHandler() {
  return gulp
    .src(['src/css/**/*.css', 'src/css/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }))
    .on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
}

function jsFilesHandler() {
  return gulp
    .src('src/js/*.js')
    .pipe(concat('script.js'))
    .pipe(minify())
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload());
}

exports.default = function () {
  require('./server.js');
  livereload.listen();
  gulp.watch('src/html/**/*.pug', htmlFilesHandler);
  gulp.watch(['src/css/**/*.css', 'src/css/**/*.scss'], cssFilesHandler);
  gulp.watch('src/js/*.js', jsFilesHandler);
};

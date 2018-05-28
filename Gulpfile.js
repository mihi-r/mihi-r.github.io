
var fs = require('fs'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    banner = require('gulp-banner'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    pkg = require('./botui/package.json'),
    htmlclean = require('htmlclean'),
    replace = require('gulp-replace'),
    minify = require('gulp-clean-css');

function escape (text) {
  return text.replace(/'/g, "\\'").replace(/"/g, "\\\"");
}

// main page
gulp.task('main-styles', function() {
  gulp.src('./main-style/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(minify())
      .pipe(rename('main.min.css'))
      .pipe(gulp.dest('./main-build/'));
});

gulp.task('main-scripts', function () {
  gulp.src('./main-script/main.js') 
  .pipe(uglify())
  .pipe(htmlTemplate())
  .pipe(rename('main.min.js'))
  .pipe(gulp.dest('./main-build/'));
});

// botui
function htmlTemplate() {
  return replace('BOTUI_TEMPLATE', escape(
    htmlclean(fs.readFileSync('./botui/src/botui.html', 'utf8'))
  ));
}

var comment = '/*\n' +
    ' * <%= pkg.name %> <%= pkg.version %>\n' +
    ' * <%= pkg.description %>\n' +
    ' * <%= pkg.homepage %>\n' +
    ' *\n' +
    ' * Copyright <%= year %>, <%= pkg.author.name %>\n' +
    ' * Released under the <%= pkg.license %> license.\n' +
    '*/\n\n';

gulp.task('botui-styles', function() {
  gulp.src(['./botui/src/styles/normal.scss',
            './botui/src/styles/botui.scss'])
      .pipe(sass().on('error', sass.logError))
      .pipe(minify())
      .pipe(concat('botui.min.css'))
      .pipe(banner(comment, {
        pkg: pkg,
        year: new Date().getFullYear()
      }))
      .pipe(gulp.dest('./botui/build/'));
});

gulp.task('botui-themes', function() {
  gulp.src('./botui/src/styles/themes/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(minify())
      .pipe(rename(function (path) {
        path.basename = 'botui-theme-' + path.basename;
      }))
      .pipe(gulp.dest('./botui/build/'));
});

gulp.task('botui-scripts', function () {
      gulp.src('./botui/src/scripts/botui.js') 
      .pipe(uglify())
      .pipe(htmlTemplate())
      .pipe(rename('botui.min.js'))
      .pipe(banner(comment, {
        pkg: pkg,
        year: new Date().getFullYear()
      }))
      .pipe(gulp.dest('./botui/build/'));
});

gulp.task('watch',function() {
  gulp.watch('./main-style/*.scss', ['main-styles']);
  gulp.watch('./main-script/main.js', ['main-scripts']);
  gulp.watch('./botui/src/styles/*.scss', ['botui-styles']);
  gulp.watch('./botui/src/styles/themes/*.scss', ['botui-themes']);
  gulp.watch(['./botui/src/scripts/botui.js', './botui/src/botui.html'], ['botui-scripts']);
});

gulp.task('default', ['main-styles', 'main-scripts', 'botui-styles', 'botui-scripts', 'botui-themes']);

var fs = require('fs'),
    pkg = require('./package.json'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-clean-css');

function escape (text) {
  return text.replace(/'/g, "\\'").replace(/"/g, "\\\"");
}

gulp.task('main-styles', function() {
  gulp.src('./main-style/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(minify())
      .pipe(rename('main.min.css'))
      .pipe(gulp.dest('./main-build/'));
});

gulp.task('main-scripts', function () {
  gulp.src(['./main-script/resume.js', './main-script/main.js']) 
      .pipe(concat('main.min.js'))
      .pipe(gulp.dest('./main-build/'));

  gulp.src(['./main-script/search-bot.js', './main-script/resume.js'])
      .pipe(concat('search-bot.min.js'))
      .pipe(gulp.dest('./main-build/'));
});

gulp.task('watch',function() {
  gulp.watch('./main-style/*.scss', ['main-styles']);
  gulp.watch('./main-script/*.js', ['main-scripts']);
});

gulp.task('default', ['main-styles', 'main-scripts']);

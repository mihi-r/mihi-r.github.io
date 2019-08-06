const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rollup = require('rollup-stream');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const purge = require('gulp-css-purge');
const json = require('rollup-plugin-json');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

function styles() {
  return gulp
    .src('./styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(purge({
      trim: true,
      shorten: true,
      verbose: true,
    }))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./build/'));
}

function scripts() {
  return rollup({
      input: './scripts/main.js',
      format: 'cjs',
      plugins: [
        json({
          exclude: 'node_modules/**'
        })
      ]
    })
    .pipe(source('main.min.js'))
    .pipe(buffer())
    .pipe(babel({
      presets: [
        ['@babel/preset-env', {
          useBuiltIns: 'entry',
          corejs: 3,
        }],
      ],
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
}

function devScripts() {
  return rollup({
      input: './scripts/main.js',
      format: 'cjs',
      plugins: [
        json({
          exclude: 'node_modules/**'
        })
      ]
    })
    .pipe(source('main.min.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build'));
}

function watchFiles() {
  gulp.watch(['./scripts/*.js', './data/*.json'], gulp.series(scripts));
  gulp.watch('./styles/*.css', gulp.series(styles));
}

function watchDevFiles() {
  gulp.watch(['./scripts/*.js', './data/*.json'], gulp.series(devScripts));
  gulp.watch('./styles/*.css', gulp.series(styles));
}

const watch = gulp.parallel(scripts, styles, watchFiles);
const dev = gulp.parallel(devScripts, styles, watchDevFiles);

exports.watch = watch;
exports.dev = dev;

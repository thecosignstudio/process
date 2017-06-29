const gulp = require('gulp');
const rollup = require('gulp-rollup');
const babel = require('rollup-plugin-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const eslint = require('rollup-plugin-eslint');

const buildFolder = './build/js';

gulp.task('watch', () => {
  gulp.start(['vendor', 'build']);
  gulp.watch('./javascript/app/**/*.js', ['build']);
});

gulp.task('vendor', () => {
  gulp.src([
    './node_modules/jquery/dist/jquery.js',
    './node_modules/clipboard/dist/clipboard.js',
    './node_modules/selection-sharer/dist/selection-sharer.js',
    './node_modules/baseline-element/dist/baseline-element.js',
    './javascript/vendor/**/*.js',
  ]).pipe(concat('vendor.js'))
  .pipe(uglify())
  .pipe(gulp.dest(buildFolder));
});

gulp.task('build', () => {
  gulp.src('./javascript/app/**/*.js')
    .pipe(rollup({
      entry: 'javascript/app/application.js',
      dest: 'build/js/application.min.js',
      format: 'iife',
      sourceMap: 'inline',
      plugins: [
        eslint({
          exclude: ['javascript/vendor'],
        }),
        babel({
          exclude: 'node_modules/**',
        }),
      ],
    }))
    .pipe(uglify())
    .pipe(gulp.dest(buildFolder));
});

gulp.task('build-production', () => {
  gulp.start('vendor');
  gulp.start('build');
});

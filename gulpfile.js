const gulp = require('gulp');
const rollup = require('gulp-rollup');
const babel = require('rollup-plugin-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const buildFolder = './build/js';

gulp.task('watch', () => {
  gulp.start('vendor');
  gulp.watch('./javascript/app/**/*.js', ['build']);
});

gulp.task('vendor', () => {
  gulp.src('./javascript/vendor/**/*.js')
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest(buildFolder));
});

gulp.task('build', function() {
  gulp.src('./javascript/app/**/*.js')
    .pipe(rollup({
      entry: 'javascript/app/application.js',
      dest: 'build/js/application.min.js',
      format: 'iife',
      sourceMap: 'inline',
      plugins: [
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

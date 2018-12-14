/**
 * Sass configuration
 */
const gulp = require('gulp');
const sass = require('gulp-sass');

/**
 * Source scss files
 */
// Main file. Use * .scss to compile everything into different files and not into one
const sassPath = 'scss/main.scss';
// Watching all the files in the folder scss/
const sassWatch = 'scss/**/*.scss';

/**
 * Output css files
 */
const cssPath = 'css/';

/**
 * Creating build the task
 */
gulp.task('sass', done => {
  /**
   * Source path
   * 'scss/*.scss' or 'scss/main.scss'
   */
  gulp
    .src(sassPath)

    /**
     * Compiling source and minify output
     */
    .pipe(sass({ outputStyle: 'compressed' }))

    /**
     * Destination path
     */
    .pipe(gulp.dest(cssPath));
  done();
});

/**
 * Creating watch the task
 */
gulp.task(
  'watch',
  gulp.series('sass', () => {
    gulp.watch(sassWatch, gulp.series('sass'));
  }),
);

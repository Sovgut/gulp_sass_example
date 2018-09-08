/**
 * Sass configuration
 */
const gulp    = require('gulp'),
      sass    = require('gulp-sass'),
      util    = require('gulp-util')
      notify  = require('gulp-notify'),
      plumber = require('gulp-plumber');

/**
 * Creating build task
 */
gulp.task('sass', function() {

  /**
   * Source path
   * 'scss/*.scss' or 'scss/main.scss'
   */
  gulp.src('scss/main.scss')

      /**
       * If error, write to console message and continue
       */
      .pipe(plumber({ errorHandler: function(error) {

        /**
         * Use system notify center for showing error message
         */
        notify.onError({
          title: 'Gulp error in ' + error.plugin,
          message: error.message.toString()
        })(error);


        /**
         * Use system sound
         */
        util.beep();
      }}))

      /**
       * Compile source and minify output
       */
      .pipe(sass({outputStyle: 'compressed'}))

      /**
       * Destination path
       */
      .pipe(gulp.dest('css/'));
});

/**
 * Creating watch task
 */
 gulp.task('watch', ['sass'], function() {
  gulp.watch('scss/**/*.scss', ['sass']);
 });
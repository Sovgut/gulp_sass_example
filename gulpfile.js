/**
 * Sass configuration
 */
const gulp    = require('gulp'),
      sass    = require('gulp-sass'),
      util    = require('gulp-util')
      notify  = require('gulp-notify'),
      plumber = require('gulp-plumber');

/**
 * Creating build the task
 */
gulp.task('sass', function() {

  /**
   * Source path
   * 'scss/*.scss' or 'scss/main.scss'
   */
  gulp.src('scss/main.scss')

      /**
       * If the error, write a message to the console and continues to work
       */
      .pipe(plumber({ errorHandler: function(error) {

        /**
         * Using system notify center for showing error message
         */
        notify.onError({
          title: 'Gulp error in ' + error.plugin,
          message: error.message.toString()
        })(error);


        /**
         * Using system sounds
         */
        util.beep();
      }}))

      /**
       * Compiling source and minify output
       */
      .pipe(sass({outputStyle: 'compressed'}))

      /**
       * Destination path
       */
      .pipe(gulp.dest('css/'));
});

/**
 * Creating watch the task
 */
 gulp.task('watch', ['sass'], function() {
  gulp.watch('scss/**/*.scss', ['sass']);
 });
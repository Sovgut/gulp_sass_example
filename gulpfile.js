/**
 * Sass configuration
 */
const gulp    = require('gulp'),
      sass    = require('gulp-sass'),
      util    = require('gulp-util'),
      notify  = require('gulp-notify'),
      plumber = require('gulp-plumber');


/**
 * Source scss files
 */
// Main file. Use * .scss to compile everything into different files and not into one 
const sassPath  = 'scss/main.scss';
// Watching all the files in the folder scss/
const sassWatch = 'scss/**/*.scss';

/**
 * Output css files
 */
const cssPath   = 'css/';

/**
 * Creating build the task
 */
gulp.task('sass', function() {

  /**
   * Source path
   * 'scss/*.scss' or 'scss/main.scss'
   */
  gulp.src(sassPath)

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
      .pipe(gulp.dest(cssPath));
});

/**
 * Creating watch the task
 */
 gulp.task('watch', ['sass'], function() {
  gulp.watch(sassWatch, ['sass']);
 });
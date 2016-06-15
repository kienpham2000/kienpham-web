var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var jsmin = require('gulp-jsmin');
var concat = require('gulp-concat');

gulp.task('default', function() {
    gulp.src(['js/*.js', '!js/*.min.js'])
    .pipe(concat('main.js'))
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));

  return gulp.src(['css/*.css', '!css/*.min.css'])
    .pipe(concat('main.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

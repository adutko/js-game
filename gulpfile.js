var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var paths = {
  sassSrcPath: './source/css/*.scss',
  sassDestPath: './build/css'
}

gulp.task('process-styles', function () {
  return sass(paths.sassSrcPath, {})
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest(paths.sassDestPath))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./build/css'));
});

gulp.task('process-scripts', function () {
  return gulp.src('source/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./build/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'));
})

gulp.task('default', function () {
  console.log('I have configured a gulpfile');
});
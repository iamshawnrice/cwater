var gulp = require('gulp');

// gulp dependencies
var autoprefixer = require('gulp-autoprefixer'),
    bowerFiles = require('main-bower-files'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss');

// Local vars
var cssPath = './app/assets/css',
    sassPath = './app/assets/sass/**/*.scss';

gulp.task('js', function() {
  var files = bowerFiles({
    filter: ['**/**/*.js']
  });

  files.push('./app/assets/js/**/*.js');

  gulp.src(files)
    .pipe(sourcemaps.init())
    .pipe(concat('application.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./app/assets/javascripts/'))
    .pipe(browserSync.stream());
});

gulp.task('sass', function () {
  gulp.src(sassPath)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cssPath))
    .pipe(browserSync.stream());
});

// Server + watching scss/js files
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    proxy: 'localhost:3000'
  });

  gulp.watch(sassPath, ['sass']);
});

gulp.task('default', ['serve']);

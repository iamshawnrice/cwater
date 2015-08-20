var gulp = require('gulp');

// gulp dependencies
var autoprefixer = require('gulp-autoprefixer'),
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
  // dictate order of js files here
  var scripts = [
    './bower_components/jquery/dist/jquery.js',
    './bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
    './bower_components/numeral/numeral.js',
    './bower_components/ractive/ractive.js',
    './bower_components/velocity/velocity.js',
    './bower_components/validetta/dist/validetta.js',
    './app/assets/js/modals.js',
    './app/assets/js/order-form.js',
    './app/assets/js/sales-feed.js',
    './app/assets/js/sales-stats.js',
    './app/assets/js/init.js'
  ];

  gulp.src(scripts)
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
  gulp.watch('./app/assets/js/**/*.js', ['js']);
});

gulp.task('default', ['serve']);

'use strict'

let gulp = require('gulp');
let sass = require('gulp-sass');
let browserify = require('gulp-browserify');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function () {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./public'));
});

gulp.task('css', function () {
    return gulp.src('./scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public'));
});

gulp.task('js', function () {
    return gulp.src('./js/app.js')
        .pipe(browserify())
        .pipe(gulp.dest('./public'))
});

gulp.task('watch', function () {
    gulp.watch('./js/*.js', ['js']);
    gulp.watch('./js/*/*.js', ['js']);
    gulp.watch('./css/*.css', ['css']);
    gulp.watch('./index.html', ['html']);
});

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('compress', function() {
    gulp.src(['js/*.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});

gulp.task('sass', function () {
    return gulp.src('./scss/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('./js/**/*.js', ['compress']);
});
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer',async function(){
  gulp.src('css/style.css')
    .pipe(autoprefixer({
      browsers: ['last 10 version']
    }))
    .pipe(gulp.dest('css'));
});

var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('mincss',async function () {
  gulp.src('css/style.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css'));
});


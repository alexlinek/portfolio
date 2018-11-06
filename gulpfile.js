const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

const cssFiles = '_sass/**/*.?(s)css';

gulp.task('css', () => {
  gulp.src(cssFiles)
    .pipe(sass())
    .pipe(concat('all.css'))
    .pipe(gulp.dest('assets'));
});

gulp.task('watch', () => {
  gulp.watch(cssFiles, ['css']);
});

gulp.task('default', ['css', 'watch']);

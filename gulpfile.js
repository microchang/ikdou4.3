var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('minify', function () {
   gulp.src('routes/index.js')
      .pipe(uglify())
      .pipe(gulp.dest('build'))
});
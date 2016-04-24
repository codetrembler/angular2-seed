var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  tsc = require('gulp-typescript'),
  tsProject = tsc.createProject('tsconfig.json');

gulp.task('ts.dev', function () {
  return tsProject.src()
    .pipe(plumber())
    .pipe(tsc(tsProject))
    .pipe(gulp.dest('dist/dev'));
});

gulp.task('copy', function () {
  return gulp.src('index.html')
    .pipe(plumber())
    .pipe(gulp.dest('dist/dev'));
});

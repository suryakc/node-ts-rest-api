const gulp = require('gulp');
const gulpTS = require('gulp-typescript');

// pull in the project TypeScript config
const gulpTSProject = gulpTS.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const gulpTSResult = gulpTSProject.src()
  .pipe(gulpTSProject());
  return gulpTSResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('default', ['watch']);
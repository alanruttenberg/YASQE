require('require-dir')('./gulp');

var gulp = require('gulp');
gulp.task('default', ['browserify', 'browserifyWithDeps', 'makeCss', 'makeMainPage']);
gulp.task('serve', ['makeCss', 'makeMainPage', 'browserifyForDebug', 'watch', 'connect']);
gulp.task('dev', ['makeCss', 'makeMainPage', 'browserifyForDebug', 'watch']);



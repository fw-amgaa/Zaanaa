
const gulp = require('gulp');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');

var reload = browserSync.reload;

//SERVER


gulp.task('server', function (cb) {
  var called = false;
  browserSyncInit();

  return nodemon({
    script : './bin/www'
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  });
});



// BROWSER-SYNC


function browserSyncInit() {
  browserSync.init({
    proxy: 'localhost:3000',
    port: 7000,
    files: [ 'views/*.*' , './app.js' , 'public/**/*.*' , 'routes/**/*.*' ],
    notify: true,
  });
}


gulp.task('default', gulp.series('server'));

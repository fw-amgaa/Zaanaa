
const gulp = require('gulp');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');
const postcss = require('gulp-postcss');
const prefix = require('autoprefixer');
const nano = require('cssnano');

var reload = browserSync.reload;
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

// SASS

gulp.task('sass', function () {

  return gulp.src('./public/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ prefix() , nano()])) // Prefix Then Nano
    .pipe(gulp.dest('./public/css'));

});

gulp.task('watch', function () {
  gulp.watch('./public/sass/**/*.scss', gulp.series('sass'));
});

// //SERVER

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


gulp.task('default', gulp.series('sass','server','watch'));

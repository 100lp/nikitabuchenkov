var gulp = require("gulp"),
    connect = require("gulp-connect"),
    sass = require('gulp-sass'),
    rename = require("gulp-rename"),
    autoprefixer = require('gulp-autoprefixer'),
    jade = require('gulp-jade'),
    prettify = require('gulp-prettify')
    opn = require("opn");

// Запускаем локальный сервер
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 8888
  });
  opn('http://localhost:8888');
});


// Компиляция Jade в html
gulp.task('jade', function() {
  gulp.src('app/templates/pages/*.jade')
    .pipe(jade())
    .on('error', log)
    .pipe(prettify({indent_size: 2}))
    .pipe(gulp.dest('app/'))
    .pipe(connect.reload());
});


// Компилиция Sass в CSS
gulp.task('sass', function () {
  gulp.src('./app/sass/*.sass')
    .pipe(sass({
      indentedSyntax: true,
      lineNumbers: true
    }))
    .pipe(autoprefixer({
      browsers: ['last 15 versions', 'ie 8', 'ie 9']
    }))
    .pipe(gulp.dest('./app/css'))
});


// Работа с CSS
gulp.task('css', function () {
  gulp.src('./app/css/*.css')
    .pipe(connect.reload());
});


// Работа с JS
gulp.task('js', function () {
  gulp.src('./app/js/*.js')
    .pipe(connect.reload());
});


// Слежка
gulp.task('watch', function () {
  gulp.watch(['./app/**/*.jade'], ['jade']);
  gulp.watch(['./app/js/*.js'], ['js']);
  gulp.watch(['./app/sass/*.sass'], ['sass']);
  gulp.watch(['./app/css/*.css'], ['css']);
});


// Задача по-умолчанию
gulp.task('default', ['connect', 'watch']);


// Вывод ошибок
var log = function (error) {
  console.log([
    '',
    "----------ERROR MESSAGE START----------",
    ("[" + error.name + " in " + error.plugin + "]"),
    error.message,
    "----------ERROR MESSAGE END----------",
    ''
  ].join('\n'));
  this.end();
}

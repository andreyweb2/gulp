const {src, dest} = require('gulp')
const sass = require('gulp-sass')
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-html')
const del = require('del')
const sync = require('browser-sync').create()

/*
Первая задача: Обработка HTML, минифицировать, соединение HTML кусков
Вторая зачада: Преобразовывать SCSS в CSS, совмещать файлы, минифицировать CSS
*/
function html(){
  return src('src/**.html')
    .pipe(include({
      prefex: '@@'
    }))
    .pipe(dest('dist'))
}

exports.html = html
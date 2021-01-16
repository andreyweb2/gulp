const {src, dest} = require('gulp')
const sass = require('gulp-sass')
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-html')
const del = require('del')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const sync = require('browser-sync').create()

/*
Первая задача: Обработка HTML, минифицировать, соединение HTML кусков
Вторая зачада: Преобразовывать SCSS в CSS, совмещать файлы, минифицировать CSS
*/
/*Собираем файлы header и footer и incluse их в страницы about и index */
function html(){
  return src('src/**.html')//Забираем все HTML файлы из папки src
    .pipe(include({
      prefex: '@@'//Проставляем префикс куда инклюдить файлы
    }))
    .pipe(dest('dist'))//Возвращаем результат в папку dist
}

/*Собираем файлы scss, минифицируем, и объединяем их */
function scss(){
  return src('src/scss/**.scss')//Забираем все scss файлы из папки src
    .pipe(sass())//Вызываем scss
    .pipe(autoprefixer({
      browsers: ['last 2 versions']//Проставляем вендорные автопрефиксы
    }))
    .pipe(csso())//Минифицируем 
    .pipe(concat('index.css'))//Объединение файлов
    .pipe(dest('dist'))//Возврацаем результат в папку src
}

exports.html = html //Сборка HTML файлов
exports.scss = scss //Сборка css файлов
'use strict';

var gulp = require('gulp'),
uncss = require('gulp-uncss-sp'),
notify = require("gulp-notify"),
connect = require('gulp-connect'),
livereload = require('gulp-livereload'),
sass = require('gulp-sass'),
rigger = require('gulp-rigger'),
path = {
		app: {
				html: 'app/',
				js: 'app/js/',
				css: 'app/css/',
				img: 'app/img/',
				fonts: 'app/fonts/'
		},
		src: { //Пути откуда брать исходники
				html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
				js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
				style: 'src/style/main.scss',
				img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
				fonts: 'src/fonts/**/*.*',
				css: 'src/css/**/*.*'
		},
		watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
				html: 'src/**/*.html',
				js: 'src/js/**/*.js',
				style: 'src/style/**/*.scss',
				img: 'src/img/**/*.*',
				fonts: 'src/fonts/**/*.*',
				css: 'src/css/**/*.css'
		},
		clean: './app'
};

//local server
gulp.task('connect', function() {
	connect.server({
		root: './app',
		livereload: true
	});
});

//sass build
gulp.task('sass', function () {
	gulp.src('./sass/**/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(sass({outputStyle: 'uncompressed'}))
		.pipe(gulp.dest('./app/css/'));
});


gulp.task('sass:watch', function () {
	gulp.watch('./sass/**/*.sass', ['sass']);
});

//html
gulp.task('html:build', function () {
	gulp.src(path.src.html) 
			.pipe(rigger())
			.pipe(gulp.dest(path.app.html))
			.pipe(connect.reload())
			.pipe(notify("Done task 'html:build'"));
});

//watch
gulp.task('watch', function() {
	gulp.watch(path.watch.html, ['html:build']);
	gulp.watch(path.watch.css, ['css:build']);
})

//css copy 
gulp.task('css:build', function() {
    gulp.src(path.src.css)
        .pipe(gulp.dest(path.app.css))
        .pipe(notify("Build css"));
});

//img
gulp.task('img:copy', function() {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.app.img))
        .pipe(notify("Img has move"));
});

//css watch


//default
gulp.task('default', ['connect', 'html:build', 'watch', 'css:build']);
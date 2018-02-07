var gulp = require('gulp'),
    less = require('gulp-less'),
    minify = require('gulp-clean-css'),
    nodemon = require('gulp-nodemon'),
	browserSync = require('browser-sync').create(),
	uglify = require('gulp-uglify'),
	htmlmin = require('gulp-htmlmin'),
	imagemin = require('gulp-imagemin'),
	minimist = require('minimist'),
	clean = require('gulp-clean');

var knownOptions = {
	string: 'env',
	default: { env: process.env.NODE_ENV || '' }
}
var options = minimist(process.argv.slice(2), knownOptions),
	nodemon = options.env && nodemon({
		script: './bin/www',
		ignore: ['gulpfile.js', 'node_modules/**'],
		env: { 'NODE_ENV': options.env }
	}).on('start', function() {
		browserSync.init({
	 		proxy: 'http://localhost:8889',
	 		files: ['public/**/*.*', 'views/**', 'routes/**'],
	 		port:8080
	 	}, function() {
	 		console.log('服务器启动');
	 	});
	});

if(options.env == 'dev'){

	gulp.task('clear', function(){
	    return gulp.src('public/css')
	        .pipe(clean());
	})

	gulp.task('less', ['clear'], function() {
		return gulp.src(['public/less/**/*.less','!public/less/var.less'])
			.pipe(less())
			.pipe(gulp.dest('public/css/'))
	})

	gulp.task('server', ['less'], function() {
		return nodemon
	});

	gulp.task('watchFile', ['server'], function (event) {
		gulp.watch('public/less/**/*.less', ['less']);
	});

}else{

	gulp.task('clear', function(){
	    return gulp.src('dist/')
	        .pipe(clean());
	})

	gulp.task('bin', ['clear'], function() {
		return gulp.src('public/bin/**/*')
			.pipe(gulp.dest('dist/bin/'))
	})

	gulp.task('less', ['clear'], function() {
		return gulp.src('public/less/**/*.less')
			.pipe(less())
			.pipe(minify())
			.pipe(gulp.dest('dist/css/'))
	})

	gulp.task('js', ['clear'], function() {
		return gulp.src('public/js/**/*.js')
			.pipe(uglify())
			.pipe(gulp.dest('dist/js/'))
	})

	gulp.task('img', ['clear'], function() {
		return gulp.src('public/img/**/*')
			.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
			.pipe(gulp.dest('dist/img/'))
	})

	gulp.task('server', ['bin', 'less', 'js', 'img'], function() {
		return nodemon
	});

	gulp.task('watchFile', ['server'], function (event) {
		gulp.watch('public/bin/**/*', ['bin']);
		gulp.watch('public/less/**/*.less', ['less']);
		gulp.watch('public/js/**/*.js', ['js']);
		gulp.watch('public/img/**/*', ['img']);
	});
}

if(options.env){
	if(options.env == 'dev'){
		console.log('开发环境 --> 构建开始');
			gulp.task('default', ['less', 'server', 'watchFile'], function(){
		});
	}
	if(options.env == 'prod'){
		console.log('模拟生产环境 --> 构建开始');
			gulp.task('default', ['bin', 'less', 'js', 'img', 'server', 'watchFile'], function(){
		});
	}
}else{
	console.log('打包环境 --> 构建开始');
	gulp.task('default', ['bin', 'less', 'js', 'img'], function(){
	    console.log('--> 构建结束');
	});
}

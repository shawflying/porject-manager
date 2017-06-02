var gulp = require('gulp');
// 引入组件
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var $ = require('gulp-load-plugins')();
// 编译后地址
var dest = 'public/home/min/';
var source = 'public/home/';

// Lint JavaScript
gulp.task('jshint', function () {
    return gulp.src([source + 'js/*.js', '!' + source + 'js/*min.js'])
        .pipe($.jshint());
});
//js 压缩
gulp.task('build:js', function () {
    return gulp.src([source + 'js/*.js', '!' + source + 'js/*min.js'])
        //.pipe(concat('common.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(source + 'js/'));
    //.pipe($.size({title: 'minified'}));
});
// Optimize images
gulp.task('build:img', function () {
    return gulp.src(source + 'img/*')
        .pipe(gulp.dest(dest + 'img'));
    //.pipe($.size({title: 'img'}));
});

// 合并、压缩、重命名css
gulp.task('build:css', function () {
    gulp.src([source + 'css/*.css', '!' + source + 'css/*min.css'])
        //.pipe(concat('all.css')) // 合并文件为all.css
        .pipe(rename({suffix: '.min'})) // 重命名all.css为 all.min.css
        .pipe(minifycss()) // 压缩css文件
        .pipe(gulp.dest(source + 'css/')); // 输出all.min.css
});

gulp.task('version', function () {
    var fs = require('fs');
    var path = require('path');
    var moment = require('moment');
    var config = {
        version: '?v=' + moment().format('YYYYMMDDHHmmss'),//前端版本
        maxage: 7 * 24 * 60 * 60 * 1000,//前端时间
        name: '前端版本配置信息'
    };
    var info = "var build =" + JSON.stringify(config) + ";  module.exports = build;";
    fs.writeFile(path.join(__dirname, 'config/build.config.js'), info, {encoding: 'utf-8'}, function (err) {
        if (err) console.log('写入失败');
        console.log("Export Account Success!");
    });
});

gulp.task('build', ['version', 'jshint', 'build:js', 'build:css', 'build:img']);

gulp.task('default', ['build']);

gulp.task('watch', function () {
    gulp.watch(source + 'css/*.css', ['build:css']);
});
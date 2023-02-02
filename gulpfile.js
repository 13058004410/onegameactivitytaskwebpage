const fs = require('fs')
var htmlmin = require('gulp-htmlmin')
var gulp = require('gulp');
var cssmin = require('gulp-cssmin')
var uglify = require('gulp-uglify-es').default

var options = {
  removeComments: true,//清除HTML注释
  collapseWhitespace: true,//压缩HTML
  collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
  removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
  removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
  removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
  minifyJS: true,//压缩页面JS
  minifyCSS: true//压缩页面CSS
};

/**
 * 遍历dist目录
 */
var walk = function(dir, excludes) {
  var results = []
  var list = fs.readdirSync(dir)
  list.forEach(function(name) {
    file = dir + '/' + name
    var stat = fs.statSync(file)
    if (excludes.indexOf(file)<0 && stat && stat.isDirectory()) {
      results.push(file)
      results = results.concat(walk(file, excludes))
    } 
  })
  return results
}

gulp.task('mini', done => {
  var dirs = walk('./dist', ['./dist/cdn'])
  dirs.push('./dist')

  dirs.map(function(folder){
    gulp.src(folder+'/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(folder))

    gulp.src(folder+'/*.html')
    .pipe(htmlmin(options))
    .pipe(gulp.dest(folder))

    gulp.src(folder+'/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest(folder))
  });

  done()
});



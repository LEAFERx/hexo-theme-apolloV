---
title: 利用 Gulp 来压缩你的 Hexo 博客
tags:
  - Hexo
  - 博客
  - 教程
  - Gulp
  - 前端
category:
  - Hexo折腾
date: 2017-06-16 19:50:05
---


这篇文章介绍了如何利用 Gulp 来压缩你的 Hexo 博客的静态文件（ html / css / js ），达到提高访问速度的目的。

<!--more-->

---

这篇博文的大部分内容其实是网上抄来的 链接因为忘记了所以没法放 orz
写这篇博文呢主要是因为最近把 NexT 升级了 v5.1.1 里面有些 js 用了 ES6 的语法 但 gulp-uglify 并不支持 ES6
于是花了点时间看了下 Gulp 的文档 用 gulp-babel 把 ES6 转成 ES5 这样 uglify 就可以用啦
<del>（发现自己不喜欢打标点orz）</del>

---

# Gulp简介

gulp.js 是一种基于流的，代码优于配置的新一代构建工具。
具体前往[官网](http://www.gulpjs.com.cn/)啦
反正是一个基于 node 的用于自动化的工具，和 Grunt 比较类似，不过亮点是 **流** 和 **写代码** ，所以会比 Grunt 快一点。

# 准备环境

首先安装 Gulp

```
npm install gulp -g
```

然后 cd 到博客的根目录安装压缩静态文件要用的依赖包

```
npm install gulp-minify-css gulp-babel gulp-uglify gulp-htmlmin gulp-htmlclean --save-dev
```

<del>（这里提倡使用 cnpm）</del>
*2018.03.17：*
*辣鸡 cnpm 装的包各种权限问题 不推荐了哼*
*等有空写写如何优雅地在国内使用 npm 好了 w*

# 创建gulpfile.js

在博客的根目录创建文件 gulpfile.js
然后粘贴代码

```javascript
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');

gulp.task('minify-css', function () {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public'));
});

gulp.task('minify-html', function () {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
});

gulp.task('minify-js', function () {
    return gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});

gulp.task('default', ['minify-html', 'minify-css', 'minify-js']);
```

**注意**
gulp-babel 只能转换如箭头函数等一部分 ES6 的新特性 对 import 无能为力 如果需要压缩含有 import 特性的代码 需要使用 webpack 或者 browserify 等工具 具体教程网上有 我因为用不到也就没仔细研究

# 压缩方法

在 hexo g 之后在 cmd 里敲入 gulp 回车就可以啦
推荐姿势：

```
hexo cl && hexo g && gulp && hexo d
```

gulp运行截图
![](https://lc-cqha0xyi.cn-n1.lcfile.com/86504825e54d397ab0b2.jpg)

gulp运行前后比较
![](https://lc-cqha0xyi.cn-n1.lcfile.com/563fe13572154f249748.jpg)

# 更为推（tou）荐（lan）的姿势

*2018.03.17更新*
打开博客根目录的 `package.json` ，在 `"scripts"` 项增加一个 `"publish"` 命令：

```json
{
  //...
  "scripts": {
    //...
    "publish": "hexo cl && hexo g && gulp && hexo d",
    //...
  }
  //...
}
```

然后每次需要部署的时候只要运行下面命令就可以啦。

```
npm run publish
```

省了 20 个字符呢 w

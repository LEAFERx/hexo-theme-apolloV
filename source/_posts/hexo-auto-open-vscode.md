---
title: "[HEXO小技巧]在 hexo new 的时候自动用 VS Code 打开新建文章"
date: 2018-03-17 11:33:34
tags:
  - Hexo
  - 博客
  - 教程
  - 技巧
category:
  - Hexo折腾
---

<center>懒癌 hexo-blogger 的福音 / 吃我 Visual Studio Code 安利吔</center>

<!--more-->

---

# 安装 Visual Studio Code

前往 [Visual Studio Code 官网](https://code.visualstudio.com/)下载最新版本的 VS Code 安装包，并在安装时勾选 **添加到 PATH** 。
同时，建议勾选其他三项（懒就要懒到底嘛qwq）。
如图所示：![](https://lc-cqha0xyi.cn-n1.lcfile.com/f7d11f5ae8dee71bd4f6.jpg)

# 添加自动打开编辑器脚本

在 `博客根目录/scripts/` 下新建 `AutoOpenEditor.js` 文件（取其他名字也可以，不影响）（如果没有 scripts 目录则新建），并粘贴以下代码，保存。
```js
let spawn = require('hexo-util/lib/spawn');

hexo.on('new', (data) => {
  spawn('code', [hexo.base_dir, data.path]);
});
```
这样，在你每次 `hexo new` 的时候，脚本就会自动帮你打开 VS Code 并切换到博客根目录顺带打开新建的 .md 文件啦。
是不是又懒了一点呢qwq

---

水这一篇就很开心qwq

PS：[利用 Gulp 来压缩你的 Hexo 博客](https://leaferx.online/2017/06/16/use-gulp-to-minimize/)也更新了一种偷懒小技巧（在文末），还不快去看看？
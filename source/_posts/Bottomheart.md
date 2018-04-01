---
title: 在NexT主题底部小心心增加点击动画功能
date: 2017-01-30 21:02:02
tags: 
  - Hexo 
  - NexT
  - 博客
  - 教程
  - 美化
category: 
  - Hexo折腾
---
给你NexT主题的Hexo博客底部的小心心增加一点乐趣！
效果如图![](https://lc-cqha0xyi.cn-n1.lcfile.com/a75c549d062d2a5e0e0b.jpg)
仅需3分钟！
<!--more-->

# Step 0
确保你拥有一个以NexT为主题的Hexo博客 版本大概任意orz

# Step 1
下载[hexo-next-bottomheart.js](https://raw.githubusercontent.com/LEAFERx/UsefulCode/master/HEXO/hexo-next-bottomheart.js)（可以把链接复制到下载工具中或者直接新建文件然后复制粘贴），并把它保存在`/themes/next/source/js/src/`目录下。

# Step 2
使用文本编辑器打开`/themes/next/layout/_layout.swig`
在尾部`</body>`上方新增一行（line 5），修改后的文件如下
```html
...

{% include '_components/algolia-search/assets.swig' %}

  <script type="text/javascript" src="/js/src/hexo-next-bottomheart.js"></script>

</body>
</html>
```

# Step 3
使用文本编辑器打开`/themes/next/layout/_partials/footer.swig`
在
```html
...

<span itemprop="copyrightYear">{{ current }}</span>
<span class="with-love">
  <i class="fa fa-{{ theme.authoricon }}"></i>
</span>
<span class="author" itemprop="copyrightHolder">{{ config.author }}</span>

...
```
处，修改line 5为```html
<div id="bottomheart" style="cursor:pointer;"><i class="fa fa-{{ theme.authoricon }}"></i></div>
```
这时候，重新部署你的博客，就可以疯狂点击小心心啦

# Step 4
由于频繁点击小心心会造成周围文字不断被选中强迫症表示非常难受，所以修改css
使用文本编辑器打开`/themes/next/layout/_partials/footer.swig`
在`.footer`类中加入如下规则
```css
-moz-user-select: none;
-webkit-user-select: none;
-ms-user-select: none;
-khtml-user-select: none;
user-select: none;
```
这样就全部完成啦

# To Do
有空会增加配合Leancloud实现点击计数功能并更新教程，这样大家就可以知道有没有人又在偷偷给你点赞啦

**注：js文件来自[ehlxr](https://github.com/ehlxr)并由我进行一些修改，在此对他表示感谢*
---
title: 在移动设备下启用NexT主题的目录页面和回到顶部按钮
date: 2017-02-05 18:48:02
tags: 
  - Hexo 
  - NexT
  - 博客
  - 教程
  - 美化
category: 
  - Hexo折腾
---
其实就是改写一下css 个人觉得在移动端还是比较需要目录的
主要涉及`/themes/next/source/css/_common/components/sidebar/`目录下文件的修改
效果可见本博客移动端页面
<!--more-->
# Step 0
确保你拥有一个以NexT为主题的Hexo博客 版本大概任意orz

# Step 1
使用文本编辑器打开`/themes/next/source/css/_common/components/sidebar/sidebar.styl`
在`.sidebar`下将`+tablet()`和`+mobile()`注释掉
```css
/*+tablet() {
    display: none !important;
  }
  +mobile() {
    display: none !important;
  }*/
```

# Step 2
在移动端启用目录按钮
使用文本编辑器打开`/themes/next/source/css/_common/components/sidebar/sidebar-toggle.styl`
在`.sidebar-toggle`下将`+tablet()`和`+mobile()`注释掉即可
为了适配移动端，我微调了部分css如下：
```css
+tablet() {
  right: 20px;
  bottom: 45px;  //微调位置
  -moz-opacity: 0.8;  
  -khtml-opacity: 0.8;  
  opacity: 0.8;  //增加透明效果
  /*display: none;*/
}
+mobile() {
  right: 20px;
  bottom: 45px;  //微调位置
  -moz-opacity: 0.8;  
  -khtml-opacity: 0.8;  
  opacity: 0.8;  //增加透明效果
  /*display: none;*/
}
```

# Step 3
在移动端启用回到顶部按钮
使用文本编辑器打开`/themes/next/source/css/_common/components/back-to-top.styl`
在`.back-to-top`下将部分代码修改如下：
```css
+mobile() {
  right: 20px;
  -moz-opacity: 0.8;  
  -khtml-opacity: 0.8;  
  opacity: 0.8;  
  /*display: none;*/
}
+tablet() {
  right: 20px;
  -moz-opacity: 0.8;  
  -khtml-opacity: 0.8;  
  opacity: 0.8;  
  /*display: none;*/
}
```
完成

**注：个人预计在小屏移动端可能会出现适配不良的情况；以及友链较多的博客慎用，可能会产生向下溢出？*
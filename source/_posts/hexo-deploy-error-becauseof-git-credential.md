---
title: 由于GitHub放弃支持TLS1.0/1.1而导致的Hexo部署失败解决方法
date: 2018-02-26 17:39:01
tags:
  - Hexo
  - 博客
  - 教程
  - git
  - 前端
  - bug修复
category:
  - Hexo折腾
---

如果你最近在执行Hexo部署的时候遇到`fatal:HttpRequestException encountered`这个错误，这篇文章提供了解决方法。
<!--more-->

# 起因
昨天因为一些情况修改了一点博文，在部署Hexo的时候发现出现了莫名其妙的错误，类似下图：
![](https://lc-cqha0xyi.cn-n1.lcfile.com/b2305520feaebfc8b13c.jpg)
这个错误就很神奇，尤其是那个No error搞得我一脸懵逼...
尝试良久无果，于是改用ssh方式提交，成功。
与[@Axton](https://github.com/yrccondor)讨论过后，发现是gayhub最近停用了TLS1.0/1.1，然后巨硬底层太老不支持TLS1.2，于是https就提交不上去。
![](https://lc-cqha0xyi.cn-n1.lcfile.com/706f25c065aece1e0041.jpg)
感谢[@Axton](https://github.com/yrccondor)供图2333

于是跑去hexo-deployer-git提[issue](https://github.com/hexojs/hexo-deployer-git/issues/102)，被告知问题已经被巨硬解决了，尝试了一下没有毛病。
不过我看目前仍很多人都还不知道解决方法，于是就打算写这么一篇短文。

# 解决方法
最为推荐的解决方法就是直接下载最新版（v2.16.2）的git，其中已经集成了巨硬提供的解决方法。
[点我前往下载页面](https://git-scm.com/download/)
如果你不愿意更新git，你也可以单独安装巨硬提供的解决方法：
在[这个页面](https://github.com/Microsoft/Git-Credential-Manager-for-Windows/releases/)下载最新版Git Credential Manager for Windows并安装。
完成安装后，问题就自动解决了。
**（安装完Git Credential Manager for Windows后请不要手贱卸载！！）**
**（不然重装后也一直是错误！！鬼知道这是什么原因...）**
**（然后下载了最新版git才解决问题）**

# 相关issue
[hexojs/hexo#3043](https://github.com/hexojs/hexo/issues/3043)
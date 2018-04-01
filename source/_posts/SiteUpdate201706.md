---
title: 2017年6月全站重大更新
category:
  - 博客通知
  - 更新
date: 2017-06-17 10:10:45
tags:
---


![](https://lc-cqha0xyi.cn-n1.lcfile.com/0ea297aaa2ff47b004e7.jpg)

<!--more-->

# 新域名leaferx.online已投入使用

手一抖就花了5块钱买了个新域名orz 不过至少比leaferx.github.io好一点qwq
github不能挂SSL证书是真的麻烦 最后只能用CloudFlare来反代一下
CloudFlare是真的良心 不仅搞定了SSL而且能自动续期（虽然是公用SSL证书） 还有CDN加成（虽然都是美国节点）和安防（虽然对Github Pages并没有什么卵用） 甚至还可以做到全站http直接301到https 以及增加了网站统计功能 简直Github Pages最佳伴侣 最重要是的这些还都免费 所以忍不住打个广告qwq

不过对墙内的朋友们就不太友好了...Github和CloudFlare各种被半墙...有时间得弄下国内CDN
换了域名百度那边瞬间爆炸 本就不多的索引量瞬间清零 不过最近并没有什么SEO的想法
而且百度站长这个工具实在太难用了 各种通不过验证 简直毒 于是更没有兴趣了

由于全站访客人数统计用的是不蒜子 所以更换域名后4000+的人数被清零了 要重新开始
所以请大家来后多刷新几下再走啊qwqqqqqqqqqqqq

![](https://lc-cqha0xyi.cn-n1.lcfile.com/6b5992490d4ad5ed0f01.jpg)
![](https://lc-cqha0xyi.cn-n1.lcfile.com/726130e60ca11bd7446d.jpg)

# 评论系统已更换为LiveRe

![](https://lc-cqha0xyi.cn-n1.lcfile.com/39134ddfc6d03a6ecb60.jpg)
今年多说停止服务了 这么好的一个社会化评论系统彻底归为历史
于是一直在找多说的代替品
然而Disqus被墙 网易云更贴和搜狐畅言实在太丑...
前段时间一直在用Gitment过渡 为此我还发了个PR
Gitment好是好 但是只支持Github账户 面向群体有些小众 而且在移动端貌似还有奇奇怪怪的问题 于是还是琢磨着要换一个
然后在看到livere的时候就立刻拍板 就是它了（虽然中文名来必力真的很蠢而且总是让我想起来必堡......）
支持Github、QQ、微信登录 所以少年不如评论一发造成这个博客似乎有人来的假象？？？

# NexT主题已更新至5.1.1
由于当年年少无知修改主题的时候都是直接修改 并没有用git 所以升级只能手动合并 特别麻烦
这里安利一个用来比较和合并文件和文件夹的软件 Beyond Compare 超级好用
当然 由于是手动合并 免不了有点疏漏 如果出现了bug请和我联系或者在底下评论 谢谢w

## 文章底部加入版权信息
如果没有特殊说明 本站所有文章均采用 [CC BY-NC-SA 4.0 CN](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh) 许可协议
顺便求个友链ww

## 开启Scroll Percent功能
在返回顶部按钮上加入了阅读进度
![](https://lc-cqha0xyi.cn-n1.lcfile.com/30773a07b7dd49d9dc9a.jpg)

## 开启Save Scroll功能
每篇文章的阅读进度都会写入cookies 这样等你返回的时候就能从你退出的地方读起啦

## 禁用底部点击小心心功能
出于代码整洁度和实用性考虑 该功能已被禁用
不过最近在构思一个可以统计点赞数量的tag 如果写出来了会写篇文章介绍

## 其他细节性改善
如禁用ScrolltoMore功能、解决sidebar内滚动功能（虽然暂时还用不到）等
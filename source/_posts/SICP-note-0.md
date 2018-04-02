---
title: Notes of SICP 0
tags:
  - 笔记
  - 编程
  - 学习
  - 计算机程序的构造和解释
  - SICP
category:
  - Notes of SICP
date: 2017-04-23 11:30:32
---

> “世之奇伟、瑰怪、非常之观，常在于险远，而人之所罕至焉，故非有志者不能至也。”<br>王安石《游褒禅山记》

这是《计算机程序的构造和解释》（Structure and Interpretation of Computer Programs）笔记系列的第0篇
![book cover](https://lc-cqha0xyi.cn-n1.lcfile.com/d781a9ca917e7c8aa863.jpg)
<!--more-->
是的我终于来诈尸了 好久不见
考完学考选考感觉自己像个废人 然后5.1物理省赛 最近是真的忙
但梦想不能丢对吧 于是我打算开始了这本书的笔记（其实只是算法导论实在刷不下去了orzzz）
这本书大概算是圈中公认的（至少是知乎qwq）一本计算机编程入门奇书
书的内容按大佬们的说法是各种抽象概念和抽象方法 是一本讲述控制复杂度方法的入门书
同按大佬的说法 阅读这本书的最终目的是抓住计算机中的神灵
其实这本书我断断续续阅读了也大概有两个月了 算是勉强看完了前三章 虽然是按照阅读《xxx从入门到精通》的节奏
所以决定痛改一下前非 认真地啃完这本书
第0篇主要写一些准备内容吧比如环境搭建啊还有一些学习资源啊什么的
嗯 算法导论再见
好了以上是瞎吐槽 跳过就好
顺便放张图 共勉
![0-0](https://lc-cqha0xyi.cn-n1.lcfile.com/eabbafb0ff7ffe589cd2.jpg)

---

## Introduction
我用的是机械工业出版社和中信出版社出版的SICP中文译本
[豆瓣链接](https://book.douban.com/subject/1148282/)
> **带着崇敬和赞美，将本书献给活在计算机里的神灵。**
“我认为，在计算机科学中保持计算中的趣味性是特别重要的事情。这一学科在起步时包含着趣味性。当然，那些付钱的客户们时常觉得受了骗。一段时 间之后，我们开始严肃地看待他们的抱怨。我们开始感觉到，自己真的像是要负起成功地、无差错地、完美地使用这些机器的责任。我不认为我们可以做到这些。我 认为我们的责任是拓展这一领域，将其发展到新的方向，并在自己的家里保持趣味性。我希望计算机科学的领域绝不要丧失其趣味意识。最重要的是，我希望我们不 要变成传道士，不要认为你是兜售圣经的人，世界上这种人已经太多了。你所知道的有关有关计算的东西，其他人也都能学到。绝不要认为似乎成功计算的钥匙就掌 握在你的手里。你所掌握的，也是我认为并希望的，也就是智慧：那种看到这一机器比你第一次站在它面前时能做得更多的能力，这样你才能将它向前推进。”
*Alan J. Perlis*

目录构成：
- 构造过程抽象（Building Abstractions with Procedures）
- 构造数据抽象（Building Abstractions with Data）
- 模块化、对象和状态（Modularity, Objects, and State）
- 元语言抽象（Meta-Linguistic Abstraction）
- 寄存器机器里的计算（Register Machine' Model of Control）

## Environment
我使用Racket 6.8 64位作为实验和习题环境
Racket的安装包可以在[Racket官网](http://racket-lang.org/)获得
安装完后 可以使用由Neil大佬提供的SICP语言包进行编程
（Racket看上去是一个很好玩的语言平台 有空可以去深入一下）
（好吧我其实只是实在搞不懂MIT-GNU Scheme...）
安装SICP语言包的方法：
1. 打开DrRacket
2. 在上方编辑框内将 #lang racket 改为 #lang planet neil/sicp 并点上方Run
3. 等下载好安装好后 重启DrRacket
4. 点击上方菜单栏 Language => Choose language... => Teaching Languagues 选择下方的SICP 然后点OK
5. 完成 会看到下方编辑框显示：Language: SICP (PLaneT 1.18); memory limit: xxx MB. 如果没有请点一下Run或者重启 接下来就可以在下方编辑框编写程序了

## Resources
[MIT公开课](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-001-structure-and-interpretation-of-computer-programs-spring-2005/video-lectures/)（英文）
[MIT公开课视频翻译项目](https://github.com/DeathKing/Learning-SICP)
[北大课程资料](http://www.math.pku.edu.cn/teachers/qiuzy/progtech/)（使用SICP作为课本）
[知乎问题：《计算机程序的构造和解释（SICP）》讨论的核心问题是什么？](https://www.zhihu.com/question/26549715)
还有许多大佬的笔记 搜索关键词：SICP 笔记 就行

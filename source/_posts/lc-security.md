---
title: Leancloud访客统计插件重大安全漏洞修复指南
date: 2018-02-11 18:18:07
tags: 
  - Hexo
  - NexT
  - 博客
  - 教程
  - 漏洞
  - Leancloud
category: 
  - Hexo折腾
---

NexT主题使用的Leancloud访客统计插件存在重大安全漏洞，拥有不良企图的人利用该漏洞可随意更改访客数量或一定程度上增删数据库记录。
该漏洞由[我](https://github.com/LEAFERx/)独立发现，并由[Ivan.Nginx](https://github.com/ivan-nginx)确认。
- 有关的issue：[#25](https://github.com/theme-next/hexo-theme-next/issues/25)
- 有关的pr：[#137](https://github.com/theme-next/hexo-theme-next/pull/137)
- 有关的插件：[hexo-leancloud-counter-security](https://github.com/theme-next/hexo-leancloud-counter-security)

经过讨论后，我们认为该漏洞必须由使用者手动修复。本文给出了修复方法。
**注意：所有使用该插件而未经修复的NexT站点或使用类似方法集成Leancloud访客统计功能的站点都被认为是不安全的，请尽快修复。**

For International Users:
This post is a guide to fix a serious security bug in Leancloud visitor counter, which is found by [me](https://github.com/LEAFERx/) and confirmed by [Ivan.Nginx](https://github.com/ivan-nginx).
Someone could use this bug to change your visitor number easily and even add/delete records in your database.
This bug could only be fixed manually.
- related issue: [#25](https://github.com/theme-next/hexo-theme-next/issues/25)
- related pr: [#137](https://github.com/theme-next/hexo-theme-next/pull/137)
- related plugin: [hexo-leancloud-counter-security](https://github.com/theme-next/hexo-leancloud-counter-security)

**Warning: All NexT sites using Leancloud visitor counter that are not fixed and other sites integrated this function by similiar ways are considered unsecurity. Please fix it as soon as possible!**
<del>English version guide is under translating and will be released in few days.</del>
*2018.3.16: English version guide is [here](https://leaferx.online/2018/03/16/lc-security-en/)*

<!--more-->

---

为方便起见，本文将复述从头开始配置Leancloud访客统计插件的过程。
本文部分内容参考自Doublemine的[为NexT主题添加文章阅读量统计功能](https://notes.wanghao.work/2015-10-21-%E4%B8%BANexT%E4%B8%BB%E9%A2%98%E6%B7%BB%E5%8A%A0%E6%96%87%E7%AB%A0%E9%98%85%E8%AF%BB%E9%87%8F%E7%BB%9F%E8%AE%A1%E5%8A%9F%E8%83%BD.html#%E9%85%8D%E7%BD%AELeanCloud)。
对于已经完成该部分配置的用户，请自行对照本文步骤进行修复。

<del>在配置前，请升级NexT至v6.0.5以上。
*2018.2.26：目前NexTv6.0.5已经更新，但相关pr仍在讨论中。预计该漏洞将在v6.0.6修复*
*注：在本文发布时相关pull-request还在review当中，NexTv6.0.5仍未更新，请自行合并pr或按文末不更新主题的方法修复该漏洞。*</del>
*2018.3.16：NexTv6.0.6已更新，该修复插件作为beta功能暂时添加，默认security选项为false，预计于v6.0.7正式添加。*

在配置过程中请注意**博客配置文件**和**主题配置文件**的区别。

---

# 注册Leancloud并创建应用
- 首先，前往Leancloud官网[leancloud.cn](leancloud.cn)进行注册，并登陆。
- 然后点击图示`1`处，进入控制台：![1](https://lc-cqha0xyi.cn-n1.lcfile.com/fc0c048a1e25dc3d10aa.jpg)
- 接着，点击图示`1`处，创建应用：![2](https://lc-cqha0xyi.cn-n1.lcfile.com/33a56b754753a5d34b01.jpg)
- 在弹出窗口`1`处输入应用名称（可随意输入，可更改，为演示方便取名为test），并选择`2`处“开发版”，然后点击`3`处创建：![3](https://lc-cqha0xyi.cn-n1.lcfile.com/649ccfc6f12015d1eefb.jpg)

到这里应用创建完成。

# 建立Counter类并在NexT中启用插件
- 点击`1`处应用名称进入应用管理界面：![4](https://lc-cqha0xyi.cn-n1.lcfile.com/d0889df29841661e0b9e.jpg)
- 如图，点击侧边栏`1`处创建Class：![5](https://lc-cqha0xyi.cn-n1.lcfile.com/b0fbc81bd6c19fa09a46.jpg)
- 在弹出窗口`1`处填入`Counter`，勾选`2`处无限制，并点击`3`处创建Class：![6](https://lc-cqha0xyi.cn-n1.lcfile.com/ae6154d6a55f02f11ebf.jpg)
- 此时类已创建完成。接下来点击图示`1`处进入设置，然后点击`2`处进入应用Key：![8](https://lc-cqha0xyi.cn-n1.lcfile.com/9501a6372918dd9a8a92.jpg)
- 粘贴`App ID`和`App Key`到**NexT主题配置文件**`_config.yml`对应位置。此时配置文件应如下：
```yml
leancloud_visitors:
  enable: true
  app_id: <<your app id>>
  app_key: <<your app key>>
```
- 设置Web安全域名确保域名调用安全。点击`1`处进入安全中心，然后在`2`处填写自己博客对应的域名（**注意协议、域名和端口号需严格一致**）：![9](https://lc-cqha0xyi.cn-n1.lcfile.com/0e537cc4bec2e185201d.jpg) 

到这里内容均与Doublemine的[为NexT主题添加文章阅读量统计功能](https://notes.wanghao.work/2015-10-21-%E4%B8%BANexT%E4%B8%BB%E9%A2%98%E6%B7%BB%E5%8A%A0%E6%96%87%E7%AB%A0%E9%98%85%E8%AF%BB%E9%87%8F%E7%BB%9F%E8%AE%A1%E5%8A%9F%E8%83%BD.html#%E9%85%8D%E7%BD%AELeanCloud)这篇文章相同，只不过截图为新版的Leancloud的界面。

# 部署云引擎以保证访客数量不被随意篡改
- 点击左侧`1`处云引擎，然后点击`2`处部署，再点击`3`处在线编辑：![10](https://lc-cqha0xyi.cn-n1.lcfile.com/d7056dfeeef7c5d66318.jpg)
- 点击`1`处创建函数：![11](https://lc-cqha0xyi.cn-n1.lcfile.com/2737841bbc2bdd572ae0.jpg)
- 在弹出窗口选择`1`处`Hook`类型，然后`2`处选择`beforeUpdate`，`3`处选择刚才建立的`Counter`类。在`4`中粘贴下方代码后，点`5`处保存。
```javascript
var query = new AV.Query("Counter");
if (request.object.updatedKeys.indexOf('time') !== -1) {
    return query.get(request.object.id).then(function (obj) {
        if (obj.get("time") + 1 !== request.object.get("time")) {
            throw new AV.Cloud.Error('Invalid update!');
        }
    })
}
```
  如图所示：![12](https://lc-cqha0xyi.cn-n1.lcfile.com/a8e13418ed1d9405315b.jpg)
- 点击保存后应出现类似红框处函数。此时点击`1`处部署：![13](https://lc-cqha0xyi.cn-n1.lcfile.com/ca56bf2e5fc2a1343565.jpg)
- 在弹出窗口点击`1`处部署：![14](https://lc-cqha0xyi.cn-n1.lcfile.com/17548c13b3b23c71d845.jpg)
- 等待出现红框处的成功部署信息后，点击`1`处关闭：![15](https://lc-cqha0xyi.cn-n1.lcfile.com/d2f50de6cefea9fd0ed3.jpg)

至此云引擎已成功部署，任何非法的访客数量更改请求都将失败。

# 进一步设置权限（可选，建议设置）
- 打开**NexT主题配置文件**`_config.yml`，将leancloud_visitors下的security设置为true（如没有则新增）：
```yml
leancloud_visitors:
  enable: true
  app_id: <<your app id>>
  app_key: <<your app key>>
  # Dependencies: https://github.com/theme-next/hexo-leancloud-counter-security
  security: true
  betterPerformance: false
```
  **对`betterPerformance`选项的说明：**
  由于Leancloud免费版的云引擎存在请求线程数和运行时间限制以及休眠机制，很多时候访客数量加载会很慢。如果设置`betterPerformance`为`true`，则网页则会在提交请求之前直接显示访客人数为查询到的人数+1，以增加用户体验。
- 打开**博客配置文件**`_config.yml`，新增以下配置：
```yml
leancloud_counter_security:
  enable_sync: true
  app_id: <<your app id>>
  app_key: <<your app key>
  username: 
  password: 
```
- 打开cmd并切换至**博客根目录**，键入以下命令以安装`hexo-leancloud-counter-security`插件：
```
npm install hexo-leancloud-counter-security --save
```
- 在相同目录键入以下命令：
    ```
    hexo lc-counter register <<username>> <<password>>
    ```
  或
  ```
  hexo lc-counter r <<username>> <<password>>
  ```
  将`<<username>>`和`<<password>>`替换为你自己的用户名和密码（不必与leancloud的账号）相同。此用户名和密码将在hexo部署时使用。
- 打开**博客配置文件**`_config.yml`，将`<<username>>`和`<<password>>`替换为你刚刚设置的用户名和密码：
```yml
leancloud_counter_security:
  enable_sync: true
  app_id: <<your app id>>
  app_key: <<your app key>
  username: <<your username>> #如留空则将在部署时询问
  password: <<your password>> #建议留空以保证安全性，如留空则将在部署时询问
```
- 在**博客配置文件**`_config.yml`的`deploy`下添加项：
```yml
deploy:
  # other deployer
  - type: leancloud_counter_security_sync
```
- 返回Leancloud控制台的应用内。依次点击`1` `2`，检查_User表中是否出现一条记录（图示以用户名为admin为例）：![16](https://lc-cqha0xyi.cn-n1.lcfile.com/99faa5a0e7160e66d506.jpg)
- 点击`1`处进入Counter表，依次点击`2` `3`，打开权限设置：![17](https://lc-cqha0xyi.cn-n1.lcfile.com/b72a9e64579f5b71749d.jpg)
- 点击`1`add_fields后选择`2`指定用户， 并将下两栏留空：![18](https://lc-cqha0xyi.cn-n1.lcfile.com/14a8cb37062693d768ad.jpg)
- 点击`1`create后选择`2`指定用户， 在`3`处键入用户名，点击`4`处后点击`5`处添加：![19](https://lc-cqha0xyi.cn-n1.lcfile.com/d91714cfd703ef42b94c.jpg)完成此步操作后，界面应与图示类似：![20](https://lc-cqha0xyi.cn-n1.lcfile.com/c05e7ec9218820baf412.jpg)
- 点击`1`delete后选择`2`指定用户， 并将下两栏留空：![21](https://lc-cqha0xyi.cn-n1.lcfile.com/c37b6e20726cfb1d3197.jpg)

至此权限已设置完成，数据库记录只能在本地增删。
每次运行`hexo d`部署的时候，插件都会扫描本地`source/_posts`下的文章并与数据库对比，然后在数据库创建没有录入数据库的文章记录。
如果在**博客配置文件**中留空username或password，则在部署过程中程序会要求输入。

# 手动修改lean-analytics-swig的方法（不建议）
不愿更新NexT主题的用户可使用此方法保证插件正常使用。
**强烈建议更新NexT至v6.0.5以上。**
打开`\layout\_third-party\analytics\lean-analytics.swig`文件，替换为以下内容：
```
{% if theme.leancloud_visitors.enable %}

  {# custom analytics part create by xiamo; edited by LEAFERx #}
  <script src="https://cdn1.lncld.net/static/js/av-core-mini-0.6.4.js"></script>
  <script>AV.initialize("{{theme.leancloud_visitors.app_id}}", "{{theme.leancloud_visitors.app_key}}");</script>
  <script>
    function showTime(Counter) {
      var query = new AV.Query(Counter);
      var entries = [];
      var $visitors = $(".leancloud_visitors");

      $visitors.each(function () {
        entries.push( $(this).attr("id").trim() );
      });

      query.containedIn('url', entries);
      query.find()
        .done(function (results) {
          var COUNT_CONTAINER_REF = '.leancloud-visitors-count';

          if (results.length === 0) {
            $visitors.find(COUNT_CONTAINER_REF).text(0);
            return;
          }

          for (var i = 0; i < results.length; i++) {
            var item = results[i];
            var url = item.get('url');
            var time = item.get('time');
            var element = document.getElementById(url);

            $(element).find(COUNT_CONTAINER_REF).text(time);
          }
          for(var i = 0; i < entries.length; i++) {
            var url = entries[i];
            var element = document.getElementById(url);
            var countSpan = $(element).find(COUNT_CONTAINER_REF);
            if( countSpan.text() == '') {
              countSpan.text(0);
            }
          }
        })
        .fail(function (object, error) {
          console.log("Error: " + error.code + " " + error.message);
        });
    }

    function addCount(Counter) {
      var $visitors = $(".leancloud_visitors");
      var url = $visitors.attr('id').trim();
      var title = $visitors.attr('data-flag-title').trim();
      var query = new AV.Query(Counter);

      query.equalTo("url", url);
      query.find({
        success: function(results) {
          if (results.length > 0) {
            var counter = results[0];
            counter.fetchWhenSave(true);
            counter.increment("time");
            counter.save(null, {
              success: function(counter) {
                var $element = $(document.getElementById(url));
                $element.find('.leancloud-visitors-count').text(counter.get('time'));
              },
              error: function(counter, error) {
                console.log('Failed to save Visitor num, with error message: ' + error.message);
              }
            });
          } else {
            {% if theme.leancloud_visitors.security %}
              var $element = $(document.getElementById(url));
              $element.find('.leancloud-visitors-count').text('Counter not initialized! See more at console err msg.');
              console.error('ATTENTION! LeanCloud counter has security bug, for solve it see here: https://github.com/theme-next/hexo-leancloud-counter-security. \n If you see this message, you must have set the security config to true but not install the plugin.');
            {% else %}
              var newcounter = new Counter();
              /* Set ACL */
              var acl = new AV.ACL();
              acl.setPublicReadAccess(true);
              acl.setPublicWriteAccess(true);
              newcounter.setACL(acl);
              /* End Set ACL */
              newcounter.set("title", title);
              newcounter.set("url", url);
              newcounter.set("time", 1);
              newcounter.save(null, {
                success: function(newcounter) {
                  var $element = $(document.getElementById(url));
                  $element.find('.leancloud-visitors-count').text(newcounter.get('time'));
                },
                error: function(newcounter, error) {
                  console.log('Failed to create');
                }
              });
            {% endif %}
          }
        },
        error: function(error) {
          console.log('Error:' + error.code + " " + error.message);
        }
      });
    }

    $(function() {
      var Counter = AV.Object.extend("Counter");
      if ($('.leancloud_visitors').length == 1) {
        addCount(Counter);
      } else if ($('.post-title-link').length > 1) {
        showTime(Counter);
      }
    });
  </script>

{% endif %}
```

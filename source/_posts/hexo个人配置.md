---
title: Hexo + Next 配置与美化
tags: hexo
categories: hexo
songid: 401540
photos: 
---

#### 前言

折腾了一段时间的主题，被各种炫酷的主题搞得忘记了博客的初心。最后还是回归Next怀抱，next的配置相对而言非常齐全，下面的文章我只写了些我自己的一些配置需要，其他第三方服务可以参考[next官网](http://theme-next.iissnan.com/third-party-services.html)


<!-- more -->

#### 部署流程
```bash
    hexo clean
    hexo d -g
```
#### 设置Menu
1. 首先创建一个目标页面（举例创建一个tags页面）
```
hexo new page "tags"
```
1. 根目录source 就会多出一个tags文件夹，接下来修改tags文件夹下的index.md
```
type: "tags"
```
1. 修改主题下的_config.yml 的menu 选项，增加tags 选项 || 后面是menu 的 icon
```
menu:
  Home: / || home
  tags: /tags || tags
```
1. 修改主题下的 languages/zh-Hans.yml
```
menu:
  home: 首页
  archives: 归档
  categories: 分类
  tags: 标签 //改成自己对应的名字
  about: 关于
```
#### 修改背景
找到主题下的 **next\source\css\_common\outline\outline.styl** 修改body的样式就可以了

#### 添加网易云音乐
分两种添加，一种在个人信息栏，一种是在文章顶部添加
- **个人信息栏添加**
找到文件 **next\layout\_macro\sidebar.swig**  找到下面的字段
```
include '../_custom/sidebar.swig'
在这里添加上 网易云的外链
```
- **文章顶部添加**
和上面的方法一样，都是添加网易云外链，只不过，修改了下模板。可以自定义音乐，以及是否添加音乐
找到文件**next\layout\_macro\post.swig** 在 `</header>`上方添加下面的代码
```
{% if post.songid %}
    <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id={{ post.songid }}&auto=0&height=66"></iframe>
{% endif %}
```
    然后在文章顶部添加 字段 sondid ,值为歌曲ID
    ```
    ---
    title: 
    tags: 
    categories: 
    songid: //歌曲ID
    ---
    ```
    > 1.如果没有sondid 字段或者 sondid 为空则不会出现音乐。
    > 2.如果要让首页展示的时候不出现音乐，文章打开后出现音乐，可以在 `post.songid` 判断后面添加 `and (not is_index)` 


#### 添加自定义页面

##### 页面内渲染(主题和布局依然存在，只是在特定区域渲染)
1. 修改 `menu` 增加菜单(列如: test)
```
menu:
    首页: /
    测试: /test/
```
1. 新建test页面 `hexo new page test`
1. test文件夹下的index.md文件头部添加 layout: false
1. 在`test` 文件夹下添加`index.html` 用于渲染自定义页面

##### 完全渲染(一个崭新的页面) 

将上一个方法的第3步改为:  
在根目录的`_config.yml` 配置中,找到`skip_render` 添加 `test/**`

#### 写在最后的话
{% note primary %}如果您觉得文章有什么地方写错了，哪里写得不好，或者有什么建议，期待您的指点{% endnote %}
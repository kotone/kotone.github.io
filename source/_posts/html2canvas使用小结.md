---
title: html2canvas使用小结
date: 2018-07-22
tags: [笔记]
categories: 前端
songid: 
photos: 
---
`html2canvas`顾名思义,就是将html转化为canvas。日常开发中可以将一个活动页生成canvas然后转换成图片分享传播。
最近两个项目都用到了`html2canvas`,也遇到了一些常见的问题。所以小结下经验。
<!-- more -->
> 贴上 [html2canvas](https://github.com/niklasvh/html2canvas/) 的github地址  
### 生成内容不完整的情况

#### 1. 元素超过容器设置的高度
```html
<!-- 生成canvas的容器 -->
<div id="to-canvas" class="wrap">
    <img src="./bg.jpg" width="300px" height="300px" alt="">
    <div class="content">测试内容</div>
</div>
```
```css
/* css */
.wrap{
  width:300px;
  height:300px;
  margin:0 auto;
}
```
容器高度为300,图片的高度为300,那么文字就超过容器的高度了，所以生成的canvas是不会显示文字的。
#### 2. 容器设置了translate
```
<!-- html不变  只修改wrap的css-->
.wrap{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width:300px;
}
```
这样生成的canvas是一个整体向上、向左移动50%（?）只显示了容器的右下部分

### 一些小技巧？
#### 1.要转换成canvas容器不显示在页面
设置容器的`opacity:0`;  设置成`visibility: hidden;`以及`display:none`会生成空白的canvas
#### 2.生成图片跨域问题。
图片base64位,或者添加一个配置
```js
html2canvas(document.querySelector('#to-canvas'),{
  useCORS: true
})
```
#### 3.图片高清问题
用的最新版的,发现生成的canvas是根据设备dpr变化的。保证了canvas的高清。网上很多是通过创建一个自定义canvas。添加一个`scale`配置。

#### 4.`transform.js` 和 `html2canvas`
如果容器内部的img元素使用了`transform.js`,这个元素需要设置定位`top,left`值，否则容器上设置的`border-radius`,会影响到该元素，使其也带有圆角属性。
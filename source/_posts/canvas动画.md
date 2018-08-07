---
title: canvas绘制GIF
comments: false
is_update: false
date: 2018-08-05
categories: 前端
tags: [canvas,python3]
songid: [34468461]
photos: 
---
ps: 歌曲有毒
这周实现一个和 `canvas` 动画，目标就是给出一个 `GIF`,然后在页面使用 `canvas` 绘制出来。
实现思路大致为将 `GIF `**每帧**保存为一张图片，然后使用`canvas`绘制每帧
<!-- more -->
#### “分解” `GIF`
首先第一步就是得到 `GIF` 的每帧的图片,我这里使用的是 `python3`,另外 `github` 有个绘制 `GIF` 的[js 库](https://github.com/matt-way/gifuct-js)
贴上 `python3` 代码：
```python
import os
# python3 => pip install Pillow
from PIL import Image

def main(gif_file):
    png_dir = gif_file[:-4] + '/'
    os.mkdir(png_dir)
    img = Image.open(gif_file)
    try:
        while True:
            current = img.tell()
            img.save(png_dir+str(current)+'.png')
            img.seek(current+1)
    except:
        pass

main('nico.gif')
```
#### `canvas`绘制
经过上面的处理，得到了`gif`每帧的图片(图片数量由`gif`帧数决定),接下来，将图片绘制在`canvas`中
```js
var DrawGif = function(imgArr,fps,width,height) {
  this.startFrame = 0;  //开始帧
  this.endFrame = imgArr.length-1;  //结束帧
  this.width = width;
  this.height = height;
  this.imgArr = imgArr;
  this.fps = fps;
  this.frameRate = 1000/this.fps;
}
DrawGif.prototype = {
  init: function() {
    var canvas = this.canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.ctx = canvas.getContext("2d");
    this.imgObj = [];

    for(var k in this.imgArr){
        var img = new Image();
        img.src = this.imgArr[k];
        this.imgObj.push(img);
    }
    this.endFrame = this.imgObj.length - 1;
    return this
  },
  play: function(Callback) {
    this.init()
    var canvas = this.canvas
    var self = this;
    this.tiemer = setInterval(function() {
      self.startFrame < self.endFrame ? self.startFrame++
                                      : self.startFrame = 0
      self.ctx.clearRect(0,0,self.width,self.height);
      self.ctx.drawImage(self.imgObj[self.startFrame], 0, 0,self.width,self.height);
    },this.frameRate)
    Callback(canvas);
  }
}
```
再调用上面的函数： 
```js
// 图片路径
var img_arr = []
for (var i = 0; i < 22; i++) {
  img_arr.push('./img/nico/' + i + '.png')
}
// 调用函数
var gif = new DrawGif(img_arr, 12, 300, 300)
gif.play(function(canvas){
  document.body.appendChild(canvas)
});
```
效果图如下： 
![gif2canvas](http://ozweypnnh.bkt.clouddn.com/gif2canvas.gif)

#### 完善添加函数功能
上面的函数只能无限循环,现在让`gif`只播放一次,以及支持结束后的回调
```js
...
// 修改下play 函数
play: function(options,Callback) {
  this.init()
  var loop = options.loop || false; // 循环
  var isComplete = options.isComplete || function(){}; // 完成后的回调
  var canvas = this.canvas
  var self = this;
  
  this.tiemer = setInterval(function() {
    var end = self.startFrame < self.endFrame
    if (loop) {
      end ? self.startFrame++ : self.startFrame = 0
    } else {
      end ? self.startFrame++ : self.stop() && isComplete()
    }
    self.ctx.clearRect(0,0,self.width,self.height);
    self.ctx.drawImage(self.imgObj[self.startFrame], 0, 0,self.width,self.height);
  },this.frameRate)
  Callback(canvas);
},
// 添加 stop 函数
stop: function() {
  clearInterval(this.tiemer);
  return this
}
```
调用部分变更为：
```js
...
// 调用函数
var gif = new DrawGif(img_arr, 12, 300, 300)
gif.play({
  loop: false, // 不循环
  isComplete: function(){
    console.log('niconiconi') // 结束执行函数
  }
},function(canvas){
  document.body.appendChild(canvas)
});
```
完整代码：
```js
var DrawGif = function(imgArr,fps,width,height) {
  this.startFrame = 0;  //开始帧
  this.endFrame = imgArr.length-1;  //结束帧
  this.width = width;
  this.height = height;
  this.imgArr = imgArr;
  this.fps = fps;
  this.frameRate = 1000/this.fps;
}
DrawGif.prototype = {
  init: function() {
    var canvas = this.canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.ctx = canvas.getContext("2d");
    this.imgObj = [];

    for(var k in this.imgArr){
        var img = new Image();
        img.src = this.imgArr[k];
        this.imgObj.push(img);
    }
    this.endFrame = this.imgObj.length - 1;
    return this
    
  },
  play: function(options,Callback) {
    this.init()
    var loop = options.loop || false; // 循环
    var isComplete = options.isComplete || function(){}; // 完成后的回调
    var canvas = this.canvas
    var self = this;
    
    this.tiemer = setInterval(function() {
      var end = self.startFrame < self.endFrame
      if (loop) {
        end ? self.startFrame++ : self.startFrame = 0
      } else {
        end ? self.startFrame++ : self.stop() && isComplete()
      }
      self.ctx.clearRect(0,0,self.width,self.height);
      self.ctx.drawImage(self.imgObj[self.startFrame], 0, 0,self.width,self.height);
    },this.frameRate)
    Callback(canvas);
  },
  stop: function() {
    clearInterval(this.tiemer);
    return this
  }
}

// 调用部分
var gif = new DrawGif(img_arr, 12, 300, 300)
gif.play({
  loop: false,
  isComplete: function() {
    console.log('niconiconi')
  }
},function(canvas){
  document.body.appendChild(canvas)
});
```
#### 改进的地方
1. 如果`play`函数没有传`options`参数，会导致报错。需要对函数参数进行判断。
2. 构造函数是否有更优化？(总觉得还可以优化)
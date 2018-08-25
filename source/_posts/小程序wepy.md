---
title: 微信小程序及wepy使用-总结篇
comments: false
is_update: true
date: 2018-08-25 17:23:08
categories: '微信小程序'
tags: ['wepy', '微信小程序']
songid:
photos:
---
{% note info %} 微信小程序及wepy使用-总结篇(不定期跟新) {% endnote %} 

总结一些自己在开发小程序时觉得很有用，或者踩过的坑
<!-- more -->
### `promise` 封装
小程序 `api` 中有很多异步函数,比如 `request、login....`，在处理`微信登陆`、`微信授权`...等会出现大量回调,影响代码的可读性。所以可以将内置的异步函数封装成 `promise` 。
```js
export const promisify = fn => {
  return (obj = {}) => {
    return new Promise((resolve, reject) => {
      obj.success = function (res) {
        resolve(res)
      }
      obj.fail = function (res) {
        reject(res)
      }
      fn(obj)
    })
  }
}

// 使用
const wxRequestPromise = promisify(wx.request)
wxRequestPromise().then(res => console.log(res))
```
如果是使用 `wepy` 只需要开启 `promise` 就可以直接使用 `promise` 了
```js
wepy.request().then(res => {console.log(res)})
```

### `wepy` 拦截器
`wepy` 提供了 `intercept` 全局拦截器，可以对原生API的请求进行拦截
例如我们需要在给所有的请求添加自定义 `header` 头:
```js
// 拦截器
this.intercept('request', {
  config (p) {
    p.header = {'version': '3.0', 'XX-Token': token}
    return p
  },
  success (p) {
    return p
  }
})
```
这样所有的请求都会带上自定义的 `header` 头去请求。还可以对请求结果进行处理，具体看情况了。
### 小程序授权
针对授权，个人的处理方式是：
1. 首先写一个模拟弹窗子组件，这个弹窗主要是用于用户拒绝了某授权后弹出的,弹窗信息作为参数,按钮为打开 `opensetting` 系统组件。
2. 如果是进入首屏就需要用户授权的，可以写一个`覆盖整个屏幕透明的`授权按钮，检测用户授权后再隐藏按钮。
3. 友好型授权，需要用户授权的时候才弹出授权，配合`模拟弹窗子组件`使用，判断用户授权状态。

### `web-view`使用
1. 引入移动端调试工具。比如 `eruda` 。真机预览才能看到写的 `bug` 。
2. 如果要在 `web-view` 页面使用图片上传等功能, `input file` 在`chrome` 调试是完全没问题。可以是放到我们小程序页面，`ios10` 会出现小程序闪退，而`ios11` 则正常（安卓未作测试）。解决办法就是使用微信`js-sdk`。(2018-7)
3. 向 `web-view` 传递参数时需要注意对带有中文，以及特殊符号的进行`encodeURIComponent` 编码处理

### 后续待更
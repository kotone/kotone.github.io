---
title: 利用flex实现头尾固定，内容滚动
date: 2018-01-05 10:58:37
categories: css
tags: [css,flex]
songid: [454224285,1]
---
实现一个头尾固定，中间内容滚动的布局，一种方案就是头尾用`position:flex`,另一种利用flex布局。相比较第一种，第二种更简洁，而且在移动端表现要更好些......
<!-- more -->

####  HTML部分

```html
<section class="wrap">
    <header>header</header>
    <section class="content">
        <p>内容</p>
    </section>
    <footer>footer</footer>
</section>
```
#### css 部分
```css
*{margin:0;padding:0}
section,header,footer{display:block}
html,body{width:100%;height:100%}
.wrap{display: flex;flex-direction:column;height:100%}
.content{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;}

```
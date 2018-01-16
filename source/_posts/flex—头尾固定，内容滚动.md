---
title: 利用flex实现头尾固定，内容滚动
date: 2018-01-05 10:58:37
categories: css
tags: [css,flex]
songid: [454224285,1]
---
### 利用flex实现头尾固定，内容滚动
![](https://images.pexels.com/photos/767311/pexels-photo-767311.jpeg?w=940&h=650&auto=compress&cs=tinysrgb)
<!-- more -->
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        *{margin:0;padding:0}
        section,header,footer{display:block}
        html,body{width:100%;height:100%}
        .wrap{display: flex;flex-direction:column;height:100%}
        .content{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;}
    </style>
</head>
<body>
    <section class="wrap">
        <header>header</header>
        <section class="content">
            <p>内容</p>
        </section>
        <footer>footer</footer>
    </section>
</body>
</html>
```
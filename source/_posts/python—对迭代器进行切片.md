---
title: 对迭代器进行切片
date: 2018-01-03 14:27:24
categories: Python3
tags: python3笔记
---
{% note info %} 
Python3学习笔记-对迭代器进行切片  
{% endnote %} 

question:读取一个文本文件一定范围之间的内容(如100~300行)  

#### 方法一
使用`readlines()[100:300]`将文件的每一行读入到列表中，再对列表切片
缺点：会一次性将文件读入到内存中，如果文件过大，会影响效率。

```python
f = open('file',encoding='utf-8').readlines()[100:300]
```
#### 方法二
使用`islice(iterable, start, stop[, step]) --> islice object` 
```python
from itertools import islice

lines1 = islice(f,100,300) # 100 ~ 300

lines2 = islice(f,100,None) # 100 ~ 最后

for line in lines1:
        pass
```
{% note warning %}
islice 会 消耗 原迭代对象, 原迭代对象 会从 islice 切片后末尾开始迭代
{% endnote %}

#### 写在最后的话
{% note primary %}如果您觉得文章有什么地方写错了，哪里写得不好，或者有什么建议，期待您的指点{% endnote %}
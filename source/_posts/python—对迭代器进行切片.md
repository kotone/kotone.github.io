---
title: Python3—对迭代器进行切片
date: 2018-01-03 14:27:24
categories: Python3
tags: python3
---
### Python3—对迭代器进行切片
![](https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?w=940&h=650&auto=compress&cs=tinysrgb)
<!-- more -->
```python
# question: 读取一个文本文件一定范围之间的内容(如100~300行)

# --------------------------------------------
#     方法一 readlines 
#     将文件的每一行读入到列表中，在对列表切片
#     会一次性将文件读入到内存中
# --------------------------------------------

f = open('file',encoding='utf-8').readlines()[10:100]

# --------------------------------------------
#     方法二 迭代 islice
#     islice(iterable, start, stop[, step]) --> islice object
# --------------------------------------------

from itertools import islice

lines1 = islice(f,100,300) # 100 ~ 300

lines2 = islice(f,100,None) # 100 ~ 最后

for line in lines1:
        pass

# islice 会 消耗 原迭代对象, 原迭代对象 会从 islice 切片后末尾开始迭代
```
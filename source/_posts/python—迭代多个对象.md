---
title: 迭代多个对象
date: 2017-12-29 14:44:33
categories: python3
tags: python3
---
{% note info %}
Python3学习笔记-迭代多个对象
{% endnote %} 


- 情景一(并行)：某班学生期末考试成绩语文，数学，英语分别存储在3个列表中，同时迭代 3 个列表。计算每个学生的总分

- 情景二(串行)：某年级有 4 个班，某次考试每班英语成绩分别存储在4 个列表中，依次迭代每个列表，统计全年级成绩高于 90 分的人数


<!-- more -->
#### 情景一(并行)
```python
from random import randint

# 随机生成 40个学生的 语文 数学 英语成绩，取值范围在 60~100
chinese = [randint(60, 100) for x in range(40)]
math = [randint(60, 100) for x in range(40)]
english = [randint(60, 100) for x in range(40)]


total = []

# 利用zip 合并 三科成绩，然后拆包
for c, m, e in zip(chinese, math, english):
    total.append(c + m + e)

```
#### 情景二(串行) 

```python
from itertools import chain

# 随机生成 4 个 班级
e1 = [randint(30, 100) for i in range(40)]
e2 = [randint(40, 100) for i in range(50)]
e3 = [randint(50, 100) for i in range(45)]
e4 = [randint(30, 100) for i in range(43)]

# 定义初始值
count = 0

for s in chain(e1, e2, e3, e4):
    if s > 90:
        count += 1

print(count)

```

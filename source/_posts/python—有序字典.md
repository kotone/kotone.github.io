---
title: 有序字典
date: 2017-12-28 14:13:06
categories: Python3
tags: python3笔记
---

{% note info %}
Python3学习笔记-有序字典
{% endnote %}
question：假定有一个抢答环节，有ABCDEF几个成员。将他们的答题答案和时间记录下来，答题完毕后按照时间先后顺序打印出来   
```python
from collections import OrderedDict
from random import randint
from time import time

# 定义一个有序字典
d = OrderedDict()
players = list('ABCDEF')

# 开始时间
start = time()

for i in range(0, len(players)):
    input()

    # 随机选取一名，记录下来，并从列表移除
    p = players.pop(randint(0, len(players) - 1))
    # 结束时间
    end = time()
    print(i + 1, p, end - start)

    # 按照顺序存储在 有序字典 中
    d[p] = (i + 1, end - start)

print('------------------结果----------------------')

for i in d:
    print(i, d[i])
```

---
title: Python3—有序字典
date: 2017-12-28 14:13:06
categories: Python3
tags: python3
---
### Python3 有序字典

![](https://images.pexels.com/photos/748777/pexels-photo-748777.jpeg?w=940&h=650&auto=compress&cs=tinysrgb)

<!-- more -->
```python
from collections import OrderedDict
from random import randint
from time import time

# 定义一个有序字典
d = OrderedDict()


players = list('ABCDEF')


start = time()

for i in range(0, len(players)):
    input()

    # 随机选取一名，记录下来，并从列表移除
    p = players.pop(randint(0, len(players) - 1))
    end = time()
    print(i + 1, p, end - start)

    # 按照顺序存储在 有序字典 中
    d[p] = (i + 1, end - start)

print('------------------结果----------------------')

for i in d:
    print(i, d[i])
```

---
title: Python3—快速找到多个字典中的公共键
date: 2018-01-02 16:11:21
categories: Python3
tags: python3
---
### Python3 快速找到多个字典中的公共键
![](https://images.pexels.com/photos/220118/pexels-photo-220118.jpeg?w=940&h=650&auto=compress&cs=tinysrgb)

<!-- more -->
```python
from functools import reduce
from random import randint, sample

# 假定样本 为 Y
Y = 'abcdefg'

# 对样本随机取样 3~6 个 => sample(Y, randint(3, 6))


# 生成 3组 值在 1~4的 dict
t1 = {x: randint(1, 4) for x in sample(Y, randint(3, 6))}
t2 = {x: randint(1, 4) for x in sample(Y, randint(3, 6))}
t3 = {x: randint(1, 4) for x in sample(Y, randint(3, 6))}

# question: 找出这三组的 公共建

# 定义一个装饰器，方便查看
def print_t(func):
    def wrapper():
        print(t1)
        print(t2)
        print(t3)
        print(func())
    return wrapper

# ----------------------------------------
#       方法一 for
# ----------------------------------------


@print_t
def for_method():
    print('method1')
    res = []
    for i in t1:
        if i in t2 and i in t3:
            res.append(i)
    return res


for_method()

# --------------------------------------------
#       方法二  map  reduce =>需要引入模块
# --------------------------------------------

@print_t
def map_method():
    print('method2')
    m = map(dict.keys, [t1, t2, t3])
    res = reduce(lambda a, b: a & b, m)
    return res

map_method()

```
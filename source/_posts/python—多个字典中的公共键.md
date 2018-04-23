---
title: 快速找到多个字典中的公共键
date: 2018-01-02 16:11:21
categories: Python3
tags: python3笔记
---
{% note info %} 
Python3学习笔记-快速找到多个字典中的公共键
{% endnote %} 
方法一：for循环 判断key 是否同时在其他两个dict,这种方法通俗易懂

方法二：利用map/reduce,相比第一种方法更加简洁。有Python味道
<!-- more -->
#### 随机产生 3 组 dict

```python
from random import randint, sample

# 假定样本 为 Y
Y = 'abcdefg'

# 对样本随机取样 3~6 个 => sample(Y, randint(3, 6))

# 生成 3组 值在 1~4的 dict
t1 = {x: randint(1, 4) for x in sample(Y, randint(3, 6))}
t2 = {x: randint(1, 4) for x in sample(Y, randint(3, 6))}
t3 = {x: randint(1, 4) for x in sample(Y, randint(3, 6))}
```

#### 找出这三组 dict 的公共键
为了方便运行时查看结果,我自作聪明定义一个装饰器
```python
def print_res(func):
    def wrapper():
        print(t1)
        print(t2)
        print(t3)
        print(func())
    return wrapper
```
##### 方法一 for循环 判断key 是否同时在其他两个dict
```python
# 方法一
@print_res
def method_1():
    res = []
    for i in t1:
        # 判断是否同时在 t2 t3
        if i in t2 and i in t3:
            res.append(i)
    return res

method_1()

```
##### 方法二 利用map/reduce
```python
from functools import reduce

@print_res
def method_2():
    m = map(dict.keys, [t1, t2, t3])
    res = reduce(lambda a, b: a & b, m)
    return res

method_2()

```

---
title: Python3—自定义可迭代对象
date: 2017-12-30 16:00:05
categories: Python3
tags: python3
---
### Python3 自定义可迭代对象 
![](https://images.pexels.com/photos/17679/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb)
<!-- more -->

```python
# coding=utf8

# python自定义迭代器对象以及可迭代对象

from random import randint
from functools import reduce
from collections import Iterator, Iterable

# --------------------------------------------
#         方法一
# --------------------------------------------


# 迭代器对象
class OwnIteror(Iterator):
    def __init__(self, arrs):

        # 传入的列表
        self.arrs = arrs

        # 记录迭代的位置,初始化为 0
        self.index = 0

    # 执行的方法
    def own_method(self, arr):
        return arr

    def __next__(self):

        # 迭代完毕的情况
        if self.index == len(self.arrs):

            # 抛出异常(固定的)
            raise StopAsyncIteration

        # 正常情况
        arr = self.arrs[self.index]
        self.index += 1

        # 返回 执行的方法
        return self.own_method(arr)


# 可迭代对象
class OwnIterable(Iterable):
    def __init__(self, arrs):
        # 为了传给 OwnIteror 构造器
        self.arrs = arrs

    def __iter__(self):
        return OwnIteror(self.arrs)


# 实例化
a = OwnIterable([1, 2, 3, 4, 5, 6])


# --------------------------------------------
#         方法二 使用生成器函数
# --------------------------------------------

# question: 实现一个可迭代对象的类，它能迭代出给定范围内的所有质数
# (除了1和它自身外，不能被其他自然数整除的数叫做质数)

class PrimeNumbers:
    def __init__(self,start,end):

        # 存储开始和结束的值
        self.start = start
        self.end = end

    # 判断函数
    def isPrimeNum(self,k):
        if k<2:
            return False

        for i in range(2,k):
            if k % i == 0:
                # 说明是合数
                return False
        
        # 说明没有 i 能被 k 整除 
        return True
    

    # 迭代器接口
    def __iter__(self):
        for k in range(self.start,self.end + 1):
            if self.isPrimeNum(k):
                yield k

for x in PrimeNumbers(1,100):print(x)
```
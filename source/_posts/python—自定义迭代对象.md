---
title: 自定义可迭代对象
date: 2018-01-08 14:36:20
categories: Python3
tags: python3笔记
songid:
---
{% note info %} 
Python3学习笔记-自定义可迭代对象  
{% endnote %} 

#### Question1
实现一个连续浮点数发生器FloatRange(和range类似),根据给定范围(start,end)和步进值(step)产生一系列连续浮点数,例如: FloatRange(3.0,4.0,0.2) 可产生:
正向: 3.0 -> 3.2 -> 3.4 ... ->4.0
反向: 4.0 -> 3.8 -> 3.6 ... ->3.0  
<!-- more -->

> 正向(使用迭代器 `__iter__`)  反向(使用迭代器 `__reversed__`)

```python
class FloatRange():
    def __init__(self, start, end, step=0.1):
        self.start = start 
        self.end = end
        self.step = step

    # 正向迭代器
    def __iter__(self):
        t = self.start
        while t <= self.end:
            yield t
            t += self.step

    # 反向迭代器
    def __reversed__(self):
        t = self.end
        while t >= self.start:
            yield t
            t -= self.step
```
正向实例 调用 `__iter__`
```python
for x in FloatRange(1.0, 4.0, 0.5):
    pass
```
反向实例 `reversed()` 调用`__reversed__`
```python
for x in reversed(FloatRange(1.0, 4.0, 0.5)):
    pass
```

#### Question2
实现一个可迭代对象的类，它能迭代出给定范围内的所有质数
```python
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

for x in PrimeNumbers(1,100):
    print(x)

```

#### 写在最后的话
{% note primary %}如果您觉得文章有什么地方写错了，哪里写得不好，或者有什么建议，期待您的指点{% endnote %}
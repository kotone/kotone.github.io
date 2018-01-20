---
title: Python3—实现正反向迭代
date: 2018-01-08 14:36:20
categories: Python3
tags: python3
songid:
---
### Python3—实现正反向迭代
![](https://images.pexels.com/photos/774664/pexels-photo-774664.jpeg?w=940&h=650&auto=compress&cs=tinysrgb)
<!-- more -->

> question:
> 实现一个连续浮点数发生器FloatRange(和range类似),
> 根据给定范围(start,end)和步进值(step)产生一系列连续浮点数
> 例如: FloatRange(3.0,4.0,0.2) 可产生:
> 正向: 3.0 -> 3.2 -> 3.4 ... ->4.0
> 反向: 4.0 -> 3.8 -> 3.6 ... ->3.0

```python
# 正向(使用迭代器 __iter__)  反向(使用迭代器 __reversed__)

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


# 正向实例 调用 __iter__
for x in FloatRange(1.0, 4.0, 0.5):
    pass

# 反向实例 reversed() 调用__reversed__
for x in reversed(FloatRange(1.0, 4.0, 0.5)):
    pass
```
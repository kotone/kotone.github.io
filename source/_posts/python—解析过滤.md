---
title: 解析与过滤
date: 2017-12-26 15:25:08
categories: python3
tags: python3
---
{% note info %}
Python3学习笔记-解析与过滤
{% endnote %}

#### 列表解析
```python
from random import randint

# 生成 -10~10 的10 个 随机数
data = [randint(-10,10) for i in range(10)]

# 过滤负数
### 1.ilter(function or None, iterable)--> filter object
a = list( filter(lambda x:x>= 0,data) )
### 2.列表解析
b = [x for x in data if x>=0]
```
<!-- more -->
#### 字典解析  

```python

# 随机生成一个 人名: 分数 的字典 
d = {x:randint(60,100) for x in range(1,20)}

## 过滤出分数大于90的

D = {key:value for key,value in d.items() if value>90 }

print(D)
```
#### 集合解析
```python
s = set(data)

## 过滤能被 3 整除的

S = {x for x in s if x % 3 == 0}

print(S)

```
#### 字典代替 switch
```python
day = 0
def test():
    print('this is test')
    
switcher = {
    0 : 'Sunday',
    1 : 'Monday',
    2 : 'Tuesday',
    3 : test
}

switcher.get(day,'none')

```


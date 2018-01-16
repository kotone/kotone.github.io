---
title: Python3—解析与过滤
date: 2017-12-26 15:25:08
categories: Python3
tags: python3
---
### Python3 解析与过滤 
>  额，偷点懒，排版直接用IDE显示了。。。。  

![](https://images.pexels.com/photos/740593/pexels-photo-740593.jpeg?w=940&h=650&auto=compress&cs=tinysrgb)
<!-- more -->
```python

import timeit
from random import randint

# --------------------------------------------
#         列表解析 []
# --------------------------------------------

# 生成 -10~10 的10 个 随机数
data = [randint(-10,10) for i in range(10)]


# 过滤负数

### 1.ilter(function or None, iterable)--> filter object
a = list( filter(lambda x:x>= 0,data) )

### 2.列表解析

b = [x for x in data if x>=0]

### 比较两种方法的效率
t1 =timeit.Timer(
    'list( filter(lambda x:x>= 0,data) )',
    setup="from __main__ import data"
    )

t2 =timeit.Timer(
    '[x for x in data if x>=0]',
    setup="from __main__ import data"
    )

print(t1.timeit())
print(t2.timeit())


# --------------------------------------------
#         字典解析 {k:v}
# --------------------------------------------

# 随机生成一个 人名: 分数 的字典 
d = {x:randint(60,100) for x in range(1,20)}

## 过滤出分数大于90的

### 1.字典解析

D = {key:value for key,value in d.items() if value>90 }

print(D)

# --------------------------------------------
#         集合解析 {}
# --------------------------------------------

s = set(data)

## 过滤能被 3 整除的

S = {x for x in s if x % 3 == 0}

print(S)




# --------------------------------------------
#         字典代替 switch
# --------------------------------------------
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


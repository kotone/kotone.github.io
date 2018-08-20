---
title: 序列元素排序统计
date: 2018-01-05 17:06:48
categories: python3
tags: python3
---
{% note info %}
Python3学习笔记-序列元素排序统计
{% endnote %}
question：找出一个列表中重复次数最多的三个元素


先生成一个30位长度，元素在0~20之间的列表
```python
from random import randint

data = [randint(0,20) for i in range(30)]
```
创建一个新的dict
```python
...
# 统计结果用dict 显示 {值:次数}
# 初始化字典 dict.fromkeys(键,初始值) 
c = dict.fromkeys(data,0)
...
```
<!-- more -->
#### 方法一 
##### 统计相同元素出现的次数
```python
for x in data:
    c[x] += 1
```
##### 再对统计结果进行排序
```python
sorted(c.items(),key=lambda item:item[1],reverse=True)
```


#### 方法二
```python
from collections import Counter

c2 = Counter(data)
# 统计出现频率 最高的 3 个元素
c2.most_common(3)

```


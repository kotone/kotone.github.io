---
title: Python3—序列元素排序统计
date: 2018-01-05 17:06:48
categories: Python3
tags: python3
---
### Python3—序列元素排序统计

![](https://images.pexels.com/photos/770318/pexels-photo-770318.jpeg?w=940&h=650&auto=compress&cs=tinysrgb)
<!-- more -->
```python
from collections import Counter
from random import randint

# 生成一个 元素在0-20之间 的 30位的列表
data = [randint(0,20) for i in range(30)]

# --------------------------------------------
#        排序 sorted
# --------------------------------------------
# 创建一个新的 字典 dict.fromkeys(键,初始值)
c = dict.fromkeys(data,0)

# 统计相同元素出现的次数
for x in data:
    c[x] += 1

# 对统计结果排序 key/value => 0/1  返回一个列表
C = sorted(c.items(),key=lambda item:item[1],reverse=True)


# --------------------------------------------
#        统计 Counter
# --------------------------------------------

c2 = Counter(data)

# 统计出现频率 最高的 3 个元素
c2.most_common(3)

```
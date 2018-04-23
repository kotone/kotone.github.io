---
title: 拆分字符串
date: 2018-01-04 15:22:29
categories: Python3
tags: python3笔记
---

{% note info %}
Python3学习笔记-拆分字符串
{% endnote %}

> 把 某个 字符串依据分隔符 拆分不同的字段,该字符串含多种不同的分隔符，例如:
`s = 'ab;cd|efg|hi,jklmn\topq;rst,uvw\txyz'`
`,;|\t` 都是分隔符

#### 方法一 使用str.split 依次过滤
```python
def my_split(s, ds):
    res = [s]
    for d in ds:
        t = []

        # 将依次结果追加到 t 中
        list(map(lambda x: t.extend(x.split(d)), res))
        res = t

    # 再过滤空字符串,只有当 x 存在才返回值
    return [x for x in res if x]

my_split(s, ',;|\t')

```
#### 方法二 使用re.split 一次性拆分字符串

```python
# re.split(pattern, string, maxsplit=0, flags=0)
import re

res = re.split('[,;|\t]+',s)

```

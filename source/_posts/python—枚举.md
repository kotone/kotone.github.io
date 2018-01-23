---
title: Python3枚举
date: 2017-12-27 14:09:38
categories: Python3
tags: python3笔记
---
{% note info %}
Python3学习笔记-枚举
{% endnote %}

访问元组中的数据时会使用`index`访问，大量的索引会降低程序的可读性，这时我们可以使用枚举来提高程序的可读性

<!-- more -->
#### 定义一个枚举类型
```python
# 导入 Enum 模块
form enum import Enum

# Student类 继承 Enum
class Student(Enum):
    name = 0
    age = 1
    sex = 2
```
{% note warning %}
1. 定义枚举时，成员名称 不允许重复(装饰器@unique 可以检测重复)
2. 两个相同值的成员，第二个成员的名称被视作第一个成员的别名
3. 如果枚举中存在相同值的成员，在通过值获取枚举成员时，只能获取到第一个成员
{% endnote %}
#### 枚举取值
```python
print(Student.age) # => Student.age
print(Student.age.name) # => age
print(Student.age.value) # => 1

print(Student(1)) # => Student.age
print(Student(1).name) # => age
print(Student(1).value) # => 1
```

#### 枚举可以迭代 

```python
for item in Student:
    print(item)

Student.name
Student.age
Student.sex
```

#### 枚举应用
> `student = ('admin', 18, '男')`

获取 student 的 age :
1. 索引访问：student[1] --> 18
2. 枚举： student[Student.age.value] --> 18

#### 写在最后的话
{% note primary %}如果您觉得文章有什么地方写错了，哪里写得不好，或者有什么建议，期待您的指点{% endnote %}
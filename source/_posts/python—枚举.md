---
title: Python3—枚举
date: 2017-12-27 14:09:38
categories: Python3
tags: python3
---
### Python3 枚举

![](https://images.pexels.com/photos/7919/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb)

<!-- more -->

```python


from enum import Enum, unique

student = ('admin', 18, '男', 'admin@gmail.com')


# 1. 下标从 1 开始
Student = Enum('Student', ('name', 'age', 'sex', 'email'))

# 获取学生的姓名
student[Student.name.value - 1]

# 2. 自定义下标 0 开始，unique 检测重复


@unique
class Student_(Enum):
    (name, age, sex, email) = range(0, 4)

# print(Student_.name)
# print(Student_.name.value)

# print(Student_(0))
# print(Student_(0).value)


# 获取学生的姓名
student[Student_.name.value]


```
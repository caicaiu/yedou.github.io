---
title: Window常见问题
tags: 问题
categories: 常见问题
cover: 'https://tva4.sinaimg.cn/large/0072Vf1pgy1foxkf0qyqbj31hc0u0h2u.jpg'
abbrlink: 5050ddb0
date: 2022-12-19 15:45:17
---

# 杀死端口号

```
netstat -aon|findstr   端口号
taskkill /pid 12168 -t -f
```

错误: 无法终止 PID 为 4 的进程。

需要管理员身份

```
net stop http
```


---
title: Hexo教程
tags: Hexo教程
categories: Hexo
abbrlink: d3f2095d
date: 2022-12-17 15:21:38
---

# 生成唯一文章id

```
permalink: post/:abbrlink.html # post为自定义前缀
abbrlink:
  alg: crc32   #算法： crc16(default) and crc32
  rep: hex     #进制： dec(default) and hex
```

# 指定文章存储目录

```
hexo new 标题 -p "/Hexo/Hexo教程" 
```

# 部署找不到git

```
npm install hexo-deployer-git --save
```

# 文章模板

```
title: 归并排序
tags: 算法
categories: 算法
cover: 'https://xinzhuobu.com/wp-content/uploads/2022/12/20221215001.jpg'
swiper_index: 2
abbrlink: 63711
date: 2022-12-16 11:57:57
```

# 文件提交错误

Something's wrong. Maybe you can find the solution here: https://hexo.io/docs/troubleshooting.html

```
rm -rf .deploy_git/
git config --global core.autocrlf false
hexo clean && hexo g && hexo d
```

# 文章加密

```text
npm install --save hexo-blog-encrypt
```

文章头

```
title: Hello World
tags:
- 加密文章tag
date: 2020-03-13 21:12:21
password: muyiio
abstract: 这里有东西被加密了，需要输入密码查看哦。
message: 您好，这里需要密码。
wrong_pass_message: 抱歉，这个密码看着不太对，请再试试。
wrong_hash_message: 抱歉，这个文章不能被纠正，不过您还是能看看解密后的内容。
---
```

博客目录的config文件

```css
# 安全
encrypt: # hexo-blog-encrypt
  abstract: 这里有东西被加密了，需要输入密码查看哦。
  message: 您好, 这里需要密码.
  tags:
  - {name: tagName, password: 密码A}
  - {name: tagName, password: 密码B}
  template: <div id="hexo-blog-encrypt" data-wpm="{{hbeWrongPassMessage}}" data-whm="{{hbeWrongHashMessage}}"><div class="hbe-input-container"><input type="password" id="hbePass" placeholder="{{hbeMessage}}" /><label>{{hbeMessage}}</label><div class="bottom-line"></div></div><script id="hbeData" type="hbeData" data-hmacdigest="{{hbeHmacDigest}}">{{hbeEncryptedData}}</script></div>
  wrong_pass_message: 抱歉, 这个密码看着不太对, 请再试试.
  wrong_hash_message: 抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.
```

# 友链

[Friend Link Card Beautify | Akilarの糖果屋](https://akilar.top/posts/57291286/)

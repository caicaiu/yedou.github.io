---
title: Git
tags: Git
categories: 后端
cover: 'https://xinzhuobu.com/wp-content/uploads/2022/01/20220122001.jpg'
abbrlink: 69c3279c
date: 2023-01-07 19:45:02
---

# 什么是Git

Git相当于是可以让历史回退到你修改之前的一个工具

# 安装git和卸载

[ GIT 卸载干净](https://blog.csdn.net/weixin_43306271/article/details/121735153)

[Git 安装](https://blog.csdn.net/weixin_44778232/article/details/127597405)

# 使用git

### 修改仓库

1. 初始化仓库

	```
	git init 初始化git仓库
	```

2. git文件提交

	```
	git add 文件名  提交到暂存库中
	```

3. 文件提交到仓库

	```
	git commit -m “描述” 将暂存区的文件提交到仓库中
	```

4. 最近提交

	```
	git  log  查看最近提交记录
	```

5. 查看修改文件内容，可以使用**git diff** （但是只局限在没有执行**git add **之前）

	```
	git diff 
	```

6. **git status** 可以看当前状态

	```
	git status 查看当前状态
	```

7. 回退Git版本

	1. 查看Git提交版本

		```
		git log --pretty=oneline
		```

	2. 回退到上一个版本，文件就回到之前的

		```
		git reset --hard HEAD^ 
		HEAD^ 上一个版本
		HESD^^ 回退到上上个
		HEAD~100 往上一百个
		git reset --hard 1094a 指定版本log前4为 
		```

	2. 查看每一次命令的执行，显示版本号，可通过他回到下一个版本呢

		```
		git reflog
		```

8. 修改问题

	修改文件后，添加到暂存区，又进行修改，然后提交，从结果可以看到，第二次修改后并没有被提交

	没有添加的不会进行提交

9. 撤销修改

	2. 没有提交可以使用**git restore <file>**来跳回修改之前

	2. 添加到暂存区，那么就可以使用命令**git restore --staged\<file>**来取消提交

	2. 已经提交都了本地库，我们就只能回退版本了

9. 删除文件

	1. 删除暂存区的文件

		```
		git rm 文件名
		```

# Git原理

#### 版本库

工作区有一个隐藏目录`.git`，这个不算工作区，而是Git的版本库。

Git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支`master`，以及指向`master`的一个指针叫`HEAD`。

![git-repo](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/0)

分支和`HEAD`的概念我们以后再讲。

前面讲了我们把文件往Git版本库里添加的时候，是分两步执行的：

1. `git add`把文件添加进去，实际上就是把文件修改添加到暂存区；

2. 用`git commit`提交更改，实际上就是把暂存区的所有内容提交到当前分支。

因为我们创建Git版本库时，Git自动为我们创建了唯一一个`master`分支，所以，现在，`git commit`就是往`master`分支上提交更改。

你可以简单理解为，需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改。

俗话说，实践出真知。现在，我们再练习一遍，先对`readme.txt`做个修改，比如加上一行内容：

```
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
```

然后，在工作区新增一个`LICENSE`文本文件（内容随便写）。

先用`git status`查看一下状态：

```
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   readme.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	LICENSE

no changes added to commit (use "git add" and/or "git commit -a")
```

Git非常清楚地告诉我们，`readme.txt`被修改了，而`LICENSE`还从来没有被添加过，所以它的状态是`Untracked`。

现在，使用两次命令`git add`，把`readme.txt`和`LICENSE`都添加后，用`git status`再查看一下：

```
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   LICENSE
	modified:   readme.txt
```

现在，暂存区的状态就变成这样了：

![git-stage](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/0)

所以，`git add`命令实际上就是把要提交的所有修改放到暂存区（Stage），然后，执行`git commit`就可以一次性把暂存区的所有修改提交到分支。

```
$ git commit -m "understand how stage works"
[master e43a48b] understand how stage works
 2 files changed, 2 insertions(+)
 create mode 100644 LICENSE
```

一旦提交后，如果你又没有对工作区做任何修改，那么工作区就是“干净”的：

```
$ git status
On branch master
nothing to commit, working tree clean
```

现在版本库变成了这样，暂存区就没有任何内容了：

![git-stage-after-commit](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/0)

# 分支

1. 使用分支意味着程序员可以把自己的工作从开发主线上分离开来，开发自己分支的时 候，不会影响主线分支的运行。相当于是主分支的所有东西
2. 分支的命令
	1. git branch 分支名 创建分支
	2. git branch -v 查看分支
	3. git checkout 分支名 切换分支
	4. git merge 合并分支
		1. 合并分支分为两种情况
			1. 正常合并，一个分支进行修改，然后提交，主线合并
			2. 冲突合并，主线和分支修改了，然后提交，合并的时候要选择

# Github辅助团队开发

1. 初始化仓库

	1. 在github创建远程仓库

	1. 使用 git remote add 别名 地址 创建别名
		![image-20220707134359469](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220707134359469.png)

1. 使用   **git pull 地址 分支 **   从github拉取代码到本地仓库
2. 使用 **git clone 地址 分支**    可以把github代码赋值到本地仓库中
3. 使用 **git push 地址 分支**     可以把代码重新推送到github

# 企业合作开发

1. 邀请别人假如自己的项目当中

	1. 使用git clone拷贝到本项目中

	2. 使用 git push http地址，提交不了，因为还没有邀请进项目中去，所以我们要邀请

	1. 邀请 点击Your
		repositories ![image-20220707090327828](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220707090327828.png)
		 2.
		 点入git-test ![image-20220707090351293](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220707090351293.png)
		 3.
		 点击Setting ![image-20220707090414724](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220707090414724.png)
		 4.
		 点击Collaborators ![image-20220707090501127](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220707090501127.png)
		 5.
		 使用点击Add ![image-20220707090515887](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220707090515887.png)
	2. 搜索名字，然后把链接发给别人
	3. 别人复制到浏览上，然后假如成功
	4. 这样，别人修改的项目就可以提交了

	## 跨团队合作

	  1. 在github搜索项目名字，前面加名字或赋值链接到浏览器打开
	  2. 点击fork，插进入自己的远程仓库中，然后克隆或者是克隆
	  3. 然后commit changs只是修改自己的fork点击pull request拉取请求，然后发送请求，编写评论，然后别人的远程仓库可以看到，点击Merger pull合并

# IDEA使用git

1. 在idea配置git

	1. 点击setting--> version contrllo -->点击git-->目录，然后选择git的应用地址（bin/git.exe） -->然后点击test-->点击VSM-->点击En-->点击git这样就配置成功了

2. 初始化本地仓库给git管理

	1. 项目右键-->Git--->+ 就可以了

		1. 红色的表示没有被添加到暂存区

		2. 绿色的代表被添加到暂存区了
		3. 黑色表示提交成功

3. 提交代码到本地仓库

	```
	视图Git-->Commit-->点击中间那个就可以 变成黑色了就代表提交成功
	```

4. 切换版本库

	1. 先提交几次

	2. 点击左下方的git-->log就可查看有哪几个版本库

	3. 切换版本分支
		1. 点击版本右键-->点击checkout就可以切换版本

5. 创建分支

	1. 第一种方法：点击右下方的mater -->new branch-->输入名字即可
	2. 第二种方法：项目右键-->git--> new branch

6. 合并分支

	1. 正常合并
		1. 其他分支修改后提交，然后切换为主分支-->点击其他分支，点击mersg就可以合并了

	2. 冲突合并

	1. 在主分支上修改提交-->其他分支修改提交-->点击合并-->然后提示，点击mesrge-->**》》**代表合并左边的 -->**《《**合并右边的，然后两边都点击的话，就全部合并

# idea使用github

1. 登录github

	```
	点击setting--->点击github-->点击+-->点击login in whie token-->登录github--->settings-->Daveloper settings-->点击tonken-->new creat-->全部勾选-->复制然后赋值给idea中的密码
	```


​	

2. 分享项目到github上面去

	点击git-->点击github-->点击share-->填写名字（跟项目一致）

3. 推送代码到git上面去（修改后提交）

	点击git-->然后点击push就可以了

4. 拉取代码到本地仓库（在github修改后）

	> 注意：每次修改代码的时候一定要先pull到本地仓库中，然后再push,如果没有，就会进行报错，因为本地的版本一定比github版本高
	>
	> 1. 在github上修改-->点击git-->点击pull
	> 2. 在idea修改后，然后推送就可以了

5. 克隆到本地仓库

	> 1. 到最外面的项目-->点击get form VCS-->填写http地址就可以克隆了

# idea使用码云

idea登录码云

1. 注册码云-->idea下载gitee-->然后登录-->推送就可以了，如果你提交到某一个仓库后，那么他就已经是固定的别名了
2. 推送和其他的都是一样的

1. 把github赋值到码云上面去
	1. 新建仓库-->点击导入-->使用url就可以拷贝下来了

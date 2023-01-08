---
title: Redis安装卸载集群
tags: Redis
categories: 后端
cover: 'https://xinzhuobu.com/wp-content/uploads/2022/10/20221023001.jpg'
abbrlink: 7ed01655
date: 2023-01-03 15:54:24
---

# Redis的卸载

[linux怎么卸载redis - 问答 - 亿速云 (yisu.com)](https://www.yisu.com/ask/5694.html#:~:text=linux卸载r,和所有文件即可。)

# Redis的安装

首先需要安装Redis所需要的依赖：

```sh
yum install -y gcc tcl
```



将redis放到opt下

解压缩：

```sh
tar -xzf redis-6.2.4.tar.gz
```

进入redis目录：

```sh
cd redis-6.2.4
```

运行编译命令：

```sh
make && make install
```

如果没有出错，应该就安装成功了。

然后修改redis.conf文件中的一些配置：

```properties
# 绑定地址，默认是127.0.0.1，会导致只能在本地访问。修改为0.0.0.0则可以在任意IP访问
bind 0.0.0.0
# 保护模式，关闭保护模式
protected-mode no
# 数据库数量，设置为1
databases 1
```

启动Redis：

```sh
redis-server redis.conf
```

停止redis服务：

```sh
redis-cli shutdown
```

# Redis主从赋值搭建

1. 创建目录
	我们创建三个文件夹，名字分别叫7001、7002、7003：

	```
	# 进入/opt目录
	cd /opt
	# 创建目录
	mkdir 7001 7002 7003
	```

2. 恢复原始配置

	```properties
	# 开启RDB
	# save ""  save全部注释掉
	
	# 关闭AOF
	appendonly no
	```

	



3. 拷贝配置文件到每个实例目录
	然后将redis-6.2.4/redis.conf文件拷贝到三个目录中（在/tmp目录执行下列命令）：

	```properties
	# 方式二：管道组合命令，一键拷贝
	echo 7001 7002 7003 | xargs -t -n 1 cp redis-6.2.4/redis.conf
	```

	



4. 修改每个实例的端口、工作目录
	修改每个文件夹内的配置文件，将端口分别修改为7001、7002、7003，将rdb文件保存位置都修改为自己所在目录（在/tmp目录执行下列命令）：

	```properties
	sed -i -e 's/6379/7001/g' -e 's/dir .\//dir \/opt\/7001\//g' 7001/redis.conf
	sed -i -e 's/6379/7002/g' -e 's/dir .\//dir \/opt\/7002\//g' 7002/redis.conf
	sed -i -e 's/6379/7003/g' -e 's/dir .\//dir \/opt\/7003\//g' 7003/redis.conf
	```

	



5. 修改每个实例的声明IP

	```properties
	# 或者一键修改
	printf '%s\n' 7001 7002 7003 | xargs -I{} -t sed -i '1a replica-announce-ip 192.168.200.130' {}/redis.conf
	```

	

6. 启动

	```properties
	redis-server 7001/redis.conf
	redis-server 7002/redis.conf
	redis-server 7003/redis.conf
	```

	![image-20210630183914491](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20210630183914491.png)

7. 如果要一键停止，可以运行下面命令：

	```
	printf '%s\n' 7001 7002 7003 | xargs -I{} -t redis-cli -p {} shutdown
	```

	

8. 主从关系
	通过redis-cli命令连接7002，执行下面命令：

	```properties
	# 连接 7002
	redis-cli -p 7002
	# 执行slaveof
	slaveof 192.168.200.130 7001
	```

	通过redis-cli命令连接7003，执行下面命令：

	```properties
	# 连接 7003
	redis-cli -p 7003
	# 执行slaveof
	slaveof 192.168.200.130 7001
	```

	然后连接 7001节点，查看集群状态：

	```properties
	# 连接 7001
	redis-cli -p 7001
	# 查看状态
	info replication
	```

	![image-20210630201258802](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20210630201258802.png)







# Redis哨兵搭建

1. 我们创建三个文件夹，名字分别叫s1、s2、s3：

	```
	# 进入/opt目录
	cd /opt
	# 创建目录
	mkdir s1 s2 s3
	```

	

2. 我们在s1目录创建一个sentinel.conf文件，添加下面的内容：

	```properties
	port 27001
	sentinel announce-ip 192.168.200.130
	sentinel monitor mymaster 192.168.200.130 7001 2
	sentinel down-after-milliseconds mymaster 5000
	sentinel failover-timeout mymaster 60000
	dir "/opt/s1"
	```

	- `port 27001`：是当前sentinel实例的端口
	- `sentinel monitor mymaster 192.168.200.130 7001 2`：指定主节点信息
		- `mymaster`：主节点名称，自定义，任意写
		- `192.168.200.130 7001`：主节点的ip和端口
		- `2`：选举master时的quorum值



3. 然后将s1/sentinel.conf文件拷贝到s2、s3两个目录中（在/tmp目录执行下列命令）：

	```properties
	# 方式二：管道组合命令，一键拷贝
	echo s2 s3 | xargs -t -n 1 cp s1/sentinel.conf
	```

4. 修改s2、s3两个文件夹内的配置文件，将端口分别修改为27002、27003：

	```properties
	sed -i -e 's/27001/27002/g' -e 's/s1/s2/g' s2/sentinel.conf
	sed -i -e 's/27001/27003/g' -e 's/s1/s3/g' s3/sentinel.conf
	```

5. 启动,也要让3个redis的服务启动

	```properties
	# 第1个
	redis-sentinel s1/sentinel.conf
	# 第2个
	redis-sentinel s2/sentinel.conf
	# 第3个
	redis-sentinel s3/sentinel.conf
	```

	![image-20210701220714104](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20210701220714104.png)

7. 测试
	1. 尝试让master节点7001宕机，查看sentinel日志：
		![image-20210701222857997](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20210701222857997.png)
	2. 查看7003的日志：
		![image-20210701223025709](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20210701223025709.png)
	3. 查看7002的日志：
		![image-20210701223131264](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20210701223131264.png)



# 集群的搭建



1. 删除之前的7001、7002、7003这几个目录，重新创建出7001、7002、7003、8001、8002、8003目录：

	```properties
	# 进入/opt目录
	cd /opt
	# 删除旧的，避免配置干扰
	rm -rf 7001 7002 7003
	# 创建目录
	mkdir 7001 7002 7003 8001 8002 8003
	```

2. /opt 下准备一个新的redis.conf文件，内容如下：

	```properties
	port 6379
	# 开启集群功能
	cluster-enabled yes
	# 集群的配置文件名称，不需要我们创建，由redis自己维护
	cluster-config-file /opt/6379/nodes.conf
	# 节点心跳失败的超时时间
	cluster-node-timeout 5000
	# 持久化文件存放目录
	dir /opt/6379
	# 绑定地址
	bind 0.0.0.0
	# 让redis后台运行
	daemonize yes
	# 注册的实例ip
	replica-announce-ip 192.168.200.130
	# 保护模式
	protected-mode no
	# 数据库数量
	databases 1
	# 日志
	logfile /opt/6379/run.log
	```

	

3. 将这个文件拷贝到每个目录下：

	```
	# 进入/opt
	cd /opt
	# 执行拷贝
	echo 7001 7002 7003 8001 8002 8003 | xargs -t -n 1 cp redis.conf
	```

	



4. 修改每个目录下的redis.conf，将其中的6379修改为与所在目录一致：

	```properties
	# 进入/tmp目录
	cd /tmp
	# 修改配置文件
	printf '%s\n' 7001 7002 7003 8001 8002 8003 | xargs -I{} -t sed -i 's/6379/{}/g' {}/redis.conf
	```

5. 启动

	因为已经配置了后台启动模式，所以可以直接启动服务：

	```
	# 进入/tmp目录
	cd /tmp
	# 一键启动所有服务
	printf '%s\n' 7001 7002 7003 8001 8002 8003 | xargs -I{} -t redis-server {}/redis.conf
	```

	

6. 通过ps查看状态：

	```
	ps -ef | grep redis
	```

	![image-20230103154850109](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20230103154850109.png)

7. 如果要关闭所有进程，可以执行命令：

	```
	ps -ef | grep redis | awk '{print $2}' | xargs kill
	或者
	printf '%s\n' 7001 7002 7003 8001 8002 8003 | xargs -I{} -t redis-cli -p {} shutdown
	```

8. 创建集群
	Redis5.0以后

	```
	redis-cli --cluster create --cluster-replicas 1 192.168.200.130:7001 192.168.200.130:7002 192.168.200.130:7003 192.168.200.130:8001 192.168.200.130:8002 192.168.200.130:8003
	```

	命令说明：

	- `redis-cli --cluster`或者`./redis-trib.rb`：代表集群操作命令
	- `create`：代表是创建集群
	- `--replicas 1`或者`--cluster-replicas 1` ：指定集群中每个master的副本个数为1，此时`节点总数 ÷ (replicas + 1)` 得到的就是master的数量。因此节点列表中的前n个就是master，其它节点都是slave节点，随机分配到不同master

	运行后的样子
	![image-20230103155051055](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20230103155051055.png)





9. 这里输入yes，则集群开始创建：

10. 通过命令可以查看集群状态：

	```
	redis-cli -p 7001 cluster nodes
	```



11. 尝试连接7001节点，存储一个数据：

	```properties
	# 连接
	redis-cli -p 7001
	# 存储数据
	set num 123
	# 读取数据
	get num
	# 再次存储
	set a 1
	```

	结果悲剧了：
					![image-20230103155223973](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20230103155223973.png)

12. 集群操作时，需要给`redis-cli`加上`-c`参数才可以：

	```
	redis-cli -c -p 7001
	```

	


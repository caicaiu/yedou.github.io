---
title: Redis数据结构
tags: Redis
categories: 后端
cover: 'https://xinzhuobu.com/wp-content/uploads/2022/11/20221117001.jpg'
abbrlink: 85682d75
date: 2023-01-03 08:19:27
---

# Key

1. 查看当前库所有key（匹配：keys *1）：

	```
	keys *
	```

![image-20220727142230317](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727142230317.png)

2. 判断某个key是否存在：有返回0，没有返回1

	```
	exists key
	```

![image-20220727142310349](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727142310349.png)

3. 查看你的key是什么类型：

	```
	type key
	```

	![image-20220727142438304](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727142438304.png)

4. 指定的key数据：成功返回1 失败返回0

	```
	del key
	```

![image-20220727142526599](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727142526599.png)

5. value选择非阻塞删除：仅将keys从keyspace元数据中删除，真正的删除会在后续异步操作

	```
	unlink key
	```

![image-20220727142652480](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727142652480.png)

6. 为给定的key设置过期时间，10秒：

	```
	expire key 10 
	```

	

7. 查看多少秒过期，-1表示永不过期，-2表示已过期：

	```
	ttl key
	```

	

![image-20220727142849609](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727142849609.png)

------

> redis有16个数据库，默认指向第0个，如果超过15 就会就报错

```
select index   切换数据库
```

![image-20220727143108750](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727143108750.png)

```
dbsize：查看当前数据库的key的数量
```

![image-20220727143155225](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727143155225.png)

```
flushdb    清空当前库所有key
flushall命令：通杀全部库的key
```

![image-20220727143241974](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727143241974.png)

# String

String是Redis最基本的类型，一个key对应一个value。

String类型是**二进制安全的**。意味着Redis的string可以包含任何数据。比如jpg图片或者序列化的对象。

String类型是Redis最基本的数据类型，一个Redis中字符串value最多可以是**512M**

## 常用命令

1. 添加键值对：

	```
	set key value
	```

	

![image-20220727143547935](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727143547935.png)

2. 查询对应键值：没有该键返回 nil

	```
	get key
	```

![image-20220727143606742](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727143606742.png)

3. 将value追加给末尾，返回长度

	```
	append key value
	```

![image-20220727143713543](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727143713543.png)

4. 获得值的长度

	```
	strlen key
	```

![image-20220727143750986](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727143750986.png)

5. key不存在时设置key的值：失败返回0，成功返回1，保证原子性

	```
	setnx key value
	```

![image-20220727143844180](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727143844180.png)

6. 将数字值增1 只能对数字值操作，如果为空，新增值为1

	```
	incr key
	```

	

![image-20220727143953752](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727143953752.png)

7. 将 数字值减1 只能对数字值操作，如果为空，新增值为-1

	```
	decr key
	```

	

![image-20220727144024648](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727144024648.png)

8. 将key中储存的数字值增减，自定义步长：

	```
	incrby/decrby key 数字值
	```

	

![image-20220727144120135](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727144120135.png)

<hr>
说到incr命令，这里有个扩展知识点：

> **Redis具有原子性**（不是事务中的原子性）
> ![在这里插入图片描述](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/20210421175901805.png)
> 所谓**原子操作**是指不会被线程调度机制打断的操作；
> 这种操作一旦开始，就一直运行到结束，中间不会有任何 context switch（切换到另一个线程）
> （1）在单线程中， 能够在单条指令中完成的操作都可以认为是"原子操作"，因为中断只能发生于指令之间。
> （2）在多线程中，不能被其它进程（线程）打断的操作就叫原子操作。
> Redis单命令的原子性主要得益于**Redis的单线程**。

------

9. 同时设置一个或多个key-value对：

```
mset key1 value1 key2 value2...
```

![image-20220727144239178](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727144239178.png)

9. 同时获取一个或多个value：一个错误不会影响后面的

	```
	mget key1 key2 key3...
	```

![image-20220727144425634](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727144425634.png)

10. 同时设置一个或多个key-value

	```
	// 原子性，有一个失败则都失败
	msetnx key1 value1 key2 value2...
	```

	

![image-20220727144706096](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727144706096.png)

11. 获得值的范围，类似java中的substring，前包，后包

	```
	getrange key 起始位置 结束位置
	```

	

![image-20220727144816441](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727144816441.png)

12. 用value覆写key所储存的字符串值，从起始位置开始(索引从0开始)：

	```
	setrange key 起始位置 value
	```

	

![image-20220727144915202](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727144915202.png)

13. 设置键值的同时，设置过期时间，单位秒：

	```
	setex key 过期时间 value
	```

	

![image-20220727145047334](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727145047334.png)

14. 以新换旧，设置了新值同时获得旧值：

	```
	getset key value
	```

	

![image-20220727145138780](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727145138780.png)

## 数据结构源码解析

String的数据结构为简单动态字符串(Simple Dynamic String,缩写SDS)。

```c
struct sdshdr {
    long len;         //记录buf数组已使用的字节数量，即sds保存的字符串的长度，不含'\0'
    long free;        //记录buf数组中未使用字节的数量
    char buf[0];      //字节数组，用于保存字符串
};
```

   ![image-20230101064713531](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20230101064713531.png)

  len：4，表示这个数组保存的字符串的长度是4。

  free：4，表示这个数组的未使用空间是4。

  buf：是一个字符数组，前4个字节保存的是字符'L'、‘u’、‘o’、‘L’，最后一个字节保存的是字符串结束标识‘\0’。

  sds遵循C字符串以空字符结尾的惯例，保存空字符的1字节不计算在sds的len中，并且为空字符分配额外的1字节空间，以及添  加空字符到字符串末尾等操作，是由sds函数自动完成的。这样遵循空字符结尾这一惯例的好处是，sds可以直接重用一部分c字符串函数库里面的函数。

### sds与c字符串的区别

​    既然sds中保存的也是字符串，为什么不直接使用字符串，而还要封装成一个结构体呢？

1. c语言获取字符串长度需要循环判断，事件复杂度为O(n)，而sds可以直接获取，复杂度是O(1)

2. 杜绝缓冲区溢出。
	c语言在拼接字符的时候，要自己注意开始分配的字符的长度是否容下，而sds在拼接的时候，会先调用API检查sds长度是否够，如果不够，会自动扩大sds到需要的大小

3. 减少修改字符串时带来的内存分配次数。
	由于C字符串不记录长度，所以对于一个包含N个字符的C字符串来说，这个字符串的底层实现总是一个N+1个字符长的数组，所以每次增长或缩短一个C字符串，都要对这个数组进行一次内存重分配。
	而sds中，buf数组的长度不一定是字符数量加一，数组里面可以包含未使用的字节，通过free 属性，实现了空间预分配和惰性空间释放两种优化策略

	1. 空间预分配

		空间预分配用于优化sds的字符串增长操作：当sds的API 对一个sds 进行修改，并且需要对sds进行空间扩展的时候，不仅会为sds 分配修改所必须的空间，还会为sds 分配额外的未使用空间。 其中，额外分配的未使用空间数量由以下公式决定：

		1. 如果对sds 进行修改后，sds的长度（len值）将小于1MB，那么**分配和len 同样大小的未使用空间**，这时sds 的len和free 的值相同。比如，进行修改后，sds 的len 将变成7字节，那么也会分配7字节的未使用空间，sds 的buf数组的实际长度将变成7+ 7 + 1字节（额外的1字节保存空字符）。

		

		2. 如果对sds 进行修改后，sds的长度（len值）将大于等于1MB，那么分配1MB的未使用空间，即free的值是1MB。比如。如果修改后，sds 的len将变成30MB，那么会分配1MB 的未使用空间，sds 的buf数组的实际长度将变成30MB + 1MB + 1字节（额外的1字节保存空字符）。

	2. 惰性空间
		惰性空间释放用于优化sds 的字符串缩短操作：当sds的API 需要缩短sds 保存的字符串时，程序并不立即使用内存分配来回收缩短后多出来的字节，而是使用free 属性将这些字节数量记录起来，等待将来使用。

4. 二进制安全

	1. C字符串中的字符必须符合某种编码（一般是ASCII编码），并且除了字符串的末尾外，字符串里面不能有空字符。
	2. sds 的API 都是二进制安全的，所有的sds API都会以处理二进制的方式来处理sds 存放在buf数组里的数据，不会对数据有限制。即redis 不是用这个数组来保存字符，而是用它来保存一系列二进制数据。因为sds 使用len属性的值来而不是空字符来判断字符串是否结束。

### 总结

![image-20230101065630155](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20230101065630155.png)

## 项目应用

### 验证码

![image-20230103083725641](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20230103083725641.png)

```java
@Override
public Result login(LoginFormDTO loginForm, HttpSession session) {
    // 1.校验手机号
    String phone = loginForm.getPhone();
    if (RegexUtils.isPhoneInvalid(phone)) {
        // 2.如果不符合，返回错误信息
        return Result.fail("手机号格式错误！");
    }
    // 3.从redis获取验证码并校验
    String cacheCode = stringRedisTemplate.opsForValue().get(LOGIN_CODE_KEY + phone);
    String code = loginForm.getCode();
    if (cacheCode == null || !cacheCode.equals(code)) {
        // 不一致，报错
        return Result.fail("验证码错误");
    }

    // 4.一致，根据手机号查询用户 select * from tb_user where phone = ?
    User user = query().eq("phone", phone).one();

    // 5.判断用户是否存在
    if (user == null) {
        // 6.不存在，创建新用户并保存
        user = createUserWithPhone(phone);
    }

    // 7.保存用户信息到 redis中
    // 7.1.随机生成token，作为登录令牌
    String token = UUID.randomUUID().toString(true);
    // 7.2.将User对象转为HashMap存储
    UserDTO userDTO = BeanUtil.copyProperties(user, UserDTO.class);
    Map<String, Object> userMap = BeanUtil.beanToMap(userDTO, new HashMap<>(),
            CopyOptions.create()
                    .setIgnoreNullValue(true)
                    .setFieldValueEditor((fieldName, fieldValue) -> fieldValue.toString()));
    // 7.3.存储
    String tokenKey = LOGIN_USER_KEY + token;
    stringRedisTemplate.opsForHash().putAll(tokenKey, userMap);
    // 7.4.设置token有效期
    stringRedisTemplate.expire(tokenKey, LOGIN_USER_TTL, TimeUnit.MINUTES);

    // 8.返回token
    return Result.ok(token);
}
```

### 缓存

> 在修改，删除的时候删除缓存，再次访问重新读取，这里要注意的几个问题，缓存击穿，缓存穿透，缓存雪崩

```java
@override
public Result queryById(Long id){
    String key "cache:shop:"+id;
    //1,从redis查询商铺缓存
    String shopJson = stringRedisTemplate.opsForValue().get(key);
    /2.判断是否存在
    if (Strutil.isNotBlank(shopJson)){
        //3.存在，直接返回
        Shop shop JSONUtil.toBean(shopJson,Shop.class);
        return Result.ok(shop);
    }
    //4.不存在，根据1d查询数据库
    Shop shop getById(id);
    //5.不存在，返回错误
    if (shop =null){
        return Result.faiZ("店铺不存在！")；
    }
    //6.存在，写入redis
    stringRedisTemplate.opsForValue().set(key,JSONUtil.toJsonstr(shop));
    //7.返回
    return Result.ok(shop);
}
```



# List

可以添加一个元素到列表的头部（左边）或者尾部（右边）

## 常用命令

1. 从左边/右边插入一个或多个值：

```
lpush / rpush key1 value1 key2 value2...
```

> 存储原理

![image-20220727145837251](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727145837251.png)

从左边/右边吐出一个值。**值在键在，值光键亡**：

```
lpop / rpop key
```

![image-20220727150003645](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727150003645.png)

从key1列表右边吐出一个值，插到key2列表左边：

```
rpoplpush key1 key2
```

![image-20220727150113111](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727150113111.png)

按照索引下标获得元素(从左到右)：

```java
lrange key 起始索引 结束索引
lrange key 0 -1   //0左边第一个，-1右边第一个，（0-1表示获取所有）
```

![image-20220727150143871](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727150143871.png)

按照索引下标获得元素(从左到右)：

```
lindex key 索引号
```

![image-20220727150212063](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727150212063.png)

获得列表长度：

```
llen key
```

![image-20220727150306264](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727150306264.png)

在value的前面插入newvalue插入值：

```
linsert key before value newvalue
```

![image-20220727150507947](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727150507947.png)

从左边删除n个value(从左到右)：

```
lrem key n value
```

![image-20220727150553595](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727150553595.png)

> 没有值返回0

将列表key下标为index的值替换成value：

```
lset key index value
```

![image-20220727150710433](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727150710433.png)

## 数据结构

**List的数据结构为快速链表quickList**

首先在列表元素较少的情况下会使用一块连续的内存存储，这个结构是ziplist，也即是压缩列表。

它将所有的元素紧挨着一起存储，分配的是一块连续的内存。

当数据量比较多的时候才会改成quicklist。

因为普通的链表需要的附加指针空间太大，会比较浪费空间。比如这个列表里存的只是int类型的数据，结构上还需要两个额外的指针prev和next。

![在这里插入图片描述](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/20210421190034419.png)
Redis将链表和ziplist结合起来组成了quicklist。也就是将多个ziplist使用双向指针串起来使用。这样既满足了快速的插入删除性能，又不会出现太大的空间冗余。

# Set

set是可以自动排重的，set提供了判断某个成员是否在一个set集合内的重要接口

底层是hash表，所以添加，删除，查找的**复杂度都是O(1)**。

## 常用命令

将一个或多个 member 元素加入到集合 key 中，已经存在的 member 元素将被忽略：

```
sadd key value1 value2...
```

> 不能回存取有value一样的值

![image-20220727150922699](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727150922699.png)

取出该集合的所有值：

```
smembers key
```

![image-20220727151004798](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727151004798.png)

判断集合key是否为含有该value值，有1，没有0：

```
sismember key value
```

![image-20220727151027236](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727151027236.png)

返回该集合的元素个数：

```
scard key
```

> 如果没有该key，则返回0

![image-20220727151056642](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727151056642.png)

删除集合中的某个元素：

```
srem key value1 value2...
```

![image-20220727151208041](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727151208041.png)

随机从该集合中吐出一个值：

> 吐出后该值就背删除了

```
spop key
```

![image-20220727151246556](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727151246556.png)

随机从该集合中取出n个值。不会从集合中删除：

```
srandmember key n
```

> 有多少个就吐多少个

![image-20220727151308988](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727151308988.png)

把集合中一个值从一个集合移动到另一个集合：

```
smove 集合1 集合2 value
```

> 如果该键是最后一个移动的话，那么就会删除该键，转移的键可以不存在，转移后自动创建



![image-20220727151426683](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727151426683.png)

返回两个集合的交集元素：

```
sinter key1 key2
```

![image-20220727151617295](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727151617295.png)

返回两个集合的并集元素：

```
sunion key1 key2
```

![image-20220727151652553](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727151652553.png)

返回两个集合的差集元素(key1中的，不包含key2中的)：

```
sdiff key1 key2
```

![image-20220727151722935](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220727151722935.png)

## 数据结构

Set数据结构是dict字典，字典是用哈希表实现的。

Java中HashSet的内部实现使用的是HashMap，只不过所有的value都指向同一个对象。Redis的set结构也是一样，它的内部也使用hash结构，所有的value都指向同一个内部值。

## 项目实战

### 好友关注

```java
//关注
@PutMapping("/{id}/{isFollow}")
public Result follow(@PathVariable("id") Long followUserId, @PathVariable("isFollow") Boolean isFollow) {
    return followService.follow(followUserId, isFollow);
}
//是否关注
@GetMapping("/or/not/{id}")
public Result isFollow(@PathVariable("id") Long followUserId) {
      return followService.isFollow(followUserId);
}
```

```java
是否关注service
@Override
public Result isFollow(Long followUserId) {
        // 1.获取登录用户
        Long userId = UserHolder.getUser().getId();
        // 2.查询是否关注 select count(*) from tb_follow where user_id = ? and follow_user_id = ?
        Integer count = query().eq("user_id", userId).eq("follow_user_id", followUserId).count();
        // 3.判断
        return Result.ok(count > 0);
    }

 关注service
@Override
public Result follow(Long followUserId, Boolean isFollow) {
    // 1.获取登录用户
    Long userId = UserHolder.getUser().getId();
    String key = "follows:" + userId;
    // 1.判断到底是关注还是取关
    if (isFollow) {
        // 2.关注，新增数据
        Follow follow = new Follow();
        follow.setUserId(userId);
        follow.setFollowUserId(followUserId);
        boolean isSuccess = save(follow);
        if (isSuccess) {
            // 把关注用户的id，放入redis的set集合 sadd userId followerUserId
            stringRedisTemplate.opsForSet().add(key, followUserId.toString());
        }
    } else {
        // 3.取关，删除 delete from tb_follow where user_id = ? and follow_user_id = ?
        boolean isSuccess = remove(new QueryWrapper<Follow>()
                .eq("user_id", userId).eq("follow_user_id", followUserId));
        if (isSuccess) {
            // 把关注用户的id从Redis集合中移除
            stringRedisTemplate.opsForSet().remove(key, followUserId.toString());
        }
    }
    return Result.ok();
}
```

### 共同关注

共同关注,传关注用户的id，set中的交集

```java
@Override
public Result followCommons(Long id) {
    // 1.获取当前用户
    Long userId = UserHolder.getUser().getId();
    String key = "follows:" + userId;
    // 2.求交集
    String key2 = "follows:" + id;
    Set<String> intersect = stringRedisTemplate.opsForSet().intersect(key, key2);
    if (intersect == null || intersect.isEmpty()) {
        // 无交集
        return Result.ok(Collections.emptyList());
    }
    // 3.解析id集合
    List<Long> ids = intersect.stream().map(Long::valueOf).collect(Collectors.toList());
    // 4.查询用户
    List<UserDTO> users = userService.listByIds(ids)
            .stream()
            .map(user -> BeanUtil.copyProperties(user, UserDTO.class))
            .collect(Collectors.toList());
    return Result.ok(users);
}
```



# Hash

hash特别适合用于存储对象。 类似Java里面的Map<String,Object>

```
key      value
user     filed   value
		 id       2
		 name     张三
```

## 常用命令

1. 存储值

	```
	hset <key><field><value>    给<key>集合中的  <field>键赋值<value>
	```

	![image-20220802103814170](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220802103814170.png)

2. 取值

	```
	hget <key1><field>		从<key1>集合<field>取出 value 
	```

	![image-20220802103917016](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220802103917016.png)

3. 批量设置hash值，其实上面的也可以

	```
	hmset <key1><field1><value1><field2><value2>... 批量设置hash的值
	```

	![image-20220802104007690](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220802104007690.png)

4. 查看key，是否有某个field

	```
	hexists<key1><field>查看哈希表 key 中，给定域 field 是否存在。 
	```

	![image-20220802104108131](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220802104108131.png)

	> 有就返回1，没有返回0

5. 列出hash所有的field

	```
	hkeys <key>
	```

	![image-20220802104200810](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220802104200810.png)

6. 列出该hash集合的所有value

	```
	hvals <key>
	```

	![image-20220802104244456](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220802104244456.png)

7. 哈希表 key 中的域 field 的值加上增量 1 -1

	```
	hincrby <key><field><increment>
	```

	![image-20220802104440285](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220802104440285.png)

8. 将哈希表 key 中的域 field 的值设置为 value ，当且仅当域 field 不存在

	> 说白就是添加一个字段，插入值，如果该字段拥有那么就不添加，如果没有就添加

	```
	hsetnx <key><field><value>
	```

	![image-20220802104630395](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220802104630395.png)

## 数据结构

Hash类型对应的数据结构是两种：**ziplist(压缩列表)**，**hashtable(哈希表)**。当 field-value长度较短且个数较少时，使用ziplist,否则使用ashtable。

# Zset

## 简介

Redis有序集合zset与普通集合set非常相似，是一个没有重复元素的字符串集合。

不同之处是有序集合的每个成员都关联了一个**评分（score）**,这个评分（score）被用来按照从最低分到最高分的方式排序集合中的成员。集合的成员是唯一的，但是评分可以是重复了 。

因为元素是有序的, 所以你也可以很快的根据评分（score）或者次序（position）来获取一个范围的元素。

访问有序集合的中间元素也是非常快的,因此你能够使用有序集合作为一个没有重复成员的智能列表。

## 常用命令

1. 将一个或多个 member 元素及其 score 值加入到有序集 key 当中。

> 相当于多了一个scourc 根据来排序

  ```
zadd  <key><score1><value1><score2><value2>
  ```

![image-20220802105140277](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220802105140277.png)

> 他的scoure一定是float类型，否则报错

2. 返回有序集 key

	+ 返回排好序的value值

		```
		zrange <key><start><stop>  
		```

		![image-20220802105507038](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220802105507038.png)

	+ 带上WITHSCORES，可以让分数一起和值返回到结果集。

		```
		zrange <key><start><stop>  WITHSCORES
		```

		![image-20220802105515458](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220802105515458.png)

3. 返回有序集 key 中，所有 score 值介于 min 和 max 之间(包括等于 min 或 max )的成员。有序集成员按 score 值递增(从小到大)次序排列。

	+ 小打大排序

		```
		zrangebyscore key minmax [withscores] [limit offset count]
		```

		![image-20220802105838587](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220802105838587.png)

	+ 大到小排序

		```
		zrevrangebyscore key maxmin [withscores] [limit offset count]       
		```

		![image-20220802110028804](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220802110028804.png)

4. 为元素的score加上增量

	```
	zincrby <key><increment><value>
	```

	![image-20220802110235486](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220802110235486.png)

	![image-20220802110241439](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220802110241439.png)

5. 删除该集合下，指定值的元素

	```
	zrem  <key><value>
	```

	![image-20220802110518546](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220802110518546.png)

6. 统计该集合，分数区间内的元素个数

	```
	zcount <key><min><max>
	```

	![image-20220802110549107](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220802110549107.png)

7. 返回该值在集合中的排名，从0开始。

	```
	zrank <key><value>
	```

	![image-20220802110651711](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220802110651711.png)

	> 默认从0开始

## 数据结构

SortedSet(zset)是Redis提供的一个非常特别的数据结构，一方面它等价于Java的数据结构Map<String, Double>，可以给每一个元素value赋予一个权重score，另一方面它又类似于**TreeSet**
，内部的元素会按照权重score进行排序，可以得到每个元素的名次，还可以通过score的范围来获取元素的列表。

zset底层使用了两个数据结构：

1. **hash**，hash的作用就是关联元素value和权重score，保障元素value的唯一性，可以通过元素value找到相应的score值。
2. **跳跃表**，跳跃表的目的在于给元素value排序，根据score的范围获取元素列表。

### 点赞排行榜

```java
   @Override
    public Result likeBlog(Long id) {
        // 1.获取登录用户
        Long userId = UserHolder.getUser().getId();
        // 2.判断当前登录用户是否已经点赞
        String key = BLOG_LIKED_KEY + id;
        Double score = stringRedisTemplate.opsForZSet().score(key, userId.toString());
        if (score == null) {
            // 3.如果未点赞，可以点赞
            // 3.1.数据库点赞数 + 1
            boolean isSuccess = update().setSql("liked = liked + 1").eq("id", id).update();
            // 3.2.保存用户到Redis的set集合  zadd key value score
            if (isSuccess) {
                stringRedisTemplate.opsForZSet().add(key, userId.toString(), System.currentTimeMillis());
            }
        } else {
            // 4.如果已点赞，取消点赞
            // 4.1.数据库点赞数 -1
            boolean isSuccess = update().setSql("liked = liked - 1").eq("id", id).update();
            // 4.2.把用户从Redis的set集合移除
            if (isSuccess) {
                stringRedisTemplate.opsForZSet().remove(key, userId.toString());
            }
        }
        return Result.ok();
    }


    private void isBlogLiked(Blog blog) {
        // 1.获取登录用户
        UserDTO user = UserHolder.getUser();
        if (user == null) {
            // 用户未登录，无需查询是否点赞
            return;
        }
        Long userId = user.getId();
        // 2.判断当前登录用户是否已经点赞
        String key = "blog:liked:" + blog.getId();
        Double score = stringRedisTemplate.opsForZSet().score(key, userId.toString());
        blog.setIsLike(score != null);
    }
```

获取点赞排行榜

```java
@GetMapping("/likes/{id}")
public Result queryBlogLikes(@PathVariable("id") Long id) {

    return blogService.queryBlogLikes(id);
}
```

```java
@Override
public Result queryBlogLikes(Long id) {
    String key = BLOG_LIKED_KEY + id;
    // 1.查询top5的点赞用户 zrange key 0 4
    Set<String> top5 = stringRedisTemplate.opsForZSet().range(key, 0, 4);
    if (top5 == null || top5.isEmpty()) {
        return Result.ok(Collections.emptyList());
    }
    // 2.解析出其中的用户id
    List<Long> ids = top5.stream().map(Long::valueOf).collect(Collectors.toList());
    String idStr = StrUtil.join(",", ids);
    // 3.根据用户id查询用户 WHERE id IN ( 5 , 1 ) ORDER BY FIELD(id, 5, 1)
    List<UserDTO> userDTOS = userService.query()
            .in("id", ids).last("ORDER BY FIELD(id," + idStr + ")").list()
            .stream()
            .map(user -> BeanUtil.copyProperties(user, UserDTO.class))
            .collect(Collectors.toList());
    // 4.返回
    return Result.ok(userDTOS);
}
```

### Feed流

当我们关注了用户后，这个用户发了动态，那么我们应该把这些数据推送给用户，这个需求，其实我们又把他叫做Feed流，关注推送也叫做Feed流，直译为投喂。为用户持续的提供“沉浸式”的体验，通过无限下拉刷新获取新的信息。

Feed流产品有两种常见模式：
Timeline：不做内容筛选，简单的按照内容发布时间排序，常用于好友或关注。例如朋友圈

* 优点：信息全面，不会有缺失。并且实现也相对简单
* 缺点：信息噪音较多，用户不一定感兴趣，内容获取效率低

智能排序：利用智能算法屏蔽掉违规的、用户不感兴趣的内容。推送用户感兴趣信息来吸引用户

* 优点：投喂用户感兴趣信息，用户粘度很高，容易沉迷
* 缺点：如果算法不精准，可能起到反作用

feed流三种实现方法

写少，读多

![image-20230103070830951](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20230103070830951.png)

推模式，没有发件箱，发布直接写入收件箱，写较多

![image-20230103070912861](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20230103070912861.png)

推拉结合(普通粉丝用拉模式，活跃粉丝用推模式)

![image-20230103070951042](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20230103070951042.png)

比较

![image-20230103071026215](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20230103071026215.png)

feed不能使用传统分页的原因

> 分页查询会混乱，也就是插入后，第一个就是10-6，插入的时候是11，重新读取6

![image-20230103072100964](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20230103072100964.png)

滚动分页，list不能实现，因为他只能从头到尾读，而sortset可以，他可以按照scoll读取，读取后记录最小的时间范围为lastId，在次读取的时候就可以使用这个进行范围查询

![image-20230103072225533](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20230103072225533.png)

list在数据多变的时候不推荐使用

zset做滚动分页

```
首次查询的时候为  key 最小值  最小值     分页   >=0的查询3条数据
ZREVRANGEBYSCORE z1 1000 0 WITHSCORES LIMIT 0 3

第二次查询的时候      上次的最小值 更小只   >=6的个数(过滤等于6的) 查询3条
ZREVRANGEBYSCORE z1 6 0 WITHSCORES LIMIT 2 3
```

实现滚动条

发布博客时发送数据给粉丝

```java
@Override
public Result saveBlog(Blog blog) {
    // 1.获取登录用户
    UserDTO user = UserHolder.getUser();
    blog.setUserId(user.getId());
    // 2.保存探店笔记
    boolean isSuccess = save(blog);
    if(!isSuccess){
        return Result.fail("新增笔记失败!");
    }
    // 3.查询笔记作者的所有粉丝 select * from tb_follow where follow_user_id = ?
    List<Follow> follows = followService.query().eq("follow_user_id", user.getId()).list();
    // 4.推送笔记id给所有粉丝
    for (Follow follow : follows) {
        // 4.1.获取粉丝id
        Long userId = follow.getUserId();
        // 4.2.推送
        String key = FEED_KEY + userId;
        stringRedisTemplate.opsForZSet().add(key, blog.getId().toString(), System.currentTimeMillis());
    }
    // 5.返回id
    return Result.ok(blog.getId());
}
```

粉丝接收数据

![image-20230103095631578](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20230103095631578.png)

```java
@GetMapping("/of/follow")
public Result queryBlogOfFollow(
    @RequestParam("lastId") Long max, @RequestParam(value = "offset", defaultValue = "0") Integer offset){
    return blogService.queryBlogOfFollow(max, offset);
}
```

```java
@Override
public Result queryBlogOfFollow(Long max, Integer offset) {
    // 1.获取当前用户
    Long userId = UserHolder.getUser().getId();
    // 2.查询收件箱 ZREVRANGEBYSCORE key Max Min LIMIT offset count
    String key = FEED_KEY + userId;
    Set<ZSetOperations.TypedTuple<String>> typedTuples = stringRedisTemplate.opsForZSet()
        .reverseRangeByScoreWithScores(key, 0, max, offset, 2);
    // 3.非空判断
    if (typedTuples == null || typedTuples.isEmpty()) {
        return Result.ok();
    }
    // 4.解析数据：blogId、minTime（时间戳）、offset
    List<Long> ids = new ArrayList<>(typedTuples.size());
    long minTime = 0; // 2
    int os = 1; // 2
    for (ZSetOperations.TypedTuple<String> tuple : typedTuples) { // 5 4 4 2 2
        // 4.1.获取id
        ids.add(Long.valueOf(tuple.getValue()));
        // 4.2.获取分数(时间戳）
        long time = tuple.getScore().longValue();
        if(time == minTime){
            os++;
        }else{
            minTime = time;
            os = 1;
        }
    }
	os = minTime == max ? os : os + offset;
    // 5.根据id查询blog
    String idStr = StrUtil.join(",", ids);
    List<Blog> blogs = query().in("id", ids).last("ORDER BY FIELD(id," + idStr + ")").list();

    for (Blog blog : blogs) {
        // 5.1.查询blog有关的用户
        queryBlogUser(blog);
        // 5.2.查询blog是否被点赞
        isBlogLiked(blog);
    }

    // 6.封装并返回
    ScrollResult r = new ScrollResult();
    r.setList(blogs);
    r.setOffset(os);
    r.setMinTime(minTime);

    return Result.ok(r);
}
```



# Bitmaps

Bitmaps想象成一个以位为单位的数组， 数组的每个单元只能存储0和1， 数组的下标在Bitmaps中叫做偏移量。
![在这里插入图片描述](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/20210424103835451.png)

## 常用命令

* SETBIT：向指定位置（offset）存入一个0或1  

	```
	offset表示你要操作的是第几个bit位，value表示你要将这个位设为何值，可选值只有0,1两个。
	setbit key offset value
	```

* GETBIT ：获取指定位置（offset）的bit值

	```
	offset表示你要获取的是第几个bit位
	getbit key offset
	```

* BITCOUNT ：统计BitMap中值为1的bit位的数量 返回的是10进制

	```
	bitcount key [start] [end]  开始到结束的位置
	```

* BITFIELD ：操作（查询、修改、自增）BitMap中bit数组中的指定位置（offset）的值

* BITFIELD_RO ：获取BitMap中bit数组，并以十进制形式返回

* BITOP ：将多个BitMap的结果做位运算（与 、或、异或）

* BITPOS ：查找bit数组中指定范围内第一个0或1出现的位置

	```
	bitpos key targetBit [start][end]  targetBit目标值
	```

## 项目应用

### 用户签到

我们可以把年和月作为bitMap的key，然后保存到一个bitMap中，每次签到就到对应的位上把数字从0变成1，只要对应是1，就表明说明这一天已经签到了，反之则没有签到。

```java
@Override
    public Result sign() {
        //1. 判断用户是否已经登录
        UserDTO loginUser = UserHolder.getUser();
        if(loginUser==null){
            return Result.fail("用户未登录");
        }
        //2. 判断用户是否已经签到
        // 获取年/月 还有这个月多少天的天数
        LocalDateTime localDateTime = LocalDateTime.now();
        String keysuffic = localDateTime.format(DateTimeFormatter.ofPattern(":yyyyMM"));
        int day = localDateTime.getDayOfMonth();
        String key = "user:sign:"+loginUser.getId()+":"+keysuffic;
        Boolean isSign = stringRedisTemplate.opsForValue().getBit(key, day - 1);
        //3. 签到了不执行
        if(BooleanUtil.isTrue(isSign)){
            return Result.fail("已经签到了");
        }else{
            stringRedisTemplate.opsForValue().setBit(key, day - 1, true);
            return Result.ok();
        }
    }
```

### 连续签到

从最后一次签到开始向前统计，直到遇到第一次未签到为止，计算总的签到次数，就是连续签到天数。

如何得到本月到今天为止的所有签到数据？

```
  BITFIELD key GET u[dayOfMonth] 0
```

假设今天是10号，那么我们就可以从当前月的第一天开始，获得到当前这一天的位数，是10号，那么就是10位，去拿这段时间的数据，就能拿到所有的数据了，那么这10天里边签到了多少次呢？统计有多少个1即可。

如何从后向前遍历每个bit位？

注意：bitMap返回的数据是10进制，哪假如说返回一个数字8，那么我哪儿知道到底哪些是0，哪些是1呢？我们只需要让得到的10进制数字和1做与运算就可以了，因为1只有遇见1 才是1，其他数字都是0 ，我们把签到结果和1进行与操作，每与一次，就把签到结果向右移动一位，依次内推，我们就能完成逐个遍历的效果了。

```java
@Override
public Result signCount() {
    // 1.获取当前登录用户
    Long userId = UserHolder.getUser().getId();
    // 2.获取日期
    LocalDateTime now = LocalDateTime.now();
    // 3.拼接key
    String keySuffix = now.format(DateTimeFormatter.ofPattern(":yyyyMM"));
    String key = USER_SIGN_KEY + userId + keySuffix;
    // 4.获取今天是本月的第几天
    int dayOfMonth = now.getDayOfMonth();
    // 5.获取本月截止今天为止的所有的签到记录，返回的是一个十进制的数字 BITFIELD sign:5:202203 GET u14 0
    List<Long> result = stringRedisTemplate.opsForValue().bitField(
            key,
            BitFieldSubCommands.create()
                    .get(BitFieldSubCommands.BitFieldType.unsigned(dayOfMonth)).valueAt(0)
    );
    if (result == null || result.isEmpty()) {
        // 没有任何签到结果
        return Result.ok(0);
    }
    Long num = result.get(0);
    if (num == null || num == 0) {
        return Result.ok(0);
    }
    // 6.循环遍历
    int count = 0;
    while (true) {
        // 6.1.让这个数字与1做与运算，得到数字的最后一个bit位  // 判断这个bit位是否为0
        if ((num & 1) == 0) {
            // 如果为0，说明未签到，结束
            break;
        }else {
            // 如果不为0，说明已签到，计数器+1
            count++;
        }
        // 把数字右移一位，抛弃最后一个bit位，继续下一个bit位
        num >>>= 1;
    }
    return Result.ok(count);
}
```



# HyperLogLog

在工作当中，我们经常会遇到与统计相关的功能需求，比如统计网站PV（PageView页面访问量）,可以使用Redis的incr、incrby轻松实现

但像UV（UniqueVisitor，独立访客）、独立IP数、搜索记录数等需要去重和计数的问题如何解决？这种求集合中不重复元素个数的问题称为基数问题。

解决基数问题有很多种方案：

（1）**数据存储在MySQL表中，使用distinct count计算不重复个数**

（2）使用Redis提供的**hash、set、bitmaps**等数据结构来处理

以上的方案结果精确，但随着数据不断增加，导致占用空间越来越大，对于非常大的数据集是不切实际的。

能否能够降低一定的精度来平衡存储空间？Redis推出了HyperLogLog

Redis HyperLogLog 是用来做基数统计的算法，HyperLogLog 的优点是，在输**入元素的数量或者体积非常非常大时**，计算基数所需的空间**总是固定的、并且是很小的**。

在 Redis 里面，每个 HyperLogLog 键只需要**花费 12 KB 内存**，就可以计算接近 2^64 个不同元素的基数。这和计算基数时，元素越多耗费内存就越多的集合形成鲜明对比。

但是，因为 HyperLogLog 只会根据输入元素来计算基数，而不会储存输入元素本身，所以 HyperLogLog 不能像集合那样，返回输入的各个元素。

什么是基数? 不重复的数据

比如数据集 {1, 3, 5, 7, 5, 7, 8}， 那么这个数据集的基数集为 {1, 3, 5 ,7, 8}, 基数(不重复元素)为5。 基数估计就是在误差可接受的范围内，快速计算基数。

## 常用命令

1. pfadd (指定元素添加到HeperLogLog)

	```
	pfadd key value
	```

![image-20220808104045103](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220808104045103.png)

> 重复元素不再添加，但是要注意vlaue一定要用双引号括起来

2. （统计某个key的个数）

	```
	pfcount key
	```

	

![image-20220808104217125](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220808104217125.png)

3. pfmerge(把两个key合并成一个，排序重复元素)

	```
	prmerge key3 key1 key2
	```

![image-20220808104404806](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220808104404806.png)

## 项目实战

统计用户访问网站

```java
@Test
void testHyperLogLog(){
    //准备数组，装用户数据
    String[]users new String[1000];
    //数组角标
    int index 0;
    for(inti=1;i<=1000000;i++){
        /1赋值
        users[index++]"user_"+i;
        //每1000条发送一次
        if(i%1000==0){
            index 0;
            stringRedisTemplate.opsForHyperLogLog().add("hll1",users)
        }
    }
    //统计数量
    Long size stringRedisTemplate.opsForHyperLogLog().size("hl11");
    System.out.println("size ="size);
 }
```

# Geospatial

提供了经纬度设置，查询，范围查询，距离查询，经纬度Hash等常见操作。

### 常用命令

1. geoadd 添加地理位置

	```
	geoadd china:city 121.47 31.23 shanghai
	```

	

> 两极无法直接添加，一般会下载城市数据，直接通过 Java 程序一次性导入。
>
> 有效的经度从 -180 度到 180 度。有效的纬度从 -85.05112878 度到 85.05112878 度。
>
> 当坐标位置超出指定范围时，该命令将会返回一个错误。
>
> 已经添加的数据，是无法再次往里面添加的。

2. geopos 经纬度

	```
	getpos key  value
	```

	

![image-20220808105129967](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220808105129967.png)

3. geodist 获得两格地理位置的距离

	```
	goedist key value value  km
	```

	

![image-20220808105249733](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220808105249733.png)

> 单位：
>
> m 表示单位为米[默认值]。
>
> km 表示单位为千米。
>
> mi 表示单位为英里。
>
> ft 表示单位为英尺。
>
> 如果用户没有显式地指定单位参数， 那么 GEODIST 默认使用米作为单位

4. georadius 以给定的经纬度为中心，找出某一半径内的元素

	```
	georadius key 经度 纬度 距离 单位      找出key中再经纬度为中心的距离的城市
	```

![image-20220808105553653](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20220808105553653.png)

## 项目实战

### 附近商店

![image-20230103093350237](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20230103093350237.png)

按照商户类型做分组，类型相同的商户作为同一组，以typeld为ky存入同一个GEO集合中即可

```java
@Test
void loadShopData() {
    // 1.查询店铺信息
    List<Shop> list = shopService.list();
    // 2.把店铺分组，按照typeId分组，typeId一致的放到一个集合
    Map<Long, List<Shop>> map = list.stream().collect(Collectors.groupingBy(Shop::getTypeId));
    // 3.分批完成写入Redis
    for (Map.Entry<Long, List<Shop>> entry : map.entrySet()) {
        // 3.1.获取类型id
        Long typeId = entry.getKey();
        String key = SHOP_GEO_KEY + typeId;
        // 3.2.获取同类型的店铺的集合
        List<Shop> value = entry.getValue();
        List<RedisGeoCommands.GeoLocation<String>> locations = new ArrayList<>(value.size());
        // 3.3.写入redis GEOADD key 经度 纬度 member
        for (Shop shop : value) {
            // stringRedisTemplate.opsForGeo().add(key, new Point(shop.getX(), shop.getY()), shop.getId().toString());
            locations.add(new RedisGeoCommands.GeoLocation<>(
                    shop.getId().toString(),
                    new Point(shop.getX(), shop.getY())
            ));
        }
        stringRedisTemplate.opsForGeo().add(key, locations);
    }
}
```

SpringDataRedis的2.3.9版本并不支持Redis 6.2提供的GEOSEARCH命令，因此我们需要提示其版本，修改自己的POM

第一步：导入pom

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
    <exclusions>
        <exclusion>
            <artifactId>spring-data-redis</artifactId>
            <groupId>org.springframework.data</groupId>
        </exclusion>
        <exclusion>
            <artifactId>lettuce-core</artifactId>
            <groupId>io.lettuce</groupId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
    <groupId>org.springframework.data</groupId>
    <artifactId>spring-data-redis</artifactId>
    <version>2.6.2</version>
</dependency>
<dependency>
    <groupId>io.lettuce</groupId>
    <artifactId>lettuce-core</artifactId>
    <version>6.1.6.RELEASE</version>
</dependency>
```

第二步：

ShopController （参数是用户坐标）

```java
@GetMapping("/of/type")
public Result queryShopByType(
        @RequestParam("typeId") Integer typeId,
        @RequestParam(value = "current", defaultValue = "1") Integer current,
        @RequestParam(value = "x", required = false) Double x,
        @RequestParam(value = "y", required = false) Double y
) {
   return shopService.queryShopByType(typeId, current, x, y);
}
```

ShopServiceImpl

```java
@Override
    public Result queryShopByType(Integer typeId, Integer current, Double x, Double y) {
        // 1.判断是否需要根据坐标查询
        if (x == null || y == null) {
            // 不需要坐标查询，按数据库查询
            Page<Shop> page = query()
                    .eq("type_id", typeId)
                    .page(new Page<>(current, SystemConstants.DEFAULT_PAGE_SIZE));
            // 返回数据
            return Result.ok(page.getRecords());
        }

        // 2.计算分页参数
        int from = (current - 1) * SystemConstants.DEFAULT_PAGE_SIZE;
        int end = current * SystemConstants.DEFAULT_PAGE_SIZE;

        // 3.查询redis、按照距离排序、分页。结果：shopId、distance
        String key = SHOP_GEO_KEY + typeId;
        GeoResults<RedisGeoCommands.GeoLocation<String>> results = stringRedisTemplate.opsForGeo() // GEOSEARCH key BYLONLAT x y BYRADIUS 10 WITHDISTANCE
                .search(
                        key,
                        GeoReference.fromCoordinate(x, y),
                        new Distance(5000),
                        RedisGeoCommands.GeoSearchCommandArgs.newGeoSearchArgs().includeDistance().limit(end)
                );
        // 4.解析出id
        if (results == null) {
            return Result.ok(Collections.emptyList());
        }
        List<GeoResult<RedisGeoCommands.GeoLocation<String>>> list = results.getContent();
        if (list.size() <= from) {
            // 没有下一页了，结束
            return Result.ok(Collections.emptyList());
        }
        // 4.1.截取 from ~ end的部分
        List<Long> ids = new ArrayList<>(list.size());
        Map<String, Distance> distanceMap = new HashMap<>(list.size());
        list.stream().skip(from).forEach(result -> {
            // 4.2.获取店铺id
            String shopIdStr = result.getContent().getName();
            ids.add(Long.valueOf(shopIdStr));
            // 4.3.获取距离
            Distance distance = result.getDistance();
            distanceMap.put(shopIdStr, distance);
        });
        // 5.根据id查询Shop
        String idStr = StrUtil.join(",", ids);
        List<Shop> shops = query().in("id", ids).last("ORDER BY FIELD(id," + idStr + ")").list();
        for (Shop shop : shops) {
            shop.setDistance(distanceMap.get(shop.getId().toString()).getValue());
        }
        // 6.返回
        return Result.ok(shops);
    }
```


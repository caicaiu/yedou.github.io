---
title: Redis分布式锁和3大缓存问题
tags: Redis
categories: 后端
cover: 'https://xinzhuobu.com/wp-content/uploads/2022/11/20221105001.jpg'
abbrlink: e6b0e0d3
date: 2023-01-03 16:53:40
---

# 3大问题

## 缓存穿透

请求的数据在缓存中和数据库中都不存在，这样缓存永远不会生效，这些请求都会打到数据库。

解决:

1. 缓存空对象
2. [布隆过滤](https://developer.aliyun.com/article/773205#slide-15)

**缓存空对象思路分析：**数据库中不存在的对象存入到redis中，当再次访问不存在的数据时，只会在redis中返回

```java
/**
* 缓存穿透方法
 * @param id
 * @return
 */
public R queryWithPassThrough(String keyPrefix, ID id, Class<R> type, Long time, TimeUnit unit,Function<ID,R> dbFallback){
    String key = keyPrefix+id;
    //1.从redis查询商铺缓存
    String json = stringRedisTemplate.opsForValue().get(key);
    //2.判断是否为空
    if (StrUtil.isNotBlank(json)) {
        //3.存在，直接返回
        return JSONUtil.toBean(json, type);
    }
    //命中的是否是空值，已经查询过了，但是没有数据，返回店铺不存在
    if (json != null) {
        return R.fail("店铺不存在");
    }

    //4.不存在，根据id查询数据库
    Shop shop = this.getById(id);
    //5.不存在，返回错误
    if(shop==null){
        //将空值写入reddis
        stringRedisTemplate.opsForValue().set(key,"",CACHE_NULL_TTL, TimeUnit.MINUTES);
        return R.fail("店铺不存在");
    }
    //6.存在，写入redis
    this.set(key,shop,time,unit);
    //7.返回
    return shop;
}

```

### 总结

![image-20230103171519580](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20230103171519580.png)

## 缓存雪崩

同一时间，大量请求无法使用缓存（key集体过期，缓存服务器宕机），像雪崩一样冲向数据库

### 解决

+ 给不同的Key的TTL添加随机值
+ 利用Redis集群提高服务的可用性
+ 给缓存业务添加降级限流策略
+ 给业务添加多级缓存

## 缓存击穿

热点的key过期，导致一瞬间大量访问该key的请求打到数据库 。

该key有两个特征：

1. 被大量请求访问 
2.  缓存重建业务复杂（在重建长时间里，大量请求透过，多次进行缓存重建）

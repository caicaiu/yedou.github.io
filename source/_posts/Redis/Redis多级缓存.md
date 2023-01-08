---
title: Redis多级缓存
tags: Redis
categories: 后端
cover: 'https://xinzhuobu.com/wp-content/uploads/2022/06/20220605002.jpg'
abbrlink: 1e8aa882
date: 2023-01-04 09:14:26
---

多级缓存就是充分利用请求处理的每个环节，分别添加缓存，减轻Tomcat压力，提升服务性能：

![image-20210821080954947](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4869/image-20210821080954947.png)

# JVM进程缓存 Caffeine

进程本地缓存，例如HashMap、GuavaCache：

- 优点：读取本地内存，没有网络开销，速度更快
- 缺点：存储容量有限、可靠性较低、无法共享
- 场景：性能要求较高，缓存数据量较小

基本API

```java
@Test
void testBasicOps() {
    // 构建cache对象
    Cache<String, String> cache = Caffeine.newBuilder().build();

    // 存数据
    cache.put("gf", "迪丽热巴");

    // 取数据
    String gf = cache.getIfPresent("gf");
    System.out.println("gf = " + gf);

    // 取数据，包含两个参数：
    // 参数一：缓存的key
    // 参数二：Lambda表达式，表达式参数就是缓存的key，方法体是查询数据库的逻辑
    // 优先根据key查询JVM缓存，如果未命中，则执行参数二的Lambda表达式
    String defaultGF = cache.get("defaultGF", key -> {
        // 根据key去数据库查询数据
        return "柳岩";
    });
    System.out.println("defaultGF = " + defaultGF);
}
```

Caffeine提供了三种缓存驱逐策略：

- **基于容量**：设置缓存的数量上限

	```java
	// 创建缓存对象
	Cache<String, String> cache = Caffeine.newBuilder()
	    .maximumSize(1) // 设置缓存大小上限为 1
	    .build();
	```

- **基于时间**：设置缓存的有效时间

	```java
	// 创建缓存对象
	Cache<String, String> cache = Caffeine.newBuilder()
	    // 设置缓存有效期为 10 秒，从最后一次写入开始计时 
	    .expireAfterWrite(Duration.ofSeconds(10)) 
	    .build();
	
	```

- **基于引用**：设置缓存为软引用或弱引用，利用GC来回收缓存数据。性能较差，不建议使用。

代码实现: 配置缓存策略

```java
@Configuration
public class CaffeineConfig {

    @Bean
    public Cache<Long, Item> itemCache(){
        return Caffeine.newBuilder()
                .initialCapacity(100)
                .maximumSize(10_000)
                .build();
    }

    @Bean
    public Cache<Long, ItemStock> stockCache(){
        return Caffeine.newBuilder()
                .initialCapacity(100)
                .maximumSize(10_000)
                .build();
    }
}
```

访问

```java
@RestController
@RequestMapping("item")
public class ItemController {

    @Autowired
    private IItemService itemService;
    @Autowired
    private IItemStockService stockService;

    @Autowired
    private Cache<Long, Item> itemCache;
    @Autowired
    private Cache<Long, ItemStock> stockCache;
    
    // ...其它略
    @GetMapping("/{id}")
    public Item findById(@PathVariable("id") Long id) {
        return itemCache.get(id, key -> itemService.query()
                .ne("status", 3).eq("id", key)
                .one()
        );
    }

    @GetMapping("/stock/{id}")
    public ItemStock findStockById(@PathVariable("id") Long id) {
        return stockCache.get(id, key -> stockService.getById(key));
    }
}
```

# Lua语法入门

因为要操作nginx的集群，所以要使用lua脚本进行编写

CentOS7默认已经安装了Lua语言环境，所以可以直接运行Lua代码。

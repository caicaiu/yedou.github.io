/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","7eaa0e59ebccb14edafe12d3429b4afb"],["/archives/2022/12/index.html","6ff508f07f94bf607ddbee7f5ef60f13"],["/archives/2022/12/page/2/index.html","4c3cf104cb955aa1431449c3dd68ef2a"],["/archives/2022/index.html","055a66424d37c8dcea551f505d2f053e"],["/archives/2022/page/2/index.html","693f029ee57fa42e2d38e850f0a84ed2"],["/archives/2023/01/index.html","cfc8169ba1674f292c578345be829e7e"],["/archives/2023/01/page/2/index.html","0e40e536dca43d86c826298d48c74319"],["/archives/2023/index.html","4c3064a83249dd23e71c20e132ef9569"],["/archives/2023/page/2/index.html","be424a3735bdb52e0d03360ebd65abe2"],["/archives/index.html","5fe3491326426f5efe996e5296dd93c2"],["/archives/page/2/index.html","fe70e6213d56805a9a2359b3a4e0f1ca"],["/archives/page/3/index.html","af932bae1a6aa2f5c3f8ec1edf2da253"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","b5282ec3527b5fe71dba81526a1dd23e"],["/categories/index.html","116fd593e17008fa9e72781aa8b3f90e"],["/categories/前端/index.html","51fe082942b6f834e127fe3789172f01"],["/categories/后端/index.html","d4c14632ba2336067606e292e7c24d91"],["/categories/工具使用/index.html","b52ae78c0764427f479faaf55de0bab4"],["/categories/常见问题/index.html","465d5ed6d5724028c44b48d006de5248"],["/categories/测试1/index.html","9dad006aa8db1daccfb7929ab3f25b0c"],["/categories/算法/index.html","362f89446f0e77646053ec1f9a678392"],["/categories/英语语法/index.html","0a45116b45eca4f013da63fb91e8466f"],["/categories/软件安装教程/index.html","83b84320f1b9fd2b43f976f89e413ec7"],["/css/custom.css","e02d6c555c21bc86326121b40e4e5724"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","5711ab8b4f7f3b829dae90b7fdda387b"],["/css/rightmenu.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0b6dcc652df417a8b74af17aa5e26409"],["/js/light.js","27e6be65e558ed03f4a7defb7741f8b4"],["/js/main.js","f06d8375e05558ae782915ef4e60e042"],["/js/rightmenu.js","93630f12530ff5880ff1c7a3f691195f"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","4644330c836679762a5187a679d975bb"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","6204c7ccd8ff38faf05a2dee97da0b54"],["/page/2/index.html","6962b4455e9a424e45a42cb9dcbe6dde"],["/page/3/index.html","56262f624c1321afe6d2701c7922163f"],["/post/1.html","c5d53e50af65322a7c32081826e3b273"],["/post/119ed1dc.html","1f5fcc74b12c28b9339fc88f9c58896e"],["/post/13898.html","e5ed06d5fffb82f09c2467fc4ec5cc28"],["/post/16107.html","e57c795febe10af4f711cca82b8989ba"],["/post/18006.html","f403cc6dc44cf6d7e586fc92e6610c7d"],["/post/1e8aa882.html","c3eed6d6442c1a95a78d5e82680c34c9"],["/post/26216.html","c70e983e4140fd441861a22057fb1e1f"],["/post/3340c4c2.html","af0beadf26bf56bd7a94fe6a309017e2"],["/post/4e92fa67.html","eb5fee6974dc04018a133df46cb4da25"],["/post/5050ddb0.html","8f7d73da4f86dc6e9f1d8dcbcb8728c7"],["/post/62120.html","7db2e8f8f08614dd6d75de671fd4d042"],["/post/63711.html","e8cef5d96906064648c7bf5eb9abd867"],["/post/6541.html","a257e415ef5a0f4fb5590c6497886f2c"],["/post/69c3279c.html","ec9d2ed07bb913decd65d689973ab172"],["/post/6f1c51ce.html","2ab7bee03597ac425d511983920c6215"],["/post/7ed01655.html","2536bf20592d07e0494f7e1fcaef80e6"],["/post/85682d75.html","3a20f6ca5aa92d008cee8cac30df8a61"],["/post/94bb4a64.html","019e99e2ad8529cf0ed616b2d02415af"],["/post/978cfc19.html","bfd9658120baffa80f29cf2b4a96b519"],["/post/d3f2095d.html","cce695f66225189545c6b3862aaf7835"],["/post/d73c0d37.html","9fc7d9d1909b4c02763c251a22fb8905"],["/post/e6b0e0d3.html","c503b212bf28a415ece180327488e81b"],["/post/e93d36ed.html","b720a491006d7c6067c5e3678a6bfd53"],["/post/f025fac7.html","46e78a8e95b68eb447f1bb4d7e3b3fac"],["/post/f184a21a.html","2a857e6620c5ebb7e6bccbc6351fa1f2"],["/post/ff8068c0.html","775b615adbd984ea4581d2bbcb7c7112"],["/sw-register.js","e20bd166fa815c2dcdabe60942c63a29"],["/tags/CSS/index.html","781455ceaa4f3aa64d010c03dd4f2a7e"],["/tags/ES6/index.html","ed932daca05a0a64af52d0499434dab7"],["/tags/Git/index.html","096cae0ce81e2d82573b44fd858931f6"],["/tags/Hexo教程/index.html","133e95770cee0db5c5b60fb36b03b567"],["/tags/JavaScript/index.html","bb0d5ed5ae1edc095adb7ae065a0343a"],["/tags/Redis/index.html","b03d7b27bb12b9a1db7b55ca33d73c92"],["/tags/index.html","e929ac4d0ee6ddf29c7a40604f550d44"],["/tags/java/index.html","86f4551f1208e9bff1992de0be78f6ea"],["/tags/工具使用/index.html","ca4deed337d4dfdad6f41910fdae19f5"],["/tags/算法/index.html","37148afed7da85849fe04874b75de570"],["/tags/英语语法/index.html","611ca7f7d6e74fc5cd543805c2195a66"],["/tags/软件安装/index.html","d062523bfc92a0ddec24fb18169280d7"],["/tags/问题/index.html","32521d295cc8adcca0c758ae3971076a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */

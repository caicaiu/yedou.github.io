/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d8b80040f6d436b6daa5fd082f0b5faf"],["/archives/2022/12/index.html","8e51c0abbdbc708c5e322172ebd66960"],["/archives/2022/12/page/2/index.html","538b1a9f39355331ba1efb8c2daa00ec"],["/archives/2022/index.html","d33d6c37d6405400b177e1601f6d853d"],["/archives/2022/page/2/index.html","291153c49ecd2c5f5a54f95ead636757"],["/archives/2023/01/index.html","4ee04ad00b87f8e56fcdf835156ab3dd"],["/archives/2023/01/page/2/index.html","2575e098b73c250c3d82a9a541aa623b"],["/archives/2023/index.html","d2c7954ddd78358be57617d9f0d11e99"],["/archives/2023/page/2/index.html","308194e695c71b55d28eddb588eec08c"],["/archives/index.html","2c1772731fb75e785134ddd5045f57a8"],["/archives/page/2/index.html","a264bfcdb9c1a6bb9fb69f62b90cdf49"],["/archives/page/3/index.html","ae3666b6c0254e708fea41b709f7c5ea"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","1f7d114fbcb020fa6f4771f6f0b39053"],["/categories/index.html","1b75619cc4be4e00f7885aa3a1b11490"],["/categories/前端/index.html","e0c906c702d5facc302d90edd6e4b5cc"],["/categories/后端/index.html","a70555a9cd776497f1cbd1d520c3093b"],["/categories/工具使用/index.html","6f53821481a2a4c30e499831afb13e1b"],["/categories/常见问题/index.html","db85a220071d5abca0e23df8e4d41cc6"],["/categories/测试1/index.html","94596f6bc840eb333aaa6d273f164cf6"],["/categories/目标/index.html","b045c1415a5f38493fc47c16fcb92aa1"],["/categories/算法/index.html","26c3b30b7cf0d80d0c482dae1c7734b4"],["/categories/英语语法/index.html","44d7a5eec8e8084c3c5c064c115a4993"],["/categories/软件安装教程/index.html","1c9b09c871f208f000e9c52c927f753e"],["/css/custom.css","5e094c5b642d569864321bc14c0182fa"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","5711ab8b4f7f3b829dae90b7fdda387b"],["/css/rightmenu.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e0ea4f97364893017af50e3987145c13"],["/js/light.js","27e6be65e558ed03f4a7defb7741f8b4"],["/js/main.js","f06d8375e05558ae782915ef4e60e042"],["/js/rightmenu.js","93630f12530ff5880ff1c7a3f691195f"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","4644330c836679762a5187a679d975bb"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","4c1cfc638d1f1f07c241e15ada9ae337"],["/page/2/index.html","49bf06e59a15bda5065a209db1bf2120"],["/page/3/index.html","f6e154c24cf09b1ce4b41ca2f0a117c2"],["/post/0.html","03b7a1bb95fd98c1e8019052308049f6"],["/post/1.html","96d3bfdbadb613aad3e1dea392f441f5"],["/post/119ed1dc.html","dfbad08e8e314484444f5ffd243bbb60"],["/post/13898.html","8fad73a2bef751fea3db48e6cbf2e77b"],["/post/16107.html","dc9ae8161d50bc322ed3c7d2419922bc"],["/post/18006.html","648c2dab4f1168fdb24e60cfbe68119e"],["/post/1e8aa882.html","910433515dd020e18f5f8b3bc5a11dc3"],["/post/26216.html","eec52b9c40a5cda86eee6e8061386b6c"],["/post/3340c4c2.html","60dc83c0d84a2ea72aa9b3272eaf2663"],["/post/4e92fa67.html","04533b2ad06cac253b80e92367c056ae"],["/post/5050ddb0.html","459753ce83dd5237888cade64598e042"],["/post/62120.html","8c7054965af335a66b336c475aadd17f"],["/post/63711.html","430618072ba9a4586d2d769f648cc59d"],["/post/6541.html","a2a76d313f26f8bab396968219c777d9"],["/post/69c3279c.html","a9c9d71dbb5cc4321ec721ebfe035ea4"],["/post/6f1c51ce.html","c7faf2c34a28532041060a8935e5770a"],["/post/7ed01655.html","a82e75daba78550adbdfb9e807cfc1aa"],["/post/85682d75.html","fdd11e90320724b91a8a887af6118dfe"],["/post/8f49441b.html","1e5bde468a6d4da599683473ce8f86e0"],["/post/94bb4a64.html","fcbbdc7b474008aa3f570491123e182b"],["/post/978cfc19.html","3e98d296e9c355d07802642e51b970c7"],["/post/b9694398.html","cdaa66bcc0d1a42ed83a830feb94074d"],["/post/d3f2095d.html","e9eff7ab2942663a88eabf384c98e101"],["/post/d73c0d37.html","b8c3af233ef6ec058f77b3c3203aba38"],["/post/e6b0e0d3.html","959f09ad33fc25b024545c0394814c75"],["/post/e93d36ed.html","2eb2cc22b6887072fed615c78f405481"],["/post/f025fac7.html","0e6a2772c8e1c05b0477c746047d68fc"],["/post/f184a21a.html","7e00ebcbc8802fbe11aa04ffbc518892"],["/post/ff8068c0.html","a1d8f6ffb731113e72b947f531eb4b9c"],["/sw-register.js","c9eab06a8a72d1db0909c50a7fe1f81e"],["/tags/CSS/index.html","dd0bc6a873bc9c8c976df98cd33d1e1c"],["/tags/ES6/index.html","f6fadb4e09e11dcac60bf4708c5618f3"],["/tags/Git/index.html","ab7d876184caa35e6f7a1728327b03ed"],["/tags/Hexo教程/index.html","2de786583fadf0ba32f64e1f4a343895"],["/tags/JavaScript/index.html","08c86e54893023477c522b170865e665"],["/tags/Redis/index.html","027c54be279cb02ae15744e0fe81b672"],["/tags/index.html","ddead94a665d8f78c2f91c354d2afe8d"],["/tags/java/index.html","669199f82c6ac5bb108803bb898a29e7"],["/tags/工具使用/index.html","addf708bfd10f7472ba7542d5c2e29ba"],["/tags/目标/index.html","ffb0f44ddf56d30f66d27cdf8ef8c12f"],["/tags/算法/index.html","67763574f319b9b9af6212d6ec02f6b5"],["/tags/英语语法/index.html","c3148865109d2245b5e428ecf0f98123"],["/tags/软件安装/index.html","4efca18b3939db25fb2bc28b031a03b7"],["/tags/问题/index.html","55cbcf3dd3b16043f867fc1fcaa874cf"]];
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

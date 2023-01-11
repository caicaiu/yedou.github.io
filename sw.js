/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","ef0d93664a917aeaadf303c00d0fa881"],["/archives/2022/12/index.html","334b17a159ebab7a3a5670a45383ad8d"],["/archives/2022/12/page/2/index.html","7ddd7998431272d8cc6c767e11cf84e7"],["/archives/2022/index.html","beb87699660a5449e7d886be93933d96"],["/archives/2022/page/2/index.html","28796f6f55c64bfbe21f5017a9f44d9f"],["/archives/2023/01/index.html","0784ceb31ceae85c1a512c88692f3d2f"],["/archives/2023/01/page/2/index.html","b3dfd9b739adeb98d2eb36c1a6a059bd"],["/archives/2023/index.html","99d2544db40f3b317d4782ce00f685d9"],["/archives/2023/page/2/index.html","485f904969f79222ed4b5b8bf1bca8a4"],["/archives/index.html","cf1ee34468e50cee914b0057e0c301b1"],["/archives/page/2/index.html","87e29c9905b39be92fc09408afc79bbb"],["/archives/page/3/index.html","42f7bad4a43a4d23888c0afe6bbd785e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","3a59270ec5041c02f11783b41923d0e8"],["/categories/index.html","5aa370e0089051bc081cbdcb7efe042e"],["/categories/前端/index.html","2c7afcb67f38b69d98b8c674a29d73bd"],["/categories/后端/index.html","1625b21dc707bca1e30f021c936d1a42"],["/categories/工具使用/index.html","378614d1fa216faa6664ce3d1612f7b7"],["/categories/常见问题/index.html","48b662411f2800ec63c165b78e38da04"],["/categories/测试1/index.html","6d0aee13874850ebc724aa218ccf1bc2"],["/categories/目标/index.html","747de2b5e9ca7dc685fa7451ce1820c0"],["/categories/算法/index.html","fd365c6522c279182bd5636aaee32c10"],["/categories/英语语法/index.html","783a992eabe8f97f301711f04cad40fc"],["/categories/软件安装教程/index.html","e610098b6475ad0c186d44abfa48a48f"],["/css/custom.css","e02d6c555c21bc86326121b40e4e5724"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","5711ab8b4f7f3b829dae90b7fdda387b"],["/css/rightmenu.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1a5e34a3f1d7b939a1aae9142482e26f"],["/js/light.js","27e6be65e558ed03f4a7defb7741f8b4"],["/js/main.js","f06d8375e05558ae782915ef4e60e042"],["/js/rightmenu.js","93630f12530ff5880ff1c7a3f691195f"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","4644330c836679762a5187a679d975bb"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","76cc69d8214ab9cdf604dc4c9ca89b4c"],["/page/2/index.html","03bf31193a14021c669e737358605429"],["/page/3/index.html","1c988d40c125a362866276b444f55669"],["/post/0.html","9e76e0fd946a59233bd4600b633510c5"],["/post/1.html","9c10c64cedfae2238f8e53ac66e9b116"],["/post/119ed1dc.html","cb24d9a6dbf8bdc946a1c2c04d9c25c3"],["/post/13898.html","8d3ed6b83898b7dacc1a9e1d86c28e86"],["/post/16107.html","a35b91c7c6945ceecffaf2f833104c2c"],["/post/18006.html","b1b35df96adac2b3d42712a6dfce3a34"],["/post/1e8aa882.html","607b03bf4f808da2d1bc0963421ec5e1"],["/post/26216.html","b6d2013119da39fbf59cf835cfbfc281"],["/post/3340c4c2.html","f4764714c1ed28806b59b8b5713636a3"],["/post/4e92fa67.html","732a48af28c3aa74ebaae9b5fde878f8"],["/post/5050ddb0.html","f1e649c9dc96ea10b7c63fb6228a346d"],["/post/62120.html","3374823b8d7a9091304de7e12ba9eb5b"],["/post/63711.html","28f4c7b3997c91bb4dcf30e1acdcca5c"],["/post/6541.html","c5d95e829463397d306c42535929a21f"],["/post/69c3279c.html","42f774c5221bb86329652922d4df2ef2"],["/post/6f1c51ce.html","45b3db354f7f8b18384587c8f3c938aa"],["/post/7ed01655.html","0e83599f69d00b80ae5db501488077a6"],["/post/85682d75.html","370b6257d05344cc7ba43bd323812371"],["/post/8f49441b.html","82291276972558d163b60a521d1608f2"],["/post/94bb4a64.html","58bb18d4709638cb933380c9ff21e180"],["/post/978cfc19.html","adec95eedc6e3efb9ba6c2977ac245eb"],["/post/b9694398.html","8237ac4ac2b335015b22c1b7cbec1f2d"],["/post/d3f2095d.html","3ba7bb0612d75f0e29fc559ea1ec1a22"],["/post/d73c0d37.html","c2d8d28a390e0eff0bb69bde08acf8d4"],["/post/e6b0e0d3.html","eb2341e6bb88ac92b909626075504ea4"],["/post/e93d36ed.html","0ef55a861cb80d3f9cebae6e9d39319a"],["/post/f025fac7.html","8531ba938ce5a5645ff53b578c0f9ad6"],["/post/f184a21a.html","a4f2c30b3c016a844fb201d8d50be883"],["/post/ff8068c0.html","e490cc71976589a8ce6fbfb48c2ace27"],["/sw-register.js","710f47a0ba83c10591f128ff87ea8090"],["/tags/CSS/index.html","3f6676aa1e4249c2e956a0dacdfe4171"],["/tags/ES6/index.html","ecb6c737b037336a29f5c10bdfd59c4b"],["/tags/Git/index.html","c1c4d347f2f02301793e55a0d6e11c2b"],["/tags/Hexo教程/index.html","5346f1a8647106dab15803a2dba1df3b"],["/tags/JavaScript/index.html","7dad616053766af33589738d63b7ed91"],["/tags/Redis/index.html","eb35e7a5e13d6282b29c482d06893854"],["/tags/index.html","ea90b3a1b9752945e573a52c6f8e0a57"],["/tags/java/index.html","f6f0f3d63537d49ab30ab19b39c3f523"],["/tags/工具使用/index.html","a58fa8011e3227e9003019510c56859e"],["/tags/目标/index.html","059cd324aa4b5c629046f312eda6e69c"],["/tags/算法/index.html","0c9dc364b8d63b5780e95572f4d745dc"],["/tags/英语语法/index.html","9e0e7533ae665fa43c54907db83e0a15"],["/tags/软件安装/index.html","c99f5d4336c3d00249d729e660be0d50"],["/tags/问题/index.html","9b401b3dee2889b6547c1cc086e8b06b"]];
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

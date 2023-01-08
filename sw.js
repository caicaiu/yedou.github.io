/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","ecc88ab10800d294cf7aa3a5db6a333e"],["/archives/2022/12/index.html","0d587c6388969b7287c6d5b36ea68364"],["/archives/2022/12/page/2/index.html","422db13ad8480fd63f2216207b501c01"],["/archives/2022/index.html","bd7b4a9f9c05af9dccfc62716f7948ee"],["/archives/2022/page/2/index.html","a049e0c3faac63a3548d8d5cf3531466"],["/archives/2023/01/index.html","ef67538d4b5a251d92017e82fd783254"],["/archives/2023/01/page/2/index.html","376d1af7bbe27196c54815636ec402b2"],["/archives/2023/index.html","ce4f1a51118d770d6711aef2594342e9"],["/archives/2023/page/2/index.html","220c9d610de9e5282d224b72294ae95b"],["/archives/index.html","26c3277b5cc7e9c91f9005ee4ff516a1"],["/archives/page/2/index.html","0c1ef79e68fa9ca546e56a6a3a3326d7"],["/archives/page/3/index.html","8a11bbb07448d06d7d7f1d672c2a24b3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","f2853ec05cf044738d572c690783ad40"],["/categories/index.html","82123e0b087b92567272744a0dfcc6d8"],["/categories/前端/index.html","45c6bffd5972e15eb95239dd5c3f1684"],["/categories/后端/index.html","6b3cc81382229d2b544f420a81a66d7e"],["/categories/工具使用/index.html","9141787f859c75623ce1d4819d569ce0"],["/categories/常见问题/index.html","7a452e7d43257b0bcaa2dda9aae2f06f"],["/categories/测试1/index.html","9f78c023d93a41e781498d318f26d8ac"],["/categories/算法/index.html","5bdf60a6f022373800cb39ea3f21ab09"],["/categories/英语语法/index.html","2c6082af0d3e3cacfd76c39542a66f6c"],["/categories/软件安装教程/index.html","6951bddeba61fb73baa85c7d37e7325d"],["/css/custom.css","e02d6c555c21bc86326121b40e4e5724"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","5711ab8b4f7f3b829dae90b7fdda387b"],["/css/rightmenu.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","633ce21ddb2817274af67694b1e9db85"],["/js/light.js","27e6be65e558ed03f4a7defb7741f8b4"],["/js/main.js","f06d8375e05558ae782915ef4e60e042"],["/js/rightmenu.js","93630f12530ff5880ff1c7a3f691195f"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","4644330c836679762a5187a679d975bb"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","a3237728b516e0c2890b3577f87a3f6a"],["/page/2/index.html","f360c91536b3f911868cdb8da8fb5517"],["/page/3/index.html","9d8063c8473c73d8a7e1dfb30d0d3503"],["/post/1.html","7a0a072253bebb97a57ebd13d28669cd"],["/post/119ed1dc.html","dc381045e888fd12c1125b481c9d4a6f"],["/post/13898.html","2605672ba6bac009abaf365ba01d1814"],["/post/16107.html","ed4bdcdd7267c76b12c39d9883987aee"],["/post/18006.html","36144fbfbbd2c404d1e323956d4cb934"],["/post/1e8aa882.html","7c060202149104c8b696ea0ed3c5f873"],["/post/26216.html","8ef277025aa486b6d043f668350d8e2f"],["/post/3340c4c2.html","6ed75119bd4e6d9ac00bc873af9f03a8"],["/post/4e92fa67.html","05a1a7a199a1b9407da88fd0ca0442c0"],["/post/5050ddb0.html","b4c84d33da78a7784bf5d6a571d5b907"],["/post/62120.html","216af305225082ac6c38842b994c3040"],["/post/63711.html","574297254c1fadf9acae958dbdd93016"],["/post/6541.html","ac4e203fd32f9d229a12ff7bf6d0392b"],["/post/69c3279c.html","8fa7e681e4de76d3b2a85fda42ef0ccd"],["/post/6f1c51ce.html","2705511c150a83bf68e6e19e231c9889"],["/post/7ed01655.html","3a53a0fa54c5906da0d336182f1d1474"],["/post/85682d75.html","b014c546225babea6b0888c172c607aa"],["/post/94bb4a64.html","0f9d1613b5c2c7bf5e94fd03a25011af"],["/post/978cfc19.html","9a691d9981d8dfb7aecb9bbf5185b820"],["/post/d3f2095d.html","8ebd47129916d9c67bfd65bdf15a4603"],["/post/d73c0d37.html","6db187ad4012959b924f89389535db1d"],["/post/e6b0e0d3.html","72b095ce181f88d40b4431a021eca990"],["/post/e93d36ed.html","ca8b3a04b07a9d04b2d61caf778695c5"],["/post/f025fac7.html","7ddf8625345deb4f7ff40cc061239a20"],["/post/f184a21a.html","7540d9e660fd936c441183e451219867"],["/post/ff8068c0.html","a7c46d07878523bee7a7ef9ffce58b23"],["/sw-register.js","702477419fed654da0daee47067f339d"],["/tags/CSS/index.html","16641911bafe820abfc4682aba6e75c2"],["/tags/ES6/index.html","8e2ee6c40b6a870ddfd578089045045d"],["/tags/Git/index.html","c6282ff6402743d5a5d166d0d2efffb8"],["/tags/Hexo教程/index.html","5e012a98370c3ba21ac1d791389621d8"],["/tags/JavaScript/index.html","05e29cab7e2395f3501dff3842aa8dd6"],["/tags/Redis/index.html","9b1b3fdee4a63c0255fc481637e4b0fe"],["/tags/index.html","04b5ff137fa508409dbab50492316159"],["/tags/java/index.html","79c816d5bb6a3b0405944875063590c8"],["/tags/工具使用/index.html","cd5b2b427d8c9d8269c4031a37f92070"],["/tags/算法/index.html","57d3d31a5cc1ae8f41fd40aafe0892ea"],["/tags/英语语法/index.html","d5e10f572f4d78366598751d1a917b09"],["/tags/软件安装/index.html","6ee1244308d00cc22d54278f6b800512"],["/tags/问题/index.html","037156594dfe3bf1ddf1a782409e6be8"]];
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

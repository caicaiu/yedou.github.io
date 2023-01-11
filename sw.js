/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c30c995fad1332a05df76b3fc7a33466"],["/archives/2022/12/index.html","5cc6cad42f93a33ee2a4a4f8ddfc6c66"],["/archives/2022/12/page/2/index.html","c18158a5603bb6fb0412c9256d4ea945"],["/archives/2022/index.html","a68ff145c6f8c522530d6731610929ce"],["/archives/2022/page/2/index.html","82f69e39c442cce98fccbb628319bbbc"],["/archives/2023/01/index.html","7ce4ff4b3a2fdec4fb9ef43bdad035af"],["/archives/2023/01/page/2/index.html","2a54ce8c201fd21028e329629cfe45d8"],["/archives/2023/index.html","3a1555dbfe99bdff75cfb3bbc1b45f7d"],["/archives/2023/page/2/index.html","79fe09865da0b647eb6142e330e60df2"],["/archives/index.html","6a09fbdb8eff4936c9491659d1a39733"],["/archives/page/2/index.html","e18466dea0ac3c9728ef4530763f292f"],["/archives/page/3/index.html","551f29128eb5412c2f88922940c46952"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","a7cf12400e80b01e71bcd6f25ad9d10a"],["/categories/index.html","35131521be596966998a38749bb57763"],["/categories/前端/index.html","6315ad7cb86083aad6548caa34d91c24"],["/categories/后端/index.html","b88b4dfe9a87640e424d4f358c56bdee"],["/categories/工具使用/index.html","95ff32fb7341d3523507f3ee531a951a"],["/categories/常见问题/index.html","ea5e25a42c68f4eb736cb5b04b958456"],["/categories/测试1/index.html","24bff09f84a337dd294c5e4818f8a0d7"],["/categories/目标/index.html","5aea4b4ee2d4524d30cfd829d51ef2af"],["/categories/算法/index.html","e7a8891059d628dafd025a707df1779c"],["/categories/英语语法/index.html","6d332638d625ca26914c746078f7d764"],["/categories/软件安装教程/index.html","a6f9b647185655cfd7470924697f97a8"],["/css/custom.css","5e094c5b642d569864321bc14c0182fa"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","5711ab8b4f7f3b829dae90b7fdda387b"],["/css/rightmenu.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","321e1d2531c14ecf7cf01b05c6f093ec"],["/js/light.js","27e6be65e558ed03f4a7defb7741f8b4"],["/js/main.js","f06d8375e05558ae782915ef4e60e042"],["/js/rightmenu.js","93630f12530ff5880ff1c7a3f691195f"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","4644330c836679762a5187a679d975bb"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","5b2df1738ebc34197488666f2d4d5c96"],["/page/2/index.html","1e31346582eb54e60de8701e91d59dcc"],["/page/3/index.html","f8a8e24daa3e445219a5344594fe86d3"],["/post/0.html","95388c7d607b23b4b362e84c62ce646b"],["/post/1.html","151f774404e7c5e6101eee4d3462f412"],["/post/119ed1dc.html","a7008ca62960ffc94c828e4f3aa1ee1b"],["/post/13898.html","6b34be057b945a0c7e1085f24bf72ed9"],["/post/16107.html","cf1669506c78663d895dca5a23831f05"],["/post/18006.html","5f03c64813d538dab98e8a41f40e8a59"],["/post/1e8aa882.html","54d4aebd2252c0f8d62ec3de9ba4a46b"],["/post/26216.html","0e33741ae53c457c161316a7386a2068"],["/post/3340c4c2.html","5b989a7b76f8bff8e9e007a892964eaf"],["/post/4e92fa67.html","b0fa3d6802db1eaaedb73bf121e97b2b"],["/post/5050ddb0.html","641e26508dd2d35fa7d0b729d478f652"],["/post/62120.html","565eab0d31c6e8bbff249ed5fcc4bba8"],["/post/63711.html","d86803c82a6334c8ff568e916f6ce6bd"],["/post/6541.html","7b4e9f3cc66727088dc288fd68ac6d6d"],["/post/69c3279c.html","5b9ea7e54fa194c58a8ee9c0adb7caca"],["/post/6f1c51ce.html","7cc43e57f32358c4eba93823728d8ce7"],["/post/7ed01655.html","671f6ff8a10f51fbf6609baed6b6de2f"],["/post/85682d75.html","e001a667fb4f863d807aa5a7c4c72971"],["/post/8f49441b.html","1c5fe0bc57695e71d2df233594d57e7e"],["/post/94bb4a64.html","7d9b23c4f647d3c8b0f7ad7db95d88f2"],["/post/978cfc19.html","d3350b03816f3ff2c1516a4a43bdc0f2"],["/post/b9694398.html","98576591dae394f87234cf4b96a4fdc6"],["/post/d3f2095d.html","16c6006d66b6b6bbf6745d6db8656ea9"],["/post/d73c0d37.html","f46e34de66e31b1dfd348215dd92e518"],["/post/e6b0e0d3.html","2e279bc22b32cfb6259ed141b7039ad0"],["/post/e93d36ed.html","5ac108907d785fea3531890912d9c530"],["/post/f025fac7.html","95bee1e14b0700c6c280d47767c5ecb3"],["/post/f184a21a.html","1eaf665d1b520b9903942c45e696cffa"],["/post/ff8068c0.html","2b4f0321fd2782bfbc4d0fb7c7fda14f"],["/sw-register.js","8f9f170b49aaffa1a6a918b326503a01"],["/tags/CSS/index.html","e819c0870f46c24782b84085e5ceecc2"],["/tags/ES6/index.html","1c40fcc579494c68a9b28d05e6d47ccf"],["/tags/Git/index.html","f48c983e9410bbb1c688c1298e2fa228"],["/tags/Hexo教程/index.html","63e2f5e5775439947dc589b58608bc2b"],["/tags/JavaScript/index.html","b0a4e4b33ca65435f01a83175404e2aa"],["/tags/Redis/index.html","7778cfb9ace276c6993c5719855df076"],["/tags/index.html","f47cc714b2c6c3b557015ea443cdcc8a"],["/tags/java/index.html","28da57bb74022d72eaf0314c7fb023f5"],["/tags/工具使用/index.html","9256ef21f9c2e47ea9690dae92e8ddbf"],["/tags/目标/index.html","978d6a37153cc2c2cf11c1416c371893"],["/tags/算法/index.html","0fc1b66e60cc0e4bfba8bf9aa6205505"],["/tags/英语语法/index.html","0bc529440058752b101e29fd2b98986d"],["/tags/软件安装/index.html","47172f88312f48e5520f5a995fca91e3"],["/tags/问题/index.html","21fd2f8a1d89c79964ebe377cf7368a6"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d1b4f09eb7e3fd771ea3a12c6c82c290"],["/archives/2022/12/index.html","37b1ebddc2a2306af3fefe478cd6fcaf"],["/archives/2022/12/page/2/index.html","e601db64ad4ca0aa3086142f5bd245fa"],["/archives/2022/index.html","68d3d733209e3b18628e104bced016a8"],["/archives/2022/page/2/index.html","8d84e93c4129cde8f6f27796151ebe9c"],["/archives/2023/01/index.html","d76c8dc217032f19e0f9118fd77f3da6"],["/archives/2023/01/page/2/index.html","23d5eb64e590d3c334c1ce5eca464ac2"],["/archives/2023/index.html","604de3c323cd49f49c8f03d8929f7389"],["/archives/2023/page/2/index.html","b0da444b105e69f2560c286cd5e32a77"],["/archives/index.html","1585b91144872685155481e0e26dcdea"],["/archives/page/2/index.html","d07aee93a79de094739f26cd4f313978"],["/archives/page/3/index.html","a076a51e1055bbb9c1bc0693e919fce5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","7d44814d859a4306c8d62e8e86353392"],["/categories/index.html","ca9283e6fb86fb098ada7977dee711ab"],["/categories/前端/index.html","ce4e0d150e3a3ba7df61d3a4558f4aee"],["/categories/后端/index.html","f5aff39a19cd0e2fedaa3da9855ee62c"],["/categories/工具使用/index.html","8a820b47a08cd6679131385b8b83b84b"],["/categories/常见问题/index.html","7cf63470960cdd9da0c56ea5311a0e8d"],["/categories/测试1/index.html","06162e76dee7bbc9448250ee52bb9786"],["/categories/算法/index.html","32c096cef84b2b6fdb4950cdbba0ed88"],["/categories/英语语法/index.html","028f400479189945f877efb430f707d0"],["/categories/软件安装教程/index.html","d2e3a6a71e4ec3ee8d19213f8e017ebe"],["/css/custom.css","e02d6c555c21bc86326121b40e4e5724"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","5711ab8b4f7f3b829dae90b7fdda387b"],["/css/rightmenu.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","7f86a5cfe59926fb847817c0b4e3e690"],["/js/light.js","27e6be65e558ed03f4a7defb7741f8b4"],["/js/main.js","f06d8375e05558ae782915ef4e60e042"],["/js/rightmenu.js","93630f12530ff5880ff1c7a3f691195f"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","4644330c836679762a5187a679d975bb"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","ecdae691e51657740de5acc8f221a97c"],["/page/2/index.html","15d139d5645e8571aac69087c2d87fe9"],["/page/3/index.html","8877d4ead42c78c9c59fbe3fe9dfe1c2"],["/post/1.html","4fb6312f81bd8789967e763afc0ff99b"],["/post/119ed1dc.html","501dd2071b4161a911320e57bc11489d"],["/post/13898.html","de296610b17ff624da06bcf3ac20d09b"],["/post/16107.html","eaf49125814d4b40cb6305e7301698cb"],["/post/18006.html","6f9afa41a207f96dee448cd2be4f43e6"],["/post/1e8aa882.html","454377cc435dad883503bef0639673df"],["/post/26216.html","f9780644fdf6a6c4feadd7a4aead2017"],["/post/3340c4c2.html","b088aa3ffc023cdab08a5d598977f648"],["/post/4e92fa67.html","ee2ba50253e26dfc13166923a7372ca4"],["/post/5050ddb0.html","c800a77c8906b5b710f600d773b778dc"],["/post/62120.html","0b603747cb10f070ac1e1b7e37836f89"],["/post/63711.html","468f261dcb62521e6b04cef1b2a8c908"],["/post/6541.html","1a0413b9ef05374cf03e064419b263a6"],["/post/69c3279c.html","dd110c8761d70ead23cac82588cb79cd"],["/post/6f1c51ce.html","4916ce60e8034bb94db7d7f976537c1e"],["/post/7ed01655.html","8499162949fb7ef7d82fe063ad262ade"],["/post/85682d75.html","7e31437a34ab36e78d792f71b18c1a34"],["/post/94bb4a64.html","e3eab62a9ed3e88fa8b5630909fef179"],["/post/978cfc19.html","be8d5c63f3ed73aca09ba542cb35a442"],["/post/d3f2095d.html","580209aa971ca2d78dc859677fc60766"],["/post/d73c0d37.html","f42307823d21387eb2302a3c6ed56cb3"],["/post/e6b0e0d3.html","6ce79af3c18a1561d822fff253c01b98"],["/post/e93d36ed.html","becdece65434afb046404d59ac3695f9"],["/post/f025fac7.html","937840ee24a6938a50f63f3af44dcf31"],["/post/f184a21a.html","beb9c390065b6276d9ce545e8a407835"],["/post/ff8068c0.html","2f4477f6ede948b04d4e0e6bffd46c56"],["/sw-register.js","fdcb4e44c5177a7cf42d4782ef102b78"],["/tags/CSS/index.html","95df7926d255fb4a7a561368fd3cefdf"],["/tags/ES6/index.html","f7163b6b0722b65132ef3d7282367651"],["/tags/Git/index.html","90e72f0451a4dc824f44a8995c6a77ce"],["/tags/Hexo教程/index.html","51cf3a690eee09793d4bbee4f14a9159"],["/tags/JavaScript/index.html","bc63c378631e9a792503e71103938f01"],["/tags/Redis/index.html","ecfacc9ef8bda94d9855c910edc16c99"],["/tags/index.html","0f497ae04eddb3a716e89afcaf4b4241"],["/tags/java/index.html","607e1e25d5b78b2bd551dc02dd1ac483"],["/tags/工具使用/index.html","b01607cfc0ba64bd787f69e685cb880d"],["/tags/算法/index.html","eb95b77c6e0cfeb551d2ea6084cef344"],["/tags/英语语法/index.html","9d9784d764bbd87e2043d9a0ce1773d1"],["/tags/软件安装/index.html","22bec540ccc0902d14d77b2e369d214b"],["/tags/问题/index.html","7497c1c4acf608c011800c8127d819d5"]];
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

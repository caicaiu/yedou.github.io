/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","27706dc8cfa61383d155873084993531"],["/archives/2022/12/index.html","7430cc80f8f5c651c3585965ef4087a2"],["/archives/2022/12/page/2/index.html","c95952e33359bc4aab4ba6699036b674"],["/archives/2022/index.html","2177cba66298885ed41d2f0d6c24aa5c"],["/archives/2022/page/2/index.html","1d0e8186f69b2e93d473ff59ecf16213"],["/archives/2023/01/index.html","31f521a7c4e7db4d915afbaeeb8285ec"],["/archives/2023/01/page/2/index.html","950e1ca848764e2ce47489183e3f7ddc"],["/archives/2023/index.html","0a38002b470113852167e8696379542f"],["/archives/2023/page/2/index.html","6cd4439293e58f1241efc0dfbd391860"],["/archives/index.html","bc0727ebf2625c5529465b5d8aff2170"],["/archives/page/2/index.html","71ca9ffff2958e04aad291cdf7866194"],["/archives/page/3/index.html","02bd8a17eace59fd9c098622cd70b463"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","a30315a6c25a3231a882a191d58d14cc"],["/categories/index.html","b9aab6345fafaab71c5c7b0ecad548f1"],["/categories/前端/index.html","7e18d36008a78feca9acdf50a9b8a62d"],["/categories/后端/index.html","3b299218512ab0ab2277f831e2ff0069"],["/categories/工具使用/index.html","6581550eefd4518febf05ad47d297b54"],["/categories/常见问题/index.html","403ff3986bbb4bb51de0c08cf7d1f901"],["/categories/测试1/index.html","7279ff6f7f1d0eb57f6880b8ebec2c40"],["/categories/算法/index.html","63cab4f35fb653ea24341f17ac2bf85c"],["/categories/英语语法/index.html","cc4b7c9dc300ba7b5c54a9c72c3a2263"],["/categories/软件安装教程/index.html","c1c71eaa9c9453459335f889f9c6a7c9"],["/css/custom.css","e02d6c555c21bc86326121b40e4e5724"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","5711ab8b4f7f3b829dae90b7fdda387b"],["/css/rightmenu.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","8459542b4a51fba158b058e5d0e27f92"],["/js/light.js","27e6be65e558ed03f4a7defb7741f8b4"],["/js/main.js","f06d8375e05558ae782915ef4e60e042"],["/js/rightmenu.js","93630f12530ff5880ff1c7a3f691195f"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","4644330c836679762a5187a679d975bb"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","7694a572b3e46c6659e79e16e8648d03"],["/page/2/index.html","cb26cf331910f142e4d2ba43899fa999"],["/page/3/index.html","5ca4d87c651d88f5fa59447c3bc4496d"],["/post/1.html","e23fa8eb2cccc7715a2e803ccdb820d4"],["/post/119ed1dc.html","74f127dd6100231845188d203ca5fa04"],["/post/13898.html","c573a5246ad38b55355572e4e173366d"],["/post/16107.html","5cdc681e95df8b6f3465750194279ce8"],["/post/18006.html","4098a2891d642a6a5495a9b3e1bb904d"],["/post/1e8aa882.html","49a2987bacc4c923afcda640acb78c61"],["/post/26216.html","c693b8f4a0d4f241935a5b4b926e3302"],["/post/3340c4c2.html","8e5f811a647622e79c827afa7342255a"],["/post/4e92fa67.html","872d6d7a2044c732d44bb5bbec97cdbb"],["/post/5050ddb0.html","1b6e3e596807923e5b9b7491b76d6698"],["/post/62120.html","dfd84e487a15774afa775c13bce96fc5"],["/post/63711.html","ed5c62df253324d3bcd0927a6c6b8b7e"],["/post/6541.html","7edf127ed6ccc24fb7904085c19cd797"],["/post/69c3279c.html","d4e647dfbde036fa7fa964e805723c8f"],["/post/6f1c51ce.html","b9f1dcc651ddf31bb52d53c657b4671e"],["/post/7ed01655.html","957c912e0f30ad39bc36bbb8f0c71b2e"],["/post/85682d75.html","d5654c58304cc0fbf491981a4458dbe9"],["/post/94bb4a64.html","f0eb5f2709a06824d29feb2a83b766f9"],["/post/978cfc19.html","051a6419f0a16b661add9ec19b9dcd2a"],["/post/b9694398.html","c2125326cb226cb47caa046b5e7ad033"],["/post/d3f2095d.html","3cf0403735fdf3ab50a976676f855224"],["/post/d73c0d37.html","5766b75bb43d6f3a0ffadac13300c077"],["/post/e6b0e0d3.html","fc2f4acb6305fa15247e1c68d7b7add7"],["/post/e93d36ed.html","8a39e0a3c5d67430241e6583fe392344"],["/post/f025fac7.html","00f493345d36d6fdc1c16b1e6f7c0b2e"],["/post/f184a21a.html","28fd211b0a934b4c605bd6df0209151d"],["/post/ff8068c0.html","b6a5a6555fe8aaf18307c9ce64ea5a36"],["/sw-register.js","9c5bbd3d791393894e9f6384a35c15a3"],["/tags/CSS/index.html","7b6d753eb1ccfe0655b8570c0280cc10"],["/tags/ES6/index.html","f7c250173cf2c7e91b35d3bae2803bab"],["/tags/Git/index.html","9a2dee483be76145bb2f8b55e97a0582"],["/tags/Hexo教程/index.html","24ff03df5739b3f91d0f06d768f946b9"],["/tags/JavaScript/index.html","b0f67ce65e57d053cbf7555fed4d104e"],["/tags/Redis/index.html","48dd1a3c9ad232e07f262bf5c48e1df3"],["/tags/index.html","a768a8179e8c52bb3fb105e27d5740d6"],["/tags/java/index.html","1c50f94ff1bb2a862eff2ce442c7ead7"],["/tags/工具使用/index.html","e205d6b14b0e60a08dea66c9d84c91eb"],["/tags/算法/index.html","d61f0c41fd657c197c37aa9c8c4e02f2"],["/tags/英语语法/index.html","ca96bb087b1f402275995871686804be"],["/tags/软件安装/index.html","240300c864ece8c0f38fd4ff4587edd2"],["/tags/问题/index.html","4a10c60471657de2ff81621f3340ae51"]];
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

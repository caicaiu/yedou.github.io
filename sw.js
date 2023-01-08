/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","5ead02539507c9c568d482c61c699cb5"],["/archives/2022/12/index.html","b480cb3b4c566943088dd46758f73875"],["/archives/2022/12/page/2/index.html","b45b3e593593207bf9e1bc2dff248a7f"],["/archives/2022/index.html","cafaae3b9d2e6e43e4558f60200a409c"],["/archives/2022/page/2/index.html","84d289f41d67db1ce39cc1cc0419ad69"],["/archives/2023/01/index.html","4580ab527e87bdaff4deff6745ed2dd1"],["/archives/2023/01/page/2/index.html","7267332a3abe69da2e33a69cdc6d7917"],["/archives/2023/index.html","688ec08b5a75436ebfc5d71452ba3dcf"],["/archives/2023/page/2/index.html","cae8756d1ec8694d42d42c19a9a4f533"],["/archives/index.html","c29d6305aca86b70f9be9461ee94d854"],["/archives/page/2/index.html","1f63c0b914c68fc85ab77efb61bb4350"],["/archives/page/3/index.html","48cfa7952051e383251c0435c90f2801"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","6e180297fd015ea0bd8f4446a444b10b"],["/categories/index.html","bb0f896da4d8c14b4643488cd9bc086d"],["/categories/前端/index.html","adc6367739f089b1270dd2eb9459b1ee"],["/categories/后端/index.html","35a2319724a30d60136314df13d2be0d"],["/categories/工具使用/index.html","cc6dfb4d392baba4bc024ac1ab509d17"],["/categories/常见问题/index.html","0bffb2ef873356528dcc8134275d322a"],["/categories/测试1/index.html","da010c7ae114c24e4e756f743f520482"],["/categories/算法/index.html","6c16a3dcdeb06b61864e6d2542aa7dfb"],["/categories/英语语法/index.html","153c759b0a9919340b08cb4b5dec5d98"],["/categories/软件安装教程/index.html","73c9f95748e9ba4522b9bb2550111343"],["/css/custom.css","e02d6c555c21bc86326121b40e4e5724"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","5711ab8b4f7f3b829dae90b7fdda387b"],["/css/rightmenu.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5464e3756ede3a1fd870eae23be5c6ed"],["/js/light.js","27e6be65e558ed03f4a7defb7741f8b4"],["/js/main.js","f06d8375e05558ae782915ef4e60e042"],["/js/rightmenu.js","93630f12530ff5880ff1c7a3f691195f"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","4644330c836679762a5187a679d975bb"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","980c29ac99cc5b8957207c9a1de9db75"],["/page/2/index.html","1b5c6ad32e532c849e2bf354d6893072"],["/page/3/index.html","3d3e63bb25bd7a29b1bab96c39a50b7c"],["/post/1.html","c0963516bb116f9ab55336b88e5c72d4"],["/post/119ed1dc.html","2af1be104c528e38d5160cd1dac38ede"],["/post/13898.html","0671591c55266ea911e7cb9eba24de4d"],["/post/16107.html","13a65b10d837e3e360a9cf26dffe7f26"],["/post/18006.html","912c46bbc3a573a03558d97a13109e1a"],["/post/1e8aa882.html","952bf17a424f5973bac0184718e374f2"],["/post/26216.html","c3bc405f1c54c52b28d56871fd7c14ef"],["/post/3340c4c2.html","4c05be0b4bd8767e264db5b187259d6f"],["/post/4e92fa67.html","4fcd32351e46879476bac17522a1ecab"],["/post/5050ddb0.html","01fe7eaf91266b754831b7961e1b925f"],["/post/62120.html","bfa850d5b58abe6adf0eda394c7fc105"],["/post/63711.html","895870431424f8ddfa33e1b4e4d95f5b"],["/post/6541.html","58902f0c7d912389951ad6f1b83e4ca1"],["/post/69c3279c.html","57250358ace88ebf4f3821ad3a322554"],["/post/6f1c51ce.html","4ce4217e88b178b9fa7669c176eb1c43"],["/post/7ed01655.html","ab08eb333c3400aab4d4e5480d3e2e6f"],["/post/85682d75.html","af30f32e8b3d31912cb1507d92a9f92e"],["/post/94bb4a64.html","4363b1c5719323c2b0a1b1bbe865db72"],["/post/978cfc19.html","96e55230cae3583a6f45c5f00585c6d7"],["/post/b9694398.html","c72e50123c2e845408f0e7e17771bd91"],["/post/d3f2095d.html","838f9264d052a898874b0cfb0313c4c3"],["/post/d73c0d37.html","19bc44ecaf0ff9fcbc61d4871905f036"],["/post/e6b0e0d3.html","bc75a560900b5d8768ee15ad1ba87c75"],["/post/e93d36ed.html","f7e8d1cb47496e0938f5ad211afaa016"],["/post/f025fac7.html","ff0b9eb2bd26dc399b901813344ce5ae"],["/post/f184a21a.html","ea4b164d05acae885432b4e9b3d5d689"],["/post/ff8068c0.html","cbf18bad5f0f8f078bab891bf3584fc3"],["/sw-register.js","423d858e0b263b50dfb20c5973deb764"],["/tags/CSS/index.html","f3a73b8c2b3a1768e48b441e339f9b54"],["/tags/ES6/index.html","aee86f941511f4c1b16865586031f7e4"],["/tags/Git/index.html","9e801c1b5decfe340e02302807270687"],["/tags/Hexo教程/index.html","8812c4f04b40594b77067641cb617583"],["/tags/JavaScript/index.html","41a90780cbaa76c02c7b5ac84b09e684"],["/tags/Redis/index.html","e96175740040651ada4e1e08717ad3d9"],["/tags/index.html","bdf32232f6986f9cbdd59104ab25e5db"],["/tags/java/index.html","cb711265bd7197ddfdf4b15184a74db9"],["/tags/工具使用/index.html","fd718bec28869f0940cbb5ad00efb30b"],["/tags/算法/index.html","58fa4cca791635adf351d9b941ed2d8d"],["/tags/英语语法/index.html","aa0b7378b3e6f6e24c95b230e137dc54"],["/tags/软件安装/index.html","802141af0d3b3dc569f3325e372f32de"],["/tags/问题/index.html","a827916413b39ae41c8d72d80597ff0f"]];
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

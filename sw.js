/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","651e82fee5cb606da2f6ff9208e17f46"],["/archives/2022/12/index.html","7494c2a68d1e534ce54a73683c34d634"],["/archives/2022/12/page/2/index.html","b7e221f460618f96ecfa0683890b744b"],["/archives/2022/index.html","fef417690d23f96b62a365e10022ed58"],["/archives/2022/page/2/index.html","7a76a453c7ff01f954fba1a55c90c7a3"],["/archives/2023/01/index.html","b0a545e05b17914b9de4bb94c0dcb321"],["/archives/2023/01/page/2/index.html","946e1f8dc2b2588db6cfbc4cc7a2dc24"],["/archives/2023/index.html","121b807666ba2d4dae6100f70b8e350d"],["/archives/2023/page/2/index.html","abd1ee5b781f4e669941e40d28d706fd"],["/archives/index.html","726b6b9b272537b000b0ed27a684ea35"],["/archives/page/2/index.html","519844ffb1289ae230355ea6371f030a"],["/archives/page/3/index.html","bee2f5271d38c82afa3bbdc392c133da"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","cd4ab0753eebf109232c2aad7672ffc6"],["/categories/index.html","76587a1d90b80299937d2140b2ca7860"],["/categories/前端/index.html","8a67446ba74a29c9c67fc4484bfcefa7"],["/categories/后端/index.html","8177d3f2f4157f3f89398ca42a709383"],["/categories/工具使用/index.html","67bb32f59afeb2d0dc49d98d37117f27"],["/categories/常见问题/index.html","308bb3bd30e078fcc61c9859501ca972"],["/categories/测试1/index.html","26ba391afbd306f85a29d3242488ebad"],["/categories/目标/index.html","6cd0dc7cef59da3542a8028a0cb4dc7f"],["/categories/算法/index.html","41605ab065be7021f2a0c18e3d04bfdd"],["/categories/英语语法/index.html","eee6aebd009008e63491e8580b08cc64"],["/categories/软件安装教程/index.html","df71f0f8fcb20ecbecce2eda95df7b0b"],["/css/custom.css","e02d6c555c21bc86326121b40e4e5724"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","5711ab8b4f7f3b829dae90b7fdda387b"],["/css/rightmenu.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","ee6c69e2622b21c71907c9a3bb5bf0dc"],["/js/light.js","27e6be65e558ed03f4a7defb7741f8b4"],["/js/main.js","f06d8375e05558ae782915ef4e60e042"],["/js/rightmenu.js","93630f12530ff5880ff1c7a3f691195f"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","4644330c836679762a5187a679d975bb"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","b44f1a038fdbb962507e6abb18498ad4"],["/page/2/index.html","494ab44638475e4c1e3a31e5366f02dc"],["/page/3/index.html","443fdcc61c7be26e675bbf119afe6e02"],["/post/0.html","a349375a9fed74ef0fbf7af4c0a0c16a"],["/post/1.html","b116612a198e27002cb9bd4f262823ad"],["/post/119ed1dc.html","ca78ee9775a144f3488b7c6f22348495"],["/post/13898.html","c9354de6661dd989f2f1cc6fe2a1f4a4"],["/post/16107.html","31d8fa7664e75405abb8291cb9c0bcbe"],["/post/18006.html","980a3beba63a4aa99f8eaad8acf9a1a7"],["/post/1e8aa882.html","08eb1dc98a69f46b8beecd1f8d5884ae"],["/post/26216.html","05f075b7a0a2dfc05c2ecfdbf8ce2843"],["/post/3340c4c2.html","4d176fb7a868aa48e07a6ee12141e461"],["/post/4e92fa67.html","6360f6aab4ab067f6985b95812c2da37"],["/post/5050ddb0.html","378f2ad469eddadccd6bd59cb0535acd"],["/post/62120.html","93d81476507260c9f5502de03f40f067"],["/post/63711.html","9ed5540558261b8bf00657fb1124c4f6"],["/post/6541.html","f15970f4d03c1ebf38095c277daa8a8f"],["/post/69c3279c.html","9c627b25ba0b59eb05dd17043f96eff9"],["/post/6f1c51ce.html","eb5655feb282db0d3ac85fb6a7ade3f1"],["/post/7ed01655.html","f6d442c25f4ed2301bc9f797956e9053"],["/post/85682d75.html","db9bb332f21ae33c42a76b1b5d297fcc"],["/post/8f49441b.html","79e2a60674d447fb3cc0ff13fe5a107a"],["/post/94bb4a64.html","70c43663cb1a41c9035c2a161ed18d1a"],["/post/978cfc19.html","464b78db302ce9a8242e58c5b04aaf8a"],["/post/b9694398.html","4586faa4e10b6de090fb16ee196855f5"],["/post/d3f2095d.html","b2e90f4e587ba3daee033bf54eb6d30d"],["/post/d73c0d37.html","f7bdb037f401a0d907ec510ae10395a8"],["/post/e6b0e0d3.html","a93eb08508876007e658f5c47226a3e3"],["/post/e93d36ed.html","68e20bc8c9896f926b581f3d8d508d2c"],["/post/f025fac7.html","592ae15daa3406f23ffbe1e63abe5220"],["/post/f184a21a.html","45e97256ceec758e7b7888e7fcade099"],["/post/ff8068c0.html","2c816d847db07f9309f9642e937d95fa"],["/sw-register.js","7594994bc3d3683ba5b1b74c42e6da86"],["/tags/CSS/index.html","9df6c7cfda9b1ee924411e00035766da"],["/tags/ES6/index.html","46835a4f956d46880d003b803db16c70"],["/tags/Git/index.html","8695590f979e926b446b3944f81614a0"],["/tags/Hexo教程/index.html","149d68e0438eeae0e32e7b76dec668af"],["/tags/JavaScript/index.html","e28dcaeacbebf0de7d3b2dcf5a64763d"],["/tags/Redis/index.html","f73f7b75a4f0e163975232201d4bef59"],["/tags/index.html","58575c77bb9d51983cf665ce5e198a7d"],["/tags/java/index.html","fea9fe9b74f8087178ddd1b8e2885600"],["/tags/工具使用/index.html","27cb2cb3ccae1a18807302913a782729"],["/tags/目标/index.html","8fce725f4a07385c3f5af94936d4aef8"],["/tags/算法/index.html","acf66199324c020312cd0b92aa9fe562"],["/tags/英语语法/index.html","15a8d13201348cb17eb301a5a51b0da9"],["/tags/软件安装/index.html","f821369cc1499a40365bd118652ab8d7"],["/tags/问题/index.html","c2f331387b3a717f5e1d2e38e9d3ab76"]];
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

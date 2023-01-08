/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","a29f1e1844205abb642c97ac562d7992"],["/archives/2022/12/index.html","8cdb1dc0449d10944da2911f225041e1"],["/archives/2022/12/page/2/index.html","2f217e8520024e2aed72b315b183d799"],["/archives/2022/index.html","0454ac2bcd5ca8b9ccc3621f8e4da2df"],["/archives/2022/page/2/index.html","d76633e27139e9b355547855efa76d09"],["/archives/2023/01/index.html","c4400bd2c0448bc6de744a367019d4bc"],["/archives/2023/01/page/2/index.html","5b55fd8d41f90299c6c936d395cd9bd8"],["/archives/2023/index.html","9b5cc8811de775556c89805b1a816394"],["/archives/2023/page/2/index.html","ad007a6da97ceb2b50982ac1c742db20"],["/archives/index.html","90e46d10b2c2be69e541b6d5043708f0"],["/archives/page/2/index.html","866acaebb66b056ac2c52b4976da98cd"],["/archives/page/3/index.html","7555cb3607109e941e789672cdd066ff"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","8ee6696481db570060c9595d9699fc12"],["/categories/index.html","8152babd74cec85e76c1e40ebd53869b"],["/categories/前端/index.html","0251ef57a88f786d44f6d137b7a164e7"],["/categories/后端/index.html","91f6a4c4c7b99fe040fa1ab48a6edf16"],["/categories/工具使用/index.html","f7d170d87608363181047a77cb159ac3"],["/categories/常见问题/index.html","9349aacd83c5efa781cf1b486ae46bd7"],["/categories/测试1/index.html","bda93a15b933122bfea3362348c4caae"],["/categories/算法/index.html","5feb76da7c3da30d0c571c5f087e0962"],["/categories/英语语法/index.html","b7e5f56fe8e10efcb0bd41333bcccdc3"],["/categories/软件安装教程/index.html","34b94a07f1d2b64465c536e13f0e1415"],["/css/custom.css","e02d6c555c21bc86326121b40e4e5724"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","5711ab8b4f7f3b829dae90b7fdda387b"],["/css/rightmenu.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","d414052db55f1b690c2777c5403e6018"],["/js/light.js","27e6be65e558ed03f4a7defb7741f8b4"],["/js/main.js","f06d8375e05558ae782915ef4e60e042"],["/js/rightmenu.js","93630f12530ff5880ff1c7a3f691195f"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","4644330c836679762a5187a679d975bb"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","1f81f1d50acd8a62068c28309e843ebd"],["/page/2/index.html","6b25b8587302e07a1d44154af77e9d75"],["/page/3/index.html","17765843490382502f18dfcc7ea00bf9"],["/post/1.html","6097589f26ffad2eecac52d49bf84f22"],["/post/119ed1dc.html","1d4a1816e2b4a7cf805f4e65ccc68d67"],["/post/13898.html","e0529c9e57f9308cc758c5bff67ae9d4"],["/post/16107.html","d402a5a11dd1d9bd4331d72479a4ab59"],["/post/18006.html","f2658ab9fd5e54bc6e82d96af54451f9"],["/post/1e8aa882.html","b367235589abec44315eec98b1c90314"],["/post/26216.html","8b7094882a372162947c6e9aca65d30c"],["/post/3340c4c2.html","a2d640647ccd974e8178af3c853f0390"],["/post/4e92fa67.html","bdc95f464c9f5ceb2c5346982abadab4"],["/post/5050ddb0.html","aba907ca65f853a70aef45c1ca4c1df8"],["/post/62120.html","30625e2da8e34f1997f0ca5a673dad0a"],["/post/63711.html","2cfe10eb5a9d09b56d5032b696fce17a"],["/post/6541.html","d9c81bcc43c54c591a7e1f8e6fd7e329"],["/post/69c3279c.html","538a8c98a75dcafa984c57951e247fa2"],["/post/6f1c51ce.html","8c66590a89b3718a3b216925fd7911c7"],["/post/7ed01655.html","d25c87fc6ccd560c0af8347eaf85047b"],["/post/85682d75.html","bd0a47e0327087643d7a812acb44bd28"],["/post/94bb4a64.html","2d9f8d81cc3d48bcaf0a46ec05000efd"],["/post/978cfc19.html","290bd30c5123993852244f7dcf5d030d"],["/post/d3f2095d.html","bd68646ce5c1eff57adf918122a1c63a"],["/post/d73c0d37.html","adc07df120e5b6fdfd7525fafdb500b2"],["/post/e6b0e0d3.html","d1f1962478b339874b8010a747989a1e"],["/post/e93d36ed.html","03883097876e00c6576453d2ae4bfd77"],["/post/f025fac7.html","9c3614ed98848d3f1d662c508557d8cf"],["/post/f184a21a.html","025649726a8605c3d8c2c9f381163da3"],["/post/ff8068c0.html","2f5abf79dd484b25c5ad61c4973c38fc"],["/sw-register.js","2c8a8bf155db511f9439f1f05f46f339"],["/tags/CSS/index.html","554022443baed1f76c789643fd09514e"],["/tags/ES6/index.html","ca15eee349837a1343bc491b095c5793"],["/tags/Git/index.html","0dbc5b16efdc6773cc64966de74eaf8c"],["/tags/Hexo教程/index.html","587e48ed6252d6b449906f15f5868a12"],["/tags/JavaScript/index.html","11fc0cce6b60cc209a3646febe0b8d88"],["/tags/Redis/index.html","9bef4ae9da88f31f99ac7984972eb747"],["/tags/index.html","96aa065abe36acb869cc92f6e9cf4b0f"],["/tags/java/index.html","2870539e37e17e85270e19488ff26582"],["/tags/工具使用/index.html","f25923f384bd0e93809c8b013af34e22"],["/tags/算法/index.html","52e97145fd7340f99c49f69c5b7ffcf7"],["/tags/英语语法/index.html","1a33d083f4ea0b3e26c02d41b6002a90"],["/tags/软件安装/index.html","707e32b7d6931fd121ead1a6e4de2fc6"],["/tags/问题/index.html","36c40be6af423aa4de7a0f8248fb1726"]];
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

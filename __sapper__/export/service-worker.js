!function(){"use strict";const e=1601627383849,s="cache"+e,g=["client/scroll.55e7dd56.js","client/index.30722199.js","client/index.a99f06e4.js","client/index.dcbe24d9.js","client/client.d6f5e399.js","client/client.94f540fc.js","client/index.7c1e02ae.js"].concat(["service-worker-index.html","fonts/pt-root-ui-bold.woff2","fonts/pt-root-ui-regular.woff2","googlee6626247a748d91a.html","images/about-main.jpg","images/cyxym-main.jpg","images/error-main.jpg","images/guide-1.jpg","images/guide-10.jpg","images/guide-11.jpg","images/guide-12.jpg","images/guide-13.jpg","images/guide-14.jpg","images/guide-15.jpg","images/guide-16.jpg","images/guide-2.jpg","images/guide-3.jpg","images/guide-4.jpg","images/guide-5.jpg","images/guide-6.jpg","images/guide-7.jpg","images/guide-8.jpg","images/guide-9.jpg","images/guide-main.jpg","images/history-1.jpg","images/history-2.jpg","images/history-3.jpg","images/history-4.jpg","images/history-5.jpg","images/history-6.jpg","images/history-main.jpg","images/logos/logo-128.png","images/logos/logo-16.png","images/logos/logo-256.png","images/logos/logo-32.png","images/logos/logo-64.png","images/logos/logo-r-128.png","images/logos/logo-r-16.png","images/logos/logo-r-256.png","images/logos/logo-r-32.png","images/logos/logo-r-64.png","images/logos/logo-r.png","images/logos/logo.png","images/og.png","images/people-1.jpg","images/people-2.jpg","images/people-3.jpg","images/people-4.jpg","images/people-5.jpg","images/people-main.jpg","manifest.json","now.json","robots.txt","sitemap.xml","styles/dark.css","styles/error.css","styles/global.css","styles/mobile.css"]),i=new Set(g);self.addEventListener("install",(e=>{e.waitUntil(caches.open(s).then((e=>e.addAll(g))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const g of e)g!==s&&await caches.delete(g);self.clients.claim()})))})),self.addEventListener("fetch",(s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const g=new URL(s.request.url);g.protocol.startsWith("http")&&(g.hostname===self.location.hostname&&g.port!==self.location.port||(g.host===self.location.host&&i.has(g.pathname)?s.respondWith(caches.match(s.request)):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open("offline"+e).then((async e=>{try{const g=await fetch(s.request);return e.put(s.request,g.clone()),g}catch(g){const i=await e.match(s.request);if(i)return i;throw g}})))))}))}();

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return i[e]||(a=new Promise((async a=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},a=(a,i)=>{Promise.all(a.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(a)};self.define=(a,s,n)=>{i[a]||(i[a]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+a.slice(1)};return Promise.all(s.map((a=>{switch(a){case"exports":return i;case"module":return c;default:return e(a)}}))).then((e=>{const a=n(...e);return i.default||(i.default=a),i}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/225-ca8c7fab754ef00f7c87.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/244-5ac3eee0d1ca1fd14c3a.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/252-f79418566e546ff4a1d3.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/312-0792a2d3503b180ef924.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/341-0ad55516ac0ecd24e77f.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/394.f07284916096fc35b541.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/396-ea6f69dbb10bc7603335.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/400-88bc50f2f1f2ef6299df.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/424-a35fe08b3329d86f29d8.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/464.1c33d630b83eea74732a.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/60438fe6-41b2ed35b57da8687664.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/67-306f2abb89777d7a0e99.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/744-26619f1c8fae5533425f.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/745.90092a662978a9c8493f.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/75fc9c18-69faf665eb155ba9f718.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/810-81e24dd4f90bee9011f8.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/836.fb09155b325fd2753b20.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/852-fcb583b32cfd84343478.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/853-e638e914696b630b80fc.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/932-d05c1117868103e2b0c1.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/f6c5df88-b71578d8b2af96e46949.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/framework-044e3daa1b04c66de94e.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/main-9ef1670db3516ec415c7.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/pages/_app-f9ccba96572963d42680.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/pages/_error-ba31c3b0228b472fb83c.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/pages/about-91e8a67eaf1f63db0978.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/pages/account-a5a9a38f53f01ee29d1c.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/pages/admin-1898f359eb557073a272.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/pages/blog-5dbc83c695f1e453501d.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/pages/blog/%5Bpid%5D-35412740607a1922b8e7.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/pages/blog/new-959e03035d36b5b95a84.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/pages/contactUs-78e5e96c935d719ee620.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/pages/dashboard-1097ff6f1b11a50a7ad3.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/pages/faq-e63ebc7d1cba7611ed4d.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/pages/index-f9d5525e2eb451798bfb.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/pages/new-ffcc7df7252203ffbe6b.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/pages/privacy-3896d74db14c503d52d4.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/pages/project-c12c8dd0bdd1604f63e9.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/pages/project/%5Bpid%5D-34a195b0e8a2bea472f4.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/pages/terms-bfdeb15698337aa85313.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/chunks/webpack-0194c2ceb91087da704b.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/css/28017875af7137c7fc33.css",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/css/91aa2ec20b193d214765.css",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/css/d96fc51baf46bcaaaf8f.css",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/css/ede42105273913ecb007.css",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/css/fcc817a866eda815b0bf.css",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/images/empty_file-c70bcaa63ed585dfb08226c08e8a1e00.png",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/images/logo2-c973ad5f16fbafc84481f4c3f90e43eb.png",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/images/logo3-74f95c6719f3ad411657196063cb4045.png",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/images/our-45557350883d80ed9dbb90262cf5e0e7.png",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/images/pic1-d27c17468cc61fe68c7acd56027b8663.png",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/images/pic2-d9633cd60ae99c7391cb736ee38ac7f3.png",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/images/pic6-e09b92ed5635fb91cca78a6ba5384e5d.png",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/images/pic7-7a2504e3f2bf3425468dcfa77821c2b7.png",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/images/sharif-7214d48f028e69196ccaa7610e36462e.jpg",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum).1a6f8943e894fa4f861a0ac56a290dba.eot",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum).337881a1246d3b51b420e1ce1ad35422.woff",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum).732cabbff87f779b74d3ee5741eb933f.ttf",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum).8d649f69659e092cd2f977d6b8d95599.woff2",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_Black.0c82357136706fe0b8496ac2321a5c69.eot",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_Black.45f207ebaeda42d31740c696302c4c40.woff",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_Black.aca84f753ff041f9bbd6559f178b7677.woff2",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_Black.cdee2dc6ef6187c370dc44f0c325f545.ttf",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_Bold.282f38380a6bd094a001e0afd24ece9e.ttf",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_Bold.424eca1112ae72643ee80830a522e8da.woff2",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_Bold.51ba486fa50e8204665fa810cd319500.eot",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_Bold.aa12a017cbd4a5f7358752f4e7e7f344.woff",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_Light.2dffffe3b22e33c7ec29c429aa909806.eot",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_Light.721eb7ab97005da7447ed61b3ecc32d7.woff2",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_Light.955f38e3e1aab0d034a9aed686a428ec.woff",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_Light.cc2c043728adc25f924baa640408fd1e.ttf",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_Medium.10d80bfa89985b74a634d157df3c1f70.woff",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_Medium.7fed925eed1fe5c4a633d0011d860b47.eot",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_Medium.ed4ac452b05d496237b8652311e6b466.woff2",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_Medium.f885eebbc714297156bbac2f5c4794a7.ttf",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_UltraLight.3a4474e9d8093ac7d0e877446d2af502.ttf",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_UltraLight.7f6c155499d3fd780868d8acf39a5d5d.woff2",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_UltraLight.93a22db98bbe6a6fdef5d98af544d121.eot",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb(FaNum)_UltraLight.e9c28ed76d8679566bd67dfb8d50e5f0.woff",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb.432a2b2da04e215189122208ea7794d7.eot",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb.9ffdcda01ffd6d404d6f159bb5691444.woff",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb.ae01de6907048fbaba8b352fe81eb56f.ttf",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb.cdb118d6a351d596a2d78c7fe986de6b.woff2",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_Black.2d5331d8a603c7338c28ae5be2fe2529.woff2",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_Black.b856e951d6045d5d33a03ceacd48275b.ttf",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_Black.e94a490e4b555bd60e4c7a8612c7c7fe.woff",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_Black.fee322c97e60404927e30c2bba1f52c1.eot",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_Bold.94bdf556f91548a6f1a415e10dcb81a8.woff2",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_Bold.dd12fb6add9534790d36b39ffbfbd5db.woff",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_Bold.e65c9d525ca3a18949ebece112f381ce.ttf",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_Bold.f18db7b4f37eed9b994774079e6c38f8.eot",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_Light.b35266cba8a813875e6dd5b16ec165f6.woff",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_Light.b5815f24cdb58ca5af8471026ca5a581.woff2",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_Light.b9db61ce89b7ca7fd3e73cab1bde4c45.eot",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_Light.f1c0e72c287ef95dd77720c2241123f6.ttf",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_Medium.2d28b58d14c6602dc6664d17784111af.woff",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_Medium.9f338149d9f52fe4faab7a0e9120f639.woff2",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_Medium.d1f537d1a9a596eb5339108366ddbe5a.eot",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_Medium.dde1bbb65f9abe693cab043a199a7175.ttf",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_UltraLight.69e4612c3d672b0a982da22750f0cad3.ttf",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_UltraLight.6f6cd6631c5a4ff7eb79c2902af6659e.woff",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_UltraLight.801b490e56a0f7e84052540571d50101.woff2",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/media/IRANSansWeb_UltraLight.aea412769ad8390c96ea18551b9c3c8b.eot",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/ydq0iGVOoCsZGRk5WlSUW/_buildManifest.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/_next/static/ydq0iGVOoCsZGRk5WlSUW/_ssgManifest.js",revision:"ydq0iGVOoCsZGRk5WlSUW"},{url:"/favicon/android-chrome-192x192.png",revision:"268af47d54a4af4d2790a84f157accac"},{url:"/favicon/android-chrome-512x512.png",revision:"df6fde82d3314c62541a3e5c8a20c677"},{url:"/favicon/android-icon-144x144.png",revision:"db82e1b6039ed6007346e07514a84a3f"},{url:"/favicon/android-icon-192x192.png",revision:"29e62418e87834ef1737cb48bf15fa78"},{url:"/favicon/android-icon-36x36.png",revision:"d85ac1fc7b64f38db0e3cd33655075ee"},{url:"/favicon/android-icon-48x48.png",revision:"027f81b8d2f6819c0decf48c9f6639a5"},{url:"/favicon/android-icon-72x72.png",revision:"22935bc01066517fa18e07f24bba8ad8"},{url:"/favicon/android-icon-96x96.png",revision:"9b0df8ae2bee78dc9bc1adad90c4e8ca"},{url:"/favicon/apple-icon-114x114.png",revision:"0c90aca958df1ead788b04c9704f296c"},{url:"/favicon/apple-icon-120x120.png",revision:"ed62393fb28b37b2d8c0e3888f6f5dda"},{url:"/favicon/apple-icon-144x144.png",revision:"770908d4d21c2e28cd24128cb7f840cf"},{url:"/favicon/apple-icon-152x152.png",revision:"ff63f920a627e5b18c03c5acf84464f5"},{url:"/favicon/apple-icon-180x180.png",revision:"74891c94efa05ac718aa1be35178ecc9"},{url:"/favicon/apple-icon-57x57.png",revision:"ba723ad8a696380becd6868890801b01"},{url:"/favicon/apple-icon-60x60.png",revision:"567c32a96aade198fe728c38d7f2183e"},{url:"/favicon/apple-icon-72x72.png",revision:"bcf0c03eb02833227debd85e11515e8f"},{url:"/favicon/apple-icon-76x76.png",revision:"a577ce8c1977bf1c3ea4d04a116c5051"},{url:"/favicon/apple-icon-precomposed.png",revision:"d95c63219f27104349e4192dc3bd15e6"},{url:"/favicon/apple-icon.png",revision:"51d38316648934261cf81a87ee04eab9"},{url:"/favicon/apple-touch-icon.png",revision:"7260642609e4eac85e71902b2e525db0"},{url:"/favicon/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/favicon/favicon-16x16.png",revision:"0f1cfe64a8fe1b5c5b94c0cb57a2694b"},{url:"/favicon/favicon-32x32.png",revision:"01d6cdf886df5849b5b8137d98287899"},{url:"/favicon/favicon-96x96.png",revision:"b0c33bb5c23d52e3d22088495f2b99df"},{url:"/favicon/favicon.ico",revision:"f9795d717d9077dc1a381a0ae3da0971"},{url:"/favicon/ms-icon-144x144.png",revision:"becbdd63c840f9bd7b7c93a1e2a3ce05"},{url:"/favicon/ms-icon-150x150.png",revision:"595cbcb4522b8886184ee4e214a62f42"},{url:"/favicon/ms-icon-310x310.png",revision:"970a82ac158555abcd029ae90fa727d5"},{url:"/favicon/ms-icon-70x70.png",revision:"4956c8139ee5b380ebafd16ce30ba7fc"},{url:"/favicon/mstile-150x150.png",revision:"e3caa0a7ee0d3ee4d6c571739fa5f768"},{url:"/favicon/safari-pinned-tab.svg",revision:"dc0e25f50c38f1e679643e6e0e71c971"},{url:"/favicon/site.webmanifest",revision:"685a574cb7b4b1eb749fd5327422a9fb"},{url:"/fonts/eot/IRANSansWeb(FaNum).eot",revision:"94c311fd48c9362dea340aa3a29e3567"},{url:"/fonts/eot/IRANSansWeb(FaNum)_Black.eot",revision:"b6c45d92f5517961190cd955b4c1e4b7"},{url:"/fonts/eot/IRANSansWeb(FaNum)_Bold.eot",revision:"4abe296380edacb9f146cd778a94f43d"},{url:"/fonts/eot/IRANSansWeb(FaNum)_Light.eot",revision:"ad395cc9a045cb4059bed55605a611e6"},{url:"/fonts/eot/IRANSansWeb(FaNum)_Medium.eot",revision:"30ecec094f809f90a3e4c121115cc8ca"},{url:"/fonts/eot/IRANSansWeb(FaNum)_UltraLight.eot",revision:"bbb57c7053ed930508b718bc70802932"},{url:"/fonts/eot/IRANSansWeb.eot",revision:"d3931868176480f01fd4524cbd48b667"},{url:"/fonts/eot/IRANSansWeb_Black.eot",revision:"c0f5dbbde9104d1dc813b68f50457e2c"},{url:"/fonts/eot/IRANSansWeb_Bold.eot",revision:"f2cb5d5906f5abc3c9f59e561b007ded"},{url:"/fonts/eot/IRANSansWeb_Light.eot",revision:"28bc7e37dc1bba427c24941b19a11e4a"},{url:"/fonts/eot/IRANSansWeb_Medium.eot",revision:"3d468556450b88fba2ef7ac695a166d3"},{url:"/fonts/eot/IRANSansWeb_UltraLight.eot",revision:"3a70f4b4dcc84bcb84c3749ec235338d"},{url:"/fonts/fontiran.css",revision:"5dbbf0e5f4b0973279d80004d3cebb51"},{url:"/fonts/ttf/IRANSansWeb(FaNum).ttf",revision:"e9908f05e5771638e40913309b784a17"},{url:"/fonts/ttf/IRANSansWeb(FaNum)_Black.ttf",revision:"20f2dc0a09e36bed1b999d5236ec4014"},{url:"/fonts/ttf/IRANSansWeb(FaNum)_Bold.ttf",revision:"ff320f78af3a0fd44f2ee2993559fa9f"},{url:"/fonts/ttf/IRANSansWeb(FaNum)_Light.ttf",revision:"bd26f02a2febca2229ccf2c4d37ee3f7"},{url:"/fonts/ttf/IRANSansWeb(FaNum)_Medium.ttf",revision:"8789622647008ae1b00f6a890b49916e"},{url:"/fonts/ttf/IRANSansWeb(FaNum)_UltraLight.ttf",revision:"cb2ad2322140b8c86f1acb43710f9ad1"},{url:"/fonts/ttf/IRANSansWeb.ttf",revision:"c26a9eb202b3ef6455281f0335cfffe9"},{url:"/fonts/ttf/IRANSansWeb_Black.ttf",revision:"1becfaba43eef43af02099d64f0590a6"},{url:"/fonts/ttf/IRANSansWeb_Bold.ttf",revision:"ebec177a9eccde9d5a4fb510ff1d1d8e"},{url:"/fonts/ttf/IRANSansWeb_Light.ttf",revision:"e8ff3f7167961a35e98db2fd15bb37ca"},{url:"/fonts/ttf/IRANSansWeb_Medium.ttf",revision:"1da39fcf35d32c87ce9b3bdcfd2b90b2"},{url:"/fonts/ttf/IRANSansWeb_UltraLight.ttf",revision:"51b9c1ad55d006c89ec0639de7892278"},{url:"/fonts/woff/IRANSansWeb(FaNum).woff",revision:"bd6f69a8db87710b2f3fcd6ef75bd3e2"},{url:"/fonts/woff/IRANSansWeb(FaNum)_Black.woff",revision:"bea60ea788538ed6b635ad0c519fb0b8"},{url:"/fonts/woff/IRANSansWeb(FaNum)_Bold.woff",revision:"753b3827c415580e864a545d1a860a5a"},{url:"/fonts/woff/IRANSansWeb(FaNum)_Light.woff",revision:"25bd95ce239f04e9457b5cf1c7dac593"},{url:"/fonts/woff/IRANSansWeb(FaNum)_Medium.woff",revision:"fe1913144aa13ac4b31777a96230fed1"},{url:"/fonts/woff/IRANSansWeb(FaNum)_UltraLight.woff",revision:"658b85640048a3b6d9893cbb16a44cfb"},{url:"/fonts/woff/IRANSansWeb.woff",revision:"66b5cb30e2efe84dab915617acd39041"},{url:"/fonts/woff/IRANSansWeb_Black.woff",revision:"dfb26a2f06ef268a82147b6ea001bcf9"},{url:"/fonts/woff/IRANSansWeb_Bold.woff",revision:"e4ed975d7eb3ca8da589f27e55ef7f20"},{url:"/fonts/woff/IRANSansWeb_Light.woff",revision:"63f8b4b6f55a927231311a9e83cb4fda"},{url:"/fonts/woff/IRANSansWeb_Medium.woff",revision:"0c40b1a0ee0e7fedeb8a4ac6c58e270b"},{url:"/fonts/woff/IRANSansWeb_UltraLight.woff",revision:"bb7ec39fffa2e3ce96a5f52edd9e13c4"},{url:"/fonts/woff2/IRANSansWeb(FaNum).woff2",revision:"eb5adaac0d814e1e8e5cbd75efb9db3e"},{url:"/fonts/woff2/IRANSansWeb(FaNum)_Black.woff2",revision:"24f304ff5075d348a40cdbcddff6a3d3"},{url:"/fonts/woff2/IRANSansWeb(FaNum)_Bold.woff2",revision:"ceaf6d89af9fb96d0466b26d6f1c022a"},{url:"/fonts/woff2/IRANSansWeb(FaNum)_Light.woff2",revision:"3f707510b31097b91baee0aaa50a57ce"},{url:"/fonts/woff2/IRANSansWeb(FaNum)_Medium.woff2",revision:"62528a12d06f0745f8a43c0fd1318862"},{url:"/fonts/woff2/IRANSansWeb(FaNum)_UltraLight.woff2",revision:"6e57754a4baf5c1bcf358a9270049b3b"},{url:"/fonts/woff2/IRANSansWeb.woff2",revision:"0b5055ac357359f8c23320ea3dc0f78b"},{url:"/fonts/woff2/IRANSansWeb_Black.woff2",revision:"f477dd9634c960c5ce215aa435e32b4c"},{url:"/fonts/woff2/IRANSansWeb_Bold.woff2",revision:"43a0ecf3c7f2af819b192d1284f95ed9"},{url:"/fonts/woff2/IRANSansWeb_Light.woff2",revision:"f7e4be98d20eb763b867143da5207b90"},{url:"/fonts/woff2/IRANSansWeb_Medium.woff2",revision:"9c66b762719d40d1f18e678a1405459a"},{url:"/fonts/woff2/IRANSansWeb_UltraLight.woff2",revision:"068169d2ab5f8a5dd1beae8b0149217d"},{url:"/images/1.png",revision:"470bf98731214f6b413fbcde248b5035"},{url:"/images/2.png",revision:"6992759a88b2fb918a4b9e7ad8a9f621"},{url:"/index.html",revision:"9253b847c90c8e817a11fd1386944d5c"},{url:"/logo.png",revision:"7581b0092bd144f995b8ae3e96947319"},{url:"/manifest.json",revision:"e3bc39284c8629ab3c5a691ea6e146f1"},{url:"/sponsor.jpeg",revision:"b48d060002065e502ef8d74ae1f531de"},{url:"/tex-svg.min.js",revision:"84d71a6ce4fdfa648ede9778b2685ff5"},{url:"/tinymce/themes/silver/index.js",revision:"6e2e7a95414ad51922ad197d45f52561"},{url:"/tinymce/themes/silver/theme.js",revision:"25aa9157511862e5416d144dcbaaa4e5"},{url:"/tinymce/themes/silver/theme.min.js",revision:"25aa9157511862e5416d144dcbaaa4e5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

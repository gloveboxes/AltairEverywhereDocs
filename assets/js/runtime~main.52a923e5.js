(()=>{"use strict";var e,a,t,d,f,r={},c={};function b(e){var a=c[e];if(void 0!==a)return a.exports;var t=c[e]={id:e,loaded:!1,exports:{}};return r[e].call(t.exports,t,t.exports,b),t.loaded=!0,t.exports}b.m=r,b.c=c,e=[],b.O=(a,t,d,f)=>{if(!t){var r=1/0;for(i=0;i<e.length;i++){t=e[i][0],d=e[i][1],f=e[i][2];for(var c=!0,o=0;o<t.length;o++)(!1&f||r>=f)&&Object.keys(b.O).every((e=>b.O[e](t[o])))?t.splice(o--,1):(c=!1,f<r&&(r=f));if(c){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[t,d,f]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var f=Object.create(null);b.r(f);var r={};a=a||[null,t({}),t([]),t(t)];for(var c=2&d&&e;"object"==typeof c&&!~a.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(f,r),f},b.d=(e,a)=>{for(var t in a)b.o(a,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,t)=>(b.f[t](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",628:"45909ed0",820:"c7f43aa8",1029:"74adbcab",1120:"a3fe7624",1154:"8099b7c9",1172:"7ead8953",1447:"63d3bdd5",1803:"928921a8",2192:"99b4306e",2307:"9606a093",2395:"e474c54a",2617:"da5b9140",2685:"c94abce5",2753:"b63b4b08",2892:"67192bb0",3085:"1f391b9e",3666:"0c734764",3744:"162e6416",3999:"1873b338",4173:"2968c57c",4249:"9f800dde",4330:"9d501525",4385:"214ca41e",4857:"f31db108",4963:"f319f36d",5002:"ceb17a93",5091:"08295435",5144:"036e8afb",5280:"1639ba7e",5370:"1229e51d",5473:"097fbee3",6067:"6b3d564f",6112:"8fc6480c",6153:"815b4379",6394:"bd5fc2fd",6433:"71b8a377",6777:"35cc921b",7211:"7bde6d23",7333:"6425c549",7414:"393be207",7918:"17896441",7926:"f7f93f6b",7971:"e057b42a",8497:"518b2e99",8935:"f55948be",8953:"3ffd53cd",9117:"3c8bd95f",9392:"391894f8",9396:"9f1dc3fc",9514:"1be78505",9817:"14eb3368",9852:"7644d251",9983:"5913020e"}[e]||e)+"."+{53:"4524184c",628:"9cda7529",820:"8af05883",1029:"84fb4200",1120:"1144cdae",1154:"bf572605",1172:"cf6c1873",1447:"469d6962",1803:"1e013f1d",2192:"ae2e02db",2307:"16a61629",2395:"234b50fd",2617:"5ed8455a",2666:"cda9767e",2685:"bbf02396",2753:"fa9f0c83",2892:"694b0261",3085:"a36277bf",3666:"fb14c2ae",3744:"da387721",3999:"f705ab3b",4173:"23c5b009",4249:"819da7b1",4330:"ae5969cd",4385:"213940f3",4857:"3be72da3",4963:"4f970a86",4972:"9c72979b",5002:"af19217a",5091:"95141e97",5144:"dc21ffdf",5280:"ea62f66b",5370:"8c450f21",5473:"07060332",6067:"96cdf7f5",6112:"30b4a9cb",6153:"8f17385a",6394:"34db1d52",6433:"8a06c9bc",6777:"87855115",7211:"90f4c832",7333:"36580f47",7414:"fe8d9700",7918:"0a9a7d93",7926:"ad57b4db",7971:"315cdcc0",8497:"4bf190b8",8935:"6b1d3649",8953:"7b2fa642",9117:"e4c67226",9392:"46e46079",9396:"f7e5ba2c",9514:"cb715490",9817:"83b94ae4",9852:"3dbb8324",9983:"106b3763"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},f="altair-docs:",b.l=(e,a,t,r)=>{if(d[e])d[e].push(a);else{var c,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==f+t){c=l;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,b.nc&&c.setAttribute("nonce",b.nc),c.setAttribute("data-webpack",f+t),c.src=e),d[e]=[a];var u=(a,t)=>{c.onerror=c.onload=null,clearTimeout(s);var f=d[e];if(delete d[e],c.parentNode&&c.parentNode.removeChild(c),f&&f.forEach((e=>e(t))),a)return a(t)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),o&&document.head.appendChild(c)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/altair_8800_posix_docs/",b.gca=function(e){return e={17896441:"7918","935f2afb":"53","45909ed0":"628",c7f43aa8:"820","74adbcab":"1029",a3fe7624:"1120","8099b7c9":"1154","7ead8953":"1172","63d3bdd5":"1447","928921a8":"1803","99b4306e":"2192","9606a093":"2307",e474c54a:"2395",da5b9140:"2617",c94abce5:"2685",b63b4b08:"2753","67192bb0":"2892","1f391b9e":"3085","0c734764":"3666","162e6416":"3744","1873b338":"3999","2968c57c":"4173","9f800dde":"4249","9d501525":"4330","214ca41e":"4385",f31db108:"4857",f319f36d:"4963",ceb17a93:"5002","08295435":"5091","036e8afb":"5144","1639ba7e":"5280","1229e51d":"5370","097fbee3":"5473","6b3d564f":"6067","8fc6480c":"6112","815b4379":"6153",bd5fc2fd:"6394","71b8a377":"6433","35cc921b":"6777","7bde6d23":"7211","6425c549":"7333","393be207":"7414",f7f93f6b:"7926",e057b42a:"7971","518b2e99":"8497",f55948be:"8935","3ffd53cd":"8953","3c8bd95f":"9117","391894f8":"9392","9f1dc3fc":"9396","1be78505":"9514","14eb3368":"9817","7644d251":"9852","5913020e":"9983"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,t)=>{var d=b.o(e,a)?e[a]:void 0;if(0!==d)if(d)t.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((t,f)=>d=e[a]=[t,f]));t.push(d[2]=f);var r=b.p+b.u(a),c=new Error;b.l(r,(t=>{if(b.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var f=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+a+" failed.\n("+f+": "+r+")",c.name="ChunkLoadError",c.type=f,c.request=r,d[1](c)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,t)=>{var d,f,r=t[0],c=t[1],o=t[2],n=0;if(r.some((a=>0!==e[a]))){for(d in c)b.o(c,d)&&(b.m[d]=c[d]);if(o)var i=o(b)}for(a&&a(t);n<r.length;n++)f=r[n],b.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return b.O(i)},t=self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();
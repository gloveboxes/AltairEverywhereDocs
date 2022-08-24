"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[126],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=l,h=d["".concat(p,".").concat(u)]||d[u]||s[u]||n;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2508:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(7462),l=(a(7294),a(3905));const n={sidebar_position:3},i="Deploy pre-built images",o={unversionedId:"azsphere/Deploy-the-Altair/Deploy-prebuilt",id:"azsphere/Deploy-the-Altair/Deploy-prebuilt",title:"Deploy pre-built images",description:"Install the following real-time core app services for the Altair Emulator.",source:"@site/docs/azsphere/01-Deploy-the-Altair/03-Deploy-prebuilt.md",sourceDirName:"azsphere/01-Deploy-the-Altair",slug:"/azsphere/Deploy-the-Altair/Deploy-prebuilt",permalink:"/altair_8800_posix_docs/azsphere/Deploy-the-Altair/Deploy-prebuilt",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_posix_docs/tree/main/docs/azsphere/01-Deploy-the-Altair/03-Deploy-prebuilt.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"azsphere",previous:{title:"Clone the Altair repo",permalink:"/altair_8800_posix_docs/azsphere/Deploy-the-Altair/Clone-Altair-repo"},next:{title:"Wi-Fi configuration",permalink:"/altair_8800_posix_docs/azsphere/Deploy-the-Altair/WiFi-configuration"}},p={},c=[{value:"Deploy the movement classification service",id:"deploy-the-movement-classification-service",level:2},{value:"Deploy the SD card service",id:"deploy-the-sd-card-service",level:2},{value:"Deploy the differencing disk service",id:"deploy-the-differencing-disk-service",level:2},{value:"Deploy the Altair emulator",id:"deploy-the-altair-emulator",level:2}],m={toc:c};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deploy-pre-built-images"},"Deploy pre-built images"),(0,l.kt)("p",null,"Install the following real-time core app services for the Altair Emulator."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The movement classification service."),(0,l.kt)("li",{parentName:"ol"},"The storage service.")),(0,l.kt)("h2",{id:"deploy-the-movement-classification-service"},"Deploy the movement classification service"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a command prompt and navigate to the ",(0,l.kt)("strong",{parentName:"p"},"Altair_imagepackages")," folder.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the command prompt, run the following command to deploy the movement classification service."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"azsphere device sideload deploy -p AltairRT_movement_classify.imagepackage\n")))),(0,l.kt)("h2",{id:"deploy-the-sd-card-service"},"Deploy the SD card service"),(0,l.kt)("p",null,"If you the Mikroe SD card Click then deploy the SD card service. Ensure the MikroE SD card Click is plugged in Click Socket 1 on the Avnet Azure Sphere board. If you don't have an SD card Click then deploy the differencing disk service."),(0,l.kt)("p",null,"Select the imagepackage that matches your Avnet Azure Sphere Starter Kit."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Device"),(0,l.kt)("th",{parentName:"tr",align:null},"Image Package Name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Avnet Rev 1"),(0,l.kt)("td",{parentName:"tr",align:null},"AltairRT_sd_card_service_avnet_rev_1.imagepackage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Avnet Rev 2"),(0,l.kt)("td",{parentName:"tr",align:null},"AltairRT_sd_card_service_avnet_rev_2.imagepackage")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a command prompt and navigate to the ",(0,l.kt)("strong",{parentName:"p"},"Altair_imagepackages")," folder.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the command prompt, run the following command to deploy the SD Card service."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"azsphere device sideload deploy -p IMAGE_PACKAGE_NAME.imagepackage\n")))),(0,l.kt)("h2",{id:"deploy-the-differencing-disk-service"},"Deploy the differencing disk service"),(0,l.kt)("p",null,"If you don't have an SD card Click then deploy the differencing disk service. "),(0,l.kt)("p",null,"The differencing disk services provides approximately 100 KB of temporary read/write storage for the Altair filesystem. Any changes made to the Altair filesystem will be lost when the power to the device is cycled."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a command prompt and navigate to the ",(0,l.kt)("strong",{parentName:"p"},"Altair_imagepackages")," folder.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the command prompt, run the following command to deploy the differencing disk."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"azsphere device sideload deploy -p AltairRT_difference_disk_service.imagepackage\n")))),(0,l.kt)("h2",{id:"deploy-the-altair-emulator"},"Deploy the Altair emulator"),(0,l.kt)("p",null,"There are a number of prebuilt Altair emulator images. If your configuration matches one from the list then deploy that image. Failing that, you will need to compile the Altair emulator for your specific configuration."),(0,l.kt)("p",null,"Select the imagepackage that matches your configuration."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Device"),(0,l.kt)("th",{parentName:"tr",align:null},"Image Package Name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Avnet Rev 1 with SD card and 8800 Retro Click"),(0,l.kt)("td",{parentName:"tr",align:null},"emulator_avnet_r1_sd_retro.imagepackage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Avnet Rev 2 with SD card and 8800 Retro Click"),(0,l.kt)("td",{parentName:"tr",align:null},"emulator_avnet_r2_sd_retro.imagepackage")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a command prompt and navigate to the ",(0,l.kt)("strong",{parentName:"p"},"Altair_imagepackages")," folder.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the command prompt, run the following command to deploy the SD Card service."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"azsphere device sideload deploy -p IMAGE_PACKAGE_NAME.imagepackage\n")))))}s.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[1782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(r),d=n,h=s["".concat(p,".").concat(d)]||s[d]||c[d]||o;return r?a.createElement(h,l(l({ref:t},u),{},{components:r})):a.createElement(h,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9669:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const o={},l="Start the Altair emulator",i={unversionedId:"everywhere/Compile-the-Altair/Run-the-emulator",id:"everywhere/Compile-the-Altair/Run-the-emulator",title:"Start the Altair emulator",description:"1. From a terminal window, go to the Altair8800/AltairHL_emulator folder that you cloned to your computer.",source:"@site/docs/everywhere/03-Compile-the-Altair/05-Run-the-emulator.md",sourceDirName:"everywhere/03-Compile-the-Altair",slug:"/everywhere/Compile-the-Altair/Run-the-emulator",permalink:"/altair_8800_docs/everywhere/Compile-the-Altair/Run-the-emulator",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_docs/tree/main/docs/everywhere/03-Compile-the-Altair/05-Run-the-emulator.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"everywhere",previous:{title:"Build from the command line",permalink:"/altair_8800_docs/everywhere/Compile-the-Altair/Compile-from-CLI"},next:{title:"Build docker images",permalink:"/altair_8800_docs/everywhere/Create-Docker-images"}},p={},m=[],u={toc:m};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"start-the-altair-emulator"},"Start the Altair emulator"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From a terminal window, go to the ",(0,n.kt)("strong",{parentName:"p"},"Altair8800/AltairHL_emulator")," folder that you cloned to your computer.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Before you start the emulator, you need the following information."),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"ID_SCOPE: Azure IoT Central ID Scope"),(0,n.kt)("li",{parentName:"ol"},"DEVICE_ID: Azure IoT Central Device ID"),(0,n.kt)("li",{parentName:"ol"},"DERIVED_KEY: Azure IoT Central Device Derived Key"),(0,n.kt)("li",{parentName:"ol"},"OPEN_WEATHER_MAP_API_KEY: Open Weather Map API Key"),(0,n.kt)("li",{parentName:"ol"},"NETWORK_INTERFACE: Network interface name. eg wlan0, eth0"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To start the emulator, run the following command."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./build/Altair_emulator -s ID_SCOPE -d DEVICE_ID -k DERIVED_KEY -o OPEN_WEATHER_MAP_API_KEY -n NETWORK_INTERFACE\n")),(0,n.kt)("p",{parentName:"li"},"To run the emulator as a background task."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"nohup ./build/Altair_emulator -s ID_SCOPE -d DEVICE_ID -k DERIVED_KEY -o OPEN_WEATHER_MAP_API_KEY -n NETWORK_INTERFACE &\n")))))}c.isMDXComponent=!0}}]);
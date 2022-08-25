"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[58],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),h=o,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||n;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2630:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(7462),o=(r(7294),r(3905));const n={},i="Architecture",l={unversionedId:"azsphere/architecture",id:"azsphere/architecture",title:"Architecture",description:"The Altair solution is deployed across all three custom app cores on Azure Sphere, including two workloads on the low-power real-time cores. The Altair emulator runs on the high-level Cortex A7 core, a continuous movement classification TinyML model runs on one of the real-time cores, and the other real-time core runs storage services.",source:"@site/docs/azsphere/03-architecture.md",sourceDirName:"azsphere",slug:"/azsphere/architecture",permalink:"/altair_8800_docs/azsphere/architecture",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_docs/tree/main/docs/azsphere/03-architecture.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"azsphere",previous:{title:"Introduction",permalink:"/altair_8800_docs/azsphere/Introduction"},next:{title:"Deploy",permalink:"/altair_8800_docs/category/deploy"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"The Altair solution is deployed across all three custom app cores on Azure Sphere, including two workloads on the low-power real-time cores. The Altair emulator runs on the high-level Cortex A7 core, a continuous movement classification TinyML model runs on one of the real-time cores, and the other real-time core runs storage services."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The following diagram summarizes the Altair emulator architecture.",src:r(8103).Z,width:"1280",height:"720"})),(0,o.kt)("p",null,"Starting from the bottom left and moving up and then to the right."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"POSIX Compatible OS:"),". The Altair 8800 emulator runs on ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/POSIX"},"POSIX")," compatible operating systems, including Linux, macOS, ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/windows/wsl"},"Windows WSL 2"),", and Raspberry Pi OS."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WebSocket & Azure IoT C:")," These communication libraries connect the Altair emulator to the web terminal and cloud services. The Altair terminal IO messages are routed over ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/WebSocket"},"WebSockets"),", and the Azure IoT C SDK connects the Altair to Azure IoT Central."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Event loop:")," The Altair coordinates activities on the main thread using the built-in Event loop library."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"EdgeDevX:")," This library simplifies access to Azure IoT services, and provides event-timer services, along with several useful utilities."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Terminal IO & Cloud Services:")," The Intel 8080 CPU provides 256 input ports and 256 output ports. The Intel 8080 ports were used to integrate peripherals such as disk drives, printers, and modems. However, for the Altair emulator, these ports are used to integrate communications and cloud services. Terminal input and output ports are routed over WebSockets, other ports are used for timing services, access to weather and pollution data, plus Azure IoT services."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Intel 8080 emulator:")," This is an open-source software implementation of the Intel 8080 CPU. The Intel 8080 emulator executes Intel 8080 applications including the CP/M operating system, compilers, apps, and games."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CPU Monitor:")," The CPU monitor implements the virtual Altair front panel, along with memory disassembler, tracer, and Altair emulator reset."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CP/M:")," CP/M originally stood for Control Program/Monitor. Later, CP/M became known as Control Program for Microcomputers. It was a mass-market operating system created in 1974 for Intel 8080/85-based microcomputers by Gary Kildall of Digital Research, Inc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Programming languages:")," Included on the main disk image are the Microsoft BASIC interpreter, the BDS C compiler, and the Intel and Microsoft assemblers and linkers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Altair BASIC:")," By default the Altair emulator boots CP/M, but it is easy to boot the original Altair BASIC program."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Altair Web Terminal:")," Provides a web-browser-hosted Altair terminal. The web terminal is built using the Xterm library. Xterm.js provides a web browser-hosted terminal, a WebSocket integrates Xterm with the Altair emulator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Open Weather Map"),": Open Weather Map provides planet-scale weather and pollution data services. Open Weather Map provides free access to weather and pollution data by geographic location."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Azure IoT Central:")," ",(0,o.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/services/iot-central?azure-portal=true"},"Azure IoT Central")," is a customizable cloud-based Internet of Things (IoT) application platform. You can report, analyze, and export IoT data.")))}u.isMDXComponent=!0},8103:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Altair_8800_Application_Architecture-8d061ac671b22ff83aa947e44a37edb8.png"}}]);
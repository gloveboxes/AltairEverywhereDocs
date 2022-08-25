"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[2846],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(r),d=o,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||n;return r?a.createElement(f,l(l({ref:t},m),{},{components:r})):a.createElement(f,l({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5611:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_position:4},l="Build from Visual Studio Code",i={unversionedId:"everywhere/Compile-the-Altair/Build-from-vs-code",id:"everywhere/Compile-the-Altair/Build-from-vs-code",title:"Build from Visual Studio Code",description:"Install Visual Studio Code",source:"@site/docs/everywhere/03-Compile-the-Altair/03-Build-from-vs-code.md",sourceDirName:"everywhere/03-Compile-the-Altair",slug:"/everywhere/Compile-the-Altair/Build-from-vs-code",permalink:"/altair_8800_docs/everywhere/Compile-the-Altair/Build-from-vs-code",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_docs/tree/main/docs/everywhere/03-Compile-the-Altair/03-Build-from-vs-code.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"everywhere",previous:{title:"Clone the Altair repo",permalink:"/altair_8800_docs/everywhere/Compile-the-Altair/Clone-Altair-repo"},next:{title:"Build from the command line",permalink:"/altair_8800_docs/everywhere/Compile-the-Altair/Compile-from-CLI"}},p={},s=[{value:"Install Visual Studio Code",id:"install-visual-studio-code",level:2}],m={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-from-visual-studio-code"},"Build from Visual Studio Code"),(0,o.kt)("h2",{id:"install-visual-studio-code"},"Install Visual Studio Code"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com&azure-portal=true"},"Visual Studio Code"),".")),(0,o.kt)("p",null,"You need to pass the IoT Central and derived device key to your application."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a Terminal command prompt.\nIf you are using Windows Subsystem for Linux then open a WSL command prompt.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("strong",{parentName:"p"},"Altair8800/AltairHL_emulator")," folder")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the following command to open the folder with VS Code."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"code .\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the following Visual Studio Code extensions:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If using WSL, then install the ",(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl&azure-portal=true"},"Visual Studio Code Remote-WSL extension"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb"},"Visual Studio Code CodeLLDB extension")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools"},"CMake Tools extension")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools"},"C/C++ extension")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the .vscode/launch.json file in VS Code.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the ","[args]"," json property for the build configuration.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the following information."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"DPS or IoT Central ID Scope."),(0,o.kt)("li",{parentName:"ul"},"Device ID."),(0,o.kt)("li",{parentName:"ul"},"Derived device key."),(0,o.kt)("li",{parentName:"ul"},"Network interface, eg wlan0, eth0, en1.\nUse the ",(0,o.kt)("strong",{parentName:"li"},"ifconfig")," command to determine your active network interface.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},'"args": ','["-s", "<YOUR_SCOPE_ID>", "-d", "<YOUR_DEVICE_ID>", "-k", "<YOUR_DERIVED_DEVICE_KEY>", "-n", "<YOUR_NETWORK_INTERFACE>", "-o", "<YOUR_OPEN_WEATHER_MAP_API_KEY>"]',","))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save the launch.json file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you are have a Raspberry Pi Sense HAT, then enable the Pi Sense HAT in the CMakeLists.txt file. Uncomment:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-cmake"},'# set(ALTAIR_FRONT_PI_SENSE_HAT TRUE "Enable Raspberry Pi Sense HAT")\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("strong",{parentName:"p"},"GCC")," or ",(0,o.kt)("strong",{parentName:"p"},"Clang")," Kit.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press ",(0,o.kt)("kbd",null,"F5")," to compile and launch the Altair emulator."))))}u.isMDXComponent=!0}}]);
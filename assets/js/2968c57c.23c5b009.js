"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[4173],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2683:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:5},l="Deploy the Altair emulator",i={unversionedId:"Deploy-Altair",id:"Deploy-Altair",title:"Deploy the Altair emulator",description:"The easiest way to run the Altair 8800 emulator is with Docker. You need to install Docker on your Linux, macOS, Windows, or Raspberry Pi computer.",source:"@site/docs/02-Deploy-Altair.md",sourceDirName:".",slug:"/Deploy-Altair",permalink:"/altair_8800_posix_docs/Deploy-Altair",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_posix_docs/tree/main/docs/02-Deploy-Altair.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Altair reference manuals",permalink:"/altair_8800_posix_docs/Reference-manuals"},next:{title:"Escape room challenge",permalink:"/altair_8800_posix_docs/Escape-room-challenge"}},s={},p=[{value:"Install Docker",id:"install-docker",level:2},{value:"Start the Altair emulator Docker container",id:"start-the-altair-emulator-docker-container",level:2},{value:"Pi Sense HAT or Retro Click LED panels",id:"pi-sense-hat-or-retro-click-led-panels",level:2},{value:"Start the Altair Docker image",id:"start-the-altair-docker-image",level:2},{value:"General Linux, macOS, Windows, and Raspberry Pi users",id:"general-linux-macos-windows-and-raspberry-pi-users",level:3},{value:"Raspberry Pi with Pi Sense HAT users",id:"raspberry-pi-with-pi-sense-hat-users",level:3},{value:"Open the Web Terminal",id:"open-the-web-terminal",level:2},{value:"Stop the Altair emulator Docker container",id:"stop-the-altair-emulator-docker-container",level:2},{value:"Restart the Altair emulator Docker container",id:"restart-the-altair-emulator-docker-container",level:2},{value:"Delete the Altair emulator Docker container",id:"delete-the-altair-emulator-docker-container",level:2}],c={toc:p};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deploy-the-altair-emulator"},"Deploy the Altair emulator"),(0,n.kt)("p",null,"The easiest way to run the Altair 8800 emulator is with Docker. You need to install Docker on your Linux, macOS, Windows, or Raspberry Pi computer."),(0,n.kt)("p",null,"If you prefer, you can compile the Altair code from the source code and run it as a native application on your computer. For more information, refer to ",(0,n.kt)("a",{parentName:"p",href:"/altair_8800_posix_docs/Compile-the-Altair/Introduction"},"Compiling the Altair emulator"),"."),(0,n.kt)("h2",{id:"install-docker"},"Install Docker"),(0,n.kt)("p",null,"Install Docker on your computer."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/windows/install/"},"Install Docker Desktop on Windows"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/mac/install/"},"Install Docker Desktop on Mac"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Install Docker on Linux and Raspberry Pi"),(0,n.kt)("p",{parentName:"li"},"  Docker has a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/debian/"},"script")," to install Docker on Debian, Ubuntu, and Raspberry Pi OS. Run this script using the following command."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh\n")),(0,n.kt)("p",{parentName:"li"},"  Review the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user"},"Manage Docker as a non-root user")," document."),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Grant the current user Docker rights"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo usermod -aG docker $USER\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reboot the system."))))),(0,n.kt)("h2",{id:"start-the-altair-emulator-docker-container"},"Start the Altair emulator Docker container"),(0,n.kt)("p",null,"The Docker Altair image runs on 64 bit Linux, macOS, Windows, and Raspberry Pi OS."),(0,n.kt)("h2",{id:"pi-sense-hat-or-retro-click-led-panels"},"Pi Sense HAT or Retro Click LED panels"),(0,n.kt)("p",null,"If you have a Raspberry Pi and a Pi Sense HAT, then the 8x8 LED panels can display:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The Altair 8800 front panel address and data bus information. The address and data bus LEDs give you a visual indication of the state of the Intel 8080 CPU."),(0,n.kt)("li",{parentName:"ol"},"The Pi Sense HAT and Retro Click 8x8 LED panels can also be switched to ",(0,n.kt)("em",{parentName:"li"},"Font")," mode. When ",(0,n.kt)("em",{parentName:"li"},"Font")," is enabled, you can display characters on the LED panels.")),(0,n.kt)("h2",{id:"start-the-altair-docker-image"},"Start the Altair Docker image"),(0,n.kt)("p",null,"There are two Altair Docker images. The first is for general use on 64-bit ",(0,n.kt)("a",{parentName:"p",href:"#general-linux-macos-windows-and-raspberry-pi-users"},"Linux, macOS, Windows and Raspberry Pi operating systems"),". The second image is for a Raspberry Pi running ",(0,n.kt)("a",{parentName:"p",href:"#raspberry-pi-with-pi-sense-hat-users"},"Raspberry Pi OS with a Pi Sense HAT"),". Be sure to run the Docker image that matches your system."),(0,n.kt)("h3",{id:"general-linux-macos-windows-and-raspberry-pi-users"},"General Linux, macOS, Windows, and Raspberry Pi users"),(0,n.kt)("p",null,"Run the following command to start the Altair emulator. This command will:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Map the ports for the web terminal."),(0,n.kt)("li",{parentName:"ol"},"Set the Docker container time zone. Replace the Australia/Sydney time zone with your local time zone.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -e TZ=Australia/Sydney -d -p 8082:8082 --name altair8800 --rm glovebox/altair8800:latest\n")),(0,n.kt)("h3",{id:"raspberry-pi-with-pi-sense-hat-users"},"Raspberry Pi with Pi Sense HAT users"),(0,n.kt)("p",null,"If you have a Raspberry Pi with a Pi Sense HAT, run the following commands.  These commands will:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"enable I2C hardware access,"),(0,n.kt)("li",{parentName:"ul"},"map the ports for the web terminal,"),(0,n.kt)("li",{parentName:"ul"},"and enables Docker privileged mode required to access the Raspberry Pi Sense HAT.")),(0,n.kt)("p",null,"From the command prompt, run the following command to enable I2C support for the Pi Sense HAT."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo raspi-config nonint do_i2c 0\n")),(0,n.kt)("p",null,"Run the following command to start the Altair emulator. This command will:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Map the ports for the web terminal."),(0,n.kt)("li",{parentName:"ol"},"Set the Docker container time zone. Replace the Australia/Sydney time zone with your local time zone."),(0,n.kt)("li",{parentName:"ol"},"Starts the Docker container in privileged mode so the emulator can control the Pi Sense HAT panel LEDs.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -e TZ=Australia/Sydney -d --privileged -p 8082:8082 --name altair8800 --rm glovebox/altair8800-pisense:latest\n")),(0,n.kt)("h2",{id:"open-the-web-terminal"},"Open the Web Terminal"),(0,n.kt)("p",null,"Open the Web Terminal to access the Altair emulator. Follow these steps."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Familiarize yourself with the ",(0,n.kt)("a",{parentName:"p",href:"/altair_8800_posix_docs/Altair-Web-Terminal"},"Web Terminal")," and the CP/M operating system.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To start the web terminal, from your web browser open the following link ",(0,n.kt)("a",{parentName:"p",href:"http://aterminal.z8.web.core.windows.net/"},"http://aterminal.z8.web.core.windows.net/"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To connect to the Altair emulator, enter the IP address or hostname of the computer or device running the Altair emulator. If you are running the Altair emulator on your local computer, then connect to address ",(0,n.kt)("strong",{parentName:"p"},"localhost"),". Then select ",(0,n.kt)("strong",{parentName:"p"},"Connect"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"The following image is of the web terminal command prompt",src:a(1223).Z,width:"1153",height:"339"})),(0,n.kt)("p",{parentName:"li"},"When connected, press the Enter key, and the ",(0,n.kt)("a",{parentName:"p",href:"#introduction-to-cpm"},"CP/M")," ",(0,n.kt)("strong",{parentName:"p"},"A>")," command prompt will be displayed. CP/M is ready for your first command. For information on rebooting CP/M or loading Altair Basic, refer to ",(0,n.kt)("a",{parentName:"p",href:"/altair_8800_posix_docs/Rebooting-the-Altair"},"rebooting the Altair"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"The following image is of the web terminal connected to the Altair emulator",src:a(4251).Z,width:"1153",height:"345"})))),(0,n.kt)("h2",{id:"stop-the-altair-emulator-docker-container"},"Stop the Altair emulator Docker container"),(0,n.kt)("p",null,"Use the following command to stop the Altair emulator Docker container."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop altair8800\n")),(0,n.kt)("h2",{id:"restart-the-altair-emulator-docker-container"},"Restart the Altair emulator Docker container"),(0,n.kt)("p",null,"Use the following command to start the Altair emulator Docker container that you previously stopped."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker start altair8800\n")),(0,n.kt)("h2",{id:"delete-the-altair-emulator-docker-container"},"Delete the Altair emulator Docker container"),(0,n.kt)("p",null,"First, stop the Altair emulator Docker container, then delete the Altair emulator container."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"WARNING")," Deleting the Altair emulator Docker container will also delete any data and programs you have stored on the Altair."),(0,n.kt)("p",null,"Use the following command to delete the Altair Docker container."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker container rm altair8800\n")))}m.isMDXComponent=!0},1223:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/web_terminal-d19e3defd17e52260589780d1b3a9291.png"},4251:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/web_terminal_connected-86347ff4aefec01f36c464e7d78251f8.png"}}]);
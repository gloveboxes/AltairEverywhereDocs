"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[5370],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),u=p(a),g=n,d=u["".concat(o,".").concat(g)]||u[g]||c[g]||l;return a?r.createElement(d,i(i({ref:t},s),{},{components:a})):r.createElement(d,i({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:n,i[1]=m;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2741:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={},i="Intel 8080 Assembler",m={unversionedId:"Programming-the-Altair/Assembly-programming",id:"Programming-the-Altair/Assembly-programming",title:"Intel 8080 Assembler",description:"The following text is an exert from the Assembly language article.",source:"@site/docs/02-Programming-the-Altair/04-Assembly-programming.md",sourceDirName:"02-Programming-the-Altair",slug:"/Programming-the-Altair/Assembly-programming",permalink:"/altair_8800_posix_docs/Programming-the-Altair/Assembly-programming",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_posix_docs/tree/main/docs/02-Programming-the-Altair/04-Assembly-programming.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C programming",permalink:"/altair_8800_posix_docs/Programming-the-Altair/C-programming"},next:{title:"Altair BASIC programming",permalink:"/altair_8800_posix_docs/Programming-the-Altair/Altair-BASIC-programming"}},o={},p=[{value:"Intel 8080 Assembly Language Programming Manual",id:"intel-8080-assembly-language-programming-manual",level:2},{value:"Assemble assembly applications",id:"assemble-assembly-applications",level:2},{value:"The DEMO.ASM example",id:"the-demoasm-example",level:3},{value:"Edit the <em>DEMO.ASM</em> file with Word-Master",id:"edit-the-demoasm-file-with-word-master",level:2},{value:"The SLEEP.ASM example",id:"the-sleepasm-example",level:3}],s={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"intel-8080-assembler"},"Intel 8080 Assembler"),(0,n.kt)("p",null,"The following text is an exert from the ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Assembly_language"},"Assembly language")," article."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"In computer programming, assembly language (or assembler language), sometimes abbreviated asm, is any low-level programming language in which there is a very strong correspondence between the instructions in the language and the architecture's machine code instructions. Assembly language usually has one statement per machine instruction (1:1), but constants, comments, assembler directives, and symbolic labels of, e.g., memory locations, registers, and macros are generally also supported.")),(0,n.kt)("h2",{id:"intel-8080-assembly-language-programming-manual"},"Intel 8080 Assembly Language Programming Manual"),(0,n.kt)("p",null,"For more information, refer to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureSphereCloudEnabledAltair8800/Altair8800.manuals/blob/master/8080asm.pdf"},"Intel 8080 Assembly Language Programming Manual")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.gaby.de/cpm/manuals/archive/cpm22htm/ch3.htm"},"CP/M Assembler")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.gaby.de/cpm/manuals/archive/cpm22htm/ch4.htm"},"CP/M Dynamic Debugging Tool")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.gaby.de/cpm/manuals/archive/cpm22htm/ch5.htm"},"CP/M 2 System Interface"))),(0,n.kt)("h2",{id:"assemble-assembly-applications"},"Assemble assembly applications"),(0,n.kt)("p",null,"The CP/M disk image includes two demo assembly applications, ",(0,n.kt)("strong",{parentName:"p"},"DEMO.ASM")," and ",(0,n.kt)("strong",{parentName:"p"},"SLEEP.ASM"),". Follow these steps to edit, assemble, and load the demo file:"),(0,n.kt)("h3",{id:"the-demoasm-example"},"The DEMO.ASM example"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"List the ",(0,n.kt)("em",{parentName:"p"},"DEMO.ASM")," file"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-cpm"},"type sleep.asm\n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-asm"},"        ORG     0100H           ; CP/M base of TPA (transient program area)\n        OUT     30\n        MVI     C,09H           ; Print string function\n        LXI     D,MESSAGE       ; Point\n        CALL    0005H           ; Call bdos\n        RET                     ; To cp/m\nMESSAGE:DB      0DH,0AH,'Hello, World!',0DH,0AH,'$'\n        END\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Assemble the ",(0,n.kt)("em",{parentName:"p"},"DEMO.ASM")," file:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-cpm"},"asm demo\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Load and link the assembled code:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-cpm"},"load demo\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the demo application:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-cpm"},"demo\n")))),(0,n.kt)("h2",{id:"edit-the-demoasm-file-with-word-master"},"Edit the ",(0,n.kt)("em",{parentName:"h2"},"DEMO.ASM")," file with Word-Master"),(0,n.kt)("p",null,"in the following steps use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureSphereCloudEnabledAltair8800/Altair8800.manuals/blob/master/Word-Master_Manual.pdf"},"Word-Master text editor")," to edit a file. It's highly recommended to ",(0,n.kt)("a",{parentName:"p",href:"Editing-files"},"edit files with Visual Studio Code")," and then copy the file to the Altair filesystem using the CP/M gf command."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Edit the ",(0,n.kt)("em",{parentName:"p"},"DEMO.ASM")," file with Word-Master:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-cpm"},"wm demo.asm\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Switch the web terminal to character input mode by selecting ",(0,n.kt)("strong",{parentName:"p"},"Ctrl+L"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Edit the ",(0,n.kt)("em",{parentName:"p"},"demo.asm")," file. For example, change ",(0,n.kt)("em",{parentName:"p"},"Hello, World!")," text to your name.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save your updates to the ",(0,n.kt)("em",{parentName:"p"},"demo.asm")," file:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Esc")," key."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"E")," to exit. Your file changes are saved to disk."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Switch the web terminal to line input mode by selecting ",(0,n.kt)("strong",{parentName:"p"},"Ctrl+L"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Then assemble, load, and run the updated demo.asm application."))),(0,n.kt)("h3",{id:"the-sleepasm-example"},"The SLEEP.ASM example"),(0,n.kt)("p",null,"The SLEEP.ASM example uses Intel 8080 input and output port instructions. The ",(0,n.kt)("em",{parentName:"p"},"SLEEP.ASM")," application sets a sleep period of 2 seconds using output port 30, waits on input port 30 for the delay period to expire, and then publishes weather data to Azure IoT Central. For more information about Intel 8080 IO port mappings, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gloveboxes/Altair8800.Emulator.UN-X/wiki#intel-8080-input-and-output-ports"},"Intel 8080 input and output ports"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"List the ",(0,n.kt)("em",{parentName:"p"},"SLEEP.ASM")," file"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-cpm"},"type sleep.asm\n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-asm"},"      ORG 0100H   ;CP/M base of TPA (transient program area)\n      MVI C,09H   ;Print string function\n      LXI D,MSG   ;Point to waiting message\n      CALL 0005H  ;Call bdos\n      MVI A,2     ;Move 2 to the accumulator to set a 2 second delay\n      OUT 30      ;Start timer\nLOOP: IN 30       ;Get delay timer state into the accumulator\n      CPI 00H     ;If accumulator equal to 0 then timer has expired\n      JZ BACK     ;Jump on zero\n      JMP LOOP\nBACK: MVI C,09H   ;Print string function\n      LXI D,PUB   ;Point to publish message\n      CALL 0005H  ;Call bdos\n      MVI A,0H    ;Move zero to the accumulator\n      OUT 32      ;Publish to Azure IoT Central\n      MVI C,09H   ;Print string function\n      LXI D,FINI  ;Point to Finished message\n      CALL 0005H  ;Call Bdos\n      RET\nMSG:  DB 'Sleeping 2 seconds$'\nFINI: DB 0DH,0AH,'Finished$'\nPUB:  DB 0DH,0AH,'Publishing to Azure IoT Central$' \n      END\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Assemble the ",(0,n.kt)("em",{parentName:"p"},"SLEEP.ASM")," file:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"asm sleep\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Load and link the assembled code:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"load sleep\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the demo application:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sleep\n")))))}c.isMDXComponent=!0}}]);
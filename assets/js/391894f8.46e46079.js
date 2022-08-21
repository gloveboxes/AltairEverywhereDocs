"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[9392],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.createContext({}),m=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return l.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(a),k=r,d=u["".concat(p,".").concat(k)]||u[k]||c[k]||n;return a?l.createElement(d,i(i({ref:t},s),{},{components:a})):l.createElement(d,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<n;m++)i[m]=a[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8496:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>m});var l=a(7462),r=(a(7294),a(3905));const n={sidebar_position:6},i="Customize IoT Central",o={unversionedId:"Cloud-services/Azue-IoT-Central/Customize-Azure-IoT-Central",id:"Cloud-services/Azue-IoT-Central/Customize-Azure-IoT-Central",title:"Customize IoT Central",description:"In this exercise, you will be customizing Azure IoT Central to display the data sent from the applications you run on the Altair emulator. Applications that stream data to Azure IoT Central include WEATHER.BAS and JSON.BAS.",source:"@site/docs/04-Cloud-services/Azue-IoT-Central/07-Customize-Azure-IoT-Central.md",sourceDirName:"04-Cloud-services/Azue-IoT-Central",slug:"/Cloud-services/Azue-IoT-Central/Customize-Azure-IoT-Central",permalink:"/altair_8800_posix_docs/Cloud-services/Azue-IoT-Central/Customize-Azure-IoT-Central",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_posix_docs/tree/main/docs/04-Cloud-services/Azue-IoT-Central/07-Customize-Azure-IoT-Central.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Connect the Altair emulator to Azure IoT Central",permalink:"/altair_8800_posix_docs/Cloud-services/Azue-IoT-Central/Create-an-IoT-Central-device-key"},next:{title:"Deploy the Altair emulator",permalink:"/altair_8800_posix_docs/Cloud-services/Azue-IoT-Central/Deploy-the-Altair-emulator"}},p={},m=[{value:"Open the Azure IoT Central device explorer",id:"open-the-azure-iot-central-device-explorer",level:2},{value:"Customize the Climate monitor template",id:"customize-the-climate-monitor-template",level:2},{value:"Add a summary properties view",id:"add-a-summary-properties-view",level:2},{value:"Add a weather data visualization view",id:"add-a-weather-data-visualization-view",level:2},{value:"Add a pollution data visualization view",id:"add-a-pollution-data-visualization-view",level:2},{value:"Customize the LED brightness property",id:"customize-the-led-brightness-property",level:2},{value:"Publish the template",id:"publish-the-template",level:3},{value:"View your Altair emulator device",id:"view-your-altair-emulator-device",level:2},{value:"Explore climate data from IoT Central",id:"explore-climate-data-from-iot-central",level:2}],s={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"customize-iot-central"},"Customize IoT Central"),(0,r.kt)("p",null,"In this exercise, you will be customizing Azure IoT Central to display the data sent from the applications you run on the Altair emulator. Applications that stream data to Azure IoT Central include WEATHER.BAS and JSON.BAS."),(0,r.kt)("h2",{id:"open-the-azure-iot-central-device-explorer"},"Open the Azure IoT Central device explorer"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/services/iot-central?azure-portal=true"},"Azure IoT Central"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the left pane, select ",(0,r.kt)("strong",{parentName:"p"},"Devices")," select your device."),(0,r.kt)("p",{parentName:"li"},"It might take a minute or two for the Altair emulator device to register in the devices section of Azure IoT Central."))),(0,r.kt)("h2",{id:"customize-the-climate-monitor-template"},"Customize the Climate monitor template"),(0,r.kt)("p",null,"The Altair emulator supports ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/iot-develop/overview-iot-plug-and-play"},"IoT Plug and Play"),". When the Altair emulator connects to Azure IoT Central, the Climate Monitor Plug and Play model is loaded from the public repository of models. Default views are created for the Climate Monitor model. These default views are a great starting point, but they need customization along with some new views."),(0,r.kt)("p",null,"The IoT Plug and Play model is declared in the ",(0,r.kt)("em",{parentName:"p"},"main.h")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#define IOT_PLUG_AND_PLAY_MODEL_ID "dtmi:com:example:climatemonitor;1"\n')),(0,r.kt)("h2",{id:"add-a-summary-properties-view"},"Add a summary properties view"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the left pane, select ",(0,r.kt)("strong",{parentName:"p"},"Views"),", and then select the ",(0,r.kt)("strong",{parentName:"p"},"Editing device and cloud data")," tile."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"The image shows how to select views",src:a(3695).Z,width:"1100",height:"437"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Name the form ",(0,r.kt)("strong",{parentName:"p"},"Summary"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select 3 column layout.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Expand ",(0,r.kt)("strong",{parentName:"p"},"Properties"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"The image shows how to select properties",src:a(1808).Z,width:"1186",height:"532"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the following properties:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Humidity"),(0,r.kt)("li",{parentName:"ul"},"Pressure"),(0,r.kt)("li",{parentName:"ul"},"Temperature"),(0,r.kt)("li",{parentName:"ul"},"Weather"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Add section"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Drag the newly added section in column 3 to column 1")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the following properties:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"LED brightness"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Add section"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Drag the newly added section in column 3 to column 1 below weather properties")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the following properties:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AirQualityIndexUS"),(0,r.kt)("li",{parentName:"ul"},"Ammonia"),(0,r.kt)("li",{parentName:"ul"},"CarbonMonoxide"),(0,r.kt)("li",{parentName:"ul"},"NitrogenDioxide"),(0,r.kt)("li",{parentName:"ul"},"NitrogenMonoxide"),(0,r.kt)("li",{parentName:"ul"},"Ozone"),(0,r.kt)("li",{parentName:"ul"},"PM10"),(0,r.kt)("li",{parentName:"ul"},"PM2_5"),(0,r.kt)("li",{parentName:"ul"},"SulphurDioxide"),(0,r.kt)("li",{parentName:"ul"},"Wind Speed"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Add section"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Drag the newly added section in column 3 to column 2")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the following properties:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Heartbeat"),(0,r.kt)("li",{parentName:"ul"},"Software version"),(0,r.kt)("li",{parentName:"ul"},"Start time"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Add section"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the following properties:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"City"),(0,r.kt)("li",{parentName:"ul"},"Country"),(0,r.kt)("li",{parentName:"ul"},"Location"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Add section"),"."),(0,r.kt)("p",{parentName:"li"},"Your summary page layout should look like the following image."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"The following image shows the layout of the summary page",src:a(9146).Z,width:"1262",height:"882"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Save"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Back"),"."))),(0,r.kt)("h2",{id:"add-a-weather-data-visualization-view"},"Add a weather data visualization view"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the left pane, select ",(0,r.kt)("strong",{parentName:"p"},"Views"),", and then select the ",(0,r.kt)("strong",{parentName:"p"},"Visualizing the device")," tile."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"The image shows how to select visualizing the device",src:a(1068).Z,width:"1200",height:"559"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Name the view ",(0,r.kt)("strong",{parentName:"p"},"Weather"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Line chart")," from the ",(0,r.kt)("strong",{parentName:"p"},"Start with a visual")," list, then select ",(0,r.kt)("strong",{parentName:"p"},"Add tile"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Size available")," icon on the tile and select ",(0,r.kt)("strong",{parentName:"p"},"3x3"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Edit")," icon on the tile.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Name the chart ",(0,r.kt)("strong",{parentName:"p"},"Weather"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Past 12 hours")," from the Display range dropdown list.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Capability"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the capability list, select ",(0,r.kt)("strong",{parentName:"p"},"temperature"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Capability"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the capability list, select ",(0,r.kt)("strong",{parentName:"p"},"pressure"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Capability"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the capability list, select ",(0,r.kt)("strong",{parentName:"p"},"humidity"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Capability"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the capability list, select ",(0,r.kt)("strong",{parentName:"p"},"Wind speed"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Update"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Save"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Back"),"."))),(0,r.kt)("h2",{id:"add-a-pollution-data-visualization-view"},"Add a pollution data visualization view"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the left pane, select ",(0,r.kt)("strong",{parentName:"p"},"Views"),", and then select the ",(0,r.kt)("strong",{parentName:"p"},"Visualizing the device")," tile."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"The image shows how to select visualizing the device",src:a(1068).Z,width:"1200",height:"559"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Name the view ",(0,r.kt)("strong",{parentName:"p"},"pollution"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Line chart")," from the ",(0,r.kt)("strong",{parentName:"p"},"Start with a visual")," list, then select ",(0,r.kt)("strong",{parentName:"p"},"Add tile"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Size available")," icon on the tile, and select ",(0,r.kt)("strong",{parentName:"p"},"4x4"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Edit")," icon on the tile.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Name the chart ",(0,r.kt)("strong",{parentName:"p"},"Pollution"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Past 12 hours")," from the Display range dropdown list.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Capability"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the capability list, select ",(0,r.kt)("strong",{parentName:"p"},"aqi"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Repeat adding capabilities, and add the following capabilities."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"co (carbon monoxide)"),(0,r.kt)("li",{parentName:"ol"},"nh3 (ammonia)"),(0,r.kt)("li",{parentName:"ol"},"no (nitrous oxide)"),(0,r.kt)("li",{parentName:"ol"},"no2 (nitrous dioxide)"),(0,r.kt)("li",{parentName:"ol"},"o3 (ozone)"),(0,r.kt)("li",{parentName:"ol"},"pm10 (particulate matter 10)"),(0,r.kt)("li",{parentName:"ol"},"pm2_5 (particulate matter 2.5)"),(0,r.kt)("li",{parentName:"ol"},"so2 (sulphur dioxide)"),(0,r.kt)("li",{parentName:"ol"},"Wind speed")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Notes. Pollutants produced by vehicle exhausts include carbon monoxide, hydrocarbons, nitrogen oxides, particles, volatile organic compounds, and sulfur dioxide. Hydrocarbons and nitrogen oxides react with sunlight and warm temperatures to form ground-level ozone. Ground-level ozone, a key ingredient in smog, can cause upper respiratory problems and lung damage.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Update"),"."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Save"),"."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Back"),".")),(0,r.kt)("h2",{id:"customize-the-led-brightness-property"},"Customize the LED brightness property"),(0,r.kt)("p",null,"If you have a Raspberry Pi with a Pi Sense HAT then customize the LED Brightness property. You can use this property to set the brightness of the Pi Sense HAT 8x8 LED panel."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the left pane, select ",(0,r.kt)("strong",{parentName:"p"},"Device templates"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the left pane, select ",(0,r.kt)("strong",{parentName:"p"},"Customize"),", and then expand the ",(0,r.kt)("strong",{parentName:"p"},"LED brightness")," property."),(0,r.kt)("p",{parentName:"li"},"Update the property by using the information from the following table"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"The image shows how to customize the Climate monitor template",src:a(7633).Z,width:"1520",height:"700"})),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Display","\xa0","name"),(0,r.kt)("th",{parentName:"tr",align:null},"Initial","\xa0","value"),(0,r.kt)("th",{parentName:"tr",align:null},"Min.","\xa0","value"),(0,r.kt)("th",{parentName:"tr",align:null},"Max.","\xa0","value"),(0,r.kt)("th",{parentName:"tr",align:null},"True","\xa0","name"),(0,r.kt)("th",{parentName:"tr",align:null},"False","\xa0","name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LED brightness"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."))),(0,r.kt)("h3",{id:"publish-the-template"},"Publish the template"),(0,r.kt)("p",null,"To publish the template to the Azure IoT Central application, select the ",(0,r.kt)("strong",{parentName:"p"},"Publish")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The image shows how to select publish",src:a(1527).Z,width:"1023",height:"400"})),(0,r.kt)("h2",{id:"view-your-altair-emulator-device"},"View your Altair emulator device"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the left pane, select ",(0,r.kt)("strong",{parentName:"p"},"Devices"),", select the ",(0,r.kt)("strong",{parentName:"p"},"Climate monitor")," template and then select your device.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To explore the device views, select the various tabs."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"The image shows the IoT Central device tab",src:a(5818).Z,width:"1247",height:"833"})))),(0,r.kt)("h2",{id:"explore-climate-data-from-iot-central"},"Explore climate data from IoT Central"),(0,r.kt)("p",null,"You can explore and analyze data from Azure IoT Central. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On the left pane, select ",(0,r.kt)("strong",{parentName:"li"},"Data explorer"),"."),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"+ New Query"),"."),(0,r.kt)("li",{parentName:"ol"},"Select the Climate monitor ",(0,r.kt)("strong",{parentName:"li"},"Device group"),"."),(0,r.kt)("li",{parentName:"ol"},"Select the temperature ",(0,r.kt)("strong",{parentName:"li"},"Telemetry"),"."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Group by")," Device ID."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Analyze"),"."),(0,r.kt)("li",{parentName:"ol"},"Select the data time frame you would like to explore."),(0,r.kt)("li",{parentName:"ol"},"Select data time frame you would like to zoom into.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"This image shows the data explorer visualization",src:a(7800).Z,width:"1014",height:"791"})))}c.isMDXComponent=!0},7800:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/iot-central-data-explorer-60a332b8d1fa2a5e830f5636536308b1.png"},5818:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/iot-central-device-tabs-1b38ed223539fbb7e93a491368174e50.png"},9146:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/iot-central-properties-summary-9658100c5531f9f2ce814c47ae152781.png"},7633:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/iot-central-template-customize-40bfb8f05978b786a51feca128000a1f.png"},1808:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/iot-central-template-properties-select-properties-229d75ec890ec8079e9d6c3e3de1cac9.png"},1527:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/iot-central-template-publish-8c653b6f47d85e7d3fce4bc7612ed83d.png"},3695:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/iot-central-view-properties-create-c15edb6f9a76dd538731e1006a3532e5.png"},1068:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/iot-central-visualize-create-38e40c4c2e032427ef19168f0eff7df1.png"}}]);
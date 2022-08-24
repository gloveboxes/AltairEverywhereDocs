"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[3522],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,g=m["".concat(i,".").concat(d)]||m[d]||p[d]||n;return r?a.createElement(g,l(l({ref:t},s),{},{components:r})):a.createElement(g,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var u=2;u<n;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>u});var a=r(7462),o=(r(7294),r(3905));const n={},l="Create Azure resources",c={unversionedId:"everywhere/Azure-anomaly-detector/Climate-anomaly-detection",id:"everywhere/Azure-anomaly-detector/Climate-anomaly-detection",title:"Create Azure resources",description:"We need to create the following resources:",source:"@site/docs/everywhere/05-Azure-anomaly-detector/18-Climate-anomaly-detection.md",sourceDirName:"everywhere/05-Azure-anomaly-detector",slug:"/everywhere/Azure-anomaly-detector/Climate-anomaly-detection",permalink:"/altair_8800_posix_docs/everywhere/Azure-anomaly-detector/Climate-anomaly-detection",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_posix_docs/tree/main/docs/everywhere/05-Azure-anomaly-detector/18-Climate-anomaly-detection.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{},sidebar:"everywhere",previous:{title:"Azure cloud services",permalink:"/altair_8800_posix_docs/everywhere/Azure-anomaly-detector/Integrate-with-Azure-Services"},next:{title:"Export IoT Central data",permalink:"/altair_8800_posix_docs/everywhere/Azure-anomaly-detector/Export-IoT-Central-Data"}},i={},u=[{value:"Install the Azure CLI tools",id:"install-the-azure-cli-tools",level:2},{value:"Login into your Azure subscription",id:"login-into-your-azure-subscription",level:2},{value:"Generate list of Azure locations",id:"generate-list-of-azure-locations",level:3},{value:"Create a resource group",id:"create-a-resource-group",level:3},{value:"Create an Azure Storage account",id:"create-an-azure-storage-account",level:2},{value:"Create an Azure Storage account environment variable",id:"create-an-azure-storage-account-environment-variable",level:3},{value:"Create the Azure Storage Account",id:"create-the-azure-storage-account",level:3},{value:"Get the Azure Storage Account connection string",id:"get-the-azure-storage-account-connection-string",level:2},{value:"Create an Azure Storage Account Container",id:"create-an-azure-storage-account-container",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-azure-resources"},"Create Azure resources"),(0,o.kt)("p",null,"We need to create the following resources:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Azure Event Hub that will receive data from Azure IoT Central."),(0,o.kt)("li",{parentName:"ol"},"Azure Stream Analytics Service to process and normalize the data from IoT Central."),(0,o.kt)("li",{parentName:"ol"},"Azure Storage to store the data.")),(0,o.kt)("p",null,"For more information, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/storage/common/storage-account-create?tabs=azure-cli"},"Create a storage account"),"."),(0,o.kt)("h2",{id:"install-the-azure-cli-tools"},"Install the Azure CLI tools"),(0,o.kt)("p",null,"If you haven't installed the Azure CLI tools then follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"},"How to install the Azure CLI")," guide to install the Azure CLI on your computer."),(0,o.kt)("h2",{id:"login-into-your-azure-subscription"},"Login into your Azure subscription"),(0,o.kt)("p",null,"From a command prompt, run the following command to login to your Azure account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"az login\n")),(0,o.kt)("h3",{id:"generate-list-of-azure-locations"},"Generate list of Azure locations"),(0,o.kt)("p",null,"List the Azure Locations to determine the location closest to you."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"az account list-locations -o table\n")),(0,o.kt)("h3",{id:"create-a-resource-group"},"Create a resource group"),(0,o.kt)("p",null,"The following command will create a resource group at location ",(0,o.kt)("strong",{parentName:"p"},"westus"),". Replace this location with your preferred location from the location list. A resource group is an administrative unit that keeps all related services together."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"az group create --name ClimateMonitor --location westus\n")),(0,o.kt)("h2",{id:"create-an-azure-storage-account"},"Create an Azure Storage account"),(0,o.kt)("p",null,"Climate data from the Altair emulator will be stored in an Azure Storage Account for analysis."),(0,o.kt)("h3",{id:"create-an-azure-storage-account-environment-variable"},"Create an Azure Storage account environment variable"),(0,o.kt)("p",null,"An Azure Storage Account must have a globally unique name. Append lower case characters to the end of ",(0,o.kt)("strong",{parentName:"p"},"weatherstorage"),". For example, a unique Azure Storage Account name could be ",(0,o.kt)("strong",{parentName:"p"},"weatherstoragedng"),"."),(0,o.kt)("h3",{id:"create-the-azure-storage-account"},"Create the Azure Storage Account"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"az storage account create -n weatherstorage<append_unique_letters> -g ClimateMonitor --sku Standard_LRS\n")),(0,o.kt)("h2",{id:"get-the-azure-storage-account-connection-string"},"Get the Azure Storage Account connection string"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"az storage account show-connection-string -n <REPLACE_WITH_NAME_OF_STORAGE_ACCOUNT_CREATED> -g ClimateMonitor \n")),(0,o.kt)("p",null,"Save the Azure Storage Account connection string somewhere safe as you'll need it when exporting data from IoT Central."),(0,o.kt)("h2",{id:"create-an-azure-storage-account-container"},"Create an Azure Storage Account Container"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'az storage container create --name weather --account-name  weatherstorage<append_unique_letters> --connection-string "REPLACE_WITH_STORAGE_ACCOUNT_CONNECTION_STRING"\n')))}p.isMDXComponent=!0}}]);
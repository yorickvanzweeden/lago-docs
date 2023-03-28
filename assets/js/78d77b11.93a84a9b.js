"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[7726],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),y=i,g=d["".concat(s,".").concat(y)]||d[y]||p[y]||o;return a?n.createElement(g,r(r({ref:t},u),{},{components:a})):n.createElement(g,r({ref:t},u))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},11330:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const o={sidebar_position:1},r="Airbyte (ETL)",l={unversionedId:"integrations/data/airbyte",id:"integrations/data/airbyte",title:"Airbyte (ETL)",description:"Airbyte is an open-source data integration platform used as an ETL. With this integration, you can connect Lago billing data to any warehouses.",source:"@site/docs/integrations/03_data/airbyte.md",sourceDirName:"integrations/03_data",slug:"/integrations/data/airbyte",permalink:"/docs/integrations/data/airbyte",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"integrations",previous:{title:"Data",permalink:"/docs/category/data"},next:{title:"Entitlements",permalink:"/docs/category/entitlements"}},s={},c=[{value:"Destinations",id:"destinations",level:2},{value:"Data available for extraction",id:"data-available-for-extraction",level:2},{value:"1. Connect Lago to Airbyte",id:"1-connect-lago-to-airbyte",level:2},{value:"2. Select a destination",id:"2-select-a-destination",level:2},{value:"3. Sync billing data",id:"3-sync-billing-data",level:2},{value:"4. Query Lago billing data",id:"4-query-lago-billing-data",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"airbyte-etl"},"Airbyte (ETL)"),(0,i.kt)("p",null,"Airbyte is an open-source ",(0,i.kt)("strong",{parentName:"p"},"data integration platform")," used as an ETL. With this integration, you can connect Lago billing data to any warehouses."),(0,i.kt)("h2",{id:"destinations"},"Destinations"),(0,i.kt)("p",null,"You can push Lago billing data to destinations such as Snowflake, BigQuery, Redshift, S3 buckets or Azure, for instance.\nThe entire list of data destinations enabled by Airbyte is listed on their ",(0,i.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/category/destinations/"},"destinations documentation"),"."),(0,i.kt)("h2",{id:"data-available-for-extraction"},"Data available for extraction"),(0,i.kt)("p",null,"With Airbyte's native integration of Lago, you can push the following billing data to warehouses:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"billable_metrics"),(0,i.kt)("li",{parentName:"ul"},"plans"),(0,i.kt)("li",{parentName:"ul"},"coupons"),(0,i.kt)("li",{parentName:"ul"},"add_ons"),(0,i.kt)("li",{parentName:"ul"},"invoices"),(0,i.kt)("li",{parentName:"ul"},"customers"),(0,i.kt)("li",{parentName:"ul"},"subscriptions")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"At present this connector ",(0,i.kt)("strong",{parentName:"p"},"only supports full refresh syncs")," meaning that each time you use the connector it will sync all available records from scratch. Please use cautiously if you expect your API to have a lot of records.")),(0,i.kt)("p",null,"Find the full documentation of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/getlago/"},"Airbyte's native Lago integration"),"."),(0,i.kt)("h2",{id:"1-connect-lago-to-airbyte"},"1. Connect Lago to Airbyte"),(0,i.kt)("p",null,"First of all, you simply need to bring your Lago private API key.\nIn airbyte: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Sources"),";"),(0,i.kt)("li",{parentName:"ul"},"Select getLago as a source of data; and"),(0,i.kt)("li",{parentName:"ul"},"Paste your Lago private API key.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lago data source in Airbyte",src:a(696).Z,width:"2858",height:"1466"})),(0,i.kt)("h2",{id:"2-select-a-destination"},"2. Select a destination"),(0,i.kt)("p",null,"You can select any of the data destinations available in Airbyte. It could be a warehouse (BigQuery, Redshift, Snowflake...) or a file storage tool (S3, for instance). Please find here the entire list of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/category/destinations/"},"data destinations available in Airbyte"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Destination in Airbyte",src:a(71580).Z,width:"2674",height:"866"})),(0,i.kt)("h2",{id:"3-sync-billing-data"},"3. Sync billing data"),(0,i.kt)("p",null,"In the following example, we connected Lago billing data to Snowflake data warehouse. Obviously, you can select another destination if needed. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("strong",{parentName:"li"},"data sync")," between Lago source and your destination;"),(0,i.kt)("li",{parentName:"ol"},"Define a ",(0,i.kt)("strong",{parentName:"li"},"sync frequency"),"; and"),(0,i.kt)("li",{parentName:"ol"},"Activate the sync in Airbyte between Lago source and your destination.")),(0,i.kt)("p",null,"This action will populate Lago billing data into a warehouse (Snowflake in our example).\n",(0,i.kt)("img",{alt:"Lago data in Snowflake",src:a(82602).Z,width:"2332",height:"786"})),(0,i.kt)("h2",{id:"4-query-lago-billing-data"},"4. Query Lago billing data"),(0,i.kt)("p",null,"Once the data has been populated in your destination, a warehouse in our example, you can easily query your billing data. Here is a query calculating your monthly revenue with Lago:\n",(0,i.kt)("img",{alt:"Query in snowflake",src:a(545).Z,width:"1646",height:"1362"})))}p.isMDXComponent=!0},71580:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/destination-airbyte-52676d7f8ffd515d98027fbe02eb2b05.png"},545:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example-billing-query-snowflake-a4cf76e6bca92363215567a0e4e51f06.png"},696:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lago-airbyte-source-e56dc399ab95d5f523683b5c62f3b3e5.png"},82602:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lago-data-snowflake-ec9a012ccb50edc332d6750de7246076.png"}}]);
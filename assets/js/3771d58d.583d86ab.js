"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[2947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(n),d=a,m=g["".concat(c,".").concat(d)]||g[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={date:"2022-06-10T10:00"},i="Event debugger",l={permalink:"/changelog/event-debugger",editUrl:"changelog/changelog/event-debugger.md",source:"@site/changelog/event-debugger.md",title:"Event debugger",description:"You are now able to view all the ingested events sent from your application to Lago.",date:"2022-06-10T10:00:00.000Z",formattedDate:"June 10, 2022",tags:[],readingTime:.605,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-06-10T10:00"},prevItem:{title:"Percentage charge model",permalink:"/changelog/percentage-charge-model"},nextItem:{title:"Add-ons",permalink:"/changelog/ftr-addons"}},c={authorsImageUrls:[]},p=[],s={toc:p},g="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(g,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You are now able to view all the ingested events sent from your application to Lago.\nWe called this feature ",(0,a.kt)("inlineCode",{parentName:"p"},"debugger")," because it makes the event ingestion easier and more understandable."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Access the ",(0,a.kt)("inlineCode",{parentName:"li"},"Developer")," sidebar item;"),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("inlineCode",{parentName:"li"},"Debugger")," tab; and"),(0,a.kt)("li",{parentName:"ol"},"Take a look at the latest events ingested")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If an event you sent is not shown in the UI, it means that it has not been ingested by Lago")),(0,a.kt)("p",null,"This debugger is also helpul to warn you for 2 specific cases:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Warning 1")," - The event code is not related to an existing billable metric"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Warning 2")," - The property sent does not match the aggregation property defined in your billable metric")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Debugger",src:n(57898).Z,width:"2402",height:"1296"})))}u.isMDXComponent=!0},57898:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/events-debugger-6bcbcf7e46f1bd4bb8a9b6e6964bba69.png"}}]);
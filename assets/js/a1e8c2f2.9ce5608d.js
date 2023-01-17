"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[9804],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1735:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={date:"2023-01-12T11:00"},i="Grace period \u2728",l={permalink:"/changelog/grace-period",editUrl:"changelog/changelog/grace-period.md",source:"@site/changelog/grace-period.md",title:"Grace period \u2728",description:"This feature is only available to users with a premium license. Please contact us to get access to Lago Cloud and Lago Self-Hosted Premium.",date:"2023-01-12T11:00:00.000Z",formattedDate:"January 12, 2023",tags:[],readingTime:.755,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-01-12T11:00"},nextItem:{title:"Invoice list",permalink:"/changelog/invoice-list"}},c={authorsImageUrls:[]},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Premium feature",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This feature is only available to users with a premium license. Please ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"mailto:hello@getlago.com"},"contact us"))," to get access to Lago Cloud and Lago Self-Hosted Premium.")),(0,a.kt)("p",null,"If at the end of the billing period, you want to review the invoices before sending them to customers for payment, you can define a ",(0,a.kt)("a",{parentName:"p",href:"../docs/guide/invoicing/grace-period"},"grace period"),"."),(0,a.kt)("p",null,"During the grace period, invoices are in ",(0,a.kt)("inlineCode",{parentName:"p"},"draft")," status and can be modified. Available actions include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Adding usage records")," by sending events with a ",(0,a.kt)("inlineCode",{parentName:"li"},"timestamp")," within the relevant billing period;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Applying coupons")," to the customer's account; and"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Adding credits")," to the customer's wallet and credit note wallet.")),(0,a.kt)("p",null,"When the grace period expires, invoices are automatically ",(0,a.kt)("inlineCode",{parentName:"p"},"finalized")," (they can no longer be edited), which triggers the ",(0,a.kt)("inlineCode",{parentName:"p"},"invoice.created")," ",(0,a.kt)("a",{parentName:"p",href:"../docs/api/webhooks/messages"},"webhook"),". You can also finalize invoices manually."),(0,a.kt)("p",null,"The organization's grace period applies to all customers by default, but it can be overwritten by the customer's grace period."))}u.isMDXComponent=!0}}]);
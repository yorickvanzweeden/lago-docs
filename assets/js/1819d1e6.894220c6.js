"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[7123],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||g[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43974:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={date:"2022-09-08T10:00"},i="Recurring count",c={permalink:"/changelog/recurring-count",editUrl:"changelog/changelog/recurring-count.md",source:"@site/changelog/recurring-count.md",title:"Recurring count",description:"Companies with fair and transparent pricing models are often praised by customers. If you are considering implementing seat-based pricing for instance, the reccuring_count aggregation is exactly what you need.",date:"2022-09-08T10:00:00.000Z",formattedDate:"September 8, 2022",tags:[],readingTime:.77,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-09-08T10:00"},prevItem:{title:"Invite members",permalink:"/changelog/invite-members"},nextItem:{title:"API changes - External IDs",permalink:"/changelog/external-ids"}},l={authorsImageUrls:[]},s=[],u={toc:s},p="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Companies with fair and transparent pricing models are often praised by customers. If you are considering implementing seat-based pricing for instance, the ",(0,o.kt)("inlineCode",{parentName:"p"},"reccuring_count")," aggregation is exactly what you need."),(0,o.kt)("p",null,"This new aggregation type allows you to push events for persistent units."),(0,o.kt)("p",null,"Consider the following example:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Your customer is on a monthly plan and adds a new user to their account on September 15th, so you generate an event that corresponds to one billing unit."),(0,o.kt)("p",{parentName:"blockquote"},"At the end of September, Lago will automatically create a prorated charge for this user, based on the number of days of activity (i.e. from September 15th to September 30th)."),(0,o.kt)("p",{parentName:"blockquote"},"This billing unit will remain valid until you generate another event to remove it. For instance, if your customer deletes the user on October 22nd, Lago will create another prorated charge for the period October 1st to October 22nd.")),(0,o.kt)("p",null,"Consult ",(0,o.kt)("a",{parentName:"p",href:"../docs/guide/billable-metrics/aggregation-types#persistent-aggregation-types"},"our guide")," to learn more about persistent units."))}g.isMDXComponent=!0}}]);
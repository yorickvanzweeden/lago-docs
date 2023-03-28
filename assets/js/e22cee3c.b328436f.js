"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[7782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,d=u["".concat(c,".").concat(y)]||u[y]||f[y]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},12795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={date:"2022-07-04T10:00"},o="Weekly plan interval",i={permalink:"/changelog/weekly-interval",editUrl:"changelog/changelog/weekly-interval.md",source:"@site/changelog/weekly-interval.md",title:"Weekly plan interval",description:"When setting up a plan, you can select the weekly interval to define a weekly billing period.",date:"2022-07-04T10:00:00.000Z",formattedDate:"July 4, 2022",tags:[],readingTime:.54,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-07-04T10:00"},prevItem:{title:"Integration with Stripe Payments",permalink:"/changelog/stripe-integration"},nextItem:{title:"Invoice monthly charges for a plan paid yearly",permalink:"/changelog/billable-metric-monthly-for-plan-yearly"}},c={authorsImageUrls:[]},p=[],s={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When setting up a plan, you can select the weekly interval to define a weekly billing period."),(0,a.kt)("p",null,"The plan interval applies to the subscription and charges, which means that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For plans that must be paid in advance, the subscription fee is invoiced at the beginning of the week;"),(0,a.kt)("li",{parentName:"ul"},"For plans that are paid in arrears, the subscription fee is invoiced at the end of the week; and"),(0,a.kt)("li",{parentName:"ul"},"Usage is calculated at the end of each week.")),(0,a.kt)("p",null,"The week starts on Monday and ends on Sunday. If the customer's subscription starts in the middle of the week, the fees will be applied on a pro-rata basis."))}f.isMDXComponent=!0}}]);
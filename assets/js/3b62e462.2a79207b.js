"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[1881],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={date:"2022-11-10T11:00"},o="Dimensions for grouping events",l={permalink:"/changelog/dimensions",editUrl:"changelog/changelog/dimensions.md",source:"@site/changelog/dimensions.md",title:"Dimensions for grouping events",description:"When creating a new billable metric, you can define dimensions that will be used to group events according to their properties.",date:"2022-11-10T11:00:00.000Z",formattedDate:"November 10, 2022",tags:[],readingTime:.585,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-11-10T11:00"},prevItem:{title:"Integration with GoCardless",permalink:"/changelog/gocardless-integration"},nextItem:{title:"Invoice details",permalink:"/changelog/invoice-details"}},c={authorsImageUrls:[]},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When creating a new billable metric, you can define dimensions that will be used to group events according to their properties."),(0,a.kt)("p",null,"For example, if you want to charge your customers for compute capacity according to the cloud provider and server region, you can create a ",(0,a.kt)("inlineCode",{parentName:"p"},"compute")," billable metric with two dimensions (",(0,a.kt)("a",{parentName:"p",href:"../docs/guide/billable-metrics/dimensions"},"learn more"),")."),(0,a.kt)("p",null,"Changes to the API include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ability to add a ",(0,a.kt)("inlineCode",{parentName:"li"},"group")," parameter with one or two dimensions when ",(0,a.kt)("a",{parentName:"li",href:"../docs/api/billable_metrics/create-billable-metric"},"creating")," or ",(0,a.kt)("a",{parentName:"li",href:"../docs/api/billable_metrics/update-billable-metric"},"updating")," billable metrics;"),(0,a.kt)("li",{parentName:"ul"},"Ability to ",(0,a.kt)("a",{parentName:"li",href:"../docs/api/billable_metrics/get-all-groups"},"retrieve the groups")," associated with a billable metric;"),(0,a.kt)("li",{parentName:"ul"},"Ability to add a ",(0,a.kt)("inlineCode",{parentName:"li"},"group_properties")," parameter when ",(0,a.kt)("a",{parentName:"li",href:"../docs/api/plans/create-plan"},"creating")," or ",(0,a.kt)("a",{parentName:"li",href:"../docs/api/plans/update-plan"},"updating")," a plan;"),(0,a.kt)("li",{parentName:"ul"},"Ability to retrieve ",(0,a.kt)("a",{parentName:"li",href:"../docs/api/customer_usage/customer-usage-object"},"customer usage")," by group; and"),(0,a.kt)("li",{parentName:"ul"},"New ",(0,a.kt)("inlineCode",{parentName:"li"},"lago_group_id")," for fees (see ",(0,a.kt)("a",{parentName:"li",href:"../docs/api/invoices/invoice-object"},"invoice object"),").")))}u.isMDXComponent=!0}}]);
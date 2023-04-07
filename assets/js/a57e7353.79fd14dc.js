"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[6973],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=u(n),k=a,s=m["".concat(i,".").concat(k)]||m[k]||c[k]||l;return n?r.createElement(s,o(o({ref:e},d),{},{components:n})):r.createElement(s,o({ref:e},d))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[m]="string"==typeof t?t:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},52698:(t,e,n)=>{n.r(e),n.d(e,{Comment:()=>c,NotNullable:()=>m,Type:()=>d,assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:1},o="Coupon object",p={unversionedId:"api/coupons/coupon-object",id:"api/coupons/coupon-object",title:"Coupon object",description:"This object represents a coupon.",source:"@site/docs/api/09_coupons/coupon-object.mdx",sourceDirName:"api/09_coupons",slug:"/api/coupons/coupon-object",permalink:"/docs/api/coupons/coupon-object",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"Coupons",permalink:"/docs/category/coupons"},next:{title:"Create coupon",permalink:"/docs/api/coupons/create-coupon"}},i={},u=[{value:"Schema",id:"schema",level:2},{value:"Deprecated arguments",id:"deprecated-arguments",level:3}],d=t=>{let{children:e,color:n}=t;return(0,a.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},e)},m=t=>{let{children:e,color:n}=t;return(0,a.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},e)},c=t=>{let{children:e,color:n}=t;return(0,a.kt)("span",{style:{fontSize:"12px"}},e)},k={toc:u,Type:d,NotNullable:m,Comment:c},s="wrapper";function y(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"coupon-object"},"Coupon object"),(0,a.kt)("p",null,"This object represents a coupon.",(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"schema"},"Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "coupon": {\n    "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n    "name": "coupon_name",\n    "code": "coupon_code",\n    "amount_cents": 5000,\n    "amount_currency": "USD",\n    "percentage_rate": null,\n    "coupon_type": "fixed_amount",\n    "reusable": true,\n    "limited_plans": true,\n    "plan_codes": ["code1"],\n    "frequency": "recurring",\n    "frequency_duration": 3,\n    "expiration": "time_limit",\n    "expiration_at": "2022-08-08T23:59:59Z",\n    "created_at": "2022-04-29T08:59:51Z"\n  }\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,a.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Unique identifier of the coupon in Lago application.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"name")," ","\xa0"," ","\xa0"," ",(0,a.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Coupon name.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"code")," ","\xa0"," ","\xa0"," ",(0,a.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Code identifying the coupon.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,a.kt)(d,{mdxType:"Type"},"Integer")),(0,a.kt)("td",{parentName:"tr",align:null},"Amount in cents.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,a.kt)(d,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Currency of the amount.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"reusable")," ","\xa0"," ","\xa0"," ",(0,a.kt)(d,{mdxType:"Type"},"Boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"Field specifying if coupon is reusable or not.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"limited_plans")," ","\xa0"," ","\xa0"," ",(0,a.kt)(d,{mdxType:"Type"},"Boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"Field specifying if coupon has plan limitations or not.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"plan_codes")," ","\xa0"," ","\xa0"," ",(0,a.kt)(d,{mdxType:"Type"},"Array")),(0,a.kt)("td",{parentName:"tr",align:null},"Field specifying related plan codes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"expiration")," ","\xa0"," ","\xa0"," ",(0,a.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null"),(0,a.kt)("br",null)),(0,a.kt)("td",{parentName:"tr",align:null},"Expiration type. ",(0,a.kt)("br",null)," ",(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("strong",{parentName:"td"},"Possible values")),(0,a.kt)("div",null,"- ",(0,a.kt)("inlineCode",{parentName:"td"},"time_limit"),(0,a.kt)("br",null),"- ",(0,a.kt)("inlineCode",{parentName:"td"},"no_expiration"),(0,a.kt)("div",null))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"expiration_at")," ","\xa0"," ","\xa0"," ",(0,a.kt)(d,{mdxType:"Type"},"String")," ",(0,a.kt)("br",null),(0,a.kt)(c,{mdxType:"Comment"},(0,a.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,a.kt)("td",{parentName:"tr",align:null},"Expiration date and time of the coupon.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"coupon_type")," ","\xa0"," ","\xa0"," ",(0,a.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null"),(0,a.kt)("br",null)),(0,a.kt)("td",{parentName:"tr",align:null},"Coupon type. ",(0,a.kt)("br",null)," ",(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("strong",{parentName:"td"},"Possible values")),(0,a.kt)("div",null,"- ",(0,a.kt)("inlineCode",{parentName:"td"},"fixed_amount"),(0,a.kt)("br",null),"- ",(0,a.kt)("inlineCode",{parentName:"td"},"percentage"),(0,a.kt)("div",null))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"percentage_rate")," ","\xa0"," ","\xa0"," ",(0,a.kt)(d,{mdxType:"Type"},"Float")),(0,a.kt)("td",{parentName:"tr",align:null},"Percentage rate of the coupon.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"frequency")," ","\xa0"," ","\xa0"," ",(0,a.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null"),(0,a.kt)("br",null)),(0,a.kt)("td",{parentName:"tr",align:null},"Frequency type. ",(0,a.kt)("br",null)," ",(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("strong",{parentName:"td"},"Possible values")),(0,a.kt)("div",null,"- ",(0,a.kt)("inlineCode",{parentName:"td"},"once"),(0,a.kt)("br",null),"- ",(0,a.kt)("inlineCode",{parentName:"td"},"recurring"),(0,a.kt)("div",null))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"frequency_duration")," ","\xa0"," ","\xa0"," ",(0,a.kt)(d,{mdxType:"Type"},"Integer")),(0,a.kt)("td",{parentName:"tr",align:null},"It determines the number of billing periods to which the coupon applies")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"created_at")," ","\xa0"," ","\xa0"," ",(0,a.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null")," ","\xa0"," ","\xa0"," ",(0,a.kt)("br",null),(0,a.kt)(c,{mdxType:"Comment"},(0,a.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,a.kt)("td",{parentName:"tr",align:null},"Date of coupon creation.")))),(0,a.kt)("h3",{id:"deprecated-arguments"},"Deprecated arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"expiration_date")," ","\xa0"," ","\xa0"," ",(0,a.kt)(d,{mdxType:"Type"},"String")," ",(0,a.kt)("br",null),(0,a.kt)(c,{mdxType:"Comment"},(0,a.kt)("em",{parentName:"td"},"ISO 8601 date in UTC"))),(0,a.kt)("td",{parentName:"tr",align:null},"Expiration date of the coupon.")))))}y.isMDXComponent=!0}}]);
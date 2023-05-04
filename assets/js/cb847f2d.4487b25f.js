"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[268],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),i=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=i(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=d(t,["components","mdxType","originalType","parentName"]),m=i(n),s=a,y=m["".concat(p,".").concat(s)]||m[s]||u[s]||o;return n?r.createElement(y,l(l({ref:e},c),{},{components:n})):r.createElement(y,l({ref:e},c))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=s;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[m]="string"==typeof t?t:a,l[1]=d;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6535:(t,e,n)=>{n.r(e),n.d(e,{Comment:()=>u,NotNullable:()=>m,Type:()=>c,assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1},l="Add-on object",d={unversionedId:"api/add_ons/add-on-object",id:"api/add_ons/add-on-object",title:"Add-on object",description:"This object represents an add-on.",source:"@site/docs/api/08_add_ons/add-on-object.mdx",sourceDirName:"api/08_add_ons",slug:"/api/add_ons/add-on-object",permalink:"/docs/api/add_ons/add-on-object",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"Add-ons",permalink:"/docs/category/add-ons"},next:{title:"Create add-on",permalink:"/docs/api/add_ons/create-add-on"}},p={},i=[{value:"Schema",id:"schema",level:2}],c=t=>{let{children:e,color:n}=t;return(0,a.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},e)},m=t=>{let{children:e,color:n}=t;return(0,a.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},e)},u=t=>{let{children:e,color:n}=t;return(0,a.kt)("span",{style:{fontSize:"12px"}},e)},s={toc:i,Type:c,NotNullable:m,Comment:u},y="wrapper";function k(t){let{components:e,...n}=t;return(0,a.kt)(y,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"add-on-object"},"Add-on object"),(0,a.kt)("p",null,"This object represents an add-on.",(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"schema"},"Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "add_on": {\n    "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n    "name": "add_on_name",\n    "code": "add_on_code",\n    "amount_cents": 5000,\n    "amount_currency": "USD",\n    "description": "description",\n    "created_at": "2022-04-29T08:59:51Z"\n  }\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,a.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Unique identifier of the add-on in Lago application.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"name")," ","\xa0"," ","\xa0"," ",(0,a.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Add-on name.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"code")," ","\xa0"," ","\xa0"," ",(0,a.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Code identifying the add-on.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,a.kt)(c,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Amount in cents (excluding tax).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,a.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Currency of the amount.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"description")," ","\xa0"," ","\xa0"," ",(0,a.kt)(c,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Description.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"created_at")," ","\xa0"," ","\xa0"," ",(0,a.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null")," ","\xa0"," ","\xa0"," ",(0,a.kt)("br",null),(0,a.kt)(u,{mdxType:"Comment"},(0,a.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,a.kt)("td",{parentName:"tr",align:null},"Date of add-on creation.")))))}k.isMDXComponent=!0}}]);
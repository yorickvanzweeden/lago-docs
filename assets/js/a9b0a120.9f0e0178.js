"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[8672],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=u(n),s=a,k=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(k,o(o({ref:e},c),{},{components:n})):r.createElement(k,o({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},57008:(t,e,n)=>{n.r(e),n.d(e,{Comment:()=>d,NotNullable:()=>m,Type:()=>c,assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:1},o="Fee object",i={unversionedId:"api/fees/fee-object",id:"api/fees/fee-object",title:"Fee object",description:"This object represents a line item of an invoice, handling amount, billed units and item description",source:"@site/docs/api/11_fees/fee-object.mdx",sourceDirName:"api/11_fees",slug:"/api/fees/fee-object",permalink:"/docs/api/fees/fee-object",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"Fees",permalink:"/docs/category/fees"},next:{title:"Get a specific fee",permalink:"/docs/api/fees/get_fee"}},p={},u=[{value:"Fee object",id:"fee-object-1",level:2}],c=t=>{let{children:e,color:n}=t;return(0,a.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},e)},m=t=>{let{children:e,color:n}=t;return(0,a.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},e)},d=t=>{let{children:e,color:n}=t;return(0,a.kt)("span",{style:{fontSize:"12px"}},e)},s={toc:u,Type:c,NotNullable:m,Comment:d},k="wrapper";function y(t){let{components:e,...n}=t;return(0,a.kt)(k,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fee-object"},"Fee object"),(0,a.kt)("p",null,"This object represents a line item of an invoice, handling amount, billed units and item description"),(0,a.kt)("h2",{id:"fee-object-1"},"Fee object"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "lago_id": "6be23c42-47d2-45a3-9770-5b3572f225c3",\n  "lago_group_id": "5b4881e3-b451-472e-9e03-d99379550743",\n  "item": {\n    "type": "subscription",\n    "code": "plan_code",\n    "name": "Plan"\n  },\n  "amount_cents": 100,\n  "amount_currency": "EUR",\n  "vat_amount_cents": 20,\n  "vat_amount_currency": "EUR",\n  "total_amount_cents": 120,\n  "total_amount_currency": "EUR",\n  "units": "0.32",\n  "events_count": 23\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,a.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Unique identifer of the fee in Lago application")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"lago_group_id")," ","\xa0"," ","\xa0"," ",(0,a.kt)(c,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Unique identifer of the group in Lago application")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"item")," ","\xa0"," ","\xa0"," ",(0,a.kt)(c,{mdxType:"Type"},"JSON")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Item attached to the fee. ",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Always have 3 attributes:"),(0,a.kt)("br",null),"- ",(0,a.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"charge")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"subscription"),(0,a.kt)("br",null),"- ",(0,a.kt)("inlineCode",{parentName:"td"},"code"),": Code of the plan or of the billable metric attached to the fee.",(0,a.kt)("br",null),"- ",(0,a.kt)("inlineCode",{parentName:"td"},"name"),": Name of the plan of of the billable metric attached to the fee")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,a.kt)(c,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Amount in cents of the fee, VAT excluded")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,a.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Currency of the amount")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"vat_amount_cents")," ","\xa0"," ","\xa0"," ",(0,a.kt)(c,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"VAT amount in cents")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"vat_amount_currency")," ","\xa0"," ","\xa0"," ",(0,a.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Currency of the VAT amount")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"total_amount_cents")," ","\xa0"," ","\xa0"," ",(0,a.kt)(c,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Total amount in cents")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"total_amount_currency")," ","\xa0"," ","\xa0"," ",(0,a.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Currency of the total amount")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"units"),"  ","\xa0"," ","\xa0"," ",(0,a.kt)(c,{mdxType:"Type"},"String (Decimal)")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Units used to charge the customer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"events_count"),"  ","\xa0"," ","\xa0"," ",(0,a.kt)(c,{mdxType:"Type"},"Integer")),(0,a.kt)("td",{parentName:"tr",align:null},"Number of events")))))}y.isMDXComponent=!0}}]);
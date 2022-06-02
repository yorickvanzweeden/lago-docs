"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[5336],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return s}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=u(n),s=o,y=m["".concat(i,".").concat(s)]||m[s]||d[s]||a;return n?r.createElement(y,p(p({ref:e},c),{},{components:n})):r.createElement(y,p({ref:e},c))}));function s(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,p=new Array(a);p[0]=m;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:o,p[1]=l;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1084:function(t,e,n){n.r(e),n.d(e,{Comment:function(){return y},NotNullable:function(){return s},Type:function(){return m},assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),p=["components"],l={sidebar_position:1},i="The applied coupon object",u={unversionedId:"api/applied_coupons/applied-coupon-object",id:"api/applied_coupons/applied-coupon-object",title:"The applied coupon object",description:"This object represents a coupon assigned to a customer of your business.",source:"@site/docs/api/05_applied_coupons/applied-coupon-object.mdx",sourceDirName:"api/05_applied_coupons",slug:"/api/applied_coupons/applied-coupon-object",permalink:"/docs/api/applied_coupons/applied-coupon-object",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"Events",permalink:"/docs/api/events"},next:{title:"Apply a coupon to a customer",permalink:"/docs/api/applied_coupons/apply-coupon"}},c={},d=[{value:"Schema",id:"schema",level:2}],m=function(t){var e=t.children;t.color;return(0,a.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},e)},s=function(t){var e=t.children;t.color;return(0,a.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},e)},y=function(t){var e=t.children;t.color;return(0,a.kt)("span",{style:{fontSize:"12px"}},e)},k={toc:d,Type:m,NotNullable:s,Comment:y};function f(t){var e=t.components,n=(0,o.Z)(t,p);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-applied-coupon-object"},"The applied coupon object"),(0,a.kt)("p",null,"This object represents a coupon assigned to a customer of your business.",(0,a.kt)("br",null),"\nFor now, it lets you assign a one-off coupon to a customer. This coupon can have a termination date or run forever."),(0,a.kt)("h2",{id:"schema"},"Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "applied_coupon": {\n    "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n    "lago_coupon_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n    "coupon_code": "coupon-code",\n    "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n    "amount_cents": 123,\n    "amount_currency": "EUR",\n    "expiration_date": "2022-04-29",\n    "created_at": "2022-04-29T08:59:51Z",\n    "terminated_at": "2022-04-29T08:59:51Z",\n  }\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(s,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Unique identifer of the applied coupon in Lago application.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"lago_coupon_id")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(s,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Unique identifer of the coupon in Lago application.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"coupon_code")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Code identifying the coupon.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"customer_id")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(s,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in your application.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"lago_customer_id")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(s,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in Lago application.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(s,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Amount in cents.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(s,{mdxType:"NotNullable"},"Not null")),(0,a.kt)("td",{parentName:"tr",align:null},"Currency of the amount.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"expiration_date")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)("br",null),(0,a.kt)(y,{mdxType:"Comment"},(0,a.kt)("em",{parentName:"td"},"ISO 8601 date"))),(0,a.kt)("td",{parentName:"tr",align:null},"Date after which the coupon will stop to apply to customer's invoices.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"created_at")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(s,{mdxType:"NotNullable"},"Not null")," ","\xa0"," ","\xa0"," ",(0,a.kt)("br",null),(0,a.kt)(y,{mdxType:"Comment"},(0,a.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,a.kt)("td",{parentName:"tr",align:null},"Date of assignation of the coupon to the customer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"terminated_at")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Date of manual deletion of the coupon from customer's coupons.")))))}f.isMDXComponent=!0}}]);
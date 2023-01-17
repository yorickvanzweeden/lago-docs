"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[2007],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(n),k=r,N=c["".concat(d,".").concat(k)]||c[k]||m[k]||l;return n?a.createElement(N,o(o({ref:e},u),{},{components:n})):a.createElement(N,o({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2201:(t,e,n)=>{n.r(e),n.d(e,{Comment:()=>c,NotNullable:()=>m,Type:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>N,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1},o="Invoice object",i={unversionedId:"api/invoices/invoice-object",id:"api/invoices/invoice-object",title:"Invoice object",description:"Lago automatically generates invoices for each of your customers at the end of a billing period (monthly or yearly depending on the plan assigned to the customers).",source:"@site/docs/api/11_invoices/invoice-object.mdx",sourceDirName:"api/11_invoices",slug:"/api/invoices/invoice-object",permalink:"/docs/api/invoices/invoice-object",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"Invoices",permalink:"/docs/category/invoices"},next:{title:"Get a specific invoice",permalink:"/docs/api/invoices/get-invoice"}},d={},p=[{value:"Invoice object",id:"invoice-object-1",level:2},{value:"Fee object",id:"fee-object",level:2},{value:"Credit object",id:"credit-object",level:2}],u=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},e)},m=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},e)},c=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{fontSize:"12px"}},e)},k={toc:p,Type:u,NotNullable:m,Comment:c};function N(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"invoice-object"},"Invoice object"),(0,r.kt)("p",null,"Lago automatically generates invoices for each of your customers at the end of a billing period (monthly or yearly depending on the plan assigned to the customers)."),(0,r.kt)("p",null,"They list and summarize the fees generated by Lago for your customers, based on the subscription and metrics notifications setuped in your Lago workspace."),(0,r.kt)("h2",{id:"invoice-object-1"},"Invoice object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "invoice": {\n    "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "sequential_id": 2,\n    "number": "LAG-1234-001-002",\n    "issuing_date": "2022-04-30",\n    "payment_status": "succeeded",\n    "amount_cents": 100,\n    "amount_currency": "EUR",\n    "vat_amount_cents": 20,\n    "vat_amount_currency": "EUR",\n    "credit_amount_cents": 10,\n    "credit_amount_currency": "EUR",\n    "total_amount_cents": 110,\n    "total_amount_currency": "EUR",\n    "file_url": "https://getlago.com/invoice/file",\n    "legacy": false,\n    "customer": {\n      "lago_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n      "external_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "address_line1": "5230 Penfield Ave",\n      "address_line2": null,\n      "city": "Woodland Hills",\n      "country": "US",\n      "created_at": "2022-04-29T08:59:51Z",\n      "email": "dinesh@piedpiper.test",\n      "legal_name": "Coleman-Blair",\n      "legal_number": "49-008-2965",\n      "logo_url": "http://hooli.com/logo.png",\n      "name": "Gavin Belson",\n      "phone": "1-171-883-3711 x245",\n      "state": "CA",\n      "url": "http://hooli.com",\n      "vat_rate": 20.0,\n      "zipcode": "91364"\n    },\n    "subscriptions": [\n      {\n          "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n          "external_id": "susbcription_external_id",\n          "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n          "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n          "canceled_at": "2022-04-29T08:59:51Z",\n          "created_at": "2022-04-29T08:59:51Z",\n          "plan_code": "new_code",\n          "started_at": "2022-04-29T08:59:51Z",\n          "status": "active",\n          "terminated_at": null\n      }\n    ],\n    "fees": [\n      {\n        "lago_id": "6be23c42-47d2-45a3-9770-5b3572f225c3",\n        "lago_group_id": null,\n        "item": {\n          "type": "subscription",\n          "code": "plan_code",\n          "name": "Plan"\n        },\n        "amount_cents": 100,\n        "amount_currency": "EUR",\n        "vat_amount_cents": 20,\n        "vat_amount_currency": "EUR",\n        "units": "0.32",\n        "events_count": 23\n      }\n    ]\n  },\n  "credits": [\n    {\n      "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n      "item": {\n        "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n        "type": "coupon",\n        "code": "coupon_code",\n        "name": "Coupon",\n      },\n      "amount_cents": 100,\n      "amount_currency": "EUR"\n    }\n  ]\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the invoice in Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"sequential_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Invoice sequential id scoped on the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"number")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Invoice unique number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"charges_from_date")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Lower bound of the billing period for charges")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"issuing_date")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Date of creation of the invoice")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"payment_status")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the payment. ",(0,r.kt)("br",null)," ",(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Possible values")),(0,r.kt)("div",null,"- ",(0,r.kt)("inlineCode",{parentName:"td"},"pending"),": Waiting for payment in Stripe or when invoice is emitted but users have not updated the payment status through the endpoint",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"succeeded"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"failed"),(0,r.kt)("div",null))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount in cents, VAT (tax) excluded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"vat_amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Vat amount in cents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"vat_amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the VAT amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"credit_amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Total of credit amount applied to the invoice in cents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"credit_amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the credit amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"total_amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Should be the sum of the amount and the VAT amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"total_amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the total amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"file_url")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"String"),"\xa0","\xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"File url of the invoice PDF")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"legacy")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"Boolean"),"\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")," if the credit is applied before the VAT (before Credit Note introduction), ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," otherwise")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"customer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"JSON"),"\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../customers/customer-object"},"Customer object"),". Billed customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"subscriptions")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"JSON"),"\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of ",(0,r.kt)("a",{parentName:"td",href:"../subscriptions/subscription-object"},"Subscription objects")," (billed subscriptions)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"fees")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"JSON"),"\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of ",(0,r.kt)("a",{parentName:"td",href:"#fee-object"},"fee")," objects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"credits")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"JSON"),"\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of ",(0,r.kt)("a",{parentName:"td",href:"#credit-object"},"credit")," objects")))),(0,r.kt)("h2",{id:"fee-object"},"Fee object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "lago_id": "6be23c42-47d2-45a3-9770-5b3572f225c3",\n  "lago_group_id": "5b4881e3-b451-472e-9e03-d99379550743",\n  "item": {\n    "type": "subscription",\n    "code": "plan_code",\n    "name": "Plan"\n  },\n  "amount_cents": 100,\n  "amount_currency": "EUR",\n  "vat_amount_cents": 20,\n  "vat_amount_currency": "EUR",\n  "units": "0.32",\n  "events_count": 23\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the fee in Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_group_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the group in Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"item")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"JSON")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Item attached to the fee. ",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Always have 3 attributes:"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"charge")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"subscription"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"code"),": Code of the plan or of the billable metric attached to the fee.",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"name"),": Name of the plan of of the billable metric attached to the fee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount in cents of the fee, VAT excluded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"vat_amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"VAT amount in cents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"vat_amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the VAT amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"units"),"  ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"String (Decimal)")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Units used to charge the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"events_count"),"  ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"Integer")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of events")))),(0,r.kt)("h2",{id:"credit-object"},"Credit object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n  "item": {\n    "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n    "type": "coupon",\n    "code": "coupon_code",\n    "name": "Coupon",\n  },\n  "amount_cents": 100,\n  "amount_currency": "EUR"\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the credit in Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"item")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"JSON")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Item attached to the credit. ",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Always have 4 attributes:"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"lago_id"),": Id of the coupon or of the credit note",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"coupon")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"credit_note"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"code"),": Code of the coupon attached to the credit or number of the credit note",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"name"),": Name of the coupon attached to the credit or number of the initial credit note invoice")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount in cents of the credit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the amount")))))}N.isMDXComponent=!0}}]);
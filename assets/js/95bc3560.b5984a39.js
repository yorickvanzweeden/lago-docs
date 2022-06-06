"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[8175],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=u(n),k=r,s=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return n?a.createElement(s,o(o({ref:e},d),{},{components:n})):a.createElement(s,o({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6839:function(t,e,n){n.r(e),n.d(e,{Comment:function(){return s},NotNullable:function(){return k},Type:function(){return c},assets:function(){return d},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:11},p="Invoices",u={unversionedId:"api/invoices",id:"api/invoices",title:"Invoices",description:"Lago automatically generates invoices for each of your customers at the end of a billing period (monthly or yearly depending on the plan assigned to the customers).",source:"@site/docs/api/11_invoices.mdx",sourceDirName:"api",slug:"/api/invoices",permalink:"/docs/api/invoices",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"api",previous:{title:"Webhooks",permalink:"/docs/api/webhooks"}},d={},m=[{value:"Invoice object",id:"invoice-object",level:2},{value:"Fee object",id:"fee-object",level:2},{value:"Credit object",id:"credit-object",level:2}],c=function(t){var e=t.children;t.color;return(0,l.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},e)},k=function(t){var e=t.children;t.color;return(0,l.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},e)},s=function(t){var e=t.children;t.color;return(0,l.kt)("span",{style:{fontSize:"12px"}},e)},N={toc:m,Type:c,NotNullable:k,Comment:s};function y(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"invoices"},"Invoices"),(0,l.kt)("p",null,"Lago automatically generates invoices for each of your customers at the end of a billing period (monthly or yearly depending on the plan assigned to the customers)."),(0,l.kt)("p",null,"They list and summarize the fees generated by Lago for your customers, based on the subscription and metrics notifications setuped in your Lago workspace."),(0,l.kt)("h2",{id:"invoice-object"},"Invoice object"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "webhook_type": "invoice.created",\n  "object_type": "invoice",\n  "invoice": {\n    "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "sequential_id": 2,\n    "from_date": "2022-04-01",\n    "to_date": "2022-04-30",\n    "issuing_date": "",\n    "amount_cents": 100,\n    "amount_currency": "EUR",\n    "vat_amount_cents": 20,\n    "vat_amount_currency": "EUR",\n    "total_amount_cents": 120,\n    "total_amount_currency": "EUR",\n    "customer": {\n      "lago_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n      "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "address_line1": "5230 Penfield Ave",\n      "address_line2": null,\n      "city": "Woodland Hills",\n      "country": "US",\n      "created_at": "2022-04-29T08:59:51Z",\n      "email": "dinesh@piedpiper.test",\n      "legal_name": "Coleman-Blair",\n      "legal_number": "49-008-2965",\n      "logo_url": "http://hooli.com/logo.png",\n      "name": "Gavin Belson",\n      "phone": "1-171-883-3711 x245",\n      "state": "CA",\n      "url": "http://hooli.com",\n      "vat_rate": 20.0,\n      "zipcode": "91364"\n    },\n    "subscription": {\n      "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n      "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n      "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "canceled_at": "2022-04-29T08:59:51Z",\n      "created_at": "2022-04-29T08:59:51Z",\n      "plan_code": "new_code",\n      "started_at": "2022-04-29T08:59:51Z",\n      "status": "active",\n      "terminated_at": null\n    },\n    "fees": [\n      {\n        "item": {\n          "type": "subscription",\n          "code": "plan_code",\n          "name": "Plan"\n        },\n        "amount_cents": 100,\n        "amount_currency": "EUR",\n        "vat_amount_cents": 20,\n        "vat_amount_currency": "EUR",\n        "units": "0.32"\n      }\n    ]\n  },\n  "credits": [\n    {\n      "item": {\n        "type": "coupon",\n        "code": "coupon_code",\n        "name": "Coupon",\n      },\n      "amount_cents": 100,\n      "amount_currency": "EUR"\n    }\n  ]\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifer of the invoice in Lago application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"sequential_id")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Invoice unique number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"from_date")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null"),(0,l.kt)("br",null),(0,l.kt)(s,{mdxType:"Comment"},(0,l.kt)("em",{parentName:"td"},"ISO 8601 date"))),(0,l.kt)("td",{parentName:"tr",align:null},"Lower bound of the billing period")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"to_date")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null"),(0,l.kt)("br",null),(0,l.kt)(s,{mdxType:"Comment"},(0,l.kt)("em",{parentName:"td"},"ISO 8601 date"))),(0,l.kt)("td",{parentName:"tr",align:null},"Upper bound of the billing period")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"issuing_date")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null"),(0,l.kt)("br",null),(0,l.kt)(s,{mdxType:"Comment"},(0,l.kt)("em",{parentName:"td"},"ISO 8601 date"))),(0,l.kt)("td",{parentName:"tr",align:null},"Date of creation of the invoice")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Amount in cents, VAT (tax) excluded")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Currency of the amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"vat_amount_cents")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Vat amount in cents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"vat_amount_currency")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Currency of the VAT amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"total_amount_cents")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Should be the sum of the amount and the VAT amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"total_amount_currency")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Currency of the total amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"customer")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"JSON"),"\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./customers/customer-object"},"Customer object"),". Billed customer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"subscription")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"JSON"),"\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./subscriptions/subscription-object"},"Subscription object"),". Billed subscription")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"fees")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"JSON"),"\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of ",(0,l.kt)("a",{parentName:"td",href:"#fee-object"},"fee")," objects")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"credits")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"JSON"),"\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of ",(0,l.kt)("a",{parentName:"td",href:"#credit-object"},"credit")," objects")))),(0,l.kt)("h2",{id:"fee-object"},"Fee object"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "item": {\n    "type": "subscription",\n    "code": "plan_code",\n    "name": "Plan"\n  },\n  "amount_cents": 100,\n  "amount_currency": "EUR",\n  "vat_amount_cents": 20,\n  "vat_amount_currency": "EUR"\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"item")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"JSON")," ","\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Item attached to the fee. ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Always have 3 attributes:"),(0,l.kt)("br",null),"- ",(0,l.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"charge")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"subscription"),(0,l.kt)("br",null),"- ",(0,l.kt)("inlineCode",{parentName:"td"},"code"),": Code of the plan or of the billable metric attached to the fee.",(0,l.kt)("br",null),"- ",(0,l.kt)("inlineCode",{parentName:"td"},"name"),": Name of the plan of of the billable metric attached to the fee")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Amount in cents of the fee, VAT excluded")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Currency of the amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"vat_amount_cents")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"VAT amount in cents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"vat_amount_currency")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Currency of the VAT amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"units"),"  ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"Srting (Decimal)")," ","\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Units used to charge the customer")))),(0,l.kt)("h2",{id:"credit-object"},"Credit object"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "item": {\n    "type": "coupon",\n    "code": "coupon_code",\n    "name": "Coupon",\n  },\n  "amount_cents": 100,\n  "amount_currency": "EUR"\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"item")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"JSON")," ","\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Item attached to the credit. ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Always have 3 attributes:"),(0,l.kt)("br",null),"- ",(0,l.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"coupon"),(0,l.kt)("br",null),"- ",(0,l.kt)("inlineCode",{parentName:"td"},"code"),": Code of the coupon attached to the credit.",(0,l.kt)("br",null),"- ",(0,l.kt)("inlineCode",{parentName:"td"},"name"),": Name of the coupon attached to the credit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Amount in cents of the credit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,l.kt)(c,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(k,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Currency of the amount")))))}y.isMDXComponent=!0}}]);
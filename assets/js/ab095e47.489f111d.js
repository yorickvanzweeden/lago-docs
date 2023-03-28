"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[5269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),s=r,g=p["".concat(u,".").concat(s)]||p[s]||m[s]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},53276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:2},i="Fees",o={unversionedId:"guide/invoicing/fees",id:"guide/invoicing/fees",title:"Fees",description:"A fee is a line item in an invoice. There are two types of fees:",source:"@site/docs/guide/10_invoicing/fees.md",sourceDirName:"guide/10_invoicing",slug:"/guide/invoicing/fees",permalink:"/docs/guide/invoicing/fees",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guide",previous:{title:"Overview",permalink:"/docs/guide/invoicing/overview"},next:{title:"Taxes",permalink:"/docs/guide/invoicing/taxes"}},u={},d=[{value:"Rounding rules for Lago fees",id:"rounding-rules-for-lago-fees",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fees"},"Fees"),(0,r.kt)("p",null,"A fee is a line item in an invoice. There are two types of fees:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Subscription fees")," that correspond to the base amount of the plan; and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Charge fees")," that correspond to usage-based charges (i.e. the costs associated with each billable metric).")),(0,r.kt)("p",null,"Information about fees includes (but is not limited to):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type;"),(0,r.kt)("li",{parentName:"ul"},"Amount;"),(0,r.kt)("li",{parentName:"ul"},"Currency; and"),(0,r.kt)("li",{parentName:"ul"},"Taxes.")),(0,r.kt)("p",null,"The fee object is embedded in the invoice object, as illustrated below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Fee object as shown in the invoice object"',title:'"Fee',object:!0,as:!0,shown:!0,in:!0,the:!0,invoice:!0,'object"':!0},'{\n  "webhook_type": "invoice.created",\n  "object_type": "invoice",\n  "invoice": {\n    "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "sequential_id": 2,\n    "from_date": "2022-04-01",\n    "to_date": "2022-04-30",\n    "charges_from_date": "2022-04-01",\n    "issuing_date": "",\n    "amount_cents": 100,\n    "amount_currency": "EUR",\n    "vat_amount_cents": 20,\n    "vat_amount_currency": "EUR",\n    "total_amount_cents": 120,\n    "total_amount_currency": "EUR",\n    "customer": {\n      "lago_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n      "external_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "address_line1": "5230 Penfield Ave",\n      "address_line2": null,\n      "city": "Woodland Hills",\n      "country": "US",\n      "created_at": "2022-04-29T08:59:51Z",\n      "email": "dinesh@piedpiper.test",\n      "legal_name": "Coleman-Blair",\n      "legal_number": "49-008-2965",\n      "logo_url": "http://hooli.com/logo.png",\n      "name": "Gavin Belson",\n      "phone": "1-171-883-3711 x245",\n      "state": "CA",\n      "url": "http://hooli.com",\n      "vat_rate": 20.0,\n      "zipcode": "91364"\n    },\n    "subscription": {\n      "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n      "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n      "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "canceled_at": "2022-04-29T08:59:51Z",\n      "created_at": "2022-04-29T08:59:51Z",\n      "plan_code": "new_code",\n      "started_at": "2022-04-29T08:59:51Z",\n      "status": "active",\n      "terminated_at": null\n    },\n    // highlight-start\n    "fees": [\n      {\n        "item": {\n          "type": "subscription",\n          "code": "plan_code",\n          "name": "Plan"\n        },\n        "amount_cents": 100,\n        "amount_currency": "EUR",\n        "vat_amount_cents": 20,\n        "vat_amount_currency": "EUR"\n      }\n    ]\n    // highlight-end\n  }\n}\n')),(0,r.kt)("h2",{id:"rounding-rules-for-lago-fees"},"Rounding rules for Lago fees"),(0,r.kt)("p",null,"Lago rounds the\xa0Lago fees\xa0to the nearest unit (e.g., cents). For example, if the fee is 0.175, Lago will round up to 0.18. If the fee is 0.174, Lago will round down to 0.17."),(0,r.kt)("p",null,"The tax rate is calculated at the item level and the total amount is rounded after summing all the items on the invoice."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Amount"),(0,r.kt)("th",{parentName:"tr",align:null},"Tax rate"),(0,r.kt)("th",{parentName:"tr",align:null},"Tax amount"),(0,r.kt)("th",{parentName:"tr",align:null},"Total amount (before rounding)"),(0,r.kt)("th",{parentName:"tr",align:null},"Total amount (after rounding)"),(0,r.kt)("th",{parentName:"tr",align:null},"Total"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Line item 1"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.17"),(0,r.kt)("td",{parentName:"tr",align:null},"20%"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.034"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Line item 2"),(0,r.kt)("td",{parentName:"tr",align:null},"$4.46"),(0,r.kt)("td",{parentName:"tr",align:null},"20%"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.892"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subtotal (excl. tax)"),(0,r.kt)("td",{parentName:"tr",align:null},"$4.63"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tax amount"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"$0.926"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subtotal (incl. tax)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"$5.556"),(0,r.kt)("td",{parentName:"tr",align:null},"$5.56"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Total"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"$5.56")))))}m.isMDXComponent=!0}}]);
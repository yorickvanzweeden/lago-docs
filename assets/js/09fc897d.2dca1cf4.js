"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[3112],{3905:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},i=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,i=u(t,["components","mdxType","originalType","parentName"]),s=m(a),c=r,g=s["".concat(p,".").concat(c)]||s[c]||d[c]||l;return a?n.createElement(g,o(o({ref:e},i),{},{components:a})):n.createElement(g,o({ref:e},i))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:r,o[1]=u;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},5162:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(t){let{children:e,hidden:a,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},e)}},5488:(t,e,a)=>{a.d(e,{Z:()=>c});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),u=a(7392),p=a(7094),m=a(2466);const i="tabList__CuJ",d="tabItem_LNqP";function s(t){var e,a;const{lazy:o,block:s,defaultValue:c,values:g,groupId:k,className:N}=t,b=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=g?g:b.map((t=>{let{props:{value:e,label:a,attributes:n}}=t;return{value:e,label:a,attributes:n}})),h=(0,u.l)(y,((t,e)=>t.value===e.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((t=>t.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===c?c:null!=(e=null!=c?c:null==(a=b.find((t=>t.props.default)))?void 0:a.props.value)?e:b[0].props.value;if(null!==f&&!y.some((t=>t.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+y.map((t=>t.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:v}=(0,p.U)(),[x,_]=(0,r.useState)(f),j=[],{blockElementScrollPositionUntilNextRender:S}=(0,m.o5)();if(null!=k){const t=T[k];null!=t&&t!==x&&y.some((e=>e.value===t))&&_(t)}const O=t=>{const e=t.currentTarget,a=j.indexOf(e),n=y[a].value;n!==x&&(S(e),_(n),null!=k&&v(k,String(n)))},w=t=>{var e;let a=null;switch(t.key){case"ArrowRight":{var n;const e=j.indexOf(t.currentTarget)+1;a=null!=(n=j[e])?n:j[0];break}case"ArrowLeft":{var r;const e=j.indexOf(t.currentTarget)-1;a=null!=(r=j[e])?r:j[j.length-1];break}}null==(e=a)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",i)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},N)},y.map((t=>{let{value:e,label:a,attributes:o}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:t=>j.push(t),onKeyDown:w,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":x===e})}),null!=a?a:e)}))),o?(0,r.cloneElement)(b.filter((t=>t.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==x})))))}function c(t){const e=(0,o.Z)();return r.createElement(s,(0,n.Z)({key:String(e)},t))}},393:(t,e,a)=>{a.r(e),a.d(e,{Comment:()=>s,NotNullable:()=>d,Type:()=>i,assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));a(5488),a(5162);const l={sidebar_position:1},o="Customer usage object",u={unversionedId:"api/customer_usage/customer-usage-object",id:"api/customer_usage/customer-usage-object",title:"Customer usage object",description:"This object represents the usage-based charges associated with one of your customers for the current billing period.",source:"@site/docs/api/12_customer_usage/customer-usage-object.mdx",sourceDirName:"api/12_customer_usage",slug:"/api/customer_usage/customer-usage-object",permalink:"/docs/api/customer_usage/customer-usage-object",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"Messages",permalink:"/docs/api/webhooks/messages"},next:{title:"Get customer current usage",permalink:"/docs/api/customer_usage/customer-usage"}},p={},m=[{value:"Schema",id:"schema",level:2},{value:"Charge Usage object",id:"charge-usage-object",level:2},{value:"Charge object",id:"charge-object",level:2},{value:"Billable Metric object",id:"billable-metric-object",level:2},{value:"Group object",id:"group-object",level:2}],i=t=>{let{children:e,color:a}=t;return(0,r.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},e)},d=t=>{let{children:e,color:a}=t;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},e)},s=t=>{let{children:e,color:a}=t;return(0,r.kt)("span",{style:{fontSize:"12px"}},e)},c={toc:m,Type:i,NotNullable:d,Comment:s};function g(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"customer-usage-object"},"Customer usage object"),(0,r.kt)("p",null,"This object represents the usage-based charges associated with one of your customers for the current billing period.",(0,r.kt)("br",null),"\nIt allows you to monitor customer usage throughout the period."),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "customer_usage": {\n    "from_date": "2022-07-01",\n    "to_date": "2022-07-31",\n    "issuing_date": "2022-08-01",\n    "amount_cents": 123,\n    "amount_currency": "EUR",\n    "total_amount_cents": 123,\n    "total_amount_currency": "EUR",\n    "vat_amount_cents": 0,\n    "vat_amount_currency": "EUR",\n    "charges_usage": [\n      {\n        "units": "1.0",\n        "amount_cents": 123,\n        "amount_currency": "EUR",\n        "charge": {\n          "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n          "charge_model": "graduated"\n        },\n        "billable_metric": {\n          "lago_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n          "name": "Usage metric",\n          "code": "usage_metric",\n          "aggregation_type": "sum"\n        },\n        "groups": [\n          {\n            "lago_id": "a78f2185-1474-4a64-95bf-bcd96623fec5",\n            "key": null,\n            "value": "europe",\n            "units": "0.9",\n            "amount_cents": 1000\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"from_date")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null),(0,r.kt)(s,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Lower bound of the billing period")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"to_date")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null),(0,r.kt)(s,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Upper bound of the billing period")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"issuing_date")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null),(0,r.kt)(s,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Date of creation of the invoice")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount in cents, VAT (tax) excluded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"total_amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Should be the sum of the amount and the VAT amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"total_amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the total amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"vat_amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"VAT amount in cents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"vat_amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the VAT amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"charges_usage")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"Array"),"\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of ",(0,r.kt)("a",{parentName:"td",href:"#charge-usage-object"},"charge usage")," objects")))),(0,r.kt)("h2",{id:"charge-usage-object"},"Charge Usage object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"units")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of units consumed by the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount in cents, VAT (tax) excluded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"charge")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"JSON")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Related ",(0,r.kt)("a",{parentName:"td",href:"#charge"},"charge")," object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"billable_metric")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"JSON")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Related ",(0,r.kt)("a",{parentName:"td",href:"#billable-metric-object"},"billable metric")," object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"groups")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"Array")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of ",(0,r.kt)("a",{parentName:"td",href:"#group-object"},"group")," objects")))),(0,r.kt)("h2",{id:"charge-object"},"Charge object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the charge in the Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"charge_model")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Model of pricing applied by the charge.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"/docs/guide/plans/charges#the-charge-models"},"charge documentation")," for possible values")))),(0,r.kt)("h2",{id:"billable-metric-object"},"Billable Metric object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the billable metric in the Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"name")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the billable metric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"code")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Code of the billable metric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"aggregation_type")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Aggregation type of the billable metric",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"/docs/guide/billable-metrics/aggregation-types"},"billable metric documentation")," for possible values")))),(0,r.kt)("h2",{id:"group-object"},"Group object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the group in the Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"key")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Group key, only defined if two dimensions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"value")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Group value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"units")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of units consumed by the customer for the group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(i,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount in cents for the group, VAT (tax) excluded")))))}g.isMDXComponent=!0}}]);
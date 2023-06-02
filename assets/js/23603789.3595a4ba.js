"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[2358],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>b});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),d=p(a),c=r,b=d["".concat(i,".").concat(c)]||d[c]||s[c]||l;return a?n.createElement(b,o(o({ref:e},m),{},{components:a})):n.createElement(b,o({ref:e},m))}));function b(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[d]="string"==typeof t?t:r,o[1]=u;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(t){let{children:e,hidden:a,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},e)}},74866:(t,e,a)=>{a.d(e,{Z:()=>T});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),u=a(16550),i=a(91980),p=a(67392),m=a(50012);function d(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function s(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??d(a);return function(t){const e=(0,p.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function c(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function b(t){let{queryString:e=!1,groupId:a}=t;const n=(0,u.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function g(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,l=s(t),[o,u]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[i,p]=b({queryString:a,groupId:n}),[d,g]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,m.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:n}),k=(()=>{const t=i??d;return c({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((t=>{if(!c({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);u(t),p(t),g(t)}),[p,g,l]),tabValues:l}}var k=a(72389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(t){let{className:e,block:a,selectedValue:u,selectValue:i,tabValues:p}=t;const m=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),s=t=>{const e=t.currentTarget,a=m.indexOf(e),n=p[a].value;n!==u&&(d(e),i(n))},c=t=>{let e=null;switch(t.key){case"Enter":s(t);break;case"ArrowRight":{const a=m.indexOf(t.currentTarget)+1;e=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(t.currentTarget)-1;e=m[a]??m[m.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},e)},p.map((t=>{let{value:e,label:a,attributes:o}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===e?0:-1,"aria-selected":u===e,key:e,ref:t=>m.push(t),onKeyDown:c,onClick:s},o,{className:(0,l.Z)("tabs__item",N.tabItem,o?.className,{"tabs__item--active":u===e})}),a??e)})))}function h(t){let{lazy:e,children:a,selectedValue:n}=t;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const t=l.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function f(t){const e=g(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(y,(0,n.Z)({},t,e)),r.createElement(h,(0,n.Z)({},t,e)))}function T(t){const e=(0,k.Z)();return r.createElement(f,(0,n.Z)({key:String(e)},t))}},97440:(t,e,a)=>{a.r(e),a.d(e,{Comment:()=>s,NotNullable:()=>d,Type:()=>m,assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(74866),a(85162);const l={sidebar_position:1},o="Customer usage object",u={unversionedId:"api/customer_usage/customer-usage-object",id:"api/customer_usage/customer-usage-object",title:"Customer usage object",description:"This object represents the usage-based charges associated with one of your customers for the current billing period.",source:"@site/docs/api/07_customer_usage/customer-usage-object.mdx",sourceDirName:"api/07_customer_usage",slug:"/api/customer_usage/customer-usage-object",permalink:"/docs/api/customer_usage/customer-usage-object",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"Customer usage",permalink:"/docs/category/customer-usage"},next:{title:"Get customer current usage",permalink:"/docs/api/customer_usage/customer-usage"}},i={},p=[{value:"Schema",id:"schema",level:2},{value:"Deprecated attributes",id:"deprecated-attributes",level:3},{value:"Charge Usage object",id:"charge-usage-object",level:2},{value:"Charge object",id:"charge-object",level:2},{value:"Billable Metric object",id:"billable-metric-object",level:2},{value:"Group object",id:"group-object",level:2}],m=t=>{let{children:e,color:a}=t;return(0,r.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},e)},d=t=>{let{children:e,color:a}=t;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},e)},s=t=>{let{children:e,color:a}=t;return(0,r.kt)("span",{style:{fontSize:"12px"}},e)},c={toc:p,Type:m,NotNullable:d,Comment:s},b="wrapper";function g(t){let{components:e,...a}=t;return(0,r.kt)(b,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"customer-usage-object"},"Customer usage object"),(0,r.kt)("p",null,"This object represents the usage-based charges associated with one of your customers for the current billing period.",(0,r.kt)("br",null),"\nIt allows you to monitor customer usage throughout the period."),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "customer_usage": {\n    "from_datetime": "2022-07-01T00:00:00Z",\n    "to_datetime": "2022-07-31T23:59:59Z",\n    "issuing_date": "2022-08-01",\n    "amount_cents": 123,\n    "amount_currency": "EUR",\n    "total_amount_cents": 123,\n    "total_amount_currency": "EUR",\n    "vat_amount_cents": 0,\n    "vat_amount_currency": "EUR",\n    "charges_usage": [\n      {\n        "units": "1.0",\n        "amount_cents": 123,\n        "amount_currency": "EUR",\n        "charge": {\n          "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n          "charge_model": "graduated"\n        },\n        "billable_metric": {\n          "lago_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n          "name": "Usage metric",\n          "code": "usage_metric",\n          "aggregation_type": "sum"\n        },\n        "groups": [\n          {\n            "lago_id": "a78f2185-1474-4a64-95bf-bcd96623fec5",\n            "key": null,\n            "value": "europe",\n            "units": "0.9",\n            "amount_cents": 1000\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"from_datetime")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null),(0,r.kt)(s,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,r.kt)("td",{parentName:"tr",align:null},"Lower bound of the billing period")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"to_datetime")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null),(0,r.kt)(s,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,r.kt)("td",{parentName:"tr",align:null},"Upper bound of the billing period")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"issuing_date")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null),(0,r.kt)(s,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Date of creation of the invoice")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount in cents, VAT (tax) excluded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"total_amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Should be the sum of the amount and the VAT amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"total_amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the total amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"vat_amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"VAT amount in cents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"vat_amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the VAT amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"charges_usage")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Array"),"\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of ",(0,r.kt)("a",{parentName:"td",href:"#charge-usage-object"},"charge usage")," objects")))),(0,r.kt)("h3",{id:"deprecated-attributes"},"Deprecated attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"from_date")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null),(0,r.kt)(s,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Lower bound of the billing period")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"to_date")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null),(0,r.kt)(s,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Upper bound of the billing period")))),(0,r.kt)("h2",{id:"charge-usage-object"},"Charge Usage object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"units")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of units consumed by the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount in cents, VAT (tax) excluded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"charge")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"JSON")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Related ",(0,r.kt)("a",{parentName:"td",href:"#charge-object"},"charge")," object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"billable_metric")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"JSON")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Related ",(0,r.kt)("a",{parentName:"td",href:"#billable-metric-object"},"billable metric")," object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"groups")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Array")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of ",(0,r.kt)("a",{parentName:"td",href:"#group-object"},"group")," objects")))),(0,r.kt)("h2",{id:"charge-object"},"Charge object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the charge in the Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"charge_model")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Model of pricing applied by the charge.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"/docs/guide/plans/charges/overview"},"charge documentation")," for possible values")))),(0,r.kt)("h2",{id:"billable-metric-object"},"Billable Metric object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the billable metric in the Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"name")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the billable metric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"code")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Code of the billable metric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"aggregation_type")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Aggregation type of the billable metric",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"/docs/guide/billable-metrics/aggregation-types"},"billable metric documentation")," for possible values")))),(0,r.kt)("h2",{id:"group-object"},"Group object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the group in the Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"key")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Group key, only defined if two dimensions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"value")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Group value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"units")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of units consumed by the customer for the group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount in cents for the group, VAT (tax) excluded")))))}g.isMDXComponent=!0}}]);
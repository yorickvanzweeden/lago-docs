"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[5547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||l;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:4},o="Percentage",i={unversionedId:"guide/plans/charges/price-models/percentage",id:"guide/plans/charges/price-models/percentage",title:"Percentage",description:"Select the percentage charge model if you want to apply a percentage and a fixed fee on transactions (e.g. bank transfers, ATM withdrawals, etc.).",source:"@site/docs/guide/05_plans/charges/price-models/percentage.md",sourceDirName:"guide/05_plans/charges/price-models",slug:"/guide/plans/charges/price-models/percentage",permalink:"/docs/guide/plans/charges/price-models/percentage",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guide",previous:{title:"Package",permalink:"/docs/guide/plans/charges/price-models/package"},next:{title:"Volume",permalink:"/docs/guide/plans/charges/price-models/volume"}},p={},c=[],s={toc:c},u="wrapper";function g(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"percentage"},"Percentage"),(0,r.kt)("p",null,"Select the percentage charge model if you want to apply a ",(0,r.kt)("strong",{parentName:"p"},"percentage and a fixed fee on transactions")," (e.g. bank transfers, ATM withdrawals, etc.)."),(0,r.kt)("p",null,"This charge model is generally used with billable metrics that allow users to calculate the total amount of transactions (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," aggregation type and ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," defined as the event property - ",(0,r.kt)("a",{parentName:"p",href:"../../../billable-metrics/aggregation-types#2-sum"},"learn more"),")."),(0,r.kt)("p",null,"You can define several parameters for the percentage charge model, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Percentage rate"),": charge rate that applies to the total amount (e.g. 1.2% on transactions);"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fixed fee (optional)"),": fee that applies to each event ingested during the billing period (e.g. $0.10 per transaction);"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Free units (events - optional)"),": number of events that are not subject to the fixed fee; and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Free units (total amount - optional)"),": amount that is not subject to the charge rate.")),(0,r.kt)("p",null,"When free units are defined for both the total amount and number of events, Lago performs checks each time a new event is ingested to determine whether the free units still apply. In the illustration below for instance, the first 3 events or $500 are free."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configuration of the percentage charge model",src:n(45699).Z,width:"1062",height:"1320"})),(0,r.kt)("p",null,"Consider the following list of events:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Amount"),(0,r.kt)("th",{parentName:"tr",align:null},"Total number of events"),(0,r.kt)("th",{parentName:"tr",align:null},"Total amount"),(0,r.kt)("th",{parentName:"tr",align:null},"Result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transaction 1"),(0,r.kt)("td",{parentName:"tr",align:null},"$200"),(0,r.kt)("td",{parentName:"tr",align:null},"1 free event (out of 3)"),(0,r.kt)("td",{parentName:"tr",align:null},"$200 ($500 free)"),(0,r.kt)("td",{parentName:"tr",align:null},"No charges")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transaction 2"),(0,r.kt)("td",{parentName:"tr",align:null},"$100"),(0,r.kt)("td",{parentName:"tr",align:null},"2 free events (out of 3)"),(0,r.kt)("td",{parentName:"tr",align:null},"$300 ($500 free)"),(0,r.kt)("td",{parentName:"tr",align:null},"No charges")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transaction 3"),(0,r.kt)("td",{parentName:"tr",align:null},"$100"),(0,r.kt)("td",{parentName:"tr",align:null},"3 free events (out of 3)"),(0,r.kt)("td",{parentName:"tr",align:null},"$400 ($500 free)"),(0,r.kt)("td",{parentName:"tr",align:null},"No charges")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transaction 4"),(0,r.kt)("td",{parentName:"tr",align:null},"$50"),(0,r.kt)("td",{parentName:"tr",align:null},"4 events (free units exceeded)"),(0,r.kt)("td",{parentName:"tr",align:null},"$450 ($500 free)"),(0,r.kt)("td",{parentName:"tr",align:null},"Charge")))),(0,r.kt)("p",null,"Therefore, for the fourth transaction, the charge will be $0.10 x 1 event + 1.2% of $50 = $0.70."))}g.isMDXComponent=!0},45699:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/percentage-model-b2657bc04ac57c27cfe3bc3b830fd8dc.png"}}]);
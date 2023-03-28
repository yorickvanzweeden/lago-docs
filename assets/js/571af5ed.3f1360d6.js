"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[6899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,u=d["".concat(c,".").concat(g)]||d[g]||p[g]||i;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},97353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>Z,default:()=>L,frontMatter:()=>k,metadata:()=>_,toc:()=>T});var a=n(87462),r=n(67294),i=n(3905),o=n(86010),s=n(95999),c=n(39960);const l=[{name:"GoCardless",image:"https://logo.clearbit.com/gocardless.com",url:{page:"../../docs/integrations/payments/gocardless"},description:r.createElement(s.Z,{id:"special.gocardless.description"},"GoCardless is the global leader of direct debits bank payments.")},{name:"Stripe Payments",image:"https://logo.clearbit.com/stripe.com",url:{page:"../../docs/integrations/payments/stripe"},description:r.createElement(s.Z,{id:"special.stripe.description"},"Stripe is a suite of APIs powering online payment processing, especially card payments.")}];function m(e){let{name:t,image:n,url:a,description:i}=e;return r.createElement("div",{className:"col col--6 margin-bottom--lg"},r.createElement("div",{className:(0,o.Z)("card"),style:{border:"1px solid #c3c9d5"}},r.createElement("div",{className:(0,o.Z)("card__image")},r.createElement("img",{src:n,style:{width:"30px",marginLeft:"15px",marginTop:"15px",borderRadius:"6px"}})),r.createElement("div",{className:"card__body"},r.createElement("h3",null,t),r.createElement("p",null,i)),r.createElement("div",{className:"card__footer"},r.createElement("div",{className:"button-group button-group--block"},r.createElement(c.Z,{className:"button button--secondary",to:a.page},r.createElement(s.Z,{id:"special.tryItButton"},"View documentation"))))))}function d(){return r.createElement("div",{className:"row"},l.map((e=>r.createElement(m,(0,a.Z)({key:e.name},e)))))}const p=[{name:"Airbyte (ETL)",image:"https://logo.clearbit.com/airbyte.com",url:{page:"../../docs/integrations/data/airbyte"},description:r.createElement(s.Z,{id:"special.gocardless.description"},"Send billing data to any warehouses by using our integration with Airbyte ETL services.")}];function g(e){let{name:t,image:n,url:a,description:i}=e;return r.createElement("div",{className:"col col--6 margin-bottom--lg"},r.createElement("div",{className:(0,o.Z)("card"),style:{border:"1px solid #c3c9d5"}},r.createElement("div",{className:(0,o.Z)("card__image")},r.createElement("img",{src:n,style:{width:"30px",marginLeft:"15px",marginTop:"15px",borderRadius:"6px"}})),r.createElement("div",{className:"card__body"},r.createElement("h3",null,t),r.createElement("p",null,i)),r.createElement("div",{className:"card__footer"},r.createElement("div",{className:"button-group button-group--block"},r.createElement(c.Z,{className:"button button--secondary",to:a.page},r.createElement(s.Z,{id:"special.tryItButton"},"View documentation"))))))}function u(){return r.createElement("div",{className:"row"},p.map((e=>r.createElement(g,(0,a.Z)({key:e.name},e)))))}const y=[{name:"Zapier",image:"https://uploads-ssl.webflow.com/635119506e36baf5c267fecd/639a649a6370c3ec8db3f88f_zapier.png",url:{page:"../../docs/integrations/alerting/zapier"},description:r.createElement(s.Z,{id:"special.zapier.description"},"Use Zapier and Lago to trigger billing automations, such as an invoice alerting system.")},{name:"n8n",image:"https://logo.clearbit.com/n8n.com",url:{page:"../../docs/integrations/alerting/n8n"},description:r.createElement(s.Z,{id:"special.n8n.description"},"Use n8n and Lago to trigger billing automations, such as an overconsumption alerting system.")}];function b(e){let{name:t,image:n,url:a,description:i}=e;return r.createElement("div",{className:"col col--6 margin-bottom--lg"},r.createElement("div",{className:(0,o.Z)("card"),style:{border:"1px solid #c3c9d5"}},r.createElement("div",{className:(0,o.Z)("card__image")},r.createElement("img",{src:n,style:{width:"30px",marginLeft:"15px",marginTop:"15px",borderRadius:"6px"}})),r.createElement("div",{className:"card__body"},r.createElement("h3",null,t),r.createElement("p",null,i)),r.createElement("div",{className:"card__footer"},r.createElement("div",{className:"button-group button-group--block"},r.createElement(c.Z,{className:"button button--secondary",to:a.page},r.createElement(s.Z,{id:"special.tryItButton"},"View documentation"))))))}function E(){return r.createElement("div",{className:"row"},y.map((e=>r.createElement(b,(0,a.Z)({key:e.name},e)))))}const v=[{name:"Oso",image:"https://logo.clearbit.com/osohq.com",url:{page:"../../docs/integrations/entitlements/oso"},description:r.createElement(s.Z,{id:"special.oso.description"},"Oso is an Authorization as service used for entitlements")}];function f(e){let{name:t,image:n,url:a,description:i}=e;return r.createElement("div",{className:"col col--6 margin-bottom--lg"},r.createElement("div",{className:(0,o.Z)("card"),style:{border:"1px solid #c3c9d5"}},r.createElement("div",{className:(0,o.Z)("card__image")},r.createElement("img",{src:n,style:{width:"30px",marginLeft:"15px",marginTop:"15px",borderRadius:"6px"}})),r.createElement("div",{className:"card__body"},r.createElement("h3",null,t),r.createElement("p",null,i)),r.createElement("div",{className:"card__footer"},r.createElement("div",{className:"button-group button-group--block"},r.createElement(c.Z,{className:"button button--secondary",to:a.page},r.createElement(s.Z,{id:"special.tryItButton"},"View documentation"))))))}function h(){return r.createElement("div",{className:"row"},v.map((e=>r.createElement(f,(0,a.Z)({key:e.name},e)))))}const w=[{name:"Segment.com",image:"https://logo.clearbit.com/segment.com",url:{page:"../../docs/integrations/usage/segment"},description:r.createElement(s.Z,{id:"special.segment.description"},"Segment is used to track and ingest events that can be sent to Lago as usage.")},{name:"Hightouch",image:"https://logo.clearbit.com/hightouch.com",url:{page:"../../docs/integrations/usage/hightouch"},description:r.createElement(s.Z,{id:"special.hightouch.description"},"Reverse-ETL helping you sync data from any sources (database, warehouses, spreadsheet...) to Lago.")}];function N(e){let{name:t,image:n,url:a,description:i}=e;return r.createElement("div",{className:"col col--6 margin-bottom--lg"},r.createElement("div",{className:(0,o.Z)("card"),style:{border:"1px solid #c3c9d5"}},r.createElement("div",{className:(0,o.Z)("card__image")},r.createElement("img",{src:n,style:{width:"30px",marginLeft:"15px",marginTop:"15px",borderRadius:"6px"}})),r.createElement("div",{className:"card__body"},r.createElement("h3",null,t),r.createElement("p",null,i)),r.createElement("div",{className:"card__footer"},r.createElement("div",{className:"button-group button-group--block"},r.createElement(c.Z,{className:"button button--secondary",to:a.page},r.createElement(s.Z,{id:"special.tryItButton"},"View documentation"))))))}function x(){return r.createElement("div",{className:"row"},w.map((e=>r.createElement(N,(0,a.Z)({key:e.name},e)))))}const k={sidebar_position:1},Z="Introduction",_={unversionedId:"integrations/intro",id:"integrations/intro",title:"Introduction",description:"Find all Lago native integrations with third party tools, whether it's related to payment providers, alerting systems or data integrations.",source:"@site/docs/integrations/intro.mdx",sourceDirName:"integrations",slug:"/integrations/intro",permalink:"/docs/integrations/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"integrations",next:{title:"Payments",permalink:"/docs/category/payments-1"}},O={},T=[{value:"Usage tracking integrations",id:"usage-tracking-integrations",level:2},{value:"Payments integrations",id:"payments-integrations",level:2},{value:"Alerting integrations",id:"alerting-integrations",level:2},{value:"Data integrations",id:"data-integrations",level:2},{value:"Entitlements",id:"entitlements",level:2}],P={toc:T},j="wrapper";function L(e){let{components:t,...n}=e;return(0,i.kt)(j,(0,a.Z)({},P,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Find all Lago native integrations with third party tools, whether it's related to payment providers, alerting systems or data integrations."),(0,i.kt)("h2",{id:"usage-tracking-integrations"},"Usage tracking integrations"),(0,i.kt)(x,{mdxType:"UsageRows"}),(0,i.kt)("h2",{id:"payments-integrations"},"Payments integrations"),(0,i.kt)(d,{mdxType:"PaymentsRows"}),(0,i.kt)("h2",{id:"alerting-integrations"},"Alerting integrations"),(0,i.kt)(E,{mdxType:"AlertingRows"}),(0,i.kt)("h2",{id:"data-integrations"},"Data integrations"),(0,i.kt)(u,{mdxType:"DataRows"}),(0,i.kt)("h2",{id:"entitlements"},"Entitlements"),(0,i.kt)(h,{mdxType:"EntitlementsRows"}))}L.isMDXComponent=!0}}]);
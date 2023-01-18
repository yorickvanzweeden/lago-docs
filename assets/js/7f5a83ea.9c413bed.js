"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[1594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},i="Payment retries",l={unversionedId:"guide/payments/payment-retries",id:"guide/payments/payment-retries",title:"Payment retries",description:"Whether you use one of our native integrations or rely on our webhooks to collect payments, you have the ability to manually resend payments for collection when needed.",source:"@site/docs/guide/11_payments/payment-retries.md",sourceDirName:"guide/11_payments",slug:"/guide/payments/payment-retries",permalink:"/docs/guide/payments/payment-retries",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guide",previous:{title:"Stripe integration",permalink:"/docs/guide/payments/stripe-integration"},next:{title:"Credit notes",permalink:"/docs/guide/credit_notes"}},s={},p=[],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"payment-retries"},"Payment retries"),(0,o.kt)("p",null,"Whether you use one of our native integrations or rely on our ",(0,o.kt)("a",{parentName:"p",href:"../../api/webhooks/messages"},"webhooks")," to collect payments, you have the ability to manually resend payments for collection when needed."),(0,o.kt)("p",null,"To re-trigger the payment process through the user interface:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access the ",(0,o.kt)("strong",{parentName:"li"},'"Invoices"')," section via the side menu;"),(0,o.kt)("li",{parentName:"ol"},"Open the ",(0,o.kt)("strong",{parentName:"li"},'"Pending/Failed"')," tab;"),(0,o.kt)("li",{parentName:"ol"},"Find the invoice for which you would like to collect payment;"),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"ellipsis icon")," on the right; and"),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},'"Resend for collection"'),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Payment retry via the invoice list",src:n(6081).Z,width:"2880",height:"1566"})),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},'"Pending/Failed"')," tab of the ",(0,o.kt)("strong",{parentName:"p"},'"Invoices"')," section, you can also click ",(0,o.kt)("strong",{parentName:"p"},'"Resend for collection"')," in the upper right corner to re-trigger the payment process for all invoices in the list."),(0,o.kt)("p",null,"When a payment is resent for collection, an ",(0,o.kt)("inlineCode",{parentName:"p"},"invoice.created")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"invoice.add_on_added")," webhook is automatically sent, depending on the type of invoice."),(0,o.kt)("p",null,"In addition to this, if the default payment provider for the customer is ",(0,o.kt)("a",{parentName:"p",href:"stripe-integration"},"Stripe")," or ",(0,o.kt)("a",{parentName:"p",href:"gocardless-integration"},"GoCardless"),", Lago will automatically process the payment through integration."),(0,o.kt)("p",null,"It is also possible to trigger payment retries via the API (",(0,o.kt)("a",{parentName:"p",href:"../../api/invoices/retry-payment"},"learn more"),")."))}u.isMDXComponent=!0},6081:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/retry-payment-a34e7670c5465cd86eb660502b3aa4ce.png"}}]);
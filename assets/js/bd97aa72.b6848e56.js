"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[1635],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2034:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:12},o="Prepaid Credits",l={unversionedId:"guide/prepaid_credits",id:"guide/prepaid_credits",title:"Prepaid Credits",description:"Since usage-based charges are calculated at the end of the billing period, you often need to wait to collect payments. With prepaid credits, you can now unlock recurring revenue opportunities for pay-as-you-go pricing models.",source:"@site/docs/guide/12_prepaid_credits.md",sourceDirName:"guide",slug:"/guide/prepaid_credits",permalink:"/docs/guide/prepaid_credits",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"guide",previous:{title:"Stripe Integration",permalink:"/docs/guide/payments/stripe-integration"},next:{title:"Integration Testing",permalink:"/docs/guide/testing-integration"}},p={},d=[{value:"Create wallets",id:"create-wallets",level:2},{value:"Credit purchases and top-ups",id:"credit-purchases-and-top-ups",level:2},{value:"Application scope",id:"application-scope",level:2},{value:"Expiration date and termination",id:"expiration-date-and-termination",level:2}],c={toc:d};function s(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"prepaid-credits"},"Prepaid Credits"),(0,r.kt)("p",null,"Since usage-based charges are calculated at the end of the billing period, you often need to wait to collect payments. With prepaid credits, you can now unlock recurring revenue opportunities for pay-as-you-go pricing models."),(0,r.kt)("p",null,"Prepaid credits increase predictability as they allow you to collect payments in advance and then monitor the evolution of the balance of your customer's wallets."),(0,r.kt)("h2",{id:"create-wallets"},"Create wallets"),(0,r.kt)("p",null,"To create a wallet for one of your customers through the user interface:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Access the ",(0,r.kt)("strong",{parentName:"li"},'"Customers"')," section via the side menu;"),(0,r.kt)("li",{parentName:"ol"},"Select a customer from the list;"),(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("strong",{parentName:"li"},'"Wallets"')," and click ",(0,r.kt)("strong",{parentName:"li"},'"Add a wallet & credits"')," on the right;"),(0,r.kt)("li",{parentName:"ol"},"Choose a name for the wallet (optional);"),(0,r.kt)("li",{parentName:"ol"},"Set the credit value (e.g. 1 credit = $5);"),(0,r.kt)("li",{parentName:"ol"},"Enter the number of credits to be purchased and/or granted for free;"),(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("a",{parentName:"li",href:"#expiration-date-and-termination"},"expiration date")," (optional); and"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},'"Add wallet & credits"')," to confirm.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If the currency of the customer is already defined, the currency of the wallet must be the same.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Creation of a wallet via the user interface",src:a(9665).Z,width:"2880",height:"1570"})),(0,r.kt)("p",null,"Free credits are added to the customer's wallet instantly, while purchased credits are added to the wallet when payment is confirmed (see below)."),(0,r.kt)("p",null,"Each customer can only have one active wallet."),(0,r.kt)("h2",{id:"credit-purchases-and-top-ups"},"Credit purchases and top-ups"),(0,r.kt)("p",null,"Lago automatically generates an invoice for each purchase and taxes apply. Payment must be made in order for credits to be added to the customer's wallet (i.e. the status of the invoice must be ",(0,r.kt)("inlineCode",{parentName:"p"},"succeeded"),")."),(0,r.kt)("p",null,"To top up a wallet through the user interface:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("strong",{parentName:"li"},'"Wallets"')," tab and click ",(0,r.kt)("strong",{parentName:"li"},'"Edit wallet"')," on the right;"),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},'"Top up credit"'),";"),(0,r.kt)("li",{parentName:"ol"},"Enter the number of credits to be purchased and/or granted for free; and"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},'"Top up credit"')," to confirm.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Coupons ",(0,r.kt)("strong",{parentName:"p"},"do not apply")," to credit purchases and top-ups.")),(0,r.kt)("h2",{id:"application-scope"},"Application scope"),(0,r.kt)("p",null,"Prepaid credits are deducted from the subtotal of the next invoice(s), before tax."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Invoice paid with prepaid credits",src:a(6573).Z,width:"1990",height:"1486"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Prepaid credits ",(0,r.kt)("strong",{parentName:"p"},"do not apply")," to invoices related to add-ons.")),(0,r.kt)("h2",{id:"expiration-date-and-termination"},"Expiration date and termination"),(0,r.kt)("p",null,"By default, if you don't set an expiration date, prepaid credits are carried over to the next billing period until the wallet balance is zero."),(0,r.kt)("p",null,"If you define an expiration date, when the date is reached, all remaining credits are ",(0,r.kt)("strong",{parentName:"p"},"automatically voided"),"."),(0,r.kt)("p",null,"To modify the expiration date of the prepaid credits through the user interface:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("strong",{parentName:"li"},'"Wallets"')," tab and click ",(0,r.kt)("strong",{parentName:"li"},'"Edit wallet"')," on the right;"),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},'"Edit information"'),";"),(0,r.kt)("li",{parentName:"ol"},"Modify the expiration date; and"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},'"Edit information"')," to confirm.")),(0,r.kt)("p",null,"You also have the ability to terminate a wallet manually, before its expiration date:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("strong",{parentName:"li"},'"Wallets"')," tab and click ",(0,r.kt)("strong",{parentName:"li"},'"Edit wallet"')," on the right;"),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},'"Terminate wallet"'),"; and"),(0,r.kt)("li",{parentName:"ol"},"Click again to confirm.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Terminating a wallet will instantly void all remaining credits. This action ",(0,r.kt)("strong",{parentName:"p"},"cannot be undone"),".")))}s.isMDXComponent=!0},6573:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/invoice-prepaid-credits-81fac14d580275584c0c77d6032ca568.png"},9665:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-wallet-7ff463a41c3bea60da1d08d38263ab89.png"}}]);
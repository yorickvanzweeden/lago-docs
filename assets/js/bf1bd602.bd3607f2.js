"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[1851],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return a?o.createElement(h,i(i({ref:t},p),{},{components:a})):o.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},92656:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=a(87462),n=(a(67294),a(3905));const r={sidebar_position:1},i="GoCardless",s={unversionedId:"integrations/payments/gocardless",id:"integrations/payments/gocardless",title:"GoCardless",description:"Lago's native integration with GoCardless allows you to collect payments via direct debit.",source:"@site/docs/integrations/01_payments/gocardless.md",sourceDirName:"integrations/01_payments",slug:"/integrations/payments/gocardless",permalink:"/docs/integrations/payments/gocardless",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"integrations",previous:{title:"Payments",permalink:"/docs/category/payments-1"},next:{title:"Stripe Payments",permalink:"/docs/integrations/payments/stripe"}},l={},c=[{value:"Integration setup",id:"integration-setup",level:2},{value:"Connect your GoCardless account",id:"connect-your-gocardless-account",level:3},{value:"Create webhook endpoints",id:"create-webhook-endpoints",level:3},{value:"Customer information",id:"customer-information",level:2},{value:"New customer",id:"new-customer",level:3},{value:"Existing customer",id:"existing-customer",level:3},{value:"Direct debit",id:"direct-debit",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"gocardless"},"GoCardless"),(0,n.kt)("p",null,"Lago's native integration with GoCardless allows you to collect payments via direct debit."),(0,n.kt)("h2",{id:"integration-setup"},"Integration setup"),(0,n.kt)("h3",{id:"connect-your-gocardless-account"},"Connect your GoCardless account"),(0,n.kt)("p",null,"To connect to GoCardless through the user interface:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the side menu, select ",(0,n.kt)("strong",{parentName:"li"},'"Settings"'),";"),(0,n.kt)("li",{parentName:"ol"},"Open the ",(0,n.kt)("strong",{parentName:"li"},'"Integrations"')," tab;"),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},'"GoCardless"')," to be redirected to the GoCardless application;"),(0,n.kt)("li",{parentName:"ol"},"Create a GoCardless account or log in to your existing account; and"),(0,n.kt)("li",{parentName:"ol"},"Connect your account to be redirected to the Lago application.")),(0,n.kt)("p",null,"When the OAuth connection is active, you will see the screen below, with your secret key."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Active OAuth connection with GoCardless",src:a(96543).Z,width:"2874",height:"1560"})),(0,n.kt)("h3",{id:"create-webhook-endpoints"},"Create webhook endpoints"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"To complete this process, you will need:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Your Lago ",(0,n.kt)("strong",{parentName:"li"},"organization ID"),", available in the ",(0,n.kt)("strong",{parentName:"li"},'"API keys & ID"')," tab of the ",(0,n.kt)("strong",{parentName:"li"},'"Developers"')," section; and"),(0,n.kt)("li",{parentName:"ul"},"Your ",(0,n.kt)("strong",{parentName:"li"},"secret key"),", available in the ",(0,n.kt)("strong",{parentName:"li"},'"Integrations"')," tab of the ",(0,n.kt)("strong",{parentName:"li"},'"Settings"')," section (",(0,n.kt)("a",{parentName:"li",href:"#connect-your-gocardless-account"},"learn more"),")."))),(0,n.kt)("p",null,"If you want Lago to automatically retrieve the status of the payments processed via GoCardless, you must create a webhook endpoint in GoCardless. To do so:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log in to your ",(0,n.kt)("a",{parentName:"li",href:"https://manage.gocardless.com/sign-in"},"GoCardless account"),";"),(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},'"Developers"')," section;"),(0,n.kt)("li",{parentName:"ol"},"In the upper right corner, click ",(0,n.kt)("strong",{parentName:"li"},'"Create"')," and then select ",(0,n.kt)("strong",{parentName:"li"},'"Webhook endpoint"'),";"),(0,n.kt)("li",{parentName:"ol"},"Choose a name for this webhook (e.g. Lago);"),(0,n.kt)("li",{parentName:"ol"},"Enter the following URL: ",(0,n.kt)("a",{parentName:"li",href:"https://api.getlago.com/webhook/gocardless/:id"},"https://api.getlago.com/webhook/gocardless/:id")," (you must replace ",(0,n.kt)("inlineCode",{parentName:"li"},":id")," with your Lago organization ID);"),(0,n.kt)("li",{parentName:"ol"},"Enter your secret key; and"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},'"Create webhook endpoint"'),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Webhook endpoint creation in GoCardless",src:a(27686).Z,width:"2880",height:"1568"})),(0,n.kt)("p",null,"In addition to this, you must create a webhook endpoint in Lago to retrieve the checkout URL associated with each customer account (",(0,n.kt)("a",{parentName:"p",href:"#direct-debit"},"learn more"),"). To do so:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},'"Developers"')," section of the Lago application;"),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("strong",{parentName:"li"},'"Webhooks"')," tab, click ",(0,n.kt)("strong",{parentName:"li"},'"Add a webhook"')," on the right;"),(0,n.kt)("li",{parentName:"ol"},"Enter your webhook URL; and"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},'"Add webhook"')," to confirm.")),(0,n.kt)("p",null,"For more information about our webhooks, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"../../api/webhooks/message-signature"},"API documentation"),"."),(0,n.kt)("h2",{id:"customer-information"},"Customer information"),(0,n.kt)("p",null,"To collect payments automatically, the customer must exist in both the Lago and GoCardless databases."),(0,n.kt)("h3",{id:"new-customer"},"New customer"),(0,n.kt)("p",null,"If the customer does not already exist in GoCardless, you can first create them in Lago, either via the user interface or ",(0,n.kt)("a",{parentName:"p",href:"../../api/customers/create-customer"},"the API"),". When adding customer information, you must:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Provide the customer's email address;"),(0,n.kt)("li",{parentName:"ol"},"Define GoCardless as the ",(0,n.kt)("strong",{parentName:"li"},"default payment provider"),";"),(0,n.kt)("li",{parentName:"ol"},"Leave the field associated with the ",(0,n.kt)("strong",{parentName:"li"},"GoCardless customer ID")," blank; and"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Enable")," the option to automatically create the customer in GoCardless.")),(0,n.kt)("p",null,"The customer will automatically be added to GoCardless. GoCardless will then return the customer ID, which will be stored in Lago."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Creation of a new customer with GoCardless",src:a(58554).Z,width:"1474",height:"1008"})),(0,n.kt)("p",null,"When the customer is successfully created, you will receive two ",(0,n.kt)("a",{parentName:"p",href:"../../api/webhooks/messages"},"webhook messages"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"customer.payment_provider_created")," that confirms the creation of the customer in GoCardless; and"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"customer.checkout_url_generated")," that includes the checkout URL to set up the direct debit (",(0,n.kt)("a",{parentName:"li",href:"#direct-debit"},"learn more"),").")),(0,n.kt)("h3",{id:"existing-customer"},"Existing customer"),(0,n.kt)("p",null,"If the customer and direct debit mandate already exist in GoCardless, then you should create the customer record in Lago, either via the user interface or ",(0,n.kt)("a",{parentName:"p",href:"../../api/customers/create-customer"},"the API"),". When adding customer information, you must:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Provide the customer's email address;"),(0,n.kt)("li",{parentName:"ol"},"Define GoCardless as the ",(0,n.kt)("strong",{parentName:"li"},"default payment provider"),";"),(0,n.kt)("li",{parentName:"ol"},"Provide the ",(0,n.kt)("strong",{parentName:"li"},"GoCardless customer ID"),"; and"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Disable")," the option to automatically create the customer in GoCardless.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Migration of an existing GoCardless customer",src:a(5494).Z,width:"1468",height:"836"})),(0,n.kt)("h2",{id:"direct-debit"},"Direct debit"),(0,n.kt)("p",null,"To collect payments via direct debit, a mandate must be created. To do so:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Retrieve the checkout URL included in the ",(0,n.kt)("inlineCode",{parentName:"li"},"customer.checkout_url_generated")," webhook; and"),(0,n.kt)("li",{parentName:"ol"},"Redirect your customer to the checkout page, so that they can complete the online form and approve the mandate.")),(0,n.kt)("p",null,"The mandate must be validated by GoCardless before the first payment can be processed. It can take up to six business days to validate a new mandate. For more information about payment timings, please consult the ",(0,n.kt)("a",{parentName:"p",href:"https://gocardless.com/faq/merchants/direct-debit/"},"GoCardless FAQ"),"."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"To collect payments via direct debit, the currency of the mandate must match the currency of the plan associated with the customer's subscription.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Direct debit setup with GoCardless",src:a(72548).Z,width:"2880",height:"1530"})),(0,n.kt)("p",null,"Each time a new invoice with an ",(0,n.kt)("strong",{parentName:"p"},"amount greater than zero")," is generated by Lago, a payment will automatically be created. GoCardless will record the invoice ID and process the payment. Payments via direct debit are usually processed within five business days. If the payment is successful, the status of the payment will switch from ",(0,n.kt)("inlineCode",{parentName:"p"},"pending")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"succeeded"),"."),(0,n.kt)("p",null,"If the payment fails, the status of the payment will switch from ",(0,n.kt)("inlineCode",{parentName:"p"},"pending")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"failed")," and Lago will generate an ",(0,n.kt)("inlineCode",{parentName:"p"},"invoice.payment_failure")," ",(0,n.kt)("a",{parentName:"p",href:"../../api/webhooks/messages"},"webhook"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you have signed up for ",(0,n.kt)("a",{parentName:"p",href:"https://gocardless.com/solutions/success-plus/"},"GoCardless Success+"),", failed payments may be automatically resubmitted, in which case Lago will automatically update the invoice payment status.")))}d.isMDXComponent=!0},5494:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/gcl-customer-migration-959faab7b09d8c09866b477845ad8b3b.png"},58554:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/gcl-customer-new-3f7f52c1614edb8b577b075e35de99fb.png"},72548:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/gcl-mandate-c4e336d031a583d002189188ab2599e2.png"},96543:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/gcl-oauth-65c0e5a1a2767f606b55395e0ba394e4.png"},27686:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/gcl-webhook-9e1e96b038542112b1609ebb70a9dda9.png"}}]);
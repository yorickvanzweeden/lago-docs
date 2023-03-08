"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[7835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},i="Invoice a customer",l={unversionedId:"guide/customers/invoice_customer",id:"guide/customers/invoice_customer",title:"Invoice a customer",description:"If a customer has an active subscription, Lago will automatically generate an invoice for them at the end of the billing period.",source:"@site/docs/guide/06_customers/invoice_customer.md",sourceDirName:"guide/06_customers",slug:"/guide/customers/invoice_customer",permalink:"/docs/guide/customers/invoice_customer",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guide",previous:{title:"Metadata",permalink:"/docs/guide/customers/metadata"},next:{title:"Coupons",permalink:"/docs/guide/coupons"}},s={},c=[{value:"Timezone",id:"timezone",level:2},{value:"Preferred language",id:"preferred-language",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"invoice-a-customer"},"Invoice a customer"),(0,o.kt)("p",null,"If a customer has an active subscription, Lago will automatically generate an ",(0,o.kt)("a",{parentName:"p",href:"../invoicing/overview"},"invoice")," for them at the end of the billing period."),(0,o.kt)("h2",{id:"timezone"},"Timezone"),(0,o.kt)("p",null,"The beginning and end of the billing period depend on the timezone applied to the customer account. The default timezone is UTC but you can define another ",(0,o.kt)("a",{parentName:"p",href:"../../../changelog/timezones"},"timezone for your organization"),", which can be overwritten by the customer's timezone."),(0,o.kt)("admonition",{title:"Premium feature \u2728",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The timezone feature is only available to users with a premium license. Please ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"mailto:hello@getlago.com"},"contact us"))," to get access to Lago Cloud and Lago Self-Hosted Premium.")),(0,o.kt)("p",null,"To set the customer's timezone through the user interface:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access the ",(0,o.kt)("strong",{parentName:"li"},'"Customers"')," section via the side menu;"),(0,o.kt)("li",{parentName:"ol"},"Select a customer from the list;"),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},'"Overview"')," tab of the customer view, click ",(0,o.kt)("strong",{parentName:"li"},'"Edit"')," above the customer details;"),(0,o.kt)("li",{parentName:"ol"},"Select a timezone from the list; and"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},'"Edit customer information"')," to confirm.")),(0,o.kt)("p",null,"The dates displayed in the ",(0,o.kt)("strong",{parentName:"p"},'"Usage"'),", ",(0,o.kt)("strong",{parentName:"p"},'"Invoices"')," and ",(0,o.kt)("strong",{parentName:"p"},'"Credit notes"')," tabs of the customer view are based on the customer's timezone."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can hover over any date in the customer view to see the reference timezones.")),(0,o.kt)("h2",{id:"preferred-language"},"Preferred language"),(0,o.kt)("p",null,"The default language for documents is defined at the organization level (",(0,o.kt)("a",{parentName:"p",href:"../invoicing/download-invoices#translate-invoices"},"learn more"),"). It can be overwritten at the customer level."),(0,o.kt)("p",null,"To set the customer's preferred language:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access the ",(0,o.kt)("strong",{parentName:"li"},'"Customers"')," section via the side menu;"),(0,o.kt)("li",{parentName:"ol"},"Select a customer from the list;"),(0,o.kt)("li",{parentName:"ol"},"Open the ",(0,o.kt)("strong",{parentName:"li"},'"Settings"')," tab;"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},'"Add a language"'),";"),(0,o.kt)("li",{parentName:"ol"},"Select a language from the list; and"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},'"Add language"')," to confirm.")),(0,o.kt)("p",null,"Please refer to the API documentation to see the ",(0,o.kt)("a",{parentName:"p",href:"../../api/resources/locales"},"list of supported languages"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When the customer's preferred language is updated, the change only applies to new PDF files. Existing documents are not affected.")))}p.isMDXComponent=!0}}]);
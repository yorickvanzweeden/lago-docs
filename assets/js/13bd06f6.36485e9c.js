"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[5410],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Customer management",s={unversionedId:"guide/customers/management",id:"guide/customers/management",title:"Customer management",description:"Create and update a customer",source:"@site/docs/guide/06_customers/management.md",sourceDirName:"guide/06_customers",slug:"/guide/customers/management",permalink:"/docs/guide/customers/management",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guide",previous:{title:"Customers",permalink:"/docs/category/customers"},next:{title:"Metadata",permalink:"/docs/guide/customers/metadata"}},c={},l=[{value:"Create and update a customer",id:"create-and-update-a-customer",level:2},{value:"Assign objects to a customer",id:"assign-objects-to-a-customer",level:2},{value:"Monitor the customer&#39;s current usage",id:"monitor-the-customers-current-usage",level:2},{value:"Deleting a customer",id:"deleting-a-customer",level:2}],u={toc:l},m="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"customer-management"},"Customer management"),(0,r.kt)("h2",{id:"create-and-update-a-customer"},"Create and update a customer"),(0,r.kt)("p",null,"To create a customer through the user interface, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Access the ",(0,r.kt)("strong",{parentName:"li"},'"Customers"')," section via the side menu;"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},'"Add a customer"')," in the upper right corner;"),(0,r.kt)("li",{parentName:"ol"},"Enter the customer's name and external ID (i.e. unique ID as defined in your backend system);"),(0,r.kt)("li",{parentName:"ol"},"Select the customer's timezone (optional - ",(0,r.kt)("a",{parentName:"li",href:"../customers/invoice_customer#timezone"},"learn more"),");"),(0,r.kt)("li",{parentName:"ol"},"Enter the customer's billing information, including company information and address (optional);"),(0,r.kt)("li",{parentName:"ol"},"Select the default payment provider for this customer (optional - ",(0,r.kt)("a",{parentName:"li",href:"../payments/overview"},"learn more"),"); "),(0,r.kt)("li",{parentName:"ol"},"Add metadata if needed and choose whether or not to display it on the next invoices (optional); and"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},'"Create customer"')," to confirm.")),(0,r.kt)("p",null,"Once a customer is created, you can access the customer view, where you can edit their information."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You cannot change the ",(0,r.kt)("inlineCode",{parentName:"p"},"external_id")," of a customer after an object has been assigned to them (i.e. plan, coupon, add-on, wallet and credits).")),(0,r.kt)("p",null,"You can also ",(0,r.kt)("a",{parentName:"p",href:"../../api/customers/create-update-customer"},"create and update customers")," via the API."),(0,r.kt)("h2",{id:"assign-objects-to-a-customer"},"Assign objects to a customer"),(0,r.kt)("p",null,"The usage monitoring and billing processes start when you assign a plan to a customer, which triggers a ",(0,r.kt)("a",{parentName:"p",href:"../plans/subscription"},"subscription"),"."),(0,r.kt)("p",null,"You can also apply ",(0,r.kt)("a",{parentName:"p",href:"../coupons"},"coupons"),", ",(0,r.kt)("a",{parentName:"p",href:"../addons"},"add-ons")," and ",(0,r.kt)("a",{parentName:"p",href:"../prepaid_credits"},"prepaid credits")," to a customer account."),(0,r.kt)("p",null,"To assign objects to a customer through the user interface:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Access the ",(0,r.kt)("strong",{parentName:"li"},'"Customers"')," section via the side menu;"),(0,r.kt)("li",{parentName:"ol"},"Select a customer from the list;"),(0,r.kt)("li",{parentName:"ol"},"In the upper right corner of the customer view, click ",(0,r.kt)("strong",{parentName:"li"},'"Actions"'),"; and"),(0,r.kt)("li",{parentName:"ol"},"Select an action from the dropdown list.")),(0,r.kt)("h2",{id:"monitor-the-customers-current-usage"},"Monitor the customer's current usage"),(0,r.kt)("p",null,"When a plan that includes usage-based charges is assigned to a customer, you can start pushing ",(0,r.kt)("a",{parentName:"p",href:"../events/ingesting_events"},"events")," associated with the customer account."),(0,r.kt)("p",null,"During the billing period, the customer's current usage is visible in the ",(0,r.kt)("strong",{parentName:"p"},'"Usage"')," tab of the customer view, including (but not limited to):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Total amount for the period under consideration; and"),(0,r.kt)("li",{parentName:"ul"},"Breakdown by charge, including total number of billing units and amount.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"View of the &quot;Usage&quot; tab",src:n(1473).Z,width:"2880",height:"1568"})),(0,r.kt)("p",null,"You can retrieve the customer's current usage via the API using ",(0,r.kt)("a",{parentName:"p",href:"../../api/customer_usage/customer-usage"},"this endpoint"),"."),(0,r.kt)("h2",{id:"deleting-a-customer"},"Deleting a customer"),(0,r.kt)("p",null,"You may delete a customer linked to existing objects (i.e. applied coupons, wallets, subscriptions, add-ons)."),(0,r.kt)("p",null,"If you do so:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All ",(0,r.kt)("a",{parentName:"li",href:"../plans/subscription"},"subscriptions")," associated with this customer account will be immediately terminated (this action may trigger the generation of invoices and/or credit notes);"),(0,r.kt)("li",{parentName:"ul"},"All ",(0,r.kt)("a",{parentName:"li",href:"../coupons"},"coupons")," applied to this customer account will be immeditely terminated;"),(0,r.kt)("li",{parentName:"ul"},"The customer's active ",(0,r.kt)("a",{parentName:"li",href:"../prepaid_credits"},"wallet")," will be immediately terminated and all remaining credits will be voided; and"),(0,r.kt)("li",{parentName:"ul"},"All ",(0,r.kt)("inlineCode",{parentName:"li"},"draft")," invoices associated with this customer account will be immediately finalized.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"finalized")," invoices and ",(0,r.kt)("a",{parentName:"p",href:"../credit_notes"},"credit notes")," associated with the deleted customer remain available in the ",(0,r.kt)("strong",{parentName:"p"},'"Invoices"')," section of the user interface and can also be retrieved via the API."),(0,r.kt)("p",null,"It is possible to generate new credit notes and process refunds after the deletion of the customer."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"After deleting a customer account, you can create a new one using the same ",(0,r.kt)("inlineCode",{parentName:"p"},"external_id"),".")))}p.isMDXComponent=!0},1473:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/customer-current-usage-28893d7bd2e44ae054012ffa8e3cc69b.png"}}]);
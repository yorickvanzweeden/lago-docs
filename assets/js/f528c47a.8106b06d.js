"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[2149],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=i.createContext({}),s=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return a?i.createElement(g,r(r({ref:t},d),{},{components:a})):i.createElement(g,r({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3886:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=a(7462),n=(a(7294),a(3905));const o={sidebar_position:4},r="Grace period",l={unversionedId:"guide/invoicing/grace-period",id:"guide/invoicing/grace-period",title:"Grace period",description:"This feature is only available to users with a premium license. Please contact us to get access to Lago Cloud and Lago Self-Hosted Premium.",source:"@site/docs/guide/10_invoicing/grace-period.md",sourceDirName:"guide/10_invoicing",slug:"/guide/invoicing/grace-period",permalink:"/docs/guide/invoicing/grace-period",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guide",previous:{title:"Taxes",permalink:"/docs/guide/invoicing/taxes"},next:{title:"Download invoices",permalink:"/docs/guide/invoicing/download-invoices"}},p={},s=[{value:"Application scope and possible actions",id:"application-scope-and-possible-actions",level:2},{value:"Define a grace period at organization level",id:"define-a-grace-period-at-organization-level",level:2},{value:"Define a grace period at customer level",id:"define-a-grace-period-at-customer-level",level:2}],d={toc:s};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"grace-period"},"Grace period"),(0,n.kt)("admonition",{title:"Premium feature \u2728",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This feature is only available to users with a premium license. Please ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"mailto:hello@getlago.com"},"contact us"))," to get access to Lago Cloud and Lago Self-Hosted Premium.")),(0,n.kt)("p",null,"A grace period is defined as a number days during which invoices remain in ",(0,n.kt)("inlineCode",{parentName:"p"},"draft")," status, allowing you to review them and make changes before they are ",(0,n.kt)("inlineCode",{parentName:"p"},"finalized")," and sent for payment collection."),(0,n.kt)("p",null,"In the example below, the timeline includes a billing period of one month and a grace period of three days."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Illustration of the grace period",src:a(5785).Z,width:"1578",height:"280"})),(0,n.kt)("h2",{id:"application-scope-and-possible-actions"},"Application scope and possible actions"),(0,n.kt)("p",null,"The grace period applies to ",(0,n.kt)("strong",{parentName:"p"},"subscription invoices"),". It does not apply to invoices related to add-ons or credit purchases."),(0,n.kt)("p",null,"The creation of a ",(0,n.kt)("inlineCode",{parentName:"p"},"draft")," invoice triggers the ",(0,n.kt)("inlineCode",{parentName:"p"},"invoice.drafted")," ",(0,n.kt)("a",{parentName:"p",href:"../../api/webhooks/messages"},"webhook"),"."),(0,n.kt)("p",null,"When a subscription invoice is in ",(0,n.kt)("inlineCode",{parentName:"p"},"draft")," status, you can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Add usage records")," by sending events with a ",(0,n.kt)("inlineCode",{parentName:"li"},"timestamp")," within the relevant billing period;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Apply coupons")," to the customer's account; and"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Add credits")," to the customer's wallet and credit note wallet.")),(0,n.kt)("p",null,"In order to add usage to an invoice that is in ",(0,n.kt)("inlineCode",{parentName:"p"},"draft")," status, the ",(0,n.kt)("inlineCode",{parentName:"p"},"timestamp")," of the ",(0,n.kt)("a",{parentName:"p",href:"../events/ingesting_events#send-usage-measurements-to-lago"},"events")," must be within the billing period. Consider the following example:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The billing period started on January 1st and ended on January 31st. We have defined a 3-day grace period and today is February 2nd."),(0,n.kt)("p",{parentName:"blockquote"},"On February 1st, Lago automatically generated a ",(0,n.kt)("inlineCode",{parentName:"p"},"draft")," invoice for the period January 1st to January 31st."),(0,n.kt)("p",{parentName:"blockquote"},"We want to send additional usage records for this invoice. To do so, the timestamp of our events must be included in the period January 1st to January 31st."),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"1673457300")," (i.e. January 11th, 2023) is a valid timestamp, therefore the event will be included in the ",(0,n.kt)("inlineCode",{parentName:"p"},"draft")," invoice."),(0,n.kt)("p",{parentName:"blockquote"},"However, ",(0,n.kt)("inlineCode",{parentName:"p"},"1675354500")," (i.e. February 2nd, 2023) is outside the billing period under consideration, therefore the event will not be included in the ",(0,n.kt)("inlineCode",{parentName:"p"},"draft")," invoice, it will be included in the next invoice.")),(0,n.kt)("p",null,"After sending events, you can ",(0,n.kt)("strong",{parentName:"p"},"go to the invoice list and refresh")," the corresponding ",(0,n.kt)("inlineCode",{parentName:"p"},"draft")," invoice to ensure your new events have been taken into account."),(0,n.kt)("p",null,"When all changes have been made, you can either wait for the grace period to expire (the invoice status will automatically switch to ",(0,n.kt)("inlineCode",{parentName:"p"},"finalized"),") or you can ",(0,n.kt)("strong",{parentName:"p"},"finalize the invoice manually")," through the user interface or the API."),(0,n.kt)("p",null,"When an invoice is ",(0,n.kt)("inlineCode",{parentName:"p"},"finalized"),", it can no longer be edited. Finalizing an invoice triggers the ",(0,n.kt)("inlineCode",{parentName:"p"},"invoice.created")," webhook."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Draft invoice in the Lago app",src:a(3391).Z,width:"2880",height:"1570"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Coupons and credits that are applied/added during the grace period will not appear on ",(0,n.kt)("inlineCode",{parentName:"p"},"draft")," invoices but will be automatically deducted from the customer's next ",(0,n.kt)("inlineCode",{parentName:"p"},"finalized")," invoice.")),(0,n.kt)("h2",{id:"define-a-grace-period-at-organization-level"},"Define a grace period at organization level"),(0,n.kt)("p",null,"The organization's grace period applies to all customers by default."),(0,n.kt)("p",null,"To define a grace period at organization level through the user interface:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Access the ",(0,n.kt)("strong",{parentName:"li"},'"Settings"')," section via the side menu;"),(0,n.kt)("li",{parentName:"ol"},"Open the ",(0,n.kt)("strong",{parentName:"li"},'"Invoice"')," tab;"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},'"Edit"')," in the ",(0,n.kt)("strong",{parentName:"li"},'"Grace period"')," block;"),(0,n.kt)("li",{parentName:"ol"},"Enter the number of days associated with the grace period; and"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},'"Edit grace period"')," to confirm.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Grace period in the settings of the app",src:a(6034).Z,width:"2880",height:"1572"})),(0,n.kt)("p",null,"You can modify the organization's grace period at any time through the user interface or ",(0,n.kt)("a",{parentName:"p",href:"../../api/organizations/update-organization"},"the API"),"."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If you shorten the organization's grace period, some invoices in ",(0,n.kt)("inlineCode",{parentName:"p"},"draft")," status may be automatically ",(0,n.kt)("inlineCode",{parentName:"p"},"finalized"),". For instance, if the initial grace period was five days, but then three days into the grace period you decide to reduce it to two days, then all ",(0,n.kt)("inlineCode",{parentName:"p"},"draft")," invoices will automatically switch to ",(0,n.kt)("inlineCode",{parentName:"p"},"finalized"),".")),(0,n.kt)("h2",{id:"define-a-grace-period-at-customer-level"},"Define a grace period at customer level"),(0,n.kt)("p",null,"The customer's grace period overrides the organization's grace period. It only applies to the customer with whom it is associated."),(0,n.kt)("p",null,"To define a grace period at customer level through the user interface:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Access the ",(0,n.kt)("strong",{parentName:"li"},'"Customers"')," section via the side menu;"),(0,n.kt)("li",{parentName:"ol"},"Select a customer from the list;"),(0,n.kt)("li",{parentName:"ol"},"Open the ",(0,n.kt)("strong",{parentName:"li"},'"Settings"')," tab of the customer view;"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},'"Add grace period"')," in the ",(0,n.kt)("strong",{parentName:"li"},'"Grace period"')," block;"),(0,n.kt)("li",{parentName:"ol"},"Enter the number of days associated with the grace period; and"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},'"Add grace period"')," to confirm.")),(0,n.kt)("p",null,"You can modify the customer's grace period at any time through the user interface or ",(0,n.kt)("a",{parentName:"p",href:"../../api/customers/create-update-customer"},"the API"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Grace period in the customer view",src:a(1374).Z,width:"2880",height:"1566"})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If you shorten the customer's grace period, some invoices in ",(0,n.kt)("inlineCode",{parentName:"p"},"draft")," status may be automatically ",(0,n.kt)("inlineCode",{parentName:"p"},"finalized"),". For instance, if the initial grace period was five days, but then three days into the grace period you decide to reduce it to two days, then all ",(0,n.kt)("inlineCode",{parentName:"p"},"draft")," invoices will automatically switch to ",(0,n.kt)("inlineCode",{parentName:"p"},"finalized"),".")))}c.isMDXComponent=!0},1374:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/grace-period-customer-19e2d76ad85f4a1af86c6d8fd0f38715.png"},3391:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/grace-period-draft-invoice-0a9ccbd1d7dc1b87faeb5a44abf484e1.png"},6034:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/grace-period-organization-eabdac12832b76fd4d75c1a266244339.png"},5785:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/grace-period-timeline-299de2425036f803f20825e8a42ab401.png"}}]);
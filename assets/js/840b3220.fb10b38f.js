"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[1898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),i=(n(7294),n(3905));const a={sidebar_position:5},r="Download invoices",l={unversionedId:"guide/invoicing/download-invoices",id:"guide/invoicing/download-invoices",title:"Download invoices",description:"When a new invoice is finalized, Lago will automatically send a webhook to notify you. It will also generate a PDF file that you can download and send to your customer.",source:"@site/docs/guide/10_invoicing/download-invoices.md",sourceDirName:"guide/10_invoicing",slug:"/guide/invoicing/download-invoices",permalink:"/docs/guide/invoicing/download-invoices",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"guide",previous:{title:"Grace period",permalink:"/docs/guide/invoicing/grace-period"},next:{title:"Payments",permalink:"/docs/category/payments"}},c={},s=[{value:"How to modify the invoice template",id:"how-to-modify-the-invoice-template",level:2}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"download-invoices"},"Download invoices"),(0,i.kt)("p",null,"When a new invoice is ",(0,i.kt)("inlineCode",{parentName:"p"},"finalized"),", Lago will automatically send a ",(0,i.kt)("a",{parentName:"p",href:"../../api/webhooks/messages"},"webhook")," to notify you. It will also generate a PDF file that you can download and send to your customer."),(0,i.kt)("p",null,"To download an invoice through the user interface:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Customers"')," in the side menu;"),(0,i.kt)("li",{parentName:"ol"},"Select a customer from the list;"),(0,i.kt)("li",{parentName:"ol"},"Open the ",(0,i.kt)("strong",{parentName:"li"},'"Invoices"')," tab;"),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"ellipsis icon")," on the right of the invoice; and"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Download invoice"')," to open the file in a new tab.")),(0,i.kt)("p",null,"You can also download invoices via API (",(0,i.kt)("a",{parentName:"p",href:"../../api/invoices/download-invoice"},"learn more"),")."),(0,i.kt)("h2",{id:"how-to-modify-the-invoice-template"},"How to modify the invoice template"),(0,i.kt)("p",null,"You can modify some of the elements that are included in the PDF invoice, such as information about the organization, its logo and the footer."),(0,i.kt)("p",null,"To update your organization's information and logo:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Settings"')," in the side menu;"),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},'"Organization"')," tab, click ",(0,i.kt)("strong",{parentName:"li"},'"Edit"')," in the ",(0,i.kt)("strong",{parentName:"li"},'"Information"')," block;"),(0,i.kt)("li",{parentName:"ol"},"Choose a file to update the logo and fill out the form to update your organization's information; and"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Save information"')," to confirm.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For the logo, you can upload a JPG or PNG file with a maximum size of 800 KB.")),(0,i.kt)("p",null,"To update the footer of the invoice:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Settings"')," in the side menu;"),(0,i.kt)("li",{parentName:"ol"},"Open the ",(0,i.kt)("strong",{parentName:"li"},'"Invoice"')," tab;"),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},'"Edit"')," in the ",(0,i.kt)("strong",{parentName:"li"},'"Invoice default footer"')," block;"),(0,i.kt)("li",{parentName:"ol"},"Enter your text (maximum 600 characters); and"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Save information"')," to confirm.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Adding a custom footer via the user interface",src:n(7286).Z,width:"2880",height:"1566"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Changes to the invoice template and new information about your organization do not affect existing invoices and only apply to future invoices.")))}d.isMDXComponent=!0},7286:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/custom-footer-3938263609cbf988b298c69afa2812e6.png"}}]);
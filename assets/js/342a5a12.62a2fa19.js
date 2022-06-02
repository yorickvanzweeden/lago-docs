"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[9945],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},829:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:2},s="Taxes",c={unversionedId:"guide/invoicing/taxes",id:"guide/invoicing/taxes",title:"Taxes",description:"By creating invoices, you might need to append taxes to your customers regarding their required tax rate.",source:"@site/docs/guide/08_invoicing/taxes.md",sourceDirName:"guide/08_invoicing",slug:"/guide/invoicing/taxes",permalink:"/docs/guide/invoicing/taxes",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guide",previous:{title:"Overview",permalink:"/docs/guide/invoicing/overview"},next:{title:"Fees",permalink:"/docs/guide/invoicing/fees"}},u={},p=[{value:"General application settings taxes",id:"general-application-settings-taxes",level:2},{value:"Per-customer taxes",id:"per-customer-taxes",level:2},{value:"From the UI",id:"from-the-ui",level:3},{value:"From the API",id:"from-the-api",level:3}],d={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"taxes"},"Taxes"),(0,o.kt)("p",null,"By creating invoices, you might need to append taxes to your customers regarding their required tax rate.\nBy default, a tax rate is assigned for all customers at the application level. However, you can decide to apply per-customer tax rates if needed."),(0,o.kt)("p",null,"It is useful to say that all charges for a customer are holding the same tax rate."),(0,o.kt)("h2",{id:"general-application-settings-taxes"},"General application settings taxes"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("strong",{parentName:"p"},"Lago automatically applies a 0% tax rate")," for the whole application. However, you can easily decide to change this value. The general tax rate is applied to all your customers and appended to all the charges, unless you decide to have a dedicated tax rate for a customer."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To modify the general application tax rate"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go under the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"\u2699\ufe0f Settings"))," tab of the Lago app"),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Tax"))," tab"),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Edit tax rate"))),(0,o.kt)("li",{parentName:"ol"},"Apply you newly desired tax rate. This tax rate is applied for all customers unless they have a ",(0,o.kt)("a",{parentName:"li",href:"#per-customer-taxes"},"per-customer tax rate")," defined")),(0,o.kt)("h2",{id:"per-customer-taxes"},"Per-customer taxes"),(0,o.kt)("p",null,"If you need to append a specific tax rate to a dedicated customer, you can decide to overwrite the general tax rate settings by a per-customer tax rate. All charges of this specific customer will have a custom tax rate."),(0,o.kt)("p",null,"You can update the tax rate at a customer level from both the UI and the API."),(0,o.kt)("h3",{id:"from-the-ui"},"From the UI"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go under the ",(0,o.kt)("strong",{parentName:"li"},"Customers")," tab of the Lago app"),(0,o.kt)("li",{parentName:"ol"},"Click on the customer for whom you want to edit the tax rate"),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("em",{parentName:"li"},"customer details view"),", click on ",(0,o.kt)("strong",{parentName:"li"},"Add a tax rate")),(0,o.kt)("li",{parentName:"ol"},"Add a new tax rate to this customer. This tax rate overwrites the one at the app level"),(0,o.kt)("li",{parentName:"ol"},"You can delete or edit this per-customer tax rate anytime you want")),(0,o.kt)("h3",{id:"from-the-api"},"From the API"),(0,o.kt)("p",null,"Use the following route to ",(0,o.kt)("strong",{parentName:"p"},"add or edit a customer"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="POST"',title:'"POST"'},"/api/v1/customers\n")),(0,o.kt)("p",null,"To update a per-customer tax rate, use the argument ",(0,o.kt)("inlineCode",{parentName:"p"},"vat_rate")," in the customer object."))}m.isMDXComponent=!0}}]);
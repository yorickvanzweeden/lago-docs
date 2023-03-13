"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={date:"2023-01-10T10:00"},i="Timezones \u2728",l={permalink:"/changelog/timezones",editUrl:"changelog/changelog/timezones.md",source:"@site/changelog/timezones.md",title:"Timezones \u2728",description:"This feature is only available to users with a premium license. Please contact us to get access to Lago Cloud and Lago Self-Hosted Premium.",date:"2023-01-10T10:00:00.000Z",formattedDate:"January 10, 2023",tags:[],readingTime:.835,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-01-10T10:00"},prevItem:{title:"Credit notes \u2728",permalink:"/changelog/credit-notes"},nextItem:{title:"Lago Open API",permalink:"/changelog/open-api"}},s={authorsImageUrls:[]},c=[],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Premium feature",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This feature is only available to users with a premium license. Please ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"mailto:hello@getlago.com"},"contact us"))," to get access to Lago Cloud and Lago Self-Hosted Premium.")),(0,o.kt)("p",null,"You can now set the timezone of your organization in the settings of the app. To do so:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access the ",(0,o.kt)("strong",{parentName:"li"},'"Settings"')," section via the side menu;"),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},'"Organization"')," tab, you will see the current timezone (UTC by default);"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},'"Edit"'),";"),(0,o.kt)("li",{parentName:"ol"},"Select a new timezone from the list; and"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},'"Save timezone"')," to confirm.")),(0,o.kt)("p",null,"It can also be set through the API using this ",(0,o.kt)("a",{parentName:"p",href:"../docs/api/organizations/update-organization"},"endpoint"),"."),(0,o.kt)("p",null,"The organization's timezone applies to all customers by default and determines when billing periods start and end (i.e. when invoices should be generated). It is also the reference timezone for most views and lists in the app."),(0,o.kt)("p",null,"The organization's timezone can be overwritten by the customer's timezone (",(0,o.kt)("a",{parentName:"p",href:"../docs/guide/customers/invoice_customer#timezone"},"learn more"),")."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In the app, you can hover over any date with a dotted underline to see the reference timezones.")))}u.isMDXComponent=!0}}]);
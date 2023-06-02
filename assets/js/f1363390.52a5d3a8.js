"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[2982],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,g=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},25795:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:2},i="Graduated",c={unversionedId:"guide/plans/charges/price-models/graduated",id:"guide/plans/charges/price-models/graduated",title:"Graduated",description:"Select the graduated charge model if you want to define several price tiers. This charge model allows you to apply a discount depending on the number of units consumed. You can also apply a flat fee to an entire tier.",source:"@site/docs/guide/05_plans/charges/price-models/graduated.md",sourceDirName:"guide/05_plans/charges/price-models",slug:"/guide/plans/charges/price-models/graduated",permalink:"/docs/guide/plans/charges/price-models/graduated",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guide",previous:{title:"Standard",permalink:"/docs/guide/plans/charges/price-models/standard"},next:{title:"Package",permalink:"/docs/guide/plans/charges/price-models/package"}},l={},s=[],d={toc:s},p="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"graduated"},"Graduated"),(0,a.kt)("p",null,"Select the graduated charge model if you want to define ",(0,a.kt)("strong",{parentName:"p"},"several price tiers"),". This charge model allows you to apply a discount depending on the number of units consumed. You can also apply a ",(0,a.kt)("strong",{parentName:"p"},"flat fee")," to an entire tier."),(0,a.kt)("p",null,"Let's take back the example of the API company. You could charge $1 per unit for the first 100 units (first 100 API calls), then $0.50 per unit for the next 100 calls and finally, $0.10 for any additional unit."),(0,a.kt)("p",null,"Please refer to the tooltip in the user interface for more information."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Configuration of the graduated charge model",src:r(733).Z,width:"1258",height:"828"})))}u.isMDXComponent=!0},733:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/graduated-charge-pricing-model-65dd3d428a7a5aaeb486e851adf029e7.png"}}]);
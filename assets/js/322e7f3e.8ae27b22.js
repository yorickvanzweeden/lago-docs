"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[1725],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5995:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={date:"2022-06-13T10:00"},c="Invoice monthly charges for a plan paid yearly",s={permalink:"/changelog/billable-metric-monthly-for-plan-yearly",editUrl:"changelog/changelog/billable-metric-monthly-for-plan-yearly.md",source:"@site/changelog/billable-metric-monthly-for-plan-yearly.md",title:"Invoice monthly charges for a plan paid yearly",description:"Before the release of this feature, usaged-based features (charges) were following the plan period. If the plan period was invoiced yearly, the charges were invoiced yearly.",date:"2022-06-13T10:00:00.000Z",formattedDate:"June 13, 2022",tags:[],readingTime:.65,truncated:!1,authors:[],frontMatter:{date:"2022-06-13T10:00"},nextItem:{title:"Percentage charge model",permalink:"/changelog/percentage-charge-model"}},p={authorsImageUrls:[]},u=[],m={toc:u};function f(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before the release of this feature, usaged-based features (charges) were following the plan period. If the plan period was invoiced yearly, the charges were invoiced yearly."),(0,o.kt)("p",null,"It's now possible to ",(0,o.kt)("strong",{parentName:"p"},"invoice billable metrics on a montly basis")," for a plan billed yearly. The base amount of the plan will be invoice yearly (in-arrears or in-advance), but your usage based features will be invoiced on a monthly basis."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To do so:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access a ",(0,o.kt)("strong",{parentName:"li"},"Plan"),";"),(0,o.kt)("li",{parentName:"ol"},"Define a plan ",(0,o.kt)("strong",{parentName:"li"},"yearly"),";"),(0,o.kt)("li",{parentName:"ol"},"Price ",(0,o.kt)("strong",{parentName:"li"},"additional charges")," from your billable metrics; and"),(0,o.kt)("li",{parentName:"ol"},"Turn ",(0,o.kt)("inlineCode",{parentName:"li"},"on")," the toggle for ",(0,o.kt)("strong",{parentName:"li"},"applying charges monthly"),".")),(0,o.kt)("p",null,"By switching on, ",(0,o.kt)("strong",{parentName:"p"},"all the charges")," will be invoiced monthly even if the plan is yearly."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The last invoice is gathering both the subscription and the usage-based charges"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"charges invoiced monthly",src:n(8587).Z,width:"1386",height:"162"})))}f.isMDXComponent=!0},8587:function(e,t,n){t.Z=n.p+"assets/images/charges-monthly-a2b67994b71b0178fa073e9bae0a574f.png"}}]);
"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[4017],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1727:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],s={sidebar_position:4},c="Subscriptions",l={unversionedId:"guide/plans/subscription",id:"guide/plans/subscription",title:"Subscriptions",description:"By creating a subscription, you assign a Plan to a Customer. Subscriptions can be added when creating a customer or added seperately later on.",source:"@site/docs/guide/06_plans/subscription.md",sourceDirName:"guide/06_plans",slug:"/guide/plans/subscription",permalink:"/docs/guide/plans/subscription",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guide",previous:{title:"Charges",permalink:"/docs/guide/plans/charges"},next:{title:"Upgrades & Downgrades",permalink:"/docs/guide/plans/upgrades-downgrades"}},u={},p=[{value:"Billing cycles of subscription",id:"billing-cycles-of-subscription",level:2}],d={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"subscriptions"},"Subscriptions"),(0,o.kt)("p",null,"By creating a subscription, you ",(0,o.kt)("strong",{parentName:"p"},"assign a Plan to a Customer"),". Subscriptions can be added when creating a customer or added seperately later on."),(0,o.kt)("p",null,"This customer is now invoiced based on the fixed recurring charges and the usage-based charges belonging to this Plan."),(0,o.kt)("h2",{id:"billing-cycles-of-subscription"},"Billing cycles of subscription"),(0,o.kt)("p",null,"In order to make billing cycles easy, Lago automatically aligns the subscriptions with the calendar. "),(0,o.kt)("p",null,"For instance, if your customer is assigned to a subscription on March 15:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The first invoice is received for the billing period of March 15 - March 31"),(0,o.kt)("li",{parentName:"ul"},"The next invoice is created for the billing period of April 1 - April 30"),(0,o.kt)("li",{parentName:"ul"},"The following one is created for the billing period of May 1 - May 31 ... and so on.")))}f.isMDXComponent=!0}}]);
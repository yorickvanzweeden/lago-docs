"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[139],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(6010),o="tabItem_OmH5";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),o=n(2389),l=n(7392),u=n(7094),i=n(2466),p=n(6010),c="tabList_uSqn",s="tabItem_LplD";function d(e){var t,n,o,d=e.lazy,m=e.block,k=e.defaultValue,f=e.values,b=e.groupId,h=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===k?k:null!=(t=null!=k?k:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=y[0])?void 0:o.props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=(0,u.U)(),T=_.tabGroupChoices,O=_.setTabGroupChoices,C=(0,r.useState)(N),x=C[0],P=C[1],E=[],w=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var I=T[b];null!=I&&I!==x&&g.some((function(e){return e.value===I}))&&P(I)}var j=function(e){var t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==x&&(w(t),P(a),null!=b&&O(b,a))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,p.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":m},h)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return E.push(e)},onKeyDown:A,onFocus:j,onClick:j},o,{className:(0,p.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(y.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},7105:function(e,t,n){n.r(t),n.d(t,{Comment:function(){return b},Optional:function(){return f},PostEndpoint:function(){return h},Required:function(){return k},assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(9877),u=n(2360),i=["components"],p={sidebar_position:2},c="Apply coupon to a customer",s={unversionedId:"api/coupons/assign-coupon",id:"api/coupons/assign-coupon",title:"Apply coupon to a customer",description:"Route",source:"@site/docs/api/05_coupons/assign-coupon.mdx",sourceDirName:"api/05_coupons",slug:"/api/coupons/assign-coupon",permalink:"/docs/api/coupons/assign-coupon",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"api",previous:{title:"The applied coupon object",permalink:"/docs/api/coupons/applied-coupon-object"},next:{title:"Webhooks",permalink:"/docs/api/webhooks"}},d={},m=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Responses",id:"responses",level:2}],k=function(e){var t=e.children;e.color;return(0,o.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},f=function(e){var t=e.children;e.color;return(0,o.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},b=function(e){var t=e.children;e.color;return(0,o.kt)("span",{style:{fontSize:"12px"}},t)},h=function(e){var t=e.children;e.color;return(0,o.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},y={toc:m,Required:k,Optional:f,Comment:b,PostEndpoint:h};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"apply-coupon-to-a-customer"},"Apply coupon to a customer"),(0,o.kt)("h2",{id:"route"},"Route"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="POST"',title:'"POST"'},"/api/v1/coupons/apply\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(l.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request POST "$LAGO_URL/api/v1/coupons/apply" \\\n  --header "Authorization: Bearer $API_KEY" \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{\n    "applied_coupon": {\n      "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "coupon_code": "code",\n      "amount_cents": 123,\n      "amount_currency": "EUR",\n    }\n  }\'\n'))),(0,o.kt)(u.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from lago_python_client import Client\nfrom lago_python_client.models import Coupon\n\nclient = Client(api_key=\'__YOUR_API_KEY__\')\n\napplied_coupon = AppliedCoupon(\n  customer_id="5eb02857-a71e-4ea2-bcf9-57d8885990ba",\n  coupon_code="code",\n  amount_cents=123,\n  amount_currency="EUR"\n)\n\nclient.coupons().apply(applied_coupon)\n'))),(0,o.kt)(u.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'require \'lago-ruby-client\'\n\nclient = Lago::Api::Client.new({api_key: \'__YOUR_API_KEY__\'})\n\nclient.coupons.apply(\n  customer_id: "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n  coupon_code: "code",\n  amount_cents: 123,\n  amount_currency: "EUR"\n)\n')))),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "applied_coupon": {\n    "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "coupon_code": "code",\n    "amount_cents": 123,\n    "amount_currency": "EUR"\n  }\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"customer_id"),(0,o.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,o.kt)(k,{mdxType:"Required"},(0,o.kt)("strong",{parentName:"td"},"Required"))),(0,o.kt)("td",{parentName:"tr",align:null},"Customer unique identifier in your application")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"coupon_code"),(0,o.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,o.kt)(k,{mdxType:"Required"},(0,o.kt)("strong",{parentName:"td"},"Required"))),(0,o.kt)("td",{parentName:"tr",align:null},"Code identifying the coupon.",(0,o.kt)("br",null),"It must match the ",(0,o.kt)("inlineCode",{parentName:"td"},"code")," property of one of the active coupons.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"amount_cents"),(0,o.kt)("td",{parentName:"tr",align:null},"Integer ","\xa0"," ","\xa0"," ","\xa0",(0,o.kt)(f,{mdxType:"Optional"},(0,o.kt)("strong",{parentName:"td"},"Optional"))),(0,o.kt)("td",{parentName:"tr",align:null},"Amount to apply to the customer.",(0,o.kt)("br",null),"If defined, it overrides the amount_cents property of the coupon")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"amount_currency"),(0,o.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,o.kt)(f,{mdxType:"Optional"},(0,o.kt)("strong",{parentName:"td"},"Optional"))),(0,o.kt)("td",{parentName:"tr",align:null},"Currency of the amount to apply to the customer.",(0,o.kt)("br",null),"If defined, it overrides the amount_currency property of the coupon.",(0,o.kt)("br",null),"It must match the currency of the customer's plan.")))),(0,o.kt)("h2",{id:"responses"},"Responses"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},"The coupon was assigned to the customer.",(0,o.kt)("p",null,"  Returns an ",(0,o.kt)("a",{parentName:"p",href:"./applied-coupon-object"},"applied coupon")," object.")),(0,o.kt)(u.Z,{value:"400",label:"HTTP 400",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 400,\n  "error": "Bad Request"\n}\n')),(0,o.kt)("p",null,"  The ",(0,o.kt)("inlineCode",{parentName:"p"},"applied_coupon")," json root is not present in the request body.")),(0,o.kt)(u.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,o.kt)("p",null,"  Access to the API endpoint is unhautorized."),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,o.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,o.kt)(u.Z,{value:"422",label:"HTTP 422",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 422,\n  "error": "Unprocessable entity",\n  "message": "message"\n}\n')),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"Possible error messages:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"unable_to_find_customer"),": The customer id does not match an existing customer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"coupon_does_not_exist"),": The coupon code does not match an existing coupon.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"no_active_subscription"),": The customer does not have an active subscription.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"coupon_already_applied"),": The coupon is already applied to the customer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"currencies_does_not_match"),": Provided currency does not match the currency of the customer's plan.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Validation error on the record"),": The ",(0,o.kt)("inlineCode",{parentName:"p"},"error_details")," field contains the details of the errors:"),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"field"),(0,o.kt)("th",{parentName:"tr",align:null},"error"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"amount_cents")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"value_is_out_of_range")),(0,o.kt)("td",{parentName:"tr",align:null},"Provided amount cents is invalid.",(0,o.kt)("br",null),"It must be a positive integer.")))))))))}g.isMDXComponent=!0}}]);
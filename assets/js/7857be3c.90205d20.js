"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[538],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(b,l(l({ref:t},p),{},{components:n})):a.createElement(b,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),r=n(7294),i=n(2389),l=n(5979),o=n(6010),s="tabItem_LplD";function u(e){var t,n,i,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,b=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===c?c:null!=(t=null!=c?c:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==f&&!v.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),N=g.tabGroupChoices,_=g.setTabGroupChoices,y=(0,r.useState)(f),T=y[0],w=y[1],C=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=N[m];null!=I&&I!==T&&v.some((function(e){return e.value===I}))&&w(I)}var x=function(e){var t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==T&&(O(t),w(a),null!=m&&_(m,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},b)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return C.push(e)},onKeyDown:P,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},7404:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=n(9877),o=n(8215),s=["components"],u={sidebar_position:2},p="Subscriptions",c={unversionedId:"api-reference/subscriptions/create_subscription",id:"api-reference/subscriptions/create_subscription",title:"Subscriptions",description:"TODO: Add a clear description of what are subscriptions.",source:"@site/docs/09_api-reference/subscriptions/create_subscription.mdx",sourceDirName:"09_api-reference/subscriptions",slug:"/api-reference/subscriptions/create_subscription",permalink:"/docs/api-reference/subscriptions/create_subscription",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/09_api-reference/subscriptions/create_subscription.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"The subscription object",permalink:"/docs/api-reference/subscriptions/subscription-object"},next:{title:"Events",permalink:"/docs/api-reference/events"}},d={},m=[{value:"Assign a plan to a customer",id:"assign-a-plan-to-a-customer",level:2},{value:"Route",id:"route",level:3},{value:"Usage",id:"usage",level:3},{value:"Arguments",id:"arguments",level:3},{value:"customer_id",id:"customer_id",level:4},{value:"plan_code",id:"plan_code",level:4},{value:"Responses",id:"responses",level:3},{value:"Terminate a subscription",id:"terminate-a-subscription",level:2},{value:"Route",id:"route-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Arguments",id:"arguments-1",level:3},{value:"customer_id",id:"customer_id-1",level:4},{value:"Response",id:"response",level:3},{value:"Subscription object",id:"subscription-object",level:2},{value:"Fields",id:"fields",level:3},{value:"lago_id",id:"lago_id",level:4},{value:"lago_customer_id",id:"lago_customer_id",level:4},{value:"customer_id",id:"customer_id-2",level:4},{value:"canceled_at",id:"canceled_at",level:4},{value:"created_at",id:"created_at",level:4},{value:"plan_code",id:"plan_code-1",level:4},{value:"started_at",id:"started_at",level:4},{value:"status",id:"status",level:4},{value:"terminated_at",id:"terminated_at",level:4}],b={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"subscriptions"},"Subscriptions"),(0,i.kt)("p",null,"TODO: Add a clear description of what are subscriptions."),(0,i.kt)("h2",{id:"assign-a-plan-to-a-customer"},"Assign a plan to a customer"),(0,i.kt)("h3",{id:"route"},"Route"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POST /api/v1/subscriptions\n")),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request POST "$LAGO_URL/api/v1/subscriptions" \\\n  --header "Authorization: Bearer $API_KEY" \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{\n    "subscriptions": {\n      "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "plan_code": "new_code"\n    }\n  }\'\n'))),(0,i.kt)(o.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'echo "test"\n')))),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "subscription": {\n    "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "plan_code": "new_code"\n  }\n}\n')),(0,i.kt)("h4",{id:"customer_id"},"customer_id"),(0,i.kt)("p",null,"| ",(0,i.kt)("inlineCode",{parentName:"p"},"type: string")," | ",(0,i.kt)("strong",{parentName:"p"},"required")),(0,i.kt)("p",null,"Customer unique identifier in your application."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the customer is not found, it will be created with blank metadata"))),(0,i.kt)("h4",{id:"plan_code"},"plan_code"),(0,i.kt)("p",null,"| ",(0,i.kt)("inlineCode",{parentName:"p"},"type: string")," | ",(0,i.kt)("strong",{parentName:"p"},"required")),(0,i.kt)("p",null,"Code identifying the plan.",(0,i.kt)("br",null),"\nIt must match the ",(0,i.kt)("inlineCode",{parentName:"p"},"code")," property of one of the plans."),(0,i.kt)("h3",{id:"responses"},"Responses"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"  The plan was succesfuly assigned to the customer. A subscription has been created."),(0,i.kt)("p",null,"  Returns a ",(0,i.kt)("a",{parentName:"p",href:"#subscription-object"},"subscription")," object.")),(0,i.kt)(o.Z,{value:"400",label:"HTTP 400",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 400,\n  "error": "Bad Request"\n}\n')),(0,i.kt)("p",null,"  The ",(0,i.kt)("inlineCode",{parentName:"p"},"subscription")," json root is not present in the request body.")),(0,i.kt)(o.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,i.kt)("p",null,"  Access to the API end point is unhautorized."),(0,i.kt)("p",null,"  Possible reasons are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,i.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,i.kt)(o.Z,{value:"422",label:"HTTP 422",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 422,\n  "error": "Unprocessable entity",\n  "message": "message"\n  }\n}\n')),(0,i.kt)("p",null,"  Possible error messages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"plan does not exists"),": The plan code does not match an exisiting plan.")))),(0,i.kt)("h2",{id:"terminate-a-subscription"},"Terminate a subscription"),(0,i.kt)("h3",{id:"route-1"},"Route"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DELETE /api/v1/subscriptions\n")),(0,i.kt)("h3",{id:"usage-1"},"Usage"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request DELETE "$LAGO_URL/api/v1/subscriptions?customer_id=5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba" \\\n  --header "Authorization: Bearer $API_KEY"\n'))),(0,i.kt)(o.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'echo "test"\n')))),(0,i.kt)("h3",{id:"arguments-1"},"Arguments"),(0,i.kt)("p",null,"Should be send as request parameters, or in a JSON body."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"customer_id: 5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba\n")),(0,i.kt)("h4",{id:"customer_id-1"},"customer_id"),(0,i.kt)("p",null,"| ",(0,i.kt)("inlineCode",{parentName:"p"},"type: string")," | ",(0,i.kt)("strong",{parentName:"p"},"required")),(0,i.kt)("p",null,"Unique identifer of the subscription in Lago application."),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"  The customer subscription was successfully terminated."),(0,i.kt)("p",null,"  Returns a ",(0,i.kt)("a",{parentName:"p",href:"#subscription-object"},"subscription")," object.")),(0,i.kt)(o.Z,{value:"400",label:"HTTP 400",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 400,\n  "error": "Bad Request"\n}\n')),(0,i.kt)("p",null,"  The mandatory argument ",(0,i.kt)("inlineCode",{parentName:"p"},"customer_id")," is not present in the request body.")),(0,i.kt)(o.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,i.kt)("p",null,"  Access to the API end point is unhautorized."),(0,i.kt)("p",null,"  Possible reasons are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,i.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,i.kt)(o.Z,{value:"422",label:"HTTP 422",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 422,\n  "error": "Unprocessable entity",\n  "message": "message"\n  }\n}\n')),(0,i.kt)("p",null,"  Possible error messages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"not_found"),": The provided customer was not found or does not have a subscription.")))),(0,i.kt)("h2",{id:"subscription-object"},"Subscription object"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "subscription": {\n    "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n    "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n    "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "canceled_at": "2022-04-29T08:59:51Z",\n    "created_at": "2022-04-29T08:59:51Z",\n    "plan_code": "new_code",\n    "started_at": "2022-04-29T08:59:51Z",\n    "status": "active",\n    "terminated_at": null\n  }\n}\n')),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"lago_id"},"lago_id"),(0,i.kt)("p",null,"| ",(0,i.kt)("inlineCode",{parentName:"p"},"type: string")," | ",(0,i.kt)("strong",{parentName:"p"},"not null")),(0,i.kt)("p",null,"Unique identifer of the subscription in Lago application."),(0,i.kt)("h4",{id:"lago_customer_id"},"lago_customer_id"),(0,i.kt)("p",null,"| ",(0,i.kt)("inlineCode",{parentName:"p"},"type: string")," | ",(0,i.kt)("strong",{parentName:"p"},"not null")),(0,i.kt)("p",null,"Unique identifer of the customer in Lago application."),(0,i.kt)("h4",{id:"customer_id-2"},"customer_id"),(0,i.kt)("p",null,"| ",(0,i.kt)("inlineCode",{parentName:"p"},"type: string")," | ",(0,i.kt)("strong",{parentName:"p"},"not null")),(0,i.kt)("p",null,"Unique identifer of the customer in your application."),(0,i.kt)("h4",{id:"canceled_at"},"canceled_at"),(0,i.kt)("p",null,"| ",(0,i.kt)("inlineCode",{parentName:"p"},"type: string")," | ISO 8601 datetime | ",(0,i.kt)("strong",{parentName:"p"},"nullable")),(0,i.kt)("p",null,"Cancelation date of the subscription. It's not null when the subscription is ",(0,i.kt)("inlineCode",{parentName:"p"},"canceled"),"."),(0,i.kt)("h4",{id:"created_at"},"created_at"),(0,i.kt)("p",null,"| ",(0,i.kt)("inlineCode",{parentName:"p"},"type: string")," | ISO 8601 datetime | ",(0,i.kt)("strong",{parentName:"p"},"not null")),(0,i.kt)("p",null,"Creation date of the subscription."),(0,i.kt)("h4",{id:"plan_code-1"},"plan_code"),(0,i.kt)("p",null,"| ",(0,i.kt)("inlineCode",{parentName:"p"},"type: string")," | ",(0,i.kt)("strong",{parentName:"p"},"not null")),(0,i.kt)("p",null,"Code identifying the plan.",(0,i.kt)("br",null),"\nIt matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"code")," property of one of the plans."),(0,i.kt)("h4",{id:"started_at"},"started_at"),(0,i.kt)("p",null,"| ",(0,i.kt)("inlineCode",{parentName:"p"},"type: string")," | ISO 8601 datetime | ",(0,i.kt)("strong",{parentName:"p"},"nullable")),(0,i.kt)("p",null,"Start date of the subscription. It could be null if the subscription is ",(0,i.kt)("inlineCode",{parentName:"p"},"pending")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"canceled"),"."),(0,i.kt)("h4",{id:"status"},"status"),(0,i.kt)("p",null,"| ",(0,i.kt)("inlineCode",{parentName:"p"},"type: string")," | ",(0,i.kt)("strong",{parentName:"p"},"not null")),(0,i.kt)("p",null,"Status of the subscription."),(0,i.kt)("p",null,"Possible values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pending"),": a previous subscription has been downgraded, the current one is waiting for its automatic activation at the end of the billing period."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"active"),": the subscription is currently applied to the customer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"terminated"),": the subscription is not active anymore"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"canceled"),": the subscription has been stopped before its activation. It could happen when two consecutive downgrade have been applied to a customer or when a subscription with a pending one is terminaded.")),(0,i.kt)("h4",{id:"terminated_at"},"terminated_at"),(0,i.kt)("p",null,"| ",(0,i.kt)("inlineCode",{parentName:"p"},"type: string")," | ISO 8601 datetime | ",(0,i.kt)("strong",{parentName:"p"},"nullable")),(0,i.kt)("p",null,"Termination date of the subscription. It's not null when the subscription is ",(0,i.kt)("inlineCode",{parentName:"p"},"terminated"),"."))}k.isMDXComponent=!0}}]);
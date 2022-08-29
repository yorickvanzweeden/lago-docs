"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[9436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,k=s["".concat(i,".").concat(m)]||s[m]||d[m]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),o=n(7294),r=n(6010),l=n(2389),p=n(7392),i=n(7094),u=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function s(e){var t,n;const{lazy:l,block:s,defaultValue:m,values:k,groupId:b,className:g}=e,N=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:N.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,p.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const _=null===m?m:null!=(t=null!=m?m:null==(n=N.find((e=>e.props.default)))?void 0:n.props.value)?t:N[0].props.value;if(null!==_&&!y.some((e=>e.value===_)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:f,setTabGroupChoices:T}=(0,i.U)(),[v,C]=(0,o.useState)(_),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=b){const e=f[b];null!=e&&e!==v&&y.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,n=x.indexOf(t),a=y[n].value;a!==v&&(O(t),C(a),null!=b&&T(b,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var o;const t=x.indexOf(e.currentTarget)-1;n=null!=(o=x[t])?o:x[x.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},g)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>x.push(e),onKeyDown:I,onFocus:E,onClick:E},l,{className:(0,r.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":v===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(N.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,l.Z)();return o.createElement(s,(0,a.Z)({key:String(t)},e))}},8183:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>k,NotNullable:()=>N,Optional:()=>m,PostEndpoint:()=>b,Required:()=>s,Type:()=>g,assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(5488),l=n(5162);const p={sidebar_position:7},i="Apply a coupon to a customer",u={unversionedId:"api/coupons/apply-coupon",id:"api/coupons/apply-coupon",title:"Apply a coupon to a customer",description:"Route",source:"@site/docs/api/07_coupons/apply-coupon.mdx",sourceDirName:"api/07_coupons",slug:"/api/coupons/apply-coupon",permalink:"/docs/api/coupons/apply-coupon",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"api",previous:{title:"Get all coupons",permalink:"/docs/api/coupons/get-all-coupons"},next:{title:"Add-on object",permalink:"/docs/api/add_ons/add-on-object"}},c={},d=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Responses",id:"responses",level:2},{value:"The applied coupon object",id:"the-applied-coupon-object",level:2},{value:"Schema",id:"schema",level:3}],s=e=>{let{children:t,color:n}=e;return(0,o.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},m=e=>{let{children:t,color:n}=e;return(0,o.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},k=e=>{let{children:t,color:n}=e;return(0,o.kt)("span",{style:{fontSize:"12px"}},t)},b=e=>{let{children:t,color:n}=e;return(0,o.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},g=e=>{let{children:t,color:n}=e;return(0,o.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},t)},N=e=>{let{children:t,color:n}=e;return(0,o.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},y={toc:d,Required:s,Optional:m,Comment:k,PostEndpoint:b,Type:g,NotNullable:N};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"apply-a-coupon-to-a-customer"},"Apply a coupon to a customer"),(0,o.kt)("h2",{id:"route"},"Route"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="POST"',title:'"POST"'},"/api/v1/applied_coupons\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(r.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request POST "$LAGO_URL/api/v1/applied_coupons" \\\n  --header "Authorization: Bearer $API_KEY" \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{\n    "applied_coupon": {\n      "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "coupon_code": "code",\n      "amount_cents": 123,\n      "amount_currency": "EUR"\n    }\n  }\'\n'))),(0,o.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from lago_python_client import Client\nfrom lago_python_client.models import AppliedCoupon\n\nclient = Client(api_key=\'__YOUR_API_KEY__\')\n\napplied_coupon = AppliedCoupon(\n  external_customer_id="5eb02857-a71e-4ea2-bcf9-57d8885990ba",\n  coupon_code="code",\n  amount_cents=123,\n  amount_currency="EUR"\n)\n\nclient.applied_coupons().create(applied_coupon)\n'))),(0,o.kt)(l.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'require \'lago-ruby-client\'\n\nclient = Lago::Api::Client.new({api_key: \'__YOUR_API_KEY__\'})\n\nclient.applied_coupons.create(\n  external_customer_id: "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n  coupon_code: "code",\n  amount_cents: 123,\n  amount_currency: "EUR"\n)\n'))),(0,o.kt)(l.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import AppliedCoupon from \'lago-nodejs-client/applied_coupon\'\n\nlet client = new Client(\'__API_KEY__\')\n\nlet appliedCoupon = new AppliedCoupon(\n    "5eb02857-a71e-4ea2-bcf9-57d8885990ba",  // externalCustomerId\n    "code"  // couponCode\n    123,  // amountCents\n    "EUR"  // amountCurrency\n)\nawait client.applyCoupon(appliedCoupon);\n'))),(0,o.kt)(l.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'  import "fmt"\n  import "github.com/getlago/lago-go-client"\n\n  func main() {\n    lagoClient := lago.New().\n      SetApiKey("__YOUR_API_KEY__")\n\n    applyCouponInput := &lago.ApplyCouponInput{\n      ExternalCustomerID: "__YOUR_CUSTOMER_ID__",\n            CouponCode: "__YOUR_COUPON_CODE__",\n    }\n\n    appliedCoupon, err := lagoClient.Coupon().ApplyToCustomer(applyCouponInput)\n    if err != nil {\n      // Error is *lago.Error\n      panic(err)\n    }\n\n    // appliedCoupon is *lago.AppliedCoupon\n    fmt.Println(appliedCoupon)\n  }\n')))),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "applied_coupon": {\n    "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "coupon_code": "code",\n    "amount_cents": 123,\n    "amount_currency": "EUR"\n  }\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"external_customer_id"),(0,o.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,o.kt)(s,{mdxType:"Required"},(0,o.kt)("strong",{parentName:"td"},"Required"))),(0,o.kt)("td",{parentName:"tr",align:null},"Customer unique identifier in your application")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"coupon_code"),(0,o.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,o.kt)(s,{mdxType:"Required"},(0,o.kt)("strong",{parentName:"td"},"Required"))),(0,o.kt)("td",{parentName:"tr",align:null},"Code identifying the coupon.",(0,o.kt)("br",null),"It must match the ",(0,o.kt)("inlineCode",{parentName:"td"},"code")," property of one of the active coupons.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"amount_cents"),(0,o.kt)("td",{parentName:"tr",align:null},"Integer ","\xa0"," ","\xa0"," ","\xa0",(0,o.kt)(m,{mdxType:"Optional"},(0,o.kt)("strong",{parentName:"td"},"Optional"))),(0,o.kt)("td",{parentName:"tr",align:null},"Amount to apply to the customer.",(0,o.kt)("br",null),"If defined, it overrides the amount_cents property of the coupon")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"amount_currency"),(0,o.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,o.kt)(m,{mdxType:"Optional"},(0,o.kt)("strong",{parentName:"td"},"Optional"))),(0,o.kt)("td",{parentName:"tr",align:null},"Currency of the amount to apply to the customer.",(0,o.kt)("br",null),"If defined, it overrides the amount_currency property of the coupon.",(0,o.kt)("br",null),"It must match the currency of the customer's plan.")))),(0,o.kt)("h2",{id:"responses"},"Responses"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},"The coupon was assigned to the customer.",(0,o.kt)("p",null,"  Returns an ",(0,o.kt)("a",{parentName:"p",href:"./apply-coupon#the-applied-coupon-object"},"applied coupon")," object.")),(0,o.kt)(l.Z,{value:"400",label:"HTTP 400",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 400,\n  "error": "Bad Request"\n}\n')),(0,o.kt)("p",null,"  The ",(0,o.kt)("inlineCode",{parentName:"p"},"applied_coupon")," json root is not present in the request body.")),(0,o.kt)(l.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,o.kt)("p",null,"  Access to the API endpoint is unhautorized."),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,o.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,o.kt)(l.Z,{value:"422",label:"HTTP 422",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 422,\n  "error": "Unprocessable entity",\n  "message": "message"\n}\n')),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"Possible error messages:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"unable_to_find_customer"),": The customer id does not match an existing customer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"coupon_does_not_exist"),": The coupon code does not match an existing coupon.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"no_active_subscription"),": The customer does not have an active subscription.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"coupon_already_applied"),": A coupon is already applied to the customer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"currencies_does_not_match"),": Provided currency does not match the currency of the customer's plan.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Validation error on the record"),": The ",(0,o.kt)("inlineCode",{parentName:"p"},"error_details")," field contains the details of the errors:"),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"field"),(0,o.kt)("th",{parentName:"tr",align:null},"error"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"amount_cents")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"value_is_out_of_range")),(0,o.kt)("td",{parentName:"tr",align:null},"Provided amount cents is invalid.",(0,o.kt)("br",null),"It must be a positive integer.")))))))),(0,o.kt)("h2",{id:"the-applied-coupon-object"},"The applied coupon object"),(0,o.kt)("p",null,"This object represents a coupon assigned to a customer of your business.",(0,o.kt)("br",null),"\nFor now, it lets you assign a one-off coupon to a customer. This coupon can have a termination date or run forever."),(0,o.kt)("h3",{id:"schema"},"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "applied_coupon": {\n    "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n    "lago_coupon_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n    "coupon_code": "coupon-code",\n    "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n    "amount_cents": 123,\n    "amount_currency": "EUR",\n    "expiration_date": "2022-04-29",\n    "created_at": "2022-04-29T08:59:51Z",\n    "terminated_at": "2022-04-29T08:59:51Z",\n  }\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,o.kt)(g,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,o.kt)(N,{mdxType:"NotNullable"},"Not null")),(0,o.kt)("td",{parentName:"tr",align:null},"Unique identifer of the applied coupon in Lago application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"lago_coupon_id")," ","\xa0"," ","\xa0"," ",(0,o.kt)(g,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,o.kt)(N,{mdxType:"NotNullable"},"Not null")),(0,o.kt)("td",{parentName:"tr",align:null},"Unique identifer of the coupon in Lago application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"coupon_code")," ","\xa0"," ","\xa0"," ",(0,o.kt)(g,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,o.kt)(N,{mdxType:"NotNullable"},"Not null")),(0,o.kt)("td",{parentName:"tr",align:null},"Code identifying the coupon.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"external_customer_id")," ","\xa0"," ","\xa0"," ",(0,o.kt)(g,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,o.kt)(N,{mdxType:"NotNullable"},"Not null")),(0,o.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in your application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"lago_customer_id")," ","\xa0"," ","\xa0"," ",(0,o.kt)(g,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,o.kt)(N,{mdxType:"NotNullable"},"Not null")),(0,o.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in Lago application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,o.kt)(g,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,o.kt)(N,{mdxType:"NotNullable"},"Not null")),(0,o.kt)("td",{parentName:"tr",align:null},"Amount in cents.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,o.kt)(g,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,o.kt)(N,{mdxType:"NotNullable"},"Not null")),(0,o.kt)("td",{parentName:"tr",align:null},"Currency of the amount.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"expiration_date")," ","\xa0"," ","\xa0"," ",(0,o.kt)(g,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,o.kt)("br",null),(0,o.kt)(k,{mdxType:"Comment"},(0,o.kt)("em",{parentName:"td"},"ISO 8601 date"))),(0,o.kt)("td",{parentName:"tr",align:null},"Date after which the coupon will stop to apply to customer's invoices.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"created_at")," ","\xa0"," ","\xa0"," ",(0,o.kt)(g,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,o.kt)(N,{mdxType:"NotNullable"},"Not null")," ","\xa0"," ","\xa0"," ",(0,o.kt)("br",null),(0,o.kt)(k,{mdxType:"Comment"},(0,o.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,o.kt)("td",{parentName:"tr",align:null},"Date of assignation of the coupon to the customer.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"terminated_at")," ","\xa0"," ","\xa0"," ",(0,o.kt)(g,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,o.kt)("br",null),(0,o.kt)(k,{mdxType:"Comment"},(0,o.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,o.kt)("td",{parentName:"tr",align:null},"Date of total consumption of the coupon amount or date of manual deletion of the coupon from customer's coupons.")))))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[1254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(n),s=r,k=m["".concat(p,".").concat(s)]||m[s]||c[s]||o;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),i=n(7392),p=n(7094),u=n(2466);const d="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n;const{lazy:l,block:m,defaultValue:s,values:k,groupId:g,className:N}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,i.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const _=null===s?s:null!=(t=null!=s?s:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==_&&!b.some((e=>e.value===_)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:h,setTabGroupChoices:v}=(0,p.U)(),[C,T]=(0,r.useState)(_),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=g){const e=h[g];null!=e&&e!==C&&b.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==C&&(O(t),T(a),null!=g&&v(g,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;n=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},N)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>x.push(e),onKeyDown:I,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function s(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},26:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>k,Optional:()=>s,PostEndpoint:()=>g,Required:()=>m,assets:()=>d,contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={sidebar_position:2},p="Create coupon",u={unversionedId:"api/coupons/create-coupon",id:"api/coupons/create-coupon",title:"Create coupon",description:"Route",source:"@site/docs/api/09_coupons/create-coupon.mdx",sourceDirName:"api/09_coupons",slug:"/api/coupons/create-coupon",permalink:"/docs/api/coupons/create-coupon",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"api",previous:{title:"Coupon object",permalink:"/docs/api/coupons/coupon-object"},next:{title:"Update coupon",permalink:"/docs/api/coupons/update-coupon"}},d={},c=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Deprecated attributes",id:"deprecated-attributes",level:3},{value:"Responses",id:"responses",level:2}],m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},s=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},k=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{fontSize:"12px"}},t)},g=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},N={toc:c,Required:m,Optional:s,Comment:k,PostEndpoint:g};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-coupon"},"Create coupon"),(0,r.kt)("h2",{id:"route"},"Route"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="POST"',title:'"POST"'},"/api/v1/coupons\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(o.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request POST "$LAGO_URL/api/v1/coupons" \\\n  --header "Authorization: Bearer $API_KEY" \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{\n    "coupon": {\n      "name": "coupon_name",\n      "code": "coupon_code",\n      "amount_cents": 5000,\n      "amount_currency": "USD",\n      "coupon_type": "fixed_amount",\n      "reusable": true,\n      "frequency": "recurring",\n      "frequency_duration": 3,\n      "expiration": "time_limit",\n      "expiration_at": "2022-08-08T23:59:59Z"\n    }\n  }\'\n'))),(0,r.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from lago_python_client import Client\nfrom lago_python_client.models import Coupon\n\nclient = Client(api_key='__YOUR_API_KEY__')\n\ncoupon = Coupon(\n  name='name',\n  code='code_first',\n  amount_cents=1000,\n  amount_currency='EUR',\n  coupon_type='fixed_amount',\n  frequency='recurring',\n  frequency_duration=3,\n  reusable=True\n  expiration='time_limit',\n  expiration_at='2022-08-08T23:59:59Z'\n)\nclient.coupons().create(coupon)\n"))),(0,r.kt)(l.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'lago-ruby-client'\n\nclient = Lago::Api::Client.new({api_key: '__YOUR_API_KEY__'})\n\ncoupon = {\n  name: 'coupon name',\n  code: 'code',\n  expiration: 'time_limit',\n  expiration_at: '2022-08-08T23:59:59Z',\n  amount_cents: 100,\n  amount_currency: 'EUR',\n  coupon_type: 'fixed_amount',\n  reusable: true,\n  frequency: 'recurring',\n  frequency_duration: 3\n}\n\nclient.coupons.create(coupon)\n"))),(0,r.kt)(l.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import Coupon from 'lago-nodejs-client/coupon'\n\nlet client = new Client('__API_KEY__')\n\nlet coupon = new Coupon({\n    name: 'name1',\n    code: 'code1',\n    expiration: 'time_limit',\n    expirationAt: '2022-08-08T23:59:59Z',\n    amountCents: 10000,\n    amountCurrency: 'USD',\n    couponType: 'fixed_amount',\n    reusable: true,\n    frequency: 'recurring',\n    frequencyDuration: 3\n})\nawait client.createCoupon(coupon);\n"))),(0,r.kt)(l.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  import "fmt"\n  import "github.com/getlago/lago-go-client"\n\n  func main() {\n    lagoClient := lago.New().\n      SetApiKey("__YOUR_API_KEY__")\n\n    couponInput := &lago.CouponInput{\n      Name:               "Coupon",\n      Code:               "coupon",\n      AmountCents:        1500,\n      AmountCurrency:     lago.EUR,\n      Reusable:           true,\n      Expiration:         lago.CouponExpirationTimeLimit,\n      ExpirationAt:       "2022-08-08T23:59:59Z",\n      CouponType:         lago.CouponTypeFixedAmount,\n      Frequency:          lago.CouponFrequencyRecurring,\n      FrequencyDuration:  3\n    }\n\n    coupon, err := lagoClient.Coupon().Create(couponInput)\n    if err != nil {\n      // Error is *lago.Error\n      panic(err)\n    }\n\n    // coupon is *lago.Coupon\n    fmt.Println(coupon)\n  }\n'))),(0,r.kt)(l.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing System.Diagnostics;\nusing Org.OpenAPITools.Api;\nusing Org.OpenAPITools.Client;\nusing Org.OpenAPITools.Model;\n\nnamespace Example\n{\n  public class CreateCouponExample\n  {\n      public static void Main()\n      {\n          Configuration.Default.BasePath = "https://api.getlago.com/api/v1";\n          // Configure HTTP bearer authorization: bearerAuth\n          Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";\n\n          var apiInstance = new CouponsApi(Configuration.Default);\n          var couponInput = new CouponInput(); // CouponInput | Coupon payload\n\n          try\n          {\n              // Create a new coupon\n              Coupon result = apiInstance.CreateCoupon(couponInput);\n              Debug.WriteLine(result);\n          }\n          catch (ApiException e)\n          {\n              Debug.Print("Exception when calling CouponsApi.CreateCoupon: " + e.Message );\n              Debug.Print("Status Code: "+ e.ErrorCode);\n              Debug.Print(e.StackTrace);\n          }\n      }\n  }\n}\n')))),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "coupon": {\n    "name": "coupon_name",\n    "code": "coupon_code",\n    "amount_cents": 5000,\n    "amount_currency": "USD",\n    "expiration": "time_limit",\n    "expiration_at": "2022-08-08T23:59:59Z",\n    "coupon_type": "fixed_amount",\n    "reusable": true,\n    "frequency": "recurring",\n    "frequency_duration": 3\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Coupon name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Code identifying the coupon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount_cents"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(s,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional (required only for ",(0,r.kt)("inlineCode",{parentName:"strong"},"fixed_amount")," type)"))),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of the coupon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount_currency"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(s,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional (required only for ",(0,r.kt)("inlineCode",{parentName:"strong"},"fixed_amount")," type)"))),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reusable"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(s,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Field specifying if coupon is reusable or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expiration"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Expiration type.",(0,r.kt)("br",null),"It can be ",(0,r.kt)("inlineCode",{parentName:"td"},"time_limit")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"no_expiration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expiration_at"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(s,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional (required only for ",(0,r.kt)("inlineCode",{parentName:"strong"},"time_limit")," type)")),(0,r.kt)("br",null),(0,r.kt)(k,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,r.kt)("td",{parentName:"tr",align:null},"Expiration date and time of the coupon.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"coupon_type"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Coupon type.",(0,r.kt)("br",null),"It can be ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed_amount")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"percentage"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"frequency"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Frequency type.",(0,r.kt)("br",null),"It can be ",(0,r.kt)("inlineCode",{parentName:"td"},"once")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"recurring"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"frequency_duration"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(s,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional (required only for ",(0,r.kt)("inlineCode",{parentName:"strong"},"recurring")," frequency type)"))),(0,r.kt)("td",{parentName:"tr",align:null},"This field determines the number of billing periods to which the coupon applies.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"percentage_rate"),(0,r.kt)("td",{parentName:"tr",align:null},"Float ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(s,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional (required only for ",(0,r.kt)("inlineCode",{parentName:"strong"},"percentage")," coupon type)"))),(0,r.kt)("td",{parentName:"tr",align:null},"Rate of the coupon.")))),(0,r.kt)("h3",{id:"deprecated-attributes"},"Deprecated attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expiration_date"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(s,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional (required only for ",(0,r.kt)("inlineCode",{parentName:"strong"},"time_limit")," type)"))),(0,r.kt)("td",{parentName:"tr",align:null},"Expiration date of the coupon.",(0,r.kt)("br",null),' Replaced by expiration_at. Value will be converted to "end_of_day"')))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},"The coupon was created",(0,r.kt)("p",null,"  Returns a ",(0,r.kt)("a",{parentName:"p",href:"./coupon-object"},"coupon")," object.")),(0,r.kt)(l.Z,{value:"400",label:"HTTP 400",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 400,\n  "error": "Bad Request"\n}\n')),(0,r.kt)("p",null,"  The ",(0,r.kt)("inlineCode",{parentName:"p"},"coupon")," json root is not present in the request body.")),(0,r.kt)(l.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,r.kt)("p",null,"  Access to the API endpoint is unhautorized."),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,r.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,r.kt)(l.Z,{value:"422",label:"HTTP 422",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 422,\n  "error": "Unprocessable entity",\n  "code": "validation_errors",\n  "error_details": {\n    "field": ["error"]\n  }\n}\n')),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Possible errors:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"field"),(0,r.kt)("th",{parentName:"tr",align:null},"error"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_mandatory")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")," is missing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"code")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_already_exists")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"code")," value is already used for another coupon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"amount_cents")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_out_of_range")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"amount_cents")," value is not a positive integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"amount_currency")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_invalid")),(0,r.kt)("td",{parentName:"tr",align:null},"Provided currency value is invalid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expiration_at")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_date")),(0,r.kt)("td",{parentName:"tr",align:null},"Field does not have a valid ISO 8601 datetime format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expiration_duration")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_out_of_range")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expiration_duration")," is not a positive integer")))))))}y.isMDXComponent=!0}}]);
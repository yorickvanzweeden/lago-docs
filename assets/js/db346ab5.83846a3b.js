"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[7765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[d]="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),p=n(16550),u=n(91980),i=n(67392),c=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function s(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,p.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=s(e),[l,p]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,i]=k({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&p(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);p(e),i(e),g(e)}),[i,g,o]),tabValues:o}}var y=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:n,selectedValue:p,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),s=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==p&&(d(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:s},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":p===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function h(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(N,(0,a.Z)({},e,t)),r.createElement(f,(0,a.Z)({},e,t)))}function _(e){const t=(0,y.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},48030:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>k,NotNullable:()=>b,Optional:()=>m,PostEndpoint:()=>g,Required:()=>s,Type:()=>y,assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),l=n(85162);const p={sidebar_position:7},u="Apply a coupon to a customer",i={unversionedId:"api/coupons/apply-coupon",id:"api/coupons/apply-coupon",title:"Apply a coupon to a customer",description:"Route",source:"@site/docs/api/09_coupons/apply-coupon.mdx",sourceDirName:"api/09_coupons",slug:"/api/coupons/apply-coupon",permalink:"/docs/api/coupons/apply-coupon",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"api",previous:{title:"Get all coupons",permalink:"/docs/api/coupons/get-all-coupons"},next:{title:"Destroy applied coupon",permalink:"/docs/api/coupons/destroy-applied-coupon"}},c={},d=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Responses",id:"responses",level:2},{value:"The applied coupon object",id:"the-applied-coupon-object",level:2},{value:"Schema",id:"schema",level:3}],s=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},k=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{fontSize:"12px"}},t)},g=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},y=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},t)},b=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},N={toc:d,Required:s,Optional:m,Comment:k,PostEndpoint:g,Type:y,NotNullable:b},f="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"apply-a-coupon-to-a-customer"},"Apply a coupon to a customer"),(0,r.kt)("h2",{id:"route"},"Route"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="POST"',title:'"POST"'},"/api/v1/applied_coupons\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(o.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request POST "$LAGO_URL/api/v1/applied_coupons" \\\n  --header "Authorization: Bearer $API_KEY" \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{\n    "applied_coupon": {\n      "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "coupon_code": "code",\n      "amount_cents": 123,\n      "amount_currency": "EUR",\n      "frequency": "recurring",\n      "frequency_duration": 3\n    }\n  }\'\n'))),(0,r.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from lago_python_client.client import Client\nfrom lago_python_client.exceptions import LagoApiError\nfrom lago_python_client.models import AppliedCoupon\n\nclient = Client(api_key=\'__YOUR_API_KEY__\')\n\napplied_coupon = AppliedCoupon(\n  external_customer_id="5eb02857-a71e-4ea2-bcf9-57d8885990ba",\n  coupon_code="code",\n  amount_cents=123,\n  amount_currency="EUR",\n  frequency="once",\n  frequency_duration=3\n)\n\ntry:\n    client.applied_coupons.create(applied_coupon)\nexcept LagoApiError as e:\n    repair_broken_state(e)  # do something on error or raise your own exception\n'))),(0,r.kt)(l.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'require \'lago-ruby-client\'\n\nclient = Lago::Api::Client.new({api_key: \'__YOUR_API_KEY__\'})\n\nclient.applied_coupons.create(\n  external_customer_id: "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n  coupon_code: "code",\n  amount_cents: 123,\n  amount_currency: "EUR",\n  frequency: "once",\n  frequency_duration: 3\n)\n'))),(0,r.kt)(l.Z,{value:"javascript",label:"Javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const appliedCouponObject = {\n  external_customer_id: "5eb02857-a71e-4ea2-bcf9-57d8885990ba",\n  coupon_code: "code",\n  amount_cents: 123,\n  amount_currency: "EUR",\n  frequency: "once" as AppliedCouponObject["frequency"],\n  frequency_duration: 3,\n};\n\nawait client.appliedCoupons.applyCoupon({\n  applied_coupon: appliedCouponObject,\n});\n'))),(0,r.kt)(l.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  import "fmt"\n  import "github.com/getlago/lago-go-client"\n\n  func main() {\n    lagoClient := lago.New().\n      SetApiKey("__YOUR_API_KEY__")\n\n    applyCouponInput := &lago.ApplyCouponInput{\n      ExternalCustomerID: "__YOUR_CUSTOMER_ID__",\n      CouponCode: "__YOUR_COUPON_CODE__",\n      Frequency: lago.CouponFrequencyRecurring,\n      FrequencyDuration: 3\n    }\n\n    appliedCoupon, err := lagoClient.Coupon().ApplyToCustomer(applyCouponInput)\n    if err != nil {\n      // Error is *lago.Error\n      panic(err)\n    }\n\n    // appliedCoupon is *lago.AppliedCoupon\n    fmt.Println(appliedCoupon)\n  }\n'))),(0,r.kt)(l.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing System.Diagnostics;\nusing Org.OpenAPITools.Api;\nusing Org.OpenAPITools.Client;\nusing Org.OpenAPITools.Model;\n\nnamespace Example\n{\n  public class ApplyCouponExample\n  {\n      public static void Main()\n      {\n          Configuration.Default.BasePath = "https://api.getlago.com/api/v1";\n          // Configure HTTP bearer authorization: bearerAuth\n          Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";\n\n          var apiInstance = new CouponsApi(Configuration.Default);\n          var appliedCouponInput = new AppliedCouponInput(); // AppliedCouponInput | Apply coupon payload\n\n          try\n          {\n              // Apply a coupon to a customer\n              AppliedCoupon result = apiInstance.ApplyCoupon(appliedCouponInput);\n              Debug.WriteLine(result);\n          }\n          catch (ApiException e)\n          {\n              Debug.Print("Exception when calling CouponsApi.ApplyCoupon: " + e.Message );\n              Debug.Print("Status Code: "+ e.ErrorCode);\n              Debug.Print(e.StackTrace);\n          }\n      }\n  }\n}\n'))),(0,r.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\n\n// Configure Bearer authorization: bearerAuth\n$config = OpenAPI\\Client\\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');\n\n\n$apiInstance = new OpenAPI\\Client\\Api\\CouponsApi(\n  // If you want use custom http client, pass your client which implements `GuzzleHttp\\ClientInterface`.\n  // This is optional, `GuzzleHttp\\Client` will be used as default.\n  new GuzzleHttp\\Client(),\n  $config\n);\n$applied_coupon_input = new \\OpenAPI\\Client\\Model\\AppliedCouponInput(); // \\OpenAPI\\Client\\Model\\AppliedCouponInput | Apply coupon payload\n\ntry {\n  $result = $apiInstance->applyCoupon($applied_coupon_input);\n  print_r($result);\n} catch (Exception $e) {\n  echo 'Exception when calling CouponsApi->applyCoupon: ', $e->getMessage(), PHP_EOL;\n}\n")))),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "applied_coupon": {\n    "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "coupon_code": "code",\n    "amount_cents": 123,\n    "amount_currency": "EUR",\n    "percentage_rate": null,\n    "frequency": "recurring",\n    "frequency_duration": 3\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external_customer_id"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(s,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Customer unique identifier in your application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"coupon_code"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(s,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Code identifying the coupon.",(0,r.kt)("br",null),"It must match the ",(0,r.kt)("inlineCode",{parentName:"td"},"code")," property of one of the active coupons.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount_cents"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Amount to apply to the customer.",(0,r.kt)("br",null),"If defined, it overrides the amount_cents property of the coupon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount_currency"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the amount to apply to the customer.",(0,r.kt)("br",null),"If defined, it overrides the amount_currency property of the coupon.",(0,r.kt)("br",null),"It must match the currency of the customer's plan.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"percentage_rate"),(0,r.kt)("td",{parentName:"tr",align:null},"Float ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Rate to apply with the coupon.",(0,r.kt)("br",null),"If defined, it overrides the percentage_rate property of the coupon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"frequency"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Frequency type.",(0,r.kt)("br",null),"It can be ",(0,r.kt)("inlineCode",{parentName:"td"},"once")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"recurring"),".",(0,r.kt)("br",null),"If defined, it overrides the frequency property of the coupon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"frequency_duration"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"This field determines the number of billing periods to which the coupon applies.",(0,r.kt)("br",null),"If defined, it overrides the frequency_duration property of the coupon")))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},"The coupon was assigned to the customer.",(0,r.kt)("p",null,"  Returns an ",(0,r.kt)("a",{parentName:"p",href:"./apply-coupon#the-applied-coupon-object"},"applied coupon")," object.")),(0,r.kt)(l.Z,{value:"400",label:"HTTP 400",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 400,\n  "error": "Bad Request"\n}\n')),(0,r.kt)("p",null,"  The ",(0,r.kt)("inlineCode",{parentName:"p"},"applied_coupon")," json root is not present in the request body.")),(0,r.kt)(l.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,r.kt)("p",null,"  Access to the API endpoint is unhautorized."),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,r.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,r.kt)(l.Z,{value:"404",label:"HTTP 404",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 404,\n  "error": "Not Found",\n  "code": "customer_not_found"\n}\n')),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Possible error codes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"customer_not_found"),": The external customer id does not match an existing customer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"coupon_not_found"),": The coupon code does not match an existing coupon."))),(0,r.kt)(l.Z,{value:"422",label:"HTTP 422",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 422,\n  "error": "Unprocessable entity",\n  "message": "message"\n}\n')),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Possible errors:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"field"),(0,r.kt)("th",{parentName:"tr",align:null},"error"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"amount_cents")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_out_of_range")),(0,r.kt)("td",{parentName:"tr",align:null},"Provided amount cents is invalid.",(0,r.kt)("br",null),"It must be a positive integer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"amount_currency")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_invalid")),(0,r.kt)("td",{parentName:"tr",align:null},"Provided currency value is invalid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"coupon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"coupon_already_applied")),(0,r.kt)("td",{parentName:"tr",align:null},"Coupon is already applied to the customer")))))),(0,r.kt)("h2",{id:"the-applied-coupon-object"},"The applied coupon object"),(0,r.kt)("p",null,"This object represents a coupon assigned to a customer of your business.",(0,r.kt)("br",null),"\nFor now, it lets you assign a one-off coupon to a customer. This coupon can have a termination date or run forever."),(0,r.kt)("h3",{id:"schema"},"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "applied_coupon": {\n    "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n    "lago_coupon_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n    "coupon_code": "coupon-code",\n    "status": "active",\n    "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n    "amount_cents": 123,\n    "amount_cents_remaining": 50,\n    "amount_currency": "EUR",\n    "expiration_date": "2022-04-29",\n    "percentage_rate": null,\n    "frequency": "recurring",\n    "frequency_duration": 3,\n    "frequency_duration_remaining": 1,\n    "created_at": "2022-04-29T08:59:51Z",\n    "terminated_at": "2022-04-29T08:59:51Z",\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(y,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(b,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the applied coupon in Lago application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_coupon_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(y,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(b,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the coupon in Lago application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"coupon_code")," ","\xa0"," ","\xa0"," ",(0,r.kt)(y,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(b,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Code identifying the coupon.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"external_customer_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(y,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(b,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in your application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_customer_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(y,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(b,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in Lago application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"status")," ","\xa0"," ","\xa0"," ",(0,r.kt)(y,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(b,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Can be either ",(0,r.kt)("inlineCode",{parentName:"td"},"active")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"terminated"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(y,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(b,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount in cents.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_cents_remaining")," ","\xa0"," ","\xa0"," ",(0,r.kt)(y,{mdxType:"Type"},"Integer")),(0,r.kt)("td",{parentName:"tr",align:null},"Remaining amount in cents. It applies only to ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed_amount")," coupons where frequency is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"once"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(y,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(b,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the amount.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"percentage_rate")," ","\xa0"," ","\xa0"," ",(0,r.kt)(y,{mdxType:"Type"},"Float")),(0,r.kt)("td",{parentName:"tr",align:null},"Percentage rate of the coupon.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"frequency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(y,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(b,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},"Frequency type. ",(0,r.kt)("br",null)," ",(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Possible values")),(0,r.kt)("div",null,"- ",(0,r.kt)("inlineCode",{parentName:"td"},"once"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"recurring"),(0,r.kt)("div",null))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"frequency_duration")," ","\xa0"," ","\xa0"," ",(0,r.kt)(y,{mdxType:"Type"},"Integer")),(0,r.kt)("td",{parentName:"tr",align:null},"It determines the number of billing periods to which the coupon applies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"frequency_duration_remaining")," ","\xa0"," ","\xa0"," ",(0,r.kt)(y,{mdxType:"Type"},"Integer")),(0,r.kt)("td",{parentName:"tr",align:null},"It determines the remaining number of billing periods to which the coupon applies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"expiration_date")," ","\xa0"," ","\xa0"," ",(0,r.kt)(y,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)("br",null),(0,r.kt)(k,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Date after which the coupon will stop to apply to customer's invoices.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"created_at")," ","\xa0"," ","\xa0"," ",(0,r.kt)(y,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(b,{mdxType:"NotNullable"},"Not null")," ","\xa0"," ","\xa0"," ",(0,r.kt)("br",null),(0,r.kt)(k,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,r.kt)("td",{parentName:"tr",align:null},"Date of assignation of the coupon to the customer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"terminated_at")," ","\xa0"," ","\xa0"," ",(0,r.kt)(y,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)("br",null),(0,r.kt)(k,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,r.kt)("td",{parentName:"tr",align:null},"Date of total consumption of the coupon amount or date of manual deletion of the coupon from customer's coupons.")))))}h.isMDXComponent=!0}}]);
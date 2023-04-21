"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[1584],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(67294),a=t(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>T});var r=t(87462),a=t(67294),o=t(86010),l=t(12466),u=t(16550),i=t(91980),s=t(67392),c=t(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,u.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=d(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[i,s]=f({queryString:t,groupId:r}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),b=(()=>{const e=i??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var b=t(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:n,block:t,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=s[t].value;r!==u&&(p(n),i(r))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":u===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function k(e){const n=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(y,(0,r.Z)({},e,n)),a.createElement(v,(0,r.Z)({},e,n)))}function T(e){const n=(0,b.Z)();return a.createElement(k,(0,r.Z)({key:String(n)},e))}},30137:(e,n,t)=>{t.r(n),t.d(n,{Comment:()=>f,Optional:()=>m,PostEndpoint:()=>g,Required:()=>d,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905)),o=t(74866),l=t(85162);const u={sidebar_position:5},i="Get a specific coupon",s={unversionedId:"api/coupons/get-coupon",id:"api/coupons/get-coupon",title:"Get a specific coupon",description:"Route",source:"@site/docs/api/09_coupons/get-coupon.mdx",sourceDirName:"api/09_coupons",slug:"/api/coupons/get-coupon",permalink:"/docs/api/coupons/get-coupon",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"api",previous:{title:"Destroy coupon",permalink:"/docs/api/coupons/destroy-coupon"},next:{title:"Get all coupons",permalink:"/docs/api/coupons/get-all-coupons"}},c={},p=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Responses",id:"responses",level:2}],d=e=>{let{children:n,color:t}=e;return(0,a.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},n)},m=e=>{let{children:n,color:t}=e;return(0,a.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},n)},f=e=>{let{children:n,color:t}=e;return(0,a.kt)("span",{style:{fontSize:"12px"}},n)},g=e=>{let{children:n,color:t}=e;return(0,a.kt)("span",{style:{color:"#008559",fontSize:"12px"}},n)},b={toc:p,Required:d,Optional:m,Comment:f,PostEndpoint:g},h="wrapper";function y(e){let{components:n,...t}=e;return(0,a.kt)(h,(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-a-specific-coupon"},"Get a specific coupon"),(0,a.kt)("h2",{id:"route"},"Route"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="GET"',title:'"GET"'},"/api/v1/coupons/:code\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(o.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request GET "$LAGO_URL/api/v1/coupons/:code" \\\n  --header "Authorization: Bearer $API_KEY"\n'))),(0,a.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from lago_python_client.client import Client\nfrom lago_python_client.exceptions import LagoApiError\n\nclient = Client(api_key='__YOUR_API_KEY__')\n\ntry:\n    client.coupons.find('code')\nexcept LagoApiError as e:\n    repair_broken_state(e)  # do something on error or raise your own exception\n"))),(0,a.kt)(l.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'lago-ruby-client'\n\nclient = Lago::Api::Client.new({api_key: '__YOUR_API_KEY__'})\n\nclient.coupons.get('code')\n"))),(0,a.kt)(l.Z,{value:"javascript",label:"Javascript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"await client.coupons.findCoupon('code')\n"))),(0,a.kt)(l.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'  import "fmt"\n  import "github.com/getlago/lago-go-client"\n\n  func main() {\n    lagoClient := lago.New().\n      SetApiKey("__YOUR_API_KEY__")\n\n    coupon, err := lagoClient.Coupon().Get("__YOUR_COUPON_CODE__")\n    if err != nil {\n      // Error is *lago.Error\n      panic(err)\n    }\n\n    // coupon is *lago.Coupon\n    fmt.Println(coupon)\n  }\n'))),(0,a.kt)(l.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing System.Diagnostics;\nusing Org.OpenAPITools.Api;\nusing Org.OpenAPITools.Client;\nusing Org.OpenAPITools.Model;\n\nnamespace Example\n{\n  public class FindCouponExample\n  {\n      public static void Main()\n      {\n          Configuration.Default.BasePath = "https://api.getlago.com/api/v1";\n          // Configure HTTP bearer authorization: bearerAuth\n          Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";\n\n          var apiInstance = new CouponsApi(Configuration.Default);\n          var code = "example_code";  // string | Code of the existing coupon\n\n          try\n          {\n              // Find coupon by code\n              Coupon result = apiInstance.FindCoupon(code);\n              Debug.WriteLine(result);\n          }\n          catch (ApiException e)\n          {\n              Debug.Print("Exception when calling CouponsApi.FindCoupon: " + e.Message );\n              Debug.Print("Status Code: "+ e.ErrorCode);\n              Debug.Print(e.StackTrace);\n          }\n      }\n  }\n}\n'))),(0,a.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\n\n// Configure Bearer authorization: bearerAuth\n$config = OpenAPI\\Client\\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');\n\n\n$apiInstance = new OpenAPI\\Client\\Api\\CouponsApi(\n  // If you want use custom http client, pass your client which implements `GuzzleHttp\\ClientInterface`.\n  // This is optional, `GuzzleHttp\\Client` will be used as default.\n  new GuzzleHttp\\Client(),\n  $config\n);\n$code = \"example_code\"; // string | Code of the existing coupon\n\ntry {\n  $result = $apiInstance->findCoupon($code);\n  print_r($result);\n} catch (Exception $e) {\n  echo 'Exception when calling CouponsApi->findCoupon: ', $e->getMessage(), PHP_EOL;\n}\n")))),(0,a.kt)("h2",{id:"responses"},"Responses"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},"The coupon was successfully found",(0,a.kt)("p",null,"  Returns a ",(0,a.kt)("a",{parentName:"p",href:"./coupon-object"},"coupon")," object.")),(0,a.kt)(l.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,a.kt)("p",null,"  Access to the API endpoint is unhautorized."),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,a.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,a.kt)(l.Z,{value:"404",label:"HTTP 404",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 404,\n  "error": "Not Found",\n  "code": "coupon_not_found"\n}\n')),(0,a.kt)("p",null,"  The ",(0,a.kt)("inlineCode",{parentName:"p"},"coupon")," was not found by the code."))))}y.isMDXComponent=!0}}]);
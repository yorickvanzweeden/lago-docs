"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[4103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(87462),a=n(67294),l=n(86010),o=n(12466),i=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=b({queryString:n,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),f=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var f=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=g(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function _(e){const t=(0,f.Z)();return a.createElement(v,(0,r.Z)({key:String(t)},e))}},30282:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>b,Optional:()=>m,PostEndpoint:()=>g,Required:()=>d,assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),l=n(74866),o=n(85162);const i={sidebar_position:5},s="Get all subscriptions for a customer",u={unversionedId:"api/subscriptions/get-all-subscriptions",id:"api/subscriptions/get-all-subscriptions",title:"Get all subscriptions for a customer",description:"Route",source:"@site/docs/api/05_subscriptions/get-all-subscriptions.mdx",sourceDirName:"api/05_subscriptions",slug:"/api/subscriptions/get-all-subscriptions",permalink:"/docs/api/subscriptions/get-all-subscriptions",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"api",previous:{title:"Update subscription",permalink:"/docs/api/subscriptions/update-subscription"},next:{title:"Events",permalink:"/docs/category/events-1"}},c={},p=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Responses",id:"responses",level:2}],d=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},m=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},b=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{fontSize:"12px"}},t)},g=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},f={toc:p,Required:d,Optional:m,Comment:b,PostEndpoint:g},h="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-all-subscriptions-for-a-customer"},"Get all subscriptions for a customer"),(0,a.kt)("h2",{id:"route"},"Route"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="GET"',title:'"GET"'},"/api/v1/subscriptions?external_customer_id=id\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(l.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request GET "$LAGO_URL/api/v1/subscriptions?external_customer_id=123" \\\n  --header "Authorization: Bearer $API_KEY"\n'))),(0,a.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from lago_python_client.client import Client\nfrom lago_python_client.exceptions import LagoApiError\n\nclient = Client(api_key='__YOUR_API_KEY__')\n\ntry:\n    client.subscriptions.find_all({'external_customer_id': '123'})\nexcept LagoApiError as e:\n    repair_broken_state(e)  # do something on error or raise your own exception\n"))),(0,a.kt)(o.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'lago-ruby-client'\n\nclient = Lago::Api::Client.new({api_key: '__YOUR_API_KEY__'})\n\nclient.subscriptions.get_all({ external_customer_id: '123'})\n"))),(0,a.kt)(o.Z,{value:"javascript",label:"Javascript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'await client.subscriptions.findAllSubscriptions({\n  external_customer_id: "123",\n  page: 1\n});\n'))),(0,a.kt)(o.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing System.Diagnostics;\nusing Org.OpenAPITools.Api;\nusing Org.OpenAPITools.Client;\nusing Org.OpenAPITools.Model;\n\nnamespace Example\n{\n  public class FindAllSubscriptionsExample\n  {\n      public static void Main()\n      {\n          Configuration.Default.BasePath = "https://api.getlago.com/api/v1";\n          // Configure HTTP bearer authorization: bearerAuth\n          Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";\n\n          var apiInstance = new SubscriptionsApi(Configuration.Default);\n          var externalCustomerId = "12345";  // string | External customer ID\n          var page = 2;  // int? | Number of page (optional) \n          var perPage = 20;  // int? | Number of records per page (optional) \n\n          try\n          {\n              // Find subscriptions\n              Subscriptions result = apiInstance.FindAllSubscriptions(externalCustomerId, page, perPage);\n              Debug.WriteLine(result);\n          }\n          catch (ApiException e)\n          {\n              Debug.Print("Exception when calling SubscriptionsApi.FindAllSubscriptions: " + e.Message );\n              Debug.Print("Status Code: "+ e.ErrorCode);\n              Debug.Print(e.StackTrace);\n          }\n      }\n  }\n}\n'))),(0,a.kt)(o.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\n\n// Configure Bearer authorization: bearerAuth\n$config = OpenAPI\\Client\\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');\n\n\n$apiInstance = new OpenAPI\\Client\\Api\\SubscriptionsApi(\n  // If you want use custom http client, pass your client which implements `GuzzleHttp\\ClientInterface`.\n  // This is optional, `GuzzleHttp\\Client` will be used as default.\n  new GuzzleHttp\\Client(),\n  $config\n);\n$external_customer_id = \"12345\"; // string | External customer ID\n$page = 2; // int | Number of page\n$per_page = 20; // int | Number of records per page\n\ntry {\n  $result = $apiInstance->findAllSubscriptions($external_customer_id, $page, $per_page);\n  print_r($result);\n} catch (Exception $e) {\n  echo 'Exception when calling SubscriptionsApi->findAllSubscriptions: ', $e->getMessage(), PHP_EOL;\n}\n")))),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"external_customer_id"),(0,a.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,a.kt)(d,{mdxType:"Required"},(0,a.kt)("strong",{parentName:"td"},"Required"))),(0,a.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in your application.")))),(0,a.kt)("h2",{id:"responses"},"Responses"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"  Subscriptions were successfully found. Returns a list of ",(0,a.kt)("a",{parentName:"p",href:"./subscription-object"},"subscription")," objects.")),(0,a.kt)(o.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,a.kt)("p",null,"  Access to the API endpoint is unhautorized."),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,a.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,a.kt)(o.Z,{value:"404",label:"HTTP 404",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 404,\n  "error": "Not Found",\n  "code": "customer_not_found"\n}\n')),(0,a.kt)("p",null,"  The ",(0,a.kt)("inlineCode",{parentName:"p"},"customer")," was not found."))))}y.isMDXComponent=!0}}]);
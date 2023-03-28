"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[8637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(s,".").concat(m)]||p[m]||b[m]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(87462),a=n(67294),l=n(86010),i=n(12466),o=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function b(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=b(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=d({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),g=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var g=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),b=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==o&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":b(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:b},i,{className:(0,l.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function _(e){const t=(0,g.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},13280:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>d,Optional:()=>m,PostEndpoint:()=>f,Required:()=>b,assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),l=n(74866),i=n(85162);const o={sidebar_position:4},s="Destroy billable metric",u={unversionedId:"api/billable_metrics/destroy-billable-metric",id:"api/billable_metrics/destroy-billable-metric",title:"Destroy billable metric",description:"Route",source:"@site/docs/api/02_billable_metrics/destroy-billable-metric.mdx",sourceDirName:"api/02_billable_metrics",slug:"/api/billable_metrics/destroy-billable-metric",permalink:"/docs/api/billable_metrics/destroy-billable-metric",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"api",previous:{title:"Update Billable metric",permalink:"/docs/api/billable_metrics/update-billable-metric"},next:{title:"Get a specific billable metric",permalink:"/docs/api/billable_metrics/get-billable-metric"}},c={},p=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Responses",id:"responses",level:2}],b=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},m=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},d=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{fontSize:"12px"}},t)},f=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},g={toc:p,Required:b,Optional:m,Comment:d,PostEndpoint:f},y="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"destroy-billable-metric"},"Destroy billable metric"),(0,a.kt)("h2",{id:"route"},"Route"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="DELETE"',title:'"DELETE"'},"/api/v1/billable_metrics/:code\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(l.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request DELETE "$LAGO_URL/api/v1/billable_metrics/:code" \\\n  --header "Authorization: Bearer $API_KEY"\n'))),(0,a.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from lago_python_client.client import Client\n\nclient = Client(api_key='__YOUR_API_KEY__')\n\nclient.billable_metrics.destroy('code')\n"))),(0,a.kt)(i.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'lago-ruby-client'\n\nclient = Lago::Api::Client.new({api_key: '__YOUR_API_KEY__'})\n\nclient.billable_metrics.destroy('code')\n"))),(0,a.kt)(i.Z,{value:"javascript",label:"Javascript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"await client.billableMetrics.destroyBillableMetric('code')\n"))),(0,a.kt)(i.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'  import "fmt"\n  import "github.com/getlago/lago-go-client"\n\n  func main() {\n    lagoClient := lago.New().\n      SetApiKey("__YOUR_API_KEY__")\n\n    billableMetric, err := lagoClient.BillableMetric().Delete("__BILLABLE_METRIC_ID__")\n    if err != nil {\n      // Error is *lago.Error\n      panic(err)\n    }\n\n    // billableMetric is *lago.BillableMetric\n    fmt.Println(billableMetric)\n  }\n'))),(0,a.kt)(i.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing System.Diagnostics;\nusing Org.OpenAPITools.Api;\nusing Org.OpenAPITools.Client;\nusing Org.OpenAPITools.Model;\n\nnamespace Example\n{\n  public class DestroyBillableMetricExample\n  {\n      public static void Main()\n      {\n          Configuration.Default.BasePath = "https://api.getlago.com/api/v1";\n          // Configure HTTP bearer authorization: bearerAuth\n          Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";\n\n          var apiInstance = new BillableMetricsApi(Configuration.Default);\n          var code = "example_code";  // string | Code of the existing billable metric\n\n          try\n          {\n              // Delete a billable metric\n              BillableMetric result = apiInstance.DestroyBillableMetric(code);\n              Debug.WriteLine(result);\n          }\n          catch (ApiException e)\n          {\n              Debug.Print("Exception when calling BillableMetricsApi.DestroyBillableMetric: " + e.Message );\n              Debug.Print("Status Code: "+ e.ErrorCode);\n              Debug.Print(e.StackTrace);\n          }\n      }\n  }\n}\n  }\n'))),(0,a.kt)(i.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\n\n// Configure Bearer authorization: bearerAuth\n$config = OpenAPI\\Client\\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');\n\n\n$apiInstance = new OpenAPI\\Client\\Api\\BillableMetricsApi(\n  // If you want use custom http client, pass your client which implements `GuzzleHttp\\ClientInterface`.\n  // This is optional, `GuzzleHttp\\Client` will be used as default.\n  new GuzzleHttp\\Client(),\n  $config\n);\n$code = \"example_code\"; // string | Code of the existing billable metric\n\ntry {\n  $result = $apiInstance->destroyBillableMetric($code);\n  print_r($result);\n} catch (Exception $e) {\n  echo 'Exception when calling BillableMetricsApi->destroyBillableMetric: ', $e->getMessage(), PHP_EOL;\n}\n")))),(0,a.kt)("h2",{id:"responses"},"Responses"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},"The billable metric was successfully destroyed",(0,a.kt)("p",null,"  Returns an ",(0,a.kt)("a",{parentName:"p",href:"./billable-metric-object"},"billable metric")," object.")),(0,a.kt)(i.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,a.kt)("p",null,"  Access to the API endpoint is unhautorized."),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,a.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,a.kt)(i.Z,{value:"404",label:"HTTP 404",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 404,\n  "error": "Not Found",\n  "code": "billable_metric_not_found"\n}\n')),(0,a.kt)("p",null,"  The ",(0,a.kt)("inlineCode",{parentName:"p"},"billable_metric")," was not found."))))}h.isMDXComponent=!0}}]);
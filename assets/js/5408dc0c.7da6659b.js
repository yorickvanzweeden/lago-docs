"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[596],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=l,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),l=a(7294),r=a(6010),i=a(2466),o=a(6550),u=a(1980),s=a(7392),p=a(12);function c(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[u,s]=g({queryString:a,groupId:n}),[c,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,p.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=u??c;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),b(e)}),[s,b,r]),tabValues:r}}var f=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=s[a].value;n!==o&&(c(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,r.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=b(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},l.createElement(h,(0,n.Z)({},e,t)),l.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return l.createElement(w,(0,n.Z)({key:String(t)},e))}},1276:(e,t,a)=>{a.r(t),a.d(t,{Comment:()=>g,Optional:()=>m,PostEndpoint:()=>b,Required:()=>d,assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),l=(a(7294),a(3905)),r=a(4866),i=a(5162);const o={sidebar_position:3},u="Update Wallet",s={unversionedId:"api/wallets/update-wallet",id:"api/wallets/update-wallet",title:"Update Wallet",description:"Route",source:"@site/docs/api/14_wallets/update-wallet.mdx",sourceDirName:"api/14_wallets",slug:"/api/wallets/update-wallet",permalink:"/docs/api/wallets/update-wallet",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"api",previous:{title:"Create wallet",permalink:"/docs/api/wallets/create-wallet"},next:{title:"Terminate wallet",permalink:"/docs/api/wallets/destroy-wallet"}},p={},c=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Deprecated arguments",id:"deprecated-arguments",level:2},{value:"Responses",id:"responses",level:2}],d=e=>{let{children:t,color:a}=e;return(0,l.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},m=e=>{let{children:t,color:a}=e;return(0,l.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},g=e=>{let{children:t,color:a}=e;return(0,l.kt)("span",{style:{fontSize:"12px"}},t)},b=e=>{let{children:t,color:a}=e;return(0,l.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},f={toc:c,Required:d,Optional:m,Comment:g,PostEndpoint:b},k="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"update-wallet"},"Update Wallet"),(0,l.kt)("h2",{id:"route"},"Route"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="PUT"',title:'"PUT"'},"/api/v1/wallets/:id\n")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(r.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request PUT "$LAGO_URL/api/v1/wallets/:id" \\\n  --header "Authorization: Bearer $API_KEY" \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{\n    "wallet": {\n      "name": "new_name",\n      "expiration_at": "2022-07-07T23:59:59Z"\n    }\n  }\'\n'))),(0,l.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from lago_python_client import Client\nfrom lago_python_client.models import Wallet\n\nclient = Client(api_key='__YOUR_API_KEY__')\n\nwallet = Wallet(\n  name='name',\n  expiration_at='2022-07-07T23:59:59Z'\n)\nclient.wallets().update(wallet, 'id')\n"))),(0,l.kt)(i.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'lago-ruby-client'\n\nclient = Lago::Api::Client.new({api_key: '__YOUR_API_KEY__'})\n\nclient.wallets.update({\n    name: 'new name',\n    expiration_at: '2022-07-07T23:59:59Z',\n}, 'id')\n"))),(0,l.kt)(i.Z,{value:"javascript",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'await client.wallets.updateWallet("wallet-id", {\n  wallet: { name: "name1", expiration_at: "2022-07-07T23:59:59Z" },\n});\n'))),(0,l.kt)(i.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'  import "fmt"\n  import "github.com/getlago/lago-go-client"\n\n  func main() {\n    lagoClient := lago.New().\n      SetApiKey("__YOUR_API_KEY__")\n\n    walletInput := &lago.WalletInput{\n      Name:            "new name",\n      ExpirationAt:    "2022-07-07T23:59:59Z"\n    }\n\n    wallet, err := lagoClient.Wallet().Update(walletInput, "__ID__")\n    if err != nil {\n      // Error is *lago.Error\n      panic(err)\n    }\n\n    // wallet is *lago.Wallet\n    fmt.Println(wallet)\n  }\n'))),(0,l.kt)(i.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing System.Diagnostics;\nusing Org.OpenAPITools.Api;\nusing Org.OpenAPITools.Client;\nusing Org.OpenAPITools.Model;\n\nnamespace Example\n{\n  public class UpdateWalletExample\n  {\n      public static void Main()\n      {\n          Configuration.Default.BasePath = "https://api.getlago.com/api/v1";\n          // Configure HTTP bearer authorization: bearerAuth\n          Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";\n\n          var apiInstance = new WalletsApi(Configuration.Default);\n          var id = "321da83c-c007-4fbb-afcd-b00c07c41ssd";  // string | Lago ID of the existing wallet\n          var walletUpdateInput = new WalletUpdateInput(); // WalletUpdateInput | Update an existing wallet\n\n          try\n          {\n              // Update an existing wallet\n              Wallet result = apiInstance.UpdateWallet(id, walletUpdateInput);\n              Debug.WriteLine(result);\n          }\n          catch (ApiException e)\n          {\n              Debug.Print("Exception when calling WalletsApi.UpdateWallet: " + e.Message );\n              Debug.Print("Status Code: "+ e.ErrorCode);\n              Debug.Print(e.StackTrace);\n          }\n      }\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\n\n// Configure Bearer authorization: bearerAuth\n$config = OpenAPI\\Client\\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');\n\n\n$apiInstance = new OpenAPI\\Client\\Api\\WalletsApi(\n  // If you want use custom http client, pass your client which implements `GuzzleHttp\\ClientInterface`.\n  // This is optional, `GuzzleHttp\\Client` will be used as default.\n  new GuzzleHttp\\Client(),\n  $config\n);\n$id = \"321da83c-c007-4fbb-afcd-b00c07c41ssd\"; // string | Lago ID of the existing wallet\n$wallet_update_input = new \\OpenAPI\\Client\\Model\\WalletUpdateInput(); // \\OpenAPI\\Client\\Model\\WalletUpdateInput | Update an existing wallet\n\ntry {\n  $result = $apiInstance->updateWallet($id, $wallet_update_input);\n  print_r($result);\n} catch (Exception $e) {\n  echo 'Exception when calling WalletsApi->updateWallet: ', $e->getMessage(), PHP_EOL;\n}\n")))),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "wallet": {\n    "name": "new name",\n    "expiration_at": "2022-07-07T23:59:59Z",\n  }\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"New wallet name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expiration_at"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional")),(0,l.kt)("br",null),(0,l.kt)(g,{mdxType:"Comment"},(0,l.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,l.kt)("td",{parentName:"tr",align:null},"Date and time that identifies wallet expiration")))),(0,l.kt)("h2",{id:"deprecated-arguments"},"Deprecated arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expiration_date"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"Date that identifies wallet expiration",(0,l.kt)("br",null),'Replaced by expiration_at. Value will be converted to "end_of_day"')))),(0,l.kt)("h2",{id:"responses"},"Responses"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},"The wallet was successfully updated.",(0,l.kt)("p",null,"  Returns a ",(0,l.kt)("a",{parentName:"p",href:"./wallet-object"},"wallet")," object.")),(0,l.kt)(i.Z,{value:"400",label:"HTTP 400",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 400,\n  "error": "Bad Request"\n}\n')),(0,l.kt)("p",null,"  The ",(0,l.kt)("inlineCode",{parentName:"p"},"wallet")," json root is not present in the request body.")),(0,l.kt)(i.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,l.kt)("p",null,"  Access to the API endpoint is unhautorized."),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,l.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,l.kt)(i.Z,{value:"404",label:"HTTP 404",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 404,\n  "error": "Not Found",\n  "code": "wallet_not_found"\n}\n')),(0,l.kt)("p",null,"  The ",(0,l.kt)("inlineCode",{parentName:"p"},"wallet")," was not found by the id."))))}h.isMDXComponent=!0}}]);
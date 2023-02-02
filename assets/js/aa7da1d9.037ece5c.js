"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[7882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),l=n(7294),r=n(6010),o=n(2389),i=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:g,groupId:b,className:k}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=g?g:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,i.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(t=null!=m?m:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:T}=(0,s.U)(),[_,w]=(0,l.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=b){const e=N[b];null!=e&&e!==_&&y.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,n=O.indexOf(t),a=y[n].value;a!==_&&(P(t),w(a),null!=b&&T(b,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=O.indexOf(e.currentTarget)+1;n=null!=(a=O[t])?a:O[0];break}case"ArrowLeft":{var l;const t=O.indexOf(e.currentTarget)-1;n=null!=(l=O[t])?l:O[O.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},k)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>O.push(e),onKeyDown:x,onFocus:E,onClick:E},o,{className:(0,r.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),o?(0,l.cloneElement)(f.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function m(e){const t=(0,o.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},4437:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>g,Optional:()=>m,PostEndpoint:()=>b,Required:()=>d,assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(7462),l=(n(7294),n(3905)),r=n(5488),o=n(5162);const i={sidebar_position:9},s="Get all wallet transactions",p={unversionedId:"api/wallets/get-all-transactions",id:"api/wallets/get-all-transactions",title:"Get all wallet transactions",description:"Route",source:"@site/docs/api/13_wallets/get-all-transactions.mdx",sourceDirName:"api/13_wallets",slug:"/api/wallets/get-all-transactions",permalink:"/docs/api/wallets/get-all-transactions",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"api",previous:{title:"Wallet transaction object",permalink:"/docs/api/wallets/wallet-transaction-object"},next:{title:"Webhooks",permalink:"/docs/category/webhooks"}},u={},c=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Responses",id:"responses",level:2}],d=e=>{let{children:t,color:n}=e;return(0,l.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},m=e=>{let{children:t,color:n}=e;return(0,l.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},g=e=>{let{children:t,color:n}=e;return(0,l.kt)("span",{style:{fontSize:"12px"}},t)},b=e=>{let{children:t,color:n}=e;return(0,l.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},k={toc:c,Required:d,Optional:m,Comment:g,PostEndpoint:b};function f(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"get-all-wallet-transactions"},"Get all wallet transactions"),(0,l.kt)("h2",{id:"route"},"Route"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="GET"',title:'"GET"'},"/api/v1/wallets/:id/wallet_transactions?per_page=2&page=1\n")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(r.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request GET "$LAGO_URL/api/v1/wallets/:id/wallet_transactions?per_page=2&page=1" \\\n  --header "Authorization: Bearer $API_KEY"\n'))),(0,l.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from lago_python_client import Client\n\nclient = Client(api_key='__YOUR_API_KEY__')\n\nclient.wallet_transactions().find_all({'per_page': 2, 'page': 1})\n"))),(0,l.kt)(o.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'lago-ruby-client'\n\nclient = Lago::Api::Client.new({api_key: '__YOUR_API_KEY__'})\n\nclient.wallet_transactions.get_all({ per_page: 2, page: 3 })\n"))),(0,l.kt)(o.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"let client = new Client('__API_KEY__')\n\nawait client.findAllWalletTransactions({per_page: 2, page: 3});\n"))),(0,l.kt)(o.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'  import "fmt"\n  import "github.com/getlago/lago-go-client"\n\n  func main() {\n    lagoClient := lago.New().\n      SetApiKey("__YOUR_API_KEY__")\n\n    walletTransactionListInput := &lago.WalletTransactionListInput{\n      PerPage: 1,\n      Page: 1,\n      WalletId: 12345,\n    }\n\n    walletTransactionResult, err := lagoClient.WalletTransaction().GetList(walletTransactionListInput)\n    if err != nil {\n      // Error is *lago.Error\n      panic(err)\n    }\n\n    // walletTransactionResult is *lago.WalletTransactionResult\n    fmt.Println(walletTransactionResult)\n  }\n'))),(0,l.kt)(o.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing System.Diagnostics;\nusing Org.OpenAPITools.Api;\nusing Org.OpenAPITools.Client;\nusing Org.OpenAPITools.Model;\n\nnamespace Example\n{\n  public class FindAllWalletsExample\n  {\n      public static void Main()\n      {\n          Configuration.Default.BasePath = "https://api.getlago.com/api/v1";\n          // Configure HTTP bearer authorization: bearerAuth\n          Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";\n\n          var apiInstance = new WalletsApi(Configuration.Default);\n          var externalCustomerId = "12345";  // string | External customer ID\n          var page = 2;  // int? | Number of page (optional) \n          var perPage = 20;  // int? | Number of records per page (optional) \n\n          try\n          {\n              // Find wallets\n              Wallets result = apiInstance.FindAllWallets(externalCustomerId, page, perPage);\n              Debug.WriteLine(result);\n          }\n          catch (ApiException e)\n          {\n              Debug.Print("Exception when calling WalletsApi.FindAllWallets: " + e.Message );\n              Debug.Print("Status Code: "+ e.ErrorCode);\n              Debug.Print(e.StackTrace);\n          }\n      }\n  }\n}\n')))),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"per_page"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"Number of records per page.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"Page number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"can be either ",(0,l.kt)("inlineCode",{parentName:"td"},"pending")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"settled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transaction_type"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"can be either ",(0,l.kt)("inlineCode",{parentName:"td"},"inbound")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"outbound"))))),(0,l.kt)("h2",{id:"responses"},"Responses"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},"Wallet transactions were successfully found",(0,l.kt)("p",null,"  Returns a list of ",(0,l.kt)("a",{parentName:"p",href:"./wallet-transaction-object"},"wallet-transaction")," objects.")),(0,l.kt)(o.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,l.kt)("p",null,"  Access to the API endpoint is unhautorized."),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,l.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,l.kt)(o.Z,{value:"404",label:"HTTP 404",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 404,\n  "error": "Not Found",\n  "code": "wallet_not_found"\n}\n')),(0,l.kt)("p",null,"  The ",(0,l.kt)("inlineCode",{parentName:"p"},"wallet")," was not found by the id."))))}f.isMDXComponent=!0}}]);
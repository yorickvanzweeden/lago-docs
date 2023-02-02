"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(7294),i=n(6010),l=n(2389),o=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n;const{lazy:l,block:m,defaultValue:d,values:b,groupId:g,className:f}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=b?b:k.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,o.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===d?d:null!=(t=null!=d?d:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:_}=(0,s.U)(),[N,E]=(0,a.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=g){const e=T[g];null!=e&&e!==N&&y.some((t=>t.value===e))&&E(e)}const I=e=>{const t=e.currentTarget,n=O.indexOf(t),r=y[n].value;r!==N&&(x(t),E(r),null!=g&&_(g,String(r)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=O.indexOf(e.currentTarget)+1;n=null!=(r=O[t])?r:O[0];break}case"ArrowLeft":{var a;const t=O.indexOf(e.currentTarget)-1;n=null!=(a=O[t])?a:O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},f)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:P,onFocus:I,onClick:I},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},9919:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>b,Optional:()=>d,PostEndpoint:()=>g,Required:()=>m,assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),i=n(5488),l=n(5162);const o={sidebar_position:3},s="Terminate a subscription",u={unversionedId:"api/subscriptions/terminate-subscription",id:"api/subscriptions/terminate-subscription",title:"Terminate a subscription",description:"Route",source:"@site/docs/api/05_subscriptions/terminate-subscription.mdx",sourceDirName:"api/05_subscriptions",slug:"/api/subscriptions/terminate-subscription",permalink:"/docs/api/subscriptions/terminate-subscription",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"api",previous:{title:"Assign a plan to a customer",permalink:"/docs/api/subscriptions/create-subscription"},next:{title:"Update subscription",permalink:"/docs/api/subscriptions/update-subscription"}},p={},c=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Response",id:"response",level:2}],m=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},d=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},b=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{fontSize:"12px"}},t)},g=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},f={toc:c,Required:m,Optional:d,Comment:b,PostEndpoint:g};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"terminate-a-subscription"},"Terminate a subscription"),(0,a.kt)("h2",{id:"route"},"Route"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="DELETE"',title:'"DELETE"'},"/api/v1/subscriptions/:id\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(i.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\nEXTERNAL_ID="__YOUR_SUBSCRIPTION_ID__"\n\ncurl --location --request DELETE "$LAGO_URL/api/v1/subscriptions/$EXTERNAL_ID" \\\n  --header "Authorization: Bearer $API_KEY"\n'))),(0,a.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from lago_python_client import Client\n\nclient = Client(api_key='__YOUR_API_KEY__')\n\nclient.subscriptions().destroy('external_id')\n"))),(0,a.kt)(l.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import Client from 'lago-nodejs-client'\n\nlet client = new Client('__API_KEY__')\n\nawait client.destroySubscription(\"5eb02857-a71e-4ea2-bcf9-57d8885990ba\")\n"))),(0,a.kt)(l.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'lago-ruby-client'\n\nclient = Lago::Api::Client.new({api_key: '__YOUR_API_KEY__'})\nclient.subscriptions.destroy(\"5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba\")\n"))),(0,a.kt)(l.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'  import "fmt"\n  import "github.com/getlago/lago-go-client"\n\n  func main() {\n    lagoClient := lago.New().\n      SetApiKey("__YOUR_API_KEY__")\n\n    subscription, err := lagoClient.Subscription().Terminate("__YOUR_CUSTOMER_ID__")\n    if err != nil {\n      // Error is *lago.Error\n      panic(err)\n    }\n\n    // subscription is *lago.Subscription\n    fmt.Println(subscription)\n  }\n'))),(0,a.kt)(l.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing System.Diagnostics;\nusing Org.OpenAPITools.Api;\nusing Org.OpenAPITools.Client;\nusing Org.OpenAPITools.Model;\n\nnamespace Example\n{\n  public class DestroySubscriptionExample\n  {\n      public static void Main()\n      {\n          Configuration.Default.BasePath = "https://api.getlago.com/api/v1";\n          // Configure HTTP bearer authorization: bearerAuth\n          Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";\n\n          var apiInstance = new SubscriptionsApi(Configuration.Default);\n          var externalId = "example_id";  // string | External ID of the existing subscription\n\n          try\n          {\n              // Terminate a subscription\n              Subscription result = apiInstance.DestroySubscription(externalId);\n              Debug.WriteLine(result);\n          }\n          catch (ApiException e)\n          {\n              Debug.Print("Exception when calling SubscriptionsApi.DestroySubscription: " + e.Message );\n              Debug.Print("Status Code: "+ e.ErrorCode);\n              Debug.Print(e.StackTrace);\n          }\n      }\n  }\n}\n')))),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,"Should be sent as request parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"external_id: 5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"external_id"),(0,a.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,a.kt)(m,{mdxType:"Required"},(0,a.kt)("strong",{parentName:"td"},"Required"))),(0,a.kt)("td",{parentName:"tr",align:null},"Subscription unique identifier in your application")))),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"  The customer subscription was successfully terminated."),(0,a.kt)("p",null,"  Returns a ",(0,a.kt)("a",{parentName:"p",href:"./subscription-object"},"subscription")," object.")),(0,a.kt)(l.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,a.kt)("p",null,"  Access to the API end point is unhautorized."),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,a.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,a.kt)(l.Z,{value:"404",label:"HTTP 404",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 404,\n  "error": "Not Found",\n  "code": "subscription_not_found"\n}\n')),(0,a.kt)("p",null,"  The ",(0,a.kt)("inlineCode",{parentName:"p"},"subscription")," was not found."))))}k.isMDXComponent=!0}}]);
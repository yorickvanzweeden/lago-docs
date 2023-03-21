"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[6511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6550),s=n(1980),u=n(7392),p=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=g({queryString:n,groupId:a}),[d,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),k(e)}),[u,k,l]),tabValues:l}}var b=n(2389);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==o&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},i,{className:(0,l.Z)("tabs__item",_.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function h(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",_.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function f(e){const t=(0,b.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},2330:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>g,Optional:()=>m,PostEndpoint:()=>k,Required:()=>c,Variable:()=>b,assets:()=>p,contentTitle:()=>s,default:()=>N,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),i=n(5162);const o={sidebar_position:2},s="Metered events",u={unversionedId:"api/events/metered-event",id:"api/events/metered-event",title:"Metered events",description:"Events represents the data delivered to lago application that will then be aggregated into billable metrics. By sending a metered event, it's not persisted through the next billable periods. At the end of each period, the total units to be charged is resumed to 0.",source:"@site/docs/api/06_events/metered-event.mdx",sourceDirName:"api/06_events",slug:"/api/events/metered-event",permalink:"/docs/api/events/metered-event",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"api",previous:{title:"Event object",permalink:"/docs/api/events/event-object"},next:{title:"Persisted events",permalink:"/docs/api/events/persisted-event"}},p={},d=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Responses",id:"responses",level:2}],c=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},g=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{fontSize:"12px"}},t)},k=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},b=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#422CC1",fontSize:"12px"}},t)},_={toc:d,Required:c,Optional:m,Comment:g,PostEndpoint:k,Variable:b},v="wrapper";function N(e){let{components:t,...n}=e;return(0,r.kt)(v,(0,a.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metered-events"},"Metered events"),(0,r.kt)("p",null,"Events represents the data delivered to lago application that will then be aggregated into billable metrics. By sending ",(0,r.kt)("strong",{parentName:"p"},"a metered event"),", ",(0,r.kt)("strong",{parentName:"p"},"it's not persisted through the next billable periods"),". At the end of each period, the total ",(0,r.kt)("strong",{parentName:"p"},"units to be charged")," is resumed to 0.\nMetered events are available for all billable metrics having the following aggregation type: ",(0,r.kt)("inlineCode",{parentName:"p"},"COUNT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SUM"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MAX")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"COUNT_UNIQUE"),"."),(0,r.kt)("p",null,"The following endpoint explains how to send a metered event for a customer."),(0,r.kt)("h2",{id:"route"},"Route"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="POST"',title:'"POST"'},"api/v1/events\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(l.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request POST "$LAGO_URL/api/v1/events" \\\n--header "Authorization: Bearer $API_KEY" \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n      "event": {\n          "transaction_id": "__UNIQUE_ID__",\n          "external_customer_id": "__YOUR_CUSTOMER_ID__",\n          "external_subscription_id": "__YOUR_SUBSCRIPTION_ID__",\n          "code": "__EVENT_CODE__",\n          "timestamp": $(date +%s),\n          "properties": {\n            "custom_field": 12\n          }\n      }\n  }\'\n'))),(0,r.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from lago_python_client import Client\nfrom lago_python_client.models import Event\n\nclient = Client(api_key=\'__YOUR_API_KEY__\')\n\nevent = Event(\n  transaction_id="__UNIQUE_ID__",\n  external_customer_id="__UNIQUE_ID__",\n  external_subscription_id="__UNIQUE_ID__",\n  code="code",\n  timestamp=1650893379,\n  properties={"custom_field": "custom"}\n)\n\nclient.events().create(event)\n'))),(0,r.kt)(i.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'require \'lago-ruby-client\'\n\nclient = Lago::Api::Client.new({api_key: \'__YOUR_API_KEY__\'})\n\nclient.events.create(\n  transaction_id: "__UNIQUE_ID__",\n  external_customer_id: "__CUSTOMER_ID__",\n  external_subscription_id: "__SUBSCRIPTION_ID__",\n  code: "code",\n  timestamp: Time.now.to_i,\n  properties: {\n      custom_field: 12\n  }\n)\n'))),(0,r.kt)(i.Z,{value:"javascript",label:"Javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'await client.events.createEvent({\n  event: {\n    transaction_id: "__UNIQUE_TRANSACTION_ID__",\n    external_customer_id: "__UNIQUE_CUSTOMER_ID__",\n    external_subscription_id: "__UNIQUE_SUBSCRIPTION_ID__",\n    code: "code",\n    timestamp: 1650893379,\n    properties: { customField: "custom" },\n  },\n});\n'))),(0,r.kt)(i.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  import "fmt"\n  import "github.com/getlago/lago-go-client"\n\n  func main() {\n    lagoClient := lago.New().\n      SetApiKey("__YOUR_API_KEY__")\n\n    eventInput := &lago.EventInput{\n      TransactionID: "transac_1234",\n      ExternalCustomerID: "vincent_12345",\n      ExternalSubscriptionID: "1dbe81ce-b092-401c-a00b-314292e17a98",\n      Code:          "code",\n      Timestamp:     time.Now().Unix(),\n      Properties: map[string]string{\n                "nbusers": "12",\n            },\n    }\n\n    err := lagoClient.Event().Create(eventInput)\n    if err != nil {\n      // Error is *lago.Error\n      panic(err)\n    }\n  }\n'))),(0,r.kt)(i.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing System.Diagnostics;\nusing Org.OpenAPITools.Api;\nusing Org.OpenAPITools.Client;\nusing Org.OpenAPITools.Model;\n\nnamespace Example\n{\n  public class CreateEventExample\n  {\n      public static void Main()\n      {\n          Configuration.Default.BasePath = "https://api.getlago.com/api/v1";\n          // Configure HTTP bearer authorization: bearerAuth\n          Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";\n\n          var apiInstance = new EventsApi(Configuration.Default);\n          var eventInput = new EventInput(); // EventInput | Event payload\n\n          try\n          {\n              // Create a new event\n              apiInstance.CreateEvent(eventInput);\n          }\n          catch (ApiException e)\n          {\n              Debug.Print("Exception when calling EventsApi.CreateEvent: " + e.Message );\n              Debug.Print("Status Code: "+ e.ErrorCode);\n              Debug.Print(e.StackTrace);\n          }\n      }\n  }\n}\n'))),(0,r.kt)(i.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\n\n// Configure Bearer authorization: bearerAuth\n$config = OpenAPI\\Client\\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');\n\n\n$apiInstance = new OpenAPI\\Client\\Api\\EventsApi(\n  // If you want use custom http client, pass your client which implements `GuzzleHttp\\ClientInterface`.\n  // This is optional, `GuzzleHttp\\Client` will be used as default.\n  new GuzzleHttp\\Client(),\n  $config\n);\n$event_input = new \\OpenAPI\\Client\\Model\\EventInput(); // \\OpenAPI\\Client\\Model\\EventInput | Event payload\n\ntry {\n  $apiInstance->createEvent($event_input);\n} catch (Exception $e) {\n  echo 'Exception when calling EventsApi->createEvent: ', $e->getMessage(), PHP_EOL;\n}\n")))),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": {\n    "transaction_id": "__UNIQUE_ID__",\n    "external_customer_id": "__CUSTOMER_ID__",\n    "external_subscription_id": "__SUBSCRIPTION_ID__",\n    "code": "__EVENT_CODE__",\n    "timestamp": 1650893379,\n    "properties": {\n      "custom_field": 12\n    }\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"transaction_id")),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Unique ID identifying the event. ",(0,r.kt)("br",null),"As it will be used for idempotency, it should be a unique identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"external_subscription_id")),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Unique subscription ID in your application.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"external_subscription_id")," is required if the customer has multiple subscriptions or if ",(0,r.kt)("inlineCode",{parentName:"td"},"external_customer_id")," is not provided (in case there's only one subscription)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"external_customer_id")),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Unique customer ID in your application.",(0,r.kt)("br",null),"If ",(0,r.kt)("inlineCode",{parentName:"td"},"external_subscription_id")," is not given, ",(0,r.kt)("inlineCode",{parentName:"td"},"external_customer_id")," is required if there is only one subscription attached to customer. For multiple subscriptions per customer this attribute is not enough")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"code")),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Code identifying the type of the event.",(0,r.kt)("br",null)," It should match the ",(0,r.kt)("inlineCode",{parentName:"td"},"code")," property of one of your active billable metrics, otherwise it will be ignored")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional")),(0,r.kt)("br",null),(0,r.kt)(g,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"Default: event reception timestamp"))),(0,r.kt)("td",{parentName:"tr",align:null},"Unix timestamp in seconds of the event occurence (UTC).",(0,r.kt)("br",null)," If not provided, the API will set the event reception time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"properties")),(0,r.kt)("td",{parentName:"tr",align:null},"JSON ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(b,{mdxType:"Variable"},(0,r.kt)("strong",{parentName:"td"},"Variable"))),(0,r.kt)("td",{parentName:"tr",align:null},"Extra data to use for the event aggregation.",(0,r.kt)("br",null),"When mandatory, it should contains the ",(0,r.kt)("inlineCode",{parentName:"td"},"field_name")," configured at billable metric level as ",(0,r.kt)("inlineCode",{parentName:"td"},"key")," and any value as field ",(0,r.kt)("inlineCode",{parentName:"td"},"value"),".",(0,r.kt)("br",null),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Aggregation type:")),(0,r.kt)("div",null,"- ",(0,r.kt)("inlineCode",{parentName:"td"},"COUNT"),": ",(0,r.kt)("strong",{parentName:"td"},"not used"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"MAX"),": ",(0,r.kt)("strong",{parentName:"td"},"required"),". value must be a number",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"SUM"),": ",(0,r.kt)("strong",{parentName:"td"},"required"),". value must be a number",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"COUNT UNIQUE"),": ",(0,r.kt)("strong",{parentName:"td"},"required"),". value could have any datatype",(0,r.kt)("div",null))))))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"  The event has been stored in the system and will be aggregated to generate fees."),(0,r.kt)("p",null,"  Returns an empty response body.")),(0,r.kt)(i.Z,{value:"400",label:"HTTP 400",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 400,\n  "error": "Bad Request",\n}\n')),(0,r.kt)("p",null,"  The ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," json root is not present in the request body.")),(0,r.kt)(i.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized",\n}\n')),(0,r.kt)("p",null,"  Access to the API end point is unhautorized."),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,r.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,r.kt)(i.Z,{value:"422",label:"HTTP 422",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 422,\n  "error": "Unprocessable entity",\n  "code": "validation_errors",\n  "error_details": {\n    "field": ["error"]\n  }\n}\n')),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Possible errors:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"field"),(0,r.kt)("th",{parentName:"tr",align:null},"error"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"base")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"missing_external_identifier")),(0,r.kt)("td",{parentName:"tr",align:null},"None of ",(0,r.kt)("inlineCode",{parentName:"td"},"external_subscription_id")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"external_customer_id")," arguments were provided")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transaction_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_mandatory")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transaction_id")," value is missing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"code")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_mandatory")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"code")," value is missing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"external_subscription_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_mandatory")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"external_subscription_id")," is missing")))))))}N.isMDXComponent=!0}}]);
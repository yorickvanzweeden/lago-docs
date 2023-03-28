"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[6229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(87462),a=n(67294),o=n(86010),l=n(12466),i=n(16550),u=n(91980),s=n(67392),c=n(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,s]=f({queryString:n,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),b(e)}),[s,b,o]),tabValues:o}}var g=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(d(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function _(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return a.createElement(_,(0,r.Z)({key:String(t)},e))}},42435:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>f,Optional:()=>m,PostEndpoint:()=>b,Required:()=>p,assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),o=n(74866),l=n(85162);const i={sidebar_position:4},u="Download credit note (PDF)",s={unversionedId:"api/credit_notes/download-credit-note",id:"api/credit_notes/download-credit-note",title:"Download credit note (PDF)",description:"Route",source:"@site/docs/api/12_credit_notes/download-credit-note.mdx",sourceDirName:"api/12_credit_notes",slug:"/api/credit_notes/download-credit-note",permalink:"/docs/api/credit_notes/download-credit-note",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"api",previous:{title:"Update credit note",permalink:"/docs/api/credit_notes/update-credit-note"},next:{title:"Get a specific credit note",permalink:"/docs/api/credit_notes/get-credit-note"}},c={},d=[{value:"Route",id:"route",level:2},{value:"Logic",id:"logic",level:2},{value:"Usage",id:"usage",level:2},{value:"Responses",id:"responses",level:2}],p=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},m=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},f=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{fontSize:"12px"}},t)},b=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},g={toc:d,Required:p,Optional:m,Comment:f,PostEndpoint:b},h="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"download-credit-note-pdf"},"Download credit note (PDF)"),(0,a.kt)("h2",{id:"route"},"Route"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="POST"',title:'"POST"'},"/api/v1/credit_notes/:lago_id/download\n")),(0,a.kt)("h2",{id:"logic"},"Logic"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the credit note PDF has already been generated, you will receive in the response the ",(0,a.kt)("a",{parentName:"li",href:"./credit-note-object"},"credit note")," with the ",(0,a.kt)("inlineCode",{parentName:"li"},"file_url")," where you can download your pdf file."),(0,a.kt)("li",{parentName:"ul"},"If the credit note PDF has never been generated, this endpoint will returns an empty ",(0,a.kt)("inlineCode",{parentName:"li"},"200")," response, you will receive a ",(0,a.kt)("inlineCode",{parentName:"li"},"credit_note.generated")," webhook when the PDF file is ready.\nYou can check the webhook documentation to know more about this.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(o.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nCREDIT_NOTE_ID="__YOU_CREDIT_NOTE_ID__"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request POST "$LAGO_URL/api/v1/credit_notes/$CREDIT_NOTE_ID/download" \\\n  --header "Authorization: Bearer $API_KEY" \\\n  --header \'Content-Type: application/json\'\n'))),(0,a.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from lago_python_client.client import Client\n\nclient = Client(api_key='__YOUR_API_KEY__')\n\ninvoice = client.credit_notes.download('5eb02857-a71e-4ea2-bcf9-57d8885990ba')\n"))),(0,a.kt)(l.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'lago-ruby-client'\n\nclient = Lago::Api::Client.new({api_key: '__YOUR_API_KEY__'})\n\nclient.credit_notes.download('5eb02857-a71e-4ea2-bcf9-57d8885990ba')\n"))),(0,a.kt)(l.Z,{value:"javascript",label:"Javascript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"await client.creditNotes.downloadCreditNote('credit-note-id')\n"))),(0,a.kt)(l.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'  import "fmt"\n  import "github.com/getlago/lago-go-client"\n\n  func main() {\n    lagoClient := lago.New().SetApiKey("__YOUR_API_KEY__")\n\n    credit_note, err := lagoClient.CreditNote().Download("__YOUR_CREDIT_NOTE_ID__")\n    if err != nil {\n      // Error is *lago.Error\n      panic(err)\n    }\n\n    // credit_note is *lago.CreditNote\n    fmt.Println(credit_note)\n\n    // If the credit note has to be generated, the response is empty\n    // And you will get a webhook `credit_note.generated`\n  }\n'))),(0,a.kt)(l.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing System.Diagnostics;\nusing Org.OpenAPITools.Api;\nusing Org.OpenAPITools.Client;\nusing Org.OpenAPITools.Model;\n\nnamespace Example\n{\n  public class DownloadCreditNoteExample\n  {\n      public static void Main()\n      {\n          Configuration.Default.BasePath = "https://api.getlago.com/api/v1";\n          // Configure HTTP bearer authorization: bearerAuth\n          Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";\n\n          var apiInstance = new CreditNotesApi(Configuration.Default);\n          var id = "183da83c-c007-4fbb-afcd-b00c07c41ffe";  // string | ID of the existing Lago Credit note\n\n          try\n          {\n              // Download an existing credit note\n              CreditNote result = apiInstance.DownloadCreditNote(id);\n              Debug.WriteLine(result);\n          }\n          catch (ApiException e)\n          {\n              Debug.Print("Exception when calling CreditNotesApi.DownloadCreditNote: " + e.Message );\n              Debug.Print("Status Code: "+ e.ErrorCode);\n              Debug.Print(e.StackTrace);\n          }\n      }\n  }\n}\n'))),(0,a.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\n\n// Configure Bearer authorization: bearerAuth\n$config = OpenAPI\\Client\\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');\n\n\n$apiInstance = new OpenAPI\\Client\\Api\\CreditNotesApi(\n  // If you want use custom http client, pass your client which implements `GuzzleHttp\\ClientInterface`.\n  // This is optional, `GuzzleHttp\\Client` will be used as default.\n  new GuzzleHttp\\Client(),\n  $config\n);\n$id = \"183da83c-c007-4fbb-afcd-b00c07c41ffe\"; // string | ID of the existing Lago Credit note\n\ntry {\n  $result = $apiInstance->downloadCreditNote($id);\n  print_r($result);\n} catch (Exception $e) {\n  echo 'Exception when calling CreditNotesApi->downloadCreditNote: ', $e->getMessage(), PHP_EOL;\n}\n")))),(0,a.kt)("h2",{id:"responses"},"Responses"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"credit_note")," file has already been generated."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"credit_note")," file has not been generated, returns an empty response."))),(0,a.kt)(l.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,a.kt)("p",null,"  Access to the API endpoint is unhautorized."),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,a.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,a.kt)(l.Z,{value:"404",label:"HTTP 404",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 404,\n  "error": "Bad Request",\n  "code": "credit_note_not_found"\n}\n')),(0,a.kt)("p",null,"  The ",(0,a.kt)("inlineCode",{parentName:"p"},"credit_note")," is not found."))))}y.isMDXComponent=!0}}]);
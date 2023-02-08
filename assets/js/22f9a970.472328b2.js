"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[9448],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(v,l(l({ref:n},u),{},{components:t})):a.createElement(v,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),o=t(6010);const i="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),o=t(7294),i=t(6010),l=t(2389),r=t(7392),s=t(7094),c=t(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t;const{lazy:l,block:d,defaultValue:m,values:v,groupId:g,className:b}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:f.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),k=(0,r.l)(h,((e,n)=>e.value===n.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(n=null!=m?m:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?n:f[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:_,setTabGroupChoices:T}=(0,s.U)(),[w,I]=(0,o.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=g){const e=_[g];null!=e&&e!==w&&h.some((n=>n.value===e))&&I(e)}const C=e=>{const n=e.currentTarget,t=N.indexOf(n),a=h[t].value;a!==w&&(O(n),I(a),null!=g&&T(g,String(a)))},E=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=N.indexOf(e.currentTarget)+1;t=null!=(a=N[n])?a:N[0];break}case"ArrowLeft":{var o;const n=N.indexOf(e.currentTarget)-1;t=null!=(o=N[n])?o:N[N.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},b)},h.map((e=>{let{value:n,label:t,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>N.push(e),onKeyDown:E,onFocus:C,onClick:C},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),l?(0,o.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function m(e){const n=(0,l.Z)();return o.createElement(d,(0,a.Z)({key:String(n)},e))}},2129:(e,n,t)=>{t.r(n),t.d(n,{Comment:()=>v,Optional:()=>m,PostEndpoint:()=>g,Required:()=>d,assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var a=t(7462),o=(t(7294),t(3905)),i=t(5488),l=t(5162);const r={sidebar_position:3},s="Download an invoice",c={unversionedId:"api/invoices/download-invoice",id:"api/invoices/download-invoice",title:"Download an invoice",description:"Route",source:"@site/docs/api/10_invoices/download-invoice.mdx",sourceDirName:"api/10_invoices",slug:"/api/invoices/download-invoice",permalink:"/docs/api/invoices/download-invoice",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"api",previous:{title:"Get a specific invoice",permalink:"/docs/api/invoices/get-invoice"},next:{title:"Get all invoices",permalink:"/docs/api/invoices/get-all-invoices"}},u={},p=[{value:"Route",id:"route",level:2},{value:"Logic",id:"logic",level:2},{value:"Usage",id:"usage",level:2},{value:"Responses",id:"responses",level:2}],d=e=>{let{children:n,color:t}=e;return(0,o.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},n)},m=e=>{let{children:n,color:t}=e;return(0,o.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},n)},v=e=>{let{children:n,color:t}=e;return(0,o.kt)("span",{style:{fontSize:"12px"}},n)},g=e=>{let{children:n,color:t}=e;return(0,o.kt)("span",{style:{color:"#008559",fontSize:"12px"}},n)},b={toc:p,Required:d,Optional:m,Comment:v,PostEndpoint:g};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"download-an-invoice"},"Download an invoice"),(0,o.kt)("h2",{id:"route"},"Route"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="POST"',title:'"POST"'},"/api/v1/invoices/:id/download\n")),(0,o.kt)("h2",{id:"logic"},"Logic"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the invoice has already been generated, you will receive in the response the ",(0,o.kt)("inlineCode",{parentName:"li"},"invoice")," object with the ",(0,o.kt)("inlineCode",{parentName:"li"},"file_url")," where you can download your pdf file."),(0,o.kt)("li",{parentName:"ul"},"If the invoice has never been generated, this endpoint will returns an empty ",(0,o.kt)("inlineCode",{parentName:"li"},"200")," response, you will receive a ",(0,o.kt)("inlineCode",{parentName:"li"},"invoice.generated")," webhook when the PDF file is ready.\nYou can check the webhook documentation to know more about this.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(i.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nINVOICE_ID="__YOU_INVOICE_ID__"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request POST "$LAGO_URL/api/v1/invoices/$INVOICE_ID/download" \\\n  --header "Authorization: Bearer $API_KEY" \\\n  --header \'Content-Type: application/json\'\n'))),(0,o.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from lago_python_client import Client\n\nclient = Client(api_key='__YOUR_API_KEY__')\n\ninvoice = client.invoices().download('5eb02857-a71e-4ea2-bcf9-57d8885990ba') # Invoice ID\n"))),(0,o.kt)(l.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'lago-ruby-client'\n\nclient = Lago::Api::Client.new({api_key: '__YOUR_API_KEY__'})\n\nclient.invoices.download('5eb02857-a71e-4ea2-bcf9-57d8885990ba') // Invoice ID\n"))),(0,o.kt)(l.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import Client from 'lago-nodejs-client'\n\nlet client = new Client('__API_KEY__')\n\nawait client.downloadInvoice('id');\n"))),(0,o.kt)(l.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'  import "fmt"\n  import "github.com/getlago/lago-go-client"\n\n  func main() {\n    lagoClient := lago.New().\n      SetApiKey("__YOUR_API_KEY__")\n\n    invoice, err := lagoClient.Invoice().Download("__YOUR_INVOICE_ID__")\n    if err != nil {\n      // Error is *lago.Error\n      panic(err)\n    }\n\n    // invoice is *lago.Invoice\n    fmt.Println(invoice)\n\n    // If the invoice has to be generated, the response is empty\n    // And you will get a webhook `invoice.generated`\n  }\n'))),(0,o.kt)(l.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing System.Diagnostics;\nusing Org.OpenAPITools.Api;\nusing Org.OpenAPITools.Client;\nusing Org.OpenAPITools.Model;\n\nnamespace Example\n{\n  public class DownloadInvoiceExample\n  {\n      public static void Main()\n      {\n          Configuration.Default.BasePath = "https://api.getlago.com/api/v1";\n          // Configure HTTP bearer authorization: bearerAuth\n          Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";\n\n          var apiInstance = new InvoicesApi(Configuration.Default);\n          var id = "183da83c-c007-4fbb-afcd-b00c07c41ffe";  // string | ID of the existing Lago Invoice\n\n          try\n          {\n              // Download an existing invoice\n              Invoice result = apiInstance.DownloadInvoice(id);\n              Debug.WriteLine(result);\n          }\n          catch (ApiException e)\n          {\n              Debug.Print("Exception when calling InvoicesApi.DownloadInvoice: " + e.Message );\n              Debug.Print("Status Code: "+ e.ErrorCode);\n              Debug.Print(e.StackTrace);\n          }\n      }\n  }\n}\n')))),(0,o.kt)("h2",{id:"responses"},"Responses"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"invoice")," file has already been generated."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"invoice")," file has not been generated, returns an empty response."))),(0,o.kt)(l.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,o.kt)("p",null,"  Access to the API endpoint is unhautorized."),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,o.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,o.kt)(l.Z,{value:"404",label:"HTTP 404",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 404,\n  "error": "Bad Request",\n  "code": "invoice_not_found"\n}\n')),(0,o.kt)("p",null,"  The ",(0,o.kt)("inlineCode",{parentName:"p"},"invoice")," is not found."))))}f.isMDXComponent=!0}}]);
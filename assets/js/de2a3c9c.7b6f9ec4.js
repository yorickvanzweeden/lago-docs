"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[1511],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=u(n),g=r,c=d["".concat(p,".").concat(g)]||d[g]||m[g]||i;return n?a.createElement(c,l(l({ref:e},s),{},{components:n})):a.createElement(c,l({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},85162:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function l(t){let{children:e,hidden:n,className:l}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},e)}},74866:(t,e,n)=>{n.d(e,{Z:()=>h});var a=n(87462),r=n(67294),i=n(86010),l=n(12466),o=n(16550),p=n(91980),u=n(67392),s=n(50012);function d(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:n,attributes:a,default:r}}=t;return{value:e,label:n,attributes:a,default:r}}))}function m(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??d(n);return function(t){const e=(0,u.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function g(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function c(t){let{queryString:e=!1,groupId:n}=t;const a=(0,o.k6)(),i=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,p._X)(i),(0,r.useCallback)((t=>{if(!i)return;const e=new URLSearchParams(a.location.search);e.set(i,t),a.replace({...a.location,search:e.toString()})}),[i,a])]}function k(t){const{defaultValue:e,queryString:n=!1,groupId:a}=t,i=m(t),[l,o]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=n.find((t=>t.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:i}))),[p,u]=c({queryString:n,groupId:a}),[d,k]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,i]=(0,s.Nk)(n);return[a,(0,r.useCallback)((t=>{n&&i.set(t)}),[n,i])]}({groupId:a}),N=(()=>{const t=p??d;return g({value:t,tabValues:i})?t:null})();(0,r.useLayoutEffect)((()=>{N&&o(N)}),[N]);return{selectedValue:l,selectValue:(0,r.useCallback)((t=>{if(!g({value:t,tabValues:i}))throw new Error(`Can't select invalid tab value=${t}`);o(t),u(t),k(t)}),[u,k,i]),tabValues:i}}var N=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(t){let{className:e,block:n,selectedValue:o,selectValue:p,tabValues:u}=t;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=t=>{const e=t.currentTarget,n=s.indexOf(e),a=u[n].value;a!==o&&(d(e),p(a))},g=t=>{let e=null;switch(t.key){case"Enter":m(t);break;case"ArrowRight":{const n=s.indexOf(t.currentTarget)+1;e=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(t.currentTarget)-1;e=s[n]??s[s.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e)},u.map((t=>{let{value:e,label:n,attributes:l}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,key:e,ref:t=>s.push(t),onKeyDown:g,onClick:m},l,{className:(0,i.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":o===e})}),n??e)})))}function y(t){let{lazy:e,children:n,selectedValue:a}=t;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=i.find((t=>t.props.value===a));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function _(t){const e=k(t);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(f,(0,a.Z)({},t,e)),r.createElement(y,(0,a.Z)({},t,e)))}function h(t){const e=(0,N.Z)();return r.createElement(_,(0,a.Z)({key:String(e)},t))}},79770:(t,e,n)=>{n.r(e),n.d(e,{Comment:()=>c,Optional:()=>g,PostEndpoint:()=>k,Required:()=>m,assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(74866),l=n(85162);const o={sidebar_position:3},p="Update your organization",u={unversionedId:"api/organizations/update-organization",id:"api/organizations/update-organization",title:"Update your organization",description:"Route",source:"@site/docs/api/13_organizations/update-organization.mdx",sourceDirName:"api/13_organizations",slug:"/api/organizations/update-organization",permalink:"/docs/api/organizations/update-organization",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"api",previous:{title:"Organization object",permalink:"/docs/api/organizations/organization-object"},next:{title:"Wallets",permalink:"/docs/category/wallets"}},s={},d=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Billing configuration",id:"billing-configuration",level:3},{value:"Responses",id:"responses",level:2}],m=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},e)},g=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},e)},c=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{fontSize:"12px"}},e)},k=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{color:"#008559",fontSize:"12px"}},e)},N={toc:d,Required:m,Optional:g,Comment:c,PostEndpoint:k},b="wrapper";function f(t){let{components:e,...n}=t;return(0,r.kt)(b,(0,a.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"update-your-organization"},"Update your organization"),(0,r.kt)("h2",{id:"route"},"Route"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="PUT"',title:'"PUT"'},"/api/v1/organizations\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(i.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request PUT "$LAGO_URL/api/v1/organizations" \\\n  --header "Authorization: Bearer $API_KEY" \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{\n    "organization": {\n      "name": "Name1",\n      "webhook_url": "https://test-example.example",\n      "country": "CZ",\n      "address_line1": "address1",\n      "address_line2": null,\n      "state": "state1",\n      "zipcode": "10000",\n      "email": "org@email.com",\n      "city": "city125",\n      "legal_name": null,\n      "legal_number": null,\n      "timezone": "Europe/Paris",\n      "email_settings": [\n        "invoice.finalized",\n        "credit_note.created"\n      ],\n      "billing_configuration": {\n        "invoice_footer": "footer custom",\n        "invoice_grace_period": 3,\n        "document_locale": "fr",\n        "vat_rate": 15.0\n      }\n    }\n  }\'\n'))),(0,r.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from lago_python_client.client import Client\nfrom lago_python_client.exceptions import LagoApiError\nfrom lago_python_client.models import Organization, OrganizationBillingConfiguration\n\nclient = Client(api_key=\'__YOUR_API_KEY__\')\n\nparams = Organization(\n  timezone="Europe/Paris",\n  webhook_url="https://new.url",\n  email_settings=["invoice.finalized"],\n  billing_configuration=OrganizationBillingConfiguration(\n    invoice_footer="footer custom",\n    invoice_grace_period=3,\n    document_locale="fr",\n    vat_rate=12.5\n  )\n)\n\ntry:\n    client.organizations.update(params)\nexcept LagoApiError as e:\n    repair_broken_state(e)  # do something on error or raise your own exception\n'))),(0,r.kt)(l.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'lago-ruby-client'\n\nclient = Lago::Api::Client.new({api_key: '__YOUR_API_KEY__'})\n\nupdate_params = {\n  timezone: 'Europe/Paris',\n  webhook_url: 'https://webhook_url.com',\n  email_settings: ['invoice.finalized'],\n  billing_configuration: {\n    invoice_footer=\"footer custom\",\n    invoice_grace_period=3,\n    document_locale: \"fr\",\n    vat_rate: 10\n  }\n}\nclient.organizations.update(update_params)\n"))),(0,r.kt)(l.Z,{value:"javascript",label:"Javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'await client.organizations.updateOrganization({\n  organization: {\n    timezone: "Europe/Paris",\n    webhook_url: "https://newwebhookurl.com",\n    email_settings: ["invoice.finalized"],\n    billing_configuration: {\n      invoice_footer: "footer custom",\n      invoice_grace_period: 3,\n      document_locale: "fr",\n      vat_rate: 15.5,\n    },\n  },\n});\n'))),(0,r.kt)(l.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  import "fmt"\n  import "github.com/getlago/lago-go-client"\n\n  func main() {\n    lagoClient := lago.New().\n      SetApiKey("__YOUR_API_KEY__")\n\n    organizationInput := &lago.OrganizationInput{\n      LegalName: "Legal Name",\n      Timezone: "Europe/Paris",\n      EmailSettings: ["invoice.finalized"],\n      BillingConfiguration: &OrganizationBillingConfigurationInput{\n        InvoiceFooter: "footer custom",\n        InvoiceGracePeriod: 3,\n        DocumentLocale: "fr",\n        VatRate: 20.0,\n      }\n    }\n\n    organization, err := lagoClient.Organization().Update(organizationInput)\n    if err != nil {\n      // Error is *lago.Error\n      panic(err)\n    }\n\n    // organization is *lago.Organization\n    fmt.Println(organization)\n  }\n'))),(0,r.kt)(l.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing System.Diagnostics;\nusing Org.OpenAPITools.Api;\nusing Org.OpenAPITools.Client;\nusing Org.OpenAPITools.Model;\n\nnamespace Example\n{\n  public class UpdateOrganizationExample\n  {\n      public static void Main()\n      {\n          Configuration.Default.BasePath = "https://api.getlago.com/api/v1";\n          // Configure HTTP bearer authorization: bearerAuth\n          Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";\n\n          var apiInstance = new OrganizationsApi(Configuration.Default);\n          var organizationInput = new OrganizationInput(); // OrganizationInput | Update an existing organization\n\n          try\n          {\n              // Update an existing Organization\n              Organization result = apiInstance.UpdateOrganization(organizationInput);\n              Debug.WriteLine(result);\n          }\n          catch (ApiException e)\n          {\n              Debug.Print("Exception when calling OrganizationsApi.UpdateOrganization: " + e.Message );\n              Debug.Print("Status Code: "+ e.ErrorCode);\n              Debug.Print(e.StackTrace);\n          }\n      }\n  }\n}\n'))),(0,r.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\n\n// Configure Bearer authorization: bearerAuth\n$config = OpenAPI\\Client\\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');\n\n\n$apiInstance = new OpenAPI\\Client\\Api\\OrganizationsApi(\n  // If you want use custom http client, pass your client which implements `GuzzleHttp\\ClientInterface`.\n  // This is optional, `GuzzleHttp\\Client` will be used as default.\n  new GuzzleHttp\\Client(),\n  $config\n);\n$organization_input = new \\OpenAPI\\Client\\Model\\OrganizationInput(); // \\OpenAPI\\Client\\Model\\OrganizationInput | Update an existing organization\n\ntry {\n  $result = $apiInstance->updateOrganization($organization_input);\n  print_r($result);\n} catch (Exception $e) {\n  echo 'Exception when calling OrganizationsApi->updateOrganization: ', $e->getMessage(), PHP_EOL;\n}\n")))),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "organization": {\n    "webhook_url": "https://test-example.example",\n    "country": "CZ",\n    "address_line1": "address1",\n    "address_line2": null,\n    "state": "state1",\n    "zipcode": "10000",\n    "email": "org@email.com",\n    "city": "city125",\n    "legal_name": null,\n    "legal_number": null,\n    "timezone": "Europe/Paris",\n    "email_settings": ["invoice.finalized", "credit_note.created"],\n    "billing_configuration": {\n      "invoice_footer": "footer custom",\n      "invoice_grace_period": 3,\n      "document_locale": "fr",\n      "vat_rate": 15.0\n    }\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"webhook_url"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(g,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Webhook URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"country"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(g,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional")),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 3166 (alpha-2)"))),(0,r.kt)("td",{parentName:"tr",align:null},"Country where the organization is located")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address_line1"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(g,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Address (first line)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address_line2"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(g,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Address (second line)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(g,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"State where the organization is located")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zipcode"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(g,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Zip code associated with the organization's address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(g,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Business email address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"city"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(g,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"City where the organization is located")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"legal_name"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(g,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Legal name of the organization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"legal_number"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(g,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Legal number of the organization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timezone"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(g,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional")),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"TZ database"))),(0,r.kt)("td",{parentName:"tr",align:null},"Timezone of the organization - ",(0,r.kt)("a",{parentName:"td",href:"../resources/timezones"},"learn more"),(0,r.kt)("br",null),"UTC by default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email_settings"),(0,r.kt)("td",{parentName:"tr",align:null},"Array ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(g,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional")),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Comment"},"Possible values are ",(0,r.kt)("inlineCode",{parentName:"td"},"invoice.finalized")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"credit_note.created"))),(0,r.kt)("td",{parentName:"tr",align:null},"Email settings of the organization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"billing_configuration"),(0,r.kt)("td",{parentName:"tr",align:null},"Object ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(g,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Custom billing settings")))),(0,r.kt)("h3",{id:"billing-configuration"},"Billing configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invoice_footer"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(g,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Custom invoice footer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invoice_grace_period"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(g,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Grace period (in days)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"document_locale"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(g,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Document locale in ISO 639-1 format - ",(0,r.kt)("a",{parentName:"td",href:"../resources/locales"},"learn more"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vat_rate"),(0,r.kt)("td",{parentName:"tr",align:null},"Float ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(g,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Custom VAT rate")))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},"The organization was successfully updated",(0,r.kt)("p",null,"  Returns an ",(0,r.kt)("a",{parentName:"p",href:"./organization-object"},"organization")," object.")),(0,r.kt)(l.Z,{value:"400",label:"HTTP 400",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 400,\n  "error": "Bad Request"\n}\n')),(0,r.kt)("p",null,"  The ",(0,r.kt)("inlineCode",{parentName:"p"},"organization")," json root is not present in the request body.")),(0,r.kt)(l.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,r.kt)("p",null,"  Access to the API endpoint is unhautorized."),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,r.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,r.kt)(l.Z,{value:"422",label:"HTTP 422",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 422,\n  "error": "Unprocessable entity",\n  "code": "validation_errors",\n  "error_details": {\n    "field": ["error"]\n  }\n}\n')),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Possible errors:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"field"),(0,r.kt)("th",{parentName:"tr",align:null},"error"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"webhook_url")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"url_is_invalid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bebhook_url")," format is invalid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vat_rate")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_out_of_range")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vat_rate")," is not between 0 and 100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"country")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_a_valid_country_code")),(0,r.kt)("td",{parentName:"tr",align:null},"Provided country is invalid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invoice_footer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_too_long")),(0,r.kt)("td",{parentName:"tr",align:null},"Footer length is too long")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invoice_grace_period")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_out_of_range")),(0,r.kt)("td",{parentName:"tr",align:null},"Provided invoice grace period is invalid.",(0,r.kt)("br",null),"It must be a positive integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"email")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_email_format")),(0,r.kt)("td",{parentName:"tr",align:null},"Email format is invalid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_size")),(0,r.kt)("td",{parentName:"tr",align:null},"File size is too big")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_content_type")),(0,r.kt)("td",{parentName:"tr",align:null},"Content type is invalid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timezone")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timezone_invalid")),(0,r.kt)("td",{parentName:"tr",align:null},"Provided timezone is invalid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"email_settings")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unsupported_value")),(0,r.kt)("td",{parentName:"tr",align:null},"One of the Email Settings is invalid")))))))}f.isMDXComponent=!0}}]);
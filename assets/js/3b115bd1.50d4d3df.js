"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[924],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6654:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:4},l="Ingesting Events",d={unversionedId:"ingesting-events",id:"ingesting-events",title:"Ingesting Events",description:"This guide explains how Lago ingests usage-based events coming from you product.",source:"@site/docs/ingesting-events.md",sourceDirName:".",slug:"/ingesting-events",permalink:"/docs/ingesting-events",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ingesting-events.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Aggregation examples",permalink:"/docs/billable-metrics/aggregation-examples"},next:{title:"Overview",permalink:"/docs/plans/overview"}},c={},p=[{value:"Define a Billable metric",id:"define-a-billable-metric",level:2},{value:"Send usage measurements to Lago",id:"send-usage-measurements-to-lago",level:2},{value:"1. The <code>transaction_id</code>",id:"1-the-transaction_id",level:3},{value:"2. The <code>customer_id</code>",id:"2-the-customer_id",level:3},{value:"3. The event <code>code</code>",id:"3-the-event-code",level:3},{value:"4. The event <code>timestamp</code>",id:"4-the-event-timestamp",level:3},{value:"5. The event <code>properties</code>",id:"5-the-event-properties",level:3},{value:"Idempotency and retries",id:"idempotency-and-retries",level:2},{value:"User action trigger or periodic trigger",id:"user-action-trigger-or-periodic-trigger",level:2},{value:"User action trigger",id:"user-action-trigger",level:3},{value:"Periodic trigger",id:"periodic-trigger",level:3},{value:"Designed for flexibility",id:"designed-for-flexibility",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ingesting-events"},"Ingesting Events"),(0,r.kt)("p",null,"This guide explains how Lago ingests usage-based events coming from you product. "),(0,r.kt)("h2",{id:"define-a-billable-metric"},"Define a Billable metric"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage events are designed to target very specific ",(0,r.kt)("a",{parentName:"strong",href:"/docs/billable-metrics/overview"},"Billable metrics")," created from the UI"),". If you don't understand the concept of Billable metrics, we recommend you to read it first."),(0,r.kt)("p",null,"First things first, you need to define a Billable metric from the UI to send usage measurement events:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the Lago App, go to the ",(0,r.kt)("strong",{parentName:"li"},"Billable metrics")," section"),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Add a Billable metric")," button"),(0,r.kt)("li",{parentName:"ol"},"Fill the Billable metric informations.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," "),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"code")," (this is used as the event name when ingesting measurement events)"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"description")," ",(0,r.kt)("em",{parentName:"li"},"(optional)")))),(0,r.kt)("li",{parentName:"ol"},"Choose the ",(0,r.kt)("strong",{parentName:"li"},"Aggregation type")," to define how ingested events must be calculated at the end of the billable period")),(0,r.kt)("p",null,"A Billable metric must be representative of a paying feature of your company. Based on your customers' actions within your application, implemented events are automatically triggered, aggregated and calculated by Lago."),(0,r.kt)("h2",{id:"send-usage-measurements-to-lago"},"Send usage measurements to Lago"),(0,r.kt)("p",null,"To send usage events to Lago, you need to use the ",(0,r.kt)("strong",{parentName:"p"},"Lago API"),". A measurement event is JSON with the following fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "customer_id": "__CUSTOMER_ID__", // (Required) Unique identifier of your customer performing the action\n    "code": "__EVENT_CODE__", // (Required) Your Billable metric\'s Code\n    "timestamp": 1650893379, // (Required) Timestamp when the event happened\n        "properties": { // (Optional) Custom variables defined as properties\n      "custom_field": 12 \n    }\n}\n')),(0,r.kt)("h3",{id:"1-the-transaction_id"},"1. The ",(0,r.kt)("inlineCode",{parentName:"h3"},"transaction_id")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction_id")," is very useful to ensure the uniqueness of the events received. It is mandatory to define on your own a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction_id")," for each event you send to Lago."),(0,r.kt)("p",null,"This identifier is used to deduplicate events ingested, making sure we don't ingest twice the same event (otherwise, this could create billing errors for your customers). "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If a ",(0,r.kt)("inlineCode",{parentName:"li"},"transaction_id")," is new to Lago, the event is ingested;"),(0,r.kt)("li",{parentName:"ul"},"If a ",(0,r.kt)("inlineCode",{parentName:"li"},"transaction_id")," has already been received by Lago, it's ignored.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"A good practice is to send the id of the transaction coming from your backend"),"."),(0,r.kt)("p",{parentName:"div"},"If you do not have an existing id for a transaction, you can create a unique one by concatenating the ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," of the Billable metric and the ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp")," of the event *(example: ",(0,r.kt)("inlineCode",{parentName:"p"},"api_searches_2022-04-01T03:49:23Z"),")."))),(0,r.kt)("h3",{id:"2-the-customer_id"},"2. The ",(0,r.kt)("inlineCode",{parentName:"h3"},"customer_id")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"customer_id")," specifies which one of your customers is triggering the event associated with your billing. For now ",(0,r.kt)("strong",{parentName:"p"},"a customer can only have one ID")," and we don't manage aliases, parents and child IDs (for instance, billing subsidiaries).\nBy receiving an event, if a ",(0,r.kt)("inlineCode",{parentName:"p"},"customer_id")," is new to Lago, it will be created in the Customers list."),(0,r.kt)("h3",{id:"3-the-event-code"},"3. The event ",(0,r.kt)("inlineCode",{parentName:"h3"},"code")),(0,r.kt)("p",null,"The event ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," represents the unique code of the Billable metric you want to start ingest measurements on.\nThis code is required for all events received in Lago. For instance, you can start ingesting events for Billable metrics with codes ",(0,r.kt)("inlineCode",{parentName:"p"},"api_seaches")," ",(0,r.kt)("em",{parentName:"p"},"(for api products example)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"storage")," ",(0,r.kt)("em",{parentName:"p"},"(cloud companies example)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"atm_withdrawals")," ",(0,r.kt)("em",{parentName:"p"},"(fintech example)"),", or anything you need to define as a paying feature."),(0,r.kt)("h3",{id:"4-the-event-timestamp"},"4. The event ",(0,r.kt)("inlineCode",{parentName:"h3"},"timestamp")),(0,r.kt)("p",null,"The event timestamp is the date when the billing event occurs in your application and sent to Lago. This event must be a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.unixtimestamp.com/"},"UNIX Timestamp"),".")," For instance, you could define ",(0,r.kt)("inlineCode",{parentName:"p"},"1650893379")," for ",(0,r.kt)("em",{parentName:"p"},"Mon Apr 25 2022 13:29:39 GMT+0000")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"1651682217"),"for ",(0,r.kt)("em",{parentName:"p"},"Wed May 04 2022 16:36:57 GMT+0000"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This ",(0,r.kt)("inlineCode",{parentName:"strong"},"timestamp")," is not mandatory to send the event"),". If you do not specify a timestamp on your own, Lago automatically defines the reception date of the event as the event timestamp."),(0,r.kt)("h3",{id:"5-the-event-properties"},"5. The event ",(0,r.kt)("inlineCode",{parentName:"h3"},"properties")),(0,r.kt)("p",null,"Event properties are useful to send more context in usage events. Moreover, they are also very useful when you need to aggregate a Billable metrics for ",(0,r.kt)("inlineCode",{parentName:"p"},"SUM"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MAX")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"COUNT DISTINCT"),". Event properties can be ",(0,r.kt)("inlineCode",{parentName:"p"},"strings"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"integers"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"floats"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"uuids")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamps"),"."),(0,r.kt)("h2",{id:"idempotency-and-retries"},"Idempotency and retries"),(0,r.kt)("p",null,"By using a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction_id"),", can send events to Lago as much as you want without worrying about sending twice the same event. Duplicates will be ignored by our system. This ensures that your customers' usage is counted once. In case of duplicates, we guarantee that only one of the events will be ingested, and the other ones are ignored."),(0,r.kt)("p",null,"In case you are not sure if an event has been ingested, we recommend you to send it multiple times (or to replay it). Once again, with the uniqueness of the ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction_id"),", your customers won't be badly affected."),(0,r.kt)("h2",{id:"user-action-trigger-or-periodic-trigger"},"User action trigger or periodic trigger"),(0,r.kt)("p",null,"With Lago, you can define when you need to trigger events based on the actions your customers make in your application.\nThere are 2 ways of tracking billing events with Lago."),(0,r.kt)("h3",{id:"user-action-trigger"},"User action trigger"),(0,r.kt)("p",null,"Anytime a user perform an action in your product, this sends an event to Lago. This can be useful for companies tracking usage with a lot of granularity. As we do the math for you, you can send events whenever you need and don't compute hard calculations on your own."),(0,r.kt)("p",null,"For instance, think of a ",(0,r.kt)("em",{parentName:"p"},"fintech company")," tracking user action. Each time a customer withdraw money at an ATM, you send an event to Lago. We aggregate the usage of a billable period based on what you defined in a Billable metric called ",(0,r.kt)("inlineCode",{parentName:"p"},"atm_withdrawals"),". "),(0,r.kt)("h3",{id:"periodic-trigger"},"Periodic trigger"),(0,r.kt)("p",null,"Some companies, such as infrastructure or cloud ones, often use periodic triggers to calculate consumption. Think of the example of a thermometer to measure fever. We would probably track the temperature once per hour (at a periodic time). This is the same for cloud companies selling computation. You could send an event to Lago each single minute measuring the CPU consumption of a customer."),(0,r.kt)("h2",{id:"designed-for-flexibility"},"Designed for flexibility"),(0,r.kt)("p",null,"Lago is designed to ingest a high number of events. By defining aggregation rules, you can define any billing  use cases your company might want to track. Whether you need to send ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#user-action-trigger"},"user action triggered"))," events or ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#periodic-trigger"},"periodic triggered"))," events, Lago does the math on your own so you don't have to query heavy databases before charging your customers."),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Once you defined your Billable metrics (with their aggregation rules), and started ingesting events to track usage, you are able to define how much your customers will pay for it. This has to be specified in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/plans/overview"},"Plans")),"."))}m.isMDXComponent=!0}}]);
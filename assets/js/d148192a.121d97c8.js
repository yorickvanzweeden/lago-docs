"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[8213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},o="Ingesting Events",s={unversionedId:"guide/events/ingesting_events",id:"guide/events/ingesting_events",title:"Ingesting Events",description:"This guide explains how Lago ingests usage-based events coming from you product.",source:"@site/docs/guide/09_events/ingesting_events.md",sourceDirName:"guide/09_events",slug:"/guide/events/ingesting_events",permalink:"/docs/guide/events/ingesting_events",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guide",previous:{title:"Add-ons",permalink:"/docs/guide/addons"},next:{title:"Using the debugger",permalink:"/docs/guide/events/debugger"}},l={},d=[{value:"Define a Billable metric",id:"define-a-billable-metric",level:2},{value:"Send usage measurements to Lago",id:"send-usage-measurements-to-lago",level:2},{value:"1. The <code>transaction_id</code>",id:"1-the-transaction_id",level:3},{value:"2. The <code>external_customer_id</code>",id:"2-the-external_customer_id",level:3},{value:"3. The event <code>code</code>",id:"3-the-event-code",level:3},{value:"4. The event <code>timestamp</code>",id:"4-the-event-timestamp",level:3},{value:"5. The event <code>properties</code>",id:"5-the-event-properties",level:3},{value:"Idempotency and retries",id:"idempotency-and-retries",level:2},{value:"User action trigger or periodic trigger",id:"user-action-trigger-or-periodic-trigger",level:2},{value:"User action trigger",id:"user-action-trigger",level:3},{value:"Periodic trigger",id:"periodic-trigger",level:3},{value:"Designed for flexibility",id:"designed-for-flexibility",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ingesting-events"},"Ingesting Events"),(0,a.kt)("p",null,"This guide explains how Lago ingests usage-based events coming from you product."),(0,a.kt)("h2",{id:"define-a-billable-metric"},"Define a Billable metric"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage events are designed to target very specific ",(0,a.kt)("a",{parentName:"strong",href:"../billable-metrics/overview"},"Billable metrics")," created from the UI"),". If you don't understand the concept of Billable metrics, we recommend you to read it first."),(0,a.kt)("p",null,"First things first, you need to define a Billable metric from the UI to send usage measurement events:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Lago App, go to the ",(0,a.kt)("strong",{parentName:"li"},"Billable metrics")," section"),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Add a Billable metric")," button"),(0,a.kt)("li",{parentName:"ol"},"Fill the Billable metric informations.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"name")),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"code")," (this is used as the event name when ingesting measurement events)"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"description")," ",(0,a.kt)("em",{parentName:"li"},"(optional)")))),(0,a.kt)("li",{parentName:"ol"},"Choose the ",(0,a.kt)("strong",{parentName:"li"},"Aggregation type")," to define how ingested events must be calculated at the end of the billable period")),(0,a.kt)("p",null,"A Billable metric must be representative of a paying feature of your company. Based on your customers' actions within your application, implemented events are automatically triggered, aggregated and calculated by Lago."),(0,a.kt)("h2",{id:"send-usage-measurements-to-lago"},"Send usage measurements to Lago"),(0,a.kt)("p",null,"To send usage events to Lago, you need to use the ",(0,a.kt)("strong",{parentName:"p"},"Lago API"),". A measurement event is JSON with the following fields:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "external_customer_id": "__CUSTOMER_ID__", // (Required) Unique identifier of your customer performing the action\n    "code": "__EVENT_CODE__", // (Required) Your Billable metric\'s Code\n    "timestamp": 1650893379, // (Required) Timestamp when the event happened\n    "properties": { // (Optional) Custom variables defined as properties\n      "custom_field": 12\n    }\n}\n')),(0,a.kt)("h3",{id:"1-the-transaction_id"},"1. The ",(0,a.kt)("inlineCode",{parentName:"h3"},"transaction_id")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"transaction_id")," is very useful to ensure the uniqueness of the events received. It is mandatory to define on your own a unique ",(0,a.kt)("inlineCode",{parentName:"p"},"transaction_id")," for each event you send to Lago."),(0,a.kt)("p",null,"This identifier is used to deduplicate events ingested, making sure we don't ingest twice the same event (otherwise, this could create billing errors for your customers)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If a ",(0,a.kt)("inlineCode",{parentName:"li"},"transaction_id")," is new to Lago, the event is ingested;"),(0,a.kt)("li",{parentName:"ul"},"If a ",(0,a.kt)("inlineCode",{parentName:"li"},"transaction_id")," has already been received by Lago, it's ignored.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"A good practice is to send the id of the transaction coming from your backend"),"."),(0,a.kt)("p",{parentName:"admonition"},"If you do not have an existing id for a transaction, you can create a unique one by concatenating the ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," of the Billable metric and the ",(0,a.kt)("inlineCode",{parentName:"p"},"timestamp")," of the event *(example: ",(0,a.kt)("inlineCode",{parentName:"p"},"api_searches_2022-04-01T03:49:23Z"),").")),(0,a.kt)("h3",{id:"2-the-external_customer_id"},"2. The ",(0,a.kt)("inlineCode",{parentName:"h3"},"external_customer_id")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"external_customer_id")," specifies which one of your customers is triggering the event associated with your billing. For now ",(0,a.kt)("strong",{parentName:"p"},"a customer can only have one ID")," and we don't manage aliases, parents and child IDs (for instance, billing subsidiaries).\nBy receiving an event, if an ",(0,a.kt)("inlineCode",{parentName:"p"},"external_customer_id")," is new to Lago, it will be created in the Customers list."),(0,a.kt)("h3",{id:"3-the-event-code"},"3. The event ",(0,a.kt)("inlineCode",{parentName:"h3"},"code")),(0,a.kt)("p",null,"The event ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," represents the unique code of the Billable metric you want to start ingest measurements on.\nThis code is required for all events received in Lago. For instance, you can start ingesting events for Billable metrics with codes ",(0,a.kt)("inlineCode",{parentName:"p"},"api_seaches")," ",(0,a.kt)("em",{parentName:"p"},"(for api products example)"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"storage")," ",(0,a.kt)("em",{parentName:"p"},"(cloud companies example)"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"atm_withdrawals")," ",(0,a.kt)("em",{parentName:"p"},"(fintech example)"),", or anything you need to define as a paying feature."),(0,a.kt)("h3",{id:"4-the-event-timestamp"},"4. The event ",(0,a.kt)("inlineCode",{parentName:"h3"},"timestamp")),(0,a.kt)("p",null,"The event timestamp is the date when the billing event occurs in your application and sent to Lago. This event must be a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://www.unixtimestamp.com/"},"UNIX Timestamp"),".")," For instance, you could define ",(0,a.kt)("inlineCode",{parentName:"p"},"1650893379")," for ",(0,a.kt)("em",{parentName:"p"},"Mon Apr 25 2022 13:29:39 GMT+0000")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"1651682217"),"for ",(0,a.kt)("em",{parentName:"p"},"Wed May 04 2022 16:36:57 GMT+0000"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This ",(0,a.kt)("inlineCode",{parentName:"strong"},"timestamp")," is not mandatory to send the event"),". If you do not specify a timestamp on your own, Lago automatically defines the reception date of the event as the event timestamp."),(0,a.kt)("h3",{id:"5-the-event-properties"},"5. The event ",(0,a.kt)("inlineCode",{parentName:"h3"},"properties")),(0,a.kt)("p",null,"Event properties are useful to send more context in usage events. Moreover, they are also very useful when you need to aggregate a Billable metrics for ",(0,a.kt)("inlineCode",{parentName:"p"},"SUM"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MAX")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"COUNT DISTINCT"),". Event properties can be ",(0,a.kt)("inlineCode",{parentName:"p"},"strings"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"integers"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"floats"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"uuids")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"timestamps"),"."),(0,a.kt)("h2",{id:"idempotency-and-retries"},"Idempotency and retries"),(0,a.kt)("p",null,"By using a unique ",(0,a.kt)("inlineCode",{parentName:"p"},"transaction_id"),", can send events to Lago as much as you want without worrying about sending twice the same event. Duplicates will be ignored by our system. This ensures that your customers' usage is counted once. In case of duplicates, we guarantee that only one of the events will be ingested, and the other ones are ignored."),(0,a.kt)("p",null,"In case you are not sure if an event has been ingested, we recommend you to send it multiple times (or to replay it). Once again, with the uniqueness of the ",(0,a.kt)("inlineCode",{parentName:"p"},"transaction_id"),", your customers won't be badly affected."),(0,a.kt)("h2",{id:"user-action-trigger-or-periodic-trigger"},"User action trigger or periodic trigger"),(0,a.kt)("p",null,"With Lago, you can define when you need to trigger events based on the actions your customers make in your application.\nThere are 2 ways of tracking billing events with Lago."),(0,a.kt)("h3",{id:"user-action-trigger"},"User action trigger"),(0,a.kt)("p",null,"Anytime a user perform an action in your product, this sends an event to Lago. This can be useful for companies tracking usage with a lot of granularity. As we do the math for you, you can send events whenever you need and don't compute hard calculations on your own."),(0,a.kt)("p",null,"For instance, think of a ",(0,a.kt)("em",{parentName:"p"},"fintech company")," tracking user action. Each time a customer withdraw money at an ATM, you send an event to Lago. We aggregate the usage of a billable period based on what you defined in a Billable metric called ",(0,a.kt)("inlineCode",{parentName:"p"},"atm_withdrawals"),"."),(0,a.kt)("h3",{id:"periodic-trigger"},"Periodic trigger"),(0,a.kt)("p",null,"Some companies, such as infrastructure or cloud ones, often use periodic triggers to calculate consumption. Think of the example of a thermometer to measure fever. We would probably track the temperature once per hour (at a periodic time). This is the same for cloud companies selling computation. You could send an event to Lago each single minute measuring the CPU consumption of a customer."),(0,a.kt)("h2",{id:"designed-for-flexibility"},"Designed for flexibility"),(0,a.kt)("p",null,"Lago is designed to ingest a high number of events. By defining aggregation rules, you can define any billing  use cases your company might want to track. Whether you need to send ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"#user-action-trigger"},"user action triggered"))," events or ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"#periodic-trigger"},"periodic triggered"))," events, Lago does the math on your own so you don't have to query heavy databases before charging your customers."),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"Once you defined your Billable metrics (with their aggregation rules), and started ingesting events to track usage, you are able to define how much your customers will pay for it. This has to be specified in ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../plans/overview"},"Plans")),"."))}u.isMDXComponent=!0}}]);
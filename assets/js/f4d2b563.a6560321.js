"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[5228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},i="Overconsumption Alerting Example (with N8N)",s={unversionedId:"guide/alerting-system/current-usage-alerting",id:"guide/alerting-system/current-usage-alerting",title:"Overconsumption Alerting Example (with N8N)",description:"When one of your customers is overconsuming during a period, you might need to warn her. This might happen for Cloud or API products. Automatic billing does not mean that your customers should have a bad surprise when opening their invoices.",source:"@site/docs/guide/14_alerting-system/current-usage-alerting.md",sourceDirName:"guide/14_alerting-system",slug:"/guide/alerting-system/current-usage-alerting",permalink:"/docs/guide/alerting-system/current-usage-alerting",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guide",previous:{title:"Invoice Alerting Example (with Zapier)",permalink:"/docs/guide/alerting-system/invoice-alerting"},next:{title:"Lago Open API",permalink:"/docs/guide/openapi"}},l={},u=[{value:"1st Node - CRON expression to repeat tasks at a defined interval",id:"1st-node---cron-expression-to-repeat-tasks-at-a-defined-interval",level:2},{value:"2nd Node - Catch customers&#39; current usage with a HTTP Request",id:"2nd-node---catch-customers-current-usage-with-a-http-request",level:2},{value:"3rd Node - IF conditional statement to trigger messages under conditions",id:"3rd-node---if-conditional-statement-to-trigger-messages-under-conditions",level:2},{value:"4th Node - Send an alert message to Slack",id:"4th-node---send-an-alert-message-to-slack",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overconsumption-alerting-example-with-n8n"},"Overconsumption Alerting Example (with N8N)"),(0,r.kt)("p",null,"When one of your customers is overconsuming during a period, you might need to warn her. This might happen for Cloud or API products. Automatic billing does not mean that your customers should have a bad surprise when opening their invoices."),(0,r.kt)("p",null,"Here is a full workflow to create an alerting system based on your customers' current usage, using ",(0,r.kt)("a",{parentName:"p",href:"https://n8n.io/"},"N8N"),", a powerful automation tool for developers."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"N8N Alerting Workflow",src:n(2468).Z,width:"1582",height:"528"})),(0,r.kt)("p",null,"In this example, we are going to build an alert anytime a usage threshold is overcome. Here is a summary of this workflow:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use a ",(0,r.kt)("strong",{parentName:"li"},"Cron")," expression to call the Lago API every X minutes/hours/days"),(0,r.kt)("li",{parentName:"ol"},"Call the ",(0,r.kt)("a",{parentName:"li",href:"../../api/customer_usage/customer-usage"},(0,r.kt)("strong",{parentName:"a"},"Current usage"))," endpoint available in Lago to fetch your customers' current usage;"),(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("strong",{parentName:"li"},"IF statement")," to condition the trigger (in our case, messages are triggered above a specific overconsumption); and"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Send a message")," whenever this threshold is reached. You could use an emailing tool, Slack or a CRM. In our case, we are using Slack.")),(0,r.kt)("h2",{id:"1st-node---cron-expression-to-repeat-tasks-at-a-defined-interval"},"1st Node - CRON expression to repeat tasks at a defined interval"),(0,r.kt)("p",null,"The first node is repeatedly and automatically triggering the automation at a defined interval."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a new ",(0,r.kt)("strong",{parentName:"li"},"Node"),";"),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"CRON")," as a new application node;"),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"Mode")," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"Every X"),"; and"),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"Value")," is defined to ",(0,r.kt)("inlineCode",{parentName:"li"},"10")," and the the ",(0,r.kt)("strong",{parentName:"li"},"Units")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"minutes"),". ")),(0,r.kt)("p",null,"This will trigger the flow automatically every 10 minutes. You can obviously change the value and the units to your preferred interval."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cron expression",src:n(3912).Z,width:"2426",height:"702"})),(0,r.kt)("h2",{id:"2nd-node---catch-customers-current-usage-with-a-http-request"},"2nd Node - Catch customers' current usage with a HTTP Request"),(0,r.kt)("p",null,"This node is used to fetch current usage from Lago API, using a HTTP request."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a new ",(0,r.kt)("strong",{parentName:"li"},"Node"),";"),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"HTTP Request")," as a new application node;"),(0,r.kt)("li",{parentName:"ol"},"Fetch ",(0,r.kt)("a",{parentName:"li",href:"../../api/customer_usage/customer-usage"},"customers' current usage")," from Lago API;"),(0,r.kt)("li",{parentName:"ol"},"Make sure to set the ",(0,r.kt)("inlineCode",{parentName:"li"},"API_KEY")," and the ",(0,r.kt)("inlineCode",{parentName:"li"},"Content-Type")," as headers of your request; and"),(0,r.kt)("li",{parentName:"ol"},"Execute the node to fetch the payload from Lago's API.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Customer current usage",src:n(6864).Z,width:"2406",height:"812"})),(0,r.kt)("h2",{id:"3rd-node---if-conditional-statement-to-trigger-messages-under-conditions"},"3rd Node - IF conditional statement to trigger messages under conditions"),(0,r.kt)("p",null,"This node is used to trigger the alert only when your customers overcome a threshold of usage. Those limits depend on your product and your paying features."),(0,r.kt)("p",null,"In our present use case, we want to trigger an alert ",(0,r.kt)("strong",{parentName:"p"},"when the total consumption of usage-based features overcomes $200"),". You could also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"number of units")," consumed or another useful value from the payload."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a new ",(0,r.kt)("strong",{parentName:"li"},"Node"),";"),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"IF")," as a new application node;"),(0,r.kt)("li",{parentName:"ol"},"Create a condition for the ",(0,r.kt)("strong",{parentName:"li"},"TRUE")," branch (when conditions are met);"),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"Value")," is the parameter of your condition (in our case the ",(0,r.kt)("inlineCode",{parentName:"li"},"amount_cents")," of the current usage);"),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"Operation")," is the math operation you want to apply (in our case, condition is met when the total ",(0,r.kt)("inlineCode",{parentName:"li"},"amount_cents")," is larger or equal to $200);")),(0,r.kt)("p",null,"It is important to mention that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can add as many conditions as you need;"),(0,r.kt)("li",{parentName:"ul"},"You could add an action when the condition is ",(0,r.kt)("inlineCode",{parentName:"li"},"FALSE"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Customer current usage",src:n(6595).Z,width:"2418",height:"896"})),(0,r.kt)("h2",{id:"4th-node---send-an-alert-message-to-slack"},"4th Node - Send an alert message to Slack"),(0,r.kt)("p",null,"This last node is used to trigger the message. In the example, we use a Slack channel, but you could even decide to send an email directly to your customers when they pass the limits of usage."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a new ",(0,r.kt)("strong",{parentName:"li"},"Node"),";"),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Slack")," as a new application node;"),(0,r.kt)("li",{parentName:"ol"},"Select the targeted ",(0,r.kt)("strong",{parentName:"li"},"Slack Account")," & ",(0,r.kt)("strong",{parentName:"li"},"Slack Channel"),";"),(0,r.kt)("li",{parentName:"ol"},"Choose the option to ",(0,r.kt)("strong",{parentName:"li"},"POST")," a ",(0,r.kt)("strong",{parentName:"li"},"Message"),"; and"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Define a message")," and use the variables of your payload to give context to your customers about their current usage.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"On top of connecting your Slack account, don't forget to authorize the application's bot to post messages to the targeted channel.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Customer current usage",src:n(2269).Z,width:"2284",height:"1068"}),"\n",(0,r.kt)("img",{alt:"Customer current usage",src:n(3405).Z,width:"1802",height:"356"})))}p.isMDXComponent=!0},3912:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cron-alerting-a3cc55668cedb59003c788201dcfaf16.png"},6864:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/current-usage-http-request-f534e90c3cc02f462a65c859218ac063.png"},6595:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/if-statement-current-usage-4186fee96e606f9554fa1bbcd6f07f5b.png"},2468:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/n8n-current-usage-ffe518dc30433d5f993f3cfb67a31374.png"},3405:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/slack-alert-current-usage-message-dcd840bb5aa02098873410a83eb40776.png"},2269:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/slack-alert-current-usage-247e699c94c1e5ec0f8adaac4b7abe8e.png"}}]);
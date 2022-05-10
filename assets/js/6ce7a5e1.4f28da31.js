"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[799],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,o(o({ref:e},s),{},{components:n})):a.createElement(k,o({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},123:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:2},p="Docker",d={unversionedId:"guide/self-hosting/docker",id:"guide/self-hosting/docker",title:"Docker",description:"Requirements",source:"@site/docs/guide/02_self-hosting/docker.md",sourceDirName:"guide/02_self-hosting",slug:"/guide/self-hosting/docker",permalink:"/docs/guide/self-hosting/docker",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guide",previous:{title:"Installation",permalink:"/docs/guide/self-hosting/installation"},next:{title:"Overview",permalink:"/docs/guide/billable-metrics/overview"}},s={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Run the app",id:"run-the-app",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Environment variables",id:"environment-variables",level:3},{value:"Components",id:"components",level:3}],m={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"docker"},"Docker"),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install Docker on your system.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"See instruction")))),(0,l.kt)("li",{parentName:"ul"},"Make sure ",(0,l.kt)("inlineCode",{parentName:"li"},"docker-compose")," is available. It should be the case if you choose to install Docker via Docker Desktop.")),(0,l.kt)("h2",{id:"run-the-app"},"Run the app"),(0,l.kt)("p",null,"Run in a shell:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/getlago/lago.git\ncd lago\ndocker-compose up\n")),(0,l.kt)("p",null,"In a brother, navigate to ",(0,l.kt)("a",{parentName:"p",href:"http://localhost"},"http://localhost")," to connect to the application."),(0,l.kt)("p",null,"Lago API is exposed at ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),"."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,l.kt)("p",null,"Lago uses environment variable to configure the components of the application.\nYou can override them to customise your setup."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"POSTGRES_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"db"),(0,l.kt)("td",{parentName:"tr",align:null},"Host name of the postgres server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"POSTGRES_DB"),(0,l.kt)("td",{parentName:"tr",align:null},"lago"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the postgres database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"POSTGRES_USER"),(0,l.kt)("td",{parentName:"tr",align:null},"lago"),(0,l.kt)("td",{parentName:"tr",align:null},"Database user for postgres connection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"POSTGRES_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null},"changeme"),(0,l.kt)("td",{parentName:"tr",align:null},"Database password for postrgres connection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"POSTGRES_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"5432"),(0,l.kt)("td",{parentName:"tr",align:null},"Port postgres database is listening to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REDIS_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"redis"),(0,l.kt)("td",{parentName:"tr",align:null},"Host name of the redis server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REDIS_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"6379"),(0,l.kt)("td",{parentName:"tr",align:null},"Port redis database is listening to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LAGO_FRONT_URL"),(0,l.kt)("td",{parentName:"tr",align:null},"http://localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"URL of the Lago front end application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRONT_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"80"),(0,l.kt)("td",{parentName:"tr",align:null},"Port the front end application is listening to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LAGO_API_URL"),(0,l.kt)("td",{parentName:"tr",align:null},"http://localhost:3000"),(0,l.kt)("td",{parentName:"tr",align:null},"URL of the Lago back end application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"3000"),(0,l.kt)("td",{parentName:"tr",align:null},"Port the front end application is listening to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SECRET_KEY_BASE"),(0,l.kt)("td",{parentName:"tr",align:null},"your-secret-key-base-hex-64"),(0,l.kt)("td",{parentName:"tr",align:null},"Secret key used for session encryption")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SENTRY_DSN"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Sentry DSN key for error and performance tracking")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RSA_PRIVATE_KEY"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Private key used for webhook signatures")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RSA_PUBLIC_KEY"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Public key used to validate webhook signatures")))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"POSTGRES_PASSWORD"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"SECRET_KEY_BASE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"RSA_PRIVATE_KEY")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"SECRET_KEY_BASE")," should be changed to improve security of your Lago instance."))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SECRET_KEY_BASE")," can be generated using ",(0,l.kt)("inlineCode",{parentName:"li"},"openssl rand -hex 64")," command in a shell.")),(0,l.kt)("p",{parentName:"div"},"TODO: document RSA keys"))),(0,l.kt)("h3",{id:"components"},"Components"),(0,l.kt)("p",null,"Lago uses the following containers:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Container"),(0,l.kt)("th",{parentName:"tr",align:null},"Role"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"front"),(0,l.kt)("td",{parentName:"tr",align:null},"Front end application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"api"),(0,l.kt)("td",{parentName:"tr",align:null},"API back end application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"api_worker"),(0,l.kt)("td",{parentName:"tr",align:null},"Asynchronous worker for API application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"api_clock"),(0,l.kt)("td",{parentName:"tr",align:null},"Clock worker for API application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"db"),(0,l.kt)("td",{parentName:"tr",align:null},"Postgres database engine. Used to store application data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"redis"),(0,l.kt)("td",{parentName:"tr",align:null},"Redis database engine. Used as a queuing system for asynchronous tasks")))),(0,l.kt)("p",null,"You can use your own database or redis server.\nTo do so, just remove db and redis config from the ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file and update the environment variables accordingly."))}c.isMDXComponent=!0}}]);
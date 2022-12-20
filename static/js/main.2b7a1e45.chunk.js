(this["webpackJsonpmy-profile"]=this["webpackJsonpmy-profile"]||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),a=n(19),i=n.n(a),c=(n(28),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),r(e),a(e),i(e)}))}),o=n(21),l=n(6),d=n(13);function h(e){var t=Object(r.useState)({height:window.innerHeight,width:window.innerWidth}),n=Object(d.a)(t,2),a=n[0],i=n[1];return Object(r.useEffect)((function(){function e(){i({height:window.innerHeight,width:window.innerWidth})}return window.addEventListener("resize",e),function(t){window.removeEventListener("resize",e)}})),Object(s.jsx)("header",{id:"home",style:a,children:e.children})}var u=n(2),j=n(3),p=n(5),b=n(4),m=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("nav",{id:"nav-wrap",className:"opaque",children:[Object(s.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(s.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Hide navigation",children:"Hide navigation"}),Object(s.jsx)("ul",{id:"nav",className:"nav",children:Object.keys(this.props.navigation).map((function(t,n){return Object(s.jsx)(O,{link:t,name:e.props.navigation[t]},n)}))})]})}}]),n}(r.Component),O=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"smoothscroll",href:"#".concat(this.props.link),children:this.props.name})})}}]),n}(r.Component),f=m;var v=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsx)("ul",{className:this.props.ulClass,children:this.props.profiles.map((function(e,t){var n=function(e){var t=e.replace(/ /g,"-");switch(e){case"email":return Object(s.jsx)("i",{className:"fa fa-envelope"});case"quora":return Object(s.jsx)("i",{className:"fa fa-fw",children:Object(s.jsx)("strong",{className:"fa-quora",children:"Q"})});default:return Object(s.jsx)("i",{className:"fa fa-".concat(t)})}}(e.network.toLowerCase());return Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:e.url,children:n})},t)}))})}}]),n}(r.Component),w=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"row banner",children:Object(s.jsxs)("div",{className:"banner-text",children:[Object(s.jsx)("h1",{className:"responsive-headline",children:this.props.basics.name}),Object(s.jsx)("br",{}),Object(s.jsx)("hr",{}),Object(s.jsx)(v,{ulClass:"social",profiles:this.props.basics.profiles})]})})}}]),n}(r.Component),g=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsx)("p",{className:"scrolldown",children:Object(s.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(s.jsx)("i",{className:"icon-down-circle"})})})}}]),n}(r.Component),x=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsx)("section",{id:"about",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"two columns",children:Object(s.jsx)("img",{className:"profile-pic",src:this.props.content.picture,alt:this.props.content.name})}),Object(s.jsxs)("div",{className:"ten columns main-col",children:[Object(s.jsx)("h2",{children:"About Me"}),this.props.content.summary.map((function(e,t){return Object(s.jsx)("p",{children:e},t)})),Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"columns contact-details",children:[Object(s.jsx)("h2",{children:"Contact Details"}),Object(s.jsxs)("p",{className:"address",children:[Object(s.jsx)("span",{children:this.props.content.location.city}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:this.props.content.location.countryCode})]})]})})]})]})})}}]),n}(r.Component),y=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:this.props.points.map((function(e,t){return Object(s.jsxs)("p",{className:"point",children:[Object(s.jsx)("span",{className:"bullet-point",children:"\u2022 "}),e]},t)}))})}}]),n}(r.Component),E=n(20),k=n.n(E);function D(e){if("Present"===e)return e;var t=function(e){var t=k()(e,"YYYY-MM-DD");return t.date()>20?t.add(1,"months").format("MMM YYYY"):t.format("MMM YYYY")}(e);return"Invalid date"===t?e:t}var N=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=D(this.props.entry.startDate),t=D(this.props.entry.endDate),n=this.props.index+1===this.props.total?Object(s.jsx)("br",{}):Object(s.jsx)("hr",{});return Object(s.jsxs)("div",{className:"row item",children:[Object(s.jsxs)("div",{className:"twelve columns",children:[Object(s.jsx)("h3",{children:Object(s.jsx)("a",{href:this.props.entry.website,children:this.props.entry.company})}),Object(s.jsxs)("p",{className:"info",children:[this.props.entry.position,Object(s.jsx)("span",{children:" \u2022 "}),Object(s.jsx)("span",{className:"info-summary",children:this.props.entry.summary}),Object(s.jsx)("span",{children:" \u2022 "}),Object(s.jsxs)("em",{className:"date",children:[e," - ",t]})]}),Object(s.jsx)(y,{points:this.props.entry.highlights})]}),n]})}}]),n}(r.Component),R=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.content.length;return Object(s.jsx)("section",{id:"work",children:Object(s.jsxs)("div",{className:"row work",children:[Object(s.jsx)("div",{className:"two columns header-col",children:Object(s.jsx)("h1",{children:Object(s.jsx)("span",{children:"Work"})})}),Object(s.jsx)("div",{className:"ten columns main-col",children:this.props.content.map((function(t,n){return Object(s.jsx)(N,{index:n,total:e,entry:t},n)}))})]})})}}]),n}(r.Component),S=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=D(this.props.entry.endDate);return Object(s.jsx)("div",{className:"row item",children:Object(s.jsxs)("div",{className:"twelve columns",children:[Object(s.jsx)("h3",{children:this.props.entry.institution}),Object(s.jsxs)("p",{className:"info",children:[this.props.entry.area,Object(s.jsx)("span",{children:" \u2022 "}),Object(s.jsx)("span",{className:"info-summary",children:this.props.entry.summary}),Object(s.jsx)("span",{children:" \u2022 "}),Object(s.jsx)("em",{className:"date",children:e})]})]})})}}]),n}(r.Component),A=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsx)("section",{id:"education",children:Object(s.jsxs)("div",{className:"row education",children:[Object(s.jsx)("div",{className:"two columns header-col",children:Object(s.jsx)("h1",{children:Object(s.jsx)("span",{children:"Education"})})}),Object(s.jsx)("div",{className:"ten columns main-col",children:this.props.content.map((function(e,t){return Object(s.jsx)(S,{entry:e},t)}))})]})})}}]),n}(r.Component);function _(e){var t=Object(r.useState)({background:"#313131"}),n=Object(d.a)(t,2),a=n[0],i=n[1];return Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"bar-expand percentage".concat(e.entry.level),onMouseEnter:function(){return i({background:"#11ABB0"})},onMouseLeave:function(){return i({background:"#313131"})},style:a}),Object(s.jsx)("em",{children:e.entry.name})]})}var T=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.summary.map((function(e,t){return Object(s.jsx)("p",{className:"skill-summary",children:e},t)}));return Object(s.jsxs)("div",{className:"row inside",children:[Object(s.jsx)("h3",{children:this.props.title}),e,Object(s.jsx)("div",{className:"bars",children:Object(s.jsx)("ul",{className:"skills",children:this.props.content.map((function(e,t){return Object(s.jsx)(_,{entry:e},t)}))})})]})}}]),n}(r.Component),Y=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsx)("section",{id:"skill",children:Object(s.jsxs)("div",{className:"row skill",children:[Object(s.jsx)("div",{className:"two columns header-col",children:Object(s.jsx)("h1",{children:Object(s.jsx)("span",{children:"Skills"})})}),Object(s.jsx)("div",{className:"ten columns main-col",children:this.props.content.skills.map((function(e,t){return Object(s.jsx)(T,{title:e.title,content:e.skillDetails,summary:e.description},t)}))})]})})}}]),n}(r.Component),C=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsx)("footer",{children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"twelve columns",children:[Object(s.jsx)(v,{ulClass:"social-links",profiles:this.props.content.profiles}),Object(s.jsxs)("ul",{className:"copyright",children:[Object(s.jsxs)("li",{children:["This web profile was built after quick learning of React.js and using reference from suddi.io. This site uses UI template from\xa0",Object(s.jsx)("a",{href:"http://www.styleshout.com/",title:"Styleshout",target:"_blank",rel:"noopener noreferrer",children:"Styleshout"})]}),Object(s.jsx)("li",{children:"I have moved from AWS Amplify to Github pages for deploying and hosting with CI/CD workflow."})]})]}),Object(s.jsx)("div",{id:"go-top",children:Object(s.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(s.jsx)("i",{className:"icon-up-open"})})})]})})}}]),n}(r.Component),M=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e={skills:this.props.skills,languages:this.props.languages};return Object(s.jsxs)("div",{children:[Object(s.jsx)(x,{content:this.props.basics}),Object(s.jsx)(R,{content:this.props.work}),Object(s.jsx)(A,{content:this.props.education}),Object(s.jsx)(Y,{content:e}),Object(s.jsx)(C,{content:this.props.basics})]})}}]),n}(r.Component),I={basics:{name:"Abhishek Kalagoudra",label:"Software Engineer",picture:"https://s.gravatar.com/avatar/7fd00e0627dbae39a3baa4a0fb3d740a?s=200",email:"<EMAIL_ADDRESS>",phone:"<PHONE_NUMBER>",website:"abhishekkalagoudra.com",summary:["I am results-driven, Sr. Software engineer with over 12 years of software development experience. Specialized in creating innovative, efficient and customer-centric Web and Mobile applications. I have worked on various domains like developing Test Automation Framework for wireless devices, CRM, Promotional and Gifting space.","Mentored Interns and Jr. Software Engineers. Introduced cross team engineering efforts, which helped team  to learn and build fast."],location:{address:"<ADDRESS>",postalCode:"<POSTAL_CODE>",city:"Fremont",countryCode:"United States",region:"<REGION>"},profiles:[{network:"Linkedin",username:"<USERNAME>",url:"https://www.linkedin.com/in/abhishek-kalagoudra-11467a7/"},{network:"github",username:"<USERNAME>",url:"https://github.com/akalagoudra"}]},work:[{company:"Delart Tech",position:"Sr Software Engineer",website:"https://delartech.com/",startDate:"2021-03-01",endDate:"Current",summary:"@Facebook MenloPark, US",highlights:["Onboarded Meta\u2019s Terragraph project on Connectivity Testing Framework (CTF)","Developed serverless testing (CTF client) for OEM\u2019s where CTF server is not accessible","Added feature to upload and highlight the asserts and crashes on CTF UI for quick attention","Made use of existing tool which collects logs and stats on Elasticsearch and Prometheus","Provide offline log collection from Elasticsearch which reduced test execution time by 20%-30%"]},{company:"Xebrium Inc",position:"Sr Software Engineer",website:"https://xebrium.com/",startDate:"2017-04-01",endDate:"Current",summary:"@Facebook MenloPark, US",highlights:["Leading the onshore development and operation of Facebooks in-house Test Automation System for validating Terragraph wireless radios","Automated testing of builds before code commit, to allow users to run specific TestPlan, with test status monitoring and reporting the test result.","Developed Stats aggregator with help of Zmq and Thrift which collects and processes stats from  all Nodes and used a similar approach with Kafka with >100 Nodes","Developed log collection service to dump logs directly on the server with auto-restart, eliminating the log collection overhead on the Node which occupied space","Auto search and report assert and crash reducing manual effort on analysis","Integrated with Terragraph and FB tools (E2E, Scuba, Everstore)","Created Microservice & Dockerized UI, API server, File server, and Worker and spawned Workers using Ansible when required","Created auto Backup and Restore mechanism of logs, data & db hosted on private VMs","Oncall to Add/Enhance/Fix TAS features to support changes released with Terragraph software"]},{company:"Pankanis Technologies (now Speridian)",position:"Tech Lead Mobility/SR. SWE",website:"https://www.speridian.com/",startDate:"2014-05-01",endDate:"2017-03-01",summary:"Mumbai, IN",highlights:["Created frameworks that can be used to rapidly build customer applications","Integrated with Sharepoint using SAML and Youtube using OAuth 2.0","Used Test Driven Development (TDD) to ensure the highest level of software quality. ","Created Data sync when the app in background and performance tuning","Mentored the Junior Software Engineers"]},{company:"Aurality Technologies Pvt Ltd",position:"Software Engineer",website:"",startDate:"2011-06-01",endDate:"2014-05-01",summary:"Mumbai, IN",highlights:["Developed and released various prototypes based on user feedback","Created Unit tests for the application","Created REST API to fetch various contents required by the applications","Interacted with end-users and clients for better development of the product","Integrated with an analytics tool to capture user interaction with the app"]},{company:"Powerweave ",position:"Software Engineer",website:"https://www.powerweave.com/",startDate:"2010-08-01",endDate:"2011-06-01",summary:"Mumbai, IN",highlights:["Developed complete end-to-end applications","Collaborated with the design and server team for better product design and architecture","Trained interns for iOS development","Introduced offline storage and auto-sync of cloud data"]}],volunteer:[{organization:"<ORGANIZATION_NAME>",position:"<POSITION>",website:"<WEBSITE>",startDate:"<START_DATE>",endDate:"<END_DATE>",summary:"<SUMMARY>",highlights:["<HIGHTLIGHT_1>","<HIGHTLIGHT_2>","<HIGHTLIGHT_3>"]}],education:[{institution:"University of Pune",area:"Master Of Computer Applications",studyType:"<STUDY_TYPE>",startDate:"<START_DATE>",endDate:"2010-04-20",gpa:"<GRADE_POINT_AVERAGE>",summary:"MH, India",courses:["<COURSE_1>","<COURSE_2>","<COURSE_3>"]},{institution:"University of Mumbai",area:"Bachelors Of Computer Applications",studyType:"<STUDY_TYPE>",startDate:"<START_DATE>",endDate:"2007-03-10",gpa:"<GRADE_POINT_AVERAGE>",summary:"MH, India",courses:["<COURSE_1>","<COURSE_2>","<COURSE_3>"]}],awards:[{title:"<AWARD_TITLE>",date:"<DATE>",awarder:"<AWARDER>",summary:"<SUMMARY>"}],projects:[{name:"<PUBLICATION_NAME>",publisher:"<PUBLISHER>",category:"<CATEGORY>",releaseDate:"<RELEASE_DATE>",website:"<WEBSITE>",summary:"<SUMMARY>",image:{modal:"<MODAL_IMAGE>",thumb:"<THUMBNAIL_IMAGE>"},keywords:["<KEYWORD_1>","<KEYWORD_2>","<KEYWORD_3>"]}],skills:[{title:"Programming Languages",description:[""],skillDetails:[{name:"Python",level:"70",keywords:["<KEYWORD_1>","<KEYWORD_2>","<KEYWORD_3>"]},{name:"Objective C",level:"70",keywords:["<KEYWORD_1>","<KEYWORD_2>","<KEYWORD_3>"]},{name:"Shell Script",level:"60",keywords:["<KEYWORD_1>","<KEYWORD_2>","<KEYWORD_3>"]},{name:"JavaScript",level:"60",keywords:["<KEYWORD_1>","<KEYWORD_2>","<KEYWORD_3>"]},{name:"C#",level:"50",keywords:["<KEYWORD_1>","<KEYWORD_2>","<KEYWORD_3>"]}]},{title:"Others",description:[""],skillDetails:[{name:"PostgresSql",level:"70",keywords:["<KEYWORD_1>","<KEYWORD_2>","<KEYWORD_3>"]},{name:"MySql",level:"70",keywords:["<KEYWORD_1>","<KEYWORD_2>","<KEYWORD_3>"]},{name:"SQLite",level:"60",keywords:["<KEYWORD_1>","<KEYWORD_2>","<KEYWORD_3>"]},{name:"Docker",level:"50",keywords:["<KEYWORD_1>","<KEYWORD_2>","<KEYWORD_3>"]},{name:"Ansible",level:"50",keywords:["<KEYWORD_1>","<KEYWORD_2>","<KEYWORD_3>"]}]}],languages:[{name:"<LANGUAGE_NAME>",level:"<LANGUAGE_LEVEL>"}],interests:[{name:"<INTEREST_NAME>",keywords:["<KEYWORD_1>","<KEYWORD_2>","<KEYWORD_3>"]}],references:[{name:"<REFERENCE_NAME>",position:"<POSITION>",company:"<COMPANY>",reference:"<SUMMARY>"}]};n(30);function W(e){return Object(s.jsxs)("div",{className:"main-container",children:[Object(s.jsxs)(h,{children:[Object(s.jsx)(f,{navigation:e.config.navigation}),Object(s.jsx)(w,{basics:I.basics}),Object(s.jsx)(g,{})]}),Object(s.jsx)(M,{basics:I.basics,work:I.work,education:I.education,skills:I.skills,languages:I.languages,portfolio:I.projects,references:I.references})]})}var K=function(){var e;return e={navigation:{home:"Home",about:"About",work:"Work",education:"Education",skill:"Skills"}},Object(s.jsx)(o.a,{children:Object(s.jsx)(l.a,{path:"/",children:Object(s.jsx)(W,{config:e})})})};i.a.render(Object(s.jsx)(K,{}),document.getElementById("root")),c()}},[[36,1,2]]]);
//# sourceMappingURL=main.2b7a1e45.chunk.js.map
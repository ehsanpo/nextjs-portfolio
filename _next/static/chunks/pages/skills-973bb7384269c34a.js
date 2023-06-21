(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{437:function(a,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/skills",function(){return s(8442)}])},5542:function(a,e,s){"use strict";var i=s(5893);s(7294);var n=s(1664),t=s.n(n);let l=a=>{let{className:e="",children:s,type:n="button",to:l="/",onClick:c}=a,r="EPX1";return"button"===n?(0,i.jsxs)("button",{onClick:c,type:n,className:"btn "+e,children:[(0,i.jsxs)("span",{className:"btn__content",children:[s||""," "]}),(0,i.jsx)("span",{className:"btn__glitch"}),(0,i.jsxs)("span",{className:"btn__label",children:[r,"20"]})]}):"link"===n?(0,i.jsx)(t(),{href:l,children:(0,i.jsxs)("button",{onClick:c,type:n,className:"btn "+e,children:[(0,i.jsxs)("span",{className:"btn__content",children:[s||""," "]}),(0,i.jsx)("span",{className:"btn__glitch"}),(0,i.jsxs)("span",{className:"btn__label",children:[r,"20"]})]})}):void 0};e.Z=l},1193:function(a,e,s){"use strict";var i=s(5893);s(7294);var n=s(2796),t=s.n(n),l=s(8644);let c=()=>(0,i.jsx)(i.Fragment,{children:l.Z.map(a=>(0,i.jsxs)("div",{className:t().stackholder,children:[(0,i.jsx)("img",{alt:a.slug,src:a.icon}),(0,i.jsx)("h3",{children:a.slug}),(0,i.jsx)("div",{className:t().stacks,children:(0,i.jsx)("ul",{children:a.labels.map(a=>(0,i.jsx)("li",{children:a},a))})})]}))});e.Z=c},8644:function(a,e){"use strict";e.Z=[{slug:"Front-end",labels:["React","Gatsby","Next.js","TypeScript","Sass"],icon:"/images/stacks/front-end.svg",data:["10","10","8","7","10"]},{slug:"Backend",labels:["Node.js","PHP","Ruby on Rails","Rest API","GraphQL"],icon:"/images/stacks/back-end.svg",data:["10","9","7","10","10"]},{slug:"Database",labels:["MySQL","PostgreSQL","MongoDB","Redis","Elasticsearch"],icon:"/images/stacks/database2.svg",data:["10","7","8","7","6"]},{slug:"Design",labels:["UI","UX","Adobe XD","Adobe Photoshop","Motion Graphics"],icon:"/images/stacks/design2.svg",data:["10","9","8","10","8"]},{slug:"Cloud",labels:["AWS API Gateway","Lambda","DynamoDB","S3","CloudFront"],icon:"/images/stacks/cloud.svg",data:["9","7","7","8","8"]},{slug:"DevOps",labels:["Linux","Docker","Nginx","Shell Script","Github Actions"],icon:"/images/stacks/devop2.svg",data:["10","9","9","10","9"]}]},8442:function(a,e,s){"use strict";s.r(e),s.d(e,{default:function(){return y}});var i=s(5893),n=s(7294),t=s(5902),l=s(5484);s(9217);var c=s(5376),r=[{slug:"Overall",labels:["Front-End","Backend","Database","Design","Cloud","Devop"],data:["10","9","8","8","6","7"]}],o=s(8644),d=[{name:"Introduction to Cybersecurity",img:"cybersecurity.png",year:"2022"},{name:"AWS Cloud Certification",img:"AWS.png",year:"2017"},{name:"Scrum Foundation Professional Certificate (SFPC)",img:"SFPC.png",year:"2022"},{name:"Remote Work and Virtual Collaboration Certificate (RWVCPC)",img:"RWVCPC.png",year:"2022"},{name:"UI Components I: Basic",img:"ui-basic.png",year:"2022"},{name:"UI Components II: Advanced",img:"ui-adv.png",year:"2022"},{name:"Design Composition",img:"design-composition.png",year:"2022"},{name:"Design Accessibility",img:"accessibility.png",year:"2022"},{name:"Advanced Google Analytics",img:"GAA.png",year:"2022"},{name:"Google Tag Manager Fundamentals",img:"GTM.png",year:"2022"},{name:"Google Analytics for Beginners",img:"GA.png",year:"2022"}],m=s(5542),g=s(1193),h=s(8782),u=s.n(h),p=s(4381),x=s.n(p);let j=a=>{let{image:e,children:s,nopad:n,left:t}=a;return(0,i.jsx)("section",{className:x().noPad,children:(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsxs)("div",{className:" ".concat(x().ImageAndText," ").concat(t?x().left:""),children:[(0,i.jsx)("div",{className:x().itb_image,children:e}),(0,i.jsx)("div",{className:x().itb_text,children:(0,i.jsx)("div",{className:"v-center",children:s})})]})})})};var b=s(668);let f={Overall:"rgba(105, 248, 255, 0.8)","Front-end":"rgba(245, 151, 64, 0.8)",Backend:"rgba(139, 204, 59, 0.8)",Database:"rgba(252, 238, 9, 0.8)",Design:"rgba(255, 255, 255, 0.8)",Cloud:"rgba(0, 64, 176, 0.8)",DevOps:"rgba(0, 0, 0, 0.8)"},v=a=>{let e,s=[];for(var i=0;i<a.length;i++)s[(e=a[i]).slug]={labels:e.labels,datasets:[{label:e.slug,data:e.data,pointBackgroundColor:"#fef900",pointHoverRadius:5,borderWidth:1,fill:!0,scaleStartValue:0,borderColor:"rgba(254, 48, 72, 0.8)"}]};return s},N=()=>{let a=[...r,...o.Z],e=v(a),[s,h]=(0,n.useState)(e.Overall),[p,x]=(0,n.useState)("Overall"),N=function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Overall";return{responsive:!0,fontSize:40,backgroundColor:f[a],opacity:.5,pointBorderColor:"#fff",scale:{ticks:{showLabelBackdrop:!0,fontColor:"#ffffff",min:0,max:10,stepSize:2}},scales:{r:{beginAtZero:!0,grid:{color:"#fff"},pointLabels:{color:"#fff",font:{size:16,family:"Tomorrow, sans-serif"}}}},pointLabelFontColor:"rgba(255,255,255,1)",legend:{labels:{color:"#fff"}},plugins:{legend:{labels:{color:"#fef900",font:{size:18,family:"Tomorrow, sans-serif"}}}}}},[y,_]=(0,n.useState)(N()),k=(a,s,i)=>{let n=e[a].datasets[0].label;_(N(n)),x(s),h(e[a])};return(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(l.Z,{title:"Skills"}),(0,i.jsx)("div",{className:"page-header",children:(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)("h1",{className:"display",children:"Skills"})})}),(0,i.jsxs)("section",{className:"bg-color-3",children:[(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)("div",{className:"radar-right",children:a.map((a,e)=>(0,i.jsx)(m.Z,{className:"".concat(a.slug," ").concat(p==e?"active":""),onClick(s){k(a.slug,e,s)},children:a.slug},a.slug))})}),(0,i.jsx)("div",{className:"wrapper-m",children:(0,i.jsx)("div",{className:"radarholder",children:(0,i.jsx)(c.Fk,{data:s,options:y})})})]}),(0,i.jsxs)("section",{className:"no-bg",children:[(0,i.jsx)(b.Z,{intoViewMargin:"6%",classNameNotInView:"vis-hidden",classNameInView:"animated titleIn",toggleClassNameOnInView:!0,children:(0,i.jsx)("h2",{className:"title red",children:"Developer Stacks"})}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(g.Z,{})})]}),(0,i.jsxs)("section",{className:"bg-color-1 cert-wrap",children:[(0,i.jsx)(b.Z,{intoViewMargin:"6%",classNameNotInView:"vis-hidden",classNameInView:"animated titleIn",toggleClassNameOnInView:!0,children:(0,i.jsx)("h2",{className:"title red",children:"Certifications"})}),(0,i.jsx)("div",{className:"wrapper",children:d.map(a=>(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"/images/cert/".concat(a.img)}),(0,i.jsx)("h4",{children:a.name})]}))})]}),(0,i.jsxs)(j,{image:(0,i.jsx)(u(),{src:"/images/cloudpractitioner2.jpg",alt:"Self-Educated",width:700,height:390}),children:[(0,i.jsx)("h2",{children:"Online Self-Educated"}),(0,i.jsx)("p",{children:"I usually watch a lot of youtube tutorials, I allts\xe5 use other sites like, Udemy, Lynda & Treehouse."})]}),(0,i.jsxs)(j,{left:!0,image:(0,i.jsx)(u(),{src:"/images/agile.jpeg",alt:"agile",width:700,height:390}),children:[(0,i.jsx)("h2",{children:"Agile Development Processes"}),(0,i.jsx)("p",{children:"I believe that agility is about moving quickly and adapting to change at a sustainable pace.."})]}),(0,i.jsxs)(j,{image:(0,i.jsx)(u(),{src:"/images/continuous-delivery.jpg",alt:"continuous-delivery",width:700,height:390}),children:[(0,i.jsx)("h2",{children:"Continuous Development"}),(0,i.jsx)("p",{children:"Ability to get changes of all types—including new features, configuration changes, bug fixes and experiments—into production, or into the hands of users, safely and quickly in a sustainable way."})]}),(0,i.jsx)("section",{className:"bg-color-2",children:(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)("img",{width:"1400",height:"700",src:"https://cr-skills-chart-widget.azurewebsites.net/api/api?username=ehsanpo&skills=JavaScript,HTML,CSS,JSON,Less,NodeJS,PHP,Python,ReactJS,Ruby,SCSS,SQL,Shell,TypeScript&bg=transparent"})})}),(0,i.jsxs)("section",{className:"links-block",children:[(0,i.jsx)(b.Z,{intoViewMargin:"6%",classNameNotInView:"vis-hidden",classNameInView:"animated titleIn",toggleClassNameOnInView:!0,children:(0,i.jsx)("h2",{className:"title red",children:"Stats"})}),(0,i.jsxs)("div",{className:"wrapper",children:[(0,i.jsx)("div",{className:"link",children:(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)("h3",{"data-aos":"fade-up","data-aos-delay":"200",className:"aos-init aos-animate",children:"Total commits this year"}),(0,i.jsx)("div",{"data-aos":"fade-up","data-aos-delay":"200",className:"aos-init aos-animate",children:(0,i.jsx)("p",{children:"1100"})})]})}),(0,i.jsx)("div",{className:"link",children:(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)("h3",{"data-aos":"fade-up","data-aos-delay":"300",className:"aos-init aos-animate",children:"Daytime"}),(0,i.jsx)("div",{"data-aos":"fade-up","data-aos-delay":"300",className:"aos-init aos-animate",children:(0,i.jsx)("p",{children:"I’m most productive during daytime"})})]})}),(0,i.jsx)("div",{className:"link",children:(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)("h3",{"data-aos":"fade-up","data-aos-delay":"400",className:"aos-init aos-animate",children:"Tuesdays"}),(0,i.jsx)("div",{"data-aos":"fade-up","data-aos-delay":"400",className:"aos-init aos-animate",children:(0,i.jsx)("p",{children:"I’m most productive on Tuesdays"})})]})}),(0,i.jsx)("div",{className:"link",children:(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)("h3",{"data-aos":"fade-up","data-aos-delay":"500",className:"aos-init aos-animate",children:"snake_case"}),(0,i.jsx)("div",{"data-aos":"fade-up","data-aos-delay":"500",className:"aos-init aos-animate",children:(0,i.jsx)("p",{children:"I prefer snake_case for naming variables"})})]})})]})]})]})};var y=N},4381:function(a){a.exports={ImageAndText:"imageAndText_ImageAndText__MMsiO",left:"imageAndText_left__bbDCK",itb_image:"imageAndText_itb_image__WK2FS",itb_text:"imageAndText_itb_text__f0BTV","v-center":"imageAndText_v-center__33N1d",noPad:"imageAndText_noPad__0gI3S","no-marg":"imageAndText_no-marg__WrDpA"}},2796:function(a){a.exports={stackholder:"Stack_stackholder__KBMa1",stacks:"Stack_stacks__WwYyY"}},5443:function(){},4129:function(){}},function(a){a.O(0,[757,664,458,147,879,774,888,179],function(){return a(a.s=437)}),_N_E=a.O()}]);
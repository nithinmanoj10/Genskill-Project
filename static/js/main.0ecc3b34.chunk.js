(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{42:function(e,s,t){},51:function(e,s,t){"use strict";t.r(s);var a=t(1),n=t(24),c=t.n(n),i=t(3),r=t(5),o=(t(42),t(7)),l=t(8),j=t(10),d=t(9),b=t(0),m=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).state={handleClick:e.handleClick,text:e.text,to:e.to},a}return Object(l.a)(t,[{key:"render",value:function(){return Object(b.jsx)("a",{href:"javascript:void(0)",className:"button button--basic",onClick:this.state.handleClick,to:this.state.to,children:this.props.text})}}]),t}(a.Component),u=t.p+"static/media/illustration-working-brown.24887bc9.svg",_=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"hero-box",children:[Object(b.jsx)("h3",{className:"greeting",children:"Good Morning"}),Object(b.jsx)("h2",{className:"user-name",children:"Nithin"}),Object(b.jsx)("img",{src:u,alt:"Girl looking at computer, being productive",className:"hero-box__image"}),Object(b.jsxs)("p",{className:"hero-box__description",children:["Pomodoro will make your work easier and more",Object(b.jsx)("span",{class:"bold-text",children:" productive"})]})]})}}]),t}(a.Component),h=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"homepage",children:[Object(b.jsx)(_,{}),Object(b.jsxs)("div",{class:"homepage__buttons",children:[Object(b.jsx)(i.b,{to:"/task-manager",children:Object(b.jsx)(m,{text:"View Tasks"})}),Object(b.jsx)(i.b,{to:"/session-manager",children:Object(b.jsx)(m,{text:"Start"})})]})]})}}]),t}(a.Component),O=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(b.jsx)("header",{className:"header",children:Object(b.jsxs)("div",{className:"mobile-navbar",children:[Object(b.jsx)("div",{className:"app-name",children:Object(b.jsx)(i.b,{to:"/",children:Object(b.jsx)("h1",{children:"Pomodoro"})})}),Object(b.jsx)("a",{href:"javascript:void(0)",className:"hamburger-menu",children:Object(b.jsx)("img",{src:"https://img.icons8.com/material-outlined/24/000000/menu--v1.png",alt:"Hamburger Menu Icon",className:"hamburger-menu__icon"})})]})})}}]),t}(a.Component),x=(a.Component,t(25)),p=(a.Component,a.Component,a.Component,t(6));var v=function(){var e=Object(a.useState)(25),s=Object(p.a)(e,2),t=s[0],n=s[1],c=Object(a.useState)(10),i=Object(p.a)(c,2),r=i[0],o=i[1],l=Object(a.useState)(0),j=Object(p.a)(l,2),d=j[0],m=j[1],u=Object(a.useState)(8),_=Object(p.a)(u,2),h=_[0];return _[1],Object(a.useEffect)((function(){var e=setInterval((function(){if(clearInterval(e),0===r){if(0===t)return void m(d+1);n(t-1),o(59)}else o(r-1)}),1e3)}),[r]),Object(b.jsxs)("div",{className:"timer",children:[Object(b.jsxs)("h1",{className:"timer__value",children:[t<10?"0":"",t,":",r<10?"0":"",r]}),Object(b.jsxs)("p",{className:"timer__session",children:[d,"/",h]}),Object(b.jsx)("button",{children:"Start"})]})},g=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"timerpage",children:Object(b.jsx)(v,{})})}}]),t}(a.Component),N=(a.Component,t(4)),f=t(18),k=t.n(f);var S=t(22),C=t.n(S),y=(t(33),t(28)),D=t.n(y);t(34),t(35);t.p;var T=function(e){return Object(b.jsxs)("div",{className:"regular-show",children:[Object(b.jsx)("img",{src:e.image,alt:e.alt,className:"regular-show__pic"}),Object(b.jsx)("p",{className:"regular-show__text",children:e.text})]})};t.p;t.p;var w=function(){return Object(b.jsx)("div",{className:"task-manager",children:Object(b.jsx)("h1",{children:"Hello World"})})};var I=function(e){var s=e.sessionData,t=e.setSessionData;console.log(s,t);var a=JSON.parse(localStorage.getItem("tasksData")||"[]").filter((function(e){if(!1===e.task_isCompleted)return e})),n={id:100*Math.random(),activeTime:25,shortBreak:5,longBreak:30,intervals:4,isStarted:!1,isFinished:!1,currentInterval:0};return Object(b.jsxs)("div",{className:"task-create",children:[Object(b.jsxs)("header",{className:"session-create__header",children:[Object(b.jsx)("h4",{className:"session-create__heading",children:"Create Session"}),Object(b.jsx)(i.b,{to:"/Session-Manager",children:Object(b.jsx)(k.a,{className:"close-icon"})})]}),Object(b.jsxs)("form",{className:"session-create__form",children:[Object(b.jsx)("label",{htmlFor:"stitle",className:"session-create__form__label",children:"Session Title"}),Object(b.jsx)("input",{type:"text",name:"sessiontitle",id:"stitle",placeholder:"Your Session Title",className:"input__text",onChange:function(e){n.title=e.target.value}}),Object(b.jsxs)("label",{htmlFor:"sstudytime",className:"session-create__form__label",children:["Active Time ",Object(b.jsx)("span",{className:"light-italic",children:"(in minutes)"})]}),Object(b.jsx)("input",{type:"number",name:"SessionStudyTime",id:"sstudytime",className:"input__number",onChange:function(e){n.activeTime=e.target.value},defaultValue:"25",min:"10",max:"120"}),Object(b.jsxs)("label",{htmlFor:"sshortbreaktime",className:"session-create__form__label",children:["Short Break Time ",Object(b.jsx)("span",{className:"light-italic",children:"(in minutes)"})]}),Object(b.jsx)("input",{type:"number",name:"SessionShortBreakTime",id:"sshortbreaktime",className:"input__number",onChange:function(e){n.shortBreak=e.target.value},defaultValue:"5",min:"5",max:"20"}),Object(b.jsxs)("label",{htmlFor:"slongbreaktime",className:"session-create__form__label",children:["Long Break Time ",Object(b.jsx)("span",{className:"light-italic",children:"(in minutes)"})]}),Object(b.jsx)("input",{type:"number",name:"SessionLongBreakTime",id:"slongbreaktime",className:"input__number",onChange:function(e){n.longBreak=e.target.value},defaultValue:"30",min:"20",max:"60"}),Object(b.jsx)("label",{htmlFor:"stask",className:"session-create__form__label",children:"Task"}),Object(b.jsxs)("select",{name:"sessiontask",id:"stask",className:"session-create__form__select",onChange:function(e){n.task=e.target.value},children:[Object(b.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0}),0===a.length?Object(b.jsx)("option",{disabled:!0,children:"Create some Tasks"}):a.map((function(e){return Object(b.jsx)("option",{value:"".concat(e.task_title),id:e.task_id,children:e.task_title})}))]}),Object(b.jsx)("label",{htmlFor:"sintervals",className:"session-create__form__label",children:"Number of Intervals"}),Object(b.jsx)("input",{type:"number",name:"sessionintervals",id:"sintervals",className:"input__number",onChange:function(e){n.intervals=e.target.value},defaultValue:"4",min:"1",max:"12"}),Object(b.jsx)("label",{htmlFor:"tdescription",className:"session-create__form__label",children:"Description"}),Object(b.jsx)("textarea",{name:"sessiondescription",id:"tdescription",cols:"30",rows:"4",placeholder:"Description for your Session...",className:"session-create__form__description",onChange:function(e){n.description=e.target.value}}),Object(b.jsx)("button",{className:"input__button",type:"submit",onClick:function(){s.push(n),t(Object(N.a)(s)),localStorage.setItem("sessionsData",JSON.stringify(s))},children:Object(b.jsx)(i.b,{to:"/Session-Manager",class:"input__button__link",children:Object(b.jsx)("h4",{children:"Create Session"})})})]})]})},F=t(36),B=t.n(F);var M=function(e){var s=e.session,t=s.id,a=s.isStarted,n=s.isFinised,c=s.title,i=s.task,r=s.currentInterval,o=s.intervals,l=s.description,j=e.sessionData,d=e.setSessionData;return Object(b.jsxs)("div",{className:"session-card",children:[Object(b.jsxs)("div",{className:"session-card__info",children:[Object(b.jsx)("h4",{className:"session-card__info__name",children:c}),Object(b.jsx)("p",{className:"session-card__info__task",children:i}),Object(b.jsx)("p",{className:"session-card__info__description",children:l})]}),Object(b.jsxs)("div",{className:"session-card__actions",children:[Object(b.jsx)("button",{className:"session-card__actions__button",onClick:function(){console.log(t),console.log(j,d);var e=j.filter((function(e){if(t!==e.id)return e}));d(Object(N.a)(e)),localStorage.setItem("sessionsData",JSON.stringify(e))},children:Object(b.jsx)(D.a,{})}),Object(b.jsx)("button",{className:"session-card__actions__button",children:Object(b.jsx)(B.a,{})})]}),Object(b.jsxs)("div",{className:"session-card__status",children:[Object(b.jsxs)("div",{className:"session-card__status__stat",children:[Object(b.jsx)("p",{className:"session-card__status__stat__name",children:"Status: "}),!0===n?Object(b.jsx)("p",{className:"session-card__status__stat__value session-card__status__stat__value--finished ",children:"Finished"}):!0===a?Object(b.jsx)("p",{className:"session-card__status__stat__value session-card__status__stat__value--started ",children:"Started"}):Object(b.jsx)("p",{className:"session-card__status__stat__value",children:"Not Started"})]}),Object(b.jsxs)("div",{className:"session-card__status__stat",children:[Object(b.jsx)("p",{className:"session-card__status__stat__name",children:"Progress:"}),Object(b.jsxs)("p",{className:"session-card__status__stat__value",children:[r,"/",o]})]})]})]})},J=t.p+"static/media/Rigby-reading.343b8b6a.png";var V=function(){var e=Object(a.useState)(Object(N.a)(JSON.parse(localStorage.getItem("sessionsData")||"[]"))),s=Object(p.a)(e,2),t=s[0],n=s[1];return Object(b.jsx)(i.a,{children:Object(b.jsx)("div",{className:"task-manager",children:Object(b.jsxs)("div",{className:"task-section",children:[Object(b.jsxs)("header",{className:"task-section__header",children:[Object(b.jsx)("h2",{className:"heading",children:"Sessions"}),Object(b.jsxs)(i.b,{to:"/Session-Manager/create-tag",className:"add-task",children:[Object(b.jsx)("h4",{children:"New Session"}),Object(b.jsx)(C.a,{className:"add-task__icon"})]})]}),Object(b.jsx)(r.c,{children:Object(b.jsx)(r.a,{path:"/Session-Manager/create-tag",children:Object(b.jsx)(I,{sessionData:t,setSessionData:n})})}),0===t.length?Object(b.jsx)(T,{image:J,text:"Create a session and let's get productive :D",alt:"Rigby Reading"}):t.map((function(e){return Object(b.jsx)(M,{session:e,sessionData:t,setSessionData:n})}))]})})})};var P=function(){return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)(O,{}),Object(b.jsx)(r.a,{path:"/",exact:!0,component:h}),Object(b.jsx)(r.a,{path:"/task-manager",component:w}),Object(b.jsx)(r.a,{path:"/session-manager",component:V}),Object(b.jsx)(r.a,{path:"/timer",component:g})]})};c.a.render(Object(b.jsx)(i.a,{children:Object(b.jsx)(P,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.0ecc3b34.chunk.js.map
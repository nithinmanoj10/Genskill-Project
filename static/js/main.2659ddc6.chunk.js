(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{212:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(44),n=a.n(c),r=a(5),i=a(10),o=(a(99),a(3)),l=a(4),j=a(7),d=a(6),b=a(0),m=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={handleClick:e.handleClick,text:e.text,to:e.to},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("a",{href:"javascript:void(0)",className:"button button--basic",onClick:this.state.handleClick,to:this.state.to,children:this.props.text})}}]),a}(s.Component),u=a.p+"static/media/illustration-working-brown.24887bc9.svg",h=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={greeting:"",userName:"Stranger"},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=(new Date).getHours();e>=0&&e<12?this.setState({greeting:"Good Morning"}):e>=12&&e<16?this.setState({greeting:"Good Afternoon"}):this.setState({greeting:"Good Evening"})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"hero-box",children:[Object(b.jsx)("h3",{className:"greeting",children:this.state.greeting}),Object(b.jsx)("h2",{className:"user-name",children:this.state.userName}),Object(b.jsx)("img",{src:u,alt:"Girl looking at computer, being productive",className:"hero-box__image"}),Object(b.jsxs)("p",{className:"hero-box__description",children:["Pomodoro will make your work easier and more",Object(b.jsx)("span",{class:"bold-text",children:" productive"})]})]})}}]),a}(s.Component),_=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"homepage",children:[Object(b.jsx)(h,{}),Object(b.jsxs)("div",{class:"homepage__buttons",children:[Object(b.jsx)(r.b,{to:"/pomodoro/session-manager",children:Object(b.jsx)(m,{text:"Start"})}),Object(b.jsx)(r.b,{to:"/task-manager/tasks",children:Object(b.jsx)(m,{text:"View Tasks"})})]})]})}}]),a}(s.Component),O=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:"header",children:Object(b.jsxs)("div",{className:"mobile-navbar",children:[Object(b.jsx)("div",{className:"app-name",children:Object(b.jsx)(r.b,{to:"/",children:Object(b.jsx)("h1",{children:"Pomodoro"})})}),Object(b.jsx)(r.b,{to:"/stats",className:"hamburger-menu",children:Object(b.jsx)("img",{src:"https://img.icons8.com/material-outlined/24/000000/menu--v1.png",alt:"Hamburger Menu Icon",className:"hamburger-menu__icon"})})]})})}}]),a}(s.Component),g=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("nav",{className:"task-nav-bar",children:Object(b.jsxs)("ul",{className:"task-nav-bar__list",children:[Object(b.jsx)("li",{className:"task-nav-bar__list__item",children:Object(b.jsx)(r.b,{href:"javascript:void(0)",className:"task-nav-bar__list__item__link",to:"/task-manager/tasks",children:"Tasks"})}),Object(b.jsx)("li",{className:"task-nav-bar__list__item",children:Object(b.jsx)(r.b,{href:"javascript:void(0)",className:"task-nav-bar__list__item__link",to:"/task-manager/completed-tasks",children:"Completed"})}),Object(b.jsx)("li",{className:"task-nav-bar__list__item",children:Object(b.jsx)(r.b,{href:"javascript:void(0)",className:"task-nav-bar__list__item__link",to:"/task-manager/tags",children:"Tags"})})]})})}}]),a}(s.Component),x=a(9),k=a(8),p=a(25),v=a.n(p);var N=function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),a=e.toLocaleString("default",{month:"long"});return function(e){var t=Number(e);return t+(t>0?["th","st","nd","rd"][t>3&&t<21||t%10>3?0:t%10]:"")}(t)+", "+a};var f=function(e){var t=e.tasks,a=e.submitTaskHandle,c=JSON.parse(localStorage.getItem("tagsData")||"[]"),n=Object(s.useState)(""),i=Object(k.a)(n,2),o=i[0],l=i[1],j=Object(s.useState)(""),d=Object(k.a)(j,2),m=d[0],u=d[1],h=Object(s.useState)(""),_=Object(k.a)(h,2),O=_[0],g=_[1],p=Object(s.useState)(""),f=Object(k.a)(p,2),S=f[0],C=f[1],T=Object(s.useState)(Object(x.a)(c)),y=Object(k.a)(T,2),D=y[0];return y[1],Object(b.jsxs)("div",{className:"task-create",children:[Object(b.jsxs)("header",{className:"task-create__header",children:[Object(b.jsx)("h4",{className:"task-create__heading",children:"Create Task"}),Object(b.jsx)(r.b,{to:"/task-manager/tasks",children:Object(b.jsx)(v.a,{className:"close-icon"})})]}),Object(b.jsxs)("form",{className:"task-create__form",children:[Object(b.jsx)("label",{htmlFor:"ttitle",className:"task-create__form__label",children:"Task Title"}),Object(b.jsx)("input",{type:"text",name:"tasktitle",id:"ttitle",placeholder:"Your Task Title",className:"input__text",onChange:function(e){l(e.target.value)}}),Object(b.jsx)("label",{htmlFor:"ttag",className:"task-create__form__label",children:"Tag"}),Object(b.jsxs)("select",{name:"tasktag",id:"ttag",className:"task-create__form__select",onChange:function(e){u(e.target.value)},children:[Object(b.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0}),0===D.length?Object(b.jsx)("option",{disabled:!0,children:"Make some Tags"}):D.map((function(e){return Object(b.jsx)("option",{value:"".concat(e.name),id:e.id,children:e.name})}))]}),Object(b.jsx)("label",{htmlFor:"testimate",className:"task-create__form__label",children:"Estimated Intervals to Complete"}),Object(b.jsx)("input",{type:"number",name:"taskestimate",id:"testimate",placeholder:"Intervals",className:"input__number",onChange:function(e){g(e.target.value)}}),Object(b.jsx)("label",{htmlFor:"tdescription",className:"task-create__form__label",children:"Description"}),Object(b.jsx)("textarea",{name:"taskdescription",id:"tdescription",cols:"30",rows:"4",placeholder:"Description for your Task...",className:"task-create__form__description",onChange:function(e){C(e.target.value)}}),Object(b.jsx)("button",{className:"input__button",type:"submit",onClick:function(e){e.preventDefault();var s={};s.task_title=o,s.task_tag=m,s.task_estimate=O,s.task_desc=S,s.task_isCompleted=!1,s.task_startDate=N(),s.task_endDate="-",s.task_id=100*Math.random(),t.push(s),localStorage.setItem("tasksData",JSON.stringify(t)),a(t)},children:Object(b.jsx)(r.b,{to:"/task-manager/tasks",class:"input__button__link",children:Object(b.jsx)("h4",{children:"Create Task"})})})]})]})},S=a(32),C=a.n(S),T=a(86),y=a.n(T),D=a(46),w=a.n(D),I=a(87),B=a.n(I),J=a(88),F=a.n(J);var M=function(e){var t=JSON.parse(localStorage.getItem("tagsData")||"[]"),a=e.task,s=a.task_tag,c=a.task_title,n=a.task_desc,r=a.task_estimate,i=a.task_id,o=a.task_startDate,l=a.task_endDate,j=a.task_isCompleted,d={};0!==t.length&&t.forEach((function(e){e.name!==s||(d.color=e.colour)}));var m=e.tasks,u=e.setTasks;return Object(b.jsxs)("div",{className:"task-card ".concat(!0===j?"task-card--completed":""),children:[Object(b.jsxs)("div",{className:"task-info",children:[Object(b.jsx)("p",{className:"task-info__tag",style:d,children:s}),Object(b.jsx)("h4",{className:"task-info__name",children:c}),Object(b.jsx)("p",{className:"task-info__desc",children:n})]}),Object(b.jsxs)("div",{className:"task-card__actions",children:[Object(b.jsx)("button",{className:"task-card__actions__button",onClick:function(){var e=m.map((function(e){return i===e.task_id&&(e.task_isCompleted=!0,e.task_endDate=N()),e}));localStorage.setItem("tasksData",JSON.stringify(e)),u(Object(x.a)(e))},children:Object(b.jsx)(y.a,{className:"task-icon task-icon--done"})}),Object(b.jsx)("button",{className:"task-card__actions__button",onClick:function(){var e=m.filter((function(e){return i!==e.task_id}));localStorage.setItem("tasksData",JSON.stringify(e)),u(Object(x.a)(e))},children:Object(b.jsx)(w.a,{className:"task-icon task-icon--delete"})})]}),Object(b.jsxs)("div",{className:"task-card__time",children:[Object(b.jsx)(B.a,{className:"task-icon--time"}),Object(b.jsxs)("div",{className:"time-stat",children:[Object(b.jsx)("p",{className:"time-stat__name",children:"Estimated Time"}),Object(b.jsxs)("p",{className:"time-stat__value",children:[r," mins"]})]}),Object(b.jsx)(F.a,{className:"task-icon--time"}),Object(b.jsxs)("div",{className:"time-stat",children:[Object(b.jsx)("p",{className:"time-stat__name",children:"Start"}),Object(b.jsx)("p",{className:"time-stat__value",children:o})]}),Object(b.jsxs)("div",{className:"time-stat",children:[Object(b.jsx)("p",{className:"time-stat__name",children:"End"}),Object(b.jsx)("p",{className:"time-stat__value",children:l})]})]})]})},E=a.p+"static/media/Mordecai-Rigby-enjoying.89e2f180.png";var R=function(e){return Object(b.jsxs)("div",{className:"regular-show",children:[Object(b.jsx)("img",{src:e.image,alt:e.alt,className:"regular-show__pic"}),Object(b.jsx)("p",{className:"regular-show__text",children:e.text})]})};var P=function(e){var t=e.tagColour,a=e.setTagColour,s=e.tagName,c=e.setTagName,n=e.setTagData,i=e.tagData;return Object(b.jsx)("div",{className:"tag-create",children:Object(b.jsxs)("form",{className:"tag-create__form",children:[Object(b.jsxs)("div",{className:"tag-create__data",children:[Object(b.jsx)("label",{htmlFor:"tgname",className:"tag-create__form__label",children:"Tag Name"}),Object(b.jsx)("input",{type:"text",name:"TagName",id:"tgname",className:"input__text",onChange:function(e){c(e.target.value)}}),Object(b.jsx)("label",{htmlFor:"tgcolour",className:"tag-create__form__label",children:"Tag Colour"}),Object(b.jsx)("div",{className:"input__colour",children:Object(b.jsx)("input",{type:"color",name:"TagColour",id:"tgcolour",className:"input__colour__picker",onChange:function(e){a(e.target.value)}})})]}),Object(b.jsx)("div",{className:"tag-create__close",children:Object(b.jsx)(r.b,{to:"/task-manager/tags",children:Object(b.jsx)(v.a,{})})}),Object(b.jsx)("div",{className:"tag-create__submit",children:Object(b.jsx)("button",{className:"input__button",type:"submit",onClick:function(){var e={name:s,colour:t,id:100*Math.random(),tagTotalTime:0};i.push(e),localStorage.setItem("tagsData",JSON.stringify(i)),n(Object(x.a)(i))},children:Object(b.jsx)(r.b,{to:"/task-manager/tags",class:"input__button__link",children:Object(b.jsx)("h4",{children:"Create Tag"})})})})]})})};var G=function(){var e=JSON.parse(localStorage.getItem("tasksData")||"[]"),t=Object(s.useState)(Object(x.a)(e)),a=Object(k.a)(t,2),c=a[0],n=a[1],o=e.filter((function(e){if(0==e.task_isCompleted)return e}));return Object(b.jsx)(r.a,{children:Object(b.jsxs)("div",{className:"task-section",children:[Object(b.jsxs)("header",{className:"task-section__header",children:[Object(b.jsx)("h2",{className:"heading",children:"Tasks"}),Object(b.jsxs)(r.b,{to:"/task-manager/tasks/create-task",className:"add-task",children:[Object(b.jsx)("h4",{children:"New Task"}),Object(b.jsx)(C.a,{className:"add-task__icon"})]})]}),Object(b.jsx)(i.c,{children:Object(b.jsx)(i.a,{path:"/task-manager/tasks/create-task",children:Object(b.jsx)(f,{submitTaskHandle:function(e){n(Object(x.a)(e))},tasks:c})})}),0==o.length?Object(b.jsx)(R,{image:E,text:"You have no tasks for now. Go and have some fun :)",alt:"Moredecai and Rigby enjoying"}):Object(b.jsx)("ul",{className:"task-list",children:c.map((function(e){return 0==e.task_isCompleted?Object(b.jsx)(M,{task:e,tasks:c,setTasks:n},e.task_id):""}))})]})})},V=a.p+"static/media/Mordecai-Rigby-working.8610382c.png";var A=function(){var e=JSON.parse(localStorage.getItem("tasksData")||"[]"),t=Object(s.useState)(Object(x.a)(e)),a=Object(k.a)(t,2),c=a[0],n=a[1],r=e.filter((function(e){if(1==e.task_isCompleted)return e}));return Object(b.jsxs)("div",{className:"task-section",children:[Object(b.jsx)("header",{className:"task-section__header",children:Object(b.jsx)("h2",{className:"heading",children:"Completed Tasks"})}),0==r.length?Object(b.jsx)(R,{image:V,text:"You haven't completed any tasks. Now get back to work ;)",alt:"Moredecai and Rigby Working"}):Object(b.jsx)("ul",{className:"task-list",children:r.map((function(e){return Object(b.jsx)(M,{task:e,tasks:c,setTasks:n},e.task_id)}))})]})};var H=function(e){var t=e.name,a=e.colour,s=e.id,c=e.tagData,n=e.setTagData,r={backgroundColor:a};return Object(b.jsxs)("div",{className:"tag-card",children:[Object(b.jsx)("div",{className:"tag-card__colour",style:r}),Object(b.jsx)("h3",{className:"tag-card__name",children:t}),Object(b.jsx)("div",{className:"tag-card__close",children:Object(b.jsx)(v.a,{className:"tag-card__close__icon",onClick:function(){var e=c.filter((function(e){if(e.id!==s)return e}));n(Object(x.a)(e)),localStorage.setItem("tagsData",JSON.stringify(e))}})})]})},Y=a.p+"static/media/Mordecai-Rigby-pointing.e3f7fdfd.png";var L=function(){var e=Object(s.useState)("#000"),t=Object(k.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),o=Object(k.a)(n,2),l=o[0],j=o[1],d=JSON.parse(localStorage.getItem("tagsData")||"[]"),m=Object(s.useState)(Object(x.a)(d)),u=Object(k.a)(m,2),h=u[0],_=u[1];return Object(b.jsx)(r.a,{children:Object(b.jsxs)("div",{className:"task-section",children:[Object(b.jsxs)("header",{className:"task-section__header",children:[Object(b.jsx)("h2",{className:"heading",children:"Tags"}),Object(b.jsxs)(r.b,{to:"/task-manager/tags/create-tag",className:"add-task",children:[Object(b.jsx)("h4",{children:"New Tag"}),Object(b.jsx)(C.a,{className:"add-task__icon"})]})]}),Object(b.jsx)("p",{className:"warning",children:"Recommended that you don't delete any tags and you choose a dark colour"}),Object(b.jsx)(i.c,{children:Object(b.jsx)(i.a,{path:"/task-manager/tags/create-tag",children:Object(b.jsx)(P,{tagColour:a,setTagColour:c,tagName:l,setTagName:j,setTagData:_,tagData:h})})}),0===d.length?Object(b.jsx)(R,{image:Y,text:"C'mon, create tags so you can track your tasks and be more productive :O",alt:"Moredecai and Rigby Pointing"}):Object(b.jsx)("div",{className:"tag-gallery",children:h.map((function(e){return Object(b.jsx)(H,{name:e.name,colour:e.colour,id:e.id,setTagData:_,tagData:h})}))})]})})};var W=function(){return Object(b.jsx)(r.a,{children:Object(b.jsxs)("div",{className:"task-manager",children:[Object(b.jsx)(g,{}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/task-manager/tasks",component:G}),Object(b.jsx)(i.a,{path:"/task-manager/completed-tasks",component:A}),Object(b.jsx)(i.a,{path:"/task-manager/tags",component:L})]})]})})};var q=function(e){var t=e.sessionData,a=e.setSessionData,s=JSON.parse(localStorage.getItem("tasksData")||"[]").filter((function(e){if(!1===e.task_isCompleted)return e})),c={id:100*Math.random(),activeTime:25,shortBreak:5,longBreak:30,intervals:4,isStarted:!1,isFinished:!1,currentInterval:0},n=function(e){c.task_id=e.target.id,s.forEach((function(t){t.task_id==e.target.id&&(c.tag=t.task_tag)}))};return Object(b.jsxs)("div",{className:"task-create",children:[Object(b.jsxs)("header",{className:"session-create__header",children:[Object(b.jsx)("h4",{className:"session-create__heading",children:"Create Session"}),Object(b.jsx)(r.b,{to:"/pomodoro/session-manager",children:Object(b.jsx)(v.a,{className:"close-icon"})})]}),Object(b.jsxs)("form",{className:"session-create__form",children:[Object(b.jsx)("label",{htmlFor:"stitle",className:"session-create__form__label",children:"Session Title"}),Object(b.jsx)("input",{type:"text",name:"sessiontitle",id:"stitle",placeholder:"Your Session Title",className:"input__text",onChange:function(e){c.title=e.target.value}}),Object(b.jsxs)("label",{htmlFor:"sstudytime",className:"session-create__form__label",children:["Active Time ",Object(b.jsx)("span",{className:"light-italic",children:"(in minutes)"})]}),Object(b.jsx)("input",{type:"number",name:"SessionStudyTime",id:"sstudytime",className:"input__number",onChange:function(e){c.activeTime=e.target.value},defaultValue:"25",min:"10",max:"120"}),Object(b.jsxs)("label",{htmlFor:"sshortbreaktime",className:"session-create__form__label",children:["Short Break Time ",Object(b.jsx)("span",{className:"light-italic",children:"(in minutes)"})]}),Object(b.jsx)("input",{type:"number",name:"SessionShortBreakTime",id:"sshortbreaktime",className:"input__number",onChange:function(e){c.shortBreak=e.target.value},defaultValue:"5",min:"5",max:"20"}),Object(b.jsxs)("label",{htmlFor:"slongbreaktime",className:"session-create__form__label",children:["Long Break Time ",Object(b.jsx)("span",{className:"light-italic",children:"(in minutes)"})]}),Object(b.jsx)("input",{type:"number",name:"SessionLongBreakTime",id:"slongbreaktime",className:"input__number",onChange:function(e){c.longBreak=e.target.value},defaultValue:"30",min:"20",max:"60"}),Object(b.jsx)("label",{htmlFor:"stask",className:"session-create__form__label",children:"Task"}),Object(b.jsxs)("select",{name:"sessiontask",id:"stask",className:"session-create__form__select",onChange:function(e){c.task=e.target.value},children:[Object(b.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0}),0===s.length?Object(b.jsx)("option",{disabled:!0,children:"Create some Tasks"}):s.map((function(e){return Object(b.jsx)("option",{value:"".concat(e.task_title),id:e.task_id,onClick:n,children:e.task_title})}))]}),Object(b.jsx)("label",{htmlFor:"sintervals",className:"session-create__form__label",children:"Number of Intervals"}),Object(b.jsx)("input",{type:"number",name:"sessionintervals",id:"sintervals",className:"input__number",onChange:function(e){c.intervals=e.target.value},defaultValue:"4",min:"1",max:"12"}),Object(b.jsx)("label",{htmlFor:"tdescription",className:"session-create__form__label",children:"Description"}),Object(b.jsx)("textarea",{name:"sessiondescription",id:"tdescription",cols:"30",rows:"4",placeholder:"Description for your Session...",className:"session-create__form__description",onChange:function(e){c.description=e.target.value}}),Object(b.jsx)("button",{className:"input__button",type:"submit",onClick:function(){t.push(c),a(Object(x.a)(t)),localStorage.setItem("sessionsData",JSON.stringify(t))},children:Object(b.jsx)(r.b,{to:"/pomodoro/session-manager",class:"input__button__link",children:Object(b.jsx)("h4",{children:"Create Session"})})})]})]})},z=a(89),K=a.n(z);var Q=function(e){var t=e.session,a=t.id,c=(t.activeTime,t.shortBreak,t.longBreak,t.isStarted,t.isFinished),n=t.title,i=t.task,o=t.currentInterval,l=t.intervals,j=t.description,d=Object(s.useState)(e.session.isStarted),m=Object(k.a)(d,2),u=m[0],h=m[1],_=e.sessionData,O=e.setSessionData,g=(e.currentSession,e.setCurrentSession);return Object(b.jsxs)("div",{className:"session-card",children:[Object(b.jsxs)("div",{className:"session-card__info",children:[Object(b.jsx)("h4",{className:"session-card__info__name",children:n}),Object(b.jsx)("p",{className:"session-card__info__task",children:i}),Object(b.jsx)("p",{className:"session-card__info__description",children:j})]}),Object(b.jsxs)("div",{className:"session-card__actions",children:[Object(b.jsx)("button",{className:"session-card__actions__button",onClick:function(){var e=_.filter((function(e){if(a!==e.id)return e}));O(Object(x.a)(e)),localStorage.setItem("sessionsData",JSON.stringify(e))},children:Object(b.jsx)(w.a,{})}),!1===c?Object(b.jsx)(r.b,{to:"/pomodoro/timer",children:Object(b.jsx)("button",{className:"session-card__actions__button",onClick:function(){h(!0);var t=_.filter((function(e){return a===e.id&&(e.isStarted=!0),e}));O(Object(x.a)(t)),localStorage.setItem("sessionsData",JSON.stringify(t)),g(e.session)},children:Object(b.jsx)(K.a,{})})}):Object(b.jsx)("div",{})]}),Object(b.jsxs)("div",{className:"session-card__status",children:[Object(b.jsxs)("div",{className:"session-card__status__stat",children:[Object(b.jsx)("p",{className:"session-card__status__stat__name",children:"Status: "}),!0===c?Object(b.jsx)("p",{className:"session-card__status__stat__value session-card__status__stat__value--finished ",children:"Finished"}):!0===u?Object(b.jsx)("p",{className:"session-card__status__stat__value session-card__status__stat__value--started ",children:"Started"}):Object(b.jsx)("p",{className:"session-card__status__stat__value",children:"Not Started"})]}),Object(b.jsxs)("div",{className:"session-card__status__stat",children:[Object(b.jsx)("p",{className:"session-card__status__stat__name",children:"Progress:"}),Object(b.jsxs)("p",{className:"session-card__status__stat__value",children:[o,"/",l]})]})]})]})},U=a.p+"static/media/Rigby-reading.343b8b6a.png",X=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this)).state={task:e.task},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"current-task",children:[Object(b.jsx)("h3",{className:"current-task__heading",children:"Current Task"}),Object(b.jsx)("h4",{className:"current-task__name",children:this.state.task})]})}}]),a}(s.Component),Z=(s.Component,s.Component,a.p+"static/media/start-sound.70f7d22e.wav"),$=a.p+"static/media/end-sound.1154923f.wav";var ee=function(e){var t=Object(s.useState)(e.activeTime),a=Object(k.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(0),i=Object(k.a)(r,2),o=i[0],l=i[1],j=Object(s.useState)(0),d=Object(k.a)(j,2),m=d[0],u=d[1],h=Object(s.useState)(e.currentBlock),_=Object(k.a)(h,2),O=_[0],g=_[1],x=Object(s.useState)(e.blocks),p=Object(k.a)(x,2),v=p[0],N=(p[1],Object(s.useState)(!1)),f=Object(k.a)(N,2),S=f[0],C=f[1],T=Object(s.useState)(!0),y=Object(k.a)(T,2),D=y[0],w=y[1],I=Object(s.useState)(0),B=Object(k.a)(I,2),J=B[0],F=B[1],M=e.activeTime,E=e.shortBreak,R=e.longBreak,P=e.currentSession,G=e.setCurrentSession,V=e.isSession,A=e.setIsSession,H=e.setTimerIsStarted;return Object(s.useEffect)((function(){var e;return!0===S&&(H(!0),e=setInterval((function(){if(0===o){if(0===c){if(new Audio($).play(),!0===V){P.currentInterval=O+1,G(P),g((function(e){return e+1})),w(!1),A(!1),O+1==v&&(P.isFinished=!0);var e=JSON.parse(localStorage.getItem("tagsData")).map((function(e){return e.name===P.tag&&(e.tagTotalTime=e.tagTotalTime+J,F(0)),e}));localStorage.setItem("tagsData",JSON.stringify(e))}return console.log(J),void C(!1)}n(c-1),l(59),!0===V&&F(J+1)}else l(o-1),!0===V&&F(J+1);u((function(e){return e+1}))}),1e3)),function(){clearInterval(e)}}),[S,m]),Object(b.jsxs)("div",{className:"timer",children:[Object(b.jsxs)("h1",{className:"timer__value",children:[c<10?"0":"",c,":",o<10?"0":"",o]}),Object(b.jsxs)("p",{className:"timer__session",children:[O,"/",v]}),Object(b.jsxs)("div",{className:"timerpage__controls",children:[Object(b.jsx)("a",{href:"javascript:void(0)",className:"button button--basic",onClick:function(){!0!==P.isFinished&&1==D&&(new Audio(Z).play(),setTimeout((function(){C(!0)}),2e3))},children:"Start"}),Object(b.jsx)("a",{href:"javascript:void(0)",className:"button button--basic",onClick:function(){!0!==P.isFinished&&C(!1),console.log(J)},children:"Pause"})]}),Object(b.jsxs)("div",{class:"timerpage__buttons",children:[Object(b.jsx)("a",{href:"javascript:void(0)",className:"pomodoro-controls",onClick:function(){!1===S&&(A(!0),n(M),l(0),w(!0))},children:Object(b.jsx)("h4",{children:"Pomodoro"})}),Object(b.jsx)("a",{href:"javascript:void(0)",className:"pomodoro-controls",onClick:function(){!1===S&&(A(!1),n(E),l(0),w(!0))},children:Object(b.jsx)("h4",{children:"Short Break"})}),Object(b.jsx)("a",{href:"javascript:void(0)",className:"pomodoro-controls",onClick:function(){!1===S&&(A(!1),n(R),l(0),w(!0))},children:Object(b.jsx)("h4",{children:"Long Break"})})]})]})},te=a(90),ae=a.n(te);var se=function(){return Object(b.jsx)("div",{className:"overlay",children:Object(b.jsxs)("div",{className:"close-warning",children:[Object(b.jsx)("p",{className:"close-warning__message",children:"Are you sure you want to go back?"}),Object(b.jsxs)("div",{className:"close-warning__action",children:[Object(b.jsx)(r.b,{to:"/pomodoro/timer/",className:"close-warning__action__buttons close-warning__action__buttons--green",children:"Stay Here"}),Object(b.jsx)(r.b,{to:"/pomodoro/session-manager",className:"close-warning__action__buttons close-warning__action__buttons--red",children:"Go Back"})]})]})})};var ce=function(e){var t=e.currentSession,a=e.setCurrentSession;Object(s.useEffect)((function(){return function(){var e=JSON.parse(localStorage.getItem("sessionsData")||"[]").map((function(e){return t.id===e.id?t:e}));localStorage.setItem("sessionsData",JSON.stringify(e))}}),[]);var c=t.activeTime,n=t.shortBreak,o=t.longBreak,l=t.currentInterval,j=t.intervals,d=Object(s.useState)(!0),m=Object(k.a)(d,2),u=m[0],h=m[1],_=Object(s.useState)(!1),O=Object(k.a)(_,2),g=O[0],x=O[1];return Object(b.jsx)(r.a,{children:Object(b.jsxs)("div",{className:"timerpage",children:[Object(b.jsx)("div",{className:"timerpage__back",children:Object(b.jsx)(r.b,{to:"".concat(!1===g?"/pomodoro/session-manager":"/pomodoro/timer/close-message"),children:Object(b.jsx)(ae.a,{})})}),Object(b.jsx)(i.c,{children:Object(b.jsx)(i.a,{path:"/pomodoro/timer/close-message",children:Object(b.jsx)(se,{})})}),!0===u?Object(b.jsx)(X,{task:t.task}):Object(b.jsxs)("div",{className:"break-time",children:[Object(b.jsx)("h3",{children:"Break Time"}),Object(b.jsx)("h4",{children:"Time for rest"})]}),Object(b.jsx)(ee,{activeTime:c,shortBreak:n,longBreak:o,currentBlock:l,blocks:j,currentSession:t,setCurrentSession:a,isSession:u,setIsSession:h,setTimerIsStarted:x})]})})};var ne=function(e){var t=e.currentSession,a=e.setCurrentSession,c=Object(s.useState)([]),n=Object(k.a)(c,2),o=n[0],l=n[1];return Object(s.useEffect)((function(){l(Object(x.a)(JSON.parse(localStorage.getItem("sessionsData")||"[]")))}),[]),Object(b.jsx)(r.a,{children:Object(b.jsx)("div",{className:"task-manager",children:Object(b.jsxs)("div",{className:"task-section",children:[Object(b.jsxs)("header",{className:"task-section__header",children:[Object(b.jsx)("h2",{className:"heading",children:"Sessions"}),Object(b.jsxs)(r.b,{to:"/pomodoro/session-manager/create-session",className:"add-task",children:[Object(b.jsx)("h4",{children:"New Session"}),Object(b.jsx)(C.a,{className:"add-task__icon"})]})]}),Object(b.jsx)(i.c,{children:Object(b.jsx)(i.a,{path:"/pomodoro/session-manager/create-session",children:Object(b.jsx)(q,{sessionData:o,setSessionData:l})})}),0===o.length?Object(b.jsx)(R,{image:U,text:"Create a session and let's get productive :D",alt:"Rigby Reading"}):o.map((function(e){return Object(b.jsx)(Q,{session:e,sessionData:o,setSessionData:l,currentSession:t,setCurrentSession:a})}))]})})})};var re=function(){var e=Object(s.useState)({}),t=Object(k.a)(e,2),a=t[0],c=t[1];return Object(b.jsx)(r.a,{children:Object(b.jsx)("div",{className:"pomodoro",children:Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/pomodoro/session-manager",children:Object(b.jsx)(ne,{currentSession:a,setCurrentSession:c})}),Object(b.jsx)(i.a,{path:"/pomodoro/timer",children:Object(b.jsx)(ce,{currentSession:a,setCurrentSession:c})})]})})})},ie=a(93);var oe=function(){var e=Object(s.useState)([]),t=Object(k.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)([]),r=Object(k.a)(n,2),i=r[0],o=r[1],l=Object(s.useState)([]),j=Object(k.a)(l,2),d=j[0],m=j[1],u=Object(s.useState)([]),h=Object(k.a)(u,2),_=h[0],O=h[1],g=Object(s.useState)(0),x=Object(k.a)(g,2),p=x[0],v=x[1];return Object(s.useEffect)((function(){c(JSON.parse(localStorage.getItem("tagsData"))),v(1),o(a.map((function(e){return e.name}))),m(a.map((function(e){return e.tagTotalTime/60}))),O(a.map((function(e){return e.colour})))}),[p]),Object(b.jsxs)("div",{className:"tag-distribution",children:[Object(b.jsxs)("h1",{children:[d[0],", ",_[0],", ",i[0]]}),Object(b.jsx)(ie.a,{height:400,width:600,data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Chart.js Pie Chart"}}}})]})};var le=function(){return Object(b.jsxs)("div",{className:"task-section",children:[Object(b.jsx)("header",{className:"task-section__header",children:Object(b.jsx)("h2",{className:"heading",children:"Stats"})}),Object(b.jsx)(oe,{})]})};var je=function(){return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)(O,{}),Object(b.jsx)(i.a,{path:"/",exact:!0,component:_}),Object(b.jsx)(i.a,{path:"/task-manager",component:W}),Object(b.jsx)(i.a,{path:"/session-manager",component:ne}),Object(b.jsx)(i.a,{path:"/pomodoro",component:re}),Object(b.jsx)(i.a,{path:"/stats",component:le})]})};n.a.render(Object(b.jsx)(r.a,{children:Object(b.jsx)(je,{})}),document.getElementById("root"))},99:function(e,t,a){}},[[212,1,2]]]);
//# sourceMappingURL=main.2659ddc6.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports={NavigationItem:"Navigation_NavigationItem__2S46x",Active:"Navigation_Active__HLSgp"}},16:function(e,t,n){e.exports={Project:"Projects_Project__3cCD4",Projects:"Projects_Projects__39rcw"}},18:function(e,t,n){e.exports={App:"App_App__3PTg5",Section:"App_Section__5xbPL"}},23:function(e,t,n){e.exports={Header:"Header_Header__2Xw6n"}},24:function(e,t,n){e.exports={Sniglet:"Variables_Sniglet__10jrq",Roboto:"Variables_Roboto__C5ehZ",OpenSans:"Variables_OpenSans__1lLJK",Dosis:"Variables_Dosis__QLExC"}},27:function(e,t,n){e.exports={ContentBox:"About_ContentBox__Y1mfL"}},30:function(e,t,n){e.exports=n(40)},35:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(22),c=n.n(o),i=(n(35),n(5)),l=n(6),s=n(8),u=n(7),m=n(9),p=n(43),h=n(46),f=n(28),d=n(23),b=n.n(d),v=n(24),g=n.n(v),j=n(41),E=n(44),_=n(45),O=n(14),w=n.n(O),y=function(e){return r.a.createElement(j.a,{className:w.a.NavigationItem},r.a.createElement(_.a,{to:e.path,activeClassName:w.a.Active},r.a.createElement(E.a,null,e.title)))},A=n(42),N=function(e){var t=w.a.Navigation+" justify-content-center";return r.a.createElement(A.a,{className:t},e.navList.map(function(e){return r.a.createElement(y,{path:e.path,title:e.title,key:e.id})}))},x=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("header",{className:b.a.Header},r.a.createElement("h3",null,e.title),r.a.createElement("h1",{className:g.a.Roboto},e.name),r.a.createElement(N,{navList:e.navList})))},k=n(18),C=n.n(k),L=n(27),P=n.n(L),S=function(e){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h3",null,e.title)),r.a.createElement("hr",null),r.a.createElement("div",{className:P.a.ContentBox},e.content.map(function(e){return r.a.createElement("p",null,e)})))},B=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"About Me",content:["I'm Edwin Agbenyega, a software developer","I've been working as a data analyst for the past two years but still feel like a newbie fresh out of grad school and hoping to gain some more experience out there!","I'm looking for a slight career change...eager to learn and be part of some exciting projects out there!"]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(S,{title:this.state.title,content:this.state.content})}}]),t}(a.Component),H=n(16),I=n.n(H),V=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:I.a.Project},r.a.createElement("img",{src:e.src,alt:e.alt}),r.a.createElement("h3",null,e.title)))},R=function(e){return r.a.createElement("div",{className:I.a.Projects},e.projects.map(function(e){return r.a.createElement(V,{img:e.src,alt:e.alt,title:e.title,key:e.id})}))},D=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={projects:[{id:0,img:{src:"http://i.imgur.com/B0gV7Gq.png",alt:"Hangout@229"},title:"Hangout@229"},{id:1,img:{src:"http://i.imgur.com/B0gV7Gq.png",alt:"Lippia Tea"},title:"Lippia Tea"}]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(R,{projects:this.state.projects})}}]),t}(a.Component),q=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"Resume stuff yet to be added!"))},J=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(q,null)}}]),t}(a.Component),T=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"Contact info to be added soon!"))},F=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={phoneNumber:"5055895577"},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(T,null)}}]),t}(a.Component),G=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={navList:[{id:0,path:"/",title:"About",component:B},{id:1,path:"/projects",title:"Projects",component:D},{id:2,path:"/resume",title:"Resume",component:J},{id:3,path:"/contact",title:"Contact",component:F}]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:C.a.App},r.a.createElement(x,{title:"Software Developer",name:"Edwin Agbenyega",navList:this.state.navList}),r.a.createElement("section",{className:C.a.Section},r.a.createElement(h.a,null,this.state.navList.map(function(e){return r.a.createElement(f.a,{exact:!0,path:e.path,component:e.component,key:e.id})})))))}}]),t}(a.Component);n(39),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.a67716cc.chunk.js.map
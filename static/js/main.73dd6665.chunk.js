(this.webpackJsonpmyfirstapp=this.webpackJsonpmyfirstapp||[]).push([[0],{21:function(e){e.exports=JSON.parse('[{"id":0,"title":"task 1","description":"lorean ipsum","done":false},{"id":1,"title":"task 2","description":"lorean ipsum","done":false},{"id":2,"title":"task 3","description":"lorean ipsum","done":false}]')},27:function(e,t,n){e.exports=n(41)},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(20),c=n.n(s),o=(n(32),n(26)),i=n(4),l=n(5),u=n(7),p=n(6),d=n(8),h=n(13),m=n(10),f=(n(33),n(21)),k=(n(34),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"Sc",value:function(){return{fontSize:"20px",color:this.props.task.done?"gray":"black",textDecoration:this.props.task.done?"line-through":"none"}}},{key:"render",value:function(){var e=this.props.task;return r.a.createElement("p",{style:this.Sc()},e.title," -",e.description," -",e.done," -",e.id,r.a.createElement("input",{type:"checkbox",onChange:this.props.checkDone.bind(this,e.id)}),r.a.createElement("button",{style:b,onClick:this.props.deleteTask.bind(this,e.id)},"X"))}}]),t}(a.Component)),b={fontSize:"18px",background:"#ea2027",color:"#fff",border:"none",padding:"10px 15px",borderRadius:"50%",cursor:"pointer"},v=k,E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.props.tasks.map((function(t){return r.a.createElement(v,{task:t,key:t.id,deleteTask:e.props.deleteTask,checkDone:e.props.checkDone})}))}}]),t}(a.Component),O=n(22),j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",descripcion:""},n.onSubmit=function(e){n.props.addTask(n.state.title,n.state.descripcion),e.preventDefault()},n.onChange=function(e){n.setState(Object(O.a)({},e.target.name,e.target.value))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",name:"title",placeholder:"Escribe una tarea",onChange:this.onChange,value:this.state.title}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("textarea",{name:"descripcion",placeholder:"Escribe una descripcion",onChange:this.onChange,value:this.state.descripcion}),r.a.createElement("p",null,r.a.createElement("input",{type:"submit"})))}}]),t}(a.Component),y=n(15),g=n.n(y),S=n(23),x=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[]},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(S.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({posts:n}),console.log(n);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Posts"),this.state.posts.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.body))})))}}]),t}(a.Component),C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={tasks:f},n.addTask=function(e,t){var a={title:e,description:t,id:n.state.tasks.length};n.setState({tasks:[].concat(Object(o.a)(n.state.tasks),[a])})},n.deleteTask=function(e){var t=n.state.tasks.filter((function(t){return t.id!==e}));n.setState({tasks:t})},n.checkDone=function(e){var t=n.state.tasks.map((function(t){return t.id===e&&(t.done=!t.done),t}));n.setState({tasks:t})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,r.a.createElement(h.b,{to:"/"},r.a.createElement("p",null,"INICIO")),r.a.createElement(h.b,{to:"/Posts"},r.a.createElement("p",null,"POSTS")),r.a.createElement(m.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",null,r.a.createElement(j,{addTask:e.addTask}),r.a.createElement(E,{tasks:e.state.tasks,deleteTask:e.deleteTask,checkDone:e.checkDone}))}}),r.a.createElement(m.a,{path:"/posts",component:x})))}}]),t}(a.Component);c.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.73dd6665.chunk.js.map
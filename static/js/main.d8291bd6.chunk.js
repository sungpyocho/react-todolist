(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(18)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(8),i=n.n(r),s=n(1),c=n(2),l=n(3),u=n(5),d=n(4),m=n(6),g=(n(14),function(t){return o.a.createElement("div",{className:"TodoList-body"},t.items.map((function(e,n){return o.a.createElement("div",{className:"TodoList-items",key:n,index:n},o.a.createElement("button",{onClick:function(){return t.remove(n)},className:"TodoList-button"},"\u26cc"),o.a.createElement("span",null,e))})))}),h=(n(15),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).handleInputkeyPress=function(t){var e=t.target.value;"Enter"===t.key&&a.setState({todoList:[].concat(Object(m.a)(a.state.todoList),[e])},(function(){return localStorage.setItem("todoList",JSON.stringify(a.state.todoList))})),t.target.value="",t.preventDefault()},a.handleClickRemove=function(t){window.confirm("Do you really want to delete?")&&a.setState({todoList:[].concat(Object(m.a)(a.state.todoList.slice(0,t)),Object(m.a)(a.state.todoList.slice(t+1)))},(function(){return localStorage.setItem("todoList",JSON.stringify(a.state.todoList))}))},a.state={todoList:[]},a.handleInputkeyPress=a.handleInputkeyPress.bind(Object(l.a)(a)),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({todoList:JSON.parse(localStorage.getItem("todoList"))||[]})}},{key:"render",value:function(){return o.a.createElement("div",{className:"Todo-body"},o.a.createElement("input",{placeholder:"Write things to do",onKeyPress:this.handleInputkeyPress,className:"Todo-input"}),o.a.createElement(g,{items:this.state.todoList,remove:this.handleClickRemove}))}}]),n}(a.Component)),v=(n(16),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={time:new Date},t}return Object(c.a)(n,[{key:"zeroPadding",value:function(t,e){return Array(Math.max(e-String(t).length+1,0)).join(0)+t}},{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({time:new Date})}},{key:"render",value:function(){var t=this.state.time;return o.a.createElement("div",{className:"Clock-body"},o.a.createElement("p",{className:"Clock-date"},t.getFullYear(),"\xa0- ",this.zeroPadding(t.getMonth()+1,2),"\xa0- ",this.zeroPadding(t.getDate(),2),"\xa0 ",["SUN","MON","TUE","WED","THU","FRI","SAT"][t.getDay()]),o.a.createElement("p",{className:"Clock-time"},this.zeroPadding(t.getHours(),2),"\xa0: ",this.zeroPadding(t.getMinutes(),2),"\xa0: ",this.zeroPadding(t.getSeconds(),2)))}}]),n}(a.Component)),b=(n(17),"linear-gradient(\n        to bottom,\n        rgba(20, 20, 20, 0.1) 10%,\n        rgba(20, 20, 20, 0.7) 70%,\n        rgba(20, 20,20, 1)\n     ),"),f="https://source.unsplash.com/random/1920x1080",p=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).setNewBackground=function(t){"Enter"===t.key&&(a.setState({bgImage:b+"url(".concat(f,"?").concat(t.target.value,")")}),t.target.value="",t.preventDefault())},a.state={bgImage:b+"url(".concat(f,")")},a.setNewBackground=a.setNewBackground.bind(Object(l.a)(a)),a}return Object(c.a)(n,[{key:"render",value:function(){var t={backgroundImage:this.state.bgImage};return o.a.createElement("div",{style:t,className:"App-background"},o.a.createElement(v,null),o.a.createElement("input",{placeholder:"Search themes",onKeyPress:this.setNewBackground,className:"Theme-input"}),o.a.createElement(h,null))}}]),n}(a.Component),k=document.getElementById("root");i.a.render(o.a.createElement(p,null),k)}],[[9,1,2]]]);
//# sourceMappingURL=main.d8291bd6.chunk.js.map
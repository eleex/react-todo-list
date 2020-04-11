(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),l=n(7),i=n(10),u=n(6),s=n(1),m=n(2),d=n(4),f=n(3),b=n(5),h=(n(17),function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"Todo List"),o.a.createElement("h2",null,t," more to do, ",n," done"))}),p=(n(18),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).call(this))).state={term:""},e.onSearchChange=function(t){var n=t.target.value;e.setState({term:n}),e.props.onSearchChange(n)},e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",placeholder:"type to search",className:"form-control search-input",onChange:this.onSearchChange,value:this.state.term})}}]),t}(a.Component)),g=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).call(this))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.onFilterChange,a=this.buttons.map((function(e){var a=e.name,r=e.label,c=t===a?"btn btn-info":"btn btn-outline-secondary";return o.a.createElement("button",{key:a,type:"button",className:c,onClick:function(){n(a)}},r)}));return o.a.createElement("div",{className:"btn-group"},a)}}]),t}(a.Component),v=n(11),j=(n(19),function(e){var t=e.label,n=e.important,a=e.done,r=e.onDeleted,c=e.onToggleImportant,l=e.onToggleDone,i="todo-list-item";return a&&(i+=" done"),n&&(i+=" important"),o.a.createElement("span",{className:i},o.a.createElement("span",{className:"todo-list-item-label",onClick:l},t),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:c},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:r},o.a.createElement("i",{className:"fa fa-trash-o"})))}),O=(n(20),function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=t.map((function(e){var t=e.id,c=Object(v.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(j,Object.assign({},c,{onDeleted:function(){n(t)},onToggleImportant:function(){a(t)},onToggleDone:function(){r(t)}})))}));return o.a.createElement("ul",{className:"list-group todo-list"},c)}),E=(n(21),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).call(this))).state={label:""},e.onLabelChange=function(t){e.setState({label:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.addItem(e.state.label),e.setState({label:""})},e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"What needs to be done",onChange:this.onLabelChange,value:this.state.label}),o.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"Add item"))}}]),t}(a.Component)),C=(n(22),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).call(this))).maxId=1,e.state={todoData:[e.createTodoItem("Drink Coffe"),e.createTodoItem("Create React App"),e.createTodoItem("Upload React App on Git")],term:"",filter:"all"},e.deleteItem=function(t){e.setState((function(e){var n=e.todoData,a=n.findIndex((function(e){return e.id===t}));return{todoData:[].concat(Object(u.a)(n.slice(0,a)),Object(u.a)(n.slice(a+1)))}}))},e.addItem=function(t){var n=e.createTodoItem(t);e.setState((function(e){var t=e.todoData;return{todoData:[].concat(Object(u.a)(t),[n])}}))},e.onToggleDone=function(t){e.setState((function(n){var a=n.todoData;return{todoData:e.toggleProperty(a,t,"done")}}))},e.onToggleImportant=function(t){e.setState((function(n){var a=n.todoData;return{todoData:e.toggleProperty(a,t,"important")}}))},e.onSearchChange=function(t){e.setState({term:t})},e.onFilterChange=function(t){e.setState({filter:t})},e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"toggleProperty",value:function(e,t,n){var a=e.findIndex((function(e){return e.id===t})),o=e[a],r=Object(i.a)({},o,Object(l.a)({},n,!o[n]));return[].concat(Object(u.a)(e.slice(0,a)),[r],Object(u.a)(e.slice(a+1)))}},{key:"createTodoItem",value:function(e){return{label:e,important:!1,done:!1,id:this.maxId++}}},{key:"search",value:function(e,t){return""===t?e:e.filter((function(e){return e.label.toLowerCase().includes(t.toLowerCase())}))}},{key:"filter",value:function(e,t){switch(t){case"all":return e;case"active":return e.filter((function(e){return!e.done}));case"done":return e.filter((function(e){return e.done}));default:return e}}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.term,a=e.filter,r=this.filter(this.search(t,n),a),c=t.filter((function(e){return e.done})).length,l=t.length-c;return o.a.createElement("div",{className:"todo-app"},o.a.createElement(h,{toDo:l,done:c}),o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(p,{onSearchChange:this.onSearchChange}),o.a.createElement(g,{filter:a,onFilterChange:this.onFilterChange})),o.a.createElement(O,{todos:r,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement(E,{addItem:this.addItem}))}}]),t}(a.Component));c.a.render(o.a.createElement(C,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.5bbd8988.chunk.js.map
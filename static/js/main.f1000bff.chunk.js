(this.webpackJsonprobox=this.webpackJsonprobox||[]).push([[0],{14:function(e,o,t){"use strict";t.r(o);var n=t(1),r=t(0),a=t.n(r),i=t(8),c=t.n(i),d=t(5),l=t(4),s=function(e,o){return localStorage.setItem(e,JSON.stringify(o))};function u(e){var o="\xe0\xe1\xe2\xe4\xe6\xe3\xe5\u0101\u0103\u0105\xe7\u0107\u010d\u0111\u010f\xe8\xe9\xea\xeb\u0113\u0117\u0119\u011b\u011f\u01f5\u1e27\xee\xef\xed\u012b\u012f\xec\u0142\u1e3f\xf1\u0144\u01f9\u0148\xf4\xf6\xf2\xf3\u0153\xf8\u014d\xf5\u0151\u1e55\u0155\u0159\xdf\u015b\u0161\u015f\u0219\u0165\u021b\xfb\xfc\xf9\xfa\u016b\u01d8\u016f\u0171\u0173\u1e83\u1e8d\xff\xfd\u017e\u017a\u017c\xb7/_,:;",t=new RegExp(o.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(t,(function(e){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(o.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}function b(e){var o=e.onAddTodo,t=Object(r.useState)(""),a=Object(l.a)(t,2),i=a[0],c=a[1];return Object(n.b)("div",{css:{maxWidth:"35rem",margin:"0 auto 2rem auto"}},Object(n.b)("form",{onSubmit:function(e){e.preventDefault(),o(i),c("")},css:{display:"grid",gridTemplateColumns:"1fr",margin:"0 1rem","@media(min-width: 390px)":{gridTemplateColumns:"auto 5rem",margin:0}}},Object(n.b)("input",{name:"todo",type:"text",autoComplete:"off",placeholder:"What needs to be done?",value:i,onChange:function(e){return c(e.target.value)},css:{appearance:"none",border:"none",padding:"0.5rem",fontSize:"1.5rem",background:"transparent",width:"100%",borderBottom:"2px solid transparent",borderRadius:0,color:"#fff",":focus":{outline:"none",borderColor:"#fff"},"::placeholder":{color:"rgba(255,255,255,0.7)"}}}),Object(n.b)("button",{type:"submit",css:{display:"none",appearance:"none",border:"none",padding:"0.5rem",fontSize:"2rem",background:"transparent",color:"#fff",cursor:"pointer","@media(min-width: 390px)":{display:"block"}}},"Add")))}var m=Object(r.forwardRef)((function(e,o){var t=e.checked,r=e.onChange;e.onClick;return Object(n.b)("label",{css:{display:"inline-block",position:"relative",overflow:"hidden",padding:"0.5rem 1.5rem",verticalAlign:"middle"}},Object(n.b)("input",{type:"checkbox",ref:o,checked:t,onChange:r,css:{position:"absolute",left:"-3rem",top:"-3rem",":checked + span:after":{opacity:1}}}),Object(n.b)("span",{css:{position:"relative",display:"inline-block",width:"2rem",height:"2rem",background:"#fff",":after":{content:'""',position:"absolute",left:"0.75rem",top:"0.4rem",width:"0.6rem",height:"1rem",border:"#1e3c72 solid",borderWidth:"0 4px 5px 0",transform:"rotate(45deg)",opacity:0,transition:"opacity 0.3s ease"}}}))}));function p(e){var o=e.todo,t=e.id,a=e.onRemoveTodo,i=e.onToggleTodoDone,c=e.onEditTodo,d=e.isDone,l=Object(r.useCallback)((function(){return a(t)}),[t,a]),s=Object(r.useCallback)((function(){return i(t)}),[t,i]),u=Object(r.useCallback)((function(e){if(13===e.keyCode){e.preventDefault();var o=e.target.value;c(t,o),e.target.blur()}}),[t,c]),b=Object(r.useRef)(null);return Object(n.b)("li",{css:{display:"grid",gridTemplateColumns:"5rem auto 3rem"}},Object(n.b)(m,{ref:b,checked:!!d,onChange:s,onClick:function(){return b.current.click()}}),Object(n.b)("input",{type:"text",defaultValue:o,onKeyDown:u,css:{appearance:"none",border:"none",padding:"0.5rem",fontSize:"1.5rem",background:"transparent",width:"100%",color:"#fff",textDecoration:d?"line-through":"none",borderBottom:"2px solid transparent",borderRadius:0,":focus":{outline:"none",borderColor:"#fff"}}}),Object(n.b)("button",{onClick:l,css:{appearance:"none",border:"none",padding:"0.5rem",fontSize:"1.5rem",background:"transparent",cursor:"pointer"}},Object(n.b)("span",{role:"img","aria-labelledby":"trash"}),"\u274c"))}function g(e){var o=e.todoItems,t=e.onRemoveTodo,r=e.onToggleTodoDone,a=e.onEditTodo,i=e.setCustomError;return Object(n.b)("ul",{css:{listStyle:"none",padding:0,margin:"0 auto",marginTop:"1rem","& li:nth-child(odd)":{background:"rgba(230,230,230,0.1)"}}},o&&Array.isArray(o)&&o.length>0&&o.map((function(e,o){var c=e.id,d=e.todo,l=e.isDone;return Object(n.b)(p,{key:u("".concat(c,"-").concat(d)),id:c,todo:d,onRemoveTodo:t,onToggleTodoDone:r,onEditTodo:a,isDone:l,setCustomError:i})})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(n.b)(a.a.StrictMode,null,Object(n.b)(n.a,{styles:{body:{background:"linear-gradient(45deg, rgba(219,219,219,1) 0%, rgba(226,226,226,1) 100%);",fontFamily:'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',lineHeight:1.2,margin:0,padding:0},"*, *:after, *:before":{boxSizing:"border-box"}}}),Object(n.b)((function(){var e=Object(r.useState)(function(e){var o=localStorage.getItem(e),t=null;try{var n=JSON.parse(o);Array.isArray(n)&&(t=n)}catch(r){t=[]}return t}("todo")||[]),o=Object(l.a)(e,2),t=o[0],a=o[1],i=Object(r.useCallback)((function(e){var o=0===t.length?1:t[t.length-1].id+1,n=Object(d.a)(t);n.push({id:o,todo:e}),a(n),s("todo",n)}),[t]),c=Object(r.useCallback)((function(e){var o=t.filter((function(o){return o.id!==e}));a(o),s("todo",o)}),[t]),u=Object(r.useCallback)((function(e){var o=t.find((function(o){return o.id===e}));o.isDone=!o.isDone,a(Object(d.a)(t)),s("todo",t)}),[t]),m=Object(r.useCallback)((function(e,o){t.find((function(o){return o.id===e})).todo=o,a(Object(d.a)(t)),s("todo",t)}),[t]);return Object(n.b)("div",{css:{boxShadow:"0 25px 50px -12px rgba(0,0,0,.5)",maxWidth:"37.5rem",background:"linear-gradient(45deg, #1e3c72 0%, #2a5298 100%);",margin:"3rem auto",padding:"1rem 0",color:"#fff","@media(min-width: 390px)":{padding:"1rem"}}},Object(n.b)("h1",{css:{fontSize:"2.5rem",fontWeight:500,textAlign:"center",margin:"1rem 1rem 1.5rem 1rem",":after":{content:'""',display:"block",width:"80%",height:"2px",background:"#fff",margin:"1rem auto"}}},"Rox's To-do List"),Object(n.b)(b,{onAddTodo:i}),Object(n.b)(g,{todoItems:t,onRemoveTodo:c,onToggleTodoDone:u,onEditTodo:m}))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,o,t){e.exports=t(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.f1000bff.chunk.js.map
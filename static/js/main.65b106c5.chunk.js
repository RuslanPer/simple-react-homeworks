(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,function(e,a,t){e.exports={affairsWrap:"Affairs_affairsWrap__36q_6",buttons:"Affairs_buttons__1ygQ0",affairs:"Affairs_affairs__1IfyN",affairBtnDelete:"Affairs_affairBtnDelete__2azXD",high:"Affairs_high__3Dq8O",middle:"Affairs_middle__3e5Hi",low:"Affairs_low__3ZWUc"}},function(e,a,t){e.exports={linkContainer:"Header_linkContainer__1Ous6",menu:"Header_menu__15p9E",link:"Header_link__3Vzy9",activeLink:"Header_activeLink__io3RA",btn:"Header_btn__8qt6I"}},,function(e,a,t){e.exports={messageWrap:"Message_messageWrap__3NCmu",avatar:"Message_avatar__3owch",message:"Message_message__2z4nj",messageName:"Message_messageName__34EYq",messageText:"Message_messageText__2Sr9g",messageTime:"Message_messageTime__3464R"}},function(e,a,t){e.exports={inputWrap:"Greeting_inputWrap__3vdRr",input:"Greeting_input__3rFKD",error:"Greeting_error__1S9BV",errorText:"Greeting_errorText__2-eMW",buttonAdd:"Greeting_buttonAdd__1fBUk"}},,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2ARgI",errorInput:"SuperInputText_errorInput__QhuUL",error:"SuperInputText_error__2HL5F"}},function(e,a,t){e.exports={default:"SuperButton_default__3WTR7",red:"SuperButton_red__2x0Dm"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__1whcB",spanClassName:"SuperCheckbox_spanClassName__1Y3pc",checkboxLabel:"SuperCheckbox_checkboxLabel__pBak2"}},function(e,a,t){e.exports={blue:"HW4_blue__1q6hG",column:"HW4_column__AqssP",testSpanError:"HW4_testSpanError__hzfHX"}},,,function(e,a,t){e.exports={App:"App_App__tMl9Y"}},function(e,a,t){e.exports=t.p+"static/media/error.6617f447.gif"},,function(e,a,t){e.exports=t(29)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),i=(t(26),t(27),t(28),t(18)),s=t.n(i),o=t(6),m=t(5),u=t.n(m);var f=function(){return r.a.createElement("div",{className:u.a.linkContainer},r.a.createElement("div",{className:u.a.menu},r.a.createElement("div",{className:u.a.link},r.a.createElement(o.b,{to:"/pre-junior",className:function(e){return e.isActive?u.a.activeLink:void 0}},"pre-junior")),r.a.createElement("div",{className:u.a.link},r.a.createElement(o.b,{to:"/junior",className:function(e){return e.isActive?u.a.activeLink:void 0}},"junior")),r.a.createElement("div",{className:u.a.link},r.a.createElement(o.b,{to:"/junior+",className:function(e){return e.isActive?u.a.activeLink:void 0}},"junior+")),r.a.createElement("button",{className:u.a.btn})))},p=t(1),d=t(19),_=t.n(d);var E=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:_.a,alt:"error",style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"30px auto"}}),r.a.createElement("div",{style:{textAlign:"center",marginTop:"20px",fontSize:"20px",color:"black",fontWeight:"500"}},"Page doesn't exist"),r.a.createElement("div",{style:{textAlign:"center",marginTop:"20px",fontSize:"20px",color:"black",fontWeight:"500"}},"Back to main page"))},h=t(7),g=t.n(h);var v=function(e){return r.a.createElement("div",{className:g.a.messageWrap},r.a.createElement("div",{className:g.a.avatar},r.a.createElement("img",{src:e.avatar,alt:"avatar"})),r.a.createElement("div",{className:g.a.message},r.a.createElement("h3",{className:g.a.messageName},e.name),r.a.createElement("p",{className:g.a.messageText},e.message),r.a.createElement("span",{className:g.a.messageTime},e.time)))},b="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",k="Some Name",N="some text",x="22:00";var C=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement("div",null,r.a.createElement(v,{avatar:b,name:k,message:N,time:x})),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=t(2),y=t(4),w=t.n(y);var A=function(e){var a="high"===e.affair.priority?w.a.high:"middle"===e.affair.priority?w.a.middle:"low"===e.affair.priority?w.a.low:"";return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:w.a.affairName},e.affair.name),r.a.createElement("span",{className:a},"[",e.affair.priority,"]"),r.a.createElement("button",{className:w.a.affairBtnDelete,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var S=function(e){var a=e.data.map((function(a){return r.a.createElement(A,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:w.a.affairsWrap},r.a.createElement("div",{className:w.a.affairs},a),r.a.createElement("div",{className:w.a.buttons},r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low")))},O=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var T=function(){var e=Object(n.useState)(O),a=Object(j.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),i=Object(j.a)(c,2),s=i[0],o=i[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(S,{data:m,setFilter:o,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},W=t(20),H=t(8),I=t.n(H),B=function(e){var a=e.name,t=e.onKeyDownHandler,n=e.setNameCallback,l=e.addUser,c=e.error,i=e.totalUsers,s=""===c?I.a.input:I.a.input+" "+I.a.error;return r.a.createElement("div",{className:I.a.inputWrap},r.a.createElement("input",{value:a,onChange:n,onKeyDown:t,className:s}),r.a.createElement("button",{onClick:l,disabled:!a,className:I.a.buttonAdd},"add"),r.a.createElement("span",null,i),r.a.createElement("span",{className:I.a.errorText},c))},D=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(j.a)(l,2),i=c[0],s=c[1],o=Object(n.useState)(""),m=Object(j.a)(o,2),u=m[0],f=m[1],p=function(){t(i),s(""),alert("Hello, ".concat(i,"!"))},d=a.length;return r.a.createElement(B,{name:i,setNameCallback:function(e){e.currentTarget.value.trim()?(s(e.currentTarget.value.trim()),f("")):(s(""),f("name is require!"))},addUser:p,error:u,totalUsers:d,onKeyDownHandler:function(e){"Enter"===e.key&&i&&p()}})},F=t(31);var L=function(){var e=Object(n.useState)([]),a=Object(j.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(D,{users:t,addUserCallback:function(e){l([{_id:Object(F.a)(),name:e}].concat(Object(W.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},M=t(10),U=t(12),q=t.n(U),G=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],K=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,i=e.className,s=e.spanClassName,o=Object(M.a)(e,G),m="".concat(q.a.error," ").concat(s||""),u="".concat(c?q.a.superInput+" "+q.a.errorInput:q.a.superInput," ").concat(i);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyDown:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:u},o)),c&&r.a.createElement("span",{className:m},c))},z=t(15),R=t.n(z),J=t(13),P=t.n(J),X=["red","className"],Y=function(e){var a=e.red,t=e.className,n=Object(M.a)(e,X),l="".concat(a?P.a.red+" "+P.a.default:P.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},Q=t(14),V=t.n(Q),Z=["type","onChange","onChangeChecked","className","spanClassName","children"],$=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(M.a)(e,Z),i="".concat(V.a.checkbox," ").concat(n||"");return r.a.createElement("label",{className:V.a.checkboxLabel},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:i},c)),l&&r.a.createElement("span",{className:V.a.spanClassName},l))};var ee=function(){var e=Object(n.useState)(""),a=Object(j.a)(e,2),t=a[0],l=a[1],c=t?"":"error",i=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),o=Object(j.a)(s,2),m=o[0],u=o[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:R.a.column},r.a.createElement(K,{value:t,onChangeText:l,onEnter:i,error:c}),r.a.createElement(K,{className:R.a.blue}),r.a.createElement(Y,null,"default"),r.a.createElement(Y,{red:!0,onClick:i},"delete"),r.a.createElement(Y,{disabled:!0},"disabled"),r.a.createElement($,{checked:m,onChangeChecked:u},"some text"),r.a.createElement($,{checked:m,onChange:function(e){return u(e.currentTarget.checked)}})),r.a.createElement("hr",null))};var ae=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(T,null),r.a.createElement(L,null),r.a.createElement(ee,null))};var te=function(){return r.a.createElement("div",null,"Junior+")};var ne=function(){return r.a.createElement("div",null,"Junior")},re="/pre-junior",le="/junior",ce="/junior+";var ie=function(){return r.a.createElement("div",null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",element:r.a.createElement(p.a,{to:re})}),r.a.createElement(p.b,{path:re,element:r.a.createElement(ae,null)}),r.a.createElement(p.b,{path:le,element:r.a.createElement(ne,null)}),r.a.createElement(p.b,{path:ce,element:r.a.createElement(te,null)}),r.a.createElement(p.b,{path:"/*",element:r.a.createElement(E,null)})))};var se=function(){return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(f,null),r.a.createElement(ie,null)))};var oe=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.65b106c5.chunk.js.map
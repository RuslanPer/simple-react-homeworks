(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,function(e,a,t){e.exports={affairsWrap:"Affairs_affairsWrap__36q_6",buttons:"Affairs_buttons__1ygQ0",affairs:"Affairs_affairs__1IfyN",affairBtnDelete:"Affairs_affairBtnDelete__2azXD",high:"Affairs_high__3Dq8O",middle:"Affairs_middle__3e5Hi",low:"Affairs_low__3ZWUc"}},function(e,a,t){e.exports={linkContainer:"Header_linkContainer__1Ous6",menu:"Header_menu__15p9E",link:"Header_link__3Vzy9",activeLink:"Header_activeLink__io3RA",btn:"Header_btn__8qt6I"}},,,function(e,a,t){e.exports={messageWrap:"Message_messageWrap__3NCmu",avatar:"Message_avatar__3owch",message:"Message_message__2z4nj",messageName:"Message_messageName__34EYq",messageText:"Message_messageText__2Sr9g",messageTime:"Message_messageTime__3464R"}},function(e,a,t){e.exports={inputWrap:"Greeting_inputWrap__3vdRr",input:"Greeting_input__3rFKD",error:"Greeting_error__1S9BV",errorText:"Greeting_errorText__2-eMW",buttonAdd:"Greeting_buttonAdd__1fBUk"}},,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2ARgI",errorInput:"SuperInputText_errorInput__QhuUL",error:"SuperInputText_error__2HL5F"}},function(e,a,t){e.exports={default:"SuperButton_default__3WTR7",red:"SuperButton_red__2x0Dm"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__1whcB",spanClassName:"SuperCheckbox_spanClassName__1Y3pc",checkboxLabel:"SuperCheckbox_checkboxLabel__pBak2"}},function(e,a,t){e.exports={blue:"HW4_blue__1q6hG",column:"HW4_column__AqssP",testSpanError:"HW4_testSpanError__hzfHX"}},function(e,a,t){e.exports={buttons:"HW6_buttons__DBXdZ",superInput:"HW6_superInput__VaFv1"}},function(e,a,t){e.exports={textWrap:"SuperEditableSpan_textWrap__EGUpk",text:"SuperEditableSpan_text__3ZMLC"}},,,function(e,a,t){e.exports={App:"App_App__tMl9Y"}},function(e,a,t){e.exports=t.p+"static/media/error.6617f447.gif"},function(e,a,t){e.exports=t.p+"static/media/pencil.c1d51b0c.gif"},,function(e,a,t){e.exports=t(32)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),i=(t(29),t(30),t(31),t(20)),o=t.n(i),s=t(7),u=t(5),m=t.n(u);var p=function(){return r.a.createElement("div",{className:m.a.linkContainer},r.a.createElement("div",{className:m.a.menu},r.a.createElement("div",{className:m.a.link},r.a.createElement(s.b,{to:"/pre-junior",className:function(e){return e.isActive?m.a.activeLink:void 0}},"pre-junior")),r.a.createElement("div",{className:m.a.link},r.a.createElement(s.b,{to:"/junior",className:function(e){return e.isActive?m.a.activeLink:void 0}},"junior")),r.a.createElement("div",{className:m.a.link},r.a.createElement(s.b,{to:"/junior+",className:function(e){return e.isActive?m.a.activeLink:void 0}},"junior+")),r.a.createElement("button",{className:m.a.btn})))},f=t(1),d=t(21),E=t.n(d);var _=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:E.a,alt:"error",style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"30px auto"}}),r.a.createElement("div",{style:{textAlign:"center",marginTop:"20px",fontSize:"20px",color:"black",fontWeight:"500"}},"Page doesn't exist"),r.a.createElement("div",{style:{textAlign:"center",marginTop:"20px",fontSize:"20px",color:"black",fontWeight:"500"}},"Back to main page"))},h=t(8),b=t.n(h);var v=function(e){return r.a.createElement("div",{className:b.a.messageWrap},r.a.createElement("div",{className:b.a.avatar},r.a.createElement("img",{src:e.avatar,alt:"avatar"})),r.a.createElement("div",{className:b.a.message},r.a.createElement("h3",{className:b.a.messageName},e.name),r.a.createElement("p",{className:b.a.messageText},e.message),r.a.createElement("span",{className:b.a.messageTime},e.time)))},g="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",k="Some Name",N="some text",x="22:00";var C=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement("div",null,r.a.createElement(v,{avatar:g,name:k,message:N,time:x})),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=t(2),y=t(4),S=t.n(y);var O=function(e){var a="high"===e.affair.priority?S.a.high:"middle"===e.affair.priority?S.a.middle:"low"===e.affair.priority?S.a.low:"";return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:S.a.affairName},e.affair.name),r.a.createElement("span",{className:a},"[",e.affair.priority,"]"),r.a.createElement("button",{className:S.a.affairBtnDelete,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var w=function(e){var a=e.data.map((function(a){return r.a.createElement(O,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:S.a.affairsWrap},r.a.createElement("div",{className:S.a.affairs},a),r.a.createElement("div",{className:S.a.buttons},r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low")))},A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var W=function(){var e=Object(n.useState)(A),a=Object(j.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),i=Object(j.a)(c,2),o=i[0],s=i[1],u=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(w,{data:u,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=t(23),I=t(9),H=t.n(I),B=function(e){var a=e.name,t=e.onKeyDownHandler,n=e.setNameCallback,l=e.addUser,c=e.error,i=e.totalUsers,o=""===c?H.a.input:H.a.input+" "+H.a.error;return r.a.createElement("div",{className:H.a.inputWrap},r.a.createElement("input",{value:a,onChange:n,onKeyDown:t,className:o}),r.a.createElement("button",{onClick:l,disabled:!a,className:H.a.buttonAdd},"add"),r.a.createElement("span",null,i),r.a.createElement("span",{className:H.a.errorText},c))},F=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(j.a)(l,2),i=c[0],o=c[1],s=Object(n.useState)(""),u=Object(j.a)(s,2),m=u[0],p=u[1],f=function(){t(i),o(""),alert("Hello, ".concat(i,"!"))},d=a.length;return r.a.createElement(B,{name:i,setNameCallback:function(e){e.currentTarget.value.trim()?(o(e.currentTarget.value.trim()),p("")):(o(""),p("name is require!"))},addUser:f,error:m,totalUsers:d,onKeyDownHandler:function(e){"Enter"===e.key&&i&&f()}})},D=t(34);var L=function(){var e=Object(n.useState)([]),a=Object(j.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(F,{users:t,addUserCallback:function(e){l([{_id:Object(D.a)(),name:e}].concat(Object(T.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},M=t(6),U=t(12),q=t.n(U),G=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],P=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,i=e.className,o=e.spanClassName,s=Object(M.a)(e,G),u="".concat(q.a.error," ").concat(o||""),m="".concat(c?q.a.superInput+" "+q.a.errorInput:q.a.superInput," ").concat(i);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyDown:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},s)),c&&r.a.createElement("span",{className:u},c))},J=t(15),K=t.n(J),z=t(13),R=t.n(z),X=["red","className"],Y=function(e){var a=e.red,t=e.className,n=Object(M.a)(e,X),l="".concat(a?R.a.red+" "+R.a.default:R.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},Z=t(14),V=t.n(Z),Q=["type","onChange","onChangeChecked","className","spanClassName","children"],$=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(M.a)(e,Q),i="".concat(V.a.checkbox," ").concat(n||"");return r.a.createElement("label",{className:V.a.checkboxLabel},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:i},c)),l&&r.a.createElement("span",{className:V.a.spanClassName},l))};var ee=function(){var e=Object(n.useState)(""),a=Object(j.a)(e,2),t=a[0],l=a[1],c=t?"":"error",i=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),s=Object(j.a)(o,2),u=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:K.a.column},r.a.createElement(P,{value:t,onChangeText:l,onEnter:i,error:c}),r.a.createElement(P,{className:K.a.blue}),r.a.createElement(Y,null,"default"),r.a.createElement(Y,{red:!0,onClick:i},"delete"),r.a.createElement(Y,{disabled:!0},"disabled"),r.a.createElement($,{checked:u,onChangeChecked:m},"some text"),r.a.createElement($,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null))},ae=t(16),te=t.n(ae),ne=t(17),re=t.n(ne),le=t(22),ce=t.n(le),ie=["autoFocus","onBlur","onEnter","spanProps"],oe=["children","onDoubleClick","className"],se=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(M.a)(e,ie),i=Object(n.useState)(!1),o=Object(j.a)(i,2),s=o[0],u=o[1],m=l||{},p=m.children,f=m.onDoubleClick,d=m.className,E=Object(M.a)(m,oe),_="".concat(re.a.text," ").concat(d);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(P,Object.assign({autoFocus:!0,onBlur:function(e){u(!1),a&&a(e)},onEnter:function(){u(!1),t&&t()}},c)):r.a.createElement("div",{className:re.a.textWrap},r.a.createElement("img",{src:ce.a,alt:"pencil"}),r.a.createElement("span",Object.assign({onDoubleClick:function(e){u(!0),f&&f(e)},className:_},E),p||c.value)))};function ue(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function me(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}ue("test",{x:"A",y:1});me("test",{x:"",y:0});var pe=function(){var e=Object(n.useState)(""),a=Object(j.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",{className:te.a.superInput},r.a.createElement(se,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement("div",{className:te.a.buttons},r.a.createElement(Y,{onClick:function(){ue("editable-span-value",t)}},"save"),r.a.createElement(Y,{onClick:function(){l(me("editable-span-value",t))}},"restore")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var fe=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(W,null),r.a.createElement(L,null),r.a.createElement(ee,null),r.a.createElement(pe,null))};var de=function(){return r.a.createElement("div",null,"Junior+")};var Ee=function(){return r.a.createElement("div",null,"Junior")},_e="/pre-junior",he="/junior",be="/junior+";var ve=function(){return r.a.createElement("div",null,r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/",element:r.a.createElement(f.a,{to:_e})}),r.a.createElement(f.b,{path:_e,element:r.a.createElement(fe,null)}),r.a.createElement(f.b,{path:he,element:r.a.createElement(Ee,null)}),r.a.createElement(f.b,{path:be,element:r.a.createElement(de,null)}),r.a.createElement(f.b,{path:"/*",element:r.a.createElement(_,null)})))};var ge=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(p,null),r.a.createElement(ve,null)))};var ke=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ge,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.fde9a57a.chunk.js.map
(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={affairsWrap:"Affairs_affairsWrap__36q_6",buttons:"Affairs_buttons__1ygQ0",affairs:"Affairs_affairs__1IfyN",affairBtnDelete:"Affairs_affairBtnDelete__2azXD",high:"Affairs_high__3Dq8O",middle:"Affairs_middle__3e5Hi",low:"Affairs_low__3ZWUc"}},function(e,t,a){e.exports={linkContainer:"Header_linkContainer__1Ous6",menu:"Header_menu__15p9E",link:"Header_link__3Vzy9",activeLink:"Header_activeLink__io3RA",btn:"Header_btn__8qt6I"}},,function(e,t,a){e.exports={messageWrap:"Message_messageWrap__3NCmu",avatar:"Message_avatar__3owch",message:"Message_message__2z4nj",messageName:"Message_messageName__34EYq",messageText:"Message_messageText__2Sr9g",messageTime:"Message_messageTime__3464R"}},function(e,t,a){e.exports={inputWrap:"Greeting_inputWrap__3vdRr",input:"Greeting_input__3rFKD",error:"Greeting_error__1S9BV",errorText:"Greeting_errorText__2-eMW",buttonAdd:"Greeting_buttonAdd__1fBUk"}},,,,,function(e,t,a){e.exports={superInput:"SuperInputText_superInput__2ARgI",errorInput:"SuperInputText_errorInput__QhuUL",error:"SuperInputText_error__2HL5F"}},,,function(e,t,a){e.exports={default:"SuperButton_default__3WTR7",red:"SuperButton_red__2x0Dm"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__1whcB",spanClassName:"SuperCheckbox_spanClassName__1Y3pc",checkboxLabel:"SuperCheckbox_checkboxLabel__pBak2"}},function(e,t,a){e.exports={users:"HW8_users__1rpUj",user:"HW8_user__3GrfE",buttons:"HW8_buttons__3XSl0"}},function(e,t,a){e.exports={buttons:"HW9_buttons__2VnV4",date:"HW9_date__3gyUH",time:"HW9_time__3RhRo"}},,function(e,t,a){e.exports={blue:"HW4_blue__1q6hG",column:"HW4_column__AqssP",testSpanError:"HW4_testSpanError__hzfHX"}},function(e,t,a){e.exports={buttons:"HW6_buttons__DBXdZ",superInput:"HW6_superInput__VaFv1"}},function(e,t,a){e.exports={textWrap:"SuperEditableSpan_textWrap__EGUpk",text:"SuperEditableSpan_text__3ZMLC"}},,function(e,t,a){e.exports={radioButtons:"SuperRadio_radioButtons__1v4i5",switch:"SuperRadio_switch__2WEwq"}},,,function(e,t,a){e.exports={App:"App_App__tMl9Y"}},function(e,t,a){e.exports=a.p+"static/media/error.6617f447.gif"},function(e,t,a){e.exports=a.p+"static/media/pencil.c1d51b0c.gif"},,,function(e,t,a){e.exports={select:"SuperSelect_select__2oIqS","select--multiple":"SuperSelect_select--multiple__22n2W",focus:"SuperSelect_focus__36fz8"}},function(e,t,a){e.exports=a(48)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),i=(a(40),a(41),a(42),a(29)),o=a.n(i),s=a(7),u=a(6),m=a.n(u);var d=function(){return r.a.createElement("div",{className:m.a.linkContainer},r.a.createElement("div",{className:m.a.menu},r.a.createElement("div",{className:m.a.link},r.a.createElement(s.b,{to:"/pre-junior",className:function(e){return e.isActive?m.a.activeLink:void 0}},"pre-junior")),r.a.createElement("div",{className:m.a.link},r.a.createElement(s.b,{to:"/junior",className:function(e){return e.isActive?m.a.activeLink:void 0}},"junior")),r.a.createElement("div",{className:m.a.link},r.a.createElement(s.b,{to:"/junior+",className:function(e){return e.isActive?m.a.activeLink:void 0}},"junior+")),r.a.createElement("button",{className:m.a.btn})))},p=a(1),f=a(30),E=a.n(f);var g=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:E.a,alt:"error",style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"30px auto"}}),r.a.createElement("div",{style:{textAlign:"center",marginTop:"20px",fontSize:"20px",color:"black",fontWeight:"500"}},"Page doesn't exist"),r.a.createElement("div",{style:{textAlign:"center",marginTop:"20px",fontSize:"20px",color:"black",fontWeight:"500"}},"Back to main page"))},h=a(8),_=a.n(h);var v=function(e){return r.a.createElement("div",{className:_.a.messageWrap},r.a.createElement("div",{className:_.a.avatar},r.a.createElement("img",{src:e.avatar,alt:"avatar"})),r.a.createElement("div",{className:_.a.message},r.a.createElement("h3",{className:_.a.messageName},e.name),r.a.createElement("p",{className:_.a.messageText},e.message),r.a.createElement("span",{className:_.a.messageTime},e.time)))},b="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",y="Some Name",k="some text",x="22:00";var N=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement("div",null,r.a.createElement(v,{avatar:b,name:y,message:k,time:x})),r.a.createElement("hr",null))},C=a(2),w=a(5),O=a.n(w);var j=function(e){var t="high"===e.affair.priority?O.a.high:"middle"===e.affair.priority?O.a.middle:"low"===e.affair.priority?O.a.low:"";return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:O.a.affairName},e.affair.name),r.a.createElement("span",{className:t},"[",e.affair.priority,"]"),r.a.createElement("button",{className:O.a.affairBtnDelete,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var S=function(e){var t=e.data.map((function(t){return r.a.createElement(j,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:O.a.affairsWrap},r.a.createElement("div",{className:O.a.affairs},t),r.a.createElement("div",{className:O.a.buttons},r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low")))},T=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var W=function(){var e=Object(n.useState)(T),t=Object(C.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("all"),i=Object(C.a)(l,2),o=i[0],s=i[1],u=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(S,{data:u,setFilter:s,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null))},A=a(16),H=a(9),I=a.n(H),L=function(e){var t=e.name,a=e.onKeyDownHandler,n=e.setNameCallback,c=e.addUser,l=e.error,i=e.totalUsers,o=""===l?I.a.input:I.a.input+" "+I.a.error;return r.a.createElement("div",{className:I.a.inputWrap},r.a.createElement("input",{value:t,onChange:n,onKeyDown:a,className:o}),r.a.createElement("button",{onClick:c,disabled:!t,className:I.a.buttonAdd},"add"),r.a.createElement("span",null,i),r.a.createElement("span",{className:I.a.errorText},l))},B=function(e){var t=e.users,a=e.addUserCallback,c=Object(n.useState)(""),l=Object(C.a)(c,2),i=l[0],o=l[1],s=Object(n.useState)(""),u=Object(C.a)(s,2),m=u[0],d=u[1],p=function(){a(i),o(""),alert("Hello, ".concat(i,"!"))},f=t.length;return r.a.createElement(L,{name:i,setNameCallback:function(e){e.currentTarget.value.trim()?(o(e.currentTarget.value.trim()),d("")):(o(""),d("name is require!"))},addUser:p,error:m,totalUsers:f,onKeyDownHandler:function(e){"Enter"===e.key&&i&&p()}})},D=a(50);var F=function(){var e=Object(n.useState)([]),t=Object(C.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(B,{users:a,addUserCallback:function(e){c([{_id:Object(D.a)(),name:e}].concat(Object(A.a)(a)))}}),r.a.createElement("hr",null))},M=a(4),R=a(14),U=a.n(R),G=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],q=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,c=e.onEnter,l=e.error,i=e.className,o=e.spanClassName,s=Object(M.a)(e,G),u="".concat(U.a.error," ").concat(o||""),m="".concat(l?U.a.superInput+" "+U.a.errorInput:U.a.superInput," ").concat(i);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyDown:function(e){n&&n(e),c&&"Enter"===e.key&&c()},className:m},s)),l&&r.a.createElement("span",{className:u},l))},z=a(22),P=a.n(z),K=a(17),J=a.n(K),X=["red","className"],V=function(e){var t=e.red,a=e.className,n=Object(M.a)(e,X),c="".concat(t?J.a.red+" "+J.a.default:J.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:c},n))},Y=a(18),Z=a.n(Y),Q=["type","onChange","onChangeChecked","className","spanClassName","children"],$=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,c=(e.spanClassName,e.children),l=Object(M.a)(e,Q),i="".concat(Z.a.checkbox," ").concat(n||"");return r.a.createElement("label",{className:Z.a.checkboxLabel},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:i},l)),c&&r.a.createElement("span",{className:Z.a.spanClassName},c))};var ee=function(){var e=Object(n.useState)(""),t=Object(C.a)(e,2),a=t[0],c=t[1],l=a?"":"error",i=function(){l?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},o=Object(n.useState)(!1),s=Object(C.a)(o,2),u=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:P.a.column},r.a.createElement(q,{value:a,onChangeText:c,onEnter:i,error:l}),r.a.createElement(q,{className:P.a.blue}),r.a.createElement(V,null,"default"),r.a.createElement(V,{red:!0,onClick:i},"delete"),r.a.createElement(V,{disabled:!0},"disabled"),r.a.createElement($,{checked:u,onChangeChecked:m},"some text"),r.a.createElement($,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null))},te=a(23),ae=a.n(te),ne=a(24),re=a.n(ne),ce=a(31),le=a.n(ce),ie=["autoFocus","onBlur","onEnter","spanProps"],oe=["children","onDoubleClick","className"],se=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,c=e.spanProps,l=Object(M.a)(e,ie),i=Object(n.useState)(!1),o=Object(C.a)(i,2),s=o[0],u=o[1],m=c||{},d=m.children,p=m.onDoubleClick,f=m.className,E=Object(M.a)(m,oe),g="".concat(re.a.text," ").concat(f);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(q,Object.assign({autoFocus:!0,onBlur:function(e){u(!1),t&&t(e)},onEnter:function(){u(!1),a&&a()}},l)):r.a.createElement("div",{className:re.a.textWrap},r.a.createElement("img",{src:le.a,alt:"pencil"}),r.a.createElement("span",Object.assign({onDoubleClick:function(e){u(!0),p&&p(e)},className:g},E),d||l.value)))};function ue(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function me(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}ue("test",{x:"A",y:1});me("test",{x:"",y:0});var de=function(){var e=Object(n.useState)(""),t=Object(C.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",{className:ae.a.superInput},r.a.createElement(se,{value:a,onChangeText:c,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement("div",{className:ae.a.buttons},r.a.createElement(V,{onClick:function(){ue("editable-span-value",a)}},"save"),r.a.createElement(V,{onClick:function(){c(me("editable-span-value",a))}},"restore")),r.a.createElement("hr",null))};var pe=function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(W,null),r.a.createElement(F,null),r.a.createElement(ee,null),r.a.createElement(de,null))};var fe=function(){return r.a.createElement("div",null,"Junior+")},Ee=a(11),ge=a(12),he={isLoading:!1},_e=function(e){return{type:"LOADING",isLoading:e}},ve=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100px",height:"100px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},r.a.createElement("g",{transform:"rotate(0 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#cccccc"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(30 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#cccccc"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(60 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#cccccc"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(90 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#cccccc"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(120 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#cccccc"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(150 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#cccccc"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(180 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#cccccc"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(210 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#cccccc"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(240 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#cccccc"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(270 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#cccccc"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(300 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#cccccc"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(330 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#cccccc"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}))))};var be=function(){var e=Object(Ee.c)((function(e){return e.loading.isLoading})),t=Object(Ee.b)();return r.a.createElement("div",null,"homeworks 10",e?r.a.createElement("div",null,r.a.createElement(ve,null)):r.a.createElement("div",null,r.a.createElement(V,{onClick:function(){t(_e(!0)),setTimeout((function(){return t(_e(!1))}),2e3)}},"set loading...")))},ye=a(34),ke=a.n(ye),xe=["options","onChange","onChangeOption"],Ne=function(e){var t=e.options,a=e.onChange,n=e.onChangeOption,c=Object(M.a)(e,xe),l=t?t.map((function(e,t){return r.a.createElement("option",{key:e+"-"+t,value:e},e)})):[];return r.a.createElement("div",{className:ke.a.select},r.a.createElement("select",Object.assign({onChange:function(e){a&&a(e),n&&n(e.currentTarget.value)}},c),l))},Ce=a(26),we=a.n(Ce),Oe=["type","name","options","value","onChange","onChangeOption"],je=function(e){e.type;var t=e.name,a=e.options,n=e.value,c=e.onChange,l=e.onChangeOption,i=Object(M.a)(e,Oe),o=function(e){c&&c(e),l&&l(e.currentTarget.value)},s=a?a.map((function(e,a){return r.a.createElement("label",{key:t+"-"+a,className:we.a.labelRadio},r.a.createElement("input",Object.assign({type:"radio",name:t,checked:n===e,value:e,onChange:o},i)),e)})):[];return r.a.createElement("div",{className:we.a.radioButtons},s)},Se=["x","y","z"];var Te=function(){var e=Object(n.useState)(Se[0]),t=Object(C.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(Ne,{options:Se,value:a,onChangeOption:c})),r.a.createElement("div",null,r.a.createElement(je,{name:"radio",options:Se,value:a,onChangeOption:c})),r.a.createElement("hr",null))},We=function(e,t){switch(t.type){case"sort":return"up"===t.payload?e.map((function(e){return Object(ge.a)({},e)})).sort((function(e,t){return e.name.localeCompare(t.name)})):"down"===t.payload?e.map((function(e){return Object(ge.a)({},e)})).sort((function(e,t){return t.name.localeCompare(e.name)})):e;case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},Ae=a(19),He=a.n(Ae),Ie=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var Le=function(){var e=Object(n.useState)(Ie),t=Object(C.a)(e,2),a=t[0],c=t[1],l=a.map((function(e){return r.a.createElement("div",{key:e._id,className:He.a.user},r.a.createElement("span",null,e.name),r.a.createElement("span",null,e.age))}));return r.a.createElement("div",null,"homeworks 8",r.a.createElement("div",{className:He.a.users},l),r.a.createElement("div",{className:He.a.buttons},r.a.createElement(V,{onClick:function(){return c(We(Ie,{type:"sort",payload:"up"}))}},"sort up"),r.a.createElement(V,{onClick:function(){return c(We(Ie,{type:"sort",payload:"down"}))}},"sort down"),r.a.createElement(V,{onClick:function(){return c(We(Ie,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null))},Be=a(20),De=a.n(Be);var Fe=function(){var e=Object(n.useState)(0),t=Object(C.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),i=Object(C.a)(l,2),o=i[0],s=i[1],u=Object(n.useState)(!1),m=Object(C.a)(u,2),d=m[0],p=m[1],f=function(){clearInterval(a)},E=o?o.toLocaleString("ru",{hour:"2-digit",minute:"2-digit",second:"2-digit"}):"",g=o?o.toLocaleString("ru",{day:"2-digit",month:"2-digit",year:"numeric"}):"";return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){p(!0)},onMouseLeave:function(){p(!1)},className:De.a.time},E),r.a.createElement("div",{className:De.a.date},d&&g),r.a.createElement("div",{className:De.a.buttons},r.a.createElement(V,{onClick:function(){f();var e=window.setInterval((function(){s(new Date)}),1e3);c(e)}},"start"),r.a.createElement(V,{onClick:f},"stop")))};var Me=function(){return r.a.createElement("div",null,"homeworks 9",r.a.createElement(Fe,null),r.a.createElement("hr",null))};var Re=function(){return r.a.createElement("div",null,r.a.createElement(Te,null),r.a.createElement(Le,null),r.a.createElement(Me,null),r.a.createElement(be,null))},Ue="/pre-junior",Ge="/junior",qe="/junior+";var ze=function(){return r.a.createElement("div",null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",element:r.a.createElement(p.a,{to:Ue})}),r.a.createElement(p.b,{path:Ue,element:r.a.createElement(pe,null)}),r.a.createElement(p.b,{path:Ge,element:r.a.createElement(Re,null)}),r.a.createElement(p.b,{path:qe,element:r.a.createElement(fe,null)}),r.a.createElement(p.b,{path:"/*",element:r.a.createElement(g,null)})))};var Pe=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(d,null),r.a.createElement(ze,null)))},Ke=a(27),Je=Object(Ke.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(ge.a)(Object(ge.a)({},e),{},{isLoading:t.isLoading});default:return e}}}),Xe=Object(Ke.b)(Je),Ve=Xe;window.store=Xe;var Ye=function(){return r.a.createElement(Ee.a,{store:Ve},r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Pe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.0d036b2c.chunk.js.map
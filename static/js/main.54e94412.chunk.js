(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{123:function(e,t,a){e.exports=a(232)},128:function(e,t,a){},229:function(e,t,a){},231:function(e,t,a){},232:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),l=(a(128),a(59)),i=a(60),u=a(71),m=a(70),s=a(18),d=a(13),E=a(20),g=a(46),p=a(11),b=a(263),h=a(267),y=a(268),f=a(269),C=a(270),v=a(271),O=a(272),j=a(273),A=a(274),N=a(275),T=a(276),x=a(277),D=a(278),k=a(279),w=a(280),I=a(281),B=a(282),_=a(283),S=a(284),R=a(285),W=[r.a.createElement(b.a,null),r.a.createElement(h.a,null),r.a.createElement(y.a,null),r.a.createElement(f.a,null),r.a.createElement(C.a,null),r.a.createElement(v.a,null),r.a.createElement(O.a,null),r.a.createElement(j.a,null),r.a.createElement(A.a,null),r.a.createElement(N.a,null),r.a.createElement(T.a,null),r.a.createElement(x.a,null),r.a.createElement(D.a,null),r.a.createElement(k.a,null),r.a.createElement(w.a,null),r.a.createElement(I.a,null),r.a.createElement(B.a,null),r.a.createElement(_.a,null),r.a.createElement(S.a,null),r.a.createElement(R.a,null)],G=[{name:"My mom",description:"Money from my mom",date:new Date(2020,7,25),icon:W[15]},{name:"Sale book",description:"Sold a book",date:new Date(2020,7,24),icon:W[13]},{name:"Work",description:"",date:new Date(2020,7,23),icon:W[19]},{name:"Donations",description:"Its a looooooooooooooooooooooooooooooong description",date:new Date(2020,7,22),icon:W[15]}],M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_CATEGORY":return[].concat(Object(p.a)(e),[t.category]);case"UPDATE_CATEGORY":return e.splice(t.index,1,t.category),Object(p.a)(e);case"DELETE_CATEGORY":return e.splice(t.index,1),Object(p.a)(e);default:return e}},P=[{name:"Food",description:"For food",date:new Date(2020,7,26),icon:W[12]},{name:"Clothes",description:"For clothes",date:new Date(2020,7,25),icon:W[7]},{name:"Restoraunts",description:"",date:new Date(2020,7,24),icon:W[8]},{name:"Utility bills",description:"Its a looooooooooooooooooooooooooooooong description",date:new Date(2020,7,23),icon:W[2]},{name:"Pets",description:"For smth else",date:new Date(2020,7,21),icon:W[14]}],U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CATEGORY":return[].concat(Object(p.a)(e),[t.category]);case"UPDATE_CATEGORY":return e.splice(t.index,1,t.category),Object(p.a)(e);case"DELETE_CATEGORY":return e.splice(t.index,1),Object(p.a)(e);default:return e}},L=[{category:0,description:"Diner with John",date:"22/08/20",money:300},{category:1,description:"For clothes",date:"23/08/20",money:500},{category:2,description:"",date:"24/08/20",money:470},{category:3,description:"Its a looooooooooooooooooooooooooooooong description",date:"25/08/20",money:390},{category:4,description:"",date:"26/08/20",money:150}],Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_CHARGE":return[].concat(Object(p.a)(e),[t.charge]);case"UPDATE_CHARGE":return e.splice(t.index,1,t.charge),Object(p.a)(e);case"DELETE_CHARGE":return e.splice(t.index,1),Object(p.a)(e);default:return e}},H=[{category:0,description:"From mom",date:"22/08/20",money:500},{category:1,description:"For selling a book",date:"23/08/20",money:700},{category:2,description:"",date:"24/08/20",money:320},{category:0,description:"Its a looooooooooooooooooooooooooooooong description",date:"25/08/20",money:740},{category:0,description:"Mom again",date:"26/08/20",money:430}],F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INCOME":return[].concat(Object(p.a)(e),[t.income]);case"UPDATE_INCOME":return e.splice(t.index,1,t.income),Object(p.a)(e);case"DELEE_INCOME":return e.splice(t.index,1),Object(p.a)(e);default:return e}},z=a(23),J={avatar:null,userName:"Ivan",phoneNumber:"+380991234567",showWarning:!0,limit:5e3},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_USER_NAME":return Object(z.a)(Object(z.a)({},e),{},{userName:t.newUserName});case"UPDATE_PHONE_NUMBER":return Object(z.a)(Object(z.a)({},e),{},{phoneNumber:t.newPhoneNumber});case"TOGGLE_WARNING":return Object(z.a)(Object(z.a)({},e),{},{showWarning:t.showWarning});case"SET_LIMIT":return Object(z.a)(Object(z.a)({},e),{},{limit:t.newLimit});default:return e}},q=Object(g.b)({icons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W;return e},settings:$,incomes:F,charges:Y,incomeCategories:M,chargeCategories:U}),K=Object(g.c)(q),Q=function(){return r.a.createElement("nav",null,r.a.createElement("div",null,"LOGO"),r.a.createElement(s.b,{to:"/homepage"},"home"),r.a.createElement(s.b,{to:"/charts"},"charts"),r.a.createElement(s.b,{to:"/categories"},"categories"),r.a.createElement(s.b,{to:"/settings"},"settings"))},V=function(e){var t=e.category,a=e.description,n=e.date,o=e.money;return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,o),r.a.createElement("td",null,r.a.createElement("button",null,":")))},X=function(e){var t=e.props;return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Category"),r.a.createElement("td",null,"Description"),r.a.createElement("td",null,"Date"),r.a.createElement("td",null,"Money"),r.a.createElement("td",null,"Action"))),r.a.createElement("tbody",null,Object(p.a)(t.map((function(e,t){return r.a.createElement(V,{name:e.category,description:e.description,date:e.date,money:e.money,key:t})}))))))},Z=function(e){var t=e.props;return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Category"),r.a.createElement("td",null,"Description"),r.a.createElement("td",null,"Date"),r.a.createElement("td",null,"Money"),r.a.createElement("td",null,"Action"))),r.a.createElement("tbody",null,Object(p.a)(t.map((function(e,t){return r.a.createElement(V,{name:e.category,description:e.description,date:e.date,money:e.money,key:t})}))))))},ee=function(e){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,"HOMEPAGE")),r.a.createElement("div",null,r.a.createElement("h2",null,"Balance"),r.a.createElement("h1",null,"$2,652.07"))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(s.b,{to:"/homepage/charges"},"Charges"),r.a.createElement(s.b,{to:"/homepage/incomes"},"Incomes")),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h4",null,"Charges")),r.a.createElement("button",null,"Add more"))),r.a.createElement("div",null,r.a.createElement(d.b,{path:"/homepage/charges",render:function(){return r.a.createElement(X,{props:e.charges})}}),r.a.createElement(d.b,{path:"/homepage/incomes",render:function(){return r.a.createElement(Z,{props:e.incomes})}}))))},te=Object(E.b)((function(e){return{icons:e.icons,incomes:e.incomes,charges:e.charges}}),(function(e){return{createIncome:function(t){e(function(e){return{type:"SET_INCOME",income:e}}(t))},updateIncome:function(t,a){e(function(e,t){return{type:"UPDATE_INCOME",income:t,index:e}}(t,a))},deleteIncome:function(t){e(function(e){return{type:"DELEE_INCOME",index:e}}(t))},createCharge:function(t){e(function(e){return{type:"CREATE_CHARGE",charge:e}}(t))},updateCharge:function(t,a){e(function(e,t){return{type:"UPDATE_CHARGE",charge:t,index:e}}(t,a))},deleteCharge:function(t){e(function(e){return{type:"DELETE_CHARGE",index:e}}(t))}}}))(ee),ae=a(112),ne=(a(229),{width:"99%",height:"400px"}),re=function(e){var t=e.getContext("2d").createLinearGradient(0,0,0,400);return t.addColorStop(0,"rgb(205,221,249)"),t.addColorStop(1,"rgb(255,255,255)"),{labels:["M","T","W","T","F","S","S"],datasets:[{lineTension:.5,backgroundColor:t,borderColor:"rgb(93,143,238)",borderWidth:4,pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",data:[12,11,13,9,11,12,9]},{lineTension:.5,backgroundColor:"rgb(222,232,251)",borderColor:"rgb(222,232,251)",borderWidth:4,borderDash:[15,5],pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",data:[12,14,11,9,13,12,10],fill:!1}]}},oe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"line-chart",style:ne},r.a.createElement(ae.Line,{data:re,options:{title:{display:!0,text:"Summary",fontSize:20},legend:{display:!1},scales:{yAxes:[{display:!1,ticks:{suggestedMin:5,suggestedMax:15},gridLines:{display:!1}}],xAxes:[{gridLines:{display:!1}}]},maintainAspectRatio:!1}}))}}]),a}(r.a.Component),ce=Object(E.b)((function(e){return{incomes:e.incomes,charges:e.charges,incomeCategories:e.incomeCategories,chargeCategories:e.chargeCategories}}),(function(e){return{}}))(oe),le=a(22),ie=a(286),ue=a(299),me=a(300),se=a(288),de=a(297),Ee=a(302),ge=a(289),pe=a(290),be=Object(ie.a)({dialogWindow:{minWidth:"350px"},iconSelect:{color:"grey"},pickersBlock:{},iconPicker:{color:"grey"}}),he=function(e){var t=e.open,a=e.handleClose,o=e.createCategory,c=e.icons,l=be(),i=new Date,u={currentDate:"".concat(i.getFullYear(),"-").concat(i.getMonth()+1<10?"0".concat(i.getMonth()+1):i.getMonth()+1,"-").concat(i.getDate())},m=Object(n.useState)(""),s=Object(le.a)(m,2),d=s[0],E=s[1],g=Object(n.useState)(""),b=Object(le.a)(g,2),h=b[0],y=b[1],f=Object(n.useState)(u.currentDate),C=Object(le.a)(f,2),v=C[0],O=C[1],j=Object(n.useState)(""),A=Object(le.a)(j,2),N=A[0],T=A[1],x=function(e){console.log(e.target),"ADD"===e.target.innerText?(d&&N&&(o({name:d,description:h,date:v,icon:c[N]}),a()),console.log("added")):"CANCEL"===e.target.innerText&&(E(""),y(""),O(u.currentDate),T(""),console.log("canceled"))},D=function(e){"nameInput"===e.target.id?E(e.target.value):"descriptionInput"===e.target.id?y(e.target.value):"number"===typeof e.target.value?T(e.target.value):"datePicker"===e.target.id&&O(e.target.value)};return r.a.createElement("div",null,r.a.createElement(ue.a,{open:t,onClose:a,"aria-labelledby":"add-category-title","aria-describedby":"add-category-description"},r.a.createElement(me.a,{id:"add-category-title"},"ADD NEW CATEGORY"),r.a.createElement(se.a,{className:l.dialogWindow},r.a.createElement("div",null,r.a.createElement(de.a,{autoFocus:!0,margin:"dense",id:"nameInput",label:"Category name",type:"text",fullWidth:!0,onChange:D,value:d})),r.a.createElement("div",null,r.a.createElement(de.a,{margin:"dense",id:"descriptionInput",label:"Category description",type:"text",fullWidth:!0,onChange:D,value:h})),r.a.createElement("div",{className:l.pickersBlock},r.a.createElement(de.a,{className:l.iconPicker,id:"selectIcon",select:!0,margin:"dense",label:"Select category icon",value:N,onChange:D,fullWidth:!0},Object(p.a)(c.map((function(e,t){return r.a.createElement(Ee.a,{key:t,value:t,className:l.iconSelect},e)})))),r.a.createElement(de.a,{className:l.datePicker,margin:"dense",id:"datePicker",label:"Current date",type:"date",fullWidth:!0,onChange:D,value:v}))),r.a.createElement(ge.a,null,r.a.createElement(pe.a,{onClick:x,color:"primary"},"Cancel"),r.a.createElement(pe.a,{onClick:x,color:"primary",autoFocus:!0},"Add"))))},ye=a(113),fe=a.n(ye),Ce=a(291),ve=a(292),Oe=a(114),je=Object(ie.a)({categoryNameBlock:{display:"flex",alignItems:"center"},categoryIcon:{display:"flex",marginRight:"10px",color:"grey"},categoryName:{display:"flex"}}),Ae=function(e){var t=e.name,a=e.description,o=e.date,c=e.icon,l=je(),i=Object(n.useState)(null),u=Object(le.a)(i,2),m=u[0],s=u[1],d=function(e){console.log(e.currentTarget),"Delete"===e.target.innerText&&console.log(e.target.parentNode.parentNode.parentNode),s(null)};return r.a.createElement(Ce.a,null,r.a.createElement(ve.a,{component:"th",scope:"row"},r.a.createElement("div",{className:l.categoryNameBlock},r.a.createElement("div",{className:l.categoryIcon},c),r.a.createElement("div",{className:l.categoryName},t))),r.a.createElement(ve.a,null,a),r.a.createElement(ve.a,null,o),r.a.createElement(ve.a,null,r.a.createElement(pe.a,{"aria-controls":"category-menu","aria-haspopup":"true",onClick:function(e){s(e.currentTarget),console.log(e.target.closest("table"))},size:"small"},r.a.createElement(fe.a,{color:"action"})),r.a.createElement(Oe.a,{id:"category-menu",anchorEl:m,keepMounted:!0,open:Boolean(m),onClose:d},r.a.createElement(Ee.a,{onClick:d},"Edit"),r.a.createElement(Ee.a,{onClick:d},"Delete"))))},Ne=a(293),Te=a(287),xe=a(294),De=a(295),ke=a(296),we=a(69),Ie=a.n(we),Be=Object(ie.a)({table:{minWidth:650},tableHead:{backgroundColor:"lightcyan"},addButtonWrapper:{display:"flex",justifyContent:"flex-end",paddingBottom:"20px"}}),_e=function(e){var t=e.props,a=Object(n.useState)(!1),o=Object(le.a)(a,2),c=o[0],l=o[1],i=Be();return r.a.createElement("div",null,r.a.createElement("div",{className:i.addButtonWrapper},r.a.createElement(pe.a,{variant:"contained",color:"primary",startIcon:r.a.createElement(Ie.a,null),onClick:function(){l(!0)}},"Add more")),r.a.createElement(he,{open:c,handleClose:function(){l(!1)},createCategory:t.createChargeCategory,icons:t.icons}),r.a.createElement(Ne.a,{component:Te.a},r.a.createElement(xe.a,{className:i.table},r.a.createElement(De.a,{className:i.tableHead},r.a.createElement(Ce.a,null,r.a.createElement(ve.a,null,"Category"),r.a.createElement(ve.a,null,"Description"),r.a.createElement(ve.a,null,"Date"),r.a.createElement(ve.a,null,"Action"))),r.a.createElement(ke.a,null,Object(p.a)(t.chargeCategories.map((function(e,t){return r.a.createElement(Ae,{name:e.name,description:e.description,date:e.date.toString(),icon:e.icon,key:e.name})})))))))},Se=Object(ie.a)({table:{minWidth:650},tableHead:{backgroundColor:"lightcyan"},addButtonWrapper:{display:"flex",justifyContent:"flex-end",paddingBottom:"20px"}}),Re=function(e){var t=e.props,a=Object(n.useState)(!1),o=Object(le.a)(a,2),c=o[0],l=o[1],i=Se();return r.a.createElement("div",null,r.a.createElement("div",{className:i.addButtonWrapper},r.a.createElement(pe.a,{variant:"contained",color:"primary",startIcon:r.a.createElement(Ie.a,null),onClick:function(){l(!0)}},"Add more")),r.a.createElement(he,{open:c,handleClose:function(){l(!1)},createCategory:t.createIncomeCategory,icons:t.icons}),r.a.createElement(Ne.a,{component:Te.a},r.a.createElement(xe.a,{className:i.table},r.a.createElement(De.a,{className:i.tableHead},r.a.createElement(Ce.a,null,r.a.createElement(ve.a,null,"Category"),r.a.createElement(ve.a,null,"Description"),r.a.createElement(ve.a,null,"Date"),r.a.createElement(ve.a,null,"Action"))),r.a.createElement(ke.a,null,Object(p.a)(t.incomeCategories.map((function(e,t){return r.a.createElement(Ae,{name:e.name,description:e.description,date:e.date.toString(),icon:e.icon,key:e.name})})))))))},We=Object(ie.a)({Categories:{padding:"20px"},sectionToggle:{display:"flex",marginBottom:"20px"},toggleButton:{textDecoration:"none",color:"inherit",letterSpacing:"1px"},toggleButtonActive:{borderBottom:"1px solid cornflowerblue"},headerBlock:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"100px"},balanceTitle:{textAlign:"right",fontSize:"1.2em",marginBottom:"10px"},balanceAmount:{fontSize:"1.7em",fontWeight:"bold"}}),Ge=function(e){var t=We();return r.a.createElement(s.a,null,r.a.createElement("div",{className:t.Categories},r.a.createElement("div",{className:t.headerBlock},r.a.createElement("div",null,r.a.createElement("h2",null,"Categories")),r.a.createElement("div",{className:t.balanceBlock},r.a.createElement("div",{className:t.balanceTitle},"Balance"),r.a.createElement("div",{className:t.balanceAmount},"$2,652.07"))),r.a.createElement("div",{className:t.sectionToggle},r.a.createElement(pe.a,{color:"primary"},r.a.createElement(s.b,{to:"/categories/charges",className:t.toggleButton,activeClassName:t.toggleButtonActive},"Charges")),r.a.createElement(pe.a,{color:"primary"},r.a.createElement(s.b,{to:"/categories/incomes",className:t.toggleButton,activeClassName:t.toggleButtonActive},"Incomes"))),r.a.createElement("div",null,r.a.createElement(d.b,{exact:!0,path:"/categories/"},r.a.createElement(d.a,{to:"/categories/charges"})),r.a.createElement(d.b,{path:"/categories/charges",render:function(){return r.a.createElement(_e,{props:e})}}),r.a.createElement(d.b,{path:"/categories/incomes",render:function(){return r.a.createElement(Re,{props:e})}}))))},Me=Object(E.b)((function(e){return{icons:e.icons,incomeCategories:e.incomeCategories,chargeCategories:e.chargeCategories}}),(function(e){return{createIncomeCategory:function(t){e(function(e){return{type:"CREATE_CATEGORY",category:e}}(t))},updateIncomeCategory:function(t,a){e(function(e,t){return{type:"UPDATE_CATEGORY",category:t,index:e}}(t,a))},deleteIncomeCategory:function(t){e(function(e){return{type:"DELETE_CATEGORY",index:e}}(t))},createChargeCategory:function(t){e(function(e){return{type:"SET_CATEGORY",category:e}}(t))},updateChargeCategory:function(t,a){e(function(e,t){return{type:"UPDATE_CATEGORY",index:e,category:t}}(t,a))},deleteChargeCategory:function(t){e(function(e){return{type:"DELETE_CATEGORY",index:e}}(t))}}}))(Ge),Pe=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,e.userName),r.a.createElement("div",null,e.phoneNumber),r.a.createElement("div",null,e.limit),r.a.createElement("div",null,e.showWarning?"warn":"not to warn"))},Ue=Object(E.b)((function(e){return Object(z.a)({},e.settings)}),(function(e){return{updateUserName:function(t){e(function(e){return{type:"UPDATE_USER_NAME",newUserName:e}}(t))}}}))(Pe),Le=(Object(E.b)((function(e){return{icons:e.icons,incomes:e.incomes,charges:e.charges,incomeCategories:e.incomeCategories,chargeCategories:e.chargeCategories}}),(function(e){return{}}))((function(e){return r.a.createElement("div",null,Object.values(e.icons),e.icons[0],r.a.createElement("div",null,"123"))})),a(231),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(s.a,null,r.a.createElement(E.a,{store:K},r.a.createElement("div",{className:"App"},r.a.createElement(Q,null),r.a.createElement("div",{className:"mainContent"},r.a.createElement(d.b,{path:"/homepage",render:function(){return r.a.createElement(te,null)}}),r.a.createElement(d.b,{path:"/charts",render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(d.b,{path:"/categories",render:function(){return r.a.createElement(Me,null)}}),r.a.createElement(d.b,{path:"/settings",render:function(){return r.a.createElement(Ue,null)}})))))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[123,1,2]]]);
//# sourceMappingURL=main.54e94412.chunk.js.map
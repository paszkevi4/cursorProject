(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{26:function(e,t,n){e.exports=n(38)},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(13),c=n.n(r),i=(n(31),n(21)),l=n(22),u=n(25),m=n(24),s=n(8),d=n(2),E=n(9),g=n(12),p=n(6),h=[{name:"My mom",description:"Money from my mom",date:"22/08/20",icon:""},{name:"Sale book",description:"Sold a book",date:"23/08/20",icon:""},{name:"Work",description:"",date:"24/08/20",icon:""},{name:"Donations",description:"Its a looooooooooooooooooooooooooooooong description",date:"25/08/20",icon:""}],f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CATEGORY":return[].concat(Object(p.a)(e),[t.category]);default:return e}},y=[{name:"Food",description:"For food",date:"22/08/20",icon:""},{name:"Clothes",description:"For clothes",date:"23/08/20",icon:""},{name:"Restoraunts",description:"",date:"24/08/20",icon:""},{name:"Utility bills",description:"Its a looooooooooooooooooooooooooooooong description",date:"25/08/20",icon:""},{name:"Pets",description:"For smth else",date:"26/08/20",icon:""}],v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CATEGORY":return[].concat(Object(p.a)(e),[t.category]);default:return e}},b=[{category:0,description:"Diner with John",date:"22/08/20",money:""},{category:1,description:"For clothes",date:"23/08/20",icon:""},{category:2,description:"",date:"24/08/20",icon:""},{category:3,description:"Its a looooooooooooooooooooooooooooooong description",date:"25/08/20",icon:""},{category:4,description:"",date:"26/08/20",icon:""}],C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NEW_CHARGE":return[].concat(Object(p.a)(e),[t.charge]);default:return e}},O=[{category:0,description:"From mom",date:"22/08/20",money:""},{category:1,description:"For selling a book",date:"23/08/20",icon:""},{category:2,description:"",date:"24/08/20",icon:""},{category:0,description:"Its a looooooooooooooooooooooooooooooong description",date:"25/08/20",icon:""},{category:0,description:"Mom again",date:"26/08/20",icon:""}],j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NEW_INCOME":return[].concat(Object(p.a)(e),[t.income]);default:return e}},w=Object(g.b)({incomes:j,charges:C,incomeCategories:f,chargeCategories:v}),T=Object(g.c)(w),A=function(){return a.a.createElement("nav",null,a.a.createElement("div",null,"LOGO"),a.a.createElement(s.b,{to:"/homepage"},"home"),a.a.createElement(s.b,{to:"/charts"},"charts"),a.a.createElement(s.b,{to:"/categories"},"categories"))},S=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,"HOMEPAGE"))},_=Object(E.b)((function(e){return{incomes:e.incomes,charges:e.charges}}),(function(e){return{setIncome:function(t){e(function(e){return{type:"SET_NEW_INCOME",income:e}}(t))},setCharge:function(t){e(function(e){return{type:"SET_NEW_CHARGE",charge:e}}(t))}}}))(S),k=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,"CHARTS"))},I=Object(E.b)((function(e){return{incomes:e.incomes,charges:e.charges,incomeCategories:e.incomeCategories,chargeCategories:e.chargeCategories}}),(function(e){return{}}))(k),F=function(e){var t=e.name,n=e.description,o=e.date,r=e.icon;return a.a.createElement("tr",null,a.a.createElement("td",null,r,t),a.a.createElement("td",null,n),a.a.createElement("td",null,o),a.a.createElement("td",null,a.a.createElement("button",null,":")))},G=function(e){var t=e.props;return a.a.createElement("div",null,a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Category"),a.a.createElement("td",null,"Description"),a.a.createElement("td",null,"Date"),a.a.createElement("td",null,"Action"))),a.a.createElement("tbody",null,Object(p.a)(t.map((function(e,t){return a.a.createElement(F,{name:e.name,description:e.description,date:e.date,icon:e.icon,key:t})}))))))},N=function(e){var t=e.props;return a.a.createElement("div",null,a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Category"),a.a.createElement("td",null,"Description"),a.a.createElement("td",null,"Date"),a.a.createElement("td",null,"Action"))),a.a.createElement("tbody",null,Object(p.a)(t.map((function(e,t){return a.a.createElement(F,{name:e.name,description:e.description,date:e.date,icon:e.icon,key:t})}))))))},R=function(e){return a.a.createElement(s.a,null,a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("h2",null,"Categories")),a.a.createElement("div",null,a.a.createElement("div",null,"Balance"),a.a.createElement("div",null,"$2,652.07"))),a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(s.b,{to:"/categories/charges"},"Charges"),a.a.createElement(s.b,{to:"/categories/incomes"},"Incomes")),a.a.createElement("button",null,"Add more")),a.a.createElement("div",null,a.a.createElement(d.a,{path:"/categories/charges",render:function(){return a.a.createElement(G,{props:e.chargeCategories})}}),a.a.createElement(d.a,{path:"/categories/incomes",render:function(){return a.a.createElement(N,{props:e.incomeCategories})}}))))},M=Object(E.b)((function(e){return{incomeCategories:e.incomeCategories,chargeCategories:e.chargeCategories}}),(function(e){return{setIncomeCategory:function(t){e(function(e){return{type:"SET_CATEGORY",category:e}}(t))},setChargeCategory:function(t){e(function(e){return{type:"SET_CATEGORY",category:e}}(t))}}}))(R),W=(n(37),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(s.a,null,a.a.createElement(E.a,{store:T},a.a.createElement("div",{className:"App"},a.a.createElement(A,null),a.a.createElement("div",{className:"mainContent"},a.a.createElement(d.a,{path:"/homepage",render:function(){return a.a.createElement(_,null)}}),a.a.createElement(d.a,{path:"/charts",render:function(){return a.a.createElement(I,null)}}),a.a.createElement(d.a,{path:"/categories",render:function(){return a.a.createElement(M,null)}})))))}}]),n}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.93a70d5f.chunk.js.map
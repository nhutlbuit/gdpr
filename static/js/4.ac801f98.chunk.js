(this["webpackJsonpbo-gdpr"]=this["webpackJsonpbo-gdpr"]||[]).push([[4],{202:function(e,t,a){"use strict";a.r(t);var n=a(20),l=a(0),c=a.n(l),r=a(7),s=a.n(r),u=a(17),o=a(15),d=a(50);var i=function(e){var t=Object(l.useState)(""),a=Object(n.a)(t,2),r=a[0],s=a[1],u=e.onSubmit,o=Object(l.useRef)(null),d=Object(l.useCallback)((function(e){u(""),s("")}),[]);return c.a.createElement("div",null,c.a.createElement("div",{className:"bold-text"},"Search criteria:"),c.a.createElement("form",null,c.a.createElement("input",{className:"text-box",type:"text",value:r,onChange:function(e){var t=e.target.value;s(e.target.value),u&&(o.current&&clearTimeout(o.current),o.current=setTimeout((function(){u(t)}),400))}}),c.a.createElement("button",{className:"use-icon",onClick:d},c.a.createElement("i",{className:"fas fa-times"}))))},m=a(59),f=a(10);var b=function(){var e=Object(m.b)();return{students:Object(m.c)((function(e){return e.students.data})),pagination:Object(m.c)((function(e){return e.students.page})),getStudentsError:Object(m.c)((function(e){return e.students.error})),updateStudentsError:Object(m.c)((function(e){return e.students.updateError})),updateStudentsSuccess:Object(m.c)((function(e){return e.students.updateError})),createStudentsError:Object(m.c)((function(e){return e.students.createError})),addStudent:function(t){return e(Object(f.o)(t))},deleteStudent:function(t){return e(Object(f.p)(t))},getStudents:Object(l.useCallback)((function(t){return e(Object(f.q)(t))}),[e]),updateStudent:function(t){return e(Object(f.r)(t))}}},p=a(45),h=a(46),v=a(60),E=a(47),N=a(61),O=a(16),C=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(v.a)(this,Object(E.a)(t).call(this,e))).el=void 0,a.modalRoot=void 0,a.el=document.createElement("div"),a.modalRoot=document.getElementById("modal"),a}return Object(N.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.modalRoot.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){this.modalRoot.removeChild(this.el)}},{key:"render",value:function(){return Object(O.createPortal)(this.props.children,this.el)}}]),t}(l.Component),j=function(e,t,a){return c.a.createElement(C,null,c.a.createElement("div",{className:"modal is-active"},c.a.createElement("div",{className:"modal-background"}),c.a.createElement("div",{className:"modal-card"},c.a.createElement("header",{className:"modal-card-head"},c.a.createElement("p",{className:"modal-card-title"},"Confirm")),c.a.createElement("section",{className:"modal-card-body"},e),c.a.createElement("footer",{className:"modal-card-foot card-footer"},c.a.createElement("button",{className:"button modal-no",onClick:a},"No"),c.a.createElement("button",{className:"button is-primary modal-yes",onClick:t},"Yes")))))};var S=function(e){var t=e.editStudent,a=e.addNewStudent,r=Object(l.useState)(!1),m=Object(n.a)(r,2),f=m[0],p=m[1],h=Object(l.useState)(),v=Object(n.a)(h,2),E=v[0],N=v[1],O=Object(l.useState)({number:0,totalElements:5,size:5,totalPages:1,searchName:""}),C=Object(n.a)(O,2),S=C[0],g=C[1],y=b(),k=y.getStudents,x=y.students,w=y.pagination,F=y.deleteStudent,B=y.getStudentsError;function D(){p(!1)}function P(){return(P=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F(E),alert("Deleted student ".concat(E.fullName," successfully!")),g(Object(o.a)({},S,{number:0}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)((function(){k(S)}),[S]),B&&alert("Failed to fetch data"),c.a.createElement("div",null,c.a.createElement("h1",{className:"dash-board"},"Dash Board"),c.a.createElement(i,{onSubmit:function(e){e!==S.searchName&&g(Object(o.a)({},S,{searchName:e,number:0}))}}),c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Student Code"),c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Class"),c.a.createElement("th",null,"Date Of Birth"),c.a.createElement("th",null,"Phone"),c.a.createElement("th",null,"Address"),c.a.createElement("th",null,c.a.createElement("button",{className:"use-icon",onClick:function(){a()}},c.a.createElement("i",{className:"fas fa-plus"}))))),c.a.createElement("tbody",null,x.map((function(e){var a;return c.a.createElement("tr",{key:null===e||void 0===e?void 0:e.studentCode},c.a.createElement("td",null,null===e||void 0===e?void 0:e.studentCode),c.a.createElement("td",null," ",null===e||void 0===e?void 0:e.fullName),c.a.createElement("td",null," ",(null===e||void 0===e?void 0:e.trainingClass)?null===e||void 0===e||null===(a=e.trainingClass)||void 0===a?void 0:a.className:""),c.a.createElement("td",null,null===e||void 0===e?void 0:e.dateOfBirth),c.a.createElement("td",null,null===e||void 0===e?void 0:e.phoneNumber),c.a.createElement("td",null,null===e||void 0===e?void 0:e.address),c.a.createElement("td",null,c.a.createElement("button",{onClick:function(){return t=e,p(!0),void N(t);var t},className:"use-icon-delete"},c.a.createElement("i",{className:"fas fa-trash"})),c.a.createElement("button",{className:"use-icon",onClick:function(){t(e)}},c.a.createElement("i",{className:"fas fa-edit"}))))})))),c.a.createElement(d.a,{pagination:w,onPageChange:function(e){g(Object(o.a)({},S,{number:e}))},onPageSizeChange:function(e){g(Object(o.a)({},S,{size:e,number:0}))}}),f&&c.a.createElement(j,{message:"Would you like to delete ".concat(E.fullName,"?"),onNo:D,onYes:function(){D(),function(){P.apply(this,arguments)}()}}))},g=a(23),y=a(49),k=a(28),x=a(137),w=a.n(x),F=(a(136),a(22));var B=function(e){var t=Object(g.g)(),a=e.student,r=Object(l.useState)(Object.assign({})),d=Object(n.a)(r,2),i=d[0],m=d[1],f=Object(l.useState)(!0),p=Object(n.a)(f,2),h=p[0],v=p[1],E=Object(l.useState)([]),N=Object(n.a)(E,2),O=N[0],C=N[1],j=Object(l.useState)(),S=Object(n.a)(j,2),x=S[0],B=S[1],D=Object(l.useState)(new Date),P=Object(n.a)(D,2),A=P[0],V=P[1],I=b(),R=I.updateStudent,T=I.addStudent,z=I.updateStudentsError,G=I.createStudentsError;function M(){return(M=Object(u.a)(s.a.mark((function e(){var t,a,n,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"/trainingApi/trainingClasses/search/fetchClassCodes?projection=InlineTrainingClassGetIdOnly",e.next=4,fetch("/trainingApi/trainingClasses/search/fetchClassCodes?projection=InlineTrainingClassGetIdOnly");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,200===t.status&&(n=a._embedded.trainingClasses,l=n.map((function(e){var t={};return t.label=e.className,t.value=e.classCode,t})),C(l)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert("Get list class code error!");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function J(){return(J=Object(u.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(a);case 2:G?alert("Save error!"):(alert("Save Successfully!"),t.push("/student"));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(u.a)(s.a.mark((function e(a){var n,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(l={}).id=a.id,l.classCode=a.classCode?a.classCode:null===a||void 0===a||null===(n=a.trainingClass)||void 0===n?void 0:n.classCode,l.dateOfBirth=a.dateOfBirth,l.firstName=a.firstName,l.lastName=a.lastName,l.middleName=a.middleName,l.phoneNumber=a.phoneNumber,l.studentCode=a.studentCode,l.address=a.address,e.next=12,R(l);case 12:z?alert("Save error!"):(alert("Save Successfully!"),t.push("/student"));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){h?function(e){J.apply(this,arguments)}(e):function(e){L.apply(this,arguments)}(e)}function Y(e){m(Object(o.a)({},i,Object(y.a)({},e.target.name,e.target.value)))}return Object(l.useEffect)((function(){!function(){M.apply(this,arguments)}()}),[]),Object(l.useEffect)((function(){var e=void 0===a||null===a;if(m(e?{}:a),v(e),B(O[0]),!e){V(new Date(a.dateOfBirth));var t=O.find((function(e){return e.value===a.trainingClass.classCode}));B(t)}}),[O]),c.a.createElement("div",null,c.a.createElement("h1",{className:"dash-board"},a?"Edit Student":"Add New Student"),c.a.createElement("div",{className:"field"},c.a.createElement("label",{className:"label",htmlFor:"stCode"},"Student Code"),c.a.createElement("input",{name:"studentCode",className:"input",type:"text",defaultValue:null===i||void 0===i?void 0:i.studentCode,placeholder:"Student Code",onChange:Y}),c.a.createElement("label",{className:"label",htmlFor:"stCode"},"First Name"),c.a.createElement("input",{name:"firstName",className:"input",type:"text",defaultValue:null===i||void 0===i?void 0:i.firstName,placeholder:"First Name",onChange:Y}),c.a.createElement("label",{className:"label",htmlFor:"stCode"},"Middle Name"),c.a.createElement("input",{name:"middleName",className:"input",type:"text",defaultValue:null===i||void 0===i?void 0:i.middleName,placeholder:"Middle Name",onChange:Y}),c.a.createElement("label",{className:"label",htmlFor:"stCode"},"Last Name"),c.a.createElement("input",{name:"lastName",className:"input",type:"text",defaultValue:null===i||void 0===i?void 0:i.lastName,placeholder:"Last Name",onChange:Y}),c.a.createElement("label",{className:"label",htmlFor:"stCode"},"Phone Number"),c.a.createElement("input",{name:"phoneNumber",className:"input",type:"text",defaultValue:null===i||void 0===i?void 0:i.phoneNumber,placeholder:"Phone Number",onChange:Y}),c.a.createElement("label",{className:"label",htmlFor:"classCode"},"Class"),c.a.createElement(k.a,{options:O,onChange:function(e){m(Object(o.a)({},i,{classCode:e.value}))},className:"selectClassCode",value:x}),c.a.createElement("label",{className:"label",htmlFor:"dateOfBirth"},"Date Of Birth"),c.a.createElement(w.a,{selected:A,onChange:function(e){V(e),m(Object(o.a)({},i,{dateOfBirth:e}))}}),c.a.createElement("label",{className:"label",htmlFor:"stCode"},"Address"),c.a.createElement("input",{name:"address",className:"input",type:"text",defaultValue:null===i||void 0===i?void 0:i.address,placeholder:"Address",onChange:Y})),c.a.createElement(F.a,{variant:"success",name:"save",onClick:function(){return W(i)}},"Save"),"\xa0",c.a.createElement(F.a,{variant:"secondary",name:"cancel",onClick:function(){t.push("/student")}},"Cancel"))};t.default=function(){var e=Object(g.g)(),t=Object(l.useState)(""),a=Object(n.a)(t,2),r=a[0],s=a[1];function u(){s(""),e.push("/student/0")}function o(t){s(t),e.push("/student/".concat(t.id))}return c.a.createElement("div",{className:"content-container"},c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(g.d,null,c.a.createElement(g.b,{exact:!0,path:"/student",component:function(){return c.a.createElement(S,{addNewStudent:u,editStudent:o})}}),c.a.createElement(g.b,{exact:!0,path:"/student/:id",component:function(){return c.a.createElement(B,{student:r})}})))))}}}]);
//# sourceMappingURL=4.ac801f98.chunk.js.map
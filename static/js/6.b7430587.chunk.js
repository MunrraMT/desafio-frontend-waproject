(this["webpackJsonpdesafio-frontend-waproject"]=this["webpackJsonpdesafio-frontend-waproject"]||[]).push([[6],{113:function(t,e,a){"use strict";e.a=function(){var t=1e5;return Math.floor(899999*Math.random())+t}},114:function(t,e,a){"use strict";e.a=function(t){return++t<10?"0".concat(t):t>=10?t:void 0}},162:function(t,e,a){"use strict";a.r(e);var r=a(18),n=a(115),c=a(83),i=a(169),o=a(170),s=a(100),d=a(171),u=a(103),l=a(97),j=a(154),m=a(159),b=a(160),O=a(98),h=a(96),f=a(99),p=a(161),x=a(0),w=a(19),g=a(157),v=a(5),y=a(102),N=a(1),S=Object(c.a)({boxSendAnswers:{marginTop:"0.5rem",marginBottom:"1rem","@media(min-width: 900px)":{width:"60vw !important"},cardSendAnswers:{backgroundColor:"#ededed !important"}}}),q=function(){var t=S();return Object(N.jsx)(s.a,{container:!0,justifyContent:"center",children:Object(N.jsx)(u.a,{width:"90vw",className:t.boxSendAnswers,children:Object(N.jsx)(l.a,{variant:"outlined",className:t.cardSendAnswers,children:Object(N.jsx)(f.a,{children:Object(N.jsx)(y.a,{fullWidth:!0,type:"submit","data-testid":"btn-send-answers",size:"large",variant:"contained",color:"primary",children:"Enviar respostas"})})})})})},C=a(113),Q=a(114),A=Object(c.a)({answerGrid:{marginLeft:"1rem",width:"100% !important"},answerRadioGroup:{width:"100% !important"},cardQuestNumber:{backgroundColor:"#ededed !important"},btnSendAnswers:{margin:"1rem !important",marginTop:"0.5rem !important",marginBottom:"2rem !important"},avatarQuestion:{backgroundColor:"#303f9f !important"},errorMsg:{color:"#FF0000 !important",textAlign:"right !important",width:"100% !important"},boxListQuestions:{"@media(min-width: 900px)":{width:"60vw !important"}}});e.default=function(){var t=A(),e=Object(x.useContext)(w.a),a=Object(v.g)(),c=function(t,e){var a=t.correct_answer,r=t.incorrect_answers;return[a].concat(Object(n.a)(r)).sort().map((function(t,a){return Object(N.jsx)(i.a,{control:Object(N.jsx)(o.a,{color:"primary"}),label:t,value:t,"data-testid":"card-answer-question-".concat(Object(Q.a)(e),"-").concat(Object(Q.a)(a))},Object(C.a)())}))};return Object(N.jsx)(g.a,{initialValues:Object(r.a)({},function(){for(var t={},a=0;a<e.numberQuestions;a++)t[Object(Q.a)(a)]="";return t}()),onSubmit:function(t){localStorage.setItem("last-questions",JSON.stringify(e.questionsData)),localStorage.setItem("last-answers",JSON.stringify(t)),a.push("/report")},validate:function(t){var e={};for(var a in t)""===t[a]&&(e[a]="faltando");return e},children:function(a){return Object(N.jsxs)("form",{onSubmit:a.handleSubmit,children:[e.questionsData.map((function(e,r){return Object(N.jsx)(s.a,{container:!0,direction:"row",alignItems:"center",justifyContent:"center",children:Object(N.jsx)(d.a,{component:"fieldset",className:t.questionFormated,children:Object(N.jsx)(u.a,{m:"1rem",width:"90vw",className:t.boxListQuestions,children:Object(N.jsxs)(l.a,{className:t.cardQuestNumber,variant:"outlined",children:[Object(N.jsx)(j.a,{"data-testid":"card-header-question-".concat(Object(Q.a)(r)),avatar:Object(N.jsx)(m.a,{"aria-label":"recipe",className:t.avatarQuestion,"data-testid":"card-avatar-question-".concat(Object(Q.a)(r)),children:Object(Q.a)(r)}),title:"Difficulty: "+"".concat(e.difficulty).toLocaleUpperCase(),subheader:"".concat(e.category)}),Object(N.jsx)(b.a,{component:"legend",children:Object(N.jsx)(O.a,{children:Object(N.jsx)(h.a,{color:"textPrimary",align:"justify",gutterBottom:!0,"data-testid":"card-txt-question-".concat(Object(Q.a)(r)),children:"".concat(e.question)})})}),Object(N.jsx)(f.a,{children:Object(N.jsx)(s.a,{container:!0,direction:"column",alignItems:"flex-start",justifyContent:"center",className:t.answerGrid,children:Object(N.jsxs)(p.a,{className:t.answerRadioGroup,"aria-label":Object(Q.a)(r),onChange:function(t){a.setFieldValue(Object(Q.a)(r),t.currentTarget.value)},onBlur:a.handleBlur,value:a.values[Object(Q.a)(r)],name:Object(Q.a)(r),children:[c(e,r),a.errors[Object(Q.a)(r)]&&a.touched[Object(Q.a)(r)]?Object(N.jsx)(h.a,{color:"textPrimary",className:t.errorMsg,gutterBottom:!0,"data-testid":"card-error-question-".concat(Object(Q.a)(r)),children:"Precisa ser respondido"}):null]})})})]})})})},Object(C.a)())})),Object(N.jsx)(q,{})]})}})}}}]);
//# sourceMappingURL=6.b7430587.chunk.js.map
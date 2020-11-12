(this.webpackJsonpfb_auth_pages=this.webpackJsonpfb_auth_pages||[]).push([[0],{30:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(1),i=t.n(a),c=t(21),s=t.n(c),l=(t(30),t(15)),o=t(2),d=t(8),j=t(9);function b(){var e=Object(d.a)(["\n  height: 100vh;\n  min-width: 1024px;\n\n  a {\n    text-decoration: none;\n    color: #fff;\n    font-size: 11px;\n    margin-top: 5px;\n  }\n\n  @media only screen and (min-width: 1273px) {\n    > section,\n    footer {\n      padding-left: calc((100vw - 1233px) / 2);\n      padding-right: calc((100vw - 1233px) / 2);\n    }\n  }\n"]);return b=function(){return e},e}var h=j.a.div(b()),u=t(4);function x(){var e=Object(d.a)(['\n  display: flex;\n  justify-content: space-between;\n  background-color: #3b5998;\n  height: 90px;\n  padding: 0 40px;\n  color: #fff;\n\n  > h1 {\n    margin: 0;\n    margin-top: 10px;\n    font-size: 48px;\n  }\n\n  > form {\n    display: flex;\n    margin-top: 10px;\n\n    input.error {\n      border: 0.5px solid #f6350a;\n    }\n\n    input[type="checkbox"] {\n      height: 9px;\n      width: 9px;\n    }\n\n    label[for="keep_login"] {\n      font-size: 11px;\n    }\n\n    > div {\n      display: flex;\n      flex-direction: column;\n      margin-right: 10px;\n\n      > label {\n        font-size: 13px;\n        font-weight: bold;\n        margin-bottom: 5px;\n      }\n    }\n\n    > input[type="submit"] {\n      height: 21px;\n      margin-top: 21px;\n      background-color: #448499;\n      border: 2px solid #448499;\n      color: #fff;\n      font-weight: bold;\n    }\n  }\n']);return x=function(){return e},e}var p=j.a.header(x());console.log("NODE_ENV : ","production");console.log("BASE : ","");var O="/home";var m=function(){var e=Object(a.useState)(""),n=Object(u.a)(e,2),t=n[0],i=n[1],c=Object(a.useState)(!1),s=Object(u.a)(c,2),l=s[0],d=s[1],j=Object(a.useState)(!1),b=Object(u.a)(j,2),h=b[0],x=b[1],m=Object(a.useState)(""),g=Object(u.a)(m,2),f=g[0],v=g[1],y=Object(a.useState)(!1),w=Object(u.a)(y,2),_=w[0],S=w[1],N=Object(a.useState)(!1),k=Object(u.a)(N,2),F=k[0],C=k[1],P=Object(o.g)();return Object(a.useEffect)((function(){d(F&&!t)}),[F,t]),Object(a.useEffect)((function(){S(F&&!f)}),[f,F]),Object(r.jsxs)(p,{children:[Object(r.jsx)("h1",{children:"facebook"}),Object(r.jsxs)("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),C(!0);var n=localStorage.getItem("fb_auth_user"),r=(n=n?JSON.parse(n):[]).find((function(e){return e.email===t&&e.password===f}));r?(h&&localStorage.setItem("fb_auth_keep",JSON.stringify(r)),sessionStorage.setItem("fb_auth_login","!@#$"),sessionStorage.setItem("fb_auth_active",JSON.stringify(r)),C(!1),P.replace(O)):(d(!0),S(!0))},children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email"}),Object(r.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Email",className:l?"error":"",value:t,onChange:function(e){return i(e.target.value)}}),Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"checkbox",id:"keep_login",name:"keep_login",checked:h,onChange:function(e){return x(e.target.checked)}}),Object(r.jsx)("label",{htmlFor:"keep_login",children:" Keep me logged in"})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Password",className:_?"error":"",value:f,onChange:function(e){return v(e.target.value)}}),Object(r.jsx)("a",{href:"#",children:"Forgot your password?"})]}),Object(r.jsx)("input",{type:"submit",value:"Login"})]})]})},g=t(11),f=t.p+"static/media/globe.19cb4208.PNG";function v(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 40px 60px 40px 40px;\n  background-color: #dfe3ee;\n\n  > div:nth-child(1) {\n    margin-right: 60px;\n\n    h2 {\n      width: 500px;\n    }\n\n    #globe_icon {\n      width: 550px;\n      height: 360px;\n      background-image: url(",');\n      background-repeat: no-repeat;\n      background-size: contain;\n    }\n  }\n\n  > div:nth-child(2) {\n    width: 400px;\n    > h2 {\n      margin-bottom: 0;\n      margin-left: 12px;\n    }\n\n    p#title-desc {\n      margin: 5px 0 5px 12px;\n      font-size: 17px;\n    }\n\n    p#create-page {\n      color: #9a9a9a;\n      font-size: 13px;\n      font-weight: bold;\n      text-align: center;\n      a {\n        text-decoration: initial;\n        color: #3b5998;\n        margin-top: initial;\n        font-size: 13px;\n      }\n    }\n  }\n\n  form {\n    > table {\n      tr {\n        td:nth-child(1) {\n          text-align: right;\n        }\n        #birthday_wrapper {\n          select {\n            width: 65px;\n            margin-right: 10px;\n          }\n        }\n      }\n    }\n\n    .error-msg {\n      color: #f6350a;\n      font-size: 12px;\n      margin-top: -3px;\n      margin-bottom: 5px;\n    }\n\n    input {\n      height: 25px;\n    }\n\n    input.error,\n    select.error {\n      border: 0.5px solid #f6350a;\n    }\n\n    select {\n      height: 31px;\n    }\n\n    input[type="text"],\n    input[type="email"],\n    input[type="password"] {\n      width: 100%;\n    }\n\n    input[type="submit"] {\n      background-color: #7fb930;\n      width: 125px;\n      height: 32px;\n      color: #fff;\n      font-weight: bold;\n      border: 0.5px solid #494948;\n      margin-top: 10px;\n    }\n\n    a {\n      color: #3b5998;\n      margin-top: -5px;\n    }\n\n    .error-submission {\n      background-color: #448499;\n      width: 100%;\n      margin: 20px 0;\n      padding: 7px 5px;\n      color: #fff;\n      font-size: 13px;\n    }\n  }\n']);return v=function(){return e},e}var y=j.a.section(v(),f),w=["January","February","March","April","May","June","July","August","September","October","November","December"],_=Array.from(Array(32).keys()).filter((function(e){return e>0})),S=Array.from(Array(2021).keys()).filter((function(e){return e>1910})),N=["English (US)","Espanol","Portugues (Brasil)","Francais (France)","Deutsch","Italiano","\u0639\u0631\u0628","\u092d\u093e\u0930\u0924","\u4e2d\u56fd","\u65e5\u672c"],k=["Mobile","Find Friends","Badges","People","Pages","About","Advertising","Create a Page","Developers","Careers","Privacy","Terms","Help"],F=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;var C=function(){var e=Object(a.useState)(""),n=Object(u.a)(e,2),t=n[0],i=n[1],c=Object(a.useState)(""),s=Object(u.a)(c,2),l=s[0],o=s[1],d=Object(a.useState)(""),j=Object(u.a)(d,2),b=j[0],h=j[1],x=Object(a.useState)(""),p=Object(u.a)(x,2),O=p[0],m=p[1],f=Object(a.useState)(""),v=Object(u.a)(f,2),N=v[0],k=v[1],C=Object(a.useState)(""),P=Object(u.a)(C,2),I=P[0],E=P[1],z=Object(a.useState)({month:"",day:"",year:""}),A=Object(u.a)(z,2),J=A[0],D=A[1],B=Object(a.useState)(!1),M=Object(u.a)(B,2),L=M[0],T=M[1],U=Object(a.useState)(""),V=Object(u.a)(U,2),Y=V[0],Z=V[1],$=L&&!t,G=L&&!l,W=L&&!F.test(b),H=!W&&(L&&O!==b),K=L&&N.length<8,R=L&&!I,q=L&&Object.values(J).filter((function(e){return""!==e})).length<3;return Object(a.useEffect)((function(){Y&&setTimeout((function(){Z("")}),2500)}),[Y]),Object(r.jsxs)(y,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Facebook helps you connect and share with the people in your life."}),Object(r.jsx)("div",{id:"globe_icon"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Sign Up"}),Object(r.jsx)("p",{id:"title-desc",children:"It's free and always will be."}),Object(r.jsx)("hr",{}),Object(r.jsxs)("form",{noValidate:!0,onSubmit:function(e){if(e.preventDefault(),T(!0),t&&l&&F.test(b)&&O===b&&N.length>=8&&I&&3===Object.values(J).filter((function(e){return""!==e})).length){var n=localStorage.getItem("fb_auth_user");if(n=n?JSON.parse(n):null){if(n.find((function(e){return e.email===b})))return void Z("The email you entered has been used in another account");Z(""),n.push({firstName:t,lastName:l,email:b,password:N,gender:I,birthdate:J})}else n=[{firstName:t,lastName:l,email:b,password:N,gender:I,birthdate:J}];localStorage.setItem("fb_auth_user",JSON.stringify(n)),i(""),o(""),h(""),m(""),k(""),E(""),D({month:"",day:"",year:""}),T(!1),Z("You've successfully signup. Please login with your account!")}},children:[Object(r.jsx)("table",{children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("label",{htmlFor:"first_name",children:"First Name: "})}),Object(r.jsx)("td",{children:Object(r.jsx)("input",{type:"text",id:"first_name",name:"first_name",className:$?"error":"",value:t,onChange:function(e){return i(e.target.value)}})})]}),$&&Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"error-msg",children:"Please input a valid Firstname"})})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("label",{htmlFor:"last_name",children:"Last Name: "})}),Object(r.jsx)("td",{children:Object(r.jsx)("input",{type:"text",id:"last_name",name:"last_name",className:G?"error":"",value:l,onChange:function(e){return o(e.target.value)}})})]}),G&&Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"error-msg",children:"Please input a valid Lastname"})})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("label",{htmlFor:"email",children:"Your Email: "})}),Object(r.jsx)("td",{children:Object(r.jsx)("input",{type:"email",id:"email",name:"email",className:W?"error":"",value:b,onChange:function(e){return h(e.target.value)}})})]}),W&&Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"error-msg",children:"Please input a valid Email"})})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("label",{htmlFor:"re_email",children:"Re-enter Email: "})}),Object(r.jsx)("td",{children:Object(r.jsx)("input",{type:"email",id:"re_email",name:"re_email",className:H?"error":"",value:O,onChange:function(e){return m(e.target.value)}})})]}),H&&Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"error-msg",children:"Email is not matched"})})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("label",{htmlFor:"password",children:"New Password: "})}),Object(r.jsx)("td",{children:Object(r.jsx)("input",{type:"password",id:"password",name:"password",className:K?"error":"",value:N,onChange:function(e){return k(e.target.value)}})})]}),K&&Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"error-msg",children:"Please input a valid Password (min. 8 chars)"})})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("label",{htmlFor:"gender",children:"I am: "})}),Object(r.jsx)("td",{children:Object(r.jsxs)("select",{name:"gender",id:"gender",className:R?"error":"",value:I,onChange:function(e){return E(e.target.value)},children:[Object(r.jsx)("option",{value:"",children:"Select Sex"}),Object(r.jsx)("option",{value:"Male",children:"Male"}),Object(r.jsx)("option",{value:"Female",children:"Female"})]})})]}),R&&Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"error-msg",children:"Please select a valid Gender"})})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("label",{htmlFor:"birthday",children:"Birthday: "})}),Object(r.jsxs)("td",{id:"birthday_wrapper",children:[Object(r.jsxs)("select",{name:"month",id:"birthday",className:q?"error":"",value:J.month,onChange:function(e){return D(Object(g.a)(Object(g.a)({},J),{},{month:e.target.value}))},children:[Object(r.jsx)("option",{id:"default",value:"",children:"Month:"}),w.map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))]}),Object(r.jsxs)("select",{name:"day",id:"birthday",className:q?"error":"",value:J.day,onChange:function(e){return D(Object(g.a)(Object(g.a)({},J),{},{day:e.target.value}))},children:[Object(r.jsx)("option",{id:"default",value:"",children:"Day:"}),_.map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))]}),Object(r.jsxs)("select",{name:"year",id:"birthday",className:q?"error":"",value:J.year,onChange:function(e){return D(Object(g.a)(Object(g.a)({},J),{},{year:e.target.value}))},children:[Object(r.jsx)("option",{id:"default",value:"",children:"Year:"}),S.map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))]})]})]}),q&&Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"error-msg",children:"Please select a valid Birthdate"})})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{}),Object(r.jsx)("td",{children:Object(r.jsx)("a",{href:"#",children:"Why do i need to provide my birthday?"})})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{}),Object(r.jsx)("td",{children:Object(r.jsx)("input",{type:"submit",value:"Sign Up"})})]})]})}),Y&&Object(r.jsx)("div",{className:"error-submission",children:Y})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("p",{id:"create-page",children:[Object(r.jsx)("a",{href:"#",children:"Create a Page"})," htmlFor a celebrity, band or business."]})]})]})};function P(){var e=Object(d.a)(["\n  font-size: 12px;\n  padding-bottom: 40px;\n\n  li {\n    margin-right: 20px;\n    a {\n      color: #3b5998;\n    }\n  }\n\n  ul#language {\n    display: flex;\n    list-style-type: none;\n    margin-left: 0;\n    margin-bottom: 30px;\n  }\n\n  > div {\n    display: flex;\n    justify-content: space-between;\n\n    > div:nth-child(1) {\n      li:nth-child(1) {\n        color: #9a9a9a;\n      }\n    }\n\n    ul {\n      display: flex;\n      margin: 0;\n\n      li:nth-child(1) {\n        list-style-type: none;\n      }\n    }\n  }\n"]);return P=function(){return e},e}var I=j.a.footer(P());var E=function(){return Object(r.jsxs)(I,{children:[Object(r.jsx)("ul",{id:"language",children:N.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#",children:e})},e)}))}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Facebook @ 2011"},"1"),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#",children:"English (US)"},"2")})]})}),Object(r.jsx)("ul",{children:k.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#",children:e})},e)}))})]})]})};var z=function(){return Object(r.jsxs)(h,{children:[Object(r.jsx)(m,{}),Object(r.jsx)(C,{}),Object(r.jsx)(E,{})]})};function A(){var e=Object(d.a)(["\n  min-width: 1024px;\n  background-color: #3b5998;\n  height: 50px;\n  padding: 5px 40px;\n  color: #fff;\n\n  @media only screen and (min-width: 1273px) {\n    padding-left: calc((100vw - 1233px) / 2);\n    padding-right: calc((100vw - 1233px) / 2);\n  }\n\n  > div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: calc(100% - 10px);\n\n    h4 {\n      cursor: pointer;\n    }\n\n    > div {\n      display: flex;\n\n      h4 {\n        margin: 0;\n        cursor: default;\n      }\n\n      img {\n        height: 24px;\n        width: 24px;\n        margin-left: 15px;\n      }\n    }\n  }\n\n  #content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: calc(100vh - 60px);\n\n    img {\n      height: 256px;\n      width: 256px;\n    }\n  }\n"]);return A=function(){return e},e}var J=j.a.div(A()),D=t.p+"static/media/user.4a000e6c.svg",B=t.p+"static/media/under-construction.bfade679.png";var M=function(){var e=Object(o.g)(),n=sessionStorage.getItem("fb_auth_active");n=n?JSON.parse(n):{firstName:"",lastName:""};var t="".concat(n.firstName,"  ").concat(n.lastName);return Object(r.jsxs)(J,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{onClick:function(){sessionStorage.removeItem("fb_auth_login"),sessionStorage.removeItem("fb_auth_active"),localStorage.removeItem("fb_auth_keep"),e.replace(O)},children:"Logout"}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("h4",{children:["Welcome, ",t]}),Object(r.jsx)("img",{src:D})]})]}),Object(r.jsx)("div",{id:"content",children:Object(r.jsx)("img",{src:B,alt:"Under Construction"})})]})};var L=function(){var e=function(){var e=localStorage.getItem("fb_auth_keep");e=e?JSON.parse(e):{};var n=6===Object.values(e).filter((function(e){return""!==e})).length;return sessionStorage.getItem("fb_auth_login")||n};return Object(r.jsx)(l.a,{basename:"/fb_auth_pages",children:Object(r.jsxs)(o.d,{children:[Object(r.jsx)(o.b,{exact:!0,path:"/",render:function(){return e()?Object(r.jsx)(o.a,{to:O}):Object(r.jsx)(z,{})}}),Object(r.jsx)(o.b,{path:O,render:function(){return e()?Object(r.jsx)(M,{}):Object(r.jsx)(o.a,{to:"/"})}})]})})},T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),i(e),c(e)}))};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(L,{})}),document.getElementById("root")),T()}},[[37,1,2]]]);
//# sourceMappingURL=main.0e656d89.chunk.js.map
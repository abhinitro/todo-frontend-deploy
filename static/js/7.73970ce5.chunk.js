(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[7],{435:function(e,t,r){"use strict";r.r(t);var a=r(13),o=r(14),n=r(16),l=r(15),s=r(0),i=r.n(s),c=r(17),u=r(153),d=r(181),p=r(182),g=r(197),h=r(193),m=r(194),f=r(103),b=r(89),v=r(25),y=function(e){Object(n.a)(r,e);var t=Object(l.a)(r);function r(e){var o;return Object(a.a)(this,r),(o=t.call(this,e)).handleValidSubmit=function(e,t){var r={email:t.email,password:t.password};o.props.signUserIn(r),console.log("Login Successful")},o.handleInvalidSubmit=function(e,t,r){o.setState({email:r.email,error:!0}),console.log("Login failed")},o.state={email:!1},o}return Object(o.a)(r,[{key:"render",value:function(){return i.a.createElement(b.AvForm,{onValidSubmit:this.handleValidSubmit,onInvalidSubmit:this.handleInvalidSubmit},i.a.createElement(b.AvField,{name:"email",label:"Email",type:"text",validate:{required:!0,email:!0}}),i.a.createElement(b.AvField,{name:"password",label:"Password",type:"password",validate:{required:{value:!0,errorMessage:"Please enter your password"},pattern:{value:"^[A-Za-z0-9]+$",errorMessage:"Your password must be composed only with letter and numbers"},minLength:{value:6,errorMessage:"Your password must be between 6 and 16 characters"},maxLength:{value:16,errorMessage:"Your password must be between 6 and 16 characters"}}}),i.a.createElement(f.a,{id:"submit"},"Submit"),i.a.createElement("br",null),i.a.createElement(v.b,{to:"/register"},"Create an account? "))}}]),r}(s.Component),w=(r(31),r(30),r(67)),E=function(e){Object(n.a)(r,e);var t=Object(l.a)(r);function r(e){var o;return Object(a.a)(this,r),(o=t.call(this,e)).state={},o}return Object(o.a)(r,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(p.a,null),i.a.createElement(p.a,{lg:"8"},i.a.createElement(g.a,null,i.a.createElement("h3",{class:"form-title"},i.a.createElement("u",null,"Login Form")),i.a.createElement("hr",null),i.a.createElement(h.a,null,i.a.createElement(m.a,null,i.a.createElement(y,this.props))))),i.a.createElement(p.a,null))))}}]),r}(i.a.Component);t.default=Object(c.b)((function(e){return console.log("mapStateProps",e),{errorMsg:e.error}}),{signUserIn:w.e})(E)},67:function(e,t,r){"use strict";var a=r(88),o=r.n(a),n=r(24),l=r(10),s={env:"dev",local:{url:"http://localhost:4000/"},dev:{url:"https://cards.myvisage.in/"}},i=s[s.env];r.d(t,"e",(function(){return d})),r.d(t,"f",(function(){return p})),r.d(t,"g",(function(){return g})),r.d(t,"a",(function(){return h})),r.d(t,"d",(function(){return m})),r.d(t,"c",(function(){return f})),r.d(t,"b",(function(){return b}));var c=i.url;o.a.defaults.baseURL=c,localStorage.getItem("auth_jwt_token")?o.a.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("auth_jwt_token"):console.log("Not Getting"),o.a.defaults.headers.post["Content-Type"]="application/json";var u=function(){return{headers:{Authorization:"bearer "+localStorage.getItem("auth_jwt_token")}}};function d(e){return function(t){o.a.post("users/login",e).then((function(e){console.log("response",e.data),t({type:l.b,payload:e.data}),localStorage.setItem("auth_jwt_token",e.data.token),window.location="#/dashboard",o.a.defaults.headers.common.Authorization=localStorage.getItem("auth_jwt_token")})).catch((function(e){console.log("I am here",e),n.b.error("Opps!  Server Error, try later",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),t({type:l.a,payload:"Server Error, try later."})}))}}function p(e){return function(t){o.a.post("users/register",e).then((function(e){n.b.info("Success! User is Successfully Created",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),window.location="#/login"})).catch((function(e){n.b.error("Opps!  Server Error, try later",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),t({type:l.a,payload:"Server Error, try later."})}))}}function g(e){return function(t){o.a.post("todos/update/".concat(e.id),e,u()).then((function(e){return n.b.info("Todos is Successfully Update",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),window.location="#/dashboard",e})).catch((function(e){n.b.error("Opps!  Server Error, try later",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),t({type:l.a,payload:"Server Error, try later."})}))}}function h(e){return function(t){o.a.post("todos/create",e,u()).then((function(e){n.b.info("Todos is Successfully Created",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),window.location="#/dashboard"})).catch((function(e){n.b.error("Opps!  Server Error, try later",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),t({type:l.a,payload:"Server Error, try later."})}))}}var m=function(e){return function(e){return o.a.get("todos/index",u()).then((function(t){return console.log("getTo",t),e({type:l.c,payload:t.data}),t})).catch((function(e){return console.log(e.response.data)}))}},f=function(e){return function(t){return o.a.get("todos/getById/".concat(e.id),u()).then((function(e){return console.log("getTo",e),t({type:l.d,payload:e.data}),e})).catch((function(e){return console.log(e.response.data)}))}},b=function(e){return function(t){return o.a.post("todos/delete",e,u()).then((function(e){return e})).catch((function(e){console.log("error",e.response.data)}))}}}}]);
//# sourceMappingURL=7.73970ce5.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2f9b35c4"],{"1f14":function(t,s,a){"use strict";a.r(s);var i=a("40ef"),e=a("c428"),n=a("0026"),o=a("d1c2"),r={name:"login",components:{Loading:e.a,Lheader:i.a,agentRegister:n.default},data:function(){return{isLoading:!1,login:this.$t("注册"),title:this.$t("代理登录"),active:0,list:{},isImg:!0,captchaImg:"",showPsw:!0}},methods:{showWord:function(){this.showPsw=!1,this.$refs.psw.setAttribute("type","text")},hideWord:function(){this.showPsw=!1,this.$refs.psw.setAttribute("type","password")},capt:function(){var t=this;Object(o.o)().then((function(s){t.isImg=!1,t.captchaImg=s.data.data.captcha_url}))},loginBtn:function(){var t=this;return this.list.username?this.list.password?(this.list.merchant_no="10031",this.isLoading=!0,void Object(o.q)(this.list).then((function(s){0===s.data.code?(window.localStorage.agToken=s.data.data.access_token,window.localStorage.agId=s.data.data.id,t.$router.push({path:"/agent"})):t.$toast.fail(s.data.msg)})).finally((function(){t.isLoading=!1}))):(this.$toast.fail(this.$t("请输入密码")),!1):(this.$toast.fail(this.$t("请输入账号")),!1)}},created:function(){try{var t=document.getElementsByClassName("container")[0].offsetTop;window.scrollTo(0,t)}catch(t){}}},c=(a("5b65"),a("0c7c")),l=Object(c.a)(r,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"register submit-form"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("代理登录")))]),a("div",{staticClass:"reset"},[a("span",[a("img",{staticClass:"img",attrs:{src:t.$imgs["agent/agent_icon1"],alt:""}})]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.list.username,expression:"list.username"}],attrs:{type:"text",placeholder:t.$t("请输入代理账号")},domProps:{value:t.list.username},on:{input:function(s){s.target.composing||t.$set(t.list,"username",s.target.value)}}})]),a("div",{staticClass:"reset"},[a("span",[a("img",{staticClass:"img",attrs:{src:t.$imgs["agent/agent_icon2"],alt:""}})]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.list.password,expression:"list.password"}],ref:"psw",attrs:{type:"password",placeholder:t.$t("请输入密码")},domProps:{value:t.list.password},on:{input:function(s){s.target.composing||t.$set(t.list,"password",s.target.value)}}}),t.showPsw?a("img",{staticClass:"password-view",attrs:{src:t.$imgs["agent/agent_icon3"],alt:""},on:{click:t.showWord}}):a("img",{staticClass:"password-view",attrs:{src:t.$imgs["agent/agent_icon4"],alt:""},on:{click:t.hideWord}})]),a("div",{staticClass:"error"}),a("div",{staticClass:"aagames-button-box"},[a("button",{staticClass:"aagames-button sign-in",attrs:{type:"button"},on:{click:t.loginBtn}},[t._v("\n"+t._s(t.$t("登录"))+"\n      ")])]),a("div",{staticClass:"register-fr"},[a("span",[a("router-link",{attrs:{to:"/agRevisePassword"}},[t._v(t._s("忘记密码？"))])],1),a("span",[a("router-link",{attrs:{to:"/agentAuth/register"}},[t._v(t._s("立即注册"))])],1)]),a("div",{staticClass:"customer"},[a("div",{staticClass:"wait",on:{click:function(s){return t.$router.push("/")}}},[a("img",{attrs:{src:t.$imgs["otherIcon/zaigg@2x"],alt:""}}),t._v("\n"+t._s(t.$t("再逛逛吧"))+"\n      ")]),a("div",{staticClass:"cut-up"}),a("div",{staticClass:"kefu",on:{click:t.$openKefu}},[a("img",{attrs:{src:t.$imgs["otherIcon/kefu@2x"],alt:""}}),t._v("\n"+t._s(t.$t("专属客服"))+"\n      ")])]),a("loading",{attrs:{isShow:t.isLoading,title:"登录中..."}})],1)}),[],!1,null,"a5fe35c4",null);s.default=l.exports},"5b65":function(t,s,a){"use strict";a("9dd8")},"9dd8":function(t,s,a){}}]);
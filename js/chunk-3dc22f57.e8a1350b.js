(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3dc22f57"],{"427f":function(t,s,e){"use strict";e("5cf7")},"5cf7":function(t,s,e){},bf62:function(t,s,e){"use strict";e.r(s);var i=e("40ef"),a=e("c428"),o=e("d1c2"),r=e("ed08"),n={name:"discountCore",components:{Loading:a.a,Lheader:i.a},data:function(){return{title:this.$t("修改密码"),isLoading:!1,list:{}}},created:function(){try{var t=document.getElementsByClassName("container")[0].offsetTop;window.scrollTo(0,t)}catch(t){}},methods:{submit:function(){var t=this;return this.list.old_password?this.list.password?this.list.repassword?Object(r.a)(this.list.password)?this.list.password!==this.list.repassword?(this.$toast(this.$t("两次输入密码不一致")),!1):(this.isLoading=!0,this.list.access_token=window.localStorage.agToken,void Object(o.w)(this.list).then((function(s){if(0===s.data.code){var e=t;t.$toast({message:t.$t("修改成功"),onClose:function(){window.localStorage.removeItem("agToken"),window.localStorage.removeItem("userInfoForAgent"),e.$router.push("agentLogin")}})}else t.$toast(s.data.msg)})).finally((function(){t.isLoading=!1}))):(this.$toast(this.$t("密码由8-12位英文字母或数字组成")),!1):(this.$toast(this.$t("请再次输入密码")),!1):(this.$toast.fail(this.$t("请输入新密码")),!1):(this.$toast.fail(this.$t("请输入原登录密码")),!1)}}},l=(e("427f"),e("0c7c")),d=Object(l.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container agpsw"},[e("lheader",{attrs:{title:t.title,goback:!0,"get-switch":!1}}),e("div",{staticClass:"main"},[e("div",{staticClass:"reseter"},[e("div",{staticClass:"reset"},[e("div",[e("p",[t._v(t._s(t.$t("原密码")))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.list.old_password,expression:"list.old_password"}],attrs:{type:"password",placeholder:t.$t("请输入原始密码")},domProps:{value:t.list.old_password},on:{input:function(s){s.target.composing||t.$set(t.list,"old_password",s.target.value)}}})])]),e("div",{staticClass:"reset"},[e("div",[e("p",[t._v(t._s(t.$t("新密码")))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.list.password,expression:"list.password"}],attrs:{type:"password",placeholder:"请设置新密码（6-12字母或数字）"},domProps:{value:t.list.password},on:{input:function(s){s.target.composing||t.$set(t.list,"password",s.target.value)}}})])]),e("div",{staticClass:"reset"},[e("div",[e("p",[t._v(t._s(t.$t("确认新密码")))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.list.repassword,expression:"list.repassword"}],attrs:{type:"password",placeholder:t.$t("再次输入密码")},domProps:{value:t.list.repassword},on:{input:function(s){s.target.composing||t.$set(t.list,"repassword",s.target.value)}}})])])])]),e("loading",{attrs:{isShow:t.isLoading,title:t.$t("提交中...")}})],1)}),[],!1,null,"50fdd1e0",null);s.default=d.exports}}]);
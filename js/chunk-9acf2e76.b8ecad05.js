(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9acf2e76"],{"2d6d":function(t,s,e){"use strict";e("bc11")},"58aa":function(t,s,e){"use strict";e.r(s),e("8e6e"),e("ac6a"),e("456d");var a=e("ade3"),i=e("40ef"),o=e("fe01"),l=(e("bd8a"),e("2f62"));function r(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,a)}return e}function n(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?r(Object(e),!0).forEach((function(s){Object(a.a)(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}var c={name:"Personal",components:{Lheader:i.a},data:function(){return{display:!1,drawerWidth:"100%",emailDisplay:!1,telDisplay:!1,passDisplay:!1,loginDisplay:!1,proDisplay:!1,idDisplay:!1,list:{},data:{merchant_no:"10031",access_token:window.localStorage.token},isName:!1,title:this.$t("账号安全"),levelText:"",level:"",answer:"",password:"",getColor:"centre",isFirstSetPassword:1,uid:"",accountShow:!1,isShowSave:!1,showDate:!1,minDate:new Date(1970,0,1),currentDate:null}},computed:n({getSafe:function(){return"low"==this.getColor?"red":"centre"==this.getColor?"yellow":"high"==this.getColor?"green":void 0}},Object(l.d)("users",["userInfo"])),watch:{userInfo:{handler:function(t){this.list=Object.assign({},t),this.list.realname&&(this.isName=!0),this.uid=t.id,this.level=t.password_level,this.answer=t.is_pass_answer,this.password=t.is_pay_password,this.isFirstSetPassword=1===t.is_first_set_pass,!this.level&&this.isFirstSetPassword?(this.levelText=this.$t("设置密码"),this.getColor="normal"):1===this.level?(this.levelText=this.$t("强度为低"),this.getColor="low"):2===this.level?(this.levelText=this.$t("强度为中"),this.getColor="centre"):(this.levelText=this.$t("强度为强"),this.getColor="high")},deep:!0}},created:function(){this.currentDate=new Date,this.list=Object.assign({},this.userInfo),this.list.realname&&(this.isName=!0),this.uid=this.userInfo.id,this.level=this.userInfo.password_level,this.answer=this.userInfo.is_pass_answer,this.password=this.userInfo.is_pay_password,this.isFirstSetPassword=1===this.userInfo.is_first_set_pass,!this.level&&this.isFirstSetPassword?(this.levelText=this.$t("设置密码"),this.getColor="normal"):1===this.level?(this.levelText=this.$t("强度为低"),this.getColor="low"):2===this.level?(this.levelText=this.$t("强度为中"),this.getColor="centre"):(this.levelText=this.$t("强度为强"),this.getColor="high")},methods:n(n({},Object(l.b)("global",["setPopShow"])),{},{tosetQues:function(){2==this.answer?this.$router.push({path:"/verifyIdentity"}):(this.accountShow=!0,this.setPopShow({proDisplay:!0,status:!0}))},submit:function(){var t=this;return this.isShowSave=!0,this.list.realname?this.list.nick_name?void Object(o.v)(this.list).then((function(s){0===s.data.code?(t.$toast(t.$t("保存成功")),t.$store.dispatch("users/getUserInfo")):t.$toast.fail(s.data.msg)})):(this.$toast.fail(this.$t("请输入昵称")),!1):(this.$toast.fail(this.$t("请输入真实姓名")),!1)},setContact:function(t){1==t?this.setPopShow({telDisplay:!0,status:!0}):2==t&&this.setPopShow({emailDisplay:!0,status:!0})},open:function(t){this.accountShow=!0,1==t?this.setPopShow({loginDisplay:!0,status:!0}):2==t?this.setPopShow({passDisplay:!0,status:!0}):2==this.answer?this.setPopShow({idDisplay:!0,status:!0}):this.setPopShow({proDisplay:!0,status:!0})},goback:function(){this.$router.push("memberCenter")},onConfirmDate:function(t){var s=t,e=s.getMonth()+1,a=s.getDate();e>=1&&e<=9&&(e="0"+e),a>=0&&a<=9&&(a="0"+a),this.list.birthday=s.getFullYear()+"-"+e+"-"+a,this.showDate=!1},onCancelDate:function(){this.showDate=!1}})},h=(e("2d6d"),e("0c7c")),p=Object(h.a)(c,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"accountSafe-page"},[e("van-nav-bar",{staticClass:"m-header",attrs:{title:t.title,"left-arrow":"",fixed:!0},on:{"click-left":t.goback,"click-right":t.$openKefu},scopedSlots:t._u([{key:"right",fn:function(){return[e("img",{staticClass:"kf-icon",attrs:{src:t.$imgs["otherIcon/nav_kefu@2x"],alt:""}})]},proxy:!0}])}),e("div",{staticClass:"reset"},[e("div",{staticClass:"aagames-select-box aagames-select-tit"},[e("div",{staticClass:"personal-title"},[t._v(t._s(t.$t("个人资料")))])]),e("div",{staticClass:"aagames-select-box"},[e("div",{staticClass:"select"},[e("img",{attrs:{src:t.$imgs["personalData/user"]}}),e("span",[t._v(t._s(t.$t("昵称")))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.list.nick_name,expression:"list.nick_name"}],attrs:{type:"text",placeholder:t.$t("您未填写昵称")},domProps:{value:t.list.nick_name},on:{focus:function(s){t.isShowSave=!0},input:function(s){s.target.composing||t.$set(t.list,"nick_name",s.target.value)}}})])]),e("div",{staticClass:"aagames-select-box"},[e("div",{staticClass:"select"},[e("img",{attrs:{src:t.$imgs["personalData/user"]}}),e("span",[t._v(t._s(t.$t("真实姓名")))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.list.realname,expression:"list.realname"}],staticStyle:{background:"none"},attrs:{type:"text",disabled:t.list.realname&&t.isName,placeholder:t.$t("请输入与银行卡一致的真实姓名")},domProps:{value:t.list.realname},on:{focus:function(s){t.isShowSave=!0},input:function(s){s.target.composing||t.$set(t.list,"realname",s.target.value)}}})])]),e("div",{staticClass:"aagames-select-box"},[e("div",{staticClass:"select"},[e("img",{attrs:{src:t.$imgs["personalData/birthday"]}}),e("span",[t._v(t._s(t.$t("出生日期")))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.list.birthday,expression:"list.birthday"}],attrs:{type:"text",placeholder:t.$t("请输入出生日期"),readonly:""},domProps:{value:t.list.birthday},on:{focus:function(s){t.showDate=!0},input:function(s){s.target.composing||t.$set(t.list,"birthday",s.target.value)}}})])]),e("div",{staticClass:"aagames-select-box"},[e("div",{staticClass:"select"},[e("img",{attrs:{src:t.$imgs["personalData/wechat"]}}),e("span",[t._v(t._s(t.$t("微信号")))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.list.wechat,expression:"list.wechat"}],attrs:{type:"text",placeholder:t.$t("您未填写微信")},domProps:{value:t.list.wechat},on:{focus:function(s){t.isShowSave=!0},input:function(s){s.target.composing||t.$set(t.list,"wechat",s.target.value)}}})])]),e("div",{staticClass:"aagames-select-box"},[e("div",{staticClass:"select"},[e("img",{attrs:{src:t.$imgs["personalData/qq"]}}),e("span",[t._v(t._s(t.$t("QQ 号")))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.list.qq,expression:"list.qq"}],attrs:{type:"text",placeholder:t.$t("您未填写QQ，立即填写")},domProps:{value:t.list.qq},on:{focus:function(s){t.isShowSave=!0},input:function(s){s.target.composing||t.$set(t.list,"qq",s.target.value)}}})])]),e("div",{staticClass:"aagames-select-box aagames-select-tit"},[e("div",{staticClass:"personal-title"},[t._v(t._s(t.$t("账户绑定")))])]),e("div",{staticClass:"aagames-select-box"},[e("div",{staticClass:"select"},[e("img",{attrs:{src:t.$imgs["personalData/shouji"]}}),e("span",[t._v(t._s(t.$t("手机号")))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.list.mobile,expression:"list.mobile"}],attrs:{type:"text",placeholder:t.$t("立即绑定"),readonly:""},domProps:{value:t.list.mobile},on:{click:function(s){return t.setContact(1)},input:function(s){s.target.composing||t.$set(t.list,"mobile",s.target.value)}}}),e("van-icon",{attrs:{name:"arrow"}})],1)]),e("div",{staticClass:"aagames-select-box"},[e("div",{staticClass:"select"},[e("img",{attrs:{src:t.$imgs["personalData/mail"]}}),e("span",[t._v(t._s(t.$t("邮箱地址")))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.list.email,expression:"list.email"}],attrs:{type:"text",placeholder:t.$t("立即绑定"),readonly:""},domProps:{value:t.list.email},on:{click:function(s){return t.setContact(2)},input:function(s){s.target.composing||t.$set(t.list,"email",s.target.value)}}}),e("i",{staticClass:"el-icon-arrow-right",style:{backgroundImage:t.$bImgs["otherIcon/arrow-right"]}})])]),e("div",{staticClass:"aagames-select-box aagames-select-tit"},[e("div",{staticClass:"personal-title"},[t._v(t._s(t.$t("安全设置")))])]),e("div",{staticClass:"aagames-select-box"},[e("div",{staticClass:"select"},[e("img",{attrs:{src:t.$imgs["personalData/pass"]}}),e("span",[t._v(t._s(t.$t("登录密码")))]),e("input",{class:t.getSafe,attrs:{type:"text",readonly:""},domProps:{value:t.levelText},on:{click:function(s){return t.open(1)}}}),e("i",{staticClass:"el-icon-arrow-right",style:{backgroundImage:t.$bImgs["otherIcon/arrow-right"]}})])]),e("div",{staticClass:"aagames-select-box",on:{click:function(s){return t.open(2)}}},[e("div",{staticClass:"select"},[e("img",{attrs:{src:t.$imgs["personalData/zjmm"]}}),e("span",[t._v(t._s(t.$t("资金密码")))]),e("span",{class:["input-tips",{red:1==t.password}]},[t._v(t._s(1==t.password?t.$t("您未设置资金密码"):t.$t("已设置资金密码")))]),e("i",{staticClass:"el-icon-arrow-right",style:{backgroundImage:t.$bImgs["otherIcon/arrow-right"]}})])]),e("div",{staticClass:"aagames-select-box mb40",on:{click:function(s){return t.open(3)}}},[e("div",{staticClass:"select"},[e("img",{attrs:{src:t.$imgs["personalData/mbwt"]}}),e("span",[t._v(t._s(t.$t("密保问题")))]),e("span",{class:["input-tips",{red:1===t.answer}]},[t._v(t._s(1===t.answer?t.$t("您未设置密保问题"):t.$t("已设置密保问题")))]),e("i",{staticClass:"el-icon-arrow-right",style:{backgroundImage:t.$bImgs["otherIcon/arrow-right"]}})])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowSave,expression:"isShowSave"}],staticClass:"aagames-button-box"},[e("button",{staticClass:"aagames-button",attrs:{type:"button"},on:{click:t.submit}},[t._v(t._s(t.$t("保存")))])])]),e("van-popup",{attrs:{position:"bottom","get-container":"#app"},model:{value:t.showDate,callback:function(s){t.showDate=s},expression:"showDate"}},[e("van-datetime-picker",{attrs:{type:"date",title:t.$t("请选择出生日期"),"min-date":t.minDate},on:{confirm:t.onConfirmDate,cancel:t.onCancelDate},model:{value:t.currentDate,callback:function(s){t.currentDate=s},expression:"currentDate"}})],1)],1)}),[],!1,null,"1c76ff7c",null);s.default=p.exports},bc11:function(t,s,e){}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9ac9fa0e"],{"05f0":function(t,s,e){},"3b89":function(t,s,e){"use strict";e.r(s),e("7f7f");var a=e("ca47"),i=e("0982"),o=e("fe01"),n=e("bd8a"),r=e("2b0e"),c=e("d399");r.a.use(c.a);var l={name:"ForgetPassword",data:function(){return{login:"",title:this.$t("身份验证"),active:0,isAgree:!0,show:!1,showWay:!1,retrieve:!0,step:2,username:"",userSafeinfo:{},vertifyWays:[],selectWay:{},questionList:null,question:"",answer:"",forgetpassList:{},errorShow:!1,code:"",getCode:"",password:"",repassword:"",canClick:!0,totalTime:60,clock:"",content:this.$t("获取验证码"),setAnswer:{question_id:"",answer:"",re_answer:""},problem:"",stepType:2,type:0,showKeyboard:!1,showKeyboard1:!1,showKeyboard2:!1,setPassData:{password:"",repassword:"",old_password:"",is_reset:1},aoMenUi:["10009","10010","10011","10012","10034"],userInfo:null}},props:{routeType:{type:String,default:"memberCenter"}},components:{Lheader:a.a,SecurityStep:i.a},created:function(){var t=this;this.userInfo=JSON.parse(localStorage.getItem("userInfo")),Object(o.p)().then((function(s){0===s.data.code&&(t.questionList=s.data.data,t.checkUserInfo())}))},watch:{step:function(t){if("withdraw"==this.routeType){var s=["",this.$t("身份验证"),this.$t("设置新资金密码")];this.title=s[t-1]}else{var e=["",this.$t("身份验证"),this.$t("设置新密保问题")];this.title=e[t-1]}},routeType:function(t){this.stepType="withdraw"==t?3:2}},methods:{close:function(){this.$router.go(-1)},checkUserInfo:function(){var t=this;this.vertifyWays=[],Object(o.g)({merchant_no:"10039",username:this.userInfo.username}).then((function(s){if(0===s.data.code){t.userSafeinfo=s.data.data;var e=t.userSafeinfo,a=e.mobile,i=e.email,o=e.pass_question_id;if(!a&&!i&&!o)return t.errorShow=!0,t.step=10,!1;if(a&&t.vertifyWays.push({text:t.$t("手机号验证"),type:"mobile"}),i&&t.vertifyWays.push({text:t.$t("邮箱验证"),type:"email"}),o){t.vertifyWays.push({text:t.$t("密保验证"),type:"question"});for(var n=0;n<t.questionList.length;n++)if(t.questionList[n].id===o){t.question=t.questionList[n];break}}t.vertifyWays.length&&(t.selectWay=t.vertifyWays[0],t.step=2)}}))},forgetFn:function(){var t,s=this,e={merchant_no:"10039",uid:this.userSafeinfo.id},a=this.answer,i=this.code,n=this.question,r=this.selectWay.type;if("question"===r)a||this.$toast.fail(this.$t("请输入密保问题答案")),Object.assign(e,{pass_question_id:n.id,pass_answer:a}),t=Object(o.m)(e);else{if(!i)return this.$toast.fail(this.$t("请输入验证码")),!1;Object.assign(e,{code:i,phone_area_code:this.userSafeinfo.phone_area_code}),"mobile"===r?t=Object(o.h)(e):"email"===r&&(t=Object(o.j)(e))}t&&t.then((function(t){0===t.data.code?s.step=3:Object(c.a)(t.data.msg)}))},onConfirm:function(t){this.problem=t.name,this.setAnswer.question_id=t.id,this.show=!1},onConfirmWay:function(t){this.selectWay=t,this.content=this.$t("获取验证码"),this.canClick=!0,window.clearInterval(this.clock),this.totalTime=60,this.showWay=!1},onCancel:function(t){this.show=!1,this.showWay=!1},phoneCode:function(){var t=this;Object(o.l)({merchant_no:"10039",uid:this.userSafeinfo.id,phone_area_code:this.userSafeinfo.phone_area_code}).then((function(s){0==s.data.code?t.getCode=s.data.data.code:(t.$toast.fail(s.data.msg),window.clearInterval(t.clock),t.content=t.$t("重新发送验证码"),t.totalTime=60,t.canClick=!0)}))},emailCode:function(){var t=this;Object(o.i)({merchant_no:"10039",uid:this.userSafeinfo.id}).then((function(s){0==s.data.code?t.getCode=s.data.data.code:(Object(c.a)(s.data.msg),window.clearInterval(t.clock),t.content=t.$t("重新发送验证码"),t.totalTime=60,t.canClick=!0)}))},countDown:function(){var t=this;this.canClick&&(this.canClick=!1,"mobile"===this.selectWay.type?this.phoneCode():this.emailCode(),this.content=this.totalTime+this.$t("秒后重新发送"),this.clock=window.setInterval((function(){t.totalTime--,t.content=t.totalTime+t.$t("秒后重新发送"),t.totalTime<0&&(window.clearInterval(t.clock),t.content=t.$t("重新发送验证码"),t.totalTime=60,t.canClick=!0)}),1e3))},onInput:function(t){0===this.type?this.setPassData.old_password=(this.setPassData.old_password+t).slice(0,6):1===this.type?this.setPassData.password=(this.setPassData.password+t).slice(0,6):this.setPassData.repassword=(this.setPassData.repassword+t).slice(0,6)},onDelete:function(){0===this.type?this.setPassData.old_password=this.setPassData.old_password.slice(0,this.setPassData.old_password.length-1):1===this.type?this.setPassData.password=this.setPassData.password.slice(0,this.setPassData.password.length-1):this.setPassData.repassword=this.setPassData.repassword.slice(0,this.setPassData.repassword.length-1)},changeKeyboard:function(t,s){this.showKeyboard=!0,this.type=t,this.$emit("changPass",!0),1==t?(this.showKeyboard1=!0,this.showKeyboard2=!1):(this.showKeyboard2=!0,this.showKeyboard1=!1)},blurKeyboard:function(){this.showKeyboard=!1,this.$emit("changPass",!1)},hideKeyboard:function(){this.submit()},submit:function(){"withdraw"==this.routeType?this.saveCapitalPassword():this.savePassProblem()},savePassProblem:function(){var t=this;return this.setAnswer.answer?this.setAnswer.answer!==this.setAnswer.re_answer?(this.$toast.fail("2次输入答案不同"),!1):void Object(o.s)(this.setAnswer).then((function(s){var e=t;0===s.data.code?Object(c.a)({message:t.$t("密保设置成功"),onClose:function(){e.$store.dispatch("users/getUserInfo"),e.$store.dispatch("global/setPopShow",{status:!1}),e.$router.push({path:"/personalData"})}}):t.$toast.fail(s.data.msg)})):(this.$toast.fail(this.$t("答案不能为空")),!1)},saveCapitalPassword:function(){var t=this;return this.setPassData.password.length<6||this.setPassData.repassword.length<6||this.setPassData.old_password.length<6&&this.setPassData.old_password?(this.$toast.fail(this.$t("资金密码6个数字组成")),!1):this.setPassData.password!==this.setPassData.repassword?(this.$toast.fail("2次输入密码不同"),!1):(this.setPassData.access_token=window.localStorage.token,1==this.setPassType&&(this.setPassData.is_reset=1),void Object(n.S)(this.setPassData).then((function(s){var e=t;0===s.data.code?(t.setPassType=0,Object(c.a)({message:t.$t("资金密码设置成功"),onClose:function(){e.$route.query.getPath?e.$router.push(e.$route.query.getPath):(e.$store.dispatch("users/getUserInfo"),e.$store.dispatch("global/setPopShow",{status:!1}))}})):t.$toast.fail(s.data.msg)})))},bindMsg:function(){this.$router.push("/personalData"),this.$store.dispatch("global/setPopShow",{status:!1})}}},d=(e("8dbe"),e("0c7c")),u=Object(d.a)(l,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container verify"},[a("lheader",{attrs:{title:t.title,isPopup:!0,kefu:!1,isLogin:t.login},on:{goback:t.close}}),a("div",{staticClass:"main"},[t.step<10?a("SecurityStep",{attrs:{step:t.step,type:"withdraw"==t.routeType?3:2}}):t._e(),1===t.step?a("div",[a("div",{staticClass:"aagames-form"},[a("div",{staticClass:"input username"},[t.aoMenUi.includes(t.$projectname)?a("img",{staticClass:"img",staticStyle:{"margin-right":"6px"},attrs:{src:e("ce82"),alt:""}}):a("img",{staticClass:"img",staticStyle:{"margin-right":"6px"},attrs:{src:t.$imgs["otherIcon/user@2x"],alt:""}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:t.$t("请输入账户名或手机号")},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}})])]),a("div",{staticClass:"aagames-button-box step-one"},[a("button",{staticClass:"aagames-button dark",attrs:{type:"button"},on:{click:t.checkUserInfo}},[t._v(t._s(t.$t("下一步")))])])]):t._e(),10===t.step?a("div",{staticClass:"no-binding"},[a("div",{staticClass:"msg"},[t._v(t._s(t.$t("由于您未绑定手机号")))]),a("div",{staticClass:"aagames-button-box"},[a("button",{staticClass:"aagames-button dark",attrs:{type:"button"},on:{click:t.bindMsg}},[t._v(t._s(t.$t("绑定资料")))]),a("div",{staticClass:"px30"}),a("button",{staticClass:"aagames-button dark",attrs:{type:"button"},on:{click:t.$openKefu}},[t._v(t._s(t.$t("在线客服解决")))])])]):2===t.step?a("div",{staticClass:"retrievePassword"},[t.selectWay?[a("div",{staticClass:"aagames-form verification"},[a("div",{staticClass:"input",on:{click:function(s){t.showWay=!0}}},[a("van-icon",{staticClass:"xiala",attrs:{name:"arrow-down"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectWay.text,expression:"selectWay.text"}],attrs:{type:"text",disabled:"",placeholder:t.$t("请选择验证方式")},domProps:{value:t.selectWay.text},on:{input:function(s){s.target.composing||t.$set(t.selectWay,"text",s.target.value)}}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:"mobile"===t.selectWay.type,expression:"selectWay.type === 'mobile'"}],staticClass:"aagames-form verification"},[a("p",[a("span",[t._v(t._s(t.$t("已绑定手机")))]),t._v("\n            "+t._s(t.userSafeinfo.mobile)+"\n          ")]),a("div",{staticClass:"code"},[a("div",{staticClass:"input"},[t.aoMenUi.includes(t.$projectname)?a("img",{staticClass:"img",staticStyle:{"margin-right":"6px"},attrs:{src:e("6e24"),alt:""}}):a("img",{staticClass:"img",staticStyle:{"margin-right":"6px"},attrs:{src:t.$imgs["otherIcon/mbwt@2x"],alt:""}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{type:"text",placeholder:t.$t("请输入验证码")},domProps:{value:t.code},on:{input:function(s){s.target.composing||(t.code=s.target.value)}}})]),a("div",{staticClass:"send",style:{width:t.content.length>5?"5rem":""},on:{click:t.countDown}},[t._v(t._s(t.content))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"email"===t.selectWay.type,expression:"selectWay.type === 'email'"}],staticClass:"aagames-form verification"},[a("p",[a("span",[t._v(t._s(t.$t("已绑定邮箱")))]),t._v("\n            "+t._s(t.userSafeinfo.email)+"\n          ")]),a("div",{staticClass:"code"},[a("div",{staticClass:"input"},[t.aoMenUi.includes(t.$projectname)?a("img",{staticClass:"img",staticStyle:{"margin-right":"6px"},attrs:{src:e("6e24"),alt:""}}):a("img",{staticClass:"img",staticStyle:{"margin-right":"6px"},attrs:{src:t.$imgs["otherIcon/mbwt@2x"],alt:""}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{type:"text",placeholder:t.$t("请输入验证码")},domProps:{value:t.code},on:{input:function(s){s.target.composing||(t.code=s.target.value)}}})]),a("div",{staticClass:"send",on:{click:t.countDown}},[t._v(t._s(t.content))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"question"===t.selectWay.type,expression:"selectWay.type === 'question'"}],staticClass:"aagames-form verification"},[a("p",{staticStyle:{"padding-left":".3rem"}},[a("span",[t._v(t._s(t.$t("密保问题")))]),t._v("\n            "+t._s(t.question.name)+"\n          ")]),a("div",{staticClass:"code"},[a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],attrs:{type:"text",placeholder:t.$t("请输入答案")},domProps:{value:t.answer},on:{input:function(s){s.target.composing||(t.answer=s.target.value)}}})])])]),a("div",{staticClass:"aagames-button-box"},[a("button",{class:["aagames-button",{dark:!t.code&&!t.answer}],attrs:{type:"button",disabled:!t.code&&!t.answer},on:{click:t.forgetFn}},[t._v(t._s(t.$t("下一步")))])])]:t._e()],2):3===t.step?a("div",{staticClass:"reset"},["withdraw"==t.routeType?[a("div",{staticClass:"input-cells"},[a("div",{staticClass:"aagames-form"},[a("p",{staticClass:"label-text"},[t._v(t._s(t.$t("请输入新资金密码")))]),a("van-password-input",{attrs:{value:t.setPassData.password,focused:t.showKeyboard1,length:6,gutter:"11"},on:{focus:function(s){return t.changeKeyboard(1)}}})],1)]),a("div",{staticClass:"input-cells"},[a("div",{staticClass:"aagames-form"},[a("p",{staticClass:"label-text"},[t._v(t._s(t.$t("确认新资金密码")))]),a("van-password-input",{attrs:{value:t.setPassData.repassword,focused:t.showKeyboard2,length:6,gutter:"11"},on:{focus:function(s){return t.changeKeyboard(2)}}})],1)])]:[a("div",{staticClass:"input-cells"},[a("div",{staticClass:"aagames-form"},[a("div",{staticClass:"select"},[a("van-icon",{staticClass:"xiala",attrs:{name:"arrow-down"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.problem,expression:"problem"}],staticClass:"centre",attrs:{type:"text",readonly:"",placeholder:t.$t("请选择密保问题")},domProps:{value:t.problem},on:{click:function(s){t.show=!0},input:function(s){s.target.composing||(t.problem=s.target.value)}}})],1)])]),a("div",{staticClass:"input-cells"},[a("div",{staticClass:"aagames-form"},[a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.setAnswer.answer,expression:"setAnswer.answer"}],attrs:{type:"text",placeholder:t.$t("请输入密保答案")},domProps:{value:t.setAnswer.answer},on:{input:function(s){s.target.composing||t.$set(t.setAnswer,"answer",s.target.value)}}})])])]),a("div",{staticClass:"input-cells"},[a("div",{staticClass:"aagames-form"},[a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.setAnswer.re_answer,expression:"setAnswer.re_answer"}],attrs:{type:"text",placeholder:t.$t("请再次输入密保答案")},domProps:{value:t.setAnswer.re_answer},on:{input:function(s){s.target.composing||t.$set(t.setAnswer,"re_answer",s.target.value)}}})])])])],a("div",{directives:[{name:"show",rawName:"v-show",value:"withdraw"!=t.routeType,expression:"routeType != 'withdraw'"}],staticClass:"aagames-button-box"},[a("button",{class:["aagames-button",{dark:"withdraw"==t.routeType?!t.setPassData.password||!t.setPassData.repassword:!t.setAnswer.answer||!t.setAnswer.re_answer||!t.problem}],attrs:{type:"button",disabled:!t.setPassData.password&&!t.setPassData.repassword&&!t.problem},on:{click:t.submit}},[t._v(t._s(t.$t("完成")))])])],2):t._e(),a("van-popup",{attrs:{"get-container":"#app",position:"bottom"},model:{value:t.show,callback:function(s){t.show=s},expression:"show"}},[a("van-picker",{attrs:{"show-toolbar":"","value-key":"name",columns:t.questionList},on:{confirm:t.onConfirm,cancel:t.onCancel}})],1),a("van-popup",{attrs:{"get-container":"#app",position:"bottom"},model:{value:t.showWay,callback:function(s){t.showWay=s},expression:"showWay"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:t.vertifyWays},on:{confirm:t.onConfirmWay,cancel:t.onCancel}})],1)],1),a("van-number-keyboard",{attrs:{"safe-area-inset-bottom":"",show:t.showKeyboard},on:{input:t.onInput,delete:t.onDelete,blur:t.blurKeyboard,hide:t.hideKeyboard}})],1)}),[],!1,null,"c59992de",null);s.default=u.exports},"8dbe":function(t,s,e){"use strict";e("05f0")}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2699d2d3"],{"0c3b":function(t,e,i){"use strict";i.r(e),i("c5f6");var s=i("7555"),o=i("2f3b"),a=i("40ef"),n=i("3b95"),c=i("86ae"),r=i("ed08"),l={mixins:[i("1b62").a],name:"register",components:{Gcode:n.a,Lheader:a.a,Rocket:c.a},data:function(){return{login:this.$t("登录"),title:this.$t("账号注册"),tab:[this.$t("账号注册"),this.$t("一键注册"),this.$t("手机号注册")],active:0,isAgree:!0,mobile:"",code:"",getCode:"",openAccount:{account:"",password:"",againPassword:""},loading:!1,columns:[],show:!1,mobileShow:!1,areaCode:86,registerSettingType:1,register_setting:{username_register:1,quick_register:1},copyright:"AAGames",mobileReg:/^1[3456789]\d{9}$/,canClick:!0,totalTime:60,clock:"",content:this.$t("获取验证码")}},watch:{active:function(t){this.registerSettingType=0===t?this.register_setting.username_register:1===t?this.register_setting.quick_register:1}},mounted:function(){var t=this;Object(o.g)("10031").then((function(e){if(0===e.data.code){var i=e.data.data,s=i.h5_register_setting;t.copyright=i.title,t.register_setting.username_register=Number(s.username_register),t.register_setting.quick_register=Number(s.quick_register),0===t.active?t.registerSettingType=Number(s.username_register):1===t.active?t.registerSettingType=Number(s.quick_register):t.registerSettingType=1}})),Object(s.g)().then((function(e){0===e.data.code&&(t.columns=e.data.data)}))},methods:{tabChange:function(t,e){this.active=t,this.title=e},getCodeC:function(t){this.getCode=t},myCodeC:function(t){this.code=t},applySubmitForm:function(){var t=this.active,e=this.registerSettingType;this.validRegisterForm()&&(0===t?e<2?this.userRegister():this.mobileShow=!0:1===t?e<2?this.quickRegister():this.mobileShow=!0:2===t&&this.mobileRegister())},userRegister:function(t){var e=this;this.loading=!0;var i=this.openAccount,o=Object.assign({username:i.account,password:i.password,repassword:i.againPassword,domain:window.location.host,id:window.sessionStorage.getItem("agentCode")||"",spread_code:window.sessionStorage.getItem("spread_code")||""},t);Object(s.j)(o).then((function(t){0===t.data.code?(e.afterRegister(o,"username"),window.sessionStorage.removeItem("agentCode"),window.sessionStorage.removeItem("spread_code")):e.$toast.fail(t.data.msg)}),(function(t){e.loading=!1}))},quickRegister:function(t){var e=this;this.loading=!0;var i=Object.assign({domain:window.location.host,id:window.sessionStorage.getItem("agentCode")||"",spread_code:window.sessionStorage.getItem("spread_code")||""},t);Object(s.i)(i).then((function(t){0===t.data.code?(e.afterRegister(t.data.data,"quick"),window.sessionStorage.removeItem("agentCode"),window.sessionStorage.removeItem("spread_code")):e.$toast.fail(t.data.msg)}),(function(t){e.loading=!1}))},mobileRegister:function(t){var e=this;this.loading=!0;var i=this.mobile,o=this.code,a=this.areaCode,n=Object.assign({domain:window.location.host,mobile:i,code:o,phone_area_code:"+"+a,id:window.sessionStorage.getItem("agentCode")||"",spread_code:window.sessionStorage.getItem("spread_code")||""},t);Object(s.f)(n).then((function(t){0===t.data.code?(e.afterRegister(t.data.data,"mobile"),window.sessionStorage.removeItem("agentCode"),window.sessionStorage.removeItem("spread_code")):e.$toast.fail(t.data.msg)}),(function(t){e.loading=!1}))},afterRegister:function(t,e){var i=this;window.localStorage.setItem("registerUser",JSON.stringify({username:t.username||this.openAccount.account,password:t.password||this.openAccount.password,type:e})),Object(s.d)({username:t.username||this.openAccount.account,password:t.password||this.openAccount.password}).then((function(t){if(i.loading=!1,0===t.data.code){var e=t.data.data;i.$store.dispatch("users/updateToken",e.access_token),i.$store.dispatch("users/getUserInfo"),i.$router.push({name:"registerSuccess"})}}))},validRegisterForm:function(){var t=this.openAccount,e=t.account,i=t.password,s=t.againPassword,o=this.isAgree,a=this.active,n=this.mobile,c=this.mobileReg,l=this.code;if(!o)return this.$toast.fail(this.$t("请同意并接受《游戏条款》")),!1;if(0===a){if(!Object(r.d)(e))return this.$toast.fail(this.$t("请输入6-12位英文、数字")),!1;if(!Object(r.c)(i))return this.$toast.fail(this.$t("密码格式有误")),!1;if(i!==s)return this.$toast.fail(this.$t("两次密码不一致")),!1}else if(2===a){if(!c.test(n))return this.$toast.fail(this.$t("手机格式有误")),!1;if(!l)return this.$toast.fail(this.$t("验证码输入有误")),!1}return!0},validMobileVerifyForm:function(){var t=this.mobile,e=this.code,i=(this.active,this.registerSettingType),s=this.mobileReg;return i>2&&!t?(this.$toast.fail(this.$t("请输入手机号码")),!1):(2===i&&t||i>2)&&!s.test(t)?(this.$toast.fail(this.$t("请输入正确的手机号码")),!1):!(4===i&&!e)||(this.$toast.fail(this.$t("请输入验证码")),!1)},beforeMobileClose:function(t,e){var i=this.registerSettingType,s=this.active;if("cancel"===t){if(i>2)this.$toast.fail(this.$t("拒绝后将无法成功注册账号")),e();else if(2==i)if(this.validMobileVerifyForm()){var o={};0!==s&&1!==s||(i>1&&(o.mobile=this.mobile),4===i&&(o.code=this.code)),0===s?this.userRegister(o):1===s&&this.quickRegister(o),2===s&&this.mobileRegister(),e()}else e(!1)}else if("confirm"===t)if(this.validMobileVerifyForm()){var a={};0!==s&&1!==s||(i>1&&(a.mobile=this.mobile),4===i&&(a.code=this.code)),0===s?this.userRegister(a):1===s&&this.quickRegister(a),2===s&&this.mobileRegister(),e()}else e(!1)},cancelReg:function(){var t=this.registerSettingType,e=this.active;if(t>2)this.$toast.fail(this.$t("拒绝后将无法成功注册账号")),this.mobileShow=!1;else if(2==t)if(this.validMobileVerifyForm()){var i={};0!==e&&1!==e||(t>1&&(i.mobile=this.mobile),4===t&&(i.code=this.code)),0===e?this.userRegister(i):1===e&&this.quickRegister(i),2===e&&this.mobileRegister(),this.mobileShow=!1}else this.mobileShow=!0},confirmReg:function(){var t=this.registerSettingType,e=this.active;if(this.validMobileVerifyForm()){var i={};0!==e&&1!==e||(t>1&&(i.mobile=this.mobile),4===t&&(i.code=this.code)),0===e?this.userRegister(i):1===e&&this.quickRegister(i),2===e&&this.mobileRegister(),this.mobileShow=!1}else this.mobileShow=!0},onConfirm:function(t){this.show=!1,this.areaCode=t},onCancel:function(t){this.show=!1},showProtocol:function(){var t='<ol class="protocol">'+"<li>".concat($t("用户在进行游戏前应核实其所在地区进行线上游戏是否符合当地法律。"),"</li>")+"<li>".concat($t("为避免任何争议，各用户在参与本网站所有游戏过程中，或在结束参与本网站所提供的游戏前，必须检查会员帐户内的资料是否正确。若发现有错误，请即时与所属的代理商联络。客户若不能提供充份的数据，其帐户内之一切数据或历史数据，以本公司资料库中的资料为准，用户不得异议。"),"</li>")+"<li>".concat($t("本网站只向符合法定年龄的用户提供服务，用户须注意其居住地区的法律年龄限制，在不违反年龄限制之下才可使用本网站服务。"),"</li>")+"<li>".concat($t("本公司将不承担任何用户因违反当地相关法律而引起之任何责任。"),"</li>")+"<li>".concat($t("任何用户在参与本公司所有游戏而引起导致违反当地法律之任何责任，本公司概不负责。"),"</li>")+"<li>".concat($t("用户有义务保障本身的用户名称和密码的隐私安全，并且不应允许任何第三方以任何形式，通过该用户名称和密码使用本网站之所有游戏，否则，一切责任需由该用户全部承担。"),"</li>")+"<li>".concat($t("安装丶使用或参与本软件所有游戏之用户，均被视为符合该用户当地之法定年龄，以及该用户完全明白并且同意本协议之内容。"),"</li>")+"<li>".concat($t("本网站有权拒绝或不接受任何用户以任何不正当方式登入或参与本网站所有游戏之权利。 各玩家请注意, 敬请各玩家以每局的真实影像的牌局结果作准, 路纸结果有时候会因为网路接收信号或各公司的数据库和伺服器维护而出现差异, 所以只供参考, 不能作准, 如有问题, 欢迎申请该局的重播。 以示公正。"),"</li>")+"<li>".concat($t("因人为或系统发生不能预测因素所导致的失误，本公司管理层保留最终之决定权。"),"</li>")+"<li>".concat($t("不论在任何情况下，本公司之决定权乃最终之决定权。"),"</li>")+"<li>".concat($t("本公司不承担所有任何明确说明或者暗示的有关于该网站或者该网站上游戏的责任，所有一切都按照现在的规范提供。此外，本公司就任何有关质量，适用性，完整性或准确性的情况不向您提供任何担保或表达任何意见。本公司会尽最大能力去提供最好的服务，但是不保证游戏偶尔出现中断，发生不可预料的错误，失误及时被纠正或者系统不受病毒和蠕虫的侵袭。"),"</li>")+"<li>".concat($t("无论任何情况下，本公司不赔偿任何由於使用该网站或者该网站上游戏所造成的损失。不管该损失是特殊原因做成的，直接的，间接的（包括但不仅限于，商业利润损失，意外中断损失，丢失商业信息，或者任何其他金钱上的损失），即使本公司事先知道可能会造成这些损失。"),"</li>")+"</ol>";this.$dialog.alert({title:"".concat(this.$config[this.$projectname].secName).concat($t("游戏条款")),message:t,messageAlign:"left"}).then((function(){}))},phoneCode:function(){var t=this;Object(s.k)({merchant_no:"10031",mobile:this.mobile,phone_area_code:"+"+this.areaCode}).then((function(e){0==e.data.code?t.getCode=e.data.data.code:(t.$toast(e.data.msg),window.clearInterval(t.clock),t.content=t.$t("重新发送验证码"),t.totalTime=60,t.canClick=!0)}))},countDown:function(){var t=this,e=this.mobileReg,i=this.mobile;if(this.canClick){if(!i)return this.$toast.fail(this.$t("请输入手机号")),!1;if(!e.test(i))return this.$toast.fail(this.$t("手机格式有误")),!1;this.canClick=!1,this.phoneCode(),this.content=this.totalTime+this.$t("秒后重新发送"),this.clock=window.setInterval((function(){t.totalTime--,t.content=t.totalTime+t.$t("秒后重新发送"),t.totalTime<0&&(window.clearInterval(t.clock),t.content=t.$t("重新发送验证码"),t.totalTime=60,t.canClick=!0)}),1e3)}}}},d=(i("e917"),i("0c7c")),g=Object(d.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container regContainer"},[i("div",{staticClass:"main",attrs:{id:"register"}},[i("div",{staticClass:"register"},[i("div",{staticClass:"top-bar"},[t._v('/"})" />\n          '),i("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.go("/login")}}},[t._v(t._s(t.$t("登录")))])]),i("van-tabs",{staticClass:"login-tabs",attrs:{"line-width":".64rem","line-height":".08rem",color:t.$colorjs.baseColor},on:{click:t.tabChange}},t._l(t.tab,(function(t){return i("van-tab",{key:t,staticClass:"tab-list",attrs:{title:t}})})),1),i("div",{staticClass:"fill"},[0===t.active?i("div",{staticClass:"aagames-form"},[i("div",{staticClass:"input"},[i("img",{staticClass:"img",attrs:{src:t.$imgs["login/user@2x"],alt:""}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.openAccount.account,expression:"openAccount.account"}],attrs:{type:"text",placeholder:t.$t("请输入账户")},domProps:{value:t.openAccount.account},on:{input:function(e){e.target.composing||t.$set(t.openAccount,"account",e.target.value)}}})]),i("div",{staticClass:"input"},[i("img",{staticClass:"img",attrs:{src:t.$imgs["login/pass@2x"],alt:""}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.openAccount.password,expression:"openAccount.password"}],attrs:{type:"password",placeholder:t.$t("请输入密码")},domProps:{value:t.openAccount.password},on:{input:function(e){e.target.composing||t.$set(t.openAccount,"password",e.target.value)}}})]),i("div",{staticClass:"input"},[i("img",{staticClass:"img",attrs:{src:t.$imgs["login/pass@2x"],alt:""}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.openAccount.againPassword,expression:"openAccount.againPassword"}],attrs:{type:"password",placeholder:t.$t("请确认密码")},domProps:{value:t.openAccount.againPassword},on:{input:function(e){e.target.composing||t.$set(t.openAccount,"againPassword",e.target.value)}}})])]):t._e(),1===t.active?i("div",{staticClass:"onekey"},[i("Rocket"),i("p",{staticClass:"onekeyText"},[t._v(t._s(t.copyright)+t._s(t.$t("一键开户，极速体验！")))])],1):t._e(),2===t.active?[i("div",{staticClass:"aagames-form",staticStyle:{"margin-bottom":"0"}},[i("div",{staticClass:"input"},[i("img",{staticClass:"img phone",attrs:{src:t.$imgs["login/mobile@2x"],alt:""}}),i("phoneArea",{model:{value:t.areaCode,callback:function(e){t.areaCode=e},expression:"areaCode"}},[i("i",{staticClass:"areaNum"},[t._v("\n                     +"+t._s(t.areaCode)+"\n                    "),i("img",{staticClass:"xiala",attrs:{src:t.$imgs["otherIcon/xiala@2x"],alt:""}})])]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"text",placeholder:t.$t("请输入手机号")},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}})],1)]),i("gcode",{attrs:{account:t.mobile,withLabel:!1,withIcon:!0,areaCode:t.areaCode},on:{getCode:t.getCodeC,myCode:t.myCodeC}})]:t._e()],2),i("div",{staticClass:"function"},[i("div",{staticClass:"funDiv",attrs:{align:"center"}},[i("van-checkbox",{attrs:{"checked-color":t.$colorjs.baseColor},model:{value:t.isAgree,callback:function(e){t.isAgree=e},expression:"isAgree"}},[t._v("\n"+t._s(t.$t("同意并接受"))+"\n              ")]),i("a",{on:{click:t.showProtocol}},[t._v("《"+t._s(t.$t(t.$config[t.$projectname].secName))+t._s(t.$t("游戏条款"))+"》")])],1),i("div",{staticClass:"aagames-button-box"},[i("van-button",{staticClass:"aagames-button register",attrs:{loading:t.loading,"loading-text":t.$t("注册中..."),type:"button"},on:{click:t.applySubmitForm}},[t._v("\n              "+t._s(1===t.active?t.$t("获取游戏账户"):t.$t("注册"))+"\n            ")])],1)]),i("van-image",{staticStyle:{width:"100%"},attrs:{src:t.$imgs["login/login-bg@2x"]}}),i("div",{staticClass:"customer"},[i("div",{staticClass:"wait",on:{click:function(e){return t.go("/")}}},[i("img",{attrs:{src:t.$imgs["otherIcon/zaigg@2x"],alt:""}}),t._v("\n"+t._s(t.$t("再逛逛吧"))+"\n          ")]),i("div",{staticClass:"cut-up"}),i("div",{staticClass:"kefu",on:{click:t.$openKefu}},[i("img",{attrs:{src:t.$imgs["otherIcon/kefu@2x"],alt:""}}),t._v("\n"+t._s(t.$t("专属客服"))+"\n          ")])])],1),i("van-popup",{attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("van-picker",{attrs:{"show-toolbar":"","value-key":"text",title:t.$t("选择号码地区"),columns:t.columns},on:{confirm:t.onConfirm,cancel:t.onCancel}})],1),i("van-popup",{staticClass:"custom phoneInput",attrs:{title:t.$t("验证手机号"),round:"","close-icon-position":"top-left",position:"bottom","get-container":"#app"},model:{value:t.mobileShow,callback:function(e){t.mobileShow=e},expression:"mobileShow"}},[i("div",{staticClass:"drawer"},[i("div",{staticClass:"pop-head"},[i("h2",[t._v(t._s(t.$t("绑定手机号")))])]),i("h4",[t._v(t._s(t.$t("为了保障您的账号安全")))]),i("div",{staticClass:"input-cells"},[i("div",{staticClass:"aagames-form"},[i("div",{staticClass:"input"},[i("phoneArea",{model:{value:t.areaCode,callback:function(e){t.areaCode=e},expression:"areaCode"}},[i("i",{staticClass:"areaNum"},[t._v("\n                     +"+t._s(t.areaCode)+"\n                    "),i("img",{staticClass:"xiala",attrs:{src:t.$imgs["otherIcon/xiala@2x"],alt:""}})])]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"text",placeholder:t.$t("请填写您的手机号码")},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}})],1)])]),4===t.registerSettingType?i("div",{staticClass:"input-cells"},[i("gcode",{attrs:{bind:!0,areaCode:t.areaCode,account:t.mobile},on:{getCode:t.getCodeC,myCode:t.myCodeC}})],1):t._e(),i("div",{staticClass:"input-cells"},[i("div",{staticClass:"aagames-button-box"},[i("button",{staticClass:"aagames-button aagames-button-default",attrs:{type:"button"},on:{click:function(e){t.mobileShow=!1}}},[t._v(t._s(t.$t("残忍拒绝")))]),i("button",{staticClass:"aagames-button",attrs:{type:"button"},on:{click:t.confirmReg}},[t._v(t._s(t.$t("确定")))])])]),i("div",{staticClass:"footer-tips"},[i("p",[t._v("\n              "+t._s(t.$t("遇到问题，联系"))+"\n              "),i("span",[t._v(t._s(t.$t("专属客服")))])])])])])],1)])}),[],!1,null,"6e500cf7",null);e.default=g.exports},"479d":function(t,e,i){},e917:function(t,e,i){"use strict";i("479d")}}]);
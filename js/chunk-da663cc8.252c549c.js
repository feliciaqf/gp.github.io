(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-da663cc8"],{"07ae":function(t,e,a){"use strict";a.r(e),a("ac4d"),a("8a81"),a("5df3"),a("1c4c"),a("7f7f"),a("6b54"),a("8e6e"),a("ac6a"),a("456d"),a("c5f6");var s=a("ade3"),o=a("40ef"),i=a("bd8a"),n=a("fe01"),r=a("2f62"),l=a("2b0e"),c=a("d399");function m(t,e){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=function(t,e){if(t){if("string"==typeof t)return u(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var s=0,o=function(){};return{s:o,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,n=!0,r=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return n=t.done,t},e:function(t){r=!0,i=t},f:function(){try{n||null==a.return||a.return()}finally{if(r)throw i}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s}function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}l.a.use(c.a);var p={name:"quotaTransfer",data:function(){return{title:this.$t("理财小金库转账"),showKeyboard:!1,gameStatus:{},gameColumns:[],columns:[{values:[],className:"column1"},{values:[],className:"column2"}],gameShow:!1,isDisabled:!1,type:"",list:{pay_password:"",from_platform_id:0,to_platform_id:1,money:""},typeText:[this.$t("主账户"),this.$t("理财小金库")],errText:"",password:0,rotate:!1,data:{access_token:window.localStorage.token},baseUrl:"/gp/",transferType:1}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(s.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(r.d)("games",["gameCatesPlatforms"])),methods:{onInput:function(t){this.list.pay_password=(this.list.pay_password+t).slice(0,6)},onDelete:function(){this.list.pay_password=this.list.pay_password.slice(0,this.list.pay_password.length-1)},onGameConfirm:function(t){this.gameShow=!1,"account"===this.type?t[0].game_platform_name===this.$t("主账户")?(this.accoount=t[0].game_platform_name,this.list.from_platform_id=t[0].game_platform_id):(this.accoount=t[0].game_platform_name+" / "+t[1].game_platform_name,this.list.from_platform_id=t[1].game_platform_id):t[0].game_platform_name===this.$t("主账户")?(this.turn=t[0].game_platform_name,this.list.to_platform_id=t[0].game_platform_id):(this.turn=t[0].game_platform_name+" / "+t[1].game_platform_name,this.list.to_platform_id=t[1].game_platform_id)},onGameCancel:function(t){this.gameShow=!1},onChange:function(t,e,a){0===e[0].game_platform_id?t.setColumnValues(1,[]):t.setColumnValues(1,e[0].platform_list)},gameSelect:function(t){},submit:function(){var t=this;return null==this.list.from_platform_id?(this.errText=this.$t("请选择转出账户"),!1):null==this.list.to_platform_id?(this.errText=this.$t("请选择转入账户"),!1):this.list.money?this.list.money<100?(this.errText=this.$t("最低转账金额为100"),!1):isNaN(this.list.money)?(this.errText=this.$t("转账金额只能输入数字"),!1):this.list.pay_password.length<6?(this.errText=this.$t("输入6位资金密码"),!1):(c.a.loading({className:"toast-loading",mask:!0,forbidClick:!0,loadingType:"spinner",message:this.$t("转帐中..."),duration:0}),this.list.access_token=window.localStorage.token,void Object(i.K)(this.list).then((function(e){c.a.clear(),0===e.data.code?(Object(c.a)(t.$t("转账成功")),t.$router.go(-1)):(Object(c.a)(e.data.msg),t.errText=e.data.msg)}),(function(e){t.errText=t.$t("转账失败")}))):(this.errText=this.$t("请输入转账金额"),!1)},setFundPassword:function(t){var e={name:"accountSecurity",query:{type:t,getPath:"quotaTransfer"}};window.localStorage.setItem("verifyNextRoute",JSON.stringify(e)),1==t?this.$router.push(e):this.$router.push("verifyIdentity")},changeType:function(){var t=this.typeText,e=Object.assign({},this.list);this.typeText=[t[1],t[0]],this.list.from_platform_id=e.to_platform_id,this.list.to_platform_id=e.from_platform_id}},created:function(){var t=this;this.transferType=this.$route.query.type,1==this.transferType?(this.typeText[0]=this.$t("理财小金库"),this.typeText[1]=this.$t("主账户"),this.list.from_platform_id=1,this.list.to_platform_id=0):(this.typeText[0]=this.$t("主账户"),this.typeText[1]=this.$t("理财小金库"),this.list.from_platform_id=0,this.list.to_platform_id=1),Object(n.a)().then((function(e){t.password=e.data.data.is_pay_password})),Object(i.i)(this.data).then((function(e){if(0===e.data.code){t.gameStatus=e.data.data;var a=[{id:0,text:t.$t("主账户")}];for(var s in e.data.data)a.push({id:Number(s),text:e.data.data[s]});t.gameColumns=a}}));var e,a=JSON.parse(JSON.stringify(this.gameCatesPlatforms)),s=m(a);try{for(s.s();!(e=s.n()).done;){var o=e.value;o.game_platform_name=o.game_cate_name}}catch(t){s.e(t)}finally{s.f()}a.unshift({game_platform_name:this.$t("主账户"),game_platform_id:0}),this.columns[0].values=a,this.columns[1].values=a[0].platform_list;var r=document.documentElement.clientHeight||document.body.clientHeight;window.onresize=function(){var t=document.documentElement.clientHeight||document.body.clientHeight;r-t>60?document.getElementById("apply").classList.add("focusState"):document.getElementById("apply").classList.remove("focusState")}},watch:{showKeyboard:function(t){t&&window.scrollTo(0,document.getElementById("password").offsetTop-100)}},components:{Lheader:o.a}},f=(a("cc6a"),a("0c7c")),h=Object(f.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("lheader",{attrs:{title:t.title,path:"111"}}),a("div",{staticClass:"container"},[a("div",{attrs:{id:"apply"}},[a("div",{staticClass:"main"},[a("div",{staticClass:"account"},[a("div",{staticClass:"aagames-label"},[t._v(t._s(t.$t("账户选择")))]),a("div",{staticClass:"aagames-bank-select-box"},[a("div",{staticClass:"select"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.typeText[0],expression:"typeText[0]"}],attrs:{readonly:"",type:"text"},domProps:{value:t.typeText[0]},on:{click:function(e){return t.gameSelect("account")},input:function(e){e.target.composing||t.$set(t.typeText,0,e.target.value)}}})])]),a("div",{staticClass:"aagames-bank-select-box"},[a("div",{staticClass:"select"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.typeText[1],expression:"typeText[1]"}],attrs:{readonly:"",type:"text"},domProps:{value:t.typeText[1]},on:{click:function(e){return t.gameSelect("turn")},input:function(e){e.target.composing||t.$set(t.typeText,1,e.target.value)}}})])])]),a("div",{staticClass:"amount"},[a("div",{staticClass:"aagames-label"},[t._v(t._s(t.$t("转账资金")))]),a("div",{staticClass:"aagames-input-box"},[a("div",{staticClass:"input"},[a("span",[t._v("￥")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.list.money,expression:"list.money"}],attrs:{type:"text",onkeyup:"value=value.replace(/[^\\d\\.]/g,'')",onblur:"value=value.replace(/[^\\d\\.]/g,'')",placeholder:t.$t("请输入转账资金")},domProps:{value:t.list.money},on:{input:function(e){e.target.composing||t.$set(t.list,"money",e.target.value)}}})])])]),a("div",{staticClass:"password",attrs:{id:"password"}},[a("p",{staticClass:"label"},[t._v(t._s(t.$t("资金密码")))]),1!==t.password?a("div",{staticClass:"aagames-input-password"},[a("van-password-input",{attrs:{value:t.list.pay_password,focused:t.showKeyboard},on:{focus:function(e){t.showKeyboard=!0}}}),a("div",{staticClass:"forgetPass"},[a("span",{on:{click:function(e){return t.setFundPassword(2)}}},[t._v(t._s(t.$t("忘记资金密码")))])])],1):a("div",{staticClass:"aagames-bank-select-box"},[a("div",{staticClass:"select"},[a("input",{attrs:{readonly:"",type:"text"},domProps:{value:t.$t("您还未设置资金密码")},on:{click:function(e){return t.setFundPassword(1)}}}),a("i",{staticClass:"el-icon-arrow-right"})])]),a("p",{staticClass:"error-msg"},[t._v(t._s(t.errText))])]),a("div",{staticClass:"aagames-button-box"},[a("button",{staticClass:"aagames-button",attrs:{type:"button",disabled:t.isDisabled},on:{click:t.submit}},[t._v(t._s(t.$t("确认转账")))])]),a("div",{staticClass:"aagames-tips"},[t._v("\n            "+t._s(t.$t("温馨提示"))+"："),a("br"),t._v("\n            第三方额度转账可能会有5-120分钟延迟，如有问题请联系客服\n          ")])])])]),a("van-number-keyboard",{attrs:{"safe-area-inset-bottom":"",show:t.showKeyboard},on:{input:t.onInput,delete:t.onDelete,blur:function(e){t.showKeyboard=!1}}}),a("van-popup",{attrs:{position:"bottom"},model:{value:t.gameShow,callback:function(e){t.gameShow=e},expression:"gameShow"}},[a("van-picker",{attrs:{columns:t.columns,"value-key":"game_platform_name","show-toolbar":!0},on:{confirm:t.onGameConfirm,cancel:t.onGameCancel,change:t.onChange}})],1)],1)}),[],!1,null,"f3f7746c",null);e.default=h.exports},"8c13":function(t,e,a){},cc6a:function(t,e,a){"use strict";a("8c13")}}]);
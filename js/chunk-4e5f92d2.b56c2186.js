(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4e5f92d2"],{"5d5c":function(t,a,n){"use strict";n("69e0")},"69e0":function(t,a,n){},"9121f":function(t,a,n){"use strict";n.r(a);var e=n("b3ad"),s=n("40ef"),o=n("c428"),i=n("d1c2"),c=n("2b0e"),r=n("2241");c.a.use(r.a);var d={name:"quotaTransfer",components:{Loading:o.a,Lheader:s.a,BankIcon:e.a},data:function(){return{title:this.$t("提现"),showKeyboard:!1,keyboardshow:!1,isLoading:!1,loadingText:this.$t("加载中..."),columns:[],icon_code_src:"",bank_name:"",bindText:this.$t("选择银行"),show:!1,yj_money:"",takeData:{withdraw_money:"",user_bank_id:"",pay_password:"",access_token:window.localStorage.agToken}}},methods:{all:function(){var t=this;Object(i.y)({access_token:window.localStorage.agToken}).then((function(a){0===a.data.code&&(t.takeData.withdraw_money=a.data.data.money)}))},onConfirm:function(t){this.show=!1,this.bindText=t.card_no,this.bank_name=t.bank_name,this.icon_code_src=t.icon_code_src,this.takeData.user_bank_id=t.id},onCancel:function(){this.show=!1},isBank:function(){if(0===this.columns.length){var t=this;r.a.confirm({message:this.$t("您当前未绑定银行卡，无法提现！"),title:this.$t("温馨提示"),confirmButtonText:this.$t("去绑定")}).then((function(){t.$router.push({path:"/agAddBankBind",query:{getPath:"carryCash"}})})).catch((function(){}))}else this.show=!0},submit:function(){var t=this;return this.takeData.withdraw_money?this.takeData.user_bank_id?this.takeData.withdraw_money<100?(this.$toast.fail(this.$t("最低取款金额为100元，请重新输入")),!1):void(this.takeData.withdraw_money>this.yj_money?this.$toast.fail(this.$t("取款金额不能大于佣金金额，请重新输入")):(this.isLoading=!0,this.loadingText=this.$t("提现中..."),this.takeData.access_token=window.localStorage.agToken,Object(i.A)(this.takeData).then((function(a){0===a.data.code?(t.$toast(t.$t("提现成功")),setTimeout((function(a){t.$router.push("/agent")}),2e3)):t.$toast(a.data.msg)})).finally((function(){t.isLoading=!1})))):(this.$toast.fail(this.$t("请选择银行")),!1):(this.$toast.fail(this.$t("请输入取款金额")),!1)}},created:function(){var t=this;try{var a=document.getElementsByClassName("container")[0].offsetTop;window.scrollTo(0,a)}catch(t){}this.isLoading=!0,this.loadingText=this.$t("加载中..."),this.yj_money=JSON.parse(window.localStorage.userInfoForAgent).commission_money,Object(i.k)({access_token:window.localStorage.agToken}).then((function(a){if(0===a.data.code){for(var e=a.data.data,s=0;s<e.length;s++){var o=e[s];if(o.card_no){for(var i="",c=0;c<o.card_no.length-4;c++)i+="*";i+=o.card_no.substring(o.card_no.length-4),o.icon_code_src=n("8627")("./".concat(o.icon_code,".svg")),o.name='<img src="'.concat(o.icon_code_src,'"/>').concat(i," ").concat(o.bank_name)}}t.columns=e,t.isBank()}})).finally((function(){t.isLoading=!1}))}},l=(n("5d5c"),n("0c7c")),h=Object(l.a)(d,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container carrycash"},[n("lheader",{attrs:{title:t.title,goback:!0,"get-switch":!1}}),n("div",{staticClass:"main"},[n("div",{staticClass:"amount"},[n("div",{staticClass:"register"},[n("div",{staticClass:"reset"},[n("div",{staticClass:"mt",on:{click:function(a){t.show=!0}}},[t.icon_code_src?n("img",{staticClass:"icon",attrs:{src:t.icon_code_src}}):t._e(),n("div",{staticClass:"center"},[n("div",{staticClass:"name"},[t._v(t._s(t.bank_name))]),n("div",{staticClass:"card_no"},[t._v(t._s(t.bindText===t.$t("选择银行")?t.bindText:""+t.$t("尾号")+t.bindText.substring(t.bindText.length-4))+"\n                                ")])]),t._v("\n"+t._s(t.$t("切换"))+"\n                            "),n("van-icon",{attrs:{name:"arrow"}})],1)]),n("div",{staticClass:"reset"},[n("div",{staticClass:"tx"},[n("p",[t._v(t._s(t.$t("提现金额")))]),n("div",{staticClass:"input"},[n("span",[t._v("￥")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.takeData.withdraw_money,expression:"takeData.withdraw_money"}],attrs:{readonly:"",type:"text",onkeyup:"value=value.replace(/[^\\d\\.]/g,'')",onblur:"value=value.replace(/[^\\d\\.]/g,'')",placeholder:"佣金余额"+t.yj_money},domProps:{value:t.takeData.withdraw_money},on:{click:function(a){t.keyboardshow=!0},input:function(a){a.target.composing||t.$set(t.takeData,"withdraw_money",a.target.value)}}}),n("div",{staticClass:"text",on:{click:t.all}},[t._v(t._s(t.$t("全部提现")))])]),n("van-number-keyboard",{attrs:{"safe-area-inset-bottom":"","extra-key":".","close-button-text":t.$t("完成"),show:t.keyboardshow},on:{blur:function(a){t.keyboardshow=!1}},model:{value:t.takeData.withdraw_money,callback:function(a){t.$set(t.takeData,"withdraw_money",a)},expression:"takeData.withdraw_money"}})],1)])]),n("div",{staticClass:"btn"},[n("p",[t._v(t._s(t.$t("提现金额最低")))])])]),n("div",{staticClass:"aagames-button-box"},[n("button",{staticClass:"aagames-button btnStyle10018",attrs:{type:"button"},on:{click:t.submit}},[t._v(t._s(t.$t("提现")))])])]),n("van-popup",{attrs:{position:"bottom"},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[n("van-picker",{attrs:{"show-toolbar":"","value-key":"name",columns:t.columns},on:{confirm:t.onConfirm,cancel:t.onCancel}})],1),n("loading",{attrs:{isShow:t.isLoading,title:t.loadingText}})],1)}),[],!1,null,"3e4f662c",null);a.default=h.exports}}]);
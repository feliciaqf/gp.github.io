(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5d1e8be2"],{"110d":function(t,a,e){"use strict";e.r(a),e("8e6e"),e("7f7f"),e("ac6a"),e("456d");var i=e("ade3"),n=(e("6762"),e("2fdb"),e("2f62")),s=e("33ee"),r=e("b3ad"),c=e("ecdf"),o=e("bd8a"),l=e("ff82");function d(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}var u={name:"AddBankcard",components:{ProvinceCity:s.a,BankIcon:r.a,BankcardList:c.a},data:function(){return{title:this.$t("添加银行卡"),submiting:!1,show:!1,bankcards:[],bankcard:{},addBank:{},branch:"",isName:!1,province:"",city:"",showCityPicker:!1,columns:[],yaboUi:["10024","10022","10023","10025","10060","10026","10027","10028","10029","10064","10059","10033","10063","10043","10042","10043","10038"].includes("10031"),esportUi:["10050"].includes("10031"),areaTitle:["10030','10061"].includes("10031")?this.$t("开户省份"):""}},computed:function(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?d(Object(e),!0).forEach((function(a){Object(i.a)(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}({},Object(n.d)("users",["userInfo","isLogin"])),created:function(){this.isLogin||(this.$toast(this.$t("请先登录")),this.$router.push({name:"login"})),this.addBank.name=this.userInfo.realname,this.getColumns()},methods:{getColumns:function(){for(var t in this.areaData=[],l.a.province_list){var a=l.a.province_list[t];this.areaData[a]=[];var e=String(t).slice(0,2);if(11e4==t||12e4==t||31e4==t||5e5==t)for(var i in l.a.county_list)String(i).slice(0,2)==e&&this.areaData[a].push(l.a.county_list[i]);else for(var n in l.a.city_list)String(n).slice(0,2)==e&&this.areaData[a].push(l.a.city_list[n])}this.columns=[{values:Object.keys(this.areaData),className:"column1"},{values:this.areaData[this.$t("北京市")],className:"column2",defaultIndex:0}]},onCityPickerChange:function(t,a){t.setColumnValues(1,this.areaData[a[0]])},onCityPickerConfirm:function(t){this.province=t[0],this.city=t[1],this.showCityPicker=!1},selectBankcard:function(t){this.bankcard=t,this.show=!1},onClickLeft:function(){this.$route.query.getPath?this.$router.push({path:"/"+this.$route.query.getPath}):this.$router.push({path:this.$route.query.getPath||"bankcard"})},onClickRight:function(){this.$openKefu()},submit:function(){var t=this,a=this.addBank,e=this.bankcard,i=this.province,n=this.city,s=this.branch;return a.name?/^[\u4e00-\u9fa5]{0,5}$/.test(a.name)?a.card_no?/^\d{16,20}$/.test(a.card_no)?e&&e.id?i?n?s?(this.submiting=!0,Object.assign(a,{bank_id:e.id,bank_of_deposit:i+"-"+n+"-"+s}),void Object(o.b)(a).then((function(a){var e=t;0===a.data.code?(t.$toast({message:t.$t("银行卡绑定成功"),onClose:function(){e.onClickLeft()}}),t.$store.dispatch("users/getUserInfo")):t.$toast.fail(a.data.msg),t.submiting=!1}),(function(a){t.submiting=!1}))):(this.$toast.fail(this.$t("请填写开户分行")),!1):(this.$toast.fail(this.$t("请选择城市")),!1):(this.$toast.fail(this.$t("请选择省份")),!1):(this.$toast.fail(this.$t("请选择银行")),!1):(this.$toast.fail(this.$t("银行账户仅支持输入数字，16-20位")),!1):(this.$toast.fail(this.$t("请输入银行账户")),!1):(this.$toast.fail(this.$t("输入真实姓名，最多5汉字")),!1):(this.$toast.fail(this.$t("请输入真实姓名")),!1)}}},h=(e("7d10"),e("0c7c")),f=Object(h.a)(u,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bankcard-page"},[t.yaboUi||t.esportUi?[e("van-nav-bar",{staticClass:"m-header transparent",attrs:{title:t.title,"left-arrow":"",fixed:!0},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight},scopedSlots:t._u([{key:"right",fn:function(){return[e("img",{staticClass:"kf-icon",attrs:{src:t.$imgs["otherIcon/nav_kefu@2x"],alt:""}})]},proxy:!0}],null,!1,3933798402)})]:[e("van-nav-bar",{staticClass:"m-header transparent",attrs:{title:t.title,"left-arrow":"",fixed:!0,"right-text":t.$t("专属客服")},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}})],e("div",{staticClass:"m-body"},[e("div",{staticClass:"m-cells"},[e("van-cell-group",[e("van-cell",{attrs:{title:t.$t("持卡人姓名")}},[e("template",{slot:"default"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.addBank.name,expression:"addBank.name"}],attrs:{type:"text",disabled:t.userInfo.realname,placeholder:t.$t("请输入真实姓名")},domProps:{value:t.addBank.name},on:{input:function(a){a.target.composing||t.$set(t.addBank,"name",a.target.value)}}})])],2),e("van-cell",{attrs:{title:t.$t("银行卡卡号")}},[e("template",{slot:"default"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.addBank.card_no,expression:"addBank.card_no"}],attrs:{type:"text",placeholder:t.$t("请输入银行卡卡号")},domProps:{value:t.addBank.card_no},on:{input:function(a){a.target.composing||t.$set(t.addBank,"card_no",a.target.value)}}})])],2),e("van-cell",{attrs:{title:t.$t("请选择银行")},on:{click:function(a){t.show=!0}}},[e("div",{staticClass:"list-cells",attrs:{slot:"default"},slot:"default"},[e("div",{staticClass:"cell"},[e("BankcardList",{attrs:{bankText:t.bankcard.name,bank:t.bankcard},on:{"update:bankText":function(a){return t.$set(t.bankcard,"name",a)},"update:bank-text":function(a){return t.$set(t.bankcard,"name",a)},"update:bank":function(a){t.bankcard=a}},model:{value:t.bankcard.id,callback:function(a){t.$set(t.bankcard,"id",a)},expression:"bankcard.id"}},[t.bankcard.name?e("div",{staticClass:"cell-head"},[e("BankIcon",{attrs:{bankCode:t.bankcard.icon_code}})],1):t._e(),e("div",{staticClass:"cell-body",class:t.bankcard.name?"":"placeholder"},[t._v("\n                  "+t._s(t.bankcard.name||t.$t("请选择"))+"\n                ")])])],1)]),e("van-icon",{attrs:{name:"arrow"}})],1),e("van-cell",{attrs:{title:t.$t("开户省份和城市")},on:{click:function(a){t.showCityPicker=!0}}},[e("template",{slot:"default"},[e("span",{class:t.province&&t.city&&t.province+" "+t.city?"":"placeholder"},[t._v(t._s(t.province&&t.city&&t.province+" "+t.city||t.$t("请选择")))]),e("van-icon",{attrs:{name:"arrow"}})],1)],2),e("van-cell",{attrs:{title:t.$t("开户支行")}},[e("template",{slot:"default"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.branch,expression:"branch",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:t.$t("请输入开户支行")},domProps:{value:t.branch},on:{input:function(a){a.target.composing||(t.branch=a.target.value.trim())},blur:function(a){return t.$forceUpdate()}}})])],2)],1)],1),e("div",{staticClass:"ui-buttons gap fixed"},[e("van-button",{attrs:{loading:t.submiting,type:"primary"},on:{click:t.submit}},[t._v(t._s(t.$t("确认绑定")))])],1),e("div",{staticClass:"aagames-tips"},[t._v("\n      "+t._s(t.$t("温馨提示：银行卡一旦绑定如需修改请联系在线客服。"))+"\n    ")])]),e("van-popup",{attrs:{position:"bottom"},model:{value:t.showCityPicker,callback:function(a){t.showCityPicker=a},expression:"showCityPicker"}},[e("van-picker",{attrs:{"show-toolbar":"",title:t.areaTitle,columns:t.columns},on:{change:t.onCityPickerChange,cancel:function(a){t.showCityPicker=!1},confirm:t.onCityPickerConfirm}})],1)],2)}),[],!1,null,"6a5d9ace",null);a.default=f.exports},"7d10":function(t,a,e){"use strict";e("d6bb")},d6bb:function(t,a,e){}}]);
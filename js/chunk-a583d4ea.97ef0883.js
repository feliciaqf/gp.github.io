(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a583d4ea"],{"159c":function(t,a,s){"use strict";s.r(a),s("28a5");var e=s("40ef"),i=s("9e2a"),n={name:"index",components:{Lheader:e.a},data:function(){return{title:this.$t("活动"),datas:[],maxData:null}},created:function(){this.getTableData()},methods:{splitString:function(t){return t.split("-")},getTableData:function(){var t=this;this.$loading({mask:!1});var a=this;Object(i.E)({id:this.$route.query.id,activity_type:21}).then((function(s){var e=s.data,i=e.code,n=e.data;if(e.msg,0===i){a.datas=n.condition_setting.benefit_config;var c=[];for(var l in a.datas)c.push(1*a.datas[l].benefit);a.maxData=Math.max.apply(Math,c),t.$toast.clear()}}))}}},c=(s("6595"),s("0c7c")),l=Object(c.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dailySport"},[t.$route.query.source?t._e():e("lheader",{attrs:{title:t.title,goback:!0}}),e("div",{staticClass:"container",class:{"no-header":t.$route.query.source}},[e("img",{staticClass:"full-img",attrs:{src:s("4418"),alt:""}}),e("div",{staticClass:"main"},[e("img",{staticClass:"full-img",attrs:{src:s("a4f3"),alt:""}}),e("h2",[t._v(t._s(t.$t("活动内容")))]),e("h3",[t._v(t._s(t.$t("活动详细内容说明")))]),e("div",{staticClass:"block detail"},[e("h5",[t._v(t._s(t.$t("活动详情")))]),e("p",{staticClass:"detail-p"},[t._v("\n          完成当周存款流水即可在下周申请20%最高"+t._s(t.maxData)+"元再存红利\n        ")])]),e("div",{staticClass:"block"},[e("table",[e("tr",[e("th",[t._v(t._s(t.$t("VIP等级")))]),e("th",[t._v(t._s(t.$t("当周存款要求")))]),e("th",[t._v(t._s(t.$t("流水要求")))]),e("th",[t._v(t._s(t.$t("奖金上限")))])]),t._l(t.datas,(function(a,s){return e("tr",{key:s},[e("td",[t._v("\n              VIP"+t._s(t.splitString(a.vip_level)[0])+"~"+t._s(t.splitString(a.vip_level)[1])+"\n            ")]),e("td",[a.week_deposit?e("span",[t._v("≥"+t._s(a.week_deposit))]):e("span",[t._v("x")])]),e("td",[a.bet?e("span",[t._v("≥"+t._s(a.bet))]):e("span",[t._v("x")])]),e("td",[a.benefit?e("span",[t._v(t._s(a.benefit))]):e("span",[t._v("x")])])])}))],2)]),e("h2",[t._v(t._s(t.$t("规则说明")))]),e("h3",[t._v(t._s(t.$t("该活动所需要满足的条件")))]),e("div",{staticClass:"block"},[e("p",[t._v("1. 此活动与返水共享。")]),e("p",[t._v("2. 此活动再存最低要求"+t._s(t.datas.level1.week_deposit)+"元以上。")]),e("p",[t._v("3. 提款要求（本金+红利）*12=提款所需流水。")]),e("p",[t._v("\n          4.\n          若完成充值后12小时内没有在活动页面申请本活动礼金，我们将视为您放弃本优惠；若会员不申请此优惠，存款金额只需一倍流水即可申请提款。\n        ")]),e("p",[t._v("\n          5.\n          本优惠每位玩家，每账户信息（姓名，手机，邮箱），支付方式（卡号，银行户名）及IP地址只能享有一次优惠，一旦确认为套利玩家，立即没收盈利和本金。\n        ")]),e("p",[t._v("6. 本公司享有最终解释权。")])])])])],1)}),[],!1,null,"a3b824e2",null);a.default=l.exports},"3cac":function(t,a,s){},4418:function(t,a,s){t.exports=s.p+"img/banner.0797db9a.png"},6595:function(t,a,s){"use strict";s("3cac")},a4f3:function(t,a,s){t.exports=s.p+"img/image_title1@2x.4e7735df.png"}}]);
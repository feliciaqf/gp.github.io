(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f34aa7a2"],{"05c6":function(t,a,s){t.exports=s.p+"img/image_title1@2x.14119fa6.png"},"05ee":function(t,a,s){"use strict";s.r(a);var i=s("40ef"),e=s("9e2a"),n={name:"index",components:{Lheader:i.a},data:function(){return{title:this.$t("活动"),datas:[]}},created:function(){this.getTableData()},methods:{getTableData:function(){var t=this;this.$loading({mask:!1}),Object(e.E)({id:this.$route.query.id,activity_type:22}).then((function(a){var s=a.data,i=s.code,e=s.data;s.msg,0===i&&(t.datas=e.condition_setting.benefit_config,t.$toast.clear())}))}}},c=(s("3dcc"),s("0c7c")),r=Object(c.a)(n,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"dailySport"},[t.$route.query.source?t._e():i("lheader",{attrs:{title:t.title,goback:!0}}),i("div",{staticClass:"container",class:{"no-header":t.$route.query.source}},[i("img",{staticClass:"full-img",attrs:{src:s("b6bb"),alt:""}}),i("div",{staticClass:"main"},[i("img",{staticClass:"full-img",attrs:{src:s("05c6"),alt:""}}),i("img",{staticClass:"tit-img",attrs:{src:s("3fb6"),alt:""}}),i("div",{staticClass:"block detail"},[i("img",{attrs:{src:s("493d"),alt:""}}),i("div",[i("h5",[t._v(t._s(t.$t("活动详情")))]),i("p",{staticClass:"detail-p"},[t._v(t._s(t.$t("根据")))])])]),i("div",{staticClass:"block"},[i("table",[i("tr",[i("th",[t._v("8场比赛总有效流水")]),i("th",[t._v(t._s(t.$t("赠送彩金")))])]),t._l(t.datas,(function(a,s){return i("tr",{key:s},[i("td",[a.bet?i("span",[t._v(t._s(a.bet))]):i("span",[t._v("x")])]),i("td",[a.benefit?i("span",[t._v(t._s(a.benefit))]):i("span",[t._v("x")])])])}))],2)]),i("img",{staticClass:"tit-img",attrs:{src:s("59f5"),alt:""}}),t._m(0)])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"block"},[a("p",[this._v("\n          1.申请方式：\n          会员可完成过关后找客服申请（申请时需要提供比赛注单号），客服会提交至优惠中心审核，通过后奖金将在将于48小时内派发到会员主账户。如会员在过关完成后24小时内未联系客服进行申请，视为主动放弃该活动奖金，活动奖金仅需一倍流水即可出款。\n        ")]),a("p",[this._v("\n          2.凡是投注的体育注单出现提前结算（兑现）的情况，连赢将被终止并重新计算；\n        ")]),a("p",[this._v("\n          3.有效投注额仅对已结算并产生输赢结果的投注额进行计算，任何平局、取消的赛事将不计算在有效投注。（例如：下注100元，香港盘赔率0.6，如赢派彩60元，有效投注为60元；如输本金100元，有效投注为100元。）\n        ")]),a("p",[this._v("\n          4.任何低于欧洲盘1.5或香港盘0.5水位的投注将不计算在内，同个盘口多个注单不予计算，同场比赛多个盘口给予计算。\n          （通过客服查询审核为准）\n        ")]),a("p",[this._v("\n          5.如果在连赢期间存在下注虚拟体育/金融投注/彩票/串关，或者赛事被取消，结局平局的注单，对连赢结果不产生影响，连赢场次依次顺延。\n        ")]),a("p",[this._v("\n          6.此优惠只限于【体育】赛事，任何真人投注/彩票投注等将不被计算在内。\n        ")]),a("p",[this._v("7.此活动遵循一般规则与条款。")])])}],!1,null,"efbeabd8",null);a.default=r.exports},"3dcc":function(t,a,s){"use strict";s("58ae")},"3fb6":function(t,a,s){t.exports=s.p+"img/txt_title1@2x.8b4bfb7a.png"},"493d":function(t,a,s){t.exports=s.p+"img/banner02.6d0dc317.png"},"58ae":function(t,a,s){},"59f5":function(t,a,s){t.exports=s.p+"img/txt_title2@2x.784e2820.png"},b6bb:function(t,a,s){t.exports=s.p+"img/banner.e7e7a35a.png"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["fund"],{"262b":function(t,s,e){},"2d35":function(t,s,e){t.exports=e.p+"img/text2.49eb89f9.png"},"2d99":function(t,s,e){"use strict";e.r(s),e("8e6e"),e("ac6a"),e("456d"),e("7f7f");var a=e("ade3"),i=e("40ef"),n=e("9e2a"),r=e("2f62"),o=e("5a0c"),c=e.n(o),l=e("d399");function _(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,a)}return e}function v(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?_(Object(e),!0).forEach((function(s){Object(a.a)(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):_(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}var m=[0,520,930,1780,2184],d={data:function(){return{title:this.$t("对冲"),buy_type:0,buy_money:"",target_money:"",safe_money:"",id:0,activeDot:0,scrollTop:0,profit:[],activityLevelList:[],status:0,history:[],target_text:this.$t("您已经申请活动，请尽快完成活动要求")}},computed:v(v(v({},Object(r.d)("global",["memberLevel"])),Object(r.c)("users",["isLogin","userInfo"])),{},{num:function(){if(this.buy_money&&this.target_money&&this.safe_money){if(0===this.buy_type)return(1.3*this.buy_money*(this.target_money/this.safe_money)).toFixed(2);if(1===this.buy_type)return(2.6*this.buy_money*(this.target_money/this.safe_money)).toFixed(2)}return 0}}),components:{Lheader:i.a},methods:{goScroll:function(t){var s=this,e=m[t],a=document.getElementsByClassName("container")[0],i=setInterval((function(){var t=Math.floor((e-s.scrollTop)/10);a.scrollTop=s.scrollTop+t,t>0?s.scrollTop>=e&&clearInterval(i):t<0?t<-1?s.scrollTop<=e&&clearInterval(i):clearInterval(i):0===t&&clearInterval(i)}),16)},handleJoinhedge:function(){var t=this;if(this.status>0)this.$router.push({path:"/deposit"});else{if(!this.buy_money)return Object(l.a)(this.$t("请输入基金购买金额！"));if(!this.target_money)return Object(l.a)(this.$t("请输入目标金额！"));if(!this.safe_money)return Object(l.a)(this.$t("请输入保险金额！"));Object(n.C)({id:this.id,buy_type:this.buy_type,target_money:this.target_money,safe_money:this.safe_money,buy_money:this.buy_money}).then((function(){t.$router.push({path:"/deposit"})}))}}},created:function(){var t=this;this.id=this.$route.query.id,Object(n.N)({id:this.id}).then((function(s){var e=s.data.data.condition_setting;t.activityLevelList=e.map((function(s){return s.name=t.memberLevel[s.level].name||"",s}))})),Object(n.z)().then((function(s){t.profit=s.data.data})),this.isLogin&&Object(n.y)().then((function(s){t.history=s.data.data.data.map((function(s){var e,a=c()(s.act_end_time),i=c()(new Date),n=a.diff(i,"hour")%24,r=a.diff(i,"minute")%60;if(e=1===s.buy_type?s.loss_rate>=s.target_money?t.$t("赢"):t.$t("输"):s.profit_rate>=s.target_money?t.$t("赢"):t.$t("输"),i-a<0&&(1===s.status&&(t.status=1),2===s.status)){t.status=2;var o=1===s.buy_type?s.target_money-s.profit_rate:s.target_money-s.loss_rate;t.target_text="距离目标还差".concat(o,"元")}return v(v({},s),{},{timeRemaining:i-a>=0?t.$t("已结束"):"".concat(n,":").concat(r),winningOrLosing:e})}))}))}},u=(e("6186"),e("0c7c")),y=Object(u.a)(d,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"fund"}},[t.$route.query.source?t._e():a("lheader",{attrs:{title:t.title,goback:!0}}),a("div",{staticClass:"container",class:{"no-header":!!t.$route.query.source}},[a("div",[a("div",{staticClass:"top"}),a("div",{staticClass:"lis-profit"},[a("div",{staticClass:"top"},[a("img",{staticClass:"fr",attrs:{src:e("dd3a"),alt:""}}),a("p",[t._v(t._s(t.$t("今日榜单盈利")))]),a("img",{staticClass:"fr",attrs:{src:e("3f04"),alt:""}})]),a("div",{staticClass:"listOne"},[a("div",{staticClass:"winning-list"},[a("p",[t._v(t._s(t.$t("中奖榜单")))]),a("p",[t._v("(1名~5名)")])]),a("table",[a("tr",{staticClass:"rules-title"},[a("th",[t._v(t._s(t.$t("会员名称")))]),a("th",[t._v(t._s(t.$t("购买金额")))]),a("th",[t._v(t._s(t.$t("购买金额")))])]),t._l(t.profit.slice(0,5),(function(s,e){return a("tr",{key:e},[a("td",[t._v(t._s(s.username))]),a("td",[t._v(t._s(s.safe_money))]),a("td",[t._v(t._s(s.profit_money))])])}))],2)]),a("div",{staticClass:"listTwo"},[a("div",{staticClass:"winning-list"},[a("p",[t._v(t._s(t.$t("中奖榜单")))]),a("p",[t._v("(6名~12名)")])]),a("table",[a("tr",{staticClass:"rules-title"},[a("th",[t._v(t._s(t.$t("会员名称")))]),a("th",[t._v(t._s(t.$t("购买金额")))]),a("th",[t._v(t._s(t.$t("购买金额")))])]),t._l(t.profit.slice(5,10),(function(s,e){return e>5?a("tr",{key:e},[a("td",[t._v(t._s(s.username))]),a("td",[t._v(t._s(s.safe_money))]),a("td",[t._v(t._s(s.profit_money))])]):t._e()}))],2)])]),t.status<1?a("div",{staticClass:"apply"},[a("div",{staticClass:"top"},[a("img",{staticClass:"fr",attrs:{src:e("dd3a"),alt:""}}),a("p",[t._v(t._s(t.$t("活动申请")))]),a("img",{staticClass:"fr",attrs:{src:e("3f04"),alt:""}})]),a("div",{staticClass:"img",class:{active:0===t.buy_type},on:{click:function(s){t.buy_type=0}}},[a("img",{attrs:{src:e("3287"),alt:""}})]),a("div",{staticClass:"img",class:{active:1===t.buy_type},on:{click:function(s){t.buy_type=1}}},[a("img",{attrs:{src:e("2d35"),alt:""}})]),a("div",{staticClass:"lendingAmount"},[a("div",{staticClass:"form-item"},[a("label",{staticClass:"form-item-label"},[t._v(t._s(t.$t("基金购买金额")))]),a("div",{staticClass:"form-item-content"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.buy_money,expression:"buy_money"}],attrs:{type:"number",placeholder:t.$t("请输入存款金额")},domProps:{value:t.buy_money},on:{input:function(s){s.target.composing||(t.buy_money=s.target.value)}}})])]),a("div",{staticClass:"form-item"},[a("label",{staticClass:"form-item-label"},[t._v(t._s(t.$t("目标金额")))]),a("div",{staticClass:"form-item-content"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.target_money,expression:"target_money"}],attrs:{type:"number",placeholder:t.$t("请输入目标金额")},domProps:{value:t.target_money},on:{input:function(s){s.target.composing||(t.target_money=s.target.value)}}})])]),a("div",{staticClass:"form-item"},[a("label",{staticClass:"form-item-label"},[t._v(t._s(t.$t("保险金额")))]),a("div",{staticClass:"form-item-content"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.safe_money,expression:"safe_money"}],attrs:{type:"number",placeholder:t.$t("请输入保险金额")},domProps:{value:t.safe_money},on:{input:function(s){s.target.composing||(t.safe_money=s.target.value)}}})])]),a("div",{staticClass:"form-items"},[a("label",{staticClass:"form-item-label"},[t._v(t._s(t.$t("预计派彩礼金")))]),a("span",[t._v(t._s(t.num))])]),t.isLogin?a("div",{staticClass:"btn",on:{click:t.handleJoinhedge}},[t._v(t._s(t.$t("申请活动")))]):a("router-link",{staticClass:"btn",attrs:{to:{path:"/register"},tag:"div"}},[t._v(t._s(t.$t("立即注册")))])],1)]):a("div",{staticClass:"grade profit-loss"},[a("div",{staticClass:"top"},[a("img",{staticClass:"fr",attrs:{src:e("dd3a"),alt:""}}),a("p",[t._v(t._s(t.$t("盈亏记录")))]),a("img",{staticClass:"fr",attrs:{src:e("3f04"),alt:""}})]),a("div",{staticClass:"activityLevelList"},[a("table",[a("tr",{staticClass:"activityLevel-title"},[a("th",[t._v(t._s(t.$t("剩余时间")))]),a("th",[t._v(t._s(t.$t("会员名称")))]),a("th",[t._v(t._s(t.$t("存款金额")))]),a("th",[t._v(t._s(t.$t("保险金额")))]),a("th",[t._v(t._s(t.$t("目标金额")))]),a("th",[t._v(t._s(t.$t("盈利礼金")))]),a("th",[t._v(t._s(t.$t("输赢状态")))])]),t._l(t.history.slice(0,6),(function(s,e){return a("tr",{key:e},[a("td",[t._v(t._s(s.timeRemaining))]),a("td",[t._v(t._s(t.userInfo.username))]),a("td",[t._v(t._s(s.buy_money))]),a("td",[t._v(t._s(s.safe_money))]),a("td",[t._v(t._s(s.target_money))]),a("td",[t._v("\n                "+t._s(1===s.buy_type?s.profit_money:s.loss_money)+"\n              ")]),a("td",[t._v(t._s(s.winningOrLosing))])])}))],2)]),a("div",{staticClass:"target-text"},[t._v("\n          "+t._s(t.target_text)+"\n        ")]),a("div",{staticClass:"look"},[t._v("<<滑动查看更多内容")])]),a("div",{staticClass:"grade"},[a("div",{staticClass:"top"},[a("img",{staticClass:"fr",attrs:{src:e("dd3a"),alt:""}}),a("p",[t._v(t._s(t.$t("活动等级")))]),a("img",{staticClass:"fr",attrs:{src:e("3f04"),alt:""}})]),a("div",{staticClass:"activityLevelList"},[a("table",[a("tr",{staticClass:"activityLevel-title"},[a("th",[t._v(t._s(t.$t("会员名称")))]),a("th",[t._v(t._s(t.$t("参与金额限制")))]),a("th",[t._v(t._s(t.$t("购买金额限制")))]),a("th",[t._v(t._s(t.$t("盈利金额目标区间")))]),a("th",[t._v(t._s(t.$t("亏损金额保护区间")))])]),t._l(t.activityLevelList,(function(s,e){return a("tr",{key:e},[a("td",[t._v("\n                "+t._s(s.name)+"\n              ")]),a("td",[t._v("\n                "+t._s(s.condition.join_money.min)+"~"+t._s(s.condition.join_money.max)+"\n              ")]),a("td",[t._v("\n                "+t._s(s.condition.buy_money.min)+"~"+t._s(s.condition.buy_money.max)+"\n              ")]),a("td",[t._v("\n                "+t._s(s.condition.target_money.min)+"~"+t._s(s.condition.target_money.max)+"\n              ")]),a("td",[t._v("\n                "+t._s(s.condition.safe_money.min)+"~"+t._s(s.condition.safe_money.max)+"\n              ")])])}))],2)]),a("div",{staticClass:"look"},[t._v("<<滑动查看更多内容")])]),a("div",{staticClass:"regulations"},[a("div",{staticClass:"top"},[a("img",{staticClass:"fr",attrs:{src:e("dd3a"),alt:""}}),a("p",[t._v(t._s(t.$t("活动细则")))]),a("img",{staticClass:"fr",attrs:{src:e("3f04"),alt:""}})]),a("div",{staticClass:"text"},[a("p",[a("span",[t._v("1")]),t._v(t._s(t.$t(t.$config[t.$projectname].secName))+"所有二星及以上会员均可享受，自开始申请，7天为一周期，每周可参与一次。\n          ")]),t._m(0),t._m(1),t._m(2),a("p",[a("span",[t._v("5")]),t._v(t._s(t.$t("会员不可以同时购买盈利和亏损基金")))]),t._m(3),t._m(4),a("p",[a("span",[t._v("8")]),t._v(t._s(t.$t(t.$config[t.$projectname].secName))+"拥有最终解析权。")])])])])])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",[this._v("2")]),this._v("会员在选定一个起始金额之后完成该笔金额的存款才能正\n          ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",[this._v("3")]),this._v("\n            会员在选择好并确认活动各项指标之后只要达标即可随时领取礼金，本活动如果超过24小时没有完成，系统默认会员自愿放弃已投入的对冲保险金。\n          ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",[this._v("4")]),this._v("本活动可以一日内多次参与，但是必须完成前一次活动才能继续申请第二次参与。\n          ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",[this._v("6")]),this._v("目标金额不得低于存款金额的2倍以上。如果盈利目标是1万，存款金额不得高于2万。\n          ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",[this._v("7")]),this._v("本优惠活动只限娱乐性质的会员参加，如发现用户拥有超过一个账户，包括同一姓名，同一邮箱，同一/相似IP地址，同一住址，同一银行卡，同一电脑，禁止多开窗口进行投注，软件投注和套免费游戏等其他任何不正常投注行为，一经发现我们将保留冻结帐户以及没收所有余额的权利。\n          ")])}],!1,null,"45545d4d",null);s.default=y.exports},3287:function(t,s,e){t.exports=e.p+"img/text1.9601c792.png"},"3f04":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAARCAYAAACcnDNEAAADqklEQVRoQ+2bzW9bRRTFz515dhth10aiJKlNF0VBqAtEE7ciJO0WUBGskgUVEhLddIkaHAfYUbVxSSTYwKYSlRAsIthRhW5xrBQlbRYgJFrxoaqO3fIhx3bkxvabg54rt6kT/wPvjZfWeHGOzk937txrQY/PwsKCfnUs8boonFHCz6/8uH5lcnLS7XXefm8d8LMDsps4D5LXjg+MA3oWwBCAW4CbWcyVliwsfo6D1dbLgR2gPIBk8DghsyCaAnxN4BQEIQEzi7lirgOLd/aV0WTs6vKdDQuQDZmfHXgMlEeQqKwQLa14tlCtrCX2xYZdYo6EIzDTHiwTExOslZZOEPKOQH0ZGRjNiYjxs1lWW3AdeAjKDkg0pvqebqyUy4jEf49u1p/ZSrku5iBQgJkBlQF4niLPC3ATRGZxqZC3lSW4YfKz8jYo3ZDQYCqaaKzU74ZSLuVtLfyqr7+5Wi2Ej4rGBQADAF1AiiC/9a5mIuIAklnM3bF9jJ8TE1BtQlLXSrlxgcqS4nqQ3Cz9sjqUPDysqOYApACsasjZXws/rx1OvjDcovuZQJ4D8GG5JZdjYb4Iw3mBCDSmI/tfXrLXsIAmyqeyZbOUf9MQGQBNLTr9xz+3bxyMJ0ZE4yKAUQAagPcsvEwX6dvlwvVDTx0YdimzEDow8kHkv9i1anyj8xutwHOG7p8+9czKCpgDDGkj1VL+Kg2PCTAT+a15aeOQE9VhdQ7EaQjCHU8E0iB4yW2Yj2IHi5VqMfmuCC8Q/J4t9d6+5FalVgydpuA8ICUFqQTMTyvXpw6Q3JLN0vIbhmaGZAtG0tHEntX63fsjLYM5EXmpU1FIXnMUpvr6916vFrZS7V5F6DgKM3vvxX+qPvlvSpST9c4rrT42rcZfPvXNygqYA+2KQi7o2t+JMbq8KCIuXXk/Wgyv1BONIy44v71H6SuE1+rJ+yMG6lOS7R4lMiCXq+vNI6Icr58Raqaj+8fytkcJWJp8Lnfbq1dynPBgQUvLg6fh7lev+r3wUdd0vXoB34E8RYEjlHRk0DbyPs9MIOV1zVEewdKpLOVnq0/E46hV1/ccE81PwJ1zFIC3QKSjg7aSBDJFARC9y2T+8cpSqGzcaE/mDeYJaIGkvVmJncwHIB1W4kMHeux6ebCYbHvXS+QbAG8JGCLU9PaBot31skkKigO9t4fH+8cgTpbAkLSvVjJtV1SCEgurs9uBXUHprLWcPHHgpEt1BsZ88UPe/h/Fxie4DvwPaaLYECr/ayYAAAAASUVORK5CYII="},6186:function(t,s,e){"use strict";e("262b")},dd3a:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAARCAYAAACcnDNEAAADqklEQVRoQ+2bzW9bRRTFz515dhth10aiJKlNF0VBqAtEE7ciJO0WUBGskgUVEhLddIkaHAfYUbVxSSTYwKYSlRAsIthRhW5xrBQlbRYgJFrxoaqO3fIhx3bkxvabg54rt6kT/wPvjZfWeHGOzk937txrQY/PwsKCfnUs8boonFHCz6/8uH5lcnLS7XXefm8d8LMDsps4D5LXjg+MA3oWwBCAW4CbWcyVliwsfo6D1dbLgR2gPIBk8DghsyCaAnxN4BQEIQEzi7lirgOLd/aV0WTs6vKdDQuQDZmfHXgMlEeQqKwQLa14tlCtrCX2xYZdYo6EIzDTHiwTExOslZZOEPKOQH0ZGRjNiYjxs1lWW3AdeAjKDkg0pvqebqyUy4jEf49u1p/ZSrku5iBQgJkBlQF4niLPC3ATRGZxqZC3lSW4YfKz8jYo3ZDQYCqaaKzU74ZSLuVtLfyqr7+5Wi2Ej4rGBQADAF1AiiC/9a5mIuIAklnM3bF9jJ8TE1BtQlLXSrlxgcqS4nqQ3Cz9sjqUPDysqOYApACsasjZXws/rx1OvjDcovuZQJ4D8GG5JZdjYb4Iw3mBCDSmI/tfXrLXsIAmyqeyZbOUf9MQGQBNLTr9xz+3bxyMJ0ZE4yKAUQAagPcsvEwX6dvlwvVDTx0YdimzEDow8kHkv9i1anyj8xutwHOG7p8+9czKCpgDDGkj1VL+Kg2PCTAT+a15aeOQE9VhdQ7EaQjCHU8E0iB4yW2Yj2IHi5VqMfmuCC8Q/J4t9d6+5FalVgydpuA8ICUFqQTMTyvXpw6Q3JLN0vIbhmaGZAtG0tHEntX63fsjLYM5EXmpU1FIXnMUpvr6916vFrZS7V5F6DgKM3vvxX+qPvlvSpST9c4rrT42rcZfPvXNygqYA+2KQi7o2t+JMbq8KCIuXXk/Wgyv1BONIy44v71H6SuE1+rJ+yMG6lOS7R4lMiCXq+vNI6Icr58Raqaj+8fytkcJWJp8Lnfbq1dynPBgQUvLg6fh7lev+r3wUdd0vXoB34E8RYEjlHRk0DbyPs9MIOV1zVEewdKpLOVnq0/E46hV1/ccE81PwJ1zFIC3QKSjg7aSBDJFARC9y2T+8cpSqGzcaE/mDeYJaIGkvVmJncwHIB1W4kMHeux6ebCYbHvXS+QbAG8JGCLU9PaBot31skkKigO9t4fH+8cgTpbAkLSvVjJtV1SCEgurs9uBXUHprLWcPHHgpEt1BsZ88UPe/h/Fxie4DvwPaaLYECr/ayYAAAAASUVORK5CYII="}}]);
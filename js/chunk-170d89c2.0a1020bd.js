(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-170d89c2"],{"0fa8":function(t,s,e){"use strict";e("c498")},"3ef5":function(t,s,e){"use strict";e("5c23")},"5c23":function(t,s,e){},c498:function(t,s,e){},d607:function(t,s,e){"use strict";e.r(s);var a=e("31f3"),i=e("42a1"),n=(e("8e6e"),e("456d"),e("ac6a"),e("5df3"),e("ade3")),c=(e("96cf"),e("1da1")),o=e("d768"),l=e.n(o),r=e("98e1"),p=e("bd8a"),v=(e("2f3b"),e("6e87")),d=e("2f62");function _(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,a)}return e}var g,m={name:"Privilege",components:{VeHistogram:l.a},data:function(){var t=[{game_cate_id:v.a,game_cate_name:this.$t("真人")},{game_cate_id:v.f,game_cate_name:this.$t("电子")},{game_cate_id:v.d,game_cate_name:this.$t("捕鱼")},{game_cate_id:v.e,game_cate_name:this.$t("彩票")},{game_cate_id:v.b,game_cate_name:this.$t("棋牌")},{game_cate_id:v.g,game_cate_name:this.$t("体育")},{game_cate_id:v.c,game_cate_name:this.$t("电竞")}];return{showPopIndex:0,showPopup:!1,applyTitle:"",applyId:0,basicInfo:{level:0,level_name:this.$t("新手上路Lv0"),week_valid_bet:0,all_valid_bet:0,all_benefit_money:0,next_benefit_money:0,need_valid_bet:0,all_wash_code_money:0},platforms:t,platform:t[0],privilege1:[],privilege2:[],rowsCached:{},chartData:{columns:["level","proportion"],rows:[]},chartOptions:{responsive:!0,maintainAspectRatio:!1,labelMap:{max_money:this.$t("有效投注额"),proportion:this.$t("可享受洗码")}},aoMenUi:["10009","10010","10011","10012","10034"],levelList:[]}},created:(g=Object(c.a)(regeneratorRuntime.mark((function t(){var s=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(p.G)().then((function(t){0===t.data.code&&(s.levelList=t.data.data)}));case 1:case"end":return t.stop()}}),t)}))),function(){return g.apply(this,arguments)}),computed:function(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?_(Object(e),!0).forEach((function(s){Object(n.a)(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):_(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}({},Object(d.d)("users",["userInfo","isLogin"])),methods:{callService:function(){this.$openKefu()},init:function(){Promise.all([this.getVipBasicInfo(),this.getVipLevelProfile(),this.getVipPrivilege(1),this.getVipPrivilege(2)])},getVipBasicInfo:function(){var t=this;this.isLogin&&Object(r.c)().then((function(s){if(0===s.data.code){var e=s.data.data;t.basicInfo=e,window.sessionStorage.setItem("myVipInfo",JSON.stringify(e))}}))},getVipLevelProfile:function(){var t=this,s=this.rowsCached,e=this.platform.game_cate_id;s[e]?this.chartData.rows=s[e]:Object(r.d)({game_cate_id:e}).then((function(s){if(0===s.data.code){var a=s.data.data;t.chartData.rows=a,t.rowsCached[e]=a}}))},getVipPrivilege:function(t){var s=this;Object(r.e)({type:t}).then((function(e){if(0===e.data.code){var a=e.data.data;s["privilege".concat(t)]=a}}))},onPlatformSelected:function(t){this.platform=t,this.getVipLevelProfile()},goAnalysis:function(){this.isLogin?this.$router.push({name:"analysis",query:{proportion:this.chartData.rows[this.basicInfo.level-1]?this.chartData.rows[this.basicInfo.level-1].proportion:0}}):this.$router.push({name:"login"})},eventApply:function(t){this.isLogin?(t.id?(this.applyTitle=t.title,this.applyId=t.id):(this.applyTitle="[请后台配置数据] - 测试用活动标题"+t,this.applyId=t),this.showPopup=!0):this.$router.push({name:"login"})}}},h=(e("0fa8"),e("0c7c")),u=Object(h.a)(m,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"privilege"},[e("div",{staticClass:"privilege-service"},[e("p",{on:{click:t.callService}},[e("img",{attrs:{src:this.$imgs["otherIcon/service"],alt:""}}),e("span",[t._v(t._s(t.$t("客服")))])])]),e("van-image",{staticClass:"banner",attrs:{src:this.$imgs["vip/banner@2x"]}}),e("div",{staticClass:"vip-bottom"},[e("span",[t._v(t._s(t.$t("贵宾会员每月进行更新")))])]),e("div",{staticClass:"vip-level"},[e("div",{staticClass:"drag-frame"},[e("div",{staticClass:"drag-container"},[e("div",{staticClass:"level-badges"},[t._l(t.levelList,(function(s,a){return[a>0&&a<5?e("div",{key:a,staticClass:"level-cell v1-bg",class:"v"+a+"-bg",style:{backgroundImage:t.$bImgs["vip/VIP"+a+"@2x"]}},[e("p",{staticClass:"top"},4===a?[t._v(t._s(t.$t("顶级")))]:[t._v("V"+t._s(a))]),e("button",{staticClass:"button button1",on:{click:function(s){return t.$router.push({path:"/"})}}},[t._v("\n                  "+t._s(t.$t("立即投注"))+"\n                ")]),e("p",{staticClass:"bottom"},[t._v("月有效投注额"+t._s(s.valid_bet_money)+"万")])]):t._e()]}))],2),e("div",{staticClass:"level-step-bar"},[e("ul",{staticClass:"progress"},[e("li",[e("van-image",{staticClass:"dian",attrs:{src:this.$imgs["vip/dian@2x"]}}),e("p",[t._v("V1")])],1),e("li",[e("van-image",{staticClass:"dian",attrs:{src:this.$imgs["vip/dian@2x"]}}),e("p",[t._v("V2")])],1),e("li",[e("van-image",{staticClass:"dian",attrs:{src:this.$imgs["vip/dian@2x"]}}),e("p",[t._v("V3")])],1),e("li",[e("van-image",{staticClass:"dian",attrs:{src:this.$imgs["vip/dian@2x"]}}),e("p",[t._v(t._s(t.$t("顶级")))])],1)])])])])]),e("div",{staticClass:"vip-rights"},[e("div",{staticClass:"vip-rights-bg",style:{backgroundImage:t.$bImgs["vip/vip-bg"]}}),e("div",{staticClass:"rights-head"},[e("div",{staticClass:"rights-title-0",style:{backgroundImage:t.$bImgs["vip/rights-000"]}})]),e("div",{staticClass:"rights-content"},[e("div",{staticClass:"rights-cell",on:{click:function(s){t.showPopIndex=1}}},[e("div",{staticClass:"close-mode",style:{backgroundImage:t.$bImgs["vip/VIP_chuma@2x"]}},[e("p",[t._v(t._s(t.$t("出码服务")))])])]),e("div",{staticClass:"rights-cell",on:{click:function(s){t.showPopIndex=2}}},[e("div",{staticClass:"close-mode",style:{backgroundImage:t.$bImgs["vip/VIP_call@2x"]}},[e("p",[t._v(t._s(t.$t("专属客服")))])])]),e("div",{staticClass:"rights-cell",on:{click:function(s){t.showPopIndex=3}}},[e("div",{staticClass:"close-mode",style:{backgroundImage:t.$bImgs["vip/VIP_call@2x"]}},[e("p",[t._v(t._s(t.$t("存款通道")))])])]),e("div",{staticClass:"rights-cell",on:{click:function(s){t.showPopIndex=4}}},[e("div",{staticClass:"close-mode",style:{backgroundImage:t.$bImgs["vip/VIP_call@2x"]}},[e("p",[t._v(t._s(t.$t("专属域名")))])])]),e("div",{staticClass:"rights-cell",on:{click:function(s){t.showPopIndex=5}}},[e("div",{staticClass:"close-mode",style:{backgroundImage:t.$bImgs["vip/VIP_call@2x"]}},[e("p",[t._v(t._s(t.$t("定制礼品")))])])]),e("div",{staticClass:"rights-cell",on:{click:function(s){t.showPopIndex=6}}},[e("div",{staticClass:"close-mode",style:{backgroundImage:t.$bImgs["vip/VIP_call@2x"]}},[e("p",[t._v(t._s(t.$t("品牌特效")))])])]),e("div",{class:t.showPopIndex?"pops show-pops":"pops"},[1===t.showPopIndex?e("div",{staticClass:"pop",style:{backgroundImage:t.$bImgs["vip/VIP_pic1@2x"]}},[e("van-icon",{staticClass:"close",attrs:{name:"cross"},on:{click:function(s){t.showPopIndex=0}}}),e("p",{staticClass:"pop-title"},[t._v(t._s(t.$t("出码资格")))]),e("p",{staticClass:"pop-content"},[t._v("\n              凡是VIP贵宾会会员均有资格申请“VIP贵宾厅出码”服务及高规格接待\n            ")]),e("p",{staticClass:"pop-footer"},[t._v(t._s(t.$t("本权益需您联系")))])],1):t._e(),2===t.showPopIndex?e("div",{staticClass:"pop",style:{backgroundImage:t.$bImgs["vip/VIP_pic2@2x"]}},[e("van-icon",{staticClass:"close",attrs:{name:"cross"},on:{click:function(s){t.showPopIndex=0}}}),e("p",{staticClass:"pop-title"},[t._v(t._s(t.$t("专属客服")))]),e("p",{staticClass:"pop-content"},[t._v("\n              优先接听，第一时间告知客户网站优惠 为您提供最专业贴心的客服服务\n            ")]),e("p",{staticClass:"pop-footer"},[t._v(t._s(t.$t("本权益需您联系")))])],1):t._e(),3===t.showPopIndex?e("div",{staticClass:"pop",style:{backgroundImage:t.$bImgs["vip/VIP_pic3@2x"]}},[e("van-icon",{staticClass:"close",attrs:{name:"cross"},on:{click:function(s){t.showPopIndex=0}}}),e("p",{staticClass:"pop-title"},[t._v(t._s(t.$t("存款通道")))]),e("p",{staticClass:"pop-content"},[t._v("\n              凡是龙门贵宾会会员均有资格申请“专属存款通道”\n              存款更方便、安全、快捷\n            ")]),e("p",{staticClass:"pop-footer"},[t._v(t._s(t.$t("本权益需您联系")))])],1):t._e(),4===t.showPopIndex?e("div",{staticClass:"pop",style:{backgroundImage:t.$bImgs["vip/VIP_pic4@2x"]}},[e("van-icon",{staticClass:"close",attrs:{name:"cross"},on:{click:function(s){t.showPopIndex=0}}}),e("p",{staticClass:"pop-title"},[t._v(t._s(t.$t("专属域名")))]),e("p",{staticClass:"pop-content"},[t._v(t._s(t.$t("私人定制域名")))]),e("p",{staticClass:"pop-footer"},[t._v(t._s(t.$t("本权益需您联系")))])],1):t._e(),5===t.showPopIndex?e("div",{staticClass:"pop",style:{backgroundImage:t.$bImgs["vip/VIP_pic5@2x"]}},[e("van-icon",{staticClass:"close",attrs:{name:"cross"},on:{click:function(s){t.showPopIndex=0}}}),e("p",{staticClass:"pop-title"},[t._v(t._s(t.$t("定制礼品")))]),e("p",{staticClass:"pop-content"},[t._v(t._s(t.$t("凡是龙门贵宾会员均可申请")))]),e("p",{staticClass:"pop-footer"},[t._v(t._s(t.$t("本权益需您联系")))])],1):t._e(),6===t.showPopIndex?e("div",{staticClass:"pop",style:{backgroundImage:t.$bImgs["vip/VIP_pic6@2x"]}},[e("van-icon",{staticClass:"close",attrs:{name:"cross"},on:{click:function(s){t.showPopIndex=0}}}),e("p",{staticClass:"pop-title"},[t._v(t._s(t.$t("品牌特邀")))]),e("p",{staticClass:"pop-content"},[t._v(t._s(t.$t("特邀嘉宾可参与尊龙全球品牌活动")))]),e("p",{staticClass:"pop-footer"},[t._v(t._s(t.$t("本权益需您联系")))])],1):t._e()])]),e("div",{staticClass:"vip-rule"},[e("h3",[t._v(t._s(t.$t("贵宾会说明")))]),e("ul",[e("li",[t._v("\n            1.龙门贵宾会成员每月更新一次，当月有效投注额计入下月会员等级；\n          ")]),e("li",[t._v("2.龙门贵宾会会籍不可转让；")]),e("li",[t._v("3.如贵宾放弃参与所享福利，将不予任何形式折现；")]),e("li",[t._v("\n            4.本活动的最终解释权归"+t._s(t.$t(t.$config[t.$projectname].project))+"所有。\n          ")])])])])],1)}),[],!1,null,"bba79f24",null).exports,f={name:"VIP",components:{Gheader:a.a,Vtabbar:i.a,Privilege:u},data:function(){return{navs:[{title:this.$t("VIP特权"),name:"privilege"},{title:this.$t("VIP尊享活动"),name:"events"}],active:0}},created:function(){},mounted:function(){},computed:{},methods:{onTabChange:function(t,s){}}},b=(e("3ef5"),Object(h.a)(f,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vip-page"},[t.$route.query.source?t._e():e("vtabbar",{staticClass:"m-footer",attrs:{index:2}}),"10030"!=t.$projectname&&"10061"!=t.$projectname?[e("div",{class:["m-body",{"bg-img":-1!==["vip"].indexOf(t.$route.name)}]},[e("van-tabs",{staticClass:"nav-type-1",attrs:{animated:"",swipeable:"","swipe-threshold":6,color:t.$colorjs.baseColor,"line-height":"3px",sticky:""},on:{change:t.onTabChange},model:{value:t.active,callback:function(s){t.active=s},expression:"active"}},t._l(t.navs,(function(s){return e("van-tab",{key:s.name,attrs:{title:t.$t(s.title)}},["privilege"===s.name?e("Privilege"):t._e()],1)})),1)],1)]:t._e(),"10030"===t.$projectname||"10061"===t.$projectname?[e("Privilege")]:t._e()],2)}),[],!1,null,"30ed00eb",null));s.default=b.exports}}]);
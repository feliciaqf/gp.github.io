(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-96786500"],{"03b5":function(t,e,a){"use strict";a("fa62")},1:function(t,e){},"1bde":function(t,e,a){var i={"./ag-a.png":"ccfb","./ag.png":"ba894","./ag3d@2x.png":"4e11","./ag@2x.png":"57a4","./bbin-a.png":"4104","./bbin-dr@2x.png":"d97d","./bbin.png":"823f","./bbin2@2x.png":"4140","./bbin@2x.png":"94a8","./bg@2x.jpg":"da2a","./gg@2x.png":"9152","./mw-a.png":"ac63","./mw.png":"3f0e","./mw@2x.png":"6fe7","./pt@2x.png":"b8e6"};function s(t){var e=o(t);return a(e)}function o(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=o,t.exports=s,s.id="1bde"},"3cd1":function(t,e,a){"use strict";a("cb5f")},"4af7":function(t,e,a){"use strict";a("90ca")},"4d33":function(t,e,a){"use strict";a.r(e),a("8e6e"),a("ac6a"),a("456d");var i=a("ade3"),s=a("e9a6"),o=a("f708");function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={name:"Casino",components:{Roadmap:s.a},data:function(){return{casinos:o.a.map((function(t){return n(n({},t),{},{loaded:!1})})),vid:null}},created:function(){},methods:{}},c=(a("9a10"),a("0c7c")),m=Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"casino"},[a("div",{staticClass:"games-wrap float-wrap"},t._l(t.casinos,(function(e){return"sunbet"!==e.name?a("div",{key:e.name,staticClass:"game-item",class:["large",{"gray-scal":t.$getGameStatus(e,"真人")}],on:{click:function(a){return t.$playGame(e,"真人")}}},[a("van-image",{attrs:{"lazy-load":"",src:e.thumb},on:{load:function(t){e.loaded=!0}}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.recommend,expression:"item.recommend"}],staticClass:"recommend",attrs:{src:t.$imgs["home/recommend"],alt:""}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"item.loaded"}],staticClass:"game-info"},[a("div",{staticClass:"flow-wrapper"},[a("img",{attrs:{"lazy-load":"",src:t.$imgs["home/flow-bg"]}}),a("div",{staticClass:"flow"},[t._v("最高返水"+t._s(t.$getWashRate(e,"真人"))+"%")])]),a("span",[t._v("\n          "+t._s(t.$t(e.title))+"\n          "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.$getGameStatus(e,"真人"),expression:"$getGameStatus(item, '真人')"}]},[t._v("(维护中)")])])])],1):t._e()})),0)])}),[],!1,null,"a0a324be",null).exports,u=a("6e87");function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={name:"Chess",components:{},data:function(){return{games:o.b.map((function(t){return d(d({},t),{},{loaded:!1})})),cateId:u.b}},created:function(){},computed:{},methods:{}},f=Object(c.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chess"},[a("div",{staticClass:"games-wrap"},t._l(t.games,(function(e,i){return a("div",{key:i,staticClass:"game-item",class:["large",{"gray-scal":t.$getGameStatus(e,"棋牌")}],on:{click:function(a){return t.$playGame(e,"棋牌")}}},[a("van-image",{attrs:{src:e.thumb,"lazy-load":""},on:{load:function(t){e.loaded=!0}}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.recommend,expression:"item.recommend"}],staticClass:"recommend",attrs:{src:t.$imgs["home/recommend"],alt:""}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"item.loaded"}],staticClass:"game-info"},[a("div",{staticClass:"flow-wrapper"},[a("img",{attrs:{"lazy-load":"",src:t.$imgs["home/flow-bg"]}}),a("div",{staticClass:"flow"},[t._v("最高返水"+t._s(t.$getWashRate(e,"棋牌"))+"%")])]),a("span",[t._v("\n          "+t._s(t.$t(e.title))+"\n          "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.$getGameStatus(e,"棋牌"),expression:"$getGameStatus(item, '棋牌')"}]},[t._v("(维护中)")])])])],1)})),0)])}),[],!1,null,"0e4c19eb",null).exports,g=(a("7f7f"),a("2b0e")),v=a("2f62");function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}var y={name:"RankItem",props:["rankData"],computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(v.d)("games",["allPlatforms","allCates","gameCatesPlatforms"])),methods:{goGame:function(t){var e=this;this.gameCatesPlatforms.forEach((function(a){t.game_cate_id==a.game_cate_id&&a.platform_list.forEach((function(a){if(a.game_platform_id==t.platform_id){var i={default_game_id:a.default_game_id,platform_id:t.platform_id};e.$playGame(i)}}))}))}}},w=(a("cd58"),Object(c.a)(y,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-swipe",{staticClass:"profit-swipe",attrs:{loop:!1,width:220,autoplay:4e3,"show-indicators":!1}},t._l(t.rankData,(function(e,i){return a("van-swipe-item",{key:i,staticClass:"swipe-rank-item"},[a("div",{staticClass:"box"},[a("div",{staticClass:"info"},[a("p",{staticClass:"login-name"},[t._v(t._s(t.$t("会员"))+" "+t._s(t.$hideUsername(e.username)))]),a("p",[t._v(t._s(t.$t("投注"))+" "+t._s(t._f("currency")(e.valid_bet,"¥"))+"，"+t._s(t.$t("盈利")))]),a("h3",[t._v(t._s(t._f("currency")(e.num,"¥")))])]),a("span",{staticClass:"tag"},[t._v(t._s(t.$platformName(e.platform_id,t.allPlatforms))+t._s(t.allCates[e.game_cate_id]))]),a("div",{staticClass:"action",on:{click:function(a){return t.goGame(e)}}},[a("img",{attrs:{src:t.$imgs["home/icon-fudai@2x"]}}),a("span",[t._v(t._s(t.$t("沾沾喜气")))])])])])})),1)}),[],!1,null,"26a0a298",null).exports),_=a("83e4"),O=a("dbf9"),j=a("9e3b"),C=a.n(j);function $(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function P(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?$(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):$(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}g.a.use(C.a);var S={name:"Slots",mixins:[O.a],props:["slotsType"],components:{RankSwipe:w},data:function(){return{navs:[{title:this.$t("全部"),name:""},{title:this.$t("最热"),name:"hot"},{title:this.$t("最新"),name:"latest"},{title:this.$t("奖金池"),name:"reward"},{title:this.$t("我的收藏"),name:"fav"}],payforlineData:null,payforline:0,cateId:u.f,jackpotSettings:{},decimals:2,duration:1e7,projectName:"10031",aoMenUi:["takchun","10012","10013","10014","10020","mgm8","10006","10011","10007","10009","10010","10008","10034","10057"],slotsData:[{id:21,name:"CQ9",code:"cq9",title:"CQ9电子",game_cate_id:2,default_game_id:2102,game_platform_id:1,h5_default_game_id:"",type:this.$t("电子"),text:"slots",thumb:"home_slot_pic1",desc:[this.$t("超多精品游戏"),this.$t("亿万奖池爆不停")]},{id:7,name:"mg",code:"mg",title:this.$t("MG电子"),game_cate_id:2,default_game_id:647,game_platform_id:7,h5_default_game_id:"",type:this.$t("电子"),text:"slots",desc:[this.$t("超多精品游戏"),this.$t("亿万奖池爆不停")]},{default_game_id:3990,game_platform_id:116,text:"slots",name:"pt",type:this.$t("电子"),thumb:"home_slot_pic3",title:this.$t("PT电子"),desc:[this.$t("超多精品游戏"),this.$t("亿万奖池爆不停")]}].map((function(t){return P(P({},t),{},{loaded:!1})}))}},created:function(){this.init(),this.getJackpots(),!this.dataProfitsRankOriginal&&this.getProfitsRank(),this.getpayforline()},computed:P(P({},Object(v.d)("global",["dataProfitsRankOriginal"])),{},{winnerlists:function(){var t=this.dataProfitsRankOriginal;return t&&t[1]?t[1].list:[]}}),watch:{payforline:function(){this.pageNo=0,this.loadData(!0)},slotsType:function(){this.loadData()}},methods:{go:function(t,e,a){e?this.$router.push({path:t,query:{platform:a.name}}):this.$router.push({path:t})},getJackpots:function(){var t=this,e=this.decimals,a=this.duration;Object(_.o)().then((function(i){var s=i.data,o=s.code,r=s.data;if(s.msg,0===o){var n=r[1].pot_money;t.jackpotSettings={startVal:n,endVal:2*n,duration:a,decimals:e}}}))},getpayforline:function(){var t=this;Object(_.l)().then((function(e){var a=e.data,i=a.code,s=a.data;a.msg,0===i&&(t.payforlineData=s)}))},onPayforlineClick:function(t){this.payforline=t}}},x=(a("5805"),Object(c.a)(S,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slots"},[a("div",{staticClass:"games-wrap float-wrap"},[t._l(t.slotsData,(function(e,i){return a("div",{staticClass:"game-item",class:[e.text,"large","mg"===e.name?"large":"",{"gray-scal":t.$getGameStatus(e,"电子")}],on:{click:function(a){return t.go("/slotsSearch",1,e)}}},[a("van-image",{attrs:{"lazy-load":"",src:t.$imgs["home/slots/home_slot_pic"+(i+1)+"@2x"]},on:{load:function(t){e.loaded=!0}}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.recommend,expression:"item.recommend"}],staticClass:"recommend",attrs:{src:t.$imgs["home/recommend"],alt:""}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"item.loaded"}],staticClass:"game-info"},[a("div",{staticClass:"flow-wrapper"},[a("img",{attrs:{"lazy-load":"",src:t.$imgs["home/flow-bg"]}}),a("div",{staticClass:"flow"},[t._v("最高返水"+t._s(t.$getWashRate(e,"电子"))+"%")])]),a("span",[t._v("\n          "+t._s(t.$t(e.title))+"\n          "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.$getGameStatus(e,"电子"),expression:"$getGameStatus(item, '电子')"}]},[t._v("(维护中)")])])])],1)})),a("div",{staticClass:"game-item large",on:{click:function(e){return t.go("/slotsSearch",0,"")}}},[a("van-image",{attrs:{"lazy-load":"",src:t.$imgs["home/home_slot_pic4@2x"]}}),a("div",{staticClass:"game-info large"},[a("h3",[t._v(t._s(t.$t("查看更多")))])])],1)],2)])}),[],!1,null,"3a89add2",null).exports);function N(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function k(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?N(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var D={name:"Lottery",data:function(){return{games:o.h.map((function(t){return k(k({},t),{},{loaded:!1})})),gamesLottery:o.g,lists:[],cateId:u.e}},created:function(){this.getLottery()},methods:{getLottery:function(){var t=this;this.$loading({mask:!1});var e=this.cateId;Object(_.n)({game_cate_id:e}).then((function(e){var a=e.data,i=a.code,s=a.data;a.msg,0===i&&(t.lists=s,t.$toast.clear())}))}}},E=(a("4f18"),Object(c.a)(D,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lottery"},[a("div",{staticClass:"games-wrap float-wrap"},t._l(t.games,(function(e,i){return a("div",{key:e.text,staticClass:"game-item",class:[e.text,"large",{"gray-scal":t.$getGameStatus(e,"彩票",i)}],on:{click:function(a){return t.$playGame(e,"彩票",i)}}},[a("van-image",{attrs:{"lazy-load":"",src:e.thumb},on:{load:function(t){e.loaded=!0}}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.recommend,expression:"item.recommend"}],staticClass:"recommend",attrs:{src:t.$imgs["home/recommend"],alt:""}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"item.loaded"}],staticClass:"game-info"},[a("div",{staticClass:"flow-wrapper"},[a("img",{attrs:{"lazy-load":"",src:t.$imgs["home/flow-bg"]}}),a("div",{staticClass:"flow"},[t._v("最高返水"+t._s(t.$getWashRate(e,"彩票"))+"%")])]),a("span",[t._v("\n          "+t._s(t.$t(e.title))+"\n          "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.$getGameStatus(e,"彩票"),expression:"$getGameStatus(item, '彩票')"}]},[t._v("(维护中)")])])])],1)})),0)])}),[],!1,null,"1232a70a",null).exports);function z(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function I(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?z(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var L={name:"Fishing",data:function(){return{games:o.d.map((function(t){return I(I({},t),{},{loaded:!1})})),lists:[],cateId:u.d}},created:function(){},methods:{}},F=(a("4af7"),Object(c.a)(L,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fishing"},[i("div",{staticClass:"games-wrap float-wrap"},t._l(t.games,(function(e,s){return"GG捕鱼天下"!==e.title?i("div",{key:s,staticClass:"game-item",class:[e.text,"large",{"gray-scal":t.$getGameStatus(e,"捕鱼")}],on:{click:function(a){return t.$playGame(e,"捕鱼")}}},[i("van-image",{attrs:{"lazy-load":"",src:a("1bde")("./"+e.thumb)},on:{load:function(t){e.loaded=!0}}}),i("img",{directives:[{name:"show",rawName:"v-show",value:e.recommend,expression:"item.recommend"}],staticClass:"recommend",attrs:{src:t.$imgs["home/recommend"],alt:""}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"item.loaded"}],staticClass:"game-info"},[i("div",{staticClass:"flow-wrapper"},[i("img",{attrs:{"lazy-load":"",src:t.$imgs["home/flow-bg"]}}),i("div",{staticClass:"flow"},[t._v("最高返水"+t._s(t.$getWashRate(e,"捕鱼"))+"%")])]),i("span",[t._v("\n          "+t._s(t.$t(e.title))+"\n          "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.$getGameStatus(e,"捕鱼"),expression:"$getGameStatus(item, '捕鱼')"}]},[t._v("(维护中)")])])])],1):t._e()})),0)])}),[],!1,null,"2d608d6e",null).exports);function G(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function T(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?G(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):G(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var W={name:"Sports",components:{},data:function(){return{games:o.i.map((function(t){return T(T({},t),{},{loaded:!1})})),gamesSport:o.f,lists:[],cateId:u.g}},created:function(){},methods:{getGameLists:function(){var t=this;this.$loading({mask:!1});var e=this.cateId;Object(_.h)({game_cate_id:e}).then((function(e){var a=e.data,i=a.code,s=a.data;if(a.msg,0===i){var o=[];s.data.forEach((function(t){t.is_hot&&t.pic&&o.push(t)})),t.lists=o,t.$toast.clear()}}))}}},B=(a("03b5"),Object(c.a)(W,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sports"},[a("div",{staticClass:"games-wrap float-wrap"},t._l(t.games,(function(e){return a("div",{key:e.text,staticClass:"game-item",class:[e.text,"shaba"===e.text?"large":"",{"gray-scal":t.$getGameStatus(e,"体育")}],on:{click:function(a){return t.$playGame(e,"体育")}}},[a("van-image",{attrs:{"lazy-load":"",src:e.thumb},on:{load:function(t){e.loaded=!0}}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.recommend,expression:"item.recommend"}],staticClass:"recommend",attrs:{src:t.$imgs["home/recommend"],alt:""}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"item.loaded"}],staticClass:"game-info"},[a("div",{staticClass:"flow-wrapper"},[a("img",{attrs:{"lazy-load":"",src:t.$imgs["home/flow-bg"]}}),a("div",{staticClass:"flow"},[t._v("最高返水"+t._s(t.$getWashRate(e,"体育"))+"%")])]),a("span",[t._v("\n            "+t._s(t.$t(e.title))+"\n            "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.$getGameStatus(e,"体育"),expression:"$getGameStatus(item, '体育')"}]},[t._v("(维护中)")])])])],1)})),0)])}),[],!1,null,"0e23ac5c",null).exports);function R(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function M(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?R(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var A={name:"ESports",components:{},data:function(){var t=[{default_game_id:17,game_platform_id:28,title:this.$t("刀塔2"),name:"avia",thumb:"dota2@2x.png"},{default_game_id:17,game_platform_id:28,title:this.$t("英雄联盟"),name:"avia",thumb:"lol@2x.png"},{default_game_id:17,game_platform_id:28,title:this.$t("绝地求生"),name:"avia",thumb:"jdqs@2x.png"},{default_game_id:17,game_platform_id:28,title:this.$t("星际争霸"),name:"avia",thumb:"xjzb@2x.png"},{default_game_id:17,game_platform_id:28,title:this.$t("反恐精英"),name:"avia",thumb:"cs@2x.png"},{default_game_id:17,game_platform_id:28,title:this.$t("王者荣耀"),name:"avia",thumb:"wzry@2x.png"},{default_game_id:17,game_platform_id:28,title:this.$t("守望先锋"),name:"avia",thumb:"swxf@2x.png"},{default_game_id:17,game_platform_id:28,title:this.$t("FIFA足球"),name:"avia",thumb:"fifa@2x.png"}];return{games:o.c.map((function(t){return M(M({},t),{},{loaded:!1})})),gamesSport:t,lists:[],cateId:u.c}},created:function(){this.getGameLists()},methods:{getGameLists:function(){var t=this;this.$loading({mask:!1});var e=this.cateId;Object(_.h)({game_cate_id:e}).then((function(e){var a=e.data,i=a.code,s=a.data;if(a.msg,0===i){var o=[];s.data.forEach((function(t){t.is_hot&&t.pic&&o.push(t)})),t.lists=o,t.$toast.clear()}}))}}},U=(a("3cd1"),Object(c.a)(A,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"esports"},[a("div",{staticClass:"games-wrap float-wrap"},t._l(t.games,(function(e){return a("div",{key:e.name,staticClass:"game-item",class:["large tall",{"gray-scal":t.$getGameStatus(e,"电竞")}],on:{click:function(a){return t.$playGame(e)}}},[a("van-image",{attrs:{"lazy-load":"",src:e.thumb},on:{load:function(t){e.loaded=!0}}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.recommend,expression:"item.recommend"}],staticClass:"recommend",attrs:{src:t.$imgs["home/recommend"],alt:""}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"item.loaded"}],staticClass:"game-info"},[a("div",{staticClass:"flow-wrapper"},[a("img",{attrs:{"lazy-load":"",src:t.$imgs["home/flow-bg"]}}),a("div",{staticClass:"flow"},[t._v("最高返水"+t._s(t.$getWashRate(e,"电竞"))+"%")])]),a("span",[t._v("\n          "+t._s(t.$t(e.title))+"\n          "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.$getGameStatus(e,"电竞"),expression:"$getGameStatus(item, '电竞')"}]},[t._v("(维护中)")])])])],1)})),0)])}),[],!1,null,"11b7b2c9",null).exports),Y=a("229ef"),H=a("c181"),J=a("2bb4");Y.a.use(J.a),Y.a.use(H.a);var q={props:["navs"],components:{Casino:m,Chess:f,Slots:x,Lottery:E,Fishing:F,Sports:B,ESports:U},data:function(){return{slide:null,playTimer:0,currentPageIndex:0,slotsType:""}},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},beforeDestroy:function(){this.slide.destroy()},methods:{init:function(){var t=this;this.slide=new Y.a(this.$refs.slide,{scrollX:!1,scrollY:!0,slide:{loop:!1,threshold:10},useTransition:!0,momentum:!1,bounce:!1,stopPropagation:!0,nestedScroll:!0}),this.$refs.innerScroll.map((function(e,a){t["innerScroll".concat(a)]=new Y.a(e,{nestedScroll:!0,bounce:{top:!0,bottom:!0}})})),this.slide.on("scrollEnd",this.onScrollEnd)},onScrollEnd:function(){var t=this.slide.getCurrentPage().pageY;this.currentPageIndex=t},changeSlotsType:function(){this.slotsType=""},change:function(t){this.slide.goToPage(0,t,600,{})}}},Q=(a("f8194"),Object(c.a)(q,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slide-vertical"},[a("div",{staticClass:"vertical-wrapper"},[a("div",{ref:"slide",staticClass:"slide-vertical-scroll"},[a("div",{ref:"slideGroup",staticClass:"slide-group"},t._l(t.navs,(function(e,i){return a("div",{ref:"innerScroll",refInFor:!0,staticClass:"slide-item"},[a("ul",{staticClass:"inner-content"},[0===i?a("Sports",{ref:"sports",refInFor:!0}):t._e(),1===i?a("Casino",{ref:"casino",refInFor:!0}):t._e(),2===i?a("Slots",{ref:"slots",refInFor:!0,attrs:{slotsType:t.slotsType},on:{changeSlotsType:t.changeSlotsType}}):t._e(),3===i?a("Chess",{ref:"chess",refInFor:!0}):t._e(),4===i?a("Lottery",{ref:"lottery",refInFor:!0}):t._e(),5===i?a("ESports",{ref:"esports",refInFor:!0}):t._e(),6===i?a("Fishing",{ref:"fishing",refInFor:!0}):t._e()],1)])})),0)]),a("div",{ref:"docs",staticClass:"docs-wrapper"},[a("div",{staticClass:"docs-content"},t._l(t.navs,(function(e,i){return a("div",{key:i,on:{click:function(e){return t.change(i)}}},[a("img",{staticClass:"nav-norm-icon",attrs:{src:t.$imgs["home/"+(t.currentPageIndex===i?e.activeIcon:e.normalIcon)],alt:""}})])})),0)]),a("van-icon",{staticClass:"down",attrs:{size:"20",name:"arrow-down"}})],1)])}),[],!1,null,"f5d9ffe4",null));e.default=Q.exports},"4f18":function(t,e,a){"use strict";a("671e")},"54a3":function(t,e,a){},5805:function(t,e,a){"use strict";a("54a3")},6151:function(t,e,a){},"671e":function(t,e,a){},"8d664":function(t,e,a){},"90ca":function(t,e,a){},"9a10":function(t,e,a){"use strict";a("8d664")},a546:function(t,e,a){"use strict";var i=a("53ca");function s(t,e){this.supportsCanvas=!!document.createElement("canvas").getContext,this.datas=[],this.beginTag=0,this.beginBigTag=0,this.bigData=[],this.bigNum0=0,this.bigNum1=0,this.offset=[],this.lastBig=0,this.lastBigPos=[0,0],this.bigFlag=!1,this.bigEyeData=new Array,this.bigEyeNum0=0,this.bigEyeNum1=0,this.totalNum=0,this.bankerNum=0,this.playerNum=0,this.tieNum=0,this.bPairNum=0,this.pPairNum=0,this.shupy=0,this.sumbig=0,this.sumsmall=0,this.sumdan=0,this.sumshuang=0,this.baozi=0,this.diceDrawCount=0,this.opt={gameType:"BAC",canvas:null,canvasWidth:180,canvasHeight:70,gridColor:"#eeeeee1a",bankerColor:"#FF6666",playerColor:"#8095FF",tieColor:"#24b253",cellSize:12,strokeWidth:1.5,lineWidth:.5,zoom:1,beadRow:6},this.init(t,e)}function o(){this.status="0",this.pair="0",this.maxLine=6,this.isNewLine=!1,this.color=[];for(var t=0;t<6;t++)this.color[t]=0;for(this.tieSize=[],t=0;t<6;t++)this.tieSize[t]=0;for(this.position=[],t=0;t<6;t++)this.position[t]=0;for(this.bigEyeLoc=[],t=0;t<100;t++)this.tieSize[t]=0;for(this.smallLoc=[],t=0;t<100;t++)this.smallLoc[t]=0;for(this.yueyouLoc=[],t=0;t<100;t++)this.yueyouLoc[t]=0;this.columnSize=0,this.size=0}function r(t,e){return Array.prototype.forEach.call(t,(function(t,a){e(t,a)}))}a("6c7b"),a("ac6a"),s.prototype.drawPath=function(){this.canvas;for(var t=this.opt,e=t.cellSize,a=t.beadColumn,i=t.beadRow,s=(t.totalColumn,t.beadColumn,1);s<a;s++){var o=(e+t.lineWidth)*s,r=(e+t.lineWidth)*i;this.drawLine([o,0],[o,r],t.lineWidth,t.gridColor)}for(s=1;s<i;s++)o=(e+t.lineWidth)*a,r=(e+t.lineWidth)*s,this.drawLine([0,r],[o,r],t.lineWidth,t.gridColor)},s.prototype.drawBeads=function(){if("SHB"==this.opt.gameType)return this.drawBeadsDice();var t=this.bigData,e=this.opt.beadColumn,a=0,i=t.length,s=0;for(i+1>e&&(a=i-e,this.beginBigTag=a);a<i;a++){for(var o=t[a],r=0;r<6;r++)0==o.tieSize[r]&&"0"==o.color[r]||this.bigWay(s,r,o.tieSize[r],o.color[r]);s++}},s.prototype.bigWay=function(t,e,a,i){var s,o,r=this.opt.cellSize,n=this.opt.lineWidth,l=this.opt.strokeWidth,c=this.opt.gridColor,m=this.opt.bankerColor,u=this.opt.playerColor,h=this.opt.tieColor;if(s=e*(r+n)+n,o=t*(r+n)+n,0!=i){var d=r/2,p=d-l;"1"==i&&this.drawCircle(o+d,s+d,p,"#FFF",l,m),"2"==i&&this.drawCircle(o+d,s+d,p,"#FFF",l,u)}var f=r/2,g=.1*r;0!=a&&a<4?1==a?this.drawLine([o+g/2,s+2*f],[o+2*f-g/2,s],l,h):2==a?(this.drawLine([o+g/2,s+.7*f*2],[o+.7*f*2,s+g/2],l,h),this.drawLine([o+.4*f+g/2,s+2*f-+g/2],[o+2*f-g/2,s+.4*d+g/2],l,h)):3==a&&(this.drawLine([o,s+1.2*f+g/2],[o+.4*f*2+g/2,s+g/2],2,h),this.drawLine([o+.8*f+g/2,s+2*f],[o+2*f-g/2,s+.4*f*2],2,h),this.drawLine([o+g/2,s+2*f],[o+2*f-g/2,s],l,h)):a>=4&&(a>=10?this.showText(o+f/1.5-2,s+f+f/2+g/2,a+"","8pt Calibri",c):this.showText(o+f/1.5-.5,s+f+f/2+g/2,a+"","8pt Calibri",c))},s.prototype.drawBeadsDice=function(){var t=this.datas,e=this.opt.beadColumn,a=this.opt.beadRow,i=Math.ceil(e/2),s=(Math.floor(e/2)-1)*a,o=t.length,r=this.diceDrawCount;(0==r||r>s)&&(r=s-a+1),this.diceDrawCount=r;var n=o-r;n=n<0?0:n;for(var l=0;n<o;n++){var c=t[n],m=0+Math.floor(l/a),u=l%a,h="围",d=this.opt.tieColor,p=i+Math.floor(l/a),f=l%a,g="围",v=this.opt.tieColor;l++,"1"==c.bigsmall?(h="大",d=this.opt.bankerColor):"2"==c.bigsmall&&(h="小",d=this.opt.playerColor),"2"==c.singledouble?(g="双",v=this.opt.bankerColor):"1"==c.singledouble&&(g="单",v=this.opt.playerColor),this.bigWayDice(m,u,h,d),this.bigWayDice(p,f,g,v)}this.diceDrawCount++},s.prototype.bigWayDice=function(t,e,a,i){var s=this.canvas,o=this.opt.cellSize,r=o/2,n=t*(o+this.opt.lineWidth)+r,l=e*(o+this.opt.lineWidth)+r,c=r;s.fillStyle=i,s.beginPath(),s.arc(n,l,r,0,2*Math.PI,!1),s.closePath(),s.fill(),s.beginPath(),s.font="bold "+c+"px verdana, sans-serif",s.fillStyle="#FFFFFF",s.fillText(a,n-r+c/2,l+c/2-2*this.opt.lineWidth),s.closePath(),s.fill()},s.prototype.drawCircle=function(t,e,a,i,s,o){var r=this.canvas;r.beginPath(),r.arc(t,e,a,0,2*Math.PI,!1),r.fillStyle=i,r.lineWidth=s,r.strokeStyle=o,r.stroke()},s.prototype.drawLine=function(t,e,a,i){var s=this.canvas;s.beginPath(),s.moveTo(t[0],t[1]),s.lineTo(e[0],e[1]),s.lineWidth=a,s.strokeStyle=i,s.stroke()},s.prototype.showText=function(t,e,a,i,s){var o=this.canvas;o.beginPath(),o.font=i,o.fillStyle=s,o.fillText(a,t,e),o.stroke()},s.prototype.clearDraw=function(t,e,a){var i=this.opt.zoom;t.clearRect(0,0,e*i,a*i)},s.prototype.removeAll=function(){this.datas=[],this.removeAllNotDataList()},s.prototype.removeAllNotDataList=function(){this.totalNum=0,this.bankerNum=0,this.playerNum=0,this.tieNum=0,this.bPairNum=0,this.pPairNum=0,this.bigData=[],this.lastBig=0,this.lastBigEye=0,this.lastSmall=0,this.lastYueyou=0,this.bigNum0=0,this.bigNum1=0,this.lastBigPos0=0,this.lastBigPos1=0,this.bigEyeNum0=0,this.bigEyeNum1=0,this.smallNum0=0,this.smallNum1=0,this.yueyouNum0=0,this.yueyouNum1=0,this.isBigEyeInit=!1,this.isSmallInit=!1,this.isYueyouInit=!1,this.bigFlag=!1,this.smallFlag=!1,this.bigEyeFlag=!1,this.yueyouFlag=!1},s.prototype.setIList=function(t){var e=t.roundRes;for(var a in e)if(e.hasOwnProperty(a)){var i=this.formatItem(e[a]);this.setItem(i)}},s.prototype.appendIList=function(t){var e=this.datas;this.datas=new Array;for(var a=0;a<e.length;a++)this.setItem(e[a]);var i=this.formatItem(t);this.setItem(i)},s.prototype.setItem=function(t){this.checkData(t,this.datas.length),this.datas.push(t)},s.prototype.formatItem=function(t){var e=new o;return"SHB"==this.opt.gameType?(e.bigsmall=t.bigsmall,e.singledouble=t.singledouble):"ROU"==this.opt.gameType||"ROU"==this.opt.gameType||(t.banker_val>t.player_val?e.status="1":t.banker_val<t.player_val?e.status="2":e.status="3",e.pair=t.pair),e},s.prototype.checkData=function(t,e){if(this.totalNum++,"SHB"==this.opt.gameType)"1"==t.bigsmall?this.sumbig++:"2"==t.bigsmall&&this.sumsmall++,"1"==t.singledouble?this.sumdan++:"2"==t.singledouble&&this.sumshuang++,"3"==t.bigsmall&&"3"==t.singledouble&&this.baozi++;else if("ROU"==this.opt.gameType);else if("ROU"==this.opt.gameType);else{var a=t.status;switch(a){case"3":this.tieNum++;break;case"1":this.bankerNum++;break;case"2":this.playerNum++}switch(t.pair){case"1":this.bPairNum++;break;case"2":this.pPairNum++;break;case"3":this.bPairNum++,this.pPairNum++}var i=this.bigData,s=this.bigEyeData,r=this.lastBig,n=this.lastBigEye,l=this.lastSmall,c=this.lastYueyou,m=this.bigNum0,u=this.bigNum1,h=this.lastBigPos,d=this.lastBigPos0,p=this.lastBigPos1,f=this.bigEyeNum0,g=this.bigEyeNum1,v=this.smallNum0,b=this.smallNum1,y=this.yueyouNum0,w=this.yueyouNum1,_=this.bigFlag,O=this.isBigEyeInit,j=this.isSmallInit,C=this.isYueyouInit;if(0==i.length&&"3"==a)0==r?(N=new o,i.push(N)):N=i[0],N.tieSize[0]=1;else if("3"==a){var $=i[h[0]];void 0!==$&&($.tieSize[h[1]]=$.tieSize[h[1]]+1)}else if(r==a){var P=i[m];if(P.size=P.size+1,"0"==P.color[u])P.position[u]=e,P.color[u]=a,h[0]=m,h[1]=u,u!=P.maxLine-1&&(u+=1);else if(P.size>P.maxLine){var S;m+P.size-P.maxLine>i.length-1?((S=new o).maxLine=u,i.push(S)):void 0===(S=i[m+P.size-P.maxLine])&&(S=new o,i.push(S),S.maxLine=u-1),_?(S.position[0]=e,S.color[0]=a,h[0]=m+P.size-P.maxLine,h[1]=0):(S.maxLine=u,S.position[u]=e,S.color[u]=a,h[0]=m+P.size-P.maxLine,h[1]=u)}else{var x=i[m+1];x.maxLine=u-1,x.position[u-1]=e,x.color[u-1]=a,h[0]=m,h[1]=u-1}r=a,t.position[0]=h[1]}else{var N;0!=r&&(m+=1),(0==r||m>i.length-1)&&(N=new o,i.push(N)),(N=i[m]).position[0]=e,N.color[0]=a,h[0]=m,h[1]=0,u=1,N.size=N.size+1,r=a,_=1==N.maxLine,t.position[0]=h[1]}if("3"==a)return;this.bigData=i,this.bigEyeData=s,this.lastBig=r,this.lastBigEye=n,this.lastSmall=l,this.lastYueyou=c,this.bigNum0=m,this.bigNum1=u,this.lastBigPos0=d,this.lastBigPos1=p,this.bigEyeNum0=f,this.bigEyeNum1=g,this.smallNum0=v,this.smallNum1=b,this.yueyouNum0=y,this.yueyouNum1=w,this.bigFlag=_,this.isBigEyeInit=O,this.isSmallInit=j,this.isYueyouInit=C}},s.prototype.init=function(t,e){if(this.supportsCanvas){var a=this;r(arguments,(function(t){if("object"===Object(i.a)(t))for(var e in t)"callback"===e&&"function"==typeof t[e]?a.opt.callback=t[e].bind(a):e in a.opt&&(a.opt[e]=t[e]);else"function"==typeof t&&(a.opt.callback=t.bind(a))})),a.opt.cellSize*=a.opt.zoom,a.opt.strokeWidth*=a.opt.zoom,a.opt.lineWidth*=a.opt.zoom,a.opt.beadColumn=Math.floor(a.opt.canvasWidth/(a.opt.cellSize+a.opt.lineWidth)*a.opt.zoom),a.canvas=a.opt.canvas}else alert("对不起，当前浏览器不支持Canvas，无法使用本控件！")},e.a=function(t,e){return new s(t,e)}},cb5f:function(t,e,a){},cbfc:function(t,e,a){},cd58:function(t,e,a){"use strict";a("cbfc")},f8194:function(t,e,a){"use strict";a("6151")},fa62:function(t,e,a){}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-380396df"],{6915:function(t,e,a){"use strict";a("b625")},"6cc0":function(t,e,a){"use strict";a("8e6e"),a("456d"),a("ac6a");var r=a("ade3"),s=a("2f62");function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}var i={name:"RankItem",props:["rankData"],computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){Object(r.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(s.d)("games",["allPlatforms","allCates","gameCatesPlatforms"])),methods:{goGame:function(t){var e=this;this.gameCatesPlatforms.forEach((function(a){t.game_cate_id==a.game_cate_id&&a.platform_list.forEach((function(a){if(a.game_platform_id==t.platform_id){var r={default_game_id:a.default_game_id,platform_id:t.platform_id};e.$playGame(r)}}))}))}}},c=(a("6915"),a("0c7c")),o=Object(c.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-swipe",{staticClass:"profit-swipe",attrs:{loop:!1,width:220,autoplay:4e3,"show-indicators":!1}},t._l(t.rankData,(function(e,r){return a("van-swipe-item",{key:r,staticClass:"swipe-rank-item"},[a("div",{staticClass:"box"},[a("div",{staticClass:"info"},[a("p",{staticClass:"login-name"},[t._v(t._s(t.$t("会员"))+" "+t._s(t.$hideUsername(e.username)))]),a("p",[t._v(t._s(t.$t("投注"))+" "+t._s(t._f("currency")(e.valid_bet,"¥"))+"，"+t._s(t.$t("盈利")))]),a("h3",[t._v(t._s(t._f("currency")(e.num,"¥")))])]),a("span",{staticClass:"tag"},[t._v(t._s(t.$platformName(e.platform_id,t.allPlatforms))+t._s(t.allCates[e.game_cate_id]))]),a("div",{staticClass:"action",on:{click:function(a){return t.goGame(e)}}},[a("img",{attrs:{src:t.$imgs["home/icon-fudai@2x"]}}),a("span",[t._v(t._s(t.$t("沾沾喜气")))])])])])})),1)}),[],!1,null,"01fb9dfa",null);e.a=o.exports},b625:function(t,e,a){}}]);
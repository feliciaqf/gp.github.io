(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3c4d16a4"],{1259:function(t,i,s){"use strict";s.r(i);var e=s("fe01"),n={components:{},data:function(){return{list:[{list:[this.$t("真人游戏"),this.$t("真人游戏"),this.$t("真人游戏"),this.$t("真人游戏"),this.$t("真人游戏"),this.$t("真人游戏"),this.$t("真人游戏"),this.$t("真人游戏")],title:this.$t("真人")},{list:[this.$t("老虎机"),"3D捕鱼"],title:this.$t("电子")},{list:[this.$t("VR彩票"),"3D捕鱼"],title:this.$t("彩票")}]}},created:function(){var t=this;this.isLoading=!0,Object(e.n)({}).then((function(i){0===i.data.code&&(t.list=i.data.data)})).finally((function(){t.isLoading=!1}))}},a=(s("7937"),s("0c7c")),c=Object(a.a)(n,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"tutorial",style:{marginTop:t.$route.query.source&&"0px !important"}},t._l(t.list,(function(i){return s("div",{key:i.title,staticClass:"item"},[s("div",{staticClass:"title"},[t._v(t._s(i.game_cate_name))]),s("div",{staticClass:"list"},t._l(i.list,(function(i){return s("div",{key:i.id},[s("a",{on:{click:function(s){return t.$router.push({path:"/helpDetail",query:t.$route.query.source?{id:i.id,type:1,source:t.$route.query.source}:{id:i.id,type:1}})}}},[t._v(t._s(i.title))])])})),0)])})),0)}),[],!1,null,"c8da8d32",null);i.default=c.exports},7937:function(t,i,s){"use strict";s("eb98")},eb98:function(t,i,s){}}]);
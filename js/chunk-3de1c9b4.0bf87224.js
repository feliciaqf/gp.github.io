(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3de1c9b4"],{"302e":function(t,e,i){},"40efb":function(t,e,i){"use strict";i.r(e);var s=i("fe01"),n={components:{},data:function(){return{list:[],data:{},icons:{9:i("f4fc7"),10:i("8dc1"),11:i("3612"),12:i("1825"),13:i("1825"),14:i("1825")}}},created:function(){var t=this;this.isLoading=!0,Object(s.c)({}).then((function(e){0===e.data.code&&(t.list=e.data.data.list)})).finally((function(){t.isLoading=!1}))},methods:{goKefu:function(){this.$openKefu(this.$route.query),this.$store.dispatch("global/setPopShow",{status:!1})}}},o=(i("edfa"),i("0c7c")),c=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tutorial",style:{marginTop:t.$route.query.source&&"0"}},[i("div",{staticClass:"problem novice"},t._l(t.list.slice(0,8),(function(e){return i("div",{key:e.id,staticClass:"item",on:{click:function(i){return t.$router.push({path:"/helpDetail",query:t.$route.query.source?{id:e.id,type:0,source:t.$route.query.source}:{id:e.id,type:0}})}}},[t._v("\n      "+t._s(e.title)+"\n    ")])})),0),i("p",{staticClass:"gokefu"},[t._v("\n    "+t._s(t.$t("遇到问题，联系"))+"\n    "),i("span",{on:{click:t.goKefu}},[t._v(t._s(t.$t("专属客服")))])])])}),[],!1,null,"273a32b7",null);e.default=c.exports},edfa:function(t,e,i){"use strict";i("302e")}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3722e3f7"],{"512e":function(t,s,i){"use strict";i("8a40")},"775f":function(t,s,i){"use strict";i.r(s),i("7f7f");var a=i("8bfb"),n=i("bd8a"),c={components:{},computed:{},data:function(){return{selectIndex:1,xchangeData:0,shopLeftList:[],shopRightList:[]}},created:function(){this.getShopMallList(),this.getxcoininfo()},methods:{getShopMallList:function(){var t=this;Object(a.c)({activity_id:17}).then((function(s){t.shopLeftList=s.data.data.data.filter((function(t){return 1==t.type})),t.shopRightList=s.data.data.data.filter((function(t){return 2==t.type}))}))},getxcoininfo:function(){var t=this;Object(n.C)().then((function(s){t.xchangeData=s.data.data.xCoinRemain||0}))},open:function(t,s){var i=this;if(0==s){this.$loading();var n={activity_id:t.special_id,goods_id:t.id,real_name:t.name,address:""};Object(a.a)(n).then((function(t){0==t.data.code&&(i.$toast(i.$t("兑换成功")),i.getxcoininfo())}))}else this.$router.push({path:"/productsExchange",query:{name:t.name,activity_id:t.special_id,goods_id:t.id}})}}},e=(i("512e"),i("0c7c")),o=Object(e.a)(c,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"esport-shop-mall"},[i("div",{staticClass:"shop-title"},[i("van-icon",{attrs:{name:"arrow-left"},on:{click:function(s){return t.$router.go(-1)}}}),i("span",[t._v(t._s(t.$t("商城")))]),i("span",{staticClass:"query",on:{click:function(s){return t.$router.push("/goodsRecord")}}},[t._v(t._s(t.$t("商品记录")))])],1),i("div",{staticClass:"shopbox"},[i("div",{staticClass:"i-a"},[i("div",{staticClass:"ia-l"},[t._v("\n        当前余额:\n        "),i("span",{staticClass:"coin"}),i("b",[t._v(t._s(t.xchangeData))]),t._v("狂币\n      ")]),i("div",{staticClass:"ia-r"},[i("span",{class:{active:1==t.selectIndex},on:{click:function(s){t.selectIndex=1}}},[t._v(t._s(t.$t("筹码")))]),i("span",{class:{active:2==t.selectIndex},on:{click:function(s){t.selectIndex=2}}},[t._v(t._s(t.$t("实物")))])])]),1==t.selectIndex?i("div",{staticClass:"sb-cont"},[i("div",{staticClass:"sb-list"},[i("div",{staticClass:"items"},t._l(t.shopLeftList,(function(s,a){return i("div",{key:a,staticClass:"item"},[i("div",{staticClass:"bd"},[i("div",{staticClass:"i-name"},[t._v(t._s(s.name))]),i("div",{staticClass:"i-photo"},[i("img",{attrs:{src:s.pic}})]),i("div",{staticClass:"i-detail"},[i("div",{staticClass:"d-m"},[i("span",{staticClass:"coin"}),i("b",[t._v(t._s(s.coin))]),t._v("狂币\n                ")]),i("div",{staticClass:"d-b"},[i("span",{on:{click:function(i){return t.open(s,0)}}},[t._v(t._s(t.$t("兑换")))])])])])])})),0)])]):i("div",{staticClass:"sb-cont"},[i("div",{staticClass:"sb-list"},[i("div",{staticClass:"items"},t._l(t.shopRightList,(function(s,a){return i("div",{key:a,staticClass:"item"},[i("div",{staticClass:"bd"},[i("div",{staticClass:"i-name"},[t._v(t._s(s.name))]),i("div",{staticClass:"i-photo"},[i("img",{attrs:{src:s.pic}})]),i("div",{staticClass:"i-detail"},[i("div",{staticClass:"d-m"},[i("span",{staticClass:"coin"}),i("b",[t._v(t._s(s.coin))]),t._v("狂币\n                ")]),i("div",{staticClass:"d-b"},[i("span",{on:{click:function(i){return t.open(s,1)}}},[t._v(t._s(t.$t("兑换")))])])])])])})),0)])])])])}),[],!1,null,"0c0fb37e",null);s.default=o.exports},"8a40":function(t,s,i){},"8bfb":function(t,s,i){"use strict";i.d(s,"c",(function(){return n})),i.d(s,"a",(function(){return c})),i.d(s,"b",(function(){return e})),i.d(s,"d",(function(){return o}));var a=i("b775"),n=function(t){return Object(a.a)({url:"/goodslist",params:t})},c=function(t){return Object(a.a)({method:"post",url:"/exchangegoods",data:t})},e=function(t){return Object(a.a)({url:"/coinaccounttype",params:t})},o=function(t){return Object(a.a)({url:"/coinaccountchangelist",params:t})}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c443b91a"],{"28cb":function(t,e,a){},e31a:function(t,e,a){"use strict";a("28cb")},e686:function(t,e,a){"use strict";a.r(e),a("7514"),a("7f7f"),a("96cf");var s,n=a("1da1"),i=a("ade3"),c=a("bd8a"),r={data:function(){return Object(i.a)({xchangeData:0,levelName:"",userInfo:{},amountList:[]},"amountList",[0,38,88,188,588,888,1888,3888,5888,8888,18888])},computed:{},created:function(){this.save(),this.getxcoininfo()},methods:{memberlevel:(s=Object(n.a)(regeneratorRuntime.mark((function t(e){var a,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.E)();case 2:a=t.sent,s=a.data.data,this.levelName=s.find((function(t){return t.level===e})).name;case 5:case"end":return t.stop()}}),t,this)}))),function(t){return s.apply(this,arguments)}),save:function(){var t=this;this.$store.dispatch("users/getUserInfo").then((function(e){t.userInfo=e,t.memberlevel(e.level)}))},getxcoininfo:function(){var t=this;Object(c.C)().then((function(e){t.xchangeData=e.data.data.xCoinRemain||0}))}}},l=(a("e31a"),a("0c7c")),o=Object(l.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"esport-vip-center"},[a("div",{staticClass:"shop-title"},[a("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.go(-1)}}}),a("span",[t._v("VIP")])],1),a("div",{staticClass:"bd"},[a("div",{staticClass:"balance"},[a("span",{staticClass:"coin"}),a("b",[t._v(t._s(t.xchangeData))]),t._v("狂币\n        "),a("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.$router.push("/shopMall")}}},[t._v(t._s(t.$t("商城")))])]),a("div",{staticClass:"name"},[t._v(t._s(t.levelName))]),a("div",{staticClass:"circular"},[a("div",{staticClass:"circular-chart"},[t._m(0),t._m(1),t._m(2),a("div",{staticClass:"center clip4"},[a("span",[t._v("\n              "+t._s(t.userInfo.level)+"\n              ")]),a("label",[t._v(t._s(t.$t("当前等级")))])])])]),a("div",{staticClass:"reward"},[t._v("\n"+t._s(t.$t("下个晋级礼金"))+"\n        "),a("div",{staticClass:"r-amo"},[a("span",{staticClass:"coin"}),a("b",[t._v(t._s(t.amountList[t.userInfo.level+1]))]),t._v(t._s(t.$t("元"))+"\n        ")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"clip clip1"},[e("div",{staticClass:"item"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"clip clip2"},[e("div",{staticClass:"item"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"clip clip3"},[e("div",{staticClass:"item"})])}],!1,null,"741feb16",null);e.default=o.exports}}]);
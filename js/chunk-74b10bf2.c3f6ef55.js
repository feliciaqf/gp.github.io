(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-74b10bf2"],{a9c7:function(t,i,e){"use strict";e.r(i),e("8e6e"),e("ac6a"),e("456d");var n=e("ade3"),r=e("9e2a"),s=e("2f62");function a(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?a(Object(e),!0).forEach((function(i){Object(n.a)(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}var o={name:"activitiesDetails",data:function(){return{title:"",activity:{}}},created:function(){this.getData()},computed:c(c({},Object(s.d)("users",["isLogin"])),{},{handleButton:function(){return-1===[2,9,10].indexOf(this.activity.id)||this.isLogin?-1!==[2].indexOf(this.activity.id)&&this.isLogin?this.$t("立即洗码"):this.isLogin?this.$t("立即存款"):void 0:this.$t("立即登录")}}),methods:{getData:function(){var t=this,i=null;if(!(i=this.$route.query.id?this.$route.query.id:this.$route.params.id))return this.$toast(this.$t("没有找到该活动"));this.$loading(),Object(r.a)({id:i}).then((function(i){var e=i.data,n=e.code,r=e.data;e.msg,0===n&&(t.activity=r),t.$toast.clear()}))},onClickLeft:function(){this.$router.push({path:"/activities"})},onClickRight:function(){this.$openKefu()},handleGo:function(){-1!==[9,10].indexOf(this.activity.id)&&this.isLogin?this.$router.push("/deposit"):-1!==[2].indexOf(this.activity.id)&&this.isLogin?this.$router.push("/washcode"):this.isLogin||this.$router.push("/login")}}},u=(e("cb85"),e("0c7c")),h=Object(u.a)(o,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"page"},[t.$route.query.source?t._e():e("van-nav-bar",{staticClass:"m-header",attrs:{title:t.activity.title||"","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}},[e("van-icon",{attrs:{slot:"right",name:"service"},slot:"right"})],1),t.activity.title?e("div",{staticClass:"m-body",style:{paddingTop:t.$route.query.source&&"0px !important"}},[e("van-image",{staticClass:"h5Img",attrs:{src:t.activity.h5_index_max_pic,fit:"cover"}}),-1!==[2,9,10].indexOf(t.activity.id)?e("div",{staticClass:"m-button"},[e("van-button",{attrs:{type:"primary"},on:{click:t.handleGo}},[t._v(t._s(t.handleButton))])],1):t._e(),e("article",{domProps:{innerHTML:t._s(t.activity.detail_content)}})],1):t._e()],1)}),[],!1,null,"6b32f808",null);i.default=h.exports},cb85:function(t,i,e){"use strict";e("d336")},d336:function(t,i,e){}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-27e2fb88"],{"59e8":function(t,e,n){"use strict";n.r(e);var i=n("40ef"),a=n("fe01"),s={name:"discountCore",data:function(){return{title:this.$t("常见问题"),isLoading:!1,text:""}},created:function(){var t=this;this.isLoading=!0,Object(a.u)({code:"user_faq",merchant_no:"10039"}).then((function(e){t.text=e.data.data.content})).finally((function(){t.isLoading=!1}))},components:{Loading:n("c428").a,Lheader:i.a}},o=(n("a3c2"),n("0c7c")),c=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("lheader",{attrs:{title:this.title,activated:this.$route.query.activated}}),e("div",{staticClass:"commonProblem-templateCls",domProps:{innerHTML:this._s(this.text)}}),e("loading",{attrs:{isShow:this.isLoading}})],1)}),[],!1,null,null,null);e.default=c.exports},"9abe":function(t,e,n){},a3c2:function(t,e,n){"use strict";n("9abe")}}]);
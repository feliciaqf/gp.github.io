(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6f47d25f"],{"929b":function(t,e,n){"use strict";n.r(e);var a=n("40ef"),c=n("fe01"),i={name:"discountCore",data:function(){return{title:this.$t("合法牌照"),text:""}},created:function(){var t=this;Object(c.u)({code:"user_license",merchant_no:"10039"}).then((function(e){t.text=e.data.data.content}))},components:{Lheader:a.a}},s=(n("dc22"),n("0c7c")),r=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("lheader",{attrs:{title:this.title,activated:this.$route.query.activated,path:"111",getSwitch:"true"}}),e("div",{staticClass:"templateCls",domProps:{innerHTML:this._s(this.text)}})],1)}),[],!1,null,"2544e4f4",null);e.default=r.exports},a52e:function(t,e,n){},dc22:function(t,e,n){"use strict";n("a52e")}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3a020309"],{"8fad":function(t,e,n){},bcc0:function(t,e,n){"use strict";n.r(e);var c=n("40ef"),a=n("fe01"),i={name:"discountCore",data:function(){return{title:this.$t("博彩责任"),text:""}},created:function(){var t=this;Object(a.u)({code:"user_duty",merchant_no:"10031"}).then((function(e){t.text=e.data.data.content}))},components:{Lheader:c.a}},s=(n("c34c"),n("0c7c")),u=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("lheader",{attrs:{title:this.title,activated:this.$route.query.activated,path:"111",getSwitch:"true"}}),e("div",{staticClass:"duty-templateCls",domProps:{innerHTML:this._s(this.text)}})],1)}),[],!1,null,null,null);e.default=u.exports},c34c:function(t,e,n){"use strict";n("8fad")}}]);
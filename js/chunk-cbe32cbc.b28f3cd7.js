(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-cbe32cbc"],{"6be5":function(t,e,n){"use strict";n("8b52")},"8b52":function(t,e,n){},c40cb:function(t,e,n){"use strict";n.r(e);var a=n("40ef"),i=n("c428"),c=n("fe01"),s={name:"agTermsEngagement",data:function(){return{title:this.$t("合作代理条款"),isLoading:!1,text:""}},components:{Lheader:a.a,Loading:i.a},created:function(){var t=this;try{var e=document.getElementsByClassName("container")[0].offsetTop;window.scrollTo(0,e)}catch(t){}this.isLoading=!0,Object(c.u)({code:"agent_agreement",merchant_no:"10031"}).then((function(e){t.text=e.data.data.content})).finally((function(){t.isLoading=!1}))}},o=(n("6be5"),n("0c7c")),r=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("lheader",{attrs:{title:this.title,activated:this.$route.query.activated,"get-switch":!1,goback:!0}}),e("div",{staticClass:"templateCls",domProps:{innerHTML:this._s(this.text)}}),e("loading",{attrs:{isShow:this.isLoading}})],1)}),[],!1,null,"2ccb6ab6",null);e.default=r.exports}}]);
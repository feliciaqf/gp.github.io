(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1d5e7e9c"],{ddbc:function(t,e,a){"use strict";a("e650")},e650:function(t,e,a){},f3d9:function(t,e,a){"use strict";a.r(e),a("7f7f");var n=a("40ef"),s={agentLogin:0,agentRegister:1},c={name:"login",components:{Lheader:n.a},data:function(){return{titles:{0:this.$t("代理登录"),1:this.$t("代理注册")},value:0,aoMenUi:["takchun","10012","10013","10014","10020","mgm8","10006","10011","10007","10009","10010","10015","10008","10021","10034","10057"]}},methods:{},watch:{$route:function(t,e){this.value=s[t.name]}},created:function(){this.value=s[this.$route.name];try{var t=document.getElementsByClassName("container")[0].offsetTop;window.scrollTo(0,t)}catch(t){}}},i=(a("ddbc"),a("0c7c")),o=Object(i.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",class:"agentContainer"},["10037"!==t.$projectname?n("lheader",{attrs:{goback:!0,"get-switch":!1,"is-agent-register":!0,title:t.titles[t.value]}}):t._e(),"10037"!==t.$projectname?n("img",{staticClass:"down_logo",attrs:{src:a("5bf1"),alt:""}}):t._e(),"chobet"===t.$projectname||t.aoMenUi.includes(t.$projectname)||"10046"===t.$projectname||"10057"===t.$projectname||"10037"===t.$projectname?t._e():n("img",{staticClass:"downhz",attrs:{src:a("7ba4"),alt:""}}),n("div",{staticClass:"main"},["10037"!==t.$projectname?n("van-tabs",{attrs:{"line-width":".64rem","line-height":".08rem",color:t.$colorjs.baseColor},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("van-tab",{staticClass:"tab-list",attrs:{title:t.$t("代理登录"),replace:!0,to:"/agentAuth/login"}}),n("van-tab",{staticClass:"tab-list",attrs:{title:t.$t("代理注册"),replace:!0,to:"/agentAuth/register"}})],1):t._e(),n("router-view")],1)],1)}),[],!1,null,"6aedf88e",null);e.default=o.exports}}]);
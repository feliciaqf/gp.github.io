(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-22c1c3b3"],{4921:function(t,a,s){"use strict";s.r(a),s("96cf");var i=s("1da1"),n=(s("ac6a"),s("c1df")),e=s.n(n),o=s("2b0e"),c=s("b311"),r=s.n(c),l=s("d055"),d=s.n(l),u=s("2241"),h=s("40ef"),m=s("c428"),v=s("1e55"),g=s("d1c2");o.a.use(u.a);var p={name:"login",components:{Loading:m.a,Lheader:h.a,vipOpen:v.default},data:function(){return{login:this.$t("注册"),title:this.$t("代理中心"),vipOpenShow:!1,isLoading:!1,active:0,isAgree:!1,show:!1,message:"",list:{},usercount:{},menuList:[{icon:"dailibaobiao",path:"agentFrom",text:this.$t("代理报表")},{icon:"lcjl",path:"reportForm",text:this.$t("佣金报表")},{icon:"lcjl",path:"moneyExchange",text:this.$t("帐变记录"),noBorder:!0},{},{icon:"iconhuiyuan",path:"agMemberList",text:this.$t("会员列表")},{icon:"icokaihu",path:"vipOpen",text:this.$t("会员开户"),noBorder:!0},{},{icon:"icocard",path:"agBankBind",text:this.$t("银行卡管理")},{icon:"iconcontact",path:"contactInfo",text:this.$t("联系方式")},{icon:"iconpassword",path:"agRevisePassword",text:this.$t("密码修改"),noBorder:!0}],agent_domain:[],curDomain:{}}},methods:{goPage:function(t){"vipOpen"===t?this.vipOpenShow=!0:this.$router.push({path:t})},copy:function(){var t=this,a=new r.a(".copy");a.on("success",(function(s){t.show=!1,t.$toast(t.$t("复制成功")),a.destroy()})),a.on("error",(function(t){a.destroy()}))},extension:function(){0===this.agent_domain.length?u.a.alert({title:this.$t("温馨提示"),message:this.$t("暂无推广域名，请联系市场专员分配")}).then((function(){})):this.show=!0},carryCash:function(){if(0===this.list.agent_bank.length){var t=this;u.a.confirm({message:this.$t("您当前未绑定银行卡，无法提现！"),title:this.$t("温馨提示"),confirmButtonText:this.$t("去绑定")}).then((function(){t.$router.push({path:"/agAddBankBind",query:{getPath:"carryCash"}})})).catch((function(){}))}else this.$router.push({path:"/carryCash"})},signOut:function(){var t=this;u.a.confirm({message:this.$t("是否退出登录？")}).then((function(){window.localStorage.removeItem("agToken"),window.localStorage.removeItem("userInfoForAgent"),t.$router.push("agentHomepage")})).catch((function(){}))},clickDomain:function(t){this.curDomain=t,this.show=!0},download:function(){var t=new Image;t.setAttribute("crossOrigin","anonymous"),t.src=this.list.qrData,t.onload=function(){var a=document.createElement("canvas");a.width=t.width,a.height=t.height,a.getContext("2d").drawImage(t,0,0,t.width,t.height);var s=a.toDataURL("image/png"),i=document.createElement("a"),n=new MouseEvent("click");i.download=this.$t("域名二维码.png"),i.href=s,i.dispatchEvent(n)}}},created:function(){var t=this;try{var a=document.getElementsByClassName("container")[0].offsetTop;window.scrollTo(0,a)}catch(t){}this.isLoading=!0,Object(g.y)({access_token:window.localStorage.agToken}).then((function(a){0===a.data.code&&(t.usercount=a.data.data)})),Object(g.z)({access_token:window.localStorage.agToken}).then((function(a){if(0===a.data.code){var s=e()(a.data.data.created_at);t.list=a.data.data,t.list.day=e()().diff(s,"days"),window.localStorage.setItem("userInfoForAgent",JSON.stringify(a.data.data)),t.list.agent_domain&&t.list.agent_domain.forEach(function(){var a=Object(i.a)(regeneratorRuntime.mark((function a(s){var i;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:(i={}).domainFullPath=s.domain,i.visible=!1,t.agent_domain.push(i);case 4:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()),d.a.toDataURL(t.list.qrcode_agent_domain,(function(a,s){t.list.qrData=s}))}else window.localStorage.removeItem("userInfoForAgent"),window.localStorage.removeItem("agToken"),window.localStorage.removeItem("agId"),t.$router.back()})).finally((function(){t.isLoading=!1}))}},f=(s("d9f1"),s("0c7c")),_=Object(f.a)(p,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container"},[i("lheader",{attrs:{goback:!0,"get-switch":!1,title:t.title}}),i("div",{staticClass:"main"},[i("div",{staticClass:"member"},[i("div",{staticClass:"avatar",style:{backgroundImage:"url("+s("4274")+")"}}),i("div",{staticClass:"right"},[i("div",{staticClass:"name"},[t._v(t._s(t.list.username))]),i("div",{staticClass:"desc"},[t._v("\n            "+t._s(t.$t("这是您成为"))+" "+t._s(t.$t(t.$config[t.$projectname].project))+"\n            "+t._s(t.$t("代理的第"))+t._s(t.list.day+1)+t._s(t.$t("天"))+"\n          ")])])]),i("div",{staticClass:"domain"},[i("div",{staticClass:"user",style:{backgroundImage:"url("+s("dc53")+")"}},[i("div",{staticClass:"top"},[i("div",{staticClass:"left"},[i("div",{staticClass:"name"},[t._v("\n"+t._s(t.$t("本月有效投注"))+"\n              ")]),i("div",{staticClass:"money"},[t._v(t._s(t.usercount.valid_invest))])]),i("div",{staticClass:"but",on:{click:t.carryCash}},[t._v("\n"+t._s(t.$t("取款"))+"\n            ")])]),i("div",{staticClass:"bottom"},[i("div",{staticClass:"left"},[i("div",{staticClass:"name"},[t._v("\n"+t._s(t.$t("佣金钱包"))+"\n              ")]),i("div",{staticClass:"money"},[t._v(t._s(t.list.commission_money))])]),i("div",{staticClass:"left"},[i("div",{staticClass:"name"},[t._v("\n"+t._s(t.$t("代理钱包"))+"\n              ")]),i("div",{staticClass:"money"},[t._v(t._s(t.list.money))])]),i("div",{staticClass:"right"},[i("div",{staticClass:"name"},[t._v("\n"+t._s(t.$t("本月佣金"))+"\n              ")]),i("div",{staticClass:"money"},[t._v(t._s(t.list.month_commission_v2))])])])]),t._l(t.agent_domain,(function(a,n){return t.agent_domain.length>0?i("div",{key:n,staticClass:"list"},[i("div",{staticClass:"domain-name"},[t._v("\n            推广域名:"),i("span",{attrs:{id:"domainFullPath"}},[t._v(t._s(a.domainFullPath))])]),i("div",{staticClass:"copy",attrs:{"data-clipboard-target":"#domainFullPath"},on:{click:t.copy}},[t._v("\n"+t._s(t.$t("复制"))+"\n          ")]),i("div",{staticStyle:{flex:"1"}}),i("img",{staticClass:"qrData",attrs:{src:s("ffd5"),alt:""},on:{click:function(s){return t.clickDomain(a)}}})]):t._e()})),t.agent_domain.length?t._e():i("div",{staticClass:"no-domain list"},[t._v(t._s(t.$t("暂无域名")))])],2),i("div",{staticClass:"person-entr"},[i("div",{staticClass:"submit-form"},[t._l(t.menuList,(function(a,n){return[a.text?i("div",{key:n,staticClass:"input",class:{noBorder:a.noBorder},on:{click:function(s){return t.goPage(a.path)}}},[i("img",{class:["icon",a.icon],attrs:{src:s("459e")("./"+a.icon+"@2x.png"),alt:""}}),i("p",{staticClass:"text"},[t._v(t._s(a.text))]),i("img",{staticClass:"more",attrs:{src:s("996a"),alt:""}})]):t._e(),a.text?t._e():i("div",{key:n,staticClass:"br"})]}))],2)]),i("div",{staticClass:"aagames-button-box"},[i("button",{staticClass:"aagames-button login-out dark",attrs:{type:"button"},on:{click:t.signOut}},[t._v("\n"+t._s(t.$t("退出登录"))+"\n        ")])])]),i("van-popup",{staticClass:"domain-dialog",model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[i("div",{staticClass:"website"},[i("img",{staticClass:"qrData",attrs:{src:t.list.qrData,alt:""},on:{click:t.download}}),i("div",{staticClass:"download"},[t._v(t._s(t.$t("点击保存二维码")))]),i("img",{staticClass:"cross",attrs:{src:s("2e3a"),alt:""},on:{click:function(a){t.show=!1}}})])]),i("vipOpen",{model:{value:t.vipOpenShow,callback:function(a){t.vipOpenShow=a},expression:"vipOpenShow"}})],1)}),[],!1,null,"efcfccac",null);a.default=_.exports},"84a7":function(t,a,s){},d9f1:function(t,a,s){"use strict";s("84a7")}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3906f93a"],{"311eb":function(e,t,a){"use strict";a("cb2d")},a3cf:function(e,t,a){"use strict";a.r(t),a("8e6e"),a("ac6a"),a("456d"),a("386d"),a("28a5"),a("96cf");var n=a("1da1"),o=a("ade3"),r=a("af0a"),i=a("2f62"),s=a("53ca");function c(){return window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):window.XMLHttpRequest?new XMLHttpRequest:void 0}function d(e){if("object"===Object(s.a)(e)){var t="";for(var a in e)t+=a+"="+e[a]+"&";return t.substring(0,t.length-1)}return e}var u=function(){var e={type:(arguments[0].type||"GET").toUpperCase(),url:arguments[0].url||"",async:arguments[0].async||"true",data:arguments[0].data||null,dataType:arguments[0].dataType||"json",contentType:arguments[0].contentType||"application/x-www-form-urlencoded charset=utf-8",beforeSend:arguments[0].beforeSend||function(){},success:arguments[0].success||function(){},error:arguments[0].error||function(){}};e.beforeSend();var t=c();t.responseType=e.dataType,t.open(e.type,e.url,e.async),t.setRequestHeader("Content-Type",e.contentType),t.send(d(e.data)),t.onreadystatechange=function(){4==t.readyState&&(200==t.status?e.success(t.response):e.error())}},l=a("29b2");function m(e){var t=e.client,a=e.mode,n=e.code,o=e.lang,r="real"==a?1:0;"ngm_desktop"!=t&&"ngm_mobile"!=t||(iapiSetClientParams(t,"language="+o+"&real="+r+"&lobby=&logout=&deposit=&support=&backurl="),iapiLaunchClient(t,n,a,"_self")),"live_desk"!=t&&"live_mob"!=t||(iapiSetClientParams(t,"&launch_alias="+n+"&language="+o+"&real="+r+"&lobby=&logout=&deposit=&support="),iapiLaunchClient(t,null,a,"_self"))}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var f,h={name:"game",data:function(){return{bdUrl:"",initTime:0,allPlatforms:""}},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(i.c)("user",["token"])),created:(f=Object(n.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("games/getAllPlatforms");case 2:this.allPlatforms=e.sent,this.$nextTick((function(){t.openGame()}));case 5:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)}),mounted:function(){function e(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}if(e(),window.addEventListener("resize",e),this.$once("destroy",(function(){window.removeEventListener("resize",e)})),-1!==[121].indexOf(1*this.$route.query.platform_id)||-1!=[2].indexOf(1*this.$route.query.cate_id)&&-1!=[3].indexOf(1*this.$route.query.platform_id))return!1;this.$notify({message:this.$t("请开启自动旋转屏幕能够横屏玩游戏"),duration:5e3}),window!=top&&(top.location.href=location.href);var t=this;window.onbeforeunload=function(e){if("http"==t.bdUrl.split(":")[0]&&"m.aagames.me"!==document.domain||"https"==t.bdUrl.split(":")[0]&&"m.aagames.me"!=document.domain||"m.aagames.me"==document.domain&&"PT"==t.allPlatforms[t.$route.query.platform_id])if(navigator.sendBeacon){var a={game_id:t.$route.query.game_id,access_token:t.token,merchant_no:"10031"};t.result=navigator.sendBeacon("https://userapi.k68api.com/backtrans",a),window.localStorage.setItem("backtrans-result",t.result)}else u({type:"POST",url:"https://userapi.k68api.com/backtrans",data:{game_id:t.$route.query.game_id,access_token:t.token,merchant_no:"10031"},async:!1,success:function(e){Object(l.b)()}})}},methods:{setIframe:function(){var e=document.createElement("iframe"),t=document.getElementsByClassName("game")[0];e.src=this.bdUrl,e.attachEvent?e.attachEvent("onload",(function(){})):e.onload=function(){},t.appendChild(e)},openGame:function(){var e=this;this.$loading({mask:!1}),Object(r.b)({game_id:this.$route.query.game_id}).then((function(t){var a=e,n=1*a.$route.query.platform_id;if(0===t.data.code){if(142===n)return void function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"zh",a=e.username,n=e.password,o=e.mode,r=e.code,i=e.client,s=e.js;t="zh-CN";var c=document.createElement("script");c.setAttribute("src",s),document.head.appendChild(c),c.onload=function(){window.iapiSetCallout("Login",(function(e){e.errorCode?48===e.errorCode?alert("Login failed, error: "+e.errorCode+" playerMessage: "+e.actions.PlayerActionShowMessage[0].message):alert("Login failed, error: "+e.errorCode+" playerMessage: "+e.playerMessage):m({client:i,mode:o,code:r,lang:t})})),"real"==o?(window.iapiSetClientType("casino"),window.iapiSetClientPlatform("web"),window.iapiLogin(a.toUpperCase(),n,1,t)):"ngm_desktop"!=i&&"ngm_mobile"!=i||(iapiSetClientParams(i,"language="+t+"&real=0"),iapiLaunchClient(i,r,o,"_self"))}}(t);if(t.data.data.open_mode&&2===t.data.data.open_mode)return window.location.href=t.data.data.url,!1;"http"==t.data.data.url.split(":")[0]&&"m.aagames.me"!==window.location.host||"PT"==a.allPlatforms[n]&&"m.aagames.me"!=window.location.host?window.location.href="http://".concat("m.aagames.me","/game").concat(window.location.search):-1!=[121].indexOf(n)||-1!==[2].indexOf(1*a.$route.query.cate_id)&&-1!==[3].indexOf(n)||"PT"==a.allPlatforms[n]?(window.location.href=t.data.data.url,a.gameCheck()):(a.bdUrl=t.data.data.url,a.gameCheck())}else a.$toast({message:t.data.msg,onClose:function(){a.$router.push({path:"home"})}})}))},gameCheck:function(){var e=this.token||this.$route.query.at;Object(l.a)("".concat("wss://ws.wq-test.com","/connect?token=").concat(e,"&ctype=user"))}},destroyed:function(){Object(l.b)()}},g=(a("311eb"),a("0c7c")),b=Object(g.a)(h,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"game"},[t("iframe",{ref:"iframe",attrs:{src:this.bdUrl,id:"myiframe",frameborder:"0"}})])}),[],!1,null,"7b02b78e",null);t.default=b.exports},cb2d:function(e,t,a){}}]);
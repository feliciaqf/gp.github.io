(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-68d85f2e"],{"3ae2":function(t,e,a){"use strict";a("e71d5")},e71d5:function(t,e,a){},f2f1:function(t,e,a){"use strict";a.r(e);var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"empty-game"},[e("img",{attrs:{src:a("904e"),alt:""}})])}],o=(a("8e6e"),a("456d"),a("ac6a"),a("7f7f"),a("ade3")),n=a("2f62"),i=a("fa7d"),r=a("83e4"),c=a("2ef0"),l=a.n(c);function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(o.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var h={name:"SearchPage",data:function(){return{keyword:"",mywords:[],cachedKey:"",pageNo:1,lists:[],pageSize:20,loading:!1,finished:!1,nav:null,platform:[],token:window.localStorage.token}},computed:f(f({},Object(n.d)("global",["gameSearch"])),Object(n.d)("games",["gameCatesPlatforms','platformGameIds"])),created:function(){var t=JSON.parse(window.localStorage.getItem("mywords")||"[]");this.mywords=t;var e=this.gameSearch,a=e.nav,s=e.category;this.gameCatesPlatforms,this.platforms=Object(i.b)(s,this.platformGameIds),this.nav=a},methods:f(f({},Object(n.b)("global",["setGameSearch"])),{},{loadData:function(t){var e=this;if(!this.keyword)return!1;this.$loading({mask:!1});var a=this.pageNo,s=this.keyword,o=this.mywords,n=this.gameSearch,i=n.platform,c=n.category,l=n.nav,d=n.payforline;-1==o.indexOf(s)&&s&&o.push(s),window.localStorage.setItem("mywords",JSON.stringify(o));var f={game_cate_id:c,platform_id:i&&i.game_platform_id||null,page:a,name:s};d&&Object.assign(f,{is_payfor:d}),("fav"===l.name?Object(r.g)(f):"latest"===l.name?Object(r.j)(f):"hot"===l.name?Object(r.i)(f):Object(r.h)(f)).then((function(a){var s=a.data,o=s.code,n=s.data;s.msg,0===o&&(e.lists=t?n.data:e.lists.concat(n.data),e.total=n.total,e.pageNo++,e.pageNo>n.last_page&&(e.finished=!0),e.loading=!1,e.$toast.clear())}))},doFavorite:function(t,e){var a=this;Object(r.b)({game_id:t}).then((function(t){a.$toast(t.data.msg),1==a.lists[e].is_favorite?a.lists[e].is_favorite=2:2==a.lists[e].is_favorite&&(a.lists[e].is_favorite=1)}))},onSearch:function(){this.lists=[],this.pageNo=1,this.loadData()},onInput:l.a.debounce((function(){this.lists=[],this.pageNo=1,this.loadData()}),1e3),onLoad:function(){this.loadData()},onCancel:function(){this.setGameSearch(),this.$router.go(-1)},onClear:function(){this.lists=[]},deleteHistory:function(){window.localStorage.removeItem("mywords"),this.mywords=[],this.lists=[]},onLabelClick:function(t){this.keyword=t,this.pageNo=1,this.loadData()},clearSearch:function(){this.keyword="",this.lists=[],this.pageNo=1},getPlatformNameById:function(t){var e=this.platforms,a="";return e.forEach((function(e){if(t===e.id)return a=e.name,!1})),a}})},m=(a("3ae2"),a("0c7c")),u=Object(m.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-page"},[a("form",{staticClass:"search-head",attrs:{action:"/"}},[a("van-search",{attrs:{placeholder:t.$t("请输入游戏名称"),"show-action":""},on:{search:t.onSearch,input:t.onInput,clear:t.onClear,cancel:t.onCancel},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}},[t.keyword?a("div",{attrs:{slot:"action"},on:{click:t.onSearch},slot:"action"},[t._v(t._s(t.$t("搜索")))]):a("div",{attrs:{slot:"action"},on:{click:t.onCancel},slot:"action"},[t._v(t._s(t.$t("取消")))])])],1),a("div",{staticClass:"search-body"},[!t.keyword&&t.mywords.length?a("div",{staticClass:"action"},[a("h2",[t._v(t._s(t.$t("搜索历史")))]),a("a",{on:{click:t.deleteHistory}},[t._v(t._s(t.$t("全部清除")))])]):t._e(),t.keyword?t._e():a("ul",{staticClass:"lists"},t._l(t.mywords,(function(e,s){return a("li",{key:s,on:{click:function(a){return t.onLabelClick(e)}}},[t._v(t._s(e))])})),0),t.keyword&&t.lists.length?a("div",{staticClass:"search-info"},[a("span",[t._v(t._s(t.keyword))]),t._v("的搜索结果\n      "),a("span",{on:{click:t.clearSearch}},[t._v(t._s(t.$t("全部清除")))])]):t._e(),t.lists.length?[a("van-list",{staticClass:"games",attrs:{finished:t.finished,"finished-text":t.$t("没有更多了"),"immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.lists,(function(e,s){return a("van-cell",{key:s},[a("div",{staticClass:"game-item",attrs:{slot:"default"},slot:"default"},[a("van-image",{attrs:{src:e.pic,fit:"cover",lazy:""},on:{click:function(a){return t.$playGame(e)}}}),t.nav&&"latest"===t.nav.name?[e.is_new?a("span",{class:["tag","new"]},[t._v("new")]):e.is_hot?a("span",{class:["tag","hot"]},[t._v("hot")]):t._e()]:[e.is_hot?a("span",{class:["tag","hot"]},[t._v("hot")]):e.is_new?a("span",{class:["tag","new"]},[t._v("new")]):t._e()],a("div",{staticClass:"info"},[a("h3",[a("span",[t._v(t._s(t.getPlatformNameById(e.game_platform_id)))]),t._v("\n                  "+t._s(e.name)+"\n                ")]),a("span",{staticClass:"action"},[a("van-icon",{attrs:{name:2===e.is_favorite?"like-o":t.token?"like":"like-o"},on:{click:function(a){return t.doFavorite(e.id,s)}}})],1)])],2)])})),1)]:[t._m(0),a("div",{staticClass:"empty-text"},[t._v(t._s(t.$t("抱歉，没有您搜索的游戏")))])]],2)])}),s,!1,null,"127a8a45",null);e.default=u.exports}}]);
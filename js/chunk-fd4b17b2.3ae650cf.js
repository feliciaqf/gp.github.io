(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fd4b17b2"],{"0314":function(t,a,s){},"6de0":function(t,a,s){"use strict";s.r(a);var e=s("2909"),n=s("40ef"),i=s("bd8a"),o=s("2b0e"),c=s("d399"),d=s("ed08");o.a.use(c.a);var l={name:"discountCore",data:function(){return{title:this.$t("优惠中心"),show:!1,showStartDate:!1,showEndDate:!1,discount:this.$t("全部状态"),discountData:{current_page:0},columns:[],isLoading:!1,recordstatus:{},list:[],finished:!1,loading:!1,gameShow:!1,gameColumns:[],gameStatus:{},gameText:this.$t("选择转入平台"),gameIdx:0}},components:{Lheader:n.a},created:function(){var t=this,a=new Date,s=new Date(a.getTime()-26784e5);this.discountData.start_time=Object(d.f)(s),this.discountData.end_time=Object(d.f)(a),this.getDiscountlist(),Object(i.a)().then((function(a){if(0===a.data.code){t.recordstatus=a.data.data;var s=[{id:"",text:t.$t("全部状态")}];for(var e in a.data.data)s.push({id:e,text:a.data.data[e]});t.columns=s}}));var e={access_token:window.localStorage.token,merchant_no:"10039"};Object(i.i)(e).then((function(a){if(0===a.data.code){t.gameStatus=a.data.data;var s=[{id:0,text:t.$t("主账户")}];for(var e in a.data.data)s.push({id:e,text:a.data.data[e]});t.gameColumns=s}}))},methods:{onRefresh:function(){this.getDiscountlist()},getDiscountlist:function(t){var a=this;Object(i.N)(this.discountData).then((function(s){if(0===s.data.code){for(var n=0;n<s.data.data.data.length;n++)s.data.data.data[n].statusText=a.$t("选择转入平台");a.loading=!1,a.isLoading=!1,a.list=t?Object(e.a)(s.data.data.data):s.data.data.data,a.discountData.current_page===s.data.data.last_page&&(a.finished=!0)}}))},onLoad:function(){this.discountData.current_page++,this.getDiscountlist(!0)},onConfirm:function(t){this.discount=t.text,this.discountData.status=t.id,this.getDiscountlist(),this.show=!1},onCancel:function(t){this.show=!1},onCancelStartDate:function(t){this.showStartDate=!1},onConfirmStartDate:function(t){var a=t,s=a.getMonth()+1,e=a.getDate();s>=1&&s<=9&&(s="0"+s),e>=0&&e<=9&&(e="0"+e),this.discountData.start_time=a.getFullYear()+"-"+s+"-"+e,this.getDiscountlist(),this.showStartDate=!1},onConfirmEndDate:function(t){var a=t,s=a.getMonth()+1,e=a.getDate();s>=1&&s<=9&&(s="0"+s),e>=0&&e<=9&&(e="0"+e),this.discountData.end_time=a.getFullYear()+"-"+s+"-"+e,this.getDiscountlist(),this.showEndDate=!1},onCancelEndDate:function(t){this.showEndDate=!1},onGameConfirm:function(t){this.gameShow=!1,this.list[this.gameIdx].statusId=t.id,this.list[this.gameIdx].statusText=t.text},onGameCancel:function(t){this.gameShow=!1},receive:function(t,a){var s=this;if(!this.list[a].statusId&&0!=this.list[a].statusId)return Object(c.a)(this.$t("请先选择转入平台")),!1;var e={access_token:window.localStorage.token,to_platform_id:this.list[a].statusId,id:t};Object(i.V)(e).then((function(t){var a=s;0===t.data.code?Object(c.a)({message:s.$t("领取成功"),onClose:function(){a.getDiscountlist()}}):Object(c.a)(t.data.msg)}))},gameShowFn:function(t){this.gameShow=!0,this.gameIdx=t}}},r=(s("db43"),s("0c7c")),u=Object(r.a)(l,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("lheader",{attrs:{title:t.title,path:"111"}}),s("div",{staticClass:"container"},[s("div",{staticClass:"main"},[s("div",{staticClass:"select"},[s("van-row",[s("van-col",{attrs:{span:"8"},nativeOn:{click:function(a){t.show=!0}}},[t._v(t._s(t.discount)+" "),s("i")]),s("van-col",{attrs:{span:"8"},nativeOn:{click:function(a){t.showStartDate=!0}}},[t._v(t._s(t.discountData.start_time)+" "),s("i")]),s("van-col",{attrs:{span:"8"},nativeOn:{click:function(a){t.showEndDate=!0}}},[t._v(t._s(t.discountData.end_time)+" "),s("i")])],1)],1),s("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.list.length,expression:"list.length !== 0"}],staticClass:"list"},[s("ul",[s("van-list",{attrs:{finished:t.finished,"finished-text":t.$t("没有更多了")},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.list,(function(a,e){return s("li",{key:e},[s("p",[s("span",[t._v(t._s(a.act_name||a.name))]),s("span",[t._v(t._s(a.created_at))])]),s("div",{staticClass:"order-container"},[s("div",{staticClass:"amount"},[s("p",[t._v("红利金额: "+t._s(a.money?a.money:t.recordstatus[a.status]))]),s("p",[t._v("流水倍数: "+t._s(a.flow))])]),3===a.status?s("div",{staticClass:"select",on:{click:function(a){return t.gameShowFn(e)}}},[t._v("\n                    "+t._s(a.statusText)+"\n                    "),s("i",{staticClass:"el-icon-caret-bottom"})]):t._e(),s("div",{staticClass:"btn"},[1==a.status?s("span",[t._v(t._s(t.$t("待付款")))]):t._e(),2==a.status?s("span",[t._v(t._s(t.$t("审核中")))]):t._e(),4==a.status?s("span",[t._v(t._s(t.$t("已领取")))]):t._e(),5==a.status?s("span",[t._v(t._s(t.$t("已转出")))]):t._e(),6==a.status?s("span",[t._v(t._s(t.$t("审核未通过")))]):t._e(),3===a.status?s("span",{staticClass:"receive",on:{click:function(s){return t.receive(a.id,e)}}},[t._v("\n                      领取 "),s("i")]):t._e()])])])})),0)],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.list.length,expression:"list.length === 0"}],staticClass:"list_empty"},[s("div",{staticClass:"emptyDiv"},[s("div",{staticClass:"errorImg"}),s("div",{staticClass:"text"},[s("div",{staticClass:"chinese"},[t._v("\n"+t._s(t.$t("你未获取任何优惠"))+"\n              ")])])])])]),s("van-popup",{attrs:{position:"bottom"},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[s("van-picker",{attrs:{"show-toolbar":"","value-key":"text",columns:t.columns},on:{confirm:t.onConfirm,cancel:t.onCancel}})],1),s("van-popup",{attrs:{position:"bottom"},model:{value:t.showStartDate,callback:function(a){t.showStartDate=a},expression:"showStartDate"}},[s("van-datetime-picker",{attrs:{type:"date"},on:{confirm:t.onConfirmStartDate,cancel:t.onCancelStartDate}})],1),s("van-popup",{attrs:{position:"bottom"},model:{value:t.showEndDate,callback:function(a){t.showEndDate=a},expression:"showEndDate"}},[s("van-datetime-picker",{attrs:{type:"date"},on:{confirm:t.onConfirmEndDate,cancel:t.onCancelEndDate}})],1),s("van-popup",{attrs:{position:"bottom"},model:{value:t.gameShow,callback:function(a){t.gameShow=a},expression:"gameShow"}},[s("van-picker",{attrs:{"show-toolbar":"","value-key":"text",columns:t.gameColumns},on:{confirm:t.onGameConfirm,cancel:t.onGameCancel}})],1)],1)],1)}),[],!1,null,"7ef8507a",null);a.default=u.exports},db43:function(t,a,s){"use strict";s("0314")}}]);
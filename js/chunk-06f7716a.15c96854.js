(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-06f7716a"],{"2da5":function(t,e,a){},"8bfb":function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"d",(function(){return o}));var i=a("b775"),s=function(t){return Object(i.a)({url:"/goodslist",params:t})},n=function(t){return Object(i.a)({method:"post",url:"/exchangegoods",data:t})},r=function(t){return Object(i.a)({url:"/coinaccounttype",params:t})},o=function(t){return Object(i.a)({url:"/coinaccountchangelist",params:t})}},d7c3:function(t,e,a){"use strict";a("2da5")},da61:function(t,e,a){"use strict";a.r(e),a("ac6a"),a("456d"),a("7f7f");var i=a("8bfb"),s=a("33ee"),n=a("ff82"),r={components:{ProvinceCity:s.a},data:function(){return{name:"",real_name:"",phone:"",address:"",submiting:!1,showCityPicker:!1,province:"",city:"",columns:[]}},created:function(){this.getColumns(),this.name=this.$route.query.name||""},methods:{submit:function(){var t=this;if(!this.real_name)return this.$toast.fail(this.$t("请填写真实姓名"));if(!this.province||!this.city)return this.$toast.fail(this.$t("请选择省份, 城市"));if(!this.address)return this.$toast.fail(this.$t("请填写详细地址"));this.$loading();var e={activity_id:this.$route.query.activity_id||"",goods_id:this.$route.query.goods_id||"",real_name:this.real_name,phone:this.phone,address:this.province+this.city+this.address};Object(i.a)(e).then((function(e){0==e.data.code&&(t.$toast(t.$t("兑换成功")),t.$router.push("/shopMall"))}))},onCityPickerConfirm:function(t){this.province=t[0],this.city=t[1],this.showCityPicker=!1},onCityPickerChange:function(t,e){t.setColumnValues(1,this.areaData[e[0]])},getColumns:function(){for(var t in this.areaData=[],n.a.province_list){var e=n.a.province_list[t];this.areaData[e]=[];var a=String(t).slice(0,2);if(11e4==t||12e4==t||31e4==t||5e5==t)for(var i in n.a.county_list)String(i).slice(0,2)==a&&this.areaData[e].push(n.a.county_list[i]);else for(var s in n.a.city_list)String(s).slice(0,2)==a&&this.areaData[e].push(n.a.city_list[s])}this.columns=[{values:Object.keys(this.areaData),className:"column1"},{values:this.areaData[this.$t("北京市")],className:"column2",defaultIndex:0}]}}},o=(a("d7c3"),a("0c7c")),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"esport-shop-products"},[a("div",{staticClass:"shop-title"},[a("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.go(-1)}}}),a("span",[t._v(t._s(t.$t("商品兑换")))])],1),a("div",{staticClass:"m-body"},[a("div",{staticClass:"m-cells"},[a("van-cell-group",[a("van-cell",{staticClass:"name",attrs:{title:t.$t("商品名称")}},[a("template",{slot:"default"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"disabled",attrs:{type:"text",disabled:!0,placeholder:t.$t("商品名称")},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])],2),a("van-cell",{staticClass:"realName",attrs:{title:t.$t("真实姓名")}},[a("template",{slot:"default"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.real_name,expression:"real_name"}],attrs:{type:"text",placeholder:t.$t("请输入真实姓名")},domProps:{value:t.real_name},on:{input:function(e){e.target.composing||(t.real_name=e.target.value)}}})])],2),a("van-cell",{staticClass:"realName",attrs:{title:t.$t("手机号")}},[a("template",{slot:"default"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",maxlength:"11",placeholder:t.$t("请输入手机号")},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])],2),a("van-cell",{staticClass:"realName",attrs:{title:t.$t("省份和地区")},on:{click:function(e){t.showCityPicker=!0}}},[a("template",{slot:"default"},[a("span",[t._v(t._s(t.province&&t.city&&t.province+" "+t.city||"请选择省份/地区"))]),a("van-icon",{attrs:{name:"arrow"}})],1)],2),a("van-cell",{staticClass:"realName",attrs:{title:t.$t("详细地址")}},[a("template",{slot:"default"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.address,expression:"address",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:t.$t("请输入详细地址")},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])],2)],1)],1),a("div",{staticClass:"ui-buttons gap fixed"},[a("van-button",{attrs:{loading:t.submiting,type:"primary"},on:{click:t.submit}},[t._v(t._s(t.$t("确认")))])],1)]),a("van-popup",{attrs:{position:"bottom"},model:{value:t.showCityPicker,callback:function(e){t.showCityPicker=e},expression:"showCityPicker"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:t.columns},on:{change:t.onCityPickerChange,cancel:function(e){t.showCityPicker=!1},confirm:t.onCityPickerConfirm}})],1)],1)}),[],!1,null,"1e4603ec",null);e.default=c.exports}}]);
(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/extend-view/msgtips/msgtips"],{"0bb1":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},"213a":function(t,n,e){},"25c9":function(t,n,e){"use strict";e.r(n);var a=e("0bb1"),i=e("7392");for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);e("8a7f");var r=e("2877"),u=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=u.exports},7392:function(t,n,e){"use strict";e.r(n);var a=e("ccf7"),i=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);n["default"]=i.a},"8a7f":function(t,n,e){"use strict";var a=e("213a"),i=e.n(a);i.a},"97c7":function(t,n,e){"use strict";(function(t){e("51a7"),e("921b");a(e("66fd"));var n=a(e("25c9"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("c11b")["createPage"])},ccf7:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){return e.e("components/tips/tips").then(e.bind(null,"2e03"))},i={components:{tuiTips:a},data:function(){return{basicData:[{type:"translucent",msg:"一般消息提示~"},{type:"green",msg:"成功消息提示~"},{type:"warning",msg:"警告消息提示~"},{type:"danger",msg:"错误消息提示~"},{type:"primary",msg:"其他消息提示~"},{type:"primary",msg:"长文字消息提示，看不完信息？可自定义设置显示时间，建议提示信息不要过长"},{type:"translucent",msg:"4S后关闭提示框",duration:4e3}],index:0}},methods:{showTips:function(t){var n=t.currentTarget.dataset.index,e={msg:this.basicData[n].msg,duration:this.basicData[n].duration||2e3,type:this.basicData[n].type};this.$refs.toast.showTips(e)},switchTabs:function(t){this.index=t.currentTarget.dataset.index}}};n.default=i}},[["97c7","common/runtime","common/vendor"]]]);
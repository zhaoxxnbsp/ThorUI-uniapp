(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extend-view/toast/toast"],{"025b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"444f":function(t,e,n){"use strict";n.r(e);var a=n("025b"),o=n("f680");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("d423");var c=n("2877"),r=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"929a":function(t,e,n){},d423:function(t,e,n){"use strict";var a=n("929a"),o=n.n(a);o.a},e077:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return n.e("components/extend/button/button").then(n.bind(null,"dc14"))},o=function(){return n.e("components/extend/toast/toast").then(n.bind(null,"3a6c"))},i={components:{tuiButton:a,tuiToast:o},data:function(){return{}},methods:{showToast:function(t){var e={title:"操作成功",imgUrl:"/static/images/toast/check-circle.png",icon:!0};switch(t){case 2:e.title="操作失败",e.imgUrl="/static/images/toast/fail-circle.png";break;case 3:e.title="提示信息",e.imgUrl="/static/images/toast/info-circle.png";break;case 4:e.title="提示信息",e.icon=!1;break;case 5:e.title="标题信息",e.content="操作成功，内容信息";break;case 6:e.title="5s后消失~",e.duration=4e3;break;default:break}this.$refs.toast.show(e)}}};e.default=i},f680:function(t,e,n){"use strict";n.r(e);var a=n("e077"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a}},[["823b","common/runtime","common/vendor"]]]);
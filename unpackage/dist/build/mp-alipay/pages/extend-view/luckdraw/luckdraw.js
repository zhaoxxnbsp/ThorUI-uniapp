(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/extend-view/luckdraw/luckdraw"],{"05f4":function(n,e,t){"use strict";t.r(e);var a=t("b7a7"),u=t("dd09");for(var i in u)"default"!==i&&function(n){t.d(e,n,function(){return u[n]})}(i);t("39e4");var c=t("2877"),r=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"39e4":function(n,e,t){"use strict";var a=t("9cee"),u=t.n(a);u.a},"9cee":function(n,e,t){},b7a7:function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return u})},dd09:function(n,e,t){"use strict";t.r(e);var a=t("de4a"),u=t.n(a);for(var i in a)"default"!==i&&function(n){t.d(e,n,function(){return a[n]})}(i);e["default"]=u.a},de4a:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{circleList:24,awardList:[{img:"luck-1.png",name:".top域名 1元/年"},{img:"luck-2.png",name:"VPS 1元/30天"},{img:"luck-3.png",name:"免费主机1年"},{img:"luck-4.png",name:"虚拟主机1元/年"},{img:"luck-1.png",name:".top域名 1元/年"},{img:"luck-2.png",name:"VPS 1元/30天"},{img:"luck-3.png",name:"免费主机1年"},{img:"luck-4.png",name:"虚拟主机1元/年"}],indexSelect:0,isRunning:!1}},methods:{getRandom:function(n){var e=Math.random()>.5?"2":"1";n=n||3;for(var t=0;t<n;t++)e+=Math.floor(10*Math.random());return Number(e)},startDrawing:function(){var e=this;if(!this.isRunning){this.isRunning=!0;var t=0,a=0,u=this.getRandom(3),i=setInterval(function(){++t,t%=8,e.indexSelect=t,a+=40,a>u&&(clearInterval(i),i=null,n.showModal({title:"恭喜您",content:"获得了奖品【"+e.awardList[t].name+"】",confirmColor:"#5677FC",showCancel:!1,success:function(n){n.confirm&&(e.isRunning=!1)}}))},70+a)}}}};e.default=t}).call(this,t("c11b")["default"])},e1e2:function(n,e,t){"use strict";(function(n){t("51a7"),t("921b");a(t("66fd"));var e=a(t("05f4"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("c11b")["createPage"])}},[["e1e2","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extend-view/newsDetail/newsDetail"],{"2b01":function(t,n,e){},"3d97":function(t,n,e){"use strict";e.r(n);var i=e("91a1"),o=e("c058");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("99b6");var a=e("2877"),s=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=s.exports},"421c":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/icon/icon").then(e.bind(null,"7c3f"))},o=function(){return e.e("components/tag/tag").then(e.bind(null,"f7fa"))},u=function(){return e.e("components/list-cell/list-cell").then(e.bind(null,"9238"))},a=function(){return e.e("components/loadmore/loadmore").then(e.bind(null,"022c"))},s=function(){return e.e("components/nomore/nomore").then(e.bind(null,"9645"))},c=function(){return e.e("components/badge/badge").then(e.bind(null,"6f13"))},l={components:{tuiIcon:i,tuiTag:o,tuiListCell:u,tuiLoadmore:a,tuiNomore:s,tuiBadge:c},data:function(){return{fabulous:123,isFabulous:!1,isCollection:!1,cmtList:[{avatar:"list_2.jpg",nickname:"米兰的卡先生",fabulous:123,isFabulous:!1,content:"我一直没懂赛前问一个主教练如何评价对手的主教练， 记者究竟是想得到什么答案？",reply:[{nickname:"Mesaldo",content:"汉军威武!卓尔不凡!火炉德比，热力四射！场上争胜，场下朋友☺ ☻"},{nickname:"月牙",content:"新政实行后，大小摩托轮流冲，不用经常上迪力了，杨帅该拿下就拿下☺"}],replayNum:44,time:"昨天 22:12"},{avatar:"avatar_1.jpg",nickname:"月牙",fabulous:2,content:"力帆有杨帅，迪力木来提，尹聪耀，完全可以应付。尤其是杨帅坐稳主力后卫。",reply:[{nickname:"thorui",content:"汉军威武!卓尔不凡!火炉德比，热力四射！场上争胜，场下朋友"},{nickname:"Mr卡卜斯",content:"说实话，武汉重庆还真的是一家，但是比赛还是要分出个胜负来的，我卓尔球迷肯定是要为我武汉加油了，按照目前两队现在这个状态来看武汉重庆应该是五五开，所以我想说武汉加油！卓尔加油！"}],replayNum:2,time:"昨天 21:09"},{avatar:"avatar_2.jpg",nickname:"thorui",fabulous:0,content:"小克鲁伊夫带的球队征服了中超球迷，李铁也带队冲超成功，现在风头正劲，究竟鹿死谁手，谁更胜一筹，期待精彩的比赛 ☻ ☻ ☻",reply:[],replayNum:0,time:"昨天 17:30"}],pageIndex:1,loadding:!1,pullUpOn:!0}},computed:{iconColor:function(){return this.isFabulous?"#5677fc":"#333"},itemIconColor:function(){return function(t){return t?"#5677fc":"#9a9a9a"}},iconName:function(){return function(t){return t?"agree-fill":"agree"}}},methods:{btnFabulous:function(){this.fabulous=this.isFabulous?123:124,this.isFabulous=!this.isFabulous},cmtFabulous:function(t){var n=t.currentTarget.id,e=this.cmtList[n],i=this.cmtList[n].isFabulous,o=this.cmtList[n].fabulous,u=i?o-1:o+1;this.$set(e,"fabulous",u),this.$set(e,"isFabulous",!i)},collection:function(){this.isCollection=!this.isCollection,this.isCollection&&this.tui.toast("收藏成功！")},btnCmt:function(){t.navigateTo({url:"../news-cmt/news-cmt"})},cmtAll:function(){t.navigateTo({url:"../news-cmt-list/news-cmt-list"})},cmtReply:function(){t.navigateTo({url:"../news-cmt-reply/news-cmt-reply"})}},onReachBottom:function(){if(this.pullUpOn)if(this.loadding=!0,3==this.pageIndex)this.loadding=!1,this.pullUpOn=!1;else{var t=JSON.parse(JSON.stringify(this.cmtList));this.cmtList=this.cmtList.concat(t),this.pageIndex=this.pageIndex+1,this.loadding=!1}}};n.default=l}).call(this,e("6e42")["default"])},"91a1":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.iconName(t.isFabulous)),i=t.__map(t.cmtList,function(n,e){var i=t.iconName(n.isFabulous),o=t.itemIconColor(n.isFabulous);return{$orig:t.__get_orig(n),m1:i,m2:o}});t.$mp.data=Object.assign({},{$root:{m0:e,l0:i}})},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},"99b6":function(t,n,e){"use strict";var i=e("2b01"),o=e.n(i);o.a},c058:function(t,n,e){"use strict";e.r(n);var i=e("421c"),o=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=o.a}},[["9736","common/runtime","common/vendor"]]]);
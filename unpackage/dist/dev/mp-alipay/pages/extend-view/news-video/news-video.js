(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/extend-view/news-video/news-video"],{

/***/ 278:
/*!**********************************************************************************************!*\
  !*** D:/work/uniapp/ThorUI/main.js?{"page":"pages%2Fextend-view%2Fnews-video%2Fnews-video"} ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _newsVideo = _interopRequireDefault(__webpack_require__(/*! ./pages/extend-view/news-video/news-video.vue */ 279));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_newsVideo.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 279:
/*!*************************************************************************!*\
  !*** D:/work/uniapp/ThorUI/pages/extend-view/news-video/news-video.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news_video_vue_vue_type_template_id_47b45452___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-video.vue?vue&type=template&id=47b45452& */ 280);
/* harmony import */ var _news_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-video.vue?vue&type=script&lang=js& */ 282);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _news_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _news_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _news_video_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-video.vue?vue&type=style&index=0&lang=css& */ 284);
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _news_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _news_video_vue_vue_type_template_id_47b45452___WEBPACK_IMPORTED_MODULE_0__["render"],
  _news_video_vue_vue_type_template_id_47b45452___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "work/uniapp/ThorUI/pages/extend-view/news-video/news-video.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 280:
/*!********************************************************************************************************!*\
  !*** D:/work/uniapp/ThorUI/pages/extend-view/news-video/news-video.vue?vue&type=template&id=47b45452& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_video_vue_vue_type_template_id_47b45452___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./news-video.vue?vue&type=template&id=47b45452& */ 281);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_video_vue_vue_type_template_id_47b45452___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_video_vue_vue_type_template_id_47b45452___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 281:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work/uniapp/ThorUI/pages/extend-view/news-video/news-video.vue?vue&type=template&id=47b45452& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var m0 = _vm.iconName(_vm.isFabulous)

  var l0 = _vm.__map(_vm.cmtList, function(item, index) {
    var m1 = _vm.iconName(item.isFabulous)
    var m2 = _vm.itemIconColor(item.isFabulous)
    return {
      $orig: _vm.__get_orig(item),
      m1: m1,
      m2: m2
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        l0: l0
      }
    }
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 282:
/*!**************************************************************************************************!*\
  !*** D:/work/uniapp/ThorUI/pages/extend-view/news-video/news-video.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./news-video.vue?vue&type=script&lang=js& */ 283);
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 283:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work/uniapp/ThorUI/pages/extend-view/news-video/news-video.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var tuiIcon = function tuiIcon() {return __webpack_require__.e(/*! import() | components/icon/icon */ "components/icon/icon").then(__webpack_require__.bind(null, /*! @/components/icon/icon */ 757));};var tuiTag = function tuiTag() {return __webpack_require__.e(/*! import() | components/tag/tag */ "components/tag/tag").then(__webpack_require__.bind(null, /*! @/components/tag/tag */ 764));};var tuiListCell = function tuiListCell() {return __webpack_require__.e(/*! import() | components/list-cell/list-cell */ "components/list-cell/list-cell").then(__webpack_require__.bind(null, /*! @/components/list-cell/list-cell */ 750));};var tuiLoadmore = function tuiLoadmore() {return __webpack_require__.e(/*! import() | components/loadmore/loadmore */ "components/loadmore/loadmore").then(__webpack_require__.bind(null, /*! @/components/loadmore/loadmore */ 799));};var tuiNomore = function tuiNomore() {return __webpack_require__.e(/*! import() | components/nomore/nomore */ "components/nomore/nomore").then(__webpack_require__.bind(null, /*! @/components/nomore/nomore */ 792));};var tuiBadge = function tuiBadge() {return __webpack_require__.e(/*! import() | components/badge/badge */ "components/badge/badge").then(__webpack_require__.bind(null, /*! @/components/badge/badge */ 736));};var _default =






























































































{
  components: {
    tuiIcon: tuiIcon,
    tuiTag: tuiTag,
    tuiListCell: tuiListCell,
    tuiLoadmore: tuiLoadmore,
    tuiNomore: tuiNomore,
    tuiBadge: tuiBadge },

  data: function data() {
    return {
      danmuList: [{
        text: '非常棒！！！',
        color: '#ff0000',
        time: 3 },

      {
        text: '不错哦~~~~',
        color: '#ff00ff',
        time: 3 },

      {
        text: '超级厉害！',
        color: '#ff00ff',
        time: 5 },

      {
        text: '无敌~',
        color: '#ff00ff',
        time: 5 },

      {
        text: '很棒',
        color: '#ff00ff',
        time: 5 },

      {
        text: '超赞！',
        color: '#ff00ff',
        time: 8 },

      {
        text: '给力',
        color: '#ff00ff',
        time: 8 },

      {
        text: 'thorui~~~~~',
        color: '#ff00ff',
        time: 10 },

      {
        text: '给力~~~',
        color: '#ff00ff',
        time: 16 },

      {
        text: '给力~~~',
        color: '#ff00ff',
        time: 20 },

      {
        text: 'thorui~~~~~',
        color: '#ff00ff',
        time: 30 },

      {
        text: 'thorui~~~~~',
        color: '#ff00ff',
        time: 50 },

      {
        text: 'thorui~~~~~',
        color: '#ff00ff',
        time: 50 }],


      fabulous: 123,
      isFabulous: false,
      isCollection: false,
      cmtList: [{
        avatar: "list_2.jpg",
        nickname: "米兰的卡先生",
        fabulous: 123,
        isFabulous: false,
        content: "我一直没懂赛前问一个主教练如何评价对手的主教练， 记者究竟是想得到什么答案？",
        reply: [{
          nickname: "Mesaldo",
          content: "汉军威武!卓尔不凡!火炉德比，热力四射！场上争胜，场下朋友☺ ☻" },
        {
          nickname: "月牙",
          content: "新政实行后，大小摩托轮流冲，不用经常上迪力了，杨帅该拿下就拿下☺" }],

        replayNum: 44,
        time: "昨天 22:12" },
      {
        avatar: "avatar_1.jpg",
        nickname: "月牙",
        fabulous: 2,
        content: "力帆有杨帅，迪力木来提，尹聪耀，完全可以应付。尤其是杨帅坐稳主力后卫。",
        reply: [{
          nickname: "thorui",
          content: "汉军威武!卓尔不凡!火炉德比，热力四射！场上争胜，场下朋友" },
        {
          nickname: "Mr卡卜斯",
          content: "说实话，武汉重庆还真的是一家，但是比赛还是要分出个胜负来的，我卓尔球迷肯定是要为我武汉加油了，按照目前两队现在这个状态来看武汉重庆应该是五五开，所以我想说武汉加油！卓尔加油！" }],

        replayNum: 2,
        time: "昨天 21:09" },
      {
        avatar: "avatar_2.jpg",
        nickname: "thorui",
        fabulous: 0,
        content: "小克鲁伊夫带的球队征服了中超球迷，李铁也带队冲超成功，现在风头正劲，究竟鹿死谁手，谁更胜一筹，期待精彩的比赛 ☻ ☻ ☻",
        reply: [],
        replayNum: 0,
        time: "昨天 17:30" }],

      pageIndex: 1,
      loadding: false,
      pullUpOn: true };

  },
  computed: {
    iconColor: function iconColor() {
      return this.isFabulous ? '#5677fc' : '#333';
    },
    itemIconColor: function itemIconColor() {
      return function (isFabulous) {
        return isFabulous ? '#5677fc' : '#9a9a9a';
      };
    },
    iconName: function iconName() {
      return function (isFabulous) {
        return isFabulous ? 'agree-fill' : 'agree';
      };
    } },

  methods: {
    btnFabulous: function btnFabulous() {
      this.fabulous = this.isFabulous ? 123 : 124;
      this.isFabulous = !this.isFabulous;
    },
    cmtFabulous: function cmtFabulous(e) {
      var index = e.currentTarget.id;
      var fabulousObj = this.cmtList[index];
      var isFabulous = this.cmtList[index].isFabulous;
      var fabulous = this.cmtList[index].fabulous;
      var fabulousNum = isFabulous ? fabulous - 1 : fabulous + 1;
      this.$set(fabulousObj, "fabulous", fabulousNum);
      this.$set(fabulousObj, "isFabulous", !isFabulous);
    },
    collection: function collection() {
      this.isCollection = !this.isCollection;
      if (this.isCollection) {
        this.tui.toast("收藏成功！");
      }
    },
    btnCmt: function btnCmt() {
      uni.navigateTo({
        url: '../news-cmt/news-cmt' });

    },
    cmtAll: function cmtAll() {
      uni.navigateTo({
        url: '../news-cmt-list/news-cmt-list' });

    },
    cmtReply: function cmtReply() {
      uni.navigateTo({
        url: '../news-cmt-reply/news-cmt-reply' });

    } },

  // 页面上拉触底事件的处理函数
  onReachBottom: function onReachBottom() {
    if (!this.pullUpOn) return;
    this.loadding = true;
    if (this.pageIndex == 3) {
      this.loadding = false;
      this.pullUpOn = false;
    } else {
      var arr = JSON.parse(JSON.stringify(this.cmtList));
      this.cmtList = this.cmtList.concat(arr);
      this.pageIndex = this.pageIndex + 1;
      this.loadding = false;
    }
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 284:
/*!**********************************************************************************************************!*\
  !*** D:/work/uniapp/ThorUI/pages/extend-view/news-video/news-video.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_video_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../软件/HBuilderX.0.1.33.20180505-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./news-video.vue?vue&type=style&index=0&lang=css& */ 285);
/* harmony import */ var _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_video_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_video_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_video_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_video_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_0_1_33_20180505_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_video_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 285:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work/uniapp/ThorUI/pages/extend-view/news-video/news-video.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[278,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-alipay/pages/extend-view/news-video/news-video.js.map
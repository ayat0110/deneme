exports.ids = [5];
exports.modules = {

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3239d5f5", content, true, context)
};

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_5f5f052b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_5f5f052b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_5f5f052b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_5f5f052b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_5f5f052b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bcColorFont[data-v-5f5f052b]{font-family:SF Mono, Fira Code, sans-serif;font-weight:400;--tw-text-opacity:1;color:rgba(100, 255, 218, var(--tw-text-opacity));font-size:clamp(14px,5vw,16px)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Hero.vue?vue&type=template&id=5f5f052b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"flex flex-col justify-center items-start min-h-screen p-0"},[_vm._ssrNode("<div style=\"margin-top: 13%;\" data-v-5f5f052b>","</div>",[_c('h1',{directives:[{name:"animate-delay",rawName:"v-animate-delay:fade-up",value:(1200),expression:"1200",arg:"fade-up"}],staticClass:"bcColorFont mb-[30px] ml-1 sm:mb-5 sm:ml-[2px]"},[_vm._ssrNode("\n            Hi, my name is\n        ")]),_vm._ssrNode(" "),_c('h2',{directives:[{name:"animate-delay",rawName:"v-animate-delay:fade-up",value:(1300),expression:"1300",arg:"fade-up"}],staticClass:"text-bcColorTitle bigHeading"},[_vm._ssrNode("\n            Ayat Alzaidi.\n        ")]),_vm._ssrNode(" "),_c('h3',{directives:[{name:"animate-delay",rawName:"v-animate-delay:fade-up",value:(1400),expression:"1400",arg:"fade-up"}],staticClass:"text-bcSlate bigHeading mt-2 leading-[0.9]"},[_vm._ssrNode("\n            I am the founder of the thriving community, FrontendSimply.\n        ")]),_vm._ssrNode(" "),_c('p',{directives:[{name:"animate-delay",rawName:"v-animate-delay:fade-up",value:(1500),expression:"1500",arg:"fade-up"}],staticClass:"text-bcSlate mt-5 mb-0 max-w-lg leading-[1.3] text-bcLg"},[_vm._ssrNode("\n            I'm a computer engineer specializing in building interfaces and\n            applications for the web.Seeking an opportunity to join a dynamic software team,I am eager to enhance \n            my collaboration skills and further to develop my Frontend development skills in a stimulating work environment.\n        ")]),_vm._ssrNode(" "),_c('a',{directives:[{name:"animate-delay",rawName:"v-animate-delay:fade-up",value:(1600),expression:"1600",arg:"fade-up"}],staticClass:"\n                flex\n                bigButton\n                text-bcSm\n                px-7\n                py-5\n                w-max\n                mt-bcTouchButton\n            ",attrs:{"href":"mailto:hayatvefa2000@gmail.com"}},[_vm._ssrNode("\n            Get In Touch\n        ")])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/Hero.vue?vue&type=template&id=5f5f052b&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Hero.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Herovue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/sections/Hero.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_Herovue_type_script_lang_js_ = (Herovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sections/Hero.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(67)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_Herovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5f5f052b",
  "6012bd9c"
  
)

/* harmony default export */ var Hero = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sections-hero.js.map
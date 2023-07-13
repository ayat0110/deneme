exports.ids = [2];
exports.modules = {

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1c551084", content, true, context)
};

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/me_with-back-ground.787b0bb.jpg";

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_5a1614ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_5a1614ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_5a1614ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_5a1614ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_5a1614ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "p[data-v-5a1614ce]{font-size:18px}li[data-v-5a1614ce]:before{content:\"▹\";position:absolute;left:0px;overflow:hidden;font-size:14px;line-height:.75rem;--tw-text-opacity:1;color:rgba(100, 255, 218, var(--tw-text-opacity))}.imgWrapper[data-v-5a1614ce]{position:relative;display:block;width:100%;border-radius:0.75rem;--tw-bg-opacity:1;background-color:rgba(100, 255, 218, var(--tw-bg-opacity))}.imgWrapper[data-v-5a1614ce]:focus, .imgWrapper[data-v-5a1614ce]:hover{background-color:transparent;outline:2px solid transparent;outline-offset:2px}.imgWrapper[data-v-5a1614ce]:focus:after, .imgWrapper[data-v-5a1614ce]:hover:after{top:15px;left:15px}.imgWrapper:focus img[data-v-5a1614ce],.imgWrapper:hover img[data-v-5a1614ce]{filter:none}.imgWrapper img[data-v-5a1614ce]{position:relative;z-index:50;display:inline-block;border-radius:0.75rem;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;filter:grayscale(100%) contrast(1)}.imgWrapper[data-v-5a1614ce]:after,.imgWrapper[data-v-5a1614ce]:before{content:\"\"}.imgWrapper[data-v-5a1614ce]:after, .imgWrapper[data-v-5a1614ce]:before{position:absolute;display:block;height:100%;width:100%;border-radius:0.75rem;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.imgWrapper[data-v-5a1614ce]:before{top:0px;left:0px;z-index:50;--tw-bg-opacity:1;background-color:rgba(10, 25, 47, var(--tw-bg-opacity))}.imgWrapper[data-v-5a1614ce]:after{top:20px;left:20px;z-index:0;border-width:2px;border-style:solid;--tw-border-opacity:1;border-color:rgba(100, 255, 218, var(--tw-border-opacity))}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/About.vue?vue&type=template&id=5a1614ce&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"max-w-900 h-auto"},[_vm._ssrNode("<h2 class=\"numberedHeading\" data-v-5a1614ce>About Me</h2> <div class=\"block md:grid grid-flow-col grid-cols-5 grid-rows-1 gap-12\" data-v-5a1614ce><div class=\"col-span-3\" data-v-5a1614ce><div data-v-5a1614ce><p class=\"my-4\" data-v-5a1614ce>\n                    I'm a whiz at interpreting data and transforming it into\n                    useful information.\n                </p> <p class=\"my-4\" data-v-5a1614ce>\n                    The reason why I'm interested in web development started\n                    back in 2015 when I am struggle in develop an internal\n                    system with JavaServer Pages（JSP）in Anhe. After that\n                    we switch the developing direction to Angular 2, then\n                    every turns out to be bright and interesting.\n                </p> <p class=\"my-4\" data-v-5a1614ce>\n                    Problem based learning is always my key way of solving\n                    problems which clear my purpose and also solve the\n                    problem effetively.\n                </p> <p data-v-5a1614ce>\n                    Here are technologies I've been working with recently:\n                </p></div> <ul class=\"\n                    mt-5\n                    overflow-hidden\n                    list-none\n                    grid grid-flow-col grid-cols-2 grid-rows-2\n                    gap-y-0 gap-x-4\n                \" data-v-5a1614ce>"+(_vm._ssrList((_vm.skills),function(skill){return ("<li class=\"relative mb-[10px] pl-5 font-mono text-bcSm\" data-v-5a1614ce>"+_vm._ssrEscape("\n                    "+_vm._s(skill)+"\n                ")+"</li>")}))+"</ul></div> <div class=\"col-span-2 max-w-[300px] mt-6 mb-60 mx-auto\" data-v-5a1614ce><div class=\"imgWrapper\" data-v-5a1614ce><img"+(_vm._ssrAttr("src",__webpack_require__(69)))+" data-v-5a1614ce></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/About.vue?vue&type=template&id=5a1614ce&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/About.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Aboutvue_type_script_lang_js_ = ({
  data() {
    return {
      skills: ["JavaScript (ES6+)", "Vue", "Node.js"]
    };
  }

});
// CONCATENATED MODULE: ./components/sections/About.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_Aboutvue_type_script_lang_js_ = (Aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sections/About.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_Aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5a1614ce",
  "589f1005"
  
)

/* harmony default export */ var About = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sections-about.js.map
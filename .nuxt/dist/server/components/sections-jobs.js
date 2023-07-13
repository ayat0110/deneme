exports.ids = [6];
exports.modules = {

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("be7333a4", content, true, context)
};

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Jobs_vue_vue_type_style_index_0_id_1feabc31_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Jobs_vue_vue_type_style_index_0_id_1feabc31_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Jobs_vue_vue_type_style_index_0_id_1feabc31_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Jobs_vue_vue_type_style_index_0_id_1feabc31_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Jobs_vue_vue_type_style_index_0_id_1feabc31_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "li[data-v-1feabc31]{position:relative;margin-bottom:10px;padding-left:1.25rem;font-family:SF Mono, Fira Code, sans-serif;font-size:14px}li[data-v-1feabc31]:before{content:\"▹\";position:absolute;left:0px;overflow:hidden;font-size:14px;line-height:.75rem;--tw-text-opacity:1;color:rgba(100, 255, 218, var(--tw-text-opacity))}.fade-enter-active[data-v-1feabc31]{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:1000ms}.fade-leave-active[data-v-1feabc31]{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:500ms}.fade-enter[data-v-1feabc31], .fade-leave-active[data-v-1feabc31]{opacity:0}button[data-v-1feabc31]{height:42px;width:100%;align-items:center;white-space:nowrap;border-left-width:2px;border-style:solid;--tw-border-opacity:1;border-color:rgba(35, 53, 84, var(--tw-border-opacity));background-color:transparent;padding-left:0.5rem;padding-right:0.5rem;padding-top:0px;padding-bottom:2px;text-align:left;font-family:SF Mono, Fira Code, sans-serif;font-size:20px;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:500ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}button[data-v-1feabc31]:hover{--tw-bg-opacity:1;background-color:rgba(17, 34, 64, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(100, 255, 218, var(--tw-text-opacity))}button[data-v-1feabc31]:focus{--tw-bg-opacity:1;background-color:rgba(17, 34, 64, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(100, 255, 218, var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px}@media (min-width: 480px){button[data-v-1feabc31]{padding-left:1.25rem;padding-right:1.25rem}}.highLight[data-v-1feabc31]{position:absolute;top:0px;left:0px;height:42px;width:2px;border-radius:0.25rem;--tw-bg-opacity:1;background-color:rgba(100, 255, 218, var(--tw-bg-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-delay:100ms}.content[data-v-1feabc31]{position:relative;height:auto;width:100%;padding-top:10px;padding-bottom:10px;padding-left:0.25rem;padding-right:0.25rem}.content h3[data-v-1feabc31]{margin-bottom:2px;font-size:20px;font-weight:500;line-height:1.25}@media (min-width: 768px){.content h3[data-v-1feabc31]{font-size:22px}}.content p[data-v-1feabc31]{margin-bottom:1.5rem;font-family:SF Mono, Fira Code, sans-serif;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgba(168, 178, 209, var(--tw-text-opacity))}.inner[data-v-1feabc31]{position:relative;margin-left:0.5rem;height:auto;width:100%;padding-top:10px;padding-bottom:10px;padding-left:0.25rem;padding-right:0.25rem}@media (min-width: 480px){.inner[data-v-1feabc31]{margin-left:1.25rem}}.inner h3[data-v-1feabc31]{margin-bottom:2px;font-size:20px;font-weight:500;line-height:1.25}@media (min-width: 768px){.inner h3[data-v-1feabc31]{font-size:22px}}.inner p[data-v-1feabc31]{margin-bottom:1.5rem;font-family:SF Mono, Fira Code, sans-serif;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgba(168, 178, 209, var(--tw-text-opacity))}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Jobs.vue?vue&type=template&id=1feabc31&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"max-w-[700px]"},[_vm._ssrNode("<h2 class=\"numberedHeading\" data-v-1feabc31>Where I've Experienced</h2> "),_vm._ssrNode("<div class=\"flex min-h-[450px] sm:min-h-[300px]\" data-v-1feabc31>","</div>",[_vm._ssrNode("<div class=\"flex flex-col relative w-max p-0 m-0 list-none\" data-v-1feabc31><button data-v-1feabc31>NTU</button> <button data-v-1feabc31>ANHE</button> <button data-v-1feabc31>NCU</button> <button data-v-1feabc31>NCUE</button> <span class=\"highLight\""+(_vm._ssrStyle(null,{
                    transform:
                        'translateY(calc(' + _vm.actvieTabId * 42 + 'px))',
                }, null))+" data-v-1feabc31></span></div> "),_vm._ssrNode("<div class=\"inner\" data-v-1feabc31>","</div>",[_c('transition',{attrs:{"name":"fade"}},[(_vm.actvieTabId === 0)?_c('div',{staticClass:"absolute",attrs:{"id":"0"}},[_c('h3',[_vm._v("R&D Substitute @ National Taiwan University")]),_vm._v(" "),_c('p',[_vm._v("August 2017 - June 2021")]),_vm._v(" "),_c('div',[_c('ul',[_c('li',[_vm._v("\n                                Construct internal inventory system for lab\n                                by using RFID, Vue.js, Bootstrap and\n                                Firebase.\n                            ")]),_vm._v(" "),_c('li',[_vm._v("Lab MIS.")]),_vm._v(" "),_c('li',[_vm._v("Six-axis robot arm controlling.")]),_vm._v(" "),_c('li',[_vm._v("\n                                Project execution which related to chemical\n                                engineering.\n                            ")]),_vm._v(" "),_c('li',[_vm._v("\n                                Side Project: Nuxt portfolio with\n                                Tailwindcss and StoryBlok\n                            ")]),_vm._v(" "),_c('li',[_vm._v("\n                                Side Project: Taifex data crawling and\n                                electron-vue desktop app.\n                            ")])])])]):_vm._e()]),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.actvieTabId === 1)?_c('div',{staticClass:"absolute",attrs:{"id":"1"}},[_c('h3',[_vm._v("Co-Founder @ Anhe Three Dimensional Co.")]),_vm._v(" "),_c('p',[_vm._v("August 2015 - July 2017")]),_vm._v(" "),_c('div',[_c('ul',[_c('li',[_vm._v("\n                                Algorithm implementation with Java which is\n                                refer to\n                                "),_c('a',{staticClass:"text-bcColor focus:outline-none",attrs:{"href":"https://link.springer.com/article/10.1007/s00170-015-7071-9","target":"_blank"}},[_vm._v("Zhang (2015)")]),_vm._v(".\n                            ")]),_vm._v(" "),_c('li',[_vm._v("\n                                Design human interface for inkjet 3D printer\n                                with Vaadin and Three.js.\n                            ")]),_vm._v(" "),_c('li',[_vm._v("\n                                Construct internal system with Angular 2,\n                                Spring Boot Rest API and using MySQL as data\n                                source.\n                            ")])])])]):_vm._e()]),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.actvieTabId === 2)?_c('div',{staticClass:"absolute",attrs:{"id":"2"}},[_c('h3',[_vm._v("\n                        SAP Student Instructor & Master @ National Center\n                        University\n                    ")]),_vm._v(" "),_c('p',[_vm._v("June 2013 - July 2017")]),_vm._v(" "),_c('div',[_c('ul',[_c('li',[_vm._v("Major in Industrial Management")]),_vm._v(" "),_c('li',[_vm._v("\n                                SAP ERP student team leader of production\n                                planning.\n                            ")]),_vm._v(" "),_c('li',[_vm._v("\n                                SAP product planning instructor for EMBA\n                                students.\n                            ")])])])]):_vm._e()]),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.actvieTabId === 3)?_c('div',{staticClass:"absolute",attrs:{"id":"3"}},[_c('h3',[_vm._v("\n                        Bachelor @ National Changhua University of Education\n                    ")]),_vm._v(" "),_c('p',[_vm._v("September 2009 - June 2013")]),_vm._v(" "),_c('div',[_c('ul',[_c('li',[_vm._v("Major in Mathematics and Statstics.")]),_vm._v(" "),_c('li',[_vm._v("Junior high tutor for math and nature.")]),_vm._v(" "),_c('li',[_vm._v("\n                                Leader Editor of school year book in\n                                graduation student association.\n                            ")])])])]):_vm._e()])],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/Jobs.vue?vue&type=template&id=1feabc31&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Jobs.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Jobsvue_type_script_lang_js_ = ({
  data() {
    return {
      actvieTabId: 0,
      tabContent: [{
        title: "Student @National Changhua Education University",
        period: "May 2012 - June 2015",
        headlines: ["Amet consectetur adipisicing elit. Iureeligendi nesciunt enim", "Amet consectetur adipisicing elit. Iureeligendi nesciunt enim", "Amet consectetur adipisicing elit. Iureeligendi nesciunt enim"]
      }, {
        title: "Student @National Center University",
        period: "May 2015 - June 2019",
        headlines: ["Amet consectetur adipisicing elit. Iureeligendi nesciunt enim", "Amet consectetur adipisicing elit. Iureeligendi nesciunt enim", "Amet consectetur adipisicing elit. Iureeligendi nesciunt enim"]
      }],
      temp: "red"
    };
  },

  transition: {
    name: "fade"
  }
});
// CONCATENATED MODULE: ./components/sections/Jobs.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_Jobsvue_type_script_lang_js_ = (Jobsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sections/Jobs.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(72)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_Jobsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1feabc31",
  "d4bbc0e4"
  
)

/* harmony default export */ var Jobs = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sections-jobs.js.map
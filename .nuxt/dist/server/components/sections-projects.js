exports.ids = [7,1];
exports.modules = {

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3695812c", content, true, context)
};

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("357c309c", content, true, context)
};

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_id_232ac608_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_id_232ac608_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_id_232ac608_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_id_232ac608_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_id_232ac608_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".imgContainer[data-v-232ac608]{position:absolute;height:30vh;height:100%;width:100%;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgba(100, 255, 218, var(--tw-bg-opacity));opacity:0.2;background-blend-mode:multiply;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}@media (min-width: 768px){.imgContainer[data-v-232ac608]{top:25%}.imgContainer[data-v-232ac608]{width:66.666667%}.imgContainer[data-v-232ac608]{opacity:1}.imgContainer[data-v-232ac608]:hover{cursor:pointer}.imgContainer[data-v-232ac608]:hover{background-blend-mode:normal}}.imgContainer[data-v-232ac608]{background-size:cover;background-repeat:no-repeat;width:54.667%}a[data-v-232ac608]{display:flex;padding:0.75rem;--tw-text-opacity:1;color:rgba(204, 214, 246, var(--tw-text-opacity));transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:500ms;transition-timing-function:cubic-bezier(0.645, 0.045, 0.355, 1)}a[data-v-232ac608]:hover{--tw-text-opacity:1;color:rgba(100, 255, 218, var(--tw-text-opacity))}.deneme2[data-v-232ac608]{width:39.667%}@media screen and (max-width:600px){.deneme2[data-v-232ac608]{width:80%}.deneme3[data-v-232ac608]{display:flex;flex-direction:column}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Project.vue?vue&type=template&id=232ac608&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"relative flex mb-7 sm:mb-16 md:mb-24",class:[_vm.order ? 'justify-end' : '']},[_vm._ssrNode("<div"+(_vm._ssrClass("z-0 md:z-10 imgContainer",[_vm.order ? 'left-0' : 'right-0']))+(_vm._ssrStyle(null,_vm.imgUrlStyle, null))+" data-v-232ac608></div> <div"+(_vm._ssrClass("relative mx-4 mb-2 sm:mx-8 mt-[10%] flex flex-col md:w-8/12 deneme2",[_vm.order ? 'md:items-end' : 'md:items-start']))+" data-v-232ac608><h3 class=\"z-0 text-bcColor font-mono text-bcXxs pb-3\" data-v-232ac608>\n            Featured Project\n        </h3> <h3 class=\"z-0 text-bcWhite pb-6\" data-v-232ac608>"+_vm._ssrEscape(_vm._s(_vm.title))+"</h3> <p"+(_vm._ssrClass("\n                z-20\n                text-bcMd\n                pb-6\n                md:bg-bcLightNavy\n                md:p-4\n                md:mb-4\n                md:rounded-md\n                md:shadow-lg\n            ",[_vm.order ? 'md:text-right' : '']))+" data-v-232ac608>"+_vm._ssrEscape("\n            "+_vm._s(_vm.previewTexts[0].point1)+"\n        ")+"</p> <ul class=\"z-20 flex flex-row font-mono text-bcXs pb-4 deneme3\" data-v-232ac608>"+(_vm._ssrList((_vm.tags),function(tag){return ("<li class=\"pr-4\" data-v-232ac608>"+_vm._ssrEscape(_vm._s(tag))+"</li>")}))+"</ul> <div class=\"z-10 md:z-0 flex flex-row -ml-3\" data-v-232ac608>"+((_vm.githubUrl)?("<a"+(_vm._ssrAttr("href",("" + _vm.githubUrl)))+" target=\"_blank\" rel=\"noopener noreferrer\" data-v-232ac608><svg xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeLinecap=\"round\" strokeLinejoin=\"round\" className=\"feather feather-github\" stroke-width=\"2\" class=\"w-5 h-5\" data-v-232ac608><title data-v-232ac608>GitHub</title> <path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\" data-v-232ac608></path></svg></a>"):"<!---->")+" "+((_vm.demoLink)?("<a"+(_vm._ssrAttr("href",("" + _vm.demoLink)))+" target=\"_blank\" rel=\"noopener noreferrer\" data-v-232ac608><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-5 w-5\" data-v-232ac608><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14\" data-v-232ac608></path></svg></a>"):"<!---->")+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Project.vue?vue&type=template&id=232ac608&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Project.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Projectvue_type_script_lang_js_ = ({
  props: {
    order: Number,
    title: String,
    githubUrl: String,
    demoLink: String,
    previewTexts: Array,
    thumbnailUrl: String,
    tags: Array
  },
  computed: {
    imgUrlStyle() {
      return {
        backgroundImage: `url(${this.thumbnailUrl})`
      };
    }

  }
});
// CONCATENATED MODULE: ./components/Project.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Projectvue_type_script_lang_js_ = (Projectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Project.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(64)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Projectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "232ac608",
  "547fdd10"
  
)

/* harmony default export */ var Project = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/first-project.4c3a7ff.png";

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/second-project.8d7e4b9.png";

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/third-project.531d626.png";

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_e7ad1572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_e7ad1572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_e7ad1572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_e7ad1572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_e7ad1572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a[data-v-e7ad1572]:hover{--tw-text-opacity:1;color:rgba(100, 255, 218, var(--tw-text-opacity))}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Projects.vue?vue&type=template&id=e7ad1572&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"max-w-[1000px] transition-all"},[_vm._ssrNode("<h2 class=\"numberedHeading\" data-v-e7ad1572>Things I've Built</h2> "),_vm._ssrNode("<ul data-v-e7ad1572>","</ul>",_vm._l((_vm.projects),function(post){return _c('Project',{key:post.id,attrs:{"order":post.order,"title":post.title,"githubUrl":post.githubUrl,"demoLink":post.demoLink,"previewTexts":post.previewTexts,"thumbnailUrl":post.thumbnailUrl,"tags":post.tags}})}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/Projects.vue?vue&type=template&id=e7ad1572&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Projects.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Projectsvue_type_script_lang_js_ = ({
  data() {
    return {
      projects: [{
        "id": "project-1",
        "order": 0,
        "title": "NFT and Digital Art Trading Marketplace",
        "githubUrl": "https://github.com/ayat0110/NFT-and-Digital-Art-Trading-Marketplace",
        "demoLink": "https://spotify-clone-frontendsimply.netlify.app/",
        "previewTexts": [{
          "point1": "Designed and developed an efficient, user-friendly trading platform utilizing modern web technologies, with a focus on responsive design and real-time functionality. The platform integrates dynamic, reusable UI components and a Stripe API checkout option."
        }],
        "thumbnailUrl": __webpack_require__(74),
        "tags": ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Stripe API"]
      }, {
        "id": "project-2",
        "order": 1,
        "title": "Interactive Analytics Dashboard System",
        "githubUrl": "https://github.com/ayat0110/Interactive-Analytics-Dashboard-System",
        "demoLink": "https://project-2.example.com",
        "previewTexts": [{
          "point1": "Built a comprehensive, aesthetically pleasing administrative dashboard using React and Tailwind CSS. The project exemplifies crafting complex UIs, adhering to best practices for accessibility, user experience, and performance in real-world applications."
        }],
        "thumbnailUrl": __webpack_require__(75),
        "tags": ["React", "Tailwind CSS", "react-apexcharts", "postcss", "Vite", "webpack"]
      }, {
        "id": "project-3",
        "order": 1,
        "title": "Real-Time Messaging Application",
        "githubUrl": "https://github.com/ayat0110/Real-Time-Messaging-Application",
        "demoLink": "https://project-2.example.com",
        "previewTexts": [{
          "point1": "Engineered a dynamic, real-time messaging application, demonstrating complex application architecture.The project involved creating a user-friendly chat interface, managing user authentication, and developing message sending/receiving functionality."
        }],
        "thumbnailUrl": __webpack_require__(76),
        "tags": [" Vite", "Vue 3 Composition API", "Tailwind CSS", "Google Auth, Node.js", "Firebase"]
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/sections/Projects.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_Projectsvue_type_script_lang_js_ = (Projectsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sections/Projects.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_Projectsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e7ad1572",
  "32e7d9b2"
  
)

/* harmony default export */ var Projects = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Project: __webpack_require__(66).default})


/***/ })

};;
//# sourceMappingURL=sections-projects.js.map
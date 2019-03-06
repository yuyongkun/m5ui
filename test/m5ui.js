/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Alert/Alert.js":
/*!****************************!*\
  !*** ./src/Alert/Alert.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_transition_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/transition.less */ \"./src/styles/transition.less\");\n/* harmony import */ var _styles_transition_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_transition_less__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ui-alert',\n  props: {\n    bgcolor: {\n      type: String,\n      default: '#2196f3'\n    },\n    close: {\n      type: Boolean,\n      default: false\n    },\n    transition: String,\n    mode: String\n  },\n  methods: {\n    handleRemove(e) {\n      e.stopPropagation();\n      this.$emit('close');\n    }\n\n  },\n\n  render(h) {\n    const close = h('span', {\n      staticClass: 'ui-close',\n      on: {\n        click: this.handleRemove\n      }\n    }, '×');\n    const alert = h('div', {\n      staticClass: 'ui-alert',\n      style: {\n        'background-color': this.bgcolor\n      }\n    }, [this.$slots.default, this.close ? close : undefined]);\n    return this.transition ? h('transition', {\n      props: {\n        mode: this.mode,\n        name: this.transition\n      }\n    }, [alert]) : alert;\n  }\n\n});\n\n//# sourceURL=webpack:///./src/Alert/Alert.js?");

/***/ }),

/***/ "./src/Alert/index.js":
/*!****************************!*\
  !*** ./src/Alert/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_components_alert_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/components/alert.less */ \"./src/styles/components/alert.less\");\n/* harmony import */ var _styles_components_alert_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_components_alert_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert */ \"./src/Alert/Alert.js\");\n\n\n\n_Alert__WEBPACK_IMPORTED_MODULE_1__[\"default\"].install = Vue => {\n  Vue.component(_Alert__WEBPACK_IMPORTED_MODULE_1__[\"default\"].name, _Alert__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Alert__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/Alert/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_base_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/base.less */ \"./src/styles/base.less\");\n/* harmony import */ var _styles_base_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_base_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert */ \"./src/Alert/index.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst components = {\n  Alert: _Alert__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\nlet test = {};\n\ntest.install = Vue => {\n  Object.keys(components).forEach(key => {\n    Vue.use(components[key]);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_objectSpread({}, components, test));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/base.less":
/*!******************************!*\
  !*** ./src/styles/base.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/styles/base.less?");

/***/ }),

/***/ "./src/styles/components/alert.less":
/*!******************************************!*\
  !*** ./src/styles/components/alert.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/styles/components/alert.less?");

/***/ }),

/***/ "./src/styles/transition.less":
/*!************************************!*\
  !*** ./src/styles/transition.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/styles/transition.less?");

/***/ })

/******/ });
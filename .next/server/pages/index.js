module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_component_Youtube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/component/Youtube */ \"./src/component/Youtube.js\");\nvar _jsxFileName = \"/home/noct/Trabalho/my-git/reactjs-nodejs-deck/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst index = ({\n  channel,\n  video\n}) => __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 9\n  }\n}, __jsx(\"h1\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 13\n  }\n}, \"Lista\"), __jsx(_src_component_Youtube__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n  data: channel,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 13\n  }\n}), __jsx(\"h1\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 13\n  }\n}, \"Video\"), __jsx(_src_component_Youtube__WEBPACK_IMPORTED_MODULE_1__[\"Video\"], {\n  data: video,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 13\n  }\n}));\n\nasync function getStaticProps() {\n  const responseChannel = await fetch('http://localhost:3000/api/youtube/channel/spacex');\n  const channel = await responseChannel.json();\n  const responseVideo = await fetch('http://localhost:3000/api/youtube/video/IjMESxJdWkg');\n  const video = await responseVideo.json();\n  return {\n    props: {\n      channel,\n      video\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImluZGV4IiwiY2hhbm5lbCIsInZpZGVvIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXNwb25zZUNoYW5uZWwiLCJmZXRjaCIsImpzb24iLCJyZXNwb25zZVZpZGVvIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBQ0MsU0FBRDtBQUFVQztBQUFWLENBQUQsS0FDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKLEVBRUksTUFBQywyREFBRDtBQUFNLE1BQUksRUFBRUQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSEosRUFJSSxNQUFDLDREQUFEO0FBQU8sTUFBSSxFQUFFQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFKSixDQURSOztBQVVPLGVBQWVDLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsZUFBZSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxrREFBRCxDQUFuQztBQUNBLFFBQU1KLE9BQU8sR0FBRyxNQUFNRyxlQUFlLENBQUNFLElBQWhCLEVBQXRCO0FBR0EsUUFBTUMsYUFBYSxHQUFHLE1BQU1GLEtBQUssQ0FBQyxxREFBRCxDQUFqQztBQUNBLFFBQU1ILEtBQUssR0FBRyxNQUFNSyxhQUFhLENBQUNELElBQWQsRUFBcEI7QUFFQSxTQUFPO0FBQ0xFLFNBQUssRUFBRTtBQUNIUCxhQURHO0FBRUhDO0FBRkc7QUFERixHQUFQO0FBTUQ7QUFDY0Ysb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGlzdCwgVmlkZW99IGZyb20gXCIuLi9zcmMvY29tcG9uZW50L1lvdXR1YmVcIlxuXG5jb25zdCBpbmRleCA9ICh7Y2hhbm5lbCwgdmlkZW99KSA9PiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+TGlzdGE8L2gxPlxuICAgICAgICAgICAgPExpc3QgZGF0YT17Y2hhbm5lbH0gLz5cbiAgICAgICAgICAgIDxoMT5WaWRlbzwvaDE+XG4gICAgICAgICAgICA8VmlkZW8gZGF0YT17dmlkZW99Lz5cbiAgICAgICAgPC9kaXY+XG4pXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCByZXNwb25zZUNoYW5uZWwgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS95b3V0dWJlL2NoYW5uZWwvc3BhY2V4Jyk7XG4gIGNvbnN0IGNoYW5uZWwgPSBhd2FpdCByZXNwb25zZUNoYW5uZWwuanNvbigpO1xuXG5cbiAgY29uc3QgcmVzcG9uc2VWaWRlbyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3lvdXR1YmUvdmlkZW8vSWpNRVN4SmRXa2cnKTtcbiAgY29uc3QgdmlkZW8gPSBhd2FpdCByZXNwb25zZVZpZGVvLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICAgIGNoYW5uZWwsXG4gICAgICAgIHZpZGVvXG4gICAgfSxcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./src/component/Youtube.js":
/*!**********************************!*\
  !*** ./src/component/Youtube.js ***!
  \**********************************/
/*! exports provided: List, Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Video\", function() { return Video; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/noct/Trabalho/my-git/reactjs-nodejs-deck/src/component/Youtube.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst List = ({\n  data\n}) => {\n  const getList = list => list.map(item => __jsx(\"li\", {\n    key: item.videoId,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 2,\n      columnNumber: 46\n    }\n  }, item.videoId));\n\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 9\n    }\n  }, __jsx(\"ol\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 13\n    }\n  }, \" \", getList(data)));\n};\n\nconst Video = ({\n  data\n}) => {\n  console.log(data.title);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, data.title.runs[0].text), __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, \"VideoId\"));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L1lvdXR1YmUuanM/MTI5ZCJdLCJuYW1lcyI6WyJMaXN0IiwiZGF0YSIsImdldExpc3QiLCJsaXN0IiwibWFwIiwiaXRlbSIsInZpZGVvSWQiLCJWaWRlbyIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInJ1bnMiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBWTtBQUNyQixRQUFNQyxPQUFPLEdBQUdDLElBQUksSUFBSUEsSUFBSSxDQUFDQyxHQUFMLENBQVNDLElBQUksSUFBSTtBQUFJLE9BQUcsRUFBRUEsSUFBSSxDQUFDQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0JELElBQUksQ0FBQ0MsT0FBN0IsQ0FBakIsQ0FBeEI7O0FBQ0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFNSixPQUFPLENBQUNELElBQUQsQ0FBYixDQURKLENBREo7QUFNSCxDQVJEOztBQVVBLE1BQU1NLEtBQUssR0FBRyxDQUFDO0FBQUNOO0FBQUQsQ0FBRCxLQUFZO0FBQ3RCTyxTQUFPLENBQUNDLEdBQVIsQ0FBWVIsSUFBSSxDQUFDUyxLQUFqQjtBQUNBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1QsSUFBSSxDQUFDUyxLQUFMLENBQVdDLElBQVgsQ0FBZ0IsQ0FBaEIsRUFBbUJDLElBQXhCLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosQ0FESjtBQU1ILENBUkQiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L1lvdXR1YmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMaXN0ID0gKHtkYXRhfSkgPT4ge1xuICAgIGNvbnN0IGdldExpc3QgPSBsaXN0ID0+IGxpc3QubWFwKGl0ZW0gPT4gPGxpIGtleT17aXRlbS52aWRlb0lkfT57aXRlbS52aWRlb0lkfTwvbGk+KVxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxvbD4ge2dldExpc3QoZGF0YSkgfSBcbiAgICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgVmlkZW8gPSAoe2RhdGF9KSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YS50aXRsZSk7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPntkYXRhLnRpdGxlLnJ1bnNbMF0udGV4dH08L2gxPlxuICAgICAgICAgICAgPGgyPlZpZGVvSWQ8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5leHBvcnQgeyBMaXN0LCBWaWRlbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/component/Youtube.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });
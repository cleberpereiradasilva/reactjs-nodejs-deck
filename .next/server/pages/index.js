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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Video */ \"./src/components/Video.js\");\nvar _jsxFileName = \"/home/noct/Trabalho/my-git/reactjs-nodejs-deck/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Home() {\n  return __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, \"Create Next App...\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  })), __jsx(\"main\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }), __jsx(_src_components_Video__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    content: \"foi\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }), __jsx(\"footer\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, \"Powered by\", ' ', __jsx(\"img\", {\n    src: \"/vercel.svg\",\n    alt: \"Vercel Logo\",\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwiZm9vdGVyIiwibG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixTQUNFO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixFQUVFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBTUU7QUFBTSxhQUFTLEVBQUVELDhEQUFNLENBQUNFLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQVNJLE1BQUMsNkRBQUQ7QUFBTyxXQUFPLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosRUFVRTtBQUFRLGFBQVMsRUFBRUYsOERBQU0sQ0FBQ0csTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLHdHQURQO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxPQUFHLEVBQUMscUJBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFLYSxHQUxiLEVBTUU7QUFBSyxPQUFHLEVBQUMsYUFBVDtBQUF1QixPQUFHLEVBQUMsYUFBM0I7QUFBeUMsYUFBUyxFQUFFSCw4REFBTSxDQUFDSSxJQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERixDQVZGLENBREY7QUF1QkQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBWaWRlbyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9WaWRlbydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHsgICAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHAuLi48L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuXG4gICAgICA8L21haW4+XG4gICAgICAgIDxWaWRlbyBjb250ZW50PSdmb2knLz5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieXsnICd9XG4gICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./src/components/Video.js":
/*!*********************************!*\
  !*** ./src/components/Video.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _service_connector_youtube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/connector/youtube */ \"./src/service/connector/youtube.ts\");\nvar _jsxFileName = \"/home/noct/Trabalho/my-git/reactjs-nodejs-deck/src/components/Video.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Video = ({\n  content\n}) => {\n  //const [videos, setVideos] = useState([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(async () => {\n    const data = await Object(_service_connector_youtube__WEBPACK_IMPORTED_MODULE_1__[\"GetDataChannel\"])('spacex');\n    console.log(data);\n  });\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 12\n    }\n  }, content, \"**\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WaWRlby5qcz9hNjM1Il0sIm5hbWVzIjpbIlZpZGVvIiwiY29udGVudCIsInVzZUVmZmVjdCIsImRhdGEiLCJHZXREYXRhQ2hhbm5lbCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsTUFBTUEsS0FBSyxHQUFJLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWU7QUFDMUI7QUFDQUMseURBQVMsQ0FBQyxZQUFZO0FBQ25CLFVBQU1DLElBQUksR0FBRyxNQUFNQyxpRkFBYyxDQUFDLFFBQUQsQ0FBakM7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDRixHQUhRLENBQVQ7QUFLQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSEYsT0FERyxPQUFQO0FBR0gsQ0FWRDs7QUFZZUQsb0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9WaWRlby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2V0RGF0YUNoYW5uZWwgfSBmcm9tIFwiLi4vc2VydmljZS9jb25uZWN0b3IveW91dHViZVwiXG5cblxuY29uc3QgVmlkZW8gPSAgKHtjb250ZW50fSkgPT4ge1xuICAgIC8vY29uc3QgW3ZpZGVvcywgc2V0VmlkZW9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBHZXREYXRhQ2hhbm5lbCgnc3BhY2V4JylcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIDxkaXY+e1xuICAgICAgICBjb250ZW50XG4gICAgfSoqPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Video.js\n");

/***/ }),

/***/ "./src/service/connector/youtube.ts":
/*!******************************************!*\
  !*** ./src/service/connector/youtube.ts ***!
  \******************************************/
/*! exports provided: GetDataChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetDataChannel\", function() { return GetDataChannel; });\nconst fetch = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n\nconst _getChannelJson = async channel => {\n  const url = `https://www.youtube.com/c/${channel}/videos`;\n\n  try {\n    const response = await fetch(url);\n    const content = await response.text();\n    const preJson = content.split(\"window[\\\"ytInitialData\\\"] = \")[1].split(\";\")[0];\n    const json = JSON.parse(preJson);\n    return json.contents.twoColumnBrowseResultsRenderer.tabs;\n  } catch (error) {\n    console.log(error);\n  }\n};\n\nconst _tabsConvertToGridRenderer = tabs => tabs && tabs.filter(tab => tab.tabRenderer && tab.tabRenderer.content)[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].gridRenderer.items;\n\nconst getVideo = gridVideoRenderer => ({\n  \"videoId\": gridVideoRenderer.videoId,\n  \"thumbnail\": gridVideoRenderer.thumbnail.thumbnails,\n  \"title\": gridVideoRenderer.title.simpleText,\n  \"publishedTimeText\": gridVideoRenderer.publishedTimeText.simpleText,\n  \"viewCountText\": gridVideoRenderer.viewCountText.simpleText\n});\n\nconst GetDataChannel = async channel => {\n  const tabs = await _getChannelJson(channel);\n  const items = await _tabsConvertToGridRenderer(tabs);\n  return items.reduce((acc, {\n    gridVideoRenderer\n  }) => {\n    return acc.concat([getVideo(gridVideoRenderer)]);\n  }, []);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9jb25uZWN0b3IveW91dHViZS50cz9lMGRlIl0sIm5hbWVzIjpbImZldGNoIiwicmVxdWlyZSIsIl9nZXRDaGFubmVsSnNvbiIsImNoYW5uZWwiLCJ1cmwiLCJyZXNwb25zZSIsImNvbnRlbnQiLCJ0ZXh0IiwicHJlSnNvbiIsInNwbGl0IiwianNvbiIsIkpTT04iLCJwYXJzZSIsImNvbnRlbnRzIiwidHdvQ29sdW1uQnJvd3NlUmVzdWx0c1JlbmRlcmVyIiwidGFicyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIl90YWJzQ29udmVydFRvR3JpZFJlbmRlcmVyIiwiZmlsdGVyIiwidGFiIiwidGFiUmVuZGVyZXIiLCJzZWN0aW9uTGlzdFJlbmRlcmVyIiwiaXRlbVNlY3Rpb25SZW5kZXJlciIsImdyaWRSZW5kZXJlciIsIml0ZW1zIiwiZ2V0VmlkZW8iLCJncmlkVmlkZW9SZW5kZXJlciIsInZpZGVvSWQiLCJ0aHVtYm5haWwiLCJ0aHVtYm5haWxzIiwidGl0bGUiLCJzaW1wbGVUZXh0IiwicHVibGlzaGVkVGltZVRleHQiLCJ2aWV3Q291bnRUZXh0IiwiR2V0RGF0YUNoYW5uZWwiLCJyZWR1Y2UiLCJhY2MiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsOEJBQUQsQ0FBckI7O0FBRUEsTUFBTUMsZUFBZSxHQUFHLE1BQU1DLE9BQU4sSUFBaUI7QUFDeEMsUUFBTUMsR0FBRyxHQUFJLDZCQUE0QkQsT0FBUSxTQUFqRDs7QUFDQyxNQUFJO0FBQ0UsVUFBTUUsUUFBUSxHQUFHLE1BQU1MLEtBQUssQ0FBQ0ksR0FBRCxDQUE1QjtBQUNBLFVBQU1FLE9BQU8sR0FBRyxNQUFNRCxRQUFRLENBQUNFLElBQVQsRUFBdEI7QUFDQSxVQUFNQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0csS0FBUixDQUFjLDhCQUFkLEVBQThDLENBQTlDLEVBQWlEQSxLQUFqRCxDQUF1RCxHQUF2RCxFQUE0RCxDQUE1RCxDQUFoQjtBQUNBLFVBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLE9BQVgsQ0FBYjtBQUNBLFdBQU9FLElBQUksQ0FBQ0csUUFBTCxDQUFjQyw4QkFBZCxDQUE2Q0MsSUFBcEQ7QUFDTCxHQU5ELENBTUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFDRixDQVhEOztBQWFBLE1BQU1HLDBCQUEwQixHQUFHSixJQUFJLElBQUlBLElBQUksSUFBSUEsSUFBSSxDQUFDSyxNQUFMLENBQVlDLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxXQUFKLElBQW1CRCxHQUFHLENBQUNDLFdBQUosQ0FBZ0JoQixPQUF0RCxFQUErRCxDQUEvRCxFQUN0Q2dCLFdBRHNDLENBRXRDaEIsT0FGc0MsQ0FHdENpQixtQkFIc0MsQ0FJdENWLFFBSnNDLENBSTdCLENBSjZCLEVBS3RDVyxtQkFMc0MsQ0FNdENYLFFBTnNDLENBTTdCLENBTjZCLEVBT3RDWSxZQVBzQyxDQVF0Q0MsS0FSYjs7QUFVQSxNQUFNQyxRQUFRLEdBQUdDLGlCQUFpQixLQUFLO0FBQzdCLGFBQVlBLGlCQUFpQixDQUFDQyxPQUREO0FBRTdCLGVBQWNELGlCQUFpQixDQUFDRSxTQUFsQixDQUE0QkMsVUFGYjtBQUc3QixXQUFVSCxpQkFBaUIsQ0FBQ0ksS0FBbEIsQ0FBd0JDLFVBSEw7QUFJN0IsdUJBQXNCTCxpQkFBaUIsQ0FBQ00saUJBQWxCLENBQW9DRCxVQUo3QjtBQUs3QixtQkFBa0JMLGlCQUFpQixDQUFDTyxhQUFsQixDQUFnQ0Y7QUFMckIsQ0FBTCxDQUFsQzs7QUFTQSxNQUFNRyxjQUFjLEdBQUcsTUFBTWpDLE9BQU4sSUFBaUI7QUFDdEMsUUFBTVksSUFBSSxHQUFHLE1BQU1iLGVBQWUsQ0FBQ0MsT0FBRCxDQUFsQztBQUNBLFFBQU11QixLQUFLLEdBQUcsTUFBTVAsMEJBQTBCLENBQUNKLElBQUQsQ0FBOUM7QUFDQSxTQUFPVyxLQUFLLENBQUNXLE1BQU4sQ0FBYyxDQUFDQyxHQUFELEVBQU07QUFBRVY7QUFBRixHQUFOLEtBQWdDO0FBQ2pELFdBQU9VLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLENBQUNaLFFBQVEsQ0FBQ0MsaUJBQUQsQ0FBVCxDQUFYLENBQVA7QUFDRixHQUZLLEVBRUosRUFGSSxDQUFQO0FBSUQsQ0FQRCIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlL2Nvbm5lY3Rvci95b3V0dWJlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZmV0Y2ggPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTtcblxuY29uc3QgX2dldENoYW5uZWxKc29uID0gYXN5bmMgY2hhbm5lbCA9PiB7XG4gY29uc3QgdXJsID0gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2MvJHtjaGFubmVsfS92aWRlb3NgXG4gIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKVxuICAgICAgICBjb25zdCBwcmVKc29uID0gY29udGVudC5zcGxpdChcIndpbmRvd1tcXFwieXRJbml0aWFsRGF0YVxcXCJdID0gXCIpWzFdLnNwbGl0KFwiO1wiKVswXVxuICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShwcmVKc29uKTsgICAgICAgIFxuICAgICAgICByZXR1cm4ganNvbi5jb250ZW50cy50d29Db2x1bW5Ccm93c2VSZXN1bHRzUmVuZGVyZXIudGFicztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn07XG5cbmNvbnN0IF90YWJzQ29udmVydFRvR3JpZFJlbmRlcmVyID0gdGFicyA9PiB0YWJzICYmIHRhYnMuZmlsdGVyKHRhYiA9PiB0YWIudGFiUmVuZGVyZXIgJiYgdGFiLnRhYlJlbmRlcmVyLmNvbnRlbnQpWzBdXG4gICAgICAgICAgICAudGFiUmVuZGVyZXJcbiAgICAgICAgICAgIC5jb250ZW50XG4gICAgICAgICAgICAuc2VjdGlvbkxpc3RSZW5kZXJlclxuICAgICAgICAgICAgLmNvbnRlbnRzWzBdXG4gICAgICAgICAgICAuaXRlbVNlY3Rpb25SZW5kZXJlclxuICAgICAgICAgICAgLmNvbnRlbnRzWzBdXG4gICAgICAgICAgICAuZ3JpZFJlbmRlcmVyXG4gICAgICAgICAgICAuaXRlbXM7XG5cbmNvbnN0IGdldFZpZGVvID0gZ3JpZFZpZGVvUmVuZGVyZXIgPT4gKHtcbiAgICAgICAgICBcInZpZGVvSWRcIiA6IGdyaWRWaWRlb1JlbmRlcmVyLnZpZGVvSWQsXG4gICAgICAgICAgXCJ0aHVtYm5haWxcIiA6IGdyaWRWaWRlb1JlbmRlcmVyLnRodW1ibmFpbC50aHVtYm5haWxzLFxuICAgICAgICAgIFwidGl0bGVcIiA6IGdyaWRWaWRlb1JlbmRlcmVyLnRpdGxlLnNpbXBsZVRleHQsXG4gICAgICAgICAgXCJwdWJsaXNoZWRUaW1lVGV4dFwiIDogZ3JpZFZpZGVvUmVuZGVyZXIucHVibGlzaGVkVGltZVRleHQuc2ltcGxlVGV4dCxcbiAgICAgICAgICBcInZpZXdDb3VudFRleHRcIiA6IGdyaWRWaWRlb1JlbmRlcmVyLnZpZXdDb3VudFRleHQuc2ltcGxlVGV4dFxuICAgICAgfSk7XG5cblxuY29uc3QgR2V0RGF0YUNoYW5uZWwgPSBhc3luYyBjaGFubmVsID0+IHtcbiAgY29uc3QgdGFicyA9IGF3YWl0IF9nZXRDaGFubmVsSnNvbihjaGFubmVsKTtcbiAgY29uc3QgaXRlbXMgPSBhd2FpdCBfdGFic0NvbnZlcnRUb0dyaWRSZW5kZXJlcih0YWJzKTtcbiAgcmV0dXJuIGl0ZW1zLnJlZHVjZSggKGFjYywgeyBncmlkVmlkZW9SZW5kZXJlciB9KSA9PiB7XG4gICAgICByZXR1cm4gYWNjLmNvbmNhdChbZ2V0VmlkZW8oZ3JpZFZpZGVvUmVuZGVyZXIpXSlcbiAgIH0sW10pXG5cbn1cblxuZXhwb3J0IHsgR2V0RGF0YUNoYW5uZWwgfTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/service/connector/youtube.ts\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzRmYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWZldGNoXCI/NWNkNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub2RlLWZldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///node-fetch\n");

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
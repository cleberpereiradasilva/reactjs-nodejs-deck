module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/youtube/video/[videoId].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/youtube/video/[videoId].js":
/*!**********************************************!*\
  !*** ./pages/api/youtube/video/[videoId].js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_services_youtube_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/services/youtube/facade */ \"./src/services/youtube/facade/index.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    query: {\n      videoId\n    }\n  } = req;\n  const response = await Object(_src_services_youtube_facade__WEBPACK_IMPORTED_MODULE_0__[\"GetVideo\"])(videoId);\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'application/json');\n  res.json(response);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkveW91dHViZS92aWRlby9bdmlkZW9JZF0uanM/ODMwOSJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJxdWVyeSIsInZpZGVvSWQiLCJyZXNwb25zZSIsIkdldFZpZGVvIiwic3RhdHVzQ29kZSIsInNldEhlYWRlciIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVlLHNFQUFPQSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsUUFBTTtBQUNGQyxTQUFLLEVBQUc7QUFBRUM7QUFBRjtBQUROLE1BRUZILEdBRko7QUFHQSxRQUFNSSxRQUFRLEdBQUcsTUFBTUMsNkVBQVEsQ0FBQ0YsT0FBRCxDQUEvQjtBQUNBRixLQUFHLENBQUNLLFVBQUosR0FBaUIsR0FBakI7QUFDQUwsS0FBRyxDQUFDTSxTQUFKLENBQWMsY0FBZCxFQUE4QixrQkFBOUI7QUFDQU4sS0FBRyxDQUFDTyxJQUFKLENBQVNKLFFBQVQ7QUFDRCxDQVJEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3lvdXR1YmUvdmlkZW8vW3ZpZGVvSWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0VmlkZW99IGZyb20gJy4uLy4uLy4uLy4uL3NyYy9zZXJ2aWNlcy95b3V0dWJlL2ZhY2FkZSdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICAgIHF1ZXJ5IDogeyB2aWRlb0lkIH0sXG4gIH0gPSByZXE7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgR2V0VmlkZW8odmlkZW9JZClcbiAgcmVzLnN0YXR1c0NvZGUgPSAyMDBcbiAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICByZXMuanNvbihyZXNwb25zZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/youtube/video/[videoId].js\n");

/***/ }),

/***/ "./src/services/shared/index.ts":
/*!**************************************!*\
  !*** ./src/services/shared/index.ts ***!
  \**************************************/
/*! exports provided: getFromUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/services/shared/util.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getFromUrl\", function() { return _util__WEBPACK_IMPORTED_MODULE_0__[\"getFromUrl\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc2hhcmVkL2luZGV4LnRzPzBjYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9zaGFyZWQvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRGcm9tVXJsIH0gZnJvbSAnLi91dGlsJ1xuXG5cbmV4cG9ydCB7IGdldEZyb21VcmwgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/shared/index.ts\n");

/***/ }),

/***/ "./src/services/shared/util.ts":
/*!*************************************!*\
  !*** ./src/services/shared/util.ts ***!
  \*************************************/
/*! exports provided: getFromUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFromUrl\", function() { return getFromUrl; });\nconst getFromUrl = async (url, headers = {}) => {\n  try {\n    const response = await fetch(url, headers);\n    const content = await response.text();\n    return content;\n  } catch (error) {\n    console.log(error);\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc2hhcmVkL3V0aWwudHM/YjJhMiJdLCJuYW1lcyI6WyJnZXRGcm9tVXJsIiwidXJsIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZmV0Y2giLCJjb250ZW50IiwidGV4dCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBLE1BQU1BLFVBQVUsR0FBRyxPQUFPQyxHQUFQLEVBQW1CQyxPQUFPLEdBQUcsRUFBN0IsS0FBb0M7QUFDckQsTUFBSTtBQUNBLFVBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNILEdBQUQsRUFBTUMsT0FBTixDQUE1QjtBQUNBLFVBQU1HLE9BQU8sR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBdEI7QUFDQSxXQUFPRCxPQUFQO0FBQ0gsR0FKRCxDQUlFLE9BQU9FLEtBQVAsRUFBYztBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNEO0FBQ0YsQ0FSRCIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9zaGFyZWQvdXRpbC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZ2V0RnJvbVVybCA9IGFzeW5jICh1cmw6c3RyaW5nLCBoZWFkZXJzID0ge30pID0+IHtcbiAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBoZWFkZXJzKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZXNwb25zZS50ZXh0KClcbiAgICAgIHJldHVybiBjb250ZW50OyBcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuXG5cblxuZXhwb3J0IHsgZ2V0RnJvbVVybCB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/shared/util.ts\n");

/***/ }),

/***/ "./src/services/youtube/connector/youtube.connector.ts":
/*!*************************************************************!*\
  !*** ./src/services/youtube/connector/youtube.connector.ts ***!
  \*************************************************************/
/*! exports provided: GetChannelText, GetVideoText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetChannelText\", function() { return GetChannelText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetVideoText\", function() { return GetVideoText; });\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ \"./src/services/shared/index.ts\");\n\n\nconst urlChannel = channel => `https://www.youtube.com/c/${channel}/videos`;\n\nconst urlVideo = videoId => `https://www.youtube.com/watch?v=${videoId}`;\n\nconst GetChannelText = async channel => {\n  const url = urlChannel(channel);\n  return await Object(_shared__WEBPACK_IMPORTED_MODULE_0__[\"getFromUrl\"])(url);\n};\n\nconst GetVideoText = async videoId => {\n  const url = urlVideo(videoId);\n  return await Object(_shared__WEBPACK_IMPORTED_MODULE_0__[\"getFromUrl\"])(url);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMveW91dHViZS9jb25uZWN0b3IveW91dHViZS5jb25uZWN0b3IudHM/NDUzZSJdLCJuYW1lcyI6WyJ1cmxDaGFubmVsIiwiY2hhbm5lbCIsInVybFZpZGVvIiwidmlkZW9JZCIsIkdldENoYW5uZWxUZXh0IiwidXJsIiwiZ2V0RnJvbVVybCIsIkdldFZpZGVvVGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUlDLE9BQUQsSUFBc0IsNkJBQTRCQSxPQUFRLFNBQTdFOztBQUNBLE1BQU1DLFFBQVEsR0FBSUMsT0FBRCxJQUFzQixtQ0FBa0NBLE9BQVEsRUFBakY7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLE1BQU9ILE9BQVAsSUFBNEI7QUFDL0MsUUFBTUksR0FBRyxHQUFHTCxVQUFVLENBQUNDLE9BQUQsQ0FBdEI7QUFDQSxTQUFPLE1BQU1LLDBEQUFVLENBQUNELEdBQUQsQ0FBdkI7QUFDSCxDQUhEOztBQUtBLE1BQU1FLFlBQVksR0FBRyxNQUFPSixPQUFQLElBQTRCO0FBQzdDLFFBQU1FLEdBQUcsR0FBR0gsUUFBUSxDQUFDQyxPQUFELENBQXBCO0FBQ0EsU0FBTyxNQUFNRywwREFBVSxDQUFDRCxHQUFELENBQXZCO0FBQ0gsQ0FIRCIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy95b3V0dWJlL2Nvbm5lY3Rvci95b3V0dWJlLmNvbm5lY3Rvci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0RnJvbVVybH0gZnJvbSBcIi4uLy4uL3NoYXJlZFwiO1xuXG5jb25zdCB1cmxDaGFubmVsID0gKGNoYW5uZWw6IHN0cmluZykgPT4gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2MvJHtjaGFubmVsfS92aWRlb3NgXG5jb25zdCB1cmxWaWRlbyA9ICh2aWRlb0lkOiBzdHJpbmcpID0+IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PSR7dmlkZW9JZH1gXG5cbmNvbnN0IEdldENoYW5uZWxUZXh0ID0gYXN5bmMgKGNoYW5uZWwgOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB1cmwgPSB1cmxDaGFubmVsKGNoYW5uZWwpO1xuICAgIHJldHVybiBhd2FpdCBnZXRGcm9tVXJsKHVybCk7XG59O1xuXG5jb25zdCBHZXRWaWRlb1RleHQgPSBhc3luYyAodmlkZW9JZCA6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHVybCA9IHVybFZpZGVvKHZpZGVvSWQpO1xuICAgIHJldHVybiBhd2FpdCBnZXRGcm9tVXJsKHVybCk7XG59O1xuXG5leHBvcnQgeyBHZXRDaGFubmVsVGV4dCwgR2V0VmlkZW9UZXh0fVxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/youtube/connector/youtube.connector.ts\n");

/***/ }),

/***/ "./src/services/youtube/facade/index.ts":
/*!**********************************************!*\
  !*** ./src/services/youtube/facade/index.ts ***!
  \**********************************************/
/*! exports provided: GetDataChannel, GetVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _youtube_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./youtube.facade */ \"./src/services/youtube/facade/youtube.facade.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetDataChannel\", function() { return _youtube_facade__WEBPACK_IMPORTED_MODULE_0__[\"GetDataChannel\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetVideo\", function() { return _youtube_facade__WEBPACK_IMPORTED_MODULE_0__[\"GetVideo\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMveW91dHViZS9mYWNhZGUvaW5kZXgudHM/YzMwOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy95b3V0dWJlL2ZhY2FkZS9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldERhdGFDaGFubmVsLCBHZXRWaWRlbyB9IGZyb20gJy4veW91dHViZS5mYWNhZGUnO1xuXG5leHBvcnQgeyBHZXREYXRhQ2hhbm5lbCwgR2V0VmlkZW8gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/youtube/facade/index.ts\n");

/***/ }),

/***/ "./src/services/youtube/facade/youtube.facade.ts":
/*!*******************************************************!*\
  !*** ./src/services/youtube/facade/youtube.facade.ts ***!
  \*******************************************************/
/*! exports provided: GetDataChannel, GetVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetDataChannel\", function() { return GetDataChannel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetVideo\", function() { return GetVideo; });\n/* harmony import */ var _connector_youtube_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../connector/youtube.connector */ \"./src/services/youtube/connector/youtube.connector.ts\");\n\n\nconst _tabsConvertToGridRenderer = tabs => tabs && tabs.filter(tab => tab.tabRenderer && tab.tabRenderer.content)[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].gridRenderer.items;\n\nconst GetVideo = async videoId => {\n  const videoText = await Object(_connector_youtube_connector__WEBPACK_IMPORTED_MODULE_0__[\"GetVideoText\"])(videoId);\n  const preJson = videoText.split(\"window[\\\"ytInitialPlayerResponse\\\"] = \")[1].split(\"if (window.ytcsi)\")[0].trim().slice(0, -1);\n  const json = await JSON.parse(preJson);\n  const gridVideoRenderer = json.videoDetails;\n  const publishedTimeText = json.microformat.publishDate;\n  const thumbnail = gridVideoRenderer.thumbnail.thumbnails.map(image => image.url);\n  return {\n    \"videoId\": gridVideoRenderer.videoId,\n    thumbnail,\n    publishedTimeText,\n    \"title\": gridVideoRenderer.title,\n    \"description\": \"\",\n    \"viewCountText\": gridVideoRenderer.viewCount\n  };\n};\n\nconst GetDataChannel = async channel => {\n  const channelText = await Object(_connector_youtube_connector__WEBPACK_IMPORTED_MODULE_0__[\"GetChannelText\"])(channel);\n  const preJson = channelText.split(\"window[\\\"ytInitialData\\\"] = \")[1].split(\";\")[0];\n  const json = JSON.parse(preJson);\n  const tabs = json.contents.twoColumnBrowseResultsRenderer.tabs;\n  const items = await _tabsConvertToGridRenderer(tabs);\n  return Promise.all(items.map(async ({\n    gridVideoRenderer\n  }) => await GetVideo(gridVideoRenderer.videoId)));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMveW91dHViZS9mYWNhZGUveW91dHViZS5mYWNhZGUudHM/ZDY3OCJdLCJuYW1lcyI6WyJfdGFic0NvbnZlcnRUb0dyaWRSZW5kZXJlciIsInRhYnMiLCJmaWx0ZXIiLCJ0YWIiLCJ0YWJSZW5kZXJlciIsImNvbnRlbnQiLCJzZWN0aW9uTGlzdFJlbmRlcmVyIiwiY29udGVudHMiLCJpdGVtU2VjdGlvblJlbmRlcmVyIiwiZ3JpZFJlbmRlcmVyIiwiaXRlbXMiLCJHZXRWaWRlbyIsInZpZGVvSWQiLCJ2aWRlb1RleHQiLCJHZXRWaWRlb1RleHQiLCJwcmVKc29uIiwic3BsaXQiLCJ0cmltIiwic2xpY2UiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwiZ3JpZFZpZGVvUmVuZGVyZXIiLCJ2aWRlb0RldGFpbHMiLCJwdWJsaXNoZWRUaW1lVGV4dCIsIm1pY3JvZm9ybWF0IiwicHVibGlzaERhdGUiLCJ0aHVtYm5haWwiLCJ0aHVtYm5haWxzIiwibWFwIiwiaW1hZ2UiLCJ1cmwiLCJ0aXRsZSIsInZpZXdDb3VudCIsIkdldERhdGFDaGFubmVsIiwiY2hhbm5lbCIsImNoYW5uZWxUZXh0IiwiR2V0Q2hhbm5lbFRleHQiLCJ0d29Db2x1bW5Ccm93c2VSZXN1bHRzUmVuZGVyZXIiLCJQcm9taXNlIiwiYWxsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1BLDBCQUEwQixHQUFHQyxJQUFJLElBQUlBLElBQUksSUFBSUEsSUFBSSxDQUFDQyxNQUFMLENBQ3ZDQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsV0FBSixJQUFtQkQsR0FBRyxDQUFDQyxXQUFKLENBQWdCQyxPQURILEVBRXJDLENBRnFDLEVBR3RDRCxXQUhzQyxDQUl0Q0MsT0FKc0MsQ0FLdENDLG1CQUxzQyxDQU10Q0MsUUFOc0MsQ0FNN0IsQ0FONkIsRUFPdENDLG1CQVBzQyxDQVF0Q0QsUUFSc0MsQ0FRN0IsQ0FSNkIsRUFTdENFLFlBVHNDLENBVXRDQyxLQVZiOztBQVlBLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxPQUFOLElBQWlCO0FBQzlCLFFBQU1DLFNBQVMsR0FBRyxNQUFNQyxpRkFBWSxDQUFDRixPQUFELENBQXBDO0FBQ0EsUUFBTUcsT0FBTyxHQUFHRixTQUFTLENBQUNHLEtBQVYsQ0FBZ0Isd0NBQWhCLEVBQTBELENBQTFELEVBQ0hBLEtBREcsQ0FDRyxtQkFESCxFQUN3QixDQUR4QixFQUVIQyxJQUZHLEdBR0hDLEtBSEcsQ0FHRyxDQUhILEVBR00sQ0FBQyxDQUhQLENBQWhCO0FBSUEsUUFBTUMsSUFBSSxHQUFHLE1BQU1DLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixPQUFYLENBQW5CO0FBQ0EsUUFBTU8saUJBQWlCLEdBQUdILElBQUksQ0FBQ0ksWUFBL0I7QUFDQSxRQUFNQyxpQkFBaUIsR0FBR0wsSUFBSSxDQUFDTSxXQUFMLENBQWlCQyxXQUEzQztBQUNBLFFBQU1DLFNBQVMsR0FBR0wsaUJBQWlCLENBQ2xCSyxTQURDLENBRURDLFVBRkMsQ0FHREMsR0FIQyxDQUdHQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsR0FIbEIsQ0FBbEI7QUFJQSxTQUFPO0FBQ0MsZUFBWVQsaUJBQWlCLENBQUNWLE9BRC9CO0FBRUNlLGFBRkQ7QUFHQ0gscUJBSEQ7QUFJQyxhQUFVRixpQkFBaUIsQ0FBQ1UsS0FKN0I7QUFLQyxtQkFBZSxFQUxoQjtBQU1DLHFCQUFrQlYsaUJBQWlCLENBQUNXO0FBTnJDLEdBQVA7QUFRSCxDQXJCRDs7QUF3QkEsTUFBTUMsY0FBYyxHQUFHLE1BQU1DLE9BQU4sSUFBaUI7QUFDdEMsUUFBTUMsV0FBVyxHQUFHLE1BQU1DLG1GQUFjLENBQUNGLE9BQUQsQ0FBeEM7QUFDQSxRQUFNcEIsT0FBTyxHQUFHcUIsV0FBVyxDQUFDcEIsS0FBWixDQUFrQiw4QkFBbEIsRUFBa0QsQ0FBbEQsRUFBcURBLEtBQXJELENBQTJELEdBQTNELEVBQWdFLENBQWhFLENBQWhCO0FBQ0EsUUFBTUcsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sT0FBWCxDQUFiO0FBQ0EsUUFBTWQsSUFBSSxHQUFHa0IsSUFBSSxDQUFDWixRQUFMLENBQWMrQiw4QkFBZCxDQUE2Q3JDLElBQTFEO0FBQ0EsUUFBTVMsS0FBSyxHQUFHLE1BQU1WLDBCQUEwQixDQUFDQyxJQUFELENBQTlDO0FBQ0EsU0FBT3NDLE9BQU8sQ0FBQ0MsR0FBUixDQUNEOUIsS0FBSyxDQUFDbUIsR0FBTixDQUFVLE9BQU87QUFBRVA7QUFBRixHQUFQLEtBQWlDLE1BQU1YLFFBQVEsQ0FBQ1csaUJBQWlCLENBQUNWLE9BQW5CLENBQXpELENBREMsQ0FBUDtBQUlELENBVkQiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMveW91dHViZS9mYWNhZGUveW91dHViZS5mYWNhZGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dldENoYW5uZWxUZXh0LCBHZXRWaWRlb1RleHQgfSBmcm9tIFwiLi4vY29ubmVjdG9yL3lvdXR1YmUuY29ubmVjdG9yXCI7XG5cbmNvbnN0IF90YWJzQ29udmVydFRvR3JpZFJlbmRlcmVyID0gdGFicyA9PiB0YWJzICYmIHRhYnMuZmlsdGVyKFxuICAgICAgICAgICAgdGFiID0+IHRhYi50YWJSZW5kZXJlciAmJiB0YWIudGFiUmVuZGVyZXIuY29udGVudFxuICAgICAgICAgICAgKVswXVxuICAgICAgICAgICAgLnRhYlJlbmRlcmVyXG4gICAgICAgICAgICAuY29udGVudFxuICAgICAgICAgICAgLnNlY3Rpb25MaXN0UmVuZGVyZXJcbiAgICAgICAgICAgIC5jb250ZW50c1swXVxuICAgICAgICAgICAgLml0ZW1TZWN0aW9uUmVuZGVyZXJcbiAgICAgICAgICAgIC5jb250ZW50c1swXVxuICAgICAgICAgICAgLmdyaWRSZW5kZXJlclxuICAgICAgICAgICAgLml0ZW1zO1xuXG5jb25zdCBHZXRWaWRlbyA9IGFzeW5jIHZpZGVvSWQgPT4ge1xuICAgIGNvbnN0IHZpZGVvVGV4dCA9IGF3YWl0IEdldFZpZGVvVGV4dCh2aWRlb0lkKTtcbiAgICBjb25zdCBwcmVKc29uID0gdmlkZW9UZXh0LnNwbGl0KFwid2luZG93W1xcXCJ5dEluaXRpYWxQbGF5ZXJSZXNwb25zZVxcXCJdID0gXCIpWzFdXG4gICAgICAgICAgICAgICAgLnNwbGl0KFwiaWYgKHdpbmRvdy55dGNzaSlcIilbMF1cbiAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIC0xKVxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBKU09OLnBhcnNlKHByZUpzb24pOyAgICAgICAgXG4gICAgY29uc3QgZ3JpZFZpZGVvUmVuZGVyZXIgPSBqc29uLnZpZGVvRGV0YWlsc1xuICAgIGNvbnN0IHB1Ymxpc2hlZFRpbWVUZXh0ID0ganNvbi5taWNyb2Zvcm1hdC5wdWJsaXNoRGF0ZVxuICAgIGNvbnN0IHRodW1ibmFpbCA9IGdyaWRWaWRlb1JlbmRlcmVyXG4gICAgICAgICAgICAgICAgICAgIC50aHVtYm5haWxcbiAgICAgICAgICAgICAgICAgICAgLnRodW1ibmFpbHNcbiAgICAgICAgICAgICAgICAgICAgLm1hcChpbWFnZSA9PiBpbWFnZS51cmwpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFwidmlkZW9JZFwiIDogZ3JpZFZpZGVvUmVuZGVyZXIudmlkZW9JZCxcbiAgICAgICAgICAgIHRodW1ibmFpbCxcbiAgICAgICAgICAgIHB1Ymxpc2hlZFRpbWVUZXh0LFxuICAgICAgICAgICAgXCJ0aXRsZVwiIDogZ3JpZFZpZGVvUmVuZGVyZXIudGl0bGUsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCIgOlwiXCIsXG4gICAgICAgICAgICBcInZpZXdDb3VudFRleHRcIiA6IGdyaWRWaWRlb1JlbmRlcmVyLnZpZXdDb3VudFxuICAgICAgfTtcbn1cblxuXG5jb25zdCBHZXREYXRhQ2hhbm5lbCA9IGFzeW5jIGNoYW5uZWwgPT4ge1xuICBjb25zdCBjaGFubmVsVGV4dCA9IGF3YWl0IEdldENoYW5uZWxUZXh0KGNoYW5uZWwpO1xuICBjb25zdCBwcmVKc29uID0gY2hhbm5lbFRleHQuc3BsaXQoXCJ3aW5kb3dbXFxcInl0SW5pdGlhbERhdGFcXFwiXSA9IFwiKVsxXS5zcGxpdChcIjtcIilbMF1cbiAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocHJlSnNvbik7ICAgICAgICBcbiAgY29uc3QgdGFicyA9IGpzb24uY29udGVudHMudHdvQ29sdW1uQnJvd3NlUmVzdWx0c1JlbmRlcmVyLnRhYnM7XG4gIGNvbnN0IGl0ZW1zID0gYXdhaXQgX3RhYnNDb252ZXJ0VG9HcmlkUmVuZGVyZXIodGFicyk7XG4gIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgICAgaXRlbXMubWFwKGFzeW5jICh7IGdyaWRWaWRlb1JlbmRlcmVyIH0pID0+IGF3YWl0IEdldFZpZGVvKGdyaWRWaWRlb1JlbmRlcmVyLnZpZGVvSWQpKSAgICAgXG4gIClcblxufVxuZXhwb3J0IHsgR2V0RGF0YUNoYW5uZWwsIEdldFZpZGVvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/youtube/facade/youtube.facade.ts\n");

/***/ })

/******/ });
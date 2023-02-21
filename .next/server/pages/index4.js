"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index4";
exports.ids = ["pages/index4"];
exports.modules = {

/***/ "./src/pages/index4.js":
/*!*****************************!*\
  !*** ./src/pages/index4.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getAccessToken = async ()=>{\n    const response = await fetch(TOKEN_ENDPOINT, {\n        method: \"POST\",\n        headers: {\n            Authorization: `Basic ${basic}`,\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        },\n        body: querystring.stringify({\n            grant_type: \"refresh_token\",\n            refresh_token\n        })\n    });\n    return JSON.stringify(response.json());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAccessToken);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXg0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRDtBQUlsRCxNQUFNRyxpQkFBaUIsVUFBWTtJQUMvQixNQUFNQyxXQUFXLE1BQU1DLE1BQU1DLGdCQUFnQjtRQUMzQ0MsUUFBUTtRQUNSQyxTQUFTO1lBQ1BDLGVBQWUsQ0FBQyxNQUFNLEVBQUVDLE1BQU0sQ0FBQztZQUMvQixnQkFBZ0I7UUFDbEI7UUFDQUMsTUFBTUMsWUFBWUMsU0FBUyxDQUFDO1lBQzFCQyxZQUFZO1lBQ1pDO1FBQ0Y7SUFDRjtJQUVBLE9BQU9DLEtBQUtILFNBQVMsQ0FBQ1QsU0FBU2EsSUFBSTtBQUNyQztBQUdGLGlFQUFlZCxjQUFjQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeS1tYXRjaGVkLy4vc3JjL3BhZ2VzL2luZGV4NC5qcz9kNTEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuXG5cbmNvbnN0IGdldEFjY2Vzc1Rva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVE9LRU5fRU5EUE9JTlQsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtiYXNpY31gLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICB9LFxuICAgICAgYm9keTogcXVlcnlzdHJpbmcuc3RyaW5naWZ5KHtcbiAgICAgICAgZ3JhbnRfdHlwZTogJ3JlZnJlc2hfdG9rZW4nLFxuICAgICAgICByZWZyZXNoX3Rva2VuLFxuICAgICAgfSksXG4gICAgfSk7XG4gICBcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuanNvbigpKTtcbiAgfTtcblxuXG5leHBvcnQgZGVmYXVsdCBnZXRBY2Nlc3NUb2tlbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QWNjZXNzVG9rZW4iLCJyZXNwb25zZSIsImZldGNoIiwiVE9LRU5fRU5EUE9JTlQiLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJhc2ljIiwiYm9keSIsInF1ZXJ5c3RyaW5nIiwic3RyaW5naWZ5IiwiZ3JhbnRfdHlwZSIsInJlZnJlc2hfdG9rZW4iLCJKU09OIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index4.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index4.js"));
module.exports = __webpack_exports__;

})();
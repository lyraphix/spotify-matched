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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/ */ \"@mui/material/\");\n/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material___WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\n/* harmony import */ var firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore/lite */ \"firebase/firestore/lite\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_2__, firebase_analytics__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_2__, firebase_analytics__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n// import { Formik, field, form} from 'formik'\n// import Link from 'next/link';\n// Import the functions you need from the SDKs you need\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyAVw00OfAUktA4aI0Y98vHAiS-ITSp3v50\",\n    authDomain: \"spotifly-997dd.firebaseapp.com\",\n    projectId: \"spotifly-997dd\",\n    storageBucket: \"spotifly-997dd.appspot.com\",\n    messagingSenderId: \"869795366490\",\n    appId: \"1:869795366490:web:d8bcf837eb81da5168ba63\",\n    measurementId: \"G-LH0JWX82X5\"\n};\nfunction Home() {\n    function open({ link  }) {\n        return window.open(\"/posts/first-post\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_1__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_1__.CssBaseline, {}, void 0, false, {\n                fileName: \"/Users/VanessaWei/Desktop/spotify-matched-5/src/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_1__.Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_1__.AppBar, {\n                    position: \"fixed\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_1__.Toolbar, {\n                        sx: {\n                            height: 75,\n                            backgroundColor: \"background.default\",\n                            borderBottom: 0.1,\n                            borderColor: \"divider\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_1__.Typography, {\n                                variant: \"h2\",\n                                sx: {\n                                    flexGrow: 13\n                                },\n                                children: \"MATCHED\"\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/spotify-matched-5/src/pages/index.js\",\n                                lineNumber: 42,\n                                columnNumber: 26\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                variant: \"text\",\n                                size: \"medium\",\n                                sx: {\n                                    flexGrow: 1,\n                                    color: \"primary\"\n                                },\n                                href: \"/posts/first-post\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/spotify-matched-5/src/pages/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 26\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                variant: \"contained\",\n                                size: \"medium\",\n                                href: \"/posts/first-post\",\n                                children: \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/spotify-matched-5/src/pages/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 26\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/VanessaWei/Desktop/spotify-matched-5/src/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 19\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/VanessaWei/Desktop/spotify-matched-5/src/pages/index.js\",\n                    lineNumber: 37,\n                    columnNumber: 16\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/VanessaWei/Desktop/spotify-matched-5/src/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/VanessaWei/Desktop/spotify-matched-5/src/pages/index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBMEJNQTtBQXpCd0o7QUFHOUosOENBQThDO0FBQzlDLGdDQUFnQztBQUVoQyx1REFBdUQ7QUFDVjtBQUNLO0FBQzBCO0FBQzVFLDREQUE0RDtBQUM1RCxpRUFBaUU7QUFFakUsd0NBQXdDO0FBQ3hDLG1FQUFtRTtBQUNuRSxNQUFNa0IsaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztJQUNQQyxlQUFlO0FBQ2pCO0FBSWUsU0FBU0MsT0FBTztJQUM3QixTQUFTQyxLQUFLLEVBQUNDLEtBQUksRUFBQyxFQUFFO1FBQ3BCLE9BQU9DLE9BQU9GLElBQUksQ0FBQztJQUNyQjtJQUNBLHFCQUNFLDhEQUFDeEIscURBQVNBOzswQkFDUiw4REFBQ0MsdURBQVdBOzs7OzswQkFDWiw4REFBQ0UsK0NBQUdBOzBCQUNLLDRFQUFDTCxrREFBTUE7b0JBQUM2QixVQUFTOzhCQUNkLDRFQUFDNUIsbURBQU9BO3dCQUFDNkIsSUFBSTs0QkFBQ0MsUUFBUTs0QkFBSUMsaUJBQWdCOzRCQUFzQkMsY0FBYzs0QkFBS0MsYUFBYTt3QkFBUzs7MENBSWxHLDhEQUFDOUIsc0RBQVVBO2dDQUFDK0IsU0FBUTtnQ0FBS0wsSUFBSTtvQ0FBRU0sVUFBVTtnQ0FBRzswQ0FBRzs7Ozs7OzBDQUkvQyw4REFBQ3pCLGtEQUFNQTtnQ0FDRHdCLFNBQVE7Z0NBQ1JFLE1BQU87Z0NBQ1BQLElBQUk7b0NBQUVNLFVBQVU7b0NBQUdFLE9BQU07Z0NBQVM7Z0NBQ2xDQyxNQUFLOzBDQUNSOzs7Ozs7MENBR0gsOERBQUM1QixrREFBTUE7Z0NBQ0R3QixTQUFRO2dDQUNSRSxNQUFPO2dDQUNQRSxNQUFLOzBDQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5LW1hdGNoZWQvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnRlciB9IGZyb20gJ0BuZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHsgQXBwQmFyLCBUb29sYmFyLCBDb250YWluZXIsIENzc0Jhc2VsaW5lLCBUeXBvZ3JhcGh5LCBCb3gsIEdyaWQsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2xMYWJlbCwgQ2hlY2tib3gsIFRoZW1lUHJvdmlkZXIsIEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsL1wiO1xuXG5cbi8vIGltcG9ydCB7IEZvcm1paywgZmllbGQsIGZvcm19IGZyb20gJ2Zvcm1paydcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRBbmFseXRpY3MgfSBmcm9tIFwiZmlyZWJhc2UvYW5hbHl0aWNzXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGNvbGxlY3Rpb24sIGdldERvY3MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUvbGl0ZSc7XG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2Vcbi8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhdmFpbGFibGUtbGlicmFyaWVzXG5cbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5QVZ3MDBPZkFVa3RBNGFJMFk5OHZIQWlTLUlUU3AzdjUwXCIsXG4gIGF1dGhEb21haW46IFwic3BvdGlmbHktOTk3ZGQuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJzcG90aWZseS05OTdkZFwiLFxuICBzdG9yYWdlQnVja2V0OiBcInNwb3RpZmx5LTk5N2RkLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjg2OTc5NTM2NjQ5MFwiLFxuICBhcHBJZDogXCIxOjg2OTc5NTM2NjQ5MDp3ZWI6ZDhiY2Y4MzdlYjgxZGE1MTY4YmE2M1wiLFxuICBtZWFzdXJlbWVudElkOiBcIkctTEgwSldYODJYNVwiXG59O1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGZ1bmN0aW9uIG9wZW4oe2xpbmt9KSB7XG4gICAgcmV0dXJuIHdpbmRvdy5vcGVuKFwiL3Bvc3RzL2ZpcnN0LXBvc3RcIilcbiAgfVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgPlxuICAgICAgPENzc0Jhc2VsaW5lIC8+ICBcbiAgICAgIDxCb3ggPlxuICAgICAgICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCIgPlxuICAgICAgICAgICAgICAgICAgPFRvb2xiYXIgc3g9e3toZWlnaHQ6IDc1LCBiYWNrZ3JvdW5kQ29sb3I6XCJiYWNrZ3JvdW5kLmRlZmF1bHRcIiwgYm9yZGVyQm90dG9tOiAwLjEsIGJvcmRlckNvbG9yOiBcImRpdmlkZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMScgc3g9e3sgbWw6IDJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFNwb3RpZnlcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gyJyBzeD17eyBmbGV4R3JvdzogMTMgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBNQVRDSEVEXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgIHsvKiA8L0JveD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplID0gXCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxLCBjb2xvcjpcInByaW1hcnlcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wb3N0cy9maXJzdC1wb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplID0gXCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcG9zdHMvZmlyc3QtcG9zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgICA8L0JveD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImludGVyIiwiQXBwQmFyIiwiVG9vbGJhciIsIkNvbnRhaW5lciIsIkNzc0Jhc2VsaW5lIiwiVHlwb2dyYXBoeSIsIkJveCIsIkdyaWQiLCJUZXh0RmllbGQiLCJGb3JtQ29udHJvbExhYmVsIiwiQ2hlY2tib3giLCJUaGVtZVByb3ZpZGVyIiwiQnV0dG9uIiwiaW5pdGlhbGl6ZUFwcCIsImdldEFuYWx5dGljcyIsImdldEZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiSG9tZSIsIm9wZW4iLCJsaW5rIiwid2luZG93IiwicG9zaXRpb24iLCJzeCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckJvdHRvbSIsImJvcmRlckNvbG9yIiwidmFyaWFudCIsImZsZXhHcm93Iiwic2l6ZSIsImNvbG9yIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "@mui/material/":
/*!*********************************!*\
  !*** external "@mui/material/" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@mui/material/");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/analytics":
/*!*************************************!*\
  !*** external "firebase/analytics" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/analytics");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/firestore/lite":
/*!******************************************!*\
  !*** external "firebase/firestore/lite" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore/lite");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();
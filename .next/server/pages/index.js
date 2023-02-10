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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/ */ \"@mui/material/\");\n/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material___WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\n/* harmony import */ var firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore/lite */ \"firebase/firestore/lite\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_2__, firebase_analytics__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_2__, firebase_analytics__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n// import { Formik, field, form} from 'formik'\n// import Link from 'next/link';\n// Import the functions you need from the SDKs you need\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyAVw00OfAUktA4aI0Y98vHAiS-ITSp3v50\",\n    authDomain: \"spotifly-997dd.firebaseapp.com\",\n    projectId: \"spotifly-997dd\",\n    storageBucket: \"spotifly-997dd.appspot.com\",\n    messagingSenderId: \"869795366490\",\n    appId: \"1:869795366490:web:d8bcf837eb81da5168ba63\",\n    measurementId: \"G-LH0JWX82X5\"\n};\nfunction Home() {\n    function open({ link  }) {\n        return window.open(\"/posts/first-post\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_1__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_1__.CssBaseline, {}, void 0, false, {\n                fileName: \"/Users/samsung/Desktop/spotify-matched/src/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_1__.Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_1__.AppBar, {\n                    position: \"fixed\",\n                    sx: {\n                        background: \"#000000\",\n                        borderBottom: 0.5,\n                        borderColor: \"white\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_1__.Toolbar, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_1__.Typography, {\n                                variant: \"h1\",\n                                sx: {\n                                    ml: 2\n                                },\n                                children: \"Spotify\"\n                            }, void 0, false, {\n                                fileName: \"/Users/samsung/Desktop/spotify-matched/src/pages/index.js\",\n                                lineNumber: 39,\n                                columnNumber: 26\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_1__.Typography, {\n                                variant: \"h2\",\n                                sx: {\n                                    flexGrow: 11\n                                },\n                                children: \"MATCHED\"\n                            }, void 0, false, {\n                                fileName: \"/Users/samsung/Desktop/spotify-matched/src/pages/index.js\",\n                                lineNumber: 42,\n                                columnNumber: 26\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                variant: \"text\",\n                                size: \"medium\",\n                                sx: {\n                                    flexGrow: 1\n                                },\n                                href: \"/posts/first-post\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/Users/samsung/Desktop/spotify-matched/src/pages/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 26\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                variant: \"contained\",\n                                size: \"medium\",\n                                href: \"/posts/first-post\",\n                                children: \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"/Users/samsung/Desktop/spotify-matched/src/pages/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 26\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/samsung/Desktop/spotify-matched/src/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 19\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/samsung/Desktop/spotify-matched/src/pages/index.js\",\n                    lineNumber: 37,\n                    columnNumber: 16\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/samsung/Desktop/spotify-matched/src/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/samsung/Desktop/spotify-matched/src/pages/index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBMEJNQTtBQXpCd0o7QUFHOUosOENBQThDO0FBQzlDLGdDQUFnQztBQUVoQyx1REFBdUQ7QUFDVjtBQUNLO0FBQzBCO0FBQzVFLDREQUE0RDtBQUM1RCxpRUFBaUU7QUFFakUsd0NBQXdDO0FBQ3hDLG1FQUFtRTtBQUNuRSxNQUFNa0IsaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztJQUNQQyxlQUFlO0FBQ2pCO0FBSWUsU0FBU0MsT0FBTztJQUM3QixTQUFTQyxLQUFLLEVBQUNDLEtBQUksRUFBQyxFQUFFO1FBQ3BCLE9BQU9DLE9BQU9GLElBQUksQ0FBQztJQUNyQjtJQUNBLHFCQUNFLDhEQUFDeEIscURBQVNBOzswQkFDUiw4REFBQ0MsdURBQVdBOzs7OzswQkFDWiw4REFBQ0UsK0NBQUdBOzBCQUNLLDRFQUFDTCxrREFBTUE7b0JBQUM2QixVQUFTO29CQUFRQyxJQUFJO3dCQUFDQyxZQUFXO3dCQUFXQyxjQUFjO3dCQUFLQyxhQUFhO29CQUFPOzhCQUN4Riw0RUFBQ2hDLG1EQUFPQTs7MENBQ0QsOERBQUNHLHNEQUFVQTtnQ0FBQzhCLFNBQVE7Z0NBQUtKLElBQUk7b0NBQUVLLElBQUk7Z0NBQUM7MENBQUc7Ozs7OzswQ0FHdkMsOERBQUMvQixzREFBVUE7Z0NBQUM4QixTQUFRO2dDQUFLSixJQUFJO29DQUFFTSxVQUFVO2dDQUFHOzBDQUFHOzs7Ozs7MENBSS9DLDhEQUFDekIsa0RBQU1BO2dDQUNEdUIsU0FBUTtnQ0FDUkcsTUFBTztnQ0FDUFAsSUFBSTtvQ0FBRU0sVUFBVTtnQ0FBRTtnQ0FDbEJFLE1BQUs7MENBQ1I7Ozs7OzswQ0FHSCw4REFBQzNCLGtEQUFNQTtnQ0FDRHVCLFNBQVE7Z0NBQ1JHLE1BQU87Z0NBQ1BDLE1BQUs7MENBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRNUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nwb3RpZnktbWF0Y2hlZC8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEludGVyIH0gZnJvbSAnQG5leHQvZm9udC9nb29nbGUnXG5pbXBvcnQgeyBBcHBCYXIsIFRvb2xiYXIsIENvbnRhaW5lciwgQ3NzQmFzZWxpbmUsIFR5cG9ncmFwaHksIEJveCwgR3JpZCwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbExhYmVsLCBDaGVja2JveCwgVGhlbWVQcm92aWRlciwgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvXCI7XG5cblxuLy8gaW1wb3J0IHsgRm9ybWlrLCBmaWVsZCwgZm9ybX0gZnJvbSAnZm9ybWlrJ1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEFuYWx5dGljcyB9IGZyb20gXCJmaXJlYmFzZS9hbmFseXRpY3NcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgY29sbGVjdGlvbiwgZ2V0RG9jcyB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZS9saXRlJztcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lBVncwME9mQVVrdEE0YUkwWTk4dkhBaVMtSVRTcDN2NTBcIixcbiAgYXV0aERvbWFpbjogXCJzcG90aWZseS05OTdkZC5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcInNwb3RpZmx5LTk5N2RkXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwic3BvdGlmbHktOTk3ZGQuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODY5Nzk1MzY2NDkwXCIsXG4gIGFwcElkOiBcIjE6ODY5Nzk1MzY2NDkwOndlYjpkOGJjZjgzN2ViODFkYTUxNjhiYTYzXCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1MSDBKV1g4Mlg1XCJcbn07XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgZnVuY3Rpb24gb3Blbih7bGlua30pIHtcbiAgICByZXR1cm4gd2luZG93Lm9wZW4oXCIvcG9zdHMvZmlyc3QtcG9zdFwiKVxuICB9XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciA+XG4gICAgICA8Q3NzQmFzZWxpbmUgLz4gIFxuICAgICAgPEJveCA+XG4gICAgICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIiBzeD17e2JhY2tncm91bmQ6XCIjMDAwMDAwXCIsIGJvcmRlckJvdHRvbTogMC41LCBib3JkZXJDb2xvcjogXCJ3aGl0ZVwifX0+XG4gICAgICAgICAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMScgc3g9e3sgbWw6IDJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFNwb3RpZnlcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDInIHN4PXt7IGZsZXhHcm93OiAxMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIE1BVENIRURcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgey8qIDwvQm94PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemUgPSBcIm1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Bvc3RzL2ZpcnN0LXBvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemUgPSBcIm1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wb3N0cy9maXJzdC1wb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgIDwvQm94PlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJBcHBCYXIiLCJUb29sYmFyIiwiQ29udGFpbmVyIiwiQ3NzQmFzZWxpbmUiLCJUeXBvZ3JhcGh5IiwiQm94IiwiR3JpZCIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sTGFiZWwiLCJDaGVja2JveCIsIlRoZW1lUHJvdmlkZXIiLCJCdXR0b24iLCJpbml0aWFsaXplQXBwIiwiZ2V0QW5hbHl0aWNzIiwiZ2V0RmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJIb21lIiwib3BlbiIsImxpbmsiLCJ3aW5kb3ciLCJwb3NpdGlvbiIsInN4IiwiYmFja2dyb3VuZCIsImJvcmRlckJvdHRvbSIsImJvcmRlckNvbG9yIiwidmFyaWFudCIsIm1sIiwiZmxleEdyb3ciLCJzaXplIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

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
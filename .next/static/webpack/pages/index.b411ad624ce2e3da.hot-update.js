"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/analytics */ \"./node_modules/firebase/analytics/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore/lite */ \"./node_modules/firebase/firestore/lite/dist/esm/index.esm.js\");\n\n\n\n// import { Formik, field, form} from 'formik'\n// import Link from 'next/link';\n// Import the functions you need from the SDKs you need\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyAVw00OfAUktA4aI0Y98vHAiS-ITSp3v50\",\n    authDomain: \"spotifly-997dd.firebaseapp.com\",\n    projectId: \"spotifly-997dd\",\n    storageBucket: \"spotifly-997dd.appspot.com\",\n    messagingSenderId: \"869795366490\",\n    appId: \"1:869795366490:web:d8bcf837eb81da5168ba63\",\n    measurementId: \"G-LH0JWX82X5\"\n};\nfunction Home() {\n    function open(param) {\n        let { link  } = param;\n        return window.open(\"/posts/first-post\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_4__.CssBaseline, {}, void 0, false, {\n                fileName: \"/Users/VanessaWei/Desktop/spotify-matched-5/src/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_4__.AppBar, {\n                    position: \"fixed\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Toolbar, {\n                        sx: {\n                            backgroundColor: \"background.default\",\n                            borderBottom: 0.1,\n                            borderColor: \"divider\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                variant: \"h2\",\n                                sx: {\n                                    flexGrow: 13\n                                },\n                                children: \"MATCHED\"\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/spotify-matched-5/src/pages/index.js\",\n                                lineNumber: 42,\n                                columnNumber: 26\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                variant: \"text\",\n                                size: \"medium\",\n                                sx: {\n                                    flexGrow: 1,\n                                    color: \"primary\"\n                                },\n                                href: \"/posts/first-post\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/spotify-matched-5/src/pages/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 26\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                variant: \"contained\",\n                                size: \"medium\",\n                                href: \"/posts/first-post\",\n                                children: \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/spotify-matched-5/src/pages/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 26\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/VanessaWei/Desktop/spotify-matched-5/src/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 19\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/VanessaWei/Desktop/spotify-matched-5/src/pages/index.js\",\n                    lineNumber: 37,\n                    columnNumber: 16\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/VanessaWei/Desktop/spotify-matched-5/src/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/VanessaWei/Desktop/spotify-matched-5/src/pages/index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUEwQk1BO0FBekJ3SjtBQUc5Siw4Q0FBOEM7QUFDOUMsZ0NBQWdDO0FBRWhDLHVEQUF1RDtBQUNWO0FBQ0s7QUFDMEI7QUFDNUUsNERBQTREO0FBQzVELGlFQUFpRTtBQUVqRSx3Q0FBd0M7QUFDeEMsbUVBQW1FO0FBQ25FLE1BQU1rQixpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0lBQ1BDLGVBQWU7QUFDakI7QUFJZSxTQUFTQyxPQUFPO0lBQzdCLFNBQVNDLEtBQUssS0FBTSxFQUFFO1lBQVIsRUFBQ0MsS0FBSSxFQUFDLEdBQU47UUFDWixPQUFPQyxPQUFPRixJQUFJLENBQUM7SUFDckI7SUFDQSxxQkFDRSw4REFBQ3hCLHFEQUFTQTs7MEJBQ1IsOERBQUNDLHVEQUFXQTs7Ozs7MEJBQ1osOERBQUNFLCtDQUFHQTswQkFDSyw0RUFBQ0wsa0RBQU1BO29CQUFDNkIsVUFBUzs4QkFDZCw0RUFBQzVCLG1EQUFPQTt3QkFBQzZCLElBQUk7NEJBQUNDLGlCQUFnQjs0QkFBc0JDLGNBQWM7NEJBQUtDLGFBQWE7d0JBQVM7OzBDQUl0Riw4REFBQzdCLHNEQUFVQTtnQ0FBQzhCLFNBQVE7Z0NBQUtKLElBQUk7b0NBQUVLLFVBQVU7Z0NBQUc7MENBQUc7Ozs7OzswQ0FJL0MsOERBQUN4QixrREFBTUE7Z0NBQ0R1QixTQUFRO2dDQUNSRSxNQUFPO2dDQUNQTixJQUFJO29DQUFFSyxVQUFVO29DQUFHRSxPQUFNO2dDQUFTO2dDQUNsQ0MsTUFBSzswQ0FDUjs7Ozs7OzBDQUdILDhEQUFDM0Isa0RBQU1BO2dDQUNEdUIsU0FBUTtnQ0FDUkUsTUFBTztnQ0FDUEUsTUFBSzswQ0FDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE1QixDQUFDO0tBckN1QmIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW50ZXIgfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCB7IEFwcEJhciwgVG9vbGJhciwgQ29udGFpbmVyLCBDc3NCYXNlbGluZSwgVHlwb2dyYXBoeSwgQm94LCBHcmlkLCBUZXh0RmllbGQsIEZvcm1Db250cm9sTGFiZWwsIENoZWNrYm94LCBUaGVtZVByb3ZpZGVyLCBCdXR0b24gfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9cIjtcblxuXG4vLyBpbXBvcnQgeyBGb3JtaWssIGZpZWxkLCBmb3JtfSBmcm9tICdmb3JtaWsnXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG4vLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0QW5hbHl0aWNzIH0gZnJvbSBcImZpcmViYXNlL2FuYWx5dGljc1wiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBjb2xsZWN0aW9uLCBnZXREb2NzIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlL2xpdGUnO1xuLy8gVE9ETzogQWRkIFNES3MgZm9yIEZpcmViYXNlIHByb2R1Y3RzIHRoYXQgeW91IHdhbnQgdG8gdXNlXG4vLyBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvc2V0dXAjYXZhaWxhYmxlLWxpYnJhcmllc1xuXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXG4vLyBGb3IgRmlyZWJhc2UgSlMgU0RLIHY3LjIwLjAgYW5kIGxhdGVyLCBtZWFzdXJlbWVudElkIGlzIG9wdGlvbmFsXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUFWdzAwT2ZBVWt0QTRhSTBZOTh2SEFpUy1JVFNwM3Y1MFwiLFxuICBhdXRoRG9tYWluOiBcInNwb3RpZmx5LTk5N2RkLmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwic3BvdGlmbHktOTk3ZGRcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJzcG90aWZseS05OTdkZC5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI4Njk3OTUzNjY0OTBcIixcbiAgYXBwSWQ6IFwiMTo4Njk3OTUzNjY0OTA6d2ViOmQ4YmNmODM3ZWI4MWRhNTE2OGJhNjNcIixcbiAgbWVhc3VyZW1lbnRJZDogXCJHLUxIMEpXWDgyWDVcIlxufTtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBmdW5jdGlvbiBvcGVuKHtsaW5rfSkge1xuICAgIHJldHVybiB3aW5kb3cub3BlbihcIi9wb3N0cy9maXJzdC1wb3N0XCIpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyID5cbiAgICAgIDxDc3NCYXNlbGluZSAvPiAgXG4gICAgICA8Qm94ID5cbiAgICAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiID5cbiAgICAgICAgICAgICAgICAgIDxUb29sYmFyIHN4PXt7YmFja2dyb3VuZENvbG9yOlwiYmFja2dyb3VuZC5kZWZhdWx0XCIsIGJvcmRlckJvdHRvbTogMC4xLCBib3JkZXJDb2xvcjogXCJkaXZpZGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIHN4PXt7IG1sOiAyfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTcG90aWZ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMicgc3g9e3sgZmxleEdyb3c6IDEzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgTUFUQ0hFRFxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICB7LyogPC9Cb3g+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IFwibWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSwgY29sb3I6XCJwcmltYXJ5XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcG9zdHMvZmlyc3QtcG9zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IFwibWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Bvc3RzL2ZpcnN0LXBvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgICAgIDwvQXBwQmFyPlxuICAgICAgICAgPC9Cb3g+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkFwcEJhciIsIlRvb2xiYXIiLCJDb250YWluZXIiLCJDc3NCYXNlbGluZSIsIlR5cG9ncmFwaHkiLCJCb3giLCJHcmlkIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2xMYWJlbCIsIkNoZWNrYm94IiwiVGhlbWVQcm92aWRlciIsIkJ1dHRvbiIsImluaXRpYWxpemVBcHAiLCJnZXRBbmFseXRpY3MiLCJnZXRGaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsIkhvbWUiLCJvcGVuIiwibGluayIsIndpbmRvdyIsInBvc2l0aW9uIiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJCb3R0b20iLCJib3JkZXJDb2xvciIsInZhcmlhbnQiLCJmbGV4R3JvdyIsInNpemUiLCJjb2xvciIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});
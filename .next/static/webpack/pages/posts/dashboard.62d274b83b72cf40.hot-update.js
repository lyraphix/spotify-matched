"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/dashboard",{

/***/ "./src/pages/posts/dashboard.js":
/*!**************************************!*\
  !*** ./src/pages/posts/dashboard.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/ */ \"./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// import { Formik, field, form} from 'formik'\n// import Link from 'next/link';\nfunction Dashboard() {\n    _s();\n    const avatar = \"\";\n    const username = \"\";\n    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const openMenu = (event)=>{\n        setAnchorEl(event.currentTarget);\n    };\n    const closeMenu = ()=>{\n        setAnchorEl(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.CssBaseline, {}, void 0, false, {\n                fileName: \"/Users/VanessaWei/Desktop/spotify-matched-2/src/pages/posts/dashboard.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.AppBar, {\n                    position: \"static\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Toolbar, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                variant: \"h1\",\n                                sx: {\n                                    ml: 2\n                                },\n                                children: \"Spotify\"\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/spotify-matched-2/src/pages/posts/dashboard.js\",\n                                lineNumber: 28,\n                                columnNumber: 26\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                variant: \"h2\",\n                                sx: {\n                                    flexGrow: 2\n                                },\n                                children: \"MATCHED\"\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/spotify-matched-2/src/pages/posts/dashboard.js\",\n                                lineNumber: 31,\n                                columnNumber: 26\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: openMenu,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Avatar, {\n                                    alt: username,\n                                    src: avatar\n                                }, void 0, false, {\n                                    fileName: \"/Users/VanessaWei/Desktop/spotify-matched-2/src/pages/posts/dashboard.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 26\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/spotify-matched-2/src/pages/posts/dashboard.js\",\n                                lineNumber: 34,\n                                columnNumber: 26\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                                id: \"userMenu\",\n                                // aria-labelledby=\"demo-positioned-button\"\n                                anchorEl: anchorEl,\n                                open: Boolean(anchorEl),\n                                keepMounted: true,\n                                onClose: closeMenu,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.MenuItem, {\n                                        children: \"Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/VanessaWei/Desktop/spotify-matched-2/src/pages/posts/dashboard.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.MenuItem, {\n                                        children: \"My account\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/VanessaWei/Desktop/spotify-matched-2/src/pages/posts/dashboard.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.MenuItem, {\n                                        href: \"/\",\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/VanessaWei/Desktop/spotify-matched-2/src/pages/posts/dashboard.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/VanessaWei/Desktop/spotify-matched-2/src/pages/posts/dashboard.js\",\n                                lineNumber: 37,\n                                columnNumber: 26\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/VanessaWei/Desktop/spotify-matched-2/src/pages/posts/dashboard.js\",\n                        lineNumber: 27,\n                        columnNumber: 19\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/VanessaWei/Desktop/spotify-matched-2/src/pages/posts/dashboard.js\",\n                    lineNumber: 26,\n                    columnNumber: 16\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/VanessaWei/Desktop/spotify-matched-2/src/pages/posts/dashboard.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Box, {\n                sx: {\n                    margin: 8,\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"SPOTIFY MAAAAATCHED!!!\"\n                }, void 0, false, {\n                    fileName: \"/Users/VanessaWei/Desktop/spotify-matched-2/src/pages/posts/dashboard.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/VanessaWei/Desktop/spotify-matched-2/src/pages/posts/dashboard.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/VanessaWei/Desktop/spotify-matched-2/src/pages/posts/dashboard.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Dashboard, \"+aMDa7FPcESUyQDF1vq0RSMn4/k=\");\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvZGFzaGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBS01BO0FBTHlCO0FBQ0U7QUFFa0s7QUFHbk0sOENBQThDO0FBQzlDLGdDQUFnQztBQUNqQixTQUFTbUIsWUFBWTs7SUFFbEMsTUFBTUMsU0FBUztJQUNmLE1BQU1DLFdBQVc7SUFFakIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdyQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzdDLE1BQU1zQixXQUFXLENBQUNDLFFBQVM7UUFDekJGLFlBQVlFLE1BQU1DLGFBQWE7SUFDakM7SUFDQSxNQUFNQyxZQUFZLElBQUs7UUFDckJKLFlBQVksSUFBSTtJQUNsQjtJQUVBLHFCQUNFLDhEQUFDZCxxREFBU0E7OzBCQUNSLDhEQUFDQyx1REFBV0E7Ozs7OzBCQUNaLDhEQUFDRSwrQ0FBR0E7MEJBQ0ssNEVBQUNMLGtEQUFNQTtvQkFBQ3FCLFVBQVM7OEJBQ2QsNEVBQUNwQixtREFBT0E7OzBDQUNELDhEQUFDRyxzREFBVUE7Z0NBQUNrQixTQUFRO2dDQUFLQyxJQUFJO29DQUFFQyxJQUFJO2dDQUFDOzBDQUFHOzs7Ozs7MENBR3ZDLDhEQUFDcEIsc0RBQVVBO2dDQUFDa0IsU0FBUTtnQ0FBS0MsSUFBSTtvQ0FBRUUsVUFBVTtnQ0FBRTswQ0FBRzs7Ozs7OzBDQUc5Qyw4REFBQ2Qsa0RBQU1BO2dDQUFDZSxTQUFTVDswQ0FDakIsNEVBQUNsQixrREFBTUE7b0NBQUM0QixLQUFLYjtvQ0FBVWMsS0FBS2Y7Ozs7Ozs7Ozs7OzBDQUU1Qiw4REFBQ2YsZ0RBQUlBO2dDQUNGK0IsSUFBRztnQ0FDSCwyQ0FBMkM7Z0NBQzNDZCxVQUFVQTtnQ0FDVmUsTUFBTUMsUUFBUWhCO2dDQUNkaUIsV0FBVztnQ0FDWEMsU0FBU2I7O2tEQVdULDhEQUFDdkIsb0RBQVFBO2tEQUFFOzs7Ozs7a0RBQ1gsOERBQUNBLG9EQUFRQTtrREFBRTs7Ozs7O2tEQUNYLDhEQUFDQSxvREFBUUE7d0NBQUNxQyxNQUFLO2tEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU12Qyw4REFBQzdCLCtDQUFHQTtnQkFDQ2tCLElBQUk7b0JBQ0ZZLFFBQVE7b0JBQ1JDLFNBQVM7b0JBQ1RDLGVBQWU7b0JBQ2ZDLFlBQVk7Z0JBR2Q7MEJBRUwsNEVBQUNDOzhCQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1iLENBQUM7R0FyRXVCM0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3RzL2Rhc2hib2FyZC5qcz84ODhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW50ZXIsIE9wZW5fU2FucyB9IGZyb20gJ0BuZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHsgSFRNTEVsZW1lbnQsIE1lbnVJdGVtLCBNZW51LCBBdmF0YXIsIEFwcEJhciwgVG9vbGJhciwgQ29udGFpbmVyLCBDc3NCYXNlbGluZSwgVHlwb2dyYXBoeSwgQm94LCBHcmlkLCBUZXh0RmllbGQsIEZvcm1Db250cm9sTGFiZWwsIENoZWNrYm94LCBUaGVtZVByb3ZpZGVyLCBCdXR0b24gfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9cIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuLy8gaW1wb3J0IHsgRm9ybWlrLCBmaWVsZCwgZm9ybX0gZnJvbSAnZm9ybWlrJ1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgXG4gIGNvbnN0IGF2YXRhciA9IFwiXCJcbiAgY29uc3QgdXNlcm5hbWUgPSBcIlwiXG5cbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgb3Blbk1lbnUgPSAoZXZlbnQpID0+e1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9XG4gIGNvbnN0IGNsb3NlTWVudSA9ICgpID0+e1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPENzc0Jhc2VsaW5lIC8+ICBcbiAgICAgIDxCb3ggPlxuICAgICAgICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgICAgICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIHN4PXt7IG1sOiAyfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTcG90aWZ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gyJyBzeD17eyBmbGV4R3JvdzogMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIE1BVENIRURcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvcGVuTWVudX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9e3VzZXJuYW1lfSBzcmM9e2F2YXRhcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXNlck1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFyaWEtbGFiZWxsZWRieT1cImRlbW8tcG9zaXRpb25lZC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2Nsb3NlTWVudX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmNob3JPcmlnaW49e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGhvcml6b250YWw6ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybU9yaWdpbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gPlByb2ZpbGU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSA+TXkgYWNjb3VudDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGhyZWY9XCIvXCI+TG9nb3V0PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgICAgIDwvQXBwQmFyPlxuICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgbWFyZ2luOiA4LFxuICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblxuICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeS5saWdodCcsXG4gICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIFNQT1RJRlkgTUFBQUFBVENIRUQhISFcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQm94PlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiSFRNTEVsZW1lbnQiLCJNZW51SXRlbSIsIk1lbnUiLCJBdmF0YXIiLCJBcHBCYXIiLCJUb29sYmFyIiwiQ29udGFpbmVyIiwiQ3NzQmFzZWxpbmUiLCJUeXBvZ3JhcGh5IiwiQm94IiwiR3JpZCIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sTGFiZWwiLCJDaGVja2JveCIsIlRoZW1lUHJvdmlkZXIiLCJCdXR0b24iLCJEYXNoYm9hcmQiLCJhdmF0YXIiLCJ1c2VybmFtZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJvcGVuTWVudSIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNsb3NlTWVudSIsInBvc2l0aW9uIiwidmFyaWFudCIsInN4IiwibWwiLCJmbGV4R3JvdyIsIm9uQ2xpY2siLCJhbHQiLCJzcmMiLCJpZCIsIm9wZW4iLCJCb29sZWFuIiwia2VlcE1vdW50ZWQiLCJvbkNsb3NlIiwiaHJlZiIsIm1hcmdpbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/posts/dashboard.js\n"));

/***/ })

});
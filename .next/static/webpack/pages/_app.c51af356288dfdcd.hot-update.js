"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n// import '@/styles/globals.css'\n\n\n// @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.createTheme)({\n        palette: {\n            mode: \"dark\",\n            primary: {\n                main: \"#449b7a\",\n                light: \"#c8d4d0\",\n                dark: \"#2B3B5D\"\n            },\n            secondary: {\n                main: \"#608ab8\",\n                light: \"#A5BED6\",\n                dark: \"#3F6758\"\n            },\n            third: {\n                main: \"#e15868\",\n                light: \"#E6A8AF\",\n                dark: \"#90444C\"\n            },\n            divider: \"#ffffff\",\n            info: {\n                main: \"#ffffff\"\n            }\n        },\n        background: {\n            default: \"#33323B\",\n            paper: \"#000000\"\n        },\n        spacing: 8,\n        shape: {\n            borderRadius: 4\n        },\n        typography: {\n            h1: {\n                fontFamily: '\"Gill Sans\", sans-serif',\n                fontWeight: 500,\n                fontSize: \"1.8rem\"\n            },\n            h2: {\n                fontSize: \"2rem\",\n                fontWeight: 150,\n                fontStretch: \"condensed\",\n                fontFamily: \"cursive\"\n            },\n            iconFont: {\n                fontFamily: '\"Gill Sans\", sans-serif',\n                fontWeight: 500,\n                fontSize: \"1rem\"\n            },\n            h3: {\n                fontWeight: 5,\n                fontSize: \"1rem\"\n            }\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        theme: theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/VanessaWei/Desktop/spotify-matched-5/src/pages/_app.js\",\n            lineNumber: 66,\n            columnNumber: 39\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/VanessaWei/Desktop/spotify-matched-5/src/pages/_app.js\",\n        lineNumber: 66,\n        columnNumber: 10\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsZ0NBQWdDOztBQUMyQjtBQUMzRCxpRkFBaUY7QUFHbEUsU0FBU0UsSUFBSSxLQUF3QixFQUFFO1FBQTFCLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQXhCO0lBQzFCLE1BQU1DLFFBQVFMLDBEQUFXQSxDQUFDO1FBQ3hCTSxTQUFTO1lBQ1BDLE1BQU07WUFDTkMsU0FBUztnQkFDUEMsTUFBTTtnQkFDTkMsT0FBTztnQkFDUEMsTUFBTTtZQUNSO1lBQ0FDLFdBQVc7Z0JBQ1RILE1BQU07Z0JBQ05DLE9BQU87Z0JBQ1BDLE1BQU07WUFDUjtZQUNBRSxPQUFPO2dCQUNMSixNQUFNO2dCQUNOQyxPQUFPO2dCQUNQQyxNQUFNO1lBQ1I7WUFDQUcsU0FBUztZQUNUQyxNQUFNO2dCQUNKTixNQUFLO1lBQ1A7UUFLRjtRQUNBTyxZQUFZO1lBQ1ZDLFNBQVM7WUFDVEMsT0FBTztRQUNUO1FBQ0FDLFNBQVM7UUFDVEMsT0FBTztZQUNMQyxjQUFjO1FBQ2hCO1FBQ0FDLFlBQVk7WUFDVkMsSUFBSTtnQkFDRkMsWUFBYTtnQkFDYkMsWUFBWTtnQkFDWkMsVUFBVTtZQUNaO1lBQ0FDLElBQUk7Z0JBQ0ZELFVBQVU7Z0JBQ1ZELFlBQVk7Z0JBQ1pHLGFBQWE7Z0JBQ2JKLFlBQVk7WUFDZDtZQUNBSyxVQUFVO2dCQUNSTCxZQUFhO2dCQUNiQyxZQUFZO2dCQUNaQyxVQUFVO1lBQ1o7WUFDQUksSUFBSTtnQkFDRkwsWUFBWTtnQkFDWkMsVUFBVTtZQUNaO1FBQ0Y7SUFFRjtJQUNBLHFCQUFPLDhEQUFDekIsd0RBQWFBO1FBQUNJLE9BQU9BO2tCQUFPLDRFQUFDRjtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBQzlELENBQUM7S0E3RHVCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyBjcmVhdGVUaGVtZSwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwJyk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBtb2RlOiAnZGFyaycsXG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIG1haW46ICcjNDQ5YjdhJyxcbiAgICAgICAgbGlnaHQ6ICcjYzhkNGQwJyxcbiAgICAgICAgZGFyazogJyMyQjNCNUQnLFxuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBtYWluOiAnIzYwOGFiOCcsXG4gICAgICAgIGxpZ2h0OiAnI0E1QkVENicsXG4gICAgICAgIGRhcms6ICcjM0Y2NzU4JyxcbiAgICAgIH0sXG4gICAgICB0aGlyZDoge1xuICAgICAgICBtYWluOiAnI2UxNTg2OCcsXG4gICAgICAgIGxpZ2h0OiAnI0U2QThBRicsXG4gICAgICAgIGRhcms6ICcjOTA0NDRDJyxcbiAgICAgIH0sXG4gICAgICBkaXZpZGVyOiAnI2ZmZmZmZicsXG4gICAgICBpbmZvOiB7XG4gICAgICAgIG1haW46JyNmZmZmZmYnLFxuICAgICAgfVxuICAgICAgLy8gdGV4dDoge1xuICAgICAgLy8gICBwcmltYXJ5OiAnI2ZmZmZmZicsXG4gICAgICAvLyB9LFxuICAgICAgXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBkZWZhdWx0OiAnIzMzMzIzQicsXG4gICAgICBwYXBlcjogJyMwMDAwMDAnLFxuICAgIH0sXG4gICAgc3BhY2luZzogOCxcbiAgICBzaGFwZToge1xuICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgIH0sXG4gICAgdHlwb2dyYXBoeToge1xuICAgICAgaDE6IHtcbiAgICAgICAgZm9udEZhbWlseTogYFwiR2lsbCBTYW5zXCIsIHNhbnMtc2VyaWZgLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgIGZvbnRTaXplOiAnMS44cmVtJyxcbiAgICAgIH0sXG4gICAgICBoMjoge1xuICAgICAgICBmb250U2l6ZTogJzJyZW0nLFxuICAgICAgICBmb250V2VpZ2h0OiAxNTAsXG4gICAgICAgIGZvbnRTdHJldGNoOiBcImNvbmRlbnNlZFwiLFxuICAgICAgICBmb250RmFtaWx5OiBcImN1cnNpdmVcIixcbiAgICAgIH0sXG4gICAgICBpY29uRm9udDoge1xuICAgICAgICBmb250RmFtaWx5OiBgXCJHaWxsIFNhbnNcIiwgc2Fucy1zZXJpZmAsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgIH0sXG4gICAgICBoMzoge1xuICAgICAgICBmb250V2VpZ2h0OiA1LFxuICAgICAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFxuICB9KTtcbiAgcmV0dXJuIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjwvVGhlbWVQcm92aWRlcj5cbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsInBhbGV0dGUiLCJtb2RlIiwicHJpbWFyeSIsIm1haW4iLCJsaWdodCIsImRhcmsiLCJzZWNvbmRhcnkiLCJ0aGlyZCIsImRpdmlkZXIiLCJpbmZvIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJwYXBlciIsInNwYWNpbmciLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsInR5cG9ncmFwaHkiLCJoMSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJoMiIsImZvbnRTdHJldGNoIiwiaWNvbkZvbnQiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n"));

/***/ })

});
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

/***/ "./components/Bouncygreeting.js":
/*!**************************************!*\
  !*** ./components/Bouncygreeting.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animations */ \"./node_modules/react-animations/lib/index.js\");\n/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ */ \"./node_modules/@mui/material/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\",\n        \"\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"animation: 2s \",\n        \" infinite\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Bounce = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1(), (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.keyframes)(_templateObject(), react_animations__WEBPACK_IMPORTED_MODULE_4__.bounce));\n_c = Bounce;\nconst BouncyGreeting = ()=>{\n    var _session_user;\n    _s();\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const key = Math.random(); // generate a random key\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Bounce, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material___WEBPACK_IMPORTED_MODULE_6__.Typography, {\n            variant: \"h2Large\",\n            children: [\n                \"Hi, \",\n                session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.name\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/m/Desktop/Node/spotify-matched/spotify-matched/components/Bouncygreeting.js\",\n            lineNumber: 14,\n            columnNumber: 23\n        }, undefined)\n    }, key, false, {\n        fileName: \"/Users/m/Desktop/Node/spotify-matched/spotify-matched/components/Bouncygreeting.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BouncyGreeting, \"ujwIunAD3hlHFoJLG3BNiDLiMqM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c1 = BouncyGreeting;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BouncyGreeting);\nvar _c, _c1;\n$RefreshReg$(_c, \"Bounce\");\n$RefreshReg$(_c1, \"BouncyGreeting\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JvdW5jeWdyZWV0aW5nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDRztBQUNBO0FBQ1o7QUFDMFE7QUFHcFQsTUFBTW9DLFNBQVMvQiw2REFBVSxxQkFBaUJDLDREQUFTQSxvQkFBR0Msb0RBQU1BO0tBQXRENkI7QUFFTixNQUFNRSxpQkFBaUIsSUFBTTtRQUk0QkM7O0lBSHZELE1BQU0sRUFBRUMsTUFBTUQsUUFBTyxFQUFFRSxPQUFNLEVBQUUsR0FBR3RDLDJEQUFVQTtJQUM1QyxNQUFNdUMsTUFBTUMsS0FBS0MsTUFBTSxJQUFJLHdCQUF3QjtJQUNuRCxxQkFDRSw4REFBQ1I7a0JBQWlCLDRFQUFDUixzREFBVUE7WUFBQ2lCLFNBQVE7O2dCQUFVO2dCQUFLTixvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLGdCQUFBQSxRQUFTTyxJQUFJLGNBQWJQLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlUSxJQUFGOzs7Ozs7O09BQXJETDs7Ozs7QUFFakI7R0FOTUo7O1FBQzhCbkMsdURBQVVBOzs7TUFEeENtQztBQVFOLCtEQUFlQSxjQUFjQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm91bmN5Z3JlZXRpbmcuanM/NDI3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgYm91bmNlIH0gZnJvbSAncmVhY3QtYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDYXJkTWVkaWEsIENhcmQsIEltYWdlLCBQYXBlciwgSWNvbkJ1dHRvbiwgTGlzdCwgTGlzdEl0ZW0sIExpc3RJdGVtQnV0dG9uLCBMaXN0SXRlbVRleHQsIExpc3RJdGVtSWNvbiwgRGl2aWRlciwgRHJhd2VyLCBMaW5rLCBNZW51SXRlbSwgTWVudSwgQXZhdGFyLCBBcHBCYXIsIFRvb2xiYXIsIENvbnRhaW5lciwgQ3NzQmFzZWxpbmUsIFR5cG9ncmFwaHksIEJveCwgR3JpZCwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbExhYmVsLCBDaGVja2JveCwgVGhlbWVQcm92aWRlciwgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvXCI7XG5cblxuY29uc3QgQm91bmNlID0gc3R5bGVkLmRpdmBhbmltYXRpb246IDJzICR7a2V5ZnJhbWVzYCR7Ym91bmNlfWB9IGluZmluaXRlYDtcblxuY29uc3QgQm91bmN5R3JlZXRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IGtleSA9IE1hdGgucmFuZG9tKCk7IC8vIGdlbmVyYXRlIGEgcmFuZG9tIGtleVxuICByZXR1cm4gKFxuICAgIDxCb3VuY2Uga2V5PXtrZXl9PjxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMkxhcmdlXCI+SGksIHtzZXNzaW9uPy51c2VyPy5uYW1lfTwvVHlwb2dyYXBoeT48L0JvdW5jZT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm91bmN5R3JlZXRpbmciXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNlc3Npb24iLCJzaWduT3V0Iiwic3R5bGVkIiwia2V5ZnJhbWVzIiwiYm91bmNlIiwiQ2FyZE1lZGlhIiwiQ2FyZCIsIkltYWdlIiwiUGFwZXIiLCJJY29uQnV0dG9uIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbVRleHQiLCJMaXN0SXRlbUljb24iLCJEaXZpZGVyIiwiRHJhd2VyIiwiTGluayIsIk1lbnVJdGVtIiwiTWVudSIsIkF2YXRhciIsIkFwcEJhciIsIlRvb2xiYXIiLCJDb250YWluZXIiLCJDc3NCYXNlbGluZSIsIlR5cG9ncmFwaHkiLCJCb3giLCJHcmlkIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2xMYWJlbCIsIkNoZWNrYm94IiwiVGhlbWVQcm92aWRlciIsIkJ1dHRvbiIsIkJvdW5jZSIsImRpdiIsIkJvdW5jeUdyZWV0aW5nIiwic2Vzc2lvbiIsImRhdGEiLCJzdGF0dXMiLCJrZXkiLCJNYXRoIiwicmFuZG9tIiwidmFyaWFudCIsInVzZXIiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Bouncygreeting.js\n"));

/***/ })

});
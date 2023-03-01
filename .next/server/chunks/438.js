"use strict";
exports.id = 438;
exports.ids = [438];
exports.modules = {

/***/ 2438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(419);
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6061);
/* harmony import */ var react_animations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_animations__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reuseables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2234);







const Bounce = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`animation: 2s ${styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes`${react_animations__WEBPACK_IMPORTED_MODULE_4__.bounce}`} infinite`;
const login = false;
class BounceAbout extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const key = Math.random(); // generate a random key
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Bounce, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "h2Large",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: "About Us"
                })
            })
        }, key);
    }
}
const about = function(login) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Container, {
        sx: {
            flexGrow: 1
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_2__.CssBaseline, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    flexGrow: 1
                },
                children: [
                    (0,_reuseables__WEBPACK_IMPORTED_MODULE_5__["default"])(login),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            mt: 20,
                            mb: 3
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Box // Big Letters
                            , {
                                sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "left",
                                    direction: "row"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BounceAbout, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Box // Smaller
                            , {
                                sx: {
                                    display: "flex",
                                    justifyContent: "left",
                                    direction: "row"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                    direction: "column",
                                    //divider={<Divider orientation="horizontal" flexItem />}
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            variant: "h9",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: "With Musaic, it’s easy to find the right playlist customized just for you and your friends. Explore new genres, people, chord progression, or even choose your songs based on just your mood. There are millions of tracks and episodes on Spotify."
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            variant: "h9",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: "So whether you’re behind the wheel, working out, partying or relaxing, you can use Musaic to find the best music for you. Choose what you want to listen to, or let our AI surprise you. With Musiac, you can blend your music tastes together or find others just like you. Log in with your Spotify account, and try Musiac out today!"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);


/***/ })

};
;
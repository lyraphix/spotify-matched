"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,740,807];
exports.modules = {

/***/ 5480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(419);
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material___WEBPACK_IMPORTED_MODULE_4__);







const Homepage = ({ providers  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.CssBaseline, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Box, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.AppBar, {
                        position: "fixed",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Toolbar, {
                            sx: {
                                height: 110,
                                backgroundColor: "background.default"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Button, {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        sx: {
                                            mt: 10,
                                            flexGrow: 1,
                                            objectFit: "contain",
                                            alignItems: "end"
                                        },
                                        component: "img",
                                        height: "80",
                                        src: "/logo.jpg"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Box, {
                                    style: {
                                        // width: image.width,
                                        flex: 18
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Button, {
                                    variant: "text",
                                    size: "medium",
                                    href: "/posts/newaccount",
                                    children: "Sign Up"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Box, {
                                    style: {
                                        // width: image.width,
                                        flex: 0.3
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Button, {
                                    variant: "contained",
                                    size: "medium",
                                    sx: {
                                        color: "primary"
                                    },
                                    href: "/posts/first-post",
                                    children: "Login"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Box, {
                        sx: {
                            height: 1000,
                            color: "background.lighter"
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Box, {
                        sx: {
                            height: 100,
                            color: "background.lighter"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    display: "flex"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        sx: {
                                            flexGrow: 3,
                                            flexDirection: "row",
                                            color: "background.lighter"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Link, {
                                        href: "/posts/aboutNonLogin",
                                        children: "About us"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        sx: {
                                            flexGrow: 1,
                                            flexDirection: "row"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Link, {
                                        href: "/",
                                        children: "People"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        sx: {
                                            flexGrow: 1,
                                            flexDirection: "row"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Link, {
                                        href: "/",
                                        children: "Contact"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        sx: {
                                            flexGrow: 1,
                                            flexDirection: "row"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Link, {
                                        href: "/posts/tos",
                                        children: "Terms of Service"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        sx: {
                                            flexGrow: 3,
                                            flexDirection: "row",
                                            color: "background.lighter"
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Box, {
                                sx: {
                                    mt: 2,
                                    display: "flex"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        sx: {
                                            flexGrow: 6,
                                            flexDirection: "row"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                        variant: "text",
                                        sx: {
                                            flexGrow: 3,
                                            flexDirection: "row"
                                        },
                                        children: " @ 2023 8BITS"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        sx: {
                                            flexGrow: 3,
                                            flexDirection: "row"
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);


/***/ }),

/***/ 8287:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(419);
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material___WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7969);
/* harmony import */ var components_Homepage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5480);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3745);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9500);
/* harmony import */ var firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6401);
/* harmony import */ var _posts_about__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2438);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_5__, firebase_analytics__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_7__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_5__, firebase_analytics__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// import { Formik, field, form} from 'formik'
// import Link from 'next/link';
// Import the functions you need from the SDKs you need




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVw00OfAUktA4aI0Y98vHAiS-ITSp3v50",
    authDomain: "spotifly-997dd.firebaseapp.com",
    projectId: "spotifly-997dd",
    storageBucket: "spotifly-997dd.appspot.com",
    messagingSenderId: "869795366490",
    appId: "1:869795366490:web:d8bcf837eb81da5168ba63",
    measurementId: "G-LH0JWX82X5"
};
function Home({ providers  }) {
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-black h-screen overflow-hidden",
        children: session ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "flex",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Homepage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    session: session
                })
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Login__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            providers: providers
        })
    });
}
async function getServerSideProps(context) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)(context);
    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getProviders)();
    return {
        props: {
            session,
            providers
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7235:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Dashboard");

/***/ }),

/***/ 1808:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Diversity3");

/***/ }),

/***/ 3467:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 9801:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Logout");

/***/ }),

/***/ 8281:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ManageAccounts");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 6675:
/***/ ((module) => {

module.exports = require("@mui/icons-material/PrivacyTip");

/***/ }),

/***/ 8017:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 32:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Settings");

/***/ }),

/***/ 419:
/***/ ((module) => {

module.exports = require("@mui/material/");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6061:
/***/ ((module) => {

module.exports = require("react-animations");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9500:
/***/ ((module) => {

module.exports = import("firebase/analytics");;

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 6401:
/***/ ((module) => {

module.exports = import("firebase/firestore/lite");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [234,438,969], () => (__webpack_exec__(8287)));
module.exports = __webpack_exports__;

})();
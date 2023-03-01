(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@mui/material"
const material_namespaceObject = require("@mui/material");
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: ./src/pages/_app.js
// import '@/styles/globals.css'


// @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');



function App({ Component , pageProps: { session , ...pageProps }  }) {
    // const inter = Inter({ subsets: ['latin'] })
    const theme = (0,material_namespaceObject.createTheme)({
        palette: {
            mode: "dark",
            primary: {
                main: "#3eb575",
                mainPage: "#47A85A",
                light: "#B5C68C",
                dark: "#394221",
                text: "white"
            },
            secondary: {
                main: "#9BB9D8",
                light: "#92AFCE",
                dark: "#0C233B",
                text: "white"
            },
            third: {
                main: "#A02937",
                light: "#F0D7DA",
                dark: "#3D1519",
                text: "white"
            },
            forth: {
                main: "#DD7C22",
                light: "#E9BF98",
                dark: "#54361A",
                text: "white"
            },
            divider: "#ffffff",
            info: {
                main: "#ffffff"
            },
            // text: {
            //   primary: '#ffffff',
            // },
            background: {
                default: "#19191B"
            }
        },
        background: {
            default: "#19191B",
            paper: "#000000"
        },
        spacing: 8,
        shape: {
            borderRadius: 4
        },
        typography: {
            h1: {
                fontFamily: `"Gill Sans", sans-serif`,
                fontWeight: 350,
                fontSize: "1.7rem"
            },
            h2: {
                fontSize: "2rem",
                fontWeight: 150,
                fontStretch: "condensed"
            },
            iconFont: {
                // fontFamily: `"Gill Sans", sans-serif`,
                fontWeight: 700,
                fontSize: "1.3rem"
            },
            text: {
                fontWeight: 20,
                fontSize: "1rem"
            },
            bottom: {
                fontWeight: 20,
                fontSize: "1.5rem"
            },
            h2Large: {
                fontSize: "4rem",
                fontWeight: 150,
                fontStretch: "condensed"
            }
        }
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.ThemeProvider, {
        theme: theme
    }), /*#__PURE__*/ jsx_runtime_.jsx(react_.SessionProvider, {
        session: session,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_recoil_.RecoilRoot, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1108));
module.exports = __webpack_exports__;

})();
(this["webpackJsonpdailies"] = this["webpackJsonpdailies"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/********************* General *********************/\nbody{\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    background-color: rgb(223, 223, 223);\n}\n\na {\n    color: #000;\n}\n\n.main {\n    padding: 100px 0;\n}\n\n/*********************** Nav ***********************/\n\n.header {\n    background-color: #fff;\n    box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);\n    position: fixed;\n    width: 100%;\n    z-index: 3;\n    max-height: 10%;\n}\n\n.header a {\n    text-decoration: none;\n}\n\n.header ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    overflow: hidden;\n    background-color: #fff;\n}\n\n.header ul a {\n    display: block;\n    padding: 20px;\n    text-decoration: none;\n}\n\n.header ul a:hover {\n    background-color: rgb(66, 175, 175);\n}\n\n.header .logo {\n    float: left;\n    display: block;\n    font-size: 1.5em;\n    padding: 10px 20px;\n}\n\n.header .menu {\n    clear: both;\n    max-height: 0;\n    transition: max-height .2s ease-out;\n}\n\n.header .menu-icon {\n    padding: 28px 20px;\n    position: relative;\n    float: right;\n    cursor: pointer;\n    margin: 10px;\n}\n\n.header .menu-icon .nav-icon {\n    background: rgb(51, 51, 51);\n    display: block;\n    height: 3px;\n    width: 25px;\n    position: relative;\n    transition: background .2s ease-out;\n}\n\n.header .menu-icon .nav-icon:before {\n    background: rgb(51, 51, 51);\n    content: \"\";\n    display: block;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 7px;\n    transition: all .2s ease-out;\n}\n\n.header .menu-icon .nav-icon:after {\n    background: rgb(51, 51, 51);\n    content: \"\";\n    display: block;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: -7px;\n    transition: all .2s ease-out;\n}\n\n.header .menu-btn {\n    display: none;\n}\n\n.header .menu-btn:checked ~ .menu {\n    max-height: 240px;\n}\n\n.header .menu-btn:checked ~ .menu-icon .nav-icon {\n    background-color: transparent;\n}\n\n.header .menu-btn:checked ~ .menu-icon .nav-icon:before {\n    transform: rotate(-45deg);\n    top: 0;\n}\n\n.header .menu-btn:checked ~ .menu-icon .nav-icon:after {\n    transform: rotate(45deg);\n    top: 0;\n}\n\n\n\n/*********************** Days ***********************/\n\nimg {\n    width: 80%;\n    padding: 10%;\n}\n.icon {\n    background-color: rgba(223, 223, 223, 0.564);\n    width: 100%;\n}\nsection {\n    margin: 0 auto;\n    width: 350px;\n}\nh2 {\n    text-align: center;\n    font-size: 80px;\n    margin: 0;\n}\np {\n    margin: 0;\n}\n.wrapper {\n    background-color: rgb(255, 255, 255);\n    width: 350px;\n    margin: 0 auto;\n    padding-left: 0;\n    list-style: none;\n    display: grid;\n    grid-template-columns: repeat(5, 19.55%);\n    grid-gap: 2px;\n    align-items: center;\n    justify-items: center;\n}\n.inner-box {\n    height: 100%;\n    grid-column-start: 2; \n    grid-column-end: 5; \n    grid-row-start: 2; \n    grid-row-end: 5;\n    background-color: rgb(255, 255, 255);\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n    grid-template-rows: (80%, 20%);\n}\n.caption {\n    font-size: 25px;\n    grid-column-start: 1; \n    grid-column-end: 3; \n    grid-row-start: 1; \n    grid-row-end: 3;\n    text-align: center;\n    margin: 0;\n}\n.day-week, .week-number {\n    margin: 20% 0 0 0;\n    align-self: end;\n    font-size: 35px;\n}\n.week-number {\n    justify-self: end;\n}\n.sleep {\n    display: flex;\n    justify-content: space-between;\n    font-size: 25px;\n    margin: 0;\n}\n\n.weight {\n    font-size: 1.25em;\n    position: absolute;\n    margin: -45px 9px;\n}\n.time {\n    position: absolute;\n    font-size: 1.5em;\n    margin: -47px 20px;\n    border-radius: 50%;\n}\n\n@media (min-width: 48em) {\n/*********************** Nav ***********************/\n        .header li {\n            float: left;\n        }\n        .header li a {\n            padding: 30px 40px;\n            height: 100%;\n\n        }\n        .header .menu {\n            clear: none;\n            float: right;\n            max-height: none;\n        }\n        .header .menu-icon {\n            display: none\n        }\n        .days {\n            display: flex;\n            flex-wrap: wrap;\n        }\n    }", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Home_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Home/Home */ "./src/Components/Home/Home.js");
var _jsxFileName = "/Users/bonniepeters/Coding/dailies-digitally-squared/dailies-react/dailies/src/App.js";




class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Home_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Components/Days/Days.js":
/*!*************************************!*\
  !*** ./src/Components/Days/Days.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.json */ "./src/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data.json */ "./src/data.json", 1);
var _jsxFileName = "/Users/bonniepeters/Coding/dailies-digitally-squared/dailies-react/dailies/src/Components/Days/Days.js";


const MAX_LENGTH = 27;

class Days extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const days = _data_json__WEBPACK_IMPORTED_MODULE_1__.map(day => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "day-number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, day.numbered), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          backgroundColor: day.water ? "rgba(144,196,254,.7)" : "rgb(234,234,234)"
        },
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "icon-img",
        src: "" + "/images/water.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "icon",
        style: {
          backgroundColor: day.work ? "rgba(125,152,255,.7)" : "rgb(234,234,234)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "icon-img",
        src: "" + "/images/work.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "icon",
        style: {
          backgroundColor: day.connect ? "rgba(148,82,255,.7)" : "rgb(234,234,234)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "icon-img",
        src: "" + "/images/connection.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "icon",
        style: {
          backgroundColor: day.workout ? "rgba(184,82,255,.7)" : "rgb(234,234,234)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "icon-img",
        src: "" + "/images/workout.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "icon",
        style: {
          backgroundColor: day.music ? "rgba(225,82,250,.7)" : "rgb(234,234,234)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "icon-img",
        src: "" + "/images/music.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "icon",
        style: {
          backgroundColor: day.weight < 150 ? "rgba(181, 226, 254, 0.7)" : "rgb(234,234,234)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "icon-img",
        src: "" + "/images/weight.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "weight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, day.weight)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "inner-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, day.caption), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "day-week",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, day.week), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "week-number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, day.day)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "icon",
        style: {
          backgroundColor: day.code ? "rgba(227,116,166,.7)" : "rgb(234,234,234)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "" + "/images/code.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "icon",
        style: {
          backgroundColor: day.oils ? "rgba(181,253,254,.7)" : "rgb(234,234,234)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "" + "/images/oils.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "icon",
        style: {
          backgroundColor: day.mindful ? "rgba(226,117,105,.7)" : "rgb(234,234,234)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "" + "/images/mindful.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "icon",
        style: {
          backgroundColor: day.food ? "rgba(179,252,208,.7)" : "rgb(234,234,234)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "" + "/images/food.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "icon",
        style: {
          backgroundColor: day.read ? "rgba(232,149,105,.7)" : "rgb(234,234,234)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "" + "/images/read.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "icon",
        style: {
          backgroundColor: day.earth ? "rgba(178,253,170,.7)" : "rgb(234,234,234)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "" + "/images/earth.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "icon",
        style: {
          backgroundColor: day.outside ? "rgba(177,253,103,.7)" : "rgb(234,234,234)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "" + "/images/outside.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "icon",
        style: {
          backgroundColor: day.timeSlots > 30 ? "rgba(224,253,104,.7)" : "rgb(234,234,234)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "" + "/images/timeSlots.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "time",
        style: {
          backgroundColor: day.timeSlots > 30 ? "rgb(230,253,141)" : "rgb(234,234,234)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, day.timeSlots)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "icon",
        style: {
          backgroundColor: day.vitamins ? "rgba(254,253,105,.7)" : "rgb(234,234,234)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "" + "/images/vitamins.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "icon",
        style: {
          backgroundColor: day.learn ? "rgba(254,194,112,.7)" : "rgb(234,234,234)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "" + "/images/learn.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sleep",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "awake",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, day.awake), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "asleep",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, day.asleep)));
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "days",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, days);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Days);

/***/ }),

/***/ "./src/Components/Home/Home.js":
/*!*************************************!*\
  !*** ./src/Components/Home/Home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Nav/Nav */ "./src/Components/Nav/Nav.js");
/* harmony import */ var _Days_Days__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Days/Days */ "./src/Components/Days/Days.js");
var _jsxFileName = "/Users/bonniepeters/Coding/dailies-digitally-squared/dailies-react/dailies/src/Components/Home/Home.js";




class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Days_Days__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/Components/Nav/Nav.js":
/*!***********************************!*\
  !*** ./src/Components/Nav/Nav.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/bonniepeters/Coding/dailies-digitally-squared/dailies-react/dailies/src/Components/Nav/Nav.js";


class Nav extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      className: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, "Practically", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }), "Imperfect"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "menu-btn",
      type: "checkbox",
      id: "menu-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "menu-icon",
      for: "menu-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "nav-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Key"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"caption\":\"DAILY CAPTION... DAILY CAPTION... DAILY CAPTION... DAILY CAPTION... DAILY CAPTION... \",\"numbered\":1000,\"day\":\"TUE\",\"week\":1000,\"water\":true,\"work\":true,\"connect\":true,\"workout\":true,\"music\":true,\"code\":true,\"mindful\":true,\"read\":true,\"learn\":true,\"vitamins\":true,\"timeSlots\":40,\"outside\":true,\"earth\":true,\"food\":true,\"oils\":true,\"weight\":\"149.0\",\"awake\":\"06:00:00\",\"asleep\":\"21:00:00\"},{\"caption\":\"DAILY CAPTION... DAILY CAPTION... DAILY CAPTION... DAILY CAPTION... DAILY CAPTION... \",\"numbered\":1001,\"day\":\"MON\",\"week\":1000,\"water\":false,\"work\":false,\"connect\":false,\"workout\":false,\"music\":false,\"code\":false,\"mindful\":false,\"read\":false,\"learn\":false,\"vitamins\":false,\"timeSlots\":10,\"outside\":false,\"earth\":false,\"food\":false,\"oils\":false,\"weight\":\"175.0\",\"awake\":\"04:00:00\",\"asleep\":\"21:00:00\"},{\"caption\":\"DAILY CAPTION... DAILY CAPTION... DAILY CAPTION... DAILY CAPTION... DAILY CAPTION... \",\"numbered\":1002,\"day\":\"TUE\",\"week\":1000,\"water\":true,\"work\":true,\"connect\":true,\"workout\":true,\"music\":true,\"code\":true,\"mindful\":true,\"read\":true,\"learn\":true,\"vitamins\":true,\"timeSlots\":40,\"outside\":true,\"earth\":true,\"food\":true,\"oils\":true,\"weight\":\"172.0\",\"awake\":\"06:00:00\",\"asleep\":\"21:00:00\"},{\"caption\":\"DAILY CAPTION... DAILY CAPTION... DAILY CAPTION... DAILY CAPTION... DAILY CAPTION... \",\"numbered\":1003,\"day\":\"MON\",\"week\":1000,\"water\":false,\"work\":false,\"connect\":false,\"workout\":false,\"music\":false,\"code\":false,\"mindful\":false,\"read\":false,\"learn\":false,\"vitamins\":false,\"timeSlots\":10,\"outside\":false,\"earth\":false,\"food\":false,\"oils\":false,\"weight\":\"175.0\",\"awake\":\"04:00:00\",\"asleep\":\"21:00:00\"}]");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/bonniepeters/Coding/dailies-digitally-squared/dailies-react/dailies/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/bonniepeters/Coding/dailies-digitally-squared/dailies-react/dailies/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/bonniepeters/Coding/dailies-digitally-squared/dailies-react/dailies/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/bonniepeters/Coding/dailies-digitally-squared/dailies-react/dailies/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map
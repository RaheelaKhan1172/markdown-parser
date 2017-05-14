/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _Input = __webpack_require__(4);

var _Display = __webpack_require__(3);

var _marker = __webpack_require__(6);

var _marker2 = _interopRequireDefault(_marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputContainer = function (_React$Component) {
    _inherits(InputContainer, _React$Component);

    function InputContainer() {
        _classCallCheck(this, InputContainer);

        var _this = _possibleConstructorReturn(this, (InputContainer.__proto__ || Object.getPrototypeOf(InputContainer)).call(this));

        _this.state = { value: '' };
        _this.parsedVal = [];
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(InputContainer, [{
        key: "handleChange",
        value: function handleChange(event) {
            this.parsedVal = [];
            event.persist();
            console.log("the event", event.key);
            console.log(event.target.value, "the entered value");
            var val = _marker2.default.containsMarkDown(event.target.value);
            console.log("THE VAL", val);
            if (val) {
                for (var i = 0; i < val.length; i++) {
                    this.parsedVal[i] = val[i];
                }
            }
            console.log(this.parsedVal);
            this.setState(function () {
                return {
                    value: event.target.value
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(_Input.TextArea, { value: this.state.value, handleChange: this.handleChange //make this parse the text
                }),
                React.createElement(_Display.Display, { value: this.parsedVal })
            );
        }
    }]);

    return InputContainer;
}(React.Component);

exports.default = InputContainer;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Display = undefined;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createMarkup(val) {
    return { __html: val };
}
var Display = exports.Display = function Display(props) {
    return React.createElement(
        "div",
        { className: "display" },
        props.value.map(function (elem, ind) {
            return React.createElement("div", { dangerouslySetInnerHTML: createMarkup(elem.parsed) });
        })
    );
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextArea = undefined;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var TextArea = exports.TextArea = function TextArea(props) {
    return React.createElement(
        "div",
        { className: "t-a" },
        React.createElement("textarea", { value: props.value, onChange: props.handleChange })
    );
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(2);

var ReactDOM = _interopRequireWildcard(_reactDom);

var _InputContainer = __webpack_require__(1);

var _InputContainer2 = _interopRequireDefault(_InputContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Parser = function (_React$Component) {
    _inherits(Parser, _React$Component);

    function Parser() {
        _classCallCheck(this, Parser);

        return _possibleConstructorReturn(this, (Parser.__proto__ || Object.getPrototypeOf(Parser)).call(this));
    }

    _createClass(Parser, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(_InputContainer2.default, null)
            );
        }
    }]);

    return Parser;
}(React.Component);

exports.default = Parser;

ReactDOM.render(React.createElement(_InputContainer2.default, null), document.getElementById("container"));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var m = function () {
    var defaultSyntax = "span";
    var mSyntax = {
        "#": "h1",
        "##": "h2",
        "###": "h3",
        "####": "h4",
        "#####": "h5",
        "######": "h6",
        "*": "em",
        "**": "strong",
        "~~": "del"
    };
    var regexs = {
        "headers": {
            "atStart": /^(#+)/,
            "any": /(#+)/
        },
        "asteriskOne": /\*{1}(?=[^\*].*\*{1})/,
        "asteriskTwo": /\*{2}(?=[^\*].*\*{2})/,
        "del": /~{2}(?=[^~].*~{2})/
    };
    function parseHeaderAtStart(input) {
        console.log("inpuy", input, input.split(/\n/));
        //case 1, header match at start
        var reg = /(\s|\w).*/;
        var atStart = /^(#+)|(\n#+)|(\0#+)|(\r#+)|(\t#+)/;
        var match = input.match(reg);
        var theMarkdown = input.match(regexs.headers.atStart);
        var parsedVals = [];
        console.log("the match", match);
        var arr = void 0;
        var marks = void 0;
        /* regex is wrong for matching space or words so fix that */
        var splitted = input.split(/\n/).filter(function (elem) {
            return elem;
        });
        for (var i = 0; i < splitted.length; i++) {
            arr = reg.exec(splitted[i]);
            marks = atStart.exec(splitted[i]);
            var obj = { parsed: "" };
            if (!arr && marks) {
                obj.parsed = "<" + mSyntax[marks[0]] + ">" + splitted[i] + "</" + mSyntax[marks[0]] + ">";
            } else if (arr) {
                if (marks) {
                    obj.parsed = "<" + mSyntax[marks[0]] + ">" + arr[0] + "</" + mSyntax[marks[0]] + ">";
                } else {
                    obj.parsed = "<" + defaultSyntax + ">" + splitted[i] + "</" + defaultSyntax + ">";
                }
            } else {
                console.log("le split", splitted);
                obj.parsed = "<" + defaultSyntax + ">" + splitted[i] + "</" + defaultSyntax + ">";
            }
            console.log("arr", arr);
            console.log("marks", marks);
            parsedVals.push(obj);
        }
        /*while (((arr = reg.exec(input)) !== null) && ((marks = atStart.exec(input)) !== null)) {
          console.log("arr", arr);
          console.log("marks", marks);
          let mark = "";
          for (var i = 0; i < marks[0].length;i++) {
            if (marks[0][i] === "#") {
              mark += marks[0][i];
            }
          }
        
          parsedVals.push({md: mSyntax[mark], parsed: arr[0]});
        } */
        if (parsedVals.length) {
            return parsedVals;
        }
        console.log("intput");
        return [{ parsed: "<" + defaultSyntax + ">" + input + "</" + defaultSyntax + ">" }];
    }
    function parseAsterisk(input, type) {
        var extractReg = null;
        var textReg = null;
        var atIndex = null;
        if (type === "d") {
            extractReg = new RegExp(regexs.del);
            textReg = new RegExp(/~{2}([^~].*?)~{2}/);
            atIndex = 1;
        } else if (type === "a") {
            extractReg = new RegExp(regexs.asteriskOne);
            textReg = new RegExp(/(\*{1}([^\*].*?)\*{1})/);
        } else if (type === "a2") {
            extractReg = new RegExp(regexs.asteriskTwo);
            textReg = new RegExp(/(\*{2}([^\*].*?)\*{2})/);
        }
        atIndex = !atIndex ? 2 : 1;
        var parsedVals = [];
        var arr = void 0;
        var marks = void 0;
        var obj = { parsed: "" };
        console.log("the input", input, type);
        for (var i = 0; i < input.length; i++) {
            console.log("at i", input[i]);
            var hasMarks = false;
            arr = textReg.exec(_typeof(input[i]) === 'object' ? input[i].parsed : input[i]);
            marks = extractReg.exec(_typeof(input[i]) === 'object' ? input[i].parsed : input[i]);
            console.log("arr", arr);
            console.log("marks", marks);
            if (arr && marks) {
                obj.parsed = "<" + mSyntax[marks[0]] + ">" + arr[atIndex] + "</" + mSyntax[marks[0]] + ">";
                if (_typeof(input[i]) === 'object') {
                    input[i] = input[i].parsed.replace(arr[0], obj.parsed);
                } else {
                    input[i] = input[i].replace(arr[0], obj.parsed);
                }
                parsedVals.push(_typeof(input[i]) === 'object' ? input[i] : { parsed: input[i] });
            } else {
                console.log("arr after and marks", arr, marks, hasMarks);
                console.log("ey yo?", input[i], parsedVals);
                console.log("retry");
                parsedVals.push(_typeof(input[i]) === 'object' ? input[i] : { parsed: input[i] });
            }
        }
        console.log("parsed it", parsedVals);
        if (parsedVals.length) {
            return parsedVals;
        }
        /*
         arr = textReg.exec(typeof input[i] === 'object' ?   input[i].parsed : input[i]);
         marks = extractReg.exec(typeof input[i] === 'object' ?  input[i].parsed : input[i]);
         let obj = {parsed: ""};
         console.log("arr", arr, marks, marks[marks.length-1], marks[3]);
         if (arr) {
           if (marks) {
             obj.parsed = "<" + mSyntax[marks[0]] + ">" + arr[1] + "</" + mSyntax[marks[0]] + ">";
             if (typeof input[i] === 'object') {
               input[i] = input[i].parsed.replace(arr[0], obj.parsed);
             } else {
               input[i] = input[i].replace(arr[0], obj.parsed);
             }
           }
           parsedVals.push({parsed: input[i]});
         } else {
           parsedVals.push(typeof input[i] === 'object' ? input[i] : {parsed: input[i]});
         }
        }
           if (parsedVals.length) {
         return parsedVals;
        }
        */
        console.log("after", input);
        return [{ parsed: 'parsed' in input[0] ? input[0].parsed : input[0] }];
    }
    /* split up all the different regex
        go through the current line one by one and
        see if it is in input */
    function containsMarkDown(input) {
        var parsedVals = [];
        /* header parsing */
        var atStart = regexs.headers.atStart;
        var result = atStart.test(input);
        if (result) {
            parsedVals = parseHeaderAtStart(input);
        }
        console.log("yello", parsedVals);
        /* em, del, bold parsing */
        var asteriskTwo = regexs.asteriskTwo;
        var asteriskTwoResult = asteriskTwo.test(input);
        if (asteriskTwoResult) {
            parsedVals = parseAsterisk(parsedVals.length ? parsedVals : [input], "a2");
        }
        var asteriskOne = regexs.asteriskOne;
        var asteriskOneResult = asteriskOne.test(input);
        if (asteriskOneResult) {
            console.log("parsed", parsedVals);
            parsedVals = parseAsterisk(parsedVals.length ? parsedVals : [input], "a");
        }
        var del = regexs.del;
        var delResult = del.test(input);
        if (delResult) {
            parsedVals = parseAsterisk(parsedVals.length ? parsedVals : [input], "d");
        }
        if (parsedVals.length) {
            return parsedVals;
        }
        return [{ md: defaultSyntax, parsed: input }];
        /*console.log(result);
             if (!result) {
         result = any.test(input);
        }
             return result; */
    }
    function parseMarkDown(input) {
        var reg = /[#?]+/g;
        var toReturn = [];
        var myArray;
        console.log("regex", reg);
        while ((myArray = reg.exec(input)) !== null) {
            console.log("testing", myArray);
            console.log("reg", reg.lastIndex);
            toReturn.push(mSyntax[myArray[0]]);
        }
        var m = reg.exec(input);
        console.log("m", m, input, toReturn);
        if (toReturn.length) {
            return toReturn;
        }
        return [defaultSyntax];
    }
    /* remove markdown only if it's followed by
       another character */
    function removeMarkDown(input) {
        var reg = /[#?]+/;
        return input.split(reg).filter(function (elem) {
            return elem;
        }) || input;
        /*var toReturn = [];
        var arr;
        console.log("I return", toReturn);
        var fixed = [];
        for (var i = 0; i < toReturn.length;i++ ) {
          var currentElem = input.replace(toReturn[i][0]);
        }
             let m = input.match(reg);
        console.log(" match in remove", m);
        if (m) {
          return input.replace(m[0],"");
        }
             return input; */
    }
    return {
        containsMarkDown: containsMarkDown,
        removeMarkDown: removeMarkDown,
        parseMarkDown: parseMarkDown
    };
}();
exports.default = m;

/***/ })
/******/ ]);
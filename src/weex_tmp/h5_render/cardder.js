/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/4a75fddfcf5ffca24a0dc754c38c06c6', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/4a75fddfcf5ffca24a0dc754c38c06c6',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "cardder"
	  ],
	  "id": "cardder",
	  "style": {
	    "transformOrigin": function () {return this.transformOrigin},
	    "height": function () {return this.cardderHeight}
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "card"
	      ],
	      "repeat": function () {return this.cards},
	      "events": {
	        "click": "switchCard"
	      },
	      "attr": {
	        "ref": function () {return this.$index}
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "head"
	          ],
	          "style": {
	            "background": function () {return this.bgColor},
	            "borderColor": function () {return this.bgColor}
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.imageUrl}
	              },
	              "classList": [
	                "cardImage"
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "text"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 40,
	                    "fontWeight": "bold"
	                  },
	                  "attr": {
	                    "value": function () {return this.title}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "info"
	          ],
	          "children": [
	            {
	              "type": "input",
	              "attr": {
	                "value": function () {return this.content},
	                "ref": function () {return this.index}
	              },
	              "classList": [
	                "cardInput"
	              ],
	              "events": {
	                "change": "onChangeInfo"
	              }
	            },
	            {
	              "type": "div",
	              "classList": [
	                "confir"
	              ],
	              "events": {
	                "click": "onConfirm"
	              },
	              "attr": {
	                "ref": function () {return this.index}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "icon"
	                  ],
	                  "attr": {
	                    "src": function () {return this.confirImg}
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "padding": 10,
	                    "color": "#000000"
	                  },
	                  "attr": {
	                    "value": "确认修改"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "cardder": {
	    "position": "relative",
	    "zIndex": 10
	  },
	  "card": {
	    "position": "relative",
	    "overflow": "hidden",
	    "height": 120
	  },
	  "head": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "height": 120,
	    "borderWidth": 20,
	    "borderRadius": 15,
	    "flexDirection": "row",
	    "justifyContent": "center"
	  },
	  "cardImage": {
	    "height": 80,
	    "width": 80
	  },
	  "text": {
	    "padding": 20,
	    "textAlign": "center",
	    "color": "#F2FFFF",
	    "width": 630
	  },
	  "info": {
	    "height": 100,
	    "position": "absolute",
	    "top": 130,
	    "flexDirection": "row",
	    "justifyContent": "flex-end"
	  },
	  "cardInput": {
	    "height": 60,
	    "flex": 4,
	    "marginLeft": 50
	  },
	  "confir": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "flex": 1,
	    "marginLeft": 10
	  },
	  "icon": {
	    "height": 50,
	    "width": 50
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	var _stringify = __webpack_require__(4);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var animation = __weex_require__('@weex-module/animation');
	var host = location.origin;
	module.exports = {
	  data: function () {return {
	    cards: [],
	    selected: 0,
	    cardderHeight: "600",
	    transformOrigin: "center center",
	    controlAnim: 0,
	    confirImg: host + '/img/confir.png',
	    username: '',
	    userTel: '',
	    userAddress: '',
	    userPWD: ''
	  }},
	  created: function created() {},

	  methods: {
	    animate: function animate(el, height) {
	      animation.transition(el, {
	        styles: {
	          color: '#FF0000',
	          height: height,

	          transformOrigin: 'center center'
	        },
	        duration: 0,
	        timingFunction: 'ease',
	        delay: 0 }, function () {
	        nativeLog('animation finished.');
	      });
	    },
	    switchCard: function switchCard(event) {

	      var index = event.target.attr.ref;
	      var currIndex = index;

	      var vm = this;
	      var elements = this.$el('cardder').children.filter(function (item) {
	        return item.type == 'div';
	      });
	      console.log(elements);
	      elements.forEach(function (item) {
	        if (item.attr.ref == currIndex) {
	          vm.animate(item, 200);
	        } else {
	          vm.animate(item, 100);
	        }
	      });
	    },

	    onChangeInfo: function onChangeInfo(e) {
	      var info = e.target.attr.value;
	      var index = e.target.attr.ref;
	      switch (index) {
	        case 0:
	          this.userTel = info;
	          break;
	        case 1:
	          this.userAddress = info;
	          break;
	        case 2:
	          this.userPWD = info;
	          break;
	      }
	    },

	    onConfirm: function onConfirm(e) {
	      var index = e.target.attr.ref;
	      this.handlerInfo();
	    },
	    handlerInfo: function handlerInfo() {
	      var $modal = __weex_require__('@weex-module/modal');
	      var stream = __weex_require__('@weex-module/stream');
	      stream.fetch({
	        method: 'GET',
	        url: "",
	        type: 'jsonp',
	        body: {
	          userId: this.userId,
	          userTel: this.userIel,
	          userAddress: this.userAddress,
	          userPWD: this.userPWD
	        }
	      }, function (ret) {
	        if (!ret.ok) {
	          $modal.toast({ 'message': "request failed", duration: 3 });
	        } else {
	          console.log('get:' + (0, _stringify2.default)(ret));
	          $modal.toast({ 'message': '修改成功', duration: 3 });
	        }
	      }, function (res) {
	        console.log(res);
	      });
	    }

	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(6)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }
/******/ ]);
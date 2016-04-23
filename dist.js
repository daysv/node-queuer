module.exports =
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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Queue = function (_EventEmitter) {
	    _inherits(Queue, _EventEmitter);

	    function Queue() {
	        _classCallCheck(this, Queue);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Queue).call(this));

	        _this._queue = [];
	        _this._process = false;
	        return _this;
	    }

	    _createClass(Queue, [{
	        key: 'task',
	        value: function task() {
	            var _this2 = this;

	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }

	            if (args.length === 0) throw TypeError('Function required');
	            args.forEach(function (fn) {
	                if (fn.constructor.name !== 'Function') throw TypeError('Function required');
	                _this2._queue.push(fn);
	            });
	            if (!this._process && this._queue.length) {
	                this._apply();
	            }
	        }
	    }, {
	        key: '_apply',
	        value: function _apply() {
	            var _this3 = this;

	            this._process = true;
	            this._queue.shift().call(this, function (err) {
	                if (err) _this3.emit('error', err);
	                _this3._process = false;
	                if (!_this3._process && _this3._queue.length) {
	                    setImmediate(function () {
	                        _this3._apply.call(_this3);
	                    });
	                } else if (_this3._queue.length === 0) {
	                    _this3.emit('end');
	                }
	            });
	        }
	    }, {
	        key: 'queue',
	        get: function get() {
	            return this._queue;
	        }
	    }]);

	    return Queue;
	}(_events.EventEmitter);

	exports.default = Queue;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("events");

/***/ }
/******/ ]);
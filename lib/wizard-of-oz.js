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

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Wizard = _react2.default.createClass({
	  displayName: 'Wizard',
	  getInitialState: function getInitialState() {
	    return {
	      currentStepNo: 0
	    };
	  },
	  getButtons: function getButtons(disabledButtons, index, length) {
	    var backeventHandler = this.goto.bind(this, 'back');
	    var nexteventHandler = this.goto.bind(this, 'next');
	    var backButton = index > 0 && disabledButtons.indexOf('back') == -1 ? _react2.default.createElement(
	      'button',
	      { onClick: backeventHandler },
	      'Back'
	    ) : '';
	    var nextButton = index < length - 1 && disabledButtons.indexOf('next') == -1 ? _react2.default.createElement(
	      'button',
	      { onClick: nexteventHandler },
	      'Next'
	    ) : '';
	    return _react2.default.createElement(
	      'div',
	      { className: 'buttonContainer' },
	      backButton,
	      nextButton
	    );
	  },
	  goto: function goto(position) {
	    var steps = this.props.steps;
	    var currentStepNo = this.state.currentStepNo;
	    if (currentStepNo > -1 && currentStepNo < steps.length) {
	      var nextStepNo;
	      switch (position) {
	        case 'back':
	          nextStepNo = currentStepNo - 1;
	          break;
	        case 'next':
	          nextStepNo = currentStepNo + 1;
	          break;
	      }
	      this.setState({
	        currentStepNo: nextStepNo
	      });
	    } else {
	      alert('No way!');
	    }
	  },
	  render: function render() {
	    var html;
	    var steps = this.props.steps;
	    if (steps && steps.length > 0) {
	      var length = steps.length;
	      var currentStep = steps[this.state.currentStepNo];
	      html = _react2.default.createElement(
	        'div',
	        null,
	        currentStep.component,
	        this.getButtons(currentStep.disabledButtons || [], this.state.currentStepNo, length)
	      );
	    } else {
	      html = _react2.default.createElement(
	        'div',
	        null,
	        'No steps here'
	      );
	    }
	    return html;
	  }
	});

	exports.default = Wizard;

	var Step = _react2.default.createClass({
	  displayName: 'Step',
	  getInitialState: function getInitialState() {
	    return {};
	  },
	  render: function render() {
	    if (this.props.type === 'text') {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.text
	      );
	    } else {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.children
	      );
	    }
	  }
	});

	exports.default = Step;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ }
/******/ ]);
webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(158);
	
	var _src = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../../src\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _steps = __webpack_require__(159);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Steps = [{ name: 'Step 1', component: _react2.default.createElement(_src.Step, { type: 'component', children: _react2.default.createElement(_steps.FirstStep, null) }) }, { name: 'Step 2', component: _react2.default.createElement(_src.Step, { type: 'text', text: 'Step 2' }) }, { name: 'Step 3', component: _react2.default.createElement(_src.Step, { type: 'text', text: 'Step 3' }) }, { name: 'Step 4', component: _react2.default.createElement(_src.Step, { type: 'text', text: 'Step 4' }) }];
	
	var Simple = _react2.default.createClass({
	  displayName: 'Simple',
	  render: function render() {
	    return _react2.default.createElement(_src.Wizard, { steps: Steps });
	  }
	});
	
	exports.default = Simple;
	
	(0, _reactDom.render)(_react2.default.createElement(Simple, null), document.getElementById('simpleexample'));

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(3);

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FirstStep = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FirstStep = exports.FirstStep = function (_Component) {
	  _inherits(FirstStep, _Component);
	
	  function FirstStep() {
	    _classCallCheck(this, FirstStep);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FirstStep).apply(this, arguments));
	  }
	
	  _createClass(FirstStep, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'This is the first step'
	      );
	    }
	  }]);
	
	  return FirstStep;
	}(_react.Component);

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zaW1wbGUvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NpbXBsZS9zcmMvc3RlcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxLQUFNLFFBQVEsQ0FDWixFQUFDLE1BQUssUUFBTCxFQUFlLFdBQVksMkNBQU0sTUFBSyxXQUFMLEVBQWlCLFVBQVUscURBQVYsRUFBdkIsQ0FBWixFQURKLEVBRVosRUFBQyxNQUFLLFFBQUwsRUFBZSxXQUFZLDJDQUFNLE1BQUssTUFBTCxFQUFZLE1BQUssUUFBTCxFQUFsQixDQUFaLEVBRkosRUFHWixFQUFDLE1BQUssUUFBTCxFQUFlLFdBQVksMkNBQU0sTUFBSyxNQUFMLEVBQVksTUFBSyxRQUFMLEVBQWxCLENBQVosRUFISixFQUlaLEVBQUMsTUFBSyxRQUFMLEVBQWUsV0FBWSwyQ0FBTSxNQUFLLE1BQUwsRUFBWSxNQUFLLFFBQUwsRUFBbEIsQ0FBWixFQUpKLENBQVI7O0FBT04sS0FBTSxTQUFTLGdCQUFNLFdBQU4sQ0FBa0I7O0FBQy9CLDZCQUFRO0FBQ04sWUFBUSw2Q0FBUSxPQUFPLEtBQVAsRUFBUixDQUFSLENBRE07SUFEdUI7RUFBbEIsQ0FBVDs7bUJBTVM7O0FBRWYsdUJBQU8sOEJBQUMsTUFBRCxPQUFQLEVBQWtCLFNBQVMsY0FBVCxDQUF3QixlQUF4QixDQUFsQixFOzs7Ozs7O0FDcEJBOztBQUVBLFFBQU8sT0FBUCxHQUFpQixvQkFBUSxDQUFSLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NBYTs7Ozs7Ozs7Ozs7OEJBQ0g7QUFDTixjQUFROzs7O1FBQVIsQ0FETTs7OztVQURHIiwiZmlsZSI6InNpbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IFdpemFyZCwgU3RlcCB9IGZyb20gJy4uLy4uLy4uL3NyYydcbmltcG9ydCB7IEZpcnN0U3RlcCB9IGZyb20gJy4vc3RlcHMnXG5cbmNvbnN0IFN0ZXBzID0gW1xuICB7bmFtZTonU3RlcCAxJywgY29tcG9uZW50IDogPFN0ZXAgdHlwZT0nY29tcG9uZW50JyBjaGlsZHJlbj17PEZpcnN0U3RlcC8+fS8+fSxcbiAge25hbWU6J1N0ZXAgMicsIGNvbXBvbmVudCA6IDxTdGVwIHR5cGU9J3RleHQnIHRleHQ9J1N0ZXAgMicvPn0sXG4gIHtuYW1lOidTdGVwIDMnLCBjb21wb25lbnQgOiA8U3RlcCB0eXBlPSd0ZXh0JyB0ZXh0PSdTdGVwIDMnLz59LFxuICB7bmFtZTonU3RlcCA0JywgY29tcG9uZW50IDogPFN0ZXAgdHlwZT0ndGV4dCcgdGV4dD0nU3RlcCA0Jy8+fVxuXVxuXG5jb25zdCBTaW1wbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoPFdpemFyZCBzdGVwcz17U3RlcHN9Lz4pXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZVxuXG5yZW5kZXIoPFNpbXBsZS8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2ltcGxlZXhhbXBsZScpKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9zaW1wbGUvc3JjL2luZGV4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9SZWFjdERPTScpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3JlYWN0LWRvbS9pbmRleC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNsYXNzIEZpcnN0U3RlcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoPGRpdj5UaGlzIGlzIHRoZSBmaXJzdCBzdGVwPC9kaXY+KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL3NpbXBsZS9zcmMvc3RlcHMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
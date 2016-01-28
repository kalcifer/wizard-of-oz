webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Step = exports.Wizard = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Wizard = exports.Wizard = function (_Component) {
	  _inherits(Wizard, _Component);
	
	  function Wizard() {
	    _classCallCheck(this, Wizard);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Wizard).call(this));
	
	    _this.state = {
	      currentStepNo: 0
	    };
	    return _this;
	  }
	
	  _createClass(Wizard, [{
	    key: 'getButtons',
	    value: function getButtons(disabledButtons, index, length) {
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
	    }
	  }, {
	    key: 'goto',
	    value: function goto(position) {
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
	    }
	  }, {
	    key: 'render',
	    value: function render() {
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
	  }]);
	
	  return Wizard;
	}(_react.Component);
	
	;
	
	var Step = exports.Step = function (_Component2) {
	  _inherits(Step, _Component2);
	
	  function Step() {
	    _classCallCheck(this, Step);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Step).call(this));
	  }
	
	  _createClass(Step, [{
	    key: 'render',
	    value: function render() {
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
	  }]);
	
	  return Step;
	}(_react.Component);
	
	;

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUVhOzs7QUFDWCxZQURXLE1BQ1gsR0FBYTsyQkFERixRQUNFOzt3RUFERixvQkFDRTs7QUFFWCxXQUFLLEtBQUwsR0FBYTtBQUNYLHNCQUFjLENBQWQ7TUFERixDQUZXOztJQUFiOztnQkFEVzs7Z0NBT0EsaUJBQWlCLE9BQU8sUUFBTztBQUN4QyxXQUFJLG1CQUFtQixLQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsSUFBZixFQUFxQixNQUFyQixDQUFuQixDQURvQztBQUV4QyxXQUFJLG1CQUFtQixLQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsSUFBZixFQUFxQixNQUFyQixDQUFuQixDQUZvQztBQUd4QyxXQUFJLGFBQWEsS0FBQyxHQUFRLENBQVIsSUFBYSxnQkFBZ0IsT0FBaEIsQ0FBd0IsTUFBeEIsS0FBbUMsQ0FBQyxDQUFELEdBQU07O1dBQVEsU0FBUyxnQkFBVCxFQUFSOztRQUF2RCxHQUEwRyxFQUExRyxDQUh1QjtBQUl4QyxXQUFJLGFBQWEsS0FBQyxHQUFRLFNBQVEsQ0FBUixJQUFhLGdCQUFnQixPQUFoQixDQUF3QixNQUF4QixLQUFtQyxDQUFDLENBQUQsR0FBTTs7V0FBUSxTQUFTLGdCQUFULEVBQVI7O1FBQS9ELEdBQWtILEVBQWxILENBSnVCO0FBS3hDLGNBQ0U7O1dBQUssV0FBVSxpQkFBVixFQUFMO1NBQ0csVUFESDtTQUVHLFVBRkg7UUFERixDQUx3Qzs7OzswQkFZckMsVUFBUztBQUNaLFdBQUksUUFBUSxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBREE7QUFFWixXQUFJLGdCQUFnQixLQUFLLEtBQUwsQ0FBVyxhQUFYLENBRlI7QUFHWixXQUFHLGdCQUFnQixDQUFDLENBQUQsSUFBTSxnQkFBZ0IsTUFBTSxNQUFOLEVBQWE7QUFDcEQsYUFBSSxVQUFKLENBRG9EO0FBRXBELGlCQUFPLFFBQVA7QUFDRSxnQkFBSyxNQUFMO0FBQ0UsMEJBQWEsZ0JBQWdCLENBQWhCLENBRGY7QUFFRSxtQkFGRjtBQURGLGdCQUlPLE1BQUw7QUFDRSwwQkFBYSxnQkFBZ0IsQ0FBaEIsQ0FEZjtBQUVFLG1CQUZGO0FBSkYsVUFGb0Q7QUFVcEQsY0FBSyxRQUFMLENBQWM7QUFDWiwwQkFBZSxVQUFmO1VBREYsRUFWb0Q7UUFBdEQsTUFjTztBQUNMLGVBQU0sU0FBTixFQURLO1FBZFA7Ozs7OEJBa0JNO0FBQ04sV0FBSSxJQUFKLENBRE07QUFFTixXQUFJLFFBQVEsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUZOO0FBR04sV0FBRyxTQUFTLE1BQU0sTUFBTixHQUFlLENBQWYsRUFBaUI7QUFDekIsYUFBSSxTQUFTLE1BQU0sTUFBTixDQURZO0FBRXpCLGFBQUksY0FBYyxNQUFNLEtBQUssS0FBTCxDQUFXLGFBQVgsQ0FBcEIsQ0FGcUI7QUFHekIsZ0JBQVE7OztXQUNLLFlBQVksU0FBWjtXQUNBLEtBQUssVUFBTCxDQUFnQixZQUFZLGVBQVosSUFBK0IsRUFBL0IsRUFBbUMsS0FBSyxLQUFMLENBQVcsYUFBWCxFQUEwQixNQUE3RSxDQUZMO1VBQVIsQ0FIeUI7UUFBN0IsTUFRTztBQUNMLGdCQUFROzs7O1VBQVIsQ0FESztRQVJQO0FBV0EsY0FBTyxJQUFQLENBZE07Ozs7VUF4Q0c7OztBQXdEWjs7S0FHWTs7O0FBQ1gsWUFEVyxJQUNYLEdBQWE7MkJBREYsTUFDRTs7bUVBREYsa0JBQ0U7SUFBYjs7Z0JBRFc7OzhCQUlIO0FBQ04sV0FBRyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEtBQW9CLE1BQXBCLEVBQTJCO0FBQzVCLGdCQUNFOzs7V0FDRyxLQUFLLEtBQUwsQ0FBVyxJQUFYO1VBRkwsQ0FENEI7UUFBOUIsTUFNTztBQUNMLGdCQUNFOzs7V0FBTSxLQUFLLEtBQUwsQ0FBVyxRQUFYO1VBRFIsQ0FESztRQU5QOzs7O1VBTFM7OztBQWlCWixFIiwiZmlsZSI6IndpemFyZC1vZi1vei5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY2xhc3MgV2l6YXJkIGV4dGVuZHMgQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnRTdGVwTm86MFxuICAgIH1cbiAgfVxuICBnZXRCdXR0b25zKGRpc2FibGVkQnV0dG9ucywgaW5kZXgsIGxlbmd0aCl7XG4gICAgdmFyIGJhY2tldmVudEhhbmRsZXIgPSB0aGlzLmdvdG8uYmluZCh0aGlzLCAnYmFjaycpO1xuICAgIHZhciBuZXh0ZXZlbnRIYW5kbGVyID0gdGhpcy5nb3RvLmJpbmQodGhpcywgJ25leHQnKTtcbiAgICB2YXIgYmFja0J1dHRvbiA9IChpbmRleCA+IDAgJiYgZGlzYWJsZWRCdXR0b25zLmluZGV4T2YoJ2JhY2snKSA9PSAtMSkgPyA8YnV0dG9uIG9uQ2xpY2s9e2JhY2tldmVudEhhbmRsZXJ9PkJhY2s8L2J1dHRvbj4gOiAnJztcbiAgICB2YXIgbmV4dEJ1dHRvbiA9IChpbmRleCA8IGxlbmd0aCAtMSAmJiBkaXNhYmxlZEJ1dHRvbnMuaW5kZXhPZignbmV4dCcpID09IC0xKSA/IDxidXR0b24gb25DbGljaz17bmV4dGV2ZW50SGFuZGxlcn0+TmV4dDwvYnV0dG9uPiA6ICcnXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25Db250YWluZXInPlxuICAgICAgICB7YmFja0J1dHRvbn1cbiAgICAgICAge25leHRCdXR0b259XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgZ290byhwb3NpdGlvbil7XG4gICAgdmFyIHN0ZXBzID0gdGhpcy5wcm9wcy5zdGVwcztcbiAgICB2YXIgY3VycmVudFN0ZXBObyA9IHRoaXMuc3RhdGUuY3VycmVudFN0ZXBObztcbiAgICBpZihjdXJyZW50U3RlcE5vID4gLTEgJiYgY3VycmVudFN0ZXBObyA8IHN0ZXBzLmxlbmd0aCl7XG4gICAgICB2YXIgbmV4dFN0ZXBOb1xuICAgICAgc3dpdGNoKHBvc2l0aW9uKXtcbiAgICAgICAgY2FzZSAnYmFjaycgOlxuICAgICAgICAgIG5leHRTdGVwTm8gPSBjdXJyZW50U3RlcE5vIC0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbmV4dCcgOlxuICAgICAgICAgIG5leHRTdGVwTm8gPSBjdXJyZW50U3RlcE5vICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjdXJyZW50U3RlcE5vOiBuZXh0U3RlcE5vXG4gICAgICB9KVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdObyB3YXkhJylcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgdmFyIGh0bWw7XG4gICAgdmFyIHN0ZXBzID0gdGhpcy5wcm9wcy5zdGVwcztcbiAgICBpZihzdGVwcyAmJiBzdGVwcy5sZW5ndGggPiAwKXtcbiAgICAgICAgdmFyIGxlbmd0aCA9IHN0ZXBzLmxlbmd0aDtcbiAgICAgICAgdmFyIGN1cnJlbnRTdGVwID0gc3RlcHNbdGhpcy5zdGF0ZS5jdXJyZW50U3RlcE5vXVxuICAgICAgICBodG1sID0gKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtjdXJyZW50U3RlcC5jb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmdldEJ1dHRvbnMoY3VycmVudFN0ZXAuZGlzYWJsZWRCdXR0b25zIHx8IFtdLCB0aGlzLnN0YXRlLmN1cnJlbnRTdGVwTm8sIGxlbmd0aCl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBodG1sID0gKDxkaXY+Tm8gc3RlcHMgaGVyZTwvZGl2PilcbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn07XG5cblxuZXhwb3J0IGNsYXNzIFN0ZXAgZXh0ZW5kcyBDb21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIGlmKHRoaXMucHJvcHMudHlwZSA9PT0gJ3RleHQnKXtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3RoaXMucHJvcHMudGV4dH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybihcbiAgICAgICAgPGRpdj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=
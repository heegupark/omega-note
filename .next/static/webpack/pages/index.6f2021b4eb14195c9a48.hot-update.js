webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/main */ \"./components/main.tsx\");\n/* harmony import */ var _components_index_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/index-page */ \"./components/index-page.tsx\");\n/* harmony import */ var _components_disclaimer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/disclaimer */ \"./components/disclaimer.tsx\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar _default = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_default, _Component);\n\n  var _super = _createSuper(_default);\n\n  function _default(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, _default);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      isAcceptDisclaimer: ''\n    };\n    _this.setIsAcceptDisclaimer = _this.setIsAcceptDisclaimer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_default, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (localStorage.getItem('omegakanbanaccept')) {\n        setIsAcceptDisclaimer(true);\n      }\n    }\n  }, {\n    key: \"setIsAcceptDisclaimer\",\n    value: function setIsAcceptDisclaimer() {\n      this.setState({\n        isAcceptDisclaimer: true\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_components_index_page__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 9\n        }\n      }), __jsx(_components_main__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 9\n        }\n      }), !this.state.isAcceptDisclaimer && __jsx(_components_disclaimer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        setIsAcceptDisclaimer: this.setIsAcceptDisclaimer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }\n      }));\n    }\n  }]);\n\n  return _default;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsImlzQWNjZXB0RGlzY2xhaW1lciIsInNldElzQWNjZXB0RGlzY2xhaW1lciIsImJpbmQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPRSxvQkFBWUEsS0FBWixFQUErQjtBQUFBOztBQUFBOztBQUM3Qiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyx3QkFBa0IsRUFBRTtBQURULEtBQWI7QUFHQSxVQUFLQyxxQkFBTCxHQUE2QixNQUFLQSxxQkFBTCxDQUEyQkMsSUFBM0IseUdBQTdCO0FBTDZCO0FBTTlCOzs7O3dDQUVtQjtBQUNsQixVQUFJQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsbUJBQXJCLENBQUosRUFBK0M7QUFDN0NILDZCQUFxQixDQUFDLElBQUQsQ0FBckI7QUFDRDtBQUNGOzs7NENBQ3VCO0FBQ3RCLFdBQUtJLFFBQUwsQ0FBYztBQUNaTCwwQkFBa0IsRUFBRTtBQURSLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQ1AsYUFDRSxtRUFDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLEVBR0csQ0FBQyxLQUFLRCxLQUFMLENBQVdDLGtCQUFaLElBQ0MsTUFBQyw4REFBRDtBQUFZLDZCQUFxQixFQUFFLEtBQUtDLHFCQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSkosQ0FERjtBQVNEOzs7O0VBOUIwQkssK0MiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluJztcbmltcG9ydCBJbmRleFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleC1wYWdlJztcbmltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4uL2NvbXBvbmVudHMvZGlzY2xhaW1lcic7XG5cbmludGVyZmFjZSBJbmRleFByb3BzIHtcbiAgaXNBY2NlcHREaXNjbGFpbWVyOiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJbmRleFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0FjY2VwdERpc2NsYWltZXI6ICcnLFxuICAgIH07XG4gICAgdGhpcy5zZXRJc0FjY2VwdERpc2NsYWltZXIgPSB0aGlzLnNldElzQWNjZXB0RGlzY2xhaW1lci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvbWVnYWthbmJhbmFjY2VwdCcpKSB7XG4gICAgICBzZXRJc0FjY2VwdERpc2NsYWltZXIodHJ1ZSk7XG4gICAgfVxuICB9XG4gIHNldElzQWNjZXB0RGlzY2xhaW1lcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzQWNjZXB0RGlzY2xhaW1lcjogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEluZGV4UGFnZSAvPlxuICAgICAgICA8TWFpbiAvPlxuICAgICAgICB7IXRoaXMuc3RhdGUuaXNBY2NlcHREaXNjbGFpbWVyICYmIChcbiAgICAgICAgICA8RGlzY2xhaW1lciBzZXRJc0FjY2VwdERpc2NsYWltZXI9e3RoaXMuc2V0SXNBY2NlcHREaXNjbGFpbWVyfSAvPlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
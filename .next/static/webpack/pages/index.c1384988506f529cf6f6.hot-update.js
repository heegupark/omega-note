webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor-title.tsx":
/*!*************************************!*\
  !*** ./components/editor-title.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EditorTitle; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor-title.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      alignItems: 'center',\n      height: '40px'\n    },\n    style: {\n      color: 'rgb(136,141,144)',\n      margin: '5px 10px',\n      padding: '3px 6px',\n      cursor: 'pointer',\n      '&:hover': {\n        backgroundColor: 'rgb(235,235,235)',\n        borderRadius: '5px'\n      }\n    },\n    icon: {\n      marginRight: '5px',\n      verticalAlign: 'middle'\n    },\n    title: {\n      verticalAlign: 'middle'\n    },\n    date: {\n      position: 'absolute',\n      \"float\": 'right',\n      fontSize: '12px',\n      top: '10px',\n      right: '20px'\n    }\n  });\n});\nfunction EditorTitle(props) {\n  _s();\n\n  var classes = useStyles();\n  var updateAt = null;\n  props.notebooks[props.notebook].notes.map(function (note) {\n    if (note.id === props.currentNote) {\n      updateAt = note.updatedAt;\n    }\n  });\n  console.log(updateAt);\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: classes.style,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiBook\"], {\n    className: classes.icon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    className: classes.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, props.notebooks[props.notebook].title), __jsx(\"span\", {\n    className: classes.date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, 'Last edited on ', props.formatDate(updateAt))));\n}\n\n_s(EditorTitle, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = EditorTitle;\n\nvar _c;\n\n$RefreshReg$(_c, \"EditorTitle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3ItdGl0bGUudHN4P2MzNzEiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0Iiwic3R5bGUiLCJjb2xvciIsIm1hcmdpbiIsInBhZGRpbmciLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJpY29uIiwibWFyZ2luUmlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwidGl0bGUiLCJkYXRlIiwicG9zaXRpb24iLCJmb250U2l6ZSIsInRvcCIsInJpZ2h0IiwiRWRpdG9yVGl0bGUiLCJwcm9wcyIsImNsYXNzZXMiLCJ1cGRhdGVBdCIsIm5vdGVib29rcyIsIm5vdGVib29rIiwibm90ZXMiLCJtYXAiLCJub3RlIiwiaWQiLCJjdXJyZW50Tm90ZSIsInVwZGF0ZWRBdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JtYXREYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE1BREw7QUFFSkMsZ0JBQVUsRUFBRSxRQUZSO0FBR0pDLFlBQU0sRUFBRTtBQUhKLEtBREs7QUFNWEMsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRSxrQkFERjtBQUVMQyxZQUFNLEVBQUUsVUFGSDtBQUdMQyxhQUFPLEVBQUUsU0FISjtBQUlMQyxZQUFNLEVBQUUsU0FKSDtBQUtMLGlCQUFXO0FBQ1RDLHVCQUFlLEVBQUUsa0JBRFI7QUFFVEMsb0JBQVksRUFBRTtBQUZMO0FBTE4sS0FOSTtBQWdCWEMsUUFBSSxFQUFFO0FBQ0pDLGlCQUFXLEVBQUUsS0FEVDtBQUVKQyxtQkFBYSxFQUFFO0FBRlgsS0FoQks7QUFvQlhDLFNBQUssRUFBRTtBQUNMRCxtQkFBYSxFQUFFO0FBRFYsS0FwQkk7QUF1QlhFLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUUsVUFETjtBQUVKLGVBQU8sT0FGSDtBQUdKQyxjQUFRLEVBQUUsTUFITjtBQUlKQyxTQUFHLEVBQUUsTUFKRDtBQUtKQyxXQUFLLEVBQUU7QUFMSDtBQXZCSyxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCO0FBa0NlLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQWlDO0FBQUE7O0FBQzlDLE1BQU1DLE9BQU8sR0FBRzFCLFNBQVMsRUFBekI7QUFDQSxNQUFJMkIsUUFBUSxHQUFHLElBQWY7QUFDQUYsT0FBSyxDQUFDRyxTQUFOLENBQWdCSCxLQUFLLENBQUNJLFFBQXRCLEVBQWdDQyxLQUFoQyxDQUFzQ0MsR0FBdEMsQ0FBMEMsVUFBQ0MsSUFBRCxFQUFlO0FBQ3ZELFFBQUlBLElBQUksQ0FBQ0MsRUFBTCxLQUFZUixLQUFLLENBQUNTLFdBQXRCLEVBQW1DO0FBQ2pDUCxjQUFRLEdBQUdLLElBQUksQ0FBQ0csU0FBaEI7QUFDRDtBQUNGLEdBSkQ7QUFLQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlWLFFBQVo7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFFRCxPQUFPLENBQUN0QixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUVzQixPQUFPLENBQUNsQixLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFRLGFBQVMsRUFBRWtCLE9BQU8sQ0FBQ1gsSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTSxhQUFTLEVBQUVXLE9BQU8sQ0FBQ1IsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTyxLQUFLLENBQUNHLFNBQU4sQ0FBZ0JILEtBQUssQ0FBQ0ksUUFBdEIsRUFBZ0NYLEtBRG5DLENBRkYsRUFLRTtBQUFNLGFBQVMsRUFBRVEsT0FBTyxDQUFDUCxJQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csaUJBREgsRUFFR00sS0FBSyxDQUFDYSxVQUFOLENBQWlCWCxRQUFqQixDQUZILENBTEYsQ0FERixDQURGO0FBY0Q7O0dBdkJ1QkgsVztVQUNOeEIsUzs7O0tBRE13QixXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9lZGl0b3ItdGl0bGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpQm9vayB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICB9LFxuICAgIHN0eWxlOiB7XG4gICAgICBjb2xvcjogJ3JnYigxMzYsMTQxLDE0NCknLFxuICAgICAgbWFyZ2luOiAnNXB4IDEwcHgnLFxuICAgICAgcGFkZGluZzogJzNweCA2cHgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIzNSwyMzUsMjM1KScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgbWFyZ2luUmlnaHQ6ICc1cHgnLFxuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgfSxcbiAgICBkYXRlOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgIHRvcDogJzEwcHgnLFxuICAgICAgcmlnaHQ6ICcyMHB4JyxcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yVGl0bGUocHJvcHM6IGFueSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGxldCB1cGRhdGVBdCA9IG51bGw7XG4gIHByb3BzLm5vdGVib29rc1twcm9wcy5ub3RlYm9va10ubm90ZXMubWFwKChub3RlOiBhbnkpID0+IHtcbiAgICBpZiAobm90ZS5pZCA9PT0gcHJvcHMuY3VycmVudE5vdGUpIHtcbiAgICAgIHVwZGF0ZUF0ID0gbm90ZS51cGRhdGVkQXQ7XG4gICAgfVxuICB9KTtcbiAgY29uc29sZS5sb2codXBkYXRlQXQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlfT5cbiAgICAgICAgPEZpQm9vayBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICB7cHJvcHMubm90ZWJvb2tzW3Byb3BzLm5vdGVib29rXS50aXRsZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+XG4gICAgICAgICAgeydMYXN0IGVkaXRlZCBvbiAnfVxuICAgICAgICAgIHtwcm9wcy5mb3JtYXREYXRlKHVwZGF0ZUF0KX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/editor-title.tsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor-title.tsx":
/*!*************************************!*\
  !*** ./components/editor-title.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EditorTitle; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor-title.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      alignItems: 'center',\n      height: '40px'\n    },\n    style: {\n      color: 'rgb(136,141,144)',\n      margin: '5px 10px',\n      padding: '3px 6px',\n      cursor: 'pointer',\n      '&:hover': {\n        backgroundColor: 'rgb(235,235,235)',\n        borderRadius: '5px'\n      }\n    },\n    icon: {\n      marginRight: '5px',\n      verticalAlign: 'middle'\n    },\n    title: {\n      verticalAlign: 'middle'\n    },\n    date: {\n      position: 'absolute',\n      \"float\": 'right',\n      fontSize: '12px',\n      top: '10px',\n      right: '20px'\n    }\n  });\n});\nfunction EditorTitle(props) {\n  _s();\n\n  var classes = useStyles();\n  var updateAt = new Date();\n  props.notebooks[props.notebook].notes.map(function (note) {\n    if (note.id === props.currentNote) {\n      updateAt = note.updatedAt;\n    }\n  });\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: classes.style,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }\n  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiBook\"], {\n    className: classes.icon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    className: classes.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, props.notebooks[props.notebook].title), props.currentNote && __jsx(\"span\", {\n    className: classes.date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }, 'Last edited on ', props.formatDate(updateAt))));\n}\n\n_s(EditorTitle, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = EditorTitle;\n\nvar _c;\n\n$RefreshReg$(_c, \"EditorTitle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3ItdGl0bGUudHN4P2MzNzEiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0Iiwic3R5bGUiLCJjb2xvciIsIm1hcmdpbiIsInBhZGRpbmciLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJpY29uIiwibWFyZ2luUmlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwidGl0bGUiLCJkYXRlIiwicG9zaXRpb24iLCJmb250U2l6ZSIsInRvcCIsInJpZ2h0IiwiRWRpdG9yVGl0bGUiLCJwcm9wcyIsImNsYXNzZXMiLCJ1cGRhdGVBdCIsIkRhdGUiLCJub3RlYm9va3MiLCJub3RlYm9vayIsIm5vdGVzIiwibWFwIiwibm90ZSIsImlkIiwiY3VycmVudE5vdGUiLCJ1cGRhdGVkQXQiLCJmb3JtYXREYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE1BREw7QUFFSkMsZ0JBQVUsRUFBRSxRQUZSO0FBR0pDLFlBQU0sRUFBRTtBQUhKLEtBREs7QUFNWEMsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRSxrQkFERjtBQUVMQyxZQUFNLEVBQUUsVUFGSDtBQUdMQyxhQUFPLEVBQUUsU0FISjtBQUlMQyxZQUFNLEVBQUUsU0FKSDtBQUtMLGlCQUFXO0FBQ1RDLHVCQUFlLEVBQUUsa0JBRFI7QUFFVEMsb0JBQVksRUFBRTtBQUZMO0FBTE4sS0FOSTtBQWdCWEMsUUFBSSxFQUFFO0FBQ0pDLGlCQUFXLEVBQUUsS0FEVDtBQUVKQyxtQkFBYSxFQUFFO0FBRlgsS0FoQks7QUFvQlhDLFNBQUssRUFBRTtBQUNMRCxtQkFBYSxFQUFFO0FBRFYsS0FwQkk7QUF1QlhFLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUUsVUFETjtBQUVKLGVBQU8sT0FGSDtBQUdKQyxjQUFRLEVBQUUsTUFITjtBQUlKQyxTQUFHLEVBQUUsTUFKRDtBQUtKQyxXQUFLLEVBQUU7QUFMSDtBQXZCSyxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCO0FBd0VlLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQXVDO0FBQUE7O0FBQ3BELE1BQU1DLE9BQU8sR0FBRzFCLFNBQVMsRUFBekI7QUFDQSxNQUFJMkIsUUFBUSxHQUFHLElBQUlDLElBQUosRUFBZjtBQUNBSCxPQUFLLENBQUNJLFNBQU4sQ0FBZ0JKLEtBQUssQ0FBQ0ssUUFBdEIsRUFBZ0NDLEtBQWhDLENBQXNDQyxHQUF0QyxDQUEwQyxVQUFDQyxJQUFELEVBQWlCO0FBQ3pELFFBQUlBLElBQUksQ0FBQ0MsRUFBTCxLQUFZVCxLQUFLLENBQUNVLFdBQXRCLEVBQW1DO0FBQ2pDUixjQUFRLEdBQUdNLElBQUksQ0FBQ0csU0FBaEI7QUFDRDtBQUNGLEdBSkQ7QUFLQSxTQUNFO0FBQUssYUFBUyxFQUFFVixPQUFPLENBQUN0QixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUVzQixPQUFPLENBQUNsQixLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFRLGFBQVMsRUFBRWtCLE9BQU8sQ0FBQ1gsSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTSxhQUFTLEVBQUVXLE9BQU8sQ0FBQ1IsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTyxLQUFLLENBQUNJLFNBQU4sQ0FBZ0JKLEtBQUssQ0FBQ0ssUUFBdEIsRUFBZ0NaLEtBRG5DLENBRkYsRUFLR08sS0FBSyxDQUFDVSxXQUFOLElBQ0M7QUFBTSxhQUFTLEVBQUVULE9BQU8sQ0FBQ1AsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLGlCQURILEVBRUdNLEtBQUssQ0FBQ1ksVUFBTixDQUFpQlYsUUFBakIsQ0FGSCxDQU5KLENBREYsQ0FERjtBQWdCRDs7R0F4QnVCSCxXO1VBQ054QixTOzs7S0FETXdCLFciLCJmaWxlIjoiLi9jb21wb25lbnRzL2VkaXRvci10aXRsZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmlCb29rIH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgSU5vdGVQcm9wcyBmcm9tICcuL2ludGVyZmFjZXMvaW5vdGVwcm9wcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGhlaWdodDogJzQwcHgnLFxuICAgIH0sXG4gICAgc3R5bGU6IHtcbiAgICAgIGNvbG9yOiAncmdiKDEzNiwxNDEsMTQ0KScsXG4gICAgICBtYXJnaW46ICc1cHggMTBweCcsXG4gICAgICBwYWRkaW5nOiAnM3B4IDZweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjM1LDIzNSwyMzUpJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICBtYXJnaW5SaWdodDogJzVweCcsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICB9LFxuICAgIGRhdGU6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgdG9wOiAnMTBweCcsXG4gICAgICByaWdodDogJzIwcHgnLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5pbnRlcmZhY2UgTm90ZSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5vdGVUaXRsZTogc3RyaW5nO1xuICBub3RlOiBzdHJpbmc7XG4gIGlzRGVsZXRlZDogYm9vbGVhbjtcbiAgbGFzdE5vdGVib29rOiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogRGF0ZTtcbiAgdXBkYXRlZEF0OiBEYXRlO1xufVxuXG5pbnRlcmZhY2UgTm90ZWJvb2sge1xuICBub3RlYm9va3M6IHtcbiAgICBbaWQ6IHN0cmluZ106IHtcbiAgICAgIGlkOiBzdHJpbmc7XG4gICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgbm90ZXM6IEFycmF5PE5vdGU+O1xuICAgICAgY3JlYXRlZEF0OiBEYXRlO1xuICAgICAgdXBkYXRlZEF0OiBEYXRlO1xuICAgIH07XG4gIH07XG4gIG5vdGVib29rT3JkZXI6IEFycmF5PHN0cmluZz47XG59XG5cbmludGVyZmFjZSBOb3RlUHJvcHMge1xuICBub3RlYm9va3M6IElOb3RlYm9vaztcbiAgbm90ZWJvb2s6IHN0cmluZztcbiAgY3VycmVudE5vdGU6IHN0cmluZztcbiAgbm90ZWJvb2tPcmRlcjogQXJyYXk8c3RyaW5nPjtcbiAgb3BlbjogYm9vbGVhbjtcbiAgc2V0Q3VycmVudE5vdGU6IChjdXJyZW50Tm90ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBmb3JtYXREYXRlOiAoZGF0ZTogRGF0ZSkgPT4gSlNYLkVsZW1lbnQ7XG4gIGhhbmRsZVNuYWNrYmFyOiAobWVzc2FnZTogc3RyaW5nLCBzZXZlcml0eTogc3RyaW5nKSA9PiB2b2lkO1xuICBhZGROZXdOb3RlOiAodGl0bGU6IHN0cmluZywgbm90ZTogc3RyaW5nKSA9PiB2b2lkO1xuICB1cGRhdGVOb3RlOiAobm90ZWJvb2tJZDogc3RyaW5nLCBub3RlSWQ6IHN0cmluZywgbm90ZTogSFRNTEVsZW1lbnQpID0+IHZvaWQ7XG4gIG1vdmVOb3RlOiAob3JpZ2luOiBzdHJpbmcsIGRlc3RpbmF0aW9uOiBzdHJpbmcsIG5vdGVJZDogc3RyaW5nKSA9PiB2b2lkO1xuICBkZWxldGVOb3RlOiAob3JpZ2luOiBzdHJpbmcsIG5vdGVJZDogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0b3JUaXRsZShwcm9wczogTm90ZVByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgbGV0IHVwZGF0ZUF0ID0gbmV3IERhdGUoKTtcbiAgcHJvcHMubm90ZWJvb2tzW3Byb3BzLm5vdGVib29rXS5ub3Rlcy5tYXAoKG5vdGU6IElOb3RlKSA9PiB7XG4gICAgaWYgKG5vdGUuaWQgPT09IHByb3BzLmN1cnJlbnROb3RlKSB7XG4gICAgICB1cGRhdGVBdCA9IG5vdGUudXBkYXRlZEF0O1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGV9PlxuICAgICAgICA8RmlCb29rIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgIHtwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLnRpdGxlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHtwcm9wcy5jdXJyZW50Tm90ZSAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxuICAgICAgICAgICAgeydMYXN0IGVkaXRlZCBvbiAnfVxuICAgICAgICAgICAge3Byb3BzLmZvcm1hdERhdGUodXBkYXRlQXQpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/editor-title.tsx\n");

/***/ })

})
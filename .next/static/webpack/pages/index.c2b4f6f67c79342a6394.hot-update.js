webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor-title.tsx":
/*!*************************************!*\
  !*** ./components/editor-title.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EditorTitle; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor-title.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      alignItems: 'center',\n      height: '40px'\n    },\n    style: {\n      color: 'rgb(136,141,144)',\n      margin: '5px 10px',\n      padding: '3px 6px',\n      display: 'flex',\n      justifyContent: 'space-between'\n    },\n    icon: {\n      marginRight: '5px',\n      verticalAlign: 'middle'\n    },\n    title: {\n      verticalAlign: 'middle',\n      cursor: 'pointer',\n      '&:hover': {\n        backgroundColor: 'rgb(235,235,235)',\n        borderRadius: '5px'\n      }\n    },\n    date: {\n      verticalAlign: 'middle',\n      // position: 'absolute',\n      // float: 'right',\n      fontSize: '12px',\n      top: '10px',\n      right: '20px'\n    }\n  });\n});\nfunction EditorTitle(props) {\n  _s();\n\n  var classes = useStyles();\n  var updateAt = new Date();\n  props.notebooks[props.notebook].notes.map(function (note) {\n    if (note.id === props.currentNoteId) {\n      updateAt = note.updatedAt;\n    }\n  });\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: classes.style,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiBook\"], {\n    className: classes.icon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    className: classes.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, props.notebooks[props.notebook].title), props.currentNoteId && __jsx(\"span\", {\n    className: classes.date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }, 'Last edited on ', props.formatDate(updateAt))));\n}\n\n_s(EditorTitle, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = EditorTitle;\n\nvar _c;\n\n$RefreshReg$(_c, \"EditorTitle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3ItdGl0bGUudHN4P2MzNzEiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0Iiwic3R5bGUiLCJjb2xvciIsIm1hcmdpbiIsInBhZGRpbmciLCJqdXN0aWZ5Q29udGVudCIsImljb24iLCJtYXJnaW5SaWdodCIsInZlcnRpY2FsQWxpZ24iLCJ0aXRsZSIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImRhdGUiLCJmb250U2l6ZSIsInRvcCIsInJpZ2h0IiwiRWRpdG9yVGl0bGUiLCJwcm9wcyIsImNsYXNzZXMiLCJ1cGRhdGVBdCIsIkRhdGUiLCJub3RlYm9va3MiLCJub3RlYm9vayIsIm5vdGVzIiwibWFwIiwibm90ZSIsImlkIiwiY3VycmVudE5vdGVJZCIsInVwZGF0ZWRBdCIsImZvcm1hdERhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxnQkFBVSxFQUFFLFFBRlI7QUFHSkMsWUFBTSxFQUFFO0FBSEosS0FESztBQU1YQyxTQUFLLEVBQUU7QUFDTEMsV0FBSyxFQUFFLGtCQURGO0FBRUxDLFlBQU0sRUFBRSxVQUZIO0FBR0xDLGFBQU8sRUFBRSxTQUhKO0FBSUxOLGFBQU8sRUFBRSxNQUpKO0FBS0xPLG9CQUFjLEVBQUU7QUFMWCxLQU5JO0FBYVhDLFFBQUksRUFBRTtBQUNKQyxpQkFBVyxFQUFFLEtBRFQ7QUFFSkMsbUJBQWEsRUFBRTtBQUZYLEtBYks7QUFpQlhDLFNBQUssRUFBRTtBQUNMRCxtQkFBYSxFQUFFLFFBRFY7QUFFTEUsWUFBTSxFQUFFLFNBRkg7QUFHTCxpQkFBVztBQUNUQyx1QkFBZSxFQUFFLGtCQURSO0FBRVRDLG9CQUFZLEVBQUU7QUFGTDtBQUhOLEtBakJJO0FBeUJYQyxRQUFJLEVBQUU7QUFDSkwsbUJBQWEsRUFBRSxRQURYO0FBRUo7QUFDQTtBQUNBTSxjQUFRLEVBQUUsTUFKTjtBQUtKQyxTQUFHLEVBQUUsTUFMRDtBQU1KQyxXQUFLLEVBQUU7QUFOSDtBQXpCSyxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCO0FBNERlLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQXdDO0FBQUE7O0FBQ3JELE1BQU1DLE9BQU8sR0FBRzFCLFNBQVMsRUFBekI7QUFDQSxNQUFJMkIsUUFBUSxHQUFHLElBQUlDLElBQUosRUFBZjtBQUNBSCxPQUFLLENBQUNJLFNBQU4sQ0FBZ0JKLEtBQUssQ0FBQ0ssUUFBdEIsRUFBZ0NDLEtBQWhDLENBQXNDQyxHQUF0QyxDQUEwQyxVQUFDQyxJQUFELEVBQWlCO0FBQ3pELFFBQUlBLElBQUksQ0FBQ0MsRUFBTCxLQUFZVCxLQUFLLENBQUNVLGFBQXRCLEVBQXFDO0FBQ25DUixjQUFRLEdBQUdNLElBQUksQ0FBQ0csU0FBaEI7QUFDRDtBQUNGLEdBSkQ7QUFLQSxTQUNFO0FBQUssYUFBUyxFQUFFVixPQUFPLENBQUN0QixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUVzQixPQUFPLENBQUNsQixLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFRLGFBQVMsRUFBRWtCLE9BQU8sQ0FBQ2IsSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTSxhQUFTLEVBQUVhLE9BQU8sQ0FBQ1YsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUyxLQUFLLENBQUNJLFNBQU4sQ0FBZ0JKLEtBQUssQ0FBQ0ssUUFBdEIsRUFBZ0NkLEtBRG5DLENBRkYsRUFLR1MsS0FBSyxDQUFDVSxhQUFOLElBQ0M7QUFBTSxhQUFTLEVBQUVULE9BQU8sQ0FBQ04sSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLGlCQURILEVBRUdLLEtBQUssQ0FBQ1ksVUFBTixDQUFpQlYsUUFBakIsQ0FGSCxDQU5KLENBREYsQ0FERjtBQWdCRDs7R0F4QnVCSCxXO1VBQ054QixTOzs7S0FETXdCLFciLCJmaWxlIjoiLi9jb21wb25lbnRzL2VkaXRvci10aXRsZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmlCb29rIH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgSU5vdGVQcm9wcyBmcm9tICcuL2ludGVyZmFjZXMvaW5vdGVwcm9wcyc7XG5pbXBvcnQgSU5vdGUgZnJvbSAnLi9pbnRlcmZhY2VzL2lub3RlJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgfSxcbiAgICBzdHlsZToge1xuICAgICAgY29sb3I6ICdyZ2IoMTM2LDE0MSwxNDQpJyxcbiAgICAgIG1hcmdpbjogJzVweCAxMHB4JyxcbiAgICAgIHBhZGRpbmc6ICczcHggNnB4JyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICBtYXJnaW5SaWdodDogJzVweCcsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMzUsMjM1LDIzNSknLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRhdGU6IHtcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgLy8gcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAvLyBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICB0b3A6ICcxMHB4JyxcbiAgICAgIHJpZ2h0OiAnMjBweCcsXG4gICAgfSxcbiAgfSlcbik7XG5cbmludGVyZmFjZSBOb3RlIHtcbiAgaWQ6IHN0cmluZztcbiAgbm90ZVRpdGxlOiBzdHJpbmc7XG4gIG5vdGU6IHN0cmluZztcbiAgaXNEZWxldGVkOiBib29sZWFuO1xuICBsYXN0Tm90ZWJvb2s6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICB1cGRhdGVkQXQ6IERhdGU7XG59XG5cbmludGVyZmFjZSBOb3RlYm9vayB7XG4gIG5vdGVib29rczoge1xuICAgIFtpZDogc3RyaW5nXToge1xuICAgICAgaWQ6IHN0cmluZztcbiAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICBub3RlczogQXJyYXk8Tm90ZT47XG4gICAgICBjcmVhdGVkQXQ6IERhdGU7XG4gICAgICB1cGRhdGVkQXQ6IERhdGU7XG4gICAgfTtcbiAgfTtcbiAgbm90ZWJvb2tPcmRlcjogQXJyYXk8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yVGl0bGUocHJvcHM6IElOb3RlUHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBsZXQgdXBkYXRlQXQgPSBuZXcgRGF0ZSgpO1xuICBwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLm5vdGVzLm1hcCgobm90ZTogSU5vdGUpID0+IHtcbiAgICBpZiAobm90ZS5pZCA9PT0gcHJvcHMuY3VycmVudE5vdGVJZCkge1xuICAgICAgdXBkYXRlQXQgPSBub3RlLnVwZGF0ZWRBdDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlfT5cbiAgICAgICAgPEZpQm9vayBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICB7cHJvcHMubm90ZWJvb2tzW3Byb3BzLm5vdGVib29rXS50aXRsZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7cHJvcHMuY3VycmVudE5vdGVJZCAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxuICAgICAgICAgICAgeydMYXN0IGVkaXRlZCBvbiAnfVxuICAgICAgICAgICAge3Byb3BzLmZvcm1hdERhdGUodXBkYXRlQXQpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/editor-title.tsx\n");

/***/ })

})
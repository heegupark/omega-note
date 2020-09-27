webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor-title.tsx":
/*!*************************************!*\
  !*** ./components/editor-title.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EditorTitle; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor-title.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      alignItems: 'center',\n      height: '40px'\n    },\n    style: {\n      color: 'rgb(136,141,144)',\n      margin: '5px 10px',\n      padding: '3px 6px',\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-around'\n    },\n    icon: {\n      marginRight: '5px',\n      verticalAlign: 'middle'\n    },\n    title: {\n      verticalAlign: 'middle',\n      cursor: 'pointer',\n      '&:hover': {\n        backgroundColor: 'rgb(235,235,235)',\n        borderRadius: '5px'\n      }\n    },\n    date: {\n      // position: 'absolute',\n      // float: 'right',\n      fontSize: '12px',\n      top: '10px',\n      right: '20px'\n    }\n  });\n});\nfunction EditorTitle(props) {\n  _s();\n\n  var classes = useStyles();\n  var updateAt = new Date();\n  props.notebooks[props.notebook].notes.map(function (note) {\n    if (note.id === props.currentNoteId) {\n      updateAt = note.updatedAt;\n    }\n  });\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: classes.style,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiBook\"], {\n    className: classes.icon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    className: classes.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, props.notebooks[props.notebook].title), props.currentNoteId && __jsx(\"span\", {\n    className: classes.date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }, 'Last edited on ', props.formatDate(updateAt))));\n}\n\n_s(EditorTitle, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = EditorTitle;\n\nvar _c;\n\n$RefreshReg$(_c, \"EditorTitle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3ItdGl0bGUudHN4P2MzNzEiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0Iiwic3R5bGUiLCJjb2xvciIsIm1hcmdpbiIsInBhZGRpbmciLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJpY29uIiwibWFyZ2luUmlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwidGl0bGUiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJkYXRlIiwiZm9udFNpemUiLCJ0b3AiLCJyaWdodCIsIkVkaXRvclRpdGxlIiwicHJvcHMiLCJjbGFzc2VzIiwidXBkYXRlQXQiLCJEYXRlIiwibm90ZWJvb2tzIiwibm90ZWJvb2siLCJub3RlcyIsIm1hcCIsIm5vdGUiLCJpZCIsImN1cnJlbnROb3RlSWQiLCJ1cGRhdGVkQXQiLCJmb3JtYXREYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE1BREw7QUFFSkMsZ0JBQVUsRUFBRSxRQUZSO0FBR0pDLFlBQU0sRUFBRTtBQUhKLEtBREs7QUFNWEMsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRSxrQkFERjtBQUVMQyxZQUFNLEVBQUUsVUFGSDtBQUdMQyxhQUFPLEVBQUUsU0FISjtBQUlMTixhQUFPLEVBQUUsTUFKSjtBQUtMTyxtQkFBYSxFQUFFLEtBTFY7QUFNTEMsb0JBQWMsRUFBRTtBQU5YLEtBTkk7QUFjWEMsUUFBSSxFQUFFO0FBQ0pDLGlCQUFXLEVBQUUsS0FEVDtBQUVKQyxtQkFBYSxFQUFFO0FBRlgsS0FkSztBQWtCWEMsU0FBSyxFQUFFO0FBQ0xELG1CQUFhLEVBQUUsUUFEVjtBQUVMRSxZQUFNLEVBQUUsU0FGSDtBQUdMLGlCQUFXO0FBQ1RDLHVCQUFlLEVBQUUsa0JBRFI7QUFFVEMsb0JBQVksRUFBRTtBQUZMO0FBSE4sS0FsQkk7QUEwQlhDLFFBQUksRUFBRTtBQUNKO0FBQ0E7QUFDQUMsY0FBUSxFQUFFLE1BSE47QUFJSkMsU0FBRyxFQUFFLE1BSkQ7QUFLSkMsV0FBSyxFQUFFO0FBTEg7QUExQkssR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1QjtBQTREZSxTQUFTQyxXQUFULENBQXFCQyxLQUFyQixFQUF3QztBQUFBOztBQUNyRCxNQUFNQyxPQUFPLEdBQUczQixTQUFTLEVBQXpCO0FBQ0EsTUFBSTRCLFFBQVEsR0FBRyxJQUFJQyxJQUFKLEVBQWY7QUFDQUgsT0FBSyxDQUFDSSxTQUFOLENBQWdCSixLQUFLLENBQUNLLFFBQXRCLEVBQWdDQyxLQUFoQyxDQUFzQ0MsR0FBdEMsQ0FBMEMsVUFBQ0MsSUFBRCxFQUFpQjtBQUN6RCxRQUFJQSxJQUFJLENBQUNDLEVBQUwsS0FBWVQsS0FBSyxDQUFDVSxhQUF0QixFQUFxQztBQUNuQ1IsY0FBUSxHQUFHTSxJQUFJLENBQUNHLFNBQWhCO0FBQ0Q7QUFDRixHQUpEO0FBS0EsU0FDRTtBQUFLLGFBQVMsRUFBRVYsT0FBTyxDQUFDdkIsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFFdUIsT0FBTyxDQUFDbkIsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBUSxhQUFTLEVBQUVtQixPQUFPLENBQUNiLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sYUFBUyxFQUFFYSxPQUFPLENBQUNWLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1MsS0FBSyxDQUFDSSxTQUFOLENBQWdCSixLQUFLLENBQUNLLFFBQXRCLEVBQWdDZCxLQURuQyxDQUZGLEVBS0dTLEtBQUssQ0FBQ1UsYUFBTixJQUNDO0FBQU0sYUFBUyxFQUFFVCxPQUFPLENBQUNOLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxpQkFESCxFQUVHSyxLQUFLLENBQUNZLFVBQU4sQ0FBaUJWLFFBQWpCLENBRkgsQ0FOSixDQURGLENBREY7QUFnQkQ7O0dBeEJ1QkgsVztVQUNOekIsUzs7O0tBRE15QixXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9lZGl0b3ItdGl0bGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpQm9vayB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IElOb3RlUHJvcHMgZnJvbSAnLi9pbnRlcmZhY2VzL2lub3RlcHJvcHMnO1xuaW1wb3J0IElOb3RlIGZyb20gJy4vaW50ZXJmYWNlcy9pbm90ZSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGhlaWdodDogJzQwcHgnLFxuICAgIH0sXG4gICAgc3R5bGU6IHtcbiAgICAgIGNvbG9yOiAncmdiKDEzNiwxNDEsMTQ0KScsXG4gICAgICBtYXJnaW46ICc1cHggMTBweCcsXG4gICAgICBwYWRkaW5nOiAnM3B4IDZweCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIG1hcmdpblJpZ2h0OiAnNXB4JyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIzNSwyMzUsMjM1KScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGF0ZToge1xuICAgICAgLy8gcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAvLyBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICB0b3A6ICcxMHB4JyxcbiAgICAgIHJpZ2h0OiAnMjBweCcsXG4gICAgfSxcbiAgfSlcbik7XG5cbmludGVyZmFjZSBOb3RlIHtcbiAgaWQ6IHN0cmluZztcbiAgbm90ZVRpdGxlOiBzdHJpbmc7XG4gIG5vdGU6IHN0cmluZztcbiAgaXNEZWxldGVkOiBib29sZWFuO1xuICBsYXN0Tm90ZWJvb2s6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICB1cGRhdGVkQXQ6IERhdGU7XG59XG5cbmludGVyZmFjZSBOb3RlYm9vayB7XG4gIG5vdGVib29rczoge1xuICAgIFtpZDogc3RyaW5nXToge1xuICAgICAgaWQ6IHN0cmluZztcbiAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICBub3RlczogQXJyYXk8Tm90ZT47XG4gICAgICBjcmVhdGVkQXQ6IERhdGU7XG4gICAgICB1cGRhdGVkQXQ6IERhdGU7XG4gICAgfTtcbiAgfTtcbiAgbm90ZWJvb2tPcmRlcjogQXJyYXk8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yVGl0bGUocHJvcHM6IElOb3RlUHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBsZXQgdXBkYXRlQXQgPSBuZXcgRGF0ZSgpO1xuICBwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLm5vdGVzLm1hcCgobm90ZTogSU5vdGUpID0+IHtcbiAgICBpZiAobm90ZS5pZCA9PT0gcHJvcHMuY3VycmVudE5vdGVJZCkge1xuICAgICAgdXBkYXRlQXQgPSBub3RlLnVwZGF0ZWRBdDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlfT5cbiAgICAgICAgPEZpQm9vayBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICB7cHJvcHMubm90ZWJvb2tzW3Byb3BzLm5vdGVib29rXS50aXRsZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7cHJvcHMuY3VycmVudE5vdGVJZCAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxuICAgICAgICAgICAgeydMYXN0IGVkaXRlZCBvbiAnfVxuICAgICAgICAgICAge3Byb3BzLmZvcm1hdERhdGUodXBkYXRlQXQpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/editor-title.tsx\n");

/***/ })

})
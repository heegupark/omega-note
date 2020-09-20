webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note-list.tsx":
/*!**********************************!*\
  !*** ./components/note-list.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note-list.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDdirection: 'row',\n      height: '100vh'\n    },\n    box: {\n      display: 'flex',\n      flexDdirection: 'column',\n      background: '#ccc',\n      padding: '10px',\n      boxSizing: 'border-box',\n      position: 'relative',\n      overflowY: 'hidden',\n      resize: 'horizontal',\n      height: '100vh',\n      width: '200px'\n    },\n    handle: {\n      width: '3px',\n      borderRight: '1px solid black',\n      cursor: 'ew-resize'\n    }\n  });\n});\nfunction NoteList(props) {\n  _s();\n\n  var classes = useStyles();\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, \"Contents\")), __jsx(\"div\", {\n    className: classes.handle,\n    onDrag: function onDrag(e) {\n      console.log(window.scrollX);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(NoteList, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = NoteList;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLWxpc3QudHN4PzIxYzUiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGRpcmVjdGlvbiIsImhlaWdodCIsImJveCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwicG9zaXRpb24iLCJvdmVyZmxvd1kiLCJyZXNpemUiLCJ3aWR0aCIsImhhbmRsZSIsImJvcmRlclJpZ2h0IiwiY3Vyc29yIiwiTm90ZUxpc3QiLCJwcm9wcyIsImNsYXNzZXMiLCJlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNjcm9sbFgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxvQkFBYyxFQUFFLEtBRlo7QUFHSkMsWUFBTSxFQUFFO0FBSEosS0FESztBQU1YQyxPQUFHLEVBQUU7QUFDSEgsYUFBTyxFQUFFLE1BRE47QUFFSEMsb0JBQWMsRUFBRSxRQUZiO0FBR0hHLGdCQUFVLEVBQUUsTUFIVDtBQUlIQyxhQUFPLEVBQUUsTUFKTjtBQUtIQyxlQUFTLEVBQUUsWUFMUjtBQU1IQyxjQUFRLEVBQUUsVUFOUDtBQU9IQyxlQUFTLEVBQUUsUUFQUjtBQVFIQyxZQUFNLEVBQUUsWUFSTDtBQVNIUCxZQUFNLEVBQUUsT0FUTDtBQVVIUSxXQUFLLEVBQUU7QUFWSixLQU5NO0FBa0JYQyxVQUFNLEVBQUU7QUFDTkQsV0FBSyxFQUFFLEtBREQ7QUFFTkUsaUJBQVcsRUFBRSxpQkFGUDtBQUdOQyxZQUFNLEVBQUU7QUFIRjtBQWxCRyxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCO0FBMkJlLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQThCO0FBQUE7O0FBQzNDLE1BQU1DLE9BQU8sR0FBR3JCLFNBQVMsRUFBekI7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFFcUIsT0FBTyxDQUFDakIsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFaUIsT0FBTyxDQUFDYixHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLEVBSUU7QUFDRSxhQUFTLEVBQUVhLE9BQU8sQ0FBQ0wsTUFEckI7QUFFRSxVQUFNLEVBQUUsZ0JBQUNNLENBQUQsRUFBWTtBQUNsQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlDLE1BQU0sQ0FBQ0MsT0FBbkI7QUFDRCxLQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGO0FBYUQ7O0dBaEJ1QlAsUTtVQUNObkIsUzs7O0tBRE1tQixRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ub3RlLWxpc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERkaXJlY3Rpb246ICdyb3cnLFxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIH0sXG4gICAgYm94OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGRpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2NjYycsXG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgb3ZlcmZsb3dZOiAnaGlkZGVuJyxcbiAgICAgIHJlc2l6ZTogJ2hvcml6b250YWwnLFxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgd2lkdGg6ICcyMDBweCcsXG4gICAgfSxcbiAgICBoYW5kbGU6IHtcbiAgICAgIHdpZHRoOiAnM3B4JyxcbiAgICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgIGN1cnNvcjogJ2V3LXJlc2l6ZScsXG4gICAgfSxcbiAgfSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVMaXN0KHByb3BzOiBhbnkpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3h9PlxuICAgICAgICA8c3Bhbj5Db250ZW50czwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaGFuZGxlfVxuICAgICAgICBvbkRyYWc9eyhlOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWCk7XG4gICAgICAgIH19XG4gICAgICA+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/note-list.tsx\n");

/***/ })

})
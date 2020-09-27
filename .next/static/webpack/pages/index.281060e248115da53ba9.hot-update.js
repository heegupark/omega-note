webpackHotUpdate_N_E("pages/index",{

/***/ "./components/notebooks.tsx":
/*!**********************************!*\
  !*** ./components/notebooks.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Notebooks; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/esm/Table/index.js\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"./node_modules/@material-ui/core/esm/TableBody/index.js\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/esm/TableCell/index.js\");\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableContainer */ \"./node_modules/@material-ui/core/esm/TableContainer/index.js\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/esm/TableHead/index.js\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/esm/TableRow/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/notebooks.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      // alignItems: 'center',\n      // justifyItems: 'center',\n      // flexDdirection: 'row',\n      width: '100%',\n      height: '100vh',\n      margin: 'auto',\n      padding: '50px'\n    },\n    table: {\n      width: 600,\n      color: 'rgb(51,51,51)',\n      fontSize: '14px'\n    }\n  });\n});\nfunction Notebooks(props) {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n\n  var getTimeMsg = function getTimeMsg(date) {\n    var createdTime = new Date(date).valueOf();\n    var currentTime = new Date().valueOf();\n    var second = 60;\n    var minute = 60;\n    var hour = 24;\n    var day = 30;\n    var month = 12;\n    var divider = 1;\n    var timeMsg = '';\n    var diff = (currentTime - createdTime) / 1000;\n\n    if (diff <= second) {\n      timeMsg = 'second';\n    } else if (diff <= second * minute) {\n      divider = second;\n      timeMsg = 'minute';\n    } else if (diff <= second * minute * hour) {\n      divider = second * minute;\n      timeMsg = 'hour';\n    } else if (diff <= 172800) {\n      return 'Yesterday';\n    } else {\n      return \"\".concat(date.getMonth(), \" \").concat(date.getDate(), \", \").concat(date.getFullYear());\n    }\n\n    diff /= divider;\n    var displayTime = Math.abs(Math.round(diff));\n    var plural = displayTime > 1 ? 's' : '';\n    var timeMessage = \"\".concat(displayTime, \" \").concat(timeMsg).concat(plural, \" ago\");\n    return timeMessage;\n  };\n\n  var createData = function createData(id, title, noteCount, createdAt, updatedAt) {\n    return {\n      id: id,\n      title: title,\n      noteCount: noteCount,\n      createdAt: createdAt,\n      updatedAt: updatedAt\n    };\n  };\n\n  var rows = props.notebookOrder.map(function (notebook) {\n    return createData(props.notebooks[notebook].id, props.notebooks[notebook].title, props.notebooks[notebook].notes.length, getTimeMsg(props.notebooks[notebook].createdAt), getTimeMsg(props.notebooks[notebook].updatedAt));\n  });\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: classes.table,\n    \"aria-label\": \"customized table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 15\n    }\n  }, \"Notebook\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 15\n    }\n  }, \"Number of Notes\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 15\n    }\n  }, \"Created Date\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 15\n    }\n  }, \"Update Date\"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 11\n    }\n  }, rows.map(function (row) {\n    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: row.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 15\n      }\n    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      component: \"th\",\n      scope: \"row\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 17\n      }\n    }, row.title), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"right\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 17\n      }\n    }, row.noteCount), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"right\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 17\n      }\n    }, row.createdAt), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"right\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 17\n      }\n    }, row.updatedAt));\n  })))));\n}\n\n_s(Notebooks, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Notebooks;\n\nvar _c;\n\n$RefreshReg$(_c, \"Notebooks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlYm9va3MudHN4P2RjODkiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInBhZGRpbmciLCJ0YWJsZSIsImNvbG9yIiwiZm9udFNpemUiLCJOb3RlYm9va3MiLCJwcm9wcyIsImNsYXNzZXMiLCJnZXRUaW1lTXNnIiwiZGF0ZSIsImNyZWF0ZWRUaW1lIiwiRGF0ZSIsInZhbHVlT2YiLCJjdXJyZW50VGltZSIsInNlY29uZCIsIm1pbnV0ZSIsImhvdXIiLCJkYXkiLCJtb250aCIsImRpdmlkZXIiLCJ0aW1lTXNnIiwiZGlmZiIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEZ1bGxZZWFyIiwiZGlzcGxheVRpbWUiLCJNYXRoIiwiYWJzIiwicm91bmQiLCJwbHVyYWwiLCJ0aW1lTWVzc2FnZSIsImNyZWF0ZURhdGEiLCJpZCIsInRpdGxlIiwibm90ZUNvdW50IiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwicm93cyIsIm5vdGVib29rT3JkZXIiLCJtYXAiLCJub3RlYm9vayIsIm5vdGVib29rcyIsIm5vdGVzIiwibGVuZ3RoIiwiUGFwZXIiLCJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKO0FBQ0E7QUFDQTtBQUNBQyxXQUFLLEVBQUUsTUFMSDtBQU1KQyxZQUFNLEVBQUUsT0FOSjtBQU9KQyxZQUFNLEVBQUUsTUFQSjtBQVFKQyxhQUFPLEVBQUU7QUFSTCxLQURLO0FBV1hDLFNB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RUFBRDtBQUFVLFNBQUcsRUFBRUEsR0FBRyxDQUFDYixFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxtRUFBRDtBQUFXLGVBQVMsRUFBQyxJQUFyQjtBQUEwQixXQUFLLEVBQUMsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHYSxHQUFHLENBQUNaLEtBRFAsQ0FERixFQUlFLE1BQUMsbUVBQUQ7QUFBVyxXQUFLLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEwQlksR0FBRyxDQUFDWCxTQUE5QixDQUpGLEVBS0UsTUFBQyxtRUFBRDtBQUFXLFdBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBCVyxHQUFHLENBQUNWLFNBQTlCLENBTEYsRUFNRSxNQUFDLG1FQUFEO0FBQVcsV0FBSyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMEJVLEdBQUcsQ0FBQ1QsU0FBOUIsQ0FORixDQURRO0FBQUEsR0FBVCxDQURILENBVEYsQ0FERixDQURGLENBREY7QUE0QkQ7O0dBbEZ1Qi9CLFM7VUFDTmIsUzs7O0tBRE1hLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL25vdGVib29rcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgSU5vdGVib29rIGZyb20gJy4vaW50ZXJmYWNlcy9pbm90ZWJvb2snO1xuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIC8vIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgLy8ganVzdGlmeUl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIC8vIGZsZXhEZGlyZWN0aW9uOiAncm93JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIHBhZGRpbmc6ICc1MHB4JyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICB3aWR0aDogNjAwLFxuICAgICAgY29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgfSxcbiAgfSlcbik7XG5cbmludGVyZmFjZSBJTm90ZWJvb2tzUHJvcHMge1xuICBub3RlYm9va3M6IElOb3RlYm9vaztcbiAgbm90ZWJvb2tPcmRlcjogQXJyYXk8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZWJvb2tzKHByb3BzOiBJTm90ZWJvb2tzUHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IGdldFRpbWVNc2cgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZWRUaW1lID0gbmV3IERhdGUoZGF0ZSkudmFsdWVPZigpO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG4gICAgY29uc3Qgc2Vjb25kID0gNjA7XG4gICAgY29uc3QgbWludXRlID0gNjA7XG4gICAgY29uc3QgaG91ciA9IDI0O1xuICAgIGNvbnN0IGRheSA9IDMwO1xuICAgIGNvbnN0IG1vbnRoID0gMTI7XG4gICAgbGV0IGRpdmlkZXIgPSAxO1xuICAgIGxldCB0aW1lTXNnID0gJyc7XG4gICAgbGV0IGRpZmYgPSAoY3VycmVudFRpbWUgLSBjcmVhdGVkVGltZSkgLyAxMDAwO1xuICAgIGlmIChkaWZmIDw9IHNlY29uZCkge1xuICAgICAgdGltZU1zZyA9ICdzZWNvbmQnO1xuICAgIH0gZWxzZSBpZiAoZGlmZiA8PSBzZWNvbmQgKiBtaW51dGUpIHtcbiAgICAgIGRpdmlkZXIgPSBzZWNvbmQ7XG4gICAgICB0aW1lTXNnID0gJ21pbnV0ZSc7XG4gICAgfSBlbHNlIGlmIChkaWZmIDw9IHNlY29uZCAqIG1pbnV0ZSAqIGhvdXIpIHtcbiAgICAgIGRpdmlkZXIgPSBzZWNvbmQgKiBtaW51dGU7XG4gICAgICB0aW1lTXNnID0gJ2hvdXInO1xuICAgIH0gZWxzZSBpZiAoZGlmZiA8PSAxNzI4MDApIHtcbiAgICAgIHJldHVybiAnWWVzdGVyZGF5JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAke2RhdGUuZ2V0TW9udGgoKX0gJHtkYXRlLmdldERhdGUoKX0sICR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XG4gICAgfVxuICAgIGRpZmYgLz0gZGl2aWRlcjtcbiAgICBjb25zdCBkaXNwbGF5VGltZSA9IE1hdGguYWJzKE1hdGgucm91bmQoZGlmZikpO1xuICAgIGNvbnN0IHBsdXJhbCA9IGRpc3BsYXlUaW1lID4gMSA/ICdzJyA6ICcnO1xuICAgIGNvbnN0IHRpbWVNZXNzYWdlID0gYCR7ZGlzcGxheVRpbWV9ICR7dGltZU1zZ30ke3BsdXJhbH0gYWdvYDtcbiAgICByZXR1cm4gdGltZU1lc3NhZ2U7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRGF0YSA9IChcbiAgICBpZDogc3RyaW5nLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgbm90ZUNvdW50OiBudW1iZXIsXG4gICAgY3JlYXRlZEF0OiBzdHJpbmcsXG4gICAgdXBkYXRlZEF0OiBzdHJpbmdcbiAgKSA9PiB7XG4gICAgcmV0dXJuIHsgaWQsIHRpdGxlLCBub3RlQ291bnQsIGNyZWF0ZWRBdCwgdXBkYXRlZEF0IH07XG4gIH07XG5cbiAgY29uc3Qgcm93cyA9IHByb3BzLm5vdGVib29rT3JkZXIubWFwKChub3RlYm9vazogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZURhdGEoXG4gICAgICBwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tdLmlkLFxuICAgICAgcHJvcHMubm90ZWJvb2tzW25vdGVib29rXS50aXRsZSxcbiAgICAgIHByb3BzLm5vdGVib29rc1tub3RlYm9va10ubm90ZXMubGVuZ3RoLFxuICAgICAgZ2V0VGltZU1zZyhwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tdLmNyZWF0ZWRBdCksXG4gICAgICBnZXRUaW1lTXNnKHByb3BzLm5vdGVib29rc1tub3RlYm9va10udXBkYXRlZEF0KVxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICAgIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IGFyaWEtbGFiZWw9XCJjdXN0b21pemVkIHRhYmxlXCI+XG4gICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Ob3RlYm9vazwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5OdW1iZXIgb2YgTm90ZXM8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+Q3JlYXRlZCBEYXRlPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlVwZGF0ZSBEYXRlPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxuICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cuaWR9PlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAge3Jvdy50aXRsZX1cbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93Lm5vdGVDb3VudH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmNyZWF0ZWRBdH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LnVwZGF0ZWRBdH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/notebooks.tsx\n");

/***/ })

})
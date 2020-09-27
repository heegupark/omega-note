webpackHotUpdate_N_E("pages/index",{

/***/ "./components/notebooks.tsx":
/*!**********************************!*\
  !*** ./components/notebooks.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Notebooks; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/esm/Table/index.js\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"./node_modules/@material-ui/core/esm/TableBody/index.js\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/esm/TableCell/index.js\");\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableContainer */ \"./node_modules/@material-ui/core/esm/TableContainer/index.js\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/esm/TableHead/index.js\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/esm/TableRow/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/notebooks.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto'\n    },\n    notebook: {\n      fontSize: '24px',\n      padding: '20px 30px'\n    },\n    paper: {\n      width: 800,\n      height: '100vh',\n      padding: '10px 30px'\n    },\n    table: {\n      width: '100%',\n      color: 'rgb(51,51,51)',\n      fontSize: '12px'\n    },\n    row: {\n      '&:hover': {\n        backgroundColor: 'rgb(75,164,65)',\n        color: 'white'\n      }\n    }\n  });\n});\nfunction Notebooks(props) {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n\n  var getTimeMsg = function getTimeMsg(date) {\n    var createdTime = new Date(date).valueOf();\n    var currentTime = new Date().valueOf();\n    var second = 60;\n    var minute = 60;\n    var hour = 24;\n    var divider = 1;\n    var timeMsg = '';\n    var diff = (currentTime - createdTime) / 1000;\n\n    if (diff <= second) {\n      timeMsg = 'second';\n    } else if (diff <= second * minute) {\n      divider = second;\n      timeMsg = 'minute';\n    } else if (diff <= second * minute * hour) {\n      divider = second * minute;\n      timeMsg = 'hour';\n    } else if (diff <= 172800) {\n      return 'Yesterday';\n    } else {\n      var dateArr = date.toString().split(' ');\n      return \"\".concat(dateArr[1], \" \").concat(dateArr[2], \", \").concat(dateArr[3]);\n    }\n\n    diff /= divider;\n    var displayTime = Math.abs(Math.round(diff));\n    var plural = displayTime > 1 ? 's' : '';\n    var timeMessage = \"\".concat(displayTime, \" \").concat(timeMsg).concat(plural, \" ago\");\n    return timeMessage;\n  };\n\n  var createData = function createData(id, title, noteCount, createdAt, updatedAt) {\n    return {\n      id: id,\n      title: title,\n      noteCount: noteCount,\n      createdAt: createdAt,\n      updatedAt: updatedAt\n    };\n  };\n\n  var rows = props.notebookOrder.map(function (notebook) {\n    return createData(props.notebooks[notebook].id, props.notebooks[notebook].title, props.notebooks[notebook].notes.length, getTimeMsg(props.notebooks[notebook].createdAt), getTimeMsg(props.notebooks[notebook].updatedAt));\n  });\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: classes.notebook,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }\n  }, \"Notebooks\"), __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: classes.table,\n    \"aria-label\": \"customized table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 17\n    }\n  }, \"Notebook\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 17\n    }\n  }, \"Number of Notes\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 17\n    }\n  }, \"Created Date\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 17\n    }\n  }, \"Update Date\"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 13\n    }\n  }, rows.map(function (row) {\n    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: row.id,\n      className: classes.row,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 17\n      }\n    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      component: \"th\",\n      scope: \"row\",\n      onClick: function onClick() {\n        return props.handleNotebookClick(row.id);\n      },\n      style: {\n        cursor: 'pointer'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 19\n      }\n    }, row.title), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 19\n      }\n    }, row.noteCount), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 19\n      }\n    }, row.createdAt), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 19\n      }\n    }, row.updatedAt));\n  }))))));\n}\n\n_s(Notebooks, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Notebooks;\n\nvar _c;\n\n$RefreshReg$(_c, \"Notebooks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlYm9va3MudHN4P2RjODkiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0IiwibWFyZ2luIiwibm90ZWJvb2siLCJmb250U2l6ZSIsInBhZGRpbmciLCJwYXBlciIsIndpZHRoIiwidGFibGUiLCJjb2xvciIsInJvdyIsImJhY2tncm91bmRDb2xvciIsIk5vdGVib29rcyIsInByb3BzIiwiY2xhc3NlcyIsImdldFRpbWVNc2ciLCJkYXRlIiwiY3JlYXRlZFRpbWUiLCJEYXRlIiwidmFsdWVPZiIsImN1cnJlbnRUaW1lIiwic2Vjb25kIiwibWludXRlIiwiaG91ciIsImRpdmlkZXIiLCJ0aW1lTXNnIiwiZGlmZiIsImRhdGVBcnIiLCJ0b1N0cmluZyIsInNwbGl0IiwiZGlzcGxheVRpbWUiLCJNYXRoIiwiYWJzIiwicm91bmQiLCJwbHVyYWwiLCJ0aW1lTWVzc2FnZSIsImNyZWF0ZURhdGEiLCJpZCIsInRpdGxlIiwibm90ZUNvdW50IiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwicm93cyIsIm5vdGVib29rT3JkZXIiLCJtYXAiLCJub3RlYm9va3MiLCJub3RlcyIsImxlbmd0aCIsIlBhcGVyIiwiaGFuZGxlTm90ZWJvb2tDbGljayIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxNQURMO0FBRUpDLG1CQUFhLEVBQUUsUUFGWDtBQUdKQyxZQUFNLEVBQUUsT0FISjtBQUlKQyxZQUFNLEVBQUU7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LG1FQUFEO0FBQVcsV0FBSyxFQUFDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMkI3QixHQUFHLENBQUM4QixTQUEvQixDQVZGLEVBV0UsTUFBQyxtRUFBRDtBQUFXLFdBQUssRUFBQyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTJCOUIsR0FBRyxDQUFDK0IsU0FBL0IsQ0FYRixDQURRO0FBQUEsR0FBVCxDQURILENBVEYsQ0FERixDQURGLENBRkYsQ0FERjtBQW9DRDs7R0F6RnVCN0IsUztVQUNObEIsUzs7O0tBRE1rQixTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ub3RlYm9va3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IElOb3RlYm9vayBmcm9tICcuL2ludGVyZmFjZXMvaW5vdGVib29rJztcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgIH0sXG4gICAgbm90ZWJvb2s6IHtcbiAgICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgICBwYWRkaW5nOiAnMjBweCAzMHB4JyxcbiAgICB9LFxuICAgIHBhcGVyOiB7XG4gICAgICB3aWR0aDogODAwLFxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgcGFkZGluZzogJzEwcHggMzBweCcsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGNvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgIH0sXG4gICAgcm93OiB7XG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDc1LDE2NCw2NSknLFxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmludGVyZmFjZSBJTm90ZWJvb2tzUHJvcHMge1xuICBub3RlYm9va3M6IElOb3RlYm9vaztcbiAgbm90ZWJvb2tPcmRlcjogQXJyYXk8c3RyaW5nPjtcbiAgaGFuZGxlTm90ZWJvb2tDbGljazogKG5vdGVib29rOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVib29rcyhwcm9wczogSU5vdGVib29rc1Byb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBnZXRUaW1lTXNnID0gKGRhdGU6IERhdGUpID0+IHtcbiAgICBjb25zdCBjcmVhdGVkVGltZSA9IG5ldyBEYXRlKGRhdGUpLnZhbHVlT2YoKTtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgIGNvbnN0IHNlY29uZCA9IDYwO1xuICAgIGNvbnN0IG1pbnV0ZSA9IDYwO1xuICAgIGNvbnN0IGhvdXIgPSAyNDtcbiAgICBsZXQgZGl2aWRlciA9IDE7XG4gICAgbGV0IHRpbWVNc2cgPSAnJztcbiAgICBsZXQgZGlmZiA9IChjdXJyZW50VGltZSAtIGNyZWF0ZWRUaW1lKSAvIDEwMDA7XG4gICAgaWYgKGRpZmYgPD0gc2Vjb25kKSB7XG4gICAgICB0aW1lTXNnID0gJ3NlY29uZCc7XG4gICAgfSBlbHNlIGlmIChkaWZmIDw9IHNlY29uZCAqIG1pbnV0ZSkge1xuICAgICAgZGl2aWRlciA9IHNlY29uZDtcbiAgICAgIHRpbWVNc2cgPSAnbWludXRlJztcbiAgICB9IGVsc2UgaWYgKGRpZmYgPD0gc2Vjb25kICogbWludXRlICogaG91cikge1xuICAgICAgZGl2aWRlciA9IHNlY29uZCAqIG1pbnV0ZTtcbiAgICAgIHRpbWVNc2cgPSAnaG91cic7XG4gICAgfSBlbHNlIGlmIChkaWZmIDw9IDE3MjgwMCkge1xuICAgICAgcmV0dXJuICdZZXN0ZXJkYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkYXRlQXJyID0gZGF0ZS50b1N0cmluZygpLnNwbGl0KCcgJyk7XG4gICAgICByZXR1cm4gYCR7ZGF0ZUFyclsxXX0gJHtkYXRlQXJyWzJdfSwgJHtkYXRlQXJyWzNdfWA7XG4gICAgfVxuICAgIGRpZmYgLz0gZGl2aWRlcjtcbiAgICBjb25zdCBkaXNwbGF5VGltZSA9IE1hdGguYWJzKE1hdGgucm91bmQoZGlmZikpO1xuICAgIGNvbnN0IHBsdXJhbCA9IGRpc3BsYXlUaW1lID4gMSA/ICdzJyA6ICcnO1xuICAgIGNvbnN0IHRpbWVNZXNzYWdlID0gYCR7ZGlzcGxheVRpbWV9ICR7dGltZU1zZ30ke3BsdXJhbH0gYWdvYDtcbiAgICByZXR1cm4gdGltZU1lc3NhZ2U7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRGF0YSA9IChcbiAgICBpZDogc3RyaW5nLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgbm90ZUNvdW50OiBudW1iZXIsXG4gICAgY3JlYXRlZEF0OiBzdHJpbmcsXG4gICAgdXBkYXRlZEF0OiBzdHJpbmdcbiAgKSA9PiB7XG4gICAgcmV0dXJuIHsgaWQsIHRpdGxlLCBub3RlQ291bnQsIGNyZWF0ZWRBdCwgdXBkYXRlZEF0IH07XG4gIH07XG5cbiAgY29uc3Qgcm93cyA9IHByb3BzLm5vdGVib29rT3JkZXIubWFwKChub3RlYm9vazogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZURhdGEoXG4gICAgICBwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tdLmlkLFxuICAgICAgcHJvcHMubm90ZWJvb2tzW25vdGVib29rXS50aXRsZSxcbiAgICAgIHByb3BzLm5vdGVib29rc1tub3RlYm9va10ubm90ZXMubGVuZ3RoLFxuICAgICAgZ2V0VGltZU1zZyhwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tdLmNyZWF0ZWRBdCksXG4gICAgICBnZXRUaW1lTXNnKHByb3BzLm5vdGVib29rc1tub3RlYm9va10udXBkYXRlZEF0KVxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RlYm9va30+Tm90ZWJvb2tzPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwiY3VzdG9taXplZCB0YWJsZVwiPlxuICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+Tm90ZWJvb2s8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+TnVtYmVyIG9mIE5vdGVzPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPkNyZWF0ZWQgRGF0ZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5VcGRhdGUgRGF0ZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxuICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5pZH0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvd30+XG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRoXCJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVOb3RlYm9va0NsaWNrKHJvdy5pZCl9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtyb3cudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57cm93Lm5vdGVDb3VudH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57cm93LmNyZWF0ZWRBdH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57cm93LnVwZGF0ZWRBdH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgIDwvVGFibGVDb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/notebooks.tsx\n");

/***/ })

})
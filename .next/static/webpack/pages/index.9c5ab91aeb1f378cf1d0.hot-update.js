webpackHotUpdate_N_E("pages/index",{

/***/ "./components/notebooks.tsx":
/*!**********************************!*\
  !*** ./components/notebooks.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Notebooks; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/esm/Table/index.js\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"./node_modules/@material-ui/core/esm/TableBody/index.js\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/esm/TableCell/index.js\");\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableContainer */ \"./node_modules/@material-ui/core/esm/TableContainer/index.js\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/esm/TableHead/index.js\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/esm/TableRow/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/notebooks.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      // alignItems: 'center',\n      // justifyItems: 'center',\n      flexDdirection: 'column',\n      height: '100vh',\n      margin: 'auto'\n    },\n    notebook: {\n      fontSize: '24px'\n    },\n    paper: {\n      // display: 'flex',\n      // alignItems: 'center',\n      // justifyItems: 'center',\n      flexDdirection: 'row',\n      width: 800,\n      height: '100vh',\n      padding: '50px'\n    },\n    table: {\n      width: '100%',\n      color: 'rgb(51,51,51)',\n      fontSize: '14px'\n    }\n  });\n});\nfunction Notebooks(props) {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n\n  var getTimeMsg = function getTimeMsg(date) {\n    var createdTime = new Date(date).valueOf();\n    var currentTime = new Date().valueOf();\n    var second = 60;\n    var minute = 60;\n    var hour = 24;\n    var day = 30;\n    var month = 12;\n    var divider = 1;\n    var timeMsg = '';\n    var diff = (currentTime - createdTime) / 1000;\n\n    if (diff <= second) {\n      timeMsg = 'second';\n    } else if (diff <= second * minute) {\n      divider = second;\n      timeMsg = 'minute';\n    } else if (diff <= second * minute * hour) {\n      divider = second * minute;\n      timeMsg = 'hour';\n    } else if (diff <= 172800) {\n      return 'Yesterday';\n    } else {\n      return \"\".concat(date.getMonth(), \" \").concat(date.getDate(), \", \").concat(date.getFullYear());\n    }\n\n    diff /= divider;\n    var displayTime = Math.abs(Math.round(diff));\n    var plural = displayTime > 1 ? 's' : '';\n    var timeMessage = \"\".concat(displayTime, \" \").concat(timeMsg).concat(plural, \" ago\");\n    return timeMessage;\n  };\n\n  var createData = function createData(id, title, noteCount, createdAt, updatedAt) {\n    return {\n      id: id,\n      title: title,\n      noteCount: noteCount,\n      createdAt: createdAt,\n      updatedAt: updatedAt\n    };\n  };\n\n  var rows = props.notebookOrder.map(function (notebook) {\n    return createData(props.notebooks[notebook].id, props.notebooks[notebook].title, props.notebooks[notebook].notes.length, getTimeMsg(props.notebooks[notebook].createdAt), getTimeMsg(props.notebooks[notebook].updatedAt));\n  });\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: classes.notebook,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }\n  }, \"Notebooks\"), __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: classes.table,\n    \"aria-label\": \"customized table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 17\n    }\n  }, \"Notebook\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 17\n    }\n  }, \"Number of Notes\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 17\n    }\n  }, \"Created Date\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 17\n    }\n  }, \"Update Date\"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 13\n    }\n  }, rows.map(function (row) {\n    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: row.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 17\n      }\n    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      component: \"th\",\n      scope: \"row\",\n      onClick: function onClick() {\n        return props.handleNotebookClick(row.id);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 19\n      }\n    }, row.title), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 19\n      }\n    }, row.noteCount), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 19\n      }\n    }, row.createdAt), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 19\n      }\n    }, row.updatedAt));\n  }))))));\n}\n\n_s(Notebooks, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Notebooks;\n\nvar _c;\n\n$RefreshReg$(_c, \"Notebooks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlYm9va3MudHN4P2RjODkiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGRpcmVjdGlvbiIsImhlaWdodCIsIm1hcmdpbiIsIm5vdGVib29rIiwiZm9udFNpemUiLCJwYXBlciIsIndpZHRoIiwicGFkZGluZyIsInRhYmxlIiwiY29sb3IiLCJOb3RlYm9va3MiLCJwcm9wcyIsImNsYXNzZXMiLCJnZXRUaW1lTXNnIiwiZGF0ZSIsImNyZWF0ZWRUaW1lIiwiRGF0ZSIsInZhbHVlT2YiLCJjdXJyZW50VGltZSIsInNlY29uZCIsIm1pbnV0ZSIsImhvdXIiLCJkYXkiLCJtb250aCIsImRpdmlkZXIiLCJ0aW1lTXNnIiwiZGlmZiIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEZ1bGxZZWFyIiwiZGlzcGxheVRpbWUiLCJNYXRoIiwiYWJzIiwicm91bmQiLCJwbHVyYWwiLCJ0aW1lTWVzc2FnZSIsImNyZWF0ZURhdGEiLCJpZCIsInRpdGxlIiwibm90ZUNvdW50IiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwicm93cyIsIm5vdGVib29rT3JkZXIiLCJtYXAiLCJub3RlYm9va3MiLCJub3RlcyIsImxlbmd0aCIsIlBhcGVyIiwicm93IiwiaGFuZGxlTm90ZWJvb2tDbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxNQURMO0FBRUo7QUFDQTtBQUNBQyxvQkFBYyxFQUFFLFFBSlo7QUFLSkMsWUFBTSxFQUFFLE9BTEo7QUFNSkMsWUFBTSxF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LE9BQTJCUyxHQUFHLENBQUNSLFNBQS9CLENBVkYsQ0FEUTtBQUFBLEdBQVQsQ0FESCxDQVRGLENBREYsQ0FERixDQUZGLENBREY7QUFtQ0Q7O0dBekZ1Qi9CLFM7VUFDTmhCLFM7OztLQURNZ0IsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvbm90ZWJvb2tzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBJTm90ZWJvb2sgZnJvbSAnLi9pbnRlcmZhY2VzL2lub3RlYm9vayc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgLy8gYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAvLyBqdXN0aWZ5SXRlbXM6ICdjZW50ZXInLFxuICAgICAgZmxleERkaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgfSxcbiAgICBub3RlYm9vazoge1xuICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICB9LFxuICAgIHBhcGVyOiB7XG4gICAgICAvLyBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAvLyBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIC8vIGp1c3RpZnlJdGVtczogJ2NlbnRlcicsXG4gICAgICBmbGV4RGRpcmVjdGlvbjogJ3JvdycsXG4gICAgICB3aWR0aDogODAwLFxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgcGFkZGluZzogJzUwcHgnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBjb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICB9LFxuICB9KVxuKTtcblxuaW50ZXJmYWNlIElOb3RlYm9va3NQcm9wcyB7XG4gIG5vdGVib29rczogSU5vdGVib29rO1xuICBub3RlYm9va09yZGVyOiBBcnJheTxzdHJpbmc+O1xuICBoYW5kbGVOb3RlYm9va0NsaWNrOiAobm90ZWJvb2s6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZWJvb2tzKHByb3BzOiBJTm90ZWJvb2tzUHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IGdldFRpbWVNc2cgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZWRUaW1lID0gbmV3IERhdGUoZGF0ZSkudmFsdWVPZigpO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG4gICAgY29uc3Qgc2Vjb25kID0gNjA7XG4gICAgY29uc3QgbWludXRlID0gNjA7XG4gICAgY29uc3QgaG91ciA9IDI0O1xuICAgIGNvbnN0IGRheSA9IDMwO1xuICAgIGNvbnN0IG1vbnRoID0gMTI7XG4gICAgbGV0IGRpdmlkZXIgPSAxO1xuICAgIGxldCB0aW1lTXNnID0gJyc7XG4gICAgbGV0IGRpZmYgPSAoY3VycmVudFRpbWUgLSBjcmVhdGVkVGltZSkgLyAxMDAwO1xuICAgIGlmIChkaWZmIDw9IHNlY29uZCkge1xuICAgICAgdGltZU1zZyA9ICdzZWNvbmQnO1xuICAgIH0gZWxzZSBpZiAoZGlmZiA8PSBzZWNvbmQgKiBtaW51dGUpIHtcbiAgICAgIGRpdmlkZXIgPSBzZWNvbmQ7XG4gICAgICB0aW1lTXNnID0gJ21pbnV0ZSc7XG4gICAgfSBlbHNlIGlmIChkaWZmIDw9IHNlY29uZCAqIG1pbnV0ZSAqIGhvdXIpIHtcbiAgICAgIGRpdmlkZXIgPSBzZWNvbmQgKiBtaW51dGU7XG4gICAgICB0aW1lTXNnID0gJ2hvdXInO1xuICAgIH0gZWxzZSBpZiAoZGlmZiA8PSAxNzI4MDApIHtcbiAgICAgIHJldHVybiAnWWVzdGVyZGF5JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAke2RhdGUuZ2V0TW9udGgoKX0gJHtkYXRlLmdldERhdGUoKX0sICR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XG4gICAgfVxuICAgIGRpZmYgLz0gZGl2aWRlcjtcbiAgICBjb25zdCBkaXNwbGF5VGltZSA9IE1hdGguYWJzKE1hdGgucm91bmQoZGlmZikpO1xuICAgIGNvbnN0IHBsdXJhbCA9IGRpc3BsYXlUaW1lID4gMSA/ICdzJyA6ICcnO1xuICAgIGNvbnN0IHRpbWVNZXNzYWdlID0gYCR7ZGlzcGxheVRpbWV9ICR7dGltZU1zZ30ke3BsdXJhbH0gYWdvYDtcbiAgICByZXR1cm4gdGltZU1lc3NhZ2U7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRGF0YSA9IChcbiAgICBpZDogc3RyaW5nLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgbm90ZUNvdW50OiBudW1iZXIsXG4gICAgY3JlYXRlZEF0OiBzdHJpbmcsXG4gICAgdXBkYXRlZEF0OiBzdHJpbmdcbiAgKSA9PiB7XG4gICAgcmV0dXJuIHsgaWQsIHRpdGxlLCBub3RlQ291bnQsIGNyZWF0ZWRBdCwgdXBkYXRlZEF0IH07XG4gIH07XG5cbiAgY29uc3Qgcm93cyA9IHByb3BzLm5vdGVib29rT3JkZXIubWFwKChub3RlYm9vazogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZURhdGEoXG4gICAgICBwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tdLmlkLFxuICAgICAgcHJvcHMubm90ZWJvb2tzW25vdGVib29rXS50aXRsZSxcbiAgICAgIHByb3BzLm5vdGVib29rc1tub3RlYm9va10ubm90ZXMubGVuZ3RoLFxuICAgICAgZ2V0VGltZU1zZyhwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tdLmNyZWF0ZWRBdCksXG4gICAgICBnZXRUaW1lTXNnKHByb3BzLm5vdGVib29rc1tub3RlYm9va10udXBkYXRlZEF0KVxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RlYm9va30+Tm90ZWJvb2tzPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwiY3VzdG9taXplZCB0YWJsZVwiPlxuICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+Tm90ZWJvb2s8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+TnVtYmVyIG9mIE5vdGVzPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPkNyZWF0ZWQgRGF0ZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5VcGRhdGUgRGF0ZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxuICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5pZH0+XG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRoXCJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVOb3RlYm9va0NsaWNrKHJvdy5pZCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtyb3cudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57cm93Lm5vdGVDb3VudH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57cm93LmNyZWF0ZWRBdH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57cm93LnVwZGF0ZWRBdH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgIDwvVGFibGVDb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/notebooks.tsx\n");

/***/ })

})
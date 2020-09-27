webpackHotUpdate_N_E("pages/index",{

/***/ "./components/notebooks.tsx":
/*!**********************************!*\
  !*** ./components/notebooks.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Notebooks; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/esm/Table/index.js\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"./node_modules/@material-ui/core/esm/TableBody/index.js\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/esm/TableCell/index.js\");\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableContainer */ \"./node_modules/@material-ui/core/esm/TableContainer/index.js\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/esm/TableHead/index.js\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/esm/TableRow/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/notebooks.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      // alignItems: 'center',\n      // justifyItems: 'center',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto'\n    },\n    notebook: {\n      fontSize: '24px',\n      padding: '20px 30px'\n    },\n    paper: {\n      width: 800,\n      height: '100vh',\n      padding: '10px 30px'\n    },\n    table: {\n      width: '100%',\n      color: 'rgb(51,51,51)',\n      fontSize: '14px'\n    },\n    row: {\n      '&:hover': {\n        backgroundColor: 'rgb(75,164,65)',\n        color: 'white'\n      }\n    }\n  });\n});\nfunction Notebooks(props) {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n\n  var getTimeMsg = function getTimeMsg(date) {\n    var createdTime = new Date(date).valueOf();\n    var currentTime = new Date().valueOf();\n    var second = 60;\n    var minute = 60;\n    var hour = 24;\n    var divider = 1;\n    var timeMsg = '';\n    var diff = (currentTime - createdTime) / 1000;\n\n    if (diff <= second) {\n      timeMsg = 'second';\n    } else if (diff <= second * minute) {\n      divider = second;\n      timeMsg = 'minute';\n    } else if (diff <= second * minute * hour) {\n      divider = second * minute;\n      timeMsg = 'hour';\n    } else if (diff <= 172800) {\n      return 'Yesterday';\n    } else {\n      var dateArr = date.toString().split(' ');\n      return \"\".concat(dateArr[1], \" \").concat(dateArr[2], \", \").concat(dateArr[3]);\n    }\n\n    diff /= divider;\n    var displayTime = Math.abs(Math.round(diff));\n    var plural = displayTime > 1 ? 's' : '';\n    var timeMessage = \"\".concat(displayTime, \" \").concat(timeMsg).concat(plural, \" ago\");\n    return timeMessage;\n  };\n\n  var createData = function createData(id, title, noteCount, createdAt, updatedAt) {\n    return {\n      id: id,\n      title: title,\n      noteCount: noteCount,\n      createdAt: createdAt,\n      updatedAt: updatedAt\n    };\n  };\n\n  var rows = props.notebookOrder.map(function (notebook) {\n    return createData(props.notebooks[notebook].id, props.notebooks[notebook].title, props.notebooks[notebook].notes.length, getTimeMsg(props.notebooks[notebook].createdAt), getTimeMsg(props.notebooks[notebook].updatedAt));\n  });\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: classes.notebook,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }\n  }, \"Notebooks\"), __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: classes.table,\n    \"aria-label\": \"customized table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 17\n    }\n  }, \"Notebook\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 17\n    }\n  }, \"Number of Notes\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 17\n    }\n  }, \"Created Date\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 17\n    }\n  }, \"Update Date\"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 13\n    }\n  }, rows.map(function (row) {\n    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: row.id,\n      className: classes.row,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 17\n      }\n    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      component: \"th\",\n      scope: \"row\",\n      onClick: function onClick() {\n        return props.handleNotebookClick(row.id);\n      },\n      style: {\n        cursor: 'pointer'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 19\n      }\n    }, row.title), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 19\n      }\n    }, row.noteCount), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 19\n      }\n    }, row.createdAt), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 19\n      }\n    }, row.updatedAt));\n  }))))));\n}\n\n_s(Notebooks, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Notebooks;\n\nvar _c;\n\n$RefreshReg$(_c, \"Notebooks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlYm9va3MudHN4P2RjODkiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0IiwibWFyZ2luIiwibm90ZWJvb2siLCJmb250U2l6ZSIsInBhZGRpbmciLCJwYXBlciIsIndpZHRoIiwidGFibGUiLCJjb2xvciIsInJvdyIsImJhY2tncm91bmRDb2xvciIsIk5vdGVib29rcyIsInByb3BzIiwiY2xhc3NlcyIsImdldFRpbWVNc2ciLCJkYXRlIiwiY3JlYXRlZFRpbWUiLCJEYXRlIiwidmFsdWVPZiIsImN1cnJlbnRUaW1lIiwic2Vjb25kIiwibWludXRlIiwiaG91ciIsImRpdmlkZXIiLCJ0aW1lTXNnIiwiZGlmZiIsImRhdGVBcnIiLCJ0b1N0cmluZyIsInNwbGl0IiwiZGlzcGxheVRpbWUiLCJNYXRoIiwiYWJzIiwicm91bmQiLCJwbHVyYWwiLCJ0aW1lTWVzc2FnZSIsImNyZWF0ZURhdGEiLCJpZCIsInRpdGxlIiwibm90ZUNvdW50IiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwicm93cyIsIm5vdGVib29rT3JkZXIiLCJtYXAiLCJub3RlYm9va3MiLCJub3RlcyIsImxlbmd0aCIsIlBhcGVyIiwiaGFuZGxlTm90ZWJvb2tDbGljayIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxNQURMO0FBRUo7QUFDQTtBQUNBQyxtQkFBYSxFQUFFLFFBSlg7QUFLSkMsWUFBTSxFQUFFLE9BTEo7QUFNSkMs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LEVBVUUsTUFBQyxtRUFBRDtBQUFXLFdBQUssRUFBQyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTJCN0IsR0FBRyxDQUFDOEIsU0FBL0IsQ0FWRixFQVdFLE1BQUMsbUVBQUQ7QUFBVyxXQUFLLEVBQUMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEyQjlCLEdBQUcsQ0FBQytCLFNBQS9CLENBWEYsQ0FEUTtBQUFBLEdBQVQsQ0FESCxDQVRGLENBREYsQ0FERixDQUZGLENBREY7QUFvQ0Q7O0dBekZ1QjdCLFM7VUFDTmxCLFM7OztLQURNa0IsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvbm90ZWJvb2tzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBJTm90ZWJvb2sgZnJvbSAnLi9pbnRlcmZhY2VzL2lub3RlYm9vayc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgLy8gYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAvLyBqdXN0aWZ5SXRlbXM6ICdjZW50ZXInLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICB9LFxuICAgIG5vdGVib29rOiB7XG4gICAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgICAgcGFkZGluZzogJzIwcHggMzBweCcsXG4gICAgfSxcbiAgICBwYXBlcjoge1xuICAgICAgd2lkdGg6IDgwMCxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4IDMwcHgnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBjb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICB9LFxuICAgIHJvdzoge1xuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYig3NSwxNjQsNjUpJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5pbnRlcmZhY2UgSU5vdGVib29rc1Byb3BzIHtcbiAgbm90ZWJvb2tzOiBJTm90ZWJvb2s7XG4gIG5vdGVib29rT3JkZXI6IEFycmF5PHN0cmluZz47XG4gIGhhbmRsZU5vdGVib29rQ2xpY2s6IChub3RlYm9vazogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlYm9va3MocHJvcHM6IElOb3RlYm9va3NQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgZ2V0VGltZU1zZyA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlZFRpbWUgPSBuZXcgRGF0ZShkYXRlKS52YWx1ZU9mKCk7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICBjb25zdCBzZWNvbmQgPSA2MDtcbiAgICBjb25zdCBtaW51dGUgPSA2MDtcbiAgICBjb25zdCBob3VyID0gMjQ7XG4gICAgbGV0IGRpdmlkZXIgPSAxO1xuICAgIGxldCB0aW1lTXNnID0gJyc7XG4gICAgbGV0IGRpZmYgPSAoY3VycmVudFRpbWUgLSBjcmVhdGVkVGltZSkgLyAxMDAwO1xuICAgIGlmIChkaWZmIDw9IHNlY29uZCkge1xuICAgICAgdGltZU1zZyA9ICdzZWNvbmQnO1xuICAgIH0gZWxzZSBpZiAoZGlmZiA8PSBzZWNvbmQgKiBtaW51dGUpIHtcbiAgICAgIGRpdmlkZXIgPSBzZWNvbmQ7XG4gICAgICB0aW1lTXNnID0gJ21pbnV0ZSc7XG4gICAgfSBlbHNlIGlmIChkaWZmIDw9IHNlY29uZCAqIG1pbnV0ZSAqIGhvdXIpIHtcbiAgICAgIGRpdmlkZXIgPSBzZWNvbmQgKiBtaW51dGU7XG4gICAgICB0aW1lTXNnID0gJ2hvdXInO1xuICAgIH0gZWxzZSBpZiAoZGlmZiA8PSAxNzI4MDApIHtcbiAgICAgIHJldHVybiAnWWVzdGVyZGF5JztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGF0ZUFyciA9IGRhdGUudG9TdHJpbmcoKS5zcGxpdCgnICcpO1xuICAgICAgcmV0dXJuIGAke2RhdGVBcnJbMV19ICR7ZGF0ZUFyclsyXX0sICR7ZGF0ZUFyclszXX1gO1xuICAgIH1cbiAgICBkaWZmIC89IGRpdmlkZXI7XG4gICAgY29uc3QgZGlzcGxheVRpbWUgPSBNYXRoLmFicyhNYXRoLnJvdW5kKGRpZmYpKTtcbiAgICBjb25zdCBwbHVyYWwgPSBkaXNwbGF5VGltZSA+IDEgPyAncycgOiAnJztcbiAgICBjb25zdCB0aW1lTWVzc2FnZSA9IGAke2Rpc3BsYXlUaW1lfSAke3RpbWVNc2d9JHtwbHVyYWx9IGFnb2A7XG4gICAgcmV0dXJuIHRpbWVNZXNzYWdlO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZURhdGEgPSAoXG4gICAgaWQ6IHN0cmluZyxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIG5vdGVDb3VudDogbnVtYmVyLFxuICAgIGNyZWF0ZWRBdDogc3RyaW5nLFxuICAgIHVwZGF0ZWRBdDogc3RyaW5nXG4gICkgPT4ge1xuICAgIHJldHVybiB7IGlkLCB0aXRsZSwgbm90ZUNvdW50LCBjcmVhdGVkQXQsIHVwZGF0ZWRBdCB9O1xuICB9O1xuXG4gIGNvbnN0IHJvd3MgPSBwcm9wcy5ub3RlYm9va09yZGVyLm1hcCgobm90ZWJvb2s6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBjcmVhdGVEYXRhKFxuICAgICAgcHJvcHMubm90ZWJvb2tzW25vdGVib29rXS5pZCxcbiAgICAgIHByb3BzLm5vdGVib29rc1tub3RlYm9va10udGl0bGUsXG4gICAgICBwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tdLm5vdGVzLmxlbmd0aCxcbiAgICAgIGdldFRpbWVNc2cocHJvcHMubm90ZWJvb2tzW25vdGVib29rXS5jcmVhdGVkQXQpLFxuICAgICAgZ2V0VGltZU1zZyhwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tdLnVwZGF0ZWRBdClcbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZWJvb2t9Pk5vdGVib29rczwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gYXJpYS1sYWJlbD1cImN1c3RvbWl6ZWQgdGFibGVcIj5cbiAgICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPk5vdGVib29rPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPk51bWJlciBvZiBOb3RlczwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5DcmVhdGVkIERhdGU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+VXBkYXRlIERhdGU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgICAge3Jvd3MubWFwKChyb3cpID0+IChcbiAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cuaWR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb3d9PlxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0aFwiXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlTm90ZWJvb2tDbGljayhyb3cuaWQpfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cm93LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+e3Jvdy5ub3RlQ291bnR9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+e3Jvdy5jcmVhdGVkQXR9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+e3Jvdy51cGRhdGVkQXR9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/notebooks.tsx\n");

/***/ })

})
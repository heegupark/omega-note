webpackHotUpdate_N_E("pages/index",{

/***/ "./components/notebooks.tsx":
/*!**********************************!*\
  !*** ./components/notebooks.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Notebooks; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/esm/Table/index.js\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"./node_modules/@material-ui/core/esm/TableBody/index.js\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/esm/TableCell/index.js\");\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableContainer */ \"./node_modules/@material-ui/core/esm/TableContainer/index.js\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/esm/TableHead/index.js\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/esm/TableRow/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var array_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! array-sort */ \"./node_modules/array-sort/index.js\");\n/* harmony import */ var array_sort__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(array_sort__WEBPACK_IMPORTED_MODULE_9__);\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/notebooks.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto'\n    },\n    notebook: {\n      fontSize: '24px',\n      padding: '20px 30px'\n    },\n    paper: {\n      width: 800,\n      height: '100vh',\n      padding: '10px 30px'\n    },\n    table: {\n      width: '100%',\n      color: 'rgb(51,51,51)'\n    },\n    row: {\n      '&:hover': {\n        backgroundColor: 'lightgrey',\n        color: 'white'\n      }\n    }\n  });\n});\nfunction Notebooks(props) {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('title'),\n      category = _useState[0],\n      setCategory = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      reverse = _useState2[0],\n      setReverse = _useState2[1];\n\n  var getTimeMsg = function getTimeMsg(date) {\n    var createdTime = new Date(date).valueOf();\n    var currentTime = new Date().valueOf();\n    var second = 60;\n    var minute = 60;\n    var hour = 24;\n    var divider = 1;\n    var timeMsg = '';\n    var diff = (currentTime - createdTime) / 1000;\n\n    if (diff <= second) {\n      timeMsg = 'second';\n    } else if (diff <= second * minute) {\n      divider = second;\n      timeMsg = 'minute';\n    } else if (diff <= second * minute * hour) {\n      divider = second * minute;\n      timeMsg = 'hour';\n    } else if (diff <= 172800) {\n      return 'Yesterday';\n    } else {\n      var dateArr = date.toString().split(' ');\n      return \"\".concat(dateArr[1], \" \").concat(dateArr[2], \", \").concat(dateArr[3]);\n    }\n\n    diff /= divider;\n    var displayTime = Math.abs(Math.round(diff));\n    var plural = displayTime > 1 ? 's' : '';\n    var timeMessage = \"\".concat(displayTime, \" \").concat(timeMsg).concat(plural, \" ago\");\n    return timeMessage;\n  };\n\n  var createData = function createData(id, title, displayTitle, noteCount, createdAt, updatedAt) {\n    return {\n      id: id,\n      title: title,\n      displayTitle: displayTitle,\n      noteCount: noteCount,\n      createdAt: createdAt,\n      updatedAt: updatedAt\n    };\n  };\n\n  var rows = props.notebookOrder.map(function (notebook) {\n    return createData(props.notebooks[notebook].id, props.notebooks[notebook].title.toLowerCase(), props.notebooks[notebook].title, props.notebooks[notebook].notes.length, getTimeMsg(props.notebooks[notebook].createdAt), getTimeMsg(props.notebooks[notebook].updatedAt));\n  });\n\n  var handleSort = function handleSort(cat) {\n    setCategory(cat);\n\n    if (cat === category) {\n      setReverse(!reverse);\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: classes.notebook,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }\n  }, \"Notebooks\"), __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: classes.table,\n    \"aria-label\": \"customized table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onClick: function onClick() {\n      return handleSort('title');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 17\n    }\n  }, \"Title\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"center\",\n    onClick: function onClick() {\n      return handleSort('noteCount');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 17\n    }\n  }, \"Number of Notes\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"center\",\n    onClick: function onClick() {\n      return handleSort('createdAt');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 17\n    }\n  }, \"Created Date\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"center\",\n    onClick: function onClick() {\n      return handleSort('updatedAt');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 17\n    }\n  }, \"Update Date\"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 13\n    }\n  }, array_sort__WEBPACK_IMPORTED_MODULE_9___default()(rows, category, {\n    reverse: reverse\n  }).map(function (row) {\n    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: row.id,\n      className: classes.row,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 144,\n        columnNumber: 17\n      }\n    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      component: \"th\",\n      scope: \"row\",\n      onClick: function onClick() {\n        return props.handleNotebookClick(row.id);\n      },\n      style: {\n        cursor: 'pointer'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 19\n      }\n    }, row.displayTitle), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 19\n      }\n    }, row.noteCount), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 154,\n        columnNumber: 19\n      }\n    }, row.createdAt), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 155,\n        columnNumber: 19\n      }\n    }, row.updatedAt));\n  }))))));\n}\n\n_s(Notebooks, \"LCDKhMTJnorlSUXmvTPlATS8izs=\", false, function () {\n  return [useStyles];\n});\n\n_c = Notebooks;\n\nvar _c;\n\n$RefreshReg$(_c, \"Notebooks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlYm9va3MudHN4P2RjODkiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0IiwibWFyZ2luIiwibm90ZWJvb2siLCJmb250U2l6ZSIsInBhZGRpbmciLCJwYXBlciIsIndpZHRoIiwidGFibGUiLCJjb2xvciIsInJvdyIsImJhY2tncm91bmRDb2xvciIsIk5vdGVib29rcyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInJldmVyc2UiLCJzZXRSZXZlcnNlIiwiZ2V0VGltZU1zZyIsImRhdGUiLCJjcmVhdGVkVGltZSIsIkRhdGUiLCJ2YWx1ZU9mIiwiY3VycmVudFRpbWUiLCJzZWNvbmQiLCJtaW51dGUiLCJob3VyIiwiZGl2aWRlciIsInRpbWVNc2ciLCJkaWZmIiwiZGF0ZUFyciIsInRvU3RyaW5nIiwic3BsaXQiLCJkaXNwbGF5VGltZSIsIk1hdGgiLCJhYnMiLCJyb3VuZCIsInBsdXJhbCIsInRpbWVNZXNzYWdlIiwiY3JlYXRlRGF0YSIsImlkIiwidGl0bGUiLCJkaXNwbGF5VGl0bGUiLCJub3RlQ291bnQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJyb3dzIiwibm90ZWJvb2tPcmRlciIsIm1hcCIsIm5vdGVib29rcyIsInRvTG93ZXJDYXNlIiwibm90ZXMiLCJsZW5ndGgiLCJoYW5kbGVTb3J0IiwiY2F0IiwiUGFwZXIiLCJhcnJheVNvcnQiLCJoYW5kbGVOb3RlYm9va0NsaWNrIiwiY3Vyc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFD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U0FBL0IsQ0FWRixFQVdFLE1BQUMsbUVBQUQ7QUFBVyxXQUFLLEVBQUMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEyQnBDLEdBQUcsQ0FBQ3FDLFNBQS9CLENBWEYsQ0FEMEM7QUFBQSxHQUEzQyxDQURILENBeEJGLENBREYsQ0FERixDQUZGLENBREY7QUFtREQ7O0dBbkh1Qm5DLFM7VUFDTmxCLFM7OztLQURNa0IsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvbm90ZWJvb2tzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IElOb3RlYm9vayBmcm9tICcuL2ludGVyZmFjZXMvaW5vdGVib29rJztcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgYXJyYXlTb3J0IGZyb20gJ2FycmF5LXNvcnQnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICB9LFxuICAgIG5vdGVib29rOiB7XG4gICAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgICAgcGFkZGluZzogJzIwcHggMzBweCcsXG4gICAgfSxcbiAgICBwYXBlcjoge1xuICAgICAgd2lkdGg6IDgwMCxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4IDMwcHgnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBjb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgIH0sXG4gICAgcm93OiB7XG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmV5JyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5pbnRlcmZhY2UgSU5vdGVib29rc1Byb3BzIHtcbiAgbm90ZWJvb2tzOiBJTm90ZWJvb2s7XG4gIG5vdGVib29rT3JkZXI6IEFycmF5PHN0cmluZz47XG4gIGhhbmRsZU5vdGVib29rQ2xpY2s6IChub3RlYm9vazogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlYm9va3MocHJvcHM6IElOb3RlYm9va3NQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGU8c3RyaW5nPigndGl0bGUnKTtcbiAgY29uc3QgW3JldmVyc2UsIHNldFJldmVyc2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IGdldFRpbWVNc2cgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZWRUaW1lID0gbmV3IERhdGUoZGF0ZSkudmFsdWVPZigpO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG4gICAgY29uc3Qgc2Vjb25kID0gNjA7XG4gICAgY29uc3QgbWludXRlID0gNjA7XG4gICAgY29uc3QgaG91ciA9IDI0O1xuICAgIGxldCBkaXZpZGVyID0gMTtcbiAgICBsZXQgdGltZU1zZyA9ICcnO1xuICAgIGxldCBkaWZmID0gKGN1cnJlbnRUaW1lIC0gY3JlYXRlZFRpbWUpIC8gMTAwMDtcbiAgICBpZiAoZGlmZiA8PSBzZWNvbmQpIHtcbiAgICAgIHRpbWVNc2cgPSAnc2Vjb25kJztcbiAgICB9IGVsc2UgaWYgKGRpZmYgPD0gc2Vjb25kICogbWludXRlKSB7XG4gICAgICBkaXZpZGVyID0gc2Vjb25kO1xuICAgICAgdGltZU1zZyA9ICdtaW51dGUnO1xuICAgIH0gZWxzZSBpZiAoZGlmZiA8PSBzZWNvbmQgKiBtaW51dGUgKiBob3VyKSB7XG4gICAgICBkaXZpZGVyID0gc2Vjb25kICogbWludXRlO1xuICAgICAgdGltZU1zZyA9ICdob3VyJztcbiAgICB9IGVsc2UgaWYgKGRpZmYgPD0gMTcyODAwKSB7XG4gICAgICByZXR1cm4gJ1llc3RlcmRheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGVBcnIgPSBkYXRlLnRvU3RyaW5nKCkuc3BsaXQoJyAnKTtcbiAgICAgIHJldHVybiBgJHtkYXRlQXJyWzFdfSAke2RhdGVBcnJbMl19LCAke2RhdGVBcnJbM119YDtcbiAgICB9XG4gICAgZGlmZiAvPSBkaXZpZGVyO1xuICAgIGNvbnN0IGRpc3BsYXlUaW1lID0gTWF0aC5hYnMoTWF0aC5yb3VuZChkaWZmKSk7XG4gICAgY29uc3QgcGx1cmFsID0gZGlzcGxheVRpbWUgPiAxID8gJ3MnIDogJyc7XG4gICAgY29uc3QgdGltZU1lc3NhZ2UgPSBgJHtkaXNwbGF5VGltZX0gJHt0aW1lTXNnfSR7cGx1cmFsfSBhZ29gO1xuICAgIHJldHVybiB0aW1lTWVzc2FnZTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVEYXRhID0gKFxuICAgIGlkOiBzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBkaXNwbGF5VGl0bGU6IHN0cmluZyxcbiAgICBub3RlQ291bnQ6IG51bWJlcixcbiAgICBjcmVhdGVkQXQ6IHN0cmluZyxcbiAgICB1cGRhdGVkQXQ6IHN0cmluZ1xuICApID0+IHtcbiAgICByZXR1cm4geyBpZCwgdGl0bGUsIGRpc3BsYXlUaXRsZSwgbm90ZUNvdW50LCBjcmVhdGVkQXQsIHVwZGF0ZWRBdCB9O1xuICB9O1xuXG4gIGNvbnN0IHJvd3MgPSBwcm9wcy5ub3RlYm9va09yZGVyLm1hcCgobm90ZWJvb2s6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBjcmVhdGVEYXRhKFxuICAgICAgcHJvcHMubm90ZWJvb2tzW25vdGVib29rXS5pZCxcbiAgICAgIHByb3BzLm5vdGVib29rc1tub3RlYm9va10udGl0bGUudG9Mb3dlckNhc2UoKSxcbiAgICAgIHByb3BzLm5vdGVib29rc1tub3RlYm9va10udGl0bGUsXG4gICAgICBwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tdLm5vdGVzLmxlbmd0aCxcbiAgICAgIGdldFRpbWVNc2cocHJvcHMubm90ZWJvb2tzW25vdGVib29rXS5jcmVhdGVkQXQpLFxuICAgICAgZ2V0VGltZU1zZyhwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tdLnVwZGF0ZWRBdClcbiAgICApO1xuICB9KTtcblxuICBjb25zdCBoYW5kbGVTb3J0ID0gKGNhdDogc3RyaW5nKSA9PiB7XG4gICAgc2V0Q2F0ZWdvcnkoY2F0KTtcbiAgICBpZiAoY2F0ID09PSBjYXRlZ29yeSkge1xuICAgICAgc2V0UmV2ZXJzZSghcmV2ZXJzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RlYm9va30+Tm90ZWJvb2tzPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwiY3VzdG9taXplZCB0YWJsZVwiPlxuICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgb25DbGljaz17KCkgPT4gaGFuZGxlU29ydCgndGl0bGUnKX0+VGl0bGU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTb3J0KCdub3RlQ291bnQnKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBOdW1iZXIgb2YgTm90ZXNcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTb3J0KCdjcmVhdGVkQXQnKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDcmVhdGVkIERhdGVcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTb3J0KCd1cGRhdGVkQXQnKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBVcGRhdGUgRGF0ZVxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICB7YXJyYXlTb3J0KHJvd3MsIGNhdGVnb3J5LCB7IHJldmVyc2UgfSkubWFwKChyb3cpID0+IChcbiAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cuaWR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb3d9PlxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0aFwiXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlTm90ZWJvb2tDbGljayhyb3cuaWQpfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cm93LmRpc3BsYXlUaXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntyb3cubm90ZUNvdW50fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntyb3cuY3JlYXRlZEF0fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntyb3cudXBkYXRlZEF0fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/notebooks.tsx\n");

/***/ })

})
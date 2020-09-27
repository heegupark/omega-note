webpackHotUpdate_N_E("pages/index",{

/***/ "./components/notebooks.tsx":
/*!**********************************!*\
  !*** ./components/notebooks.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Notebooks; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/esm/Table/index.js\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"./node_modules/@material-ui/core/esm/TableBody/index.js\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/esm/TableCell/index.js\");\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableContainer */ \"./node_modules/@material-ui/core/esm/TableContainer/index.js\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/esm/TableHead/index.js\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/esm/TableRow/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var array_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! array-sort */ \"./node_modules/array-sort/index.js\");\n/* harmony import */ var array_sort__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(array_sort__WEBPACK_IMPORTED_MODULE_9__);\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/notebooks.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto'\n    },\n    notebook: {\n      fontSize: '24px',\n      padding: '20px 30px'\n    },\n    paper: {\n      width: 800,\n      height: '100vh',\n      padding: '10px 30px'\n    },\n    table: {\n      width: '100%',\n      color: 'rgb(51,51,51)'\n    },\n    row: {\n      '&:hover': {\n        backgroundColor: 'rgb(75,164,65)',\n        color: 'white'\n      }\n    }\n  });\n});\nfunction Notebooks(props) {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('title'),\n      category = _useState[0],\n      setCategory = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      reverse = _useState2[0],\n      setReverse = _useState2[1];\n\n  var getTimeMsg = function getTimeMsg(date) {\n    var createdTime = new Date(date).valueOf();\n    var currentTime = new Date().valueOf();\n    var second = 60;\n    var minute = 60;\n    var hour = 24;\n    var divider = 1;\n    var timeMsg = '';\n    var diff = (currentTime - createdTime) / 1000;\n\n    if (diff <= second) {\n      timeMsg = 'second';\n    } else if (diff <= second * minute) {\n      divider = second;\n      timeMsg = 'minute';\n    } else if (diff <= second * minute * hour) {\n      divider = second * minute;\n      timeMsg = 'hour';\n    } else if (diff <= 172800) {\n      return 'Yesterday';\n    } else {\n      var dateArr = date.toString().split(' ');\n      return \"\".concat(dateArr[1], \" \").concat(dateArr[2], \", \").concat(dateArr[3]);\n    }\n\n    diff /= divider;\n    var displayTime = Math.abs(Math.round(diff));\n    var plural = displayTime > 1 ? 's' : '';\n    var timeMessage = \"\".concat(displayTime, \" \").concat(timeMsg).concat(plural, \" ago\");\n    return timeMessage;\n  };\n\n  var createData = function createData(id, title, noteCount, createdAt, updatedAt) {\n    return {\n      id: id,\n      title: title,\n      noteCount: noteCount,\n      createdAt: createdAt,\n      updatedAt: updatedAt\n    };\n  };\n\n  var rows = props.notebookOrder.map(function (notebook) {\n    return createData(props.notebooks[notebook].id, props.notebooks[notebook].title, props.notebooks[notebook].notes.length, getTimeMsg(props.notebooks[notebook].createdAt), getTimeMsg(props.notebooks[notebook].updatedAt));\n  });\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: classes.notebook,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }\n  }, \"Notebooks\"), __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: classes.table,\n    \"aria-label\": \"customized table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onClick: function onClick() {\n      return setCategory('notebook');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 17\n    }\n  }, \"Notebook\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 17\n    }\n  }, \"Number of Notes\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 17\n    }\n  }, \"Created Date\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 17\n    }\n  }, \"Update Date\"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 13\n    }\n  }, array_sort__WEBPACK_IMPORTED_MODULE_9___default()(rows, category, {\n    reverse: reverse\n  }).map(function (row) {\n    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: row.id,\n      className: classes.row,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 17\n      }\n    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      component: \"th\",\n      scope: \"row\",\n      onClick: function onClick() {\n        return props.handleNotebookClick(row.id);\n      },\n      style: {\n        cursor: 'pointer'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 19\n      }\n    }, row.title), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 19\n      }\n    }, row.noteCount), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 19\n      }\n    }, row.createdAt), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 19\n      }\n    }, row.updatedAt));\n  }))))));\n}\n\n_s(Notebooks, \"LCDKhMTJnorlSUXmvTPlATS8izs=\", false, function () {\n  return [useStyles];\n});\n\n_c = Notebooks;\n\nvar _c;\n\n$RefreshReg$(_c, \"Notebooks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlYm9va3MudHN4P2RjODkiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0IiwibWFyZ2luIiwibm90ZWJvb2siLCJmb250U2l6ZSIsInBhZGRpbmciLCJwYXBlciIsIndpZHRoIiwidGFibGUiLCJjb2xvciIsInJvdyIsImJhY2tncm91bmRDb2xvciIsIk5vdGVib29rcyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInJldmVyc2UiLCJzZXRSZXZlcnNlIiwiZ2V0VGltZU1zZyIsImRhdGUiLCJjcmVhdGVkVGltZSIsIkRhdGUiLCJ2YWx1ZU9mIiwiY3VycmVudFRpbWUiLCJzZWNvbmQiLCJtaW51dGUiLCJob3VyIiwiZGl2aWRlciIsInRpbWVNc2ciLCJkaWZmIiwiZGF0ZUFyciIsInRvU3RyaW5nIiwic3BsaXQiLCJkaXNwbGF5VGltZSIsIk1hdGgiLCJhYnMiLCJyb3VuZCIsInBsdXJhbCIsInRpbWVNZXNzYWdlIiwiY3JlYXRlRGF0YSIsImlkIiwidGl0bGUiLCJub3RlQ291bnQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJyb3dzIiwibm90ZWJvb2tPcmRlciIsIm1hcCIsIm5vdGVib29rcyIsIm5vdGVzIiwibGVuZ3RoIiwiUGFwZXIiLCJhcnJheVNvcnQiLCJoYW5kbGVOb3RlYm9va0NsaWNrIiwiY3Vyc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FB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QyxJQURaO0FBRUUsV0FBSyxFQUFDLEtBRlI7QUFHRSxhQUFPLEVBQUU7QUFBQSxlQUFNRyxLQUFLLENBQUMwQyxtQkFBTixDQUEwQjdDLEdBQUcsQ0FBQ2dDLEVBQTlCLENBQU47QUFBQSxPQUhYO0FBSUUsV0FBSyxFQUFFO0FBQUVjLGNBQU0sRUFBRTtBQUFWLE9BSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1HOUMsR0FBRyxDQUFDaUMsS0FOUCxDQURGLEVBU0UsTUFBQyxtRUFBRDtBQUFXLFdBQUssRUFBQyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTJCakMsR0FBRyxDQUFDa0MsU0FBL0IsQ0FURixFQVVFLE1BQUMsbUVBQUQ7QUFBVyxXQUFLLEVBQUMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEyQmxDLEdBQUcsQ0FBQ21DLFNBQS9CLENBVkYsRUFXRSxNQUFDLG1FQUFEO0FBQVcsV0FBSyxFQUFDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMkJuQyxHQUFHLENBQUNvQyxTQUEvQixDQVhGLENBRDBDO0FBQUEsR0FBM0MsQ0FESCxDQVhGLENBREYsQ0FERixDQUZGLENBREY7QUFzQ0Q7O0dBN0Z1QmxDLFM7VUFDTmxCLFM7OztLQURNa0IsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvbm90ZWJvb2tzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IElOb3RlYm9vayBmcm9tICcuL2ludGVyZmFjZXMvaW5vdGVib29rJztcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgYXJyYXlTb3J0IGZyb20gJ2FycmF5LXNvcnQnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICB9LFxuICAgIG5vdGVib29rOiB7XG4gICAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgICAgcGFkZGluZzogJzIwcHggMzBweCcsXG4gICAgfSxcbiAgICBwYXBlcjoge1xuICAgICAgd2lkdGg6IDgwMCxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4IDMwcHgnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBjb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgIH0sXG4gICAgcm93OiB7XG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDc1LDE2NCw2NSknLFxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmludGVyZmFjZSBJTm90ZWJvb2tzUHJvcHMge1xuICBub3RlYm9va3M6IElOb3RlYm9vaztcbiAgbm90ZWJvb2tPcmRlcjogQXJyYXk8c3RyaW5nPjtcbiAgaGFuZGxlTm90ZWJvb2tDbGljazogKG5vdGVib29rOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVib29rcyhwcm9wczogSU5vdGVib29rc1Byb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCd0aXRsZScpO1xuICBjb25zdCBbcmV2ZXJzZSwgc2V0UmV2ZXJzZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgZ2V0VGltZU1zZyA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlZFRpbWUgPSBuZXcgRGF0ZShkYXRlKS52YWx1ZU9mKCk7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICBjb25zdCBzZWNvbmQgPSA2MDtcbiAgICBjb25zdCBtaW51dGUgPSA2MDtcbiAgICBjb25zdCBob3VyID0gMjQ7XG4gICAgbGV0IGRpdmlkZXIgPSAxO1xuICAgIGxldCB0aW1lTXNnID0gJyc7XG4gICAgbGV0IGRpZmYgPSAoY3VycmVudFRpbWUgLSBjcmVhdGVkVGltZSkgLyAxMDAwO1xuICAgIGlmIChkaWZmIDw9IHNlY29uZCkge1xuICAgICAgdGltZU1zZyA9ICdzZWNvbmQnO1xuICAgIH0gZWxzZSBpZiAoZGlmZiA8PSBzZWNvbmQgKiBtaW51dGUpIHtcbiAgICAgIGRpdmlkZXIgPSBzZWNvbmQ7XG4gICAgICB0aW1lTXNnID0gJ21pbnV0ZSc7XG4gICAgfSBlbHNlIGlmIChkaWZmIDw9IHNlY29uZCAqIG1pbnV0ZSAqIGhvdXIpIHtcbiAgICAgIGRpdmlkZXIgPSBzZWNvbmQgKiBtaW51dGU7XG4gICAgICB0aW1lTXNnID0gJ2hvdXInO1xuICAgIH0gZWxzZSBpZiAoZGlmZiA8PSAxNzI4MDApIHtcbiAgICAgIHJldHVybiAnWWVzdGVyZGF5JztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGF0ZUFyciA9IGRhdGUudG9TdHJpbmcoKS5zcGxpdCgnICcpO1xuICAgICAgcmV0dXJuIGAke2RhdGVBcnJbMV19ICR7ZGF0ZUFyclsyXX0sICR7ZGF0ZUFyclszXX1gO1xuICAgIH1cbiAgICBkaWZmIC89IGRpdmlkZXI7XG4gICAgY29uc3QgZGlzcGxheVRpbWUgPSBNYXRoLmFicyhNYXRoLnJvdW5kKGRpZmYpKTtcbiAgICBjb25zdCBwbHVyYWwgPSBkaXNwbGF5VGltZSA+IDEgPyAncycgOiAnJztcbiAgICBjb25zdCB0aW1lTWVzc2FnZSA9IGAke2Rpc3BsYXlUaW1lfSAke3RpbWVNc2d9JHtwbHVyYWx9IGFnb2A7XG4gICAgcmV0dXJuIHRpbWVNZXNzYWdlO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZURhdGEgPSAoXG4gICAgaWQ6IHN0cmluZyxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIG5vdGVDb3VudDogbnVtYmVyLFxuICAgIGNyZWF0ZWRBdDogc3RyaW5nLFxuICAgIHVwZGF0ZWRBdDogc3RyaW5nXG4gICkgPT4ge1xuICAgIHJldHVybiB7IGlkLCB0aXRsZSwgbm90ZUNvdW50LCBjcmVhdGVkQXQsIHVwZGF0ZWRBdCB9O1xuICB9O1xuXG4gIGNvbnN0IHJvd3MgPSBwcm9wcy5ub3RlYm9va09yZGVyLm1hcCgobm90ZWJvb2s6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBjcmVhdGVEYXRhKFxuICAgICAgcHJvcHMubm90ZWJvb2tzW25vdGVib29rXS5pZCxcbiAgICAgIHByb3BzLm5vdGVib29rc1tub3RlYm9va10udGl0bGUsXG4gICAgICBwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tdLm5vdGVzLmxlbmd0aCxcbiAgICAgIGdldFRpbWVNc2cocHJvcHMubm90ZWJvb2tzW25vdGVib29rXS5jcmVhdGVkQXQpLFxuICAgICAgZ2V0VGltZU1zZyhwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tdLnVwZGF0ZWRBdClcbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZWJvb2t9Pk5vdGVib29rczwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gYXJpYS1sYWJlbD1cImN1c3RvbWl6ZWQgdGFibGVcIj5cbiAgICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIG9uQ2xpY2s9eygpID0+IHNldENhdGVnb3J5KCdub3RlYm9vaycpfT5cbiAgICAgICAgICAgICAgICAgIE5vdGVib29rXG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPk51bWJlciBvZiBOb3RlczwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5DcmVhdGVkIERhdGU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+VXBkYXRlIERhdGU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgICAge2FycmF5U29ydChyb3dzLCBjYXRlZ29yeSwgeyByZXZlcnNlIH0pLm1hcCgocm93KSA9PiAoXG4gICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93LmlkfSBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGhcIlxuICAgICAgICAgICAgICAgICAgICBzY29wZT1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZU5vdGVib29rQ2xpY2socm93LmlkKX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Jvdy50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntyb3cubm90ZUNvdW50fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntyb3cuY3JlYXRlZEF0fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPntyb3cudXBkYXRlZEF0fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/notebooks.tsx\n");

/***/ })

})
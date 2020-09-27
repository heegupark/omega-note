webpackHotUpdate_N_E("pages/index",{

/***/ "./components/notebooks.tsx":
/*!**********************************!*\
  !*** ./components/notebooks.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Notebooks; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/esm/Table/index.js\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"./node_modules/@material-ui/core/esm/TableBody/index.js\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/esm/TableCell/index.js\");\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableContainer */ \"./node_modules/@material-ui/core/esm/TableContainer/index.js\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/esm/TableHead/index.js\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/esm/TableRow/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/notebooks.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      alignItems: 'center',\n      // justifyItems: 'center',\n      flexDdirection: 'row',\n      width: '100%',\n      height: '100vh',\n      margin: 'auto',\n      padding: '50px'\n    },\n    table: {\n      width: 600,\n      color: 'rgb(51,51,51)',\n      fontSize: '14px'\n    }\n  });\n});\nfunction Notebooks(props) {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n\n  var getTimeMsg = function getTimeMsg(date) {\n    var createdTime = new Date(date).valueOf();\n    var currentTime = new Date().valueOf();\n    var second = 60;\n    var minute = 60;\n    var hour = 24;\n    var day = 30;\n    var month = 12;\n    var divider = 1;\n    var timeMsg = '';\n    var diff = (currentTime - createdTime) / 1000;\n\n    if (diff <= second) {\n      timeMsg = 'second';\n    } else if (diff <= second * minute) {\n      divider = second;\n      timeMsg = 'minute';\n    } else if (diff <= second * minute * hour) {\n      divider = second * minute;\n      timeMsg = 'hour';\n    } else if (diff <= 172800) {\n      return 'Yesterday';\n    } else {\n      return \"\".concat(date.getMonth(), \" \").concat(date.getDate(), \", \").concat(date.getFullYear());\n    }\n\n    diff /= divider;\n    var displayTime = Math.abs(Math.round(diff));\n    var plural = displayTime > 1 ? 's' : '';\n    var timeMessage = \"\".concat(displayTime, \" \").concat(timeMsg).concat(plural, \" ago\");\n    return timeMessage;\n  };\n\n  var createData = function createData(id, title, noteCount, createdAt, updatedAt) {\n    return {\n      id: id,\n      title: title,\n      noteCount: noteCount,\n      createdAt: createdAt,\n      updatedAt: updatedAt\n    };\n  };\n\n  var rows = props.notebookOrder.map(function (notebook) {\n    return createData(props.notebooks[notebook].id, props.notebooks[notebook].title, props.notebooks[notebook].notes.length, getTimeMsg(props.notebooks[notebook].createdAt), getTimeMsg(props.notebooks[notebook].updatedAt));\n  });\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: classes.table,\n    \"aria-label\": \"customized table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 15\n    }\n  }, \"Notebook\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 15\n    }\n  }, \"Number of Notes\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 15\n    }\n  }, \"Created Date\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 15\n    }\n  }, \"Update Date\"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 11\n    }\n  }, rows.map(function (row) {\n    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: row.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 15\n      }\n    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      component: \"th\",\n      scope: \"row\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 17\n      }\n    }, row.title), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"right\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 17\n      }\n    }, row.noteCount), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"right\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 17\n      }\n    }, row.createdAt), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"right\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 17\n      }\n    }, row.updatedAt));\n  })))));\n}\n\n_s(Notebooks, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Notebooks;\n\nvar _c;\n\n$RefreshReg$(_c, \"Notebooks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlYm9va3MudHN4P2RjODkiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleERkaXJlY3Rpb24iLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInBhZGRpbmciLCJ0YWJsZSIsImNvbG9yIiwiZm9udFNpemUiLCJOb3RlYm9va3MiLCJwcm9wcyIsImNsYXNzZXMiLCJnZXRUaW1lTXNnIiwiZGF0ZSIsImNyZWF0ZWRUaW1lIiwiRGF0ZSIsInZhbHVlT2YiLCJjdXJyZW50VGltZSIsInNlY29uZCIsIm1pbnV0ZSIsImhvdXIiLCJkYXkiLCJtb250aCIsImRpdmlkZXIiLCJ0aW1lTXNnIiwiZGlmZiIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEZ1bGxZZWFyIiwiZGlzcGxheVRpbWUiLCJNYXRoIiwiYWJzIiwicm91bmQiLCJwbHVyYWwiLCJ0aW1lTWVzc2FnZSIsImNyZWF0ZURhdGEiLCJpZCIsInRpdGxlIiwibm90ZUNvdW50IiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwicm93cyIsIm5vdGVib29rT3JkZXIiLCJtYXAiLCJub3RlYm9vayIsIm5vdGVib29rcyIsIm5vdGVzIiwibGVuZ3RoIiwiUGFwZXIiLCJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxnQkFBVSxFQUFFLFFBRlI7QUFHSjtBQUNBQyxvQkFBYyxFQUFFLEtBSlo7QUFLSkMsV0FBSyxFQUFFLE1BTEg7QUFNSkMsWUFBTSxF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QUFBQTtBQUFBLEtBQ0dtQyxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDTSxHQUFEO0FBQUEsV0FDUixNQUFDLGtFQUFEO0FBQVUsU0FBRyxFQUFFQSxHQUFHLENBQUNiLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG1FQUFEO0FBQVcsZUFBUyxFQUFDLElBQXJCO0FBQTBCLFdBQUssRUFBQyxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dhLEdBQUcsQ0FBQ1osS0FEUCxDQURGLEVBSUUsTUFBQyxtRUFBRDtBQUFXLFdBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBCWSxHQUFHLENBQUNYLFNBQTlCLENBSkYsRUFLRSxNQUFDLG1FQUFEO0FBQVcsV0FBSyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMEJXLEdBQUcsQ0FBQ1YsU0FBOUIsQ0FMRixFQU1FLE1BQUMsbUVBQUQ7QUFBVyxXQUFLLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEwQlUsR0FBRyxDQUFDVCxTQUE5QixDQU5GLENBRFE7QUFBQSxHQUFULENBREgsQ0FURixDQURGLENBREYsQ0FERjtBQTRCRDs7R0FsRnVCL0IsUztVQUNOZixTOzs7S0FETWUsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvbm90ZWJvb2tzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBJTm90ZWJvb2sgZnJvbSAnLi9pbnRlcmZhY2VzL2lub3RlYm9vayc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAvLyBqdXN0aWZ5SXRlbXM6ICdjZW50ZXInLFxuICAgICAgZmxleERkaXJlY3Rpb246ICdyb3cnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgcGFkZGluZzogJzUwcHgnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgIHdpZHRoOiA2MDAsXG4gICAgICBjb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICB9LFxuICB9KVxuKTtcblxuaW50ZXJmYWNlIElOb3RlYm9va3NQcm9wcyB7XG4gIG5vdGVib29rczogSU5vdGVib29rO1xuICBub3RlYm9va09yZGVyOiBBcnJheTxzdHJpbmc+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlYm9va3MocHJvcHM6IElOb3RlYm9va3NQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgZ2V0VGltZU1zZyA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlZFRpbWUgPSBuZXcgRGF0ZShkYXRlKS52YWx1ZU9mKCk7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICBjb25zdCBzZWNvbmQgPSA2MDtcbiAgICBjb25zdCBtaW51dGUgPSA2MDtcbiAgICBjb25zdCBob3VyID0gMjQ7XG4gICAgY29uc3QgZGF5ID0gMzA7XG4gICAgY29uc3QgbW9udGggPSAxMjtcbiAgICBsZXQgZGl2aWRlciA9IDE7XG4gICAgbGV0IHRpbWVNc2cgPSAnJztcbiAgICBsZXQgZGlmZiA9IChjdXJyZW50VGltZSAtIGNyZWF0ZWRUaW1lKSAvIDEwMDA7XG4gICAgaWYgKGRpZmYgPD0gc2Vjb25kKSB7XG4gICAgICB0aW1lTXNnID0gJ3NlY29uZCc7XG4gICAgfSBlbHNlIGlmIChkaWZmIDw9IHNlY29uZCAqIG1pbnV0ZSkge1xuICAgICAgZGl2aWRlciA9IHNlY29uZDtcbiAgICAgIHRpbWVNc2cgPSAnbWludXRlJztcbiAgICB9IGVsc2UgaWYgKGRpZmYgPD0gc2Vjb25kICogbWludXRlICogaG91cikge1xuICAgICAgZGl2aWRlciA9IHNlY29uZCAqIG1pbnV0ZTtcbiAgICAgIHRpbWVNc2cgPSAnaG91cic7XG4gICAgfSBlbHNlIGlmIChkaWZmIDw9IDE3MjgwMCkge1xuICAgICAgcmV0dXJuICdZZXN0ZXJkYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYCR7ZGF0ZS5nZXRNb250aCgpfSAke2RhdGUuZ2V0RGF0ZSgpfSwgJHtkYXRlLmdldEZ1bGxZZWFyKCl9YDtcbiAgICB9XG4gICAgZGlmZiAvPSBkaXZpZGVyO1xuICAgIGNvbnN0IGRpc3BsYXlUaW1lID0gTWF0aC5hYnMoTWF0aC5yb3VuZChkaWZmKSk7XG4gICAgY29uc3QgcGx1cmFsID0gZGlzcGxheVRpbWUgPiAxID8gJ3MnIDogJyc7XG4gICAgY29uc3QgdGltZU1lc3NhZ2UgPSBgJHtkaXNwbGF5VGltZX0gJHt0aW1lTXNnfSR7cGx1cmFsfSBhZ29gO1xuICAgIHJldHVybiB0aW1lTWVzc2FnZTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVEYXRhID0gKFxuICAgIGlkOiBzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBub3RlQ291bnQ6IG51bWJlcixcbiAgICBjcmVhdGVkQXQ6IHN0cmluZyxcbiAgICB1cGRhdGVkQXQ6IHN0cmluZ1xuICApID0+IHtcbiAgICByZXR1cm4geyBpZCwgdGl0bGUsIG5vdGVDb3VudCwgY3JlYXRlZEF0LCB1cGRhdGVkQXQgfTtcbiAgfTtcblxuICBjb25zdCByb3dzID0gcHJvcHMubm90ZWJvb2tPcmRlci5tYXAoKG5vdGVib29rOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gY3JlYXRlRGF0YShcbiAgICAgIHByb3BzLm5vdGVib29rc1tub3RlYm9va10uaWQsXG4gICAgICBwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tdLnRpdGxlLFxuICAgICAgcHJvcHMubm90ZWJvb2tzW25vdGVib29rXS5ub3Rlcy5sZW5ndGgsXG4gICAgICBnZXRUaW1lTXNnKHByb3BzLm5vdGVib29rc1tub3RlYm9va10uY3JlYXRlZEF0KSxcbiAgICAgIGdldFRpbWVNc2cocHJvcHMubm90ZWJvb2tzW25vdGVib29rXS51cGRhdGVkQXQpXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gYXJpYS1sYWJlbD1cImN1c3RvbWl6ZWQgdGFibGVcIj5cbiAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPk5vdGVib29rPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPk51bWJlciBvZiBOb3RlczwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5DcmVhdGVkIERhdGU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+VXBkYXRlIERhdGU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgIHtyb3dzLm1hcCgocm93KSA9PiAoXG4gICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5pZH0+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICB7cm93LnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cubm90ZUNvdW50fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuY3JlYXRlZEF0fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cudXBkYXRlZEF0fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/notebooks.tsx\n");

/***/ })

})
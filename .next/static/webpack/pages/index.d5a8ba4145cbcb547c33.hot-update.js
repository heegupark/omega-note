webpackHotUpdate_N_E("pages/index",{

/***/ "./components/notebooks.tsx":
/*!**********************************!*\
  !*** ./components/notebooks.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Notebooks; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/esm/Table/index.js\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"./node_modules/@material-ui/core/esm/TableBody/index.js\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/esm/TableCell/index.js\");\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableContainer */ \"./node_modules/@material-ui/core/esm/TableContainer/index.js\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/esm/TableHead/index.js\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/esm/TableRow/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/notebooks.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      // alignItems: 'center',\n      // justifyItems: 'center',\n      // flexDdirection: 'row',\n      width: '80%',\n      height: '100vh',\n      margin: 'auto'\n    },\n    table: {\n      width: 600,\n      margin: '40px',\n      color: 'rgb(51,51,51)',\n      fontSize: '14px'\n    }\n  });\n});\nfunction Notebooks(props) {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n\n  var getTimeMsg = function getTimeMsg(date) {\n    var createdTime = new Date(date).valueOf();\n    var currentTime = new Date().valueOf();\n    var second = 60;\n    var minute = 60;\n    var hour = 24;\n    var day = 30;\n    var month = 12;\n    var divider = 1;\n    var timeMsg = '';\n    var diff = (currentTime - createdTime) / 1000;\n\n    if (diff <= second) {\n      timeMsg = 'second';\n    } else if (diff <= second * minute) {\n      divider = second;\n      timeMsg = 'minute';\n    } else if (diff <= second * minute * hour) {\n      divider = second * minute;\n      timeMsg = 'hour';\n    } else if (diff <= 172800) {\n      return 'Yesterday';\n    } else {\n      return \"\".concat(date.getMonth(), \" \").concat(date.getDate(), \", \").concat(date.getFullYear());\n    }\n\n    diff /= divider;\n    var displayTime = Math.abs(Math.round(diff));\n    var plural = displayTime > 1 ? 's' : '';\n    var timeMessage = \"\".concat(displayTime, \" \").concat(timeMsg).concat(plural, \" ago\");\n    return timeMessage;\n  };\n\n  var createData = function createData(id, title, noteCount, createdAt, updatedAt) {\n    return {\n      id: id,\n      title: title,\n      noteCount: noteCount,\n      createdAt: createdAt,\n      updatedAt: updatedAt\n    };\n  };\n\n  var rows = props.notebookOrder.map(function (notebook) {\n    return createData(props.notebooks[notebook].id, props.notebooks[notebook].title, props.notebooks[notebook].notes.length, getTimeMsg(props.notebooks[notebook].createdAt), getTimeMsg(props.notebooks[notebook].updatedAt));\n  });\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: classes.table,\n    \"aria-label\": \"customized table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 15\n    }\n  }, \"Notebook\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 15\n    }\n  }, \"Number of Notes\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 15\n    }\n  }, \"Created Date\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 15\n    }\n  }, \"Update Date\"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 11\n    }\n  }, rows.map(function (row) {\n    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: row.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 15\n      }\n    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      component: \"th\",\n      scope: \"row\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 17\n      }\n    }, row.title), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"right\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 17\n      }\n    }, row.noteCount), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"right\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 17\n      }\n    }, row.createdAt), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"right\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 17\n      }\n    }, row.updatedAt));\n  })))));\n}\n\n_s(Notebooks, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Notebooks;\n\nvar _c;\n\n$RefreshReg$(_c, \"Notebooks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlYm9va3MudHN4P2RjODkiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInRhYmxlIiwiY29sb3IiLCJmb250U2l6ZSIsIk5vdGVib29rcyIsInByb3BzIiwiY2xhc3NlcyIsImdldFRpbWVNc2ciLCJkYXRlIiwiY3JlYXRlZFRpbWUiLCJEYXRlIiwidmFsdWVPZiIsImN1cnJlbnRUaW1lIiwic2Vjb25kIiwibWludXRlIiwiaG91ciIsImRheSIsIm1vbnRoIiwiZGl2aWRlciIsInRpbWVNc2ciLCJkaWZmIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0RnVsbFllYXIiLCJkaXNwbGF5VGltZSIsIk1hdGgiLCJhYnMiLCJyb3VuZCIsInBsdXJhbCIsInRpbWVNZXNzYWdlIiwiY3JlYXRlRGF0YSIsImlkIiwidGl0bGUiLCJub3RlQ291bnQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJyb3dzIiwibm90ZWJvb2tPcmRlciIsIm1hcCIsIm5vdGVib29rIiwibm90ZWJvb2tzIiwibm90ZXMiLCJsZW5ndGgiLCJQYXBlciIsInJvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxNQURMO0FBRUo7QUFDQTtBQUNBO0FBQ0FDLFdBQUssRUFBRSxLQUxIO0FBTUpDLFlBQU0sRUFBRSxPQU5KO0FBT0pDLFlBQU0sRUFBRTtBQVBKLEtBREs7QUFVWEMsU0FBSyxFQUFFO0FBQ0xILFdBQUssRUFBRSxHQURGO0FB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QUFHLEVBQUVBLEdBQUcsQ0FBQ2IsRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsbUVBQUQ7QUFBVyxlQUFTLEVBQUMsSUFBckI7QUFBMEIsV0FBSyxFQUFDLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR2EsR0FBRyxDQUFDWixLQURQLENBREYsRUFJRSxNQUFDLG1FQUFEO0FBQVcsV0FBSyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMEJZLEdBQUcsQ0FBQ1gsU0FBOUIsQ0FKRixFQUtFLE1BQUMsbUVBQUQ7QUFBVyxXQUFLLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEwQlcsR0FBRyxDQUFDVixTQUE5QixDQUxGLEVBTUUsTUFBQyxtRUFBRDtBQUFXLFdBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBCVSxHQUFHLENBQUNULFNBQTlCLENBTkYsQ0FEUTtBQUFBLEdBQVQsQ0FESCxDQVRGLENBREYsQ0FERixDQURGO0FBNEJEOztHQWxGdUIvQixTO1VBQ05aLFM7OztLQURNWSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ub3RlYm9va3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IElOb3RlYm9vayBmcm9tICcuL2ludGVyZmFjZXMvaW5vdGVib29rJztcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAvLyBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIC8vIGp1c3RpZnlJdGVtczogJ2NlbnRlcicsXG4gICAgICAvLyBmbGV4RGRpcmVjdGlvbjogJ3JvdycsXG4gICAgICB3aWR0aDogJzgwJScsXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICB3aWR0aDogNjAwLFxuICAgICAgbWFyZ2luOiAnNDBweCcsXG4gICAgICBjb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICB9LFxuICB9KVxuKTtcblxuaW50ZXJmYWNlIElOb3RlYm9va3NQcm9wcyB7XG4gIG5vdGVib29rczogSU5vdGVib29rO1xuICBub3RlYm9va09yZGVyOiBBcnJheTxzdHJpbmc+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlYm9va3MocHJvcHM6IElOb3RlYm9va3NQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgZ2V0VGltZU1zZyA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlZFRpbWUgPSBuZXcgRGF0ZShkYXRlKS52YWx1ZU9mKCk7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICBjb25zdCBzZWNvbmQgPSA2MDtcbiAgICBjb25zdCBtaW51dGUgPSA2MDtcbiAgICBjb25zdCBob3VyID0gMjQ7XG4gICAgY29uc3QgZGF5ID0gMzA7XG4gICAgY29uc3QgbW9udGggPSAxMjtcbiAgICBsZXQgZGl2aWRlciA9IDE7XG4gICAgbGV0IHRpbWVNc2cgPSAnJztcbiAgICBsZXQgZGlmZiA9IChjdXJyZW50VGltZSAtIGNyZWF0ZWRUaW1lKSAvIDEwMDA7XG4gICAgaWYgKGRpZmYgPD0gc2Vjb25kKSB7XG4gICAgICB0aW1lTXNnID0gJ3NlY29uZCc7XG4gICAgfSBlbHNlIGlmIChkaWZmIDw9IHNlY29uZCAqIG1pbnV0ZSkge1xuICAgICAgZGl2aWRlciA9IHNlY29uZDtcbiAgICAgIHRpbWVNc2cgPSAnbWludXRlJztcbiAgICB9IGVsc2UgaWYgKGRpZmYgPD0gc2Vjb25kICogbWludXRlICogaG91cikge1xuICAgICAgZGl2aWRlciA9IHNlY29uZCAqIG1pbnV0ZTtcbiAgICAgIHRpbWVNc2cgPSAnaG91cic7XG4gICAgfSBlbHNlIGlmIChkaWZmIDw9IDE3MjgwMCkge1xuICAgICAgcmV0dXJuICdZZXN0ZXJkYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYCR7ZGF0ZS5nZXRNb250aCgpfSAke2RhdGUuZ2V0RGF0ZSgpfSwgJHtkYXRlLmdldEZ1bGxZZWFyKCl9YDtcbiAgICB9XG4gICAgZGlmZiAvPSBkaXZpZGVyO1xuICAgIGNvbnN0IGRpc3BsYXlUaW1lID0gTWF0aC5hYnMoTWF0aC5yb3VuZChkaWZmKSk7XG4gICAgY29uc3QgcGx1cmFsID0gZGlzcGxheVRpbWUgPiAxID8gJ3MnIDogJyc7XG4gICAgY29uc3QgdGltZU1lc3NhZ2UgPSBgJHtkaXNwbGF5VGltZX0gJHt0aW1lTXNnfSR7cGx1cmFsfSBhZ29gO1xuICAgIHJldHVybiB0aW1lTWVzc2FnZTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVEYXRhID0gKFxuICAgIGlkOiBzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBub3RlQ291bnQ6IG51bWJlcixcbiAgICBjcmVhdGVkQXQ6IHN0cmluZyxcbiAgICB1cGRhdGVkQXQ6IHN0cmluZ1xuICApID0+IHtcbiAgICByZXR1cm4geyBpZCwgdGl0bGUsIG5vdGVDb3VudCwgY3JlYXRlZEF0LCB1cGRhdGVkQXQgfTtcbiAgfTtcblxuICBjb25zdCByb3dzID0gcHJvcHMubm90ZWJvb2tPcmRlci5tYXAoKG5vdGVib29rOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gY3JlYXRlRGF0YShcbiAgICAgIHByb3BzLm5vdGVib29rc1tub3RlYm9va10uaWQsXG4gICAgICBwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tdLnRpdGxlLFxuICAgICAgcHJvcHMubm90ZWJvb2tzW25vdGVib29rXS5ub3Rlcy5sZW5ndGgsXG4gICAgICBnZXRUaW1lTXNnKHByb3BzLm5vdGVib29rc1tub3RlYm9va10uY3JlYXRlZEF0KSxcbiAgICAgIGdldFRpbWVNc2cocHJvcHMubm90ZWJvb2tzW25vdGVib29rXS51cGRhdGVkQXQpXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gYXJpYS1sYWJlbD1cImN1c3RvbWl6ZWQgdGFibGVcIj5cbiAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPk5vdGVib29rPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPk51bWJlciBvZiBOb3RlczwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5DcmVhdGVkIERhdGU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+VXBkYXRlIERhdGU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgIHtyb3dzLm1hcCgocm93KSA9PiAoXG4gICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5pZH0+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICB7cm93LnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cubm90ZUNvdW50fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuY3JlYXRlZEF0fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cudXBkYXRlZEF0fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/notebooks.tsx\n");

/***/ })

})
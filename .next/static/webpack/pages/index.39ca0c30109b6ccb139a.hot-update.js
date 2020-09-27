webpackHotUpdate_N_E("pages/index",{

/***/ "./components/notebooks.tsx":
/*!**********************************!*\
  !*** ./components/notebooks.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Notebooks; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/data-grid */ \"./node_modules/@material-ui/data-grid/dist/index-esm.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/notebooks.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyItems: 'center',\n      flexDdirection: 'row',\n      height: '100vh',\n      width: '100%',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px'\n    }\n  });\n});\nfunction Notebooks(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var getTimeMsg = function getTimeMsg(date) {\n    var createdTime = new Date(date).valueOf();\n    var currentTime = new Date().valueOf();\n    var second = 60;\n    var minute = 60;\n    var hour = 24;\n    var day = 30;\n    var month = 12;\n    var divider = 1;\n    var timeMsg = '';\n    var diff = (currentTime - createdTime) / 1000;\n\n    if (diff <= second) {\n      timeMsg = 'second';\n    } else if (diff <= second * minute) {\n      divider = second;\n      timeMsg = 'minute';\n    } else if (diff <= second * minute * hour) {\n      divider = second * minute;\n      timeMsg = 'hour';\n    } else if (diff <= 172800) {\n      return 'Yesterday';\n    } else {\n      return \"\".concat(date.getMonth(), \" \").concat(date.getDay(), \", \").concat(date.getFullYear());\n    }\n\n    diff /= divider;\n    var displayTime = Math.abs(Math.round(diff));\n    var plural = displayTime > 1 ? 's' : '';\n    var timeMessage = \"\".concat(displayTime, \" \").concat(timeMsg).concat(plural, \" ago\");\n    return timeMessage;\n  };\n\n  var columns = [{\n    field: 'id',\n    headerName: 'ID',\n    width: 70\n  }, {\n    field: 'title',\n    headerName: 'Title',\n    width: 250\n  }, {\n    field: 'createdAt',\n    headerName: 'Created Date',\n    width: 300\n  }, {\n    field: 'updatedAt',\n    headerName: 'Updated Date',\n    width: 300\n  }]; // const rows: Array = [];\n\n  var rows = props.notebookOrder.map(function (notebook, index) {\n    return {\n      id: index,\n      title: props.notebooks[notebook].title,\n      createdAt: getTimeMsg(props.notebooks[notebook].createdAt),\n      updatedAt: getTimeMsg(props.notebooks[notebook].updatedAt)\n    }; // row.push(row);\n  }); // [\n  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },\n  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },\n  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },\n  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },\n  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },\n  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },\n  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },\n  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },\n  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },\n  // ];\n\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_1__[\"DataGrid\"], {\n    rows: rows,\n    columns: columns,\n    pageSize: 10,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(Notebooks, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Notebooks;\n\nvar _c;\n\n$RefreshReg$(_c, \"Notebooks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlYm9va3MudHN4P2RjODkiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUl0ZW1zIiwiZmxleERkaXJlY3Rpb24iLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsImNvbG9yIiwiZm9udFNpemUiLCJOb3RlYm9va3MiLCJwcm9wcyIsImNsYXNzZXMiLCJnZXRUaW1lTXNnIiwiZGF0ZSIsImNyZWF0ZWRUaW1lIiwiRGF0ZSIsInZhbHVlT2YiLCJjdXJyZW50VGltZSIsInNlY29uZCIsIm1pbnV0ZSIsImhvdXIiLCJkYXkiLCJtb250aCIsImRpdmlkZXIiLCJ0aW1lTXNnIiwiZGlmZiIsImdldE1vbnRoIiwiZ2V0RGF5IiwiZ2V0RnVsbFllYXIiLCJkaXNwbGF5VGltZSIsIk1hdGgiLCJhYnMiLCJyb3VuZCIsInBsdXJhbCIsInRpbWVNZXNzYWdlIiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsInJvd3MiLCJub3RlYm9va09yZGVyIiwibWFwIiwibm90ZWJvb2siLCJpbmRleCIsImlkIiwidGl0bGUiLCJub3RlYm9va3MiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxnQkFBVSxFQUFFLFFBRlI7QUFHSkMsa0JBQVksRUFBRSxRQUhWO0FBSUpDLG9CQUFjLEVBQUUsS0FKWjtBQUtKQyxZQUFNLEVBQUUsT0FMSjtBQU1KQyxXQUFLLEVBQUUsTUFOSDtBQU9KQyxZQUFNLEVBQUUsTUFQSjtBQVFKQyxXQUFL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QUFFbEMsVUFBVSxDQUFDRixLQUFLLENBQUNtQyxTQUFOLENBQWdCSixRQUFoQixFQUEwQkssU0FBM0IsQ0FIaEI7QUFJTEMsZUFBUyxFQUFFbkMsVUFBVSxDQUFDRixLQUFLLENBQUNtQyxTQUFOLENBQWdCSixRQUFoQixFQUEwQk0sU0FBM0I7QUFKaEIsS0FBUCxDQUR3RSxDQU94RTtBQUNELEdBUlksQ0FBYixDQTFDd0QsQ0FtRHhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRXBDLE9BQU8sQ0FBQ1osSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBVSxRQUFJLEVBQUV1QyxJQUFoQjtBQUFzQixXQUFPLEVBQUVILE9BQS9CO0FBQXdDLFlBQVEsRUFBRSxFQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQUtEOztHQXBFdUIxQixTO1VBQ05kLFM7OztLQURNYyxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ub3RlYm9va3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERhdGFHcmlkLCBDb2xEZWYsIFZhbHVlR2V0dGVyUGFyYW1zIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBJTm90ZWJvb2sgZnJvbSAnLi9pbnRlcmZhY2VzL2lub3RlYm9vayc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlJdGVtczogJ2NlbnRlcicsXG4gICAgICBmbGV4RGRpcmVjdGlvbjogJ3JvdycsXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBjb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICB9LFxuICB9KVxuKTtcblxuaW50ZXJmYWNlIElOb3RlYm9va3NQcm9wcyB7XG4gIG5vdGVib29rczogSU5vdGVib29rO1xuICBub3RlYm9va09yZGVyOiBBcnJheTxzdHJpbmc+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlYm9va3MocHJvcHM6IElOb3RlYm9va3NQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgZ2V0VGltZU1zZyA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlZFRpbWUgPSBuZXcgRGF0ZShkYXRlKS52YWx1ZU9mKCk7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICBjb25zdCBzZWNvbmQgPSA2MDtcbiAgICBjb25zdCBtaW51dGUgPSA2MDtcbiAgICBjb25zdCBob3VyID0gMjQ7XG4gICAgY29uc3QgZGF5ID0gMzA7XG4gICAgY29uc3QgbW9udGggPSAxMjtcbiAgICBsZXQgZGl2aWRlciA9IDE7XG4gICAgbGV0IHRpbWVNc2cgPSAnJztcbiAgICBsZXQgZGlmZiA9IChjdXJyZW50VGltZSAtIGNyZWF0ZWRUaW1lKSAvIDEwMDA7XG4gICAgaWYgKGRpZmYgPD0gc2Vjb25kKSB7XG4gICAgICB0aW1lTXNnID0gJ3NlY29uZCc7XG4gICAgfSBlbHNlIGlmIChkaWZmIDw9IHNlY29uZCAqIG1pbnV0ZSkge1xuICAgICAgZGl2aWRlciA9IHNlY29uZDtcbiAgICAgIHRpbWVNc2cgPSAnbWludXRlJztcbiAgICB9IGVsc2UgaWYgKGRpZmYgPD0gc2Vjb25kICogbWludXRlICogaG91cikge1xuICAgICAgZGl2aWRlciA9IHNlY29uZCAqIG1pbnV0ZTtcbiAgICAgIHRpbWVNc2cgPSAnaG91cic7XG4gICAgfSBlbHNlIGlmIChkaWZmIDw9IDE3MjgwMCkge1xuICAgICAgcmV0dXJuICdZZXN0ZXJkYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYCR7ZGF0ZS5nZXRNb250aCgpfSAke2RhdGUuZ2V0RGF5KCl9LCAke2RhdGUuZ2V0RnVsbFllYXIoKX1gO1xuICAgIH1cbiAgICBkaWZmIC89IGRpdmlkZXI7XG4gICAgY29uc3QgZGlzcGxheVRpbWUgPSBNYXRoLmFicyhNYXRoLnJvdW5kKGRpZmYpKTtcbiAgICBjb25zdCBwbHVyYWwgPSBkaXNwbGF5VGltZSA+IDEgPyAncycgOiAnJztcbiAgICBjb25zdCB0aW1lTWVzc2FnZSA9IGAke2Rpc3BsYXlUaW1lfSAke3RpbWVNc2d9JHtwbHVyYWx9IGFnb2A7XG4gICAgcmV0dXJuIHRpbWVNZXNzYWdlO1xuICB9O1xuXG4gIGNvbnN0IGNvbHVtbnM6IENvbERlZltdID0gW1xuICAgIHsgZmllbGQ6ICdpZCcsIGhlYWRlck5hbWU6ICdJRCcsIHdpZHRoOiA3MCB9LFxuICAgIHsgZmllbGQ6ICd0aXRsZScsIGhlYWRlck5hbWU6ICdUaXRsZScsIHdpZHRoOiAyNTAgfSxcbiAgICB7IGZpZWxkOiAnY3JlYXRlZEF0JywgaGVhZGVyTmFtZTogJ0NyZWF0ZWQgRGF0ZScsIHdpZHRoOiAzMDAgfSxcbiAgICB7IGZpZWxkOiAndXBkYXRlZEF0JywgaGVhZGVyTmFtZTogJ1VwZGF0ZWQgRGF0ZScsIHdpZHRoOiAzMDAgfSxcbiAgXTtcblxuICAvLyBjb25zdCByb3dzOiBBcnJheSA9IFtdO1xuICBjb25zdCByb3dzID0gcHJvcHMubm90ZWJvb2tPcmRlci5tYXAoKG5vdGVib29rOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGluZGV4LFxuICAgICAgdGl0bGU6IHByb3BzLm5vdGVib29rc1tub3RlYm9va10udGl0bGUsXG4gICAgICBjcmVhdGVkQXQ6IGdldFRpbWVNc2cocHJvcHMubm90ZWJvb2tzW25vdGVib29rXS5jcmVhdGVkQXQpLFxuICAgICAgdXBkYXRlZEF0OiBnZXRUaW1lTXNnKHByb3BzLm5vdGVib29rc1tub3RlYm9va10udXBkYXRlZEF0KSxcbiAgICB9O1xuICAgIC8vIHJvdy5wdXNoKHJvdyk7XG4gIH0pO1xuICAvLyBbXG4gIC8vICAgeyBpZDogMSwgbGFzdE5hbWU6ICdTbm93JywgZmlyc3ROYW1lOiAnSm9uJywgYWdlOiAzNSB9LFxuICAvLyAgIHsgaWQ6IDIsIGxhc3ROYW1lOiAnTGFubmlzdGVyJywgZmlyc3ROYW1lOiAnQ2Vyc2VpJywgYWdlOiA0MiB9LFxuICAvLyAgIHsgaWQ6IDMsIGxhc3ROYW1lOiAnTGFubmlzdGVyJywgZmlyc3ROYW1lOiAnSmFpbWUnLCBhZ2U6IDQ1IH0sXG4gIC8vICAgeyBpZDogNCwgbGFzdE5hbWU6ICdTdGFyaycsIGZpcnN0TmFtZTogJ0FyeWEnLCBhZ2U6IDE2IH0sXG4gIC8vICAgeyBpZDogNSwgbGFzdE5hbWU6ICdUYXJnYXJ5ZW4nLCBmaXJzdE5hbWU6ICdEYWVuZXJ5cycsIGFnZTogbnVsbCB9LFxuICAvLyAgIHsgaWQ6IDYsIGxhc3ROYW1lOiAnTWVsaXNhbmRyZScsIGZpcnN0TmFtZTogbnVsbCwgYWdlOiAxNTAgfSxcbiAgLy8gICB7IGlkOiA3LCBsYXN0TmFtZTogJ0NsaWZmb3JkJywgZmlyc3ROYW1lOiAnRmVycmFyYScsIGFnZTogNDQgfSxcbiAgLy8gICB7IGlkOiA4LCBsYXN0TmFtZTogJ0ZyYW5jZXMnLCBmaXJzdE5hbWU6ICdSb3NzaW5pJywgYWdlOiAzNiB9LFxuICAvLyAgIHsgaWQ6IDksIGxhc3ROYW1lOiAnUm94aWUnLCBmaXJzdE5hbWU6ICdIYXJ2ZXknLCBhZ2U6IDY1IH0sXG4gIC8vIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxEYXRhR3JpZCByb3dzPXtyb3dzfSBjb2x1bW5zPXtjb2x1bW5zfSBwYWdlU2l6ZT17MTB9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/notebooks.tsx\n");

/***/ })

})
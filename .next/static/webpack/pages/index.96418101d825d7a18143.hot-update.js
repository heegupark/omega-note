webpackHotUpdate_N_E("pages/index",{

/***/ "./components/notebooks.tsx":
/*!**********************************!*\
  !*** ./components/notebooks.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Notebooks; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/data-grid */ \"./node_modules/@material-ui/data-grid/dist/index-esm.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/notebooks.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyItems: 'center',\n      flexDdirection: 'row',\n      height: '100vh',\n      width: '100%',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px'\n    }\n  });\n});\nfunction Notebooks(props) {\n  _s();\n\n  var classes = useStyles();\n  var columns = [{\n    field: 'id',\n    headerName: 'ID',\n    width: 70\n  }, {\n    field: 'title',\n    headerName: 'Title',\n    width: 250\n  }, {\n    field: 'createdAt',\n    headerName: 'Created Date',\n    width: 300\n  }, {\n    field: 'updatedAt',\n    headerName: 'Updated Date',\n    width: 300\n  }];\n  var rows = props.notebooks.map(function (notebook) {}); // [\n  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },\n  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },\n  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },\n  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },\n  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },\n  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },\n  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },\n  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },\n  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },\n  // ];\n\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_1__[\"DataGrid\"], {\n    rows: rows,\n    columns: columns,\n    pageSize: 10,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(Notebooks, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Notebooks;\n\nvar _c;\n\n$RefreshReg$(_c, \"Notebooks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlYm9va3MudHN4P2RjODkiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUl0ZW1zIiwiZmxleERkaXJlY3Rpb24iLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsImNvbG9yIiwiZm9udFNpemUiLCJOb3RlYm9va3MiLCJwcm9wcyIsImNsYXNzZXMiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwicm93cyIsIm5vdGVib29rcyIsIm1hcCIsIm5vdGVib29rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE1BREw7QUFFSkMsZ0JBQVUsRUFBRSxRQUZSO0FBR0pDLGtCQUFZLEVBQUUsUUFIVjtBQUlKQyxvQkFBYyxFQUFFLEtBSlo7QUFLSkMsWUFBTSxFQUFFLE9BTEo7QUFNSkMsV0FBSyxFQUFFLE1BTkg7QUFPSkMsWUFBTSxFQUFFLE1BUEo7QUFRSkMsV0FBSyxFQUFFLGVBUkg7QUFTSkMsY0FBUSxFQUFFO0FBVE47QUFESyxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCO0FBcUJlLFNBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTJDO0FBQUE7O0FBQ3hELE1BQU1DLE9BQU8sR0FBR2hCLFNBQVMsRUFBekI7QUFFQSxNQUFNaUIsT0FBaUIsR0FBRyxDQUN4QjtBQUFFQyxTQUFLLEVBQUUsSUFBVDtBQUFlQyxjQUFVLEVBQUUsSUFBM0I7QUFBaUNULFNBQUssRUFBRTtBQUF4QyxHQUR3QixFQUV4QjtBQUFFUSxTQUFLLEVBQUUsT0FBVDtBQUFrQkMsY0FBVSxFQUFFLE9BQTlCO0FBQXVDVCxTQUFLLEVBQUU7QUFBOUMsR0FGd0IsRUFHeEI7QUFBRVEsU0FBSyxFQUFFLFdBQVQ7QUFBc0JDLGNBQVUsRUFBRSxjQUFsQztBQUFrRFQsU0FBSyxFQUFFO0FBQXpELEdBSHdCLEVBSXhCO0FBQUVRLFNBQUssRUFBRSxXQUFUO0FBQXNCQyxjQUFVLEVBQUUsY0FBbEM7QUFBa0RULFNBQUssRUFBRTtBQUF6RCxHQUp3QixDQUExQjtBQU9BLE1BQU1VLElBQUksR0FBR0wsS0FBSyxDQUFDTSxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxRQUFELEVBQXNCLENBQUUsQ0FBNUMsQ0FBYixDQVZ3RCxDQVd4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUVQLE9BQU8sQ0FBQ1osSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBVSxRQUFJLEVBQUVnQixJQUFoQjtBQUFzQixXQUFPLEVBQUVILE9BQS9CO0FBQXdDLFlBQVEsRUFBRSxFQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQUtEOztHQTVCdUJILFM7VUFDTmQsUzs7O0tBRE1jLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL25vdGVib29rcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGF0YUdyaWQsIENvbERlZiwgVmFsdWVHZXR0ZXJQYXJhbXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkJztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IElOb3RlYm9vayBmcm9tICcuL2ludGVyZmFjZXMvaW5vdGVib29rJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGZsZXhEZGlyZWN0aW9uOiAncm93JyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGNvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5pbnRlcmZhY2UgSU5vdGVib29rc1Byb3BzIHtcbiAgbm90ZWJvb2tzOiBJTm90ZWJvb2s7XG4gIG5vdGVib29rT3JkZXI6IEFycmF5PHN0cmluZz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVib29rcyhwcm9wczogSU5vdGVib29rc1Byb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBjb2x1bW5zOiBDb2xEZWZbXSA9IFtcbiAgICB7IGZpZWxkOiAnaWQnLCBoZWFkZXJOYW1lOiAnSUQnLCB3aWR0aDogNzAgfSxcbiAgICB7IGZpZWxkOiAndGl0bGUnLCBoZWFkZXJOYW1lOiAnVGl0bGUnLCB3aWR0aDogMjUwIH0sXG4gICAgeyBmaWVsZDogJ2NyZWF0ZWRBdCcsIGhlYWRlck5hbWU6ICdDcmVhdGVkIERhdGUnLCB3aWR0aDogMzAwIH0sXG4gICAgeyBmaWVsZDogJ3VwZGF0ZWRBdCcsIGhlYWRlck5hbWU6ICdVcGRhdGVkIERhdGUnLCB3aWR0aDogMzAwIH0sXG4gIF07XG5cbiAgY29uc3Qgcm93cyA9IHByb3BzLm5vdGVib29rcy5tYXAoKG5vdGVib29rOiBzdHJpbmcpID0+IHt9KTtcbiAgLy8gW1xuICAvLyAgIHsgaWQ6IDEsIGxhc3ROYW1lOiAnU25vdycsIGZpcnN0TmFtZTogJ0pvbicsIGFnZTogMzUgfSxcbiAgLy8gICB7IGlkOiAyLCBsYXN0TmFtZTogJ0xhbm5pc3RlcicsIGZpcnN0TmFtZTogJ0NlcnNlaScsIGFnZTogNDIgfSxcbiAgLy8gICB7IGlkOiAzLCBsYXN0TmFtZTogJ0xhbm5pc3RlcicsIGZpcnN0TmFtZTogJ0phaW1lJywgYWdlOiA0NSB9LFxuICAvLyAgIHsgaWQ6IDQsIGxhc3ROYW1lOiAnU3RhcmsnLCBmaXJzdE5hbWU6ICdBcnlhJywgYWdlOiAxNiB9LFxuICAvLyAgIHsgaWQ6IDUsIGxhc3ROYW1lOiAnVGFyZ2FyeWVuJywgZmlyc3ROYW1lOiAnRGFlbmVyeXMnLCBhZ2U6IG51bGwgfSxcbiAgLy8gICB7IGlkOiA2LCBsYXN0TmFtZTogJ01lbGlzYW5kcmUnLCBmaXJzdE5hbWU6IG51bGwsIGFnZTogMTUwIH0sXG4gIC8vICAgeyBpZDogNywgbGFzdE5hbWU6ICdDbGlmZm9yZCcsIGZpcnN0TmFtZTogJ0ZlcnJhcmEnLCBhZ2U6IDQ0IH0sXG4gIC8vICAgeyBpZDogOCwgbGFzdE5hbWU6ICdGcmFuY2VzJywgZmlyc3ROYW1lOiAnUm9zc2luaScsIGFnZTogMzYgfSxcbiAgLy8gICB7IGlkOiA5LCBsYXN0TmFtZTogJ1JveGllJywgZmlyc3ROYW1lOiAnSGFydmV5JywgYWdlOiA2NSB9LFxuICAvLyBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8RGF0YUdyaWQgcm93cz17cm93c30gY29sdW1ucz17Y29sdW1uc30gcGFnZVNpemU9ezEwfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/notebooks.tsx\n");

/***/ })

})
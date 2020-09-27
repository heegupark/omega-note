webpackHotUpdate_N_E("pages/index",{

/***/ "./components/notebooks.tsx":
/*!**********************************!*\
  !*** ./components/notebooks.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Notebooks; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/data-grid */ \"./node_modules/@material-ui/data-grid/dist/index-esm.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/notebooks.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDdirection: 'row',\n      height: '100vh',\n      width: '100%',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px'\n    }\n  });\n});\nvar columns = [{\n  field: 'id',\n  headerName: 'ID',\n  width: 70\n}, {\n  field: 'firstName',\n  headerName: 'First name',\n  width: 130\n}, {\n  field: 'lastName',\n  headerName: 'Last name',\n  width: 130\n}, {\n  field: 'age',\n  headerName: 'Age',\n  type: 'number',\n  width: 90\n}, {\n  field: 'fullName',\n  headerName: 'Full name',\n  description: 'This column has a value getter and is not sortable.',\n  sortable: false,\n  width: 160,\n  valueGetter: function valueGetter(params) {\n    return \"\".concat(params.getValue('firstName') || '', \" \").concat(params.getValue('lastName') || '');\n  }\n}];\nvar rows = [{\n  id: 1,\n  lastName: 'Snow',\n  firstName: 'Jon',\n  age: 35\n}, {\n  id: 2,\n  lastName: 'Lannister',\n  firstName: 'Cersei',\n  age: 42\n}, {\n  id: 3,\n  lastName: 'Lannister',\n  firstName: 'Jaime',\n  age: 45\n}, {\n  id: 4,\n  lastName: 'Stark',\n  firstName: 'Arya',\n  age: 16\n}, {\n  id: 5,\n  lastName: 'Targaryen',\n  firstName: 'Daenerys',\n  age: null\n}, {\n  id: 6,\n  lastName: 'Melisandre',\n  firstName: null,\n  age: 150\n}, {\n  id: 7,\n  lastName: 'Clifford',\n  firstName: 'Ferrara',\n  age: 44\n}, {\n  id: 8,\n  lastName: 'Frances',\n  firstName: 'Rossini',\n  age: 36\n}, {\n  id: 9,\n  lastName: 'Roxie',\n  firstName: 'Harvey',\n  age: 65\n}];\nfunction Notebooks() {\n  _s();\n\n  var classes = useStyles();\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_1__[\"DataGrid\"], {\n    rows: rows,\n    columns: columns,\n    pageSize: 5,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(Notebooks, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Notebooks;\n\nvar _c;\n\n$RefreshReg$(_c, \"Notebooks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlYm9va3MudHN4P2RjODkiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGRpcmVjdGlvbiIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luIiwiY29sb3IiLCJmb250U2l6ZSIsImNvbHVtbnMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJzb3J0YWJsZSIsInZhbHVlR2V0dGVyIiwicGFyYW1zIiwiZ2V0VmFsdWUiLCJyb3dzIiwiaWQiLCJsYXN0TmFtZSIsImZpcnN0TmFtZSIsImFnZSIsIk5vdGVib29rcyIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxvQkFBYyxFQUFFLEtBRlo7QUFHSkMsWUFBTSxFQUFFLE9BSEo7QUFJSkMsV0FBSyxFQUFFLE1BSkg7QUFLSkMsWUFBTSxFQUFFLE1BTEo7QUFNSkMsV0FBSyxFQUFFLGVBTkg7QUFPSkMsY0FBUSxFQUFFO0FBUE47QUFESyxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCO0FBYUEsSUFBTUMsT0FBaUIsR0FBRyxDQUN4QjtBQUFFQyxPQUFLLEVBQUUsSUFBVDtBQUFlQyxZQUFVLEVBQUUsSUFBM0I7QUFBaUNOLE9BQUssRUFBRTtBQUF4QyxDQUR3QixFQUV4QjtBQUFFSyxPQUFLLEVBQUUsV0FBVDtBQUFzQkMsWUFBVSxFQUFFLFlBQWxDO0FBQWdETixPQUFLLEVBQUU7QUFBdkQsQ0FGd0IsRUFHeEI7QUFBRUssT0FBSyxFQUFFLFVBQVQ7QUFBcUJDLFlBQVUsRUFBRSxXQUFqQztBQUE4Q04sT0FBSyxFQUFFO0FBQXJELENBSHdCLEVBSXhCO0FBQ0VLLE9BQUssRUFBRSxLQURUO0FBRUVDLFlBQVUsRUFBRSxLQUZkO0FBR0VDLE1BQUksRUFBRSxRQUhSO0FBSUVQLE9BQUssRUFBRTtBQUpULENBSndCLEVBVXhCO0FBQ0VLLE9BQUssRUFBRSxVQURUO0FBRUVDLFlBQVUsRUFBRSxXQUZkO0FBR0VFLGFBQVcsRUFBRSxxREFIZjtBQUlFQyxVQUFRLEVBQUUsS0FKWjtBQUtFVCxPQUFLLEVBQUUsR0FMVDtBQU1FVSxhQUFXLEVBQUUscUJBQUNDLE1BQUQ7QUFBQSxxQkFDUkEsTUFBTSxDQUFDQyxRQUFQLENBQWdCLFdBQWhCLEtBQWdDLEVBRHhCLGNBRVRELE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQixVQUFoQixLQUErQixFQUZ0QjtBQUFBO0FBTmYsQ0FWd0IsQ0FBMUI7QUF1QkEsSUFBTUMsSUFBSSxHQUFHLENBQ1g7QUFBRUMsSUFBRSxFQUFFLENBQU47QUFBU0MsVUFBUSxFQUFFLE1BQW5CO0FBQTJCQyxXQUFTLEVBQUUsS0FBdEM7QUFBNkNDLEtBQUcsRUFBRTtBQUFsRCxDQURXLEVBRVg7QUFBRUgsSUFBRSxFQUFFLENBQU47QUFBU0MsVUFBUSxFQUFFLFdBQW5CO0FBQWdDQyxXQUFTLEVBQUUsUUFBM0M7QUFBcURDLEtBQUcsRUFBRTtBQUExRCxDQUZXLEVBR1g7QUFBRUgsSUFBRSxFQUFFLENBQU47QUFBU0MsVUFBUSxFQUFFLFdBQW5CO0FBQWdDQyxXQUFTLEVBQUUsT0FBM0M7QUFBb0RDLEtBQUcsRUFBRTtBQUF6RCxDQUhXLEVBSVg7QUFBRUgsSUFBRSxFQUFFLENBQU47QUFBU0MsVUFBUSxFQUFFLE9BQW5CO0FBQTRCQyxXQUFTLEVBQUUsTUFBdkM7QUFBK0NDLEtBQUcsRUFBRTtBQUFwRCxDQUpXLEVBS1g7QUFBRUgsSUFBRSxFQUFFLENBQU47QUFBU0MsVUFBUSxFQUFFLFdBQW5CO0FBQWdDQyxXQUFTLEVBQUUsVUFBM0M7QUFBdURDLEtBQUcsRUFBRTtBQUE1RCxDQUxXLEVBTVg7QUFBRUgsSUFBRSxFQUFFLENBQU47QUFBU0MsVUFBUSxFQUFFLFlBQW5CO0FBQWlDQyxXQUFTLEVBQUUsSUFBNUM7QUFBa0RDLEtBQUcsRUFBRTtBQUF2RCxDQU5XLEVBT1g7QUFBRUgsSUFBRSxFQUFFLENBQU47QUFBU0MsVUFBUSxFQUFFLFVBQW5CO0FBQStCQyxXQUFTLEVBQUUsU0FBMUM7QUFBcURDLEtBQUcsRUFBRTtBQUExRCxDQVBXLEVBUVg7QUFBRUgsSUFBRSxFQUFFLENBQU47QUFBU0MsVUFBUSxFQUFFLFNBQW5CO0FBQThCQyxXQUFTLEVBQUUsU0FBekM7QUFBb0RDLEtBQUcsRUFBRTtBQUF6RCxDQVJXLEVBU1g7QUFBRUgsSUFBRSxFQUFFLENBQU47QUFBU0MsVUFBUSxFQUFFLE9BQW5CO0FBQTRCQyxXQUFTLEVBQUUsUUFBdkM7QUFBaURDLEtBQUcsRUFBRTtBQUF0RCxDQVRXLENBQWI7QUFZZSxTQUFTQyxTQUFULEdBQXFCO0FBQUE7O0FBQ2xDLE1BQU1DLE9BQU8sR0FBRzNCLFNBQVMsRUFBekI7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFFMkIsT0FBTyxDQUFDdkIsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBVSxRQUFJLEVBQUVpQixJQUFoQjtBQUFzQixXQUFPLEVBQUVULE9BQS9CO0FBQXdDLFlBQVEsRUFBRSxDQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQUtEOztHQVB1QmMsUztVQUNOMUIsUzs7O0tBRE0wQixTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ub3RlYm9va3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERhdGFHcmlkLCBDb2xEZWYsIFZhbHVlR2V0dGVyUGFyYW1zIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEZGlyZWN0aW9uOiAncm93JyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGNvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgIH0sXG4gIH0pXG4pO1xuY29uc3QgY29sdW1uczogQ29sRGVmW10gPSBbXG4gIHsgZmllbGQ6ICdpZCcsIGhlYWRlck5hbWU6ICdJRCcsIHdpZHRoOiA3MCB9LFxuICB7IGZpZWxkOiAnZmlyc3ROYW1lJywgaGVhZGVyTmFtZTogJ0ZpcnN0IG5hbWUnLCB3aWR0aDogMTMwIH0sXG4gIHsgZmllbGQ6ICdsYXN0TmFtZScsIGhlYWRlck5hbWU6ICdMYXN0IG5hbWUnLCB3aWR0aDogMTMwIH0sXG4gIHtcbiAgICBmaWVsZDogJ2FnZScsXG4gICAgaGVhZGVyTmFtZTogJ0FnZScsXG4gICAgdHlwZTogJ251bWJlcicsXG4gICAgd2lkdGg6IDkwLFxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdmdWxsTmFtZScsXG4gICAgaGVhZGVyTmFtZTogJ0Z1bGwgbmFtZScsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGNvbHVtbiBoYXMgYSB2YWx1ZSBnZXR0ZXIgYW5kIGlzIG5vdCBzb3J0YWJsZS4nLFxuICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICB3aWR0aDogMTYwLFxuICAgIHZhbHVlR2V0dGVyOiAocGFyYW1zOiBWYWx1ZUdldHRlclBhcmFtcykgPT5cbiAgICAgIGAke3BhcmFtcy5nZXRWYWx1ZSgnZmlyc3ROYW1lJykgfHwgJyd9ICR7XG4gICAgICAgIHBhcmFtcy5nZXRWYWx1ZSgnbGFzdE5hbWUnKSB8fCAnJ1xuICAgICAgfWAsXG4gIH0sXG5dO1xuXG5jb25zdCByb3dzID0gW1xuICB7IGlkOiAxLCBsYXN0TmFtZTogJ1Nub3cnLCBmaXJzdE5hbWU6ICdKb24nLCBhZ2U6IDM1IH0sXG4gIHsgaWQ6IDIsIGxhc3ROYW1lOiAnTGFubmlzdGVyJywgZmlyc3ROYW1lOiAnQ2Vyc2VpJywgYWdlOiA0MiB9LFxuICB7IGlkOiAzLCBsYXN0TmFtZTogJ0xhbm5pc3RlcicsIGZpcnN0TmFtZTogJ0phaW1lJywgYWdlOiA0NSB9LFxuICB7IGlkOiA0LCBsYXN0TmFtZTogJ1N0YXJrJywgZmlyc3ROYW1lOiAnQXJ5YScsIGFnZTogMTYgfSxcbiAgeyBpZDogNSwgbGFzdE5hbWU6ICdUYXJnYXJ5ZW4nLCBmaXJzdE5hbWU6ICdEYWVuZXJ5cycsIGFnZTogbnVsbCB9LFxuICB7IGlkOiA2LCBsYXN0TmFtZTogJ01lbGlzYW5kcmUnLCBmaXJzdE5hbWU6IG51bGwsIGFnZTogMTUwIH0sXG4gIHsgaWQ6IDcsIGxhc3ROYW1lOiAnQ2xpZmZvcmQnLCBmaXJzdE5hbWU6ICdGZXJyYXJhJywgYWdlOiA0NCB9LFxuICB7IGlkOiA4LCBsYXN0TmFtZTogJ0ZyYW5jZXMnLCBmaXJzdE5hbWU6ICdSb3NzaW5pJywgYWdlOiAzNiB9LFxuICB7IGlkOiA5LCBsYXN0TmFtZTogJ1JveGllJywgZmlyc3ROYW1lOiAnSGFydmV5JywgYWdlOiA2NSB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZWJvb2tzKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8RGF0YUdyaWQgcm93cz17cm93c30gY29sdW1ucz17Y29sdW1uc30gcGFnZVNpemU9ezV9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/notebooks.tsx\n");

/***/ })

})
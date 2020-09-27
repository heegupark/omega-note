webpackHotUpdate_N_E("pages/index",{

/***/ "./components/notebooks.tsx":
/*!**********************************!*\
  !*** ./components/notebooks.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Notebooks; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/data-grid */ \"./node_modules/@material-ui/data-grid/dist/index-esm.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/notebooks.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px',\n      width: '100%'\n    }\n  });\n});\nvar columns = [{\n  field: 'id',\n  headerName: 'ID',\n  width: 70\n}, {\n  field: 'firstName',\n  headerName: 'First name',\n  width: 130\n}, {\n  field: 'lastName',\n  headerName: 'Last name',\n  width: 130\n}, {\n  field: 'age',\n  headerName: 'Age',\n  type: 'number',\n  width: 90\n}, {\n  field: 'fullName',\n  headerName: 'Full name',\n  description: 'This column has a value getter and is not sortable.',\n  sortable: false,\n  width: 160,\n  valueGetter: function valueGetter(params) {\n    return \"\".concat(params.getValue('firstName') || '', \" \").concat(params.getValue('lastName') || '');\n  }\n}];\nvar rows = [{\n  id: 1,\n  lastName: 'Snow',\n  firstName: 'Jon',\n  age: 35\n}, {\n  id: 2,\n  lastName: 'Lannister',\n  firstName: 'Cersei',\n  age: 42\n}, {\n  id: 3,\n  lastName: 'Lannister',\n  firstName: 'Jaime',\n  age: 45\n}, {\n  id: 4,\n  lastName: 'Stark',\n  firstName: 'Arya',\n  age: 16\n}, {\n  id: 5,\n  lastName: 'Targaryen',\n  firstName: 'Daenerys',\n  age: null\n}, {\n  id: 6,\n  lastName: 'Melisandre',\n  firstName: null,\n  age: 150\n}, {\n  id: 7,\n  lastName: 'Clifford',\n  firstName: 'Ferrara',\n  age: 44\n}, {\n  id: 8,\n  lastName: 'Frances',\n  firstName: 'Rossini',\n  age: 36\n}, {\n  id: 9,\n  lastName: 'Roxie',\n  firstName: 'Harvey',\n  age: 65\n}];\nfunction Notebooks() {\n  _s();\n\n  var classes = useStyles();\n  return __jsx(\"div\", {\n    style: {\n      height: '100vh',\n      width: '100%'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_1__[\"DataGrid\"], {\n    rows: rows,\n    columns: columns,\n    pageSize: 5,\n    checkboxSelection: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(Notebooks, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Notebooks;\n\nvar _c;\n\n$RefreshReg$(_c, \"Notebooks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlYm9va3MudHN4P2RjODkiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0IiwibWFyZ2luIiwiY29sb3IiLCJmb250U2l6ZSIsIndpZHRoIiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsInR5cGUiLCJkZXNjcmlwdGlvbiIsInNvcnRhYmxlIiwidmFsdWVHZXR0ZXIiLCJwYXJhbXMiLCJnZXRWYWx1ZSIsInJvd3MiLCJpZCIsImxhc3ROYW1lIiwiZmlyc3ROYW1lIiwiYWdlIiwiTm90ZWJvb2tzIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxNQURMO0FBRUpDLG1CQUFhLEVBQUUsUUFGWDtBQUdKQyxZQUFNLEVBQUUsT0FISjtBQUlKQyxZQUFNLEVBQUUsTUFKSjtBQUtKQyxXQUFLLEVBQUUsZUFMSDtBQU1KQyxjQUFRLEVBQUUsTUFOTjtBQU9KQyxXQUFLLEVBQUU7QUFQSDtBQURLLEdBQUQsQ0FEZTtBQUFBLENBQUQsQ0FBNUI7QUFhQSxJQUFNQyxPQUFpQixHQUFHLENBQ3hCO0FBQUVDLE9BQUssRUFBRSxJQUFUO0FBQWVDLFlBQVUsRUFBRSxJQUEzQjtBQUFpQ0gsT0FBSyxFQUFFO0FBQXhDLENBRHdCLEVBRXhCO0FBQUVFLE9BQUssRUFBRSxXQUFUO0FBQXNCQyxZQUFVLEVBQUUsWUFBbEM7QUFBZ0RILE9BQUssRUFBRTtBQUF2RCxDQUZ3QixFQUd4QjtBQUFFRSxPQUFLLEVBQUUsVUFBVDtBQUFxQkMsWUFBVSxFQUFFLFdBQWpDO0FBQThDSCxPQUFLLEVBQUU7QUFBckQsQ0FId0IsRUFJeEI7QUFDRUUsT0FBSyxFQUFFLEtBRFQ7QUFFRUMsWUFBVSxFQUFFLEtBRmQ7QUFHRUMsTUFBSSxFQUFFLFFBSFI7QUFJRUosT0FBSyxFQUFFO0FBSlQsQ0FKd0IsRUFVeEI7QUFDRUUsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsWUFBVSxFQUFFLFdBRmQ7QUFHRUUsYUFBVyxFQUFFLHFEQUhmO0FBSUVDLFVBQVEsRUFBRSxLQUpaO0FBS0VOLE9BQUssRUFBRSxHQUxUO0FBTUVPLGFBQVcsRUFBRSxxQkFBQ0MsTUFBRDtBQUFBLHFCQUNSQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0IsV0FBaEIsS0FBZ0MsRUFEeEIsY0FFVEQsTUFBTSxDQUFDQyxRQUFQLENBQWdCLFVBQWhCLEtBQStCLEVBRnRCO0FBQUE7QUFOZixDQVZ3QixDQUExQjtBQXVCQSxJQUFNQyxJQUFJLEdBQUcsQ0FDWDtBQUFFQyxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxVQUFRLEVBQUUsTUFBbkI7QUFBMkJDLFdBQVMsRUFBRSxLQUF0QztBQUE2Q0MsS0FBRyxFQUFFO0FBQWxELENBRFcsRUFFWDtBQUFFSCxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxVQUFRLEVBQUUsV0FBbkI7QUFBZ0NDLFdBQVMsRUFBRSxRQUEzQztBQUFxREMsS0FBRyxFQUFFO0FBQTFELENBRlcsRUFHWDtBQUFFSCxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxVQUFRLEVBQUUsV0FBbkI7QUFBZ0NDLFdBQVMsRUFBRSxPQUEzQztBQUFvREMsS0FBRyxFQUFFO0FBQXpELENBSFcsRUFJWDtBQUFFSCxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxVQUFRLEVBQUUsT0FBbkI7QUFBNEJDLFdBQVMsRUFBRSxNQUF2QztBQUErQ0MsS0FBRyxFQUFFO0FBQXBELENBSlcsRUFLWDtBQUFFSCxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxVQUFRLEVBQUUsV0FBbkI7QUFBZ0NDLFdBQVMsRUFBRSxVQUEzQztBQUF1REMsS0FBRyxFQUFFO0FBQTVELENBTFcsRUFNWDtBQUFFSCxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxVQUFRLEVBQUUsWUFBbkI7QUFBaUNDLFdBQVMsRUFBRSxJQUE1QztBQUFrREMsS0FBRyxFQUFFO0FBQXZELENBTlcsRUFPWDtBQUFFSCxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxVQUFRLEVBQUUsVUFBbkI7QUFBK0JDLFdBQVMsRUFBRSxTQUExQztBQUFxREMsS0FBRyxFQUFFO0FBQTFELENBUFcsRUFRWDtBQUFFSCxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxVQUFRLEVBQUUsU0FBbkI7QUFBOEJDLFdBQVMsRUFBRSxTQUF6QztBQUFvREMsS0FBRyxFQUFFO0FBQXpELENBUlcsRUFTWDtBQUFFSCxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxVQUFRLEVBQUUsT0FBbkI7QUFBNEJDLFdBQVMsRUFBRSxRQUF2QztBQUFpREMsS0FBRyxFQUFFO0FBQXRELENBVFcsQ0FBYjtBQVllLFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFDbEMsTUFBTUMsT0FBTyxHQUFHM0IsU0FBUyxFQUF6QjtBQUNBLFNBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRU8sWUFBTSxFQUFFLE9BQVY7QUFBbUJJLFdBQUssRUFBRTtBQUExQixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQVUsUUFBSSxFQUFFVSxJQUFoQjtBQUFzQixXQUFPLEVBQUVULE9BQS9CO0FBQXdDLFlBQVEsRUFBRSxDQUFsRDtBQUFxRCxxQkFBaUIsTUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFLRDs7R0FQdUJjLFM7VUFDTjFCLFM7OztLQURNMEIsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvbm90ZWJvb2tzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEYXRhR3JpZCwgQ29sRGVmLCBWYWx1ZUdldHRlclBhcmFtcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9kYXRhLWdyaWQnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgY29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gIH0pXG4pO1xuY29uc3QgY29sdW1uczogQ29sRGVmW10gPSBbXG4gIHsgZmllbGQ6ICdpZCcsIGhlYWRlck5hbWU6ICdJRCcsIHdpZHRoOiA3MCB9LFxuICB7IGZpZWxkOiAnZmlyc3ROYW1lJywgaGVhZGVyTmFtZTogJ0ZpcnN0IG5hbWUnLCB3aWR0aDogMTMwIH0sXG4gIHsgZmllbGQ6ICdsYXN0TmFtZScsIGhlYWRlck5hbWU6ICdMYXN0IG5hbWUnLCB3aWR0aDogMTMwIH0sXG4gIHtcbiAgICBmaWVsZDogJ2FnZScsXG4gICAgaGVhZGVyTmFtZTogJ0FnZScsXG4gICAgdHlwZTogJ251bWJlcicsXG4gICAgd2lkdGg6IDkwLFxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdmdWxsTmFtZScsXG4gICAgaGVhZGVyTmFtZTogJ0Z1bGwgbmFtZScsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGNvbHVtbiBoYXMgYSB2YWx1ZSBnZXR0ZXIgYW5kIGlzIG5vdCBzb3J0YWJsZS4nLFxuICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICB3aWR0aDogMTYwLFxuICAgIHZhbHVlR2V0dGVyOiAocGFyYW1zOiBWYWx1ZUdldHRlclBhcmFtcykgPT5cbiAgICAgIGAke3BhcmFtcy5nZXRWYWx1ZSgnZmlyc3ROYW1lJykgfHwgJyd9ICR7XG4gICAgICAgIHBhcmFtcy5nZXRWYWx1ZSgnbGFzdE5hbWUnKSB8fCAnJ1xuICAgICAgfWAsXG4gIH0sXG5dO1xuXG5jb25zdCByb3dzID0gW1xuICB7IGlkOiAxLCBsYXN0TmFtZTogJ1Nub3cnLCBmaXJzdE5hbWU6ICdKb24nLCBhZ2U6IDM1IH0sXG4gIHsgaWQ6IDIsIGxhc3ROYW1lOiAnTGFubmlzdGVyJywgZmlyc3ROYW1lOiAnQ2Vyc2VpJywgYWdlOiA0MiB9LFxuICB7IGlkOiAzLCBsYXN0TmFtZTogJ0xhbm5pc3RlcicsIGZpcnN0TmFtZTogJ0phaW1lJywgYWdlOiA0NSB9LFxuICB7IGlkOiA0LCBsYXN0TmFtZTogJ1N0YXJrJywgZmlyc3ROYW1lOiAnQXJ5YScsIGFnZTogMTYgfSxcbiAgeyBpZDogNSwgbGFzdE5hbWU6ICdUYXJnYXJ5ZW4nLCBmaXJzdE5hbWU6ICdEYWVuZXJ5cycsIGFnZTogbnVsbCB9LFxuICB7IGlkOiA2LCBsYXN0TmFtZTogJ01lbGlzYW5kcmUnLCBmaXJzdE5hbWU6IG51bGwsIGFnZTogMTUwIH0sXG4gIHsgaWQ6IDcsIGxhc3ROYW1lOiAnQ2xpZmZvcmQnLCBmaXJzdE5hbWU6ICdGZXJyYXJhJywgYWdlOiA0NCB9LFxuICB7IGlkOiA4LCBsYXN0TmFtZTogJ0ZyYW5jZXMnLCBmaXJzdE5hbWU6ICdSb3NzaW5pJywgYWdlOiAzNiB9LFxuICB7IGlkOiA5LCBsYXN0TmFtZTogJ1JveGllJywgZmlyc3ROYW1lOiAnSGFydmV5JywgYWdlOiA2NSB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZWJvb2tzKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICA8RGF0YUdyaWQgcm93cz17cm93c30gY29sdW1ucz17Y29sdW1uc30gcGFnZVNpemU9ezV9IGNoZWNrYm94U2VsZWN0aW9uIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/notebooks.tsx\n");

/***/ })

})
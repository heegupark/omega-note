webpackHotUpdate_N_E("pages/index",{

/***/ "./components/notebooks.tsx":
/*!**********************************!*\
  !*** ./components/notebooks.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Notebooks; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/data-grid */ \"./node_modules/@material-ui/data-grid/dist/index-esm.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/notebooks.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyItems: 'center',\n      flexDdirection: 'row',\n      height: '100vh',\n      width: '100%',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px'\n    }\n  });\n});\nfunction Notebooks(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var getTimeMsg = function getTimeMsg(date) {\n    var createdTime = new Date(date).valueOf();\n    var currentTime = new Date().valueOf();\n    var second = 60;\n    var minute = 60;\n    var hour = 24;\n    var day = 30;\n    var month = 12;\n    var divider = 1;\n    var timeMsg = '';\n    var diff = (currentTime - createdTime) / 1000;\n\n    if (diff <= second) {\n      timeMsg = 'second';\n    } else if (diff <= second * minute) {\n      divider = second;\n      timeMsg = 'minute';\n    } else if (diff <= second * minute * hour) {\n      divider = second * minute;\n      timeMsg = 'hour';\n    } else if (diff <= 172800) {\n      divider = second * minute * hour;\n      timeMsg = 'day';\n    } else if (diff <= second * minute * hour * day * month) {\n      divider = second * minute * hour * day;\n      timeMsg = 'month';\n    } else {\n      divider = second * minute * hour * day * month;\n      timeMsg = 'year';\n    }\n\n    diff /= divider;\n    var displayTime = Math.abs(Math.round(diff));\n    var plural = displayTime > 1 ? 's' : '';\n    var timeMessage = \"\".concat(displayTime, \" \").concat(timeMsg).concat(plural, \" ago\");\n    return timeMessage;\n  };\n\n  var columns = [{\n    field: 'id',\n    headerName: 'ID',\n    width: 70\n  }, {\n    field: 'title',\n    headerName: 'Title',\n    width: 250\n  }, {\n    field: 'createdAt',\n    headerName: 'Created Date',\n    width: 300\n  }, {\n    field: 'updatedAt',\n    headerName: 'Updated Date',\n    width: 300\n  }]; // const rows: Array = [];\n\n  var rows = props.notebookOrder.map(function (notebook, index) {\n    return {\n      id: index,\n      title: props.notebooks[notebook].title,\n      createdAt: getTimeMsg(props.notebooks[notebook].createdAt),\n      updatedAt: getTimeMsg(props.notebooks[notebook].updatedAt)\n    }; // row.push(row);\n  }); // [\n  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },\n  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },\n  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },\n  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },\n  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },\n  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },\n  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },\n  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },\n  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },\n  // ];\n\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_1__[\"DataGrid\"], {\n    rows: rows,\n    columns: columns,\n    pageSize: 10,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(Notebooks, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Notebooks;\n\nvar _c;\n\n$RefreshReg$(_c, \"Notebooks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlYm9va3MudHN4P2RjODkiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUl0ZW1zIiwiZmxleERkaXJlY3Rpb24iLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsImNvbG9yIiwiZm9udFNpemUiLCJOb3RlYm9va3MiLCJwcm9wcyIsImNsYXNzZXMiLCJnZXRUaW1lTXNnIiwiZGF0ZSIsImNyZWF0ZWRUaW1lIiwiRGF0ZSIsInZhbHVlT2YiLCJjdXJyZW50VGltZSIsInNlY29uZCIsIm1pbnV0ZSIsImhvdXIiLCJkYXkiLCJtb250aCIsImRpdmlkZXIiLCJ0aW1lTXNnIiwiZGlmZiIsImRpc3BsYXlUaW1lIiwiTWF0aCIsImFicyIsInJvdW5kIiwicGx1cmFsIiwidGltZU1lc3NhZ2UiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwicm93cyIsIm5vdGVib29rT3JkZXIiLCJtYXAiLCJub3RlYm9vayIsImluZGV4IiwiaWQiLCJ0aXRsZSIsIm5vdGVib29rcyIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxNQURMO0FBRUpDLGdCQUFVLEVBQUUsUUFGUjtBQUdKQyxrQkFBWSxFQUFFLFFBSFY7QUFJSkMsb0JBQWMsRUFBRSxLQUpaO0FBS0pDLFlBQU0sRUFBRSxPQUxKO0FBTUpDLFdBQUssRUFBRSxNQU5IO0FBT0pDLFlBQU0sRUFBRSxNQVBKO0FBUUpDLFdBQUssRUFBRSxlQVJIO0FBU0pDLGNBQVEsRUFBRTtBQVROO0FB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Q0EsTUFBTThCLElBQUksR0FBR3pCLEtBQUssQ0FBQzBCLGFBQU4sQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUNDLFFBQUQsRUFBbUJDLEtBQW5CLEVBQXFDO0FBQ3hFLFdBQU87QUFDTEMsUUFBRSxFQUFFRCxLQURDO0FBRUxFLFdBQUssRUFBRS9CLEtBQUssQ0FBQ2dDLFNBQU4sQ0FBZ0JKLFFBQWhCLEVBQTBCRyxLQUY1QjtBQUdMRSxlQUFTLEVBQUUvQixVQUFVLENBQUNGLEtBQUssQ0FBQ2dDLFNBQU4sQ0FBZ0JKLFFBQWhCLEVBQTBCSyxTQUEzQixDQUhoQjtBQUlMQyxlQUFTLEVBQUVoQyxVQUFVLENBQUNGLEtBQUssQ0FBQ2dDLFNBQU4sQ0FBZ0JKLFFBQWhCLEVBQTBCTSxTQUEzQjtBQUpoQixLQUFQLENBRHdFLENBT3hFO0FBQ0QsR0FSWSxDQUFiLENBL0N3RCxDQXdEeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFFakMsT0FBTyxDQUFDWixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFVLFFBQUksRUFBRW9DLElBQWhCO0FBQXNCLFdBQU8sRUFBRUgsT0FBL0I7QUFBd0MsWUFBUSxFQUFFLEVBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBS0Q7O0dBekV1QnZCLFM7VUFDTmQsUzs7O0tBRE1jLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL25vdGVib29rcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGF0YUdyaWQsIENvbERlZiwgVmFsdWVHZXR0ZXJQYXJhbXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkJztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IElOb3RlYm9vayBmcm9tICcuL2ludGVyZmFjZXMvaW5vdGVib29rJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGZsZXhEZGlyZWN0aW9uOiAncm93JyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGNvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5pbnRlcmZhY2UgSU5vdGVib29rc1Byb3BzIHtcbiAgbm90ZWJvb2tzOiBJTm90ZWJvb2s7XG4gIG5vdGVib29rT3JkZXI6IEFycmF5PHN0cmluZz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVib29rcyhwcm9wczogSU5vdGVib29rc1Byb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBnZXRUaW1lTXNnID0gKGRhdGU6IERhdGUpID0+IHtcbiAgICBjb25zdCBjcmVhdGVkVGltZSA9IG5ldyBEYXRlKGRhdGUpLnZhbHVlT2YoKTtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgIGNvbnN0IHNlY29uZCA9IDYwO1xuICAgIGNvbnN0IG1pbnV0ZSA9IDYwO1xuICAgIGNvbnN0IGhvdXIgPSAyNDtcbiAgICBjb25zdCBkYXkgPSAzMDtcbiAgICBjb25zdCBtb250aCA9IDEyO1xuICAgIGxldCBkaXZpZGVyID0gMTtcbiAgICBsZXQgdGltZU1zZyA9ICcnO1xuICAgIGxldCBkaWZmID0gKGN1cnJlbnRUaW1lIC0gY3JlYXRlZFRpbWUpIC8gMTAwMDtcbiAgICBpZiAoZGlmZiA8PSBzZWNvbmQpIHtcbiAgICAgIHRpbWVNc2cgPSAnc2Vjb25kJztcbiAgICB9IGVsc2UgaWYgKGRpZmYgPD0gc2Vjb25kICogbWludXRlKSB7XG4gICAgICBkaXZpZGVyID0gc2Vjb25kO1xuICAgICAgdGltZU1zZyA9ICdtaW51dGUnO1xuICAgIH0gZWxzZSBpZiAoZGlmZiA8PSBzZWNvbmQgKiBtaW51dGUgKiBob3VyKSB7XG4gICAgICBkaXZpZGVyID0gc2Vjb25kICogbWludXRlO1xuICAgICAgdGltZU1zZyA9ICdob3VyJztcbiAgICB9IGVsc2UgaWYgKGRpZmYgPD0gMTcyODAwKSB7XG4gICAgICBkaXZpZGVyID0gc2Vjb25kICogbWludXRlICogaG91cjtcbiAgICAgIHRpbWVNc2cgPSAnZGF5JztcbiAgICB9IGVsc2UgaWYgKGRpZmYgPD0gc2Vjb25kICogbWludXRlICogaG91ciAqIGRheSAqIG1vbnRoKSB7XG4gICAgICBkaXZpZGVyID0gc2Vjb25kICogbWludXRlICogaG91ciAqIGRheTtcbiAgICAgIHRpbWVNc2cgPSAnbW9udGgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXZpZGVyID0gc2Vjb25kICogbWludXRlICogaG91ciAqIGRheSAqIG1vbnRoO1xuICAgICAgdGltZU1zZyA9ICd5ZWFyJztcbiAgICB9XG4gICAgZGlmZiAvPSBkaXZpZGVyO1xuICAgIGNvbnN0IGRpc3BsYXlUaW1lID0gTWF0aC5hYnMoTWF0aC5yb3VuZChkaWZmKSk7XG4gICAgY29uc3QgcGx1cmFsID0gZGlzcGxheVRpbWUgPiAxID8gJ3MnIDogJyc7XG4gICAgY29uc3QgdGltZU1lc3NhZ2UgPSBgJHtkaXNwbGF5VGltZX0gJHt0aW1lTXNnfSR7cGx1cmFsfSBhZ29gO1xuICAgIHJldHVybiB0aW1lTWVzc2FnZTtcbiAgfTtcblxuICBjb25zdCBjb2x1bW5zOiBDb2xEZWZbXSA9IFtcbiAgICB7IGZpZWxkOiAnaWQnLCBoZWFkZXJOYW1lOiAnSUQnLCB3aWR0aDogNzAgfSxcbiAgICB7IGZpZWxkOiAndGl0bGUnLCBoZWFkZXJOYW1lOiAnVGl0bGUnLCB3aWR0aDogMjUwIH0sXG4gICAgeyBmaWVsZDogJ2NyZWF0ZWRBdCcsIGhlYWRlck5hbWU6ICdDcmVhdGVkIERhdGUnLCB3aWR0aDogMzAwIH0sXG4gICAgeyBmaWVsZDogJ3VwZGF0ZWRBdCcsIGhlYWRlck5hbWU6ICdVcGRhdGVkIERhdGUnLCB3aWR0aDogMzAwIH0sXG4gIF07XG5cbiAgLy8gY29uc3Qgcm93czogQXJyYXkgPSBbXTtcbiAgY29uc3Qgcm93cyA9IHByb3BzLm5vdGVib29rT3JkZXIubWFwKChub3RlYm9vazogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBpbmRleCxcbiAgICAgIHRpdGxlOiBwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tdLnRpdGxlLFxuICAgICAgY3JlYXRlZEF0OiBnZXRUaW1lTXNnKHByb3BzLm5vdGVib29rc1tub3RlYm9va10uY3JlYXRlZEF0KSxcbiAgICAgIHVwZGF0ZWRBdDogZ2V0VGltZU1zZyhwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tdLnVwZGF0ZWRBdCksXG4gICAgfTtcbiAgICAvLyByb3cucHVzaChyb3cpO1xuICB9KTtcbiAgLy8gW1xuICAvLyAgIHsgaWQ6IDEsIGxhc3ROYW1lOiAnU25vdycsIGZpcnN0TmFtZTogJ0pvbicsIGFnZTogMzUgfSxcbiAgLy8gICB7IGlkOiAyLCBsYXN0TmFtZTogJ0xhbm5pc3RlcicsIGZpcnN0TmFtZTogJ0NlcnNlaScsIGFnZTogNDIgfSxcbiAgLy8gICB7IGlkOiAzLCBsYXN0TmFtZTogJ0xhbm5pc3RlcicsIGZpcnN0TmFtZTogJ0phaW1lJywgYWdlOiA0NSB9LFxuICAvLyAgIHsgaWQ6IDQsIGxhc3ROYW1lOiAnU3RhcmsnLCBmaXJzdE5hbWU6ICdBcnlhJywgYWdlOiAxNiB9LFxuICAvLyAgIHsgaWQ6IDUsIGxhc3ROYW1lOiAnVGFyZ2FyeWVuJywgZmlyc3ROYW1lOiAnRGFlbmVyeXMnLCBhZ2U6IG51bGwgfSxcbiAgLy8gICB7IGlkOiA2LCBsYXN0TmFtZTogJ01lbGlzYW5kcmUnLCBmaXJzdE5hbWU6IG51bGwsIGFnZTogMTUwIH0sXG4gIC8vICAgeyBpZDogNywgbGFzdE5hbWU6ICdDbGlmZm9yZCcsIGZpcnN0TmFtZTogJ0ZlcnJhcmEnLCBhZ2U6IDQ0IH0sXG4gIC8vICAgeyBpZDogOCwgbGFzdE5hbWU6ICdGcmFuY2VzJywgZmlyc3ROYW1lOiAnUm9zc2luaScsIGFnZTogMzYgfSxcbiAgLy8gICB7IGlkOiA5LCBsYXN0TmFtZTogJ1JveGllJywgZmlyc3ROYW1lOiAnSGFydmV5JywgYWdlOiA2NSB9LFxuICAvLyBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8RGF0YUdyaWQgcm93cz17cm93c30gY29sdW1ucz17Y29sdW1uc30gcGFnZVNpemU9ezEwfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/notebooks.tsx\n");

/***/ })

})
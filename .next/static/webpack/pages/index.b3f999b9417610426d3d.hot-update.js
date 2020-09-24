webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note-list.tsx":
/*!**********************************!*\
  !*** ./components/note-list.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteList; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Divider */ \"./node_modules/@material-ui/core/esm/Divider/index.js\");\n/* harmony import */ var _note_list_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./note-list-item */ \"./components/note-list-item.tsx\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note-list.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px',\n      width: '100%'\n    },\n    title: {\n      padding: '10px',\n      fontSize: '22px'\n    },\n    noteCount: {\n      fontSize: '12px',\n      padding: '10px',\n      color: 'rgb(107,107,107)'\n    },\n    empty: {\n      alignItems: 'center',\n      justifyContent: 'center',\n      margin: 'auto',\n      textAlign: 'center',\n      padding: '35px'\n    },\n    emptyIcon: {\n      fontSize: '75px'\n    },\n    newNoteText: {\n      cursor: 'pointer',\n      color: 'rgb(0,168,45)'\n    }\n  });\n});\nfunction NoteList(props) {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: classes.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, props.notebooks[props.notebook].title), __jsx(\"div\", {\n    className: classes.noteCount,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, props.notebooks[props.notebook].notes.length), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }), props.notebooks[props.notebook].notes.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, props.notebooks[props.notebook].notes.map(function (note) {\n    return __jsx(\"div\", {\n      key: note.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 15\n      }\n    }, __jsx(_note_list_item__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      note: note\n    }, props, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 17\n      }\n    })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }\n    }));\n  })) : __jsx(\"div\", {\n    className: classes.empty,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.emptyIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_3__[\"CgNotes\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, \"It all begins with notes\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }, \"Click the\", ' ', __jsx(\"span\", {\n    onClick: function onClick() {\n      return props.addNewNote();\n    },\n    className: classes.newNoteText,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, \"+ New Note\"), ' ', \"button in the side bar to create note.\")));\n}\n\n_s(NoteList, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = NoteList;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLWxpc3QudHN4PzIxYzUiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0IiwibWFyZ2luIiwiY29sb3IiLCJmb250U2l6ZSIsIndpZHRoIiwidGl0bGUiLCJwYWRkaW5nIiwibm90ZUNvdW50IiwiZW1wdHkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJlbXB0eUljb24iLCJuZXdOb3RlVGV4dCIsImN1cnNvciIsIk5vdGVMaXN0IiwicHJvcHMiLCJjbGFzc2VzIiwibm90ZWJvb2tzIiwibm90ZWJvb2siLCJub3RlcyIsImxlbmd0aCIsIm1hcCIsIm5vdGUiLCJpZCIsImFkZE5ld05vdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxtQkFBYSxFQUFFLFFBRlg7QUFHSkMsWUFBTSxFQUFFLE9BSEo7QUFJSkMsWUFBTSxFQUFFLE1BSko7QUFLSkMsV0FBSyxFQUFFLGVBTEg7QUFNSkMsY0FBUSxFQUFFLE1BTk47QUFPSkMsV0FBSyxFQUFFO0FBUEgsS0FESztBQVVYQyxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEgsY0FBUSxFQUFFO0FBRkwsS0FWSTtBQWNYSSxhQUFTLEVBQUU7QUFDVEosY0FBUSxFQUFFLE1BREQ7QUFFVEcsYUFBTyxFQUFFLE1BRkE7QUFHVEosV0FBSyxFQUFFO0FBSEUsS0FkQTtBQW1CWE0sU0FBSyxFQUFFO0FBQ0xDLGdCQUFVLEVBQUUsUUFEUDtBQUVMQyxvQkFBYyxFQUFFLFFBRlg7QUFHTFQsWUFBTSxFQUFFLE1BSEg7QUFJTFUsZUFBUyxFQUFFLFFBSk47QUFLTEwsYUFBTyxFQUFFO0FBTEosS0FuQkk7QUEwQlhNLGFBQVMsRUFBRTtBQUNUVCxjQUFRLEVBQUU7QUFERCxLQTFCQTtBQTZCWFUsZUFBVyxFQUFFO0FBQ1hDLFlBQU0sRUFBRSxTQURHO0FBRVhaLFdBQUssRUFBRTtBQUZJO0FBN0JGLEdBQUQsQ0FEZTtBQUFBLENBQUQsQ0FBNUI7QUFxQ2UsU0FBU2EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBOEI7QUFBQTs7QUFBQTs7QUFDM0MsTUFBTUMsT0FBTyxHQUFHeEIsU0FBUyxFQUF6QjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUV3QixPQUFPLENBQUNwQixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVvQixPQUFPLENBQUNaLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1csS0FBSyxDQUFDRSxTQUFOLENBQWdCRixLQUFLLENBQUNHLFFBQXRCLEVBQWdDZCxLQURuQyxDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUVZLE9BQU8sQ0FBQ1YsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUyxLQUFLLENBQUNFLFNBQU4sQ0FBZ0JGLEtBQUssQ0FBQ0csUUFBdEIsRUFBZ0NDLEtBQWhDLENBQXNDQyxNQUR6QyxDQUpGLEVBT0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRR0wsS0FBSyxDQUFDRSxTQUFOLENBQWdCRixLQUFLLENBQUNHLFFBQXRCLEVBQWdDQyxLQUFoQyxDQUFzQ0MsTUFBdEMsR0FBK0MsQ0FBL0MsR0FDQyxtRUFDR0wsS0FBSyxDQUFDRSxTQUFOLENBQWdCRixLQUFLLENBQUNHLFFBQXRCLEVBQWdDQyxLQUFoQyxDQUFzQ0UsR0FBdEMsQ0FBMEMsVUFBQ0MsSUFBRCxFQUFlO0FBQ3hELFdBQ0U7QUFBSyxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx1REFBRDtBQUFjLFVBQUksRUFBRUQ7QUFBcEIsT0FBOEJQLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERixFQUVFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBREY7QUFNRCxHQVBBLENBREgsQ0FERCxHQVlDO0FBQUssYUFBUyxFQUFFQyxPQUFPLENBQUNULEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRVMsT0FBTyxDQUFDTCxTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNZLEdBRFosRUFFRTtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU1JLEtBQUssQ0FBQ1MsVUFBTixFQUFOO0FBQUEsS0FEWDtBQUVFLGFBQVMsRUFBRVIsT0FBTyxDQUFDSixXQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLEVBT1UsR0FQViwyQ0FMRixDQXBCSixDQURGO0FBd0NEOztHQTNDdUJFLFE7VUFDTnRCLFM7OztLQURNc0IsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbm90ZS1saXN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgQ2dOb3RlcyB9IGZyb20gJ3JlYWN0LWljb25zL2NnJztcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xuaW1wb3J0IE5vdGVMaXN0SXRlbSBmcm9tICcuL25vdGUtbGlzdC1pdGVtJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBjb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgZm9udFNpemU6ICcyMnB4JyxcbiAgICB9LFxuICAgIG5vdGVDb3VudDoge1xuICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgIGNvbG9yOiAncmdiKDEwNywxMDcsMTA3KScsXG4gICAgfSxcbiAgICBlbXB0eToge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBwYWRkaW5nOiAnMzVweCcsXG4gICAgfSxcbiAgICBlbXB0eUljb246IHtcbiAgICAgIGZvbnRTaXplOiAnNzVweCcsXG4gICAgfSxcbiAgICBuZXdOb3RlVGV4dDoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogJ3JnYigwLDE2OCw0NSknLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlTGlzdChwcm9wczogYW55KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICB7cHJvcHMubm90ZWJvb2tzW3Byb3BzLm5vdGVib29rXS50aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZUNvdW50fT5cbiAgICAgICAge3Byb3BzLm5vdGVib29rc1twcm9wcy5ub3RlYm9va10ubm90ZXMubGVuZ3RofVxuICAgICAgPC9kaXY+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAge3Byb3BzLm5vdGVib29rc1twcm9wcy5ub3RlYm9va10ubm90ZXMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7cHJvcHMubm90ZWJvb2tzW3Byb3BzLm5vdGVib29rXS5ub3Rlcy5tYXAoKG5vdGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e25vdGUuaWR9PlxuICAgICAgICAgICAgICAgIDxOb3RlTGlzdEl0ZW0gbm90ZT17bm90ZX0gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lbXB0eX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZW1wdHlJY29ufT5cbiAgICAgICAgICAgIDxDZ05vdGVzIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5JdCBhbGwgYmVnaW5zIHdpdGggbm90ZXM8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgQ2xpY2sgdGhleycgJ31cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmFkZE5ld05vdGUoKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5ld05vdGVUZXh0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICArIE5ldyBOb3RlXG4gICAgICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgICAgICAgIGJ1dHRvbiBpbiB0aGUgc2lkZSBiYXIgdG8gY3JlYXRlIG5vdGUuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/note-list.tsx\n");

/***/ })

})
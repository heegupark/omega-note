webpackHotUpdate_N_E("pages/index",{

/***/ "./components/main.tsx":
/*!*****************************!*\
  !*** ./components/main.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ \"./components/sidebar.tsx\");\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note */ \"./components/note.tsx\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Snackbar */ \"./node_modules/@material-ui/core/esm/Snackbar/index.js\");\n/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/lab/Alert */ \"./node_modules/@material-ui/lab/esm/Alert/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/main.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n // import Disclaimer from './disclaimer';\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"createStyles\"])({\n    root: {\n      display: 'flex'\n    }\n  });\n});\n\nfunction Alert(props) {\n  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_8__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    elevation: 6,\n    variant: \"filled\"\n  }, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 10\n    }\n  }));\n}\n\n_c = Alert;\nfunction Main() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      message = _useState2[0],\n      setMessage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('success'),\n      severity = _useState3[0],\n      setSeverity = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([{\n    id: 'notebook-0',\n    title: 'Work',\n    notes: [{\n      id: Object(uuid__WEBPACK_IMPORTED_MODULE_6__[\"v4\"])(),\n      noteTitle: 'Tech interview',\n      note: '',\n      isDeleted: false,\n      createdAt: new Date(2020, 8, 10),\n      updatedAt: new Date(2020, 8, 10)\n    }, {\n      id: Object(uuid__WEBPACK_IMPORTED_MODULE_6__[\"v4\"])(),\n      noteTitle: 'Meet up',\n      note: '',\n      isDeleted: false,\n      createdAt: new Date(2020, 8, 11),\n      updatedAt: new Date(2020, 8, 11)\n    }],\n    createdAt: new Date(2020, 8, 1),\n    updatedAt: new Date(2020, 8, 11)\n  }, {\n    id: 'notebook-1',\n    title: 'Personal',\n    notes: [{\n      id: Object(uuid__WEBPACK_IMPORTED_MODULE_6__[\"v4\"])(),\n      noteTitle: 'Pay Utilities',\n      note: '',\n      isDeleted: false,\n      createdAt: new Date(2020, 8, 11),\n      updatedAt: new Date(2020, 8, 11)\n    }],\n    createdAt: new Date(2020, 8, 1),\n    updatedAt: new Date(2020, 8, 11)\n  }]),\n      notebooks = _useState4[0],\n      setNotebooks = _useState4[1];\n\n  var addNewNote = function addNewNote(title, note) {\n    console.log('aaa');\n    handleSnackbar(\"A note is created\", 'success');\n  };\n\n  var handleClose = function handleClose(event, reason) {\n    if (reason === 'clickaway') {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  var handleSnackbar = function handleSnackbar(message, severity) {\n    setMessage(message);\n    setSeverity(severity);\n    setOpen(true);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }), __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    setOpen: setOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }), __jsx(_note__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    addNewNote: addNewNote,\n    open: open,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    open: open,\n    anchorOrigin: {\n      vertical: 'top',\n      horizontal: 'center'\n    },\n    autoHideDuration: 3000,\n    onClose: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, __jsx(Alert, {\n    onClose: handleClose,\n    severity: severity,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 11\n    }\n  }, message))));\n}\n\n_s(Main, \"6+CnCc289WumuCGTcNTmLULWJKk=\", false, function () {\n  return [useStyles];\n});\n\n_c2 = Main;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Alert\");\n$RefreshReg$(_c2, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluLnRzeD84NzVjIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiQWxlcnQiLCJwcm9wcyIsIk1haW4iLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2V2ZXJpdHkiLCJzZXRTZXZlcml0eSIsImlkIiwidGl0bGUiLCJub3RlcyIsInV1aWR2NCIsIm5vdGVUaXRsZSIsIm5vdGUiLCJpc0RlbGV0ZWQiLCJjcmVhdGVkQXQiLCJEYXRlIiwidXBkYXRlZEF0Iiwibm90ZWJvb2tzIiwic2V0Tm90ZWJvb2tzIiwiYWRkTmV3Tm90ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTbmFja2JhciIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFO0FBREw7QUFESyxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCOztBQVFBLFNBQVNDLEtBQVQsQ0FBZUMsS0FBZixFQUFrQztBQUNoQyxTQUFPLE1BQUMsOERBQUQ7QUFBVSxhQUFTLEVBQUUsQ0FBckI7QUFBd0IsV0FBTyxFQUFDO0FBQWhDLEtBQTZDQSxLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7QUFDRDs7S0FGUUQsSztBQUlNLFNBQVNFLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsTUFBTUMsT0FBTyxHQUFHVCxTQUFTLEVBQXpCOztBQUQ2QixrQkFFTFUsc0RBQVEsQ0FBQyxJQUFELENBRkg7QUFBQSxNQUV0QkMsSUFGc0I7QUFBQSxNQUVoQkMsT0FGZ0I7O0FBQUEsbUJBR0NGLHNEQUFRLENBQUMsRUFBRCxDQUhUO0FBQUEsTUFHdEJHLE9BSHNCO0FBQUEsTUFHYkMsVUFIYTs7QUFBQSxtQkFJR0osc0RBQVEsQ0FBQyxTQUFELENBSlg7QUFBQSxNQUl0QkssUUFKc0I7QUFBQSxNQUlaQyxXQUpZOztBQUFBLG1CQUtLTixzREFBUSxDQUFDLENBQ3pDO0FBQ0VPLE1BQUUsRUFBRSxZQUROO0FBRUVDLFNBQUssRUFBRSxNQUZUO0FBR0VDLFNBQUssRUFBRSxDQUNMO0FBQ0VGLFFBQUUsRUFBRUcsK0NBQU0sRUFEWjtBQUVFQyxlQUFTLEVBQUUsZ0JBRmI7QUFHRUMsVUFBSSxFQUFFLEVBSFI7QUFJRUMsZUFBUyxFQUFFLEtBSmI7QUFLRUMsZUFBUyxFQUFFLElBQUlDLElBQUosQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixFQUFsQixDQUxiO0FBTUVDLGVBQVMsRUFBRSxJQUFJRCxJQUFKLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsRUFBbEI7QUFOYixLQURLLEVBU0w7QUFDRVIsUUFBRSxFQUFFRywrQ0FBTSxFQURaO0FBRUVDLGVBQVMsRUFBRSxTQUZiO0FBR0VDLFVBQUksRUFBRSxFQUhSO0FBSUVDLGVBQVMsRUFBRSxLQUpiO0FBS0VDLGVBQVMsRUFBRSxJQUFJQyxJQUFKLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsRUFBbEIsQ0FMYjtBQU1FQyxlQUFTLEVBQUUsSUFBSUQsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCO0FBTmIsS0FUSyxDQUhUO0FBcUJFRCxhQUFTLEVBQUUsSUFBSUMsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLENBQWxCLENBckJiO0FBc0JFQyxhQUFTLEVBQUUsSUFBSUQsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCO0FBdEJiLEdBRHlDLEVBeUJ6QztBQUNFUixNQUFFLEVBQUUsWUFETjtBQUVFQyxTQUFLLEVBQUUsVUFGVDtBQUdFQyxTQUFLLEVBQUUsQ0FDTDtBQUNFRixRQUFFLEVBQUVHLCtDQUFNLEVBRFo7QUFFRUMsZUFBUyxFQUFFLGVBRmI7QUFHRUMsVUFBSSxFQUFFLEVBSFI7QUFJRUMsZUFBUyxFQUFFLEtBSmI7QUFLRUMsZUFBUyxFQUFFLElBQUlDLElBQUosQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixFQUFsQixDQUxiO0FBTUVDLGVBQVMsRUFBRSxJQUFJRCxJQUFKLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsRUFBbEI7QUFOYixLQURLLENBSFQ7QUFhRUQsYUFBUyxFQUFFLElBQUlDLElBQUosQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixDQUFsQixDQWJiO0FBY0VDLGFBQVMsRUFBRSxJQUFJRCxJQUFKLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsRUFBbEI7QUFkYixHQXpCeUMsQ0FBRCxDQUxiO0FBQUEsTUFLdEJFLFNBTHNCO0FBQUEsTUFLWEMsWUFMVzs7QUFnRDdCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNYLEtBQUQsRUFBZ0JJLElBQWhCLEVBQWlDO0FBQ2xEUSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQ0FDLGtCQUFjLHNCQUFzQixTQUF0QixDQUFkO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQStCQyxNQUEvQixFQUFtRDtBQUNyRSxRQUFJQSxNQUFNLEtBQUssV0FBZixFQUE0QjtBQUMxQjtBQUNEOztBQUVEdkIsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNELEdBTkQ7O0FBUUEsTUFBTW9CLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ25CLE9BQUQsRUFBa0JFLFFBQWxCLEVBQW9DO0FBQ3pERCxjQUFVLENBQUNELE9BQUQsQ0FBVjtBQUNBRyxlQUFXLENBQUNELFFBQUQsQ0FBWDtBQUNBSCxXQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0QsR0FKRDs7QUFNQSxTQUNFLG1FQUNFO0FBQUssYUFBUyxFQUFFSCxPQUFPLENBQUNMLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsZ0RBQUQ7QUFBUyxXQUFPLEVBQUVRLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsNkNBQUQ7QUFBTSxjQUFVLEVBQUVpQixVQUFsQjtBQUE4QixRQUFJLEVBQUVsQixJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRSxNQUFDLGtFQUFEO0FBQ0UsUUFBSSxFQUFFQSxJQURSO0FBRUUsZ0JBQVksRUFBRTtBQUFFeUIsY0FBUSxFQUFFLEtBQVo7QUFBbUJDLGdCQUFVLEVBQUU7QUFBL0IsS0FGaEI7QUFHRSxvQkFBZ0IsRUFBRSxJQUhwQjtBQUlFLFdBQU8sRUFBRUosV0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxLQUFEO0FBQU8sV0FBTyxFQUFFQSxXQUFoQjtBQUE2QixZQUFRLEVBQUVsQixRQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLE9BREgsQ0FORixDQUpGLENBREYsQ0FERjtBQW1CRDs7R0F0RnVCTCxJO1VBQ05SLFM7OztNQURNUSxJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tYWluLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4vZGlzY2xhaW1lcic7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXInO1xuaW1wb3J0IE5vdGUgZnJvbSAnLi9ub3RlJztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcbmltcG9ydCBNdWlBbGVydCwgeyBBbGVydFByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgfSxcbiAgfSlcbik7XG5cbmZ1bmN0aW9uIEFsZXJ0KHByb3BzOiBBbGVydFByb3BzKSB7XG4gIHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSB2YXJpYW50PVwiZmlsbGVkXCIgey4uLnByb3BzfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2V2ZXJpdHksIHNldFNldmVyaXR5XSA9IHVzZVN0YXRlKCdzdWNjZXNzJyk7XG4gIGNvbnN0IFtub3RlYm9va3MsIHNldE5vdGVib29rc10gPSB1c2VTdGF0ZShbXG4gICAge1xuICAgICAgaWQ6ICdub3RlYm9vay0wJyxcbiAgICAgIHRpdGxlOiAnV29yaycsXG4gICAgICBub3RlczogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICAgIG5vdGVUaXRsZTogJ1RlY2ggaW50ZXJ2aWV3JyxcbiAgICAgICAgICBub3RlOiAnJyxcbiAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTApLFxuICAgICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTApLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICAgIG5vdGVUaXRsZTogJ01lZXQgdXAnLFxuICAgICAgICAgIG5vdGU6ICcnLFxuICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXG4gICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxMSksXG4gICAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxMSksXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxKSxcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTEpLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdub3RlYm9vay0xJyxcbiAgICAgIHRpdGxlOiAnUGVyc29uYWwnLFxuICAgICAgbm90ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgICBub3RlVGl0bGU6ICdQYXkgVXRpbGl0aWVzJyxcbiAgICAgICAgICBub3RlOiAnJyxcbiAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTEpLFxuICAgICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTEpLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMSksXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDExKSxcbiAgICB9LFxuICBdIGFzIGFueSk7XG5cbiAgY29uc3QgYWRkTmV3Tm90ZSA9ICh0aXRsZTogc3RyaW5nLCBub3RlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zb2xlLmxvZygnYWFhJyk7XG4gICAgaGFuZGxlU25hY2tiYXIoYEEgbm90ZSBpcyBjcmVhdGVkYCwgJ3N1Y2Nlc3MnKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudD86IFJlYWN0LlN5bnRoZXRpY0V2ZW50LCByZWFzb24/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNuYWNrYmFyID0gKG1lc3NhZ2U6IHN0cmluZywgc2V2ZXJpdHk6IGFueSkgPT4ge1xuICAgIHNldE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgc2V0U2V2ZXJpdHkoc2V2ZXJpdHkpO1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8U2lkZWJhciBzZXRPcGVuPXtzZXRPcGVufSAvPlxuICAgICAgICA8Tm90ZSBhZGROZXdOb3RlPXthZGROZXdOb3RlfSBvcGVuPXtvcGVufSAvPlxuICAgICAgICA8U25hY2tiYXJcbiAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdjZW50ZXInIH19XG4gICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MzAwMH1cbiAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gc2V2ZXJpdHk9e3NldmVyaXR5fT5cbiAgICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgIDwvU25hY2tiYXI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/main.tsx\n");

/***/ })

})
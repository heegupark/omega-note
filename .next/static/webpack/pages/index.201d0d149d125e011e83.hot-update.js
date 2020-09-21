webpackHotUpdate_N_E("pages/index",{

/***/ "./components/main.tsx":
/*!*****************************!*\
  !*** ./components/main.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ \"./components/sidebar.tsx\");\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note */ \"./components/note.tsx\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Snackbar */ \"./node_modules/@material-ui/core/esm/Snackbar/index.js\");\n/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/lab/Alert */ \"./node_modules/@material-ui/lab/esm/Alert/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/main.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n // import Disclaimer from './disclaimer';\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"createStyles\"])({\n    root: {\n      display: 'flex'\n    }\n  });\n});\n\nfunction Alert(props) {\n  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_8__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    elevation: 6,\n    variant: \"filled\"\n  }, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 10\n    }\n  }));\n}\n\n_c = Alert;\nfunction Main() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      message = _useState2[0],\n      setMessage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('success'),\n      severity = _useState3[0],\n      setSeverity = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('notebook-0'),\n      notebook = _useState4[0],\n      setNotebook = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    notebooks: {\n      'notebook-0': {\n        id: 'notebook-0',\n        title: 'Work',\n        notes: [{\n          id: Object(uuid__WEBPACK_IMPORTED_MODULE_6__[\"v4\"])(),\n          noteTitle: 'Tech interview',\n          note: '',\n          isDeleted: false,\n          createdAt: new Date(2020, 8, 10),\n          updatedAt: new Date(2020, 8, 10)\n        }, {\n          id: Object(uuid__WEBPACK_IMPORTED_MODULE_6__[\"v4\"])(),\n          noteTitle: 'Meet up',\n          note: '',\n          isDeleted: false,\n          createdAt: new Date(2020, 8, 11),\n          updatedAt: new Date(2020, 8, 11)\n        }],\n        createdAt: new Date(2020, 8, 1),\n        updatedAt: new Date(2020, 8, 11)\n      },\n      'notebook-1': {\n        id: 'notebook-1',\n        title: 'Personal',\n        notes: [{\n          id: Object(uuid__WEBPACK_IMPORTED_MODULE_6__[\"v4\"])(),\n          noteTitle: 'Pay Utilities',\n          note: '',\n          isDeleted: false,\n          createdAt: new Date(2020, 8, 11),\n          updatedAt: new Date(2020, 8, 11)\n        }],\n        createdAt: new Date(2020, 8, 1),\n        updatedAt: new Date(2020, 8, 11)\n      }\n    },\n    notebookOrder: ['notebook-0', 'notebook-1'],\n    trash: {\n      id: 'trash',\n      title: 'Trash',\n      notes: [],\n      createdAt: new Date(),\n      updatedAt: new Date()\n    }\n  }),\n      state = _useState5[0],\n      setState = _useState5[1];\n\n  var addNewNote = function addNewNote(title, note) {\n    var newNote = {\n      id: Object(uuid__WEBPACK_IMPORTED_MODULE_6__[\"v4\"])(),\n      noteTitle: 'Untitled',\n      note: '',\n      isDeleted: false,\n      createdAt: new Date(),\n      updatedAt: new Date()\n    };\n    state.notebooks[notebook].notes.unshift(newNote);\n    handleSnackbar(\"A note is created\", 'info');\n  };\n\n  var handleClose = function handleClose(event, reason) {\n    if (reason === 'clickaway') {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  var handleSnackbar = function handleSnackbar(message, severity) {\n    setMessage(message);\n    setSeverity(severity);\n    setOpen(true);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 9\n    }\n  }), __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    notebooks: state.notebooks,\n    notebookOrder: state.notebookOrder,\n    addNewNote: addNewNote,\n    setOpen: setOpen,\n    setNotebook: setNotebook,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }\n  }), __jsx(_note__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    notebooks: state.notebooks,\n    notebookOrder: state.notebookOrder,\n    notebook: notebook,\n    addNewNote: addNewNote,\n    open: open,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    open: open,\n    anchorOrigin: {\n      vertical: 'top',\n      horizontal: 'center'\n    },\n    autoHideDuration: 1000,\n    onClose: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 9\n    }\n  }, __jsx(Alert, {\n    onClose: handleClose,\n    severity: severity,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 11\n    }\n  }, message))));\n}\n\n_s(Main, \"w3KRM1v/AARto0COr4H3lPwc4QU=\", false, function () {\n  return [useStyles];\n});\n\n_c2 = Main;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Alert\");\n$RefreshReg$(_c2, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluLnRzeD84NzVjIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiQWxlcnQiLCJwcm9wcyIsIk1haW4iLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2V2ZXJpdHkiLCJzZXRTZXZlcml0eSIsIm5vdGVib29rIiwic2V0Tm90ZWJvb2siLCJub3RlYm9va3MiLCJpZCIsInRpdGxlIiwibm90ZXMiLCJ1dWlkdjQiLCJub3RlVGl0bGUiLCJub3RlIiwiaXNEZWxldGVkIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInVwZGF0ZWRBdCIsIm5vdGVib29rT3JkZXIiLCJ0cmFzaCIsInN0YXRlIiwic2V0U3RhdGUiLCJhZGROZXdOb3RlIiwibmV3Tm90ZSIsInVuc2hpZnQiLCJoYW5kbGVTbmFja2JhciIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFO0FBREw7QUFESyxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCOztBQVFBLFNBQVNDLEtBQVQsQ0FBZUMsS0FBZixFQUFrQztBQUNoQyxTQUFPLE1BQUMsOERBQUQ7QUFBVSxhQUFTLEVBQUUsQ0FBckI7QUFBd0IsV0FBTyxFQUFDO0FBQWhDLEtBQTZDQSxLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7QUFDRDs7S0FGUUQs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LFdBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBU0UsTUFBQyw2Q0FBRDtBQUNFLGFBQVMsRUFBRWMsS0FBSyxDQUFDYixTQURuQjtBQUVFLGlCQUFhLEVBQUVhLEtBQUssQ0FBQ0YsYUFGdkI7QUFHRSxZQUFRLEVBQUViLFFBSFo7QUFJRSxjQUFVLEVBQUVpQixVQUpkO0FBS0UsUUFBSSxFQUFFdkIsSUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFnQkUsTUFBQyxrRUFBRDtBQUNFLFFBQUksRUFBRUEsSUFEUjtBQUVFLGdCQUFZLEVBQUU7QUFBRThCLGNBQVEsRUFBRSxLQUFaO0FBQW1CQyxnQkFBVSxFQUFFO0FBQS9CLEtBRmhCO0FBR0Usb0JBQWdCLEVBQUUsSUFIcEI7QUFJRSxXQUFPLEVBQUVKLFdBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsS0FBRDtBQUFPLFdBQU8sRUFBRUEsV0FBaEI7QUFBNkIsWUFBUSxFQUFFdkIsUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixPQURILENBTkYsQ0FoQkYsQ0FERixDQURGO0FBK0JEOztHQXJIdUJMLEk7VUFDTlIsUzs7O01BRE1RLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi9kaXNjbGFpbWVyJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcic7XG5pbXBvcnQgTm90ZSBmcm9tICcuL25vdGUnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xuaW1wb3J0IE11aUFsZXJ0LCB7IEFsZXJ0UHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB9LFxuICB9KVxuKTtcblxuZnVuY3Rpb24gQWxlcnQocHJvcHM6IEFsZXJ0UHJvcHMpIHtcbiAgcmV0dXJuIDxNdWlBbGVydCBlbGV2YXRpb249ezZ9IHZhcmlhbnQ9XCJmaWxsZWRcIiB7Li4ucHJvcHN9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycgYXMgYW55KTtcbiAgY29uc3QgW3NldmVyaXR5LCBzZXRTZXZlcml0eV0gPSB1c2VTdGF0ZSgnc3VjY2VzcycgYXMgYW55KTtcbiAgY29uc3QgW25vdGVib29rLCBzZXROb3RlYm9va10gPSB1c2VTdGF0ZSgnbm90ZWJvb2stMCcpO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBub3RlYm9va3M6IHtcbiAgICAgICdub3RlYm9vay0wJzoge1xuICAgICAgICBpZDogJ25vdGVib29rLTAnLFxuICAgICAgICB0aXRsZTogJ1dvcmsnLFxuICAgICAgICBub3RlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgICAgIG5vdGVUaXRsZTogJ1RlY2ggaW50ZXJ2aWV3JyxcbiAgICAgICAgICAgIG5vdGU6ICcnLFxuICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTApLFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxMCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgICAgICBub3RlVGl0bGU6ICdNZWV0IHVwJyxcbiAgICAgICAgICAgIG5vdGU6ICcnLFxuICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTEpLFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxMSksXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxKSxcbiAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxMSksXG4gICAgICB9LFxuICAgICAgJ25vdGVib29rLTEnOiB7XG4gICAgICAgIGlkOiAnbm90ZWJvb2stMScsXG4gICAgICAgIHRpdGxlOiAnUGVyc29uYWwnLFxuICAgICAgICBub3RlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgICAgIG5vdGVUaXRsZTogJ1BheSBVdGlsaXRpZXMnLFxuICAgICAgICAgICAgbm90ZTogJycsXG4gICAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxMSksXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDExKSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDEpLFxuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDExKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBub3RlYm9va09yZGVyOiBbJ25vdGVib29rLTAnLCAnbm90ZWJvb2stMSddLFxuICAgIHRyYXNoOiB7XG4gICAgICBpZDogJ3RyYXNoJyxcbiAgICAgIHRpdGxlOiAnVHJhc2gnLFxuICAgICAgbm90ZXM6IFtdLFxuICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgIH0sXG4gIH0gYXMgYW55KTtcblxuICBjb25zdCBhZGROZXdOb3RlID0gKHRpdGxlOiBzdHJpbmcsIG5vdGU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG5ld05vdGUgPSB7XG4gICAgICBpZDogdXVpZHY0KCksXG4gICAgICBub3RlVGl0bGU6ICdVbnRpdGxlZCcsXG4gICAgICBub3RlOiAnJyxcbiAgICAgIGlzRGVsZXRlZDogZmFsc2UsXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgfTtcbiAgICBzdGF0ZS5ub3RlYm9va3Nbbm90ZWJvb2tdLm5vdGVzLnVuc2hpZnQobmV3Tm90ZSk7XG4gICAgaGFuZGxlU25hY2tiYXIoYEEgbm90ZSBpcyBjcmVhdGVkYCwgJ2luZm8nKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudD86IFJlYWN0LlN5bnRoZXRpY0V2ZW50LCByZWFzb24/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNuYWNrYmFyID0gKG1lc3NhZ2U6IHN0cmluZywgc2V2ZXJpdHk6IGFueSkgPT4ge1xuICAgIHNldE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgc2V0U2V2ZXJpdHkoc2V2ZXJpdHkpO1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8U2lkZWJhclxuICAgICAgICAgIG5vdGVib29rcz17c3RhdGUubm90ZWJvb2tzfVxuICAgICAgICAgIG5vdGVib29rT3JkZXI9e3N0YXRlLm5vdGVib29rT3JkZXJ9XG4gICAgICAgICAgYWRkTmV3Tm90ZT17YWRkTmV3Tm90ZX1cbiAgICAgICAgICBzZXRPcGVuPXtzZXRPcGVufVxuICAgICAgICAgIHNldE5vdGVib29rPXtzZXROb3RlYm9va31cbiAgICAgICAgLz5cbiAgICAgICAgPE5vdGVcbiAgICAgICAgICBub3RlYm9va3M9e3N0YXRlLm5vdGVib29rc31cbiAgICAgICAgICBub3RlYm9va09yZGVyPXtzdGF0ZS5ub3RlYm9va09yZGVyfVxuICAgICAgICAgIG5vdGVib29rPXtub3RlYm9va31cbiAgICAgICAgICBhZGROZXdOb3RlPXthZGROZXdOb3RlfVxuICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIC8+XG4gICAgICAgIDxTbmFja2JhclxuICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ2NlbnRlcicgfX1cbiAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXsxMDAwfVxuICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICA+XG4gICAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBzZXZlcml0eT17c2V2ZXJpdHl9PlxuICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgPC9TbmFja2Jhcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/main.tsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./components/main.tsx":
/*!*****************************!*\
  !*** ./components/main.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ \"./components/sidebar.tsx\");\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note */ \"./components/note.tsx\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Snackbar */ \"./node_modules/@material-ui/core/esm/Snackbar/index.js\");\n/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/lab/Alert */ \"./node_modules/@material-ui/lab/esm/Alert/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/main.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n // import Disclaimer from './disclaimer';\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"createStyles\"])({\n    root: {\n      display: 'flex'\n    }\n  });\n});\n\nfunction Alert(props) {\n  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_8__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    elevation: 6,\n    variant: \"filled\"\n  }, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 10\n    }\n  }));\n}\n\n_c = Alert;\nfunction Main() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      message = _useState2[0],\n      setMessage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('success'),\n      severity = _useState3[0],\n      setSeverity = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('notebook-0'),\n      notebook = _useState4[0],\n      setNotebook = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    notebooks: {\n      'notebook-0': {\n        id: 'notebook-0',\n        title: 'Work',\n        notes: [{\n          id: Object(uuid__WEBPACK_IMPORTED_MODULE_6__[\"v4\"])(),\n          noteTitle: 'Tech interview',\n          note: '',\n          isDeleted: false,\n          createdAt: new Date(2020, 8, 10),\n          updatedAt: new Date(2020, 8, 10)\n        }, {\n          id: Object(uuid__WEBPACK_IMPORTED_MODULE_6__[\"v4\"])(),\n          noteTitle: 'Meet up',\n          note: '',\n          isDeleted: false,\n          createdAt: new Date(2020, 8, 11),\n          updatedAt: new Date(2020, 8, 11)\n        }],\n        createdAt: new Date(2020, 8, 1),\n        updatedAt: new Date(2020, 8, 11)\n      },\n      'notebook-1': {\n        id: 'notebook-1',\n        title: 'Personal',\n        notes: [{\n          id: Object(uuid__WEBPACK_IMPORTED_MODULE_6__[\"v4\"])(),\n          noteTitle: 'Pay Utilities',\n          note: '',\n          isDeleted: false,\n          createdAt: new Date(2020, 8, 11),\n          updatedAt: new Date(2020, 8, 11)\n        }],\n        createdAt: new Date(2020, 8, 1),\n        updatedAt: new Date(2020, 8, 11)\n      }\n    },\n    notebookOrder: ['notebook-0', 'notebook-1'],\n    trash: {\n      id: 'trash',\n      title: 'Trash',\n      notes: [],\n      createdAt: new Date(),\n      updatedAt: new Date()\n    }\n  }),\n      notebooks = _useState5[0],\n      setNotebooks = _useState5[1];\n\n  var addNewNote = function addNewNote(title, note) {\n    console.log('aaa');\n    handleSnackbar(\"A note is created\", 'info');\n  };\n\n  var handleClose = function handleClose(event, reason) {\n    if (reason === 'clickaway') {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  var handleSnackbar = function handleSnackbar(message, severity) {\n    setMessage(message);\n    setSeverity(severity);\n    setOpen(true);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 9\n    }\n  }), __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    notebooks: notebooks,\n    addNewNote: addNewNote,\n    setOpen: setOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }\n  }), __jsx(_note__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    notebooks: notebooks.notebooks,\n    notebook: notebook,\n    addNewNote: addNewNote,\n    open: open,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    open: open,\n    anchorOrigin: {\n      vertical: 'top',\n      horizontal: 'center'\n    },\n    autoHideDuration: 3000,\n    onClose: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  }, __jsx(Alert, {\n    onClose: handleClose,\n    severity: severity,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 11\n    }\n  }, message))));\n}\n\n_s(Main, \"6vKp2FJmClzx4tEp7nOLEFix1BM=\", false, function () {\n  return [useStyles];\n});\n\n_c2 = Main;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Alert\");\n$RefreshReg$(_c2, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluLnRzeD84NzVjIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiQWxlcnQiLCJwcm9wcyIsIk1haW4iLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2V2ZXJpdHkiLCJzZXRTZXZlcml0eSIsIm5vdGVib29rIiwic2V0Tm90ZWJvb2siLCJub3RlYm9va3MiLCJpZCIsInRpdGxlIiwibm90ZXMiLCJ1dWlkdjQiLCJub3RlVGl0bGUiLCJub3RlIiwiaXNEZWxldGVkIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInVwZGF0ZWRBdCIsIm5vdGVib29rT3JkZXIiLCJ0cmFzaCIsInNldE5vdGVib29rcyIsImFkZE5ld05vdGUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU25hY2tiYXIiLCJoYW5kbGVDbG9zZSIsImV2ZW50IiwicmVhc29uIiwidmVydGljYWwiLCJob3Jpem9udGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRTtBQURMO0FBREssR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1Qjs7QUFRQSxTQUFTQyxLQUFULENBQWVDLEtBQWYsRUFBa0M7QUFDaEMsU0FBTyxNQUFDLDhEQUFEO0FBQVUsYUFBUyxFQUFFLENBQXJCO0FBQXdCLFdBQU8sRUFBQztBQUFoQyxLQUE2Q0EsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFQO0FBQ0Q7O0tBRlFELEs7QUFJTSxT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QUZoQjtBQUdFLG9CQUFnQixFQUFFLElBSHBCO0FBSUUsV0FBTyxFQUFFSixXQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUVBLFdBQWhCO0FBQTZCLFlBQVEsRUFBRXRCLFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsT0FESCxDQU5GLENBYkYsQ0FERixDQURGO0FBNEJEOztHQTFHdUJMLEk7VUFDTlIsUzs7O01BRE1RLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi9kaXNjbGFpbWVyJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcic7XG5pbXBvcnQgTm90ZSBmcm9tICcuL25vdGUnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xuaW1wb3J0IE11aUFsZXJ0LCB7IEFsZXJ0UHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB9LFxuICB9KVxuKTtcblxuZnVuY3Rpb24gQWxlcnQocHJvcHM6IEFsZXJ0UHJvcHMpIHtcbiAgcmV0dXJuIDxNdWlBbGVydCBlbGV2YXRpb249ezZ9IHZhcmlhbnQ9XCJmaWxsZWRcIiB7Li4ucHJvcHN9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycgYXMgYW55KTtcbiAgY29uc3QgW3NldmVyaXR5LCBzZXRTZXZlcml0eV0gPSB1c2VTdGF0ZSgnc3VjY2VzcycgYXMgYW55KTtcbiAgY29uc3QgW25vdGVib29rLCBzZXROb3RlYm9va10gPSB1c2VTdGF0ZSgnbm90ZWJvb2stMCcpO1xuICBjb25zdCBbbm90ZWJvb2tzLCBzZXROb3RlYm9va3NdID0gdXNlU3RhdGUoe1xuICAgIG5vdGVib29rczoge1xuICAgICAgJ25vdGVib29rLTAnOiB7XG4gICAgICAgIGlkOiAnbm90ZWJvb2stMCcsXG4gICAgICAgIHRpdGxlOiAnV29yaycsXG4gICAgICAgIG5vdGVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICAgICAgbm90ZVRpdGxlOiAnVGVjaCBpbnRlcnZpZXcnLFxuICAgICAgICAgICAgbm90ZTogJycsXG4gICAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxMCksXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDEwKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgICAgIG5vdGVUaXRsZTogJ01lZXQgdXAnLFxuICAgICAgICAgICAgbm90ZTogJycsXG4gICAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxMSksXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDExKSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDEpLFxuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDExKSxcbiAgICAgIH0sXG4gICAgICAnbm90ZWJvb2stMSc6IHtcbiAgICAgICAgaWQ6ICdub3RlYm9vay0xJyxcbiAgICAgICAgdGl0bGU6ICdQZXJzb25hbCcsXG4gICAgICAgIG5vdGVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICAgICAgbm90ZVRpdGxlOiAnUGF5IFV0aWxpdGllcycsXG4gICAgICAgICAgICBub3RlOiAnJyxcbiAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDExKSxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTEpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMSksXG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTEpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG5vdGVib29rT3JkZXI6IFsnbm90ZWJvb2stMCcsICdub3RlYm9vay0xJ10sXG4gICAgdHJhc2g6IHtcbiAgICAgIGlkOiAndHJhc2gnLFxuICAgICAgdGl0bGU6ICdUcmFzaCcsXG4gICAgICBub3RlczogW10sXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgfSxcbiAgfSBhcyBhbnkpO1xuXG4gIGNvbnN0IGFkZE5ld05vdGUgPSAodGl0bGU6IHN0cmluZywgbm90ZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2FhYScpO1xuICAgIGhhbmRsZVNuYWNrYmFyKGBBIG5vdGUgaXMgY3JlYXRlZGAsICdpbmZvJyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQ/OiBSZWFjdC5TeW50aGV0aWNFdmVudCwgcmVhc29uPzogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHJlYXNvbiA9PT0gJ2NsaWNrYXdheScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTbmFja2JhciA9IChtZXNzYWdlOiBzdHJpbmcsIHNldmVyaXR5OiBhbnkpID0+IHtcbiAgICBzZXRNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIHNldFNldmVyaXR5KHNldmVyaXR5KTtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPFNpZGViYXJcbiAgICAgICAgICBub3RlYm9va3M9e25vdGVib29rc31cbiAgICAgICAgICBhZGROZXdOb3RlPXthZGROZXdOb3RlfVxuICAgICAgICAgIHNldE9wZW49e3NldE9wZW59XG4gICAgICAgIC8+XG4gICAgICAgIDxOb3RlXG4gICAgICAgICAgbm90ZWJvb2tzPXtub3RlYm9va3Mubm90ZWJvb2tzfVxuICAgICAgICAgIG5vdGVib29rPXtub3RlYm9va31cbiAgICAgICAgICBhZGROZXdOb3RlPXthZGROZXdOb3RlfVxuICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIC8+XG4gICAgICAgIDxTbmFja2JhclxuICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ2NlbnRlcicgfX1cbiAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXszMDAwfVxuICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICA+XG4gICAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBzZXZlcml0eT17c2V2ZXJpdHl9PlxuICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgPC9TbmFja2Jhcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/main.tsx\n");

/***/ })

})
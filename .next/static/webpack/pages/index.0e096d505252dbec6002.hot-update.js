webpackHotUpdate_N_E("pages/index",{

/***/ "./components/main.tsx":
/*!*****************************!*\
  !*** ./components/main.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ \"./components/sidebar.tsx\");\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note */ \"./components/note.tsx\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Snackbar */ \"./node_modules/@material-ui/core/esm/Snackbar/index.js\");\n/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/Alert */ \"./node_modules/@material-ui/lab/esm/Alert/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/main.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // import Disclaimer from './disclaimer';\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[\"createStyles\"])({\n    root: {\n      display: 'flex'\n    }\n  });\n});\n\nfunction Alert(props) {\n  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    elevation: 6,\n    variant: \"filled\"\n  }, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 10\n    }\n  }));\n}\n\n_c = Alert;\nfunction Main() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      message = _useState2[0],\n      setMessage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('success'),\n      severity = _useState3[0],\n      setSeverity = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('notebook-0'),\n      notebook = _useState4[0],\n      setNotebook = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      currentNote = _useState5[0],\n      setCurrentNote = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    notebooks: {\n      'notebook-0': {\n        id: 'notebook-0',\n        title: 'Work',\n        notes: [{\n          id: 'note-0',\n          noteTitle: 'Tech interview',\n          note: '<p>I need to prepare interview!</p>',\n          isDeleted: false,\n          createdAt: new Date(2020, 8, 10),\n          updatedAt: new Date(2020, 8, 10)\n        }, {\n          id: 'note-1',\n          noteTitle: 'Meet up',\n          note: '<p>Fun meet up!</p>',\n          isDeleted: false,\n          createdAt: new Date(2020, 8, 11),\n          updatedAt: new Date(2020, 8, 11)\n        }],\n        createdAt: new Date(2020, 8, 1),\n        updatedAt: new Date(2020, 8, 11)\n      },\n      'notebook-1': {\n        id: 'notebook-1',\n        title: 'Personal',\n        notes: [{\n          id: 'note-0',\n          noteTitle: 'Pay Utilities',\n          note: '<p>I need to pay gas today!</p>',\n          isDeleted: false,\n          createdAt: new Date(2020, 8, 11),\n          updatedAt: new Date(2020, 8, 11)\n        }],\n        createdAt: new Date(2020, 8, 1),\n        updatedAt: new Date(2020, 8, 11)\n      }\n    },\n    notebookOrder: ['notebook-0', 'notebook-1'],\n    trash: {\n      id: 'trash',\n      title: 'Trash',\n      notes: [],\n      createdAt: new Date(),\n      updatedAt: new Date()\n    }\n  }),\n      state = _useState6[0],\n      setState = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(state.notebooks[state.notebookOrder[0]].notes[0].id);\n    setCurrentNote(state.notebooks[notebook].notes[0].id);\n  }, []);\n\n  var addNewNote = function addNewNote(title, note) {\n    var newNote = {\n      id: Object(uuid__WEBPACK_IMPORTED_MODULE_7__[\"v4\"])(),\n      noteTitle: 'Untitled',\n      note: '',\n      dragging: false,\n      isDeleted: false,\n      createdAt: new Date(),\n      updatedAt: new Date()\n    };\n    state.notebooks[notebook].notes.unshift(newNote);\n    handleSnackbar(\"A note is created\", 'info');\n    setState(_objectSpread({}, state));\n  };\n\n  var handleClose = function handleClose(event, reason) {\n    if (reason === 'clickaway') {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  var handleSnackbar = function handleSnackbar(message, severity) {\n    setMessage(message);\n    setSeverity(severity);\n    setOpen(true);\n  };\n\n  var updateNote = function updateNote(notebookId, noteId, newNote) {\n    state.notebooks[notebookId].notes.map(function (note) {\n      if (note.id === noteId && (newNote.note && newNote.note !== note.note || newNote.noteTitle && newNote.noteTitle !== note.noteTitle)) {\n        note.noteTitle = newNote.noteTitle ? newNote.noteTitle : note.noteTitle;\n        note.note = newNote.note ? newNote.note : note.note;\n        note.isDeleted = newNote.isDeleted;\n        note.updatedAt = new Date();\n      }\n    });\n    setState(_objectSpread({}, state));\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 9\n    }\n  }), __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    notebooks: state.notebooks,\n    notebookOrder: state.notebookOrder,\n    notebook: notebook,\n    addNewNote: addNewNote,\n    setNotebook: setNotebook,\n    setCurrentNote: setCurrentNote,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 9\n    }\n  }), __jsx(_note__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    notebooks: state.notebooks,\n    notebookOrder: state.notebookOrder,\n    notebook: notebook,\n    addNewNote: addNewNote,\n    open: open,\n    updateNote: updateNote,\n    currentNote: currentNote,\n    setCurrentNote: setCurrentNote,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    open: open,\n    anchorOrigin: {\n      vertical: 'top',\n      horizontal: 'center'\n    },\n    autoHideDuration: 1000,\n    onClose: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 9\n    }\n  }, __jsx(Alert, {\n    onClose: handleClose,\n    severity: severity,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 11\n    }\n  }, message))));\n}\n\n_s(Main, \"DDmxe1hPf64cEAPm1+dl+U/nFO4=\", false, function () {\n  return [useStyles];\n});\n\n_c2 = Main;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Alert\");\n$RefreshReg$(_c2, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluLnRzeD84NzVjIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiQWxlcnQiLCJwcm9wcyIsIk1haW4iLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2V2ZXJpdHkiLCJzZXRTZXZlcml0eSIsIm5vdGVib29rIiwic2V0Tm90ZWJvb2siLCJjdXJyZW50Tm90ZSIsInNldEN1cnJlbnROb3RlIiwibm90ZWJvb2tzIiwiaWQiLCJ0aXRsZSIsIm5vdGVzIiwibm90ZVRpdGxlIiwibm90ZSIsImlzRGVsZXRlZCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJ1cGRhdGVkQXQiLCJub3RlYm9va09yZGVyIiwidHJhc2giLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImFkZE5ld05vdGUiLCJuZXdOb3RlIiwidXVpZHY0IiwiZHJhZ2dpbmciLCJ1bnNoaWZ0IiwiaGFuZGxlU25hY2tiYXIiLCJoYW5kbGVDbG9zZSIsImV2ZW50IiwicmVhc29uIiwidXBkYXRlTm90ZSIsIm5vdGVib29rSWQiLCJub3RlSWQiLCJtYXAiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRTtBQURMO0FBREssR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1Qjs7QUFRQSxTQUFTQyxLQUFULENBQWVDLEtBQWYsRUFBa0M7QUFDaEMsU0FBTyxN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LENBREY7QUFtQ0Q7O0dBcEp1QkwsSTtVQUNOUixTOzs7TUFETVEsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWFpbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4vZGlzY2xhaW1lcic7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXInO1xuaW1wb3J0IE5vdGUgZnJvbSAnLi9ub3RlJztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcbmltcG9ydCBNdWlBbGVydCwgeyBBbGVydFByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgfSxcbiAgfSlcbik7XG5cbmZ1bmN0aW9uIEFsZXJ0KHByb3BzOiBBbGVydFByb3BzKSB7XG4gIHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSB2YXJpYW50PVwiZmlsbGVkXCIgey4uLnByb3BzfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnIGFzIGFueSk7XG4gIGNvbnN0IFtzZXZlcml0eSwgc2V0U2V2ZXJpdHldID0gdXNlU3RhdGUoJ3N1Y2Nlc3MnIGFzIGFueSk7XG4gIGNvbnN0IFtub3RlYm9vaywgc2V0Tm90ZWJvb2tdID0gdXNlU3RhdGUoJ25vdGVib29rLTAnKTtcbiAgY29uc3QgW2N1cnJlbnROb3RlLCBzZXRDdXJyZW50Tm90ZV0gPSB1c2VTdGF0ZSgnJyBhcyBhbnkpO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBub3RlYm9va3M6IHtcbiAgICAgICdub3RlYm9vay0wJzoge1xuICAgICAgICBpZDogJ25vdGVib29rLTAnLFxuICAgICAgICB0aXRsZTogJ1dvcmsnLFxuICAgICAgICBub3RlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnbm90ZS0wJyxcbiAgICAgICAgICAgIG5vdGVUaXRsZTogJ1RlY2ggaW50ZXJ2aWV3JyxcbiAgICAgICAgICAgIG5vdGU6ICc8cD5JIG5lZWQgdG8gcHJlcGFyZSBpbnRlcnZpZXchPC9wPicsXG4gICAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxMCksXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDEwKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnbm90ZS0xJyxcbiAgICAgICAgICAgIG5vdGVUaXRsZTogJ01lZXQgdXAnLFxuICAgICAgICAgICAgbm90ZTogJzxwPkZ1biBtZWV0IHVwITwvcD4nLFxuICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTEpLFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxMSksXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxKSxcbiAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxMSksXG4gICAgICB9LFxuICAgICAgJ25vdGVib29rLTEnOiB7XG4gICAgICAgIGlkOiAnbm90ZWJvb2stMScsXG4gICAgICAgIHRpdGxlOiAnUGVyc29uYWwnLFxuICAgICAgICBub3RlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnbm90ZS0wJyxcbiAgICAgICAgICAgIG5vdGVUaXRsZTogJ1BheSBVdGlsaXRpZXMnLFxuICAgICAgICAgICAgbm90ZTogJzxwPkkgbmVlZCB0byBwYXkgZ2FzIHRvZGF5ITwvcD4nLFxuICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTEpLFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxMSksXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxKSxcbiAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxMSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgbm90ZWJvb2tPcmRlcjogWydub3RlYm9vay0wJywgJ25vdGVib29rLTEnXSxcbiAgICB0cmFzaDoge1xuICAgICAgaWQ6ICd0cmFzaCcsXG4gICAgICB0aXRsZTogJ1RyYXNoJyxcbiAgICAgIG5vdGVzOiBbXSxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICB9LFxuICB9IGFzIGFueSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZS5ub3RlYm9va3Nbc3RhdGUubm90ZWJvb2tPcmRlclswXV0ubm90ZXNbMF0uaWQpO1xuICAgIHNldEN1cnJlbnROb3RlKHN0YXRlLm5vdGVib29rc1tub3RlYm9va10ubm90ZXNbMF0uaWQpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgYWRkTmV3Tm90ZSA9ICh0aXRsZTogc3RyaW5nLCBub3RlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBuZXdOb3RlID0ge1xuICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgbm90ZVRpdGxlOiAnVW50aXRsZWQnLFxuICAgICAgbm90ZTogJycsXG4gICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxuICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgIH07XG4gICAgc3RhdGUubm90ZWJvb2tzW25vdGVib29rXS5ub3Rlcy51bnNoaWZ0KG5ld05vdGUpO1xuICAgIGhhbmRsZVNuYWNrYmFyKGBBIG5vdGUgaXMgY3JlYXRlZGAsICdpbmZvJyk7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgfSBhcyBhbnkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKGV2ZW50PzogUmVhY3QuU3ludGhldGljRXZlbnQsIHJlYXNvbj86IHN0cmluZykgPT4ge1xuICAgIGlmIChyZWFzb24gPT09ICdjbGlja2F3YXknKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNuYWNrYmFyID0gKG1lc3NhZ2U6IHN0cmluZywgc2V2ZXJpdHk6IGFueSkgPT4ge1xuICAgIHNldE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgc2V0U2V2ZXJpdHkoc2V2ZXJpdHkpO1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlTm90ZSA9IChub3RlYm9va0lkOiBzdHJpbmcsIG5vdGVJZDogc3RyaW5nLCBuZXdOb3RlOiBhbnkpID0+IHtcbiAgICBzdGF0ZS5ub3RlYm9va3Nbbm90ZWJvb2tJZF0ubm90ZXMubWFwKChub3RlOiBhbnkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgbm90ZS5pZCA9PT0gbm90ZUlkICYmXG4gICAgICAgICgobmV3Tm90ZS5ub3RlICYmIG5ld05vdGUubm90ZSAhPT0gbm90ZS5ub3RlKSB8fFxuICAgICAgICAgIChuZXdOb3RlLm5vdGVUaXRsZSAmJiBuZXdOb3RlLm5vdGVUaXRsZSAhPT0gbm90ZS5ub3RlVGl0bGUpKVxuICAgICAgKSB7XG4gICAgICAgIG5vdGUubm90ZVRpdGxlID0gbmV3Tm90ZS5ub3RlVGl0bGUgPyBuZXdOb3RlLm5vdGVUaXRsZSA6IG5vdGUubm90ZVRpdGxlO1xuICAgICAgICBub3RlLm5vdGUgPSBuZXdOb3RlLm5vdGUgPyBuZXdOb3RlLm5vdGUgOiBub3RlLm5vdGU7XG4gICAgICAgIG5vdGUuaXNEZWxldGVkID0gbmV3Tm90ZS5pc0RlbGV0ZWQ7XG4gICAgICAgIG5vdGUudXBkYXRlZEF0ID0gbmV3IERhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICB9IGFzIGFueSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8U2lkZWJhclxuICAgICAgICAgIG5vdGVib29rcz17c3RhdGUubm90ZWJvb2tzfVxuICAgICAgICAgIG5vdGVib29rT3JkZXI9e3N0YXRlLm5vdGVib29rT3JkZXJ9XG4gICAgICAgICAgbm90ZWJvb2s9e25vdGVib29rfVxuICAgICAgICAgIGFkZE5ld05vdGU9e2FkZE5ld05vdGV9XG4gICAgICAgICAgc2V0Tm90ZWJvb2s9e3NldE5vdGVib29rfVxuICAgICAgICAgIHNldEN1cnJlbnROb3RlPXtzZXRDdXJyZW50Tm90ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPE5vdGVcbiAgICAgICAgICBub3RlYm9va3M9e3N0YXRlLm5vdGVib29rc31cbiAgICAgICAgICBub3RlYm9va09yZGVyPXtzdGF0ZS5ub3RlYm9va09yZGVyfVxuICAgICAgICAgIG5vdGVib29rPXtub3RlYm9va31cbiAgICAgICAgICBhZGROZXdOb3RlPXthZGROZXdOb3RlfVxuICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgdXBkYXRlTm90ZT17dXBkYXRlTm90ZX1cbiAgICAgICAgICBjdXJyZW50Tm90ZT17Y3VycmVudE5vdGV9XG4gICAgICAgICAgc2V0Q3VycmVudE5vdGU9e3NldEN1cnJlbnROb3RlfVxuICAgICAgICAvPlxuICAgICAgICA8U25hY2tiYXJcbiAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdjZW50ZXInIH19XG4gICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MTAwMH1cbiAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gc2V2ZXJpdHk9e3NldmVyaXR5fT5cbiAgICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgIDwvU25hY2tiYXI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/main.tsx\n");

/***/ })

})
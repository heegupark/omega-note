webpackHotUpdate_N_E("pages/index",{

/***/ "./components/main.tsx":
/*!*****************************!*\
  !*** ./components/main.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ \"./components/sidebar.tsx\");\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note */ \"./components/note.tsx\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Snackbar */ \"./node_modules/@material-ui/core/esm/Snackbar/index.js\");\n/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/Alert */ \"./node_modules/@material-ui/lab/esm/Alert/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/main.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // import Disclaimer from './disclaimer';\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[\"createStyles\"])({\n    root: {\n      display: 'flex'\n    }\n  });\n});\n\nfunction Alert(props) {\n  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    elevation: 6,\n    variant: \"filled\"\n  }, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 10\n    }\n  }));\n}\n\n_c = Alert;\nfunction Main() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      message = _useState2[0],\n      setMessage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('success'),\n      severity = _useState3[0],\n      setSeverity = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('notebook-0'),\n      notebook = _useState4[0],\n      setNotebook = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('note-0'),\n      currentNote = _useState5[0],\n      setCurrentNote = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    notebooks: {\n      'notebook-0': {\n        id: 'notebook-0',\n        title: 'Work',\n        notes: [{\n          id: 'note-0',\n          noteTitle: 'Tech interview',\n          note: '<p>I need to prepare interview!</p>',\n          isDeleted: false,\n          createdAt: new Date(2020, 8, 10),\n          updatedAt: new Date(2020, 8, 10)\n        }, {\n          id: 'note-1',\n          noteTitle: 'Meet up',\n          note: '<p>Fun meet up!</p>',\n          isDeleted: false,\n          createdAt: new Date(2020, 8, 11),\n          updatedAt: new Date(2020, 8, 11)\n        }],\n        createdAt: new Date(2020, 8, 1),\n        updatedAt: new Date(2020, 8, 11)\n      },\n      'notebook-1': {\n        id: 'notebook-1',\n        title: 'Personal',\n        notes: [{\n          id: 'note-0',\n          noteTitle: 'Pay Utilities',\n          note: '<p>I need to pay gas today!</p>',\n          isDeleted: false,\n          createdAt: new Date(2020, 8, 11),\n          updatedAt: new Date(2020, 8, 11)\n        }],\n        createdAt: new Date(2020, 8, 1),\n        updatedAt: new Date(2020, 8, 11)\n      }\n    },\n    notebookOrder: ['notebook-0', 'notebook-1'],\n    trash: {\n      id: 'trash',\n      title: 'Trash',\n      notes: [],\n      createdAt: new Date(),\n      updatedAt: new Date()\n    }\n  }),\n      state = _useState6[0],\n      setState = _useState6[1];\n\n  var addNewNote = function addNewNote(title, note) {\n    var newNote = {\n      id: Object(uuid__WEBPACK_IMPORTED_MODULE_7__[\"v4\"])(),\n      noteTitle: 'Untitled',\n      note: '',\n      dragging: false,\n      isDeleted: false,\n      createdAt: new Date(),\n      updatedAt: new Date()\n    };\n    state.notebooks[notebook].notes.unshift(newNote);\n    handleSnackbar(\"A note is created\", 'info');\n    setState(_objectSpread({}, state));\n  };\n\n  var handleClose = function handleClose(event, reason) {\n    if (reason === 'clickaway') {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  var handleSnackbar = function handleSnackbar(message, severity) {\n    setMessage(message);\n    setSeverity(severity);\n    setOpen(true);\n  };\n\n  var updateNote = function updateNote(notebookId, noteId, newNote) {\n    console.log('updated');\n    state.notebooks[notebookId].notes.map(function (note) {\n      if (note.id === noteId) {\n        note.noteTitle = newNote.noteTitle ? newNote.noteTitle : note.noteTitle;\n        note.note = newNote.note ? newNote.note : note.note;\n        note.isDeleted = newNote.isDeleted;\n        note.updatedAt = new Date();\n      }\n    });\n    setState(_objectSpread({}, state));\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 9\n    }\n  }), __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    notebooks: state.notebooks,\n    notebookOrder: state.notebookOrder,\n    notebook: notebook,\n    addNewNote: addNewNote,\n    setOpen: setOpen,\n    setNotebook: setNotebook,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 9\n    }\n  }), __jsx(_note__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    notebooks: state.notebooks,\n    notebookOrder: state.notebookOrder,\n    notebook: notebook,\n    addNewNote: addNewNote,\n    open: open,\n    updateNote: updateNote,\n    currentNote: currentNote,\n    setCurrentNote: setCurrentNote,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    open: open,\n    anchorOrigin: {\n      vertical: 'top',\n      horizontal: 'center'\n    },\n    autoHideDuration: 1000,\n    onClose: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 9\n    }\n  }, __jsx(Alert, {\n    onClose: handleClose,\n    severity: severity,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 11\n    }\n  }, message))));\n}\n\n_s(Main, \"qqAnPP5W7sbVyqeWxtazdJwMBdY=\", false, function () {\n  return [useStyles];\n});\n\n_c2 = Main;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Alert\");\n$RefreshReg$(_c2, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluLnRzeD84NzVjIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiQWxlcnQiLCJwcm9wcyIsIk1haW4iLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2V2ZXJpdHkiLCJzZXRTZXZlcml0eSIsIm5vdGVib29rIiwic2V0Tm90ZWJvb2siLCJjdXJyZW50Tm90ZSIsInNldEN1cnJlbnROb3RlIiwibm90ZWJvb2tzIiwiaWQiLCJ0aXRsZSIsIm5vdGVzIiwibm90ZVRpdGxlIiwibm90ZSIsImlzRGVsZXRlZCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJ1cGRhdGVkQXQiLCJub3RlYm9va09yZGVyIiwidHJhc2giLCJzdGF0ZSIsInNldFN0YXRlIiwiYWRkTmV3Tm90ZSIsIm5ld05vdGUiLCJ1dWlkdjQiLCJkcmFnZ2luZyIsInVuc2hpZnQiLCJoYW5kbGVTbmFja2JhciIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJ1cGRhdGVOb3RlIiwibm90ZWJvb2tJZCIsIm5vdGVJZCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRTtBQURMO0FBREssR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1Qjs7QUFRQSxTQUFTQyxLQUFULENBQWVDLEtBQWYsRUFBa0M7QUFDaEMsU0FBTyxNQUFDLDhEQUFEO0FB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QUVFLGlCQUFhLEVBQUVZLEtBQUssQ0FBQ0YsYUFGdkI7QUFHRSxZQUFRLEVBQUVkLFFBSFo7QUFJRSxjQUFVLEVBQUVrQixVQUpkO0FBS0UsUUFBSSxFQUFFeEIsSUFMUjtBQU1FLGNBQVUsRUFBRWlDLFVBTmQ7QUFPRSxlQUFXLEVBQUV6QixXQVBmO0FBUUUsa0JBQWMsRUFBRUMsY0FSbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBb0JFLE1BQUMsa0VBQUQ7QUFDRSxRQUFJLEVBQUVULElBRFI7QUFFRSxnQkFBWSxFQUFFO0FBQUV1QyxjQUFRLEVBQUUsS0FBWjtBQUFtQkMsZ0JBQVUsRUFBRTtBQUEvQixLQUZoQjtBQUdFLG9CQUFnQixFQUFFLElBSHBCO0FBSUUsV0FBTyxFQUFFVixXQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUVBLFdBQWhCO0FBQTZCLFlBQVEsRUFBRTFCLFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsT0FESCxDQU5GLENBcEJGLENBREYsQ0FERjtBQW1DRDs7R0E1SXVCTCxJO1VBQ05SLFM7OztNQURNUSxJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tYWluLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4vZGlzY2xhaW1lcic7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXInO1xuaW1wb3J0IE5vdGUgZnJvbSAnLi9ub3RlJztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcbmltcG9ydCBNdWlBbGVydCwgeyBBbGVydFByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgfSxcbiAgfSlcbik7XG5cbmZ1bmN0aW9uIEFsZXJ0KHByb3BzOiBBbGVydFByb3BzKSB7XG4gIHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSB2YXJpYW50PVwiZmlsbGVkXCIgey4uLnByb3BzfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnIGFzIGFueSk7XG4gIGNvbnN0IFtzZXZlcml0eSwgc2V0U2V2ZXJpdHldID0gdXNlU3RhdGUoJ3N1Y2Nlc3MnIGFzIGFueSk7XG4gIGNvbnN0IFtub3RlYm9vaywgc2V0Tm90ZWJvb2tdID0gdXNlU3RhdGUoJ25vdGVib29rLTAnKTtcbiAgY29uc3QgW2N1cnJlbnROb3RlLCBzZXRDdXJyZW50Tm90ZV0gPSB1c2VTdGF0ZSgnbm90ZS0wJyk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIG5vdGVib29rczoge1xuICAgICAgJ25vdGVib29rLTAnOiB7XG4gICAgICAgIGlkOiAnbm90ZWJvb2stMCcsXG4gICAgICAgIHRpdGxlOiAnV29yaycsXG4gICAgICAgIG5vdGVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdub3RlLTAnLFxuICAgICAgICAgICAgbm90ZVRpdGxlOiAnVGVjaCBpbnRlcnZpZXcnLFxuICAgICAgICAgICAgbm90ZTogJzxwPkkgbmVlZCB0byBwcmVwYXJlIGludGVydmlldyE8L3A+JyxcbiAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDEwKSxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTApLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdub3RlLTEnLFxuICAgICAgICAgICAgbm90ZVRpdGxlOiAnTWVldCB1cCcsXG4gICAgICAgICAgICBub3RlOiAnPHA+RnVuIG1lZXQgdXAhPC9wPicsXG4gICAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxMSksXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDExKSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDEpLFxuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDExKSxcbiAgICAgIH0sXG4gICAgICAnbm90ZWJvb2stMSc6IHtcbiAgICAgICAgaWQ6ICdub3RlYm9vay0xJyxcbiAgICAgICAgdGl0bGU6ICdQZXJzb25hbCcsXG4gICAgICAgIG5vdGVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdub3RlLTAnLFxuICAgICAgICAgICAgbm90ZVRpdGxlOiAnUGF5IFV0aWxpdGllcycsXG4gICAgICAgICAgICBub3RlOiAnPHA+SSBuZWVkIHRvIHBheSBnYXMgdG9kYXkhPC9wPicsXG4gICAgICAgICAgICBpc0RlbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxMSksXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDExKSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDEpLFxuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDExKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBub3RlYm9va09yZGVyOiBbJ25vdGVib29rLTAnLCAnbm90ZWJvb2stMSddLFxuICAgIHRyYXNoOiB7XG4gICAgICBpZDogJ3RyYXNoJyxcbiAgICAgIHRpdGxlOiAnVHJhc2gnLFxuICAgICAgbm90ZXM6IFtdLFxuICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgIH0sXG4gIH0gYXMgYW55KTtcblxuICBjb25zdCBhZGROZXdOb3RlID0gKHRpdGxlOiBzdHJpbmcsIG5vdGU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG5ld05vdGUgPSB7XG4gICAgICBpZDogdXVpZHY0KCksXG4gICAgICBub3RlVGl0bGU6ICdVbnRpdGxlZCcsXG4gICAgICBub3RlOiAnJyxcbiAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgIGlzRGVsZXRlZDogZmFsc2UsXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgfTtcbiAgICBzdGF0ZS5ub3RlYm9va3Nbbm90ZWJvb2tdLm5vdGVzLnVuc2hpZnQobmV3Tm90ZSk7XG4gICAgaGFuZGxlU25hY2tiYXIoYEEgbm90ZSBpcyBjcmVhdGVkYCwgJ2luZm8nKTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICB9IGFzIGFueSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQ/OiBSZWFjdC5TeW50aGV0aWNFdmVudCwgcmVhc29uPzogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHJlYXNvbiA9PT0gJ2NsaWNrYXdheScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU25hY2tiYXIgPSAobWVzc2FnZTogc3RyaW5nLCBzZXZlcml0eTogYW55KSA9PiB7XG4gICAgc2V0TWVzc2FnZShtZXNzYWdlKTtcbiAgICBzZXRTZXZlcml0eShzZXZlcml0eSk7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVOb3RlID0gKG5vdGVib29rSWQ6IHN0cmluZywgbm90ZUlkOiBzdHJpbmcsIG5ld05vdGU6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCd1cGRhdGVkJyk7XG4gICAgc3RhdGUubm90ZWJvb2tzW25vdGVib29rSWRdLm5vdGVzLm1hcCgobm90ZTogYW55KSA9PiB7XG4gICAgICBpZiAobm90ZS5pZCA9PT0gbm90ZUlkKSB7XG4gICAgICAgIG5vdGUubm90ZVRpdGxlID0gbmV3Tm90ZS5ub3RlVGl0bGUgPyBuZXdOb3RlLm5vdGVUaXRsZSA6IG5vdGUubm90ZVRpdGxlO1xuICAgICAgICBub3RlLm5vdGUgPSBuZXdOb3RlLm5vdGUgPyBuZXdOb3RlLm5vdGUgOiBub3RlLm5vdGU7XG4gICAgICAgIG5vdGUuaXNEZWxldGVkID0gbmV3Tm90ZS5pc0RlbGV0ZWQ7XG4gICAgICAgIG5vdGUudXBkYXRlZEF0ID0gbmV3IERhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICB9IGFzIGFueSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8U2lkZWJhclxuICAgICAgICAgIG5vdGVib29rcz17c3RhdGUubm90ZWJvb2tzfVxuICAgICAgICAgIG5vdGVib29rT3JkZXI9e3N0YXRlLm5vdGVib29rT3JkZXJ9XG4gICAgICAgICAgbm90ZWJvb2s9e25vdGVib29rfVxuICAgICAgICAgIGFkZE5ld05vdGU9e2FkZE5ld05vdGV9XG4gICAgICAgICAgc2V0T3Blbj17c2V0T3Blbn1cbiAgICAgICAgICBzZXROb3RlYm9vaz17c2V0Tm90ZWJvb2t9XG4gICAgICAgIC8+XG4gICAgICAgIDxOb3RlXG4gICAgICAgICAgbm90ZWJvb2tzPXtzdGF0ZS5ub3RlYm9va3N9XG4gICAgICAgICAgbm90ZWJvb2tPcmRlcj17c3RhdGUubm90ZWJvb2tPcmRlcn1cbiAgICAgICAgICBub3RlYm9vaz17bm90ZWJvb2t9XG4gICAgICAgICAgYWRkTmV3Tm90ZT17YWRkTmV3Tm90ZX1cbiAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgIHVwZGF0ZU5vdGU9e3VwZGF0ZU5vdGV9XG4gICAgICAgICAgY3VycmVudE5vdGU9e2N1cnJlbnROb3RlfVxuICAgICAgICAgIHNldEN1cnJlbnROb3RlPXtzZXRDdXJyZW50Tm90ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPFNuYWNrYmFyXG4gICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6ICd0b3AnLCBob3Jpem9udGFsOiAnY2VudGVyJyB9fVxuICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezEwMDB9XG4gICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgID5cbiAgICAgICAgICA8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PXtzZXZlcml0eX0+XG4gICAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICA8L1NuYWNrYmFyPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/main.tsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./components/main.tsx":
/*!*****************************!*\
  !*** ./components/main.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ \"./components/sidebar.tsx\");\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note */ \"./components/note.tsx\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Snackbar */ \"./node_modules/@material-ui/core/esm/Snackbar/index.js\");\n/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/Alert */ \"./node_modules/@material-ui/lab/esm/Alert/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/main.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // import Disclaimer from './disclaimer';\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[\"createStyles\"])({\n    root: {\n      display: 'flex'\n    }\n  });\n});\n\nfunction Alert(props) {\n  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    elevation: 6,\n    variant: \"filled\"\n  }, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 10\n    }\n  }));\n}\n\n_c = Alert;\nfunction Main() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      message = _useState2[0],\n      setMessage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('success'),\n      severity = _useState3[0],\n      setSeverity = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('notebook-0'),\n      notebook = _useState4[0],\n      setNotebook = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('note-0'),\n      currentNote = _useState5[0],\n      setCurrentNote = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    notebooks: {\n      'notebook-0': {\n        id: 'notebook-0',\n        title: 'Work',\n        notes: [{\n          id: 'note-0',\n          noteTitle: 'Tech interview',\n          note: '<p>I need to prepare interview!</p>',\n          isDeleted: false,\n          createdAt: new Date(2020, 8, 10),\n          updatedAt: new Date(2020, 8, 10)\n        }, {\n          id: 'note-1',\n          noteTitle: 'Meet up',\n          note: '<p>Fun meet up!</p>',\n          isDeleted: false,\n          createdAt: new Date(2020, 8, 11),\n          updatedAt: new Date(2020, 8, 11)\n        }],\n        createdAt: new Date(2020, 8, 1),\n        updatedAt: new Date(2020, 8, 11)\n      },\n      'notebook-1': {\n        id: 'notebook-1',\n        title: 'Personal',\n        notes: [{\n          id: 'note-0',\n          noteTitle: 'Pay Utilities',\n          note: '<p>I need to pay gas today!</p>',\n          isDeleted: false,\n          createdAt: new Date(2020, 8, 11),\n          updatedAt: new Date(2020, 8, 11)\n        }],\n        createdAt: new Date(2020, 8, 1),\n        updatedAt: new Date(2020, 8, 11)\n      }\n    },\n    notebookOrder: ['notebook-0', 'notebook-1'],\n    trash: {\n      id: 'trash',\n      title: 'Trash',\n      notes: [],\n      createdAt: new Date(),\n      updatedAt: new Date()\n    }\n  }),\n      state = _useState6[0],\n      setState = _useState6[1];\n\n  var addNewNote = function addNewNote(title, note) {\n    var newNote = {\n      id: Object(uuid__WEBPACK_IMPORTED_MODULE_7__[\"v4\"])(),\n      noteTitle: 'Untitled',\n      note: '',\n      dragging: false,\n      isDeleted: false,\n      createdAt: new Date(),\n      updatedAt: new Date()\n    };\n    state.notebooks[notebook].notes.unshift(newNote);\n    handleSnackbar(\"A note is created\", 'info');\n    setState(_objectSpread({}, state));\n  };\n\n  var handleClose = function handleClose(event, reason) {\n    if (reason === 'clickaway') {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  var handleSnackbar = function handleSnackbar(message, severity) {\n    setMessage(message);\n    setSeverity(severity);\n    setOpen(true);\n  };\n\n  var updateNote = function updateNote(notebookId, noteId, newNote) {\n    state.notebooks[notebookId].notes.map(function (note) {\n      if (note.id === noteId && (newNote.note !== note.note || newNote.noteTitle !== note.noteTitle)) {\n        note.noteTitle = newNote.noteTitle ? newNote.noteTitle : note.noteTitle;\n        note.note = newNote.note ? newNote.note : note.note;\n        note.isDeleted = newNote.isDeleted;\n        note.updatedAt = new Date();\n      }\n    });\n    setState(_objectSpread({}, state));\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 9\n    }\n  }), __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    notebooks: state.notebooks,\n    notebookOrder: state.notebookOrder,\n    notebook: notebook,\n    addNewNote: addNewNote,\n    setOpen: setOpen,\n    setNotebook: setNotebook,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 9\n    }\n  }), __jsx(_note__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    notebooks: state.notebooks,\n    notebookOrder: state.notebookOrder,\n    notebook: notebook,\n    addNewNote: addNewNote,\n    open: open,\n    updateNote: updateNote,\n    currentNote: currentNote,\n    setCurrentNote: setCurrentNote,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    open: open,\n    anchorOrigin: {\n      vertical: 'top',\n      horizontal: 'center'\n    },\n    autoHideDuration: 1000,\n    onClose: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 9\n    }\n  }, __jsx(Alert, {\n    onClose: handleClose,\n    severity: severity,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 11\n    }\n  }, message))));\n}\n\n_s(Main, \"qqAnPP5W7sbVyqeWxtazdJwMBdY=\", false, function () {\n  return [useStyles];\n});\n\n_c2 = Main;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Alert\");\n$RefreshReg$(_c2, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluLnRzeD84NzVjIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiQWxlcnQiLCJwcm9wcyIsIk1haW4iLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2V2ZXJpdHkiLCJzZXRTZXZlcml0eSIsIm5vdGVib29rIiwic2V0Tm90ZWJvb2siLCJjdXJyZW50Tm90ZSIsInNldEN1cnJlbnROb3RlIiwibm90ZWJvb2tzIiwiaWQiLCJ0aXRsZSIsIm5vdGVzIiwibm90ZVRpdGxlIiwibm90ZSIsImlzRGVsZXRlZCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJ1cGRhdGVkQXQiLCJub3RlYm9va09yZGVyIiwidHJhc2giLCJzdGF0ZSIsInNldFN0YXRlIiwiYWRkTmV3Tm90ZSIsIm5ld05vdGUiLCJ1dWlkdjQiLCJkcmFnZ2luZyIsInVuc2hpZnQiLCJoYW5kbGVTbmFja2JhciIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJ1cGRhdGVOb3RlIiwibm90ZWJvb2tJZCIsIm5vdGVJZCIsIm1hcCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFO0FBREw7QUFESyxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCOztBQVFBLFNBQVNDLEtBQVQsQ0FBZUMsS0FBZixFQUFrQztBQUNoQyxTQUFPLE1BQUMsOERBQUQ7QUFBVSxhQUFTLEVBQUUsQ0FB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RSxNQUFDLDZDQUFEO0FBQ0UsYUFBUyxFQUFFZSxLQUFLLENBQUNaLFNBRG5CO0FBRUUsaUJBQWEsRUFBRVksS0FBSyxDQUFDRixhQUZ2QjtBQUdFLFlBQVEsRUFBRWQsUUFIWjtBQUlFLGNBQVUsRUFBRWtCLFVBSmQ7QUFLRSxRQUFJLEVBQUV4QixJQUxSO0FBTUUsY0FBVSxFQUFFaUMsVUFOZDtBQU9FLGVBQVcsRUFBRXpCLFdBUGY7QUFRRSxrQkFBYyxFQUFFQyxjQVJsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFvQkUsTUFBQyxrRUFBRDtBQUNFLFFBQUksRUFBRVQsSUFEUjtBQUVFLGdCQUFZLEVBQUU7QUFBRXFDLGNBQVEsRUFBRSxLQUFaO0FBQW1CQyxnQkFBVSxFQUFFO0FBQS9CLEtBRmhCO0FBR0Usb0JBQWdCLEVBQUUsSUFIcEI7QUFJRSxXQUFPLEVBQUVSLFdBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsS0FBRDtBQUFPLFdBQU8sRUFBRUEsV0FBaEI7QUFBNkIsWUFBUSxFQUFFMUIsUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixPQURILENBTkYsQ0FwQkYsQ0FERixDQURGO0FBbUNEOztHQTlJdUJMLEk7VUFDTlIsUzs7O01BRE1RLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi9kaXNjbGFpbWVyJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcic7XG5pbXBvcnQgTm90ZSBmcm9tICcuL25vdGUnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xuaW1wb3J0IE11aUFsZXJ0LCB7IEFsZXJ0UHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB9LFxuICB9KVxuKTtcblxuZnVuY3Rpb24gQWxlcnQocHJvcHM6IEFsZXJ0UHJvcHMpIHtcbiAgcmV0dXJuIDxNdWlBbGVydCBlbGV2YXRpb249ezZ9IHZhcmlhbnQ9XCJmaWxsZWRcIiB7Li4ucHJvcHN9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycgYXMgYW55KTtcbiAgY29uc3QgW3NldmVyaXR5LCBzZXRTZXZlcml0eV0gPSB1c2VTdGF0ZSgnc3VjY2VzcycgYXMgYW55KTtcbiAgY29uc3QgW25vdGVib29rLCBzZXROb3RlYm9va10gPSB1c2VTdGF0ZSgnbm90ZWJvb2stMCcpO1xuICBjb25zdCBbY3VycmVudE5vdGUsIHNldEN1cnJlbnROb3RlXSA9IHVzZVN0YXRlKCdub3RlLTAnKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgbm90ZWJvb2tzOiB7XG4gICAgICAnbm90ZWJvb2stMCc6IHtcbiAgICAgICAgaWQ6ICdub3RlYm9vay0wJyxcbiAgICAgICAgdGl0bGU6ICdXb3JrJyxcbiAgICAgICAgbm90ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ25vdGUtMCcsXG4gICAgICAgICAgICBub3RlVGl0bGU6ICdUZWNoIGludGVydmlldycsXG4gICAgICAgICAgICBub3RlOiAnPHA+SSBuZWVkIHRvIHByZXBhcmUgaW50ZXJ2aWV3ITwvcD4nLFxuICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTApLFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxMCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ25vdGUtMScsXG4gICAgICAgICAgICBub3RlVGl0bGU6ICdNZWV0IHVwJyxcbiAgICAgICAgICAgIG5vdGU6ICc8cD5GdW4gbWVldCB1cCE8L3A+JyxcbiAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDExKSxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTEpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMSksXG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTEpLFxuICAgICAgfSxcbiAgICAgICdub3RlYm9vay0xJzoge1xuICAgICAgICBpZDogJ25vdGVib29rLTEnLFxuICAgICAgICB0aXRsZTogJ1BlcnNvbmFsJyxcbiAgICAgICAgbm90ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ25vdGUtMCcsXG4gICAgICAgICAgICBub3RlVGl0bGU6ICdQYXkgVXRpbGl0aWVzJyxcbiAgICAgICAgICAgIG5vdGU6ICc8cD5JIG5lZWQgdG8gcGF5IGdhcyB0b2RheSE8L3A+JyxcbiAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDExKSxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTEpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMSksXG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTEpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG5vdGVib29rT3JkZXI6IFsnbm90ZWJvb2stMCcsICdub3RlYm9vay0xJ10sXG4gICAgdHJhc2g6IHtcbiAgICAgIGlkOiAndHJhc2gnLFxuICAgICAgdGl0bGU6ICdUcmFzaCcsXG4gICAgICBub3RlczogW10sXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgfSxcbiAgfSBhcyBhbnkpO1xuXG4gIGNvbnN0IGFkZE5ld05vdGUgPSAodGl0bGU6IHN0cmluZywgbm90ZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbmV3Tm90ZSA9IHtcbiAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgIG5vdGVUaXRsZTogJ1VudGl0bGVkJyxcbiAgICAgIG5vdGU6ICcnLFxuICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgaXNEZWxldGVkOiBmYWxzZSxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICB9O1xuICAgIHN0YXRlLm5vdGVib29rc1tub3RlYm9va10ubm90ZXMudW5zaGlmdChuZXdOb3RlKTtcbiAgICBoYW5kbGVTbmFja2JhcihgQSBub3RlIGlzIGNyZWF0ZWRgLCAnaW5mbycpO1xuICAgIHNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgIH0gYXMgYW55KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudD86IFJlYWN0LlN5bnRoZXRpY0V2ZW50LCByZWFzb24/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTbmFja2JhciA9IChtZXNzYWdlOiBzdHJpbmcsIHNldmVyaXR5OiBhbnkpID0+IHtcbiAgICBzZXRNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIHNldFNldmVyaXR5KHNldmVyaXR5KTtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZU5vdGUgPSAobm90ZWJvb2tJZDogc3RyaW5nLCBub3RlSWQ6IHN0cmluZywgbmV3Tm90ZTogYW55KSA9PiB7XG4gICAgc3RhdGUubm90ZWJvb2tzW25vdGVib29rSWRdLm5vdGVzLm1hcCgobm90ZTogYW55KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIG5vdGUuaWQgPT09IG5vdGVJZCAmJlxuICAgICAgICAobmV3Tm90ZS5ub3RlICE9PSBub3RlLm5vdGUgfHwgbmV3Tm90ZS5ub3RlVGl0bGUgIT09IG5vdGUubm90ZVRpdGxlKVxuICAgICAgKSB7XG4gICAgICAgIG5vdGUubm90ZVRpdGxlID0gbmV3Tm90ZS5ub3RlVGl0bGUgPyBuZXdOb3RlLm5vdGVUaXRsZSA6IG5vdGUubm90ZVRpdGxlO1xuICAgICAgICBub3RlLm5vdGUgPSBuZXdOb3RlLm5vdGUgPyBuZXdOb3RlLm5vdGUgOiBub3RlLm5vdGU7XG4gICAgICAgIG5vdGUuaXNEZWxldGVkID0gbmV3Tm90ZS5pc0RlbGV0ZWQ7XG4gICAgICAgIG5vdGUudXBkYXRlZEF0ID0gbmV3IERhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICB9IGFzIGFueSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8U2lkZWJhclxuICAgICAgICAgIG5vdGVib29rcz17c3RhdGUubm90ZWJvb2tzfVxuICAgICAgICAgIG5vdGVib29rT3JkZXI9e3N0YXRlLm5vdGVib29rT3JkZXJ9XG4gICAgICAgICAgbm90ZWJvb2s9e25vdGVib29rfVxuICAgICAgICAgIGFkZE5ld05vdGU9e2FkZE5ld05vdGV9XG4gICAgICAgICAgc2V0T3Blbj17c2V0T3Blbn1cbiAgICAgICAgICBzZXROb3RlYm9vaz17c2V0Tm90ZWJvb2t9XG4gICAgICAgIC8+XG4gICAgICAgIDxOb3RlXG4gICAgICAgICAgbm90ZWJvb2tzPXtzdGF0ZS5ub3RlYm9va3N9XG4gICAgICAgICAgbm90ZWJvb2tPcmRlcj17c3RhdGUubm90ZWJvb2tPcmRlcn1cbiAgICAgICAgICBub3RlYm9vaz17bm90ZWJvb2t9XG4gICAgICAgICAgYWRkTmV3Tm90ZT17YWRkTmV3Tm90ZX1cbiAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgIHVwZGF0ZU5vdGU9e3VwZGF0ZU5vdGV9XG4gICAgICAgICAgY3VycmVudE5vdGU9e2N1cnJlbnROb3RlfVxuICAgICAgICAgIHNldEN1cnJlbnROb3RlPXtzZXRDdXJyZW50Tm90ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPFNuYWNrYmFyXG4gICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6ICd0b3AnLCBob3Jpem9udGFsOiAnY2VudGVyJyB9fVxuICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezEwMDB9XG4gICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgID5cbiAgICAgICAgICA8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PXtzZXZlcml0eX0+XG4gICAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICA8L1NuYWNrYmFyPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/main.tsx\n");

/***/ })

})
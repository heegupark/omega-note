webpackHotUpdate_N_E("pages/index",{

/***/ "./components/main.tsx":
/*!*****************************!*\
  !*** ./components/main.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ \"./components/sidebar.tsx\");\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note */ \"./components/note.tsx\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Snackbar */ \"./node_modules/@material-ui/core/esm/Snackbar/index.js\");\n/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/Alert */ \"./node_modules/@material-ui/lab/esm/Alert/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/main.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // import Disclaimer from './disclaimer';\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[\"createStyles\"])({\n    root: {\n      display: 'flex'\n    }\n  });\n});\n\nfunction Alert(props) {\n  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    elevation: 6,\n    variant: \"filled\"\n  }, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 10\n    }\n  }));\n}\n\n_c = Alert;\nfunction Main() {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      message = _useState2[0],\n      setMessage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('success'),\n      severity = _useState3[0],\n      setSeverity = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('notebook-0'),\n      notebook = _useState4[0],\n      setNotebook = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      currentNote = _useState5[0],\n      setCurrentNote = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    notebooks: {\n      'notebook-0': {\n        id: 'notebook-0',\n        title: 'Work',\n        notes: [{\n          id: 'note-0',\n          noteTitle: 'Tech interview',\n          note: '<p>I need to prepare interview!</p>',\n          isDeleted: false,\n          createdAt: new Date(2020, 8, 10),\n          updatedAt: new Date(2020, 8, 10)\n        }, {\n          id: 'note-1',\n          noteTitle: 'Meet up',\n          note: '<p>Fun meet up!</p>',\n          isDeleted: false,\n          createdAt: new Date(2020, 8, 11),\n          updatedAt: new Date(2020, 8, 11)\n        }],\n        createdAt: new Date(2020, 8, 1),\n        updatedAt: new Date(2020, 8, 11)\n      },\n      'notebook-1': {\n        id: 'notebook-1',\n        title: 'Personal',\n        notes: [{\n          id: 'note-0',\n          noteTitle: 'Pay Utilities',\n          note: '<p>I need to pay gas today!</p>',\n          isDeleted: false,\n          createdAt: new Date(2020, 8, 11),\n          updatedAt: new Date(2020, 8, 11)\n        }],\n        createdAt: new Date(2020, 8, 1),\n        updatedAt: new Date(2020, 8, 11)\n      }\n    },\n    notebookOrder: ['notebook-0', 'notebook-1'],\n    trash: {\n      id: 'trash',\n      title: 'Trash',\n      notes: [],\n      createdAt: new Date(),\n      updatedAt: new Date()\n    }\n  }),\n      state = _useState6[0],\n      setState = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setCurrentNote(state.notebooks[state.notebookOrder[0]].notes[0].id);\n  }, []);\n\n  var addNewNote = function addNewNote(title, note) {\n    var newNote = {\n      id: Object(uuid__WEBPACK_IMPORTED_MODULE_7__[\"v4\"])(),\n      noteTitle: 'Untitled',\n      note: '',\n      dragging: false,\n      isDeleted: false,\n      createdAt: new Date(),\n      updatedAt: new Date()\n    };\n    state.notebooks[notebook].notes.unshift(newNote);\n    handleSnackbar(\"A note is created\", 'info');\n    setState(_objectSpread({}, state));\n  };\n\n  var handleClose = function handleClose(event, reason) {\n    if (reason === 'clickaway') {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  var handleSnackbar = function handleSnackbar(message, severity) {\n    setMessage(message);\n    setSeverity(severity);\n    setOpen(true);\n  };\n\n  var updateNote = function updateNote(notebookId, noteId, newNote) {\n    state.notebooks[notebookId].notes.map(function (note) {\n      if (note.id === noteId && (newNote.note && newNote.note !== note.note || newNote.noteTitle && newNote.noteTitle !== note.noteTitle)) {\n        note.noteTitle = newNote.noteTitle ? newNote.noteTitle : note.noteTitle;\n        note.note = newNote.note ? newNote.note : note.note;\n        note.isDeleted = newNote.isDeleted;\n        note.updatedAt = new Date();\n      }\n    });\n    setState(_objectSpread({}, state));\n  };\n\n  var formatDate = function formatDate(date) {\n    var createdTime = new Date(date);\n    var currentTime = new Date();\n    var diff = (currentTime - createdTime) / 1000;\n\n    if (diff <= 86400) {\n      return __jsx(react_moment__WEBPACK_IMPORTED_MODULE_10___default.a, {\n        fromNow: true,\n        date: date,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 141,\n          columnNumber: 14\n        }\n      });\n    } else if (diff <= 172800) {\n      return __jsx(\"div\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 14\n        }\n      }, \"Yesterday\");\n    } else {\n      return __jsx(react_moment__WEBPACK_IMPORTED_MODULE_10___default.a, {\n        format: \"MMM D, YYYY\",\n        date: date,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 14\n        }\n      });\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 9\n    }\n  }), __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    notebooks: state.notebooks,\n    notebookOrder: state.notebookOrder,\n    notebook: notebook,\n    addNewNote: addNewNote,\n    setNotebook: setNotebook,\n    setCurrentNote: setCurrentNote,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 9\n    }\n  }), __jsx(_note__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    notebooks: state.notebooks,\n    notebookOrder: state.notebookOrder,\n    notebook: notebook,\n    addNewNote: addNewNote,\n    open: open,\n    updateNote: updateNote,\n    currentNote: currentNote,\n    setCurrentNote: setCurrentNote,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    open: open,\n    anchorOrigin: {\n      vertical: 'top',\n      horizontal: 'center'\n    },\n    autoHideDuration: 1000,\n    onClose: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 9\n    }\n  }, __jsx(Alert, {\n    onClose: handleClose,\n    severity: severity,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 177,\n      columnNumber: 11\n    }\n  }, message))));\n}\n\n_s(Main, \"DDmxe1hPf64cEAPm1+dl+U/nFO4=\", false, function () {\n  return [useStyles];\n});\n\n_c2 = Main;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Alert\");\n$RefreshReg$(_c2, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluLnRzeD84NzVjIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiQWxlcnQiLCJwcm9wcyIsIk1haW4iLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2V2ZXJpdHkiLCJzZXRTZXZlcml0eSIsIm5vdGVib29rIiwic2V0Tm90ZWJvb2siLCJjdXJyZW50Tm90ZSIsInNldEN1cnJlbnROb3RlIiwibm90ZWJvb2tzIiwiaWQiLCJ0aXRsZSIsIm5vdGVzIiwibm90ZVRpdGxlIiwibm90ZSIsImlzRGVsZXRlZCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJ1cGRhdGVkQXQiLCJub3RlYm9va09yZGVyIiwidHJhc2giLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiYWRkTmV3Tm90ZSIsIm5ld05vdGUiLCJ1dWlkdjQiLCJkcmFnZ2luZyIsInVuc2hpZnQiLCJoYW5kbGVTbmFja2JhciIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJ1cGRhdGVOb3RlIiwibm90ZWJvb2tJZCIsIm5vdGVJZCIsIm1hcCIsImZvcm1hdERhdGUiLCJkYXRlIiwiY3JlYXRlZFRpbWUiLCJjdXJyZW50VGltZSIsImRpZmYiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUU7QUFETDtBQURLLEdBQUQsQ0FEZTtBQUFBLENBQUQsQ0FBNUI7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O0FBRUUsaUJBQWEsRUFBRVksS0FBSyxDQUFDRixhQUZ2QjtBQUdFLFlBQVEsRUFBRWQsUUFIWjtBQUlFLGNBQVUsRUFBRW1CLFVBSmQ7QUFLRSxRQUFJLEVBQUV6QixJQUxSO0FBTUUsY0FBVSxFQUFFa0MsVUFOZDtBQU9FLGVBQVcsRUFBRTFCLFdBUGY7QUFRRSxrQkFBYyxFQUFFQyxjQVJsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFvQkUsTUFBQyxrRUFBRDtBQUNFLFFBQUksRUFBRVQsSUFEUjtBQUVFLGdCQUFZLEVBQUU7QUFBRTJDLGNBQVEsRUFBRSxLQUFaO0FBQW1CQyxnQkFBVSxFQUFFO0FBQS9CLEtBRmhCO0FBR0Usb0JBQWdCLEVBQUUsSUFIcEI7QUFJRSxXQUFPLEVBQUViLFdBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsS0FBRDtBQUFPLFdBQU8sRUFBRUEsV0FBaEI7QUFBNkIsWUFBUSxFQUFFM0IsUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixPQURILENBTkYsQ0FwQkYsQ0FERixDQURGO0FBbUNEOztHQWhLdUJMLEk7VUFDTlIsUzs7O01BRE1RLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuL2Rpc2NsYWltZXInO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJztcbmltcG9ydCBOb3RlIGZyb20gJy4vbm90ZSc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XG5pbXBvcnQgTXVpQWxlcnQsIHsgQWxlcnRQcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xuaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5mdW5jdGlvbiBBbGVydChwcm9wczogQWxlcnRQcm9wcykge1xuICByZXR1cm4gPE11aUFsZXJ0IGVsZXZhdGlvbj17Nn0gdmFyaWFudD1cImZpbGxlZFwiIHsuLi5wcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyBhcyBhbnkpO1xuICBjb25zdCBbc2V2ZXJpdHksIHNldFNldmVyaXR5XSA9IHVzZVN0YXRlKCdzdWNjZXNzJyBhcyBhbnkpO1xuICBjb25zdCBbbm90ZWJvb2ssIHNldE5vdGVib29rXSA9IHVzZVN0YXRlKCdub3RlYm9vay0wJyk7XG4gIGNvbnN0IFtjdXJyZW50Tm90ZSwgc2V0Q3VycmVudE5vdGVdID0gdXNlU3RhdGUoJycgYXMgYW55KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgbm90ZWJvb2tzOiB7XG4gICAgICAnbm90ZWJvb2stMCc6IHtcbiAgICAgICAgaWQ6ICdub3RlYm9vay0wJyxcbiAgICAgICAgdGl0bGU6ICdXb3JrJyxcbiAgICAgICAgbm90ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ25vdGUtMCcsXG4gICAgICAgICAgICBub3RlVGl0bGU6ICdUZWNoIGludGVydmlldycsXG4gICAgICAgICAgICBub3RlOiAnPHA+SSBuZWVkIHRvIHByZXBhcmUgaW50ZXJ2aWV3ITwvcD4nLFxuICAgICAgICAgICAgaXNEZWxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTApLFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgyMDIwLCA4LCAxMCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ25vdGUtMScsXG4gICAgICAgICAgICBub3RlVGl0bGU6ICdNZWV0IHVwJyxcbiAgICAgICAgICAgIG5vdGU6ICc8cD5GdW4gbWVldCB1cCE8L3A+JyxcbiAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDExKSxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTEpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMSksXG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTEpLFxuICAgICAgfSxcbiAgICAgICdub3RlYm9vay0xJzoge1xuICAgICAgICBpZDogJ25vdGVib29rLTEnLFxuICAgICAgICB0aXRsZTogJ1BlcnNvbmFsJyxcbiAgICAgICAgbm90ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ25vdGUtMCcsXG4gICAgICAgICAgICBub3RlVGl0bGU6ICdQYXkgVXRpbGl0aWVzJyxcbiAgICAgICAgICAgIG5vdGU6ICc8cD5JIG5lZWQgdG8gcGF5IGdhcyB0b2RheSE8L3A+JyxcbiAgICAgICAgICAgIGlzRGVsZXRlZDogZmFsc2UsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKDIwMjAsIDgsIDExKSxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTEpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMSksXG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoMjAyMCwgOCwgMTEpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG5vdGVib29rT3JkZXI6IFsnbm90ZWJvb2stMCcsICdub3RlYm9vay0xJ10sXG4gICAgdHJhc2g6IHtcbiAgICAgIGlkOiAndHJhc2gnLFxuICAgICAgdGl0bGU6ICdUcmFzaCcsXG4gICAgICBub3RlczogW10sXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgfSxcbiAgfSBhcyBhbnkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q3VycmVudE5vdGUoc3RhdGUubm90ZWJvb2tzW3N0YXRlLm5vdGVib29rT3JkZXJbMF1dLm5vdGVzWzBdLmlkKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGFkZE5ld05vdGUgPSAodGl0bGU6IHN0cmluZywgbm90ZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbmV3Tm90ZSA9IHtcbiAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgIG5vdGVUaXRsZTogJ1VudGl0bGVkJyxcbiAgICAgIG5vdGU6ICcnLFxuICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgaXNEZWxldGVkOiBmYWxzZSxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICB9O1xuICAgIHN0YXRlLm5vdGVib29rc1tub3RlYm9va10ubm90ZXMudW5zaGlmdChuZXdOb3RlKTtcbiAgICBoYW5kbGVTbmFja2JhcihgQSBub3RlIGlzIGNyZWF0ZWRgLCAnaW5mbycpO1xuICAgIHNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgIH0gYXMgYW55KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudD86IFJlYWN0LlN5bnRoZXRpY0V2ZW50LCByZWFzb24/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTbmFja2JhciA9IChtZXNzYWdlOiBzdHJpbmcsIHNldmVyaXR5OiBhbnkpID0+IHtcbiAgICBzZXRNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIHNldFNldmVyaXR5KHNldmVyaXR5KTtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZU5vdGUgPSAobm90ZWJvb2tJZDogc3RyaW5nLCBub3RlSWQ6IHN0cmluZywgbmV3Tm90ZTogYW55KSA9PiB7XG4gICAgc3RhdGUubm90ZWJvb2tzW25vdGVib29rSWRdLm5vdGVzLm1hcCgobm90ZTogYW55KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIG5vdGUuaWQgPT09IG5vdGVJZCAmJlxuICAgICAgICAoKG5ld05vdGUubm90ZSAmJiBuZXdOb3RlLm5vdGUgIT09IG5vdGUubm90ZSkgfHxcbiAgICAgICAgICAobmV3Tm90ZS5ub3RlVGl0bGUgJiYgbmV3Tm90ZS5ub3RlVGl0bGUgIT09IG5vdGUubm90ZVRpdGxlKSlcbiAgICAgICkge1xuICAgICAgICBub3RlLm5vdGVUaXRsZSA9IG5ld05vdGUubm90ZVRpdGxlID8gbmV3Tm90ZS5ub3RlVGl0bGUgOiBub3RlLm5vdGVUaXRsZTtcbiAgICAgICAgbm90ZS5ub3RlID0gbmV3Tm90ZS5ub3RlID8gbmV3Tm90ZS5ub3RlIDogbm90ZS5ub3RlO1xuICAgICAgICBub3RlLmlzRGVsZXRlZCA9IG5ld05vdGUuaXNEZWxldGVkO1xuICAgICAgICBub3RlLnVwZGF0ZWRBdCA9IG5ldyBEYXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgfSBhcyBhbnkpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZWRUaW1lID0gbmV3IERhdGUoZGF0ZSkgYXMgYW55O1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKSBhcyBhbnk7XG4gICAgbGV0IGRpZmYgPSAoY3VycmVudFRpbWUgLSBjcmVhdGVkVGltZSkgLyAxMDAwO1xuICAgIGlmIChkaWZmIDw9IDg2NDAwKSB7XG4gICAgICByZXR1cm4gPE1vbWVudCBmcm9tTm93IGRhdGU9e2RhdGV9IC8+O1xuICAgIH0gZWxzZSBpZiAoZGlmZiA8PSAxNzI4MDApIHtcbiAgICAgIHJldHVybiA8ZGl2Plllc3RlcmRheTwvZGl2PjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxNb21lbnQgZm9ybWF0PVwiTU1NIEQsIFlZWVlcIiBkYXRlPXtkYXRlfSAvPjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8U2lkZWJhclxuICAgICAgICAgIG5vdGVib29rcz17c3RhdGUubm90ZWJvb2tzfVxuICAgICAgICAgIG5vdGVib29rT3JkZXI9e3N0YXRlLm5vdGVib29rT3JkZXJ9XG4gICAgICAgICAgbm90ZWJvb2s9e25vdGVib29rfVxuICAgICAgICAgIGFkZE5ld05vdGU9e2FkZE5ld05vdGV9XG4gICAgICAgICAgc2V0Tm90ZWJvb2s9e3NldE5vdGVib29rfVxuICAgICAgICAgIHNldEN1cnJlbnROb3RlPXtzZXRDdXJyZW50Tm90ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPE5vdGVcbiAgICAgICAgICBub3RlYm9va3M9e3N0YXRlLm5vdGVib29rc31cbiAgICAgICAgICBub3RlYm9va09yZGVyPXtzdGF0ZS5ub3RlYm9va09yZGVyfVxuICAgICAgICAgIG5vdGVib29rPXtub3RlYm9va31cbiAgICAgICAgICBhZGROZXdOb3RlPXthZGROZXdOb3RlfVxuICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgdXBkYXRlTm90ZT17dXBkYXRlTm90ZX1cbiAgICAgICAgICBjdXJyZW50Tm90ZT17Y3VycmVudE5vdGV9XG4gICAgICAgICAgc2V0Q3VycmVudE5vdGU9e3NldEN1cnJlbnROb3RlfVxuICAgICAgICAvPlxuICAgICAgICA8U25hY2tiYXJcbiAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdjZW50ZXInIH19XG4gICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MTAwMH1cbiAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gc2V2ZXJpdHk9e3NldmVyaXR5fT5cbiAgICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgIDwvU25hY2tiYXI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/main.tsx\n");

/***/ })

})
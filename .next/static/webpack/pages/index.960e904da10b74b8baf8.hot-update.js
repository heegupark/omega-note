webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor.tsx":
/*!*******************************!*\
  !*** ./components/editor.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Menu */ \"./node_modules/@material-ui/core/esm/Menu/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/esm/Modal/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    title: {\n      outline: 'none',\n      width: '95%',\n      paddingLeft: '15px',\n      margin: '0px',\n      border: 'none',\n      backgroundColor: 'rgb(248,248,248)',\n      fontSize: '24px'\n    },\n    editor: {\n      width: '100%',\n      minWidth: '400px',\n      wordBreak: 'break-word',\n      paddingBottom: '10px',\n      '&:hover': {\n        backgroundColor: 'white'\n      }\n    },\n    editorInTrash: {\n      width: '100%',\n      minWidth: '600px',\n      wordBreak: 'break-word',\n      padding: '15px'\n    },\n    dot: {\n      position: 'absolute',\n      \"float\": 'right',\n      right: '20px',\n      cursor: 'pointer',\n      marginTop: '10px'\n    },\n    modal: {\n      position: 'absolute',\n      width: 400,\n      backgroundColor: theme.palette.background.paper,\n      border: '2px solid #000',\n      boxShadow: theme.shadows[5],\n      padding: theme.spacing(2, 4, 3)\n    }\n  });\n});\nvar theme = 'snow';\nvar placeholder = \"What's in your mind?\";\nvar modules = {\n  toolbar: [[{\n    header: '1'\n  }, {\n    header: '2'\n  }, {\n    font: []\n  }, {\n    color: []\n  }], [{\n    size: []\n  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{\n    list: 'ordered'\n  }, {\n    list: 'bullet'\n  }, {\n    indent: '-1'\n  }, {\n    indent: '+1'\n  }], ['link', 'image', 'video'], ['clean']],\n  clipboard: {\n    matchVisual: false\n  }\n};\nvar formats = ['header', 'font', 'color', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image' // 'video',\n];\nfunction Editor(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  var ReactQuill = true ? __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\") : undefined;\n  var classes = useStyles();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      title = _useState2[0],\n      setTitle = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isDelete = _useState3[0],\n      setIsDeleted = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      contents = _useState4[0],\n      setContents = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      lastNotebook = _useState5[0],\n      setLastNotebook = _useState5[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      anchorEl = _React$useState2[0],\n      setAnchorEl = _React$useState2[1];\n\n  var handleClick = function handleClick(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handleClose = function handleClose() {\n    setAnchorEl(null);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setOpen(true);\n  }, []);\n\n  var handleChange = function handleChange(html) {\n    setContents(html);\n    var newNote = {\n      note: html\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  var getNote = function getNote(notebookId, noteId) {\n    var newContents = props.notebooks[notebookId].notes.filter(function (note) {\n      return note.id === noteId;\n    });\n    setTitle(newContents[0].noteTitle);\n    setContents(newContents[0].note);\n    setIsDeleted(newContents[0].isDeleted);\n    setLastNotebook(newContents[0].lastNotebook);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    getNote(props.notebook, props.currentNote);\n  }, [props.notebook, props.currentNote]);\n\n  var handleTitleChange = function handleTitleChange(e) {\n    setTitle(e.target.value);\n    var newNote = {\n      noteTitle: e.target.value\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  var handleMoveToTrash = function handleMoveToTrash() {\n    props.moveNote(props.notebook, 'trash', props.currentNote);\n    handleClose();\n  };\n\n  var handleRestore = function handleRestore() {\n    props.moveNote('trash', lastNotebook, props.currentNote);\n    handleClose();\n  };\n\n  var handleDelete = function handleDelete() {\n    props.deleteNote('trash', props.currentNote);\n    handleClose();\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, isDelete ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"span\", {\n    className: classes.title,\n    onClick: function onClick() {\n      return props.handleSnackbar('You can not update a note title in the Trash', 'error');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 11\n    }\n  }, title), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    id: \"dot-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 181,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleRestore,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 188,\n      columnNumber: 13\n    }\n  }, \"Restore\"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleModalOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 189,\n      columnNumber: 13\n    }\n  }, \"Delete\")), __jsx(\"span\", {\n    className: classes.dot,\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__[\"HiDotsHorizontal\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 192,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: classes.editorInTrash,\n    dangerouslySetInnerHTML: {\n      __html: contents\n    },\n    onClick: function onClick() {\n      return props.handleSnackbar('You can not update a note in the Trash', 'error');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 194,\n      columnNumber: 11\n    }\n  }), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    open: open,\n    onClose: handleClose,\n    \"aria-labelledby\": \"simple-modal-title\",\n    \"aria-describedby\": \"simple-modal-description\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 204,\n      columnNumber: 11\n    }\n  }, body)) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"input\", {\n    value: title,\n    className: classes.title,\n    onChange: function onChange(e) {\n      return handleTitleChange(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 215,\n      columnNumber: 11\n    }\n  }), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    id: \"dot-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 220,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleMoveToTrash,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 227,\n      columnNumber: 13\n    }\n  }, \"Move to trash\")), __jsx(\"span\", {\n    className: classes.dot,\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 229,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__[\"HiDotsHorizontal\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 230,\n      columnNumber: 13\n    }\n  })), !!ReactQuill && isOpen && __jsx(ReactQuill, {\n    theme: theme,\n    onChange: handleChange,\n    value: contents,\n    modules: modules,\n    formats: formats,\n    bounds: '.app',\n    placeholder: placeholder,\n    className: classes.editor,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 233,\n      columnNumber: 13\n    }\n  })));\n}\n\n_s(Editor, \"+SU9z+RTX996JGpySTzzVk/XP9k=\", false, function () {\n  return [useStyles];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3IudHN4Pzg1YWQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwidGl0bGUiLCJvdXRsaW5lIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiZWRpdG9yIiwibWluV2lkdGgiLCJ3b3JkQnJlYWsiLCJwYWRkaW5nQm90dG9tIiwiZWRpdG9ySW5UcmFzaCIsInBhZGRpbmciLCJkb3QiLCJwb3NpdGlvbiIsInJpZ2h0IiwiY3Vyc29yIiwibWFyZ2luVG9wIiwibW9kYWwiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwiYm94U2hhZG93Iiwic2hhZG93cyIsInNwYWNpbmciLCJwbGFjZWhvbGRlciIsIm1vZHVsZXMiLCJ0b29sYmFyIiwiaGVhZGVyIiwiZm9udCIsImNvbG9yIiwic2l6ZSIsImxpc3QiLCJpbmRlbnQiLCJjbGlwYm9hcmQiLCJtYXRjaFZpc3VhbCIsImZvcm1hdHMiLCJFZGl0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0T3BlbiIsIlJlYWN0UXVpbGwiLCJyZXF1aXJlIiwiY2xhc3NlcyIsInNldFRpdGxlIiwiaXNEZWxldGUiLCJzZXRJc0RlbGV0ZWQiLCJjb250ZW50cyIsInNldENvbnRlbnRzIiwibGFzdE5vdGVib29rIiwic2V0TGFzdE5vdGVib29rIiwiUmVhY3QiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsInVzZUVmZmVjdCIsImhhbmRsZUNoYW5nZSIsImh0bWwiLCJuZXdOb3RlIiwibm90ZSIsInVwZGF0ZU5vdGUiLCJub3RlYm9va3MiLCJub3RlYm9vayIsImlkIiwiY3VycmVudE5vdGUiLCJnZXROb3RlIiwibm90ZWJvb2tJZCIsIm5vdGVJZCIsIm5ld0NvbnRlbnRzIiwibm90ZXMiLCJmaWx0ZXIiLCJub3RlVGl0bGUiLCJpc0RlbGV0ZWQiLCJoYW5kbGVUaXRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZU1vdmVUb1RyYXNoIiwibW92ZU5vdGUiLCJoYW5kbGVSZXN0b3JlIiwiaGFuZGxlRGVsZXRlIiwiZGVsZXRlTm90ZSIsImhhbmRsZVNuYWNrYmFyIiwiQm9vbGVhbiIsImhhbmRsZU1vZGFsT3BlbiIsIl9faHRtbCIsIm9wZW4iLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEMsV0FBSyxFQUFFLEtBRkY7QUFHTEMsaUJBQVcsRUFBRSxNQUhSO0FBSUxDLFlBQU0sRUFBRSxLQUpIO0FBS0xDLFlBQU0sRUFBRSxNQUxIO0FBTUxDLHFCQUFlLEVBQUUsa0JBTlo7QUFPTEMsY0FBUSxFQUFFO0FBUEwsS0FESTtBQVVYQyxVQUFNLEVBQUU7QUFDTk4sV0FBSyxFQUFFLE1BREQ7QUFFTk8sY0FBUSxFQUFFLE9BRko7QUFHTkMsZUFBUyxFQUFFLFlBSEw7QUFJTkMsbUJBQWEsRUFBRSxNQUpUO0FBS04saUJBQVc7QUFDVEwsdUJBQWUsRUFBRTtBQURSO0FBTEwsS0FWRztBQW1CWE0saUJBQWEsRUFBRTtBQUNiVixXQUFLLEVBQUUsTUFETTtBQUViTyxjQUFRLEVBQUUsT0FGRztBQUdiQyxlQUFTLEVBQUUsWUFIRTtBQUliRyxhQUFPLEVBQUU7QUFKSSxLQW5CSjtBQXlCWEMsT0FBRyxFQUFFO0FBQ0hDLGNBQVEsRUFBRSxVQURQO0FBRUgsZUFBTyxPQUZKO0FBR0hDLFdBQUssRUFBRSxNQUhKO0FBSUhDLFlBQU0sRUFBRSxT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TUFSckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CSixDQS9DSixDQURGO0FBa0ZEOztHQTlKdUI4QixNO1VBSU4xQyxTOzs7S0FKTTBDLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2VkaXRvci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgSGlEb3RzSG9yaXpvbnRhbCB9IGZyb20gJ3JlYWN0LWljb25zL2hpJztcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBNb2RhbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICB0aXRsZToge1xuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgd2lkdGg6ICc5NSUnLFxuICAgICAgcGFkZGluZ0xlZnQ6ICcxNXB4JyxcbiAgICAgIG1hcmdpbjogJzBweCcsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDgsMjQ4LDI0OCknLFxuICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICB9LFxuICAgIGVkaXRvcjoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1pbldpZHRoOiAnNDAwcHgnLFxuICAgICAgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsXG4gICAgICBwYWRkaW5nQm90dG9tOiAnMTBweCcsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGVkaXRvckluVHJhc2g6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtaW5XaWR0aDogJzYwMHB4JyxcbiAgICAgIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxuICAgICAgcGFkZGluZzogJzE1cHgnLFxuICAgIH0sXG4gICAgZG90OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgcmlnaHQ6ICcyMHB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgbWFyZ2luVG9wOiAnMTBweCcsXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aWR0aDogNDAwLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICBib3JkZXI6ICcycHggc29saWQgIzAwMCcsXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCB0aGVtZSA9ICdzbm93JztcbmNvbnN0IHBsYWNlaG9sZGVyID0gYFdoYXQncyBpbiB5b3VyIG1pbmQ/YDtcbmNvbnN0IG1vZHVsZXMgPSB7XG4gIHRvb2xiYXI6IFtcbiAgICBbeyBoZWFkZXI6ICcxJyB9LCB7IGhlYWRlcjogJzInIH0sIHsgZm9udDogW10gfSwgeyBjb2xvcjogW10gfV0sXG4gICAgW3sgc2l6ZTogW10gfV0sXG4gICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJywgJ2Jsb2NrcXVvdGUnXSxcbiAgICBbXG4gICAgICB7IGxpc3Q6ICdvcmRlcmVkJyB9LFxuICAgICAgeyBsaXN0OiAnYnVsbGV0JyB9LFxuICAgICAgeyBpbmRlbnQ6ICctMScgfSxcbiAgICAgIHsgaW5kZW50OiAnKzEnIH0sXG4gICAgXSxcbiAgICBbJ2xpbmsnLCAnaW1hZ2UnLCAndmlkZW8nXSxcbiAgICBbJ2NsZWFuJ10sXG4gIF0sXG4gIGNsaXBib2FyZDoge1xuICAgIG1hdGNoVmlzdWFsOiBmYWxzZSxcbiAgfSxcbn07XG5jb25zdCBmb3JtYXRzID0gW1xuICAnaGVhZGVyJyxcbiAgJ2ZvbnQnLFxuICAnY29sb3InLFxuICAnc2l6ZScsXG4gICdib2xkJyxcbiAgJ2l0YWxpYycsXG4gICd1bmRlcmxpbmUnLFxuICAnc3RyaWtlJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnbGlzdCcsXG4gICdidWxsZXQnLFxuICAnaW5kZW50JyxcbiAgJ2xpbmsnLFxuICAnaW1hZ2UnLFxuICAvLyAndmlkZW8nLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFJlYWN0UXVpbGwgPVxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnID8gcmVxdWlyZSgncmVhY3QtcXVpbGwnKSA6ICgpID0+IGZhbHNlO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycgYXMgc3RyaW5nKTtcbiAgY29uc3QgW2lzRGVsZXRlLCBzZXRJc0RlbGV0ZWRdID0gdXNlU3RhdGUoZmFsc2UgYXMgYm9vbGVhbik7XG4gIGNvbnN0IFtjb250ZW50cywgc2V0Q29udGVudHNdID0gdXNlU3RhdGUoJycgYXMgc3RyaW5nKTtcbiAgY29uc3QgW2xhc3ROb3RlYm9vaywgc2V0TGFzdE5vdGVib29rXSA9IHVzZVN0YXRlKCcnIGFzIHN0cmluZyk7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGU8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaHRtbDogYW55KSA9PiB7XG4gICAgc2V0Q29udGVudHMoaHRtbCk7XG4gICAgY29uc3QgbmV3Tm90ZSA9IHtcbiAgICAgIG5vdGU6IGh0bWwsXG4gICAgfTtcbiAgICBwcm9wcy51cGRhdGVOb3RlKFxuICAgICAgcHJvcHMubm90ZWJvb2tzW3Byb3BzLm5vdGVib29rXS5pZCxcbiAgICAgIHByb3BzLmN1cnJlbnROb3RlLFxuICAgICAgbmV3Tm90ZVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Tm90ZSA9IChub3RlYm9va0lkOiBzdHJpbmcsIG5vdGVJZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbmV3Q29udGVudHMgPSBwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tJZF0ubm90ZXMuZmlsdGVyKFxuICAgICAgKG5vdGU6IGFueSkgPT4gbm90ZS5pZCA9PT0gbm90ZUlkXG4gICAgKTtcbiAgICBzZXRUaXRsZShuZXdDb250ZW50c1swXS5ub3RlVGl0bGUpO1xuICAgIHNldENvbnRlbnRzKG5ld0NvbnRlbnRzWzBdLm5vdGUpO1xuICAgIHNldElzRGVsZXRlZChuZXdDb250ZW50c1swXS5pc0RlbGV0ZWQpO1xuICAgIHNldExhc3ROb3RlYm9vayhuZXdDb250ZW50c1swXS5sYXN0Tm90ZWJvb2spO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Tm90ZShwcm9wcy5ub3RlYm9vaywgcHJvcHMuY3VycmVudE5vdGUpO1xuICB9LCBbcHJvcHMubm90ZWJvb2ssIHByb3BzLmN1cnJlbnROb3RlXSk7XG5cbiAgY29uc3QgaGFuZGxlVGl0bGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xuICAgIGNvbnN0IG5ld05vdGUgPSB7XG4gICAgICBub3RlVGl0bGU6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH07XG4gICAgcHJvcHMudXBkYXRlTm90ZShcbiAgICAgIHByb3BzLm5vdGVib29rc1twcm9wcy5ub3RlYm9va10uaWQsXG4gICAgICBwcm9wcy5jdXJyZW50Tm90ZSxcbiAgICAgIG5ld05vdGVcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdmVUb1RyYXNoID0gKCkgPT4ge1xuICAgIHByb3BzLm1vdmVOb3RlKHByb3BzLm5vdGVib29rLCAndHJhc2gnLCBwcm9wcy5jdXJyZW50Tm90ZSk7XG4gICAgaGFuZGxlQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZXN0b3JlID0gKCkgPT4ge1xuICAgIHByb3BzLm1vdmVOb3RlKCd0cmFzaCcsIGxhc3ROb3RlYm9vaywgcHJvcHMuY3VycmVudE5vdGUpO1xuICAgIGhhbmRsZUNsb3NlKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xuICAgIHByb3BzLmRlbGV0ZU5vdGUoJ3RyYXNoJywgcHJvcHMuY3VycmVudE5vdGUpO1xuICAgIGhhbmRsZUNsb3NlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzRGVsZXRlID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICBwcm9wcy5oYW5kbGVTbmFja2JhcihcbiAgICAgICAgICAgICAgICAnWW91IGNhbiBub3QgdXBkYXRlIGEgbm90ZSB0aXRsZSBpbiB0aGUgVHJhc2gnLFxuICAgICAgICAgICAgICAgICdlcnJvcidcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgIGlkPVwiZG90LW1lbnVcIlxuICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZVJlc3RvcmV9PlJlc3RvcmU8L01lbnVJdGVtPlxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZU1vZGFsT3Blbn0+RGVsZXRlPC9NZW51SXRlbT5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmRvdH0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgPEhpRG90c0hvcml6b250YWwgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmVkaXRvckluVHJhc2h9XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnRzIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICBwcm9wcy5oYW5kbGVTbmFja2JhcihcbiAgICAgICAgICAgICAgICAnWW91IGNhbiBub3QgdXBkYXRlIGEgbm90ZSBpbiB0aGUgVHJhc2gnLFxuICAgICAgICAgICAgICAgICdlcnJvcidcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtbW9kYWwtdGl0bGVcIlxuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInNpbXBsZS1tb2RhbC1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2JvZHl9XG4gICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IGhhbmRsZVRpdGxlQ2hhbmdlKGUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgIGlkPVwiZG90LW1lbnVcIlxuICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZU1vdmVUb1RyYXNofT5Nb3ZlIHRvIHRyYXNoPC9NZW51SXRlbT5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmRvdH0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgPEhpRG90c0hvcml6b250YWwgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgeyEhUmVhY3RRdWlsbCAmJiBpc09wZW4gJiYgKFxuICAgICAgICAgICAgPFJlYWN0UXVpbGxcbiAgICAgICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudHN9XG4gICAgICAgICAgICAgIG1vZHVsZXM9e21vZHVsZXN9XG4gICAgICAgICAgICAgIGZvcm1hdHM9e2Zvcm1hdHN9XG4gICAgICAgICAgICAgIGJvdW5kcz17Jy5hcHAnfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5lZGl0b3J9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/editor.tsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor.tsx":
/*!*******************************!*\
  !*** ./components/editor.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Menu */ \"./node_modules/@material-ui/core/esm/Menu/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/esm/Modal/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    title: {\n      outline: 'none',\n      width: '95%',\n      paddingLeft: '15px',\n      margin: '0px',\n      border: 'none',\n      backgroundColor: 'rgb(248,248,248)',\n      fontSize: '24px'\n    },\n    editor: {\n      width: '100%',\n      minWidth: '400px',\n      wordBreak: 'break-word',\n      paddingBottom: '10px',\n      '&:hover': {\n        backgroundColor: 'white'\n      }\n    },\n    editorInTrash: {\n      width: '100%',\n      minWidth: '600px',\n      wordBreak: 'break-word',\n      padding: '15px'\n    },\n    box: {\n      display: 'flex',\n      justifyContent: 'space-between',\n      width: '100%'\n    },\n    dot: {\n      cursor: 'pointer',\n      // marginTop: '10px',\n      padding: '10px',\n      '&:hover': {\n        backgroundColor: 'lightgrey',\n        borderRadius: '50%'\n      }\n    },\n    modal: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    paper: {\n      backgroundColor: 'rgb(222, 222, 222)',\n      boxShadow: theme.shadows[5],\n      padding: theme.spacing(1, 2, 2),\n      textAlign: 'center',\n      width: '350px',\n      borderRadius: '5px',\n      fontSize: '12px',\n      outline: 'none'\n    },\n    button: {\n      height: '30px',\n      margin: '10px 15px'\n    }\n  });\n});\nvar theme = 'snow';\nvar placeholder = \"What's in your mind?\";\nvar modules = {\n  toolbar: [[{\n    header: '1'\n  }, {\n    header: '2'\n  }, {\n    font: []\n  }, {\n    color: []\n  }], [{\n    size: []\n  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{\n    list: 'ordered'\n  }, {\n    list: 'bullet'\n  }, {\n    indent: '-1'\n  }, {\n    indent: '+1'\n  }], ['link', 'image', 'video'], ['clean']],\n  clipboard: {\n    matchVisual: false\n  }\n};\nvar formats = ['header', 'font', 'color', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image' // 'video',\n];\nfunction Editor(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  var ReactQuill = true ? __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\") : undefined;\n  var classes = useStyles();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      title = _useState2[0],\n      setTitle = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isDeleted = _useState3[0],\n      setIsDeleted = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      contents = _useState4[0],\n      setContents = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      lastNotebook = _useState5[0],\n      setLastNotebook = _useState5[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      anchorEl = _React$useState2[0],\n      setAnchorEl = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      modalOpen = _React$useState4[0],\n      setModalOpen = _React$useState4[1];\n\n  var handleModalOpen = function handleModalOpen() {\n    handlePopoverClose();\n    setModalOpen(true);\n  };\n\n  var handleModalClose = function handleModalClose() {\n    setModalOpen(false);\n  };\n\n  var handlePopoverOpen = function handlePopoverOpen(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handlePopoverClose = function handlePopoverClose() {\n    setAnchorEl(null);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setOpen(true);\n  }, []);\n\n  var handleChange = function handleChange(html) {\n    setContents(html);\n    var newNote = {\n      noteTitle: undefined,\n      note: html\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNoteId, newNote);\n  };\n\n  var getNote = function getNote(notebookId, noteId) {\n    var newContents = props.notebooks[notebookId].notes.filter(function (note) {\n      return note.id === noteId;\n    });\n\n    if (newContents.length) {\n      setTitle(newContents[0].noteTitle);\n      setContents(newContents[0].note);\n      setIsDeleted(newContents[0].isDeleted);\n      setLastNotebook(newContents[0].lastNotebook);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    getNote(props.notebook, props.currentNoteId);\n  }, [props.notebook, props.currentNoteId]);\n\n  var handleTitleChange = function handleTitleChange(e) {\n    setTitle(e.target.value);\n    var newNote = {\n      noteTitle: e.target.value,\n      note: undefined\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNoteId, newNote);\n  };\n\n  var handleMoveToTrash = function handleMoveToTrash() {\n    props.moveNote(props.notebook, 'trash', props.currentNoteId);\n    handlePopoverClose();\n  };\n\n  var handleRestore = function handleRestore() {\n    props.moveNote('trash', lastNotebook, props.currentNoteId);\n    handlePopoverClose();\n  };\n\n  var handleDelete = function handleDelete() {\n    props.deleteNote('trash', props.currentNoteId);\n    handlePopoverClose();\n    handleModalClose();\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, isDeleted ? __jsx(\"div\", {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 205,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: classes.title,\n    onClick: function onClick() {\n      return props.handleSnackbar('You can not update a note title in the Trash', 'error');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 206,\n      columnNumber: 11\n    }\n  }, title), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    id: \"dot-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handlePopoverClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 217,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleRestore,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 224,\n      columnNumber: 13\n    }\n  }, \"Restore\"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleModalOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 225,\n      columnNumber: 13\n    }\n  }, \"Delete\")), __jsx(\"span\", {\n    className: classes.dot,\n    onClick: handlePopoverOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 227,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__[\"HiDotsHorizontal\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 228,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: classes.editorInTrash,\n    dangerouslySetInnerHTML: {\n      __html: contents\n    },\n    onClick: function onClick() {\n      return props.handleSnackbar('You can not update a note in the Trash', 'error');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 230,\n      columnNumber: 11\n    }\n  }), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    open: modalOpen,\n    \"aria-labelledby\": \"simple-modal-title\",\n    \"aria-describedby\": \"simple-modal-description\",\n    className: classes.modal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 240,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 246,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    id: \"simple-modal-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 247,\n      columnNumber: 15\n    }\n  }, \"Are you really want to delete?\"), __jsx(\"p\", {\n    id: \"simple-modal-description\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 248,\n      columnNumber: 15\n    }\n  }, \"You will permanently delete this note.\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"secondary\",\n    onClick: handleDelete,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 251,\n      columnNumber: 15\n    }\n  }, \"Delete\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"default\",\n    onClick: handleModalClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 259,\n      columnNumber: 15\n    }\n  }, \"Cancel\")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"input\", {\n    value: title,\n    className: classes.title,\n    onChange: function onChange(e) {\n      return handleTitleChange(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 272,\n      columnNumber: 11\n    }\n  }), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    id: \"dot-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handlePopoverClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 279,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleMoveToTrash,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 286,\n      columnNumber: 13\n    }\n  }, \"Move to trash\")), __jsx(\"span\", {\n    className: classes.dot,\n    onClick: handlePopoverOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 288,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__[\"HiDotsHorizontal\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 289,\n      columnNumber: 13\n    }\n  })), !!ReactQuill && isOpen && __jsx(ReactQuill, {\n    theme: theme,\n    onChange: handleChange,\n    value: contents,\n    modules: modules,\n    formats: formats,\n    bounds: '.app',\n    placeholder: placeholder,\n    className: classes.editor,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 292,\n      columnNumber: 13\n    }\n  })));\n}\n\n_s(Editor, \"6SylCN258gtfZxlLillpQqUajww=\", false, function () {\n  return [useStyles];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3IudHN4Pzg1YWQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwidGl0bGUiLCJvdXRsaW5lIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiZWRpdG9yIiwibWluV2lkdGgiLCJ3b3JkQnJlYWsiLCJwYWRkaW5nQm90dG9tIiwiZWRpdG9ySW5UcmFzaCIsInBhZGRpbmciLCJib3giLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJkb3QiLCJjdXJzb3IiLCJib3JkZXJSYWRpdXMiLCJtb2RhbCIsImFsaWduSXRlbXMiLCJwYXBlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJzcGFjaW5nIiwidGV4dEFsaWduIiwiYnV0dG9uIiwiaGVpZ2h0IiwicGxhY2Vob2xkZXIiLCJtb2R1bGVzIiwidG9vbGJhciIsImhlYWRlciIsImZvbnQiLCJjb2xvciIsInNpemUiLCJsaXN0IiwiaW5kZW50IiwiY2xpcGJvYXJkIiwibWF0Y2hWaXN1YWwiLCJmb3JtYXRzIiwiRWRpdG9yIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldE9wZW4iLCJSZWFjdFF1aWxsIiwicmVxdWlyZSIsImNsYXNzZXMiLCJzZXRUaXRsZSIsImlzRGVsZXRlZCIsInNldElzRGVsZXRlZCIsImNvbnRlbnRzIiwic2V0Q29udGVudHMiLCJsYXN0Tm90ZWJvb2siLCJzZXRMYXN0Tm90ZWJvb2siLCJSZWFjdCIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJoYW5kbGVNb2RhbE9wZW4iLCJoYW5kbGVQb3BvdmVyQ2xvc2UiLCJoYW5kbGVNb2RhbENsb3NlIiwiaGFuZGxlUG9wb3Zlck9wZW4iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJodG1sIiwibmV3Tm90ZSIsIm5vdGVUaXRsZSIsInVuZGVmaW5lZCIsIm5vdGUiLCJ1cGRhdGVOb3RlIiwibm90ZWJvb2tzIiwibm90ZWJvb2siLCJpZCIsImN1cnJlbnROb3RlSWQiLCJnZXROb3RlIiwibm90ZWJvb2tJZCIsIm5vdGVJZCIsIm5ld0NvbnRlbnRzIiwibm90ZXMiLCJmaWx0ZXIiLCJsZW5ndGgiLCJoYW5kbGVUaXRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZU1vdmVUb1RyYXNoIiwibW92ZU5vdGUiLCJoYW5kbGVSZXN0b3JlIiwiaGFuZGxlRGVsZXRlIiwiZGVsZXRlTm90ZSIsImhhbmRsZVNuYWNrYmFyIiwiQm9vbGVhbiIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRSxNQURKO0FBRUxDLFdBQUssRUFBRSxLQUZGO0FBR0xDLGlCQUFXLEVBQUUsTUFIUjtBQUlMQyxZQUFNLEVBQUUsS0FKSDtBQUtMQyxZQUFNLEVBQUUsTUFMSDtBQU1MQyxxQkFBZSxFQUFFLGtCQU5aO0FBT0xDLGNBQVEsRUFBRTtBQVBMLEtBREk7QUFVWEMsVUFBTSxFQUFFO0FBQ05OLFdBQUssRUFBRSxNQUREO0FBRU5PLGNBQVEsRUFBRSxPQUZKO0FBR05DLGVBQVMsRUFBRSxZQUhMO0FBSU5DLG1CQUFhLEVBQUUsTUFKVDtBQUtOLGlCQUFXO0FBQ1RMLHVCQUFlLEVBQUU7QUFEUjtBQUxMLEtBVkc7QUFtQlhNLGlCQUFhLEVBQUU7QUFDYlYsV0FBSyxFQUFFLE1BRE07QUFFYk8sY0FBUSxFQUFFLE9BRkc7QUFHYkMsZUFBUyxFQUFFLFlBSEU7QUFJYkcsYUFBTyxFQUFFO0FB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RTRCLGlCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGLENBUkYsRUFpQkU7QUFBTSxhQUFTLEVBQUUxQyxPQUFPLENBQUMvQixHQUF6QjtBQUE4QixXQUFPLEVBQUUrQyxpQkFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBakJGLEVBb0JHLENBQUMsQ0FBQ2xCLFVBQUYsSUFBZ0JGLE1BQWhCLElBQ0MsTUFBQyxVQUFEO0FBQ0UsU0FBSyxFQUFFOUMsS0FEVDtBQUVFLFlBQVEsRUFBRXNFLFlBRlo7QUFHRSxTQUFLLEVBQUVoQixRQUhUO0FBSUUsV0FBTyxFQUFFdEIsT0FKWDtBQUtFLFdBQU8sRUFBRVUsT0FMWDtBQU1FLFVBQU0sRUFBRSxNQU5WO0FBT0UsZUFBVyxFQUFFWCxXQVBmO0FBUUUsYUFBUyxFQUFFbUIsT0FBTyxDQUFDeEMsTUFSckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCSixDQXBFSixDQURGO0FBeUdEOztHQXBNdUJpQyxNO1VBSU43QyxTOzs7S0FKTTZDLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2VkaXRvci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgSGlEb3RzSG9yaXpvbnRhbCB9IGZyb20gJ3JlYWN0LWljb25zL2hpJztcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBNb2RhbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSU5vdGUgZnJvbSAnLi9pbnRlcmZhY2VzL2lub3RlJztcbmltcG9ydCBJTm90ZVByb3BzIGZyb20gJy4vaW50ZXJmYWNlcy9pbm90ZXByb3BzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHRpdGxlOiB7XG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICB3aWR0aDogJzk1JScsXG4gICAgICBwYWRkaW5nTGVmdDogJzE1cHgnLFxuICAgICAgbWFyZ2luOiAnMHB4JyxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0OCwyNDgsMjQ4KScsXG4gICAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgIH0sXG4gICAgZWRpdG9yOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWluV2lkdGg6ICc0MDBweCcsXG4gICAgICB3b3JkQnJlYWs6ICdicmVhay13b3JkJyxcbiAgICAgIHBhZGRpbmdCb3R0b206ICcxMHB4JyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZWRpdG9ySW5UcmFzaDoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1pbldpZHRoOiAnNjAwcHgnLFxuICAgICAgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsXG4gICAgICBwYWRkaW5nOiAnMTVweCcsXG4gICAgfSxcbiAgICBib3g6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgZG90OiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIC8vIG1hcmdpblRvcDogJzEwcHgnLFxuICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JleScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgcGFwZXI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMjIsIDIyMiwgMjIyKScsXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDIsIDIpLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMzUwcHgnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGhlaWdodDogJzMwcHgnLFxuICAgICAgbWFyZ2luOiAnMTBweCAxNXB4JyxcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgdGhlbWUgPSAnc25vdyc7XG5jb25zdCBwbGFjZWhvbGRlciA9IGBXaGF0J3MgaW4geW91ciBtaW5kP2A7XG5jb25zdCBtb2R1bGVzID0ge1xuICB0b29sYmFyOiBbXG4gICAgW3sgaGVhZGVyOiAnMScgfSwgeyBoZWFkZXI6ICcyJyB9LCB7IGZvbnQ6IFtdIH0sIHsgY29sb3I6IFtdIH1dLFxuICAgIFt7IHNpemU6IFtdIH1dLFxuICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZScsICdibG9ja3F1b3RlJ10sXG4gICAgW1xuICAgICAgeyBsaXN0OiAnb3JkZXJlZCcgfSxcbiAgICAgIHsgbGlzdDogJ2J1bGxldCcgfSxcbiAgICAgIHsgaW5kZW50OiAnLTEnIH0sXG4gICAgICB7IGluZGVudDogJysxJyB9LFxuICAgIF0sXG4gICAgWydsaW5rJywgJ2ltYWdlJywgJ3ZpZGVvJ10sXG4gICAgWydjbGVhbiddLFxuICBdLFxuICBjbGlwYm9hcmQ6IHtcbiAgICBtYXRjaFZpc3VhbDogZmFsc2UsXG4gIH0sXG59O1xuY29uc3QgZm9ybWF0cyA9IFtcbiAgJ2hlYWRlcicsXG4gICdmb250JyxcbiAgJ2NvbG9yJyxcbiAgJ3NpemUnLFxuICAnYm9sZCcsXG4gICdpdGFsaWMnLFxuICAndW5kZXJsaW5lJyxcbiAgJ3N0cmlrZScsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2xpc3QnLFxuICAnYnVsbGV0JyxcbiAgJ2luZGVudCcsXG4gICdsaW5rJyxcbiAgJ2ltYWdlJyxcbiAgLy8gJ3ZpZGVvJyxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRvcihwcm9wczogSU5vdGVQcm9wcykge1xuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgUmVhY3RRdWlsbCA9XG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgPyByZXF1aXJlKCdyZWFjdC1xdWlsbCcpIDogKCkgPT4gZmFsc2U7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW2lzRGVsZXRlZCwgc2V0SXNEZWxldGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2NvbnRlbnRzLCBzZXRDb250ZW50c10gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW2xhc3ROb3RlYm9vaywgc2V0TGFzdE5vdGVib29rXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlTW9kYWxPcGVuID0gKCkgPT4ge1xuICAgIGhhbmRsZVBvcG92ZXJDbG9zZSgpO1xuICAgIHNldE1vZGFsT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb2RhbENsb3NlID0gKCkgPT4ge1xuICAgIHNldE1vZGFsT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUG9wb3Zlck9wZW4gPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUG9wb3ZlckNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChodG1sOiBzdHJpbmcpID0+IHtcbiAgICBzZXRDb250ZW50cyhodG1sKTtcbiAgICBjb25zdCBuZXdOb3RlID0ge1xuICAgICAgbm90ZVRpdGxlOiB1bmRlZmluZWQsXG4gICAgICBub3RlOiBodG1sLFxuICAgIH07XG4gICAgcHJvcHMudXBkYXRlTm90ZShcbiAgICAgIHByb3BzLm5vdGVib29rc1twcm9wcy5ub3RlYm9va10uaWQsXG4gICAgICBwcm9wcy5jdXJyZW50Tm90ZUlkLFxuICAgICAgbmV3Tm90ZVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Tm90ZSA9IChub3RlYm9va0lkOiBzdHJpbmcsIG5vdGVJZDogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3QgbmV3Q29udGVudHMgPSBwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tJZF0ubm90ZXMuZmlsdGVyKFxuICAgICAgKG5vdGU6IElOb3RlKSA9PiBub3RlLmlkID09PSBub3RlSWRcbiAgICApO1xuICAgIGlmIChuZXdDb250ZW50cy5sZW5ndGgpIHtcbiAgICAgIHNldFRpdGxlKG5ld0NvbnRlbnRzWzBdLm5vdGVUaXRsZSk7XG4gICAgICBzZXRDb250ZW50cyhuZXdDb250ZW50c1swXS5ub3RlKTtcbiAgICAgIHNldElzRGVsZXRlZChuZXdDb250ZW50c1swXS5pc0RlbGV0ZWQpO1xuICAgICAgc2V0TGFzdE5vdGVib29rKG5ld0NvbnRlbnRzWzBdLmxhc3ROb3RlYm9vayk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Tm90ZShwcm9wcy5ub3RlYm9vaywgcHJvcHMuY3VycmVudE5vdGVJZCk7XG4gIH0sIFtwcm9wcy5ub3RlYm9vaywgcHJvcHMuY3VycmVudE5vdGVJZF0pO1xuXG4gIGNvbnN0IGhhbmRsZVRpdGxlQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xuICAgIGNvbnN0IG5ld05vdGUgPSB7XG4gICAgICBub3RlVGl0bGU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgbm90ZTogdW5kZWZpbmVkLFxuICAgIH07XG4gICAgcHJvcHMudXBkYXRlTm90ZShcbiAgICAgIHByb3BzLm5vdGVib29rc1twcm9wcy5ub3RlYm9va10uaWQsXG4gICAgICBwcm9wcy5jdXJyZW50Tm90ZUlkLFxuICAgICAgbmV3Tm90ZVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW92ZVRvVHJhc2ggPSAoKSA9PiB7XG4gICAgcHJvcHMubW92ZU5vdGUocHJvcHMubm90ZWJvb2ssICd0cmFzaCcsIHByb3BzLmN1cnJlbnROb3RlSWQpO1xuICAgIGhhbmRsZVBvcG92ZXJDbG9zZSgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlc3RvcmUgPSAoKSA9PiB7XG4gICAgcHJvcHMubW92ZU5vdGUoJ3RyYXNoJywgbGFzdE5vdGVib29rLCBwcm9wcy5jdXJyZW50Tm90ZUlkKTtcbiAgICBoYW5kbGVQb3BvdmVyQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoKSA9PiB7XG4gICAgcHJvcHMuZGVsZXRlTm90ZSgndHJhc2gnLCBwcm9wcy5jdXJyZW50Tm90ZUlkKTtcbiAgICBoYW5kbGVQb3BvdmVyQ2xvc2UoKTtcbiAgICBoYW5kbGVNb2RhbENsb3NlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzRGVsZXRlZCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm94fT5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgcHJvcHMuaGFuZGxlU25hY2tiYXIoXG4gICAgICAgICAgICAgICAgJ1lvdSBjYW4gbm90IHVwZGF0ZSBhIG5vdGUgdGl0bGUgaW4gdGhlIFRyYXNoJyxcbiAgICAgICAgICAgICAgICAnZXJyb3InXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICBpZD1cImRvdC1tZW51XCJcbiAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZVBvcG92ZXJDbG9zZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlUmVzdG9yZX0+UmVzdG9yZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlTW9kYWxPcGVufT5EZWxldGU8L01lbnVJdGVtPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZG90fSBvbkNsaWNrPXtoYW5kbGVQb3BvdmVyT3Blbn0+XG4gICAgICAgICAgICA8SGlEb3RzSG9yaXpvbnRhbCAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdG9ySW5UcmFzaH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudHMgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgIHByb3BzLmhhbmRsZVNuYWNrYmFyKFxuICAgICAgICAgICAgICAgICdZb3UgY2FuIG5vdCB1cGRhdGUgYSBub3RlIGluIHRoZSBUcmFzaCcsXG4gICAgICAgICAgICAgICAgJ2Vycm9yJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIG9wZW49e21vZGFsT3Blbn1cbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1tb2RhbC10aXRsZVwiXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwic2ltcGxlLW1vZGFsLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgIDxoMiBpZD1cInNpbXBsZS1tb2RhbC10aXRsZVwiPkFyZSB5b3UgcmVhbGx5IHdhbnQgdG8gZGVsZXRlPzwvaDI+XG4gICAgICAgICAgICAgIDxwIGlkPVwic2ltcGxlLW1vZGFsLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgWW91IHdpbGwgcGVybWFuZW50bHkgZGVsZXRlIHRoaXMgbm90ZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWxldGV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2RhbENsb3NlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgaGFuZGxlVGl0bGVDaGFuZ2UoZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICBpZD1cImRvdC1tZW51XCJcbiAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZVBvcG92ZXJDbG9zZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlTW92ZVRvVHJhc2h9Pk1vdmUgdG8gdHJhc2g8L01lbnVJdGVtPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZG90fSBvbkNsaWNrPXtoYW5kbGVQb3BvdmVyT3Blbn0+XG4gICAgICAgICAgICA8SGlEb3RzSG9yaXpvbnRhbCAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7ISFSZWFjdFF1aWxsICYmIGlzT3BlbiAmJiAoXG4gICAgICAgICAgICA8UmVhY3RRdWlsbFxuICAgICAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50c31cbiAgICAgICAgICAgICAgbW9kdWxlcz17bW9kdWxlc31cbiAgICAgICAgICAgICAgZm9ybWF0cz17Zm9ybWF0c31cbiAgICAgICAgICAgICAgYm91bmRzPXsnLmFwcCd9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmVkaXRvcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/editor.tsx\n");

/***/ })

})
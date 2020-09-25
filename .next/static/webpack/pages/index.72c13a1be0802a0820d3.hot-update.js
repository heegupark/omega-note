webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor.tsx":
/*!*******************************!*\
  !*** ./components/editor.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Menu */ \"./node_modules/@material-ui/core/esm/Menu/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/esm/Modal/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    title: {\n      outline: 'none',\n      width: '95%',\n      paddingLeft: '15px',\n      margin: '0px',\n      border: 'none',\n      backgroundColor: 'rgb(248,248,248)',\n      fontSize: '24px'\n    },\n    editor: {\n      width: '100%',\n      minWidth: '400px',\n      wordBreak: 'break-word',\n      paddingBottom: '10px',\n      '&:hover': {\n        backgroundColor: 'white'\n      }\n    },\n    editorInTrash: {\n      width: '100%',\n      minWidth: '600px',\n      wordBreak: 'break-word',\n      padding: '15px'\n    },\n    dot: {\n      position: 'absolute',\n      \"float\": 'right',\n      right: '20px',\n      cursor: 'pointer',\n      marginTop: '10px'\n    },\n    modal: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    paper: {\n      backgroundColor: 'rgb(222, 222, 222)',\n      boxShadow: theme.shadows[5],\n      padding: theme.spacing(1, 2, 2),\n      textAlign: 'center',\n      width: '350px',\n      borderRadius: '5px',\n      fontSize: '12px',\n      outline: 'none'\n    },\n    button: {\n      height: '30px',\n      margin: '10px 15px'\n    }\n  });\n});\nvar theme = 'snow';\nvar placeholder = \"What's in your mind?\";\nvar modules = {\n  toolbar: [[{\n    header: '1'\n  }, {\n    header: '2'\n  }, {\n    font: []\n  }, {\n    color: []\n  }], [{\n    size: []\n  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{\n    list: 'ordered'\n  }, {\n    list: 'bullet'\n  }, {\n    indent: '-1'\n  }, {\n    indent: '+1'\n  }], ['link', 'image', 'video'], ['clean']],\n  clipboard: {\n    matchVisual: false\n  }\n};\nvar formats = ['header', 'font', 'color', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image' // 'video',\n];\nfunction Editor(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  var ReactQuill = true ? __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\") : undefined;\n  var classes = useStyles();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      title = _useState2[0],\n      setTitle = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isDelete = _useState3[0],\n      setIsDeleted = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      contents = _useState4[0],\n      setContents = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      lastNotebook = _useState5[0],\n      setLastNotebook = _useState5[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      anchorEl = _React$useState2[0],\n      setAnchorEl = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      modalOpen = _React$useState4[0],\n      setModalOpen = _React$useState4[1];\n\n  var handleModalOpen = function handleModalOpen() {\n    handlePopoverClose();\n    setModalOpen(true);\n  };\n\n  var handleModalClose = function handleModalClose() {\n    setModalOpen(false);\n  };\n\n  var handlePopoverOpen = function handlePopoverOpen(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handlePopoverClose = function handlePopoverClose() {\n    setAnchorEl(null);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setOpen(true);\n  }, []);\n\n  var handleChange = function handleChange(html) {\n    setContents(html);\n    var newNote = {\n      note: html\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  var getNote = function getNote(notebookId, noteId) {\n    var newContents = props.notebooks[notebookId].notes.filter(function (note) {\n      return note.id === noteId;\n    });\n    setTitle(newContents[0].noteTitle);\n    setContents(newContents[0].note);\n    setIsDeleted(newContents[0].isDeleted);\n    setLastNotebook(newContents[0].lastNotebook);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    getNote(props.notebook, props.currentNote);\n  }, [props.notebook, props.currentNote]);\n\n  var handleTitleChange = function handleTitleChange(e) {\n    setTitle(e.target.value);\n    var newNote = {\n      noteTitle: e.target.value\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  var handleMoveToTrash = function handleMoveToTrash() {\n    props.moveNote(props.notebook, 'trash', props.currentNote);\n    handlePopoverClose();\n  };\n\n  var handleRestore = function handleRestore() {\n    props.moveNote('trash', lastNotebook, props.currentNote);\n    handlePopoverClose();\n  };\n\n  var handleDelete = function handleDelete() {\n    props.deleteNote('trash', props.currentNote);\n    handlePopoverClose();\n    handleModalClose();\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, isDelete ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"span\", {\n    className: classes.title,\n    onClick: function onClick() {\n      return props.handleSnackbar('You can not update a note title in the Trash', 'error');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 195,\n      columnNumber: 11\n    }\n  }, title), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    id: \"dot-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handlePopoverClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 206,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleRestore,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 213,\n      columnNumber: 13\n    }\n  }, \"Restore\"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleModalOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 214,\n      columnNumber: 13\n    }\n  }, \"Delete\")), __jsx(\"span\", {\n    className: classes.dot,\n    onClick: handlePopoverOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 216,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__[\"HiDotsHorizontal\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 217,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: classes.editorInTrash,\n    dangerouslySetInnerHTML: {\n      __html: contents\n    },\n    onClick: function onClick() {\n      return props.handleSnackbar('You can not update a note in the Trash', 'error');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 219,\n      columnNumber: 11\n    }\n  }), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    open: modalOpen,\n    \"aria-labelledby\": \"simple-modal-title\",\n    \"aria-describedby\": \"simple-modal-description\",\n    className: classes.modal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 229,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 235,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    id: \"simple-modal-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 236,\n      columnNumber: 15\n    }\n  }, \"Are you really want to delete?\"), __jsx(\"p\", {\n    id: \"simple-modal-description\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 237,\n      columnNumber: 15\n    }\n  }, \"You will permanently delete this note.\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"secondary\",\n    onClick: handleDelete,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 240,\n      columnNumber: 15\n    }\n  }, \"Delete\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"default\",\n    onClick: handleModalClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 248,\n      columnNumber: 15\n    }\n  }, \"Cancel\")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"input\", {\n    value: title,\n    className: classes.title,\n    onChange: function onChange(e) {\n      return handleTitleChange(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 261,\n      columnNumber: 11\n    }\n  }), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    id: \"dot-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handlePopoverClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 266,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleMoveToTrash,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 273,\n      columnNumber: 13\n    }\n  }, \"Move to trash\")), __jsx(\"span\", {\n    className: classes.dot,\n    onClick: handlePopoverOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 275,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__[\"HiDotsHorizontal\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 276,\n      columnNumber: 13\n    }\n  })), !!ReactQuill && isOpen && __jsx(ReactQuill, {\n    theme: theme,\n    onChange: handleChange,\n    value: contents,\n    modules: modules,\n    formats: formats,\n    bounds: '.app',\n    placeholder: placeholder,\n    className: classes.editor,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 279,\n      columnNumber: 13\n    }\n  })));\n}\n\n_s(Editor, \"C0844VO1Y+ZPFKms35FDgLEbuG8=\", false, function () {\n  return [useStyles];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3IudHN4Pzg1YWQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwidGl0bGUiLCJvdXRsaW5lIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiZWRpdG9yIiwibWluV2lkdGgiLCJ3b3JkQnJlYWsiLCJwYWRkaW5nQm90dG9tIiwiZWRpdG9ySW5UcmFzaCIsInBhZGRpbmciLCJkb3QiLCJwb3NpdGlvbiIsInJpZ2h0IiwiY3Vyc29yIiwibWFyZ2luVG9wIiwibW9kYWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFwZXIiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwic3BhY2luZyIsInRleHRBbGlnbiIsImJvcmRlclJhZGl1cyIsImJ1dHRvbiIsImhlaWdodCIsInBsYWNlaG9sZGVyIiwibW9kdWxlcyIsInRvb2xiYXIiLCJoZWFkZXIiLCJmb250IiwiY29sb3IiLCJzaXplIiwibGlzdCIsImluZGVudCIsImNsaXBib2FyZCIsIm1hdGNoVmlzdWFsIiwiZm9ybWF0cyIsIkVkaXRvciIsInByb3BzIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRPcGVuIiwiUmVhY3RRdWlsbCIsInJlcXVpcmUiLCJjbGFzc2VzIiwic2V0VGl0bGUiLCJpc0RlbGV0ZSIsInNldElzRGVsZXRlZCIsImNvbnRlbnRzIiwic2V0Q29udGVudHMiLCJsYXN0Tm90ZWJvb2siLCJzZXRMYXN0Tm90ZWJvb2siLCJSZWFjdCIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJoYW5kbGVNb2RhbE9wZW4iLCJoYW5kbGVQb3BvdmVyQ2xvc2UiLCJoYW5kbGVNb2RhbENsb3NlIiwiaGFuZGxlUG9wb3Zlck9wZW4iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJodG1sIiwibmV3Tm90ZSIsIm5vdGUiLCJ1cGRhdGVOb3RlIiwibm90ZWJvb2tzIiwibm90ZWJvb2siLCJpZCIsImN1cnJlbnROb3RlIiwiZ2V0Tm90ZSIsIm5vdGVib29rSWQiLCJub3RlSWQiLCJuZXdDb250ZW50cyIsIm5vdGVzIiwiZmlsdGVyIiwibm90ZVRpdGxlIiwiaXNEZWxldGVkIiwiaGFuZGxlVGl0bGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVNb3ZlVG9UcmFzaCIsIm1vdmVOb3RlIiwiaGFuZGxlUmVzdG9yZSIsImhhbmRsZURlbGV0ZSIsImRlbGV0ZU5vdGUiLCJoYW5kbGVTbmFja2JhciIsIkJvb2xlYW4iLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUVMQyxXQUFLLEVBQUUsS0FGRjtBQUdMQyxpQkFBVyxFQUFFLE1BSFI7QUFJTEMsWUFBTSxFQUFFLEtBSkg7QUFLTEMsWUFBTSxFQUFFLE1BTEg7QUFNTEMscUJBQWUsRUFBRSxrQkFOWjtBQU9MQyxjQUFRLEVBQUU7QUFQTCxLQURJO0FBVVhDLFVBQU0sRUFBRTtBQUNOTixXQUFLLEVBQUUsTUFERDtBQUVOTyxjQUFRLEVBQUUsT0FGSjtBQUdOQyxlQUFTLEVBQUUsWUFITDtBQUlOQyxtQkFBYSxFQUFFLE1BSlQ7QUFLTixpQkFBVztBQUNUTCx1QkFBZSxFQUFFO0FBRFI7QUFMTCxLQVZHO0FBbUJYTSxpQkFBYSxFQUFFO0FBQ2JWLFdBQUssRUFBRSxNQURNO0FBRWJPLGNBQVEsRUFBRSxPQUZHO0FBR2JDLGVBQVMsRUFBRSxZQUhFO0FBSWJHLGFBQU8sRUFBRTtBQUpJLEtBbkJKO0FBeUJYQyxPQUFHLEVBQUU7QUFDSEMsY0FBUSxFQUFFLFVBRFA7QUFFSCxlQUFPLE9BRko7QUFHSEMsV0FBSyxFQUFFLE1BSEo7QUFJSEMsWUFBTSxFQUFFLFNBSkw7QUFLSEMsZUFBUyxFQUFFO0FBTFIsS0F6Qk07QUFnQ1hDLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUVMQyxnQkFBVSxFQUFFLFFBRlA7QUFHTEMsb0JBQWMsRUFBRTtBQUhYLEtBaENJO0FBcUNYQyxTQUFLLEVBQUU7QUFDTGpCLHFCQUFlLEVBQUUsb0JBRFo7QUFFTGtCLGVBQVMsRUFBRTFCLEtBQUssQ0FBQzJCLE9BQU4sQ0FBYyxDQUFkLENBRk47QUFHTFosYUFBTyxFQUFFZixLQUFLLENBQUM0QixPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUhKO0FBSUxDLGVBQVMsRUFBRSxRQUpOO0FBS0x6QixXQUFLLEVBQUUsT0FMRjtBQU1MMEIsa0JBQVksRUFBRSxLQU5UO0FBT0xyQixjQUFRLEVBQUUsTUFQTDtBQVFMTixhQUFPLEVBQUU7QUFSSixLQXJDSTtBQStDWDRCLFVBQU0sRUFBRTtBQUNOQyxZQUFNLEVBQUUsTUFERjtBQUVOMUIsWUFBTSxFQUFFO0FBRkY7QUEvQ0csR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1QjtBQXVEQSxJQUFNTixLQUFLLEdBQUcsTUFBZDtBQUNBLElBQU1pQyxXQUFXLHlCQUFqQjtBQUNBLElBQU1DLE9BQU8sR0FBRztBQUNkQyxTQUFPLEVBQUUsQ0FDUCxDQUFDO0FBQUVDLFVBQU0sRUFBRTtBQUFWLEdBQUQsRUFBa0I7QUFBRUEsVUFBTSxFQUFFO0FBQVYsR0FBbEIsRUFBbUM7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBbkMsRUFBaUQ7QUFBRUMsU0FBSyxFQUFFO0FBQVQsR0FBakQsQ0FETyxFQUVQLENBQUM7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBRCxDQUZPLEVBR1AsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixXQUFuQixFQUFnQyxRQUFoQyxFQUEwQyxZQUExQyxDQUhPLEVBSVAsQ0FDRTtBQUFFQyxRQUFJLEVBQUU7QUFBUixHQURGLEVBRUU7QUFBRUEsUUFBSSxFQUFFO0FBQVIsR0FGRixFQUdFO0FBQUVDLFVBQU0sRUFBRTtBQUFWLEdBSEYsRUFJRTtBQUFFQSxVQUFNLEVBQUU7QUFBVixHQUpGLENBSk8sRUFVUCxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLE9BQWxCLENBVk8sRUFXUCxDQUFDLE9BQUQsQ0FYTyxDQURLO0FBY2RDLFdBQVMsRUFBRTtBQUNUQyxlQUFXLEVBQUU7QUFESjtBQWRHLENBQWhCO0FBa0JBLElBQU1DLE9BQU8sR0FBRyxDQUNkLFFBRGMsRUFFZCxNQUZjLEVBR2QsT0FIYyxFQUlkLE1BSmMsRUFLZCxNQUxjLEVBTWQsUUFOYyxFQU9kLFdBUGMsRUFRZCxRQVJjLEVBU2QsWUFUYyxFQVVkLE1BVmMsRUFXZCxRQVhjLEVBWWQsUUFaYyxFQWFkLE1BYmMsRUFjZCxPQWRjLENBZWQ7QUFmYyxDQUFoQjtBQWtCZSxTQUFTQyxNQUFULENBQWdCQyxLQUFoQixFQUE0QjtBQUFBOztBQUFBLGtCQUNmQyxzREFBUSxDQUFDLEtBQUQsQ0FETztBQUFBLE1BQ2xDQyxNQURrQztBQUFBLE1BQzFCQyxPQUQwQjs7QUFFekMsTUFBTUMsVUFBVSxHQUNkLE9BQTZCQyxtQkFBTyxDQUFDLDREQUFELENBQXBDLEdBQXNELFNBRHhEO0FBRUEsTUFBTUMsT0FBTyxHQUFHdEQsU0FBUyxFQUF6Qjs7QUFKeUMsbUJBS2ZpRCxzREFBUSxDQUFvQixFQUFwQixDQUxPO0FBQUEsTUFLbEM3QyxLQUxrQztBQUFBLE1BSzNCbUQsUUFMMkI7O0FBQUEsbUJBTVJOLHNEQUFRLENBQXdCLEtBQXhCLENBTkE7QUFBQSxNQU1sQ08sUUFOa0M7QUFBQSxNQU14QkMsWUFOd0I7O0FBQUEsbUJBT1RSLHNEQUFRLENBQW9CLEVBQXBCLENBUEM7QUFBQSxNQU9sQ1MsUUFQa0M7QUFBQSxNQU94QkMsV0FQd0I7O0FBQUEsbUJBUURWLHNEQUFRLENBQXVCLEVBQXZCLENBUlA7QUFBQSxNQVFsQ1csWUFSa0M7QUFBQSxNQVFwQkMsZUFSb0I7O0FBQUEsd0JBU1RDLDRDQUFLLENBQUNiLFFBQU4sQ0FBbUMsSUFBbkMsQ0FUUztBQUFBO0FBQUEsTUFTbENjLFFBVGtDO0FBQUEsTUFTeEJDLFdBVHdCOztBQUFBLHlCQVVQRiw0Q0FBSyxDQUFDYixRQUFOLENBQWUsS0FBZixDQVZPO0FBQUE7QUFBQSxNQVVsQ2dCLFNBVmtDO0FBQUEsTUFVdkJDLFlBVnVCOztBQVl6QyxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJDLHNCQUFrQjtBQUNsQkYsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxHQUhEOztBQUtBLE1BQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QkgsZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRCxHQUZEOztBQUlBLE1BQU1JLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRCxFQUFnRDtBQUN4RVAsZUFBVyxDQUFDTyxLQUFLLENBQUNDLGFBQVAsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsTUFBTUosa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CSixlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsR0FGRDs7QUFJQVMseURBQVMsQ0FBQyxZQUFNO0FBQ2R0QixXQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNdUIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFlO0FBQ2xDaEIsZUFBVyxDQUFDZ0IsSUFBRCxDQUFYO0FBQ0EsUUFBTUMsT0FBTyxHQUFHO0FBQ2RDLFVBQUksRUFBRUY7QUFEUSxLQUFoQjtBQUdBM0IsU0FBSyxDQUFDOEIsVUFBTixDQUNFOUIsS0FBSyxDQUFDK0IsU0FBTixDQUFnQi9CLEtBQUssQ0FBQ2dDLFFBQXRCLEVBQWdDQyxFQURsQyxFQUVFakMsS0FBSyxDQUFDa0MsV0FGUixFQUdFTixPQUhGO0FBS0QsR0FWRDs7QUFZQSxNQUFNTyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxVQUFELEVBQXFCQyxNQUFyQixFQUF3QztBQUN0RCxRQUFNQyxXQUFXLEdBQUd0QyxLQUFLLENBQUMrQixTQUFOLENBQWdCSyxVQUFoQixFQUE0QkcsS0FBNUIsQ0FBa0NDLE1BQWxDLENBQ2xCLFVBQUNYLElBQUQ7QUFBQSxhQUFlQSxJQUFJLENBQUNJLEVBQUwsS0FBWUksTUFBM0I7QUFBQSxLQURrQixDQUFwQjtBQUdBOUIsWUFBUSxDQUFDK0IsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlRyxTQUFoQixDQUFSO0FBQ0E5QixlQUFXLENBQUMyQixXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVULElBQWhCLENBQVg7QUFDQXBCLGdCQUFZLENBQUM2QixXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVJLFNBQWhCLENBQVo7QUFDQTdCLG1CQUFlLENBQUN5QixXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWUxQixZQUFoQixDQUFmO0FBQ0QsR0FSRDs7QUFVQWEseURBQVMsQ0FBQyxZQUFNO0FBQ2RVLFdBQU8sQ0FBQ25DLEtBQUssQ0FBQ2dDLFFBQVAsRUFBaUJoQyxLQUFLLENBQUNrQyxXQUF2QixDQUFQO0FBQ0QsR0FGUSxFQUVOLENBQUNsQyxLQUFLLENBQUNnQyxRQUFQLEVBQWlCaEMsS0FBSyxDQUFDa0MsV0FBdkIsQ0FGTSxDQUFUOztBQUlBLE1BQU1TLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FDeEJDLENBRHdCLEVBRXJCO0FBQ0hyQyxZQUFRLENBQUNxQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFSO0FBQ0EsUUFBTWxCLE9BQU8sR0FBRztBQUNkYSxlQUFTLEVBQUVHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQztBQUROLEtBQWhCO0FBR0E5QyxTQUFLLENBQUM4QixVQUFOLENBQ0U5QixLQUFLLENBQUMrQixTQUFOLENBQWdCL0IsS0FBSyxDQUFDZ0MsUUFBdEIsRUFBZ0NDLEVBRGxDLEVBRUVqQyxLQUFLLENBQUNrQyxXQUZSLEVBR0VOLE9BSEY7QUFLRCxHQVpEOztBQWNBLE1BQU1tQixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUIvQyxTQUFLLENBQUNnRCxRQUFOLENBQWVoRCxLQUFLLENBQUNnQyxRQUFyQixFQUErQixPQUEvQixFQUF3Q2hDLEtBQUssQ0FBQ2tDLFdBQTlDO0FBQ0FkLHNCQUFrQjtBQUNuQixHQUhEOztBQUtBLE1BQU02QixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUJqRCxTQUFLLENBQUNnRCxRQUFOLENBQWUsT0FBZixFQUF3QnBDLFlBQXhCLEVBQXNDWixLQUFLLENBQUNrQyxXQUE1QztBQUNBZCxzQkFBa0I7QUFDbkIsR0FIRDs7QUFLQSxNQUFNOEIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QmxELFNBQUssQ0FBQ21ELFVBQU4sQ0FBaUIsT0FBakIsRUFBMEJuRCxLQUFLLENBQUNrQyxXQUFoQztBQUNBZCxzQkFBa0I7QUFDbEJDLG9CQUFnQjtBQUNqQixHQUpEOztBQU1BLFNBQ0UsbUVBQ0diLFFBQVEsR0FDUCxtRUFDRTtBQUNFLGFBQVMsRUFBRUYsT0FBTyxDQUFDbEQsS0FEckI7QUFFRSxXQUFPLEVBQUU7QUFBQSxhQUNQNEMsS0FBSyxDQUFDb0QsY0FBTixDQUNFLDhDQURGLEVBRUUsT0FGRixDQURPO0FBQUEsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0doRyxLQVRILENBREYsRUFZRSxNQUFDLDhEQUFEO0FBQ0UsTUFBRSxFQUFDLFVBREw7QUFFRSxZQUFRLEVBQUUyRCxRQUZaO0FBR0UsZUFBVyxNQUhiO0FBSUUsUUFBSSxFQUFFc0MsT0FBTyxDQUFDdEMsUUFBRCxDQUpmO0FBS0UsV0FBTyxFQUFFSyxrQkFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyxrRUFBRDtBQUFVLFdBQU8sRUFBRTZCLGFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRixFQVFFLE1BQUMsa0VBQUQ7QUFBVSxXQUFPLEVBQUU5QixlQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsQ0FaRixFQXNCRTtBQUFNLGFBQVMsRUFBRWIsT0FBTyxDQUFDcEMsR0FBekI7QUFBOEIsV0FBTyxFQUFFb0QsaUJBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXRCRixFQXlCRTtBQUNFLGFBQVMsRUFBRWhCLE9BQU8sQ0FBQ3RDLGFBRHJCO0FBRUUsMkJBQXVCLEVBQUU7QUFBRXNGLFlBQU0sRUFBRTVDO0FBQVYsS0FGM0I7QUFHRSxXQUFPLEVBQUU7QUFBQSxhQUNQVixLQUFLLENBQUNvRCxjQUFOLENBQ0Usd0NBREYsRUFFRSxPQUZGLENBRE87QUFBQSxLQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6QkYsRUFtQ0UsTUFBQywrREFBRDtBQUNFLFFBQUksRUFBRW5DLFNBRFI7QUFFRSx1QkFBZ0Isb0JBRmxCO0FBR0Usd0JBQWlCLDBCQUhuQjtBQUlFLGFBQVMsRUFBRVgsT0FBTyxDQUFDL0IsS0FKckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUssYUFBUyxFQUFFK0IsT0FBTyxDQUFDM0IsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksTUFBRSxFQUFDLG9CQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBREYsRUFFRTtBQUFHLE1BQUUsRUFBQywwQkFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQUZGLEVBS0UsTUFBQyxnRUFBRDtBQUNFLGFBQVMsRUFBRTJCLE9BQU8sQ0FBQ3JCLE1BRHJCO0FBRUUsV0FBTyxFQUFDLFVBRlY7QUFHRSxTQUFLLEVBQUMsV0FIUjtBQUlFLFdBQU8sRUFBRWlFLFlBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLEVBYUUsTUFBQyxnRUFBRDtBQUNFLGFBQVMsRUFBRTVDLE9BQU8sQ0FBQ3JCLE1BRHJCO0FBRUUsV0FBTyxFQUFDLFVBRlY7QUFHRSxTQUFLLEVBQUMsU0FIUjtBQUlFLFdBQU8sRUFBRW9DLGdCQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRixDQU5GLENBbkNGLENBRE8sR0FtRVAsbUVBQ0U7QUFDRSxTQUFLLEVBQUVqRSxLQURUO0FBRUUsYUFBUyxFQUFFa0QsT0FBTyxDQUFDbEQsS0FGckI7QUFHRSxZQUFRLEVBQUUsa0JBQUN3RixDQUFEO0FBQUEsYUFBWUQsaUJBQWlCLENBQUNDLENBQUQsQ0FBN0I7QUFBQSxLQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FLE1BQUMsOERBQUQ7QUFDRSxNQUFFLEVBQUMsVUFETDtBQUVFLFlBQVEsRUFBRTdCLFFBRlo7QUFHRSxlQUFXLE1BSGI7QUFJRSxRQUFJLEVBQUVzQyxPQUFPLENBQUN0QyxRQUFELENBSmY7QUFLRSxXQUFPLEVBQUVLLGtCQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLGtFQUFEO0FBQVUsV0FBTyxFQUFFMkIsaUJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEYsQ0FORixFQWVFO0FBQU0sYUFBUyxFQUFFekMsT0FBTyxDQUFDcEMsR0FBekI7QUFBOEIsV0FBTyxFQUFFb0QsaUJBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWZGLEVBa0JHLENBQUMsQ0FBQ2xCLFVBQUYsSUFBZ0JGLE1BQWhCLElBQ0MsTUFBQyxVQUFEO0FBQ0UsU0FBSyxFQUFFaEQsS0FEVDtBQUVFLFlBQVEsRUFBRXdFLFlBRlo7QUFHRSxTQUFLLEVBQUVoQixRQUhUO0FBSUUsV0FBTyxFQUFFdEIsT0FKWDtBQUtFLFdBQU8sRUFBRVUsT0FMWDtBQU1FLFVBQU0sRUFBRSxNQU5WO0FBT0UsZUFBVyxFQUFFWCxXQVBmO0FBUUUsYUFBUyxFQUFFbUIsT0FBTyxDQUFDMUMsTUFSckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CSixDQXBFSixDQURGO0FBdUdEOztHQWhNdUJtQyxNO1VBSU4vQyxTOzs7S0FKTStDLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2VkaXRvci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgSGlEb3RzSG9yaXpvbnRhbCB9IGZyb20gJ3JlYWN0LWljb25zL2hpJztcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBNb2RhbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICB0aXRsZToge1xuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgd2lkdGg6ICc5NSUnLFxuICAgICAgcGFkZGluZ0xlZnQ6ICcxNXB4JyxcbiAgICAgIG1hcmdpbjogJzBweCcsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDgsMjQ4LDI0OCknLFxuICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICB9LFxuICAgIGVkaXRvcjoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1pbldpZHRoOiAnNDAwcHgnLFxuICAgICAgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsXG4gICAgICBwYWRkaW5nQm90dG9tOiAnMTBweCcsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGVkaXRvckluVHJhc2g6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtaW5XaWR0aDogJzYwMHB4JyxcbiAgICAgIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxuICAgICAgcGFkZGluZzogJzE1cHgnLFxuICAgIH0sXG4gICAgZG90OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgcmlnaHQ6ICcyMHB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgbWFyZ2luVG9wOiAnMTBweCcsXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBwYXBlcjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIyMiwgMjIyLCAyMjIpJyxcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMiwgMiksXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgd2lkdGg6ICczNTBweCcsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICBtYXJnaW46ICcxMHB4IDE1cHgnLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCB0aGVtZSA9ICdzbm93JztcbmNvbnN0IHBsYWNlaG9sZGVyID0gYFdoYXQncyBpbiB5b3VyIG1pbmQ/YDtcbmNvbnN0IG1vZHVsZXMgPSB7XG4gIHRvb2xiYXI6IFtcbiAgICBbeyBoZWFkZXI6ICcxJyB9LCB7IGhlYWRlcjogJzInIH0sIHsgZm9udDogW10gfSwgeyBjb2xvcjogW10gfV0sXG4gICAgW3sgc2l6ZTogW10gfV0sXG4gICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJywgJ2Jsb2NrcXVvdGUnXSxcbiAgICBbXG4gICAgICB7IGxpc3Q6ICdvcmRlcmVkJyB9LFxuICAgICAgeyBsaXN0OiAnYnVsbGV0JyB9LFxuICAgICAgeyBpbmRlbnQ6ICctMScgfSxcbiAgICAgIHsgaW5kZW50OiAnKzEnIH0sXG4gICAgXSxcbiAgICBbJ2xpbmsnLCAnaW1hZ2UnLCAndmlkZW8nXSxcbiAgICBbJ2NsZWFuJ10sXG4gIF0sXG4gIGNsaXBib2FyZDoge1xuICAgIG1hdGNoVmlzdWFsOiBmYWxzZSxcbiAgfSxcbn07XG5jb25zdCBmb3JtYXRzID0gW1xuICAnaGVhZGVyJyxcbiAgJ2ZvbnQnLFxuICAnY29sb3InLFxuICAnc2l6ZScsXG4gICdib2xkJyxcbiAgJ2l0YWxpYycsXG4gICd1bmRlcmxpbmUnLFxuICAnc3RyaWtlJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnbGlzdCcsXG4gICdidWxsZXQnLFxuICAnaW5kZW50JyxcbiAgJ2xpbmsnLFxuICAnaW1hZ2UnLFxuICAvLyAndmlkZW8nLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFJlYWN0UXVpbGwgPVxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnID8gcmVxdWlyZSgncmVhY3QtcXVpbGwnKSA6ICgpID0+IGZhbHNlO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGU8YW55IHwgSFRNTEVsZW1lbnQ+KCcnKTtcbiAgY29uc3QgW2lzRGVsZXRlLCBzZXRJc0RlbGV0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IEhUTUxFbGVtZW50PihmYWxzZSk7XG4gIGNvbnN0IFtjb250ZW50cywgc2V0Q29udGVudHNdID0gdXNlU3RhdGU8YW55IHwgSFRNTEVsZW1lbnQ+KCcnKTtcbiAgY29uc3QgW2xhc3ROb3RlYm9vaywgc2V0TGFzdE5vdGVib29rXSA9IHVzZVN0YXRlPHN0cmluZyB8IEhUTUxFbGVtZW50PignJyk7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGU8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKTtcbiAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVNb2RhbE9wZW4gPSAoKSA9PiB7XG4gICAgaGFuZGxlUG9wb3ZlckNsb3NlKCk7XG4gICAgc2V0TW9kYWxPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vZGFsQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQb3BvdmVyT3BlbiA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQb3BvdmVyQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGh0bWw6IGFueSkgPT4ge1xuICAgIHNldENvbnRlbnRzKGh0bWwpO1xuICAgIGNvbnN0IG5ld05vdGUgPSB7XG4gICAgICBub3RlOiBodG1sLFxuICAgIH07XG4gICAgcHJvcHMudXBkYXRlTm90ZShcbiAgICAgIHByb3BzLm5vdGVib29rc1twcm9wcy5ub3RlYm9va10uaWQsXG4gICAgICBwcm9wcy5jdXJyZW50Tm90ZSxcbiAgICAgIG5ld05vdGVcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGdldE5vdGUgPSAobm90ZWJvb2tJZDogc3RyaW5nLCBub3RlSWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG5ld0NvbnRlbnRzID0gcHJvcHMubm90ZWJvb2tzW25vdGVib29rSWRdLm5vdGVzLmZpbHRlcihcbiAgICAgIChub3RlOiBhbnkpID0+IG5vdGUuaWQgPT09IG5vdGVJZFxuICAgICk7XG4gICAgc2V0VGl0bGUobmV3Q29udGVudHNbMF0ubm90ZVRpdGxlKTtcbiAgICBzZXRDb250ZW50cyhuZXdDb250ZW50c1swXS5ub3RlKTtcbiAgICBzZXRJc0RlbGV0ZWQobmV3Q29udGVudHNbMF0uaXNEZWxldGVkKTtcbiAgICBzZXRMYXN0Tm90ZWJvb2sobmV3Q29udGVudHNbMF0ubGFzdE5vdGVib29rKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE5vdGUocHJvcHMubm90ZWJvb2ssIHByb3BzLmN1cnJlbnROb3RlKTtcbiAgfSwgW3Byb3BzLm5vdGVib29rLCBwcm9wcy5jdXJyZW50Tm90ZV0pO1xuXG4gIGNvbnN0IGhhbmRsZVRpdGxlQ2hhbmdlID0gKFxuICAgIGU6IE1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQgfCBIVE1MQW5jaG9yRWxlbWVudD5cbiAgKSA9PiB7XG4gICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xuICAgIGNvbnN0IG5ld05vdGUgPSB7XG4gICAgICBub3RlVGl0bGU6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH07XG4gICAgcHJvcHMudXBkYXRlTm90ZShcbiAgICAgIHByb3BzLm5vdGVib29rc1twcm9wcy5ub3RlYm9va10uaWQsXG4gICAgICBwcm9wcy5jdXJyZW50Tm90ZSxcbiAgICAgIG5ld05vdGVcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdmVUb1RyYXNoID0gKCkgPT4ge1xuICAgIHByb3BzLm1vdmVOb3RlKHByb3BzLm5vdGVib29rLCAndHJhc2gnLCBwcm9wcy5jdXJyZW50Tm90ZSk7XG4gICAgaGFuZGxlUG9wb3ZlckNsb3NlKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVzdG9yZSA9ICgpID0+IHtcbiAgICBwcm9wcy5tb3ZlTm90ZSgndHJhc2gnLCBsYXN0Tm90ZWJvb2ssIHByb3BzLmN1cnJlbnROb3RlKTtcbiAgICBoYW5kbGVQb3BvdmVyQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoKSA9PiB7XG4gICAgcHJvcHMuZGVsZXRlTm90ZSgndHJhc2gnLCBwcm9wcy5jdXJyZW50Tm90ZSk7XG4gICAgaGFuZGxlUG9wb3ZlckNsb3NlKCk7XG4gICAgaGFuZGxlTW9kYWxDbG9zZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc0RlbGV0ZSA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgcHJvcHMuaGFuZGxlU25hY2tiYXIoXG4gICAgICAgICAgICAgICAgJ1lvdSBjYW4gbm90IHVwZGF0ZSBhIG5vdGUgdGl0bGUgaW4gdGhlIFRyYXNoJyxcbiAgICAgICAgICAgICAgICAnZXJyb3InXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICBpZD1cImRvdC1tZW51XCJcbiAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZVBvcG92ZXJDbG9zZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlUmVzdG9yZX0+UmVzdG9yZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlTW9kYWxPcGVufT5EZWxldGU8L01lbnVJdGVtPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZG90fSBvbkNsaWNrPXtoYW5kbGVQb3BvdmVyT3Blbn0+XG4gICAgICAgICAgICA8SGlEb3RzSG9yaXpvbnRhbCAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdG9ySW5UcmFzaH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudHMgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgIHByb3BzLmhhbmRsZVNuYWNrYmFyKFxuICAgICAgICAgICAgICAgICdZb3UgY2FuIG5vdCB1cGRhdGUgYSBub3RlIGluIHRoZSBUcmFzaCcsXG4gICAgICAgICAgICAgICAgJ2Vycm9yJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIG9wZW49e21vZGFsT3Blbn1cbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1tb2RhbC10aXRsZVwiXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwic2ltcGxlLW1vZGFsLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgIDxoMiBpZD1cInNpbXBsZS1tb2RhbC10aXRsZVwiPkFyZSB5b3UgcmVhbGx5IHdhbnQgdG8gZGVsZXRlPzwvaDI+XG4gICAgICAgICAgICAgIDxwIGlkPVwic2ltcGxlLW1vZGFsLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgWW91IHdpbGwgcGVybWFuZW50bHkgZGVsZXRlIHRoaXMgbm90ZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWxldGV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2RhbENsb3NlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IGhhbmRsZVRpdGxlQ2hhbmdlKGUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgIGlkPVwiZG90LW1lbnVcIlxuICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlUG9wb3ZlckNsb3NlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVNb3ZlVG9UcmFzaH0+TW92ZSB0byB0cmFzaDwvTWVudUl0ZW0+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5kb3R9IG9uQ2xpY2s9e2hhbmRsZVBvcG92ZXJPcGVufT5cbiAgICAgICAgICAgIDxIaURvdHNIb3Jpem9udGFsIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHshIVJlYWN0UXVpbGwgJiYgaXNPcGVuICYmIChcbiAgICAgICAgICAgIDxSZWFjdFF1aWxsXG4gICAgICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnRzfVxuICAgICAgICAgICAgICBtb2R1bGVzPXttb2R1bGVzfVxuICAgICAgICAgICAgICBmb3JtYXRzPXtmb3JtYXRzfVxuICAgICAgICAgICAgICBib3VuZHM9eycuYXBwJ31cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdG9yfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/editor.tsx\n");

/***/ })

})
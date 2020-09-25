webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor.tsx":
/*!*******************************!*\
  !*** ./components/editor.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Menu */ \"./node_modules/@material-ui/core/esm/Menu/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/esm/Modal/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    title: {\n      outline: 'none',\n      width: '95%',\n      paddingLeft: '15px',\n      margin: '0px',\n      border: 'none',\n      backgroundColor: 'rgb(248,248,248)',\n      fontSize: '24px'\n    },\n    editor: {\n      width: '100%',\n      minWidth: '400px',\n      wordBreak: 'break-word',\n      paddingBottom: '10px',\n      '&:hover': {\n        backgroundColor: 'white'\n      }\n    },\n    editorInTrash: {\n      width: '100%',\n      minWidth: '600px',\n      wordBreak: 'break-word',\n      padding: '15px'\n    },\n    dot: {\n      position: 'absolute',\n      \"float\": 'right',\n      right: '20px',\n      cursor: 'pointer',\n      marginTop: '10px'\n    },\n    modal: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    paper: {\n      backgroundColor: 'rgb(222, 222, 222)',\n      boxShadow: theme.shadows[5],\n      padding: theme.spacing(1, 2, 2),\n      textAlign: 'center',\n      width: '350px',\n      borderRadius: '5px',\n      fontSize: '12px',\n      outline: 'none'\n    },\n    button: {\n      height: '30px',\n      margin: '10px 15px'\n    }\n  });\n});\nvar theme = 'snow';\nvar placeholder = \"What's in your mind?\";\nvar modules = {\n  toolbar: [[{\n    header: '1'\n  }, {\n    header: '2'\n  }, {\n    font: []\n  }, {\n    color: []\n  }], [{\n    size: []\n  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{\n    list: 'ordered'\n  }, {\n    list: 'bullet'\n  }, {\n    indent: '-1'\n  }, {\n    indent: '+1'\n  }], ['link', 'image', 'video'], ['clean']],\n  clipboard: {\n    matchVisual: false\n  }\n};\nvar formats = ['header', 'font', 'color', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image' // 'video',\n];\nfunction Editor(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  var ReactQuill = true ? __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\") : undefined;\n  var classes = useStyles();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      title = _useState2[0],\n      setTitle = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isDelete = _useState3[0],\n      setIsDeleted = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      contents = _useState4[0],\n      setContents = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      lastNotebook = _useState5[0],\n      setLastNotebook = _useState5[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      anchorEl = _React$useState2[0],\n      setAnchorEl = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      modalOpen = _React$useState4[0],\n      setModalOpen = _React$useState4[1];\n\n  var handleModalOpen = function handleModalOpen() {\n    handlePopoverClose();\n    setModalOpen(true);\n  };\n\n  var handleModalClose = function handleModalClose() {\n    setModalOpen(false);\n  };\n\n  var handlePopoverOpen = function handlePopoverOpen(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handlePopoverClose = function handlePopoverClose() {\n    setAnchorEl(null);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setOpen(true);\n  }, []);\n\n  var handleChange = function handleChange(html) {\n    setContents(html);\n    var newNote = {\n      noteTitle: title,\n      note: html\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNoteId, newNote);\n  };\n\n  var getNote = function getNote(notebookId, noteId) {\n    var newContents = props.notebooks[notebookId].notes.filter(function (note) {\n      return note.id === noteId;\n    });\n    console.log(newContents);\n    setTitle(newContents[0].noteTitle);\n    setContents(newContents[0].note);\n    setIsDeleted(newContents[0].isDeleted);\n    setLastNotebook(newContents[0].lastNotebook);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    getNote(props.notebook, props.currentNoteId);\n  }, [props.notebook, props.currentNoteId]);\n\n  var handleTitleChange = function handleTitleChange(e) {\n    setTitle(e.target.value);\n    var newNote = {\n      noteTitle: e.target.value,\n      note: undefined\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNoteId, newNote);\n  };\n\n  var handleMoveToTrash = function handleMoveToTrash() {\n    props.moveNote(props.notebook, 'trash', props.currentNoteId);\n    handlePopoverClose();\n  };\n\n  var handleRestore = function handleRestore() {\n    props.moveNote('trash', lastNotebook, props.currentNoteId);\n    handlePopoverClose();\n  };\n\n  var handleDelete = function handleDelete() {\n    props.deleteNote('trash', props.currentNoteId);\n    handlePopoverClose();\n    handleModalClose();\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, isDelete ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"span\", {\n    className: classes.title,\n    onClick: function onClick() {\n      return props.handleSnackbar('You can not update a note title in the Trash', 'error');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 198,\n      columnNumber: 11\n    }\n  }, title), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    id: \"dot-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handlePopoverClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 209,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleRestore,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 216,\n      columnNumber: 13\n    }\n  }, \"Restore\"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleModalOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 217,\n      columnNumber: 13\n    }\n  }, \"Delete\")), __jsx(\"span\", {\n    className: classes.dot,\n    onClick: handlePopoverOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 219,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__[\"HiDotsHorizontal\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 220,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: classes.editorInTrash,\n    dangerouslySetInnerHTML: {\n      __html: contents\n    },\n    onClick: function onClick() {\n      return props.handleSnackbar('You can not update a note in the Trash', 'error');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 222,\n      columnNumber: 11\n    }\n  }), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    open: modalOpen,\n    \"aria-labelledby\": \"simple-modal-title\",\n    \"aria-describedby\": \"simple-modal-description\",\n    className: classes.modal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 232,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 238,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    id: \"simple-modal-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 239,\n      columnNumber: 15\n    }\n  }, \"Are you really want to delete?\"), __jsx(\"p\", {\n    id: \"simple-modal-description\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 240,\n      columnNumber: 15\n    }\n  }, \"You will permanently delete this note.\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"secondary\",\n    onClick: handleDelete,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 243,\n      columnNumber: 15\n    }\n  }, \"Delete\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"default\",\n    onClick: handleModalClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 251,\n      columnNumber: 15\n    }\n  }, \"Cancel\")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"input\", {\n    value: title,\n    className: classes.title,\n    onChange: function onChange(e) {\n      return handleTitleChange(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 264,\n      columnNumber: 11\n    }\n  }), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    id: \"dot-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handlePopoverClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 269,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleMoveToTrash,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 276,\n      columnNumber: 13\n    }\n  }, \"Move to trash\")), __jsx(\"span\", {\n    className: classes.dot,\n    onClick: handlePopoverOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 278,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__[\"HiDotsHorizontal\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 279,\n      columnNumber: 13\n    }\n  })), !!ReactQuill && isOpen && __jsx(ReactQuill, {\n    theme: theme,\n    onChange: handleChange,\n    value: contents,\n    modules: modules,\n    formats: formats,\n    bounds: '.app',\n    placeholder: placeholder,\n    className: classes.editor,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 282,\n      columnNumber: 13\n    }\n  })));\n}\n\n_s(Editor, \"C0844VO1Y+ZPFKms35FDgLEbuG8=\", false, function () {\n  return [useStyles];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3IudHN4Pzg1YWQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwidGl0bGUiLCJvdXRsaW5lIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiZWRpdG9yIiwibWluV2lkdGgiLCJ3b3JkQnJlYWsiLCJwYWRkaW5nQm90dG9tIiwiZWRpdG9ySW5UcmFzaCIsInBhZGRpbmciLCJkb3QiLCJwb3NpdGlvbiIsInJpZ2h0IiwiY3Vyc29yIiwibWFyZ2luVG9wIiwibW9kYWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFwZXIiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwic3BhY2luZyIsInRleHRBbGlnbiIsImJvcmRlclJhZGl1cyIsImJ1dHRvbiIsImhlaWdodCIsInBsYWNlaG9sZGVyIiwibW9kdWxlcyIsInRvb2xiYXIiLCJoZWFkZXIiLCJmb250IiwiY29sb3IiLCJzaXplIiwibGlzdCIsImluZGVudCIsImNsaXBib2FyZCIsIm1hdGNoVmlzdWFsIiwiZm9ybWF0cyIsIkVkaXRvciIsInByb3BzIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRPcGVuIiwiUmVhY3RRdWlsbCIsInJlcXVpcmUiLCJjbGFzc2VzIiwic2V0VGl0bGUiLCJpc0RlbGV0ZSIsInNldElzRGVsZXRlZCIsImNvbnRlbnRzIiwic2V0Q29udGVudHMiLCJsYXN0Tm90ZWJvb2siLCJzZXRMYXN0Tm90ZWJvb2siLCJSZWFjdCIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJoYW5kbGVNb2RhbE9wZW4iLCJoYW5kbGVQb3BvdmVyQ2xvc2UiLCJoYW5kbGVNb2RhbENsb3NlIiwiaGFuZGxlUG9wb3Zlck9wZW4iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJodG1sIiwibmV3Tm90ZSIsIm5vdGVUaXRsZSIsIm5vdGUiLCJ1cGRhdGVOb3RlIiwibm90ZWJvb2tzIiwibm90ZWJvb2siLCJpZCIsImN1cnJlbnROb3RlSWQiLCJnZXROb3RlIiwibm90ZWJvb2tJZCIsIm5vdGVJZCIsIm5ld0NvbnRlbnRzIiwibm90ZXMiLCJmaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwiaXNEZWxldGVkIiwiaGFuZGxlVGl0bGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJoYW5kbGVNb3ZlVG9UcmFzaCIsIm1vdmVOb3RlIiwiaGFuZGxlUmVzdG9yZSIsImhhbmRsZURlbGV0ZSIsImRlbGV0ZU5vdGUiLCJoYW5kbGVTbmFja2JhciIsIkJvb2xlYW4iLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUVMQyxXQUFLLEVBQUUsS0FGRjtBQUdMQyxpQkFBVyxFQUFFLE1BSFI7QUFJTEMsWUFBTSxFQUFFLEtBSkg7QUFLTEMsWUFBTSxFQUFFLE1BTEg7QUFNTEMscUJBQWUsRUFBRSxrQkFOWjtBQU9MQyxjQUFRLEVBQUU7QUFQTCxLQURJO0FBVVhDLFVBQU0sRUFBRTtBQUNOTixXQUFLLEVBQUUsTUFERDtBQUVOTyxjQUFRLEVBQUUsT0FGSjtBQUdOQyxlQUFTLEVBQUUsWUFITDtBQUlOQyxtQkFBYSxFQUFFLE1BSlQ7QUFLTixpQkFBVztBQUNUTCx1QkFBZSxFQUFFO0FBRFI7QUFMTCxLQVZHO0FBbUJYTSxpQkFBYSxFQUFFO0FBQ2JWLFdBQUssRUFBRSxNQURNO0FBRWJPLGNBQVEsRUFBRSxP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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBZkYsRUFrQkcsQ0FBQyxDQUFDbEIsVUFBRixJQUFnQkYsTUFBaEIsSUFDQyxNQUFDLFVBQUQ7QUFDRSxTQUFLLEVBQUVoRCxLQURUO0FBRUUsWUFBUSxFQUFFd0UsWUFGWjtBQUdFLFNBQUssRUFBRWhCLFFBSFQ7QUFJRSxXQUFPLEVBQUV0QixPQUpYO0FBS0UsV0FBTyxFQUFFVSxPQUxYO0FBTUUsVUFBTSxFQUFFLE1BTlY7QUFPRSxlQUFXLEVBQUVYLFdBUGY7QUFRRSxhQUFTLEVBQUVtQixPQUFPLENBQUMxQyxNQVJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJKLENBcEVKLENBREY7QUF1R0Q7O0dBak11Qm1DLE07VUFJTi9DLFM7OztLQUpNK0MsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZWRpdG9yLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBIaURvdHNIb3Jpem9udGFsIH0gZnJvbSAncmVhY3QtaWNvbnMvaGknO1xuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IE1vZGFsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01vZGFsJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJTm90ZSBmcm9tICcuL2ludGVyZmFjZXMvaW5vdGUnO1xuaW1wb3J0IElOb3RlUHJvcHMgZnJvbSAnLi9pbnRlcmZhY2VzL2lub3RlcHJvcHMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgdGl0bGU6IHtcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIHdpZHRoOiAnOTUlJyxcbiAgICAgIHBhZGRpbmdMZWZ0OiAnMTVweCcsXG4gICAgICBtYXJnaW46ICcwcHgnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQ4LDI0OCwyNDgpJyxcbiAgICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgfSxcbiAgICBlZGl0b3I6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtaW5XaWR0aDogJzQwMHB4JyxcbiAgICAgIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxuICAgICAgcGFkZGluZ0JvdHRvbTogJzEwcHgnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBlZGl0b3JJblRyYXNoOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWluV2lkdGg6ICc2MDBweCcsXG4gICAgICB3b3JkQnJlYWs6ICdicmVhay13b3JkJyxcbiAgICAgIHBhZGRpbmc6ICcxNXB4JyxcbiAgICB9LFxuICAgIGRvdDoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgIHJpZ2h0OiAnMjBweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIG1hcmdpblRvcDogJzEwcHgnLFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgcGFwZXI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMjIsIDIyMiwgMjIyKScsXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDIsIDIpLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMzUwcHgnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGhlaWdodDogJzMwcHgnLFxuICAgICAgbWFyZ2luOiAnMTBweCAxNXB4JyxcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgdGhlbWUgPSAnc25vdyc7XG5jb25zdCBwbGFjZWhvbGRlciA9IGBXaGF0J3MgaW4geW91ciBtaW5kP2A7XG5jb25zdCBtb2R1bGVzID0ge1xuICB0b29sYmFyOiBbXG4gICAgW3sgaGVhZGVyOiAnMScgfSwgeyBoZWFkZXI6ICcyJyB9LCB7IGZvbnQ6IFtdIH0sIHsgY29sb3I6IFtdIH1dLFxuICAgIFt7IHNpemU6IFtdIH1dLFxuICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZScsICdibG9ja3F1b3RlJ10sXG4gICAgW1xuICAgICAgeyBsaXN0OiAnb3JkZXJlZCcgfSxcbiAgICAgIHsgbGlzdDogJ2J1bGxldCcgfSxcbiAgICAgIHsgaW5kZW50OiAnLTEnIH0sXG4gICAgICB7IGluZGVudDogJysxJyB9LFxuICAgIF0sXG4gICAgWydsaW5rJywgJ2ltYWdlJywgJ3ZpZGVvJ10sXG4gICAgWydjbGVhbiddLFxuICBdLFxuICBjbGlwYm9hcmQ6IHtcbiAgICBtYXRjaFZpc3VhbDogZmFsc2UsXG4gIH0sXG59O1xuY29uc3QgZm9ybWF0cyA9IFtcbiAgJ2hlYWRlcicsXG4gICdmb250JyxcbiAgJ2NvbG9yJyxcbiAgJ3NpemUnLFxuICAnYm9sZCcsXG4gICdpdGFsaWMnLFxuICAndW5kZXJsaW5lJyxcbiAgJ3N0cmlrZScsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2xpc3QnLFxuICAnYnVsbGV0JyxcbiAgJ2luZGVudCcsXG4gICdsaW5rJyxcbiAgJ2ltYWdlJyxcbiAgLy8gJ3ZpZGVvJyxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRvcihwcm9wczogSU5vdGVQcm9wcykge1xuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgUmVhY3RRdWlsbCA9XG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgPyByZXF1aXJlKCdyZWFjdC1xdWlsbCcpIDogKCkgPT4gZmFsc2U7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW2lzRGVsZXRlLCBzZXRJc0RlbGV0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbY29udGVudHMsIHNldENvbnRlbnRzXSA9IHVzZVN0YXRlPGFueT4oJycpO1xuICBjb25zdCBbbGFzdE5vdGVib29rLCBzZXRMYXN0Tm90ZWJvb2tdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGU8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKTtcbiAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVNb2RhbE9wZW4gPSAoKSA9PiB7XG4gICAgaGFuZGxlUG9wb3ZlckNsb3NlKCk7XG4gICAgc2V0TW9kYWxPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vZGFsQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQb3BvdmVyT3BlbiA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQb3BvdmVyQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGh0bWw6IHN0cmluZykgPT4ge1xuICAgIHNldENvbnRlbnRzKGh0bWwpO1xuICAgIGNvbnN0IG5ld05vdGUgPSB7XG4gICAgICBub3RlVGl0bGU6IHRpdGxlLFxuICAgICAgbm90ZTogaHRtbCxcbiAgICB9O1xuICAgIHByb3BzLnVwZGF0ZU5vdGUoXG4gICAgICBwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLmlkLFxuICAgICAgcHJvcHMuY3VycmVudE5vdGVJZCxcbiAgICAgIG5ld05vdGVcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGdldE5vdGUgPSAobm90ZWJvb2tJZDogc3RyaW5nLCBub3RlSWQ6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IG5ld0NvbnRlbnRzID0gcHJvcHMubm90ZWJvb2tzW25vdGVib29rSWRdLm5vdGVzLmZpbHRlcihcbiAgICAgIChub3RlOiBJTm90ZSkgPT4gbm90ZS5pZCA9PT0gbm90ZUlkXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhuZXdDb250ZW50cyk7XG4gICAgc2V0VGl0bGUobmV3Q29udGVudHNbMF0ubm90ZVRpdGxlKTtcbiAgICBzZXRDb250ZW50cyhuZXdDb250ZW50c1swXS5ub3RlKTtcbiAgICBzZXRJc0RlbGV0ZWQobmV3Q29udGVudHNbMF0uaXNEZWxldGVkKTtcbiAgICBzZXRMYXN0Tm90ZWJvb2sobmV3Q29udGVudHNbMF0ubGFzdE5vdGVib29rKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE5vdGUocHJvcHMubm90ZWJvb2ssIHByb3BzLmN1cnJlbnROb3RlSWQpO1xuICB9LCBbcHJvcHMubm90ZWJvb2ssIHByb3BzLmN1cnJlbnROb3RlSWRdKTtcblxuICBjb25zdCBoYW5kbGVUaXRsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zdCBuZXdOb3RlID0ge1xuICAgICAgbm90ZVRpdGxlOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgIG5vdGU6IHVuZGVmaW5lZCxcbiAgICB9O1xuICAgIHByb3BzLnVwZGF0ZU5vdGUoXG4gICAgICBwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLmlkLFxuICAgICAgcHJvcHMuY3VycmVudE5vdGVJZCxcbiAgICAgIG5ld05vdGVcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdmVUb1RyYXNoID0gKCkgPT4ge1xuICAgIHByb3BzLm1vdmVOb3RlKHByb3BzLm5vdGVib29rLCAndHJhc2gnLCBwcm9wcy5jdXJyZW50Tm90ZUlkKTtcbiAgICBoYW5kbGVQb3BvdmVyQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZXN0b3JlID0gKCkgPT4ge1xuICAgIHByb3BzLm1vdmVOb3RlKCd0cmFzaCcsIGxhc3ROb3RlYm9vaywgcHJvcHMuY3VycmVudE5vdGVJZCk7XG4gICAgaGFuZGxlUG9wb3ZlckNsb3NlKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xuICAgIHByb3BzLmRlbGV0ZU5vdGUoJ3RyYXNoJywgcHJvcHMuY3VycmVudE5vdGVJZCk7XG4gICAgaGFuZGxlUG9wb3ZlckNsb3NlKCk7XG4gICAgaGFuZGxlTW9kYWxDbG9zZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc0RlbGV0ZSA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgcHJvcHMuaGFuZGxlU25hY2tiYXIoXG4gICAgICAgICAgICAgICAgJ1lvdSBjYW4gbm90IHVwZGF0ZSBhIG5vdGUgdGl0bGUgaW4gdGhlIFRyYXNoJyxcbiAgICAgICAgICAgICAgICAnZXJyb3InXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICBpZD1cImRvdC1tZW51XCJcbiAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZVBvcG92ZXJDbG9zZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlUmVzdG9yZX0+UmVzdG9yZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlTW9kYWxPcGVufT5EZWxldGU8L01lbnVJdGVtPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZG90fSBvbkNsaWNrPXtoYW5kbGVQb3BvdmVyT3Blbn0+XG4gICAgICAgICAgICA8SGlEb3RzSG9yaXpvbnRhbCAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdG9ySW5UcmFzaH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudHMgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgIHByb3BzLmhhbmRsZVNuYWNrYmFyKFxuICAgICAgICAgICAgICAgICdZb3UgY2FuIG5vdCB1cGRhdGUgYSBub3RlIGluIHRoZSBUcmFzaCcsXG4gICAgICAgICAgICAgICAgJ2Vycm9yJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIG9wZW49e21vZGFsT3Blbn1cbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1tb2RhbC10aXRsZVwiXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwic2ltcGxlLW1vZGFsLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgIDxoMiBpZD1cInNpbXBsZS1tb2RhbC10aXRsZVwiPkFyZSB5b3UgcmVhbGx5IHdhbnQgdG8gZGVsZXRlPzwvaDI+XG4gICAgICAgICAgICAgIDxwIGlkPVwic2ltcGxlLW1vZGFsLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgWW91IHdpbGwgcGVybWFuZW50bHkgZGVsZXRlIHRoaXMgbm90ZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWxldGV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2RhbENsb3NlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IGhhbmRsZVRpdGxlQ2hhbmdlKGUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgIGlkPVwiZG90LW1lbnVcIlxuICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlUG9wb3ZlckNsb3NlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVNb3ZlVG9UcmFzaH0+TW92ZSB0byB0cmFzaDwvTWVudUl0ZW0+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5kb3R9IG9uQ2xpY2s9e2hhbmRsZVBvcG92ZXJPcGVufT5cbiAgICAgICAgICAgIDxIaURvdHNIb3Jpem9udGFsIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHshIVJlYWN0UXVpbGwgJiYgaXNPcGVuICYmIChcbiAgICAgICAgICAgIDxSZWFjdFF1aWxsXG4gICAgICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnRzfVxuICAgICAgICAgICAgICBtb2R1bGVzPXttb2R1bGVzfVxuICAgICAgICAgICAgICBmb3JtYXRzPXtmb3JtYXRzfVxuICAgICAgICAgICAgICBib3VuZHM9eycuYXBwJ31cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdG9yfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/editor.tsx\n");

/***/ })

})
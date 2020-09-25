webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor.tsx":
/*!*******************************!*\
  !*** ./components/editor.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Menu */ \"./node_modules/@material-ui/core/esm/Menu/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/esm/Modal/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    title: {\n      outline: 'none',\n      width: '95%',\n      paddingLeft: '15px',\n      margin: '0px',\n      border: 'none',\n      backgroundColor: 'rgb(248,248,248)',\n      fontSize: '24px'\n    },\n    editor: {\n      width: '100%',\n      minWidth: '400px',\n      wordBreak: 'break-word',\n      paddingBottom: '10px',\n      '&:hover': {\n        backgroundColor: 'white'\n      }\n    },\n    editorInTrash: {\n      width: '100%',\n      minWidth: '600px',\n      wordBreak: 'break-word',\n      padding: '15px'\n    },\n    dot: {\n      position: 'absolute',\n      \"float\": 'right',\n      right: '20px',\n      cursor: 'pointer',\n      marginTop: '10px'\n    },\n    modal: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    paper: {\n      backgroundColor: 'rgb(222, 222, 222)',\n      boxShadow: theme.shadows[5],\n      padding: theme.spacing(1, 2, 2),\n      textAlign: 'center',\n      width: '350px',\n      borderRadius: '5px',\n      fontSize: '12px',\n      outline: 'none'\n    },\n    button: {\n      height: '30px',\n      margin: '10px 15px'\n    }\n  });\n});\nvar theme = 'snow';\nvar placeholder = \"What's in your mind?\";\nvar modules = {\n  toolbar: [[{\n    header: '1'\n  }, {\n    header: '2'\n  }, {\n    font: []\n  }, {\n    color: []\n  }], [{\n    size: []\n  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{\n    list: 'ordered'\n  }, {\n    list: 'bullet'\n  }, {\n    indent: '-1'\n  }, {\n    indent: '+1'\n  }], ['link', 'image', 'video'], ['clean']],\n  clipboard: {\n    matchVisual: false\n  }\n};\nvar formats = ['header', 'font', 'color', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image' // 'video',\n];\nfunction Editor(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  var ReactQuill = true ? __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\") : undefined;\n  var classes = useStyles();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(title),\n      title = _useState2[0],\n      setTitle = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isDelete = _useState3[0],\n      setIsDeleted = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(props.contents),\n      contents = _useState4[0],\n      setContents = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      lastNotebook = _useState5[0],\n      setLastNotebook = _useState5[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      anchorEl = _React$useState2[0],\n      setAnchorEl = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      modalOpen = _React$useState4[0],\n      setModalOpen = _React$useState4[1];\n\n  var handleModalOpen = function handleModalOpen() {\n    handlePopoverClose();\n    setModalOpen(true);\n  };\n\n  var handleModalClose = function handleModalClose() {\n    setModalOpen(false);\n  };\n\n  var handlePopoverOpen = function handlePopoverOpen(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handlePopoverClose = function handlePopoverClose() {\n    setAnchorEl(null);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setOpen(true);\n  }, []);\n\n  var handleChange = function handleChange(html) {\n    setContents(html);\n    var newNote = {\n      noteTitle: undefined,\n      note: html\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNoteId, newNote);\n  };\n\n  var getNote = function getNote(notebookId, noteId) {\n    var newContents = props.notebooks[notebookId].notes.filter(function (note) {\n      return note.id === noteId;\n    });\n    console.log(newContents);\n    setTitle(newContents[0].noteTitle);\n    setContents(newContents[0].note);\n    setIsDeleted(newContents[0].isDeleted);\n    setLastNotebook(newContents[0].lastNotebook);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    getNote(props.notebook, props.currentNoteId);\n  }, [props.notebook, props.currentNoteId]);\n\n  var handleTitleChange = function handleTitleChange(e) {\n    setTitle(e.target.value);\n    var newNote = {\n      noteTitle: e.target.value,\n      note: undefined\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNoteId, newNote);\n  };\n\n  var handleMoveToTrash = function handleMoveToTrash() {\n    props.moveNote(props.notebook, 'trash', props.currentNoteId);\n    handlePopoverClose();\n  };\n\n  var handleRestore = function handleRestore() {\n    props.moveNote('trash', props.lastNotebook, props.currentNoteId);\n    handlePopoverClose();\n  };\n\n  var handleDelete = function handleDelete() {\n    props.deleteNote('trash', props.currentNoteId);\n    handlePopoverClose();\n    handleModalClose();\n  };\n\n  console.log(title);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, props.isDeleted ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"span\", {\n    className: classes.title,\n    onClick: function onClick() {\n      return props.handleSnackbar('You can not update a note title in the Trash', 'error');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 199,\n      columnNumber: 11\n    }\n  }, props.title), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    id: \"dot-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handlePopoverClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 210,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleRestore,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 217,\n      columnNumber: 13\n    }\n  }, \"Restore\"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleModalOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 218,\n      columnNumber: 13\n    }\n  }, \"Delete\")), __jsx(\"span\", {\n    className: classes.dot,\n    onClick: handlePopoverOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 220,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__[\"HiDotsHorizontal\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 221,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: classes.editorInTrash,\n    dangerouslySetInnerHTML: {\n      __html: contents\n    },\n    onClick: function onClick() {\n      return props.handleSnackbar('You can not update a note in the Trash', 'error');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 223,\n      columnNumber: 11\n    }\n  }), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    open: modalOpen,\n    \"aria-labelledby\": \"simple-modal-title\",\n    \"aria-describedby\": \"simple-modal-description\",\n    className: classes.modal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 233,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 239,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    id: \"simple-modal-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 240,\n      columnNumber: 15\n    }\n  }, \"Are you really want to delete?\"), __jsx(\"p\", {\n    id: \"simple-modal-description\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 241,\n      columnNumber: 15\n    }\n  }, \"You will permanently delete this note.\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"secondary\",\n    onClick: handleDelete,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 244,\n      columnNumber: 15\n    }\n  }, \"Delete\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"default\",\n    onClick: handleModalClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 252,\n      columnNumber: 15\n    }\n  }, \"Cancel\")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"input\", {\n    value: title,\n    className: classes.title,\n    onChange: function onChange(e) {\n      return handleTitleChange(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 265,\n      columnNumber: 11\n    }\n  }), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    id: \"dot-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handlePopoverClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 272,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleMoveToTrash,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 279,\n      columnNumber: 13\n    }\n  }, \"Move to trash\")), __jsx(\"span\", {\n    className: classes.dot,\n    onClick: handlePopoverOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 281,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__[\"HiDotsHorizontal\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 282,\n      columnNumber: 13\n    }\n  })), !!ReactQuill && isOpen && __jsx(ReactQuill, {\n    theme: theme,\n    onChange: handleChange,\n    value: contents,\n    modules: modules,\n    formats: formats,\n    bounds: '.app',\n    placeholder: placeholder,\n    className: classes.editor,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 285,\n      columnNumber: 13\n    }\n  })));\n}\n\n_s(Editor, \"+IrX/aHJ+vBJVhx494KU2LAjS7E=\", false, function () {\n  return [useStyles];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3IudHN4Pzg1YWQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwidGl0bGUiLCJvdXRsaW5lIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiZWRpdG9yIiwibWluV2lkdGgiLCJ3b3JkQnJlYWsiLCJwYWRkaW5nQm90dG9tIiwiZWRpdG9ySW5UcmFzaCIsInBhZGRpbmciLCJkb3QiLCJwb3NpdGlvbiIsInJpZ2h0IiwiY3Vyc29yIiwibWFyZ2luVG9wIiwibW9kYWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFwZXIiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwic3BhY2luZyIsInRleHRBbGlnbiIsImJvcmRlclJhZGl1cyIsImJ1dHRvbiIsImhlaWdodCIsInBsYWNlaG9sZGVyIiwibW9kdWxlcyIsInRvb2xiYXIiLCJoZWFkZXIiLCJmb250IiwiY29sb3IiLCJzaXplIiwibGlzdCIsImluZGVudCIsImNsaXBib2FyZCIsIm1hdGNoVmlzdWFsIiwiZm9ybWF0cyIsIkVkaXRvciIsInByb3BzIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRPcGVuIiwiUmVhY3RRdWlsbCIsInJlcXVpcmUiLCJjbGFzc2VzIiwic2V0VGl0bGUiLCJpc0RlbGV0ZSIsInNldElzRGVsZXRlZCIsImNvbnRlbnRzIiwic2V0Q29udGVudHMiLCJsYXN0Tm90ZWJvb2siLCJzZXRMYXN0Tm90ZWJvb2siLCJSZWFjdCIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJoYW5kbGVNb2RhbE9wZW4iLCJoYW5kbGVQb3BvdmVyQ2xvc2UiLCJoYW5kbGVNb2RhbENsb3NlIiwiaGFuZGxlUG9wb3Zlck9wZW4iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJodG1sIiwibmV3Tm90ZSIsIm5vdGVUaXRsZSIsInVuZGVmaW5lZCIsIm5vdGUiLCJ1cGRhdGVOb3RlIiwibm90ZWJvb2tzIiwibm90ZWJvb2siLCJpZCIsImN1cnJlbnROb3RlSWQiLCJnZXROb3RlIiwibm90ZWJvb2tJZCIsIm5vdGVJZCIsIm5ld0NvbnRlbnRzIiwibm90ZXMiLCJmaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwiaXNEZWxldGVkIiwiaGFuZGxlVGl0bGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVNb3ZlVG9UcmFzaCIsIm1vdmVOb3RlIiwiaGFuZGxlUmVzdG9yZSIsImhhbmRsZURlbGV0ZSIsImRlbGV0ZU5vdGUiLCJoYW5kbGVTbmFja2JhciIsIkJvb2xlYW4iLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUVMQyxXQUFLLEVBQUUsS0FGRjtBQUdMQyxpQkFBVyxFQUFFLE1BSFI7QUFJTEMsWUFBTSxFQUFFLEtBSkg7QUFLTEMsWUFBTSxFQUFFLE1BTEg7QUFNTEMscUJBQWUsRUFBRSxrQkFOWjtBQU9MQyxjQUFRLEVBQUU7QUFQTCxLQURJO0FBVVhDLFVBQU0sRUFBRTtBQUNOTixXQUFLLEVBQUUsTUFERDtBQUVOTyxjQUFRLEVBQUUsT0FGSjtBQUdOQyxlQUFTLEVBQUUsWUFITDtBQUlOQyxtQkFBYSxFQUFFLE1BSlQ7QUFLTixpQkFBVztBQUNUTCx1QkFBZSxFQUFFO0FBRFI7QUFMTCxLQVZHO0FBbUJYTSxpQkFBYSxFQUFFO0FBQ2JWLFdBQUssRUFBRSxNQURNO0FBRWJPLGNBQVEsRUFBRSxP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QSxxQkFQRixDQVJGLEVBaUJFO0FBQU0sYUFBUyxFQUFFNUMsT0FBTyxDQUFDcEMsR0FBekI7QUFBOEIsV0FBTyxFQUFFb0QsaUJBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWpCRixFQW9CRyxDQUFDLENBQUNsQixVQUFGLElBQWdCRixNQUFoQixJQUNDLE1BQUMsVUFBRDtBQUNFLFNBQUssRUFBRWhELEtBRFQ7QUFFRSxZQUFRLEVBQUV3RSxZQUZaO0FBR0UsU0FBSyxFQUFFaEIsUUFIVDtBQUlFLFdBQU8sRUFBRXRCLE9BSlg7QUFLRSxXQUFPLEVBQUVVLE9BTFg7QUFNRSxVQUFNLEVBQUUsTUFOVjtBQU9FLGVBQVcsRUFBRVgsV0FQZjtBQVFFLGFBQVMsRUFBRW1CLE9BQU8sQ0FBQzFDLE1BUnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkosQ0FwRUosQ0FERjtBQXlHRDs7R0FwTXVCbUMsTTtVQUlOL0MsUzs7O0tBSk0rQyxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9lZGl0b3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEhpRG90c0hvcml6b250YWwgfSBmcm9tICdyZWFjdC1pY29ucy9oaSc7XG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWwnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IElOb3RlIGZyb20gJy4vaW50ZXJmYWNlcy9pbm90ZSc7XG5pbXBvcnQgSU5vdGVQcm9wcyBmcm9tICcuL2ludGVyZmFjZXMvaW5vdGVwcm9wcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICB0aXRsZToge1xuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgd2lkdGg6ICc5NSUnLFxuICAgICAgcGFkZGluZ0xlZnQ6ICcxNXB4JyxcbiAgICAgIG1hcmdpbjogJzBweCcsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDgsMjQ4LDI0OCknLFxuICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICB9LFxuICAgIGVkaXRvcjoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1pbldpZHRoOiAnNDAwcHgnLFxuICAgICAgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsXG4gICAgICBwYWRkaW5nQm90dG9tOiAnMTBweCcsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGVkaXRvckluVHJhc2g6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtaW5XaWR0aDogJzYwMHB4JyxcbiAgICAgIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxuICAgICAgcGFkZGluZzogJzE1cHgnLFxuICAgIH0sXG4gICAgZG90OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgcmlnaHQ6ICcyMHB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgbWFyZ2luVG9wOiAnMTBweCcsXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBwYXBlcjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIyMiwgMjIyLCAyMjIpJyxcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMiwgMiksXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgd2lkdGg6ICczNTBweCcsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICBtYXJnaW46ICcxMHB4IDE1cHgnLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCB0aGVtZSA9ICdzbm93JztcbmNvbnN0IHBsYWNlaG9sZGVyID0gYFdoYXQncyBpbiB5b3VyIG1pbmQ/YDtcbmNvbnN0IG1vZHVsZXMgPSB7XG4gIHRvb2xiYXI6IFtcbiAgICBbeyBoZWFkZXI6ICcxJyB9LCB7IGhlYWRlcjogJzInIH0sIHsgZm9udDogW10gfSwgeyBjb2xvcjogW10gfV0sXG4gICAgW3sgc2l6ZTogW10gfV0sXG4gICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJywgJ2Jsb2NrcXVvdGUnXSxcbiAgICBbXG4gICAgICB7IGxpc3Q6ICdvcmRlcmVkJyB9LFxuICAgICAgeyBsaXN0OiAnYnVsbGV0JyB9LFxuICAgICAgeyBpbmRlbnQ6ICctMScgfSxcbiAgICAgIHsgaW5kZW50OiAnKzEnIH0sXG4gICAgXSxcbiAgICBbJ2xpbmsnLCAnaW1hZ2UnLCAndmlkZW8nXSxcbiAgICBbJ2NsZWFuJ10sXG4gIF0sXG4gIGNsaXBib2FyZDoge1xuICAgIG1hdGNoVmlzdWFsOiBmYWxzZSxcbiAgfSxcbn07XG5jb25zdCBmb3JtYXRzID0gW1xuICAnaGVhZGVyJyxcbiAgJ2ZvbnQnLFxuICAnY29sb3InLFxuICAnc2l6ZScsXG4gICdib2xkJyxcbiAgJ2l0YWxpYycsXG4gICd1bmRlcmxpbmUnLFxuICAnc3RyaWtlJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnbGlzdCcsXG4gICdidWxsZXQnLFxuICAnaW5kZW50JyxcbiAgJ2xpbmsnLFxuICAnaW1hZ2UnLFxuICAvLyAndmlkZW8nLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yKHByb3BzOiBJTm90ZVByb3BzKSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBSZWFjdFF1aWxsID1cbiAgICB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyA/IHJlcXVpcmUoJ3JlYWN0LXF1aWxsJykgOiAoKSA9PiBmYWxzZTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlPHN0cmluZz4odGl0bGUpO1xuICBjb25zdCBbaXNEZWxldGUsIHNldElzRGVsZXRlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtjb250ZW50cywgc2V0Q29udGVudHNdID0gdXNlU3RhdGU8c3RyaW5nPihwcm9wcy5jb250ZW50cyk7XG4gIGNvbnN0IFtsYXN0Tm90ZWJvb2ssIHNldExhc3ROb3RlYm9va10gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZU1vZGFsT3BlbiA9ICgpID0+IHtcbiAgICBoYW5kbGVQb3BvdmVyQ2xvc2UoKTtcbiAgICBzZXRNb2RhbE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW9kYWxDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRNb2RhbE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBvcG92ZXJPcGVuID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBvcG92ZXJDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaHRtbDogc3RyaW5nKSA9PiB7XG4gICAgc2V0Q29udGVudHMoaHRtbCk7XG4gICAgY29uc3QgbmV3Tm90ZSA9IHtcbiAgICAgIG5vdGVUaXRsZTogdW5kZWZpbmVkLFxuICAgICAgbm90ZTogaHRtbCxcbiAgICB9O1xuICAgIHByb3BzLnVwZGF0ZU5vdGUoXG4gICAgICBwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLmlkLFxuICAgICAgcHJvcHMuY3VycmVudE5vdGVJZCxcbiAgICAgIG5ld05vdGVcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGdldE5vdGUgPSAobm90ZWJvb2tJZDogc3RyaW5nLCBub3RlSWQ6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IG5ld0NvbnRlbnRzID0gcHJvcHMubm90ZWJvb2tzW25vdGVib29rSWRdLm5vdGVzLmZpbHRlcihcbiAgICAgIChub3RlOiBJTm90ZSkgPT4gbm90ZS5pZCA9PT0gbm90ZUlkXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhuZXdDb250ZW50cyk7XG4gICAgc2V0VGl0bGUobmV3Q29udGVudHNbMF0ubm90ZVRpdGxlKTtcbiAgICBzZXRDb250ZW50cyhuZXdDb250ZW50c1swXS5ub3RlKTtcbiAgICBzZXRJc0RlbGV0ZWQobmV3Q29udGVudHNbMF0uaXNEZWxldGVkKTtcbiAgICBzZXRMYXN0Tm90ZWJvb2sobmV3Q29udGVudHNbMF0ubGFzdE5vdGVib29rKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE5vdGUocHJvcHMubm90ZWJvb2ssIHByb3BzLmN1cnJlbnROb3RlSWQpO1xuICB9LCBbcHJvcHMubm90ZWJvb2ssIHByb3BzLmN1cnJlbnROb3RlSWRdKTtcblxuICBjb25zdCBoYW5kbGVUaXRsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zdCBuZXdOb3RlID0ge1xuICAgICAgbm90ZVRpdGxlOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgIG5vdGU6IHVuZGVmaW5lZCxcbiAgICB9O1xuICAgIHByb3BzLnVwZGF0ZU5vdGUoXG4gICAgICBwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLmlkLFxuICAgICAgcHJvcHMuY3VycmVudE5vdGVJZCxcbiAgICAgIG5ld05vdGVcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdmVUb1RyYXNoID0gKCkgPT4ge1xuICAgIHByb3BzLm1vdmVOb3RlKHByb3BzLm5vdGVib29rLCAndHJhc2gnLCBwcm9wcy5jdXJyZW50Tm90ZUlkKTtcbiAgICBoYW5kbGVQb3BvdmVyQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZXN0b3JlID0gKCkgPT4ge1xuICAgIHByb3BzLm1vdmVOb3RlKCd0cmFzaCcsIHByb3BzLmxhc3ROb3RlYm9vaywgcHJvcHMuY3VycmVudE5vdGVJZCk7XG4gICAgaGFuZGxlUG9wb3ZlckNsb3NlKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xuICAgIHByb3BzLmRlbGV0ZU5vdGUoJ3RyYXNoJywgcHJvcHMuY3VycmVudE5vdGVJZCk7XG4gICAgaGFuZGxlUG9wb3ZlckNsb3NlKCk7XG4gICAgaGFuZGxlTW9kYWxDbG9zZSgpO1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKHRpdGxlKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Byb3BzLmlzRGVsZXRlZCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgcHJvcHMuaGFuZGxlU25hY2tiYXIoXG4gICAgICAgICAgICAgICAgJ1lvdSBjYW4gbm90IHVwZGF0ZSBhIG5vdGUgdGl0bGUgaW4gdGhlIFRyYXNoJyxcbiAgICAgICAgICAgICAgICAnZXJyb3InXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICBpZD1cImRvdC1tZW51XCJcbiAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZVBvcG92ZXJDbG9zZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlUmVzdG9yZX0+UmVzdG9yZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlTW9kYWxPcGVufT5EZWxldGU8L01lbnVJdGVtPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZG90fSBvbkNsaWNrPXtoYW5kbGVQb3BvdmVyT3Blbn0+XG4gICAgICAgICAgICA8SGlEb3RzSG9yaXpvbnRhbCAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdG9ySW5UcmFzaH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudHMgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgIHByb3BzLmhhbmRsZVNuYWNrYmFyKFxuICAgICAgICAgICAgICAgICdZb3UgY2FuIG5vdCB1cGRhdGUgYSBub3RlIGluIHRoZSBUcmFzaCcsXG4gICAgICAgICAgICAgICAgJ2Vycm9yJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIG9wZW49e21vZGFsT3Blbn1cbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1tb2RhbC10aXRsZVwiXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwic2ltcGxlLW1vZGFsLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgIDxoMiBpZD1cInNpbXBsZS1tb2RhbC10aXRsZVwiPkFyZSB5b3UgcmVhbGx5IHdhbnQgdG8gZGVsZXRlPzwvaDI+XG4gICAgICAgICAgICAgIDxwIGlkPVwic2ltcGxlLW1vZGFsLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgWW91IHdpbGwgcGVybWFuZW50bHkgZGVsZXRlIHRoaXMgbm90ZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWxldGV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2RhbENsb3NlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgaGFuZGxlVGl0bGVDaGFuZ2UoZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICBpZD1cImRvdC1tZW51XCJcbiAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZVBvcG92ZXJDbG9zZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlTW92ZVRvVHJhc2h9Pk1vdmUgdG8gdHJhc2g8L01lbnVJdGVtPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZG90fSBvbkNsaWNrPXtoYW5kbGVQb3BvdmVyT3Blbn0+XG4gICAgICAgICAgICA8SGlEb3RzSG9yaXpvbnRhbCAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7ISFSZWFjdFF1aWxsICYmIGlzT3BlbiAmJiAoXG4gICAgICAgICAgICA8UmVhY3RRdWlsbFxuICAgICAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50c31cbiAgICAgICAgICAgICAgbW9kdWxlcz17bW9kdWxlc31cbiAgICAgICAgICAgICAgZm9ybWF0cz17Zm9ybWF0c31cbiAgICAgICAgICAgICAgYm91bmRzPXsnLmFwcCd9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmVkaXRvcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/editor.tsx\n");

/***/ })

})
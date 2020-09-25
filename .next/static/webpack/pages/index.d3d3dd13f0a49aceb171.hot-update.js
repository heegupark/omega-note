webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor.tsx":
/*!*******************************!*\
  !*** ./components/editor.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Menu */ \"./node_modules/@material-ui/core/esm/Menu/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/esm/Modal/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    title: {\n      outline: 'none',\n      width: '95%',\n      paddingLeft: '15px',\n      margin: '0px',\n      border: 'none',\n      backgroundColor: 'rgb(248,248,248)',\n      fontSize: '24px'\n    },\n    editor: {\n      width: '100%',\n      minWidth: '400px',\n      wordBreak: 'break-word',\n      paddingBottom: '10px',\n      '&:hover': {\n        backgroundColor: 'white'\n      }\n    },\n    editorInTrash: {\n      width: '100%',\n      minWidth: '600px',\n      wordBreak: 'break-word',\n      padding: '15px'\n    },\n    dot: {\n      position: 'absolute',\n      \"float\": 'right',\n      right: '20px',\n      cursor: 'pointer',\n      marginTop: '10px'\n    },\n    modal: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    paper: {\n      backgroundColor: 'rgb(222, 222, 222)',\n      boxShadow: theme.shadows[5],\n      padding: theme.spacing(1, 2, 2),\n      textAlign: 'center',\n      width: '350px',\n      borderRadius: '5px',\n      fontSize: '12px',\n      outline: 'none'\n    },\n    button: {\n      height: '30px',\n      margin: '10px 15px'\n    }\n  });\n});\nvar theme = 'snow';\nvar placeholder = \"What's in your mind?\";\nvar modules = {\n  toolbar: [[{\n    header: '1'\n  }, {\n    header: '2'\n  }, {\n    font: []\n  }, {\n    color: []\n  }], [{\n    size: []\n  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{\n    list: 'ordered'\n  }, {\n    list: 'bullet'\n  }, {\n    indent: '-1'\n  }, {\n    indent: '+1'\n  }], ['link', 'image', 'video'], ['clean']],\n  clipboard: {\n    matchVisual: false\n  }\n};\nvar formats = ['header', 'font', 'color', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image' // 'video',\n];\nfunction Editor(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  var ReactQuill = true ? __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\") : undefined;\n  var classes = useStyles();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      title = _useState2[0],\n      setTitle = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isDelete = _useState3[0],\n      setIsDeleted = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      contents = _useState4[0],\n      setContents = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      lastNotebook = _useState5[0],\n      setLastNotebook = _useState5[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      anchorEl = _React$useState2[0],\n      setAnchorEl = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      modalOpen = _React$useState4[0],\n      setModalOpen = _React$useState4[1];\n\n  var handleModalOpen = function handleModalOpen() {\n    handlePopoverClose();\n    setModalOpen(true);\n  };\n\n  var handleModalClose = function handleModalClose() {\n    setModalOpen(false);\n  };\n\n  var handlePopoverOpen = function handlePopoverOpen(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handlePopoverClose = function handlePopoverClose() {\n    setAnchorEl(null);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setOpen(true);\n  }, []);\n\n  var handleChange = function handleChange(html) {\n    setContents(html);\n    var newNote = {\n      note: html\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  var getNote = function getNote(notebookId, noteId) {\n    var newContents = props.notebooks[notebookId].notes.filter(function (note) {\n      return note.id === noteId;\n    });\n    setTitle(newContents[0].noteTitle);\n    setContents(newContents[0].note);\n    setIsDeleted(newContents[0].isDeleted);\n    setLastNotebook(newContents[0].lastNotebook);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    getNote(props.notebook, props.currentNote);\n  }, [props.notebook, props.currentNote]);\n\n  var handleTitleChange = function handleTitleChange(e) {\n    setTitle(e.target.value);\n    var newNote = {\n      noteTitle: e.target.value\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  var handleMoveToTrash = function handleMoveToTrash() {\n    props.moveNote(props.notebook, 'trash', props.currentNote);\n    handlePopoverClose();\n  };\n\n  var handleRestore = function handleRestore() {\n    props.moveNote('trash', lastNotebook, props.currentNote);\n    handlePopoverClose();\n  };\n\n  var handleDelete = function handleDelete() {\n    props.deleteNote('trash', props.currentNote);\n    handlePopoverClose();\n    handleModalClose();\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, isDelete ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"span\", {\n    className: classes.title,\n    onClick: function onClick() {\n      return props.handleSnackbar('You can not update a note title in the Trash', 'error');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 202,\n      columnNumber: 11\n    }\n  }, title), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    id: \"dot-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handlePopoverClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 213,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleRestore,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 220,\n      columnNumber: 13\n    }\n  }, \"Restore\"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleModalOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 221,\n      columnNumber: 13\n    }\n  }, \"Delete\")), __jsx(\"span\", {\n    className: classes.dot,\n    onClick: handlePopoverOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 223,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__[\"HiDotsHorizontal\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 224,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: classes.editorInTrash,\n    dangerouslySetInnerHTML: {\n      __html: contents\n    },\n    onClick: function onClick() {\n      return props.handleSnackbar('You can not update a note in the Trash', 'error');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 226,\n      columnNumber: 11\n    }\n  }), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    open: modalOpen,\n    \"aria-labelledby\": \"simple-modal-title\",\n    \"aria-describedby\": \"simple-modal-description\",\n    className: classes.modal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 236,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 242,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    id: \"simple-modal-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 243,\n      columnNumber: 15\n    }\n  }, \"Are you really want to delete?\"), __jsx(\"p\", {\n    id: \"simple-modal-description\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 244,\n      columnNumber: 15\n    }\n  }, \"You will permanently delete this note.\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"secondary\",\n    onClick: handleDelete,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 247,\n      columnNumber: 15\n    }\n  }, \"Delete\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"default\",\n    onClick: handleModalClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 255,\n      columnNumber: 15\n    }\n  }, \"Cancel\")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"input\", {\n    value: title,\n    className: classes.title,\n    onChange: function onChange(e) {\n      return handleTitleChange(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 268,\n      columnNumber: 11\n    }\n  }), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    id: \"dot-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handlePopoverClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 273,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleMoveToTrash,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 280,\n      columnNumber: 13\n    }\n  }, \"Move to trash\")), __jsx(\"span\", {\n    className: classes.dot,\n    onClick: handlePopoverOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 282,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__[\"HiDotsHorizontal\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 283,\n      columnNumber: 13\n    }\n  })), !!ReactQuill && isOpen && __jsx(ReactQuill, {\n    theme: theme,\n    onChange: handleChange,\n    value: contents,\n    modules: modules,\n    formats: formats,\n    bounds: '.app',\n    placeholder: placeholder,\n    className: classes.editor,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 286,\n      columnNumber: 13\n    }\n  })));\n}\n\n_s(Editor, \"C0844VO1Y+ZPFKms35FDgLEbuG8=\", false, function () {\n  return [useStyles];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3IudHN4Pzg1YWQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwidGl0bGUiLCJvdXRsaW5lIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiZWRpdG9yIiwibWluV2lkdGgiLCJ3b3JkQnJlYWsiLCJwYWRkaW5nQm90dG9tIiwiZWRpdG9ySW5UcmFzaCIsInBhZGRpbmciLCJkb3QiLCJwb3NpdGlvbiIsInJpZ2h0IiwiY3Vyc29yIiwibWFyZ2luVG9wIiwibW9kYWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFwZXIiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwic3BhY2luZyIsInRleHRBbGlnbiIsImJvcmRlclJhZGl1cyIsImJ1dHRvbiIsImhlaWdodCIsInBsYWNlaG9sZGVyIiwibW9kdWxlcyIsInRvb2xiYXIiLCJoZWFkZXIiLCJmb250IiwiY29sb3IiLCJzaXplIiwibGlzdCIsImluZGVudCIsImNsaXBib2FyZCIsIm1hdGNoVmlzdWFsIiwiZm9ybWF0cyIsIkVkaXRvciIsInByb3BzIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRPcGVuIiwiUmVhY3RRdWlsbCIsInJlcXVpcmUiLCJjbGFzc2VzIiwic2V0VGl0bGUiLCJpc0RlbGV0ZSIsInNldElzRGVsZXRlZCIsImNvbnRlbnRzIiwic2V0Q29udGVudHMiLCJsYXN0Tm90ZWJvb2siLCJzZXRMYXN0Tm90ZWJvb2siLCJSZWFjdCIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJoYW5kbGVNb2RhbE9wZW4iLCJoYW5kbGVQb3BvdmVyQ2xvc2UiLCJoYW5kbGVNb2RhbENsb3NlIiwiaGFuZGxlUG9wb3Zlck9wZW4iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJodG1sIiwibmV3Tm90ZSIsIm5vdGUiLCJ1cGRhdGVOb3RlIiwibm90ZWJvb2tzIiwibm90ZWJvb2siLCJpZCIsImN1cnJlbnROb3RlIiwiZ2V0Tm90ZSIsIm5vdGVib29rSWQiLCJub3RlSWQiLCJuZXdDb250ZW50cyIsIm5vdGVzIiwiZmlsdGVyIiwibm90ZVRpdGxlIiwiaXNEZWxldGVkIiwiaGFuZGxlVGl0bGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVNb3ZlVG9UcmFzaCIsIm1vdmVOb3RlIiwiaGFuZGxlUmVzdG9yZSIsImhhbmRsZURlbGV0ZSIsImRlbGV0ZU5vdGUiLCJoYW5kbGVTbmFja2JhciIsIkJvb2xlYW4iLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUVMQyxXQUFLLEVBQUUsS0FGRjtBQUdMQyxpQkFBVyxFQUFFLE1BSFI7QUFJTEMsWUFBTSxFQUFFLEtBSkg7QUFLTEMsWUFBTSxFQUFFLE1BTEg7QUFNTEMscUJBQWUsRUFBRSxrQkFOWjtBQU9MQyxjQUFRLEVBQUU7QUFQTCxLQURJO0FBVVhDLFVBQU0sRUFBRTtBQUNOTixXQUFLLEVBQUUsTUFERDtBQUVOTyxjQUFRLEVBQUUsT0FGSjtBQUdOQyxlQUFTLEVBQUUsWUFITDtBQUlOQyxtQkFBYSxFQUFFLE1BSlQ7QUFLTixpQkFBVztBQUNUTCx1QkFBZSxFQUFFO0FBRFI7QUFMTCxLQVZHO0FBbUJYTSxpQkFBYSxFQUFFO0FBQ2JWLFdBQUssRUFBRSxNQURNO0FBRWJPLGNBQVEsRUFBRSxPQUZHO0FBR2JDLGVBQVMsRUFBRSxZQUhFO0FBSWJH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QUFGLElBQWdCRixNQUFoQixJQUNDLE1BQUMsVUFBRDtBQUNFLFNBQUssRUFBRWhELEtBRFQ7QUFFRSxZQUFRLEVBQUV3RSxZQUZaO0FBR0UsU0FBSyxFQUFFaEIsUUFIVDtBQUlFLFdBQU8sRUFBRXRCLE9BSlg7QUFLRSxXQUFPLEVBQUVVLE9BTFg7QUFNRSxVQUFNLEVBQUUsTUFOVjtBQU9FLGVBQVcsRUFBRVgsV0FQZjtBQVFFLGFBQVMsRUFBRW1CLE9BQU8sQ0FBQzFDLE1BUnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkosQ0FwRUosQ0FERjtBQXVHRDs7R0E5THVCbUMsTTtVQUlOL0MsUzs7O0tBSk0rQyxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9lZGl0b3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEhpRG90c0hvcml6b250YWwgfSBmcm9tICdyZWFjdC1pY29ucy9oaSc7XG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWwnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgdGl0bGU6IHtcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIHdpZHRoOiAnOTUlJyxcbiAgICAgIHBhZGRpbmdMZWZ0OiAnMTVweCcsXG4gICAgICBtYXJnaW46ICcwcHgnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQ4LDI0OCwyNDgpJyxcbiAgICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgfSxcbiAgICBlZGl0b3I6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtaW5XaWR0aDogJzQwMHB4JyxcbiAgICAgIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxuICAgICAgcGFkZGluZ0JvdHRvbTogJzEwcHgnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBlZGl0b3JJblRyYXNoOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWluV2lkdGg6ICc2MDBweCcsXG4gICAgICB3b3JkQnJlYWs6ICdicmVhay13b3JkJyxcbiAgICAgIHBhZGRpbmc6ICcxNXB4JyxcbiAgICB9LFxuICAgIGRvdDoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgIHJpZ2h0OiAnMjBweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIG1hcmdpblRvcDogJzEwcHgnLFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgcGFwZXI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMjIsIDIyMiwgMjIyKScsXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDIsIDIpLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMzUwcHgnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGhlaWdodDogJzMwcHgnLFxuICAgICAgbWFyZ2luOiAnMTBweCAxNXB4JyxcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgdGhlbWUgPSAnc25vdyc7XG5jb25zdCBwbGFjZWhvbGRlciA9IGBXaGF0J3MgaW4geW91ciBtaW5kP2A7XG5jb25zdCBtb2R1bGVzID0ge1xuICB0b29sYmFyOiBbXG4gICAgW3sgaGVhZGVyOiAnMScgfSwgeyBoZWFkZXI6ICcyJyB9LCB7IGZvbnQ6IFtdIH0sIHsgY29sb3I6IFtdIH1dLFxuICAgIFt7IHNpemU6IFtdIH1dLFxuICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZScsICdibG9ja3F1b3RlJ10sXG4gICAgW1xuICAgICAgeyBsaXN0OiAnb3JkZXJlZCcgfSxcbiAgICAgIHsgbGlzdDogJ2J1bGxldCcgfSxcbiAgICAgIHsgaW5kZW50OiAnLTEnIH0sXG4gICAgICB7IGluZGVudDogJysxJyB9LFxuICAgIF0sXG4gICAgWydsaW5rJywgJ2ltYWdlJywgJ3ZpZGVvJ10sXG4gICAgWydjbGVhbiddLFxuICBdLFxuICBjbGlwYm9hcmQ6IHtcbiAgICBtYXRjaFZpc3VhbDogZmFsc2UsXG4gIH0sXG59O1xuY29uc3QgZm9ybWF0cyA9IFtcbiAgJ2hlYWRlcicsXG4gICdmb250JyxcbiAgJ2NvbG9yJyxcbiAgJ3NpemUnLFxuICAnYm9sZCcsXG4gICdpdGFsaWMnLFxuICAndW5kZXJsaW5lJyxcbiAgJ3N0cmlrZScsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2xpc3QnLFxuICAnYnVsbGV0JyxcbiAgJ2luZGVudCcsXG4gICdsaW5rJyxcbiAgJ2ltYWdlJyxcbiAgLy8gJ3ZpZGVvJyxcbl07XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5vdGVib29rczogb2JqZWN0O1xuICBub3RlYm9vazogc3RyaW5nO1xuICBjdXJyZW50Tm90ZTogc3RyaW5nO1xuICB1cGRhdGVOb3RlOiAobm90ZWJvb2tJZDogc3RyaW5nLCBub3RlSWQ6IHN0cmluZywgbm90ZTogSFRNTEVsZW1lbnQpID0+IHZvaWQ7XG4gIG1vdmVOb3RlOiAob3JpZ2luOiBzdHJpbmcsIGRlc3RpbmF0aW9uOiBzdHJpbmcsIG5vdGVJZDogc3RyaW5nKSA9PiB2b2lkO1xuICBkZWxldGVOb3RlOiAob3JpZ2luOiBzdHJpbmcsIG5vdGVJZDogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0b3IocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBSZWFjdFF1aWxsID1cbiAgICB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyA/IHJlcXVpcmUoJ3JlYWN0LXF1aWxsJykgOiAoKSA9PiBmYWxzZTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlPGFueSB8IEhUTUxFbGVtZW50PignJyk7XG4gIGNvbnN0IFtpc0RlbGV0ZSwgc2V0SXNEZWxldGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4gfCBIVE1MRWxlbWVudD4oZmFsc2UpO1xuICBjb25zdCBbY29udGVudHMsIHNldENvbnRlbnRzXSA9IHVzZVN0YXRlPGFueSB8IEhUTUxFbGVtZW50PignJyk7XG4gIGNvbnN0IFtsYXN0Tm90ZWJvb2ssIHNldExhc3ROb3RlYm9va10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBIVE1MRWxlbWVudD4oJycpO1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlTW9kYWxPcGVuID0gKCkgPT4ge1xuICAgIGhhbmRsZVBvcG92ZXJDbG9zZSgpO1xuICAgIHNldE1vZGFsT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb2RhbENsb3NlID0gKCkgPT4ge1xuICAgIHNldE1vZGFsT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUG9wb3Zlck9wZW4gPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUG9wb3ZlckNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChodG1sOiBhbnkpID0+IHtcbiAgICBzZXRDb250ZW50cyhodG1sKTtcbiAgICBjb25zdCBuZXdOb3RlID0ge1xuICAgICAgbm90ZTogaHRtbCxcbiAgICB9O1xuICAgIHByb3BzLnVwZGF0ZU5vdGUoXG4gICAgICBwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLmlkLFxuICAgICAgcHJvcHMuY3VycmVudE5vdGUsXG4gICAgICBuZXdOb3RlXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBnZXROb3RlID0gKG5vdGVib29rSWQ6IHN0cmluZywgbm90ZUlkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBuZXdDb250ZW50cyA9IHByb3BzLm5vdGVib29rc1tub3RlYm9va0lkXS5ub3Rlcy5maWx0ZXIoXG4gICAgICAobm90ZTogYW55KSA9PiBub3RlLmlkID09PSBub3RlSWRcbiAgICApO1xuICAgIHNldFRpdGxlKG5ld0NvbnRlbnRzWzBdLm5vdGVUaXRsZSk7XG4gICAgc2V0Q29udGVudHMobmV3Q29udGVudHNbMF0ubm90ZSk7XG4gICAgc2V0SXNEZWxldGVkKG5ld0NvbnRlbnRzWzBdLmlzRGVsZXRlZCk7XG4gICAgc2V0TGFzdE5vdGVib29rKG5ld0NvbnRlbnRzWzBdLmxhc3ROb3RlYm9vayk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXROb3RlKHByb3BzLm5vdGVib29rLCBwcm9wcy5jdXJyZW50Tm90ZSk7XG4gIH0sIFtwcm9wcy5ub3RlYm9vaywgcHJvcHMuY3VycmVudE5vdGVdKTtcblxuICBjb25zdCBoYW5kbGVUaXRsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zdCBuZXdOb3RlID0ge1xuICAgICAgbm90ZVRpdGxlOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9O1xuICAgIHByb3BzLnVwZGF0ZU5vdGUoXG4gICAgICBwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLmlkLFxuICAgICAgcHJvcHMuY3VycmVudE5vdGUsXG4gICAgICBuZXdOb3RlXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3ZlVG9UcmFzaCA9ICgpID0+IHtcbiAgICBwcm9wcy5tb3ZlTm90ZShwcm9wcy5ub3RlYm9vaywgJ3RyYXNoJywgcHJvcHMuY3VycmVudE5vdGUpO1xuICAgIGhhbmRsZVBvcG92ZXJDbG9zZSgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlc3RvcmUgPSAoKSA9PiB7XG4gICAgcHJvcHMubW92ZU5vdGUoJ3RyYXNoJywgbGFzdE5vdGVib29rLCBwcm9wcy5jdXJyZW50Tm90ZSk7XG4gICAgaGFuZGxlUG9wb3ZlckNsb3NlKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xuICAgIHByb3BzLmRlbGV0ZU5vdGUoJ3RyYXNoJywgcHJvcHMuY3VycmVudE5vdGUpO1xuICAgIGhhbmRsZVBvcG92ZXJDbG9zZSgpO1xuICAgIGhhbmRsZU1vZGFsQ2xvc2UoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNEZWxldGUgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgIHByb3BzLmhhbmRsZVNuYWNrYmFyKFxuICAgICAgICAgICAgICAgICdZb3UgY2FuIG5vdCB1cGRhdGUgYSBub3RlIHRpdGxlIGluIHRoZSBUcmFzaCcsXG4gICAgICAgICAgICAgICAgJ2Vycm9yJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgaWQ9XCJkb3QtbWVudVwiXG4gICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVQb3BvdmVyQ2xvc2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZVJlc3RvcmV9PlJlc3RvcmU8L01lbnVJdGVtPlxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZU1vZGFsT3Blbn0+RGVsZXRlPC9NZW51SXRlbT5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmRvdH0gb25DbGljaz17aGFuZGxlUG9wb3Zlck9wZW59PlxuICAgICAgICAgICAgPEhpRG90c0hvcml6b250YWwgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmVkaXRvckluVHJhc2h9XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnRzIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICBwcm9wcy5oYW5kbGVTbmFja2JhcihcbiAgICAgICAgICAgICAgICAnWW91IGNhbiBub3QgdXBkYXRlIGEgbm90ZSBpbiB0aGUgVHJhc2gnLFxuICAgICAgICAgICAgICAgICdlcnJvcidcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBvcGVuPXttb2RhbE9wZW59XG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtbW9kYWwtdGl0bGVcIlxuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInNpbXBsZS1tb2RhbC1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgICA8aDIgaWQ9XCJzaW1wbGUtbW9kYWwtdGl0bGVcIj5BcmUgeW91IHJlYWxseSB3YW50IHRvIGRlbGV0ZT88L2gyPlxuICAgICAgICAgICAgICA8cCBpZD1cInNpbXBsZS1tb2RhbC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIFlvdSB3aWxsIHBlcm1hbmVudGx5IGRlbGV0ZSB0aGlzIG5vdGUuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGVsZXRlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTW9kYWxDbG9zZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiBoYW5kbGVUaXRsZUNoYW5nZShlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICBpZD1cImRvdC1tZW51XCJcbiAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZVBvcG92ZXJDbG9zZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlTW92ZVRvVHJhc2h9Pk1vdmUgdG8gdHJhc2g8L01lbnVJdGVtPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZG90fSBvbkNsaWNrPXtoYW5kbGVQb3BvdmVyT3Blbn0+XG4gICAgICAgICAgICA8SGlEb3RzSG9yaXpvbnRhbCAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7ISFSZWFjdFF1aWxsICYmIGlzT3BlbiAmJiAoXG4gICAgICAgICAgICA8UmVhY3RRdWlsbFxuICAgICAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50c31cbiAgICAgICAgICAgICAgbW9kdWxlcz17bW9kdWxlc31cbiAgICAgICAgICAgICAgZm9ybWF0cz17Zm9ybWF0c31cbiAgICAgICAgICAgICAgYm91bmRzPXsnLmFwcCd9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmVkaXRvcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/editor.tsx\n");

/***/ })

})
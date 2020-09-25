webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor.tsx":
/*!*******************************!*\
  !*** ./components/editor.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Menu */ \"./node_modules/@material-ui/core/esm/Menu/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/esm/Modal/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    title: {\n      outline: 'none',\n      width: '95%',\n      paddingLeft: '15px',\n      margin: '0px',\n      border: 'none',\n      backgroundColor: 'rgb(248,248,248)',\n      fontSize: '24px'\n    },\n    editor: {\n      width: '100%',\n      minWidth: '400px',\n      wordBreak: 'break-word',\n      paddingBottom: '10px',\n      '&:hover': {\n        backgroundColor: 'white'\n      }\n    },\n    editorInTrash: {\n      width: '100%',\n      minWidth: '600px',\n      wordBreak: 'break-word',\n      padding: '15px'\n    },\n    dot: {\n      position: 'absolute',\n      \"float\": 'right',\n      right: '20px',\n      cursor: 'pointer',\n      marginTop: '10px'\n    },\n    modal: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    paper: {\n      backgroundColor: 'rgb(222, 222, 222)',\n      boxShadow: theme.shadows[5],\n      padding: theme.spacing(1, 2, 2),\n      textAlign: 'center',\n      width: '350px',\n      borderRadius: '5px',\n      fontSize: '12px',\n      outline: 'none'\n    },\n    button: {\n      height: '30px',\n      margin: '10px 15px'\n    }\n  });\n});\nvar theme = 'snow';\nvar placeholder = \"What's in your mind?\";\nvar modules = {\n  toolbar: [[{\n    header: '1'\n  }, {\n    header: '2'\n  }, {\n    font: []\n  }, {\n    color: []\n  }], [{\n    size: []\n  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{\n    list: 'ordered'\n  }, {\n    list: 'bullet'\n  }, {\n    indent: '-1'\n  }, {\n    indent: '+1'\n  }], ['link', 'image', 'video'], ['clean']],\n  clipboard: {\n    matchVisual: false\n  }\n};\nvar formats = ['header', 'font', 'color', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image' // 'video',\n];\nfunction Editor(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  var ReactQuill = true ? __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\") : undefined;\n  var classes = useStyles();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(props.title),\n      title = _useState2[0],\n      setTitle = _useState2[1]; // const [isDelete, setIsDeleted] = useState<boolean>(false);\n\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(props.contents),\n      contents = _useState3[0],\n      setContents = _useState3[1]; // const [lastNotebook, setLastNotebook] = useState<string>('');\n\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      anchorEl = _React$useState2[0],\n      setAnchorEl = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      modalOpen = _React$useState4[0],\n      setModalOpen = _React$useState4[1];\n\n  var handleModalOpen = function handleModalOpen() {\n    handlePopoverClose();\n    setModalOpen(true);\n  };\n\n  var handleModalClose = function handleModalClose() {\n    setModalOpen(false);\n  };\n\n  var handlePopoverOpen = function handlePopoverOpen(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handlePopoverClose = function handlePopoverClose() {\n    setAnchorEl(null);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setOpen(true);\n  }, []);\n\n  var handleChange = function handleChange(html) {\n    setContents(html);\n    var newNote = {\n      noteTitle: undefined,\n      note: html\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNoteId, newNote);\n  }; // const getNote = (notebookId: string, noteId: string | undefined) => {\n  //   const newContents = props.notebooks[notebookId].notes.filter(\n  //     (note: INote) => note.id === noteId\n  //   );\n  //   console.log(newContents);\n  //   setTitle(newContents[0].noteTitle);\n  //   setContents(newContents[0].note);\n  //   setIsDeleted(newContents[0].isDeleted);\n  //   setLastNotebook(newContents[0].lastNotebook);\n  // };\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setTitle(props.title);\n    setContents(props.content);\n  }, [props.notebook, props.currentNoteId]);\n\n  var handleTitleChange = function handleTitleChange(e) {\n    setTitle(e.target.value);\n    var newNote = {\n      noteTitle: e.target.value,\n      note: undefined\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNoteId, newNote);\n  };\n\n  var handleMoveToTrash = function handleMoveToTrash() {\n    props.moveNote(props.notebook, 'trash', props.currentNoteId);\n    handlePopoverClose();\n  };\n\n  var handleRestore = function handleRestore() {\n    props.moveNote('trash', props.lastNotebook, props.currentNoteId);\n    handlePopoverClose();\n  };\n\n  var handleDelete = function handleDelete() {\n    props.deleteNote('trash', props.currentNoteId);\n    handlePopoverClose();\n    handleModalClose();\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, props.isDeleted ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"span\", {\n    className: classes.title,\n    onClick: function onClick() {\n      return props.handleSnackbar('You can not update a note title in the Trash', 'error');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 201,\n      columnNumber: 11\n    }\n  }, props.title), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    id: \"dot-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handlePopoverClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 212,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleRestore,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 219,\n      columnNumber: 13\n    }\n  }, \"Restore\"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleModalOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 220,\n      columnNumber: 13\n    }\n  }, \"Delete\")), __jsx(\"span\", {\n    className: classes.dot,\n    onClick: handlePopoverOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 222,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__[\"HiDotsHorizontal\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 223,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: classes.editorInTrash,\n    dangerouslySetInnerHTML: {\n      __html: contents\n    },\n    onClick: function onClick() {\n      return props.handleSnackbar('You can not update a note in the Trash', 'error');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 225,\n      columnNumber: 11\n    }\n  }), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    open: modalOpen,\n    \"aria-labelledby\": \"simple-modal-title\",\n    \"aria-describedby\": \"simple-modal-description\",\n    className: classes.modal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 235,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 241,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    id: \"simple-modal-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 242,\n      columnNumber: 15\n    }\n  }, \"Are you really want to delete?\"), __jsx(\"p\", {\n    id: \"simple-modal-description\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 243,\n      columnNumber: 15\n    }\n  }, \"You will permanently delete this note.\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"secondary\",\n    onClick: handleDelete,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 246,\n      columnNumber: 15\n    }\n  }, \"Delete\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"default\",\n    onClick: handleModalClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 254,\n      columnNumber: 15\n    }\n  }, \"Cancel\")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"input\", {\n    value: title,\n    className: classes.title,\n    onChange: function onChange(event) {\n      return handleTitleChange(event);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 267,\n      columnNumber: 11\n    }\n  }), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    id: \"dot-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handlePopoverClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 274,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleMoveToTrash,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 281,\n      columnNumber: 13\n    }\n  }, \"Move to trash\")), __jsx(\"span\", {\n    className: classes.dot,\n    onClick: handlePopoverOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 283,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__[\"HiDotsHorizontal\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 284,\n      columnNumber: 13\n    }\n  })), !!ReactQuill && isOpen && __jsx(ReactQuill, {\n    theme: theme,\n    onChange: handleChange,\n    value: contents,\n    modules: modules,\n    formats: formats,\n    bounds: '.app',\n    placeholder: placeholder,\n    className: classes.editor,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 287,\n      columnNumber: 13\n    }\n  })));\n}\n\n_s(Editor, \"U+4QjIobIdVyihEjwT6BhbjoxGA=\", false, function () {\n  return [useStyles];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3IudHN4Pzg1YWQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwidGl0bGUiLCJvdXRsaW5lIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiZWRpdG9yIiwibWluV2lkdGgiLCJ3b3JkQnJlYWsiLCJwYWRkaW5nQm90dG9tIiwiZWRpdG9ySW5UcmFzaCIsInBhZGRpbmciLCJkb3QiLCJwb3NpdGlvbiIsInJpZ2h0IiwiY3Vyc29yIiwibWFyZ2luVG9wIiwibW9kYWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFwZXIiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwic3BhY2luZyIsInRleHRBbGlnbiIsImJvcmRlclJhZGl1cyIsImJ1dHRvbiIsImhlaWdodCIsInBsYWNlaG9sZGVyIiwibW9kdWxlcyIsInRvb2xiYXIiLCJoZWFkZXIiLCJmb250IiwiY29sb3IiLCJzaXplIiwibGlzdCIsImluZGVudCIsImNsaXBib2FyZCIsIm1hdGNoVmlzdWFsIiwiZm9ybWF0cyIsIkVkaXRvciIsInByb3BzIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRPcGVuIiwiUmVhY3RRdWlsbCIsInJlcXVpcmUiLCJjbGFzc2VzIiwic2V0VGl0bGUiLCJjb250ZW50cyIsInNldENvbnRlbnRzIiwiUmVhY3QiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwiaGFuZGxlTW9kYWxPcGVuIiwiaGFuZGxlUG9wb3ZlckNsb3NlIiwiaGFuZGxlTW9kYWxDbG9zZSIsImhhbmRsZVBvcG92ZXJPcGVuIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiaHRtbCIsIm5ld05vdGUiLCJub3RlVGl0bGUiLCJ1bmRlZmluZWQiLCJub3RlIiwidXBkYXRlTm90ZSIsIm5vdGVib29rcyIsIm5vdGVib29rIiwiaWQiLCJjdXJyZW50Tm90ZUlkIiwiY29udGVudCIsImhhbmRsZVRpdGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlTW92ZVRvVHJhc2giLCJtb3ZlTm90ZSIsImhhbmRsZVJlc3RvcmUiLCJsYXN0Tm90ZWJvb2siLCJoYW5kbGVEZWxldGUiLCJkZWxldGVOb3RlIiwiaXNEZWxldGVkIiwiaGFuZGxlU25hY2tiYXIiLCJCb29sZWFuIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEMsV0FBSyxFQUFFLEtBRkY7QUFHTEMsaUJBQVcsRUFBRSxNQUhSO0FBSUxDLFlBQU0sRUFBRSxLQUpIO0FBS0xDLFlBQU0sRUFBRSxNQUxIO0FBTUxDLHFCQUFlLEVBQUUsa0JBTlo7QUFPTEMsY0FBUSxFQUFFO0FBUEwsS0FESTtBQVVYQyxVQUFNLEVBQUU7QUFDTk4sV0FBSyxFQUFFLE1BREQ7QUFFTk8sY0FBUSxFQUFFLE9BRko7QUFHTkMsZUFBUyxFQUFFLFlBSEw7QUFJTkMsbUJBQWEsRUFBRSxNQUpUO0FBS04saUJBQVc7QUFDVEwsdUJBQWUsRUFBRTtBQURSO0FBTEwsS0FWRztBQW1CWE0saUJBQWEsRUFBRTtBQUNiVixXQUFLLEVBQUUsTUFETTtBQUViTyxjQUFRLEVBQUUsT0FGRztBQUdiQyxlQUFTLEVBQUUsWUFIRTtBQUliRyxhQUFPLEVBQUU7QUFKSSxLQW5CSjtBQXlCWEMsT0FBRyxFQUFFO0FBQ0hDLGNBQVEsRUFBRSxVQURQO0FBRUgsZUFBTyxPQUZKO0FBR0hDLFdB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QUFDRSxNQUFFLEVBQUMsVUFETDtBQUVFLFlBQVEsRUFBRVIsUUFGWjtBQUdFLGVBQVcsTUFIYjtBQUlFLFFBQUksRUFBRW1DLE9BQU8sQ0FBQ25DLFFBQUQsQ0FKZjtBQUtFLFdBQU8sRUFBRUssa0JBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FLE1BQUMsa0VBQUQ7QUFBVSxXQUFPLEVBQUVzQixpQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixDQVJGLEVBaUJFO0FBQU0sYUFBUyxFQUFFaEMsT0FBTyxDQUFDcEMsR0FBekI7QUFBOEIsV0FBTyxFQUFFZ0QsaUJBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWpCRixFQW9CRyxDQUFDLENBQUNkLFVBQUYsSUFBZ0JGLE1BQWhCLElBQ0MsTUFBQyxVQUFEO0FBQ0UsU0FBSyxFQUFFaEQsS0FEVDtBQUVFLFlBQVEsRUFBRW9FLFlBRlo7QUFHRSxTQUFLLEVBQUVkLFFBSFQ7QUFJRSxXQUFPLEVBQUVwQixPQUpYO0FBS0UsV0FBTyxFQUFFVSxPQUxYO0FBTUUsVUFBTSxFQUFFLE1BTlY7QUFPRSxlQUFXLEVBQUVYLFdBUGY7QUFRRSxhQUFTLEVBQUVtQixPQUFPLENBQUMxQyxNQVJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJKLENBcEVKLENBREY7QUF5R0Q7O0dBdE11Qm1DLE07VUFJTi9DLFM7OztLQUpNK0MsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZWRpdG9yLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBIaURvdHNIb3Jpem9udGFsIH0gZnJvbSAncmVhY3QtaWNvbnMvaGknO1xuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IE1vZGFsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01vZGFsJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJTm90ZSBmcm9tICcuL2ludGVyZmFjZXMvaW5vdGUnO1xuaW1wb3J0IElFZGl0b3JQcm9wcyBmcm9tICcuL2ludGVyZmFjZXMvaWVkaXRvcnByb3BzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHRpdGxlOiB7XG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICB3aWR0aDogJzk1JScsXG4gICAgICBwYWRkaW5nTGVmdDogJzE1cHgnLFxuICAgICAgbWFyZ2luOiAnMHB4JyxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0OCwyNDgsMjQ4KScsXG4gICAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgIH0sXG4gICAgZWRpdG9yOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWluV2lkdGg6ICc0MDBweCcsXG4gICAgICB3b3JkQnJlYWs6ICdicmVhay13b3JkJyxcbiAgICAgIHBhZGRpbmdCb3R0b206ICcxMHB4JyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZWRpdG9ySW5UcmFzaDoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1pbldpZHRoOiAnNjAwcHgnLFxuICAgICAgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsXG4gICAgICBwYWRkaW5nOiAnMTVweCcsXG4gICAgfSxcbiAgICBkb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICByaWdodDogJzIwcHgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBtYXJnaW5Ub3A6ICcxMHB4JyxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIHBhcGVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjIyLCAyMjIsIDIyMiknLFxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAyLCAyKSxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogJzM1MHB4JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICAgIG1hcmdpbjogJzEwcHggMTVweCcsXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IHRoZW1lID0gJ3Nub3cnO1xuY29uc3QgcGxhY2Vob2xkZXIgPSBgV2hhdCdzIGluIHlvdXIgbWluZD9gO1xuY29uc3QgbW9kdWxlcyA9IHtcbiAgdG9vbGJhcjogW1xuICAgIFt7IGhlYWRlcjogJzEnIH0sIHsgaGVhZGVyOiAnMicgfSwgeyBmb250OiBbXSB9LCB7IGNvbG9yOiBbXSB9XSxcbiAgICBbeyBzaXplOiBbXSB9XSxcbiAgICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnLCAnYmxvY2txdW90ZSddLFxuICAgIFtcbiAgICAgIHsgbGlzdDogJ29yZGVyZWQnIH0sXG4gICAgICB7IGxpc3Q6ICdidWxsZXQnIH0sXG4gICAgICB7IGluZGVudDogJy0xJyB9LFxuICAgICAgeyBpbmRlbnQ6ICcrMScgfSxcbiAgICBdLFxuICAgIFsnbGluaycsICdpbWFnZScsICd2aWRlbyddLFxuICAgIFsnY2xlYW4nXSxcbiAgXSxcbiAgY2xpcGJvYXJkOiB7XG4gICAgbWF0Y2hWaXN1YWw6IGZhbHNlLFxuICB9LFxufTtcbmNvbnN0IGZvcm1hdHMgPSBbXG4gICdoZWFkZXInLFxuICAnZm9udCcsXG4gICdjb2xvcicsXG4gICdzaXplJyxcbiAgJ2JvbGQnLFxuICAnaXRhbGljJyxcbiAgJ3VuZGVybGluZScsXG4gICdzdHJpa2UnLFxuICAnYmxvY2txdW90ZScsXG4gICdsaXN0JyxcbiAgJ2J1bGxldCcsXG4gICdpbmRlbnQnLFxuICAnbGluaycsXG4gICdpbWFnZScsXG4gIC8vICd2aWRlbycsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0b3IocHJvcHM6IElFZGl0b3JQcm9wcykge1xuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgUmVhY3RRdWlsbCA9XG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgPyByZXF1aXJlKCdyZWFjdC1xdWlsbCcpIDogKCkgPT4gZmFsc2U7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KHByb3BzLnRpdGxlKTtcbiAgLy8gY29uc3QgW2lzRGVsZXRlLCBzZXRJc0RlbGV0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbY29udGVudHMsIHNldENvbnRlbnRzXSA9IHVzZVN0YXRlPHN0cmluZz4ocHJvcHMuY29udGVudHMpO1xuICAvLyBjb25zdCBbbGFzdE5vdGVib29rLCBzZXRMYXN0Tm90ZWJvb2tdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGU8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKTtcbiAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVNb2RhbE9wZW4gPSAoKSA9PiB7XG4gICAgaGFuZGxlUG9wb3ZlckNsb3NlKCk7XG4gICAgc2V0TW9kYWxPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vZGFsQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQb3BvdmVyT3BlbiA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQb3BvdmVyQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGh0bWw6IHN0cmluZykgPT4ge1xuICAgIHNldENvbnRlbnRzKGh0bWwpO1xuICAgIGNvbnN0IG5ld05vdGUgPSB7XG4gICAgICBub3RlVGl0bGU6IHVuZGVmaW5lZCxcbiAgICAgIG5vdGU6IGh0bWwsXG4gICAgfTtcbiAgICBwcm9wcy51cGRhdGVOb3RlKFxuICAgICAgcHJvcHMubm90ZWJvb2tzW3Byb3BzLm5vdGVib29rXS5pZCxcbiAgICAgIHByb3BzLmN1cnJlbnROb3RlSWQsXG4gICAgICBuZXdOb3RlXG4gICAgKTtcbiAgfTtcblxuICAvLyBjb25zdCBnZXROb3RlID0gKG5vdGVib29rSWQ6IHN0cmluZywgbm90ZUlkOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHtcbiAgLy8gICBjb25zdCBuZXdDb250ZW50cyA9IHByb3BzLm5vdGVib29rc1tub3RlYm9va0lkXS5ub3Rlcy5maWx0ZXIoXG4gIC8vICAgICAobm90ZTogSU5vdGUpID0+IG5vdGUuaWQgPT09IG5vdGVJZFxuICAvLyAgICk7XG4gIC8vICAgY29uc29sZS5sb2cobmV3Q29udGVudHMpO1xuICAvLyAgIHNldFRpdGxlKG5ld0NvbnRlbnRzWzBdLm5vdGVUaXRsZSk7XG4gIC8vICAgc2V0Q29udGVudHMobmV3Q29udGVudHNbMF0ubm90ZSk7XG4gIC8vICAgc2V0SXNEZWxldGVkKG5ld0NvbnRlbnRzWzBdLmlzRGVsZXRlZCk7XG4gIC8vICAgc2V0TGFzdE5vdGVib29rKG5ld0NvbnRlbnRzWzBdLmxhc3ROb3RlYm9vayk7XG4gIC8vIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaXRsZShwcm9wcy50aXRsZSk7XG4gICAgc2V0Q29udGVudHMocHJvcHMuY29udGVudCk7XG4gIH0sIFtwcm9wcy5ub3RlYm9vaywgcHJvcHMuY3VycmVudE5vdGVJZF0pO1xuXG4gIGNvbnN0IGhhbmRsZVRpdGxlQ2hhbmdlID0gKFxuICAgIGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+IHwgdW5kZWZpbmVkXG4gICkgPT4ge1xuICAgIHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zdCBuZXdOb3RlID0ge1xuICAgICAgbm90ZVRpdGxlOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgIG5vdGU6IHVuZGVmaW5lZCxcbiAgICB9O1xuICAgIHByb3BzLnVwZGF0ZU5vdGUoXG4gICAgICBwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLmlkLFxuICAgICAgcHJvcHMuY3VycmVudE5vdGVJZCxcbiAgICAgIG5ld05vdGVcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdmVUb1RyYXNoID0gKCkgPT4ge1xuICAgIHByb3BzLm1vdmVOb3RlKHByb3BzLm5vdGVib29rLCAndHJhc2gnLCBwcm9wcy5jdXJyZW50Tm90ZUlkKTtcbiAgICBoYW5kbGVQb3BvdmVyQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZXN0b3JlID0gKCkgPT4ge1xuICAgIHByb3BzLm1vdmVOb3RlKCd0cmFzaCcsIHByb3BzLmxhc3ROb3RlYm9vaywgcHJvcHMuY3VycmVudE5vdGVJZCk7XG4gICAgaGFuZGxlUG9wb3ZlckNsb3NlKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xuICAgIHByb3BzLmRlbGV0ZU5vdGUoJ3RyYXNoJywgcHJvcHMuY3VycmVudE5vdGVJZCk7XG4gICAgaGFuZGxlUG9wb3ZlckNsb3NlKCk7XG4gICAgaGFuZGxlTW9kYWxDbG9zZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwcm9wcy5pc0RlbGV0ZWQgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgIHByb3BzLmhhbmRsZVNuYWNrYmFyKFxuICAgICAgICAgICAgICAgICdZb3UgY2FuIG5vdCB1cGRhdGUgYSBub3RlIHRpdGxlIGluIHRoZSBUcmFzaCcsXG4gICAgICAgICAgICAgICAgJ2Vycm9yJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgaWQ9XCJkb3QtbWVudVwiXG4gICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVQb3BvdmVyQ2xvc2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZVJlc3RvcmV9PlJlc3RvcmU8L01lbnVJdGVtPlxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZU1vZGFsT3Blbn0+RGVsZXRlPC9NZW51SXRlbT5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmRvdH0gb25DbGljaz17aGFuZGxlUG9wb3Zlck9wZW59PlxuICAgICAgICAgICAgPEhpRG90c0hvcml6b250YWwgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmVkaXRvckluVHJhc2h9XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnRzIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICBwcm9wcy5oYW5kbGVTbmFja2JhcihcbiAgICAgICAgICAgICAgICAnWW91IGNhbiBub3QgdXBkYXRlIGEgbm90ZSBpbiB0aGUgVHJhc2gnLFxuICAgICAgICAgICAgICAgICdlcnJvcidcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBvcGVuPXttb2RhbE9wZW59XG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtbW9kYWwtdGl0bGVcIlxuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInNpbXBsZS1tb2RhbC1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgICA8aDIgaWQ9XCJzaW1wbGUtbW9kYWwtdGl0bGVcIj5BcmUgeW91IHJlYWxseSB3YW50IHRvIGRlbGV0ZT88L2gyPlxuICAgICAgICAgICAgICA8cCBpZD1cInNpbXBsZS1tb2RhbC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIFlvdSB3aWxsIHBlcm1hbmVudGx5IGRlbGV0ZSB0aGlzIG5vdGUuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGVsZXRlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTW9kYWxDbG9zZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ/OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgaGFuZGxlVGl0bGVDaGFuZ2UoZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgaWQ9XCJkb3QtbWVudVwiXG4gICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVQb3BvdmVyQ2xvc2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZU1vdmVUb1RyYXNofT5Nb3ZlIHRvIHRyYXNoPC9NZW51SXRlbT5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmRvdH0gb25DbGljaz17aGFuZGxlUG9wb3Zlck9wZW59PlxuICAgICAgICAgICAgPEhpRG90c0hvcml6b250YWwgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgeyEhUmVhY3RRdWlsbCAmJiBpc09wZW4gJiYgKFxuICAgICAgICAgICAgPFJlYWN0UXVpbGxcbiAgICAgICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudHN9XG4gICAgICAgICAgICAgIG1vZHVsZXM9e21vZHVsZXN9XG4gICAgICAgICAgICAgIGZvcm1hdHM9e2Zvcm1hdHN9XG4gICAgICAgICAgICAgIGJvdW5kcz17Jy5hcHAnfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5lZGl0b3J9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/editor.tsx\n");

/***/ })

})
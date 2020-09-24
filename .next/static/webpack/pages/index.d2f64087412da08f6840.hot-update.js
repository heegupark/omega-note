webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor.tsx":
/*!*******************************!*\
  !*** ./components/editor.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Menu */ \"./node_modules/@material-ui/core/esm/Menu/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    title: {\n      outline: 'none',\n      width: '95%',\n      paddingLeft: '15px',\n      margin: '0px',\n      border: 'none',\n      backgroundColor: 'rgb(248,248,248)',\n      fontSize: '24px'\n    },\n    editor: {\n      width: '100%',\n      minWidth: '400px',\n      wordBreak: 'break-word',\n      paddingBottom: '10px',\n      '&:hover': {\n        backgroundColor: 'white'\n      }\n    },\n    editorInTrash: {\n      width: '100%',\n      minWidth: '400px',\n      wordBreak: 'break-word',\n      padding: '10px'\n    },\n    dot: {\n      position: 'absolute',\n      \"float\": 'right',\n      right: '20px',\n      cursor: 'pointer',\n      marginTop: '10px'\n    }\n  });\n});\nvar theme = 'snow';\nvar placeholder = \"What's in your mind?\";\nvar modules = {\n  toolbar: [[{\n    header: '1'\n  }, {\n    header: '2'\n  }, {\n    font: []\n  }, {\n    color: []\n  }], [{\n    size: []\n  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{\n    list: 'ordered'\n  }, {\n    list: 'bullet'\n  }, {\n    indent: '-1'\n  }, {\n    indent: '+1'\n  }], ['link', 'image', 'video'], ['clean']],\n  clipboard: {\n    matchVisual: false\n  }\n};\nvar formats = ['header', 'font', 'color', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image' // 'video',\n];\nfunction Editor(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  var ReactQuill = true ? __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\") : undefined;\n  var classes = useStyles();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      title = _useState2[0],\n      setTitle = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isDelete = _useState3[0],\n      setIsDeleted = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      contents = _useState4[0],\n      setContents = _useState4[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      anchorEl = _React$useState2[0],\n      setAnchorEl = _React$useState2[1];\n\n  var handleClick = function handleClick(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handleClose = function handleClose() {\n    setAnchorEl(null);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setOpen(true);\n  }, []);\n\n  var handleChange = function handleChange(html) {\n    setContents(html);\n    var newNote = {\n      note: html\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  var getNote = function getNote(notebookId, noteId) {\n    var newContents = props.notebooks[notebookId].notes.filter(function (note) {\n      return note.id === noteId;\n    });\n    setTitle(newContents[0].noteTitle);\n    setContents(newContents[0].note);\n    setIsDeleted(newContents[0].isDeleted);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    getNote(props.notebook, props.currentNote);\n  }, [props.notebook, props.currentNote]);\n\n  var handleTitleChange = function handleTitleChange(e) {\n    setTitle(e.target.value);\n    var newNote = {\n      noteTitle: e.target.value\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  var handleMoveToTrash = function handleMoveToTrash() {\n    props.moveNote(props.notebook, 'trash', props.currentNote);\n    handleClose();\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, isDelete ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 11\n    }\n  }, title), __jsx(\"div\", {\n    className: classes.editorInTrash,\n    dangerouslySetInnerHTML: {\n      __html: contents\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 11\n    }\n  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"input\", {\n    value: title,\n    className: classes.title,\n    onChange: function onChange(e) {\n      return handleTitleChange(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 11\n    }\n  }), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    id: \"dot-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: handleMoveToTrash,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 13\n    }\n  }, \"Move to trash\")), __jsx(\"span\", {\n    className: classes.dot,\n    onClick: handleClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__[\"HiDotsHorizontal\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 13\n    }\n  })), !!ReactQuill && isOpen && __jsx(ReactQuill, {\n    theme: theme,\n    onChange: handleChange,\n    value: contents,\n    modules: modules,\n    formats: formats,\n    bounds: '.app',\n    placeholder: placeholder,\n    className: classes.editor,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 175,\n      columnNumber: 13\n    }\n  })));\n}\n\n_s(Editor, \"y67+y82NuHkEPPSZUPev93tNHO8=\", false, function () {\n  return [useStyles];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3IudHN4Pzg1YWQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwidGl0bGUiLCJvdXRsaW5lIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiZWRpdG9yIiwibWluV2lkdGgiLCJ3b3JkQnJlYWsiLCJwYWRkaW5nQm90dG9tIiwiZWRpdG9ySW5UcmFzaCIsInBhZGRpbmciLCJkb3QiLCJwb3NpdGlvbiIsInJpZ2h0IiwiY3Vyc29yIiwibWFyZ2luVG9wIiwicGxhY2Vob2xkZXIiLCJtb2R1bGVzIiwidG9vbGJhciIsImhlYWRlciIsImZvbnQiLCJjb2xvciIsInNpemUiLCJsaXN0IiwiaW5kZW50IiwiY2xpcGJvYXJkIiwibWF0Y2hWaXN1YWwiLCJmb3JtYXRzIiwiRWRpdG9yIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldE9wZW4iLCJSZWFjdFF1aWxsIiwicmVxdWlyZSIsImNsYXNzZXMiLCJzZXRUaXRsZSIsImlzRGVsZXRlIiwic2V0SXNEZWxldGVkIiwiY29udGVudHMiLCJzZXRDb250ZW50cyIsIlJlYWN0IiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJodG1sIiwibmV3Tm90ZSIsIm5vdGUiLCJ1cGRhdGVOb3RlIiwibm90ZWJvb2tzIiwibm90ZWJvb2siLCJpZCIsImN1cnJlbnROb3RlIiwiZ2V0Tm90ZSIsIm5vdGVib29rSWQiLCJub3RlSWQiLCJuZXdDb250ZW50cyIsIm5vdGVzIiwiZmlsdGVyIiwibm90ZVRpdGxlIiwiaXNEZWxldGVkIiwiaGFuZGxlVGl0bGVDaGFuZ2UiLCJlIiwidGFy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WjtBQUdFLFNBQUssRUFBRVYsUUFIVDtBQUlFLFdBQU8sRUFBRXRCLE9BSlg7QUFLRSxXQUFPLEVBQUVVLE9BTFg7QUFNRSxVQUFNLEVBQUUsTUFOVjtBQU9FLGVBQVcsRUFBRVgsV0FQZjtBQVFFLGFBQVMsRUFBRW1CLE9BQU8sQ0FBQzlCLE1BUnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkosQ0FWSixDQURGO0FBNkNEOztHQTdHdUJ1QixNO1VBSU5uQyxTOzs7S0FKTW1DLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2VkaXRvci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgSGlEb3RzSG9yaXpvbnRhbCB9IGZyb20gJ3JlYWN0LWljb25zL2hpJztcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHRpdGxlOiB7XG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICB3aWR0aDogJzk1JScsXG4gICAgICBwYWRkaW5nTGVmdDogJzE1cHgnLFxuICAgICAgbWFyZ2luOiAnMHB4JyxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0OCwyNDgsMjQ4KScsXG4gICAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgIH0sXG4gICAgZWRpdG9yOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWluV2lkdGg6ICc0MDBweCcsXG4gICAgICB3b3JkQnJlYWs6ICdicmVhay13b3JkJyxcbiAgICAgIHBhZGRpbmdCb3R0b206ICcxMHB4JyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZWRpdG9ySW5UcmFzaDoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1pbldpZHRoOiAnNDAwcHgnLFxuICAgICAgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsXG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgfSxcbiAgICBkb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICByaWdodDogJzIwcHgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBtYXJnaW5Ub3A6ICcxMHB4JyxcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgdGhlbWUgPSAnc25vdyc7XG5jb25zdCBwbGFjZWhvbGRlciA9IGBXaGF0J3MgaW4geW91ciBtaW5kP2A7XG5jb25zdCBtb2R1bGVzID0ge1xuICB0b29sYmFyOiBbXG4gICAgW3sgaGVhZGVyOiAnMScgfSwgeyBoZWFkZXI6ICcyJyB9LCB7IGZvbnQ6IFtdIH0sIHsgY29sb3I6IFtdIH1dLFxuICAgIFt7IHNpemU6IFtdIH1dLFxuICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZScsICdibG9ja3F1b3RlJ10sXG4gICAgW1xuICAgICAgeyBsaXN0OiAnb3JkZXJlZCcgfSxcbiAgICAgIHsgbGlzdDogJ2J1bGxldCcgfSxcbiAgICAgIHsgaW5kZW50OiAnLTEnIH0sXG4gICAgICB7IGluZGVudDogJysxJyB9LFxuICAgIF0sXG4gICAgWydsaW5rJywgJ2ltYWdlJywgJ3ZpZGVvJ10sXG4gICAgWydjbGVhbiddLFxuICBdLFxuICBjbGlwYm9hcmQ6IHtcbiAgICBtYXRjaFZpc3VhbDogZmFsc2UsXG4gIH0sXG59O1xuY29uc3QgZm9ybWF0cyA9IFtcbiAgJ2hlYWRlcicsXG4gICdmb250JyxcbiAgJ2NvbG9yJyxcbiAgJ3NpemUnLFxuICAnYm9sZCcsXG4gICdpdGFsaWMnLFxuICAndW5kZXJsaW5lJyxcbiAgJ3N0cmlrZScsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2xpc3QnLFxuICAnYnVsbGV0JyxcbiAgJ2luZGVudCcsXG4gICdsaW5rJyxcbiAgJ2ltYWdlJyxcbiAgLy8gJ3ZpZGVvJyxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRvcihwcm9wczogYW55KSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBSZWFjdFF1aWxsID1cbiAgICB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyA/IHJlcXVpcmUoJ3JlYWN0LXF1aWxsJykgOiAoKSA9PiBmYWxzZTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnIGFzIGFueSk7XG4gIGNvbnN0IFtpc0RlbGV0ZSwgc2V0SXNEZWxldGVkXSA9IHVzZVN0YXRlKGZhbHNlIGFzIGJvb2xlYW4pO1xuICBjb25zdCBbY29udGVudHMsIHNldENvbnRlbnRzXSA9IHVzZVN0YXRlKCcnIGFzIGFueSk7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGU8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaHRtbDogYW55KSA9PiB7XG4gICAgc2V0Q29udGVudHMoaHRtbCk7XG4gICAgY29uc3QgbmV3Tm90ZSA9IHtcbiAgICAgIG5vdGU6IGh0bWwsXG4gICAgfTtcbiAgICBwcm9wcy51cGRhdGVOb3RlKFxuICAgICAgcHJvcHMubm90ZWJvb2tzW3Byb3BzLm5vdGVib29rXS5pZCxcbiAgICAgIHByb3BzLmN1cnJlbnROb3RlLFxuICAgICAgbmV3Tm90ZVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Tm90ZSA9IChub3RlYm9va0lkOiBzdHJpbmcsIG5vdGVJZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbmV3Q29udGVudHMgPSBwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tJZF0ubm90ZXMuZmlsdGVyKFxuICAgICAgKG5vdGU6IGFueSkgPT4gbm90ZS5pZCA9PT0gbm90ZUlkXG4gICAgKTtcbiAgICBzZXRUaXRsZShuZXdDb250ZW50c1swXS5ub3RlVGl0bGUpO1xuICAgIHNldENvbnRlbnRzKG5ld0NvbnRlbnRzWzBdLm5vdGUpO1xuICAgIHNldElzRGVsZXRlZChuZXdDb250ZW50c1swXS5pc0RlbGV0ZWQpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Tm90ZShwcm9wcy5ub3RlYm9vaywgcHJvcHMuY3VycmVudE5vdGUpO1xuICB9LCBbcHJvcHMubm90ZWJvb2ssIHByb3BzLmN1cnJlbnROb3RlXSk7XG5cbiAgY29uc3QgaGFuZGxlVGl0bGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xuICAgIGNvbnN0IG5ld05vdGUgPSB7XG4gICAgICBub3RlVGl0bGU6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH07XG4gICAgcHJvcHMudXBkYXRlTm90ZShcbiAgICAgIHByb3BzLm5vdGVib29rc1twcm9wcy5ub3RlYm9va10uaWQsXG4gICAgICBwcm9wcy5jdXJyZW50Tm90ZSxcbiAgICAgIG5ld05vdGVcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdmVUb1RyYXNoID0gKCkgPT4ge1xuICAgIHByb3BzLm1vdmVOb3RlKHByb3BzLm5vdGVib29rLCAndHJhc2gnLCBwcm9wcy5jdXJyZW50Tm90ZSk7XG4gICAgaGFuZGxlQ2xvc2UoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNEZWxldGUgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdG9ySW5UcmFzaH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudHMgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGU6IGFueSkgPT4gaGFuZGxlVGl0bGVDaGFuZ2UoZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgaWQ9XCJkb3QtbWVudVwiXG4gICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlTW92ZVRvVHJhc2h9Pk1vdmUgdG8gdHJhc2g8L01lbnVJdGVtPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZG90fSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAgICA8SGlEb3RzSG9yaXpvbnRhbCAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7ISFSZWFjdFF1aWxsICYmIGlzT3BlbiAmJiAoXG4gICAgICAgICAgICA8UmVhY3RRdWlsbFxuICAgICAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50c31cbiAgICAgICAgICAgICAgbW9kdWxlcz17bW9kdWxlc31cbiAgICAgICAgICAgICAgZm9ybWF0cz17Zm9ybWF0c31cbiAgICAgICAgICAgICAgYm91bmRzPXsnLmFwcCd9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmVkaXRvcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/editor.tsx\n");

/***/ })

})
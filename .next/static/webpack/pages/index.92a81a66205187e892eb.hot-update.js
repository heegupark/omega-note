webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor.tsx":
/*!*******************************!*\
  !*** ./components/editor.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n// import ReactQuill, { Quill } from 'react-quill';\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    loading: {\n      margin: '20px 20px 0px 20px'\n    },\n    title: {\n      position: 'absolute',\n      margin: '75px 0px 0px 15px',\n      zIndex: 1,\n      outline: 'none',\n      width: '100%',\n      minWidth: '400px'\n    },\n    editor: {\n      width: '100%',\n      minWidth: '400px',\n      wordBreak: 'break-word',\n      '&:hover': {\n        backgroundColor: 'white'\n      }\n    }\n  });\n});\nvar theme = 'snow';\nvar placeholder = \"What's in your mind?\";\nvar modules = {\n  toolbar: [[{\n    header: '1'\n  }, {\n    header: '2'\n  }, {\n    font: []\n  }, {\n    color: []\n  }], [{\n    size: []\n  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{\n    list: 'ordered'\n  }, {\n    list: 'bullet'\n  }, {\n    indent: '-1'\n  }, {\n    indent: '+1'\n  }], ['link', 'image', 'video'], ['clean']],\n  clipboard: {\n    matchVisual: false\n  }\n};\nvar formats = ['header', 'font', 'color', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image' // 'video',\n];\nfunction Editor(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  var ReactQuill = true ? __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\") : undefined;\n  var classes = useStyles();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      title = _useState2[0],\n      setTitle = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      contents = _useState3[0],\n      setContents = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setOpen(true);\n  }, []);\n\n  var handleChange = function handleChange(html) {\n    setContents(html);\n    var newNote = {\n      // noteTitle: title,\n      note: html\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  var getNote = function getNote(notebookId, noteId) {\n    var newContents = props.notebooks[notebookId].notes.filter(function (note) {\n      return note.id === noteId;\n    });\n    setTitle(newContents[0].noteTitle);\n    setContents(newContents[0].note);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getNote(props.notebook, props.currentNote);\n  }, [props.currentNote]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n    className: classes.title,\n    onClick: function onClick() {\n      return setOpen(false);\n    },\n    onBlur: function onBlur() {\n      return setOpen(true);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }, title), __jsx(\"div\", {\n    onClick: function onClick() {\n      return setOpen(true);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }\n  }, !!ReactQuill && isOpen && __jsx(ReactQuill, {\n    theme: theme,\n    onChange: handleChange,\n    value: contents,\n    modules: modules,\n    formats: formats,\n    bounds: '.app',\n    placeholder: placeholder,\n    className: classes.editor,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 11\n    }\n  })));\n}\n\n_s(Editor, \"kOusroF6X3kmfN3hpXan5PtmFhU=\", false, function () {\n  return [useStyles];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3IudHN4Pzg1YWQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwibG9hZGluZyIsIm1hcmdpbiIsInRpdGxlIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJvdXRsaW5lIiwid2lkdGgiLCJtaW5XaWR0aCIsImVkaXRvciIsIndvcmRCcmVhayIsImJhY2tncm91bmRDb2xvciIsInBsYWNlaG9sZGVyIiwibW9kdWxlcyIsInRvb2xiYXIiLCJoZWFkZXIiLCJmb250IiwiY29sb3IiLCJzaXplIiwibGlzdCIsImluZGVudCIsImNsaXBib2FyZCIsIm1hdGNoVmlzdWFsIiwiZm9ybWF0cyIsIkVkaXRvciIsInByb3BzIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRPcGVuIiwiUmVhY3RRdWlsbCIsInJlcXVpcmUiLCJjbGFzc2VzIiwic2V0VGl0bGUiLCJjb250ZW50cyIsInNldENvbnRlbnRzIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiaHRtbCIsIm5ld05vdGUiLCJub3RlIiwidXBkYXRlTm90ZSIsIm5vdGVib29rcyIsIm5vdGVib29rIiwiaWQiLCJjdXJyZW50Tm90ZSIsImdldE5vdGUiLCJub3RlYm9va0lkIiwibm90ZUlkIiwibmV3Q29udGVudHMiLCJub3RlcyIsImZpbHRlciIsIm5vdGVUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFO0FBREQsS0FERTtBQUlYQyxTQUFLLEVBQUU7QUFDTEMsY0FBUSxFQUFFLFVBREw7QUFFTEYsWUFBTSxFQUFFLG1CQUZIO0FBR0xHLFlBQU0sRUFBRSxDQUhIO0FBSUxDLGFBQU8sRUFBRSxN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QUEsSUFGSixDQVJGLENBREY7QUF5QkQ7O0dBOUR1QmUsTTtVQUlOM0IsUzs7O0tBSk0yQixNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9lZGl0b3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcbi8vIGltcG9ydCBSZWFjdFF1aWxsLCB7IFF1aWxsIH0gZnJvbSAncmVhY3QtcXVpbGwnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgbG9hZGluZzoge1xuICAgICAgbWFyZ2luOiAnMjBweCAyMHB4IDBweCAyMHB4JyxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIG1hcmdpbjogJzc1cHggMHB4IDBweCAxNXB4JyxcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtaW5XaWR0aDogJzQwMHB4JyxcbiAgICB9LFxuICAgIGVkaXRvcjoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1pbldpZHRoOiAnNDAwcHgnLFxuICAgICAgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgdGhlbWUgPSAnc25vdyc7XG5jb25zdCBwbGFjZWhvbGRlciA9IGBXaGF0J3MgaW4geW91ciBtaW5kP2A7XG5jb25zdCBtb2R1bGVzID0ge1xuICB0b29sYmFyOiBbXG4gICAgW3sgaGVhZGVyOiAnMScgfSwgeyBoZWFkZXI6ICcyJyB9LCB7IGZvbnQ6IFtdIH0sIHsgY29sb3I6IFtdIH1dLFxuICAgIFt7IHNpemU6IFtdIH1dLFxuICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZScsICdibG9ja3F1b3RlJ10sXG4gICAgW1xuICAgICAgeyBsaXN0OiAnb3JkZXJlZCcgfSxcbiAgICAgIHsgbGlzdDogJ2J1bGxldCcgfSxcbiAgICAgIHsgaW5kZW50OiAnLTEnIH0sXG4gICAgICB7IGluZGVudDogJysxJyB9LFxuICAgIF0sXG4gICAgWydsaW5rJywgJ2ltYWdlJywgJ3ZpZGVvJ10sXG4gICAgWydjbGVhbiddLFxuICBdLFxuICBjbGlwYm9hcmQ6IHtcbiAgICBtYXRjaFZpc3VhbDogZmFsc2UsXG4gIH0sXG59O1xuY29uc3QgZm9ybWF0cyA9IFtcbiAgJ2hlYWRlcicsXG4gICdmb250JyxcbiAgJ2NvbG9yJyxcbiAgJ3NpemUnLFxuICAnYm9sZCcsXG4gICdpdGFsaWMnLFxuICAndW5kZXJsaW5lJyxcbiAgJ3N0cmlrZScsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2xpc3QnLFxuICAnYnVsbGV0JyxcbiAgJ2luZGVudCcsXG4gICdsaW5rJyxcbiAgJ2ltYWdlJyxcbiAgLy8gJ3ZpZGVvJyxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRvcihwcm9wczogYW55KSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBSZWFjdFF1aWxsID1cbiAgICB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyA/IHJlcXVpcmUoJ3JlYWN0LXF1aWxsJykgOiAoKSA9PiBmYWxzZTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnIGFzIGFueSk7XG4gIGNvbnN0IFtjb250ZW50cywgc2V0Q29udGVudHNdID0gdXNlU3RhdGUoJycgYXMgYW55KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaHRtbDogYW55KSA9PiB7XG4gICAgc2V0Q29udGVudHMoaHRtbCk7XG4gICAgY29uc3QgbmV3Tm90ZSA9IHtcbiAgICAgIC8vIG5vdGVUaXRsZTogdGl0bGUsXG4gICAgICBub3RlOiBodG1sLFxuICAgIH07XG4gICAgcHJvcHMudXBkYXRlTm90ZShcbiAgICAgIHByb3BzLm5vdGVib29rc1twcm9wcy5ub3RlYm9va10uaWQsXG4gICAgICBwcm9wcy5jdXJyZW50Tm90ZSxcbiAgICAgIG5ld05vdGVcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGdldE5vdGUgPSAobm90ZWJvb2tJZDogc3RyaW5nLCBub3RlSWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG5ld0NvbnRlbnRzID0gcHJvcHMubm90ZWJvb2tzW25vdGVib29rSWRdLm5vdGVzLmZpbHRlcihcbiAgICAgIChub3RlOiBhbnkpID0+IG5vdGUuaWQgPT09IG5vdGVJZFxuICAgICk7XG4gICAgc2V0VGl0bGUobmV3Q29udGVudHNbMF0ubm90ZVRpdGxlKTtcbiAgICBzZXRDb250ZW50cyhuZXdDb250ZW50c1swXS5ub3RlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE5vdGUocHJvcHMubm90ZWJvb2ssIHByb3BzLmN1cnJlbnROb3RlKTtcbiAgfSwgW3Byb3BzLmN1cnJlbnROb3RlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9XG4gICAgICAgIG9uQmx1cj17KCkgPT4gc2V0T3Blbih0cnVlKX1cbiAgICAgID5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX0+XG4gICAgICAgIHshIVJlYWN0UXVpbGwgJiYgaXNPcGVuICYmIChcbiAgICAgICAgICA8UmVhY3RRdWlsbFxuICAgICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHZhbHVlPXtjb250ZW50c31cbiAgICAgICAgICAgIG1vZHVsZXM9e21vZHVsZXN9XG4gICAgICAgICAgICBmb3JtYXRzPXtmb3JtYXRzfVxuICAgICAgICAgICAgYm91bmRzPXsnLmFwcCd9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdG9yfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/editor.tsx\n");

/***/ })

})
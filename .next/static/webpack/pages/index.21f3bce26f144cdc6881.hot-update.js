webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor.tsx":
/*!*******************************!*\
  !*** ./components/editor.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n// import ReactQuill, { Quill } from 'react-quill';\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    loading: {\n      margin: '20px 20px 0px 20px'\n    },\n    title: {\n      position: 'absolute',\n      margin: '75px 0px 0px 15px',\n      zIndex: 1,\n      outline: 'none'\n    },\n    editor: {\n      width: '100%',\n      minWidth: '400px',\n      wordBreak: 'break-word',\n      '&:hover': {\n        backgroundColor: 'white'\n      }\n    }\n  });\n});\nvar theme = 'snow';\nvar placeholder = \"What's in your mind?\";\nvar modules = {\n  toolbar: [[{\n    header: '1'\n  }, {\n    header: '2'\n  }, {\n    font: []\n  }, {\n    color: []\n  }], [{\n    size: []\n  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{\n    list: 'ordered'\n  }, {\n    list: 'bullet'\n  }, {\n    indent: '-1'\n  }, {\n    indent: '+1'\n  }], ['link', 'image', 'video'], ['clean']],\n  clipboard: {\n    matchVisual: false\n  }\n};\nvar formats = ['header', 'font', 'color', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image' // 'video',\n];\nfunction Editor(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  var ReactQuill = true ? __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\") : undefined;\n  var classes = useStyles();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      title = _useState2[0],\n      setTitle = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      contents = _useState3[0],\n      setContents = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      titleEditing = _useState4[0],\n      setTitleEditing = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setOpen(true);\n  }, []);\n\n  var handleChange = function handleChange(html) {\n    setContents(html);\n    var newNote = {\n      // noteTitle: title,\n      note: html\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  var getNote = function getNote(notebookId, noteId) {\n    var newContents = props.notebooks[notebookId].notes.filter(function (note) {\n      return note.id === noteId;\n    });\n    setTitle(newContents[0].noteTitle);\n    setContents(newContents[0].note);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getNote(props.notebook, props.currentNote);\n  }, [props.currentNote]);\n\n  var handleTitleClick = function handleTitleClick() {\n    setTitleEditing(!titleEditing);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n    contentEditable: true,\n    className: classes.title,\n    onClick: function onClick() {\n      return setTitleEditing(true);\n    },\n    onBlur: function onBlur() {\n      return setTitleEditing(false);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }, title), !!ReactQuill && isOpen && !titleEditing && __jsx(ReactQuill, {\n    theme: theme,\n    onChange: handleChange,\n    value: contents,\n    modules: modules,\n    formats: formats,\n    bounds: '.app',\n    placeholder: placeholder,\n    className: classes.editor,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s(Editor, \"sRSgR+0InzzCYjZ6n9UzbqOs4Bw=\", false, function () {\n  return [useStyles];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3IudHN4Pzg1YWQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwibG9hZGluZyIsIm1hcmdpbiIsInRpdGxlIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJvdXRsaW5lIiwiZWRpdG9yIiwid2lkdGgiLCJtaW5XaWR0aCIsIndvcmRCcmVhayIsImJhY2tncm91bmRDb2xvciIsInBsYWNlaG9sZGVyIiwibW9kdWxlcyIsInRvb2xiYXIiLCJoZWFkZXIiLCJmb250IiwiY29sb3IiLCJzaXplIiwibGlzdCIsImluZGVudCIsImNsaXBib2FyZCIsIm1hdGNoVmlzdWFsIiwiZm9ybWF0cyIsIkVkaXRvciIsInByb3BzIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRPcGVuIiwiUmVhY3RRdWlsbCIsInJlcXVpcmUiLCJjbGFzc2VzIiwic2V0VGl0bGUiLCJjb250ZW50cyIsInNldENvbnRlbnRzIiwidGl0bGVFZGl0aW5nIiwic2V0VGl0bGVFZGl0aW5nIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiaHRtbCIsIm5ld05vdGUiLCJub3RlIiwidXBkYXRlTm90ZSIsIm5vdGVib29rcyIsIm5vdGVib29rIiwiaWQiLCJjdXJyZW50Tm90ZSIsImdldE5vdGUiLCJub3RlYm9va0lkIiwibm90ZUlkIiwibmV3Q29udGVudHMiLCJub3RlcyIsImZpbHRlciIsIm5vdGVUaXRsZSIsImhhbmRsZVRpdGxlQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRTtBQURELEtBREU7QUFJWEMsU0FBSyxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxVQURMO0FBRUxGLFlB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LE9BTFg7QUFNRSxVQUFNLEVBQUUsTUFOVjtBQU9FLGVBQVcsRUFBRVgsV0FQZjtBQVFFLGFBQVMsRUFBRW1CLE9BQU8sQ0FBQ3hCLE1BUnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixDQURGO0FBd0JEOztHQWpFdUJpQixNO1VBSU4zQixTOzs7S0FKTTJCLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2VkaXRvci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3MnO1xuLy8gaW1wb3J0IFJlYWN0UXVpbGwsIHsgUXVpbGwgfSBmcm9tICdyZWFjdC1xdWlsbCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICBsb2FkaW5nOiB7XG4gICAgICBtYXJnaW46ICcyMHB4IDIwcHggMHB4IDIwcHgnLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbWFyZ2luOiAnNzVweCAwcHggMHB4IDE1cHgnLFxuICAgICAgekluZGV4OiAxLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgIH0sXG4gICAgZWRpdG9yOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWluV2lkdGg6ICc0MDBweCcsXG4gICAgICB3b3JkQnJlYWs6ICdicmVhay13b3JkJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCB0aGVtZSA9ICdzbm93JztcbmNvbnN0IHBsYWNlaG9sZGVyID0gYFdoYXQncyBpbiB5b3VyIG1pbmQ/YDtcbmNvbnN0IG1vZHVsZXMgPSB7XG4gIHRvb2xiYXI6IFtcbiAgICBbeyBoZWFkZXI6ICcxJyB9LCB7IGhlYWRlcjogJzInIH0sIHsgZm9udDogW10gfSwgeyBjb2xvcjogW10gfV0sXG4gICAgW3sgc2l6ZTogW10gfV0sXG4gICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJywgJ2Jsb2NrcXVvdGUnXSxcbiAgICBbXG4gICAgICB7IGxpc3Q6ICdvcmRlcmVkJyB9LFxuICAgICAgeyBsaXN0OiAnYnVsbGV0JyB9LFxuICAgICAgeyBpbmRlbnQ6ICctMScgfSxcbiAgICAgIHsgaW5kZW50OiAnKzEnIH0sXG4gICAgXSxcbiAgICBbJ2xpbmsnLCAnaW1hZ2UnLCAndmlkZW8nXSxcbiAgICBbJ2NsZWFuJ10sXG4gIF0sXG4gIGNsaXBib2FyZDoge1xuICAgIG1hdGNoVmlzdWFsOiBmYWxzZSxcbiAgfSxcbn07XG5jb25zdCBmb3JtYXRzID0gW1xuICAnaGVhZGVyJyxcbiAgJ2ZvbnQnLFxuICAnY29sb3InLFxuICAnc2l6ZScsXG4gICdib2xkJyxcbiAgJ2l0YWxpYycsXG4gICd1bmRlcmxpbmUnLFxuICAnc3RyaWtlJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnbGlzdCcsXG4gICdidWxsZXQnLFxuICAnaW5kZW50JyxcbiAgJ2xpbmsnLFxuICAnaW1hZ2UnLFxuICAvLyAndmlkZW8nLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFJlYWN0UXVpbGwgPVxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnID8gcmVxdWlyZSgncmVhY3QtcXVpbGwnKSA6ICgpID0+IGZhbHNlO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycgYXMgYW55KTtcbiAgY29uc3QgW2NvbnRlbnRzLCBzZXRDb250ZW50c10gPSB1c2VTdGF0ZSgnJyBhcyBhbnkpO1xuICBjb25zdCBbdGl0bGVFZGl0aW5nLCBzZXRUaXRsZUVkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChodG1sOiBhbnkpID0+IHtcbiAgICBzZXRDb250ZW50cyhodG1sKTtcbiAgICBjb25zdCBuZXdOb3RlID0ge1xuICAgICAgLy8gbm90ZVRpdGxlOiB0aXRsZSxcbiAgICAgIG5vdGU6IGh0bWwsXG4gICAgfTtcbiAgICBwcm9wcy51cGRhdGVOb3RlKFxuICAgICAgcHJvcHMubm90ZWJvb2tzW3Byb3BzLm5vdGVib29rXS5pZCxcbiAgICAgIHByb3BzLmN1cnJlbnROb3RlLFxuICAgICAgbmV3Tm90ZVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Tm90ZSA9IChub3RlYm9va0lkOiBzdHJpbmcsIG5vdGVJZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbmV3Q29udGVudHMgPSBwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tJZF0ubm90ZXMuZmlsdGVyKFxuICAgICAgKG5vdGU6IGFueSkgPT4gbm90ZS5pZCA9PT0gbm90ZUlkXG4gICAgKTtcbiAgICBzZXRUaXRsZShuZXdDb250ZW50c1swXS5ub3RlVGl0bGUpO1xuICAgIHNldENvbnRlbnRzKG5ld0NvbnRlbnRzWzBdLm5vdGUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Tm90ZShwcm9wcy5ub3RlYm9vaywgcHJvcHMuY3VycmVudE5vdGUpO1xuICB9LCBbcHJvcHMuY3VycmVudE5vdGVdKTtcblxuICBjb25zdCBoYW5kbGVUaXRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldFRpdGxlRWRpdGluZyghdGl0bGVFZGl0aW5nKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxXG4gICAgICAgIGNvbnRlbnRFZGl0YWJsZVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRpdGxlRWRpdGluZyh0cnVlKX1cbiAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRUaXRsZUVkaXRpbmcoZmFsc2UpfVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L2gxPlxuICAgICAgeyEhUmVhY3RRdWlsbCAmJiBpc09wZW4gJiYgIXRpdGxlRWRpdGluZyAmJiAoXG4gICAgICAgIDxSZWFjdFF1aWxsXG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e2NvbnRlbnRzfVxuICAgICAgICAgIG1vZHVsZXM9e21vZHVsZXN9XG4gICAgICAgICAgZm9ybWF0cz17Zm9ybWF0c31cbiAgICAgICAgICBib3VuZHM9eycuYXBwJ31cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmVkaXRvcn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/editor.tsx\n");

/***/ })

})
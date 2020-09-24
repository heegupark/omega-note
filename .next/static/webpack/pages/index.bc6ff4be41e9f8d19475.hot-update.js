webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor.tsx":
/*!*******************************!*\
  !*** ./components/editor.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    title: {\n      outline: 'none',\n      width: '80%',\n      paddingLeft: '15px',\n      margin: '0px',\n      border: 'none',\n      backgroundColor: 'rgb(248,248,248)',\n      fontSize: '24px'\n    },\n    editor: {\n      width: '100%',\n      minWidth: '400px',\n      wordBreak: 'break-word',\n      paddingBottom: '10px',\n      '&:hover': {\n        backgroundColor: 'white'\n      }\n    }\n  });\n});\nvar theme = 'snow';\nvar placeholder = \"What's in your mind?\";\nvar modules = {\n  toolbar: [[{\n    header: '1'\n  }, {\n    header: '2'\n  }, {\n    font: []\n  }, {\n    color: []\n  }], [{\n    size: []\n  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{\n    list: 'ordered'\n  }, {\n    list: 'bullet'\n  }, {\n    indent: '-1'\n  }, {\n    indent: '+1'\n  }], ['link', 'image', 'video'], ['clean']],\n  clipboard: {\n    matchVisual: false\n  }\n};\nvar formats = ['header', 'font', 'color', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image' // 'video',\n];\nfunction Editor(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  var ReactQuill = true ? __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\") : undefined;\n  var classes = useStyles();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      title = _useState2[0],\n      setTitle = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      contents = _useState3[0],\n      setContents = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setOpen(true);\n  }, []);\n\n  var handleChange = function handleChange(html) {\n    setContents(html);\n    var newNote = {\n      note: html\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  var getNote = function getNote(notebookId, noteId) {\n    var newContents = props.notebooks[notebookId].notes.filter(function (note) {\n      return note.id === noteId;\n    });\n    setTitle(newContents[0].noteTitle);\n    setContents(newContents[0].note);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getNote(props.notebook, props.currentNote);\n  }, [props.notebook, props.currentNote]);\n\n  var handleTitleChange = function handleTitleChange(e) {\n    setTitle(e.target.value);\n    var newNote = {\n      noteTitle: e.target.value\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"input\", {\n    value: title,\n    className: classes.title,\n    onChange: function onChange(e) {\n      return handleTitleChange(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }\n  }), !!ReactQuill && isOpen && __jsx(ReactQuill, {\n    theme: theme,\n    onChange: handleChange,\n    value: contents,\n    modules: modules,\n    formats: formats,\n    bounds: '.app',\n    placeholder: placeholder,\n    className: classes.editor,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s(Editor, \"kOusroF6X3kmfN3hpXan5PtmFhU=\", false, function () {\n  return [useStyles];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3IudHN4Pzg1YWQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwidGl0bGUiLCJvdXRsaW5lIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiZWRpdG9yIiwibWluV2lkdGgiLCJ3b3JkQnJlYWsiLCJwYWRkaW5nQm90dG9tIiwicGxhY2Vob2xkZXIiLCJtb2R1bGVzIiwidG9vbGJhciIsImhlYWRlciIsImZvbnQiLCJjb2xvciIsInNpemUiLCJsaXN0IiwiaW5kZW50IiwiY2xpcGJvYXJkIiwibWF0Y2hWaXN1YWwiLCJmb3JtYXRzIiwiRWRpdG9yIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldE9wZW4iLCJSZWFjdFF1aWxsIiwicmVxdWlyZSIsImNsYXNzZXMiLCJzZXRUaXRsZSIsImNvbnRlbnRzIiwic2V0Q29udGVudHMiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJodG1sIiwibmV3Tm90ZSIsIm5vdGUiLCJ1cGRhdGVOb3RlIiwibm90ZWJvb2tzIiwibm90ZWJvb2siLCJpZCIsImN1cnJlbnROb3RlIiwiZ2V0Tm90ZSIsIm5vdGVib29rSWQiLCJub3RlSWQiLCJuZXdDb250ZW50cyIsIm5vdGVzIiwiZmlsdGVyIiwibm90ZVRpdGxlIiwiaGFuZGxlVGl0bGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUVMQyxXQUFLLEVBQUUsS0FGRjtBQUdMQyxpQkFBVyxFQUFFLE1BSFI7QUFJ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TUcsQ0FBQyxDQUFDeEIsVUFBRixJQUFnQkYsTUFBaEIsSUFDQyxNQUFDLFVBQUQ7QUFDRSxTQUFLLEVBQUU3QixLQURUO0FBRUUsWUFBUSxFQUFFc0MsWUFGWjtBQUdFLFNBQUssRUFBRUgsUUFIVDtBQUlFLFdBQU8sRUFBRXBCLE9BSlg7QUFLRSxXQUFPLEVBQUVVLE9BTFg7QUFNRSxVQUFNLEVBQUUsTUFOVjtBQU9FLGVBQVcsRUFBRVgsV0FQZjtBQVFFLGFBQVMsRUFBRW1CLE9BQU8sQ0FBQ3ZCLE1BUnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQURGO0FBcUJEOztHQXJFdUJnQixNO1VBSU41QixTOzs7S0FKTTRCLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2VkaXRvci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgdGl0bGU6IHtcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIHdpZHRoOiAnODAlJyxcbiAgICAgIHBhZGRpbmdMZWZ0OiAnMTVweCcsXG4gICAgICBtYXJnaW46ICcwcHgnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQ4LDI0OCwyNDgpJyxcbiAgICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgfSxcbiAgICBlZGl0b3I6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtaW5XaWR0aDogJzQwMHB4JyxcbiAgICAgIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxuICAgICAgcGFkZGluZ0JvdHRvbTogJzEwcHgnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IHRoZW1lID0gJ3Nub3cnO1xuY29uc3QgcGxhY2Vob2xkZXIgPSBgV2hhdCdzIGluIHlvdXIgbWluZD9gO1xuY29uc3QgbW9kdWxlcyA9IHtcbiAgdG9vbGJhcjogW1xuICAgIFt7IGhlYWRlcjogJzEnIH0sIHsgaGVhZGVyOiAnMicgfSwgeyBmb250OiBbXSB9LCB7IGNvbG9yOiBbXSB9XSxcbiAgICBbeyBzaXplOiBbXSB9XSxcbiAgICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnLCAnYmxvY2txdW90ZSddLFxuICAgIFtcbiAgICAgIHsgbGlzdDogJ29yZGVyZWQnIH0sXG4gICAgICB7IGxpc3Q6ICdidWxsZXQnIH0sXG4gICAgICB7IGluZGVudDogJy0xJyB9LFxuICAgICAgeyBpbmRlbnQ6ICcrMScgfSxcbiAgICBdLFxuICAgIFsnbGluaycsICdpbWFnZScsICd2aWRlbyddLFxuICAgIFsnY2xlYW4nXSxcbiAgXSxcbiAgY2xpcGJvYXJkOiB7XG4gICAgbWF0Y2hWaXN1YWw6IGZhbHNlLFxuICB9LFxufTtcbmNvbnN0IGZvcm1hdHMgPSBbXG4gICdoZWFkZXInLFxuICAnZm9udCcsXG4gICdjb2xvcicsXG4gICdzaXplJyxcbiAgJ2JvbGQnLFxuICAnaXRhbGljJyxcbiAgJ3VuZGVybGluZScsXG4gICdzdHJpa2UnLFxuICAnYmxvY2txdW90ZScsXG4gICdsaXN0JyxcbiAgJ2J1bGxldCcsXG4gICdpbmRlbnQnLFxuICAnbGluaycsXG4gICdpbWFnZScsXG4gIC8vICd2aWRlbycsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0b3IocHJvcHM6IGFueSkge1xuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgUmVhY3RRdWlsbCA9XG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgPyByZXF1aXJlKCdyZWFjdC1xdWlsbCcpIDogKCkgPT4gZmFsc2U7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyBhcyBhbnkpO1xuICBjb25zdCBbY29udGVudHMsIHNldENvbnRlbnRzXSA9IHVzZVN0YXRlKCcnIGFzIGFueSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGh0bWw6IGFueSkgPT4ge1xuICAgIHNldENvbnRlbnRzKGh0bWwpO1xuICAgIGNvbnN0IG5ld05vdGUgPSB7XG4gICAgICBub3RlOiBodG1sLFxuICAgIH07XG4gICAgcHJvcHMudXBkYXRlTm90ZShcbiAgICAgIHByb3BzLm5vdGVib29rc1twcm9wcy5ub3RlYm9va10uaWQsXG4gICAgICBwcm9wcy5jdXJyZW50Tm90ZSxcbiAgICAgIG5ld05vdGVcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGdldE5vdGUgPSAobm90ZWJvb2tJZDogc3RyaW5nLCBub3RlSWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG5ld0NvbnRlbnRzID0gcHJvcHMubm90ZWJvb2tzW25vdGVib29rSWRdLm5vdGVzLmZpbHRlcihcbiAgICAgIChub3RlOiBhbnkpID0+IG5vdGUuaWQgPT09IG5vdGVJZFxuICAgICk7XG4gICAgc2V0VGl0bGUobmV3Q29udGVudHNbMF0ubm90ZVRpdGxlKTtcbiAgICBzZXRDb250ZW50cyhuZXdDb250ZW50c1swXS5ub3RlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE5vdGUocHJvcHMubm90ZWJvb2ssIHByb3BzLmN1cnJlbnROb3RlKTtcbiAgfSwgW3Byb3BzLm5vdGVib29rLCBwcm9wcy5jdXJyZW50Tm90ZV0pO1xuXG4gIGNvbnN0IGhhbmRsZVRpdGxlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zdCBuZXdOb3RlID0ge1xuICAgICAgbm90ZVRpdGxlOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9O1xuICAgIHByb3BzLnVwZGF0ZU5vdGUoXG4gICAgICBwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLmlkLFxuICAgICAgcHJvcHMuY3VycmVudE5vdGUsXG4gICAgICBuZXdOb3RlXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiBoYW5kbGVUaXRsZUNoYW5nZShlKX1cbiAgICAgIC8+XG4gICAgICB7ISFSZWFjdFF1aWxsICYmIGlzT3BlbiAmJiAoXG4gICAgICAgIDxSZWFjdFF1aWxsXG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e2NvbnRlbnRzfVxuICAgICAgICAgIG1vZHVsZXM9e21vZHVsZXN9XG4gICAgICAgICAgZm9ybWF0cz17Zm9ybWF0c31cbiAgICAgICAgICBib3VuZHM9eycuYXBwJ31cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmVkaXRvcn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/editor.tsx\n");

/***/ })

})
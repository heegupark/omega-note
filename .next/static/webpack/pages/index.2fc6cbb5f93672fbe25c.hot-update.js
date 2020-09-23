webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor.tsx":
/*!*******************************!*\
  !*** ./components/editor.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_quilljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-quilljs */ \"./node_modules/react-quilljs/esm/index.js\");\n/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill/dist/quill.snow.css */ \"./node_modules/quill/dist/quill.snow.css\");\n/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n // import ReactQuill, { Quill } from 'react-quill';\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    loading: {\n      margin: '20px 20px 0px 20px'\n    },\n    progress: {\n      width: '100%',\n      margin: '20px 20px 0px 20px',\n      '& > * + *': {\n        marginTop: theme.spacing(2)\n      }\n    }\n  });\n});\nvar theme = 'snow';\nvar placeholder = 'Compose an epic...';\nvar modules = {\n  toolbar: [[{\n    header: '1'\n  }, {\n    header: '2'\n  }, {\n    font: []\n  }, {\n    color: []\n  }], [{\n    size: []\n  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{\n    list: 'ordered'\n  }, {\n    list: 'bullet'\n  }, {\n    indent: '-1'\n  }, {\n    indent: '+1'\n  }], ['link', 'image', 'video'], ['clean']],\n  clipboard: {\n    // toggle to add extra line breaks when pasting HTML:\n    matchVisual: false\n  }\n};\nvar formats = ['header', 'font', 'color', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video'];\nfunction Editor(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  var ReactQuill = true ? __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\") : undefined;\n  var classes = useStyles();\n\n  var _useQuill = Object(react_quilljs__WEBPACK_IMPORTED_MODULE_2__[\"useQuill\"])(),\n      quill = _useQuill.quill;\n\n  var _useQuill2 = Object(react_quilljs__WEBPACK_IMPORTED_MODULE_2__[\"useQuill\"])({\n    theme: theme,\n    modules: modules,\n    formats: formats,\n    placeholder: placeholder\n  }),\n      quillRef = _useQuill2.quillRef;\n\n  var _useQuill3 = Object(react_quilljs__WEBPACK_IMPORTED_MODULE_2__[\"useQuill\"])({\n    modules: {\n      counter: true\n    }\n  }),\n      Quill = _useQuill3.Quill;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      contents = _useState2[0],\n      setContents = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setOpen(true);\n  }, []);\n\n  var handleChange = function handleChange(html) {\n    console.log();\n    setContents(html);\n    props.updateNote(notebookId, noteId, html);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !!ReactQuill && isOpen && __jsx(ReactQuill, {\n    theme: theme,\n    onChange: handleChange,\n    value: contents,\n    modules: modules,\n    formats: formats,\n    bounds: '.app',\n    placeholder: placeholder,\n    style: {\n      width: '100%',\n      height: '91vh',\n      '.quill-toolbar': {\n        border: 'none'\n      },\n      '.ql-editor': {\n        border: 'none'\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s(Editor, \"oPrLHzZPrGEbFwwYUr1VWDurF9I=\", false, function () {\n  return [useStyles, react_quilljs__WEBPACK_IMPORTED_MODULE_2__[\"useQuill\"], react_quilljs__WEBPACK_IMPORTED_MODULE_2__[\"useQuill\"], react_quilljs__WEBPACK_IMPORTED_MODULE_2__[\"useQuill\"]];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3IudHN4Pzg1YWQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwibG9hZGluZyIsIm1hcmdpbiIsInByb2dyZXNzIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwicGxhY2Vob2xkZXIiLCJtb2R1bGVzIiwidG9vbGJhciIsImhlYWRlciIsImZvbnQiLCJjb2xvciIsInNpemUiLCJsaXN0IiwiaW5kZW50IiwiY2xpcGJvYXJkIiwibWF0Y2hWaXN1YWwiLCJmb3JtYXRzIiwiRWRpdG9yIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldE9wZW4iLCJSZWFjdFF1aWxsIiwicmVxdWlyZSIsImNsYXNzZXMiLCJ1c2VRdWlsbCIsInF1aWxsIiwicXVpbGxSZWYiLCJjb3VudGVyIiwiUXVpbGwiLCJjb250ZW50cyIsInNldENvbnRlbnRzIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiaHRtbCIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVOb3RlIiwibm90ZWJvb2tJZCIsIm5vdGVJZCIsImhlaWdodCIsImJvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0NBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFO0FBREQsS0FERTtBQUlYQyxZQUFRLEVBQUU7QUFDUkMsV0FBSyxFQUFFLE1BREM7QUFFUkYsWUFBTSxFQUFFLG9CQUZBO0FBR1IsbUJBQWE7QUFDWEcsaUJBQVMsRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWMsQ0FBZDtBQURBO0FBSEw7QUFKQyxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCO0FBZUEsSUFBTVAsS0FBSyxHQUFHLE1BQWQ7QUFD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LFdBUGY7QUFRRSxTQUFLLEVBQUU7QUFDTEgsV0FBSyxFQUFFLE1BREY7QUFFTHNDLFlBQU0sRUFBRSxNQUZIO0FBR0wsd0JBQWtCO0FBQ2hCQyxjQUFNLEVBQUU7QUFEUSxPQUhiO0FBTUwsb0JBQWM7QUFDWkEsY0FBTSxFQUFFO0FBREk7QUFOVCxLQVJUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixDQURGO0FBaUNEOztHQXREdUJ4QixNO1VBS050QixTLEVBQ0U4QixzRCxFQUNHQSxzRCxFQUNIQSxzRDs7O0tBUklSLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2VkaXRvci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3MnO1xuaW1wb3J0IHsgdXNlUXVpbGwgfSBmcm9tICdyZWFjdC1xdWlsbGpzJztcbmltcG9ydCAncXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzcyc7XG4vLyBpbXBvcnQgUmVhY3RRdWlsbCwgeyBRdWlsbCB9IGZyb20gJ3JlYWN0LXF1aWxsJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIGxvYWRpbmc6IHtcbiAgICAgIG1hcmdpbjogJzIwcHggMjBweCAwcHggMjBweCcsXG4gICAgfSxcbiAgICBwcm9ncmVzczoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1hcmdpbjogJzIwcHggMjBweCAwcHggMjBweCcsXG4gICAgICAnJiA+ICogKyAqJzoge1xuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCB0aGVtZSA9ICdzbm93JztcbmNvbnN0IHBsYWNlaG9sZGVyID0gJ0NvbXBvc2UgYW4gZXBpYy4uLic7XG5jb25zdCBtb2R1bGVzID0ge1xuICB0b29sYmFyOiBbXG4gICAgW3sgaGVhZGVyOiAnMScgfSwgeyBoZWFkZXI6ICcyJyB9LCB7IGZvbnQ6IFtdIH0sIHsgY29sb3I6IFtdIH1dLFxuICAgIFt7IHNpemU6IFtdIH1dLFxuICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZScsICdibG9ja3F1b3RlJ10sXG4gICAgW1xuICAgICAgeyBsaXN0OiAnb3JkZXJlZCcgfSxcbiAgICAgIHsgbGlzdDogJ2J1bGxldCcgfSxcbiAgICAgIHsgaW5kZW50OiAnLTEnIH0sXG4gICAgICB7IGluZGVudDogJysxJyB9LFxuICAgIF0sXG4gICAgWydsaW5rJywgJ2ltYWdlJywgJ3ZpZGVvJ10sXG4gICAgWydjbGVhbiddLFxuICBdLFxuICBjbGlwYm9hcmQ6IHtcbiAgICAvLyB0b2dnbGUgdG8gYWRkIGV4dHJhIGxpbmUgYnJlYWtzIHdoZW4gcGFzdGluZyBIVE1MOlxuICAgIG1hdGNoVmlzdWFsOiBmYWxzZSxcbiAgfSxcbn07XG5jb25zdCBmb3JtYXRzID0gW1xuICAnaGVhZGVyJyxcbiAgJ2ZvbnQnLFxuICAnY29sb3InLFxuICAnc2l6ZScsXG4gICdib2xkJyxcbiAgJ2l0YWxpYycsXG4gICd1bmRlcmxpbmUnLFxuICAnc3RyaWtlJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnbGlzdCcsXG4gICdidWxsZXQnLFxuICAnaW5kZW50JyxcbiAgJ2xpbmsnLFxuICAnaW1hZ2UnLFxuICAndmlkZW8nLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFJlYWN0UXVpbGwgPVxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnID8gcmVxdWlyZSgncmVhY3QtcXVpbGwnKSA6ICgpID0+IGZhbHNlO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBxdWlsbCB9ID0gdXNlUXVpbGwoKTtcbiAgY29uc3QgeyBxdWlsbFJlZiB9ID0gdXNlUXVpbGwoeyB0aGVtZSwgbW9kdWxlcywgZm9ybWF0cywgcGxhY2Vob2xkZXIgfSk7XG4gIGNvbnN0IHsgUXVpbGwgfSA9IHVzZVF1aWxsKHsgbW9kdWxlczogeyBjb3VudGVyOiB0cnVlIH0gfSk7XG4gIGNvbnN0IFtjb250ZW50cywgc2V0Q29udGVudHNdID0gdXNlU3RhdGUoJycgYXMgYW55KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaHRtbDogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coKTtcbiAgICBzZXRDb250ZW50cyhodG1sKTtcbiAgICBwcm9wcy51cGRhdGVOb3RlKG5vdGVib29rSWQsIG5vdGVJZCwgaHRtbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGhlaWdodDogJzkxdmgnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHJlZj17cXVpbGxSZWZ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICB7ISFSZWFjdFF1aWxsICYmIGlzT3BlbiAmJiAoXG4gICAgICAgIDxSZWFjdFF1aWxsXG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e2NvbnRlbnRzfVxuICAgICAgICAgIG1vZHVsZXM9e21vZHVsZXN9XG4gICAgICAgICAgZm9ybWF0cz17Zm9ybWF0c31cbiAgICAgICAgICBib3VuZHM9eycuYXBwJ31cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICc5MXZoJyxcbiAgICAgICAgICAgICcucXVpbGwtdG9vbGJhcic6IHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJy5xbC1lZGl0b3InOiB7XG4gICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/editor.tsx\n");

/***/ })

})
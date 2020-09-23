webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor.tsx":
/*!*******************************!*\
  !*** ./components/editor.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_quilljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-quilljs */ \"./node_modules/react-quilljs/esm/index.js\");\n/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill/dist/quill.snow.css */ \"./node_modules/quill/dist/quill.snow.css\");\n/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n // import ReactQuill, { Quill } from 'react-quill';\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    loading: {\n      margin: '20px 20px 0px 20px'\n    },\n    progress: {\n      width: '100%',\n      margin: '20px 20px 0px 20px',\n      '& > * + *': {\n        marginTop: theme.spacing(2)\n      }\n    }\n  });\n});\nvar theme = 'snow';\nvar placeholder = 'Compose an epic...';\nvar modules = {\n  toolbar: [[{\n    header: '1'\n  }, {\n    header: '2'\n  }, {\n    font: []\n  }, {\n    color: []\n  }], [{\n    size: []\n  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{\n    list: 'ordered'\n  }, {\n    list: 'bullet'\n  }, {\n    indent: '-1'\n  }, {\n    indent: '+1'\n  }], ['link', 'image', 'video'], ['clean']],\n  clipboard: {\n    // toggle to add extra line breaks when pasting HTML:\n    matchVisual: false\n  }\n};\nvar formats = ['header', 'font', 'color', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video'];\nfunction Editor(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  var ReactQuill = true ? __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\") : undefined;\n  var classes = useStyles();\n\n  var _useQuill = Object(react_quilljs__WEBPACK_IMPORTED_MODULE_2__[\"useQuill\"])(),\n      quill = _useQuill.quill;\n\n  var _useQuill2 = Object(react_quilljs__WEBPACK_IMPORTED_MODULE_2__[\"useQuill\"])({\n    theme: theme,\n    modules: modules,\n    formats: formats,\n    placeholder: placeholder\n  }),\n      quillRef = _useQuill2.quillRef;\n\n  var _useQuill3 = Object(react_quilljs__WEBPACK_IMPORTED_MODULE_2__[\"useQuill\"])({\n    modules: {\n      counter: true\n    }\n  }),\n      Quill = _useQuill3.Quill;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      contents = _useState2[0],\n      setContents = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setOpen(true);\n  }, []);\n\n  var handleChange = function handleChange(html) {\n    console.log(html);\n    setContents(html);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !!ReactQuill && isOpen && __jsx(ReactQuill, {\n    theme: theme,\n    onChange: handleChange,\n    value: contents,\n    modules: modules,\n    formats: formats,\n    bounds: '.app',\n    placeholder: placeholder,\n    style: {\n      width: '100%',\n      height: '91vh'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s(Editor, \"oPrLHzZPrGEbFwwYUr1VWDurF9I=\", false, function () {\n  return [useStyles, react_quilljs__WEBPACK_IMPORTED_MODULE_2__[\"useQuill\"], react_quilljs__WEBPACK_IMPORTED_MODULE_2__[\"useQuill\"], react_quilljs__WEBPACK_IMPORTED_MODULE_2__[\"useQuill\"]];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3IudHN4Pzg1YWQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwibG9hZGluZyIsIm1hcmdpbiIsInByb2dyZXNzIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwicGxhY2Vob2xkZXIiLCJtb2R1bGVzIiwidG9vbGJhciIsImhlYWRlciIsImZvbnQiLCJjb2xvciIsInNpemUiLCJsaXN0IiwiaW5kZW50IiwiY2xpcGJvYXJkIiwibWF0Y2hWaXN1YWwiLCJmb3JtYXRzIiwiRWRpdG9yIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldE9wZW4iLCJSZWFjdFF1aWxsIiwicmVxdWlyZSIsImNsYXNzZXMiLCJ1c2VRdWlsbCIsInF1aWxsIiwicXVpbGxSZWYiLCJjb3VudGVyIiwiUXVpbGwiLCJjb250ZW50cyIsInNldENvbnRlbnRzIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiaHRtbCIsImNvbnNvbGUiLCJsb2ciLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtDQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRTtBQURELEtBREU7QUFJWEMsWUFBUSxFQUFFO0FBQ1JDLFdBQUssRUFBRSxNQURDO0FBRVJGLFlBQU0sRUFBRSxvQkFGQTtBQUdSLG1CQUFhO0FBQ1hHLGlCQUFTLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQ7QUFEQTtBQUhMO0FBSkMsR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1QjtBQWVBLElBQU1QLEtBQUssR0FBRyxNQUFkO0FBQ0EsSUFBTVEsV0FBVyxHQUFHLG9CQUFwQjtBQUNBLElBQU1DLE9BQU8sR0FB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QUFBQTtBQUFBLElBVkosQ0FERjtBQXdCRDs7R0E1Q3VCcEIsTTtVQUtOdEIsUyxFQUNFOEIsc0QsRUFDR0Esc0QsRUFDSEEsc0Q7OztLQVJJUixNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9lZGl0b3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcbmltcG9ydCB7IHVzZVF1aWxsIH0gZnJvbSAncmVhY3QtcXVpbGxqcyc7XG5pbXBvcnQgJ3F1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnO1xuLy8gaW1wb3J0IFJlYWN0UXVpbGwsIHsgUXVpbGwgfSBmcm9tICdyZWFjdC1xdWlsbCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICBsb2FkaW5nOiB7XG4gICAgICBtYXJnaW46ICcyMHB4IDIwcHggMHB4IDIwcHgnLFxuICAgIH0sXG4gICAgcHJvZ3Jlc3M6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXJnaW46ICcyMHB4IDIwcHggMHB4IDIwcHgnLFxuICAgICAgJyYgPiAqICsgKic6IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgdGhlbWUgPSAnc25vdyc7XG5jb25zdCBwbGFjZWhvbGRlciA9ICdDb21wb3NlIGFuIGVwaWMuLi4nO1xuY29uc3QgbW9kdWxlcyA9IHtcbiAgdG9vbGJhcjogW1xuICAgIFt7IGhlYWRlcjogJzEnIH0sIHsgaGVhZGVyOiAnMicgfSwgeyBmb250OiBbXSB9LCB7IGNvbG9yOiBbXSB9XSxcbiAgICBbeyBzaXplOiBbXSB9XSxcbiAgICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnLCAnYmxvY2txdW90ZSddLFxuICAgIFtcbiAgICAgIHsgbGlzdDogJ29yZGVyZWQnIH0sXG4gICAgICB7IGxpc3Q6ICdidWxsZXQnIH0sXG4gICAgICB7IGluZGVudDogJy0xJyB9LFxuICAgICAgeyBpbmRlbnQ6ICcrMScgfSxcbiAgICBdLFxuICAgIFsnbGluaycsICdpbWFnZScsICd2aWRlbyddLFxuICAgIFsnY2xlYW4nXSxcbiAgXSxcbiAgY2xpcGJvYXJkOiB7XG4gICAgLy8gdG9nZ2xlIHRvIGFkZCBleHRyYSBsaW5lIGJyZWFrcyB3aGVuIHBhc3RpbmcgSFRNTDpcbiAgICBtYXRjaFZpc3VhbDogZmFsc2UsXG4gIH0sXG59O1xuY29uc3QgZm9ybWF0cyA9IFtcbiAgJ2hlYWRlcicsXG4gICdmb250JyxcbiAgJ2NvbG9yJyxcbiAgJ3NpemUnLFxuICAnYm9sZCcsXG4gICdpdGFsaWMnLFxuICAndW5kZXJsaW5lJyxcbiAgJ3N0cmlrZScsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2xpc3QnLFxuICAnYnVsbGV0JyxcbiAgJ2luZGVudCcsXG4gICdsaW5rJyxcbiAgJ2ltYWdlJyxcbiAgJ3ZpZGVvJyxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRvcihwcm9wczogYW55KSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBSZWFjdFF1aWxsID1cbiAgICB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyA/IHJlcXVpcmUoJ3JlYWN0LXF1aWxsJykgOiAoKSA9PiBmYWxzZTtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgcXVpbGwgfSA9IHVzZVF1aWxsKCk7XG4gIGNvbnN0IHsgcXVpbGxSZWYgfSA9IHVzZVF1aWxsKHsgdGhlbWUsIG1vZHVsZXMsIGZvcm1hdHMsIHBsYWNlaG9sZGVyIH0pO1xuICBjb25zdCB7IFF1aWxsIH0gPSB1c2VRdWlsbCh7IG1vZHVsZXM6IHsgY291bnRlcjogdHJ1ZSB9IH0pO1xuICBjb25zdCBbY29udGVudHMsIHNldENvbnRlbnRzXSA9IHVzZVN0YXRlKCcnIGFzIGFueSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGh0bWw6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGh0bWwpO1xuICAgIHNldENvbnRlbnRzKGh0bWwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBoZWlnaHQ6ICc5MXZoJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiByZWY9e3F1aWxsUmVmfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgPC9kaXY+ICovfVxuICAgICAgeyEhUmVhY3RRdWlsbCAmJiBpc09wZW4gJiYgKFxuICAgICAgICA8UmVhY3RRdWlsbFxuICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXtjb250ZW50c31cbiAgICAgICAgICBtb2R1bGVzPXttb2R1bGVzfVxuICAgICAgICAgIGZvcm1hdHM9e2Zvcm1hdHN9XG4gICAgICAgICAgYm91bmRzPXsnLmFwcCd9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzkxdmgnIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/editor.tsx\n");

/***/ })

})
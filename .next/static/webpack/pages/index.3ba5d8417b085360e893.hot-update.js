webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor.tsx":
/*!*******************************!*\
  !*** ./components/editor.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n// import ReactQuill, { Quill } from 'react-quill';\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    loading: {\n      margin: '20px 20px 0px 20px'\n    },\n    progress: {\n      width: '100%',\n      margin: '20px 20px 0px 20px',\n      '& > * + *': {\n        marginTop: theme.spacing(2)\n      }\n    },\n    editor: {\n      width: '100%',\n      minWidth: '400px',\n      wordBreak: 'break-word',\n      '&:hover': {\n        backgroundColor: 'white'\n      }\n    }\n  });\n});\nvar theme = 'snow';\nvar placeholder = \"What's in your mind?\";\nvar modules = {\n  toolbar: [[{\n    header: '1'\n  }, {\n    header: '2'\n  }, {\n    font: []\n  }, {\n    color: []\n  }], [{\n    size: []\n  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{\n    list: 'ordered'\n  }, {\n    list: 'bullet'\n  }, {\n    indent: '-1'\n  }, {\n    indent: '+1'\n  }], ['link', 'image', 'video'], ['clean']],\n  clipboard: {\n    matchVisual: false\n  }\n};\nvar formats = ['header', 'font', 'color', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image' // 'video',\n];\nfunction Editor(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  var ReactQuill = true ? __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\") : undefined;\n  var classes = useStyles();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      title = _useState2[0],\n      setTitle = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      contents = _useState3[0],\n      setContents = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setOpen(true);\n  }, []);\n\n  var handleChange = function handleChange(html) {\n    setContents(html);\n    var newNote = {\n      // noteTitle: title,\n      note: html\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  var getNote = function getNote(notebookId, noteId) {\n    var newContents = props.notebooks[notebookId].notes.filter(function (note) {\n      return note.id === noteId;\n    });\n    setTitle(newContents[0].noteTitle);\n    setContents(\"\".concat(newContents[0].note));\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getNote(props.notebook, props.currentNote);\n  }, [props.currentNote]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }\n  }, props.notebooks[props.notebook].title), !!ReactQuill && isOpen && __jsx(ReactQuill, {\n    theme: theme,\n    onChange: handleChange,\n    value: contents,\n    modules: modules,\n    formats: formats,\n    bounds: '.app',\n    placeholder: placeholder,\n    className: classes.editor,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s(Editor, \"kOusroF6X3kmfN3hpXan5PtmFhU=\", false, function () {\n  return [useStyles];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3IudHN4Pzg1YWQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwibG9hZGluZyIsIm1hcmdpbiIsInByb2dyZXNzIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiZWRpdG9yIiwibWluV2lkdGgiLCJ3b3JkQnJlYWsiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwbGFjZWhvbGRlciIsIm1vZHVsZXMiLCJ0b29sYmFyIiwiaGVhZGVyIiwiZm9udCIsImNvbG9yIiwic2l6ZSIsImxpc3QiLCJpbmRlbnQiLCJjbGlwYm9hcmQiLCJtYXRjaFZpc3VhbCIsImZvcm1hdHMiLCJFZGl0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0T3BlbiIsIlJlYWN0UXVpbGwiLCJyZXF1aXJlIiwiY2xhc3NlcyIsInRpdGxlIiwic2V0VGl0bGUiLCJjb250ZW50cyIsInNldENvbnRlbnRzIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiaHRtbCIsIm5ld05vdGUiLCJub3RlIiwidXBkYXRlTm90ZSIsIm5vdGVib29rcyIsIm5vdGVib29rIiwiaWQiLCJjdXJyZW50Tm90ZSIsImdldE5vdGUiLCJub3RlYm9va0lkIiwibm90ZUlkIiwibmV3Q29udGVudHMiLCJub3RlcyIsImZpbHRlciIsIm5vdGVUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFO0FBREQsS0FERTtBQUlYQyxZQUFRLEVBQUU7QUFDUkMsV0FBSyxFQUFFLE1BREM7QUFFUkYsWUFBTSxFQUFFLG9CQUZBO0FBR1IsbUJBQWE7QUFDWEcsaUJBQVMsRUFBRU4sS0FBSyxD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QWVBLElBQUksQ0FBQ0ksRUFBTCxLQUFZSSxNQUEzQjtBQUFBLEtBRGtCLENBQXBCO0FBR0FmLFlBQVEsQ0FBQ2dCLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZUcsU0FBaEIsQ0FBUjtBQUNBakIsZUFBVyxXQUFJYyxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVULElBQW5CLEVBQVg7QUFDRCxHQU5EOztBQVFBSix5REFBUyxDQUFDLFlBQU07QUFDZFUsV0FBTyxDQUFDckIsS0FBSyxDQUFDa0IsUUFBUCxFQUFpQmxCLEtBQUssQ0FBQ29CLFdBQXZCLENBQVA7QUFDRCxHQUZRLEVBRU4sQ0FBQ3BCLEtBQUssQ0FBQ29CLFdBQVAsQ0FGTSxDQUFUO0FBSUEsU0FDRSxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtwQixLQUFLLENBQUNpQixTQUFOLENBQWdCakIsS0FBSyxDQUFDa0IsUUFBdEIsRUFBZ0NYLEtBQXJDLENBREYsRUFFRyxDQUFDLENBQUNILFVBQUYsSUFBZ0JGLE1BQWhCLElBQ0MsTUFBQyxVQUFEO0FBQ0UsU0FBSyxFQUFFM0IsS0FEVDtBQUVFLFlBQVEsRUFBRXFDLFlBRlo7QUFHRSxTQUFLLEVBQUVILFFBSFQ7QUFJRSxXQUFPLEVBQUVyQixPQUpYO0FBS0UsV0FBTyxFQUFFVSxPQUxYO0FBTUUsVUFBTSxFQUFFLE1BTlY7QUFPRSxlQUFXLEVBQUVYLFdBUGY7QUFRRSxhQUFTLEVBQUVtQixPQUFPLENBQUN2QixNQVJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FERjtBQWlCRDs7R0F0RHVCZ0IsTTtVQUlOMUIsUzs7O0tBSk0wQixNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9lZGl0b3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcbi8vIGltcG9ydCBSZWFjdFF1aWxsLCB7IFF1aWxsIH0gZnJvbSAncmVhY3QtcXVpbGwnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgbG9hZGluZzoge1xuICAgICAgbWFyZ2luOiAnMjBweCAyMHB4IDBweCAyMHB4JyxcbiAgICB9LFxuICAgIHByb2dyZXNzOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMjBweCAyMHB4IDBweCAyMHB4JyxcbiAgICAgICcmID4gKiArIConOiB7XG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBlZGl0b3I6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtaW5XaWR0aDogJzQwMHB4JyxcbiAgICAgIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IHRoZW1lID0gJ3Nub3cnO1xuY29uc3QgcGxhY2Vob2xkZXIgPSBgV2hhdCdzIGluIHlvdXIgbWluZD9gO1xuY29uc3QgbW9kdWxlcyA9IHtcbiAgdG9vbGJhcjogW1xuICAgIFt7IGhlYWRlcjogJzEnIH0sIHsgaGVhZGVyOiAnMicgfSwgeyBmb250OiBbXSB9LCB7IGNvbG9yOiBbXSB9XSxcbiAgICBbeyBzaXplOiBbXSB9XSxcbiAgICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnLCAnYmxvY2txdW90ZSddLFxuICAgIFtcbiAgICAgIHsgbGlzdDogJ29yZGVyZWQnIH0sXG4gICAgICB7IGxpc3Q6ICdidWxsZXQnIH0sXG4gICAgICB7IGluZGVudDogJy0xJyB9LFxuICAgICAgeyBpbmRlbnQ6ICcrMScgfSxcbiAgICBdLFxuICAgIFsnbGluaycsICdpbWFnZScsICd2aWRlbyddLFxuICAgIFsnY2xlYW4nXSxcbiAgXSxcbiAgY2xpcGJvYXJkOiB7XG4gICAgbWF0Y2hWaXN1YWw6IGZhbHNlLFxuICB9LFxufTtcbmNvbnN0IGZvcm1hdHMgPSBbXG4gICdoZWFkZXInLFxuICAnZm9udCcsXG4gICdjb2xvcicsXG4gICdzaXplJyxcbiAgJ2JvbGQnLFxuICAnaXRhbGljJyxcbiAgJ3VuZGVybGluZScsXG4gICdzdHJpa2UnLFxuICAnYmxvY2txdW90ZScsXG4gICdsaXN0JyxcbiAgJ2J1bGxldCcsXG4gICdpbmRlbnQnLFxuICAnbGluaycsXG4gICdpbWFnZScsXG4gIC8vICd2aWRlbycsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0b3IocHJvcHM6IGFueSkge1xuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgUmVhY3RRdWlsbCA9XG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgPyByZXF1aXJlKCdyZWFjdC1xdWlsbCcpIDogKCkgPT4gZmFsc2U7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyBhcyBhbnkpO1xuICBjb25zdCBbY29udGVudHMsIHNldENvbnRlbnRzXSA9IHVzZVN0YXRlKCcnIGFzIGFueSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGh0bWw6IGFueSkgPT4ge1xuICAgIHNldENvbnRlbnRzKGh0bWwpO1xuICAgIGNvbnN0IG5ld05vdGUgPSB7XG4gICAgICAvLyBub3RlVGl0bGU6IHRpdGxlLFxuICAgICAgbm90ZTogaHRtbCxcbiAgICB9O1xuICAgIHByb3BzLnVwZGF0ZU5vdGUoXG4gICAgICBwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLmlkLFxuICAgICAgcHJvcHMuY3VycmVudE5vdGUsXG4gICAgICBuZXdOb3RlXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBnZXROb3RlID0gKG5vdGVib29rSWQ6IHN0cmluZywgbm90ZUlkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBuZXdDb250ZW50cyA9IHByb3BzLm5vdGVib29rc1tub3RlYm9va0lkXS5ub3Rlcy5maWx0ZXIoXG4gICAgICAobm90ZTogYW55KSA9PiBub3RlLmlkID09PSBub3RlSWRcbiAgICApO1xuICAgIHNldFRpdGxlKG5ld0NvbnRlbnRzWzBdLm5vdGVUaXRsZSk7XG4gICAgc2V0Q29udGVudHMoYCR7bmV3Q29udGVudHNbMF0ubm90ZX1gKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE5vdGUocHJvcHMubm90ZWJvb2ssIHByb3BzLmN1cnJlbnROb3RlKTtcbiAgfSwgW3Byb3BzLmN1cnJlbnROb3RlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPntwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLnRpdGxlfTwvaDE+XG4gICAgICB7ISFSZWFjdFF1aWxsICYmIGlzT3BlbiAmJiAoXG4gICAgICAgIDxSZWFjdFF1aWxsXG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e2NvbnRlbnRzfVxuICAgICAgICAgIG1vZHVsZXM9e21vZHVsZXN9XG4gICAgICAgICAgZm9ybWF0cz17Zm9ybWF0c31cbiAgICAgICAgICBib3VuZHM9eycuYXBwJ31cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmVkaXRvcn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/editor.tsx\n");

/***/ })

})
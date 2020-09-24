webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor.tsx":
/*!*******************************!*\
  !*** ./components/editor.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n// import ReactQuill, { Quill } from 'react-quill';\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    title: {\n      outline: 'none',\n      width: '100%',\n      paddingLeft: '15px',\n      margin: '0px',\n      border: 'none',\n      backgroundColor: 'rgb(248,248,248)',\n      fontSize: '24px'\n    },\n    editor: {\n      width: '100%',\n      minWidth: '400px',\n      wordBreak: 'break-word',\n      '&:hover': {\n        backgroundColor: 'white'\n      }\n    }\n  });\n});\nvar theme = 'snow';\nvar placeholder = \"What's in your mind?\";\nvar modules = {\n  toolbar: [[{\n    header: '1'\n  }, {\n    header: '2'\n  }, {\n    font: []\n  }, {\n    color: []\n  }], [{\n    size: []\n  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{\n    list: 'ordered'\n  }, {\n    list: 'bullet'\n  }, {\n    indent: '-1'\n  }, {\n    indent: '+1'\n  }], ['link', 'image', 'video'], ['clean']],\n  clipboard: {\n    matchVisual: false\n  }\n};\nvar formats = ['header', 'font', 'color', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image' // 'video',\n];\nfunction Editor(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  var ReactQuill = true ? __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\") : undefined;\n  var classes = useStyles();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      title = _useState2[0],\n      setTitle = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      contents = _useState3[0],\n      setContents = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setOpen(true);\n  }, []);\n\n  var handleChange = function handleChange(html) {\n    setContents(html);\n    var newNote = {\n      note: html\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  var getNote = function getNote(notebookId, noteId) {\n    console.log(notebookId, props.currentNote);\n    var newContents = props.notebooks[notebookId].notes.filter(function (note) {\n      return note.id === noteId;\n    });\n    setTitle(newContents[0].noteTitle);\n    setContents(newContents[0].note);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getNote(props.notebook, props.currentNote);\n  }, [props.notebook, props.currentNote]);\n\n  var handleTitleChange = function handleTitleChange(e) {\n    setTitle(e.target.value);\n    var newNote = {\n      noteTitle: e.target.value\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"input\", {\n    value: title,\n    className: classes.title,\n    onChange: function onChange(e) {\n      return handleTitleChange(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }\n  }), !!ReactQuill && isOpen && __jsx(ReactQuill, {\n    theme: theme,\n    onChange: handleChange,\n    value: contents,\n    modules: modules,\n    formats: formats,\n    bounds: '.app',\n    placeholder: placeholder,\n    className: classes.editor,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s(Editor, \"kOusroF6X3kmfN3hpXan5PtmFhU=\", false, function () {\n  return [useStyles];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3IudHN4Pzg1YWQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwidGl0bGUiLCJvdXRsaW5lIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiZWRpdG9yIiwibWluV2lkdGgiLCJ3b3JkQnJlYWsiLCJwbGFjZWhvbGRlciIsIm1vZHVsZXMiLCJ0b29sYmFyIiwiaGVhZGVyIiwiZm9udCIsImNvbG9yIiwic2l6ZSIsImxpc3QiLCJpbmRlbnQiLCJjbGlwYm9hcmQiLCJtYXRjaFZpc3VhbCIsImZvcm1hdHMiLCJFZGl0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0T3BlbiIsIlJlYWN0UXVpbGwiLCJyZXF1aXJlIiwiY2xhc3NlcyIsInNldFRpdGxlIiwiY29udGVudHMiLCJzZXRDb250ZW50cyIsInVzZUVmZmVjdCIsImhhbmRsZUNoYW5nZSIsImh0bWwiLCJuZXdOb3RlIiwibm90ZSIsInVwZGF0ZU5vdGUiLCJub3RlYm9va3MiLCJub3RlYm9vayIsImlkIiwiY3VycmVudE5vdGUiLCJnZXROb3RlIiwibm90ZWJvb2tJZCIsIm5vdGVJZCIsImNvbnNvbGUiLCJsb2ciLCJuZXdDb250ZW50cyIsIm5vdGVzIiwiZmlsdGVyIiwibm90ZVRpdGxlIiwiaGFuZGxlVGl0bGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRSxNQURKO0FBRUxDLFdBQUssRUFBRSxNQUZGO0FBR0xDLGlCQUFXLEVBQUUsTUFI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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1HLENBQUMsQ0FBQzFCLFVBQUYsSUFBZ0JGLE1BQWhCLElBQ0MsTUFBQyxVQUFEO0FBQ0UsU0FBSyxFQUFFNUIsS0FEVDtBQUVFLFlBQVEsRUFBRXFDLFlBRlo7QUFHRSxTQUFLLEVBQUVILFFBSFQ7QUFJRSxXQUFPLEVBQUVwQixPQUpYO0FBS0UsV0FBTyxFQUFFVSxPQUxYO0FBTUUsVUFBTSxFQUFFLE1BTlY7QUFPRSxlQUFXLEVBQUVYLFdBUGY7QUFRRSxhQUFTLEVBQUVtQixPQUFPLENBQUN0QixNQVJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosQ0FERjtBQXFCRDs7R0F0RXVCZSxNO1VBSU4zQixTOzs7S0FKTTJCLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2VkaXRvci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3MnO1xuLy8gaW1wb3J0IFJlYWN0UXVpbGwsIHsgUXVpbGwgfSBmcm9tICdyZWFjdC1xdWlsbCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICB0aXRsZToge1xuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHBhZGRpbmdMZWZ0OiAnMTVweCcsXG4gICAgICBtYXJnaW46ICcwcHgnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQ4LDI0OCwyNDgpJyxcbiAgICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgfSxcbiAgICBlZGl0b3I6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtaW5XaWR0aDogJzQwMHB4JyxcbiAgICAgIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IHRoZW1lID0gJ3Nub3cnO1xuY29uc3QgcGxhY2Vob2xkZXIgPSBgV2hhdCdzIGluIHlvdXIgbWluZD9gO1xuY29uc3QgbW9kdWxlcyA9IHtcbiAgdG9vbGJhcjogW1xuICAgIFt7IGhlYWRlcjogJzEnIH0sIHsgaGVhZGVyOiAnMicgfSwgeyBmb250OiBbXSB9LCB7IGNvbG9yOiBbXSB9XSxcbiAgICBbeyBzaXplOiBbXSB9XSxcbiAgICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnLCAnYmxvY2txdW90ZSddLFxuICAgIFtcbiAgICAgIHsgbGlzdDogJ29yZGVyZWQnIH0sXG4gICAgICB7IGxpc3Q6ICdidWxsZXQnIH0sXG4gICAgICB7IGluZGVudDogJy0xJyB9LFxuICAgICAgeyBpbmRlbnQ6ICcrMScgfSxcbiAgICBdLFxuICAgIFsnbGluaycsICdpbWFnZScsICd2aWRlbyddLFxuICAgIFsnY2xlYW4nXSxcbiAgXSxcbiAgY2xpcGJvYXJkOiB7XG4gICAgbWF0Y2hWaXN1YWw6IGZhbHNlLFxuICB9LFxufTtcbmNvbnN0IGZvcm1hdHMgPSBbXG4gICdoZWFkZXInLFxuICAnZm9udCcsXG4gICdjb2xvcicsXG4gICdzaXplJyxcbiAgJ2JvbGQnLFxuICAnaXRhbGljJyxcbiAgJ3VuZGVybGluZScsXG4gICdzdHJpa2UnLFxuICAnYmxvY2txdW90ZScsXG4gICdsaXN0JyxcbiAgJ2J1bGxldCcsXG4gICdpbmRlbnQnLFxuICAnbGluaycsXG4gICdpbWFnZScsXG4gIC8vICd2aWRlbycsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0b3IocHJvcHM6IGFueSkge1xuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgUmVhY3RRdWlsbCA9XG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgPyByZXF1aXJlKCdyZWFjdC1xdWlsbCcpIDogKCkgPT4gZmFsc2U7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyBhcyBhbnkpO1xuICBjb25zdCBbY29udGVudHMsIHNldENvbnRlbnRzXSA9IHVzZVN0YXRlKCcnIGFzIGFueSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGh0bWw6IGFueSkgPT4ge1xuICAgIHNldENvbnRlbnRzKGh0bWwpO1xuICAgIGNvbnN0IG5ld05vdGUgPSB7XG4gICAgICBub3RlOiBodG1sLFxuICAgIH07XG4gICAgcHJvcHMudXBkYXRlTm90ZShcbiAgICAgIHByb3BzLm5vdGVib29rc1twcm9wcy5ub3RlYm9va10uaWQsXG4gICAgICBwcm9wcy5jdXJyZW50Tm90ZSxcbiAgICAgIG5ld05vdGVcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGdldE5vdGUgPSAobm90ZWJvb2tJZDogc3RyaW5nLCBub3RlSWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnNvbGUubG9nKG5vdGVib29rSWQsIHByb3BzLmN1cnJlbnROb3RlKTtcbiAgICBjb25zdCBuZXdDb250ZW50cyA9IHByb3BzLm5vdGVib29rc1tub3RlYm9va0lkXS5ub3Rlcy5maWx0ZXIoXG4gICAgICAobm90ZTogYW55KSA9PiBub3RlLmlkID09PSBub3RlSWRcbiAgICApO1xuICAgIHNldFRpdGxlKG5ld0NvbnRlbnRzWzBdLm5vdGVUaXRsZSk7XG4gICAgc2V0Q29udGVudHMobmV3Q29udGVudHNbMF0ubm90ZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXROb3RlKHByb3BzLm5vdGVib29rLCBwcm9wcy5jdXJyZW50Tm90ZSk7XG4gIH0sIFtwcm9wcy5ub3RlYm9vaywgcHJvcHMuY3VycmVudE5vdGVdKTtcblxuICBjb25zdCBoYW5kbGVUaXRsZUNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSk7XG4gICAgY29uc3QgbmV3Tm90ZSA9IHtcbiAgICAgIG5vdGVUaXRsZTogZS50YXJnZXQudmFsdWUsXG4gICAgfTtcbiAgICBwcm9wcy51cGRhdGVOb3RlKFxuICAgICAgcHJvcHMubm90ZWJvb2tzW3Byb3BzLm5vdGVib29rXS5pZCxcbiAgICAgIHByb3BzLmN1cnJlbnROb3RlLFxuICAgICAgbmV3Tm90ZVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0XG4gICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICBvbkNoYW5nZT17KGU6IGFueSkgPT4gaGFuZGxlVGl0bGVDaGFuZ2UoZSl9XG4gICAgICAvPlxuICAgICAgeyEhUmVhY3RRdWlsbCAmJiBpc09wZW4gJiYgKFxuICAgICAgICA8UmVhY3RRdWlsbFxuICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXtjb250ZW50c31cbiAgICAgICAgICBtb2R1bGVzPXttb2R1bGVzfVxuICAgICAgICAgIGZvcm1hdHM9e2Zvcm1hdHN9XG4gICAgICAgICAgYm91bmRzPXsnLmFwcCd9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5lZGl0b3J9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/editor.tsx\n");

/***/ })

})
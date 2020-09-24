webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor.tsx":
/*!*******************************!*\
  !*** ./components/editor.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n// import ReactQuill, { Quill } from 'react-quill';\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    title: {\n      outline: 'none',\n      width: '100%',\n      paddingLeft: '15px'\n    },\n    editor: {\n      width: '100%',\n      minWidth: '400px',\n      wordBreak: 'break-word',\n      '&:hover': {\n        backgroundColor: 'white'\n      }\n    }\n  });\n});\nvar theme = 'snow';\nvar placeholder = \"What's in your mind?\";\nvar modules = {\n  toolbar: [[{\n    header: '1'\n  }, {\n    header: '2'\n  }, {\n    font: []\n  }, {\n    color: []\n  }], [{\n    size: []\n  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{\n    list: 'ordered'\n  }, {\n    list: 'bullet'\n  }, {\n    indent: '-1'\n  }, {\n    indent: '+1'\n  }], ['link', 'image', 'video'], ['clean']],\n  clipboard: {\n    matchVisual: false\n  }\n};\nvar formats = ['header', 'font', 'color', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image' // 'video',\n];\nfunction Editor(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  var ReactQuill = true ? __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\") : undefined;\n  var classes = useStyles();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      title = _useState2[0],\n      setTitle = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      contents = _useState3[0],\n      setContents = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setOpen(true);\n  }, []);\n\n  var handleChange = function handleChange(html) {\n    setContents(html);\n    var newNote = {\n      // noteTitle: title,\n      note: html\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  var getNote = function getNote(notebookId, noteId) {\n    var newContents = props.notebooks[notebookId].notes.filter(function (note) {\n      return note.id === noteId;\n    });\n    setTitle(newContents[0].noteTitle);\n    setContents(newContents[0].note);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getNote(props.notebook, props.currentNote);\n  }, [props.currentNote]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n    className: classes.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }\n  }, title), !!ReactQuill && isOpen && __jsx(ReactQuill, {\n    theme: theme,\n    onChange: handleChange,\n    value: contents,\n    modules: modules,\n    formats: formats,\n    bounds: '.app',\n    placeholder: placeholder,\n    className: classes.editor,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s(Editor, \"kOusroF6X3kmfN3hpXan5PtmFhU=\", false, function () {\n  return [useStyles];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3IudHN4Pzg1YWQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwidGl0bGUiLCJvdXRsaW5lIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsImVkaXRvciIsIm1pbldpZHRoIiwid29yZEJyZWFrIiwiYmFja2dyb3VuZENvbG9yIiwicGxhY2Vob2xkZXIiLCJtb2R1bGVzIiwidG9vbGJhciIsImhlYWRlciIsImZvbnQiLCJjb2xvciIsInNpemUiLCJsaXN0IiwiaW5kZW50IiwiY2xpcGJvYXJkIiwibWF0Y2hWaXN1YWwiLCJmb3JtYXRzIiwiRWRpdG9yIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldE9wZW4iLCJSZWFjdFF1aWxsIiwicmVxdWlyZSIsImNsYXNzZXMiLCJzZXRUaXRsZSIsImNvbnRlbnRzIiwic2V0Q29udGVudHMiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJodG1sIiwibmV3Tm90ZSIsIm5vdGUiLCJ1cGRhdGVOb3RlIiwibm90ZWJvb2tzIiwibm90ZWJvb2siLCJpZCIsImN1cnJlbnROb3RlIiwiZ2V0Tm90ZSIsIm5vdGVib29rSWQiLCJub3RlSWQiLCJuZXdDb250ZW50cyIsIm5vdGVzIiwiZmlsdGVyIiwibm90ZVRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUVMQyxXQUFLLEVBQUUsTUFGRjtBQUdMQyxpQkFBVyxFQUFFO0FBSFIsS0FESTtBQU1YQyxVQUFNLEVBQUU7QUFDTkYsV0FBSyxFQUFFLE1BREQ7QUFFTkcsY0FBUSxFQUFFLE9BRko7QUFHTkMsZUFBUyxFQUFFLFlBSEw7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VyxDQUFDYyxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVULElBQWhCLENBQVg7QUFDRCxHQU5EOztBQVFBSix5REFBUyxDQUFDLFlBQU07QUFDZFUsV0FBTyxDQUFDcEIsS0FBSyxDQUFDaUIsUUFBUCxFQUFpQmpCLEtBQUssQ0FBQ21CLFdBQXZCLENBQVA7QUFDRCxHQUZRLEVBRU4sQ0FBQ25CLEtBQUssQ0FBQ21CLFdBQVAsQ0FGTSxDQUFUO0FBSUEsU0FDRSxtRUFDRTtBQUFJLGFBQVMsRUFBRWIsT0FBTyxDQUFDM0IsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQkEsS0FBL0IsQ0FERixFQUVHLENBQUMsQ0FBQ3lCLFVBQUYsSUFBZ0JGLE1BQWhCLElBQ0MsTUFBQyxVQUFEO0FBQ0UsU0FBSyxFQUFFekIsS0FEVDtBQUVFLFlBQVEsRUFBRWtDLFlBRlo7QUFHRSxTQUFLLEVBQUVILFFBSFQ7QUFJRSxXQUFPLEVBQUVwQixPQUpYO0FBS0UsV0FBTyxFQUFFVSxPQUxYO0FBTUUsVUFBTSxFQUFFLE1BTlY7QUFPRSxlQUFXLEVBQUVYLFdBUGY7QUFRRSxhQUFTLEVBQUVtQixPQUFPLENBQUN2QixNQVJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FERjtBQWlCRDs7R0F0RHVCZ0IsTTtVQUlOeEIsUzs7O0tBSk13QixNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9lZGl0b3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcbi8vIGltcG9ydCBSZWFjdFF1aWxsLCB7IFF1aWxsIH0gZnJvbSAncmVhY3QtcXVpbGwnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgdGl0bGU6IHtcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBwYWRkaW5nTGVmdDogJzE1cHgnLFxuICAgIH0sXG4gICAgZWRpdG9yOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWluV2lkdGg6ICc0MDBweCcsXG4gICAgICB3b3JkQnJlYWs6ICdicmVhay13b3JkJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCB0aGVtZSA9ICdzbm93JztcbmNvbnN0IHBsYWNlaG9sZGVyID0gYFdoYXQncyBpbiB5b3VyIG1pbmQ/YDtcbmNvbnN0IG1vZHVsZXMgPSB7XG4gIHRvb2xiYXI6IFtcbiAgICBbeyBoZWFkZXI6ICcxJyB9LCB7IGhlYWRlcjogJzInIH0sIHsgZm9udDogW10gfSwgeyBjb2xvcjogW10gfV0sXG4gICAgW3sgc2l6ZTogW10gfV0sXG4gICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJywgJ2Jsb2NrcXVvdGUnXSxcbiAgICBbXG4gICAgICB7IGxpc3Q6ICdvcmRlcmVkJyB9LFxuICAgICAgeyBsaXN0OiAnYnVsbGV0JyB9LFxuICAgICAgeyBpbmRlbnQ6ICctMScgfSxcbiAgICAgIHsgaW5kZW50OiAnKzEnIH0sXG4gICAgXSxcbiAgICBbJ2xpbmsnLCAnaW1hZ2UnLCAndmlkZW8nXSxcbiAgICBbJ2NsZWFuJ10sXG4gIF0sXG4gIGNsaXBib2FyZDoge1xuICAgIG1hdGNoVmlzdWFsOiBmYWxzZSxcbiAgfSxcbn07XG5jb25zdCBmb3JtYXRzID0gW1xuICAnaGVhZGVyJyxcbiAgJ2ZvbnQnLFxuICAnY29sb3InLFxuICAnc2l6ZScsXG4gICdib2xkJyxcbiAgJ2l0YWxpYycsXG4gICd1bmRlcmxpbmUnLFxuICAnc3RyaWtlJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnbGlzdCcsXG4gICdidWxsZXQnLFxuICAnaW5kZW50JyxcbiAgJ2xpbmsnLFxuICAnaW1hZ2UnLFxuICAvLyAndmlkZW8nLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFJlYWN0UXVpbGwgPVxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnID8gcmVxdWlyZSgncmVhY3QtcXVpbGwnKSA6ICgpID0+IGZhbHNlO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycgYXMgYW55KTtcbiAgY29uc3QgW2NvbnRlbnRzLCBzZXRDb250ZW50c10gPSB1c2VTdGF0ZSgnJyBhcyBhbnkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChodG1sOiBhbnkpID0+IHtcbiAgICBzZXRDb250ZW50cyhodG1sKTtcbiAgICBjb25zdCBuZXdOb3RlID0ge1xuICAgICAgLy8gbm90ZVRpdGxlOiB0aXRsZSxcbiAgICAgIG5vdGU6IGh0bWwsXG4gICAgfTtcbiAgICBwcm9wcy51cGRhdGVOb3RlKFxuICAgICAgcHJvcHMubm90ZWJvb2tzW3Byb3BzLm5vdGVib29rXS5pZCxcbiAgICAgIHByb3BzLmN1cnJlbnROb3RlLFxuICAgICAgbmV3Tm90ZVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Tm90ZSA9IChub3RlYm9va0lkOiBzdHJpbmcsIG5vdGVJZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbmV3Q29udGVudHMgPSBwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tJZF0ubm90ZXMuZmlsdGVyKFxuICAgICAgKG5vdGU6IGFueSkgPT4gbm90ZS5pZCA9PT0gbm90ZUlkXG4gICAgKTtcbiAgICBzZXRUaXRsZShuZXdDb250ZW50c1swXS5ub3RlVGl0bGUpO1xuICAgIHNldENvbnRlbnRzKG5ld0NvbnRlbnRzWzBdLm5vdGUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Tm90ZShwcm9wcy5ub3RlYm9vaywgcHJvcHMuY3VycmVudE5vdGUpO1xuICB9LCBbcHJvcHMuY3VycmVudE5vdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57dGl0bGV9PC9oMT5cbiAgICAgIHshIVJlYWN0UXVpbGwgJiYgaXNPcGVuICYmIChcbiAgICAgICAgPFJlYWN0UXVpbGxcbiAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICB2YWx1ZT17Y29udGVudHN9XG4gICAgICAgICAgbW9kdWxlcz17bW9kdWxlc31cbiAgICAgICAgICBmb3JtYXRzPXtmb3JtYXRzfVxuICAgICAgICAgIGJvdW5kcz17Jy5hcHAnfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdG9yfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/editor.tsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor.tsx":
/*!*******************************!*\
  !*** ./components/editor.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    title: {\n      outline: 'none',\n      width: '90%',\n      paddingLeft: '15px',\n      margin: '0px',\n      border: 'none',\n      backgroundColor: 'rgb(248,248,248)',\n      fontSize: '24px'\n    },\n    editor: {\n      width: '100%',\n      minWidth: '400px',\n      wordBreak: 'break-word',\n      paddingBottom: '10px',\n      '&:hover': {\n        backgroundColor: 'white'\n      }\n    },\n    dot: {\n      position: 'absolute',\n      \"float\": 'right',\n      right: '20px',\n      cursor: 'pointer',\n      marginTop: '15px'\n    }\n  });\n});\nvar theme = 'snow';\nvar placeholder = \"What's in your mind?\";\nvar modules = {\n  toolbar: [[{\n    header: '1'\n  }, {\n    header: '2'\n  }, {\n    font: []\n  }, {\n    color: []\n  }], [{\n    size: []\n  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{\n    list: 'ordered'\n  }, {\n    list: 'bullet'\n  }, {\n    indent: '-1'\n  }, {\n    indent: '+1'\n  }], ['link', 'image', 'video'], ['clean']],\n  clipboard: {\n    matchVisual: false\n  }\n};\nvar formats = ['header', 'font', 'color', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image' // 'video',\n];\nfunction Editor(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  var ReactQuill = true ? __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\") : undefined;\n  var classes = useStyles();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      title = _useState2[0],\n      setTitle = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      contents = _useState3[0],\n      setContents = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setOpen(true);\n  }, []);\n\n  var handleChange = function handleChange(html) {\n    setContents(html);\n    var newNote = {\n      note: html\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  var getNote = function getNote(notebookId, noteId) {\n    var newContents = props.notebooks[notebookId].notes.filter(function (note) {\n      return note.id === noteId;\n    });\n    setTitle(newContents[0].noteTitle);\n    setContents(newContents[0].note);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getNote(props.notebook, props.currentNote);\n  }, [props.notebook, props.currentNote]);\n\n  var handleTitleChange = function handleTitleChange(e) {\n    setTitle(e.target.value);\n    var newNote = {\n      noteTitle: e.target.value\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"input\", {\n    value: title,\n    className: classes.title,\n    onChange: function onChange(e) {\n      return handleTitleChange(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 7\n    }\n  }), __jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_2__[\"HiDotsHorizontal\"], {\n    className: classes.dot,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }\n  }), !!ReactQuill && isOpen && __jsx(ReactQuill, {\n    theme: theme,\n    onChange: handleChange,\n    value: contents,\n    modules: modules,\n    formats: formats,\n    bounds: '.app',\n    placeholder: placeholder,\n    className: classes.editor,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s(Editor, \"kOusroF6X3kmfN3hpXan5PtmFhU=\", false, function () {\n  return [useStyles];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3IudHN4Pzg1YWQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwidGl0bGUiLCJvdXRsaW5lIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiZWRpdG9yIiwibWluV2lkdGgiLCJ3b3JkQnJlYWsiLCJwYWRkaW5nQm90dG9tIiwiZG90IiwicG9zaXRpb24iLCJyaWdodCIsImN1cnNvciIsIm1hcmdpblRvcCIsInBsYWNlaG9sZGVyIiwibW9kdWxlcyIsInRvb2xiYXIiLCJoZWFkZXIiLCJmb250IiwiY29sb3IiLCJzaXplIiwibGlzdCIsImluZGVudCIsImNsaXBib2FyZCIsIm1hdGNoVmlzdWFsIiwiZm9ybWF0cyIsIkVkaXRvciIsInByb3BzIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRPcGVuIiwiUmVhY3RRdWlsbCIsInJlcXVpcmUiLCJjbGFzc2VzIiwic2V0VGl0bGUiLCJjb250ZW50cyIsInNldENvbnRlbnRzIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiaHRtbCIsIm5ld05vdGUiLCJub3RlIiwidXBkYXRlTm90ZSIsIm5vdGVib29rcyIsIm5vdGVib29rIiwiaWQiLCJjdXJyZW50Tm90ZSIsImdldE5vdGUiLCJub3RlYm9va0lkIiwibm90ZUlkIiwibmV3Q29udGVudHMiLCJub3RlcyIsImZpbHRlciIsIm5vdGVUaXRsZSIsImhhbmRsZVRpdGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFF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QUNFO0FBQ0UsU0FBSyxFQUFFM0MsS0FEVDtBQUVFLGFBQVMsRUFBRW9DLE9BQU8sQ0FBQ3BDLEtBRnJCO0FBR0UsWUFBUSxFQUFFLGtCQUFDMEQsQ0FBRDtBQUFBLGFBQVlELGlCQUFpQixDQUFDQyxDQUFELENBQTdCO0FBQUEsS0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRSxNQUFDLCtEQUFEO0FBQWtCLGFBQVMsRUFBRXRCLE9BQU8sQ0FBQ3hCLEdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9HLENBQUMsQ0FBQ3NCLFVBQUYsSUFBZ0JGLE1BQWhCLElBQ0MsTUFBQyxVQUFEO0FBQ0UsU0FBSyxFQUFFbEMsS0FEVDtBQUVFLFlBQVEsRUFBRTJDLFlBRlo7QUFHRSxTQUFLLEVBQUVILFFBSFQ7QUFJRSxXQUFPLEVBQUVwQixPQUpYO0FBS0UsV0FBTyxFQUFFVSxPQUxYO0FBTUUsVUFBTSxFQUFFLE1BTlY7QUFPRSxlQUFXLEVBQUVYLFdBUGY7QUFRRSxhQUFTLEVBQUVtQixPQUFPLENBQUM1QixNQVJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosQ0FERjtBQXNCRDs7R0F0RXVCcUIsTTtVQUlOakMsUzs7O0tBSk1pQyxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9lZGl0b3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEhpRG90c0hvcml6b250YWwgfSBmcm9tICdyZWFjdC1pY29ucy9oaSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICB0aXRsZToge1xuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgd2lkdGg6ICc5MCUnLFxuICAgICAgcGFkZGluZ0xlZnQ6ICcxNXB4JyxcbiAgICAgIG1hcmdpbjogJzBweCcsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDgsMjQ4LDI0OCknLFxuICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICB9LFxuICAgIGVkaXRvcjoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1pbldpZHRoOiAnNDAwcHgnLFxuICAgICAgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsXG4gICAgICBwYWRkaW5nQm90dG9tOiAnMTBweCcsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRvdDoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgIHJpZ2h0OiAnMjBweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIG1hcmdpblRvcDogJzE1cHgnLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCB0aGVtZSA9ICdzbm93JztcbmNvbnN0IHBsYWNlaG9sZGVyID0gYFdoYXQncyBpbiB5b3VyIG1pbmQ/YDtcbmNvbnN0IG1vZHVsZXMgPSB7XG4gIHRvb2xiYXI6IFtcbiAgICBbeyBoZWFkZXI6ICcxJyB9LCB7IGhlYWRlcjogJzInIH0sIHsgZm9udDogW10gfSwgeyBjb2xvcjogW10gfV0sXG4gICAgW3sgc2l6ZTogW10gfV0sXG4gICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJywgJ2Jsb2NrcXVvdGUnXSxcbiAgICBbXG4gICAgICB7IGxpc3Q6ICdvcmRlcmVkJyB9LFxuICAgICAgeyBsaXN0OiAnYnVsbGV0JyB9LFxuICAgICAgeyBpbmRlbnQ6ICctMScgfSxcbiAgICAgIHsgaW5kZW50OiAnKzEnIH0sXG4gICAgXSxcbiAgICBbJ2xpbmsnLCAnaW1hZ2UnLCAndmlkZW8nXSxcbiAgICBbJ2NsZWFuJ10sXG4gIF0sXG4gIGNsaXBib2FyZDoge1xuICAgIG1hdGNoVmlzdWFsOiBmYWxzZSxcbiAgfSxcbn07XG5jb25zdCBmb3JtYXRzID0gW1xuICAnaGVhZGVyJyxcbiAgJ2ZvbnQnLFxuICAnY29sb3InLFxuICAnc2l6ZScsXG4gICdib2xkJyxcbiAgJ2l0YWxpYycsXG4gICd1bmRlcmxpbmUnLFxuICAnc3RyaWtlJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnbGlzdCcsXG4gICdidWxsZXQnLFxuICAnaW5kZW50JyxcbiAgJ2xpbmsnLFxuICAnaW1hZ2UnLFxuICAvLyAndmlkZW8nLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFJlYWN0UXVpbGwgPVxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnID8gcmVxdWlyZSgncmVhY3QtcXVpbGwnKSA6ICgpID0+IGZhbHNlO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycgYXMgYW55KTtcbiAgY29uc3QgW2NvbnRlbnRzLCBzZXRDb250ZW50c10gPSB1c2VTdGF0ZSgnJyBhcyBhbnkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChodG1sOiBhbnkpID0+IHtcbiAgICBzZXRDb250ZW50cyhodG1sKTtcbiAgICBjb25zdCBuZXdOb3RlID0ge1xuICAgICAgbm90ZTogaHRtbCxcbiAgICB9O1xuICAgIHByb3BzLnVwZGF0ZU5vdGUoXG4gICAgICBwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLmlkLFxuICAgICAgcHJvcHMuY3VycmVudE5vdGUsXG4gICAgICBuZXdOb3RlXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBnZXROb3RlID0gKG5vdGVib29rSWQ6IHN0cmluZywgbm90ZUlkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBuZXdDb250ZW50cyA9IHByb3BzLm5vdGVib29rc1tub3RlYm9va0lkXS5ub3Rlcy5maWx0ZXIoXG4gICAgICAobm90ZTogYW55KSA9PiBub3RlLmlkID09PSBub3RlSWRcbiAgICApO1xuICAgIHNldFRpdGxlKG5ld0NvbnRlbnRzWzBdLm5vdGVUaXRsZSk7XG4gICAgc2V0Q29udGVudHMobmV3Q29udGVudHNbMF0ubm90ZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXROb3RlKHByb3BzLm5vdGVib29rLCBwcm9wcy5jdXJyZW50Tm90ZSk7XG4gIH0sIFtwcm9wcy5ub3RlYm9vaywgcHJvcHMuY3VycmVudE5vdGVdKTtcblxuICBjb25zdCBoYW5kbGVUaXRsZUNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSk7XG4gICAgY29uc3QgbmV3Tm90ZSA9IHtcbiAgICAgIG5vdGVUaXRsZTogZS50YXJnZXQudmFsdWUsXG4gICAgfTtcbiAgICBwcm9wcy51cGRhdGVOb3RlKFxuICAgICAgcHJvcHMubm90ZWJvb2tzW3Byb3BzLm5vdGVib29rXS5pZCxcbiAgICAgIHByb3BzLmN1cnJlbnROb3RlLFxuICAgICAgbmV3Tm90ZVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0XG4gICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICBvbkNoYW5nZT17KGU6IGFueSkgPT4gaGFuZGxlVGl0bGVDaGFuZ2UoZSl9XG4gICAgICAvPlxuICAgICAgPEhpRG90c0hvcml6b250YWwgY2xhc3NOYW1lPXtjbGFzc2VzLmRvdH0gLz5cbiAgICAgIHshIVJlYWN0UXVpbGwgJiYgaXNPcGVuICYmIChcbiAgICAgICAgPFJlYWN0UXVpbGxcbiAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICB2YWx1ZT17Y29udGVudHN9XG4gICAgICAgICAgbW9kdWxlcz17bW9kdWxlc31cbiAgICAgICAgICBmb3JtYXRzPXtmb3JtYXRzfVxuICAgICAgICAgIGJvdW5kcz17Jy5hcHAnfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdG9yfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/editor.tsx\n");

/***/ })

})
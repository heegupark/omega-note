webpackHotUpdate_N_E("pages/index",{

/***/ "./components/editor.tsx":
/*!*******************************!*\
  !*** ./components/editor.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/editor.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    title: {\n      outline: 'none',\n      width: '100%',\n      paddingLeft: '15px',\n      margin: '0px',\n      border: 'none',\n      backgroundColor: 'rgb(248,248,248)',\n      fontSize: '24px'\n    },\n    editor: {\n      width: '100%',\n      minWidth: '400px',\n      wordBreak: 'break-word',\n      paddingBottom: '10px',\n      '&:hover': {\n        backgroundColor: 'white'\n      }\n    },\n    date: {\n      position: 'absolute',\n      \"float\": 'right',\n      fontSize: '12px',\n      top: '10px',\n      right: '20px'\n    }\n  });\n});\nvar theme = 'snow';\nvar placeholder = \"What's in your mind?\";\nvar modules = {\n  toolbar: [[{\n    header: '1'\n  }, {\n    header: '2'\n  }, {\n    font: []\n  }, {\n    color: []\n  }], [{\n    size: []\n  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{\n    list: 'ordered'\n  }, {\n    list: 'bullet'\n  }, {\n    indent: '-1'\n  }, {\n    indent: '+1'\n  }], ['link', 'image', 'video'], ['clean']],\n  clipboard: {\n    matchVisual: false\n  }\n};\nvar formats = ['header', 'font', 'color', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image' // 'video',\n];\nfunction Editor(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setOpen = _useState[1];\n\n  var ReactQuill = true ? __webpack_require__(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\") : undefined;\n  var classes = useStyles();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      title = _useState2[0],\n      setTitle = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      contents = _useState3[0],\n      setContents = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setOpen(true);\n  }, []);\n\n  var handleChange = function handleChange(html) {\n    setContents(html);\n    var newNote = {\n      note: html\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  var getNote = function getNote(notebookId, noteId) {\n    console.log(notebookId, props.currentNote);\n    var newContents = props.notebooks[notebookId].notes.filter(function (note) {\n      return note.id === noteId;\n    });\n    setTitle(newContents[0].noteTitle);\n    setContents(newContents[0].note);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getNote(props.notebook, props.currentNote);\n  }, [props.notebook, props.currentNote]);\n\n  var handleTitleChange = function handleTitleChange(e) {\n    setTitle(e.target.value);\n    var newNote = {\n      noteTitle: e.target.value\n    };\n    props.updateNote(props.notebooks[props.notebook].id, props.currentNote, newNote);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"input\", {\n    value: title,\n    className: classes.title,\n    onChange: function onChange(e) {\n      return handleTitleChange(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 7\n    }\n  }), __jsx(\"span\", {\n    className: classes.date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }\n  }, 'Last edited on ', props.formatDate(props.notebooks[props.notebook].updatedAt)), !!ReactQuill && isOpen && __jsx(ReactQuill, {\n    theme: theme,\n    onChange: handleChange,\n    value: contents,\n    modules: modules,\n    formats: formats,\n    bounds: '.app',\n    placeholder: placeholder,\n    className: classes.editor,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s(Editor, \"kOusroF6X3kmfN3hpXan5PtmFhU=\", false, function () {\n  return [useStyles];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lZGl0b3IudHN4Pzg1YWQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwidGl0bGUiLCJvdXRsaW5lIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiZWRpdG9yIiwibWluV2lkdGgiLCJ3b3JkQnJlYWsiLCJwYWRkaW5nQm90dG9tIiwiZGF0ZSIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJwbGFjZWhvbGRlciIsIm1vZHVsZXMiLCJ0b29sYmFyIiwiaGVhZGVyIiwiZm9udCIsImNvbG9yIiwic2l6ZSIsImxpc3QiLCJpbmRlbnQiLCJjbGlwYm9hcmQiLCJtYXRjaFZpc3VhbCIsImZvcm1hdHMiLCJFZGl0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0T3BlbiIsIlJlYWN0UXVpbGwiLCJyZXF1aXJlIiwiY2xhc3NlcyIsInNldFRpdGxlIiwiY29udGVudHMiLCJzZXRDb250ZW50cyIsInVzZUVmZmVjdCIsImhhbmRsZUNoYW5nZSIsImh0bWwiLCJuZXdOb3RlIiwibm90ZSIsInVwZGF0ZU5vdGUiLCJub3RlYm9va3MiLCJub3RlYm9vayIsImlkIiwiY3VycmVudE5vdGUiLCJnZXROb3RlIiwibm90ZWJvb2tJZCIsIm5vdGVJZCIsImNvbnNvbGUiLCJsb2ciLCJuZXdDb250ZW50cyIsIm5vdGVzIiwiZmlsdGVyIiwibm90ZVRpdGxlIiwiaGFuZGxlVGl0bGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmb3JtYXREYXRlIiwidXBkYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxTQUFL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Q2lCLFFBQXRCLEVBQWdDQyxFQURsQyxFQUVFbEIsS0FBSyxDQUFDbUIsV0FGUixFQUdFTixPQUhGO0FBS0QsR0FWRDs7QUFZQSxTQUNFLG1FQUNFO0FBQ0UsU0FBSyxFQUFFMUMsS0FEVDtBQUVFLGFBQVMsRUFBRW1DLE9BQU8sQ0FBQ25DLEtBRnJCO0FBR0UsWUFBUSxFQUFFLGtCQUFDMkQsQ0FBRDtBQUFBLGFBQVlELGlCQUFpQixDQUFDQyxDQUFELENBQTdCO0FBQUEsS0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRTtBQUFNLGFBQVMsRUFBRXhCLE9BQU8sQ0FBQ3ZCLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxpQkFESCxFQUVHaUIsS0FBSyxDQUFDaUMsVUFBTixDQUFpQmpDLEtBQUssQ0FBQ2dCLFNBQU4sQ0FBZ0JoQixLQUFLLENBQUNpQixRQUF0QixFQUFnQ2lCLFNBQWpELENBRkgsQ0FORixFQVVHLENBQUMsQ0FBQzlCLFVBQUYsSUFBZ0JGLE1BQWhCLElBQ0MsTUFBQyxVQUFEO0FBQ0UsU0FBSyxFQUFFakMsS0FEVDtBQUVFLFlBQVEsRUFBRTBDLFlBRlo7QUFHRSxTQUFLLEVBQUVILFFBSFQ7QUFJRSxXQUFPLEVBQUVwQixPQUpYO0FBS0UsV0FBTyxFQUFFVSxPQUxYO0FBTUUsVUFBTSxFQUFFLE1BTlY7QUFPRSxlQUFXLEVBQUVYLFdBUGY7QUFRRSxhQUFTLEVBQUVtQixPQUFPLENBQUMzQixNQVJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEosQ0FERjtBQXlCRDs7R0ExRXVCb0IsTTtVQUlOaEMsUzs7O0tBSk1nQyxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9lZGl0b3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHRpdGxlOiB7XG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcGFkZGluZ0xlZnQ6ICcxNXB4JyxcbiAgICAgIG1hcmdpbjogJzBweCcsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDgsMjQ4LDI0OCknLFxuICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICB9LFxuICAgIGVkaXRvcjoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1pbldpZHRoOiAnNDAwcHgnLFxuICAgICAgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsXG4gICAgICBwYWRkaW5nQm90dG9tOiAnMTBweCcsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRhdGU6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgdG9wOiAnMTBweCcsXG4gICAgICByaWdodDogJzIwcHgnLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCB0aGVtZSA9ICdzbm93JztcbmNvbnN0IHBsYWNlaG9sZGVyID0gYFdoYXQncyBpbiB5b3VyIG1pbmQ/YDtcbmNvbnN0IG1vZHVsZXMgPSB7XG4gIHRvb2xiYXI6IFtcbiAgICBbeyBoZWFkZXI6ICcxJyB9LCB7IGhlYWRlcjogJzInIH0sIHsgZm9udDogW10gfSwgeyBjb2xvcjogW10gfV0sXG4gICAgW3sgc2l6ZTogW10gfV0sXG4gICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJywgJ2Jsb2NrcXVvdGUnXSxcbiAgICBbXG4gICAgICB7IGxpc3Q6ICdvcmRlcmVkJyB9LFxuICAgICAgeyBsaXN0OiAnYnVsbGV0JyB9LFxuICAgICAgeyBpbmRlbnQ6ICctMScgfSxcbiAgICAgIHsgaW5kZW50OiAnKzEnIH0sXG4gICAgXSxcbiAgICBbJ2xpbmsnLCAnaW1hZ2UnLCAndmlkZW8nXSxcbiAgICBbJ2NsZWFuJ10sXG4gIF0sXG4gIGNsaXBib2FyZDoge1xuICAgIG1hdGNoVmlzdWFsOiBmYWxzZSxcbiAgfSxcbn07XG5jb25zdCBmb3JtYXRzID0gW1xuICAnaGVhZGVyJyxcbiAgJ2ZvbnQnLFxuICAnY29sb3InLFxuICAnc2l6ZScsXG4gICdib2xkJyxcbiAgJ2l0YWxpYycsXG4gICd1bmRlcmxpbmUnLFxuICAnc3RyaWtlJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnbGlzdCcsXG4gICdidWxsZXQnLFxuICAnaW5kZW50JyxcbiAgJ2xpbmsnLFxuICAnaW1hZ2UnLFxuICAvLyAndmlkZW8nLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFJlYWN0UXVpbGwgPVxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnID8gcmVxdWlyZSgncmVhY3QtcXVpbGwnKSA6ICgpID0+IGZhbHNlO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycgYXMgYW55KTtcbiAgY29uc3QgW2NvbnRlbnRzLCBzZXRDb250ZW50c10gPSB1c2VTdGF0ZSgnJyBhcyBhbnkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChodG1sOiBhbnkpID0+IHtcbiAgICBzZXRDb250ZW50cyhodG1sKTtcbiAgICBjb25zdCBuZXdOb3RlID0ge1xuICAgICAgbm90ZTogaHRtbCxcbiAgICB9O1xuICAgIHByb3BzLnVwZGF0ZU5vdGUoXG4gICAgICBwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLmlkLFxuICAgICAgcHJvcHMuY3VycmVudE5vdGUsXG4gICAgICBuZXdOb3RlXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBnZXROb3RlID0gKG5vdGVib29rSWQ6IHN0cmluZywgbm90ZUlkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zb2xlLmxvZyhub3RlYm9va0lkLCBwcm9wcy5jdXJyZW50Tm90ZSk7XG4gICAgY29uc3QgbmV3Q29udGVudHMgPSBwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tJZF0ubm90ZXMuZmlsdGVyKFxuICAgICAgKG5vdGU6IGFueSkgPT4gbm90ZS5pZCA9PT0gbm90ZUlkXG4gICAgKTtcbiAgICBzZXRUaXRsZShuZXdDb250ZW50c1swXS5ub3RlVGl0bGUpO1xuICAgIHNldENvbnRlbnRzKG5ld0NvbnRlbnRzWzBdLm5vdGUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Tm90ZShwcm9wcy5ub3RlYm9vaywgcHJvcHMuY3VycmVudE5vdGUpO1xuICB9LCBbcHJvcHMubm90ZWJvb2ssIHByb3BzLmN1cnJlbnROb3RlXSk7XG5cbiAgY29uc3QgaGFuZGxlVGl0bGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xuICAgIGNvbnN0IG5ld05vdGUgPSB7XG4gICAgICBub3RlVGl0bGU6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH07XG4gICAgcHJvcHMudXBkYXRlTm90ZShcbiAgICAgIHByb3BzLm5vdGVib29rc1twcm9wcy5ub3RlYm9va10uaWQsXG4gICAgICBwcm9wcy5jdXJyZW50Tm90ZSxcbiAgICAgIG5ld05vdGVcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IGhhbmRsZVRpdGxlQ2hhbmdlKGUpfVxuICAgICAgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5kYXRlfT5cbiAgICAgICAgeydMYXN0IGVkaXRlZCBvbiAnfVxuICAgICAgICB7cHJvcHMuZm9ybWF0RGF0ZShwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLnVwZGF0ZWRBdCl9XG4gICAgICA8L3NwYW4+XG4gICAgICB7ISFSZWFjdFF1aWxsICYmIGlzT3BlbiAmJiAoXG4gICAgICAgIDxSZWFjdFF1aWxsXG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e2NvbnRlbnRzfVxuICAgICAgICAgIG1vZHVsZXM9e21vZHVsZXN9XG4gICAgICAgICAgZm9ybWF0cz17Zm9ybWF0c31cbiAgICAgICAgICBib3VuZHM9eycuYXBwJ31cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmVkaXRvcn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/editor.tsx\n");

/***/ })

})
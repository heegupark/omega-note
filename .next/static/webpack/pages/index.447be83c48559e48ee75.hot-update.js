webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note.tsx":
/*!*****************************!*\
  !*** ./components/note.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Note; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/esm/index.js\");\n/* harmony import */ var _note_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./note-list */ \"./components/note-list.tsx\");\n/* harmony import */ var _editor_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor-title */ \"./components/editor-title.tsx\");\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor */ \"./components/editor.tsx\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDdirection: 'row',\n      height: '100vh'\n    },\n    loading: {\n      margin: '20px 20px 0px 20px'\n    },\n    progress: {\n      width: '100%',\n      margin: '20px 20px 0px 20px',\n      '& > * + *': {\n        marginTop: theme.spacing(2)\n      }\n    },\n    box: {\n      display: 'flex',\n      flexDdirection: 'column',\n      backgroundColor: 'rgb(248, 248, 248)',\n      height: '100vh',\n      resize: 'horizontal',\n      minWidth: '200px',\n      width: '300px',\n      maxWidth: '400px',\n      overflow: 'hidden',\n      borderRight: '1px solid rgb(230, 230, 230)'\n    }\n  });\n});\nfunction Note(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      title = _useState[0],\n      setTitle = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isDelete = _useState2[0],\n      setIsDeleted = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      contents = _useState3[0],\n      setContents = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      lastNotebook = _useState4[0],\n      setLastNotebook = _useState4[1];\n\n  var getNote = function getNote(notebookId, noteId) {\n    var newContents = props.notebooks[notebookId].notes.filter(function (note) {\n      return note.id === noteId;\n    });\n    setTitle(newContents[0].noteTitle);\n    setContents(newContents[0].note);\n    setIsDeleted(newContents[0].isDeleted);\n    setLastNotebook(newContents[0].lastNotebook);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    getNote(props.notebook, props.currentNoteId);\n  }, [props.notebook, props.currentNoteId]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"DndProvider\"], {\n    backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__[\"HTML5Backend\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, __jsx(_note_list__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  })))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, __jsx(_editor_title__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  })), props.currentNoteId && __jsx(_editor__WEBPACK_IMPORTED_MODULE_7__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    title: title,\n    contents: contents,\n    setTitle: setTitle,\n    setContents: setContents,\n    lastNotebook: lastNotebook,\n    isDeleted: isDeleted,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  })))));\n}\n\n_s(Note, \"lY7/G8YElUIciCy1SPh7auyRL08=\", false, function () {\n  return [useStyles];\n});\n\n_c = Note;\n\nvar _c;\n\n$RefreshReg$(_c, \"Note\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLnRzeD81N2I3Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiZmxleERkaXJlY3Rpb24iLCJoZWlnaHQiLCJsb2FkaW5nIiwibWFyZ2luIiwicHJvZ3Jlc3MiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJib3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZXNpemUiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwib3ZlcmZsb3ciLCJib3JkZXJSaWdodCIsIk5vdGUiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJpc0RlbGV0ZSIsInNldElzRGVsZXRlZCIsImNvbnRlbnRzIiwic2V0Q29udGVudHMiLCJsYXN0Tm90ZWJvb2siLCJzZXRMYXN0Tm90ZWJvb2siLCJnZXROb3RlIiwibm90ZWJvb2tJZCIsIm5vdGVJZCIsIm5ld0NvbnRlbnRzIiwibm90ZWJvb2tzIiwibm90ZXMiLCJmaWx0ZXIiLCJub3RlIiwiaWQiLCJub3RlVGl0bGUiLCJpc0RlbGV0ZWQiLCJ1c2VFZmZlY3QiLCJub3RlYm9vayIsImN1cnJlbnROb3RlSWQiLCJIVE1MNUJhY2tlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxvQkFBYyxFQUFFLEtBRlo7QUFHSkMsWUFBTSxFQUFFO0FBSEosS0FESztBQU1YQyxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFO0FBREQsS0FORTtBQVNYQyxZQUFRLEVBQUU7QUFDUkMsV0FBSyxF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S0FETjtBQUVFLFNBQUssRUFBRUcsS0FGVDtBQUdFLFlBQVEsRUFBRUksUUFIWjtBQUlFLFlBQVEsRUFBRUgsUUFKWjtBQUtFLGVBQVcsRUFBRUksV0FMZjtBQU1FLGdCQUFZLEVBQUVDLFlBTmhCO0FBT0UsYUFBUyxFQUFFWSxTQVBiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FISixDQU5GLENBREYsQ0FERjtBQXlCRDs7R0E5Q3VCdEIsSTtVQUNOckIsUzs7O0tBRE1xQixJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ub3RlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBEbmRQcm92aWRlciB9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgeyBIVE1MNUJhY2tlbmQgfSBmcm9tICdyZWFjdC1kbmQtaHRtbDUtYmFja2VuZCc7XG5pbXBvcnQgTm90ZUxpc3QgZnJvbSAnLi9ub3RlLWxpc3QnO1xuaW1wb3J0IEVkaXRvclRpdGxlIGZyb20gJy4vZWRpdG9yLXRpdGxlJztcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InO1xuaW1wb3J0IElOb3RlUHJvcHMgZnJvbSAnLi9pbnRlcmZhY2VzL2lub3RlcHJvcHMnO1xuaW1wb3J0IElOb3RlIGZyb20gJy4vaW50ZXJmYWNlcy9pbm90ZSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGRpcmVjdGlvbjogJ3JvdycsXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgfSxcbiAgICBsb2FkaW5nOiB7XG4gICAgICBtYXJnaW46ICcyMHB4IDIwcHggMHB4IDIwcHgnLFxuICAgIH0sXG4gICAgcHJvZ3Jlc3M6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXJnaW46ICcyMHB4IDIwcHggMHB4IDIwcHgnLFxuICAgICAgJyYgPiAqICsgKic6IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJveDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERkaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0OCwgMjQ4LCAyNDgpJyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIHJlc2l6ZTogJ2hvcml6b250YWwnLFxuICAgICAgbWluV2lkdGg6ICcyMDBweCcsXG4gICAgICB3aWR0aDogJzMwMHB4JyxcbiAgICAgIG1heFdpZHRoOiAnNDAwcHgnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzApJyxcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZShwcm9wczogSU5vdGVQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtpc0RlbGV0ZSwgc2V0SXNEZWxldGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2NvbnRlbnRzLCBzZXRDb250ZW50c10gPSB1c2VTdGF0ZTxhbnk+KCcnKTtcbiAgY29uc3QgW2xhc3ROb3RlYm9vaywgc2V0TGFzdE5vdGVib29rXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuXG4gIGNvbnN0IGdldE5vdGUgPSAobm90ZWJvb2tJZDogc3RyaW5nLCBub3RlSWQ6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IG5ld0NvbnRlbnRzID0gcHJvcHMubm90ZWJvb2tzW25vdGVib29rSWRdLm5vdGVzLmZpbHRlcihcbiAgICAgIChub3RlOiBJTm90ZSkgPT4gbm90ZS5pZCA9PT0gbm90ZUlkXG4gICAgKTtcbiAgICBzZXRUaXRsZShuZXdDb250ZW50c1swXS5ub3RlVGl0bGUpO1xuICAgIHNldENvbnRlbnRzKG5ld0NvbnRlbnRzWzBdLm5vdGUpO1xuICAgIHNldElzRGVsZXRlZChuZXdDb250ZW50c1swXS5pc0RlbGV0ZWQpO1xuICAgIHNldExhc3ROb3RlYm9vayhuZXdDb250ZW50c1swXS5sYXN0Tm90ZWJvb2spO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Tm90ZShwcm9wcy5ub3RlYm9vaywgcHJvcHMuY3VycmVudE5vdGVJZCk7XG4gIH0sIFtwcm9wcy5ub3RlYm9vaywgcHJvcHMuY3VycmVudE5vdGVJZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3h9PlxuICAgICAgICAgIDxEbmRQcm92aWRlciBiYWNrZW5kPXtIVE1MNUJhY2tlbmR9PlxuICAgICAgICAgICAgPE5vdGVMaXN0IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICA8L0RuZFByb3ZpZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8RWRpdG9yVGl0bGUgey4uLnByb3BzfSAvPlxuICAgICAgICAgIHtwcm9wcy5jdXJyZW50Tm90ZUlkICYmIChcbiAgICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgIGNvbnRlbnRzPXtjb250ZW50c31cbiAgICAgICAgICAgICAgc2V0VGl0bGU9e3NldFRpdGxlfVxuICAgICAgICAgICAgICBzZXRDb250ZW50cz17c2V0Q29udGVudHN9XG4gICAgICAgICAgICAgIGxhc3ROb3RlYm9vaz17bGFzdE5vdGVib29rfVxuICAgICAgICAgICAgICBpc0RlbGV0ZWQ9e2lzRGVsZXRlZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/note.tsx\n");

/***/ })

})
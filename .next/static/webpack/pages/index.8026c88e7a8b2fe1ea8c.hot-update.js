webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note.tsx":
/*!*****************************!*\
  !*** ./components/note.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Note; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/esm/index.js\");\n/* harmony import */ var _note_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./note-list */ \"./components/note-list.tsx\");\n/* harmony import */ var _editor_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor-title */ \"./components/editor-title.tsx\");\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor */ \"./components/editor.tsx\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDdirection: 'row',\n      height: '100vh'\n    },\n    loading: {\n      margin: '20px 20px 0px 20px'\n    },\n    progress: {\n      width: '100%',\n      margin: '20px 20px 0px 20px',\n      '& > * + *': {\n        marginTop: theme.spacing(2)\n      }\n    },\n    box: {\n      display: 'flex',\n      flexDdirection: 'column',\n      backgroundColor: 'rgb(248, 248, 248)',\n      height: '100vh',\n      resize: 'horizontal',\n      minWidth: '200px',\n      width: '300px',\n      maxWidth: '400px',\n      overflow: 'hidden',\n      borderRight: '1px solid rgb(230, 230, 230)'\n    }\n  });\n});\nfunction Note(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      title = _useState[0],\n      setTitle = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      contents = _useState2[0],\n      setContents = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isDeleted = _useState3[0],\n      setIsDeleted = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      lastNotebook = _useState4[0],\n      setLastNotebook = _useState4[1];\n\n  var getNote = function getNote(notebookId, noteId) {\n    var _newContents$, _newContents$2, _newContents$3, _newContents$4;\n\n    var newContents = props.notebooks[notebookId].notes.filter(function (note) {\n      return note.id === noteId;\n    });\n    console.log(newContents);\n    setTitle((_newContents$ = newContents[0]) === null || _newContents$ === void 0 ? void 0 : _newContents$.noteTitle);\n    setContents((_newContents$2 = newContents[0]) === null || _newContents$2 === void 0 ? void 0 : _newContents$2.note);\n    setIsDeleted((_newContents$3 = newContents[0]) === null || _newContents$3 === void 0 ? void 0 : _newContents$3.isDeleted);\n    setLastNotebook((_newContents$4 = newContents[0]) === null || _newContents$4 === void 0 ? void 0 : _newContents$4.lastNotebook);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    getNote(props.notebook, props.currentNoteId);\n  }, [props.notebook, props.currentNoteId]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, __jsx(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"DndProvider\"], {\n    backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__[\"HTML5Backend\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, __jsx(_note_list__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  })))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, __jsx(_editor_title__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  })), props.currentNoteId && title && __jsx(_editor__WEBPACK_IMPORTED_MODULE_7__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    key: props.currentNoteId\n  }, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  })))));\n}\n\n_s(Note, \"5pzZlVJMSeU/K0Hcx3NW8WM+eHc=\", false, function () {\n  return [useStyles];\n});\n\n_c = Note;\n\nvar _c;\n\n$RefreshReg$(_c, \"Note\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLnRzeD81N2I3Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiZmxleERkaXJlY3Rpb24iLCJoZWlnaHQiLCJsb2FkaW5nIiwibWFyZ2luIiwicHJvZ3Jlc3MiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJib3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZXNpemUiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwib3ZlcmZsb3ciLCJib3JkZXJSaWdodCIsIk5vdGUiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJjb250ZW50cyIsInNldENvbnRlbnRzIiwiaXNEZWxldGVkIiwic2V0SXNEZWxldGVkIiwibGFzdE5vdGVib29rIiwic2V0TGFzdE5vdGVib29rIiwiZ2V0Tm90ZSIsIm5vdGVib29rSWQiLCJub3RlSWQiLCJuZXdDb250ZW50cyIsIm5vdGVib29rcyIsIm5vdGVzIiwiZmlsdGVyIiwibm90ZSIsImlkIiwiY29uc29sZSIsImxvZyIsIm5vdGVUaXRsZSIsInVzZUVmZmVjdCIsIm5vdGVib29rIiwiY3VycmVudE5vdGVJZCIsIkhUTUw1QmFja2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxNQURMO0FBRUpDLG9CQUFjLEVBQUUsS0FGWjtBQUdKQyxZQUFNLEVBQUU7QUFISixLQURLO0FBTVhDLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUU7QUFERCxLQU5FO0FBU1hDLFlBQVEsRUFBRTtBQUNSQyxX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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsRUFFR0EsS0FBSyxDQUFDeUIsYUFBTixJQUF1QnRCLEtBQXZCLElBQ0MsTUFBQywrQ0FBRDtBQUFRLE9BQUcsRUFBRUgsS0FBSyxDQUFDeUI7QUFBbkIsS0FBc0N6QixLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSEosQ0FORixDQURGLENBREY7QUFpQkQ7O0dBdkN1QkQsSTtVQUNOckIsUzs7O0tBRE1xQixJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ub3RlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBEbmRQcm92aWRlciB9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgeyBIVE1MNUJhY2tlbmQgfSBmcm9tICdyZWFjdC1kbmQtaHRtbDUtYmFja2VuZCc7XG5pbXBvcnQgTm90ZUxpc3QgZnJvbSAnLi9ub3RlLWxpc3QnO1xuaW1wb3J0IEVkaXRvclRpdGxlIGZyb20gJy4vZWRpdG9yLXRpdGxlJztcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InO1xuaW1wb3J0IElOb3RlUHJvcHMgZnJvbSAnLi9pbnRlcmZhY2VzL2lub3RlcHJvcHMnO1xuaW1wb3J0IElOb3RlIGZyb20gJy4vaW50ZXJmYWNlcy9pbm90ZSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGRpcmVjdGlvbjogJ3JvdycsXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgfSxcbiAgICBsb2FkaW5nOiB7XG4gICAgICBtYXJnaW46ICcyMHB4IDIwcHggMHB4IDIwcHgnLFxuICAgIH0sXG4gICAgcHJvZ3Jlc3M6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXJnaW46ICcyMHB4IDIwcHggMHB4IDIwcHgnLFxuICAgICAgJyYgPiAqICsgKic6IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJveDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERkaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0OCwgMjQ4LCAyNDgpJyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIHJlc2l6ZTogJ2hvcml6b250YWwnLFxuICAgICAgbWluV2lkdGg6ICcyMDBweCcsXG4gICAgICB3aWR0aDogJzMwMHB4JyxcbiAgICAgIG1heFdpZHRoOiAnNDAwcHgnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzApJyxcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZShwcm9wczogSU5vdGVQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtjb250ZW50cywgc2V0Q29udGVudHNdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtpc0RlbGV0ZWQsIHNldElzRGVsZXRlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtsYXN0Tm90ZWJvb2ssIHNldExhc3ROb3RlYm9va10gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcblxuICBjb25zdCBnZXROb3RlID0gKG5vdGVib29rSWQ6IHN0cmluZywgbm90ZUlkOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCBuZXdDb250ZW50cyA9IHByb3BzLm5vdGVib29rc1tub3RlYm9va0lkXS5ub3Rlcy5maWx0ZXIoXG4gICAgICAobm90ZTogSU5vdGUpID0+IG5vdGUuaWQgPT09IG5vdGVJZFxuICAgICk7XG4gICAgY29uc29sZS5sb2cobmV3Q29udGVudHMpO1xuICAgIHNldFRpdGxlKG5ld0NvbnRlbnRzWzBdPy5ub3RlVGl0bGUpO1xuICAgIHNldENvbnRlbnRzKG5ld0NvbnRlbnRzWzBdPy5ub3RlKTtcbiAgICBzZXRJc0RlbGV0ZWQobmV3Q29udGVudHNbMF0/LmlzRGVsZXRlZCk7XG4gICAgc2V0TGFzdE5vdGVib29rKG5ld0NvbnRlbnRzWzBdPy5sYXN0Tm90ZWJvb2spO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Tm90ZShwcm9wcy5ub3RlYm9vaywgcHJvcHMuY3VycmVudE5vdGVJZCk7XG4gIH0sIFtwcm9wcy5ub3RlYm9vaywgcHJvcHMuY3VycmVudE5vdGVJZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3h9PlxuICAgICAgICAgIDxEbmRQcm92aWRlciBiYWNrZW5kPXtIVE1MNUJhY2tlbmR9PlxuICAgICAgICAgICAgPE5vdGVMaXN0IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICA8L0RuZFByb3ZpZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8RWRpdG9yVGl0bGUgey4uLnByb3BzfSAvPlxuICAgICAgICAgIHtwcm9wcy5jdXJyZW50Tm90ZUlkICYmIHRpdGxlICYmIChcbiAgICAgICAgICAgIDxFZGl0b3Iga2V5PXtwcm9wcy5jdXJyZW50Tm90ZUlkfSB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/note.tsx\n");

/***/ })

})
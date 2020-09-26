webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note.tsx":
/*!*****************************!*\
  !*** ./components/note.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Note; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/esm/index.js\");\n/* harmony import */ var _note_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./note-list */ \"./components/note-list.tsx\");\n/* harmony import */ var _editor_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor-title */ \"./components/editor-title.tsx\");\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor */ \"./components/editor.tsx\");\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDdirection: 'row',\n      height: '100vh'\n    },\n    loading: {\n      margin: '20px 20px 0px 20px'\n    },\n    progress: {\n      width: '100%',\n      margin: '20px 20px 0px 20px',\n      '& > * + *': {\n        marginTop: theme.spacing(2)\n      }\n    },\n    box: {\n      display: 'flex',\n      flexDdirection: 'column',\n      backgroundColor: 'rgb(248, 248, 248)',\n      height: '100vh',\n      resize: 'horizontal',\n      minWidth: '200px',\n      width: '300px',\n      maxWidth: '400px',\n      overflow: 'hidden',\n      borderRight: '1px solid rgb(230, 230, 230)'\n    },\n    emptyIcon: {\n      fontSize: '75px'\n    },\n    newNoteText: {\n      cursor: 'pointer',\n      color: 'rgb(0,168,45)'\n    }\n  });\n});\nfunction Note(props) {\n  _s();\n\n  var classes = useStyles();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, props.notebook ? __jsx(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"DndProvider\"], {\n    backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__[\"HTML5Backend\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, __jsx(_note_list__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 15\n    }\n  }))) : __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: classes.emptyIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 15\n    }\n  }, __jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_8__[\"CgNotes\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  }, \"It all begins with notes\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }, \"Click the\", ' ', __jsx(\"span\", {\n    onClick: function onClick() {\n      return props.addNewNote('', '');\n    },\n    className: classes.newNoteText,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, \"+ New Note\"), ' ', \"button in the side bar to create note.\"))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }, props.notebook && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_editor_title__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 15\n    }\n  })), props.currentNoteId && __jsx(_editor__WEBPACK_IMPORTED_MODULE_7__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 39\n    }\n  }))))));\n}\n\n_s(Note, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Note;\n\nvar _c;\n\n$RefreshReg$(_c, \"Note\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLnRzeD81N2I3Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiZmxleERkaXJlY3Rpb24iLCJoZWlnaHQiLCJsb2FkaW5nIiwibWFyZ2luIiwicHJvZ3Jlc3MiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJib3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZXNpemUiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwib3ZlcmZsb3ciLCJib3JkZXJSaWdodCIsImVtcHR5SWNvbiIsImZvbnRTaXplIiwibmV3Tm90ZVRleHQiLCJjdXJzb3IiLCJjb2xvciIsIk5vdGUiLCJwcm9wcyIsImNsYXNzZXMiLCJub3RlYm9vayIsIkhUTUw1QmFja2VuZCIsImFkZE5ld05vdGUiLCJjdXJyZW50Tm90ZUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE1BREw7QUFFSkMsb0JBQWMsRUFBRSxLQUZaO0FBR0pDLFlBQU0sRUFBRTtBQUhKLEtBREs7QUFNWEMsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRTtBQURELEtBTkU7QUFTWEMsWUFBUSxFQUFFO0FBQ1JDLFdBQUssRUFBRSxNQURDO0FBRVJGLFlBQU0sRUFBRSxvQkFGQTtBQUdSLG1CQUFhO0FBQ1hHLGlCQUFTLEVBQUVWLEtBQUssQ0FBQ1csT0FBTixDQUFjLENBQWQ7QUFEQTtBQUhMLEtBVEM7QUFnQlhDLE9BQUcsRUFBRTtBQUNIVCxhQUFPLEVBQUUsTUFETjtBQUVIQyxvQkFBYyxFQUFFLFFBRmI7QUFHSFMscUJBQWUsRUFBRSxvQkFIZDtBQUlIUixZQUFNLEVBQUUsT0FKTDtBQUtIUyxZQUFNLEVBQUUsWUFMTDtBQU1IQyxjQUFRLEVBQUUsT0FOUDtBQU9ITixXQUFLLEVBQUUsT0FQSjtBQVFITyxjQUFRLEVBQUUsT0FSUDtBQVNIQyxjQUFRLEVBQUUsUUFUUDtBQVVIQyxpQkFBVyxFQUFFO0FBVlYsS0FoQk07QUE0QlhDLGFBQVMsRUFBRTtBQUNUQyxjQUFRLEVBQUU7QUFERCxLQTVCQTtBQStCWEMsZUFBVyxFQUFFO0FBQ1hDLFlBQU0sRUFBRSxTQURHO0FBRVhDLFdBQUssRUFBRTtBQUZJO0FBL0JGLEdBQUQsQ0FEZTtBQUFBLENBQUQsQ0FBNUI7QUF1Q2UsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQWlDO0FBQUE7O0FBQzlDLE1BQU1DLE9BQU8sR0FBRzVCLFNBQVMsRUFBekI7QUFFQSxTQUNFLG1FQUNFO0FBQUssYUFBUyxFQUFFNEIsT0FBTyxDQUFDeEIsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFd0IsT0FBTyxDQUFDZCxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dhLEtBQUssQ0FBQ0UsUUFBTixHQUNDLE1BQUMscURBQUQ7QUFBYSxXQUFPLEVBQUVDLG9FQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRCx5RkFBY0gsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERCxHQUtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUMsT0FBTyxDQUFDUCxTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNZLEdBRFosRUFFRTtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU1NLEtBQUssQ0FBQ0ksVUFBTixDQUFpQixFQUFqQixFQUFxQixFQUFyQixDQUFOO0FBQUEsS0FEWDtBQUVFLGFBQVMsRUFBRUgsT0FBTyxDQUFDTCxXQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLEVBT1UsR0FQViwyQ0FMRixDQU5KLENBREYsRUF5QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSSxLQUFLLENBQUNFLFFBQU4sSUFDQyxtRUFDRSxNQUFDLHFEQUFELHlGQUFpQkYsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLEVBRUdBLEtBQUssQ0FBQ0ssYUFBTixJQUF1QixNQUFDLCtDQUFELHlGQUFZTCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGMUIsQ0FGSixDQXpCRixDQURGLENBREY7QUFzQ0Q7O0dBekN1QkQsSTtVQUNOMUIsUzs7O0tBRE0wQixJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ub3RlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IERuZFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtZG5kJztcbmltcG9ydCB7IEhUTUw1QmFja2VuZCB9IGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJztcbmltcG9ydCBOb3RlTGlzdCBmcm9tICcuL25vdGUtbGlzdCc7XG5pbXBvcnQgRWRpdG9yVGl0bGUgZnJvbSAnLi9lZGl0b3ItdGl0bGUnO1xuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcic7XG5pbXBvcnQgSU5vdGVQcm9wcyBmcm9tICcuL2ludGVyZmFjZXMvaW5vdGVwcm9wcyc7XG5pbXBvcnQgeyBDZ05vdGVzIH0gZnJvbSAncmVhY3QtaWNvbnMvY2cnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERkaXJlY3Rpb246ICdyb3cnLFxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIH0sXG4gICAgbG9hZGluZzoge1xuICAgICAgbWFyZ2luOiAnMjBweCAyMHB4IDBweCAyMHB4JyxcbiAgICB9LFxuICAgIHByb2dyZXNzOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMjBweCAyMHB4IDBweCAyMHB4JyxcbiAgICAgICcmID4gKiArIConOiB7XG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBib3g6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEZGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDgsIDI0OCwgMjQ4KScsXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICByZXNpemU6ICdob3Jpem9udGFsJyxcbiAgICAgIG1pbldpZHRoOiAnMjAwcHgnLFxuICAgICAgd2lkdGg6ICczMDBweCcsXG4gICAgICBtYXhXaWR0aDogJzQwMHB4JyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkIHJnYigyMzAsIDIzMCwgMjMwKScsXG4gICAgfSxcbiAgICBlbXB0eUljb246IHtcbiAgICAgIGZvbnRTaXplOiAnNzVweCcsXG4gICAgfSxcbiAgICBuZXdOb3RlVGV4dDoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogJ3JnYigwLDE2OCw0NSknLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlKHByb3BzOiBJTm90ZVByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm94fT5cbiAgICAgICAgICB7cHJvcHMubm90ZWJvb2sgPyAoXG4gICAgICAgICAgICA8RG5kUHJvdmlkZXIgYmFja2VuZD17SFRNTDVCYWNrZW5kfT5cbiAgICAgICAgICAgICAgPE5vdGVMaXN0IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgIDwvRG5kUHJvdmlkZXI+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVtcHR5SWNvbn0+XG4gICAgICAgICAgICAgICAgPENnTm90ZXMgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+SXQgYWxsIGJlZ2lucyB3aXRoIG5vdGVzPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgQ2xpY2sgdGhleycgJ31cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuYWRkTmV3Tm90ZSgnJywgJycpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5ld05vdGVUZXh0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICsgTmV3IE5vdGVcbiAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgICAgICAgICAgICBidXR0b24gaW4gdGhlIHNpZGUgYmFyIHRvIGNyZWF0ZSBub3RlLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtwcm9wcy5ub3RlYm9vayAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8RWRpdG9yVGl0bGUgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICB7cHJvcHMuY3VycmVudE5vdGVJZCAmJiA8RWRpdG9yIHsuLi5wcm9wc30gLz59XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/note.tsx\n");

/***/ })

})
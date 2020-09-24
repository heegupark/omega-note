webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note-list.tsx":
/*!**********************************!*\
  !*** ./components/note-list.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteList; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Divider */ \"./node_modules/@material-ui/core/esm/Divider/index.js\");\n/* harmony import */ var _note_list_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./note-list-item */ \"./components/note-list-item.tsx\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note-list.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      overflowY: 'scroll',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px',\n      width: '100%'\n    },\n    title: {\n      padding: '10px 15px',\n      fontSize: '22px',\n      wordBreak: 'break-word'\n    },\n    noteCount: {\n      fontSize: '12px',\n      padding: '10px 15px',\n      color: 'rgb(107,107,107)'\n    },\n    date: {\n      fontSize: '10px'\n    },\n    empty: {\n      alignItems: 'center',\n      justifyContent: 'center',\n      margin: 'auto',\n      textAlign: 'center',\n      padding: '35px'\n    },\n    emptyIcon: {\n      fontSize: '75px'\n    },\n    newNoteText: {\n      cursor: 'pointer',\n      color: 'rgb(0,168,45)'\n    }\n  });\n});\nfunction NoteList(props) {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n\n  var convertTitle = function convertTitle(title, length) {\n    return title.length > length ? title.substring(0, length) + '...' : title;\n  };\n\n  var noteCount = props.notebooks[props.notebook].notes.length;\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: classes.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, convertTitle(props.notebooks[props.notebook].title, 15)), __jsx(\"div\", {\n    className: classes.noteCount,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, \"\".concat(noteCount, \" note\").concat(noteCount > 1 ? 's' : ''), __jsx(\"span\", {\n    className: classes.date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, 'Last edited on ', props.formatDate(props.notebooks[props.notebook].updatedAt))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }), props.notebooks[props.notebook].notes.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, props.notebooks[props.notebook].notes.map(function (note) {\n    return __jsx(\"div\", {\n      key: note.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 15\n      }\n    }, __jsx(_note_list_item__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      note: note\n    }, props, {\n      convertTitle: convertTitle,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 17\n      }\n    })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 17\n      }\n    }));\n  })) : __jsx(\"div\", {\n    className: classes.empty,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.emptyIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_3__[\"CgNotes\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 11\n    }\n  }, \"It all begins with notes\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  }, \"Click the\", ' ', __jsx(\"span\", {\n    onClick: function onClick() {\n      return props.addNewNote();\n    },\n    className: classes.newNoteText,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  }, \"+ New Note\"), ' ', \"button in the side bar to create note.\")));\n}\n\n_s(NoteList, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = NoteList;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLWxpc3QudHN4PzIxYzUiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0Iiwib3ZlcmZsb3dZIiwibWFyZ2luIiwiY29sb3IiLCJmb250U2l6ZSIsIndpZHRoIiwidGl0bGUiLCJwYWRkaW5nIiwid29yZEJyZWFrIiwibm90ZUNvdW50IiwiZGF0ZSIsImVtcHR5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwiZW1wdHlJY29uIiwibmV3Tm90ZVRleHQiLCJjdXJzb3IiLCJOb3RlTGlzdCIsInByb3BzIiwiY2xhc3NlcyIsImNvbnZlcnRUaXRsZSIsImxlbmd0aCIsInN1YnN0cmluZyIsIm5vdGVib29rcyIsIm5vdGVib29rIiwibm90ZXMiLCJmb3JtYXREYXRlIiwidXBkYXRlZEF0IiwibWFwIiwibm90ZSIsImlkIiwiYWRkTmV3Tm90ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxNQURMO0FBRUpDLG1CQUFhLEVBQUUsUUFGWDtBQUdKQyxZQUFNLEVBQUUsT0FISjtBQUlKQyxlQUFTLEVBQUUsUUFKUDtBQUtKQyxZQUFNLEVBQUUsTUFMSjtBQU1KQyxXQUFLLEVBQUUsZUFOSDtBQU9KQyxjQUFRLEVBQUUsTUFQTjtBQVFKQyxXQUFLLEVBQUU7QUFSSCxLQURLO0FBV1hDLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsV0FESjtBQUVMSCxjQUFRLEVBQUUsTUFGTDtBQUdMSSxlQUFTLEVBQUU7QUFITixLQVhJ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TkYsQ0FERjtBQVVELEdBWEEsQ0FESCxDQURELEdBZ0JDO0FBQUssYUFBUyxFQUFFRCxPQUFPLENBQUNULEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRVMsT0FBTyxDQUFDTCxTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNZLEdBRFosRUFFRTtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU1JLEtBQUssQ0FBQ2EsVUFBTixFQUFOO0FBQUEsS0FEWDtBQUVFLGFBQVMsRUFBRVosT0FBTyxDQUFDSixXQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLEVBT1UsR0FQViwyQ0FMRixDQTdCSixDQURGO0FBaUREOztHQXpEdUJFLFE7VUFDTnpCLFM7OztLQURNeUIsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbm90ZS1saXN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IENnTm90ZXMgfSBmcm9tICdyZWFjdC1pY29ucy9jZyc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcbmltcG9ydCBOb3RlTGlzdEl0ZW0gZnJvbSAnLi9ub3RlLWxpc3QtaXRlbSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGNvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBwYWRkaW5nOiAnMTBweCAxNXB4JyxcbiAgICAgIGZvbnRTaXplOiAnMjJweCcsXG4gICAgICB3b3JkQnJlYWs6ICdicmVhay13b3JkJyxcbiAgICB9LFxuICAgIG5vdGVDb3VudDoge1xuICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4IDE1cHgnLFxuICAgICAgY29sb3I6ICdyZ2IoMTA3LDEwNywxMDcpJyxcbiAgICB9LFxuICAgIGRhdGU6IHtcbiAgICAgIGZvbnRTaXplOiAnMTBweCcsXG4gICAgfSxcbiAgICBlbXB0eToge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBwYWRkaW5nOiAnMzVweCcsXG4gICAgfSxcbiAgICBlbXB0eUljb246IHtcbiAgICAgIGZvbnRTaXplOiAnNzVweCcsXG4gICAgfSxcbiAgICBuZXdOb3RlVGV4dDoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogJ3JnYigwLDE2OCw0NSknLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlTGlzdChwcm9wczogYW55KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBjb252ZXJ0VGl0bGUgPSAodGl0bGU6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gdGl0bGUubGVuZ3RoID4gbGVuZ3RoID8gdGl0bGUuc3Vic3RyaW5nKDAsIGxlbmd0aCkgKyAnLi4uJyA6IHRpdGxlO1xuICB9O1xuXG4gIGNvbnN0IG5vdGVDb3VudCA9IHByb3BzLm5vdGVib29rc1twcm9wcy5ub3RlYm9va10ubm90ZXMubGVuZ3RoO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICB7Y29udmVydFRpdGxlKHByb3BzLm5vdGVib29rc1twcm9wcy5ub3RlYm9va10udGl0bGUsIDE1KX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RlQ291bnR9PlxuICAgICAgICB7YCR7bm90ZUNvdW50fSBub3RlJHtub3RlQ291bnQgPiAxID8gJ3MnIDogJyd9YH1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxuICAgICAgICAgIHsnTGFzdCBlZGl0ZWQgb24gJ31cbiAgICAgICAgICB7cHJvcHMuZm9ybWF0RGF0ZShwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLnVwZGF0ZWRBdCl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIHtwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLm5vdGVzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAge3Byb3BzLm5vdGVib29rc1twcm9wcy5ub3RlYm9va10ubm90ZXMubWFwKChub3RlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtub3RlLmlkfT5cbiAgICAgICAgICAgICAgICA8Tm90ZUxpc3RJdGVtXG4gICAgICAgICAgICAgICAgICBub3RlPXtub3RlfVxuICAgICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICAgICAgY29udmVydFRpdGxlPXtjb252ZXJ0VGl0bGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZW1wdHl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVtcHR5SWNvbn0+XG4gICAgICAgICAgICA8Q2dOb3RlcyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+SXQgYWxsIGJlZ2lucyB3aXRoIG5vdGVzPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIENsaWNrIHRoZXsnICd9XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5hZGROZXdOb3RlKCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXdOb3RlVGV4dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgKyBOZXcgTm90ZVxuICAgICAgICAgICAgPC9zcGFuPnsnICd9XG4gICAgICAgICAgICBidXR0b24gaW4gdGhlIHNpZGUgYmFyIHRvIGNyZWF0ZSBub3RlLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/note-list.tsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note-list.tsx":
/*!**********************************!*\
  !*** ./components/note-list.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteList; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Divider */ \"./node_modules/@material-ui/core/esm/Divider/index.js\");\n/* harmony import */ var _note_list_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./note-list-item */ \"./components/note-list-item.tsx\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note-list.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px',\n      width: '100%'\n    },\n    title: {\n      padding: '10px 15px',\n      fontSize: '22px',\n      wordBreak: 'break-word'\n    },\n    noteCount: {\n      fontSize: '12px',\n      padding: '5px 15px',\n      color: 'rgb(107,107,107)'\n    },\n    date: {\n      fontSize: '10px',\n      paddingLeft: '10px'\n    },\n    listBox: {\n      overflowY: 'scroll'\n    },\n    empty: {\n      alignItems: 'center',\n      justifyContent: 'center',\n      margin: 'auto',\n      textAlign: 'center',\n      padding: '35px'\n    },\n    emptyIcon: {\n      fontSize: '75px'\n    },\n    newNoteText: {\n      cursor: 'pointer',\n      color: 'rgb(0,168,45)'\n    }\n  });\n});\nfunction NoteList(props) {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n\n  var convertTitle = function convertTitle(title, length) {\n    return title.length > length ? title.substring(0, length) + '...' : title;\n  };\n\n  var noteCount = props.notebook === 'trash' ? props.trash.notes.length : props.notebooks[props.notebook].notes.length;\n  var notebookTitle = props.notebook === 'trash' ? props.trash.title : props.notebooks[props.notebook].title;\n  var notebookUpdatedAt = props.notebook === 'trash' ? props.trash.updatedAt : props.notebooks[props.notebook].updatedAt;\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: classes.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }, convertTitle(notebookTitle, 15)), __jsx(\"div\", {\n    className: classes.noteCount,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, \"\".concat(noteCount, \" note\").concat(noteCount > 1 ? 's' : ''), __jsx(\"span\", {\n    className: classes.date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, 'Last edited on ', props.formatDate(notebookUpdatedAt))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }), props.notebooks[props.notebook].notes.length > 0 ? __jsx(\"div\", {\n    className: classes.listBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, props.notebooks[props.notebook].notes.map(function (note) {\n    return __jsx(\"div\", {\n      key: note.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 15\n      }\n    }, __jsx(_note_list_item__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      note: note\n    }, props, {\n      convertTitle: convertTitle,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 17\n      }\n    })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 17\n      }\n    }));\n  })) : __jsx(\"div\", {\n    className: classes.empty,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.emptyIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_3__[\"CgNotes\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 11\n    }\n  }, \"It all begins with notes\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }, \"Click the\", ' ', __jsx(\"span\", {\n    onClick: function onClick() {\n      return props.addNewNote();\n    },\n    className: classes.newNoteText,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, \"+ New Note\"), ' ', \"button in the side bar to create note.\")));\n}\n\n_s(NoteList, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = NoteList;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLWxpc3QudHN4PzIxYzUiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0IiwibWFyZ2luIiwiY29sb3IiLCJmb250U2l6ZSIsIndpZHRoIiwidGl0bGUiLCJwYWRkaW5nIiwid29yZEJyZWFrIiwibm90ZUNvdW50IiwiZGF0ZSIsInBhZGRpbmdMZWZ0IiwibGlzdEJveCIsIm92ZXJmbG93WSIsImVtcHR5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwiZW1wdHlJY29uIiwibmV3Tm90ZVRleHQiLCJjdXJzb3IiLCJOb3RlTGlzdCIsInByb3BzIiwiY2xhc3NlcyIsImNvbnZlcnRUaXRsZSIsImxlbmd0aCIsInN1YnN0cmluZyIsIm5vdGVib29rIiwidHJhc2giLCJub3RlcyIsIm5vdGVib29rcyIsIm5vdGVib29rVGl0bGUiLCJub3RlYm9va1VwZGF0ZWRBdCIsInVwZGF0ZWRBdCIsImZvcm1hdERhdGUiLCJtYXAiLCJub3RlIiwiaWQiLCJhZGROZXdOb3RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE1BREw7QUFFSkMsbUJBQWEsRUFBRSxRQUZYO0FBR0pDLFlBQU0sRUFBRSxPQUhKO0FBSUpDLFlBQU0sRUFBRSxNQUpKO0FBS0pDLFdBQUssRUFBRSxlQUxIO0FBTUpDLGNBQVEsRUFBRSxNQU5OO0FBT0pDLFdBQUssRUFBRTtBQVBILEtBREs7QUFVWEMsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRSxXQURK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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLEVBT1UsR0FQViwyQ0FMRixDQTNCSixDQURGO0FBK0NEOztHQWxFdUJFLFE7VUFDTjNCLFM7OztLQURNMkIsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbm90ZS1saXN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IENnTm90ZXMgfSBmcm9tICdyZWFjdC1pY29ucy9jZyc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcbmltcG9ydCBOb3RlTGlzdEl0ZW0gZnJvbSAnLi9ub3RlLWxpc3QtaXRlbSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgY29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHBhZGRpbmc6ICcxMHB4IDE1cHgnLFxuICAgICAgZm9udFNpemU6ICcyMnB4JyxcbiAgICAgIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxuICAgIH0sXG4gICAgbm90ZUNvdW50OiB7XG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgcGFkZGluZzogJzVweCAxNXB4JyxcbiAgICAgIGNvbG9yOiAncmdiKDEwNywxMDcsMTA3KScsXG4gICAgfSxcbiAgICBkYXRlOiB7XG4gICAgICBmb250U2l6ZTogJzEwcHgnLFxuICAgICAgcGFkZGluZ0xlZnQ6ICcxMHB4JyxcbiAgICB9LFxuICAgIGxpc3RCb3g6IHtcbiAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgfSxcbiAgICBlbXB0eToge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBwYWRkaW5nOiAnMzVweCcsXG4gICAgfSxcbiAgICBlbXB0eUljb246IHtcbiAgICAgIGZvbnRTaXplOiAnNzVweCcsXG4gICAgfSxcbiAgICBuZXdOb3RlVGV4dDoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogJ3JnYigwLDE2OCw0NSknLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlTGlzdChwcm9wczogYW55KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBjb252ZXJ0VGl0bGUgPSAodGl0bGU6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gdGl0bGUubGVuZ3RoID4gbGVuZ3RoID8gdGl0bGUuc3Vic3RyaW5nKDAsIGxlbmd0aCkgKyAnLi4uJyA6IHRpdGxlO1xuICB9O1xuXG4gIGNvbnN0IG5vdGVDb3VudCA9XG4gICAgcHJvcHMubm90ZWJvb2sgPT09ICd0cmFzaCdcbiAgICAgID8gcHJvcHMudHJhc2gubm90ZXMubGVuZ3RoXG4gICAgICA6IHByb3BzLm5vdGVib29rc1twcm9wcy5ub3RlYm9va10ubm90ZXMubGVuZ3RoO1xuICBjb25zdCBub3RlYm9va1RpdGxlID1cbiAgICBwcm9wcy5ub3RlYm9vayA9PT0gJ3RyYXNoJ1xuICAgICAgPyBwcm9wcy50cmFzaC50aXRsZVxuICAgICAgOiBwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLnRpdGxlO1xuICBjb25zdCBub3RlYm9va1VwZGF0ZWRBdCA9XG4gICAgcHJvcHMubm90ZWJvb2sgPT09ICd0cmFzaCdcbiAgICAgID8gcHJvcHMudHJhc2gudXBkYXRlZEF0XG4gICAgICA6IHByb3BzLm5vdGVib29rc1twcm9wcy5ub3RlYm9va10udXBkYXRlZEF0O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pntjb252ZXJ0VGl0bGUobm90ZWJvb2tUaXRsZSwgMTUpfTwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RlQ291bnR9PlxuICAgICAgICB7YCR7bm90ZUNvdW50fSBub3RlJHtub3RlQ291bnQgPiAxID8gJ3MnIDogJyd9YH1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxuICAgICAgICAgIHsnTGFzdCBlZGl0ZWQgb24gJ31cbiAgICAgICAgICB7cHJvcHMuZm9ybWF0RGF0ZShub3RlYm9va1VwZGF0ZWRBdCl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIHtwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLm5vdGVzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RCb3h9PlxuICAgICAgICAgIHtwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLm5vdGVzLm1hcCgobm90ZTogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17bm90ZS5pZH0+XG4gICAgICAgICAgICAgICAgPE5vdGVMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgbm90ZT17bm90ZX1cbiAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICAgIGNvbnZlcnRUaXRsZT17Y29udmVydFRpdGxlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVtcHR5fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lbXB0eUljb259PlxuICAgICAgICAgICAgPENnTm90ZXMgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2Pkl0IGFsbCBiZWdpbnMgd2l0aCBub3RlczwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBDbGljayB0aGV7JyAnfVxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuYWRkTmV3Tm90ZSgpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmV3Tm90ZVRleHR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICsgTmV3IE5vdGVcbiAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxuICAgICAgICAgICAgYnV0dG9uIGluIHRoZSBzaWRlIGJhciB0byBjcmVhdGUgbm90ZS5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/note-list.tsx\n");

/***/ })

})
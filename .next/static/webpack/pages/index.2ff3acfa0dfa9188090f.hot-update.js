webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note-list.tsx":
/*!**********************************!*\
  !*** ./components/note-list.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteList; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Divider */ \"./node_modules/@material-ui/core/esm/Divider/index.js\");\n/* harmony import */ var _note_list_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./note-list-item */ \"./components/note-list-item.tsx\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note-list.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px',\n      width: '100%'\n    },\n    title: {\n      padding: '10px 15px',\n      fontSize: '22px',\n      wordBreak: 'break-word'\n    },\n    noteCount: {\n      fontSize: '12px',\n      padding: '5px 15px',\n      color: 'rgb(107,107,107)'\n    },\n    date: {\n      fontSize: '10px',\n      paddingLeft: '10px'\n    },\n    listBox: {\n      overflowY: 'scroll'\n    },\n    empty: {\n      alignItems: 'center',\n      justifyContent: 'center',\n      margin: 'auto',\n      textAlign: 'center',\n      padding: '35px'\n    },\n    emptyIcon: {\n      fontSize: '75px'\n    },\n    newNoteText: {\n      cursor: 'pointer',\n      color: 'rgb(0,168,45)'\n    }\n  });\n});\nfunction NoteList(props) {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n\n  var convertTitle = function convertTitle(title, length) {\n    return title.length > length ? title.substring(0, length) + '...' : title;\n  };\n\n  var noteCount = props.notebook === 'trash' ? props.trash.notes.length : props.notebooks[props.notebook].notes.length;\n  var notebookTitle = props.notebook === 'trash' ? props.trash.title : props.notebooks[props.notebook].title;\n  var notebookUpdatedAt = props.notebook === 'trash' ? props.trash.updatedAt : props.notebooks[props.notebook].updatedAt;\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: classes.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }, convertTitle(notebookTitle, 15)), __jsx(\"div\", {\n    className: classes.noteCount,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, \"\".concat(noteCount, \" note\").concat(noteCount > 1 ? 's' : ''), __jsx(\"span\", {\n    className: classes.date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, 'Last edited on ', props.formatDate(notebookUpdatedAt))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }), noteCount > 0 ? __jsx(\"div\", {\n    className: classes.listBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, props.notebooks[props.notebook].notes.map(function (note) {\n    return __jsx(\"div\", {\n      key: note.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 15\n      }\n    }, __jsx(_note_list_item__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      note: note\n    }, props, {\n      convertTitle: convertTitle,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 17\n      }\n    })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 17\n      }\n    }));\n  })) : __jsx(\"div\", {\n    className: classes.empty,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.emptyIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_3__[\"CgNotes\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 11\n    }\n  }, \"It all begins with notes\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }, \"Click the\", ' ', __jsx(\"span\", {\n    onClick: function onClick() {\n      return props.addNewNote();\n    },\n    className: classes.newNoteText,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, \"+ New Note\"), ' ', \"button in the side bar to create note.\")));\n}\n\n_s(NoteList, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = NoteList;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLWxpc3QudHN4PzIxYzUiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0IiwibWFyZ2luIiwiY29sb3IiLCJmb250U2l6ZSIsIndpZHRoIiwidGl0bGUiLCJwYWRkaW5nIiwid29yZEJyZWFrIiwibm90ZUNvdW50IiwiZGF0ZSIsInBhZGRpbmdMZWZ0IiwibGlzdEJveCIsIm92ZXJmbG93WSIsImVtcHR5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwiZW1wdHlJY29uIiwibmV3Tm90ZVRleHQiLCJjdXJzb3IiLCJOb3RlTGlzdCIsInByb3BzIiwiY2xhc3NlcyIsImNvbnZlcnRUaXRsZSIsImxlbmd0aCIsInN1YnN0cmluZyIsIm5vdGVib29rIiwidHJhc2giLCJub3RlcyIsIm5vdGVib29rcyIsIm5vdGVib29rVGl0bGUiLCJub3RlYm9va1VwZGF0ZWRBdCIsInVwZGF0ZWRBdCIsImZvcm1hdERhdGUiLCJtYXAiLCJub3RlIiwiaWQiLCJhZGROZXdOb3RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE1BREw7QUFFSkMsbUJBQWEsRUFBRSxRQUZYO0FBR0pDLFlBQU0sRUFBRSxPQUhKO0FBSUpDLFlBQU0sRUFBRSxNQUpKO0FBS0pDLFdBQUssRUFBRSxlQUxIO0FBTUpDLGNBQVEsRUFBRSxNQU5OO0FBT0pDLFdBQUssRUFBRTtBQVBILEtBREs7QUFVWEMsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRSxXQURK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QStDRDs7R0FsRXVCRSxRO1VBQ04zQixTOzs7S0FETTJCLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL25vdGUtbGlzdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBDZ05vdGVzIH0gZnJvbSAncmVhY3QtaWNvbnMvY2cnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XG5pbXBvcnQgTm90ZUxpc3RJdGVtIGZyb20gJy4vbm90ZS1saXN0LWl0ZW0nO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGNvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBwYWRkaW5nOiAnMTBweCAxNXB4JyxcbiAgICAgIGZvbnRTaXplOiAnMjJweCcsXG4gICAgICB3b3JkQnJlYWs6ICdicmVhay13b3JkJyxcbiAgICB9LFxuICAgIG5vdGVDb3VudDoge1xuICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgIHBhZGRpbmc6ICc1cHggMTVweCcsXG4gICAgICBjb2xvcjogJ3JnYigxMDcsMTA3LDEwNyknLFxuICAgIH0sXG4gICAgZGF0ZToge1xuICAgICAgZm9udFNpemU6ICcxMHB4JyxcbiAgICAgIHBhZGRpbmdMZWZ0OiAnMTBweCcsXG4gICAgfSxcbiAgICBsaXN0Qm94OiB7XG4gICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxuICAgIH0sXG4gICAgZW1wdHk6IHtcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgcGFkZGluZzogJzM1cHgnLFxuICAgIH0sXG4gICAgZW1wdHlJY29uOiB7XG4gICAgICBmb250U2l6ZTogJzc1cHgnLFxuICAgIH0sXG4gICAgbmV3Tm90ZVRleHQ6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgY29sb3I6ICdyZ2IoMCwxNjgsNDUpJyxcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZUxpc3QocHJvcHM6IGFueSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgY29udmVydFRpdGxlID0gKHRpdGxlOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHRpdGxlLmxlbmd0aCA+IGxlbmd0aCA/IHRpdGxlLnN1YnN0cmluZygwLCBsZW5ndGgpICsgJy4uLicgOiB0aXRsZTtcbiAgfTtcblxuICBjb25zdCBub3RlQ291bnQgPVxuICAgIHByb3BzLm5vdGVib29rID09PSAndHJhc2gnXG4gICAgICA/IHByb3BzLnRyYXNoLm5vdGVzLmxlbmd0aFxuICAgICAgOiBwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLm5vdGVzLmxlbmd0aDtcbiAgY29uc3Qgbm90ZWJvb2tUaXRsZSA9XG4gICAgcHJvcHMubm90ZWJvb2sgPT09ICd0cmFzaCdcbiAgICAgID8gcHJvcHMudHJhc2gudGl0bGVcbiAgICAgIDogcHJvcHMubm90ZWJvb2tzW3Byb3BzLm5vdGVib29rXS50aXRsZTtcbiAgY29uc3Qgbm90ZWJvb2tVcGRhdGVkQXQgPVxuICAgIHByb3BzLm5vdGVib29rID09PSAndHJhc2gnXG4gICAgICA/IHByb3BzLnRyYXNoLnVwZGF0ZWRBdFxuICAgICAgOiBwcm9wcy5ub3RlYm9va3NbcHJvcHMubm90ZWJvb2tdLnVwZGF0ZWRBdDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57Y29udmVydFRpdGxlKG5vdGVib29rVGl0bGUsIDE1KX08L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZUNvdW50fT5cbiAgICAgICAge2Ake25vdGVDb3VudH0gbm90ZSR7bm90ZUNvdW50ID4gMSA/ICdzJyA6ICcnfWB9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5kYXRlfT5cbiAgICAgICAgICB7J0xhc3QgZWRpdGVkIG9uICd9XG4gICAgICAgICAge3Byb3BzLmZvcm1hdERhdGUobm90ZWJvb2tVcGRhdGVkQXQpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgICB7bm90ZUNvdW50ID4gMCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEJveH0+XG4gICAgICAgICAge3Byb3BzLm5vdGVib29rc1twcm9wcy5ub3RlYm9va10ubm90ZXMubWFwKChub3RlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtub3RlLmlkfT5cbiAgICAgICAgICAgICAgICA8Tm90ZUxpc3RJdGVtXG4gICAgICAgICAgICAgICAgICBub3RlPXtub3RlfVxuICAgICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICAgICAgY29udmVydFRpdGxlPXtjb252ZXJ0VGl0bGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZW1wdHl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVtcHR5SWNvbn0+XG4gICAgICAgICAgICA8Q2dOb3RlcyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+SXQgYWxsIGJlZ2lucyB3aXRoIG5vdGVzPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIENsaWNrIHRoZXsnICd9XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5hZGROZXdOb3RlKCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXdOb3RlVGV4dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgKyBOZXcgTm90ZVxuICAgICAgICAgICAgPC9zcGFuPnsnICd9XG4gICAgICAgICAgICBidXR0b24gaW4gdGhlIHNpZGUgYmFyIHRvIGNyZWF0ZSBub3RlLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/note-list.tsx\n");

/***/ })

})
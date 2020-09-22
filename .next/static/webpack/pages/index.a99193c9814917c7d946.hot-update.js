webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note-list-item.tsx":
/*!***************************************!*\
  !*** ./components/note-list-item.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteListItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note-list-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px',\n      width: '100%'\n    },\n    title: {\n      padding: '10px',\n      fontSize: '22px'\n    },\n    box: {\n      position: 'sticky',\n      height: '100px',\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column'\n    },\n    list: {\n      '&:active': {\n        opacity: '0.3'\n      }\n    },\n    dragPrview: {\n      display: 'none'\n    },\n    noteTitle: {\n      padding: '10px 20px 0px 20px',\n      color: 'rgb(61,61,61)'\n    },\n    noteContent: {\n      padding: '5px 20px',\n      fontSize: '14px',\n      color: 'rgb(115,115,115)'\n    },\n    empty: {\n      alignItems: 'center',\n      justifyContent: 'center',\n      margin: 'auto',\n      textAlign: 'center',\n      padding: '35px'\n    },\n    emptyIcon: {\n      fontSize: '75px'\n    },\n    newNoteText: {\n      cursor: 'pointer',\n      color: 'rgb(0,168,45)'\n    }\n  });\n});\nfunction NoteListItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"])({\n    item: {\n      type: props.noteTitle\n    },\n    collect: function collect(monitor) {\n      return {\n        opacity: monitor.isDragging() ? 0.4 : 1\n      };\n    }\n  }),\n      _useDrag2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDrag, 3),\n      opacity = _useDrag2[0].opacity,\n      drag = _useDrag2[1],\n      preview = _useDrag2[2];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    ref: drag,\n    style: {\n      opacity: opacity\n    },\n    className: classes.list,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    ref: preview,\n    className: classes.noteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }, props.noteTitle), __jsx(\"div\", {\n    className: classes.noteContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, props.note))), __jsx(\"div\", {\n    ref: preview,\n    className: classes.dragPrview,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }\n  }, props.noteTitle));\n}\n\n_s(NoteListItem, \"4qthqeLTysxbFJCCpbt35UOQ5q8=\", false, function () {\n  return [useStyles, react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"]];\n});\n\n_c = NoteListItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLWxpc3QtaXRlbS50c3g/Mjg2MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJtYXJnaW4iLCJjb2xvciIsImZvbnRTaXplIiwid2lkdGgiLCJ0aXRsZSIsInBhZGRpbmciLCJib3giLCJwb3NpdGlvbiIsImN1cnNvciIsImxpc3QiLCJvcGFjaXR5IiwiZHJhZ1BydmlldyIsIm5vdGVUaXRsZSIsIm5vdGVDb250ZW50IiwiZW1wdHkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJlbXB0eUljb24iLCJuZXdOb3RlVGV4dCIsIk5vdGVMaXN0SXRlbSIsInByb3BzIiwiY2xhc3NlcyIsInVzZURyYWciLCJpdGVtIiwidHlwZSIsImNvbGxlY3QiLCJtb25pdG9yIiwiaXNEcmFnZ2luZyIsImRyYWciLCJwcmV2aWV3Iiwibm90ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxNQURMO0FBRUpDLG1CQUFhLEVBQUUsUUFGWDtBQUdKQyxZQUFNLEVBQUUsT0FISjtBQUlKQyxZQUFNLEVBQUUsTUFKSjtBQUtKQyxXQUFLLEVBQUUsZUFMSDtBQU1KQyxjQUFRLEVBQUUsTUFOTjtBQU9KQyxXQUFLLEVBQUU7QUFQSCxLQURLO0FBVVhDLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUVMSCxjQUFRLEVBQUU7QUFGTCxLQVZJO0FBY1hJLE9BQUcsRUFBRTtBQUNIQyxjQUFRLEVBQUUsUUFEUDtBQUVIUixZQUFNLEVBQUUsT0FGTDtBQUdIUyxZQUFNLEVBQUUsU0FITDtBQUlIWCxhQUFPLEVBQUUsTUFKTjtBQUtIQyxtQkFBYSxFQUFFO0FBTFosS0FkTTtBQXFCWFcsUUFBSSxFQUFFO0FBQ0osa0JBQVk7QUFDVkMsZUFBTyxFQUFFO0FBREM7QUFEUixLQXJCSztBQTBCWEMsY0FBVSxFQUFFO0FBQ1ZkLGFBQU8sRUFBRTtBQURDLEtBMUJEO0FBNkJYZSxhQUFTLEVBQUU7QUFDVFAsYUFBTyxFQUFFLG9CQURBO0FBRVRKLFdBQUssRUFBRTtBQUZFLEtBN0JBO0FBaUNYWSxlQUFXLEVBQUU7QUFDWFIsYUFBTyxFQUFFLFVBREU7QUFFWEgsY0FBUSxFQUFFLE1BRkM7QUFHWEQsV0FBSyxFQUFFO0FBSEksS0FqQ0Y7QUFzQ1hhLFNBQUssRUFBRTtBQUNMQyxnQkFBVSxFQUFFLFFBRFA7QUFFTEMsb0JBQWMsRUFBRSxRQUZYO0FBR0xoQixZQUFNLEVBQUUsTUFISDtBQUlMaUIsZUFBUyxFQUFFLFFBSk47QUFLTFosYUFBTyxFQUFFO0FBTEosS0F0Q0k7QUE2Q1hhLGFBQVMsRUFBRTtBQUNUaEIsY0FBUSxFQUFFO0FBREQsS0E3Q0E7QUFnRFhpQixlQUFXLEVBQUU7QUFDWFgsWUFBTSxFQUFFLFNBREc7QUFFWFAsV0FBSyxFQUFFO0FBRkk7QUFoREYsR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1QjtBQXdEZSxTQUFTbUIsWUFBVCxDQUFzQkMsS0FBdEIsRUFBa0M7QUFBQTs7QUFDL0MsTUFBTUMsT0FBTyxHQUFHOUIsU0FBUyxFQUF6Qjs7QUFEK0MsaUJBR1YrQix5REFBTyxDQUFDO0FBQzNDQyxRQUFJLEVBQUU7QUFBRUMsVUFBSSxFQUFFSixLQUFLLENBQUNUO0FBQWQsS0FEcUM7QUFFM0NjLFdBQU8sRUFBRSxpQkFBQ0MsT0FBRDtBQUFBLGFBQWM7QUFDckJqQixlQUFPLEVBQUVpQixPQUFPLENBQUNDLFVBQVIsS0FBdUIsR0FBdkIsR0FBNkI7QUFEakIsT0FBZDtBQUFBO0FBRmtDLEdBQUQsQ0FIRztBQUFBO0FBQUEsTUFHdENsQixPQUhzQyxnQkFHdENBLE9BSHNDO0FBQUEsTUFHM0JtQixJQUgyQjtBQUFBLE1BR3JCQyxPQUhxQjs7QUFVL0MsU0FDRSxtRUFDRTtBQUFLLGFBQVMsRUFBRVIsT0FBTyxDQUFDaEIsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFdUIsSUFBVjtBQUFnQixTQUFLLEVBQUU7QUFBRW5CLGFBQU8sRUFBUEE7QUFBRixLQUF2QjtBQUFvQyxhQUFTLEVBQUVZLE9BQU8sQ0FBQ2IsSUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFcUIsT0FBVjtBQUFtQixhQUFTLEVBQUVSLE9BQU8sQ0FBQ1YsU0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUyxLQUFLLENBQUNULFNBRFQsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFFVSxPQUFPLENBQUNULFdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0NRLEtBQUssQ0FBQ1UsSUFBNUMsQ0FKRixDQURGLENBREYsRUFTRTtBQUFLLE9BQUcsRUFBRUQsT0FBVjtBQUFtQixhQUFTLEVBQUVSLE9BQU8sQ0FBQ1gsVUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVSxLQUFLLENBQUNULFNBRFQsQ0FURixDQURGO0FBZUQ7O0dBekJ1QlEsWTtVQUNONUIsUyxFQUVxQitCLGlEOzs7S0FIZkgsWSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbm90ZS1saXN0LWl0ZW0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgdXNlRHJhZyB9IGZyb20gJ3JlYWN0LWRuZCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgY29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgIGZvbnRTaXplOiAnMjJweCcsXG4gICAgfSxcbiAgICBib3g6IHtcbiAgICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcbiAgICAgIGhlaWdodDogJzEwMHB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIG9wYWNpdHk6ICcwLjMnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRyYWdQcnZpZXc6IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9LFxuICAgIG5vdGVUaXRsZToge1xuICAgICAgcGFkZGluZzogJzEwcHggMjBweCAwcHggMjBweCcsXG4gICAgICBjb2xvcjogJ3JnYig2MSw2MSw2MSknLFxuICAgIH0sXG4gICAgbm90ZUNvbnRlbnQ6IHtcbiAgICAgIHBhZGRpbmc6ICc1cHggMjBweCcsXG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgY29sb3I6ICdyZ2IoMTE1LDExNSwxMTUpJyxcbiAgICB9LFxuICAgIGVtcHR5OiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHBhZGRpbmc6ICczNXB4JyxcbiAgICB9LFxuICAgIGVtcHR5SWNvbjoge1xuICAgICAgZm9udFNpemU6ICc3NXB4JyxcbiAgICB9LFxuICAgIG5ld05vdGVUZXh0OiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGNvbG9yOiAncmdiKDAsMTY4LDQ1KScsXG4gICAgfSxcbiAgfSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVMaXN0SXRlbShwcm9wczogYW55KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBbeyBvcGFjaXR5IH0sIGRyYWcsIHByZXZpZXddID0gdXNlRHJhZyh7XG4gICAgaXRlbTogeyB0eXBlOiBwcm9wcy5ub3RlVGl0bGUgfSxcbiAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4gKHtcbiAgICAgIG9wYWNpdHk6IG1vbml0b3IuaXNEcmFnZ2luZygpID8gMC40IDogMSxcbiAgICB9KSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm94fT5cbiAgICAgICAgPGRpdiByZWY9e2RyYWd9IHN0eWxlPXt7IG9wYWNpdHkgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAgICAgIDxkaXYgcmVmPXtwcmV2aWV3fSBjbGFzc05hbWU9e2NsYXNzZXMubm90ZVRpdGxlfT5cbiAgICAgICAgICAgIHtwcm9wcy5ub3RlVGl0bGV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZUNvbnRlbnR9Pntwcm9wcy5ub3RlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiByZWY9e3ByZXZpZXd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmFnUHJ2aWV3fT5cbiAgICAgICAge3Byb3BzLm5vdGVUaXRsZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/note-list-item.tsx\n");

/***/ })

})
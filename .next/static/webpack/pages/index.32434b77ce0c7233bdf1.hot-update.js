webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note-list-item.tsx":
/*!***************************************!*\
  !*** ./components/note-list-item.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteListItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note-list-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px',\n      width: '100%'\n    },\n    title: {\n      padding: '10px',\n      fontSize: '22px'\n    },\n    box: {\n      position: 'sticky',\n      height: '100px',\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column'\n    },\n    // list: {\n    //   '&:active': {\n    //     opacity: '0.3',\n    //   },\n    // },\n    dragPrview: {\n      display: 'none',\n      '&:active': {\n        display: 'block'\n      }\n    },\n    noteTitle: {\n      padding: '10px 20px 0px 20px',\n      color: 'rgb(61,61,61)'\n    },\n    noteContent: {\n      padding: '5px 20px',\n      fontSize: '14px',\n      color: 'rgb(115,115,115)'\n    },\n    empty: {\n      alignItems: 'center',\n      justifyContent: 'center',\n      margin: 'auto',\n      textAlign: 'center',\n      padding: '35px'\n    },\n    emptyIcon: {\n      fontSize: '75px'\n    },\n    newNoteText: {\n      cursor: 'pointer',\n      color: 'rgb(0,168,45)'\n    }\n  });\n});\nfunction NoteListItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"])({\n    item: {\n      type: props.noteTitle\n    },\n    collect: function collect(monitor) {\n      return {\n        opacity: monitor.isDragging() ? 0.4 : 1\n      };\n    }\n  }),\n      _useDrag2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDrag, 3),\n      opacity = _useDrag2[0].opacity,\n      drag = _useDrag2[1],\n      preview = _useDrag2[2];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    ref: drag,\n    style: {\n      opacity: opacity\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.noteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, props.noteTitle), __jsx(\"div\", {\n    className: classes.noteContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, props.note))), __jsx(\"div\", {\n    ref: preview,\n    className: classes.dragPrview,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }, props.noteTitle));\n}\n\n_s(NoteListItem, \"4qthqeLTysxbFJCCpbt35UOQ5q8=\", false, function () {\n  return [useStyles, react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"]];\n});\n\n_c = NoteListItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLWxpc3QtaXRlbS50c3g/Mjg2MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJtYXJnaW4iLCJjb2xvciIsImZvbnRTaXplIiwid2lkdGgiLCJ0aXRsZSIsInBhZGRpbmciLCJib3giLCJwb3NpdGlvbiIsImN1cnNvciIsImRyYWdQcnZpZXciLCJub3RlVGl0bGUiLCJub3RlQ29udGVudCIsImVtcHR5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwiZW1wdHlJY29uIiwibmV3Tm90ZVRleHQiLCJOb3RlTGlzdEl0ZW0iLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VEcmFnIiwiaXRlbSIsInR5cGUiLCJjb2xsZWN0IiwibW9uaXRvciIsIm9wYWNpdHkiLCJpc0RyYWdnaW5nIiwiZHJhZyIsInByZXZpZXciLCJub3RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE1BREw7QUFFSkMsbUJBQWEsRUFBRSxRQUZYO0FBR0pDLFlBQU0sRUFBRSxPQUhKO0FBSUpDLFlBQU0sRUFBRSxNQUpKO0FBS0pDLFdBQUssRUFBRSxlQUxIO0FBTUpDLGNBQVEsRUFBRSxNQU5OO0FBT0pDLFdBQUssRUFBRTtBQVBILEtBREs7QUFVWEMsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRSxNQURKO0FBRUxILGNBQVEsRUFBRTtBQUZMLEtBVkk7QUFjWEksT0FBRyxFQUFFO0FBQ0hDLGNBQVEsRUFBRSxRQURQO0FBRUhSLFlBQU0sRUFBRSxPQUZMO0FBR0hTLFlBQU0sRUFBRSxTQUhMO0FBSUhYLGFBQU8sRUFBRSxNQUpOO0FBS0hDLG1CQUFhLEVBQUU7QUFMWixLQWRNO0FBcUJYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQVcsY0FBVSxFQUFFO0FBQ1ZaLGFBQU8sRUFBRSxNQURDO0FBRVYsa0JBQVk7QUFDVkEsZUFBTyxFQUFFO0FBREM7QUFGRixLQTFCRDtBQWdDWGEsYUFBUyxFQUFFO0FBQ1RMLGFBQU8sRUFBRSxvQkFEQTtBQUVUSixXQUFLLEVBQUU7QUFGRSxLQWhDQTtBQW9DWFUsZUFBVyxFQUFFO0FBQ1hOLGFBQU8sRUFBRSxVQURFO0FBRVhILGNBQVEsRUFBRSxNQUZDO0FBR1hELFdBQUssRUFBRTtBQUhJLEtBcENGO0FBeUNYVyxTQUFLLEVBQUU7QUFDTEMsZ0JBQVUsRUFBRSxRQURQO0FBRUxDLG9CQUFjLEVBQUUsUUFGWDtBQUdMZCxZQUFNLEVBQUUsTUFISDtBQUlMZSxlQUFTLEVBQUUsUUFKTjtBQUtMVixhQUFPLEVBQUU7QUFMSixLQXpDSTtBQWdEWFcsYUFBUyxFQUFFO0FBQ1RkLGNBQVEsRUFBRTtBQURELEtBaERBO0FBbURYZSxlQUFXLEVBQUU7QUFDWFQsWUFBTSxFQUFFLFNBREc7QUFFWFAsV0FBSyxFQUFFO0FBRkk7QUFuREYsR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1QjtBQTJEZSxTQUFTaUIsWUFBVCxDQUFzQkMsS0FBdEIsRUFBa0M7QUFBQTs7QUFDL0MsTUFBTUMsT0FBTyxHQUFHNUIsU0FBUyxFQUF6Qjs7QUFEK0MsaUJBR1Y2Qix5REFBTyxDQUFDO0FBQzNDQyxRQUFJLEVBQUU7QUFBRUMsVUFBSSxFQUFFSixLQUFLLENBQUNUO0FBQWQsS0FEcUM7QUFFM0NjLFdBQU8sRUFBRSxpQkFBQ0MsT0FBRDtBQUFBLGFBQWM7QUFDckJDLGVBQU8sRUFBRUQsT0FBTyxDQUFDRSxVQUFSLEtBQXVCLEdBQXZCLEdBQTZCO0FBRGpCLE9BQWQ7QUFBQTtBQUZrQyxHQUFELENBSEc7QUFBQTtBQUFBLE1BR3RDRCxPQUhzQyxnQkFHdENBLE9BSHNDO0FBQUEsTUFHM0JFLElBSDJCO0FBQUEsTUFHckJDLE9BSHFCOztBQVUvQyxTQUNFLG1FQUNFO0FBQUssYUFBUyxFQUFFVCxPQUFPLENBQUNkLEdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRXNCLElBQVY7QUFBZ0IsU0FBSyxFQUFFO0FBQUVGLGFBQU8sRUFBUEE7QUFBRixLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVOLE9BQU8sQ0FBQ1YsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQ1MsS0FBSyxDQUFDVCxTQUExQyxDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVVLE9BQU8sQ0FBQ1QsV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ1EsS0FBSyxDQUFDVyxJQUE1QyxDQUZGLENBREYsQ0FERixFQU9FO0FBQUssT0FBRyxFQUFFRCxPQUFWO0FBQW1CLGFBQVMsRUFBRVQsT0FBTyxDQUFDWCxVQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dVLEtBQUssQ0FBQ1QsU0FEVCxDQVBGLENBREY7QUFhRDs7R0F2QnVCUSxZO1VBQ04xQixTLEVBRXFCNkIsaUQ7OztLQUhmSCxZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ub3RlLWxpc3QtaXRlbS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyB1c2VEcmFnIH0gZnJvbSAncmVhY3QtZG5kJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBjb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgZm9udFNpemU6ICcyMnB4JyxcbiAgICB9LFxuICAgIGJveDoge1xuICAgICAgcG9zaXRpb246ICdzdGlja3knLFxuICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICAgIC8vIGxpc3Q6IHtcbiAgICAvLyAgICcmOmFjdGl2ZSc6IHtcbiAgICAvLyAgICAgb3BhY2l0eTogJzAuMycsXG4gICAgLy8gICB9LFxuICAgIC8vIH0sXG4gICAgZHJhZ1Bydmlldzoge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG5vdGVUaXRsZToge1xuICAgICAgcGFkZGluZzogJzEwcHggMjBweCAwcHggMjBweCcsXG4gICAgICBjb2xvcjogJ3JnYig2MSw2MSw2MSknLFxuICAgIH0sXG4gICAgbm90ZUNvbnRlbnQ6IHtcbiAgICAgIHBhZGRpbmc6ICc1cHggMjBweCcsXG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgY29sb3I6ICdyZ2IoMTE1LDExNSwxMTUpJyxcbiAgICB9LFxuICAgIGVtcHR5OiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHBhZGRpbmc6ICczNXB4JyxcbiAgICB9LFxuICAgIGVtcHR5SWNvbjoge1xuICAgICAgZm9udFNpemU6ICc3NXB4JyxcbiAgICB9LFxuICAgIG5ld05vdGVUZXh0OiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGNvbG9yOiAncmdiKDAsMTY4LDQ1KScsXG4gICAgfSxcbiAgfSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVMaXN0SXRlbShwcm9wczogYW55KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBbeyBvcGFjaXR5IH0sIGRyYWcsIHByZXZpZXddID0gdXNlRHJhZyh7XG4gICAgaXRlbTogeyB0eXBlOiBwcm9wcy5ub3RlVGl0bGUgfSxcbiAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4gKHtcbiAgICAgIG9wYWNpdHk6IG1vbml0b3IuaXNEcmFnZ2luZygpID8gMC40IDogMSxcbiAgICB9KSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm94fT5cbiAgICAgICAgPGRpdiByZWY9e2RyYWd9IHN0eWxlPXt7IG9wYWNpdHkgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZVRpdGxlfT57cHJvcHMubm90ZVRpdGxlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGVDb250ZW50fT57cHJvcHMubm90ZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgcmVmPXtwcmV2aWV3fSBjbGFzc05hbWU9e2NsYXNzZXMuZHJhZ1Bydmlld30+XG4gICAgICAgIHtwcm9wcy5ub3RlVGl0bGV9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/note-list-item.tsx\n");

/***/ })

})
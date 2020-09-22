webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note-list-item.tsx":
/*!***************************************!*\
  !*** ./components/note-list-item.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteListItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note-list-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px',\n      width: '100%'\n    },\n    title: {\n      padding: '10px',\n      fontSize: '22px'\n    },\n    box: {\n      position: 'sticky',\n      height: '100px',\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column'\n    },\n    noteTitle: {\n      padding: '10px 20px 0px 20px',\n      color: 'rgb(61,61,61)'\n    },\n    noteContent: {\n      padding: '5px 20px',\n      fontSize: '14px',\n      color: 'rgb(115,115,115)'\n    },\n    empty: {\n      alignItems: 'center',\n      justifyContent: 'center',\n      margin: 'auto',\n      textAlign: 'center',\n      padding: '35px'\n    },\n    emptyIcon: {\n      fontSize: '75px'\n    },\n    newNoteText: {\n      cursor: 'pointer',\n      color: 'rgb(0,168,45)'\n    }\n  });\n});\nfunction NoteListItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"])({\n    item: {\n      type: props.noteTitle\n    },\n    collect: function collect(monitor) {\n      return {\n        opacity: monitor.isDragging() ? 0.4 : 1,\n        isDragging: monitor.isDragging()\n      };\n    }\n  }),\n      _useDrag2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDrag, 3),\n      _useDrag2$ = _useDrag2[0],\n      opacity = _useDrag2$.opacity,\n      isDragging = _useDrag2$.isDragging,\n      drag = _useDrag2[1],\n      preview = _useDrag2[2];\n\n  useEffect(function () {\n    preview(getEmptyImage(), {\n      captureDraggingState: true\n    });\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    ref: drag,\n    style: {\n      opacity: opacity\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    ref: preview,\n    className: classes.noteTitle,\n    style: {\n      border: isDragging ? '1px solid blue' : ''\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, props.noteTitle), __jsx(\"div\", {\n    className: classes.noteContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, props.note))));\n}\n\n_s(NoteListItem, \"p61SXGh+OFnyFLoJAE3CSN+WI2E=\", false, function () {\n  return [useStyles, react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"]];\n});\n\n_c = NoteListItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLWxpc3QtaXRlbS50c3g/Mjg2MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJtYXJnaW4iLCJjb2xvciIsImZvbnRTaXplIiwid2lkdGgiLCJ0aXRsZSIsInBhZGRpbmciLCJib3giLCJwb3NpdGlvbiIsImN1cnNvciIsIm5vdGVUaXRsZSIsIm5vdGVDb250ZW50IiwiZW1wdHkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJlbXB0eUljb24iLCJuZXdOb3RlVGV4dCIsIk5vdGVMaXN0SXRlbSIsInByb3BzIiwiY2xhc3NlcyIsInVzZURyYWciLCJpdGVtIiwidHlwZSIsImNvbGxlY3QiLCJtb25pdG9yIiwib3BhY2l0eSIsImlzRHJhZ2dpbmciLCJkcmFnIiwicHJldmlldyIsInVzZUVmZmVjdCIsImdldEVtcHR5SW1hZ2UiLCJjYXB0dXJlRHJhZ2dpbmdTdGF0ZSIsImJvcmRlciIsIm5vdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxtQkFBYSxFQUFFLFFBRlg7QUFHSkMsWUFBTSxFQUFFLE9BSEo7QUFJSkMsWUFBTSxFQUFFLE1BSko7QUFLSkMsV0FBSyxFQUFFLGVBTEg7QUFNSkMsY0FBUSxFQUFFLE1BTk47QUFPSkMsV0FBSyxFQUFFO0FBUEgsS0FESztBQVVYQyxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEgsY0FBUSxFQUFFO0FBRkwsS0FWSTtBQWNYSSxPQUFHLEVBQUU7QUFDSEMsY0FBUSxFQUFFLFFBRFA7QUFFSFIsWUFBTSxFQUFFLE9BRkw7QUFHSFMsWUFBTSxFQUFFLFNBSEw7QUFJSFgsYUFBTyxFQUFFLE1BSk47QUFLSEMsbUJBQWEsRUFBRTtBQUxaLEtBZE07QUFxQlhXLGFBQVMsRUFBRTtBQUNUSixhQUFPLEVBQUUsb0JBREE7QUFFVEosV0FBSyxFQUFFO0FBRkUsS0FyQkE7QUF5QlhTLGVBQVcsRUFBRTtBQUNYTCxhQUFPLEVBQUUsVUFERTtBQUVYSCxjQUFRLEVBQUUsTUFGQztBQUdYRCxXQUFLLEVBQUU7QUFISSxLQXpCRjtBQThCWFUsU0FBSyxFQUFFO0FBQ0xDLGdCQUFVLEVBQUUsUUFEUDtBQUVMQyxvQkFBYyxFQUFFLFFBRlg7QUFHTGIsWUFBTSxFQUFFLE1BSEg7QUFJTGMsZUFBUyxFQUFFLFFBSk47QUFLTFQsYUFBTyxFQUFFO0FBTEosS0E5Qkk7QUFxQ1hVLGFBQVMsRUFBRTtBQUNUYixjQUFRLEVBQUU7QUFERCxLQXJDQTtBQXdDWGMsZUFBVyxFQUFFO0FBQ1hSLFlBQU0sRUFBRSxTQURHO0FBRVhQLFdBQUssRUFBRTtBQUZJO0FBeENGLEdBQUQsQ0FEZTtBQUFBLENBQUQsQ0FBNUI7QUFnRGUsU0FBU2dCLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQWtDO0FBQUE7O0FBQy9DLE1BQU1DLE9BQU8sR0FBRzNCLFNBQVMsRUFBekI7O0FBRCtDLGlCQUdFNEIseURBQU8sQ0FBQztBQUN2REMsUUFBSSxFQUFFO0FBQUVDLFVBQUksRUFBRUosS0FBSyxDQUFDVDtBQUFkLEtBRGlEO0FBRXZEYyxXQUFPLEVBQUUsaUJBQUNDLE9BQUQ7QUFBQSxhQUFpQztBQUN4Q0MsZUFBTyxFQUFFRCxPQUFPLENBQUNFLFVBQVIsS0FBdUIsR0FBdkIsR0FBNkIsQ0FERTtBQUV4Q0Esa0JBQVUsRUFBRUYsT0FBTyxDQUFDRSxVQUFSO0FBRjRCLE9BQWpDO0FBQUE7QUFGOEMsR0FBRCxDQUhUO0FBQUE7QUFBQTtBQUFBLE1BR3RDRCxPQUhzQyxjQUd0Q0EsT0FIc0M7QUFBQSxNQUc3QkMsVUFINkIsY0FHN0JBLFVBSDZCO0FBQUEsTUFHZkMsSUFIZTtBQUFBLE1BR1RDLE9BSFM7O0FBVy9DQyxXQUFTLENBQUMsWUFBTTtBQUNkRCxXQUFPLENBQUNFLGFBQWEsRUFBZCxFQUFrQjtBQUFFQywwQkFBb0IsRUFBRTtBQUF4QixLQUFsQixDQUFQO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLFNBQ0UsbUVBQ0U7QUFBSyxhQUFTLEVBQUVaLE9BQU8sQ0FBQ2IsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFcUIsSUFBVjtBQUFnQixTQUFLLEVBQUU7QUFBRUYsYUFBTyxFQUFQQTtBQUFGLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBRUcsT0FEUDtBQUVFLGFBQVMsRUFBRVQsT0FBTyxDQUFDVixTQUZyQjtBQUdFLFNBQUssRUFBRTtBQUFFdUIsWUFBTSxFQUFFTixVQUFVLEdBQUcsZ0JBQUgsR0FBc0I7QUFBMUMsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0dSLEtBQUssQ0FBQ1QsU0FMVCxDQURGLEVBUUU7QUFBSyxhQUFTLEVBQUVVLE9BQU8sQ0FBQ1QsV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ1EsS0FBSyxDQUFDZSxJQUE1QyxDQVJGLENBREYsQ0FERixDQURGO0FBZ0JEOztHQS9CdUJoQixZO1VBQ056QixTLEVBRWlDNEIsaUQ7OztLQUgzQkgsWSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbm90ZS1saXN0LWl0ZW0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgdXNlRHJhZywgRHJhZ1NvdXJjZU1vbml0b3IgfSBmcm9tICdyZWFjdC1kbmQnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGNvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICBmb250U2l6ZTogJzIycHgnLFxuICAgIH0sXG4gICAgYm94OiB7XG4gICAgICBwb3NpdGlvbjogJ3N0aWNreScsXG4gICAgICBoZWlnaHQ6ICcxMDBweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gICAgbm90ZVRpdGxlOiB7XG4gICAgICBwYWRkaW5nOiAnMTBweCAyMHB4IDBweCAyMHB4JyxcbiAgICAgIGNvbG9yOiAncmdiKDYxLDYxLDYxKScsXG4gICAgfSxcbiAgICBub3RlQ29udGVudDoge1xuICAgICAgcGFkZGluZzogJzVweCAyMHB4JyxcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICBjb2xvcjogJ3JnYigxMTUsMTE1LDExNSknLFxuICAgIH0sXG4gICAgZW1wdHk6IHtcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgcGFkZGluZzogJzM1cHgnLFxuICAgIH0sXG4gICAgZW1wdHlJY29uOiB7XG4gICAgICBmb250U2l6ZTogJzc1cHgnLFxuICAgIH0sXG4gICAgbmV3Tm90ZVRleHQ6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgY29sb3I6ICdyZ2IoMCwxNjgsNDUpJyxcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZUxpc3RJdGVtKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IFt7IG9wYWNpdHksIGlzRHJhZ2dpbmcgfSwgZHJhZywgcHJldmlld10gPSB1c2VEcmFnKHtcbiAgICBpdGVtOiB7IHR5cGU6IHByb3BzLm5vdGVUaXRsZSB9LFxuICAgIGNvbGxlY3Q6IChtb25pdG9yOiBEcmFnU291cmNlTW9uaXRvcikgPT4gKHtcbiAgICAgIG9wYWNpdHk6IG1vbml0b3IuaXNEcmFnZ2luZygpID8gMC40IDogMSxcbiAgICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxuICAgIH0pLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByZXZpZXcoZ2V0RW1wdHlJbWFnZSgpLCB7IGNhcHR1cmVEcmFnZ2luZ1N0YXRlOiB0cnVlIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm94fT5cbiAgICAgICAgPGRpdiByZWY9e2RyYWd9IHN0eWxlPXt7IG9wYWNpdHkgfX0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXtwcmV2aWV3fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGVUaXRsZX1cbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogaXNEcmFnZ2luZyA/ICcxcHggc29saWQgYmx1ZScgOiAnJyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5ub3RlVGl0bGV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZUNvbnRlbnR9Pntwcm9wcy5ub3RlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/note-list-item.tsx\n");

/***/ })

})
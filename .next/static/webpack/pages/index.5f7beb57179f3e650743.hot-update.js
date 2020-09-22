webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note-list-item.tsx":
/*!***************************************!*\
  !*** ./components/note-list-item.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteListItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note-list-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar layerStyles = {\n  position: 'fixed',\n  pointerEvents: 'none',\n  zIndex: 9999,\n  left: 0,\n  top: 0,\n  width: '100%',\n  height: '100%'\n};\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px',\n      width: '100%'\n    },\n    title: {\n      padding: '10px',\n      fontSize: '22px'\n    },\n    box: {\n      position: 'sticky',\n      height: '100px',\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column'\n    },\n    noteTitle: {\n      padding: '10px 20px 0px 20px',\n      color: 'rgb(61,61,61)'\n    },\n    preview: {\n      border: '1px solid blue',\n      borderRadius: '3px',\n      width: '100px',\n      overflow: 'hidden',\n      fontSize: '14px',\n      backgroundColor: 'rgb(248,248,248,0.7)',\n      padding: '3px 5px'\n    },\n    noteContent: {\n      padding: '5px 20px',\n      fontSize: '14px',\n      color: 'rgb(115,115,115)'\n    },\n    empty: {\n      alignItems: 'center',\n      justifyContent: 'center',\n      margin: 'auto',\n      textAlign: 'center',\n      padding: '35px'\n    },\n    emptyIcon: {\n      fontSize: '75px'\n    },\n    newNoteText: {\n      cursor: 'pointer',\n      color: 'rgb(0,168,45)'\n    }\n  });\n});\nfunction NoteListItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"])({\n    item: {\n      type: props.noteTitle\n    },\n    collect: function collect(monitor) {\n      return {\n        opacity: monitor.isDragging() ? 0.4 : 1,\n        isDragging: monitor.isDragging()\n      };\n    }\n  }),\n      _useDrag2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDrag, 3),\n      opacity = _useDrag2[0].opacity,\n      drag = _useDrag2[1],\n      preview = _useDrag2[2];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    preview(Object(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__[\"getEmptyImage\"])(), {\n      captureDraggingState: true\n    });\n  }, []);\n\n  var getItemStyles = function getItemStyles(initialOffset, currentOffset, isSnapToGrid) {\n    if (!initialOffset || !currentOffset) {\n      return {\n        display: 'none'\n      };\n    }\n\n    var x = currentOffset.x,\n        y = currentOffset.y;\n\n    if (isSnapToGrid) {\n      x -= initialOffset.x;\n      y -= initialOffset.y; // [x, y] = snapToGrid(x, y);\n\n      x += initialOffset.x;\n      y += initialOffset.y;\n    }\n\n    var transform = \"translate(\".concat(x, \"px, \").concat(y, \"px)\");\n    return {\n      transform: transform,\n      WebkitTransform: transform\n    };\n  };\n\n  var _useDragLayer = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"])(function (monitor) {\n    return {\n      item: monitor.getItem(),\n      itemType: monitor.getItemType(),\n      initialOffset: monitor.getInitialSourceClientOffset(),\n      currentOffset: monitor.getSourceClientOffset(),\n      isDragging: monitor.isDragging()\n    };\n  }),\n      itemType = _useDragLayer.itemType,\n      isDragging = _useDragLayer.isDragging,\n      item = _useDragLayer.item,\n      initialOffset = _useDragLayer.initialOffset,\n      currentOffset = _useDragLayer.currentOffset;\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    ref: drag,\n    style: {\n      opacity: opacity\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.noteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 11\n    }\n  }, props.noteTitle), __jsx(\"div\", {\n    className: classes.noteContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 11\n    }\n  }, props.note))), __jsx(\"div\", {\n    style: layerStyles,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: getItemStyles(initialOffset, currentOffset, props.snapToGrid),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.preview,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 11\n    }\n  }, itemType))));\n}\n\n_s(NoteListItem, \"xNE7dXDKBzf8mU+A0Ln1GRS9K78=\", false, function () {\n  return [useStyles, react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"], react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"]];\n});\n\n_c = NoteListItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLWxpc3QtaXRlbS50c3g/Mjg2MyJdLCJuYW1lcyI6WyJsYXllclN0eWxlcyIsInBvc2l0aW9uIiwicG9pbnRlckV2ZW50cyIsInpJbmRleCIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbiIsImNvbG9yIiwiZm9udFNpemUiLCJ0aXRsZSIsInBhZGRpbmciLCJib3giLCJjdXJzb3IiLCJub3RlVGl0bGUiLCJwcmV2aWV3IiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJub3RlQ29udGVudCIsImVtcHR5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwiZW1wdHlJY29uIiwibmV3Tm90ZVRleHQiLCJOb3RlTGlzdEl0ZW0iLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VEcmFnIiwiaXRlbSIsInR5cGUiLCJjb2xsZWN0IiwibW9uaXRvciIsIm9wYWNpdHkiLCJpc0RyYWdnaW5nIiwiZHJhZyIsInVzZUVmZmVjdCIsImdldEVtcHR5SW1hZ2UiLCJjYXB0dXJlRHJhZ2dpbmdTdGF0ZSIsImdldEl0ZW1TdHlsZXMiLCJpbml0aWFsT2Zmc2V0IiwiY3VycmVudE9mZnNldCIsImlzU25hcFRvR3JpZCIsIngiLCJ5IiwidHJhbnNmb3JtIiwiV2Via2l0VHJhbnNmb3JtIiwidXNlRHJhZ0xheWVyIiwiZ2V0SXRlbSIsIml0ZW1UeXBlIiwiZ2V0SXRlbVR5cGUiLCJnZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0IiwiZ2V0U291cmNlQ2xpZW50T2Zmc2V0Iiwibm90ZSIsInNuYXBUb0dyaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNB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LGFBL0M2QztBQUFBLE1BZ0Q3Q0MsYUFoRDZDLGlCQWdEN0NBLGFBaEQ2Qzs7QUF5RC9DLFNBQ0UsbUVBQ0U7QUFBSyxhQUFTLEVBQUVkLE9BQU8sQ0FBQ2pCLEdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRXlCLElBQVY7QUFBZ0IsU0FBSyxFQUFFO0FBQUVGLGFBQU8sRUFBUEE7QUFBRixLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVOLE9BQU8sQ0FBQ2YsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQ2MsS0FBSyxDQUFDZCxTQUExQyxDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVlLE9BQU8sQ0FBQ1QsV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ1EsS0FBSyxDQUFDMkIsSUFBNUMsQ0FGRixDQURGLENBREYsRUFPRTtBQUFLLFNBQUssRUFBRS9ELFdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsU0FBSyxFQUFFaUQsYUFBYSxDQUFDQyxhQUFELEVBQWdCQyxhQUFoQixFQUErQmYsS0FBSyxDQUFDNEIsVUFBckMsQ0FEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFO0FBQUssYUFBUyxFQUFFM0IsT0FBTyxDQUFDZCxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDb0MsUUFBbEMsQ0FIRixDQURGLENBUEYsQ0FERjtBQWlCRDs7R0ExRXVCeEIsWTtVQUNOM0IsUyxFQUVxQjhCLGlELEVBOENqQ21CLHNEOzs7S0FqRGtCdEIsWSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbm90ZS1saXN0LWl0ZW0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgWFlDb29yZCwgdXNlRHJhZywgdXNlRHJhZ0xheWVyLCBEcmFnU291cmNlTW9uaXRvciB9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgeyBnZXRFbXB0eUltYWdlIH0gZnJvbSAncmVhY3QtZG5kLWh0bWw1LWJhY2tlbmQnO1xuXG5jb25zdCBsYXllclN0eWxlczogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgekluZGV4OiA5OTk5LFxuICBsZWZ0OiAwLFxuICB0b3A6IDAsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxufTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBjb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgZm9udFNpemU6ICcyMnB4JyxcbiAgICB9LFxuICAgIGJveDoge1xuICAgICAgcG9zaXRpb246ICdzdGlja3knLFxuICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICAgIG5vdGVUaXRsZToge1xuICAgICAgcGFkZGluZzogJzEwcHggMjBweCAwcHggMjBweCcsXG4gICAgICBjb2xvcjogJ3JnYig2MSw2MSw2MSknLFxuICAgIH0sXG4gICAgcHJldmlldzoge1xuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsdWUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgIHdpZHRoOiAnMTAwcHgnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDgsMjQ4LDI0OCwwLjcpJyxcbiAgICAgIHBhZGRpbmc6ICczcHggNXB4JyxcbiAgICB9LFxuICAgIG5vdGVDb250ZW50OiB7XG4gICAgICBwYWRkaW5nOiAnNXB4IDIwcHgnLFxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgIGNvbG9yOiAncmdiKDExNSwxMTUsMTE1KScsXG4gICAgfSxcbiAgICBlbXB0eToge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBwYWRkaW5nOiAnMzVweCcsXG4gICAgfSxcbiAgICBlbXB0eUljb246IHtcbiAgICAgIGZvbnRTaXplOiAnNzVweCcsXG4gICAgfSxcbiAgICBuZXdOb3RlVGV4dDoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogJ3JnYigwLDE2OCw0NSknLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlTGlzdEl0ZW0ocHJvcHM6IGFueSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgW3sgb3BhY2l0eSB9LCBkcmFnLCBwcmV2aWV3XSA9IHVzZURyYWcoe1xuICAgIGl0ZW06IHsgdHlwZTogcHJvcHMubm90ZVRpdGxlIH0sXG4gICAgY29sbGVjdDogKG1vbml0b3I6IERyYWdTb3VyY2VNb25pdG9yKSA9PiAoe1xuICAgICAgb3BhY2l0eTogbW9uaXRvci5pc0RyYWdnaW5nKCkgPyAwLjQgOiAxLFxuICAgICAgaXNEcmFnZ2luZzogbW9uaXRvci5pc0RyYWdnaW5nKCksXG4gICAgfSksXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJldmlldyhnZXRFbXB0eUltYWdlKCksIHsgY2FwdHVyZURyYWdnaW5nU3RhdGU6IHRydWUgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRJdGVtU3R5bGVzID0gKFxuICAgIGluaXRpYWxPZmZzZXQ6IFhZQ29vcmQgfCBudWxsLFxuICAgIGN1cnJlbnRPZmZzZXQ6IFhZQ29vcmQgfCBudWxsLFxuICAgIGlzU25hcFRvR3JpZDogYm9vbGVhblxuICApID0+IHtcbiAgICBpZiAoIWluaXRpYWxPZmZzZXQgfHwgIWN1cnJlbnRPZmZzZXQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgbGV0IHsgeCwgeSB9ID0gY3VycmVudE9mZnNldDtcblxuICAgIGlmIChpc1NuYXBUb0dyaWQpIHtcbiAgICAgIHggLT0gaW5pdGlhbE9mZnNldC54O1xuICAgICAgeSAtPSBpbml0aWFsT2Zmc2V0Lnk7XG4gICAgICAvLyBbeCwgeV0gPSBzbmFwVG9HcmlkKHgsIHkpO1xuICAgICAgeCArPSBpbml0aWFsT2Zmc2V0Lng7XG4gICAgICB5ICs9IGluaXRpYWxPZmZzZXQueTtcbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zZm9ybSxcbiAgICAgIFdlYmtpdFRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3Qge1xuICAgIGl0ZW1UeXBlLFxuICAgIGlzRHJhZ2dpbmcsXG4gICAgaXRlbSxcbiAgICBpbml0aWFsT2Zmc2V0LFxuICAgIGN1cnJlbnRPZmZzZXQsXG4gIH0gPSB1c2VEcmFnTGF5ZXIoKG1vbml0b3IpID0+ICh7XG4gICAgaXRlbTogbW9uaXRvci5nZXRJdGVtKCksXG4gICAgaXRlbVR5cGU6IG1vbml0b3IuZ2V0SXRlbVR5cGUoKSxcbiAgICBpbml0aWFsT2Zmc2V0OiBtb25pdG9yLmdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQoKSxcbiAgICBjdXJyZW50T2Zmc2V0OiBtb25pdG9yLmdldFNvdXJjZUNsaWVudE9mZnNldCgpLFxuICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxuICB9KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm94fT5cbiAgICAgICAgPGRpdiByZWY9e2RyYWd9IHN0eWxlPXt7IG9wYWNpdHkgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZVRpdGxlfT57cHJvcHMubm90ZVRpdGxlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGVDb250ZW50fT57cHJvcHMubm90ZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e2xheWVyU3R5bGVzfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXtnZXRJdGVtU3R5bGVzKGluaXRpYWxPZmZzZXQsIGN1cnJlbnRPZmZzZXQsIHByb3BzLnNuYXBUb0dyaWQpfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucHJldmlld30+e2l0ZW1UeXBlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/note-list-item.tsx\n");

/***/ })

})
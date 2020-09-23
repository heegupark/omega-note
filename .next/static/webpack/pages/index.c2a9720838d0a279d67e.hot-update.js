webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note-list-item.tsx":
/*!***************************************!*\
  !*** ./components/note-list-item.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteListItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/esm/index.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note-list-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar layerStyles = {\n  position: 'fixed',\n  pointerEvents: 'none',\n  zIndex: 9999,\n  left: 0,\n  top: 0,\n  // width: '100%',\n  height: '100%'\n};\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px',\n      width: '100%'\n    },\n    title: {\n      padding: '10px',\n      fontSize: '22px'\n    },\n    box: {\n      // position: 'sticky',\n      height: '100px',\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column'\n    },\n    previewIcon: {\n      paddingRight: '0px',\n      verticalAlign: 'middle'\n    },\n    previewItem: {\n      paddingLeft: '3px'\n    },\n    noteTitle: {\n      padding: '10px 20px 0px 20px',\n      color: 'rgb(61,61,61)'\n    },\n    preview: {\n      border: '1px solid rgb(186,223,229)',\n      borderRadius: '3px',\n      // width: '150px',\n      overflow: 'hidden',\n      fontSize: '14px',\n      backgroundColor: 'rgb(248,248,248,0.6)',\n      padding: '10px'\n    },\n    noteContent: {\n      padding: '5px 20px',\n      fontSize: '14px',\n      color: 'rgb(115,115,115)'\n    },\n    empty: {\n      alignItems: 'center',\n      justifyContent: 'center',\n      margin: 'auto',\n      textAlign: 'center',\n      padding: '35px'\n    },\n    emptyIcon: {\n      fontSize: '75px'\n    },\n    newNoteText: {\n      cursor: 'pointer',\n      color: 'rgb(0,168,45)'\n    }\n  });\n});\nfunction NoteListItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"])({\n    item: {\n      type: props.noteTitle\n    },\n    collect: function collect(monitor) {\n      return {\n        opacity: monitor.isDragging() ? 0.4 : 1,\n        isDragging: monitor.isDragging()\n      };\n    }\n  }),\n      _useDrag2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDrag, 3),\n      opacity = _useDrag2[0].opacity,\n      drag = _useDrag2[1],\n      preview = _useDrag2[2];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    preview(Object(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__[\"getEmptyImage\"])(), {\n      captureDraggingState: true\n    });\n  }, []);\n\n  var getItemStyles = function getItemStyles(initialOffset, currentOffset, isSnapToGrid) {\n    if (!initialOffset || !currentOffset) {\n      return {\n        display: 'none'\n      };\n    }\n\n    var x = currentOffset.x,\n        y = currentOffset.y;\n\n    if (isSnapToGrid) {\n      x -= initialOffset.x;\n      y -= initialOffset.y; // [x, y] = snapToGrid(x, y);\n\n      x += initialOffset.x;\n      y += initialOffset.y;\n    }\n\n    var transform = \"translate(\".concat(x, \"px, \").concat(y, \"px)\");\n    return {\n      transform: transform,\n      WebkitTransform: transform\n    };\n  };\n\n  var _useDragLayer = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"])(function (monitor) {\n    return {\n      item: monitor.getItem(),\n      itemType: monitor.getItemType(),\n      initialOffset: monitor.getInitialSourceClientOffset(),\n      currentOffset: monitor.getSourceClientOffset(),\n      isDragging: monitor.isDragging()\n    };\n  }),\n      itemType = _useDragLayer.itemType,\n      isDragging = _useDragLayer.isDragging,\n      item = _useDragLayer.item,\n      initialOffset = _useDragLayer.initialOffset,\n      currentOffset = _useDragLayer.currentOffset;\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    ref: drag,\n    style: {\n      opacity: opacity\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.noteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 11\n    }\n  }, props.noteTitle), __jsx(\"div\", {\n    className: classes.noteContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 11\n    }\n  }, props.note))), __jsx(\"div\", {\n    style: layerStyles,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: getItemStyles(initialOffset, currentOffset, props.snapToGrid),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.preview,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    className: classes.previewIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__[\"BsBook\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 15\n    }\n  })), __jsx(\"span\", {\n    className: classes.previewItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 13\n    }\n  }, itemType)))));\n}\n\n_s(NoteListItem, \"xNE7dXDKBzf8mU+A0Ln1GRS9K78=\", false, function () {\n  return [useStyles, react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"], react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"]];\n});\n\n_c = NoteListItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLWxpc3QtaXRlbS50c3g/Mjg2MyJdLCJuYW1lcyI6WyJsYXllclN0eWxlcyIsInBvc2l0aW9uIiwicG9pbnRlckV2ZW50cyIsInpJbmRleCIsImxlZnQiLCJ0b3AiLCJoZWlnaHQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW4iLCJjb2xvciIsImZvbnRTaXplIiwid2lkdGgiLCJ0aXRsZSIsInBhZGRpbmciLCJib3giLCJjdXJzb3IiLCJwcmV2aWV3SWNvbiIsInBhZGRpbmdSaWdodCIsInZlcnRpY2FsQWxpZ24iLCJwcmV2aWV3SXRlbSIsInBhZGRpbmdMZWZ0Iiwibm90ZVRpdGxlIiwicHJldmlldyIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwiYmFja2dyb3VuZENvbG9yIiwibm90ZUNvbnRlbnQiLCJlbXB0eSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsImVtcHR5SWNvbiIsIm5ld05vdGVUZXh0IiwiTm90ZUxpc3RJdGVtIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlRHJhZyIsIml0ZW0iLCJ0eXBlIiwiY29sbGVjdCIsIm1vbml0b3IiLCJvcGFjaXR5IiwiaXNEcmFnZ2luZyIsImRyYWciLCJ1c2VFZmZlY3QiLCJnZXRFbXB0eUltYWdlIiwiY2FwdHVyZURyYWdnaW5nU3RhdGUiLCJnZXRJdGVtU3R5bGVzIiwiaW5pdGlhbE9mZnNldCIsImN1cnJlbnRPZmZzZXQiLCJpc1NuYXBUb0dyaWQiLCJ4IiwieSIsInRyYW5zZm9ybSIsIldlYmtpdFRyYW5zZm9ybSIsInVzZURyYWdMYXllciIsImdldEl0ZW0iLCJpdGVtVHlwZSIsImdldEl0ZW1UeXBlIiwiZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCIsImdldFNvdXJjZUNs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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFNLGFBQVMsRUFBRW9CLE9BQU8sQ0FBQ2pCLFdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUN1QyxRQUF2QyxDQUpGLENBSEYsQ0FERixDQVBGLENBREY7QUFzQkQ7O0dBL0V1QnhCLFk7VUFDTmpDLFMsRUFFcUJvQyxpRCxFQThDakNtQixzRDs7O0tBakRrQnRCLFkiLCJmaWxlIjoiLi9jb21wb25lbnRzL25vdGUtbGlzdC1pdGVtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IFhZQ29vcmQsIHVzZURyYWcsIHVzZURyYWdMYXllciwgRHJhZ1NvdXJjZU1vbml0b3IgfSBmcm9tICdyZWFjdC1kbmQnO1xuaW1wb3J0IHsgZ2V0RW1wdHlJbWFnZSB9IGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJztcbmltcG9ydCB7IEJzQm9vayB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcblxuY29uc3QgbGF5ZXJTdHlsZXM6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gIHpJbmRleDogOTk5OSxcbiAgbGVmdDogMCxcbiAgdG9wOiAwLFxuICAvLyB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbn07XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgY29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgIGZvbnRTaXplOiAnMjJweCcsXG4gICAgfSxcbiAgICBib3g6IHtcbiAgICAgIC8vIHBvc2l0aW9uOiAnc3RpY2t5JyxcbiAgICAgIGhlaWdodDogJzEwMHB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgICBwcmV2aWV3SWNvbjogeyBwYWRkaW5nUmlnaHQ6ICcwcHgnLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9LFxuICAgIHByZXZpZXdJdGVtOiB7IHBhZGRpbmdMZWZ0OiAnM3B4JyB9LFxuICAgIG5vdGVUaXRsZToge1xuICAgICAgcGFkZGluZzogJzEwcHggMjBweCAwcHggMjBweCcsXG4gICAgICBjb2xvcjogJ3JnYig2MSw2MSw2MSknLFxuICAgIH0sXG4gICAgcHJldmlldzoge1xuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYigxODYsMjIzLDIyOSknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgIC8vIHdpZHRoOiAnMTUwcHgnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDgsMjQ4LDI0OCwwLjYpJyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICB9LFxuICAgIG5vdGVDb250ZW50OiB7XG4gICAgICBwYWRkaW5nOiAnNXB4IDIwcHgnLFxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgIGNvbG9yOiAncmdiKDExNSwxMTUsMTE1KScsXG4gICAgfSxcbiAgICBlbXB0eToge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBwYWRkaW5nOiAnMzVweCcsXG4gICAgfSxcbiAgICBlbXB0eUljb246IHtcbiAgICAgIGZvbnRTaXplOiAnNzVweCcsXG4gICAgfSxcbiAgICBuZXdOb3RlVGV4dDoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogJ3JnYigwLDE2OCw0NSknLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlTGlzdEl0ZW0ocHJvcHM6IGFueSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgW3sgb3BhY2l0eSB9LCBkcmFnLCBwcmV2aWV3XSA9IHVzZURyYWcoe1xuICAgIGl0ZW06IHsgdHlwZTogcHJvcHMubm90ZVRpdGxlIH0sXG4gICAgY29sbGVjdDogKG1vbml0b3I6IERyYWdTb3VyY2VNb25pdG9yKSA9PiAoe1xuICAgICAgb3BhY2l0eTogbW9uaXRvci5pc0RyYWdnaW5nKCkgPyAwLjQgOiAxLFxuICAgICAgaXNEcmFnZ2luZzogbW9uaXRvci5pc0RyYWdnaW5nKCksXG4gICAgfSksXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJldmlldyhnZXRFbXB0eUltYWdlKCksIHsgY2FwdHVyZURyYWdnaW5nU3RhdGU6IHRydWUgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRJdGVtU3R5bGVzID0gKFxuICAgIGluaXRpYWxPZmZzZXQ6IFhZQ29vcmQgfCBudWxsLFxuICAgIGN1cnJlbnRPZmZzZXQ6IFhZQ29vcmQgfCBudWxsLFxuICAgIGlzU25hcFRvR3JpZDogYm9vbGVhblxuICApID0+IHtcbiAgICBpZiAoIWluaXRpYWxPZmZzZXQgfHwgIWN1cnJlbnRPZmZzZXQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgbGV0IHsgeCwgeSB9ID0gY3VycmVudE9mZnNldDtcblxuICAgIGlmIChpc1NuYXBUb0dyaWQpIHtcbiAgICAgIHggLT0gaW5pdGlhbE9mZnNldC54O1xuICAgICAgeSAtPSBpbml0aWFsT2Zmc2V0Lnk7XG4gICAgICAvLyBbeCwgeV0gPSBzbmFwVG9HcmlkKHgsIHkpO1xuICAgICAgeCArPSBpbml0aWFsT2Zmc2V0Lng7XG4gICAgICB5ICs9IGluaXRpYWxPZmZzZXQueTtcbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zZm9ybSxcbiAgICAgIFdlYmtpdFRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3Qge1xuICAgIGl0ZW1UeXBlLFxuICAgIGlzRHJhZ2dpbmcsXG4gICAgaXRlbSxcbiAgICBpbml0aWFsT2Zmc2V0LFxuICAgIGN1cnJlbnRPZmZzZXQsXG4gIH0gPSB1c2VEcmFnTGF5ZXIoKG1vbml0b3IpID0+ICh7XG4gICAgaXRlbTogbW9uaXRvci5nZXRJdGVtKCksXG4gICAgaXRlbVR5cGU6IG1vbml0b3IuZ2V0SXRlbVR5cGUoKSxcbiAgICBpbml0aWFsT2Zmc2V0OiBtb25pdG9yLmdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQoKSxcbiAgICBjdXJyZW50T2Zmc2V0OiBtb25pdG9yLmdldFNvdXJjZUNsaWVudE9mZnNldCgpLFxuICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxuICB9KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm94fT5cbiAgICAgICAgPGRpdiByZWY9e2RyYWd9IHN0eWxlPXt7IG9wYWNpdHkgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZVRpdGxlfT57cHJvcHMubm90ZVRpdGxlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGVDb250ZW50fT57cHJvcHMubm90ZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e2xheWVyU3R5bGVzfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXtnZXRJdGVtU3R5bGVzKGluaXRpYWxPZmZzZXQsIGN1cnJlbnRPZmZzZXQsIHByb3BzLnNuYXBUb0dyaWQpfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucHJldmlld30+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucHJldmlld0ljb259PlxuICAgICAgICAgICAgICA8QnNCb29rIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucHJldmlld0l0ZW19PntpdGVtVHlwZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/note-list-item.tsx\n");

/***/ })

})
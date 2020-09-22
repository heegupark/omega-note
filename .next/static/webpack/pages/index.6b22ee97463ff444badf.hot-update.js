webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note-list-item.tsx":
/*!***************************************!*\
  !*** ./components/note-list-item.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteListItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/esm/index.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note-list-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar layerStyles = {\n  position: 'fixed',\n  pointerEvents: 'none',\n  zIndex: 9999,\n  left: 0,\n  top: 0,\n  width: '100%',\n  height: '100%'\n};\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px',\n      width: '100%'\n    },\n    title: {\n      padding: '10px',\n      fontSize: '22px'\n    },\n    box: {\n      position: 'sticky',\n      height: '100px',\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column'\n    },\n    noteTitle: {\n      padding: '10px 20px 0px 20px',\n      color: 'rgb(61,61,61)'\n    },\n    preview: {\n      border: '1px groove rgb(186,223,229)',\n      borderRadius: '3px',\n      width: '150px',\n      overflow: 'hidden',\n      fontSize: '14px',\n      backgroundColor: 'rgb(248,248,248,0.7)',\n      padding: '10px'\n    },\n    noteContent: {\n      padding: '5px 20px',\n      fontSize: '14px',\n      color: 'rgb(115,115,115)'\n    },\n    empty: {\n      alignItems: 'center',\n      justifyContent: 'center',\n      margin: 'auto',\n      textAlign: 'center',\n      padding: '35px'\n    },\n    emptyIcon: {\n      fontSize: '75px'\n    },\n    newNoteText: {\n      cursor: 'pointer',\n      color: 'rgb(0,168,45)'\n    }\n  });\n});\nfunction NoteListItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"])({\n    item: {\n      type: props.noteTitle\n    },\n    collect: function collect(monitor) {\n      return {\n        opacity: monitor.isDragging() ? 0.4 : 1,\n        isDragging: monitor.isDragging()\n      };\n    }\n  }),\n      _useDrag2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDrag, 3),\n      opacity = _useDrag2[0].opacity,\n      drag = _useDrag2[1],\n      preview = _useDrag2[2];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    preview(Object(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__[\"getEmptyImage\"])(), {\n      captureDraggingState: true\n    });\n  }, []);\n\n  var getItemStyles = function getItemStyles(initialOffset, currentOffset, isSnapToGrid) {\n    if (!initialOffset || !currentOffset) {\n      return {\n        display: 'none'\n      };\n    }\n\n    var x = currentOffset.x,\n        y = currentOffset.y;\n\n    if (isSnapToGrid) {\n      x -= initialOffset.x;\n      y -= initialOffset.y; // [x, y] = snapToGrid(x, y);\n\n      x += initialOffset.x;\n      y += initialOffset.y;\n    }\n\n    var transform = \"translate(\".concat(x, \"px, \").concat(y, \"px)\");\n    return {\n      transform: transform,\n      WebkitTransform: transform\n    };\n  };\n\n  var _useDragLayer = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"])(function (monitor) {\n    return {\n      item: monitor.getItem(),\n      itemType: monitor.getItemType(),\n      initialOffset: monitor.getInitialSourceClientOffset(),\n      currentOffset: monitor.getSourceClientOffset(),\n      isDragging: monitor.isDragging()\n    };\n  }),\n      itemType = _useDragLayer.itemType,\n      isDragging = _useDragLayer.isDragging,\n      item = _useDragLayer.item,\n      initialOffset = _useDragLayer.initialOffset,\n      currentOffset = _useDragLayer.currentOffset;\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    ref: drag,\n    style: {\n      opacity: opacity\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.noteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 11\n    }\n  }, props.noteTitle), __jsx(\"div\", {\n    className: classes.noteContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 11\n    }\n  }, props.note))), __jsx(\"div\", {\n    style: layerStyles,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: getItemStyles(initialOffset, currentOffset, props.snapToGrid),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.preview,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    style: {\n      padding: '0px 2px',\n      verticalAlign: 'middle'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__[\"BsBook\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 15\n    }\n  })), __jsx(\"span\", {\n    style: {\n      padding: '0px 2px',\n      verticalAlign: 'middle'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 13\n    }\n  }, itemType)))));\n}\n\n_s(NoteListItem, \"xNE7dXDKBzf8mU+A0Ln1GRS9K78=\", false, function () {\n  return [useStyles, react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"], react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"]];\n});\n\n_c = NoteListItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLWxpc3QtaXRlbS50c3g/Mjg2MyJdLCJuYW1lcyI6WyJsYXllclN0eWxlcyIsInBvc2l0aW9uIiwicG9pbnRlckV2ZW50cyIsInpJbmRleCIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbiIsImNvbG9yIiwiZm9udFNpemUiLCJ0aXRsZSIsInBhZGRpbmciLCJib3giLCJjdXJzb3IiLCJub3RlVGl0bGUiLCJwcmV2aWV3IiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJub3RlQ29udGVudCIsImVtcHR5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwiZW1wdHlJY29uIiwibmV3Tm90ZVRleHQiLCJOb3RlTGlzdEl0ZW0iLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VEcmFnIiwiaXRlbSIsInR5cGUiLCJjb2xsZWN0IiwibW9uaXRvciIsIm9wYWNpdHkiLCJpc0RyYWdnaW5nIiwiZHJhZyIsInVzZUVmZmVjdCIsImdldEVtcHR5SW1hZ2UiLCJjYXB0dXJlRHJhZ2dpbmdTdGF0ZSIsImdldEl0ZW1TdHlsZXMiLCJpbml0aWFsT2Zmc2V0IiwiY3VycmVudE9mZnNldCIsImlzU25hcFRvR3JpZCIsIngiLCJ5IiwidHJhbnNmb3JtIiwiV2Via2l0VHJhbnNmb3JtIiwidXNlRHJhZ0xheWVyIiwiZ2V0SXRlbSIsIml0ZW1UeXBlIiwiZ2V0SXRlbVR5cGUiLCJnZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0IiwiZ2V0U291cmNlQ2xpZW50T2Zmc2V0Iiwibm90ZSIsInNuYXBUb0dyaWQiLCJ2ZXJ0aWNhbEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7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QUFBTSxTQUFLLEVBQUU7QUFBRTlDLGFBQU8sRUFBRSxTQUFYO0FBQXNCOEMsbUJBQWEsRUFBRTtBQUFyQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sUUFESCxDQUpGLENBSEYsQ0FERixDQVBGLENBREY7QUF3QkQ7O0dBakZ1QnhCLFk7VUFDTjNCLFMsRUFFcUI4QixpRCxFQThDakNtQixzRDs7O0tBakRrQnRCLFkiLCJmaWxlIjoiLi9jb21wb25lbnRzL25vdGUtbGlzdC1pdGVtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IFhZQ29vcmQsIHVzZURyYWcsIHVzZURyYWdMYXllciwgRHJhZ1NvdXJjZU1vbml0b3IgfSBmcm9tICdyZWFjdC1kbmQnO1xuaW1wb3J0IHsgZ2V0RW1wdHlJbWFnZSB9IGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJztcbmltcG9ydCB7IEJzQm9vayB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcblxuY29uc3QgbGF5ZXJTdHlsZXM6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gIHpJbmRleDogOTk5OSxcbiAgbGVmdDogMCxcbiAgdG9wOiAwLFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbn07XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgY29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgIGZvbnRTaXplOiAnMjJweCcsXG4gICAgfSxcbiAgICBib3g6IHtcbiAgICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcbiAgICAgIGhlaWdodDogJzEwMHB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgICBub3RlVGl0bGU6IHtcbiAgICAgIHBhZGRpbmc6ICcxMHB4IDIwcHggMHB4IDIwcHgnLFxuICAgICAgY29sb3I6ICdyZ2IoNjEsNjEsNjEpJyxcbiAgICB9LFxuICAgIHByZXZpZXc6IHtcbiAgICAgIGJvcmRlcjogJzFweCBncm9vdmUgcmdiKDE4NiwyMjMsMjI5KScsXG4gICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgd2lkdGg6ICcxNTBweCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0OCwyNDgsMjQ4LDAuNyknLFxuICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgIH0sXG4gICAgbm90ZUNvbnRlbnQ6IHtcbiAgICAgIHBhZGRpbmc6ICc1cHggMjBweCcsXG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgY29sb3I6ICdyZ2IoMTE1LDExNSwxMTUpJyxcbiAgICB9LFxuICAgIGVtcHR5OiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHBhZGRpbmc6ICczNXB4JyxcbiAgICB9LFxuICAgIGVtcHR5SWNvbjoge1xuICAgICAgZm9udFNpemU6ICc3NXB4JyxcbiAgICB9LFxuICAgIG5ld05vdGVUZXh0OiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGNvbG9yOiAncmdiKDAsMTY4LDQ1KScsXG4gICAgfSxcbiAgfSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVMaXN0SXRlbShwcm9wczogYW55KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBbeyBvcGFjaXR5IH0sIGRyYWcsIHByZXZpZXddID0gdXNlRHJhZyh7XG4gICAgaXRlbTogeyB0eXBlOiBwcm9wcy5ub3RlVGl0bGUgfSxcbiAgICBjb2xsZWN0OiAobW9uaXRvcjogRHJhZ1NvdXJjZU1vbml0b3IpID0+ICh7XG4gICAgICBvcGFjaXR5OiBtb25pdG9yLmlzRHJhZ2dpbmcoKSA/IDAuNCA6IDEsXG4gICAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKSxcbiAgICB9KSxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcmV2aWV3KGdldEVtcHR5SW1hZ2UoKSwgeyBjYXB0dXJlRHJhZ2dpbmdTdGF0ZTogdHJ1ZSB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldEl0ZW1TdHlsZXMgPSAoXG4gICAgaW5pdGlhbE9mZnNldDogWFlDb29yZCB8IG51bGwsXG4gICAgY3VycmVudE9mZnNldDogWFlDb29yZCB8IG51bGwsXG4gICAgaXNTbmFwVG9HcmlkOiBib29sZWFuXG4gICkgPT4ge1xuICAgIGlmICghaW5pdGlhbE9mZnNldCB8fCAhY3VycmVudE9mZnNldCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBsZXQgeyB4LCB5IH0gPSBjdXJyZW50T2Zmc2V0O1xuXG4gICAgaWYgKGlzU25hcFRvR3JpZCkge1xuICAgICAgeCAtPSBpbml0aWFsT2Zmc2V0Lng7XG4gICAgICB5IC09IGluaXRpYWxPZmZzZXQueTtcbiAgICAgIC8vIFt4LCB5XSA9IHNuYXBUb0dyaWQoeCwgeSk7XG4gICAgICB4ICs9IGluaXRpYWxPZmZzZXQueDtcbiAgICAgIHkgKz0gaW5pdGlhbE9mZnNldC55O1xuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4fXB4LCAke3l9cHgpYDtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNmb3JtLFxuICAgICAgV2Via2l0VHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCB7XG4gICAgaXRlbVR5cGUsXG4gICAgaXNEcmFnZ2luZyxcbiAgICBpdGVtLFxuICAgIGluaXRpYWxPZmZzZXQsXG4gICAgY3VycmVudE9mZnNldCxcbiAgfSA9IHVzZURyYWdMYXllcigobW9uaXRvcikgPT4gKHtcbiAgICBpdGVtOiBtb25pdG9yLmdldEl0ZW0oKSxcbiAgICBpdGVtVHlwZTogbW9uaXRvci5nZXRJdGVtVHlwZSgpLFxuICAgIGluaXRpYWxPZmZzZXQ6IG1vbml0b3IuZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCgpLFxuICAgIGN1cnJlbnRPZmZzZXQ6IG1vbml0b3IuZ2V0U291cmNlQ2xpZW50T2Zmc2V0KCksXG4gICAgaXNEcmFnZ2luZzogbW9uaXRvci5pc0RyYWdnaW5nKCksXG4gIH0pKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3h9PlxuICAgICAgICA8ZGl2IHJlZj17ZHJhZ30gc3R5bGU9e3sgb3BhY2l0eSB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RlVGl0bGV9Pntwcm9wcy5ub3RlVGl0bGV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZUNvbnRlbnR9Pntwcm9wcy5ub3RlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17bGF5ZXJTdHlsZXN9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e2dldEl0ZW1TdHlsZXMoaW5pdGlhbE9mZnNldCwgY3VycmVudE9mZnNldCwgcHJvcHMuc25hcFRvR3JpZCl9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcmV2aWV3fT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMnB4JywgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX0+XG4gICAgICAgICAgICAgIDxCc0Jvb2sgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMnB4JywgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX0+XG4gICAgICAgICAgICAgIHtpdGVtVHlwZX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/note-list-item.tsx\n");

/***/ })

})
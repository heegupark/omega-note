webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note-list-item.tsx":
/*!***************************************!*\
  !*** ./components/note-list-item.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteListItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/esm/index.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note-list-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar layerStyles = {\n  position: 'fixed',\n  pointerEvents: 'none',\n  zIndex: 9999,\n  left: 0,\n  top: 0,\n  width: '100%',\n  height: '100%'\n};\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px',\n      width: '100%'\n    },\n    title: {\n      padding: '10px',\n      fontSize: '22px'\n    },\n    box: {\n      position: 'sticky',\n      height: '100px',\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column'\n    },\n    noteTitle: {\n      padding: '10px 20px 0px 20px',\n      color: 'rgb(61,61,61)'\n    },\n    preview: {\n      border: '1px groove rgb(186,223,229)',\n      borderRadius: '3px',\n      width: '150px',\n      overflow: 'hidden',\n      fontSize: '14px',\n      backgroundColor: 'rgb(248,248,248,0.7)',\n      padding: '10px'\n    },\n    noteContent: {\n      padding: '5px 20px',\n      fontSize: '14px',\n      color: 'rgb(115,115,115)'\n    },\n    empty: {\n      alignItems: 'center',\n      justifyContent: 'center',\n      margin: 'auto',\n      textAlign: 'center',\n      padding: '35px'\n    },\n    emptyIcon: {\n      fontSize: '75px'\n    },\n    newNoteText: {\n      cursor: 'pointer',\n      color: 'rgb(0,168,45)'\n    }\n  });\n});\nfunction NoteListItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"])({\n    item: {\n      type: props.noteTitle\n    },\n    collect: function collect(monitor) {\n      return {\n        opacity: monitor.isDragging() ? 0.4 : 1,\n        isDragging: monitor.isDragging()\n      };\n    }\n  }),\n      _useDrag2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDrag, 3),\n      opacity = _useDrag2[0].opacity,\n      drag = _useDrag2[1],\n      preview = _useDrag2[2];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    preview(Object(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__[\"getEmptyImage\"])(), {\n      captureDraggingState: true\n    });\n  }, []);\n\n  var getItemStyles = function getItemStyles(initialOffset, currentOffset, isSnapToGrid) {\n    if (!initialOffset || !currentOffset) {\n      return {\n        display: 'none'\n      };\n    }\n\n    var x = currentOffset.x,\n        y = currentOffset.y;\n\n    if (isSnapToGrid) {\n      x -= initialOffset.x;\n      y -= initialOffset.y; // [x, y] = snapToGrid(x, y);\n\n      x += initialOffset.x;\n      y += initialOffset.y;\n    }\n\n    var transform = \"translate(\".concat(x, \"px, \").concat(y, \"px)\");\n    return {\n      transform: transform,\n      WebkitTransform: transform\n    };\n  };\n\n  var _useDragLayer = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"])(function (monitor) {\n    return {\n      item: monitor.getItem(),\n      itemType: monitor.getItemType(),\n      initialOffset: monitor.getInitialSourceClientOffset(),\n      currentOffset: monitor.getSourceClientOffset(),\n      isDragging: monitor.isDragging()\n    };\n  }),\n      itemType = _useDragLayer.itemType,\n      isDragging = _useDragLayer.isDragging,\n      item = _useDragLayer.item,\n      initialOffset = _useDragLayer.initialOffset,\n      currentOffset = _useDragLayer.currentOffset;\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    ref: drag,\n    style: {\n      opacity: opacity\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.noteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 11\n    }\n  }, props.noteTitle), __jsx(\"div\", {\n    className: classes.noteContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 11\n    }\n  }, props.note))), __jsx(\"div\", {\n    style: layerStyles,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: getItemStyles(initialOffset, currentOffset, props.snapToGrid),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.preview,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    style: {\n      padding: '0px 2px',\n      verticalAlign: 'middle'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__[\"BsBook\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 15\n    }\n  })), __jsx(\"span\", {\n    style: {\n      padding: '0px 2px'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 13\n    }\n  }, itemType)))));\n}\n\n_s(NoteListItem, \"xNE7dXDKBzf8mU+A0Ln1GRS9K78=\", false, function () {\n  return [useStyles, react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"], react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"]];\n});\n\n_c = NoteListItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLWxpc3QtaXRlbS50c3g/Mjg2MyJdLCJuYW1lcyI6WyJsYXllclN0eWxlcyIsInBvc2l0aW9uIiwicG9pbnRlckV2ZW50cyIsInpJbmRleCIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbiIsImNvbG9yIiwiZm9udFNpemUiLCJ0aXRsZSIsInBhZGRpbmciLCJib3giLCJjdXJzb3IiLCJub3RlVGl0bGUiLCJwcmV2aWV3IiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJub3RlQ29udGVudCIsImVtcHR5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwiZW1wdHlJY29uIiwibmV3Tm90ZVRleHQiLCJOb3RlTGlzdEl0ZW0iLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VEcmFnIiwiaXRlbSIsInR5cGUiLCJjb2xsZWN0IiwibW9uaXRvciIsIm9wYWNpdHkiLCJpc0RyYWdnaW5nIiwiZHJhZyIsInVzZUVmZmVjdCIsImdldEVtcHR5SW1hZ2UiLCJjYXB0dXJlRHJhZ2dpbmdTdGF0ZSIsImdldEl0ZW1TdHlsZXMiLCJpbml0aWFsT2Zmc2V0IiwiY3VycmVudE9mZnNldCIsImlzU25hcFRvR3JpZCIsIngiLCJ5IiwidHJhbnNmb3JtIiwiV2Via2l0VHJhbnNmb3JtIiwidXNlRHJhZ0xheWVyIiwiZ2V0SXRlbSIsIml0ZW1UeXBlIiwiZ2V0SXRlbVR5cGUiLCJnZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0IiwiZ2V0U291cmNlQ2xpZW50T2Zmc2V0Iiwibm90ZSIsInNuYXBUb0dyaWQiLCJ2ZXJ0aWNhbEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7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QUFBTSxTQUFLLEVBQUU7QUFBRTlDLGFBQU8sRUFBRTtBQUFYLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ3dDLFFBQXRDLENBSkYsQ0FIRixDQURGLENBUEYsQ0FERjtBQXNCRDs7R0EvRXVCeEIsWTtVQUNOM0IsUyxFQUVxQjhCLGlELEVBOENqQ21CLHNEOzs7S0FqRGtCdEIsWSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbm90ZS1saXN0LWl0ZW0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgWFlDb29yZCwgdXNlRHJhZywgdXNlRHJhZ0xheWVyLCBEcmFnU291cmNlTW9uaXRvciB9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgeyBnZXRFbXB0eUltYWdlIH0gZnJvbSAncmVhY3QtZG5kLWh0bWw1LWJhY2tlbmQnO1xuaW1wb3J0IHsgQnNCb29rIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xuXG5jb25zdCBsYXllclN0eWxlczogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgekluZGV4OiA5OTk5LFxuICBsZWZ0OiAwLFxuICB0b3A6IDAsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxufTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBjb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgZm9udFNpemU6ICcyMnB4JyxcbiAgICB9LFxuICAgIGJveDoge1xuICAgICAgcG9zaXRpb246ICdzdGlja3knLFxuICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICAgIG5vdGVUaXRsZToge1xuICAgICAgcGFkZGluZzogJzEwcHggMjBweCAwcHggMjBweCcsXG4gICAgICBjb2xvcjogJ3JnYig2MSw2MSw2MSknLFxuICAgIH0sXG4gICAgcHJldmlldzoge1xuICAgICAgYm9yZGVyOiAnMXB4IGdyb292ZSByZ2IoMTg2LDIyMywyMjkpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICB3aWR0aDogJzE1MHB4JyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQ4LDI0OCwyNDgsMC43KScsXG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgfSxcbiAgICBub3RlQ29udGVudDoge1xuICAgICAgcGFkZGluZzogJzVweCAyMHB4JyxcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICBjb2xvcjogJ3JnYigxMTUsMTE1LDExNSknLFxuICAgIH0sXG4gICAgZW1wdHk6IHtcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgcGFkZGluZzogJzM1cHgnLFxuICAgIH0sXG4gICAgZW1wdHlJY29uOiB7XG4gICAgICBmb250U2l6ZTogJzc1cHgnLFxuICAgIH0sXG4gICAgbmV3Tm90ZVRleHQ6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgY29sb3I6ICdyZ2IoMCwxNjgsNDUpJyxcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZUxpc3RJdGVtKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IFt7IG9wYWNpdHkgfSwgZHJhZywgcHJldmlld10gPSB1c2VEcmFnKHtcbiAgICBpdGVtOiB7IHR5cGU6IHByb3BzLm5vdGVUaXRsZSB9LFxuICAgIGNvbGxlY3Q6IChtb25pdG9yOiBEcmFnU291cmNlTW9uaXRvcikgPT4gKHtcbiAgICAgIG9wYWNpdHk6IG1vbml0b3IuaXNEcmFnZ2luZygpID8gMC40IDogMSxcbiAgICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxuICAgIH0pLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByZXZpZXcoZ2V0RW1wdHlJbWFnZSgpLCB7IGNhcHR1cmVEcmFnZ2luZ1N0YXRlOiB0cnVlIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZ2V0SXRlbVN0eWxlcyA9IChcbiAgICBpbml0aWFsT2Zmc2V0OiBYWUNvb3JkIHwgbnVsbCxcbiAgICBjdXJyZW50T2Zmc2V0OiBYWUNvb3JkIHwgbnVsbCxcbiAgICBpc1NuYXBUb0dyaWQ6IGJvb2xlYW5cbiAgKSA9PiB7XG4gICAgaWYgKCFpbml0aWFsT2Zmc2V0IHx8ICFjdXJyZW50T2Zmc2V0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGxldCB7IHgsIHkgfSA9IGN1cnJlbnRPZmZzZXQ7XG5cbiAgICBpZiAoaXNTbmFwVG9HcmlkKSB7XG4gICAgICB4IC09IGluaXRpYWxPZmZzZXQueDtcbiAgICAgIHkgLT0gaW5pdGlhbE9mZnNldC55O1xuICAgICAgLy8gW3gsIHldID0gc25hcFRvR3JpZCh4LCB5KTtcbiAgICAgIHggKz0gaW5pdGlhbE9mZnNldC54O1xuICAgICAgeSArPSBpbml0aWFsT2Zmc2V0Lnk7XG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3h9cHgsICR7eX1weClgO1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2Zvcm0sXG4gICAgICBXZWJraXRUcmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHtcbiAgICBpdGVtVHlwZSxcbiAgICBpc0RyYWdnaW5nLFxuICAgIGl0ZW0sXG4gICAgaW5pdGlhbE9mZnNldCxcbiAgICBjdXJyZW50T2Zmc2V0LFxuICB9ID0gdXNlRHJhZ0xheWVyKChtb25pdG9yKSA9PiAoe1xuICAgIGl0ZW06IG1vbml0b3IuZ2V0SXRlbSgpLFxuICAgIGl0ZW1UeXBlOiBtb25pdG9yLmdldEl0ZW1UeXBlKCksXG4gICAgaW5pdGlhbE9mZnNldDogbW9uaXRvci5nZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KCksXG4gICAgY3VycmVudE9mZnNldDogbW9uaXRvci5nZXRTb3VyY2VDbGllbnRPZmZzZXQoKSxcbiAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKSxcbiAgfSkpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XG4gICAgICAgIDxkaXYgcmVmPXtkcmFnfSBzdHlsZT17eyBvcGFjaXR5IH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGVUaXRsZX0+e3Byb3BzLm5vdGVUaXRsZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RlQ29udGVudH0+e3Byb3BzLm5vdGV9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXtsYXllclN0eWxlc30+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17Z2V0SXRlbVN0eWxlcyhpbml0aWFsT2Zmc2V0LCBjdXJyZW50T2Zmc2V0LCBwcm9wcy5zbmFwVG9HcmlkKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByZXZpZXd9PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgcGFkZGluZzogJzBweCAycHgnLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fT5cbiAgICAgICAgICAgICAgPEJzQm9vayAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgcGFkZGluZzogJzBweCAycHgnIH19PntpdGVtVHlwZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/note-list-item.tsx\n");

/***/ })

})
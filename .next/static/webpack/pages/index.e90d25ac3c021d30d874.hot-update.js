webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note-list-item.tsx":
/*!***************************************!*\
  !*** ./components/note-list-item.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteListItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note-list-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px',\n      width: '100%'\n    },\n    title: {\n      padding: '10px',\n      fontSize: '22px'\n    },\n    box: {\n      position: 'sticky',\n      height: '100px',\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column'\n    },\n    noteTitle: {\n      padding: '10px 20px 0px 20px',\n      color: 'rgb(61,61,61)'\n    },\n    noteContent: {\n      padding: '5px 20px',\n      fontSize: '14px',\n      color: 'rgb(115,115,115)'\n    },\n    empty: {\n      alignItems: 'center',\n      justifyContent: 'center',\n      margin: 'auto',\n      textAlign: 'center',\n      padding: '35px'\n    },\n    emptyIcon: {\n      fontSize: '75px'\n    },\n    newNoteText: {\n      cursor: 'pointer',\n      color: 'rgb(0,168,45)'\n    }\n  });\n});\n\nvar getItemStyles = function getItemStyles(initialOffset, currentOffset, isSnapToGrid) {\n  if (!initialOffset || !currentOffset) {\n    return {\n      display: 'none'\n    };\n  }\n\n  var x = currentOffset.x,\n      y = currentOffset.y;\n\n  if (isSnapToGrid) {\n    x -= initialOffset.x;\n    y -= initialOffset.y; // [x, y] = snapToGrid(x, y);\n\n    x += initialOffset.x;\n    y += initialOffset.y;\n  }\n\n  var transform = \"translate(\".concat(x, \"px, \").concat(y, \"px)\");\n  return {\n    transform: transform,\n    WebkitTransform: transform\n  };\n};\n\nfunction NoteListItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"])({\n    item: {\n      type: props.noteTitle\n    },\n    collect: function collect(monitor) {\n      return {\n        opacity: monitor.isDragging() ? 0.4 : 1,\n        isDragging: monitor.isDragging()\n      };\n    }\n  }),\n      _useDrag2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDrag, 3),\n      opacity = _useDrag2[0].opacity,\n      drag = _useDrag2[1],\n      preview = _useDrag2[2];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    preview(Object(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__[\"getEmptyImage\"])(), {\n      captureDraggingState: true\n    });\n  }, []);\n\n  var _useDragLayer = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"])(function (monitor) {\n    return {\n      item: monitor.getItem(),\n      itemType: monitor.getItemType(),\n      initialOffset: monitor.getInitialSourceClientOffset(),\n      currentOffset: monitor.getSourceClientOffset(),\n      isDragging: monitor.isDragging()\n    };\n  }),\n      itemType = _useDragLayer.itemType,\n      isDragging = _useDragLayer.isDragging,\n      item = _useDragLayer.item,\n      initialOffset = _useDragLayer.initialOffset,\n      currentOffset = _useDragLayer.currentOffset;\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    ref: drag,\n    style: {\n      opacity: opacity\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.noteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 11\n    }\n  }, props.noteTitle), __jsx(\"div\", {\n    className: classes.noteContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 11\n    }\n  }, props.note))), __jsx(\"div\", {\n    style: getItemStyles(initialOffset, currentOffset, props.snapToGrid),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }\n  }, props.noteTitle));\n}\n\n_s(NoteListItem, \"xNE7dXDKBzf8mU+A0Ln1GRS9K78=\", false, function () {\n  return [useStyles, react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"], react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"]];\n});\n\n_c = NoteListItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLWxpc3QtaXRlbS50c3g/Mjg2MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJtYXJnaW4iLCJjb2xvciIsImZvbnRTaXplIiwid2lkdGgiLCJ0aXRsZSIsInBhZGRpbmciLCJib3giLCJwb3NpdGlvbiIsImN1cnNvciIsIm5vdGVUaXRsZSIsIm5vdGVDb250ZW50IiwiZW1wdHkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJlbXB0eUljb24iLCJuZXdOb3RlVGV4dCIsImdldEl0ZW1TdHlsZXMiLCJpbml0aWFsT2Zmc2V0IiwiY3VycmVudE9mZnNldCIsImlzU25hcFRvR3JpZCIsIngiLCJ5IiwidHJhbnNmb3JtIiwiV2Via2l0VHJhbnNmb3JtIiwiTm90ZUxpc3RJdGVtIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlRHJhZyIsIml0ZW0iLCJ0eXBlIiwiY29sbGVjdCIsIm1vbml0b3IiLCJvcGFjaXR5IiwiaXNEcmFnZ2luZyIsImRyYWciLCJwcmV2aWV3IiwidXNlRWZmZWN0IiwiZ2V0RW1wdHlJbWFnZSIsImNhcHR1cmVEcmFnZ2luZ1N0YXRlIiwidXNlRHJhZ0xheWVyIiwiZ2V0SXRlbSIsIml0ZW1UeXBlIiwiZ2V0SXRlbVR5cGUiLCJnZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0IiwiZ2V0U291cmNlQ2xpZW50T2Zmc2V0Iiwibm90ZSIsInNuYXBUb0dyaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUs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LGFBQWEsQ0FBQ0MsYUFBRCxFQUFnQkMsYUFBaEIsRUFBK0JPLEtBQUssQ0FBQ3FCLFVBQXJDLENBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHR3JCLEtBQUssQ0FBQ2pCLFNBSFQsQ0FQRixDQURGO0FBZUQ7O0dBNUN1QmdCLFk7VUFDTmpDLFMsRUFFcUJvQyxpRCxFQWtCakNZLHNEOzs7S0FyQmtCZixZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ub3RlLWxpc3QtaXRlbS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBYWUNvb3JkLCB1c2VEcmFnLCB1c2VEcmFnTGF5ZXIsIERyYWdTb3VyY2VNb25pdG9yIH0gZnJvbSAncmVhY3QtZG5kJztcbmltcG9ydCB7IGdldEVtcHR5SW1hZ2UgfSBmcm9tICdyZWFjdC1kbmQtaHRtbDUtYmFja2VuZCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgY29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgIGZvbnRTaXplOiAnMjJweCcsXG4gICAgfSxcbiAgICBib3g6IHtcbiAgICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcbiAgICAgIGhlaWdodDogJzEwMHB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgICBub3RlVGl0bGU6IHtcbiAgICAgIHBhZGRpbmc6ICcxMHB4IDIwcHggMHB4IDIwcHgnLFxuICAgICAgY29sb3I6ICdyZ2IoNjEsNjEsNjEpJyxcbiAgICB9LFxuICAgIG5vdGVDb250ZW50OiB7XG4gICAgICBwYWRkaW5nOiAnNXB4IDIwcHgnLFxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgIGNvbG9yOiAncmdiKDExNSwxMTUsMTE1KScsXG4gICAgfSxcbiAgICBlbXB0eToge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBwYWRkaW5nOiAnMzVweCcsXG4gICAgfSxcbiAgICBlbXB0eUljb246IHtcbiAgICAgIGZvbnRTaXplOiAnNzVweCcsXG4gICAgfSxcbiAgICBuZXdOb3RlVGV4dDoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogJ3JnYigwLDE2OCw0NSknLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCBnZXRJdGVtU3R5bGVzID0gKFxuICBpbml0aWFsT2Zmc2V0OiBYWUNvb3JkIHwgbnVsbCxcbiAgY3VycmVudE9mZnNldDogWFlDb29yZCB8IG51bGwsXG4gIGlzU25hcFRvR3JpZDogYm9vbGVhblxuKSA9PiB7XG4gIGlmICghaW5pdGlhbE9mZnNldCB8fCAhY3VycmVudE9mZnNldCkge1xuICAgIHJldHVybiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfTtcbiAgfVxuXG4gIGxldCB7IHgsIHkgfSA9IGN1cnJlbnRPZmZzZXQ7XG5cbiAgaWYgKGlzU25hcFRvR3JpZCkge1xuICAgIHggLT0gaW5pdGlhbE9mZnNldC54O1xuICAgIHkgLT0gaW5pdGlhbE9mZnNldC55O1xuICAgIC8vIFt4LCB5XSA9IHNuYXBUb0dyaWQoeCwgeSk7XG4gICAgeCArPSBpbml0aWFsT2Zmc2V0Lng7XG4gICAgeSArPSBpbml0aWFsT2Zmc2V0Lnk7XG4gIH1cblxuICBjb25zdCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWA7XG4gIHJldHVybiB7XG4gICAgdHJhbnNmb3JtLFxuICAgIFdlYmtpdFRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZUxpc3RJdGVtKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IFt7IG9wYWNpdHkgfSwgZHJhZywgcHJldmlld10gPSB1c2VEcmFnKHtcbiAgICBpdGVtOiB7IHR5cGU6IHByb3BzLm5vdGVUaXRsZSB9LFxuICAgIGNvbGxlY3Q6IChtb25pdG9yOiBEcmFnU291cmNlTW9uaXRvcikgPT4gKHtcbiAgICAgIG9wYWNpdHk6IG1vbml0b3IuaXNEcmFnZ2luZygpID8gMC40IDogMSxcbiAgICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxuICAgIH0pLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByZXZpZXcoZ2V0RW1wdHlJbWFnZSgpLCB7IGNhcHR1cmVEcmFnZ2luZ1N0YXRlOiB0cnVlIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qge1xuICAgIGl0ZW1UeXBlLFxuICAgIGlzRHJhZ2dpbmcsXG4gICAgaXRlbSxcbiAgICBpbml0aWFsT2Zmc2V0LFxuICAgIGN1cnJlbnRPZmZzZXQsXG4gIH0gPSB1c2VEcmFnTGF5ZXIoKG1vbml0b3IpID0+ICh7XG4gICAgaXRlbTogbW9uaXRvci5nZXRJdGVtKCksXG4gICAgaXRlbVR5cGU6IG1vbml0b3IuZ2V0SXRlbVR5cGUoKSxcbiAgICBpbml0aWFsT2Zmc2V0OiBtb25pdG9yLmdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQoKSxcbiAgICBjdXJyZW50T2Zmc2V0OiBtb25pdG9yLmdldFNvdXJjZUNsaWVudE9mZnNldCgpLFxuICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxuICB9KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm94fT5cbiAgICAgICAgPGRpdiByZWY9e2RyYWd9IHN0eWxlPXt7IG9wYWNpdHkgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZVRpdGxlfT57cHJvcHMubm90ZVRpdGxlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGVDb250ZW50fT57cHJvcHMubm90ZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e2dldEl0ZW1TdHlsZXMoaW5pdGlhbE9mZnNldCwgY3VycmVudE9mZnNldCwgcHJvcHMuc25hcFRvR3JpZCl9XG4gICAgICA+XG4gICAgICAgIHtwcm9wcy5ub3RlVGl0bGV9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/note-list-item.tsx\n");

/***/ })

})
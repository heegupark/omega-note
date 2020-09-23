webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note-list-item.tsx":
/*!***************************************!*\
  !*** ./components/note-list-item.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteListItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/esm/index.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note-list-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar layerStyles = {\n  position: 'fixed',\n  pointerEvents: 'none',\n  zIndex: 9999,\n  left: 0,\n  top: 0,\n  // width: '100%',\n  height: '100%'\n};\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px',\n      width: '100%'\n    },\n    title: {\n      padding: '10px',\n      fontSize: '22px'\n    },\n    box: {\n      // position: 'sticky',\n      height: '100px',\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column'\n    },\n    previewIcon: {\n      padding: '2px 3px 0px 3px',\n      verticalAlign: 'middle'\n    },\n    previewItem: {\n      padding: '2px 3px 0px 3px'\n    },\n    noteTitle: {\n      padding: '10px 20px 0px 20px',\n      color: 'rgb(61,61,61)'\n    },\n    preview: {\n      border: '1px solid rgb(186,223,229)',\n      borderRadius: '3px',\n      // width: '150px',\n      overflow: 'hidden',\n      fontSize: '14px',\n      backgroundColor: 'rgb(248,248,248,0.6)',\n      padding: '10px'\n    },\n    noteContent: {\n      padding: '5px 20px',\n      fontSize: '14px',\n      color: 'rgb(115,115,115)'\n    },\n    empty: {\n      alignItems: 'center',\n      justifyContent: 'center',\n      margin: 'auto',\n      textAlign: 'center',\n      padding: '35px'\n    },\n    emptyIcon: {\n      fontSize: '75px'\n    },\n    newNoteText: {\n      cursor: 'pointer',\n      color: 'rgb(0,168,45)'\n    }\n  });\n});\nfunction NoteListItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"])({\n    item: {\n      type: props.noteTitle\n    },\n    collect: function collect(monitor) {\n      return {\n        opacity: monitor.isDragging() ? 0.4 : 1,\n        isDragging: monitor.isDragging()\n      };\n    }\n  }),\n      _useDrag2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDrag, 3),\n      opacity = _useDrag2[0].opacity,\n      drag = _useDrag2[1],\n      preview = _useDrag2[2];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    preview(Object(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__[\"getEmptyImage\"])(), {\n      captureDraggingState: true\n    });\n  }, []);\n\n  var getItemStyles = function getItemStyles(initialOffset, currentOffset, isSnapToGrid) {\n    if (!initialOffset || !currentOffset) {\n      return {\n        display: 'none'\n      };\n    }\n\n    var x = currentOffset.x,\n        y = currentOffset.y;\n\n    if (isSnapToGrid) {\n      x -= initialOffset.x;\n      y -= initialOffset.y; // [x, y] = snapToGrid(x, y);\n\n      x += initialOffset.x;\n      y += initialOffset.y;\n    }\n\n    var transform = \"translate(\".concat(x, \"px, \").concat(y, \"px)\");\n    return {\n      transform: transform,\n      WebkitTransform: transform\n    };\n  };\n\n  var _useDragLayer = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"])(function (monitor) {\n    return {\n      item: monitor.getItem(),\n      itemType: monitor.getItemType(),\n      initialOffset: monitor.getInitialSourceClientOffset(),\n      currentOffset: monitor.getSourceClientOffset(),\n      isDragging: monitor.isDragging()\n    };\n  }),\n      itemType = _useDragLayer.itemType,\n      isDragging = _useDragLayer.isDragging,\n      item = _useDragLayer.item,\n      initialOffset = _useDragLayer.initialOffset,\n      currentOffset = _useDragLayer.currentOffset;\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    ref: drag,\n    style: {\n      opacity: opacity\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.noteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 11\n    }\n  }, props.noteTitle), __jsx(\"div\", {\n    className: classes.noteContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 11\n    }\n  }, props.note))), __jsx(\"div\", {\n    style: layerStyles,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: getItemStyles(initialOffset, currentOffset, props.snapToGrid),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.preview,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    className: classes.previewIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__[\"BsBook\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 15\n    }\n  })), __jsx(\"span\", {\n    className: classes.previewItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 13\n    }\n  }, itemType)))));\n}\n\n_s(NoteListItem, \"xNE7dXDKBzf8mU+A0Ln1GRS9K78=\", false, function () {\n  return [useStyles, react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"], react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"]];\n});\n\n_c = NoteListItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLWxpc3QtaXRlbS50c3g/Mjg2MyJdLCJuYW1lcyI6WyJsYXllclN0eWxlcyIsInBvc2l0aW9uIiwicG9pbnRlckV2ZW50cyIsInpJbmRleCIsImxlZnQiLCJ0b3AiLCJoZWlnaHQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW4iLCJjb2xvciIsImZvbnRTaXplIiwid2lkdGgiLCJ0aXRsZSIsInBhZGRpbmciLCJib3giLCJjdXJzb3IiLCJwcmV2aWV3SWNvbiIsInZlcnRpY2FsQWxpZ24iLCJwcmV2aWV3SXRlbSIsIm5vdGVUaXRsZSIsInByZXZpZXciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsImJhY2tncm91bmRDb2xvciIsIm5vdGVDb250ZW50IiwiZW1wdHkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJlbXB0eUljb24iLCJuZXdOb3RlVGV4dCIsIk5vdGVMaXN0SXRlbSIsInByb3BzIiwiY2xhc3NlcyIsInVzZURyYWciLCJpdGVtIiwidHlwZSIsImNvbGxlY3QiLCJtb25pdG9yIiwib3BhY2l0eSIsImlzRHJhZ2dpbmciLCJkcmFnIiwidXNlRWZmZWN0IiwiZ2V0RW1wdHlJbWFnZSIsImNhcHR1cmVEcmFnZ2luZ1N0YXRlIiwiZ2V0SXRlbVN0eWxlcyIsImluaXRpYWxPZmZzZXQiLCJjdXJyZW50T2Zmc2V0IiwiaXNTbmFwVG9HcmlkIiwieCIsInkiLCJ0cmFuc2Zvcm0iLCJXZWJraXRUcmFuc2Zvcm0iLCJ1c2VEcmFnTGF5ZXIiLCJnZXRJdGVtIiwiaXRlbVR5cGUiLCJnZXRJdGVtVHlwZSIsImdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQiLCJnZXRTb3VyY2VDbGllbnRPZmZzZXQiLCJub3RlIiwic25hcFRvR3Jp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QUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBTSxhQUFTLEVBQUVrQixPQUFPLENBQUNoQixXQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDc0MsUUFBdkMsQ0FKRixDQUhGLENBREYsQ0FQRixDQURGO0FBc0JEOztHQS9FdUJ4QixZO1VBQ04vQixTLEVBRXFCa0MsaUQsRUE4Q2pDbUIsc0Q7OztLQWpEa0J0QixZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ub3RlLWxpc3QtaXRlbS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBYWUNvb3JkLCB1c2VEcmFnLCB1c2VEcmFnTGF5ZXIsIERyYWdTb3VyY2VNb25pdG9yIH0gZnJvbSAncmVhY3QtZG5kJztcbmltcG9ydCB7IGdldEVtcHR5SW1hZ2UgfSBmcm9tICdyZWFjdC1kbmQtaHRtbDUtYmFja2VuZCc7XG5pbXBvcnQgeyBCc0Jvb2sgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XG5cbmNvbnN0IGxheWVyU3R5bGVzOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICB6SW5kZXg6IDk5OTksXG4gIGxlZnQ6IDAsXG4gIHRvcDogMCxcbiAgLy8gd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG59O1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGNvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICBmb250U2l6ZTogJzIycHgnLFxuICAgIH0sXG4gICAgYm94OiB7XG4gICAgICAvLyBwb3NpdGlvbjogJ3N0aWNreScsXG4gICAgICBoZWlnaHQ6ICcxMDBweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gICAgcHJldmlld0ljb246IHsgcGFkZGluZzogJzJweCAzcHggMHB4IDNweCcsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH0sXG4gICAgcHJldmlld0l0ZW06IHsgcGFkZGluZzogJzJweCAzcHggMHB4IDNweCcgfSxcbiAgICBub3RlVGl0bGU6IHtcbiAgICAgIHBhZGRpbmc6ICcxMHB4IDIwcHggMHB4IDIwcHgnLFxuICAgICAgY29sb3I6ICdyZ2IoNjEsNjEsNjEpJyxcbiAgICB9LFxuICAgIHByZXZpZXc6IHtcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2IoMTg2LDIyMywyMjkpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICAvLyB3aWR0aDogJzE1MHB4JyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQ4LDI0OCwyNDgsMC42KScsXG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgfSxcbiAgICBub3RlQ29udGVudDoge1xuICAgICAgcGFkZGluZzogJzVweCAyMHB4JyxcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICBjb2xvcjogJ3JnYigxMTUsMTE1LDExNSknLFxuICAgIH0sXG4gICAgZW1wdHk6IHtcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgcGFkZGluZzogJzM1cHgnLFxuICAgIH0sXG4gICAgZW1wdHlJY29uOiB7XG4gICAgICBmb250U2l6ZTogJzc1cHgnLFxuICAgIH0sXG4gICAgbmV3Tm90ZVRleHQ6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgY29sb3I6ICdyZ2IoMCwxNjgsNDUpJyxcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZUxpc3RJdGVtKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IFt7IG9wYWNpdHkgfSwgZHJhZywgcHJldmlld10gPSB1c2VEcmFnKHtcbiAgICBpdGVtOiB7IHR5cGU6IHByb3BzLm5vdGVUaXRsZSB9LFxuICAgIGNvbGxlY3Q6IChtb25pdG9yOiBEcmFnU291cmNlTW9uaXRvcikgPT4gKHtcbiAgICAgIG9wYWNpdHk6IG1vbml0b3IuaXNEcmFnZ2luZygpID8gMC40IDogMSxcbiAgICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxuICAgIH0pLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByZXZpZXcoZ2V0RW1wdHlJbWFnZSgpLCB7IGNhcHR1cmVEcmFnZ2luZ1N0YXRlOiB0cnVlIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZ2V0SXRlbVN0eWxlcyA9IChcbiAgICBpbml0aWFsT2Zmc2V0OiBYWUNvb3JkIHwgbnVsbCxcbiAgICBjdXJyZW50T2Zmc2V0OiBYWUNvb3JkIHwgbnVsbCxcbiAgICBpc1NuYXBUb0dyaWQ6IGJvb2xlYW5cbiAgKSA9PiB7XG4gICAgaWYgKCFpbml0aWFsT2Zmc2V0IHx8ICFjdXJyZW50T2Zmc2V0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGxldCB7IHgsIHkgfSA9IGN1cnJlbnRPZmZzZXQ7XG5cbiAgICBpZiAoaXNTbmFwVG9HcmlkKSB7XG4gICAgICB4IC09IGluaXRpYWxPZmZzZXQueDtcbiAgICAgIHkgLT0gaW5pdGlhbE9mZnNldC55O1xuICAgICAgLy8gW3gsIHldID0gc25hcFRvR3JpZCh4LCB5KTtcbiAgICAgIHggKz0gaW5pdGlhbE9mZnNldC54O1xuICAgICAgeSArPSBpbml0aWFsT2Zmc2V0Lnk7XG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3h9cHgsICR7eX1weClgO1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2Zvcm0sXG4gICAgICBXZWJraXRUcmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHtcbiAgICBpdGVtVHlwZSxcbiAgICBpc0RyYWdnaW5nLFxuICAgIGl0ZW0sXG4gICAgaW5pdGlhbE9mZnNldCxcbiAgICBjdXJyZW50T2Zmc2V0LFxuICB9ID0gdXNlRHJhZ0xheWVyKChtb25pdG9yKSA9PiAoe1xuICAgIGl0ZW06IG1vbml0b3IuZ2V0SXRlbSgpLFxuICAgIGl0ZW1UeXBlOiBtb25pdG9yLmdldEl0ZW1UeXBlKCksXG4gICAgaW5pdGlhbE9mZnNldDogbW9uaXRvci5nZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KCksXG4gICAgY3VycmVudE9mZnNldDogbW9uaXRvci5nZXRTb3VyY2VDbGllbnRPZmZzZXQoKSxcbiAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKSxcbiAgfSkpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XG4gICAgICAgIDxkaXYgcmVmPXtkcmFnfSBzdHlsZT17eyBvcGFjaXR5IH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGVUaXRsZX0+e3Byb3BzLm5vdGVUaXRsZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RlQ29udGVudH0+e3Byb3BzLm5vdGV9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXtsYXllclN0eWxlc30+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17Z2V0SXRlbVN0eWxlcyhpbml0aWFsT2Zmc2V0LCBjdXJyZW50T2Zmc2V0LCBwcm9wcy5zbmFwVG9HcmlkKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByZXZpZXd9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnByZXZpZXdJY29ufT5cbiAgICAgICAgICAgICAgPEJzQm9vayAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnByZXZpZXdJdGVtfT57aXRlbVR5cGV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/note-list-item.tsx\n");

/***/ })

})
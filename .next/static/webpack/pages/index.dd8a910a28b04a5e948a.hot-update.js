webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note-list-item.tsx":
/*!***************************************!*\
  !*** ./components/note-list-item.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteListItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/esm/index.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note-list-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar layerStyles = {\n  position: 'fixed',\n  pointerEvents: 'none',\n  zIndex: 9999,\n  left: 0,\n  top: 0,\n  // width: '100%',\n  height: '100%'\n};\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px',\n      width: '100%'\n    },\n    title: {\n      padding: '10px',\n      fontSize: '22px'\n    },\n    box: {\n      height: '100px',\n      cursor: 'pointer',\n      display: 'flex',\n      border: '1px groove rgb(0,0,0,0)',\n      flexDirection: 'column',\n      overflow: 'hidden',\n      wordWrap: 'break-word',\n      padding: '15px'\n    },\n    boxSelected: {\n      height: '100px',\n      cursor: 'pointer',\n      display: 'flex',\n      border: '1px groove blue',\n      borderRadius: '5px',\n      backgroundColor: 'white',\n      flexDirection: 'column',\n      overflow: 'hidden',\n      wordWrap: 'break-word',\n      padding: '15px'\n    },\n    previewIcon: {\n      marginRight: '3px',\n      verticalAlign: 'middle'\n    },\n    previewItem: {\n      marginLeft: '3px'\n    },\n    preview: {\n      border: '1px solid rgb(186,223,229)',\n      borderRadius: '3px',\n      // width: '150px',\n      overflow: 'hidden',\n      fontSize: '14px',\n      backgroundColor: 'rgb(248,248,248,0.6)',\n      padding: '10px'\n    },\n    noteTitle: {\n      color: 'rgb(61,61,61)',\n      fontSize: '14px'\n    },\n    noteContent: {\n      fontSize: '12px',\n      color: 'rgb(115,115,115)',\n      overflow: 'hidden',\n      height: '35px'\n    },\n    date: {\n      fontSize: '11px',\n      color: 'rgb(115,115,115)'\n    },\n    empty: {\n      alignItems: 'center',\n      justifyContent: 'center',\n      margin: 'auto',\n      textAlign: 'center',\n      padding: '35px'\n    },\n    emptyIcon: {\n      fontSize: '75px'\n    },\n    newNoteText: {\n      cursor: 'pointer',\n      color: 'rgb(0,168,45)'\n    },\n    dot: {\n      \"float\": 'right',\n      cursor: 'pointer'\n    },\n    modal: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    paper: {\n      backgroundColor: 'rgb(222, 222, 222)',\n      boxShadow: theme.shadows[5],\n      padding: theme.spacing(1, 2, 2),\n      textAlign: 'center',\n      width: '350px',\n      borderRadius: '5px',\n      fontSize: '12px',\n      outline: 'none'\n    },\n    button: {\n      height: '30px',\n      margin: '10px 15px'\n    }\n  });\n});\nfunction NoteListItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"])({\n    item: {\n      id: props.note.id,\n      name: props.note.noteTitle,\n      type: 'note'\n    },\n    collect: function collect(monitor) {\n      return {\n        opacity: monitor.isDragging() ? 0.4 : 1,\n        isDragging: monitor.isDragging()\n      };\n    }\n  }),\n      _useDrag2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDrag, 3),\n      opacity = _useDrag2[0].opacity,\n      drag = _useDrag2[1],\n      preview = _useDrag2[2];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    preview(Object(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__[\"getEmptyImage\"])(), {\n      captureDraggingState: true\n    });\n  }, []);\n\n  var getItemStyles = function getItemStyles(initialOffset, currentOffset, isSnapToGrid) {\n    if (!initialOffset || !currentOffset) {\n      return {\n        display: 'none'\n      };\n    }\n\n    var x = currentOffset.x,\n        y = currentOffset.y;\n\n    if (isSnapToGrid) {\n      x -= initialOffset.x;\n      y -= initialOffset.y; // [x, y] = snapToGrid(x, y);\n\n      x += initialOffset.x;\n      y += initialOffset.y;\n    }\n\n    var transform = \"translate(\".concat(x, \"px, \").concat(y, \"px)\");\n    return {\n      transform: transform,\n      WebkitTransform: transform\n    };\n  };\n\n  var _useDragLayer = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"])(function (monitor) {\n    return {\n      item: monitor.getItem(),\n      itemType: monitor.getItemType(),\n      initialOffset: monitor.getInitialSourceClientOffset(),\n      currentOffset: monitor.getSourceClientOffset(),\n      isDragging: monitor.isDragging()\n    };\n  }),\n      itemType = _useDragLayer.itemType,\n      isDragging = _useDragLayer.isDragging,\n      item = _useDragLayer.item,\n      initialOffset = _useDragLayer.initialOffset,\n      currentOffset = _useDragLayer.currentOffset;\n\n  console.log(item);\n\n  var convertToString = function convertToString(string) {\n    var limit = 30;\n    var convertedString = string.replace(/(<([^>]+)>)/gi, '');\n    return \"\".concat(convertedString.substring(0, limit)).concat(convertedString.length > limit ? '...' : '');\n  };\n\n  var isSelected = props.note.id === props.currentNoteId;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: isSelected ? classes.boxSelected : classes.box,\n    onClick: function onClick() {\n      return props.setCurrentNoteId(props.note.id);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 195,\n      columnNumber: 7\n    }\n  }, props.note.isDeleted ? __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 200,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.noteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 201,\n      columnNumber: 13\n    }\n  }, props.convertTitle(props.note.noteTitle, 20)), __jsx(\"div\", {\n    className: classes.noteContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 204,\n      columnNumber: 13\n    }\n  }, convertToString(props.note.note)), __jsx(\"div\", {\n    className: classes.date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 207,\n      columnNumber: 13\n    }\n  }, props.formatDate(props.note.updatedAt))) : __jsx(\"div\", {\n    ref: drag,\n    style: {\n      opacity: opacity\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 212,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.noteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 213,\n      columnNumber: 13\n    }\n  }, props.convertTitle(props.note.noteTitle, 20)), __jsx(\"div\", {\n    className: classes.noteContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 216,\n      columnNumber: 13\n    }\n  }, convertToString(props.note.note)), __jsx(\"div\", {\n    className: classes.date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 219,\n      columnNumber: 13\n    }\n  }, props.formatDate(props.note.updatedAt)))), __jsx(\"div\", {\n    style: layerStyles,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 225,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: getItemStyles(initialOffset, currentOffset, false),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 226,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.preview,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 227,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    className: classes.previewIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 228,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__[\"BsBook\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 229,\n      columnNumber: 15\n    }\n  })), __jsx(\"span\", {\n    className: classes.previewItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 231,\n      columnNumber: 13\n    }\n  }, item === null || item === void 0 ? void 0 : item.name)))));\n}\n\n_s(NoteListItem, \"xNE7dXDKBzf8mU+A0Ln1GRS9K78=\", false, function () {\n  return [useStyles, react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"], react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"]];\n});\n\n_c = NoteListItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLWxpc3QtaXRlbS50c3g/Mjg2MyJdLCJuYW1lcyI6WyJsYXllclN0eWxlcyIsInBvc2l0aW9uIiwicG9pbnRlckV2ZW50cyIsInpJbmRleCIsImxlZnQiLCJ0b3AiLCJoZWlnaHQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW4iLCJjb2xvciIsImZvbnRTaXplIiwid2lkdGgiLCJ0aXRsZSIsInBhZGRpbmciLCJib3giLCJjdXJzb3IiLCJib3JkZXIiLCJvdmVyZmxvdyIsIndvcmRXcmFwIiwiYm94U2VsZWN0ZWQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmV2aWV3SWNvbiIsIm1hcmdpblJpZ2h0IiwidmVydGljYWxBbGlnbiIsInByZXZpZXdJdGVtIiwibWFyZ2luTGVmdCIsInByZXZpZXciLCJub3RlVGl0bGUiLCJub3RlQ29udGVudCIsImRhdGUiLCJlbXB0eSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsImVtcHR5SWNvbiIsIm5ld05vdGVUZXh0IiwiZG90IiwibW9kYWwiLCJwYXBlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJzcGFjaW5nIiwib3V0bGluZSIsImJ1dHRvbiIsIk5vdGVMaXN0SXRlbSIsInByb3BzIiwiY2xhc3NlcyIsInVzZURyYWciLCJpdGVtIiwiaWQiLCJub3RlIiwibmFtZSIsInR5cGUiLCJjb2xsZWN0IiwibW9uaXRvciIsIm9wYWNpdHkiLCJpc0RyYWdnaW5nIiwiZHJhZyIsInVzZUVmZmVjdCIsImdldEVtcHR5SW1hZ2UiLCJjYXB0dXJlRHJhZ2dpbmdTdGF0ZSIsImdldEl0ZW1TdHlsZXMiLCJpbml0aWFsT2Zmc2V0IiwiY3VycmVudE9mZnNldCIsImlzU25hcFRvR3JpZCIsIngiLCJ5IiwidHJhbnNmb3JtIiwiV2Via2l0VHJhbnNmb3JtIiwidXNlRHJhZ0xheWVyIiwiZ2V0SXRlbSIsIml0ZW1UeXBlIiwiZ2V0SXRlbVR5cGUiLCJnZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0IiwiZ2V0U291cmNlQ2xpZW50T2Zmc2V0IiwiY29uc29sZSIsImxvZyIsImNvbnZlcnRUb1N0cmluZyIsInN0cmluZyIsImxpbWl0IiwiY29udmVydGVkU3RyaW5nIiwicmVwbGFjZSIsInN1YnN0cmluZyIsImxlbmd0aCIsImlzU2VsZWN0ZWQiLCJjdXJyZW50Tm90ZUlkIiwic2V0Q3VycmVudE5vdGVJZCIsImlzRGVsZXRlZCIsImNvbnZlcnRUaXRsZSIsImZvcm1hdERhdGUiLCJ1cGRhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxXQUFnQyxHQUFHO0FBQ3ZDQyxVQUFRLEVBQUUsT0FENkI7QUFFdkNDLGVBQWEsRUFBRSxNQUZ3QjtBQUd2Q0MsUUFBTSxFQUFFLElBSCtCO0FBSXZDQyxNQUFJLEVBQUUsQ0FKaUM7QUFLdkNDLEtBQUcsRUFBRSxDQUxrQztBQU12QztBQUNBQyxRQUFNLEVBQUU7QUFQK0IsQ0FBekM7QUFVQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsTUFETDtBQUVKQyxtQkFBYSxFQUFFLFFBRlg7QUFHSlAsWUFBTSxFQUFFLE9BSEo7QUFJSlEsWUFBTSxFQUFFLE1BSko7QUFLSkMsV0FBSyxFQUFFLGVBTEg7QUFNSkMsY0FBUSxFQUFFLE1BTk47QUFPSkMsV0FBSyxFQUFFO0FBUEgsS0FESztBQVVYQyxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEgsY0FBUSxFQUFFO0FBRkwsS0FWSTtBQWNYSSxPQUFHLEVBQUU7QUFDSGQsWUFBTSxFQUFFLE9BREw7QUFFSGUs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QUFBQSxLQUF1Q3dCLElBQXZDLGFBQXVDQSxJQUF2Qyx1QkFBdUNBLElBQUksQ0FBRUcsSUFBN0MsQ0FKRixDQURGLENBREYsQ0EvQkYsQ0FERjtBQTRDRDs7R0EvR3VCUCxZO1VBQ041QyxTLEVBRXFCK0MsaUQsRUE4Q2pDc0Isc0Q7OztLQWpEa0J6QixZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ub3RlLWxpc3QtaXRlbS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgWFlDb29yZCwgdXNlRHJhZywgdXNlRHJhZ0xheWVyLCBEcmFnU291cmNlTW9uaXRvciB9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgeyBnZXRFbXB0eUltYWdlIH0gZnJvbSAncmVhY3QtZG5kLWh0bWw1LWJhY2tlbmQnO1xuaW1wb3J0IHsgQnNCb29rIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xuaW1wb3J0IElOb3RlIGZyb20gJy4vaW50ZXJmYWNlcy9pbm90ZSc7XG5pbXBvcnQgSU5vdGVQcm9wcyBmcm9tICcuL2ludGVyZmFjZXMvaW5vdGVwcm9wcyc7XG5cbmNvbnN0IGxheWVyU3R5bGVzOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICB6SW5kZXg6IDk5OTksXG4gIGxlZnQ6IDAsXG4gIHRvcDogMCxcbiAgLy8gd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG59O1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGNvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICBmb250U2l6ZTogJzIycHgnLFxuICAgIH0sXG4gICAgYm94OiB7XG4gICAgICBoZWlnaHQ6ICcxMDBweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGJvcmRlcjogJzFweCBncm9vdmUgcmdiKDAsMCwwLDApJyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgd29yZFdyYXA6ICdicmVhay13b3JkJyxcbiAgICAgIHBhZGRpbmc6ICcxNXB4JyxcbiAgICB9LFxuICAgIGJveFNlbGVjdGVkOiB7XG4gICAgICBoZWlnaHQ6ICcxMDBweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGJvcmRlcjogJzFweCBncm9vdmUgYmx1ZScsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB3b3JkV3JhcDogJ2JyZWFrLXdvcmQnLFxuICAgICAgcGFkZGluZzogJzE1cHgnLFxuICAgIH0sXG4gICAgcHJldmlld0ljb246IHsgbWFyZ2luUmlnaHQ6ICczcHgnLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9LFxuICAgIHByZXZpZXdJdGVtOiB7IG1hcmdpbkxlZnQ6ICczcHgnIH0sXG4gICAgcHJldmlldzoge1xuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYigxODYsMjIzLDIyOSknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgIC8vIHdpZHRoOiAnMTUwcHgnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDgsMjQ4LDI0OCwwLjYpJyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICB9LFxuICAgIG5vdGVUaXRsZToge1xuICAgICAgY29sb3I6ICdyZ2IoNjEsNjEsNjEpJyxcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgfSxcbiAgICBub3RlQ29udGVudDoge1xuICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgIGNvbG9yOiAncmdiKDExNSwxMTUsMTE1KScsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBoZWlnaHQ6ICczNXB4JyxcbiAgICB9LFxuICAgIGRhdGU6IHtcbiAgICAgIGZvbnRTaXplOiAnMTFweCcsXG4gICAgICBjb2xvcjogJ3JnYigxMTUsMTE1LDExNSknLFxuICAgIH0sXG4gICAgZW1wdHk6IHtcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgcGFkZGluZzogJzM1cHgnLFxuICAgIH0sXG4gICAgZW1wdHlJY29uOiB7XG4gICAgICBmb250U2l6ZTogJzc1cHgnLFxuICAgIH0sXG4gICAgbmV3Tm90ZVRleHQ6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgY29sb3I6ICdyZ2IoMCwxNjgsNDUpJyxcbiAgICB9LFxuICAgIGRvdDoge1xuICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIHBhcGVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjIyLCAyMjIsIDIyMiknLFxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAyLCAyKSxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogJzM1MHB4JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICAgIG1hcmdpbjogJzEwcHggMTVweCcsXG4gICAgfSxcbiAgfSlcbik7XG5cbmludGVyZmFjZSBOb3RlTGlzdFByb3BzIGV4dGVuZHMgSU5vdGVQcm9wcyB7XG4gIG5vdGU6IElOb3RlO1xuICBjb252ZXJ0VGl0bGU6ICh0aXRsZTogc3RyaW5nLCBsZW5ndGg6IG51bWJlcikgPT4gc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlTGlzdEl0ZW0ocHJvcHM6IE5vdGVMaXN0UHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IFt7IG9wYWNpdHkgfSwgZHJhZywgcHJldmlld10gPSB1c2VEcmFnKHtcbiAgICBpdGVtOiB7IGlkOiBwcm9wcy5ub3RlLmlkLCBuYW1lOiBwcm9wcy5ub3RlLm5vdGVUaXRsZSwgdHlwZTogJ25vdGUnIH0sXG4gICAgY29sbGVjdDogKG1vbml0b3I6IERyYWdTb3VyY2VNb25pdG9yKSA9PiAoe1xuICAgICAgb3BhY2l0eTogbW9uaXRvci5pc0RyYWdnaW5nKCkgPyAwLjQgOiAxLFxuICAgICAgaXNEcmFnZ2luZzogbW9uaXRvci5pc0RyYWdnaW5nKCksXG4gICAgfSksXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJldmlldyhnZXRFbXB0eUltYWdlKCksIHsgY2FwdHVyZURyYWdnaW5nU3RhdGU6IHRydWUgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRJdGVtU3R5bGVzID0gKFxuICAgIGluaXRpYWxPZmZzZXQ6IFhZQ29vcmQgfCBudWxsLFxuICAgIGN1cnJlbnRPZmZzZXQ6IFhZQ29vcmQgfCBudWxsLFxuICAgIGlzU25hcFRvR3JpZDogYm9vbGVhblxuICApID0+IHtcbiAgICBpZiAoIWluaXRpYWxPZmZzZXQgfHwgIWN1cnJlbnRPZmZzZXQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgbGV0IHsgeCwgeSB9ID0gY3VycmVudE9mZnNldDtcblxuICAgIGlmIChpc1NuYXBUb0dyaWQpIHtcbiAgICAgIHggLT0gaW5pdGlhbE9mZnNldC54O1xuICAgICAgeSAtPSBpbml0aWFsT2Zmc2V0Lnk7XG4gICAgICAvLyBbeCwgeV0gPSBzbmFwVG9HcmlkKHgsIHkpO1xuICAgICAgeCArPSBpbml0aWFsT2Zmc2V0Lng7XG4gICAgICB5ICs9IGluaXRpYWxPZmZzZXQueTtcbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zZm9ybSxcbiAgICAgIFdlYmtpdFRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3Qge1xuICAgIGl0ZW1UeXBlLFxuICAgIGlzRHJhZ2dpbmcsXG4gICAgaXRlbSxcbiAgICBpbml0aWFsT2Zmc2V0LFxuICAgIGN1cnJlbnRPZmZzZXQsXG4gIH0gPSB1c2VEcmFnTGF5ZXIoKG1vbml0b3IpID0+ICh7XG4gICAgaXRlbTogbW9uaXRvci5nZXRJdGVtKCksXG4gICAgaXRlbVR5cGU6IG1vbml0b3IuZ2V0SXRlbVR5cGUoKSxcbiAgICBpbml0aWFsT2Zmc2V0OiBtb25pdG9yLmdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQoKSxcbiAgICBjdXJyZW50T2Zmc2V0OiBtb25pdG9yLmdldFNvdXJjZUNsaWVudE9mZnNldCgpLFxuICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxuICB9KSk7XG4gIGNvbnNvbGUubG9nKGl0ZW0pO1xuXG4gIGNvbnN0IGNvbnZlcnRUb1N0cmluZyA9IChzdHJpbmc6IGFueSkgPT4ge1xuICAgIGNvbnN0IGxpbWl0ID0gMzA7XG4gICAgY29uc3QgY29udmVydGVkU3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyk7XG4gICAgcmV0dXJuIGAke2NvbnZlcnRlZFN0cmluZy5zdWJzdHJpbmcoMCwgbGltaXQpfSR7XG4gICAgICBjb252ZXJ0ZWRTdHJpbmcubGVuZ3RoID4gbGltaXQgPyAnLi4uJyA6ICcnXG4gICAgfWA7XG4gIH07XG5cbiAgY29uc3QgaXNTZWxlY3RlZCA9IHByb3BzLm5vdGUuaWQgPT09IHByb3BzLmN1cnJlbnROb3RlSWQ7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtpc1NlbGVjdGVkID8gY2xhc3Nlcy5ib3hTZWxlY3RlZCA6IGNsYXNzZXMuYm94fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRDdXJyZW50Tm90ZUlkKHByb3BzLm5vdGUuaWQpfVxuICAgICAgPlxuICAgICAgICB7cHJvcHMubm90ZS5pc0RlbGV0ZWQgPyAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGVUaXRsZX0+XG4gICAgICAgICAgICAgIHtwcm9wcy5jb252ZXJ0VGl0bGUocHJvcHMubm90ZS5ub3RlVGl0bGUsIDIwKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZUNvbnRlbnR9PlxuICAgICAgICAgICAgICB7Y29udmVydFRvU3RyaW5nKHByb3BzLm5vdGUubm90ZSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxuICAgICAgICAgICAgICB7cHJvcHMuZm9ybWF0RGF0ZShwcm9wcy5ub3RlLnVwZGF0ZWRBdCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IHJlZj17ZHJhZ30gc3R5bGU9e3sgb3BhY2l0eSB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGVUaXRsZX0+XG4gICAgICAgICAgICAgIHtwcm9wcy5jb252ZXJ0VGl0bGUocHJvcHMubm90ZS5ub3RlVGl0bGUsIDIwKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZUNvbnRlbnR9PlxuICAgICAgICAgICAgICB7Y29udmVydFRvU3RyaW5nKHByb3BzLm5vdGUubm90ZSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxuICAgICAgICAgICAgICB7cHJvcHMuZm9ybWF0RGF0ZShwcm9wcy5ub3RlLnVwZGF0ZWRBdCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17bGF5ZXJTdHlsZXN9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtnZXRJdGVtU3R5bGVzKGluaXRpYWxPZmZzZXQsIGN1cnJlbnRPZmZzZXQsIGZhbHNlKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucHJldmlld30+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucHJldmlld0ljb259PlxuICAgICAgICAgICAgICA8QnNCb29rIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucHJldmlld0l0ZW19PntpdGVtPy5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/note-list-item.tsx\n");

/***/ })

})
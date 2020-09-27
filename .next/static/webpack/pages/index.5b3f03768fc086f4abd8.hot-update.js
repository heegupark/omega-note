webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note-list-item.tsx":
/*!***************************************!*\
  !*** ./components/note-list-item.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteListItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/esm/index.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note-list-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar layerStyles = {\n  position: 'fixed',\n  pointerEvents: 'none',\n  zIndex: 9999,\n  left: 0,\n  top: 0,\n  // width: '100%',\n  height: '100%'\n};\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px',\n      width: '100%'\n    },\n    title: {\n      padding: '10px',\n      fontSize: '22px'\n    },\n    box: {\n      height: '100px',\n      cursor: 'pointer',\n      display: 'flex',\n      border: '1px groove rgb(0,0,0,0)',\n      flexDirection: 'column',\n      overflow: 'hidden',\n      wordWrap: 'break-word',\n      padding: '15px'\n    },\n    boxSelected: {\n      height: '100px',\n      cursor: 'pointer',\n      display: 'flex',\n      border: '1px groove blue',\n      borderRadius: '5px',\n      backgroundColor: 'white',\n      flexDirection: 'column',\n      overflow: 'hidden',\n      wordWrap: 'break-word',\n      padding: '15px'\n    },\n    previewIcon: {\n      marginRight: '3px',\n      verticalAlign: 'middle'\n    },\n    previewItem: {\n      marginLeft: '3px'\n    },\n    preview: {\n      border: '1px solid rgb(186,223,229)',\n      borderRadius: '3px',\n      // width: '150px',\n      overflow: 'hidden',\n      fontSize: '14px',\n      backgroundColor: 'rgb(248,248,248,0.6)',\n      padding: '10px'\n    },\n    noteTitle: {\n      color: 'rgb(61,61,61)',\n      fontSize: '14px'\n    },\n    noteContent: {\n      fontSize: '12px',\n      color: 'rgb(115,115,115)',\n      overflow: 'hidden',\n      height: '35px'\n    },\n    date: {\n      fontSize: '11px',\n      color: 'rgb(115,115,115)'\n    },\n    empty: {\n      alignItems: 'center',\n      justifyContent: 'center',\n      margin: 'auto',\n      textAlign: 'center',\n      padding: '35px'\n    },\n    emptyIcon: {\n      fontSize: '75px'\n    },\n    newNoteText: {\n      cursor: 'pointer',\n      color: 'rgb(0,168,45)'\n    },\n    dot: {\n      \"float\": 'right',\n      cursor: 'pointer'\n    },\n    modal: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    paper: {\n      backgroundColor: 'rgb(222, 222, 222)',\n      boxShadow: theme.shadows[5],\n      padding: theme.spacing(1, 2, 2),\n      textAlign: 'center',\n      width: '350px',\n      borderRadius: '5px',\n      fontSize: '12px',\n      outline: 'none'\n    },\n    button: {\n      height: '30px',\n      margin: '10px 15px'\n    }\n  });\n});\nfunction NoteListItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"])({\n    item: {\n      name: props.note.noteTitle,\n      type: 'note'\n    },\n    collect: function collect(monitor) {\n      return {\n        opacity: monitor.isDragging() ? 0.4 : 1,\n        isDragging: monitor.isDragging()\n      };\n    }\n  }),\n      _useDrag2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDrag, 3),\n      opacity = _useDrag2[0].opacity,\n      drag = _useDrag2[1],\n      preview = _useDrag2[2];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    preview(Object(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__[\"getEmptyImage\"])(), {\n      captureDraggingState: true\n    });\n  }, []);\n\n  var getItemStyles = function getItemStyles(initialOffset, currentOffset, isSnapToGrid) {\n    if (!initialOffset || !currentOffset) {\n      return {\n        display: 'none'\n      };\n    }\n\n    var x = currentOffset.x,\n        y = currentOffset.y;\n\n    if (isSnapToGrid) {\n      x -= initialOffset.x;\n      y -= initialOffset.y; // [x, y] = snapToGrid(x, y);\n\n      x += initialOffset.x;\n      y += initialOffset.y;\n    }\n\n    var transform = \"translate(\".concat(x, \"px, \").concat(y, \"px)\");\n    return {\n      transform: transform,\n      WebkitTransform: transform\n    };\n  };\n\n  var _useDragLayer = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"])(function (monitor) {\n    return {\n      item: monitor.getItem(),\n      itemType: monitor.getItemType(),\n      itemName: monitor.getItemType(),\n      initialOffset: monitor.getInitialSourceClientOffset(),\n      currentOffset: monitor.getSourceClientOffset(),\n      isDragging: monitor.isDragging()\n    };\n  }),\n      itemType = _useDragLayer.itemType,\n      isDragging = _useDragLayer.isDragging,\n      item = _useDragLayer.item,\n      initialOffset = _useDragLayer.initialOffset,\n      currentOffset = _useDragLayer.currentOffset;\n\n  var convertToString = function convertToString(string) {\n    var limit = 30;\n    var convertedString = string.replace(/(<([^>]+)>)/gi, '');\n    return \"\".concat(convertedString.substring(0, limit)).concat(convertedString.length > limit ? '...' : '');\n  };\n\n  var isSelected = props.note.id === props.currentNoteId;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: isSelected ? classes.boxSelected : classes.box,\n    onClick: function onClick() {\n      return props.setCurrentNoteId(props.note.id);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 195,\n      columnNumber: 7\n    }\n  }, props.note.isDeleted ? __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 200,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.noteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 201,\n      columnNumber: 13\n    }\n  }, props.convertTitle(props.note.noteTitle, 20)), __jsx(\"div\", {\n    className: classes.noteContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 204,\n      columnNumber: 13\n    }\n  }, convertToString(props.note.note)), __jsx(\"div\", {\n    className: classes.date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 207,\n      columnNumber: 13\n    }\n  }, props.formatDate(props.note.updatedAt))) : __jsx(\"div\", {\n    ref: drag,\n    style: {\n      opacity: opacity\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 212,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.noteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 213,\n      columnNumber: 13\n    }\n  }, props.convertTitle(props.note.noteTitle, 20)), __jsx(\"div\", {\n    className: classes.noteContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 216,\n      columnNumber: 13\n    }\n  }, convertToString(props.note.note)), __jsx(\"div\", {\n    className: classes.date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 219,\n      columnNumber: 13\n    }\n  }, props.formatDate(props.note.updatedAt)))), __jsx(\"div\", {\n    style: layerStyles,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 225,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: getItemStyles(initialOffset, currentOffset, false),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 226,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.preview,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 227,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    className: classes.previewIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 228,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__[\"BsBook\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 229,\n      columnNumber: 15\n    }\n  })), __jsx(\"span\", {\n    className: classes.previewItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 231,\n      columnNumber: 13\n    }\n  }, itemType)))));\n}\n\n_s(NoteListItem, \"xNE7dXDKBzf8mU+A0Ln1GRS9K78=\", false, function () {\n  return [useStyles, react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"], react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"]];\n});\n\n_c = NoteListItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLWxpc3QtaXRlbS50c3g/Mjg2MyJdLCJuYW1lcyI6WyJsYXllclN0eWxlcyIsInBvc2l0aW9uIiwicG9pbnRlckV2ZW50cyIsInpJbmRleCIsImxlZnQiLCJ0b3AiLCJoZWlnaHQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW4iLCJjb2xvciIsImZvbnRTaXplIiwid2lkdGgiLCJ0aXRsZSIsInBhZGRpbmciLCJib3giLCJjdXJzb3IiLCJib3JkZXIiLCJvdmVyZmxvdyIsIndvcmRXcmFwIiwiYm94U2VsZWN0ZWQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmV2aWV3SWNvbiIsIm1hcmdpblJpZ2h0IiwidmVydGljYWxBbGlnbiIsInByZXZpZXdJdGVtIiwibWFyZ2luTGVmdCIsInByZXZpZXciLCJub3RlVGl0bGUiLCJub3RlQ29udGVudCIsImRhdGUiLCJlbXB0eSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsImVtcHR5SWNvbiIsIm5ld05vdGVUZXh0IiwiZG90IiwibW9kYWwiLCJwYXBlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJzcGFjaW5nIiwib3V0bGluZSIsImJ1dHRvbiIsIk5vdGVMaXN0SXRlbSIsInByb3BzIiwiY2xhc3NlcyIsInVzZURyYWciLCJpdGVtIiwibmFtZSIsIm5vdGUiLCJ0eXBlIiwiY29sbGVjdCIsIm1vbml0b3IiLCJvcGFjaXR5IiwiaXNEcmFnZ2luZyIsImRyYWciLCJ1c2VFZmZlY3QiLCJnZXRFbXB0eUltYWdlIiwiY2FwdHVyZURyYWdnaW5nU3RhdGUiLCJnZXRJdGVtU3R5bGVzIiwiaW5pdGlhbE9mZnNldCIsImN1cnJlbnRPZmZzZXQiLCJpc1NuYXBUb0dyaWQiLCJ4IiwieSIsInRyYW5zZm9ybSIsIldlYmtpdFRyYW5zZm9ybSIsInVzZURyYWdMYXllciIsImdldEl0ZW0iLCJpdGVtVHlwZSIsImdldEl0ZW1UeXBlIiwiaXRlbU5hbWUiLCJnZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0IiwiZ2V0U291cmNlQ2xpZW50T2Zmc2V0IiwiY29udmVydFRvU3RyaW5nIiwic3RyaW5nIiwibGltaXQiLCJjb252ZXJ0ZWRTdHJpbmciLCJyZXBsYWNlIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiaXNTZWxlY3RlZCIsImlkIiwiY3VycmVudE5vdGVJZCIsInNldEN1cnJlbnROb3RlSWQiLCJpc0RlbGV0ZWQiLCJjb252ZXJ0VGl0bGUiLCJmb3JtYXREYXRlIiwidXBkYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsV0FBZ0MsR0FBRztBQUN2Q0MsVUFBUSxFQUFFLE9BRDZCO0FBRXZDQyxlQUFhLEVBQUUsTUFGd0I7QUFHdkNDLFFBQU0sRUFBRSxJQUgrQjtBQUl2Q0MsTUFBSSxFQUFFLENBSmlDO0FBS3ZDQyxLQUFHLEVBQUUsQ0FMa0M7QUFNdkM7QUFDQUMsUUFBTSxFQUFFO0FBUCtCLENBQXpDO0FBVUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE1BREw7QUFFSkMsbUJBQWEsRUFBRSxRQUZYO0FBR0pQLFlBQU0sRUFBRSxPQUhKO0FBSUpRLFlBQU0sRUFBRSxNQUpKO0FBS0pDLFdBQUssRUFBRSxlQUxIO0FBTUpDLGNBQVEsRUFBRSxNQU5OO0FBT0pDLFdBQUssRUFBRTtBQVBILEtBREs7QUFVWEMsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRSxNQURKO0FBRUxILGNBQVEsRUFBRTtBQUZMLEtBVkk7QUFjWEksT0FBRyxFQUFFO0FBQ0hkLFlBQU0sRUFBRSxPQURMO0FBRUhlLFlBQU0s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QURGO0FBNENEOztHQS9HdUIxQixZO1VBQ041QyxTLEVBRXFCK0MsaUQsRUE4Q2pDcUIsc0Q7OztLQWpEa0J4QixZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ub3RlLWxpc3QtaXRlbS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgWFlDb29yZCwgdXNlRHJhZywgdXNlRHJhZ0xheWVyLCBEcmFnU291cmNlTW9uaXRvciB9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgeyBnZXRFbXB0eUltYWdlIH0gZnJvbSAncmVhY3QtZG5kLWh0bWw1LWJhY2tlbmQnO1xuaW1wb3J0IHsgQnNCb29rIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xuaW1wb3J0IElOb3RlIGZyb20gJy4vaW50ZXJmYWNlcy9pbm90ZSc7XG5pbXBvcnQgSU5vdGVQcm9wcyBmcm9tICcuL2ludGVyZmFjZXMvaW5vdGVwcm9wcyc7XG5cbmNvbnN0IGxheWVyU3R5bGVzOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICB6SW5kZXg6IDk5OTksXG4gIGxlZnQ6IDAsXG4gIHRvcDogMCxcbiAgLy8gd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG59O1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGNvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICBmb250U2l6ZTogJzIycHgnLFxuICAgIH0sXG4gICAgYm94OiB7XG4gICAgICBoZWlnaHQ6ICcxMDBweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGJvcmRlcjogJzFweCBncm9vdmUgcmdiKDAsMCwwLDApJyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgd29yZFdyYXA6ICdicmVhay13b3JkJyxcbiAgICAgIHBhZGRpbmc6ICcxNXB4JyxcbiAgICB9LFxuICAgIGJveFNlbGVjdGVkOiB7XG4gICAgICBoZWlnaHQ6ICcxMDBweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGJvcmRlcjogJzFweCBncm9vdmUgYmx1ZScsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB3b3JkV3JhcDogJ2JyZWFrLXdvcmQnLFxuICAgICAgcGFkZGluZzogJzE1cHgnLFxuICAgIH0sXG4gICAgcHJldmlld0ljb246IHsgbWFyZ2luUmlnaHQ6ICczcHgnLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9LFxuICAgIHByZXZpZXdJdGVtOiB7IG1hcmdpbkxlZnQ6ICczcHgnIH0sXG4gICAgcHJldmlldzoge1xuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYigxODYsMjIzLDIyOSknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgIC8vIHdpZHRoOiAnMTUwcHgnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDgsMjQ4LDI0OCwwLjYpJyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICB9LFxuICAgIG5vdGVUaXRsZToge1xuICAgICAgY29sb3I6ICdyZ2IoNjEsNjEsNjEpJyxcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgfSxcbiAgICBub3RlQ29udGVudDoge1xuICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgIGNvbG9yOiAncmdiKDExNSwxMTUsMTE1KScsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBoZWlnaHQ6ICczNXB4JyxcbiAgICB9LFxuICAgIGRhdGU6IHtcbiAgICAgIGZvbnRTaXplOiAnMTFweCcsXG4gICAgICBjb2xvcjogJ3JnYigxMTUsMTE1LDExNSknLFxuICAgIH0sXG4gICAgZW1wdHk6IHtcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgcGFkZGluZzogJzM1cHgnLFxuICAgIH0sXG4gICAgZW1wdHlJY29uOiB7XG4gICAgICBmb250U2l6ZTogJzc1cHgnLFxuICAgIH0sXG4gICAgbmV3Tm90ZVRleHQ6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgY29sb3I6ICdyZ2IoMCwxNjgsNDUpJyxcbiAgICB9LFxuICAgIGRvdDoge1xuICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIHBhcGVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjIyLCAyMjIsIDIyMiknLFxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAyLCAyKSxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogJzM1MHB4JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICAgIG1hcmdpbjogJzEwcHggMTVweCcsXG4gICAgfSxcbiAgfSlcbik7XG5cbmludGVyZmFjZSBOb3RlTGlzdFByb3BzIGV4dGVuZHMgSU5vdGVQcm9wcyB7XG4gIG5vdGU6IElOb3RlO1xuICBjb252ZXJ0VGl0bGU6ICh0aXRsZTogc3RyaW5nLCBsZW5ndGg6IG51bWJlcikgPT4gc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlTGlzdEl0ZW0ocHJvcHM6IE5vdGVMaXN0UHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IFt7IG9wYWNpdHkgfSwgZHJhZywgcHJldmlld10gPSB1c2VEcmFnKHtcbiAgICBpdGVtOiB7IG5hbWU6IHByb3BzLm5vdGUubm90ZVRpdGxlLCB0eXBlOiAnbm90ZScgfSxcbiAgICBjb2xsZWN0OiAobW9uaXRvcjogRHJhZ1NvdXJjZU1vbml0b3IpID0+ICh7XG4gICAgICBvcGFjaXR5OiBtb25pdG9yLmlzRHJhZ2dpbmcoKSA/IDAuNCA6IDEsXG4gICAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKSxcbiAgICB9KSxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcmV2aWV3KGdldEVtcHR5SW1hZ2UoKSwgeyBjYXB0dXJlRHJhZ2dpbmdTdGF0ZTogdHJ1ZSB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldEl0ZW1TdHlsZXMgPSAoXG4gICAgaW5pdGlhbE9mZnNldDogWFlDb29yZCB8IG51bGwsXG4gICAgY3VycmVudE9mZnNldDogWFlDb29yZCB8IG51bGwsXG4gICAgaXNTbmFwVG9HcmlkOiBib29sZWFuXG4gICkgPT4ge1xuICAgIGlmICghaW5pdGlhbE9mZnNldCB8fCAhY3VycmVudE9mZnNldCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBsZXQgeyB4LCB5IH0gPSBjdXJyZW50T2Zmc2V0O1xuXG4gICAgaWYgKGlzU25hcFRvR3JpZCkge1xuICAgICAgeCAtPSBpbml0aWFsT2Zmc2V0Lng7XG4gICAgICB5IC09IGluaXRpYWxPZmZzZXQueTtcbiAgICAgIC8vIFt4LCB5XSA9IHNuYXBUb0dyaWQoeCwgeSk7XG4gICAgICB4ICs9IGluaXRpYWxPZmZzZXQueDtcbiAgICAgIHkgKz0gaW5pdGlhbE9mZnNldC55O1xuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4fXB4LCAke3l9cHgpYDtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNmb3JtLFxuICAgICAgV2Via2l0VHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCB7XG4gICAgaXRlbVR5cGUsXG4gICAgaXNEcmFnZ2luZyxcbiAgICBpdGVtLFxuICAgIGluaXRpYWxPZmZzZXQsXG4gICAgY3VycmVudE9mZnNldCxcbiAgfSA9IHVzZURyYWdMYXllcigobW9uaXRvcikgPT4gKHtcbiAgICBpdGVtOiBtb25pdG9yLmdldEl0ZW0oKSxcbiAgICBpdGVtVHlwZTogbW9uaXRvci5nZXRJdGVtVHlwZSgpLFxuICAgIGl0ZW1OYW1lOiBtb25pdG9yLmdldEl0ZW1UeXBlKCksXG4gICAgaW5pdGlhbE9mZnNldDogbW9uaXRvci5nZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KCksXG4gICAgY3VycmVudE9mZnNldDogbW9uaXRvci5nZXRTb3VyY2VDbGllbnRPZmZzZXQoKSxcbiAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKSxcbiAgfSkpO1xuXG4gIGNvbnN0IGNvbnZlcnRUb1N0cmluZyA9IChzdHJpbmc6IGFueSkgPT4ge1xuICAgIGNvbnN0IGxpbWl0ID0gMzA7XG4gICAgY29uc3QgY29udmVydGVkU3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyk7XG4gICAgcmV0dXJuIGAke2NvbnZlcnRlZFN0cmluZy5zdWJzdHJpbmcoMCwgbGltaXQpfSR7XG4gICAgICBjb252ZXJ0ZWRTdHJpbmcubGVuZ3RoID4gbGltaXQgPyAnLi4uJyA6ICcnXG4gICAgfWA7XG4gIH07XG5cbiAgY29uc3QgaXNTZWxlY3RlZCA9IHByb3BzLm5vdGUuaWQgPT09IHByb3BzLmN1cnJlbnROb3RlSWQ7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtpc1NlbGVjdGVkID8gY2xhc3Nlcy5ib3hTZWxlY3RlZCA6IGNsYXNzZXMuYm94fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRDdXJyZW50Tm90ZUlkKHByb3BzLm5vdGUuaWQpfVxuICAgICAgPlxuICAgICAgICB7cHJvcHMubm90ZS5pc0RlbGV0ZWQgPyAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGVUaXRsZX0+XG4gICAgICAgICAgICAgIHtwcm9wcy5jb252ZXJ0VGl0bGUocHJvcHMubm90ZS5ub3RlVGl0bGUsIDIwKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZUNvbnRlbnR9PlxuICAgICAgICAgICAgICB7Y29udmVydFRvU3RyaW5nKHByb3BzLm5vdGUubm90ZSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxuICAgICAgICAgICAgICB7cHJvcHMuZm9ybWF0RGF0ZShwcm9wcy5ub3RlLnVwZGF0ZWRBdCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IHJlZj17ZHJhZ30gc3R5bGU9e3sgb3BhY2l0eSB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGVUaXRsZX0+XG4gICAgICAgICAgICAgIHtwcm9wcy5jb252ZXJ0VGl0bGUocHJvcHMubm90ZS5ub3RlVGl0bGUsIDIwKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZUNvbnRlbnR9PlxuICAgICAgICAgICAgICB7Y29udmVydFRvU3RyaW5nKHByb3BzLm5vdGUubm90ZSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxuICAgICAgICAgICAgICB7cHJvcHMuZm9ybWF0RGF0ZShwcm9wcy5ub3RlLnVwZGF0ZWRBdCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17bGF5ZXJTdHlsZXN9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtnZXRJdGVtU3R5bGVzKGluaXRpYWxPZmZzZXQsIGN1cnJlbnRPZmZzZXQsIGZhbHNlKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucHJldmlld30+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucHJldmlld0ljb259PlxuICAgICAgICAgICAgICA8QnNCb29rIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucHJldmlld0l0ZW19PntpdGVtVHlwZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/note-list-item.tsx\n");

/***/ })

})
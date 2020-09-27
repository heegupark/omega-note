webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note-list-item.tsx":
/*!***************************************!*\
  !*** ./components/note-list-item.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteListItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/esm/index.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note-list-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar layerStyles = {\n  position: 'fixed',\n  pointerEvents: 'none',\n  zIndex: 9999,\n  left: 0,\n  top: 0,\n  // width: '100%',\n  height: '100%'\n};\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px',\n      width: '100%'\n    },\n    title: {\n      padding: '10px',\n      fontSize: '22px'\n    },\n    box: {\n      height: '100px',\n      cursor: 'pointer',\n      display: 'flex',\n      border: '1px groove rgb(0,0,0,0)',\n      flexDirection: 'column',\n      overflow: 'hidden',\n      wordWrap: 'break-word',\n      padding: '15px'\n    },\n    boxSelected: {\n      height: '100px',\n      cursor: 'pointer',\n      display: 'flex',\n      border: '1px groove blue',\n      borderRadius: '5px',\n      backgroundColor: 'white',\n      flexDirection: 'column',\n      overflow: 'hidden',\n      wordWrap: 'break-word',\n      padding: '15px'\n    },\n    previewIcon: {\n      marginRight: '3px',\n      verticalAlign: 'middle'\n    },\n    previewItem: {\n      marginLeft: '3px'\n    },\n    preview: {\n      border: '1px solid rgb(186,223,229)',\n      borderRadius: '3px',\n      // width: '150px',\n      overflow: 'hidden',\n      fontSize: '14px',\n      backgroundColor: 'rgb(248,248,248,0.6)',\n      padding: '10px'\n    },\n    noteTitle: {\n      color: 'rgb(61,61,61)',\n      fontSize: '14px'\n    },\n    noteContent: {\n      fontSize: '12px',\n      color: 'rgb(115,115,115)',\n      overflow: 'hidden',\n      height: '35px'\n    },\n    date: {\n      fontSize: '11px',\n      color: 'rgb(115,115,115)'\n    },\n    empty: {\n      alignItems: 'center',\n      justifyContent: 'center',\n      margin: 'auto',\n      textAlign: 'center',\n      padding: '35px'\n    },\n    emptyIcon: {\n      fontSize: '75px'\n    },\n    newNoteText: {\n      cursor: 'pointer',\n      color: 'rgb(0,168,45)'\n    },\n    dot: {\n      \"float\": 'right',\n      cursor: 'pointer'\n    },\n    modal: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    paper: {\n      backgroundColor: 'rgb(222, 222, 222)',\n      boxShadow: theme.shadows[5],\n      padding: theme.spacing(1, 2, 2),\n      textAlign: 'center',\n      width: '350px',\n      borderRadius: '5px',\n      fontSize: '12px',\n      outline: 'none'\n    },\n    button: {\n      height: '30px',\n      margin: '10px 15px'\n    }\n  });\n});\nfunction NoteListItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"])({\n    item: {\n      name: props.note.noteTitle,\n      type: 'note'\n    },\n    collect: function collect(monitor) {\n      return {\n        opacity: monitor.isDragging() ? 0.4 : 1,\n        isDragging: monitor.isDragging()\n      };\n    }\n  }),\n      _useDrag2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDrag, 3),\n      opacity = _useDrag2[0].opacity,\n      drag = _useDrag2[1],\n      preview = _useDrag2[2];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    preview(Object(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__[\"getEmptyImage\"])(), {\n      captureDraggingState: true\n    });\n  }, []);\n\n  var getItemStyles = function getItemStyles(initialOffset, currentOffset, isSnapToGrid) {\n    if (!initialOffset || !currentOffset) {\n      return {\n        display: 'none'\n      };\n    }\n\n    var x = currentOffset.x,\n        y = currentOffset.y;\n\n    if (isSnapToGrid) {\n      x -= initialOffset.x;\n      y -= initialOffset.y; // [x, y] = snapToGrid(x, y);\n\n      x += initialOffset.x;\n      y += initialOffset.y;\n    }\n\n    var transform = \"translate(\".concat(x, \"px, \").concat(y, \"px)\");\n    return {\n      transform: transform,\n      WebkitTransform: transform\n    };\n  };\n\n  var _useDragLayer = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"])(function (monitor) {\n    return {\n      item: monitor.getItem(),\n      itemType: monitor.getItemType(),\n      initialOffset: monitor.getInitialSourceClientOffset(),\n      currentOffset: monitor.getSourceClientOffset(),\n      isDragging: monitor.isDragging()\n    };\n  }),\n      itemType = _useDragLayer.itemType,\n      isDragging = _useDragLayer.isDragging,\n      item = _useDragLayer.item,\n      initialOffset = _useDragLayer.initialOffset,\n      currentOffset = _useDragLayer.currentOffset;\n\n  var convertToString = function convertToString(string) {\n    var limit = 30;\n    var convertedString = string.replace(/(<([^>]+)>)/gi, '');\n    return \"\".concat(convertedString.substring(0, limit)).concat(convertedString.length > limit ? '...' : '');\n  };\n\n  var isSelected = props.note.id === props.currentNoteId;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: isSelected ? classes.boxSelected : classes.box,\n    onClick: function onClick() {\n      return props.setCurrentNoteId(props.note.id);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 194,\n      columnNumber: 7\n    }\n  }, props.note.isDeleted ? __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 199,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.noteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 200,\n      columnNumber: 13\n    }\n  }, props.convertTitle(props.note.noteTitle, 20)), __jsx(\"div\", {\n    className: classes.noteContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 203,\n      columnNumber: 13\n    }\n  }, convertToString(props.note.note)), __jsx(\"div\", {\n    className: classes.date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 206,\n      columnNumber: 13\n    }\n  }, props.formatDate(props.note.updatedAt))) : __jsx(\"div\", {\n    ref: drag,\n    style: {\n      opacity: opacity\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 211,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.noteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 212,\n      columnNumber: 13\n    }\n  }, props.convertTitle(props.note.noteTitle, 20)), __jsx(\"div\", {\n    className: classes.noteContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 215,\n      columnNumber: 13\n    }\n  }, convertToString(props.note.note)), __jsx(\"div\", {\n    className: classes.date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 218,\n      columnNumber: 13\n    }\n  }, props.formatDate(props.note.updatedAt)))), __jsx(\"div\", {\n    style: layerStyles,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 224,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: getItemStyles(initialOffset, currentOffset, false),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 225,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.preview,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 226,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    className: classes.previewIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 227,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__[\"BsBook\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 228,\n      columnNumber: 15\n    }\n  })), __jsx(\"span\", {\n    className: classes.previewItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 230,\n      columnNumber: 13\n    }\n  }, itemType)))));\n}\n\n_s(NoteListItem, \"xNE7dXDKBzf8mU+A0Ln1GRS9K78=\", false, function () {\n  return [useStyles, react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"], react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"]];\n});\n\n_c = NoteListItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLWxpc3QtaXRlbS50c3g/Mjg2MyJdLCJuYW1lcyI6WyJsYXllclN0eWxlcyIsInBvc2l0aW9uIiwicG9pbnRlckV2ZW50cyIsInpJbmRleCIsImxlZnQiLCJ0b3AiLCJoZWlnaHQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW4iLCJjb2xvciIsImZvbnRTaXplIiwid2lkdGgiLCJ0aXRsZSIsInBhZGRpbmciLCJib3giLCJjdXJzb3IiLCJib3JkZXIiLCJvdmVyZmxvdyIsIndvcmRXcmFwIiwiYm94U2VsZWN0ZWQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmV2aWV3SWNvbiIsIm1hcmdpblJpZ2h0IiwidmVydGljYWxBbGlnbiIsInByZXZpZXdJdGVtIiwibWFyZ2luTGVmdCIsInByZXZpZXciLCJub3RlVGl0bGUiLCJub3RlQ29udGVudCIsImRhdGUiLCJlbXB0eSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsImVtcHR5SWNvbiIsIm5ld05vdGVUZXh0IiwiZG90IiwibW9kYWwiLCJwYXBlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJzcGFjaW5nIiwib3V0bGluZSIsImJ1dHRvbiIsIk5vdGVMaXN0SXRlbSIsInByb3BzIiwiY2xhc3NlcyIsInVzZURyYWciLCJpdGVtIiwibmFtZSIsIm5vdGUiLCJ0eXBlIiwiY29sbGVjdCIsIm1vbml0b3IiLCJvcGFjaXR5IiwiaXNEcmFnZ2luZyIsImRyYWciLCJ1c2VFZmZlY3QiLCJnZXRFbXB0eUltYWdlIiwiY2FwdHVyZURyYWdnaW5nU3RhdGUiLCJnZXRJdGVtU3R5bGVzIiwiaW5pdGlhbE9mZnNldCIsImN1cnJlbnRPZmZzZXQiLCJpc1NuYXBUb0dyaWQiLCJ4IiwieSIsInRyYW5zZm9ybSIsIldlYmtpdFRyYW5zZm9ybSIsInVzZURyYWdMYXllciIsImdldEl0ZW0iLCJpdGVtVHlwZSIsImdldEl0ZW1UeXBlIiwiZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCIsImdldFNvdXJjZUNsaWVudE9mZnNldCIsImNvbnZlcnRUb1N0cmluZyIsInN0cmluZyIsImxpbWl0IiwiY29udmVydGVkU3RyaW5nIiwicmVwbGFjZSIsInN1YnN0cmluZyIsImxlbmd0aCIsImlzU2VsZWN0ZWQiLCJpZCIsImN1cnJlbnROb3RlSWQiLCJzZXRDdXJyZW50Tm90ZUlkIiwiaXNEZWxldGVkIiwiY29udmVydFRpdGxlIiwiZm9ybWF0RGF0ZSIsInVwZGF0ZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLFdBQWdDLEdBQUc7QUFDdkNDLFVBQVEsRUFBRSxPQUQ2QjtBQUV2Q0MsZUFBYSxFQUFFLE1BRndCO0FBR3ZDQyxRQUFNLEVBQUUsSUFIK0I7QUFJdkNDLE1BQUksRUFBRSxDQUppQztBQUt2Q0MsS0FBRyxFQUFFLENBTGtDO0FBTXZDO0FBQ0FDLFFBQU0sRUFBRTtBQVArQixDQUF6QztBQVVBLElBQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxNQURMO0FBRUpDLG1CQUFhLEVBQUUsUUFGWDtBQUdKUCxZQUFNLEVBQUUsT0FISjtBQUlKUSxZQUFNLEVBQUUsTUFKSjtBQUtKQyxXQUFLLEVBQUUsZUFMSDtBQU1KQyxjQUFRLEVBQUUsTUFOTjtBQU9KQyxXQUFLLEVBQUU7QUFQSCxLQURLO0FBVVhDLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUVMSCxjQUFRLEVBQUU7QUFGTCxLQVZJO0FBY1hJLE9BQUcsRUFBRTtBQUNIZCxZQUFNLEVBQUUsT0FETDtBQUVIZSxZQUFNLEVBQUUsU0FGTDtB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Ozs7S0FqRGtCeEIsWSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbm90ZS1saXN0LWl0ZW0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IFhZQ29vcmQsIHVzZURyYWcsIHVzZURyYWdMYXllciwgRHJhZ1NvdXJjZU1vbml0b3IgfSBmcm9tICdyZWFjdC1kbmQnO1xuaW1wb3J0IHsgZ2V0RW1wdHlJbWFnZSB9IGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJztcbmltcG9ydCB7IEJzQm9vayB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcbmltcG9ydCBJTm90ZSBmcm9tICcuL2ludGVyZmFjZXMvaW5vdGUnO1xuaW1wb3J0IElOb3RlUHJvcHMgZnJvbSAnLi9pbnRlcmZhY2VzL2lub3RlcHJvcHMnO1xuXG5jb25zdCBsYXllclN0eWxlczogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgekluZGV4OiA5OTk5LFxuICBsZWZ0OiAwLFxuICB0b3A6IDAsXG4gIC8vIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxufTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBjb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgZm9udFNpemU6ICcyMnB4JyxcbiAgICB9LFxuICAgIGJveDoge1xuICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBib3JkZXI6ICcxcHggZ3Jvb3ZlIHJnYigwLDAsMCwwKScsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXG4gICAgICBwYWRkaW5nOiAnMTVweCcsXG4gICAgfSxcbiAgICBib3hTZWxlY3RlZDoge1xuICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBib3JkZXI6ICcxcHggZ3Jvb3ZlIGJsdWUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgd29yZFdyYXA6ICdicmVhay13b3JkJyxcbiAgICAgIHBhZGRpbmc6ICcxNXB4JyxcbiAgICB9LFxuICAgIHByZXZpZXdJY29uOiB7IG1hcmdpblJpZ2h0OiAnM3B4JywgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfSxcbiAgICBwcmV2aWV3SXRlbTogeyBtYXJnaW5MZWZ0OiAnM3B4JyB9LFxuICAgIHByZXZpZXc6IHtcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2IoMTg2LDIyMywyMjkpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICAvLyB3aWR0aDogJzE1MHB4JyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQ4LDI0OCwyNDgsMC42KScsXG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgfSxcbiAgICBub3RlVGl0bGU6IHtcbiAgICAgIGNvbG9yOiAncmdiKDYxLDYxLDYxKScsXG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIH0sXG4gICAgbm90ZUNvbnRlbnQ6IHtcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICBjb2xvcjogJ3JnYigxMTUsMTE1LDExNSknLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgaGVpZ2h0OiAnMzVweCcsXG4gICAgfSxcbiAgICBkYXRlOiB7XG4gICAgICBmb250U2l6ZTogJzExcHgnLFxuICAgICAgY29sb3I6ICdyZ2IoMTE1LDExNSwxMTUpJyxcbiAgICB9LFxuICAgIGVtcHR5OiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHBhZGRpbmc6ICczNXB4JyxcbiAgICB9LFxuICAgIGVtcHR5SWNvbjoge1xuICAgICAgZm9udFNpemU6ICc3NXB4JyxcbiAgICB9LFxuICAgIG5ld05vdGVUZXh0OiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGNvbG9yOiAncmdiKDAsMTY4LDQ1KScsXG4gICAgfSxcbiAgICBkb3Q6IHtcbiAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBwYXBlcjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIyMiwgMjIyLCAyMjIpJyxcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMiwgMiksXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgd2lkdGg6ICczNTBweCcsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICBtYXJnaW46ICcxMHB4IDE1cHgnLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5pbnRlcmZhY2UgTm90ZUxpc3RQcm9wcyBleHRlbmRzIElOb3RlUHJvcHMge1xuICBub3RlOiBJTm90ZTtcbiAgY29udmVydFRpdGxlOiAodGl0bGU6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIpID0+IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZUxpc3RJdGVtKHByb3BzOiBOb3RlTGlzdFByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBbeyBvcGFjaXR5IH0sIGRyYWcsIHByZXZpZXddID0gdXNlRHJhZyh7XG4gICAgaXRlbTogeyBuYW1lOiBwcm9wcy5ub3RlLm5vdGVUaXRsZSwgdHlwZTogJ25vdGUnIH0sXG4gICAgY29sbGVjdDogKG1vbml0b3I6IERyYWdTb3VyY2VNb25pdG9yKSA9PiAoe1xuICAgICAgb3BhY2l0eTogbW9uaXRvci5pc0RyYWdnaW5nKCkgPyAwLjQgOiAxLFxuICAgICAgaXNEcmFnZ2luZzogbW9uaXRvci5pc0RyYWdnaW5nKCksXG4gICAgfSksXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJldmlldyhnZXRFbXB0eUltYWdlKCksIHsgY2FwdHVyZURyYWdnaW5nU3RhdGU6IHRydWUgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRJdGVtU3R5bGVzID0gKFxuICAgIGluaXRpYWxPZmZzZXQ6IFhZQ29vcmQgfCBudWxsLFxuICAgIGN1cnJlbnRPZmZzZXQ6IFhZQ29vcmQgfCBudWxsLFxuICAgIGlzU25hcFRvR3JpZDogYm9vbGVhblxuICApID0+IHtcbiAgICBpZiAoIWluaXRpYWxPZmZzZXQgfHwgIWN1cnJlbnRPZmZzZXQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgbGV0IHsgeCwgeSB9ID0gY3VycmVudE9mZnNldDtcblxuICAgIGlmIChpc1NuYXBUb0dyaWQpIHtcbiAgICAgIHggLT0gaW5pdGlhbE9mZnNldC54O1xuICAgICAgeSAtPSBpbml0aWFsT2Zmc2V0Lnk7XG4gICAgICAvLyBbeCwgeV0gPSBzbmFwVG9HcmlkKHgsIHkpO1xuICAgICAgeCArPSBpbml0aWFsT2Zmc2V0Lng7XG4gICAgICB5ICs9IGluaXRpYWxPZmZzZXQueTtcbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zZm9ybSxcbiAgICAgIFdlYmtpdFRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3Qge1xuICAgIGl0ZW1UeXBlLFxuICAgIGlzRHJhZ2dpbmcsXG4gICAgaXRlbSxcbiAgICBpbml0aWFsT2Zmc2V0LFxuICAgIGN1cnJlbnRPZmZzZXQsXG4gIH0gPSB1c2VEcmFnTGF5ZXIoKG1vbml0b3IpID0+ICh7XG4gICAgaXRlbTogbW9uaXRvci5nZXRJdGVtKCksXG4gICAgaXRlbVR5cGU6IG1vbml0b3IuZ2V0SXRlbVR5cGUoKSxcbiAgICBpbml0aWFsT2Zmc2V0OiBtb25pdG9yLmdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQoKSxcbiAgICBjdXJyZW50T2Zmc2V0OiBtb25pdG9yLmdldFNvdXJjZUNsaWVudE9mZnNldCgpLFxuICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxuICB9KSk7XG5cbiAgY29uc3QgY29udmVydFRvU3RyaW5nID0gKHN0cmluZzogYW55KSA9PiB7XG4gICAgY29uc3QgbGltaXQgPSAzMDtcbiAgICBjb25zdCBjb252ZXJ0ZWRTdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKTtcbiAgICByZXR1cm4gYCR7Y29udmVydGVkU3RyaW5nLnN1YnN0cmluZygwLCBsaW1pdCl9JHtcbiAgICAgIGNvbnZlcnRlZFN0cmluZy5sZW5ndGggPiBsaW1pdCA/ICcuLi4nIDogJydcbiAgICB9YDtcbiAgfTtcblxuICBjb25zdCBpc1NlbGVjdGVkID0gcHJvcHMubm90ZS5pZCA9PT0gcHJvcHMuY3VycmVudE5vdGVJZDtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2lzU2VsZWN0ZWQgPyBjbGFzc2VzLmJveFNlbGVjdGVkIDogY2xhc3Nlcy5ib3h9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLnNldEN1cnJlbnROb3RlSWQocHJvcHMubm90ZS5pZCl9XG4gICAgICA+XG4gICAgICAgIHtwcm9wcy5ub3RlLmlzRGVsZXRlZCA/IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZVRpdGxlfT5cbiAgICAgICAgICAgICAge3Byb3BzLmNvbnZlcnRUaXRsZShwcm9wcy5ub3RlLm5vdGVUaXRsZSwgMjApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RlQ29udGVudH0+XG4gICAgICAgICAgICAgIHtjb252ZXJ0VG9TdHJpbmcocHJvcHMubm90ZS5ub3RlKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+XG4gICAgICAgICAgICAgIHtwcm9wcy5mb3JtYXREYXRlKHByb3BzLm5vdGUudXBkYXRlZEF0KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgcmVmPXtkcmFnfSBzdHlsZT17eyBvcGFjaXR5IH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZVRpdGxlfT5cbiAgICAgICAgICAgICAge3Byb3BzLmNvbnZlcnRUaXRsZShwcm9wcy5ub3RlLm5vdGVUaXRsZSwgMjApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RlQ29udGVudH0+XG4gICAgICAgICAgICAgIHtjb252ZXJ0VG9TdHJpbmcocHJvcHMubm90ZS5ub3RlKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+XG4gICAgICAgICAgICAgIHtwcm9wcy5mb3JtYXREYXRlKHByb3BzLm5vdGUudXBkYXRlZEF0KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXtsYXllclN0eWxlc30+XG4gICAgICAgIDxkaXYgc3R5bGU9e2dldEl0ZW1TdHlsZXMoaW5pdGlhbE9mZnNldCwgY3VycmVudE9mZnNldCwgZmFsc2UpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcmV2aWV3fT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcmV2aWV3SWNvbn0+XG4gICAgICAgICAgICAgIDxCc0Jvb2sgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcmV2aWV3SXRlbX0+e2l0ZW1UeXBlfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/note-list-item.tsx\n");

/***/ })

})
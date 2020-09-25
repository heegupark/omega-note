webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note-list-item.tsx":
/*!***************************************!*\
  !*** ./components/note-list-item.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteListItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/esm/index.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note-list-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar layerStyles = {\n  position: 'fixed',\n  pointerEvents: 'none',\n  zIndex: 9999,\n  left: 0,\n  top: 0,\n  // width: '100%',\n  height: '100%'\n};\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px',\n      width: '100%'\n    },\n    title: {\n      padding: '10px',\n      fontSize: '22px'\n    },\n    box: {\n      height: '100px',\n      cursor: 'pointer',\n      display: 'flex',\n      border: '1px groove rgb(0,0,0,0)',\n      flexDirection: 'column',\n      overflow: 'hidden',\n      wordWrap: 'break-word',\n      padding: '15px'\n    },\n    boxSelected: {\n      height: '100px',\n      cursor: 'pointer',\n      display: 'flex',\n      border: '1px groove blue',\n      borderRadius: '5px',\n      backgroundColor: 'white',\n      flexDirection: 'column',\n      overflow: 'hidden',\n      wordWrap: 'break-word',\n      padding: '15px'\n    },\n    previewIcon: {\n      marginRight: '3px',\n      verticalAlign: 'middle'\n    },\n    previewItem: {\n      marginLeft: '3px'\n    },\n    preview: {\n      border: '1px solid rgb(186,223,229)',\n      borderRadius: '3px',\n      // width: '150px',\n      overflow: 'hidden',\n      fontSize: '14px',\n      backgroundColor: 'rgb(248,248,248,0.6)',\n      padding: '10px'\n    },\n    noteTitle: {\n      color: 'rgb(61,61,61)',\n      fontSize: '14px'\n    },\n    noteContent: {\n      fontSize: '12px',\n      color: 'rgb(115,115,115)',\n      overflow: 'hidden',\n      height: '35px'\n    },\n    date: {\n      fontSize: '11px',\n      color: 'rgb(115,115,115)'\n    },\n    empty: {\n      alignItems: 'center',\n      justifyContent: 'center',\n      margin: 'auto',\n      textAlign: 'center',\n      padding: '35px'\n    },\n    emptyIcon: {\n      fontSize: '75px'\n    },\n    newNoteText: {\n      cursor: 'pointer',\n      color: 'rgb(0,168,45)'\n    },\n    dot: {\n      \"float\": 'right',\n      cursor: 'pointer'\n    },\n    modal: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    paper: {\n      backgroundColor: 'rgb(222, 222, 222)',\n      boxShadow: theme.shadows[5],\n      padding: theme.spacing(1, 2, 2),\n      textAlign: 'center',\n      width: '350px',\n      borderRadius: '5px',\n      fontSize: '12px',\n      outline: 'none'\n    },\n    button: {\n      height: '30px',\n      margin: '10px 15px'\n    }\n  });\n});\nfunction NoteListItem(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      showDotMenu = _useState[0],\n      setShowDotMenu = _useState[1];\n\n  var classes = useStyles();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      anchorEl = _React$useState2[0],\n      setAnchorEl = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      modalOpen = _React$useState4[0],\n      setModalOpen = _React$useState4[1];\n\n  var handleModalOpen = function handleModalOpen() {\n    handlePopoverClose();\n    setModalOpen(true);\n  };\n\n  var handleModalClose = function handleModalClose() {\n    setModalOpen(false);\n  };\n\n  var handlePopoverOpen = function handlePopoverOpen(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handlePopoverClose = function handlePopoverClose() {\n    setAnchorEl(null);\n  };\n\n  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"])({\n    item: {\n      type: props.note.noteTitle\n    },\n    collect: function collect(monitor) {\n      return {\n        opacity: monitor.isDragging() ? 0.4 : 1,\n        isDragging: monitor.isDragging()\n      };\n    }\n  }),\n      _useDrag2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDrag, 3),\n      opacity = _useDrag2[0].opacity,\n      drag = _useDrag2[1],\n      preview = _useDrag2[2];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    preview(Object(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__[\"getEmptyImage\"])(), {\n      captureDraggingState: true\n    });\n  }, []);\n\n  var getItemStyles = function getItemStyles(initialOffset, currentOffset, isSnapToGrid) {\n    if (!initialOffset || !currentOffset) {\n      return {\n        display: 'none'\n      };\n    }\n\n    var x = currentOffset.x,\n        y = currentOffset.y;\n\n    if (isSnapToGrid) {\n      x -= initialOffset.x;\n      y -= initialOffset.y; // [x, y] = snapToGrid(x, y);\n\n      x += initialOffset.x;\n      y += initialOffset.y;\n    }\n\n    var transform = \"translate(\".concat(x, \"px, \").concat(y, \"px)\");\n    return {\n      transform: transform,\n      WebkitTransform: transform\n    };\n  };\n\n  var _useDragLayer = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"])(function (monitor) {\n    return {\n      item: monitor.getItem(),\n      itemType: monitor.getItemType(),\n      initialOffset: monitor.getInitialSourceClientOffset(),\n      currentOffset: monitor.getSourceClientOffset(),\n      isDragging: monitor.isDragging()\n    };\n  }),\n      itemType = _useDragLayer.itemType,\n      isDragging = _useDragLayer.isDragging,\n      item = _useDragLayer.item,\n      initialOffset = _useDragLayer.initialOffset,\n      currentOffset = _useDragLayer.currentOffset;\n\n  var convertToString = function convertToString(string) {\n    var limit = 30;\n    var convertedString = string.replace(/(<([^>]+)>)/gi, '');\n    return \"\".concat(convertedString.substring(0, limit)).concat(convertedString.length > limit ? '...' : '');\n  };\n\n  var isSelected = props.note.id === props.currentNoteId;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: isSelected ? classes.boxSelected : classes.box,\n    onClick: function onClick() {\n      return props.setCurrentNoteId(props.note.id);\n    },\n    onMouseEnter: function onMouseEnter() {\n      setShowDotMenu(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      setShowDotMenu(false);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 214,\n      columnNumber: 7\n    }\n  }, props.note.isDeleted ? __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 225,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.noteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 226,\n      columnNumber: 13\n    }\n  }, props.convertTitle(props.note.noteTitle, 20)), __jsx(\"div\", {\n    className: classes.noteContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 229,\n      columnNumber: 13\n    }\n  }, convertToString(props.note.note)), __jsx(\"div\", {\n    className: classes.date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 232,\n      columnNumber: 13\n    }\n  }, props.formatDate(props.note.updatedAt))) : __jsx(\"div\", {\n    ref: drag,\n    style: {\n      opacity: opacity\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 237,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.noteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 238,\n      columnNumber: 13\n    }\n  }, props.convertTitle(props.note.noteTitle, 20)), __jsx(\"div\", {\n    className: classes.noteContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 241,\n      columnNumber: 13\n    }\n  }, convertToString(props.note.note)), __jsx(\"div\", {\n    className: classes.date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 244,\n      columnNumber: 13\n    }\n  }, props.formatDate(props.note.updatedAt)))), __jsx(\"div\", {\n    style: layerStyles,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 250,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: getItemStyles(initialOffset, currentOffset, false),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 251,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.preview,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 252,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    className: classes.previewIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 253,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__[\"BsBook\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 254,\n      columnNumber: 15\n    }\n  })), __jsx(\"span\", {\n    className: classes.previewItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 256,\n      columnNumber: 13\n    }\n  }, itemType)))));\n}\n\n_s(NoteListItem, \"NnO1qab9RTR7eizC+eZdKnz5sGo=\", false, function () {\n  return [useStyles, react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"], react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"]];\n});\n\n_c = NoteListItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLWxpc3QtaXRlbS50c3g/Mjg2MyJdLCJuYW1lcyI6WyJsYXllclN0eWxlcyIsInBvc2l0aW9uIiwicG9pbnRlckV2ZW50cyIsInpJbmRleCIsImxlZnQiLCJ0b3AiLCJoZWlnaHQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW4iLCJjb2xvciIsImZvbnRTaXplIiwid2lkdGgiLCJ0aXRsZSIsInBhZGRpbmciLCJib3giLCJjdXJzb3IiLCJib3JkZXIiLCJvdmVyZmxvdyIsIndvcmRXcmFwIiwiYm94U2VsZWN0ZWQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmV2aWV3SWNvbiIsIm1hcmdpblJpZ2h0IiwidmVydGljYWxBbGlnbiIsInByZXZpZXdJdGVtIiwibWFyZ2luTGVmdCIsInByZXZpZXciLCJub3RlVGl0bGUiLCJub3RlQ29udGVudCIsImRhdGUiLCJlbXB0eSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsImVtcHR5SWNvbiIsIm5ld05vdGVUZXh0IiwiZG90IiwibW9kYWwiLCJwYXBlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJzcGFjaW5nIiwib3V0bGluZSIsImJ1dHRvbiIsIk5vdGVMaXN0SXRlbSIsInByb3BzIiwidXNlU3RhdGUiLCJzaG93RG90TWVudSIsInNldFNob3dEb3RNZW51IiwiY2xhc3NlcyIsIlJlYWN0IiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsIm1vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsImhhbmRsZU1vZGFsT3BlbiIsImhhbmRsZVBvcG92ZXJDbG9zZSIsImhhbmRsZU1vZGFsQ2xvc2UiLCJoYW5kbGVQb3BvdmVyT3BlbiIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInVzZURyYWciLCJpdGVtIiwidHlwZSIsIm5vdGUiLCJjb2xsZWN0IiwibW9uaXRvciIsIm9wYWNpdHkiLCJpc0RyYWdnaW5nIiwiZHJhZyIsInVzZUVmZmVjdCIsImdldEVtcHR5SW1hZ2UiLCJjYXB0dXJlRHJhZ2dpbmdTdGF0ZSIsImdldEl0ZW1TdHlsZXMiLCJpbml0aWFsT2Zmc2V0IiwiY3VycmVudE9mZnNldCIsImlzU25hcFRvR3JpZCIsIngiLCJ5IiwidHJhbnNmb3JtIiwiV2Via2l0VHJhbnNmb3JtIiwidXNlRHJhZ0xheWVyIiwiZ2V0SXRlbSIsIml0ZW1UeXBlIiwiZ2V0SXRlbVR5cGUiLCJnZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0IiwiZ2V0U291cmNlQ2xpZW50T2Zmc2V0IiwiY29udmVydFRvU3RyaW5nIiwic3RyaW5nIiwibGltaXQiLCJjb252ZXJ0ZWRTdHJpbmciLCJyZXBsYWNlIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiaXNTZWxlY3RlZCIsImlkIiwiY3VycmVudE5vdGVJZCIsInNldEN1cnJlbnROb3RlSWQiLCJpc0RlbGV0ZWQiLCJjb252ZXJ0VGl0bGUiLCJmb3JtYXREYXRlIiwidXBkYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsV0FBZ0MsR0FBRztBQUN2Q0MsVUFBUSxFQUFFLE9BRDZCO0FBRXZDQyxlQUFhLEVBQUUsTUFGd0I7QUFHdkNDLFFBQU0sRUFBRSxJQUgrQjtBQUl2Q0MsTUFBSSxFQUFFLENBSmlDO0FBS3ZDQyxLQUFHLEVBQUUsQ0FMa0M7QUFNdkM7QUFDQUMsUUFBTSxFQUFFO0FBUCtCLENBQXpDO0FBVUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE1BREw7QUFFSkMsbUJBQWEsRUFBRSxRQUZYO0FBR0pQLFlBQU0sRUFBRSxPQUhKO0FBSUpRLFlBQU0sRUFB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NUMsUyxFQXFCcUI2RCxpRCxFQThDakNvQixzRDs7O0tBckVrQnJDLFkiLCJmaWxlIjoiLi9jb21wb25lbnRzL25vdGUtbGlzdC1pdGVtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBYWUNvb3JkLCB1c2VEcmFnLCB1c2VEcmFnTGF5ZXIsIERyYWdTb3VyY2VNb25pdG9yIH0gZnJvbSAncmVhY3QtZG5kJztcbmltcG9ydCB7IGdldEVtcHR5SW1hZ2UgfSBmcm9tICdyZWFjdC1kbmQtaHRtbDUtYmFja2VuZCc7XG5pbXBvcnQgeyBCc0Jvb2sgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XG5pbXBvcnQgSU5vdGUgZnJvbSAnLi9pbnRlcmZhY2VzL2lub3RlJztcbmltcG9ydCBJTm90ZVByb3BzIGZyb20gJy4vaW50ZXJmYWNlcy9pbm90ZXByb3BzJztcblxuY29uc3QgbGF5ZXJTdHlsZXM6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gIHpJbmRleDogOTk5OSxcbiAgbGVmdDogMCxcbiAgdG9wOiAwLFxuICAvLyB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbn07XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgY29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgIGZvbnRTaXplOiAnMjJweCcsXG4gICAgfSxcbiAgICBib3g6IHtcbiAgICAgIGhlaWdodDogJzEwMHB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYm9yZGVyOiAnMXB4IGdyb292ZSByZ2IoMCwwLDAsMCknLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB3b3JkV3JhcDogJ2JyZWFrLXdvcmQnLFxuICAgICAgcGFkZGluZzogJzE1cHgnLFxuICAgIH0sXG4gICAgYm94U2VsZWN0ZWQ6IHtcbiAgICAgIGhlaWdodDogJzEwMHB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYm9yZGVyOiAnMXB4IGdyb292ZSBibHVlJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXG4gICAgICBwYWRkaW5nOiAnMTVweCcsXG4gICAgfSxcbiAgICBwcmV2aWV3SWNvbjogeyBtYXJnaW5SaWdodDogJzNweCcsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH0sXG4gICAgcHJldmlld0l0ZW06IHsgbWFyZ2luTGVmdDogJzNweCcgfSxcbiAgICBwcmV2aWV3OiB7XG4gICAgICBib3JkZXI6ICcxcHggc29saWQgcmdiKDE4NiwyMjMsMjI5KScsXG4gICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgLy8gd2lkdGg6ICcxNTBweCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0OCwyNDgsMjQ4LDAuNiknLFxuICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgIH0sXG4gICAgbm90ZVRpdGxlOiB7XG4gICAgICBjb2xvcjogJ3JnYig2MSw2MSw2MSknLFxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICB9LFxuICAgIG5vdGVDb250ZW50OiB7XG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgY29sb3I6ICdyZ2IoMTE1LDExNSwxMTUpJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGhlaWdodDogJzM1cHgnLFxuICAgIH0sXG4gICAgZGF0ZToge1xuICAgICAgZm9udFNpemU6ICcxMXB4JyxcbiAgICAgIGNvbG9yOiAncmdiKDExNSwxMTUsMTE1KScsXG4gICAgfSxcbiAgICBlbXB0eToge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBwYWRkaW5nOiAnMzVweCcsXG4gICAgfSxcbiAgICBlbXB0eUljb246IHtcbiAgICAgIGZvbnRTaXplOiAnNzVweCcsXG4gICAgfSxcbiAgICBuZXdOb3RlVGV4dDoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogJ3JnYigwLDE2OCw0NSknLFxuICAgIH0sXG4gICAgZG90OiB7XG4gICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgcGFwZXI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMjIsIDIyMiwgMjIyKScsXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDIsIDIpLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMzUwcHgnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGhlaWdodDogJzMwcHgnLFxuICAgICAgbWFyZ2luOiAnMTBweCAxNXB4JyxcbiAgICB9LFxuICB9KVxuKTtcblxuaW50ZXJmYWNlIE5vdGVMaXN0UHJvcHMgZXh0ZW5kcyBJTm90ZVByb3BzIHtcbiAgbm90ZTogSU5vdGU7XG4gIGNvbnZlcnRUaXRsZTogKHRpdGxlOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyKSA9PiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVMaXN0SXRlbShwcm9wczogTm90ZUxpc3RQcm9wcykge1xuICBjb25zdCBbc2hvd0RvdE1lbnUsIHNldFNob3dEb3RNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlTW9kYWxPcGVuID0gKCkgPT4ge1xuICAgIGhhbmRsZVBvcG92ZXJDbG9zZSgpO1xuICAgIHNldE1vZGFsT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb2RhbENsb3NlID0gKCkgPT4ge1xuICAgIHNldE1vZGFsT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUG9wb3Zlck9wZW4gPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUG9wb3ZlckNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IFt7IG9wYWNpdHkgfSwgZHJhZywgcHJldmlld10gPSB1c2VEcmFnKHtcbiAgICBpdGVtOiB7IHR5cGU6IHByb3BzLm5vdGUubm90ZVRpdGxlIH0sXG4gICAgY29sbGVjdDogKG1vbml0b3I6IERyYWdTb3VyY2VNb25pdG9yKSA9PiAoe1xuICAgICAgb3BhY2l0eTogbW9uaXRvci5pc0RyYWdnaW5nKCkgPyAwLjQgOiAxLFxuICAgICAgaXNEcmFnZ2luZzogbW9uaXRvci5pc0RyYWdnaW5nKCksXG4gICAgfSksXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJldmlldyhnZXRFbXB0eUltYWdlKCksIHsgY2FwdHVyZURyYWdnaW5nU3RhdGU6IHRydWUgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRJdGVtU3R5bGVzID0gKFxuICAgIGluaXRpYWxPZmZzZXQ6IFhZQ29vcmQgfCBudWxsLFxuICAgIGN1cnJlbnRPZmZzZXQ6IFhZQ29vcmQgfCBudWxsLFxuICAgIGlzU25hcFRvR3JpZDogYm9vbGVhblxuICApID0+IHtcbiAgICBpZiAoIWluaXRpYWxPZmZzZXQgfHwgIWN1cnJlbnRPZmZzZXQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgbGV0IHsgeCwgeSB9ID0gY3VycmVudE9mZnNldDtcblxuICAgIGlmIChpc1NuYXBUb0dyaWQpIHtcbiAgICAgIHggLT0gaW5pdGlhbE9mZnNldC54O1xuICAgICAgeSAtPSBpbml0aWFsT2Zmc2V0Lnk7XG4gICAgICAvLyBbeCwgeV0gPSBzbmFwVG9HcmlkKHgsIHkpO1xuICAgICAgeCArPSBpbml0aWFsT2Zmc2V0Lng7XG4gICAgICB5ICs9IGluaXRpYWxPZmZzZXQueTtcbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zZm9ybSxcbiAgICAgIFdlYmtpdFRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3Qge1xuICAgIGl0ZW1UeXBlLFxuICAgIGlzRHJhZ2dpbmcsXG4gICAgaXRlbSxcbiAgICBpbml0aWFsT2Zmc2V0LFxuICAgIGN1cnJlbnRPZmZzZXQsXG4gIH0gPSB1c2VEcmFnTGF5ZXIoKG1vbml0b3IpID0+ICh7XG4gICAgaXRlbTogbW9uaXRvci5nZXRJdGVtKCksXG4gICAgaXRlbVR5cGU6IG1vbml0b3IuZ2V0SXRlbVR5cGUoKSxcbiAgICBpbml0aWFsT2Zmc2V0OiBtb25pdG9yLmdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQoKSxcbiAgICBjdXJyZW50T2Zmc2V0OiBtb25pdG9yLmdldFNvdXJjZUNsaWVudE9mZnNldCgpLFxuICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxuICB9KSk7XG5cbiAgY29uc3QgY29udmVydFRvU3RyaW5nID0gKHN0cmluZzogYW55KSA9PiB7XG4gICAgY29uc3QgbGltaXQgPSAzMDtcbiAgICBjb25zdCBjb252ZXJ0ZWRTdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKTtcbiAgICByZXR1cm4gYCR7Y29udmVydGVkU3RyaW5nLnN1YnN0cmluZygwLCBsaW1pdCl9JHtcbiAgICAgIGNvbnZlcnRlZFN0cmluZy5sZW5ndGggPiBsaW1pdCA/ICcuLi4nIDogJydcbiAgICB9YDtcbiAgfTtcblxuICBjb25zdCBpc1NlbGVjdGVkID0gcHJvcHMubm90ZS5pZCA9PT0gcHJvcHMuY3VycmVudE5vdGVJZDtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2lzU2VsZWN0ZWQgPyBjbGFzc2VzLmJveFNlbGVjdGVkIDogY2xhc3Nlcy5ib3h9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLnNldEN1cnJlbnROb3RlSWQocHJvcHMubm90ZS5pZCl9XG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgIHNldFNob3dEb3RNZW51KHRydWUpO1xuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcbiAgICAgICAgICBzZXRTaG93RG90TWVudShmYWxzZSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtwcm9wcy5ub3RlLmlzRGVsZXRlZCA/IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZVRpdGxlfT5cbiAgICAgICAgICAgICAge3Byb3BzLmNvbnZlcnRUaXRsZShwcm9wcy5ub3RlLm5vdGVUaXRsZSwgMjApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RlQ29udGVudH0+XG4gICAgICAgICAgICAgIHtjb252ZXJ0VG9TdHJpbmcocHJvcHMubm90ZS5ub3RlKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+XG4gICAgICAgICAgICAgIHtwcm9wcy5mb3JtYXREYXRlKHByb3BzLm5vdGUudXBkYXRlZEF0KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgcmVmPXtkcmFnfSBzdHlsZT17eyBvcGFjaXR5IH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZVRpdGxlfT5cbiAgICAgICAgICAgICAge3Byb3BzLmNvbnZlcnRUaXRsZShwcm9wcy5ub3RlLm5vdGVUaXRsZSwgMjApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RlQ29udGVudH0+XG4gICAgICAgICAgICAgIHtjb252ZXJ0VG9TdHJpbmcocHJvcHMubm90ZS5ub3RlKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+XG4gICAgICAgICAgICAgIHtwcm9wcy5mb3JtYXREYXRlKHByb3BzLm5vdGUudXBkYXRlZEF0KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXtsYXllclN0eWxlc30+XG4gICAgICAgIDxkaXYgc3R5bGU9e2dldEl0ZW1TdHlsZXMoaW5pdGlhbE9mZnNldCwgY3VycmVudE9mZnNldCwgZmFsc2UpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcmV2aWV3fT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcmV2aWV3SWNvbn0+XG4gICAgICAgICAgICAgIDxCc0Jvb2sgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcmV2aWV3SXRlbX0+e2l0ZW1UeXBlfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/note-list-item.tsx\n");

/***/ })

})
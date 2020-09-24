webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note-list-item.tsx":
/*!***************************************!*\
  !*** ./components/note-list-item.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoteListItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/esm/index.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Menu */ \"./node_modules/@material-ui/core/esm/Menu/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note-list-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar layerStyles = {\n  position: 'fixed',\n  pointerEvents: 'none',\n  zIndex: 9999,\n  left: 0,\n  top: 0,\n  // width: '100%',\n  height: '100%'\n};\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100vh',\n      margin: 'auto',\n      color: 'rgb(51,51,51)',\n      fontSize: '16px',\n      width: '100%'\n    },\n    title: {\n      padding: '10px',\n      fontSize: '22px'\n    },\n    box: {\n      height: '100px',\n      cursor: 'pointer',\n      display: 'flex',\n      border: '1px groove rgb(0,0,0,0)',\n      flexDirection: 'column',\n      overflow: 'hidden',\n      wordWrap: 'break-word',\n      padding: '15px'\n    },\n    boxSelected: {\n      height: '100px',\n      cursor: 'pointer',\n      display: 'flex',\n      border: '1px groove blue',\n      borderRadius: '5px',\n      backgroundColor: 'white',\n      flexDirection: 'column',\n      overflow: 'hidden',\n      wordWrap: 'break-word',\n      padding: '15px'\n    },\n    previewIcon: {\n      marginRight: '3px',\n      verticalAlign: 'middle'\n    },\n    previewItem: {\n      marginLeft: '3px'\n    },\n    preview: {\n      border: '1px solid rgb(186,223,229)',\n      borderRadius: '3px',\n      // width: '150px',\n      overflow: 'hidden',\n      fontSize: '14px',\n      backgroundColor: 'rgb(248,248,248,0.6)',\n      padding: '10px'\n    },\n    noteTitle: {\n      color: 'rgb(61,61,61)',\n      fontSize: '14px'\n    },\n    noteContent: {\n      fontSize: '12px',\n      color: 'rgb(115,115,115)',\n      overflow: 'hidden',\n      height: '35px'\n    },\n    date: {\n      fontSize: '11px',\n      color: 'rgb(115,115,115)'\n    },\n    empty: {\n      alignItems: 'center',\n      justifyContent: 'center',\n      margin: 'auto',\n      textAlign: 'center',\n      padding: '35px'\n    },\n    emptyIcon: {\n      fontSize: '75px'\n    },\n    newNoteText: {\n      cursor: 'pointer',\n      color: 'rgb(0,168,45)'\n    },\n    dot: {\n      \"float\": 'right',\n      cursor: 'pointer'\n    }\n  });\n});\nfunction NoteListItem(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      showDotMenu = _useState[0],\n      setShowDotMenu = _useState[1];\n\n  var classes = useStyles();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      anchorEl = _React$useState2[0],\n      setAnchorEl = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      modalOpen = _React$useState4[0],\n      setModalOpen = _React$useState4[1];\n\n  var handleModalOpen = function handleModalOpen() {\n    handlePopoverClose();\n    setModalOpen(true);\n  };\n\n  var handleModalClose = function handleModalClose() {\n    setModalOpen(false);\n  };\n\n  var handlePopoverOpen = function handlePopoverOpen(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handlePopoverClose = function handlePopoverClose() {\n    setAnchorEl(null);\n  };\n\n  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"])({\n    item: {\n      type: props.note.noteTitle\n    },\n    collect: function collect(monitor) {\n      return {\n        opacity: monitor.isDragging() ? 0.4 : 1,\n        isDragging: monitor.isDragging()\n      };\n    }\n  }),\n      _useDrag2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDrag, 3),\n      opacity = _useDrag2[0].opacity,\n      drag = _useDrag2[1],\n      preview = _useDrag2[2];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    preview(Object(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__[\"getEmptyImage\"])(), {\n      captureDraggingState: true\n    });\n  }, []);\n\n  var getItemStyles = function getItemStyles(initialOffset, currentOffset, isSnapToGrid) {\n    if (!initialOffset || !currentOffset) {\n      return {\n        display: 'none'\n      };\n    }\n\n    var x = currentOffset.x,\n        y = currentOffset.y;\n\n    if (isSnapToGrid) {\n      x -= initialOffset.x;\n      y -= initialOffset.y; // [x, y] = snapToGrid(x, y);\n\n      x += initialOffset.x;\n      y += initialOffset.y;\n    }\n\n    var transform = \"translate(\".concat(x, \"px, \").concat(y, \"px)\");\n    return {\n      transform: transform,\n      WebkitTransform: transform\n    };\n  };\n\n  var _useDragLayer = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"])(function (monitor) {\n    return {\n      item: monitor.getItem(),\n      itemType: monitor.getItemType(),\n      initialOffset: monitor.getInitialSourceClientOffset(),\n      currentOffset: monitor.getSourceClientOffset(),\n      isDragging: monitor.isDragging()\n    };\n  }),\n      itemType = _useDragLayer.itemType,\n      isDragging = _useDragLayer.isDragging,\n      item = _useDragLayer.item,\n      initialOffset = _useDragLayer.initialOffset,\n      currentOffset = _useDragLayer.currentOffset;\n\n  var convertToString = function convertToString(string) {\n    var limit = 30;\n    var convertedString = string.replace(/(<([^>]+)>)/gi, '');\n    return \"\".concat(convertedString.substring(0, limit)).concat(convertedString.length > limit ? '...' : '');\n  };\n\n  var isSelected = props.note.id === props.currentNote;\n  console.log(showDotMenu);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: isSelected ? classes.boxSelected : classes.box,\n    onClick: function onClick() {\n      return props.setCurrentNote(props.note.id);\n    },\n    onMouseEnter: function onMouseEnter() {\n      setShowDotMenu(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      setShowDotMenu(false);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 7\n    }\n  }, props.note.isDeleted ? __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 202,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.noteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 203,\n      columnNumber: 13\n    }\n  }, props.convertTitle(props.note.noteTitle, 20), showDotMenu && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    id: \"dot-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handlePopoverClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 207,\n      columnNumber: 19\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onClick: handleRestore,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 214,\n      columnNumber: 21\n    }\n  }, \"Restore\"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onClick: handleModalOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 215,\n      columnNumber: 21\n    }\n  }, \"Delete\")), __jsx(\"span\", {\n    className: classes.dot,\n    onClick: handlePopoverOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 217,\n      columnNumber: 19\n    }\n  }, __jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__[\"HiDotsHorizontal\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 218,\n      columnNumber: 21\n    }\n  })))), __jsx(\"div\", {\n    className: classes.noteContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 223,\n      columnNumber: 13\n    }\n  }, convertToString(props.note.note)), __jsx(\"div\", {\n    className: classes.date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 226,\n      columnNumber: 13\n    }\n  }, props.formatDate(props.note.updatedAt))) : __jsx(\"div\", {\n    ref: drag,\n    style: {\n      opacity: opacity\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 231,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.noteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 232,\n      columnNumber: 13\n    }\n  }, props.convertTitle(props.note.noteTitle, 20), showDotMenu && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    id: \"dot-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handlePopoverClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 236,\n      columnNumber: 19\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onClick: handleMoveToTrash,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 243,\n      columnNumber: 21\n    }\n  }, \"Move to trash\")), __jsx(\"span\", {\n    className: classes.dot,\n    onClick: handlePopoverOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 247,\n      columnNumber: 19\n    }\n  }, __jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__[\"HiDotsHorizontal\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 248,\n      columnNumber: 21\n    }\n  })))), __jsx(\"div\", {\n    className: classes.noteContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 253,\n      columnNumber: 13\n    }\n  }, convertToString(props.note.note)), __jsx(\"div\", {\n    className: classes.date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 256,\n      columnNumber: 13\n    }\n  }, props.formatDate(props.note.updatedAt)))), __jsx(\"div\", {\n    style: layerStyles,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 262,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: getItemStyles(initialOffset, currentOffset, props.snapToGrid),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 263,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.preview,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 266,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    className: classes.previewIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 267,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__[\"BsBook\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 268,\n      columnNumber: 15\n    }\n  })), __jsx(\"span\", {\n    className: classes.previewItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 270,\n      columnNumber: 13\n    }\n  }, itemType)))));\n}\n\n_s(NoteListItem, \"NnO1qab9RTR7eizC+eZdKnz5sGo=\", false, function () {\n  return [useStyles, react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDrag\"], react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"useDragLayer\"]];\n});\n\n_c = NoteListItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"NoteListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLWxpc3QtaXRlbS50c3g/Mjg2MyJdLCJuYW1lcyI6WyJsYXllclN0eWxlcyIsInBvc2l0aW9uIiwicG9pbnRlckV2ZW50cyIsInpJbmRleCIsImxlZnQiLCJ0b3AiLCJoZWlnaHQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW4iLCJjb2xvciIsImZvbnRTaXplIiwid2lkdGgiLCJ0aXRsZSIsInBhZGRpbmciLCJib3giLCJjdXJzb3IiLCJib3JkZXIiLCJvdmVyZmxvdyIsIndvcmRXcmFwIiwiYm94U2VsZWN0ZWQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmV2aWV3SWNvbiIsIm1hcmdpblJpZ2h0IiwidmVydGljYWxBbGlnbiIsInByZXZpZXdJdGVtIiwibWFyZ2luTGVmdCIsInByZXZpZXciLCJub3RlVGl0bGUiLCJub3RlQ29udGVudCIsImRhdGUiLCJlbXB0eSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsImVtcHR5SWNvbiIsIm5ld05vdGVUZXh0IiwiZG90IiwiTm90ZUxpc3RJdGVtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNob3dEb3RNZW51Iiwic2V0U2hvd0RvdE1lbnUiLCJjbGFzc2VzIiwiUmVhY3QiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwiaGFuZGxlTW9kYWxPcGVuIiwiaGFuZGxlUG9wb3ZlckNsb3NlIiwiaGFuZGxlTW9kYWxDbG9zZSIsImhhbmRsZVBvcG92ZXJPcGVuIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidXNlRHJhZyIsIml0ZW0iLCJ0eXBlIiwibm90ZSIsImNvbGxlY3QiLCJtb25pdG9yIiwib3BhY2l0eSIsImlzRHJhZ2dpbmciLCJkcmFnIiwidXNlRWZmZWN0IiwiZ2V0RW1wdHlJbWFnZSIsImNhcHR1cmVEcmFnZ2luZ1N0YXRlIiwiZ2V0SXRlbVN0eWxlcyIsImluaXRpYWxPZmZzZXQiLCJjdXJyZW50T2Zmc2V0IiwiaXNTbmFwVG9HcmlkIiwieCIsInkiLCJ0cmFuc2Zvcm0iLCJXZWJraXRUcmFuc2Zvcm0iLCJ1c2VEcmFnTGF5ZXIiLCJnZXRJdGVtIiwiaXRlbVR5cGUiLCJnZXRJdGVtVHlwZSIsImdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQiLCJnZXRTb3VyY2VDbGllbnRPZmZzZXQiLCJjb252ZXJ0VG9TdHJpbmciLCJzdHJpbmciLCJsaW1pdCIsImNvbnZlcnRlZFN0cmluZyIsInJlcGxhY2UiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJpc1NlbGVjdGVkIiwiaWQiLCJjdXJyZW50Tm90ZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRDdXJyZW50Tm90ZSIsImlzRGVsZXRlZCIsImNvbnZlcnRUaXRsZSIsIkJvb2xlYW4iLCJoYW5kbGVSZXN0b3JlIiwiZm9ybWF0RGF0ZSIsInVwZGF0ZWRBdCIsImhhbmRsZU1vdmVUb1RyYXNoIiwic25hcFRvR3JpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQWdDLEdBQUc7QUFDdkNDLFVBQVEsRUFBRSxPQUQ2QjtBQUV2Q0MsZUFBYSxFQUFFLE1BRndCO0FBR3ZDQyxRQUFNLEVBQUUsSUFIK0I7QUFJdkNDLE1BQUksRUFBRSxDQUppQztBQUt2Q0MsS0FBRyxFQUFFLENBTGtDO0FBTXZDO0FBQ0FDLFFBQU0sRUFBRTtBQVArQixDQUF6QztBQVVBLElBQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxNQURMO0FBRUpDLG1CQUFhLEVBQUUsUUFGWDtBQUdKUCxZQUFNLEVB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LElBQU4sQ0FBV3lDLFNBQTVCLENBREgsQ0F6QkYsQ0F4Q0osQ0FERixFQXdFRTtBQUFLLFNBQUssRUFBRXpHLFdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsU0FBSyxFQUFFeUUsYUFBYSxDQUFDQyxhQUFELEVBQWdCQyxhQUFoQixFQUErQjlCLEtBQUssQ0FBQzhELFVBQXJDLENBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRTtBQUFLLGFBQVMsRUFBRTFELE9BQU8sQ0FBQ2hCLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBRWdCLE9BQU8sQ0FBQ3JCLFdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBTSxhQUFTLEVBQUVxQixPQUFPLENBQUNsQixXQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDb0QsUUFBdkMsQ0FKRixDQUhGLENBREYsQ0F4RUYsQ0FERjtBQXVGRDs7R0E3S3VCdkMsWTtVQUVOckMsUyxFQW9CcUJzRCxpRCxFQThDakNvQixzRDs7O0tBcEVrQnJDLFkiLCJmaWxlIjoiLi9jb21wb25lbnRzL25vdGUtbGlzdC1pdGVtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBYWUNvb3JkLCB1c2VEcmFnLCB1c2VEcmFnTGF5ZXIsIERyYWdTb3VyY2VNb25pdG9yIH0gZnJvbSAncmVhY3QtZG5kJztcbmltcG9ydCB7IGdldEVtcHR5SW1hZ2UgfSBmcm9tICdyZWFjdC1kbmQtaHRtbDUtYmFja2VuZCc7XG5pbXBvcnQgeyBCc0Jvb2sgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XG5pbXBvcnQgeyBIaURvdHNIb3Jpem9udGFsIH0gZnJvbSAncmVhY3QtaWNvbnMvaGknO1xuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuXG5jb25zdCBsYXllclN0eWxlczogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgekluZGV4OiA5OTk5LFxuICBsZWZ0OiAwLFxuICB0b3A6IDAsXG4gIC8vIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxufTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBjb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgZm9udFNpemU6ICcyMnB4JyxcbiAgICB9LFxuICAgIGJveDoge1xuICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBib3JkZXI6ICcxcHggZ3Jvb3ZlIHJnYigwLDAsMCwwKScsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXG4gICAgICBwYWRkaW5nOiAnMTVweCcsXG4gICAgfSxcbiAgICBib3hTZWxlY3RlZDoge1xuICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBib3JkZXI6ICcxcHggZ3Jvb3ZlIGJsdWUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgd29yZFdyYXA6ICdicmVhay13b3JkJyxcbiAgICAgIHBhZGRpbmc6ICcxNXB4JyxcbiAgICB9LFxuICAgIHByZXZpZXdJY29uOiB7IG1hcmdpblJpZ2h0OiAnM3B4JywgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfSxcbiAgICBwcmV2aWV3SXRlbTogeyBtYXJnaW5MZWZ0OiAnM3B4JyB9LFxuICAgIHByZXZpZXc6IHtcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2IoMTg2LDIyMywyMjkpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICAvLyB3aWR0aDogJzE1MHB4JyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQ4LDI0OCwyNDgsMC42KScsXG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgfSxcbiAgICBub3RlVGl0bGU6IHtcbiAgICAgIGNvbG9yOiAncmdiKDYxLDYxLDYxKScsXG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIH0sXG4gICAgbm90ZUNvbnRlbnQ6IHtcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICBjb2xvcjogJ3JnYigxMTUsMTE1LDExNSknLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgaGVpZ2h0OiAnMzVweCcsXG4gICAgfSxcbiAgICBkYXRlOiB7XG4gICAgICBmb250U2l6ZTogJzExcHgnLFxuICAgICAgY29sb3I6ICdyZ2IoMTE1LDExNSwxMTUpJyxcbiAgICB9LFxuICAgIGVtcHR5OiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHBhZGRpbmc6ICczNXB4JyxcbiAgICB9LFxuICAgIGVtcHR5SWNvbjoge1xuICAgICAgZm9udFNpemU6ICc3NXB4JyxcbiAgICB9LFxuICAgIG5ld05vdGVUZXh0OiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGNvbG9yOiAncmdiKDAsMTY4LDQ1KScsXG4gICAgfSxcbiAgICBkb3Q6IHtcbiAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgfSxcbiAgfSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVMaXN0SXRlbShwcm9wczogYW55KSB7XG4gIGNvbnN0IFtzaG93RG90TWVudSwgc2V0U2hvd0RvdE1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGU8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKTtcbiAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVNb2RhbE9wZW4gPSAoKSA9PiB7XG4gICAgaGFuZGxlUG9wb3ZlckNsb3NlKCk7XG4gICAgc2V0TW9kYWxPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vZGFsQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQb3BvdmVyT3BlbiA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQb3BvdmVyQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gIH07XG4gIGNvbnN0IFt7IG9wYWNpdHkgfSwgZHJhZywgcHJldmlld10gPSB1c2VEcmFnKHtcbiAgICBpdGVtOiB7IHR5cGU6IHByb3BzLm5vdGUubm90ZVRpdGxlIH0sXG4gICAgY29sbGVjdDogKG1vbml0b3I6IERyYWdTb3VyY2VNb25pdG9yKSA9PiAoe1xuICAgICAgb3BhY2l0eTogbW9uaXRvci5pc0RyYWdnaW5nKCkgPyAwLjQgOiAxLFxuICAgICAgaXNEcmFnZ2luZzogbW9uaXRvci5pc0RyYWdnaW5nKCksXG4gICAgfSksXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJldmlldyhnZXRFbXB0eUltYWdlKCksIHsgY2FwdHVyZURyYWdnaW5nU3RhdGU6IHRydWUgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRJdGVtU3R5bGVzID0gKFxuICAgIGluaXRpYWxPZmZzZXQ6IFhZQ29vcmQgfCBudWxsLFxuICAgIGN1cnJlbnRPZmZzZXQ6IFhZQ29vcmQgfCBudWxsLFxuICAgIGlzU25hcFRvR3JpZDogYm9vbGVhblxuICApID0+IHtcbiAgICBpZiAoIWluaXRpYWxPZmZzZXQgfHwgIWN1cnJlbnRPZmZzZXQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgbGV0IHsgeCwgeSB9ID0gY3VycmVudE9mZnNldDtcblxuICAgIGlmIChpc1NuYXBUb0dyaWQpIHtcbiAgICAgIHggLT0gaW5pdGlhbE9mZnNldC54O1xuICAgICAgeSAtPSBpbml0aWFsT2Zmc2V0Lnk7XG4gICAgICAvLyBbeCwgeV0gPSBzbmFwVG9HcmlkKHgsIHkpO1xuICAgICAgeCArPSBpbml0aWFsT2Zmc2V0Lng7XG4gICAgICB5ICs9IGluaXRpYWxPZmZzZXQueTtcbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zZm9ybSxcbiAgICAgIFdlYmtpdFRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3Qge1xuICAgIGl0ZW1UeXBlLFxuICAgIGlzRHJhZ2dpbmcsXG4gICAgaXRlbSxcbiAgICBpbml0aWFsT2Zmc2V0LFxuICAgIGN1cnJlbnRPZmZzZXQsXG4gIH0gPSB1c2VEcmFnTGF5ZXIoKG1vbml0b3IpID0+ICh7XG4gICAgaXRlbTogbW9uaXRvci5nZXRJdGVtKCksXG4gICAgaXRlbVR5cGU6IG1vbml0b3IuZ2V0SXRlbVR5cGUoKSxcbiAgICBpbml0aWFsT2Zmc2V0OiBtb25pdG9yLmdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQoKSxcbiAgICBjdXJyZW50T2Zmc2V0OiBtb25pdG9yLmdldFNvdXJjZUNsaWVudE9mZnNldCgpLFxuICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxuICB9KSk7XG5cbiAgY29uc3QgY29udmVydFRvU3RyaW5nID0gKHN0cmluZzogYW55KSA9PiB7XG4gICAgY29uc3QgbGltaXQgPSAzMDtcbiAgICBjb25zdCBjb252ZXJ0ZWRTdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKTtcbiAgICByZXR1cm4gYCR7Y29udmVydGVkU3RyaW5nLnN1YnN0cmluZygwLCBsaW1pdCl9JHtcbiAgICAgIGNvbnZlcnRlZFN0cmluZy5sZW5ndGggPiBsaW1pdCA/ICcuLi4nIDogJydcbiAgICB9YDtcbiAgfTtcblxuICBjb25zdCBpc1NlbGVjdGVkID0gcHJvcHMubm90ZS5pZCA9PT0gcHJvcHMuY3VycmVudE5vdGU7XG4gIGNvbnNvbGUubG9nKHNob3dEb3RNZW51KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2lzU2VsZWN0ZWQgPyBjbGFzc2VzLmJveFNlbGVjdGVkIDogY2xhc3Nlcy5ib3h9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLnNldEN1cnJlbnROb3RlKHByb3BzLm5vdGUuaWQpfVxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICBzZXRTaG93RG90TWVudSh0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U2hvd0RvdE1lbnUoZmFsc2UpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7cHJvcHMubm90ZS5pc0RlbGV0ZWQgPyAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGVUaXRsZX0+XG4gICAgICAgICAgICAgIHtwcm9wcy5jb252ZXJ0VGl0bGUocHJvcHMubm90ZS5ub3RlVGl0bGUsIDIwKX1cbiAgICAgICAgICAgICAge3Nob3dEb3RNZW51ICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkb3QtbWVudVwiXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgICAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZVBvcG92ZXJDbG9zZX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZVJlc3RvcmV9PlJlc3RvcmU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlTW9kYWxPcGVufT5EZWxldGU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmRvdH0gb25DbGljaz17aGFuZGxlUG9wb3Zlck9wZW59PlxuICAgICAgICAgICAgICAgICAgICA8SGlEb3RzSG9yaXpvbnRhbCAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RlQ29udGVudH0+XG4gICAgICAgICAgICAgIHtjb252ZXJ0VG9TdHJpbmcocHJvcHMubm90ZS5ub3RlKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+XG4gICAgICAgICAgICAgIHtwcm9wcy5mb3JtYXREYXRlKHByb3BzLm5vdGUudXBkYXRlZEF0KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgcmVmPXtkcmFnfSBzdHlsZT17eyBvcGFjaXR5IH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZVRpdGxlfT5cbiAgICAgICAgICAgICAge3Byb3BzLmNvbnZlcnRUaXRsZShwcm9wcy5ub3RlLm5vdGVUaXRsZSwgMjApfVxuICAgICAgICAgICAgICB7c2hvd0RvdE1lbnUgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgICAgICBpZD1cImRvdC1tZW51XCJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICAgICAgICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICAgICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlUG9wb3ZlckNsb3NlfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlTW92ZVRvVHJhc2h9PlxuICAgICAgICAgICAgICAgICAgICAgIE1vdmUgdG8gdHJhc2hcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5kb3R9IG9uQ2xpY2s9e2hhbmRsZVBvcG92ZXJPcGVufT5cbiAgICAgICAgICAgICAgICAgICAgPEhpRG90c0hvcml6b250YWwgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm90ZUNvbnRlbnR9PlxuICAgICAgICAgICAgICB7Y29udmVydFRvU3RyaW5nKHByb3BzLm5vdGUubm90ZSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxuICAgICAgICAgICAgICB7cHJvcHMuZm9ybWF0RGF0ZShwcm9wcy5ub3RlLnVwZGF0ZWRBdCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17bGF5ZXJTdHlsZXN9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e2dldEl0ZW1TdHlsZXMoaW5pdGlhbE9mZnNldCwgY3VycmVudE9mZnNldCwgcHJvcHMuc25hcFRvR3JpZCl9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcmV2aWV3fT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcmV2aWV3SWNvbn0+XG4gICAgICAgICAgICAgIDxCc0Jvb2sgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcmV2aWV3SXRlbX0+e2l0ZW1UeXBlfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/note-list-item.tsx\n");

/***/ })

})
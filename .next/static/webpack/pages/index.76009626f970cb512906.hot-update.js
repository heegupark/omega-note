webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sidebar-item.tsx":
/*!*************************************!*\
  !*** ./components/sidebar-item.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SidebarItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"./node_modules/@material-ui/core/esm/ListItem/index.js\");\n/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ \"./node_modules/@material-ui/core/esm/ListItemIcon/index.js\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"./node_modules/@material-ui/core/esm/ListItemText/index.js\");\n/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ImportContacts */ \"./node_modules/@material-ui/icons/ImportContacts.js\");\n/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Remove */ \"./node_modules/@material-ui/icons/Remove.js\");\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/MoreHoriz */ \"./node_modules/@material-ui/icons/MoreHoriz.js\");\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/esm/Modal/index.js\");\n/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Backdrop */ \"./node_modules/@material-ui/core/esm/Backdrop/index.js\");\n/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Fade */ \"./node_modules/@material-ui/core/esm/Fade/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/sidebar-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    listSelected: {\n      backgroundColor: 'rgb(64,64,64)',\n      borderRadius: '3px',\n      '&:hover': {\n        backgroundColor: 'rgb(51,51,51)',\n        borderRadius: '3px'\n      }\n    },\n    list: {\n      '&:hover': {\n        backgroundColor: 'rgb(51,51,51)',\n        borderRadius: '3px'\n      }\n    },\n    icon: {\n      minWidth: '36px',\n      color: 'rgb(165,165,165)'\n    },\n    removeNotebookIcon: {\n      color: 'red',\n      marginLeft: '20px'\n    },\n    menuNotebookIcon: {\n      color: 'rgb(51,51,51)',\n      marginLeft: '20px'\n    },\n    modal: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    paper: {\n      backgroundColor: 'rgb(222, 222, 222)',\n      boxShadow: theme.shadows[5],\n      padding: '20px',\n      textAlign: 'center',\n      width: '350px',\n      borderRadius: '5px',\n      fontSize: '12px',\n      outline: 'none'\n    },\n    paragraph: {\n      fontSize: '16px',\n      color: 'rgb(66, 54, 48)',\n      marginBottom: '10px',\n      padding: '10px'\n    },\n    button: {\n      height: '30px',\n      margin: '10px 15px'\n    }\n  });\n});\nfunction SidebarItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      removeNotebookButton = _useState[0],\n      setRemoveNotebookButton = _useState[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      openModal = _React$useState2[0],\n      setOpenModal = _React$useState2[1];\n\n  var handleModalClose = function handleModalClose() {\n    setOpenModal(false);\n  };\n\n  var removeNewNotebook = function removeNewNotebook() {\n    setOpenModal(true);\n  };\n\n  var handleDeleteClick = function handleDeleteClick() {\n    props.removeNotebook(props.thisNotebook);\n    handleModalClose();\n  };\n\n  var canMoveNote = function canMoveNote() {\n    console.log('note can be here');\n  };\n\n  var _useDrop = Object(react_dnd__WEBPACK_IMPORTED_MODULE_13__[\"useDrop\"])({\n    accept: 'note',\n    drop: function drop() {\n      return moveNote();\n    },\n    collect: function collect(monitor) {\n      return {\n        isOver: monitor.isOver(),\n        canDrop: monitor.canDrop(),\n        item: monitor.getItem()\n      };\n    }\n  }),\n      _useDrop2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDrop, 2),\n      _useDrop2$ = _useDrop2[0],\n      isOver = _useDrop2$.isOver,\n      canDrop = _useDrop2$.canDrop,\n      item = _useDrop2$.item,\n      drop = _useDrop2[1];\n\n  var moveNote = function moveNote() {\n    console.log(props.thisNotebook);\n    console.log('note got here');\n  };\n\n  var isActive = isOver && canDrop;\n  console.log(item === null || item === void 0 ? void 0 : item.name);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    button: true,\n    key: props.notebooks[props.thisNotebook].id,\n    className: props.notebook === props.thisNotebook ? classes.listSelected : classes.list,\n    onClick: function onClick() {\n      if (!removeNotebookButton) props.handleNotebookClick(props.thisNotebook);\n    },\n    style: {\n      padding: props.open ? '0px 0px 0px 30px' : '0px 15px',\n      backgroundColor: isActive ? 'green' : '',\n      borderRadius: isActive ? '5px' : ''\n    },\n    ref: drop,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: classes.icon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 11\n    }\n  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    primary: props.notebooks[props.thisNotebook].title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onClick: function onClick() {\n      removeNewNotebook();\n    },\n    onMouseOver: function onMouseOver() {\n      return setRemoveNotebookButton(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setRemoveNotebookButton(false);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 9\n    }\n  }, removeNotebookButton && open ? __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    className: classes.removeNotebookIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 13\n    }\n  }) : __jsx(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    className: classes.menuNotebookIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 13\n    }\n  }))), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    className: classes.modal,\n    open: openModal,\n    closeAfterTransition: true,\n    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    BackdropProps: {\n      timeout: 500\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    \"in\": openModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.paragraph,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 13\n    }\n  }, \"This will delete the folder and move all notes in this folder to trash.\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"secondary\",\n    onClick: handleDeleteClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 13\n    }\n  }, \"Delete\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"default\",\n    onClick: handleModalClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 182,\n      columnNumber: 13\n    }\n  }, \"Cancel\")))));\n}\n\n_s(SidebarItem, \"IpT6iq7anfc7kj2t4I41F6Ll73I=\", false, function () {\n  return [useStyles, react_dnd__WEBPACK_IMPORTED_MODULE_13__[\"useDrop\"]];\n});\n\n_c = SidebarItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"SidebarItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLWl0ZW0udHN4P2NiYjYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwibGlzdFNlbGVjdGVkIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwibGlzdCIsImljb24iLCJtaW5XaWR0aCIsImNvbG9yIiwicmVtb3ZlTm90ZWJvb2tJY29uIiwibWFyZ2luTGVmdCIsIm1lbnVOb3RlYm9va0ljb24iLCJtb2RhbCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYXBlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwid2lkdGgiLCJmb250U2l6ZSIsIm91dGxpbmUiLCJwYXJhZ3JhcGgiLCJtYXJnaW5Cb3R0b20iLCJidXR0b24iLCJoZWlnaHQiLCJtYXJnaW4iLCJTaWRlYmFySXRlbSIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwicmVtb3ZlTm90ZWJvb2tCdXR0b24iLCJzZXRSZW1vdmVOb3RlYm9va0J1dHRvbiIsIlJlYWN0Iiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwiaGFuZGxlTW9kYWxDbG9zZSIsInJlbW92ZU5ld05vdGVib29rIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJyZW1vdmVOb3RlYm9vayIsInRoaXNOb3RlYm9vayIsImNhbk1vdmVOb3RlIiwiY29uc29sZSIsImxvZyIsInVzZURyb3AiLCJhY2NlcHQiLCJkcm9wIiwibW92ZU5vdGUiLCJjb2xsZWN0IiwibW9uaXRvciIsImlzT3ZlciIsImNhbkRyb3AiLCJpdGVtIiwiZ2V0SXRlbSIsImlzQWN0aXZlIiwibmFtZSIsIm5vdGVib29rcyIsImlkIiwibm90ZWJvb2siLCJoYW5kbGVOb3RlYm9va0NsaWNrIiwib3BlbiIsInRpdGxlIiwiQmFja2Ryb3AiLCJ0aW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxnQkFBWSxFQUFFO0FBQ1pDLHFCQUFlLEVBQUUsZUFETDtBQUVaQyxrQkFBWSxFQUFFLEtBRkY7QUFHWixpQkFBVztBQUNURCx1QkFBZSxFQUFFLGVBRFI7QUFFVEMsb0JBQVksRUFBRTtBQUZMO0FBSEMsS0FESDtBQVNYQyxRQUFJLEVBQUU7QUFDSixpQkFBVztBQUNURix1QkFBZSxFQUFFLGVBRFI7QUFFVEMsb0JBQVksRUFBRTtBQUZMO0FBRFAsS0FUSztBQWVYRSxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLE1BRE47QUFFSkMsV0FBSyxFQUFFO0FBRkgsS0FmSztBQW1CWEMsc0JBQWtCLEVBQUU7QUFDbEJELFdBQUssRUFBRSxLQURXO0FBRWxCRSxnQkFBVSxFQUFFO0FBRk0sS0FuQlQ7QUF1QlhDLG9CQUFnQixFQUFFO0FBQ2hCSCxXQUFLLEVBQUUsZUFEUztBQUVoQkUsZ0JBQVUsRUFBRTtBQUZJLEtBdkJQO0FBMkJYRSxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEMsZ0JBQVUsRUFBRSxRQUZQO0FBR0xDLG9CQUFjLEVBQUU7QUFIWCxLQTNCSTtBQWdDWEMsU0FBSyxFQUFFO0FBQ0xiLHFCQUFlLEVBQUUsb0JBRFo7QUFFTGMsZUFBUyxFQUFFakIsS0FBSyxDQUFDa0IsT0FBTixDQUFjLENBQWQsQ0FGTjtBQUdMQyxhQUFPLEVBQUUsTUFISjtBQUlMQyxlQUFTLEVBQUUsUUFKTjtBQUtMQyxXQUFLLEVBQUUsT0FMRjtBQU1MakIsa0JBQVksRUFBRSxLQU5UO0FBT0xrQixjQUFRLEVBQUUsTUFQTDtBQVFMQyxhQUFPLEVBQUU7QUFSSixLQWhDSTtBQTBDWEMsYUFBUyxFQUFFO0FBQ1RGLGNBQVEsRUFBRSxNQUREO0FBRVRkLFdBQUssRUFBRSxpQkFGRTtBQUdUaUIsa0JBQVksRUFBRSxNQUhMO0FBSVROLGFBQU8sRUFBRTtBQUpBLEtBMUNBO0FBZ0RYTyxVQUFNLEVBQUU7QUFDTkMsWUFBTSxFQUFFLE1BREY7QUFFTkMsWUFBTSxFQUFFO0FBRkY7QUFoREcsR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1QjtBQStEZSxTQUFTQyxXQUFULENBQXFCQyxLQUFyQixFQUE4QztBQUFBOztBQUMzRCxNQUFNQyxPQUFPLEdBQUdqQyxTQUFTLEVBQXpCOztBQUQyRCxrQkFFSGtDLHNEQUFRLENBQzlELEtBRDhELENBRkw7QUFBQSxNQUVwREMsb0JBRm9EO0FBQUEsTUFFOUJDLHVCQUY4Qjs7QUFBQSx3QkFLekJDLDRDQUFLLENBQUNILFFBQU4sQ0FBZSxLQUFmLENBTHlCO0FBQUE7QUFBQSxNQUtwREksU0FMb0Q7QUFBQSxNQUt6Q0MsWUFMeUM7O0FBTzNELE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QkQsZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRCxHQUZEOztBQUlBLE1BQU1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QkYsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxHQUZEOztBQUlBLE1BQU1HLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QlYsU0FBSyxDQUFDVyxjQUFOLENBQXFCWCxLQUFLLENBQUNZLFlBQTNCO0FBQ0FKLG9CQUFnQjtBQUNqQixHQUhEOztBQUtBLE1BQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0QsR0FGRDs7QUFwQjJELGlCQXdCakJDLDBEQUFPLENBQUM7QUFDaERDLFVBQU0sRUFBRSxNQUR3QztBQUVoREMsUUFBSSxFQUFFO0FBQUEsYUFBTUMsUUFBUSxFQUFkO0FBQUEsS0FGMEM7QUFHaERDLFdBQU8sRUFBRSxpQkFBQ0MsT0FBRDtBQUFBLGFBQWM7QUFDckJDLGNBQU0sRUFBRUQsT0FBTyxDQUFDQyxNQUFSLEVBRGE7QUFFckJDLGVBQU8sRUFBRUYsT0FBTyxDQUFDRSxPQUFSLEVBRlk7QUFHckJDLFlBQUksRUFBRUgsT0FBTyxDQUFDSSxPQUFSO0FBSGUsT0FBZDtBQUFBO0FBSHVDLEdBQUQsQ0F4QlU7QUFBQTtBQUFBO0FBQUEsTUF3QmxESCxNQXhCa0QsY0F3QmxEQSxNQXhCa0Q7QUFBQSxNQXdCMUNDLE9BeEIwQyxjQXdCMUNBLE9BeEIwQztBQUFBLE1Bd0JqQ0MsSUF4QmlDLGNBd0JqQ0EsSUF4QmlDO0FBQUEsTUF3QnpCTixJQXhCeUI7O0FBa0MzRCxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCTCxXQUFPLENBQUNDLEdBQVIsQ0FBWWYsS0FBSyxDQUFDWSxZQUFsQjtBQUNBRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0QsR0FIRDs7QUFLQSxNQUFNVyxRQUFRLEdBQUdKLE1BQU0sSUFBSUMsT0FBM0I7QUFDQVQsU0FBTyxDQUFDQyxHQUFSLENBQVlTLElBQVosYUFBWUEsSUFBWix1QkFBWUEsSUFBSSxDQUFFRyxJQUFsQjtBQUNBLFNBQ0UsbUVBQ0UsTUFBQyxrRUFBRDtBQUNFLFVBQU0sTUFEUjtBQUVFLE9BQUcsRUFBRTNCLEtBQUssQ0FBQzRCLFNBQU4sQ0FBZ0I1QixLQUFLLENBQUNZLFlBQXRCLEVBQW9DaUIsRUFGM0M7QUFHRSxhQUFTLEVBQ1A3QixLQUFLLENBQUM4QixRQUFOLEtBQW1COUIsS0FBSyxDQUFDWSxZQUF6QixHQUNJWCxPQUFPLENBQUM3QixZQURaLEdBRUk2QixPQUFPLENBQUMxQixJQU5oQjtBQVFFLFdBQU8sRUFBRSxtQkFBTTtBQUNiLFVBQUksQ0FBQzRCLG9CQUFMLEVBQ0VILEtBQUssQ0FBQytCLG1CQUFOLENBQTBCL0IsS0FBSyxDQUFDWSxZQUFoQztBQUNILEtBWEg7QUFZRSxTQUFLLEVBQUU7QUFDTHZCLGFBQU8sRUFBRVcsS0FBSyxDQUFDZ0MsSUFBTixHQUFhLGtCQUFiLEdBQWtDLFVBRHRDO0FBRUwzRCxxQkFBZSxFQUFFcUQsUUFBUSxHQUFHLE9BQUgsR0FBYSxFQUZqQztBQUdMcEQsa0JBQVksRUFBRW9ELFFBQVEsR0FBRyxLQUFILEdBQVc7QUFINUIsS0FaVDtBQWlCRSxPQUFHLEVBQUVSLElBakJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FtQkUsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3RUFBRDtBQUFvQixhQUFTLEVBQUVqQixPQUFPLENBQUN6QixJQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FuQkYsRUFzQkUsTUFBQyxzRUFBRDtBQUFjLFdBQU8sRUFBRXdCLEtBQUssQ0FBQzRCLFNBQU4sQ0FBZ0I1QixLQUFLLENBQUNZLFlBQXRCLEVBQW9DcUIsS0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCRixFQXVCRSxNQUFDLHNFQUFEO0FBQ0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2J4Qix1QkFBaUI7QUFDbEIsS0FISDtBQUlFLGVBQVcsRUFBRTtBQUFBLGFBQU1MLHVCQUF1QixDQUFDLElBQUQsQ0FBN0I7QUFBQSxLQUpmO0FBS0UsZ0JBQVksRUFBRTtBQUFBLGFBQU1BLHVCQUF1QixDQUFDLEtBQUQsQ0FBN0I7QUFBQSxLQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dELG9CQUFvQixJQUFJNkIsSUFBeEIsR0FDQyxNQUFDLGdFQUFEO0FBQVksYUFBUyxFQUFFL0IsT0FBTyxDQUFDdEIsa0JBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxHQUdDLE1BQUMsbUVBQUQ7QUFBZSxhQUFTLEVBQUVzQixPQUFPLENBQUNwQixnQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLENBdkJGLENBREYsRUFzQ0UsTUFBQywrREFBRDtBQUNFLGFBQVMsRUFBRW9CLE9BQU8sQ0FBQ25CLEtBRHJCO0FBRUUsUUFBSSxFQUFFd0IsU0FGUjtBQUdFLHdCQUFvQixNQUh0QjtBQUlFLHFCQUFpQixFQUFFNEIsbUVBSnJCO0FBS0UsaUJBQWEsRUFBRTtBQUNiQyxhQUFPLEVBQUU7QUFESSxLQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0UsTUFBQywrREFBRDtBQUFNLFVBQUk3QixTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUwsT0FBTyxDQUFDZixLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVlLE9BQU8sQ0FBQ1AsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrRUFERixFQUtFLE1BQUMsaUVBQUQ7QUFDRSxhQUFTLEVBQUVPLE9BQU8sQ0FBQ0wsTUFEckI7QUFFRSxXQUFPLEVBQUMsVUFGVjtBQUdFLFNBQUssRUFBQyxXQUhSO0FBSUUsV0FBTyxFQUFFYyxpQkFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsRUFhRSxNQUFDLGlFQUFEO0FBQ0UsYUFBUyxFQUFFVCxPQUFPLENBQUNMLE1BRHJCO0FBRUUsV0FBTyxFQUFDLFVBRlY7QUFHRSxTQUFLLEVBQUMsU0FIUjtBQUlFLFdBQU8sRUFBRVksZ0JBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLENBREYsQ0FURixDQXRDRixDQURGO0FBMkVEOztHQXBIdUJULFc7VUFDTi9CLFMsRUF1QjBCZ0Qsa0Q7OztLQXhCcEJqQixXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zaWRlYmFyLWl0ZW0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEltcG9ydENvbnRhY3RzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW1wb3J0Q29udGFjdHMnO1xuaW1wb3J0IElNYWluUHJvcHMgZnJvbSAnLi9pbnRlcmZhY2VzL2ltYWlucHJvcHMnO1xuaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZSc7XG5pbXBvcnQgTW9yZUhvcml6SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZUhvcml6JztcbmltcG9ydCBNb2RhbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbCc7XG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AnO1xuaW1wb3J0IEZhZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFkZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgeyB1c2VEcm9wLCBEcm9wVGFyZ2V0IH0gZnJvbSAncmVhY3QtZG5kJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIGxpc3RTZWxlY3RlZDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDY0LDY0LDY0KScsXG4gICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICBtaW5XaWR0aDogJzM2cHgnLFxuICAgICAgY29sb3I6ICdyZ2IoMTY1LDE2NSwxNjUpJyxcbiAgICB9LFxuICAgIHJlbW92ZU5vdGVib29rSWNvbjoge1xuICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgbWFyZ2luTGVmdDogJzIwcHgnLFxuICAgIH0sXG4gICAgbWVudU5vdGVib29rSWNvbjoge1xuICAgICAgY29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgIG1hcmdpbkxlZnQ6ICcyMHB4JyxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIHBhcGVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjIyLCAyMjIsIDIyMiknLFxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxuICAgICAgcGFkZGluZzogJzIwcHgnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMzUwcHgnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgfSxcbiAgICBwYXJhZ3JhcGg6IHtcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICBjb2xvcjogJ3JnYig2NiwgNTQsIDQ4KScsXG4gICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICBtYXJnaW46ICcxMHB4IDE1cHgnLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5pbnRlcmZhY2UgU2lkZWJhckl0ZW1Qcm9wcyBleHRlbmRzIElNYWluUHJvcHMge1xuICB0aGlzTm90ZWJvb2s6IHN0cmluZztcbiAgb3BlbjogYm9vbGVhbjtcbiAgaGFuZGxlTm90ZWJvb2tDbGljazogKG5vdGVib29rOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHJlbW92ZU5vdGVib29rOiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhckl0ZW0ocHJvcHM6IFNpZGViYXJJdGVtUHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbcmVtb3ZlTm90ZWJvb2tCdXR0b24sIHNldFJlbW92ZU5vdGVib29rQnV0dG9uXSA9IHVzZVN0YXRlPGJvb2xlYW4+KFxuICAgIGZhbHNlXG4gICk7XG4gIGNvbnN0IFtvcGVuTW9kYWwsIHNldE9wZW5Nb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlTW9kYWxDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuTW9kYWwoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZU5ld05vdGVib29rID0gKCkgPT4ge1xuICAgIHNldE9wZW5Nb2RhbCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVDbGljayA9ICgpID0+IHtcbiAgICBwcm9wcy5yZW1vdmVOb3RlYm9vayhwcm9wcy50aGlzTm90ZWJvb2spO1xuICAgIGhhbmRsZU1vZGFsQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBjYW5Nb3ZlTm90ZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnbm90ZSBjYW4gYmUgaGVyZScpO1xuICB9O1xuXG4gIGNvbnN0IFt7IGlzT3ZlciwgY2FuRHJvcCwgaXRlbSB9LCBkcm9wXSA9IHVzZURyb3Aoe1xuICAgIGFjY2VwdDogJ25vdGUnLFxuICAgIGRyb3A6ICgpID0+IG1vdmVOb3RlKCksXG4gICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XG4gICAgICBpc092ZXI6IG1vbml0b3IuaXNPdmVyKCksXG4gICAgICBjYW5Ecm9wOiBtb25pdG9yLmNhbkRyb3AoKSxcbiAgICAgIGl0ZW06IG1vbml0b3IuZ2V0SXRlbSgpLFxuICAgIH0pLFxuICB9KTtcblxuICBjb25zdCBtb3ZlTm90ZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9wcy50aGlzTm90ZWJvb2spO1xuICAgIGNvbnNvbGUubG9nKCdub3RlIGdvdCBoZXJlJyk7XG4gIH07XG5cbiAgY29uc3QgaXNBY3RpdmUgPSBpc092ZXIgJiYgY2FuRHJvcDtcbiAgY29uc29sZS5sb2coaXRlbT8ubmFtZSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaXN0SXRlbVxuICAgICAgICBidXR0b25cbiAgICAgICAga2V5PXtwcm9wcy5ub3RlYm9va3NbcHJvcHMudGhpc05vdGVib29rXS5pZH1cbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICBwcm9wcy5ub3RlYm9vayA9PT0gcHJvcHMudGhpc05vdGVib29rXG4gICAgICAgICAgICA/IGNsYXNzZXMubGlzdFNlbGVjdGVkXG4gICAgICAgICAgICA6IGNsYXNzZXMubGlzdFxuICAgICAgICB9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAoIXJlbW92ZU5vdGVib29rQnV0dG9uKVxuICAgICAgICAgICAgcHJvcHMuaGFuZGxlTm90ZWJvb2tDbGljayhwcm9wcy50aGlzTm90ZWJvb2spO1xuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmc6IHByb3BzLm9wZW4gPyAnMHB4IDBweCAwcHggMzBweCcgOiAnMHB4IDE1cHgnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNBY3RpdmUgPyAnZ3JlZW4nIDogJycsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBpc0FjdGl2ZSA/ICc1cHgnIDogJycsXG4gICAgICAgIH19XG4gICAgICAgIHJlZj17ZHJvcH1cbiAgICAgID5cbiAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICA8SW1wb3J0Q29udGFjdHNJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPlxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtwcm9wcy5ub3RlYm9va3NbcHJvcHMudGhpc05vdGVib29rXS50aXRsZX0gLz5cbiAgICAgICAgPExpc3RJdGVtSWNvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZU5ld05vdGVib29rKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0UmVtb3ZlTm90ZWJvb2tCdXR0b24odHJ1ZSl9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRSZW1vdmVOb3RlYm9va0J1dHRvbihmYWxzZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7cmVtb3ZlTm90ZWJvb2tCdXR0b24gJiYgb3BlbiA/IChcbiAgICAgICAgICAgIDxSZW1vdmVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZW1vdmVOb3RlYm9va0ljb259IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxNb3JlSG9yaXpJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51Tm90ZWJvb2tJY29ufSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgPC9MaXN0SXRlbT5cbiAgICAgIDxNb2RhbFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XG4gICAgICAgIG9wZW49e29wZW5Nb2RhbH1cbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XG4gICAgICAgICAgdGltZW91dDogNTAwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8RmFkZSBpbj17b3Blbk1vZGFsfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgICAgICBUaGlzIHdpbGwgZGVsZXRlIHRoZSBmb2xkZXIgYW5kIG1vdmUgYWxsIG5vdGVzIGluIHRoaXMgZm9sZGVyIHRvXG4gICAgICAgICAgICAgIHRyYXNoLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGVsZXRlQ2xpY2t9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1vZGFsQ2xvc2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sidebar-item.tsx\n");

/***/ })

})
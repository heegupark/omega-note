webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sidebar-item.tsx":
/*!*************************************!*\
  !*** ./components/sidebar-item.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SidebarItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"./node_modules/@material-ui/core/esm/ListItem/index.js\");\n/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ \"./node_modules/@material-ui/core/esm/ListItemIcon/index.js\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"./node_modules/@material-ui/core/esm/ListItemText/index.js\");\n/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ImportContacts */ \"./node_modules/@material-ui/icons/ImportContacts.js\");\n/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Remove */ \"./node_modules/@material-ui/icons/Remove.js\");\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/MoreHoriz */ \"./node_modules/@material-ui/icons/MoreHoriz.js\");\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/esm/Modal/index.js\");\n/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Backdrop */ \"./node_modules/@material-ui/core/esm/Backdrop/index.js\");\n/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Fade */ \"./node_modules/@material-ui/core/esm/Fade/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/sidebar-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    listSelected: {\n      backgroundColor: 'rgb(64,64,64)',\n      borderRadius: '3px',\n      '&:hover': {\n        backgroundColor: 'rgb(51,51,51)',\n        borderRadius: '3px'\n      }\n    },\n    list: {\n      '&:hover': {\n        backgroundColor: 'rgb(51,51,51)',\n        borderRadius: '3px'\n      }\n    },\n    icon: {\n      minWidth: '36px',\n      color: 'rgb(165,165,165)'\n    },\n    removeNotebookIcon: {\n      color: 'red',\n      marginLeft: '20px'\n    },\n    menuNotebookIcon: {\n      color: 'rgb(51,51,51)',\n      marginLeft: '20px'\n    },\n    modal: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    paper: {\n      backgroundColor: 'rgb(222, 222, 222)',\n      boxShadow: theme.shadows[5],\n      padding: theme.spacing(1, 2, 2),\n      textAlign: 'center',\n      width: '350px',\n      borderRadius: '5px',\n      fontSize: '12px',\n      outline: 'none'\n    },\n    paragraph: {\n      fontSize: '12px',\n      color: 'rgb(66, 54, 48)',\n      marginBottom: '5px'\n    },\n    button: {\n      height: '30px',\n      marginTop: '10px',\n      marginBottom: '5px'\n    }\n  });\n});\nfunction SidebarItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      removeNotebookButton = _useState[0],\n      setRemoveNotebookButton = _useState[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      open = _React$useState2[0],\n      setOpen = _React$useState2[1];\n\n  var handleClose = function handleClose() {\n    setOpen(false);\n  };\n\n  var removeNewNotebook = function removeNewNotebook() {\n    setOpen(true);\n  };\n\n  var handleDeleteClick = function handleDeleteClick() {\n    props.removeNotebook(props.thisNotebook);\n    handleClose();\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    button: true,\n    key: props.notebooks[props.thisNotebook].id,\n    className: props.notebook === props.thisNotebook ? classes.listSelected : classes.list,\n    onClick: function onClick() {\n      if (!removeNotebookButton) props.handleNotebookClick(props.thisNotebook);\n    },\n    style: {\n      padding: props.open ? '0px 0px 0px 30px' : '0px 15px'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: classes.icon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 11\n    }\n  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    primary: props.notebooks[props.thisNotebook].title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onClick: function onClick() {\n      removeNewNotebook();\n    },\n    onMouseOver: function onMouseOver() {\n      return setRemoveNotebookButton(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setRemoveNotebookButton(false);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 9\n    }\n  }, removeNotebookButton && open ? __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    className: classes.removeNotebookIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 13\n    }\n  }) : __jsx(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    className: classes.menuNotebookIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 13\n    }\n  }))), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    className: classes.modal,\n    open: open,\n    closeAfterTransition: true,\n    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    BackdropProps: {\n      timeout: 500\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    \"in\": open,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.paragraph,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 13\n    }\n  }, \"This will delete the folder and move all notes in this folder to trash.\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"secondary\",\n    onClick: handleDeleteClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 13\n    }\n  }, \"Accept\")))));\n}\n\n_s(SidebarItem, \"994wiKtppx25XJgC2zbHxpcdmss=\", false, function () {\n  return [useStyles];\n});\n\n_c = SidebarItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"SidebarItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLWl0ZW0udHN4P2NiYjYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwibGlzdFNlbGVjdGVkIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwibGlzdCIsImljb24iLCJtaW5XaWR0aCIsImNvbG9yIiwicmVtb3ZlTm90ZWJvb2tJY29uIiwibWFyZ2luTGVmdCIsIm1lbnVOb3RlYm9va0ljb24iLCJtb2RhbCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYXBlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nIiwic3BhY2luZyIsInRleHRBbGlnbiIsIndpZHRoIiwiZm9udFNpemUiLCJvdXRsaW5lIiwicGFyYWdyYXBoIiwibWFyZ2luQm90dG9tIiwiYnV0dG9uIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwiU2lkZWJhckl0ZW0iLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsInJlbW92ZU5vdGVib29rQnV0dG9uIiwic2V0UmVtb3ZlTm90ZWJvb2tCdXR0b24iLCJSZWFjdCIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xvc2UiLCJyZW1vdmVOZXdOb3RlYm9vayIsImhhbmRsZURlbGV0ZUNsaWNrIiwicmVtb3ZlTm90ZWJvb2siLCJ0aGlzTm90ZWJvb2siLCJub3RlYm9va3MiLCJpZCIsIm5vdGVib29rIiwiaGFuZGxlTm90ZWJvb2tDbGljayIsInRpdGxlIiwiQmFja2Ryb3AiLCJ0aW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxnQkFBWSxFQUFFO0FBQ1pDLHFCQUFlLEVBQUUsZUFETDtBQUVaQyxrQkFBWSxFQUFFLEtBRkY7QUFHWixpQkFBVztBQUNURCx1QkFBZSxFQUFFLGVBRFI7QUFFVEMsb0JBQVksRUFBRTtBQUZMO0FBSEMsS0FESDtBQVNYQyxRQUFJLEVBQUU7QUFDSixpQkFBVztBQUNURix1QkFBZSxFQUFFLGVBRFI7QUFFVEMsb0JBQVksRUFBRTtBQUZMO0FBRFAsS0FUSztBQWVYRSxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLE1BRE47QUFFSkMsV0FBSyxFQUFFO0FBRkgsS0FmSztBQW1CWEMsc0JBQWtCLEVBQUU7QUFDbEJELFdBQUssRUFBRSxLQURXO0FBRWxCRSxnQkFBVSxFQUFFO0FBRk0sS0FuQlQ7QUF1QlhDLG9CQUFnQixFQUFFO0FBQ2hCSCxXQUFLLEVBQUUsZUFEUztBQUVoQkUsZ0JBQVUsRUFBRTtBQUZJLEtBdkJQO0FBMkJYRSxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEMsZ0JBQVUsRUFBRSxRQUZQO0FBR0xDLG9CQUFjLEVBQUU7QUFIWCxLQTNCSTtBQWdDWEMsU0FBSyxFQUFFO0FBQ0xiLHFCQUFlLEVBQUUsb0JBRFo7QUFFTGMsZUFBUyxFQUFFakIsS0FBSyxDQUFDa0IsT0FBTixDQUFjLENBQWQsQ0FGTjtBQUdMQyxhQUFPLEVBQUVuQixLQUFLLENBQUNvQixPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUhKO0FBSUxDLGVBQVMsRUFBRSxRQUpOO0FBS0xDLFdBQUssRUFBRSxPQUxGO0FBTUxsQixrQkFBWSxFQUFFLEtBTlQ7QUFPTG1CLGNBQVEsRUFBRSxNQVBMO0FBUUxDLGFBQU8sRUFBRTtBQVJKLEtBaENJO0FBMENYQyxhQUFTLEVBQUU7QUFDVEYsY0FBUSxFQUFFLE1BREQ7QUFFVGYsV0FBSyxFQUFFLGlCQUZFO0FBR1RrQixrQkFBWSxFQUFFO0FBSEwsS0ExQ0E7QUErQ1hDLFVBQU0sRUFBRTtBQUNOQyxZQUFNLEVBQUUsTUFERjtBQUVOQyxlQUFTLEVBQUUsTUFGTDtBQUdOSCxrQkFBWSxFQUFFO0FBSFI7QUEvQ0csR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1QjtBQStEZSxTQUFTSSxXQUFULENBQXFCQyxLQUFyQixFQUE4QztBQUFBOztBQUMzRCxNQUFNQyxPQUFPLEdBQUdsQyxTQUFTLEVBQXpCOztBQUQyRCxrQkFFSG1DLHNEQUFRLENBQzlELEtBRDhELENBRkw7QUFBQSxNQUVwREMsb0JBRm9EO0FBQUEsTUFFOUJDLHVCQUY4Qjs7QUFBQSx3QkFLbkNDLDRDQUFLLENBQUNILFFBQU4sQ0FBZSxLQUFmLENBTG1DO0FBQUE7QUFBQSxNQUtwREksSUFMb0Q7QUFBQSxNQUs5Q0MsT0FMOEM7O0FBTzNELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJELFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QkYsV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBTUcsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCVixTQUFLLENBQUNXLGNBQU4sQ0FBcUJYLEtBQUssQ0FBQ1ksWUFBM0I7QUFDQUosZUFBVztBQUNaLEdBSEQ7O0FBS0EsU0FDRSxtRUFDRSxNQUFDLGtFQUFEO0FBQ0UsVUFBTSxNQURSO0FBRUUsT0FBRyxFQUFFUixLQUFLLENBQUNhLFNBQU4sQ0FBZ0JiLEtBQUssQ0FBQ1ksWUFBdEIsRUFBb0NFLEVBRjNDO0FBR0UsYUFBUyxFQUNQZCxLQUFLLENBQUNlLFFBQU4sS0FBbUJmLEtBQUssQ0FBQ1ksWUFBekIsR0FDSVgsT0FBTyxDQUFDOUIsWUFEWixHQUVJOEIsT0FBTyxDQUFDM0IsSUFOaEI7QUFRRSxXQUFPLEVBQUUsbUJBQU07QUFDYixVQUFJLENBQUM2QixvQkFBTCxFQUNFSCxLQUFLLENBQUNnQixtQkFBTixDQUEwQmhCLEtBQUssQ0FBQ1ksWUFBaEM7QUFDSCxLQVhIO0FBWUUsU0FBSyxFQUFFO0FBQ0x4QixhQUFPLEVBQUVZLEtBQUssQ0FBQ00sSUFBTixHQUFhLGtCQUFiLEdBQWtDO0FBRHRDLEtBWlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWdCRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdFQUFEO0FBQW9CLGFBQVMsRUFBRUwsT0FBTyxDQUFDMUIsSUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBaEJGLEVBbUJFLE1BQUMsc0VBQUQ7QUFBYyxXQUFPLEVBQUV5QixLQUFLLENBQUNhLFNBQU4sQ0FBZ0JiLEtBQUssQ0FBQ1ksWUFBdEIsRUFBb0NLLEtBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkYsRUFvQkUsTUFBQyxzRUFBRDtBQUNFLFdBQU8sRUFBRSxtQkFBTTtBQUNiUix1QkFBaUI7QUFDbEIsS0FISDtBQUlFLGVBQVcsRUFBRTtBQUFBLGFBQU1MLHVCQUF1QixDQUFDLElBQUQsQ0FBN0I7QUFBQSxLQUpmO0FBS0UsZ0JBQVksRUFBRTtBQUFBLGFBQU1BLHVCQUF1QixDQUFDLEtBQUQsQ0FBN0I7QUFBQSxLQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dELG9CQUFvQixJQUFJRyxJQUF4QixHQUNDLE1BQUMsZ0VBQUQ7QUFBWSxhQUFTLEVBQUVMLE9BQU8sQ0FBQ3ZCLGtCQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsR0FHQyxNQUFDLG1FQUFEO0FBQWUsYUFBUyxFQUFFdUIsT0FBTyxDQUFDckIsZ0JBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixDQXBCRixDQURGLEVBbUNFLE1BQUMsK0RBQUQ7QUFDRSxhQUFTLEVBQUVxQixPQUFPLENBQUNwQixLQURyQjtBQUVFLFFBQUksRUFBRXlCLElBRlI7QUFHRSx3QkFBb0IsTUFIdEI7QUFJRSxxQkFBaUIsRUFBRVksbUVBSnJCO0FBS0UsaUJBQWEsRUFBRTtBQUNiQyxhQUFPLEVBQUU7QUFESSxLQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0UsTUFBQywrREFBRDtBQUFNLFVBQUliLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFTCxPQUFPLENBQUNoQixLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVnQixPQUFPLENBQUNQLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0VBREYsRUFLRSxNQUFDLGlFQUFEO0FBQ0UsYUFBUyxFQUFFTyxPQUFPLENBQUNMLE1BRHJCO0FBRUUsV0FBTyxFQUFDLFVBRlY7QUFHRSxTQUFLLEVBQUMsV0FIUjtBQUlFLFdBQU8sRUFBRWMsaUJBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLENBREYsQ0FURixDQW5DRixDQURGO0FBZ0VEOztHQXBGdUJYLFc7VUFDTmhDLFM7OztLQURNZ0MsVyIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2lkZWJhci1pdGVtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBJbXBvcnRDb250YWN0c0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ltcG9ydENvbnRhY3RzJztcbmltcG9ydCBJTWFpblByb3BzIGZyb20gJy4vaW50ZXJmYWNlcy9pbWFpbnByb3BzJztcbmltcG9ydCBSZW1vdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZW1vdmUnO1xuaW1wb3J0IE1vcmVIb3Jpekljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVIb3Jpeic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWwnO1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJztcbmltcG9ydCBGYWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhZGUnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgbGlzdFNlbGVjdGVkOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNjQsNjQsNjQpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbGlzdDoge1xuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIG1pbldpZHRoOiAnMzZweCcsXG4gICAgICBjb2xvcjogJ3JnYigxNjUsMTY1LDE2NSknLFxuICAgIH0sXG4gICAgcmVtb3ZlTm90ZWJvb2tJY29uOiB7XG4gICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICBtYXJnaW5MZWZ0OiAnMjBweCcsXG4gICAgfSxcbiAgICBtZW51Tm90ZWJvb2tJY29uOiB7XG4gICAgICBjb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgbWFyZ2luTGVmdDogJzIwcHgnLFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgcGFwZXI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMjIsIDIyMiwgMjIyKScsXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDIsIDIpLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMzUwcHgnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgfSxcbiAgICBwYXJhZ3JhcGg6IHtcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICBjb2xvcjogJ3JnYig2NiwgNTQsIDQ4KScsXG4gICAgICBtYXJnaW5Cb3R0b206ICc1cHgnLFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICAgIG1hcmdpblRvcDogJzEwcHgnLFxuICAgICAgbWFyZ2luQm90dG9tOiAnNXB4JyxcbiAgICB9LFxuICB9KVxuKTtcblxuaW50ZXJmYWNlIFNpZGViYXJJdGVtUHJvcHMgZXh0ZW5kcyBJTWFpblByb3BzIHtcbiAgdGhpc05vdGVib29rOiBzdHJpbmc7XG4gIG9wZW46IGJvb2xlYW47XG4gIGhhbmRsZU5vdGVib29rQ2xpY2s6IChub3RlYm9vazogc3RyaW5nKSA9PiB2b2lkO1xuICByZW1vdmVOb3RlYm9vazogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXJJdGVtKHByb3BzOiBTaWRlYmFySXRlbVByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3JlbW92ZU5vdGVib29rQnV0dG9uLCBzZXRSZW1vdmVOb3RlYm9va0J1dHRvbl0gPSB1c2VTdGF0ZTxib29sZWFuPihcbiAgICBmYWxzZVxuICApO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlTmV3Tm90ZWJvb2sgPSAoKSA9PiB7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVDbGljayA9ICgpID0+IHtcbiAgICBwcm9wcy5yZW1vdmVOb3RlYm9vayhwcm9wcy50aGlzTm90ZWJvb2spO1xuICAgIGhhbmRsZUNsb3NlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpc3RJdGVtXG4gICAgICAgIGJ1dHRvblxuICAgICAgICBrZXk9e3Byb3BzLm5vdGVib29rc1twcm9wcy50aGlzTm90ZWJvb2tdLmlkfVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIHByb3BzLm5vdGVib29rID09PSBwcm9wcy50aGlzTm90ZWJvb2tcbiAgICAgICAgICAgID8gY2xhc3Nlcy5saXN0U2VsZWN0ZWRcbiAgICAgICAgICAgIDogY2xhc3Nlcy5saXN0XG4gICAgICAgIH1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGlmICghcmVtb3ZlTm90ZWJvb2tCdXR0b24pXG4gICAgICAgICAgICBwcm9wcy5oYW5kbGVOb3RlYm9va0NsaWNrKHByb3BzLnRoaXNOb3RlYm9vayk7XG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZzogcHJvcHMub3BlbiA/ICcwcHggMHB4IDBweCAzMHB4JyA6ICcwcHggMTVweCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgPEltcG9ydENvbnRhY3RzSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cbiAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17cHJvcHMubm90ZWJvb2tzW3Byb3BzLnRoaXNOb3RlYm9va10udGl0bGV9IC8+XG4gICAgICAgIDxMaXN0SXRlbUljb25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVOZXdOb3RlYm9vaygpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldFJlbW92ZU5vdGVib29rQnV0dG9uKHRydWUpfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0UmVtb3ZlTm90ZWJvb2tCdXR0b24oZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAge3JlbW92ZU5vdGVib29rQnV0dG9uICYmIG9wZW4gPyAoXG4gICAgICAgICAgICA8UmVtb3ZlSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMucmVtb3ZlTm90ZWJvb2tJY29ufSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TW9yZUhvcml6SWNvbiBjbGFzc05hbWU9e2NsYXNzZXMubWVudU5vdGVib29rSWNvbn0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICA8TW9kYWxcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxGYWRlIGluPXtvcGVufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgICAgICBUaGlzIHdpbGwgZGVsZXRlIHRoZSBmb2xkZXIgYW5kIG1vdmUgYWxsIG5vdGVzIGluIHRoaXMgZm9sZGVyIHRvXG4gICAgICAgICAgICAgIHRyYXNoLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGVsZXRlQ2xpY2t9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFjY2VwdFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sidebar-item.tsx\n");

/***/ })

})
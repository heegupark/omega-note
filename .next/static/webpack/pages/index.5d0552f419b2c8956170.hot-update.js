webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sidebar-item.tsx":
/*!*************************************!*\
  !*** ./components/sidebar-item.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SidebarItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"./node_modules/@material-ui/core/esm/ListItem/index.js\");\n/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ \"./node_modules/@material-ui/core/esm/ListItemIcon/index.js\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"./node_modules/@material-ui/core/esm/ListItemText/index.js\");\n/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ImportContacts */ \"./node_modules/@material-ui/icons/ImportContacts.js\");\n/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Remove */ \"./node_modules/@material-ui/icons/Remove.js\");\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/MoreHoriz */ \"./node_modules/@material-ui/icons/MoreHoriz.js\");\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/esm/Modal/index.js\");\n/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Backdrop */ \"./node_modules/@material-ui/core/esm/Backdrop/index.js\");\n/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Fade */ \"./node_modules/@material-ui/core/esm/Fade/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/sidebar-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    listSelected: {\n      backgroundColor: 'rgb(64,64,64)',\n      borderRadius: '3px',\n      '&:hover': {\n        backgroundColor: 'rgb(51,51,51)',\n        borderRadius: '3px'\n      }\n    },\n    list: {\n      '&:hover': {\n        backgroundColor: 'rgb(51,51,51)',\n        borderRadius: '3px'\n      }\n    },\n    icon: {\n      minWidth: '36px',\n      color: 'rgb(165,165,165)'\n    },\n    removeNotebookIcon: {\n      color: 'red',\n      marginLeft: '20px'\n    },\n    menuNotebookIcon: {\n      color: 'rgb(51,51,51)',\n      marginLeft: '20px'\n    },\n    modal: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    paper: {\n      backgroundColor: 'rgb(222, 222, 222)',\n      border: '1px solid rgb(255, 192, 47)',\n      boxShadow: theme.shadows[5],\n      padding: theme.spacing(1, 2, 2),\n      textAlign: 'center',\n      width: '350px',\n      borderRadius: '5px',\n      fontSize: '12px'\n    },\n    title: {\n      fontSize: '22px',\n      color: 'rgb(66, 54, 48)'\n    },\n    button: {\n      height: '30px',\n      marginTop: '10px',\n      marginBottom: '5px'\n    }\n  });\n});\nfunction SidebarItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      removeNotebookButton = _useState[0],\n      setRemoveNotebookButton = _useState[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      open = _React$useState2[0],\n      setOpen = _React$useState2[1];\n\n  var handleClose = function handleClose() {\n    setOpen(false);\n  };\n\n  var removeNewNotebook = function removeNewNotebook() {\n    props.removeNotebook(props.thisNotebook);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    button: true,\n    key: props.notebooks[props.thisNotebook].id,\n    className: props.notebook === props.thisNotebook ? classes.listSelected : classes.list,\n    onClick: function onClick() {\n      if (!removeNotebookButton) props.handleNotebookClick(props.thisNotebook);\n    },\n    style: {\n      padding: props.open ? '0px 0px 0px 30px' : '0px 15px'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: classes.icon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 11\n    }\n  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    primary: props.notebooks[props.thisNotebook].title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onClick: function onClick() {\n      removeNewNotebook();\n    },\n    onMouseOver: function onMouseOver() {\n      return setRemoveNotebookButton(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setRemoveNotebookButton(false);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  }, removeNotebookButton && open ? __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    className: classes.removeNotebookIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 13\n    }\n  }) : __jsx(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    className: classes.menuNotebookIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 13\n    }\n  }))), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    className: classes.modal,\n    open: open,\n    closeAfterTransition: true,\n    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    BackdropProps: {\n      timeout: 500\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    \"in\": open,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: classes.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 13\n    }\n  }, \"Welcome to Omega Note\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"secondary\",\n    onClick: handleDeleteClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 13\n    }\n  }, \"Accept\")))));\n}\n\n_s(SidebarItem, \"J8jbBFwLVv1VmLfJUbjdVlh4Ml0=\", false, function () {\n  return [useStyles];\n});\n\n_c = SidebarItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"SidebarItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLWl0ZW0udHN4P2NiYjYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwibGlzdFNlbGVjdGVkIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwibGlzdCIsImljb24iLCJtaW5XaWR0aCIsImNvbG9yIiwicmVtb3ZlTm90ZWJvb2tJY29uIiwibWFyZ2luTGVmdCIsIm1lbnVOb3RlYm9va0ljb24iLCJtb2RhbCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYXBlciIsImJvcmRlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nIiwic3BhY2luZyIsInRleHRBbGlnbiIsIndpZHRoIiwiZm9udFNpemUiLCJ0aXRsZSIsImJ1dHRvbiIsImhlaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIlNpZGViYXJJdGVtIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJyZW1vdmVOb3RlYm9va0J1dHRvbiIsInNldFJlbW92ZU5vdGVib29rQnV0dG9uIiwiUmVhY3QiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUNsb3NlIiwicmVtb3ZlTmV3Tm90ZWJvb2siLCJyZW1vdmVOb3RlYm9vayIsInRoaXNOb3RlYm9vayIsIm5vdGVib29rcyIsImlkIiwibm90ZWJvb2siLCJoYW5kbGVOb3RlYm9va0NsaWNrIiwiQmFja2Ryb3AiLCJ0aW1lb3V0IiwiaGFuZGxlRGVsZXRlQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FB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QUFBQTtBQUFBLEtBU0UsTUFBQywrREFBRDtBQUFNLFVBQUlYLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFTCxPQUFPLENBQUNoQixLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVnQixPQUFPLENBQUNQLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsRUFFRSxNQUFDLGlFQUFEO0FBQ0UsYUFBUyxFQUFFTyxPQUFPLENBQUNOLE1BRHJCO0FBRUUsV0FBTyxFQUFDLFVBRlY7QUFHRSxTQUFLLEVBQUMsV0FIUjtBQUlFLFdBQU8sRUFBRXVCLGlCQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixDQURGLENBVEYsQ0FuQ0YsQ0FERjtBQTZERDs7R0E1RXVCbkIsVztVQUNOaEMsUzs7O0tBRE1nQyxXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zaWRlYmFyLWl0ZW0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEltcG9ydENvbnRhY3RzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW1wb3J0Q29udGFjdHMnO1xuaW1wb3J0IElNYWluUHJvcHMgZnJvbSAnLi9pbnRlcmZhY2VzL2ltYWlucHJvcHMnO1xuaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZSc7XG5pbXBvcnQgTW9yZUhvcml6SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZUhvcml6JztcbmltcG9ydCBNb2RhbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbCc7XG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AnO1xuaW1wb3J0IEZhZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFkZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICBsaXN0U2VsZWN0ZWQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYig2NCw2NCw2NCknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgbWluV2lkdGg6ICczNnB4JyxcbiAgICAgIGNvbG9yOiAncmdiKDE2NSwxNjUsMTY1KScsXG4gICAgfSxcbiAgICByZW1vdmVOb3RlYm9va0ljb246IHtcbiAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgIG1hcmdpbkxlZnQ6ICcyMHB4JyxcbiAgICB9LFxuICAgIG1lbnVOb3RlYm9va0ljb246IHtcbiAgICAgIGNvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICBtYXJnaW5MZWZ0OiAnMjBweCcsXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBwYXBlcjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIyMiwgMjIyLCAyMjIpJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2IoMjU1LCAxOTIsIDQ3KScsXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDIsIDIpLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMzUwcHgnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgZm9udFNpemU6ICcyMnB4JyxcbiAgICAgIGNvbG9yOiAncmdiKDY2LCA1NCwgNDgpJyxcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICBtYXJnaW5Ub3A6ICcxMHB4JyxcbiAgICAgIG1hcmdpbkJvdHRvbTogJzVweCcsXG4gICAgfSxcbiAgfSlcbik7XG5cbmludGVyZmFjZSBTaWRlYmFySXRlbVByb3BzIGV4dGVuZHMgSU1haW5Qcm9wcyB7XG4gIHRoaXNOb3RlYm9vazogc3RyaW5nO1xuICBvcGVuOiBib29sZWFuO1xuICBoYW5kbGVOb3RlYm9va0NsaWNrOiAobm90ZWJvb2s6IHN0cmluZykgPT4gdm9pZDtcbiAgcmVtb3ZlTm90ZWJvb2s6IChpZDogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFySXRlbShwcm9wczogU2lkZWJhckl0ZW1Qcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtyZW1vdmVOb3RlYm9va0J1dHRvbiwgc2V0UmVtb3ZlTm90ZWJvb2tCdXR0b25dID0gdXNlU3RhdGU8Ym9vbGVhbj4oXG4gICAgZmFsc2VcbiAgKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlTmV3Tm90ZWJvb2sgPSAoKSA9PiB7XG4gICAgcHJvcHMucmVtb3ZlTm90ZWJvb2socHJvcHMudGhpc05vdGVib29rKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGlzdEl0ZW1cbiAgICAgICAgYnV0dG9uXG4gICAgICAgIGtleT17cHJvcHMubm90ZWJvb2tzW3Byb3BzLnRoaXNOb3RlYm9va10uaWR9XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgcHJvcHMubm90ZWJvb2sgPT09IHByb3BzLnRoaXNOb3RlYm9va1xuICAgICAgICAgICAgPyBjbGFzc2VzLmxpc3RTZWxlY3RlZFxuICAgICAgICAgICAgOiBjbGFzc2VzLmxpc3RcbiAgICAgICAgfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZW1vdmVOb3RlYm9va0J1dHRvbilcbiAgICAgICAgICAgIHByb3BzLmhhbmRsZU5vdGVib29rQ2xpY2socHJvcHMudGhpc05vdGVib29rKTtcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nOiBwcm9wcy5vcGVuID8gJzBweCAwcHggMHB4IDMwcHgnIDogJzBweCAxNXB4JyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICA8SW1wb3J0Q29udGFjdHNJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPlxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtwcm9wcy5ub3RlYm9va3NbcHJvcHMudGhpc05vdGVib29rXS50aXRsZX0gLz5cbiAgICAgICAgPExpc3RJdGVtSWNvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZU5ld05vdGVib29rKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0UmVtb3ZlTm90ZWJvb2tCdXR0b24odHJ1ZSl9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRSZW1vdmVOb3RlYm9va0J1dHRvbihmYWxzZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7cmVtb3ZlTm90ZWJvb2tCdXR0b24gJiYgb3BlbiA/IChcbiAgICAgICAgICAgIDxSZW1vdmVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZW1vdmVOb3RlYm9va0ljb259IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxNb3JlSG9yaXpJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51Tm90ZWJvb2tJY29ufSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgPC9MaXN0SXRlbT5cbiAgICAgIDxNb2RhbFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEZhZGUgaW49e29wZW59PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+V2VsY29tZSB0byBPbWVnYSBOb3RlPC9wPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUNsaWNrfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBY2NlcHRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZhZGU+XG4gICAgICA8L01vZGFsPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sidebar-item.tsx\n");

/***/ })

})
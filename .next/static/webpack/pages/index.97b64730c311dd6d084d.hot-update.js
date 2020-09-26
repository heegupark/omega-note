webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sidebar-item.tsx":
/*!*************************************!*\
  !*** ./components/sidebar-item.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SidebarItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"./node_modules/@material-ui/core/esm/ListItem/index.js\");\n/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ \"./node_modules/@material-ui/core/esm/ListItemIcon/index.js\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"./node_modules/@material-ui/core/esm/ListItemText/index.js\");\n/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ImportContacts */ \"./node_modules/@material-ui/icons/ImportContacts.js\");\n/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Remove */ \"./node_modules/@material-ui/icons/Remove.js\");\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/MoreHoriz */ \"./node_modules/@material-ui/icons/MoreHoriz.js\");\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/esm/Modal/index.js\");\n/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Backdrop */ \"./node_modules/@material-ui/core/esm/Backdrop/index.js\");\n/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Fade */ \"./node_modules/@material-ui/core/esm/Fade/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/sidebar-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    listSelected: {\n      backgroundColor: 'rgb(64,64,64)',\n      borderRadius: '3px',\n      '&:hover': {\n        backgroundColor: 'rgb(51,51,51)',\n        borderRadius: '3px'\n      }\n    },\n    list: {\n      '&:hover': {\n        backgroundColor: 'rgb(51,51,51)',\n        borderRadius: '3px'\n      }\n    },\n    icon: {\n      minWidth: '36px',\n      color: 'rgb(165,165,165)'\n    },\n    removeNotebookIcon: {\n      color: 'red',\n      marginLeft: '20px'\n    },\n    menuNotebookIcon: {\n      color: 'rgb(51,51,51)',\n      marginLeft: '20px'\n    },\n    modal: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    paper: {\n      backgroundColor: 'rgb(222, 222, 222)',\n      boxShadow: theme.shadows[5],\n      padding: '20px',\n      textAlign: 'center',\n      width: '350px',\n      borderRadius: '5px',\n      fontSize: '12px',\n      outline: 'none'\n    },\n    paragraph: {\n      fontSize: '16px',\n      color: 'rgb(66, 54, 48)',\n      marginBottom: '10px',\n      padding: '10px'\n    },\n    button: {\n      height: '30px',\n      margin: '10px 15px'\n    }\n  });\n});\nfunction SidebarItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      removeNotebookButton = _useState[0],\n      setRemoveNotebookButton = _useState[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      open = _React$useState2[0],\n      setOpen = _React$useState2[1];\n\n  var handleModalClose = function handleModalClose() {\n    setOpen(false);\n  };\n\n  var removeNewNotebook = function removeNewNotebook() {\n    setOpen(true);\n  };\n\n  var handleDeleteClick = function handleDeleteClick() {\n    props.removeNotebook(props.thisNotebook);\n    handleModalClose();\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    button: true,\n    key: props.notebooks[props.thisNotebook].id,\n    className: props.notebook === props.thisNotebook ? classes.listSelected : classes.list,\n    onClick: function onClick() {\n      if (!removeNotebookButton) props.handleNotebookClick(props.thisNotebook);\n    },\n    style: {\n      padding: props.open ? '0px 0px 0px 30px' : '0px 15px'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: classes.icon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 11\n    }\n  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    primary: props.notebooks[props.thisNotebook].title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onClick: function onClick() {\n      removeNewNotebook();\n    },\n    onMouseOver: function onMouseOver() {\n      console.log('aaa');\n      setRemoveNotebookButton(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setRemoveNotebookButton(false);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 9\n    }\n  }, removeNotebookButton && open ? __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    className: classes.removeNotebookIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 13\n    }\n  }) : __jsx(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    className: classes.menuNotebookIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 13\n    }\n  }))), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    className: classes.modal,\n    open: open,\n    closeAfterTransition: true,\n    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    BackdropProps: {\n      timeout: 500\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    \"in\": open,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.paragraph,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 13\n    }\n  }, \"This will delete the folder and move all notes in this folder to trash.\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"secondary\",\n    onClick: handleDeleteClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 13\n    }\n  }, \"Delete\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"default\",\n    onClick: handleModalClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 13\n    }\n  }, \"Cancel\")))));\n}\n\n_s(SidebarItem, \"994wiKtppx25XJgC2zbHxpcdmss=\", false, function () {\n  return [useStyles];\n});\n\n_c = SidebarItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"SidebarItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLWl0ZW0udHN4P2NiYjYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwibGlzdFNlbGVjdGVkIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwibGlzdCIsImljb24iLCJtaW5XaWR0aCIsImNvbG9yIiwicmVtb3ZlTm90ZWJvb2tJY29uIiwibWFyZ2luTGVmdCIsIm1lbnVOb3RlYm9va0ljb24iLCJtb2RhbCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYXBlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwid2lkdGgiLCJmb250U2l6ZSIsIm91dGxpbmUiLCJwYXJhZ3JhcGgiLCJtYXJnaW5Cb3R0b20iLCJidXR0b24iLCJoZWlnaHQiLCJtYXJnaW4iLCJTaWRlYmFySXRlbSIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwicmVtb3ZlTm90ZWJvb2tCdXR0b24iLCJzZXRSZW1vdmVOb3RlYm9va0J1dHRvbiIsIlJlYWN0Iiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVNb2RhbENsb3NlIiwicmVtb3ZlTmV3Tm90ZWJvb2siLCJoYW5kbGVEZWxldGVDbGljayIsInJlbW92ZU5vdGVib29rIiwidGhpc05vdGVib29rIiwibm90ZWJvb2tzIiwiaWQiLCJub3RlYm9vayIsImhhbmRsZU5vdGVib29rQ2xpY2siLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJCYWNrZHJvcCIsInRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFB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QUFFd0IsSUFGUjtBQUdFLHdCQUFvQixNQUh0QjtBQUlFLHFCQUFpQixFQUFFYyxtRUFKckI7QUFLRSxpQkFBYSxFQUFFO0FBQ2JDLGFBQU8sRUFBRTtBQURJLEtBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRSxNQUFDLCtEQUFEO0FBQU0sVUFBSWYsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVMLE9BQU8sQ0FBQ2YsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFZSxPQUFPLENBQUNQLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0VBREYsRUFLRSxNQUFDLGlFQUFEO0FBQ0UsYUFBUyxFQUFFTyxPQUFPLENBQUNMLE1BRHJCO0FBRUUsV0FBTyxFQUFDLFVBRlY7QUFHRSxTQUFLLEVBQUMsV0FIUjtBQUlFLFdBQU8sRUFBRWMsaUJBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLEVBYUUsTUFBQyxpRUFBRDtBQUNFLGFBQVMsRUFBRVQsT0FBTyxDQUFDTCxNQURyQjtBQUVFLFdBQU8sRUFBQyxVQUZWO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFJRSxXQUFPLEVBQUVZLGdCQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRixDQURGLENBVEYsQ0F0Q0YsQ0FERjtBQTJFRDs7R0EvRnVCVCxXO1VBQ04vQixTOzs7S0FETStCLFciLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGViYXItaXRlbS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgSW1wb3J0Q29udGFjdHNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbXBvcnRDb250YWN0cyc7XG5pbXBvcnQgSU1haW5Qcm9wcyBmcm9tICcuL2ludGVyZmFjZXMvaW1haW5wcm9wcyc7XG5pbXBvcnQgUmVtb3ZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlJztcbmltcG9ydCBNb3JlSG9yaXpJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3JlSG9yaXonO1xuaW1wb3J0IE1vZGFsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01vZGFsJztcbmltcG9ydCBCYWNrZHJvcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcCc7XG5pbXBvcnQgRmFkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWRlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIGxpc3RTZWxlY3RlZDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDY0LDY0LDY0KScsXG4gICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICBtaW5XaWR0aDogJzM2cHgnLFxuICAgICAgY29sb3I6ICdyZ2IoMTY1LDE2NSwxNjUpJyxcbiAgICB9LFxuICAgIHJlbW92ZU5vdGVib29rSWNvbjoge1xuICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgbWFyZ2luTGVmdDogJzIwcHgnLFxuICAgIH0sXG4gICAgbWVudU5vdGVib29rSWNvbjoge1xuICAgICAgY29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgIG1hcmdpbkxlZnQ6ICcyMHB4JyxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIHBhcGVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjIyLCAyMjIsIDIyMiknLFxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxuICAgICAgcGFkZGluZzogJzIwcHgnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMzUwcHgnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgfSxcbiAgICBwYXJhZ3JhcGg6IHtcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICBjb2xvcjogJ3JnYig2NiwgNTQsIDQ4KScsXG4gICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICBtYXJnaW46ICcxMHB4IDE1cHgnLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5pbnRlcmZhY2UgU2lkZWJhckl0ZW1Qcm9wcyBleHRlbmRzIElNYWluUHJvcHMge1xuICB0aGlzTm90ZWJvb2s6IHN0cmluZztcbiAgb3BlbjogYm9vbGVhbjtcbiAgaGFuZGxlTm90ZWJvb2tDbGljazogKG5vdGVib29rOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHJlbW92ZU5vdGVib29rOiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhckl0ZW0ocHJvcHM6IFNpZGViYXJJdGVtUHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbcmVtb3ZlTm90ZWJvb2tCdXR0b24sIHNldFJlbW92ZU5vdGVib29rQnV0dG9uXSA9IHVzZVN0YXRlPGJvb2xlYW4+KFxuICAgIGZhbHNlXG4gICk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVNb2RhbENsb3NlID0gKCkgPT4ge1xuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZU5ld05vdGVib29rID0gKCkgPT4ge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlQ2xpY2sgPSAoKSA9PiB7XG4gICAgcHJvcHMucmVtb3ZlTm90ZWJvb2socHJvcHMudGhpc05vdGVib29rKTtcbiAgICBoYW5kbGVNb2RhbENsb3NlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpc3RJdGVtXG4gICAgICAgIGJ1dHRvblxuICAgICAgICBrZXk9e3Byb3BzLm5vdGVib29rc1twcm9wcy50aGlzTm90ZWJvb2tdLmlkfVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIHByb3BzLm5vdGVib29rID09PSBwcm9wcy50aGlzTm90ZWJvb2tcbiAgICAgICAgICAgID8gY2xhc3Nlcy5saXN0U2VsZWN0ZWRcbiAgICAgICAgICAgIDogY2xhc3Nlcy5saXN0XG4gICAgICAgIH1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGlmICghcmVtb3ZlTm90ZWJvb2tCdXR0b24pXG4gICAgICAgICAgICBwcm9wcy5oYW5kbGVOb3RlYm9va0NsaWNrKHByb3BzLnRoaXNOb3RlYm9vayk7XG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZzogcHJvcHMub3BlbiA/ICcwcHggMHB4IDBweCAzMHB4JyA6ICcwcHggMTVweCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgPEltcG9ydENvbnRhY3RzSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cbiAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17cHJvcHMubm90ZWJvb2tzW3Byb3BzLnRoaXNOb3RlYm9va10udGl0bGV9IC8+XG4gICAgICAgIDxMaXN0SXRlbUljb25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVOZXdOb3RlYm9vaygpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhYWEnKTtcbiAgICAgICAgICAgIHNldFJlbW92ZU5vdGVib29rQnV0dG9uKHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRSZW1vdmVOb3RlYm9va0J1dHRvbihmYWxzZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7cmVtb3ZlTm90ZWJvb2tCdXR0b24gJiYgb3BlbiA/IChcbiAgICAgICAgICAgIDxSZW1vdmVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZW1vdmVOb3RlYm9va0ljb259IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxNb3JlSG9yaXpJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51Tm90ZWJvb2tJY29ufSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgPC9MaXN0SXRlbT5cbiAgICAgIDxNb2RhbFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEZhZGUgaW49e29wZW59PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcmFncmFwaH0+XG4gICAgICAgICAgICAgIFRoaXMgd2lsbCBkZWxldGUgdGhlIGZvbGRlciBhbmQgbW92ZSBhbGwgbm90ZXMgaW4gdGhpcyBmb2xkZXIgdG9cbiAgICAgICAgICAgICAgdHJhc2guXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWxldGVDbGlja31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTW9kYWxDbG9zZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sidebar-item.tsx\n");

/***/ })

})
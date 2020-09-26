webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sidebar-item.tsx":
/*!*************************************!*\
  !*** ./components/sidebar-item.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SidebarItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"./node_modules/@material-ui/core/esm/ListItem/index.js\");\n/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ \"./node_modules/@material-ui/core/esm/ListItemIcon/index.js\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"./node_modules/@material-ui/core/esm/ListItemText/index.js\");\n/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ImportContacts */ \"./node_modules/@material-ui/icons/ImportContacts.js\");\n/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Remove */ \"./node_modules/@material-ui/icons/Remove.js\");\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/MoreHoriz */ \"./node_modules/@material-ui/icons/MoreHoriz.js\");\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/sidebar-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    listSelected: {\n      backgroundColor: 'rgb(64,64,64)',\n      borderRadius: '3px',\n      '&:hover': {\n        backgroundColor: 'rgb(51,51,51)',\n        borderRadius: '3px'\n      }\n    },\n    list: {\n      '&:hover': {\n        backgroundColor: 'rgb(51,51,51)',\n        borderRadius: '3px'\n      }\n    },\n    icon: {\n      minWidth: '35px',\n      color: 'rgb(165,165,165)'\n    },\n    removeNotebookIcon: {\n      color: 'red',\n      marginLeft: '20px'\n    },\n    menuNotebookIcon: {\n      color: 'rgb(51,51,51)',\n      marginLeft: '20px'\n    }\n  });\n});\nfunction SidebarItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      removeNotebookButton = _useState[0],\n      setRemoveNotebookButton = _useState[1];\n\n  var removeNewNotebook = function removeNewNotebook() {\n    console.log('aaa');\n    props.removeNotebook(props.thisNotebook);\n  };\n\n  return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    button: true,\n    key: props.notebooks[props.thisNotebook].id,\n    className: props.notebook === props.thisNotebook ? classes.listSelected : classes.list,\n    onClick: function onClick() {\n      return props.handleNotebookClick(props.thisNotebook);\n    },\n    style: {\n      padding: props.open ? '0px 0px 0px 30px' : '0px 15px'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    className: classes.icon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    primary: props.notebooks[props.thisNotebook].title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }), __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onClick: function onClick() {\n      removeNewNotebook();\n    },\n    onMouseOver: function onMouseOver() {\n      return setRemoveNotebookButton(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setRemoveNotebookButton(false);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, removeNotebookButton && open ? __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: classes.removeNotebookIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }) : __jsx(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    className: classes.menuNotebookIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  })));\n}\n\n_s(SidebarItem, \"+sjcnRKPRu8wiu5EMrczbpTXbrw=\", false, function () {\n  return [useStyles];\n});\n\n_c = SidebarItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"SidebarItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLWl0ZW0udHN4P2NiYjYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwibGlzdFNlbGVjdGVkIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwibGlzdCIsImljb24iLCJtaW5XaWR0aCIsImNvbG9yIiwicmVtb3ZlTm90ZWJvb2tJY29uIiwibWFyZ2luTGVmdCIsIm1lbnVOb3RlYm9va0ljb24iLCJTaWRlYmFySXRlbSIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwicmVtb3ZlTm90ZWJvb2tCdXR0b24iLCJzZXRSZW1vdmVOb3RlYm9va0J1dHRvbiIsInJlbW92ZU5ld05vdGVib29rIiwiY29uc29sZSIsImxvZyIsInJlbW92ZU5vdGVib29rIiwidGhpc05vdGVib29rIiwibm90ZWJvb2tzIiwiaWQiLCJub3RlYm9vayIsImhhbmRsZU5vdGVib29rQ2xpY2siLCJwYWRkaW5nIiwib3BlbiIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxnQkFBWSxFQUFFO0FBQ1pDLHFCQUFlLEVBQUUsZUFETDtBQUVaQyxrQkFBWSxFQUFFLEtBRkY7QUFHWixpQkFBVztBQUNURCx1QkFBZSxFQUFFLGVBRFI7QUFFVEMsb0JBQVksRUFBRTtBQUZMO0FBSEMsS0FESDtBQVNYQyxRQUFJLEVBQUU7QUFDSixpQkFBVztBQUNURix1QkFBZSxFQUFFLGVBRFI7QUFFVEMsb0JBQVksRUFBRTtBQUZMO0FBRFAsS0FUSztBQWVYRSxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLE1BRE47QUFFSkMsV0FBSyxFQUFFO0FBRkgsS0FmSztBQW1CWEMsc0JBQWtCLEVBQUU7QUFDbEJELFdBQUssRUFBRSxLQURXO0FBRWxCRSxnQkFBVSxFQUFFO0FBRk0sS0FuQlQ7QUF1QlhDLG9CQUFnQixFQUFFO0FBQ2hCSCxXQUFLLEVBQUUsZUFEUztBQUVoQkUsZ0JBQVUsRUFBRTtBQUZJO0FBdkJQLEdBQUQsQ0FEZTtBQUFBLENBQUQsQ0FBNUI7QUFzQ2UsU0FBU0UsV0FBVCxDQUFxQkMsS0FBckIsRUFBOEM7QUFBQTs7QUFDM0QsTUFBTUMsT0FBTyxHQUFHaEIsU0FBUyxFQUF6Qjs7QUFEMkQsa0JBRUhpQixzREFBUSxDQUM5RCxLQUQ4RCxDQUZMO0FBQUEsTUFFcERDLG9CQUZvRDtBQUFBLE1BRTlCQyx1QkFGOEI7O0FBTTNELE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNBUCxTQUFLLENBQUNRLGNBQU4sQ0FBcUJSLEtBQUssQ0FBQ1MsWUFBM0I7QUFDRCxHQUhEOztBQUtBLFNBQ0UsTUFBQyxrRUFBRDtBQUNFLFVBQU0sTUFEUjtBQUVFLE9BQUcsRUFBRVQsS0FBSyxDQUFDVSxTQUFOLENBQWdCVixLQUFLLENBQUNTLFlBQXRCLEVBQW9DRSxFQUYzQztBQUdFLGFBQVMsRUFDUFgsS0FBSyxDQUFDWSxRQUFOLEtBQW1CWixLQUFLLENBQUNTLFlBQXpCLEdBQ0lSLE9BQU8sQ0FBQ1osWUFEWixHQUVJWSxPQUFPLENBQUNULElBTmhCO0FBUUUsV0FBTyxFQUFFO0FBQUEsYUFBTVEsS0FBSyxDQUFDYSxtQkFBTixDQUEwQmIsS0FBSyxDQUFDUyxZQUFoQyxDQUFOO0FBQUEsS0FSWDtBQVNFLFNBQUssRUFBRTtBQUNMSyxhQUFPLEVBQUVkLEtBQUssQ0FBQ2UsSUFBTixHQUFhLGtCQUFiLEdBQWtDO0FBRHRDLEtBVFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWFFLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0VBQUQ7QUFBb0IsYUFBUyxFQUFFZCxPQUFPLENBQUNSLElBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWJGLEVBZ0JFLE1BQUMsc0VBQUQ7QUFBYyxXQUFPLEVBQUVPLEtBQUssQ0FBQ1UsU0FBTixDQUFnQlYsS0FBSyxDQUFDUyxZQUF0QixFQUFvQ08sS0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixFQWlCRSxNQUFDLHNFQUFEO0FBQ0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2JYLHVCQUFpQjtBQUNsQixLQUhIO0FBSUUsZUFBVyxFQUFFO0FBQUEsYUFBTUQsdUJBQXVCLENBQUMsSUFBRCxDQUE3QjtBQUFBLEtBSmY7QUFLRSxnQkFBWSxFQUFFO0FBQUEsYUFBTUEsdUJBQXVCLENBQUMsS0FBRCxDQUE3QjtBQUFBLEtBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPR0Qsb0JBQW9CLElBQUlZLElBQXhCLEdBQ0MsTUFBQyxnRUFBRDtBQUFZLGFBQVMsRUFBRWQsT0FBTyxDQUFDTCxrQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEdBR0MsTUFBQyxtRUFBRDtBQUFlLGFBQVMsRUFBRUssT0FBTyxDQUFDSCxnQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLENBakJGLENBREY7QUFpQ0Q7O0dBNUN1QkMsVztVQUNOZCxTOzs7S0FETWMsVyIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2lkZWJhci1pdGVtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBJbXBvcnRDb250YWN0c0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ltcG9ydENvbnRhY3RzJztcbmltcG9ydCBJTWFpblByb3BzIGZyb20gJy4vaW50ZXJmYWNlcy9pbWFpbnByb3BzJztcbmltcG9ydCBSZW1vdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZW1vdmUnO1xuaW1wb3J0IE1vcmVIb3Jpekljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVIb3Jpeic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICBsaXN0U2VsZWN0ZWQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYig2NCw2NCw2NCknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgbWluV2lkdGg6ICczNXB4JyxcbiAgICAgIGNvbG9yOiAncmdiKDE2NSwxNjUsMTY1KScsXG4gICAgfSxcbiAgICByZW1vdmVOb3RlYm9va0ljb246IHtcbiAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgIG1hcmdpbkxlZnQ6ICcyMHB4JyxcbiAgICB9LFxuICAgIG1lbnVOb3RlYm9va0ljb246IHtcbiAgICAgIGNvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICBtYXJnaW5MZWZ0OiAnMjBweCcsXG4gICAgfSxcbiAgfSlcbik7XG5cbmludGVyZmFjZSBTaWRlYmFySXRlbVByb3BzIGV4dGVuZHMgSU1haW5Qcm9wcyB7XG4gIHRoaXNOb3RlYm9vazogc3RyaW5nO1xuICBvcGVuOiBib29sZWFuO1xuICBoYW5kbGVOb3RlYm9va0NsaWNrOiAobm90ZWJvb2s6IHN0cmluZykgPT4gdm9pZDtcbiAgcmVtb3ZlTm90ZWJvb2s6IChub3RlYm9vazogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFySXRlbShwcm9wczogU2lkZWJhckl0ZW1Qcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtyZW1vdmVOb3RlYm9va0J1dHRvbiwgc2V0UmVtb3ZlTm90ZWJvb2tCdXR0b25dID0gdXNlU3RhdGU8Ym9vbGVhbj4oXG4gICAgZmFsc2VcbiAgKTtcblxuICBjb25zdCByZW1vdmVOZXdOb3RlYm9vayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnYWFhJyk7XG4gICAgcHJvcHMucmVtb3ZlTm90ZWJvb2socHJvcHMudGhpc05vdGVib29rKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0SXRlbVxuICAgICAgYnV0dG9uXG4gICAgICBrZXk9e3Byb3BzLm5vdGVib29rc1twcm9wcy50aGlzTm90ZWJvb2tdLmlkfVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgcHJvcHMubm90ZWJvb2sgPT09IHByb3BzLnRoaXNOb3RlYm9va1xuICAgICAgICAgID8gY2xhc3Nlcy5saXN0U2VsZWN0ZWRcbiAgICAgICAgICA6IGNsYXNzZXMubGlzdFxuICAgICAgfVxuICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlTm90ZWJvb2tDbGljayhwcm9wcy50aGlzTm90ZWJvb2spfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcGFkZGluZzogcHJvcHMub3BlbiA/ICcwcHggMHB4IDBweCAzMHB4JyA6ICcwcHggMTVweCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgIDxJbXBvcnRDb250YWN0c0ljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XG4gICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17cHJvcHMubm90ZWJvb2tzW3Byb3BzLnRoaXNOb3RlYm9va10udGl0bGV9IC8+XG4gICAgICA8TGlzdEl0ZW1JY29uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICByZW1vdmVOZXdOb3RlYm9vaygpO1xuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0UmVtb3ZlTm90ZWJvb2tCdXR0b24odHJ1ZSl9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0UmVtb3ZlTm90ZWJvb2tCdXR0b24oZmFsc2UpfVxuICAgICAgPlxuICAgICAgICB7cmVtb3ZlTm90ZWJvb2tCdXR0b24gJiYgb3BlbiA/IChcbiAgICAgICAgICA8UmVtb3ZlSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMucmVtb3ZlTm90ZWJvb2tJY29ufSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxNb3JlSG9yaXpJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51Tm90ZWJvb2tJY29ufSAvPlxuICAgICAgICApfVxuICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgPC9MaXN0SXRlbT5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sidebar-item.tsx\n");

/***/ })

})
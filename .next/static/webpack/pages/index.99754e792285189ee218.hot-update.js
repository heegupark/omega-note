webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sidebar-item.tsx":
/*!*************************************!*\
  !*** ./components/sidebar-item.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SidebarItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"./node_modules/@material-ui/core/esm/ListItem/index.js\");\n/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ \"./node_modules/@material-ui/core/esm/ListItemIcon/index.js\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"./node_modules/@material-ui/core/esm/ListItemText/index.js\");\n/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ImportContacts */ \"./node_modules/@material-ui/icons/ImportContacts.js\");\n/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Remove */ \"./node_modules/@material-ui/icons/Remove.js\");\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/MoreHoriz */ \"./node_modules/@material-ui/icons/MoreHoriz.js\");\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/sidebar-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    listSelected: {\n      backgroundColor: 'rgb(64,64,64)',\n      borderRadius: '3px',\n      '&:hover': {\n        backgroundColor: 'rgb(51,51,51)',\n        borderRadius: '3px'\n      }\n    },\n    list: {\n      '&:hover': {\n        backgroundColor: 'rgb(51,51,51)',\n        borderRadius: '3px'\n      }\n    },\n    icon: {\n      minWidth: '35px',\n      color: 'rgb(165,165,165)'\n    },\n    removeNotebookIcon: {\n      color: 'red',\n      marginLeft: '20px'\n    },\n    menuNotebookIcon: {\n      color: 'rgb(51,51,51)',\n      marginLeft: '20px'\n    }\n  });\n});\nfunction SidebarItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      removeNotebookButton = _useState[0],\n      setRemoveNotebookButton = _useState[1];\n\n  var removeNewNotebook = function removeNewNotebook() {\n    props.removeNotebook(props.thisNotebook);\n  };\n\n  return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    button: true,\n    key: props.notebooks[props.thisNotebook].id,\n    className: props.notebook === props.thisNotebook ? classes.listSelected : classes.list,\n    onClick: function onClick() {\n      if (!removeNotebookButton) props.handleNotebookClick(props.thisNotebook);\n    },\n    style: {\n      padding: props.open ? '0px 0px 0px 30px' : '0px 15px'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    className: classes.icon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    primary: props.notebooks[props.thisNotebook].title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }), __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onClick: function onClick() {\n      removeNewNotebook();\n    },\n    onMouseOver: function onMouseOver() {\n      return setRemoveNotebookButton(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setRemoveNotebookButton(false);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, removeNotebookButton && open ? __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: classes.removeNotebookIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  }) : __jsx(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    className: classes.menuNotebookIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 11\n    }\n  })));\n}\n\n_s(SidebarItem, \"+sjcnRKPRu8wiu5EMrczbpTXbrw=\", false, function () {\n  return [useStyles];\n});\n\n_c = SidebarItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"SidebarItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLWl0ZW0udHN4P2NiYjYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwibGlzdFNlbGVjdGVkIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwibGlzdCIsImljb24iLCJtaW5XaWR0aCIsImNvbG9yIiwicmVtb3ZlTm90ZWJvb2tJY29uIiwibWFyZ2luTGVmdCIsIm1lbnVOb3RlYm9va0ljb24iLCJTaWRlYmFySXRlbSIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwicmVtb3ZlTm90ZWJvb2tCdXR0b24iLCJzZXRSZW1vdmVOb3RlYm9va0J1dHRvbiIsInJlbW92ZU5ld05vdGVib29rIiwicmVtb3ZlTm90ZWJvb2siLCJ0aGlzTm90ZWJvb2siLCJub3RlYm9va3MiLCJpZCIsIm5vdGVib29rIiwiaGFuZGxlTm90ZWJvb2tDbGljayIsInBhZGRpbmciLCJvcGVuIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLGdCQUFZLEVBQUU7QUFDWkMscUJBQWUsRUFBRSxlQURMO0FBRVpDLGtCQUFZLEVBQUUsS0FGRjtBQUdaLGlCQUFXO0FBQ1RELHVCQUFlLEVBQUUsZUFEUjtBQUVUQyxvQkFBWSxFQUFFO0FBRkw7QUFIQyxLQURIO0FBU1hDLFFBQUksRUFBRTtBQUNKLGlCQUFXO0FBQ1RGLHVCQUFlLEVBQUUsZUFEUjtBQUVUQyxvQkFBWSxFQUFFO0FBRkw7QUFEUCxLQVRLO0FBZVhFLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUUsTUFETjtBQUVKQyxXQUFLLEVBQUU7QUFGSCxLQWZLO0FBbUJYQyxzQkFBa0IsRUFBRTtBQUNsQkQsV0FBSyxFQUFFLEtBRFc7QUFFbEJFLGdCQUFVLEVBQUU7QUFGTSxLQW5CVDtBQXVCWEMsb0JBQWdCLEVBQUU7QUFDaEJILFdBQUssRUFBRSxlQURTO0FBRWhCRSxnQkFBVSxFQUFFO0FBRkk7QUF2QlAsR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1QjtBQXNDZSxTQUFTRSxXQUFULENBQXFCQyxLQUFyQixFQUE4QztBQUFBOztBQUMzRCxNQUFNQyxPQUFPLEdBQUdoQixTQUFTLEVBQXpCOztBQUQyRCxrQkFFSGlCLHNEQUFRLENBQzlELEtBRDhELENBRkw7QUFBQSxNQUVwREMsb0JBRm9EO0FBQUEsTUFFOUJDLHVCQUY4Qjs7QUFNM0QsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCTCxTQUFLLENBQUNNLGNBQU4sQ0FBcUJOLEtBQUssQ0FBQ08sWUFBM0I7QUFDRCxHQUZEOztBQUlBLFNBQ0UsTUFBQyxrRUFBRDtBQUNFLFVBQU0sTUFEUjtBQUVFLE9BQUcsRUFBRVAsS0FBSyxDQUFDUSxTQUFOLENBQWdCUixLQUFLLENBQUNPLFlBQXRCLEVBQW9DRSxFQUYzQztBQUdFLGFBQVMsRUFDUFQsS0FBSyxDQUFDVSxRQUFOLEtBQW1CVixLQUFLLENBQUNPLFlBQXpCLEdBQ0lOLE9BQU8sQ0FBQ1osWUFEWixHQUVJWSxPQUFPLENBQUNULElBTmhCO0FBUUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2IsVUFBSSxDQUFDVyxvQkFBTCxFQUNFSCxLQUFLLENBQUNXLG1CQUFOLENBQTBCWCxLQUFLLENBQUNPLFlBQWhDO0FBQ0gsS0FYSDtBQVlFLFNBQUssRUFBRTtBQUNMSyxhQUFPLEVBQUVaLEtBQUssQ0FBQ2EsSUFBTixHQUFhLGtCQUFiLEdBQWtDO0FBRHRDLEtBWlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWdCRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdFQUFEO0FBQW9CLGFBQVMsRUFBRVosT0FBTyxDQUFDUixJQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FoQkYsRUFtQkUsTUFBQyxzRUFBRDtBQUFjLFdBQU8sRUFBRU8sS0FBSyxDQUFDUSxTQUFOLENBQWdCUixLQUFLLENBQUNPLFlBQXRCLEVBQW9DTyxLQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJGLEVBb0JFLE1BQUMsc0VBQUQ7QUFDRSxXQUFPLEVBQUUsbUJBQU07QUFDYlQsdUJBQWlCO0FBQ2xCLEtBSEg7QUFJRSxlQUFXLEVBQUU7QUFBQSxhQUFNRCx1QkFBdUIsQ0FBQyxJQUFELENBQTdCO0FBQUEsS0FKZjtBQUtFLGdCQUFZLEVBQUU7QUFBQSxhQUFNQSx1QkFBdUIsQ0FBQyxLQUFELENBQTdCO0FBQUEsS0FMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HRCxvQkFBb0IsSUFBSVUsSUFBeEIsR0FDQyxNQUFDLGdFQUFEO0FBQVksYUFBUyxFQUFFWixPQUFPLENBQUNMLGtCQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsR0FHQyxNQUFDLG1FQUFEO0FBQWUsYUFBUyxFQUFFSyxPQUFPLENBQUNILGdCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkosQ0FwQkYsQ0FERjtBQW9DRDs7R0E5Q3VCQyxXO1VBQ05kLFM7OztLQURNYyxXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zaWRlYmFyLWl0ZW0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEltcG9ydENvbnRhY3RzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW1wb3J0Q29udGFjdHMnO1xuaW1wb3J0IElNYWluUHJvcHMgZnJvbSAnLi9pbnRlcmZhY2VzL2ltYWlucHJvcHMnO1xuaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZSc7XG5pbXBvcnQgTW9yZUhvcml6SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZUhvcml6JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIGxpc3RTZWxlY3RlZDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDY0LDY0LDY0KScsXG4gICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICBtaW5XaWR0aDogJzM1cHgnLFxuICAgICAgY29sb3I6ICdyZ2IoMTY1LDE2NSwxNjUpJyxcbiAgICB9LFxuICAgIHJlbW92ZU5vdGVib29rSWNvbjoge1xuICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgbWFyZ2luTGVmdDogJzIwcHgnLFxuICAgIH0sXG4gICAgbWVudU5vdGVib29rSWNvbjoge1xuICAgICAgY29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgIG1hcmdpbkxlZnQ6ICcyMHB4JyxcbiAgICB9LFxuICB9KVxuKTtcblxuaW50ZXJmYWNlIFNpZGViYXJJdGVtUHJvcHMgZXh0ZW5kcyBJTWFpblByb3BzIHtcbiAgdGhpc05vdGVib29rOiBzdHJpbmc7XG4gIG9wZW46IGJvb2xlYW47XG4gIGhhbmRsZU5vdGVib29rQ2xpY2s6IChub3RlYm9vazogc3RyaW5nKSA9PiB2b2lkO1xuICByZW1vdmVOb3RlYm9vazogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXJJdGVtKHByb3BzOiBTaWRlYmFySXRlbVByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3JlbW92ZU5vdGVib29rQnV0dG9uLCBzZXRSZW1vdmVOb3RlYm9va0J1dHRvbl0gPSB1c2VTdGF0ZTxib29sZWFuPihcbiAgICBmYWxzZVxuICApO1xuXG4gIGNvbnN0IHJlbW92ZU5ld05vdGVib29rID0gKCkgPT4ge1xuICAgIHByb3BzLnJlbW92ZU5vdGVib29rKHByb3BzLnRoaXNOb3RlYm9vayk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdEl0ZW1cbiAgICAgIGJ1dHRvblxuICAgICAga2V5PXtwcm9wcy5ub3RlYm9va3NbcHJvcHMudGhpc05vdGVib29rXS5pZH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIHByb3BzLm5vdGVib29rID09PSBwcm9wcy50aGlzTm90ZWJvb2tcbiAgICAgICAgICA/IGNsYXNzZXMubGlzdFNlbGVjdGVkXG4gICAgICAgICAgOiBjbGFzc2VzLmxpc3RcbiAgICAgIH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgaWYgKCFyZW1vdmVOb3RlYm9va0J1dHRvbilcbiAgICAgICAgICBwcm9wcy5oYW5kbGVOb3RlYm9va0NsaWNrKHByb3BzLnRoaXNOb3RlYm9vayk7XG4gICAgICB9fVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcGFkZGluZzogcHJvcHMub3BlbiA/ICcwcHggMHB4IDBweCAzMHB4JyA6ICcwcHggMTVweCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgIDxJbXBvcnRDb250YWN0c0ljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XG4gICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17cHJvcHMubm90ZWJvb2tzW3Byb3BzLnRoaXNOb3RlYm9va10udGl0bGV9IC8+XG4gICAgICA8TGlzdEl0ZW1JY29uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICByZW1vdmVOZXdOb3RlYm9vaygpO1xuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0UmVtb3ZlTm90ZWJvb2tCdXR0b24odHJ1ZSl9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0UmVtb3ZlTm90ZWJvb2tCdXR0b24oZmFsc2UpfVxuICAgICAgPlxuICAgICAgICB7cmVtb3ZlTm90ZWJvb2tCdXR0b24gJiYgb3BlbiA/IChcbiAgICAgICAgICA8UmVtb3ZlSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMucmVtb3ZlTm90ZWJvb2tJY29ufSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxNb3JlSG9yaXpJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51Tm90ZWJvb2tJY29ufSAvPlxuICAgICAgICApfVxuICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgPC9MaXN0SXRlbT5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sidebar-item.tsx\n");

/***/ })

})
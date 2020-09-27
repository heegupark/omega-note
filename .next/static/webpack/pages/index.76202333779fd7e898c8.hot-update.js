webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sidebar-item.tsx":
/*!*************************************!*\
  !*** ./components/sidebar-item.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SidebarItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"./node_modules/@material-ui/core/esm/ListItem/index.js\");\n/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ \"./node_modules/@material-ui/core/esm/ListItemIcon/index.js\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"./node_modules/@material-ui/core/esm/ListItemText/index.js\");\n/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ImportContacts */ \"./node_modules/@material-ui/icons/ImportContacts.js\");\n/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Remove */ \"./node_modules/@material-ui/icons/Remove.js\");\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/MoreHoriz */ \"./node_modules/@material-ui/icons/MoreHoriz.js\");\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/esm/Modal/index.js\");\n/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Backdrop */ \"./node_modules/@material-ui/core/esm/Backdrop/index.js\");\n/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Fade */ \"./node_modules/@material-ui/core/esm/Fade/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/sidebar-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    listSelected: {\n      backgroundColor: 'rgb(64,64,64)',\n      borderRadius: '3px',\n      '&:hover': {\n        backgroundColor: 'rgb(51,51,51)',\n        borderRadius: '3px'\n      }\n    },\n    list: {\n      '&:hover': {\n        backgroundColor: 'rgb(51,51,51)',\n        borderRadius: '3px'\n      }\n    },\n    icon: {\n      minWidth: '36px',\n      color: 'rgb(165,165,165)'\n    },\n    removeNotebookIcon: {\n      color: 'red',\n      marginLeft: '20px'\n    },\n    menuNotebookIcon: {\n      color: 'rgb(51,51,51)',\n      marginLeft: '20px'\n    },\n    modal: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    paper: {\n      backgroundColor: 'rgb(222, 222, 222)',\n      boxShadow: theme.shadows[5],\n      padding: '20px',\n      textAlign: 'center',\n      width: '350px',\n      borderRadius: '5px',\n      fontSize: '12px',\n      outline: 'none'\n    },\n    paragraph: {\n      fontSize: '16px',\n      color: 'rgb(66, 54, 48)',\n      marginBottom: '10px',\n      padding: '10px'\n    },\n    button: {\n      height: '30px',\n      margin: '10px 15px'\n    }\n  });\n});\nfunction SidebarItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      removeNotebookButton = _useState[0],\n      setRemoveNotebookButton = _useState[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      openModal = _React$useState2[0],\n      setOpenModal = _React$useState2[1];\n\n  var handleModalClose = function handleModalClose() {\n    setOpenModal(false);\n  };\n\n  var removeNewNotebook = function removeNewNotebook() {\n    setOpenModal(true);\n  };\n\n  var handleDeleteClick = function handleDeleteClick() {\n    props.removeNotebook(props.thisNotebook);\n    handleModalClose();\n  };\n\n  var canMoveNote = function canMoveNote() {\n    console.log('note can be here');\n  };\n\n  var moveNote = function moveNote() {\n    console.log('note got here');\n  };\n\n  var _useDrop = Object(react_dnd__WEBPACK_IMPORTED_MODULE_13__[\"useDrop\"])({\n    accept: props.notebooks[props.thisNotebook].title,\n    drop: function drop() {\n      return moveNote();\n    },\n    collect: function collect(monitor) {\n      return {\n        isOver: monitor.isOver(),\n        canDrop: monitor.canDrop()\n      };\n    }\n  }),\n      _useDrop2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDrop, 2),\n      _useDrop2$ = _useDrop2[0],\n      isOver = _useDrop2$.isOver,\n      canDrop = _useDrop2$.canDrop,\n      drop = _useDrop2[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    button: true,\n    key: props.notebooks[props.thisNotebook].id,\n    className: props.notebook === props.thisNotebook ? classes.listSelected : classes.list,\n    onClick: function onClick() {\n      if (!removeNotebookButton) props.handleNotebookClick(props.thisNotebook);\n    },\n    style: {\n      padding: props.open ? '0px 0px 0px 30px' : '0px 15px',\n      border: !isOver && canDrop ? '1px solid blue' : ''\n    },\n    ref: drop,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: classes.icon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 11\n    }\n  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    primary: props.notebooks[props.thisNotebook].title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onClick: function onClick() {\n      removeNewNotebook();\n    },\n    onMouseOver: function onMouseOver() {\n      return setRemoveNotebookButton(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setRemoveNotebookButton(false);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 9\n    }\n  }, removeNotebookButton && open ? __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    className: classes.removeNotebookIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 13\n    }\n  }) : __jsx(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    className: classes.menuNotebookIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 13\n    }\n  }))), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    className: classes.modal,\n    open: openModal,\n    closeAfterTransition: true,\n    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    BackdropProps: {\n      timeout: 500\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    \"in\": openModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.paragraph,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 13\n    }\n  }, \"This will delete the folder and move all notes in this folder to trash.\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"secondary\",\n    onClick: handleDeleteClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 13\n    }\n  }, \"Delete\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"default\",\n    onClick: handleModalClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 177,\n      columnNumber: 13\n    }\n  }, \"Cancel\")))));\n}\n\n_s(SidebarItem, \"GCYJXVY35NXP3+XLZyeCpV8YNU4=\", false, function () {\n  return [useStyles, react_dnd__WEBPACK_IMPORTED_MODULE_13__[\"useDrop\"]];\n});\n\n_c = SidebarItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"SidebarItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLWl0ZW0udHN4P2NiYjYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwibGlzdFNlbGVjdGVkIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwibGlzdCIsImljb24iLCJtaW5XaWR0aCIsImNvbG9yIiwicmVtb3ZlTm90ZWJvb2tJY29uIiwibWFyZ2luTGVmdCIsIm1lbnVOb3RlYm9va0ljb24iLCJtb2RhbCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYXBlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwid2lkdGgiLCJmb250U2l6ZSIsIm91dGxpbmUiLCJwYXJhZ3JhcGgiLCJtYXJnaW5Cb3R0b20iLCJidXR0b24iLCJoZWlnaHQiLCJtYXJnaW4iLCJTaWRlYmFySXRlbSIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwicmVtb3ZlTm90ZWJvb2tCdXR0b24iLCJzZXRSZW1vdmVOb3RlYm9va0J1dHRvbiIsIlJlYWN0Iiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwiaGFuZGxlTW9kYWxDbG9zZSIsInJlbW92ZU5ld05vdGVib29rIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJyZW1vdmVOb3RlYm9vayIsInRoaXNOb3RlYm9vayIsImNhbk1vdmVOb3RlIiwiY29uc29sZSIsImxvZyIsIm1vdmVOb3RlIiwidXNlRHJvcCIsImFjY2VwdCIsIm5vdGVib29rcyIsInRpdGxlIiwiZHJvcCIsImNvbGxlY3QiLCJtb25pdG9yIiwiaXNPdmVyIiwiY2FuRHJvcCIsImlkIiwibm90ZWJvb2siLCJoYW5kbGVOb3RlYm9va0NsaWNrIiwib3BlbiIsImJvcmRlciIsIkJhY2tkcm9wIiwidGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7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TSxVQUFJMUIsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVMLE9BQU8sQ0FBQ2YsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFZSxPQUFPLENBQUNQLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0VBREYsRUFLRSxNQUFDLGlFQUFEO0FBQ0UsYUFBUyxFQUFFTyxPQUFPLENBQUNMLE1BRHJCO0FBRUUsV0FBTyxFQUFDLFVBRlY7QUFHRSxTQUFLLEVBQUMsV0FIUjtBQUlFLFdBQU8sRUFBRWMsaUJBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLEVBYUUsTUFBQyxpRUFBRDtBQUNFLGFBQVMsRUFBRVQsT0FBTyxDQUFDTCxNQURyQjtBQUVFLFdBQU8sRUFBQyxVQUZWO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFJRSxXQUFPLEVBQUVZLGdCQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRixDQURGLENBVEYsQ0FyQ0YsQ0FERjtBQTBFRDs7R0EvR3VCVCxXO1VBQ04vQixTLEVBMkJvQmlELGtEOzs7S0E1QmRsQixXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zaWRlYmFyLWl0ZW0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEltcG9ydENvbnRhY3RzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW1wb3J0Q29udGFjdHMnO1xuaW1wb3J0IElNYWluUHJvcHMgZnJvbSAnLi9pbnRlcmZhY2VzL2ltYWlucHJvcHMnO1xuaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZSc7XG5pbXBvcnQgTW9yZUhvcml6SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZUhvcml6JztcbmltcG9ydCBNb2RhbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbCc7XG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AnO1xuaW1wb3J0IEZhZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFkZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgeyB1c2VEcm9wLCBEcm9wVGFyZ2V0IH0gZnJvbSAncmVhY3QtZG5kJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIGxpc3RTZWxlY3RlZDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDY0LDY0LDY0KScsXG4gICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICBtaW5XaWR0aDogJzM2cHgnLFxuICAgICAgY29sb3I6ICdyZ2IoMTY1LDE2NSwxNjUpJyxcbiAgICB9LFxuICAgIHJlbW92ZU5vdGVib29rSWNvbjoge1xuICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgbWFyZ2luTGVmdDogJzIwcHgnLFxuICAgIH0sXG4gICAgbWVudU5vdGVib29rSWNvbjoge1xuICAgICAgY29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgIG1hcmdpbkxlZnQ6ICcyMHB4JyxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIHBhcGVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjIyLCAyMjIsIDIyMiknLFxuICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxuICAgICAgcGFkZGluZzogJzIwcHgnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMzUwcHgnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgfSxcbiAgICBwYXJhZ3JhcGg6IHtcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICBjb2xvcjogJ3JnYig2NiwgNTQsIDQ4KScsXG4gICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICBtYXJnaW46ICcxMHB4IDE1cHgnLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5pbnRlcmZhY2UgU2lkZWJhckl0ZW1Qcm9wcyBleHRlbmRzIElNYWluUHJvcHMge1xuICB0aGlzTm90ZWJvb2s6IHN0cmluZztcbiAgb3BlbjogYm9vbGVhbjtcbiAgaGFuZGxlTm90ZWJvb2tDbGljazogKG5vdGVib29rOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHJlbW92ZU5vdGVib29rOiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhckl0ZW0ocHJvcHM6IFNpZGViYXJJdGVtUHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbcmVtb3ZlTm90ZWJvb2tCdXR0b24sIHNldFJlbW92ZU5vdGVib29rQnV0dG9uXSA9IHVzZVN0YXRlPGJvb2xlYW4+KFxuICAgIGZhbHNlXG4gICk7XG4gIGNvbnN0IFtvcGVuTW9kYWwsIHNldE9wZW5Nb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlTW9kYWxDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuTW9kYWwoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZU5ld05vdGVib29rID0gKCkgPT4ge1xuICAgIHNldE9wZW5Nb2RhbCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVDbGljayA9ICgpID0+IHtcbiAgICBwcm9wcy5yZW1vdmVOb3RlYm9vayhwcm9wcy50aGlzTm90ZWJvb2spO1xuICAgIGhhbmRsZU1vZGFsQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBjYW5Nb3ZlTm90ZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnbm90ZSBjYW4gYmUgaGVyZScpO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVOb3RlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdub3RlIGdvdCBoZXJlJyk7XG4gIH07XG5cbiAgY29uc3QgW3sgaXNPdmVyLCBjYW5Ecm9wIH0sIGRyb3BdID0gdXNlRHJvcCh7XG4gICAgYWNjZXB0OiBwcm9wcy5ub3RlYm9va3NbcHJvcHMudGhpc05vdGVib29rXS50aXRsZSxcbiAgICBkcm9wOiAoKSA9PiBtb3ZlTm90ZSgpLFxuICAgIGNvbGxlY3Q6IChtb25pdG9yKSA9PiAoe1xuICAgICAgaXNPdmVyOiBtb25pdG9yLmlzT3ZlcigpLFxuICAgICAgY2FuRHJvcDogbW9uaXRvci5jYW5Ecm9wKCksXG4gICAgfSksXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaXN0SXRlbVxuICAgICAgICBidXR0b25cbiAgICAgICAga2V5PXtwcm9wcy5ub3RlYm9va3NbcHJvcHMudGhpc05vdGVib29rXS5pZH1cbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICBwcm9wcy5ub3RlYm9vayA9PT0gcHJvcHMudGhpc05vdGVib29rXG4gICAgICAgICAgICA/IGNsYXNzZXMubGlzdFNlbGVjdGVkXG4gICAgICAgICAgICA6IGNsYXNzZXMubGlzdFxuICAgICAgICB9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAoIXJlbW92ZU5vdGVib29rQnV0dG9uKVxuICAgICAgICAgICAgcHJvcHMuaGFuZGxlTm90ZWJvb2tDbGljayhwcm9wcy50aGlzTm90ZWJvb2spO1xuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmc6IHByb3BzLm9wZW4gPyAnMHB4IDBweCAwcHggMzBweCcgOiAnMHB4IDE1cHgnLFxuICAgICAgICAgIGJvcmRlcjogIWlzT3ZlciAmJiBjYW5Ecm9wID8gJzFweCBzb2xpZCBibHVlJyA6ICcnLFxuICAgICAgICB9fVxuICAgICAgICByZWY9e2Ryb3B9XG4gICAgICA+XG4gICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgPEltcG9ydENvbnRhY3RzSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cbiAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17cHJvcHMubm90ZWJvb2tzW3Byb3BzLnRoaXNOb3RlYm9va10udGl0bGV9IC8+XG4gICAgICAgIDxMaXN0SXRlbUljb25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVOZXdOb3RlYm9vaygpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldFJlbW92ZU5vdGVib29rQnV0dG9uKHRydWUpfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0UmVtb3ZlTm90ZWJvb2tCdXR0b24oZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAge3JlbW92ZU5vdGVib29rQnV0dG9uICYmIG9wZW4gPyAoXG4gICAgICAgICAgICA8UmVtb3ZlSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMucmVtb3ZlTm90ZWJvb2tJY29ufSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TW9yZUhvcml6SWNvbiBjbGFzc05hbWU9e2NsYXNzZXMubWVudU5vdGVib29rSWNvbn0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICA8TW9kYWxcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxuICAgICAgICBvcGVuPXtvcGVuTW9kYWx9XG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEZhZGUgaW49e29wZW5Nb2RhbH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAgVGhpcyB3aWxsIGRlbGV0ZSB0aGUgZm9sZGVyIGFuZCBtb3ZlIGFsbCBub3RlcyBpbiB0aGlzIGZvbGRlciB0b1xuICAgICAgICAgICAgICB0cmFzaC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUNsaWNrfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBjb2xvcj1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2RhbENsb3NlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZhZGU+XG4gICAgICA8L01vZGFsPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sidebar-item.tsx\n");

/***/ })

})
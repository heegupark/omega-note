webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sidebar-item.tsx":
/*!*************************************!*\
  !*** ./components/sidebar-item.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SidebarItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"./node_modules/@material-ui/core/esm/ListItem/index.js\");\n/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ \"./node_modules/@material-ui/core/esm/ListItemIcon/index.js\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"./node_modules/@material-ui/core/esm/ListItemText/index.js\");\n/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ImportContacts */ \"./node_modules/@material-ui/icons/ImportContacts.js\");\n/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Remove */ \"./node_modules/@material-ui/icons/Remove.js\");\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/MoreHoriz */ \"./node_modules/@material-ui/icons/MoreHoriz.js\");\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/esm/Modal/index.js\");\n/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Backdrop */ \"./node_modules/@material-ui/core/esm/Backdrop/index.js\");\n/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Fade */ \"./node_modules/@material-ui/core/esm/Fade/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/sidebar-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    listSelected: {\n      backgroundColor: 'rgb(64,64,64)',\n      borderRadius: '3px',\n      '&:hover': {\n        backgroundColor: 'rgb(51,51,51)',\n        borderRadius: '3px'\n      }\n    },\n    list: {\n      '&:hover': {\n        backgroundColor: 'rgb(51,51,51)',\n        borderRadius: '3px'\n      }\n    },\n    icon: {\n      minWidth: '36px',\n      color: 'rgb(165,165,165)'\n    },\n    removeNotebookIcon: {\n      color: 'red',\n      marginLeft: '20px'\n    },\n    menuNotebookIcon: {\n      color: 'rgb(51,51,51)',\n      marginLeft: '20px'\n    },\n    modal: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    paper: {\n      backgroundColor: 'rgb(222, 222, 222)',\n      boxShadow: theme.shadows[5],\n      padding: '20px',\n      textAlign: 'center',\n      width: '350px',\n      borderRadius: '5px',\n      fontSize: '12px',\n      outline: 'none'\n    },\n    paragraph: {\n      fontSize: '16px',\n      color: 'rgb(66, 54, 48)',\n      marginBottom: '10px',\n      padding: '10px'\n    },\n    button: {\n      height: '30px',\n      margin: '10px 15px'\n    }\n  });\n});\nfunction SidebarItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      removeNotebookButton = _useState[0],\n      setRemoveNotebookButton = _useState[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      openModal = _React$useState2[0],\n      setOpenModal = _React$useState2[1];\n\n  var handleModalClose = function handleModalClose() {\n    setOpenModal(false);\n  };\n\n  var removeNewNotebook = function removeNewNotebook() {\n    setOpenModal(true);\n  };\n\n  var handleDeleteClick = function handleDeleteClick() {\n    props.removeNotebook(props.thisNotebook);\n    handleModalClose();\n  };\n\n  var canMoveNote = function canMoveNote() {\n    console.log('note can be here');\n  };\n\n  var moveNote = function moveNote() {\n    console.log('note got here');\n  };\n\n  var _useDrop = Object(react_dnd__WEBPACK_IMPORTED_MODULE_13__[\"useDrop\"])({\n    accept: props.notebooks[props.thisNotebook].title,\n    drop: function drop() {\n      return moveNote();\n    },\n    collect: function collect(monitor) {\n      return {\n        isOver: monitor.isOver(),\n        canDrop: monitor.canDrop()\n      };\n    }\n  }),\n      _useDrop2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDrop, 2),\n      _useDrop2$ = _useDrop2[0],\n      isOver = _useDrop2$.isOver,\n      canDrop = _useDrop2$.canDrop,\n      drop = _useDrop2[1];\n\n  var isActive = isOver && canDrop;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    button: true,\n    key: props.notebooks[props.thisNotebook].id,\n    className: props.notebook === props.thisNotebook ? classes.listSelected : classes.list,\n    onClick: function onClick() {\n      if (!removeNotebookButton) props.handleNotebookClick(props.thisNotebook);\n    },\n    style: {\n      padding: props.open ? '0px 0px 0px 30px' : '0px 15px',\n      border: !isOver && canDrop ? '1px solid blue' : ''\n    },\n    ref: drop,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: classes.icon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 11\n    }\n  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    primary: props.notebooks[props.thisNotebook].title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onClick: function onClick() {\n      removeNewNotebook();\n    },\n    onMouseOver: function onMouseOver() {\n      return setRemoveNotebookButton(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setRemoveNotebookButton(false);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 9\n    }\n  }, removeNotebookButton && open ? __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    className: classes.removeNotebookIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 13\n    }\n  }) : __jsx(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    className: classes.menuNotebookIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 13\n    }\n  }))), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    className: classes.modal,\n    open: openModal,\n    closeAfterTransition: true,\n    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    BackdropProps: {\n      timeout: 500\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    \"in\": openModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.paragraph,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 13\n    }\n  }, \"This will delete the folder and move all notes in this folder to trash.\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"secondary\",\n    onClick: handleDeleteClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 13\n    }\n  }, \"Delete\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"default\",\n    onClick: handleModalClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 177,\n      columnNumber: 13\n    }\n  }, \"Cancel\")))));\n}\n\n_s(SidebarItem, \"GCYJXVY35NXP3+XLZyeCpV8YNU4=\", false, function () {\n  return [useStyles, react_dnd__WEBPACK_IMPORTED_MODULE_13__[\"useDrop\"]];\n});\n\n_c = SidebarItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"SidebarItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLWl0ZW0udHN4P2NiYjYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwibGlzdFNlbGVjdGVkIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwibGlzdCIsImljb24iLCJtaW5XaWR0aCIsImNvbG9yIiwicmVtb3ZlTm90ZWJvb2tJY29uIiwibWFyZ2luTGVmdCIsIm1lbnVOb3RlYm9va0ljb24iLCJtb2RhbCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYXBlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwid2lkdGgiLCJmb250U2l6ZSIsIm91dGxpbmUiLCJwYXJhZ3JhcGgiLCJtYXJnaW5Cb3R0b20iLCJidXR0b24iLCJoZWlnaHQiLCJtYXJnaW4iLCJTaWRlYmFySXRlbSIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwicmVtb3ZlTm90ZWJvb2tCdXR0b24iLCJzZXRSZW1vdmVOb3RlYm9va0J1dHRvbiIsIlJlYWN0Iiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwiaGFuZGxlTW9kYWxDbG9zZSIsInJlbW92ZU5ld05vdGVib29rIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJyZW1vdmVOb3RlYm9vayIsInRoaXNOb3RlYm9vayIsImNhbk1vdmVOb3RlIiwiY29uc29sZSIsImxvZyIsIm1vdmVOb3RlIiwidXNlRHJvcCIsImFjY2VwdCIsIm5vdGVib29rcyIsInRpdGxlIiwiZHJvcCIsImNvbGxlY3QiLCJtb25pdG9yIiwiaXNPdmVyIiwiY2FuRHJvcCIsImlzQWN0aXZlIiwiaWQiLCJub3RlYm9vayIsImhhbmRsZU5vdGVib29rQ2xpY2siLCJvcGVuIiwiYm9yZGVyIiwiQmFja2Ryb3AiLCJ0aW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0UsTUFBQywrREFBRDtBQUFNLFVBQUkzQixTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUwsT0FBTyxDQUFDZixLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVlLE9BQU8sQ0FBQ1AsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrRUFERixFQUtFLE1BQUMsaUVBQUQ7QUFDRSxhQUFTLEVBQUVPLE9BQU8sQ0FBQ0wsTUFEckI7QUFFRSxXQUFPLEVBQUMsVUFGVjtBQUdFLFNBQUssRUFBQyxXQUhSO0FBSUUsV0FBTyxFQUFFYyxpQkFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsRUFhRSxNQUFDLGlFQUFEO0FBQ0UsYUFBUyxFQUFFVCxPQUFPLENBQUNMLE1BRHJCO0FBRUUsV0FBTyxFQUFDLFVBRlY7QUFHRSxTQUFLLEVBQUMsU0FIUjtBQUlFLFdBQU8sRUFBRVksZ0JBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLENBREYsQ0FURixDQXJDRixDQURGO0FBMEVEOztHQS9HdUJULFc7VUFDTi9CLFMsRUEyQm9CaUQsa0Q7OztLQTVCZGxCLFciLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGViYXItaXRlbS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgSW1wb3J0Q29udGFjdHNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbXBvcnRDb250YWN0cyc7XG5pbXBvcnQgSU1haW5Qcm9wcyBmcm9tICcuL2ludGVyZmFjZXMvaW1haW5wcm9wcyc7XG5pbXBvcnQgUmVtb3ZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlJztcbmltcG9ydCBNb3JlSG9yaXpJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3JlSG9yaXonO1xuaW1wb3J0IE1vZGFsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01vZGFsJztcbmltcG9ydCBCYWNrZHJvcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcCc7XG5pbXBvcnQgRmFkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWRlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7IHVzZURyb3AsIERyb3BUYXJnZXQgfSBmcm9tICdyZWFjdC1kbmQnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgbGlzdFNlbGVjdGVkOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNjQsNjQsNjQpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbGlzdDoge1xuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIG1pbldpZHRoOiAnMzZweCcsXG4gICAgICBjb2xvcjogJ3JnYigxNjUsMTY1LDE2NSknLFxuICAgIH0sXG4gICAgcmVtb3ZlTm90ZWJvb2tJY29uOiB7XG4gICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICBtYXJnaW5MZWZ0OiAnMjBweCcsXG4gICAgfSxcbiAgICBtZW51Tm90ZWJvb2tJY29uOiB7XG4gICAgICBjb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgbWFyZ2luTGVmdDogJzIwcHgnLFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgcGFwZXI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMjIsIDIyMiwgMjIyKScsXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXG4gICAgICBwYWRkaW5nOiAnMjBweCcsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgd2lkdGg6ICczNTBweCcsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICB9LFxuICAgIHBhcmFncmFwaDoge1xuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIGNvbG9yOiAncmdiKDY2LCA1NCwgNDgpJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxuICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICAgIG1hcmdpbjogJzEwcHggMTVweCcsXG4gICAgfSxcbiAgfSlcbik7XG5cbmludGVyZmFjZSBTaWRlYmFySXRlbVByb3BzIGV4dGVuZHMgSU1haW5Qcm9wcyB7XG4gIHRoaXNOb3RlYm9vazogc3RyaW5nO1xuICBvcGVuOiBib29sZWFuO1xuICBoYW5kbGVOb3RlYm9va0NsaWNrOiAobm90ZWJvb2s6IHN0cmluZykgPT4gdm9pZDtcbiAgcmVtb3ZlTm90ZWJvb2s6IChpZDogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFySXRlbShwcm9wczogU2lkZWJhckl0ZW1Qcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtyZW1vdmVOb3RlYm9va0J1dHRvbiwgc2V0UmVtb3ZlTm90ZWJvb2tCdXR0b25dID0gdXNlU3RhdGU8Ym9vbGVhbj4oXG4gICAgZmFsc2VcbiAgKTtcbiAgY29uc3QgW29wZW5Nb2RhbCwgc2V0T3Blbk1vZGFsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVNb2RhbENsb3NlID0gKCkgPT4ge1xuICAgIHNldE9wZW5Nb2RhbChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlTmV3Tm90ZWJvb2sgPSAoKSA9PiB7XG4gICAgc2V0T3Blbk1vZGFsKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNsaWNrID0gKCkgPT4ge1xuICAgIHByb3BzLnJlbW92ZU5vdGVib29rKHByb3BzLnRoaXNOb3RlYm9vayk7XG4gICAgaGFuZGxlTW9kYWxDbG9zZSgpO1xuICB9O1xuXG4gIGNvbnN0IGNhbk1vdmVOb3RlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdub3RlIGNhbiBiZSBoZXJlJyk7XG4gIH07XG5cbiAgY29uc3QgbW92ZU5vdGUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ25vdGUgZ290IGhlcmUnKTtcbiAgfTtcblxuICBjb25zdCBbeyBpc092ZXIsIGNhbkRyb3AgfSwgZHJvcF0gPSB1c2VEcm9wKHtcbiAgICBhY2NlcHQ6IHByb3BzLm5vdGVib29rc1twcm9wcy50aGlzTm90ZWJvb2tdLnRpdGxlLFxuICAgIGRyb3A6ICgpID0+IG1vdmVOb3RlKCksXG4gICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XG4gICAgICBpc092ZXI6IG1vbml0b3IuaXNPdmVyKCksXG4gICAgICBjYW5Ecm9wOiBtb25pdG9yLmNhbkRyb3AoKSxcbiAgICB9KSxcbiAgfSk7XG4gIGNvbnN0IGlzQWN0aXZlID0gaXNPdmVyICYmIGNhbkRyb3A7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaXN0SXRlbVxuICAgICAgICBidXR0b25cbiAgICAgICAga2V5PXtwcm9wcy5ub3RlYm9va3NbcHJvcHMudGhpc05vdGVib29rXS5pZH1cbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICBwcm9wcy5ub3RlYm9vayA9PT0gcHJvcHMudGhpc05vdGVib29rXG4gICAgICAgICAgICA/IGNsYXNzZXMubGlzdFNlbGVjdGVkXG4gICAgICAgICAgICA6IGNsYXNzZXMubGlzdFxuICAgICAgICB9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAoIXJlbW92ZU5vdGVib29rQnV0dG9uKVxuICAgICAgICAgICAgcHJvcHMuaGFuZGxlTm90ZWJvb2tDbGljayhwcm9wcy50aGlzTm90ZWJvb2spO1xuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmc6IHByb3BzLm9wZW4gPyAnMHB4IDBweCAwcHggMzBweCcgOiAnMHB4IDE1cHgnLFxuICAgICAgICAgIGJvcmRlcjogIWlzT3ZlciAmJiBjYW5Ecm9wID8gJzFweCBzb2xpZCBibHVlJyA6ICcnLFxuICAgICAgICB9fVxuICAgICAgICByZWY9e2Ryb3B9XG4gICAgICA+XG4gICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgPEltcG9ydENvbnRhY3RzSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cbiAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17cHJvcHMubm90ZWJvb2tzW3Byb3BzLnRoaXNOb3RlYm9va10udGl0bGV9IC8+XG4gICAgICAgIDxMaXN0SXRlbUljb25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVOZXdOb3RlYm9vaygpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldFJlbW92ZU5vdGVib29rQnV0dG9uKHRydWUpfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0UmVtb3ZlTm90ZWJvb2tCdXR0b24oZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAge3JlbW92ZU5vdGVib29rQnV0dG9uICYmIG9wZW4gPyAoXG4gICAgICAgICAgICA8UmVtb3ZlSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMucmVtb3ZlTm90ZWJvb2tJY29ufSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TW9yZUhvcml6SWNvbiBjbGFzc05hbWU9e2NsYXNzZXMubWVudU5vdGVib29rSWNvbn0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICA8TW9kYWxcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxuICAgICAgICBvcGVuPXtvcGVuTW9kYWx9XG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEZhZGUgaW49e29wZW5Nb2RhbH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAgVGhpcyB3aWxsIGRlbGV0ZSB0aGUgZm9sZGVyIGFuZCBtb3ZlIGFsbCBub3RlcyBpbiB0aGlzIGZvbGRlciB0b1xuICAgICAgICAgICAgICB0cmFzaC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUNsaWNrfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBjb2xvcj1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2RhbENsb3NlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZhZGU+XG4gICAgICA8L01vZGFsPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sidebar-item.tsx\n");

/***/ })

})
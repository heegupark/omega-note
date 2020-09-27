webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sidebar-item.tsx":
/*!*************************************!*\
  !*** ./components/sidebar-item.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SidebarItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"./node_modules/@material-ui/core/esm/ListItem/index.js\");\n/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ \"./node_modules/@material-ui/core/esm/ListItemIcon/index.js\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"./node_modules/@material-ui/core/esm/ListItemText/index.js\");\n/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ImportContacts */ \"./node_modules/@material-ui/icons/ImportContacts.js\");\n/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Remove */ \"./node_modules/@material-ui/icons/Remove.js\");\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/MoreHoriz */ \"./node_modules/@material-ui/icons/MoreHoriz.js\");\n/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/esm/Modal/index.js\");\n/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Backdrop */ \"./node_modules/@material-ui/core/esm/Backdrop/index.js\");\n/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Fade */ \"./node_modules/@material-ui/core/esm/Fade/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/sidebar-item.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    listSelected: {\n      backgroundColor: 'rgb(64,64,64)',\n      borderRadius: '3px',\n      '&:hover': {\n        backgroundColor: 'rgb(51,51,51)',\n        borderRadius: '3px'\n      }\n    },\n    list: {\n      '&:hover': {\n        backgroundColor: 'rgb(51,51,51)',\n        borderRadius: '3px'\n      }\n    },\n    icon: {\n      minWidth: '36px',\n      color: 'rgb(165,165,165)'\n    },\n    removeNotebookIcon: {\n      color: 'red',\n      marginLeft: '20px'\n    },\n    menuNotebookIcon: {\n      color: 'rgb(51,51,51)',\n      marginLeft: '20px'\n    },\n    modal: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    paper: {\n      backgroundColor: 'rgb(222, 222, 222)',\n      boxShadow: theme.shadows[5],\n      padding: '20px',\n      textAlign: 'center',\n      width: '350px',\n      borderRadius: '5px',\n      fontSize: '12px',\n      outline: 'none'\n    },\n    paragraph: {\n      fontSize: '16px',\n      color: 'rgb(66, 54, 48)',\n      marginBottom: '10px',\n      padding: '10px'\n    },\n    button: {\n      height: '30px',\n      margin: '10px 15px'\n    }\n  });\n});\nfunction SidebarItem(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      removeNotebookButton = _useState[0],\n      setRemoveNotebookButton = _useState[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      openModal = _React$useState2[0],\n      setOpenModal = _React$useState2[1];\n\n  var handleModalClose = function handleModalClose() {\n    setOpenModal(false);\n  };\n\n  var removeNewNotebook = function removeNewNotebook() {\n    setOpenModal(true);\n  };\n\n  var handleDeleteClick = function handleDeleteClick() {\n    props.removeNotebook(props.thisNotebook);\n    handleModalClose();\n  };\n\n  var canMoveNote = function canMoveNote() {\n    console.log('note can be here');\n  };\n\n  var _useDrop = Object(react_dnd__WEBPACK_IMPORTED_MODULE_13__[\"useDrop\"])({\n    accept: 'note',\n    drop: function drop() {\n      return moveNote();\n    },\n    collect: function collect(monitor) {\n      return {\n        isOver: monitor.isOver(),\n        canDrop: monitor.canDrop(),\n        item: monitor.getItem()\n      };\n    }\n  }),\n      _useDrop2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDrop, 2),\n      _useDrop2$ = _useDrop2[0],\n      isOver = _useDrop2$.isOver,\n      canDrop = _useDrop2$.canDrop,\n      item = _useDrop2$.item,\n      drop = _useDrop2[1];\n\n  var moveNote = function moveNote() {\n    console.log(props.thisNotebook);\n    console.log(item === null || item === void 0 ? void 0 : item.id);\n    console.log(item === null || item === void 0 ? void 0 : item.notebook);\n    console.log('note got here');\n\n    if ((item === null || item === void 0 ? void 0 : item.notebook) !== props.thisNotebook) {\n      props.moveNote(item === null || item === void 0 ? void 0 : item.notebook, props.thisNotebook, item === null || item === void 0 ? void 0 : item.id);\n    }\n  };\n\n  var isActive = isOver && canDrop;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    button: true,\n    key: props.notebooks[props.thisNotebook].id,\n    className: props.notebook === props.thisNotebook ? classes.listSelected : classes.list,\n    onClick: function onClick() {\n      if (!removeNotebookButton) props.handleNotebookClick(props.thisNotebook);\n    },\n    style: {\n      padding: props.open ? '0px 0px 0px 30px' : '0px 15px',\n      backgroundColor: isActive ? 'green' : '',\n      borderRadius: isActive ? '5px' : ''\n    },\n    ref: drop,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: classes.icon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 11\n    }\n  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    primary: props.notebooks[props.thisNotebook].title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onClick: function onClick() {\n      removeNewNotebook();\n    },\n    onMouseOver: function onMouseOver() {\n      return setRemoveNotebookButton(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setRemoveNotebookButton(false);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 9\n    }\n  }, removeNotebookButton && open ? __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    className: classes.removeNotebookIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 13\n    }\n  }) : __jsx(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    className: classes.menuNotebookIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 13\n    }\n  }))), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    className: classes.modal,\n    open: openModal,\n    closeAfterTransition: true,\n    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    BackdropProps: {\n      timeout: 500\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    \"in\": openModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 173,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: classes.paragraph,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 13\n    }\n  }, \"This will delete the folder and move all notes in this folder to trash.\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"secondary\",\n    onClick: handleDeleteClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 178,\n      columnNumber: 13\n    }\n  }, \"Delete\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"default\",\n    onClick: handleModalClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 186,\n      columnNumber: 13\n    }\n  }, \"Cancel\")))));\n}\n\n_s(SidebarItem, \"IpT6iq7anfc7kj2t4I41F6Ll73I=\", false, function () {\n  return [useStyles, react_dnd__WEBPACK_IMPORTED_MODULE_13__[\"useDrop\"]];\n});\n\n_c = SidebarItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"SidebarItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLWl0ZW0udHN4P2NiYjYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwibGlzdFNlbGVjdGVkIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwibGlzdCIsImljb24iLCJtaW5XaWR0aCIsImNvbG9yIiwicmVtb3ZlTm90ZWJvb2tJY29uIiwibWFyZ2luTGVmdCIsIm1lbnVOb3RlYm9va0ljb24iLCJtb2RhbCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYXBlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwid2lkdGgiLCJmb250U2l6ZSIsIm91dGxpbmUiLCJwYXJhZ3JhcGgiLCJtYXJnaW5Cb3R0b20iLCJidXR0b24iLCJoZWlnaHQiLCJtYXJnaW4iLCJTaWRlYmFySXRlbSIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwicmVtb3ZlTm90ZWJvb2tCdXR0b24iLCJzZXRSZW1vdmVOb3RlYm9va0J1dHRvbiIsIlJlYWN0Iiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwiaGFuZGxlTW9kYWxDbG9zZSIsInJlbW92ZU5ld05vdGVib29rIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJyZW1vdmVOb3RlYm9vayIsInRoaXNOb3RlYm9vayIsImNhbk1vdmVOb3RlIiwiY29uc29sZSIsImxvZyIsInVzZURyb3AiLCJhY2NlcHQiLCJkcm9wIiwibW92ZU5vdGUiLCJjb2xsZWN0IiwibW9uaXRvciIsImlzT3ZlciIsImNhbkRyb3AiLCJpdGVtIiwiZ2V0SXRlbSIsImlkIiwibm90ZWJvb2siLCJpc0FjdGl2ZSIsIm5vdGVib29rcyIsImhhbmRsZU5vdGVib29rQ2xpY2siLCJvcGVuIiwidGl0bGUiLCJCYWNrZHJvcCIsInRpbWVvdXQiXSwibWFwcGluZ3Mi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QyxpRUFBRDtBQUNFLGFBQVMsRUFBRVQsT0FBTyxDQUFDTCxNQURyQjtBQUVFLFdBQU8sRUFBQyxVQUZWO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFJRSxXQUFPLEVBQUVZLGdCQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRixDQURGLENBVEYsQ0F0Q0YsQ0FERjtBQTJFRDs7R0F4SHVCVCxXO1VBQ04vQixTLEVBdUIwQmdELGtEOzs7S0F4QnBCakIsVyIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2lkZWJhci1pdGVtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBJbXBvcnRDb250YWN0c0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ltcG9ydENvbnRhY3RzJztcbmltcG9ydCBJTWFpblByb3BzIGZyb20gJy4vaW50ZXJmYWNlcy9pbWFpbnByb3BzJztcbmltcG9ydCBSZW1vdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZW1vdmUnO1xuaW1wb3J0IE1vcmVIb3Jpekljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVIb3Jpeic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWwnO1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJztcbmltcG9ydCBGYWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhZGUnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IHsgdXNlRHJvcCwgRHJvcFRhcmdldCB9IGZyb20gJ3JlYWN0LWRuZCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICBsaXN0U2VsZWN0ZWQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYig2NCw2NCw2NCknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgbWluV2lkdGg6ICczNnB4JyxcbiAgICAgIGNvbG9yOiAncmdiKDE2NSwxNjUsMTY1KScsXG4gICAgfSxcbiAgICByZW1vdmVOb3RlYm9va0ljb246IHtcbiAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgIG1hcmdpbkxlZnQ6ICcyMHB4JyxcbiAgICB9LFxuICAgIG1lbnVOb3RlYm9va0ljb246IHtcbiAgICAgIGNvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICBtYXJnaW5MZWZ0OiAnMjBweCcsXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBwYXBlcjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIyMiwgMjIyLCAyMjIpJyxcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcbiAgICAgIHBhZGRpbmc6ICcyMHB4JyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogJzM1MHB4JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgIH0sXG4gICAgcGFyYWdyYXBoOiB7XG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgY29sb3I6ICdyZ2IoNjYsIDU0LCA0OCknLFxuICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGhlaWdodDogJzMwcHgnLFxuICAgICAgbWFyZ2luOiAnMTBweCAxNXB4JyxcbiAgICB9LFxuICB9KVxuKTtcblxuaW50ZXJmYWNlIFNpZGViYXJJdGVtUHJvcHMgZXh0ZW5kcyBJTWFpblByb3BzIHtcbiAgdGhpc05vdGVib29rOiBzdHJpbmc7XG4gIG9wZW46IGJvb2xlYW47XG4gIGhhbmRsZU5vdGVib29rQ2xpY2s6IChub3RlYm9vazogc3RyaW5nKSA9PiB2b2lkO1xuICByZW1vdmVOb3RlYm9vazogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXJJdGVtKHByb3BzOiBTaWRlYmFySXRlbVByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3JlbW92ZU5vdGVib29rQnV0dG9uLCBzZXRSZW1vdmVOb3RlYm9va0J1dHRvbl0gPSB1c2VTdGF0ZTxib29sZWFuPihcbiAgICBmYWxzZVxuICApO1xuICBjb25zdCBbb3Blbk1vZGFsLCBzZXRPcGVuTW9kYWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZU1vZGFsQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0T3Blbk1vZGFsKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVOZXdOb3RlYm9vayA9ICgpID0+IHtcbiAgICBzZXRPcGVuTW9kYWwodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlQ2xpY2sgPSAoKSA9PiB7XG4gICAgcHJvcHMucmVtb3ZlTm90ZWJvb2socHJvcHMudGhpc05vdGVib29rKTtcbiAgICBoYW5kbGVNb2RhbENsb3NlKCk7XG4gIH07XG5cbiAgY29uc3QgY2FuTW92ZU5vdGUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ25vdGUgY2FuIGJlIGhlcmUnKTtcbiAgfTtcblxuICBjb25zdCBbeyBpc092ZXIsIGNhbkRyb3AsIGl0ZW0gfSwgZHJvcF0gPSB1c2VEcm9wKHtcbiAgICBhY2NlcHQ6ICdub3RlJyxcbiAgICBkcm9wOiAoKSA9PiBtb3ZlTm90ZSgpLFxuICAgIGNvbGxlY3Q6IChtb25pdG9yKSA9PiAoe1xuICAgICAgaXNPdmVyOiBtb25pdG9yLmlzT3ZlcigpLFxuICAgICAgY2FuRHJvcDogbW9uaXRvci5jYW5Ecm9wKCksXG4gICAgICBpdGVtOiBtb25pdG9yLmdldEl0ZW0oKSxcbiAgICB9KSxcbiAgfSk7XG5cbiAgY29uc3QgbW92ZU5vdGUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvcHMudGhpc05vdGVib29rKTtcbiAgICBjb25zb2xlLmxvZyhpdGVtPy5pZCk7XG4gICAgY29uc29sZS5sb2coaXRlbT8ubm90ZWJvb2spO1xuICAgIGNvbnNvbGUubG9nKCdub3RlIGdvdCBoZXJlJyk7XG4gICAgaWYgKGl0ZW0/Lm5vdGVib29rICE9PSBwcm9wcy50aGlzTm90ZWJvb2spIHtcbiAgICAgIHByb3BzLm1vdmVOb3RlKGl0ZW0/Lm5vdGVib29rLCBwcm9wcy50aGlzTm90ZWJvb2ssIGl0ZW0/LmlkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNBY3RpdmUgPSBpc092ZXIgJiYgY2FuRHJvcDtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpc3RJdGVtXG4gICAgICAgIGJ1dHRvblxuICAgICAgICBrZXk9e3Byb3BzLm5vdGVib29rc1twcm9wcy50aGlzTm90ZWJvb2tdLmlkfVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIHByb3BzLm5vdGVib29rID09PSBwcm9wcy50aGlzTm90ZWJvb2tcbiAgICAgICAgICAgID8gY2xhc3Nlcy5saXN0U2VsZWN0ZWRcbiAgICAgICAgICAgIDogY2xhc3Nlcy5saXN0XG4gICAgICAgIH1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGlmICghcmVtb3ZlTm90ZWJvb2tCdXR0b24pXG4gICAgICAgICAgICBwcm9wcy5oYW5kbGVOb3RlYm9va0NsaWNrKHByb3BzLnRoaXNOb3RlYm9vayk7XG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZzogcHJvcHMub3BlbiA/ICcwcHggMHB4IDBweCAzMHB4JyA6ICcwcHggMTVweCcsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0FjdGl2ZSA/ICdncmVlbicgOiAnJyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IGlzQWN0aXZlID8gJzVweCcgOiAnJyxcbiAgICAgICAgfX1cbiAgICAgICAgcmVmPXtkcm9wfVxuICAgICAgPlxuICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgIDxJbXBvcnRDb250YWN0c0ljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3Byb3BzLm5vdGVib29rc1twcm9wcy50aGlzTm90ZWJvb2tdLnRpdGxlfSAvPlxuICAgICAgICA8TGlzdEl0ZW1JY29uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlTmV3Tm90ZWJvb2soKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRSZW1vdmVOb3RlYm9va0J1dHRvbih0cnVlKX1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFJlbW92ZU5vdGVib29rQnV0dG9uKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtyZW1vdmVOb3RlYm9va0J1dHRvbiAmJiBvcGVuID8gKFxuICAgICAgICAgICAgPFJlbW92ZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLnJlbW92ZU5vdGVib29rSWNvbn0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPE1vcmVIb3Jpekljb24gY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVOb3RlYm9va0ljb259IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICA8L0xpc3RJdGVtPlxuICAgICAgPE1vZGFsXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cbiAgICAgICAgb3Blbj17b3Blbk1vZGFsfVxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxGYWRlIGluPXtvcGVuTW9kYWx9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcmFncmFwaH0+XG4gICAgICAgICAgICAgIFRoaXMgd2lsbCBkZWxldGUgdGhlIGZvbGRlciBhbmQgbW92ZSBhbGwgbm90ZXMgaW4gdGhpcyBmb2xkZXIgdG9cbiAgICAgICAgICAgICAgdHJhc2guXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWxldGVDbGlja31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTW9kYWxDbG9zZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sidebar-item.tsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./components/disclaimer.tsx":
/*!***********************************!*\
  !*** ./components/disclaimer.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/esm/Modal/index.js\");\n/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Backdrop */ \"./node_modules/@material-ui/core/esm/Backdrop/index.js\");\n/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Fade */ \"./node_modules/@material-ui/core/esm/Fade/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/disclaimer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return {\n    modal: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    paper: {\n      backgroundColor: 'rgb(222, 222, 222)',\n      border: '1px solid rgb(255, 192, 47)',\n      boxShadow: theme.shadows[5],\n      padding: theme.spacing(1, 2, 2),\n      textAlign: 'center',\n      width: '350px',\n      borderRadius: '5px',\n      fontSize: '12px',\n      outline: 'none'\n    },\n    title: {\n      fontSize: '22px',\n      color: 'rgb(66, 54, 48)'\n    },\n    button: {\n      height: '30px',\n      marginTop: '10px',\n      marginBottom: '5px'\n    },\n    paragraph: {\n      fontSize: '12px',\n      color: 'rgb(66, 54, 48)',\n      marginBottom: '5px'\n    },\n    support: {\n      fontSize: '12px',\n      color: 'rgb(66, 54, 48)',\n      marginTop: '5px'\n    },\n    email: {\n      fontSize: '12px',\n      color: 'rgb(66, 54, 48)'\n    }\n  };\n});\n\nfunction Disclaimer(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      open = _React$useState2[0],\n      setOpen = _React$useState2[1];\n\n  var handleClose = function handleClose() {\n    setOpen(false);\n  };\n\n  var handleAcceptClick = function handleAcceptClick() {\n    localStorage.setItem('omeganoteaccept', 'true');\n    props.setIsAcceptDisclaimer(true);\n    handleClose();\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: classes.modal,\n    open: open,\n    closeAfterTransition: true,\n    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    BackdropProps: {\n      timeout: 500\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    \"in\": open,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: classes.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }, \"Welcome to Omega Note\"), __jsx(\"div\", {\n    className: classes.paragraph,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  }, \"This app is created strictly for demonstration purposes. By clicking the button below, you accept that Omega Note do not guarantee storing your messages.\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"secondary\",\n    onClick: handleAcceptClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, \"Accept\"), __jsx(\"p\", {\n    className: classes.paragraph,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }\n  }, \"I built this app using React, React Hooks, Next.js and Typescript to provide Note functions.\"), __jsx(\"div\", {\n    className: classes.support,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }\n  }, 'If you have any questions, please email to ', __jsx(\"a\", {\n    className: classes.email,\n    href: \"mailto:omegathrone@omegathrone.com\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 15\n    }\n  }, \"omegathrone@omegathrone.com\"), \".\")))));\n}\n\n_s(Disclaimer, \"ZbauVcu/I6GQoZvFWe0/Vd1mXmg=\", false, function () {\n  return [useStyles];\n});\n\n_c = Disclaimer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Disclaimer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Disclaimer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kaXNjbGFpbWVyLnRzeD9hM2VmIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1vZGFsIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiYm94U2hhZG93Iiwic2hhZG93cyIsInBhZGRpbmciLCJzcGFjaW5nIiwidGV4dEFsaWduIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsIm91dGxpbmUiLCJ0aXRsZSIsImNvbG9yIiwiYnV0dG9uIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicGFyYWdyYXBoIiwic3VwcG9ydCIsImVtYWlsIiwiRGlzY2xhaW1lciIsInByb3BzIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQWNjZXB0Q2xpY2siLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2V0SXNBY2NlcHREaXNjbGFpbWVyIiwiQmFja2Ryb3AiLCJ0aW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUVMQyxnQkFBVSxFQUFFLFFBRlA7QUFHTEMsb0JBQWMsRUFBRTtBQUhYLEtBRGdDO0FBTXZDQyxTQUFLLEVBQUU7QUFDTEMscUJBQWUsRUFBRSxvQkFEWjtBQUVMQyxZQUFNLEVBQUUsNkJBRkg7QUFHTEMsZUFBUyxFQUFFUixLQUFLLENBQUNTLE9BQU4sQ0FBYyxDQUFkLENBSE47QUFJTEMsYUFBTyxFQUFFVixLQUFLLENBQUNXLE9B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QUFBQTtBQUFBLEtBQ0csNkNBREgsRUFFRTtBQUNFLGFBQVMsRUFBRUksT0FBTyxDQUFDSCxLQURyQjtBQUVFLFFBQUksRUFBQyxvQ0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUZGLE1BbkJGLENBREYsQ0FURixDQURGLENBREY7QUE4Q0Q7O0dBNURRQyxVO1VBQ1M1QixTOzs7S0FEVDRCLFU7QUE2RE1BLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9kaXNjbGFpbWVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBNb2RhbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbCc7XG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AnO1xuaW1wb3J0IEZhZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFkZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBtb2RhbDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIyMiwgMjIyLCAyMjIpJyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgcmdiKDI1NSwgMTkyLCA0NyknLFxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDIsIDIpLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgd2lkdGg6ICczNTBweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBmb250U2l6ZTogJzEycHgnLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogJzIycHgnLFxuICAgIGNvbG9yOiAncmdiKDY2LCA1NCwgNDgpJyxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgbWFyZ2luVG9wOiAnMTBweCcsXG4gICAgbWFyZ2luQm90dG9tOiAnNXB4JyxcbiAgfSxcbiAgcGFyYWdyYXBoOiB7XG4gICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICBjb2xvcjogJ3JnYig2NiwgNTQsIDQ4KScsXG4gICAgbWFyZ2luQm90dG9tOiAnNXB4JyxcbiAgfSxcbiAgc3VwcG9ydDoge1xuICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgY29sb3I6ICdyZ2IoNjYsIDU0LCA0OCknLFxuICAgIG1hcmdpblRvcDogJzVweCcsXG4gIH0sXG4gIGVtYWlsOiB7XG4gICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICBjb2xvcjogJ3JnYig2NiwgNTQsIDQ4KScsXG4gIH0sXG59KSk7XG5cbmludGVyZmFjZSBJbmRleFByb3BzIHtcbiAgc2V0SXNBY2NlcHREaXNjbGFpbWVyOiAoaXNBY2NlcHREaXNjbGFpbWVyOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBEaXNjbGFpbWVyKHByb3BzOiBJbmRleFByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWNjZXB0Q2xpY2sgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29tZWdhbm90ZWFjY2VwdCcsICd0cnVlJyk7XG4gICAgcHJvcHMuc2V0SXNBY2NlcHREaXNjbGFpbWVyKHRydWUpO1xuICAgIGhhbmRsZUNsb3NlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE1vZGFsXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XG4gICAgICAgICAgdGltZW91dDogNTAwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8RmFkZSBpbj17b3Blbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5XZWxjb21lIHRvIE9tZWdhIE5vdGU8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgICAgICBUaGlzIGFwcCBpcyBjcmVhdGVkIHN0cmljdGx5IGZvciBkZW1vbnN0cmF0aW9uIHB1cnBvc2VzLiBCeVxuICAgICAgICAgICAgICBjbGlja2luZyB0aGUgYnV0dG9uIGJlbG93LCB5b3UgYWNjZXB0IHRoYXQgT21lZ2EgTm90ZSBkbyBub3RcbiAgICAgICAgICAgICAgZ3VhcmFudGVlIHN0b3JpbmcgeW91ciBtZXNzYWdlcy5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFjY2VwdENsaWNrfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBY2NlcHRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcmFncmFwaH0+XG4gICAgICAgICAgICAgIEkgYnVpbHQgdGhpcyBhcHAgdXNpbmcgUmVhY3QsIFJlYWN0IEhvb2tzLCBOZXh0LmpzIGFuZCBUeXBlc2NyaXB0XG4gICAgICAgICAgICAgIHRvIHByb3ZpZGUgTm90ZSBmdW5jdGlvbnMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdXBwb3J0fT5cbiAgICAgICAgICAgICAgeydJZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zLCBwbGVhc2UgZW1haWwgdG8gJ31cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZW1haWx9XG4gICAgICAgICAgICAgICAgaHJlZj1cIm1haWx0bzpvbWVnYXRocm9uZUBvbWVnYXRocm9uZS5jb21cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgb21lZ2F0aHJvbmVAb21lZ2F0aHJvbmUuY29tXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBEaXNjbGFpbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/disclaimer.tsx\n");

/***/ })

})
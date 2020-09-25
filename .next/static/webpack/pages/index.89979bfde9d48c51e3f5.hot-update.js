webpackHotUpdate_N_E("pages/index",{

/***/ "./components/note.tsx":
/*!*****************************!*\
  !*** ./components/note.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Note; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/esm/index.js\");\n/* harmony import */ var _note_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./note-list */ \"./components/note-list.tsx\");\n/* harmony import */ var _editor_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor-title */ \"./components/editor-title.tsx\");\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor */ \"./components/editor.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-note/components/note.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"createStyles\"])({\n    root: {\n      display: 'flex',\n      flexDdirection: 'row',\n      height: '100vh'\n    },\n    loading: {\n      margin: '20px 20px 0px 20px'\n    },\n    progress: {\n      width: '100%',\n      margin: '20px 20px 0px 20px',\n      '& > * + *': {\n        marginTop: theme.spacing(2)\n      }\n    },\n    box: {\n      display: 'flex',\n      flexDdirection: 'column',\n      backgroundColor: 'rgb(248, 248, 248)',\n      height: '100vh',\n      resize: 'horizontal',\n      minWidth: '200px',\n      width: '300px',\n      maxWidth: '400px',\n      overflow: 'hidden',\n      borderRight: '1px solid rgb(230, 230, 230)'\n    }\n  });\n});\nfunction Note(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = useState(''),\n      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n      title = _useState2[0],\n      setTitle = _useState2[1];\n\n  var _useState3 = useState(false),\n      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState3, 2),\n      isDelete = _useState4[0],\n      setIsDeleted = _useState4[1];\n\n  var _useState5 = useState(''),\n      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState5, 2),\n      contents = _useState6[0],\n      setContents = _useState6[1];\n\n  var _useState7 = useState(''),\n      _useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState7, 2),\n      lastNotebook = _useState8[0],\n      setLastNotebook = _useState8[1];\n\n  var getNote = function getNote(notebookId, noteId) {\n    var newContents = props.notebooks[notebookId].notes.filter(function (note) {\n      return note.id === noteId;\n    });\n    console.log(newContents);\n    setTitle(newContents[0].noteTitle);\n    setContents(newContents[0].note);\n    setIsDeleted(newContents[0].isDeleted);\n    setLastNotebook(newContents[0].lastNotebook);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, __jsx(react_dnd__WEBPACK_IMPORTED_MODULE_4__[\"DndProvider\"], {\n    backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_5__[\"HTML5Backend\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, __jsx(_note_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  })))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, __jsx(_editor_title__WEBPACK_IMPORTED_MODULE_7__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  })), props.currentNoteId && __jsx(_editor__WEBPACK_IMPORTED_MODULE_8__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 35\n    }\n  })))));\n}\n\n_s(Note, \"uZED92lZbEWKQizZUmrS9Kl7Zbw=\", false, function () {\n  return [useStyles];\n});\n\n_c = Note;\n\nvar _c;\n\n$RefreshReg$(_c, \"Note\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlLnRzeD81N2I3Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiZmxleERkaXJlY3Rpb24iLCJoZWlnaHQiLCJsb2FkaW5nIiwibWFyZ2luIiwicHJvZ3Jlc3MiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJib3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZXNpemUiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwib3ZlcmZsb3ciLCJib3JkZXJSaWdodCIsIk5vdGUiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJpc0RlbGV0ZSIsInNldElzRGVsZXRlZCIsImNvbnRlbnRzIiwic2V0Q29udGVudHMiLCJsYXN0Tm90ZWJvb2siLCJzZXRMYXN0Tm90ZWJvb2siLCJnZXROb3RlIiwibm90ZWJvb2tJZCIsIm5vdGVJZCIsIm5ld0NvbnRlbnRzIiwibm90ZWJvb2tzIiwibm90ZXMiLCJmaWx0ZXIiLCJub3RlIiwiaWQiLCJjb25zb2xlIiwibG9nIiwibm90ZVRpdGxlIiwiaXNEZWxldGVkIiwiSFRNTDVCYWNrZW5kIiwiY3VycmVudE5vdGVJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE1BREw7QUFFSkMsb0JBQWMsRUFBRSxLQUZaO0FBR0pDLFlBQU0sRUFBRTtBQUhKLEtBREs7QUFNWEMsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRTtBQURELEtBTkU7QUFTWEMsWUFBUSxFQUFFO0FBQ1JDLFdBQUssRUFBRSxNQURDO0FBRVJGLFlBQU0sRUFBRSxvQkFGQTtBQUdSLG1CQUFhO0FBQ1hHLGlCQUFTLEVBQUVWLEtBQUssQ0FBQ1csT0FBTixDQUFjLENBQWQ7QUFEQTtBQUhMLEtBVEM7QUFnQlhDLE9BQUcsRUFBRTtBQUNIVCxhQUFPLEVBQUUsTUFETjtBQUVIQyxvQkFBYyxFQUFFLFFBRmI7QUFHSFMscUJBQWUsRUFBRSxvQkFIZDtBQUlIUixZQUFNLEVBQUUsT0FKTDtBQUtIUyxZQUFNLEVBQUUsWUFMTDtBQU1IQyxjQUFRLEVBQUUsT0FOUDtBQU9ITixXQUFLLEVBQUUsT0FQSjtBQVFITyxjQUFRLEVBQUUsT0FSUDtBQVNIQyxjQUFRLEVBQUUsUUFUUDtBQVVIQyxpQkFBVyxFQUFFO0FBVlY7QUFoQk0sR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1QjtBQWdDZSxTQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBaUM7QUFBQTs7QUFDOUMsTUFBTUMsT0FBTyxHQUFHdkIsU0FBUyxFQUF6Qjs7QUFEOEMsa0JBRXBCd0IsUUFBUSxDQUFTLEVBQVQsQ0FGWTtBQUFBO0FBQUEsTUFFdkNDLEtBRnVDO0FBQUEsTUFFaENDLFFBRmdDOztBQUFBLG1CQUdiRixRQUFRLENBQVUsS0FBVixDQUhLO0FBQUE7QUFBQSxNQUd2Q0csUUFIdUM7QUFBQSxNQUc3QkMsWUFINkI7O0FBQUEsbUJBSWRKLFFBQVEsQ0FBTSxFQUFOLENBSk07QUFBQTtBQUFBLE1BSXZDSyxRQUp1QztBQUFBLE1BSTdCQyxXQUo2Qjs7QUFBQSxtQkFLTk4sUUFBUSxDQUFTLEVBQVQsQ0FMRjtBQUFBO0FBQUEsTUFLdkNPLFlBTHVDO0FBQUEsTUFLekJDLGVBTHlCOztBQU85QyxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxVQUFELEVBQXFCQyxNQUFyQixFQUFvRDtBQUNsRSxRQUFNQyxXQUFXLEdBQUdkLEtBQUssQ0FBQ2UsU0FBTixDQUFnQkgsVUFBaEIsRUFBNEJJLEtBQTVCLENBQWtDQyxNQUFsQyxDQUNsQixVQUFDQyxJQUFEO0FBQUEsYUFBaUJBLElBQUksQ0FBQ0MsRUFBTCxLQUFZTixNQUE3QjtBQUFBLEtBRGtCLENBQXBCO0FBR0FPLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxXQUFaO0FBQ0FWLFlBQVEsQ0FBQ1UsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlUSxTQUFoQixDQUFSO0FBQ0FkLGVBQVcsQ0FBQ00sV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlSSxJQUFoQixDQUFYO0FBQ0FaLGdCQUFZLENBQUNRLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZVMsU0FBaEIsQ0FBWjtBQUNBYixtQkFBZSxDQUFDSSxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVMLFlBQWhCLENBQWY7QUFDRCxHQVREOztBQVdBLFNBQ0UsbUVBQ0U7QUFBSyxhQUFTLEVBQUVSLE9BQU8sQ0FBQ25CLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRW1CLE9BQU8sQ0FBQ1QsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBYSxXQUFPLEVBQUVnQyxvRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQseUZBQWN4QixLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGLENBREYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRCx5RkFBaUJBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixFQUVHQSxLQUFLLENBQUN5QixhQUFOLElBQXVCLE1BQUMsK0NBQUQseUZBQVl6QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGMUIsQ0FORixDQURGLENBREY7QUFlRDs7R0FqQ3VCRCxJO1VBQ05yQixTOzs7S0FETXFCLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL25vdGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgRG5kUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1kbmQnO1xuaW1wb3J0IHsgSFRNTDVCYWNrZW5kIH0gZnJvbSAncmVhY3QtZG5kLWh0bWw1LWJhY2tlbmQnO1xuaW1wb3J0IE5vdGVMaXN0IGZyb20gJy4vbm90ZS1saXN0JztcbmltcG9ydCBFZGl0b3JUaXRsZSBmcm9tICcuL2VkaXRvci10aXRsZSc7XG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJztcbmltcG9ydCBJTm90ZVByb3BzIGZyb20gJy4vaW50ZXJmYWNlcy9pbm90ZXByb3BzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEZGlyZWN0aW9uOiAncm93JyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICB9LFxuICAgIGxvYWRpbmc6IHtcbiAgICAgIG1hcmdpbjogJzIwcHggMjBweCAwcHggMjBweCcsXG4gICAgfSxcbiAgICBwcm9ncmVzczoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1hcmdpbjogJzIwcHggMjBweCAwcHggMjBweCcsXG4gICAgICAnJiA+ICogKyAqJzoge1xuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICB9LFxuICAgIH0sXG4gICAgYm94OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGRpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQ4LCAyNDgsIDI0OCknLFxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgcmVzaXplOiAnaG9yaXpvbnRhbCcsXG4gICAgICBtaW5XaWR0aDogJzIwMHB4JyxcbiAgICAgIHdpZHRoOiAnMzAwcHgnLFxuICAgICAgbWF4V2lkdGg6ICc0MDBweCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBib3JkZXJSaWdodDogJzFweCBzb2xpZCByZ2IoMjMwLCAyMzAsIDIzMCknLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlKHByb3BzOiBJTm90ZVByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW2lzRGVsZXRlLCBzZXRJc0RlbGV0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbY29udGVudHMsIHNldENvbnRlbnRzXSA9IHVzZVN0YXRlPGFueT4oJycpO1xuICBjb25zdCBbbGFzdE5vdGVib29rLCBzZXRMYXN0Tm90ZWJvb2tdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG5cbiAgY29uc3QgZ2V0Tm90ZSA9IChub3RlYm9va0lkOiBzdHJpbmcsIG5vdGVJZDogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3QgbmV3Q29udGVudHMgPSBwcm9wcy5ub3RlYm9va3Nbbm90ZWJvb2tJZF0ubm90ZXMuZmlsdGVyKFxuICAgICAgKG5vdGU6IElOb3RlKSA9PiBub3RlLmlkID09PSBub3RlSWRcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKG5ld0NvbnRlbnRzKTtcbiAgICBzZXRUaXRsZShuZXdDb250ZW50c1swXS5ub3RlVGl0bGUpO1xuICAgIHNldENvbnRlbnRzKG5ld0NvbnRlbnRzWzBdLm5vdGUpO1xuICAgIHNldElzRGVsZXRlZChuZXdDb250ZW50c1swXS5pc0RlbGV0ZWQpO1xuICAgIHNldExhc3ROb3RlYm9vayhuZXdDb250ZW50c1swXS5sYXN0Tm90ZWJvb2spO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3h9PlxuICAgICAgICAgIDxEbmRQcm92aWRlciBiYWNrZW5kPXtIVE1MNUJhY2tlbmR9PlxuICAgICAgICAgICAgPE5vdGVMaXN0IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICA8L0RuZFByb3ZpZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8RWRpdG9yVGl0bGUgey4uLnByb3BzfSAvPlxuICAgICAgICAgIHtwcm9wcy5jdXJyZW50Tm90ZUlkICYmIDxFZGl0b3Igey4uLnByb3BzfSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/note.tsx\n");

/***/ })

})
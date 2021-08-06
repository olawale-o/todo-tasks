/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheet/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;1,300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --bg-color: #f6f6f6;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  font-size: 10px;\\n}\\n\\nbody {\\n  font-size: 62.5%;\\n  background: var(--bg-color);\\n  font-family: 'Open Sans', sans-serif;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\n::placeholder {\\n  font-style: italic;\\n  opacity: 0.3;\\n}\\n\\n[contenteditable] {\\n  outline: 0 solid transparent;\\n}\\n\\ni {\\n  color: #b7b7b7;\\n  cursor: move;\\n}\\n\\ni.bin,\\ni.return {\\n  cursor: pointer;\\n}\\n\\ni:hover {\\n  color: #000;\\n}\\n\\n.todo-container {\\n  width: 50%;\\n  margin: 5rem auto 0;\\n  padding: 20px 5%;\\n}\\n\\n.todo-content {\\n  font-size: 1.5rem;\\n  border-radius: 3px;\\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\\n}\\n\\n.label {\\n  display: block;\\n  position: relative;\\n  padding-left: 35px;\\n  margin-bottom: 22px;\\n  cursor: pointer;\\n  font-size: 22px;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n}\\n\\n.label input {\\n  position: absolute;\\n  opacity: 0;\\n  cursor: pointer;\\n  height: 0;\\n  width: 0;\\n}\\n\\n.checkmark {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  height: 25px;\\n  width: 25px;\\n  border: 2px solid #b7b7b7;\\n}\\n\\n.label:hover input ~ .checkmark {\\n  background-color: transparent;\\n}\\n\\n.label input:checked ~ .checkmark {\\n  background-color: transparent;\\n  border: none;\\n}\\n\\n.checkmark::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  display: none;\\n}\\n\\n.label .checkmark::after {\\n  left: 5px;\\n  top: 5px;\\n  width: 10px;\\n  height: 15px;\\n  border: solid #2196f3;\\n  border-width: 0 3px 3px 0;\\n  -webkit-transform: rotate(45deg);\\n  -ms-transform: rotate(45deg);\\n  transform: rotate(45deg);\\n}\\n\\n.label input:checked ~ .checkmark::after {\\n  display: block;\\n}\\n\\n.todo-list {\\n  font-size: 2rem;\\n  background: #fff;\\n}\\n\\n.field {\\n  padding: 1.5rem;\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\n  color: #494949;\\n}\\n\\n.input-field {\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\n  color: #aeaeae;\\n  padding: 15px;\\n  position: relative;\\n  background: #fff;\\n}\\n\\nli.focus {\\n  background: #fea;\\n}\\n\\n.hide {\\n  display: none;\\n  visibility: hidden;\\n}\\n\\n.todo-tasks li.border {\\n  border: 2px solid #2e8ae6;\\n  opacity: 1;\\n}\\n\\n.input-field span {\\n  position: absolute;\\n  top: 20px;\\n  right: 20px;\\n}\\n\\n.heading {\\n  font-size: 1.8rem;\\n  white-space: nowrap;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  font-weight: bolder;\\n  line-height: 20px;\\n  color: #363636;\\n  display: flex;\\n  justify-content: space-between;\\n  background-color: #fff;\\n}\\n\\n.todo-list__task {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.todo-list__text {\\n  margin-left: 1rem;\\n  flex: 5;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.input {\\n  width: 100%;\\n  outline: none;\\n  border: none;\\n  font-size: 2rem;\\n  font-weight: lighter;\\n  font-style: italic;\\n}\\n\\n.button {\\n  background: var(--bg-color);\\n  padding: 1rem;\\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\\n}\\n\\n.btn {\\n  background: transparent;\\n  width: 100%;\\n  outline: none;\\n  border: none;\\n  cursor: pointer;\\n  margin: 1rem auto;\\n  opacity: 0.5;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-tasks/./src/stylesheet/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-tasks/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/stylesheet/style.css":
/*!**********************************!*\
  !*** ./src/stylesheet/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesheet/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://todo-tasks/./src/stylesheet/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://todo-tasks/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-tasks/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-tasks/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-tasks/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./src/add-remove.js":
/*!***************************!*\
  !*** ./src/add-remove.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateTodosStorage\": () => (/* binding */ updateTodosStorage),\n/* harmony export */   \"addNewTodo\": () => (/* binding */ addNewTodo),\n/* harmony export */   \"clearAllCompletedTodos\": () => (/* binding */ clearAllCompletedTodos),\n/* harmony export */   \"editTodo\": () => (/* binding */ editTodo),\n/* harmony export */   \"onDeleteTodo\": () => (/* binding */ onDeleteTodo)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\nconst updateTodosStorage = (newTodo) => {\n  const todos = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)('TODOS');\n  todos.push(newTodo);\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.setStorage)('TODOS', todos);\n};\n\nconst addNewTodo = (task) => {\n  const todos = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)('TODOS');\n  const newTodo = {\n    index: todos.length < 1 ? 1 : todos.length + 1,\n    description: task,\n    completed: false,\n  };\n  return newTodo;\n};\n\nconst clearAllCompletedTodos = () => {\n  let todos = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)('TODOS');\n  todos = todos.filter((todo) => todo.completed === false);\n  todos.forEach((todo, i) => {\n    todo.index = i + 1;\n  });\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.setStorage)('TODOS', todos);\n  return todos;\n};\n\nconst editTodo = (target) => {\n  const todos = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)('TODOS');\n  const id = parseInt(target.id.split('-')[1], 10);\n  todos.forEach((todo) => {\n    if (id === todo.index) {\n      todo.description = target.textContent;\n    }\n  });\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.setStorage)('TODOS', todos);\n};\n\nconst onDeleteTodo = (target) => {\n  let todos = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)('TODOS');\n  todos = todos.filter((todo) => target !== todo.index);\n  return todos;\n};\n\n//# sourceURL=webpack://todo-tasks/./src/add-remove.js?");

/***/ }),

/***/ "./src/change.js":
/*!***********************!*\
  !*** ./src/change.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\nconst change = (todo) => {\n  const tasks = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)('TODOS');\n  tasks.forEach((task) => {\n    if (task.index === todo) {\n      task.completed = !task.completed;\n    }\n  });\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.setStorage)('TODOS', tasks);\n  return tasks;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (change);\n\n//# sourceURL=webpack://todo-tasks/./src/change.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ \"./src/interactive.js\");\n/* harmony import */ var _change_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change.js */ \"./src/change.js\");\n/* harmony import */ var _add_remove_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-remove.js */ \"./src/add-remove.js\");\n/* harmony import */ var _stylesheet_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stylesheet/style.css */ \"./src/stylesheet/style.css\");\n\n\n\n\n\n\n\nconst todoKey = 'TODOS';\nlet todos = [];\n\nif ((0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.isStorage)(todoKey)) {\n  todos = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)(todoKey);\n} else {\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.setStorage)(todoKey, todos);\n  todos = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)(todoKey);\n}\n\nconst todoTasks = document.querySelector('#todo-tasks');\n\nconst target = document.getElementById('todo-tasks');\nconst items = target.getElementsByTagName('li');\n\nconst dragAll = () => {\n  for (let a = 0; a < items.length; a += 1) {\n    const i = items[a];\n    i.draggable = true;\n    i.addEventListener('dragstart', _interactive_js__WEBPACK_IMPORTED_MODULE_1__.dragStart);\n    i.addEventListener('dragenter', _interactive_js__WEBPACK_IMPORTED_MODULE_1__.dragEnter);\n    i.addEventListener('dragleave', _interactive_js__WEBPACK_IMPORTED_MODULE_1__.dragLeave);\n    i.addEventListener('dragend', _interactive_js__WEBPACK_IMPORTED_MODULE_1__.dragEnd);\n    i.addEventListener('dragover', (event) => {\n      event.preventDefault();\n      i.style.opacity = 0.2;\n    });\n    i.addEventListener('drop', _interactive_js__WEBPACK_IMPORTED_MODULE_1__.drop);\n  }\n};\n\nconst createTodo = (todo) => {\n  const li = document.createElement('li');\n  li.setAttribute('class', 'todo-list');\n  li.setAttribute('id', `id-${todo.index}`);\n  const div = document.createElement('div');\n  div.setAttribute('class', 'field todo-list__task');\n\n  const label = document.createElement('label');\n  label.setAttribute('class', 'label');\n  label.setAttribute('id', `label-${todo.index}`);\n  const checkbox = document.createElement('input');\n  checkbox.setAttribute('id', `checkbox-${todo.index}`);\n\n  const span = document.createElement('span');\n  span.setAttribute('class', 'todo-list__text');\n  span.setAttribute('id', `span-${todo.index}`);\n  span.textContent = todo.description;\n  span.style.textDecoration = todo.completed === true ? 'line-through' : 'none';\n  checkbox.setAttribute('type', 'checkbox');\n  checkbox.setAttribute('name', 'todo-task');\n  checkbox.checked = todo.completed === true;\n  checkbox.addEventListener('change', (event) => {\n    const currentTodo = parseInt(event.target.id.split('-')[1], 10);\n    const newTodos = (0,_change_js__WEBPACK_IMPORTED_MODULE_2__.default)(currentTodo);\n    todoTasks.innerHTML = '';\n    newTodos.forEach((task) => {\n      todoTasks.appendChild(createTodo(task));\n    });\n  });\n  label.appendChild(checkbox);\n  const sp = document.createElement('span');\n  sp.setAttribute('class', 'checkmark');\n  label.appendChild(sp);\n\n  const bin = document.createElement('i');\n  bin.setAttribute('class', 'bx bx-trash-alt bin hide');\n  bin.setAttribute('id', `bin-${todo.index}`);\n\n  const icon = document.createElement('i');\n  icon.setAttribute('class', 'bx bx-dots-vertical-rounded move');\n  icon.setAttribute('id', `icon-${todo.index}`);\n  icon.onmousedown = dragAll;\n\n  div.appendChild(label);\n  div.appendChild(span);\n  div.appendChild(icon);\n  div.appendChild(bin);\n  li.appendChild(div);\n\n  const toggleButtons = () => {\n    bin.classList.toggle('hide');\n    icon.classList.toggle('hide');\n  };\n\n  span.addEventListener('click', () => {\n    span.setAttribute('contenteditable', true);\n    span.focus();\n  });\n\n  bin.addEventListener('mousedown', (event) => {\n    const currentTodo = parseInt(event.target.id.split('-')[1], 10);\n    todos = (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_3__.onDeleteTodo)(currentTodo);\n\n    todoTasks.innerHTML = '';\n    todos.forEach((td, i) => {\n      td.index = i + 1;\n    });\n\n    todos.forEach((task) => {\n      todoTasks.appendChild(createTodo(task));\n    });\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.setStorage)('TODOS', todos);\n  });\n  let completed = null;\n  span.addEventListener('focus', (event) => {\n    toggleButtons();\n    if (event.target.style.textDecoration === 'line-through') {\n      span.style.textDecorationColor = 'transparent';\n      completed = true;\n    }\n    li.classList.add('focus');\n  });\n\n  span.addEventListener('blur', (event) => {\n    toggleButtons();\n    if (completed) {\n      event.target.style.textDecorationColor = 'initial';\n      completed = null;\n    }\n    (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_3__.editTodo)(event.target);\n    li.classList.remove('focus');\n    span.removeAttribute('contenteditable');\n  });\n\n  return li;\n};\n\ntodos.forEach((task) => {\n  todoTasks.appendChild(createTodo(task));\n});\n\nconst validateField = (input) => input.trim().length > 0;\n\nconst addkey = document.querySelector('#add');\nconst task = document.querySelector('#task');\n\naddkey.addEventListener('click', () => {\n  if (!validateField(task.value)) {\n    return false;\n  }\n  const newTodo = (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_3__.addNewTodo)(task.value);\n  (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_3__.updateTodosStorage)(newTodo);\n  todoTasks.appendChild(createTodo(newTodo));\n  task.value = '';\n  return true;\n});\n\ntask.addEventListener('keydown', (event) => {\n  if (event.which === 13) {\n    if (!validateField(task.value)) {\n      return false;\n    }\n    const newTodo = (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_3__.addNewTodo)(task.value);\n    (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_3__.updateTodosStorage)(newTodo);\n    todoTasks.appendChild(createTodo(newTodo));\n    task.value = '';\n  }\n  return true;\n});\n\nconst trashAll = document.querySelector('#trash-all');\ntrashAll.addEventListener('click', () => {\n  const tds = (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_3__.clearAllCompletedTodos)();\n  todoTasks.innerHTML = '';\n  tds.forEach((task) => {\n    todoTasks.appendChild(createTodo(task));\n  });\n});\n\n\n//# sourceURL=webpack://todo-tasks/./src/index.js?");

/***/ }),

/***/ "./src/interactive.js":
/*!****************************!*\
  !*** ./src/interactive.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dragStart\": () => (/* binding */ dragStart),\n/* harmony export */   \"dragEnter\": () => (/* binding */ dragEnter),\n/* harmony export */   \"dragLeave\": () => (/* binding */ dragLeave),\n/* harmony export */   \"dragEnd\": () => (/* binding */ dragEnd),\n/* harmony export */   \"drop\": () => (/* binding */ drop)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\nconst target = document.getElementById('todo-tasks');\ntarget.classList.add('todo-tasks');\nconst items = target.getElementsByTagName('li');\nlet current = null;\n\nfunction dragStart() {\n  current = this;\n  for (let b = 0; b < items.length; b += 1) {\n    const it = items[b];\n    if (it === current) {\n      it.classList.add('border');\n    }\n  }\n}\n\nfunction dragEnter() {\n  if (this !== current) {\n    this.style.opacity = 0.2;\n  }\n}\n\nfunction dragLeave(event) {\n  event.preventDefault();\n  if (this === current) {\n    this.style.visibility = 'hidden';\n  } else {\n    this.style.opacity = 1;\n  }\n}\n\nfunction dragEnd() {\n  for (let a = 0; a < items.length; a += 1) {\n    const it = items[a];\n    it.classList.remove('border');\n    this.style.visibility = 'visible';\n    it.style.opacity = 1;\n  }\n}\n\nfunction drop(event) {\n  event.preventDefault();\n  if (this !== current) {\n    let currentpos = 0;\n    let droppedpos = 0;\n    for (let it = 0; it < items.length; it += 1) {\n      if (current === items[it]) {\n        currentpos = it;\n      }\n      if (this === items[it]) {\n        droppedpos = it;\n      }\n    }\n    if (currentpos < droppedpos) {\n      this.parentNode.insertBefore(current, this.nextSibling);\n    } else {\n      this.parentNode.insertBefore(current, this);\n    }\n  }\n  const movingIndex = parseInt(current.id.split('-')[1], 10);\n  const staticIndex = parseInt(this.id.split('-')[1], 10);\n  const todos = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)('TODOS');\n  if (movingIndex !== staticIndex) {\n    const movedTodo = todos.find((todo) => todo.index === movingIndex);\n    const tds = todos.filter((todo) => todo.index !== movingIndex);\n    tds.splice(staticIndex - 1, 0, movedTodo);\n    tds.forEach((td, i) => {\n      td.index = i + 1;\n    });\n    for (let b = 0; b < items.length; b += 1) {\n      const it = items[b];\n      it.id = `id-${b + 1}`;\n      const label = it.querySelector('.label');\n      label.id = `label-${b + 1}`;\n      const checkmark = it.querySelector('.checkmark');\n      checkmark.id = `task-${b + 1}`;\n      const checkbox = it.querySelector('input');\n      checkbox.id = `checkbox-${b + 1}`;\n      const todoText = it.querySelector('.todo-list__text');\n      todoText.id = `span-${b + 1}`;\n      const move = it.querySelector('.move');\n      move.id = `icon-${b + 1}`;\n      const bin = it.querySelector('.bin');\n      bin.id = `bin-${b + 1}`;\n    }\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.setStorage)('TODOS', tds);\n  }\n}\n\n\n//# sourceURL=webpack://todo-tasks/./src/interactive.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isStorage\": () => (/* binding */ isStorage),\n/* harmony export */   \"getStorage\": () => (/* binding */ getStorage),\n/* harmony export */   \"setStorage\": () => (/* binding */ setStorage)\n/* harmony export */ });\nconst isStorage = (key) => localStorage.getItem(key);\n\nconst getStorage = (key) => JSON.parse(localStorage.getItem(key));\n\nconst setStorage = (key, todos) => {\n  localStorage.setItem(key, JSON.stringify(todos));\n};\n\n\n//# sourceURL=webpack://todo-tasks/./src/storage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
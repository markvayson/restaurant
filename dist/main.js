/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://rest/./src/main.css?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n\n\nconst logo = () => {\n  const div = document.createElement(\"div\");\n  div.className = \"grow md:grow-0 whitespace-nowrap underline\";\n\n  const p = document.createElement(\"p\");\n  const span = document.createElement(\"span\");\n\n  p.className = \"text-2xl font-bold\";\n  span.className = \"bg-cyan-500 text-white py-1 pr-1 rounded-lg\";\n\n  p.textContent = \"E\";\n  span.textContent = \"E\";\n\n  p.appendChild(span);\n  div.appendChild(p);\n\n  return div;\n};\n\nconst menuContainer = () => {\n  const menuItems = [\"Delivery\", \"Bar\", \"Contacts\"];\n\n  const menu = document.createElement(\"div\");\n  menu.className = \"md:grow flex items-center justify-center\";\n\n  const ul = document.createElement(\"ul\");\n  ul.className =\n    \"menu-container divide-y divide-y-reverse transition-all duration-300 absolute md:flex-row md:static md:bg-inherit flex flex-col gap-2 rounded-lg items-end  p-2 top-1 right-1 md:flex justify-evenly grow\";\n\n  const menuLi = document.createElement(\"li\");\n  menuLi.className =\n    \"w-10 h-12 bg-cyan-500 text-cyan-50 text-center rounded-md\";\n  const menuBtn = document.createElement(\"button\");\n  menuBtn.addEventListener(\"click\", showMenu);\n  menuBtn.className = \"md:hidden  font-bold text-2xl  p-2 rounded-xl\";\n  menuBtn.textContent = \"☰\";\n\n  menuLi.appendChild(menuBtn);\n  ul.appendChild(menuLi);\n\n  menuItems.forEach((item) => {\n    const li = document.createElement(\"li\");\n    li.className = \"menu-list-item  text-end hidden tracking-widest\";\n    li.textContent = item;\n    ul.appendChild(li);\n  });\n\n  menu.appendChild(ul);\n\n  const btns = [\"github\", \"facebook\"];\n  const btnDiv = document.createElement(\"div\");\n  btnDiv.className = \"hidden md:flex justify-evenly gap-2\";\n  btns.forEach((btn) => {\n    const button = document.createElement(\"button\");\n    button.className = \"border border-gray-400 rounded-full p-2\";\n    button.textContent = btn;\n    btnDiv.appendChild(button);\n  });\n\n  menu.appendChild(btnDiv);\n\n  return menu;\n};\n\nconst showMenu = (e) => {\n  const menuItems = document.querySelectorAll(\".menu-list-item\");\n  const menu = document.querySelector(\".menu-container\");\n\n  if (e.target.textContent !== \"×\") {\n    menu.classList.add(\"bg-cyan-500\", \"w-32\", \"text-white\");\n    e.target.textContent = \"×\";\n  } else {\n    menu.classList.remove(\"bg-cyan-500\", \"w-32\", \"text-white\");\n    e.target.textContent = \"☰\";\n  }\n\n  console.log(e.target.textContent);\n\n  menuItems.forEach((item) => {\n    if (item.classList.contains(\"hidden\"))\n      return item.classList.remove(\"hidden\");\n    else return item.classList.add(\"hidden\");\n  });\n};\nconst headerContent = () => {\n  const header = document.createElement(\"header\");\n  header.classList.add(\"flex\");\n\n  header.appendChild(logo());\n  header.appendChild(menuContainer());\n\n  return header;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerContent());\n\n\n//# sourceURL=webpack://rest/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _mainContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainContainer.js */ \"./src/mainContainer.js\");\n/* harmony import */ var _mainContainer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mainContainer_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst container = (() => {\n  const content = document.getElementById(\"content\");\n\n  content.appendChild(_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n  return content;\n})();\n\n\n//# sourceURL=webpack://rest/./src/index.js?");

/***/ }),

/***/ "./src/mainContainer.js":
/*!******************************!*\
  !*** ./src/mainContainer.js ***!
  \******************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://rest/./src/mainContainer.js?");

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
/******/ 			// no module.id needed
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
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

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://rest/./src/main.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.js */ \"./src/logo.js\");\n/* harmony import */ var _mainContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainContent.js */ \"./src/mainContent.js\");\n\n\n\n\nconsole.log(\"🚀 ~ file: index.js:5 ~ mainHeadings:\", (0,_mainContent_js__WEBPACK_IMPORTED_MODULE_3__.mainHeadings)());\nconst init = (() => {\n  const content = document.getElementById(\"content\");\n  const header = document.createElement(\"header\");\n  const main = document.createElement(\"main\");\n  const footer = document.createElement(\"footer\");\n\n  header.className = \"flex justify-between items-center\";\n  main.className = \"grid auto-rows-fr place-items-center\";\n  footer.className = \"bg-purple-300\";\n\n  header.appendChild((0,_logo_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"Short\"));\n  header.appendChild(_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n  main.appendChild((0,_mainContent_js__WEBPACK_IMPORTED_MODULE_3__.imgDiv)());\n  main.appendChild((0,_mainContent_js__WEBPACK_IMPORTED_MODULE_3__.mainHeadings)());\n\n  content.appendChild(header);\n  content.appendChild(main);\n  content.appendChild(footer);\n})();\n\n\n//# sourceURL=webpack://rest/./src/index.js?");

/***/ }),

/***/ "./src/logo.js":
/*!*********************!*\
  !*** ./src/logo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst logo = (mode) => {\n  const p = document.createElement(\"p\");\n  const span = document.createElement(\"span\");\n  p.className = \"font-bold text-3xl\";\n  p.textContent = mode === \"Short\" ? \"E\" : \"Enchanted\";\n  span.textContent = mode === \"Short\" ? \"E\" : \"Eats\";\n  span.className =\n    \"bg-cyan-500 py-2 pr-2 text-white rounded-br-lg rounded-tl-lg\";\n\n  p.appendChild(span);\n  return p;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logo);\n\n\n//# sourceURL=webpack://rest/./src/logo.js?");

/***/ }),

/***/ "./src/mainContent.js":
/*!****************************!*\
  !*** ./src/mainContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   imgDiv: () => (/* binding */ imgDiv),\n/* harmony export */   mainHeadings: () => (/* binding */ mainHeadings)\n/* harmony export */ });\n/* harmony import */ var _img_resto_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/resto.png */ \"./src/img/resto.png\");\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ \"./src/logo.js\");\n\n\n\nconst imgDiv = () => {\n  const imgDiv = document.createElement(\"div\");\n  imgDiv.className = \"w-full\";\n\n  const img = new Image();\n  img.src = _img_resto_png__WEBPACK_IMPORTED_MODULE_0__;\n\n  imgDiv.appendChild(img);\n\n  return imgDiv;\n};\n\nconst mainHeadings = () => {\n  const textDiv = document.createElement(\"div\");\n  textDiv.className = \"flex gap-5 flex-col place-items-center\";\n  const world = document.createElement(\"span\");\n  world.textContent = \"NOW AVAILABLE NATIONWIDE\";\n  world.className = \"font-medium tracking-wider text-gray-600 text-lg\";\n  textDiv.appendChild(world);\n\n  const headings = document.createElement(\"h1\");\n  headings.className = \"leading-loose text-center text-2xl font-bold\";\n  headings.textContent = \"Welcome to\";\n\n  headings.appendChild((0,_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n  const ending = document.createElement(\"span\");\n  ending.className = \"text-xl\";\n  ending.textContent = \"Where Magic Meets Gastronomy\";\n\n  headings.appendChild(ending);\n\n  const btnDiv = document.createElement(\"div\");\n  btnDiv.className = \"grid grid-cols-2 gap-2\";\n  const arrBtns = [\"See More Photos\", \"Menu\"];\n  arrBtns.forEach((item) => {\n    const btn = document.createElement(\"button\");\n    btn.className =\n      \"first:bg-red-500 first:text-white p-2 rounded-lg text-lg border-red-500 text-red-500 border\";\n    btn.textContent = item;\n    btnDiv.appendChild(btn);\n  });\n  textDiv.appendChild(headings);\n  textDiv.appendChild(btnDiv);\n\n  return textDiv;\n};\n\n\n//# sourceURL=webpack://rest/./src/mainContent.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const text = \"≡\";\n  const menuItems = [\"Delivery\", \"Bar\", \"Contacts\"];\n  const div = document.createElement(\"div\");\n  div.className = \"\";\n  const ul = document.createElement(\"ul\");\n  ul.className =\n    \"menu-list hidden absolute text-xl w-full h-screen  top-20 right-0 flex flex-col gap-10 \";\n  const button = document.createElement(\"button\");\n  button.textContent = text;\n  button.className =\n    \"relative text-center transition-opacity duration-300 z-10 w-12 h-12 text-4xl border border-gray-200 py-1 px-2 rounded-md\";\n  button.addEventListener(\"click\", () => showMenu(button));\n  menuItems.forEach((item) => {\n    const li = document.createElement(\"li\");\n    li.className = \"border-b py-2 w-[90%]  place-self-center\";\n\n    const span = document.createElement(\"span\");\n    span.textContent = \"⦠\";\n\n    const btn = document.createElement(\"button\");\n    btn.className = \"w-full flex justify-between\";\n    btn.textContent = item;\n\n    btn.appendChild(span);\n    li.appendChild(btn);\n    ul.appendChild(li);\n  });\n\n  div.appendChild(button);\n  div.appendChild(ul);\n  return div;\n};\n\nconst showMenu = (button) => {\n  const menuList = document.querySelector(\".menu-list\");\n\n  button.classList.add(\"opacity-0\");\n  if (menuList.classList.contains(\"hidden\")) {\n    menuList.classList.remove(\"hidden\");\n    setTimeout(() => {\n      menuList.classList.remove(\"opacity-0\");\n      button.textContent = \"×\";\n      button.classList.remove(\"opacity-0\");\n    }, 150);\n  } else {\n    menuList.classList.add(\"opacity-0\");\n    setTimeout(() => {\n      menuList.classList.add(\"hidden\");\n      button.textContent = \"≡\";\n      button.classList.remove(\"opacity-0\");\n    }, 150);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu());\n\n\n//# sourceURL=webpack://rest/./src/menu.js?");

/***/ }),

/***/ "./src/img/resto.png":
/*!***************************!*\
  !*** ./src/img/resto.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a1f032e85bd34cc530df.png\";\n\n//# sourceURL=webpack://rest/./src/img/resto.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
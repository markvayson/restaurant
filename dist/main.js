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

/***/ "./src/contents.js":
/*!*************************!*\
  !*** ./src/contents.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _imgDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgDiv */ \"./src/imgDiv.js\");\n\n\nconst contents = () => {\n  const content = document.createElement(\"div\");\n  content.className = \"bg-red-500 grid grid-cols-2\";\n\n  content.appendChild((0,_imgDiv__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n  return content;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contents());\n\n\n//# sourceURL=webpack://rest/./src/contents.js?");

/***/ }),

/***/ "./src/imgDiv.js":
/*!***********************!*\
  !*** ./src/imgDiv.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_restofront_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/restofront.png */ \"./src/img/restofront.png\");\n/* harmony import */ var _img_restoback_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/restoback.png */ \"./src/img/restoback.png\");\n/* harmony import */ var _img_restoside_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/restoside.png */ \"./src/img/restoside.png\");\n/* harmony import */ var _img_restoseaside_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/restoseaside.png */ \"./src/img/restoseaside.png\");\n/* harmony import */ var _img_bg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/bg.png */ \"./src/img/bg.png\");\n\n\n\n\n\n\nconst shuffleImg = (arr) => {\n  for (let i = 0; i < arr.length; i++) {\n    const j = Math.floor(Math.random() * (i + 1));\n    [arr[i], arr[j]] = [arr[j], arr[i]];\n  }\n\n  return arr;\n};\n\nconst imgDiv = (imgPaths) => {\n  let arr = [];\n  if (imgPaths === \"headings\") {\n    arr = [_img_restofront_png__WEBPACK_IMPORTED_MODULE_0__, _img_restoback_png__WEBPACK_IMPORTED_MODULE_1__, _img_restoside_png__WEBPACK_IMPORTED_MODULE_2__, _img_restoseaside_png__WEBPACK_IMPORTED_MODULE_3__];\n  }\n  const imgContainer = document.createElement(\"div\");\n  imgContainer.className = \"grid md:order-2 gap-2 grid-cols-2\";\n\n  const shuffledArr = shuffleImg(arr);\n  const topLeft = new Image();\n  topLeft.src = shuffledArr[0];\n  topLeft.className = \"rounded-lg self-end shadow-xl\";\n  const topRight = new Image();\n  topRight.src = shuffledArr[1];\n  topRight.className = \"rounded-lg shadow-xl self-end w-10/12 h-10/12\";\n  const bottomLeft = new Image();\n  bottomLeft.src = shuffledArr[2];\n  bottomLeft.className =\n    \"rounded-lg shadow-xl justify-self-end w-10/12 h-10/12\";\n  const bottomRight = new Image();\n  bottomRight.src = shuffledArr[3];\n  bottomRight.className = \"rounded-lg shadow-xl\";\n\n  imgContainer.appendChild(topLeft);\n  imgContainer.appendChild(topRight);\n  imgContainer.appendChild(bottomLeft);\n  imgContainer.appendChild(bottomRight);\n\n  return imgContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imgDiv);\n\n\n//# sourceURL=webpack://rest/./src/imgDiv.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.js */ \"./src/logo.js\");\n/* harmony import */ var _mainContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainContent.js */ \"./src/mainContent.js\");\n/* harmony import */ var _contents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contents */ \"./src/contents.js\");\n\n\n\n\n\n\nconsole.log(\"🚀 ~ file: index.js:5 ~ mainHeadings:\", (0,_mainContent_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\nconst init = (() => {\n  const content = document.getElementById(\"content\");\n  const header = document.createElement(\"header\");\n  const main = document.createElement(\"main\");\n  const footer = document.createElement(\"footer\");\n\n  header.className = \"p-5 flex justify-between items-center\";\n  main.className = \"grid gap-10  p-5 auto-rows-fr \";\n  footer.className = \"bg-purple-300\";\n\n  header.appendChild((0,_logo_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"Short\"));\n  header.appendChild(_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n  main.appendChild((0,_mainContent_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n  main.appendChild(_contents__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n  content.appendChild(header);\n  content.appendChild(main);\n})();\n\n\n//# sourceURL=webpack://rest/./src/index.js?");

/***/ }),

/***/ "./src/logo.js":
/*!*********************!*\
  !*** ./src/logo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst logo = (mode) => {\n  const p = document.createElement(\"p\");\n  const span = document.createElement(\"span\");\n  p.className = \"font-bold text-3xl\";\n  p.textContent = mode === \"Short\" ? \"E\" : \"Enchanted\";\n  span.textContent = mode === \"Short\" ? \"E\" : \"Eats\";\n  span.className =\n    \"bg-red-500 py-2 pr-2 text-white rounded-br-lg rounded-tl-lg\";\n\n  p.appendChild(span);\n  return p;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logo);\n\n\n//# sourceURL=webpack://rest/./src/logo.js?");

/***/ }),

/***/ "./src/mainContent.js":
/*!****************************!*\
  !*** ./src/mainContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo */ \"./src/logo.js\");\n/* harmony import */ var _imgDiv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgDiv.js */ \"./src/imgDiv.js\");\n\n\n\nconst mainHeadings = () => {\n  const headings = document.createElement(\"div\");\n  headings.className = \"grid md:grid-cols-2 place-items-start gap-10 \";\n\n  const textDiv = document.createElement(\"div\");\n  textDiv.className =\n    \"flex gap-5 md:order-1 md:place-self-center flex-col justify-self-center items-center\";\n\n  const world = document.createElement(\"span\");\n  world.textContent = \"NOW AVAILABLE NATIONWIDE\";\n  world.className = \"font-medium tracking-wider text-gray-600 text-lg\";\n  textDiv.appendChild(world);\n\n  const headginText = document.createElement(\"h1\");\n  headginText.className = \"leading-loose  text-center text-2xl font-bold\";\n  headginText.textContent = \"Welcome to\";\n\n  headginText.appendChild((0,_logo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n  const ending = document.createElement(\"span\");\n  ending.className = \"text-xl\";\n  ending.textContent = \"Where Magic Meets Gastronomy\";\n\n  headginText.appendChild(ending);\n\n  const btnDiv = document.createElement(\"div\");\n  btnDiv.className = \"grid grid-cols-2 gap-2\";\n  const arrBtns = [\"See More Photos\", \"Menu\"];\n  arrBtns.forEach((item) => {\n    const btn = document.createElement(\"button\");\n    btn.className =\n      \"first:bg-red-500 first:text-white p-2 rounded-lg text-lg border-red-500 text-red-500 border\";\n    btn.textContent = item;\n    btnDiv.appendChild(btn);\n  });\n  textDiv.appendChild(headginText);\n  textDiv.appendChild(btnDiv);\n\n  headings.appendChild((0,_imgDiv_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"headings\"));\n  headings.appendChild(textDiv);\n  return headings;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainHeadings);\n\n\n//# sourceURL=webpack://rest/./src/mainContent.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const text = \"≡\";\n  const menuItems = [\"Delivery\", \"Bar\", \"Contacts\"];\n  const div = document.createElement(\"div\");\n  div.className = \"\";\n  const ul = document.createElement(\"ul\");\n  ul.className =\n    \"menu-list hidden absolute text-xl w-full h-screen  top-20 right-0 flex flex-col gap-10 \";\n  const button = document.createElement(\"button\");\n  button.textContent = text;\n  button.className =\n    \"relative text-center transition-opacity duration-300 z-10 w-12 h-12 text-4xl border border-gray-200 py-1 px-2 rounded-md\";\n  button.addEventListener(\"click\", () => showMenu(button));\n  menuItems.forEach((item) => {\n    const li = document.createElement(\"li\");\n    li.className = \"border-b py-2 w-[90%]  place-self-center\";\n\n    const span = document.createElement(\"span\");\n    span.textContent = \"⦠\";\n\n    const btn = document.createElement(\"button\");\n    btn.className = \"w-full flex justify-between\";\n    btn.textContent = item;\n\n    btn.appendChild(span);\n    li.appendChild(btn);\n    ul.appendChild(li);\n  });\n\n  div.appendChild(button);\n  div.appendChild(ul);\n  return div;\n};\n\nconst showMenu = (button) => {\n  const menuList = document.querySelector(\".menu-list\");\n\n  button.classList.add(\"opacity-0\");\n  if (menuList.classList.contains(\"hidden\")) {\n    menuList.classList.remove(\"hidden\");\n    setTimeout(() => {\n      menuList.classList.remove(\"opacity-0\");\n      button.textContent = \"×\";\n      button.classList.remove(\"opacity-0\");\n    }, 150);\n  } else {\n    menuList.classList.add(\"opacity-0\");\n    setTimeout(() => {\n      menuList.classList.add(\"hidden\");\n      button.textContent = \"≡\";\n      button.classList.remove(\"opacity-0\");\n    }, 150);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu());\n\n\n//# sourceURL=webpack://rest/./src/menu.js?");

/***/ }),

/***/ "./src/img/bg.png":
/*!************************!*\
  !*** ./src/img/bg.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9b9c384f462777648d95.png\";\n\n//# sourceURL=webpack://rest/./src/img/bg.png?");

/***/ }),

/***/ "./src/img/restoback.png":
/*!*******************************!*\
  !*** ./src/img/restoback.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f5ecb21b2ef75ae4a037.png\";\n\n//# sourceURL=webpack://rest/./src/img/restoback.png?");

/***/ }),

/***/ "./src/img/restofront.png":
/*!********************************!*\
  !*** ./src/img/restofront.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cd593cb95ea164859221.png\";\n\n//# sourceURL=webpack://rest/./src/img/restofront.png?");

/***/ }),

/***/ "./src/img/restoseaside.png":
/*!**********************************!*\
  !*** ./src/img/restoseaside.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"65b092e168778a837cbb.png\";\n\n//# sourceURL=webpack://rest/./src/img/restoseaside.png?");

/***/ }),

/***/ "./src/img/restoside.png":
/*!*******************************!*\
  !*** ./src/img/restoside.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2704d0bbcd08d56151c7.png\";\n\n//# sourceURL=webpack://rest/./src/img/restoside.png?");

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
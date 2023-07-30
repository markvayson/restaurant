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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _imgDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgDiv */ \"./src/imgDiv.js\");\n/* harmony import */ var _shuffleArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shuffleArray */ \"./src/shuffleArray.js\");\n\n\n\nconst contents = (path, isReverse) => {\n  const details = {\n    Who: {\n      intro: '\"Meet Your Maker\"',\n      name: \"Chef Merlin Moonshadow\",\n      text: \"a culinary magician renowned for blending traditional cooking techniques with a touch of sorcery. Alongside a team of skilled chefs and enchanting servers, he brings to life Enchanted Eats, where food becomes an extraordinary adventure.\",\n    },\n    What: {\n      intro: '\"Not Just A Restaurant\"',\n      name: \"Enchanted Eats\",\n      text: \"is not just a restaurant; it's a portal to a realm of fantasy and wonder. Indulge in innovative dishes inspired by legendary tales and mythical beings. Guests can concoct their own potions and solve riddles hidden within the menu for secret treats.\",\n    },\n    Where: {\n      intro: '\"Amidst a Mystical Forest\"',\n      name: \"Enchanted Eats\",\n      text: \"emerges from the pages of a storybook. The restaurant's ambiance, with floating candles and ancient tomes, adds to the magical experience. Located discreetly, it invites curious travelers and local residents seeking extraordinary dining.\",\n    },\n  };\n\n  const content = document.createElement(\"div\");\n  content.id = path;\n  content.className = \"grid gap-10 md:grid-cols-2\";\n\n  const section = document.createElement(\"div\");\n  section.className =\n    \"grid md:w-3/4 md:h-1/2 md:place-self-center place-items-center gap-2 text-justify p-5\";\n\n  const head = document.createElement(\"span\");\n  head.textContent = path;\n\n  const intro = document.createElement(\"div\");\n  intro.textContent = details[path].intro;\n  intro.className = \"flex gap-2 flex-col text-xl text-center p-5\";\n\n  const name = document.createElement(\"span\");\n  name.className = \"text-3xl font-bold tracking-wider\";\n  name.textContent = details[path].name;\n\n  const info = document.createElement(\"p\");\n  info.className = \"md:text-xl\";\n  info.textContent = details[path].text;\n\n  const sectionDivs = [head, intro, name, info];\n  sectionDivs.forEach((div) => {\n    section.appendChild(div);\n  });\n  let divs = [];\n  if (isReverse) {\n    divs = [(0,_imgDiv__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(path), section];\n    head.className =\n      \"bg-red-500 font-bold tracking-widest text-xl text-white p-2 rounded-lg\";\n  } else {\n    divs = [section, (0,_imgDiv__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(path)];\n    content.classList.add(\"bg-red-500\", \"text-white\");\n    head.className =\n      \"bg-white font-bold tracking-widest text-xl text-red-500 p-2 rounded-lg\";\n    name.classList.add(\"bg-white\", \"text-red-500\", \"p-2\");\n  }\n\n  divs.forEach((div) => {\n    content.appendChild(div);\n  });\n\n  return content;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contents);\n\n\n//# sourceURL=webpack://rest/./src/contents.js?");

/***/ }),

/***/ "./src/headerContent.js":
/*!******************************!*\
  !*** ./src/headerContent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.js */ \"./src/logo.js\");\n\n\nconst headerTitle = () => {\n  const div = document.createElement(\"div\");\n  div.className = \"flex justify-between items-center w-full\";\n  div.appendChild((0,_logo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Short\"));\n\n  const menuBtn = document.createElement(\"button\");\n  menuBtn.textContent = \"≡\";\n  menuBtn.className =\n    \"text-3xl border px-2 py-1 transition-opacity duration-300 rounded-md border-gray-100\";\n  menuBtn.addEventListener(\"click\", showMenu);\n  div.appendChild(menuBtn);\n  return div;\n};\n\nconst showMenu = () => {\n  const header = document.querySelector(\"header\");\n  const main = document.querySelector(\"main\");\n  if (header) {\n    const list = header.querySelector(\"ul\");\n    if (list) {\n      main.classList.remove(\"hidden\");\n      header.removeChild(list);\n    } else {\n      main.classList.add(\"hidden\");\n      header.appendChild(menuList());\n    }\n  }\n};\n\nconst headerContent = () => {\n  const header = document.createElement(\"div\");\n  header.className = \"grid gap-5 w-full\";\n  header.appendChild(headerTitle());\n  return header;\n};\n\nconst showSubMenu = (section) => {\n  const li = document.querySelector(`.${section}`);\n\n  const liSpan = li.querySelector(\"span\");\n  liSpan.textContent = \" ⦡ \";\n  const isNew = li.querySelector(\".new-list\");\n  if (isNew) {\n    isNew.classList.add(\"opacity-0\");\n    liSpan.textContent = \">\";\n    return li.removeChild(isNew);\n  }\n  const showMore = {\n    About: [\"Who\", \"What\", \"Where\"],\n    Menu: [\"Foods\", \"Beverages\"],\n    Contact: [\"Message\", \"Live Chat\"],\n  };\n  const main = document.querySelector(\"main\");\n  const newList = document.createElement(\"ul\");\n  newList.className = \"new-list  pt-3 flex flex-col gap-5\";\n  showMore[section].forEach((item) => {\n    const newItem = document.createElement(\"a\");\n    newItem.href = `#${item}`;\n    newItem.textContent = item;\n    newItem.className = `text-black flex justify-between transition-opacity duration-300  ml-5 border-b`;\n    if (section === \"About\") {\n      newItem.addEventListener(\"click\", hideMenu);\n    }\n    const span = document.createElement(\"span\");\n    span.textContent = \">\";\n    newItem.appendChild(span);\n\n    newList.appendChild(newItem);\n  });\n  li.appendChild(newList);\n  return li;\n};\n\nconst hideMenu = () => {\n  const header = document.querySelector(\"header\");\n  if (header) {\n    const ul = header.querySelector(\"ul\");\n    if (ul) {\n      const main = document.querySelector(\"main\");\n\n      main.classList.remove(\"hidden\");\n      header.removeChild(ul);\n    }\n  }\n};\n\nconst menuList = () => {\n  const ul = document.createElement(\"ul\");\n  ul.className = \"flex w-full  flex-col justify-around gap-2\";\n  const menuItems = [\"About\", \"Menu\", \"Contact\"];\n  menuItems.forEach((item) => {\n    const li = document.createElement(\"li\");\n    li.className = `${item}  p-2 font-bold first:text-red-500 flex flex-col justify-between`;\n\n    const btn = document.createElement(\"button\");\n    btn.textContent = item;\n    btn.className = \"flex border-b  tracking-widest justify-between\";\n    btn.addEventListener(\"click\", () => showSubMenu(item));\n    const span = document.createElement(\"span\");\n    span.textContent = \">\";\n\n    btn.appendChild(span);\n    li.appendChild(btn);\n\n    ul.appendChild(li);\n  });\n\n  return ul;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerContent());\n\n\n//# sourceURL=webpack://rest/./src/headerContent.js?");

/***/ }),

/***/ "./src/imgDiv.js":
/*!***********************!*\
  !*** ./src/imgDiv.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_restofront_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/restofront.png */ \"./src/img/restofront.png\");\n/* harmony import */ var _img_restoback_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/restoback.png */ \"./src/img/restoback.png\");\n/* harmony import */ var _img_restoside_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/restoside.png */ \"./src/img/restoside.png\");\n/* harmony import */ var _img_restoseaside_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/restoseaside.png */ \"./src/img/restoseaside.png\");\n/* harmony import */ var _img_bg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/bg.png */ \"./src/img/bg.png\");\n/* harmony import */ var _img_chef1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/chef1.png */ \"./src/img/chef1.png\");\n/* harmony import */ var _img_chef2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/chef2.png */ \"./src/img/chef2.png\");\n/* harmony import */ var _img_chef3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/chef3.png */ \"./src/img/chef3.png\");\n/* harmony import */ var _img_chef4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/chef4.png */ \"./src/img/chef4.png\");\n/* harmony import */ var _shuffleArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shuffleArray */ \"./src/shuffleArray.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst imgDiv = (imgPaths) => {\n  let obj = {\n    headings: [_img_restofront_png__WEBPACK_IMPORTED_MODULE_0__, _img_restoback_png__WEBPACK_IMPORTED_MODULE_1__, _img_restoside_png__WEBPACK_IMPORTED_MODULE_2__, _img_restoseaside_png__WEBPACK_IMPORTED_MODULE_3__],\n    Who: [_img_chef1_png__WEBPACK_IMPORTED_MODULE_5__, _img_chef2_png__WEBPACK_IMPORTED_MODULE_6__, _img_chef3_png__WEBPACK_IMPORTED_MODULE_7__, _img_chef4_png__WEBPACK_IMPORTED_MODULE_8__],\n    What: [_img_chef1_png__WEBPACK_IMPORTED_MODULE_5__, _img_chef2_png__WEBPACK_IMPORTED_MODULE_6__, _img_chef3_png__WEBPACK_IMPORTED_MODULE_7__, _img_chef4_png__WEBPACK_IMPORTED_MODULE_8__],\n    Where: [_img_chef1_png__WEBPACK_IMPORTED_MODULE_5__, _img_chef2_png__WEBPACK_IMPORTED_MODULE_6__, _img_chef3_png__WEBPACK_IMPORTED_MODULE_7__, _img_chef4_png__WEBPACK_IMPORTED_MODULE_8__],\n  };\n\n  const imgContainer = document.createElement(\"div\");\n  imgContainer.className = \"grid p-5  gap-2 grid-cols-2\";\n\n  const shuffledArr = (0,_shuffleArray__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(obj[imgPaths]);\n  const topLeft = new Image();\n  topLeft.src = shuffledArr[0];\n  topLeft.className = \"rounded-lg self-end shadow-xl\";\n  const topRight = new Image();\n  topRight.src = shuffledArr[1];\n  topRight.className = \"rounded-lg shadow-xl self-end w-10/12 h-10/12\";\n  const bottomLeft = new Image();\n  bottomLeft.src = shuffledArr[2];\n  bottomLeft.className =\n    \"rounded-lg shadow-xl justify-self-end w-10/12 h-10/12\";\n  const bottomRight = new Image();\n  bottomRight.src = shuffledArr[3];\n  bottomRight.className = \"rounded-lg shadow-xl\";\n\n  imgContainer.appendChild(topLeft);\n  imgContainer.appendChild(topRight);\n  imgContainer.appendChild(bottomLeft);\n  imgContainer.appendChild(bottomRight);\n\n  return imgContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imgDiv);\n\n\n//# sourceURL=webpack://rest/./src/imgDiv.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _mainContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainContent.js */ \"./src/mainContent.js\");\n/* harmony import */ var _contents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contents */ \"./src/contents.js\");\n/* harmony import */ var _headerContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./headerContent */ \"./src/headerContent.js\");\n\n\n\n\n\nconst fromTheTopButton = () => {\n  const btn = document.createElement(\"button\");\n  btn.id = \"toTop\";\n  btn.className =\n    \"fixed bg-slate-100 shadow-md p-3 rounded-full  bottom-5 right-5\";\n  btn.textContent = \"UP\";\n  btn.addEventListener(\"click\", () => {\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\",\n    });\n  });\n  return btn;\n};\n\nconst showBtn = () => {\n  const header = document.querySelector(\"header\");\n  const btn = document.getElementById(\"toTop\");\n  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {\n    btn.classList.remove(\"hidden\");\n    header.classList.add(\"fixed\");\n  } else {\n    header.classList.remove(\"fixed\");\n    btn.classList.add(\"hidden\");\n  }\n};\n\nconst init = (() => {\n  const content = document.getElementById(\"content\");\n  const header = document.createElement(\"header\");\n  const main = document.createElement(\"main\");\n  const footer = document.createElement(\"footer\");\n\n  header.className = \"w-full shadow-md bg-white b p-5 gap-5 flex-col flex\";\n  main.className = \"grid gap-10 auto-rows-fr \";\n  footer.className = \"bg-purple-300\";\n\n  header.appendChild(_headerContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n  main.appendChild((0,_mainContent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  main.appendChild((0,_contents__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"Who\", false));\n  main.appendChild((0,_contents__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"What\", true));\n  main.appendChild((0,_contents__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"Where\", false));\n\n  content.appendChild(fromTheTopButton());\n  content.appendChild(header);\n  content.appendChild(main);\n  window.addEventListener(\"scroll\", showBtn);\n})();\n\n\n//# sourceURL=webpack://rest/./src/index.js?");

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

/***/ "./src/shuffleArray.js":
/*!*****************************!*\
  !*** ./src/shuffleArray.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction shuffleArray(array) {\n  for (let i = array.length - 1; i > 0; i--) {\n    const j = Math.floor(Math.random() * (i + 1));\n    [array[i], array[j]] = [array[j], array[i]];\n  }\n  return array;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shuffleArray);\n\n\n//# sourceURL=webpack://rest/./src/shuffleArray.js?");

/***/ }),

/***/ "./src/img/bg.png":
/*!************************!*\
  !*** ./src/img/bg.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9b9c384f462777648d95.png\";\n\n//# sourceURL=webpack://rest/./src/img/bg.png?");

/***/ }),

/***/ "./src/img/chef1.png":
/*!***************************!*\
  !*** ./src/img/chef1.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2af0c4d2e958eecef548.png\";\n\n//# sourceURL=webpack://rest/./src/img/chef1.png?");

/***/ }),

/***/ "./src/img/chef2.png":
/*!***************************!*\
  !*** ./src/img/chef2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4a701370f067e6cca61f.png\";\n\n//# sourceURL=webpack://rest/./src/img/chef2.png?");

/***/ }),

/***/ "./src/img/chef3.png":
/*!***************************!*\
  !*** ./src/img/chef3.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3676a7e00cec54df8c3f.png\";\n\n//# sourceURL=webpack://rest/./src/img/chef3.png?");

/***/ }),

/***/ "./src/img/chef4.png":
/*!***************************!*\
  !*** ./src/img/chef4.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fa12f238e484ee701c18.png\";\n\n//# sourceURL=webpack://rest/./src/img/chef4.png?");

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
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

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about),\n/* harmony export */   cta: () => (/* binding */ cta),\n/* harmony export */   menuItems: () => (/* binding */ menuItems)\n/* harmony export */ });\n/* harmony import */ var _img_background_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/background.jpg */ \"./src/img/background.jpg\");\n/* harmony import */ var _img_call_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/call.png */ \"./src/img/call.png\");\n/* harmony import */ var _img_facebook_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/facebook.png */ \"./src/img/facebook.png\");\n/* harmony import */ var _img_github_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/github.png */ \"./src/img/github.png\");\n/* harmony import */ var _img_message_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/message.png */ \"./src/img/message.png\");\n/* harmony import */ var _img_chef_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/chef.png */ \"./src/img/chef.png\");\n\n\n\n\n\n\nconst about = {\n  Who: {\n    bg: _img_chef_png__WEBPACK_IMPORTED_MODULE_5__,\n    details:\n      \"Meet Chef Merlin Moonshadow, a culinary magician renowned for blending traditional cooking techniques with a touch of sorcery. Alongside a team of skilled chefs and enchanting servers, he brings to life Enchanted Eats, where food becomes an extraordinary adventure.\",\n  },\n  What: {\n    bg: _img_background_jpg__WEBPACK_IMPORTED_MODULE_0__,\n    details:\n      \"Enchanted Eats is not just a restaurant; it's a portal to a realm of fantasy and wonder. Indulge in innovative dishes inspired by legendary tales and mythical beings. Guests can concoct their own potions and solve riddles hidden within the menu for secret treats.\",\n  },\n  Where: {\n    bg: _img_background_jpg__WEBPACK_IMPORTED_MODULE_0__,\n    details:\n      \"Nestled on the outskirts of a mystical forest, Enchanted Eats emerges from the pages of a storybook. The restaurant's ambiance, with floating candles and ancient tomes, adds to the magical experience. Located discreetly, it invites curious travelers and local residents seeking extraordinary dining.\",\n  },\n};\n\nconst cta = {\n  facebook: {\n    icon: _img_facebook_png__WEBPACK_IMPORTED_MODULE_2__,\n    url: \"#\",\n  },\n  github: {\n    icon: _img_github_png__WEBPACK_IMPORTED_MODULE_3__,\n    url: \"https://github.com/markvayson/restaurant\",\n  },\n  message: _img_message_png__WEBPACK_IMPORTED_MODULE_4__,\n  call: _img_call_png__WEBPACK_IMPORTED_MODULE_1__,\n};\nconst menuItems = [\"Delivery\", \"Bar\", \"Contacts\"];\n\n\n//# sourceURL=webpack://rest/./src/data.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   footerContent: () => (/* binding */ footerContent),\n/* harmony export */   social: () => (/* binding */ social)\n/* harmony export */ });\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\n\n\nconst social = (name) => {\n  const link = document.createElement(\"a\");\n  link.href = _data_js__WEBPACK_IMPORTED_MODULE_1__.cta[name].url;\n  link.target = \"_blank\";\n  link.className = \"border border-gray-400 rounded-full p-2\";\n\n  const icon = new Image();\n  icon.src = _data_js__WEBPACK_IMPORTED_MODULE_1__.cta[name].icon;\n  icon.className = \"w-8 h-8\";\n  link.appendChild(icon);\n  return link;\n};\n\nconst footerContent = () => {\n  const footer = document.createElement(\"footer\");\n  footer.className = \"flex justify-between\";\n  const messageIcon = new Image();\n  const callIcon = new Image();\n  messageIcon.src = _data_js__WEBPACK_IMPORTED_MODULE_1__.cta.message;\n  callIcon.src = _data_js__WEBPACK_IMPORTED_MODULE_1__.cta.call;\n  callIcon.className = \"w-8 h-8\";\n  messageIcon.className = \"w-8 h-8\";\n\n  const ctaDiv = document.createElement(\"div\");\n  ctaDiv.className =\n    \"flex gap-2 md:opacity-50 md:hover:opacity-100 md:fixed md:bottom-5 md:right-5\";\n\n  const message = document.createElement(\"button\");\n  message.className = \"border border-gray-400 rounded-full p-2\";\n  message.appendChild(messageIcon);\n  ctaDiv.appendChild(message);\n\n  const call = document.createElement(\"button\");\n  call.className = \"border bg-cyan-500 border-cyan-400 rounded-full p-2\";\n  call.appendChild(callIcon);\n  ctaDiv.appendChild(call);\n\n  const socialDiv = document.createElement(\"div\");\n  socialDiv.className = \"flex md:hidden justify-center gap-2\";\n\n  const facebook = social(\"facebook\");\n  const github = social(\"github\");\n\n  socialDiv.appendChild(facebook);\n  socialDiv.appendChild(github);\n\n  footer.appendChild(ctaDiv);\n  footer.appendChild(socialDiv);\n  return footer;\n};\n\n\n//# sourceURL=webpack://rest/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\nconst logo = () => {\n  const div = document.createElement(\"div\");\n  div.className = \"grow md:grow-0 whitespace-nowrap underline\";\n\n  const p = document.createElement(\"p\");\n  const span = document.createElement(\"span\");\n\n  p.className = \"text-2xl font-bold\";\n  span.className = \"bg-cyan-500 text-white py-1 pr-1 rounded-lg\";\n\n  p.textContent = \"E\";\n  span.textContent = \"E\";\n\n  p.appendChild(span);\n  div.appendChild(p);\n\n  return div;\n};\n\nconst menuContainer = () => {\n  const menu = document.createElement(\"div\");\n  menu.className = \"md:grow flex items-center justify-center\";\n\n  const ul = document.createElement(\"ul\");\n  ul.className =\n    \"menu-container divide-y divide-y-reverse transition-all duration-300 absolute md:flex-row md:static md:bg-inherit flex flex-col gap-2 rounded-lg items-end  p-2 top-1 right-1 md:flex justify-evenly grow\";\n\n  const menuLi = document.createElement(\"li\");\n  menuLi.className =\n    \"w-10 md:hidden h-12 bg-cyan-500 text-cyan-50 text-center rounded-md\";\n  const menuBtn = document.createElement(\"button\");\n  menuBtn.addEventListener(\"click\", showMenu);\n  menuBtn.className = \"md:hidden  font-bold text-2xl  p-2 rounded-xl\";\n  menuBtn.textContent = \"☰\";\n\n  menuLi.appendChild(menuBtn);\n  ul.appendChild(menuLi);\n\n  _data__WEBPACK_IMPORTED_MODULE_1__.menuItems.forEach((item) => {\n    const li = document.createElement(\"li\");\n    li.className = \"menu-list-item  text-end hidden tracking-widest\";\n    li.textContent = item;\n    ul.appendChild(li);\n  });\n\n  menu.appendChild(ul);\n\n  const btnDiv = document.createElement(\"div\");\n  btnDiv.className = \"hidden md:flex justify-evenly gap-2\";\n\n  const facebook = (0,_footer__WEBPACK_IMPORTED_MODULE_2__.social)(\"facebook\");\n  const github = (0,_footer__WEBPACK_IMPORTED_MODULE_2__.social)(\"github\");\n  btnDiv.appendChild(facebook);\n  btnDiv.appendChild(github);\n\n  menu.appendChild(btnDiv);\n\n  return menu;\n};\n\nconst showMenu = (e) => {\n  const menuItems = document.querySelectorAll(\".menu-list-item\");\n  const menu = document.querySelector(\".menu-container\");\n\n  if (e.target.textContent !== \"×\") {\n    menu.classList.add(\"bg-cyan-500\", \"w-32\", \"text-white\");\n    e.target.textContent = \"×\";\n  } else {\n    menu.classList.remove(\"bg-cyan-500\", \"w-32\", \"text-white\");\n    e.target.textContent = \"☰\";\n  }\n\n  menuItems.forEach((item) => {\n    if (item.classList.contains(\"hidden\"))\n      return item.classList.remove(\"hidden\");\n    else return item.classList.add(\"hidden\");\n  });\n};\n\nconst headerContent = () => {\n  const header = document.createElement(\"header\");\n  header.classList.add(\"flex\");\n\n  header.appendChild(logo());\n  header.appendChild(menuContainer());\n\n  return header;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerContent());\n\n\n//# sourceURL=webpack://rest/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _mainContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainContainer.js */ \"./src/mainContainer.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\n\n\n\n\n\nconst container = (() => {\n  const content = document.getElementById(\"content\");\n\n  content.appendChild(_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  content.appendChild(_mainContainer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  content.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_3__.footerContent)());\n})();\n\n\n//# sourceURL=webpack://rest/./src/index.js?");

/***/ }),

/***/ "./src/mainContainer.js":
/*!******************************!*\
  !*** ./src/mainContainer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\n\nconst headings = () => {\n  const headings = document.createElement(\"div\");\n  headings.className = \"w-full items-center gap-1 flex md:grow flex-col\";\n\n  const textContainer = document.createElement(\"div\");\n  const welcome = document.createElement(\"p\");\n  const name = document.createElement(\"p\");\n  const span = document.createElement(\"span\");\n  const p = document.createElement(\"p\");\n\n  welcome.textContent = \"Welcome to,\";\n  welcome.className = \"text-2xl font-bold\";\n  name.textContent = \"Enchanted\";\n  name.className = \"text-4xl font-bold underline\";\n  span.textContent = \"Eats\";\n  span.className = \"bg-cyan-500 py-2 pr-2 rounded-lg text-white\";\n\n  name.appendChild(span);\n\n  p.textContent = '\"Where Magic Meets Gastronomy\"';\n  p.className = \"text-lg\";\n\n  textContainer.appendChild(welcome);\n  textContainer.appendChild(name);\n  textContainer.appendChild(p);\n\n  const aboutBtns = document.createElement(\"div\");\n  aboutBtns.className = \"flex justify-evenly md:gap-5 whitespace-nowrap w-full\";\n  Object.keys(_data_js__WEBPACK_IMPORTED_MODULE_1__.about).forEach((item) => {\n    const button = document.createElement(\"button\");\n    button.className =\n      \"tab-button p-2 rounded-lg border border-gray-400 font-medium tracking-wider\";\n    button.textContent = item;\n    if (button.textContent === \"Who\")\n      button.classList.add(\"bg-cyan-500\", \"text-white\");\n    button.addEventListener(\"click\", () => changeTab(item));\n    aboutBtns.appendChild(button);\n  });\n\n  headings.appendChild(textContainer);\n  headings.appendChild(aboutBtns);\n\n  return headings;\n};\nconst changeTab = (key) => {\n  const filter = Object.keys(_data_js__WEBPACK_IMPORTED_MODULE_1__.about).filter((item) => item !== key);\n  const tabs = document.querySelectorAll(\".tab-button\");\n  tabs.forEach((item) => {\n    if (item.textContent === key)\n      item.classList.add(\"bg-cyan-500\", \"text-white\");\n    else item.classList.remove(\"bg-cyan-500\", \"text-white\");\n  });\n  const tab = _data_js__WEBPACK_IMPORTED_MODULE_1__.about[key];\n  const bg = document.querySelector(\".desc-bg\");\n  const p = document.querySelector(\".desc-p\");\n\n  bg.src = tab.bg;\n  p.textContent = tab.details;\n  return;\n};\nconst aboutContainer = (key) => {\n  const tab = _data_js__WEBPACK_IMPORTED_MODULE_1__.about[key];\n  const container = document.createElement(\"div\");\n  container.className =\n    \"grow flex relative md:flex-row md:items-start flex-col gap-5 items-center justify-evenly\";\n  const bg = new Image();\n  bg.src = tab.bg;\n  bg.className = \"desc-bg object-cover h-full\";\n  const p = document.createElement(\"p\");\n  p.className =\n    \"desc-p absolute font-medium tracking-wider text-justify top-1/2 text-white bg-slate-950 bg-opacity-80 p-2 w-full\";\n  p.textContent = tab.details;\n\n  container.appendChild(bg);\n  container.appendChild(p);\n  return container;\n};\n\nconst main = () => {\n  const main = document.createElement(\"main\");\n  main.className =\n    \"grow flex md:flex md:items-start flex-col gap-5 items-center justify-evenly\";\n\n  main.appendChild(headings());\n  main.appendChild(aboutContainer(\"Who\"));\n\n  return main;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main());\n\n\n//# sourceURL=webpack://rest/./src/mainContainer.js?");

/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7bc903526169ee28e015.jpg\";\n\n//# sourceURL=webpack://rest/./src/img/background.jpg?");

/***/ }),

/***/ "./src/img/call.png":
/*!**************************!*\
  !*** ./src/img/call.png ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC0klEQVR4nO2YO2gVQRSGN75QMNForWgTxSeIxkKiEQtrH4minVpYWQUVIWBhaUKsQowimjSCoKWaJoioGIOCBhFEEEkwKGiMYq6SfHK4c+E6zO7O7uzeexf2a3f2n/Pvnpk5czwvJycnp2YB1gADwBf+5zfwAjgJ1IVotADPgFGgDzglupUIfi0wSThdITofDO/MAg+BdmB+WgYGsWMO2BCg8z3k/ZfArjQMTGDP2QCdM8Bfi4/QCyyqloH+EK3lwH6gE3gcoDMMrEzKwEgEA/cjam8Bbqgvr/MWWJGEgXsRDIzFnGM38M7nT7ilE9AdwcC0wzwNKmCdXlcDx4nGMh+djcAd4DZwzPRlgSWShprenNPuBKyLELxM1uCj81ob+wk45LPQ32tjXwEL4hqYZziB/RgN0Pnp884VmUMb22xY2IdjGVCCtyyClz2+NUDjYsC7PYbxUrqU88DFQJtF8O0WOlvVQVUwaBwMSd3Z2LUTUB+QAhJ8W0S9HcC4pvNRX9jAE23MiVgGlNi1JIIv09sJzGh6R7Ux57XnfS4GthsMdMQWLGpe1fQGtef7bDcJ2wkfaYLDjnqbtd3muuFwKyQ1nwi2Gv7CAUdNSRMptZ+aFqm6+HwF3gDbnAwowSHNgCzGRi8rUCwJ9G1wwMsSwCVDKp32sgKwWOVkOfJXWrysADQBU5qJqUQWWqWQg8dQdH2WkiHmaV+fTqTBE18wrIdvtukE7FUdiRJSsoype0E/cA7YlLaJHoOJQtjCVv2gsE5Fia6w5pmLgTofE6i+UqNj8O7FXIR0MnUYxsvLZVWeRw1eGEnVgAruCPADM3Jp74gZvPArdQPKxHrDOZEEfypiQJlYqHaQmUwa0GqnocwaKAHsMdwnojLpVRt1s5MDajqGgZterQAslV6PBIVd30lKlFVeLULxIGxSLcfLwF3guWrtT6i+1Opqx5mTk5Pj+fIPINiiBB6sHu0AAAAASUVORK5CYII=\";\n\n//# sourceURL=webpack://rest/./src/img/call.png?");

/***/ }),

/***/ "./src/img/chef.png":
/*!**************************!*\
  !*** ./src/img/chef.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c561c503b83ca243ce91.png\";\n\n//# sourceURL=webpack://rest/./src/img/chef.png?");

/***/ }),

/***/ "./src/img/facebook.png":
/*!******************************!*\
  !*** ./src/img/facebook.png ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgUlEQVR4nO2Zy2oUQRSGP41B3YgxgnhbuHDjJqDgDR8gmEQFJbjyEWbhQiKKiqDJIqgDJsQHyAWjhEFxp+JG10ayEATFQQljFFwYJxpsKShhaLrtc7qqp3vRHxyYRfV/zt+XqlM1UFJS4oO1wAFgCLgPLAAN4A+wAiwB88CcHXPEXpM724BrwAcgUEYdGAF25VH4JmAU+JGi8HD8AsaB7nYVfxz45KHwcHwFBrMsfA0wbN/rIMOYANb5Lr4TmM648KAlngAbfRXfAUy1sfjAxmN745wZzqH4wIb5uJ0Y8PDOrwI1oGIngMPAUft7QqB/Nm3xXcBnx+JfAXsT8txL0PiSdooddSz+JbBekOeEQGtMW/x24Kfj4rRHmGtIoNfUrtjXHe/+jCCHmetPAt+Fmjc1C1bd0cC5GG3zVJ7aVdfcVY1mXdoAHnIs3sS+GO3njroHfb2TSbE1QneHhyn5osTAnAcDUSvoMQ+6sxIDbzwkMu1HmD4PuvMSA98yMtDvQbchMdAssIGmxMBvpWDFLjJdLRFFZ2iM2Y5WlB+22V8nsqQQvIw7zxT5TG2JLPielxOoKfK9lgg+VAimbnVbeKvI90AieEkh+E7RtEXRq/yIL2TRSiwDL+yB1r+I6ln2h8aYtmJVmUv0ynZ4ODbJYhr9aBtNESMFNHADBbvtnFsUAyvATpSMF8hAlRR02w113gYaMe25iMECGDiDI3dzNFDFA2bz/SgHAzVfR4uGDcqexdVATXimpH4S1TYYuBNzvTdOA4sZGFgETtEmtgC3/nN6pzGwDNwGNpMD5gjyCvA+hQFzzVW7MysEPcB5+2dIVDdqjtQn7ZgeTWNWUlJCLH8BDiLkv66ZaREAAAAASUVORK5CYII=\";\n\n//# sourceURL=webpack://rest/./src/img/facebook.png?");

/***/ }),

/***/ "./src/img/github.png":
/*!****************************!*\
  !*** ./src/img/github.png ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4klEQVR4nO2ZW4hNYRTHf2PGjMuMaHKpk4QHGqQQyqSQZw9TCilqchu5xDyMSykvDGrwwDxTysMU8iYSuTZNLomYJmXcPSiXidj6ap3a7c453/r2/vaZKftX6+XMPv/1/87e+1trfQMZGRm+mAasAY4B14DnwHvgC9ALPADOAXuAuUAFQ4A6oBm4AwSO8Ro4BOQGw/hw+SW/xjAejZ9AB1BfLvPLgGcejEfjA9CUtvlNwO8UzAeh6JQ77JUq4EzKxoNQXAaqfS7gbBnNBxKXgEof5vcOgvlA4nhS8yuBP0XEDwDjgY1ATwxzpk7sBKYAM0tctyqu+RHAyxLCJmmeYcBm2RJtxgeAFnmvwhS7vh8YSwwOWowUeskWyZ1ZKgVqpEROPjN/W1wkX1Ai2l3NjwO+x1hAXKotuYyXiS6COxSPwgSPC5ikyLfPRfCRQnCFxwUsV+R7pW0AGxRiHz03YTnRtOWdrRHboBBajX+aFHl3a4ROW0R6UurlK4D7ltznNUK3fPwKMdluyd2tEXns4zmMSYMl9zuNyAuLiJnC0qJOUQ+s9A3hBQz4eIRmpbiAOZbcpi+y0mURMbNwWrRacpsCa+WoRaRPGjTfjJKTilK5r2iE1isKihkvfdOpyNumEapXDu4dBXr6OFQBJxX5TDRqRa8rBU3lXJLAfCPwUJnrM1CjFd6iFM3HXWArMF2hba7ZBtxzzHHCdZx8ExFYBywEnibcododjQfAX2AGjrQUEForre/bIscgGioVtSaIxAViUCMnB2GhXukazXP/K8GA0+xg/hswmZjMk/IdFpwfOiN9AvwAbss+rmWqwwJaSciuiODFpIJy9qkx3+Vj9jACpyLC5kAqKTbz5j2pxRMVUriiW+d+GUIOe15At5z6eaetwMubD1eKmb8BjCFFFhQZelyJft+0L0fS+N9AIWrlbnwKJXfFFKe8+Zuy45Wd0TLkm53KFdPAXZXtOCMj43/lH/wRwzngjJpgAAAAAElFTkSuQmCC\";\n\n//# sourceURL=webpack://rest/./src/img/github.png?");

/***/ }),

/***/ "./src/img/message.png":
/*!*****************************!*\
  !*** ./src/img/message.png ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9UlEQVR4nO2YP0vDQBiHH+wmqLgUFKqjDgqC4Lcouoibo6tuLoIZHV1dHUuhgl9CweJX0IpCBastdLISObhAqHe5S3tpL5IfvBQud8nza973/gQKFSpUqFChv6oAdaAHhFOOHtAA1kgB/+EBeDgUHclmVN0D2FATNRsDPqRNqImujYHhQdNWmJbn3xm4BVaYvJaAaxcGRPSBU6CUPTczwJHMdxWLUUlF9AjsZAi/BdwbGMYyIOIHuALmHILPAhfAwOL5qQ1UgWdF+yuw7wC+Cjwp7v8GHLqahZL+oVGLfFlTpNEbnk/gSW0g0jbQVPQRi9+xZZGXZF/VgtmUz9Dx3I1rID5L9EYocl2R9hNmuajPA7DowkA8BWoWKWCTgqsGHmv4NAYi7QEvinEtYFdGS3FdjBFjTRJps2ALP4oB5JR6aTkNDmRf22k4FfyoBmwXoqwXwrENIAvxZKjIe7Jt3K3IGfAFHGRpIJI4Pd3IsDpJGRTEmL6TTLgy4FJloD3EpTXhm4Gy/N1QmPj03UAgoQW8yoSoCW8NBDGGd2BTtq/Ljd65bqAPBgIFR/xNRGnlpYEgYR1pm+CnbSAwrOLatPHBQOACPusPW7qNWWAYJ65bq5FneORX4E5e4SNV5GGlm0f4SclJwU5TuYYn7/DkHb5QITzRL2ITZVTW7ysbAAAAAElFTkSuQmCC\";\n\n//# sourceURL=webpack://rest/./src/img/message.png?");

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
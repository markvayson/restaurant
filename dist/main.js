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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _imgDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgDiv */ \"./src/imgDiv.js\");\n/* harmony import */ var _shuffleArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shuffleArray */ \"./src/shuffleArray.js\");\n\n\n\nconst contents = (path, isReverse) => {\n  const details = {\n    Who: {\n      intro: '\"Meet Your Maker\"',\n      name: \"Chef Merlin Moonshadow\",\n      text: \"a culinary magician renowned for blending traditional cooking techniques with a touch of sorcery. Alongside a team of skilled chefs and enchanting servers, he brings to life Enchanted Eats, where food becomes an extraordinary adventure.\",\n    },\n    What: {\n      intro: '\"Not Just A Restaurant\"',\n      name: \"Enchanted Eats\",\n      text: \"is not just a restaurant; it's a portal to a realm of fantasy and wonder. Indulge in innovative dishes inspired by legendary tales and mythical beings. Guests can concoct their own potions and solve riddles hidden within the menu for secret treats.\",\n    },\n    Where: {\n      intro: '\"Amidst a Mystical Forest\"',\n      name: \"Enchanted Eats\",\n      text: \"emerges from the pages of a storybook. The restaurant's ambiance, with floating candles and ancient tomes, adds to the magical experience. Located discreetly, it invites curious travelers and local residents seeking extraordinary dining.\",\n    },\n  };\n\n  const content = document.createElement(\"div\");\n  content.id = path;\n  content.className = \"grid gap-10 md:grid-cols-2\";\n\n  const section = document.createElement(\"div\");\n  section.className =\n    \"grid md:w-3/4 md:h-1/2 md:place-self-center place-items-center gap-2 text-justify p-5\";\n\n  const head = document.createElement(\"span\");\n  head.textContent = path;\n\n  const intro = document.createElement(\"div\");\n  intro.textContent = details[path].intro;\n  intro.className = \"flex gap-2 flex-col text-xl text-center p-5\";\n\n  const name = document.createElement(\"span\");\n  name.className = \"text-2xl md:text-3xl text-center font-bold tracking-wider\";\n  name.textContent = details[path].name;\n\n  const info = document.createElement(\"p\");\n  info.className = \"md:text-xl\";\n  info.textContent = details[path].text;\n\n  const sectionDivs = [head, intro, name, info];\n  sectionDivs.forEach((div) => {\n    section.appendChild(div);\n  });\n  let divs = [];\n  if (isReverse) {\n    divs = [(0,_imgDiv__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(path), section];\n    head.className =\n      \"bg-red-500 font-bold tracking-widest text-xl text-white p-2 rounded-lg\";\n  } else {\n    divs = [section, (0,_imgDiv__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(path)];\n    content.classList.add(\"bg-red-500\", \"text-white\");\n    head.className =\n      \"bg-white font-bold tracking-widest text-xl text-red-500 p-2 rounded-lg\";\n    name.classList.add(\"bg-white\", \"text-red-500\", \"p-2\");\n  }\n\n  divs.forEach((div) => {\n    content.appendChild(div);\n  });\n\n  return content;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contents);\n\n\n//# sourceURL=webpack://rest/./src/contents.js?");

/***/ }),

/***/ "./src/headerContent.js":
/*!******************************!*\
  !*** ./src/headerContent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.js */ \"./src/logo.js\");\n\n\nconst headerTitle = () => {\n  const div = document.createElement(\"div\");\n  div.className = \"flex md:w-auto justify-between items-center w-full\";\n  div.appendChild((0,_logo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Short\"));\n\n  const menuBtn = document.createElement(\"button\");\n  menuBtn.textContent = \"≡\";\n  menuBtn.id = \"burger-menu-btn\";\n  menuBtn.className =\n    \"text-3xl border md:hidden px-2 py-1 transition-opacity duration-300 rounded-md border-gray-100\";\n  menuBtn.addEventListener(\"click\", showList);\n  div.appendChild(menuBtn);\n\n  return div;\n};\n\nconst showList = () => {\n  const target = document.getElementById(\"burger-menu-btn\");\n  const menuIcon = \"≡\";\n  target.textContent = target.textContent === menuIcon ? \"×\" : menuIcon;\n  const main = document.querySelector(\"main\");\n\n  const menuList = document.getElementById(\"menu-list\");\n  if (menuList.classList.contains(\"hidden\")) {\n    return menuList.classList.remove(\"hidden\");\n  } else {\n    menuList.classList.add(\"hidden\");\n  }\n};\n\nconst headerList = () => {\n  const list = document.createElement(\"ul\");\n  list.id = \"menu-list\";\n  list.className = \"hidden md:grid md:grid-cols-2  p-2\";\n  const items = [\"about\", \"menu\"];\n  items.forEach((item) => {\n    const li = document.createElement(\"li\");\n    li.textContent = item;\n    li.id = item;\n    li.className = \"text-xl p-2 md:z-10 md:border-none border-b\";\n    li.addEventListener(\"click\", showContent);\n\n    list.appendChild(li);\n  });\n  const span = document.createElement(\"span\");\n  list.appendChild(span);\n  return list;\n};\n\nconst showContent = (e) => {\n  const aboutContainer = document.getElementById(\"about-container\");\n  const menuContainer = document.getElementById(\"menu-container\");\n\n  if (e.target.id === \"about\") {\n    aboutContainer.classList.remove(\"hidden\");\n    menuContainer.classList.add(\"hidden\");\n  } else {\n    aboutContainer.classList.add(\"hidden\");\n    menuContainer.classList.remove(\"hidden\");\n  }\n  return showList();\n};\n\nconst headerContent = () => {\n  const header = document.createElement(\"div\");\n  header.className =\n    \"flex md:flex-row md:justify-between flex-col gap-5 w-full\";\n  header.appendChild(headerTitle());\n  header.appendChild(headerList());\n  return header;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerContent());\n\n\n//# sourceURL=webpack://rest/./src/headerContent.js?");

/***/ }),

/***/ "./src/imgDiv.js":
/*!***********************!*\
  !*** ./src/imgDiv.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_restofront_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/restofront.png */ \"./src/img/restofront.png\");\n/* harmony import */ var _img_restoback_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/restoback.png */ \"./src/img/restoback.png\");\n/* harmony import */ var _img_restoside_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/restoside.png */ \"./src/img/restoside.png\");\n/* harmony import */ var _img_restoseaside_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/restoseaside.png */ \"./src/img/restoseaside.png\");\n/* harmony import */ var _img_chef1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/chef1.png */ \"./src/img/chef1.png\");\n/* harmony import */ var _img_chef2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/chef2.png */ \"./src/img/chef2.png\");\n/* harmony import */ var _img_chef3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/chef3.png */ \"./src/img/chef3.png\");\n/* harmony import */ var _img_chef4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/chef4.png */ \"./src/img/chef4.png\");\n/* harmony import */ var _img_what1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/what1.png */ \"./src/img/what1.png\");\n/* harmony import */ var _img_what2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/what2.png */ \"./src/img/what2.png\");\n/* harmony import */ var _img_what3_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/what3.png */ \"./src/img/what3.png\");\n/* harmony import */ var _img_what4_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/what4.png */ \"./src/img/what4.png\");\n/* harmony import */ var _img_where1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/where1.png */ \"./src/img/where1.png\");\n/* harmony import */ var _img_where2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/where2.png */ \"./src/img/where2.png\");\n/* harmony import */ var _img_where3_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/where3.png */ \"./src/img/where3.png\");\n/* harmony import */ var _img_where4_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/where4.png */ \"./src/img/where4.png\");\n/* harmony import */ var _shuffleArray__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shuffleArray */ \"./src/shuffleArray.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst imgDiv = (imgPaths) => {\n  let obj = {\n    headings: [_img_restofront_png__WEBPACK_IMPORTED_MODULE_0__, _img_restoback_png__WEBPACK_IMPORTED_MODULE_1__, _img_restoside_png__WEBPACK_IMPORTED_MODULE_2__, _img_restoseaside_png__WEBPACK_IMPORTED_MODULE_3__],\n    Who: [_img_chef1_png__WEBPACK_IMPORTED_MODULE_4__, _img_chef2_png__WEBPACK_IMPORTED_MODULE_5__, _img_chef3_png__WEBPACK_IMPORTED_MODULE_6__, _img_chef4_png__WEBPACK_IMPORTED_MODULE_7__],\n    What: [_img_what1_png__WEBPACK_IMPORTED_MODULE_8__, _img_what2_png__WEBPACK_IMPORTED_MODULE_9__, _img_what3_png__WEBPACK_IMPORTED_MODULE_10__, _img_what4_png__WEBPACK_IMPORTED_MODULE_11__],\n    Where: [_img_where1_png__WEBPACK_IMPORTED_MODULE_12__, _img_where2_png__WEBPACK_IMPORTED_MODULE_13__, _img_where3_png__WEBPACK_IMPORTED_MODULE_14__, _img_where4_png__WEBPACK_IMPORTED_MODULE_15__],\n  };\n\n  const imgContainer = document.createElement(\"div\");\n  imgContainer.className = \"grid p-5 md:place-self-center gap-2 grid-cols-2\";\n\n  const shuffledArr = (0,_shuffleArray__WEBPACK_IMPORTED_MODULE_16__[\"default\"])(obj[imgPaths]);\n  const topLeft = new Image();\n  topLeft.src = shuffledArr[0];\n  topLeft.className = \"rounded-lg self-end shadow-xl\";\n  const topRight = new Image();\n  topRight.src = shuffledArr[1];\n  topRight.className = \"rounded-lg shadow-xl self-end w-10/12 h-10/12\";\n  const bottomLeft = new Image();\n  bottomLeft.src = shuffledArr[2];\n  bottomLeft.className =\n    \"rounded-lg shadow-xl justify-self-end w-10/12 h-10/12\";\n  const bottomRight = new Image();\n  bottomRight.src = shuffledArr[3];\n  bottomRight.className = \"rounded-lg shadow-xl\";\n\n  imgContainer.appendChild(topLeft);\n  imgContainer.appendChild(topRight);\n  imgContainer.appendChild(bottomLeft);\n  imgContainer.appendChild(bottomRight);\n\n  return imgContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imgDiv);\n\n\n//# sourceURL=webpack://rest/./src/imgDiv.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _mainContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainContent.js */ \"./src/mainContent.js\");\n/* harmony import */ var _headerContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headerContent */ \"./src/headerContent.js\");\n/* harmony import */ var _toTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toTop */ \"./src/toTop.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\n\n\nconst init = (() => {\n  const content = document.getElementById(\"content\");\n  const header = document.createElement(\"header\");\n  const main = document.createElement(\"main\");\n  const footer = document.createElement(\"footer\");\n\n  header.className = \"w-full bg-white b p-5 gap-5 flex-col flex\";\n  main.className = \"grid gap-10  \";\n  footer.className = \"bg-purple-300\";\n\n  header.appendChild(_headerContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n  main.appendChild(_mainContent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n  main.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n  content.appendChild(header);\n  content.appendChild(main);\n  content.appendChild(_toTop__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n})();\n\n\n//# sourceURL=webpack://rest/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo */ \"./src/logo.js\");\n/* harmony import */ var _imgDiv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgDiv.js */ \"./src/imgDiv.js\");\n/* harmony import */ var _contents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contents */ \"./src/contents.js\");\n\n\n\n\nconst mainHeadings = () => {\n  const headings = document.createElement(\"div\");\n  headings.className = \"grid  place-self-start gap-10 \";\n  headings.id = \"about-container\";\n  const textDiv = document.createElement(\"div\");\n  textDiv.className =\n    \"flex gap-5 md:order-1 md:place-self-center flex-col justify-self-center items-center\";\n\n  const world = document.createElement(\"span\");\n  world.textContent = \"NOW AVAILABLE NATIONWIDE\";\n  world.className = \"font-medium tracking-wider text-gray-600 text-lg\";\n  textDiv.appendChild(world);\n\n  const headginText = document.createElement(\"h1\");\n  headginText.className = \"leading-loose  text-center text-2xl font-bold\";\n  headginText.textContent = \"Welcome to\";\n\n  headginText.appendChild((0,_logo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n  const ending = document.createElement(\"span\");\n  ending.className = \"text-xl\";\n  ending.textContent = \"Where Magic Meets Gastronomy\";\n\n  headginText.appendChild(ending);\n\n  const btnDiv = document.createElement(\"div\");\n  btnDiv.className = \"grid grid-cols-2 gap-2\";\n  const arrBtns = [\"See More Photos\", \"Menu\"];\n  arrBtns.forEach((item) => {\n    const btn = document.createElement(\"button\");\n    btn.className =\n      \"first:bg-red-500 first:text-white p-2 rounded-lg text-lg border-red-500 text-red-500 border\";\n    btn.textContent = item;\n    btnDiv.appendChild(btn);\n  });\n  textDiv.appendChild(headginText);\n  textDiv.appendChild(btnDiv);\n  const headers = document.createElement(\"div\");\n  headers.className = \"grid md:place-self-center md:grid-cols-2\";\n  headers.appendChild((0,_imgDiv_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"headings\"));\n  headers.appendChild(textDiv);\n\n  headings.appendChild(headers);\n\n  headings.appendChild((0,_contents__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"Who\", false));\n  headings.appendChild((0,_contents__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"What\", true));\n  headings.appendChild((0,_contents__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"Where\", false));\n\n  return headings;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainHeadings());\n\n\n//# sourceURL=webpack://rest/./src/mainContent.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const div = document.createElement(\"div\");\n  div.className = `grid gap-5 hidden md:grid-cols-2 grid-rows-fr`;\n  div.id = \"menu-container\";\n  const items = {\n    foods: {\n      breakfast: {\n        \"Fairy Berry Pancakes\":\n          \"Fluffy pancakes sprinkled with enchanted berries and drizzled with shimmering honey.\",\n        \"Dragon's Breath Omelette\":\n          \"A fiery omelette filled with spicy peppers, melted cheese, and smoked dragon sausage.\",\n        \"Enchanted Forest Acai Bowl\":\n          \"A magical blend of acai berries, dragon fruit, and edible flowers, topped with crunchy granola and fairy dust.\",\n      },\n      lunch: {\n        \"Mermaid's Melody Salad\":\n          \"A refreshing salad featuring fresh ocean greens, seared shrimp, avocado, and a seafoam vinaigrette.\",\n        \"Enchanted Garden Wrap\":\n          \"A delightful wrap filled with roasted vegetables, hummus, and herb-infused quinoa, wrapped in a mystical green spinach tortilla.\",\n        \"Unicorn's Rainbow Pizza\":\n          \"A whimsical pizza topped with colorful bell peppers, cherry tomatoes, and a sprinkle of edible glitter, all atop a fluffy cloud of mozzarella.\",\n      },\n      dinner: {\n        \"Wizard's Spellbinding Steak\":\n          \"A perfectly grilled steak served with roasted potatoes, charred broccolini, and a mysterious smoky sauce.\",\n        \"Pixie's Forest Risotto\":\n          \"Creamy wild mushroom and truffle risotto, garnished with edible flower petals and sprinkled with pixie dust.\",\n        \"Enchanted Seafood Platter\":\n          \"An exquisite seafood medley of seared scallops, grilled octopus, and buttery lobster tails, served with seaweed salad and lemon butter sauce.\",\n      },\n    },\n\n    beverage: {\n      Hot: {\n        \"Mystic Chai Latte\":\n          \"A bewitching blend of spiced chai, frothy milk, and a hint of enchanting cinnamon.\",\n        \"Enchanted Hot Cocoa\":\n          \"Rich and velvety cocoa with a touch of marshmallow magic and a sprinkle of edible gold dust.\",\n        \"Sorcerer's Brew Coffee\":\n          \"An aromatic brew with beans sourced from the hidden realms, offering an otherworldly caffeine experience.\",\n      },\n      Cold: {\n        \"Faerie Fruit Iced Tea\":\n          \"A refreshing iced tea infused with a medley of enchanted fruits and a twist of citrusy magic.\",\n        \"Unicorn Lemonade\":\n          \"A sparkling lemonade with a spectrum of rainbow colors, accompanied by a unicorn-shaped candy stirrer.\",\n        \"Enchanted Elixir Iced Coffee\":\n          \"A mesmerizing cold brew infused with mystical herbs and served over ice for the perfect pick-me-up.\",\n      },\n      Elixirs: {\n        \"Potion of Eternal Youth\":\n          \"A vibrant elixir made from rejuvenating berries and rare herbs, believed to grant everlasting youthfulness.\",\n        \"Elixir of Enlightenment\":\n          \"A sparkling concoction with hints of elderflower and starlight, thought to bring clarity to the mind and soul.\",\n        \"Enchanted Ambrosia\":\n          \"A secret blend of exotic nectars, said to bestow those who taste it with unparalleled bliss and happiness.\",\n      },\n    },\n  };\n  let DEFAULT = 0;\n\n  const itemsKey = Object.keys(items);\n  itemsKey.forEach((key) => {\n    const itemsKeyDiv = document.createElement(\"div\");\n    itemsKeyDiv.className = \"border-b p-5 gap-5 grid grid-cols-1\";\n    const keyDiv = document.createElement(\"div\");\n    keyDiv.textContent = key;\n    keyDiv.className =\n      \"grid grid-cols-1 w-full text-2xl font-bold uppercase place-items-center gap-5\";\n\n    const values = items[key];\n    const valuesKey = Object.keys(values);\n    const valuesDiv = document.createElement(\"div\");\n    valuesDiv.className = \"grid grid-cols-3 w-full gap-5  text-xl\";\n\n    valuesKey.forEach((value) => {\n      const index = valuesKey.indexOf(value);\n      const button = document.createElement(\"button\");\n      button.textContent = value;\n      button.id = value;\n      if (valuesKey.indexOf(value) === DEFAULT) {\n        button.className = `${key}-button border text-white bg-red-500 border-red-500 p-1 rounded-lg text-center`;\n      } else {\n        button.className = `${key}-button border border-red-500 p-1 rounded-lg text-center`;\n      }\n      button.addEventListener(\"click\", () => {\n        DEFAULT = index;\n        showContent(key, value, values[value]);\n      });\n      valuesDiv.appendChild(button);\n    });\n\n    const contents = document.createElement(\"div\");\n    contents.id = key;\n    contents.className = \"grid   grid-cols-1 place-items-center \";\n    const contentsValue = valuesKey[DEFAULT];\n    const info = values[contentsValue];\n    const infoKeys = Object.keys(info);\n    infoKeys.forEach((item) => {\n      const infoDiv = document.createElement(\"div\");\n      infoDiv.className = \"w-full flex flex-col gap-2 h-32\";\n      const title = document.createElement(\"span\");\n      title.className = \"font-semibold text-xl\";\n      title.textContent = item;\n\n      const p = document.createElement(\"p\");\n      p.textContent = info[item];\n      p.className = \"text-justify text-base\";\n\n      infoDiv.appendChild(title);\n      infoDiv.appendChild(p);\n\n      contents.appendChild(infoDiv);\n    });\n\n    itemsKeyDiv.appendChild(keyDiv);\n    itemsKeyDiv.appendChild(valuesDiv);\n    itemsKeyDiv.appendChild(contents);\n    div.appendChild(itemsKeyDiv);\n  });\n  return div;\n};\n\nconst showContent = (key, value, content) => {\n  const keys = Object.keys(content);\n  const btns = document.querySelectorAll(`.${key}-button`);\n  btns.forEach((button) => {\n    button.classList.remove(\"bg-red-500\", \"text-white\");\n  });\n  const val = document.getElementById(value);\n  val.classList.add(\"bg-red-500\", \"text-white\");\n\n  const cont = document.getElementById(key);\n  const spans = cont.querySelectorAll(\"span\");\n  const texts = cont.querySelectorAll(\"p\");\n  texts.forEach((p, index) => {\n    p.textContent = content[keys[index]];\n  });\n  spans.forEach((span, index) => {\n    span.textContent = keys[index];\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu());\n\n\n//# sourceURL=webpack://rest/./src/menu.js?");

/***/ }),

/***/ "./src/shuffleArray.js":
/*!*****************************!*\
  !*** ./src/shuffleArray.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction shuffleArray(array) {\n  for (let i = array.length - 1; i > 0; i--) {\n    const j = Math.floor(Math.random() * (i + 1));\n    [array[i], array[j]] = [array[j], array[i]];\n  }\n  return array;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shuffleArray);\n\n\n//# sourceURL=webpack://rest/./src/shuffleArray.js?");

/***/ }),

/***/ "./src/toTop.js":
/*!**********************!*\
  !*** ./src/toTop.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst toTopButton = () => {\n  window.addEventListener(\"scroll\", showBtn);\n  const btn = document.createElement(\"button\");\n  btn.id = \"toTop\";\n  btn.className =\n    \"fixed bg-slate-100 text-red-500 opacity-80 hover:opacity-100 shadow-md py-2 px-3 rounded-full  bottom-5 right-5\";\n  btn.textContent = \"⮝\";\n  btn.addEventListener(\"click\", () => {\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\",\n    });\n  });\n  return btn;\n};\n\nconst showBtn = () => {\n  const header = document.querySelector(\"header\");\n  const btn = document.getElementById(\"toTop\");\n  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {\n    btn.classList.remove(\"hidden\");\n  } else {\n    btn.classList.add(\"hidden\");\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toTopButton());\n\n\n//# sourceURL=webpack://rest/./src/toTop.js?");

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

/***/ }),

/***/ "./src/img/what1.png":
/*!***************************!*\
  !*** ./src/img/what1.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cfd7b7f7fae410254fd4.png\";\n\n//# sourceURL=webpack://rest/./src/img/what1.png?");

/***/ }),

/***/ "./src/img/what2.png":
/*!***************************!*\
  !*** ./src/img/what2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"44b4e737f13045c00256.png\";\n\n//# sourceURL=webpack://rest/./src/img/what2.png?");

/***/ }),

/***/ "./src/img/what3.png":
/*!***************************!*\
  !*** ./src/img/what3.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39daec9086ec06b45515.png\";\n\n//# sourceURL=webpack://rest/./src/img/what3.png?");

/***/ }),

/***/ "./src/img/what4.png":
/*!***************************!*\
  !*** ./src/img/what4.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"151d5b588b2aa0b99f12.png\";\n\n//# sourceURL=webpack://rest/./src/img/what4.png?");

/***/ }),

/***/ "./src/img/where1.png":
/*!****************************!*\
  !*** ./src/img/where1.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aa59f04d500052829483.png\";\n\n//# sourceURL=webpack://rest/./src/img/where1.png?");

/***/ }),

/***/ "./src/img/where2.png":
/*!****************************!*\
  !*** ./src/img/where2.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f6ab5fc27ff976f9593d.png\";\n\n//# sourceURL=webpack://rest/./src/img/where2.png?");

/***/ }),

/***/ "./src/img/where3.png":
/*!****************************!*\
  !*** ./src/img/where3.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ea7c19b29f80da3d93aa.png\";\n\n//# sourceURL=webpack://rest/./src/img/where3.png?");

/***/ }),

/***/ "./src/img/where4.png":
/*!****************************!*\
  !*** ./src/img/where4.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"11220e360bd2d562352b.png\";\n\n//# sourceURL=webpack://rest/./src/img/where4.png?");

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
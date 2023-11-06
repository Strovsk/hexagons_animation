/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var HexagonObject;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./HexagonCell.js":
/*!************************!*\
  !*** ./HexagonCell.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HexagonCell)\n/* harmony export */ });\nclass HexagonCell {\r\n  /**\r\n   * @constructor\r\n   * @param {number} size.w - Hexagon width\r\n   * @param {number} size.h - Hexagon height\r\n   * @param {number} position.x - Hexagon position in x axis (left)\r\n   * @param {number} position.y - Hexagon position in y axis (top)\r\n   * @param {string} color - Hexagon color HEX, RGBA, HSLA, etc.\r\n   */\r\n  constructor(\r\n    size = { w: 150, h: 135 },\r\n    position = { x: 100, y: 100 },\r\n    color = \"#e0e0e0\"\r\n  ) {\r\n    this.size = { width: size.w, height: size.h };\r\n    this.position = { x: position.x, y: position.y };\r\n    this.color = color;\r\n    this.cell = this.gen();\r\n    this.positionObject = {\r\n      0: this.getEdgePosition0(),\r\n      1: this.getEdgePosition1(),\r\n      2: this.getEdgePosition2(),\r\n      3: this.getEdgePosition4(),\r\n      4: this.getEdgePosition4(),\r\n      5: this.getEdgePosition5(),\r\n    };\r\n  }\r\n\r\n  /** */\r\n  gen() {\r\n    const animationDuration = parseInt(4 + Math.random() * 4);\r\n    const animationDelay = parseInt(1 + Math.random() * 4);\r\n    let generic = document.createElement(\"div\");\r\n    generic.style.setProperty(\"--cell-height\", `${this.size.height}px`);\r\n    generic.style.setProperty(\"--cell-width\", `${this.size.width}px`);\r\n    generic.style.setProperty(\"--animation-time\", `${animationDuration}s`);\r\n    generic.style.setProperty(\"--animation-delay\", `${animationDelay}s`);\r\n    generic.style.background = `${this.color}`;\r\n    generic.classList.add(\"hexagon_cell\");\r\n\r\n    let generic_shadow_container = document.createElement(\"div\");\r\n    generic_shadow_container.classList.add(\"hexagon_cell_container_shadow\");\r\n    generic_shadow_container.style.setProperty(\r\n      \"animation-duration\",\r\n      `${animationDuration}s`\r\n    );\r\n    generic_shadow_container.style.setProperty(\r\n      \"animation-delay\",\r\n      `${animationDelay}s`\r\n    );\r\n    generic_shadow_container.style.left = `${this.position.x}px`;\r\n    generic_shadow_container.style.top = `${this.position.y}px`;\r\n    generic_shadow_container.appendChild(generic);\r\n    return generic_shadow_container;\r\n  }\r\n\r\n  getElement() {\r\n    return this.cell;\r\n  }\r\n\r\n  /*   The following functions return the position of the edges in clockwise order\r\n\r\n        ___0___\r\n      /        \\  \r\n  5  /          \\  1\r\n    /            \\\r\n    \\            /\r\n  4  \\          / 2\r\n      \\___3____/\r\n */\r\n\r\n  /**\r\n   *\r\n   * @returns {Object} - Position of the first edge\r\n   */\r\n  getEdgePosition0() {\r\n    return { x: this.position.x, y: this.position.y - this.size.height };\r\n  }\r\n\r\n  /**\r\n   *\r\n   * @returns {Object} - Position of the second edge\r\n   */\r\n  getEdgePosition1() {\r\n    let vertex1 = parseInt(\r\n      window\r\n        .getComputedStyle(document.querySelector(\":root\"))\r\n        .getPropertyValue(\"--polygon-cell-pair-1\")\r\n        .split(\" \")[1]\r\n        .slice(0, -1)\r\n    );\r\n    return {\r\n      x: this.position.x + (this.size.width * vertex1) / 100 + 1,\r\n      y: this.position.y - this.size.height / 2,\r\n    };\r\n  }\r\n\r\n  /**\r\n   * @returns {Object} - Position of the third edge\r\n   */\r\n  getEdgePosition2() {\r\n    let vertex1 = parseInt(\r\n      window\r\n        .getComputedStyle(document.querySelector(\":root\"))\r\n        .getPropertyValue(\"--polygon-cell-pair-3\")\r\n        .split(\" \")[1]\r\n        .slice(0, -1)\r\n    );\r\n    return {\r\n      x: this.position.x + (this.size.width * vertex1) / 100 + 1,\r\n      y: this.position.y + this.size.height / 2,\r\n    };\r\n  }\r\n\r\n  /**\r\n   * @returns {Object} - Position of the fourth edge\r\n   */\r\n  getEdgePosition3() {\r\n    return { x: this.position.x, y: this.position.y + this.size.height };\r\n  }\r\n\r\n  /**\r\n   * @returns {Object} - Position of the fifth edge\r\n   */\r\n  getEdgePosition4() {\r\n    let vertex1 = parseInt(\r\n      window\r\n        .getComputedStyle(document.querySelector(\":root\"))\r\n        .getPropertyValue(\"--polygon-cell-pair-3\")\r\n        .split(\" \")[1]\r\n        .slice(0, -1)\r\n    );\r\n    return {\r\n      x: this.position.x - (this.size.width * vertex1) / 100 + 1,\r\n      y: this.position.y + this.size.height / 2,\r\n    };\r\n  }\r\n\r\n  /**\r\n   * @returns {Object} - Position of the sixth edge\r\n   */\r\n  getEdgePosition5() {\r\n    let vertex1 = parseInt(\r\n      window\r\n        .getComputedStyle(document.querySelector(\":root\"))\r\n        .getPropertyValue(\"--polygon-cell-pair-1\")\r\n        .split(\" \")[1]\r\n        .slice(0, -1)\r\n    );\r\n    return {\r\n      x: this.position.x - (this.size.width * vertex1) / 100 + 1,\r\n      y: this.position.y - this.size.height / 2,\r\n    };\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://HexagonObject/./HexagonCell.js?");

/***/ }),

/***/ "./HexagonField.js":
/*!*************************!*\
  !*** ./HexagonField.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HexagonField)\n/* harmony export */ });\n/* harmony import */ var _HexagonCell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HexagonCell.js */ \"./HexagonCell.js\");\n\r\n\r\nclass HexagonField {\r\n  /**\r\n   *\r\n   * @constructor\r\n   * @param {string} containerId - The container id whitout #\r\n   * @param {number} nMax - The number of hexagons to be created\r\n   * @param {number} deep - The deep of the recursion\r\n   */\r\n  constructor(containerId = \"hexagon_container\", nMax = 40, deep = 5) {\r\n    this.containerId = containerId;\r\n    this.container = document.getElementById(this.containerId);\r\n    this.allElementsList = [];\r\n    this.nMax = nMax;\r\n    this.deep = deep;\r\n\r\n    this.patternDefault = {\r\n      \"-1\": (size, element, stopP) => {\r\n        this.createFrom(size, element.getPos0(), 0, stopP - 1);\r\n        this.createFrom(size, element.getPos1(), 1, stopP - 1);\r\n        this.createFrom(size, element.getPos2(), 2, stopP - 1);\r\n        this.createFrom(size, element.getPos3(), 3, stopP - 1);\r\n        this.createFrom(size, element.getPos4(), 4, stopP - 1);\r\n        this.createFrom(size, element.getPos5(), 5, stopP - 1);\r\n      },\r\n      0: (size, element, stopP) => {\r\n        this.createFrom(size, element.getPos0(), 0, stopP - 1);\r\n      },\r\n      3: (size, element, stopP) => {\r\n        this.createFrom(size, element.getPos3(), 3, stopP - 1);\r\n      },\r\n      4: (size, element, stopP) => {\r\n        this.createFrom(size, element.getPos3(), 3, stopP - 1);\r\n        this.createFrom(size, element.getPos4(), 4, stopP - 1);\r\n        this.createFrom(size, element.getPos5(), 5, stopP - 1);\r\n      },\r\n      2: (size, element, stopP) => {\r\n        this.createFrom(size, element.getPos1(), 1, stopP - 1);\r\n        this.createFrom(size, element.getPos2(), 2, stopP - 1);\r\n        this.createFrom(size, element.getPos3(), 3, stopP - 1);\r\n      },\r\n      5: (size, element, stopP) => {\r\n        this.createFrom(size, element.getPos0(), 0, stopP - 1);\r\n        this.createFrom(size, element.getPos5(), 5, stopP - 1);\r\n      },\r\n      1: (size, element, stopP) => {\r\n        this.createFrom(size, element.getPos0(), 0, stopP - 1);\r\n        this.createFrom(size, element.getPos1(), 1, stopP - 1);\r\n      },\r\n    };\r\n    this.pattern2 = {\r\n      \"-1\": (size, element, stopP) => {\r\n        if (this.getAvailable())\r\n          this.createFrom2(size, element.getPos0(), 0, stopP - 1);\r\n        if (this.getAvailable())\r\n          this.createFrom2(size, element.getPos1(), 1, stopP - 1);\r\n        if (this.getAvailable())\r\n          this.createFrom2(size, element.getPos2(), 2, stopP - 1);\r\n        if (this.getAvailable())\r\n          this.createFrom2(size, element.getPos3(), 3, stopP - 1);\r\n        if (this.getAvailable())\r\n          this.createFrom2(size, element.getPos4(), 4, stopP - 1);\r\n        if (this.getAvailable())\r\n          this.createFrom2(size, element.getPos5(), 5, stopP - 1);\r\n      },\r\n      0: (size, element, stopP) => {\r\n        if (this.getAvailable())\r\n          this.createFrom2(size, element.getPos0(), 0, stopP - 1);\r\n      },\r\n      3: (size, element, stopP) => {\r\n        this.createFrom2(size, element.getPos3(), 3, stopP - 1);\r\n      },\r\n      4: (size, element, stopP) => {\r\n        this.createFrom2(size, element.getPos3(), 3, stopP - 1);\r\n        if (this.getAvailable())\r\n          this.createFrom2(size, element.getPos4(), 4, stopP - 1);\r\n        this.createFrom2(size, element.getPos5(), 5, stopP - 1);\r\n      },\r\n      2: (size, element, stopP) => {\r\n        this.createFrom2(size, element.getPos1(), 1, stopP - 1);\r\n        if (this.getAvailable())\r\n          this.createFrom2(size, element.getPos2(), 2, stopP - 1);\r\n        this.createFrom2(size, element.getPos3(), 3, stopP - 1);\r\n      },\r\n      5: (size, element, stopP) => {\r\n        if (this.getAvailable())\r\n          this.createFrom2(size, element.getPos0(), 0, stopP - 1);\r\n        this.createFrom2(size, element.getPos5(), 5, stopP - 1);\r\n      },\r\n      1: (size, element, stopP) => {\r\n        this.createFrom2(size, element.getPos0(), 0, stopP - 1);\r\n        this.createFrom2(size, element.getPos1(), 1, stopP - 1);\r\n      },\r\n    };\r\n    this.pattern3 = {\r\n      \"-1\": (size, element, stopP) => {\r\n        this.createFrom3(size, element.getPos0(), 0, stopP - 1);\r\n        this.createFrom3(size, element.getPos3(), 3, stopP - 1);\r\n        this.createFrom3(size, element.getPos5(), 5, stopP - 1);\r\n        this.createFrom3(size, element.getPos4(), 4, stopP - 1);\r\n      },\r\n      0: (size, element, stopP) => {\r\n        this.createFrom3(size, element.getPos0(), 0, stopP - 1);\r\n      },\r\n      3: (size, element, stopP) => {\r\n        this.createFrom3(size, element.getPos3(), 3, stopP - 1);\r\n      },\r\n      4: (size, element, stopP) => {\r\n        this.createFrom3(size, element.getPos4(), 4, stopP - 1);\r\n        this.createFrom3(size, element.getPos3(), 3, stopP - 1);\r\n      },\r\n      5: (size, element, stopP) => {\r\n        this.createFrom3(size, element.getPos0(), 0, stopP - 1);\r\n        this.createFrom3(size, element.getPos5(), 5, stopP - 1);\r\n      },\r\n    };\r\n  }\r\n\r\n  /**\r\n   *\r\n   * @param {{ w: number, h: number }} size - Width of the hexagon\r\n   * @param {{ x: number, y: number }} position - Position of the hexagon\r\n   * @param {number} identifier - Identifier of the hexagon\r\n   * @param {number} stopPoint - Stop point of the recursion\r\n   * @returns\r\n   */\r\n  createFrom(\r\n    size = { w: 100, h: 90 },\r\n    position = { x: 250, y: 250 },\r\n    identifier = -1,\r\n    stopPoint = 3\r\n  ) {\r\n    if (stopPoint <= 0) return;\r\n\r\n    let generic = new _HexagonCell_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](size, position);\r\n    this.container.appendChild(generic.getElement());\r\n\r\n    this.patternDefault[identifier](size, generic, stopPoint);\r\n  }\r\n\r\n  /**\r\n   *\r\n   * @param {number} size.w - Width of the hexagon\r\n   * @param {number} size.h - Height of the hexagon\r\n   * @param {number} position.x - Position of the hexagon in the x axis\r\n   * @param {number} position.y - Position of the hexagon in the y axis\r\n   * @param {number} identifier - Identifier of the hexagon\r\n   * @param {number} stopPoint - Stop point of the recursion\r\n   * @returns\r\n   */\r\n  createFrom2(\r\n    size = { w: 100, h: 90 },\r\n    position = { x: 250, y: 250 },\r\n    identifier = -1,\r\n    stopPoint = 4\r\n  ) {\r\n    if (stopPoint <= 0) return;\r\n\r\n    let generic = new _HexagonCell_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](size, position);\r\n    this.container.appendChild(generic.getElement());\r\n\r\n    this.pattern2[identifier](size, generic, stopPoint);\r\n  }\r\n\r\n  /**\r\n   *\r\n   * @param {number} size.w - Width of the hexagon\r\n   * @param {number} size.h - Height of the hexagon\r\n   * @param {number} position.x - Position of the hexagon in the x axis\r\n   * @param {number} position.y - Position of the hexagon in the y axis\r\n   * @param {number} identifier - Identifier of the hexagon\r\n   * @param {number} stopPoint - Stop point of the recursion\r\n   * @returns\r\n   */\r\n  createFrom3(\r\n    size = { w: 80, h: 70 },\r\n    position = {\r\n      x: this.container.getBoundingClientRect().width - size.w,\r\n      y: this.container.getBoundingClientRect().height / 2,\r\n    },\r\n    identifier = -1,\r\n    stopPoint = 10\r\n  ) {\r\n    if (stopPoint <= 0) return;\r\n    if (\r\n      position.y + this.container.getBoundingClientRect().top >=\r\n        this.container.getBoundingClientRect().top - size.h / 2 &&\r\n      position.y + this.container.getBoundingClientRect().top <=\r\n        this.container.getBoundingClientRect().top -\r\n          size.h / 2 +\r\n          this.container.getBoundingClientRect().height &&\r\n      position.x + this.container.getBoundingClientRect().left >=\r\n        this.container.getBoundingClientRect().left &&\r\n      position.x + this.container.getBoundingClientRect().left <=\r\n        this.container.getBoundingClientRect().left -\r\n          size.w / 2 +\r\n          this.container.getBoundingClientRect().width\r\n    ) {\r\n      let generic = new _HexagonCell_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](size, position);\r\n      this.container.appendChild(generic.getElement());\r\n      this.pattern3[identifier](size, generic, stopPoint);\r\n    } else {\r\n      return;\r\n    }\r\n    if (identifier == -2) return;\r\n  }\r\n\r\n  getAvailable() {\r\n    return Math.round(Math.random());\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://HexagonObject/./HexagonField.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./HexagonField.js");
/******/ 	HexagonObject = __webpack_exports__;
/******/ 	
/******/ })()
;
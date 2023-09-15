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

/***/ "./src/dataFetcher.js":
/*!****************************!*\
  !*** ./src/dataFetcher.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchResults: () => (/* binding */ fetchResults)\n/* harmony export */ });\n/* harmony import */ var _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlElements.js */ \"./src/htmlElements.js\");\n/* harmony import */ var _dataParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataParser.js */ \"./src/dataParser.js\");\n/* harmony import */ var _uvCalc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uvCalc.js */ \"./src/uvCalc.js\");\n\r\n\r\n\r\n\r\nconst fetchResults = async (targetLocation) => {\r\n  console.log(targetLocation);\r\n  let url = `http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${targetLocation}`;\r\n  console.log();\r\n  try {\r\n    const res = await fetch(url);\r\n    if (!res.ok) {\r\n      throw new Error(`HTTP error! Status: ${res.status}`);\r\n    }\r\n\r\n    const data = await res.json();\r\n\r\n    console.log(data);\r\n\r\n    const {\r\n      locationData,\r\n      timeData,\r\n      tempData,\r\n      conditionData,\r\n      humidityData,\r\n      windData,\r\n      uvData,\r\n      windDirectionData,\r\n    } = (0,_dataParser_js__WEBPACK_IMPORTED_MODULE_1__.parseWeatherData)(data);\r\n\r\n    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__.temp.textContent = `${tempData}°C `;\r\n    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__.temp.style.color = (0,_dataParser_js__WEBPACK_IMPORTED_MODULE_1__.determineTempColor)(tempData);\r\n    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__.countryName.textContent = locationData;\r\n    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__.dateTime.textContent = timeData;\r\n    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__.condition.textContent = conditionData;\r\n    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__.humidity.textContent = `Humidity: ${humidityData}%`;\r\n    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__.wind.textContent = `Wind Speed: ${windData}km/h`;\r\n    _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__.uv.textContent = `UV Index: ${uvData}`;\r\n\r\n    // Call uvCalc with uvData\r\n    (0,_uvCalc_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(uvData);\r\n  } catch (error) {\r\n    alert(\r\n      `An error occurred: no town/city with name '${targetLocation}' found`\r\n    );\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://weather-app-x2/./src/dataFetcher.js?");

/***/ }),

/***/ "./src/dataParser.js":
/*!***************************!*\
  !*** ./src/dataParser.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   determineTempColor: () => (/* binding */ determineTempColor),\n/* harmony export */   parseWeatherData: () => (/* binding */ parseWeatherData)\n/* harmony export */ });\n//dataParser.js\r\n\r\nconst parseWeatherData = (data) => {\r\n  let locationData = data.location.name;\r\n  let timeData = data.location.localtime;\r\n  let tempData = data.current.temp_c;\r\n  let conditionData = data.current.condition.text;\r\n  let humidityData = data.current.humidity;\r\n  let windData = data.current.wind_kph;\r\n  let uvData = data.current.uv;\r\n  let windDirectionData = data.current.wind_dir;\r\n\r\n  return {\r\n    locationData,\r\n    timeData,\r\n    tempData,\r\n    conditionData,\r\n    humidityData,\r\n    windData,\r\n    uvData,\r\n    windDirectionData,\r\n  };\r\n};\r\n\r\nconst determineTempColor = (temp) => {\r\n  return temp < 10 ? \"wheat\" : \"wheat\";\r\n};\r\n\n\n//# sourceURL=webpack://weather-app-x2/./src/dataParser.js?");

/***/ }),

/***/ "./src/eventHandler.js":
/*!*****************************!*\
  !*** ./src/eventHandler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlElements.js */ \"./src/htmlElements.js\");\n/* harmony import */ var _dataFetcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataFetcher.js */ \"./src/dataFetcher.js\");\n// eventHandler.js\r\n\r\n\r\n\r\n\r\nlet targetLocation = \"\";\r\n\r\n_htmlElements_js__WEBPACK_IMPORTED_MODULE_0__.input.addEventListener(\"keyup\", function (event) {\r\n  if (event.keyCode === 13) {\r\n    targetLocation = _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__.input.value;\r\n    (0,_dataFetcher_js__WEBPACK_IMPORTED_MODULE_1__.fetchResults)(targetLocation);\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://weather-app-x2/./src/eventHandler.js?");

/***/ }),

/***/ "./src/htmlElements.js":
/*!*****************************!*\
  !*** ./src/htmlElements.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   condition: () => (/* binding */ condition),\n/* harmony export */   countryName: () => (/* binding */ countryName),\n/* harmony export */   dateTime: () => (/* binding */ dateTime),\n/* harmony export */   humidity: () => (/* binding */ humidity),\n/* harmony export */   input: () => (/* binding */ input),\n/* harmony export */   modal: () => (/* binding */ modal),\n/* harmony export */   temp: () => (/* binding */ temp),\n/* harmony export */   uv: () => (/* binding */ uv),\n/* harmony export */   wind: () => (/* binding */ wind),\n/* harmony export */   windDirection: () => (/* binding */ windDirection)\n/* harmony export */ });\n// htmlElements.js\r\n\r\nconst temp = document.querySelector(\".temp\");\r\nconst countryName = document.querySelector(\".countryName\");\r\nconst dateTime = document.querySelector(\".date-time\");\r\nconst condition = document.querySelector(\".condition\");\r\nconst humidity = document.querySelector(\".humidity\");\r\nconst input = document.querySelector(\".input\");\r\nconst wind = document.querySelector(\".wind\");\r\nconst uv = document.querySelector(\".uv\");\r\nconst windDirection = document.querySelector(\".windDirection\");\r\nconst modal = document.querySelector(\".modal\");\r\n\n\n//# sourceURL=webpack://weather-app-x2/./src/htmlElements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlElements.js */ \"./src/htmlElements.js\");\n/* harmony import */ var _eventHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventHandler.js */ \"./src/eventHandler.js\");\n//index.js\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app-x2/./src/index.js?");

/***/ }),

/***/ "./src/uvCalc.js":
/*!***********************!*\
  !*** ./src/uvCalc.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ uvCalc)\n/* harmony export */ });\nfunction uvCalc(uvData) {\r\n  const modal = document.getElementById(\"myModal\");\r\n  const uvMessage = document.getElementById(\"uvMessage\");\r\n  const closeBtn = document.getElementsByClassName(\"close\")[0];\r\n\r\n  if (uvData <= 2) {\r\n    uvMessage.textContent = \"UV DATA: You can safely enjoy being outside!\";\r\n  } else if (uvData <= 7) {\r\n    uvMessage.textContent =\r\n      \"UV DATA: Seek shade during midday hours! Slip on a shirt, slop on sunscreen and slap on hat!\";\r\n  } else if (uvData >= 8) {\r\n    uvMessage.textContent =\r\n      \"UV DATA: Avoid being outside during midday hours! Make sure you seek shade! Shirt, sunscreen, and hat are a must!\";\r\n  }\r\n\r\n  // Display the modal\r\n  modal.style.display = \"block\";\r\n\r\n  // Close the modal when the close button is clicked\r\n  closeBtn.onclick = function () {\r\n    modal.style.display = \"none\";\r\n  };\r\n\r\n  // Close the modal when clicking outside the modal content\r\n  window.onclick = function (event) {\r\n    if (event.target == modal) {\r\n      modal.style.display = \"none\";\r\n    }\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://weather-app-x2/./src/uvCalc.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
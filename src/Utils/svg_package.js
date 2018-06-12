(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["svg_package"] = factory();
	else
		root["svg_package"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAB3RJTUUH4QEaBzIA+ze+OAAAAaBJREFUeJztl82RhiAMQHEbgBK+DqAT6ABLsAPsBEqwE+wkJbAHZ5yIQvwWZ9YD78SBn2eABIeUEnsTP/8tkNOFKLoQRRei6EIUXYgkVQGAEIIxRinVsopSyhgTQgCA+opFIQCY51kI8dSXbwgh5nmuaF0LAUBjSOoopUpOF0IA8HhgzgghLp1yoXNsOOfOuRjj1iHG6JzjnLc7XcYpF3LO4THW2svvAABrbbuTc64mlG2W1vqsgml3Om/cQch7v3flnJNXFADa9857j+c8JMZlWfb2NE3k0RZCTNPUKIQXZeyYGPFx3k9xnRhjo5BSCk84JPTXMQwDFr05Ix71N/Bar6tlByEp5d5e1/XO+JvdKuBFc6HP57O387NW4Ga3CnhRxljx2pdSe3bt24tMdu3zxIjzijGmLjSOY6PNOdsRpcMYUyod7TaMLB0b2SnbXjC4uD71TpJS0sU1PVQQSEqlqfhAy+L0LJexqQltPPXuwWyvq6+fsDhU3nutdWPApJRaa+89mUoOtewNvLuWvYEuRNGFKLoQRRei6EIUrxP6BcmQ7xzbjmd9AAAAAElFTkSuQmCC"

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACBklEQVRoQ+1X7TEEQRB9FwEhEAEyIAIyQASIABkQASJABGSACAiBCKhXtaN253pmenau72rp+XVV19Pb773+mhkmfmYTjx8OYNUKugKuQCMDnkKNBDZfdwWaKWx08K8UWAewD+AAwAaA7Uby4uuvAD4APAB4BPCp8a9RgIGfADgFwN/LOAz+CsB1CUgJAAN+MmBbSwJV2cuByAFg8O9LZD0FimpspkCkAFgz/9WlCPOdLPOwplhfTNW1CE1SiRSACwDnWp0r7e66IFNFSvKY/4eR30sAjGtwJACWqcPgj5SAqQ67XjhiKkkA+IEb5UdqzJg2bL+q9tjVHttqP52OAdz2PyoBiJHXBJmzFVOg4DxOZc4H1snvkQC8GLXNnV7BaklhYTOecFjM9JMF8K31XmlXmjkpd3E8Az+S08kDoExblexqzBeRQm9xev/JIrZqo9mVQJBQmkeqNsqLcf/VpIjGhj2cQWjOfdQyxTmyilWCIM4yA40EcpAO+j0A9SpBdujk2aiY6T/s+xxM/WWOq4P07pgr3iBhaZ22SiVNCgWb7ApSGi7WSpSAkPndsQ+a4JwgKKu0p5cCGPt/eC/Mrc+xw5ICfXsCYWGFR/2ihx3ZDo96LpSqrbUGwFg2Te85AFN6Fc5dAQVJpiaugCm9CueugIIkUxNXwJRehXNXQEGSqcnkFfgBKMNcMdUsPWUAAAAASUVORK5CYII="

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAySDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAyMmw0LTRoMTRjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptLTcgOWgtMlY1aDJ2NnptMCA0aC0ydi0yaDJ2MnoiLz4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+"

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMiA2djNsNC00LTQtNHYzYy00LjQyIDAtOCAzLjU4LTggOCAwIDEuNTcuNDYgMy4wMyAxLjI0IDQuMjZMNi43IDE0LjhjLS40NS0uODMtLjctMS43OS0uNy0yLjggMC0zLjMxIDIuNjktNiA2LTZ6bTYuNzYgMS43NEwxNy4zIDkuMmMuNDQuODQuNyAxLjc5LjcgMi44IDAgMy4zMS0yLjY5IDYtNiA2di0zbC00IDQgNCA0di0zYzQuNDIgMCA4LTMuNTggOC04IDAtMS41Ny0uNDYtMy4wMy0xLjI0LTQuMjZ6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg=="

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNyAzSDdjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNSAyMWw3LTMgNyAzVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTVsLTUtMi4xOEw3IDE4VjVoMTB2MTN6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg=="

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgPHBhdGggZD0iTTIyLjcgMTlsLTkuMS05LjFjLjktMi4zLjQtNS0xLjUtNi45LTItMi01LTIuNC03LjQtMS4zTDkgNiA2IDkgMS42IDQuN0MuNCA3LjEuOSAxMC4xIDIuOSAxMi4xYzEuOSAxLjkgNC42IDIuNCA2LjkgMS41bDkuMSA5LjFjLjQuNCAxIC40IDEuNCAwbDIuMy0yLjNjLjUtLjQuNS0xLjEuMS0xLjR6Ii8+Cjwvc3ZnPg=="

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xOSAzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjExIDAgMi0uOSAyLTJWNWMwLTEuMS0uODktMi0yLTJ6bS05IDE0bC01LTUgMS40MS0xLjQxTDEwIDE0LjE3bDcuNTktNy41OUwxOSA4bC05IDl6Ii8+Cjwvc3ZnPg=="

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yeiIvPgogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4="

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg=="

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPgogICAgPHBhdGggZD0iTTkuNCAxNi42TDQuOCAxMmw0LjYtNC42TDggNmwtNiA2IDYgNiAxLjQtMS40em01LjIgMGw0LjYtNC42LTQuNi00LjZMMTYgNmw2IDYtNiA2LTEuNC0xLjR6Ii8+Cjwvc3ZnPg=="

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xNiAxSDRjLTEuMSAwLTIgLjktMiAydjE0aDJWM2gxMlYxem0zIDRIOGMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxMWMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0yem0wIDE2SDhWN2gxMXYxNHoiLz4KPC9zdmc+"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxjaXJjbGUgY3g9IjYiIGN5PSIxOCIgZmlsbD0ibm9uZSIgcj0iMiIvPgogICAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgZmlsbD0ibm9uZSIgcj0iLjUiLz4KICAgIDxjaXJjbGUgY3g9IjYiIGN5PSI2IiBmaWxsPSJub25lIiByPSIyIi8+CiAgICA8cGF0aCBkPSJNOS42NCA3LjY0Yy4yMy0uNS4zNi0xLjA1LjM2LTEuNjQgMC0yLjIxLTEuNzktNC00LTRTMiAzLjc5IDIgNnMxLjc5IDQgNCA0Yy41OSAwIDEuMTQtLjEzIDEuNjQtLjM2TDEwIDEybC0yLjM2IDIuMzZDNy4xNCAxNC4xMyA2LjU5IDE0IDYgMTRjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNGMwLS41OS0uMTMtMS4xNC0uMzYtMS42NEwxMiAxNGw3IDdoM3YtMUw5LjY0IDcuNjR6TTYgOGMtMS4xIDAtMi0uODktMi0ycy45LTIgMi0yIDIgLjg5IDIgMi0uOSAyLTIgMnptMCAxMmMtMS4xIDAtMi0uODktMi0ycy45LTIgMi0yIDIgLjg5IDIgMi0uOSAyLTIgMnptNi03LjVjLS4yOCAwLS41LS4yMi0uNS0uNXMuMjItLjUuNS0uNS41LjIyLjUuNS0uMjIuNS0uNS41ek0xOSAzbC02IDYgMiAyIDctN1YzeiIvPgo8L3N2Zz4="

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xOSAyaC00LjE4QzE0LjQuODQgMTMuMyAwIDEyIDBjLTEuMyAwLTIuNC44NC0yLjgyIDJINWMtMS4xIDAtMiAuOS0yIDJ2MTZjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yem0tNyAwYy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxLTEtLjQ1LTEtMSAuNDUtMSAxLTF6bTcgMThINVY0aDJ2M2gxMFY0aDJ2MTZ6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg=="

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik02IDE5YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMlY3SDZ2MTJ6TTE5IDRoLTMuNWwtMS0xaC01bC0xIDFINXYyaDE0VjR6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg=="

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPgogICAgPHBhdGggZD0iTTYgMTljMCAxLjEuOSAyIDIgMmg4YzEuMSAwIDItLjkgMi0yVjdINnYxMnptMi40Ni03LjEybDEuNDEtMS40MUwxMiAxMi41OWwyLjEyLTIuMTIgMS40MSAxLjQxTDEzLjQxIDE0bDIuMTIgMi4xMi0xLjQxIDEuNDFMMTIgMTUuNDFsLTIuMTIgMi4xMi0xLjQxLTEuNDFMMTAuNTkgMTRsLTIuMTMtMi4xMnpNMTUuNSA0bC0xLTFoLTVsLTEgMUg1djJoMTRWNHoiLz4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik00IDE4bDguNS02TDQgNnYxMnptOS0xMnYxMmw4LjUtNkwxMyA2eiIvPgogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4="

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMSAxOFY2bC04LjUgNiA4LjUgNnptLjUtNmw4LjUgNlY2bC04LjUgNnoiLz4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xOSA5aC00VjNIOXY2SDVsNyA3IDctN3pNNSAxOHYyaDE0di0ySDV6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg=="

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xMSAxOGgydi0yaC0ydjJ6bTEtMTZDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4em0wLTE0Yy0yLjIxIDAtNCAxLjc5LTQgNGgyYzAtMS4xLjktMiAyLTJzMiAuOSAyIDJjMCAyLTMgMS43NS0zIDVoMmMwLTIuMjUgMy0yLjUgMy01IDAtMi4yMS0xLjc5LTQtNC00eiIvPgo8L3N2Zz4="

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xNC41OSA4TDEyIDEwLjU5IDkuNDEgOCA4IDkuNDEgMTAuNTkgMTIgOCAxNC41OSA5LjQxIDE2IDEyIDEzLjQxIDE0LjU5IDE2IDE2IDE0LjU5IDEzLjQxIDEyIDE2IDkuNDEgMTQuNTkgOHpNMTIgMkM2LjQ3IDIgMiA2LjQ3IDIgMTJzNC40NyAxMCAxMCAxMCAxMC00LjQ3IDEwLTEwUzE3LjUzIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6Ii8+Cjwvc3ZnPg=="

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xMyAzYy00Ljk3IDAtOSA0LjAzLTkgOUgxbDMuODkgMy44OS4wNy4xNEw5IDEySDZjMC0zLjg3IDMuMTMtNyA3LTdzNyAzLjEzIDcgNy0zLjEzIDctNyA3Yy0xLjkzIDAtMy42OC0uNzktNC45NC0yLjA2bC0xLjQyIDEuNDJDOC4yNyAxOS45OSAxMC41MSAyMSAxMyAyMWM0Ljk3IDAgOS00LjAzIDktOXMtNC4wMy05LTktOXptLTEgNXY1bDQuMjggMi41NC43Mi0xLjIxLTMuNS0yLjA4VjhIMTJ6Ii8+Cjwvc3ZnPg=="

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik00IDZIMnYxNGMwIDEuMS45IDIgMiAyaDE0di0ySDRWNnptMTYtNEg4Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS0xIDloLTR2NGgtMnYtNEg5VjloNFY1aDJ2NGg0djJ6Ii8+Cjwvc3ZnPg=="

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0zIDE4aDE4di0ySDN2MnptMC01aDE4di0ySDN2MnptMC03djJoMThWNkgzeiIvPgo8L3N2Zz4="

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQyIDAtOC0zLjU4LTgtOCAwLTEuODUuNjMtMy41NSAxLjY5LTQuOUwxNi45IDE4LjMxQzE1LjU1IDE5LjM3IDEzLjg1IDIwIDEyIDIwem02LjMxLTMuMUw3LjEgNS42OUM4LjQ1IDQuNjMgMTAuMTUgNCAxMiA0YzQuNDIgMCA4IDMuNTggOCA4IDAgMS44NS0uNjMgMy41NS0xLjY5IDQuOXoiLz4KPC9zdmc+"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xOSAxOUg1VjVoN1YzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnYtN2gtMnY3ek0xNCAzdjJoMy41OWwtOS44MyA5LjgzIDEuNDEgMS40MUwxOSA2LjQxVjEwaDJWM2gtN3oiLz4KPC9zdmc+"

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xMS41IDlDMTAuMTIgOSA5IDEwLjEyIDkgMTEuNXMxLjEyIDIuNSAyLjUgMi41IDIuNS0xLjEyIDIuNS0yLjVTMTIuODggOSAxMS41IDl6TTIwIDRINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0tMy4yMSAxNC4yMWwtMi45MS0yLjkxYy0uNjkuNDQtMS41MS43LTIuMzkuN0M5LjAxIDE2IDcgMTMuOTkgNyAxMS41UzkuMDEgNyAxMS41IDcgMTYgOS4wMSAxNiAxMS41YzAgLjg4LS4yNiAxLjY5LS43IDIuMzlsMi45MSAyLjktMS40MiAxLjQyeiIvPgo8L3N2Zz4="

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xNCAxMEgydjJoMTJ2LTJ6bTAtNEgydjJoMTJWNnptNCA4di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00ek0yIDE2aDh2LTJIMnYyeiIvPgo8L3N2Zz4="

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMiA3Yy0yLjc2IDAtNSAyLjI0LTUgNXMyLjI0IDUgNSA1IDUtMi4yNCA1LTUtMi4yNC01LTUtNXptMC01QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHoiLz4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+"

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHoiLz4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+"

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xOC40IDEwLjZDMTYuNTUgOC45OSAxNC4xNSA4IDExLjUgOGMtNC42NSAwLTguNTggMy4wMy05Ljk2IDcuMjJMMy45IDE2YzEuMDUtMy4xOSA0LjA1LTUuNSA3LjYtNS41IDEuOTUgMCAzLjczLjcyIDUuMTIgMS44OEwxMyAxNmg5VjdsLTMuNiAzLjZ6Ii8+Cjwvc3ZnPg=="

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNCAySDZjLTEuMSAwLTEuOTkuOS0xLjk5IDJMNCAyMGMwIDEuMS44OSAyIDEuOTkgMkgxOGMxLjEgMCAyLS45IDItMlY4bC02LTZ6bS0yIDE2Yy0yLjA1IDAtMy44MS0xLjI0LTQuNTgtM2gxLjcxYy42My45IDEuNjggMS41IDIuODcgMS41IDEuOTMgMCAzLjUtMS41NyAzLjUtMy41UzEzLjkzIDkuNSAxMiA5LjVjLTEuMzUgMC0yLjUyLjc4LTMuMSAxLjlsMS42IDEuNmgtNFY5bDEuMyAxLjNDOC42OSA4LjkyIDEwLjIzIDggMTIgOGMyLjc2IDAgNSAyLjI0IDUgNXMtMi4yNCA1LTUgNXoiLz4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+"

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xOS40MyAxMi45OGMuMDQtLjMyLjA3LS42NC4wNy0uOThzLS4wMy0uNjYtLjA3LS45OGwyLjExLTEuNjVjLjE5LS4xNS4yNC0uNDIuMTItLjY0bC0yLTMuNDZjLS4xMi0uMjItLjM5LS4zLS42MS0uMjJsLTIuNDkgMWMtLjUyLS40LTEuMDgtLjczLTEuNjktLjk4bC0uMzgtMi42NUMxNC40NiAyLjE4IDE0LjI1IDIgMTQgMmgtNGMtLjI1IDAtLjQ2LjE4LS40OS40MmwtLjM4IDIuNjVjLS42MS4yNS0xLjE3LjU5LTEuNjkuOThsLTIuNDktMWMtLjIzLS4wOS0uNDkgMC0uNjEuMjJsLTIgMy40NmMtLjEzLjIyLS4wNy40OS4xMi42NGwyLjExIDEuNjVjLS4wNC4zMi0uMDcuNjUtLjA3Ljk4cy4wMy42Ni4wNy45OGwtMi4xMSAxLjY1Yy0uMTkuMTUtLjI0LjQyLS4xMi42NGwyIDMuNDZjLjEyLjIyLjM5LjMuNjEuMjJsMi40OS0xYy41Mi40IDEuMDguNzMgMS42OS45OGwuMzggMi42NWMuMDMuMjQuMjQuNDIuNDkuNDJoNGMuMjUgMCAuNDYtLjE4LjQ5LS40MmwuMzgtMi42NWMuNjEtLjI1IDEuMTctLjU5IDEuNjktLjk4bDIuNDkgMWMuMjMuMDkuNDkgMCAuNjEtLjIybDItMy40NmMuMTItLjIyLjA3LS40OS0uMTItLjY0bC0yLjExLTEuNjV6TTEyIDE1LjVjLTEuOTMgMC0zLjUtMS41Ny0zLjUtMy41czEuNTctMy41IDMuNS0zLjUgMy41IDEuNTcgMy41IDMuNS0xLjU3IDMuNS0zLjUgMy41eiIvPgo8L3N2Zz4="

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik02IDE4bDguNS02TDYgNnYxMnpNMTYgNnYxMmgyVjZoLTJ6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg=="

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik02IDZoMnYxMkg2em0zLjUgNmw4LjUgNlY2eiIvPgogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4="

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xMi41IDhjLTIuNjUgMC01LjA1Ljk5LTYuOSAyLjZMMiA3djloOWwtMy42Mi0zLjYyYzEuMzktMS4xNiAzLjE2LTEuODggNS4xMi0xLjg4IDMuNTQgMCA2LjU1IDIuMzEgNy42IDUuNWwyLjM3LS43OEMyMS4wOCAxMS4wMyAxNy4xNSA4IDEyLjUgOHoiLz4KPC9zdmc+"

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.credits = undefined;
exports.checkBox = checkBox;
exports.toggle = toggle;

var _toggle_on = __webpack_require__(1);

var _toggle_on2 = _interopRequireDefault(_toggle_on);

var _toggle_off = __webpack_require__(0);

var _toggle_off2 = _interopRequireDefault(_toggle_off);

var _ic_announcement_black_18px = __webpack_require__(2);

var _ic_announcement_black_18px2 = _interopRequireDefault(_ic_announcement_black_18px);

var _ic_autorenew_black_18px = __webpack_require__(3);

var _ic_autorenew_black_18px2 = _interopRequireDefault(_ic_autorenew_black_18px);

var _ic_bookmark_border_black_18px = __webpack_require__(4);

var _ic_bookmark_border_black_18px2 = _interopRequireDefault(_ic_bookmark_border_black_18px);

var _ic_build_black_18px = __webpack_require__(5);

var _ic_build_black_18px2 = _interopRequireDefault(_ic_build_black_18px);

var _ic_check_box_black_24px = __webpack_require__(6);

var _ic_check_box_black_24px2 = _interopRequireDefault(_ic_check_box_black_24px);

var _ic_check_box_outline_blank_black_24px = __webpack_require__(7);

var _ic_check_box_outline_blank_black_24px2 = _interopRequireDefault(_ic_check_box_outline_blank_black_24px);

var _ic_clear_black_18px = __webpack_require__(8);

var _ic_clear_black_18px2 = _interopRequireDefault(_ic_clear_black_18px);

var _ic_code_black_18px = __webpack_require__(9);

var _ic_code_black_18px2 = _interopRequireDefault(_ic_code_black_18px);

var _ic_content_copy_black_18px = __webpack_require__(10);

var _ic_content_copy_black_18px2 = _interopRequireDefault(_ic_content_copy_black_18px);

var _ic_content_cut_black_18px = __webpack_require__(11);

var _ic_content_cut_black_18px2 = _interopRequireDefault(_ic_content_cut_black_18px);

var _ic_content_paste_black_18px = __webpack_require__(12);

var _ic_content_paste_black_18px2 = _interopRequireDefault(_ic_content_paste_black_18px);

var _ic_delete_black_18px = __webpack_require__(13);

var _ic_delete_black_18px2 = _interopRequireDefault(_ic_delete_black_18px);

var _ic_delete_forever_black_18px = __webpack_require__(14);

var _ic_delete_forever_black_18px2 = _interopRequireDefault(_ic_delete_forever_black_18px);

var _ic_fast_forward_black_18px = __webpack_require__(15);

var _ic_fast_forward_black_18px2 = _interopRequireDefault(_ic_fast_forward_black_18px);

var _ic_fast_rewind_black_18px = __webpack_require__(16);

var _ic_fast_rewind_black_18px2 = _interopRequireDefault(_ic_fast_rewind_black_18px);

var _ic_get_app_black_18px = __webpack_require__(17);

var _ic_get_app_black_18px2 = _interopRequireDefault(_ic_get_app_black_18px);

var _ic_help_outline_black_18px = __webpack_require__(18);

var _ic_help_outline_black_18px2 = _interopRequireDefault(_ic_help_outline_black_18px);

var _ic_highlight_off_black_18px = __webpack_require__(19);

var _ic_highlight_off_black_18px2 = _interopRequireDefault(_ic_highlight_off_black_18px);

var _ic_history_black_18px = __webpack_require__(20);

var _ic_history_black_18px2 = _interopRequireDefault(_ic_history_black_18px);

var _ic_library_add_black_18px = __webpack_require__(21);

var _ic_library_add_black_18px2 = _interopRequireDefault(_ic_library_add_black_18px);

var _ic_menu_black_18px = __webpack_require__(22);

var _ic_menu_black_18px2 = _interopRequireDefault(_ic_menu_black_18px);

var _ic_not_interested_black_18px = __webpack_require__(23);

var _ic_not_interested_black_18px2 = _interopRequireDefault(_ic_not_interested_black_18px);

var _ic_open_in_new_black_18px = __webpack_require__(24);

var _ic_open_in_new_black_18px2 = _interopRequireDefault(_ic_open_in_new_black_18px);

var _ic_playlist_add_black_18px = __webpack_require__(26);

var _ic_playlist_add_black_18px2 = _interopRequireDefault(_ic_playlist_add_black_18px);

var _ic_radio_button_checked_black_24px = __webpack_require__(27);

var _ic_radio_button_checked_black_24px2 = _interopRequireDefault(_ic_radio_button_checked_black_24px);

var _ic_radio_button_unchecked_black_24px = __webpack_require__(28);

var _ic_radio_button_unchecked_black_24px2 = _interopRequireDefault(_ic_radio_button_unchecked_black_24px);

var _ic_redo_black_18px = __webpack_require__(29);

var _ic_redo_black_18px2 = _interopRequireDefault(_ic_redo_black_18px);

var _ic_restore_page_black_18px = __webpack_require__(30);

var _ic_restore_page_black_18px2 = _interopRequireDefault(_ic_restore_page_black_18px);

var _ic_settings_black_18px = __webpack_require__(31);

var _ic_settings_black_18px2 = _interopRequireDefault(_ic_settings_black_18px);

var _ic_skip_next_black_18px = __webpack_require__(32);

var _ic_skip_next_black_18px2 = _interopRequireDefault(_ic_skip_next_black_18px);

var _ic_skip_previous_black_18px = __webpack_require__(33);

var _ic_skip_previous_black_18px2 = _interopRequireDefault(_ic_skip_previous_black_18px);

var _ic_undo_black_18px = __webpack_require__(34);

var _ic_undo_black_18px2 = _interopRequireDefault(_ic_undo_black_18px);

var _ic_pageview_black_24px = __webpack_require__(25);

var _ic_pageview_black_24px2 = _interopRequireDefault(_ic_pageview_black_24px);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var images = {
  announcement: _ic_announcement_black_18px2.default,
  autorenew: _ic_autorenew_black_18px2.default,
  bookmark_border: _ic_bookmark_border_black_18px2.default,
  build: _ic_build_black_18px2.default,
  check_box: _ic_check_box_black_24px2.default,
  check_box_outline_blank: _ic_check_box_outline_blank_black_24px2.default,
  clear: _ic_clear_black_18px2.default,
  code: _ic_code_black_18px2.default,
  content_copy: _ic_content_copy_black_18px2.default,
  content_cut: _ic_content_cut_black_18px2.default,
  content_paste: _ic_content_paste_black_18px2.default,
  delete_: _ic_delete_black_18px2.default,
  delete_forever: _ic_delete_forever_black_18px2.default,
  fast_forward: _ic_fast_forward_black_18px2.default,
  fast_rewind: _ic_fast_rewind_black_18px2.default,
  get_app: _ic_get_app_black_18px2.default,
  help_outline: _ic_help_outline_black_18px2.default,
  highlight_off: _ic_highlight_off_black_18px2.default,
  history: _ic_history_black_18px2.default,
  library_add: _ic_library_add_black_18px2.default,
  menu: _ic_menu_black_18px2.default,
  not_interested: _ic_not_interested_black_18px2.default,
  open_in_new: _ic_open_in_new_black_18px2.default,
  playlist_add: _ic_playlist_add_black_18px2.default,
  radio_button_checked: _ic_radio_button_checked_black_24px2.default,
  radio_button_unchecked: _ic_radio_button_unchecked_black_24px2.default,
  redo: _ic_redo_black_18px2.default,
  restore_page: _ic_restore_page_black_18px2.default,
  settings: _ic_settings_black_18px2.default,
  skip_next: _ic_skip_next_black_18px2.default,
  skip_previous: _ic_skip_previous_black_18px2.default,
  undo: _ic_undo_black_18px2.default,
  toggle_on: _toggle_on2.default,
  toggle_off: _toggle_off2.default,
  pageview: _ic_pageview_black_24px2.default
};

exports.default = images;
function checkBox(isOn) {
  if (isOn) return checked_box;
  return unchecked_box;
}

function toggle(isOn) {
  if (isOn) return _toggle_on2.default;
  return _toggle_off2.default;
}

var credits = exports.credits = '\nthis package uses:\n- Google Material Design svg icons (https://material.io/icons/)\n- Icons8 free png icon (https://icons8.com/)\n';

/***/ })
/******/ ]);
});

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals.js */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_scrollPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrollPage.js */ "./src/js/modules/scrollPage.js");


window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  Object(_modules_modals_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_scrollPage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  console.log("hello");
});

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modals = () => {
  let timeOut;

  function bindModal(triggerSelector, popupSelector, closeSelector, closeClickOverlay = true, deleteElement = false) {
    const trigger = document.querySelectorAll(triggerSelector),
          popup = document.querySelector(popupSelector),
          close = document.querySelectorAll(closeSelector),
          windows = document.querySelectorAll("[data-]"),
          fixedGift = document.querySelector(".fixed-gift"),
          scroll = calcScroll();
    console.log(fixedGift);

    function handleGiftMargin(opened) {
      if (opened) {
        fixedGift.style.right = `calc(2rem + ${scroll}px)`;
      } else {
        fixedGift.style.right = `2rem`;
      }
    }

    function deleteElementByClickPopup() {
      if (deleteElement) {
        fixedGift.classList.add("fixed-gift_hidden");
        console.log(trigger[0]);
      }
    }

    if (trigger.length > 1) {
      trigger.forEach(item => {
        item.addEventListener("click", e => {
          if (e.target) {
            e.preventDefault();
          }

          windows.forEach(el => {
            el.classList.remove("popup_opened");
          });
          deleteElementByClickPopup();
          popup.classList.add("popup_opened");
          document.body.classList.add("modal_open");
          document.body.style.marginRight = `${scroll}px`;
          handleGiftMargin(true);
        });
      });
    } else {
      trigger[0].addEventListener("click", e => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach(el => {
          el.classList.remove("popup_opened");
        });
        deleteElementByClickPopup();
        popup.classList.add("popup_opened");
        document.body.classList.add("modal_open");
        document.body.style.marginRight = `${scroll}px`;
        handleGiftMargin(true);
      });
    }

    popup.addEventListener("click", e => {
      if (e.target == e.currentTarget && closeClickOverlay) {
        windows.forEach(el => {
          el.classList.remove("popup_opened");
        });
        popup.classList.remove("popup_opened");
        document.body.classList.remove("modal_open");
        document.body.style.marginRight = `0px`;
        handleGiftMargin(false);
      }
    });
    close.forEach(el => {
      el.addEventListener("click", e => {
        windows.forEach(el => {
          el.classList.remove("popup_opened");
        });
        popup.classList.remove("popup_opened");
        document.body.classList.remove("modal-open");
        document.body.style.marginRight = `0px`;
        handleGiftMargin(false);
      });
    });
  }

  console.log(!document.body.classList.contains("modal-open"));

  function showModalByTime(selector, time) {
    timeOut = setTimeout(() => {
      let display;
      document.querySelectorAll("[data-modal]").forEach(el => {
        if (el.classList.contains("popup_opened")) {
          display = "block";
        }
      });

      if (!display) {
        document.body.classList.add("modal-open");
        let scroll = calcScroll();
        let fixedGift = document.querySelector(".fixed-gift");
        fixedGift.style.right = `calc(2rem + ${scroll}px)`;
        document.body.style.marginRight = `${scroll}px`;
        document.querySelector(`${selector}[data-modal]`).classList.add("popup_opened");
      }
    }, time);
  }

  function calcScroll() {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  showModalByTime(".popup-consultation", 6000);
  bindModal(".button-design", ".popup-design", ".popup-design", ".popup-close");
  bindModal(".button-consultation", ".popup-consultation", ".popup-consultation", ".popup-close");
  bindModal(".fixed-gift", ".popup-gift", ".popup-gift", ".popup-close", true);
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/scrollPage.js":
/*!**************************************!*\
  !*** ./src/js/modules/scrollPage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrollPage = () => {
  const scrollHeight = document.documentElement.scrollHeight,
        clientHeight = document.documentElement.clientHeight,
        height = scrollHeight + clientHeight,
        page = document.documentElement;

  function consoleData() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollHeight, clientHeight, scrollTop);
  }

  document.addEventListener("scroll", () => {
    consoleData();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (scrollPage);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map
/*
norma v0.0.5 | MIT License
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
	module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
	define(["jquery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jquery")) : factory(root["jQuery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_jquery__) {
	return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../tmp/tmp.0.0.5.6e2170881f6d05c7780db8da40999849/js/vendor/norma.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../tmp/tmp.0.0.5.6e2170881f6d05c7780db8da40999849/js/vendor/norma.js":
/*!*******************************************************************************!*\
!*** /tmp/tmp.0.0.5.6e2170881f6d05c7780db8da40999849/js/vendor/norma.js ***!
\*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_deployer_sites_node_norma_customizer_node_norma_customizer_norma_sites_js_norma_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/norma.core */ \"./js/norma.core.js\");\n/* harmony import */ var _home_deployer_sites_node_norma_customizer_node_norma_customizer_norma_sites_js_norma_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/norma.util.mediaQuery */ \"./js/norma.util.mediaQuery.js\");\n/* harmony import */ var _home_deployer_sites_node_norma_customizer_node_norma_customizer_norma_sites_js_norma_util_triggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/norma.util.triggers */ \"./js/norma.util.triggers.js\");\n/* harmony import */ var _home_deployer_sites_node_norma_customizer_node_norma_customizer_norma_sites_js_norma_abide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/norma.abide */ \"./js/norma.abide.js\");\n\n\n_home_deployer_sites_node_norma_customizer_node_norma_customizer_norma_sites_js_norma_core__WEBPACK_IMPORTED_MODULE_1__[\"Norma\"].addToJquery(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n_home_deployer_sites_node_norma_customizer_node_norma_customizer_norma_sites_js_norma_core__WEBPACK_IMPORTED_MODULE_1__[\"Norma\"].MediaQuery = _home_deployer_sites_node_norma_customizer_node_norma_customizer_norma_sites_js_norma_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"MediaQuery\"];\n\n_home_deployer_sites_node_norma_customizer_node_norma_customizer_norma_sites_js_norma_util_triggers__WEBPACK_IMPORTED_MODULE_3__[\"Triggers\"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a, _home_deployer_sites_node_norma_customizer_node_norma_customizer_norma_sites_js_norma_core__WEBPACK_IMPORTED_MODULE_1__[\"Norma\"]);\n\n_home_deployer_sites_node_norma_customizer_node_norma_customizer_norma_sites_js_norma_core__WEBPACK_IMPORTED_MODULE_1__[\"Norma\"].plugin(_home_deployer_sites_node_norma_customizer_node_norma_customizer_norma_sites_js_norma_abide__WEBPACK_IMPORTED_MODULE_4__[\"Abide\"], 'Abide');\n\n//# sourceURL=webpack:////tmp/tmp.0.0.5.6e2170881f6d05c7780db8da40999849/js/vendor/norma.js?");

/***/ }),

/***/ "./js/norma.abide.js":
/*!********************************!*\
!*** ./js/norma.abide.js ***!
\********************************/
/*! exports provided: Abide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Abide", function() { return Abide; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _norma_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./norma.core.plugin */ "./js/norma.core.plugin.js");
/* harmony import */ var _norma_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./norma.core.utils */ "./js/norma.core.utils.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
* Abide module.
* @module norma.abide
*/

var Abide =
/*#__PURE__*/
function (_Plugin) {
	_inherits(Abide, _Plugin);

	function Abide() {
		_classCallCheck(this, Abide);

		return _possibleConstructorReturn(this, _getPrototypeOf(Abide).apply(this, arguments));
	}

	_createClass(Abide, [{
		key: "_setup",

		/**
		* Creates a new instance of Abide.
		* @class
		* @name Abide
		* @fires Abide#init
		* @param {Object} element - jQuery object to add the trigger to.
		* @param {Object} options - Overrides to the default plugin settings.
		*/
		value: function _setup(element) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			this.$element = element;
			this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(true, {}, Abide.defaults, this.$element.data(), options);
			this.className = 'Abide'; // ie9 back compat

			this._init();
		}
		/**
		* Initializes the Abide plugin and calls functions to get Abide functioning on load.
		* @private
		*/

	}, {
		key: "_init",
		value: function _init() {
			var _this2 = this;

			this.$inputs = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.merge( // Consider as input to validate:
				this.$element.find('input').not('[type=submit]'), // * all input fields expect submit
				this.$element.find('textarea, select') // * all textareas and select fields
			);
			var $globalErrors = this.$element.find('[data-abide-error]'); // Add a11y attributes to all fields

			if (this.options.a11yAttributes) {
				this.$inputs.each(function (i, input) {
					return _this2.addA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(input));
				});
				$globalErrors.each(function (i, error) {
					return _this2.addGlobalErrorA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(error));
				});
			}

			this._events();
		}
		/**
		* Initializes events for Abide.
		* @private
		*/

	}, {
		key: "_events",
		value: function _events() {
			var _this3 = this;

			this.$element.off('.abide').on('reset.zf.abide', function () {
				_this3.resetForm();
			}).on('submit.zf.abide', function () {
				return _this3.validateForm();
			});

			if (this.options.validateOn === 'fieldChange') {
				this.$inputs.off('change.zf.abide').on('change.zf.abide', function (e) {
					_this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
				});
			}

			if (this.options.liveValidate) {
				this.$inputs.off('input.zf.abide').on('input.zf.abide', function (e) {
					_this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
				});
			}

			if (this.options.validateOnBlur) {
				this.$inputs.off('blur.zf.abide').on('blur.zf.abide', function (e) {
					_this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
				});
			}
		}
		/**
		* Calls necessary functions to update Abide upon DOM change
		* @private
		*/

	}, {
		key: "_reflow",
		value: function _reflow() {
			this._init();
		}
		/**
		* Checks whether or not a form element has the required attribute and if it's checked or not
		* @param {Object} element - jQuery object to check for required attribute
		* @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
		*/

	}, {
		key: "requiredCheck",
		value: function requiredCheck($el) {
			if (!$el.attr('required')) return true;
			var isGood = true;

			switch ($el[0].type) {
				case 'checkbox':
				isGood = $el[0].checked;
				break;

				case 'select':
				case 'select-one':
				case 'select-multiple':
				var opt = $el.find('option:selected');
				if (!opt.length || !opt.val()) isGood = false;
				break;

				default:
				if (!$el.val() || !$el.val().length) isGood = false;
			}

			return isGood;
		}
		/**
		* Get:
		* - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:
		*   1. The element's direct sibling('s).
		*   2. The element's parent's children.
		* - Element(s) with the attribute `[data-is-error-for]` set with the element's id.
		*
		* This allows for multiple form errors per input, though if none are found, no form errors will be shown.
		*
		* @param {Object} $el - jQuery object to use as reference to find the form error selector.
		* @returns {Object} jQuery object with the selector.
		*/

	}, {
		key: "findFormError",
		value: function findFormError($el) {
			var id = $el[0].id;
			var $error = $el.siblings(this.options.formErrorSelector);

			if (!$error.length) {
				$error = $el.parent().find(this.options.formErrorSelector);
			}

			if (id) {
				$error = $error.add(this.$element.find("[data-is-error-for=\"".concat(id, "\"]")));
			}

			return $error;
		}
		/**
		* Get the first element in this order:
		* 2. The <label> with the attribute `[for="someInputId"]`
		* 3. The `.closest()` <label>
		*
		* @param {Object} $el - jQuery object to check for required attribute
		* @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
		*/

	}, {
		key: "findLabel",
		value: function findLabel($el) {
			var id = $el[0].id;
			var $label = this.$element.find("label[for=\"".concat(id, "\"]"));

			if (!$label.length) {
				return $el.closest('label');
			}

			return $label;
		}
		/**
		* Get the set of labels associated with a set of radio els in this order
		* 2. The <label> with the attribute `[for="someInputId"]`
		* 3. The `.closest()` <label>
		*
		* @param {Object} $el - jQuery object to check for required attribute
		* @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
		*/

	}, {
		key: "findRadioLabels",
		value: function findRadioLabels($els) {
			var _this4 = this;

			var labels = $els.map(function (i, el) {
				var id = el.id;

				var $label = _this4.$element.find("label[for=\"".concat(id, "\"]"));

				if (!$label.length) {
					$label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).closest('label');
				}

				return $label[0];
			});
			return jquery__WEBPACK_IMPORTED_MODULE_0___default()(labels);
		}
		/**
		* Adds the CSS error class as specified by the Abide settings to the label, input, and the form
		* @param {Object} $el - jQuery object to add the class to
		*/

	}, {
		key: "addErrorClasses",
		value: function addErrorClasses($el) {
			var $label = this.findLabel($el);
			var $formError = this.findFormError($el);

			if ($label.length) {
				$label.addClass(this.options.labelErrorClass);
			}

			if ($formError.length) {
				$formError.addClass(this.options.formErrorClass);
			}

			$el.addClass(this.options.inputErrorClass).attr({
				'data-invalid': '',
				'aria-invalid': true
			});
		}
		/**
		* Adds [for] and [role=alert] attributes to all form error targetting $el,
		* and [aria-describedby] attribute to $el toward the first form error.
		* @param {Object} $el - jQuery object
		*/

	}, {
		key: "addA11yAttributes",
		value: function addA11yAttributes($el) {
			var $errors = this.findFormError($el);
			var $labels = $errors.filter('label');
			var $error = $errors.first();
			if (!$errors.length) return; // Set [aria-describedby] on the input toward the first form error if it is not set

			if (typeof $el.attr('aria-describedby') === 'undefined') {
				// Get the first error ID or create one
				var errorId = $error.attr('id');

				if (typeof errorId === 'undefined') {
					errorId = Object(_norma_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'abide-error');
					$error.attr('id', errorId);
				}

				;
				$el.attr('aria-describedby', errorId);
			}

			if ($labels.filter('[for]').length < $labels.length) {
				// Get the input ID or create one
				var elemId = $el.attr('id');

				if (typeof elemId === 'undefined') {
					elemId = Object(_norma_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'abide-input');
					$el.attr('id', elemId);
				}

				; // For each label targeting $el, set [for] if it is not set.

				$labels.each(function (i, label) {
					var $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);
					if (typeof $label.attr('for') === 'undefined') $label.attr('for', elemId);
				});
			} // For each error targeting $el, set [role=alert] if it is not set.


			$errors.each(function (i, label) {
				var $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);
				if (typeof $label.attr('role') === 'undefined') $label.attr('role', 'alert');
			}).end();
		}
		/**
		* Adds [aria-live] attribute to the given global form error $el.
		* @param {Object} $el - jQuery object to add the attribute to
		*/

	}, {
		key: "addGlobalErrorA11yAttributes",
		value: function addGlobalErrorA11yAttributes($el) {
			if (typeof $el.attr('aria-live') === 'undefined') $el.attr('aria-live', this.options.a11yErrorLevel);
		}
		/**
		* Remove CSS error classes etc from an entire radio button group
		* @param {String} groupName - A string that specifies the name of a radio button group
		*
		*/

	}, {
		key: "removeRadioErrorClasses",
		value: function removeRadioErrorClasses(groupName) {
			var $els = this.$element.find(":radio[name=\"".concat(groupName, "\"]"));
			var $labels = this.findRadioLabels($els);
			var $formErrors = this.findFormError($els);

			if ($labels.length) {
				$labels.removeClass(this.options.labelErrorClass);
			}

			if ($formErrors.length) {
				$formErrors.removeClass(this.options.formErrorClass);
			}

			$els.removeClass(this.options.inputErrorClass).attr({
				'data-invalid': null,
				'aria-invalid': null
			});
		}
		/**
		* Removes CSS error class as specified by the Abide settings from the label, input, and the form
		* @param {Object} $el - jQuery object to remove the class from
		*/

	}, {
		key: "removeErrorClasses",
		value: function removeErrorClasses($el) {
			// radios need to clear all of the els
			if ($el[0].type == 'radio') {
				return this.removeRadioErrorClasses($el.attr('name'));
			}

			var $label = this.findLabel($el);
			var $formError = this.findFormError($el);

			if ($label.length) {
				$label.removeClass(this.options.labelErrorClass);
			}

			if ($formError.length) {
				$formError.removeClass(this.options.formErrorClass);
			}

			$el.removeClass(this.options.inputErrorClass).attr({
				'data-invalid': null,
				'aria-invalid': null
			});
		}
		/**
		* Goes through a form to find inputs and proceeds to validate them in ways specific to their type.
		* Ignores inputs with data-abide-ignore, type="hidden" or disabled attributes set
		* @fires Abide#invalid
		* @fires Abide#valid
		* @param {Object} element - jQuery object to validate, should be an HTML input
		* @returns {Boolean} goodToGo - If the input is valid or not.
		*/

	}, {
		key: "validateInput",
		value: function validateInput($el) {
			var clearRequire = this.requiredCheck($el),
			validated = false,
			customValidator = true,
			validator = $el.attr('data-validator'),
			equalTo = true; // don't validate ignored inputs or hidden inputs or disabled inputs

			if ($el.is('[data-abide-ignore]') || $el.is('[type="hidden"]') || $el.is('[disabled]')) {
				return true;
			}

			// edited by Kazuya Marino
			switch ($el[0].type) {
				case 'radio':
				validated = this.validateRadio($el.attr('name'));
				break;

				case 'checkbox':
				var group = $el.parent().closest('.'+$el[0].type+'-group');
				var min = group.attr('data-validator-min');
				var checked = group.length;
				if (checked) {
					validated = group.attr('required') ? group.find(':checked').length >= min : true;
					if (validated == true) {
						group.find('label').each(function() {
							$(this).removeClass('has-text-danger');
						});
					} else {
						group.find('label').each(function() {
							$(this).addClass('has-text-danger');
						});
					}
				} else {
					validated = clearRequire;
				}
				break;

				case 'select':
				case 'select-one':
				case 'select-multiple':
				validated = clearRequire;
				break;

				default:
				validated = this.validateText($el);
			}

			if (validator) {
				customValidator = this.matchValidation($el, validator, $el.attr('required'));
			}

			if ($el.attr('data-equalto')) {
				equalTo = this.options.validators.equalTo($el);
			}

			var goodToGo = [clearRequire, validated, customValidator, equalTo].indexOf(false) === -1;
			var message = (goodToGo ? 'valid' : 'invalid') + '.zf.abide';

			if (goodToGo) {
				// Re-validate inputs that depend on this one with equalto
				var dependentElements = this.$element.find("[data-equalto=\"".concat($el.attr('id'), "\"]"));

				if (dependentElements.length) {
					var _this = this;

					dependentElements.each(function () {
						if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()) {
							_this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
						}
					});
				}
			}

			this[goodToGo ? 'removeErrorClasses' : 'addErrorClasses']($el);
			/**
			* Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.abide`
			* Trigger includes the DOM element of the input.
			* @event Abide#valid
			* @event Abide#invalid
			*/

			$el.trigger(message, [$el]);
			return goodToGo;
		}
		/**
		* Goes through a form and if there are any invalid inputs, it will display the form error element
		* @returns {Boolean} noError - true if no errors were detected...
		* @fires Abide#formvalid
		* @fires Abide#forminvalid
		*/

	}, {
		key: "validateForm",
		value: function validateForm() {
			var _this5 = this;

			var acc = [];

			var _this = this;

			this.$inputs.each(function () {
				acc.push(_this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)));
			});
			var noError = acc.indexOf(false) === -1;
			this.$element.find('[data-abide-error]').each(function (i, elem) {
				var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem); // Ensure a11y attributes are set

				if (_this5.options.a11yAttributes) _this5.addGlobalErrorA11yAttributes($elem); // Show or hide the error

				$elem.css('display', noError ? 'none' : 'block');
			});
			/**
			* Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.abide`.
			* Trigger includes the element of the form.
			* @event Abide#formvalid
			* @event Abide#forminvalid
			*/

			this.$element.trigger((noError ? 'formvalid' : 'forminvalid') + '.zf.abide', [this.$element]);
			return noError;
		}
		/**
		* Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
		* @param {Object} $el - jQuery object to validate, should be a text input HTML element
		* @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
		* @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
		*/

	}, {
		key: "validateText",
		value: function validateText($el, pattern) {
			// A pattern can be passed to this function, or it will be infered from the input's "pattern" attribute, or it's "type" attribute
			pattern = pattern || $el.attr('pattern') || $el.attr('type');
			var inputText = $el.val();
			var valid = false;

			if (inputText.length) {
				// If the pattern attribute on the element is in Abide's list of patterns, then test that regexp
				if (this.options.patterns.hasOwnProperty(pattern)) {
					valid = this.options.patterns[pattern].test(inputText);
				} // If the pattern name isn't also the type attribute of the field, then test it as a regexp
				else if (pattern !== $el.attr('type')) {
					valid = new RegExp(pattern).test(inputText);
				} else {
					valid = true;
				}
			} // An empty field is valid if it's not required
			else if (!$el.prop('required')) {
				valid = true;
			}

			return valid;
		}
		/**
		* Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.
		* @param {String} groupName - A string that specifies the name of a radio button group
		* @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
		*/

	}, {
		key: "validateRadio",
		value: function validateRadio(groupName) {
			// If at least one radio in the group has the `required` attribute, the group is considered required
			// Per W3C spec, all radio buttons in a group should have `required`, but we're being nice
			var $group = this.$element.find(":radio[name=\"".concat(groupName, "\"]"));
			var valid = false,
			required = false; // For the group to be required, at least one radio needs to be required

			$group.each(function (i, e) {
				if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('required')) {
					required = true;
				}
			});
			if (!required) valid = true;

			if (!valid) {
				// For the group to be valid, at least one radio needs to be checked
				$group.each(function (i, e) {
					if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).prop('checked')) {
						valid = true;
					}
				});
			}

			;
			return valid;
		}
		/**
		* Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
		* @param {Object} $el - jQuery input element.
		* @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
		* @param {Boolean} required - self explanatory?
		* @returns {Boolean} - true if validations passed.
		*/

	}, {
		key: "matchValidation",
		value: function matchValidation($el, validators, required) {
			var _this6 = this;

			required = required ? true : false;
			var clear = validators.split(' ').map(function (v) {
				return _this6.options.validators[v]($el, required, $el.parent());
			});
			return clear.indexOf(false) === -1;
		}
		/**
		* Resets form inputs and styles
		* @fires Abide#formreset
		*/

	}, {
		key: "resetForm",
		value: function resetForm() {
			var $form = this.$element,
			opts = this.options;
			jquery__WEBPACK_IMPORTED_MODULE_0___default()(".".concat(opts.labelErrorClass), $form).not('small').removeClass(opts.labelErrorClass);
			jquery__WEBPACK_IMPORTED_MODULE_0___default()(".".concat(opts.inputErrorClass), $form).not('small').removeClass(opts.inputErrorClass);
			jquery__WEBPACK_IMPORTED_MODULE_0___default()("".concat(opts.formErrorSelector, ".").concat(opts.formErrorClass)).removeClass(opts.formErrorClass);
			$form.find('[data-abide-error]').css('display', 'none');
			jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input', $form).not(':button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]').val('').attr({
				'data-invalid': null,
				'aria-invalid': null
			});
			jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:radio', $form).not('[data-abide-ignore]').prop('checked', false).attr({
				'data-invalid': null,
				'aria-invalid': null
			});
			jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:checkbox', $form).not('[data-abide-ignore]').prop('checked', false).attr({
				'data-invalid': null,
				'aria-invalid': null
			});
			/**
			* Fires when the form has been reset.
			* @event Abide#formreset
			*/

			$form.trigger('formreset.zf.abide', [$form]);
		}
		/**
		* Destroys an instance of Abide.
		* Removes error styles and classes from elements, without resetting their values.
		*/

	}, {
		key: "_destroy",
		value: function _destroy() {
			var _this = this;

			this.$element.off('.abide').find('[data-abide-error]').css('display', 'none');
			this.$inputs.off('.abide').each(function () {
				_this.removeErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
			});
		}
	}]);

	return Abide;
}(_norma_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);
/**
* Default settings for plugin
*/


Abide.defaults = {
	/**
	* The default event to validate inputs. Checkboxes and radios validate immediately.
	* Remove or change this value for manual validation.
	* @option
	* @type {?string}
	* @default 'fieldChange'
	*/
	validateOn: 'fieldChange',

	/**
	* Class to be applied to input labels on failed validation.
	* @option
	* @type {string}
	* @default 'has-text-danger'
	*/
	labelErrorClass: 'has-text-danger',

	/**
	* Class to be applied to inputs on failed validation.
	* @option
	* @type {string}
	* @default 'is-danger'
	*/
	inputErrorClass: 'is-danger',

	/**
	* Class selector to use to target Form Errors for show/hide.
	* @option
	* @type {string}
	* @default '.is-error'
	*/
	formErrorSelector: '.is-error',

	/**
	* Class added to Form Errors on failed validation.
	* @option
	* @type {string}
	* @default 'is-block'
	*/
	formErrorClass: 'is-block',

	/**
	* If true, automatically insert when possible:
	* - `[aria-describedby]` on fields
	* - `[role=alert]` on form errors and `[for]` on form error labels
	* - `[aria-live]` on global errors `[data-abide-error]` (see option `a11yErrorLevel`).
	* @option
	* @type {boolean}
	* @default true
	*/
	a11yAttributes: true,

	/**
	* [aria-live] attribute value to be applied on global errors `[data-abide-error]`.
	* Options are: 'assertive', 'polite' and 'off'/null
	* @option
	* @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
	* @type {string}
	* @default 'assertive'
	*/
	a11yErrorLevel: 'assertive',

	/**
	* Set to true to validate text inputs on any value change.
	* @option
	* @type {boolean}
	* @default false
	*/
	liveValidate: false,

	/**
	* Set to true to validate inputs on blur.
	* @option
	* @type {boolean}
	* @default false
	*/
	validateOnBlur: false,
	patterns: {
		alpha: /^[a-zA-Z]+$/,
		alpha_numeric: /^[a-zA-Z0-9]+$/,
		integer: /^[-+]?\d+$/,
		number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
		// amex, visa, diners
		card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
		cvv: /^([0-9]){3,4}$/,
		// http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
		email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
		// From CommonRegexJS (@talyssonoc)
		// https://github.com/talyssonoc/CommonRegexJS/blob/e2901b9f57222bc14069dc8f0598d5f412555411/lib/commonregex.js#L76
		// For more restrictive URL Regexs, see https://mathiasbynens.be/demo/url-regex.
		url: /^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,
		// abc.de
		domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
		datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
		// YYYY-MM-DD
		date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
		// HH:MM:SS
		time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
		dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
		// MM/DD/YYYY
		month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
		// DD/MM/YYYY
		day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
		// #FFF or #FFFFFF
		color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
		// Domain || URL
		website: {
			test: function test(text) {
				return Abide.defaults.patterns['domain'].test(text) || Abide.defaults.patterns['url'].test(text);
			}
		}
	},

	/**
	* Optional validation functions to be used. `equalTo` being the only default included function.
	* Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
	* el : The jQuery element to validate.
	* required : Boolean value of the required attribute be present or not.
	* parent : The direct parent of the input.
	* @option
	*/
	validators: {
		equalTo: function equalTo(el, required, parent) {
			return jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(el.attr('data-equalto'))).val() === el.val();
		}
	}
};

/***/ }),

/***/ "./js/norma.core.js":
/*!*******************************!*\
!*** ./js/norma.core.js ***!
\*******************************/
/*! exports provided: Norma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Norma\", function() { return Norma; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _norma_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./norma.core.utils */ \"./js/norma.core.utils.js\");\n/* harmony import */ var _norma_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./norma.util.mediaQuery */ \"./js/norma.util.mediaQuery.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\nvar NORMA_VERSION = '0.0.5'; // Global Norma object\n// This is attached to the window, or used as a module for AMD/Browserify\n\nvar Norma = {\n  version: NORMA_VERSION,\n\n  /**\n   * Stores initialized plugins.\n   */\n  _plugins: {},\n\n  /**\n   * Stores generated unique ids for plugin instances\n   */\n  _uuids: [],\n\n  /**\n   * Defines a Norma plugin, adding it to the `Norma` namespace and the list of plugins to initialize when reflowing.\n   * @param {Object} plugin - The constructor of the plugin.\n   */\n  plugin: function plugin(_plugin, name) {\n    // Object key to use when adding to global Norma object\n    // Examples: Norma.Reveal, Norma.OffCanvas\n    var className = name || functionName(_plugin); // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin\n    // Examples: data-reveal, data-off-canvas\n\n    var attrName = hyphenate(className); // Add to the Norma object and the plugins list (for reflowing)\n\n    this._plugins[attrName] = this[className] = _plugin;\n  },\n\n  /**\n   * @function\n   * Populates the _uuids array with pointers to each individual plugin instance.\n   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).norma(method) calls.\n   * Also fires the initialization event for each plugin, consolidating repetitive code.\n   * @param {Object} plugin - an instance of a plugin, usually `this` in context.\n   * @param {String} name - the name of the plugin, passed as a camelCased string.\n   * @fires Plugin#init\n   */\n  registerPlugin: function registerPlugin(plugin, name) {\n    var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();\n    plugin.uuid = Object(_norma_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"GetYoDigits\"])(6, pluginName);\n\n    if (!plugin.$element.attr(\"data-\".concat(pluginName))) {\n      plugin.$element.attr(\"data-\".concat(pluginName), plugin.uuid);\n    }\n\n    if (!plugin.$element.data('zfPlugin')) {\n      plugin.$element.data('zfPlugin', plugin);\n    }\n    /**\n     * Fires when the plugin has initialized.\n     * @event Plugin#init\n     */\n\n\n    plugin.$element.trigger(\"init.zf.\".concat(pluginName));\n\n    this._uuids.push(plugin.uuid);\n\n    return;\n  },\n\n  /**\n   * @function\n   * Removes the plugins uuid from the _uuids array.\n   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.\n   * Also fires the destroyed event for the plugin, consolidating repetitive code.\n   * @param {Object} plugin - an instance of a plugin, usually `this` in context.\n   * @fires Plugin#destroyed\n   */\n  unregisterPlugin: function unregisterPlugin(plugin) {\n    var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));\n\n    this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);\n\n    plugin.$element.removeAttr(\"data-\".concat(pluginName)).removeData('zfPlugin')\n    /**\n     * Fires when the plugin has been destroyed.\n     * @event Plugin#destroyed\n     */\n    .trigger(\"destroyed.zf.\".concat(pluginName));\n\n    for (var prop in plugin) {\n      plugin[prop] = null; //clean up script to prep for garbage collection.\n    }\n\n    return;\n  },\n\n  /**\n   * @function\n   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.\n   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`\n   * @default If no argument is passed, reflow all currently active plugins.\n   */\n  reInit: function reInit(plugins) {\n    var isJQ = plugins instanceof jquery__WEBPACK_IMPORTED_MODULE_0___default.a;\n\n    try {\n      if (isJQ) {\n        plugins.each(function () {\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('zfPlugin')._init();\n        });\n      } else {\n        var type = _typeof(plugins),\n            _this = this,\n            fns = {\n          'object': function object(plgs) {\n            plgs.forEach(function (p) {\n              p = hyphenate(p);\n              jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + p + ']').norma('_init');\n            });\n          },\n          'string': function string() {\n            plugins = hyphenate(plugins);\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + plugins + ']').norma('_init');\n          },\n          'undefined': function undefined() {\n            this['object'](Object.keys(_this._plugins));\n          }\n        };\n\n        fns[type](plugins);\n      }\n    } catch (err) {\n      console.error(err);\n    } finally {\n      return plugins;\n    }\n  },\n\n  /**\n   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.\n   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.\n   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.\n   */\n  reflow: function reflow(elem, plugins) {\n    // If plugins is undefined, just grab everything\n    if (typeof plugins === 'undefined') {\n      plugins = Object.keys(this._plugins);\n    } // If plugins is a string, convert it to an array with one item\n    else if (typeof plugins === 'string') {\n        plugins = [plugins];\n      }\n\n    var _this = this; // Iterate through each plugin\n\n\n    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(plugins, function (i, name) {\n      // Get the current plugin\n      var plugin = _this._plugins[name]; // Localize the search to all elements inside elem, as well as elem itself, unless elem === document\n\n      var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem).find('[data-' + name + ']').addBack('[data-' + name + ']'); // For each plugin found, initialize it\n\n      $elem.each(function () {\n        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            opts = {}; // Don't double-dip on plugins\n\n        if ($el.data('zfPlugin')) {\n          console.warn(\"Tried to initialize \" + name + \" on an element that already has a Norma plugin.\");\n          return;\n        }\n\n        if ($el.attr('data-options')) {\n          var thing = $el.attr('data-options').split(';').forEach(function (e, i) {\n            var opt = e.split(':').map(function (el) {\n              return el.trim();\n            });\n            if (opt[0]) opts[opt[0]] = parseValue(opt[1]);\n          });\n        }\n\n        try {\n          $el.data('zfPlugin', new plugin(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), opts));\n        } catch (er) {\n          console.error(er);\n        } finally {\n          return;\n        }\n      });\n    });\n  },\n  getFnName: functionName,\n  addToJquery: function addToJquery($) {\n    // TODO: consider not making this a jQuery function\n    // TODO: need way to reflow vs. re-initialize\n\n    /**\n     * The Norma jQuery method.\n     * @param {String|Array} method - An action to perform on the current jQuery object.\n     */\n    var norma = function norma(method) {\n      var type = _typeof(method),\n          $noJS = $('.no-js');\n\n      if ($noJS.length) {\n        $noJS.removeClass('no-js');\n      }\n\n      if (type === 'undefined') {\n        //needs to initialize the Norma object, or an individual plugin.\n        _norma_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__[\"MediaQuery\"]._init();\n\n        Norma.reflow(this);\n      } else if (type === 'string') {\n        //an individual method to invoke on a plugin or group of plugins\n        var args = Array.prototype.slice.call(arguments, 1); //collect all the arguments, if necessary\n\n        var plugClass = this.data('zfPlugin'); //determine the class of plugin\n\n        if (typeof plugClass !== 'undefined' && typeof plugClass[method] !== 'undefined') {\n          //make sure both the class and method exist\n          if (this.length === 1) {\n            //if there's only one, call it directly.\n            plugClass[method].apply(plugClass, args);\n          } else {\n            this.each(function (i, el) {\n              //otherwise loop through the jQuery collection and invoke the method on each\n              plugClass[method].apply($(el).data('zfPlugin'), args);\n            });\n          }\n        } else {\n          //error for no class or no method\n          throw new ReferenceError(\"We're sorry, '\" + method + \"' is not an available method for \" + (plugClass ? functionName(plugClass) : 'this element') + '.');\n        }\n      } else {\n        //error for invalid argument type\n        throw new TypeError(\"We're sorry, \".concat(type, \" is not a valid parameter. You must use a string representing the method you wish to invoke.\"));\n      }\n\n      return this;\n    };\n\n    $.fn.norma = norma;\n    return $;\n  }\n};\nNorma.util = {\n  /**\n   * Function for applying a debounce effect to a function call.\n   * @function\n   * @param {Function} func - Function to be called at end of timeout.\n   * @param {Number} delay - Time in ms to delay the call of `func`.\n   * @returns function\n   */\n  throttle: function throttle(func, delay) {\n    var timer = null;\n    return function () {\n      var context = this,\n          args = arguments;\n\n      if (timer === null) {\n        timer = setTimeout(function () {\n          func.apply(context, args);\n          timer = null;\n        }, delay);\n      }\n    };\n  }\n};\nwindow.Norma = Norma; // Polyfill for requestAnimationFrame\n\n(function () {\n  if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {\n    return new Date().getTime();\n  };\n  var vendors = ['webkit', 'moz'];\n\n  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {\n    var vp = vendors[i];\n    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];\n    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];\n  }\n\n  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {\n    var lastTime = 0;\n\n    window.requestAnimationFrame = function (callback) {\n      var now = Date.now();\n      var nextTime = Math.max(lastTime + 16, now);\n      return setTimeout(function () {\n        callback(lastTime = nextTime);\n      }, nextTime - now);\n    };\n\n    window.cancelAnimationFrame = clearTimeout;\n  }\n  /**\n   * Polyfill for performance.now, required by rAF\n   */\n\n\n  if (!window.performance || !window.performance.now) {\n    window.performance = {\n      start: Date.now(),\n      now: function now() {\n        return Date.now() - this.start;\n      }\n    };\n  }\n})();\n\nif (!Function.prototype.bind) {\n  Function.prototype.bind = function (oThis) {\n    if (typeof this !== 'function') {\n      // closest thing possible to the ECMAScript 5\n      // internal IsCallable function\n      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');\n    }\n\n    var aArgs = Array.prototype.slice.call(arguments, 1),\n        fToBind = this,\n        fNOP = function fNOP() {},\n        fBound = function fBound() {\n      return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));\n    };\n\n    if (this.prototype) {\n      // native functions don't have a prototype\n      fNOP.prototype = this.prototype;\n    }\n\n    fBound.prototype = new fNOP();\n    return fBound;\n  };\n} // Polyfill to get the name of a function in IE9\n\n\nfunction functionName(fn) {\n  if (typeof Function.prototype.name === 'undefined') {\n    var funcNameRegex = /function\\s([^(]{1,})\\(/;\n    var results = funcNameRegex.exec(fn.toString());\n    return results && results.length > 1 ? results[1].trim() : \"\";\n  } else if (typeof fn.prototype === 'undefined') {\n    return fn.constructor.name;\n  } else {\n    return fn.prototype.constructor.name;\n  }\n}\n\nfunction parseValue(str) {\n  if ('true' === str) return true;else if ('false' === str) return false;else if (!isNaN(str * 1)) return parseFloat(str);\n  return str;\n} // Convert PascalCase to kebab-case\n// Thank you: http://stackoverflow.com/a/8955580\n\n\nfunction hyphenate(str) {\n  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();\n}\n\n\n\n//# sourceURL=webpack:///./js/norma.core.js?");

/***/ }),

/***/ "./js/norma.core.plugin.js":
/*!**************************************!*\
!*** ./js/norma.core.plugin.js ***!
\**************************************/
/*! exports provided: Plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Plugin\", function() { return Plugin; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _norma_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./norma.core.utils */ \"./js/norma.core.utils.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n // Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST\n// {function} _setup (replaces previous constructor),\n// {function} _destroy (replaces previous destroy)\n\nvar Plugin =\n/*#__PURE__*/\nfunction () {\n  function Plugin(element, options) {\n    _classCallCheck(this, Plugin);\n\n    this._setup(element, options);\n\n    var pluginName = getPluginName(this);\n    this.uuid = Object(_norma_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"GetYoDigits\"])(6, pluginName);\n\n    if (!this.$element.attr(\"data-\".concat(pluginName))) {\n      this.$element.attr(\"data-\".concat(pluginName), this.uuid);\n    }\n\n    if (!this.$element.data('zfPlugin')) {\n      this.$element.data('zfPlugin', this);\n    }\n    /**\n     * Fires when the plugin has initialized.\n     * @event Plugin#init\n     */\n\n\n    this.$element.trigger(\"init.zf.\".concat(pluginName));\n  }\n\n  _createClass(Plugin, [{\n    key: \"destroy\",\n    value: function destroy() {\n      this._destroy();\n\n      var pluginName = getPluginName(this);\n      this.$element.removeAttr(\"data-\".concat(pluginName)).removeData('zfPlugin')\n      /**\n       * Fires when the plugin has been destroyed.\n       * @event Plugin#destroyed\n       */\n      .trigger(\"destroyed.zf.\".concat(pluginName));\n\n      for (var prop in this) {\n        this[prop] = null; //clean up script to prep for garbage collection.\n      }\n    }\n  }]);\n\n  return Plugin;\n}(); // Convert PascalCase to kebab-case\n// Thank you: http://stackoverflow.com/a/8955580\n\n\nfunction hyphenate(str) {\n  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();\n}\n\nfunction getPluginName(obj) {\n  if (typeof obj.constructor.name !== 'undefined') {\n    return hyphenate(obj.constructor.name);\n  } else {\n    return hyphenate(obj.className);\n  }\n}\n\n\n\n//# sourceURL=webpack:///./js/norma.core.plugin.js?");

/***/ }),

/***/ "./js/norma.core.utils.js":
/*!*************************************!*\
!*** ./js/norma.core.utils.js ***!
\*************************************/
/*! exports provided: rtl, GetYoDigits, RegExpEscape, transitionend, onLoad, ignoreMousedisappear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rtl\", function() { return rtl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetYoDigits\", function() { return GetYoDigits; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegExpEscape\", function() { return RegExpEscape; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transitionend\", function() { return transitionend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onLoad\", function() { return onLoad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ignoreMousedisappear\", function() { return ignoreMousedisappear; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n\n // Core Norma Utilities, utilized in a number of places.\n\n/**\n * Returns a boolean for RTL support\n */\n\nfunction rtl() {\n  return jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('dir') === 'rtl';\n}\n/**\n * returns a random base-36 uid with namespacing\n * @function\n * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.\n * @param {String} namespace - name of plugin to be incorporated in uid, optional.\n * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.\n * @returns {String} - unique id\n */\n\n\nfunction GetYoDigits(length, namespace) {\n  length = length || 6;\n  return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? \"-\".concat(namespace) : '');\n}\n/**\n * Escape a string so it can be used as a regexp pattern\n * @function\n * @see https://stackoverflow.com/a/9310752/4317384\n *\n * @param {String} str - string to escape.\n * @returns {String} - escaped string\n */\n\n\nfunction RegExpEscape(str) {\n  return str.replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g, '\\\\$&');\n}\n\nfunction transitionend($elem) {\n  var transitions = {\n    'transition': 'transitionend',\n    'WebkitTransition': 'webkitTransitionEnd',\n    'MozTransition': 'transitionend',\n    'OTransition': 'otransitionend'\n  };\n  var elem = document.createElement('div'),\n      end;\n\n  for (var t in transitions) {\n    if (typeof elem.style[t] !== 'undefined') {\n      end = transitions[t];\n    }\n  }\n\n  if (end) {\n    return end;\n  } else {\n    end = setTimeout(function () {\n      $elem.triggerHandler('transitionend', [$elem]);\n    }, 1);\n    return 'transitionend';\n  }\n}\n/**\n * Return an event type to listen for window load.\n *\n * If `$elem` is passed, an event will be triggered on `$elem`. If window is already loaded, the event will still be triggered.\n * If `handler` is passed, attach it to the event on `$elem`.\n * Calling `onLoad` without handler allows you to get the event type that will be triggered before attaching the handler by yourself.\n * @function\n *\n * @param {Object} [] $elem - jQuery element on which the event will be triggered if passed.\n * @param {Function} [] handler - function to attach to the event.\n * @returns {String} - event type that should or will be triggered.\n */\n\n\nfunction onLoad($elem, handler) {\n  var didLoad = document.readyState === 'complete';\n  var eventType = (didLoad ? '_didLoad' : 'load') + '.zf.util.onLoad';\n\n  var cb = function cb() {\n    return $elem.triggerHandler(eventType);\n  };\n\n  if ($elem) {\n    if (handler) $elem.one(eventType, handler);\n    if (didLoad) setTimeout(cb);else jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load', cb);\n  }\n\n  return eventType;\n}\n/**\n * Retuns an handler for the `mouseleave` that ignore disappeared mouses.\n *\n * If the mouse \"disappeared\" from the document (like when going on a browser UI element, See https://git.io/zf-11410),\n * the event is ignored.\n * - If the `ignoreLeaveWindow` is `true`, the event is ignored when the user actually left the window\n *   (like by switching to an other window with [Alt]+[Tab]).\n * - If the `ignoreReappear` is `true`, the event will be ignored when the mouse will reappear later on the document\n *   outside of the element it left.\n *\n * @function\n *\n * @param {Function} [] handler - handler for the filtered `mouseleave` event to watch.\n * @param {Object} [] options - object of options:\n * - {Boolean} [false] ignoreLeaveWindow - also ignore when the user switched windows.\n * - {Boolean} [false] ignoreReappear - also ignore when the mouse reappeared outside of the element it left.\n * @returns {Function} - filtered handler to use to listen on the `mouseleave` event.\n */\n\n\nfunction ignoreMousedisappear(handler) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$ignoreLeaveWindo = _ref.ignoreLeaveWindow,\n      ignoreLeaveWindow = _ref$ignoreLeaveWindo === void 0 ? false : _ref$ignoreLeaveWindo,\n      _ref$ignoreReappear = _ref.ignoreReappear,\n      ignoreReappear = _ref$ignoreReappear === void 0 ? false : _ref$ignoreReappear;\n\n  return function leaveEventHandler(eLeave) {\n    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      rest[_key - 1] = arguments[_key];\n    }\n\n    var callback = handler.bind.apply(handler, [this, eLeave].concat(rest)); // The mouse left: call the given callback if the mouse entered elsewhere\n\n    if (eLeave.relatedTarget !== null) {\n      return callback();\n    } // Otherwise, check if the mouse actually left the window.\n    // In firefox if the user switched between windows, the window sill have the focus by the time\n    // the event is triggered. We have to debounce the event to test this case.\n\n\n    setTimeout(function leaveEventDebouncer() {\n      if (!ignoreLeaveWindow && document.hasFocus && !document.hasFocus()) {\n        return callback();\n      } // Otherwise, wait for the mouse to reeapear outside of the element,\n\n\n      if (!ignoreReappear) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).one('mouseenter', function reenterEventHandler(eReenter) {\n          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(eLeave.currentTarget).has(eReenter.target).length) {\n            // Fill where the mouse finally entered.\n            eLeave.relatedTarget = eReenter.target;\n            callback();\n          }\n        });\n      }\n    }, 0);\n  };\n}\n\n\n\n//# sourceURL=webpack:///./js/norma.core.utils.js?");

/***/ }),

/***/ "./js/norma.util.mediaQuery.js":
/*!******************************************!*\
!*** ./js/norma.util.mediaQuery.js ***!
\******************************************/
/*! exports provided: MediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MediaQuery\", function() { return MediaQuery; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n // Default set of media queries\n\nvar defaultQueries = {\n  'default': 'only screen',\n  landscape: 'only screen and (orientation: landscape)',\n  portrait: 'only screen and (orientation: portrait)',\n  retina: 'only screen and (-webkit-min-device-pixel-ratio: 2),' + 'only screen and (min--moz-device-pixel-ratio: 2),' + 'only screen and (-o-min-device-pixel-ratio: 2/1),' + 'only screen and (min-device-pixel-ratio: 2),' + 'only screen and (min-resolution: 192dpi),' + 'only screen and (min-resolution: 2dppx)'\n}; // matchMedia() polyfill - Test a CSS media type/query in JS.\n// Authors & copyright(c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license\n\n/* eslint-disable */\n\nwindow.matchMedia || (window.matchMedia = function () {\n  \"use strict\"; // For browsers that support matchMedium api such as IE 9 and webkit\n\n  var styleMedia = window.styleMedia || window.media; // For those that don't support matchMedium\n\n  if (!styleMedia) {\n    var style = document.createElement('style'),\n        script = document.getElementsByTagName('script')[0],\n        info = null;\n    style.type = 'text/css';\n    style.id = 'matchmediajs-test';\n\n    if (!script) {\n      document.head.appendChild(style);\n    } else {\n      script.parentNode.insertBefore(style, script);\n    } // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers\n\n\n    info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;\n    styleMedia = {\n      matchMedium: function matchMedium(media) {\n        var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }'; // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers\n\n        if (style.styleSheet) {\n          style.styleSheet.cssText = text;\n        } else {\n          style.textContent = text;\n        } // Test if media query is true or false\n\n\n        return info.width === '1px';\n      }\n    };\n  }\n\n  return function (media) {\n    return {\n      matches: styleMedia.matchMedium(media || 'all'),\n      media: media || 'all'\n    };\n  };\n}());\n/* eslint-enable */\n\nvar MediaQuery = {\n  queries: [],\n  current: '',\n\n  /**\n   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.\n   * @function\n   * @private\n   */\n  _init: function _init() {\n    var self = this;\n    var $meta = jquery__WEBPACK_IMPORTED_MODULE_0___default()('meta.norma-mq');\n\n    if (!$meta.length) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<meta class=\"norma-mq\">').appendTo(document.head);\n    }\n\n    var extractedStyles = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.norma-mq').css('font-family');\n    var namedQueries;\n    namedQueries = parseStyleToObject(extractedStyles);\n\n    for (var key in namedQueries) {\n      if (namedQueries.hasOwnProperty(key)) {\n        self.queries.push({\n          name: key,\n          value: \"only screen and (min-width: \".concat(namedQueries[key], \")\")\n        });\n      }\n    }\n\n    this.current = this._getCurrentSize();\n\n    this._watcher();\n  },\n\n  /**\n   * Checks if the screen is at least as wide as a breakpoint.\n   * @function\n   * @param {String} size - Name of the breakpoint to check.\n   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.\n   */\n  atLeast: function atLeast(size) {\n    var query = this.get(size);\n\n    if (query) {\n      return window.matchMedia(query).matches;\n    }\n\n    return false;\n  },\n\n  /**\n   * Checks if the screen matches to a breakpoint.\n   * @function\n   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.\n   * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.\n   */\n  is: function is(size) {\n    size = size.trim().split(' ');\n\n    if (size.length > 1 && size[1] === 'only') {\n      if (size[0] === this._getCurrentSize()) return true;\n    } else {\n      return this.atLeast(size[0]);\n    }\n\n    return false;\n  },\n\n  /**\n   * Gets the media query of a breakpoint.\n   * @function\n   * @param {String} size - Name of the breakpoint to get.\n   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.\n   */\n  get: function get(size) {\n    for (var i in this.queries) {\n      if (this.queries.hasOwnProperty(i)) {\n        var query = this.queries[i];\n        if (size === query.name) return query.value;\n      }\n    }\n\n    return null;\n  },\n\n  /**\n   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).\n   * @function\n   * @private\n   * @returns {String} Name of the current breakpoint.\n   */\n  _getCurrentSize: function _getCurrentSize() {\n    var matched;\n\n    for (var i = 0; i < this.queries.length; i++) {\n      var query = this.queries[i];\n\n      if (window.matchMedia(query.value).matches) {\n        matched = query;\n      }\n    }\n\n    if (_typeof(matched) === 'object') {\n      return matched.name;\n    } else {\n      return matched;\n    }\n  },\n\n  /**\n   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.\n   * @function\n   * @private\n   */\n  _watcher: function _watcher() {\n    var _this = this;\n\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('resize.zf.mediaquery').on('resize.zf.mediaquery', function () {\n      var newSize = _this._getCurrentSize(),\n          currentSize = _this.current;\n\n      if (newSize !== currentSize) {\n        // Change the current media query\n        _this.current = newSize; // Broadcast the media query change on the window\n\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('changed.zf.mediaquery', [newSize, currentSize]);\n      }\n    });\n  }\n}; // Thank you: https://github.com/sindresorhus/query-string\n\nfunction parseStyleToObject(str) {\n  var styleObject = {};\n\n  if (typeof str !== 'string') {\n    return styleObject;\n  }\n\n  str = str.trim().slice(1, -1); // browsers re-quote string style values\n\n  if (!str) {\n    return styleObject;\n  }\n\n  styleObject = str.split('&').reduce(function (ret, param) {\n    var parts = param.replace(/\\+/g, ' ').split('=');\n    var key = parts[0];\n    var val = parts[1];\n    key = decodeURIComponent(key); // missing `=` should be `null`:\n    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters\n\n    val = typeof val === 'undefined' ? null : decodeURIComponent(val);\n\n    if (!ret.hasOwnProperty(key)) {\n      ret[key] = val;\n    } else if (Array.isArray(ret[key])) {\n      ret[key].push(val);\n    } else {\n      ret[key] = [ret[key], val];\n    }\n\n    return ret;\n  }, {});\n  return styleObject;\n}\n\n\n\n//# sourceURL=webpack:///./js/norma.util.mediaQuery.js?");

/***/ }),

/***/ "./js/norma.util.motion.js":
/*!**************************************!*\
!*** ./js/norma.util.motion.js ***!
\**************************************/
/*! exports provided: Move, Motion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Move\", function() { return Move; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Motion\", function() { return Motion; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _norma_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./norma.core.utils */ \"./js/norma.core.utils.js\");\n\n\n\n\n/**\n * Motion module.\n * @module norma.motion\n */\n\nvar initClasses = ['mui-enter', 'mui-leave'];\nvar activeClasses = ['mui-enter-active', 'mui-leave-active'];\nvar Motion = {\n  animateIn: function animateIn(element, animation, cb) {\n    animate(true, element, animation, cb);\n  },\n  animateOut: function animateOut(element, animation, cb) {\n    animate(false, element, animation, cb);\n  }\n};\n\nfunction Move(duration, elem, fn) {\n  var anim,\n      prog,\n      start = null; // console.log('called');\n\n  if (duration === 0) {\n    fn.apply(elem);\n    elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);\n    return;\n  }\n\n  function move(ts) {\n    if (!start) start = ts; // console.log(start, ts);\n\n    prog = ts - start;\n    fn.apply(elem);\n\n    if (prog < duration) {\n      anim = window.requestAnimationFrame(move, elem);\n    } else {\n      window.cancelAnimationFrame(anim);\n      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);\n    }\n  }\n\n  anim = window.requestAnimationFrame(move);\n}\n/**\n * Animates an element in or out using a CSS transition class.\n * @function\n * @private\n * @param {Boolean} isIn - Defines if the animation is in or out.\n * @param {Object} element - jQuery or HTML object to animate.\n * @param {String} animation - CSS class to use.\n * @param {Function} cb - Callback to run when animation is finished.\n */\n\n\nfunction animate(isIn, element, animation, cb) {\n  element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).eq(0);\n  if (!element.length) return;\n  var initClass = isIn ? initClasses[0] : initClasses[1];\n  var activeClass = isIn ? activeClasses[0] : activeClasses[1]; // Set up the animation\n\n  reset();\n  element.addClass(animation).css('transition', 'none');\n  requestAnimationFrame(function () {\n    element.addClass(initClass);\n    if (isIn) element.show();\n  }); // Start the animation\n\n  requestAnimationFrame(function () {\n    element[0].offsetWidth;\n    element.css('transition', '').addClass(activeClass);\n  }); // Clean up the animation when it finishes\n\n  element.one(Object(_norma_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"transitionend\"])(element), finish); // Hides the element (for out animations), resets the element, and runs a callback\n\n  function finish() {\n    if (!isIn) element.hide();\n    reset();\n    if (cb) cb.apply(element);\n  } // Resets transitions and removes motion-specific classes\n\n\n  function reset() {\n    element[0].style.transitionDuration = 0;\n    element.removeClass(\"\".concat(initClass, \" \").concat(activeClass, \" \").concat(animation));\n  }\n}\n\n\n\n//# sourceURL=webpack:///./js/norma.util.motion.js?");

/***/ }),

/***/ "./js/norma.util.triggers.js":
/*!****************************************!*\
!*** ./js/norma.util.triggers.js ***!
\****************************************/
/*! exports provided: Triggers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Triggers\", function() { return Triggers; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _norma_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./norma.core.utils */ \"./js/norma.core.utils.js\");\n/* harmony import */ var _norma_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./norma.util.motion */ \"./js/norma.util.motion.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\nvar MutationObserver = function () {\n  var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];\n\n  for (var i = 0; i < prefixes.length; i++) {\n    if (\"\".concat(prefixes[i], \"MutationObserver\") in window) {\n      return window[\"\".concat(prefixes[i], \"MutationObserver\")];\n    }\n  }\n\n  return false;\n}();\n\nvar triggers = function triggers(el, type) {\n  el.data(type).split(' ').forEach(function (id) {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(id))[type === 'close' ? 'trigger' : 'triggerHandler'](\"\".concat(type, \".zf.trigger\"), [el]);\n  });\n};\n\nvar Triggers = {\n  Listeners: {\n    Basic: {},\n    Global: {}\n  },\n  Initializers: {}\n};\nTriggers.Listeners.Basic = {\n  openListener: function openListener() {\n    triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'open');\n  },\n  closeListener: function closeListener() {\n    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('close');\n\n    if (id) {\n      triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'close');\n    } else {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('close.zf.trigger');\n    }\n  },\n  toggleListener: function toggleListener() {\n    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');\n\n    if (id) {\n      triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggle');\n    } else {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('toggle.zf.trigger');\n    }\n  },\n  closeableListener: function closeableListener(e) {\n    e.stopPropagation();\n    var animation = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('closable');\n\n    if (animation !== '') {\n      _norma_util_motion__WEBPACK_IMPORTED_MODULE_2__[\"Motion\"].animateOut(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), animation, function () {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('closed.zf');\n      });\n    } else {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).fadeOut().trigger('closed.zf');\n    }\n  },\n  toggleFocusListener: function toggleFocusListener() {\n    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle-focus');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(id)).triggerHandler('toggle.zf.trigger', [jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)]);\n  }\n}; // Elements with [data-open] will reveal a plugin that supports it when clicked.\n\nTriggers.Initializers.addOpenListener = function ($elem) {\n  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.openListener);\n  $elem.on('click.zf.trigger', '[data-open]', Triggers.Listeners.Basic.openListener);\n}; // Elements with [data-close] will close a plugin that supports it when clicked.\n// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.\n\n\nTriggers.Initializers.addCloseListener = function ($elem) {\n  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.closeListener);\n  $elem.on('click.zf.trigger', '[data-close]', Triggers.Listeners.Basic.closeListener);\n}; // Elements with [data-toggle] will toggle a plugin that supports it when clicked.\n\n\nTriggers.Initializers.addToggleListener = function ($elem) {\n  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.toggleListener);\n  $elem.on('click.zf.trigger', '[data-toggle]', Triggers.Listeners.Basic.toggleListener);\n}; // Elements with [data-closable] will respond to close.zf.trigger events.\n\n\nTriggers.Initializers.addCloseableListener = function ($elem) {\n  $elem.off('close.zf.trigger', Triggers.Listeners.Basic.closeableListener);\n  $elem.on('close.zf.trigger', '[data-closeable], [data-closable]', Triggers.Listeners.Basic.closeableListener);\n}; // Elements with [data-toggle-focus] will respond to coming in and out of focus\n\n\nTriggers.Initializers.addToggleFocusListener = function ($elem) {\n  $elem.off('focus.zf.trigger blur.zf.trigger', Triggers.Listeners.Basic.toggleFocusListener);\n  $elem.on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', Triggers.Listeners.Basic.toggleFocusListener);\n}; // More Global/complex listeners and triggers\n\n\nTriggers.Listeners.Global = {\n  resizeListener: function resizeListener($nodes) {\n    if (!MutationObserver) {\n      //fallback for IE 9\n      $nodes.each(function () {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('resizeme.zf.trigger');\n      });\n    } //trigger all listening elements and signal a resize event\n\n\n    $nodes.attr('data-events', \"resize\");\n  },\n  scrollListener: function scrollListener($nodes) {\n    if (!MutationObserver) {\n      //fallback for IE 9\n      $nodes.each(function () {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('scrollme.zf.trigger');\n      });\n    } //trigger all listening elements and signal a scroll event\n\n\n    $nodes.attr('data-events', \"scroll\");\n  },\n  closeMeListener: function closeMeListener(e, pluginId) {\n    var plugin = e.namespace.split('.')[0];\n    var plugins = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-\".concat(plugin, \"]\")).not(\"[data-yeti-box=\\\"\".concat(pluginId, \"\\\"]\"));\n    plugins.each(function () {\n      var _this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);\n\n      _this.triggerHandler('close.zf.trigger', [_this]);\n    });\n  } // Global, parses whole document.\n\n};\n\nTriggers.Initializers.addClosemeListener = function (pluginName) {\n  var yetiBoxes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-yeti-box]'),\n      plugNames = ['dropdown', 'tooltip', 'reveal'];\n\n  if (pluginName) {\n    if (typeof pluginName === 'string') {\n      plugNames.push(pluginName);\n    } else if (_typeof(pluginName) === 'object' && typeof pluginName[0] === 'string') {\n      plugNames.concat(pluginName);\n    } else {\n      console.error('Plugin names must be strings');\n    }\n  }\n\n  if (yetiBoxes.length) {\n    var listeners = plugNames.map(function (name) {\n      return \"closeme.zf.\".concat(name);\n    }).join(' ');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(listeners).on(listeners, Triggers.Listeners.Global.closeMeListener);\n  }\n};\n\nfunction debounceGlobalListener(debounce, trigger, listener) {\n  var timer,\n      args = Array.prototype.slice.call(arguments, 3);\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(trigger).on(trigger, function (e) {\n    if (timer) {\n      clearTimeout(timer);\n    }\n\n    timer = setTimeout(function () {\n      listener.apply(null, args);\n    }, debounce || 10); //default time to emit scroll event\n  });\n}\n\nTriggers.Initializers.addResizeListener = function (debounce) {\n  var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-resize]');\n\n  if ($nodes.length) {\n    debounceGlobalListener(debounce, 'resize.zf.trigger', Triggers.Listeners.Global.resizeListener, $nodes);\n  }\n};\n\nTriggers.Initializers.addScrollListener = function (debounce) {\n  var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-scroll]');\n\n  if ($nodes.length) {\n    debounceGlobalListener(debounce, 'scroll.zf.trigger', Triggers.Listeners.Global.scrollListener, $nodes);\n  }\n};\n\nTriggers.Initializers.addMutationEventsListener = function ($elem) {\n  if (!MutationObserver) {\n    return false;\n  }\n\n  var $nodes = $elem.find('[data-resize], [data-scroll], [data-mutate]'); //element callback\n\n  var listeningElementsMutation = function listeningElementsMutation(mutationRecordsList) {\n    var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(mutationRecordsList[0].target); //trigger the event handler for the element depending on type\n\n    switch (mutationRecordsList[0].type) {\n      case \"attributes\":\n        if ($target.attr(\"data-events\") === \"scroll\" && mutationRecordsList[0].attributeName === \"data-events\") {\n          $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);\n        }\n\n        if ($target.attr(\"data-events\") === \"resize\" && mutationRecordsList[0].attributeName === \"data-events\") {\n          $target.triggerHandler('resizeme.zf.trigger', [$target]);\n        }\n\n        if (mutationRecordsList[0].attributeName === \"style\") {\n          $target.closest(\"[data-mutate]\").attr(\"data-events\", \"mutate\");\n          $target.closest(\"[data-mutate]\").triggerHandler('mutateme.zf.trigger', [$target.closest(\"[data-mutate]\")]);\n        }\n\n        break;\n\n      case \"childList\":\n        $target.closest(\"[data-mutate]\").attr(\"data-events\", \"mutate\");\n        $target.closest(\"[data-mutate]\").triggerHandler('mutateme.zf.trigger', [$target.closest(\"[data-mutate]\")]);\n        break;\n\n      default:\n        return false;\n      //nothing\n    }\n  };\n\n  if ($nodes.length) {\n    //for each element that needs to listen for resizing, scrolling, or mutation add a single observer\n    for (var i = 0; i <= $nodes.length - 1; i++) {\n      var elementObserver = new MutationObserver(listeningElementsMutation);\n      elementObserver.observe($nodes[i], {\n        attributes: true,\n        childList: true,\n        characterData: false,\n        subtree: true,\n        attributeFilter: [\"data-events\", \"style\"]\n      });\n    }\n  }\n};\n\nTriggers.Initializers.addSimpleListeners = function () {\n  var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);\n  Triggers.Initializers.addOpenListener($document);\n  Triggers.Initializers.addCloseListener($document);\n  Triggers.Initializers.addToggleListener($document);\n  Triggers.Initializers.addCloseableListener($document);\n  Triggers.Initializers.addToggleFocusListener($document);\n};\n\nTriggers.Initializers.addGlobalListeners = function () {\n  var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);\n  Triggers.Initializers.addMutationEventsListener($document);\n  Triggers.Initializers.addResizeListener();\n  Triggers.Initializers.addScrollListener();\n  Triggers.Initializers.addClosemeListener();\n};\n\nTriggers.init = function ($, Norma) {\n  Object(_norma_core_utils__WEBPACK_IMPORTED_MODULE_1__[\"onLoad\"])($(window), function () {\n    if ($.triggersInitialized !== true) {\n      Triggers.Initializers.addSimpleListeners();\n      Triggers.Initializers.addGlobalListeners();\n      $.triggersInitialized = true;\n    }\n  });\n\n  if (Norma) {\n    Norma.Triggers = Triggers; // Legacy included to be backwards compatible for now.\n\n    Norma.IHearYou = Triggers.Initializers.addGlobalListeners;\n  }\n};\n\n\n\n//# sourceURL=webpack:///./js/norma.util.triggers.js?");

/***/ }),

/***/ "jquery":
/*!********************************************************************************************!*\
!*** external {"root":["jQuery"],"amd":"jquery","commonjs":"jquery","commonjs2":"jquery"} ***!
\********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;\n\n//# sourceURL=webpack:///external_%7B%22root%22:%5B%22jQuery%22%5D,%22amd%22:%22jquery%22,%22commonjs%22:%22jquery%22,%22commonjs2%22:%22jquery%22%7D?");

/***/ })

/******/ });
});

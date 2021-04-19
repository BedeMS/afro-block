// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/views/signUpTermsView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// const signupAgree = document.querySelector(".terms__form-btn");
var SignUpTermsView = /*#__PURE__*/function () {
  function SignUpTermsView() {
    _classCallCheck(this, SignUpTermsView);

    _defineProperty(this, "_agreeBtn", document.querySelector(".terms__form-btn"));

    _defineProperty(this, "_terms", document.querySelector(".terms"));

    _defineProperty(this, "_signUpForm", document.querySelector(".signup"));
  }

  _createClass(SignUpTermsView, [{
    key: "addHandlerRender",
    value: function addHandlerRender(handler) {
      var _this = this;

      document.addEventListener("DOMContentLoaded", function () {
        if (_this._agreeBtn) {
          _this._agreeBtn.addEventListener("click", handler);
        }

        return;
      });
    }
  }, {
    key: "renderSignUpForm",
    value: function renderSignUpForm() {
      this._terms.style.display = "none";
      this._signUpForm.style.display = "flex";
    }
  }]);

  return SignUpTermsView;
}();

var _default = new SignUpTermsView();

exports.default = _default;
},{}],"src/js/views/View.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var View = /*#__PURE__*/function () {
  function View() {
    _classCallCheck(this, View);

    _defineProperty(this, "_businessData", {});
  }

  _createClass(View, [{
    key: "_showError",
    value: function _showError(input, message) {
      var formControl = input.parentElement;
      formControl.className = "form-control error";
      var small = formControl.querySelector("small");
      small.innerText = message;
    } //Show Input Success Message

  }, {
    key: "_showSuccess",
    value: function _showSuccess(input, message) {
      var formControl = input.parentElement;
      formControl.className = "form-control success";
      this._businessData[input.id] = input.value; // const small = formControl.querySelector("small");
      // small.innerText = message;
    }
  }, {
    key: "_checkRequired",
    value: function _checkRequired(inputArr) {
      inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
          this._showError(input, "".concat(this._getFieldName(input), " is required"));
        } else {
          this._showSuccess(input);
        }
      }, this);
    }
  }, {
    key: "_checkEmail",
    value: function _checkEmail(input) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (re.test(input.value.trim())) {
        this._showSuccess(input);
      } else {
        this._showError(input, "Email is not valid");
      }
    }
  }, {
    key: "_checkLength",
    value: function _checkLength(input, min, max) {
      if (input.value.length < min) {
        this._showError(input, "".concat(this._getFieldName(input), " must be at least ").concat(min, " characters"));
      } else if (input.value.length > max) {
        this._showError(input, "".concat(this._getFieldName(input), " must be less than ").concat(max, " characters"));
      } else {
        this._showSuccess(input);
      }
    }
  }, {
    key: "_checkPasswordMatch",
    value: function _checkPasswordMatch(input1, input2) {
      if (input1.value !== input2.value) {
        this._showError(input2, "Passwords do not match");
      }
    }
  }, {
    key: "_getFieldName",
    value: function _getFieldName(input) {
      var name = input.id.replace(/([A-Z])/g, " $1");
      return name.replace(/^./, function (str) {
        return str.toUpperCase();
      });
    }
  }, {
    key: "_setCapName",
    value: function _setCapName(input) {
      var name = input.replace(/([A-Z])/g, " $1");
      return name.replace(/^./, function (str) {
        return str.toUpperCase();
      });
    }
  }]);

  return View;
}();

var _default = View; //   constructor() {
//     this._showError = this._showError.bind(this);
//     this._showSuccess = this._showSuccess.bind(this);
//     this._checkEmail = this._checkEmail.bind(this);
//     this._checkLength = this._checkLength.bind(this);
//     this._checkPasswordMatch = this._checkPasswordMatch.bind(this);
//     this._checkRequired = this._checkRequired.bind(this);
//     this._getFieldName = this._getFieldName.bind(this);
//   }

exports.default = _default;
},{}],"src/js/views/signUpFormView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _View2 = _interopRequireDefault(require("./View"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SignUpFormView = /*#__PURE__*/function (_View) {
  _inherits(SignUpFormView, _View);

  var _super = _createSuper(SignUpFormView);

  function SignUpFormView() {
    var _this;

    _classCallCheck(this, SignUpFormView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_signupBtn", document.querySelector(".signup__button"));

    _defineProperty(_assertThisInitialized(_this), "_businessName", document.querySelector("#businessName"));

    _defineProperty(_assertThisInitialized(_this), "_businessEmail", document.querySelector("#businessEmail"));

    _defineProperty(_assertThisInitialized(_this), "_businessPhone", document.querySelector("#businessPhone-number"));

    _defineProperty(_assertThisInitialized(_this), "_ownerName", document.querySelector("#ownerName"));

    _defineProperty(_assertThisInitialized(_this), "_businessAddress", document.querySelector("#businessAddress"));

    _defineProperty(_assertThisInitialized(_this), "_businessOpenDate", document.querySelector("#businessOpen-date"));

    return _this;
  }

  _createClass(SignUpFormView, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      this._checkRequired([this._businessName, this._ownerName, this._businessAddress, this._businessOpenDate]);

      this._checkEmail(this._businessEmail);

      this._checkLength(this._businessPhone, 10, 10);

      if (Object.keys(this._businessData).length !== 6) {
        return;
      }

      return this._businessData;
    }
  }, {
    key: "addHandlerRender",
    value: function addHandlerRender(handler) {
      var _this2 = this;

      document.addEventListener("DOMContentLoaded", function () {
        if (_this2._signupBtn) {
          _this2._signupBtn.addEventListener("click", function (e) {
            e.preventDefault();
            handler();
          });
        }

        return;
      });
    }
  }]);

  return SignUpFormView;
}(_View2.default);

var _default = new SignUpFormView();

exports.default = _default;
},{"./View":"src/js/views/View.js"}],"src/js/views/confirmationView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _View2 = _interopRequireDefault(require("./View"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ConfirmationView = /*#__PURE__*/function (_View) {
  _inherits(ConfirmationView, _View);

  var _super = _createSuper(ConfirmationView);

  function ConfirmationView() {
    var _this;

    _classCallCheck(this, ConfirmationView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_signUpForm", document.querySelector(".signup"));

    _defineProperty(_assertThisInitialized(_this), "_main", document.querySelector(".main"));

    return _this;
  }

  _createClass(ConfirmationView, [{
    key: "render",
    value: function render(data) {
      var _this2 = this;

      this._signUpForm.style.display = "none";
      var markup = "\n    <section class=\"confirmation\">\n    <h1>Thank You For Signing Up ".concat(data.ownerName, "</h1>\n    <ul class=\"confirmation__userInfo\">\n    ").concat(Object.entries(data).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return "<li>".concat(_this2._setCapName(key), ": ").concat(value, "</li>");
      }).join(" "), "\n    </ul>\n    <p>\n      Once we have finalized the confirmation process, we will be in touch\n      with you.\n    </p>\n    <p>\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae\n      cupiditate nostrum amet laborum aspernatur eos itaque molestias. Sunt\n      quas qui repellendus enim libero itaque provident expedita et\n      consectetur perferendis unde, praesentium culpa adipisci excepturi minus\n      impedit esse odio soluta sed obcaecati ratione. Corporis accusamus est\n      iste, error ipsam ipsa consectetur.\n    </p>\n    <ul>\n      <li>Please prepare good photos for listings</li>\n      <li>Please prepare good photos for listings</li>\n      <li>Please prepare good photos for listings</li>\n      <li>Please prepare good photos for listings</li>\n      <li>Please prepare good photos for listings</li>\n    </ul>\n    </section>");

      this._main.insertAdjacentHTML("afterbegin", markup);
    }
  }]);

  return ConfirmationView;
}(_View2.default);

var _default = new ConfirmationView();

exports.default = _default;
},{"./View":"src/js/views/View.js"}],"src/js/controller.js":[function(require,module,exports) {
"use strict";

var _signUpTermsView = _interopRequireDefault(require("./views/signUpTermsView"));

var _signUpFormView = _interopRequireDefault(require("./views/signUpFormView"));

var _confirmationView = _interopRequireDefault(require("./views/confirmationView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var signUpTerms = function signUpTerms() {
  //2.Next Page is loader for user.
  _signUpTermsView.default.renderSignUpForm();
};

var signUpForm = function signUpForm() {
  var userInfo = _signUpFormView.default.getUserInfo();

  if (!userInfo) {
    console.log("nothing to see");
  } else {
    console.log(userInfo);

    _confirmationView.default.render(userInfo);
  }
};

var init = function init() {
  //1.User Agrees to Sign Up Terms
  _signUpTermsView.default.addHandlerRender(signUpTerms);

  _signUpFormView.default.addHandlerRender(signUpForm);
};

init();
},{"./views/signUpTermsView":"src/js/views/signUpTermsView.js","./views/signUpFormView":"src/js/views/signUpFormView.js","./views/confirmationView":"src/js/views/confirmationView.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57818" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","src/js/controller.js"], null)
//# sourceMappingURL=/controller.e87f5190.js.map
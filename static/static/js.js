function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
(function () {
  var _Ro, _Mo;
  var Ke = !1,
    ze = !1,
    X = [];
  function St(e) {
    Vr(e);
  }
  function Vr(e) {
    X.includes(e) || X.push(e), Br();
  }
  function Br() {
    !ze && !Ke && (Ke = !0, queueMicrotask(Hr));
  }
  function Hr() {
    Ke = !1, ze = !0;
    for (var e = 0; e < X.length; e++) {
      X[e]();
    }
    X.length = 0, ze = !1;
  }
  var w,
    M,
    U,
    Ve,
    Be = !0;
  function At(e) {
    Be = !1, e(), Be = !0;
  }
  function Ot(e) {
    w = e.reactive, U = e.release, M = function M(t) {
      return e.effect(t, {
        scheduler: function scheduler(r) {
          Be ? St(r) : r();
        }
      });
    }, Ve = e.raw;
  }
  function He(e) {
    M = e;
  }
  function Tt(e) {
    var t = function t() {};
    return [function (n) {
      var i = M(n);
      e._x_effects || (e._x_effects = new Set(), e._x_runEffects = function () {
        e._x_effects.forEach(function (o) {
          return o();
        });
      }), e._x_effects.add(i), t = function t() {
        i !== void 0 && (e._x_effects["delete"](i), U(i));
      };
    }, function () {
      t();
    }];
  }
  var Ct = [],
    Rt = [],
    Mt = [];
  function Nt(e) {
    Mt.push(e);
  }
  function kt(e) {
    Rt.push(e);
  }
  function Dt(e) {
    Ct.push(e);
  }
  function Pt(e, t, r) {
    e._x_attributeCleanups || (e._x_attributeCleanups = {}), e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []), e._x_attributeCleanups[t].push(r);
  }
  function qe(e, t) {
    !e._x_attributeCleanups || Object.entries(e._x_attributeCleanups).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        r = _ref2[0],
        n = _ref2[1];
      (t === void 0 || t.includes(r)) && (n.forEach(function (i) {
        return i();
      }), delete e._x_attributeCleanups[r]);
    });
  }
  var We = new MutationObserver(Ue),
    Ge = !1;
  function Ye() {
    We.observe(document, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeOldValue: !0
    }), Ge = !0;
  }
  function Ur() {
    qr(), We.disconnect(), Ge = !1;
  }
  var ee = [],
    Je = !1;
  function qr() {
    ee = ee.concat(We.takeRecords()), ee.length && !Je && (Je = !0, queueMicrotask(function () {
      Wr(), Je = !1;
    }));
  }
  function Wr() {
    Ue(ee), ee.length = 0;
  }
  function h(e) {
    if (!Ge) return e();
    Ur();
    var t = e();
    return Ye(), t;
  }
  var Ze = !1,
    me = [];
  function It() {
    Ze = !0;
  }
  function Lt() {
    Ze = !1, Ue(me), me = [];
  }
  function Ue(e) {
    if (Ze) {
      me = me.concat(e);
      return;
    }
    var t = [],
      r = [],
      n = new Map(),
      i = new Map();
    for (var o = 0; o < e.length; o++) {
      if (!e[o].target._x_ignoreMutationObserver && (e[o].type === "childList" && (e[o].addedNodes.forEach(function (s) {
        return s.nodeType === 1 && t.push(s);
      }), e[o].removedNodes.forEach(function (s) {
        return s.nodeType === 1 && r.push(s);
      })), e[o].type === "attributes")) {
        (function () {
          var s = e[o].target,
            a = e[o].attributeName,
            c = e[o].oldValue,
            l = function l() {
              n.has(s) || n.set(s, []), n.get(s).push({
                name: a,
                value: s.getAttribute(a)
              });
            },
            u = function u() {
              i.has(s) || i.set(s, []), i.get(s).push(a);
            };
          s.hasAttribute(a) && c === null ? l() : s.hasAttribute(a) ? (u(), l()) : u();
        })();
      }
    }
    i.forEach(function (o, s) {
      qe(s, o);
    }), n.forEach(function (o, s) {
      Ct.forEach(function (a) {
        return a(s, o);
      });
    });
    var _loop = function _loop() {
      var o = _t2[_i2];
      r.includes(o) || Mt.forEach(function (s) {
        return s(o);
      });
    };
    for (var _i2 = 0, _t2 = t; _i2 < _t2.length; _i2++) {
      _loop();
    }
    var _loop2 = function _loop2() {
      var o = _r2[_i3];
      t.includes(o) || Rt.forEach(function (s) {
        return s(o);
      });
    };
    for (var _i3 = 0, _r2 = r; _i3 < _r2.length; _i3++) {
      _loop2();
    }
    t = null, r = null, n = null, i = null;
  }
  function W(e, t, r) {
    return e._x_dataStack = [t].concat(_toConsumableArray(F(r || e))), function () {
      e._x_dataStack = e._x_dataStack.filter(function (n) {
        return n !== t;
      });
    };
  }
  function Qe(e, t) {
    var r = e._x_dataStack[0];
    Object.entries(t).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        n = _ref4[0],
        i = _ref4[1];
      r[n] = i;
    });
  }
  function F(e) {
    return e._x_dataStack ? e._x_dataStack : typeof ShadowRoot == "function" && e instanceof ShadowRoot ? F(e.host) : e.parentNode ? F(e.parentNode) : [];
  }
  function N(e) {
    var t = new Proxy({}, {
      ownKeys: function ownKeys() {
        return Array.from(new Set(e.flatMap(function (r) {
          return Object.keys(r);
        })));
      },
      has: function has(r, n) {
        return e.some(function (i) {
          return i.hasOwnProperty(n);
        });
      },
      get: function get(r, n) {
        return (e.find(function (i) {
          if (i.hasOwnProperty(n)) {
            var o = Object.getOwnPropertyDescriptor(i, n);
            if (o.get && o.get._x_alreadyBound || o.set && o.set._x_alreadyBound) return !0;
            if ((o.get || o.set) && o.enumerable) {
              var s = o.get,
                a = o.set,
                c = o;
              s = s && s.bind(t), a = a && a.bind(t), s && (s._x_alreadyBound = !0), a && (a._x_alreadyBound = !0), Object.defineProperty(i, n, _objectSpread(_objectSpread({}, c), {}, {
                get: s,
                set: a
              }));
            }
            return !0;
          }
          return !1;
        }) || {})[n];
      },
      set: function set(r, n, i) {
        var o = e.find(function (s) {
          return s.hasOwnProperty(n);
        });
        return o ? o[n] = i : e[e.length - 1][n] = i, !0;
      }
    });
    return t;
  }
  function he(e) {
    var t = function t(n) {
        return _typeof(n) == "object" && !Array.isArray(n) && n !== null;
      },
      r = function r(n) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
            o = _ref6[0],
            _ref6$ = _ref6[1],
            s = _ref6$.value,
            a = _ref6$.enumerable;
          if (a === !1 || s === void 0) return;
          var c = i === "" ? o : "".concat(i, ".").concat(o);
          _typeof(s) == "object" && s !== null && s._x_interceptor ? n[o] = s.initialize(e, c, o) : t(s) && s !== n && !(s instanceof Element) && r(s, c);
        });
      };
    return r(e);
  }
  function ge(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var r = {
      initialValue: void 0,
      _x_interceptor: !0,
      initialize: function initialize(n, i, o) {
        return e(this.initialValue, function () {
          return Gr(n, i);
        }, function (s) {
          return Xe(n, i, s);
        }, i, o);
      }
    };
    return t(r), function (n) {
      if (_typeof(n) == "object" && n !== null && n._x_interceptor) {
        var i = r.initialize.bind(r);
        r.initialize = function (o, s, a) {
          var c = n.initialize(o, s, a);
          return r.initialValue = c, i(o, s, a);
        };
      } else r.initialValue = n;
      return r;
    };
  }
  function Gr(e, t) {
    return t.split(".").reduce(function (r, n) {
      return r[n];
    }, e);
  }
  function Xe(e, t, r) {
    if (typeof t == "string" && (t = t.split(".")), t.length === 1) e[t[0]] = r;else {
      if (t.length === 0) throw error;
      return e[t[0]] || (e[t[0]] = {}), Xe(e[t[0]], t.slice(1), r);
    }
  }
  var $t = {};
  function b(e, t) {
    $t[e] = t;
  }
  function te(e, t) {
    return Object.entries($t).forEach(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
        r = _ref8[0],
        n = _ref8[1];
      Object.defineProperty(e, "$".concat(r), {
        get: function get() {
          return n(t, {
            Alpine: S,
            interceptor: ge
          });
        },
        enumerable: !1
      });
    }), e;
  }
  function jt(e, t, r) {
    try {
      for (var _len = arguments.length, n = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        n[_key - 3] = arguments[_key];
      }
      return r.apply(void 0, n);
    } catch (i) {
      G(i, e, t);
    }
  }
  function G(e, t) {
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : void 0;
    Object.assign(e, {
      el: t,
      expression: r
    }), console.warn("Alpine Expression Error: ".concat(e.message, "\n\n").concat(r ? 'Expression: "' + r + "\"\n\n" : ""), t), setTimeout(function () {
      throw e;
    }, 0);
  }
  function v(e, t) {
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var n;
    return m(e, t)(function (i) {
      return n = i;
    }, r), n;
  }
  function m() {
    return Ft.apply(void 0, arguments);
  }
  var Ft = et;
  function Kt(e) {
    Ft = e;
  }
  function et(e, t) {
    var r = {};
    te(r, e);
    var n = [r].concat(_toConsumableArray(F(e)));
    if (typeof t == "function") return Yr(n, t);
    var i = Jr(n, t, e);
    return jt.bind(null, e, t, i);
  }
  function Yr(e, t) {
    return function () {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      var _ref9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref9$scope = _ref9.scope,
        n = _ref9$scope === void 0 ? {} : _ref9$scope,
        _ref9$params = _ref9.params,
        i = _ref9$params === void 0 ? [] : _ref9$params;
      var o = t.apply(N([n].concat(_toConsumableArray(e))), i);
      _e(r, o);
    };
  }
  var tt = {};
  function Zr(e, t) {
    if (tt[e]) return tt[e];
    var r = Object.getPrototypeOf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))).constructor,
      n = /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e) ? "(() => { ".concat(e, " })()") : e,
      o = function () {
        try {
          return new r(["__self", "scope"], "with (scope) { __self.result = ".concat(n, " }; __self.finished = true; return __self.result;"));
        } catch (s) {
          return G(s, t, e), Promise.resolve();
        }
      }();
    return tt[e] = o, o;
  }
  function Jr(e, t, r) {
    var n = Zr(t, r);
    return function () {
      var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      var _ref11 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref11$scope = _ref11.scope,
        o = _ref11$scope === void 0 ? {} : _ref11$scope,
        _ref11$params = _ref11.params,
        s = _ref11$params === void 0 ? [] : _ref11$params;
      n.result = void 0, n.finished = !1;
      var a = N([o].concat(_toConsumableArray(e)));
      if (typeof n == "function") {
        var c = n(n, a)["catch"](function (l) {
          return G(l, r, t);
        });
        n.finished ? _e(i, n.result, a, s, r) : c.then(function (l) {
          _e(i, l, a, s, r);
        })["catch"](function (l) {
          return G(l, r, t);
        });
      }
    };
  }
  function _e(e, t, r, n, i) {
    if (typeof t == "function") {
      var o = t.apply(r, n);
      o instanceof Promise ? o.then(function (s) {
        return _e(e, s, r, n);
      })["catch"](function (s) {
        return G(s, i, t);
      }) : e(o);
    } else e(t);
  }
  var rt = "x-";
  function A() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return rt + e;
  }
  function zt(e) {
    rt = e;
  }
  var Vt = {};
  function p(e, t) {
    Vt[e] = t;
  }
  function re(e, t, r) {
    var n = {};
    return Array.from(t).map(Bt(function (o, s) {
      return n[o] = s;
    })).filter(Ht).map(Xr(n, r)).sort(en).map(function (o) {
      return Qr(e, o);
    });
  }
  function qt(e) {
    return Array.from(e).map(Bt()).filter(function (t) {
      return !Ht(t);
    });
  }
  var nt = !1,
    ne = new Map(),
    Ut = Symbol();
  function Wt(e) {
    nt = !0;
    var t = Symbol();
    Ut = t, ne.set(t, []);
    var r = function r() {
        for (; ne.get(t).length;) {
          ne.get(t).shift()();
        }
        ne["delete"](t);
      },
      n = function n() {
        nt = !1, r();
      };
    e(r), n();
  }
  function Qr(e, t) {
    var r = function r() {},
      n = Vt[t.type] || r,
      i = [],
      o = function o(d) {
        return i.push(d);
      },
      _Tt = Tt(e),
      _Tt2 = _slicedToArray(_Tt, 2),
      s = _Tt2[0],
      a = _Tt2[1];
    i.push(a);
    var c = {
        Alpine: S,
        effect: s,
        cleanup: o,
        evaluateLater: m.bind(m, e),
        evaluate: v.bind(v, e)
      },
      l = function l() {
        return i.forEach(function (d) {
          return d();
        });
      };
    Pt(e, t.original, l);
    var u = function u() {
      e._x_ignore || e._x_ignoreSelf || (n.inline && n.inline(e, t, c), n = n.bind(n, e, t, c), nt ? ne.get(Ut).push(n) : n());
    };
    return u.runCleanups = l, u;
  }
  var ye = function ye(e, t) {
      return function (_ref12) {
        var r = _ref12.name,
          n = _ref12.value;
        return r.startsWith(e) && (r = r.replace(e, t)), {
          name: r,
          value: n
        };
      };
    },
    xe = function xe(e) {
      return e;
    };
  function Bt() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
    return function (_ref13) {
      var t = _ref13.name,
        r = _ref13.value;
      var _Gt$reduce = Gt.reduce(function (o, s) {
          return s(o);
        }, {
          name: t,
          value: r
        }),
        n = _Gt$reduce.name,
        i = _Gt$reduce.value;
      return n !== t && e(n, t), {
        name: n,
        value: i
      };
    };
  }
  var Gt = [];
  function Y(e) {
    Gt.push(e);
  }
  function Ht(_ref14) {
    var e = _ref14.name;
    return Yt().test(e);
  }
  var Yt = function Yt() {
    return new RegExp("^".concat(rt, "([^:^.]+)\\b"));
  };
  function Xr(e, t) {
    return function (_ref15) {
      var r = _ref15.name,
        n = _ref15.value;
      var i = r.match(Yt()),
        o = r.match(/:([a-zA-Z0-9\-:]+)/),
        s = r.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
        a = t || e[r] || r;
      return {
        type: i ? i[1] : null,
        value: o ? o[1] : null,
        modifiers: s.map(function (c) {
          return c.replace(".", "");
        }),
        expression: n,
        original: a
      };
    };
  }
  var it = "DEFAULT",
    be = ["ignore", "ref", "data", "bind", "init", "for", "model", "transition", "show", "if", it, "element"];
  function en(e, t) {
    var r = be.indexOf(e.type) === -1 ? it : e.type,
      n = be.indexOf(t.type) === -1 ? it : t.type;
    return be.indexOf(r) - be.indexOf(n);
  }
  function K(e, t) {
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    e.dispatchEvent(new CustomEvent(t, {
      detail: r,
      bubbles: !0,
      composed: !0,
      cancelable: !0
    }));
  }
  var ot = [],
    st = !1;
  function J(e) {
    ot.push(e), queueMicrotask(function () {
      st || setTimeout(function () {
        ve();
      });
    });
  }
  function ve() {
    for (st = !1; ot.length;) {
      ot.shift()();
    }
  }
  function Jt() {
    st = !0;
  }
  function D(e, t) {
    if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
      Array.from(e.children).forEach(function (i) {
        return D(i, t);
      });
      return;
    }
    var r = !1;
    if (t(e, function () {
      return r = !0;
    }), r) return;
    var n = e.firstElementChild;
    for (; n;) {
      D(n, t, !1), n = n.nextElementSibling;
    }
  }
  function we(e) {
    var _console;
    for (var _len2 = arguments.length, t = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      t[_key2 - 1] = arguments[_key2];
    }
    (_console = console).warn.apply(_console, ["Alpine Warning: ".concat(e)].concat(t));
  }
  function Qt() {
    document.body || we("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"), K(document, "alpine:init"), K(document, "alpine:initializing"), Ye(), Nt(function (t) {
      return O(t, D);
    }), kt(function (t) {
      return J(function () {
        return tn(t);
      });
    }), Dt(function (t, r) {
      re(t, r).forEach(function (n) {
        return n();
      });
    });
    var e = function e(t) {
      return !P(t.parentElement, !0);
    };
    Array.from(document.querySelectorAll(Zt())).filter(e).forEach(function (t) {
      O(t);
    }), K(document, "alpine:initialized");
  }
  var at = [],
    Xt = [];
  function er() {
    return at.map(function (e) {
      return e();
    });
  }
  function Zt() {
    return at.concat(Xt).map(function (e) {
      return e();
    });
  }
  function Ee(e) {
    at.push(e);
  }
  function tr(e) {
    Xt.push(e);
  }
  function P(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    if (!e) return;
    if ((t ? Zt() : er()).some(function (n) {
      return e.matches(n);
    })) return e;
    if (!!e.parentElement) return P(e.parentElement, t);
  }
  function rr(e) {
    return er().some(function (t) {
      return e.matches(t);
    });
  }
  function O(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : D;
    Wt(function () {
      t(e, function (r, n) {
        re(r, r.attributes).forEach(function (i) {
          return i();
        }), r._x_ignore && n();
      });
    });
  }
  function tn(e) {
    D(e, function (t) {
      return qe(t);
    });
  }
  function ie(e, t) {
    return Array.isArray(t) ? nr(e, t.join(" ")) : _typeof(t) == "object" && t !== null ? rn(e, t) : typeof t == "function" ? ie(e, t()) : nr(e, t);
  }
  function nr(e, t) {
    var r = function r(o) {
        return o.split(" ").filter(Boolean);
      },
      n = function n(o) {
        return o.split(" ").filter(function (s) {
          return !e.classList.contains(s);
        }).filter(Boolean);
      },
      i = function i(o) {
        var _e$classList;
        return (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(o)), function () {
          var _e$classList2;
          (_e$classList2 = e.classList).remove.apply(_e$classList2, _toConsumableArray(o));
        };
      };
    return t = t === !0 ? t = "" : t || "", i(n(t));
  }
  function rn(e, t) {
    var r = function r(a) {
        return a.split(" ").filter(Boolean);
      },
      n = Object.entries(t).flatMap(function (_ref16) {
        var _ref17 = _slicedToArray(_ref16, 2),
          a = _ref17[0],
          c = _ref17[1];
        return c ? r(a) : !1;
      }).filter(Boolean),
      i = Object.entries(t).flatMap(function (_ref18) {
        var _ref19 = _slicedToArray(_ref18, 2),
          a = _ref19[0],
          c = _ref19[1];
        return c ? !1 : r(a);
      }).filter(Boolean),
      o = [],
      s = [];
    return i.forEach(function (a) {
      e.classList.contains(a) && (e.classList.remove(a), s.push(a));
    }), n.forEach(function (a) {
      e.classList.contains(a) || (e.classList.add(a), o.push(a));
    }), function () {
      s.forEach(function (a) {
        return e.classList.add(a);
      }), o.forEach(function (a) {
        return e.classList.remove(a);
      });
    };
  }
  function z(e, t) {
    return _typeof(t) == "object" && t !== null ? nn(e, t) : on(e, t);
  }
  function nn(e, t) {
    var r = {};
    return Object.entries(t).forEach(function (_ref20) {
      var _ref21 = _slicedToArray(_ref20, 2),
        n = _ref21[0],
        i = _ref21[1];
      r[n] = e.style[n], e.style.setProperty(sn(n), i);
    }), setTimeout(function () {
      e.style.length === 0 && e.removeAttribute("style");
    }), function () {
      z(e, r);
    };
  }
  function on(e, t) {
    var r = e.getAttribute("style", t);
    return e.setAttribute("style", t), function () {
      e.setAttribute("style", r);
    };
  }
  function sn(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function oe(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var r = !1;
    return function () {
      r ? t.apply(this, arguments) : (r = !0, e.apply(this, arguments));
    };
  }
  p("transition", function (e, _ref22, _ref23) {
    var t = _ref22.value,
      r = _ref22.modifiers,
      n = _ref22.expression;
    var i = _ref23.evaluate;
    typeof n == "function" && (n = i(n)), n ? an(e, n, t) : cn(e, r, t);
  });
  function an(e, t, r) {
    ir(e, ie, ""), {
      enter: function enter(i) {
        e._x_transition.enter.during = i;
      },
      "enter-start": function enterStart(i) {
        e._x_transition.enter.start = i;
      },
      "enter-end": function enterEnd(i) {
        e._x_transition.enter.end = i;
      },
      leave: function leave(i) {
        e._x_transition.leave.during = i;
      },
      "leave-start": function leaveStart(i) {
        e._x_transition.leave.start = i;
      },
      "leave-end": function leaveEnd(i) {
        e._x_transition.leave.end = i;
      }
    }[r](t);
  }
  function cn(e, t, r) {
    ir(e, z);
    var n = !t.includes("in") && !t.includes("out") && !r,
      i = n || t.includes("in") || ["enter"].includes(r),
      o = n || t.includes("out") || ["leave"].includes(r);
    t.includes("in") && !n && (t = t.filter(function (_, x) {
      return x < t.indexOf("out");
    })), t.includes("out") && !n && (t = t.filter(function (_, x) {
      return x > t.indexOf("out");
    }));
    var s = !t.includes("opacity") && !t.includes("scale"),
      a = s || t.includes("opacity"),
      c = s || t.includes("scale"),
      l = a ? 0 : 1,
      u = c ? se(t, "scale", 95) / 100 : 1,
      d = se(t, "delay", 0),
      y = se(t, "origin", "center"),
      C = "opacity, transform",
      H = se(t, "duration", 150) / 1e3,
      de = se(t, "duration", 75) / 1e3,
      f = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    i && (e._x_transition.enter.during = {
      transformOrigin: y,
      transitionDelay: d,
      transitionProperty: C,
      transitionDuration: "".concat(H, "s"),
      transitionTimingFunction: f
    }, e._x_transition.enter.start = {
      opacity: l,
      transform: "scale(".concat(u, ")")
    }, e._x_transition.enter.end = {
      opacity: 1,
      transform: "scale(1)"
    }), o && (e._x_transition.leave.during = {
      transformOrigin: y,
      transitionDelay: d,
      transitionProperty: C,
      transitionDuration: "".concat(de, "s"),
      transitionTimingFunction: f
    }, e._x_transition.leave.start = {
      opacity: 1,
      transform: "scale(1)"
    }, e._x_transition.leave.end = {
      opacity: l,
      transform: "scale(".concat(u, ")")
    });
  }
  function ir(e, t) {
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    e._x_transition || (e._x_transition = {
      enter: {
        during: r,
        start: r,
        end: r
      },
      leave: {
        during: r,
        start: r,
        end: r
      },
      "in": function _in() {
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        Se(e, t, {
          during: this.enter.during,
          start: this.enter.start,
          end: this.enter.end
        }, n, i);
      },
      out: function out() {
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        Se(e, t, {
          during: this.leave.during,
          start: this.leave.start,
          end: this.leave.end
        }, n, i);
      }
    });
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function (e, t, r, n) {
    var i = function i() {
      document.visibilityState === "visible" ? requestAnimationFrame(r) : setTimeout(r);
    };
    if (t) {
      e._x_transition && (e._x_transition.enter || e._x_transition.leave) ? e._x_transition.enter && (Object.entries(e._x_transition.enter.during).length || Object.entries(e._x_transition.enter.start).length || Object.entries(e._x_transition.enter.end).length) ? e._x_transition["in"](r) : i() : e._x_transition ? e._x_transition["in"](r) : i();
      return;
    }
    e._x_hidePromise = e._x_transition ? new Promise(function (o, s) {
      e._x_transition.out(function () {}, function () {
        return o(n);
      }), e._x_transitioning.beforeCancel(function () {
        return s({
          isFromCancelledTransition: !0
        });
      });
    }) : Promise.resolve(n), queueMicrotask(function () {
      var o = or(e);
      o ? (o._x_hideChildren || (o._x_hideChildren = []), o._x_hideChildren.push(e)) : queueMicrotask(function () {
        var s = function s(a) {
          var c = Promise.all([a._x_hidePromise].concat(_toConsumableArray((a._x_hideChildren || []).map(s)))).then(function (_ref24) {
            var _ref25 = _slicedToArray(_ref24, 1),
              l = _ref25[0];
            return l();
          });
          return delete a._x_hidePromise, delete a._x_hideChildren, c;
        };
        s(e)["catch"](function (a) {
          if (!a.isFromCancelledTransition) throw a;
        });
      });
    });
  };
  function or(e) {
    var t = e.parentNode;
    if (!!t) return t._x_hidePromise ? t : or(t);
  }
  function Se(e, t) {
    var _ref26 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      r = _ref26.during,
      n = _ref26.start,
      i = _ref26.end;
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
    if (e._x_transitioning && e._x_transitioning.cancel(), Object.keys(r).length === 0 && Object.keys(n).length === 0 && Object.keys(i).length === 0) {
      o(), s();
      return;
    }
    var a, c, l;
    ln(e, {
      start: function start() {
        a = t(e, n);
      },
      during: function during() {
        c = t(e, r);
      },
      before: o,
      end: function end() {
        a(), l = t(e, i);
      },
      after: s,
      cleanup: function cleanup() {
        c(), l();
      }
    });
  }
  function ln(e, t) {
    var r,
      n,
      i,
      o = oe(function () {
        h(function () {
          r = !0, n || t.before(), i || (t.end(), ve()), t.after(), e.isConnected && t.cleanup(), delete e._x_transitioning;
        });
      });
    e._x_transitioning = {
      beforeCancels: [],
      beforeCancel: function beforeCancel(s) {
        this.beforeCancels.push(s);
      },
      cancel: oe(function () {
        for (; this.beforeCancels.length;) {
          this.beforeCancels.shift()();
        }
        o();
      }),
      finish: o
    }, h(function () {
      t.start(), t.during();
    }), Jt(), requestAnimationFrame(function () {
      if (r) return;
      var s = Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3,
        a = Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
      s === 0 && (s = Number(getComputedStyle(e).animationDuration.replace("s", "")) * 1e3), h(function () {
        t.before();
      }), n = !0, requestAnimationFrame(function () {
        r || (h(function () {
          t.end();
        }), ve(), setTimeout(e._x_transitioning.finish, s + a), i = !0);
      });
    });
  }
  function se(e, t, r) {
    if (e.indexOf(t) === -1) return r;
    var n = e[e.indexOf(t) + 1];
    if (!n || t === "scale" && isNaN(n)) return r;
    if (t === "duration") {
      var i = n.match(/([0-9]+)ms/);
      if (i) return i[1];
    }
    return t === "origin" && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [n, e[e.indexOf(t) + 2]].join(" ") : n;
  }
  function Ae(e, t) {
    var r;
    return function () {
      var n = this,
        i = arguments,
        o = function o() {
          r = null, e.apply(n, i);
        };
      clearTimeout(r), r = setTimeout(o, t);
    };
  }
  function Oe(e, t) {
    var r;
    return function () {
      var n = this,
        i = arguments;
      r || (e.apply(n, i), r = !0, setTimeout(function () {
        return r = !1;
      }, t));
    };
  }
  function sr(e) {
    e(S);
  }
  var V = {},
    ar = !1;
  function cr(e, t) {
    if (ar || (V = w(V), ar = !0), t === void 0) return V[e];
    V[e] = t, _typeof(t) == "object" && t !== null && t.hasOwnProperty("init") && typeof t.init == "function" && V[e].init(), he(V[e]);
  }
  function lr() {
    return V;
  }
  var ct = !1;
  function I(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    return function () {
      return ct ? t.apply(void 0, arguments) : e.apply(void 0, arguments);
    };
  }
  function ur(e, t) {
    t._x_dataStack = e._x_dataStack, ct = !0, fn(function () {
      un(t);
    }), ct = !1;
  }
  function un(e) {
    var t = !1;
    O(e, function (n, i) {
      D(n, function (o, s) {
        if (t && rr(o)) return s();
        t = !0, i(o, s);
      });
    });
  }
  function fn(e) {
    var t = M;
    He(function (r, n) {
      var i = t(r);
      return U(i), function () {};
    }), e(), He(t);
  }
  var fr = {};
  function dr(e, t) {
    fr[e] = t;
  }
  function pr(e, t) {
    return Object.entries(fr).forEach(function (_ref27) {
      var _ref28 = _slicedToArray(_ref27, 2),
        r = _ref28[0],
        n = _ref28[1];
      Object.defineProperty(e, r, {
        get: function get() {
          return function () {
            return n.bind(t).apply(void 0, arguments);
          };
        },
        enumerable: !1
      });
    }), e;
  }
  var dn = {
      get reactive() {
        return w;
      },
      get release() {
        return U;
      },
      get effect() {
        return M;
      },
      get raw() {
        return Ve;
      },
      version: "3.5.1",
      flushAndStopDeferringMutations: Lt,
      disableEffectScheduling: At,
      setReactivityEngine: Ot,
      skipDuringClone: I,
      addRootSelector: Ee,
      deferMutations: It,
      mapAttributes: Y,
      evaluateLater: m,
      setEvaluator: Kt,
      mergeProxies: N,
      closestRoot: P,
      interceptor: ge,
      transition: Se,
      setStyles: z,
      mutateDom: h,
      directive: p,
      throttle: Oe,
      debounce: Ae,
      evaluate: v,
      initTree: O,
      nextTick: J,
      prefix: zt,
      plugin: sr,
      magic: b,
      store: cr,
      start: Qt,
      clone: ur,
      data: dr
    },
    S = dn;
  function lt(e, t) {
    var r = Object.create(null),
      n = e.split(",");
    for (var i = 0; i < n.length; i++) {
      r[n[i]] = !0;
    }
    return t ? function (i) {
      return !!r[i.toLowerCase()];
    } : function (i) {
      return !!r[i];
    };
  }
  var Ro = (_Ro = {}, _defineProperty(_Ro, 1, "TEXT"), _defineProperty(_Ro, 2, "CLASS"), _defineProperty(_Ro, 4, "STYLE"), _defineProperty(_Ro, 8, "PROPS"), _defineProperty(_Ro, 16, "FULL_PROPS"), _defineProperty(_Ro, 32, "HYDRATE_EVENTS"), _defineProperty(_Ro, 64, "STABLE_FRAGMENT"), _defineProperty(_Ro, 128, "KEYED_FRAGMENT"), _defineProperty(_Ro, 256, "UNKEYED_FRAGMENT"), _defineProperty(_Ro, 512, "NEED_PATCH"), _defineProperty(_Ro, 1024, "DYNAMIC_SLOTS"), _defineProperty(_Ro, 2048, "DEV_ROOT_FRAGMENT"), _defineProperty(_Ro, -1, "HOISTED"), _defineProperty(_Ro, -2, "BAIL"), _Ro),
    Mo = (_Mo = {}, _defineProperty(_Mo, 1, "STABLE"), _defineProperty(_Mo, 2, "DYNAMIC"), _defineProperty(_Mo, 3, "FORWARDED"), _Mo);
  var pn = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
  var No = lt(pn + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
  var mr = Object.freeze({}),
    ko = Object.freeze([]);
  var ut = Object.assign;
  var mn = Object.prototype.hasOwnProperty,
    ae = function ae(e, t) {
      return mn.call(e, t);
    },
    L = Array.isArray,
    Z = function Z(e) {
      return hr(e) === "[object Map]";
    };
  var hn = function hn(e) {
      return typeof e == "string";
    },
    Te = function Te(e) {
      return _typeof(e) == "symbol";
    },
    ce = function ce(e) {
      return e !== null && _typeof(e) == "object";
    };
  var gn = Object.prototype.toString,
    hr = function hr(e) {
      return gn.call(e);
    },
    ft = function ft(e) {
      return hr(e).slice(8, -1);
    };
  var Ce = function Ce(e) {
    return hn(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
  };
  var Re = function Re(e) {
      var t = Object.create(null);
      return function (r) {
        return t[r] || (t[r] = e(r));
      };
    },
    _n = /-(\w)/g,
    Do = Re(function (e) {
      return e.replace(_n, function (t, r) {
        return r ? r.toUpperCase() : "";
      });
    }),
    yn = /\B([A-Z])/g,
    Po = Re(function (e) {
      return e.replace(yn, "-$1").toLowerCase();
    }),
    dt = Re(function (e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }),
    Io = Re(function (e) {
      return e ? "on".concat(dt(e)) : "";
    }),
    pt = function pt(e, t) {
      return e !== t && (e === e || t === t);
    };
  var mt = new WeakMap(),
    le = [],
    T,
    B = Symbol("iterate"),
    ht = Symbol("Map key iterate");
  function xn(e) {
    return e && e._isEffect === !0;
  }
  function gr(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mr;
    xn(e) && (e = e.raw);
    var r = bn(e, t);
    return t.lazy || r(), r;
  }
  function yr(e) {
    e.active && (_r(e), e.options.onStop && e.options.onStop(), e.active = !1);
  }
  var vn = 0;
  function bn(e, t) {
    var r = function r() {
      if (!r.active) return e();
      if (!le.includes(r)) {
        _r(r);
        try {
          return wn(), le.push(r), T = r, e();
        } finally {
          le.pop(), xr(), T = le[le.length - 1];
        }
      }
    };
    return r.id = vn++, r.allowRecurse = !!t.allowRecurse, r._isEffect = !0, r.active = !0, r.raw = e, r.deps = [], r.options = t, r;
  }
  function _r(e) {
    var t = e.deps;
    if (t.length) {
      for (var r = 0; r < t.length; r++) {
        t[r]["delete"](e);
      }
      t.length = 0;
    }
  }
  var Q = !0,
    gt = [];
  function En() {
    gt.push(Q), Q = !1;
  }
  function wn() {
    gt.push(Q), Q = !0;
  }
  function xr() {
    var e = gt.pop();
    Q = e === void 0 ? !0 : e;
  }
  function E(e, t, r) {
    if (!Q || T === void 0) return;
    var n = mt.get(e);
    n || mt.set(e, n = new Map());
    var i = n.get(r);
    i || n.set(r, i = new Set()), i.has(T) || (i.add(T), T.deps.push(i), T.options.onTrack && T.options.onTrack({
      effect: T,
      target: e,
      type: t,
      key: r
    }));
  }
  function $(e, t, r, n, i, o) {
    var s = mt.get(e);
    if (!s) return;
    var a = new Set(),
      c = function c(u) {
        u && u.forEach(function (d) {
          (d !== T || d.allowRecurse) && a.add(d);
        });
      };
    if (t === "clear") s.forEach(c);else if (r === "length" && L(e)) s.forEach(function (u, d) {
      (d === "length" || d >= n) && c(u);
    });else switch (r !== void 0 && c(s.get(r)), t) {
      case "add":
        L(e) ? Ce(r) && c(s.get("length")) : (c(s.get(B)), Z(e) && c(s.get(ht)));
        break;
      case "delete":
        L(e) || (c(s.get(B)), Z(e) && c(s.get(ht)));
        break;
      case "set":
        Z(e) && c(s.get(B));
        break;
    }
    var l = function l(u) {
      u.options.onTrigger && u.options.onTrigger({
        effect: u,
        target: e,
        key: r,
        type: t,
        newValue: n,
        oldValue: i,
        oldTarget: o
      }), u.options.scheduler ? u.options.scheduler(u) : u();
    };
    a.forEach(l);
  }
  var Sn = lt("__proto__,__v_isRef,__isVue"),
    br = new Set(Object.getOwnPropertyNames(Symbol).map(function (e) {
      return Symbol[e];
    }).filter(Te)),
    An = Me(),
    On = Me(!1, !0),
    Tn = Me(!0),
    Cn = Me(!0, !0),
    Ne = {};
  ["includes", "indexOf", "lastIndexOf"].forEach(function (e) {
    var t = Array.prototype[e];
    Ne[e] = function () {
      var n = g(this);
      for (var o = 0, s = this.length; o < s; o++) {
        E(n, "get", o + "");
      }
      for (var _len3 = arguments.length, r = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        r[_key3] = arguments[_key3];
      }
      var i = t.apply(n, r);
      return i === -1 || i === !1 ? t.apply(n, r.map(g)) : i;
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach(function (e) {
    var t = Array.prototype[e];
    Ne[e] = function () {
      En();
      for (var _len4 = arguments.length, r = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        r[_key4] = arguments[_key4];
      }
      var n = t.apply(this, r);
      return xr(), n;
    };
  });
  function Me() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    return function (n, i, o) {
      if (i === "__v_isReactive") return !e;
      if (i === "__v_isReadonly") return e;
      if (i === "__v_raw" && o === (e ? t ? Mn : wr : t ? Rn : vr).get(n)) return n;
      var s = L(n);
      if (!e && s && ae(Ne, i)) return Reflect.get(Ne, i, o);
      var a = Reflect.get(n, i, o);
      return (Te(i) ? br.has(i) : Sn(i)) || (e || E(n, "get", i), t) ? a : _t(a) ? !s || !Ce(i) ? a.value : a : ce(a) ? e ? Er(a) : ke(a) : a;
    };
  }
  var Nn = Sr(),
    kn = Sr(!0);
  function Sr() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    return function (r, n, i, o) {
      var s = r[n];
      if (!e && (i = g(i), s = g(s), !L(r) && _t(s) && !_t(i))) return s.value = i, !0;
      var a = L(r) && Ce(n) ? Number(n) < r.length : ae(r, n),
        c = Reflect.set(r, n, i, o);
      return r === g(o) && (a ? pt(i, s) && $(r, "set", n, i, s) : $(r, "add", n, i)), c;
    };
  }
  function Dn(e, t) {
    var r = ae(e, t),
      n = e[t],
      i = Reflect.deleteProperty(e, t);
    return i && r && $(e, "delete", t, void 0, n), i;
  }
  function Pn(e, t) {
    var r = Reflect.has(e, t);
    return (!Te(t) || !br.has(t)) && E(e, "has", t), r;
  }
  function In(e) {
    return E(e, "iterate", L(e) ? "length" : B), Reflect.ownKeys(e);
  }
  var Ar = {
      get: An,
      set: Nn,
      deleteProperty: Dn,
      has: Pn,
      ownKeys: In
    },
    Or = {
      get: Tn,
      set: function set(e, t) {
        return console.warn("Set operation on key \"".concat(String(t), "\" failed: target is readonly."), e), !0;
      },
      deleteProperty: function deleteProperty(e, t) {
        return console.warn("Delete operation on key \"".concat(String(t), "\" failed: target is readonly."), e), !0;
      }
    },
    zo = ut({}, Ar, {
      get: On,
      set: kn
    }),
    Vo = ut({}, Or, {
      get: Cn
    }),
    yt = function yt(e) {
      return ce(e) ? ke(e) : e;
    },
    xt = function xt(e) {
      return ce(e) ? Er(e) : e;
    },
    bt = function bt(e) {
      return e;
    },
    De = function De(e) {
      return Reflect.getPrototypeOf(e);
    };
  function Pe(e, t) {
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
    e = e.__v_raw;
    var i = g(e),
      o = g(t);
    t !== o && !r && E(i, "get", t), !r && E(i, "get", o);
    var _De = De(i),
      s = _De.has,
      a = n ? bt : r ? xt : yt;
    if (s.call(i, t)) return a(e.get(t));
    if (s.call(i, o)) return a(e.get(o));
    e !== i && e.get(t);
  }
  function Ie(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var r = this.__v_raw,
      n = g(r),
      i = g(e);
    return e !== i && !t && E(n, "has", e), !t && E(n, "has", i), e === i ? r.has(e) : r.has(e) || r.has(i);
  }
  function Le(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    return e = e.__v_raw, !t && E(g(e), "iterate", B), Reflect.get(e, "size", e);
  }
  function Tr(e) {
    e = g(e);
    var t = g(this);
    return De(t).has.call(t, e) || (t.add(e), $(t, "add", e, e)), this;
  }
  function Rr(e, t) {
    t = g(t);
    var r = g(this),
      _De2 = De(r),
      n = _De2.has,
      i = _De2.get,
      o = n.call(r, e);
    o ? Cr(r, n, e) : (e = g(e), o = n.call(r, e));
    var s = i.call(r, e);
    return r.set(e, t), o ? pt(t, s) && $(r, "set", e, t, s) : $(r, "add", e, t), this;
  }
  function Mr(e) {
    var t = g(this),
      _De3 = De(t),
      r = _De3.has,
      n = _De3.get,
      i = r.call(t, e);
    i ? Cr(t, r, e) : (e = g(e), i = r.call(t, e));
    var o = n ? n.call(t, e) : void 0,
      s = t["delete"](e);
    return i && $(t, "delete", e, void 0, o), s;
  }
  function Nr() {
    var e = g(this),
      t = e.size !== 0,
      r = Z(e) ? new Map(e) : new Set(e),
      n = e.clear();
    return t && $(e, "clear", void 0, void 0, r), n;
  }
  function $e(e, t) {
    return function (n, i) {
      var o = this,
        s = o.__v_raw,
        a = g(s),
        c = t ? bt : e ? xt : yt;
      return !e && E(a, "iterate", B), s.forEach(function (l, u) {
        return n.call(i, c(l), c(u), o);
      });
    };
  }
  function je(e, t, r) {
    return function () {
      var i = this.__v_raw,
        o = g(i),
        s = Z(o),
        a = e === "entries" || e === Symbol.iterator && s,
        c = e === "keys" && s,
        l = i[e].apply(i, arguments),
        u = r ? bt : t ? xt : yt;
      return !t && E(o, "iterate", c ? ht : B), _defineProperty({
        next: function next() {
          var _l$next = l.next(),
            d = _l$next.value,
            y = _l$next.done;
          return y ? {
            value: d,
            done: y
          } : {
            value: a ? [u(d[0]), u(d[1])] : u(d),
            done: y
          };
        }
      }, Symbol.iterator, function () {
        return this;
      });
    };
  }
  function j(e) {
    return function () {
      {
        var r = (arguments.length <= 0 ? undefined : arguments[0]) ? "on key \"".concat(arguments.length <= 0 ? undefined : arguments[0], "\" ") : "";
        console.warn("".concat(dt(e), " operation ").concat(r, "failed: target is readonly."), g(this));
      }
      return e === "delete" ? !1 : this;
    };
  }
  var kr = {
      get: function get(e) {
        return Pe(this, e);
      },
      get size() {
        return Le(this);
      },
      has: Ie,
      add: Tr,
      set: Rr,
      "delete": Mr,
      clear: Nr,
      forEach: $e(!1, !1)
    },
    Dr = {
      get: function get(e) {
        return Pe(this, e, !1, !0);
      },
      get size() {
        return Le(this);
      },
      has: Ie,
      add: Tr,
      set: Rr,
      "delete": Mr,
      clear: Nr,
      forEach: $e(!1, !0)
    },
    Pr = {
      get: function get(e) {
        return Pe(this, e, !0);
      },
      get size() {
        return Le(this, !0);
      },
      has: function has(e) {
        return Ie.call(this, e, !0);
      },
      add: j("add"),
      set: j("set"),
      "delete": j("delete"),
      clear: j("clear"),
      forEach: $e(!0, !1)
    },
    Ir = {
      get: function get(e) {
        return Pe(this, e, !0, !0);
      },
      get size() {
        return Le(this, !0);
      },
      has: function has(e) {
        return Ie.call(this, e, !0);
      },
      add: j("add"),
      set: j("set"),
      "delete": j("delete"),
      clear: j("clear"),
      forEach: $e(!0, !0)
    },
    Ln = ["keys", "values", "entries", Symbol.iterator];
  Ln.forEach(function (e) {
    kr[e] = je(e, !1, !1), Pr[e] = je(e, !0, !1), Dr[e] = je(e, !1, !0), Ir[e] = je(e, !0, !0);
  });
  function Fe(e, t) {
    var r = t ? e ? Ir : Dr : e ? Pr : kr;
    return function (n, i, o) {
      return i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(ae(r, i) && i in n ? r : n, i, o);
    };
  }
  var $n = {
      get: Fe(!1, !1)
    },
    Bo = {
      get: Fe(!1, !0)
    },
    jn = {
      get: Fe(!0, !1)
    },
    Ho = {
      get: Fe(!0, !0)
    };
  function Cr(e, t, r) {
    var n = g(r);
    if (n !== r && t.call(e, n)) {
      var i = ft(e);
      console.warn("Reactive ".concat(i, " contains both the raw and reactive versions of the same object").concat(i === "Map" ? " as keys" : "", ", which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible."));
    }
  }
  var vr = new WeakMap(),
    Rn = new WeakMap(),
    wr = new WeakMap(),
    Mn = new WeakMap();
  function Fn(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function Kn(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Fn(ft(e));
  }
  function ke(e) {
    return e && e.__v_isReadonly ? e : Lr(e, !1, Ar, $n, vr);
  }
  function Er(e) {
    return Lr(e, !0, Or, jn, wr);
  }
  function Lr(e, t, r, n, i) {
    if (!ce(e)) return console.warn("value cannot be made reactive: ".concat(String(e))), e;
    if (e.__v_raw && !(t && e.__v_isReactive)) return e;
    var o = i.get(e);
    if (o) return o;
    var s = Kn(e);
    if (s === 0) return e;
    var a = new Proxy(e, s === 2 ? n : r);
    return i.set(e, a), a;
  }
  function g(e) {
    return e && g(e.__v_raw) || e;
  }
  function _t(e) {
    return Boolean(e && e.__v_isRef === !0);
  }
  b("nextTick", function () {
    return J;
  });
  b("dispatch", function (e) {
    return K.bind(K, e);
  });
  b("watch", function (e) {
    return function (t, r) {
      var n = m(e, t),
        i = !0,
        o;
      M(function () {
        return n(function (s) {
          var a = document.createElement("div");
          a.dataset.throwAway = s, i ? o = s : queueMicrotask(function () {
            r(s, o), o = s;
          }), i = !1;
        });
      });
    };
  });
  b("store", lr);
  b("data", function (e) {
    return N(F(e));
  });
  b("root", function (e) {
    return P(e);
  });
  b("refs", function (e) {
    return e._x_refs_proxy || (e._x_refs_proxy = N(zn(e))), e._x_refs_proxy;
  });
  function zn(e) {
    var t = [],
      r = e;
    for (; r;) {
      r._x_refs && t.push(r._x_refs), r = r.parentNode;
    }
    return t;
  }
  b("el", function (e) {
    return e;
  });
  var $r = function $r() {};
  $r.inline = function (e, _ref30, _ref31) {
    var t = _ref30.modifiers;
    var r = _ref31.cleanup;
    t.includes("self") ? e._x_ignoreSelf = !0 : e._x_ignore = !0, r(function () {
      t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
    });
  };
  p("ignore", $r);
  p("effect", function (e, _ref32, _ref33) {
    var t = _ref32.expression;
    var r = _ref33.effect;
    return r(m(e, t));
  });
  function ue(e, t, r) {
    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    switch (e._x_bindings || (e._x_bindings = w({})), e._x_bindings[t] = r, t = n.includes("camel") ? Un(t) : t, t) {
      case "value":
        Vn(e, r);
        break;
      case "style":
        Hn(e, r);
        break;
      case "class":
        Bn(e, r);
        break;
      default:
        qn(e, t, r);
        break;
    }
  }
  function Vn(e, t) {
    if (e.type === "radio") e.attributes.value === void 0 && (e.value = t), window.fromModel && (e.checked = jr(e.value, t));else if (e.type === "checkbox") Number.isInteger(t) ? e.value = t : !Number.isInteger(t) && !Array.isArray(t) && typeof t != "boolean" && ![null, void 0].includes(t) ? e.value = String(t) : Array.isArray(t) ? e.checked = t.some(function (r) {
      return jr(r, e.value);
    }) : e.checked = !!t;else if (e.tagName === "SELECT") Wn(e, t);else {
      if (e.value === t) return;
      e.value = t;
    }
  }
  function Bn(e, t) {
    e._x_undoAddedClasses && e._x_undoAddedClasses(), e._x_undoAddedClasses = ie(e, t);
  }
  function Hn(e, t) {
    e._x_undoAddedStyles && e._x_undoAddedStyles(), e._x_undoAddedStyles = z(e, t);
  }
  function qn(e, t, r) {
    [null, void 0, !1].includes(r) && Jn(t) ? e.removeAttribute(t) : (Yn(t) && (r = t), Gn(e, t, r));
  }
  function Gn(e, t, r) {
    e.getAttribute(t) != r && e.setAttribute(t, r);
  }
  function Wn(e, t) {
    var r = [].concat(t).map(function (n) {
      return n + "";
    });
    Array.from(e.options).forEach(function (n) {
      n.selected = r.includes(n.value);
    });
  }
  function Un(e) {
    return e.toLowerCase().replace(/-(\w)/g, function (t, r) {
      return r.toUpperCase();
    });
  }
  function jr(e, t) {
    return e == t;
  }
  function Yn(e) {
    return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e);
  }
  function Jn(e) {
    return !["aria-pressed", "aria-checked", "aria-expanded"].includes(e);
  }
  function fe(e, t, r, n) {
    var i = e,
      o = function o(c) {
        return n(c);
      },
      s = {},
      a = function a(c, l) {
        return function (u) {
          return l(c, u);
        };
      };
    if (r.includes("dot") && (t = Zn(t)), r.includes("camel") && (t = Qn(t)), r.includes("passive") && (s.passive = !0), r.includes("capture") && (s.capture = !0), r.includes("window") && (i = window), r.includes("document") && (i = document), r.includes("prevent") && (o = a(o, function (c, l) {
      l.preventDefault(), c(l);
    })), r.includes("stop") && (o = a(o, function (c, l) {
      l.stopPropagation(), c(l);
    })), r.includes("self") && (o = a(o, function (c, l) {
      l.target === e && c(l);
    })), (r.includes("away") || r.includes("outside")) && (i = document, o = a(o, function (c, l) {
      e.contains(l.target) || e.offsetWidth < 1 && e.offsetHeight < 1 || e._x_isShown !== !1 && c(l);
    })), o = a(o, function (c, l) {
      Xn(t) && ei(l, r) || c(l);
    }), r.includes("debounce")) {
      var c = r[r.indexOf("debounce") + 1] || "invalid-wait",
        l = vt(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
      o = Ae(o, l);
    }
    if (r.includes("throttle")) {
      var _c = r[r.indexOf("throttle") + 1] || "invalid-wait",
        _l = vt(_c.split("ms")[0]) ? Number(_c.split("ms")[0]) : 250;
      o = Oe(o, _l);
    }
    return r.includes("once") && (o = a(o, function (c, l) {
      c(l), i.removeEventListener(t, o, s);
    })), i.addEventListener(t, o, s), function () {
      i.removeEventListener(t, o, s);
    };
  }
  function Zn(e) {
    return e.replace(/-/g, ".");
  }
  function Qn(e) {
    return e.toLowerCase().replace(/-(\w)/g, function (t, r) {
      return r.toUpperCase();
    });
  }
  function vt(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function ti(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
  }
  function Xn(e) {
    return ["keydown", "keyup"].includes(e);
  }
  function ei(e, t) {
    var r = t.filter(function (o) {
      return !["window", "document", "prevent", "stop", "once"].includes(o);
    });
    if (r.includes("debounce")) {
      var o = r.indexOf("debounce");
      r.splice(o, vt((r[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (r.length === 0 || r.length === 1 && Fr(e.key).includes(r[0])) return !1;
    var i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(function (o) {
      return r.includes(o);
    });
    return r = r.filter(function (o) {
      return !i.includes(o);
    }), !(i.length > 0 && i.filter(function (s) {
      return (s === "cmd" || s === "super") && (s = "meta"), e["".concat(s, "Key")];
    }).length === i.length && Fr(e.key).includes(r[0]));
  }
  function Fr(e) {
    if (!e) return [];
    e = ti(e);
    var t = {
      ctrl: "control",
      slash: "/",
      space: "-",
      spacebar: "-",
      cmd: "meta",
      esc: "escape",
      up: "arrow-up",
      down: "arrow-down",
      left: "arrow-left",
      right: "arrow-right",
      period: ".",
      equal: "="
    };
    return t[e] = e, Object.keys(t).map(function (r) {
      if (t[r] === e) return r;
    }).filter(function (r) {
      return r;
    });
  }
  p("model", function (e, _ref34, _ref35) {
    var t = _ref34.modifiers,
      r = _ref34.expression;
    var n = _ref35.effect,
      i = _ref35.cleanup;
    var o = m(e, r),
      s = "".concat(r, " = rightSideOfExpression($event, ").concat(r, ")"),
      a = m(e, s);
    var c = e.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input";
    var l = ri(e, t, r),
      u = fe(e, c, t, function (y) {
        a(function () {}, {
          scope: {
            $event: y,
            rightSideOfExpression: l
          }
        });
      });
    i(function () {
      return u();
    });
    var d = m(e, "".concat(r, " = __placeholder"));
    e._x_model = {
      get: function get() {
        var y;
        return o(function (C) {
          return y = C;
        }), y;
      },
      set: function set(y) {
        d(function () {}, {
          scope: {
            __placeholder: y
          }
        });
      }
    }, e._x_forceModelUpdate = function () {
      o(function (y) {
        y === void 0 && r.match(/\./) && (y = ""), window.fromModel = !0, h(function () {
          return ue(e, "value", y);
        }), delete window.fromModel;
      });
    }, n(function () {
      t.includes("unintrusive") && document.activeElement.isSameNode(e) || e._x_forceModelUpdate();
    });
  });
  function ri(e, t, r) {
    return e.type === "radio" && h(function () {
      e.hasAttribute("name") || e.setAttribute("name", r);
    }), function (n, i) {
      return h(function () {
        if (n instanceof CustomEvent && n.detail !== void 0) return n.detail || n.target.value;
        if (e.type === "checkbox") {
          if (Array.isArray(i)) {
            var o = t.includes("number") ? wt(n.target.value) : n.target.value;
            return n.target.checked ? i.concat([o]) : i.filter(function (s) {
              return !ni(s, o);
            });
          } else return n.target.checked;
        } else {
          if (e.tagName.toLowerCase() === "select" && e.multiple) return t.includes("number") ? Array.from(n.target.selectedOptions).map(function (o) {
            var s = o.value || o.text;
            return wt(s);
          }) : Array.from(n.target.selectedOptions).map(function (o) {
            return o.value || o.text;
          });
          {
            var _o = n.target.value;
            return t.includes("number") ? wt(_o) : t.includes("trim") ? _o.trim() : _o;
          }
        }
      });
    };
  }
  function wt(e) {
    var t = e ? parseFloat(e) : null;
    return ii(t) ? t : e;
  }
  function ni(e, t) {
    return e == t;
  }
  function ii(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  p("cloak", function (e) {
    return queueMicrotask(function () {
      return h(function () {
        return e.removeAttribute(A("cloak"));
      });
    });
  });
  tr(function () {
    return "[".concat(A("init"), "]");
  });
  p("init", I(function (e, _ref36) {
    var t = _ref36.expression;
    return typeof t == "string" ? !!t.trim() && v(e, t, {}, !1) : v(e, t, {}, !1);
  }));
  p("text", function (e, _ref37, _ref38) {
    var t = _ref37.expression;
    var r = _ref38.effect,
      n = _ref38.evaluateLater;
    var i = n(t);
    r(function () {
      i(function (o) {
        h(function () {
          e.textContent = o;
        });
      });
    });
  });
  p("html", function (e, _ref39, _ref40) {
    var t = _ref39.expression;
    var r = _ref40.effect,
      n = _ref40.evaluateLater;
    var i = n(t);
    r(function () {
      i(function (o) {
        e.innerHTML = o;
      });
    });
  });
  Y(ye(":", xe(A("bind:"))));
  p("bind", function (e, _ref41, _ref42) {
    var t = _ref41.value,
      r = _ref41.modifiers,
      n = _ref41.expression,
      i = _ref41.original;
    var o = _ref42.effect;
    if (!t) return oi(e, n, i, o);
    if (t === "key") return si(e, n);
    var s = m(e, n);
    o(function () {
      return s(function (a) {
        a === void 0 && n.match(/\./) && (a = ""), h(function () {
          return ue(e, t, a, r);
        });
      });
    });
  });
  function oi(e, t, r, n) {
    var i = m(e, t),
      o = [];
    n(function () {
      for (; o.length;) {
        o.pop()();
      }
      i(function (s) {
        var a = Object.entries(s).map(function (_ref43) {
          var _ref44 = _slicedToArray(_ref43, 2),
            l = _ref44[0],
            u = _ref44[1];
          return {
            name: l,
            value: u
          };
        });
        a = a.filter(function (l) {
          return !(_typeof(l.value) == "object" && !Array.isArray(l.value) && l.value !== null);
        });
        var c = qt(a);
        a = a.map(function (l) {
          return c.find(function (u) {
            return u.name === l.name;
          }) ? {
            name: "x-bind:".concat(l.name),
            value: "\"".concat(l.value, "\"")
          } : l;
        }), re(e, a, r).map(function (l) {
          o.push(l.runCleanups), l();
        });
      });
    });
  }
  function si(e, t) {
    e._x_keyExpression = t;
  }
  Ee(function () {
    return "[".concat(A("data"), "]");
  });
  p("data", I(function (e, _ref45, _ref46) {
    var t = _ref45.expression;
    var r = _ref46.cleanup;
    t = t === "" ? "{}" : t;
    var n = {};
    te(n, e);
    var i = {};
    pr(i, n);
    var o = v(e, t, {
      scope: i
    });
    o === void 0 && (o = {}), te(o, e);
    var s = w(o);
    he(s);
    var a = W(e, s);
    s.init && v(e, s.init), r(function () {
      a(), s.destroy && v(e, s.destroy);
    });
  }));
  p("show", function (e, _ref47, _ref48) {
    var t = _ref47.modifiers,
      r = _ref47.expression;
    var n = _ref48.effect;
    var i = m(e, r),
      o = function o() {
        return h(function () {
          e.style.display = "none", e._x_isShown = !1;
        });
      },
      s = function s() {
        return h(function () {
          e.style.length === 1 && e.style.display === "none" ? e.removeAttribute("style") : e.style.removeProperty("display"), e._x_isShown = !0;
        });
      },
      a = function a() {
        return setTimeout(s);
      },
      c = oe(function (d) {
        return d ? s() : o();
      }, function (d) {
        typeof e._x_toggleAndCascadeWithTransitions == "function" ? e._x_toggleAndCascadeWithTransitions(e, d, s, o) : d ? a() : o();
      }),
      l,
      u = !0;
    n(function () {
      return i(function (d) {
        !u && d === l || (t.includes("immediate") && (d ? a() : o()), c(d), l = d, u = !1);
      });
    });
  });
  p("for", function (e, _ref49, _ref50) {
    var t = _ref49.expression;
    var r = _ref50.effect,
      n = _ref50.cleanup;
    var i = ci(t),
      o = m(e, i.items),
      s = m(e, e._x_keyExpression || "index");
    e._x_prevKeys = [], e._x_lookup = {}, r(function () {
      return ai(e, i, o, s);
    }), n(function () {
      Object.values(e._x_lookup).forEach(function (a) {
        return a.remove();
      }), delete e._x_prevKeys, delete e._x_lookup;
    });
  });
  function ai(e, t, r, n) {
    var i = function i(s) {
        return _typeof(s) == "object" && !Array.isArray(s);
      },
      o = e;
    r(function (s) {
      li(s) && s >= 0 && (s = Array.from(Array(s).keys(), function (f) {
        return f + 1;
      })), s === void 0 && (s = []);
      var a = e._x_lookup,
        c = e._x_prevKeys,
        l = [],
        u = [];
      if (i(s)) s = Object.entries(s).map(function (_ref51) {
        var _ref52 = _slicedToArray(_ref51, 2),
          f = _ref52[0],
          _ = _ref52[1];
        var x = Kr(t, _, f, s);
        n(function (R) {
          return u.push(R);
        }, {
          scope: _objectSpread({
            index: f
          }, x)
        }), l.push(x);
      });else for (var f = 0; f < s.length; f++) {
        var _ = Kr(t, s[f], f, s);
        n(function (x) {
          return u.push(x);
        }, {
          scope: _objectSpread({
            index: f
          }, _)
        }), l.push(_);
      }
      var d = [],
        y = [],
        C = [],
        H = [];
      for (var _f = 0; _f < c.length; _f++) {
        var _2 = c[_f];
        u.indexOf(_2) === -1 && C.push(_2);
      }
      c = c.filter(function (f) {
        return !C.includes(f);
      });
      var de = "template";
      for (var _f2 = 0; _f2 < u.length; _f2++) {
        var _3 = u[_f2],
          x = c.indexOf(_3);
        if (x === -1) c.splice(_f2, 0, _3), d.push([de, _f2]);else if (x !== _f2) {
          var R = c.splice(_f2, 1)[0],
            k = c.splice(x - 1, 1)[0];
          c.splice(_f2, 0, k), c.splice(x, 0, R), y.push([R, k]);
        } else H.push(_3);
        de = _3;
      }
      for (var _f3 = 0; _f3 < C.length; _f3++) {
        var _4 = C[_f3];
        a[_4].remove(), a[_4] = null, delete a[_4];
      }
      var _loop3 = function _loop3(_f4) {
        var _y$_f = _slicedToArray(y[_f4], 2),
          _ = _y$_f[0],
          x = _y$_f[1],
          R = a[_],
          k = a[x],
          q = document.createElement("div");
        h(function () {
          k.after(q), R.after(k), q.before(R), q.remove();
        }), Qe(k, l[u.indexOf(x)]);
      };
      for (var _f4 = 0; _f4 < y.length; _f4++) {
        _loop3(_f4);
      }
      var _loop4 = function _loop4(_f5) {
        var _d$_f = _slicedToArray(d[_f5], 2),
          _ = _d$_f[0],
          x = _d$_f[1],
          R = _ === "template" ? o : a[_],
          k = l[x],
          q = u[x],
          pe = document.importNode(o.content, !0).firstElementChild;
        W(pe, w(k), o), h(function () {
          R.after(pe), O(pe);
        }), _typeof(q) == "object" && we("x-for key cannot be an object, it must be a string or an integer", o), a[q] = pe;
      };
      for (var _f5 = 0; _f5 < d.length; _f5++) {
        _loop4(_f5);
      }
      for (var _f6 = 0; _f6 < H.length; _f6++) {
        Qe(a[H[_f6]], l[u.indexOf(H[_f6])]);
      }
      o._x_prevKeys = u;
    });
  }
  function ci(e) {
    var t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
      r = /^\s*\(|\)\s*$/g,
      n = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
      i = e.match(n);
    if (!i) return;
    var o = {};
    o.items = i[2].trim();
    var s = i[1].replace(r, "").trim(),
      a = s.match(t);
    return a ? (o.item = s.replace(t, "").trim(), o.index = a[1].trim(), a[2] && (o.collection = a[2].trim())) : o.item = s, o;
  }
  function Kr(e, t, r, n) {
    var i = {};
    return /^\[.*\]$/.test(e.item) && Array.isArray(t) ? e.item.replace("[", "").replace("]", "").split(",").map(function (s) {
      return s.trim();
    }).forEach(function (s, a) {
      i[s] = t[a];
    }) : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && _typeof(t) == "object" ? e.item.replace("{", "").replace("}", "").split(",").map(function (s) {
      return s.trim();
    }).forEach(function (s) {
      i[s] = t[s];
    }) : i[e.item] = t, e.index && (i[e.index] = r), e.collection && (i[e.collection] = n), i;
  }
  function li(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function zr() {}
  zr.inline = function (e, _ref53, _ref54) {
    var t = _ref53.expression;
    var r = _ref54.cleanup;
    var n = P(e);
    n._x_refs || (n._x_refs = {}), n._x_refs[t] = e, r(function () {
      return delete n._x_refs[t];
    });
  };
  p("ref", zr);
  p("if", function (e, _ref55, _ref56) {
    var t = _ref55.expression;
    var r = _ref56.effect,
      n = _ref56.cleanup;
    var i = m(e, t),
      o = function o() {
        if (e._x_currentIfEl) return e._x_currentIfEl;
        var a = e.content.cloneNode(!0).firstElementChild;
        return W(a, {}, e), h(function () {
          e.after(a), O(a);
        }), e._x_currentIfEl = a, e._x_undoIf = function () {
          a.remove(), delete e._x_currentIfEl;
        }, a;
      },
      s = function s() {
        !e._x_undoIf || (e._x_undoIf(), delete e._x_undoIf);
      };
    r(function () {
      return i(function (a) {
        a ? o() : s();
      });
    }), n(function () {
      return e._x_undoIf && e._x_undoIf();
    });
  });
  Y(ye("@", xe(A("on:"))));
  p("on", I(function (e, _ref57, _ref58) {
    var t = _ref57.value,
      r = _ref57.modifiers,
      n = _ref57.expression;
    var i = _ref58.cleanup;
    var o = n ? m(e, n) : function () {},
      s = fe(e, t, r, function (a) {
        o(function () {}, {
          scope: {
            $event: a
          },
          params: [a]
        });
      });
    i(function () {
      return s();
    });
  }));
  S.setEvaluator(et);
  S.setReactivityEngine({
    reactive: ke,
    effect: gr,
    release: yr,
    raw: g
  });
  var Et = S;
  window.Alpine = Et;
  queueMicrotask(function () {
    Et.start();
  });
})();
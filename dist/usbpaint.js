var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var check = function(it) {
  return it && it.Math === Math && it;
};
var globalThis_1 = (
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == "object" && self) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
);
var objectGetOwnPropertyDescriptor = {};
var fails$j = function(exec2) {
  try {
    return !!exec2();
  } catch (error) {
    return true;
  }
};
var fails$i = fails$j;
var descriptors = !fails$i(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
});
var fails$h = fails$j;
var functionBindNative = !fails$h(function() {
  var test2 = (function() {
  }).bind();
  return typeof test2 != "function" || test2.hasOwnProperty("prototype");
});
var NATIVE_BIND$3 = functionBindNative;
var call$h = Function.prototype.call;
var functionCall = NATIVE_BIND$3 ? call$h.bind(call$h) : function() {
  return call$h.apply(call$h, arguments);
};
var objectPropertyIsEnumerable = {};
var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V2) {
  var descriptor = getOwnPropertyDescriptor$2(this, V2);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$1;
var createPropertyDescriptor$7 = function(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value
  };
};
var NATIVE_BIND$2 = functionBindNative;
var FunctionPrototype$2 = Function.prototype;
var call$g = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$g, call$g);
var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function(fn) {
  return function() {
    return call$g.apply(fn, arguments);
  };
};
var uncurryThis$k = functionUncurryThis;
var toString$9 = uncurryThis$k({}.toString);
var stringSlice$3 = uncurryThis$k("".slice);
var classofRaw$2 = function(it) {
  return stringSlice$3(toString$9(it), 8, -1);
};
var uncurryThis$j = functionUncurryThis;
var fails$g = fails$j;
var classof$9 = classofRaw$2;
var $Object$4 = Object;
var split = uncurryThis$j("".split);
var indexedObject = fails$g(function() {
  return !$Object$4("z").propertyIsEnumerable(0);
}) ? function(it) {
  return classof$9(it) === "String" ? split(it, "") : $Object$4(it);
} : $Object$4;
var isNullOrUndefined$4 = function(it) {
  return it === null || it === void 0;
};
var isNullOrUndefined$3 = isNullOrUndefined$4;
var $TypeError$d = TypeError;
var requireObjectCoercible$4 = function(it) {
  if (isNullOrUndefined$3(it)) throw new $TypeError$d("Can't call method on " + it);
  return it;
};
var IndexedObject$1 = indexedObject;
var requireObjectCoercible$3 = requireObjectCoercible$4;
var toIndexedObject$7 = function(it) {
  return IndexedObject$1(requireObjectCoercible$3(it));
};
var documentAll = typeof document == "object" && document.all;
var isCallable$n = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
  return typeof argument == "function" || argument === documentAll;
} : function(argument) {
  return typeof argument == "function";
};
var isCallable$m = isCallable$n;
var isObject$d = function(it) {
  return typeof it == "object" ? it !== null : isCallable$m(it);
};
var globalThis$p = globalThis_1;
var isCallable$l = isCallable$n;
var aFunction = function(argument) {
  return isCallable$l(argument) ? argument : void 0;
};
var getBuiltIn$d = function(namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis$p[namespace]) : globalThis$p[namespace] && globalThis$p[namespace][method];
};
var uncurryThis$i = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$i({}.isPrototypeOf);
var globalThis$o = globalThis_1;
var navigator = globalThis$o.navigator;
var userAgent$5 = navigator && navigator.userAgent;
var environmentUserAgent = userAgent$5 ? String(userAgent$5) : "";
var globalThis$n = globalThis_1;
var userAgent$4 = environmentUserAgent;
var process$3 = globalThis$n.process;
var Deno$1 = globalThis$n.Deno;
var versions = process$3 && process$3.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
  match = v8.split(".");
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
if (!version && userAgent$4) {
  match = userAgent$4.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$4.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}
var environmentV8Version = version;
var V8_VERSION$3 = environmentV8Version;
var fails$f = fails$j;
var globalThis$m = globalThis_1;
var $String$6 = globalThis$m.String;
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$f(function() {
  var symbol = Symbol("symbol detection");
  return !$String$6(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
});
var NATIVE_SYMBOL$6 = symbolConstructorDetection;
var useSymbolAsUid = NATIVE_SYMBOL$6 && !Symbol.sham && typeof Symbol.iterator == "symbol";
var getBuiltIn$c = getBuiltIn$d;
var isCallable$k = isCallable$n;
var isPrototypeOf$5 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var $Object$3 = Object;
var isSymbol$4 = USE_SYMBOL_AS_UID$1 ? function(it) {
  return typeof it == "symbol";
} : function(it) {
  var $Symbol2 = getBuiltIn$c("Symbol");
  return isCallable$k($Symbol2) && isPrototypeOf$5($Symbol2.prototype, $Object$3(it));
};
var $String$5 = String;
var tryToString$5 = function(argument) {
  try {
    return $String$5(argument);
  } catch (error) {
    return "Object";
  }
};
var isCallable$j = isCallable$n;
var tryToString$4 = tryToString$5;
var $TypeError$c = TypeError;
var aCallable$b = function(argument) {
  if (isCallable$j(argument)) return argument;
  throw new $TypeError$c(tryToString$4(argument) + " is not a function");
};
var aCallable$a = aCallable$b;
var isNullOrUndefined$2 = isNullOrUndefined$4;
var getMethod$3 = function(V2, P) {
  var func = V2[P];
  return isNullOrUndefined$2(func) ? void 0 : aCallable$a(func);
};
var call$f = functionCall;
var isCallable$i = isCallable$n;
var isObject$c = isObject$d;
var $TypeError$b = TypeError;
var ordinaryToPrimitive$1 = function(input, pref) {
  var fn, val;
  if (pref === "string" && isCallable$i(fn = input.toString) && !isObject$c(val = call$f(fn, input))) return val;
  if (isCallable$i(fn = input.valueOf) && !isObject$c(val = call$f(fn, input))) return val;
  if (pref !== "string" && isCallable$i(fn = input.toString) && !isObject$c(val = call$f(fn, input))) return val;
  throw new $TypeError$b("Can't convert object to primitive value");
};
var sharedStore = { exports: {} };
var globalThis$l = globalThis_1;
var defineProperty$6 = Object.defineProperty;
var defineGlobalProperty$3 = function(key, value) {
  try {
    defineProperty$6(globalThis$l, key, { value, configurable: true, writable: true });
  } catch (error) {
    globalThis$l[key] = value;
  }
  return value;
};
var globalThis$k = globalThis_1;
var defineGlobalProperty$2 = defineGlobalProperty$3;
var SHARED = "__core-js_shared__";
var store$3 = sharedStore.exports = globalThis$k[SHARED] || defineGlobalProperty$2(SHARED, {});
(store$3.versions || (store$3.versions = [])).push({
  version: "3.39.0",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var sharedStoreExports = sharedStore.exports;
var store$2 = sharedStoreExports;
var shared$6 = function(key, value) {
  return store$2[key] || (store$2[key] = value || {});
};
var requireObjectCoercible$2 = requireObjectCoercible$4;
var $Object$2 = Object;
var toObject$5 = function(argument) {
  return $Object$2(requireObjectCoercible$2(argument));
};
var uncurryThis$h = functionUncurryThis;
var toObject$4 = toObject$5;
var hasOwnProperty = uncurryThis$h({}.hasOwnProperty);
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$4(it), key);
};
var uncurryThis$g = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString$8 = uncurryThis$g(1 .toString);
var uid$3 = function(key) {
  return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString$8(++id + postfix, 36);
};
var globalThis$j = globalThis_1;
var shared$5 = shared$6;
var hasOwn$e = hasOwnProperty_1;
var uid$2 = uid$3;
var NATIVE_SYMBOL$5 = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var Symbol$1 = globalThis$j.Symbol;
var WellKnownSymbolsStore$1 = shared$5("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1["for"] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$2;
var wellKnownSymbol$l = function(name) {
  if (!hasOwn$e(WellKnownSymbolsStore$1, name)) {
    WellKnownSymbolsStore$1[name] = NATIVE_SYMBOL$5 && hasOwn$e(Symbol$1, name) ? Symbol$1[name] : createWellKnownSymbol("Symbol." + name);
  }
  return WellKnownSymbolsStore$1[name];
};
var call$e = functionCall;
var isObject$b = isObject$d;
var isSymbol$3 = isSymbol$4;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$k = wellKnownSymbol$l;
var $TypeError$a = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$k("toPrimitive");
var toPrimitive$1 = function(input, pref) {
  if (!isObject$b(input) || isSymbol$3(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === void 0) pref = "default";
    result = call$e(exoticToPrim, input, pref);
    if (!isObject$b(result) || isSymbol$3(result)) return result;
    throw new $TypeError$a("Can't convert object to primitive value");
  }
  if (pref === void 0) pref = "number";
  return ordinaryToPrimitive(input, pref);
};
var toPrimitive = toPrimitive$1;
var isSymbol$2 = isSymbol$4;
var toPropertyKey$3 = function(argument) {
  var key = toPrimitive(argument, "string");
  return isSymbol$2(key) ? key : key + "";
};
var globalThis$i = globalThis_1;
var isObject$a = isObject$d;
var document$3 = globalThis$i.document;
var EXISTS$1 = isObject$a(document$3) && isObject$a(document$3.createElement);
var documentCreateElement$2 = function(it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};
var DESCRIPTORS$d = descriptors;
var fails$e = fails$j;
var createElement$1 = documentCreateElement$2;
var ie8DomDefine = !DESCRIPTORS$d && !fails$e(function() {
  return Object.defineProperty(createElement$1("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
});
var DESCRIPTORS$c = descriptors;
var call$d = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$6 = createPropertyDescriptor$7;
var toIndexedObject$6 = toIndexedObject$7;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$d = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$c ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$6(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$2(O, P);
  } catch (error) {
  }
  if (hasOwn$d(O, P)) return createPropertyDescriptor$6(!call$d(propertyIsEnumerableModule$1.f, O, P), O[P]);
};
var objectDefineProperty = {};
var DESCRIPTORS$b = descriptors;
var fails$d = fails$j;
var v8PrototypeDefineBug = DESCRIPTORS$b && fails$d(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: false
  }).prototype !== 42;
});
var isObject$9 = isObject$d;
var $String$4 = String;
var $TypeError$9 = TypeError;
var anObject$a = function(argument) {
  if (isObject$9(argument)) return argument;
  throw new $TypeError$9($String$4(argument) + " is not an object");
};
var DESCRIPTORS$a = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$9 = anObject$a;
var toPropertyKey$1 = toPropertyKey$3;
var $TypeError$8 = TypeError;
var $defineProperty$1 = Object.defineProperty;
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE$1 = "configurable";
var WRITABLE = "writable";
objectDefineProperty.f = DESCRIPTORS$a ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$9(O);
  P = toPropertyKey$1(P);
  anObject$9(Attributes);
  if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }
  return $defineProperty$1(O, P, Attributes);
} : $defineProperty$1 : function defineProperty2(O, P, Attributes) {
  anObject$9(O);
  P = toPropertyKey$1(P);
  anObject$9(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty$1(O, P, Attributes);
  } catch (error) {
  }
  if ("get" in Attributes || "set" in Attributes) throw new $TypeError$8("Accessors not supported");
  if ("value" in Attributes) O[P] = Attributes.value;
  return O;
};
var DESCRIPTORS$9 = descriptors;
var definePropertyModule$5 = objectDefineProperty;
var createPropertyDescriptor$5 = createPropertyDescriptor$7;
var createNonEnumerableProperty$7 = DESCRIPTORS$9 ? function(object, key, value) {
  return definePropertyModule$5.f(object, key, createPropertyDescriptor$5(1, value));
} : function(object, key, value) {
  object[key] = value;
  return object;
};
var makeBuiltIn$3 = { exports: {} };
var DESCRIPTORS$8 = descriptors;
var hasOwn$c = hasOwnProperty_1;
var FunctionPrototype$1 = Function.prototype;
var getDescriptor = DESCRIPTORS$8 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$c(FunctionPrototype$1, "name");
var PROPER = EXISTS && (function something() {
}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$8 || DESCRIPTORS$8 && getDescriptor(FunctionPrototype$1, "name").configurable);
var functionName = {
  EXISTS,
  PROPER,
  CONFIGURABLE
};
var uncurryThis$f = functionUncurryThis;
var isCallable$h = isCallable$n;
var store$1 = sharedStoreExports;
var functionToString = uncurryThis$f(Function.toString);
if (!isCallable$h(store$1.inspectSource)) {
  store$1.inspectSource = function(it) {
    return functionToString(it);
  };
}
var inspectSource$3 = store$1.inspectSource;
var globalThis$h = globalThis_1;
var isCallable$g = isCallable$n;
var WeakMap$1 = globalThis$h.WeakMap;
var weakMapBasicDetection = isCallable$g(WeakMap$1) && /native code/.test(String(WeakMap$1));
var shared$4 = shared$6;
var uid$1 = uid$3;
var keys = shared$4("keys");
var sharedKey$4 = function(key) {
  return keys[key] || (keys[key] = uid$1(key));
};
var hiddenKeys$5 = {};
var NATIVE_WEAK_MAP = weakMapBasicDetection;
var globalThis$g = globalThis_1;
var isObject$8 = isObject$d;
var createNonEnumerableProperty$6 = createNonEnumerableProperty$7;
var hasOwn$b = hasOwnProperty_1;
var shared$3 = sharedStoreExports;
var sharedKey$3 = sharedKey$4;
var hiddenKeys$4 = hiddenKeys$5;
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError$3 = globalThis$g.TypeError;
var WeakMap = globalThis$g.WeakMap;
var set$1, get, has;
var enforce = function(it) {
  return has(it) ? get(it) : set$1(it, {});
};
var getterFor = function(TYPE) {
  return function(it) {
    var state;
    if (!isObject$8(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError$3("Incompatible receiver, " + TYPE + " required");
    }
    return state;
  };
};
if (NATIVE_WEAK_MAP || shared$3.state) {
  var store = shared$3.state || (shared$3.state = new WeakMap());
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  set$1 = function(it, metadata) {
    if (store.has(it)) throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function(it) {
    return store.get(it) || {};
  };
  has = function(it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey$3("state");
  hiddenKeys$4[STATE] = true;
  set$1 = function(it, metadata) {
    if (hasOwn$b(it, STATE)) throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$6(it, STATE, metadata);
    return metadata;
  };
  get = function(it) {
    return hasOwn$b(it, STATE) ? it[STATE] : {};
  };
  has = function(it) {
    return hasOwn$b(it, STATE);
  };
}
var internalState = {
  set: set$1,
  get,
  has,
  enforce,
  getterFor
};
var uncurryThis$e = functionUncurryThis;
var fails$c = fails$j;
var isCallable$f = isCallable$n;
var hasOwn$a = hasOwnProperty_1;
var DESCRIPTORS$7 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$4 = internalState;
var enforceInternalState = InternalStateModule$4.enforce;
var getInternalState$3 = InternalStateModule$4.get;
var $String$3 = String;
var defineProperty$5 = Object.defineProperty;
var stringSlice$2 = uncurryThis$e("".slice);
var replace$3 = uncurryThis$e("".replace);
var join = uncurryThis$e([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS$7 && !fails$c(function() {
  return defineProperty$5(function() {
  }, "length", { value: 8 }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn$2 = makeBuiltIn$3.exports = function(value, name, options) {
  if (stringSlice$2($String$3(name), 0, 7) === "Symbol(") {
    name = "[" + replace$3($String$3(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
  }
  if (options && options.getter) name = "get " + name;
  if (options && options.setter) name = "set " + name;
  if (!hasOwn$a(value, "name") || CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name) {
    if (DESCRIPTORS$7) defineProperty$5(value, "name", { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$a(options, "arity") && value.length !== options.arity) {
    defineProperty$5(value, "length", { value: options.arity });
  }
  try {
    if (options && hasOwn$a(options, "constructor") && options.constructor) {
      if (DESCRIPTORS$7) defineProperty$5(value, "prototype", { writable: false });
    } else if (value.prototype) value.prototype = void 0;
  } catch (error) {
  }
  var state = enforceInternalState(value);
  if (!hasOwn$a(state, "source")) {
    state.source = join(TEMPLATE, typeof name == "string" ? name : "");
  }
  return value;
};
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$f(this) && getInternalState$3(this).source || inspectSource$2(this);
}, "toString");
var makeBuiltInExports = makeBuiltIn$3.exports;
var isCallable$e = isCallable$n;
var definePropertyModule$4 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltInExports;
var defineGlobalProperty$1 = defineGlobalProperty$3;
var defineBuiltIn$9 = function(O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== void 0 ? options.name : key;
  if (isCallable$e(value)) makeBuiltIn$1(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) {
    }
    if (simple) O[key] = value;
    else definePropertyModule$4.f(O, key, {
      value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  }
  return O;
};
var objectGetOwnPropertyNames = {};
var ceil = Math.ceil;
var floor = Math.floor;
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};
var trunc2 = mathTrunc;
var toIntegerOrInfinity$3 = function(argument) {
  var number = +argument;
  return number !== number || number === 0 ? 0 : trunc2(number);
};
var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;
var max = Math.max;
var min$1 = Math.min;
var toAbsoluteIndex$1 = function(index, length) {
  var integer = toIntegerOrInfinity$2(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};
var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;
var min = Math.min;
var toLength$1 = function(argument) {
  var len = toIntegerOrInfinity$1(argument);
  return len > 0 ? min(len, 9007199254740991) : 0;
};
var toLength = toLength$1;
var lengthOfArrayLike$4 = function(obj) {
  return toLength(obj.length);
};
var toIndexedObject$5 = toIndexedObject$7;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$3 = lengthOfArrayLike$4;
var createMethod$2 = function(IS_INCLUDES) {
  return function($this, el, fromIndex) {
    var O = toIndexedObject$5($this);
    var length = lengthOfArrayLike$3(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      if (value !== value) return true;
    }
    else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};
var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$2(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$2(false)
};
var uncurryThis$d = functionUncurryThis;
var hasOwn$9 = hasOwnProperty_1;
var toIndexedObject$4 = toIndexedObject$7;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$5;
var push$4 = uncurryThis$d([].push);
var objectKeysInternal = function(object, names) {
  var O = toIndexedObject$4(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$9(hiddenKeys$3, key) && hasOwn$9(O, key) && push$4(result, key);
  while (names.length > i) if (hasOwn$9(O, key = names[i++])) {
    ~indexOf(result, key) || push$4(result, key);
  }
  return result;
};
var enumBugKeys$3 = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
];
var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;
var hiddenKeys$2 = enumBugKeys$2.concat("length", "prototype");
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$2);
};
var objectGetOwnPropertySymbols = {};
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
var getBuiltIn$b = getBuiltIn$d;
var uncurryThis$c = functionUncurryThis;
var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
var anObject$8 = anObject$a;
var concat = uncurryThis$c([].concat);
var ownKeys$1 = getBuiltIn$b("Reflect", "ownKeys") || function ownKeys(it) {
  var keys3 = getOwnPropertyNamesModule$1.f(anObject$8(it));
  var getOwnPropertySymbols2 = getOwnPropertySymbolsModule$2.f;
  return getOwnPropertySymbols2 ? concat(keys3, getOwnPropertySymbols2(it)) : keys3;
};
var hasOwn$8 = hasOwnProperty_1;
var ownKeys2 = ownKeys$1;
var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
var definePropertyModule$3 = objectDefineProperty;
var copyConstructorProperties$3 = function(target, source, exceptions) {
  var keys3 = ownKeys2(source);
  var defineProperty5 = definePropertyModule$3.f;
  var getOwnPropertyDescriptor4 = getOwnPropertyDescriptorModule$1.f;
  for (var i = 0; i < keys3.length; i++) {
    var key = keys3[i];
    if (!hasOwn$8(target, key) && !(exceptions && hasOwn$8(exceptions, key))) {
      defineProperty5(target, key, getOwnPropertyDescriptor4(source, key));
    }
  }
};
var fails$b = fails$j;
var isCallable$d = isCallable$n;
var replacement = /#|\.prototype\./;
var isForced$2 = function(feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true : value === NATIVE ? false : isCallable$d(detection) ? fails$b(detection) : !!detection;
};
var normalize = isForced$2.normalize = function(string) {
  return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = "N";
var POLYFILL = isForced$2.POLYFILL = "P";
var isForced_1 = isForced$2;
var globalThis$f = globalThis_1;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$7;
var defineBuiltIn$8 = defineBuiltIn$9;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties$2 = copyConstructorProperties$3;
var isForced$1 = isForced_1;
var _export = function(options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED2, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis$f;
  } else if (STATIC) {
    target = globalThis$f[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis$f[TARGET] && globalThis$f[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED2 = isForced$1(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
    if (!FORCED2 && targetProperty !== void 0) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties$2(sourceProperty, targetProperty);
    }
    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty$5(sourceProperty, "sham", true);
    }
    defineBuiltIn$8(target, key, sourceProperty, options);
  }
};
var classof$8 = classofRaw$2;
var isArray$3 = Array.isArray || function isArray(argument) {
  return classof$8(argument) === "Array";
};
var $TypeError$7 = TypeError;
var MAX_SAFE_INTEGER = 9007199254740991;
var doesNotExceedSafeInteger$1 = function(it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError$7("Maximum allowed index exceeded");
  return it;
};
var DESCRIPTORS$6 = descriptors;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor$4 = createPropertyDescriptor$7;
var createProperty$1 = function(object, key, value) {
  if (DESCRIPTORS$6) definePropertyModule$2.f(object, key, createPropertyDescriptor$4(0, value));
  else object[key] = value;
};
var wellKnownSymbol$j = wellKnownSymbol$l;
var TO_STRING_TAG$3 = wellKnownSymbol$j("toStringTag");
var test = {};
test[TO_STRING_TAG$3] = "z";
var toStringTagSupport = String(test) === "[object z]";
var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$c = isCallable$n;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$i = wellKnownSymbol$l;
var TO_STRING_TAG$2 = wellKnownSymbol$i("toStringTag");
var $Object$1 = Object;
var CORRECT_ARGUMENTS = classofRaw$1(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments";
var tryGet = function(it, key) {
  try {
    return it[key];
  } catch (error) {
  }
};
var classof$7 = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function(it) {
  var O, tag, result;
  return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$2)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw$1(O) : (result = classofRaw$1(O)) === "Object" && isCallable$c(O.callee) ? "Arguments" : result;
};
var uncurryThis$b = functionUncurryThis;
var fails$a = fails$j;
var isCallable$b = isCallable$n;
var classof$6 = classof$7;
var getBuiltIn$a = getBuiltIn$d;
var inspectSource$1 = inspectSource$3;
var noop$1 = function() {
};
var construct = getBuiltIn$a("Reflect", "construct");
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$1 = uncurryThis$b(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop$1);
var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$b(argument)) return false;
  try {
    construct(noop$1, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};
var isConstructorLegacy = function isConstructor2(argument) {
  if (!isCallable$b(argument)) return false;
  switch (classof$6(argument)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};
isConstructorLegacy.sham = true;
var isConstructor$2 = !construct || fails$a(function() {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;
var isArray$2 = isArray$3;
var isConstructor$1 = isConstructor$2;
var isObject$7 = isObject$d;
var wellKnownSymbol$h = wellKnownSymbol$l;
var SPECIES$4 = wellKnownSymbol$h("species");
var $Array = Array;
var arraySpeciesConstructor$1 = function(originalArray) {
  var C2;
  if (isArray$2(originalArray)) {
    C2 = originalArray.constructor;
    if (isConstructor$1(C2) && (C2 === $Array || isArray$2(C2.prototype))) C2 = void 0;
    else if (isObject$7(C2)) {
      C2 = C2[SPECIES$4];
      if (C2 === null) C2 = void 0;
    }
  }
  return C2 === void 0 ? $Array : C2;
};
var arraySpeciesConstructor = arraySpeciesConstructor$1;
var arraySpeciesCreate$2 = function(originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};
var fails$9 = fails$j;
var wellKnownSymbol$g = wellKnownSymbol$l;
var V8_VERSION$2 = environmentV8Version;
var SPECIES$3 = wellKnownSymbol$g("species");
var arrayMethodHasSpeciesSupport$1 = function(METHOD_NAME) {
  return V8_VERSION$2 >= 51 || !fails$9(function() {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$3] = function() {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};
var $$l = _export;
var fails$8 = fails$j;
var isArray$1 = isArray$3;
var isObject$6 = isObject$d;
var toObject$3 = toObject$5;
var lengthOfArrayLike$2 = lengthOfArrayLike$4;
var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
var createProperty = createProperty$1;
var arraySpeciesCreate$1 = arraySpeciesCreate$2;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;
var wellKnownSymbol$f = wellKnownSymbol$l;
var V8_VERSION$1 = environmentV8Version;
var IS_CONCAT_SPREADABLE = wellKnownSymbol$f("isConcatSpreadable");
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$8(function() {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var isConcatSpreadable = function(O) {
  if (!isObject$6(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== void 0 ? !!spreadable : isArray$1(O);
};
var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport("concat");
$$l({ target: "Array", proto: true, arity: 1, forced: FORCED$2 }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat2(arg) {
    var O = toObject$3(this);
    var A2 = arraySpeciesCreate$1(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike$2(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A2, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A2, n++, E);
      }
    }
    A2.length = n;
    return A2;
  }
});
var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$5 = classof$7;
var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString2() {
  return "[object " + classof$5(this) + "]";
};
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineBuiltIn$7 = defineBuiltIn$9;
var toString$7 = objectToString;
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn$7(Object.prototype, "toString", toString$7, { unsafe: true });
}
var classof$4 = classof$7;
var $String$2 = String;
var toString$6 = function(argument) {
  if (classof$4(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
  return $String$2(argument);
};
var objectDefineProperties = {};
var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;
var objectKeys$2 = Object.keys || function keys2(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};
var DESCRIPTORS$5 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$1 = objectDefineProperty;
var anObject$7 = anObject$a;
var toIndexedObject$3 = toIndexedObject$7;
var objectKeys$1 = objectKeys$2;
objectDefineProperties.f = DESCRIPTORS$5 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$7(O);
  var props = toIndexedObject$3(Properties);
  var keys3 = objectKeys$1(Properties);
  var length = keys3.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$1.f(O, key = keys3[index++], props[key]);
  return O;
};
var getBuiltIn$9 = getBuiltIn$d;
var html$2 = getBuiltIn$9("document", "documentElement");
var anObject$6 = anObject$a;
var definePropertiesModule$1 = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys$1 = hiddenKeys$5;
var html$1 = html$2;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$2 = sharedKey$4;
var GT = ">";
var LT = "<";
var PROTOTYPE$1 = "prototype";
var SCRIPT = "script";
var IE_PROTO$1 = sharedKey$2("IE_PROTO");
var EmptyConstructor = function() {
};
var scriptTag = function(content) {
  return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
};
var NullProtoObjectViaActiveX = function(activeXDocument2) {
  activeXDocument2.write(scriptTag(""));
  activeXDocument2.close();
  var temp = activeXDocument2.parentWindow.Object;
  activeXDocument2 = null;
  return temp;
};
var NullProtoObjectViaIFrame = function() {
  var iframe = documentCreateElement$1("iframe");
  var JS = "java" + SCRIPT + ":";
  var iframeDocument;
  iframe.style.display = "none";
  html$1.appendChild(iframe);
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag("document.F=Object"));
  iframeDocument.close();
  return iframeDocument.F;
};
var activeXDocument;
var NullProtoObject = function() {
  try {
    activeXDocument = new ActiveXObject("htmlfile");
  } catch (error) {
  }
  NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];
  return NullProtoObject();
};
hiddenKeys$1[IE_PROTO$1] = true;
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE$1] = anObject$6(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$1] = null;
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === void 0 ? result : definePropertiesModule$1.f(result, Properties);
};
var objectGetOwnPropertyNamesExternal = {};
var uncurryThis$a = functionUncurryThis;
var arraySlice$3 = uncurryThis$a([].slice);
var classof$3 = classofRaw$2;
var toIndexedObject$2 = toIndexedObject$7;
var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
var arraySlice$2 = arraySlice$3;
var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function(it) {
  try {
    return $getOwnPropertyNames$1(it);
  } catch (error) {
    return arraySlice$2(windowNames);
  }
};
objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames2(it) {
  return windowNames && classof$3(it) === "Window" ? getWindowNames(it) : $getOwnPropertyNames$1(toIndexedObject$2(it));
};
var makeBuiltIn = makeBuiltInExports;
var defineProperty$4 = objectDefineProperty;
var defineBuiltInAccessor$3 = function(target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty$4.f(target, name, descriptor);
};
var wellKnownSymbolWrapped = {};
var wellKnownSymbol$e = wellKnownSymbol$l;
wellKnownSymbolWrapped.f = wellKnownSymbol$e;
var globalThis$e = globalThis_1;
var path$3 = globalThis$e;
var path$2 = path$3;
var hasOwn$7 = hasOwnProperty_1;
var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
var defineProperty$3 = objectDefineProperty.f;
var wellKnownSymbolDefine = function(NAME) {
  var Symbol2 = path$2.Symbol || (path$2.Symbol = {});
  if (!hasOwn$7(Symbol2, NAME)) defineProperty$3(Symbol2, NAME, {
    value: wrappedWellKnownSymbolModule$1.f(NAME)
  });
};
var call$c = functionCall;
var getBuiltIn$8 = getBuiltIn$d;
var wellKnownSymbol$d = wellKnownSymbol$l;
var defineBuiltIn$6 = defineBuiltIn$9;
var symbolDefineToPrimitive = function() {
  var Symbol2 = getBuiltIn$8("Symbol");
  var SymbolPrototype2 = Symbol2 && Symbol2.prototype;
  var valueOf = SymbolPrototype2 && SymbolPrototype2.valueOf;
  var TO_PRIMITIVE2 = wellKnownSymbol$d("toPrimitive");
  if (SymbolPrototype2 && !SymbolPrototype2[TO_PRIMITIVE2]) {
    defineBuiltIn$6(SymbolPrototype2, TO_PRIMITIVE2, function(hint) {
      return call$c(valueOf, this);
    }, { arity: 1 });
  }
};
var defineProperty$2 = objectDefineProperty.f;
var hasOwn$6 = hasOwnProperty_1;
var wellKnownSymbol$c = wellKnownSymbol$l;
var TO_STRING_TAG$1 = wellKnownSymbol$c("toStringTag");
var setToStringTag$9 = function(target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$6(target, TO_STRING_TAG$1)) {
    defineProperty$2(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
  }
};
var classofRaw = classofRaw$2;
var uncurryThis$9 = functionUncurryThis;
var functionUncurryThisClause = function(fn) {
  if (classofRaw(fn) === "Function") return uncurryThis$9(fn);
};
var uncurryThis$8 = functionUncurryThisClause;
var aCallable$9 = aCallable$b;
var NATIVE_BIND$1 = functionBindNative;
var bind$5 = uncurryThis$8(uncurryThis$8.bind);
var functionBindContext = function(fn, that) {
  aCallable$9(fn);
  return that === void 0 ? fn : NATIVE_BIND$1 ? bind$5(fn, that) : function() {
    return fn.apply(that, arguments);
  };
};
var bind$4 = functionBindContext;
var uncurryThis$7 = functionUncurryThis;
var IndexedObject = indexedObject;
var toObject$2 = toObject$5;
var lengthOfArrayLike$1 = lengthOfArrayLike$4;
var arraySpeciesCreate = arraySpeciesCreate$2;
var push$3 = uncurryThis$7([].push);
var createMethod$1 = function(TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function($this, callbackfn, that, specificCreate) {
    var O = toObject$2($this);
    var self2 = IndexedObject(O);
    var length = lengthOfArrayLike$1(self2);
    var boundFunction = bind$4(callbackfn, that);
    var index = 0;
    var create4 = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create4($this, length) : IS_FILTER || IS_FILTER_REJECT ? create4($this, 0) : void 0;
    var value, result;
    for (; length > index; index++) if (NO_HOLES || index in self2) {
      value = self2[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result;
        else if (result) switch (TYPE) {
          case 3:
            return true;
          case 5:
            return value;
          case 6:
            return index;
          case 2:
            push$3(target, value);
        }
        else switch (TYPE) {
          case 4:
            return false;
          case 7:
            push$3(target, value);
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};
var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$1(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$1(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$1(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$1(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$1(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$1(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$1(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$1(7)
};
var $$k = _export;
var globalThis$d = globalThis_1;
var call$b = functionCall;
var uncurryThis$6 = functionUncurryThis;
var DESCRIPTORS$4 = descriptors;
var NATIVE_SYMBOL$4 = symbolConstructorDetection;
var fails$7 = fails$j;
var hasOwn$5 = hasOwnProperty_1;
var isPrototypeOf$4 = objectIsPrototypeOf;
var anObject$5 = anObject$a;
var toIndexedObject$1 = toIndexedObject$7;
var toPropertyKey = toPropertyKey$3;
var $toString = toString$6;
var createPropertyDescriptor$3 = createPropertyDescriptor$7;
var nativeObjectCreate = objectCreate;
var objectKeys = objectKeys$2;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule = objectDefineProperty;
var definePropertiesModule = objectDefineProperties;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var defineBuiltIn$5 = defineBuiltIn$9;
var defineBuiltInAccessor$2 = defineBuiltInAccessor$3;
var shared$2 = shared$6;
var sharedKey$1 = sharedKey$4;
var hiddenKeys = hiddenKeys$5;
var uid = uid$3;
var wellKnownSymbol$b = wellKnownSymbol$l;
var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
var defineWellKnownSymbol$d = wellKnownSymbolDefine;
var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;
var setToStringTag$8 = setToStringTag$9;
var InternalStateModule$3 = internalState;
var $forEach = arrayIteration.forEach;
var HIDDEN = sharedKey$1("hidden");
var SYMBOL = "Symbol";
var PROTOTYPE = "prototype";
var setInternalState$3 = InternalStateModule$3.set;
var getInternalState$2 = InternalStateModule$3.getterFor(SYMBOL);
var ObjectPrototype$1 = Object[PROTOTYPE];
var $Symbol = globalThis$d.Symbol;
var SymbolPrototype$1 = $Symbol && $Symbol[PROTOTYPE];
var RangeError = globalThis$d.RangeError;
var TypeError$2 = globalThis$d.TypeError;
var QObject = globalThis$d.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push$2 = uncurryThis$6([].push);
var AllSymbols = shared$2("symbols");
var ObjectPrototypeSymbols = shared$2("op-symbols");
var WellKnownSymbolsStore = shared$2("wks");
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
var fallbackDefineProperty = function(O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype$1, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype$1[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$1) {
    nativeDefineProperty(ObjectPrototype$1, P, ObjectPrototypeDescriptor);
  }
};
var setSymbolDescriptor = DESCRIPTORS$4 && fails$7(function() {
  return nativeObjectCreate(nativeDefineProperty({}, "a", {
    get: function() {
      return nativeDefineProperty(this, "a", { value: 7 }).a;
    }
  })).a !== 7;
}) ? fallbackDefineProperty : nativeDefineProperty;
var wrap = function(tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype$1);
  setInternalState$3(symbol, {
    type: SYMBOL,
    tag,
    description
  });
  if (!DESCRIPTORS$4) symbol.description = description;
  return symbol;
};
var $defineProperty = function defineProperty3(O, P, Attributes) {
  if (O === ObjectPrototype$1) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject$5(O);
  var key = toPropertyKey(P);
  anObject$5(Attributes);
  if (hasOwn$5(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn$5(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$3(1, nativeObjectCreate(null)));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn$5(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor$3(0, false) });
    }
    return setSymbolDescriptor(O, key, Attributes);
  }
  return nativeDefineProperty(O, key, Attributes);
};
var $defineProperties = function defineProperties2(O, Properties) {
  anObject$5(O);
  var properties = toIndexedObject$1(Properties);
  var keys3 = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys3, function(key) {
    if (!DESCRIPTORS$4 || call$b($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};
var $create = function create2(O, Properties) {
  return Properties === void 0 ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};
var $propertyIsEnumerable = function propertyIsEnumerable2(V2) {
  var P = toPropertyKey(V2);
  var enumerable = call$b(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype$1 && hasOwn$5(AllSymbols, P) && !hasOwn$5(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn$5(this, P) || !hasOwn$5(AllSymbols, P) || hasOwn$5(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor2(O, P) {
  var it = toIndexedObject$1(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype$1 && hasOwn$5(AllSymbols, key) && !hasOwn$5(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn$5(AllSymbols, key) && !(hasOwn$5(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};
var $getOwnPropertyNames = function getOwnPropertyNames3(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject$1(O));
  var result = [];
  $forEach(names, function(key) {
    if (!hasOwn$5(AllSymbols, key) && !hasOwn$5(hiddenKeys, key)) push$2(result, key);
  });
  return result;
};
var $getOwnPropertySymbols = function(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$1(O));
  var result = [];
  $forEach(names, function(key) {
    if (hasOwn$5(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$5(ObjectPrototype$1, key))) {
      push$2(result, AllSymbols[key]);
    }
  });
  return result;
};
if (!NATIVE_SYMBOL$4) {
  $Symbol = function Symbol2() {
    if (isPrototypeOf$4(SymbolPrototype$1, this)) throw new TypeError$2("Symbol is not a constructor");
    var description = !arguments.length || arguments[0] === void 0 ? void 0 : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function(value) {
      var $this = this === void 0 ? globalThis$d : this;
      if ($this === ObjectPrototype$1) call$b(setter, ObjectPrototypeSymbols, value);
      if (hasOwn$5($this, HIDDEN) && hasOwn$5($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
      var descriptor = createPropertyDescriptor$3(1, value);
      try {
        setSymbolDescriptor($this, tag, descriptor);
      } catch (error) {
        if (!(error instanceof RangeError)) throw error;
        fallbackDefineProperty($this, tag, descriptor);
      }
    };
    if (DESCRIPTORS$4 && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };
  SymbolPrototype$1 = $Symbol[PROTOTYPE];
  defineBuiltIn$5(SymbolPrototype$1, "toString", function toString4() {
    return getInternalState$2(this).tag;
  });
  defineBuiltIn$5($Symbol, "withoutSetter", function(description) {
    return wrap(uid(description), description);
  });
  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule$1.f = $getOwnPropertySymbols;
  wrappedWellKnownSymbolModule.f = function(name) {
    return wrap(wellKnownSymbol$b(name), name);
  };
  if (DESCRIPTORS$4) {
    defineBuiltInAccessor$2(SymbolPrototype$1, "description", {
      configurable: true,
      get: function description() {
        return getInternalState$2(this).description;
      }
    });
    {
      defineBuiltIn$5(ObjectPrototype$1, "propertyIsEnumerable", $propertyIsEnumerable, { unsafe: true });
    }
  }
}
$$k({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$4, sham: !NATIVE_SYMBOL$4 }, {
  Symbol: $Symbol
});
$forEach(objectKeys(WellKnownSymbolsStore), function(name) {
  defineWellKnownSymbol$d(name);
});
$$k({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$4 }, {
  useSetter: function() {
    USE_SETTER = true;
  },
  useSimple: function() {
    USE_SETTER = false;
  }
});
$$k({ target: "Object", stat: true, forced: !NATIVE_SYMBOL$4, sham: !DESCRIPTORS$4 }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});
$$k({ target: "Object", stat: true, forced: !NATIVE_SYMBOL$4 }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});
defineSymbolToPrimitive$1();
setToStringTag$8($Symbol, SYMBOL);
hiddenKeys[HIDDEN] = true;
var NATIVE_SYMBOL$3 = symbolConstructorDetection;
var symbolRegistryDetection = NATIVE_SYMBOL$3 && !!Symbol["for"] && !!Symbol.keyFor;
var $$j = _export;
var getBuiltIn$7 = getBuiltIn$d;
var hasOwn$4 = hasOwnProperty_1;
var toString$5 = toString$6;
var shared$1 = shared$6;
var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;
var StringToSymbolRegistry = shared$1("string-to-symbol-registry");
var SymbolToStringRegistry$1 = shared$1("symbol-to-string-registry");
$$j({ target: "Symbol", stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
  "for": function(key) {
    var string = toString$5(key);
    if (hasOwn$4(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn$7("Symbol")(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry$1[symbol] = string;
    return symbol;
  }
});
var $$i = _export;
var hasOwn$3 = hasOwnProperty_1;
var isSymbol$1 = isSymbol$4;
var tryToString$3 = tryToString$5;
var shared = shared$6;
var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;
var SymbolToStringRegistry = shared("symbol-to-string-registry");
$$i({ target: "Symbol", stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol$1(sym)) throw new TypeError(tryToString$3(sym) + " is not a symbol");
    if (hasOwn$3(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});
var NATIVE_BIND = functionBindNative;
var FunctionPrototype = Function.prototype;
var apply$3 = FunctionPrototype.apply;
var call$a = FunctionPrototype.call;
var functionApply = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call$a.bind(apply$3) : function() {
  return call$a.apply(apply$3, arguments);
});
var uncurryThis$5 = functionUncurryThis;
var isArray2 = isArray$3;
var isCallable$a = isCallable$n;
var classof$2 = classofRaw$2;
var toString$4 = toString$6;
var push$1 = uncurryThis$5([].push);
var getJsonReplacerFunction = function(replacer) {
  if (isCallable$a(replacer)) return replacer;
  if (!isArray2(replacer)) return;
  var rawLength = replacer.length;
  var keys3 = [];
  for (var i = 0; i < rawLength; i++) {
    var element2 = replacer[i];
    if (typeof element2 == "string") push$1(keys3, element2);
    else if (typeof element2 == "number" || classof$2(element2) === "Number" || classof$2(element2) === "String") push$1(keys3, toString$4(element2));
  }
  var keysLength = keys3.length;
  var root = true;
  return function(key, value) {
    if (root) {
      root = false;
      return value;
    }
    if (isArray2(this)) return value;
    for (var j = 0; j < keysLength; j++) if (keys3[j] === key) return value;
  };
};
var $$h = _export;
var getBuiltIn$6 = getBuiltIn$d;
var apply$2 = functionApply;
var call$9 = functionCall;
var uncurryThis$4 = functionUncurryThis;
var fails$6 = fails$j;
var isCallable$9 = isCallable$n;
var isSymbol = isSymbol$4;
var arraySlice$1 = arraySlice$3;
var getReplacerFunction = getJsonReplacerFunction;
var NATIVE_SYMBOL$2 = symbolConstructorDetection;
var $String$1 = String;
var $stringify = getBuiltIn$6("JSON", "stringify");
var exec = uncurryThis$4(/./.exec);
var charAt$2 = uncurryThis$4("".charAt);
var charCodeAt$1 = uncurryThis$4("".charCodeAt);
var replace$2 = uncurryThis$4("".replace);
var numberToString = uncurryThis$4(1 .toString);
var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;
var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$2 || fails$6(function() {
  var symbol = getBuiltIn$6("Symbol")("stringify detection");
  return $stringify([symbol]) !== "[null]" || $stringify({ a: symbol }) !== "{}" || $stringify(Object(symbol)) !== "{}";
});
var ILL_FORMED_UNICODE = fails$6(function() {
  return $stringify("\uDF06\uD834") !== '"\\udf06\\ud834"' || $stringify("\uDEAD") !== '"\\udead"';
});
var stringifyWithSymbolsFix = function(it, replacer) {
  var args = arraySlice$1(arguments);
  var $replacer = getReplacerFunction(replacer);
  if (!isCallable$9($replacer) && (it === void 0 || isSymbol(it))) return;
  args[1] = function(key, value) {
    if (isCallable$9($replacer)) value = call$9($replacer, this, $String$1(key), value);
    if (!isSymbol(value)) return value;
  };
  return apply$2($stringify, null, args);
};
var fixIllFormed = function(match2, offset, string) {
  var prev = charAt$2(string, offset - 1);
  var next2 = charAt$2(string, offset + 1);
  if (exec(low, match2) && !exec(hi, next2) || exec(hi, match2) && !exec(low, prev)) {
    return "\\u" + numberToString(charCodeAt$1(match2, 0), 16);
  }
  return match2;
};
if ($stringify) {
  $$h({ target: "JSON", stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space2) {
      var args = arraySlice$1(arguments);
      var result = apply$2(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == "string" ? replace$2(result, tester, fixIllFormed) : result;
    }
  });
}
var $$g = _export;
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var fails$5 = fails$j;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var toObject$1 = toObject$5;
var FORCED$1 = !NATIVE_SYMBOL$1 || fails$5(function() {
  getOwnPropertySymbolsModule.f(1);
});
$$g({ target: "Object", stat: true, forced: FORCED$1 }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols2 = getOwnPropertySymbolsModule.f;
    return $getOwnPropertySymbols2 ? $getOwnPropertySymbols2(toObject$1(it)) : [];
  }
});
var defineWellKnownSymbol$c = wellKnownSymbolDefine;
defineWellKnownSymbol$c("asyncIterator");
var $$f = _export;
var DESCRIPTORS$3 = descriptors;
var globalThis$c = globalThis_1;
var uncurryThis$3 = functionUncurryThis;
var hasOwn$2 = hasOwnProperty_1;
var isCallable$8 = isCallable$n;
var isPrototypeOf$3 = objectIsPrototypeOf;
var toString$3 = toString$6;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$3;
var copyConstructorProperties$1 = copyConstructorProperties$3;
var NativeSymbol = globalThis$c.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;
if (DESCRIPTORS$3 && isCallable$8(NativeSymbol) && (!("description" in SymbolPrototype) || // Safari 12 bug
NativeSymbol().description !== void 0)) {
  var EmptyStringDescriptionStore = {};
  var SymbolWrapper = function Symbol2() {
    var description = arguments.length < 1 || arguments[0] === void 0 ? void 0 : toString$3(arguments[0]);
    var result = isPrototypeOf$3(SymbolPrototype, this) ? new NativeSymbol(description) : description === void 0 ? NativeSymbol() : NativeSymbol(description);
    if (description === "") EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties$1(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;
  var NATIVE_SYMBOL = String(NativeSymbol("description detection")) === "Symbol(description detection)";
  var thisSymbolValue = uncurryThis$3(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis$3(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace$1 = uncurryThis$3("".replace);
  var stringSlice$1 = uncurryThis$3("".slice);
  defineBuiltInAccessor$1(SymbolPrototype, "description", {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn$2(EmptyStringDescriptionStore, symbol)) return "";
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice$1(string, 7, -1) : replace$1(string, regexp, "$1");
      return desc === "" ? void 0 : desc;
    }
  });
  $$f({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}
var defineWellKnownSymbol$b = wellKnownSymbolDefine;
defineWellKnownSymbol$b("hasInstance");
var defineWellKnownSymbol$a = wellKnownSymbolDefine;
defineWellKnownSymbol$a("isConcatSpreadable");
var defineWellKnownSymbol$9 = wellKnownSymbolDefine;
defineWellKnownSymbol$9("iterator");
var defineWellKnownSymbol$8 = wellKnownSymbolDefine;
defineWellKnownSymbol$8("match");
var defineWellKnownSymbol$7 = wellKnownSymbolDefine;
defineWellKnownSymbol$7("matchAll");
var defineWellKnownSymbol$6 = wellKnownSymbolDefine;
defineWellKnownSymbol$6("replace");
var defineWellKnownSymbol$5 = wellKnownSymbolDefine;
defineWellKnownSymbol$5("search");
var defineWellKnownSymbol$4 = wellKnownSymbolDefine;
defineWellKnownSymbol$4("species");
var defineWellKnownSymbol$3 = wellKnownSymbolDefine;
defineWellKnownSymbol$3("split");
var defineWellKnownSymbol$2 = wellKnownSymbolDefine;
var defineSymbolToPrimitive = symbolDefineToPrimitive;
defineWellKnownSymbol$2("toPrimitive");
defineSymbolToPrimitive();
var getBuiltIn$5 = getBuiltIn$d;
var defineWellKnownSymbol$1 = wellKnownSymbolDefine;
var setToStringTag$7 = setToStringTag$9;
defineWellKnownSymbol$1("toStringTag");
setToStringTag$7(getBuiltIn$5("Symbol"), "Symbol");
var defineWellKnownSymbol = wellKnownSymbolDefine;
defineWellKnownSymbol("unscopables");
var globalThis$b = globalThis_1;
var setToStringTag$6 = setToStringTag$9;
setToStringTag$6(globalThis$b.JSON, "JSON", true);
var setToStringTag$5 = setToStringTag$9;
setToStringTag$5(Math, "Math", true);
var $$e = _export;
var globalThis$a = globalThis_1;
var setToStringTag$4 = setToStringTag$9;
$$e({ global: true }, { Reflect: {} });
setToStringTag$4(globalThis$a.Reflect, "Reflect", true);
var path$1 = path$3;
path$1.Symbol;
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};
var documentCreateElement = documentCreateElement$2;
var classList = documentCreateElement("span").classList;
var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;
var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? void 0 : DOMTokenListPrototype$1;
var wellKnownSymbol$a = wellKnownSymbol$l;
var create$2 = objectCreate;
var defineProperty$1 = objectDefineProperty.f;
var UNSCOPABLES = wellKnownSymbol$a("unscopables");
var ArrayPrototype$1 = Array.prototype;
if (ArrayPrototype$1[UNSCOPABLES] === void 0) {
  defineProperty$1(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$2(null)
  });
}
var addToUnscopables$1 = function(key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};
var iterators = {};
var fails$4 = fails$j;
var correctPrototypeGetter = !fails$4(function() {
  function F() {
  }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});
var hasOwn$1 = hasOwnProperty_1;
var isCallable$7 = isCallable$n;
var toObject = toObject$5;
var sharedKey = sharedKey$4;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
var IE_PROTO = sharedKey("IE_PROTO");
var $Object = Object;
var ObjectPrototype = $Object.prototype;
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
  var object = toObject(O);
  if (hasOwn$1(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$7(constructor) && object instanceof constructor) {
    return constructor.prototype;
  }
  return object instanceof $Object ? ObjectPrototype : null;
};
var fails$3 = fails$j;
var isCallable$6 = isCallable$n;
var isObject$5 = isObject$d;
var getPrototypeOf$2 = objectGetPrototypeOf;
var defineBuiltIn$4 = defineBuiltIn$9;
var wellKnownSymbol$9 = wellKnownSymbol$l;
var ITERATOR$5 = wellKnownSymbol$9("iterator");
var BUGGY_SAFARI_ITERATORS$1 = false;
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
if ([].keys) {
  arrayIterator = [].keys();
  if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$2(getPrototypeOf$2(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}
var NEW_ITERATOR_PROTOTYPE = !isObject$5(IteratorPrototype$2) || fails$3(function() {
  var test2 = {};
  return IteratorPrototype$2[ITERATOR$5].call(test2) !== test2;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};
if (!isCallable$6(IteratorPrototype$2[ITERATOR$5])) {
  defineBuiltIn$4(IteratorPrototype$2, ITERATOR$5, function() {
    return this;
  });
}
var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};
var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$1 = objectCreate;
var createPropertyDescriptor$2 = createPropertyDescriptor$7;
var setToStringTag$3 = setToStringTag$9;
var Iterators$4 = iterators;
var returnThis$1 = function() {
  return this;
};
var iteratorCreateConstructor = function(IteratorConstructor, NAME, next2, ENUMERABLE_NEXT) {
  var TO_STRING_TAG2 = NAME + " Iterator";
  IteratorConstructor.prototype = create$1(IteratorPrototype$1, { next: createPropertyDescriptor$2(+!ENUMERABLE_NEXT, next2) });
  setToStringTag$3(IteratorConstructor, TO_STRING_TAG2, false);
  Iterators$4[TO_STRING_TAG2] = returnThis$1;
  return IteratorConstructor;
};
var uncurryThis$2 = functionUncurryThis;
var aCallable$8 = aCallable$b;
var functionUncurryThisAccessor = function(object, key, method) {
  try {
    return uncurryThis$2(aCallable$8(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) {
  }
};
var isObject$4 = isObject$d;
var isPossiblePrototype$1 = function(argument) {
  return isObject$4(argument) || argument === null;
};
var isPossiblePrototype = isPossiblePrototype$1;
var $String = String;
var $TypeError$6 = TypeError;
var aPossiblePrototype$1 = function(argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError$6("Can't set " + $String(argument) + " as a prototype");
};
var uncurryThisAccessor = functionUncurryThisAccessor;
var isObject$3 = isObject$d;
var requireObjectCoercible$1 = requireObjectCoercible$4;
var aPossiblePrototype = aPossiblePrototype$1;
var objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var CORRECT_SETTER = false;
  var test2 = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
    setter(test2, []);
    CORRECT_SETTER = test2 instanceof Array;
  } catch (error) {
  }
  return function setPrototypeOf2(O, proto) {
    requireObjectCoercible$1(O);
    aPossiblePrototype(proto);
    if (!isObject$3(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : void 0);
var $$d = _export;
var call$8 = functionCall;
var FunctionName = functionName;
var isCallable$5 = isCallable$n;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf$1 = objectGetPrototypeOf;
var setPrototypeOf$2 = objectSetPrototypeOf;
var setToStringTag$2 = setToStringTag$9;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$7;
var defineBuiltIn$3 = defineBuiltIn$9;
var wellKnownSymbol$8 = wellKnownSymbol$l;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;
var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$4 = wellKnownSymbol$8("iterator");
var KEYS = "keys";
var VALUES = "values";
var ENTRIES = "entries";
var returnThis = function() {
  return this;
};
var iteratorDefine = function(Iterable, NAME, IteratorConstructor, next2, DEFAULT, IS_SET, FORCED2) {
  createIteratorConstructor(IteratorConstructor, NAME, next2);
  var getIterationMethod = function(KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS:
        return function keys3() {
          return new IteratorConstructor(this, KIND);
        };
      case VALUES:
        return function values2() {
          return new IteratorConstructor(this, KIND);
        };
      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }
    return function() {
      return new IteratorConstructor(this);
    };
  };
  var TO_STRING_TAG2 = NAME + " Iterator";
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$4] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf$1(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf$1(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$2) {
          setPrototypeOf$2(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$5(CurrentIteratorPrototype[ITERATOR$4])) {
          defineBuiltIn$3(CurrentIteratorPrototype, ITERATOR$4, returnThis);
        }
      }
      setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG2, true);
    }
  }
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$4(IterablePrototype, "name", VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values2() {
        return call$8(nativeIterator, this);
      };
    }
  }
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED2) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn$3(IterablePrototype, KEY, methods[KEY]);
      }
    }
    else $$d({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }
  if (IterablePrototype[ITERATOR$4] !== defaultIterator) {
    defineBuiltIn$3(IterablePrototype, ITERATOR$4, defaultIterator, { name: DEFAULT });
  }
  Iterators$3[NAME] = defaultIterator;
  return methods;
};
var createIterResultObject$2 = function(value, done) {
  return { value, done };
};
var toIndexedObject = toIndexedObject$7;
var addToUnscopables = addToUnscopables$1;
var Iterators$2 = iterators;
var InternalStateModule$2 = internalState;
var defineProperty4 = objectDefineProperty.f;
var defineIterator$1 = iteratorDefine;
var createIterResultObject$1 = createIterResultObject$2;
var DESCRIPTORS$2 = descriptors;
var ARRAY_ITERATOR = "Array Iterator";
var setInternalState$2 = InternalStateModule$2.set;
var getInternalState$1 = InternalStateModule$2.getterFor(ARRAY_ITERATOR);
var es_array_iterator = defineIterator$1(Array, "Array", function(iterated, kind) {
  setInternalState$2(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    // target
    index: 0,
    // next index
    kind
    // kind
  });
}, function() {
  var state = getInternalState$1(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = null;
    return createIterResultObject$1(void 0, true);
  }
  switch (state.kind) {
    case "keys":
      return createIterResultObject$1(index, false);
    case "values":
      return createIterResultObject$1(target[index], false);
  }
  return createIterResultObject$1([index, target[index]], false);
}, "values");
var values = Iterators$2.Arguments = Iterators$2.Array;
addToUnscopables("keys");
addToUnscopables("values");
addToUnscopables("entries");
if (DESCRIPTORS$2 && values.name !== "values") try {
  defineProperty4(values, "name", { value: "values" });
} catch (error) {
}
var globalThis$9 = globalThis_1;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$7;
var setToStringTag$1 = setToStringTag$9;
var wellKnownSymbol$7 = wellKnownSymbol$l;
var ITERATOR$3 = wellKnownSymbol$7("iterator");
var ArrayValues = ArrayIteratorMethods.values;
var handlePrototype = function(CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    if (CollectionPrototype[ITERATOR$3] !== ArrayValues) try {
      createNonEnumerableProperty$3(CollectionPrototype, ITERATOR$3, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$3] = ArrayValues;
    }
    setToStringTag$1(CollectionPrototype, COLLECTION_NAME, true);
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty$3(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};
for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(globalThis$9[COLLECTION_NAME] && globalThis$9[COLLECTION_NAME].prototype, COLLECTION_NAME);
}
handlePrototype(DOMTokenListPrototype, "DOMTokenList");
var isObject$2 = isObject$d;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$7;
var installErrorCause$1 = function(O, options) {
  if (isObject$2(options) && "cause" in options) {
    createNonEnumerableProperty$2(O, "cause", options.cause);
  }
};
var uncurryThis$1 = functionUncurryThis;
var $Error$1 = Error;
var replace = uncurryThis$1("".replace);
var TEST = function(arg) {
  return String(new $Error$1(arg).stack);
}("zxcasd");
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
var errorStackClear = function(stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == "string" && !$Error$1.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, "");
  }
  return stack;
};
var fails$2 = fails$j;
var createPropertyDescriptor$1 = createPropertyDescriptor$7;
var errorStackInstallable = !fails$2(function() {
  var error = new Error("a");
  if (!("stack" in error)) return true;
  Object.defineProperty(error, "stack", createPropertyDescriptor$1(1, 7));
  return error.stack !== 7;
});
var createNonEnumerableProperty$1 = createNonEnumerableProperty$7;
var clearErrorStack = errorStackClear;
var ERROR_STACK_INSTALLABLE = errorStackInstallable;
var captureStackTrace = Error.captureStackTrace;
var errorStackInstall = function(error, C2, stack, dropEntries) {
  if (ERROR_STACK_INSTALLABLE) {
    if (captureStackTrace) captureStackTrace(error, C2);
    else createNonEnumerableProperty$1(error, "stack", clearErrorStack(stack, dropEntries));
  }
};
var wellKnownSymbol$6 = wellKnownSymbol$l;
var Iterators$1 = iterators;
var ITERATOR$2 = wellKnownSymbol$6("iterator");
var ArrayPrototype = Array.prototype;
var isArrayIteratorMethod$1 = function(it) {
  return it !== void 0 && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
};
var classof$1 = classof$7;
var getMethod$1 = getMethod$3;
var isNullOrUndefined$1 = isNullOrUndefined$4;
var Iterators = iterators;
var wellKnownSymbol$5 = wellKnownSymbol$l;
var ITERATOR$1 = wellKnownSymbol$5("iterator");
var getIteratorMethod$2 = function(it) {
  if (!isNullOrUndefined$1(it)) return getMethod$1(it, ITERATOR$1) || getMethod$1(it, "@@iterator") || Iterators[classof$1(it)];
};
var call$7 = functionCall;
var aCallable$7 = aCallable$b;
var anObject$4 = anObject$a;
var tryToString$2 = tryToString$5;
var getIteratorMethod$1 = getIteratorMethod$2;
var $TypeError$5 = TypeError;
var getIterator$1 = function(argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable$7(iteratorMethod)) return anObject$4(call$7(iteratorMethod, argument));
  throw new $TypeError$5(tryToString$2(argument) + " is not iterable");
};
var call$6 = functionCall;
var anObject$3 = anObject$a;
var getMethod = getMethod$3;
var iteratorClose$1 = function(iterator, kind, value) {
  var innerResult, innerError;
  anObject$3(iterator);
  try {
    innerResult = getMethod(iterator, "return");
    if (!innerResult) {
      if (kind === "throw") throw value;
      return value;
    }
    innerResult = call$6(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === "throw") throw value;
  if (innerError) throw innerResult;
  anObject$3(innerResult);
  return value;
};
var bind$3 = functionBindContext;
var call$5 = functionCall;
var anObject$2 = anObject$a;
var tryToString$1 = tryToString$5;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike = lengthOfArrayLike$4;
var isPrototypeOf$2 = objectIsPrototypeOf;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var iteratorClose = iteratorClose$1;
var $TypeError$4 = TypeError;
var Result = function(stopped, result) {
  this.stopped = stopped;
  this.result = result;
};
var ResultPrototype = Result.prototype;
var iterate$5 = function(iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$3(unboundFunction, that);
  var iterator, iterFn, index, length, result, next2, step;
  var stop = function(condition) {
    if (iterator) iteratorClose(iterator, "normal", condition);
    return new Result(true, condition);
  };
  var callFn = function(value) {
    if (AS_ENTRIES) {
      anObject$2(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }
    return INTERRUPTED ? fn(value, stop) : fn(value);
  };
  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError$4(tryToString$1(iterable) + " is not iterable");
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$2(ResultPrototype, result)) return result;
      }
      return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }
  next2 = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$5(next2, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, "throw", error);
    }
    if (typeof result == "object" && result && isPrototypeOf$2(ResultPrototype, result)) return result;
  }
  return new Result(false);
};
var toString$2 = toString$6;
var normalizeStringArgument$1 = function(argument, $default) {
  return argument === void 0 ? arguments.length < 2 ? "" : $default : toString$2(argument);
};
var $$c = _export;
var isPrototypeOf$1 = objectIsPrototypeOf;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf;
var copyConstructorProperties = copyConstructorProperties$3;
var create3 = objectCreate;
var createNonEnumerableProperty = createNonEnumerableProperty$7;
var createPropertyDescriptor = createPropertyDescriptor$7;
var installErrorCause = installErrorCause$1;
var installErrorStack = errorStackInstall;
var iterate$4 = iterate$5;
var normalizeStringArgument = normalizeStringArgument$1;
var wellKnownSymbol$4 = wellKnownSymbol$l;
var TO_STRING_TAG = wellKnownSymbol$4("toStringTag");
var $Error = Error;
var push = [].push;
var $AggregateError = function AggregateError(errors, message) {
  var isInstance = isPrototypeOf$1(AggregateErrorPrototype, this);
  var that;
  if (setPrototypeOf$1) {
    that = setPrototypeOf$1(new $Error(), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype);
  } else {
    that = isInstance ? this : create3(AggregateErrorPrototype);
    createNonEnumerableProperty(that, TO_STRING_TAG, "Error");
  }
  if (message !== void 0) createNonEnumerableProperty(that, "message", normalizeStringArgument(message));
  installErrorStack(that, $AggregateError, that.stack, 1);
  if (arguments.length > 2) installErrorCause(that, arguments[2]);
  var errorsArray = [];
  iterate$4(errors, push, { that: errorsArray });
  createNonEnumerableProperty(that, "errors", errorsArray);
  return that;
};
if (setPrototypeOf$1) setPrototypeOf$1($AggregateError, $Error);
else copyConstructorProperties($AggregateError, $Error, { name: true });
var AggregateErrorPrototype = $AggregateError.prototype = create3($Error.prototype, {
  constructor: createPropertyDescriptor(1, $AggregateError),
  message: createPropertyDescriptor(1, ""),
  name: createPropertyDescriptor(1, "AggregateError")
});
$$c({ global: true, constructor: true, arity: 2 }, {
  AggregateError: $AggregateError
});
var globalThis$8 = globalThis_1;
var userAgent$3 = environmentUserAgent;
var classof = classofRaw$2;
var userAgentStartsWith = function(string) {
  return userAgent$3.slice(0, string.length) === string;
};
var environment = function() {
  if (userAgentStartsWith("Bun/")) return "BUN";
  if (userAgentStartsWith("Cloudflare-Workers")) return "CLOUDFLARE";
  if (userAgentStartsWith("Deno/")) return "DENO";
  if (userAgentStartsWith("Node.js/")) return "NODE";
  if (globalThis$8.Bun && typeof Bun.version == "string") return "BUN";
  if (globalThis$8.Deno && typeof Deno.version == "object") return "DENO";
  if (classof(globalThis$8.process) === "process") return "NODE";
  if (globalThis$8.window && globalThis$8.document) return "BROWSER";
  return "REST";
}();
var ENVIRONMENT$1 = environment;
var environmentIsNode = ENVIRONMENT$1 === "NODE";
var getBuiltIn$4 = getBuiltIn$d;
var defineBuiltInAccessor = defineBuiltInAccessor$3;
var wellKnownSymbol$3 = wellKnownSymbol$l;
var DESCRIPTORS$1 = descriptors;
var SPECIES$2 = wellKnownSymbol$3("species");
var setSpecies$1 = function(CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$4(CONSTRUCTOR_NAME);
  if (DESCRIPTORS$1 && Constructor && !Constructor[SPECIES$2]) {
    defineBuiltInAccessor(Constructor, SPECIES$2, {
      configurable: true,
      get: function() {
        return this;
      }
    });
  }
};
var isPrototypeOf = objectIsPrototypeOf;
var $TypeError$3 = TypeError;
var anInstance$1 = function(it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError$3("Incorrect invocation");
};
var isConstructor3 = isConstructor$2;
var tryToString = tryToString$5;
var $TypeError$2 = TypeError;
var aConstructor$1 = function(argument) {
  if (isConstructor3(argument)) return argument;
  throw new $TypeError$2(tryToString(argument) + " is not a constructor");
};
var anObject$1 = anObject$a;
var aConstructor = aConstructor$1;
var isNullOrUndefined = isNullOrUndefined$4;
var wellKnownSymbol$2 = wellKnownSymbol$l;
var SPECIES$1 = wellKnownSymbol$2("species");
var speciesConstructor$2 = function(O, defaultConstructor) {
  var C2 = anObject$1(O).constructor;
  var S;
  return C2 === void 0 || isNullOrUndefined(S = anObject$1(C2)[SPECIES$1]) ? defaultConstructor : aConstructor(S);
};
var $TypeError$1 = TypeError;
var validateArgumentsLength$1 = function(passed, required) {
  if (passed < required) throw new $TypeError$1("Not enough arguments");
  return passed;
};
var userAgent$2 = environmentUserAgent;
var environmentIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);
var globalThis$7 = globalThis_1;
var apply$1 = functionApply;
var bind$2 = functionBindContext;
var isCallable$4 = isCallable$n;
var hasOwn2 = hasOwnProperty_1;
var fails$1 = fails$j;
var html = html$2;
var arraySlice = arraySlice$3;
var createElement = documentCreateElement$2;
var validateArgumentsLength = validateArgumentsLength$1;
var IS_IOS$1 = environmentIsIos;
var IS_NODE$2 = environmentIsNode;
var set = globalThis$7.setImmediate;
var clear = globalThis$7.clearImmediate;
var process$2 = globalThis$7.process;
var Dispatch = globalThis$7.Dispatch;
var Function$1 = globalThis$7.Function;
var MessageChannel = globalThis$7.MessageChannel;
var String$1 = globalThis$7.String;
var counter = 0;
var queue$2 = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
fails$1(function() {
  $location = globalThis$7.location;
});
var run$1 = function(id2) {
  if (hasOwn2(queue$2, id2)) {
    var fn = queue$2[id2];
    delete queue$2[id2];
    fn();
  }
};
var runner = function(id2) {
  return function() {
    run$1(id2);
  };
};
var eventListener = function(event) {
  run$1(event.data);
};
var globalPostMessageDefer = function(id2) {
  globalThis$7.postMessage(String$1(id2), $location.protocol + "//" + $location.host);
};
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable$4(handler) ? handler : Function$1(handler);
    var args = arraySlice(arguments, 1);
    queue$2[++counter] = function() {
      apply$1(fn, void 0, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id2) {
    delete queue$2[id2];
  };
  if (IS_NODE$2) {
    defer = function(id2) {
      process$2.nextTick(runner(id2));
    };
  } else if (Dispatch && Dispatch.now) {
    defer = function(id2) {
      Dispatch.now(runner(id2));
    };
  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind$2(port.postMessage, port);
  } else if (globalThis$7.addEventListener && isCallable$4(globalThis$7.postMessage) && !globalThis$7.importScripts && $location && $location.protocol !== "file:" && !fails$1(globalPostMessageDefer)) {
    defer = globalPostMessageDefer;
    globalThis$7.addEventListener("message", eventListener, false);
  } else if (ONREADYSTATECHANGE in createElement("script")) {
    defer = function(id2) {
      html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
        html.removeChild(this);
        run$1(id2);
      };
    };
  } else {
    defer = function(id2) {
      setTimeout(runner(id2), 0);
    };
  }
}
var task$1 = {
  set,
  clear
};
var globalThis$6 = globalThis_1;
var DESCRIPTORS = descriptors;
var getOwnPropertyDescriptor3 = Object.getOwnPropertyDescriptor;
var safeGetBuiltIn$1 = function(name) {
  if (!DESCRIPTORS) return globalThis$6[name];
  var descriptor = getOwnPropertyDescriptor3(globalThis$6, name);
  return descriptor && descriptor.value;
};
var Queue$2 = function() {
  this.head = null;
  this.tail = null;
};
Queue$2.prototype = {
  add: function(item) {
    var entry = { item, next: null };
    var tail = this.tail;
    if (tail) tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function() {
    var entry = this.head;
    if (entry) {
      var next2 = this.head = entry.next;
      if (next2 === null) this.tail = null;
      return entry.item;
    }
  }
};
var queue$1 = Queue$2;
var userAgent$1 = environmentUserAgent;
var environmentIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && typeof Pebble != "undefined";
var userAgent = environmentUserAgent;
var environmentIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);
var globalThis$5 = globalThis_1;
var safeGetBuiltIn = safeGetBuiltIn$1;
var bind$1 = functionBindContext;
var macrotask = task$1.set;
var Queue$1 = queue$1;
var IS_IOS = environmentIsIos;
var IS_IOS_PEBBLE = environmentIsIosPebble;
var IS_WEBOS_WEBKIT = environmentIsWebosWebkit;
var IS_NODE$1 = environmentIsNode;
var MutationObserver = globalThis$5.MutationObserver || globalThis$5.WebKitMutationObserver;
var document$2 = globalThis$5.document;
var process$1 = globalThis$5.process;
var Promise$2 = globalThis$5.Promise;
var microtask$1 = safeGetBuiltIn("queueMicrotask");
var notify$1, toggle, node, promise, then;
if (!microtask$1) {
  var queue = new Queue$1();
  var flush$1 = function() {
    var parent, fn;
    if (IS_NODE$1 && (parent = process$1.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify$1();
      throw error;
    }
    if (parent) parent.enter();
  };
  if (!IS_IOS && !IS_NODE$1 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode("");
    new MutationObserver(flush$1).observe(node, { characterData: true });
    notify$1 = function() {
      node.data = toggle = !toggle;
    };
  } else if (!IS_IOS_PEBBLE && Promise$2 && Promise$2.resolve) {
    promise = Promise$2.resolve(void 0);
    promise.constructor = Promise$2;
    then = bind$1(promise.then, promise);
    notify$1 = function() {
      then(flush$1);
    };
  } else if (IS_NODE$1) {
    notify$1 = function() {
      process$1.nextTick(flush$1);
    };
  } else {
    macrotask = bind$1(macrotask, globalThis$5);
    notify$1 = function() {
      macrotask(flush$1);
    };
  }
  microtask$1 = function(fn) {
    if (!queue.head) notify$1();
    queue.add(fn);
  };
}
var microtask_1 = microtask$1;
var hostReportErrors$1 = function(a2, b2) {
  try {
    arguments.length === 1 ? console.error(a2) : console.error(a2, b2);
  } catch (error) {
  }
};
var perform$6 = function(exec2) {
  try {
    return { error: false, value: exec2() };
  } catch (error) {
    return { error: true, value: error };
  }
};
var globalThis$4 = globalThis_1;
var promiseNativeConstructor = globalThis$4.Promise;
var globalThis$3 = globalThis_1;
var NativePromiseConstructor$4 = promiseNativeConstructor;
var isCallable$3 = isCallable$n;
var isForced = isForced_1;
var inspectSource = inspectSource$3;
var wellKnownSymbol$1 = wellKnownSymbol$l;
var ENVIRONMENT = environment;
var V8_VERSION = environmentV8Version;
NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype;
var SPECIES = wellKnownSymbol$1("species");
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$3(globalThis$3.PromiseRejectionEvent);
var FORCED_PROMISE_CONSTRUCTOR$5 = isForced("Promise", function() {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$4);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$4);
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    var promise2 = new NativePromiseConstructor$4(function(resolve2) {
      resolve2(1);
    });
    var FakePromise = function(exec2) {
      exec2(function() {
      }, function() {
      });
    };
    var constructor = promise2.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise2.then(function() {
    }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  }
  return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === "BROWSER" || ENVIRONMENT === "DENO") && !NATIVE_PROMISE_REJECTION_EVENT$1;
});
var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING
};
var newPromiseCapability$2 = {};
var aCallable$6 = aCallable$b;
var $TypeError = TypeError;
var PromiseCapability = function(C2) {
  var resolve2, reject2;
  this.promise = new C2(function($$resolve, $$reject) {
    if (resolve2 !== void 0 || reject2 !== void 0) throw new $TypeError("Bad Promise constructor");
    resolve2 = $$resolve;
    reject2 = $$reject;
  });
  this.resolve = aCallable$6(resolve2);
  this.reject = aCallable$6(reject2);
};
newPromiseCapability$2.f = function(C2) {
  return new PromiseCapability(C2);
};
var $$b = _export;
var IS_NODE = environmentIsNode;
var globalThis$2 = globalThis_1;
var call$4 = functionCall;
var defineBuiltIn$2 = defineBuiltIn$9;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$9;
var setSpecies = setSpecies$1;
var aCallable$5 = aCallable$b;
var isCallable$2 = isCallable$n;
var isObject$1 = isObject$d;
var anInstance = anInstance$1;
var speciesConstructor$1 = speciesConstructor$2;
var task = task$1.set;
var microtask = microtask_1;
var hostReportErrors = hostReportErrors$1;
var perform$5 = perform$6;
var Queue = queue$1;
var InternalStateModule$1 = internalState;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var PromiseConstructorDetection = promiseConstructorDetection;
var newPromiseCapabilityModule$7 = newPromiseCapability$2;
var PROMISE = "Promise";
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule$1.getterFor(PROMISE);
var setInternalState$1 = InternalStateModule$1.set;
var NativePromisePrototype$2 = NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var PromiseConstructor = NativePromiseConstructor$3;
var PromisePrototype = NativePromisePrototype$2;
var TypeError$1 = globalThis$2.TypeError;
var document$1 = globalThis$2.document;
var process = globalThis$2.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$7.f;
var newGenericPromiseCapability = newPromiseCapability$1;
var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && globalThis$2.dispatchEvent);
var UNHANDLED_REJECTION = "unhandledrejection";
var REJECTION_HANDLED = "rejectionhandled";
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
var isThenable = function(it) {
  var then2;
  return isObject$1(it) && isCallable$2(then2 = it.then) ? then2 : false;
};
var callReaction = function(reaction, state) {
  var value = state.value;
  var ok = state.state === FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve2 = reaction.resolve;
  var reject2 = reaction.reject;
  var domain = reaction.domain;
  var result, then2, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value);
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject2(new TypeError$1("Promise-chain cycle"));
      } else if (then2 = isThenable(result)) {
        call$4(then2, result, resolve2, reject2);
      } else resolve2(result);
    } else reject2(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject2(error);
  }
};
var notify = function(state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function() {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};
var dispatchEvent = function(name, promise2, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent("Event");
    event.promise = promise2;
    event.reason = reason;
    event.initEvent(name, false, true);
    globalThis$2.dispatchEvent(event);
  } else event = { promise: promise2, reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis$2["on" + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors("Unhandled promise rejection", reason);
};
var onUnhandled = function(state) {
  call$4(task, globalThis$2, function() {
    var promise2 = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$5(function() {
        if (IS_NODE) {
          process.emit("unhandledRejection", value, promise2);
        } else dispatchEvent(UNHANDLED_REJECTION, promise2, value);
      });
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};
var isUnhandled = function(state) {
  return state.rejection !== HANDLED && !state.parent;
};
var onHandleUnhandled = function(state) {
  call$4(task, globalThis$2, function() {
    var promise2 = state.facade;
    if (IS_NODE) {
      process.emit("rejectionHandled", promise2);
    } else dispatchEvent(REJECTION_HANDLED, promise2, state.value);
  });
};
var bind = function(fn, state, unwrap) {
  return function(value) {
    fn(state, value, unwrap);
  };
};
var internalReject = function(state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};
var internalResolve = function(state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw new TypeError$1("Promise can't be resolved itself");
    var then2 = isThenable(value);
    if (then2) {
      microtask(function() {
        var wrapper = { done: false };
        try {
          call$4(
            then2,
            value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};
if (FORCED_PROMISE_CONSTRUCTOR$4) {
  PromiseConstructor = function Promise2(executor) {
    anInstance(this, PromisePrototype);
    aCallable$5(executor);
    call$4(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromisePrototype = PromiseConstructor.prototype;
  Internal = function Promise2(executor) {
    setInternalState$1(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: null
    });
  };
  Internal.prototype = defineBuiltIn$2(PromisePrototype, "then", function then2(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor$1(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$2(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$2(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : void 0;
    if (state.state === PENDING) state.reactions.add(reaction);
    else microtask(function() {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });
  OwnPromiseCapability = function() {
    var promise2 = new Internal();
    var state = getInternalPromiseState(promise2);
    this.promise = promise2;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule$7.f = newPromiseCapability$1 = function(C2) {
    return C2 === PromiseConstructor || C2 === PromiseWrapper ? new OwnPromiseCapability(C2) : newGenericPromiseCapability(C2);
  };
  if (isCallable$2(NativePromiseConstructor$3) && NativePromisePrototype$2 !== Object.prototype) {
    nativeThen = NativePromisePrototype$2.then;
    if (!NATIVE_PROMISE_SUBCLASSING) {
      defineBuiltIn$2(NativePromisePrototype$2, "then", function then2(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function(resolve2, reject2) {
          call$4(nativeThen, that, resolve2, reject2);
        }).then(onFulfilled, onRejected);
      }, { unsafe: true });
    }
    try {
      delete NativePromisePrototype$2.constructor;
    } catch (error) {
    }
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype$2, PromisePrototype);
    }
  }
}
$$b({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});
setToStringTag(PromiseConstructor, PROMISE, false);
setSpecies(PROMISE);
var wellKnownSymbol = wellKnownSymbol$l;
var ITERATOR = wellKnownSymbol("iterator");
var SAFE_CLOSING = false;
try {
  var called = 0;
  var iteratorWithReturn = {
    next: function() {
      return { done: !!called++ };
    },
    "return": function() {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function() {
    return this;
  };
  Array.from(iteratorWithReturn, function() {
    throw 2;
  });
} catch (error) {
}
var checkCorrectnessOfIteration$1 = function(exec2, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  } catch (error) {
    return false;
  }
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function() {
      return {
        next: function() {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec2(object);
  } catch (error) {
  }
  return ITERATION_SUPPORT;
};
var NativePromiseConstructor$2 = promiseNativeConstructor;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;
var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function(iterable) {
  NativePromiseConstructor$2.all(iterable).then(void 0, function() {
  });
});
var $$a = _export;
var call$3 = functionCall;
var aCallable$4 = aCallable$b;
var newPromiseCapabilityModule$6 = newPromiseCapability$2;
var perform$4 = perform$6;
var iterate$3 = iterate$5;
var PROMISE_STATICS_INCORRECT_ITERATION$3 = promiseStaticsIncorrectIteration;
$$a({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$3 }, {
  all: function all(iterable) {
    var C2 = this;
    var capability = newPromiseCapabilityModule$6.f(C2);
    var resolve2 = capability.resolve;
    var reject2 = capability.reject;
    var result = perform$4(function() {
      var $promiseResolve = aCallable$4(C2.resolve);
      var values2 = [];
      var counter2 = 0;
      var remaining = 1;
      iterate$3(iterable, function(promise2) {
        var index = counter2++;
        var alreadyCalled = false;
        remaining++;
        call$3($promiseResolve, C2, promise2).then(function(value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values2[index] = value;
          --remaining || resolve2(values2);
        }, reject2);
      });
      --remaining || resolve2(values2);
    });
    if (result.error) reject2(result.value);
    return capability.promise;
  }
});
var $$9 = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor$1 = promiseNativeConstructor;
var getBuiltIn$3 = getBuiltIn$d;
var isCallable$1 = isCallable$n;
var defineBuiltIn$1 = defineBuiltIn$9;
var NativePromisePrototype$1 = NativePromiseConstructor$1 && NativePromiseConstructor$1.prototype;
$$9({ target: "Promise", proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  "catch": function(onRejected) {
    return this.then(void 0, onRejected);
  }
});
if (isCallable$1(NativePromiseConstructor$1)) {
  var method$1 = getBuiltIn$3("Promise").prototype["catch"];
  if (NativePromisePrototype$1["catch"] !== method$1) {
    defineBuiltIn$1(NativePromisePrototype$1, "catch", method$1, { unsafe: true });
  }
}
var $$8 = _export;
var call$2 = functionCall;
var aCallable$3 = aCallable$b;
var newPromiseCapabilityModule$5 = newPromiseCapability$2;
var perform$3 = perform$6;
var iterate$2 = iterate$5;
var PROMISE_STATICS_INCORRECT_ITERATION$2 = promiseStaticsIncorrectIteration;
$$8({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$2 }, {
  race: function race(iterable) {
    var C2 = this;
    var capability = newPromiseCapabilityModule$5.f(C2);
    var reject2 = capability.reject;
    var result = perform$3(function() {
      var $promiseResolve = aCallable$3(C2.resolve);
      iterate$2(iterable, function(promise2) {
        call$2($promiseResolve, C2, promise2).then(capability.resolve, reject2);
      });
    });
    if (result.error) reject2(result.value);
    return capability.promise;
  }
});
var $$7 = _export;
var newPromiseCapabilityModule$4 = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;
$$7({ target: "Promise", stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule$4.f(this);
    var capabilityReject = capability.reject;
    capabilityReject(r);
    return capability.promise;
  }
});
var anObject = anObject$a;
var isObject = isObject$d;
var newPromiseCapability = newPromiseCapability$2;
var promiseResolve$2 = function(C2, x) {
  anObject(C2);
  if (isObject(x) && x.constructor === C2) return x;
  var promiseCapability = newPromiseCapability.f(C2);
  var resolve2 = promiseCapability.resolve;
  resolve2(x);
  return promiseCapability.promise;
};
var $$6 = _export;
var getBuiltIn$2 = getBuiltIn$d;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve$1 = promiseResolve$2;
getBuiltIn$2("Promise");
$$6({ target: "Promise", stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve$1(this, x);
  }
});
var $$5 = _export;
var call$1 = functionCall;
var aCallable$2 = aCallable$b;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;
var perform$2 = perform$6;
var iterate$1 = iterate$5;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;
$$5({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  allSettled: function allSettled(iterable) {
    var C2 = this;
    var capability = newPromiseCapabilityModule$3.f(C2);
    var resolve2 = capability.resolve;
    var reject2 = capability.reject;
    var result = perform$2(function() {
      var promiseResolve2 = aCallable$2(C2.resolve);
      var values2 = [];
      var counter2 = 0;
      var remaining = 1;
      iterate$1(iterable, function(promise2) {
        var index = counter2++;
        var alreadyCalled = false;
        remaining++;
        call$1(promiseResolve2, C2, promise2).then(function(value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values2[index] = { status: "fulfilled", value };
          --remaining || resolve2(values2);
        }, function(error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values2[index] = { status: "rejected", reason: error };
          --remaining || resolve2(values2);
        });
      });
      --remaining || resolve2(values2);
    });
    if (result.error) reject2(result.value);
    return capability.promise;
  }
});
var $$4 = _export;
var call = functionCall;
var aCallable$1 = aCallable$b;
var getBuiltIn$1 = getBuiltIn$d;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$6;
var iterate = iterate$5;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;
var PROMISE_ANY_ERROR = "No one promise resolved";
$$4({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  any: function any(iterable) {
    var C2 = this;
    var AggregateError2 = getBuiltIn$1("AggregateError");
    var capability = newPromiseCapabilityModule$2.f(C2);
    var resolve2 = capability.resolve;
    var reject2 = capability.reject;
    var result = perform$1(function() {
      var promiseResolve2 = aCallable$1(C2.resolve);
      var errors = [];
      var counter2 = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate(iterable, function(promise2) {
        var index = counter2++;
        var alreadyRejected = false;
        remaining++;
        call(promiseResolve2, C2, promise2).then(function(value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve2(value);
        }, function(error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject2(new AggregateError2(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject2(new AggregateError2(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject2(result.value);
    return capability.promise;
  }
});
var $$3 = _export;
var globalThis$1 = globalThis_1;
var apply = functionApply;
var slice = arraySlice$3;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var aCallable = aCallable$b;
var perform = perform$6;
var Promise$1 = globalThis$1.Promise;
var ACCEPT_ARGUMENTS = false;
var FORCED = !Promise$1 || !Promise$1["try"] || perform(function() {
  Promise$1["try"](function(argument) {
    ACCEPT_ARGUMENTS = argument === 8;
  }, 8);
}).error || !ACCEPT_ARGUMENTS;
$$3({ target: "Promise", stat: true, forced: FORCED }, {
  "try": function(callbackfn) {
    var args = arguments.length > 1 ? slice(arguments, 1) : [];
    var promiseCapability = newPromiseCapabilityModule$1.f(this);
    var result = perform(function() {
      return apply(aCallable(callbackfn), void 0, args);
    });
    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
    return promiseCapability.promise;
  }
});
var $$2 = _export;
var newPromiseCapabilityModule = newPromiseCapability$2;
$$2({ target: "Promise", stat: true }, {
  withResolvers: function withResolvers() {
    var promiseCapability = newPromiseCapabilityModule.f(this);
    return {
      promise: promiseCapability.promise,
      resolve: promiseCapability.resolve,
      reject: promiseCapability.reject
    };
  }
});
var $$1 = _export;
var NativePromiseConstructor = promiseNativeConstructor;
var fails = fails$j;
var getBuiltIn = getBuiltIn$d;
var isCallable = isCallable$n;
var speciesConstructor = speciesConstructor$2;
var promiseResolve = promiseResolve$2;
var defineBuiltIn = defineBuiltIn$9;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var NON_GENERIC = !!NativePromiseConstructor && fails(function() {
  NativePromisePrototype["finally"].call({ then: function() {
  } }, function() {
  });
});
$$1({ target: "Promise", proto: true, real: true, forced: NON_GENERIC }, {
  "finally": function(onFinally) {
    var C2 = speciesConstructor(this, getBuiltIn("Promise"));
    var isFunction = isCallable(onFinally);
    return this.then(
      isFunction ? function(x) {
        return promiseResolve(C2, onFinally()).then(function() {
          return x;
        });
      } : onFinally,
      isFunction ? function(e) {
        return promiseResolve(C2, onFinally()).then(function() {
          throw e;
        });
      } : onFinally
    );
  }
});
if (isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn("Promise").prototype["finally"];
  if (NativePromisePrototype["finally"] !== method) {
    defineBuiltIn(NativePromisePrototype, "finally", method, { unsafe: true });
  }
}
var uncurryThis = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$3;
var toString$1 = toString$6;
var requireObjectCoercible = requireObjectCoercible$4;
var charAt$1 = uncurryThis("".charAt);
var charCodeAt = uncurryThis("".charCodeAt);
var stringSlice = uncurryThis("".slice);
var createMethod = function(CONVERT_TO_STRING) {
  return function($this, pos) {
    var S = toString$1(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : void 0;
    first = charCodeAt(S, position);
    return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt$1(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
  };
};
var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};
var charAt = stringMultibyte.charAt;
var toString3 = toString$6;
var InternalStateModule = internalState;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$2;
var STRING_ITERATOR = "String Iterator";
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
defineIterator(String, "String", function(iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString3(iterated),
    index: 0
  });
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(void 0, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});
var path = path$3;
path.Promise;
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a2, b2) {
  return a2 != a2 ? b2 == b2 : a2 !== b2 || a2 && typeof a2 === "object" || typeof a2 === "function";
}
let src_url_equal_anchor;
function src_url_equal(element_src, url) {
  if (element_src === url) return true;
  if (!src_url_equal_anchor) {
    src_url_equal_anchor = document.createElement("a");
  }
  src_url_equal_anchor.href = url;
  return element_src === src_url_equal_anchor.href;
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
function append(target, node2) {
  target.appendChild(node2);
}
function append_styles(target, style_sheet_id, styles) {
  const append_styles_to = get_root_for_style(target);
  if (!append_styles_to.getElementById(style_sheet_id)) {
    const style = element("style");
    style.id = style_sheet_id;
    style.textContent = styles;
    append_stylesheet(append_styles_to, style);
  }
}
function get_root_for_style(node2) {
  if (!node2) return document;
  const root = node2.getRootNode ? node2.getRootNode() : node2.ownerDocument;
  if (root && /** @type {ShadowRoot} */
  root.host) {
    return (
      /** @type {ShadowRoot} */
      root
    );
  }
  return node2.ownerDocument;
}
function append_stylesheet(node2, style) {
  append(
    /** @type {Document} */
    node2.head || node2,
    style
  );
  return style.sheet;
}
function insert(target, node2, anchor) {
  target.insertBefore(node2, anchor || null);
}
function detach(node2) {
  if (node2.parentNode) {
    node2.parentNode.removeChild(node2);
  }
}
function element(name) {
  return document.createElement(name);
}
function svg_element(name) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}
function text(data2) {
  return document.createTextNode(data2);
}
function space() {
  return text(" ");
}
function empty() {
  return text("");
}
function listen(node2, event, handler, options) {
  node2.addEventListener(event, handler, options);
  return () => node2.removeEventListener(event, handler, options);
}
function attr(node2, attribute, value) {
  if (value == null) node2.removeAttribute(attribute);
  else if (node2.getAttribute(attribute) !== value) node2.setAttribute(attribute, value);
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_style(node2, key, value, important) {
  if (value == null) {
    node2.style.removeProperty(key);
  } else {
    node2.style.setProperty(key, value, "");
  }
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
  return new CustomEvent(type, { detail, bubbles, cancelable });
}
let current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component) throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail, { cancelable = false } = {}) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(
        /** @type {string} */
        type,
        detail,
        { cancelable }
      );
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
      return !event.defaultPrevented;
    }
    return true;
  };
}
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length) binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
function flush_render_callbacks(fns) {
  const filtered = [];
  const targets = [];
  render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
  targets.forEach((c) => c());
  render_callbacks = filtered;
}
const outroing = /* @__PURE__ */ new Set();
let outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
    // parent group
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach2) block.d(1);
        callback();
      }
    });
    block.o(local);
  } else if (callback) {
    callback();
  }
}
function ensure_array_like(array_like_or_iterator) {
  return (array_like_or_iterator == null ? void 0 : array_like_or_iterator.length) !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}
function destroy_block(block, lookup) {
  block.d(1);
  lookup.delete(block.key);
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node2, destroy, create_each_block2, next2, get_context) {
  let o = old_blocks.length;
  let n = list.length;
  let i = o;
  const old_indexes = {};
  while (i--) old_indexes[old_blocks[i].key] = i;
  const new_blocks = [];
  const new_lookup = /* @__PURE__ */ new Map();
  const deltas = /* @__PURE__ */ new Map();
  const updates = [];
  i = n;
  while (i--) {
    const child_ctx = get_context(ctx, list, i);
    const key = get_key(child_ctx);
    let block = lookup.get(key);
    if (!block) {
      block = create_each_block2(key, child_ctx);
      block.c();
    } else {
      updates.push(() => block.p(child_ctx, dirty));
    }
    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
  }
  const will_move = /* @__PURE__ */ new Set();
  const did_move = /* @__PURE__ */ new Set();
  function insert2(block) {
    transition_in(block, 1);
    block.m(node2, next2);
    lookup.set(block.key, block);
    next2 = block.first;
    n--;
  }
  while (o && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;
    if (new_block === old_block) {
      next2 = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert2(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert2(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }
  while (o--) {
    const old_block = old_blocks[o];
    if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
  }
  while (n) insert2(new_blocks[n - 1]);
  run_all(updates);
  return new_blocks;
}
function create_component(block) {
  block && block.c();
}
function mount_component(component, target, anchor) {
  const { fragment, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  add_render_callback(() => {
    const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
    if (component.$$.on_destroy) {
      component.$$.on_destroy.push(...new_on_destroy);
    } else {
      run_all(new_on_destroy);
    }
    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    flush_render_callbacks($$.after_update);
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance2, create_fragment2, not_equal, props, append_styles2 = null, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: [],
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles2 && append_styles2($$.root);
  let ready = false;
  $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    flush();
  }
  set_current_component(parent_component);
}
class SvelteComponent {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    __publicField(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    __publicField(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(type, callback) {
    if (!is_function(callback)) {
      return noop;
    }
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(props) {
    if (this.$$set && !is_empty(props)) {
      this.$$.skip_bound = true;
      this.$$set(props);
      this.$$.skip_bound = false;
    }
  }
}
const PUBLIC_VERSION = "4";
if (typeof window !== "undefined")
  (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(PUBLIC_VERSION);
function $(e, t, u, x = (h) => h) {
  return e * x(0.5 - t * (0.5 - u));
}
function se(e) {
  return [-e[0], -e[1]];
}
function l(e, t) {
  return [e[0] + t[0], e[1] + t[1]];
}
function a(e, t) {
  return [e[0] - t[0], e[1] - t[1]];
}
function b(e, t) {
  return [e[0] * t, e[1] * t];
}
function he(e, t) {
  return [e[0] / t, e[1] / t];
}
function R(e) {
  return [e[1], -e[0]];
}
function B(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function ue(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function ge(e) {
  return Math.hypot(e[0], e[1]);
}
function de(e) {
  return e[0] * e[0] + e[1] * e[1];
}
function A(e, t) {
  return de(a(e, t));
}
function G(e) {
  return he(e, ge(e));
}
function ie(e, t) {
  return Math.hypot(e[1] - t[1], e[0] - t[0]);
}
function L(e, t, u) {
  let x = Math.sin(u), h = Math.cos(u), y = e[0] - t[0], n = e[1] - t[1], f = y * h - n * x, d = y * x + n * h;
  return [f + t[0], d + t[1]];
}
function K(e, t, u) {
  return l(e, b(a(t, e), u));
}
function ee(e, t, u) {
  return l(e, b(t, u));
}
var { min: C, PI: xe } = Math, pe = 0.275, V = xe + 1e-4;
function ce(e, t = {}) {
  let { size: u = 16, smoothing: x = 0.5, thinning: h = 0.5, simulatePressure: y = true, easing: n = (r) => r, start: f = {}, end: d = {}, last: D = false } = t, { cap: S = true, easing: j = (r) => r * (2 - r) } = f, { cap: q = true, easing: c = (r) => --r * r * r + 1 } = d;
  if (e.length === 0 || u <= 0) return [];
  let p = e[e.length - 1].runningLength, g = f.taper === false ? 0 : f.taper === true ? Math.max(u, p) : f.taper, T = d.taper === false ? 0 : d.taper === true ? Math.max(u, p) : d.taper, te = Math.pow(u * x, 2), _ = [], M = [], H = e.slice(0, 10).reduce((r, i) => {
    let o = i.pressure;
    if (y) {
      let s = C(1, i.distance / u), W = C(1, 1 - s);
      o = C(1, r + (W - r) * (s * pe));
    }
    return (r + o) / 2;
  }, e[0].pressure), m = $(u, h, e[e.length - 1].pressure, n), U, X = e[0].vector, z = e[0].point, F = z, O = z, E = F, J = false;
  for (let r = 0; r < e.length; r++) {
    let { pressure: i } = e[r], { point: o, vector: s, distance: W, runningLength: I } = e[r];
    if (r < e.length - 1 && p - I < 3) continue;
    if (h) {
      if (y) {
        let v = C(1, W / u), Z = C(1, 1 - v);
        i = C(1, H + (Z - H) * (v * pe));
      }
      m = $(u, h, i, n);
    } else m = u / 2;
    U === void 0 && (U = m);
    let le = I < g ? j(I / g) : 1, fe = p - I < T ? c((p - I) / T) : 1;
    m = Math.max(0.01, m * Math.min(le, fe));
    let re = (r < e.length - 1 ? e[r + 1] : e[r]).vector, Y = r < e.length - 1 ? B(s, re) : 1, be = B(s, X) < 0 && !J, ne = Y !== null && Y < 0;
    if (be || ne) {
      let v = b(R(X), m);
      for (let Z = 1 / 13, w = 0; w <= 1; w += Z) O = L(a(o, v), o, V * w), _.push(O), E = L(l(o, v), o, V * -w), M.push(E);
      z = O, F = E, ne && (J = true);
      continue;
    }
    if (J = false, r === e.length - 1) {
      let v = b(R(s), m);
      _.push(a(o, v)), M.push(l(o, v));
      continue;
    }
    let oe = b(R(K(re, s, Y)), m);
    O = a(o, oe), (r <= 1 || A(z, O) > te) && (_.push(O), z = O), E = l(o, oe), (r <= 1 || A(F, E) > te) && (M.push(E), F = E), H = i, X = s;
  }
  let P = e[0].point.slice(0, 2), k = e.length > 1 ? e[e.length - 1].point.slice(0, 2) : l(e[0].point, [1, 1]), Q = [], N = [];
  if (e.length === 1) {
    if (!(g || T) || D) {
      let r = ee(P, G(R(a(P, k))), -(U || m)), i = [];
      for (let o = 1 / 13, s = o; s <= 1; s += o) i.push(L(r, P, V * 2 * s));
      return i;
    }
  } else {
    if (!(g || T && e.length === 1)) if (S) for (let i = 1 / 13, o = i; o <= 1; o += i) {
      let s = L(M[0], P, V * o);
      Q.push(s);
    }
    else {
      let i = a(_[0], M[0]), o = b(i, 0.5), s = b(i, 0.51);
      Q.push(a(P, o), a(P, s), l(P, s), l(P, o));
    }
    let r = R(se(e[e.length - 1].vector));
    if (T || g && e.length === 1) N.push(k);
    else if (q) {
      let i = ee(k, r, m);
      for (let o = 1 / 29, s = o; s < 1; s += o) N.push(L(i, k, V * 3 * s));
    } else N.push(l(k, b(r, m)), l(k, b(r, m * 0.99)), a(k, b(r, m * 0.99)), a(k, b(r, m)));
  }
  return _.concat(N, M.reverse(), Q);
}
function me(e, t = {}) {
  var q;
  let { streamline: u = 0.5, size: x = 16, last: h = false } = t;
  if (e.length === 0) return [];
  let y = 0.15 + (1 - u) * 0.85, n = Array.isArray(e[0]) ? e : e.map(({ x: c, y: p, pressure: g = 0.5 }) => [c, p, g]);
  if (n.length === 2) {
    let c = n[1];
    n = n.slice(0, -1);
    for (let p = 1; p < 5; p++) n.push(K(n[0], c, p / 4));
  }
  n.length === 1 && (n = [...n, [...l(n[0], [1, 1]), ...n[0].slice(2)]]);
  let f = [{ point: [n[0][0], n[0][1]], pressure: n[0][2] >= 0 ? n[0][2] : 0.25, vector: [1, 1], distance: 0, runningLength: 0 }], d = false, D = 0, S = f[0], j = n.length - 1;
  for (let c = 1; c < n.length; c++) {
    let p = h && c === j ? n[c].slice(0, 2) : K(S.point, n[c], y);
    if (ue(S.point, p)) continue;
    let g = ie(p, S.point);
    if (D += g, c < j && !d) {
      if (D < x) continue;
      d = true;
    }
    S = { point: p, pressure: n[c][2] >= 0 ? n[c][2] : 0.5, vector: G(a(S.point, p)), distance: g, runningLength: D }, f.push(S);
  }
  return f[0].vector = ((q = f[1]) == null ? void 0 : q.vector) || [0, 0], f;
}
function ae(e, t = {}) {
  return ce(me(e, t), t);
}
function add_css$1(target) {
  append_styles(target, "svelte-nbwwal", ".usb-paint-tools.svelte-nbwwal.svelte-nbwwal{position:absolute;z-index:99;display:flex}.usb-paint-tools.svelte-nbwwal .gap.svelte-nbwwal{width:8px}.left.svelte-nbwwal.svelte-nbwwal{left:5px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;justify-content:center;align-items:center}.right.svelte-nbwwal.svelte-nbwwal{right:5px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;justify-content:center;align-items:center}.top.svelte-nbwwal.svelte-nbwwal{top:5px;left:50%;transform:translateX(-50%);display:flex;flex-direction:row;justify-content:center;align-items:center}.bottom.svelte-nbwwal.svelte-nbwwal{bottom:5px;left:50%;transform:translateX(-50%);display:flex;flex-direction:row;justify-content:center;align-items:center}.tool-svg.svelte-nbwwal.svelte-nbwwal{margin:5px;padding:3px}.tool-svg-active.svelte-nbwwal.svelte-nbwwal{background-color:#e0dfff;border-radius:5px}");
}
function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}
function create_if_block$1(ctx) {
  var svg;
  var raw_value = (
    /*toolsIcon*/
    ctx[4][
      /*tool*/
      ctx[9]
    ].icon + ""
  );
  var svg_width_value;
  var svg_height_value;
  var svg_stroke_value;
  var svg_stroke_width_value;
  var svg_fill_value;
  var svg_class_value;
  var mounted;
  var dispose;
  function click_handler() {
    return (
      /*click_handler*/
      ctx[6](
        /*tool*/
        ctx[9]
      )
    );
  }
  return {
    c() {
      var _a, _b, _c, _d, _e;
      svg = svg_element("svg");
      attr(svg, "viewBox", "0 0 20 20");
      attr(svg, "width", svg_width_value = /*toolsConfig*/
      (_a = ctx[0].iconsConfig) == null ? void 0 : _a.size);
      attr(svg, "height", svg_height_value = /*toolsConfig*/
      (_b = ctx[0].iconsConfig) == null ? void 0 : _b.size);
      attr(svg, "stroke", svg_stroke_value = /*toolsConfig*/
      (_c = ctx[0].iconsConfig) == null ? void 0 : _c.color);
      attr(svg, "stroke-width", svg_stroke_width_value = /*toolsConfig*/
      (_d = ctx[0].iconsConfig) == null ? void 0 : _d.width);
      attr(svg, "fill", svg_fill_value = /*toolsConfig*/
      (_e = ctx[0].iconsConfig) == null ? void 0 : _e.fill);
      attr(svg, "stroke-linecap", "round");
      attr(svg, "stroke-linejoin", "round");
      attr(svg, "class", svg_class_value = null_to_empty(`tool-svg ${/*activeIcon*/
      ctx[3] === /*tool*/
      ctx[9] && "tool-svg-active"}`) + " svelte-nbwwal");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      svg.innerHTML = raw_value;
      if (!mounted) {
        dispose = listen(svg, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      var _a, _b, _c, _d, _e;
      ctx = new_ctx;
      if (dirty & /*toolsConfig*/
      1 && raw_value !== (raw_value = /*toolsIcon*/
      ctx[4][
        /*tool*/
        ctx[9]
      ].icon + "")) svg.innerHTML = raw_value;
      if (dirty & /*toolsConfig*/
      1 && svg_width_value !== (svg_width_value = /*toolsConfig*/
      (_a = ctx[0].iconsConfig) == null ? void 0 : _a.size)) {
        attr(svg, "width", svg_width_value);
      }
      if (dirty & /*toolsConfig*/
      1 && svg_height_value !== (svg_height_value = /*toolsConfig*/
      (_b = ctx[0].iconsConfig) == null ? void 0 : _b.size)) {
        attr(svg, "height", svg_height_value);
      }
      if (dirty & /*toolsConfig*/
      1 && svg_stroke_value !== (svg_stroke_value = /*toolsConfig*/
      (_c = ctx[0].iconsConfig) == null ? void 0 : _c.color)) {
        attr(svg, "stroke", svg_stroke_value);
      }
      if (dirty & /*toolsConfig*/
      1 && svg_stroke_width_value !== (svg_stroke_width_value = /*toolsConfig*/
      (_d = ctx[0].iconsConfig) == null ? void 0 : _d.width)) {
        attr(svg, "stroke-width", svg_stroke_width_value);
      }
      if (dirty & /*toolsConfig*/
      1 && svg_fill_value !== (svg_fill_value = /*toolsConfig*/
      (_e = ctx[0].iconsConfig) == null ? void 0 : _e.fill)) {
        attr(svg, "fill", svg_fill_value);
      }
      if (dirty & /*activeIcon, toolsConfig*/
      9 && svg_class_value !== (svg_class_value = null_to_empty(`tool-svg ${/*activeIcon*/
      ctx[3] === /*tool*/
      ctx[9] && "tool-svg-active"}`) + " svelte-nbwwal")) {
        attr(svg, "class", svg_class_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(svg);
      }
      mounted = false;
      dispose();
    }
  };
}
function create_each_block(key_1, ctx) {
  var first;
  var if_block_anchor;
  var if_block = (
    /*toolsIcon*/
    ctx[4][
      /*tool*/
      ctx[9]
    ] && create_if_block$1(ctx)
  );
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      if (if_block) if_block.c();
      if_block_anchor = empty();
      this.first = first;
    },
    m(target, anchor) {
      insert(target, first, anchor);
      if (if_block) if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (
        /*toolsIcon*/
        ctx[4][
          /*tool*/
          ctx[9]
        ]
      ) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$1(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(first);
        detach(if_block_anchor);
      }
      if (if_block) if_block.d(detaching);
    }
  };
}
function create_fragment$1(ctx) {
  var div2;
  var div0;
  var t0;
  var each_blocks = [];
  var each_1_lookup = /* @__PURE__ */ new Map();
  var t1;
  var div1;
  var div2_class_value;
  var each_value = ensure_array_like(
    /*toolsConfig*/
    ctx[0].tools || []
  );
  var get_key = (ctx2) => (
    /*tool*/
    ctx2[9]
  );
  for (var i = 0; i < each_value.length; i += 1) {
    var child_ctx = get_each_context(ctx, each_value, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = space();
      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }
      t1 = space();
      div1 = element("div");
      attr(div0, "class", "gap svelte-nbwwal");
      attr(div1, "class", "gap svelte-nbwwal");
      attr(
        div2,
        "style",
        /*styleStr*/
        ctx[1]
      );
      attr(div2, "class", div2_class_value = null_to_empty(
        /*poiClass*/
        ctx[2]
      ) + " svelte-nbwwal");
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, div0);
      append(div2, t0);
      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        if (each_blocks[_i2]) {
          each_blocks[_i2].m(div2, null);
        }
      }
      append(div2, t1);
      append(div2, div1);
    },
    p(ctx2, _ref) {
      var [dirty] = _ref;
      if (dirty & /*toolsConfig, activeIcon, selectTool, toolsIcon*/
      57) {
        each_value = ensure_array_like(
          /*toolsConfig*/
          ctx2[0].tools || []
        );
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div2, destroy_block, create_each_block, t1, get_each_context);
      }
      if (dirty & /*styleStr*/
      2) {
        attr(
          div2,
          "style",
          /*styleStr*/
          ctx2[1]
        );
      }
      if (dirty & /*poiClass*/
      4 && div2_class_value !== (div2_class_value = null_to_empty(
        /*poiClass*/
        ctx2[2]
      ) + " svelte-nbwwal")) {
        attr(div2, "class", div2_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].d();
      }
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  var dispatch = createEventDispatcher();
  var {
    toolsConfig
  } = $$props;
  var toolsIcon = {
    paint: {
      type: "paint",
      icon: `<path clipRule="evenodd" d="m7.643 15.69 7.774-7.773a2.357 2.357 0 1 0-3.334-3.334L4.31 12.357a3.333 3.333 0 0 0-.977 2.357v1.953h1.953c.884 0 1.732-.352 2.357-.977Z"/><path d="m11.25 5.417 3.333 3.333" />`
    },
    eraser: {
      type: "eraser",
      icon: `<path stroke="none" d="M0 0h24v24H0z" fill="none" transform="scale(0.9)"></path><path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" transform="scale(0.9)"></path><path d="M18 13.3l-6.3 -6.3" transform="scale(0.9)"></path>`
    },
    trash: {
      type: "trash",
      icon: `<path stroke-width="1.25" d="M3.333 5.833h13.334M8.333 9.167v5M11.667 9.167v5M4.167 5.833l.833 10c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.746 1.667-1.667l.833-10M7.5 5.833v-2.5c0-.46.373-.833.833-.833h3.334c.46 0 .833.373.833.833v2.5"></path>`
    },
    panel: {
      type: "panel",
      icon: `<g transform="scale(0.9)"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l-4 7h8z"></path><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path></g>`
    },
    export: {
      type: "export",
      icon: `<g transform="scale(0.9)"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 8h.01"></path><path d="M12 20h-5a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v5"></path><path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4"></path><path d="M14 14l1 -1c.617 -.593 1.328 -.793 2.009 -.598"></path><path d="M19 16v6"></path><path d="M22 19l-3 3l-3 -3"></path></g>`
    }
  };
  var styleStr = "";
  var poiClass = "usb-paint-tools ";
  var activeIcon = "paint";
  onMount(() => {
    setToolsStyle();
  });
  var setToolsStyle = () => {
    var _a, _b, _c;
    if (toolsConfig == null ? void 0 : toolsConfig.backgroud) {
      ((_a = toolsConfig.backgroud) == null ? void 0 : _a.color) && $$invalidate(1, styleStr += `background-color: ${toolsConfig.backgroud.color};`);
      ((_b = toolsConfig.backgroud) == null ? void 0 : _b.border) && $$invalidate(1, styleStr += `border: ${toolsConfig.backgroud.border};`);
      ((_c = toolsConfig.backgroud) == null ? void 0 : _c.radius) && $$invalidate(1, styleStr += `border-radius: ${toolsConfig.backgroud.radius}px;`);
    }
    if (toolsConfig.position) {
      if (toolsConfig.position instanceof Object && !isNaN(toolsConfig.position.x) && !isNaN(toolsConfig.position.y)) {
        $$invalidate(1, styleStr += `left: ${toolsConfig.position.x}px;`);
        $$invalidate(1, styleStr += `top: ${toolsConfig.position.y}px;`);
        $$invalidate(1, styleStr += `flex-direction: ${toolsConfig.position.direction || "column"};`);
      }
      if (toolsConfig.position && ["left", "right", "top", "bottom"].includes(toolsConfig.position)) {
        $$invalidate(2, poiClass += toolsConfig.position);
      }
    }
  };
  var selectTool = (tool) => {
    $$invalidate(3, activeIcon = tool);
    dispatch("selectTool", {
      tool
    });
    if (["trash", "export"].includes(tool)) {
      var timer = setTimeout(() => {
        selectTool("paint");
        clearTimeout(timer);
      }, 300);
    }
  };
  var click_handler = (tool) => selectTool(tool);
  $$self.$$set = ($$props2) => {
    if ("toolsConfig" in $$props2) $$invalidate(0, toolsConfig = $$props2.toolsConfig);
  };
  return [toolsConfig, styleStr, poiClass, activeIcon, toolsIcon, selectTool, click_handler];
}
class Tools extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      toolsConfig: 0
    }, add_css$1);
  }
}
var calcColorBrightness = (canvas, ctx) => {
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data2 = imageData.data;
  var r = 0, g = 0, b2 = 0;
  var totalPixels = data2.length / 4;
  for (var i = 0; i < data2.length; i += 4) {
    r += data2[i];
    g += data2[i + 1];
    b2 += data2[i + 2];
  }
  r = Math.floor(r / totalPixels);
  g = Math.floor(g / totalPixels);
  b2 = Math.floor(b2 / totalPixels);
  var brightness = 0.299 * r + 0.587 * g + 0.114 * b2;
  if (brightness > 128 || brightness == 0) {
    return "white";
  } else {
    return "black";
  }
};
function add_css(target) {
  append_styles(target, "svelte-gm9yxt", ".usb-paint-container.svelte-gm9yxt{height:100%;width:100%}");
}
function create_if_block(ctx) {
  var tools;
  var current;
  tools = new Tools({
    props: {
      toolsConfig: (
        /*toolsConfig*/
        ctx[1]
      )
    }
  });
  tools.$on(
    "selectTool",
    /*handleSelectTool*/
    ctx[2]
  );
  return {
    c() {
      create_component(tools.$$.fragment);
    },
    m(target, anchor) {
      mount_component(tools, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      var tools_changes = {};
      if (dirty & /*toolsConfig*/
      2) tools_changes.toolsConfig = /*toolsConfig*/
      ctx2[1];
      tools.$set(tools_changes);
    },
    i(local) {
      if (current) return;
      transition_in(tools.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tools.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tools, detaching);
    }
  };
}
function create_fragment(ctx) {
  var div;
  var t0;
  var canvas;
  var t1;
  var img;
  var img_src_value;
  var current;
  var if_block = (
    /*showTools*/
    ctx[0] && create_if_block(ctx)
  );
  return {
    c() {
      div = element("div");
      if (if_block) if_block.c();
      t0 = space();
      canvas = element("canvas");
      t1 = space();
      img = element("img");
      attr(canvas, "id", "usb-paint-canvas");
      set_style(canvas, "touch-action", "none");
      if (!src_url_equal(img.src, img_src_value = imgUrl)) attr(img, "src", img_src_value);
      set_style(img, "height", "200px");
      attr(img, "alt", "");
      attr(
        div,
        "style",
        /*usbdScale*/
        ctx[3]
      );
      attr(div, "class", "usb-paint-container svelte-gm9yxt");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (if_block) if_block.m(div, null);
      append(div, t0);
      append(div, canvas);
      append(div, t1);
      append(div, img);
      current = true;
    },
    p(ctx2, _ref) {
      var [dirty] = _ref;
      if (
        /*showTools*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*showTools*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, t0);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (if_block) if_block.d();
    }
  };
}
var eraserLineWidth = 25;
var imgUrl = "";
function instance($$self, $$props, $$invalidate) {
  var {
    scale = 10
  } = $$props;
  var {
    parentDom
  } = $$props;
  var {
    lineOptions
  } = $$props;
  var {
    showTools
  } = $$props;
  var {
    showScale
  } = $$props;
  var {
    toolsConfig
  } = $$props;
  var {
    background
  } = $$props;
  var usbdScale = `--USBD-SCALE: ${scale}px`;
  var canvasEl;
  var ctx2d;
  var isEraser = false;
  var colorBrightness = "white";
  var isPainted = false;
  onMount(() => {
    canvasEl = document.getElementById("usb-paint-canvas");
    if (canvasEl) {
      ctx2d = canvasEl.getContext("2d");
      transRatio(canvasEl, ctx2d);
      setCanvasBgc();
      freedomPaint();
    }
  });
  var freedomPaint = () => {
    if (canvasEl && ctx2d) {
      colorBrightness = calcColorBrightness(canvasEl, ctx2d);
      var isDrawing = false;
      var points = [];
      ctx2d.globalCompositeOperation = "source-over";
      setPcCursor("paint");
      if (lineOptions.lineColor) {
        ctx2d.fillStyle = lineOptions.lineColor;
      }
      if (lineOptions.lineAlpha) {
        ctx2d.globalAlpha = lineOptions.lineAlpha;
      }
      ctx2d.lineCap = "round";
      ctx2d.lineJoin = "round";
      ctx2d.imageSmoothingEnabled = true;
      canvasEl.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        isDrawing = true;
        points = [[e.offsetX, e.offsetY]];
        canvasEl == null ? void 0 : canvasEl.setPointerCapture(e.pointerId);
      });
      canvasEl.addEventListener("pointermove", (e) => {
        e.preventDefault();
        if (!isDrawing) return;
        isPainted = true;
        points.push([e.offsetX, e.offsetY]);
        var pathData = ae(points, {
          simulatePressure: true,
          size: isEraser ? eraserLineWidth : lineOptions.lineWidth,
          // 线条宽度
          smoothing: lineOptions.lineSmooth,
          // 平滑度
          thinning: lineOptions.lineThin,
          // 线条随压力变化
          streamline: lineOptions.lineStream,
          // 线条流畅度
          start: {
            taper: lineOptions.lineStart
          },
          // 开始处圆滑过渡
          end: {
            taper: lineOptions.lineEnd
          },
          // 结束处圆滑过渡
          easing: (t) => Math.sin(t * Math.PI / 2)
        });
        ctx2d.beginPath();
        pathData.forEach((_ref2, index) => {
          var [x, y] = _ref2;
          if (index === 0) {
            ctx2d.moveTo(x, y);
          } else {
            ctx2d.lineTo(x, y);
          }
        });
        ctx2d.fill();
        ctx2d.closePath();
      });
      canvasEl.addEventListener("pointerup", (e) => {
        e.preventDefault();
        isDrawing = false;
        canvasEl == null ? void 0 : canvasEl.releasePointerCapture(e.pointerId);
      });
      canvasEl.addEventListener("pointerleave", (e) => {
        e.preventDefault();
        isDrawing = false;
      });
    }
  };
  var eraserTool = () => {
    if (background) {
      ctx2d.fillStyle = background;
      ctx2d.globalCompositeOperation = "source-over";
    } else {
      ctx2d.globalCompositeOperation = "destination-out";
    }
  };
  var transRatio = (cvs, ctx) => {
    var width = parentDom.offsetWidth;
    var height = parentDom.offsetHeight;
    var ratio = window.devicePixelRatio || 1;
    cvs.width = width * ratio;
    cvs.height = height * ratio;
    cvs.style.width = width + "px";
    cvs.style.height = height + "px";
    ctx.scale(ratio, ratio);
  };
  var setCanvasBgc = () => {
    if (canvasEl && ctx2d && background) {
      ctx2d.save();
      ctx2d.globalAlpha = 1;
      ctx2d.fillStyle = background;
      ctx2d.fillRect(0, 0, canvasEl.width, canvasEl.height);
      ctx2d.restore();
    }
  };
  var handleSelectTool = (event) => {
    var tool = event.detail.tool;
    isEraser = false;
    setPcCursor(tool);
    switch (tool) {
      case "paint":
        freedomPaint();
        break;
      case "eraser":
        isEraser = true;
        eraserTool();
        break;
      case "trash":
        if (canvasEl && ctx2d) {
          if (background) {
            setCanvasBgc();
          } else {
            ctx2d.clearRect(0, 0, canvasEl.width, canvasEl.height);
          }
          isPainted = false;
        }
        break;
      case "export":
        canvasEl && exportToFile(canvasEl);
        break;
    }
  };
  var setPcCursor = (type) => {
    if (!canvasEl) return;
    switch (type) {
      case "paint":
        var paintIcon = colorBrightness == "white" ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItZWRpdC0yIj48cGF0aCBkPSJNMTcgM2EyLjgyOCAyLjgyOCAwIDEgMSA0IDRMNy41IDIwLjUgMiAyMmwxLjUtNS41TDE3IDN6Ij48L3BhdGg+PC9zdmc+" : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWVkaXQtMiI+PHBhdGggZD0iTTE3IDNhMi44MjggMi44MjggMCAxIDEgNCA0TDcuNSAyMC41IDIgMjJsMS41LTUuNUwxNyAzeiI+PC9wYXRoPjwvc3ZnPg==";
        canvasEl.style.cursor = `url(${paintIcon}) 0 20, auto`;
        break;
      case "eraser":
        var eraserIcon = colorBrightness == "white" ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNpcmNsZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiPjwvY2lyY2xlPjwvc3ZnPg==" : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNpcmNsZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiPjwvY2lyY2xlPjwvc3ZnPg==";
        canvasEl.style.cursor = `url(${eraserIcon}) 0 20, auto`;
        break;
      default:
        canvasEl.style.cursor = "default";
        break;
    }
  };
  var exportToFile = (canvas) => {
    canvas.toBlob((blob) => {
      if (!blob) return;
      var url = URL.createObjectURL(blob);
      var link = document.createElement("a");
      link.href = url;
      link.download = "canvas-image.png";
      link.click();
      URL.revokeObjectURL(url);
    }, "image/png");
  };
  var isPaint = () => {
    return isPainted;
  };
  $$self.$$set = ($$props2) => {
    if ("scale" in $$props2) $$invalidate(4, scale = $$props2.scale);
    if ("parentDom" in $$props2) $$invalidate(5, parentDom = $$props2.parentDom);
    if ("lineOptions" in $$props2) $$invalidate(6, lineOptions = $$props2.lineOptions);
    if ("showTools" in $$props2) $$invalidate(0, showTools = $$props2.showTools);
    if ("showScale" in $$props2) $$invalidate(7, showScale = $$props2.showScale);
    if ("toolsConfig" in $$props2) $$invalidate(1, toolsConfig = $$props2.toolsConfig);
    if ("background" in $$props2) $$invalidate(8, background = $$props2.background);
  };
  return [showTools, toolsConfig, handleSelectTool, usbdScale, scale, parentDom, lineOptions, showScale, background, isPaint];
}
class Core extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      scale: 4,
      parentDom: 5,
      lineOptions: 6,
      showTools: 0,
      showScale: 7,
      toolsConfig: 1,
      background: 8,
      handleSelectTool: 2,
      isPaint: 9
    }, add_css);
  }
  get handleSelectTool() {
    return this.$$.ctx[2];
  }
  get isPaint() {
    return this.$$.ctx[9];
  }
}
class USBPaint {
  constructor(opt) {
    this.option = {};
    this.isInited = false;
    this.mainInstance = void 0;
    this.eraserTool = () => {
      var _a;
      (_a = this.mainInstance) == null ? void 0 : _a.handleSelectTool({
        detail: {
          tool: "eraser"
        }
      });
    };
    this.freeDrawTool = () => {
      var _a;
      (_a = this.mainInstance) == null ? void 0 : _a.handleSelectTool({
        detail: {
          tool: "paint"
        }
      });
    };
    this.clearTool = () => {
      var _a;
      (_a = this.mainInstance) == null ? void 0 : _a.handleSelectTool({
        detail: {
          tool: "trash"
        }
      });
    };
    this.isPaint = () => {
      var _a;
      return (_a = this.mainInstance) == null ? void 0 : _a.isPaint();
    };
    this.option = opt || {};
    this.isInited = false;
    var _onload = () => {
      if (this.isInited) {
        return;
      }
      this._initRun();
    };
    var _timer;
    var _pollingDocument = () => {
      if (!!document && document.readyState == "complete") {
        _timer && clearTimeout(_timer);
        _onload();
      } else {
        _timer = setTimeout(_pollingDocument, 10);
      }
    };
    if (document !== void 0) {
      if (document.readyState === "loading") {
        _timer = setTimeout(_pollingDocument, 10);
      } else {
        _onload();
      }
    } else {
      _timer = setTimeout(_pollingDocument, 10);
    }
  }
  // init || 初始化
  _initRun() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X;
    this.isInited = true;
    var target;
    if (typeof this.option.target === "string") {
      target = document.querySelector(this.option.target);
    } else if (this.option.target instanceof HTMLElement) {
      target = this.option.target;
    }
    if (!(target instanceof HTMLElement)) {
      return;
    }
    var tools = [];
    if (((_b = (_a = this.option) == null ? void 0 : _a.toolsConfig) == null ? void 0 : _b.tools) === "all") {
      tools = ["paint", "eraser", "trash", "export"];
    } else if (((_d = (_c = this.option) == null ? void 0 : _c.toolsConfig) == null ? void 0 : _d.tools) instanceof Array) {
      tools = this.option.toolsConfig.tools;
    }
    this.mainInstance = new Core({
      target,
      // 挂载点
      props: {
        parentDom: target,
        scale: this.option.scale || 10,
        lineOptions: {
          lineWidth: ((_f = (_e = this.option) == null ? void 0 : _e.lineOptions) == null ? void 0 : _f.lineWidth) || 4,
          lineColor: ((_h = (_g = this.option) == null ? void 0 : _g.lineOptions) == null ? void 0 : _h.lineColor) || "#000",
          lineAlpha: ((_j = (_i = this.option) == null ? void 0 : _i.lineOptions) == null ? void 0 : _j.lineAlpha) || 1,
          lineSmooth: ((_l = (_k = this.option) == null ? void 0 : _k.lineOptions) == null ? void 0 : _l.lineSmooth) || 1,
          lineThin: ((_n = (_m = this.option) == null ? void 0 : _m.lineOptions) == null ? void 0 : _n.lineThin) || 0.6,
          lineStream: ((_p = (_o = this.option) == null ? void 0 : _o.lineOptions) == null ? void 0 : _p.lineStream) || 1,
          lineStart: isNaN((_r = (_q = this.option) == null ? void 0 : _q.lineOptions) == null ? void 0 : _r.lineStart) ? 0 : (_t = (_s = this.option) == null ? void 0 : _s.lineOptions) == null ? void 0 : _t.lineStart,
          lineEnd: isNaN((_v = (_u = this.option) == null ? void 0 : _u.lineOptions) == null ? void 0 : _v.lineEnd) ? 100 : (_x = (_w = this.option) == null ? void 0 : _w.lineOptions) == null ? void 0 : _x.lineEnd
        },
        showTools: !!((_y = this.option) == null ? void 0 : _y.showTools),
        toolsConfig: {
          tools,
          position: ((_A = (_z = this.option) == null ? void 0 : _z.toolsConfig) == null ? void 0 : _A.position) || "top",
          iconsConfig: {
            size: ((_D = (_C = (_B = this.option) == null ? void 0 : _B.toolsConfig) == null ? void 0 : _C.iconsConfig) == null ? void 0 : _D.size) || 20,
            width: ((_G = (_F = (_E = this.option) == null ? void 0 : _E.toolsConfig) == null ? void 0 : _F.iconsConfig) == null ? void 0 : _G.width) || 1.25,
            color: ((_J = (_I = (_H = this.option) == null ? void 0 : _H.toolsConfig) == null ? void 0 : _I.iconsConfig) == null ? void 0 : _J.color) || "#000",
            fill: ((_M = (_L = (_K = this.option) == null ? void 0 : _K.toolsConfig) == null ? void 0 : _L.iconsConfig) == null ? void 0 : _M.fill) || "none"
          },
          backgroud: {
            color: ((_P = (_O = (_N = this.option) == null ? void 0 : _N.toolsConfig) == null ? void 0 : _O.backgroud) == null ? void 0 : _P.color) || "#fff",
            border: ((_S = (_R = (_Q = this.option) == null ? void 0 : _Q.toolsConfig) == null ? void 0 : _R.backgroud) == null ? void 0 : _S.border) || "1px solid rgba(0,0,0,0.1)",
            radius: ((_V = (_U = (_T = this.option) == null ? void 0 : _T.toolsConfig) == null ? void 0 : _U.backgroud) == null ? void 0 : _V.radius) || 10
          }
        },
        showScale: !!((_W = this.option) == null ? void 0 : _W.showScale),
        background: (_X = this.option) == null ? void 0 : _X.background
      }
    });
  }
  // 获取canvas的图片数据（base64）
  exportToImage() {
    var canvas = document.getElementById("usb-paint-canvas");
    if (canvas) {
      var imgType = "image/png";
      var imageData = canvas.toDataURL(imgType);
      return imageData;
    } else {
      return "";
    }
  }
}
export {
  USBPaint as default
};

(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/@babel/runtime/helpers/interopRequireDefault.js
  var require_interopRequireDefault = __commonJS({
    "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@polkadot/x-global/packageInfo.cjs
  var require_packageInfo = __commonJS({
    "node_modules/@polkadot/x-global/packageInfo.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.packageInfo = void 0;
      var packageInfo = {
        name: "@polkadot/x-global",
        path: typeof __dirname === "string" ? __dirname : "auto",
        type: "cjs",
        version: "8.7.1"
      };
      exports.packageInfo = packageInfo;
    }
  });

  // node_modules/@polkadot/x-global/index.cjs
  var require_x_global = __commonJS({
    "node_modules/@polkadot/x-global/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.exposeGlobal = exposeGlobal;
      exports.extractGlobal = extractGlobal;
      Object.defineProperty(exports, "packageInfo", {
        enumerable: true,
        get: function() {
          return _packageInfo.packageInfo;
        }
      });
      exports.xglobal = void 0;
      var _packageInfo = require_packageInfo();
      function evaluateThis(fn) {
        return fn("return this");
      }
      var xglobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : evaluateThis(Function);
      exports.xglobal = xglobal;
      function extractGlobal(name, fallback) {
        return typeof xglobal[name] === "undefined" ? fallback : xglobal[name];
      }
      function exposeGlobal(name, fallback) {
        if (typeof xglobal[name] === "undefined") {
          xglobal[name] = fallback;
        }
      }
    }
  });

  // node_modules/@polkadot/x-textdecoder/fallback.cjs
  var require_fallback = __commonJS({
    "node_modules/@polkadot/x-textdecoder/fallback.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TextDecoder = void 0;
      var TextDecoder2 = class {
        constructor(_) {
        }
        decode(value) {
          let result = "";
          for (let i = 0; i < value.length; i++) {
            result += String.fromCharCode(value[i]);
          }
          return result;
        }
      };
      exports.TextDecoder = TextDecoder2;
    }
  });

  // node_modules/@polkadot/x-textdecoder/packageInfo.cjs
  var require_packageInfo2 = __commonJS({
    "node_modules/@polkadot/x-textdecoder/packageInfo.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.packageInfo = void 0;
      var packageInfo = {
        name: "@polkadot/x-textdecoder",
        path: typeof __dirname === "string" ? __dirname : "auto",
        type: "cjs",
        version: "8.7.1"
      };
      exports.packageInfo = packageInfo;
    }
  });

  // node_modules/@polkadot/x-textdecoder/browser.cjs
  var require_browser = __commonJS({
    "node_modules/@polkadot/x-textdecoder/browser.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TextDecoder = void 0;
      Object.defineProperty(exports, "packageInfo", {
        enumerable: true,
        get: function() {
          return _packageInfo.packageInfo;
        }
      });
      var _xGlobal = require_x_global();
      var _fallback = require_fallback();
      var _packageInfo = require_packageInfo2();
      var TextDecoder2 = (0, _xGlobal.extractGlobal)("TextDecoder", _fallback.TextDecoder);
      exports.TextDecoder = TextDecoder2;
    }
  });

  // node_modules/@polkadot/x-textencoder/fallback.cjs
  var require_fallback2 = __commonJS({
    "node_modules/@polkadot/x-textencoder/fallback.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TextEncoder = void 0;
      var TextEncoder2 = class {
        encode(value) {
          const u8a = new Uint8Array(value.length);
          for (let i = 0; i < value.length; i++) {
            u8a[i] = value.charCodeAt(i);
          }
          return u8a;
        }
      };
      exports.TextEncoder = TextEncoder2;
    }
  });

  // node_modules/@polkadot/x-textencoder/packageInfo.cjs
  var require_packageInfo3 = __commonJS({
    "node_modules/@polkadot/x-textencoder/packageInfo.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.packageInfo = void 0;
      var packageInfo = {
        name: "@polkadot/x-textencoder",
        path: typeof __dirname === "string" ? __dirname : "auto",
        type: "cjs",
        version: "8.7.1"
      };
      exports.packageInfo = packageInfo;
    }
  });

  // node_modules/@polkadot/x-textencoder/browser.cjs
  var require_browser2 = __commonJS({
    "node_modules/@polkadot/x-textencoder/browser.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TextEncoder = void 0;
      Object.defineProperty(exports, "packageInfo", {
        enumerable: true,
        get: function() {
          return _packageInfo.packageInfo;
        }
      });
      var _xGlobal = require_x_global();
      var _fallback = require_fallback2();
      var _packageInfo = require_packageInfo3();
      var TextEncoder2 = (0, _xGlobal.extractGlobal)("TextEncoder", _fallback.TextEncoder);
      exports.TextEncoder = TextEncoder2;
    }
  });

  // node_modules/@polkadot/util/detectOther.cjs
  var require_detectOther = __commonJS({
    "node_modules/@polkadot/util/detectOther.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _xTextdecoder = require_browser();
      var _xTextencoder = require_browser2();
      var _default = [_xTextdecoder.packageInfo, _xTextencoder.packageInfo];
      exports.default = _default;
    }
  });

  // node_modules/@polkadot/util/packageInfo.cjs
  var require_packageInfo4 = __commonJS({
    "node_modules/@polkadot/util/packageInfo.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.packageInfo = void 0;
      var packageInfo = {
        name: "@polkadot/util",
        path: typeof __dirname === "string" ? __dirname : "auto",
        type: "cjs",
        version: "8.7.1"
      };
      exports.packageInfo = packageInfo;
    }
  });

  // node_modules/@polkadot/util/is/function.cjs
  var require_function = __commonJS({
    "node_modules/@polkadot/util/is/function.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isFunction = isFunction;
      function isFunction(value) {
        return typeof value === "function";
      }
    }
  });

  // node_modules/@polkadot/util/is/string.cjs
  var require_string = __commonJS({
    "node_modules/@polkadot/util/is/string.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isString = isString;
      function isString(value) {
        return typeof value === "string" || value instanceof String;
      }
    }
  });

  // node_modules/@polkadot/util/is/null.cjs
  var require_null = __commonJS({
    "node_modules/@polkadot/util/is/null.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isNull = isNull;
      function isNull(value) {
        return value === null;
      }
    }
  });

  // node_modules/@polkadot/util/is/undefined.cjs
  var require_undefined = __commonJS({
    "node_modules/@polkadot/util/is/undefined.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isUndefined = isUndefined;
      function isUndefined(value) {
        return typeof value === "undefined";
      }
    }
  });

  // node_modules/@polkadot/util/assert.cjs
  var require_assert = __commonJS({
    "node_modules/@polkadot/util/assert.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.assert = assert;
      exports.assertReturn = assertReturn;
      exports.assertUnreachable = assertUnreachable;
      var _function = require_function();
      var _null = require_null();
      var _undefined = require_undefined();
      function assert(condition, message) {
        if (!condition) {
          throw new Error((0, _function.isFunction)(message) ? message() : message);
        }
      }
      function assertReturn(value, message) {
        assert(!(0, _undefined.isUndefined)(value) && !(0, _null.isNull)(value), message);
        return value;
      }
      function assertUnreachable(x) {
        throw new Error(`This codepath should be unreachable. Unhandled input: ${x}`);
      }
    }
  });

  // node_modules/@polkadot/util/versionDetect.cjs
  var require_versionDetect = __commonJS({
    "node_modules/@polkadot/util/versionDetect.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.detectPackage = detectPackage;
      var _xGlobal = require_x_global();
      var _function = require_function();
      var _string = require_string();
      var _assert = require_assert();
      var DEDUPE = "Either remove and explicitly install matching versions or dedupe using your package manager.\nThe following conflicting packages were found:";
      function getEntry(name) {
        const _global = _xGlobal.xglobal;
        if (!_global.__polkadotjs) {
          _global.__polkadotjs = {};
        }
        if (!_global.__polkadotjs[name]) {
          _global.__polkadotjs[name] = [];
        }
        return _global.__polkadotjs[name];
      }
      function getVersionLength(all) {
        let length = 0;
        for (const {
          version
        } of all) {
          length = Math.max(length, version.length);
        }
        return length;
      }
      function flattenInfos(all) {
        const verLength = getVersionLength(all);
        const stringify = (_ref) => {
          let {
            name,
            version
          } = _ref;
          return `	${version.padEnd(verLength)}	${name}`;
        };
        return all.map(stringify).join("\n");
      }
      function flattenVersions(entry) {
        const toPath = (version) => (0, _string.isString)(version) ? {
          version
        } : version;
        const all = entry.map(toPath);
        const verLength = getVersionLength(all);
        const stringify = (_ref2) => {
          let {
            path,
            type,
            version
          } = _ref2;
          return `	${`${type || ""}`.padStart(3)} ${version.padEnd(verLength)}	${!path || path.length < 5 ? "<unknown>" : path}`;
        };
        return all.map(stringify).join("\n");
      }
      function getPath(infoPath, pathOrFn) {
        if (infoPath) {
          return infoPath;
        } else if ((0, _function.isFunction)(pathOrFn)) {
          try {
            return pathOrFn() || "";
          } catch (error) {
            return "";
          }
        }
        return pathOrFn || "";
      }
      function detectPackage(_ref3, pathOrFn) {
        let {
          name,
          path,
          type,
          version
        } = _ref3;
        let deps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        (0, _assert.assert)(name.startsWith("@polkadot"), () => `Invalid package descriptor ${name}`);
        const entry = getEntry(name);
        entry.push({
          path: getPath(path, pathOrFn),
          type,
          version
        });
        if (entry.length !== 1) {
          console.warn(`${name} has multiple versions, ensure that there is only one installed.
${DEDUPE}
${flattenVersions(entry)}`);
        } else {
          const mismatches = deps.filter((d) => d && d.version !== version);
          if (mismatches.length) {
            console.warn(`${name} requires direct dependencies exactly matching version ${version}.
${DEDUPE}
${flattenInfos(mismatches)}`);
          }
        }
      }
    }
  });

  // node_modules/@polkadot/util/detectPackage.cjs
  var require_detectPackage = __commonJS({
    "node_modules/@polkadot/util/detectPackage.cjs"() {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      var _detectOther = _interopRequireDefault(require_detectOther());
      var _packageInfo = require_packageInfo4();
      var _versionDetect = require_versionDetect();
      (0, _versionDetect.detectPackage)(_packageInfo.packageInfo, null, _detectOther.default);
    }
  });

  // node_modules/@polkadot/util/array/chunk.cjs
  var require_chunk = __commonJS({
    "node_modules/@polkadot/util/array/chunk.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.arrayChunk = arrayChunk;
      function arrayChunk(array, chunkSize) {
        const outputSize = Math.ceil(array.length / chunkSize);
        const output = Array(outputSize);
        for (let i = 0; i < outputSize; i++) {
          const offset = i * chunkSize;
          output[i] = array.slice(offset, offset + chunkSize);
        }
        return output;
      }
    }
  });

  // node_modules/@polkadot/util/array/filter.cjs
  var require_filter = __commonJS({
    "node_modules/@polkadot/util/array/filter.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.arrayFilter = arrayFilter;
      var _null = require_null();
      var _undefined = require_undefined();
      function arrayFilter(array) {
        let allowNulls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        return array.filter((v) => !(0, _undefined.isUndefined)(v) && (allowNulls || !(0, _null.isNull)(v)));
      }
    }
  });

  // node_modules/@polkadot/util/array/flatten.cjs
  var require_flatten = __commonJS({
    "node_modules/@polkadot/util/array/flatten.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.arrayFlatten = arrayFlatten;
      function arrayFlatten(arrays) {
        let size = 0;
        for (let i2 = 0; i2 < arrays.length; i2++) {
          size += arrays[i2].length;
        }
        const output = new Array(size);
        let i = -1;
        for (let j = 0; j < arrays.length; j++) {
          const a = arrays[j];
          for (let e = 0; e < a.length; e++) {
            output[++i] = a[e];
          }
        }
        return output;
      }
    }
  });

  // node_modules/@polkadot/util/array/range.cjs
  var require_range = __commonJS({
    "node_modules/@polkadot/util/array/range.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.arrayRange = arrayRange;
      var _assert = require_assert();
      function arrayRange(size) {
        let startAt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        (0, _assert.assert)(size > 0, "Expected non-zero, positive number as a range size");
        const result = new Array(size);
        for (let i = 0; i < size; i++) {
          result[i] = i + startAt;
        }
        return result;
      }
    }
  });

  // node_modules/@polkadot/util/array/shuffle.cjs
  var require_shuffle = __commonJS({
    "node_modules/@polkadot/util/array/shuffle.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.arrayShuffle = arrayShuffle;
      function arrayShuffle(input) {
        const result = input.slice();
        let curr = result.length;
        if (curr === 1) {
          return result;
        }
        while (curr !== 0) {
          const rand = Math.floor(Math.random() * curr);
          curr--;
          [result[curr], result[rand]] = [result[rand], result[curr]];
        }
        return result;
      }
    }
  });

  // node_modules/@polkadot/util/array/zip.cjs
  var require_zip = __commonJS({
    "node_modules/@polkadot/util/array/zip.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.arrayZip = arrayZip;
      function arrayZip(keys, values) {
        const result = new Array(keys.length);
        for (let i = 0; i < keys.length; i++) {
          result[i] = [keys[i], values[i]];
        }
        return result;
      }
    }
  });

  // node_modules/@polkadot/util/array/index.cjs
  var require_array = __commonJS({
    "node_modules/@polkadot/util/array/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "arrayChunk", {
        enumerable: true,
        get: function() {
          return _chunk.arrayChunk;
        }
      });
      Object.defineProperty(exports, "arrayFilter", {
        enumerable: true,
        get: function() {
          return _filter.arrayFilter;
        }
      });
      Object.defineProperty(exports, "arrayFlatten", {
        enumerable: true,
        get: function() {
          return _flatten.arrayFlatten;
        }
      });
      Object.defineProperty(exports, "arrayRange", {
        enumerable: true,
        get: function() {
          return _range.arrayRange;
        }
      });
      Object.defineProperty(exports, "arrayShuffle", {
        enumerable: true,
        get: function() {
          return _shuffle.arrayShuffle;
        }
      });
      Object.defineProperty(exports, "arrayZip", {
        enumerable: true,
        get: function() {
          return _zip.arrayZip;
        }
      });
      var _chunk = require_chunk();
      var _filter = require_filter();
      var _flatten = require_flatten();
      var _range = require_range();
      var _shuffle = require_shuffle();
      var _zip = require_zip();
    }
  });

  // node_modules/@polkadot/x-bigint/packageInfo.cjs
  var require_packageInfo5 = __commonJS({
    "node_modules/@polkadot/x-bigint/packageInfo.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.packageInfo = void 0;
      var packageInfo = {
        name: "@polkadot/x-bigint",
        path: typeof __dirname === "string" ? __dirname : "auto",
        type: "cjs",
        version: "8.7.1"
      };
      exports.packageInfo = packageInfo;
    }
  });

  // node_modules/@polkadot/x-bigint/index.cjs
  var require_x_bigint = __commonJS({
    "node_modules/@polkadot/x-bigint/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BigInt = void 0;
      Object.defineProperty(exports, "packageInfo", {
        enumerable: true,
        get: function() {
          return _packageInfo.packageInfo;
        }
      });
      var _xGlobal = require_x_global();
      var _packageInfo = require_packageInfo5();
      var BigInt2 = typeof _xGlobal.xglobal.BigInt === "function" && typeof _xGlobal.xglobal.BigInt.asIntN === "function" ? _xGlobal.xglobal.BigInt : () => Number.NaN;
      exports.BigInt = BigInt2;
    }
  });

  // node_modules/@polkadot/util/bi/consts.cjs
  var require_consts = __commonJS({
    "node_modules/@polkadot/util/bi/consts.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports._2pow53n = exports._1n = exports._1Qn = exports._1Mn = exports._1Bn = exports._0n = void 0;
      var _xBigint = require_x_bigint();
      var _0n = (0, _xBigint.BigInt)(0);
      exports._0n = _0n;
      var _1n = (0, _xBigint.BigInt)(1);
      exports._1n = _1n;
      var _1Mn = (0, _xBigint.BigInt)(1e6);
      exports._1Mn = _1Mn;
      var _1Bn = (0, _xBigint.BigInt)(1e9);
      exports._1Bn = _1Bn;
      var _1Qn = _1Bn * _1Bn;
      exports._1Qn = _1Qn;
      var _2pow53n = (0, _xBigint.BigInt)(Number.MAX_SAFE_INTEGER);
      exports._2pow53n = _2pow53n;
    }
  });

  // node_modules/@polkadot/util/object/keys.cjs
  var require_keys = __commonJS({
    "node_modules/@polkadot/util/object/keys.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.objectKeys = objectKeys;
      function objectKeys(value) {
        return Object.keys(value);
      }
    }
  });

  // node_modules/@polkadot/util/object/spread.cjs
  var require_spread = __commonJS({
    "node_modules/@polkadot/util/object/spread.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.objectSpread = objectSpread;
      var _keys = require_keys();
      function objectSpread(dest) {
        for (let i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
          const src = i + 1 < 1 || arguments.length <= i + 1 ? void 0 : arguments[i + 1];
          if (src) {
            const keys = (0, _keys.objectKeys)(src);
            for (let j = 0; j < keys.length; j++) {
              const key = keys[j];
              dest[key] = src[key];
            }
          }
        }
        return dest;
      }
    }
  });

  // node_modules/@polkadot/util/u8a/toBigInt.cjs
  var require_toBigInt = __commonJS({
    "node_modules/@polkadot/util/u8a/toBigInt.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.u8aToBigInt = u8aToBigInt;
      var _xBigint = require_x_bigint();
      var _consts = require_consts();
      var _spread = require_spread();
      var U8_MAX = (0, _xBigint.BigInt)(256);
      var U16_MAX = (0, _xBigint.BigInt)(256 * 256);
      function xor(input) {
        const result = new Uint8Array(input.length);
        const dvI = new DataView(input.buffer, input.byteOffset);
        const dvO = new DataView(result.buffer);
        const mod = input.length % 2;
        const length = input.length - mod;
        for (let i = 0; i < length; i += 2) {
          dvO.setUint16(i, dvI.getUint16(i) ^ 65535);
        }
        if (mod) {
          dvO.setUint8(length, dvI.getUint8(length) ^ 255);
        }
        return result;
      }
      function toBigInt(input) {
        const dvI = new DataView(input.buffer, input.byteOffset);
        const mod = input.length % 2;
        const length = input.length - mod;
        let result = (0, _xBigint.BigInt)(0);
        for (let i = 0; i < length; i += 2) {
          result = result * U16_MAX + (0, _xBigint.BigInt)(dvI.getUint16(i));
        }
        if (mod) {
          result = result * U8_MAX + (0, _xBigint.BigInt)(dvI.getUint8(length));
        }
        return result;
      }
      function u8aToBigInt(value) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!value || !value.length) {
          return (0, _xBigint.BigInt)(0);
        }
        const {
          isLe,
          isNegative
        } = (0, _spread.objectSpread)({
          isLe: true,
          isNegative: false
        }, options);
        const u8a = isLe ? value.reverse() : value;
        return isNegative ? toBigInt(xor(u8a)) * -_consts._1n - _consts._1n : toBigInt(u8a);
      }
    }
  });

  // node_modules/@polkadot/util/hex/alphabet.cjs
  var require_alphabet = __commonJS({
    "node_modules/@polkadot/util/hex/alphabet.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.U8_TO_HEX = exports.U16_TO_HEX = exports.HEX_TO_U8 = exports.HEX_TO_U16 = void 0;
      var U8_TO_HEX = new Array(256);
      exports.U8_TO_HEX = U8_TO_HEX;
      var U16_TO_HEX = new Array(256 * 256);
      exports.U16_TO_HEX = U16_TO_HEX;
      var HEX_TO_U8 = {};
      exports.HEX_TO_U8 = HEX_TO_U8;
      var HEX_TO_U16 = {};
      exports.HEX_TO_U16 = HEX_TO_U16;
      for (let n = 0; n < 256; n++) {
        const hex = n.toString(16).padStart(2, "0");
        U8_TO_HEX[n] = hex;
        HEX_TO_U8[hex] = n;
      }
      for (let i = 0; i < 256; i++) {
        for (let j = 0; j < 256; j++) {
          const hex = U8_TO_HEX[i] + U8_TO_HEX[j];
          const n = i << 8 | j;
          U16_TO_HEX[n] = hex;
          HEX_TO_U16[hex] = n;
        }
      }
    }
  });

  // node_modules/@polkadot/util/is/hex.cjs
  var require_hex = __commonJS({
    "node_modules/@polkadot/util/is/hex.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.REGEX_HEX_PREFIXED = exports.REGEX_HEX_NOPREFIX = void 0;
      exports.isHex = isHex;
      var REGEX_HEX_PREFIXED = /^0x[\da-fA-F]+$/;
      exports.REGEX_HEX_PREFIXED = REGEX_HEX_PREFIXED;
      var REGEX_HEX_NOPREFIX = /^[\da-fA-F]+$/;
      exports.REGEX_HEX_NOPREFIX = REGEX_HEX_NOPREFIX;
      function isHex(value) {
        let bitLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
        let ignoreLength = arguments.length > 2 ? arguments[2] : void 0;
        return typeof value === "string" && (value === "0x" || REGEX_HEX_PREFIXED.test(value)) && (bitLength === -1 ? ignoreLength || value.length % 2 === 0 : value.length === 2 + Math.ceil(bitLength / 4));
      }
    }
  });

  // node_modules/@polkadot/util/hex/stripPrefix.cjs
  var require_stripPrefix = __commonJS({
    "node_modules/@polkadot/util/hex/stripPrefix.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hexStripPrefix = hexStripPrefix;
      var _hex = require_hex();
      function hexStripPrefix(value) {
        if (!value || value === "0x") {
          return "";
        } else if (_hex.REGEX_HEX_PREFIXED.test(value)) {
          return value.substr(2);
        } else if (_hex.REGEX_HEX_NOPREFIX.test(value)) {
          return value;
        }
        throw new Error(`Expected hex value to convert, found '${value}'`);
      }
    }
  });

  // node_modules/@polkadot/util/hex/toU8a.cjs
  var require_toU8a = __commonJS({
    "node_modules/@polkadot/util/hex/toU8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hexToU8a = hexToU8a;
      var _alphabet = require_alphabet();
      var _stripPrefix = require_stripPrefix();
      function hexToU8a(_value) {
        let bitLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
        if (!_value) {
          return new Uint8Array();
        }
        const value = (0, _stripPrefix.hexStripPrefix)(_value).toLowerCase();
        const valLength = value.length / 2;
        const endLength = Math.ceil(bitLength === -1 ? valLength : bitLength / 8);
        const result = new Uint8Array(endLength);
        const offset = endLength > valLength ? endLength - valLength : 0;
        const dv = new DataView(result.buffer, offset);
        const mod = (endLength - offset) % 2;
        const length = endLength - offset - mod;
        for (let i = 0; i < length; i += 2) {
          dv.setUint16(i, _alphabet.HEX_TO_U16[value.substr(i * 2, 4)]);
        }
        if (mod) {
          dv.setUint8(length, _alphabet.HEX_TO_U8[value.substr(value.length - 2, 2)]);
        }
        return result;
      }
    }
  });

  // node_modules/@polkadot/util/hex/toBigInt.cjs
  var require_toBigInt2 = __commonJS({
    "node_modules/@polkadot/util/hex/toBigInt.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hexToBigInt = hexToBigInt;
      var _xBigint = require_x_bigint();
      var _spread = require_spread();
      var _toBigInt = require_toBigInt();
      var _toU8a = require_toU8a();
      function hexToBigInt(value) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return !value || value === "0x" ? (0, _xBigint.BigInt)(0) : (0, _toBigInt.u8aToBigInt)((0, _toU8a.hexToU8a)(value), (0, _spread.objectSpread)({
          isLe: false,
          isNegative: false
        }, options));
      }
    }
  });

  // (disabled):node_modules/buffer/index.js
  var require_buffer = __commonJS({
    "(disabled):node_modules/buffer/index.js"() {
    }
  });

  // node_modules/bn.js/lib/bn.js
  var require_bn = __commonJS({
    "node_modules/bn.js/lib/bn.js"(exports, module) {
      (function(module2, exports2) {
        "use strict";
        function assert(val, msg) {
          if (!val)
            throw new Error(msg || "Assertion failed");
        }
        function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
        function BN(number, base, endian) {
          if (BN.isBN(number)) {
            return number;
          }
          this.negative = 0;
          this.words = null;
          this.length = 0;
          this.red = null;
          if (number !== null) {
            if (base === "le" || base === "be") {
              endian = base;
              base = 10;
            }
            this._init(number || 0, base || 10, endian || "be");
          }
        }
        if (typeof module2 === "object") {
          module2.exports = BN;
        } else {
          exports2.BN = BN;
        }
        BN.BN = BN;
        BN.wordSize = 26;
        var Buffer2;
        try {
          if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") {
            Buffer2 = window.Buffer;
          } else {
            Buffer2 = require_buffer().Buffer;
          }
        } catch (e) {
        }
        BN.isBN = function isBN(num) {
          if (num instanceof BN) {
            return true;
          }
          return num !== null && typeof num === "object" && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
        };
        BN.max = function max(left, right) {
          if (left.cmp(right) > 0)
            return left;
          return right;
        };
        BN.min = function min(left, right) {
          if (left.cmp(right) < 0)
            return left;
          return right;
        };
        BN.prototype._init = function init(number, base, endian) {
          if (typeof number === "number") {
            return this._initNumber(number, base, endian);
          }
          if (typeof number === "object") {
            return this._initArray(number, base, endian);
          }
          if (base === "hex") {
            base = 16;
          }
          assert(base === (base | 0) && base >= 2 && base <= 36);
          number = number.toString().replace(/\s+/g, "");
          var start = 0;
          if (number[0] === "-") {
            start++;
            this.negative = 1;
          }
          if (start < number.length) {
            if (base === 16) {
              this._parseHex(number, start, endian);
            } else {
              this._parseBase(number, base, start);
              if (endian === "le") {
                this._initArray(this.toArray(), base, endian);
              }
            }
          }
        };
        BN.prototype._initNumber = function _initNumber(number, base, endian) {
          if (number < 0) {
            this.negative = 1;
            number = -number;
          }
          if (number < 67108864) {
            this.words = [number & 67108863];
            this.length = 1;
          } else if (number < 4503599627370496) {
            this.words = [
              number & 67108863,
              number / 67108864 & 67108863
            ];
            this.length = 2;
          } else {
            assert(number < 9007199254740992);
            this.words = [
              number & 67108863,
              number / 67108864 & 67108863,
              1
            ];
            this.length = 3;
          }
          if (endian !== "le")
            return;
          this._initArray(this.toArray(), base, endian);
        };
        BN.prototype._initArray = function _initArray(number, base, endian) {
          assert(typeof number.length === "number");
          if (number.length <= 0) {
            this.words = [0];
            this.length = 1;
            return this;
          }
          this.length = Math.ceil(number.length / 3);
          this.words = new Array(this.length);
          for (var i = 0; i < this.length; i++) {
            this.words[i] = 0;
          }
          var j, w;
          var off = 0;
          if (endian === "be") {
            for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
              w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
              this.words[j] |= w << off & 67108863;
              this.words[j + 1] = w >>> 26 - off & 67108863;
              off += 24;
              if (off >= 26) {
                off -= 26;
                j++;
              }
            }
          } else if (endian === "le") {
            for (i = 0, j = 0; i < number.length; i += 3) {
              w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
              this.words[j] |= w << off & 67108863;
              this.words[j + 1] = w >>> 26 - off & 67108863;
              off += 24;
              if (off >= 26) {
                off -= 26;
                j++;
              }
            }
          }
          return this._strip();
        };
        function parseHex4Bits(string, index) {
          var c = string.charCodeAt(index);
          if (c >= 48 && c <= 57) {
            return c - 48;
          } else if (c >= 65 && c <= 70) {
            return c - 55;
          } else if (c >= 97 && c <= 102) {
            return c - 87;
          } else {
            assert(false, "Invalid character in " + string);
          }
        }
        function parseHexByte(string, lowerBound, index) {
          var r = parseHex4Bits(string, index);
          if (index - 1 >= lowerBound) {
            r |= parseHex4Bits(string, index - 1) << 4;
          }
          return r;
        }
        BN.prototype._parseHex = function _parseHex(number, start, endian) {
          this.length = Math.ceil((number.length - start) / 6);
          this.words = new Array(this.length);
          for (var i = 0; i < this.length; i++) {
            this.words[i] = 0;
          }
          var off = 0;
          var j = 0;
          var w;
          if (endian === "be") {
            for (i = number.length - 1; i >= start; i -= 2) {
              w = parseHexByte(number, start, i) << off;
              this.words[j] |= w & 67108863;
              if (off >= 18) {
                off -= 18;
                j += 1;
                this.words[j] |= w >>> 26;
              } else {
                off += 8;
              }
            }
          } else {
            var parseLength = number.length - start;
            for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
              w = parseHexByte(number, start, i) << off;
              this.words[j] |= w & 67108863;
              if (off >= 18) {
                off -= 18;
                j += 1;
                this.words[j] |= w >>> 26;
              } else {
                off += 8;
              }
            }
          }
          this._strip();
        };
        function parseBase(str, start, end, mul) {
          var r = 0;
          var b = 0;
          var len = Math.min(str.length, end);
          for (var i = start; i < len; i++) {
            var c = str.charCodeAt(i) - 48;
            r *= mul;
            if (c >= 49) {
              b = c - 49 + 10;
            } else if (c >= 17) {
              b = c - 17 + 10;
            } else {
              b = c;
            }
            assert(c >= 0 && b < mul, "Invalid character");
            r += b;
          }
          return r;
        }
        BN.prototype._parseBase = function _parseBase(number, base, start) {
          this.words = [0];
          this.length = 1;
          for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base) {
            limbLen++;
          }
          limbLen--;
          limbPow = limbPow / base | 0;
          var total = number.length - start;
          var mod = total % limbLen;
          var end = Math.min(total, total - mod) + start;
          var word = 0;
          for (var i = start; i < end; i += limbLen) {
            word = parseBase(number, i, i + limbLen, base);
            this.imuln(limbPow);
            if (this.words[0] + word < 67108864) {
              this.words[0] += word;
            } else {
              this._iaddn(word);
            }
          }
          if (mod !== 0) {
            var pow = 1;
            word = parseBase(number, i, number.length, base);
            for (i = 0; i < mod; i++) {
              pow *= base;
            }
            this.imuln(pow);
            if (this.words[0] + word < 67108864) {
              this.words[0] += word;
            } else {
              this._iaddn(word);
            }
          }
          this._strip();
        };
        BN.prototype.copy = function copy(dest) {
          dest.words = new Array(this.length);
          for (var i = 0; i < this.length; i++) {
            dest.words[i] = this.words[i];
          }
          dest.length = this.length;
          dest.negative = this.negative;
          dest.red = this.red;
        };
        function move(dest, src) {
          dest.words = src.words;
          dest.length = src.length;
          dest.negative = src.negative;
          dest.red = src.red;
        }
        BN.prototype._move = function _move(dest) {
          move(dest, this);
        };
        BN.prototype.clone = function clone() {
          var r = new BN(null);
          this.copy(r);
          return r;
        };
        BN.prototype._expand = function _expand(size) {
          while (this.length < size) {
            this.words[this.length++] = 0;
          }
          return this;
        };
        BN.prototype._strip = function strip() {
          while (this.length > 1 && this.words[this.length - 1] === 0) {
            this.length--;
          }
          return this._normSign();
        };
        BN.prototype._normSign = function _normSign() {
          if (this.length === 1 && this.words[0] === 0) {
            this.negative = 0;
          }
          return this;
        };
        if (typeof Symbol !== "undefined" && typeof Symbol.for === "function") {
          try {
            BN.prototype[Symbol.for("nodejs.util.inspect.custom")] = inspect;
          } catch (e) {
            BN.prototype.inspect = inspect;
          }
        } else {
          BN.prototype.inspect = inspect;
        }
        function inspect() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var zeros = [
          "",
          "0",
          "00",
          "000",
          "0000",
          "00000",
          "000000",
          "0000000",
          "00000000",
          "000000000",
          "0000000000",
          "00000000000",
          "000000000000",
          "0000000000000",
          "00000000000000",
          "000000000000000",
          "0000000000000000",
          "00000000000000000",
          "000000000000000000",
          "0000000000000000000",
          "00000000000000000000",
          "000000000000000000000",
          "0000000000000000000000",
          "00000000000000000000000",
          "000000000000000000000000",
          "0000000000000000000000000"
        ];
        var groupSizes = [
          0,
          0,
          25,
          16,
          12,
          11,
          10,
          9,
          8,
          8,
          7,
          7,
          7,
          7,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5
        ];
        var groupBases = [
          0,
          0,
          33554432,
          43046721,
          16777216,
          48828125,
          60466176,
          40353607,
          16777216,
          43046721,
          1e7,
          19487171,
          35831808,
          62748517,
          7529536,
          11390625,
          16777216,
          24137569,
          34012224,
          47045881,
          64e6,
          4084101,
          5153632,
          6436343,
          7962624,
          9765625,
          11881376,
          14348907,
          17210368,
          20511149,
          243e5,
          28629151,
          33554432,
          39135393,
          45435424,
          52521875,
          60466176
        ];
        BN.prototype.toString = function toString(base, padding) {
          base = base || 10;
          padding = padding | 0 || 1;
          var out;
          if (base === 16 || base === "hex") {
            out = "";
            var off = 0;
            var carry = 0;
            for (var i = 0; i < this.length; i++) {
              var w = this.words[i];
              var word = ((w << off | carry) & 16777215).toString(16);
              carry = w >>> 24 - off & 16777215;
              off += 2;
              if (off >= 26) {
                off -= 26;
                i--;
              }
              if (carry !== 0 || i !== this.length - 1) {
                out = zeros[6 - word.length] + word + out;
              } else {
                out = word + out;
              }
            }
            if (carry !== 0) {
              out = carry.toString(16) + out;
            }
            while (out.length % padding !== 0) {
              out = "0" + out;
            }
            if (this.negative !== 0) {
              out = "-" + out;
            }
            return out;
          }
          if (base === (base | 0) && base >= 2 && base <= 36) {
            var groupSize = groupSizes[base];
            var groupBase = groupBases[base];
            out = "";
            var c = this.clone();
            c.negative = 0;
            while (!c.isZero()) {
              var r = c.modrn(groupBase).toString(base);
              c = c.idivn(groupBase);
              if (!c.isZero()) {
                out = zeros[groupSize - r.length] + r + out;
              } else {
                out = r + out;
              }
            }
            if (this.isZero()) {
              out = "0" + out;
            }
            while (out.length % padding !== 0) {
              out = "0" + out;
            }
            if (this.negative !== 0) {
              out = "-" + out;
            }
            return out;
          }
          assert(false, "Base should be between 2 and 36");
        };
        BN.prototype.toNumber = function toNumber() {
          var ret = this.words[0];
          if (this.length === 2) {
            ret += this.words[1] * 67108864;
          } else if (this.length === 3 && this.words[2] === 1) {
            ret += 4503599627370496 + this.words[1] * 67108864;
          } else if (this.length > 2) {
            assert(false, "Number can only safely store up to 53 bits");
          }
          return this.negative !== 0 ? -ret : ret;
        };
        BN.prototype.toJSON = function toJSON() {
          return this.toString(16, 2);
        };
        if (Buffer2) {
          BN.prototype.toBuffer = function toBuffer(endian, length) {
            return this.toArrayLike(Buffer2, endian, length);
          };
        }
        BN.prototype.toArray = function toArray(endian, length) {
          return this.toArrayLike(Array, endian, length);
        };
        var allocate = function allocate2(ArrayType, size) {
          if (ArrayType.allocUnsafe) {
            return ArrayType.allocUnsafe(size);
          }
          return new ArrayType(size);
        };
        BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
          this._strip();
          var byteLength = this.byteLength();
          var reqLength = length || Math.max(1, byteLength);
          assert(byteLength <= reqLength, "byte array longer than desired length");
          assert(reqLength > 0, "Requested array length <= 0");
          var res = allocate(ArrayType, reqLength);
          var postfix = endian === "le" ? "LE" : "BE";
          this["_toArrayLike" + postfix](res, byteLength);
          return res;
        };
        BN.prototype._toArrayLikeLE = function _toArrayLikeLE(res, byteLength) {
          var position = 0;
          var carry = 0;
          for (var i = 0, shift = 0; i < this.length; i++) {
            var word = this.words[i] << shift | carry;
            res[position++] = word & 255;
            if (position < res.length) {
              res[position++] = word >> 8 & 255;
            }
            if (position < res.length) {
              res[position++] = word >> 16 & 255;
            }
            if (shift === 6) {
              if (position < res.length) {
                res[position++] = word >> 24 & 255;
              }
              carry = 0;
              shift = 0;
            } else {
              carry = word >>> 24;
              shift += 2;
            }
          }
          if (position < res.length) {
            res[position++] = carry;
            while (position < res.length) {
              res[position++] = 0;
            }
          }
        };
        BN.prototype._toArrayLikeBE = function _toArrayLikeBE(res, byteLength) {
          var position = res.length - 1;
          var carry = 0;
          for (var i = 0, shift = 0; i < this.length; i++) {
            var word = this.words[i] << shift | carry;
            res[position--] = word & 255;
            if (position >= 0) {
              res[position--] = word >> 8 & 255;
            }
            if (position >= 0) {
              res[position--] = word >> 16 & 255;
            }
            if (shift === 6) {
              if (position >= 0) {
                res[position--] = word >> 24 & 255;
              }
              carry = 0;
              shift = 0;
            } else {
              carry = word >>> 24;
              shift += 2;
            }
          }
          if (position >= 0) {
            res[position--] = carry;
            while (position >= 0) {
              res[position--] = 0;
            }
          }
        };
        if (Math.clz32) {
          BN.prototype._countBits = function _countBits(w) {
            return 32 - Math.clz32(w);
          };
        } else {
          BN.prototype._countBits = function _countBits(w) {
            var t = w;
            var r = 0;
            if (t >= 4096) {
              r += 13;
              t >>>= 13;
            }
            if (t >= 64) {
              r += 7;
              t >>>= 7;
            }
            if (t >= 8) {
              r += 4;
              t >>>= 4;
            }
            if (t >= 2) {
              r += 2;
              t >>>= 2;
            }
            return r + t;
          };
        }
        BN.prototype._zeroBits = function _zeroBits(w) {
          if (w === 0)
            return 26;
          var t = w;
          var r = 0;
          if ((t & 8191) === 0) {
            r += 13;
            t >>>= 13;
          }
          if ((t & 127) === 0) {
            r += 7;
            t >>>= 7;
          }
          if ((t & 15) === 0) {
            r += 4;
            t >>>= 4;
          }
          if ((t & 3) === 0) {
            r += 2;
            t >>>= 2;
          }
          if ((t & 1) === 0) {
            r++;
          }
          return r;
        };
        BN.prototype.bitLength = function bitLength() {
          var w = this.words[this.length - 1];
          var hi = this._countBits(w);
          return (this.length - 1) * 26 + hi;
        };
        function toBitArray(num) {
          var w = new Array(num.bitLength());
          for (var bit = 0; bit < w.length; bit++) {
            var off = bit / 26 | 0;
            var wbit = bit % 26;
            w[bit] = num.words[off] >>> wbit & 1;
          }
          return w;
        }
        BN.prototype.zeroBits = function zeroBits() {
          if (this.isZero())
            return 0;
          var r = 0;
          for (var i = 0; i < this.length; i++) {
            var b = this._zeroBits(this.words[i]);
            r += b;
            if (b !== 26)
              break;
          }
          return r;
        };
        BN.prototype.byteLength = function byteLength() {
          return Math.ceil(this.bitLength() / 8);
        };
        BN.prototype.toTwos = function toTwos(width) {
          if (this.negative !== 0) {
            return this.abs().inotn(width).iaddn(1);
          }
          return this.clone();
        };
        BN.prototype.fromTwos = function fromTwos(width) {
          if (this.testn(width - 1)) {
            return this.notn(width).iaddn(1).ineg();
          }
          return this.clone();
        };
        BN.prototype.isNeg = function isNeg() {
          return this.negative !== 0;
        };
        BN.prototype.neg = function neg() {
          return this.clone().ineg();
        };
        BN.prototype.ineg = function ineg() {
          if (!this.isZero()) {
            this.negative ^= 1;
          }
          return this;
        };
        BN.prototype.iuor = function iuor(num) {
          while (this.length < num.length) {
            this.words[this.length++] = 0;
          }
          for (var i = 0; i < num.length; i++) {
            this.words[i] = this.words[i] | num.words[i];
          }
          return this._strip();
        };
        BN.prototype.ior = function ior(num) {
          assert((this.negative | num.negative) === 0);
          return this.iuor(num);
        };
        BN.prototype.or = function or(num) {
          if (this.length > num.length)
            return this.clone().ior(num);
          return num.clone().ior(this);
        };
        BN.prototype.uor = function uor(num) {
          if (this.length > num.length)
            return this.clone().iuor(num);
          return num.clone().iuor(this);
        };
        BN.prototype.iuand = function iuand(num) {
          var b;
          if (this.length > num.length) {
            b = num;
          } else {
            b = this;
          }
          for (var i = 0; i < b.length; i++) {
            this.words[i] = this.words[i] & num.words[i];
          }
          this.length = b.length;
          return this._strip();
        };
        BN.prototype.iand = function iand(num) {
          assert((this.negative | num.negative) === 0);
          return this.iuand(num);
        };
        BN.prototype.and = function and(num) {
          if (this.length > num.length)
            return this.clone().iand(num);
          return num.clone().iand(this);
        };
        BN.prototype.uand = function uand(num) {
          if (this.length > num.length)
            return this.clone().iuand(num);
          return num.clone().iuand(this);
        };
        BN.prototype.iuxor = function iuxor(num) {
          var a;
          var b;
          if (this.length > num.length) {
            a = this;
            b = num;
          } else {
            a = num;
            b = this;
          }
          for (var i = 0; i < b.length; i++) {
            this.words[i] = a.words[i] ^ b.words[i];
          }
          if (this !== a) {
            for (; i < a.length; i++) {
              this.words[i] = a.words[i];
            }
          }
          this.length = a.length;
          return this._strip();
        };
        BN.prototype.ixor = function ixor(num) {
          assert((this.negative | num.negative) === 0);
          return this.iuxor(num);
        };
        BN.prototype.xor = function xor(num) {
          if (this.length > num.length)
            return this.clone().ixor(num);
          return num.clone().ixor(this);
        };
        BN.prototype.uxor = function uxor(num) {
          if (this.length > num.length)
            return this.clone().iuxor(num);
          return num.clone().iuxor(this);
        };
        BN.prototype.inotn = function inotn(width) {
          assert(typeof width === "number" && width >= 0);
          var bytesNeeded = Math.ceil(width / 26) | 0;
          var bitsLeft = width % 26;
          this._expand(bytesNeeded);
          if (bitsLeft > 0) {
            bytesNeeded--;
          }
          for (var i = 0; i < bytesNeeded; i++) {
            this.words[i] = ~this.words[i] & 67108863;
          }
          if (bitsLeft > 0) {
            this.words[i] = ~this.words[i] & 67108863 >> 26 - bitsLeft;
          }
          return this._strip();
        };
        BN.prototype.notn = function notn(width) {
          return this.clone().inotn(width);
        };
        BN.prototype.setn = function setn(bit, val) {
          assert(typeof bit === "number" && bit >= 0);
          var off = bit / 26 | 0;
          var wbit = bit % 26;
          this._expand(off + 1);
          if (val) {
            this.words[off] = this.words[off] | 1 << wbit;
          } else {
            this.words[off] = this.words[off] & ~(1 << wbit);
          }
          return this._strip();
        };
        BN.prototype.iadd = function iadd(num) {
          var r;
          if (this.negative !== 0 && num.negative === 0) {
            this.negative = 0;
            r = this.isub(num);
            this.negative ^= 1;
            return this._normSign();
          } else if (this.negative === 0 && num.negative !== 0) {
            num.negative = 0;
            r = this.isub(num);
            num.negative = 1;
            return r._normSign();
          }
          var a, b;
          if (this.length > num.length) {
            a = this;
            b = num;
          } else {
            a = num;
            b = this;
          }
          var carry = 0;
          for (var i = 0; i < b.length; i++) {
            r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
            this.words[i] = r & 67108863;
            carry = r >>> 26;
          }
          for (; carry !== 0 && i < a.length; i++) {
            r = (a.words[i] | 0) + carry;
            this.words[i] = r & 67108863;
            carry = r >>> 26;
          }
          this.length = a.length;
          if (carry !== 0) {
            this.words[this.length] = carry;
            this.length++;
          } else if (a !== this) {
            for (; i < a.length; i++) {
              this.words[i] = a.words[i];
            }
          }
          return this;
        };
        BN.prototype.add = function add(num) {
          var res;
          if (num.negative !== 0 && this.negative === 0) {
            num.negative = 0;
            res = this.sub(num);
            num.negative ^= 1;
            return res;
          } else if (num.negative === 0 && this.negative !== 0) {
            this.negative = 0;
            res = num.sub(this);
            this.negative = 1;
            return res;
          }
          if (this.length > num.length)
            return this.clone().iadd(num);
          return num.clone().iadd(this);
        };
        BN.prototype.isub = function isub(num) {
          if (num.negative !== 0) {
            num.negative = 0;
            var r = this.iadd(num);
            num.negative = 1;
            return r._normSign();
          } else if (this.negative !== 0) {
            this.negative = 0;
            this.iadd(num);
            this.negative = 1;
            return this._normSign();
          }
          var cmp = this.cmp(num);
          if (cmp === 0) {
            this.negative = 0;
            this.length = 1;
            this.words[0] = 0;
            return this;
          }
          var a, b;
          if (cmp > 0) {
            a = this;
            b = num;
          } else {
            a = num;
            b = this;
          }
          var carry = 0;
          for (var i = 0; i < b.length; i++) {
            r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 67108863;
          }
          for (; carry !== 0 && i < a.length; i++) {
            r = (a.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 67108863;
          }
          if (carry === 0 && i < a.length && a !== this) {
            for (; i < a.length; i++) {
              this.words[i] = a.words[i];
            }
          }
          this.length = Math.max(this.length, i);
          if (a !== this) {
            this.negative = 1;
          }
          return this._strip();
        };
        BN.prototype.sub = function sub(num) {
          return this.clone().isub(num);
        };
        function smallMulTo(self2, num, out) {
          out.negative = num.negative ^ self2.negative;
          var len = self2.length + num.length | 0;
          out.length = len;
          len = len - 1 | 0;
          var a = self2.words[0] | 0;
          var b = num.words[0] | 0;
          var r = a * b;
          var lo = r & 67108863;
          var carry = r / 67108864 | 0;
          out.words[0] = lo;
          for (var k = 1; k < len; k++) {
            var ncarry = carry >>> 26;
            var rword = carry & 67108863;
            var maxJ = Math.min(k, num.length - 1);
            for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
              var i = k - j | 0;
              a = self2.words[i] | 0;
              b = num.words[j] | 0;
              r = a * b + rword;
              ncarry += r / 67108864 | 0;
              rword = r & 67108863;
            }
            out.words[k] = rword | 0;
            carry = ncarry | 0;
          }
          if (carry !== 0) {
            out.words[k] = carry | 0;
          } else {
            out.length--;
          }
          return out._strip();
        }
        var comb10MulTo = function comb10MulTo2(self2, num, out) {
          var a = self2.words;
          var b = num.words;
          var o = out.words;
          var c = 0;
          var lo;
          var mid;
          var hi;
          var a0 = a[0] | 0;
          var al0 = a0 & 8191;
          var ah0 = a0 >>> 13;
          var a1 = a[1] | 0;
          var al1 = a1 & 8191;
          var ah1 = a1 >>> 13;
          var a2 = a[2] | 0;
          var al2 = a2 & 8191;
          var ah2 = a2 >>> 13;
          var a3 = a[3] | 0;
          var al3 = a3 & 8191;
          var ah3 = a3 >>> 13;
          var a4 = a[4] | 0;
          var al4 = a4 & 8191;
          var ah4 = a4 >>> 13;
          var a5 = a[5] | 0;
          var al5 = a5 & 8191;
          var ah5 = a5 >>> 13;
          var a6 = a[6] | 0;
          var al6 = a6 & 8191;
          var ah6 = a6 >>> 13;
          var a7 = a[7] | 0;
          var al7 = a7 & 8191;
          var ah7 = a7 >>> 13;
          var a8 = a[8] | 0;
          var al8 = a8 & 8191;
          var ah8 = a8 >>> 13;
          var a9 = a[9] | 0;
          var al9 = a9 & 8191;
          var ah9 = a9 >>> 13;
          var b0 = b[0] | 0;
          var bl0 = b0 & 8191;
          var bh0 = b0 >>> 13;
          var b1 = b[1] | 0;
          var bl1 = b1 & 8191;
          var bh1 = b1 >>> 13;
          var b2 = b[2] | 0;
          var bl2 = b2 & 8191;
          var bh2 = b2 >>> 13;
          var b3 = b[3] | 0;
          var bl3 = b3 & 8191;
          var bh3 = b3 >>> 13;
          var b4 = b[4] | 0;
          var bl4 = b4 & 8191;
          var bh4 = b4 >>> 13;
          var b5 = b[5] | 0;
          var bl5 = b5 & 8191;
          var bh5 = b5 >>> 13;
          var b6 = b[6] | 0;
          var bl6 = b6 & 8191;
          var bh6 = b6 >>> 13;
          var b7 = b[7] | 0;
          var bl7 = b7 & 8191;
          var bh7 = b7 >>> 13;
          var b8 = b[8] | 0;
          var bl8 = b8 & 8191;
          var bh8 = b8 >>> 13;
          var b9 = b[9] | 0;
          var bl9 = b9 & 8191;
          var bh9 = b9 >>> 13;
          out.negative = self2.negative ^ num.negative;
          out.length = 19;
          lo = Math.imul(al0, bl0);
          mid = Math.imul(al0, bh0);
          mid = mid + Math.imul(ah0, bl0) | 0;
          hi = Math.imul(ah0, bh0);
          var w0 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
          w0 &= 67108863;
          lo = Math.imul(al1, bl0);
          mid = Math.imul(al1, bh0);
          mid = mid + Math.imul(ah1, bl0) | 0;
          hi = Math.imul(ah1, bh0);
          lo = lo + Math.imul(al0, bl1) | 0;
          mid = mid + Math.imul(al0, bh1) | 0;
          mid = mid + Math.imul(ah0, bl1) | 0;
          hi = hi + Math.imul(ah0, bh1) | 0;
          var w1 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
          w1 &= 67108863;
          lo = Math.imul(al2, bl0);
          mid = Math.imul(al2, bh0);
          mid = mid + Math.imul(ah2, bl0) | 0;
          hi = Math.imul(ah2, bh0);
          lo = lo + Math.imul(al1, bl1) | 0;
          mid = mid + Math.imul(al1, bh1) | 0;
          mid = mid + Math.imul(ah1, bl1) | 0;
          hi = hi + Math.imul(ah1, bh1) | 0;
          lo = lo + Math.imul(al0, bl2) | 0;
          mid = mid + Math.imul(al0, bh2) | 0;
          mid = mid + Math.imul(ah0, bl2) | 0;
          hi = hi + Math.imul(ah0, bh2) | 0;
          var w2 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
          w2 &= 67108863;
          lo = Math.imul(al3, bl0);
          mid = Math.imul(al3, bh0);
          mid = mid + Math.imul(ah3, bl0) | 0;
          hi = Math.imul(ah3, bh0);
          lo = lo + Math.imul(al2, bl1) | 0;
          mid = mid + Math.imul(al2, bh1) | 0;
          mid = mid + Math.imul(ah2, bl1) | 0;
          hi = hi + Math.imul(ah2, bh1) | 0;
          lo = lo + Math.imul(al1, bl2) | 0;
          mid = mid + Math.imul(al1, bh2) | 0;
          mid = mid + Math.imul(ah1, bl2) | 0;
          hi = hi + Math.imul(ah1, bh2) | 0;
          lo = lo + Math.imul(al0, bl3) | 0;
          mid = mid + Math.imul(al0, bh3) | 0;
          mid = mid + Math.imul(ah0, bl3) | 0;
          hi = hi + Math.imul(ah0, bh3) | 0;
          var w3 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
          w3 &= 67108863;
          lo = Math.imul(al4, bl0);
          mid = Math.imul(al4, bh0);
          mid = mid + Math.imul(ah4, bl0) | 0;
          hi = Math.imul(ah4, bh0);
          lo = lo + Math.imul(al3, bl1) | 0;
          mid = mid + Math.imul(al3, bh1) | 0;
          mid = mid + Math.imul(ah3, bl1) | 0;
          hi = hi + Math.imul(ah3, bh1) | 0;
          lo = lo + Math.imul(al2, bl2) | 0;
          mid = mid + Math.imul(al2, bh2) | 0;
          mid = mid + Math.imul(ah2, bl2) | 0;
          hi = hi + Math.imul(ah2, bh2) | 0;
          lo = lo + Math.imul(al1, bl3) | 0;
          mid = mid + Math.imul(al1, bh3) | 0;
          mid = mid + Math.imul(ah1, bl3) | 0;
          hi = hi + Math.imul(ah1, bh3) | 0;
          lo = lo + Math.imul(al0, bl4) | 0;
          mid = mid + Math.imul(al0, bh4) | 0;
          mid = mid + Math.imul(ah0, bl4) | 0;
          hi = hi + Math.imul(ah0, bh4) | 0;
          var w4 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
          w4 &= 67108863;
          lo = Math.imul(al5, bl0);
          mid = Math.imul(al5, bh0);
          mid = mid + Math.imul(ah5, bl0) | 0;
          hi = Math.imul(ah5, bh0);
          lo = lo + Math.imul(al4, bl1) | 0;
          mid = mid + Math.imul(al4, bh1) | 0;
          mid = mid + Math.imul(ah4, bl1) | 0;
          hi = hi + Math.imul(ah4, bh1) | 0;
          lo = lo + Math.imul(al3, bl2) | 0;
          mid = mid + Math.imul(al3, bh2) | 0;
          mid = mid + Math.imul(ah3, bl2) | 0;
          hi = hi + Math.imul(ah3, bh2) | 0;
          lo = lo + Math.imul(al2, bl3) | 0;
          mid = mid + Math.imul(al2, bh3) | 0;
          mid = mid + Math.imul(ah2, bl3) | 0;
          hi = hi + Math.imul(ah2, bh3) | 0;
          lo = lo + Math.imul(al1, bl4) | 0;
          mid = mid + Math.imul(al1, bh4) | 0;
          mid = mid + Math.imul(ah1, bl4) | 0;
          hi = hi + Math.imul(ah1, bh4) | 0;
          lo = lo + Math.imul(al0, bl5) | 0;
          mid = mid + Math.imul(al0, bh5) | 0;
          mid = mid + Math.imul(ah0, bl5) | 0;
          hi = hi + Math.imul(ah0, bh5) | 0;
          var w5 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
          w5 &= 67108863;
          lo = Math.imul(al6, bl0);
          mid = Math.imul(al6, bh0);
          mid = mid + Math.imul(ah6, bl0) | 0;
          hi = Math.imul(ah6, bh0);
          lo = lo + Math.imul(al5, bl1) | 0;
          mid = mid + Math.imul(al5, bh1) | 0;
          mid = mid + Math.imul(ah5, bl1) | 0;
          hi = hi + Math.imul(ah5, bh1) | 0;
          lo = lo + Math.imul(al4, bl2) | 0;
          mid = mid + Math.imul(al4, bh2) | 0;
          mid = mid + Math.imul(ah4, bl2) | 0;
          hi = hi + Math.imul(ah4, bh2) | 0;
          lo = lo + Math.imul(al3, bl3) | 0;
          mid = mid + Math.imul(al3, bh3) | 0;
          mid = mid + Math.imul(ah3, bl3) | 0;
          hi = hi + Math.imul(ah3, bh3) | 0;
          lo = lo + Math.imul(al2, bl4) | 0;
          mid = mid + Math.imul(al2, bh4) | 0;
          mid = mid + Math.imul(ah2, bl4) | 0;
          hi = hi + Math.imul(ah2, bh4) | 0;
          lo = lo + Math.imul(al1, bl5) | 0;
          mid = mid + Math.imul(al1, bh5) | 0;
          mid = mid + Math.imul(ah1, bl5) | 0;
          hi = hi + Math.imul(ah1, bh5) | 0;
          lo = lo + Math.imul(al0, bl6) | 0;
          mid = mid + Math.imul(al0, bh6) | 0;
          mid = mid + Math.imul(ah0, bl6) | 0;
          hi = hi + Math.imul(ah0, bh6) | 0;
          var w6 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
          w6 &= 67108863;
          lo = Math.imul(al7, bl0);
          mid = Math.imul(al7, bh0);
          mid = mid + Math.imul(ah7, bl0) | 0;
          hi = Math.imul(ah7, bh0);
          lo = lo + Math.imul(al6, bl1) | 0;
          mid = mid + Math.imul(al6, bh1) | 0;
          mid = mid + Math.imul(ah6, bl1) | 0;
          hi = hi + Math.imul(ah6, bh1) | 0;
          lo = lo + Math.imul(al5, bl2) | 0;
          mid = mid + Math.imul(al5, bh2) | 0;
          mid = mid + Math.imul(ah5, bl2) | 0;
          hi = hi + Math.imul(ah5, bh2) | 0;
          lo = lo + Math.imul(al4, bl3) | 0;
          mid = mid + Math.imul(al4, bh3) | 0;
          mid = mid + Math.imul(ah4, bl3) | 0;
          hi = hi + Math.imul(ah4, bh3) | 0;
          lo = lo + Math.imul(al3, bl4) | 0;
          mid = mid + Math.imul(al3, bh4) | 0;
          mid = mid + Math.imul(ah3, bl4) | 0;
          hi = hi + Math.imul(ah3, bh4) | 0;
          lo = lo + Math.imul(al2, bl5) | 0;
          mid = mid + Math.imul(al2, bh5) | 0;
          mid = mid + Math.imul(ah2, bl5) | 0;
          hi = hi + Math.imul(ah2, bh5) | 0;
          lo = lo + Math.imul(al1, bl6) | 0;
          mid = mid + Math.imul(al1, bh6) | 0;
          mid = mid + Math.imul(ah1, bl6) | 0;
          hi = hi + Math.imul(ah1, bh6) | 0;
          lo = lo + Math.imul(al0, bl7) | 0;
          mid = mid + Math.imul(al0, bh7) | 0;
          mid = mid + Math.imul(ah0, bl7) | 0;
          hi = hi + Math.imul(ah0, bh7) | 0;
          var w7 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
          w7 &= 67108863;
          lo = Math.imul(al8, bl0);
          mid = Math.imul(al8, bh0);
          mid = mid + Math.imul(ah8, bl0) | 0;
          hi = Math.imul(ah8, bh0);
          lo = lo + Math.imul(al7, bl1) | 0;
          mid = mid + Math.imul(al7, bh1) | 0;
          mid = mid + Math.imul(ah7, bl1) | 0;
          hi = hi + Math.imul(ah7, bh1) | 0;
          lo = lo + Math.imul(al6, bl2) | 0;
          mid = mid + Math.imul(al6, bh2) | 0;
          mid = mid + Math.imul(ah6, bl2) | 0;
          hi = hi + Math.imul(ah6, bh2) | 0;
          lo = lo + Math.imul(al5, bl3) | 0;
          mid = mid + Math.imul(al5, bh3) | 0;
          mid = mid + Math.imul(ah5, bl3) | 0;
          hi = hi + Math.imul(ah5, bh3) | 0;
          lo = lo + Math.imul(al4, bl4) | 0;
          mid = mid + Math.imul(al4, bh4) | 0;
          mid = mid + Math.imul(ah4, bl4) | 0;
          hi = hi + Math.imul(ah4, bh4) | 0;
          lo = lo + Math.imul(al3, bl5) | 0;
          mid = mid + Math.imul(al3, bh5) | 0;
          mid = mid + Math.imul(ah3, bl5) | 0;
          hi = hi + Math.imul(ah3, bh5) | 0;
          lo = lo + Math.imul(al2, bl6) | 0;
          mid = mid + Math.imul(al2, bh6) | 0;
          mid = mid + Math.imul(ah2, bl6) | 0;
          hi = hi + Math.imul(ah2, bh6) | 0;
          lo = lo + Math.imul(al1, bl7) | 0;
          mid = mid + Math.imul(al1, bh7) | 0;
          mid = mid + Math.imul(ah1, bl7) | 0;
          hi = hi + Math.imul(ah1, bh7) | 0;
          lo = lo + Math.imul(al0, bl8) | 0;
          mid = mid + Math.imul(al0, bh8) | 0;
          mid = mid + Math.imul(ah0, bl8) | 0;
          hi = hi + Math.imul(ah0, bh8) | 0;
          var w8 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
          w8 &= 67108863;
          lo = Math.imul(al9, bl0);
          mid = Math.imul(al9, bh0);
          mid = mid + Math.imul(ah9, bl0) | 0;
          hi = Math.imul(ah9, bh0);
          lo = lo + Math.imul(al8, bl1) | 0;
          mid = mid + Math.imul(al8, bh1) | 0;
          mid = mid + Math.imul(ah8, bl1) | 0;
          hi = hi + Math.imul(ah8, bh1) | 0;
          lo = lo + Math.imul(al7, bl2) | 0;
          mid = mid + Math.imul(al7, bh2) | 0;
          mid = mid + Math.imul(ah7, bl2) | 0;
          hi = hi + Math.imul(ah7, bh2) | 0;
          lo = lo + Math.imul(al6, bl3) | 0;
          mid = mid + Math.imul(al6, bh3) | 0;
          mid = mid + Math.imul(ah6, bl3) | 0;
          hi = hi + Math.imul(ah6, bh3) | 0;
          lo = lo + Math.imul(al5, bl4) | 0;
          mid = mid + Math.imul(al5, bh4) | 0;
          mid = mid + Math.imul(ah5, bl4) | 0;
          hi = hi + Math.imul(ah5, bh4) | 0;
          lo = lo + Math.imul(al4, bl5) | 0;
          mid = mid + Math.imul(al4, bh5) | 0;
          mid = mid + Math.imul(ah4, bl5) | 0;
          hi = hi + Math.imul(ah4, bh5) | 0;
          lo = lo + Math.imul(al3, bl6) | 0;
          mid = mid + Math.imul(al3, bh6) | 0;
          mid = mid + Math.imul(ah3, bl6) | 0;
          hi = hi + Math.imul(ah3, bh6) | 0;
          lo = lo + Math.imul(al2, bl7) | 0;
          mid = mid + Math.imul(al2, bh7) | 0;
          mid = mid + Math.imul(ah2, bl7) | 0;
          hi = hi + Math.imul(ah2, bh7) | 0;
          lo = lo + Math.imul(al1, bl8) | 0;
          mid = mid + Math.imul(al1, bh8) | 0;
          mid = mid + Math.imul(ah1, bl8) | 0;
          hi = hi + Math.imul(ah1, bh8) | 0;
          lo = lo + Math.imul(al0, bl9) | 0;
          mid = mid + Math.imul(al0, bh9) | 0;
          mid = mid + Math.imul(ah0, bl9) | 0;
          hi = hi + Math.imul(ah0, bh9) | 0;
          var w9 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
          w9 &= 67108863;
          lo = Math.imul(al9, bl1);
          mid = Math.imul(al9, bh1);
          mid = mid + Math.imul(ah9, bl1) | 0;
          hi = Math.imul(ah9, bh1);
          lo = lo + Math.imul(al8, bl2) | 0;
          mid = mid + Math.imul(al8, bh2) | 0;
          mid = mid + Math.imul(ah8, bl2) | 0;
          hi = hi + Math.imul(ah8, bh2) | 0;
          lo = lo + Math.imul(al7, bl3) | 0;
          mid = mid + Math.imul(al7, bh3) | 0;
          mid = mid + Math.imul(ah7, bl3) | 0;
          hi = hi + Math.imul(ah7, bh3) | 0;
          lo = lo + Math.imul(al6, bl4) | 0;
          mid = mid + Math.imul(al6, bh4) | 0;
          mid = mid + Math.imul(ah6, bl4) | 0;
          hi = hi + Math.imul(ah6, bh4) | 0;
          lo = lo + Math.imul(al5, bl5) | 0;
          mid = mid + Math.imul(al5, bh5) | 0;
          mid = mid + Math.imul(ah5, bl5) | 0;
          hi = hi + Math.imul(ah5, bh5) | 0;
          lo = lo + Math.imul(al4, bl6) | 0;
          mid = mid + Math.imul(al4, bh6) | 0;
          mid = mid + Math.imul(ah4, bl6) | 0;
          hi = hi + Math.imul(ah4, bh6) | 0;
          lo = lo + Math.imul(al3, bl7) | 0;
          mid = mid + Math.imul(al3, bh7) | 0;
          mid = mid + Math.imul(ah3, bl7) | 0;
          hi = hi + Math.imul(ah3, bh7) | 0;
          lo = lo + Math.imul(al2, bl8) | 0;
          mid = mid + Math.imul(al2, bh8) | 0;
          mid = mid + Math.imul(ah2, bl8) | 0;
          hi = hi + Math.imul(ah2, bh8) | 0;
          lo = lo + Math.imul(al1, bl9) | 0;
          mid = mid + Math.imul(al1, bh9) | 0;
          mid = mid + Math.imul(ah1, bl9) | 0;
          hi = hi + Math.imul(ah1, bh9) | 0;
          var w10 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
          w10 &= 67108863;
          lo = Math.imul(al9, bl2);
          mid = Math.imul(al9, bh2);
          mid = mid + Math.imul(ah9, bl2) | 0;
          hi = Math.imul(ah9, bh2);
          lo = lo + Math.imul(al8, bl3) | 0;
          mid = mid + Math.imul(al8, bh3) | 0;
          mid = mid + Math.imul(ah8, bl3) | 0;
          hi = hi + Math.imul(ah8, bh3) | 0;
          lo = lo + Math.imul(al7, bl4) | 0;
          mid = mid + Math.imul(al7, bh4) | 0;
          mid = mid + Math.imul(ah7, bl4) | 0;
          hi = hi + Math.imul(ah7, bh4) | 0;
          lo = lo + Math.imul(al6, bl5) | 0;
          mid = mid + Math.imul(al6, bh5) | 0;
          mid = mid + Math.imul(ah6, bl5) | 0;
          hi = hi + Math.imul(ah6, bh5) | 0;
          lo = lo + Math.imul(al5, bl6) | 0;
          mid = mid + Math.imul(al5, bh6) | 0;
          mid = mid + Math.imul(ah5, bl6) | 0;
          hi = hi + Math.imul(ah5, bh6) | 0;
          lo = lo + Math.imul(al4, bl7) | 0;
          mid = mid + Math.imul(al4, bh7) | 0;
          mid = mid + Math.imul(ah4, bl7) | 0;
          hi = hi + Math.imul(ah4, bh7) | 0;
          lo = lo + Math.imul(al3, bl8) | 0;
          mid = mid + Math.imul(al3, bh8) | 0;
          mid = mid + Math.imul(ah3, bl8) | 0;
          hi = hi + Math.imul(ah3, bh8) | 0;
          lo = lo + Math.imul(al2, bl9) | 0;
          mid = mid + Math.imul(al2, bh9) | 0;
          mid = mid + Math.imul(ah2, bl9) | 0;
          hi = hi + Math.imul(ah2, bh9) | 0;
          var w11 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
          w11 &= 67108863;
          lo = Math.imul(al9, bl3);
          mid = Math.imul(al9, bh3);
          mid = mid + Math.imul(ah9, bl3) | 0;
          hi = Math.imul(ah9, bh3);
          lo = lo + Math.imul(al8, bl4) | 0;
          mid = mid + Math.imul(al8, bh4) | 0;
          mid = mid + Math.imul(ah8, bl4) | 0;
          hi = hi + Math.imul(ah8, bh4) | 0;
          lo = lo + Math.imul(al7, bl5) | 0;
          mid = mid + Math.imul(al7, bh5) | 0;
          mid = mid + Math.imul(ah7, bl5) | 0;
          hi = hi + Math.imul(ah7, bh5) | 0;
          lo = lo + Math.imul(al6, bl6) | 0;
          mid = mid + Math.imul(al6, bh6) | 0;
          mid = mid + Math.imul(ah6, bl6) | 0;
          hi = hi + Math.imul(ah6, bh6) | 0;
          lo = lo + Math.imul(al5, bl7) | 0;
          mid = mid + Math.imul(al5, bh7) | 0;
          mid = mid + Math.imul(ah5, bl7) | 0;
          hi = hi + Math.imul(ah5, bh7) | 0;
          lo = lo + Math.imul(al4, bl8) | 0;
          mid = mid + Math.imul(al4, bh8) | 0;
          mid = mid + Math.imul(ah4, bl8) | 0;
          hi = hi + Math.imul(ah4, bh8) | 0;
          lo = lo + Math.imul(al3, bl9) | 0;
          mid = mid + Math.imul(al3, bh9) | 0;
          mid = mid + Math.imul(ah3, bl9) | 0;
          hi = hi + Math.imul(ah3, bh9) | 0;
          var w12 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
          w12 &= 67108863;
          lo = Math.imul(al9, bl4);
          mid = Math.imul(al9, bh4);
          mid = mid + Math.imul(ah9, bl4) | 0;
          hi = Math.imul(ah9, bh4);
          lo = lo + Math.imul(al8, bl5) | 0;
          mid = mid + Math.imul(al8, bh5) | 0;
          mid = mid + Math.imul(ah8, bl5) | 0;
          hi = hi + Math.imul(ah8, bh5) | 0;
          lo = lo + Math.imul(al7, bl6) | 0;
          mid = mid + Math.imul(al7, bh6) | 0;
          mid = mid + Math.imul(ah7, bl6) | 0;
          hi = hi + Math.imul(ah7, bh6) | 0;
          lo = lo + Math.imul(al6, bl7) | 0;
          mid = mid + Math.imul(al6, bh7) | 0;
          mid = mid + Math.imul(ah6, bl7) | 0;
          hi = hi + Math.imul(ah6, bh7) | 0;
          lo = lo + Math.imul(al5, bl8) | 0;
          mid = mid + Math.imul(al5, bh8) | 0;
          mid = mid + Math.imul(ah5, bl8) | 0;
          hi = hi + Math.imul(ah5, bh8) | 0;
          lo = lo + Math.imul(al4, bl9) | 0;
          mid = mid + Math.imul(al4, bh9) | 0;
          mid = mid + Math.imul(ah4, bl9) | 0;
          hi = hi + Math.imul(ah4, bh9) | 0;
          var w13 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
          w13 &= 67108863;
          lo = Math.imul(al9, bl5);
          mid = Math.imul(al9, bh5);
          mid = mid + Math.imul(ah9, bl5) | 0;
          hi = Math.imul(ah9, bh5);
          lo = lo + Math.imul(al8, bl6) | 0;
          mid = mid + Math.imul(al8, bh6) | 0;
          mid = mid + Math.imul(ah8, bl6) | 0;
          hi = hi + Math.imul(ah8, bh6) | 0;
          lo = lo + Math.imul(al7, bl7) | 0;
          mid = mid + Math.imul(al7, bh7) | 0;
          mid = mid + Math.imul(ah7, bl7) | 0;
          hi = hi + Math.imul(ah7, bh7) | 0;
          lo = lo + Math.imul(al6, bl8) | 0;
          mid = mid + Math.imul(al6, bh8) | 0;
          mid = mid + Math.imul(ah6, bl8) | 0;
          hi = hi + Math.imul(ah6, bh8) | 0;
          lo = lo + Math.imul(al5, bl9) | 0;
          mid = mid + Math.imul(al5, bh9) | 0;
          mid = mid + Math.imul(ah5, bl9) | 0;
          hi = hi + Math.imul(ah5, bh9) | 0;
          var w14 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
          w14 &= 67108863;
          lo = Math.imul(al9, bl6);
          mid = Math.imul(al9, bh6);
          mid = mid + Math.imul(ah9, bl6) | 0;
          hi = Math.imul(ah9, bh6);
          lo = lo + Math.imul(al8, bl7) | 0;
          mid = mid + Math.imul(al8, bh7) | 0;
          mid = mid + Math.imul(ah8, bl7) | 0;
          hi = hi + Math.imul(ah8, bh7) | 0;
          lo = lo + Math.imul(al7, bl8) | 0;
          mid = mid + Math.imul(al7, bh8) | 0;
          mid = mid + Math.imul(ah7, bl8) | 0;
          hi = hi + Math.imul(ah7, bh8) | 0;
          lo = lo + Math.imul(al6, bl9) | 0;
          mid = mid + Math.imul(al6, bh9) | 0;
          mid = mid + Math.imul(ah6, bl9) | 0;
          hi = hi + Math.imul(ah6, bh9) | 0;
          var w15 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
          w15 &= 67108863;
          lo = Math.imul(al9, bl7);
          mid = Math.imul(al9, bh7);
          mid = mid + Math.imul(ah9, bl7) | 0;
          hi = Math.imul(ah9, bh7);
          lo = lo + Math.imul(al8, bl8) | 0;
          mid = mid + Math.imul(al8, bh8) | 0;
          mid = mid + Math.imul(ah8, bl8) | 0;
          hi = hi + Math.imul(ah8, bh8) | 0;
          lo = lo + Math.imul(al7, bl9) | 0;
          mid = mid + Math.imul(al7, bh9) | 0;
          mid = mid + Math.imul(ah7, bl9) | 0;
          hi = hi + Math.imul(ah7, bh9) | 0;
          var w16 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
          w16 &= 67108863;
          lo = Math.imul(al9, bl8);
          mid = Math.imul(al9, bh8);
          mid = mid + Math.imul(ah9, bl8) | 0;
          hi = Math.imul(ah9, bh8);
          lo = lo + Math.imul(al8, bl9) | 0;
          mid = mid + Math.imul(al8, bh9) | 0;
          mid = mid + Math.imul(ah8, bl9) | 0;
          hi = hi + Math.imul(ah8, bh9) | 0;
          var w17 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
          w17 &= 67108863;
          lo = Math.imul(al9, bl9);
          mid = Math.imul(al9, bh9);
          mid = mid + Math.imul(ah9, bl9) | 0;
          hi = Math.imul(ah9, bh9);
          var w18 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
          c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
          w18 &= 67108863;
          o[0] = w0;
          o[1] = w1;
          o[2] = w2;
          o[3] = w3;
          o[4] = w4;
          o[5] = w5;
          o[6] = w6;
          o[7] = w7;
          o[8] = w8;
          o[9] = w9;
          o[10] = w10;
          o[11] = w11;
          o[12] = w12;
          o[13] = w13;
          o[14] = w14;
          o[15] = w15;
          o[16] = w16;
          o[17] = w17;
          o[18] = w18;
          if (c !== 0) {
            o[19] = c;
            out.length++;
          }
          return out;
        };
        if (!Math.imul) {
          comb10MulTo = smallMulTo;
        }
        function bigMulTo(self2, num, out) {
          out.negative = num.negative ^ self2.negative;
          out.length = self2.length + num.length;
          var carry = 0;
          var hncarry = 0;
          for (var k = 0; k < out.length - 1; k++) {
            var ncarry = hncarry;
            hncarry = 0;
            var rword = carry & 67108863;
            var maxJ = Math.min(k, num.length - 1);
            for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
              var i = k - j;
              var a = self2.words[i] | 0;
              var b = num.words[j] | 0;
              var r = a * b;
              var lo = r & 67108863;
              ncarry = ncarry + (r / 67108864 | 0) | 0;
              lo = lo + rword | 0;
              rword = lo & 67108863;
              ncarry = ncarry + (lo >>> 26) | 0;
              hncarry += ncarry >>> 26;
              ncarry &= 67108863;
            }
            out.words[k] = rword;
            carry = ncarry;
            ncarry = hncarry;
          }
          if (carry !== 0) {
            out.words[k] = carry;
          } else {
            out.length--;
          }
          return out._strip();
        }
        function jumboMulTo(self2, num, out) {
          return bigMulTo(self2, num, out);
        }
        BN.prototype.mulTo = function mulTo(num, out) {
          var res;
          var len = this.length + num.length;
          if (this.length === 10 && num.length === 10) {
            res = comb10MulTo(this, num, out);
          } else if (len < 63) {
            res = smallMulTo(this, num, out);
          } else if (len < 1024) {
            res = bigMulTo(this, num, out);
          } else {
            res = jumboMulTo(this, num, out);
          }
          return res;
        };
        function FFTM(x, y) {
          this.x = x;
          this.y = y;
        }
        FFTM.prototype.makeRBT = function makeRBT(N) {
          var t = new Array(N);
          var l = BN.prototype._countBits(N) - 1;
          for (var i = 0; i < N; i++) {
            t[i] = this.revBin(i, l, N);
          }
          return t;
        };
        FFTM.prototype.revBin = function revBin(x, l, N) {
          if (x === 0 || x === N - 1)
            return x;
          var rb = 0;
          for (var i = 0; i < l; i++) {
            rb |= (x & 1) << l - i - 1;
            x >>= 1;
          }
          return rb;
        };
        FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
          for (var i = 0; i < N; i++) {
            rtws[i] = rws[rbt[i]];
            itws[i] = iws[rbt[i]];
          }
        };
        FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
          this.permute(rbt, rws, iws, rtws, itws, N);
          for (var s = 1; s < N; s <<= 1) {
            var l = s << 1;
            var rtwdf = Math.cos(2 * Math.PI / l);
            var itwdf = Math.sin(2 * Math.PI / l);
            for (var p = 0; p < N; p += l) {
              var rtwdf_ = rtwdf;
              var itwdf_ = itwdf;
              for (var j = 0; j < s; j++) {
                var re = rtws[p + j];
                var ie = itws[p + j];
                var ro = rtws[p + j + s];
                var io = itws[p + j + s];
                var rx = rtwdf_ * ro - itwdf_ * io;
                io = rtwdf_ * io + itwdf_ * ro;
                ro = rx;
                rtws[p + j] = re + ro;
                itws[p + j] = ie + io;
                rtws[p + j + s] = re - ro;
                itws[p + j + s] = ie - io;
                if (j !== l) {
                  rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                  itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                  rtwdf_ = rx;
                }
              }
            }
          }
        };
        FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
          var N = Math.max(m, n) | 1;
          var odd = N & 1;
          var i = 0;
          for (N = N / 2 | 0; N; N = N >>> 1) {
            i++;
          }
          return 1 << i + 1 + odd;
        };
        FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
          if (N <= 1)
            return;
          for (var i = 0; i < N / 2; i++) {
            var t = rws[i];
            rws[i] = rws[N - i - 1];
            rws[N - i - 1] = t;
            t = iws[i];
            iws[i] = -iws[N - i - 1];
            iws[N - i - 1] = -t;
          }
        };
        FFTM.prototype.normalize13b = function normalize13b(ws, N) {
          var carry = 0;
          for (var i = 0; i < N / 2; i++) {
            var w = Math.round(ws[2 * i + 1] / N) * 8192 + Math.round(ws[2 * i] / N) + carry;
            ws[i] = w & 67108863;
            if (w < 67108864) {
              carry = 0;
            } else {
              carry = w / 67108864 | 0;
            }
          }
          return ws;
        };
        FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
          var carry = 0;
          for (var i = 0; i < len; i++) {
            carry = carry + (ws[i] | 0);
            rws[2 * i] = carry & 8191;
            carry = carry >>> 13;
            rws[2 * i + 1] = carry & 8191;
            carry = carry >>> 13;
          }
          for (i = 2 * len; i < N; ++i) {
            rws[i] = 0;
          }
          assert(carry === 0);
          assert((carry & ~8191) === 0);
        };
        FFTM.prototype.stub = function stub(N) {
          var ph = new Array(N);
          for (var i = 0; i < N; i++) {
            ph[i] = 0;
          }
          return ph;
        };
        FFTM.prototype.mulp = function mulp(x, y, out) {
          var N = 2 * this.guessLen13b(x.length, y.length);
          var rbt = this.makeRBT(N);
          var _ = this.stub(N);
          var rws = new Array(N);
          var rwst = new Array(N);
          var iwst = new Array(N);
          var nrws = new Array(N);
          var nrwst = new Array(N);
          var niwst = new Array(N);
          var rmws = out.words;
          rmws.length = N;
          this.convert13b(x.words, x.length, rws, N);
          this.convert13b(y.words, y.length, nrws, N);
          this.transform(rws, _, rwst, iwst, N, rbt);
          this.transform(nrws, _, nrwst, niwst, N, rbt);
          for (var i = 0; i < N; i++) {
            var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
            iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
            rwst[i] = rx;
          }
          this.conjugate(rwst, iwst, N);
          this.transform(rwst, iwst, rmws, _, N, rbt);
          this.conjugate(rmws, _, N);
          this.normalize13b(rmws, N);
          out.negative = x.negative ^ y.negative;
          out.length = x.length + y.length;
          return out._strip();
        };
        BN.prototype.mul = function mul(num) {
          var out = new BN(null);
          out.words = new Array(this.length + num.length);
          return this.mulTo(num, out);
        };
        BN.prototype.mulf = function mulf(num) {
          var out = new BN(null);
          out.words = new Array(this.length + num.length);
          return jumboMulTo(this, num, out);
        };
        BN.prototype.imul = function imul(num) {
          return this.clone().mulTo(num, this);
        };
        BN.prototype.imuln = function imuln(num) {
          var isNegNum = num < 0;
          if (isNegNum)
            num = -num;
          assert(typeof num === "number");
          assert(num < 67108864);
          var carry = 0;
          for (var i = 0; i < this.length; i++) {
            var w = (this.words[i] | 0) * num;
            var lo = (w & 67108863) + (carry & 67108863);
            carry >>= 26;
            carry += w / 67108864 | 0;
            carry += lo >>> 26;
            this.words[i] = lo & 67108863;
          }
          if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
          }
          return isNegNum ? this.ineg() : this;
        };
        BN.prototype.muln = function muln(num) {
          return this.clone().imuln(num);
        };
        BN.prototype.sqr = function sqr() {
          return this.mul(this);
        };
        BN.prototype.isqr = function isqr() {
          return this.imul(this.clone());
        };
        BN.prototype.pow = function pow(num) {
          var w = toBitArray(num);
          if (w.length === 0)
            return new BN(1);
          var res = this;
          for (var i = 0; i < w.length; i++, res = res.sqr()) {
            if (w[i] !== 0)
              break;
          }
          if (++i < w.length) {
            for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
              if (w[i] === 0)
                continue;
              res = res.mul(q);
            }
          }
          return res;
        };
        BN.prototype.iushln = function iushln(bits) {
          assert(typeof bits === "number" && bits >= 0);
          var r = bits % 26;
          var s = (bits - r) / 26;
          var carryMask = 67108863 >>> 26 - r << 26 - r;
          var i;
          if (r !== 0) {
            var carry = 0;
            for (i = 0; i < this.length; i++) {
              var newCarry = this.words[i] & carryMask;
              var c = (this.words[i] | 0) - newCarry << r;
              this.words[i] = c | carry;
              carry = newCarry >>> 26 - r;
            }
            if (carry) {
              this.words[i] = carry;
              this.length++;
            }
          }
          if (s !== 0) {
            for (i = this.length - 1; i >= 0; i--) {
              this.words[i + s] = this.words[i];
            }
            for (i = 0; i < s; i++) {
              this.words[i] = 0;
            }
            this.length += s;
          }
          return this._strip();
        };
        BN.prototype.ishln = function ishln(bits) {
          assert(this.negative === 0);
          return this.iushln(bits);
        };
        BN.prototype.iushrn = function iushrn(bits, hint, extended) {
          assert(typeof bits === "number" && bits >= 0);
          var h;
          if (hint) {
            h = (hint - hint % 26) / 26;
          } else {
            h = 0;
          }
          var r = bits % 26;
          var s = Math.min((bits - r) / 26, this.length);
          var mask = 67108863 ^ 67108863 >>> r << r;
          var maskedWords = extended;
          h -= s;
          h = Math.max(0, h);
          if (maskedWords) {
            for (var i = 0; i < s; i++) {
              maskedWords.words[i] = this.words[i];
            }
            maskedWords.length = s;
          }
          if (s === 0) {
          } else if (this.length > s) {
            this.length -= s;
            for (i = 0; i < this.length; i++) {
              this.words[i] = this.words[i + s];
            }
          } else {
            this.words[0] = 0;
            this.length = 1;
          }
          var carry = 0;
          for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
            var word = this.words[i] | 0;
            this.words[i] = carry << 26 - r | word >>> r;
            carry = word & mask;
          }
          if (maskedWords && carry !== 0) {
            maskedWords.words[maskedWords.length++] = carry;
          }
          if (this.length === 0) {
            this.words[0] = 0;
            this.length = 1;
          }
          return this._strip();
        };
        BN.prototype.ishrn = function ishrn(bits, hint, extended) {
          assert(this.negative === 0);
          return this.iushrn(bits, hint, extended);
        };
        BN.prototype.shln = function shln(bits) {
          return this.clone().ishln(bits);
        };
        BN.prototype.ushln = function ushln(bits) {
          return this.clone().iushln(bits);
        };
        BN.prototype.shrn = function shrn(bits) {
          return this.clone().ishrn(bits);
        };
        BN.prototype.ushrn = function ushrn(bits) {
          return this.clone().iushrn(bits);
        };
        BN.prototype.testn = function testn(bit) {
          assert(typeof bit === "number" && bit >= 0);
          var r = bit % 26;
          var s = (bit - r) / 26;
          var q = 1 << r;
          if (this.length <= s)
            return false;
          var w = this.words[s];
          return !!(w & q);
        };
        BN.prototype.imaskn = function imaskn(bits) {
          assert(typeof bits === "number" && bits >= 0);
          var r = bits % 26;
          var s = (bits - r) / 26;
          assert(this.negative === 0, "imaskn works only with positive numbers");
          if (this.length <= s) {
            return this;
          }
          if (r !== 0) {
            s++;
          }
          this.length = Math.min(s, this.length);
          if (r !== 0) {
            var mask = 67108863 ^ 67108863 >>> r << r;
            this.words[this.length - 1] &= mask;
          }
          return this._strip();
        };
        BN.prototype.maskn = function maskn(bits) {
          return this.clone().imaskn(bits);
        };
        BN.prototype.iaddn = function iaddn(num) {
          assert(typeof num === "number");
          assert(num < 67108864);
          if (num < 0)
            return this.isubn(-num);
          if (this.negative !== 0) {
            if (this.length === 1 && (this.words[0] | 0) <= num) {
              this.words[0] = num - (this.words[0] | 0);
              this.negative = 0;
              return this;
            }
            this.negative = 0;
            this.isubn(num);
            this.negative = 1;
            return this;
          }
          return this._iaddn(num);
        };
        BN.prototype._iaddn = function _iaddn(num) {
          this.words[0] += num;
          for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) {
            this.words[i] -= 67108864;
            if (i === this.length - 1) {
              this.words[i + 1] = 1;
            } else {
              this.words[i + 1]++;
            }
          }
          this.length = Math.max(this.length, i + 1);
          return this;
        };
        BN.prototype.isubn = function isubn(num) {
          assert(typeof num === "number");
          assert(num < 67108864);
          if (num < 0)
            return this.iaddn(-num);
          if (this.negative !== 0) {
            this.negative = 0;
            this.iaddn(num);
            this.negative = 1;
            return this;
          }
          this.words[0] -= num;
          if (this.length === 1 && this.words[0] < 0) {
            this.words[0] = -this.words[0];
            this.negative = 1;
          } else {
            for (var i = 0; i < this.length && this.words[i] < 0; i++) {
              this.words[i] += 67108864;
              this.words[i + 1] -= 1;
            }
          }
          return this._strip();
        };
        BN.prototype.addn = function addn(num) {
          return this.clone().iaddn(num);
        };
        BN.prototype.subn = function subn(num) {
          return this.clone().isubn(num);
        };
        BN.prototype.iabs = function iabs() {
          this.negative = 0;
          return this;
        };
        BN.prototype.abs = function abs() {
          return this.clone().iabs();
        };
        BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
          var len = num.length + shift;
          var i;
          this._expand(len);
          var w;
          var carry = 0;
          for (i = 0; i < num.length; i++) {
            w = (this.words[i + shift] | 0) + carry;
            var right = (num.words[i] | 0) * mul;
            w -= right & 67108863;
            carry = (w >> 26) - (right / 67108864 | 0);
            this.words[i + shift] = w & 67108863;
          }
          for (; i < this.length - shift; i++) {
            w = (this.words[i + shift] | 0) + carry;
            carry = w >> 26;
            this.words[i + shift] = w & 67108863;
          }
          if (carry === 0)
            return this._strip();
          assert(carry === -1);
          carry = 0;
          for (i = 0; i < this.length; i++) {
            w = -(this.words[i] | 0) + carry;
            carry = w >> 26;
            this.words[i] = w & 67108863;
          }
          this.negative = 1;
          return this._strip();
        };
        BN.prototype._wordDiv = function _wordDiv(num, mode) {
          var shift = this.length - num.length;
          var a = this.clone();
          var b = num;
          var bhi = b.words[b.length - 1] | 0;
          var bhiBits = this._countBits(bhi);
          shift = 26 - bhiBits;
          if (shift !== 0) {
            b = b.ushln(shift);
            a.iushln(shift);
            bhi = b.words[b.length - 1] | 0;
          }
          var m = a.length - b.length;
          var q;
          if (mode !== "mod") {
            q = new BN(null);
            q.length = m + 1;
            q.words = new Array(q.length);
            for (var i = 0; i < q.length; i++) {
              q.words[i] = 0;
            }
          }
          var diff = a.clone()._ishlnsubmul(b, 1, m);
          if (diff.negative === 0) {
            a = diff;
            if (q) {
              q.words[m] = 1;
            }
          }
          for (var j = m - 1; j >= 0; j--) {
            var qj = (a.words[b.length + j] | 0) * 67108864 + (a.words[b.length + j - 1] | 0);
            qj = Math.min(qj / bhi | 0, 67108863);
            a._ishlnsubmul(b, qj, j);
            while (a.negative !== 0) {
              qj--;
              a.negative = 0;
              a._ishlnsubmul(b, 1, j);
              if (!a.isZero()) {
                a.negative ^= 1;
              }
            }
            if (q) {
              q.words[j] = qj;
            }
          }
          if (q) {
            q._strip();
          }
          a._strip();
          if (mode !== "div" && shift !== 0) {
            a.iushrn(shift);
          }
          return {
            div: q || null,
            mod: a
          };
        };
        BN.prototype.divmod = function divmod(num, mode, positive) {
          assert(!num.isZero());
          if (this.isZero()) {
            return {
              div: new BN(0),
              mod: new BN(0)
            };
          }
          var div, mod, res;
          if (this.negative !== 0 && num.negative === 0) {
            res = this.neg().divmod(num, mode);
            if (mode !== "mod") {
              div = res.div.neg();
            }
            if (mode !== "div") {
              mod = res.mod.neg();
              if (positive && mod.negative !== 0) {
                mod.iadd(num);
              }
            }
            return {
              div,
              mod
            };
          }
          if (this.negative === 0 && num.negative !== 0) {
            res = this.divmod(num.neg(), mode);
            if (mode !== "mod") {
              div = res.div.neg();
            }
            return {
              div,
              mod: res.mod
            };
          }
          if ((this.negative & num.negative) !== 0) {
            res = this.neg().divmod(num.neg(), mode);
            if (mode !== "div") {
              mod = res.mod.neg();
              if (positive && mod.negative !== 0) {
                mod.isub(num);
              }
            }
            return {
              div: res.div,
              mod
            };
          }
          if (num.length > this.length || this.cmp(num) < 0) {
            return {
              div: new BN(0),
              mod: this
            };
          }
          if (num.length === 1) {
            if (mode === "div") {
              return {
                div: this.divn(num.words[0]),
                mod: null
              };
            }
            if (mode === "mod") {
              return {
                div: null,
                mod: new BN(this.modrn(num.words[0]))
              };
            }
            return {
              div: this.divn(num.words[0]),
              mod: new BN(this.modrn(num.words[0]))
            };
          }
          return this._wordDiv(num, mode);
        };
        BN.prototype.div = function div(num) {
          return this.divmod(num, "div", false).div;
        };
        BN.prototype.mod = function mod(num) {
          return this.divmod(num, "mod", false).mod;
        };
        BN.prototype.umod = function umod(num) {
          return this.divmod(num, "mod", true).mod;
        };
        BN.prototype.divRound = function divRound(num) {
          var dm = this.divmod(num);
          if (dm.mod.isZero())
            return dm.div;
          var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
          var half = num.ushrn(1);
          var r2 = num.andln(1);
          var cmp = mod.cmp(half);
          if (cmp < 0 || r2 === 1 && cmp === 0)
            return dm.div;
          return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
        };
        BN.prototype.modrn = function modrn(num) {
          var isNegNum = num < 0;
          if (isNegNum)
            num = -num;
          assert(num <= 67108863);
          var p = (1 << 26) % num;
          var acc = 0;
          for (var i = this.length - 1; i >= 0; i--) {
            acc = (p * acc + (this.words[i] | 0)) % num;
          }
          return isNegNum ? -acc : acc;
        };
        BN.prototype.modn = function modn(num) {
          return this.modrn(num);
        };
        BN.prototype.idivn = function idivn(num) {
          var isNegNum = num < 0;
          if (isNegNum)
            num = -num;
          assert(num <= 67108863);
          var carry = 0;
          for (var i = this.length - 1; i >= 0; i--) {
            var w = (this.words[i] | 0) + carry * 67108864;
            this.words[i] = w / num | 0;
            carry = w % num;
          }
          this._strip();
          return isNegNum ? this.ineg() : this;
        };
        BN.prototype.divn = function divn(num) {
          return this.clone().idivn(num);
        };
        BN.prototype.egcd = function egcd(p) {
          assert(p.negative === 0);
          assert(!p.isZero());
          var x = this;
          var y = p.clone();
          if (x.negative !== 0) {
            x = x.umod(p);
          } else {
            x = x.clone();
          }
          var A = new BN(1);
          var B = new BN(0);
          var C = new BN(0);
          var D = new BN(1);
          var g = 0;
          while (x.isEven() && y.isEven()) {
            x.iushrn(1);
            y.iushrn(1);
            ++g;
          }
          var yp = y.clone();
          var xp = x.clone();
          while (!x.isZero()) {
            for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1)
              ;
            if (i > 0) {
              x.iushrn(i);
              while (i-- > 0) {
                if (A.isOdd() || B.isOdd()) {
                  A.iadd(yp);
                  B.isub(xp);
                }
                A.iushrn(1);
                B.iushrn(1);
              }
            }
            for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1)
              ;
            if (j > 0) {
              y.iushrn(j);
              while (j-- > 0) {
                if (C.isOdd() || D.isOdd()) {
                  C.iadd(yp);
                  D.isub(xp);
                }
                C.iushrn(1);
                D.iushrn(1);
              }
            }
            if (x.cmp(y) >= 0) {
              x.isub(y);
              A.isub(C);
              B.isub(D);
            } else {
              y.isub(x);
              C.isub(A);
              D.isub(B);
            }
          }
          return {
            a: C,
            b: D,
            gcd: y.iushln(g)
          };
        };
        BN.prototype._invmp = function _invmp(p) {
          assert(p.negative === 0);
          assert(!p.isZero());
          var a = this;
          var b = p.clone();
          if (a.negative !== 0) {
            a = a.umod(p);
          } else {
            a = a.clone();
          }
          var x1 = new BN(1);
          var x2 = new BN(0);
          var delta = b.clone();
          while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
            for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1)
              ;
            if (i > 0) {
              a.iushrn(i);
              while (i-- > 0) {
                if (x1.isOdd()) {
                  x1.iadd(delta);
                }
                x1.iushrn(1);
              }
            }
            for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1)
              ;
            if (j > 0) {
              b.iushrn(j);
              while (j-- > 0) {
                if (x2.isOdd()) {
                  x2.iadd(delta);
                }
                x2.iushrn(1);
              }
            }
            if (a.cmp(b) >= 0) {
              a.isub(b);
              x1.isub(x2);
            } else {
              b.isub(a);
              x2.isub(x1);
            }
          }
          var res;
          if (a.cmpn(1) === 0) {
            res = x1;
          } else {
            res = x2;
          }
          if (res.cmpn(0) < 0) {
            res.iadd(p);
          }
          return res;
        };
        BN.prototype.gcd = function gcd(num) {
          if (this.isZero())
            return num.abs();
          if (num.isZero())
            return this.abs();
          var a = this.clone();
          var b = num.clone();
          a.negative = 0;
          b.negative = 0;
          for (var shift = 0; a.isEven() && b.isEven(); shift++) {
            a.iushrn(1);
            b.iushrn(1);
          }
          do {
            while (a.isEven()) {
              a.iushrn(1);
            }
            while (b.isEven()) {
              b.iushrn(1);
            }
            var r = a.cmp(b);
            if (r < 0) {
              var t = a;
              a = b;
              b = t;
            } else if (r === 0 || b.cmpn(1) === 0) {
              break;
            }
            a.isub(b);
          } while (true);
          return b.iushln(shift);
        };
        BN.prototype.invm = function invm(num) {
          return this.egcd(num).a.umod(num);
        };
        BN.prototype.isEven = function isEven() {
          return (this.words[0] & 1) === 0;
        };
        BN.prototype.isOdd = function isOdd() {
          return (this.words[0] & 1) === 1;
        };
        BN.prototype.andln = function andln(num) {
          return this.words[0] & num;
        };
        BN.prototype.bincn = function bincn(bit) {
          assert(typeof bit === "number");
          var r = bit % 26;
          var s = (bit - r) / 26;
          var q = 1 << r;
          if (this.length <= s) {
            this._expand(s + 1);
            this.words[s] |= q;
            return this;
          }
          var carry = q;
          for (var i = s; carry !== 0 && i < this.length; i++) {
            var w = this.words[i] | 0;
            w += carry;
            carry = w >>> 26;
            w &= 67108863;
            this.words[i] = w;
          }
          if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
          }
          return this;
        };
        BN.prototype.isZero = function isZero() {
          return this.length === 1 && this.words[0] === 0;
        };
        BN.prototype.cmpn = function cmpn(num) {
          var negative = num < 0;
          if (this.negative !== 0 && !negative)
            return -1;
          if (this.negative === 0 && negative)
            return 1;
          this._strip();
          var res;
          if (this.length > 1) {
            res = 1;
          } else {
            if (negative) {
              num = -num;
            }
            assert(num <= 67108863, "Number is too big");
            var w = this.words[0] | 0;
            res = w === num ? 0 : w < num ? -1 : 1;
          }
          if (this.negative !== 0)
            return -res | 0;
          return res;
        };
        BN.prototype.cmp = function cmp(num) {
          if (this.negative !== 0 && num.negative === 0)
            return -1;
          if (this.negative === 0 && num.negative !== 0)
            return 1;
          var res = this.ucmp(num);
          if (this.negative !== 0)
            return -res | 0;
          return res;
        };
        BN.prototype.ucmp = function ucmp(num) {
          if (this.length > num.length)
            return 1;
          if (this.length < num.length)
            return -1;
          var res = 0;
          for (var i = this.length - 1; i >= 0; i--) {
            var a = this.words[i] | 0;
            var b = num.words[i] | 0;
            if (a === b)
              continue;
            if (a < b) {
              res = -1;
            } else if (a > b) {
              res = 1;
            }
            break;
          }
          return res;
        };
        BN.prototype.gtn = function gtn(num) {
          return this.cmpn(num) === 1;
        };
        BN.prototype.gt = function gt(num) {
          return this.cmp(num) === 1;
        };
        BN.prototype.gten = function gten(num) {
          return this.cmpn(num) >= 0;
        };
        BN.prototype.gte = function gte(num) {
          return this.cmp(num) >= 0;
        };
        BN.prototype.ltn = function ltn(num) {
          return this.cmpn(num) === -1;
        };
        BN.prototype.lt = function lt(num) {
          return this.cmp(num) === -1;
        };
        BN.prototype.lten = function lten(num) {
          return this.cmpn(num) <= 0;
        };
        BN.prototype.lte = function lte(num) {
          return this.cmp(num) <= 0;
        };
        BN.prototype.eqn = function eqn(num) {
          return this.cmpn(num) === 0;
        };
        BN.prototype.eq = function eq(num) {
          return this.cmp(num) === 0;
        };
        BN.red = function red(num) {
          return new Red(num);
        };
        BN.prototype.toRed = function toRed(ctx) {
          assert(!this.red, "Already a number in reduction context");
          assert(this.negative === 0, "red works only with positives");
          return ctx.convertTo(this)._forceRed(ctx);
        };
        BN.prototype.fromRed = function fromRed() {
          assert(this.red, "fromRed works only with numbers in reduction context");
          return this.red.convertFrom(this);
        };
        BN.prototype._forceRed = function _forceRed(ctx) {
          this.red = ctx;
          return this;
        };
        BN.prototype.forceRed = function forceRed(ctx) {
          assert(!this.red, "Already a number in reduction context");
          return this._forceRed(ctx);
        };
        BN.prototype.redAdd = function redAdd(num) {
          assert(this.red, "redAdd works only with red numbers");
          return this.red.add(this, num);
        };
        BN.prototype.redIAdd = function redIAdd(num) {
          assert(this.red, "redIAdd works only with red numbers");
          return this.red.iadd(this, num);
        };
        BN.prototype.redSub = function redSub(num) {
          assert(this.red, "redSub works only with red numbers");
          return this.red.sub(this, num);
        };
        BN.prototype.redISub = function redISub(num) {
          assert(this.red, "redISub works only with red numbers");
          return this.red.isub(this, num);
        };
        BN.prototype.redShl = function redShl(num) {
          assert(this.red, "redShl works only with red numbers");
          return this.red.shl(this, num);
        };
        BN.prototype.redMul = function redMul(num) {
          assert(this.red, "redMul works only with red numbers");
          this.red._verify2(this, num);
          return this.red.mul(this, num);
        };
        BN.prototype.redIMul = function redIMul(num) {
          assert(this.red, "redMul works only with red numbers");
          this.red._verify2(this, num);
          return this.red.imul(this, num);
        };
        BN.prototype.redSqr = function redSqr() {
          assert(this.red, "redSqr works only with red numbers");
          this.red._verify1(this);
          return this.red.sqr(this);
        };
        BN.prototype.redISqr = function redISqr() {
          assert(this.red, "redISqr works only with red numbers");
          this.red._verify1(this);
          return this.red.isqr(this);
        };
        BN.prototype.redSqrt = function redSqrt() {
          assert(this.red, "redSqrt works only with red numbers");
          this.red._verify1(this);
          return this.red.sqrt(this);
        };
        BN.prototype.redInvm = function redInvm() {
          assert(this.red, "redInvm works only with red numbers");
          this.red._verify1(this);
          return this.red.invm(this);
        };
        BN.prototype.redNeg = function redNeg() {
          assert(this.red, "redNeg works only with red numbers");
          this.red._verify1(this);
          return this.red.neg(this);
        };
        BN.prototype.redPow = function redPow(num) {
          assert(this.red && !num.red, "redPow(normalNum)");
          this.red._verify1(this);
          return this.red.pow(this, num);
        };
        var primes = {
          k256: null,
          p224: null,
          p192: null,
          p25519: null
        };
        function MPrime(name, p) {
          this.name = name;
          this.p = new BN(p, 16);
          this.n = this.p.bitLength();
          this.k = new BN(1).iushln(this.n).isub(this.p);
          this.tmp = this._tmp();
        }
        MPrime.prototype._tmp = function _tmp() {
          var tmp = new BN(null);
          tmp.words = new Array(Math.ceil(this.n / 13));
          return tmp;
        };
        MPrime.prototype.ireduce = function ireduce(num) {
          var r = num;
          var rlen;
          do {
            this.split(r, this.tmp);
            r = this.imulK(r);
            r = r.iadd(this.tmp);
            rlen = r.bitLength();
          } while (rlen > this.n);
          var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
          if (cmp === 0) {
            r.words[0] = 0;
            r.length = 1;
          } else if (cmp > 0) {
            r.isub(this.p);
          } else {
            if (r.strip !== void 0) {
              r.strip();
            } else {
              r._strip();
            }
          }
          return r;
        };
        MPrime.prototype.split = function split(input, out) {
          input.iushrn(this.n, 0, out);
        };
        MPrime.prototype.imulK = function imulK(num) {
          return num.imul(this.k);
        };
        function K256() {
          MPrime.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
        }
        inherits(K256, MPrime);
        K256.prototype.split = function split(input, output) {
          var mask = 4194303;
          var outLen = Math.min(input.length, 9);
          for (var i = 0; i < outLen; i++) {
            output.words[i] = input.words[i];
          }
          output.length = outLen;
          if (input.length <= 9) {
            input.words[0] = 0;
            input.length = 1;
            return;
          }
          var prev = input.words[9];
          output.words[output.length++] = prev & mask;
          for (i = 10; i < input.length; i++) {
            var next = input.words[i] | 0;
            input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
            prev = next;
          }
          prev >>>= 22;
          input.words[i - 10] = prev;
          if (prev === 0 && input.length > 10) {
            input.length -= 10;
          } else {
            input.length -= 9;
          }
        };
        K256.prototype.imulK = function imulK(num) {
          num.words[num.length] = 0;
          num.words[num.length + 1] = 0;
          num.length += 2;
          var lo = 0;
          for (var i = 0; i < num.length; i++) {
            var w = num.words[i] | 0;
            lo += w * 977;
            num.words[i] = lo & 67108863;
            lo = w * 64 + (lo / 67108864 | 0);
          }
          if (num.words[num.length - 1] === 0) {
            num.length--;
            if (num.words[num.length - 1] === 0) {
              num.length--;
            }
          }
          return num;
        };
        function P224() {
          MPrime.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
        }
        inherits(P224, MPrime);
        function P192() {
          MPrime.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
        }
        inherits(P192, MPrime);
        function P25519() {
          MPrime.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
        }
        inherits(P25519, MPrime);
        P25519.prototype.imulK = function imulK(num) {
          var carry = 0;
          for (var i = 0; i < num.length; i++) {
            var hi = (num.words[i] | 0) * 19 + carry;
            var lo = hi & 67108863;
            hi >>>= 26;
            num.words[i] = lo;
            carry = hi;
          }
          if (carry !== 0) {
            num.words[num.length++] = carry;
          }
          return num;
        };
        BN._prime = function prime(name) {
          if (primes[name])
            return primes[name];
          var prime2;
          if (name === "k256") {
            prime2 = new K256();
          } else if (name === "p224") {
            prime2 = new P224();
          } else if (name === "p192") {
            prime2 = new P192();
          } else if (name === "p25519") {
            prime2 = new P25519();
          } else {
            throw new Error("Unknown prime " + name);
          }
          primes[name] = prime2;
          return prime2;
        };
        function Red(m) {
          if (typeof m === "string") {
            var prime = BN._prime(m);
            this.m = prime.p;
            this.prime = prime;
          } else {
            assert(m.gtn(1), "modulus must be greater than 1");
            this.m = m;
            this.prime = null;
          }
        }
        Red.prototype._verify1 = function _verify1(a) {
          assert(a.negative === 0, "red works only with positives");
          assert(a.red, "red works only with red numbers");
        };
        Red.prototype._verify2 = function _verify2(a, b) {
          assert((a.negative | b.negative) === 0, "red works only with positives");
          assert(a.red && a.red === b.red, "red works only with red numbers");
        };
        Red.prototype.imod = function imod(a) {
          if (this.prime)
            return this.prime.ireduce(a)._forceRed(this);
          move(a, a.umod(this.m)._forceRed(this));
          return a;
        };
        Red.prototype.neg = function neg(a) {
          if (a.isZero()) {
            return a.clone();
          }
          return this.m.sub(a)._forceRed(this);
        };
        Red.prototype.add = function add(a, b) {
          this._verify2(a, b);
          var res = a.add(b);
          if (res.cmp(this.m) >= 0) {
            res.isub(this.m);
          }
          return res._forceRed(this);
        };
        Red.prototype.iadd = function iadd(a, b) {
          this._verify2(a, b);
          var res = a.iadd(b);
          if (res.cmp(this.m) >= 0) {
            res.isub(this.m);
          }
          return res;
        };
        Red.prototype.sub = function sub(a, b) {
          this._verify2(a, b);
          var res = a.sub(b);
          if (res.cmpn(0) < 0) {
            res.iadd(this.m);
          }
          return res._forceRed(this);
        };
        Red.prototype.isub = function isub(a, b) {
          this._verify2(a, b);
          var res = a.isub(b);
          if (res.cmpn(0) < 0) {
            res.iadd(this.m);
          }
          return res;
        };
        Red.prototype.shl = function shl(a, num) {
          this._verify1(a);
          return this.imod(a.ushln(num));
        };
        Red.prototype.imul = function imul(a, b) {
          this._verify2(a, b);
          return this.imod(a.imul(b));
        };
        Red.prototype.mul = function mul(a, b) {
          this._verify2(a, b);
          return this.imod(a.mul(b));
        };
        Red.prototype.isqr = function isqr(a) {
          return this.imul(a, a.clone());
        };
        Red.prototype.sqr = function sqr(a) {
          return this.mul(a, a);
        };
        Red.prototype.sqrt = function sqrt(a) {
          if (a.isZero())
            return a.clone();
          var mod3 = this.m.andln(3);
          assert(mod3 % 2 === 1);
          if (mod3 === 3) {
            var pow = this.m.add(new BN(1)).iushrn(2);
            return this.pow(a, pow);
          }
          var q = this.m.subn(1);
          var s = 0;
          while (!q.isZero() && q.andln(1) === 0) {
            s++;
            q.iushrn(1);
          }
          assert(!q.isZero());
          var one = new BN(1).toRed(this);
          var nOne = one.redNeg();
          var lpow = this.m.subn(1).iushrn(1);
          var z = this.m.bitLength();
          z = new BN(2 * z * z).toRed(this);
          while (this.pow(z, lpow).cmp(nOne) !== 0) {
            z.redIAdd(nOne);
          }
          var c = this.pow(z, q);
          var r = this.pow(a, q.addn(1).iushrn(1));
          var t = this.pow(a, q);
          var m = s;
          while (t.cmp(one) !== 0) {
            var tmp = t;
            for (var i = 0; tmp.cmp(one) !== 0; i++) {
              tmp = tmp.redSqr();
            }
            assert(i < m);
            var b = this.pow(c, new BN(1).iushln(m - i - 1));
            r = r.redMul(b);
            c = b.redSqr();
            t = t.redMul(c);
            m = i;
          }
          return r;
        };
        Red.prototype.invm = function invm(a) {
          var inv = a._invmp(this.m);
          if (inv.negative !== 0) {
            inv.negative = 0;
            return this.imod(inv).redNeg();
          } else {
            return this.imod(inv);
          }
        };
        Red.prototype.pow = function pow(a, num) {
          if (num.isZero())
            return new BN(1).toRed(this);
          if (num.cmpn(1) === 0)
            return a.clone();
          var windowSize = 4;
          var wnd = new Array(1 << windowSize);
          wnd[0] = new BN(1).toRed(this);
          wnd[1] = a;
          for (var i = 2; i < wnd.length; i++) {
            wnd[i] = this.mul(wnd[i - 1], a);
          }
          var res = wnd[0];
          var current = 0;
          var currentLen = 0;
          var start = num.bitLength() % 26;
          if (start === 0) {
            start = 26;
          }
          for (i = num.length - 1; i >= 0; i--) {
            var word = num.words[i];
            for (var j = start - 1; j >= 0; j--) {
              var bit = word >> j & 1;
              if (res !== wnd[0]) {
                res = this.sqr(res);
              }
              if (bit === 0 && current === 0) {
                currentLen = 0;
                continue;
              }
              current <<= 1;
              current |= bit;
              currentLen++;
              if (currentLen !== windowSize && (i !== 0 || j !== 0))
                continue;
              res = this.mul(res, wnd[current]);
              currentLen = 0;
              current = 0;
            }
            start = 26;
          }
          return res;
        };
        Red.prototype.convertTo = function convertTo(num) {
          var r = num.umod(this.m);
          return r === num ? r.clone() : r;
        };
        Red.prototype.convertFrom = function convertFrom(num) {
          var res = num.clone();
          res.red = null;
          return res;
        };
        BN.mont = function mont(num) {
          return new Mont(num);
        };
        function Mont(m) {
          Red.call(this, m);
          this.shift = this.m.bitLength();
          if (this.shift % 26 !== 0) {
            this.shift += 26 - this.shift % 26;
          }
          this.r = new BN(1).iushln(this.shift);
          this.r2 = this.imod(this.r.sqr());
          this.rinv = this.r._invmp(this.m);
          this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
          this.minv = this.minv.umod(this.r);
          this.minv = this.r.sub(this.minv);
        }
        inherits(Mont, Red);
        Mont.prototype.convertTo = function convertTo(num) {
          return this.imod(num.ushln(this.shift));
        };
        Mont.prototype.convertFrom = function convertFrom(num) {
          var r = this.imod(num.mul(this.rinv));
          r.red = null;
          return r;
        };
        Mont.prototype.imul = function imul(a, b) {
          if (a.isZero() || b.isZero()) {
            a.words[0] = 0;
            a.length = 1;
            return a;
          }
          var t = a.imul(b);
          var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
          var u = t.isub(c).iushrn(this.shift);
          var res = u;
          if (u.cmp(this.m) >= 0) {
            res = u.isub(this.m);
          } else if (u.cmpn(0) < 0) {
            res = u.iadd(this.m);
          }
          return res._forceRed(this);
        };
        Mont.prototype.mul = function mul(a, b) {
          if (a.isZero() || b.isZero())
            return new BN(0)._forceRed(this);
          var t = a.mul(b);
          var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
          var u = t.isub(c).iushrn(this.shift);
          var res = u;
          if (u.cmp(this.m) >= 0) {
            res = u.isub(this.m);
          } else if (u.cmpn(0) < 0) {
            res = u.iadd(this.m);
          }
          return res._forceRed(this);
        };
        Mont.prototype.invm = function invm(a) {
          var res = this.imod(a._invmp(this.m).mul(this.r2));
          return res._forceRed(this);
        };
      })(typeof module === "undefined" || module, exports);
    }
  });

  // node_modules/@polkadot/util/bn/bn.cjs
  var require_bn2 = __commonJS({
    "node_modules/@polkadot/util/bn/bn.cjs"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "BN", {
        enumerable: true,
        get: function() {
          return _bn.default;
        }
      });
      var _bn = _interopRequireDefault(require_bn());
    }
  });

  // node_modules/@polkadot/util/is/bn.cjs
  var require_bn3 = __commonJS({
    "node_modules/@polkadot/util/is/bn.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isBn = isBn;
      var _bn = require_bn2();
      function isBn(value) {
        return _bn.BN.isBN(value);
      }
    }
  });

  // node_modules/@polkadot/util/is/object.cjs
  var require_object = __commonJS({
    "node_modules/@polkadot/util/is/object.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isObject = isObject;
      function isObject(value) {
        return !!value && typeof value === "object";
      }
    }
  });

  // node_modules/@polkadot/util/is/helpers.cjs
  var require_helpers = __commonJS({
    "node_modules/@polkadot/util/is/helpers.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isOn = isOn;
      exports.isOnObject = isOnObject;
      var _function = require_function();
      var _object = require_object();
      function isOn() {
        for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
          fns[_key] = arguments[_key];
        }
        return (value) => ((0, _object.isObject)(value) || (0, _function.isFunction)(value)) && fns.every((f) => (0, _function.isFunction)(value[f]));
      }
      function isOnObject() {
        for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          fns[_key2] = arguments[_key2];
        }
        return (value) => (0, _object.isObject)(value) && fns.every((f) => (0, _function.isFunction)(value[f]));
      }
    }
  });

  // node_modules/@polkadot/util/is/toBigInt.cjs
  var require_toBigInt3 = __commonJS({
    "node_modules/@polkadot/util/is/toBigInt.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isToBigInt = void 0;
      var _helpers = require_helpers();
      var isToBigInt = (0, _helpers.isOn)("toBigInt");
      exports.isToBigInt = isToBigInt;
    }
  });

  // node_modules/@polkadot/util/is/toBn.cjs
  var require_toBn = __commonJS({
    "node_modules/@polkadot/util/is/toBn.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isToBn = void 0;
      var _helpers = require_helpers();
      var isToBn = (0, _helpers.isOn)("toBn");
      exports.isToBn = isToBn;
    }
  });

  // node_modules/@polkadot/util/bi/toBigInt.cjs
  var require_toBigInt4 = __commonJS({
    "node_modules/@polkadot/util/bi/toBigInt.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.nToBigInt = nToBigInt;
      var _xBigint = require_x_bigint();
      var _toBigInt = require_toBigInt2();
      var _bn = require_bn3();
      var _hex = require_hex();
      var _toBigInt2 = require_toBigInt3();
      var _toBn = require_toBn();
      function nToBigInt(value) {
        return typeof value === "bigint" ? value : !value ? (0, _xBigint.BigInt)(0) : (0, _hex.isHex)(value) ? (0, _toBigInt.hexToBigInt)(value.toString()) : (0, _bn.isBn)(value) ? (0, _xBigint.BigInt)(value.toString()) : (0, _toBigInt2.isToBigInt)(value) ? value.toBigInt() : (0, _toBn.isToBn)(value) ? (0, _xBigint.BigInt)(value.toBn().toString()) : (0, _xBigint.BigInt)(value);
      }
    }
  });

  // node_modules/@polkadot/util/bi/sqrt.cjs
  var require_sqrt = __commonJS({
    "node_modules/@polkadot/util/bi/sqrt.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.nSqrt = nSqrt;
      var _xBigint = require_x_bigint();
      var _assert = require_assert();
      var _consts = require_consts();
      var _toBigInt = require_toBigInt4();
      var _sqrt2pow53n = (0, _xBigint.BigInt)(94906265);
      function nSqrt(value) {
        const n = (0, _toBigInt.nToBigInt)(value);
        (0, _assert.assert)(n >= _consts._0n, "square root of negative numbers is not supported");
        if (n <= _consts._2pow53n) {
          return (0, _xBigint.BigInt)(Math.floor(Math.sqrt(Number(n))));
        }
        let x0 = _sqrt2pow53n;
        while (true) {
          const x1 = n / x0 + x0 >> _consts._1n;
          if (x0 === x1 || x0 === x1 - _consts._1n) {
            return x0;
          }
          x0 = x1;
        }
      }
    }
  });

  // node_modules/@polkadot/util/bi/min.cjs
  var require_min = __commonJS({
    "node_modules/@polkadot/util/bi/min.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.nMax = nMax;
      exports.nMin = nMin;
      var _assert = require_assert();
      function gt(a, b) {
        return a > b;
      }
      function lt(a, b) {
        return a < b;
      }
      function find(items, cmp) {
        (0, _assert.assert)(items.length >= 1, "Must provide one or more bigint arguments");
        let result = items[0];
        for (let i = 1; i < items.length; i++) {
          if (cmp(items[i], result)) {
            result = items[i];
          }
        }
        return result;
      }
      function nMax() {
        for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
          items[_key] = arguments[_key];
        }
        return find(items, gt);
      }
      function nMin() {
        for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          items[_key2] = arguments[_key2];
        }
        return find(items, lt);
      }
    }
  });

  // node_modules/@polkadot/util/has.cjs
  var require_has = __commonJS({
    "node_modules/@polkadot/util/has.cjs"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hasWasm = exports.hasProcess = exports.hasEsm = exports.hasDirname = exports.hasCjs = exports.hasBuffer = exports.hasBigInt = void 0;
      var _xBigint = require_x_bigint();
      var hasBigInt = typeof _xBigint.BigInt === "function" && typeof _xBigint.BigInt.asIntN === "function";
      exports.hasBigInt = hasBigInt;
      var hasBuffer = typeof Buffer !== "undefined";
      exports.hasBuffer = hasBuffer;
      var hasCjs = typeof __require === "function" && typeof module !== "undefined";
      exports.hasCjs = hasCjs;
      var hasDirname = typeof __dirname !== "undefined";
      exports.hasDirname = hasDirname;
      var hasEsm = !hasCjs;
      exports.hasEsm = hasEsm;
      var hasProcess = typeof process === "object";
      exports.hasProcess = hasProcess;
      var hasWasm = typeof WebAssembly !== "undefined";
      exports.hasWasm = hasWasm;
    }
  });

  // node_modules/@polkadot/util/is/buffer.cjs
  var require_buffer2 = __commonJS({
    "node_modules/@polkadot/util/is/buffer.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isBuffer = isBuffer;
      var _has = require_has();
      function isBuffer(value) {
        return _has.hasBuffer && Buffer.isBuffer(value);
      }
    }
  });

  // node_modules/@polkadot/util/is/u8a.cjs
  var require_u8a = __commonJS({
    "node_modules/@polkadot/util/is/u8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isU8a = isU8a;
      function isU8a(value) {
        return value instanceof Uint8Array;
      }
    }
  });

  // node_modules/@polkadot/util/string/toU8a.cjs
  var require_toU8a2 = __commonJS({
    "node_modules/@polkadot/util/string/toU8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.stringToU8a = stringToU8a;
      var _xTextencoder = require_browser2();
      var encoder = new _xTextencoder.TextEncoder();
      function stringToU8a(value) {
        return value ? encoder.encode(value.toString()) : new Uint8Array();
      }
    }
  });

  // node_modules/@polkadot/util/u8a/toU8a.cjs
  var require_toU8a3 = __commonJS({
    "node_modules/@polkadot/util/u8a/toU8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.u8aToU8a = u8aToU8a;
      var _toU8a = require_toU8a();
      var _buffer = require_buffer2();
      var _hex = require_hex();
      var _u8a = require_u8a();
      var _toU8a2 = require_toU8a2();
      function u8aToU8a(value) {
        return !value ? new Uint8Array() : Array.isArray(value) || (0, _buffer.isBuffer)(value) ? new Uint8Array(value) : (0, _u8a.isU8a)(value) ? value : (0, _hex.isHex)(value) ? (0, _toU8a.hexToU8a)(value) : (0, _toU8a2.stringToU8a)(value);
      }
    }
  });

  // node_modules/@polkadot/util/u8a/cmp.cjs
  var require_cmp = __commonJS({
    "node_modules/@polkadot/util/u8a/cmp.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.u8aCmp = u8aCmp;
      var _toU8a = require_toU8a3();
      function u8aCmp(a, b) {
        const u8aa = (0, _toU8a.u8aToU8a)(a);
        const u8ab = (0, _toU8a.u8aToU8a)(b);
        let i = 0;
        while (true) {
          const overA = i >= u8aa.length;
          const overB = i >= u8ab.length;
          if (overA && overB) {
            return 0;
          } else if (overA) {
            return -1;
          } else if (overB) {
            return 1;
          } else if (u8aa[i] !== u8ab[i]) {
            return u8aa[i] > u8ab[i] ? 1 : -1;
          }
          i++;
        }
      }
    }
  });

  // node_modules/@polkadot/util/u8a/concat.cjs
  var require_concat = __commonJS({
    "node_modules/@polkadot/util/u8a/concat.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.u8aConcat = u8aConcat;
      var _toU8a = require_toU8a3();
      function u8aConcat() {
        let length = 0;
        let offset = 0;
        const u8as = new Array(arguments.length);
        for (let i = 0; i < arguments.length; i++) {
          u8as[i] = (0, _toU8a.u8aToU8a)(i < 0 || arguments.length <= i ? void 0 : arguments[i]);
          length += u8as[i].length;
        }
        const result = new Uint8Array(length);
        for (let i = 0; i < u8as.length; i++) {
          result.set(u8as[i], offset);
          offset += u8as[i].length;
        }
        return result;
      }
    }
  });

  // node_modules/@polkadot/util/u8a/empty.cjs
  var require_empty = __commonJS({
    "node_modules/@polkadot/util/u8a/empty.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.u8aEmpty = u8aEmpty;
      function u8aEmpty(value) {
        for (let i = 0; i < value.length; i++) {
          if (value[i]) {
            return false;
          }
        }
        return true;
      }
    }
  });

  // node_modules/@polkadot/util/u8a/eq.cjs
  var require_eq = __commonJS({
    "node_modules/@polkadot/util/u8a/eq.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.u8aEq = u8aEq;
      var _toU8a = require_toU8a3();
      function u8aEq(a, b) {
        const u8aa = (0, _toU8a.u8aToU8a)(a);
        const u8ab = (0, _toU8a.u8aToU8a)(b);
        if (u8aa.length === u8ab.length) {
          const dvA = new DataView(u8aa.buffer, u8aa.byteOffset);
          const dvB = new DataView(u8ab.buffer, u8ab.byteOffset);
          const mod = u8aa.length % 4;
          const length = u8aa.length - mod;
          for (let i = 0; i < length; i += 4) {
            if (dvA.getUint32(i) !== dvB.getUint32(i)) {
              return false;
            }
          }
          for (let i = length; i < u8aa.length; i++) {
            if (u8aa[i] !== u8ab[i]) {
              return false;
            }
          }
          return true;
        }
        return false;
      }
    }
  });

  // node_modules/@polkadot/util/u8a/fixLength.cjs
  var require_fixLength = __commonJS({
    "node_modules/@polkadot/util/u8a/fixLength.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.u8aFixLength = u8aFixLength;
      function u8aFixLength(value) {
        let bitLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
        let atStart = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        const byteLength = Math.ceil(bitLength / 8);
        if (bitLength === -1 || value.length === byteLength) {
          return value;
        } else if (value.length > byteLength) {
          return value.subarray(0, byteLength);
        }
        const result = new Uint8Array(byteLength);
        result.set(value, atStart ? 0 : byteLength - value.length);
        return result;
      }
    }
  });

  // node_modules/@polkadot/util/u8a/sorted.cjs
  var require_sorted = __commonJS({
    "node_modules/@polkadot/util/u8a/sorted.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.u8aSorted = u8aSorted;
      var _cmp = require_cmp();
      function u8aSorted(u8as) {
        return u8as.sort(_cmp.u8aCmp);
      }
    }
  });

  // node_modules/@polkadot/util/is/boolean.cjs
  var require_boolean = __commonJS({
    "node_modules/@polkadot/util/is/boolean.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isBoolean = isBoolean;
      function isBoolean(value) {
        return typeof value === "boolean";
      }
    }
  });

  // node_modules/@polkadot/util/hex/toBn.cjs
  var require_toBn2 = __commonJS({
    "node_modules/@polkadot/util/hex/toBn.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hexToBn = hexToBn;
      var _bn = require_bn2();
      var _boolean = require_boolean();
      var _spread = require_spread();
      var _stripPrefix = require_stripPrefix();
      var DEFAULT_OPTS = {
        isLe: false,
        isNegative: false
      };
      function hexToBn(value) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_OPTS;
        if (!value || value === "0x") {
          return new _bn.BN(0);
        }
        const {
          isLe,
          isNegative
        } = (0, _spread.objectSpread)({
          isLe: false,
          isNegative: false
        }, (0, _boolean.isBoolean)(options) ? {
          isLe: options
        } : options);
        const stripped = (0, _stripPrefix.hexStripPrefix)(value);
        const bn = new _bn.BN(stripped, 16, isLe ? "le" : "be");
        return isNegative ? bn.fromTwos(stripped.length * 4) : bn;
      }
    }
  });

  // node_modules/@polkadot/util/u8a/toHex.cjs
  var require_toHex = __commonJS({
    "node_modules/@polkadot/util/u8a/toHex.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.u8aToHex = u8aToHex;
      var _alphabet = require_alphabet();
      function hex(value) {
        const mod = value.length % 2;
        const length = value.length - mod;
        const dv = new DataView(value.buffer, value.byteOffset);
        let result = "";
        for (let i = 0; i < length; i += 2) {
          result += _alphabet.U16_TO_HEX[dv.getUint16(i)];
        }
        if (mod) {
          result += _alphabet.U8_TO_HEX[dv.getUint8(length)];
        }
        return result;
      }
      function u8aToHex(value) {
        let bitLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
        let isPrefixed = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        const length = Math.ceil(bitLength / 8);
        return `${isPrefixed ? "0x" : ""}${!value || !value.length ? "" : length > 0 && value.length > length ? `${hex(value.subarray(0, length / 2))}\u2026${hex(value.subarray(value.length - length / 2))}` : hex(value)}`;
      }
    }
  });

  // node_modules/@polkadot/util/u8a/toBn.cjs
  var require_toBn3 = __commonJS({
    "node_modules/@polkadot/util/u8a/toBn.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.u8aToBn = u8aToBn;
      var _toBn = require_toBn2();
      var _toHex = require_toHex();
      var DEFAULT_OPTS = {
        isLe: true,
        isNegative: false
      };
      function u8aToBn(value) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_OPTS;
        return (0, _toBn.hexToBn)((0, _toHex.u8aToHex)(value), options);
      }
    }
  });

  // node_modules/@polkadot/util/u8a/toBuffer.cjs
  var require_toBuffer = __commonJS({
    "node_modules/@polkadot/util/u8a/toBuffer.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.u8aToBuffer = u8aToBuffer;
      function u8aToBuffer(value) {
        return Buffer.from(value || []);
      }
    }
  });

  // node_modules/@polkadot/util/u8a/toString.cjs
  var require_toString = __commonJS({
    "node_modules/@polkadot/util/u8a/toString.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.u8aToString = u8aToString;
      var _xTextdecoder = require_browser();
      var decoder = new _xTextdecoder.TextDecoder("utf-8");
      function u8aToString(value) {
        return !(value !== null && value !== void 0 && value.length) ? "" : decoder.decode(value);
      }
    }
  });

  // node_modules/@polkadot/util/u8a/wrap.cjs
  var require_wrap = __commonJS({
    "node_modules/@polkadot/util/u8a/wrap.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.U8A_WRAP_PREFIX = exports.U8A_WRAP_POSTFIX = exports.U8A_WRAP_ETHEREUM = void 0;
      exports.u8aIsWrapped = u8aIsWrapped;
      exports.u8aUnwrapBytes = u8aUnwrapBytes;
      exports.u8aWrapBytes = u8aWrapBytes;
      var _concat = require_concat();
      var _eq = require_eq();
      var _toU8a = require_toU8a3();
      var U8A_WRAP_ETHEREUM = (0, _toU8a.u8aToU8a)("Ethereum Signed Message:\n");
      exports.U8A_WRAP_ETHEREUM = U8A_WRAP_ETHEREUM;
      var U8A_WRAP_PREFIX = (0, _toU8a.u8aToU8a)("<Bytes>");
      exports.U8A_WRAP_PREFIX = U8A_WRAP_PREFIX;
      var U8A_WRAP_POSTFIX = (0, _toU8a.u8aToU8a)("</Bytes>");
      exports.U8A_WRAP_POSTFIX = U8A_WRAP_POSTFIX;
      var WRAP_LEN = U8A_WRAP_PREFIX.length + U8A_WRAP_POSTFIX.length;
      function u8aIsWrapped(u8a, withEthereum) {
        return u8a.length >= WRAP_LEN && (0, _eq.u8aEq)(u8a.subarray(0, U8A_WRAP_PREFIX.length), U8A_WRAP_PREFIX) && (0, _eq.u8aEq)(u8a.slice(-U8A_WRAP_POSTFIX.length), U8A_WRAP_POSTFIX) || withEthereum && u8a.length >= U8A_WRAP_ETHEREUM.length && (0, _eq.u8aEq)(u8a.subarray(0, U8A_WRAP_ETHEREUM.length), U8A_WRAP_ETHEREUM);
      }
      function u8aUnwrapBytes(bytes) {
        const u8a = (0, _toU8a.u8aToU8a)(bytes);
        return u8aIsWrapped(u8a, false) ? u8a.subarray(U8A_WRAP_PREFIX.length, u8a.length - U8A_WRAP_POSTFIX.length) : u8a;
      }
      function u8aWrapBytes(bytes) {
        const u8a = (0, _toU8a.u8aToU8a)(bytes);
        return u8aIsWrapped(u8a, true) ? u8a : (0, _concat.u8aConcat)(U8A_WRAP_PREFIX, u8a, U8A_WRAP_POSTFIX);
      }
    }
  });

  // node_modules/@polkadot/util/u8a/index.cjs
  var require_u8a2 = __commonJS({
    "node_modules/@polkadot/util/u8a/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "U8A_WRAP_ETHEREUM", {
        enumerable: true,
        get: function() {
          return _wrap.U8A_WRAP_ETHEREUM;
        }
      });
      Object.defineProperty(exports, "U8A_WRAP_POSTFIX", {
        enumerable: true,
        get: function() {
          return _wrap.U8A_WRAP_POSTFIX;
        }
      });
      Object.defineProperty(exports, "U8A_WRAP_PREFIX", {
        enumerable: true,
        get: function() {
          return _wrap.U8A_WRAP_PREFIX;
        }
      });
      Object.defineProperty(exports, "u8aCmp", {
        enumerable: true,
        get: function() {
          return _cmp.u8aCmp;
        }
      });
      Object.defineProperty(exports, "u8aConcat", {
        enumerable: true,
        get: function() {
          return _concat.u8aConcat;
        }
      });
      Object.defineProperty(exports, "u8aEmpty", {
        enumerable: true,
        get: function() {
          return _empty.u8aEmpty;
        }
      });
      Object.defineProperty(exports, "u8aEq", {
        enumerable: true,
        get: function() {
          return _eq.u8aEq;
        }
      });
      Object.defineProperty(exports, "u8aFixLength", {
        enumerable: true,
        get: function() {
          return _fixLength.u8aFixLength;
        }
      });
      Object.defineProperty(exports, "u8aIsWrapped", {
        enumerable: true,
        get: function() {
          return _wrap.u8aIsWrapped;
        }
      });
      Object.defineProperty(exports, "u8aSorted", {
        enumerable: true,
        get: function() {
          return _sorted.u8aSorted;
        }
      });
      Object.defineProperty(exports, "u8aToBigInt", {
        enumerable: true,
        get: function() {
          return _toBigInt.u8aToBigInt;
        }
      });
      Object.defineProperty(exports, "u8aToBn", {
        enumerable: true,
        get: function() {
          return _toBn.u8aToBn;
        }
      });
      Object.defineProperty(exports, "u8aToBuffer", {
        enumerable: true,
        get: function() {
          return _toBuffer.u8aToBuffer;
        }
      });
      Object.defineProperty(exports, "u8aToHex", {
        enumerable: true,
        get: function() {
          return _toHex.u8aToHex;
        }
      });
      Object.defineProperty(exports, "u8aToString", {
        enumerable: true,
        get: function() {
          return _toString.u8aToString;
        }
      });
      Object.defineProperty(exports, "u8aToU8a", {
        enumerable: true,
        get: function() {
          return _toU8a.u8aToU8a;
        }
      });
      Object.defineProperty(exports, "u8aUnwrapBytes", {
        enumerable: true,
        get: function() {
          return _wrap.u8aUnwrapBytes;
        }
      });
      Object.defineProperty(exports, "u8aWrapBytes", {
        enumerable: true,
        get: function() {
          return _wrap.u8aWrapBytes;
        }
      });
      var _cmp = require_cmp();
      var _concat = require_concat();
      var _empty = require_empty();
      var _eq = require_eq();
      var _fixLength = require_fixLength();
      var _sorted = require_sorted();
      var _toBigInt = require_toBigInt();
      var _toBn = require_toBn3();
      var _toBuffer = require_toBuffer();
      var _toHex = require_toHex();
      var _toString = require_toString();
      var _toU8a = require_toU8a3();
      var _wrap = require_wrap();
    }
  });

  // node_modules/@polkadot/util/bi/toU8a.cjs
  var require_toU8a4 = __commonJS({
    "node_modules/@polkadot/util/bi/toU8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.nToU8a = nToU8a;
      var _xBigint = require_x_bigint();
      var _spread = require_spread();
      var _consts = require_consts();
      var _toBigInt = require_toBigInt4();
      var DIV = (0, _xBigint.BigInt)(256);
      var NEG_MASK = (0, _xBigint.BigInt)(255);
      function createEmpty(_ref) {
        let {
          bitLength = 0
        } = _ref;
        return bitLength === -1 ? new Uint8Array() : new Uint8Array(Math.ceil(bitLength / 8));
      }
      function toU8a(value, _ref2) {
        let {
          isLe,
          isNegative
        } = _ref2;
        const arr = [];
        if (isNegative) {
          value = (value + _consts._1n) * -_consts._1n;
        }
        while (value !== _consts._0n) {
          const mod = value % DIV;
          const val = Number(isNegative ? mod ^ NEG_MASK : mod);
          if (isLe) {
            arr.push(val);
          } else {
            arr.unshift(val);
          }
          value = (value - mod) / DIV;
        }
        return Uint8Array.from(arr);
      }
      function nToU8a(value, options) {
        const opts = (0, _spread.objectSpread)({
          bitLength: -1,
          isLe: true,
          isNegative: false
        }, options);
        const valueBi = (0, _toBigInt.nToBigInt)(value);
        if (valueBi === _consts._0n) {
          return createEmpty(opts);
        }
        const u8a = toU8a(valueBi, opts);
        if (opts.bitLength === -1) {
          return u8a;
        }
        const byteLength = Math.ceil((opts.bitLength || 0) / 8);
        const output = new Uint8Array(byteLength);
        if (opts.isNegative) {
          output.fill(255);
        }
        output.set(u8a, opts.isLe ? 0 : byteLength - u8a.length);
        return output;
      }
    }
  });

  // node_modules/@polkadot/util/bi/toHex.cjs
  var require_toHex2 = __commonJS({
    "node_modules/@polkadot/util/bi/toHex.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.nToHex = nToHex;
      var _spread = require_spread();
      var _index = require_u8a2();
      var _toU8a = require_toU8a4();
      var ZERO_STR = "0x00";
      function nToHex(value, options) {
        return !value ? ZERO_STR : (0, _index.u8aToHex)((0, _toU8a.nToU8a)(value, (0, _spread.objectSpread)({
          isLe: false,
          isNegative: false
        }, options)));
      }
    }
  });

  // node_modules/@polkadot/util/bi/index.cjs
  var require_bi = __commonJS({
    "node_modules/@polkadot/util/bi/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _exportNames = {
        nSqrt: true,
        nToBigInt: true,
        nMax: true,
        nMin: true,
        nToHex: true,
        nToU8a: true
      };
      Object.defineProperty(exports, "nMax", {
        enumerable: true,
        get: function() {
          return _min.nMax;
        }
      });
      Object.defineProperty(exports, "nMin", {
        enumerable: true,
        get: function() {
          return _min.nMin;
        }
      });
      Object.defineProperty(exports, "nSqrt", {
        enumerable: true,
        get: function() {
          return _sqrt.nSqrt;
        }
      });
      Object.defineProperty(exports, "nToBigInt", {
        enumerable: true,
        get: function() {
          return _toBigInt.nToBigInt;
        }
      });
      Object.defineProperty(exports, "nToHex", {
        enumerable: true,
        get: function() {
          return _toHex.nToHex;
        }
      });
      Object.defineProperty(exports, "nToU8a", {
        enumerable: true,
        get: function() {
          return _toU8a.nToU8a;
        }
      });
      var _consts = require_consts();
      Object.keys(_consts).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _consts[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _consts[key];
          }
        });
      });
      var _sqrt = require_sqrt();
      var _toBigInt = require_toBigInt4();
      var _min = require_min();
      var _toHex = require_toHex2();
      var _toU8a = require_toU8a4();
    }
  });

  // node_modules/@polkadot/util/bn/consts.cjs
  var require_consts2 = __commonJS({
    "node_modules/@polkadot/util/bn/consts.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BN_ZERO = exports.BN_TWO = exports.BN_THREE = exports.BN_THOUSAND = exports.BN_TEN = exports.BN_SIX = exports.BN_SEVEN = exports.BN_QUINTILL = exports.BN_ONE = exports.BN_NINE = exports.BN_MILLION = exports.BN_MAX_INTEGER = exports.BN_HUNDRED = exports.BN_FOUR = exports.BN_FIVE = exports.BN_EIGHT = exports.BN_BILLION = void 0;
      var _bn = require_bn2();
      var BN_ZERO = new _bn.BN(0);
      exports.BN_ZERO = BN_ZERO;
      var BN_ONE = new _bn.BN(1);
      exports.BN_ONE = BN_ONE;
      var BN_TWO = new _bn.BN(2);
      exports.BN_TWO = BN_TWO;
      var BN_THREE = new _bn.BN(3);
      exports.BN_THREE = BN_THREE;
      var BN_FOUR = new _bn.BN(4);
      exports.BN_FOUR = BN_FOUR;
      var BN_FIVE = new _bn.BN(5);
      exports.BN_FIVE = BN_FIVE;
      var BN_SIX = new _bn.BN(6);
      exports.BN_SIX = BN_SIX;
      var BN_SEVEN = new _bn.BN(7);
      exports.BN_SEVEN = BN_SEVEN;
      var BN_EIGHT = new _bn.BN(8);
      exports.BN_EIGHT = BN_EIGHT;
      var BN_NINE = new _bn.BN(9);
      exports.BN_NINE = BN_NINE;
      var BN_TEN = new _bn.BN(10);
      exports.BN_TEN = BN_TEN;
      var BN_HUNDRED = new _bn.BN(100);
      exports.BN_HUNDRED = BN_HUNDRED;
      var BN_THOUSAND = new _bn.BN(1e3);
      exports.BN_THOUSAND = BN_THOUSAND;
      var BN_MILLION = new _bn.BN(1e6);
      exports.BN_MILLION = BN_MILLION;
      var BN_BILLION = new _bn.BN(1e9);
      exports.BN_BILLION = BN_BILLION;
      var BN_QUINTILL = BN_BILLION.mul(BN_BILLION);
      exports.BN_QUINTILL = BN_QUINTILL;
      var BN_MAX_INTEGER = new _bn.BN(Number.MAX_SAFE_INTEGER);
      exports.BN_MAX_INTEGER = BN_MAX_INTEGER;
    }
  });

  // node_modules/@polkadot/util/bn/fromHex.cjs
  var require_fromHex = __commonJS({
    "node_modules/@polkadot/util/bn/fromHex.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "bnFromHex", {
        enumerable: true,
        get: function() {
          return _toBn.hexToBn;
        }
      });
      var _toBn = require_toBn2();
    }
  });

  // node_modules/@polkadot/util/bn/min.cjs
  var require_min2 = __commonJS({
    "node_modules/@polkadot/util/bn/min.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.bnMax = bnMax;
      exports.bnMin = bnMin;
      exports.find = find;
      var _assert = require_assert();
      var _bn = require_bn2();
      function find(items, cmp) {
        (0, _assert.assert)(items.length >= 1, "Must provide one or more BN arguments");
        let result = items[0];
        for (let i = 1; i < items.length; i++) {
          result = cmp(result, items[i]);
        }
        return result;
      }
      function bnMax() {
        for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
          items[_key] = arguments[_key];
        }
        return find(items, _bn.BN.max);
      }
      function bnMin() {
        for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          items[_key2] = arguments[_key2];
        }
        return find(items, _bn.BN.min);
      }
    }
  });

  // node_modules/@polkadot/util/is/bigInt.cjs
  var require_bigInt = __commonJS({
    "node_modules/@polkadot/util/is/bigInt.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isBigInt = isBigInt;
      function isBigInt(value) {
        return typeof value === "bigint";
      }
    }
  });

  // node_modules/@polkadot/util/bn/toBn.cjs
  var require_toBn4 = __commonJS({
    "node_modules/@polkadot/util/bn/toBn.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.bnToBn = bnToBn;
      var _toBn = require_toBn2();
      var _bigInt = require_bigInt();
      var _hex = require_hex();
      var _toBigInt = require_toBigInt3();
      var _toBn2 = require_toBn();
      var _bn = require_bn2();
      function bnToBn(value) {
        return _bn.BN.isBN(value) ? value : !value ? new _bn.BN(0) : (0, _hex.isHex)(value) ? (0, _toBn.hexToBn)(value.toString()) : (0, _bigInt.isBigInt)(value) ? new _bn.BN(value.toString()) : (0, _toBn2.isToBn)(value) ? value.toBn() : (0, _toBigInt.isToBigInt)(value) ? new _bn.BN(value.toBigInt().toString()) : new _bn.BN(value);
      }
    }
  });

  // node_modules/@polkadot/util/bn/sqrt.cjs
  var require_sqrt2 = __commonJS({
    "node_modules/@polkadot/util/bn/sqrt.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.bnSqrt = bnSqrt;
      var _assert = require_assert();
      var _bn = require_bn2();
      var _consts = require_consts2();
      var _toBn = require_toBn4();
      var SQRT_MAX_SAFE_INTEGER = new _bn.BN(94906265);
      function bnSqrt(value) {
        const n = (0, _toBn.bnToBn)(value);
        (0, _assert.assert)(n.gte(_consts.BN_ZERO), "square root of negative numbers is not supported");
        if (n.lte(_consts.BN_MAX_INTEGER)) {
          return new _bn.BN(Math.floor(Math.sqrt(n.toNumber())));
        }
        let x0 = SQRT_MAX_SAFE_INTEGER.clone();
        while (true) {
          const x1 = n.div(x0).iadd(x0).ishrn(1);
          if (x0.eq(x1) || x0.eq(x1.sub(_consts.BN_ONE))) {
            return x0;
          }
          x0 = x1;
        }
      }
    }
  });

  // node_modules/@polkadot/util/is/number.cjs
  var require_number = __commonJS({
    "node_modules/@polkadot/util/is/number.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isNumber = isNumber;
      function isNumber(value) {
        return typeof value === "number";
      }
    }
  });

  // node_modules/@polkadot/util/bn/toU8a.cjs
  var require_toU8a5 = __commonJS({
    "node_modules/@polkadot/util/bn/toU8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.bnToU8a = bnToU8a;
      var _number = require_number();
      var _spread = require_spread();
      var _toBn = require_toBn4();
      var DEFAULT_OPTS = {
        bitLength: -1,
        isLe: true,
        isNegative: false
      };
      function createEmpty(byteLength, options) {
        return options.bitLength === -1 ? new Uint8Array() : new Uint8Array(byteLength);
      }
      function createValue(valueBn, byteLength, _ref) {
        let {
          isLe,
          isNegative
        } = _ref;
        const output = new Uint8Array(byteLength);
        const bn = isNegative ? valueBn.toTwos(byteLength * 8) : valueBn;
        output.set(bn.toArray(isLe ? "le" : "be", byteLength), 0);
        return output;
      }
      function bnToU8a(value) {
        let arg1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_OPTS;
        let arg2 = arguments.length > 2 ? arguments[2] : void 0;
        const options = (0, _spread.objectSpread)({
          bitLength: -1,
          isLe: true,
          isNegative: false
        }, (0, _number.isNumber)(arg1) ? {
          bitLength: arg1,
          isLe: arg2
        } : arg1);
        const valueBn = (0, _toBn.bnToBn)(value);
        const byteLength = options.bitLength === -1 ? Math.ceil(valueBn.bitLength() / 8) : Math.ceil((options.bitLength || 0) / 8);
        return value ? createValue(valueBn, byteLength, options) : createEmpty(byteLength, options);
      }
    }
  });

  // node_modules/@polkadot/util/bn/toHex.cjs
  var require_toHex3 = __commonJS({
    "node_modules/@polkadot/util/bn/toHex.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.bnToHex = bnToHex;
      var _number = require_number();
      var _spread = require_spread();
      var _index = require_u8a2();
      var _toU8a = require_toU8a5();
      var ZERO_STR = "0x00";
      var DEFAULT_OPTS = {
        bitLength: -1,
        isLe: false,
        isNegative: false
      };
      function bnToHex(value) {
        let arg1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_OPTS;
        let arg2 = arguments.length > 2 ? arguments[2] : void 0;
        return !value ? ZERO_STR : (0, _index.u8aToHex)((0, _toU8a.bnToU8a)(value, (0, _spread.objectSpread)({
          isLe: false,
          isNegative: false
        }, (0, _number.isNumber)(arg1) ? {
          bitLength: arg1,
          isLe: arg2
        } : arg1)));
      }
    }
  });

  // node_modules/@polkadot/util/bn/index.cjs
  var require_bn4 = __commonJS({
    "node_modules/@polkadot/util/bn/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _exportNames = {
        BN: true,
        bnFromHex: true,
        bnMax: true,
        bnMin: true,
        bnSqrt: true,
        bnToBn: true,
        bnToHex: true,
        bnToU8a: true
      };
      Object.defineProperty(exports, "BN", {
        enumerable: true,
        get: function() {
          return _bn.BN;
        }
      });
      Object.defineProperty(exports, "bnFromHex", {
        enumerable: true,
        get: function() {
          return _fromHex.bnFromHex;
        }
      });
      Object.defineProperty(exports, "bnMax", {
        enumerable: true,
        get: function() {
          return _min.bnMax;
        }
      });
      Object.defineProperty(exports, "bnMin", {
        enumerable: true,
        get: function() {
          return _min.bnMin;
        }
      });
      Object.defineProperty(exports, "bnSqrt", {
        enumerable: true,
        get: function() {
          return _sqrt.bnSqrt;
        }
      });
      Object.defineProperty(exports, "bnToBn", {
        enumerable: true,
        get: function() {
          return _toBn.bnToBn;
        }
      });
      Object.defineProperty(exports, "bnToHex", {
        enumerable: true,
        get: function() {
          return _toHex.bnToHex;
        }
      });
      Object.defineProperty(exports, "bnToU8a", {
        enumerable: true,
        get: function() {
          return _toU8a.bnToU8a;
        }
      });
      var _consts = require_consts2();
      Object.keys(_consts).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _consts[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _consts[key];
          }
        });
      });
      var _bn = require_bn2();
      var _fromHex = require_fromHex();
      var _min = require_min2();
      var _sqrt = require_sqrt2();
      var _toBn = require_toBn4();
      var _toHex = require_toHex3();
      var _toU8a = require_toU8a5();
    }
  });

  // node_modules/@polkadot/util/buffer/toU8a.cjs
  var require_toU8a6 = __commonJS({
    "node_modules/@polkadot/util/buffer/toU8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.bufferToU8a = bufferToU8a;
      function bufferToU8a(buffer) {
        return new Uint8Array(buffer || []);
      }
    }
  });

  // node_modules/@polkadot/util/buffer/index.cjs
  var require_buffer3 = __commonJS({
    "node_modules/@polkadot/util/buffer/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "bufferToU8a", {
        enumerable: true,
        get: function() {
          return _toU8a.bufferToU8a;
        }
      });
      var _toU8a = require_toU8a6();
    }
  });

  // node_modules/@polkadot/util/compact/toU8a.cjs
  var require_toU8a7 = __commonJS({
    "node_modules/@polkadot/util/compact/toU8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.compactToU8a = compactToU8a;
      var _assert = require_assert();
      var _index = require_bn4();
      var _index2 = require_u8a2();
      var MAX_U8 = _index.BN_TWO.pow(new _index.BN(8 - 2)).isub(_index.BN_ONE);
      var MAX_U16 = _index.BN_TWO.pow(new _index.BN(16 - 2)).isub(_index.BN_ONE);
      var MAX_U32 = _index.BN_TWO.pow(new _index.BN(32 - 2)).isub(_index.BN_ONE);
      function compactToU8a(value) {
        const bn = (0, _index.bnToBn)(value);
        if (bn.lte(MAX_U8)) {
          return new Uint8Array([bn.toNumber() << 2]);
        } else if (bn.lte(MAX_U16)) {
          return (0, _index.bnToU8a)(bn.shln(2).iadd(_index.BN_ONE), 16, true);
        } else if (bn.lte(MAX_U32)) {
          return (0, _index.bnToU8a)(bn.shln(2).iadd(_index.BN_TWO), 32, true);
        }
        const u8a = (0, _index.bnToU8a)(bn);
        let length = u8a.length;
        while (u8a[length - 1] === 0) {
          length--;
        }
        (0, _assert.assert)(length >= 4, "Invalid length, previous checks match anything less than 2^30");
        return (0, _index2.u8aConcat)([(length - 4 << 2) + 3], u8a.subarray(0, length));
      }
    }
  });

  // node_modules/@polkadot/util/compact/addLength.cjs
  var require_addLength = __commonJS({
    "node_modules/@polkadot/util/compact/addLength.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.compactAddLength = compactAddLength;
      var _index = require_u8a2();
      var _toU8a = require_toU8a7();
      function compactAddLength(input) {
        return (0, _index.u8aConcat)((0, _toU8a.compactToU8a)(input.length), input);
      }
    }
  });

  // node_modules/@polkadot/util/compact/fromU8a.cjs
  var require_fromU8a = __commonJS({
    "node_modules/@polkadot/util/compact/fromU8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.compactFromU8a = compactFromU8a;
      var _index = require_bn4();
      var _index2 = require_u8a2();
      function compactFromU8a(input) {
        const u8a = (0, _index2.u8aToU8a)(input);
        const flag = u8a[0] & 3;
        if (flag === 0) {
          return [1, new _index.BN(u8a[0]).ishrn(2)];
        } else if (flag === 1) {
          return [2, (0, _index2.u8aToBn)(u8a.subarray(0, 2), true).ishrn(2)];
        } else if (flag === 2) {
          return [4, (0, _index2.u8aToBn)(u8a.subarray(0, 4), true).ishrn(2)];
        }
        const offset = 1 + new _index.BN(u8a[0]).ishrn(2).iadd(_index.BN_FOUR).toNumber();
        return [offset, (0, _index2.u8aToBn)(u8a.subarray(1, offset), true)];
      }
    }
  });

  // node_modules/@polkadot/util/compact/stripLength.cjs
  var require_stripLength = __commonJS({
    "node_modules/@polkadot/util/compact/stripLength.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.compactStripLength = compactStripLength;
      var _fromU8a = require_fromU8a();
      function compactStripLength(input) {
        const [offset, length] = (0, _fromU8a.compactFromU8a)(input);
        const total = offset + length.toNumber();
        return [total, input.subarray(offset, total)];
      }
    }
  });

  // node_modules/@polkadot/util/compact/index.cjs
  var require_compact = __commonJS({
    "node_modules/@polkadot/util/compact/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "compactAddLength", {
        enumerable: true,
        get: function() {
          return _addLength.compactAddLength;
        }
      });
      Object.defineProperty(exports, "compactFromU8a", {
        enumerable: true,
        get: function() {
          return _fromU8a.compactFromU8a;
        }
      });
      Object.defineProperty(exports, "compactStripLength", {
        enumerable: true,
        get: function() {
          return _stripLength.compactStripLength;
        }
      });
      Object.defineProperty(exports, "compactToU8a", {
        enumerable: true,
        get: function() {
          return _toU8a.compactToU8a;
        }
      });
      var _addLength = require_addLength();
      var _stripLength = require_stripLength();
      var _fromU8a = require_fromU8a();
      var _toU8a = require_toU8a7();
    }
  });

  // node_modules/@polkadot/util/extractTime.cjs
  var require_extractTime = __commonJS({
    "node_modules/@polkadot/util/extractTime.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.extractTime = extractTime;
      var _spread = require_spread();
      var HRS = 60 * 60;
      var DAY = HRS * 24;
      var ZERO = {
        days: 0,
        hours: 0,
        milliseconds: 0,
        minutes: 0,
        seconds: 0
      };
      function addTime(a, b) {
        return {
          days: a.days + b.days,
          hours: a.hours + b.hours,
          milliseconds: a.milliseconds + b.milliseconds,
          minutes: a.minutes + b.minutes,
          seconds: a.seconds + b.seconds
        };
      }
      function extractDays(milliseconds, hrs) {
        const days = Math.floor(hrs / 24);
        return addTime((0, _spread.objectSpread)({}, ZERO, {
          days
        }), extractTime(milliseconds - days * DAY * 1e3));
      }
      function extractHrs(milliseconds, mins) {
        const hrs = mins / 60;
        if (hrs < 24) {
          const hours = Math.floor(hrs);
          return addTime((0, _spread.objectSpread)({}, ZERO, {
            hours
          }), extractTime(milliseconds - hours * HRS * 1e3));
        }
        return extractDays(milliseconds, hrs);
      }
      function extractMins(milliseconds, secs) {
        const mins = secs / 60;
        if (mins < 60) {
          const minutes = Math.floor(mins);
          return addTime((0, _spread.objectSpread)({}, ZERO, {
            minutes
          }), extractTime(milliseconds - minutes * 60 * 1e3));
        }
        return extractHrs(milliseconds, mins);
      }
      function extractSecs(milliseconds) {
        const secs = milliseconds / 1e3;
        if (secs < 60) {
          const seconds = Math.floor(secs);
          return addTime((0, _spread.objectSpread)({}, ZERO, {
            seconds
          }), extractTime(milliseconds - seconds * 1e3));
        }
        return extractMins(milliseconds, secs);
      }
      function extractTime(milliseconds) {
        return !milliseconds ? ZERO : milliseconds < 1e3 ? (0, _spread.objectSpread)({}, ZERO, {
          milliseconds
        }) : extractSecs(milliseconds);
      }
    }
  });

  // node_modules/@polkadot/util/format/formatDecimal.cjs
  var require_formatDecimal = __commonJS({
    "node_modules/@polkadot/util/format/formatDecimal.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.formatDecimal = formatDecimal;
      var NUMBER_REGEX = new RegExp("(\\d+?)(?=(\\d{3})+(?!\\d)|$)", "g");
      function formatDecimal(value) {
        const isNegative = value[0].startsWith("-");
        const matched = isNegative ? value.substr(1).match(NUMBER_REGEX) : value.match(NUMBER_REGEX);
        return matched ? `${isNegative ? "-" : ""}${matched.join(",")}` : value;
      }
    }
  });

  // node_modules/@polkadot/util/format/si.cjs
  var require_si = __commonJS({
    "node_modules/@polkadot/util/format/si.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SI_MID = exports.SI = void 0;
      exports.calcSi = calcSi;
      exports.findSi = findSi;
      var SI_MID = 8;
      exports.SI_MID = SI_MID;
      var SI = [
        {
          power: -24,
          text: "yocto",
          value: "y"
        },
        {
          power: -21,
          text: "zepto",
          value: "z"
        },
        {
          power: -18,
          text: "atto",
          value: "a"
        },
        {
          power: -15,
          text: "femto",
          value: "f"
        },
        {
          power: -12,
          text: "pico",
          value: "p"
        },
        {
          power: -9,
          text: "nano",
          value: "n"
        },
        {
          power: -6,
          text: "micro",
          value: "\xB5"
        },
        {
          power: -3,
          text: "milli",
          value: "m"
        },
        {
          power: 0,
          text: "Unit",
          value: "-"
        },
        {
          power: 3,
          text: "Kilo",
          value: "k"
        },
        {
          power: 6,
          text: "Mill",
          value: "M"
        },
        {
          power: 9,
          text: "Bill",
          value: "B"
        },
        {
          power: 12,
          text: "Tril",
          value: "T"
        },
        {
          power: 15,
          text: "Peta",
          value: "P"
        },
        {
          power: 18,
          text: "Exa",
          value: "E"
        },
        {
          power: 21,
          text: "Zeta",
          value: "Z"
        },
        {
          power: 24,
          text: "Yotta",
          value: "Y"
        }
      ];
      exports.SI = SI;
      function findSi(type) {
        for (let i = 0; i < SI.length; i++) {
          if (SI[i].value === type) {
            return SI[i];
          }
        }
        return SI[SI_MID];
      }
      function calcSi(text, decimals, forceUnit) {
        if (forceUnit) {
          return findSi(forceUnit);
        }
        const siDefIndex = SI_MID - 1 + Math.ceil((text.length - decimals) / 3);
        return SI[siDefIndex] || SI[siDefIndex < 0 ? 0 : SI.length - 1];
      }
    }
  });

  // node_modules/@polkadot/util/format/formatBalance.cjs
  var require_formatBalance = __commonJS({
    "node_modules/@polkadot/util/format/formatBalance.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.formatBalance = void 0;
      var _toBn = require_toBn4();
      var _boolean = require_boolean();
      var _undefined = require_undefined();
      var _formatDecimal = require_formatDecimal();
      var _si = require_si();
      var DEFAULT_DECIMALS = 0;
      var DEFAULT_UNIT = _si.SI[_si.SI_MID].text;
      var defaultDecimals = DEFAULT_DECIMALS;
      var defaultUnit = DEFAULT_UNIT;
      function getUnits(si, withSi, withSiFull, withUnit) {
        const unit = (0, _boolean.isBoolean)(withUnit) ? _si.SI[_si.SI_MID].text : withUnit;
        return withSi || withSiFull ? si.value === "-" ? withUnit ? ` ${unit}` : "" : ` ${withSiFull ? `${si.text}${withUnit ? " " : ""}` : si.value}${withUnit ? unit : ""}` : "";
      }
      function getPrePost(text, decimals, forceUnit) {
        const si = (0, _si.calcSi)(text, decimals, forceUnit);
        const mid = text.length - (decimals + si.power);
        const prefix = text.substring(0, mid);
        const padding = mid < 0 ? 0 - mid : 0;
        const postfix = `${`${new Array(padding + 1).join("0")}${text}`.substring(mid < 0 ? 0 : mid)}0000`.substring(0, 4);
        return [si, prefix || "0", postfix];
      }
      function _formatBalance(input) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        let optDecimals = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultDecimals;
        let text = (0, _toBn.bnToBn)(input).toString();
        if (text.length === 0 || text === "0") {
          return "0";
        }
        const {
          decimals = optDecimals,
          forceUnit = void 0,
          withSi = true,
          withSiFull = false,
          withUnit = true
        } = (0, _boolean.isBoolean)(options) ? {
          withSi: options
        } : options;
        let sign = "";
        if (text[0].startsWith("-")) {
          sign = "-";
          text = text.substring(1);
        }
        const [si, prefix, postfix] = getPrePost(text, decimals, forceUnit);
        const units = getUnits(si, withSi, withSiFull, withUnit);
        return `${sign}${(0, _formatDecimal.formatDecimal)(prefix)}.${postfix}${units}`;
      }
      var formatBalance = _formatBalance;
      exports.formatBalance = formatBalance;
      formatBalance.calcSi = function(text) {
        let decimals = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultDecimals;
        return (0, _si.calcSi)(text, decimals);
      };
      formatBalance.findSi = _si.findSi;
      formatBalance.getDefaults = () => {
        return {
          decimals: defaultDecimals,
          unit: defaultUnit
        };
      };
      formatBalance.getOptions = function() {
        let decimals = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultDecimals;
        return _si.SI.filter((_ref) => {
          let {
            power
          } = _ref;
          return power < 0 ? decimals + power >= 0 : true;
        });
      };
      formatBalance.setDefaults = (_ref2) => {
        let {
          decimals,
          unit
        } = _ref2;
        defaultDecimals = (0, _undefined.isUndefined)(decimals) ? defaultDecimals : Array.isArray(decimals) ? decimals[0] : decimals;
        defaultUnit = (0, _undefined.isUndefined)(unit) ? defaultUnit : Array.isArray(unit) ? unit[0] : unit;
        _si.SI[_si.SI_MID].text = defaultUnit;
      };
    }
  });

  // node_modules/@polkadot/util/format/formatDate.cjs
  var require_formatDate = __commonJS({
    "node_modules/@polkadot/util/format/formatDate.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.formatDate = formatDate;
      function zeroPad(value) {
        return value.toString().padStart(2, "0");
      }
      function formatDate(date) {
        const year = date.getFullYear().toString();
        const month = zeroPad(date.getMonth() + 1);
        const day = zeroPad(date.getDate());
        const hour = zeroPad(date.getHours());
        const minute = zeroPad(date.getMinutes());
        const second = zeroPad(date.getSeconds());
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
      }
    }
  });

  // node_modules/@polkadot/util/format/formatElapsed.cjs
  var require_formatElapsed = __commonJS({
    "node_modules/@polkadot/util/format/formatElapsed.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.formatElapsed = formatElapsed;
      var _toBn = require_toBn4();
      function formatValue(elapsed) {
        if (elapsed < 15) {
          return `${elapsed.toFixed(1)}s`;
        } else if (elapsed < 60) {
          return `${elapsed | 0}s`;
        } else if (elapsed < 3600) {
          return `${elapsed / 60 | 0}m`;
        }
        return `${elapsed / 3600 | 0}h`;
      }
      function formatElapsed(now, value) {
        const tsNow = now && now.getTime() || 0;
        const tsValue = value instanceof Date ? value.getTime() : (0, _toBn.bnToBn)(value).toNumber();
        return tsNow && tsValue ? formatValue(Math.max(Math.abs(tsNow - tsValue), 0) / 1e3) : "0.0s";
      }
    }
  });

  // node_modules/@polkadot/util/format/formatNumber.cjs
  var require_formatNumber = __commonJS({
    "node_modules/@polkadot/util/format/formatNumber.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.formatNumber = formatNumber;
      var _toBn = require_toBn4();
      var _formatDecimal = require_formatDecimal();
      function formatNumber(value) {
        return (0, _formatDecimal.formatDecimal)((0, _toBn.bnToBn)(value).toString());
      }
    }
  });

  // node_modules/@polkadot/util/format/index.cjs
  var require_format = __commonJS({
    "node_modules/@polkadot/util/format/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "calcSi", {
        enumerable: true,
        get: function() {
          return _si.calcSi;
        }
      });
      Object.defineProperty(exports, "findSi", {
        enumerable: true,
        get: function() {
          return _si.findSi;
        }
      });
      Object.defineProperty(exports, "formatBalance", {
        enumerable: true,
        get: function() {
          return _formatBalance.formatBalance;
        }
      });
      Object.defineProperty(exports, "formatDate", {
        enumerable: true,
        get: function() {
          return _formatDate.formatDate;
        }
      });
      Object.defineProperty(exports, "formatDecimal", {
        enumerable: true,
        get: function() {
          return _formatDecimal.formatDecimal;
        }
      });
      Object.defineProperty(exports, "formatElapsed", {
        enumerable: true,
        get: function() {
          return _formatElapsed.formatElapsed;
        }
      });
      Object.defineProperty(exports, "formatNumber", {
        enumerable: true,
        get: function() {
          return _formatNumber.formatNumber;
        }
      });
      var _formatBalance = require_formatBalance();
      var _formatDate = require_formatDate();
      var _formatDecimal = require_formatDecimal();
      var _formatElapsed = require_formatElapsed();
      var _formatNumber = require_formatNumber();
      var _si = require_si();
    }
  });

  // node_modules/@polkadot/util/hex/hasPrefix.cjs
  var require_hasPrefix = __commonJS({
    "node_modules/@polkadot/util/hex/hasPrefix.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hexHasPrefix = hexHasPrefix;
      var _hex = require_hex();
      function hexHasPrefix(value) {
        return !!value && (0, _hex.isHex)(value, -1);
      }
    }
  });

  // node_modules/@polkadot/util/hex/addPrefix.cjs
  var require_addPrefix = __commonJS({
    "node_modules/@polkadot/util/hex/addPrefix.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hexAddPrefix = hexAddPrefix;
      var _hasPrefix = require_hasPrefix();
      function hexAddPrefix(value) {
        return value && (0, _hasPrefix.hexHasPrefix)(value) ? value : `0x${value && value.length % 2 === 1 ? "0" : ""}${value || ""}`;
      }
    }
  });

  // node_modules/@polkadot/util/hex/fixLength.cjs
  var require_fixLength2 = __commonJS({
    "node_modules/@polkadot/util/hex/fixLength.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hexFixLength = hexFixLength;
      var _addPrefix = require_addPrefix();
      var _stripPrefix = require_stripPrefix();
      function hexFixLength(value) {
        let bitLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
        let withPadding = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        const strLength = Math.ceil(bitLength / 4);
        const hexLength = strLength + 2;
        return (0, _addPrefix.hexAddPrefix)(bitLength === -1 || value.length === hexLength || !withPadding && value.length < hexLength ? (0, _stripPrefix.hexStripPrefix)(value) : value.length > hexLength ? (0, _stripPrefix.hexStripPrefix)(value).slice(-1 * strLength) : `${"0".repeat(strLength)}${(0, _stripPrefix.hexStripPrefix)(value)}`.slice(-1 * strLength));
      }
    }
  });

  // node_modules/@polkadot/util/hex/toNumber.cjs
  var require_toNumber = __commonJS({
    "node_modules/@polkadot/util/hex/toNumber.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hexToNumber = hexToNumber;
      var _toBn = require_toBn2();
      function hexToNumber(value) {
        return value ? (0, _toBn.hexToBn)(value).toNumber() : NaN;
      }
    }
  });

  // node_modules/@polkadot/util/hex/toString.cjs
  var require_toString2 = __commonJS({
    "node_modules/@polkadot/util/hex/toString.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hexToString = hexToString;
      var _toString = require_toString();
      var _toU8a = require_toU8a();
      function hexToString(_value) {
        return (0, _toString.u8aToString)((0, _toU8a.hexToU8a)(_value));
      }
    }
  });

  // node_modules/@polkadot/util/hex/index.cjs
  var require_hex2 = __commonJS({
    "node_modules/@polkadot/util/hex/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "hexAddPrefix", {
        enumerable: true,
        get: function() {
          return _addPrefix.hexAddPrefix;
        }
      });
      Object.defineProperty(exports, "hexFixLength", {
        enumerable: true,
        get: function() {
          return _fixLength.hexFixLength;
        }
      });
      Object.defineProperty(exports, "hexHasPrefix", {
        enumerable: true,
        get: function() {
          return _hasPrefix.hexHasPrefix;
        }
      });
      Object.defineProperty(exports, "hexStripPrefix", {
        enumerable: true,
        get: function() {
          return _stripPrefix.hexStripPrefix;
        }
      });
      Object.defineProperty(exports, "hexToBigInt", {
        enumerable: true,
        get: function() {
          return _toBigInt.hexToBigInt;
        }
      });
      Object.defineProperty(exports, "hexToBn", {
        enumerable: true,
        get: function() {
          return _toBn.hexToBn;
        }
      });
      Object.defineProperty(exports, "hexToNumber", {
        enumerable: true,
        get: function() {
          return _toNumber.hexToNumber;
        }
      });
      Object.defineProperty(exports, "hexToString", {
        enumerable: true,
        get: function() {
          return _toString.hexToString;
        }
      });
      Object.defineProperty(exports, "hexToU8a", {
        enumerable: true,
        get: function() {
          return _toU8a.hexToU8a;
        }
      });
      var _addPrefix = require_addPrefix();
      var _fixLength = require_fixLength2();
      var _hasPrefix = require_hasPrefix();
      var _stripPrefix = require_stripPrefix();
      var _toBigInt = require_toBigInt2();
      var _toBn = require_toBn2();
      var _toNumber = require_toNumber();
      var _toString = require_toString2();
      var _toU8a = require_toU8a();
    }
  });

  // node_modules/@polkadot/util/is/array.cjs
  var require_array2 = __commonJS({
    "node_modules/@polkadot/util/is/array.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isArray = isArray;
      function isArray(value) {
        return Array.isArray(value);
      }
    }
  });

  // node_modules/@polkadot/util/is/ascii.cjs
  var require_ascii = __commonJS({
    "node_modules/@polkadot/util/is/ascii.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isAscii = isAscii;
      var _toU8a = require_toU8a3();
      var _hex = require_hex();
      var _string = require_string();
      var FORMAT = [9, 10, 13];
      function isAsciiByte(b) {
        return b < 127 && (b >= 32 || FORMAT.includes(b));
      }
      function isAsciiChar(s) {
        return isAsciiByte(s.charCodeAt(0));
      }
      function isAscii(value) {
        const isStringIn = (0, _string.isString)(value);
        if (value) {
          return isStringIn && !(0, _hex.isHex)(value) ? value.toString().split("").every(isAsciiChar) : (0, _toU8a.u8aToU8a)(value).every(isAsciiByte);
        }
        return isStringIn;
      }
    }
  });

  // node_modules/@polkadot/util/is/childClass.cjs
  var require_childClass = __commonJS({
    "node_modules/@polkadot/util/is/childClass.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isChildClass = isChildClass;
      function isChildClass(Parent, Child) {
        return Child ? Parent === Child || Parent.isPrototypeOf(Child) : false;
      }
    }
  });

  // node_modules/@polkadot/util/is/codec.cjs
  var require_codec = __commonJS({
    "node_modules/@polkadot/util/is/codec.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isCodec = isCodec;
      var _helpers = require_helpers();
      var checkCodec = (0, _helpers.isOnObject)("toHex", "toU8a");
      var checkRegistry = (0, _helpers.isOnObject)("get");
      function isCodec(value) {
        return checkCodec(value) && checkRegistry(value.registry);
      }
    }
  });

  // node_modules/@polkadot/util/is/compact.cjs
  var require_compact2 = __commonJS({
    "node_modules/@polkadot/util/is/compact.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isCompact = isCompact;
      var _helpers = require_helpers();
      var checker = (0, _helpers.isOnObject)("toBigInt", "toBn", "toNumber", "unwrap");
      function isCompact(value) {
        return checker(value);
      }
    }
  });

  // node_modules/@polkadot/util/is/error.cjs
  var require_error = __commonJS({
    "node_modules/@polkadot/util/is/error.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isError = isError;
      function isError(value) {
        return value instanceof Error;
      }
    }
  });

  // node_modules/@polkadot/util/is/instanceOf.cjs
  var require_instanceOf = __commonJS({
    "node_modules/@polkadot/util/is/instanceOf.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isInstanceOf = isInstanceOf;
      function isInstanceOf(value, clazz) {
        return value instanceof clazz;
      }
    }
  });

  // node_modules/ip-regex/index.js
  var require_ip_regex = __commonJS({
    "node_modules/ip-regex/index.js"(exports, module) {
      "use strict";
      var word = "[a-fA-F\\d:]";
      var b = (options) => options && options.includeBoundaries ? `(?:(?<=\\s|^)(?=${word})|(?<=${word})(?=\\s|$))` : "";
      var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
      var v6seg = "[a-fA-F\\d]{1,4}";
      var v6 = `
(?:
(?:${v6seg}:){7}(?:${v6seg}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${v6seg}:){6}(?:${v4}|:${v6seg}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${v6seg}:){5}(?::${v4}|(?::${v6seg}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${v6seg}:){4}(?:(?::${v6seg}){0,1}:${v4}|(?::${v6seg}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${v6seg}:){3}(?:(?::${v6seg}){0,2}:${v4}|(?::${v6seg}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${v6seg}:){2}(?:(?::${v6seg}){0,3}:${v4}|(?::${v6seg}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${v6seg}:){1}(?:(?::${v6seg}){0,4}:${v4}|(?::${v6seg}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${v6seg}){0,5}:${v4}|(?::${v6seg}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
      var v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
      var v4exact = new RegExp(`^${v4}$`);
      var v6exact = new RegExp(`^${v6}$`);
      var ip = (options) => options && options.exact ? v46Exact : new RegExp(`(?:${b(options)}${v4}${b(options)})|(?:${b(options)}${v6}${b(options)})`, "g");
      ip.v4 = (options) => options && options.exact ? v4exact : new RegExp(`${b(options)}${v4}${b(options)}`, "g");
      ip.v6 = (options) => options && options.exact ? v6exact : new RegExp(`${b(options)}${v6}${b(options)}`, "g");
      module.exports = ip;
    }
  });

  // node_modules/@polkadot/util/is/ip.cjs
  var require_ip = __commonJS({
    "node_modules/@polkadot/util/is/ip.cjs"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isIp = isIp;
      var _ipRegex = _interopRequireDefault(require_ip_regex());
      function isIp(value, type) {
        if (type === "v4") {
          return _ipRegex.default.v4({
            exact: true
          }).test(value);
        } else if (type === "v6") {
          return _ipRegex.default.v6({
            exact: true
          }).test(value);
        }
        return (0, _ipRegex.default)({
          exact: true
        }).test(value);
      }
    }
  });

  // node_modules/@polkadot/util/stringify.cjs
  var require_stringify = __commonJS({
    "node_modules/@polkadot/util/stringify.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.stringify = stringify;
      var _bigInt = require_bigInt();
      function replacer(_, v) {
        return (0, _bigInt.isBigInt)(v) ? v.toString() : v;
      }
      function stringify(value, space) {
        return JSON.stringify(value, replacer, space);
      }
    }
  });

  // node_modules/@polkadot/util/is/jsonObject.cjs
  var require_jsonObject = __commonJS({
    "node_modules/@polkadot/util/is/jsonObject.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isJsonObject = isJsonObject;
      var _stringify = require_stringify();
      function isJsonObject(value) {
        const str = typeof value !== "string" ? (0, _stringify.stringify)(value) : value;
        try {
          const obj = JSON.parse(str);
          return typeof obj === "object" && obj !== null;
        } catch (e) {
          return false;
        }
      }
    }
  });

  // node_modules/@polkadot/util/is/observable.cjs
  var require_observable = __commonJS({
    "node_modules/@polkadot/util/is/observable.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isObservable = void 0;
      var _helpers = require_helpers();
      var isObservable = (0, _helpers.isOn)("next");
      exports.isObservable = isObservable;
    }
  });

  // node_modules/@polkadot/util/is/promise.cjs
  var require_promise = __commonJS({
    "node_modules/@polkadot/util/is/promise.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isPromise = void 0;
      var _helpers = require_helpers();
      var isPromise = (0, _helpers.isOnObject)("catch", "then");
      exports.isPromise = isPromise;
    }
  });

  // node_modules/@polkadot/util/is/testChain.cjs
  var require_testChain = __commonJS({
    "node_modules/@polkadot/util/is/testChain.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isTestChain = isTestChain;
      var REGEX_DEV = /(Development|Local Testnet)$/;
      function isTestChain(chain) {
        if (!chain) {
          return false;
        }
        return !!REGEX_DEV.test(chain.toString());
      }
    }
  });

  // node_modules/@polkadot/util/is/utf8.cjs
  var require_utf8 = __commonJS({
    "node_modules/@polkadot/util/is/utf8.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isUtf8 = isUtf8;
      var _toU8a = require_toU8a3();
      var _string = require_string();
      function isUtf8(value) {
        if (!value) {
          return (0, _string.isString)(value);
        }
        const u8a = (0, _toU8a.u8aToU8a)(value);
        const len = u8a.length;
        let i = 0;
        while (i < len) {
          if (u8a[i] <= 127) {
            i += 1;
          } else if (u8a[i] >= 194 && u8a[i] <= 223) {
            if (i + 1 < len) {
              if (u8a[i + 1] < 128 || u8a[i + 1] > 191) {
                return false;
              }
            } else {
              return false;
            }
            i += 2;
          } else if (u8a[i] === 224) {
            if (i + 2 < len) {
              if (u8a[i + 1] < 160 || u8a[i + 1] > 191) {
                return false;
              }
              if (u8a[i + 2] < 128 || u8a[i + 2] > 191) {
                return false;
              }
            } else {
              return false;
            }
            i += 3;
          } else if (u8a[i] >= 225 && u8a[i] <= 236) {
            if (i + 2 < len) {
              if (u8a[i + 1] < 128 || u8a[i + 1] > 191) {
                return false;
              }
              if (u8a[i + 2] < 128 || u8a[i + 2] > 191) {
                return false;
              }
            } else {
              return false;
            }
            i += 3;
          } else if (u8a[i] === 237) {
            if (i + 2 < len) {
              if (u8a[i + 1] < 128 || u8a[i + 1] > 159) {
                return false;
              }
              if (u8a[i + 2] < 128 || u8a[i + 2] > 191) {
                return false;
              }
            } else {
              return false;
            }
            i += 3;
          } else if (u8a[i] >= 238 && u8a[i] <= 239) {
            if (i + 2 < len) {
              if (u8a[i + 1] < 128 || u8a[i + 1] > 191) {
                return false;
              }
              if (u8a[i + 2] < 128 || u8a[i + 2] > 191) {
                return false;
              }
            } else {
              return false;
            }
            i += 3;
          } else if (u8a[i] === 240) {
            if (i + 3 < len) {
              if (u8a[i + 1] < 144 || u8a[i + 1] > 191) {
                return false;
              }
              if (u8a[i + 2] < 128 || u8a[i + 2] > 191) {
                return false;
              }
              if (u8a[i + 3] < 128 || u8a[i + 3] > 191) {
                return false;
              }
            } else {
              return false;
            }
            i += 4;
          } else if (u8a[i] >= 241 && u8a[i] <= 243) {
            if (i + 3 < len) {
              if (u8a[i + 1] < 128 || u8a[i + 1] > 191) {
                return false;
              }
              if (u8a[i + 2] < 128 || u8a[i + 2] > 191) {
                return false;
              }
              if (u8a[i + 3] < 128 || u8a[i + 3] > 191) {
                return false;
              }
            } else {
              return false;
            }
            i += 4;
          } else if (u8a[i] === 244) {
            if (i + 3 < len) {
              if (u8a[i + 1] < 128 || u8a[i + 1] > 143) {
                return false;
              }
              if (u8a[i + 2] < 128 || u8a[i + 2] > 191) {
                return false;
              }
              if (u8a[i + 3] < 128 || u8a[i + 3] > 191) {
                return false;
              }
            } else {
              return false;
            }
            i += 4;
          } else {
            return false;
          }
        }
        return true;
      }
    }
  });

  // node_modules/@polkadot/util/is/wasm.cjs
  var require_wasm = __commonJS({
    "node_modules/@polkadot/util/is/wasm.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isWasm = isWasm;
      var _eq = require_eq();
      var _u8a = require_u8a();
      var WASM_MAGIC = new Uint8Array([0, 97, 115, 109]);
      function isWasm(value) {
        return (0, _u8a.isU8a)(value) && (0, _eq.u8aEq)(value.subarray(0, 4), WASM_MAGIC);
      }
    }
  });

  // node_modules/@polkadot/util/is/index.cjs
  var require_is = __commonJS({
    "node_modules/@polkadot/util/is/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "isArray", {
        enumerable: true,
        get: function() {
          return _array.isArray;
        }
      });
      Object.defineProperty(exports, "isAscii", {
        enumerable: true,
        get: function() {
          return _ascii.isAscii;
        }
      });
      Object.defineProperty(exports, "isBigInt", {
        enumerable: true,
        get: function() {
          return _bigInt.isBigInt;
        }
      });
      Object.defineProperty(exports, "isBn", {
        enumerable: true,
        get: function() {
          return _bn.isBn;
        }
      });
      Object.defineProperty(exports, "isBoolean", {
        enumerable: true,
        get: function() {
          return _boolean.isBoolean;
        }
      });
      Object.defineProperty(exports, "isBuffer", {
        enumerable: true,
        get: function() {
          return _buffer.isBuffer;
        }
      });
      Object.defineProperty(exports, "isChildClass", {
        enumerable: true,
        get: function() {
          return _childClass.isChildClass;
        }
      });
      Object.defineProperty(exports, "isCodec", {
        enumerable: true,
        get: function() {
          return _codec.isCodec;
        }
      });
      Object.defineProperty(exports, "isCompact", {
        enumerable: true,
        get: function() {
          return _compact.isCompact;
        }
      });
      Object.defineProperty(exports, "isError", {
        enumerable: true,
        get: function() {
          return _error.isError;
        }
      });
      Object.defineProperty(exports, "isFunction", {
        enumerable: true,
        get: function() {
          return _function.isFunction;
        }
      });
      Object.defineProperty(exports, "isHex", {
        enumerable: true,
        get: function() {
          return _hex.isHex;
        }
      });
      Object.defineProperty(exports, "isInstanceOf", {
        enumerable: true,
        get: function() {
          return _instanceOf.isInstanceOf;
        }
      });
      Object.defineProperty(exports, "isIp", {
        enumerable: true,
        get: function() {
          return _ip.isIp;
        }
      });
      Object.defineProperty(exports, "isJsonObject", {
        enumerable: true,
        get: function() {
          return _jsonObject.isJsonObject;
        }
      });
      Object.defineProperty(exports, "isNull", {
        enumerable: true,
        get: function() {
          return _null.isNull;
        }
      });
      Object.defineProperty(exports, "isNumber", {
        enumerable: true,
        get: function() {
          return _number.isNumber;
        }
      });
      Object.defineProperty(exports, "isObject", {
        enumerable: true,
        get: function() {
          return _object.isObject;
        }
      });
      Object.defineProperty(exports, "isObservable", {
        enumerable: true,
        get: function() {
          return _observable.isObservable;
        }
      });
      Object.defineProperty(exports, "isPromise", {
        enumerable: true,
        get: function() {
          return _promise.isPromise;
        }
      });
      Object.defineProperty(exports, "isString", {
        enumerable: true,
        get: function() {
          return _string.isString;
        }
      });
      Object.defineProperty(exports, "isTestChain", {
        enumerable: true,
        get: function() {
          return _testChain.isTestChain;
        }
      });
      Object.defineProperty(exports, "isToBigInt", {
        enumerable: true,
        get: function() {
          return _toBigInt.isToBigInt;
        }
      });
      Object.defineProperty(exports, "isToBn", {
        enumerable: true,
        get: function() {
          return _toBn.isToBn;
        }
      });
      Object.defineProperty(exports, "isU8a", {
        enumerable: true,
        get: function() {
          return _u8a.isU8a;
        }
      });
      Object.defineProperty(exports, "isUndefined", {
        enumerable: true,
        get: function() {
          return _undefined.isUndefined;
        }
      });
      Object.defineProperty(exports, "isUtf8", {
        enumerable: true,
        get: function() {
          return _utf.isUtf8;
        }
      });
      Object.defineProperty(exports, "isWasm", {
        enumerable: true,
        get: function() {
          return _wasm.isWasm;
        }
      });
      var _array = require_array2();
      var _ascii = require_ascii();
      var _bigInt = require_bigInt();
      var _bn = require_bn3();
      var _buffer = require_buffer2();
      var _boolean = require_boolean();
      var _childClass = require_childClass();
      var _codec = require_codec();
      var _compact = require_compact2();
      var _error = require_error();
      var _function = require_function();
      var _hex = require_hex();
      var _instanceOf = require_instanceOf();
      var _ip = require_ip();
      var _jsonObject = require_jsonObject();
      var _null = require_null();
      var _number = require_number();
      var _object = require_object();
      var _observable = require_observable();
      var _promise = require_promise();
      var _string = require_string();
      var _testChain = require_testChain();
      var _toBigInt = require_toBigInt3();
      var _toBn = require_toBn();
      var _u8a = require_u8a();
      var _undefined = require_undefined();
      var _utf = require_utf8();
      var _wasm = require_wasm();
    }
  });

  // node_modules/@polkadot/util/lazy.cjs
  var require_lazy = __commonJS({
    "node_modules/@polkadot/util/lazy.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.lazyMethod = lazyMethod;
      exports.lazyMethods = lazyMethods;
      var _undefined = require_undefined();
      function lazyMethod(result, item, creator, getName) {
        const name = getName ? getName(item) : item.toString();
        let value;
        Object.defineProperty(result, name, {
          configurable: true,
          enumerable: true,
          get: function() {
            if ((0, _undefined.isUndefined)(value)) {
              value = creator(item);
              try {
                Object.defineProperty(this, name, {
                  value
                });
              } catch {
              }
            }
            return value;
          }
        });
      }
      function lazyMethods(result, items, creator, getName) {
        for (let i = 0; i < items.length; i++) {
          lazyMethod(result, items[i], creator, getName);
        }
        return result;
      }
    }
  });

  // node_modules/@polkadot/util/logger.cjs
  var require_logger = __commonJS({
    "node_modules/@polkadot/util/logger.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.logger = logger;
      exports.loggerFormat = loggerFormat;
      var _formatDate = require_formatDate();
      var _bn = require_bn3();
      var _buffer = require_buffer2();
      var _function = require_function();
      var _object = require_object();
      var _u8a = require_u8a();
      var _toHex = require_toHex();
      var _toU8a = require_toU8a3();
      var _has = require_has();
      var logTo = {
        debug: "log",
        error: "error",
        log: "log",
        warn: "warn"
      };
      function formatOther(value) {
        if (value && (0, _object.isObject)(value) && value.constructor === Object) {
          const result = {};
          for (const k of Object.keys(value)) {
            result[k] = loggerFormat(value[k]);
          }
          return result;
        }
        return value;
      }
      function loggerFormat(value) {
        if (Array.isArray(value)) {
          return value.map(loggerFormat);
        } else if ((0, _bn.isBn)(value)) {
          return value.toString();
        } else if ((0, _u8a.isU8a)(value) || (0, _buffer.isBuffer)(value)) {
          return (0, _toHex.u8aToHex)((0, _toU8a.u8aToU8a)(value));
        }
        return formatOther(value);
      }
      function formatWithLength(maxLength) {
        return (v) => {
          if (maxLength <= 0) {
            return v;
          }
          const r = `${v}`;
          return r.length < maxLength ? v : `${r.substr(0, maxLength)} ...`;
        };
      }
      function apply(log, type, values) {
        let maxSize = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1;
        if (values.length === 1 && (0, _function.isFunction)(values[0])) {
          const fnResult = values[0]();
          return apply(log, type, Array.isArray(fnResult) ? fnResult : [fnResult], maxSize);
        }
        console[logTo[log]]((0, _formatDate.formatDate)(new Date()), type, ...values.map(loggerFormat).map(formatWithLength(maxSize)));
      }
      function noop() {
      }
      function isDebugOn(e, type) {
        return !!e && (e === "*" || type === e || e.endsWith("*") && type.startsWith(e.slice(0, -1)));
      }
      function isDebugOff(e, type) {
        return !!e && e.startsWith("-") && (type === e.slice(1) || e.endsWith("*") && type.startsWith(e.slice(1, -1)));
      }
      function getDebugFlag(env, type) {
        let flag = false;
        for (const e of env) {
          if (isDebugOn(e, type)) {
            flag = true;
          } else if (isDebugOff(e, type)) {
            flag = false;
          }
        }
        return flag;
      }
      function parseEnv(type) {
        const env = (_has.hasProcess ? process : {}).env || {};
        const maxSize = parseInt(env.DEBUG_MAX || "-1", 10);
        return [getDebugFlag((env.DEBUG || "").toLowerCase().split(","), type), isNaN(maxSize) ? -1 : maxSize];
      }
      function logger(_type) {
        const type = `${_type.toUpperCase()}:`.padStart(16);
        const [isDebug, maxSize] = parseEnv(_type.toLowerCase());
        return {
          debug: isDebug ? function() {
            for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
              values[_key] = arguments[_key];
            }
            return apply("debug", type, values, maxSize);
          } : noop,
          error: function() {
            for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              values[_key2] = arguments[_key2];
            }
            return apply("error", type, values);
          },
          log: function() {
            for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              values[_key3] = arguments[_key3];
            }
            return apply("log", type, values);
          },
          noop,
          warn: function() {
            for (var _len4 = arguments.length, values = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              values[_key4] = arguments[_key4];
            }
            return apply("warn", type, values);
          }
        };
      }
    }
  });

  // node_modules/@polkadot/util/memoize.cjs
  var require_memoize = __commonJS({
    "node_modules/@polkadot/util/memoize.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.memoize = memoize;
      var _undefined = require_undefined();
      var _stringify = require_stringify();
      function defaultGetId() {
        return "none";
      }
      function memoize(fn) {
        let {
          getInstanceId = defaultGetId
        } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const cache = {};
        const memoized = function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          const stringParams = (0, _stringify.stringify)(args);
          const instanceId = getInstanceId();
          if (!cache[instanceId]) {
            cache[instanceId] = {};
          }
          if ((0, _undefined.isUndefined)(cache[instanceId][stringParams])) {
            cache[instanceId][stringParams] = fn(...args);
          }
          return cache[instanceId][stringParams];
        };
        memoized.unmemoize = function() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          const stringParams = (0, _stringify.stringify)(args);
          const instanceId = getInstanceId();
          if (cache[instanceId] && !(0, _undefined.isUndefined)(cache[instanceId][stringParams])) {
            delete cache[instanceId][stringParams];
          }
        };
        return memoized;
      }
    }
  });

  // node_modules/@polkadot/util/number/toHex.cjs
  var require_toHex4 = __commonJS({
    "node_modules/@polkadot/util/number/toHex.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.numberToHex = numberToHex;
      var _fixLength = require_fixLength2();
      var _null = require_null();
      var _undefined = require_undefined();
      function numberToHex(value) {
        let bitLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
        if ((0, _undefined.isUndefined)(value) || (0, _null.isNull)(value) || isNaN(value)) {
          return "0x";
        }
        const hex = value.toString(16);
        return (0, _fixLength.hexFixLength)(hex.length % 2 ? `0${hex}` : hex, bitLength, true);
      }
    }
  });

  // node_modules/@polkadot/util/number/toU8a.cjs
  var require_toU8a8 = __commonJS({
    "node_modules/@polkadot/util/number/toU8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.numberToU8a = numberToU8a;
      var _toU8a = require_toU8a();
      var _null = require_null();
      var _undefined = require_undefined();
      var _toHex = require_toHex4();
      function numberToU8a(value) {
        let bitLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
        return (0, _undefined.isUndefined)(value) || (0, _null.isNull)(value) || isNaN(value) ? new Uint8Array() : (0, _toU8a.hexToU8a)((0, _toHex.numberToHex)(value, bitLength));
      }
    }
  });

  // node_modules/@polkadot/util/number/index.cjs
  var require_number2 = __commonJS({
    "node_modules/@polkadot/util/number/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "numberToHex", {
        enumerable: true,
        get: function() {
          return _toHex.numberToHex;
        }
      });
      Object.defineProperty(exports, "numberToU8a", {
        enumerable: true,
        get: function() {
          return _toU8a.numberToU8a;
        }
      });
      var _toHex = require_toHex4();
      var _toU8a = require_toU8a8();
    }
  });

  // node_modules/@polkadot/util/object/clear.cjs
  var require_clear = __commonJS({
    "node_modules/@polkadot/util/object/clear.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.objectClear = objectClear;
      function objectClear(value) {
        const keys = Object.keys(value);
        for (let i = 0; i < keys.length; i++) {
          delete value[keys[i]];
        }
        return value;
      }
    }
  });

  // node_modules/@polkadot/util/object/copy.cjs
  var require_copy = __commonJS({
    "node_modules/@polkadot/util/object/copy.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.objectCopy = objectCopy;
      var _spread = require_spread();
      function objectCopy(source) {
        return (0, _spread.objectSpread)({}, source);
      }
    }
  });

  // node_modules/@polkadot/util/object/entries.cjs
  var require_entries = __commonJS({
    "node_modules/@polkadot/util/object/entries.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.objectEntries = objectEntries;
      function objectEntries(obj) {
        return Object.entries(obj);
      }
    }
  });

  // node_modules/@polkadot/util/object/property.cjs
  var require_property = __commonJS({
    "node_modules/@polkadot/util/object/property.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.objectProperties = objectProperties;
      exports.objectProperty = objectProperty;
      var _undefined = require_undefined();
      function objectProperty(that, key, getter) {
        if (!Object.prototype.hasOwnProperty.call(that, key) && (0, _undefined.isUndefined)(that[key])) {
          Object.defineProperty(that, key, {
            enumerable: true,
            get: () => getter(key)
          });
        }
      }
      function objectProperties(that, keys, getter) {
        for (let i = 0; i < keys.length; i++) {
          objectProperty(that, keys[i], (k) => getter(k, i));
        }
      }
    }
  });

  // node_modules/@polkadot/util/object/values.cjs
  var require_values = __commonJS({
    "node_modules/@polkadot/util/object/values.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.objectValues = objectValues;
      function objectValues(obj) {
        return Object.values(obj);
      }
    }
  });

  // node_modules/@polkadot/util/object/index.cjs
  var require_object2 = __commonJS({
    "node_modules/@polkadot/util/object/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "objectClear", {
        enumerable: true,
        get: function() {
          return _clear.objectClear;
        }
      });
      Object.defineProperty(exports, "objectCopy", {
        enumerable: true,
        get: function() {
          return _copy.objectCopy;
        }
      });
      Object.defineProperty(exports, "objectEntries", {
        enumerable: true,
        get: function() {
          return _entries.objectEntries;
        }
      });
      Object.defineProperty(exports, "objectKeys", {
        enumerable: true,
        get: function() {
          return _keys.objectKeys;
        }
      });
      Object.defineProperty(exports, "objectProperties", {
        enumerable: true,
        get: function() {
          return _property.objectProperties;
        }
      });
      Object.defineProperty(exports, "objectProperty", {
        enumerable: true,
        get: function() {
          return _property.objectProperty;
        }
      });
      Object.defineProperty(exports, "objectSpread", {
        enumerable: true,
        get: function() {
          return _spread.objectSpread;
        }
      });
      Object.defineProperty(exports, "objectValues", {
        enumerable: true,
        get: function() {
          return _values.objectValues;
        }
      });
      var _clear = require_clear();
      var _copy = require_copy();
      var _entries = require_entries();
      var _keys = require_keys();
      var _property = require_property();
      var _spread = require_spread();
      var _values = require_values();
    }
  });

  // node_modules/@polkadot/util/promisify.cjs
  var require_promisify = __commonJS({
    "node_modules/@polkadot/util/promisify.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.promisify = promisify;
      function promisify(self2, fn) {
        for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          params[_key - 2] = arguments[_key];
        }
        return new Promise((resolve, reject) => {
          fn.apply(self2, params.concat((error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }));
        });
      }
    }
  });

  // node_modules/@polkadot/util/string/camelCase.cjs
  var require_camelCase = __commonJS({
    "node_modules/@polkadot/util/string/camelCase.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.stringPascalCase = exports.stringCamelCase = void 0;
      function converter(fn) {
        const format = (w, i) => fn(w[0], i) + w.slice(1);
        return (value) => value.toString().replace(/[-_., ]+/g, " ").trim().split(" ").map((w, i) => format(w.toUpperCase() === w ? w.toLowerCase() : w.replace(/^[A-Z0-9]{2,}[^a-z]/, (w2) => w2.slice(0, w2.length - 1).toLowerCase() + w2.slice(-1).toUpperCase()), i)).join("");
      }
      var stringCamelCase = converter((w, i) => i ? w.toUpperCase() : w.toLowerCase());
      exports.stringCamelCase = stringCamelCase;
      var stringPascalCase = converter((w) => w.toUpperCase());
      exports.stringPascalCase = stringPascalCase;
    }
  });

  // node_modules/@polkadot/util/string/lowerFirst.cjs
  var require_lowerFirst = __commonJS({
    "node_modules/@polkadot/util/string/lowerFirst.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.stringUpperFirst = exports.stringLowerFirst = void 0;
      function converter(fn) {
        return (value) => value ? fn(value[0]) + value.slice(1) : "";
      }
      var stringLowerFirst = converter((s) => s.toLowerCase());
      exports.stringLowerFirst = stringLowerFirst;
      var stringUpperFirst = converter((s) => s.toUpperCase());
      exports.stringUpperFirst = stringUpperFirst;
    }
  });

  // node_modules/@polkadot/util/string/shorten.cjs
  var require_shorten = __commonJS({
    "node_modules/@polkadot/util/string/shorten.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.stringShorten = stringShorten;
      function stringShorten(value) {
        let prefixLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6;
        return value.length <= 2 + 2 * prefixLength ? value.toString() : `${value.substr(0, prefixLength)}\u2026${value.slice(-prefixLength)}`;
      }
    }
  });

  // node_modules/@polkadot/util/string/toHex.cjs
  var require_toHex5 = __commonJS({
    "node_modules/@polkadot/util/string/toHex.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.stringToHex = stringToHex;
      var _toHex = require_toHex();
      var _toU8a = require_toU8a2();
      function stringToHex(value) {
        return (0, _toHex.u8aToHex)((0, _toU8a.stringToU8a)(value));
      }
    }
  });

  // node_modules/@polkadot/util/string/index.cjs
  var require_string2 = __commonJS({
    "node_modules/@polkadot/util/string/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "stringCamelCase", {
        enumerable: true,
        get: function() {
          return _camelCase.stringCamelCase;
        }
      });
      Object.defineProperty(exports, "stringLowerFirst", {
        enumerable: true,
        get: function() {
          return _lowerFirst.stringLowerFirst;
        }
      });
      Object.defineProperty(exports, "stringPascalCase", {
        enumerable: true,
        get: function() {
          return _camelCase.stringPascalCase;
        }
      });
      Object.defineProperty(exports, "stringShorten", {
        enumerable: true,
        get: function() {
          return _shorten.stringShorten;
        }
      });
      Object.defineProperty(exports, "stringToHex", {
        enumerable: true,
        get: function() {
          return _toHex.stringToHex;
        }
      });
      Object.defineProperty(exports, "stringToU8a", {
        enumerable: true,
        get: function() {
          return _toU8a.stringToU8a;
        }
      });
      Object.defineProperty(exports, "stringUpperFirst", {
        enumerable: true,
        get: function() {
          return _lowerFirst.stringUpperFirst;
        }
      });
      var _camelCase = require_camelCase();
      var _lowerFirst = require_lowerFirst();
      var _shorten = require_shorten();
      var _toHex = require_toHex5();
      var _toU8a = require_toU8a2();
    }
  });

  // node_modules/@polkadot/util/bundle.cjs
  var require_bundle = __commonJS({
    "node_modules/@polkadot/util/bundle.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _exportNames = {
        packageInfo: true
      };
      Object.defineProperty(exports, "packageInfo", {
        enumerable: true,
        get: function() {
          return _packageInfo.packageInfo;
        }
      });
      var _packageInfo = require_packageInfo4();
      var _index = require_array();
      Object.keys(_index).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index[key];
          }
        });
      });
      var _assert = require_assert();
      Object.keys(_assert).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _assert[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _assert[key];
          }
        });
      });
      var _index2 = require_bi();
      Object.keys(_index2).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index2[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index2[key];
          }
        });
      });
      var _index3 = require_bn4();
      Object.keys(_index3).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index3[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index3[key];
          }
        });
      });
      var _index4 = require_buffer3();
      Object.keys(_index4).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index4[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index4[key];
          }
        });
      });
      var _index5 = require_compact();
      Object.keys(_index5).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index5[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index5[key];
          }
        });
      });
      var _extractTime = require_extractTime();
      Object.keys(_extractTime).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _extractTime[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _extractTime[key];
          }
        });
      });
      var _index6 = require_format();
      Object.keys(_index6).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index6[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index6[key];
          }
        });
      });
      var _has = require_has();
      Object.keys(_has).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _has[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _has[key];
          }
        });
      });
      var _index7 = require_hex2();
      Object.keys(_index7).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index7[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index7[key];
          }
        });
      });
      var _index8 = require_is();
      Object.keys(_index8).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index8[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index8[key];
          }
        });
      });
      var _lazy = require_lazy();
      Object.keys(_lazy).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _lazy[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _lazy[key];
          }
        });
      });
      var _logger = require_logger();
      Object.keys(_logger).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _logger[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _logger[key];
          }
        });
      });
      var _memoize = require_memoize();
      Object.keys(_memoize).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _memoize[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _memoize[key];
          }
        });
      });
      var _index9 = require_number2();
      Object.keys(_index9).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index9[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index9[key];
          }
        });
      });
      var _index10 = require_object2();
      Object.keys(_index10).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index10[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index10[key];
          }
        });
      });
      var _promisify = require_promisify();
      Object.keys(_promisify).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _promisify[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _promisify[key];
          }
        });
      });
      var _index11 = require_string2();
      Object.keys(_index11).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index11[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index11[key];
          }
        });
      });
      var _stringify = require_stringify();
      Object.keys(_stringify).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _stringify[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _stringify[key];
          }
        });
      });
      var _index12 = require_u8a2();
      Object.keys(_index12).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index12[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index12[key];
          }
        });
      });
      var _versionDetect = require_versionDetect();
      Object.keys(_versionDetect).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _versionDetect[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _versionDetect[key];
          }
        });
      });
    }
  });

  // node_modules/@polkadot/util/index.cjs
  var require_util = __commonJS({
    "node_modules/@polkadot/util/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      require_detectPackage();
      var _bundle = require_bundle();
      Object.keys(_bundle).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (key in exports && exports[key] === _bundle[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _bundle[key];
          }
        });
      });
    }
  });

  // node_modules/@polkadot/networks/packageInfo.cjs
  var require_packageInfo6 = __commonJS({
    "node_modules/@polkadot/networks/packageInfo.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.packageInfo = void 0;
      var packageInfo = {
        name: "@polkadot/networks",
        path: typeof __dirname === "string" ? __dirname : "auto",
        type: "cjs",
        version: "8.7.1"
      };
      exports.packageInfo = packageInfo;
    }
  });

  // node_modules/@polkadot/x-randomvalues/packageInfo.cjs
  var require_packageInfo7 = __commonJS({
    "node_modules/@polkadot/x-randomvalues/packageInfo.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.packageInfo = void 0;
      var packageInfo = {
        name: "@polkadot/x-randomvalues",
        path: typeof __dirname === "string" ? __dirname : "auto",
        type: "cjs",
        version: "8.7.1"
      };
      exports.packageInfo = packageInfo;
    }
  });

  // node_modules/@polkadot/x-randomvalues/browser.cjs
  var require_browser3 = __commonJS({
    "node_modules/@polkadot/x-randomvalues/browser.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getRandomValues = getRandomValues;
      Object.defineProperty(exports, "packageInfo", {
        enumerable: true,
        get: function() {
          return _packageInfo.packageInfo;
        }
      });
      var _xGlobal = require_x_global();
      var _packageInfo = require_packageInfo7();
      function getRandomValues(arr) {
        return _xGlobal.xglobal.crypto.getRandomValues(arr);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/detectOther.cjs
  var require_detectOther2 = __commonJS({
    "node_modules/@polkadot/util-crypto/detectOther.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _packageInfo = require_packageInfo6();
      var _packageInfo2 = require_packageInfo4();
      var _xRandomvalues = require_browser3();
      var _default = [_packageInfo.packageInfo, _packageInfo2.packageInfo, _xRandomvalues.packageInfo];
      exports.default = _default;
    }
  });

  // node_modules/@polkadot/util-crypto/packageInfo.cjs
  var require_packageInfo8 = __commonJS({
    "node_modules/@polkadot/util-crypto/packageInfo.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.packageInfo = void 0;
      var packageInfo = {
        name: "@polkadot/util-crypto",
        path: typeof __dirname === "string" ? __dirname : "auto",
        type: "cjs",
        version: "8.7.1"
      };
      exports.packageInfo = packageInfo;
    }
  });

  // node_modules/@polkadot/util-crypto/detectPackage.cjs
  var require_detectPackage2 = __commonJS({
    "node_modules/@polkadot/util-crypto/detectPackage.cjs"() {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      var _util = require_util();
      var _detectOther = _interopRequireDefault(require_detectOther2());
      var _packageInfo = require_packageInfo8();
      (0, _util.detectPackage)(_packageInfo.packageInfo, null, _detectOther.default);
    }
  });

  // node_modules/@polkadot/x-bigint/shim.cjs
  var require_shim = __commonJS({
    "node_modules/@polkadot/x-bigint/shim.cjs"() {
      "use strict";
      var _xBigint = require_x_bigint();
      var _xGlobal = require_x_global();
      (0, _xGlobal.exposeGlobal)("BigInt", _xBigint.BigInt);
    }
  });

  // (disabled):crypto
  var require_crypto = __commonJS({
    "(disabled):crypto"() {
    }
  });

  // node_modules/@noble/secp256k1/lib/index.js
  var require_lib = __commonJS({
    "node_modules/@noble/secp256k1/lib/index.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod2) {
        return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.utils = exports.schnorr = exports.verify = exports.signSync = exports.sign = exports.getSharedSecret = exports.recoverPublicKey = exports.getPublicKey = exports.Signature = exports.Point = exports.CURVE = void 0;
      var crypto_1 = __importDefault(require_crypto());
      var _0n = BigInt(0);
      var _1n = BigInt(1);
      var _2n = BigInt(2);
      var _3n = BigInt(3);
      var _8n = BigInt(8);
      var POW_2_256 = _2n ** BigInt(256);
      var CURVE = {
        a: _0n,
        b: BigInt(7),
        P: POW_2_256 - _2n ** BigInt(32) - BigInt(977),
        n: POW_2_256 - BigInt("432420386565659656852420866394968145599"),
        h: _1n,
        Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
        Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
      };
      exports.CURVE = CURVE;
      function weistrass(x) {
        const { a, b } = CURVE;
        const x2 = mod(x * x);
        const x3 = mod(x2 * x);
        return mod(x3 + a * x + b);
      }
      var USE_ENDOMORPHISM = CURVE.a === _0n;
      var JacobianPoint = class {
        constructor(x, y, z) {
          this.x = x;
          this.y = y;
          this.z = z;
        }
        static fromAffine(p) {
          if (!(p instanceof Point)) {
            throw new TypeError("JacobianPoint#fromAffine: expected Point");
          }
          return new JacobianPoint(p.x, p.y, _1n);
        }
        static toAffineBatch(points) {
          const toInv = invertBatch(points.map((p) => p.z));
          return points.map((p, i) => p.toAffine(toInv[i]));
        }
        static normalizeZ(points) {
          return JacobianPoint.toAffineBatch(points).map(JacobianPoint.fromAffine);
        }
        equals(other) {
          if (!(other instanceof JacobianPoint))
            throw new TypeError("JacobianPoint expected");
          const { x: X1, y: Y1, z: Z1 } = this;
          const { x: X2, y: Y2, z: Z2 } = other;
          const Z1Z1 = mod(Z1 ** _2n);
          const Z2Z2 = mod(Z2 ** _2n);
          const U1 = mod(X1 * Z2Z2);
          const U2 = mod(X2 * Z1Z1);
          const S1 = mod(mod(Y1 * Z2) * Z2Z2);
          const S2 = mod(mod(Y2 * Z1) * Z1Z1);
          return U1 === U2 && S1 === S2;
        }
        negate() {
          return new JacobianPoint(this.x, mod(-this.y), this.z);
        }
        double() {
          const { x: X1, y: Y1, z: Z1 } = this;
          const A = mod(X1 ** _2n);
          const B = mod(Y1 ** _2n);
          const C = mod(B ** _2n);
          const D = mod(_2n * (mod((X1 + B) ** _2n) - A - C));
          const E = mod(_3n * A);
          const F = mod(E ** _2n);
          const X3 = mod(F - _2n * D);
          const Y3 = mod(E * (D - X3) - _8n * C);
          const Z3 = mod(_2n * Y1 * Z1);
          return new JacobianPoint(X3, Y3, Z3);
        }
        add(other) {
          if (!(other instanceof JacobianPoint))
            throw new TypeError("JacobianPoint expected");
          const { x: X1, y: Y1, z: Z1 } = this;
          const { x: X2, y: Y2, z: Z2 } = other;
          if (X2 === _0n || Y2 === _0n)
            return this;
          if (X1 === _0n || Y1 === _0n)
            return other;
          const Z1Z1 = mod(Z1 ** _2n);
          const Z2Z2 = mod(Z2 ** _2n);
          const U1 = mod(X1 * Z2Z2);
          const U2 = mod(X2 * Z1Z1);
          const S1 = mod(mod(Y1 * Z2) * Z2Z2);
          const S2 = mod(mod(Y2 * Z1) * Z1Z1);
          const H = mod(U2 - U1);
          const r = mod(S2 - S1);
          if (H === _0n) {
            if (r === _0n) {
              return this.double();
            } else {
              return JacobianPoint.ZERO;
            }
          }
          const HH = mod(H ** _2n);
          const HHH = mod(H * HH);
          const V = mod(U1 * HH);
          const X3 = mod(r ** _2n - HHH - _2n * V);
          const Y3 = mod(r * (V - X3) - S1 * HHH);
          const Z3 = mod(Z1 * Z2 * H);
          return new JacobianPoint(X3, Y3, Z3);
        }
        subtract(other) {
          return this.add(other.negate());
        }
        multiplyUnsafe(scalar) {
          let n = normalizeScalar(scalar);
          const G = JacobianPoint.BASE;
          const P0 = JacobianPoint.ZERO;
          if (n === _0n)
            return P0;
          if (n === _1n)
            return this;
          if (!USE_ENDOMORPHISM) {
            let p = P0;
            let d2 = this;
            while (n > _0n) {
              if (n & _1n)
                p = p.add(d2);
              d2 = d2.double();
              n >>= _1n;
            }
            return p;
          }
          let { k1neg, k1, k2neg, k2 } = splitScalarEndo(n);
          let k1p = P0;
          let k2p = P0;
          let d = this;
          while (k1 > _0n || k2 > _0n) {
            if (k1 & _1n)
              k1p = k1p.add(d);
            if (k2 & _1n)
              k2p = k2p.add(d);
            d = d.double();
            k1 >>= _1n;
            k2 >>= _1n;
          }
          if (k1neg)
            k1p = k1p.negate();
          if (k2neg)
            k2p = k2p.negate();
          k2p = new JacobianPoint(mod(k2p.x * CURVE.beta), k2p.y, k2p.z);
          return k1p.add(k2p);
        }
        precomputeWindow(W) {
          const windows = USE_ENDOMORPHISM ? 128 / W + 1 : 256 / W + 1;
          const points = [];
          let p = this;
          let base = p;
          for (let window2 = 0; window2 < windows; window2++) {
            base = p;
            points.push(base);
            for (let i = 1; i < 2 ** (W - 1); i++) {
              base = base.add(p);
              points.push(base);
            }
            p = base.double();
          }
          return points;
        }
        wNAF(n, affinePoint) {
          if (!affinePoint && this.equals(JacobianPoint.BASE))
            affinePoint = Point.BASE;
          const W = affinePoint && affinePoint._WINDOW_SIZE || 1;
          if (256 % W) {
            throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
          }
          let precomputes = affinePoint && pointPrecomputes.get(affinePoint);
          if (!precomputes) {
            precomputes = this.precomputeWindow(W);
            if (affinePoint && W !== 1) {
              precomputes = JacobianPoint.normalizeZ(precomputes);
              pointPrecomputes.set(affinePoint, precomputes);
            }
          }
          let p = JacobianPoint.ZERO;
          let f = JacobianPoint.ZERO;
          const windows = 1 + (USE_ENDOMORPHISM ? 128 / W : 256 / W);
          const windowSize = 2 ** (W - 1);
          const mask = BigInt(2 ** W - 1);
          const maxNumber = 2 ** W;
          const shiftBy = BigInt(W);
          for (let window2 = 0; window2 < windows; window2++) {
            const offset = window2 * windowSize;
            let wbits = Number(n & mask);
            n >>= shiftBy;
            if (wbits > windowSize) {
              wbits -= maxNumber;
              n += _1n;
            }
            if (wbits === 0) {
              let pr = precomputes[offset];
              if (window2 % 2)
                pr = pr.negate();
              f = f.add(pr);
            } else {
              let cached = precomputes[offset + Math.abs(wbits) - 1];
              if (wbits < 0)
                cached = cached.negate();
              p = p.add(cached);
            }
          }
          return { p, f };
        }
        multiply(scalar, affinePoint) {
          let n = normalizeScalar(scalar);
          let point;
          let fake;
          if (USE_ENDOMORPHISM) {
            const { k1neg, k1, k2neg, k2 } = splitScalarEndo(n);
            let { p: k1p, f: f1p } = this.wNAF(k1, affinePoint);
            let { p: k2p, f: f2p } = this.wNAF(k2, affinePoint);
            if (k1neg)
              k1p = k1p.negate();
            if (k2neg)
              k2p = k2p.negate();
            k2p = new JacobianPoint(mod(k2p.x * CURVE.beta), k2p.y, k2p.z);
            point = k1p.add(k2p);
            fake = f1p.add(f2p);
          } else {
            const { p, f } = this.wNAF(n, affinePoint);
            point = p;
            fake = f;
          }
          return JacobianPoint.normalizeZ([point, fake])[0];
        }
        toAffine(invZ = invert(this.z)) {
          const { x, y, z } = this;
          const iz1 = invZ;
          const iz2 = mod(iz1 * iz1);
          const iz3 = mod(iz2 * iz1);
          const ax = mod(x * iz2);
          const ay = mod(y * iz3);
          const zz = mod(z * iz1);
          if (zz !== _1n)
            throw new Error("invZ was invalid");
          return new Point(ax, ay);
        }
      };
      JacobianPoint.BASE = new JacobianPoint(CURVE.Gx, CURVE.Gy, _1n);
      JacobianPoint.ZERO = new JacobianPoint(_0n, _1n, _0n);
      var pointPrecomputes = /* @__PURE__ */ new WeakMap();
      var Point = class {
        constructor(x, y) {
          this.x = x;
          this.y = y;
        }
        _setWindowSize(windowSize) {
          this._WINDOW_SIZE = windowSize;
          pointPrecomputes.delete(this);
        }
        static fromCompressedHex(bytes) {
          const isShort = bytes.length === 32;
          const x = bytesToNumber(isShort ? bytes : bytes.subarray(1));
          if (!isValidFieldElement(x))
            throw new Error("Point is not on curve");
          const y2 = weistrass(x);
          let y = sqrtMod(y2);
          const isYOdd = (y & _1n) === _1n;
          if (isShort) {
            if (isYOdd)
              y = mod(-y);
          } else {
            const isFirstByteOdd = (bytes[0] & 1) === 1;
            if (isFirstByteOdd !== isYOdd)
              y = mod(-y);
          }
          const point = new Point(x, y);
          point.assertValidity();
          return point;
        }
        static fromUncompressedHex(bytes) {
          const x = bytesToNumber(bytes.subarray(1, 33));
          const y = bytesToNumber(bytes.subarray(33, 65));
          const point = new Point(x, y);
          point.assertValidity();
          return point;
        }
        static fromHex(hex) {
          const bytes = ensureBytes(hex);
          const len = bytes.length;
          const header = bytes[0];
          if (len === 32 || len === 33 && (header === 2 || header === 3)) {
            return this.fromCompressedHex(bytes);
          }
          if (len === 65 && header === 4)
            return this.fromUncompressedHex(bytes);
          throw new Error(`Point.fromHex: received invalid point. Expected 32-33 compressed bytes or 65 uncompressed bytes, not ${len}`);
        }
        static fromPrivateKey(privateKey) {
          return Point.BASE.multiply(normalizePrivateKey(privateKey));
        }
        static fromSignature(msgHash, signature, recovery) {
          msgHash = ensureBytes(msgHash);
          const h = truncateHash(msgHash);
          const { r, s } = normalizeSignature(signature);
          if (recovery !== 0 && recovery !== 1) {
            throw new Error("Cannot recover signature: invalid recovery bit");
          }
          if (h === _0n)
            throw new Error("Cannot recover signature: msgHash cannot be 0");
          const prefix = recovery & 1 ? "03" : "02";
          const R = Point.fromHex(prefix + numTo32bStr(r));
          const { n } = CURVE;
          const rinv = invert(r, n);
          const u1 = mod(-h * rinv, n);
          const u2 = mod(s * rinv, n);
          const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2);
          if (!Q)
            throw new Error("Cannot recover signature: point at infinify");
          Q.assertValidity();
          return Q;
        }
        toRawBytes(isCompressed = false) {
          return hexToBytes(this.toHex(isCompressed));
        }
        toHex(isCompressed = false) {
          const x = numTo32bStr(this.x);
          if (isCompressed) {
            const prefix = this.y & _1n ? "03" : "02";
            return `${prefix}${x}`;
          } else {
            return `04${x}${numTo32bStr(this.y)}`;
          }
        }
        toHexX() {
          return this.toHex(true).slice(2);
        }
        toRawX() {
          return this.toRawBytes(true).slice(1);
        }
        assertValidity() {
          const msg = "Point is not on elliptic curve";
          const { x, y } = this;
          if (!isValidFieldElement(x) || !isValidFieldElement(y))
            throw new Error(msg);
          const left = mod(y * y);
          const right = weistrass(x);
          if (mod(left - right) !== _0n)
            throw new Error(msg);
        }
        equals(other) {
          return this.x === other.x && this.y === other.y;
        }
        negate() {
          return new Point(this.x, mod(-this.y));
        }
        double() {
          return JacobianPoint.fromAffine(this).double().toAffine();
        }
        add(other) {
          return JacobianPoint.fromAffine(this).add(JacobianPoint.fromAffine(other)).toAffine();
        }
        subtract(other) {
          return this.add(other.negate());
        }
        multiply(scalar) {
          return JacobianPoint.fromAffine(this).multiply(scalar, this).toAffine();
        }
        multiplyAndAddUnsafe(Q, a, b) {
          const P = JacobianPoint.fromAffine(this);
          const aP = P.multiply(a);
          const bQ = JacobianPoint.fromAffine(Q).multiplyUnsafe(b);
          const sum = aP.add(bQ);
          return sum.equals(JacobianPoint.ZERO) ? void 0 : sum.toAffine();
        }
      };
      exports.Point = Point;
      Point.BASE = new Point(CURVE.Gx, CURVE.Gy);
      Point.ZERO = new Point(_0n, _0n);
      function sliceDER(s) {
        return Number.parseInt(s[0], 16) >= 8 ? "00" + s : s;
      }
      function parseDERInt(data) {
        if (data.length < 2 || data[0] !== 2) {
          throw new Error(`Invalid signature integer tag: ${bytesToHex(data)}`);
        }
        const len = data[1];
        const res = data.subarray(2, len + 2);
        if (!len || res.length !== len) {
          throw new Error(`Invalid signature integer: wrong length`);
        }
        if (res[0] === 0 && res[1] <= 127) {
          throw new Error("Invalid signature integer: trailing length");
        }
        return { data: bytesToNumber(res), left: data.subarray(len + 2) };
      }
      function parseDERSignature(data) {
        if (data.length < 2 || data[0] != 48) {
          throw new Error(`Invalid signature tag: ${bytesToHex(data)}`);
        }
        if (data[1] !== data.length - 2) {
          throw new Error("Invalid signature: incorrect length");
        }
        const { data: r, left: sBytes } = parseDERInt(data.subarray(2));
        const { data: s, left: rBytesLeft } = parseDERInt(sBytes);
        if (rBytesLeft.length) {
          throw new Error(`Invalid signature: left bytes after parsing: ${bytesToHex(rBytesLeft)}`);
        }
        return { r, s };
      }
      var Signature = class {
        constructor(r, s) {
          this.r = r;
          this.s = s;
          this.assertValidity();
        }
        static fromCompact(hex) {
          const arr = isUint8a(hex);
          const name = "Signature.fromCompact";
          if (typeof hex !== "string" && !arr)
            throw new TypeError(`${name}: Expected string or Uint8Array`);
          const str = arr ? bytesToHex(hex) : hex;
          if (str.length !== 128)
            throw new Error(`${name}: Expected 64-byte hex`);
          return new Signature(hexToNumber(str.slice(0, 64)), hexToNumber(str.slice(64, 128)));
        }
        static fromDER(hex) {
          const arr = isUint8a(hex);
          if (typeof hex !== "string" && !arr)
            throw new TypeError(`Signature.fromDER: Expected string or Uint8Array`);
          const { r, s } = parseDERSignature(arr ? hex : hexToBytes(hex));
          return new Signature(r, s);
        }
        static fromHex(hex) {
          return this.fromDER(hex);
        }
        assertValidity() {
          const { r, s } = this;
          if (!isWithinCurveOrder(r))
            throw new Error("Invalid Signature: r must be 0 < r < n");
          if (!isWithinCurveOrder(s))
            throw new Error("Invalid Signature: s must be 0 < s < n");
        }
        hasHighS() {
          const HALF = CURVE.n >> _1n;
          return this.s > HALF;
        }
        normalizeS() {
          return this.hasHighS() ? new Signature(this.r, CURVE.n - this.s) : this;
        }
        toDERRawBytes(isCompressed = false) {
          return hexToBytes(this.toDERHex(isCompressed));
        }
        toDERHex(isCompressed = false) {
          const sHex = sliceDER(numberToHexUnpadded(this.s));
          if (isCompressed)
            return sHex;
          const rHex = sliceDER(numberToHexUnpadded(this.r));
          const rLen = numberToHexUnpadded(rHex.length / 2);
          const sLen = numberToHexUnpadded(sHex.length / 2);
          const length = numberToHexUnpadded(rHex.length / 2 + sHex.length / 2 + 4);
          return `30${length}02${rLen}${rHex}02${sLen}${sHex}`;
        }
        toRawBytes() {
          return this.toDERRawBytes();
        }
        toHex() {
          return this.toDERHex();
        }
        toCompactRawBytes() {
          return hexToBytes(this.toCompactHex());
        }
        toCompactHex() {
          return numTo32bStr(this.r) + numTo32bStr(this.s);
        }
      };
      exports.Signature = Signature;
      function concatBytes(...arrays) {
        if (!arrays.every(isUint8a))
          throw new Error("Uint8Array list expected");
        if (arrays.length === 1)
          return arrays[0];
        const length = arrays.reduce((a, arr) => a + arr.length, 0);
        const result = new Uint8Array(length);
        for (let i = 0, pad = 0; i < arrays.length; i++) {
          const arr = arrays[i];
          result.set(arr, pad);
          pad += arr.length;
        }
        return result;
      }
      function isUint8a(bytes) {
        return bytes instanceof Uint8Array;
      }
      var hexes = Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, "0"));
      function bytesToHex(uint8a) {
        if (!(uint8a instanceof Uint8Array))
          throw new Error("Expected Uint8Array");
        let hex = "";
        for (let i = 0; i < uint8a.length; i++) {
          hex += hexes[uint8a[i]];
        }
        return hex;
      }
      function numTo32bStr(num) {
        if (num > POW_2_256)
          throw new Error("Expected number < 2^256");
        return num.toString(16).padStart(64, "0");
      }
      function numTo32b(num) {
        return hexToBytes(numTo32bStr(num));
      }
      function numberToHexUnpadded(num) {
        const hex = num.toString(16);
        return hex.length & 1 ? `0${hex}` : hex;
      }
      function hexToNumber(hex) {
        if (typeof hex !== "string") {
          throw new TypeError("hexToNumber: expected string, got " + typeof hex);
        }
        return BigInt(`0x${hex}`);
      }
      function hexToBytes(hex) {
        if (typeof hex !== "string") {
          throw new TypeError("hexToBytes: expected string, got " + typeof hex);
        }
        if (hex.length % 2)
          throw new Error("hexToBytes: received invalid unpadded hex" + hex.length);
        const array = new Uint8Array(hex.length / 2);
        for (let i = 0; i < array.length; i++) {
          const j = i * 2;
          const hexByte = hex.slice(j, j + 2);
          const byte = Number.parseInt(hexByte, 16);
          if (Number.isNaN(byte) || byte < 0)
            throw new Error("Invalid byte sequence");
          array[i] = byte;
        }
        return array;
      }
      function bytesToNumber(bytes) {
        return hexToNumber(bytesToHex(bytes));
      }
      function ensureBytes(hex) {
        return hex instanceof Uint8Array ? Uint8Array.from(hex) : hexToBytes(hex);
      }
      function normalizeScalar(num) {
        if (typeof num === "number" && Number.isSafeInteger(num) && num > 0)
          return BigInt(num);
        if (typeof num === "bigint" && isWithinCurveOrder(num))
          return num;
        throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n");
      }
      function mod(a, b = CURVE.P) {
        const result = a % b;
        return result >= _0n ? result : b + result;
      }
      function pow2(x, power) {
        const { P } = CURVE;
        let res = x;
        while (power-- > _0n) {
          res *= res;
          res %= P;
        }
        return res;
      }
      function sqrtMod(x) {
        const { P } = CURVE;
        const _6n = BigInt(6);
        const _11n = BigInt(11);
        const _22n = BigInt(22);
        const _23n = BigInt(23);
        const _44n = BigInt(44);
        const _88n = BigInt(88);
        const b2 = x * x * x % P;
        const b3 = b2 * b2 * x % P;
        const b6 = pow2(b3, _3n) * b3 % P;
        const b9 = pow2(b6, _3n) * b3 % P;
        const b11 = pow2(b9, _2n) * b2 % P;
        const b22 = pow2(b11, _11n) * b11 % P;
        const b44 = pow2(b22, _22n) * b22 % P;
        const b88 = pow2(b44, _44n) * b44 % P;
        const b176 = pow2(b88, _88n) * b88 % P;
        const b220 = pow2(b176, _44n) * b44 % P;
        const b223 = pow2(b220, _3n) * b3 % P;
        const t1 = pow2(b223, _23n) * b22 % P;
        const t2 = pow2(t1, _6n) * b2 % P;
        return pow2(t2, _2n);
      }
      function invert(number, modulo = CURVE.P) {
        if (number === _0n || modulo <= _0n) {
          throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
        }
        let a = mod(number, modulo);
        let b = modulo;
        let x = _0n, y = _1n, u = _1n, v = _0n;
        while (a !== _0n) {
          const q = b / a;
          const r = b % a;
          const m = x - u * q;
          const n = y - v * q;
          b = a, a = r, x = u, y = v, u = m, v = n;
        }
        const gcd = b;
        if (gcd !== _1n)
          throw new Error("invert: does not exist");
        return mod(x, modulo);
      }
      function invertBatch(nums, p = CURVE.P) {
        const scratch = new Array(nums.length);
        const lastMultiplied = nums.reduce((acc, num, i) => {
          if (num === _0n)
            return acc;
          scratch[i] = acc;
          return mod(acc * num, p);
        }, _1n);
        const inverted = invert(lastMultiplied, p);
        nums.reduceRight((acc, num, i) => {
          if (num === _0n)
            return acc;
          scratch[i] = mod(acc * scratch[i], p);
          return mod(acc * num, p);
        }, inverted);
        return scratch;
      }
      var divNearest = (a, b) => (a + b / _2n) / b;
      var POW_2_128 = _2n ** BigInt(128);
      function splitScalarEndo(k) {
        const { n } = CURVE;
        const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
        const b1 = -_1n * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
        const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
        const b2 = a1;
        const c1 = divNearest(b2 * k, n);
        const c2 = divNearest(-b1 * k, n);
        let k1 = mod(k - c1 * a1 - c2 * a2, n);
        let k2 = mod(-c1 * b1 - c2 * b2, n);
        const k1neg = k1 > POW_2_128;
        const k2neg = k2 > POW_2_128;
        if (k1neg)
          k1 = n - k1;
        if (k2neg)
          k2 = n - k2;
        if (k1 > POW_2_128 || k2 > POW_2_128) {
          throw new Error("splitScalarEndo: Endomorphism failed, k=" + k);
        }
        return { k1neg, k1, k2neg, k2 };
      }
      function truncateHash(hash) {
        const { n } = CURVE;
        const byteLength = hash.length;
        const delta = byteLength * 8 - 256;
        let h = bytesToNumber(hash);
        if (delta > 0)
          h = h >> BigInt(delta);
        if (h >= n)
          h -= n;
        return h;
      }
      var HmacDrbg = class {
        constructor() {
          this.v = new Uint8Array(32).fill(1);
          this.k = new Uint8Array(32).fill(0);
          this.counter = 0;
        }
        hmac(...values) {
          return exports.utils.hmacSha256(this.k, ...values);
        }
        hmacSync(...values) {
          if (typeof exports.utils.hmacSha256Sync !== "function")
            throw new Error("utils.hmacSha256Sync is undefined, you need to set it");
          const res = exports.utils.hmacSha256Sync(this.k, ...values);
          if (res instanceof Promise)
            throw new Error("To use sync sign(), ensure utils.hmacSha256 is sync");
          return res;
        }
        incr() {
          if (this.counter >= 1e3) {
            throw new Error("Tried 1,000 k values for sign(), all were invalid");
          }
          this.counter += 1;
        }
        async reseed(seed = new Uint8Array()) {
          this.k = await this.hmac(this.v, Uint8Array.from([0]), seed);
          this.v = await this.hmac(this.v);
          if (seed.length === 0)
            return;
          this.k = await this.hmac(this.v, Uint8Array.from([1]), seed);
          this.v = await this.hmac(this.v);
        }
        reseedSync(seed = new Uint8Array()) {
          this.k = this.hmacSync(this.v, Uint8Array.from([0]), seed);
          this.v = this.hmacSync(this.v);
          if (seed.length === 0)
            return;
          this.k = this.hmacSync(this.v, Uint8Array.from([1]), seed);
          this.v = this.hmacSync(this.v);
        }
        async generate() {
          this.incr();
          this.v = await this.hmac(this.v);
          return this.v;
        }
        generateSync() {
          this.incr();
          this.v = this.hmacSync(this.v);
          return this.v;
        }
      };
      function isWithinCurveOrder(num) {
        return _0n < num && num < CURVE.n;
      }
      function isValidFieldElement(num) {
        return _0n < num && num < CURVE.P;
      }
      function kmdToSig(kBytes, m, d) {
        const k = bytesToNumber(kBytes);
        if (!isWithinCurveOrder(k))
          return;
        const { n } = CURVE;
        const q = Point.BASE.multiply(k);
        const r = mod(q.x, n);
        if (r === _0n)
          return;
        const s = mod(invert(k, n) * mod(m + d * r, n), n);
        if (s === _0n)
          return;
        const sig = new Signature(r, s);
        const recovery = (q.x === sig.r ? 0 : 2) | Number(q.y & _1n);
        return { sig, recovery };
      }
      function normalizePrivateKey(key) {
        let num;
        if (typeof key === "bigint") {
          num = key;
        } else if (typeof key === "number" && Number.isSafeInteger(key) && key > 0) {
          num = BigInt(key);
        } else if (typeof key === "string") {
          if (key.length !== 64)
            throw new Error("Expected 32 bytes of private key");
          num = hexToNumber(key);
        } else if (isUint8a(key)) {
          if (key.length !== 32)
            throw new Error("Expected 32 bytes of private key");
          num = bytesToNumber(key);
        } else {
          throw new TypeError("Expected valid private key");
        }
        if (!isWithinCurveOrder(num))
          throw new Error("Expected private key: 0 < key < n");
        return num;
      }
      function normalizePublicKey(publicKey) {
        if (publicKey instanceof Point) {
          publicKey.assertValidity();
          return publicKey;
        } else {
          return Point.fromHex(publicKey);
        }
      }
      function normalizeSignature(signature) {
        if (signature instanceof Signature) {
          signature.assertValidity();
          return signature;
        }
        try {
          return Signature.fromDER(signature);
        } catch (error) {
          return Signature.fromCompact(signature);
        }
      }
      function getPublicKey(privateKey, isCompressed = false) {
        return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
      }
      exports.getPublicKey = getPublicKey;
      function recoverPublicKey(msgHash, signature, recovery, isCompressed = false) {
        return Point.fromSignature(msgHash, signature, recovery).toRawBytes(isCompressed);
      }
      exports.recoverPublicKey = recoverPublicKey;
      function isPub(item) {
        const arr = isUint8a(item);
        const str = typeof item === "string";
        const len = (arr || str) && item.length;
        if (arr)
          return len === 33 || len === 65;
        if (str)
          return len === 66 || len === 130;
        if (item instanceof Point)
          return true;
        return false;
      }
      function getSharedSecret(privateA, publicB, isCompressed = false) {
        if (isPub(privateA))
          throw new TypeError("getSharedSecret: first arg must be private key");
        if (!isPub(publicB))
          throw new TypeError("getSharedSecret: second arg must be public key");
        const b = normalizePublicKey(publicB);
        b.assertValidity();
        return b.multiply(normalizePrivateKey(privateA)).toRawBytes(isCompressed);
      }
      exports.getSharedSecret = getSharedSecret;
      function bits2int(bytes) {
        const slice = bytes.length > 32 ? bytes.slice(0, 32) : bytes;
        return bytesToNumber(slice);
      }
      function bits2octets(bytes) {
        const z1 = bits2int(bytes);
        const z2 = mod(z1, CURVE.n);
        return int2octets(z2 < _0n ? z1 : z2);
      }
      function int2octets(num) {
        if (typeof num !== "bigint")
          throw new Error("Expected bigint");
        const hex = numTo32bStr(num);
        return hexToBytes(hex);
      }
      function initSigArgs(msgHash, privateKey, extraEntropy) {
        if (msgHash == null)
          throw new Error(`sign: expected valid message hash, not "${msgHash}"`);
        const h1 = ensureBytes(msgHash);
        const d = normalizePrivateKey(privateKey);
        const seedArgs = [int2octets(d), bits2octets(h1)];
        if (extraEntropy != null) {
          if (extraEntropy === true)
            extraEntropy = exports.utils.randomBytes(32);
          const e = ensureBytes(extraEntropy);
          if (e.length !== 32)
            throw new Error("sign: Expected 32 bytes of extra data");
          seedArgs.push(e);
        }
        const seed = concatBytes(...seedArgs);
        const m = bits2int(h1);
        return { seed, m, d };
      }
      function finalizeSig(recSig, opts) {
        let { sig, recovery } = recSig;
        const { canonical, der, recovered } = Object.assign({ canonical: true, der: true }, opts);
        if (canonical && sig.hasHighS()) {
          sig = sig.normalizeS();
          recovery ^= 1;
        }
        const hashed = der ? sig.toDERRawBytes() : sig.toCompactRawBytes();
        return recovered ? [hashed, recovery] : hashed;
      }
      async function sign(msgHash, privKey, opts = {}) {
        const { seed, m, d } = initSigArgs(msgHash, privKey, opts.extraEntropy);
        let sig;
        const drbg = new HmacDrbg();
        await drbg.reseed(seed);
        while (!(sig = kmdToSig(await drbg.generate(), m, d)))
          await drbg.reseed();
        return finalizeSig(sig, opts);
      }
      exports.sign = sign;
      function signSync(msgHash, privKey, opts = {}) {
        const { seed, m, d } = initSigArgs(msgHash, privKey, opts.extraEntropy);
        let sig;
        const drbg = new HmacDrbg();
        drbg.reseedSync(seed);
        while (!(sig = kmdToSig(drbg.generateSync(), m, d)))
          drbg.reseedSync();
        return finalizeSig(sig, opts);
      }
      exports.signSync = signSync;
      var vopts = { strict: true };
      function verify(signature, msgHash, publicKey, opts = vopts) {
        let sig;
        try {
          sig = normalizeSignature(signature);
          msgHash = ensureBytes(msgHash);
        } catch (error) {
          return false;
        }
        const { r, s } = sig;
        if (opts.strict && sig.hasHighS())
          return false;
        const h = truncateHash(msgHash);
        if (h === _0n)
          return false;
        let P;
        try {
          P = normalizePublicKey(publicKey);
        } catch (error) {
          return false;
        }
        const { n } = CURVE;
        const sinv = invert(s, n);
        const u1 = mod(h * sinv, n);
        const u2 = mod(r * sinv, n);
        const R = Point.BASE.multiplyAndAddUnsafe(P, u1, u2);
        if (!R)
          return false;
        const v = mod(R.x, n);
        return v === r;
      }
      exports.verify = verify;
      async function taggedHash(tag, ...messages) {
        const tagB = new Uint8Array(tag.split("").map((c) => c.charCodeAt(0)));
        const tagH = await exports.utils.sha256(tagB);
        const h = await exports.utils.sha256(concatBytes(tagH, tagH, ...messages));
        return bytesToNumber(h);
      }
      async function createChallenge(x, P, message) {
        const rx = numTo32b(x);
        const t = await taggedHash("BIP0340/challenge", rx, P.toRawX(), message);
        return mod(t, CURVE.n);
      }
      function hasEvenY(point) {
        return (point.y & _1n) === _0n;
      }
      var SchnorrSignature = class {
        constructor(r, s) {
          this.r = r;
          this.s = s;
          this.assertValidity();
        }
        static fromHex(hex) {
          const bytes = ensureBytes(hex);
          if (bytes.length !== 64)
            throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${bytes.length}`);
          const r = bytesToNumber(bytes.subarray(0, 32));
          const s = bytesToNumber(bytes.subarray(32, 64));
          return new SchnorrSignature(r, s);
        }
        assertValidity() {
          const { r, s } = this;
          if (!isValidFieldElement(r) || !isWithinCurveOrder(s))
            throw new Error("Invalid signature");
        }
        toHex() {
          return numTo32bStr(this.r) + numTo32bStr(this.s);
        }
        toRawBytes() {
          return hexToBytes(this.toHex());
        }
      };
      function schnorrGetPublicKey(privateKey) {
        return Point.fromPrivateKey(privateKey).toRawX();
      }
      async function schnorrSign(message, privateKey, auxRand = exports.utils.randomBytes()) {
        if (message == null)
          throw new TypeError(`sign: Expected valid message, not "${message}"`);
        const { n } = CURVE;
        const m = ensureBytes(message);
        const d0 = normalizePrivateKey(privateKey);
        const rand = ensureBytes(auxRand);
        if (rand.length !== 32)
          throw new TypeError("sign: Expected 32 bytes of aux randomness");
        const P = Point.fromPrivateKey(d0);
        const d = hasEvenY(P) ? d0 : n - d0;
        const t0h = await taggedHash("BIP0340/aux", rand);
        const t = d ^ t0h;
        const k0h = await taggedHash("BIP0340/nonce", numTo32b(t), P.toRawX(), m);
        const k0 = mod(k0h, n);
        if (k0 === _0n)
          throw new Error("sign: Creation of signature failed. k is zero");
        const R = Point.fromPrivateKey(k0);
        const k = hasEvenY(R) ? k0 : n - k0;
        const e = await createChallenge(R.x, P, m);
        const sig = new SchnorrSignature(R.x, mod(k + e * d, n)).toRawBytes();
        const isValid = await schnorrVerify(sig, m, P.toRawX());
        if (!isValid)
          throw new Error("sign: Invalid signature produced");
        return sig;
      }
      async function schnorrVerify(signature, message, publicKey) {
        const raw = signature instanceof SchnorrSignature;
        let sig;
        try {
          sig = raw ? signature : SchnorrSignature.fromHex(signature);
          if (raw)
            sig.assertValidity();
        } catch (error) {
          return false;
        }
        const { r, s } = sig;
        const m = ensureBytes(message);
        let P;
        try {
          P = normalizePublicKey(publicKey);
        } catch (error) {
          return false;
        }
        const e = await createChallenge(r, P, m);
        const R = Point.BASE.multiplyAndAddUnsafe(P, normalizePrivateKey(s), mod(-e, CURVE.n));
        if (!R || !hasEvenY(R) || R.x !== r)
          return false;
        return true;
      }
      exports.schnorr = {
        Signature: SchnorrSignature,
        getPublicKey: schnorrGetPublicKey,
        sign: schnorrSign,
        verify: schnorrVerify
      };
      Point.BASE._setWindowSize(8);
      var crypto = {
        node: crypto_1.default,
        web: typeof self === "object" && "crypto" in self ? self.crypto : void 0
      };
      exports.utils = {
        isValidPrivateKey(privateKey) {
          try {
            normalizePrivateKey(privateKey);
            return true;
          } catch (error) {
            return false;
          }
        },
        hashToPrivateKey: (hash) => {
          hash = ensureBytes(hash);
          if (hash.length < 40 || hash.length > 1024)
            throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
          const num = mod(bytesToNumber(hash), CURVE.n);
          if (num === _0n || num === _1n)
            throw new Error("Invalid private key");
          return numTo32b(num);
        },
        randomBytes: (bytesLength = 32) => {
          if (crypto.web) {
            return crypto.web.getRandomValues(new Uint8Array(bytesLength));
          } else if (crypto.node) {
            const { randomBytes } = crypto.node;
            return Uint8Array.from(randomBytes(bytesLength));
          } else {
            throw new Error("The environment doesn't have randomBytes function");
          }
        },
        randomPrivateKey: () => {
          return exports.utils.hashToPrivateKey(exports.utils.randomBytes(40));
        },
        bytesToHex,
        mod,
        sha256: async (message) => {
          if (crypto.web) {
            const buffer = await crypto.web.subtle.digest("SHA-256", message.buffer);
            return new Uint8Array(buffer);
          } else if (crypto.node) {
            const { createHash } = crypto.node;
            return Uint8Array.from(createHash("sha256").update(message).digest());
          } else {
            throw new Error("The environment doesn't have sha256 function");
          }
        },
        hmacSha256: async (key, ...messages) => {
          if (crypto.web) {
            const ckey = await crypto.web.subtle.importKey("raw", key, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]);
            const message = concatBytes(...messages);
            const buffer = await crypto.web.subtle.sign("HMAC", ckey, message);
            return new Uint8Array(buffer);
          } else if (crypto.node) {
            const { createHmac } = crypto.node;
            const hash = createHmac("sha256", key);
            messages.forEach((m) => hash.update(m));
            return Uint8Array.from(hash.digest());
          } else {
            throw new Error("The environment doesn't have hmac-sha256 function");
          }
        },
        sha256Sync: void 0,
        hmacSha256Sync: void 0,
        precompute(windowSize = 8, point = Point.BASE) {
          const cached = point === Point.BASE ? point : new Point(point.x, point.y);
          cached._setWindowSize(windowSize);
          cached.multiply(_3n);
          return cached;
        }
      };
    }
  });

  // node_modules/@noble/hashes/cryptoBrowser.js
  var require_cryptoBrowser = __commonJS({
    "node_modules/@noble/hashes/cryptoBrowser.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.crypto = void 0;
      exports.crypto = {
        node: void 0,
        web: typeof self === "object" && "crypto" in self ? self.crypto : void 0
      };
    }
  });

  // node_modules/@noble/hashes/utils.js
  var require_utils = __commonJS({
    "node_modules/@noble/hashes/utils.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.randomBytes = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.assertHash = exports.assertBytes = exports.assertBool = exports.assertNumber = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.isLE = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
      var crypto_1 = require_cryptoBrowser();
      var u8 = (arr) => new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
      exports.u8 = u8;
      var u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
      exports.u32 = u32;
      var createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
      exports.createView = createView;
      var rotr = (word, shift) => word << 32 - shift | word >>> shift;
      exports.rotr = rotr;
      exports.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
      if (!exports.isLE)
        throw new Error("Non little-endian hardware is not supported");
      var hexes = Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, "0"));
      function bytesToHex(uint8a) {
        let hex = "";
        for (let i = 0; i < uint8a.length; i++) {
          hex += hexes[uint8a[i]];
        }
        return hex;
      }
      exports.bytesToHex = bytesToHex;
      function hexToBytes(hex) {
        if (typeof hex !== "string") {
          throw new TypeError("hexToBytes: expected string, got " + typeof hex);
        }
        if (hex.length % 2)
          throw new Error("hexToBytes: received invalid unpadded hex");
        const array = new Uint8Array(hex.length / 2);
        for (let i = 0; i < array.length; i++) {
          const j = i * 2;
          const hexByte = hex.slice(j, j + 2);
          const byte = Number.parseInt(hexByte, 16);
          if (Number.isNaN(byte))
            throw new Error("Invalid byte sequence");
          array[i] = byte;
        }
        return array;
      }
      exports.hexToBytes = hexToBytes;
      exports.nextTick = (() => {
        const nodeRequire = typeof module !== "undefined" && typeof module.require === "function" && module.require.bind(module);
        try {
          if (nodeRequire) {
            const { setImmediate } = nodeRequire("timers");
            return () => new Promise((resolve) => setImmediate(resolve));
          }
        } catch (e) {
        }
        return () => new Promise((resolve) => setTimeout(resolve, 0));
      })();
      async function asyncLoop(iters, tick, cb) {
        let ts = Date.now();
        for (let i = 0; i < iters; i++) {
          cb(i);
          const diff = Date.now() - ts;
          if (diff >= 0 && diff < tick)
            continue;
          await (0, exports.nextTick)();
          ts += diff;
        }
      }
      exports.asyncLoop = asyncLoop;
      function utf8ToBytes(str) {
        if (typeof str !== "string") {
          throw new TypeError(`utf8ToBytes expected string, got ${typeof str}`);
        }
        return new TextEncoder().encode(str);
      }
      exports.utf8ToBytes = utf8ToBytes;
      function toBytes(data) {
        if (typeof data === "string")
          data = utf8ToBytes(data);
        if (!(data instanceof Uint8Array))
          throw new TypeError(`Expected input type is Uint8Array (got ${typeof data})`);
        return data;
      }
      exports.toBytes = toBytes;
      function concatBytes(...arrays) {
        if (!arrays.every((a) => a instanceof Uint8Array))
          throw new Error("Uint8Array list expected");
        if (arrays.length === 1)
          return arrays[0];
        const length = arrays.reduce((a, arr) => a + arr.length, 0);
        const result = new Uint8Array(length);
        for (let i = 0, pad = 0; i < arrays.length; i++) {
          const arr = arrays[i];
          result.set(arr, pad);
          pad += arr.length;
        }
        return result;
      }
      exports.concatBytes = concatBytes;
      function assertNumber(n) {
        if (!Number.isSafeInteger(n) || n < 0)
          throw new Error(`Wrong positive integer: ${n}`);
      }
      exports.assertNumber = assertNumber;
      function assertBool(b) {
        if (typeof b !== "boolean") {
          throw new Error(`Expected boolean, not ${b}`);
        }
      }
      exports.assertBool = assertBool;
      function assertBytes(bytes, ...lengths) {
        if (bytes instanceof Uint8Array && (!lengths.length || lengths.includes(bytes.length))) {
          return;
        }
        throw new TypeError(`Expected ${lengths} bytes, not ${typeof bytes} with length=${bytes.length}`);
      }
      exports.assertBytes = assertBytes;
      function assertHash(hash) {
        if (typeof hash !== "function" || typeof hash.create !== "function")
          throw new Error("Hash should be wrapped by utils.wrapConstructor");
        assertNumber(hash.outputLen);
        assertNumber(hash.blockLen);
      }
      exports.assertHash = assertHash;
      var Hash = class {
        clone() {
          return this._cloneInto();
        }
      };
      exports.Hash = Hash;
      var isPlainObject = (obj) => Object.prototype.toString.call(obj) === "[object Object]" && obj.constructor === Object;
      function checkOpts(def, _opts) {
        if (_opts !== void 0 && (typeof _opts !== "object" || !isPlainObject(_opts)))
          throw new TypeError("Options should be object or undefined");
        const opts = Object.assign(def, _opts);
        return opts;
      }
      exports.checkOpts = checkOpts;
      function wrapConstructor(hashConstructor) {
        const hashC = (message) => hashConstructor().update(toBytes(message)).digest();
        const tmp = hashConstructor();
        hashC.outputLen = tmp.outputLen;
        hashC.blockLen = tmp.blockLen;
        hashC.create = () => hashConstructor();
        return hashC;
      }
      exports.wrapConstructor = wrapConstructor;
      function wrapConstructorWithOpts(hashCons) {
        const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
        const tmp = hashCons({});
        hashC.outputLen = tmp.outputLen;
        hashC.blockLen = tmp.blockLen;
        hashC.create = (opts) => hashCons(opts);
        return hashC;
      }
      exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
      function randomBytes(bytesLength = 32) {
        if (crypto_1.crypto.web) {
          return crypto_1.crypto.web.getRandomValues(new Uint8Array(bytesLength));
        } else if (crypto_1.crypto.node) {
          return new Uint8Array(crypto_1.crypto.node.randomBytes(bytesLength).buffer);
        } else {
          throw new Error("The environment doesn't have randomBytes function");
        }
      }
      exports.randomBytes = randomBytes;
    }
  });

  // node_modules/@noble/hashes/hmac.js
  var require_hmac = __commonJS({
    "node_modules/@noble/hashes/hmac.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.hmac = void 0;
      var utils_js_1 = require_utils();
      var HMAC = class extends utils_js_1.Hash {
        constructor(hash, _key) {
          super();
          this.finished = false;
          this.destroyed = false;
          (0, utils_js_1.assertHash)(hash);
          const key = (0, utils_js_1.toBytes)(_key);
          this.iHash = hash.create();
          if (!(this.iHash instanceof utils_js_1.Hash))
            throw new TypeError("Expected instance of class which extends utils.Hash");
          const blockLen = this.blockLen = this.iHash.blockLen;
          this.outputLen = this.iHash.outputLen;
          const pad = new Uint8Array(blockLen);
          pad.set(key.length > this.iHash.blockLen ? hash.create().update(key).digest() : key);
          for (let i = 0; i < pad.length; i++)
            pad[i] ^= 54;
          this.iHash.update(pad);
          this.oHash = hash.create();
          for (let i = 0; i < pad.length; i++)
            pad[i] ^= 54 ^ 92;
          this.oHash.update(pad);
          pad.fill(0);
        }
        update(buf) {
          if (this.destroyed)
            throw new Error("instance is destroyed");
          this.iHash.update(buf);
          return this;
        }
        digestInto(out) {
          if (this.destroyed)
            throw new Error("instance is destroyed");
          if (!(out instanceof Uint8Array) || out.length !== this.outputLen)
            throw new Error("HMAC: Invalid output buffer");
          if (this.finished)
            throw new Error("digest() was already called");
          this.finished = true;
          this.iHash.digestInto(out);
          this.oHash.update(out);
          this.oHash.digestInto(out);
          this.destroy();
        }
        digest() {
          const out = new Uint8Array(this.oHash.outputLen);
          this.digestInto(out);
          return out;
        }
        _cloneInto(to) {
          to || (to = Object.create(Object.getPrototypeOf(this), {}));
          const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
          to = to;
          to.finished = finished;
          to.destroyed = destroyed;
          to.blockLen = blockLen;
          to.outputLen = outputLen;
          to.oHash = oHash._cloneInto(to.oHash);
          to.iHash = iHash._cloneInto(to.iHash);
          return to;
        }
        destroy() {
          this.destroyed = true;
          this.oHash.destroy();
          this.iHash.destroy();
        }
      };
      var hmac = (hash, key, message) => new HMAC(hash, key).update(message).digest();
      exports.hmac = hmac;
      exports.hmac.create = (hash, key) => new HMAC(hash, key);
    }
  });

  // node_modules/@noble/hashes/_sha2.js
  var require_sha2 = __commonJS({
    "node_modules/@noble/hashes/_sha2.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SHA2 = void 0;
      var utils_js_1 = require_utils();
      function setBigUint64(view, byteOffset, value, isLE) {
        if (typeof view.setBigUint64 === "function")
          return view.setBigUint64(byteOffset, value, isLE);
        const _32n = BigInt(32);
        const _u32_max = BigInt(4294967295);
        const wh = Number(value >> _32n & _u32_max);
        const wl = Number(value & _u32_max);
        const h = isLE ? 4 : 0;
        const l = isLE ? 0 : 4;
        view.setUint32(byteOffset + h, wh, isLE);
        view.setUint32(byteOffset + l, wl, isLE);
      }
      var SHA2 = class extends utils_js_1.Hash {
        constructor(blockLen, outputLen, padOffset, isLE) {
          super();
          this.blockLen = blockLen;
          this.outputLen = outputLen;
          this.padOffset = padOffset;
          this.isLE = isLE;
          this.finished = false;
          this.length = 0;
          this.pos = 0;
          this.destroyed = false;
          this.buffer = new Uint8Array(blockLen);
          this.view = (0, utils_js_1.createView)(this.buffer);
        }
        update(data) {
          if (this.destroyed)
            throw new Error("instance is destroyed");
          const { view, buffer, blockLen, finished } = this;
          if (finished)
            throw new Error("digest() was already called");
          data = (0, utils_js_1.toBytes)(data);
          const len = data.length;
          for (let pos = 0; pos < len; ) {
            const take = Math.min(blockLen - this.pos, len - pos);
            if (take === blockLen) {
              const dataView = (0, utils_js_1.createView)(data);
              for (; blockLen <= len - pos; pos += blockLen)
                this.process(dataView, pos);
              continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
              this.process(view, 0);
              this.pos = 0;
            }
          }
          this.length += data.length;
          this.roundClean();
          return this;
        }
        digestInto(out) {
          if (this.destroyed)
            throw new Error("instance is destroyed");
          if (!(out instanceof Uint8Array) || out.length < this.outputLen)
            throw new Error("_Sha2: Invalid output buffer");
          if (this.finished)
            throw new Error("digest() was already called");
          this.finished = true;
          const { buffer, view, blockLen, isLE } = this;
          let { pos } = this;
          buffer[pos++] = 128;
          this.buffer.subarray(pos).fill(0);
          if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
          }
          for (let i = pos; i < blockLen; i++)
            buffer[i] = 0;
          setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
          this.process(view, 0);
          const oview = (0, utils_js_1.createView)(out);
          this.get().forEach((v, i) => oview.setUint32(4 * i, v, isLE));
        }
        digest() {
          const { buffer, outputLen } = this;
          this.digestInto(buffer);
          const res = buffer.slice(0, outputLen);
          this.destroy();
          return res;
        }
        _cloneInto(to) {
          to || (to = new this.constructor());
          to.set(...this.get());
          const { blockLen, buffer, length, finished, destroyed, pos } = this;
          to.length = length;
          to.pos = pos;
          to.finished = finished;
          to.destroyed = destroyed;
          if (length % blockLen)
            to.buffer.set(buffer);
          return to;
        }
      };
      exports.SHA2 = SHA2;
    }
  });

  // node_modules/@noble/hashes/sha256.js
  var require_sha256 = __commonJS({
    "node_modules/@noble/hashes/sha256.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.sha256 = void 0;
      var _sha2_js_1 = require_sha2();
      var utils_js_1 = require_utils();
      var Chi = (a, b, c) => a & b ^ ~a & c;
      var Maj = (a, b, c) => a & b ^ a & c ^ b & c;
      var SHA256_K = new Uint32Array([
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ]);
      var IV = new Uint32Array([
        1779033703,
        3144134277,
        1013904242,
        2773480762,
        1359893119,
        2600822924,
        528734635,
        1541459225
      ]);
      var SHA256_W = new Uint32Array(64);
      var SHA256 = class extends _sha2_js_1.SHA2 {
        constructor() {
          super(64, 32, 8, false);
          this.A = IV[0] | 0;
          this.B = IV[1] | 0;
          this.C = IV[2] | 0;
          this.D = IV[3] | 0;
          this.E = IV[4] | 0;
          this.F = IV[5] | 0;
          this.G = IV[6] | 0;
          this.H = IV[7] | 0;
        }
        get() {
          const { A, B, C, D, E, F, G, H } = this;
          return [A, B, C, D, E, F, G, H];
        }
        set(A, B, C, D, E, F, G, H) {
          this.A = A | 0;
          this.B = B | 0;
          this.C = C | 0;
          this.D = D | 0;
          this.E = E | 0;
          this.F = F | 0;
          this.G = G | 0;
          this.H = H | 0;
        }
        process(view, offset) {
          for (let i = 0; i < 16; i++, offset += 4)
            SHA256_W[i] = view.getUint32(offset, false);
          for (let i = 16; i < 64; i++) {
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0, utils_js_1.rotr)(W15, 7) ^ (0, utils_js_1.rotr)(W15, 18) ^ W15 >>> 3;
            const s1 = (0, utils_js_1.rotr)(W2, 17) ^ (0, utils_js_1.rotr)(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
          }
          let { A, B, C, D, E, F, G, H } = this;
          for (let i = 0; i < 64; i++) {
            const sigma1 = (0, utils_js_1.rotr)(E, 6) ^ (0, utils_js_1.rotr)(E, 11) ^ (0, utils_js_1.rotr)(E, 25);
            const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = (0, utils_js_1.rotr)(A, 2) ^ (0, utils_js_1.rotr)(A, 13) ^ (0, utils_js_1.rotr)(A, 22);
            const T2 = sigma0 + Maj(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
          }
          A = A + this.A | 0;
          B = B + this.B | 0;
          C = C + this.C | 0;
          D = D + this.D | 0;
          E = E + this.E | 0;
          F = F + this.F | 0;
          G = G + this.G | 0;
          H = H + this.H | 0;
          this.set(A, B, C, D, E, F, G, H);
        }
        roundClean() {
          SHA256_W.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0);
          this.buffer.fill(0);
        }
      };
      exports.sha256 = (0, utils_js_1.wrapConstructor)(() => new SHA256());
    }
  });

  // node_modules/@noble/hashes/_u64.js
  var require_u64 = __commonJS({
    "node_modules/@noble/hashes/_u64.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.add5H = exports.add5L = exports.add4H = exports.add4L = exports.add3H = exports.add3L = exports.add = exports.rotlBL = exports.rotlBH = exports.rotlSL = exports.rotlSH = exports.rotr32L = exports.rotr32H = exports.rotrBL = exports.rotrBH = exports.rotrSL = exports.rotrSH = exports.shrSL = exports.shrSH = exports.toBig = exports.split = exports.fromBig = void 0;
      var U32_MASK64 = BigInt(2 ** 32 - 1);
      var _32n = BigInt(32);
      function fromBig(n, le = false) {
        if (le)
          return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
        return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
      }
      exports.fromBig = fromBig;
      function split(lst, le = false) {
        let Ah = new Uint32Array(lst.length);
        let Al = new Uint32Array(lst.length);
        for (let i = 0; i < lst.length; i++) {
          const { h, l } = fromBig(lst[i], le);
          [Ah[i], Al[i]] = [h, l];
        }
        return [Ah, Al];
      }
      exports.split = split;
      var toBig = (h, l) => BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
      exports.toBig = toBig;
      var shrSH = (h, l, s) => h >>> s;
      exports.shrSH = shrSH;
      var shrSL = (h, l, s) => h << 32 - s | l >>> s;
      exports.shrSL = shrSL;
      var rotrSH = (h, l, s) => h >>> s | l << 32 - s;
      exports.rotrSH = rotrSH;
      var rotrSL = (h, l, s) => h << 32 - s | l >>> s;
      exports.rotrSL = rotrSL;
      var rotrBH = (h, l, s) => h << 64 - s | l >>> s - 32;
      exports.rotrBH = rotrBH;
      var rotrBL = (h, l, s) => h >>> s - 32 | l << 64 - s;
      exports.rotrBL = rotrBL;
      var rotr32H = (h, l) => l;
      exports.rotr32H = rotr32H;
      var rotr32L = (h, l) => h;
      exports.rotr32L = rotr32L;
      var rotlSH = (h, l, s) => h << s | l >>> 32 - s;
      exports.rotlSH = rotlSH;
      var rotlSL = (h, l, s) => l << s | h >>> 32 - s;
      exports.rotlSL = rotlSL;
      var rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
      exports.rotlBH = rotlBH;
      var rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
      exports.rotlBL = rotlBL;
      function add(Ah, Al, Bh, Bl) {
        const l = (Al >>> 0) + (Bl >>> 0);
        return { h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0 };
      }
      exports.add = add;
      var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
      exports.add3L = add3L;
      var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
      exports.add3H = add3H;
      var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
      exports.add4L = add4L;
      var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
      exports.add4H = add4H;
      var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
      exports.add5L = add5L;
      var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
      exports.add5H = add5H;
    }
  });

  // node_modules/@noble/hashes/sha512.js
  var require_sha512 = __commonJS({
    "node_modules/@noble/hashes/sha512.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.sha384 = exports.sha512_256 = exports.sha512 = exports.SHA512 = void 0;
      var _sha2_js_1 = require_sha2();
      var u64 = __importStar(require_u64());
      var utils_js_1 = require_utils();
      var [SHA512_Kh, SHA512_Kl] = u64.split([
        "0x428a2f98d728ae22",
        "0x7137449123ef65cd",
        "0xb5c0fbcfec4d3b2f",
        "0xe9b5dba58189dbbc",
        "0x3956c25bf348b538",
        "0x59f111f1b605d019",
        "0x923f82a4af194f9b",
        "0xab1c5ed5da6d8118",
        "0xd807aa98a3030242",
        "0x12835b0145706fbe",
        "0x243185be4ee4b28c",
        "0x550c7dc3d5ffb4e2",
        "0x72be5d74f27b896f",
        "0x80deb1fe3b1696b1",
        "0x9bdc06a725c71235",
        "0xc19bf174cf692694",
        "0xe49b69c19ef14ad2",
        "0xefbe4786384f25e3",
        "0x0fc19dc68b8cd5b5",
        "0x240ca1cc77ac9c65",
        "0x2de92c6f592b0275",
        "0x4a7484aa6ea6e483",
        "0x5cb0a9dcbd41fbd4",
        "0x76f988da831153b5",
        "0x983e5152ee66dfab",
        "0xa831c66d2db43210",
        "0xb00327c898fb213f",
        "0xbf597fc7beef0ee4",
        "0xc6e00bf33da88fc2",
        "0xd5a79147930aa725",
        "0x06ca6351e003826f",
        "0x142929670a0e6e70",
        "0x27b70a8546d22ffc",
        "0x2e1b21385c26c926",
        "0x4d2c6dfc5ac42aed",
        "0x53380d139d95b3df",
        "0x650a73548baf63de",
        "0x766a0abb3c77b2a8",
        "0x81c2c92e47edaee6",
        "0x92722c851482353b",
        "0xa2bfe8a14cf10364",
        "0xa81a664bbc423001",
        "0xc24b8b70d0f89791",
        "0xc76c51a30654be30",
        "0xd192e819d6ef5218",
        "0xd69906245565a910",
        "0xf40e35855771202a",
        "0x106aa07032bbd1b8",
        "0x19a4c116b8d2d0c8",
        "0x1e376c085141ab53",
        "0x2748774cdf8eeb99",
        "0x34b0bcb5e19b48a8",
        "0x391c0cb3c5c95a63",
        "0x4ed8aa4ae3418acb",
        "0x5b9cca4f7763e373",
        "0x682e6ff3d6b2b8a3",
        "0x748f82ee5defb2fc",
        "0x78a5636f43172f60",
        "0x84c87814a1f0ab72",
        "0x8cc702081a6439ec",
        "0x90befffa23631e28",
        "0xa4506cebde82bde9",
        "0xbef9a3f7b2c67915",
        "0xc67178f2e372532b",
        "0xca273eceea26619c",
        "0xd186b8c721c0c207",
        "0xeada7dd6cde0eb1e",
        "0xf57d4f7fee6ed178",
        "0x06f067aa72176fba",
        "0x0a637dc5a2c898a6",
        "0x113f9804bef90dae",
        "0x1b710b35131c471b",
        "0x28db77f523047d84",
        "0x32caab7b40c72493",
        "0x3c9ebe0a15c9bebc",
        "0x431d67c49c100d4c",
        "0x4cc5d4becb3e42b6",
        "0x597f299cfc657e2a",
        "0x5fcb6fab3ad6faec",
        "0x6c44198c4a475817"
      ].map((n) => BigInt(n)));
      var SHA512_W_H = new Uint32Array(80);
      var SHA512_W_L = new Uint32Array(80);
      var SHA512 = class extends _sha2_js_1.SHA2 {
        constructor() {
          super(128, 64, 16, false);
          this.Ah = 1779033703 | 0;
          this.Al = 4089235720 | 0;
          this.Bh = 3144134277 | 0;
          this.Bl = 2227873595 | 0;
          this.Ch = 1013904242 | 0;
          this.Cl = 4271175723 | 0;
          this.Dh = 2773480762 | 0;
          this.Dl = 1595750129 | 0;
          this.Eh = 1359893119 | 0;
          this.El = 2917565137 | 0;
          this.Fh = 2600822924 | 0;
          this.Fl = 725511199 | 0;
          this.Gh = 528734635 | 0;
          this.Gl = 4215389547 | 0;
          this.Hh = 1541459225 | 0;
          this.Hl = 327033209 | 0;
        }
        get() {
          const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
          return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
        }
        set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
          this.Ah = Ah | 0;
          this.Al = Al | 0;
          this.Bh = Bh | 0;
          this.Bl = Bl | 0;
          this.Ch = Ch | 0;
          this.Cl = Cl | 0;
          this.Dh = Dh | 0;
          this.Dl = Dl | 0;
          this.Eh = Eh | 0;
          this.El = El | 0;
          this.Fh = Fh | 0;
          this.Fl = Fl | 0;
          this.Gh = Gh | 0;
          this.Gl = Gl | 0;
          this.Hh = Hh | 0;
          this.Hl = Hl | 0;
        }
        process(view, offset) {
          for (let i = 0; i < 16; i++, offset += 4) {
            SHA512_W_H[i] = view.getUint32(offset);
            SHA512_W_L[i] = view.getUint32(offset += 4);
          }
          for (let i = 16; i < 80; i++) {
            const W15h = SHA512_W_H[i - 15] | 0;
            const W15l = SHA512_W_L[i - 15] | 0;
            const s0h = u64.rotrSH(W15h, W15l, 1) ^ u64.rotrSH(W15h, W15l, 8) ^ u64.shrSH(W15h, W15l, 7);
            const s0l = u64.rotrSL(W15h, W15l, 1) ^ u64.rotrSL(W15h, W15l, 8) ^ u64.shrSL(W15h, W15l, 7);
            const W2h = SHA512_W_H[i - 2] | 0;
            const W2l = SHA512_W_L[i - 2] | 0;
            const s1h = u64.rotrSH(W2h, W2l, 19) ^ u64.rotrBH(W2h, W2l, 61) ^ u64.shrSH(W2h, W2l, 6);
            const s1l = u64.rotrSL(W2h, W2l, 19) ^ u64.rotrBL(W2h, W2l, 61) ^ u64.shrSL(W2h, W2l, 6);
            const SUMl = u64.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
            const SUMh = u64.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
            SHA512_W_H[i] = SUMh | 0;
            SHA512_W_L[i] = SUMl | 0;
          }
          let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
          for (let i = 0; i < 80; i++) {
            const sigma1h = u64.rotrSH(Eh, El, 14) ^ u64.rotrSH(Eh, El, 18) ^ u64.rotrBH(Eh, El, 41);
            const sigma1l = u64.rotrSL(Eh, El, 14) ^ u64.rotrSL(Eh, El, 18) ^ u64.rotrBL(Eh, El, 41);
            const CHIh = Eh & Fh ^ ~Eh & Gh;
            const CHIl = El & Fl ^ ~El & Gl;
            const T1ll = u64.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
            const T1h = u64.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
            const T1l = T1ll | 0;
            const sigma0h = u64.rotrSH(Ah, Al, 28) ^ u64.rotrBH(Ah, Al, 34) ^ u64.rotrBH(Ah, Al, 39);
            const sigma0l = u64.rotrSL(Ah, Al, 28) ^ u64.rotrBL(Ah, Al, 34) ^ u64.rotrBL(Ah, Al, 39);
            const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
            const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
            Hh = Gh | 0;
            Hl = Gl | 0;
            Gh = Fh | 0;
            Gl = Fl | 0;
            Fh = Eh | 0;
            Fl = El | 0;
            ({ h: Eh, l: El } = u64.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
            Dh = Ch | 0;
            Dl = Cl | 0;
            Ch = Bh | 0;
            Cl = Bl | 0;
            Bh = Ah | 0;
            Bl = Al | 0;
            const All = u64.add3L(T1l, sigma0l, MAJl);
            Ah = u64.add3H(All, T1h, sigma0h, MAJh);
            Al = All | 0;
          }
          ({ h: Ah, l: Al } = u64.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
          ({ h: Bh, l: Bl } = u64.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
          ({ h: Ch, l: Cl } = u64.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
          ({ h: Dh, l: Dl } = u64.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
          ({ h: Eh, l: El } = u64.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
          ({ h: Fh, l: Fl } = u64.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
          ({ h: Gh, l: Gl } = u64.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
          ({ h: Hh, l: Hl } = u64.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
          this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
        }
        roundClean() {
          SHA512_W_H.fill(0);
          SHA512_W_L.fill(0);
        }
        destroy() {
          this.buffer.fill(0);
          this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      };
      exports.SHA512 = SHA512;
      var SHA512_256 = class extends SHA512 {
        constructor() {
          super();
          this.Ah = 573645204 | 0;
          this.Al = 4230739756 | 0;
          this.Bh = 2673172387 | 0;
          this.Bl = 3360449730 | 0;
          this.Ch = 596883563 | 0;
          this.Cl = 1867755857 | 0;
          this.Dh = 2520282905 | 0;
          this.Dl = 1497426621 | 0;
          this.Eh = 2519219938 | 0;
          this.El = 2827943907 | 0;
          this.Fh = 3193839141 | 0;
          this.Fl = 1401305490 | 0;
          this.Gh = 721525244 | 0;
          this.Gl = 746961066 | 0;
          this.Hh = 246885852 | 0;
          this.Hl = 2177182882 | 0;
          this.outputLen = 32;
        }
      };
      var SHA384 = class extends SHA512 {
        constructor() {
          super();
          this.Ah = 3418070365 | 0;
          this.Al = 3238371032 | 0;
          this.Bh = 1654270250 | 0;
          this.Bl = 914150663 | 0;
          this.Ch = 2438529370 | 0;
          this.Cl = 812702999 | 0;
          this.Dh = 355462360 | 0;
          this.Dl = 4144912697 | 0;
          this.Eh = 1731405415 | 0;
          this.El = 4290775857 | 0;
          this.Fh = 2394180231 | 0;
          this.Fl = 1750603025 | 0;
          this.Gh = 3675008525 | 0;
          this.Gl = 1694076839 | 0;
          this.Hh = 1203062813 | 0;
          this.Hl = 3204075428 | 0;
          this.outputLen = 48;
        }
      };
      exports.sha512 = (0, utils_js_1.wrapConstructor)(() => new SHA512());
      exports.sha512_256 = (0, utils_js_1.wrapConstructor)(() => new SHA512_256());
      exports.sha384 = (0, utils_js_1.wrapConstructor)(() => new SHA384());
    }
  });

  // node_modules/@polkadot/wasm-crypto-asmjs/packageInfo.cjs
  var require_packageInfo9 = __commonJS({
    "node_modules/@polkadot/wasm-crypto-asmjs/packageInfo.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.packageInfo = void 0;
      var packageInfo = {
        name: "@polkadot/wasm-crypto-asmjs",
        path: typeof __dirname === "string" ? __dirname : "auto",
        type: "cjs",
        version: "5.1.1"
      };
      exports.packageInfo = packageInfo;
    }
  });

  // node_modules/@polkadot/wasm-crypto-wasm/packageInfo.cjs
  var require_packageInfo10 = __commonJS({
    "node_modules/@polkadot/wasm-crypto-wasm/packageInfo.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.packageInfo = void 0;
      var packageInfo = {
        name: "@polkadot/wasm-crypto-wasm",
        path: typeof __dirname === "string" ? __dirname : "auto",
        type: "cjs",
        version: "5.1.1"
      };
      exports.packageInfo = packageInfo;
    }
  });

  // node_modules/@polkadot/wasm-crypto/detectOther.cjs
  var require_detectOther3 = __commonJS({
    "node_modules/@polkadot/wasm-crypto/detectOther.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _packageInfo = require_packageInfo9();
      var _packageInfo2 = require_packageInfo10();
      var _default = [_packageInfo.packageInfo, _packageInfo2.packageInfo];
      exports.default = _default;
    }
  });

  // node_modules/@polkadot/wasm-crypto/packageInfo.cjs
  var require_packageInfo11 = __commonJS({
    "node_modules/@polkadot/wasm-crypto/packageInfo.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.packageInfo = void 0;
      var packageInfo = {
        name: "@polkadot/wasm-crypto",
        path: typeof __dirname === "string" ? __dirname : "auto",
        type: "cjs",
        version: "5.1.1"
      };
      exports.packageInfo = packageInfo;
    }
  });

  // node_modules/@polkadot/wasm-crypto/detectPackage.cjs
  var require_detectPackage3 = __commonJS({
    "node_modules/@polkadot/wasm-crypto/detectPackage.cjs"() {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      var _util = require_util();
      var _detectOther = _interopRequireDefault(require_detectOther3());
      var _packageInfo = require_packageInfo11();
      (0, _util.detectPackage)(_packageInfo.packageInfo, null, _detectOther.default);
    }
  });

  // node_modules/@polkadot/wasm-crypto/bridge.cjs
  var require_bridge = __commonJS({
    "node_modules/@polkadot/wasm-crypto/bridge.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.__bridge = void 0;
      exports.allocString = allocString;
      exports.allocU8a = allocU8a;
      exports.getInt32 = getInt32;
      exports.getString = getString;
      exports.getU8a = getU8a;
      exports.getUint8 = getUint8;
      exports.getWasm = getWasm;
      exports.resultString = resultString;
      exports.resultU8a = resultU8a;
      exports.withWasm = withWasm;
      var _util = require_util();
      var __bridge = {
        cachegetInt32: null,
        cachegetUint8: null,
        type: "wasm",
        wasm: null,
        wasmPromise: null,
        wasmPromiseFn: null
      };
      exports.__bridge = __bridge;
      function withWasm(fn) {
        return function() {
          (0, _util.assert)(__bridge.wasm, "The WASM interface has not been initialized. Ensure that you wait for the initialization Promise with waitReady() from @polkadot/wasm-crypto (or cryptoWaitReady() from @polkadot/util-crypto) before attempting to use WASM-only interfaces.");
          for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
            params[_key] = arguments[_key];
          }
          return fn(__bridge.wasm, ...params);
        };
      }
      function getWasm() {
        return __bridge.wasm;
      }
      function getInt32() {
        if (__bridge.cachegetInt32 === null || __bridge.cachegetInt32.buffer !== __bridge.wasm.memory.buffer) {
          __bridge.cachegetInt32 = new Int32Array(__bridge.wasm.memory.buffer);
        }
        return __bridge.cachegetInt32;
      }
      function getUint8() {
        if (__bridge.cachegetUint8 === null || __bridge.cachegetUint8.buffer !== __bridge.wasm.memory.buffer) {
          __bridge.cachegetUint8 = new Uint8Array(__bridge.wasm.memory.buffer);
        }
        return __bridge.cachegetUint8;
      }
      function getU8a(ptr, len) {
        return getUint8().subarray(ptr / 1, ptr / 1 + len);
      }
      function getString(ptr, len) {
        return (0, _util.u8aToString)(getU8a(ptr, len));
      }
      function allocU8a(arg) {
        const ptr = __bridge.wasm.__wbindgen_malloc(arg.length * 1);
        getUint8().set(arg, ptr / 1);
        return [ptr, arg.length];
      }
      function allocString(arg) {
        return allocU8a((0, _util.stringToU8a)(arg));
      }
      function resultU8a() {
        const r0 = getInt32()[8 / 4 + 0];
        const r1 = getInt32()[8 / 4 + 1];
        const ret = getU8a(r0, r1).slice();
        __bridge.wasm.__wbindgen_free(r0, r1 * 1);
        return ret;
      }
      function resultString() {
        return (0, _util.u8aToString)(resultU8a());
      }
    }
  });

  // node_modules/@polkadot/wasm-crypto-wasm/detectOther.cjs
  var require_detectOther4 = __commonJS({
    "node_modules/@polkadot/wasm-crypto-wasm/detectOther.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = [];
      exports.default = _default;
    }
  });

  // node_modules/@polkadot/wasm-crypto-wasm/detectPackage.cjs
  var require_detectPackage4 = __commonJS({
    "node_modules/@polkadot/wasm-crypto-wasm/detectPackage.cjs"() {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      var _util = require_util();
      var _detectOther = _interopRequireDefault(require_detectOther4());
      var _packageInfo = require_packageInfo10();
      (0, _util.detectPackage)(_packageInfo.packageInfo, null, _detectOther.default);
    }
  });

  // node_modules/@polkadot/wasm-crypto-wasm/cjs/bytes.js
  var require_bytes = __commonJS({
    "node_modules/@polkadot/wasm-crypto-wasm/cjs/bytes.js"(exports, module) {
      var sizeCompressed = 171464;
      var sizeUncompressed = 340174;
      var bytes = "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";
      module.exports = { bytes, sizeCompressed, sizeUncompressed };
    }
  });

  // node_modules/@polkadot/wasm-crypto-wasm/base64.cjs
  var require_base64 = __commonJS({
    "node_modules/@polkadot/wasm-crypto-wasm/base64.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.base64Decode = base64Decode;
      var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      function base64Decode(data) {
        const bytes = [];
        let byte = 0;
        let bits = 0;
        for (let i = 0; i < data.length && data[i] !== "="; i++) {
          byte = byte << 6 | chars.indexOf(data[i]);
          if ((bits += 6) >= 8) {
            bytes.push(byte >>> (bits -= 8) & 255);
          }
        }
        return Uint8Array.from(bytes);
      }
    }
  });

  // node_modules/@polkadot/wasm-crypto-wasm/fflate.cjs
  var require_fflate = __commonJS({
    "node_modules/@polkadot/wasm-crypto-wasm/fflate.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.unzlibSync = unzlibSync;
      var u8 = Uint8Array;
      var u16 = Uint16Array;
      var u32 = Uint32Array;
      var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
      var fleb = new u8([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3,
        4,
        4,
        4,
        4,
        5,
        5,
        5,
        5,
        0,
        0,
        0,
        0
      ]);
      var fdeb = new u8([
        0,
        0,
        0,
        0,
        1,
        1,
        2,
        2,
        3,
        3,
        4,
        4,
        5,
        5,
        6,
        6,
        7,
        7,
        8,
        8,
        9,
        9,
        10,
        10,
        11,
        11,
        12,
        12,
        13,
        13,
        0,
        0
      ]);
      var freb = (eb, start) => {
        const b = new u16(31);
        for (let i = 0; i < 31; ++i) {
          b[i] = start += 1 << eb[i - 1];
        }
        const r = new u32(b[30]);
        for (let i = 1; i < 30; ++i) {
          for (let j = b[i]; j < b[i + 1]; ++j) {
            r[j] = j - b[i] << 5 | i;
          }
        }
        return [b, r];
      };
      var [fl, revfl] = freb(fleb, 2);
      fl[28] = 258, revfl[258] = 28;
      var [fd] = freb(fdeb, 0);
      var rev = new u16(32768);
      for (let i = 0; i < 32768; ++i) {
        let x = (i & 43690) >>> 1 | (i & 21845) << 1;
        x = (x & 52428) >>> 2 | (x & 13107) << 2;
        x = (x & 61680) >>> 4 | (x & 3855) << 4;
        rev[i] = ((x & 65280) >>> 8 | (x & 255) << 8) >>> 1;
      }
      var hMap = (cd, mb, r) => {
        const s = cd.length;
        let i = 0;
        const l = new u16(mb);
        for (; i < s; ++i)
          ++l[cd[i] - 1];
        const le = new u16(mb);
        for (i = 0; i < mb; ++i) {
          le[i] = le[i - 1] + l[i - 1] << 1;
        }
        let co;
        if (r) {
          co = new u16(1 << mb);
          const rvb = 15 - mb;
          for (i = 0; i < s; ++i) {
            if (cd[i]) {
              const sv = i << 4 | cd[i];
              const r2 = mb - cd[i];
              let v = le[cd[i] - 1]++ << r2;
              for (const m = v | (1 << r2) - 1; v <= m; ++v) {
                co[rev[v] >>> rvb] = sv;
              }
            }
          }
        } else {
          co = new u16(s);
          for (i = 0; i < s; ++i)
            co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
        }
        return co;
      };
      var flt = new u8(288);
      for (let i = 0; i < 144; ++i)
        flt[i] = 8;
      for (let i = 144; i < 256; ++i)
        flt[i] = 9;
      for (let i = 256; i < 280; ++i)
        flt[i] = 7;
      for (let i = 280; i < 288; ++i)
        flt[i] = 8;
      var fdt = new u8(32);
      for (let i = 0; i < 32; ++i)
        fdt[i] = 5;
      var flrm = hMap(flt, 9, 1);
      var fdrm = hMap(fdt, 5, 1);
      var bits = (d, p, m) => {
        const o = p >>> 3;
        return (d[o] | d[o + 1] << 8) >>> (p & 7) & m;
      };
      var bits16 = (d, p) => {
        const o = p >>> 3;
        return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >>> (p & 7);
      };
      var shft = (p) => (p >>> 3) + (p & 7 && 1);
      var slc = (v, s, e) => {
        if (s == null || s < 0)
          s = 0;
        if (e == null || e > v.length)
          e = v.length;
        const n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
        n.set(v.subarray(s, e));
        return n;
      };
      var max = (a) => {
        let m = a[0];
        for (let i = 1; i < a.length; ++i) {
          if (a[i] > m)
            m = a[i];
        }
        return m;
      };
      var inflt = (dat, buf, st) => {
        const noSt = !st || st.i;
        if (!st)
          st = {};
        const sl = dat.length;
        const noBuf = !buf || !noSt;
        if (!buf)
          buf = new u8(sl * 3);
        const cbuf = (l) => {
          let bl = buf.length;
          if (l > bl) {
            const nbuf = new u8(Math.max(bl << 1, l));
            nbuf.set(buf);
            buf = nbuf;
          }
        };
        let final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
        if (final && !lm)
          return buf;
        const tbts = sl << 3;
        do {
          if (!lm) {
            st.f = final = bits(dat, pos, 1);
            const type = bits(dat, pos + 1, 3);
            pos += 3;
            if (!type) {
              const s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
              if (t > sl) {
                if (noSt)
                  throw "unexpected EOF";
                break;
              }
              if (noBuf)
                cbuf(bt + l);
              buf.set(dat.subarray(s, t), bt);
              st.b = bt += l, st.p = pos = t << 3;
              continue;
            } else if (type == 1)
              lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
            else if (type == 2) {
              const hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
              const tl = hLit + bits(dat, pos + 5, 31) + 1;
              pos += 14;
              const ldt = new u8(tl);
              const clt = new u8(19);
              for (let i = 0; i < hcLen; ++i) {
                clt[clim[i]] = bits(dat, pos + i * 3, 7);
              }
              pos += hcLen * 3;
              const clb = max(clt), clbmsk = (1 << clb) - 1;
              if (!noSt && pos + tl * (clb + 7) > tbts)
                break;
              const clm = hMap(clt, clb, 1);
              for (let i = 0; i < tl; ) {
                const r = clm[bits(dat, pos, clbmsk)];
                pos += r & 15;
                const s = r >>> 4;
                if (s < 16) {
                  ldt[i++] = s;
                } else {
                  let c = 0, n = 0;
                  if (s == 16)
                    n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
                  else if (s == 17)
                    n = 3 + bits(dat, pos, 7), pos += 3;
                  else if (s == 18)
                    n = 11 + bits(dat, pos, 127), pos += 7;
                  while (n--)
                    ldt[i++] = c;
                }
              }
              const lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
              lbt = max(lt);
              dbt = max(dt);
              lm = hMap(lt, lbt, 1);
              dm = hMap(dt, dbt, 1);
            } else
              throw "invalid block type";
            if (pos > tbts)
              throw "unexpected EOF";
          }
          if (noBuf)
            cbuf(bt + 131072);
          const lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
          const mxa = lbt + dbt + 18;
          while (noSt || pos + mxa < tbts) {
            const c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
            pos += c & 15;
            if (pos > tbts)
              throw "unexpected EOF";
            if (!c)
              throw "invalid length/literal";
            if (sym < 256)
              buf[bt++] = sym;
            else if (sym == 256) {
              lm = void 0;
              break;
            } else {
              let add = sym - 254;
              if (sym > 264) {
                const i = sym - 257, b = fleb[i];
                add = bits(dat, pos, (1 << b) - 1) + fl[i];
                pos += b;
              }
              const d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
              if (!d)
                throw "invalid distance";
              pos += d & 15;
              let dt = fd[dsym];
              if (dsym > 3) {
                const b = fdeb[dsym];
                dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
              }
              if (pos > tbts)
                throw "unexpected EOF";
              if (noBuf)
                cbuf(bt + 131072);
              const end = bt + add;
              for (; bt < end; bt += 4) {
                buf[bt] = buf[bt - dt];
                buf[bt + 1] = buf[bt + 1 - dt];
                buf[bt + 2] = buf[bt + 2 - dt];
                buf[bt + 3] = buf[bt + 3 - dt];
              }
              bt = end;
            }
          }
          st.l = lm, st.p = pos, st.b = bt;
          if (lm)
            final = 1, st.m = lbt, st.d = dm, st.n = dbt;
        } while (!final);
        return bt == buf.length ? buf : slc(buf, 0, bt);
      };
      var zlv = (d) => {
        if ((d[0] & 15) != 8 || d[0] >>> 4 > 7 || (d[0] << 8 | d[1]) % 31)
          throw "invalid zlib data";
        if (d[1] & 32)
          throw "invalid zlib data: preset dictionaries not supported";
      };
      function unzlibSync(data, out) {
        return inflt((zlv(data), data.subarray(2, -4)), out);
      }
    }
  });

  // node_modules/@polkadot/wasm-crypto-wasm/bundle.cjs
  var require_bundle2 = __commonJS({
    "node_modules/@polkadot/wasm-crypto-wasm/bundle.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "packageInfo", {
        enumerable: true,
        get: function() {
          return _packageInfo.packageInfo;
        }
      });
      exports.wasmBytes = void 0;
      var _bytes = require_bytes();
      var _base = require_base64();
      var _fflate = require_fflate();
      var _packageInfo = require_packageInfo10();
      var wasmBytes = (0, _fflate.unzlibSync)((0, _base.base64Decode)(_bytes.bytes), new Uint8Array(_bytes.sizeUncompressed));
      exports.wasmBytes = wasmBytes;
    }
  });

  // node_modules/@polkadot/wasm-crypto-wasm/index.cjs
  var require_wasm_crypto_wasm = __commonJS({
    "node_modules/@polkadot/wasm-crypto-wasm/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      require_detectPackage4();
      var _bundle = require_bundle2();
      Object.keys(_bundle).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (key in exports && exports[key] === _bundle[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _bundle[key];
          }
        });
      });
    }
  });

  // node_modules/@polkadot/wasm-crypto/imports.cjs
  var require_imports = __commonJS({
    "node_modules/@polkadot/wasm-crypto/imports.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.__wbg_crypto_968f1772287e2df0 = __wbg_crypto_968f1772287e2df0;
      exports.__wbg_getRandomValues_a3d34b4fee3c2869 = __wbg_getRandomValues_a3d34b4fee3c2869;
      exports.__wbg_getRandomValues_f5e14ab7ac8e995d = __wbg_getRandomValues_f5e14ab7ac8e995d;
      exports.__wbg_randomFillSync_d5bd2d655fdf256a = __wbg_randomFillSync_d5bd2d655fdf256a;
      exports.__wbg_require_604837428532a733 = __wbg_require_604837428532a733;
      exports.__wbg_self_1b7a39e3a92c949c = __wbg_self_1b7a39e3a92c949c;
      exports.__wbindgen_is_undefined = __wbindgen_is_undefined;
      exports.__wbindgen_object_drop_ref = __wbindgen_object_drop_ref;
      exports.__wbindgen_throw = __wbindgen_throw;
      exports.abort = abort;
      var _xRandomvalues = require_browser3();
      var _bridge = require_bridge();
      var DEFAULT_CRYPTO = {
        getRandomValues: _xRandomvalues.getRandomValues
      };
      var DEFAULT_SELF = {
        crypto: DEFAULT_CRYPTO
      };
      var heap = new Array(32).fill(void 0).concat(void 0, null, true, false);
      var heapNext = heap.length;
      function getObject(idx) {
        return heap[idx];
      }
      function dropObject(idx) {
        if (idx < 36) {
          return;
        }
        heap[idx] = heapNext;
        heapNext = idx;
      }
      function takeObject(idx) {
        const ret = getObject(idx);
        dropObject(idx);
        return ret;
      }
      function addObject(obj) {
        if (heapNext === heap.length) {
          heap.push(heap.length + 1);
        }
        const idx = heapNext;
        heapNext = heap[idx];
        heap[idx] = obj;
        return idx;
      }
      function __wbindgen_is_undefined(idx) {
        return getObject(idx) === void 0;
      }
      function __wbindgen_throw(ptr, len) {
        throw new Error((0, _bridge.getString)(ptr, len));
      }
      function __wbg_self_1b7a39e3a92c949c() {
        return addObject(DEFAULT_SELF);
      }
      function __wbg_require_604837428532a733(ptr, len) {
        throw new Error(`Unable to require ${(0, _bridge.getString)(ptr, len)}`);
      }
      function __wbg_crypto_968f1772287e2df0(_idx) {
        return addObject(DEFAULT_CRYPTO);
      }
      function __wbg_getRandomValues_a3d34b4fee3c2869(_idx) {
        return addObject(DEFAULT_CRYPTO.getRandomValues);
      }
      function __wbg_getRandomValues_f5e14ab7ac8e995d(_arg0, ptr, len) {
        DEFAULT_CRYPTO.getRandomValues((0, _bridge.getU8a)(ptr, len));
      }
      function __wbg_randomFillSync_d5bd2d655fdf256a(_idx, _ptr, _len) {
        throw new Error("randomFillsync is not available");
      }
      function __wbindgen_object_drop_ref(idx) {
        takeObject(idx);
      }
      function abort() {
        throw new Error("abort");
      }
    }
  });

  // node_modules/@polkadot/wasm-crypto/init.cjs
  var require_init = __commonJS({
    "node_modules/@polkadot/wasm-crypto/init.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.initWasm = initWasm;
      exports.setWasmPromise = setWasmPromise;
      exports.setWasmPromiseFn = setWasmPromiseFn;
      var _util = require_util();
      var _wasmCryptoWasm = require_wasm_crypto_wasm();
      var _bridge = require_bridge();
      var wbg = _interopRequireWildcard(require_imports());
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return { default: obj };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      async function createPromise(wasmBytes, asmFn) {
        try {
          (0, _util.assert)(typeof WebAssembly === "object" && typeof WebAssembly.instantiate === "function" && wasmBytes && wasmBytes.length, "WebAssembly is not available in your environment");
          const source = await WebAssembly.instantiate(wasmBytes, {
            wbg
          });
          _bridge.__bridge.wasm = source.instance.exports;
        } catch (error) {
          if (asmFn) {
            _bridge.__bridge.type = "asm";
            _bridge.__bridge.wasm = asmFn(wbg);
          } else {
            console.error(`FATAL: Unable to initialize @polkadot/wasm-crypto:: ${error.message}`);
            _bridge.__bridge.wasm = null;
          }
        }
      }
      function setWasmPromise(wasmBytes, asmFn) {
        _bridge.__bridge.wasmPromise = createPromise(wasmBytes, asmFn);
        return _bridge.__bridge.wasmPromise;
      }
      function setWasmPromiseFn(fn) {
        _bridge.__bridge.wasmPromiseFn = fn;
      }
      function initWasm() {
        return setWasmPromise(_wasmCryptoWasm.wasmBytes, null);
      }
    }
  });

  // node_modules/@polkadot/wasm-crypto/bundle.cjs
  var require_bundle3 = __commonJS({
    "node_modules/@polkadot/wasm-crypto/bundle.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hmacSha512 = exports.hmacSha256 = exports.ed25519Verify = exports.ed25519Sign = exports.ed25519KeypairFromSeed = exports.blake2b = exports.bip39Validate = exports.bip39ToSeed = exports.bip39ToMiniSecret = exports.bip39ToEntropy = exports.bip39Generate = void 0;
      exports.isReady = isReady;
      exports.keccak512 = exports.keccak256 = void 0;
      Object.defineProperty(exports, "packageInfo", {
        enumerable: true,
        get: function() {
          return _packageInfo.packageInfo;
        }
      });
      exports.vrfVerify = exports.vrfSign = exports.twox = exports.sr25519Verify = exports.sr25519Sign = exports.sr25519KeypairFromSeed = exports.sr25519DerivePublicSoft = exports.sr25519DeriveKeypairSoft = exports.sr25519DeriveKeypairHard = exports.sr25519Agree = exports.sha512 = exports.sha256 = exports.secp256k1Sign = exports.secp256k1Recover = exports.secp256k1FromSeed = exports.secp256k1Expand = exports.secp256k1Compress = exports.scrypt = exports.pbkdf2 = void 0;
      exports.waitReady = waitReady;
      var _bridge = require_bridge();
      var _init = require_init();
      var _packageInfo = require_packageInfo11();
      var bip39Generate = (0, _bridge.withWasm)((wasm, words) => {
        wasm.ext_bip39_generate(8, words);
        return (0, _bridge.resultString)();
      });
      exports.bip39Generate = bip39Generate;
      var bip39ToEntropy = (0, _bridge.withWasm)((wasm, phrase) => {
        wasm.ext_bip39_to_entropy(8, ...(0, _bridge.allocString)(phrase));
        return (0, _bridge.resultU8a)();
      });
      exports.bip39ToEntropy = bip39ToEntropy;
      var bip39ToMiniSecret = (0, _bridge.withWasm)((wasm, phrase, password) => {
        wasm.ext_bip39_to_mini_secret(8, ...(0, _bridge.allocString)(phrase), ...(0, _bridge.allocString)(password));
        return (0, _bridge.resultU8a)();
      });
      exports.bip39ToMiniSecret = bip39ToMiniSecret;
      var bip39ToSeed = (0, _bridge.withWasm)((wasm, phrase, password) => {
        wasm.ext_bip39_to_seed(8, ...(0, _bridge.allocString)(phrase), ...(0, _bridge.allocString)(password));
        return (0, _bridge.resultU8a)();
      });
      exports.bip39ToSeed = bip39ToSeed;
      var bip39Validate = (0, _bridge.withWasm)((wasm, phrase) => {
        const ret = wasm.ext_bip39_validate(...(0, _bridge.allocString)(phrase));
        return ret !== 0;
      });
      exports.bip39Validate = bip39Validate;
      var ed25519KeypairFromSeed = (0, _bridge.withWasm)((wasm, seed) => {
        wasm.ext_ed_from_seed(8, ...(0, _bridge.allocU8a)(seed));
        return (0, _bridge.resultU8a)();
      });
      exports.ed25519KeypairFromSeed = ed25519KeypairFromSeed;
      var ed25519Sign = (0, _bridge.withWasm)((wasm, pubkey, seckey, message) => {
        wasm.ext_ed_sign(8, ...(0, _bridge.allocU8a)(pubkey), ...(0, _bridge.allocU8a)(seckey), ...(0, _bridge.allocU8a)(message));
        return (0, _bridge.resultU8a)();
      });
      exports.ed25519Sign = ed25519Sign;
      var ed25519Verify = (0, _bridge.withWasm)((wasm, signature, message, pubkey) => {
        const ret = wasm.ext_ed_verify(...(0, _bridge.allocU8a)(signature), ...(0, _bridge.allocU8a)(message), ...(0, _bridge.allocU8a)(pubkey));
        return ret !== 0;
      });
      exports.ed25519Verify = ed25519Verify;
      var secp256k1FromSeed = (0, _bridge.withWasm)((wasm, seckey) => {
        wasm.ext_secp_from_seed(8, ...(0, _bridge.allocU8a)(seckey));
        return (0, _bridge.resultU8a)();
      });
      exports.secp256k1FromSeed = secp256k1FromSeed;
      var secp256k1Compress = (0, _bridge.withWasm)((wasm, pubkey) => {
        wasm.ext_secp_pub_compress(8, ...(0, _bridge.allocU8a)(pubkey));
        return (0, _bridge.resultU8a)();
      });
      exports.secp256k1Compress = secp256k1Compress;
      var secp256k1Expand = (0, _bridge.withWasm)((wasm, pubkey) => {
        wasm.ext_secp_pub_expand(8, ...(0, _bridge.allocU8a)(pubkey));
        return (0, _bridge.resultU8a)();
      });
      exports.secp256k1Expand = secp256k1Expand;
      var secp256k1Recover = (0, _bridge.withWasm)((wasm, msgHash, sig, recovery) => {
        wasm.ext_secp_recover(8, ...(0, _bridge.allocU8a)(msgHash), ...(0, _bridge.allocU8a)(sig), recovery);
        return (0, _bridge.resultU8a)();
      });
      exports.secp256k1Recover = secp256k1Recover;
      var secp256k1Sign = (0, _bridge.withWasm)((wasm, msgHash, seckey) => {
        wasm.ext_secp_sign(8, ...(0, _bridge.allocU8a)(msgHash), ...(0, _bridge.allocU8a)(seckey));
        return (0, _bridge.resultU8a)();
      });
      exports.secp256k1Sign = secp256k1Sign;
      var sr25519DeriveKeypairHard = (0, _bridge.withWasm)((wasm, pair, cc) => {
        wasm.ext_sr_derive_keypair_hard(8, ...(0, _bridge.allocU8a)(pair), ...(0, _bridge.allocU8a)(cc));
        return (0, _bridge.resultU8a)();
      });
      exports.sr25519DeriveKeypairHard = sr25519DeriveKeypairHard;
      var sr25519DeriveKeypairSoft = (0, _bridge.withWasm)((wasm, pair, cc) => {
        wasm.ext_sr_derive_keypair_soft(8, ...(0, _bridge.allocU8a)(pair), ...(0, _bridge.allocU8a)(cc));
        return (0, _bridge.resultU8a)();
      });
      exports.sr25519DeriveKeypairSoft = sr25519DeriveKeypairSoft;
      var sr25519DerivePublicSoft = (0, _bridge.withWasm)((wasm, pubkey, cc) => {
        wasm.ext_sr_derive_public_soft(8, ...(0, _bridge.allocU8a)(pubkey), ...(0, _bridge.allocU8a)(cc));
        return (0, _bridge.resultU8a)();
      });
      exports.sr25519DerivePublicSoft = sr25519DerivePublicSoft;
      var sr25519KeypairFromSeed = (0, _bridge.withWasm)((wasm, seed) => {
        wasm.ext_sr_from_seed(8, ...(0, _bridge.allocU8a)(seed));
        return (0, _bridge.resultU8a)();
      });
      exports.sr25519KeypairFromSeed = sr25519KeypairFromSeed;
      var sr25519Sign = (0, _bridge.withWasm)((wasm, pubkey, secret, message) => {
        wasm.ext_sr_sign(8, ...(0, _bridge.allocU8a)(pubkey), ...(0, _bridge.allocU8a)(secret), ...(0, _bridge.allocU8a)(message));
        return (0, _bridge.resultU8a)();
      });
      exports.sr25519Sign = sr25519Sign;
      var sr25519Verify = (0, _bridge.withWasm)((wasm, signature, message, pubkey) => {
        const ret = wasm.ext_sr_verify(...(0, _bridge.allocU8a)(signature), ...(0, _bridge.allocU8a)(message), ...(0, _bridge.allocU8a)(pubkey));
        return ret !== 0;
      });
      exports.sr25519Verify = sr25519Verify;
      var sr25519Agree = (0, _bridge.withWasm)((wasm, pubkey, secret) => {
        wasm.ext_sr_agree(8, ...(0, _bridge.allocU8a)(pubkey), ...(0, _bridge.allocU8a)(secret));
        return (0, _bridge.resultU8a)();
      });
      exports.sr25519Agree = sr25519Agree;
      var vrfSign = (0, _bridge.withWasm)((wasm, secret, context, message, extra) => {
        wasm.ext_vrf_sign(8, ...(0, _bridge.allocU8a)(secret), ...(0, _bridge.allocU8a)(context), ...(0, _bridge.allocU8a)(message), ...(0, _bridge.allocU8a)(extra));
        return (0, _bridge.resultU8a)();
      });
      exports.vrfSign = vrfSign;
      var vrfVerify = (0, _bridge.withWasm)((wasm, pubkey, context, message, extra, outAndProof) => {
        const ret = wasm.ext_vrf_verify(...(0, _bridge.allocU8a)(pubkey), ...(0, _bridge.allocU8a)(context), ...(0, _bridge.allocU8a)(message), ...(0, _bridge.allocU8a)(extra), ...(0, _bridge.allocU8a)(outAndProof));
        return ret !== 0;
      });
      exports.vrfVerify = vrfVerify;
      var blake2b = (0, _bridge.withWasm)((wasm, data, key, size) => {
        wasm.ext_blake2b(8, ...(0, _bridge.allocU8a)(data), ...(0, _bridge.allocU8a)(key), size);
        return (0, _bridge.resultU8a)();
      });
      exports.blake2b = blake2b;
      var hmacSha256 = (0, _bridge.withWasm)((wasm, key, data) => {
        wasm.ext_hmac_sha256(8, ...(0, _bridge.allocU8a)(key), ...(0, _bridge.allocU8a)(data));
        return (0, _bridge.resultU8a)();
      });
      exports.hmacSha256 = hmacSha256;
      var hmacSha512 = (0, _bridge.withWasm)((wasm, key, data) => {
        wasm.ext_hmac_sha512(8, ...(0, _bridge.allocU8a)(key), ...(0, _bridge.allocU8a)(data));
        return (0, _bridge.resultU8a)();
      });
      exports.hmacSha512 = hmacSha512;
      var keccak256 = (0, _bridge.withWasm)((wasm, data) => {
        wasm.ext_keccak256(8, ...(0, _bridge.allocU8a)(data));
        return (0, _bridge.resultU8a)();
      });
      exports.keccak256 = keccak256;
      var keccak512 = (0, _bridge.withWasm)((wasm, data) => {
        wasm.ext_keccak512(8, ...(0, _bridge.allocU8a)(data));
        return (0, _bridge.resultU8a)();
      });
      exports.keccak512 = keccak512;
      var pbkdf2 = (0, _bridge.withWasm)((wasm, data, salt, rounds) => {
        wasm.ext_pbkdf2(8, ...(0, _bridge.allocU8a)(data), ...(0, _bridge.allocU8a)(salt), rounds);
        return (0, _bridge.resultU8a)();
      });
      exports.pbkdf2 = pbkdf2;
      var scrypt = (0, _bridge.withWasm)((wasm, password, salt, log2n, r, p) => {
        wasm.ext_scrypt(8, ...(0, _bridge.allocU8a)(password), ...(0, _bridge.allocU8a)(salt), log2n, r, p);
        return (0, _bridge.resultU8a)();
      });
      exports.scrypt = scrypt;
      var sha256 = (0, _bridge.withWasm)((wasm, data) => {
        wasm.ext_sha256(8, ...(0, _bridge.allocU8a)(data));
        return (0, _bridge.resultU8a)();
      });
      exports.sha256 = sha256;
      var sha512 = (0, _bridge.withWasm)((wasm, data) => {
        wasm.ext_sha512(8, ...(0, _bridge.allocU8a)(data));
        return (0, _bridge.resultU8a)();
      });
      exports.sha512 = sha512;
      var twox = (0, _bridge.withWasm)((wasm, data, rounds) => {
        wasm.ext_twox(8, ...(0, _bridge.allocU8a)(data), rounds);
        return (0, _bridge.resultU8a)();
      });
      exports.twox = twox;
      function isReady() {
        return !!(0, _bridge.getWasm)();
      }
      async function waitReady() {
        try {
          if (!_bridge.__bridge.wasmPromise) {
            if (!_bridge.__bridge.wasmPromiseFn) {
              _bridge.__bridge.wasmPromiseFn = _init.initWasm;
            }
            _bridge.__bridge.wasmPromise = _bridge.__bridge.wasmPromiseFn();
          }
          await _bridge.__bridge.wasmPromise;
          return isReady();
        } catch {
          return false;
        }
      }
    }
  });

  // node_modules/@polkadot/wasm-crypto/index.cjs
  var require_wasm_crypto = __commonJS({
    "node_modules/@polkadot/wasm-crypto/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      require_detectPackage3();
      var _bundle = require_bundle3();
      Object.keys(_bundle).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (key in exports && exports[key] === _bundle[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _bundle[key];
          }
        });
      });
    }
  });

  // node_modules/@polkadot/util-crypto/hmac/shaAsU8a.cjs
  var require_shaAsU8a = __commonJS({
    "node_modules/@polkadot/util-crypto/hmac/shaAsU8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hmacSha512AsU8a = exports.hmacSha256AsU8a = void 0;
      exports.hmacShaAsU8a = hmacShaAsU8a;
      var _hmac = require_hmac();
      var _sha = require_sha256();
      var _sha2 = require_sha512();
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      var JS_HASH = {
        256: _sha.sha256,
        512: _sha2.sha512
      };
      var WA_MHAC = {
        256: _wasmCrypto.hmacSha256,
        512: _wasmCrypto.hmacSha512
      };
      function createSha(bitLength) {
        return (key, data, onlyJs) => hmacShaAsU8a(key, data, bitLength, onlyJs);
      }
      function hmacShaAsU8a(key, data) {
        let bitLength = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 256;
        let onlyJs = arguments.length > 3 ? arguments[3] : void 0;
        const u8aKey = (0, _util.u8aToU8a)(key);
        return !_util.hasBigInt || !onlyJs && (0, _wasmCrypto.isReady)() ? WA_MHAC[bitLength](u8aKey, data) : (0, _hmac.hmac)(JS_HASH[bitLength], u8aKey, data);
      }
      var hmacSha256AsU8a = createSha(256);
      exports.hmacSha256AsU8a = hmacSha256AsU8a;
      var hmacSha512AsU8a = createSha(512);
      exports.hmacSha512AsU8a = hmacSha512AsU8a;
    }
  });

  // node_modules/@polkadot/util-crypto/hmac/index.cjs
  var require_hmac2 = __commonJS({
    "node_modules/@polkadot/util-crypto/hmac/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "hmacSha256AsU8a", {
        enumerable: true,
        get: function() {
          return _shaAsU8a.hmacSha256AsU8a;
        }
      });
      Object.defineProperty(exports, "hmacSha512AsU8a", {
        enumerable: true,
        get: function() {
          return _shaAsU8a.hmacSha512AsU8a;
        }
      });
      Object.defineProperty(exports, "hmacShaAsU8a", {
        enumerable: true,
        get: function() {
          return _shaAsU8a.hmacShaAsU8a;
        }
      });
      var _shaAsU8a = require_shaAsU8a();
    }
  });

  // node_modules/@polkadot/util-crypto/bundleInit.cjs
  var require_bundleInit = __commonJS({
    "node_modules/@polkadot/util-crypto/bundleInit.cjs"() {
      "use strict";
      require_shim();
      var _secp256k = require_lib();
      var _util = require_util();
      var _index = require_hmac2();
      _secp256k.utils.hmacSha256Sync = function(key) {
        for (var _len = arguments.length, messages = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          messages[_key - 1] = arguments[_key];
        }
        return (0, _index.hmacSha256AsU8a)(key, (0, _util.u8aConcat)(...messages));
      };
    }
  });

  // node_modules/@scure/base/index.js
  var require_base = __commonJS({
    "node_modules/@scure/base/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.bytes = exports.stringToBytes = exports.str = exports.bytesToString = exports.hex = exports.utf8 = exports.bech32m = exports.bech32 = exports.base58check = exports.base58xmr = exports.base58xrp = exports.base58flickr = exports.base58 = exports.base64url = exports.base64 = exports.base32crockford = exports.base32hex = exports.base32 = exports.base16 = exports.utils = exports.assertNumber = void 0;
      function assertNumber(n) {
        if (!Number.isSafeInteger(n))
          throw new Error(`Wrong integer: ${n}`);
      }
      exports.assertNumber = assertNumber;
      function chain(...args) {
        const wrap = (a, b) => (c) => a(b(c));
        const encode = Array.from(args).reverse().reduce((acc, i) => acc ? wrap(acc, i.encode) : i.encode, void 0);
        const decode = args.reduce((acc, i) => acc ? wrap(acc, i.decode) : i.decode, void 0);
        return { encode, decode };
      }
      function alphabet(alphabet2) {
        return {
          encode: (digits) => {
            if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
              throw new Error("alphabet.encode input should be an array of numbers");
            return digits.map((i) => {
              assertNumber(i);
              if (i < 0 || i >= alphabet2.length)
                throw new Error(`Digit index outside alphabet: ${i} (alphabet: ${alphabet2.length})`);
              return alphabet2[i];
            });
          },
          decode: (input) => {
            if (!Array.isArray(input) || input.length && typeof input[0] !== "string")
              throw new Error("alphabet.decode input should be array of strings");
            return input.map((letter) => {
              if (typeof letter !== "string")
                throw new Error(`alphabet.decode: not string element=${letter}`);
              const index = alphabet2.indexOf(letter);
              if (index === -1)
                throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet2}`);
              return index;
            });
          }
        };
      }
      function join(separator = "") {
        if (typeof separator !== "string")
          throw new Error("join separator should be string");
        return {
          encode: (from) => {
            if (!Array.isArray(from) || from.length && typeof from[0] !== "string")
              throw new Error("join.encode input should be array of strings");
            for (let i of from)
              if (typeof i !== "string")
                throw new Error(`join.encode: non-string input=${i}`);
            return from.join(separator);
          },
          decode: (to) => {
            if (typeof to !== "string")
              throw new Error("join.decode input should be string");
            return to.split(separator);
          }
        };
      }
      function padding(bits, chr = "=") {
        assertNumber(bits);
        if (typeof chr !== "string")
          throw new Error("padding chr should be string");
        return {
          encode(data) {
            if (!Array.isArray(data) || data.length && typeof data[0] !== "string")
              throw new Error("padding.encode input should be array of strings");
            for (let i of data)
              if (typeof i !== "string")
                throw new Error(`padding.encode: non-string input=${i}`);
            while (data.length * bits % 8)
              data.push(chr);
            return data;
          },
          decode(input) {
            if (!Array.isArray(input) || input.length && typeof input[0] !== "string")
              throw new Error("padding.encode input should be array of strings");
            for (let i of input)
              if (typeof i !== "string")
                throw new Error(`padding.decode: non-string input=${i}`);
            let end = input.length;
            if (end * bits % 8)
              throw new Error("Invalid padding: string should have whole number of bytes");
            for (; end > 0 && input[end - 1] === chr; end--) {
              if (!((end - 1) * bits % 8))
                throw new Error("Invalid padding: string has too much padding");
            }
            return input.slice(0, end);
          }
        };
      }
      function normalize(fn) {
        if (typeof fn !== "function")
          throw new Error("normalize fn should be function");
        return { encode: (from) => from, decode: (to) => fn(to) };
      }
      function convertRadix(data, from, to) {
        if (from < 2)
          throw new Error(`convertRadix: wrong from=${from}, base cannot be less than 2`);
        if (to < 2)
          throw new Error(`convertRadix: wrong to=${to}, base cannot be less than 2`);
        if (!Array.isArray(data))
          throw new Error("convertRadix: data should be array");
        if (!data.length)
          return [];
        let pos = 0;
        const res = [];
        const digits = Array.from(data);
        digits.forEach((d) => {
          assertNumber(d);
          if (d < 0 || d >= from)
            throw new Error(`Wrong integer: ${d}`);
        });
        while (true) {
          let carry = 0;
          let done = true;
          for (let i = pos; i < digits.length; i++) {
            const digit = digits[i];
            const digitBase = from * carry + digit;
            if (!Number.isSafeInteger(digitBase) || from * carry / from !== carry || digitBase - digit !== from * carry) {
              throw new Error("convertRadix: carry overflow");
            }
            carry = digitBase % to;
            digits[i] = Math.floor(digitBase / to);
            if (!Number.isSafeInteger(digits[i]) || digits[i] * to + carry !== digitBase)
              throw new Error("convertRadix: carry overflow");
            if (!done)
              continue;
            else if (!digits[i])
              pos = i;
            else
              done = false;
          }
          res.push(carry);
          if (done)
            break;
        }
        for (let i = 0; i < data.length - 1 && data[i] === 0; i++)
          res.push(0);
        return res.reverse();
      }
      var gcd = (a, b) => !b ? a : gcd(b, a % b);
      var radix2carry = (from, to) => from + (to - gcd(from, to));
      function convertRadix2(data, from, to, padding2) {
        if (!Array.isArray(data))
          throw new Error("convertRadix2: data should be array");
        if (from <= 0 || from > 32)
          throw new Error(`convertRadix2: wrong from=${from}`);
        if (to <= 0 || to > 32)
          throw new Error(`convertRadix2: wrong to=${to}`);
        if (radix2carry(from, to) > 32) {
          throw new Error(`convertRadix2: carry overflow from=${from} to=${to} carryBits=${radix2carry(from, to)}`);
        }
        let carry = 0;
        let pos = 0;
        const mask = 2 ** to - 1;
        const res = [];
        for (const n of data) {
          assertNumber(n);
          if (n >= 2 ** from)
            throw new Error(`convertRadix2: invalid data word=${n} from=${from}`);
          carry = carry << from | n;
          if (pos + from > 32)
            throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from}`);
          pos += from;
          for (; pos >= to; pos -= to)
            res.push((carry >> pos - to & mask) >>> 0);
          carry &= 2 ** pos - 1;
        }
        carry = carry << to - pos & mask;
        if (!padding2 && pos >= from)
          throw new Error("Excess padding");
        if (!padding2 && carry)
          throw new Error(`Non-zero padding: ${carry}`);
        if (padding2 && pos > 0)
          res.push(carry >>> 0);
        return res;
      }
      function radix(num) {
        assertNumber(num);
        return {
          encode: (bytes) => {
            if (!(bytes instanceof Uint8Array))
              throw new Error("radix.encode input should be Uint8Array");
            return convertRadix(Array.from(bytes), 2 ** 8, num);
          },
          decode: (digits) => {
            if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
              throw new Error("radix.decode input should be array of strings");
            return Uint8Array.from(convertRadix(digits, num, 2 ** 8));
          }
        };
      }
      function radix2(bits, revPadding = false) {
        assertNumber(bits);
        if (bits <= 0 || bits > 32)
          throw new Error("radix2: bits should be in (0..32]");
        if (radix2carry(8, bits) > 32 || radix2carry(bits, 8) > 32)
          throw new Error("radix2: carry overflow");
        return {
          encode: (bytes) => {
            if (!(bytes instanceof Uint8Array))
              throw new Error("radix2.encode input should be Uint8Array");
            return convertRadix2(Array.from(bytes), 8, bits, !revPadding);
          },
          decode: (digits) => {
            if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
              throw new Error("radix2.decode input should be array of strings");
            return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
          }
        };
      }
      function unsafeWrapper(fn) {
        if (typeof fn !== "function")
          throw new Error("unsafeWrapper fn should be function");
        return function(...args) {
          try {
            return fn.apply(null, args);
          } catch (e) {
          }
        };
      }
      function checksum(len, fn) {
        assertNumber(len);
        if (typeof fn !== "function")
          throw new Error("checksum fn should be function");
        return {
          encode(data) {
            if (!(data instanceof Uint8Array))
              throw new Error("checksum.encode: input should be Uint8Array");
            const checksum2 = fn(data).slice(0, len);
            const res = new Uint8Array(data.length + len);
            res.set(data);
            res.set(checksum2, data.length);
            return res;
          },
          decode(data) {
            if (!(data instanceof Uint8Array))
              throw new Error("checksum.decode: input should be Uint8Array");
            const payload = data.slice(0, -len);
            const newChecksum = fn(payload).slice(0, len);
            const oldChecksum = data.slice(-len);
            for (let i = 0; i < len; i++)
              if (newChecksum[i] !== oldChecksum[i])
                throw new Error("Invalid checksum");
            return payload;
          }
        };
      }
      exports.utils = { alphabet, chain, checksum, radix, radix2, join, padding };
      exports.base16 = chain(radix2(4), alphabet("0123456789ABCDEF"), join(""));
      exports.base32 = chain(radix2(5), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), padding(5), join(""));
      exports.base32hex = chain(radix2(5), alphabet("0123456789ABCDEFGHIJKLMNOPQRSTUV"), padding(5), join(""));
      exports.base32crockford = chain(radix2(5), alphabet("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), join(""), normalize((s) => s.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")));
      exports.base64 = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), padding(6), join(""));
      exports.base64url = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), padding(6), join(""));
      var genBase58 = (abc) => chain(radix(58), alphabet(abc), join(""));
      exports.base58 = genBase58("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
      exports.base58flickr = genBase58("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");
      exports.base58xrp = genBase58("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
      var XMR_BLOCK_LEN = [0, 2, 3, 5, 6, 7, 9, 10, 11];
      exports.base58xmr = {
        encode(data) {
          let res = "";
          for (let i = 0; i < data.length; i += 8) {
            const block = data.subarray(i, i + 8);
            res += exports.base58.encode(block).padStart(XMR_BLOCK_LEN[block.length], "1");
          }
          return res;
        },
        decode(str) {
          let res = [];
          for (let i = 0; i < str.length; i += 11) {
            const slice = str.slice(i, i + 11);
            const blockLen = XMR_BLOCK_LEN.indexOf(slice.length);
            const block = exports.base58.decode(slice);
            for (let j = 0; j < block.length - blockLen; j++) {
              if (block[j] !== 0)
                throw new Error("base58xmr: wrong padding");
            }
            res = res.concat(Array.from(block.slice(block.length - blockLen)));
          }
          return Uint8Array.from(res);
        }
      };
      var base58check = (sha256) => chain(checksum(4, (data) => sha256(sha256(data))), exports.base58);
      exports.base58check = base58check;
      var BECH_ALPHABET = chain(alphabet("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), join(""));
      var POLYMOD_GENERATORS = [996825010, 642813549, 513874426, 1027748829, 705979059];
      function bech32Polymod(pre) {
        const b = pre >> 25;
        let chk = (pre & 33554431) << 5;
        for (let i = 0; i < POLYMOD_GENERATORS.length; i++) {
          if ((b >> i & 1) === 1)
            chk ^= POLYMOD_GENERATORS[i];
        }
        return chk;
      }
      function bechChecksum(prefix, words, encodingConst = 1) {
        const len = prefix.length;
        let chk = 1;
        for (let i = 0; i < len; i++) {
          const c = prefix.charCodeAt(i);
          if (c < 33 || c > 126)
            throw new Error(`Invalid prefix (${prefix})`);
          chk = bech32Polymod(chk) ^ c >> 5;
        }
        chk = bech32Polymod(chk);
        for (let i = 0; i < len; i++)
          chk = bech32Polymod(chk) ^ prefix.charCodeAt(i) & 31;
        for (let v of words)
          chk = bech32Polymod(chk) ^ v;
        for (let i = 0; i < 6; i++)
          chk = bech32Polymod(chk);
        chk ^= encodingConst;
        return BECH_ALPHABET.encode(convertRadix2([chk % 2 ** 30], 30, 5, false));
      }
      function genBech32(encoding) {
        const ENCODING_CONST = encoding === "bech32" ? 1 : 734539939;
        const _words = radix2(5);
        const fromWords = _words.decode;
        const toWords = _words.encode;
        const fromWordsUnsafe = unsafeWrapper(fromWords);
        function encode(prefix, words, limit = 90) {
          if (typeof prefix !== "string")
            throw new Error(`bech32.encode prefix should be string, not ${typeof prefix}`);
          if (!Array.isArray(words) || words.length && typeof words[0] !== "number")
            throw new Error(`bech32.encode words should be array of numbers, not ${typeof words}`);
          const actualLength = prefix.length + 7 + words.length;
          if (limit !== false && actualLength > limit)
            throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
          prefix = prefix.toLowerCase();
          return `${prefix}1${BECH_ALPHABET.encode(words)}${bechChecksum(prefix, words, ENCODING_CONST)}`;
        }
        function decode(str, limit = 90) {
          if (typeof str !== "string")
            throw new Error(`bech32.decode input should be string, not ${typeof str}`);
          if (str.length < 8 || limit !== false && str.length > limit)
            throw new TypeError(`Wrong string length: ${str.length} (${str}). Expected (8..${limit})`);
          const lowered = str.toLowerCase();
          if (str !== lowered && str !== str.toUpperCase())
            throw new Error(`String must be lowercase or uppercase`);
          str = lowered;
          const sepIndex = str.lastIndexOf("1");
          if (sepIndex === 0 || sepIndex === -1)
            throw new Error(`Letter "1" must be present between prefix and data only`);
          const [prefix, _words2] = [str.slice(0, sepIndex), str.slice(sepIndex + 1)];
          if (_words2.length < 6)
            throw new Error("Data must be at least 6 characters long");
          const words = BECH_ALPHABET.decode(_words2).slice(0, -6);
          const sum = bechChecksum(prefix, words, ENCODING_CONST);
          if (!_words2.endsWith(sum))
            throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
          return { prefix, words };
        }
        const decodeUnsafe = unsafeWrapper(decode);
        function decodeToBytes(str) {
          const { prefix, words } = decode(str, false);
          return { prefix, words, bytes: fromWords(words) };
        }
        return { encode, decode, decodeToBytes, decodeUnsafe, fromWords, fromWordsUnsafe, toWords };
      }
      exports.bech32 = genBech32("bech32");
      exports.bech32m = genBech32("bech32m");
      exports.utf8 = {
        encode: (data) => new TextDecoder().decode(data),
        decode: (str) => new TextEncoder().encode(str)
      };
      exports.hex = chain(radix2(4), alphabet("0123456789abcdef"), join(""), normalize((s) => {
        if (typeof s !== "string" || s.length % 2)
          throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
        return s.toLowerCase();
      }));
      var CODERS = {
        utf8: exports.utf8,
        hex: exports.hex,
        base16: exports.base16,
        base32: exports.base32,
        base64: exports.base64,
        base64url: exports.base64url,
        base58: exports.base58,
        base58xmr: exports.base58xmr
      };
      var coderTypeError = `Invalid encoding type. Available types: ${Object.keys(CODERS).join(", ")}`;
      var bytesToString = (type, bytes) => {
        if (typeof type !== "string" || !CODERS.hasOwnProperty(type))
          throw new TypeError(coderTypeError);
        if (!(bytes instanceof Uint8Array))
          throw new TypeError("bytesToString() expects Uint8Array");
        return CODERS[type].encode(bytes);
      };
      exports.bytesToString = bytesToString;
      exports.str = exports.bytesToString;
      var stringToBytes = (type, str) => {
        if (!CODERS.hasOwnProperty(type))
          throw new TypeError(coderTypeError);
        if (typeof str !== "string")
          throw new TypeError("stringToBytes() expects string");
        return CODERS[type].decode(str);
      };
      exports.stringToBytes = stringToBytes;
      exports.bytes = exports.stringToBytes;
    }
  });

  // node_modules/@polkadot/util-crypto/base32/helpers.cjs
  var require_helpers2 = __commonJS({
    "node_modules/@polkadot/util-crypto/base32/helpers.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.createDecode = createDecode;
      exports.createEncode = createEncode;
      exports.createIs = createIs;
      exports.createValidate = createValidate;
      var _util = require_util();
      function createDecode(_ref, validate) {
        let {
          coder,
          ipfs
        } = _ref;
        return (value, ipfsCompat) => {
          validate(value, ipfsCompat);
          return coder.decode(ipfs && ipfsCompat ? value.substr(1) : value);
        };
      }
      function createEncode(_ref2) {
        let {
          coder,
          ipfs
        } = _ref2;
        return (value, ipfsCompat) => {
          const out = coder.encode((0, _util.u8aToU8a)(value));
          return ipfs && ipfsCompat ? `${ipfs}${out}` : out;
        };
      }
      function createIs(validate) {
        return (value, ipfsCompat) => {
          try {
            return validate(value, ipfsCompat);
          } catch (error) {
            return false;
          }
        };
      }
      function createValidate(_ref3) {
        let {
          chars,
          ipfs,
          type
        } = _ref3;
        return (value, ipfsCompat) => {
          (0, _util.assert)(value && typeof value === "string", () => `Expected non-null, non-empty ${type} string input`);
          if (ipfs && ipfsCompat) {
            (0, _util.assert)(value[0] === ipfs, () => `Expected ipfs-compatible ${type} to start with '${ipfs}'`);
          }
          for (let i = ipfsCompat ? 1 : 0; i < value.length; i++) {
            (0, _util.assert)(chars.includes(value[i]) || value[i] === "=" && (i === value.length - 1 || !chars.includes(value[i + 1])), () => `Invalid ${type} character "${value[i]}" (0x${value.charCodeAt(i).toString(16)}) at index ${i}`);
          }
          return true;
        };
      }
    }
  });

  // node_modules/@polkadot/util-crypto/base58/bs58.cjs
  var require_bs58 = __commonJS({
    "node_modules/@polkadot/util-crypto/base58/bs58.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isBase58 = exports.base58Validate = exports.base58Encode = exports.base58Decode = void 0;
      var _base = require_base();
      var _helpers = require_helpers2();
      var config = {
        chars: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        coder: _base.base58,
        ipfs: "z",
        type: "base58"
      };
      var base58Validate = (0, _helpers.createValidate)(config);
      exports.base58Validate = base58Validate;
      var base58Decode = (0, _helpers.createDecode)(config, base58Validate);
      exports.base58Decode = base58Decode;
      var base58Encode = (0, _helpers.createEncode)(config);
      exports.base58Encode = base58Encode;
      var isBase58 = (0, _helpers.createIs)(base58Validate);
      exports.isBase58 = isBase58;
    }
  });

  // node_modules/@polkadot/util-crypto/base58/index.cjs
  var require_base58 = __commonJS({
    "node_modules/@polkadot/util-crypto/base58/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "base58Decode", {
        enumerable: true,
        get: function() {
          return _bs.base58Decode;
        }
      });
      Object.defineProperty(exports, "base58Encode", {
        enumerable: true,
        get: function() {
          return _bs.base58Encode;
        }
      });
      Object.defineProperty(exports, "base58Validate", {
        enumerable: true,
        get: function() {
          return _bs.base58Validate;
        }
      });
      Object.defineProperty(exports, "isBase58", {
        enumerable: true,
        get: function() {
          return _bs.isBase58;
        }
      });
      var _bs = require_bs58();
    }
  });

  // node_modules/@noble/hashes/_blake2.js
  var require_blake2 = __commonJS({
    "node_modules/@noble/hashes/_blake2.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BLAKE2 = exports.SIGMA = void 0;
      var utils_js_1 = require_utils();
      exports.SIGMA = new Uint8Array([
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        14,
        10,
        4,
        8,
        9,
        15,
        13,
        6,
        1,
        12,
        0,
        2,
        11,
        7,
        5,
        3,
        11,
        8,
        12,
        0,
        5,
        2,
        15,
        13,
        10,
        14,
        3,
        6,
        7,
        1,
        9,
        4,
        7,
        9,
        3,
        1,
        13,
        12,
        11,
        14,
        2,
        6,
        5,
        10,
        4,
        0,
        15,
        8,
        9,
        0,
        5,
        7,
        2,
        4,
        10,
        15,
        14,
        1,
        11,
        12,
        6,
        8,
        3,
        13,
        2,
        12,
        6,
        10,
        0,
        11,
        8,
        3,
        4,
        13,
        7,
        5,
        15,
        14,
        1,
        9,
        12,
        5,
        1,
        15,
        14,
        13,
        4,
        10,
        0,
        7,
        6,
        3,
        9,
        2,
        8,
        11,
        13,
        11,
        7,
        14,
        12,
        1,
        3,
        9,
        5,
        0,
        15,
        4,
        8,
        6,
        2,
        10,
        6,
        15,
        14,
        9,
        11,
        3,
        0,
        8,
        12,
        2,
        13,
        7,
        1,
        4,
        10,
        5,
        10,
        2,
        8,
        4,
        7,
        6,
        1,
        5,
        15,
        11,
        9,
        14,
        3,
        12,
        13,
        0,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        14,
        10,
        4,
        8,
        9,
        15,
        13,
        6,
        1,
        12,
        0,
        2,
        11,
        7,
        5,
        3
      ]);
      var BLAKE2 = class extends utils_js_1.Hash {
        constructor(blockLen, outputLen, opts = {}, keyLen, saltLen, persLen) {
          super();
          this.blockLen = blockLen;
          this.outputLen = outputLen;
          this.length = 0;
          this.pos = 0;
          this.finished = false;
          this.destroyed = false;
          (0, utils_js_1.assertNumber)(blockLen);
          (0, utils_js_1.assertNumber)(outputLen);
          (0, utils_js_1.assertNumber)(keyLen);
          if (outputLen < 0 || outputLen > keyLen)
            throw new Error("Blake2: outputLen bigger than keyLen");
          if (opts.key !== void 0 && (opts.key.length < 1 || opts.key.length > keyLen))
            throw new Error(`Key should be up 1..${keyLen} byte long or undefined`);
          if (opts.salt !== void 0 && opts.salt.length !== saltLen)
            throw new Error(`Salt should be ${saltLen} byte long or undefined`);
          if (opts.personalization !== void 0 && opts.personalization.length !== persLen)
            throw new Error(`Personalization should be ${persLen} byte long or undefined`);
          this.buffer32 = (0, utils_js_1.u32)(this.buffer = new Uint8Array(blockLen));
        }
        update(data) {
          if (this.destroyed)
            throw new Error("instance is destroyed");
          const { finished, blockLen, buffer, buffer32 } = this;
          if (finished)
            throw new Error("digest() was already called");
          data = (0, utils_js_1.toBytes)(data);
          const len = data.length;
          for (let pos = 0; pos < len; ) {
            if (this.pos === blockLen) {
              this.compress(buffer32, 0, false);
              this.pos = 0;
            }
            const take = Math.min(blockLen - this.pos, len - pos);
            const dataOffset = data.byteOffset + pos;
            if (take === blockLen && !(dataOffset % 4) && pos + take < len) {
              const data32 = new Uint32Array(data.buffer, dataOffset, Math.floor((len - pos) / 4));
              for (let pos32 = 0; pos + blockLen < len; pos32 += buffer32.length, pos += blockLen) {
                this.length += blockLen;
                this.compress(data32, pos32, false);
              }
              continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            this.length += take;
            pos += take;
          }
          return this;
        }
        digestInto(out) {
          if (this.destroyed)
            throw new Error("instance is destroyed");
          if (!(out instanceof Uint8Array) || out.length < this.outputLen)
            throw new Error("_Blake2: Invalid output buffer");
          const { finished, pos, buffer32 } = this;
          if (finished)
            throw new Error("digest() was already called");
          this.finished = true;
          this.buffer.subarray(pos).fill(0);
          this.compress(buffer32, 0, true);
          const out32 = (0, utils_js_1.u32)(out);
          this.get().forEach((v, i) => out32[i] = v);
        }
        digest() {
          const { buffer, outputLen } = this;
          this.digestInto(buffer);
          const res = buffer.slice(0, outputLen);
          this.destroy();
          return res;
        }
        _cloneInto(to) {
          const { buffer, length, finished, destroyed, outputLen, pos } = this;
          to || (to = new this.constructor({ dkLen: outputLen }));
          to.set(...this.get());
          to.length = length;
          to.finished = finished;
          to.destroyed = destroyed;
          to.outputLen = outputLen;
          to.buffer.set(buffer);
          to.pos = pos;
          return to;
        }
      };
      exports.BLAKE2 = BLAKE2;
    }
  });

  // node_modules/@noble/hashes/blake2b.js
  var require_blake2b = __commonJS({
    "node_modules/@noble/hashes/blake2b.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.blake2b = void 0;
      var blake2 = __importStar(require_blake2());
      var u64 = __importStar(require_u64());
      var utils_js_1 = require_utils();
      var IV = new Uint32Array([
        4089235720,
        1779033703,
        2227873595,
        3144134277,
        4271175723,
        1013904242,
        1595750129,
        2773480762,
        2917565137,
        1359893119,
        725511199,
        2600822924,
        4215389547,
        528734635,
        327033209,
        1541459225
      ]);
      var BUF = new Uint32Array(32);
      function G1(a, b, c, d, msg, x) {
        const Xl = msg[x], Xh = msg[x + 1];
        let Al = BUF[2 * a], Ah = BUF[2 * a + 1];
        let Bl = BUF[2 * b], Bh = BUF[2 * b + 1];
        let Cl = BUF[2 * c], Ch = BUF[2 * c + 1];
        let Dl = BUF[2 * d], Dh = BUF[2 * d + 1];
        let ll = u64.add3L(Al, Bl, Xl);
        Ah = u64.add3H(ll, Ah, Bh, Xh);
        Al = ll | 0;
        ({ Dh, Dl } = { Dh: Dh ^ Ah, Dl: Dl ^ Al });
        ({ Dh, Dl } = { Dh: u64.rotr32H(Dh, Dl), Dl: u64.rotr32L(Dh, Dl) });
        ({ h: Ch, l: Cl } = u64.add(Ch, Cl, Dh, Dl));
        ({ Bh, Bl } = { Bh: Bh ^ Ch, Bl: Bl ^ Cl });
        ({ Bh, Bl } = { Bh: u64.rotrSH(Bh, Bl, 24), Bl: u64.rotrSL(Bh, Bl, 24) });
        BUF[2 * a] = Al, BUF[2 * a + 1] = Ah;
        BUF[2 * b] = Bl, BUF[2 * b + 1] = Bh;
        BUF[2 * c] = Cl, BUF[2 * c + 1] = Ch;
        BUF[2 * d] = Dl, BUF[2 * d + 1] = Dh;
      }
      function G2(a, b, c, d, msg, x) {
        const Xl = msg[x], Xh = msg[x + 1];
        let Al = BUF[2 * a], Ah = BUF[2 * a + 1];
        let Bl = BUF[2 * b], Bh = BUF[2 * b + 1];
        let Cl = BUF[2 * c], Ch = BUF[2 * c + 1];
        let Dl = BUF[2 * d], Dh = BUF[2 * d + 1];
        let ll = u64.add3L(Al, Bl, Xl);
        Ah = u64.add3H(ll, Ah, Bh, Xh);
        Al = ll | 0;
        ({ Dh, Dl } = { Dh: Dh ^ Ah, Dl: Dl ^ Al });
        ({ Dh, Dl } = { Dh: u64.rotrSH(Dh, Dl, 16), Dl: u64.rotrSL(Dh, Dl, 16) });
        ({ h: Ch, l: Cl } = u64.add(Ch, Cl, Dh, Dl));
        ({ Bh, Bl } = { Bh: Bh ^ Ch, Bl: Bl ^ Cl });
        ({ Bh, Bl } = { Bh: u64.rotrBH(Bh, Bl, 63), Bl: u64.rotrBL(Bh, Bl, 63) });
        BUF[2 * a] = Al, BUF[2 * a + 1] = Ah;
        BUF[2 * b] = Bl, BUF[2 * b + 1] = Bh;
        BUF[2 * c] = Cl, BUF[2 * c + 1] = Ch;
        BUF[2 * d] = Dl, BUF[2 * d + 1] = Dh;
      }
      var BLAKE2b = class extends blake2.BLAKE2 {
        constructor(opts = {}) {
          super(128, opts.dkLen === void 0 ? 64 : opts.dkLen, opts, 64, 16, 16);
          this.v0l = IV[0] | 0;
          this.v0h = IV[1] | 0;
          this.v1l = IV[2] | 0;
          this.v1h = IV[3] | 0;
          this.v2l = IV[4] | 0;
          this.v2h = IV[5] | 0;
          this.v3l = IV[6] | 0;
          this.v3h = IV[7] | 0;
          this.v4l = IV[8] | 0;
          this.v4h = IV[9] | 0;
          this.v5l = IV[10] | 0;
          this.v5h = IV[11] | 0;
          this.v6l = IV[12] | 0;
          this.v6h = IV[13] | 0;
          this.v7l = IV[14] | 0;
          this.v7h = IV[15] | 0;
          const keyLength = opts.key ? opts.key.length : 0;
          this.v0l ^= this.outputLen | keyLength << 8 | 1 << 16 | 1 << 24;
          if (opts.salt) {
            const salt = (0, utils_js_1.u32)((0, utils_js_1.toBytes)(opts.salt));
            this.v4l ^= salt[0];
            this.v4h ^= salt[1];
            this.v5l ^= salt[2];
            this.v5h ^= salt[3];
          }
          if (opts.personalization) {
            const pers = (0, utils_js_1.u32)((0, utils_js_1.toBytes)(opts.personalization));
            this.v6l ^= pers[0];
            this.v6h ^= pers[1];
            this.v7l ^= pers[2];
            this.v7h ^= pers[3];
          }
          if (opts.key) {
            const tmp = new Uint8Array(this.blockLen);
            tmp.set((0, utils_js_1.toBytes)(opts.key));
            this.update(tmp);
          }
        }
        get() {
          let { v0l, v0h, v1l, v1h, v2l, v2h, v3l, v3h, v4l, v4h, v5l, v5h, v6l, v6h, v7l, v7h } = this;
          return [v0l, v0h, v1l, v1h, v2l, v2h, v3l, v3h, v4l, v4h, v5l, v5h, v6l, v6h, v7l, v7h];
        }
        set(v0l, v0h, v1l, v1h, v2l, v2h, v3l, v3h, v4l, v4h, v5l, v5h, v6l, v6h, v7l, v7h) {
          this.v0l = v0l | 0;
          this.v0h = v0h | 0;
          this.v1l = v1l | 0;
          this.v1h = v1h | 0;
          this.v2l = v2l | 0;
          this.v2h = v2h | 0;
          this.v3l = v3l | 0;
          this.v3h = v3h | 0;
          this.v4l = v4l | 0;
          this.v4h = v4h | 0;
          this.v5l = v5l | 0;
          this.v5h = v5h | 0;
          this.v6l = v6l | 0;
          this.v6h = v6h | 0;
          this.v7l = v7l | 0;
          this.v7h = v7h | 0;
        }
        compress(msg, offset, isLast) {
          this.get().forEach((v, i) => BUF[i] = v);
          BUF.set(IV, 16);
          let { h, l } = u64.fromBig(BigInt(this.length));
          BUF[24] = IV[8] ^ l;
          BUF[25] = IV[9] ^ h;
          if (isLast) {
            BUF[28] = ~BUF[28];
            BUF[29] = ~BUF[29];
          }
          let j = 0;
          const s = blake2.SIGMA;
          for (let i = 0; i < 12; i++) {
            G1(0, 4, 8, 12, msg, offset + 2 * s[j++]);
            G2(0, 4, 8, 12, msg, offset + 2 * s[j++]);
            G1(1, 5, 9, 13, msg, offset + 2 * s[j++]);
            G2(1, 5, 9, 13, msg, offset + 2 * s[j++]);
            G1(2, 6, 10, 14, msg, offset + 2 * s[j++]);
            G2(2, 6, 10, 14, msg, offset + 2 * s[j++]);
            G1(3, 7, 11, 15, msg, offset + 2 * s[j++]);
            G2(3, 7, 11, 15, msg, offset + 2 * s[j++]);
            G1(0, 5, 10, 15, msg, offset + 2 * s[j++]);
            G2(0, 5, 10, 15, msg, offset + 2 * s[j++]);
            G1(1, 6, 11, 12, msg, offset + 2 * s[j++]);
            G2(1, 6, 11, 12, msg, offset + 2 * s[j++]);
            G1(2, 7, 8, 13, msg, offset + 2 * s[j++]);
            G2(2, 7, 8, 13, msg, offset + 2 * s[j++]);
            G1(3, 4, 9, 14, msg, offset + 2 * s[j++]);
            G2(3, 4, 9, 14, msg, offset + 2 * s[j++]);
          }
          this.v0l ^= BUF[0] ^ BUF[16];
          this.v0h ^= BUF[1] ^ BUF[17];
          this.v1l ^= BUF[2] ^ BUF[18];
          this.v1h ^= BUF[3] ^ BUF[19];
          this.v2l ^= BUF[4] ^ BUF[20];
          this.v2h ^= BUF[5] ^ BUF[21];
          this.v3l ^= BUF[6] ^ BUF[22];
          this.v3h ^= BUF[7] ^ BUF[23];
          this.v4l ^= BUF[8] ^ BUF[24];
          this.v4h ^= BUF[9] ^ BUF[25];
          this.v5l ^= BUF[10] ^ BUF[26];
          this.v5h ^= BUF[11] ^ BUF[27];
          this.v6l ^= BUF[12] ^ BUF[28];
          this.v6h ^= BUF[13] ^ BUF[29];
          this.v7l ^= BUF[14] ^ BUF[30];
          this.v7h ^= BUF[15] ^ BUF[31];
          BUF.fill(0);
        }
        destroy() {
          this.destroyed = true;
          this.buffer32.fill(0);
          this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      };
      exports.blake2b = (0, utils_js_1.wrapConstructorWithOpts)((opts) => new BLAKE2b(opts));
    }
  });

  // node_modules/@polkadot/util-crypto/helpers.cjs
  var require_helpers3 = __commonJS({
    "node_modules/@polkadot/util-crypto/helpers.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.createAsHex = createAsHex;
      exports.createBitHasher = createBitHasher;
      exports.createDualHasher = createDualHasher;
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      function createAsHex(fn) {
        return function() {
          return (0, _util.u8aToHex)(fn(...arguments));
        };
      }
      function createBitHasher(bitLength, fn) {
        return (data, onlyJs) => fn(data, bitLength, onlyJs);
      }
      function createDualHasher(wa, js) {
        return function(value) {
          let bitLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 256;
          let onlyJs = arguments.length > 2 ? arguments[2] : void 0;
          const u8a = (0, _util.u8aToU8a)(value);
          return !_util.hasBigInt || !onlyJs && (0, _wasmCrypto.isReady)() ? wa[bitLength](u8a) : js[bitLength](u8a);
        };
      }
    }
  });

  // node_modules/@polkadot/util-crypto/blake2/asU8a.cjs
  var require_asU8a = __commonJS({
    "node_modules/@polkadot/util-crypto/blake2/asU8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.blake2AsHex = void 0;
      exports.blake2AsU8a = blake2AsU8a;
      var _blake2b = require_blake2b();
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      var _helpers = require_helpers3();
      function blake2AsU8a(data) {
        let bitLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 256;
        let key = arguments.length > 2 ? arguments[2] : void 0;
        let onlyJs = arguments.length > 3 ? arguments[3] : void 0;
        const byteLength = Math.ceil(bitLength / 8);
        const u8a = (0, _util.u8aToU8a)(data);
        return !_util.hasBigInt || !onlyJs && (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.blake2b)(u8a, (0, _util.u8aToU8a)(key), byteLength) : (0, _blake2b.blake2b)(u8a, {
          dkLen: byteLength,
          key: key || void 0
        });
      }
      var blake2AsHex = (0, _helpers.createAsHex)(blake2AsU8a);
      exports.blake2AsHex = blake2AsHex;
    }
  });

  // node_modules/@polkadot/util-crypto/address/sshash.cjs
  var require_sshash = __commonJS({
    "node_modules/@polkadot/util-crypto/address/sshash.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sshash = sshash;
      var _util = require_util();
      var _asU8a = require_asU8a();
      var SS58_PREFIX = (0, _util.stringToU8a)("SS58PRE");
      function sshash(key) {
        return (0, _asU8a.blake2AsU8a)((0, _util.u8aConcat)(SS58_PREFIX, key), 512);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/address/checksum.cjs
  var require_checksum = __commonJS({
    "node_modules/@polkadot/util-crypto/address/checksum.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.checkAddressChecksum = checkAddressChecksum;
      var _sshash = require_sshash();
      function checkAddressChecksum(decoded) {
        const ss58Length = decoded[0] & 64 ? 2 : 1;
        const ss58Decoded = ss58Length === 1 ? decoded[0] : (decoded[0] & 63) << 2 | decoded[1] >> 6 | (decoded[1] & 63) << 8;
        const isPublicKey = [34 + ss58Length, 35 + ss58Length].includes(decoded.length);
        const length = decoded.length - (isPublicKey ? 2 : 1);
        const hash = (0, _sshash.sshash)(decoded.subarray(0, length));
        const isValid = (decoded[0] & 128) === 0 && ![46, 47].includes(decoded[0]) && (isPublicKey ? decoded[decoded.length - 2] === hash[0] && decoded[decoded.length - 1] === hash[1] : decoded[decoded.length - 1] === hash[0]);
        return [isValid, length, ss58Length, ss58Decoded];
      }
    }
  });

  // node_modules/@substrate/ss58-registry/cjs/index.js
  var require_cjs = __commonJS({
    "node_modules/@substrate/ss58-registry/cjs/index.js"(exports, module) {
      module.exports = [
        {
          "prefix": 0,
          "network": "polkadot",
          "displayName": "Polkadot Relay Chain",
          "symbols": [
            "DOT"
          ],
          "decimals": [
            10
          ],
          "standardAccount": "*25519",
          "website": "https://polkadot.network"
        },
        {
          "prefix": 1,
          "network": "BareSr25519",
          "displayName": "Bare 32-bit Schnorr/Ristretto (S/R 25519) public key.",
          "symbols": [],
          "decimals": [],
          "standardAccount": "Sr25519",
          "website": null
        },
        {
          "prefix": 2,
          "network": "kusama",
          "displayName": "Kusama Relay Chain",
          "symbols": [
            "KSM"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://kusama.network"
        },
        {
          "prefix": 3,
          "network": "BareEd25519",
          "displayName": "Bare 32-bit Ed25519 public key.",
          "symbols": [],
          "decimals": [],
          "standardAccount": "Ed25519",
          "website": null
        },
        {
          "prefix": 4,
          "network": "katalchain",
          "displayName": "Katal Chain",
          "symbols": [],
          "decimals": [],
          "standardAccount": "*25519",
          "website": null
        },
        {
          "prefix": 5,
          "network": "astar",
          "displayName": "Astar Network",
          "symbols": [
            "ASTR"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://astar.network"
        },
        {
          "prefix": 6,
          "network": "bifrost",
          "displayName": "Bifrost",
          "symbols": [
            "BNC"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://bifrost.finance/"
        },
        {
          "prefix": 7,
          "network": "edgeware",
          "displayName": "Edgeware",
          "symbols": [
            "EDG"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://edgewa.re"
        },
        {
          "prefix": 8,
          "network": "karura",
          "displayName": "Karura",
          "symbols": [
            "KAR"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://karura.network/"
        },
        {
          "prefix": 9,
          "network": "reynolds",
          "displayName": "Laminar Reynolds Canary",
          "symbols": [
            "REY"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "http://laminar.network/"
        },
        {
          "prefix": 10,
          "network": "acala",
          "displayName": "Acala",
          "symbols": [
            "ACA"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://acala.network/"
        },
        {
          "prefix": 11,
          "network": "laminar",
          "displayName": "Laminar",
          "symbols": [
            "LAMI"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "http://laminar.network/"
        },
        {
          "prefix": 12,
          "network": "polymesh",
          "displayName": "Polymesh",
          "symbols": [
            "POLYX"
          ],
          "decimals": [
            6
          ],
          "standardAccount": "*25519",
          "website": "https://polymath.network/"
        },
        {
          "prefix": 13,
          "network": "integritee",
          "displayName": "Integritee",
          "symbols": [
            "TEER"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://integritee.network"
        },
        {
          "prefix": 14,
          "network": "totem",
          "displayName": "Totem",
          "symbols": [
            "TOTEM"
          ],
          "decimals": [
            0
          ],
          "standardAccount": "*25519",
          "website": "https://totemaccounting.com"
        },
        {
          "prefix": 15,
          "network": "synesthesia",
          "displayName": "Synesthesia",
          "symbols": [
            "SYN"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://synesthesia.network/"
        },
        {
          "prefix": 16,
          "network": "kulupu",
          "displayName": "Kulupu",
          "symbols": [
            "KLP"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://kulupu.network/"
        },
        {
          "prefix": 17,
          "network": "dark",
          "displayName": "Dark Mainnet",
          "symbols": [],
          "decimals": [],
          "standardAccount": "*25519",
          "website": null
        },
        {
          "prefix": 18,
          "network": "darwinia",
          "displayName": "Darwinia Network",
          "symbols": [
            "RING",
            "KTON"
          ],
          "decimals": [
            9,
            9
          ],
          "standardAccount": "*25519",
          "website": "https://darwinia.network/"
        },
        {
          "prefix": 20,
          "network": "stafi",
          "displayName": "Stafi",
          "symbols": [
            "FIS"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://stafi.io"
        },
        {
          "prefix": 22,
          "network": "dock-pos-mainnet",
          "displayName": "Dock Mainnet",
          "symbols": [
            "DCK"
          ],
          "decimals": [
            6
          ],
          "standardAccount": "*25519",
          "website": "https://dock.io"
        },
        {
          "prefix": 23,
          "network": "shift",
          "displayName": "ShiftNrg",
          "symbols": [],
          "decimals": [],
          "standardAccount": "*25519",
          "website": null
        },
        {
          "prefix": 24,
          "network": "zero",
          "displayName": "ZERO",
          "symbols": [
            "ZERO"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://zero.io"
        },
        {
          "prefix": 25,
          "network": "zero-alphaville",
          "displayName": "ZERO Alphaville",
          "symbols": [
            "ZERO"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://zero.io"
        },
        {
          "prefix": 26,
          "network": "jupiter",
          "displayName": "Jupiter",
          "symbols": [
            "jDOT"
          ],
          "decimals": [
            10
          ],
          "standardAccount": "*25519",
          "website": "https://jupiter.patract.io"
        },
        {
          "prefix": 27,
          "network": "kabocha",
          "displayName": "Kabocha",
          "symbols": [
            "KAB"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://kabocha.network"
        },
        {
          "prefix": 28,
          "network": "subsocial",
          "displayName": "Subsocial",
          "symbols": [],
          "decimals": [],
          "standardAccount": "*25519",
          "website": null
        },
        {
          "prefix": 29,
          "network": "cord",
          "displayName": "CORD Network",
          "symbols": [
            "DHI",
            "WAY"
          ],
          "decimals": [
            12,
            12
          ],
          "standardAccount": "*25519",
          "website": "https://cord.network/"
        },
        {
          "prefix": 30,
          "network": "phala",
          "displayName": "Phala Network",
          "symbols": [
            "PHA"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://phala.network"
        },
        {
          "prefix": 31,
          "network": "litentry",
          "displayName": "Litentry Network",
          "symbols": [
            "LIT"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://litentry.com/"
        },
        {
          "prefix": 32,
          "network": "robonomics",
          "displayName": "Robonomics",
          "symbols": [
            "XRT"
          ],
          "decimals": [
            9
          ],
          "standardAccount": "*25519",
          "website": "https://robonomics.network"
        },
        {
          "prefix": 33,
          "network": "datahighway",
          "displayName": "DataHighway",
          "symbols": [],
          "decimals": [],
          "standardAccount": "*25519",
          "website": null
        },
        {
          "prefix": 34,
          "network": "ares",
          "displayName": "Ares Protocol",
          "symbols": [
            "ARES"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://www.aresprotocol.com/"
        },
        {
          "prefix": 35,
          "network": "vln",
          "displayName": "Valiu Liquidity Network",
          "symbols": [
            "USDv"
          ],
          "decimals": [
            15
          ],
          "standardAccount": "*25519",
          "website": "https://valiu.com/"
        },
        {
          "prefix": 36,
          "network": "centrifuge",
          "displayName": "Centrifuge Chain",
          "symbols": [
            "CFG"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://centrifuge.io/"
        },
        {
          "prefix": 37,
          "network": "nodle",
          "displayName": "Nodle Chain",
          "symbols": [
            "NODL"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://nodle.io/"
        },
        {
          "prefix": 38,
          "network": "kilt",
          "displayName": "KILT Spiritnet",
          "symbols": [
            "KILT"
          ],
          "decimals": [
            15
          ],
          "standardAccount": "*25519",
          "website": "https://kilt.io/"
        },
        {
          "prefix": 39,
          "network": "mathchain",
          "displayName": "MathChain mainnet",
          "symbols": [
            "MATH"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://mathwallet.org"
        },
        {
          "prefix": 40,
          "network": "mathchain-testnet",
          "displayName": "MathChain testnet",
          "symbols": [
            "MATH"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://mathwallet.org"
        },
        {
          "prefix": 41,
          "network": "poli",
          "displayName": "Polimec Chain",
          "symbols": [],
          "decimals": [],
          "standardAccount": "*25519",
          "website": "https://polimec.io/"
        },
        {
          "prefix": 42,
          "network": "substrate",
          "displayName": "Substrate",
          "symbols": [],
          "decimals": [],
          "standardAccount": "*25519",
          "website": "https://substrate.io/"
        },
        {
          "prefix": 43,
          "network": "BareSecp256k1",
          "displayName": "Bare 32-bit ECDSA SECP-256k1 public key.",
          "symbols": [],
          "decimals": [],
          "standardAccount": "secp256k1",
          "website": null
        },
        {
          "prefix": 44,
          "network": "chainx",
          "displayName": "ChainX",
          "symbols": [
            "PCX"
          ],
          "decimals": [
            8
          ],
          "standardAccount": "*25519",
          "website": "https://chainx.org/"
        },
        {
          "prefix": 45,
          "network": "uniarts",
          "displayName": "UniArts Network",
          "symbols": [
            "UART",
            "UINK"
          ],
          "decimals": [
            12,
            12
          ],
          "standardAccount": "*25519",
          "website": "https://uniarts.me"
        },
        {
          "prefix": 46,
          "network": "reserved46",
          "displayName": "This prefix is reserved.",
          "symbols": [],
          "decimals": [],
          "standardAccount": null,
          "website": null
        },
        {
          "prefix": 47,
          "network": "reserved47",
          "displayName": "This prefix is reserved.",
          "symbols": [],
          "decimals": [],
          "standardAccount": null,
          "website": null
        },
        {
          "prefix": 48,
          "network": "neatcoin",
          "displayName": "Neatcoin Mainnet",
          "symbols": [
            "NEAT"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://neatcoin.org"
        },
        {
          "prefix": 49,
          "network": "picasso",
          "displayName": "Picasso",
          "symbols": [
            "PICA"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://picasso.composable.finance"
        },
        {
          "prefix": 50,
          "network": "composable",
          "displayName": "Composable",
          "symbols": [
            "LAYR"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://composable.finance"
        },
        {
          "prefix": 51,
          "network": "oak",
          "displayName": "OAK Network",
          "symbols": [
            "OAK"
          ],
          "decimals": [
            10
          ],
          "standardAccount": "*25519",
          "website": "https://oak.tech"
        },
        {
          "prefix": 52,
          "network": "KICO",
          "displayName": "KICO",
          "symbols": [
            "KICO"
          ],
          "decimals": [
            14
          ],
          "standardAccount": "*25519",
          "website": "https://dico.io"
        },
        {
          "prefix": 53,
          "network": "DICO",
          "displayName": "DICO",
          "symbols": [
            "DICO"
          ],
          "decimals": [
            14
          ],
          "standardAccount": "*25519",
          "website": "https://dico.io"
        },
        {
          "prefix": 54,
          "network": "cere",
          "displayName": "Cere Network",
          "symbols": [
            "CERE"
          ],
          "decimals": [
            10
          ],
          "standardAccount": "*25519",
          "website": "https://cere.network"
        },
        {
          "prefix": 55,
          "network": "xxnetwork",
          "displayName": "xx network",
          "symbols": [
            "XX"
          ],
          "decimals": [
            9
          ],
          "standardAccount": "*25519",
          "website": "https://xx.network"
        },
        {
          "prefix": 63,
          "network": "hydradx",
          "displayName": "HydraDX",
          "symbols": [
            "HDX"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://hydradx.io"
        },
        {
          "prefix": 65,
          "network": "aventus",
          "displayName": "AvN Mainnet",
          "symbols": [
            "AVT"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://aventus.io"
        },
        {
          "prefix": 66,
          "network": "crust",
          "displayName": "Crust Network",
          "symbols": [
            "CRU"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://crust.network"
        },
        {
          "prefix": 67,
          "network": "genshiro",
          "displayName": "Genshiro Network",
          "symbols": [
            "GENS",
            "EQD",
            "LPT0"
          ],
          "decimals": [
            9,
            9,
            9
          ],
          "standardAccount": "*25519",
          "website": "https://genshiro.equilibrium.io"
        },
        {
          "prefix": 68,
          "network": "equilibrium",
          "displayName": "Equilibrium Network",
          "symbols": [
            "EQ"
          ],
          "decimals": [
            9
          ],
          "standardAccount": "*25519",
          "website": "https://equilibrium.io"
        },
        {
          "prefix": 69,
          "network": "sora",
          "displayName": "SORA Network",
          "symbols": [
            "XOR"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://sora.org"
        },
        {
          "prefix": 73,
          "network": "zeitgeist",
          "displayName": "Zeitgeist",
          "symbols": [
            "ZTG"
          ],
          "decimals": [
            10
          ],
          "standardAccount": "*25519",
          "website": "https://zeitgeist.pm"
        },
        {
          "prefix": 77,
          "network": "manta",
          "displayName": "Manta network",
          "symbols": [
            "MANTA"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://manta.network"
        },
        {
          "prefix": 78,
          "network": "calamari",
          "displayName": "Calamari: Manta Canary Network",
          "symbols": [
            "KMA"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://manta.network"
        },
        {
          "prefix": 88,
          "network": "polkadex",
          "displayName": "Polkadex Mainnet",
          "symbols": [
            "PDEX"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://polkadex.trade"
        },
        {
          "prefix": 89,
          "network": "polkadexparachain",
          "displayName": "Polkadex Parachain",
          "symbols": [
            "PDEX"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://polkadex.trade"
        },
        {
          "prefix": 93,
          "network": "fragnova",
          "displayName": "Fragnova Network",
          "symbols": [
            "NOVA"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://fragnova.com"
        },
        {
          "prefix": 98,
          "network": "polkasmith",
          "displayName": "PolkaSmith Canary Network",
          "symbols": [
            "PKS"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://polkafoundry.com"
        },
        {
          "prefix": 99,
          "network": "polkafoundry",
          "displayName": "PolkaFoundry Network",
          "symbols": [
            "PKF"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://polkafoundry.com"
        },
        {
          "prefix": 101,
          "network": "origintrail-parachain",
          "displayName": "OriginTrail Parachain",
          "symbols": [
            "OTP"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://parachain.origintrail.io/"
        },
        {
          "prefix": 105,
          "network": "pontem-network",
          "displayName": "Pontem Network",
          "symbols": [
            "PONT"
          ],
          "decimals": [
            10
          ],
          "standardAccount": "*25519",
          "website": "https://pontem.network"
        },
        {
          "prefix": 110,
          "network": "heiko",
          "displayName": "Heiko",
          "symbols": [
            "HKO"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://parallel.fi/"
        },
        {
          "prefix": 113,
          "network": "integritee-incognito",
          "displayName": "Integritee Incognito",
          "symbols": [],
          "decimals": [],
          "standardAccount": "*25519",
          "website": "https://integritee.network"
        },
        {
          "prefix": 117,
          "network": "tinker",
          "displayName": "Tinker",
          "symbols": [
            "TNKR"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://invarch.network"
        },
        {
          "prefix": 128,
          "network": "clover",
          "displayName": "Clover Finance",
          "symbols": [
            "CLV"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://clover.finance"
        },
        {
          "prefix": 131,
          "network": "litmus",
          "displayName": "Litmus Network",
          "symbols": [
            "LIT"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://litentry.com/"
        },
        {
          "prefix": 136,
          "network": "altair",
          "displayName": "Altair",
          "symbols": [
            "AIR"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://centrifuge.io/"
        },
        {
          "prefix": 172,
          "network": "parallel",
          "displayName": "Parallel",
          "symbols": [
            "PARA"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://parallel.fi/"
        },
        {
          "prefix": 252,
          "network": "social-network",
          "displayName": "Social Network",
          "symbols": [
            "NET"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://social.network"
        },
        {
          "prefix": 255,
          "network": "quartz_mainnet",
          "displayName": "QUARTZ by UNIQUE",
          "symbols": [
            "QTZ"
          ],
          "decimals": [
            15
          ],
          "standardAccount": "*25519",
          "website": "https://unique.network"
        },
        {
          "prefix": 268,
          "network": "pioneer_network",
          "displayName": "Pioneer Network by Bit.Country",
          "symbols": [
            "NEER"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://bit.country"
        },
        {
          "prefix": 420,
          "network": "sora_kusama_para",
          "displayName": "SORA Kusama Parachain",
          "symbols": [
            "XOR"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://sora.org"
        },
        {
          "prefix": 789,
          "network": "geek",
          "displayName": "GEEK Network",
          "symbols": [
            "GEEK"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://geek.gl"
        },
        {
          "prefix": 1110,
          "network": "efinity",
          "displayName": "Efinity",
          "symbols": [
            "EFI"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "Sr25519",
          "website": "https://efinity.io/"
        },
        {
          "prefix": 1284,
          "network": "moonbeam",
          "displayName": "Moonbeam",
          "symbols": [
            "GLMR"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "secp256k1",
          "website": "https://moonbeam.network"
        },
        {
          "prefix": 1285,
          "network": "moonriver",
          "displayName": "Moonriver",
          "symbols": [
            "MOVR"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "secp256k1",
          "website": "https://moonbeam.network"
        },
        {
          "prefix": 1328,
          "network": "ajuna",
          "displayName": "Ajuna Network",
          "symbols": [
            "AJUN"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://ajuna.io"
        },
        {
          "prefix": 1337,
          "network": "bajun",
          "displayName": "Bajun Network",
          "symbols": [
            "BAJU"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://ajuna.io"
        },
        {
          "prefix": 2007,
          "network": "kapex",
          "displayName": "Kapex",
          "symbols": [
            "KAPEX"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://totemaccounting.com"
        },
        {
          "prefix": 2032,
          "network": "interlay",
          "displayName": "Interlay",
          "symbols": [
            "INTR"
          ],
          "decimals": [
            10
          ],
          "standardAccount": "*25519",
          "website": "https://interlay.io/"
        },
        {
          "prefix": 2092,
          "network": "kintsugi",
          "displayName": "Kintsugi",
          "symbols": [
            "KINT"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://interlay.io/"
        },
        {
          "prefix": 2254,
          "network": "subspace_testnet",
          "displayName": "Subspace testnet",
          "symbols": [
            "tSSC"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://subspace.network"
        },
        {
          "prefix": 6094,
          "network": "subspace",
          "displayName": "Subspace",
          "symbols": [
            "SSC"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://subspace.network"
        },
        {
          "prefix": 7007,
          "network": "tidefi",
          "displayName": "Tidefi",
          "symbols": [
            "TIFI"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://tidefi.com"
        },
        {
          "prefix": 7391,
          "network": "unique_mainnet",
          "displayName": "Unique Network",
          "symbols": [
            "UNQ"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://unique.network"
        },
        {
          "prefix": 9807,
          "network": "dentnet",
          "displayName": "DENTNet",
          "symbols": [
            "DENTX"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://www.dentnet.io"
        },
        {
          "prefix": 10041,
          "network": "basilisk",
          "displayName": "Basilisk",
          "symbols": [
            "BSX"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://bsx.fi"
        },
        {
          "prefix": 11330,
          "network": "cess-testnet",
          "displayName": "CESS Testnet",
          "symbols": [
            "TCESS"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://cess.cloud"
        },
        {
          "prefix": 11331,
          "network": "cess",
          "displayName": "CESS",
          "symbols": [
            "CESS"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://cess.cloud"
        },
        {
          "prefix": 11820,
          "network": "contextfree",
          "displayName": "Automata ContextFree",
          "symbols": [
            "CTX"
          ],
          "decimals": [
            18
          ],
          "standardAccount": "*25519",
          "website": "https://ata.network"
        },
        {
          "prefix": 12191,
          "network": "nftmart",
          "displayName": "NFTMart",
          "symbols": [
            "NMT"
          ],
          "decimals": [
            12
          ],
          "standardAccount": "*25519",
          "website": "https://nftmart.io"
        }
      ];
    }
  });

  // node_modules/@polkadot/networks/defaults/genesis.cjs
  var require_genesis = __commonJS({
    "node_modules/@polkadot/networks/defaults/genesis.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.knownGenesis = void 0;
      var knownGenesis = {
        acala: ["0xfc41b9bd8ef8fe53d58c7ea67c794c7ec9a73daf05e6d54b14ff6342c99ba64c"],
        astar: ["0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6"],
        basilisk: ["0xa85cfb9b9fd4d622a5b28289a02347af987d8f73fa3108450e2b4a11c1ce5755"],
        bifrost: ["0x9f28c6a68e0fc9646eff64935684f6eeeece527e37bbe1f213d22caa1d9d6bed"],
        centrifuge: ["0x67dddf2673b69e5f875f6f25277495834398eafd67f492e09f3f3345e003d1b5"],
        "dock-mainnet": ["0x6bfe24dca2a3be10f22212678ac13a6446ec764103c0f3471c71609eac384aae", "0xf73467c6544aa68df2ee546b135f955c46b90fa627e9b5d7935f41061bb8a5a9"],
        edgeware: ["0x742a2ca70c2fda6cee4f8df98d64c4c670a052d9568058982dad9d5a7a135c5b"],
        equilibrium: ["0x6f1a800de3daff7f5e037ddf66ab22ce03ab91874debeddb1086f5f7dbd48925"],
        genshiro: ["0x9b8cefc0eb5c568b527998bdd76c184e2b76ae561be76e4667072230217ea243"],
        hydradx: [
          "0xd2a620c27ec5cbc5621ff9a522689895074f7cca0d08e7134a7804e1a3ba86fc",
          "0x10af6e84234477d84dc572bac0789813b254aa490767ed06fb9591191d1073f9",
          "0x3d75507dd46301767e601265791da1d9cb47b6ebc94e87347b635e5bf58bd047",
          "0x0ed32bfcab4a83517fac88f2aa7cbc2f88d3ab93be9a12b6188a036bf8a943c2"
        ],
        karura: ["0xbaf5aabe40646d11f0ee8abbdc64f4a4b7674925cba08e4a05ff9ebed6e2126b"],
        kulupu: ["0xf7a99d3cb92853d00d5275c971c132c074636256583fee53b3bbe60d7b8769ba"],
        kusama: [
          "0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe",
          "0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636",
          "0x3fd7b9eb6a00376e5be61f01abb429ffb0b104be05eaff4d458da48fcd425baf"
        ],
        "nodle-chain": ["0xa3d114c2b8d0627c1aa9b134eafcf7d05ca561fdc19fb388bb9457f81809fb23"],
        picasso: ["0xe8e7f0f4c4f5a00720b4821dbfddefea7490bcf0b19009961cc46957984e2c1c"],
        polkadot: ["0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3"],
        polymesh: ["0x6fbd74e5e1d0a61d52ccfe9d4adaed16dd3a7caa37c6bc4d0c2fa12e8b2f4063"],
        rococo: ["0xaaf2cd1b74b5f726895921259421b534124726263982522174147046b8827897", "0x037f5f3c8e67b314062025fc886fcd6238ea25a4a9b45dce8d246815c9ebe770", "0xc196f81260cf1686172b47a79cf002120735d7cb0eb1474e8adce56618456fff", "0xf6e9983c37baf68846fedafe21e56718790e39fb1c582abc408b81bc7b208f9a", "0x5fce687da39305dfe682b117f0820b319348e8bb37eb16cf34acbf6a202de9d9", "0xe7c3d5edde7db964317cd9b51a3a059d7cd99f81bdbce14990047354334c9779", "0x1611e1dbf0405379b861e2e27daa90f480b2e6d3682414a80835a52e8cb8a215", "0x343442f12fa715489a8714e79a7b264ea88c0d5b8c66b684a7788a516032f6b9", "0x78bcd530c6b3a068bc17473cf5d2aff9c287102bed9af3ae3c41c33b9d6c6147", "0x47381ee0697153d64404fc578392c8fd5cba9073391908f46c888498415647bd", "0x19c0e4fa8ab75f5ac7865e0b8f74ff91eb9a100d336f423cd013a8befba40299"],
        sora: ["0x7e4e32d0feafd4f9c9414b0be86373f9a1efa904809b683453a9af6856d38ad5"],
        stafi: ["0x290a4149f09ea0e402c74c1c7e96ae4239588577fe78932f94f5404c68243d80"],
        statemine: ["0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a"],
        subsocial: ["0x0bd72c1c305172e1275278aaeb3f161e02eccb7a819e63f62d47bd53a28189f8"],
        westend: ["0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e"]
      };
      exports.knownGenesis = knownGenesis;
    }
  });

  // node_modules/@polkadot/networks/defaults/icons.cjs
  var require_icons = __commonJS({
    "node_modules/@polkadot/networks/defaults/icons.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.knownIcon = void 0;
      var knownIcon = {
        centrifuge: "polkadot",
        kusama: "polkadot",
        polkadot: "polkadot",
        sora: "polkadot",
        statemine: "polkadot",
        statemint: "polkadot",
        westmint: "polkadot"
      };
      exports.knownIcon = knownIcon;
    }
  });

  // node_modules/@polkadot/networks/defaults/ledger.cjs
  var require_ledger = __commonJS({
    "node_modules/@polkadot/networks/defaults/ledger.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.knownLedger = void 0;
      var knownLedger = {
        bifrost: 788,
        centrifuge: 747,
        "dock-mainnet": 594,
        edgeware: 523,
        equilibrium: 99999997,
        genshiro: 99999996,
        kusama: 434,
        "nodle-chain": 1003,
        polkadot: 354,
        polymesh: 595,
        sora: 617,
        statemine: 434
      };
      exports.knownLedger = knownLedger;
    }
  });

  // node_modules/@polkadot/networks/defaults/testnets.cjs
  var require_testnets = __commonJS({
    "node_modules/@polkadot/networks/defaults/testnets.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.knownTestnet = void 0;
      var knownTestnet = {
        "": true,
        "cess-testnet": true,
        "dock-testnet": true,
        jupiter: true,
        "mathchain-testnet": true,
        subspace_testnet: true,
        "zero-alphaville": true
      };
      exports.knownTestnet = knownTestnet;
    }
  });

  // node_modules/@polkadot/networks/defaults/index.cjs
  var require_defaults = __commonJS({
    "node_modules/@polkadot/networks/defaults/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "knownGenesis", {
        enumerable: true,
        get: function() {
          return _genesis.knownGenesis;
        }
      });
      Object.defineProperty(exports, "knownIcon", {
        enumerable: true,
        get: function() {
          return _icons.knownIcon;
        }
      });
      Object.defineProperty(exports, "knownLedger", {
        enumerable: true,
        get: function() {
          return _ledger.knownLedger;
        }
      });
      Object.defineProperty(exports, "knownTestnet", {
        enumerable: true,
        get: function() {
          return _testnets.knownTestnet;
        }
      });
      var _genesis = require_genesis();
      var _icons = require_icons();
      var _ledger = require_ledger();
      var _testnets = require_testnets();
    }
  });

  // node_modules/@polkadot/networks/interfaces.cjs
  var require_interfaces = __commonJS({
    "node_modules/@polkadot/networks/interfaces.cjs"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.selectableNetworks = exports.availableNetworks = exports.allNetworks = void 0;
      var _ss58Registry = _interopRequireDefault(require_cjs());
      var _index = require_defaults();
      var UNSORTED = [0, 2, 42];
      var TESTNETS = ["testnet"];
      function toExpanded(o) {
        const network = o.network || "";
        const nameParts = network.replace(/_/g, "-").split("-");
        const n = o;
        n.slip44 = _index.knownLedger[network];
        n.hasLedgerSupport = !!n.slip44;
        n.genesisHash = _index.knownGenesis[network] || [];
        n.icon = _index.knownIcon[network] || "substrate";
        n.isTestnet = !!_index.knownTestnet[network] || TESTNETS.includes(nameParts[nameParts.length - 1]);
        n.isIgnored = n.isTestnet || !(o.standardAccount && o.decimals && o.decimals.length && o.symbols && o.symbols.length) && o.prefix !== 42;
        return n;
      }
      function filterSelectable(_ref) {
        let {
          genesisHash,
          prefix
        } = _ref;
        return !!genesisHash.length || prefix === 42;
      }
      function filterAvailable(n) {
        return !n.isIgnored && !!n.network;
      }
      function sortNetworks(a, b) {
        const isUnSortedA = UNSORTED.includes(a.prefix);
        const isUnSortedB = UNSORTED.includes(b.prefix);
        return isUnSortedA === isUnSortedB ? isUnSortedA ? 0 : a.displayName.localeCompare(b.displayName) : isUnSortedA ? -1 : 1;
      }
      var allNetworks = _ss58Registry.default.map(toExpanded);
      exports.allNetworks = allNetworks;
      var availableNetworks = allNetworks.filter(filterAvailable).sort(sortNetworks);
      exports.availableNetworks = availableNetworks;
      var selectableNetworks = availableNetworks.filter(filterSelectable);
      exports.selectableNetworks = selectableNetworks;
    }
  });

  // node_modules/@polkadot/util-crypto/networks.cjs
  var require_networks = __commonJS({
    "node_modules/@polkadot/util-crypto/networks.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _interfaces = require_interfaces();
      Object.keys(_interfaces).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (key in exports && exports[key] === _interfaces[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _interfaces[key];
          }
        });
      });
    }
  });

  // node_modules/@polkadot/util-crypto/address/defaults.cjs
  var require_defaults2 = __commonJS({
    "node_modules/@polkadot/util-crypto/address/defaults.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaults = void 0;
      var _networks = require_networks();
      function networkToPrefix(_ref) {
        let {
          prefix
        } = _ref;
        return prefix;
      }
      var defaults = {
        allowedDecodedLengths: [1, 2, 4, 8, 32, 33],
        allowedEncodedLengths: [3, 4, 6, 10, 35, 36, 37, 38],
        allowedPrefix: _networks.availableNetworks.map(networkToPrefix),
        prefix: 42
      };
      exports.defaults = defaults;
    }
  });

  // node_modules/@polkadot/util-crypto/address/decode.cjs
  var require_decode = __commonJS({
    "node_modules/@polkadot/util-crypto/address/decode.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.decodeAddress = decodeAddress;
      var _util = require_util();
      var _index = require_base58();
      var _checksum = require_checksum();
      var _defaults = require_defaults2();
      function decodeAddress(encoded, ignoreChecksum) {
        let ss58Format = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
        (0, _util.assert)(encoded, "Invalid empty address passed");
        if ((0, _util.isU8a)(encoded) || (0, _util.isHex)(encoded)) {
          return (0, _util.u8aToU8a)(encoded);
        }
        try {
          const decoded = (0, _index.base58Decode)(encoded);
          (0, _util.assert)(_defaults.defaults.allowedEncodedLengths.includes(decoded.length), "Invalid decoded address length");
          const [isValid, endPos, ss58Length, ss58Decoded] = (0, _checksum.checkAddressChecksum)(decoded);
          (0, _util.assert)(ignoreChecksum || isValid, "Invalid decoded address checksum");
          (0, _util.assert)([-1, ss58Decoded].includes(ss58Format), () => `Expected ss58Format ${ss58Format}, received ${ss58Decoded}`);
          return decoded.slice(ss58Length, endPos);
        } catch (error) {
          throw new Error(`Decoding ${encoded}: ${error.message}`);
        }
      }
    }
  });

  // node_modules/@polkadot/util-crypto/address/addressToEvm.cjs
  var require_addressToEvm = __commonJS({
    "node_modules/@polkadot/util-crypto/address/addressToEvm.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.addressToEvm = addressToEvm;
      var _decode = require_decode();
      function addressToEvm(address, ignoreChecksum) {
        const decoded = (0, _decode.decodeAddress)(address, ignoreChecksum);
        return decoded.subarray(0, 20);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/address/check.cjs
  var require_check = __commonJS({
    "node_modules/@polkadot/util-crypto/address/check.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.checkAddress = checkAddress;
      var _index = require_base58();
      var _checksum = require_checksum();
      var _defaults = require_defaults2();
      function checkAddress(address, prefix) {
        let decoded;
        try {
          decoded = (0, _index.base58Decode)(address);
        } catch (error) {
          return [false, error.message];
        }
        const [isValid, , , ss58Decoded] = (0, _checksum.checkAddressChecksum)(decoded);
        if (ss58Decoded !== prefix) {
          return [false, `Prefix mismatch, expected ${prefix}, found ${ss58Decoded}`];
        } else if (!_defaults.defaults.allowedEncodedLengths.includes(decoded.length)) {
          return [false, "Invalid decoded address length"];
        }
        return [isValid, isValid ? null : "Invalid decoded address checksum"];
      }
    }
  });

  // node_modules/@polkadot/util-crypto/bn.cjs
  var require_bn5 = __commonJS({
    "node_modules/@polkadot/util-crypto/bn.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BN_LE_OPTS = exports.BN_LE_512_OPTS = exports.BN_LE_32_OPTS = exports.BN_LE_256_OPTS = exports.BN_LE_16_OPTS = exports.BN_BE_OPTS = exports.BN_BE_32_OPTS = exports.BN_BE_256_OPTS = void 0;
      var BN_BE_OPTS = {
        isLe: false
      };
      exports.BN_BE_OPTS = BN_BE_OPTS;
      var BN_LE_OPTS = {
        isLe: true
      };
      exports.BN_LE_OPTS = BN_LE_OPTS;
      var BN_LE_16_OPTS = {
        bitLength: 16,
        isLe: true
      };
      exports.BN_LE_16_OPTS = BN_LE_16_OPTS;
      var BN_BE_32_OPTS = {
        bitLength: 32,
        isLe: false
      };
      exports.BN_BE_32_OPTS = BN_BE_32_OPTS;
      var BN_LE_32_OPTS = {
        bitLength: 32,
        isLe: true
      };
      exports.BN_LE_32_OPTS = BN_LE_32_OPTS;
      var BN_BE_256_OPTS = {
        bitLength: 256,
        isLe: false
      };
      exports.BN_BE_256_OPTS = BN_BE_256_OPTS;
      var BN_LE_256_OPTS = {
        bitLength: 256,
        isLe: true
      };
      exports.BN_LE_256_OPTS = BN_LE_256_OPTS;
      var BN_LE_512_OPTS = {
        bitLength: 512,
        isLe: true
      };
      exports.BN_LE_512_OPTS = BN_LE_512_OPTS;
    }
  });

  // node_modules/@polkadot/util-crypto/address/util.cjs
  var require_util2 = __commonJS({
    "node_modules/@polkadot/util-crypto/address/util.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.addressToU8a = addressToU8a;
      var _decode = require_decode();
      function addressToU8a(who) {
        return (0, _decode.decodeAddress)(who);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/address/keyMulti.cjs
  var require_keyMulti = __commonJS({
    "node_modules/@polkadot/util-crypto/address/keyMulti.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.createKeyMulti = createKeyMulti;
      var _util = require_util();
      var _asU8a = require_asU8a();
      var _bn = require_bn5();
      var _util2 = require_util2();
      var PREFIX = (0, _util.stringToU8a)("modlpy/utilisuba");
      function createKeyMulti(who, threshold) {
        return (0, _asU8a.blake2AsU8a)((0, _util.u8aConcat)(PREFIX, (0, _util.compactToU8a)(who.length), ...(0, _util.u8aSorted)(who.map(_util2.addressToU8a)), (0, _util.bnToU8a)(threshold, _bn.BN_LE_16_OPTS)));
      }
    }
  });

  // node_modules/@polkadot/util-crypto/address/keyDerived.cjs
  var require_keyDerived = __commonJS({
    "node_modules/@polkadot/util-crypto/address/keyDerived.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.createKeyDerived = createKeyDerived;
      var _util = require_util();
      var _asU8a = require_asU8a();
      var _bn = require_bn5();
      var _decode = require_decode();
      var PREFIX = (0, _util.stringToU8a)("modlpy/utilisuba");
      function createKeyDerived(who, index) {
        return (0, _asU8a.blake2AsU8a)((0, _util.u8aConcat)(PREFIX, (0, _decode.decodeAddress)(who), (0, _util.bnToU8a)(index, _bn.BN_LE_16_OPTS)));
      }
    }
  });

  // node_modules/@polkadot/util-crypto/key/DeriveJunction.cjs
  var require_DeriveJunction = __commonJS({
    "node_modules/@polkadot/util-crypto/key/DeriveJunction.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DeriveJunction = void 0;
      var _util = require_util();
      var _asU8a = require_asU8a();
      var _bn = require_bn5();
      var RE_NUMBER = /^\d+$/;
      var JUNCTION_ID_LEN = 32;
      var DeriveJunction = class {
        #chainCode = new Uint8Array(32);
        #isHard = false;
        static from(value) {
          const result = new DeriveJunction();
          const [code, isHard] = value.startsWith("/") ? [value.substr(1), true] : [value, false];
          result.soft(RE_NUMBER.test(code) ? new _util.BN(code, 10) : code);
          return isHard ? result.harden() : result;
        }
        get chainCode() {
          return this.#chainCode;
        }
        get isHard() {
          return this.#isHard;
        }
        get isSoft() {
          return !this.#isHard;
        }
        hard(value) {
          return this.soft(value).harden();
        }
        harden() {
          this.#isHard = true;
          return this;
        }
        soft(value) {
          if ((0, _util.isNumber)(value) || (0, _util.isBn)(value) || (0, _util.isBigInt)(value)) {
            return this.soft((0, _util.bnToU8a)(value, _bn.BN_LE_256_OPTS));
          } else if ((0, _util.isHex)(value)) {
            return this.soft((0, _util.hexToU8a)(value));
          } else if ((0, _util.isString)(value)) {
            return this.soft((0, _util.compactAddLength)((0, _util.stringToU8a)(value)));
          } else if (value.length > JUNCTION_ID_LEN) {
            return this.soft((0, _asU8a.blake2AsU8a)(value));
          }
          this.#chainCode.fill(0);
          this.#chainCode.set(value, 0);
          return this;
        }
        soften() {
          this.#isHard = false;
          return this;
        }
      };
      exports.DeriveJunction = DeriveJunction;
    }
  });

  // node_modules/@polkadot/util-crypto/key/extractPath.cjs
  var require_extractPath = __commonJS({
    "node_modules/@polkadot/util-crypto/key/extractPath.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.keyExtractPath = keyExtractPath;
      var _util = require_util();
      var _DeriveJunction = require_DeriveJunction();
      var RE_JUNCTION = /\/(\/?)([^/]+)/g;
      function keyExtractPath(derivePath) {
        const parts = derivePath.match(RE_JUNCTION);
        const path = [];
        let constructed = "";
        if (parts) {
          constructed = parts.join("");
          for (const p of parts) {
            path.push(_DeriveJunction.DeriveJunction.from(p.substr(1)));
          }
        }
        (0, _util.assert)(constructed === derivePath, () => `Re-constructed path "${constructed}" does not match input`);
        return {
          parts,
          path
        };
      }
    }
  });

  // node_modules/@polkadot/util-crypto/key/extractSuri.cjs
  var require_extractSuri = __commonJS({
    "node_modules/@polkadot/util-crypto/key/extractSuri.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.keyExtractSuri = keyExtractSuri;
      var _util = require_util();
      var _extractPath = require_extractPath();
      var RE_CAPTURE = /^(\w+( \w+)*)((\/\/?[^/]+)*)(\/\/\/(.*))?$/;
      function keyExtractSuri(suri) {
        const matches = suri.match(RE_CAPTURE);
        (0, _util.assert)(!(0, _util.isNull)(matches), "Unable to match provided value to a secret URI");
        const [, phrase, , derivePath, , , password] = matches;
        const {
          path
        } = (0, _extractPath.keyExtractPath)(derivePath);
        return {
          derivePath,
          password,
          path,
          phrase
        };
      }
    }
  });

  // node_modules/@polkadot/util-crypto/secp256k1/deriveHard.cjs
  var require_deriveHard = __commonJS({
    "node_modules/@polkadot/util-crypto/secp256k1/deriveHard.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.secp256k1DeriveHard = secp256k1DeriveHard;
      var _util = require_util();
      var _asU8a = require_asU8a();
      var HDKD = (0, _util.compactAddLength)((0, _util.stringToU8a)("Secp256k1HDKD"));
      function secp256k1DeriveHard(seed, chainCode) {
        (0, _util.assert)((0, _util.isU8a)(chainCode) && chainCode.length === 32, "Invalid chainCode passed to derive");
        return (0, _asU8a.blake2AsU8a)((0, _util.u8aConcat)(HDKD, seed, chainCode), 256);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/secp256k1/pair/fromSeed.cjs
  var require_fromSeed = __commonJS({
    "node_modules/@polkadot/util-crypto/secp256k1/pair/fromSeed.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.secp256k1PairFromSeed = secp256k1PairFromSeed;
      var _secp256k = require_lib();
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      function secp256k1PairFromSeed(seed, onlyJs) {
        (0, _util.assert)(seed.length === 32, "Expected valid 32-byte private key as a seed");
        if (!_util.hasBigInt || !onlyJs && (0, _wasmCrypto.isReady)()) {
          const full = (0, _wasmCrypto.secp256k1FromSeed)(seed);
          const publicKey = full.slice(32);
          (0, _util.assert)(!(0, _util.u8aEmpty)(publicKey), "Invalid publicKey generated from WASM interface");
          return {
            publicKey,
            secretKey: full.slice(0, 32)
          };
        }
        return {
          publicKey: (0, _secp256k.getPublicKey)(seed, true),
          secretKey: seed
        };
      }
    }
  });

  // node_modules/@polkadot/util-crypto/key/hdkdDerive.cjs
  var require_hdkdDerive = __commonJS({
    "node_modules/@polkadot/util-crypto/key/hdkdDerive.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.createSeedDeriveFn = createSeedDeriveFn;
      var _util = require_util();
      function createSeedDeriveFn(fromSeed, derive) {
        return (keypair, _ref) => {
          let {
            chainCode,
            isHard
          } = _ref;
          (0, _util.assert)(isHard, "A soft key was found in the path and is not supported");
          return fromSeed(derive(keypair.secretKey.subarray(0, 32), chainCode));
        };
      }
    }
  });

  // node_modules/@polkadot/util-crypto/key/hdkdEcdsa.cjs
  var require_hdkdEcdsa = __commonJS({
    "node_modules/@polkadot/util-crypto/key/hdkdEcdsa.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.keyHdkdEcdsa = void 0;
      var _deriveHard = require_deriveHard();
      var _fromSeed = require_fromSeed();
      var _hdkdDerive = require_hdkdDerive();
      var keyHdkdEcdsa = (0, _hdkdDerive.createSeedDeriveFn)(_fromSeed.secp256k1PairFromSeed, _deriveHard.secp256k1DeriveHard);
      exports.keyHdkdEcdsa = keyHdkdEcdsa;
    }
  });

  // node_modules/tweetnacl/nacl-fast.js
  var require_nacl_fast = __commonJS({
    "node_modules/tweetnacl/nacl-fast.js"(exports, module) {
      (function(nacl) {
        "use strict";
        var gf = function(init) {
          var i, r = new Float64Array(16);
          if (init)
            for (i = 0; i < init.length; i++)
              r[i] = init[i];
          return r;
        };
        var randombytes = function() {
          throw new Error("no PRNG");
        };
        var _0 = new Uint8Array(16);
        var _9 = new Uint8Array(32);
        _9[0] = 9;
        var gf0 = gf(), gf1 = gf([1]), _121665 = gf([56129, 1]), D = gf([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), D2 = gf([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]), X = gf([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]), Y = gf([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]), I = gf([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
        function ts64(x, i, h, l) {
          x[i] = h >> 24 & 255;
          x[i + 1] = h >> 16 & 255;
          x[i + 2] = h >> 8 & 255;
          x[i + 3] = h & 255;
          x[i + 4] = l >> 24 & 255;
          x[i + 5] = l >> 16 & 255;
          x[i + 6] = l >> 8 & 255;
          x[i + 7] = l & 255;
        }
        function vn(x, xi, y, yi, n) {
          var i, d = 0;
          for (i = 0; i < n; i++)
            d |= x[xi + i] ^ y[yi + i];
          return (1 & d - 1 >>> 8) - 1;
        }
        function crypto_verify_16(x, xi, y, yi) {
          return vn(x, xi, y, yi, 16);
        }
        function crypto_verify_32(x, xi, y, yi) {
          return vn(x, xi, y, yi, 32);
        }
        function core_salsa20(o, p, k, c) {
          var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
          var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
          for (var i = 0; i < 20; i += 2) {
            u = x0 + x12 | 0;
            x4 ^= u << 7 | u >>> 32 - 7;
            u = x4 + x0 | 0;
            x8 ^= u << 9 | u >>> 32 - 9;
            u = x8 + x4 | 0;
            x12 ^= u << 13 | u >>> 32 - 13;
            u = x12 + x8 | 0;
            x0 ^= u << 18 | u >>> 32 - 18;
            u = x5 + x1 | 0;
            x9 ^= u << 7 | u >>> 32 - 7;
            u = x9 + x5 | 0;
            x13 ^= u << 9 | u >>> 32 - 9;
            u = x13 + x9 | 0;
            x1 ^= u << 13 | u >>> 32 - 13;
            u = x1 + x13 | 0;
            x5 ^= u << 18 | u >>> 32 - 18;
            u = x10 + x6 | 0;
            x14 ^= u << 7 | u >>> 32 - 7;
            u = x14 + x10 | 0;
            x2 ^= u << 9 | u >>> 32 - 9;
            u = x2 + x14 | 0;
            x6 ^= u << 13 | u >>> 32 - 13;
            u = x6 + x2 | 0;
            x10 ^= u << 18 | u >>> 32 - 18;
            u = x15 + x11 | 0;
            x3 ^= u << 7 | u >>> 32 - 7;
            u = x3 + x15 | 0;
            x7 ^= u << 9 | u >>> 32 - 9;
            u = x7 + x3 | 0;
            x11 ^= u << 13 | u >>> 32 - 13;
            u = x11 + x7 | 0;
            x15 ^= u << 18 | u >>> 32 - 18;
            u = x0 + x3 | 0;
            x1 ^= u << 7 | u >>> 32 - 7;
            u = x1 + x0 | 0;
            x2 ^= u << 9 | u >>> 32 - 9;
            u = x2 + x1 | 0;
            x3 ^= u << 13 | u >>> 32 - 13;
            u = x3 + x2 | 0;
            x0 ^= u << 18 | u >>> 32 - 18;
            u = x5 + x4 | 0;
            x6 ^= u << 7 | u >>> 32 - 7;
            u = x6 + x5 | 0;
            x7 ^= u << 9 | u >>> 32 - 9;
            u = x7 + x6 | 0;
            x4 ^= u << 13 | u >>> 32 - 13;
            u = x4 + x7 | 0;
            x5 ^= u << 18 | u >>> 32 - 18;
            u = x10 + x9 | 0;
            x11 ^= u << 7 | u >>> 32 - 7;
            u = x11 + x10 | 0;
            x8 ^= u << 9 | u >>> 32 - 9;
            u = x8 + x11 | 0;
            x9 ^= u << 13 | u >>> 32 - 13;
            u = x9 + x8 | 0;
            x10 ^= u << 18 | u >>> 32 - 18;
            u = x15 + x14 | 0;
            x12 ^= u << 7 | u >>> 32 - 7;
            u = x12 + x15 | 0;
            x13 ^= u << 9 | u >>> 32 - 9;
            u = x13 + x12 | 0;
            x14 ^= u << 13 | u >>> 32 - 13;
            u = x14 + x13 | 0;
            x15 ^= u << 18 | u >>> 32 - 18;
          }
          x0 = x0 + j0 | 0;
          x1 = x1 + j1 | 0;
          x2 = x2 + j2 | 0;
          x3 = x3 + j3 | 0;
          x4 = x4 + j4 | 0;
          x5 = x5 + j5 | 0;
          x6 = x6 + j6 | 0;
          x7 = x7 + j7 | 0;
          x8 = x8 + j8 | 0;
          x9 = x9 + j9 | 0;
          x10 = x10 + j10 | 0;
          x11 = x11 + j11 | 0;
          x12 = x12 + j12 | 0;
          x13 = x13 + j13 | 0;
          x14 = x14 + j14 | 0;
          x15 = x15 + j15 | 0;
          o[0] = x0 >>> 0 & 255;
          o[1] = x0 >>> 8 & 255;
          o[2] = x0 >>> 16 & 255;
          o[3] = x0 >>> 24 & 255;
          o[4] = x1 >>> 0 & 255;
          o[5] = x1 >>> 8 & 255;
          o[6] = x1 >>> 16 & 255;
          o[7] = x1 >>> 24 & 255;
          o[8] = x2 >>> 0 & 255;
          o[9] = x2 >>> 8 & 255;
          o[10] = x2 >>> 16 & 255;
          o[11] = x2 >>> 24 & 255;
          o[12] = x3 >>> 0 & 255;
          o[13] = x3 >>> 8 & 255;
          o[14] = x3 >>> 16 & 255;
          o[15] = x3 >>> 24 & 255;
          o[16] = x4 >>> 0 & 255;
          o[17] = x4 >>> 8 & 255;
          o[18] = x4 >>> 16 & 255;
          o[19] = x4 >>> 24 & 255;
          o[20] = x5 >>> 0 & 255;
          o[21] = x5 >>> 8 & 255;
          o[22] = x5 >>> 16 & 255;
          o[23] = x5 >>> 24 & 255;
          o[24] = x6 >>> 0 & 255;
          o[25] = x6 >>> 8 & 255;
          o[26] = x6 >>> 16 & 255;
          o[27] = x6 >>> 24 & 255;
          o[28] = x7 >>> 0 & 255;
          o[29] = x7 >>> 8 & 255;
          o[30] = x7 >>> 16 & 255;
          o[31] = x7 >>> 24 & 255;
          o[32] = x8 >>> 0 & 255;
          o[33] = x8 >>> 8 & 255;
          o[34] = x8 >>> 16 & 255;
          o[35] = x8 >>> 24 & 255;
          o[36] = x9 >>> 0 & 255;
          o[37] = x9 >>> 8 & 255;
          o[38] = x9 >>> 16 & 255;
          o[39] = x9 >>> 24 & 255;
          o[40] = x10 >>> 0 & 255;
          o[41] = x10 >>> 8 & 255;
          o[42] = x10 >>> 16 & 255;
          o[43] = x10 >>> 24 & 255;
          o[44] = x11 >>> 0 & 255;
          o[45] = x11 >>> 8 & 255;
          o[46] = x11 >>> 16 & 255;
          o[47] = x11 >>> 24 & 255;
          o[48] = x12 >>> 0 & 255;
          o[49] = x12 >>> 8 & 255;
          o[50] = x12 >>> 16 & 255;
          o[51] = x12 >>> 24 & 255;
          o[52] = x13 >>> 0 & 255;
          o[53] = x13 >>> 8 & 255;
          o[54] = x13 >>> 16 & 255;
          o[55] = x13 >>> 24 & 255;
          o[56] = x14 >>> 0 & 255;
          o[57] = x14 >>> 8 & 255;
          o[58] = x14 >>> 16 & 255;
          o[59] = x14 >>> 24 & 255;
          o[60] = x15 >>> 0 & 255;
          o[61] = x15 >>> 8 & 255;
          o[62] = x15 >>> 16 & 255;
          o[63] = x15 >>> 24 & 255;
        }
        function core_hsalsa20(o, p, k, c) {
          var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
          var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
          for (var i = 0; i < 20; i += 2) {
            u = x0 + x12 | 0;
            x4 ^= u << 7 | u >>> 32 - 7;
            u = x4 + x0 | 0;
            x8 ^= u << 9 | u >>> 32 - 9;
            u = x8 + x4 | 0;
            x12 ^= u << 13 | u >>> 32 - 13;
            u = x12 + x8 | 0;
            x0 ^= u << 18 | u >>> 32 - 18;
            u = x5 + x1 | 0;
            x9 ^= u << 7 | u >>> 32 - 7;
            u = x9 + x5 | 0;
            x13 ^= u << 9 | u >>> 32 - 9;
            u = x13 + x9 | 0;
            x1 ^= u << 13 | u >>> 32 - 13;
            u = x1 + x13 | 0;
            x5 ^= u << 18 | u >>> 32 - 18;
            u = x10 + x6 | 0;
            x14 ^= u << 7 | u >>> 32 - 7;
            u = x14 + x10 | 0;
            x2 ^= u << 9 | u >>> 32 - 9;
            u = x2 + x14 | 0;
            x6 ^= u << 13 | u >>> 32 - 13;
            u = x6 + x2 | 0;
            x10 ^= u << 18 | u >>> 32 - 18;
            u = x15 + x11 | 0;
            x3 ^= u << 7 | u >>> 32 - 7;
            u = x3 + x15 | 0;
            x7 ^= u << 9 | u >>> 32 - 9;
            u = x7 + x3 | 0;
            x11 ^= u << 13 | u >>> 32 - 13;
            u = x11 + x7 | 0;
            x15 ^= u << 18 | u >>> 32 - 18;
            u = x0 + x3 | 0;
            x1 ^= u << 7 | u >>> 32 - 7;
            u = x1 + x0 | 0;
            x2 ^= u << 9 | u >>> 32 - 9;
            u = x2 + x1 | 0;
            x3 ^= u << 13 | u >>> 32 - 13;
            u = x3 + x2 | 0;
            x0 ^= u << 18 | u >>> 32 - 18;
            u = x5 + x4 | 0;
            x6 ^= u << 7 | u >>> 32 - 7;
            u = x6 + x5 | 0;
            x7 ^= u << 9 | u >>> 32 - 9;
            u = x7 + x6 | 0;
            x4 ^= u << 13 | u >>> 32 - 13;
            u = x4 + x7 | 0;
            x5 ^= u << 18 | u >>> 32 - 18;
            u = x10 + x9 | 0;
            x11 ^= u << 7 | u >>> 32 - 7;
            u = x11 + x10 | 0;
            x8 ^= u << 9 | u >>> 32 - 9;
            u = x8 + x11 | 0;
            x9 ^= u << 13 | u >>> 32 - 13;
            u = x9 + x8 | 0;
            x10 ^= u << 18 | u >>> 32 - 18;
            u = x15 + x14 | 0;
            x12 ^= u << 7 | u >>> 32 - 7;
            u = x12 + x15 | 0;
            x13 ^= u << 9 | u >>> 32 - 9;
            u = x13 + x12 | 0;
            x14 ^= u << 13 | u >>> 32 - 13;
            u = x14 + x13 | 0;
            x15 ^= u << 18 | u >>> 32 - 18;
          }
          o[0] = x0 >>> 0 & 255;
          o[1] = x0 >>> 8 & 255;
          o[2] = x0 >>> 16 & 255;
          o[3] = x0 >>> 24 & 255;
          o[4] = x5 >>> 0 & 255;
          o[5] = x5 >>> 8 & 255;
          o[6] = x5 >>> 16 & 255;
          o[7] = x5 >>> 24 & 255;
          o[8] = x10 >>> 0 & 255;
          o[9] = x10 >>> 8 & 255;
          o[10] = x10 >>> 16 & 255;
          o[11] = x10 >>> 24 & 255;
          o[12] = x15 >>> 0 & 255;
          o[13] = x15 >>> 8 & 255;
          o[14] = x15 >>> 16 & 255;
          o[15] = x15 >>> 24 & 255;
          o[16] = x6 >>> 0 & 255;
          o[17] = x6 >>> 8 & 255;
          o[18] = x6 >>> 16 & 255;
          o[19] = x6 >>> 24 & 255;
          o[20] = x7 >>> 0 & 255;
          o[21] = x7 >>> 8 & 255;
          o[22] = x7 >>> 16 & 255;
          o[23] = x7 >>> 24 & 255;
          o[24] = x8 >>> 0 & 255;
          o[25] = x8 >>> 8 & 255;
          o[26] = x8 >>> 16 & 255;
          o[27] = x8 >>> 24 & 255;
          o[28] = x9 >>> 0 & 255;
          o[29] = x9 >>> 8 & 255;
          o[30] = x9 >>> 16 & 255;
          o[31] = x9 >>> 24 & 255;
        }
        function crypto_core_salsa20(out, inp, k, c) {
          core_salsa20(out, inp, k, c);
        }
        function crypto_core_hsalsa20(out, inp, k, c) {
          core_hsalsa20(out, inp, k, c);
        }
        var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
        function crypto_stream_salsa20_xor(c, cpos, m, mpos, b, n, k) {
          var z = new Uint8Array(16), x = new Uint8Array(64);
          var u, i;
          for (i = 0; i < 16; i++)
            z[i] = 0;
          for (i = 0; i < 8; i++)
            z[i] = n[i];
          while (b >= 64) {
            crypto_core_salsa20(x, z, k, sigma);
            for (i = 0; i < 64; i++)
              c[cpos + i] = m[mpos + i] ^ x[i];
            u = 1;
            for (i = 8; i < 16; i++) {
              u = u + (z[i] & 255) | 0;
              z[i] = u & 255;
              u >>>= 8;
            }
            b -= 64;
            cpos += 64;
            mpos += 64;
          }
          if (b > 0) {
            crypto_core_salsa20(x, z, k, sigma);
            for (i = 0; i < b; i++)
              c[cpos + i] = m[mpos + i] ^ x[i];
          }
          return 0;
        }
        function crypto_stream_salsa20(c, cpos, b, n, k) {
          var z = new Uint8Array(16), x = new Uint8Array(64);
          var u, i;
          for (i = 0; i < 16; i++)
            z[i] = 0;
          for (i = 0; i < 8; i++)
            z[i] = n[i];
          while (b >= 64) {
            crypto_core_salsa20(x, z, k, sigma);
            for (i = 0; i < 64; i++)
              c[cpos + i] = x[i];
            u = 1;
            for (i = 8; i < 16; i++) {
              u = u + (z[i] & 255) | 0;
              z[i] = u & 255;
              u >>>= 8;
            }
            b -= 64;
            cpos += 64;
          }
          if (b > 0) {
            crypto_core_salsa20(x, z, k, sigma);
            for (i = 0; i < b; i++)
              c[cpos + i] = x[i];
          }
          return 0;
        }
        function crypto_stream(c, cpos, d, n, k) {
          var s = new Uint8Array(32);
          crypto_core_hsalsa20(s, n, k, sigma);
          var sn = new Uint8Array(8);
          for (var i = 0; i < 8; i++)
            sn[i] = n[i + 16];
          return crypto_stream_salsa20(c, cpos, d, sn, s);
        }
        function crypto_stream_xor(c, cpos, m, mpos, d, n, k) {
          var s = new Uint8Array(32);
          crypto_core_hsalsa20(s, n, k, sigma);
          var sn = new Uint8Array(8);
          for (var i = 0; i < 8; i++)
            sn[i] = n[i + 16];
          return crypto_stream_salsa20_xor(c, cpos, m, mpos, d, sn, s);
        }
        var poly1305 = function(key) {
          this.buffer = new Uint8Array(16);
          this.r = new Uint16Array(10);
          this.h = new Uint16Array(10);
          this.pad = new Uint16Array(8);
          this.leftover = 0;
          this.fin = 0;
          var t0, t1, t2, t3, t4, t5, t6, t7;
          t0 = key[0] & 255 | (key[1] & 255) << 8;
          this.r[0] = t0 & 8191;
          t1 = key[2] & 255 | (key[3] & 255) << 8;
          this.r[1] = (t0 >>> 13 | t1 << 3) & 8191;
          t2 = key[4] & 255 | (key[5] & 255) << 8;
          this.r[2] = (t1 >>> 10 | t2 << 6) & 7939;
          t3 = key[6] & 255 | (key[7] & 255) << 8;
          this.r[3] = (t2 >>> 7 | t3 << 9) & 8191;
          t4 = key[8] & 255 | (key[9] & 255) << 8;
          this.r[4] = (t3 >>> 4 | t4 << 12) & 255;
          this.r[5] = t4 >>> 1 & 8190;
          t5 = key[10] & 255 | (key[11] & 255) << 8;
          this.r[6] = (t4 >>> 14 | t5 << 2) & 8191;
          t6 = key[12] & 255 | (key[13] & 255) << 8;
          this.r[7] = (t5 >>> 11 | t6 << 5) & 8065;
          t7 = key[14] & 255 | (key[15] & 255) << 8;
          this.r[8] = (t6 >>> 8 | t7 << 8) & 8191;
          this.r[9] = t7 >>> 5 & 127;
          this.pad[0] = key[16] & 255 | (key[17] & 255) << 8;
          this.pad[1] = key[18] & 255 | (key[19] & 255) << 8;
          this.pad[2] = key[20] & 255 | (key[21] & 255) << 8;
          this.pad[3] = key[22] & 255 | (key[23] & 255) << 8;
          this.pad[4] = key[24] & 255 | (key[25] & 255) << 8;
          this.pad[5] = key[26] & 255 | (key[27] & 255) << 8;
          this.pad[6] = key[28] & 255 | (key[29] & 255) << 8;
          this.pad[7] = key[30] & 255 | (key[31] & 255) << 8;
        };
        poly1305.prototype.blocks = function(m, mpos, bytes) {
          var hibit = this.fin ? 0 : 1 << 11;
          var t0, t1, t2, t3, t4, t5, t6, t7, c;
          var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;
          var h0 = this.h[0], h1 = this.h[1], h2 = this.h[2], h3 = this.h[3], h4 = this.h[4], h5 = this.h[5], h6 = this.h[6], h7 = this.h[7], h8 = this.h[8], h9 = this.h[9];
          var r0 = this.r[0], r1 = this.r[1], r2 = this.r[2], r3 = this.r[3], r4 = this.r[4], r5 = this.r[5], r6 = this.r[6], r7 = this.r[7], r8 = this.r[8], r9 = this.r[9];
          while (bytes >= 16) {
            t0 = m[mpos + 0] & 255 | (m[mpos + 1] & 255) << 8;
            h0 += t0 & 8191;
            t1 = m[mpos + 2] & 255 | (m[mpos + 3] & 255) << 8;
            h1 += (t0 >>> 13 | t1 << 3) & 8191;
            t2 = m[mpos + 4] & 255 | (m[mpos + 5] & 255) << 8;
            h2 += (t1 >>> 10 | t2 << 6) & 8191;
            t3 = m[mpos + 6] & 255 | (m[mpos + 7] & 255) << 8;
            h3 += (t2 >>> 7 | t3 << 9) & 8191;
            t4 = m[mpos + 8] & 255 | (m[mpos + 9] & 255) << 8;
            h4 += (t3 >>> 4 | t4 << 12) & 8191;
            h5 += t4 >>> 1 & 8191;
            t5 = m[mpos + 10] & 255 | (m[mpos + 11] & 255) << 8;
            h6 += (t4 >>> 14 | t5 << 2) & 8191;
            t6 = m[mpos + 12] & 255 | (m[mpos + 13] & 255) << 8;
            h7 += (t5 >>> 11 | t6 << 5) & 8191;
            t7 = m[mpos + 14] & 255 | (m[mpos + 15] & 255) << 8;
            h8 += (t6 >>> 8 | t7 << 8) & 8191;
            h9 += t7 >>> 5 | hibit;
            c = 0;
            d0 = c;
            d0 += h0 * r0;
            d0 += h1 * (5 * r9);
            d0 += h2 * (5 * r8);
            d0 += h3 * (5 * r7);
            d0 += h4 * (5 * r6);
            c = d0 >>> 13;
            d0 &= 8191;
            d0 += h5 * (5 * r5);
            d0 += h6 * (5 * r4);
            d0 += h7 * (5 * r3);
            d0 += h8 * (5 * r2);
            d0 += h9 * (5 * r1);
            c += d0 >>> 13;
            d0 &= 8191;
            d1 = c;
            d1 += h0 * r1;
            d1 += h1 * r0;
            d1 += h2 * (5 * r9);
            d1 += h3 * (5 * r8);
            d1 += h4 * (5 * r7);
            c = d1 >>> 13;
            d1 &= 8191;
            d1 += h5 * (5 * r6);
            d1 += h6 * (5 * r5);
            d1 += h7 * (5 * r4);
            d1 += h8 * (5 * r3);
            d1 += h9 * (5 * r2);
            c += d1 >>> 13;
            d1 &= 8191;
            d2 = c;
            d2 += h0 * r2;
            d2 += h1 * r1;
            d2 += h2 * r0;
            d2 += h3 * (5 * r9);
            d2 += h4 * (5 * r8);
            c = d2 >>> 13;
            d2 &= 8191;
            d2 += h5 * (5 * r7);
            d2 += h6 * (5 * r6);
            d2 += h7 * (5 * r5);
            d2 += h8 * (5 * r4);
            d2 += h9 * (5 * r3);
            c += d2 >>> 13;
            d2 &= 8191;
            d3 = c;
            d3 += h0 * r3;
            d3 += h1 * r2;
            d3 += h2 * r1;
            d3 += h3 * r0;
            d3 += h4 * (5 * r9);
            c = d3 >>> 13;
            d3 &= 8191;
            d3 += h5 * (5 * r8);
            d3 += h6 * (5 * r7);
            d3 += h7 * (5 * r6);
            d3 += h8 * (5 * r5);
            d3 += h9 * (5 * r4);
            c += d3 >>> 13;
            d3 &= 8191;
            d4 = c;
            d4 += h0 * r4;
            d4 += h1 * r3;
            d4 += h2 * r2;
            d4 += h3 * r1;
            d4 += h4 * r0;
            c = d4 >>> 13;
            d4 &= 8191;
            d4 += h5 * (5 * r9);
            d4 += h6 * (5 * r8);
            d4 += h7 * (5 * r7);
            d4 += h8 * (5 * r6);
            d4 += h9 * (5 * r5);
            c += d4 >>> 13;
            d4 &= 8191;
            d5 = c;
            d5 += h0 * r5;
            d5 += h1 * r4;
            d5 += h2 * r3;
            d5 += h3 * r2;
            d5 += h4 * r1;
            c = d5 >>> 13;
            d5 &= 8191;
            d5 += h5 * r0;
            d5 += h6 * (5 * r9);
            d5 += h7 * (5 * r8);
            d5 += h8 * (5 * r7);
            d5 += h9 * (5 * r6);
            c += d5 >>> 13;
            d5 &= 8191;
            d6 = c;
            d6 += h0 * r6;
            d6 += h1 * r5;
            d6 += h2 * r4;
            d6 += h3 * r3;
            d6 += h4 * r2;
            c = d6 >>> 13;
            d6 &= 8191;
            d6 += h5 * r1;
            d6 += h6 * r0;
            d6 += h7 * (5 * r9);
            d6 += h8 * (5 * r8);
            d6 += h9 * (5 * r7);
            c += d6 >>> 13;
            d6 &= 8191;
            d7 = c;
            d7 += h0 * r7;
            d7 += h1 * r6;
            d7 += h2 * r5;
            d7 += h3 * r4;
            d7 += h4 * r3;
            c = d7 >>> 13;
            d7 &= 8191;
            d7 += h5 * r2;
            d7 += h6 * r1;
            d7 += h7 * r0;
            d7 += h8 * (5 * r9);
            d7 += h9 * (5 * r8);
            c += d7 >>> 13;
            d7 &= 8191;
            d8 = c;
            d8 += h0 * r8;
            d8 += h1 * r7;
            d8 += h2 * r6;
            d8 += h3 * r5;
            d8 += h4 * r4;
            c = d8 >>> 13;
            d8 &= 8191;
            d8 += h5 * r3;
            d8 += h6 * r2;
            d8 += h7 * r1;
            d8 += h8 * r0;
            d8 += h9 * (5 * r9);
            c += d8 >>> 13;
            d8 &= 8191;
            d9 = c;
            d9 += h0 * r9;
            d9 += h1 * r8;
            d9 += h2 * r7;
            d9 += h3 * r6;
            d9 += h4 * r5;
            c = d9 >>> 13;
            d9 &= 8191;
            d9 += h5 * r4;
            d9 += h6 * r3;
            d9 += h7 * r2;
            d9 += h8 * r1;
            d9 += h9 * r0;
            c += d9 >>> 13;
            d9 &= 8191;
            c = (c << 2) + c | 0;
            c = c + d0 | 0;
            d0 = c & 8191;
            c = c >>> 13;
            d1 += c;
            h0 = d0;
            h1 = d1;
            h2 = d2;
            h3 = d3;
            h4 = d4;
            h5 = d5;
            h6 = d6;
            h7 = d7;
            h8 = d8;
            h9 = d9;
            mpos += 16;
            bytes -= 16;
          }
          this.h[0] = h0;
          this.h[1] = h1;
          this.h[2] = h2;
          this.h[3] = h3;
          this.h[4] = h4;
          this.h[5] = h5;
          this.h[6] = h6;
          this.h[7] = h7;
          this.h[8] = h8;
          this.h[9] = h9;
        };
        poly1305.prototype.finish = function(mac, macpos) {
          var g = new Uint16Array(10);
          var c, mask, f, i;
          if (this.leftover) {
            i = this.leftover;
            this.buffer[i++] = 1;
            for (; i < 16; i++)
              this.buffer[i] = 0;
            this.fin = 1;
            this.blocks(this.buffer, 0, 16);
          }
          c = this.h[1] >>> 13;
          this.h[1] &= 8191;
          for (i = 2; i < 10; i++) {
            this.h[i] += c;
            c = this.h[i] >>> 13;
            this.h[i] &= 8191;
          }
          this.h[0] += c * 5;
          c = this.h[0] >>> 13;
          this.h[0] &= 8191;
          this.h[1] += c;
          c = this.h[1] >>> 13;
          this.h[1] &= 8191;
          this.h[2] += c;
          g[0] = this.h[0] + 5;
          c = g[0] >>> 13;
          g[0] &= 8191;
          for (i = 1; i < 10; i++) {
            g[i] = this.h[i] + c;
            c = g[i] >>> 13;
            g[i] &= 8191;
          }
          g[9] -= 1 << 13;
          mask = (c ^ 1) - 1;
          for (i = 0; i < 10; i++)
            g[i] &= mask;
          mask = ~mask;
          for (i = 0; i < 10; i++)
            this.h[i] = this.h[i] & mask | g[i];
          this.h[0] = (this.h[0] | this.h[1] << 13) & 65535;
          this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535;
          this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535;
          this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535;
          this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535;
          this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535;
          this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535;
          this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535;
          f = this.h[0] + this.pad[0];
          this.h[0] = f & 65535;
          for (i = 1; i < 8; i++) {
            f = (this.h[i] + this.pad[i] | 0) + (f >>> 16) | 0;
            this.h[i] = f & 65535;
          }
          mac[macpos + 0] = this.h[0] >>> 0 & 255;
          mac[macpos + 1] = this.h[0] >>> 8 & 255;
          mac[macpos + 2] = this.h[1] >>> 0 & 255;
          mac[macpos + 3] = this.h[1] >>> 8 & 255;
          mac[macpos + 4] = this.h[2] >>> 0 & 255;
          mac[macpos + 5] = this.h[2] >>> 8 & 255;
          mac[macpos + 6] = this.h[3] >>> 0 & 255;
          mac[macpos + 7] = this.h[3] >>> 8 & 255;
          mac[macpos + 8] = this.h[4] >>> 0 & 255;
          mac[macpos + 9] = this.h[4] >>> 8 & 255;
          mac[macpos + 10] = this.h[5] >>> 0 & 255;
          mac[macpos + 11] = this.h[5] >>> 8 & 255;
          mac[macpos + 12] = this.h[6] >>> 0 & 255;
          mac[macpos + 13] = this.h[6] >>> 8 & 255;
          mac[macpos + 14] = this.h[7] >>> 0 & 255;
          mac[macpos + 15] = this.h[7] >>> 8 & 255;
        };
        poly1305.prototype.update = function(m, mpos, bytes) {
          var i, want;
          if (this.leftover) {
            want = 16 - this.leftover;
            if (want > bytes)
              want = bytes;
            for (i = 0; i < want; i++)
              this.buffer[this.leftover + i] = m[mpos + i];
            bytes -= want;
            mpos += want;
            this.leftover += want;
            if (this.leftover < 16)
              return;
            this.blocks(this.buffer, 0, 16);
            this.leftover = 0;
          }
          if (bytes >= 16) {
            want = bytes - bytes % 16;
            this.blocks(m, mpos, want);
            mpos += want;
            bytes -= want;
          }
          if (bytes) {
            for (i = 0; i < bytes; i++)
              this.buffer[this.leftover + i] = m[mpos + i];
            this.leftover += bytes;
          }
        };
        function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
          var s = new poly1305(k);
          s.update(m, mpos, n);
          s.finish(out, outpos);
          return 0;
        }
        function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
          var x = new Uint8Array(16);
          crypto_onetimeauth(x, 0, m, mpos, n, k);
          return crypto_verify_16(h, hpos, x, 0);
        }
        function crypto_secretbox(c, m, d, n, k) {
          var i;
          if (d < 32)
            return -1;
          crypto_stream_xor(c, 0, m, 0, d, n, k);
          crypto_onetimeauth(c, 16, c, 32, d - 32, c);
          for (i = 0; i < 16; i++)
            c[i] = 0;
          return 0;
        }
        function crypto_secretbox_open(m, c, d, n, k) {
          var i;
          var x = new Uint8Array(32);
          if (d < 32)
            return -1;
          crypto_stream(x, 0, 32, n, k);
          if (crypto_onetimeauth_verify(c, 16, c, 32, d - 32, x) !== 0)
            return -1;
          crypto_stream_xor(m, 0, c, 0, d, n, k);
          for (i = 0; i < 32; i++)
            m[i] = 0;
          return 0;
        }
        function set25519(r, a) {
          var i;
          for (i = 0; i < 16; i++)
            r[i] = a[i] | 0;
        }
        function car25519(o) {
          var i, v, c = 1;
          for (i = 0; i < 16; i++) {
            v = o[i] + c + 65535;
            c = Math.floor(v / 65536);
            o[i] = v - c * 65536;
          }
          o[0] += c - 1 + 37 * (c - 1);
        }
        function sel25519(p, q, b) {
          var t, c = ~(b - 1);
          for (var i = 0; i < 16; i++) {
            t = c & (p[i] ^ q[i]);
            p[i] ^= t;
            q[i] ^= t;
          }
        }
        function pack25519(o, n) {
          var i, j, b;
          var m = gf(), t = gf();
          for (i = 0; i < 16; i++)
            t[i] = n[i];
          car25519(t);
          car25519(t);
          car25519(t);
          for (j = 0; j < 2; j++) {
            m[0] = t[0] - 65517;
            for (i = 1; i < 15; i++) {
              m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
              m[i - 1] &= 65535;
            }
            m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
            b = m[15] >> 16 & 1;
            m[14] &= 65535;
            sel25519(t, m, 1 - b);
          }
          for (i = 0; i < 16; i++) {
            o[2 * i] = t[i] & 255;
            o[2 * i + 1] = t[i] >> 8;
          }
        }
        function neq25519(a, b) {
          var c = new Uint8Array(32), d = new Uint8Array(32);
          pack25519(c, a);
          pack25519(d, b);
          return crypto_verify_32(c, 0, d, 0);
        }
        function par25519(a) {
          var d = new Uint8Array(32);
          pack25519(d, a);
          return d[0] & 1;
        }
        function unpack25519(o, n) {
          var i;
          for (i = 0; i < 16; i++)
            o[i] = n[2 * i] + (n[2 * i + 1] << 8);
          o[15] &= 32767;
        }
        function A(o, a, b) {
          for (var i = 0; i < 16; i++)
            o[i] = a[i] + b[i];
        }
        function Z(o, a, b) {
          for (var i = 0; i < 16; i++)
            o[i] = a[i] - b[i];
        }
        function M(o, a, b) {
          var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
          v = a[0];
          t0 += v * b0;
          t1 += v * b1;
          t2 += v * b2;
          t3 += v * b3;
          t4 += v * b4;
          t5 += v * b5;
          t6 += v * b6;
          t7 += v * b7;
          t8 += v * b8;
          t9 += v * b9;
          t10 += v * b10;
          t11 += v * b11;
          t12 += v * b12;
          t13 += v * b13;
          t14 += v * b14;
          t15 += v * b15;
          v = a[1];
          t1 += v * b0;
          t2 += v * b1;
          t3 += v * b2;
          t4 += v * b3;
          t5 += v * b4;
          t6 += v * b5;
          t7 += v * b6;
          t8 += v * b7;
          t9 += v * b8;
          t10 += v * b9;
          t11 += v * b10;
          t12 += v * b11;
          t13 += v * b12;
          t14 += v * b13;
          t15 += v * b14;
          t16 += v * b15;
          v = a[2];
          t2 += v * b0;
          t3 += v * b1;
          t4 += v * b2;
          t5 += v * b3;
          t6 += v * b4;
          t7 += v * b5;
          t8 += v * b6;
          t9 += v * b7;
          t10 += v * b8;
          t11 += v * b9;
          t12 += v * b10;
          t13 += v * b11;
          t14 += v * b12;
          t15 += v * b13;
          t16 += v * b14;
          t17 += v * b15;
          v = a[3];
          t3 += v * b0;
          t4 += v * b1;
          t5 += v * b2;
          t6 += v * b3;
          t7 += v * b4;
          t8 += v * b5;
          t9 += v * b6;
          t10 += v * b7;
          t11 += v * b8;
          t12 += v * b9;
          t13 += v * b10;
          t14 += v * b11;
          t15 += v * b12;
          t16 += v * b13;
          t17 += v * b14;
          t18 += v * b15;
          v = a[4];
          t4 += v * b0;
          t5 += v * b1;
          t6 += v * b2;
          t7 += v * b3;
          t8 += v * b4;
          t9 += v * b5;
          t10 += v * b6;
          t11 += v * b7;
          t12 += v * b8;
          t13 += v * b9;
          t14 += v * b10;
          t15 += v * b11;
          t16 += v * b12;
          t17 += v * b13;
          t18 += v * b14;
          t19 += v * b15;
          v = a[5];
          t5 += v * b0;
          t6 += v * b1;
          t7 += v * b2;
          t8 += v * b3;
          t9 += v * b4;
          t10 += v * b5;
          t11 += v * b6;
          t12 += v * b7;
          t13 += v * b8;
          t14 += v * b9;
          t15 += v * b10;
          t16 += v * b11;
          t17 += v * b12;
          t18 += v * b13;
          t19 += v * b14;
          t20 += v * b15;
          v = a[6];
          t6 += v * b0;
          t7 += v * b1;
          t8 += v * b2;
          t9 += v * b3;
          t10 += v * b4;
          t11 += v * b5;
          t12 += v * b6;
          t13 += v * b7;
          t14 += v * b8;
          t15 += v * b9;
          t16 += v * b10;
          t17 += v * b11;
          t18 += v * b12;
          t19 += v * b13;
          t20 += v * b14;
          t21 += v * b15;
          v = a[7];
          t7 += v * b0;
          t8 += v * b1;
          t9 += v * b2;
          t10 += v * b3;
          t11 += v * b4;
          t12 += v * b5;
          t13 += v * b6;
          t14 += v * b7;
          t15 += v * b8;
          t16 += v * b9;
          t17 += v * b10;
          t18 += v * b11;
          t19 += v * b12;
          t20 += v * b13;
          t21 += v * b14;
          t22 += v * b15;
          v = a[8];
          t8 += v * b0;
          t9 += v * b1;
          t10 += v * b2;
          t11 += v * b3;
          t12 += v * b4;
          t13 += v * b5;
          t14 += v * b6;
          t15 += v * b7;
          t16 += v * b8;
          t17 += v * b9;
          t18 += v * b10;
          t19 += v * b11;
          t20 += v * b12;
          t21 += v * b13;
          t22 += v * b14;
          t23 += v * b15;
          v = a[9];
          t9 += v * b0;
          t10 += v * b1;
          t11 += v * b2;
          t12 += v * b3;
          t13 += v * b4;
          t14 += v * b5;
          t15 += v * b6;
          t16 += v * b7;
          t17 += v * b8;
          t18 += v * b9;
          t19 += v * b10;
          t20 += v * b11;
          t21 += v * b12;
          t22 += v * b13;
          t23 += v * b14;
          t24 += v * b15;
          v = a[10];
          t10 += v * b0;
          t11 += v * b1;
          t12 += v * b2;
          t13 += v * b3;
          t14 += v * b4;
          t15 += v * b5;
          t16 += v * b6;
          t17 += v * b7;
          t18 += v * b8;
          t19 += v * b9;
          t20 += v * b10;
          t21 += v * b11;
          t22 += v * b12;
          t23 += v * b13;
          t24 += v * b14;
          t25 += v * b15;
          v = a[11];
          t11 += v * b0;
          t12 += v * b1;
          t13 += v * b2;
          t14 += v * b3;
          t15 += v * b4;
          t16 += v * b5;
          t17 += v * b6;
          t18 += v * b7;
          t19 += v * b8;
          t20 += v * b9;
          t21 += v * b10;
          t22 += v * b11;
          t23 += v * b12;
          t24 += v * b13;
          t25 += v * b14;
          t26 += v * b15;
          v = a[12];
          t12 += v * b0;
          t13 += v * b1;
          t14 += v * b2;
          t15 += v * b3;
          t16 += v * b4;
          t17 += v * b5;
          t18 += v * b6;
          t19 += v * b7;
          t20 += v * b8;
          t21 += v * b9;
          t22 += v * b10;
          t23 += v * b11;
          t24 += v * b12;
          t25 += v * b13;
          t26 += v * b14;
          t27 += v * b15;
          v = a[13];
          t13 += v * b0;
          t14 += v * b1;
          t15 += v * b2;
          t16 += v * b3;
          t17 += v * b4;
          t18 += v * b5;
          t19 += v * b6;
          t20 += v * b7;
          t21 += v * b8;
          t22 += v * b9;
          t23 += v * b10;
          t24 += v * b11;
          t25 += v * b12;
          t26 += v * b13;
          t27 += v * b14;
          t28 += v * b15;
          v = a[14];
          t14 += v * b0;
          t15 += v * b1;
          t16 += v * b2;
          t17 += v * b3;
          t18 += v * b4;
          t19 += v * b5;
          t20 += v * b6;
          t21 += v * b7;
          t22 += v * b8;
          t23 += v * b9;
          t24 += v * b10;
          t25 += v * b11;
          t26 += v * b12;
          t27 += v * b13;
          t28 += v * b14;
          t29 += v * b15;
          v = a[15];
          t15 += v * b0;
          t16 += v * b1;
          t17 += v * b2;
          t18 += v * b3;
          t19 += v * b4;
          t20 += v * b5;
          t21 += v * b6;
          t22 += v * b7;
          t23 += v * b8;
          t24 += v * b9;
          t25 += v * b10;
          t26 += v * b11;
          t27 += v * b12;
          t28 += v * b13;
          t29 += v * b14;
          t30 += v * b15;
          t0 += 38 * t16;
          t1 += 38 * t17;
          t2 += 38 * t18;
          t3 += 38 * t19;
          t4 += 38 * t20;
          t5 += 38 * t21;
          t6 += 38 * t22;
          t7 += 38 * t23;
          t8 += 38 * t24;
          t9 += 38 * t25;
          t10 += 38 * t26;
          t11 += 38 * t27;
          t12 += 38 * t28;
          t13 += 38 * t29;
          t14 += 38 * t30;
          c = 1;
          v = t0 + c + 65535;
          c = Math.floor(v / 65536);
          t0 = v - c * 65536;
          v = t1 + c + 65535;
          c = Math.floor(v / 65536);
          t1 = v - c * 65536;
          v = t2 + c + 65535;
          c = Math.floor(v / 65536);
          t2 = v - c * 65536;
          v = t3 + c + 65535;
          c = Math.floor(v / 65536);
          t3 = v - c * 65536;
          v = t4 + c + 65535;
          c = Math.floor(v / 65536);
          t4 = v - c * 65536;
          v = t5 + c + 65535;
          c = Math.floor(v / 65536);
          t5 = v - c * 65536;
          v = t6 + c + 65535;
          c = Math.floor(v / 65536);
          t6 = v - c * 65536;
          v = t7 + c + 65535;
          c = Math.floor(v / 65536);
          t7 = v - c * 65536;
          v = t8 + c + 65535;
          c = Math.floor(v / 65536);
          t8 = v - c * 65536;
          v = t9 + c + 65535;
          c = Math.floor(v / 65536);
          t9 = v - c * 65536;
          v = t10 + c + 65535;
          c = Math.floor(v / 65536);
          t10 = v - c * 65536;
          v = t11 + c + 65535;
          c = Math.floor(v / 65536);
          t11 = v - c * 65536;
          v = t12 + c + 65535;
          c = Math.floor(v / 65536);
          t12 = v - c * 65536;
          v = t13 + c + 65535;
          c = Math.floor(v / 65536);
          t13 = v - c * 65536;
          v = t14 + c + 65535;
          c = Math.floor(v / 65536);
          t14 = v - c * 65536;
          v = t15 + c + 65535;
          c = Math.floor(v / 65536);
          t15 = v - c * 65536;
          t0 += c - 1 + 37 * (c - 1);
          c = 1;
          v = t0 + c + 65535;
          c = Math.floor(v / 65536);
          t0 = v - c * 65536;
          v = t1 + c + 65535;
          c = Math.floor(v / 65536);
          t1 = v - c * 65536;
          v = t2 + c + 65535;
          c = Math.floor(v / 65536);
          t2 = v - c * 65536;
          v = t3 + c + 65535;
          c = Math.floor(v / 65536);
          t3 = v - c * 65536;
          v = t4 + c + 65535;
          c = Math.floor(v / 65536);
          t4 = v - c * 65536;
          v = t5 + c + 65535;
          c = Math.floor(v / 65536);
          t5 = v - c * 65536;
          v = t6 + c + 65535;
          c = Math.floor(v / 65536);
          t6 = v - c * 65536;
          v = t7 + c + 65535;
          c = Math.floor(v / 65536);
          t7 = v - c * 65536;
          v = t8 + c + 65535;
          c = Math.floor(v / 65536);
          t8 = v - c * 65536;
          v = t9 + c + 65535;
          c = Math.floor(v / 65536);
          t9 = v - c * 65536;
          v = t10 + c + 65535;
          c = Math.floor(v / 65536);
          t10 = v - c * 65536;
          v = t11 + c + 65535;
          c = Math.floor(v / 65536);
          t11 = v - c * 65536;
          v = t12 + c + 65535;
          c = Math.floor(v / 65536);
          t12 = v - c * 65536;
          v = t13 + c + 65535;
          c = Math.floor(v / 65536);
          t13 = v - c * 65536;
          v = t14 + c + 65535;
          c = Math.floor(v / 65536);
          t14 = v - c * 65536;
          v = t15 + c + 65535;
          c = Math.floor(v / 65536);
          t15 = v - c * 65536;
          t0 += c - 1 + 37 * (c - 1);
          o[0] = t0;
          o[1] = t1;
          o[2] = t2;
          o[3] = t3;
          o[4] = t4;
          o[5] = t5;
          o[6] = t6;
          o[7] = t7;
          o[8] = t8;
          o[9] = t9;
          o[10] = t10;
          o[11] = t11;
          o[12] = t12;
          o[13] = t13;
          o[14] = t14;
          o[15] = t15;
        }
        function S(o, a) {
          M(o, a, a);
        }
        function inv25519(o, i) {
          var c = gf();
          var a;
          for (a = 0; a < 16; a++)
            c[a] = i[a];
          for (a = 253; a >= 0; a--) {
            S(c, c);
            if (a !== 2 && a !== 4)
              M(c, c, i);
          }
          for (a = 0; a < 16; a++)
            o[a] = c[a];
        }
        function pow2523(o, i) {
          var c = gf();
          var a;
          for (a = 0; a < 16; a++)
            c[a] = i[a];
          for (a = 250; a >= 0; a--) {
            S(c, c);
            if (a !== 1)
              M(c, c, i);
          }
          for (a = 0; a < 16; a++)
            o[a] = c[a];
        }
        function crypto_scalarmult(q, n, p) {
          var z = new Uint8Array(32);
          var x = new Float64Array(80), r, i;
          var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
          for (i = 0; i < 31; i++)
            z[i] = n[i];
          z[31] = n[31] & 127 | 64;
          z[0] &= 248;
          unpack25519(x, p);
          for (i = 0; i < 16; i++) {
            b[i] = x[i];
            d[i] = a[i] = c[i] = 0;
          }
          a[0] = d[0] = 1;
          for (i = 254; i >= 0; --i) {
            r = z[i >>> 3] >>> (i & 7) & 1;
            sel25519(a, b, r);
            sel25519(c, d, r);
            A(e, a, c);
            Z(a, a, c);
            A(c, b, d);
            Z(b, b, d);
            S(d, e);
            S(f, a);
            M(a, c, a);
            M(c, b, e);
            A(e, a, c);
            Z(a, a, c);
            S(b, a);
            Z(c, d, f);
            M(a, c, _121665);
            A(a, a, d);
            M(c, c, a);
            M(a, d, f);
            M(d, b, x);
            S(b, e);
            sel25519(a, b, r);
            sel25519(c, d, r);
          }
          for (i = 0; i < 16; i++) {
            x[i + 16] = a[i];
            x[i + 32] = c[i];
            x[i + 48] = b[i];
            x[i + 64] = d[i];
          }
          var x32 = x.subarray(32);
          var x16 = x.subarray(16);
          inv25519(x32, x32);
          M(x16, x16, x32);
          pack25519(q, x16);
          return 0;
        }
        function crypto_scalarmult_base(q, n) {
          return crypto_scalarmult(q, n, _9);
        }
        function crypto_box_keypair(y, x) {
          randombytes(x, 32);
          return crypto_scalarmult_base(y, x);
        }
        function crypto_box_beforenm(k, y, x) {
          var s = new Uint8Array(32);
          crypto_scalarmult(s, x, y);
          return crypto_core_hsalsa20(k, _0, s, sigma);
        }
        var crypto_box_afternm = crypto_secretbox;
        var crypto_box_open_afternm = crypto_secretbox_open;
        function crypto_box(c, m, d, n, y, x) {
          var k = new Uint8Array(32);
          crypto_box_beforenm(k, y, x);
          return crypto_box_afternm(c, m, d, n, k);
        }
        function crypto_box_open(m, c, d, n, y, x) {
          var k = new Uint8Array(32);
          crypto_box_beforenm(k, y, x);
          return crypto_box_open_afternm(m, c, d, n, k);
        }
        var K = [
          1116352408,
          3609767458,
          1899447441,
          602891725,
          3049323471,
          3964484399,
          3921009573,
          2173295548,
          961987163,
          4081628472,
          1508970993,
          3053834265,
          2453635748,
          2937671579,
          2870763221,
          3664609560,
          3624381080,
          2734883394,
          310598401,
          1164996542,
          607225278,
          1323610764,
          1426881987,
          3590304994,
          1925078388,
          4068182383,
          2162078206,
          991336113,
          2614888103,
          633803317,
          3248222580,
          3479774868,
          3835390401,
          2666613458,
          4022224774,
          944711139,
          264347078,
          2341262773,
          604807628,
          2007800933,
          770255983,
          1495990901,
          1249150122,
          1856431235,
          1555081692,
          3175218132,
          1996064986,
          2198950837,
          2554220882,
          3999719339,
          2821834349,
          766784016,
          2952996808,
          2566594879,
          3210313671,
          3203337956,
          3336571891,
          1034457026,
          3584528711,
          2466948901,
          113926993,
          3758326383,
          338241895,
          168717936,
          666307205,
          1188179964,
          773529912,
          1546045734,
          1294757372,
          1522805485,
          1396182291,
          2643833823,
          1695183700,
          2343527390,
          1986661051,
          1014477480,
          2177026350,
          1206759142,
          2456956037,
          344077627,
          2730485921,
          1290863460,
          2820302411,
          3158454273,
          3259730800,
          3505952657,
          3345764771,
          106217008,
          3516065817,
          3606008344,
          3600352804,
          1432725776,
          4094571909,
          1467031594,
          275423344,
          851169720,
          430227734,
          3100823752,
          506948616,
          1363258195,
          659060556,
          3750685593,
          883997877,
          3785050280,
          958139571,
          3318307427,
          1322822218,
          3812723403,
          1537002063,
          2003034995,
          1747873779,
          3602036899,
          1955562222,
          1575990012,
          2024104815,
          1125592928,
          2227730452,
          2716904306,
          2361852424,
          442776044,
          2428436474,
          593698344,
          2756734187,
          3733110249,
          3204031479,
          2999351573,
          3329325298,
          3815920427,
          3391569614,
          3928383900,
          3515267271,
          566280711,
          3940187606,
          3454069534,
          4118630271,
          4000239992,
          116418474,
          1914138554,
          174292421,
          2731055270,
          289380356,
          3203993006,
          460393269,
          320620315,
          685471733,
          587496836,
          852142971,
          1086792851,
          1017036298,
          365543100,
          1126000580,
          2618297676,
          1288033470,
          3409855158,
          1501505948,
          4234509866,
          1607167915,
          987167468,
          1816402316,
          1246189591
        ];
        function crypto_hashblocks_hl(hh, hl, m, n) {
          var wh = new Int32Array(16), wl = new Int32Array(16), bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i, j, h, l, a, b, c, d;
          var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
          var pos = 0;
          while (n >= 128) {
            for (i = 0; i < 16; i++) {
              j = 8 * i + pos;
              wh[i] = m[j + 0] << 24 | m[j + 1] << 16 | m[j + 2] << 8 | m[j + 3];
              wl[i] = m[j + 4] << 24 | m[j + 5] << 16 | m[j + 6] << 8 | m[j + 7];
            }
            for (i = 0; i < 80; i++) {
              bh0 = ah0;
              bh1 = ah1;
              bh2 = ah2;
              bh3 = ah3;
              bh4 = ah4;
              bh5 = ah5;
              bh6 = ah6;
              bh7 = ah7;
              bl0 = al0;
              bl1 = al1;
              bl2 = al2;
              bl3 = al3;
              bl4 = al4;
              bl5 = al5;
              bl6 = al6;
              bl7 = al7;
              h = ah7;
              l = al7;
              a = l & 65535;
              b = l >>> 16;
              c = h & 65535;
              d = h >>> 16;
              h = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
              l = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d += h >>> 16;
              h = ah4 & ah5 ^ ~ah4 & ah6;
              l = al4 & al5 ^ ~al4 & al6;
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d += h >>> 16;
              h = K[i * 2];
              l = K[i * 2 + 1];
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d += h >>> 16;
              h = wh[i % 16];
              l = wl[i % 16];
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d += h >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d += c >>> 16;
              th = c & 65535 | d << 16;
              tl = a & 65535 | b << 16;
              h = th;
              l = tl;
              a = l & 65535;
              b = l >>> 16;
              c = h & 65535;
              d = h >>> 16;
              h = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
              l = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d += h >>> 16;
              h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
              l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d += h >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d += c >>> 16;
              bh7 = c & 65535 | d << 16;
              bl7 = a & 65535 | b << 16;
              h = bh3;
              l = bl3;
              a = l & 65535;
              b = l >>> 16;
              c = h & 65535;
              d = h >>> 16;
              h = th;
              l = tl;
              a += l & 65535;
              b += l >>> 16;
              c += h & 65535;
              d += h >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d += c >>> 16;
              bh3 = c & 65535 | d << 16;
              bl3 = a & 65535 | b << 16;
              ah1 = bh0;
              ah2 = bh1;
              ah3 = bh2;
              ah4 = bh3;
              ah5 = bh4;
              ah6 = bh5;
              ah7 = bh6;
              ah0 = bh7;
              al1 = bl0;
              al2 = bl1;
              al3 = bl2;
              al4 = bl3;
              al5 = bl4;
              al6 = bl5;
              al7 = bl6;
              al0 = bl7;
              if (i % 16 === 15) {
                for (j = 0; j < 16; j++) {
                  h = wh[j];
                  l = wl[j];
                  a = l & 65535;
                  b = l >>> 16;
                  c = h & 65535;
                  d = h >>> 16;
                  h = wh[(j + 9) % 16];
                  l = wl[(j + 9) % 16];
                  a += l & 65535;
                  b += l >>> 16;
                  c += h & 65535;
                  d += h >>> 16;
                  th = wh[(j + 1) % 16];
                  tl = wl[(j + 1) % 16];
                  h = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
                  l = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
                  a += l & 65535;
                  b += l >>> 16;
                  c += h & 65535;
                  d += h >>> 16;
                  th = wh[(j + 14) % 16];
                  tl = wl[(j + 14) % 16];
                  h = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
                  l = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
                  a += l & 65535;
                  b += l >>> 16;
                  c += h & 65535;
                  d += h >>> 16;
                  b += a >>> 16;
                  c += b >>> 16;
                  d += c >>> 16;
                  wh[j] = c & 65535 | d << 16;
                  wl[j] = a & 65535 | b << 16;
                }
              }
            }
            h = ah0;
            l = al0;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[0];
            l = hl[0];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[0] = ah0 = c & 65535 | d << 16;
            hl[0] = al0 = a & 65535 | b << 16;
            h = ah1;
            l = al1;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[1];
            l = hl[1];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[1] = ah1 = c & 65535 | d << 16;
            hl[1] = al1 = a & 65535 | b << 16;
            h = ah2;
            l = al2;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[2];
            l = hl[2];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[2] = ah2 = c & 65535 | d << 16;
            hl[2] = al2 = a & 65535 | b << 16;
            h = ah3;
            l = al3;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[3];
            l = hl[3];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[3] = ah3 = c & 65535 | d << 16;
            hl[3] = al3 = a & 65535 | b << 16;
            h = ah4;
            l = al4;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[4];
            l = hl[4];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[4] = ah4 = c & 65535 | d << 16;
            hl[4] = al4 = a & 65535 | b << 16;
            h = ah5;
            l = al5;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[5];
            l = hl[5];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[5] = ah5 = c & 65535 | d << 16;
            hl[5] = al5 = a & 65535 | b << 16;
            h = ah6;
            l = al6;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[6];
            l = hl[6];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[6] = ah6 = c & 65535 | d << 16;
            hl[6] = al6 = a & 65535 | b << 16;
            h = ah7;
            l = al7;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[7];
            l = hl[7];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[7] = ah7 = c & 65535 | d << 16;
            hl[7] = al7 = a & 65535 | b << 16;
            pos += 128;
            n -= 128;
          }
          return n;
        }
        function crypto_hash(out, m, n) {
          var hh = new Int32Array(8), hl = new Int32Array(8), x = new Uint8Array(256), i, b = n;
          hh[0] = 1779033703;
          hh[1] = 3144134277;
          hh[2] = 1013904242;
          hh[3] = 2773480762;
          hh[4] = 1359893119;
          hh[5] = 2600822924;
          hh[6] = 528734635;
          hh[7] = 1541459225;
          hl[0] = 4089235720;
          hl[1] = 2227873595;
          hl[2] = 4271175723;
          hl[3] = 1595750129;
          hl[4] = 2917565137;
          hl[5] = 725511199;
          hl[6] = 4215389547;
          hl[7] = 327033209;
          crypto_hashblocks_hl(hh, hl, m, n);
          n %= 128;
          for (i = 0; i < n; i++)
            x[i] = m[b - n + i];
          x[n] = 128;
          n = 256 - 128 * (n < 112 ? 1 : 0);
          x[n - 9] = 0;
          ts64(x, n - 8, b / 536870912 | 0, b << 3);
          crypto_hashblocks_hl(hh, hl, x, n);
          for (i = 0; i < 8; i++)
            ts64(out, 8 * i, hh[i], hl[i]);
          return 0;
        }
        function add(p, q) {
          var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
          Z(a, p[1], p[0]);
          Z(t, q[1], q[0]);
          M(a, a, t);
          A(b, p[0], p[1]);
          A(t, q[0], q[1]);
          M(b, b, t);
          M(c, p[3], q[3]);
          M(c, c, D2);
          M(d, p[2], q[2]);
          A(d, d, d);
          Z(e, b, a);
          Z(f, d, c);
          A(g, d, c);
          A(h, b, a);
          M(p[0], e, f);
          M(p[1], h, g);
          M(p[2], g, f);
          M(p[3], e, h);
        }
        function cswap(p, q, b) {
          var i;
          for (i = 0; i < 4; i++) {
            sel25519(p[i], q[i], b);
          }
        }
        function pack(r, p) {
          var tx = gf(), ty = gf(), zi = gf();
          inv25519(zi, p[2]);
          M(tx, p[0], zi);
          M(ty, p[1], zi);
          pack25519(r, ty);
          r[31] ^= par25519(tx) << 7;
        }
        function scalarmult(p, q, s) {
          var b, i;
          set25519(p[0], gf0);
          set25519(p[1], gf1);
          set25519(p[2], gf1);
          set25519(p[3], gf0);
          for (i = 255; i >= 0; --i) {
            b = s[i / 8 | 0] >> (i & 7) & 1;
            cswap(p, q, b);
            add(q, p);
            add(p, p);
            cswap(p, q, b);
          }
        }
        function scalarbase(p, s) {
          var q = [gf(), gf(), gf(), gf()];
          set25519(q[0], X);
          set25519(q[1], Y);
          set25519(q[2], gf1);
          M(q[3], X, Y);
          scalarmult(p, q, s);
        }
        function crypto_sign_keypair(pk, sk, seeded) {
          var d = new Uint8Array(64);
          var p = [gf(), gf(), gf(), gf()];
          var i;
          if (!seeded)
            randombytes(sk, 32);
          crypto_hash(d, sk, 32);
          d[0] &= 248;
          d[31] &= 127;
          d[31] |= 64;
          scalarbase(p, d);
          pack(pk, p);
          for (i = 0; i < 32; i++)
            sk[i + 32] = pk[i];
          return 0;
        }
        var L = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
        function modL(r, x) {
          var carry, i, j, k;
          for (i = 63; i >= 32; --i) {
            carry = 0;
            for (j = i - 32, k = i - 12; j < k; ++j) {
              x[j] += carry - 16 * x[i] * L[j - (i - 32)];
              carry = Math.floor((x[j] + 128) / 256);
              x[j] -= carry * 256;
            }
            x[j] += carry;
            x[i] = 0;
          }
          carry = 0;
          for (j = 0; j < 32; j++) {
            x[j] += carry - (x[31] >> 4) * L[j];
            carry = x[j] >> 8;
            x[j] &= 255;
          }
          for (j = 0; j < 32; j++)
            x[j] -= carry * L[j];
          for (i = 0; i < 32; i++) {
            x[i + 1] += x[i] >> 8;
            r[i] = x[i] & 255;
          }
        }
        function reduce(r) {
          var x = new Float64Array(64), i;
          for (i = 0; i < 64; i++)
            x[i] = r[i];
          for (i = 0; i < 64; i++)
            r[i] = 0;
          modL(r, x);
        }
        function crypto_sign(sm, m, n, sk) {
          var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
          var i, j, x = new Float64Array(64);
          var p = [gf(), gf(), gf(), gf()];
          crypto_hash(d, sk, 32);
          d[0] &= 248;
          d[31] &= 127;
          d[31] |= 64;
          var smlen = n + 64;
          for (i = 0; i < n; i++)
            sm[64 + i] = m[i];
          for (i = 0; i < 32; i++)
            sm[32 + i] = d[32 + i];
          crypto_hash(r, sm.subarray(32), n + 32);
          reduce(r);
          scalarbase(p, r);
          pack(sm, p);
          for (i = 32; i < 64; i++)
            sm[i] = sk[i];
          crypto_hash(h, sm, n + 64);
          reduce(h);
          for (i = 0; i < 64; i++)
            x[i] = 0;
          for (i = 0; i < 32; i++)
            x[i] = r[i];
          for (i = 0; i < 32; i++) {
            for (j = 0; j < 32; j++) {
              x[i + j] += h[i] * d[j];
            }
          }
          modL(sm.subarray(32), x);
          return smlen;
        }
        function unpackneg(r, p) {
          var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
          set25519(r[2], gf1);
          unpack25519(r[1], p);
          S(num, r[1]);
          M(den, num, D);
          Z(num, num, r[2]);
          A(den, r[2], den);
          S(den2, den);
          S(den4, den2);
          M(den6, den4, den2);
          M(t, den6, num);
          M(t, t, den);
          pow2523(t, t);
          M(t, t, num);
          M(t, t, den);
          M(t, t, den);
          M(r[0], t, den);
          S(chk, r[0]);
          M(chk, chk, den);
          if (neq25519(chk, num))
            M(r[0], r[0], I);
          S(chk, r[0]);
          M(chk, chk, den);
          if (neq25519(chk, num))
            return -1;
          if (par25519(r[0]) === p[31] >> 7)
            Z(r[0], gf0, r[0]);
          M(r[3], r[0], r[1]);
          return 0;
        }
        function crypto_sign_open(m, sm, n, pk) {
          var i;
          var t = new Uint8Array(32), h = new Uint8Array(64);
          var p = [gf(), gf(), gf(), gf()], q = [gf(), gf(), gf(), gf()];
          if (n < 64)
            return -1;
          if (unpackneg(q, pk))
            return -1;
          for (i = 0; i < n; i++)
            m[i] = sm[i];
          for (i = 0; i < 32; i++)
            m[i + 32] = pk[i];
          crypto_hash(h, m, n);
          reduce(h);
          scalarmult(p, q, h);
          scalarbase(q, sm.subarray(32));
          add(p, q);
          pack(t, p);
          n -= 64;
          if (crypto_verify_32(sm, 0, t, 0)) {
            for (i = 0; i < n; i++)
              m[i] = 0;
            return -1;
          }
          for (i = 0; i < n; i++)
            m[i] = sm[i + 64];
          return n;
        }
        var crypto_secretbox_KEYBYTES = 32, crypto_secretbox_NONCEBYTES = 24, crypto_secretbox_ZEROBYTES = 32, crypto_secretbox_BOXZEROBYTES = 16, crypto_scalarmult_BYTES = 32, crypto_scalarmult_SCALARBYTES = 32, crypto_box_PUBLICKEYBYTES = 32, crypto_box_SECRETKEYBYTES = 32, crypto_box_BEFORENMBYTES = 32, crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES, crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES, crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES, crypto_sign_BYTES = 64, crypto_sign_PUBLICKEYBYTES = 32, crypto_sign_SECRETKEYBYTES = 64, crypto_sign_SEEDBYTES = 32, crypto_hash_BYTES = 64;
        nacl.lowlevel = {
          crypto_core_hsalsa20,
          crypto_stream_xor,
          crypto_stream,
          crypto_stream_salsa20_xor,
          crypto_stream_salsa20,
          crypto_onetimeauth,
          crypto_onetimeauth_verify,
          crypto_verify_16,
          crypto_verify_32,
          crypto_secretbox,
          crypto_secretbox_open,
          crypto_scalarmult,
          crypto_scalarmult_base,
          crypto_box_beforenm,
          crypto_box_afternm,
          crypto_box,
          crypto_box_open,
          crypto_box_keypair,
          crypto_hash,
          crypto_sign,
          crypto_sign_keypair,
          crypto_sign_open,
          crypto_secretbox_KEYBYTES,
          crypto_secretbox_NONCEBYTES,
          crypto_secretbox_ZEROBYTES,
          crypto_secretbox_BOXZEROBYTES,
          crypto_scalarmult_BYTES,
          crypto_scalarmult_SCALARBYTES,
          crypto_box_PUBLICKEYBYTES,
          crypto_box_SECRETKEYBYTES,
          crypto_box_BEFORENMBYTES,
          crypto_box_NONCEBYTES,
          crypto_box_ZEROBYTES,
          crypto_box_BOXZEROBYTES,
          crypto_sign_BYTES,
          crypto_sign_PUBLICKEYBYTES,
          crypto_sign_SECRETKEYBYTES,
          crypto_sign_SEEDBYTES,
          crypto_hash_BYTES,
          gf,
          D,
          L,
          pack25519,
          unpack25519,
          M,
          A,
          S,
          Z,
          pow2523,
          add,
          set25519,
          modL,
          scalarmult,
          scalarbase
        };
        function checkLengths(k, n) {
          if (k.length !== crypto_secretbox_KEYBYTES)
            throw new Error("bad key size");
          if (n.length !== crypto_secretbox_NONCEBYTES)
            throw new Error("bad nonce size");
        }
        function checkBoxLengths(pk, sk) {
          if (pk.length !== crypto_box_PUBLICKEYBYTES)
            throw new Error("bad public key size");
          if (sk.length !== crypto_box_SECRETKEYBYTES)
            throw new Error("bad secret key size");
        }
        function checkArrayTypes() {
          for (var i = 0; i < arguments.length; i++) {
            if (!(arguments[i] instanceof Uint8Array))
              throw new TypeError("unexpected type, use Uint8Array");
          }
        }
        function cleanup(arr) {
          for (var i = 0; i < arr.length; i++)
            arr[i] = 0;
        }
        nacl.randomBytes = function(n) {
          var b = new Uint8Array(n);
          randombytes(b, n);
          return b;
        };
        nacl.secretbox = function(msg, nonce, key) {
          checkArrayTypes(msg, nonce, key);
          checkLengths(key, nonce);
          var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
          var c = new Uint8Array(m.length);
          for (var i = 0; i < msg.length; i++)
            m[i + crypto_secretbox_ZEROBYTES] = msg[i];
          crypto_secretbox(c, m, m.length, nonce, key);
          return c.subarray(crypto_secretbox_BOXZEROBYTES);
        };
        nacl.secretbox.open = function(box, nonce, key) {
          checkArrayTypes(box, nonce, key);
          checkLengths(key, nonce);
          var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
          var m = new Uint8Array(c.length);
          for (var i = 0; i < box.length; i++)
            c[i + crypto_secretbox_BOXZEROBYTES] = box[i];
          if (c.length < 32)
            return null;
          if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0)
            return null;
          return m.subarray(crypto_secretbox_ZEROBYTES);
        };
        nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
        nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
        nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
        nacl.scalarMult = function(n, p) {
          checkArrayTypes(n, p);
          if (n.length !== crypto_scalarmult_SCALARBYTES)
            throw new Error("bad n size");
          if (p.length !== crypto_scalarmult_BYTES)
            throw new Error("bad p size");
          var q = new Uint8Array(crypto_scalarmult_BYTES);
          crypto_scalarmult(q, n, p);
          return q;
        };
        nacl.scalarMult.base = function(n) {
          checkArrayTypes(n);
          if (n.length !== crypto_scalarmult_SCALARBYTES)
            throw new Error("bad n size");
          var q = new Uint8Array(crypto_scalarmult_BYTES);
          crypto_scalarmult_base(q, n);
          return q;
        };
        nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
        nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
        nacl.box = function(msg, nonce, publicKey, secretKey) {
          var k = nacl.box.before(publicKey, secretKey);
          return nacl.secretbox(msg, nonce, k);
        };
        nacl.box.before = function(publicKey, secretKey) {
          checkArrayTypes(publicKey, secretKey);
          checkBoxLengths(publicKey, secretKey);
          var k = new Uint8Array(crypto_box_BEFORENMBYTES);
          crypto_box_beforenm(k, publicKey, secretKey);
          return k;
        };
        nacl.box.after = nacl.secretbox;
        nacl.box.open = function(msg, nonce, publicKey, secretKey) {
          var k = nacl.box.before(publicKey, secretKey);
          return nacl.secretbox.open(msg, nonce, k);
        };
        nacl.box.open.after = nacl.secretbox.open;
        nacl.box.keyPair = function() {
          var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
          var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
          crypto_box_keypair(pk, sk);
          return { publicKey: pk, secretKey: sk };
        };
        nacl.box.keyPair.fromSecretKey = function(secretKey) {
          checkArrayTypes(secretKey);
          if (secretKey.length !== crypto_box_SECRETKEYBYTES)
            throw new Error("bad secret key size");
          var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
          crypto_scalarmult_base(pk, secretKey);
          return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
        };
        nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
        nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
        nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
        nacl.box.nonceLength = crypto_box_NONCEBYTES;
        nacl.box.overheadLength = nacl.secretbox.overheadLength;
        nacl.sign = function(msg, secretKey) {
          checkArrayTypes(msg, secretKey);
          if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
            throw new Error("bad secret key size");
          var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
          crypto_sign(signedMsg, msg, msg.length, secretKey);
          return signedMsg;
        };
        nacl.sign.open = function(signedMsg, publicKey) {
          checkArrayTypes(signedMsg, publicKey);
          if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
            throw new Error("bad public key size");
          var tmp = new Uint8Array(signedMsg.length);
          var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
          if (mlen < 0)
            return null;
          var m = new Uint8Array(mlen);
          for (var i = 0; i < m.length; i++)
            m[i] = tmp[i];
          return m;
        };
        nacl.sign.detached = function(msg, secretKey) {
          var signedMsg = nacl.sign(msg, secretKey);
          var sig = new Uint8Array(crypto_sign_BYTES);
          for (var i = 0; i < sig.length; i++)
            sig[i] = signedMsg[i];
          return sig;
        };
        nacl.sign.detached.verify = function(msg, sig, publicKey) {
          checkArrayTypes(msg, sig, publicKey);
          if (sig.length !== crypto_sign_BYTES)
            throw new Error("bad signature size");
          if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
            throw new Error("bad public key size");
          var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
          var m = new Uint8Array(crypto_sign_BYTES + msg.length);
          var i;
          for (i = 0; i < crypto_sign_BYTES; i++)
            sm[i] = sig[i];
          for (i = 0; i < msg.length; i++)
            sm[i + crypto_sign_BYTES] = msg[i];
          return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
        };
        nacl.sign.keyPair = function() {
          var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
          var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
          crypto_sign_keypair(pk, sk);
          return { publicKey: pk, secretKey: sk };
        };
        nacl.sign.keyPair.fromSecretKey = function(secretKey) {
          checkArrayTypes(secretKey);
          if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
            throw new Error("bad secret key size");
          var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
          for (var i = 0; i < pk.length; i++)
            pk[i] = secretKey[32 + i];
          return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
        };
        nacl.sign.keyPair.fromSeed = function(seed) {
          checkArrayTypes(seed);
          if (seed.length !== crypto_sign_SEEDBYTES)
            throw new Error("bad seed size");
          var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
          var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
          for (var i = 0; i < 32; i++)
            sk[i] = seed[i];
          crypto_sign_keypair(pk, sk, true);
          return { publicKey: pk, secretKey: sk };
        };
        nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
        nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
        nacl.sign.seedLength = crypto_sign_SEEDBYTES;
        nacl.sign.signatureLength = crypto_sign_BYTES;
        nacl.hash = function(msg) {
          checkArrayTypes(msg);
          var h = new Uint8Array(crypto_hash_BYTES);
          crypto_hash(h, msg, msg.length);
          return h;
        };
        nacl.hash.hashLength = crypto_hash_BYTES;
        nacl.verify = function(x, y) {
          checkArrayTypes(x, y);
          if (x.length === 0 || y.length === 0)
            return false;
          if (x.length !== y.length)
            return false;
          return vn(x, 0, y, 0, x.length) === 0 ? true : false;
        };
        nacl.setPRNG = function(fn) {
          randombytes = fn;
        };
        (function() {
          var crypto = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
          if (crypto && crypto.getRandomValues) {
            var QUOTA = 65536;
            nacl.setPRNG(function(x, n) {
              var i, v = new Uint8Array(n);
              for (i = 0; i < n; i += QUOTA) {
                crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
              }
              for (i = 0; i < n; i++)
                x[i] = v[i];
              cleanup(v);
            });
          } else if (typeof __require !== "undefined") {
            crypto = require_crypto();
            if (crypto && crypto.randomBytes) {
              nacl.setPRNG(function(x, n) {
                var i, v = crypto.randomBytes(n);
                for (i = 0; i < n; i++)
                  x[i] = v[i];
                cleanup(v);
              });
            }
          }
        })();
      })(typeof module !== "undefined" && module.exports ? module.exports : self.nacl = self.nacl || {});
    }
  });

  // node_modules/ed2curve/ed2curve.js
  var require_ed2curve = __commonJS({
    "node_modules/ed2curve/ed2curve.js"(exports, module) {
      (function(root, f) {
        "use strict";
        if (typeof module !== "undefined" && module.exports)
          module.exports = f(require_nacl_fast());
        else
          root.ed2curve = f(root.nacl);
      })(exports, function(nacl) {
        "use strict";
        if (!nacl)
          throw new Error("tweetnacl not loaded");
        var gf = function(init) {
          var i, r = new Float64Array(16);
          if (init)
            for (i = 0; i < init.length; i++)
              r[i] = init[i];
          return r;
        };
        var gf0 = gf(), gf1 = gf([1]), D = gf([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), I = gf([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
        function car25519(o) {
          var c;
          var i;
          for (i = 0; i < 16; i++) {
            o[i] += 65536;
            c = Math.floor(o[i] / 65536);
            o[(i + 1) * (i < 15 ? 1 : 0)] += c - 1 + 37 * (c - 1) * (i === 15 ? 1 : 0);
            o[i] -= c * 65536;
          }
        }
        function sel25519(p, q, b) {
          var t, c = ~(b - 1);
          for (var i = 0; i < 16; i++) {
            t = c & (p[i] ^ q[i]);
            p[i] ^= t;
            q[i] ^= t;
          }
        }
        function unpack25519(o, n) {
          var i;
          for (i = 0; i < 16; i++)
            o[i] = n[2 * i] + (n[2 * i + 1] << 8);
          o[15] &= 32767;
        }
        function A(o, a, b) {
          var i;
          for (i = 0; i < 16; i++)
            o[i] = a[i] + b[i] | 0;
        }
        function Z(o, a, b) {
          var i;
          for (i = 0; i < 16; i++)
            o[i] = a[i] - b[i] | 0;
        }
        function M(o, a, b) {
          var i, j, t = new Float64Array(31);
          for (i = 0; i < 31; i++)
            t[i] = 0;
          for (i = 0; i < 16; i++) {
            for (j = 0; j < 16; j++) {
              t[i + j] += a[i] * b[j];
            }
          }
          for (i = 0; i < 15; i++) {
            t[i] += 38 * t[i + 16];
          }
          for (i = 0; i < 16; i++)
            o[i] = t[i];
          car25519(o);
          car25519(o);
        }
        function S(o, a) {
          M(o, a, a);
        }
        function inv25519(o, i) {
          var c = gf();
          var a;
          for (a = 0; a < 16; a++)
            c[a] = i[a];
          for (a = 253; a >= 0; a--) {
            S(c, c);
            if (a !== 2 && a !== 4)
              M(c, c, i);
          }
          for (a = 0; a < 16; a++)
            o[a] = c[a];
        }
        function pack25519(o, n) {
          var i, j, b;
          var m = gf(), t = gf();
          for (i = 0; i < 16; i++)
            t[i] = n[i];
          car25519(t);
          car25519(t);
          car25519(t);
          for (j = 0; j < 2; j++) {
            m[0] = t[0] - 65517;
            for (i = 1; i < 15; i++) {
              m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
              m[i - 1] &= 65535;
            }
            m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
            b = m[15] >> 16 & 1;
            m[14] &= 65535;
            sel25519(t, m, 1 - b);
          }
          for (i = 0; i < 16; i++) {
            o[2 * i] = t[i] & 255;
            o[2 * i + 1] = t[i] >> 8;
          }
        }
        function par25519(a) {
          var d = new Uint8Array(32);
          pack25519(d, a);
          return d[0] & 1;
        }
        function vn(x, xi, y, yi, n) {
          var i, d = 0;
          for (i = 0; i < n; i++)
            d |= x[xi + i] ^ y[yi + i];
          return (1 & d - 1 >>> 8) - 1;
        }
        function crypto_verify_32(x, xi, y, yi) {
          return vn(x, xi, y, yi, 32);
        }
        function neq25519(a, b) {
          var c = new Uint8Array(32), d = new Uint8Array(32);
          pack25519(c, a);
          pack25519(d, b);
          return crypto_verify_32(c, 0, d, 0);
        }
        function pow2523(o, i) {
          var c = gf();
          var a;
          for (a = 0; a < 16; a++)
            c[a] = i[a];
          for (a = 250; a >= 0; a--) {
            S(c, c);
            if (a !== 1)
              M(c, c, i);
          }
          for (a = 0; a < 16; a++)
            o[a] = c[a];
        }
        function set25519(r, a) {
          var i;
          for (i = 0; i < 16; i++)
            r[i] = a[i] | 0;
        }
        function unpackneg(r, p) {
          var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
          set25519(r[2], gf1);
          unpack25519(r[1], p);
          S(num, r[1]);
          M(den, num, D);
          Z(num, num, r[2]);
          A(den, r[2], den);
          S(den2, den);
          S(den4, den2);
          M(den6, den4, den2);
          M(t, den6, num);
          M(t, t, den);
          pow2523(t, t);
          M(t, t, num);
          M(t, t, den);
          M(t, t, den);
          M(r[0], t, den);
          S(chk, r[0]);
          M(chk, chk, den);
          if (neq25519(chk, num))
            M(r[0], r[0], I);
          S(chk, r[0]);
          M(chk, chk, den);
          if (neq25519(chk, num))
            return -1;
          if (par25519(r[0]) === p[31] >> 7)
            Z(r[0], gf0, r[0]);
          M(r[3], r[0], r[1]);
          return 0;
        }
        function convertPublicKey(pk) {
          var z = new Uint8Array(32), q = [gf(), gf(), gf(), gf()], a = gf(), b = gf();
          if (unpackneg(q, pk))
            return null;
          var y = q[1];
          A(a, gf1, y);
          Z(b, gf1, y);
          inv25519(b, b);
          M(a, a, b);
          pack25519(z, a);
          return z;
        }
        function convertSecretKey(sk) {
          var d = new Uint8Array(64), o = new Uint8Array(32), i;
          nacl.lowlevel.crypto_hash(d, sk, 32);
          d[0] &= 248;
          d[31] &= 127;
          d[31] |= 64;
          for (i = 0; i < 32; i++)
            o[i] = d[i];
          for (i = 0; i < 64; i++)
            d[i] = 0;
          return o;
        }
        function convertKeyPair(edKeyPair) {
          var publicKey = convertPublicKey(edKeyPair.publicKey);
          if (!publicKey)
            return null;
          return {
            publicKey,
            secretKey: convertSecretKey(edKeyPair.secretKey)
          };
        }
        return {
          convertPublicKey,
          convertSecretKey,
          convertKeyPair
        };
      });
    }
  });

  // node_modules/@polkadot/util-crypto/ed25519/convertKey.cjs
  var require_convertKey = __commonJS({
    "node_modules/@polkadot/util-crypto/ed25519/convertKey.cjs"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.convertPublicKeyToCurve25519 = convertPublicKeyToCurve25519;
      exports.convertSecretKeyToCurve25519 = convertSecretKeyToCurve25519;
      var _ed2curve = _interopRequireDefault(require_ed2curve());
      var _util = require_util();
      function convertSecretKeyToCurve25519(secretKey) {
        return _ed2curve.default.convertSecretKey(secretKey);
      }
      function convertPublicKeyToCurve25519(publicKey) {
        return (0, _util.assertReturn)(_ed2curve.default.convertPublicKey(publicKey), "Unable to convert publicKey to ed25519");
      }
    }
  });

  // node_modules/@polkadot/util-crypto/ed25519/deriveHard.cjs
  var require_deriveHard2 = __commonJS({
    "node_modules/@polkadot/util-crypto/ed25519/deriveHard.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ed25519DeriveHard = ed25519DeriveHard;
      var _util = require_util();
      var _asU8a = require_asU8a();
      var HDKD = (0, _util.compactAddLength)((0, _util.stringToU8a)("Ed25519HDKD"));
      function ed25519DeriveHard(seed, chainCode) {
        (0, _util.assert)((0, _util.isU8a)(chainCode) && chainCode.length === 32, "Invalid chainCode passed to derive");
        return (0, _asU8a.blake2AsU8a)((0, _util.u8aConcat)(HDKD, seed, chainCode));
      }
    }
  });

  // node_modules/@polkadot/util-crypto/random/asU8a.cjs
  var require_asU8a2 = __commonJS({
    "node_modules/@polkadot/util-crypto/random/asU8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.randomAsHex = void 0;
      exports.randomAsU8a = randomAsU8a;
      var _xRandomvalues = require_browser3();
      var _helpers = require_helpers3();
      function randomAsU8a() {
        let length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 32;
        return (0, _xRandomvalues.getRandomValues)(new Uint8Array(length));
      }
      var randomAsHex = (0, _helpers.createAsHex)(randomAsU8a);
      exports.randomAsHex = randomAsHex;
    }
  });

  // node_modules/@polkadot/util-crypto/random/asNumber.cjs
  var require_asNumber = __commonJS({
    "node_modules/@polkadot/util-crypto/random/asNumber.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.randomAsNumber = randomAsNumber;
      var _util = require_util();
      var _asU8a = require_asU8a2();
      var BN_53 = new _util.BN(9007199254740991);
      function randomAsNumber() {
        return (0, _util.hexToBn)((0, _asU8a.randomAsHex)(8)).and(BN_53).toNumber();
      }
    }
  });

  // node_modules/@polkadot/util-crypto/random/index.cjs
  var require_random = __commonJS({
    "node_modules/@polkadot/util-crypto/random/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "randomAsHex", {
        enumerable: true,
        get: function() {
          return _asU8a.randomAsHex;
        }
      });
      Object.defineProperty(exports, "randomAsNumber", {
        enumerable: true,
        get: function() {
          return _asNumber.randomAsNumber;
        }
      });
      Object.defineProperty(exports, "randomAsU8a", {
        enumerable: true,
        get: function() {
          return _asU8a.randomAsU8a;
        }
      });
      var _asNumber = require_asNumber();
      var _asU8a = require_asU8a2();
    }
  });

  // node_modules/@polkadot/util-crypto/ed25519/pair/fromSeed.cjs
  var require_fromSeed2 = __commonJS({
    "node_modules/@polkadot/util-crypto/ed25519/pair/fromSeed.cjs"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ed25519PairFromSeed = ed25519PairFromSeed;
      var _tweetnacl = _interopRequireDefault(require_nacl_fast());
      var _wasmCrypto = require_wasm_crypto();
      function ed25519PairFromSeed(seed, onlyJs) {
        if (!onlyJs && (0, _wasmCrypto.isReady)()) {
          const full = (0, _wasmCrypto.ed25519KeypairFromSeed)(seed);
          return {
            publicKey: full.slice(32),
            secretKey: full.slice(0, 64)
          };
        }
        return _tweetnacl.default.sign.keyPair.fromSeed(seed);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/ed25519/pair/fromRandom.cjs
  var require_fromRandom = __commonJS({
    "node_modules/@polkadot/util-crypto/ed25519/pair/fromRandom.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ed25519PairFromRandom = ed25519PairFromRandom;
      var _index = require_random();
      var _fromSeed = require_fromSeed2();
      function ed25519PairFromRandom() {
        return (0, _fromSeed.ed25519PairFromSeed)((0, _index.randomAsU8a)());
      }
    }
  });

  // node_modules/@polkadot/util-crypto/ed25519/pair/fromSecret.cjs
  var require_fromSecret = __commonJS({
    "node_modules/@polkadot/util-crypto/ed25519/pair/fromSecret.cjs"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ed25519PairFromSecret = ed25519PairFromSecret;
      var _tweetnacl = _interopRequireDefault(require_nacl_fast());
      function ed25519PairFromSecret(secret) {
        return _tweetnacl.default.sign.keyPair.fromSecretKey(secret);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/ed25519/pair/fromString.cjs
  var require_fromString = __commonJS({
    "node_modules/@polkadot/util-crypto/ed25519/pair/fromString.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ed25519PairFromString = ed25519PairFromString;
      var _util = require_util();
      var _asU8a = require_asU8a();
      var _fromSeed = require_fromSeed2();
      function ed25519PairFromString(value) {
        return (0, _fromSeed.ed25519PairFromSeed)((0, _asU8a.blake2AsU8a)((0, _util.stringToU8a)(value)));
      }
    }
  });

  // node_modules/@polkadot/util-crypto/ed25519/sign.cjs
  var require_sign = __commonJS({
    "node_modules/@polkadot/util-crypto/ed25519/sign.cjs"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ed25519Sign = ed25519Sign;
      var _tweetnacl = _interopRequireDefault(require_nacl_fast());
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      function ed25519Sign(message, _ref, onlyJs) {
        let {
          publicKey,
          secretKey
        } = _ref;
        (0, _util.assert)(secretKey, "Expected a valid secretKey");
        const messageU8a = (0, _util.u8aToU8a)(message);
        return !onlyJs && (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.ed25519Sign)(publicKey, secretKey.subarray(0, 32), messageU8a) : _tweetnacl.default.sign.detached(messageU8a, secretKey);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/ed25519/verify.cjs
  var require_verify = __commonJS({
    "node_modules/@polkadot/util-crypto/ed25519/verify.cjs"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ed25519Verify = ed25519Verify;
      var _tweetnacl = _interopRequireDefault(require_nacl_fast());
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      function ed25519Verify(message, signature, publicKey, onlyJs) {
        const messageU8a = (0, _util.u8aToU8a)(message);
        const publicKeyU8a = (0, _util.u8aToU8a)(publicKey);
        const signatureU8a = (0, _util.u8aToU8a)(signature);
        (0, _util.assert)(publicKeyU8a.length === 32, () => `Invalid publicKey, received ${publicKeyU8a.length}, expected 32`);
        (0, _util.assert)(signatureU8a.length === 64, () => `Invalid signature, received ${signatureU8a.length} bytes, expected 64`);
        return !onlyJs && (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.ed25519Verify)(signatureU8a, messageU8a, publicKeyU8a) : _tweetnacl.default.sign.detached.verify(messageU8a, signatureU8a, publicKeyU8a);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/ed25519/index.cjs
  var require_ed25519 = __commonJS({
    "node_modules/@polkadot/util-crypto/ed25519/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "convertPublicKeyToCurve25519", {
        enumerable: true,
        get: function() {
          return _convertKey.convertPublicKeyToCurve25519;
        }
      });
      Object.defineProperty(exports, "convertSecretKeyToCurve25519", {
        enumerable: true,
        get: function() {
          return _convertKey.convertSecretKeyToCurve25519;
        }
      });
      Object.defineProperty(exports, "ed25519DeriveHard", {
        enumerable: true,
        get: function() {
          return _deriveHard.ed25519DeriveHard;
        }
      });
      Object.defineProperty(exports, "ed25519PairFromRandom", {
        enumerable: true,
        get: function() {
          return _fromRandom.ed25519PairFromRandom;
        }
      });
      Object.defineProperty(exports, "ed25519PairFromSecret", {
        enumerable: true,
        get: function() {
          return _fromSecret.ed25519PairFromSecret;
        }
      });
      Object.defineProperty(exports, "ed25519PairFromSeed", {
        enumerable: true,
        get: function() {
          return _fromSeed.ed25519PairFromSeed;
        }
      });
      Object.defineProperty(exports, "ed25519PairFromString", {
        enumerable: true,
        get: function() {
          return _fromString.ed25519PairFromString;
        }
      });
      Object.defineProperty(exports, "ed25519Sign", {
        enumerable: true,
        get: function() {
          return _sign.ed25519Sign;
        }
      });
      Object.defineProperty(exports, "ed25519Verify", {
        enumerable: true,
        get: function() {
          return _verify.ed25519Verify;
        }
      });
      var _convertKey = require_convertKey();
      var _deriveHard = require_deriveHard2();
      var _fromRandom = require_fromRandom();
      var _fromSecret = require_fromSecret();
      var _fromSeed = require_fromSeed2();
      var _fromString = require_fromString();
      var _sign = require_sign();
      var _verify = require_verify();
    }
  });

  // node_modules/@polkadot/util-crypto/key/hdkdEd25519.cjs
  var require_hdkdEd25519 = __commonJS({
    "node_modules/@polkadot/util-crypto/key/hdkdEd25519.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.keyHdkdEd25519 = void 0;
      var _index = require_ed25519();
      var _hdkdDerive = require_hdkdDerive();
      var keyHdkdEd25519 = (0, _hdkdDerive.createSeedDeriveFn)(_index.ed25519PairFromSeed, _index.ed25519DeriveHard);
      exports.keyHdkdEd25519 = keyHdkdEd25519;
    }
  });

  // node_modules/@polkadot/util-crypto/sr25519/pair/fromU8a.cjs
  var require_fromU8a2 = __commonJS({
    "node_modules/@polkadot/util-crypto/sr25519/pair/fromU8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sr25519PairFromU8a = sr25519PairFromU8a;
      var _util = require_util();
      var SEC_LEN = 64;
      var PUB_LEN = 32;
      var TOT_LEN = SEC_LEN + PUB_LEN;
      function sr25519PairFromU8a(full) {
        const fullU8a = (0, _util.u8aToU8a)(full);
        (0, _util.assert)(fullU8a.length === TOT_LEN, () => `Expected keypair with ${TOT_LEN} bytes, found ${fullU8a.length}`);
        return {
          publicKey: fullU8a.slice(SEC_LEN, TOT_LEN),
          secretKey: fullU8a.slice(0, SEC_LEN)
        };
      }
    }
  });

  // node_modules/@polkadot/util-crypto/sr25519/pair/toU8a.cjs
  var require_toU8a9 = __commonJS({
    "node_modules/@polkadot/util-crypto/sr25519/pair/toU8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sr25519KeypairToU8a = sr25519KeypairToU8a;
      var _util = require_util();
      function sr25519KeypairToU8a(_ref) {
        let {
          publicKey,
          secretKey
        } = _ref;
        return (0, _util.u8aConcat)(secretKey, publicKey).slice();
      }
    }
  });

  // node_modules/@polkadot/util-crypto/sr25519/derive.cjs
  var require_derive = __commonJS({
    "node_modules/@polkadot/util-crypto/sr25519/derive.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.createDeriveFn = createDeriveFn;
      var _util = require_util();
      var _fromU8a = require_fromU8a2();
      var _toU8a = require_toU8a9();
      function createDeriveFn(derive) {
        return (keypair, chainCode) => {
          (0, _util.assert)((0, _util.isU8a)(chainCode) && chainCode.length === 32, "Invalid chainCode passed to derive");
          return (0, _fromU8a.sr25519PairFromU8a)(derive((0, _toU8a.sr25519KeypairToU8a)(keypair), chainCode));
        };
      }
    }
  });

  // node_modules/@polkadot/util-crypto/sr25519/deriveHard.cjs
  var require_deriveHard3 = __commonJS({
    "node_modules/@polkadot/util-crypto/sr25519/deriveHard.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sr25519DeriveHard = void 0;
      var _wasmCrypto = require_wasm_crypto();
      var _derive = require_derive();
      var sr25519DeriveHard = (0, _derive.createDeriveFn)(_wasmCrypto.sr25519DeriveKeypairHard);
      exports.sr25519DeriveHard = sr25519DeriveHard;
    }
  });

  // node_modules/@polkadot/util-crypto/sr25519/deriveSoft.cjs
  var require_deriveSoft = __commonJS({
    "node_modules/@polkadot/util-crypto/sr25519/deriveSoft.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sr25519DeriveSoft = void 0;
      var _wasmCrypto = require_wasm_crypto();
      var _derive = require_derive();
      var sr25519DeriveSoft = (0, _derive.createDeriveFn)(_wasmCrypto.sr25519DeriveKeypairSoft);
      exports.sr25519DeriveSoft = sr25519DeriveSoft;
    }
  });

  // node_modules/@polkadot/util-crypto/key/hdkdSr25519.cjs
  var require_hdkdSr25519 = __commonJS({
    "node_modules/@polkadot/util-crypto/key/hdkdSr25519.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.keyHdkdSr25519 = keyHdkdSr25519;
      var _deriveHard = require_deriveHard3();
      var _deriveSoft = require_deriveSoft();
      function keyHdkdSr25519(keypair, _ref) {
        let {
          chainCode,
          isSoft
        } = _ref;
        return isSoft ? (0, _deriveSoft.sr25519DeriveSoft)(keypair, chainCode) : (0, _deriveHard.sr25519DeriveHard)(keypair, chainCode);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/key/fromPath.cjs
  var require_fromPath = __commonJS({
    "node_modules/@polkadot/util-crypto/key/fromPath.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.keyFromPath = keyFromPath;
      var _hdkdEcdsa = require_hdkdEcdsa();
      var _hdkdEd = require_hdkdEd25519();
      var _hdkdSr = require_hdkdSr25519();
      var generators = {
        ecdsa: _hdkdEcdsa.keyHdkdEcdsa,
        ed25519: _hdkdEd.keyHdkdEd25519,
        ethereum: _hdkdEcdsa.keyHdkdEcdsa,
        sr25519: _hdkdSr.keyHdkdSr25519
      };
      function keyFromPath(pair, path, type) {
        const keyHdkd = generators[type];
        let result = pair;
        for (const junction of path) {
          result = keyHdkd(result, junction);
        }
        return result;
      }
    }
  });

  // node_modules/@polkadot/util-crypto/key/index.cjs
  var require_key = __commonJS({
    "node_modules/@polkadot/util-crypto/key/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "keyExtractPath", {
        enumerable: true,
        get: function() {
          return _extractPath.keyExtractPath;
        }
      });
      Object.defineProperty(exports, "keyExtractSuri", {
        enumerable: true,
        get: function() {
          return _extractSuri.keyExtractSuri;
        }
      });
      Object.defineProperty(exports, "keyFromPath", {
        enumerable: true,
        get: function() {
          return _fromPath.keyFromPath;
        }
      });
      Object.defineProperty(exports, "keyHdkdEcdsa", {
        enumerable: true,
        get: function() {
          return _hdkdEcdsa.keyHdkdEcdsa;
        }
      });
      Object.defineProperty(exports, "keyHdkdEd25519", {
        enumerable: true,
        get: function() {
          return _hdkdEd.keyHdkdEd25519;
        }
      });
      Object.defineProperty(exports, "keyHdkdSr25519", {
        enumerable: true,
        get: function() {
          return _hdkdSr.keyHdkdSr25519;
        }
      });
      var _extractPath = require_extractPath();
      var _extractSuri = require_extractSuri();
      var _fromPath = require_fromPath();
      var _hdkdEd = require_hdkdEd25519();
      var _hdkdSr = require_hdkdSr25519();
      var _hdkdEcdsa = require_hdkdEcdsa();
    }
  });

  // node_modules/@polkadot/util-crypto/sr25519/agreement.cjs
  var require_agreement = __commonJS({
    "node_modules/@polkadot/util-crypto/sr25519/agreement.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sr25519Agreement = sr25519Agreement;
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      function sr25519Agreement(secretKey, publicKey) {
        const secretKeyU8a = (0, _util.u8aToU8a)(secretKey);
        const publicKeyU8a = (0, _util.u8aToU8a)(publicKey);
        (0, _util.assert)(publicKeyU8a.length === 32, () => `Invalid publicKey, received ${publicKeyU8a.length} bytes, expected 32`);
        (0, _util.assert)(secretKeyU8a.length === 64, () => `Invalid secretKey, received ${secretKeyU8a.length} bytes, expected 64`);
        return (0, _wasmCrypto.sr25519Agree)(publicKeyU8a, secretKeyU8a);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/sr25519/derivePublic.cjs
  var require_derivePublic = __commonJS({
    "node_modules/@polkadot/util-crypto/sr25519/derivePublic.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sr25519DerivePublic = sr25519DerivePublic;
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      function sr25519DerivePublic(publicKey, chainCode) {
        const publicKeyU8a = (0, _util.u8aToU8a)(publicKey);
        (0, _util.assert)((0, _util.isU8a)(chainCode) && chainCode.length === 32, "Invalid chainCode passed to derive");
        (0, _util.assert)(publicKeyU8a.length === 32, () => `Invalid publicKey, received ${publicKeyU8a.length} bytes, expected 32`);
        return (0, _wasmCrypto.sr25519DerivePublicSoft)(publicKeyU8a, chainCode);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/sr25519/pair/fromSeed.cjs
  var require_fromSeed3 = __commonJS({
    "node_modules/@polkadot/util-crypto/sr25519/pair/fromSeed.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sr25519PairFromSeed = sr25519PairFromSeed;
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      var _fromU8a = require_fromU8a2();
      function sr25519PairFromSeed(seed) {
        const seedU8a = (0, _util.u8aToU8a)(seed);
        (0, _util.assert)(seedU8a.length === 32, () => `Expected a seed matching 32 bytes, found ${seedU8a.length}`);
        return (0, _fromU8a.sr25519PairFromU8a)((0, _wasmCrypto.sr25519KeypairFromSeed)(seedU8a));
      }
    }
  });

  // node_modules/@polkadot/util-crypto/sr25519/sign.cjs
  var require_sign2 = __commonJS({
    "node_modules/@polkadot/util-crypto/sr25519/sign.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sr25519Sign = sr25519Sign;
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      function sr25519Sign(message, _ref) {
        let {
          publicKey,
          secretKey
        } = _ref;
        (0, _util.assert)((publicKey === null || publicKey === void 0 ? void 0 : publicKey.length) === 32, "Expected a valid publicKey, 32-bytes");
        (0, _util.assert)((secretKey === null || secretKey === void 0 ? void 0 : secretKey.length) === 64, "Expected a valid secretKey, 64-bytes");
        return (0, _wasmCrypto.sr25519Sign)(publicKey, secretKey, (0, _util.u8aToU8a)(message));
      }
    }
  });

  // node_modules/@polkadot/util-crypto/sr25519/verify.cjs
  var require_verify2 = __commonJS({
    "node_modules/@polkadot/util-crypto/sr25519/verify.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sr25519Verify = sr25519Verify;
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      function sr25519Verify(message, signature, publicKey) {
        const publicKeyU8a = (0, _util.u8aToU8a)(publicKey);
        const signatureU8a = (0, _util.u8aToU8a)(signature);
        (0, _util.assert)(publicKeyU8a.length === 32, () => `Invalid publicKey, received ${publicKeyU8a.length} bytes, expected 32`);
        (0, _util.assert)(signatureU8a.length === 64, () => `Invalid signature, received ${signatureU8a.length} bytes, expected 64`);
        return (0, _wasmCrypto.sr25519Verify)(signatureU8a, (0, _util.u8aToU8a)(message), publicKeyU8a);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/sr25519/vrfSign.cjs
  var require_vrfSign = __commonJS({
    "node_modules/@polkadot/util-crypto/sr25519/vrfSign.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sr25519VrfSign = sr25519VrfSign;
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      var EMPTY_U8A = new Uint8Array();
      function sr25519VrfSign(message, _ref) {
        let {
          secretKey
        } = _ref;
        let context = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : EMPTY_U8A;
        let extra = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : EMPTY_U8A;
        (0, _util.assert)((secretKey === null || secretKey === void 0 ? void 0 : secretKey.length) === 64, "Invalid secretKey, expected 64-bytes");
        return (0, _wasmCrypto.vrfSign)(secretKey, (0, _util.u8aToU8a)(context), (0, _util.u8aToU8a)(message), (0, _util.u8aToU8a)(extra));
      }
    }
  });

  // node_modules/@polkadot/util-crypto/sr25519/vrfVerify.cjs
  var require_vrfVerify = __commonJS({
    "node_modules/@polkadot/util-crypto/sr25519/vrfVerify.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sr25519VrfVerify = sr25519VrfVerify;
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      var EMPTY_U8A = new Uint8Array();
      function sr25519VrfVerify(message, signOutput, publicKey) {
        let context = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : EMPTY_U8A;
        let extra = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : EMPTY_U8A;
        const publicKeyU8a = (0, _util.u8aToU8a)(publicKey);
        const proofU8a = (0, _util.u8aToU8a)(signOutput);
        (0, _util.assert)(publicKeyU8a.length === 32, "Invalid publicKey, expected 32-bytes");
        (0, _util.assert)(proofU8a.length === 96, "Invalid vrfSign output, expected 96 bytes");
        return (0, _wasmCrypto.vrfVerify)(publicKeyU8a, (0, _util.u8aToU8a)(context), (0, _util.u8aToU8a)(message), (0, _util.u8aToU8a)(extra), proofU8a);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/sr25519/index.cjs
  var require_sr25519 = __commonJS({
    "node_modules/@polkadot/util-crypto/sr25519/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "sr25519Agreement", {
        enumerable: true,
        get: function() {
          return _agreement.sr25519Agreement;
        }
      });
      Object.defineProperty(exports, "sr25519DeriveHard", {
        enumerable: true,
        get: function() {
          return _deriveHard.sr25519DeriveHard;
        }
      });
      Object.defineProperty(exports, "sr25519DerivePublic", {
        enumerable: true,
        get: function() {
          return _derivePublic.sr25519DerivePublic;
        }
      });
      Object.defineProperty(exports, "sr25519DeriveSoft", {
        enumerable: true,
        get: function() {
          return _deriveSoft.sr25519DeriveSoft;
        }
      });
      Object.defineProperty(exports, "sr25519PairFromSeed", {
        enumerable: true,
        get: function() {
          return _fromSeed.sr25519PairFromSeed;
        }
      });
      Object.defineProperty(exports, "sr25519Sign", {
        enumerable: true,
        get: function() {
          return _sign.sr25519Sign;
        }
      });
      Object.defineProperty(exports, "sr25519Verify", {
        enumerable: true,
        get: function() {
          return _verify.sr25519Verify;
        }
      });
      Object.defineProperty(exports, "sr25519VrfSign", {
        enumerable: true,
        get: function() {
          return _vrfSign.sr25519VrfSign;
        }
      });
      Object.defineProperty(exports, "sr25519VrfVerify", {
        enumerable: true,
        get: function() {
          return _vrfVerify.sr25519VrfVerify;
        }
      });
      var _agreement = require_agreement();
      var _deriveHard = require_deriveHard3();
      var _derivePublic = require_derivePublic();
      var _deriveSoft = require_deriveSoft();
      var _fromSeed = require_fromSeed3();
      var _sign = require_sign2();
      var _verify = require_verify2();
      var _vrfSign = require_vrfSign();
      var _vrfVerify = require_vrfVerify();
    }
  });

  // node_modules/@polkadot/util-crypto/address/encode.cjs
  var require_encode = __commonJS({
    "node_modules/@polkadot/util-crypto/address/encode.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.encodeAddress = encodeAddress;
      var _util = require_util();
      var _index = require_base58();
      var _decode = require_decode();
      var _defaults = require_defaults2();
      var _sshash = require_sshash();
      function encodeAddress(key) {
        let ss58Format = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.defaults.prefix;
        const u8a = (0, _decode.decodeAddress)(key);
        (0, _util.assert)(ss58Format >= 0 && ss58Format <= 16383 && ![46, 47].includes(ss58Format), "Out of range ss58Format specified");
        (0, _util.assert)(_defaults.defaults.allowedDecodedLengths.includes(u8a.length), () => `Expected a valid key to convert, with length ${_defaults.defaults.allowedDecodedLengths.join(", ")}`);
        const input = (0, _util.u8aConcat)(ss58Format < 64 ? [ss58Format] : [(ss58Format & 252) >> 2 | 64, ss58Format >> 8 | (ss58Format & 3) << 6], u8a);
        return (0, _index.base58Encode)((0, _util.u8aConcat)(input, (0, _sshash.sshash)(input).subarray(0, [32, 33].includes(u8a.length) ? 2 : 1)));
      }
    }
  });

  // node_modules/@polkadot/util-crypto/address/derive.cjs
  var require_derive2 = __commonJS({
    "node_modules/@polkadot/util-crypto/address/derive.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.deriveAddress = deriveAddress;
      var _util = require_util();
      var _index = require_key();
      var _index2 = require_sr25519();
      var _decode = require_decode();
      var _encode = require_encode();
      function filterHard(_ref) {
        let {
          isHard
        } = _ref;
        return isHard;
      }
      function deriveAddress(who, suri, ss58Format) {
        const {
          path
        } = (0, _index.keyExtractPath)(suri);
        (0, _util.assert)(path.length && !path.every(filterHard), "Expected suri to contain a combination of non-hard paths");
        let publicKey = (0, _decode.decodeAddress)(who);
        for (const {
          chainCode
        } of path) {
          publicKey = (0, _index2.sr25519DerivePublic)(publicKey, chainCode);
        }
        return (0, _encode.encodeAddress)(publicKey, ss58Format);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/address/encodeDerived.cjs
  var require_encodeDerived = __commonJS({
    "node_modules/@polkadot/util-crypto/address/encodeDerived.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.encodeDerivedAddress = encodeDerivedAddress;
      var _decode = require_decode();
      var _encode = require_encode();
      var _keyDerived = require_keyDerived();
      function encodeDerivedAddress(who, index, ss58Format) {
        return (0, _encode.encodeAddress)((0, _keyDerived.createKeyDerived)((0, _decode.decodeAddress)(who), index), ss58Format);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/address/encodeMulti.cjs
  var require_encodeMulti = __commonJS({
    "node_modules/@polkadot/util-crypto/address/encodeMulti.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.encodeMultiAddress = encodeMultiAddress;
      var _encode = require_encode();
      var _keyMulti = require_keyMulti();
      function encodeMultiAddress(who, threshold, ss58Format) {
        return (0, _encode.encodeAddress)((0, _keyMulti.createKeyMulti)(who, threshold), ss58Format);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/blake2/index.cjs
  var require_blake22 = __commonJS({
    "node_modules/@polkadot/util-crypto/blake2/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "blake2AsHex", {
        enumerable: true,
        get: function() {
          return _asU8a.blake2AsHex;
        }
      });
      Object.defineProperty(exports, "blake2AsU8a", {
        enumerable: true,
        get: function() {
          return _asU8a.blake2AsU8a;
        }
      });
      var _asU8a = require_asU8a();
    }
  });

  // node_modules/@noble/hashes/sha3.js
  var require_sha3 = __commonJS({
    "node_modules/@noble/hashes/sha3.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.shake256 = exports.shake128 = exports.keccak_512 = exports.keccak_384 = exports.keccak_256 = exports.keccak_224 = exports.sha3_512 = exports.sha3_384 = exports.sha3_256 = exports.sha3_224 = exports.Keccak = exports.keccakP = void 0;
      var u64 = __importStar(require_u64());
      var utils_js_1 = require_utils();
      var [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [[], [], []];
      var _0n = BigInt(0);
      var _1n = BigInt(1);
      var _2n = BigInt(2);
      var _7n = BigInt(7);
      var _256n = BigInt(256);
      var _0x71n = BigInt(113);
      for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
        [x, y] = [y, (2 * x + 3 * y) % 5];
        SHA3_PI.push(2 * (5 * y + x));
        SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
        let t = _0n;
        for (let j = 0; j < 7; j++) {
          R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
          if (R & _2n)
            t ^= _1n << (_1n << BigInt(j)) - _1n;
        }
        _SHA3_IOTA.push(t);
      }
      var [SHA3_IOTA_H, SHA3_IOTA_L] = u64.split(_SHA3_IOTA, true);
      var rotlH = (h, l, s) => s > 32 ? u64.rotlBH(h, l, s) : u64.rotlSH(h, l, s);
      var rotlL = (h, l, s) => s > 32 ? u64.rotlBL(h, l, s) : u64.rotlSL(h, l, s);
      function keccakP(s, rounds = 24) {
        const B = new Uint32Array(5 * 2);
        for (let round = 24 - rounds; round < 24; round++) {
          for (let x = 0; x < 10; x++)
            B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
          for (let x = 0; x < 10; x += 2) {
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for (let y = 0; y < 50; y += 10) {
              s[x + y] ^= Th;
              s[x + y + 1] ^= Tl;
            }
          }
          let curH = s[2];
          let curL = s[3];
          for (let t = 0; t < 24; t++) {
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
          }
          for (let y = 0; y < 50; y += 10) {
            for (let x = 0; x < 10; x++)
              B[x] = s[y + x];
            for (let x = 0; x < 10; x++)
              s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
          }
          s[0] ^= SHA3_IOTA_H[round];
          s[1] ^= SHA3_IOTA_L[round];
        }
        B.fill(0);
      }
      exports.keccakP = keccakP;
      var Keccak = class extends utils_js_1.Hash {
        constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
          super();
          this.blockLen = blockLen;
          this.suffix = suffix;
          this.outputLen = outputLen;
          this.enableXOF = enableXOF;
          this.rounds = rounds;
          this.pos = 0;
          this.posOut = 0;
          this.finished = false;
          this.destroyed = false;
          (0, utils_js_1.assertNumber)(outputLen);
          if (0 >= this.blockLen || this.blockLen >= 200)
            throw new Error("Sha3 supports only keccak-f1600 function");
          this.state = new Uint8Array(200);
          this.state32 = (0, utils_js_1.u32)(this.state);
        }
        keccak() {
          keccakP(this.state32, this.rounds);
          this.posOut = 0;
          this.pos = 0;
        }
        update(data) {
          if (this.destroyed)
            throw new Error("instance is destroyed");
          if (this.finished)
            throw new Error("digest() was already called");
          const { blockLen, state } = this;
          data = (0, utils_js_1.toBytes)(data);
          const len = data.length;
          for (let pos = 0; pos < len; ) {
            const take = Math.min(blockLen - this.pos, len - pos);
            for (let i = 0; i < take; i++)
              state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen)
              this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished)
            return;
          this.finished = true;
          const { state, suffix, pos, blockLen } = this;
          state[pos] ^= suffix;
          if ((suffix & 128) !== 0 && pos === blockLen - 1)
            this.keccak();
          state[blockLen - 1] ^= 128;
          this.keccak();
        }
        writeInto(out) {
          if (this.destroyed)
            throw new Error("instance is destroyed");
          if (!(out instanceof Uint8Array))
            throw new Error("Keccak: invalid output buffer");
          this.finish();
          for (let pos = 0, len = out.length; pos < len; ) {
            if (this.posOut >= this.blockLen)
              this.keccak();
            const take = Math.min(this.blockLen - this.posOut, len - pos);
            out.set(this.state.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
          }
          return out;
        }
        xofInto(out) {
          if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
          return this.writeInto(out);
        }
        xof(bytes) {
          (0, utils_js_1.assertNumber)(bytes);
          return this.xofInto(new Uint8Array(bytes));
        }
        digestInto(out) {
          if (out.length < this.outputLen)
            throw new Error("Keccak: invalid output buffer");
          if (this.finished)
            throw new Error("digest() was already called");
          this.finish();
          this.writeInto(out);
          this.destroy();
          return out;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          this.destroyed = true;
          this.state.fill(0);
        }
        _cloneInto(to) {
          const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
          to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
          to.state32.set(this.state32);
          to.pos = this.pos;
          to.posOut = this.posOut;
          to.finished = this.finished;
          to.rounds = rounds;
          to.suffix = suffix;
          to.outputLen = outputLen;
          to.enableXOF = enableXOF;
          to.destroyed = this.destroyed;
          return to;
        }
      };
      exports.Keccak = Keccak;
      var gen = (suffix, blockLen, outputLen) => (0, utils_js_1.wrapConstructor)(() => new Keccak(blockLen, suffix, outputLen));
      exports.sha3_224 = gen(6, 144, 224 / 8);
      exports.sha3_256 = gen(6, 136, 256 / 8);
      exports.sha3_384 = gen(6, 104, 384 / 8);
      exports.sha3_512 = gen(6, 72, 512 / 8);
      exports.keccak_224 = gen(1, 144, 224 / 8);
      exports.keccak_256 = gen(1, 136, 256 / 8);
      exports.keccak_384 = gen(1, 104, 384 / 8);
      exports.keccak_512 = gen(1, 72, 512 / 8);
      var genShake = (suffix, blockLen, outputLen) => (0, utils_js_1.wrapConstructorWithOpts)((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen !== void 0 ? opts.dkLen : outputLen, true));
      exports.shake128 = genShake(31, 168, 128 / 8);
      exports.shake256 = genShake(31, 136, 256 / 8);
    }
  });

  // node_modules/@polkadot/util-crypto/keccak/asU8a.cjs
  var require_asU8a3 = __commonJS({
    "node_modules/@polkadot/util-crypto/keccak/asU8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.keccakAsU8a = exports.keccakAsHex = exports.keccak512AsU8a = exports.keccak256AsU8a = void 0;
      var _sha = require_sha3();
      var _wasmCrypto = require_wasm_crypto();
      var _helpers = require_helpers3();
      var keccakAsU8a = (0, _helpers.createDualHasher)({
        256: _wasmCrypto.keccak256,
        512: _wasmCrypto.keccak512
      }, {
        256: _sha.keccak_256,
        512: _sha.keccak_512
      });
      exports.keccakAsU8a = keccakAsU8a;
      var keccak256AsU8a = (0, _helpers.createBitHasher)(256, keccakAsU8a);
      exports.keccak256AsU8a = keccak256AsU8a;
      var keccak512AsU8a = (0, _helpers.createBitHasher)(512, keccakAsU8a);
      exports.keccak512AsU8a = keccak512AsU8a;
      var keccakAsHex = (0, _helpers.createAsHex)(keccakAsU8a);
      exports.keccakAsHex = keccakAsHex;
    }
  });

  // node_modules/@polkadot/util-crypto/keccak/index.cjs
  var require_keccak = __commonJS({
    "node_modules/@polkadot/util-crypto/keccak/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "keccak256AsU8a", {
        enumerable: true,
        get: function() {
          return _asU8a.keccak256AsU8a;
        }
      });
      Object.defineProperty(exports, "keccak512AsU8a", {
        enumerable: true,
        get: function() {
          return _asU8a.keccak512AsU8a;
        }
      });
      Object.defineProperty(exports, "keccakAsHex", {
        enumerable: true,
        get: function() {
          return _asU8a.keccakAsHex;
        }
      });
      Object.defineProperty(exports, "keccakAsU8a", {
        enumerable: true,
        get: function() {
          return _asU8a.keccakAsU8a;
        }
      });
      var _asU8a = require_asU8a3();
    }
  });

  // node_modules/@polkadot/util-crypto/secp256k1/hasher.cjs
  var require_hasher = __commonJS({
    "node_modules/@polkadot/util-crypto/secp256k1/hasher.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hasher = hasher;
      var _index = require_blake22();
      var _index2 = require_keccak();
      function hasher(hashType, data, onlyJs) {
        return hashType === "keccak" ? (0, _index2.keccakAsU8a)(data, void 0, onlyJs) : (0, _index.blake2AsU8a)(data, void 0, void 0, onlyJs);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/address/evmToAddress.cjs
  var require_evmToAddress = __commonJS({
    "node_modules/@polkadot/util-crypto/address/evmToAddress.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.evmToAddress = evmToAddress;
      var _util = require_util();
      var _hasher = require_hasher();
      var _encode = require_encode();
      function evmToAddress(evmAddress, ss58Format) {
        let hashType = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "blake2";
        const message = (0, _util.u8aConcat)("evm:", evmAddress);
        (0, _util.assert)(message.length === 24, () => `Converting ${evmAddress}: Invalid evm address length`);
        return (0, _encode.encodeAddress)((0, _hasher.hasher)(hashType, message), ss58Format);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/address/eq.cjs
  var require_eq2 = __commonJS({
    "node_modules/@polkadot/util-crypto/address/eq.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.addressEq = addressEq;
      var _util = require_util();
      var _decode = require_decode();
      function addressEq(a, b) {
        return (0, _util.u8aEq)((0, _decode.decodeAddress)(a), (0, _decode.decodeAddress)(b));
      }
    }
  });

  // node_modules/@polkadot/util-crypto/address/validate.cjs
  var require_validate = __commonJS({
    "node_modules/@polkadot/util-crypto/address/validate.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.validateAddress = validateAddress;
      var _decode = require_decode();
      function validateAddress(encoded, ignoreChecksum, ss58Format) {
        return !!(0, _decode.decodeAddress)(encoded, ignoreChecksum, ss58Format);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/address/is.cjs
  var require_is2 = __commonJS({
    "node_modules/@polkadot/util-crypto/address/is.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isAddress = isAddress;
      var _validate = require_validate();
      function isAddress(address, ignoreChecksum, ss58Format) {
        try {
          return (0, _validate.validateAddress)(address, ignoreChecksum, ss58Format);
        } catch (error) {
          return false;
        }
      }
    }
  });

  // node_modules/@polkadot/util-crypto/address/setSS58Format.cjs
  var require_setSS58Format = __commonJS({
    "node_modules/@polkadot/util-crypto/address/setSS58Format.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.setSS58Format = setSS58Format;
      var _util = require_util();
      var _defaults = require_defaults2();
      var l = (0, _util.logger)("setSS58Format");
      function setSS58Format(prefix) {
        l.warn("Global setting of the ss58Format is deprecated and not recommended. Set format on the keyring (if used) or as pat of the address encode function");
        _defaults.defaults.prefix = prefix;
      }
    }
  });

  // node_modules/@polkadot/util-crypto/address/sort.cjs
  var require_sort = __commonJS({
    "node_modules/@polkadot/util-crypto/address/sort.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sortAddresses = sortAddresses;
      var _util = require_util();
      var _encode = require_encode();
      var _util2 = require_util2();
      function sortAddresses(addresses, ss58Format) {
        const u8aToAddress = (u8a) => (0, _encode.encodeAddress)(u8a, ss58Format);
        return (0, _util.u8aSorted)(addresses.map(_util2.addressToU8a)).map(u8aToAddress);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/address/index.cjs
  var require_address = __commonJS({
    "node_modules/@polkadot/util-crypto/address/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "addressEq", {
        enumerable: true,
        get: function() {
          return _eq.addressEq;
        }
      });
      Object.defineProperty(exports, "addressToEvm", {
        enumerable: true,
        get: function() {
          return _addressToEvm.addressToEvm;
        }
      });
      Object.defineProperty(exports, "checkAddress", {
        enumerable: true,
        get: function() {
          return _check.checkAddress;
        }
      });
      Object.defineProperty(exports, "checkAddressChecksum", {
        enumerable: true,
        get: function() {
          return _checksum.checkAddressChecksum;
        }
      });
      Object.defineProperty(exports, "createKeyDerived", {
        enumerable: true,
        get: function() {
          return _keyDerived.createKeyDerived;
        }
      });
      Object.defineProperty(exports, "createKeyMulti", {
        enumerable: true,
        get: function() {
          return _keyMulti.createKeyMulti;
        }
      });
      Object.defineProperty(exports, "decodeAddress", {
        enumerable: true,
        get: function() {
          return _decode.decodeAddress;
        }
      });
      Object.defineProperty(exports, "deriveAddress", {
        enumerable: true,
        get: function() {
          return _derive.deriveAddress;
        }
      });
      Object.defineProperty(exports, "encodeAddress", {
        enumerable: true,
        get: function() {
          return _encode.encodeAddress;
        }
      });
      Object.defineProperty(exports, "encodeDerivedAddress", {
        enumerable: true,
        get: function() {
          return _encodeDerived.encodeDerivedAddress;
        }
      });
      Object.defineProperty(exports, "encodeMultiAddress", {
        enumerable: true,
        get: function() {
          return _encodeMulti.encodeMultiAddress;
        }
      });
      Object.defineProperty(exports, "evmToAddress", {
        enumerable: true,
        get: function() {
          return _evmToAddress.evmToAddress;
        }
      });
      Object.defineProperty(exports, "isAddress", {
        enumerable: true,
        get: function() {
          return _is.isAddress;
        }
      });
      Object.defineProperty(exports, "setSS58Format", {
        enumerable: true,
        get: function() {
          return _setSS58Format.setSS58Format;
        }
      });
      Object.defineProperty(exports, "sortAddresses", {
        enumerable: true,
        get: function() {
          return _sort.sortAddresses;
        }
      });
      Object.defineProperty(exports, "validateAddress", {
        enumerable: true,
        get: function() {
          return _validate.validateAddress;
        }
      });
      var _addressToEvm = require_addressToEvm();
      var _check = require_check();
      var _checksum = require_checksum();
      var _keyMulti = require_keyMulti();
      var _keyDerived = require_keyDerived();
      var _decode = require_decode();
      var _derive = require_derive2();
      var _encode = require_encode();
      var _encodeDerived = require_encodeDerived();
      var _encodeMulti = require_encodeMulti();
      var _evmToAddress = require_evmToAddress();
      var _eq = require_eq2();
      var _is = require_is2();
      var _setSS58Format = require_setSS58Format();
      var _sort = require_sort();
      var _validate = require_validate();
    }
  });

  // node_modules/@polkadot/util-crypto/base32/bs32.cjs
  var require_bs32 = __commonJS({
    "node_modules/@polkadot/util-crypto/base32/bs32.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isBase32 = exports.base32Validate = exports.base32Encode = exports.base32Decode = void 0;
      var _base = require_base();
      var _helpers = require_helpers2();
      var chars = "abcdefghijklmnopqrstuvwxyz234567";
      var config = {
        chars,
        coder: _base.utils.chain(_base.utils.radix2(5), _base.utils.alphabet(chars), {
          decode: (input) => input.split(""),
          encode: (input) => input.join("")
        }),
        ipfs: "b",
        type: "base32"
      };
      var base32Validate = (0, _helpers.createValidate)(config);
      exports.base32Validate = base32Validate;
      var isBase32 = (0, _helpers.createIs)(base32Validate);
      exports.isBase32 = isBase32;
      var base32Decode = (0, _helpers.createDecode)(config, base32Validate);
      exports.base32Decode = base32Decode;
      var base32Encode = (0, _helpers.createEncode)(config);
      exports.base32Encode = base32Encode;
    }
  });

  // node_modules/@polkadot/util-crypto/base32/index.cjs
  var require_base32 = __commonJS({
    "node_modules/@polkadot/util-crypto/base32/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "base32Decode", {
        enumerable: true,
        get: function() {
          return _bs.base32Decode;
        }
      });
      Object.defineProperty(exports, "base32Encode", {
        enumerable: true,
        get: function() {
          return _bs.base32Encode;
        }
      });
      Object.defineProperty(exports, "base32Validate", {
        enumerable: true,
        get: function() {
          return _bs.base32Validate;
        }
      });
      Object.defineProperty(exports, "isBase32", {
        enumerable: true,
        get: function() {
          return _bs.isBase32;
        }
      });
      var _bs = require_bs32();
    }
  });

  // node_modules/@polkadot/util-crypto/base64/bs64.cjs
  var require_bs64 = __commonJS({
    "node_modules/@polkadot/util-crypto/base64/bs64.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isBase64 = exports.base64Validate = exports.base64Encode = exports.base64Decode = void 0;
      var _base = require_base();
      var _helpers = require_helpers2();
      var config = {
        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        coder: _base.base64,
        type: "base64"
      };
      var base64Validate = (0, _helpers.createValidate)(config);
      exports.base64Validate = base64Validate;
      var isBase64 = (0, _helpers.createIs)(base64Validate);
      exports.isBase64 = isBase64;
      var base64Decode = (0, _helpers.createDecode)(config, base64Validate);
      exports.base64Decode = base64Decode;
      var base64Encode = (0, _helpers.createEncode)(config);
      exports.base64Encode = base64Encode;
    }
  });

  // node_modules/@polkadot/util-crypto/base64/pad.cjs
  var require_pad = __commonJS({
    "node_modules/@polkadot/util-crypto/base64/pad.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.base64Pad = base64Pad;
      function base64Pad(value) {
        return value.padEnd(value.length + value.length % 4, "=");
      }
    }
  });

  // node_modules/@polkadot/util-crypto/base64/trim.cjs
  var require_trim = __commonJS({
    "node_modules/@polkadot/util-crypto/base64/trim.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.base64Trim = base64Trim;
      function base64Trim(value) {
        while (value.length && value[value.length - 1] === "=") {
          value = value.slice(0, -1);
        }
        return value;
      }
    }
  });

  // node_modules/@polkadot/util-crypto/base64/index.cjs
  var require_base642 = __commonJS({
    "node_modules/@polkadot/util-crypto/base64/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "base64Decode", {
        enumerable: true,
        get: function() {
          return _bs.base64Decode;
        }
      });
      Object.defineProperty(exports, "base64Encode", {
        enumerable: true,
        get: function() {
          return _bs.base64Encode;
        }
      });
      Object.defineProperty(exports, "base64Pad", {
        enumerable: true,
        get: function() {
          return _pad.base64Pad;
        }
      });
      Object.defineProperty(exports, "base64Trim", {
        enumerable: true,
        get: function() {
          return _trim.base64Trim;
        }
      });
      Object.defineProperty(exports, "base64Validate", {
        enumerable: true,
        get: function() {
          return _bs.base64Validate;
        }
      });
      Object.defineProperty(exports, "isBase64", {
        enumerable: true,
        get: function() {
          return _bs.isBase64;
        }
      });
      var _bs = require_bs64();
      var _pad = require_pad();
      var _trim = require_trim();
    }
  });

  // node_modules/@polkadot/util-crypto/crypto.cjs
  var require_crypto2 = __commonJS({
    "node_modules/@polkadot/util-crypto/crypto.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.cryptoIsReady = void 0;
      exports.cryptoWaitReady = cryptoWaitReady;
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      var cryptoIsReady = _wasmCrypto.isReady;
      exports.cryptoIsReady = cryptoIsReady;
      function cryptoWaitReady() {
        return (0, _wasmCrypto.waitReady)().then(() => {
          (0, _util.assert)((0, _wasmCrypto.isReady)(), "Unable to initialize @polkadot/util-crypto");
          return true;
        }).catch(() => false);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/secp256k1/compress.cjs
  var require_compress = __commonJS({
    "node_modules/@polkadot/util-crypto/secp256k1/compress.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.secp256k1Compress = secp256k1Compress;
      var _secp256k = require_lib();
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      function secp256k1Compress(publicKey, onlyJs) {
        if (publicKey.length === 33) {
          return publicKey;
        }
        (0, _util.assert)(publicKey.length === 65, "Invalid publicKey provided");
        return !_util.hasBigInt || !onlyJs && (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.secp256k1Compress)(publicKey) : _secp256k.Point.fromHex(publicKey).toRawBytes(true);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/secp256k1/expand.cjs
  var require_expand = __commonJS({
    "node_modules/@polkadot/util-crypto/secp256k1/expand.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.secp256k1Expand = secp256k1Expand;
      var _secp256k = require_lib();
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      var _bn = require_bn5();
      function secp256k1Expand(publicKey, onlyJs) {
        if (publicKey.length === 65) {
          return publicKey.subarray(1);
        }
        (0, _util.assert)(publicKey.length === 33, "Invalid publicKey provided");
        if (!_util.hasBigInt || !onlyJs && (0, _wasmCrypto.isReady)()) {
          return (0, _wasmCrypto.secp256k1Expand)(publicKey).subarray(1);
        }
        const {
          x,
          y
        } = _secp256k.Point.fromHex(publicKey);
        return (0, _util.u8aConcat)((0, _util.bnToU8a)(x, _bn.BN_BE_256_OPTS), (0, _util.bnToU8a)(y, _bn.BN_BE_256_OPTS));
      }
    }
  });

  // node_modules/@polkadot/util-crypto/secp256k1/recover.cjs
  var require_recover = __commonJS({
    "node_modules/@polkadot/util-crypto/secp256k1/recover.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.secp256k1Recover = secp256k1Recover;
      var _secp256k = require_lib();
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      var _compress = require_compress();
      var _expand = require_expand();
      function secp256k1Recover(msgHash, signature, recovery) {
        let hashType = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "blake2";
        let onlyJs = arguments.length > 4 ? arguments[4] : void 0;
        const sig = (0, _util.u8aToU8a)(signature).subarray(0, 64);
        const msg = (0, _util.u8aToU8a)(msgHash);
        const publicKey = !_util.hasBigInt || !onlyJs && (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.secp256k1Recover)(msg, sig, recovery) : (0, _secp256k.recoverPublicKey)(msg, _secp256k.Signature.fromCompact(sig).toRawBytes(), recovery);
        (0, _util.assert)(publicKey, "Unable to recover publicKey from signature");
        return hashType === "keccak" ? (0, _expand.secp256k1Expand)(publicKey, onlyJs) : (0, _compress.secp256k1Compress)(publicKey, onlyJs);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/secp256k1/sign.cjs
  var require_sign3 = __commonJS({
    "node_modules/@polkadot/util-crypto/secp256k1/sign.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.secp256k1Sign = secp256k1Sign;
      var _secp256k = require_lib();
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      var _bn = require_bn5();
      var _hasher = require_hasher();
      function secp256k1Sign(message, _ref) {
        let {
          secretKey
        } = _ref;
        let hashType = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "blake2";
        let onlyJs = arguments.length > 3 ? arguments[3] : void 0;
        (0, _util.assert)((secretKey === null || secretKey === void 0 ? void 0 : secretKey.length) === 32, "Expected valid secp256k1 secretKey, 32-bytes");
        const data = (0, _hasher.hasher)(hashType, message, onlyJs);
        if (!_util.hasBigInt || !onlyJs && (0, _wasmCrypto.isReady)()) {
          return (0, _wasmCrypto.secp256k1Sign)(data, secretKey);
        }
        const [sigBytes, recoveryParam] = (0, _secp256k.signSync)(data, secretKey, {
          canonical: true,
          recovered: true
        });
        const {
          r,
          s
        } = _secp256k.Signature.fromHex(sigBytes);
        return (0, _util.u8aConcat)((0, _util.bnToU8a)(r, _bn.BN_BE_256_OPTS), (0, _util.bnToU8a)(s, _bn.BN_BE_256_OPTS), new Uint8Array([recoveryParam || 0]));
      }
    }
  });

  // node_modules/@polkadot/util-crypto/secp256k1/tweakAdd.cjs
  var require_tweakAdd = __commonJS({
    "node_modules/@polkadot/util-crypto/secp256k1/tweakAdd.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.secp256k1PrivateKeyTweakAdd = secp256k1PrivateKeyTweakAdd;
      var _util = require_util();
      var _xBigint = require_x_bigint();
      var _bn = require_bn5();
      var N = "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141".replace(/ /g, "");
      var N_BI = (0, _xBigint.BigInt)(`0x${N}`);
      var N_BN = new _util.BN(N, "hex");
      function addBi(seckey, tweak) {
        let res = (0, _util.u8aToBigInt)(tweak, _bn.BN_BE_OPTS);
        (0, _util.assert)(res < N_BI, "Tweak parameter is out of range");
        res += (0, _util.u8aToBigInt)(seckey, _bn.BN_BE_OPTS);
        if (res >= N_BI) {
          res -= N_BI;
        }
        (0, _util.assert)(res !== _util._0n, "Invalid resulting private key");
        return (0, _util.nToU8a)(res, _bn.BN_BE_256_OPTS);
      }
      function addBn(seckey, tweak) {
        const res = new _util.BN(tweak);
        (0, _util.assert)(res.cmp(N_BN) < 0, "Tweak parameter is out of range");
        res.iadd(new _util.BN(seckey));
        if (res.cmp(N_BN) >= 0) {
          res.isub(N_BN);
        }
        (0, _util.assert)(!res.isZero(), "Invalid resulting private key");
        return (0, _util.bnToU8a)(res, _bn.BN_BE_256_OPTS);
      }
      function secp256k1PrivateKeyTweakAdd(seckey, tweak, onlyBn) {
        (0, _util.assert)((0, _util.isU8a)(seckey) && seckey.length === 32, "Expected seckey to be an Uint8Array with length 32");
        (0, _util.assert)((0, _util.isU8a)(tweak) && tweak.length === 32, "Expected tweak to be an Uint8Array with length 32");
        return !_util.hasBigInt || onlyBn ? addBn(seckey, tweak) : addBi(seckey, tweak);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/secp256k1/verify.cjs
  var require_verify3 = __commonJS({
    "node_modules/@polkadot/util-crypto/secp256k1/verify.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.secp256k1Verify = secp256k1Verify;
      var _util = require_util();
      var _hasher = require_hasher();
      var _recover = require_recover();
      function secp256k1Verify(msgHash, signature, address) {
        let hashType = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "blake2";
        let onlyJs = arguments.length > 4 ? arguments[4] : void 0;
        const sig = (0, _util.u8aToU8a)(signature);
        (0, _util.assert)(sig.length === 65, `Expected signature with 65 bytes, ${sig.length} found instead`);
        const publicKey = (0, _recover.secp256k1Recover)((0, _hasher.hasher)(hashType, msgHash), sig, sig[64], hashType, onlyJs);
        const signerAddr = (0, _hasher.hasher)(hashType, publicKey, onlyJs);
        const inputAddr = (0, _util.u8aToU8a)(address);
        return (0, _util.u8aEq)(publicKey, inputAddr) || (hashType === "keccak" ? (0, _util.u8aEq)(signerAddr.slice(-20), inputAddr.slice(-20)) : (0, _util.u8aEq)(signerAddr, inputAddr));
      }
    }
  });

  // node_modules/@polkadot/util-crypto/secp256k1/index.cjs
  var require_secp256k1 = __commonJS({
    "node_modules/@polkadot/util-crypto/secp256k1/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "secp256k1Compress", {
        enumerable: true,
        get: function() {
          return _compress.secp256k1Compress;
        }
      });
      Object.defineProperty(exports, "secp256k1Expand", {
        enumerable: true,
        get: function() {
          return _expand.secp256k1Expand;
        }
      });
      Object.defineProperty(exports, "secp256k1PairFromSeed", {
        enumerable: true,
        get: function() {
          return _fromSeed.secp256k1PairFromSeed;
        }
      });
      Object.defineProperty(exports, "secp256k1PrivateKeyTweakAdd", {
        enumerable: true,
        get: function() {
          return _tweakAdd.secp256k1PrivateKeyTweakAdd;
        }
      });
      Object.defineProperty(exports, "secp256k1Recover", {
        enumerable: true,
        get: function() {
          return _recover.secp256k1Recover;
        }
      });
      Object.defineProperty(exports, "secp256k1Sign", {
        enumerable: true,
        get: function() {
          return _sign.secp256k1Sign;
        }
      });
      Object.defineProperty(exports, "secp256k1Verify", {
        enumerable: true,
        get: function() {
          return _verify.secp256k1Verify;
        }
      });
      var _compress = require_compress();
      var _expand = require_expand();
      var _fromSeed = require_fromSeed();
      var _recover = require_recover();
      var _sign = require_sign3();
      var _tweakAdd = require_tweakAdd();
      var _verify = require_verify3();
    }
  });

  // node_modules/@polkadot/util-crypto/ethereum/encode.cjs
  var require_encode2 = __commonJS({
    "node_modules/@polkadot/util-crypto/ethereum/encode.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ethereumEncode = ethereumEncode;
      var _util = require_util();
      var _index = require_keccak();
      var _index2 = require_secp256k1();
      function getH160(u8a) {
        if ([33, 65].includes(u8a.length)) {
          u8a = (0, _index.keccakAsU8a)((0, _index2.secp256k1Expand)(u8a));
        }
        return u8a.slice(-20);
      }
      function ethereumEncode(addressOrPublic) {
        if (!addressOrPublic) {
          return "0x";
        }
        const u8aAddress = (0, _util.u8aToU8a)(addressOrPublic);
        (0, _util.assert)([20, 32, 33, 65].includes(u8aAddress.length), "Invalid address or publicKey passed");
        const address = (0, _util.u8aToHex)(getH160(u8aAddress), -1, false);
        const hash = (0, _util.u8aToHex)((0, _index.keccakAsU8a)(address), -1, false);
        let result = "";
        for (let i = 0; i < 40; i++) {
          result = `${result}${parseInt(hash[i], 16) > 7 ? address[i].toUpperCase() : address[i]}`;
        }
        return `0x${result}`;
      }
    }
  });

  // node_modules/@polkadot/util-crypto/ethereum/isChecksum.cjs
  var require_isChecksum = __commonJS({
    "node_modules/@polkadot/util-crypto/ethereum/isChecksum.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isEthereumChecksum = isEthereumChecksum;
      var _util = require_util();
      var _index = require_keccak();
      function isInvalidChar(char, byte) {
        return char !== (byte > 7 ? char.toUpperCase() : char.toLowerCase());
      }
      function isEthereumChecksum(_address) {
        const address = _address.replace("0x", "");
        const hash = (0, _util.u8aToHex)((0, _index.keccakAsU8a)(address.toLowerCase()), -1, false);
        for (let i = 0; i < 40; i++) {
          if (isInvalidChar(address[i], parseInt(hash[i], 16))) {
            return false;
          }
        }
        return true;
      }
    }
  });

  // node_modules/@polkadot/util-crypto/ethereum/isAddress.cjs
  var require_isAddress = __commonJS({
    "node_modules/@polkadot/util-crypto/ethereum/isAddress.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isEthereumAddress = isEthereumAddress;
      var _util = require_util();
      var _isChecksum = require_isChecksum();
      function isEthereumAddress(address) {
        if (!address || address.length !== 42 || !(0, _util.isHex)(address)) {
          return false;
        } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
          return true;
        }
        return (0, _isChecksum.isEthereumChecksum)(address);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/ethereum/index.cjs
  var require_ethereum = __commonJS({
    "node_modules/@polkadot/util-crypto/ethereum/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "ethereumEncode", {
        enumerable: true,
        get: function() {
          return _encode.ethereumEncode;
        }
      });
      Object.defineProperty(exports, "isEthereumAddress", {
        enumerable: true,
        get: function() {
          return _isAddress.isEthereumAddress;
        }
      });
      Object.defineProperty(exports, "isEthereumChecksum", {
        enumerable: true,
        get: function() {
          return _isChecksum.isEthereumChecksum;
        }
      });
      var _encode = require_encode2();
      var _isAddress = require_isAddress();
      var _isChecksum = require_isChecksum();
    }
  });

  // node_modules/@polkadot/util-crypto/hd/validatePath.cjs
  var require_validatePath = __commonJS({
    "node_modules/@polkadot/util-crypto/hd/validatePath.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HARDENED = void 0;
      exports.hdValidatePath = hdValidatePath;
      var HARDENED = 2147483648;
      exports.HARDENED = HARDENED;
      function hdValidatePath(path) {
        if (!path.startsWith("m/")) {
          return false;
        }
        const parts = path.split("/").slice(1);
        for (const p of parts) {
          const n = /^\d+'?$/.test(p) ? parseInt(p.replace(/'$/, ""), 10) : Number.NaN;
          if (isNaN(n) || n >= HARDENED || n < 0) {
            return false;
          }
        }
        return true;
      }
    }
  });

  // node_modules/@polkadot/util-crypto/hd/ethereum/index.cjs
  var require_ethereum2 = __commonJS({
    "node_modules/@polkadot/util-crypto/hd/ethereum/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hdEthereum = hdEthereum;
      var _util = require_util();
      var _bn = require_bn5();
      var _index = require_hmac2();
      var _index2 = require_secp256k1();
      var _validatePath = require_validatePath();
      var MASTER_SECRET = (0, _util.stringToU8a)("Bitcoin seed");
      function createCoded(secretKey, chainCode) {
        return {
          chainCode,
          publicKey: (0, _index2.secp256k1PairFromSeed)(secretKey).publicKey,
          secretKey
        };
      }
      function deriveChild(hd, index) {
        const indexBuffer = (0, _util.bnToU8a)(index, _bn.BN_BE_32_OPTS);
        const data = index >= _validatePath.HARDENED ? (0, _util.u8aConcat)(new Uint8Array(1), hd.secretKey, indexBuffer) : (0, _util.u8aConcat)(hd.publicKey, indexBuffer);
        try {
          const I = (0, _index.hmacShaAsU8a)(hd.chainCode, data, 512);
          return createCoded((0, _index2.secp256k1PrivateKeyTweakAdd)(hd.secretKey, I.slice(0, 32)), I.slice(32));
        } catch (err) {
          return deriveChild(hd, index + 1);
        }
      }
      function hdEthereum(seed) {
        let path = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        const I = (0, _index.hmacShaAsU8a)(MASTER_SECRET, seed, 512);
        let hd = createCoded(I.slice(0, 32), I.slice(32));
        if (!path || path === "m" || path === "M" || path === "m'" || path === "M'") {
          return hd;
        }
        (0, _util.assert)((0, _validatePath.hdValidatePath)(path), "Invalid derivation path");
        const parts = path.split("/").slice(1);
        for (const p of parts) {
          hd = deriveChild(hd, parseInt(p, 10) + (p.length > 1 && p.endsWith("'") ? _validatePath.HARDENED : 0));
        }
        return hd;
      }
    }
  });

  // node_modules/@noble/hashes/pbkdf2.js
  var require_pbkdf2 = __commonJS({
    "node_modules/@noble/hashes/pbkdf2.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.pbkdf2Async = exports.pbkdf2 = void 0;
      var hmac_js_1 = require_hmac();
      var utils_js_1 = require_utils();
      function pbkdf2Init(hash, _password, _salt, _opts) {
        (0, utils_js_1.assertHash)(hash);
        const opts = (0, utils_js_1.checkOpts)({ dkLen: 32, asyncTick: 10 }, _opts);
        const { c, dkLen, asyncTick } = opts;
        (0, utils_js_1.assertNumber)(c);
        (0, utils_js_1.assertNumber)(dkLen);
        (0, utils_js_1.assertNumber)(asyncTick);
        if (c < 1)
          throw new Error("PBKDF2: iterations (c) should be >= 1");
        const password = (0, utils_js_1.toBytes)(_password);
        const salt = (0, utils_js_1.toBytes)(_salt);
        const DK = new Uint8Array(dkLen);
        const PRF = hmac_js_1.hmac.create(hash, password);
        const PRFSalt = PRF._cloneInto().update(salt);
        return { c, dkLen, asyncTick, DK, PRF, PRFSalt };
      }
      function pbkdf2Output(PRF, PRFSalt, DK, prfW, u) {
        PRF.destroy();
        PRFSalt.destroy();
        if (prfW)
          prfW.destroy();
        u.fill(0);
        return DK;
      }
      function pbkdf2(hash, password, salt, opts) {
        const { c, dkLen, DK, PRF, PRFSalt } = pbkdf2Init(hash, password, salt, opts);
        let prfW;
        const arr = new Uint8Array(4);
        const view = (0, utils_js_1.createView)(arr);
        const u = new Uint8Array(PRF.outputLen);
        for (let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen) {
          const Ti = DK.subarray(pos, pos + PRF.outputLen);
          view.setInt32(0, ti, false);
          (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
          Ti.set(u.subarray(0, Ti.length));
          for (let ui = 1; ui < c; ui++) {
            PRF._cloneInto(prfW).update(u).digestInto(u);
            for (let i = 0; i < Ti.length; i++)
              Ti[i] ^= u[i];
          }
        }
        return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
      }
      exports.pbkdf2 = pbkdf2;
      async function pbkdf2Async(hash, password, salt, opts) {
        const { c, dkLen, asyncTick, DK, PRF, PRFSalt } = pbkdf2Init(hash, password, salt, opts);
        let prfW;
        const arr = new Uint8Array(4);
        const view = (0, utils_js_1.createView)(arr);
        const u = new Uint8Array(PRF.outputLen);
        for (let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen) {
          const Ti = DK.subarray(pos, pos + PRF.outputLen);
          view.setInt32(0, ti, false);
          (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
          Ti.set(u.subarray(0, Ti.length));
          await (0, utils_js_1.asyncLoop)(c - 1, asyncTick, (i) => {
            PRF._cloneInto(prfW).update(u).digestInto(u);
            for (let i2 = 0; i2 < Ti.length; i2++)
              Ti[i2] ^= u[i2];
          });
        }
        return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
      }
      exports.pbkdf2Async = pbkdf2Async;
    }
  });

  // node_modules/@polkadot/util-crypto/pbkdf2/encode.cjs
  var require_encode3 = __commonJS({
    "node_modules/@polkadot/util-crypto/pbkdf2/encode.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.pbkdf2Encode = pbkdf2Encode;
      var _pbkdf = require_pbkdf2();
      var _sha = require_sha512();
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      var _asU8a = require_asU8a2();
      function pbkdf2Encode(passphrase) {
        let salt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (0, _asU8a.randomAsU8a)();
        let rounds = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 2048;
        let onlyJs = arguments.length > 3 ? arguments[3] : void 0;
        const u8aPass = (0, _util.u8aToU8a)(passphrase);
        const u8aSalt = (0, _util.u8aToU8a)(salt);
        return {
          password: !_util.hasBigInt || !onlyJs && (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.pbkdf2)(u8aPass, u8aSalt, rounds) : (0, _pbkdf.pbkdf2)(_sha.sha512, u8aPass, u8aSalt, {
            c: rounds,
            dkLen: 64
          }),
          rounds,
          salt
        };
      }
    }
  });

  // node_modules/@polkadot/util-crypto/pbkdf2/index.cjs
  var require_pbkdf22 = __commonJS({
    "node_modules/@polkadot/util-crypto/pbkdf2/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "pbkdf2Encode", {
        enumerable: true,
        get: function() {
          return _encode.pbkdf2Encode;
        }
      });
      var _encode = require_encode3();
    }
  });

  // node_modules/@polkadot/util-crypto/sha/asU8a.cjs
  var require_asU8a4 = __commonJS({
    "node_modules/@polkadot/util-crypto/sha/asU8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.shaAsU8a = exports.sha512AsU8a = exports.sha256AsU8a = void 0;
      var _sha = require_sha256();
      var _sha2 = require_sha512();
      var _wasmCrypto = require_wasm_crypto();
      var _helpers = require_helpers3();
      var shaAsU8a = (0, _helpers.createDualHasher)({
        256: _wasmCrypto.sha256,
        512: _wasmCrypto.sha512
      }, {
        256: _sha.sha256,
        512: _sha2.sha512
      });
      exports.shaAsU8a = shaAsU8a;
      var sha256AsU8a = (0, _helpers.createBitHasher)(256, shaAsU8a);
      exports.sha256AsU8a = sha256AsU8a;
      var sha512AsU8a = (0, _helpers.createBitHasher)(512, shaAsU8a);
      exports.sha512AsU8a = sha512AsU8a;
    }
  });

  // node_modules/@polkadot/util-crypto/sha/index.cjs
  var require_sha = __commonJS({
    "node_modules/@polkadot/util-crypto/sha/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "sha256AsU8a", {
        enumerable: true,
        get: function() {
          return _asU8a.sha256AsU8a;
        }
      });
      Object.defineProperty(exports, "sha512AsU8a", {
        enumerable: true,
        get: function() {
          return _asU8a.sha512AsU8a;
        }
      });
      Object.defineProperty(exports, "shaAsU8a", {
        enumerable: true,
        get: function() {
          return _asU8a.shaAsU8a;
        }
      });
      var _asU8a = require_asU8a4();
    }
  });

  // node_modules/@polkadot/util-crypto/mnemonic/bip39-en.cjs
  var require_bip39_en = __commonJS({
    "node_modules/@polkadot/util-crypto/mnemonic/bip39-en.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = "abandon|ability|able|about|above|absent|absorb|abstract|absurd|abuse|access|accident|account|accuse|achieve|acid|acoustic|acquire|across|act|action|actor|actress|actual|adapt|add|addict|address|adjust|admit|adult|advance|advice|aerobic|affair|afford|afraid|again|age|agent|agree|ahead|aim|air|airport|aisle|alarm|album|alcohol|alert|alien|all|alley|allow|almost|alone|alpha|already|also|alter|always|amateur|amazing|among|amount|amused|analyst|anchor|ancient|anger|angle|angry|animal|ankle|announce|annual|another|answer|antenna|antique|anxiety|any|apart|apology|appear|apple|approve|april|arch|arctic|area|arena|argue|arm|armed|armor|army|around|arrange|arrest|arrive|arrow|art|artefact|artist|artwork|ask|aspect|assault|asset|assist|assume|asthma|athlete|atom|attack|attend|attitude|attract|auction|audit|august|aunt|author|auto|autumn|average|avocado|avoid|awake|aware|away|awesome|awful|awkward|axis|baby|bachelor|bacon|badge|bag|balance|balcony|ball|bamboo|banana|banner|bar|barely|bargain|barrel|base|basic|basket|battle|beach|bean|beauty|because|become|beef|before|begin|behave|behind|believe|below|belt|bench|benefit|best|betray|better|between|beyond|bicycle|bid|bike|bind|biology|bird|birth|bitter|black|blade|blame|blanket|blast|bleak|bless|blind|blood|blossom|blouse|blue|blur|blush|board|boat|body|boil|bomb|bone|bonus|book|boost|border|boring|borrow|boss|bottom|bounce|box|boy|bracket|brain|brand|brass|brave|bread|breeze|brick|bridge|brief|bright|bring|brisk|broccoli|broken|bronze|broom|brother|brown|brush|bubble|buddy|budget|buffalo|build|bulb|bulk|bullet|bundle|bunker|burden|burger|burst|bus|business|busy|butter|buyer|buzz|cabbage|cabin|cable|cactus|cage|cake|call|calm|camera|camp|can|canal|cancel|candy|cannon|canoe|canvas|canyon|capable|capital|captain|car|carbon|card|cargo|carpet|carry|cart|case|cash|casino|castle|casual|cat|catalog|catch|category|cattle|caught|cause|caution|cave|ceiling|celery|cement|census|century|cereal|certain|chair|chalk|champion|change|chaos|chapter|charge|chase|chat|cheap|check|cheese|chef|cherry|chest|chicken|chief|child|chimney|choice|choose|chronic|chuckle|chunk|churn|cigar|cinnamon|circle|citizen|city|civil|claim|clap|clarify|claw|clay|clean|clerk|clever|click|client|cliff|climb|clinic|clip|clock|clog|close|cloth|cloud|clown|club|clump|cluster|clutch|coach|coast|coconut|code|coffee|coil|coin|collect|color|column|combine|come|comfort|comic|common|company|concert|conduct|confirm|congress|connect|consider|control|convince|cook|cool|copper|copy|coral|core|corn|correct|cost|cotton|couch|country|couple|course|cousin|cover|coyote|crack|cradle|craft|cram|crane|crash|crater|crawl|crazy|cream|credit|creek|crew|cricket|crime|crisp|critic|crop|cross|crouch|crowd|crucial|cruel|cruise|crumble|crunch|crush|cry|crystal|cube|culture|cup|cupboard|curious|current|curtain|curve|cushion|custom|cute|cycle|dad|damage|damp|dance|danger|daring|dash|daughter|dawn|day|deal|debate|debris|decade|december|decide|decline|decorate|decrease|deer|defense|define|defy|degree|delay|deliver|demand|demise|denial|dentist|deny|depart|depend|deposit|depth|deputy|derive|describe|desert|design|desk|despair|destroy|detail|detect|develop|device|devote|diagram|dial|diamond|diary|dice|diesel|diet|differ|digital|dignity|dilemma|dinner|dinosaur|direct|dirt|disagree|discover|disease|dish|dismiss|disorder|display|distance|divert|divide|divorce|dizzy|doctor|document|dog|doll|dolphin|domain|donate|donkey|donor|door|dose|double|dove|draft|dragon|drama|drastic|draw|dream|dress|drift|drill|drink|drip|drive|drop|drum|dry|duck|dumb|dune|during|dust|dutch|duty|dwarf|dynamic|eager|eagle|early|earn|earth|easily|east|easy|echo|ecology|economy|edge|edit|educate|effort|egg|eight|either|elbow|elder|electric|elegant|element|elephant|elevator|elite|else|embark|embody|embrace|emerge|emotion|employ|empower|empty|enable|enact|end|endless|endorse|enemy|energy|enforce|engage|engine|enhance|enjoy|enlist|enough|enrich|enroll|ensure|enter|entire|entry|envelope|episode|equal|equip|era|erase|erode|erosion|error|erupt|escape|essay|essence|estate|eternal|ethics|evidence|evil|evoke|evolve|exact|example|excess|exchange|excite|exclude|excuse|execute|exercise|exhaust|exhibit|exile|exist|exit|exotic|expand|expect|expire|explain|expose|express|extend|extra|eye|eyebrow|fabric|face|faculty|fade|faint|faith|fall|false|fame|family|famous|fan|fancy|fantasy|farm|fashion|fat|fatal|father|fatigue|fault|favorite|feature|february|federal|fee|feed|feel|female|fence|festival|fetch|fever|few|fiber|fiction|field|figure|file|film|filter|final|find|fine|finger|finish|fire|firm|first|fiscal|fish|fit|fitness|fix|flag|flame|flash|flat|flavor|flee|flight|flip|float|flock|floor|flower|fluid|flush|fly|foam|focus|fog|foil|fold|follow|food|foot|force|forest|forget|fork|fortune|forum|forward|fossil|foster|found|fox|fragile|frame|frequent|fresh|friend|fringe|frog|front|frost|frown|frozen|fruit|fuel|fun|funny|furnace|fury|future|gadget|gain|galaxy|gallery|game|gap|garage|garbage|garden|garlic|garment|gas|gasp|gate|gather|gauge|gaze|general|genius|genre|gentle|genuine|gesture|ghost|giant|gift|giggle|ginger|giraffe|girl|give|glad|glance|glare|glass|glide|glimpse|globe|gloom|glory|glove|glow|glue|goat|goddess|gold|good|goose|gorilla|gospel|gossip|govern|gown|grab|grace|grain|grant|grape|grass|gravity|great|green|grid|grief|grit|grocery|group|grow|grunt|guard|guess|guide|guilt|guitar|gun|gym|habit|hair|half|hammer|hamster|hand|happy|harbor|hard|harsh|harvest|hat|have|hawk|hazard|head|health|heart|heavy|hedgehog|height|hello|helmet|help|hen|hero|hidden|high|hill|hint|hip|hire|history|hobby|hockey|hold|hole|holiday|hollow|home|honey|hood|hope|horn|horror|horse|hospital|host|hotel|hour|hover|hub|huge|human|humble|humor|hundred|hungry|hunt|hurdle|hurry|hurt|husband|hybrid|ice|icon|idea|identify|idle|ignore|ill|illegal|illness|image|imitate|immense|immune|impact|impose|improve|impulse|inch|include|income|increase|index|indicate|indoor|industry|infant|inflict|inform|inhale|inherit|initial|inject|injury|inmate|inner|innocent|input|inquiry|insane|insect|inside|inspire|install|intact|interest|into|invest|invite|involve|iron|island|isolate|issue|item|ivory|jacket|jaguar|jar|jazz|jealous|jeans|jelly|jewel|job|join|joke|journey|joy|judge|juice|jump|jungle|junior|junk|just|kangaroo|keen|keep|ketchup|key|kick|kid|kidney|kind|kingdom|kiss|kit|kitchen|kite|kitten|kiwi|knee|knife|knock|know|lab|label|labor|ladder|lady|lake|lamp|language|laptop|large|later|latin|laugh|laundry|lava|law|lawn|lawsuit|layer|lazy|leader|leaf|learn|leave|lecture|left|leg|legal|legend|leisure|lemon|lend|length|lens|leopard|lesson|letter|level|liar|liberty|library|license|life|lift|light|like|limb|limit|link|lion|liquid|list|little|live|lizard|load|loan|lobster|local|lock|logic|lonely|long|loop|lottery|loud|lounge|love|loyal|lucky|luggage|lumber|lunar|lunch|luxury|lyrics|machine|mad|magic|magnet|maid|mail|main|major|make|mammal|man|manage|mandate|mango|mansion|manual|maple|marble|march|margin|marine|market|marriage|mask|mass|master|match|material|math|matrix|matter|maximum|maze|meadow|mean|measure|meat|mechanic|medal|media|melody|melt|member|memory|mention|menu|mercy|merge|merit|merry|mesh|message|metal|method|middle|midnight|milk|million|mimic|mind|minimum|minor|minute|miracle|mirror|misery|miss|mistake|mix|mixed|mixture|mobile|model|modify|mom|moment|monitor|monkey|monster|month|moon|moral|more|morning|mosquito|mother|motion|motor|mountain|mouse|move|movie|much|muffin|mule|multiply|muscle|museum|mushroom|music|must|mutual|myself|mystery|myth|naive|name|napkin|narrow|nasty|nation|nature|near|neck|need|negative|neglect|neither|nephew|nerve|nest|net|network|neutral|never|news|next|nice|night|noble|noise|nominee|noodle|normal|north|nose|notable|note|nothing|notice|novel|now|nuclear|number|nurse|nut|oak|obey|object|oblige|obscure|observe|obtain|obvious|occur|ocean|october|odor|off|offer|office|often|oil|okay|old|olive|olympic|omit|once|one|onion|online|only|open|opera|opinion|oppose|option|orange|orbit|orchard|order|ordinary|organ|orient|original|orphan|ostrich|other|outdoor|outer|output|outside|oval|oven|over|own|owner|oxygen|oyster|ozone|pact|paddle|page|pair|palace|palm|panda|panel|panic|panther|paper|parade|parent|park|parrot|party|pass|patch|path|patient|patrol|pattern|pause|pave|payment|peace|peanut|pear|peasant|pelican|pen|penalty|pencil|people|pepper|perfect|permit|person|pet|phone|photo|phrase|physical|piano|picnic|picture|piece|pig|pigeon|pill|pilot|pink|pioneer|pipe|pistol|pitch|pizza|place|planet|plastic|plate|play|please|pledge|pluck|plug|plunge|poem|poet|point|polar|pole|police|pond|pony|pool|popular|portion|position|possible|post|potato|pottery|poverty|powder|power|practice|praise|predict|prefer|prepare|present|pretty|prevent|price|pride|primary|print|priority|prison|private|prize|problem|process|produce|profit|program|project|promote|proof|property|prosper|protect|proud|provide|public|pudding|pull|pulp|pulse|pumpkin|punch|pupil|puppy|purchase|purity|purpose|purse|push|put|puzzle|pyramid|quality|quantum|quarter|question|quick|quit|quiz|quote|rabbit|raccoon|race|rack|radar|radio|rail|rain|raise|rally|ramp|ranch|random|range|rapid|rare|rate|rather|raven|raw|razor|ready|real|reason|rebel|rebuild|recall|receive|recipe|record|recycle|reduce|reflect|reform|refuse|region|regret|regular|reject|relax|release|relief|rely|remain|remember|remind|remove|render|renew|rent|reopen|repair|repeat|replace|report|require|rescue|resemble|resist|resource|response|result|retire|retreat|return|reunion|reveal|review|reward|rhythm|rib|ribbon|rice|rich|ride|ridge|rifle|right|rigid|ring|riot|ripple|risk|ritual|rival|river|road|roast|robot|robust|rocket|romance|roof|rookie|room|rose|rotate|rough|round|route|royal|rubber|rude|rug|rule|run|runway|rural|sad|saddle|sadness|safe|sail|salad|salmon|salon|salt|salute|same|sample|sand|satisfy|satoshi|sauce|sausage|save|say|scale|scan|scare|scatter|scene|scheme|school|science|scissors|scorpion|scout|scrap|screen|script|scrub|sea|search|season|seat|second|secret|section|security|seed|seek|segment|select|sell|seminar|senior|sense|sentence|series|service|session|settle|setup|seven|shadow|shaft|shallow|share|shed|shell|sheriff|shield|shift|shine|ship|shiver|shock|shoe|shoot|shop|short|shoulder|shove|shrimp|shrug|shuffle|shy|sibling|sick|side|siege|sight|sign|silent|silk|silly|silver|similar|simple|since|sing|siren|sister|situate|six|size|skate|sketch|ski|skill|skin|skirt|skull|slab|slam|sleep|slender|slice|slide|slight|slim|slogan|slot|slow|slush|small|smart|smile|smoke|smooth|snack|snake|snap|sniff|snow|soap|soccer|social|sock|soda|soft|solar|soldier|solid|solution|solve|someone|song|soon|sorry|sort|soul|sound|soup|source|south|space|spare|spatial|spawn|speak|special|speed|spell|spend|sphere|spice|spider|spike|spin|spirit|split|spoil|sponsor|spoon|sport|spot|spray|spread|spring|spy|square|squeeze|squirrel|stable|stadium|staff|stage|stairs|stamp|stand|start|state|stay|steak|steel|stem|step|stereo|stick|still|sting|stock|stomach|stone|stool|story|stove|strategy|street|strike|strong|struggle|student|stuff|stumble|style|subject|submit|subway|success|such|sudden|suffer|sugar|suggest|suit|summer|sun|sunny|sunset|super|supply|supreme|sure|surface|surge|surprise|surround|survey|suspect|sustain|swallow|swamp|swap|swarm|swear|sweet|swift|swim|swing|switch|sword|symbol|symptom|syrup|system|table|tackle|tag|tail|talent|talk|tank|tape|target|task|taste|tattoo|taxi|teach|team|tell|ten|tenant|tennis|tent|term|test|text|thank|that|theme|then|theory|there|they|thing|this|thought|three|thrive|throw|thumb|thunder|ticket|tide|tiger|tilt|timber|time|tiny|tip|tired|tissue|title|toast|tobacco|today|toddler|toe|together|toilet|token|tomato|tomorrow|tone|tongue|tonight|tool|tooth|top|topic|topple|torch|tornado|tortoise|toss|total|tourist|toward|tower|town|toy|track|trade|traffic|tragic|train|transfer|trap|trash|travel|tray|treat|tree|trend|trial|tribe|trick|trigger|trim|trip|trophy|trouble|truck|true|truly|trumpet|trust|truth|try|tube|tuition|tumble|tuna|tunnel|turkey|turn|turtle|twelve|twenty|twice|twin|twist|two|type|typical|ugly|umbrella|unable|unaware|uncle|uncover|under|undo|unfair|unfold|unhappy|uniform|unique|unit|universe|unknown|unlock|until|unusual|unveil|update|upgrade|uphold|upon|upper|upset|urban|urge|usage|use|used|useful|useless|usual|utility|vacant|vacuum|vague|valid|valley|valve|van|vanish|vapor|various|vast|vault|vehicle|velvet|vendor|venture|venue|verb|verify|version|very|vessel|veteran|viable|vibrant|vicious|victory|video|view|village|vintage|violin|virtual|virus|visa|visit|visual|vital|vivid|vocal|voice|void|volcano|volume|vote|voyage|wage|wagon|wait|walk|wall|walnut|want|warfare|warm|warrior|wash|wasp|waste|water|wave|way|wealth|weapon|wear|weasel|weather|web|wedding|weekend|weird|welcome|west|wet|whale|what|wheat|wheel|when|where|whip|whisper|wide|width|wife|wild|will|win|window|wine|wing|wink|winner|winter|wire|wisdom|wise|wish|witness|wolf|woman|wonder|wood|wool|word|work|world|worry|worth|wrap|wreck|wrestle|wrist|write|wrong|yard|year|yellow|you|young|youth|zebra|zero|zone|zoo".split("|");
      exports.default = _default;
    }
  });

  // node_modules/@polkadot/util-crypto/mnemonic/bip39.cjs
  var require_bip39 = __commonJS({
    "node_modules/@polkadot/util-crypto/mnemonic/bip39.cjs"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.entropyToMnemonic = entropyToMnemonic;
      exports.generateMnemonic = generateMnemonic;
      exports.mnemonicToEntropy = mnemonicToEntropy;
      exports.mnemonicToSeedSync = mnemonicToSeedSync;
      exports.validateMnemonic = validateMnemonic;
      var _util = require_util();
      var _index = require_pbkdf22();
      var _index2 = require_random();
      var _index3 = require_sha();
      var _bip39En = _interopRequireDefault(require_bip39_en());
      var INVALID_MNEMONIC = "Invalid mnemonic";
      var INVALID_ENTROPY = "Invalid entropy";
      var INVALID_CHECKSUM = "Invalid mnemonic checksum";
      function normalize(str) {
        return (str || "").normalize("NFKD");
      }
      function binaryToByte(bin) {
        return parseInt(bin, 2);
      }
      function bytesToBinary(bytes) {
        return bytes.map((x) => x.toString(2).padStart(8, "0")).join("");
      }
      function deriveChecksumBits(entropyBuffer) {
        return bytesToBinary(Array.from((0, _index3.sha256AsU8a)(entropyBuffer))).slice(0, entropyBuffer.length * 8 / 32);
      }
      function mnemonicToSeedSync(mnemonic, password) {
        return (0, _index.pbkdf2Encode)((0, _util.stringToU8a)(normalize(mnemonic)), (0, _util.stringToU8a)(`mnemonic${normalize(password)}`)).password;
      }
      function mnemonicToEntropy(mnemonic) {
        var _entropyBits$match;
        const words = normalize(mnemonic).split(" ");
        (0, _util.assert)(words.length % 3 === 0, INVALID_MNEMONIC);
        const bits = words.map((word) => {
          const index = _bip39En.default.indexOf(word);
          (0, _util.assert)(index !== -1, INVALID_MNEMONIC);
          return index.toString(2).padStart(11, "0");
        }).join("");
        const dividerIndex = Math.floor(bits.length / 33) * 32;
        const entropyBits = bits.slice(0, dividerIndex);
        const checksumBits = bits.slice(dividerIndex);
        const entropyBytes = (_entropyBits$match = entropyBits.match(/(.{1,8})/g)) === null || _entropyBits$match === void 0 ? void 0 : _entropyBits$match.map(binaryToByte);
        (0, _util.assert)(entropyBytes && entropyBytes.length % 4 === 0 && entropyBytes.length >= 16 && entropyBytes.length <= 32, INVALID_ENTROPY);
        const entropy = (0, _util.u8aToU8a)(entropyBytes);
        const newChecksum = deriveChecksumBits(entropy);
        (0, _util.assert)(newChecksum === checksumBits, INVALID_CHECKSUM);
        return entropy;
      }
      function entropyToMnemonic(entropy) {
        (0, _util.assert)(entropy.length % 4 === 0 && entropy.length >= 16 && entropy.length <= 32, INVALID_ENTROPY);
        const entropyBits = bytesToBinary(Array.from(entropy));
        const checksumBits = deriveChecksumBits(entropy);
        return (entropyBits + checksumBits).match(/(.{1,11})/g).map((binary) => _bip39En.default[binaryToByte(binary)]).join(" ");
      }
      function generateMnemonic(strength) {
        strength = strength || 128;
        (0, _util.assert)(strength % 32 === 0, INVALID_ENTROPY);
        return entropyToMnemonic((0, _index2.randomAsU8a)(strength / 8));
      }
      function validateMnemonic(mnemonic) {
        try {
          mnemonicToEntropy(mnemonic);
        } catch (e) {
          return false;
        }
        return true;
      }
    }
  });

  // node_modules/@polkadot/util-crypto/mnemonic/generate.cjs
  var require_generate = __commonJS({
    "node_modules/@polkadot/util-crypto/mnemonic/generate.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.mnemonicGenerate = mnemonicGenerate;
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      var _bip = require_bip39();
      var STRENGTH_MAP = {
        12: 16 * 8,
        15: 20 * 8,
        18: 24 * 8,
        21: 28 * 8,
        24: 32 * 8
      };
      function mnemonicGenerate() {
        let numWords = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 12;
        let onlyJs = arguments.length > 1 ? arguments[1] : void 0;
        return !_util.hasBigInt || !onlyJs && (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.bip39Generate)(numWords) : (0, _bip.generateMnemonic)(STRENGTH_MAP[numWords]);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/mnemonic/toEntropy.cjs
  var require_toEntropy = __commonJS({
    "node_modules/@polkadot/util-crypto/mnemonic/toEntropy.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.mnemonicToEntropy = mnemonicToEntropy;
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      var _bip = require_bip39();
      function mnemonicToEntropy(mnemonic, onlyJs) {
        return !_util.hasBigInt || !onlyJs && (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.bip39ToEntropy)(mnemonic) : (0, _bip.mnemonicToEntropy)(mnemonic);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/mnemonic/validate.cjs
  var require_validate2 = __commonJS({
    "node_modules/@polkadot/util-crypto/mnemonic/validate.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.mnemonicValidate = mnemonicValidate;
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      var _bip = require_bip39();
      function mnemonicValidate(mnemonic, onlyJs) {
        return !_util.hasBigInt || !onlyJs && (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.bip39Validate)(mnemonic) : (0, _bip.validateMnemonic)(mnemonic);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/mnemonic/toLegacySeed.cjs
  var require_toLegacySeed = __commonJS({
    "node_modules/@polkadot/util-crypto/mnemonic/toLegacySeed.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.mnemonicToLegacySeed = mnemonicToLegacySeed;
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      var _bip = require_bip39();
      var _validate = require_validate2();
      function mnemonicToLegacySeed(mnemonic) {
        let password = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        let onlyJs = arguments.length > 2 ? arguments[2] : void 0;
        let byteLength = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 32;
        (0, _util.assert)((0, _validate.mnemonicValidate)(mnemonic), "Invalid bip39 mnemonic specified");
        (0, _util.assert)([32, 64].includes(byteLength), () => `Invalid seed length ${byteLength}, expected 32 or 64`);
        return byteLength === 32 ? !_util.hasBigInt || !onlyJs && (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.bip39ToSeed)(mnemonic, password) : (0, _bip.mnemonicToSeedSync)(mnemonic, password).subarray(0, 32) : (0, _bip.mnemonicToSeedSync)(mnemonic, password);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/mnemonic/toMiniSecret.cjs
  var require_toMiniSecret = __commonJS({
    "node_modules/@polkadot/util-crypto/mnemonic/toMiniSecret.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.mnemonicToMiniSecret = mnemonicToMiniSecret;
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      var _index = require_pbkdf22();
      var _toEntropy = require_toEntropy();
      var _validate = require_validate2();
      function mnemonicToMiniSecret(mnemonic) {
        let password = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        let onlyJs = arguments.length > 2 ? arguments[2] : void 0;
        (0, _util.assert)((0, _validate.mnemonicValidate)(mnemonic), "Invalid bip39 mnemonic specified");
        if (!onlyJs && (0, _wasmCrypto.isReady)()) {
          return (0, _wasmCrypto.bip39ToMiniSecret)(mnemonic, password);
        }
        const entropy = (0, _toEntropy.mnemonicToEntropy)(mnemonic);
        const salt = (0, _util.stringToU8a)(`mnemonic${password}`);
        return (0, _index.pbkdf2Encode)(entropy, salt).password.slice(0, 32);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/mnemonic/index.cjs
  var require_mnemonic = __commonJS({
    "node_modules/@polkadot/util-crypto/mnemonic/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "mnemonicGenerate", {
        enumerable: true,
        get: function() {
          return _generate.mnemonicGenerate;
        }
      });
      Object.defineProperty(exports, "mnemonicToEntropy", {
        enumerable: true,
        get: function() {
          return _toEntropy.mnemonicToEntropy;
        }
      });
      Object.defineProperty(exports, "mnemonicToLegacySeed", {
        enumerable: true,
        get: function() {
          return _toLegacySeed.mnemonicToLegacySeed;
        }
      });
      Object.defineProperty(exports, "mnemonicToMiniSecret", {
        enumerable: true,
        get: function() {
          return _toMiniSecret.mnemonicToMiniSecret;
        }
      });
      Object.defineProperty(exports, "mnemonicValidate", {
        enumerable: true,
        get: function() {
          return _validate.mnemonicValidate;
        }
      });
      var _generate = require_generate();
      var _toEntropy = require_toEntropy();
      var _toLegacySeed = require_toLegacySeed();
      var _toMiniSecret = require_toMiniSecret();
      var _validate = require_validate2();
    }
  });

  // node_modules/@polkadot/util-crypto/hd/ledger/derivePrivate.cjs
  var require_derivePrivate = __commonJS({
    "node_modules/@polkadot/util-crypto/hd/ledger/derivePrivate.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ledgerDerivePrivate = ledgerDerivePrivate;
      var _util = require_util();
      var _bn = require_bn5();
      var _index = require_hmac2();
      function ledgerDerivePrivate(xprv, index) {
        const kl = xprv.subarray(0, 32);
        const kr = xprv.subarray(32, 64);
        const cc = xprv.subarray(64, 96);
        const data = (0, _util.u8aConcat)([0], kl, kr, (0, _util.bnToU8a)(index, _bn.BN_LE_32_OPTS));
        const z = (0, _index.hmacShaAsU8a)(cc, data, 512);
        data[0] = 1;
        return (0, _util.u8aConcat)((0, _util.bnToU8a)((0, _util.u8aToBn)(kl, _bn.BN_LE_OPTS).iadd((0, _util.u8aToBn)(z.subarray(0, 28), _bn.BN_LE_OPTS).imul(_util.BN_EIGHT)), _bn.BN_LE_512_OPTS).subarray(0, 32), (0, _util.bnToU8a)((0, _util.u8aToBn)(kr, _bn.BN_LE_OPTS).iadd((0, _util.u8aToBn)(z.subarray(32, 64), _bn.BN_LE_OPTS)), _bn.BN_LE_512_OPTS).subarray(0, 32), (0, _index.hmacShaAsU8a)(cc, data, 512).subarray(32, 64));
      }
    }
  });

  // node_modules/@polkadot/util-crypto/hd/ledger/master.cjs
  var require_master = __commonJS({
    "node_modules/@polkadot/util-crypto/hd/ledger/master.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ledgerMaster = ledgerMaster;
      var _util = require_util();
      var _index = require_hmac2();
      var _bip = require_bip39();
      var ED25519_CRYPTO = "ed25519 seed";
      function ledgerMaster(mnemonic, password) {
        const seed = (0, _bip.mnemonicToSeedSync)(mnemonic, password);
        const chainCode = (0, _index.hmacShaAsU8a)(ED25519_CRYPTO, new Uint8Array([1, ...seed]), 256);
        let priv;
        while (!priv || priv[31] & 32) {
          priv = (0, _index.hmacShaAsU8a)(ED25519_CRYPTO, priv || seed, 512);
        }
        priv[0] &= 248;
        priv[31] &= 127;
        priv[31] |= 64;
        return (0, _util.u8aConcat)(priv, chainCode);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/hd/ledger/index.cjs
  var require_ledger2 = __commonJS({
    "node_modules/@polkadot/util-crypto/hd/ledger/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hdLedger = hdLedger;
      var _util = require_util();
      var _index = require_ed25519();
      var _index2 = require_mnemonic();
      var _validatePath = require_validatePath();
      var _derivePrivate = require_derivePrivate();
      var _master = require_master();
      function hdLedger(_mnemonic, path) {
        const words = _mnemonic.split(" ").map((s) => s.trim()).filter((s) => s);
        (0, _util.assert)([12, 24, 25].includes(words.length), "Expected a mnemonic with 24 words (or 25 including a password)");
        const [mnemonic, password] = words.length === 25 ? [words.slice(0, 24).join(" "), words[24]] : [words.join(" "), ""];
        (0, _util.assert)((0, _index2.mnemonicValidate)(mnemonic), "Invalid mnemonic passed to ledger derivation");
        (0, _util.assert)((0, _validatePath.hdValidatePath)(path), "Invalid derivation path");
        const parts = path.split("/").slice(1);
        let seed = (0, _master.ledgerMaster)(mnemonic, password);
        for (const p of parts) {
          const n = parseInt(p.replace(/'$/, ""), 10);
          seed = (0, _derivePrivate.ledgerDerivePrivate)(seed, n < _validatePath.HARDENED ? n + _validatePath.HARDENED : n);
        }
        return (0, _index.ed25519PairFromSeed)(seed.slice(0, 32));
      }
    }
  });

  // node_modules/@polkadot/util-crypto/hd/index.cjs
  var require_hd = __commonJS({
    "node_modules/@polkadot/util-crypto/hd/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "hdEthereum", {
        enumerable: true,
        get: function() {
          return _index.hdEthereum;
        }
      });
      Object.defineProperty(exports, "hdLedger", {
        enumerable: true,
        get: function() {
          return _index2.hdLedger;
        }
      });
      Object.defineProperty(exports, "hdValidatePath", {
        enumerable: true,
        get: function() {
          return _validatePath.hdValidatePath;
        }
      });
      var _index = require_ethereum2();
      var _index2 = require_ledger2();
      var _validatePath = require_validatePath();
    }
  });

  // node_modules/@polkadot/util-crypto/nacl/decrypt.cjs
  var require_decrypt = __commonJS({
    "node_modules/@polkadot/util-crypto/nacl/decrypt.cjs"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.naclDecrypt = naclDecrypt;
      var _tweetnacl = _interopRequireDefault(require_nacl_fast());
      function naclDecrypt(encrypted, nonce, secret) {
        return _tweetnacl.default.secretbox.open(encrypted, nonce, secret) || null;
      }
    }
  });

  // node_modules/@polkadot/util-crypto/nacl/encrypt.cjs
  var require_encrypt = __commonJS({
    "node_modules/@polkadot/util-crypto/nacl/encrypt.cjs"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.naclEncrypt = naclEncrypt;
      var _tweetnacl = _interopRequireDefault(require_nacl_fast());
      var _asU8a = require_asU8a2();
      function naclEncrypt(message, secret) {
        let nonce = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : (0, _asU8a.randomAsU8a)(24);
        return {
          encrypted: _tweetnacl.default.secretbox(message, nonce, secret),
          nonce
        };
      }
    }
  });

  // node_modules/@polkadot/util-crypto/nacl/box/fromSecret.cjs
  var require_fromSecret2 = __commonJS({
    "node_modules/@polkadot/util-crypto/nacl/box/fromSecret.cjs"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.naclBoxPairFromSecret = naclBoxPairFromSecret;
      var _tweetnacl = _interopRequireDefault(require_nacl_fast());
      function naclBoxPairFromSecret(secret) {
        return _tweetnacl.default.box.keyPair.fromSecretKey(secret.slice(0, 32));
      }
    }
  });

  // node_modules/@polkadot/util-crypto/nacl/open.cjs
  var require_open = __commonJS({
    "node_modules/@polkadot/util-crypto/nacl/open.cjs"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.naclOpen = naclOpen;
      var _tweetnacl = _interopRequireDefault(require_nacl_fast());
      function naclOpen(sealed, nonce, senderBoxPublic, receiverBoxSecret) {
        return _tweetnacl.default.box.open(sealed, nonce, senderBoxPublic, receiverBoxSecret) || null;
      }
    }
  });

  // node_modules/@polkadot/util-crypto/nacl/seal.cjs
  var require_seal = __commonJS({
    "node_modules/@polkadot/util-crypto/nacl/seal.cjs"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.naclSeal = naclSeal;
      var _tweetnacl = _interopRequireDefault(require_nacl_fast());
      var _asU8a = require_asU8a2();
      function naclSeal(message, senderBoxSecret, receiverBoxPublic) {
        let nonce = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (0, _asU8a.randomAsU8a)(24);
        return {
          nonce,
          sealed: _tweetnacl.default.box(message, nonce, receiverBoxPublic, senderBoxSecret)
        };
      }
    }
  });

  // node_modules/@polkadot/util-crypto/nacl/index.cjs
  var require_nacl = __commonJS({
    "node_modules/@polkadot/util-crypto/nacl/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "naclBoxPairFromSecret", {
        enumerable: true,
        get: function() {
          return _fromSecret.naclBoxPairFromSecret;
        }
      });
      Object.defineProperty(exports, "naclDecrypt", {
        enumerable: true,
        get: function() {
          return _decrypt.naclDecrypt;
        }
      });
      Object.defineProperty(exports, "naclEncrypt", {
        enumerable: true,
        get: function() {
          return _encrypt.naclEncrypt;
        }
      });
      Object.defineProperty(exports, "naclOpen", {
        enumerable: true,
        get: function() {
          return _open.naclOpen;
        }
      });
      Object.defineProperty(exports, "naclSeal", {
        enumerable: true,
        get: function() {
          return _seal.naclSeal;
        }
      });
      var _decrypt = require_decrypt();
      var _encrypt = require_encrypt();
      var _fromSecret = require_fromSecret2();
      var _open = require_open();
      var _seal = require_seal();
    }
  });

  // node_modules/@noble/hashes/scrypt.js
  var require_scrypt = __commonJS({
    "node_modules/@noble/hashes/scrypt.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.scryptAsync = exports.scrypt = void 0;
      var sha256_js_1 = require_sha256();
      var pbkdf2_js_1 = require_pbkdf2();
      var utils_js_1 = require_utils();
      var rotl = (a, b) => a << b | a >>> 32 - b;
      function XorAndSalsa(prev, pi, input, ii, out, oi) {
        let y00 = prev[pi++] ^ input[ii++], y01 = prev[pi++] ^ input[ii++];
        let y02 = prev[pi++] ^ input[ii++], y03 = prev[pi++] ^ input[ii++];
        let y04 = prev[pi++] ^ input[ii++], y05 = prev[pi++] ^ input[ii++];
        let y06 = prev[pi++] ^ input[ii++], y07 = prev[pi++] ^ input[ii++];
        let y08 = prev[pi++] ^ input[ii++], y09 = prev[pi++] ^ input[ii++];
        let y10 = prev[pi++] ^ input[ii++], y11 = prev[pi++] ^ input[ii++];
        let y12 = prev[pi++] ^ input[ii++], y13 = prev[pi++] ^ input[ii++];
        let y14 = prev[pi++] ^ input[ii++], y15 = prev[pi++] ^ input[ii++];
        let x00 = y00, x01 = y01, x02 = y02, x03 = y03, x04 = y04, x05 = y05, x06 = y06, x07 = y07, x08 = y08, x09 = y09, x10 = y10, x11 = y11, x12 = y12, x13 = y13, x14 = y14, x15 = y15;
        for (let i = 0; i < 8; i += 2) {
          x04 ^= rotl(x00 + x12 | 0, 7);
          x08 ^= rotl(x04 + x00 | 0, 9);
          x12 ^= rotl(x08 + x04 | 0, 13);
          x00 ^= rotl(x12 + x08 | 0, 18);
          x09 ^= rotl(x05 + x01 | 0, 7);
          x13 ^= rotl(x09 + x05 | 0, 9);
          x01 ^= rotl(x13 + x09 | 0, 13);
          x05 ^= rotl(x01 + x13 | 0, 18);
          x14 ^= rotl(x10 + x06 | 0, 7);
          x02 ^= rotl(x14 + x10 | 0, 9);
          x06 ^= rotl(x02 + x14 | 0, 13);
          x10 ^= rotl(x06 + x02 | 0, 18);
          x03 ^= rotl(x15 + x11 | 0, 7);
          x07 ^= rotl(x03 + x15 | 0, 9);
          x11 ^= rotl(x07 + x03 | 0, 13);
          x15 ^= rotl(x11 + x07 | 0, 18);
          x01 ^= rotl(x00 + x03 | 0, 7);
          x02 ^= rotl(x01 + x00 | 0, 9);
          x03 ^= rotl(x02 + x01 | 0, 13);
          x00 ^= rotl(x03 + x02 | 0, 18);
          x06 ^= rotl(x05 + x04 | 0, 7);
          x07 ^= rotl(x06 + x05 | 0, 9);
          x04 ^= rotl(x07 + x06 | 0, 13);
          x05 ^= rotl(x04 + x07 | 0, 18);
          x11 ^= rotl(x10 + x09 | 0, 7);
          x08 ^= rotl(x11 + x10 | 0, 9);
          x09 ^= rotl(x08 + x11 | 0, 13);
          x10 ^= rotl(x09 + x08 | 0, 18);
          x12 ^= rotl(x15 + x14 | 0, 7);
          x13 ^= rotl(x12 + x15 | 0, 9);
          x14 ^= rotl(x13 + x12 | 0, 13);
          x15 ^= rotl(x14 + x13 | 0, 18);
        }
        out[oi++] = y00 + x00 | 0;
        out[oi++] = y01 + x01 | 0;
        out[oi++] = y02 + x02 | 0;
        out[oi++] = y03 + x03 | 0;
        out[oi++] = y04 + x04 | 0;
        out[oi++] = y05 + x05 | 0;
        out[oi++] = y06 + x06 | 0;
        out[oi++] = y07 + x07 | 0;
        out[oi++] = y08 + x08 | 0;
        out[oi++] = y09 + x09 | 0;
        out[oi++] = y10 + x10 | 0;
        out[oi++] = y11 + x11 | 0;
        out[oi++] = y12 + x12 | 0;
        out[oi++] = y13 + x13 | 0;
        out[oi++] = y14 + x14 | 0;
        out[oi++] = y15 + x15 | 0;
      }
      function BlockMix(input, ii, out, oi, r) {
        let head = oi + 0;
        let tail = oi + 16 * r;
        for (let i = 0; i < 16; i++)
          out[tail + i] = input[ii + (2 * r - 1) * 16 + i];
        for (let i = 0; i < r; i++, head += 16, ii += 16) {
          XorAndSalsa(out, tail, input, ii, out, head);
          if (i > 0)
            tail += 16;
          XorAndSalsa(out, head, input, ii += 16, out, tail);
        }
      }
      function scryptInit(password, salt, _opts) {
        const opts = (0, utils_js_1.checkOpts)({
          dkLen: 32,
          asyncTick: 10,
          maxmem: 1024 ** 3 + 1024
        }, _opts);
        const { N, r, p, dkLen, asyncTick, maxmem, onProgress } = opts;
        (0, utils_js_1.assertNumber)(N);
        (0, utils_js_1.assertNumber)(r);
        (0, utils_js_1.assertNumber)(p);
        (0, utils_js_1.assertNumber)(dkLen);
        (0, utils_js_1.assertNumber)(asyncTick);
        (0, utils_js_1.assertNumber)(maxmem);
        if (onProgress !== void 0 && typeof onProgress !== "function")
          throw new Error("progressCb should be function");
        const blockSize = 128 * r;
        const blockSize32 = blockSize / 4;
        if (N <= 1 || (N & N - 1) !== 0 || N >= 2 ** (blockSize / 8) || N > 2 ** 32) {
          throw new Error("Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32");
        }
        if (p < 0 || p > (2 ** 32 - 1) * 32 / blockSize) {
          throw new Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
        }
        if (dkLen < 0 || dkLen > (2 ** 32 - 1) * 32) {
          throw new Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
        }
        const memUsed = blockSize * (N + p);
        if (memUsed > maxmem) {
          throw new Error(`Scrypt: parameters too large, ${memUsed} (128 * r * (N + p)) > ${maxmem} (maxmem)`);
        }
        const B = (0, pbkdf2_js_1.pbkdf2)(sha256_js_1.sha256, password, salt, { c: 1, dkLen: blockSize * p });
        const B32 = (0, utils_js_1.u32)(B);
        const V = (0, utils_js_1.u32)(new Uint8Array(blockSize * N));
        const tmp = (0, utils_js_1.u32)(new Uint8Array(blockSize));
        let blockMixCb = () => {
        };
        if (onProgress) {
          const totalBlockMix = 2 * N * p;
          const callbackPer = Math.max(Math.floor(totalBlockMix / 1e4), 1);
          let blockMixCnt = 0;
          blockMixCb = () => {
            blockMixCnt++;
            if (onProgress && (!(blockMixCnt % callbackPer) || blockMixCnt === totalBlockMix))
              onProgress(blockMixCnt / totalBlockMix);
          };
        }
        return { N, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb, asyncTick };
      }
      function scryptOutput(password, dkLen, B, V, tmp) {
        const res = (0, pbkdf2_js_1.pbkdf2)(sha256_js_1.sha256, password, B, { c: 1, dkLen });
        B.fill(0);
        V.fill(0);
        tmp.fill(0);
        return res;
      }
      function scrypt(password, salt, opts) {
        const { N, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb } = scryptInit(password, salt, opts);
        for (let pi = 0; pi < p; pi++) {
          const Pi = blockSize32 * pi;
          for (let i = 0; i < blockSize32; i++)
            V[i] = B32[Pi + i];
          for (let i = 0, pos = 0; i < N - 1; i++) {
            BlockMix(V, pos, V, pos += blockSize32, r);
            blockMixCb();
          }
          BlockMix(V, (N - 1) * blockSize32, B32, Pi, r);
          blockMixCb();
          for (let i = 0; i < N; i++) {
            const j = B32[Pi + blockSize32 - 16] % N;
            for (let k = 0; k < blockSize32; k++)
              tmp[k] = B32[Pi + k] ^ V[j * blockSize32 + k];
            BlockMix(tmp, 0, B32, Pi, r);
            blockMixCb();
          }
        }
        return scryptOutput(password, dkLen, B, V, tmp);
      }
      exports.scrypt = scrypt;
      async function scryptAsync(password, salt, opts) {
        const { N, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb, asyncTick } = scryptInit(password, salt, opts);
        for (let pi = 0; pi < p; pi++) {
          const Pi = blockSize32 * pi;
          for (let i = 0; i < blockSize32; i++)
            V[i] = B32[Pi + i];
          let pos = 0;
          await (0, utils_js_1.asyncLoop)(N - 1, asyncTick, (i) => {
            BlockMix(V, pos, V, pos += blockSize32, r);
            blockMixCb();
          });
          BlockMix(V, (N - 1) * blockSize32, B32, Pi, r);
          blockMixCb();
          await (0, utils_js_1.asyncLoop)(N, asyncTick, (i) => {
            const j = B32[Pi + blockSize32 - 16] % N;
            for (let k = 0; k < blockSize32; k++)
              tmp[k] = B32[Pi + k] ^ V[j * blockSize32 + k];
            BlockMix(tmp, 0, B32, Pi, r);
            blockMixCb();
          });
        }
        return scryptOutput(password, dkLen, B, V, tmp);
      }
      exports.scryptAsync = scryptAsync;
    }
  });

  // node_modules/@polkadot/util-crypto/scrypt/defaults.cjs
  var require_defaults3 = __commonJS({
    "node_modules/@polkadot/util-crypto/scrypt/defaults.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DEFAULT_PARAMS = void 0;
      var DEFAULT_PARAMS = {
        N: 1 << 15,
        p: 1,
        r: 8
      };
      exports.DEFAULT_PARAMS = DEFAULT_PARAMS;
    }
  });

  // node_modules/@polkadot/util-crypto/scrypt/encode.cjs
  var require_encode4 = __commonJS({
    "node_modules/@polkadot/util-crypto/scrypt/encode.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.scryptEncode = scryptEncode;
      var _scrypt = require_scrypt();
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      var _asU8a = require_asU8a2();
      var _defaults = require_defaults3();
      function scryptEncode(passphrase) {
        let salt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (0, _asU8a.randomAsU8a)();
        let params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _defaults.DEFAULT_PARAMS;
        let onlyJs = arguments.length > 3 ? arguments[3] : void 0;
        const u8a = (0, _util.u8aToU8a)(passphrase);
        return {
          params,
          password: !_util.hasBigInt || !onlyJs && (0, _wasmCrypto.isReady)() ? (0, _wasmCrypto.scrypt)(u8a, salt, Math.log2(params.N), params.r, params.p) : (0, _scrypt.scrypt)(u8a, salt, (0, _util.objectSpread)({
            dkLen: 64
          }, params)),
          salt
        };
      }
    }
  });

  // node_modules/@polkadot/util-crypto/scrypt/fromU8a.cjs
  var require_fromU8a3 = __commonJS({
    "node_modules/@polkadot/util-crypto/scrypt/fromU8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.scryptFromU8a = scryptFromU8a;
      var _util = require_util();
      var _bn = require_bn5();
      var _defaults = require_defaults3();
      function scryptFromU8a(data) {
        const salt = data.subarray(0, 32);
        const N = (0, _util.u8aToBn)(data.subarray(32 + 0, 32 + 4), _bn.BN_LE_OPTS).toNumber();
        const p = (0, _util.u8aToBn)(data.subarray(32 + 4, 32 + 8), _bn.BN_LE_OPTS).toNumber();
        const r = (0, _util.u8aToBn)(data.subarray(32 + 8, 32 + 12), _bn.BN_LE_OPTS).toNumber();
        (0, _util.assert)(N === _defaults.DEFAULT_PARAMS.N && p === _defaults.DEFAULT_PARAMS.p && r === _defaults.DEFAULT_PARAMS.r, "Invalid injected scrypt params found");
        return {
          params: {
            N,
            p,
            r
          },
          salt
        };
      }
    }
  });

  // node_modules/@polkadot/util-crypto/scrypt/toU8a.cjs
  var require_toU8a10 = __commonJS({
    "node_modules/@polkadot/util-crypto/scrypt/toU8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.scryptToU8a = scryptToU8a;
      var _util = require_util();
      var _bn = require_bn5();
      function scryptToU8a(salt, _ref) {
        let {
          N,
          p,
          r
        } = _ref;
        return (0, _util.u8aConcat)(salt, (0, _util.bnToU8a)(N, _bn.BN_LE_32_OPTS), (0, _util.bnToU8a)(p, _bn.BN_LE_32_OPTS), (0, _util.bnToU8a)(r, _bn.BN_LE_32_OPTS));
      }
    }
  });

  // node_modules/@polkadot/util-crypto/scrypt/index.cjs
  var require_scrypt2 = __commonJS({
    "node_modules/@polkadot/util-crypto/scrypt/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "scryptEncode", {
        enumerable: true,
        get: function() {
          return _encode.scryptEncode;
        }
      });
      Object.defineProperty(exports, "scryptFromU8a", {
        enumerable: true,
        get: function() {
          return _fromU8a.scryptFromU8a;
        }
      });
      Object.defineProperty(exports, "scryptToU8a", {
        enumerable: true,
        get: function() {
          return _toU8a.scryptToU8a;
        }
      });
      var _encode = require_encode4();
      var _fromU8a = require_fromU8a3();
      var _toU8a = require_toU8a10();
    }
  });

  // node_modules/@polkadot/util-crypto/json/constants.cjs
  var require_constants = __commonJS({
    "node_modules/@polkadot/util-crypto/json/constants.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SCRYPT_LENGTH = exports.NONCE_LENGTH = exports.ENCODING_VERSION = exports.ENCODING_NONE = exports.ENCODING = void 0;
      var ENCODING = ["scrypt", "xsalsa20-poly1305"];
      exports.ENCODING = ENCODING;
      var ENCODING_NONE = ["none"];
      exports.ENCODING_NONE = ENCODING_NONE;
      var ENCODING_VERSION = "3";
      exports.ENCODING_VERSION = ENCODING_VERSION;
      var NONCE_LENGTH = 24;
      exports.NONCE_LENGTH = NONCE_LENGTH;
      var SCRYPT_LENGTH = 32 + 3 * 4;
      exports.SCRYPT_LENGTH = SCRYPT_LENGTH;
    }
  });

  // node_modules/@polkadot/util-crypto/json/decryptData.cjs
  var require_decryptData = __commonJS({
    "node_modules/@polkadot/util-crypto/json/decryptData.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.jsonDecryptData = jsonDecryptData;
      var _util = require_util();
      var _index = require_nacl();
      var _index2 = require_scrypt2();
      var _constants = require_constants();
      function jsonDecryptData(encrypted, passphrase) {
        let encType = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _constants.ENCODING;
        (0, _util.assert)(encrypted, "No encrypted data available to decode");
        (0, _util.assert)(passphrase || !encType.includes("xsalsa20-poly1305"), "Password required to decode encrypted data");
        let encoded = encrypted;
        if (passphrase) {
          let password;
          if (encType.includes("scrypt")) {
            const {
              params,
              salt
            } = (0, _index2.scryptFromU8a)(encrypted);
            password = (0, _index2.scryptEncode)(passphrase, salt, params).password;
            encrypted = encrypted.subarray(_constants.SCRYPT_LENGTH);
          } else {
            password = (0, _util.stringToU8a)(passphrase);
          }
          encoded = (0, _index.naclDecrypt)(encrypted.subarray(_constants.NONCE_LENGTH), encrypted.subarray(0, _constants.NONCE_LENGTH), (0, _util.u8aFixLength)(password, 256, true));
        }
        (0, _util.assert)(encoded, "Unable to decode using the supplied passphrase");
        return encoded;
      }
    }
  });

  // node_modules/@polkadot/util-crypto/json/decrypt.cjs
  var require_decrypt2 = __commonJS({
    "node_modules/@polkadot/util-crypto/json/decrypt.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.jsonDecrypt = jsonDecrypt;
      var _util = require_util();
      var _index = require_base642();
      var _decryptData = require_decryptData();
      function jsonDecrypt(_ref, passphrase) {
        let {
          encoded,
          encoding
        } = _ref;
        (0, _util.assert)(encoded, "No encrypted data available to decode");
        return (0, _decryptData.jsonDecryptData)((0, _util.isHex)(encoded) ? (0, _util.hexToU8a)(encoded) : (0, _index.base64Decode)(encoded), passphrase, Array.isArray(encoding.type) ? encoding.type : [encoding.type]);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/json/encryptFormat.cjs
  var require_encryptFormat = __commonJS({
    "node_modules/@polkadot/util-crypto/json/encryptFormat.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.jsonEncryptFormat = jsonEncryptFormat;
      var _index = require_base642();
      var _constants = require_constants();
      function jsonEncryptFormat(encoded, contentType, isEncrypted) {
        return {
          encoded: (0, _index.base64Encode)(encoded),
          encoding: {
            content: contentType,
            type: isEncrypted ? _constants.ENCODING : _constants.ENCODING_NONE,
            version: _constants.ENCODING_VERSION
          }
        };
      }
    }
  });

  // node_modules/@polkadot/util-crypto/json/encrypt.cjs
  var require_encrypt2 = __commonJS({
    "node_modules/@polkadot/util-crypto/json/encrypt.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.jsonEncrypt = jsonEncrypt;
      var _util = require_util();
      var _index = require_nacl();
      var _index2 = require_scrypt2();
      var _encryptFormat = require_encryptFormat();
      function jsonEncrypt(data, contentType, passphrase) {
        let isEncrypted = false;
        let encoded = data;
        if (passphrase) {
          const {
            params,
            password,
            salt
          } = (0, _index2.scryptEncode)(passphrase);
          const {
            encrypted,
            nonce
          } = (0, _index.naclEncrypt)(encoded, password.subarray(0, 32));
          isEncrypted = true;
          encoded = (0, _util.u8aConcat)((0, _index2.scryptToU8a)(salt, params), nonce, encrypted);
        }
        return (0, _encryptFormat.jsonEncryptFormat)(encoded, contentType, isEncrypted);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/json/index.cjs
  var require_json = __commonJS({
    "node_modules/@polkadot/util-crypto/json/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "jsonDecrypt", {
        enumerable: true,
        get: function() {
          return _decrypt.jsonDecrypt;
        }
      });
      Object.defineProperty(exports, "jsonDecryptData", {
        enumerable: true,
        get: function() {
          return _decryptData.jsonDecryptData;
        }
      });
      Object.defineProperty(exports, "jsonEncrypt", {
        enumerable: true,
        get: function() {
          return _encrypt.jsonEncrypt;
        }
      });
      Object.defineProperty(exports, "jsonEncryptFormat", {
        enumerable: true,
        get: function() {
          return _encryptFormat.jsonEncryptFormat;
        }
      });
      var _decrypt = require_decrypt2();
      var _decryptData = require_decryptData();
      var _encrypt = require_encrypt2();
      var _encryptFormat = require_encryptFormat();
    }
  });

  // node_modules/@polkadot/util-crypto/signature/verify.cjs
  var require_verify4 = __commonJS({
    "node_modules/@polkadot/util-crypto/signature/verify.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.signatureVerify = signatureVerify;
      var _util = require_util();
      var _decode = require_decode();
      var _verify = require_verify();
      var _verify2 = require_verify3();
      var _verify3 = require_verify2();
      var secp256k1VerifyHasher = (hashType) => (message, signature, publicKey) => (0, _verify2.secp256k1Verify)(message, signature, publicKey, hashType);
      var VERIFIERS_ECDSA = [["ecdsa", secp256k1VerifyHasher("blake2")], ["ethereum", secp256k1VerifyHasher("keccak")]];
      var VERIFIERS = [["ed25519", _verify.ed25519Verify], ["sr25519", _verify3.sr25519Verify], ...VERIFIERS_ECDSA];
      var CRYPTO_TYPES = ["ed25519", "sr25519", "ecdsa"];
      function verifyDetect(result, _ref) {
        let {
          message,
          publicKey,
          signature
        } = _ref;
        let verifiers = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : VERIFIERS;
        result.isValid = verifiers.some((_ref2) => {
          let [crypto, verify] = _ref2;
          try {
            if (verify(message, signature, publicKey)) {
              result.crypto = crypto;
              return true;
            }
          } catch (error) {
          }
          return false;
        });
        return result;
      }
      function verifyMultisig(result, _ref3) {
        let {
          message,
          publicKey,
          signature
        } = _ref3;
        (0, _util.assert)([0, 1, 2].includes(signature[0]), () => `Unknown crypto type, expected signature prefix [0..2], found ${signature[0]}`);
        const type = CRYPTO_TYPES[signature[0]] || "none";
        result.crypto = type;
        try {
          result.isValid = {
            ecdsa: () => verifyDetect(result, {
              message,
              publicKey,
              signature: signature.subarray(1)
            }, VERIFIERS_ECDSA).isValid,
            ed25519: () => (0, _verify.ed25519Verify)(message, signature.subarray(1), publicKey),
            none: () => {
              throw Error("no verify for `none` crypto type");
            },
            sr25519: () => (0, _verify3.sr25519Verify)(message, signature.subarray(1), publicKey)
          }[type]();
        } catch (error) {
        }
        return result;
      }
      function getVerifyFn(signature) {
        return [0, 1, 2].includes(signature[0]) && [65, 66].includes(signature.length) ? verifyMultisig : verifyDetect;
      }
      function signatureVerify(message, signature, addressOrPublicKey) {
        const signatureU8a = (0, _util.u8aToU8a)(signature);
        (0, _util.assert)([64, 65, 66].includes(signatureU8a.length), () => `Invalid signature length, expected [64..66] bytes, found ${signatureU8a.length}`);
        const publicKey = (0, _decode.decodeAddress)(addressOrPublicKey);
        const input = {
          message: (0, _util.u8aToU8a)(message),
          publicKey,
          signature: signatureU8a
        };
        const result = {
          crypto: "none",
          isValid: false,
          isWrapped: (0, _util.u8aIsWrapped)(input.message, true),
          publicKey
        };
        const isWrappedBytes = (0, _util.u8aIsWrapped)(input.message, false);
        const verifyFn = getVerifyFn(signatureU8a);
        verifyFn(result, input);
        if (result.crypto !== "none" || result.isWrapped && !isWrappedBytes) {
          return result;
        }
        input.message = isWrappedBytes ? (0, _util.u8aUnwrapBytes)(input.message) : (0, _util.u8aWrapBytes)(input.message);
        return verifyFn(result, input);
      }
    }
  });

  // node_modules/@polkadot/util-crypto/signature/index.cjs
  var require_signature = __commonJS({
    "node_modules/@polkadot/util-crypto/signature/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "signatureVerify", {
        enumerable: true,
        get: function() {
          return _verify.signatureVerify;
        }
      });
      var _verify = require_verify4();
    }
  });

  // node_modules/@polkadot/util-crypto/xxhash/xxhash64.cjs
  var require_xxhash64 = __commonJS({
    "node_modules/@polkadot/util-crypto/xxhash/xxhash64.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.xxhash64 = xxhash64;
      var _util = require_util();
      var _xBigint = require_x_bigint();
      var P64_1 = (0, _xBigint.BigInt)("11400714785074694791");
      var P64_2 = (0, _xBigint.BigInt)("14029467366897019727");
      var P64_3 = (0, _xBigint.BigInt)("1609587929392839161");
      var P64_4 = (0, _xBigint.BigInt)("9650029242287828579");
      var P64_5 = (0, _xBigint.BigInt)("2870177450012600261");
      var U64 = (0, _xBigint.BigInt)("0xffffffffffffffff");
      var _7n = (0, _xBigint.BigInt)(7);
      var _11n = (0, _xBigint.BigInt)(11);
      var _12n = (0, _xBigint.BigInt)(12);
      var _16n = (0, _xBigint.BigInt)(16);
      var _18n = (0, _xBigint.BigInt)(18);
      var _23n = (0, _xBigint.BigInt)(23);
      var _27n = (0, _xBigint.BigInt)(27);
      var _29n = (0, _xBigint.BigInt)(29);
      var _31n = (0, _xBigint.BigInt)(31);
      var _32n = (0, _xBigint.BigInt)(32);
      var _33n = (0, _xBigint.BigInt)(33);
      var _64n = (0, _xBigint.BigInt)(64);
      var _256n = (0, _xBigint.BigInt)(256);
      function rotl(a, b) {
        const c = a & U64;
        return (c << b | c >> _64n - b) & U64;
      }
      function fromU8a(u8a, p, count) {
        const bigints = new Array(count);
        let offset = 0;
        for (let i = 0; i < count; i++, offset += 2) {
          bigints[i] = (0, _xBigint.BigInt)(u8a[p + offset] | u8a[p + 1 + offset] << 8);
        }
        let result = _util._0n;
        for (let i = count - 1; i >= 0; i--) {
          result = (result << _16n) + bigints[i];
        }
        return result;
      }
      function toU8a(h64) {
        const result = new Uint8Array(8);
        for (let i = 7; i >= 0; i--) {
          result[i] = Number(h64 % _256n);
          h64 = h64 / _256n;
        }
        return result;
      }
      function state(initSeed) {
        const seed = (0, _xBigint.BigInt)(initSeed);
        return {
          seed,
          u8a: new Uint8Array(32),
          u8asize: 0,
          v1: seed + P64_1 + P64_2,
          v2: seed + P64_2,
          v3: seed,
          v4: seed - P64_1
        };
      }
      function init(state2, input) {
        if (input.length < 32) {
          state2.u8a.set(input);
          state2.u8asize = input.length;
          return state2;
        }
        const limit = input.length - 32;
        let p = 0;
        if (limit >= 0) {
          const adjustV = (v) => P64_1 * rotl(v + P64_2 * fromU8a(input, p, 4), _31n);
          do {
            state2.v1 = adjustV(state2.v1);
            p += 8;
            state2.v2 = adjustV(state2.v2);
            p += 8;
            state2.v3 = adjustV(state2.v3);
            p += 8;
            state2.v4 = adjustV(state2.v4);
            p += 8;
          } while (p <= limit);
        }
        if (p < input.length) {
          state2.u8a.set(input.subarray(p, input.length));
          state2.u8asize = input.length - p;
        }
        return state2;
      }
      function xxhash64(input, initSeed) {
        const {
          seed,
          u8a,
          u8asize,
          v1,
          v2,
          v3,
          v4
        } = init(state(initSeed), input);
        let p = 0;
        let h64 = U64 & (0, _xBigint.BigInt)(input.length) + (input.length >= 32 ? ((((rotl(v1, _util._1n) + rotl(v2, _7n) + rotl(v3, _12n) + rotl(v4, _18n) ^ P64_1 * rotl(v1 * P64_2, _31n)) * P64_1 + P64_4 ^ P64_1 * rotl(v2 * P64_2, _31n)) * P64_1 + P64_4 ^ P64_1 * rotl(v3 * P64_2, _31n)) * P64_1 + P64_4 ^ P64_1 * rotl(v4 * P64_2, _31n)) * P64_1 + P64_4 : seed + P64_5);
        while (p <= u8asize - 8) {
          h64 = U64 & P64_4 + P64_1 * rotl(h64 ^ P64_1 * rotl(P64_2 * fromU8a(u8a, p, 4), _31n), _27n);
          p += 8;
        }
        if (p + 4 <= u8asize) {
          h64 = U64 & P64_3 + P64_2 * rotl(h64 ^ P64_1 * fromU8a(u8a, p, 2), _23n);
          p += 4;
        }
        while (p < u8asize) {
          h64 = U64 & P64_1 * rotl(h64 ^ P64_5 * (0, _xBigint.BigInt)(u8a[p++]), _11n);
        }
        h64 = U64 & P64_2 * (h64 ^ h64 >> _33n);
        h64 = U64 & P64_3 * (h64 ^ h64 >> _29n);
        return toU8a(U64 & (h64 ^ h64 >> _32n));
      }
    }
  });

  // node_modules/@polkadot/util-crypto/xxhash/asU8a.cjs
  var require_asU8a5 = __commonJS({
    "node_modules/@polkadot/util-crypto/xxhash/asU8a.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.xxhashAsHex = void 0;
      exports.xxhashAsU8a = xxhashAsU8a;
      var _util = require_util();
      var _wasmCrypto = require_wasm_crypto();
      var _helpers = require_helpers3();
      var _xxhash = require_xxhash64();
      function xxhashAsU8a(data) {
        let bitLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 64;
        let onlyJs = arguments.length > 2 ? arguments[2] : void 0;
        const rounds = Math.ceil(bitLength / 64);
        const u8a = (0, _util.u8aToU8a)(data);
        if (!_util.hasBigInt || !onlyJs && (0, _wasmCrypto.isReady)()) {
          return (0, _wasmCrypto.twox)(u8a, rounds);
        }
        const result = new Uint8Array(rounds * 8);
        for (let seed = 0; seed < rounds; seed++) {
          result.set((0, _xxhash.xxhash64)(u8a, seed).reverse(), seed * 8);
        }
        return result;
      }
      var xxhashAsHex = (0, _helpers.createAsHex)(xxhashAsU8a);
      exports.xxhashAsHex = xxhashAsHex;
    }
  });

  // node_modules/@polkadot/util-crypto/xxhash/index.cjs
  var require_xxhash = __commonJS({
    "node_modules/@polkadot/util-crypto/xxhash/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "xxhashAsHex", {
        enumerable: true,
        get: function() {
          return _asU8a.xxhashAsHex;
        }
      });
      Object.defineProperty(exports, "xxhashAsU8a", {
        enumerable: true,
        get: function() {
          return _asU8a.xxhashAsU8a;
        }
      });
      var _asU8a = require_asU8a5();
    }
  });

  // node_modules/@polkadot/util-crypto/bundle.cjs
  var require_bundle4 = __commonJS({
    "node_modules/@polkadot/util-crypto/bundle.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _exportNames = {
        packageInfo: true
      };
      Object.defineProperty(exports, "packageInfo", {
        enumerable: true,
        get: function() {
          return _packageInfo.packageInfo;
        }
      });
      require_bundleInit();
      var _packageInfo = require_packageInfo8();
      var _index = require_address();
      Object.keys(_index).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index[key];
          }
        });
      });
      var _index2 = require_base32();
      Object.keys(_index2).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index2[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index2[key];
          }
        });
      });
      var _index3 = require_base58();
      Object.keys(_index3).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index3[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index3[key];
          }
        });
      });
      var _index4 = require_base642();
      Object.keys(_index4).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index4[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index4[key];
          }
        });
      });
      var _index5 = require_blake22();
      Object.keys(_index5).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index5[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index5[key];
          }
        });
      });
      var _crypto = require_crypto2();
      Object.keys(_crypto).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _crypto[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _crypto[key];
          }
        });
      });
      var _index6 = require_ed25519();
      Object.keys(_index6).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index6[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index6[key];
          }
        });
      });
      var _index7 = require_ethereum();
      Object.keys(_index7).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index7[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index7[key];
          }
        });
      });
      var _index8 = require_hd();
      Object.keys(_index8).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index8[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index8[key];
          }
        });
      });
      var _index9 = require_hmac2();
      Object.keys(_index9).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index9[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index9[key];
          }
        });
      });
      var _index10 = require_json();
      Object.keys(_index10).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index10[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index10[key];
          }
        });
      });
      var _index11 = require_keccak();
      Object.keys(_index11).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index11[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index11[key];
          }
        });
      });
      var _index12 = require_key();
      Object.keys(_index12).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index12[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index12[key];
          }
        });
      });
      var _index13 = require_mnemonic();
      Object.keys(_index13).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index13[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index13[key];
          }
        });
      });
      var _networks = require_networks();
      Object.keys(_networks).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _networks[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _networks[key];
          }
        });
      });
      var _index14 = require_nacl();
      Object.keys(_index14).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index14[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index14[key];
          }
        });
      });
      var _index15 = require_pbkdf22();
      Object.keys(_index15).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index15[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index15[key];
          }
        });
      });
      var _index16 = require_random();
      Object.keys(_index16).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index16[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index16[key];
          }
        });
      });
      var _index17 = require_scrypt2();
      Object.keys(_index17).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index17[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index17[key];
          }
        });
      });
      var _index18 = require_secp256k1();
      Object.keys(_index18).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index18[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index18[key];
          }
        });
      });
      var _index19 = require_sha();
      Object.keys(_index19).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index19[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index19[key];
          }
        });
      });
      var _index20 = require_signature();
      Object.keys(_index20).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index20[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index20[key];
          }
        });
      });
      var _index21 = require_sr25519();
      Object.keys(_index21).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index21[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index21[key];
          }
        });
      });
      var _index22 = require_xxhash();
      Object.keys(_index22).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _index22[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _index22[key];
          }
        });
      });
    }
  });

  // node_modules/@polkadot/util-crypto/index.cjs
  var require_util_crypto = __commonJS({
    "node_modules/@polkadot/util-crypto/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      require_detectPackage2();
      var _bundle = require_bundle4();
      Object.keys(_bundle).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (key in exports && exports[key] === _bundle[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _bundle[key];
          }
        });
      });
    }
  });

  // node_modules/@polkadot/extension-dapp/util.cjs
  var require_util3 = __commonJS({
    "node_modules/@polkadot/extension-dapp/util.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.documentReadyPromise = documentReadyPromise;
      function documentReadyPromise(creator) {
        return new Promise((resolve) => {
          if (document.readyState === "complete") {
            resolve(creator());
          } else {
            window.addEventListener("load", () => resolve(creator()));
          }
        });
      }
    }
  });

  // node_modules/@polkadot/extension-dapp/packageInfo.cjs
  var require_packageInfo12 = __commonJS({
    "node_modules/@polkadot/extension-dapp/packageInfo.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.packageInfo = void 0;
      var packageInfo = {
        name: "@polkadot/extension-dapp",
        path: typeof __dirname === "string" ? __dirname : "auto",
        type: "cjs",
        version: "0.42.10"
      };
      exports.packageInfo = packageInfo;
    }
  });

  // node_modules/@polkadot/extension-dapp/wrapBytes.cjs
  var require_wrapBytes = __commonJS({
    "node_modules/@polkadot/extension-dapp/wrapBytes.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.wrapBytes = exports.unwrapBytes = exports.isWrapped = exports.PREFIX = exports.POSTFIX = exports.ETHEREUM = void 0;
      var _util = require_util();
      var ETHEREUM = _util.U8A_WRAP_ETHEREUM;
      exports.ETHEREUM = ETHEREUM;
      var POSTFIX = _util.U8A_WRAP_POSTFIX;
      exports.POSTFIX = POSTFIX;
      var PREFIX = _util.U8A_WRAP_PREFIX;
      exports.PREFIX = PREFIX;
      var isWrapped = _util.u8aIsWrapped;
      exports.isWrapped = isWrapped;
      var unwrapBytes = _util.u8aUnwrapBytes;
      exports.unwrapBytes = unwrapBytes;
      var wrapBytes = _util.u8aWrapBytes;
      exports.wrapBytes = wrapBytes;
    }
  });

  // node_modules/@polkadot/extension-dapp/bundle.cjs
  var require_bundle5 = __commonJS({
    "node_modules/@polkadot/extension-dapp/bundle.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isWeb3Injected = void 0;
      Object.defineProperty(exports, "packageInfo", {
        enumerable: true,
        get: function() {
          return _packageInfo.packageInfo;
        }
      });
      Object.defineProperty(exports, "unwrapBytes", {
        enumerable: true,
        get: function() {
          return _wrapBytes.unwrapBytes;
        }
      });
      exports.web3Accounts = web3Accounts;
      exports.web3AccountsSubscribe = web3AccountsSubscribe;
      exports.web3Enable = web3Enable;
      exports.web3EnablePromise = void 0;
      exports.web3FromAddress = web3FromAddress;
      exports.web3FromSource = web3FromSource;
      exports.web3ListRpcProviders = web3ListRpcProviders;
      exports.web3UseRpcProvider = web3UseRpcProvider;
      Object.defineProperty(exports, "wrapBytes", {
        enumerable: true,
        get: function() {
          return _wrapBytes.wrapBytes;
        }
      });
      var _util = require_util();
      var _utilCrypto = require_util_crypto();
      var _util2 = require_util3();
      var _packageInfo = require_packageInfo12();
      var _wrapBytes = require_wrapBytes();
      var win = window;
      win.injectedWeb3 = win.injectedWeb3 || {};
      function web3IsInjected() {
        return Object.keys(win.injectedWeb3).length !== 0;
      }
      function throwError(method) {
        throw new Error(`${method}: web3Enable(originName) needs to be called before ${method}`);
      }
      function mapAccounts(source, list, ss58Format) {
        return list.map((_ref) => {
          let {
            address,
            genesisHash,
            name,
            type
          } = _ref;
          const encodedAddress = address.length === 42 ? address : (0, _utilCrypto.encodeAddress)((0, _utilCrypto.decodeAddress)(address), ss58Format);
          return {
            address: encodedAddress,
            meta: {
              genesisHash,
              name,
              source
            },
            type
          };
        });
      }
      var isWeb3Injected = web3IsInjected();
      exports.isWeb3Injected = isWeb3Injected;
      var web3EnablePromise = null;
      exports.web3EnablePromise = web3EnablePromise;
      function getWindowExtensions(originName) {
        return Promise.all(Object.entries(win.injectedWeb3).map((_ref2) => {
          let [name, {
            enable,
            version
          }] = _ref2;
          return Promise.all([Promise.resolve({
            name,
            version
          }), enable(originName).catch((error) => {
            console.error(`Error initializing ${name}: ${error.message}`);
          })]);
        }));
      }
      function web3Enable(originName) {
        let compatInits = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        if (!originName) {
          throw new Error("You must pass a name for your app to the web3Enable function");
        }
        const initCompat = compatInits.length ? Promise.all(compatInits.map((c) => c().catch(() => false))) : Promise.resolve([true]);
        exports.web3EnablePromise = web3EnablePromise = (0, _util2.documentReadyPromise)(() => initCompat.then(() => getWindowExtensions(originName).then((values) => values.filter((value) => !!value[1]).map((_ref3) => {
          let [info, ext] = _ref3;
          if (!ext.accounts.subscribe) {
            ext.accounts.subscribe = (cb) => {
              ext.accounts.get().then(cb).catch(console.error);
              return () => {
              };
            };
          }
          return {
            ...info,
            ...ext
          };
        })).catch(() => []).then((values) => {
          const names = values.map((_ref4) => {
            let {
              name,
              version
            } = _ref4;
            return `${name}/${version}`;
          });
          exports.isWeb3Injected = isWeb3Injected = web3IsInjected();
          console.log(`web3Enable: Enabled ${values.length} extension${values.length !== 1 ? "s" : ""}: ${names.join(", ")}`);
          return values;
        })));
        return web3EnablePromise;
      }
      async function web3Accounts() {
        let {
          accountType,
          ss58Format
        } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (!web3EnablePromise) {
          return throwError("web3Accounts");
        }
        const accounts = [];
        const injected = await web3EnablePromise;
        const retrieved = await Promise.all(injected.map(async (_ref5) => {
          let {
            accounts: accounts2,
            name: source
          } = _ref5;
          try {
            const list = await accounts2.get();
            return mapAccounts(source, list.filter((_ref6) => {
              let {
                type
              } = _ref6;
              return type && accountType ? accountType.includes(type) : true;
            }), ss58Format);
          } catch (error) {
            return [];
          }
        }));
        retrieved.forEach((result) => {
          accounts.push(...result);
        });
        const addresses = accounts.map((_ref7) => {
          let {
            address
          } = _ref7;
          return address;
        });
        console.log(`web3Accounts: Found ${accounts.length} address${accounts.length !== 1 ? "es" : ""}: ${addresses.join(", ")}`);
        return accounts;
      }
      async function web3AccountsSubscribe(cb) {
        let {
          ss58Format
        } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!web3EnablePromise) {
          return throwError("web3AccountsSubscribe");
        }
        const accounts = {};
        const triggerUpdate = () => cb(Object.entries(accounts).reduce((result, _ref8) => {
          let [source, list] = _ref8;
          result.push(...mapAccounts(source, list, ss58Format));
          return result;
        }, []));
        const unsubs = (await web3EnablePromise).map((_ref9) => {
          let {
            accounts: {
              subscribe
            },
            name: source
          } = _ref9;
          return subscribe((result) => {
            accounts[source] = result;
            triggerUpdate();
          });
        });
        return () => {
          unsubs.forEach((unsub) => {
            unsub();
          });
        };
      }
      async function web3FromSource(source) {
        if (!web3EnablePromise) {
          return throwError("web3FromSource");
        }
        const sources = await web3EnablePromise;
        const found = source && sources.find((_ref10) => {
          let {
            name
          } = _ref10;
          return name === source;
        });
        if (!found) {
          throw new Error(`web3FromSource: Unable to find an injected ${source}`);
        }
        return found;
      }
      async function web3FromAddress(address) {
        if (!web3EnablePromise) {
          return throwError("web3FromAddress");
        }
        const accounts = await web3Accounts();
        let found;
        if (address) {
          const accountU8a = (0, _utilCrypto.decodeAddress)(address);
          found = accounts.find((account) => (0, _util.u8aEq)((0, _utilCrypto.decodeAddress)(account.address), accountU8a));
        }
        if (!found) {
          throw new Error(`web3FromAddress: Unable to find injected ${address}`);
        }
        return web3FromSource(found.meta.source);
      }
      async function web3ListRpcProviders(source) {
        const {
          provider
        } = await web3FromSource(source);
        if (!provider) {
          console.warn(`Extension ${source} does not expose any provider`);
          return null;
        }
        return provider.listProviders();
      }
      async function web3UseRpcProvider(source, key) {
        const {
          provider
        } = await web3FromSource(source);
        if (!provider) {
          throw new Error(`Extension ${source} does not expose any provider`);
        }
        const meta = await provider.startProvider(key);
        return {
          meta,
          provider
        };
      }
    }
  });

  // node_modules/@polkadot/extension-dapp/index.cjs
  var require_extension_dapp = __commonJS({
    "node_modules/@polkadot/extension-dapp/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _bundle = require_bundle5();
      Object.keys(_bundle).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (key in exports && exports[key] === _bundle[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _bundle[key];
          }
        });
      });
    }
  });

  // node_modules/@litentry/polkasignin-client/lib/sign-challenge.js
  var require_sign_challenge = __commonJS({
    "node_modules/@litentry/polkasignin-client/lib/sign-challenge.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.signChallenge = void 0;
      async function signChallenge2(account, challenge) {
        const { web3FromSource } = await Promise.resolve().then(() => __importStar(require_extension_dapp()));
        const injector = await web3FromSource(account.meta.source);
        if (injector.signer.signRaw) {
          const { signature } = await injector.signer.signRaw({
            type: "payload",
            address: account.address,
            data: challenge
          });
          return signature;
        }
        throw new Error("Account has no signer");
      }
      exports.signChallenge = signChallenge2;
    }
  });

  // node_modules/@litentry/polkasignin-client/lib/inject-accounts.js
  var require_inject_accounts = __commonJS({
    "node_modules/@litentry/polkasignin-client/lib/inject-accounts.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.injectAccounts = void 0;
      async function injectAccounts2(appName) {
        const { web3Enable, web3Accounts } = await Promise.resolve().then(() => __importStar(require_extension_dapp()));
        const extensions = await web3Enable(appName);
        if (!extensions.length) {
          throw new Error("Polkadot extension not found");
        }
        const accounts = await web3Accounts();
        return accounts;
      }
      exports.injectAccounts = injectAccounts2;
    }
  });

  // node_modules/@litentry/polkasignin-client/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/@litentry/polkasignin-client/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.injectAccounts = exports.signChallenge = void 0;
      var sign_challenge_1 = require_sign_challenge();
      Object.defineProperty(exports, "signChallenge", { enumerable: true, get: function() {
        return sign_challenge_1.signChallenge;
      } });
      var inject_accounts_1 = require_inject_accounts();
      Object.defineProperty(exports, "injectAccounts", { enumerable: true, get: function() {
        return inject_accounts_1.injectAccounts;
      } });
    }
  });

  // src/app.jsx
  var polkaSignInClient = __toESM(require_lib2());
  var contentWrapper = (container) => {
    const setContent = (content, className) => {
      container.className = className;
      container.innerHTML = "";
      let el = content;
      if (typeof content === "string") {
        el = document.createElement("span");
        el.innerHTML = content;
      }
      container.appendChild(el);
    };
    return { setContent };
  };
  var getAccounts = (container, clientName) => new Promise(async (resolve) => {
    const attemptInjectAccounts = async (firstAttempt) => {
      try {
        resolve(await polkaSignInClient.injectAccounts(clientName));
      } catch (e) {
        if (firstAttempt) {
          container.setContent('<p>To sign in using Polkadot you must first install the Polkadot{.js} extension</p><a href="https://polkadot.js.org/extension/" class="button">Get the Polkadot{.js} extension</a>', "install");
        }
        setTimeout(attemptInjectAccounts, 1e3);
      }
    };
    attemptInjectAccounts(true);
  });
  var askUserToSelectAnAccount = (container, accounts) => new Promise((resolve) => {
    const accountSelectionContainerEl = document.createElement("div");
    const titleEl = document.createElement("h2");
    titleEl.innerHTML = "Select an account";
    accountSelectionContainerEl.appendChild(titleEl);
    for (const account of accounts) {
      const accountEl = document.createElement("button");
      accountEl.innerText = account.meta.name;
      accountEl.onclick = () => resolve(account);
      accountSelectionContainerEl.appendChild(accountEl);
    }
    container.setContent(accountSelectionContainerEl);
  });
  var addToForm = (form, data) => {
    for (let [name, value] of Object.entries(data)) {
      const el = document.createElement("input");
      el.value = value;
      el.name = name;
      form.appendChild(el);
    }
    return form;
  };
  var submitAuth = (address, challenge, signedChallenge) => {
    const form = document.createElement("form");
    form.action = `/login${window.location.search}`;
    form.method = "post";
    document.body.appendChild(form);
    addToForm(form, { address, challenge, signedChallenge }).submit();
  };
  window.polkaSignIn = async (containerEl, clientName, challenge) => {
    const container = contentWrapper(containerEl);
    try {
      container.setContent("Loading...", "loading");
      const accounts = await getAccounts(container, clientName);
      const account = accounts.length === 1 ? accounts[0] : await askUserToSelectAnAccount(container, accounts);
      const signedChallenge = await polkaSignInClient.signChallenge(account, challenge);
      submitAuth(account.address, challenge, signedChallenge);
    } catch (e) {
      console.log(e);
      container.setContent("<h2>Error</h2> <p>Unexpected error occurred</p>", "error");
      setTimeout(() => {
        const returnLocation = new URLSearchParams(window.location.search).get("redirect_uri");
        const separator = returnLocation.includes("?") ? "&" : "?";
        window.location = returnLocation + separator + "error=1";
      }, 2e3);
    }
  };
})();
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */

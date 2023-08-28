// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4InDC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _polyfill = require("@babel/polyfill");
var _loginJs = require("./login.js");
var _updateSettingsJs = require("./updateSettings.js");
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
const mapElmt = document.getElementById("map");
const loginFormElmt = document.querySelector(".form--login");
const logoutBtnElmt = document.querySelector(".nav__el--logout");
const userDataFormElmt = document.querySelector(".form-user-data");
const userPasswordFormElmt = document.querySelector(".form-user-password");
if (mapElmt) {
    const locations = JSON.parse(mapElmt.dataset.locations);
    (0, _mapJsDefault.default)(locations);
}
if (loginFormElmt) loginFormElmt.addEventListener("submit", (event)=>{
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    (0, _loginJs.login)(email, password);
});
if (logoutBtnElmt) logoutBtnElmt.addEventListener("click", (0, _loginJs.logout));
if (userDataFormElmt) userDataFormElmt.addEventListener("submit", (event)=>{
    event.preventDefault();
    const form = new FormData();
    form.append("name", document.getElementById("name").value);
    form.append("email", document.getElementById("email").value);
    form.append("photo", document.getElementById("photo").files[0]);
    (0, _updateSettingsJs.updateSettings)(form, "settings");
});
if (userPasswordFormElmt) userPasswordFormElmt.addEventListener("submit", async (event)=>{
    event.preventDefault();
    const currentPassword = document.getElementById("password-current").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    await (0, _updateSettingsJs.updateSettings)({
        currentPassword,
        password,
        passwordConfirm
    }, "password");
    document.getElementById("password-current").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password-confirm").value = "";
});

},{"@babel/polyfill":"1RrH3","./login.js":"a1kpn","./updateSettings.js":"fRaFS","./map.js":"hOTrO","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"1RrH3":[function(require,module,exports) {
"use strict";
require("f50de0aa433a589b");
var _global = _interopRequireDefault(require("4142986752a079d4"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning.");
_global["default"]._babelPolyfill = true;

},{"f50de0aa433a589b":"ikqay","4142986752a079d4":"ls91z"}],"ikqay":[function(require,module,exports) {
"use strict";
require("20d5adc6d0f9d0ec");
require("5393e06e6601db86");
require("b5ec37d53a8038a3");
require("3b1c6638424f7cc9");
require("a94df941b08ed34b");
require("27f1c6610972fa8f");
require("736edc9ff1c820fc");
require("e913642ec1cdbfc0");
require("bbc44ee8d910fc67");
require("78c9cbd887a23ab3");
require("6280d07c0d3b0e0d");
require("889779cb2fdd24f4");
require("a3f453df0c362f3a");
require("5149e6c04d66148b");

},{"20d5adc6d0f9d0ec":"9Epvl","5393e06e6601db86":"eh6i0","b5ec37d53a8038a3":"kA7pl","3b1c6638424f7cc9":"j3Bkf","a94df941b08ed34b":"bFEW4","27f1c6610972fa8f":"22mY2","736edc9ff1c820fc":"kERHX","e913642ec1cdbfc0":"bIz9A","bbc44ee8d910fc67":"7fWrq","78c9cbd887a23ab3":"6i0X2","6280d07c0d3b0e0d":"1GJUe","889779cb2fdd24f4":"cVpS2","a3f453df0c362f3a":"9YIj3","5149e6c04d66148b":"8zdwO"}],"9Epvl":[function(require,module,exports) {
require("3da956e7429fddca");
require("a1daecb51c726868");
require("90b93ac0707ed119");
require("6d74d3580a952b94");
require("b110fe907df367bb");
require("d0b2324ffc5d8c73");
require("d5180b78b2c64df0");
require("85fedcbfdc63fcf3");
require("b70ff16f60336c97");
require("e7759c73e569a52f");
require("6ecb5a9b4dee0add");
require("fb7629de70a7834");
require("d5d35b08dc3bbb2c");
require("e2eabbbb1ecb8a61");
require("5d19921c14f3a80");
require("ea7a74bd96a721c3");
require("7ac8373cd0120e59");
require("c125b3fc9a9af5fd");
require("18a3574671c132b1");
require("897f72dee5659285");
require("199bb55052b45dca");
require("97fe82716459b981");
require("e8cb8899a6679ee3");
require("5971297cc8ccca23");
require("793459ebe9528614");
require("d9b5f69822a70295");
require("a90c0d5df2c1a775");
require("a8901c7915aee7d7");
require("74b7c173bed97a98");
require("de66aff6caae8069");
require("fc47b5aaa26b0c2");
require("a6080778a1bd8f33");
require("f89e60a6c43a9a26");
require("dc35b62a9be52ec0");
require("a45969ab4217c16");
require("e35abc811fc1a094");
require("9cdc42688e364ffc");
require("6c65bdd276569a67");
require("bdab1a280f847356");
require("d89677a2265a8f1d");
require("3b1b1a03114daf81");
require("69dcea93bb3d1126");
require("74337fc26fe7bb70");
require("7412a2ba32c964de");
require("1ea321a6e8693986");
require("2bfe717225e3578c");
require("a79aac0d4f1056fc");
require("922c7ea7fa9b6a86");
require("187144ccf0cb89d8");
require("f584b19977c1b0c");
require("e8d1912c0fdbf96d");
require("49d18c8667987a31");
require("6f592f021031154f");
require("554d431264e7773f");
require("826ec509b22fafe");
require("6164b630aa5d9d2d");
require("5ea290feaaf5ae54");
require("f92a3893e2b9a81");
require("eb5b8f35973aa900");
require("8afc6fea7a345f35");
require("4dd8a1e2dd3f3c3c");
require("d44ef7fd0fe04593");
require("7fdff4335fe79055");
require("dc7f6b8e673404ee");
require("27ef0faa27cba53c");
require("85d1f3bb61fd5b57");
require("e84cf00873a0c3b9");
require("b82adf45ca744695");
require("6cd01848d44336e1");
require("39b80e92b4a5042e");
require("abe9eaeedae05b05");
require("b836c5f01ee64c78");
require("278defafd389aeaa");
require("10d6657cec9e8a00");
require("3207c49ef6f58f80");
require("1c3d5d9d3fedc1c5");
require("67255491d0ca0a6f");
require("9f8a5e6c95154cac");
require("be603317597f489f");
require("4954f6a5612b686f");
require("f562c7c7a6a29e23");
require("a74ccbd6872aec7c");
require("f01249d3558ff814");
require("ab01a99fb5a4aab");
require("a80c1129c1f5ea49");
require("2047b8993e780898");
require("44e123e8481121a9");
require("6183c9e7280d8a51");
require("d400b58d551035b1");
require("8578cf303722bddb");
require("a8347784a43f5487");
require("47e007d180f0fcca");
require("e7f2b57266cd0b76");
require("11590f083e3441a");
require("418fd34894515bf6");
require("5cdbcb445ffc33df");
require("95c8cb8627141f3a");
require("6f4e8798655513b7");
require("b7cf128545923423");
require("f32cb7f60b1c5757");
require("2129799c6bad4b9d");
require("c85757628b40cedb");
require("e58c2c918f5fd380");
require("7f20f079a9dde19");
require("7d025150509f6855");
require("f318be8704faf468");
require("90aa678e495927d9");
require("d050f58df6ebad0d");
require("4038f36f191c2fbc");
require("9c18618ba51b71e1");
require("14f3d45e48b5bc6c");
require("b46a332f28e1f984");
require("8f1a924b47fa1f91");
require("ac7648351f6f6344");
require("763f39697c3eb840");
require("ddb11562352f03c8");
require("42f839c0e73d230a");
require("d938fe43fb9536dc");
require("64889fa4e6f4a1ec");
require("abc365f420497a92");
require("c99edc24fa5e885a");
require("d084b4f516879db4");
require("3e884d5c5fc604df");
require("4b900a7d4ae7f9f6");
require("bb31ae4607dbf33e");
require("f06c0130b7cc6496");
require("e1dc90de80e3e03d");
require("9e5e8fffbd4124c0");
require("99390bb26a919163");
require("e60a1db1f00e6b14");
require("9cdad9c245d226fb");
require("73f9fc58f1bd4a71");
require("e7d07df6dcfaddf4");
require("ae935fe0a6268290");
require("57f9c5b010af6440");
require("3592abd76f4b334c");
require("b69db544df79ec7");
require("112cf7bffdad691");
module.exports = require("4510f81ff0745a84");

},{"3da956e7429fddca":"jBkNG","a1daecb51c726868":"g6Xh9","90b93ac0707ed119":"etKNn","6d74d3580a952b94":"106Fz","b110fe907df367bb":"jxisx","d0b2324ffc5d8c73":"1jlJ1","d5180b78b2c64df0":"044l9","85fedcbfdc63fcf3":"355Yu","b70ff16f60336c97":"ekZXU","e7759c73e569a52f":"7gkGr","6ecb5a9b4dee0add":"ehUDx","fb7629de70a7834":"cFSsg","d5d35b08dc3bbb2c":"eJbFZ","e2eabbbb1ecb8a61":"3HhEn","5d19921c14f3a80":"5t01c","ea7a74bd96a721c3":"ecegJ","7ac8373cd0120e59":"5iddS","c125b3fc9a9af5fd":"a7ALT","18a3574671c132b1":"ks8SA","897f72dee5659285":"bZ7AX","199bb55052b45dca":"ldFBt","97fe82716459b981":"3dixI","e8cb8899a6679ee3":"jbL1b","5971297cc8ccca23":"aRoRu","793459ebe9528614":"9X71K","d9b5f69822a70295":"3lB3v","a90c0d5df2c1a775":"4HmvT","a8901c7915aee7d7":"aXlw3","74b7c173bed97a98":"hJBxX","de66aff6caae8069":"dy6Bh","fc47b5aaa26b0c2":"gX3mP","a6080778a1bd8f33":"k2Nfh","f89e60a6c43a9a26":"7hWxV","dc35b62a9be52ec0":"jY7WX","a45969ab4217c16":"fVYfx","e35abc811fc1a094":"2Iqnt","9cdc42688e364ffc":"20QhW","6c65bdd276569a67":"cFOYJ","bdab1a280f847356":"gqspx","d89677a2265a8f1d":"ijel4","3b1b1a03114daf81":"9ccsA","69dcea93bb3d1126":"86f3X","74337fc26fe7bb70":"cuwbq","7412a2ba32c964de":"eaKKE","1ea321a6e8693986":"iDBSi","2bfe717225e3578c":"1ydWn","a79aac0d4f1056fc":"BmVbU","922c7ea7fa9b6a86":"3apRe","187144ccf0cb89d8":"fRvXM","f584b19977c1b0c":"3Au9l","e8d1912c0fdbf96d":"hQGyd","49d18c8667987a31":"iLXqO","6f592f021031154f":"9IPIo","554d431264e7773f":"6Z9gW","826ec509b22fafe":"fq5cq","6164b630aa5d9d2d":"eDp2w","5ea290feaaf5ae54":"8VniD","f92a3893e2b9a81":"lSLxz","eb5b8f35973aa900":"bRl17","8afc6fea7a345f35":"40I9N","4dd8a1e2dd3f3c3c":"4xx2m","d44ef7fd0fe04593":"7vkWX","7fdff4335fe79055":"gIoRl","dc7f6b8e673404ee":"ezEoV","27ef0faa27cba53c":"3MxGL","85d1f3bb61fd5b57":"73dmF","e84cf00873a0c3b9":"8piz2","b82adf45ca744695":"abOuF","6cd01848d44336e1":"1ES9H","39b80e92b4a5042e":"d07nz","abe9eaeedae05b05":"kg2AR","b836c5f01ee64c78":"5kTxS","278defafd389aeaa":"2TKZL","10d6657cec9e8a00":"fpLeB","3207c49ef6f58f80":"l1fSB","1c3d5d9d3fedc1c5":"iQyIN","67255491d0ca0a6f":"cE8md","9f8a5e6c95154cac":"9fDbW","be603317597f489f":"d3CQs","4954f6a5612b686f":"aaoJm","f562c7c7a6a29e23":"jegqf","a74ccbd6872aec7c":"bDkWX","f01249d3558ff814":"8pFiq","ab01a99fb5a4aab":"2BjMO","a80c1129c1f5ea49":"keegR","2047b8993e780898":"1f4BH","44e123e8481121a9":"8iGBP","6183c9e7280d8a51":"gW3DL","d400b58d551035b1":"dXr0X","8578cf303722bddb":"lgG0H","a8347784a43f5487":"hYmWN","47e007d180f0fcca":"3t0cc","e7f2b57266cd0b76":"ewYWL","11590f083e3441a":"GonOa","418fd34894515bf6":"by5ly","5cdbcb445ffc33df":"bjm3c","95c8cb8627141f3a":"8R1kH","6f4e8798655513b7":"fvDo8","b7cf128545923423":"kiiMz","f32cb7f60b1c5757":"8MwXZ","2129799c6bad4b9d":"dxUy0","c85757628b40cedb":"kClbE","e58c2c918f5fd380":"8Yu8V","7f20f079a9dde19":"vCATP","7d025150509f6855":"6RK4Q","f318be8704faf468":"keAWg","90aa678e495927d9":"fzQ43","d050f58df6ebad0d":"hFfcj","4038f36f191c2fbc":"gU1le","9c18618ba51b71e1":"3COB4","14f3d45e48b5bc6c":"b2gJ2","b46a332f28e1f984":"k746h","8f1a924b47fa1f91":"bgveP","ac7648351f6f6344":"hg7VL","763f39697c3eb840":"8d9Iy","ddb11562352f03c8":"bTWU9","42f839c0e73d230a":"4Dpkq","d938fe43fb9536dc":"30GXM","64889fa4e6f4a1ec":"43R0v","abc365f420497a92":"gjSDp","c99edc24fa5e885a":"yM90S","d084b4f516879db4":"9mohQ","3e884d5c5fc604df":"3n5MH","4b900a7d4ae7f9f6":"jWTK4","bb31ae4607dbf33e":"c2YGM","f06c0130b7cc6496":"fmLlC","e1dc90de80e3e03d":"26zWE","9e5e8fffbd4124c0":"iTk2U","99390bb26a919163":"gmZzJ","e60a1db1f00e6b14":"WPGLq","9cdad9c245d226fb":"5b2ND","73f9fc58f1bd4a71":"7WnpS","e7d07df6dcfaddf4":"g0R2w","ae935fe0a6268290":"1HqIf","57f9c5b010af6440":"SGGfl","3592abd76f4b334c":"ekS7r","b69db544df79ec7":"jmapP","112cf7bffdad691":"fkFTs","4510f81ff0745a84":"dgbK5"}],"jBkNG":[function(require,module,exports) {
"use strict";
// ECMAScript 6 symbols shim
var global = require("85b674bfde1becc8");
var has = require("5202605509dac3e3");
var DESCRIPTORS = require("e7a81e365f7c1b2e");
var $export = require("a8ec227e38a697a9");
var redefine = require("cecf64984c824a62");
var META = require("ba9f490c087e9b9d").KEY;
var $fails = require("fcfebb68ffabd950");
var shared = require("464a781dc1ce7379");
var setToStringTag = require("121a432568465270");
var uid = require("5899792a6e9f0392");
var wks = require("afce0118fa7f0f48");
var wksExt = require("eb15d0637350a9a3");
var wksDefine = require("d19b51218798dc16");
var enumKeys = require("18e47c57a38ba0e");
var isArray = require("cbfdd94713bf657d");
var anObject = require("bf0b742f0c2891f2");
var isObject = require("57d3d3f74a6d0a39");
var toObject = require("8a3f4f33a87b8393");
var toIObject = require("fce19ba526ae2909");
var toPrimitive = require("157ccd489cf6719a");
var createDesc = require("f032df6fddc255dc");
var _create = require("effb60b2814cace4");
var gOPNExt = require("526baba19c621e08");
var $GOPD = require("9af912d533524855");
var $GOPS = require("41bb3df691eb9c1b");
var $DP = require("3fcdf396ba1b3b09");
var $keys = require("9053f2b8d4078173");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = "prototype";
var HIDDEN = wks("_hidden");
var TO_PRIMITIVE = wks("toPrimitive");
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared("symbol-registry");
var AllSymbols = shared("symbols");
var OPSymbols = shared("op-symbols");
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == "function" && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function() {
    return _create(dP({}, "a", {
        get: function() {
            return dP(this, "a", {
                value: 7
            }).a;
        }
    })).a != 7;
}) ? function(it, key, D) {
    var protoDesc = gOPD(ObjectProto, key);
    if (protoDesc) delete ObjectProto[key];
    dP(it, key, D);
    if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;
var wrap = function(tag) {
    var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
    sym._k = tag;
    return sym;
};
var isSymbol = USE_NATIVE && typeof $Symbol.iterator == "symbol" ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    return it instanceof $Symbol;
};
var $defineProperty = function defineProperty(it, key, D) {
    if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
    anObject(it);
    key = toPrimitive(key, true);
    anObject(D);
    if (has(AllSymbols, key)) {
        if (!D.enumerable) {
            if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
            it[HIDDEN][key] = true;
        } else {
            if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
            D = _create(D, {
                enumerable: createDesc(0, false)
            });
        }
        return setSymbolDesc(it, key, D);
    }
    return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
    anObject(it);
    var keys = enumKeys(P = toIObject(P));
    var i = 0;
    var l = keys.length;
    var key;
    while(l > i)$defineProperty(it, key = keys[i++], P[key]);
    return it;
};
var $create = function create(it, P) {
    return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key = toPrimitive(key, true));
    if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    it = toIObject(it);
    key = toPrimitive(key, true);
    if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
    var D = gOPD(it, key);
    if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = gOPN(toIObject(it));
    var result = [];
    var i = 0;
    var key;
    while(names.length > i)if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
    return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto;
    var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
    var result = [];
    var i = 0;
    var key;
    while(names.length > i)if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
    return result;
};
// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
    $Symbol = function Symbol() {
        if (this instanceof $Symbol) throw TypeError("Symbol is not a constructor!");
        var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
        var $set = function(value) {
            if (this === ObjectProto) $set.call(OPSymbols, value);
            if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
            setSymbolDesc(this, tag, createDesc(1, value));
        };
        if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
            configurable: true,
            set: $set
        });
        return wrap(tag);
    };
    redefine($Symbol[PROTOTYPE], "toString", function toString() {
        return this._k;
    });
    $GOPD.f = $getOwnPropertyDescriptor;
    $DP.f = $defineProperty;
    require("f13518c7f553caab").f = gOPNExt.f = $getOwnPropertyNames;
    require("f33ee2929fe644c7").f = $propertyIsEnumerable;
    $GOPS.f = $getOwnPropertySymbols;
    if (DESCRIPTORS && !require("fff988306c4f1972")) redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true);
    wksExt.f = function(name) {
        return wrap(wks(name));
    };
}
$export($export.G + $export.W + $export.F * !USE_NATIVE, {
    Symbol: $Symbol
});
for(var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
"hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
for(var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;)wksDefine(wellKnownSymbols[k++]);
$export($export.S + $export.F * !USE_NATIVE, "Symbol", {
    // 19.4.2.1 Symbol.for(key)
    "for": function(key) {
        return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
        if (!isSymbol(sym)) throw TypeError(sym + " is not a symbol!");
        for(var key in SymbolRegistry)if (SymbolRegistry[key] === sym) return key;
    },
    useSetter: function() {
        setter = true;
    },
    useSimple: function() {
        setter = false;
    }
});
$export($export.S + $export.F * !USE_NATIVE, "Object", {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols
});
// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function() {
    $GOPS.f(1);
});
$export($export.S + $export.F * FAILS_ON_PRIMITIVES, "Object", {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
        return $GOPS.f(toObject(it));
    }
});
// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
    var S = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols
    return _stringify([
        S
    ]) != "[null]" || _stringify({
        a: S
    }) != "{}" || _stringify(Object(S)) != "{}";
})), "JSON", {
    stringify: function stringify(it) {
        var args = [
            it
        ];
        var i = 1;
        var replacer, $replacer;
        while(arguments.length > i)args.push(arguments[i++]);
        $replacer = replacer = args[1];
        if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
        if (!isArray(replacer)) replacer = function(key, value) {
            if (typeof $replacer == "function") value = $replacer.call(this, key, value);
            if (!isSymbol(value)) return value;
        };
        args[1] = replacer;
        return _stringify.apply($JSON, args);
    }
});
// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require("10fbd33c0b268827")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, "Symbol");
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, "Math", true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, "JSON", true);

},{"85b674bfde1becc8":"aN7D9","5202605509dac3e3":"hCETW","e7a81e365f7c1b2e":"cTJEh","a8ec227e38a697a9":"V6uGr","cecf64984c824a62":"1Nq8R","ba9f490c087e9b9d":"k4QUD","fcfebb68ffabd950":"hJvAh","464a781dc1ce7379":"d2nK8","121a432568465270":"35t6Z","5899792a6e9f0392":"euCLH","afce0118fa7f0f48":"irAMb","eb15d0637350a9a3":"a0pdl","d19b51218798dc16":"5ltJ1","18e47c57a38ba0e":"b4QzN","cbfdd94713bf657d":"7gyM5","bf0b742f0c2891f2":"jvvZN","57d3d3f74a6d0a39":"8MCxb","8a3f4f33a87b8393":"88RFO","fce19ba526ae2909":"bg6wm","157ccd489cf6719a":"esus5","f032df6fddc255dc":"apD9J","effb60b2814cace4":"1Vr2z","526baba19c621e08":"1Yqy4","9af912d533524855":"amyyc","41bb3df691eb9c1b":"94b1k","3fcdf396ba1b3b09":"kXoVM","9053f2b8d4078173":"2PUHx","f13518c7f553caab":"8ObWh","f33ee2929fe644c7":"3iwSK","fff988306c4f1972":"fdMee","10fbd33c0b268827":"6kOvw"}],"aN7D9":[function(require,module,exports) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
if (typeof __g == "number") __g = global; // eslint-disable-line no-undef

},{}],"hCETW":[function(require,module,exports) {
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
};

},{}],"cTJEh":[function(require,module,exports) {
// Thank's IE8 for his funny defineProperty
module.exports = !require("c3ddebb06976432e")(function() {
    return Object.defineProperty({}, "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"c3ddebb06976432e":"hJvAh"}],"hJvAh":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (e) {
        return true;
    }
};

},{}],"V6uGr":[function(require,module,exports) {
var global = require("42f6b821d919e9e3");
var core = require("c78b0a9a56aa2fa8");
var hide = require("31d57f90251ab520");
var redefine = require("ced7c23f8cd6b0bf");
var ctx = require("242cc4d0fd4e0ba");
var PROTOTYPE = "prototype";
var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;
    for(key in source){
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined;
        // export native or passed
        out = (own ? target : source)[key];
        // bind timers to global for call from export context
        exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
        // extend global
        if (target) redefine(target, key, out, type & $export.U);
        // export
        if (exports[key] != out) hide(exports, key, exp);
        if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
};
global.core = core;
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"42f6b821d919e9e3":"aN7D9","c78b0a9a56aa2fa8":"dgbK5","31d57f90251ab520":"6kOvw","ced7c23f8cd6b0bf":"1Nq8R","242cc4d0fd4e0ba":"8I23f"}],"dgbK5":[function(require,module,exports) {
var core = module.exports = {
    version: "2.6.12"
};
if (typeof __e == "number") __e = core; // eslint-disable-line no-undef

},{}],"6kOvw":[function(require,module,exports) {
var dP = require("d8943525bab1b2ec");
var createDesc = require("25bf6cacb7cbb32e");
module.exports = require("2ee055831716c8bb") ? function(object, key, value) {
    return dP.f(object, key, createDesc(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"d8943525bab1b2ec":"kXoVM","25bf6cacb7cbb32e":"apD9J","2ee055831716c8bb":"cTJEh"}],"kXoVM":[function(require,module,exports) {
var anObject = require("b930f648b0f27382");
var IE8_DOM_DEFINE = require("f0c219e68320c9ed");
var toPrimitive = require("c690e12f2fe9bab0");
var dP = Object.defineProperty;
exports.f = require("1bceab5c9179ba04") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return dP(O, P, Attributes);
    } catch (e) {}
    if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"b930f648b0f27382":"jvvZN","f0c219e68320c9ed":"g046M","c690e12f2fe9bab0":"esus5","1bceab5c9179ba04":"cTJEh"}],"jvvZN":[function(require,module,exports) {
var isObject = require("56587b8863452108");
module.exports = function(it) {
    if (!isObject(it)) throw TypeError(it + " is not an object!");
    return it;
};

},{"56587b8863452108":"8MCxb"}],"8MCxb":[function(require,module,exports) {
module.exports = function(it) {
    return typeof it === "object" ? it !== null : typeof it === "function";
};

},{}],"g046M":[function(require,module,exports) {
module.exports = !require("a100528cf6641f10") && !require("ae70d15ac8e4b8ac")(function() {
    return Object.defineProperty(require("e10245d0320221b6")("div"), "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"a100528cf6641f10":"cTJEh","ae70d15ac8e4b8ac":"hJvAh","e10245d0320221b6":"62KT7"}],"62KT7":[function(require,module,exports) {
var isObject = require("f5128ecc02fb78bd");
var document = require("e008eb78a0a4d5d9").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return is ? document.createElement(it) : {};
};

},{"f5128ecc02fb78bd":"8MCxb","e008eb78a0a4d5d9":"aN7D9"}],"esus5":[function(require,module,exports) {
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require("c2dffef8c8a7e11e");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S) {
    if (!isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
};

},{"c2dffef8c8a7e11e":"8MCxb"}],"apD9J":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"1Nq8R":[function(require,module,exports) {
var global = require("3b38cb7bba0034de");
var hide = require("37b3e928e2cfb7b2");
var has = require("bd4fb43c56216f66");
var SRC = require("47999eeb3f9b97e1")("src");
var $toString = require("212e71942acb17f");
var TO_STRING = "toString";
var TPL = ("" + $toString).split(TO_STRING);
require("bd522f9ac2f77541").inspectSource = function(it) {
    return $toString.call(it);
};
(module.exports = function(O, key, val, safe) {
    var isFunction = typeof val == "function";
    if (isFunction) has(val, "name") || hide(val, "name", key);
    if (O[key] === val) return;
    if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key)));
    if (O === global) O[key] = val;
    else if (!safe) {
        delete O[key];
        hide(O, key, val);
    } else if (O[key]) O[key] = val;
    else hide(O, key, val);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
    return typeof this == "function" && this[SRC] || $toString.call(this);
});

},{"3b38cb7bba0034de":"aN7D9","37b3e928e2cfb7b2":"6kOvw","bd4fb43c56216f66":"hCETW","47999eeb3f9b97e1":"euCLH","212e71942acb17f":"iGPXG","bd522f9ac2f77541":"dgbK5"}],"euCLH":[function(require,module,exports) {
var id = 0;
var px = Math.random();
module.exports = function(key) {
    return "Symbol(".concat(key === undefined ? "" : key, ")_", (++id + px).toString(36));
};

},{}],"iGPXG":[function(require,module,exports) {
module.exports = require("a0b71ba6307b2840")("native-function-to-string", Function.toString);

},{"a0b71ba6307b2840":"d2nK8"}],"d2nK8":[function(require,module,exports) {
var core = require("90e03ff0cf1ea41f");
var global = require("61da234d01f94041");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: core.version,
    mode: require("25c466c2e133b76a") ? "pure" : "global",
    copyright: "\xa9 2020 Denis Pushkarev (zloirock.ru)"
});

},{"90e03ff0cf1ea41f":"dgbK5","61da234d01f94041":"aN7D9","25c466c2e133b76a":"fdMee"}],"fdMee":[function(require,module,exports) {
module.exports = false;

},{}],"8I23f":[function(require,module,exports) {
// optional / simple context binding
var aFunction = require("2e030b8cbf2f950a");
module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch(length){
        case 1:
            return function(a) {
                return fn.call(that, a);
            };
        case 2:
            return function(a, b) {
                return fn.call(that, a, b);
            };
        case 3:
            return function(a, b, c) {
                return fn.call(that, a, b, c);
            };
    }
    return function() {
        return fn.apply(that, arguments);
    };
};

},{"2e030b8cbf2f950a":"cWXNC"}],"cWXNC":[function(require,module,exports) {
module.exports = function(it) {
    if (typeof it != "function") throw TypeError(it + " is not a function!");
    return it;
};

},{}],"k4QUD":[function(require,module,exports) {
var META = require("40ec7f2c81fb4198")("meta");
var isObject = require("498c38da4bdfa764");
var has = require("d90706b349d15293");
var setDesc = require("857af6be1be64bb4").f;
var id = 0;
var isExtensible = Object.isExtensible || function() {
    return true;
};
var FREEZE = !require("24f6d71b7063add0")(function() {
    return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it) {
    setDesc(it, META, {
        value: {
            i: "O" + ++id,
            w: {} // weak collections IDs
        }
    });
};
var fastKey = function(it, create) {
    // return primitive with prefix
    if (!isObject(it)) return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
    if (!has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return "F";
        // not necessary to add metadata
        if (!create) return "E";
        // add missing metadata
        setMeta(it);
    // return object ID
    }
    return it[META].i;
};
var getWeak = function(it, create) {
    if (!has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true;
        // not necessary to add metadata
        if (!create) return false;
        // add missing metadata
        setMeta(it);
    // return hash weak collections IDs
    }
    return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
    return it;
};
var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
};

},{"40ec7f2c81fb4198":"euCLH","498c38da4bdfa764":"8MCxb","d90706b349d15293":"hCETW","857af6be1be64bb4":"kXoVM","24f6d71b7063add0":"hJvAh"}],"35t6Z":[function(require,module,exports) {
var def = require("55a39bb0862b6531").f;
var has = require("a1951599cc84354c");
var TAG = require("4639ea2dcb5eafaa")("toStringTag");
module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
        configurable: true,
        value: tag
    });
};

},{"55a39bb0862b6531":"kXoVM","a1951599cc84354c":"hCETW","4639ea2dcb5eafaa":"irAMb"}],"irAMb":[function(require,module,exports) {
var store = require("e78351b80ca7a00")("wks");
var uid = require("e20147c7312d8aa4");
var Symbol = require("9e2a9103e3f66d3e").Symbol;
var USE_SYMBOL = typeof Symbol == "function";
var $exports = module.exports = function(name) {
    return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)("Symbol." + name));
};
$exports.store = store;

},{"e78351b80ca7a00":"d2nK8","e20147c7312d8aa4":"euCLH","9e2a9103e3f66d3e":"aN7D9"}],"a0pdl":[function(require,module,exports) {
exports.f = require("e310a3bb0fc3f9e2");

},{"e310a3bb0fc3f9e2":"irAMb"}],"5ltJ1":[function(require,module,exports) {
var global = require("7cbf62177fb21053");
var core = require("257cd460035f5963");
var LIBRARY = require("28311ba0defda054");
var wksExt = require("e8d1f29c1f3cf4c3");
var defineProperty = require("90cac1157dd94c90").f;
module.exports = function(name) {
    var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
    if (name.charAt(0) != "_" && !(name in $Symbol)) defineProperty($Symbol, name, {
        value: wksExt.f(name)
    });
};

},{"7cbf62177fb21053":"aN7D9","257cd460035f5963":"dgbK5","28311ba0defda054":"fdMee","e8d1f29c1f3cf4c3":"a0pdl","90cac1157dd94c90":"kXoVM"}],"b4QzN":[function(require,module,exports) {
// all enumerable object keys, includes symbols
var getKeys = require("19eabddac6af80db");
var gOPS = require("bee3be4f84873a98");
var pIE = require("d89a9e019c1538ac");
module.exports = function(it) {
    var result = getKeys(it);
    var getSymbols = gOPS.f;
    if (getSymbols) {
        var symbols = getSymbols(it);
        var isEnum = pIE.f;
        var i = 0;
        var key;
        while(symbols.length > i)if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
    return result;
};

},{"19eabddac6af80db":"2PUHx","bee3be4f84873a98":"94b1k","d89a9e019c1538ac":"3iwSK"}],"2PUHx":[function(require,module,exports) {
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require("859364a8448e5180");
var enumBugKeys = require("d512a3fad33f1923");
module.exports = Object.keys || function keys(O) {
    return $keys(O, enumBugKeys);
};

},{"859364a8448e5180":"ad0x7","d512a3fad33f1923":"hSF46"}],"ad0x7":[function(require,module,exports) {
var has = require("c45bd25336764313");
var toIObject = require("8822f3b74e600abc");
var arrayIndexOf = require("bb4e5f9e6db0d166")(false);
var IE_PROTO = require("a4a9e66f2bae18ba")("IE_PROTO");
module.exports = function(object, names) {
    var O = toIObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)if (key != IE_PROTO) has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (has(O, key = names[i++])) ~arrayIndexOf(result, key) || result.push(key);
    return result;
};

},{"c45bd25336764313":"hCETW","8822f3b74e600abc":"bg6wm","bb4e5f9e6db0d166":"f0gsM","a4a9e66f2bae18ba":"kaalj"}],"bg6wm":[function(require,module,exports) {
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require("408d3ef1b927c5b3");
var defined = require("1004f8fa2c8f7708");
module.exports = function(it) {
    return IObject(defined(it));
};

},{"408d3ef1b927c5b3":"fCne3","1004f8fa2c8f7708":"fDNME"}],"fCne3":[function(require,module,exports) {
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require("d1c5bff517d41312");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == "String" ? it.split("") : Object(it);
};

},{"d1c5bff517d41312":"4xnMZ"}],"4xnMZ":[function(require,module,exports) {
var toString = {}.toString;
module.exports = function(it) {
    return toString.call(it).slice(8, -1);
};

},{}],"fDNME":[function(require,module,exports) {
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
};

},{}],"f0gsM":[function(require,module,exports) {
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require("9102db37e977ba53");
var toLength = require("dcdce2a1878188ff");
var toAbsoluteIndex = require("e523ffa8fd6bf25e");
module.exports = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++)if (IS_INCLUDES || index in O) {
            if (O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};

},{"9102db37e977ba53":"bg6wm","dcdce2a1878188ff":"6i4KF","e523ffa8fd6bf25e":"c8MSW"}],"6i4KF":[function(require,module,exports) {
// 7.1.15 ToLength
var toInteger = require("17c0b90d6beef225");
var min = Math.min;
module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"17c0b90d6beef225":"12G5z"}],"12G5z":[function(require,module,exports) {
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],"c8MSW":[function(require,module,exports) {
var toInteger = require("a5d5a32b7ecbc6aa");
var max = Math.max;
var min = Math.min;
module.exports = function(index, length) {
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"a5d5a32b7ecbc6aa":"12G5z"}],"kaalj":[function(require,module,exports) {
var shared = require("4d446900c2a89897")("keys");
var uid = require("17ce3fdc25b80ced");
module.exports = function(key) {
    return shared[key] || (shared[key] = uid(key));
};

},{"4d446900c2a89897":"d2nK8","17ce3fdc25b80ced":"euCLH"}],"hSF46":[function(require,module,exports) {
// IE 8- don't enum bug keys
module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");

},{}],"94b1k":[function(require,module,exports) {
exports.f = Object.getOwnPropertySymbols;

},{}],"3iwSK":[function(require,module,exports) {
exports.f = ({}).propertyIsEnumerable;

},{}],"7gyM5":[function(require,module,exports) {
// 7.2.2 IsArray(argument)
var cof = require("810608961fbe02d7");
module.exports = Array.isArray || function isArray(arg) {
    return cof(arg) == "Array";
};

},{"810608961fbe02d7":"4xnMZ"}],"88RFO":[function(require,module,exports) {
// 7.1.13 ToObject(argument)
var defined = require("3092c9db3e303294");
module.exports = function(it) {
    return Object(defined(it));
};

},{"3092c9db3e303294":"fDNME"}],"1Vr2z":[function(require,module,exports) {
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require("4617c70783084bb1");
var dPs = require("85be686972b680f0");
var enumBugKeys = require("1e22a8ce9bab03c7");
var IE_PROTO = require("4b2ec769884c77a9")("IE_PROTO");
var Empty = function() {};
var PROTOTYPE = "prototype";
// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = require("b8d885c39cc1b809")("iframe");
    var i = enumBugKeys.length;
    var lt = "<";
    var gt = ">";
    var iframeDocument;
    iframe.style.display = "none";
    require("75dbd6551c27098b").appendChild(iframe);
    iframe.src = "javascript:"; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
    return createDict();
};
module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        Empty[PROTOTYPE] = anObject(O);
        result = new Empty();
        Empty[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
    } else result = createDict();
    return Properties === undefined ? result : dPs(result, Properties);
};

},{"4617c70783084bb1":"jvvZN","85be686972b680f0":"5pKLc","1e22a8ce9bab03c7":"hSF46","4b2ec769884c77a9":"kaalj","b8d885c39cc1b809":"62KT7","75dbd6551c27098b":"lBp6O"}],"5pKLc":[function(require,module,exports) {
var dP = require("407d4ac4a36f7348");
var anObject = require("75862e41d726d770");
var getKeys = require("9dfe6dff952a669c");
module.exports = require("d9decc63dcf66a12") ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = getKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while(length > i)dP.f(O, P = keys[i++], Properties[P]);
    return O;
};

},{"407d4ac4a36f7348":"kXoVM","75862e41d726d770":"jvvZN","9dfe6dff952a669c":"2PUHx","d9decc63dcf66a12":"cTJEh"}],"lBp6O":[function(require,module,exports) {
var document = require("4f8d3f9801bd0f96").document;
module.exports = document && document.documentElement;

},{"4f8d3f9801bd0f96":"aN7D9"}],"1Yqy4":[function(require,module,exports) {
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require("93a0f28c806a24f7");
var gOPN = require("9cfaeaa18db857b6").f;
var toString = {}.toString;
var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function(it) {
    try {
        return gOPN(it);
    } catch (e) {
        return windowNames.slice();
    }
};
module.exports.f = function getOwnPropertyNames(it) {
    return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"93a0f28c806a24f7":"bg6wm","9cfaeaa18db857b6":"8ObWh"}],"8ObWh":[function(require,module,exports) {
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require("6c98bd335a7830ac");
var hiddenKeys = require("e09697e9394b5f2a").concat("length", "prototype");
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $keys(O, hiddenKeys);
};

},{"6c98bd335a7830ac":"ad0x7","e09697e9394b5f2a":"hSF46"}],"amyyc":[function(require,module,exports) {
var pIE = require("fd1b5a26bb2c0e5f");
var createDesc = require("dc68fcbccaf4b5df");
var toIObject = require("18a60dbcde707e61");
var toPrimitive = require("c8c4f6acaf89a23b");
var has = require("c0ece5d430274844");
var IE8_DOM_DEFINE = require("402f4e06b21571b");
var gOPD = Object.getOwnPropertyDescriptor;
exports.f = require("3324c2c2db82d382") ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = toIObject(O);
    P = toPrimitive(P, true);
    if (IE8_DOM_DEFINE) try {
        return gOPD(O, P);
    } catch (e) {}
    if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"fd1b5a26bb2c0e5f":"3iwSK","dc68fcbccaf4b5df":"apD9J","18a60dbcde707e61":"bg6wm","c8c4f6acaf89a23b":"esus5","c0ece5d430274844":"hCETW","402f4e06b21571b":"g046M","3324c2c2db82d382":"cTJEh"}],"g6Xh9":[function(require,module,exports) {
var $export = require("9ebe9310a792cb87");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, "Object", {
    create: require("85f74a50eb219ab3")
});

},{"9ebe9310a792cb87":"V6uGr","85f74a50eb219ab3":"1Vr2z"}],"etKNn":[function(require,module,exports) {
var $export = require("37e5a0cd377c9119");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require("a30d4bb83fa8bea3"), "Object", {
    defineProperty: require("3b8bb011254b1409").f
});

},{"37e5a0cd377c9119":"V6uGr","a30d4bb83fa8bea3":"cTJEh","3b8bb011254b1409":"kXoVM"}],"106Fz":[function(require,module,exports) {
var $export = require("95afda302b6ce13e");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !require("54faafcd67782ce3"), "Object", {
    defineProperties: require("ed849a5ff0cd12e2")
});

},{"95afda302b6ce13e":"V6uGr","54faafcd67782ce3":"cTJEh","ed849a5ff0cd12e2":"5pKLc"}],"jxisx":[function(require,module,exports) {
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require("811516b4bf2b4389");
var $getOwnPropertyDescriptor = require("b9e11a348001dfba").f;
require("318b94e77dceebe8")("getOwnPropertyDescriptor", function() {
    return function getOwnPropertyDescriptor(it, key) {
        return $getOwnPropertyDescriptor(toIObject(it), key);
    };
});

},{"811516b4bf2b4389":"bg6wm","b9e11a348001dfba":"amyyc","318b94e77dceebe8":"1d4CX"}],"1d4CX":[function(require,module,exports) {
// most Object methods by ES6 should accept primitives
var $export = require("fbf6f83c4835eaa2");
var core = require("3fc2bee74dbdf791");
var fails = require("57ca248372a05587");
module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
        fn(1);
    }), "Object", exp);
};

},{"fbf6f83c4835eaa2":"V6uGr","3fc2bee74dbdf791":"dgbK5","57ca248372a05587":"hJvAh"}],"1jlJ1":[function(require,module,exports) {
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require("369e7fd1d63d16dc");
var $getPrototypeOf = require("6416d553cdd5a3c6");
require("ca593de26192c17e")("getPrototypeOf", function() {
    return function getPrototypeOf(it) {
        return $getPrototypeOf(toObject(it));
    };
});

},{"369e7fd1d63d16dc":"88RFO","6416d553cdd5a3c6":"hKcQc","ca593de26192c17e":"1d4CX"}],"hKcQc":[function(require,module,exports) {
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require("4fae79477f425941");
var toObject = require("a236a6adb76097");
var IE_PROTO = require("e660e579f34812e3")("IE_PROTO");
var ObjectProto = Object.prototype;
module.exports = Object.getPrototypeOf || function(O) {
    O = toObject(O);
    if (has(O, IE_PROTO)) return O[IE_PROTO];
    if (typeof O.constructor == "function" && O instanceof O.constructor) return O.constructor.prototype;
    return O instanceof Object ? ObjectProto : null;
};

},{"4fae79477f425941":"hCETW","a236a6adb76097":"88RFO","e660e579f34812e3":"kaalj"}],"044l9":[function(require,module,exports) {
// 19.1.2.14 Object.keys(O)
var toObject = require("def436ecc6becd2");
var $keys = require("78e0ff6cb72a6834");
require("7ea1d86a64a64fc")("keys", function() {
    return function keys(it) {
        return $keys(toObject(it));
    };
});

},{"def436ecc6becd2":"88RFO","78e0ff6cb72a6834":"2PUHx","7ea1d86a64a64fc":"1d4CX"}],"355Yu":[function(require,module,exports) {
// 19.1.2.7 Object.getOwnPropertyNames(O)
require("978c006860de3ccb")("getOwnPropertyNames", function() {
    return require("103e4da4e89aa3dc").f;
});

},{"978c006860de3ccb":"1d4CX","103e4da4e89aa3dc":"1Yqy4"}],"ekZXU":[function(require,module,exports) {
// 19.1.2.5 Object.freeze(O)
var isObject = require("e1efff903ce0ec51");
var meta = require("2d0b8c0365cea10b").onFreeze;
require("2d6b746ec2a926e6")("freeze", function($freeze) {
    return function freeze(it) {
        return $freeze && isObject(it) ? $freeze(meta(it)) : it;
    };
});

},{"e1efff903ce0ec51":"8MCxb","2d0b8c0365cea10b":"k4QUD","2d6b746ec2a926e6":"1d4CX"}],"7gkGr":[function(require,module,exports) {
// 19.1.2.17 Object.seal(O)
var isObject = require("873a4e2ea94640bf");
var meta = require("113f592dd4d7d4f3").onFreeze;
require("cb77902ed8b9bea2")("seal", function($seal) {
    return function seal(it) {
        return $seal && isObject(it) ? $seal(meta(it)) : it;
    };
});

},{"873a4e2ea94640bf":"8MCxb","113f592dd4d7d4f3":"k4QUD","cb77902ed8b9bea2":"1d4CX"}],"ehUDx":[function(require,module,exports) {
// 19.1.2.15 Object.preventExtensions(O)
var isObject = require("7a7575df84a1257f");
var meta = require("5ddd3e63e0d28f2c").onFreeze;
require("f97c055544c4544f")("preventExtensions", function($preventExtensions) {
    return function preventExtensions(it) {
        return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
    };
});

},{"7a7575df84a1257f":"8MCxb","5ddd3e63e0d28f2c":"k4QUD","f97c055544c4544f":"1d4CX"}],"cFSsg":[function(require,module,exports) {
// 19.1.2.12 Object.isFrozen(O)
var isObject = require("c710fe12664018c1");
require("96656e16a05afb2c")("isFrozen", function($isFrozen) {
    return function isFrozen(it) {
        return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
    };
});

},{"c710fe12664018c1":"8MCxb","96656e16a05afb2c":"1d4CX"}],"eJbFZ":[function(require,module,exports) {
// 19.1.2.13 Object.isSealed(O)
var isObject = require("6135908de717e1a1");
require("a6bf605f71664a2a")("isSealed", function($isSealed) {
    return function isSealed(it) {
        return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
    };
});

},{"6135908de717e1a1":"8MCxb","a6bf605f71664a2a":"1d4CX"}],"3HhEn":[function(require,module,exports) {
// 19.1.2.11 Object.isExtensible(O)
var isObject = require("dae0c7930f1d730c");
require("3293ec9ed70a0946")("isExtensible", function($isExtensible) {
    return function isExtensible(it) {
        return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
    };
});

},{"dae0c7930f1d730c":"8MCxb","3293ec9ed70a0946":"1d4CX"}],"5t01c":[function(require,module,exports) {
// 19.1.3.1 Object.assign(target, source)
var $export = require("63d783e795dc8ec0");
$export($export.S + $export.F, "Object", {
    assign: require("b1828629707a7120")
});

},{"63d783e795dc8ec0":"V6uGr","b1828629707a7120":"h5kjT"}],"h5kjT":[function(require,module,exports) {
"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = require("40ea79cd2418bdbf");
var getKeys = require("fd0fd04e4aa8cb04");
var gOPS = require("2f52daf0ae926e81");
var pIE = require("b9e3af94c4af105c");
var toObject = require("6ed4c3a202624511");
var IObject = require("db3dec3cc1346665");
var $assign = Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require("4d3c729d6715d4d2")(function() {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var S = Symbol();
    var K = "abcdefghijklmnopqrst";
    A[S] = 7;
    K.split("").forEach(function(k) {
        B[k] = k;
    });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join("") != K;
}) ? function assign(target, source) {
    var T = toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = gOPS.f;
    var isEnum = pIE.f;
    while(aLen > index){
        var S = IObject(arguments[index++]);
        var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while(length > j){
            key = keys[j++];
            if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
        }
    }
    return T;
} : $assign;

},{"40ea79cd2418bdbf":"cTJEh","fd0fd04e4aa8cb04":"2PUHx","2f52daf0ae926e81":"94b1k","b9e3af94c4af105c":"3iwSK","6ed4c3a202624511":"88RFO","db3dec3cc1346665":"fCne3","4d3c729d6715d4d2":"hJvAh"}],"ecegJ":[function(require,module,exports) {
// 19.1.3.10 Object.is(value1, value2)
var $export = require("fd4d39b2fdd9b662");
$export($export.S, "Object", {
    is: require("109c149932d2630e")
});

},{"fd4d39b2fdd9b662":"V6uGr","109c149932d2630e":"7uyGs"}],"7uyGs":[function(require,module,exports) {
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

},{}],"5iddS":[function(require,module,exports) {
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require("a3c919a11af312d5");
$export($export.S, "Object", {
    setPrototypeOf: require("3317f621449ee075").set
});

},{"a3c919a11af312d5":"V6uGr","3317f621449ee075":"kfX2R"}],"kfX2R":[function(require,module,exports) {
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */ var isObject = require("c46dcbd09e2c6b5e");
var anObject = require("f5d8cc09f8eb53ac");
var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
    set: Object.setPrototypeOf || ("__proto__" in {} ? function(test, buggy, set) {
        try {
            set = require("e4b605ca9d898ca")(Function.call, require("7daa7f87680668b2").f(Object.prototype, "__proto__").set, 2);
            set(test, []);
            buggy = !(test instanceof Array);
        } catch (e) {
            buggy = true;
        }
        return function setPrototypeOf(O, proto) {
            check(O, proto);
            if (buggy) O.__proto__ = proto;
            else set(O, proto);
            return O;
        };
    }({}, false) : undefined),
    check: check
};

},{"c46dcbd09e2c6b5e":"8MCxb","f5d8cc09f8eb53ac":"jvvZN","e4b605ca9d898ca":"8I23f","7daa7f87680668b2":"amyyc"}],"a7ALT":[function(require,module,exports) {
"use strict";
// 19.1.3.6 Object.prototype.toString()
var classof = require("ecad58ed426de04");
var test = {};
test[require("fc922552f068b592")("toStringTag")] = "z";
if (test + "" != "[object z]") require("cb31423c92d22864")(Object.prototype, "toString", function toString() {
    return "[object " + classof(this) + "]";
}, true);

},{"ecad58ed426de04":"7IFyn","fc922552f068b592":"irAMb","cb31423c92d22864":"1Nq8R"}],"7IFyn":[function(require,module,exports) {
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require("8c34b60d4bd3561c");
var TAG = require("7fdc32f7a410c8b9")("toStringTag");
// ES3 wrong here
var ARG = cof(function() {
    return arguments;
}()) == "Arguments";
// fallback for IE11 Script Access Denied error
var tryGet = function(it, key) {
    try {
        return it[key];
    } catch (e) {}
};
module.exports = function(it) {
    var O, T, B;
    return it === undefined ? "Undefined" : it === null ? "Null" : typeof (T = tryGet(O = Object(it), TAG)) == "string" ? T : ARG ? cof(O) : (B = cof(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B;
};

},{"8c34b60d4bd3561c":"4xnMZ","7fdc32f7a410c8b9":"irAMb"}],"ks8SA":[function(require,module,exports) {
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = require("518fae11946baddf");
$export($export.P, "Function", {
    bind: require("4da8833989776e2")
});

},{"518fae11946baddf":"V6uGr","4da8833989776e2":"1ASP5"}],"1ASP5":[function(require,module,exports) {
"use strict";
var aFunction = require("eec3385b1552f08a");
var isObject = require("a6672627a885ae50");
var invoke = require("c6d3dcb95bfb4755");
var arraySlice = [].slice;
var factories = {};
var construct = function(F, len, args) {
    if (!(len in factories)) {
        for(var n = [], i = 0; i < len; i++)n[i] = "a[" + i + "]";
        // eslint-disable-next-line no-new-func
        factories[len] = Function("F,a", "return new F(" + n.join(",") + ")");
    }
    return factories[len](F, args);
};
module.exports = Function.bind || function bind(that /* , ...args */ ) {
    var fn = aFunction(this);
    var partArgs = arraySlice.call(arguments, 1);
    var bound = function() {
        var args = partArgs.concat(arraySlice.call(arguments));
        return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
    };
    if (isObject(fn.prototype)) bound.prototype = fn.prototype;
    return bound;
};

},{"eec3385b1552f08a":"cWXNC","a6672627a885ae50":"8MCxb","c6d3dcb95bfb4755":"eUrKu"}],"eUrKu":[function(require,module,exports) {
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that) {
    var un = that === undefined;
    switch(args.length){
        case 0:
            return un ? fn() : fn.call(that);
        case 1:
            return un ? fn(args[0]) : fn.call(that, args[0]);
        case 2:
            return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
        case 3:
            return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
        case 4:
            return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }
    return fn.apply(that, args);
};

},{}],"bZ7AX":[function(require,module,exports) {
var dP = require("8aa6ec813cca2f54").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = "name";
// 19.2.4.2 name
NAME in FProto || require("eb8ba868a759094e") && dP(FProto, NAME, {
    configurable: true,
    get: function() {
        try {
            return ("" + this).match(nameRE)[1];
        } catch (e) {
            return "";
        }
    }
});

},{"8aa6ec813cca2f54":"kXoVM","eb8ba868a759094e":"cTJEh"}],"ldFBt":[function(require,module,exports) {
"use strict";
var isObject = require("b49c18ca62b92dc8");
var getPrototypeOf = require("5fc733d58add8c20");
var HAS_INSTANCE = require("cc5e8a46953a7d1a")("hasInstance");
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) require("839fa970a9615fa3").f(FunctionProto, HAS_INSTANCE, {
    value: function(O) {
        if (typeof this != "function" || !isObject(O)) return false;
        if (!isObject(this.prototype)) return O instanceof this;
        // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
        while(O = getPrototypeOf(O))if (this.prototype === O) return true;
        return false;
    }
});

},{"b49c18ca62b92dc8":"8MCxb","5fc733d58add8c20":"hKcQc","cc5e8a46953a7d1a":"irAMb","839fa970a9615fa3":"kXoVM"}],"3dixI":[function(require,module,exports) {
var $export = require("9ebdb4d0e28fe62");
var $parseInt = require("143e057ab74e7b55");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), {
    parseInt: $parseInt
});

},{"9ebdb4d0e28fe62":"V6uGr","143e057ab74e7b55":"elLrZ"}],"elLrZ":[function(require,module,exports) {
var $parseInt = require("ed568fd9326d1a95").parseInt;
var $trim = require("fc13afb5c6a8615e").trim;
var ws = require("19ac546c198807c9");
var hex = /^[-+]?0[xX]/;
module.exports = $parseInt(ws + "08") !== 8 || $parseInt(ws + "0x16") !== 22 ? function parseInt(str, radix) {
    var string = $trim(String(str), 3);
    return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
} : $parseInt;

},{"ed568fd9326d1a95":"aN7D9","fc13afb5c6a8615e":"uShdT","19ac546c198807c9":"f5q0I"}],"uShdT":[function(require,module,exports) {
var $export = require("3937f110b9ee2988");
var defined = require("84e2102cc91d3ddd");
var fails = require("a5e716b40d96272f");
var spaces = require("eb8c5ae89a09ec39");
var space = "[" + spaces + "]";
var non = "​\x85";
var ltrim = RegExp("^" + space + space + "*");
var rtrim = RegExp(space + space + "*$");
var exporter = function(KEY, exec, ALIAS) {
    var exp = {};
    var FORCE = fails(function() {
        return !!spaces[KEY]() || non[KEY]() != non;
    });
    var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
    if (ALIAS) exp[ALIAS] = fn;
    $export($export.P + $export.F * FORCE, "String", exp);
};
// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function(string, TYPE) {
    string = String(defined(string));
    if (TYPE & 1) string = string.replace(ltrim, "");
    if (TYPE & 2) string = string.replace(rtrim, "");
    return string;
};
module.exports = exporter;

},{"3937f110b9ee2988":"V6uGr","84e2102cc91d3ddd":"fDNME","a5e716b40d96272f":"hJvAh","eb8c5ae89a09ec39":"f5q0I"}],"f5q0I":[function(require,module,exports) {
module.exports = "	\n\v\f\r \xa0 ᠎             　\u2028\u2029\uFEFF";

},{}],"jbL1b":[function(require,module,exports) {
var $export = require("2437174737b70d58");
var $parseFloat = require("8208464a6f13c704");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), {
    parseFloat: $parseFloat
});

},{"2437174737b70d58":"V6uGr","8208464a6f13c704":"8NSVg"}],"8NSVg":[function(require,module,exports) {
var $parseFloat = require("c05ab4e92cdb73f").parseFloat;
var $trim = require("e43a8d29b7e212c3").trim;
module.exports = 1 / $parseFloat(require("2b05be59a0cfac2f") + "-0") !== -Infinity ? function parseFloat(str) {
    var string = $trim(String(str), 3);
    var result = $parseFloat(string);
    return result === 0 && string.charAt(0) == "-" ? -0 : result;
} : $parseFloat;

},{"c05ab4e92cdb73f":"aN7D9","e43a8d29b7e212c3":"uShdT","2b05be59a0cfac2f":"f5q0I"}],"aRoRu":[function(require,module,exports) {
"use strict";
var global = require("319b9ecfba9d1643");
var has = require("752de16a6c597ae8");
var cof = require("f186ba2084220f40");
var inheritIfRequired = require("9eb8ea98a293a23f");
var toPrimitive = require("dd163a4956fc83da");
var fails = require("61a63ce1f7465c97");
var gOPN = require("1b949ef99478ec11").f;
var gOPD = require("9a53b22361554d61").f;
var dP = require("53e618da4b06f84b").f;
var $trim = require("c1d94aa7258c0026").trim;
var NUMBER = "Number";
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(require("4731f7201fb3e14f")(proto)) == NUMBER;
var TRIM = "trim" in String.prototype;
// 7.1.3 ToNumber(argument)
var toNumber = function(argument) {
    var it = toPrimitive(argument, false);
    if (typeof it == "string" && it.length > 2) {
        it = TRIM ? it.trim() : $trim(it, 3);
        var first = it.charCodeAt(0);
        var third, radix, maxCode;
        if (first === 43 || first === 45) {
            third = it.charCodeAt(2);
            if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
        } else if (first === 48) {
            switch(it.charCodeAt(1)){
                case 66:
                case 98:
                    radix = 2;
                    maxCode = 49;
                    break; // fast equal /^0b[01]+$/i
                case 79:
                case 111:
                    radix = 8;
                    maxCode = 55;
                    break; // fast equal /^0o[0-7]+$/i
                default:
                    return +it;
            }
            for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
                code = digits.charCodeAt(i);
                // parseInt parses a string to a first unavailable symbol
                // but ToNumber should return NaN if a string contains unavailable symbols
                if (code < 48 || code > maxCode) return NaN;
            }
            return parseInt(digits, radix);
        }
    }
    return +it;
};
if (!$Number(" 0o1") || !$Number("0b1") || $Number("+0x1")) {
    $Number = function Number(value) {
        var it = arguments.length < 1 ? 0 : value;
        var that = this;
        return that instanceof $Number && (BROKEN_COF ? fails(function() {
            proto.valueOf.call(that);
        }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
    };
    for(var keys = require("71e37fe50ad92d73") ? gOPN(Base) : // ES3:
    "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), j = 0, key; keys.length > j; j++)if (has(Base, key = keys[j]) && !has($Number, key)) dP($Number, key, gOPD(Base, key));
    $Number.prototype = proto;
    proto.constructor = $Number;
    require("63a513ad59947408")(global, NUMBER, $Number);
}

},{"319b9ecfba9d1643":"aN7D9","752de16a6c597ae8":"hCETW","f186ba2084220f40":"4xnMZ","9eb8ea98a293a23f":"5Thd8","dd163a4956fc83da":"esus5","61a63ce1f7465c97":"hJvAh","1b949ef99478ec11":"8ObWh","9a53b22361554d61":"amyyc","53e618da4b06f84b":"kXoVM","c1d94aa7258c0026":"uShdT","4731f7201fb3e14f":"1Vr2z","71e37fe50ad92d73":"cTJEh","63a513ad59947408":"1Nq8R"}],"5Thd8":[function(require,module,exports) {
var isObject = require("7932868a4d256c22");
var setPrototypeOf = require("7a5341a2ef040082").set;
module.exports = function(that, target, C) {
    var S = target.constructor;
    var P;
    if (S !== C && typeof S == "function" && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) setPrototypeOf(that, P);
    return that;
};

},{"7932868a4d256c22":"8MCxb","7a5341a2ef040082":"kfX2R"}],"9X71K":[function(require,module,exports) {
"use strict";
var $export = require("9a6c25903ec29f7e");
var toInteger = require("4f7c71813e809df8");
var aNumberValue = require("86fc48a383c0d06f");
var repeat = require("cb70e5590795f18a");
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [
    0,
    0,
    0,
    0,
    0,
    0
];
var ERROR = "Number.toFixed: incorrect invocation!";
var ZERO = "0";
var multiply = function(n, c) {
    var i = -1;
    var c2 = c;
    while(++i < 6){
        c2 += n * data[i];
        data[i] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
    }
};
var divide = function(n) {
    var i = 6;
    var c = 0;
    while(--i >= 0){
        c += data[i];
        data[i] = floor(c / n);
        c = c % n * 1e7;
    }
};
var numToString = function() {
    var i = 6;
    var s = "";
    while(--i >= 0)if (s !== "" || i === 0 || data[i] !== 0) {
        var t = String(data[i]);
        s = s === "" ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
    return s;
};
var pow = function(x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function(x) {
    var n = 0;
    var x2 = x;
    while(x2 >= 4096){
        n += 12;
        x2 /= 4096;
    }
    while(x2 >= 2){
        n += 1;
        x2 /= 2;
    }
    return n;
};
$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== "0.000" || 0.9.toFixed(0) !== "1" || 1.255.toFixed(2) !== "1.25" || 1000000000000000128.0.toFixed(0) !== "1000000000000000128") || !require("59c264088c85660f")(function() {
    // V8 ~ Android 4.3-
    $toFixed.call({});
})), "Number", {
    toFixed: function toFixed(fractionDigits) {
        var x = aNumberValue(this, ERROR);
        var f = toInteger(fractionDigits);
        var s = "";
        var m = ZERO;
        var e, z, j, k;
        if (f < 0 || f > 20) throw RangeError(ERROR);
        // eslint-disable-next-line no-self-compare
        if (x != x) return "NaN";
        if (x <= -1000000000000000000000 || x >= 1e21) return String(x);
        if (x < 0) {
            s = "-";
            x = -x;
        }
        if (x > 1e-21) {
            e = log(x * pow(2, 69, 1)) - 69;
            z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
            z *= 0x10000000000000;
            e = 52 - e;
            if (e > 0) {
                multiply(0, z);
                j = f;
                while(j >= 7){
                    multiply(1e7, 0);
                    j -= 7;
                }
                multiply(pow(10, j, 1), 0);
                j = e - 1;
                while(j >= 23){
                    divide(8388608);
                    j -= 23;
                }
                divide(1 << j);
                multiply(1, 1);
                divide(2);
                m = numToString();
            } else {
                multiply(0, z);
                multiply(1 << -e, 0);
                m = numToString() + repeat.call(ZERO, f);
            }
        }
        if (f > 0) {
            k = m.length;
            m = s + (k <= f ? "0." + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + "." + m.slice(k - f));
        } else m = s + m;
        return m;
    }
});

},{"9a6c25903ec29f7e":"V6uGr","4f7c71813e809df8":"12G5z","86fc48a383c0d06f":"7g7ph","cb70e5590795f18a":"k61Ex","59c264088c85660f":"hJvAh"}],"7g7ph":[function(require,module,exports) {
var cof = require("f4a5c83860d51e78");
module.exports = function(it, msg) {
    if (typeof it != "number" && cof(it) != "Number") throw TypeError(msg);
    return +it;
};

},{"f4a5c83860d51e78":"4xnMZ"}],"k61Ex":[function(require,module,exports) {
"use strict";
var toInteger = require("5c7693adc692fa15");
var defined = require("22b71e751d611e73");
module.exports = function repeat(count) {
    var str = String(defined(this));
    var res = "";
    var n = toInteger(count);
    if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
    for(; n > 0; (n >>>= 1) && (str += str))if (n & 1) res += str;
    return res;
};

},{"5c7693adc692fa15":"12G5z","22b71e751d611e73":"fDNME"}],"3lB3v":[function(require,module,exports) {
"use strict";
var $export = require("c4d6bbb4e2a9efa7");
var $fails = require("a32b046865b8bbf0");
var aNumberValue = require("1eb80c9641112793");
var $toPrecision = 1.0.toPrecision;
$export($export.P + $export.F * ($fails(function() {
    // IE7-
    return $toPrecision.call(1, undefined) !== "1";
}) || !$fails(function() {
    // V8 ~ Android 4.3-
    $toPrecision.call({});
})), "Number", {
    toPrecision: function toPrecision(precision) {
        var that = aNumberValue(this, "Number#toPrecision: incorrect invocation!");
        return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
    }
});

},{"c4d6bbb4e2a9efa7":"V6uGr","a32b046865b8bbf0":"hJvAh","1eb80c9641112793":"7g7ph"}],"4HmvT":[function(require,module,exports) {
// 20.1.2.1 Number.EPSILON
var $export = require("6b6cca589b7b06bc");
$export($export.S, "Number", {
    EPSILON: Math.pow(2, -52)
});

},{"6b6cca589b7b06bc":"V6uGr"}],"aXlw3":[function(require,module,exports) {
// 20.1.2.2 Number.isFinite(number)
var $export = require("6ae6983b0119d83c");
var _isFinite = require("5b74e33a67966900").isFinite;
$export($export.S, "Number", {
    isFinite: function isFinite(it) {
        return typeof it == "number" && _isFinite(it);
    }
});

},{"6ae6983b0119d83c":"V6uGr","5b74e33a67966900":"aN7D9"}],"hJBxX":[function(require,module,exports) {
// 20.1.2.3 Number.isInteger(number)
var $export = require("2a44588f16863d30");
$export($export.S, "Number", {
    isInteger: require("b2072703045af366")
});

},{"2a44588f16863d30":"V6uGr","b2072703045af366":"aZB1l"}],"aZB1l":[function(require,module,exports) {
// 20.1.2.3 Number.isInteger(number)
var isObject = require("57d4ebbc716c29fe");
var floor = Math.floor;
module.exports = function isInteger(it) {
    return !isObject(it) && isFinite(it) && floor(it) === it;
};

},{"57d4ebbc716c29fe":"8MCxb"}],"dy6Bh":[function(require,module,exports) {
// 20.1.2.4 Number.isNaN(number)
var $export = require("b9f7472f1082b365");
$export($export.S, "Number", {
    isNaN: function isNaN(number) {
        // eslint-disable-next-line no-self-compare
        return number != number;
    }
});

},{"b9f7472f1082b365":"V6uGr"}],"gX3mP":[function(require,module,exports) {
// 20.1.2.5 Number.isSafeInteger(number)
var $export = require("769b52cd3a839f14");
var isInteger = require("b369e2952e0f44fc");
var abs = Math.abs;
$export($export.S, "Number", {
    isSafeInteger: function isSafeInteger(number) {
        return isInteger(number) && abs(number) <= 0x1fffffffffffff;
    }
});

},{"769b52cd3a839f14":"V6uGr","b369e2952e0f44fc":"aZB1l"}],"k2Nfh":[function(require,module,exports) {
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = require("495cce916bbeb7bf");
$export($export.S, "Number", {
    MAX_SAFE_INTEGER: 0x1fffffffffffff
});

},{"495cce916bbeb7bf":"V6uGr"}],"7hWxV":[function(require,module,exports) {
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = require("f14831559a0e532");
$export($export.S, "Number", {
    MIN_SAFE_INTEGER: -9007199254740991
});

},{"f14831559a0e532":"V6uGr"}],"jY7WX":[function(require,module,exports) {
var $export = require("2040b21706750d2b");
var $parseFloat = require("e0405d7dbc157d64");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), "Number", {
    parseFloat: $parseFloat
});

},{"2040b21706750d2b":"V6uGr","e0405d7dbc157d64":"8NSVg"}],"fVYfx":[function(require,module,exports) {
var $export = require("1717b8022e7188ee");
var $parseInt = require("3e9f49d705b659f4");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), "Number", {
    parseInt: $parseInt
});

},{"1717b8022e7188ee":"V6uGr","3e9f49d705b659f4":"elLrZ"}],"2Iqnt":[function(require,module,exports) {
// 20.2.2.3 Math.acosh(x)
var $export = require("4e0eb205f8aa901b");
var log1p = require("8d2e549ee3ad26c4");
var sqrt = Math.sqrt;
var $acosh = Math.acosh;
$export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710 && $acosh(Infinity) == Infinity), "Math", {
    acosh: function acosh(x) {
        return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
    }
});

},{"4e0eb205f8aa901b":"V6uGr","8d2e549ee3ad26c4":"gRu2d"}],"gRu2d":[function(require,module,exports) {
// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
    return (x = +x) > -0.00000001 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

},{}],"20QhW":[function(require,module,exports) {
// 20.2.2.5 Math.asinh(x)
var $export = require("afb72ad7755fbfc3");
var $asinh = Math.asinh;
function asinh(x) {
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}
// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), "Math", {
    asinh: asinh
});

},{"afb72ad7755fbfc3":"V6uGr"}],"cFOYJ":[function(require,module,exports) {
// 20.2.2.7 Math.atanh(x)
var $export = require("c245557ed8e8cfc6");
var $atanh = Math.atanh;
// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), "Math", {
    atanh: function atanh(x) {
        return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
    }
});

},{"c245557ed8e8cfc6":"V6uGr"}],"gqspx":[function(require,module,exports) {
// 20.2.2.9 Math.cbrt(x)
var $export = require("3889be51abb784c9");
var sign = require("ef4fb053899999f2");
$export($export.S, "Math", {
    cbrt: function cbrt(x) {
        return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
    }
});

},{"3889be51abb784c9":"V6uGr","ef4fb053899999f2":"6MpKp"}],"6MpKp":[function(require,module,exports) {
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
    // eslint-disable-next-line no-self-compare
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

},{}],"ijel4":[function(require,module,exports) {
// 20.2.2.11 Math.clz32(x)
var $export = require("e27effdeeaaaeacc");
$export($export.S, "Math", {
    clz32: function clz32(x) {
        return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
    }
});

},{"e27effdeeaaaeacc":"V6uGr"}],"9ccsA":[function(require,module,exports) {
// 20.2.2.12 Math.cosh(x)
var $export = require("57f4793d87279b17");
var exp = Math.exp;
$export($export.S, "Math", {
    cosh: function cosh(x) {
        return (exp(x = +x) + exp(-x)) / 2;
    }
});

},{"57f4793d87279b17":"V6uGr"}],"86f3X":[function(require,module,exports) {
// 20.2.2.14 Math.expm1(x)
var $export = require("d26d32dead94220f");
var $expm1 = require("231241d4c3782253");
$export($export.S + $export.F * ($expm1 != Math.expm1), "Math", {
    expm1: $expm1
});

},{"d26d32dead94220f":"V6uGr","231241d4c3782253":"5PCes"}],"5PCes":[function(require,module,exports) {
// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = !$expm1 || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 || $expm1(-0.00000000000000002) != -0.00000000000000002 ? function expm1(x) {
    return (x = +x) == 0 ? x : x > -0.000001 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

},{}],"cuwbq":[function(require,module,exports) {
// 20.2.2.16 Math.fround(x)
var $export = require("b4f84ceb01ccf740");
$export($export.S, "Math", {
    fround: require("adcfd2b8718fa026")
});

},{"b4f84ceb01ccf740":"V6uGr","adcfd2b8718fa026":"2kybi"}],"2kybi":[function(require,module,exports) {
// 20.2.2.16 Math.fround(x)
var sign = require("a5559b08c34fc8d4");
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);
var roundTiesToEven = function(n) {
    return n + 1 / EPSILON - 1 / EPSILON;
};
module.exports = Math.fround || function fround(x) {
    var $abs = Math.abs(x);
    var $sign = sign(x);
    var a, result;
    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    // eslint-disable-next-line no-self-compare
    if (result > MAX32 || result != result) return $sign * Infinity;
    return $sign * result;
};

},{"a5559b08c34fc8d4":"6MpKp"}],"eaKKE":[function(require,module,exports) {
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = require("84cadabf2e15f5a0");
var abs = Math.abs;
$export($export.S, "Math", {
    hypot: function hypot(value1, value2) {
        var sum = 0;
        var i = 0;
        var aLen = arguments.length;
        var larg = 0;
        var arg, div;
        while(i < aLen){
            arg = abs(arguments[i++]);
            if (larg < arg) {
                div = larg / arg;
                sum = sum * div * div + 1;
                larg = arg;
            } else if (arg > 0) {
                div = arg / larg;
                sum += div * div;
            } else sum += arg;
        }
        return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
    }
});

},{"84cadabf2e15f5a0":"V6uGr"}],"iDBSi":[function(require,module,exports) {
// 20.2.2.18 Math.imul(x, y)
var $export = require("3ecccb0bd4f952c0");
var $imul = Math.imul;
// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * require("c0f7d24767d226f1")(function() {
    return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), "Math", {
    imul: function imul(x, y) {
        var UINT16 = 0xffff;
        var xn = +x;
        var yn = +y;
        var xl = UINT16 & xn;
        var yl = UINT16 & yn;
        return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
    }
});

},{"3ecccb0bd4f952c0":"V6uGr","c0f7d24767d226f1":"hJvAh"}],"1ydWn":[function(require,module,exports) {
// 20.2.2.21 Math.log10(x)
var $export = require("46091734a2c1beac");
$export($export.S, "Math", {
    log10: function log10(x) {
        return Math.log(x) * Math.LOG10E;
    }
});

},{"46091734a2c1beac":"V6uGr"}],"BmVbU":[function(require,module,exports) {
// 20.2.2.20 Math.log1p(x)
var $export = require("4310126c480fb2da");
$export($export.S, "Math", {
    log1p: require("2f8b73569d7aab9d")
});

},{"4310126c480fb2da":"V6uGr","2f8b73569d7aab9d":"gRu2d"}],"3apRe":[function(require,module,exports) {
// 20.2.2.22 Math.log2(x)
var $export = require("68f975e0b17dea06");
$export($export.S, "Math", {
    log2: function log2(x) {
        return Math.log(x) / Math.LN2;
    }
});

},{"68f975e0b17dea06":"V6uGr"}],"fRvXM":[function(require,module,exports) {
// 20.2.2.28 Math.sign(x)
var $export = require("6fa2b755b04f6191");
$export($export.S, "Math", {
    sign: require("9c3bad6dc7d68514")
});

},{"6fa2b755b04f6191":"V6uGr","9c3bad6dc7d68514":"6MpKp"}],"3Au9l":[function(require,module,exports) {
// 20.2.2.30 Math.sinh(x)
var $export = require("c7b9f728b94240fb");
var expm1 = require("7ec8abc6fd18ef6e");
var exp = Math.exp;
// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * require("52062a5cb8d9bd8a")(function() {
    return !Math.sinh(-0.00000000000000002) != -0.00000000000000002;
}), "Math", {
    sinh: function sinh(x) {
        return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
    }
});

},{"c7b9f728b94240fb":"V6uGr","7ec8abc6fd18ef6e":"5PCes","52062a5cb8d9bd8a":"hJvAh"}],"hQGyd":[function(require,module,exports) {
// 20.2.2.33 Math.tanh(x)
var $export = require("8ce3321092019a5");
var expm1 = require("487eacd1ddabd493");
var exp = Math.exp;
$export($export.S, "Math", {
    tanh: function tanh(x) {
        var a = expm1(x = +x);
        var b = expm1(-x);
        return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
    }
});

},{"8ce3321092019a5":"V6uGr","487eacd1ddabd493":"5PCes"}],"iLXqO":[function(require,module,exports) {
// 20.2.2.34 Math.trunc(x)
var $export = require("25861a180f34eb08");
$export($export.S, "Math", {
    trunc: function trunc(it) {
        return (it > 0 ? Math.floor : Math.ceil)(it);
    }
});

},{"25861a180f34eb08":"V6uGr"}],"9IPIo":[function(require,module,exports) {
var $export = require("ac88793de26887ce");
var toAbsoluteIndex = require("157a5bd9fddf4309");
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;
// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), "String", {
    // 21.1.2.2 String.fromCodePoint(...codePoints)
    fromCodePoint: function fromCodePoint(x) {
        var res = [];
        var aLen = arguments.length;
        var i = 0;
        var code;
        while(aLen > i){
            code = +arguments[i++];
            if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + " is not a valid code point");
            res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
        }
        return res.join("");
    }
});

},{"ac88793de26887ce":"V6uGr","157a5bd9fddf4309":"c8MSW"}],"6Z9gW":[function(require,module,exports) {
var $export = require("2f2695459f0e9202");
var toIObject = require("3ee89babef174683");
var toLength = require("ca7459493068a64f");
$export($export.S, "String", {
    // 21.1.2.4 String.raw(callSite, ...substitutions)
    raw: function raw(callSite) {
        var tpl = toIObject(callSite.raw);
        var len = toLength(tpl.length);
        var aLen = arguments.length;
        var res = [];
        var i = 0;
        while(len > i){
            res.push(String(tpl[i++]));
            if (i < aLen) res.push(String(arguments[i]));
        }
        return res.join("");
    }
});

},{"2f2695459f0e9202":"V6uGr","3ee89babef174683":"bg6wm","ca7459493068a64f":"6i4KF"}],"fq5cq":[function(require,module,exports) {
"use strict";
// 21.1.3.25 String.prototype.trim()
require("aaa36cd8819ea92b")("trim", function($trim) {
    return function trim() {
        return $trim(this, 3);
    };
});

},{"aaa36cd8819ea92b":"uShdT"}],"eDp2w":[function(require,module,exports) {
"use strict";
var $at = require("5b26ce63a1a11454")(true);
// 21.1.3.27 String.prototype[@@iterator]()
require("12a568cf4a87d237")(String, "String", function(iterated) {
    this._t = String(iterated); // target
    this._i = 0; // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function() {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return {
        value: undefined,
        done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
        value: point,
        done: false
    };
});

},{"5b26ce63a1a11454":"5FTpo","12a568cf4a87d237":"21NXr"}],"5FTpo":[function(require,module,exports) {
var toInteger = require("31251103f88dabc0");
var defined = require("151bf783d872ac39");
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING) {
    return function(that, pos) {
        var s = String(defined(that));
        var i = toInteger(pos);
        var l = s.length;
        var a, b;
        if (i < 0 || i >= l) return TO_STRING ? "" : undefined;
        a = s.charCodeAt(i);
        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
};

},{"31251103f88dabc0":"12G5z","151bf783d872ac39":"fDNME"}],"21NXr":[function(require,module,exports) {
"use strict";
var LIBRARY = require("e349062efb729aa4");
var $export = require("fc8c5a9ab4e03c44");
var redefine = require("51a1825bcdf5f849");
var hide = require("8eaaafca8d7861aa");
var Iterators = require("6ed88cb0bb3b2a9f");
var $iterCreate = require("f5be1db74c77c51");
var setToStringTag = require("8cb14719533d7a15");
var getPrototypeOf = require("fa8eb8fdf68a8c8c");
var ITERATOR = require("42aef5e1e8e03a8")("iterator");
var BUGGY = !([].keys && "next" in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = "@@iterator";
var KEYS = "keys";
var VALUES = "values";
var returnThis = function() {
    return this;
};
module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
        if (!BUGGY && kind in proto) return proto[kind];
        switch(kind){
            case KEYS:
                return function keys() {
                    return new Constructor(this, kind);
                };
            case VALUES:
                return function values() {
                    return new Constructor(this, kind);
                };
        }
        return function entries() {
            return new Constructor(this, kind);
        };
    };
    var TAG = NAME + " Iterator";
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : undefined;
    var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
        IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
            // Set @@toStringTag to native iterators
            setToStringTag(IteratorPrototype, TAG, true);
            // fix for some old engines
            if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function") hide(IteratorPrototype, ITERATOR, returnThis);
        }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
            return $native.call(this);
        };
    }
    // Define iterator
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) hide(proto, ITERATOR, $default);
    // Plug for library
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
        methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: $entries
        };
        if (FORCED) {
            for(key in methods)if (!(key in proto)) redefine(proto, key, methods[key]);
        } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
};

},{"e349062efb729aa4":"fdMee","fc8c5a9ab4e03c44":"V6uGr","51a1825bcdf5f849":"1Nq8R","8eaaafca8d7861aa":"6kOvw","6ed88cb0bb3b2a9f":"iLt3f","f5be1db74c77c51":"f9TIG","8cb14719533d7a15":"35t6Z","fa8eb8fdf68a8c8c":"hKcQc","42aef5e1e8e03a8":"irAMb"}],"iLt3f":[function(require,module,exports) {
module.exports = {};

},{}],"f9TIG":[function(require,module,exports) {
"use strict";
var create = require("dddc0a493caeaafa");
var descriptor = require("bda969d91db12a0b");
var setToStringTag = require("84b8eef838de829c");
var IteratorPrototype = {};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require("2d98cf40b4c29af3")(IteratorPrototype, require("3dd5468431de18c2")("iterator"), function() {
    return this;
});
module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = create(IteratorPrototype, {
        next: descriptor(1, next)
    });
    setToStringTag(Constructor, NAME + " Iterator");
};

},{"dddc0a493caeaafa":"1Vr2z","bda969d91db12a0b":"apD9J","84b8eef838de829c":"35t6Z","2d98cf40b4c29af3":"6kOvw","3dd5468431de18c2":"irAMb"}],"8VniD":[function(require,module,exports) {
"use strict";
var $export = require("98a605e551efe386");
var $at = require("2939621cb67ac273")(false);
$export($export.P, "String", {
    // 21.1.3.3 String.prototype.codePointAt(pos)
    codePointAt: function codePointAt(pos) {
        return $at(this, pos);
    }
});

},{"98a605e551efe386":"V6uGr","2939621cb67ac273":"5FTpo"}],"lSLxz":[function(require,module,exports) {
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
"use strict";
var $export = require("53ccaea92fafe119");
var toLength = require("15b54d542ee26660");
var context = require("2fbb5048fcdcab7f");
var ENDS_WITH = "endsWith";
var $endsWith = ""[ENDS_WITH];
$export($export.P + $export.F * require("bf4bb93455eaa17f")(ENDS_WITH), "String", {
    endsWith: function endsWith(searchString /* , endPosition = @length */ ) {
        var that = context(this, searchString, ENDS_WITH);
        var endPosition = arguments.length > 1 ? arguments[1] : undefined;
        var len = toLength(that.length);
        var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
        var search = String(searchString);
        return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
    }
});

},{"53ccaea92fafe119":"V6uGr","15b54d542ee26660":"6i4KF","2fbb5048fcdcab7f":"2Toiw","bf4bb93455eaa17f":"huucS"}],"2Toiw":[function(require,module,exports) {
// helper for String#{startsWith, endsWith, includes}
var isRegExp = require("3dc3087cd5b4a334");
var defined = require("67a24fdd8138a218");
module.exports = function(that, searchString, NAME) {
    if (isRegExp(searchString)) throw TypeError("String#" + NAME + " doesn't accept regex!");
    return String(defined(that));
};

},{"3dc3087cd5b4a334":"i98vd","67a24fdd8138a218":"fDNME"}],"i98vd":[function(require,module,exports) {
// 7.2.8 IsRegExp(argument)
var isObject = require("dbf8ed982f9cd21a");
var cof = require("7f70ffd5ff5c19a");
var MATCH = require("333a8bb7b7b14937")("match");
module.exports = function(it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == "RegExp");
};

},{"dbf8ed982f9cd21a":"8MCxb","7f70ffd5ff5c19a":"4xnMZ","333a8bb7b7b14937":"irAMb"}],"huucS":[function(require,module,exports) {
var MATCH = require("398c09fe9abcde75")("match");
module.exports = function(KEY) {
    var re = /./;
    try {
        "/./"[KEY](re);
    } catch (e) {
        try {
            re[MATCH] = false;
            return !"/./"[KEY](re);
        } catch (f) {}
    }
    return true;
};

},{"398c09fe9abcde75":"irAMb"}],"bRl17":[function(require,module,exports) {
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
"use strict";
var $export = require("3271f360c835800");
var context = require("ee3d7e9cf7a72f25");
var INCLUDES = "includes";
$export($export.P + $export.F * require("4c74fec14d5b338c")(INCLUDES), "String", {
    includes: function includes(searchString /* , position = 0 */ ) {
        return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"3271f360c835800":"V6uGr","ee3d7e9cf7a72f25":"2Toiw","4c74fec14d5b338c":"huucS"}],"40I9N":[function(require,module,exports) {
var $export = require("6d7deffc71f7af3c");
$export($export.P, "String", {
    // 21.1.3.13 String.prototype.repeat(count)
    repeat: require("445290fd0da53a00")
});

},{"6d7deffc71f7af3c":"V6uGr","445290fd0da53a00":"k61Ex"}],"4xx2m":[function(require,module,exports) {
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
"use strict";
var $export = require("6e767b7a1afe6ab2");
var toLength = require("c1c7c8f07bef8448");
var context = require("a3bfea2f44bc72ff");
var STARTS_WITH = "startsWith";
var $startsWith = ""[STARTS_WITH];
$export($export.P + $export.F * require("df22a12704f0cb75")(STARTS_WITH), "String", {
    startsWith: function startsWith(searchString /* , position = 0 */ ) {
        var that = context(this, searchString, STARTS_WITH);
        var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
        var search = String(searchString);
        return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
    }
});

},{"6e767b7a1afe6ab2":"V6uGr","c1c7c8f07bef8448":"6i4KF","a3bfea2f44bc72ff":"2Toiw","df22a12704f0cb75":"huucS"}],"7vkWX":[function(require,module,exports) {
"use strict";
// B.2.3.2 String.prototype.anchor(name)
require("fec56c488baeae56")("anchor", function(createHTML) {
    return function anchor(name) {
        return createHTML(this, "a", "name", name);
    };
});

},{"fec56c488baeae56":"hD6S9"}],"hD6S9":[function(require,module,exports) {
var $export = require("e468493bb467d919");
var fails = require("e9de0c3285b40274");
var defined = require("eeb947ea4be8fef0");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function(string, tag, attribute, value) {
    var S = String(defined(string));
    var p1 = "<" + tag;
    if (attribute !== "") p1 += " " + attribute + '="' + String(value).replace(quot, "&quot;") + '"';
    return p1 + ">" + S + "</" + tag + ">";
};
module.exports = function(NAME, exec) {
    var O = {};
    O[NAME] = exec(createHTML);
    $export($export.P + $export.F * fails(function() {
        var test = ""[NAME]('"');
        return test !== test.toLowerCase() || test.split('"').length > 3;
    }), "String", O);
};

},{"e468493bb467d919":"V6uGr","e9de0c3285b40274":"hJvAh","eeb947ea4be8fef0":"fDNME"}],"gIoRl":[function(require,module,exports) {
"use strict";
// B.2.3.3 String.prototype.big()
require("45fab05a74ab13d8")("big", function(createHTML) {
    return function big() {
        return createHTML(this, "big", "", "");
    };
});

},{"45fab05a74ab13d8":"hD6S9"}],"ezEoV":[function(require,module,exports) {
"use strict";
// B.2.3.4 String.prototype.blink()
require("420e948070061502")("blink", function(createHTML) {
    return function blink() {
        return createHTML(this, "blink", "", "");
    };
});

},{"420e948070061502":"hD6S9"}],"3MxGL":[function(require,module,exports) {
"use strict";
// B.2.3.5 String.prototype.bold()
require("eee9bbcf5b4c34db")("bold", function(createHTML) {
    return function bold() {
        return createHTML(this, "b", "", "");
    };
});

},{"eee9bbcf5b4c34db":"hD6S9"}],"73dmF":[function(require,module,exports) {
"use strict";
// B.2.3.6 String.prototype.fixed()
require("502d6863baa1dc7e")("fixed", function(createHTML) {
    return function fixed() {
        return createHTML(this, "tt", "", "");
    };
});

},{"502d6863baa1dc7e":"hD6S9"}],"8piz2":[function(require,module,exports) {
"use strict";
// B.2.3.7 String.prototype.fontcolor(color)
require("6645b26d99f400ca")("fontcolor", function(createHTML) {
    return function fontcolor(color) {
        return createHTML(this, "font", "color", color);
    };
});

},{"6645b26d99f400ca":"hD6S9"}],"abOuF":[function(require,module,exports) {
"use strict";
// B.2.3.8 String.prototype.fontsize(size)
require("f708138bd7cf0245")("fontsize", function(createHTML) {
    return function fontsize(size) {
        return createHTML(this, "font", "size", size);
    };
});

},{"f708138bd7cf0245":"hD6S9"}],"1ES9H":[function(require,module,exports) {
"use strict";
// B.2.3.9 String.prototype.italics()
require("6dc9fd4590068a00")("italics", function(createHTML) {
    return function italics() {
        return createHTML(this, "i", "", "");
    };
});

},{"6dc9fd4590068a00":"hD6S9"}],"d07nz":[function(require,module,exports) {
"use strict";
// B.2.3.10 String.prototype.link(url)
require("af04fdf7506ab484")("link", function(createHTML) {
    return function link(url) {
        return createHTML(this, "a", "href", url);
    };
});

},{"af04fdf7506ab484":"hD6S9"}],"kg2AR":[function(require,module,exports) {
"use strict";
// B.2.3.11 String.prototype.small()
require("4a98b3774f88511e")("small", function(createHTML) {
    return function small() {
        return createHTML(this, "small", "", "");
    };
});

},{"4a98b3774f88511e":"hD6S9"}],"5kTxS":[function(require,module,exports) {
"use strict";
// B.2.3.12 String.prototype.strike()
require("2e36e83d27449e2")("strike", function(createHTML) {
    return function strike() {
        return createHTML(this, "strike", "", "");
    };
});

},{"2e36e83d27449e2":"hD6S9"}],"2TKZL":[function(require,module,exports) {
"use strict";
// B.2.3.13 String.prototype.sub()
require("eb4b81224a991e9f")("sub", function(createHTML) {
    return function sub() {
        return createHTML(this, "sub", "", "");
    };
});

},{"eb4b81224a991e9f":"hD6S9"}],"fpLeB":[function(require,module,exports) {
"use strict";
// B.2.3.14 String.prototype.sup()
require("1c3eb58951ddee5b")("sup", function(createHTML) {
    return function sup() {
        return createHTML(this, "sup", "", "");
    };
});

},{"1c3eb58951ddee5b":"hD6S9"}],"l1fSB":[function(require,module,exports) {
// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = require("fba3efb736ac31d3");
$export($export.S, "Date", {
    now: function() {
        return new Date().getTime();
    }
});

},{"fba3efb736ac31d3":"V6uGr"}],"iQyIN":[function(require,module,exports) {
"use strict";
var $export = require("7fff5118f17879fe");
var toObject = require("cb889d36fa029d89");
var toPrimitive = require("e2dc35606fed3453");
$export($export.P + $export.F * require("79ce187f7646457f")(function() {
    return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
        toISOString: function() {
            return 1;
        }
    }) !== 1;
}), "Date", {
    // eslint-disable-next-line no-unused-vars
    toJSON: function toJSON(key) {
        var O = toObject(this);
        var pv = toPrimitive(O);
        return typeof pv == "number" && !isFinite(pv) ? null : O.toISOString();
    }
});

},{"7fff5118f17879fe":"V6uGr","cb889d36fa029d89":"88RFO","e2dc35606fed3453":"esus5","79ce187f7646457f":"hJvAh"}],"cE8md":[function(require,module,exports) {
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = require("79027ff153c28118");
var toISOString = require("eb1bae663bcf99de");
// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), "Date", {
    toISOString: toISOString
});

},{"79027ff153c28118":"V6uGr","eb1bae663bcf99de":"4Ci3k"}],"4Ci3k":[function(require,module,exports) {
"use strict";
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = require("b471ecc7b8eb2681");
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;
var lz = function(num) {
    return num > 9 ? num : "0" + num;
};
// PhantomJS / old WebKit has a broken implementations
module.exports = fails(function() {
    return $toISOString.call(new Date(-50000000000000 - 1)) != "0385-07-25T07:06:39.999Z";
}) || !fails(function() {
    $toISOString.call(new Date(NaN));
}) ? function toISOString() {
    if (!isFinite(getTime.call(this))) throw RangeError("Invalid time value");
    var d = this;
    var y = d.getUTCFullYear();
    var m = d.getUTCMilliseconds();
    var s = y < 0 ? "-" : y > 9999 ? "+" : "";
    return s + ("00000" + Math.abs(y)).slice(s ? -6 : -4) + "-" + lz(d.getUTCMonth() + 1) + "-" + lz(d.getUTCDate()) + "T" + lz(d.getUTCHours()) + ":" + lz(d.getUTCMinutes()) + ":" + lz(d.getUTCSeconds()) + "." + (m > 99 ? m : "0" + lz(m)) + "Z";
} : $toISOString;

},{"b471ecc7b8eb2681":"hJvAh"}],"9fDbW":[function(require,module,exports) {
var DateProto = Date.prototype;
var INVALID_DATE = "Invalid Date";
var TO_STRING = "toString";
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + "" != INVALID_DATE) require("dd867634374d96dd")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
});

},{"dd867634374d96dd":"1Nq8R"}],"d3CQs":[function(require,module,exports) {
var TO_PRIMITIVE = require("a7e0e3af805b8c0d")("toPrimitive");
var proto = Date.prototype;
if (!(TO_PRIMITIVE in proto)) require("a841e1b93abf9dd3")(proto, TO_PRIMITIVE, require("12fe1fac53d1779b"));

},{"a7e0e3af805b8c0d":"irAMb","a841e1b93abf9dd3":"6kOvw","12fe1fac53d1779b":"5Vtw9"}],"5Vtw9":[function(require,module,exports) {
"use strict";
var anObject = require("2a972c63816742c9");
var toPrimitive = require("9ffd7ea0abf9561c");
var NUMBER = "number";
module.exports = function(hint) {
    if (hint !== "string" && hint !== NUMBER && hint !== "default") throw TypeError("Incorrect hint");
    return toPrimitive(anObject(this), hint != NUMBER);
};

},{"2a972c63816742c9":"jvvZN","9ffd7ea0abf9561c":"esus5"}],"aaoJm":[function(require,module,exports) {
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = require("815fa24d8cfaf564");
$export($export.S, "Array", {
    isArray: require("f4404ee360185f3b")
});

},{"815fa24d8cfaf564":"V6uGr","f4404ee360185f3b":"7gyM5"}],"jegqf":[function(require,module,exports) {
"use strict";
var ctx = require("61793f2de15d20f5");
var $export = require("5a490b0d66d11b7f");
var toObject = require("606bee41c7773f3");
var call = require("779f6d301fbeda73");
var isArrayIter = require("8a776510f9d08e4a");
var toLength = require("6881f7dba7a7b5a4");
var createProperty = require("dc40bc082b58ef5c");
var getIterFn = require("3f5307030d413cdc");
$export($export.S + $export.F * !require("6301fff27b612915")(function(iter) {
    Array.from(iter);
}), "Array", {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */ ) {
        var O = toObject(arrayLike);
        var C = typeof this == "function" ? this : Array;
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var index = 0;
        var iterFn = getIterFn(O);
        var length, result, step, iterator;
        if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
        // if object isn't iterable or it's array with default iterator - use simple case
        if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) for(iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++)createProperty(result, index, mapping ? call(iterator, mapfn, [
            step.value,
            index
        ], true) : step.value);
        else {
            length = toLength(O.length);
            for(result = new C(length); length > index; index++)createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
        result.length = index;
        return result;
    }
});

},{"61793f2de15d20f5":"8I23f","5a490b0d66d11b7f":"V6uGr","606bee41c7773f3":"88RFO","779f6d301fbeda73":"eoNGZ","8a776510f9d08e4a":"79MVP","6881f7dba7a7b5a4":"6i4KF","dc40bc082b58ef5c":"dTRTT","3f5307030d413cdc":"7wXxa","6301fff27b612915":"7GLF7"}],"eoNGZ":[function(require,module,exports) {
// call something on iterator step with safe closing on error
var anObject = require("518375c1be4a68ef");
module.exports = function(iterator, fn, value, entries) {
    try {
        return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
        var ret = iterator["return"];
        if (ret !== undefined) anObject(ret.call(iterator));
        throw e;
    }
};

},{"518375c1be4a68ef":"jvvZN"}],"79MVP":[function(require,module,exports) {
// check on default Array iterator
var Iterators = require("d33212f831bd4e50");
var ITERATOR = require("cbc8990ca8f2db89")("iterator");
var ArrayProto = Array.prototype;
module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"d33212f831bd4e50":"iLt3f","cbc8990ca8f2db89":"irAMb"}],"dTRTT":[function(require,module,exports) {
"use strict";
var $defineProperty = require("87b06d51b7d9c7fb");
var createDesc = require("e37fd75b7de2eb52");
module.exports = function(object, index, value) {
    if (index in object) $defineProperty.f(object, index, createDesc(0, value));
    else object[index] = value;
};

},{"87b06d51b7d9c7fb":"kXoVM","e37fd75b7de2eb52":"apD9J"}],"7wXxa":[function(require,module,exports) {
var classof = require("1e19838749aa83b1");
var ITERATOR = require("a1e2f8397df22245")("iterator");
var Iterators = require("de2f3607094195ee");
module.exports = require("eae909258c756f64").getIteratorMethod = function(it) {
    if (it != undefined) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
};

},{"1e19838749aa83b1":"7IFyn","a1e2f8397df22245":"irAMb","de2f3607094195ee":"iLt3f","eae909258c756f64":"dgbK5"}],"7GLF7":[function(require,module,exports) {
var ITERATOR = require("55fa2de7451178d3")("iterator");
var SAFE_CLOSING = false;
try {
    var riter = [
        7
    ][ITERATOR]();
    riter["return"] = function() {
        SAFE_CLOSING = true;
    };
    // eslint-disable-next-line no-throw-literal
    Array.from(riter, function() {
        throw 2;
    });
} catch (e) {}
module.exports = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
        var arr = [
            7
        ];
        var iter = arr[ITERATOR]();
        iter.next = function() {
            return {
                done: safe = true
            };
        };
        arr[ITERATOR] = function() {
            return iter;
        };
        exec(arr);
    } catch (e) {}
    return safe;
};

},{"55fa2de7451178d3":"irAMb"}],"bDkWX":[function(require,module,exports) {
"use strict";
var $export = require("6581a9ffc49ab11c");
var createProperty = require("768714a1b9b8d67d");
// WebKit Array.of isn't generic
$export($export.S + $export.F * require("3faa9e66624aae41")(function() {
    function F() {}
    return !(Array.of.call(F) instanceof F);
}), "Array", {
    // 22.1.2.3 Array.of( ...items)
    of: function of() {
        var index = 0;
        var aLen = arguments.length;
        var result = new (typeof this == "function" ? this : Array)(aLen);
        while(aLen > index)createProperty(result, index, arguments[index++]);
        result.length = aLen;
        return result;
    }
});

},{"6581a9ffc49ab11c":"V6uGr","768714a1b9b8d67d":"dTRTT","3faa9e66624aae41":"hJvAh"}],"8pFiq":[function(require,module,exports) {
"use strict";
// 22.1.3.13 Array.prototype.join(separator)
var $export = require("b86ebc8c324c12a9");
var toIObject = require("a8b004bbbc4ee91a");
var arrayJoin = [].join;
// fallback for not array-like strings
$export($export.P + $export.F * (require("40d3388fd89f761a") != Object || !require("16e7364c30c01546")(arrayJoin)), "Array", {
    join: function join(separator) {
        return arrayJoin.call(toIObject(this), separator === undefined ? "," : separator);
    }
});

},{"b86ebc8c324c12a9":"V6uGr","a8b004bbbc4ee91a":"bg6wm","40d3388fd89f761a":"fCne3","16e7364c30c01546":"aAXr5"}],"aAXr5":[function(require,module,exports) {
"use strict";
var fails = require("65a8705a579be6c9");
module.exports = function(method, arg) {
    return !!method && fails(function() {
        // eslint-disable-next-line no-useless-call
        arg ? method.call(null, function() {}, 1) : method.call(null);
    });
};

},{"65a8705a579be6c9":"hJvAh"}],"2BjMO":[function(require,module,exports) {
"use strict";
var $export = require("fc3151eef3de7fd1");
var html = require("d6f22f3e2d6abc9d");
var cof = require("9d3ff992252cb466");
var toAbsoluteIndex = require("dcf3d2e21953e970");
var toLength = require("8da59e3fc4b84cfc");
var arraySlice = [].slice;
// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * require("929284f11cedba47")(function() {
    if (html) arraySlice.call(html);
}), "Array", {
    slice: function slice(begin, end) {
        var len = toLength(this.length);
        var klass = cof(this);
        end = end === undefined ? len : end;
        if (klass == "Array") return arraySlice.call(this, begin, end);
        var start = toAbsoluteIndex(begin, len);
        var upTo = toAbsoluteIndex(end, len);
        var size = toLength(upTo - start);
        var cloned = new Array(size);
        var i = 0;
        for(; i < size; i++)cloned[i] = klass == "String" ? this.charAt(start + i) : this[start + i];
        return cloned;
    }
});

},{"fc3151eef3de7fd1":"V6uGr","d6f22f3e2d6abc9d":"lBp6O","9d3ff992252cb466":"4xnMZ","dcf3d2e21953e970":"c8MSW","8da59e3fc4b84cfc":"6i4KF","929284f11cedba47":"hJvAh"}],"keegR":[function(require,module,exports) {
"use strict";
var $export = require("4a57289a8827ee27");
var aFunction = require("51546ae8d56cc07f");
var toObject = require("ded16757af74df50");
var fails = require("2557d9e9576f4ab8");
var $sort = [].sort;
var test = [
    1,
    2,
    3
];
$export($export.P + $export.F * (fails(function() {
    // IE8-
    test.sort(undefined);
}) || !fails(function() {
    // V8 bug
    test.sort(null);
// Old WebKit
}) || !require("4ad99c2340bbb0cc")($sort)), "Array", {
    // 22.1.3.25 Array.prototype.sort(comparefn)
    sort: function sort(comparefn) {
        return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
    }
});

},{"4a57289a8827ee27":"V6uGr","51546ae8d56cc07f":"cWXNC","ded16757af74df50":"88RFO","2557d9e9576f4ab8":"hJvAh","4ad99c2340bbb0cc":"aAXr5"}],"1f4BH":[function(require,module,exports) {
"use strict";
var $export = require("14816edd6b97a82c");
var $forEach = require("a732542d17180641")(0);
var STRICT = require("835216e60717f13a")([].forEach, true);
$export($export.P + $export.F * !STRICT, "Array", {
    // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
    forEach: function forEach(callbackfn /* , thisArg */ ) {
        return $forEach(this, callbackfn, arguments[1]);
    }
});

},{"14816edd6b97a82c":"V6uGr","a732542d17180641":"kjdjF","835216e60717f13a":"aAXr5"}],"kjdjF":[function(require,module,exports) {
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = require("85a70d828715a2c1");
var IObject = require("b1744e6e66347d14");
var toObject = require("dadfb5c111d088a4");
var toLength = require("a97cc8811734a5a4");
var asc = require("d56ca12d857b6a99");
module.exports = function(TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || asc;
    return function($this, callbackfn, that) {
        var O = toObject($this);
        var self = IObject(O);
        var f = ctx(callbackfn, that, 3);
        var length = toLength(self.length);
        var index = 0;
        var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
        var val, res;
        for(; length > index; index++)if (NO_HOLES || index in self) {
            val = self[index];
            res = f(val, index, O);
            if (TYPE) {
                if (IS_MAP) result[index] = res; // map
                else if (res) switch(TYPE){
                    case 3:
                        return true; // some
                    case 5:
                        return val; // find
                    case 6:
                        return index; // findIndex
                    case 2:
                        result.push(val); // filter
                }
                else if (IS_EVERY) return false; // every
            }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
};

},{"85a70d828715a2c1":"8I23f","b1744e6e66347d14":"fCne3","dadfb5c111d088a4":"88RFO","a97cc8811734a5a4":"6i4KF","d56ca12d857b6a99":"a9B1w"}],"a9B1w":[function(require,module,exports) {
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require("647acf8867f5f1d1");
module.exports = function(original, length) {
    return new (speciesConstructor(original))(length);
};

},{"647acf8867f5f1d1":"jNo3s"}],"jNo3s":[function(require,module,exports) {
var isObject = require("9e0cf0b9804982b");
var isArray = require("6c5b8b72b6391bee");
var SPECIES = require("985b622e3f9d3568")("species");
module.exports = function(original) {
    var C;
    if (isArray(original)) {
        C = original.constructor;
        // cross-realm fallback
        if (typeof C == "function" && (C === Array || isArray(C.prototype))) C = undefined;
        if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = undefined;
        }
    }
    return C === undefined ? Array : C;
};

},{"9e0cf0b9804982b":"8MCxb","6c5b8b72b6391bee":"7gyM5","985b622e3f9d3568":"irAMb"}],"8iGBP":[function(require,module,exports) {
"use strict";
var $export = require("4e88b74e00134d9");
var $map = require("f9d2a28bb9828954")(1);
$export($export.P + $export.F * !require("7998f8756e0d63a4")([].map, true), "Array", {
    // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
    map: function map(callbackfn /* , thisArg */ ) {
        return $map(this, callbackfn, arguments[1]);
    }
});

},{"4e88b74e00134d9":"V6uGr","f9d2a28bb9828954":"kjdjF","7998f8756e0d63a4":"aAXr5"}],"gW3DL":[function(require,module,exports) {
"use strict";
var $export = require("d526570d0a03c7d6");
var $filter = require("90b0f40efa2c0d04")(2);
$export($export.P + $export.F * !require("a7c6884023685de0")([].filter, true), "Array", {
    // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
    filter: function filter(callbackfn /* , thisArg */ ) {
        return $filter(this, callbackfn, arguments[1]);
    }
});

},{"d526570d0a03c7d6":"V6uGr","90b0f40efa2c0d04":"kjdjF","a7c6884023685de0":"aAXr5"}],"dXr0X":[function(require,module,exports) {
"use strict";
var $export = require("5bbd939d36338285");
var $some = require("efa85c70e95ead86")(3);
$export($export.P + $export.F * !require("4b08f81dab9f0590")([].some, true), "Array", {
    // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
    some: function some(callbackfn /* , thisArg */ ) {
        return $some(this, callbackfn, arguments[1]);
    }
});

},{"5bbd939d36338285":"V6uGr","efa85c70e95ead86":"kjdjF","4b08f81dab9f0590":"aAXr5"}],"lgG0H":[function(require,module,exports) {
"use strict";
var $export = require("4a5234dfd2a7fbe7");
var $every = require("7ddc72d361377254")(4);
$export($export.P + $export.F * !require("52075b018448a14")([].every, true), "Array", {
    // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
    every: function every(callbackfn /* , thisArg */ ) {
        return $every(this, callbackfn, arguments[1]);
    }
});

},{"4a5234dfd2a7fbe7":"V6uGr","7ddc72d361377254":"kjdjF","52075b018448a14":"aAXr5"}],"hYmWN":[function(require,module,exports) {
"use strict";
var $export = require("4a0c9533229795b6");
var $reduce = require("60378b8ac328c83a");
$export($export.P + $export.F * !require("9b3df2ae357be63c")([].reduce, true), "Array", {
    // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
    reduce: function reduce(callbackfn /* , initialValue */ ) {
        return $reduce(this, callbackfn, arguments.length, arguments[1], false);
    }
});

},{"4a0c9533229795b6":"V6uGr","60378b8ac328c83a":"j15nq","9b3df2ae357be63c":"aAXr5"}],"j15nq":[function(require,module,exports) {
var aFunction = require("162e28b83ca8984a");
var toObject = require("847633705b2b3c17");
var IObject = require("488de6d973a5cae9");
var toLength = require("4ae72c42d8f10779");
module.exports = function(that, callbackfn, aLen, memo, isRight) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IObject(O);
    var length = toLength(O.length);
    var index = isRight ? length - 1 : 0;
    var i = isRight ? -1 : 1;
    if (aLen < 2) for(;;){
        if (index in self) {
            memo = self[index];
            index += i;
            break;
        }
        index += i;
        if (isRight ? index < 0 : length <= index) throw TypeError("Reduce of empty array with no initial value");
    }
    for(; isRight ? index >= 0 : length > index; index += i)if (index in self) memo = callbackfn(memo, self[index], index, O);
    return memo;
};

},{"162e28b83ca8984a":"cWXNC","847633705b2b3c17":"88RFO","488de6d973a5cae9":"fCne3","4ae72c42d8f10779":"6i4KF"}],"3t0cc":[function(require,module,exports) {
"use strict";
var $export = require("2eec45a12cc679a1");
var $reduce = require("6bb7a23c2c3792c");
$export($export.P + $export.F * !require("7503fe2a34510b5f")([].reduceRight, true), "Array", {
    // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
    reduceRight: function reduceRight(callbackfn /* , initialValue */ ) {
        return $reduce(this, callbackfn, arguments.length, arguments[1], true);
    }
});

},{"2eec45a12cc679a1":"V6uGr","6bb7a23c2c3792c":"j15nq","7503fe2a34510b5f":"aAXr5"}],"ewYWL":[function(require,module,exports) {
"use strict";
var $export = require("8436a1dc255d243d");
var $indexOf = require("7c1ec752fae1f25e")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [
    1
].indexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !require("cc45643a9f44777e")($native)), "Array", {
    // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */ ) {
        return NEGATIVE_ZERO ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
    }
});

},{"8436a1dc255d243d":"V6uGr","7c1ec752fae1f25e":"f0gsM","cc45643a9f44777e":"aAXr5"}],"GonOa":[function(require,module,exports) {
"use strict";
var $export = require("5da13895e46c60fa");
var toIObject = require("d2353ed71e884eee");
var toInteger = require("683ed606347397cf");
var toLength = require("ffe7bf0e3ab947b2");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [
    1
].lastIndexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !require("b067dcad5bce9783")($native)), "Array", {
    // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */ ) {
        // convert -0 to +0
        if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
        var O = toIObject(this);
        var length = toLength(O.length);
        var index = length - 1;
        if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
        if (index < 0) index = length + index;
        for(; index >= 0; index--)if (index in O) {
            if (O[index] === searchElement) return index || 0;
        }
        return -1;
    }
});

},{"5da13895e46c60fa":"V6uGr","d2353ed71e884eee":"bg6wm","683ed606347397cf":"12G5z","ffe7bf0e3ab947b2":"6i4KF","b067dcad5bce9783":"aAXr5"}],"by5ly":[function(require,module,exports) {
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = require("da47ab991842db48");
$export($export.P, "Array", {
    copyWithin: require("f1450153fb4486")
});
require("87089a0f075ed65")("copyWithin");

},{"da47ab991842db48":"V6uGr","f1450153fb4486":"eN0Pf","87089a0f075ed65":"9tnCe"}],"eN0Pf":[function(require,module,exports) {
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
"use strict";
var toObject = require("fc822ad491d84792");
var toAbsoluteIndex = require("9e63b26c2d2c2340");
var toLength = require("e772b69b4bae481");
module.exports = [].copyWithin || function copyWithin(target /* = 0 */ , start /* = 0, end = @length */ ) {
    var O = toObject(this);
    var len = toLength(O.length);
    var to = toAbsoluteIndex(target, len);
    var from = toAbsoluteIndex(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
    var inc = 1;
    if (from < to && to < from + count) {
        inc = -1;
        from += count - 1;
        to += count - 1;
    }
    while(count-- > 0){
        if (from in O) O[to] = O[from];
        else delete O[to];
        to += inc;
        from += inc;
    }
    return O;
};

},{"fc822ad491d84792":"88RFO","9e63b26c2d2c2340":"c8MSW","e772b69b4bae481":"6i4KF"}],"9tnCe":[function(require,module,exports) {
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require("d1d4f96ee4ecb979")("unscopables");
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) require("830672aff90629bd")(ArrayProto, UNSCOPABLES, {});
module.exports = function(key) {
    ArrayProto[UNSCOPABLES][key] = true;
};

},{"d1d4f96ee4ecb979":"irAMb","830672aff90629bd":"6kOvw"}],"bjm3c":[function(require,module,exports) {
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = require("857b57e76a9518cc");
$export($export.P, "Array", {
    fill: require("8ea246d61b55ffd2")
});
require("87be4b62e1f00530")("fill");

},{"857b57e76a9518cc":"V6uGr","8ea246d61b55ffd2":"lyRTk","87be4b62e1f00530":"9tnCe"}],"lyRTk":[function(require,module,exports) {
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
"use strict";
var toObject = require("9cb7ade1960728c7");
var toAbsoluteIndex = require("a1ff17b726fa5f9b");
var toLength = require("e3303c4c2c3de16d");
module.exports = function fill(value /* , start = 0, end = @length */ ) {
    var O = toObject(this);
    var length = toLength(O.length);
    var aLen = arguments.length;
    var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
    var end = aLen > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
    while(endPos > index)O[index++] = value;
    return O;
};

},{"9cb7ade1960728c7":"88RFO","a1ff17b726fa5f9b":"c8MSW","e3303c4c2c3de16d":"6i4KF"}],"8R1kH":[function(require,module,exports) {
"use strict";
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = require("5842c9673b966f0b");
var $find = require("e7bc29368469a287")(5);
var KEY = "find";
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function() {
    forced = false;
});
$export($export.P + $export.F * forced, "Array", {
    find: function find(callbackfn /* , that = undefined */ ) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});
require("45fac2cbf09bbac")(KEY);

},{"5842c9673b966f0b":"V6uGr","e7bc29368469a287":"kjdjF","45fac2cbf09bbac":"9tnCe"}],"fvDo8":[function(require,module,exports) {
"use strict";
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = require("a1b3b76e32e248f0");
var $find = require("ae07557cd883a562")(6);
var KEY = "findIndex";
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function() {
    forced = false;
});
$export($export.P + $export.F * forced, "Array", {
    findIndex: function findIndex(callbackfn /* , that = undefined */ ) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});
require("25b28290ed04ff4d")(KEY);

},{"a1b3b76e32e248f0":"V6uGr","ae07557cd883a562":"kjdjF","25b28290ed04ff4d":"9tnCe"}],"kiiMz":[function(require,module,exports) {
require("40ac275c0bf4ed19")("Array");

},{"40ac275c0bf4ed19":"4qQrH"}],"4qQrH":[function(require,module,exports) {
"use strict";
var global = require("f12070d01f0105c5");
var dP = require("7f5002d269ed9475");
var DESCRIPTORS = require("62540ead02776b28");
var SPECIES = require("80720736c7369fff")("species");
module.exports = function(KEY) {
    var C = global[KEY];
    if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
        configurable: true,
        get: function() {
            return this;
        }
    });
};

},{"f12070d01f0105c5":"aN7D9","7f5002d269ed9475":"kXoVM","62540ead02776b28":"cTJEh","80720736c7369fff":"irAMb"}],"8MwXZ":[function(require,module,exports) {
"use strict";
var addToUnscopables = require("d51c5dca83369040");
var step = require("1b40f23ff6410fe1");
var Iterators = require("472b8790cd6a439e");
var toIObject = require("86bcda315f9f923e");
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require("a4a83f328feb5f97")(Array, "Array", function(iterated, kind) {
    this._t = toIObject(iterated); // target
    this._i = 0; // next index
    this._k = kind; // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function() {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
        this._t = undefined;
        return step(1);
    }
    if (kind == "keys") return step(0, index);
    if (kind == "values") return step(0, O[index]);
    return step(0, [
        index,
        O[index]
    ]);
}, "values");
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;
addToUnscopables("keys");
addToUnscopables("values");
addToUnscopables("entries");

},{"d51c5dca83369040":"9tnCe","1b40f23ff6410fe1":"gqlw7","472b8790cd6a439e":"iLt3f","86bcda315f9f923e":"bg6wm","a4a83f328feb5f97":"21NXr"}],"gqlw7":[function(require,module,exports) {
module.exports = function(done, value) {
    return {
        value: value,
        done: !!done
    };
};

},{}],"dxUy0":[function(require,module,exports) {
var global = require("80372437550c9bba");
var inheritIfRequired = require("c0dc525035d02408");
var dP = require("3970ce98e570a66b").f;
var gOPN = require("66e41d91aaa41ce0").f;
var isRegExp = require("bd3bf63b54838480");
var $flags = require("64e2dc146a3c3c7d");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;
if (require("718ff0ddf41207c8") && (!CORRECT_NEW || require("63b4a5caa2e10b61")(function() {
    re2[require("1eb254370c60e3d5")("match")] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, "i") != "/a/i";
}))) {
    $RegExp = function RegExp(p, f) {
        var tiRE = this instanceof $RegExp;
        var piRE = isRegExp(p);
        var fiU = f === undefined;
        return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
    };
    var proxy = function(key) {
        key in $RegExp || dP($RegExp, key, {
            configurable: true,
            get: function() {
                return Base[key];
            },
            set: function(it) {
                Base[key] = it;
            }
        });
    };
    for(var keys = gOPN(Base), i = 0; keys.length > i;)proxy(keys[i++]);
    proto.constructor = $RegExp;
    $RegExp.prototype = proto;
    require("889e4f0773521a98")(global, "RegExp", $RegExp);
}
require("5989b394352b4425")("RegExp");

},{"80372437550c9bba":"aN7D9","c0dc525035d02408":"5Thd8","3970ce98e570a66b":"kXoVM","66e41d91aaa41ce0":"8ObWh","bd3bf63b54838480":"i98vd","64e2dc146a3c3c7d":"cVXBX","718ff0ddf41207c8":"cTJEh","63b4a5caa2e10b61":"hJvAh","1eb254370c60e3d5":"irAMb","889e4f0773521a98":"1Nq8R","5989b394352b4425":"4qQrH"}],"cVXBX":[function(require,module,exports) {
"use strict";
// 21.2.5.3 get RegExp.prototype.flags
var anObject = require("775685cdcec4031c");
module.exports = function() {
    var that = anObject(this);
    var result = "";
    if (that.global) result += "g";
    if (that.ignoreCase) result += "i";
    if (that.multiline) result += "m";
    if (that.unicode) result += "u";
    if (that.sticky) result += "y";
    return result;
};

},{"775685cdcec4031c":"jvvZN"}],"kClbE":[function(require,module,exports) {
"use strict";
var regexpExec = require("83977233846759eb");
require("e5ec81b9776169fa")({
    target: "RegExp",
    proto: true,
    forced: regexpExec !== /./.exec
}, {
    exec: regexpExec
});

},{"83977233846759eb":"7W4YO","e5ec81b9776169fa":"V6uGr"}],"7W4YO":[function(require,module,exports) {
"use strict";
var regexpFlags = require("b18976365d49c099");
var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;
var patchedExec = nativeExec;
var LAST_INDEX = "lastIndex";
var UPDATES_LAST_INDEX_WRONG = function() {
    var re1 = /a/, re2 = /b*/g;
    nativeExec.call(re1, "a");
    nativeExec.call(re2, "a");
    return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
}();
// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec("")[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;
if (PATCH) patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    if (NPCG_INCLUDED) reCopy = new RegExp("^" + re.source + "$(?!\\s)", regexpFlags.call(re));
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];
    match = nativeExec.call(re, str);
    if (UPDATES_LAST_INDEX_WRONG && match) re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    if (NPCG_INCLUDED && match && match.length > 1) // Fix browsers whose `exec` methods don't consistently return `undefined`
    // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
    // eslint-disable-next-line no-loop-func
    nativeReplace.call(match[0], reCopy, function() {
        for(i = 1; i < arguments.length - 2; i++)if (arguments[i] === undefined) match[i] = undefined;
    });
    return match;
};
module.exports = patchedExec;

},{"b18976365d49c099":"cVXBX"}],"8Yu8V":[function(require,module,exports) {
"use strict";
require("bf237ce421419801");
var anObject = require("32dcfc599fc8fa6f");
var $flags = require("996b4242893ac273");
var DESCRIPTORS = require("bd1d0c235f4563b1");
var TO_STRING = "toString";
var $toString = /./[TO_STRING];
var define = function(fn) {
    require("51f798ee83c26aff")(RegExp.prototype, TO_STRING, fn, true);
};
// 21.2.5.14 RegExp.prototype.toString()
if (require("78f47fa71fa3c3b7")(function() {
    return $toString.call({
        source: "a",
        flags: "b"
    }) != "/a/b";
})) define(function toString() {
    var R = anObject(this);
    return "/".concat(R.source, "/", "flags" in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
});
else if ($toString.name != TO_STRING) define(function toString() {
    return $toString.call(this);
});

},{"bf237ce421419801":"vCATP","32dcfc599fc8fa6f":"jvvZN","996b4242893ac273":"cVXBX","bd1d0c235f4563b1":"cTJEh","51f798ee83c26aff":"1Nq8R","78f47fa71fa3c3b7":"hJvAh"}],"vCATP":[function(require,module,exports) {
// 21.2.5.3 get RegExp.prototype.flags()
if (require("f979319066868244") && /./g.flags != "g") require("7a70bc15b04e1d93").f(RegExp.prototype, "flags", {
    configurable: true,
    get: require("f4c81a788c207635")
});

},{"f979319066868244":"cTJEh","7a70bc15b04e1d93":"kXoVM","f4c81a788c207635":"cVXBX"}],"6RK4Q":[function(require,module,exports) {
"use strict";
var anObject = require("c6634173e02dc455");
var toLength = require("6d19feb414a8f771");
var advanceStringIndex = require("b3311207b0f4e826");
var regExpExec = require("786fed2e7f6c196e");
// @@match logic
require("1e72227f667d7fbe")("match", 1, function(defined, MATCH, $match, maybeCallNative) {
    return [
        // `String.prototype.match` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.match
        function match(regexp) {
            var O = defined(this);
            var fn = regexp == undefined ? undefined : regexp[MATCH];
            return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
        },
        // `RegExp.prototype[@@match]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
        function(regexp) {
            var res = maybeCallNative($match, regexp, this);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            if (!rx.global) return regExpExec(rx, S);
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
            var A = [];
            var n = 0;
            var result;
            while((result = regExpExec(rx, S)) !== null){
                var matchStr = String(result[0]);
                A[n] = matchStr;
                if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                n++;
            }
            return n === 0 ? null : A;
        }
    ];
});

},{"c6634173e02dc455":"jvvZN","6d19feb414a8f771":"6i4KF","b3311207b0f4e826":"2tt7u","786fed2e7f6c196e":"f1XKf","1e72227f667d7fbe":"dDBb7"}],"2tt7u":[function(require,module,exports) {
"use strict";
var at = require("eb1911677c2b7767")(true);
// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function(S, index, unicode) {
    return index + (unicode ? at(S, index).length : 1);
};

},{"eb1911677c2b7767":"5FTpo"}],"f1XKf":[function(require,module,exports) {
"use strict";
var classof = require("be4d38c98980c4eb");
var builtinExec = RegExp.prototype.exec;
// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function(R, S) {
    var exec = R.exec;
    if (typeof exec === "function") {
        var result = exec.call(R, S);
        if (typeof result !== "object") throw new TypeError("RegExp exec method returned something other than an Object or null");
        return result;
    }
    if (classof(R) !== "RegExp") throw new TypeError("RegExp#exec called on incompatible receiver");
    return builtinExec.call(R, S);
};

},{"be4d38c98980c4eb":"7IFyn"}],"dDBb7":[function(require,module,exports) {
"use strict";
require("399a5c2685f5eabf");
var redefine = require("c8249fc8f14cc9bf");
var hide = require("6ab755b33e6c8d9");
var fails = require("2eee7a8935588da5");
var defined = require("ab0043e2a5ffecd0");
var wks = require("9ac8af721db068d0");
var regexpExec = require("febb114467bb2007");
var SPECIES = wks("species");
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function() {
        var result = [];
        result.groups = {
            a: "7"
        };
        return result;
    };
    return "".replace(re, "$<a>") !== "7";
});
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function() {
    // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function() {
        return originalExec.apply(this, arguments);
    };
    var result = "ab".split(re);
    return result.length === 2 && result[0] === "a" && result[1] === "b";
}();
module.exports = function(KEY, length, exec) {
    var SYMBOL = wks(KEY);
    var DELEGATES_TO_SYMBOL = !fails(function() {
        // String methods call symbol-named RegEp methods
        var O = {};
        O[SYMBOL] = function() {
            return 7;
        };
        return ""[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function() {
        // Symbol-named RegExp methods call .exec
        var execCalled = false;
        var re = /a/;
        re.exec = function() {
            execCalled = true;
            return null;
        };
        if (KEY === "split") {
            // RegExp[@@split] doesn't call the regex's exec method, but first creates
            // a new one. We need to return the patched regex when creating the new one.
            re.constructor = {};
            re.constructor[SPECIES] = function() {
                return re;
            };
        }
        re[SYMBOL]("");
        return !execCalled;
    }) : undefined;
    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === "replace" && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
        var nativeRegExpMethod = /./[SYMBOL];
        var fns = exec(defined, SYMBOL, ""[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
            if (regexp.exec === regexpExec) {
                if (DELEGATES_TO_SYMBOL && !forceStringMethod) // The native String method already delegates to @@method (this
                // polyfilled function), leasing to infinite recursion.
                // We avoid it by directly calling the native @@method method.
                return {
                    done: true,
                    value: nativeRegExpMethod.call(regexp, str, arg2)
                };
                return {
                    done: true,
                    value: nativeMethod.call(str, regexp, arg2)
                };
            }
            return {
                done: false
            };
        });
        var strfn = fns[0];
        var rxfn = fns[1];
        redefine(String.prototype, KEY, strfn);
        hide(RegExp.prototype, SYMBOL, length == 2 ? function(string, arg) {
            return rxfn.call(string, this, arg);
        } : function(string) {
            return rxfn.call(string, this);
        });
    }
};

},{"399a5c2685f5eabf":"kClbE","c8249fc8f14cc9bf":"1Nq8R","6ab755b33e6c8d9":"6kOvw","2eee7a8935588da5":"hJvAh","ab0043e2a5ffecd0":"fDNME","9ac8af721db068d0":"irAMb","febb114467bb2007":"7W4YO"}],"keAWg":[function(require,module,exports) {
"use strict";
var anObject = require("e6c1bd5473a677ca");
var toObject = require("b562d6e0987907e2");
var toLength = require("6631ed129c393eba");
var toInteger = require("88d71e3fd43d9c28");
var advanceStringIndex = require("6d8000832081cb0e");
var regExpExec = require("bed722da05cb7b05");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;
var maybeToString = function(it) {
    return it === undefined ? it : String(it);
};
// @@replace logic
require("48ef074ae612bff5")("replace", 2, function(defined, REPLACE, $replace, maybeCallNative) {
    return [
        // `String.prototype.replace` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.replace
        function replace(searchValue, replaceValue) {
            var O = defined(this);
            var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
            return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
        },
        // `RegExp.prototype[@@replace]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
        function(regexp, replaceValue) {
            var res = maybeCallNative($replace, regexp, this, replaceValue);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var functionalReplace = typeof replaceValue === "function";
            if (!functionalReplace) replaceValue = String(replaceValue);
            var global = rx.global;
            if (global) {
                var fullUnicode = rx.unicode;
                rx.lastIndex = 0;
            }
            var results = [];
            while(true){
                var result = regExpExec(rx, S);
                if (result === null) break;
                results.push(result);
                if (!global) break;
                var matchStr = String(result[0]);
                if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            }
            var accumulatedResult = "";
            var nextSourcePosition = 0;
            for(var i = 0; i < results.length; i++){
                result = results[i];
                var matched = String(result[0]);
                var position = max(min(toInteger(result.index), S.length), 0);
                var captures = [];
                // NOTE: This is equivalent to
                //   captures = result.slice(1).map(maybeToString)
                // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                for(var j = 1; j < result.length; j++)captures.push(maybeToString(result[j]));
                var namedCaptures = result.groups;
                if (functionalReplace) {
                    var replacerArgs = [
                        matched
                    ].concat(captures, position, S);
                    if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                    var replacement = String(replaceValue.apply(undefined, replacerArgs));
                } else replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                if (position >= nextSourcePosition) {
                    accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                    nextSourcePosition = position + matched.length;
                }
            }
            return accumulatedResult + S.slice(nextSourcePosition);
        }
    ];
    // https://tc39.github.io/ecma262/#sec-getsubstitution
    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
        var tailPos = position + matched.length;
        var m = captures.length;
        var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
        if (namedCaptures !== undefined) {
            namedCaptures = toObject(namedCaptures);
            symbols = SUBSTITUTION_SYMBOLS;
        }
        return $replace.call(replacement, symbols, function(match, ch) {
            var capture;
            switch(ch.charAt(0)){
                case "$":
                    return "$";
                case "&":
                    return matched;
                case "`":
                    return str.slice(0, position);
                case "'":
                    return str.slice(tailPos);
                case "<":
                    capture = namedCaptures[ch.slice(1, -1)];
                    break;
                default:
                    var n = +ch;
                    if (n === 0) return match;
                    if (n > m) {
                        var f = floor(n / 10);
                        if (f === 0) return match;
                        if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                        return match;
                    }
                    capture = captures[n - 1];
            }
            return capture === undefined ? "" : capture;
        });
    }
});

},{"e6c1bd5473a677ca":"jvvZN","b562d6e0987907e2":"88RFO","6631ed129c393eba":"6i4KF","88d71e3fd43d9c28":"12G5z","6d8000832081cb0e":"2tt7u","bed722da05cb7b05":"f1XKf","48ef074ae612bff5":"dDBb7"}],"fzQ43":[function(require,module,exports) {
"use strict";
var anObject = require("6f3d9dae65eb8188");
var sameValue = require("487ba5173107ad06");
var regExpExec = require("ba50a60c6b262a41");
// @@search logic
require("600450f67bc28e21")("search", 1, function(defined, SEARCH, $search, maybeCallNative) {
    return [
        // `String.prototype.search` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.search
        function search(regexp) {
            var O = defined(this);
            var fn = regexp == undefined ? undefined : regexp[SEARCH];
            return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
        },
        // `RegExp.prototype[@@search]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
        function(regexp) {
            var res = maybeCallNative($search, regexp, this);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var previousLastIndex = rx.lastIndex;
            if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
            var result = regExpExec(rx, S);
            if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
            return result === null ? -1 : result.index;
        }
    ];
});

},{"6f3d9dae65eb8188":"jvvZN","487ba5173107ad06":"7uyGs","ba50a60c6b262a41":"f1XKf","600450f67bc28e21":"dDBb7"}],"hFfcj":[function(require,module,exports) {
"use strict";
var isRegExp = require("54781ea69650ff8");
var anObject = require("d483ac84ffa879f2");
var speciesConstructor = require("226ccaf5bb7bf35d");
var advanceStringIndex = require("8e226ff373f74c84");
var toLength = require("3a8aee655245654f");
var callRegExpExec = require("de091a5344ce6048");
var regexpExec = require("538e4595141e0428");
var fails = require("485e395e4a2526de");
var $min = Math.min;
var $push = [].push;
var $SPLIT = "split";
var LENGTH = "length";
var LAST_INDEX = "lastIndex";
var MAX_UINT32 = 0xffffffff;
// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function() {
    RegExp(MAX_UINT32, "y");
});
// @@split logic
require("63e4a602691d5c17")("split", 2, function(defined, SPLIT, $split, maybeCallNative) {
    var internalSplit;
    if ("abbc"[$SPLIT](/(b)*/)[1] == "c" || "test"[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || "ab"[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || "."[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || "."[$SPLIT](/()()/)[LENGTH] > 1 || ""[$SPLIT](/.?/)[LENGTH]) // based on es5-shim implementation, need to rework it
    internalSplit = function(separator, limit) {
        var string = String(this);
        if (separator === undefined && limit === 0) return [];
        // If `separator` is not a regex, use native split
        if (!isRegExp(separator)) return $split.call(string, separator, limit);
        var output = [];
        var flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.unicode ? "u" : "") + (separator.sticky ? "y" : "");
        var lastLastIndex = 0;
        var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + "g");
        var match, lastIndex, lastLength;
        while(match = regexpExec.call(separatorCopy, string)){
            lastIndex = separatorCopy[LAST_INDEX];
            if (lastIndex > lastLastIndex) {
                output.push(string.slice(lastLastIndex, match.index));
                if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
                lastLength = match[0][LENGTH];
                lastLastIndex = lastIndex;
                if (output[LENGTH] >= splitLimit) break;
            }
            if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
        }
        if (lastLastIndex === string[LENGTH]) {
            if (lastLength || !separatorCopy.test("")) output.push("");
        } else output.push(string.slice(lastLastIndex));
        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
    else if ("0"[$SPLIT](undefined, 0)[LENGTH]) internalSplit = function(separator, limit) {
        return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
    else internalSplit = $split;
    return [
        // `String.prototype.split` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.split
        function split(separator, limit) {
            var O = defined(this);
            var splitter = separator == undefined ? undefined : separator[SPLIT];
            return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
        },
        // `RegExp.prototype[@@split]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
        //
        // NOTE: This cannot be properly polyfilled in engines that don't support
        // the 'y' flag.
        function(regexp, limit) {
            var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
            if (res.done) return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var C = speciesConstructor(rx, RegExp);
            var unicodeMatching = rx.unicode;
            var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (SUPPORTS_Y ? "y" : "g");
            // ^(? + rx + ) is needed, in combination with some S slicing, to
            // simulate the 'y' flag.
            var splitter = new C(SUPPORTS_Y ? rx : "^(?:" + rx.source + ")", flags);
            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (S.length === 0) return callRegExpExec(splitter, S) === null ? [
                S
            ] : [];
            var p = 0;
            var q = 0;
            var A = [];
            while(q < S.length){
                splitter.lastIndex = SUPPORTS_Y ? q : 0;
                var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                var e;
                if (z === null || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) q = advanceStringIndex(S, q, unicodeMatching);
                else {
                    A.push(S.slice(p, q));
                    if (A.length === lim) return A;
                    for(var i = 1; i <= z.length - 1; i++){
                        A.push(z[i]);
                        if (A.length === lim) return A;
                    }
                    q = p = e;
                }
            }
            A.push(S.slice(p));
            return A;
        }
    ];
});

},{"54781ea69650ff8":"i98vd","d483ac84ffa879f2":"jvvZN","226ccaf5bb7bf35d":"gbQWK","8e226ff373f74c84":"2tt7u","3a8aee655245654f":"6i4KF","de091a5344ce6048":"f1XKf","538e4595141e0428":"7W4YO","485e395e4a2526de":"hJvAh","63e4a602691d5c17":"dDBb7"}],"gbQWK":[function(require,module,exports) {
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require("e180375600aa421b");
var aFunction = require("d1bfe15a5be8fde4");
var SPECIES = require("815bf9106a2c841d")("species");
module.exports = function(O, D) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"e180375600aa421b":"jvvZN","d1bfe15a5be8fde4":"cWXNC","815bf9106a2c841d":"irAMb"}],"gU1le":[function(require,module,exports) {
"use strict";
var LIBRARY = require("371fb788d3e25ee2");
var global = require("de0e6c5c5eaf09ec");
var ctx = require("c72364422237a12b");
var classof = require("12098a4a00b6a26");
var $export = require("7d074229bf724ef9");
var isObject = require("3d1b39f67a207a11");
var aFunction = require("1ea81930212be67b");
var anInstance = require("c38ca40e425bbdaf");
var forOf = require("3f2d805e881657d8");
var speciesConstructor = require("cdba72292e2cbaaa");
var task = require("7d4dae83e91c8bf0").set;
var microtask = require("5d8e0718ca67a0af")();
var newPromiseCapabilityModule = require("4a57915564ebbb2a");
var perform = require("181832828365fc8");
var userAgent = require("bcbb063c1566e231");
var promiseResolve = require("2f21244c25f4a53e");
var PROMISE = "Promise";
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || "";
var $Promise = global[PROMISE];
var isNode = classof(process) == "process";
var empty = function() {};
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
var USE_NATIVE = !!function() {
    try {
        // correct subclassing with @@species support
        var promise = $Promise.resolve(1);
        var FakePromise = (promise.constructor = {})[require("bead1b906d4d2012")("species")] = function(exec) {
            exec(empty, empty);
        };
        // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
        return (isNode || typeof PromiseRejectionEvent == "function") && promise.then(empty) instanceof FakePromise && v8.indexOf("6.6") !== 0 && userAgent.indexOf("Chrome/66") === -1;
    } catch (e) {}
}();
// helpers
var isThenable = function(it) {
    var then;
    return isObject(it) && typeof (then = it.then) == "function" ? then : false;
};
var notify = function(promise, isReject) {
    if (promise._n) return;
    promise._n = true;
    var chain = promise._c;
    microtask(function() {
        var value = promise._v;
        var ok = promise._s == 1;
        var i = 0;
        var run = function(reaction) {
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            var result, then, exited;
            try {
                if (handler) {
                    if (!ok) {
                        if (promise._h == 2) onHandleUnhandled(promise);
                        promise._h = 1;
                    }
                    if (handler === true) result = value;
                    else {
                        if (domain) domain.enter();
                        result = handler(value); // may throw
                        if (domain) {
                            domain.exit();
                            exited = true;
                        }
                    }
                    if (result === reaction.promise) reject(TypeError("Promise-chain cycle"));
                    else if (then = isThenable(result)) then.call(result, resolve, reject);
                    else resolve(result);
                } else reject(value);
            } catch (e) {
                if (domain && !exited) domain.exit();
                reject(e);
            }
        };
        while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
        promise._c = [];
        promise._n = false;
        if (isReject && !promise._h) onUnhandled(promise);
    });
};
var onUnhandled = function(promise) {
    task.call(global, function() {
        var value = promise._v;
        var unhandled = isUnhandled(promise);
        var result, handler, console;
        if (unhandled) {
            result = perform(function() {
                if (isNode) process.emit("unhandledRejection", value, promise);
                else if (handler = global.onunhandledrejection) handler({
                    promise: promise,
                    reason: value
                });
                else if ((console = global.console) && console.error) console.error("Unhandled promise rejection", value);
            });
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            promise._h = isNode || isUnhandled(promise) ? 2 : 1;
        }
        promise._a = undefined;
        if (unhandled && result.e) throw result.v;
    });
};
var isUnhandled = function(promise) {
    return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function(promise) {
    task.call(global, function() {
        var handler;
        if (isNode) process.emit("rejectionHandled", promise);
        else if (handler = global.onrejectionhandled) handler({
            promise: promise,
            reason: promise._v
        });
    });
};
var $reject = function(value) {
    var promise = this;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    promise._v = value;
    promise._s = 2;
    if (!promise._a) promise._a = promise._c.slice();
    notify(promise, true);
};
var $resolve = function(value) {
    var promise = this;
    var then;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    try {
        if (promise === value) throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) microtask(function() {
            var wrapper = {
                _w: promise,
                _d: false
            }; // wrap
            try {
                then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
                $reject.call(wrapper, e);
            }
        });
        else {
            promise._v = value;
            promise._s = 1;
            notify(promise, false);
        }
    } catch (e) {
        $reject.call({
            _w: promise,
            _d: false
        }, e); // wrap
    }
};
// constructor polyfill
if (!USE_NATIVE) {
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor) {
        anInstance(this, $Promise, PROMISE, "_h");
        aFunction(executor);
        Internal.call(this);
        try {
            executor(ctx($resolve, this, 1), ctx($reject, this, 1));
        } catch (err) {
            $reject.call(this, err);
        }
    };
    // eslint-disable-next-line no-unused-vars
    Internal = function Promise(executor) {
        this._c = []; // <- awaiting reactions
        this._a = undefined; // <- checked in isUnhandled reactions
        this._s = 0; // <- state
        this._d = false; // <- done
        this._v = undefined; // <- value
        this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
        this._n = false; // <- notify
    };
    Internal.prototype = require("18e49a148f1f2edd")($Promise.prototype, {
        // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
        then: function then(onFulfilled, onRejected) {
            var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
            reaction.ok = typeof onFulfilled == "function" ? onFulfilled : true;
            reaction.fail = typeof onRejected == "function" && onRejected;
            reaction.domain = isNode ? process.domain : undefined;
            this._c.push(reaction);
            if (this._a) this._a.push(reaction);
            if (this._s) notify(this, false);
            return reaction.promise;
        },
        // 25.4.5.1 Promise.prototype.catch(onRejected)
        "catch": function(onRejected) {
            return this.then(undefined, onRejected);
        }
    });
    OwnPromiseCapability = function() {
        var promise = new Internal();
        this.promise = promise;
        this.resolve = ctx($resolve, promise, 1);
        this.reject = ctx($reject, promise, 1);
    };
    newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
        return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
}
$export($export.G + $export.W + $export.F * !USE_NATIVE, {
    Promise: $Promise
});
require("d133728d0503b507")($Promise, PROMISE);
require("532a511ca76c57cf")(PROMISE);
Wrapper = require("be411fbb5686adbf")[PROMISE];
// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
        var capability = newPromiseCapability(this);
        var $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
    }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
        return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
    }
});
$export($export.S + $export.F * !(USE_NATIVE && require("7e16e5fa01f8cae2")(function(iter) {
    $Promise.all(iter)["catch"](empty);
})), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
            var values = [];
            var index = 0;
            var remaining = 1;
            forOf(iterable, false, function(promise) {
                var $index = index++;
                var alreadyCalled = false;
                values.push(undefined);
                remaining++;
                C.resolve(promise).then(function(value) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[$index] = value;
                    --remaining || resolve(values);
                }, reject);
            });
            --remaining || resolve(values);
        });
        if (result.e) reject(result.v);
        return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var reject = capability.reject;
        var result = perform(function() {
            forOf(iterable, false, function(promise) {
                C.resolve(promise).then(capability.resolve, reject);
            });
        });
        if (result.e) reject(result.v);
        return capability.promise;
    }
});

},{"371fb788d3e25ee2":"fdMee","de0e6c5c5eaf09ec":"aN7D9","c72364422237a12b":"8I23f","12098a4a00b6a26":"7IFyn","7d074229bf724ef9":"V6uGr","3d1b39f67a207a11":"8MCxb","1ea81930212be67b":"cWXNC","c38ca40e425bbdaf":"6fnrU","3f2d805e881657d8":"iK4qh","cdba72292e2cbaaa":"gbQWK","7d4dae83e91c8bf0":"5uev1","5d8e0718ca67a0af":"fycjF","4a57915564ebbb2a":"h9ETM","181832828365fc8":"7JBHR","bcbb063c1566e231":"dRhyz","2f21244c25f4a53e":"5zKPp","bead1b906d4d2012":"irAMb","18e49a148f1f2edd":"5DvoS","d133728d0503b507":"35t6Z","532a511ca76c57cf":"4qQrH","be411fbb5686adbf":"dgbK5","7e16e5fa01f8cae2":"7GLF7"}],"6fnrU":[function(require,module,exports) {
module.exports = function(it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) throw TypeError(name + ": incorrect invocation!");
    return it;
};

},{}],"iK4qh":[function(require,module,exports) {
var ctx = require("344b7a703b4a8d33");
var call = require("4e3911dcd6245fb0");
var isArrayIter = require("cf6b9ad4ee5b0ca0");
var anObject = require("50dec1e16d0a1de5");
var toLength = require("e95ed1a8be692276");
var getIterFn = require("33dd45004194696c");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR) {
    var iterFn = ITERATOR ? function() {
        return iterable;
    } : getIterFn(iterable);
    var f = ctx(fn, that, entries ? 2 : 1);
    var index = 0;
    var length, step, iterator, result;
    if (typeof iterFn != "function") throw TypeError(iterable + " is not iterable!");
    // fast case for arrays with default iterator
    if (isArrayIter(iterFn)) for(length = toLength(iterable.length); length > index; index++){
        result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
    }
    else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done;){
        result = call(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
    }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"344b7a703b4a8d33":"8I23f","4e3911dcd6245fb0":"eoNGZ","cf6b9ad4ee5b0ca0":"79MVP","50dec1e16d0a1de5":"jvvZN","e95ed1a8be692276":"6i4KF","33dd45004194696c":"7wXxa"}],"5uev1":[function(require,module,exports) {
var ctx = require("32356da8c45c3f2c");
var invoke = require("fb4cc083a1a0dab7");
var html = require("4c3e5a730f62d9d7");
var cel = require("926c67e3e4b7eb5");
var global = require("597566726cfd8373");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var defer, channel, port;
var run = function() {
    var id = +this;
    // eslint-disable-next-line no-prototype-builtins
    if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var listener = function(event) {
    run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
    setTask = function setImmediate(fn) {
        var args = [];
        var i = 1;
        while(arguments.length > i)args.push(arguments[i++]);
        queue[++counter] = function() {
            // eslint-disable-next-line no-new-func
            invoke(typeof fn == "function" ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
    };
    clearTask = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (require("319575ec41286486")(process) == "process") defer = function(id) {
        process.nextTick(ctx(run, id, 1));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(ctx(run, id, 1));
    };
    else if (MessageChannel) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = ctx(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && typeof postMessage == "function" && !global.importScripts) {
        defer = function(id) {
            global.postMessage(id + "", "*");
        };
        global.addEventListener("message", listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in cel("script")) defer = function(id) {
        html.appendChild(cel("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run.call(id);
        };
    };
    else defer = function(id) {
        setTimeout(ctx(run, id, 1), 0);
    };
}
module.exports = {
    set: setTask,
    clear: clearTask
};

},{"32356da8c45c3f2c":"8I23f","fb4cc083a1a0dab7":"eUrKu","4c3e5a730f62d9d7":"lBp6O","926c67e3e4b7eb5":"62KT7","597566726cfd8373":"aN7D9","319575ec41286486":"4xnMZ"}],"fycjF":[function(require,module,exports) {
var global = require("694dced00e8dc026");
var macrotask = require("b718a14bfedf603a").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require("466ee816b23ca065")(process) == "process";
module.exports = function() {
    var head, last, notify;
    var flush = function() {
        var parent, fn;
        if (isNode && (parent = process.domain)) parent.exit();
        while(head){
            fn = head.fn;
            head = head.next;
            try {
                fn();
            } catch (e) {
                if (head) notify();
                else last = undefined;
                throw e;
            }
        }
        last = undefined;
        if (parent) parent.enter();
    };
    // Node.js
    if (isNode) notify = function() {
        process.nextTick(flush);
    };
    else if (Observer && !(global.navigator && global.navigator.standalone)) {
        var toggle = true;
        var node = document.createTextNode("");
        new Observer(flush).observe(node, {
            characterData: true
        }); // eslint-disable-line no-new
        notify = function() {
            node.data = toggle = !toggle;
        };
    // environments with maybe non-completely correct, but existent Promise
    } else if (Promise && Promise.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        var promise = Promise.resolve(undefined);
        notify = function() {
            promise.then(flush);
        };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
    } else notify = function() {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global, flush);
    };
    return function(fn) {
        var task = {
            fn: fn,
            next: undefined
        };
        if (last) last.next = task;
        if (!head) {
            head = task;
            notify();
        }
        last = task;
    };
};

},{"694dced00e8dc026":"aN7D9","b718a14bfedf603a":"5uev1","466ee816b23ca065":"4xnMZ"}],"h9ETM":[function(require,module,exports) {
"use strict";
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require("9e95d22305e51341");
function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError("Bad Promise constructor");
        resolve = $$resolve;
        reject = $$reject;
    });
    this.resolve = aFunction(resolve);
    this.reject = aFunction(reject);
}
module.exports.f = function(C) {
    return new PromiseCapability(C);
};

},{"9e95d22305e51341":"cWXNC"}],"7JBHR":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return {
            e: false,
            v: exec()
        };
    } catch (e) {
        return {
            e: true,
            v: e
        };
    }
};

},{}],"dRhyz":[function(require,module,exports) {
var global = require("a36a05c591620af2");
var navigator = global.navigator;
module.exports = navigator && navigator.userAgent || "";

},{"a36a05c591620af2":"aN7D9"}],"5zKPp":[function(require,module,exports) {
var anObject = require("fb7cac3fec17cb98");
var isObject = require("cd1451dcfb16951c");
var newPromiseCapability = require("d863eeb559892235");
module.exports = function(C, x) {
    anObject(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
};

},{"fb7cac3fec17cb98":"jvvZN","cd1451dcfb16951c":"8MCxb","d863eeb559892235":"h9ETM"}],"5DvoS":[function(require,module,exports) {
var redefine = require("306bb238b15d00ab");
module.exports = function(target, src, safe) {
    for(var key in src)redefine(target, key, src[key], safe);
    return target;
};

},{"306bb238b15d00ab":"1Nq8R"}],"3COB4":[function(require,module,exports) {
"use strict";
var strong = require("f7486487c635bcd4");
var validate = require("bf6ca021f310b920");
var MAP = "Map";
// 23.1 Map Objects
module.exports = require("c126fd59477c77f2")(MAP, function(get) {
    return function Map() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
}, {
    // 23.1.3.6 Map.prototype.get(key)
    get: function get(key) {
        var entry = strong.getEntry(validate(this, MAP), key);
        return entry && entry.v;
    },
    // 23.1.3.9 Map.prototype.set(key, value)
    set: function set(key, value) {
        return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
    }
}, strong, true);

},{"f7486487c635bcd4":"lWGng","bf6ca021f310b920":"25a4k","c126fd59477c77f2":"hloha"}],"lWGng":[function(require,module,exports) {
"use strict";
var dP = require("5bfd79c5a759b646").f;
var create = require("6a12fa151c5a1082");
var redefineAll = require("ce3a1544e39ad806");
var ctx = require("35bb843ababdb58b");
var anInstance = require("45b2cec3cb385c37");
var forOf = require("e2e983c0ab2c54cb");
var $iterDefine = require("459ce0bc2f23417c");
var step = require("8270b8796c6384bd");
var setSpecies = require("8de729f0aadda0a6");
var DESCRIPTORS = require("a9fb8ddf192a772d");
var fastKey = require("ae7461b0d0dd22e9").fastKey;
var validate = require("823c8ba6cc2133ce");
var SIZE = DESCRIPTORS ? "_s" : "size";
var getEntry = function(that, key) {
    // fast case
    var index = fastKey(key);
    var entry;
    if (index !== "F") return that._i[index];
    // frozen object case
    for(entry = that._f; entry; entry = entry.n){
        if (entry.k == key) return entry;
    }
};
module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function(that, iterable) {
            anInstance(that, C, NAME, "_i");
            that._t = NAME; // collection type
            that._i = create(null); // index
            that._f = undefined; // first entry
            that._l = undefined; // last entry
            that[SIZE] = 0; // size
            if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        });
        redefineAll(C.prototype, {
            // 23.1.3.1 Map.prototype.clear()
            // 23.2.3.2 Set.prototype.clear()
            clear: function clear() {
                for(var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n){
                    entry.r = true;
                    if (entry.p) entry.p = entry.p.n = undefined;
                    delete data[entry.i];
                }
                that._f = that._l = undefined;
                that[SIZE] = 0;
            },
            // 23.1.3.3 Map.prototype.delete(key)
            // 23.2.3.4 Set.prototype.delete(value)
            "delete": function(key) {
                var that = validate(this, NAME);
                var entry = getEntry(that, key);
                if (entry) {
                    var next = entry.n;
                    var prev = entry.p;
                    delete that._i[entry.i];
                    entry.r = true;
                    if (prev) prev.n = next;
                    if (next) next.p = prev;
                    if (that._f == entry) that._f = next;
                    if (that._l == entry) that._l = prev;
                    that[SIZE]--;
                }
                return !!entry;
            },
            // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
            // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
            forEach: function forEach(callbackfn /* , that = undefined */ ) {
                validate(this, NAME);
                var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
                var entry;
                while(entry = entry ? entry.n : this._f){
                    f(entry.v, entry.k, this);
                    // revert to the last existing entry
                    while(entry && entry.r)entry = entry.p;
                }
            },
            // 23.1.3.7 Map.prototype.has(key)
            // 23.2.3.7 Set.prototype.has(value)
            has: function has(key) {
                return !!getEntry(validate(this, NAME), key);
            }
        });
        if (DESCRIPTORS) dP(C.prototype, "size", {
            get: function() {
                return validate(this, NAME)[SIZE];
            }
        });
        return C;
    },
    def: function(that, key, value) {
        var entry = getEntry(that, key);
        var prev, index;
        // change existing entry
        if (entry) entry.v = value;
        else {
            that._l = entry = {
                i: index = fastKey(key, true),
                k: key,
                v: value,
                p: prev = that._l,
                n: undefined,
                r: false // <- removed
            };
            if (!that._f) that._f = entry;
            if (prev) prev.n = entry;
            that[SIZE]++;
            // add to index
            if (index !== "F") that._i[index] = entry;
        }
        return that;
    },
    getEntry: getEntry,
    setStrong: function(C, NAME, IS_MAP) {
        // add .keys, .values, .entries, [@@iterator]
        // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
        $iterDefine(C, NAME, function(iterated, kind) {
            this._t = validate(iterated, NAME); // target
            this._k = kind; // kind
            this._l = undefined; // previous
        }, function() {
            var that = this;
            var kind = that._k;
            var entry = that._l;
            // revert to the last existing entry
            while(entry && entry.r)entry = entry.p;
            // get next entry
            if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
                // or finish the iteration
                that._t = undefined;
                return step(1);
            }
            // return step by kind
            if (kind == "keys") return step(0, entry.k);
            if (kind == "values") return step(0, entry.v);
            return step(0, [
                entry.k,
                entry.v
            ]);
        }, IS_MAP ? "entries" : "values", !IS_MAP, true);
        // add [@@species], 23.1.2.2, 23.2.2.2
        setSpecies(NAME);
    }
};

},{"5bfd79c5a759b646":"kXoVM","6a12fa151c5a1082":"1Vr2z","ce3a1544e39ad806":"5DvoS","35bb843ababdb58b":"8I23f","45b2cec3cb385c37":"6fnrU","e2e983c0ab2c54cb":"iK4qh","459ce0bc2f23417c":"21NXr","8270b8796c6384bd":"gqlw7","8de729f0aadda0a6":"4qQrH","a9fb8ddf192a772d":"cTJEh","ae7461b0d0dd22e9":"k4QUD","823c8ba6cc2133ce":"25a4k"}],"25a4k":[function(require,module,exports) {
var isObject = require("e727afdaed69bfe0");
module.exports = function(it, TYPE) {
    if (!isObject(it) || it._t !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required!");
    return it;
};

},{"e727afdaed69bfe0":"8MCxb"}],"hloha":[function(require,module,exports) {
"use strict";
var global = require("81785bf07790142");
var $export = require("98a20a75069249db");
var redefine = require("eed77c67a61d6bc3");
var redefineAll = require("56ab35d32fd2ad35");
var meta = require("cc230034505debd6");
var forOf = require("1e60feab896f7ad8");
var anInstance = require("cbc6deedb2303507");
var isObject = require("9ff4e926c8bee2b1");
var fails = require("1605bf0457b569e0");
var $iterDetect = require("18826cab27a9fb1d");
var setToStringTag = require("ce7d578f27827465");
var inheritIfRequired = require("238bcffe970dd32d");
module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = global[NAME];
    var C = Base;
    var ADDER = IS_MAP ? "set" : "add";
    var proto = C && C.prototype;
    var O = {};
    var fixMethod = function(KEY) {
        var fn = proto[KEY];
        redefine(proto, KEY, KEY == "delete" ? function(a) {
            return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        } : KEY == "has" ? function has(a) {
            return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        } : KEY == "get" ? function get(a) {
            return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
        } : KEY == "add" ? function add(a) {
            fn.call(this, a === 0 ? 0 : a);
            return this;
        } : function set(a, b) {
            fn.call(this, a === 0 ? 0 : a, b);
            return this;
        });
    };
    if (typeof C != "function" || !(IS_WEAK || proto.forEach && !fails(function() {
        new C().entries().next();
    }))) {
        // create collection constructor
        C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
        redefineAll(C.prototype, methods);
        meta.NEED = true;
    } else {
        var instance = new C();
        // early implementations not supports chaining
        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
        // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
        var THROWS_ON_PRIMITIVES = fails(function() {
            instance.has(1);
        });
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        var ACCEPT_ITERABLES = $iterDetect(function(iter) {
            new C(iter);
        }); // eslint-disable-line no-new
        // for early implementations -0 and +0 not the same
        var BUGGY_ZERO = !IS_WEAK && fails(function() {
            // V8 ~ Chromium 42- fails only with 5+ elements
            var $instance = new C();
            var index = 5;
            while(index--)$instance[ADDER](index, index);
            return !$instance.has(-0);
        });
        if (!ACCEPT_ITERABLES) {
            C = wrapper(function(target, iterable) {
                anInstance(target, C, NAME);
                var that = inheritIfRequired(new Base(), target, C);
                if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
                return that;
            });
            C.prototype = proto;
            proto.constructor = C;
        }
        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
            fixMethod("delete");
            fixMethod("has");
            IS_MAP && fixMethod("get");
        }
        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
        // weak collections should not contains .clear method
        if (IS_WEAK && proto.clear) delete proto.clear;
    }
    setToStringTag(C, NAME);
    O[NAME] = C;
    $export($export.G + $export.W + $export.F * (C != Base), O);
    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
    return C;
};

},{"81785bf07790142":"aN7D9","98a20a75069249db":"V6uGr","eed77c67a61d6bc3":"1Nq8R","56ab35d32fd2ad35":"5DvoS","cc230034505debd6":"k4QUD","1e60feab896f7ad8":"iK4qh","cbc6deedb2303507":"6fnrU","9ff4e926c8bee2b1":"8MCxb","1605bf0457b569e0":"hJvAh","18826cab27a9fb1d":"7GLF7","ce7d578f27827465":"35t6Z","238bcffe970dd32d":"5Thd8"}],"b2gJ2":[function(require,module,exports) {
"use strict";
var strong = require("bf3cc9c0f9af052b");
var validate = require("58506d51265ff84f");
var SET = "Set";
// 23.2 Set Objects
module.exports = require("15ea8900c67481eb")(SET, function(get) {
    return function Set() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
}, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value) {
        return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
    }
}, strong);

},{"bf3cc9c0f9af052b":"lWGng","58506d51265ff84f":"25a4k","15ea8900c67481eb":"hloha"}],"k746h":[function(require,module,exports) {
"use strict";
var global = require("af8e41d4c6a663c");
var each = require("878c133d1ce33005")(0);
var redefine = require("dafb8b6ed6d80c2b");
var meta = require("f941753974d1a284");
var assign = require("8cdb87566c162cfe");
var weak = require("fb72f942510ac277");
var isObject = require("74f52c6936d126d4");
var validate = require("bf3277fdf7c80a13");
var NATIVE_WEAK_MAP = require("bf3277fdf7c80a13");
var IS_IE11 = !global.ActiveXObject && "ActiveXObject" in global;
var WEAK_MAP = "WeakMap";
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;
var wrapper = function(get) {
    return function WeakMap() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
};
var methods = {
    // 23.3.3.3 WeakMap.prototype.get(key)
    get: function get(key) {
        if (isObject(key)) {
            var data = getWeak(key);
            if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
            return data ? data[this._i] : undefined;
        }
    },
    // 23.3.3.5 WeakMap.prototype.set(key, value)
    set: function set(key, value) {
        return weak.def(validate(this, WEAK_MAP), key, value);
    }
};
// 23.3 WeakMap Objects
var $WeakMap = module.exports = require("46170d74e99895ef")(WEAK_MAP, wrapper, methods, weak, true, true);
// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
    InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
    assign(InternalMap.prototype, methods);
    meta.NEED = true;
    each([
        "delete",
        "has",
        "get",
        "set"
    ], function(key) {
        var proto = $WeakMap.prototype;
        var method = proto[key];
        redefine(proto, key, function(a, b) {
            // store frozen objects on internal weakmap shim
            if (isObject(a) && !isExtensible(a)) {
                if (!this._f) this._f = new InternalMap();
                var result = this._f[key](a, b);
                return key == "set" ? this : result;
            // store all the rest on native weakmap
            }
            return method.call(this, a, b);
        });
    });
}

},{"af8e41d4c6a663c":"aN7D9","878c133d1ce33005":"kjdjF","dafb8b6ed6d80c2b":"1Nq8R","f941753974d1a284":"k4QUD","8cdb87566c162cfe":"h5kjT","fb72f942510ac277":"94Ico","74f52c6936d126d4":"8MCxb","bf3277fdf7c80a13":"25a4k","46170d74e99895ef":"hloha"}],"94Ico":[function(require,module,exports) {
"use strict";
var redefineAll = require("4cd8cd170d6e63cb");
var getWeak = require("b138f5f946864cba").getWeak;
var anObject = require("5dcdd49297856cc3");
var isObject = require("20945a5ef56005f0");
var anInstance = require("a2debcc8923c53b2");
var forOf = require("2f15642c1aaf4d14");
var createArrayMethod = require("cb3de60c94cc53a4");
var $has = require("faaac35fea4ff1be");
var validate = require("7da226153a4ef688");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;
// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(that) {
    return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function() {
    this.a = [];
};
var findUncaughtFrozen = function(store, key) {
    return arrayFind(store.a, function(it) {
        return it[0] === key;
    });
};
UncaughtFrozenStore.prototype = {
    get: function(key) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) return entry[1];
    },
    has: function(key) {
        return !!findUncaughtFrozen(this, key);
    },
    set: function(key, value) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) entry[1] = value;
        else this.a.push([
            key,
            value
        ]);
    },
    "delete": function(key) {
        var index = arrayFindIndex(this.a, function(it) {
            return it[0] === key;
        });
        if (~index) this.a.splice(index, 1);
        return !!~index;
    }
};
module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function(that, iterable) {
            anInstance(that, C, NAME, "_i");
            that._t = NAME; // collection type
            that._i = id++; // collection id
            that._l = undefined; // leak store for uncaught frozen objects
            if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        });
        redefineAll(C.prototype, {
            // 23.3.3.2 WeakMap.prototype.delete(key)
            // 23.4.3.3 WeakSet.prototype.delete(value)
            "delete": function(key) {
                if (!isObject(key)) return false;
                var data = getWeak(key);
                if (data === true) return uncaughtFrozenStore(validate(this, NAME))["delete"](key);
                return data && $has(data, this._i) && delete data[this._i];
            },
            // 23.3.3.4 WeakMap.prototype.has(key)
            // 23.4.3.4 WeakSet.prototype.has(value)
            has: function has(key) {
                if (!isObject(key)) return false;
                var data = getWeak(key);
                if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
                return data && $has(data, this._i);
            }
        });
        return C;
    },
    def: function(that, key, value) {
        var data = getWeak(anObject(key), true);
        if (data === true) uncaughtFrozenStore(that).set(key, value);
        else data[that._i] = value;
        return that;
    },
    ufstore: uncaughtFrozenStore
};

},{"4cd8cd170d6e63cb":"5DvoS","b138f5f946864cba":"k4QUD","5dcdd49297856cc3":"jvvZN","20945a5ef56005f0":"8MCxb","a2debcc8923c53b2":"6fnrU","2f15642c1aaf4d14":"iK4qh","cb3de60c94cc53a4":"kjdjF","faaac35fea4ff1be":"hCETW","7da226153a4ef688":"25a4k"}],"bgveP":[function(require,module,exports) {
"use strict";
var weak = require("cb43e4f7e5c19f59");
var validate = require("60641d41d2aaf7f8");
var WEAK_SET = "WeakSet";
// 23.4 WeakSet Objects
require("30f78a4edc6bf903")(WEAK_SET, function(get) {
    return function WeakSet() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
}, {
    // 23.4.3.1 WeakSet.prototype.add(value)
    add: function add(value) {
        return weak.def(validate(this, WEAK_SET), value, true);
    }
}, weak, false, true);

},{"cb43e4f7e5c19f59":"94Ico","60641d41d2aaf7f8":"25a4k","30f78a4edc6bf903":"hloha"}],"hg7VL":[function(require,module,exports) {
"use strict";
var $export = require("d9c36548a0d90227");
var $typed = require("f1c1597d59a2dd2e");
var buffer = require("93af829c7c842d23");
var anObject = require("321e83d7ef505219");
var toAbsoluteIndex = require("8f4425023cbc8c8");
var toLength = require("a10068daddb2d138");
var isObject = require("87551d3f14a6c044");
var ArrayBuffer = require("dc95cd0c4194aba1").ArrayBuffer;
var speciesConstructor = require("906ae9a7c78b9bec");
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = "ArrayBuffer";
$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {
    ArrayBuffer: $ArrayBuffer
});
$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
    // 24.1.3.1 ArrayBuffer.isView(arg)
    isView: function isView(it) {
        return $isView && $isView(it) || isObject(it) && VIEW in it;
    }
});
$export($export.P + $export.U + $export.F * require("3e089391f183a0b8")(function() {
    return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
    // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
    slice: function slice(start, end) {
        if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
        var len = anObject(this).byteLength;
        var first = toAbsoluteIndex(start, len);
        var fin = toAbsoluteIndex(end === undefined ? len : end, len);
        var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
        var viewS = new $DataView(this);
        var viewT = new $DataView(result);
        var index = 0;
        while(first < fin)viewT.setUint8(index++, viewS.getUint8(first++));
        return result;
    }
});
require("d543674322f0cc13")(ARRAY_BUFFER);

},{"d9c36548a0d90227":"V6uGr","f1c1597d59a2dd2e":"D96Sr","93af829c7c842d23":"57qRT","321e83d7ef505219":"jvvZN","8f4425023cbc8c8":"c8MSW","a10068daddb2d138":"6i4KF","87551d3f14a6c044":"8MCxb","dc95cd0c4194aba1":"aN7D9","906ae9a7c78b9bec":"gbQWK","3e089391f183a0b8":"hJvAh","d543674322f0cc13":"4qQrH"}],"D96Sr":[function(require,module,exports) {
var global = require("a751fecb14d34f56");
var hide = require("695bc429faa86df5");
var uid = require("7d1abd8ab56a5518");
var TYPED = uid("typed_array");
var VIEW = uid("view");
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;
var TypedArrayConstructors = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");
while(i < l)if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
} else CONSTR = false;
module.exports = {
    ABV: ABV,
    CONSTR: CONSTR,
    TYPED: TYPED,
    VIEW: VIEW
};

},{"a751fecb14d34f56":"aN7D9","695bc429faa86df5":"6kOvw","7d1abd8ab56a5518":"euCLH"}],"57qRT":[function(require,module,exports) {
"use strict";
var global = require("9442324afe09e96d");
var DESCRIPTORS = require("60d70cc4ea34f0db");
var LIBRARY = require("65fa297fbae9d6d2");
var $typed = require("bb962db73ea9a36e");
var hide = require("b3a27ca92807932e");
var redefineAll = require("f951d1f36e940d4b");
var fails = require("1b11952576dec9ae");
var anInstance = require("8476617cda9cb40a");
var toInteger = require("9fb465dba499e3df");
var toLength = require("98149dcdbc24087d");
var toIndex = require("d3dda88e6c226035");
var gOPN = require("d46cfaadae30c718").f;
var dP = require("844bc0a3da5e4c19").f;
var arrayFill = require("560912ec70a9f727");
var setToStringTag = require("fb2ca171954aed83");
var ARRAY_BUFFER = "ArrayBuffer";
var DATA_VIEW = "DataView";
var PROTOTYPE = "prototype";
var WRONG_LENGTH = "Wrong length!";
var WRONG_INDEX = "Wrong index!";
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = "buffer";
var BYTE_LENGTH = "byteLength";
var BYTE_OFFSET = "byteOffset";
var $BUFFER = DESCRIPTORS ? "_b" : BUFFER;
var $LENGTH = DESCRIPTORS ? "_l" : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? "_o" : BYTE_OFFSET;
// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
    var buffer = new Array(nBytes);
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
    var i = 0;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    var e, m, c;
    value = abs(value);
    // eslint-disable-next-line no-self-compare
    if (value != value || value === Infinity) {
        // eslint-disable-next-line no-self-compare
        m = value != value ? 1 : 0;
        e = eMax;
    } else {
        e = floor(log(value) / LN2);
        if (value * (c = pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * pow(2, eBias - 1) * pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
    buffer[--i] |= s * 128;
    return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = eLen - 7;
    var i = nBytes - 1;
    var s = buffer[i--];
    var e = s & 127;
    var m;
    s >>= 7;
    for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : s ? -Infinity : Infinity;
    else {
        m = m + pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * pow(2, e - mLen);
}
function unpackI32(bytes) {
    return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
    return [
        it & 0xff
    ];
}
function packI16(it) {
    return [
        it & 0xff,
        it >> 8 & 0xff
    ];
}
function packI32(it) {
    return [
        it & 0xff,
        it >> 8 & 0xff,
        it >> 16 & 0xff,
        it >> 24 & 0xff
    ];
}
function packF64(it) {
    return packIEEE754(it, 52, 8);
}
function packF32(it) {
    return packIEEE754(it, 23, 4);
}
function addGetter(C, key, internal) {
    dP(C[PROTOTYPE], key, {
        get: function() {
            return this[internal];
        }
    });
}
function get(view, bytes, index, isLittleEndian) {
    var numIndex = +index;
    var intIndex = toIndex(numIndex);
    if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b;
    var start = intIndex + view[$OFFSET];
    var pack = store.slice(start, start + bytes);
    return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
    var numIndex = +index;
    var intIndex = toIndex(numIndex);
    if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b;
    var start = intIndex + view[$OFFSET];
    var pack = conversion(+value);
    for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}
if (!$typed.ABV) {
    $ArrayBuffer = function ArrayBuffer(length) {
        anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
        var byteLength = toIndex(length);
        this._b = arrayFill.call(new Array(byteLength), 0);
        this[$LENGTH] = byteLength;
    };
    $DataView = function DataView(buffer, byteOffset, byteLength) {
        anInstance(this, $DataView, DATA_VIEW);
        anInstance(buffer, $ArrayBuffer, DATA_VIEW);
        var bufferLength = buffer[$LENGTH];
        var offset = toInteger(byteOffset);
        if (offset < 0 || offset > bufferLength) throw RangeError("Wrong offset!");
        byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
        if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
        this[$BUFFER] = buffer;
        this[$OFFSET] = offset;
        this[$LENGTH] = byteLength;
    };
    if (DESCRIPTORS) {
        addGetter($ArrayBuffer, BYTE_LENGTH, "_l");
        addGetter($DataView, BUFFER, "_b");
        addGetter($DataView, BYTE_LENGTH, "_l");
        addGetter($DataView, BYTE_OFFSET, "_o");
    }
    redefineAll($DataView[PROTOTYPE], {
        getInt8: function getInt8(byteOffset) {
            return get(this, 1, byteOffset)[0] << 24 >> 24;
        },
        getUint8: function getUint8(byteOffset) {
            return get(this, 1, byteOffset)[0];
        },
        getInt16: function getInt16(byteOffset /* , littleEndian */ ) {
            var bytes = get(this, 2, byteOffset, arguments[1]);
            return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
        },
        getUint16: function getUint16(byteOffset /* , littleEndian */ ) {
            var bytes = get(this, 2, byteOffset, arguments[1]);
            return bytes[1] << 8 | bytes[0];
        },
        getInt32: function getInt32(byteOffset /* , littleEndian */ ) {
            return unpackI32(get(this, 4, byteOffset, arguments[1]));
        },
        getUint32: function getUint32(byteOffset /* , littleEndian */ ) {
            return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
        },
        getFloat32: function getFloat32(byteOffset /* , littleEndian */ ) {
            return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
        },
        getFloat64: function getFloat64(byteOffset /* , littleEndian */ ) {
            return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
        },
        setInt8: function setInt8(byteOffset, value) {
            set(this, 1, byteOffset, packI8, value);
        },
        setUint8: function setUint8(byteOffset, value) {
            set(this, 1, byteOffset, packI8, value);
        },
        setInt16: function setInt16(byteOffset, value /* , littleEndian */ ) {
            set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setUint16: function setUint16(byteOffset, value /* , littleEndian */ ) {
            set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setInt32: function setInt32(byteOffset, value /* , littleEndian */ ) {
            set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setUint32: function setUint32(byteOffset, value /* , littleEndian */ ) {
            set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setFloat32: function setFloat32(byteOffset, value /* , littleEndian */ ) {
            set(this, 4, byteOffset, packF32, value, arguments[2]);
        },
        setFloat64: function setFloat64(byteOffset, value /* , littleEndian */ ) {
            set(this, 8, byteOffset, packF64, value, arguments[2]);
        }
    });
} else {
    if (!fails(function() {
        $ArrayBuffer(1);
    }) || !fails(function() {
        new $ArrayBuffer(-1); // eslint-disable-line no-new
    }) || fails(function() {
        new $ArrayBuffer(); // eslint-disable-line no-new
        new $ArrayBuffer(1.5); // eslint-disable-line no-new
        new $ArrayBuffer(NaN); // eslint-disable-line no-new
        return $ArrayBuffer.name != ARRAY_BUFFER;
    })) {
        $ArrayBuffer = function ArrayBuffer(length) {
            anInstance(this, $ArrayBuffer);
            return new BaseBuffer(toIndex(length));
        };
        var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
        for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;)if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
        if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
    }
    // iOS Safari 7.x bug
    var view = new $DataView(new $ArrayBuffer(2));
    var $setInt8 = $DataView[PROTOTYPE].setInt8;
    view.setInt8(0, 2147483648);
    view.setInt8(1, 2147483649);
    if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
        setInt8: function setInt8(byteOffset, value) {
            $setInt8.call(this, byteOffset, value << 24 >> 24);
        },
        setUint8: function setUint8(byteOffset, value) {
            $setInt8.call(this, byteOffset, value << 24 >> 24);
        }
    }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

},{"9442324afe09e96d":"aN7D9","60d70cc4ea34f0db":"cTJEh","65fa297fbae9d6d2":"fdMee","bb962db73ea9a36e":"D96Sr","b3a27ca92807932e":"6kOvw","f951d1f36e940d4b":"5DvoS","1b11952576dec9ae":"hJvAh","8476617cda9cb40a":"6fnrU","9fb465dba499e3df":"12G5z","98149dcdbc24087d":"6i4KF","d3dda88e6c226035":"lEPye","d46cfaadae30c718":"8ObWh","844bc0a3da5e4c19":"kXoVM","560912ec70a9f727":"lyRTk","fb2ca171954aed83":"35t6Z"}],"lEPye":[function(require,module,exports) {
// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = require("4be70d78080589cb");
var toLength = require("36fc45a4d3539610");
module.exports = function(it) {
    if (it === undefined) return 0;
    var number = toInteger(it);
    var length = toLength(number);
    if (number !== length) throw RangeError("Wrong length!");
    return length;
};

},{"4be70d78080589cb":"12G5z","36fc45a4d3539610":"6i4KF"}],"8d9Iy":[function(require,module,exports) {
var $export = require("87193b1207016fe");
$export($export.G + $export.W + $export.F * !require("d97e5ffffca8077").ABV, {
    DataView: require("def90b959f2b70be").DataView
});

},{"87193b1207016fe":"V6uGr","d97e5ffffca8077":"D96Sr","def90b959f2b70be":"57qRT"}],"bTWU9":[function(require,module,exports) {
require("28a4933ee8139e63")("Int8", 1, function(init) {
    return function Int8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"28a4933ee8139e63":"5Yx1Q"}],"5Yx1Q":[function(require,module,exports) {
"use strict";
if (require("418d6dbd601a1b3")) {
    var LIBRARY = require("f88452f9f264fdb3");
    var global = require("cc74c805d545f0a4");
    var fails = require("9f9fdb2e353295e3");
    var $export = require("e11935fe09ccbe3b");
    var $typed = require("6d7548fe459a3611");
    var $buffer = require("55b1a5ca3885e39d");
    var ctx = require("c4cba47146bdf959");
    var anInstance = require("451a1affd9a94f32");
    var propertyDesc = require("54749f89e812537");
    var hide = require("6155f43e982a8fe3");
    var redefineAll = require("6c19607a9dcacf8a");
    var toInteger = require("1d8ebe72bb822ec3");
    var toLength = require("85fb73757d533cc0");
    var toIndex = require("83e05e96d27a018f");
    var toAbsoluteIndex = require("4652bacef7467eee");
    var toPrimitive = require("d0412817509b72f0");
    var has = require("bb18953b50715446");
    var classof = require("5ff3aa5e37f9850c");
    var isObject = require("df90c642ac1b4fad");
    var toObject = require("7a9f0193844a6e03");
    var isArrayIter = require("ce0f67db3a56b4f2");
    var create = require("a1ea54349f1513dd");
    var getPrototypeOf = require("1a0b79728c31d88");
    var gOPN = require("f493bcb9a9a74de").f;
    var getIterFn = require("b28de14373bb016a");
    var uid = require("a4ae9b1a543d96da");
    var wks = require("1a6f624d253d26a5");
    var createArrayMethod = require("65f81fde60e8afd3");
    var createArrayIncludes = require("f19db5e9d3cefd9b");
    var speciesConstructor = require("5fad23f35e91c0ad");
    var ArrayIterators = require("fbb2a4d39470f1c2");
    var Iterators = require("23a9b723266ad310");
    var $iterDetect = require("ffe5a0d910559b5e");
    var setSpecies = require("8823a083ef265c1f");
    var arrayFill = require("71369c73c102e51f");
    var arrayCopyWithin = require("ba06805985988de8");
    var $DP = require("f61d7396bf1e0518");
    var $GOPD = require("66234efc7bb0d74b");
    var dP = $DP.f;
    var gOPD = $GOPD.f;
    var RangeError = global.RangeError;
    var TypeError = global.TypeError;
    var Uint8Array = global.Uint8Array;
    var ARRAY_BUFFER = "ArrayBuffer";
    var SHARED_BUFFER = "Shared" + ARRAY_BUFFER;
    var BYTES_PER_ELEMENT = "BYTES_PER_ELEMENT";
    var PROTOTYPE = "prototype";
    var ArrayProto = Array[PROTOTYPE];
    var $ArrayBuffer = $buffer.ArrayBuffer;
    var $DataView = $buffer.DataView;
    var arrayForEach = createArrayMethod(0);
    var arrayFilter = createArrayMethod(2);
    var arraySome = createArrayMethod(3);
    var arrayEvery = createArrayMethod(4);
    var arrayFind = createArrayMethod(5);
    var arrayFindIndex = createArrayMethod(6);
    var arrayIncludes = createArrayIncludes(true);
    var arrayIndexOf = createArrayIncludes(false);
    var arrayValues = ArrayIterators.values;
    var arrayKeys = ArrayIterators.keys;
    var arrayEntries = ArrayIterators.entries;
    var arrayLastIndexOf = ArrayProto.lastIndexOf;
    var arrayReduce = ArrayProto.reduce;
    var arrayReduceRight = ArrayProto.reduceRight;
    var arrayJoin = ArrayProto.join;
    var arraySort = ArrayProto.sort;
    var arraySlice = ArrayProto.slice;
    var arrayToString = ArrayProto.toString;
    var arrayToLocaleString = ArrayProto.toLocaleString;
    var ITERATOR = wks("iterator");
    var TAG = wks("toStringTag");
    var TYPED_CONSTRUCTOR = uid("typed_constructor");
    var DEF_CONSTRUCTOR = uid("def_constructor");
    var ALL_CONSTRUCTORS = $typed.CONSTR;
    var TYPED_ARRAY = $typed.TYPED;
    var VIEW = $typed.VIEW;
    var WRONG_LENGTH = "Wrong length!";
    var $map = createArrayMethod(1, function(O, length) {
        return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
    });
    var LITTLE_ENDIAN = fails(function() {
        // eslint-disable-next-line no-undef
        return new Uint8Array(new Uint16Array([
            1
        ]).buffer)[0] === 1;
    });
    var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function() {
        new Uint8Array(1).set({});
    });
    var toOffset = function(it, BYTES) {
        var offset = toInteger(it);
        if (offset < 0 || offset % BYTES) throw RangeError("Wrong offset!");
        return offset;
    };
    var validate = function(it) {
        if (isObject(it) && TYPED_ARRAY in it) return it;
        throw TypeError(it + " is not a typed array!");
    };
    var allocate = function(C, length) {
        if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) throw TypeError("It is not a typed array constructor!");
        return new C(length);
    };
    var speciesFromList = function(O, list) {
        return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
    };
    var fromList = function(C, list) {
        var index = 0;
        var length = list.length;
        var result = allocate(C, length);
        while(length > index)result[index] = list[index++];
        return result;
    };
    var addGetter = function(it, key, internal) {
        dP(it, key, {
            get: function() {
                return this._d[internal];
            }
        });
    };
    var $from = function from(source /* , mapfn, thisArg */ ) {
        var O = toObject(source);
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var iterFn = getIterFn(O);
        var i, length, values, result, step, iterator;
        if (iterFn != undefined && !isArrayIter(iterFn)) {
            for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++)values.push(step.value);
            O = values;
        }
        if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
        for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++)result[i] = mapping ? mapfn(O[i], i) : O[i];
        return result;
    };
    var $of = function of() {
        var index = 0;
        var length = arguments.length;
        var result = allocate(this, length);
        while(length > index)result[index] = arguments[index++];
        return result;
    };
    // iOS Safari 6.x fails here
    var TO_LOCALE_BUG = !!Uint8Array && fails(function() {
        arrayToLocaleString.call(new Uint8Array(1));
    });
    var $toLocaleString = function toLocaleString() {
        return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
    };
    var proto = {
        copyWithin: function copyWithin(target, start /* , end */ ) {
            return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
        },
        every: function every(callbackfn /* , thisArg */ ) {
            return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        fill: function fill(value /* , start, end */ ) {
            return arrayFill.apply(validate(this), arguments);
        },
        filter: function filter(callbackfn /* , thisArg */ ) {
            return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
        },
        find: function find(predicate /* , thisArg */ ) {
            return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        findIndex: function findIndex(predicate /* , thisArg */ ) {
            return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        forEach: function forEach(callbackfn /* , thisArg */ ) {
            arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        indexOf: function indexOf(searchElement /* , fromIndex */ ) {
            return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        includes: function includes(searchElement /* , fromIndex */ ) {
            return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        join: function join(separator) {
            return arrayJoin.apply(validate(this), arguments);
        },
        lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */ ) {
            return arrayLastIndexOf.apply(validate(this), arguments);
        },
        map: function map(mapfn /* , thisArg */ ) {
            return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        reduce: function reduce(callbackfn /* , initialValue */ ) {
            return arrayReduce.apply(validate(this), arguments);
        },
        reduceRight: function reduceRight(callbackfn /* , initialValue */ ) {
            return arrayReduceRight.apply(validate(this), arguments);
        },
        reverse: function reverse() {
            var that = this;
            var length = validate(that).length;
            var middle = Math.floor(length / 2);
            var index = 0;
            var value;
            while(index < middle){
                value = that[index];
                that[index++] = that[--length];
                that[length] = value;
            }
            return that;
        },
        some: function some(callbackfn /* , thisArg */ ) {
            return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        sort: function sort(comparefn) {
            return arraySort.call(validate(this), comparefn);
        },
        subarray: function subarray(begin, end) {
            var O = validate(this);
            var length = O.length;
            var $begin = toAbsoluteIndex(begin, length);
            return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
        }
    };
    var $slice = function slice(start, end) {
        return speciesFromList(this, arraySlice.call(validate(this), start, end));
    };
    var $set = function set(arrayLike /* , offset */ ) {
        validate(this);
        var offset = toOffset(arguments[1], 1);
        var length = this.length;
        var src = toObject(arrayLike);
        var len = toLength(src.length);
        var index = 0;
        if (len + offset > length) throw RangeError(WRONG_LENGTH);
        while(index < len)this[offset + index] = src[index++];
    };
    var $iterators = {
        entries: function entries() {
            return arrayEntries.call(validate(this));
        },
        keys: function keys() {
            return arrayKeys.call(validate(this));
        },
        values: function values() {
            return arrayValues.call(validate(this));
        }
    };
    var isTAIndex = function(target, key) {
        return isObject(target) && target[TYPED_ARRAY] && typeof key != "symbol" && key in target && String(+key) == String(key);
    };
    var $getDesc = function getOwnPropertyDescriptor(target, key) {
        return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
    };
    var $setDesc = function defineProperty(target, key, desc) {
        if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, "value") && !has(desc, "get") && !has(desc, "set") && !desc.configurable && (!has(desc, "writable") || desc.writable) && (!has(desc, "enumerable") || desc.enumerable)) {
            target[key] = desc.value;
            return target;
        }
        return dP(target, key, desc);
    };
    if (!ALL_CONSTRUCTORS) {
        $GOPD.f = $getDesc;
        $DP.f = $setDesc;
    }
    $export($export.S + $export.F * !ALL_CONSTRUCTORS, "Object", {
        getOwnPropertyDescriptor: $getDesc,
        defineProperty: $setDesc
    });
    if (fails(function() {
        arrayToString.call({});
    })) arrayToString = arrayToLocaleString = function toString() {
        return arrayJoin.call(this);
    };
    var $TypedArrayPrototype$ = redefineAll({}, proto);
    redefineAll($TypedArrayPrototype$, $iterators);
    hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
    redefineAll($TypedArrayPrototype$, {
        slice: $slice,
        set: $set,
        constructor: function() {},
        toString: arrayToString,
        toLocaleString: $toLocaleString
    });
    addGetter($TypedArrayPrototype$, "buffer", "b");
    addGetter($TypedArrayPrototype$, "byteOffset", "o");
    addGetter($TypedArrayPrototype$, "byteLength", "l");
    addGetter($TypedArrayPrototype$, "length", "e");
    dP($TypedArrayPrototype$, TAG, {
        get: function() {
            return this[TYPED_ARRAY];
        }
    });
    // eslint-disable-next-line max-statements
    module.exports = function(KEY, BYTES, wrapper, CLAMPED) {
        CLAMPED = !!CLAMPED;
        var NAME = KEY + (CLAMPED ? "Clamped" : "") + "Array";
        var GETTER = "get" + KEY;
        var SETTER = "set" + KEY;
        var TypedArray = global[NAME];
        var Base = TypedArray || {};
        var TAC = TypedArray && getPrototypeOf(TypedArray);
        var FORCED = !TypedArray || !$typed.ABV;
        var O = {};
        var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
        var getter = function(that, index) {
            var data = that._d;
            return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
        };
        var setter = function(that, index, value) {
            var data = that._d;
            if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
            data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
        };
        var addElement = function(that, index) {
            dP(that, index, {
                get: function() {
                    return getter(this, index);
                },
                set: function(value) {
                    return setter(this, index, value);
                },
                enumerable: true
            });
        };
        if (FORCED) {
            TypedArray = wrapper(function(that, data, $offset, $length) {
                anInstance(that, TypedArray, NAME, "_d");
                var index = 0;
                var offset = 0;
                var buffer, byteLength, length, klass;
                if (!isObject(data)) {
                    length = toIndex(data);
                    byteLength = length * BYTES;
                    buffer = new $ArrayBuffer(byteLength);
                } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                    buffer = data;
                    offset = toOffset($offset, BYTES);
                    var $len = data.byteLength;
                    if ($length === undefined) {
                        if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                        byteLength = $len - offset;
                        if (byteLength < 0) throw RangeError(WRONG_LENGTH);
                    } else {
                        byteLength = toLength($length) * BYTES;
                        if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
                    }
                    length = byteLength / BYTES;
                } else if (TYPED_ARRAY in data) return fromList(TypedArray, data);
                else return $from.call(TypedArray, data);
                hide(that, "_d", {
                    b: buffer,
                    o: offset,
                    l: byteLength,
                    e: length,
                    v: new $DataView(buffer)
                });
                while(index < length)addElement(that, index++);
            });
            TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
            hide(TypedArrayPrototype, "constructor", TypedArray);
        } else if (!fails(function() {
            TypedArray(1);
        }) || !fails(function() {
            new TypedArray(-1); // eslint-disable-line no-new
        }) || !$iterDetect(function(iter) {
            new TypedArray(); // eslint-disable-line no-new
            new TypedArray(null); // eslint-disable-line no-new
            new TypedArray(1.5); // eslint-disable-line no-new
            new TypedArray(iter); // eslint-disable-line no-new
        }, true)) {
            TypedArray = wrapper(function(that, data, $offset, $length) {
                anInstance(that, TypedArray, NAME);
                var klass;
                // `ws` module bug, temporarily remove validation length for Uint8Array
                // https://github.com/websockets/ws/pull/645
                if (!isObject(data)) return new Base(toIndex(data));
                if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
                if (TYPED_ARRAY in data) return fromList(TypedArray, data);
                return $from.call(TypedArray, data);
            });
            arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key) {
                if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
            });
            TypedArray[PROTOTYPE] = TypedArrayPrototype;
            if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
        }
        var $nativeIterator = TypedArrayPrototype[ITERATOR];
        var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == "values" || $nativeIterator.name == undefined);
        var $iterator = $iterators.values;
        hide(TypedArray, TYPED_CONSTRUCTOR, true);
        hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
        hide(TypedArrayPrototype, VIEW, true);
        hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
        if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) dP(TypedArrayPrototype, TAG, {
            get: function() {
                return NAME;
            }
        });
        O[NAME] = TypedArray;
        $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
        $export($export.S, NAME, {
            BYTES_PER_ELEMENT: BYTES
        });
        $export($export.S + $export.F * fails(function() {
            Base.of.call(TypedArray, 1);
        }), NAME, {
            from: $from,
            of: $of
        });
        if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
        $export($export.P, NAME, proto);
        setSpecies(NAME);
        $export($export.P + $export.F * FORCED_SET, NAME, {
            set: $set
        });
        $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
        if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
        $export($export.P + $export.F * fails(function() {
            new TypedArray(1).slice();
        }), NAME, {
            slice: $slice
        });
        $export($export.P + $export.F * (fails(function() {
            return [
                1,
                2
            ].toLocaleString() != new TypedArray([
                1,
                2
            ]).toLocaleString();
        }) || !fails(function() {
            TypedArrayPrototype.toLocaleString.call([
                1,
                2
            ]);
        })), NAME, {
            toLocaleString: $toLocaleString
        });
        Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
        if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
    };
} else module.exports = function() {};

},{"418d6dbd601a1b3":"cTJEh","f88452f9f264fdb3":"fdMee","cc74c805d545f0a4":"aN7D9","9f9fdb2e353295e3":"hJvAh","e11935fe09ccbe3b":"V6uGr","6d7548fe459a3611":"D96Sr","55b1a5ca3885e39d":"57qRT","c4cba47146bdf959":"8I23f","451a1affd9a94f32":"6fnrU","54749f89e812537":"apD9J","6155f43e982a8fe3":"6kOvw","6c19607a9dcacf8a":"5DvoS","1d8ebe72bb822ec3":"12G5z","85fb73757d533cc0":"6i4KF","83e05e96d27a018f":"lEPye","4652bacef7467eee":"c8MSW","d0412817509b72f0":"esus5","bb18953b50715446":"hCETW","5ff3aa5e37f9850c":"7IFyn","df90c642ac1b4fad":"8MCxb","7a9f0193844a6e03":"88RFO","ce0f67db3a56b4f2":"79MVP","a1ea54349f1513dd":"1Vr2z","1a0b79728c31d88":"hKcQc","f493bcb9a9a74de":"8ObWh","b28de14373bb016a":"7wXxa","a4ae9b1a543d96da":"euCLH","1a6f624d253d26a5":"irAMb","65f81fde60e8afd3":"kjdjF","f19db5e9d3cefd9b":"f0gsM","5fad23f35e91c0ad":"gbQWK","fbb2a4d39470f1c2":"8MwXZ","23a9b723266ad310":"iLt3f","ffe5a0d910559b5e":"7GLF7","8823a083ef265c1f":"4qQrH","71369c73c102e51f":"lyRTk","ba06805985988de8":"eN0Pf","f61d7396bf1e0518":"kXoVM","66234efc7bb0d74b":"amyyc"}],"4Dpkq":[function(require,module,exports) {
require("1c1d7fa4a4a24790")("Uint8", 1, function(init) {
    return function Uint8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"1c1d7fa4a4a24790":"5Yx1Q"}],"30GXM":[function(require,module,exports) {
require("6f864eef97661b0c")("Uint8", 1, function(init) {
    return function Uint8ClampedArray(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
}, true);

},{"6f864eef97661b0c":"5Yx1Q"}],"43R0v":[function(require,module,exports) {
require("6e2c9336a458e7f9")("Int16", 2, function(init) {
    return function Int16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"6e2c9336a458e7f9":"5Yx1Q"}],"gjSDp":[function(require,module,exports) {
require("2225992d4a6bb9c7")("Uint16", 2, function(init) {
    return function Uint16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"2225992d4a6bb9c7":"5Yx1Q"}],"yM90S":[function(require,module,exports) {
require("b7e432ab14071d20")("Int32", 4, function(init) {
    return function Int32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"b7e432ab14071d20":"5Yx1Q"}],"9mohQ":[function(require,module,exports) {
require("7ca59715ab051ef5")("Uint32", 4, function(init) {
    return function Uint32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"7ca59715ab051ef5":"5Yx1Q"}],"3n5MH":[function(require,module,exports) {
require("7e8e1ba7be410236")("Float32", 4, function(init) {
    return function Float32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"7e8e1ba7be410236":"5Yx1Q"}],"jWTK4":[function(require,module,exports) {
require("3b2e2827b74cbda2")("Float64", 8, function(init) {
    return function Float64Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"3b2e2827b74cbda2":"5Yx1Q"}],"c2YGM":[function(require,module,exports) {
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = require("6e0d1e7b0f4a4024");
var aFunction = require("a38ca490dd3a3177");
var anObject = require("85d4e4aebb60742e");
var rApply = (require("78000e3fea0586ed").Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !require("7458a7c7f1218b71")(function() {
    rApply(function() {});
}), "Reflect", {
    apply: function apply(target, thisArgument, argumentsList) {
        var T = aFunction(target);
        var L = anObject(argumentsList);
        return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
    }
});

},{"6e0d1e7b0f4a4024":"V6uGr","a38ca490dd3a3177":"cWXNC","85d4e4aebb60742e":"jvvZN","78000e3fea0586ed":"aN7D9","7458a7c7f1218b71":"hJvAh"}],"fmLlC":[function(require,module,exports) {
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = require("99989eace3f0a14");
var create = require("33d550882d1e2ad");
var aFunction = require("d38ae56079749677");
var anObject = require("afd6fd42d85b0d29");
var isObject = require("911e6082bd5f2f8b");
var fails = require("ac422be7b0d3950d");
var bind = require("3d904f2f4c9166c3");
var rConstruct = (require("26f94a727c99c8ca").Reflect || {}).construct;
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function() {
    function F() {}
    return !(rConstruct(function() {}, [], F) instanceof F);
});
var ARGS_BUG = !fails(function() {
    rConstruct(function() {});
});
$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), "Reflect", {
    construct: function construct(Target, args /* , newTarget */ ) {
        aFunction(Target);
        anObject(args);
        var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
        if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
        if (Target == newTarget) {
            // w/o altered newTarget, optimization for 0-4 arguments
            switch(args.length){
                case 0:
                    return new Target();
                case 1:
                    return new Target(args[0]);
                case 2:
                    return new Target(args[0], args[1]);
                case 3:
                    return new Target(args[0], args[1], args[2]);
                case 4:
                    return new Target(args[0], args[1], args[2], args[3]);
            }
            // w/o altered newTarget, lot of arguments case
            var $args = [
                null
            ];
            $args.push.apply($args, args);
            return new (bind.apply(Target, $args))();
        }
        // with altered newTarget, not support built-in constructors
        var proto = newTarget.prototype;
        var instance = create(isObject(proto) ? proto : Object.prototype);
        var result = Function.apply.call(Target, instance, args);
        return isObject(result) ? result : instance;
    }
});

},{"99989eace3f0a14":"V6uGr","33d550882d1e2ad":"1Vr2z","d38ae56079749677":"cWXNC","afd6fd42d85b0d29":"jvvZN","911e6082bd5f2f8b":"8MCxb","ac422be7b0d3950d":"hJvAh","3d904f2f4c9166c3":"1ASP5","26f94a727c99c8ca":"aN7D9"}],"26zWE":[function(require,module,exports) {
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = require("82671e08a7e55408");
var $export = require("e724e33bc3ba73f");
var anObject = require("f75a5a924fe5a498");
var toPrimitive = require("5b34e0487b80332");
// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * require("ed0512d2bc8f0808")(function() {
    // eslint-disable-next-line no-undef
    Reflect.defineProperty(dP.f({}, 1, {
        value: 1
    }), 1, {
        value: 2
    });
}), "Reflect", {
    defineProperty: function defineProperty(target, propertyKey, attributes) {
        anObject(target);
        propertyKey = toPrimitive(propertyKey, true);
        anObject(attributes);
        try {
            dP.f(target, propertyKey, attributes);
            return true;
        } catch (e) {
            return false;
        }
    }
});

},{"82671e08a7e55408":"kXoVM","e724e33bc3ba73f":"V6uGr","f75a5a924fe5a498":"jvvZN","5b34e0487b80332":"esus5","ed0512d2bc8f0808":"hJvAh"}],"iTk2U":[function(require,module,exports) {
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = require("e5aa2118c68daf51");
var gOPD = require("59ce731b3409ea79").f;
var anObject = require("922574eff7ef8349");
$export($export.S, "Reflect", {
    deleteProperty: function deleteProperty(target, propertyKey) {
        var desc = gOPD(anObject(target), propertyKey);
        return desc && !desc.configurable ? false : delete target[propertyKey];
    }
});

},{"e5aa2118c68daf51":"V6uGr","59ce731b3409ea79":"amyyc","922574eff7ef8349":"jvvZN"}],"gmZzJ":[function(require,module,exports) {
"use strict";
// 26.1.5 Reflect.enumerate(target)
var $export = require("8074b9c2be9af379");
var anObject = require("9a44380310c2c68d");
var Enumerate = function(iterated) {
    this._t = anObject(iterated); // target
    this._i = 0; // next index
    var keys = this._k = []; // keys
    var key;
    for(key in iterated)keys.push(key);
};
require("e4d121e7ec5e596f")(Enumerate, "Object", function() {
    var that = this;
    var keys = that._k;
    var key;
    do {
        if (that._i >= keys.length) return {
            value: undefined,
            done: true
        };
    }while (!((key = keys[that._i++]) in that._t));
    return {
        value: key,
        done: false
    };
});
$export($export.S, "Reflect", {
    enumerate: function enumerate(target) {
        return new Enumerate(target);
    }
});

},{"8074b9c2be9af379":"V6uGr","9a44380310c2c68d":"jvvZN","e4d121e7ec5e596f":"f9TIG"}],"WPGLq":[function(require,module,exports) {
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = require("21c0f2934e16bc2b");
var getPrototypeOf = require("808ea42574f2856");
var has = require("fbe51fd452e0663a");
var $export = require("23b5a120525cd5fd");
var isObject = require("27af8abc0554f80f");
var anObject = require("10f6164a86d97435");
function get(target, propertyKey /* , receiver */ ) {
    var receiver = arguments.length < 3 ? target : arguments[2];
    var desc, proto;
    if (anObject(target) === receiver) return target[propertyKey];
    if (desc = gOPD.f(target, propertyKey)) return has(desc, "value") ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
    if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}
$export($export.S, "Reflect", {
    get: get
});

},{"21c0f2934e16bc2b":"amyyc","808ea42574f2856":"hKcQc","fbe51fd452e0663a":"hCETW","23b5a120525cd5fd":"V6uGr","27af8abc0554f80f":"8MCxb","10f6164a86d97435":"jvvZN"}],"5b2ND":[function(require,module,exports) {
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = require("6330288bf985d3e9");
var $export = require("4f2c6205b38e4f36");
var anObject = require("82b9fad402ba4806");
$export($export.S, "Reflect", {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        return gOPD.f(anObject(target), propertyKey);
    }
});

},{"6330288bf985d3e9":"amyyc","4f2c6205b38e4f36":"V6uGr","82b9fad402ba4806":"jvvZN"}],"7WnpS":[function(require,module,exports) {
// 26.1.8 Reflect.getPrototypeOf(target)
var $export = require("6f4ca5789671f1c8");
var getProto = require("b5ca3eb706d1549");
var anObject = require("3df64cf45f2ebef8");
$export($export.S, "Reflect", {
    getPrototypeOf: function getPrototypeOf(target) {
        return getProto(anObject(target));
    }
});

},{"6f4ca5789671f1c8":"V6uGr","b5ca3eb706d1549":"hKcQc","3df64cf45f2ebef8":"jvvZN"}],"g0R2w":[function(require,module,exports) {
// 26.1.9 Reflect.has(target, propertyKey)
var $export = require("f16cd54d8559d600");
$export($export.S, "Reflect", {
    has: function has(target, propertyKey) {
        return propertyKey in target;
    }
});

},{"f16cd54d8559d600":"V6uGr"}],"1HqIf":[function(require,module,exports) {
// 26.1.10 Reflect.isExtensible(target)
var $export = require("de31dd409ef6f454");
var anObject = require("999deaa0ac17bc87");
var $isExtensible = Object.isExtensible;
$export($export.S, "Reflect", {
    isExtensible: function isExtensible(target) {
        anObject(target);
        return $isExtensible ? $isExtensible(target) : true;
    }
});

},{"de31dd409ef6f454":"V6uGr","999deaa0ac17bc87":"jvvZN"}],"SGGfl":[function(require,module,exports) {
// 26.1.11 Reflect.ownKeys(target)
var $export = require("4bd6480a9ee77d4f");
$export($export.S, "Reflect", {
    ownKeys: require("2be80c895cce3b0f")
});

},{"4bd6480a9ee77d4f":"V6uGr","2be80c895cce3b0f":"8Urhq"}],"8Urhq":[function(require,module,exports) {
// all object keys, includes non-enumerable and symbols
var gOPN = require("fdd2524ef2064472");
var gOPS = require("5fa30e47990471b9");
var anObject = require("e3124bed7e4f3c9b");
var Reflect = require("ce613d623ffecda5").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
    var keys = gOPN.f(anObject(it));
    var getSymbols = gOPS.f;
    return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

},{"fdd2524ef2064472":"8ObWh","5fa30e47990471b9":"94b1k","e3124bed7e4f3c9b":"jvvZN","ce613d623ffecda5":"aN7D9"}],"ekS7r":[function(require,module,exports) {
// 26.1.12 Reflect.preventExtensions(target)
var $export = require("650b325f0ebe0dac");
var anObject = require("34fb26a203325e7");
var $preventExtensions = Object.preventExtensions;
$export($export.S, "Reflect", {
    preventExtensions: function preventExtensions(target) {
        anObject(target);
        try {
            if ($preventExtensions) $preventExtensions(target);
            return true;
        } catch (e) {
            return false;
        }
    }
});

},{"650b325f0ebe0dac":"V6uGr","34fb26a203325e7":"jvvZN"}],"jmapP":[function(require,module,exports) {
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = require("c9a3632fade6005d");
var gOPD = require("cfb8a592a158b62c");
var getPrototypeOf = require("2a44eb13bd5463e2");
var has = require("bc42fb27839f65a6");
var $export = require("b298fa714e36587");
var createDesc = require("1d3159abe87fb3d0");
var anObject = require("e9faef7e6c75ba17");
var isObject = require("4ac1c1c122ac89a7");
function set(target, propertyKey, V /* , receiver */ ) {
    var receiver = arguments.length < 4 ? target : arguments[3];
    var ownDesc = gOPD.f(anObject(target), propertyKey);
    var existingDescriptor, proto;
    if (!ownDesc) {
        if (isObject(proto = getPrototypeOf(target))) return set(proto, propertyKey, V, receiver);
        ownDesc = createDesc(0);
    }
    if (has(ownDesc, "value")) {
        if (ownDesc.writable === false || !isObject(receiver)) return false;
        if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
            if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
            existingDescriptor.value = V;
            dP.f(receiver, propertyKey, existingDescriptor);
        } else dP.f(receiver, propertyKey, createDesc(0, V));
        return true;
    }
    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}
$export($export.S, "Reflect", {
    set: set
});

},{"c9a3632fade6005d":"kXoVM","cfb8a592a158b62c":"amyyc","2a44eb13bd5463e2":"hKcQc","bc42fb27839f65a6":"hCETW","b298fa714e36587":"V6uGr","1d3159abe87fb3d0":"apD9J","e9faef7e6c75ba17":"jvvZN","4ac1c1c122ac89a7":"8MCxb"}],"fkFTs":[function(require,module,exports) {
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = require("3cd65b859bca521c");
var setProto = require("33ff3078b033de89");
if (setProto) $export($export.S, "Reflect", {
    setPrototypeOf: function setPrototypeOf(target, proto) {
        setProto.check(target, proto);
        try {
            setProto.set(target, proto);
            return true;
        } catch (e) {
            return false;
        }
    }
});

},{"3cd65b859bca521c":"V6uGr","33ff3078b033de89":"kfX2R"}],"eh6i0":[function(require,module,exports) {
require("4143bb95cfd73a31");
module.exports = require("f0335002ec86a029").Array.includes;

},{"4143bb95cfd73a31":"l0ova","f0335002ec86a029":"dgbK5"}],"l0ova":[function(require,module,exports) {
"use strict";
// https://github.com/tc39/Array.prototype.includes
var $export = require("6c832416ebc9c4a3");
var $includes = require("931780d564f097de")(true);
$export($export.P, "Array", {
    includes: function includes(el /* , fromIndex = 0 */ ) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
});
require("7fc20a5bc18ea2a6")("includes");

},{"6c832416ebc9c4a3":"V6uGr","931780d564f097de":"f0gsM","7fc20a5bc18ea2a6":"9tnCe"}],"kA7pl":[function(require,module,exports) {
require("1b5c191f3a8f0d03");
module.exports = require("4571ff4cca403c26").Array.flatMap;

},{"1b5c191f3a8f0d03":"80Q1T","4571ff4cca403c26":"dgbK5"}],"80Q1T":[function(require,module,exports) {
"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = require("98f2d98ef784da90");
var flattenIntoArray = require("8d7f542bef00771f");
var toObject = require("103b20d95d9005d8");
var toLength = require("ccedc4b3fb4c0c8e");
var aFunction = require("633ffe253241f6c2");
var arraySpeciesCreate = require("af8926f5b1f24bb9");
$export($export.P, "Array", {
    flatMap: function flatMap(callbackfn /* , thisArg */ ) {
        var O = toObject(this);
        var sourceLen, A;
        aFunction(callbackfn);
        sourceLen = toLength(O.length);
        A = arraySpeciesCreate(O, 0);
        flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
        return A;
    }
});
require("ff23784a212a7343")("flatMap");

},{"98f2d98ef784da90":"V6uGr","8d7f542bef00771f":"5yrOS","103b20d95d9005d8":"88RFO","ccedc4b3fb4c0c8e":"6i4KF","633ffe253241f6c2":"cWXNC","af8926f5b1f24bb9":"a9B1w","ff23784a212a7343":"9tnCe"}],"5yrOS":[function(require,module,exports) {
"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = require("dee83c070b231e11");
var isObject = require("5687399cc8b4ca4c");
var toLength = require("ce46b557f2150616");
var ctx = require("10c53c5f5b98d07a");
var IS_CONCAT_SPREADABLE = require("420a0351dc95c1c0")("isConcatSpreadable");
function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
    var targetIndex = start;
    var sourceIndex = 0;
    var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
    var element, spreadable;
    while(sourceIndex < sourceLen){
        if (sourceIndex in source) {
            element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
            spreadable = false;
            if (isObject(element)) {
                spreadable = element[IS_CONCAT_SPREADABLE];
                spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
            }
            if (spreadable && depth > 0) targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
            else {
                if (targetIndex >= 0x1fffffffffffff) throw TypeError();
                target[targetIndex] = element;
            }
            targetIndex++;
        }
        sourceIndex++;
    }
    return targetIndex;
}
module.exports = flattenIntoArray;

},{"dee83c070b231e11":"7gyM5","5687399cc8b4ca4c":"8MCxb","ce46b557f2150616":"6i4KF","10c53c5f5b98d07a":"8I23f","420a0351dc95c1c0":"irAMb"}],"j3Bkf":[function(require,module,exports) {
require("6412308e23f81fc");
module.exports = require("965d7aae4ccdabef").String.padStart;

},{"6412308e23f81fc":"7yAVG","965d7aae4ccdabef":"dgbK5"}],"7yAVG":[function(require,module,exports) {
"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require("387f5e6a660468a2");
var $pad = require("2f0f79ff1552e63d");
var userAgent = require("d97e7319a2ca5643");
// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
$export($export.P + $export.F * WEBKIT_BUG, "String", {
    padStart: function padStart(maxLength /* , fillString = ' ' */ ) {
        return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
    }
});

},{"387f5e6a660468a2":"V6uGr","2f0f79ff1552e63d":"iEJyN","d97e7319a2ca5643":"dRhyz"}],"iEJyN":[function(require,module,exports) {
// https://github.com/tc39/proposal-string-pad-start-end
var toLength = require("d34f653596f6bbb1");
var repeat = require("b2103d55d6f4077e");
var defined = require("fe7f02bd545cfcc2");
module.exports = function(that, maxLength, fillString, left) {
    var S = String(defined(that));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? " " : String(fillString);
    var intMaxLength = toLength(maxLength);
    if (intMaxLength <= stringLength || fillStr == "") return S;
    var fillLen = intMaxLength - stringLength;
    var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return left ? stringFiller + S : S + stringFiller;
};

},{"d34f653596f6bbb1":"6i4KF","b2103d55d6f4077e":"k61Ex","fe7f02bd545cfcc2":"fDNME"}],"bFEW4":[function(require,module,exports) {
require("d043d07a80c31bb7");
module.exports = require("c0233209165c7b1f").String.padEnd;

},{"d043d07a80c31bb7":"7I71B","c0233209165c7b1f":"dgbK5"}],"7I71B":[function(require,module,exports) {
"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require("f4ce1114c1625515");
var $pad = require("ddf1f3974cfde46a");
var userAgent = require("6509a35595fafaf8");
// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
$export($export.P + $export.F * WEBKIT_BUG, "String", {
    padEnd: function padEnd(maxLength /* , fillString = ' ' */ ) {
        return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
    }
});

},{"f4ce1114c1625515":"V6uGr","ddf1f3974cfde46a":"iEJyN","6509a35595fafaf8":"dRhyz"}],"22mY2":[function(require,module,exports) {
require("cb512948fc2227d9");
module.exports = require("7c89e9af85873f85").String.trimLeft;

},{"cb512948fc2227d9":"b7kxi","7c89e9af85873f85":"dgbK5"}],"b7kxi":[function(require,module,exports) {
"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require("bc520900530e60f8")("trimLeft", function($trim) {
    return function trimLeft() {
        return $trim(this, 1);
    };
}, "trimStart");

},{"bc520900530e60f8":"uShdT"}],"kERHX":[function(require,module,exports) {
require("c01e1a3d51efd4b");
module.exports = require("49dca850d290df1f").String.trimRight;

},{"c01e1a3d51efd4b":"buLrN","49dca850d290df1f":"dgbK5"}],"buLrN":[function(require,module,exports) {
"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require("f15cd7c67dd0c47a")("trimRight", function($trim) {
    return function trimRight() {
        return $trim(this, 2);
    };
}, "trimEnd");

},{"f15cd7c67dd0c47a":"uShdT"}],"bIz9A":[function(require,module,exports) {
require("8965912948e51878");
module.exports = require("2e86006595ddd3f4").f("asyncIterator");

},{"8965912948e51878":"7IzxN","2e86006595ddd3f4":"a0pdl"}],"7IzxN":[function(require,module,exports) {
require("9b4011c8d1f201d7")("asyncIterator");

},{"9b4011c8d1f201d7":"5ltJ1"}],"7fWrq":[function(require,module,exports) {
require("a5b106eea5127ae5");
module.exports = require("ebdafb0cf7baf809").Object.getOwnPropertyDescriptors;

},{"a5b106eea5127ae5":"hbj7g","ebdafb0cf7baf809":"dgbK5"}],"hbj7g":[function(require,module,exports) {
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = require("89392be679ac2821");
var ownKeys = require("63cbbf82f2260a80");
var toIObject = require("308f514f3ea8a028");
var gOPD = require("3edfeca2c1d3eda7");
var createProperty = require("547c20acf78e3b71");
$export($export.S, "Object", {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
        var O = toIObject(object);
        var getDesc = gOPD.f;
        var keys = ownKeys(O);
        var result = {};
        var i = 0;
        var key, desc;
        while(keys.length > i){
            desc = getDesc(O, key = keys[i++]);
            if (desc !== undefined) createProperty(result, key, desc);
        }
        return result;
    }
});

},{"89392be679ac2821":"V6uGr","63cbbf82f2260a80":"8Urhq","308f514f3ea8a028":"bg6wm","3edfeca2c1d3eda7":"amyyc","547c20acf78e3b71":"dTRTT"}],"6i0X2":[function(require,module,exports) {
require("db731f3c711f7a87");
module.exports = require("37ede6c089c6428e").Object.values;

},{"db731f3c711f7a87":"8q9OG","37ede6c089c6428e":"dgbK5"}],"8q9OG":[function(require,module,exports) {
// https://github.com/tc39/proposal-object-values-entries
var $export = require("53873ee5bbc1579d");
var $values = require("9f4c421687fe67dd")(false);
$export($export.S, "Object", {
    values: function values(it) {
        return $values(it);
    }
});

},{"53873ee5bbc1579d":"V6uGr","9f4c421687fe67dd":"aIAAE"}],"aIAAE":[function(require,module,exports) {
var DESCRIPTORS = require("36fefc149556cf3c");
var getKeys = require("f722462de8cb4638");
var toIObject = require("c558e9af9ebaf9f0");
var isEnum = require("d84e9389d32d292b").f;
module.exports = function(isEntries) {
    return function(it) {
        var O = toIObject(it);
        var keys = getKeys(O);
        var length = keys.length;
        var i = 0;
        var result = [];
        var key;
        while(length > i){
            key = keys[i++];
            if (!DESCRIPTORS || isEnum.call(O, key)) result.push(isEntries ? [
                key,
                O[key]
            ] : O[key]);
        }
        return result;
    };
};

},{"36fefc149556cf3c":"cTJEh","f722462de8cb4638":"2PUHx","c558e9af9ebaf9f0":"bg6wm","d84e9389d32d292b":"3iwSK"}],"1GJUe":[function(require,module,exports) {
require("12401a0787f6ab6");
module.exports = require("54345c487db17b5").Object.entries;

},{"12401a0787f6ab6":"gpTUw","54345c487db17b5":"dgbK5"}],"gpTUw":[function(require,module,exports) {
// https://github.com/tc39/proposal-object-values-entries
var $export = require("1022d424ebf2b086");
var $entries = require("d399b8fe7d985836")(true);
$export($export.S, "Object", {
    entries: function entries(it) {
        return $entries(it);
    }
});

},{"1022d424ebf2b086":"V6uGr","d399b8fe7d985836":"aIAAE"}],"cVpS2":[function(require,module,exports) {
"use strict";
require("820027008aed74ec");
require("e3afef65a0920f56");
module.exports = require("71a017a3d8fce935").Promise["finally"];

},{"820027008aed74ec":"gU1le","e3afef65a0920f56":"8YjkK","71a017a3d8fce935":"dgbK5"}],"8YjkK":[function(require,module,exports) {
// https://github.com/tc39/proposal-promise-finally
"use strict";
var $export = require("8678978a95384f1");
var core = require("684ba5f21a1a6059");
var global = require("9ac57b8b4466ef95");
var speciesConstructor = require("17333fa9a2acdb84");
var promiseResolve = require("eee856cc45e0a9a7");
$export($export.P + $export.R, "Promise", {
    "finally": function(onFinally) {
        var C = speciesConstructor(this, core.Promise || global.Promise);
        var isFunction = typeof onFinally == "function";
        return this.then(isFunction ? function(x) {
            return promiseResolve(C, onFinally()).then(function() {
                return x;
            });
        } : onFinally, isFunction ? function(e) {
            return promiseResolve(C, onFinally()).then(function() {
                throw e;
            });
        } : onFinally);
    }
});

},{"8678978a95384f1":"V6uGr","684ba5f21a1a6059":"dgbK5","9ac57b8b4466ef95":"aN7D9","17333fa9a2acdb84":"gbQWK","eee856cc45e0a9a7":"5zKPp"}],"9YIj3":[function(require,module,exports) {
require("24046694b6a8dea3");
require("c3615083734c8b27");
require("6938b01462f96c84");
module.exports = require("8c948870e34e2a05");

},{"24046694b6a8dea3":"4FBfN","c3615083734c8b27":"cjZCv","6938b01462f96c84":"8wmcN","8c948870e34e2a05":"dgbK5"}],"4FBfN":[function(require,module,exports) {
// ie9- setTimeout & setInterval additional parameters fix
var global = require("4db0e22e7bcd8028");
var $export = require("1854e2032a6fdeed");
var userAgent = require("736ffb547589d350");
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function(set) {
    return function(fn, time /* , ...args */ ) {
        var boundArgs = arguments.length > 2;
        var args = boundArgs ? slice.call(arguments, 2) : false;
        return set(boundArgs ? function() {
            // eslint-disable-next-line no-new-func
            (typeof fn == "function" ? fn : Function(fn)).apply(this, args);
        } : fn, time);
    };
};
$export($export.G + $export.B + $export.F * MSIE, {
    setTimeout: wrap(global.setTimeout),
    setInterval: wrap(global.setInterval)
});

},{"4db0e22e7bcd8028":"aN7D9","1854e2032a6fdeed":"V6uGr","736ffb547589d350":"dRhyz"}],"cjZCv":[function(require,module,exports) {
var $export = require("af507ce87e41a20c");
var $task = require("f3e37c42365e6105");
$export($export.G + $export.B, {
    setImmediate: $task.set,
    clearImmediate: $task.clear
});

},{"af507ce87e41a20c":"V6uGr","f3e37c42365e6105":"5uev1"}],"8wmcN":[function(require,module,exports) {
var $iterators = require("5fe806b1e7f583c0");
var getKeys = require("97646e462e98667a");
var redefine = require("b2fc1f92ab5348f1");
var global = require("ff5bc3a0e23bebd1");
var hide = require("eb90d3b2d8d1b5b");
var Iterators = require("f4eb5e7788345336");
var wks = require("ba3590d81d843dbb");
var ITERATOR = wks("iterator");
var TO_STRING_TAG = wks("toStringTag");
var ArrayValues = Iterators.Array;
var DOMIterables = {
    CSSRuleList: true,
    CSSStyleDeclaration: false,
    CSSValueList: false,
    ClientRectList: false,
    DOMRectList: false,
    DOMStringList: false,
    DOMTokenList: true,
    DataTransferItemList: false,
    FileList: false,
    HTMLAllCollection: false,
    HTMLCollection: false,
    HTMLFormElement: false,
    HTMLSelectElement: false,
    MediaList: true,
    MimeTypeArray: false,
    NamedNodeMap: false,
    NodeList: true,
    PaintRequestList: false,
    Plugin: false,
    PluginArray: false,
    SVGLengthList: false,
    SVGNumberList: false,
    SVGPathSegList: false,
    SVGPointList: false,
    SVGStringList: false,
    SVGTransformList: false,
    SourceBufferList: false,
    StyleSheetList: true,
    TextTrackCueList: false,
    TextTrackList: false,
    TouchList: false
};
for(var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++){
    var NAME = collections[i];
    var explicit = DOMIterables[NAME];
    var Collection = global[NAME];
    var proto = Collection && Collection.prototype;
    var key;
    if (proto) {
        if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
        if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
        Iterators[NAME] = ArrayValues;
        if (explicit) {
            for(key in $iterators)if (!proto[key]) redefine(proto, key, $iterators[key], true);
        }
    }
}

},{"5fe806b1e7f583c0":"8MwXZ","97646e462e98667a":"2PUHx","b2fc1f92ab5348f1":"1Nq8R","ff5bc3a0e23bebd1":"aN7D9","eb90d3b2d8d1b5b":"6kOvw","f4eb5e7788345336":"iLt3f","ba3590d81d843dbb":"irAMb"}],"8zdwO":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next mehtod, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"ls91z":[function(require,module,exports) {
require("e8bdcdeeb9c01d98");
module.exports = require("c7e98027218dd649").global;

},{"e8bdcdeeb9c01d98":"8bpFM","c7e98027218dd649":"1FZMF"}],"8bpFM":[function(require,module,exports) {
// https://github.com/tc39/proposal-global
var $export = require("a9b772cbb880c7a0");
$export($export.G, {
    global: require("d8353f45753b5c4a")
});

},{"a9b772cbb880c7a0":"cyS2C","d8353f45753b5c4a":"bGAI8"}],"cyS2C":[function(require,module,exports) {
var global = require("280d898477400d74");
var core = require("675cdc75da15c6cc");
var ctx = require("b3e02d951b36329c");
var hide = require("ddc23a3c61502858");
var has = require("918e8739fa09f494");
var PROTOTYPE = "prototype";
var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var IS_WRAP = type & $export.W;
    var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
    var expProto = exports[PROTOTYPE];
    var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
    var key, own, out;
    if (IS_GLOBAL) source = name;
    for(key in source){
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined;
        if (own && has(exports, key)) continue;
        // export native or passed
        out = own ? target[key] : source[key];
        // prevent global pollution for namespaces
        exports[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
            var F = function(a, b, c) {
                if (this instanceof C) {
                    switch(arguments.length){
                        case 0:
                            return new C();
                        case 1:
                            return new C(a);
                        case 2:
                            return new C(a, b);
                    }
                    return new C(a, b, c);
                }
                return C.apply(this, arguments);
            };
            F[PROTOTYPE] = C[PROTOTYPE];
            return F;
        // make static versions for prototype methods
        }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
        // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
        if (IS_PROTO) {
            (exports.virtual || (exports.virtual = {}))[key] = out;
            // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
            if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
        }
    }
};
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"280d898477400d74":"bGAI8","675cdc75da15c6cc":"1FZMF","b3e02d951b36329c":"kf2WY","ddc23a3c61502858":"1pmnW","918e8739fa09f494":"8Z9z6"}],"bGAI8":[function(require,module,exports) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
if (typeof __g == "number") __g = global; // eslint-disable-line no-undef

},{}],"1FZMF":[function(require,module,exports) {
var core = module.exports = {
    version: "2.6.12"
};
if (typeof __e == "number") __e = core; // eslint-disable-line no-undef

},{}],"kf2WY":[function(require,module,exports) {
// optional / simple context binding
var aFunction = require("c33d1bc3a4957666");
module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch(length){
        case 1:
            return function(a) {
                return fn.call(that, a);
            };
        case 2:
            return function(a, b) {
                return fn.call(that, a, b);
            };
        case 3:
            return function(a, b, c) {
                return fn.call(that, a, b, c);
            };
    }
    return function() {
        return fn.apply(that, arguments);
    };
};

},{"c33d1bc3a4957666":"ecTQc"}],"ecTQc":[function(require,module,exports) {
module.exports = function(it) {
    if (typeof it != "function") throw TypeError(it + " is not a function!");
    return it;
};

},{}],"1pmnW":[function(require,module,exports) {
var dP = require("b50b81010811f779");
var createDesc = require("6ae41bf95c963be1");
module.exports = require("aca69a30f8d97bbf") ? function(object, key, value) {
    return dP.f(object, key, createDesc(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"b50b81010811f779":"5TFNK","6ae41bf95c963be1":"b3moB","aca69a30f8d97bbf":"79D77"}],"5TFNK":[function(require,module,exports) {
var anObject = require("39c1614979b2c200");
var IE8_DOM_DEFINE = require("81b6a1862b6bb3f4");
var toPrimitive = require("23225402685cd00b");
var dP = Object.defineProperty;
exports.f = require("e768d3f130c18468") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return dP(O, P, Attributes);
    } catch (e) {}
    if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"39c1614979b2c200":"1TBfO","81b6a1862b6bb3f4":"kYrOd","23225402685cd00b":"1cAVj","e768d3f130c18468":"79D77"}],"1TBfO":[function(require,module,exports) {
var isObject = require("d1fa6c6d718b2af0");
module.exports = function(it) {
    if (!isObject(it)) throw TypeError(it + " is not an object!");
    return it;
};

},{"d1fa6c6d718b2af0":"1S9yb"}],"1S9yb":[function(require,module,exports) {
module.exports = function(it) {
    return typeof it === "object" ? it !== null : typeof it === "function";
};

},{}],"kYrOd":[function(require,module,exports) {
module.exports = !require("25e39c96b485a2d4") && !require("841f8f7344d52e3c")(function() {
    return Object.defineProperty(require("26ea8bab98f45102")("div"), "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"25e39c96b485a2d4":"79D77","841f8f7344d52e3c":"fdy22","26ea8bab98f45102":"7j2s9"}],"79D77":[function(require,module,exports) {
// Thank's IE8 for his funny defineProperty
module.exports = !require("384e64392289cbf0")(function() {
    return Object.defineProperty({}, "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"384e64392289cbf0":"fdy22"}],"fdy22":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (e) {
        return true;
    }
};

},{}],"7j2s9":[function(require,module,exports) {
var isObject = require("1c4f66d669be867c");
var document = require("382f8de20d058e56").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return is ? document.createElement(it) : {};
};

},{"1c4f66d669be867c":"1S9yb","382f8de20d058e56":"bGAI8"}],"1cAVj":[function(require,module,exports) {
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require("bdd1a0adae2b9200");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S) {
    if (!isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
};

},{"bdd1a0adae2b9200":"1S9yb"}],"b3moB":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"8Z9z6":[function(require,module,exports) {
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
};

},{}],"a1kpn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "login", ()=>login);
parcelHelpers.export(exports, "logout", ()=>logout);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _alertsJs = require("./alerts.js");
async function login(email, password) {
    try {
        const res = await (0, _axiosDefault.default)({
            method: "POST",
            url: "http://localhost:3000/api/v1/users/login",
            data: {
                email,
                password
            }
        });
        if (res.data.status === "success") {
            (0, _alertsJs.showAlert)("success", "Login successful.");
            location.assign("/");
        }
    } catch (error) {
        (0, _alertsJs.showAlert)("error", "Login failed.");
    }
}
async function logout() {
    try {
        const res = await (0, _axiosDefault.default)({
            method: "GET",
            url: "http://localhost:3000/api/v1/users/logout"
        });
        if (res.data.status === "success") {
            (0, _alertsJs.showAlert)("success", "Logout successful.");
            location.reload(true);
        }
    } catch (error) {
        (0, _alertsJs.showAlert)("error", "Logout failed.");
    }
}

},{"axios":"409tG","./alerts.js":"2nXpP","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"409tG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _axiosJsDefault.default));
parcelHelpers.export(exports, "Axios", ()=>Axios);
parcelHelpers.export(exports, "AxiosError", ()=>AxiosError);
parcelHelpers.export(exports, "CanceledError", ()=>CanceledError);
parcelHelpers.export(exports, "isCancel", ()=>isCancel);
parcelHelpers.export(exports, "CancelToken", ()=>CancelToken);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "Cancel", ()=>Cancel);
parcelHelpers.export(exports, "isAxiosError", ()=>isAxiosError);
parcelHelpers.export(exports, "spread", ()=>spread);
parcelHelpers.export(exports, "toFormData", ()=>toFormData);
parcelHelpers.export(exports, "AxiosHeaders", ()=>AxiosHeaders);
parcelHelpers.export(exports, "HttpStatusCode", ()=>HttpStatusCode);
parcelHelpers.export(exports, "formToJSON", ()=>formToJSON);
parcelHelpers.export(exports, "mergeConfig", ()=>mergeConfig);
var _axiosJs = require("./lib/axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const { Axios, AxiosError, CanceledError, isCancel, CancelToken, VERSION, all, Cancel, isAxiosError, spread, toFormData, AxiosHeaders, HttpStatusCode, formToJSON, mergeConfig } = (0, _axiosJsDefault.default);

},{"./lib/axios.js":"gJI1D","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"gJI1D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var _axiosJs = require("./core/Axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
var _mergeConfigJs = require("./core/mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _indexJs = require("./defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("./helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
var _canceledErrorJs = require("./cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _cancelTokenJs = require("./cancel/CancelToken.js");
var _cancelTokenJsDefault = parcelHelpers.interopDefault(_cancelTokenJs);
var _isCancelJs = require("./cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _dataJs = require("./env/data.js");
var _toFormDataJs = require("./helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _axiosErrorJs = require("./core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _spreadJs = require("./helpers/spread.js");
var _spreadJsDefault = parcelHelpers.interopDefault(_spreadJs);
var _isAxiosErrorJs = require("./helpers/isAxiosError.js");
var _isAxiosErrorJsDefault = parcelHelpers.interopDefault(_isAxiosErrorJs);
var _axiosHeadersJs = require("./core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _httpStatusCodeJs = require("./helpers/HttpStatusCode.js");
var _httpStatusCodeJsDefault = parcelHelpers.interopDefault(_httpStatusCodeJs);
"use strict";
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    const context = new (0, _axiosJsDefault.default)(defaultConfig);
    const instance = (0, _bindJsDefault.default)((0, _axiosJsDefault.default).prototype.request, context);
    // Copy axios.prototype to instance
    (0, _utilsJsDefault.default).extend(instance, (0, _axiosJsDefault.default).prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    (0, _utilsJsDefault.default).extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance((0, _mergeConfigJsDefault.default)(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const axios = createInstance((0, _indexJsDefault.default));
// Expose Axios class to allow class inheritance
axios.Axios = (0, _axiosJsDefault.default);
// Expose Cancel & CancelToken
axios.CanceledError = (0, _canceledErrorJsDefault.default);
axios.CancelToken = (0, _cancelTokenJsDefault.default);
axios.isCancel = (0, _isCancelJsDefault.default);
axios.VERSION = (0, _dataJs.VERSION);
axios.toFormData = (0, _toFormDataJsDefault.default);
// Expose AxiosError class
axios.AxiosError = (0, _axiosErrorJsDefault.default);
// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = (0, _spreadJsDefault.default);
// Expose isAxiosError
axios.isAxiosError = (0, _isAxiosErrorJsDefault.default);
// Expose mergeConfig
axios.mergeConfig = (0, _mergeConfigJsDefault.default);
axios.AxiosHeaders = (0, _axiosHeadersJsDefault.default);
axios.formToJSON = (thing)=>(0, _formDataToJSONJsDefault.default)((0, _utilsJsDefault.default).isHTMLForm(thing) ? new FormData(thing) : thing);
axios.HttpStatusCode = (0, _httpStatusCodeJsDefault.default);
axios.default = axios;
// this module should only have a default export
exports.default = axios;

},{"./utils.js":"1TKVi","./helpers/bind.js":"eRNBe","./core/Axios.js":"oVXrm","./core/mergeConfig.js":"3sqbZ","./defaults/index.js":"8eOcd","./helpers/formDataToJSON.js":"fKKgg","./cancel/CanceledError.js":"bwLfv","./cancel/CancelToken.js":"7Yhli","./cancel/isCancel.js":"hWCMa","./env/data.js":"aztz4","./helpers/toFormData.js":"iwlEn","./core/AxiosError.js":"3Gd7G","./helpers/spread.js":"c9KBK","./helpers/isAxiosError.js":"6OdOU","./core/AxiosHeaders.js":"37QsX","./helpers/HttpStatusCode.js":"lBtx4","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"1TKVi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var global = arguments[3];
"use strict";
// utils is a library of generic helper functions non-specific to axios
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const kindOf = ((cache)=>(thing)=>{
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>kindOf(thing) === type;
};
const typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const isUndefined = typeOfTest("undefined");
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const isArrayBuffer = kindOfTest("ArrayBuffer");
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const isString = typeOfTest("string");
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const isFunction = typeOfTest("function");
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const isNumber = typeOfTest("number");
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const isObject = (thing)=>thing !== null && typeof thing === "object";
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const isPlainObject = (val)=>{
    if (kindOf(val) !== "object") return false;
    const prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const isDate = kindOfTest("Date");
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFile = kindOfTest("File");
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const isBlob = kindOfTest("Blob");
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFileList = kindOfTest("FileList");
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const isStream = (val)=>isObject(val) && isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const isFormData = (thing)=>{
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const isURLSearchParams = kindOfTest("URLSearchParams");
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */ function forEach(obj, fn, { allOwnKeys = false } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") return;
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== "object") /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) return _key;
    }
    return null;
}
const _global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context)=>!isUndefined(context) && context !== _global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        const targetKey = caseless && findKey(result, key) || key;
        if (isPlainObject(result[targetKey]) && isPlainObject(val)) result[targetKey] = merge(result[targetKey], val);
        else if (isPlainObject(val)) result[targetKey] = merge({}, val);
        else if (isArray(val)) result[targetKey] = val.slice();
        else result[targetKey] = val;
    };
    for(let i = 0, l = arguments.length; i < l; i++)arguments[i] && forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const extend = (a, b, thisArg, { allOwnKeys } = {})=>{
    forEach(b, (val, key)=>{
        if (thisArg && isFunction(val)) a[key] = (0, _bindJsDefault.default)(val, thisArg);
        else a[key] = val;
    }, {
        allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) position = str.length;
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const toArray = (thing)=>{
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0)arr[i] = thing[i];
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const forEachEntry = (obj, fn)=>{
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while((result = iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null)arr.push(matches);
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const hasOwnProperty = (({ hasOwnProperty })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors, (descriptor, name)=>{
        if (reducer(descriptor, name, obj) !== false) reducedDescriptors[name] = descriptor;
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const freezeMethods = (obj)=>{
    reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if (isFunction(obj) && [
            "arguments",
            "caller",
            "callee"
        ].indexOf(name) !== -1) return false;
        const value = obj[name];
        if (!isFunction(value)) return;
        descriptor.enumerable = false;
        if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) descriptor.set = ()=>{
            throw Error("Can not rewrite read-only method '" + name + "'");
        };
    });
};
const toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const noop = ()=>{};
const toFiniteNumber = (value, defaultValue)=>{
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
};
const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const DIGIT = "0123456789";
const ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT)=>{
    let str = "";
    const { length } = alphabet;
    while(size--)str += alphabet[Math.random() * length | 0];
    return str;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if (isObject(source)) {
            if (stack.indexOf(source) >= 0) return;
            if (!("toJSON" in source)) {
                stack[i] = source;
                const target = isArray(source) ? [] : {};
                forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing)=>thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
exports.default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable
};

},{"./helpers/bind.js":"eRNBe","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"eRNBe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>bind);
"use strict";
function bind(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"i5ZQn":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"oVXrm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _buildURLJs = require("../helpers/buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
var _interceptorManagerJs = require("./InterceptorManager.js");
var _interceptorManagerJsDefault = parcelHelpers.interopDefault(_interceptorManagerJs);
var _dispatchRequestJs = require("./dispatchRequest.js");
var _dispatchRequestJsDefault = parcelHelpers.interopDefault(_dispatchRequestJs);
var _mergeConfigJs = require("./mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _buildFullPathJs = require("./buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _validatorJs = require("../helpers/validator.js");
var _validatorJsDefault = parcelHelpers.interopDefault(_validatorJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
const validators = (0, _validatorJsDefault.default).validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new (0, _interceptorManagerJsDefault.default)(),
            response: new (0, _interceptorManagerJsDefault.default)()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
        } else config = configOrUrl || {};
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const { transitional, paramsSerializer, headers } = config;
        if (transitional !== undefined) (0, _validatorJsDefault.default).assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
        if (paramsSerializer != null) {
            if ((0, _utilsJsDefault.default).isFunction(paramsSerializer)) config.paramsSerializer = {
                serialize: paramsSerializer
            };
            else (0, _validatorJsDefault.default).assertOptions(paramsSerializer, {
                encode: validators.function,
                serialize: validators.function
            }, true);
        }
        // Set config.method
        config.method = (config.method || this.defaults.method || "get").toLowerCase();
        let contextHeaders;
        // Flatten headers
        contextHeaders = headers && (0, _utilsJsDefault.default).merge(headers.common, headers[config.method]);
        contextHeaders && (0, _utilsJsDefault.default).forEach([
            "delete",
            "get",
            "head",
            "post",
            "put",
            "patch",
            "common"
        ], (method)=>{
            delete headers[method];
        });
        config.headers = (0, _axiosHeadersJsDefault.default).concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                (0, _dispatchRequestJsDefault.default).bind(this),
                undefined
            ];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len)promise = promise.then(chain[i++], chain[i++]);
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        i = 0;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = (0, _dispatchRequestJsDefault.default).call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len)promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        return promise;
    }
    getUri(config) {
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const fullPath = (0, _buildFullPathJsDefault.default)(config.baseURL, config.url);
        return (0, _buildURLJsDefault.default)(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
(0, _utilsJsDefault.default).forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
            method,
            url,
            data: (config || {}).data
        }));
    };
});
(0, _utilsJsDefault.default).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
                method,
                headers: isForm ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url,
                data
            }));
        };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
exports.default = Axios;

},{"./../utils.js":"1TKVi","../helpers/buildURL.js":"4ts6s","./InterceptorManager.js":"1fbF8","./dispatchRequest.js":"9jxyt","./mergeConfig.js":"3sqbZ","./buildFullPath.js":"4hbHP","../helpers/validator.js":"6oX62","./AxiosHeaders.js":"37QsX","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"4ts6s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildURL);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosURLSearchParamsJs = require("../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
"use strict";
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    const _encode = options && options.encode || encode;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) serializedParams = serializeFn(params, options);
    else serializedParams = (0, _utilsJsDefault.default).isURLSearchParams(params) ? params.toString() : new (0, _axiosURLSearchParamsJsDefault.default)(params, options).toString(_encode);
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
}

},{"../utils.js":"1TKVi","../helpers/AxiosURLSearchParams.js":"aUzuM","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"aUzuM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
"use strict";
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function encode(str) {
    const charMap = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\x00"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, _toFormDataJsDefault.default)(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
};
exports.default = AxiosURLSearchParams;

},{"./toFormData.js":"iwlEn","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"iwlEn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored
var _formDataJs = require("../platform/node/classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
var Buffer = require("adfd9b103875c2dd").Buffer;
"use strict";
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function isVisitable(thing) {
    return (0, _utilsJsDefault.default).isPlainObject(thing) || (0, _utilsJsDefault.default).isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function removeBrackets(key) {
    return (0, _utilsJsDefault.default).endsWith(key, "[]") ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = removeBrackets(token);
        return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function isFlatArray(arr) {
    return (0, _utilsJsDefault.default).isArray(arr) && !arr.some(isVisitable);
}
const predicates = (0, _utilsJsDefault.default).toFlatObject((0, _utilsJsDefault.default), {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function toFormData(obj, formData, options) {
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError("target must be an object");
    // eslint-disable-next-line no-param-reassign
    formData = formData || new ((0, _formDataJsDefault.default) || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = (0, _utilsJsDefault.default).toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !(0, _utilsJsDefault.default).isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && (0, _utilsJsDefault.default).isSpecCompliantForm(formData);
    if (!(0, _utilsJsDefault.default).isFunction(visitor)) throw new TypeError("visitor must be a function");
    function convertValue(value) {
        if (value === null) return "";
        if ((0, _utilsJsDefault.default).isDate(value)) return value.toISOString();
        if (!useBlob && (0, _utilsJsDefault.default).isBlob(value)) throw new (0, _axiosErrorJsDefault.default)("Blob is not supported. Use a Buffer instead.");
        if ((0, _utilsJsDefault.default).isArrayBuffer(value) || (0, _utilsJsDefault.default).isTypedArray(value)) return useBlob && typeof Blob === "function" ? new Blob([
            value
        ]) : Buffer.from(value);
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === "object") {
            if ((0, _utilsJsDefault.default).endsWith(key, "{}")) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if ((0, _utilsJsDefault.default).isArray(value) && isFlatArray(value) || ((0, _utilsJsDefault.default).isFileList(value) || (0, _utilsJsDefault.default).endsWith(key, "[]")) && (arr = (0, _utilsJsDefault.default).toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
                });
                return false;
            }
        }
        if (isVisitable(value)) return true;
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
    });
    function build(value, path) {
        if ((0, _utilsJsDefault.default).isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) throw Error("Circular reference detected in " + path.join("."));
        stack.push(value);
        (0, _utilsJsDefault.default).forEach(value, function each(el, key) {
            const result = !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && visitor.call(formData, el, (0, _utilsJsDefault.default).isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) build(el, path ? path.concat(key) : [
                key
            ]);
        });
        stack.pop();
    }
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError("data must be an object");
    build(obj);
    return formData;
}
exports.default = toFormData;

},{"adfd9b103875c2dd":"hqvg3","../utils.js":"1TKVi","../core/AxiosError.js":"3Gd7G","../platform/node/classes/FormData.js":"4p1PI","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"hqvg3":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("9c62938f1dccc73c");
const ieee754 = require("aceacb6a4531a9d2");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"9c62938f1dccc73c":"8OklT","aceacb6a4531a9d2":"3Ez2G"}],"8OklT":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"3Ez2G":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"3Gd7G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */ function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    else this.stack = new Error().stack;
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
}
(0, _utilsJsDefault.default).inherits(AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: (0, _utilsJsDefault.default).toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    }
});
const prototype = AxiosError.prototype;
const descriptors = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
].forEach((code)=>{
    descriptors[code] = {
        value: code
    };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", {
    value: true
});
// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps)=>{
    const axiosError = Object.create(prototype);
    (0, _utilsJsDefault.default).toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    }, (prop)=>{
        return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
exports.default = AxiosError;

},{"../utils.js":"1TKVi","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"4p1PI":[function(require,module,exports) {
// eslint-disable-next-line strict
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"1fbF8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
class InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */ eject(id) {
        if (this.handlers[id]) this.handlers[id] = null;
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) this.handlers = [];
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        (0, _utilsJsDefault.default).forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) fn(h);
        });
    }
}
exports.default = InterceptorManager;

},{"./../utils.js":"1TKVi","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"9jxyt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>dispatchRequest);
var _transformDataJs = require("./transformData.js");
var _transformDataJsDefault = parcelHelpers.interopDefault(_transformDataJs);
var _isCancelJs = require("../cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _adaptersJs = require("../adapters/adapters.js");
var _adaptersJsDefault = parcelHelpers.interopDefault(_adaptersJs);
"use strict";
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new (0, _canceledErrorJsDefault.default)(null, config);
}
function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = (0, _axiosHeadersJsDefault.default).from(config.headers);
    // Transform request data
    config.data = (0, _transformDataJsDefault.default).call(config, config.transformRequest);
    if ([
        "post",
        "put",
        "patch"
    ].indexOf(config.method) !== -1) config.headers.setContentType("application/x-www-form-urlencoded", false);
    const adapter = (0, _adaptersJsDefault.default).getAdapter(config.adapter || (0, _indexJsDefault.default).adapter);
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, response);
        response.headers = (0, _axiosHeadersJsDefault.default).from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, _isCancelJsDefault.default)(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, reason.response);
                reason.response.headers = (0, _axiosHeadersJsDefault.default).from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}

},{"./transformData.js":"7lElW","../cancel/isCancel.js":"hWCMa","../defaults/index.js":"8eOcd","../cancel/CanceledError.js":"bwLfv","../core/AxiosHeaders.js":"37QsX","../adapters/adapters.js":"4iAyZ","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"7lElW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transformData);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
function transformData(fns, response) {
    const config = this || (0, _indexJsDefault.default);
    const context = response || config;
    const headers = (0, _axiosHeadersJsDefault.default).from(context.headers);
    let data = context.data;
    (0, _utilsJsDefault.default).forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}

},{"./../utils.js":"1TKVi","../defaults/index.js":"8eOcd","../core/AxiosHeaders.js":"37QsX","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"8eOcd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _transitionalJs = require("./transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _toFormDataJs = require("../helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _toURLEncodedFormJs = require("../helpers/toURLEncodedForm.js");
var _toURLEncodedFormJsDefault = parcelHelpers.interopDefault(_toURLEncodedFormJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("../helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
"use strict";
const DEFAULT_CONTENT_TYPE = {
    "Content-Type": undefined
};
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function stringifySafely(rawValue, parser, encoder) {
    if ((0, _utilsJsDefault.default).isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return (0, _utilsJsDefault.default).trim(rawValue);
    } catch (e) {
        if (e.name !== "SyntaxError") throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
    transitional: (0, _transitionalJsDefault.default),
    adapter: [
        "xhr",
        "http"
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || "";
            const hasJSONContentType = contentType.indexOf("application/json") > -1;
            const isObjectPayload = (0, _utilsJsDefault.default).isObject(data);
            if (isObjectPayload && (0, _utilsJsDefault.default).isHTMLForm(data)) data = new FormData(data);
            const isFormData = (0, _utilsJsDefault.default).isFormData(data);
            if (isFormData) {
                if (!hasJSONContentType) return data;
                return hasJSONContentType ? JSON.stringify((0, _formDataToJSONJsDefault.default)(data)) : data;
            }
            if ((0, _utilsJsDefault.default).isArrayBuffer(data) || (0, _utilsJsDefault.default).isBuffer(data) || (0, _utilsJsDefault.default).isStream(data) || (0, _utilsJsDefault.default).isFile(data) || (0, _utilsJsDefault.default).isBlob(data)) return data;
            if ((0, _utilsJsDefault.default).isArrayBufferView(data)) return data.buffer;
            if ((0, _utilsJsDefault.default).isURLSearchParams(data)) {
                headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf("application/x-www-form-urlencoded") > -1) return (0, _toURLEncodedFormJsDefault.default)(data, this.formSerializer).toString();
                if ((isFileList = (0, _utilsJsDefault.default).isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return (0, _toFormDataJsDefault.default)(isFileList ? {
                        "files[]": data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType("application/json", false);
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === "json";
            if (data && (0, _utilsJsDefault.default).isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === "SyntaxError") throw (0, _axiosErrorJsDefault.default).from(e, (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE, this, null, this.response);
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: (0, _indexJsDefault.default).classes.FormData,
        Blob: (0, _indexJsDefault.default).classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            "Accept": "application/json, text/plain, */*"
        }
    }
};
(0, _utilsJsDefault.default).forEach([
    "delete",
    "get",
    "head"
], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
(0, _utilsJsDefault.default).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    defaults.headers[method] = (0, _utilsJsDefault.default).merge(DEFAULT_CONTENT_TYPE);
});
exports.default = defaults;

},{"../utils.js":"1TKVi","../core/AxiosError.js":"3Gd7G","./transitional.js":"4S6Rm","../helpers/toFormData.js":"iwlEn","../helpers/toURLEncodedForm.js":"lU2gY","../platform/index.js":"cQoGF","../helpers/formDataToJSON.js":"fKKgg","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"4S6Rm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"lU2gY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>toURLEncodedForm);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
function toURLEncodedForm(data, options) {
    return (0, _toFormDataJsDefault.default)(data, new (0, _indexJsDefault.default).classes.URLSearchParams(), Object.assign({
        visitor: function(value, key, path, helpers) {
            if ((0, _indexJsDefault.default).isNode && (0, _utilsJsDefault.default).isBuffer(value)) {
                this.append(key, value.toString("base64"));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        }
    }, options));
}

},{"../utils.js":"1TKVi","./toFormData.js":"iwlEn","../platform/index.js":"cQoGF","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"cQoGF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _indexJsDefault.default));
var _indexJs = require("./node/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);

},{"./node/index.js":"2lNDc","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"2lNDc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _urlsearchParamsJs = require("./classes/URLSearchParams.js");
var _urlsearchParamsJsDefault = parcelHelpers.interopDefault(_urlsearchParamsJs);
var _formDataJs = require("./classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
var _blobJs = require("./classes/Blob.js");
var _blobJsDefault = parcelHelpers.interopDefault(_blobJs);
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const isStandardBrowserEnv = (()=>{
    let product;
    if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) return false;
    return typeof window !== "undefined" && typeof document !== "undefined";
})();
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const isStandardBrowserWebWorkerEnv = (()=>{
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
exports.default = {
    isBrowser: true,
    classes: {
        URLSearchParams: (0, _urlsearchParamsJsDefault.default),
        FormData: (0, _formDataJsDefault.default),
        Blob: (0, _blobJsDefault.default)
    },
    isStandardBrowserEnv,
    isStandardBrowserWebWorkerEnv,
    protocols: [
        "http",
        "https",
        "file",
        "blob",
        "url",
        "data"
    ]
};

},{"./classes/URLSearchParams.js":"5Lr9q","./classes/FormData.js":"7x26G","./classes/Blob.js":"kLqww","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"5Lr9q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosURLSearchParamsJs = require("../../../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
"use strict";
exports.default = typeof URLSearchParams !== "undefined" ? URLSearchParams : (0, _axiosURLSearchParamsJsDefault.default);

},{"../../../helpers/AxiosURLSearchParams.js":"aUzuM","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"7x26G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = typeof FormData !== "undefined" ? FormData : null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"kLqww":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = typeof Blob !== "undefined" ? Blob : null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"fKKgg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return (0, _utilsJsDefault.default).matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === "[]" ? "" : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && (0, _utilsJsDefault.default).isArray(target) ? target.length : name;
        if (isLast) {
            if ((0, _utilsJsDefault.default).hasOwnProp(target, name)) target[name] = [
                target[name],
                value
            ];
            else target[name] = value;
            return !isNumericKey;
        }
        if (!target[name] || !(0, _utilsJsDefault.default).isObject(target[name])) target[name] = [];
        const result = buildPath(path, value, target[name], index);
        if (result && (0, _utilsJsDefault.default).isArray(target[name])) target[name] = arrayToObject(target[name]);
        return !isNumericKey;
    }
    if ((0, _utilsJsDefault.default).isFormData(formData) && (0, _utilsJsDefault.default).isFunction(formData.entries)) {
        const obj = {};
        (0, _utilsJsDefault.default).forEachEntry(formData, (name, value)=>{
            buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
exports.default = formDataToJSON;

},{"../utils.js":"1TKVi","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"37QsX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _parseHeadersJs = require("../helpers/parseHeaders.js");
var _parseHeadersJsDefault = parcelHelpers.interopDefault(_parseHeadersJs);
"use strict";
const $internals = Symbol("internals");
function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
    if (value === false || value == null) return value;
    return (0, _utilsJsDefault.default).isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str))tokens[match[1]] = match[2];
    return tokens;
}
const isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if ((0, _utilsJsDefault.default).isFunction(filter)) return filter.call(this, value, header);
    if (isHeaderNameFilter) value = header;
    if (!(0, _utilsJsDefault.default).isString(value)) return;
    if ((0, _utilsJsDefault.default).isString(filter)) return value.indexOf(filter) !== -1;
    if ((0, _utilsJsDefault.default).isRegExp(filter)) return filter.test(value);
}
function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function buildAccessors(obj, header) {
    const accessorName = (0, _utilsJsDefault.default).toCamelCase(" " + header);
    [
        "get",
        "set",
        "has"
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) throw new Error("header name must be a non-empty string");
            const key = (0, _utilsJsDefault.default).findKey(self, lHeader);
            if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) self[key || _header] = normalizeValue(_value);
        }
        const setHeaders = (headers, _rewrite)=>(0, _utilsJsDefault.default).forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if ((0, _utilsJsDefault.default).isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite);
        else if ((0, _utilsJsDefault.default).isString(header) && (header = header.trim()) && !isValidHeaderName(header)) setHeaders((0, _parseHeadersJsDefault.default)(header), valueOrRewrite);
        else header != null && setHeader(valueOrRewrite, header, rewrite);
        return this;
    }
    get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) return value;
                if (parser === true) return parseTokens(value);
                if ((0, _utilsJsDefault.default).isFunction(parser)) return parser.call(this, value, key);
                if ((0, _utilsJsDefault.default).isRegExp(parser)) return parser.exec(value);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
                const key = (0, _utilsJsDefault.default).findKey(self, _header);
                if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if ((0, _utilsJsDefault.default).isArray(header)) header.forEach(deleteHeader);
        else deleteHeader(header);
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self = this;
        const headers = {};
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            const key = (0, _utilsJsDefault.default).findKey(headers, header);
            if (key) {
                self[key] = normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) delete self[header];
            self[normalized] = normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && (0, _utilsJsDefault.default).isArray(value) ? value.join(", ") : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        (0, _utilsJsDefault.default).isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
AxiosHeaders.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
]);
(0, _utilsJsDefault.default).freezeMethods(AxiosHeaders.prototype);
(0, _utilsJsDefault.default).freezeMethods(AxiosHeaders);
exports.default = AxiosHeaders;

},{"../utils.js":"1TKVi","../helpers/parseHeaders.js":"5jJSn","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"5jJSn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = (0, _utilsJsDefault.default).toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
]);
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ exports.default = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
        i = line.indexOf(":");
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) return;
        if (key === "set-cookie") {
            if (parsed[key]) parsed[key].push(val);
            else parsed[key] = [
                val
            ];
        } else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    });
    return parsed;
};

},{"./../utils.js":"1TKVi","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"hWCMa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isCancel);
"use strict";
function isCancel(value) {
    return !!(value && value.__CANCEL__);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"bwLfv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */ function CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    (0, _axiosErrorJsDefault.default).call(this, message == null ? "canceled" : message, (0, _axiosErrorJsDefault.default).ERR_CANCELED, config, request);
    this.name = "CanceledError";
}
(0, _utilsJsDefault.default).inherits(CanceledError, (0, _axiosErrorJsDefault.default), {
    __CANCEL__: true
});
exports.default = CanceledError;

},{"../core/AxiosError.js":"3Gd7G","../utils.js":"1TKVi","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"4iAyZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _httpJs = require("./http.js");
var _httpJsDefault = parcelHelpers.interopDefault(_httpJs);
var _xhrJs = require("./xhr.js");
var _xhrJsDefault = parcelHelpers.interopDefault(_xhrJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
const knownAdapters = {
    http: (0, _httpJsDefault.default),
    xhr: (0, _xhrJsDefault.default)
};
(0, _utilsJsDefault.default).forEach(knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, "name", {
                value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, "adapterName", {
            value
        });
    }
});
exports.default = {
    getAdapter: (adapters)=>{
        adapters = (0, _utilsJsDefault.default).isArray(adapters) ? adapters : [
            adapters
        ];
        const { length } = adapters;
        let nameOrAdapter;
        let adapter;
        for(let i = 0; i < length; i++){
            nameOrAdapter = adapters[i];
            if (adapter = (0, _utilsJsDefault.default).isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) break;
        }
        if (!adapter) {
            if (adapter === false) throw new (0, _axiosErrorJsDefault.default)(`Adapter ${nameOrAdapter} is not supported by the environment`, "ERR_NOT_SUPPORT");
            throw new Error((0, _utilsJsDefault.default).hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`);
        }
        if (!(0, _utilsJsDefault.default).isFunction(adapter)) throw new TypeError("adapter is not a function");
        return adapter;
    },
    adapters: knownAdapters
};

},{"../utils.js":"1TKVi","./http.js":"4p1PI","./xhr.js":"k9aqD","../core/AxiosError.js":"3Gd7G","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"k9aqD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _settleJs = require("./../core/settle.js");
var _settleJsDefault = parcelHelpers.interopDefault(_settleJs);
var _cookiesJs = require("./../helpers/cookies.js");
var _cookiesJsDefault = parcelHelpers.interopDefault(_cookiesJs);
var _buildURLJs = require("./../helpers/buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
var _buildFullPathJs = require("../core/buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _isURLSameOriginJs = require("./../helpers/isURLSameOrigin.js");
var _isURLSameOriginJsDefault = parcelHelpers.interopDefault(_isURLSameOriginJs);
var _transitionalJs = require("../defaults/transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _parseProtocolJs = require("../helpers/parseProtocol.js");
var _parseProtocolJsDefault = parcelHelpers.interopDefault(_parseProtocolJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _speedometerJs = require("../helpers/speedometer.js");
var _speedometerJsDefault = parcelHelpers.interopDefault(_speedometerJs);
"use strict";
function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = (0, _speedometerJsDefault.default)(50, 250);
    return (e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded,
            total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e
        };
        data[isDownloadStream ? "download" : "upload"] = true;
        listener(data);
    };
}
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
exports.default = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        let requestData = config.data;
        const requestHeaders = (0, _axiosHeadersJsDefault.default).from(config.headers).normalize();
        const responseType = config.responseType;
        let onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener("abort", onCanceled);
        }
        if ((0, _utilsJsDefault.default).isFormData(requestData)) {
            if ((0, _indexJsDefault.default).isStandardBrowserEnv || (0, _indexJsDefault.default).isStandardBrowserWebWorkerEnv) requestHeaders.setContentType(false); // Let the browser set it
            else requestHeaders.setContentType("multipart/form-data;", false); // mobile/desktop app frameworks
        }
        let request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            const username = config.auth.username || "";
            const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
        }
        const fullPath = (0, _buildFullPathJsDefault.default)(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), (0, _buildURLJsDefault.default)(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            const responseHeaders = (0, _axiosHeadersJsDefault.default).from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            };
            (0, _settleJsDefault.default)(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(new (0, _axiosErrorJsDefault.default)("Request aborted", (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new (0, _axiosErrorJsDefault.default)("Network Error", (0, _axiosErrorJsDefault.default).ERR_NETWORK, config, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional = config.transitional || (0, _transitionalJsDefault.default);
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(new (0, _axiosErrorJsDefault.default)(timeoutErrorMessage, transitional.clarifyTimeoutError ? (0, _axiosErrorJsDefault.default).ETIMEDOUT : (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if ((0, _indexJsDefault.default).isStandardBrowserEnv) {
            // Add xsrf header
            const xsrfValue = (config.withCredentials || (0, _isURLSameOriginJsDefault.default)(fullPath)) && config.xsrfCookieName && (0, _cookiesJsDefault.default).read(config.xsrfCookieName);
            if (xsrfValue) requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ("setRequestHeader" in request) (0, _utilsJsDefault.default).forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!(0, _utilsJsDefault.default).isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== "json") request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === "function") request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) return;
                reject(!cancel || cancel.type ? new (0, _canceledErrorJsDefault.default)(null, config, request) : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
        const protocol = (0, _parseProtocolJsDefault.default)(fullPath);
        if (protocol && (0, _indexJsDefault.default).protocols.indexOf(protocol) === -1) {
            reject(new (0, _axiosErrorJsDefault.default)("Unsupported protocol " + protocol + ":", (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};

},{"./../utils.js":"1TKVi","./../core/settle.js":"gXk0v","./../helpers/cookies.js":"agDLJ","./../helpers/buildURL.js":"4ts6s","../core/buildFullPath.js":"4hbHP","./../helpers/isURLSameOrigin.js":"8TmeF","../defaults/transitional.js":"4S6Rm","../core/AxiosError.js":"3Gd7G","../cancel/CanceledError.js":"bwLfv","../helpers/parseProtocol.js":"8kK6a","../platform/index.js":"cQoGF","../core/AxiosHeaders.js":"37QsX","../helpers/speedometer.js":"5oH8c","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"gXk0v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>settle);
var _axiosErrorJs = require("./AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
"use strict";
function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(new (0, _axiosErrorJsDefault.default)("Request failed with status code " + response.status, [
        (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST,
        (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE
    ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
}

},{"./AxiosError.js":"3Gd7G","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"agDLJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
exports.default = (0, _indexJsDefault.default).isStandardBrowserEnv ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            const cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if ((0, _utilsJsDefault.default).isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
            if ((0, _utilsJsDefault.default).isString(path)) cookie.push("path=" + path);
            if ((0, _utilsJsDefault.default).isString(domain)) cookie.push("domain=" + domain);
            if (secure === true) cookie.push("secure");
            document.cookie = cookie.join("; ");
        },
        read: function read(name) {
            const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, "", Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();

},{"./../utils.js":"1TKVi","../platform/index.js":"cQoGF","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"4hbHP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildFullPath);
var _isAbsoluteURLJs = require("../helpers/isAbsoluteURL.js");
var _isAbsoluteURLJsDefault = parcelHelpers.interopDefault(_isAbsoluteURLJs);
var _combineURLsJs = require("../helpers/combineURLs.js");
var _combineURLsJsDefault = parcelHelpers.interopDefault(_combineURLsJs);
"use strict";
function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !(0, _isAbsoluteURLJsDefault.default)(requestedURL)) return (0, _combineURLsJsDefault.default)(baseURL, requestedURL);
    return requestedURL;
}

},{"../helpers/isAbsoluteURL.js":"jBZgY","../helpers/combineURLs.js":"juRwE","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"jBZgY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isAbsoluteURL);
"use strict";
function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"juRwE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>combineURLs);
"use strict";
function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"8TmeF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
exports.default = (0, _indexJsDefault.default).isStandardBrowserEnv ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        let href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        const parsed = (0, _utilsJsDefault.default).isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

},{"./../utils.js":"1TKVi","../platform/index.js":"cQoGF","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"8kK6a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>parseProtocol);
"use strict";
function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"5oH8c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) firstSampleTS = now;
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) tail = (tail + 1) % samplesCount;
        if (now - firstSampleTS < min) return;
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
exports.default = speedometer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"3sqbZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergeConfig);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
const headersToObject = (thing)=>thing instanceof (0, _axiosHeadersJsDefault.default) ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
        if ((0, _utilsJsDefault.default).isPlainObject(target) && (0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge.call({
            caseless
        }, target, source);
        else if ((0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge({}, source);
        else if ((0, _utilsJsDefault.default).isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, caseless) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(a, b, caseless);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a, caseless);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) return getMergedValue(a, b);
        else if (prop in config1) return getMergedValue(undefined, a);
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b)=>mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    (0, _utilsJsDefault.default).forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        (0, _utilsJsDefault.default).isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}

},{"../utils.js":"1TKVi","./AxiosHeaders.js":"37QsX","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"6oX62":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dataJs = require("../env/data.js");
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
"use strict";
const validators = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach((type, i)=>{
    validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
const deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return "[Axios v" + (0, _dataJs.VERSION) + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) throw new (0, _axiosErrorJsDefault.default)(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), (0, _axiosErrorJsDefault.default).ERR_DEPRECATED);
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") throw new (0, _axiosErrorJsDefault.default)("options must be an object", (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new (0, _axiosErrorJsDefault.default)("option " + opt + " must be " + result, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (allowUnknown !== true) throw new (0, _axiosErrorJsDefault.default)("Unknown option " + opt, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION);
    }
}
exports.default = {
    assertOptions,
    validators
};

},{"../env/data.js":"aztz4","../core/AxiosError.js":"3Gd7G","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"aztz4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
const VERSION = "1.4.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"7Yhli":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canceledErrorJs = require("./CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
"use strict";
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class CancelToken {
    constructor(executor){
        if (typeof executor !== "function") throw new TypeError("executor must be a function.");
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0)token._listeners[i](cancel);
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) // Cancellation has already been requested
            return;
            token.reason = new (0, _canceledErrorJsDefault.default)(message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) this._listeners.push(listener);
        else this._listeners = [
            listener
        ];
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) return;
        const index = this._listeners.indexOf(listener);
        if (index !== -1) this._listeners.splice(index, 1);
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token,
            cancel
        };
    }
}
exports.default = CancelToken;

},{"./CanceledError.js":"bwLfv","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"c9KBK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>spread);
"use strict";
function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"6OdOU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isAxiosError);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
function isAxiosError(payload) {
    return (0, _utilsJsDefault.default).isObject(payload) && payload.isAxiosError === true;
}

},{"./../utils.js":"1TKVi","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"lBtx4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value])=>{
    HttpStatusCode[value] = key;
});
exports.default = HttpStatusCode;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"2nXpP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hideAlert", ()=>hideAlert);
parcelHelpers.export(exports, "showAlert", ()=>showAlert);
function hideAlert() {
    const el = document.querySelector(".alert");
    if (el) el.parentElement.removeChild(el);
}
function showAlert(type, msg) {
    hideAlert();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
    window.setTimeout(hideAlert, 5000);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"fRaFS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateSettings", ()=>updateSettings);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _alertsJs = require("./alerts.js");
async function updateSettings(data, type) {
    try {
        const res = await (0, _axiosDefault.default)({
            method: "PATCH",
            url: type === "password" ? "http://localhost:3000/api/v1/users/updateMyPassword" : "http://localhost:3000/api/v1/users/updateMyProfile",
            data
        });
        if (res.data.status === "success") {
            (0, _alertsJs.showAlert)("success", "Settings saved.");
            location.assign("/");
        }
    } catch (error) {
        (0, _alertsJs.showAlert)("error", error.response.data.message);
    }
}

},{"axios":"409tG","./alerts.js":"2nXpP","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"hOTrO":[function(require,module,exports) {
// import "leaflet/dist/leaflet.css";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _leaflet = require("leaflet");
var _leafletDefault = parcelHelpers.interopDefault(_leaflet);
function display(locations) {
    const map = (0, _leafletDefault.default).map("map");
    (0, _leafletDefault.default).tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    const greenIcon = (0, _leafletDefault.default).icon({
        iconUrl: "/img/pin.png",
        iconSize: [
            32,
            40
        ],
        iconAnchor: [
            16,
            40
        ],
        popupAnchor: [
            0,
            -35
        ]
    });
    const markers = locations.map((loc)=>(0, _leafletDefault.default).marker([
            loc.coordinates[1],
            loc.coordinates[0]
        ], {
            icon: greenIcon
        }).bindPopup((0, _leafletDefault.default).popup({
            autoClose: false,
            closeOnClick: false,
            className: "mapboxgl-popup-content"
        })).setPopupContent(`Day ${loc.day}: ${loc.description}`));
    const features = (0, _leafletDefault.default).featureGroup(markers);
    map.fitBounds(features.getBounds(), {
        padding: [
            150,
            150
        ]
    }).scrollWheelZoom.disable();
    features.addTo(map);
    for(let i = markers.length - 1; i >= 0; i--)markers[i].openPopup();
}
exports.default = display;

},{"leaflet":"4tU84","@parcel/transformer-js/src/esmodule-helpers.js":"i5ZQn"}],"4tU84":[function(require,module,exports) {
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */ (function(global, factory) {
    factory(exports);
})(this, function(exports1) {
    "use strict";
    var version = "1.9.4";
    /*
   * @namespace Util
   *
   * Various utility functions, used by Leaflet internally.
   */ // @function extend(dest: Object, src?: Object): Object
    // Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
    function extend(dest) {
        var i, j, len, src;
        for(j = 1, len = arguments.length; j < len; j++){
            src = arguments[j];
            for(i in src)dest[i] = src[i];
        }
        return dest;
    }
    // @function create(proto: Object, properties?: Object): Object
    // Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
    var create$2 = Object.create || function() {
        function F() {}
        return function(proto) {
            F.prototype = proto;
            return new F();
        };
    }();
    // @function bind(fn: Function, …): Function
    // Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
    // Has a `L.bind()` shortcut.
    function bind(fn, obj) {
        var slice = Array.prototype.slice;
        if (fn.bind) return fn.bind.apply(fn, slice.call(arguments, 1));
        var args = slice.call(arguments, 2);
        return function() {
            return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
        };
    }
    // @property lastId: Number
    // Last unique ID used by [`stamp()`](#util-stamp)
    var lastId = 0;
    // @function stamp(obj: Object): Number
    // Returns the unique ID of an object, assigning it one if it doesn't have it.
    function stamp(obj) {
        if (!("_leaflet_id" in obj)) obj["_leaflet_id"] = ++lastId;
        return obj._leaflet_id;
    }
    // @function throttle(fn: Function, time: Number, context: Object): Function
    // Returns a function which executes function `fn` with the given scope `context`
    // (so that the `this` keyword refers to `context` inside `fn`'s code). The function
    // `fn` will be called no more than one time per given amount of `time`. The arguments
    // received by the bound function will be any arguments passed when binding the
    // function, followed by any arguments passed when invoking the bound function.
    // Has an `L.throttle` shortcut.
    function throttle(fn, time, context) {
        var lock, args, wrapperFn, later;
        later = function() {
            // reset lock and call if queued
            lock = false;
            if (args) {
                wrapperFn.apply(context, args);
                args = false;
            }
        };
        wrapperFn = function() {
            if (lock) // called too soon, queue to call later
            args = arguments;
            else {
                // call and lock until later
                fn.apply(context, arguments);
                setTimeout(later, time);
                lock = true;
            }
        };
        return wrapperFn;
    }
    // @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
    // Returns the number `num` modulo `range` in such a way so it lies within
    // `range[0]` and `range[1]`. The returned value will be always smaller than
    // `range[1]` unless `includeMax` is set to `true`.
    function wrapNum(x, range, includeMax) {
        var max = range[1], min = range[0], d = max - min;
        return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
    }
    // @function falseFn(): Function
    // Returns a function which always returns `false`.
    function falseFn() {
        return false;
    }
    // @function formatNum(num: Number, precision?: Number|false): Number
    // Returns the number `num` rounded with specified `precision`.
    // The default `precision` value is 6 decimal places.
    // `false` can be passed to skip any processing (can be useful to avoid round-off errors).
    function formatNum(num, precision) {
        if (precision === false) return num;
        var pow = Math.pow(10, precision === undefined ? 6 : precision);
        return Math.round(num * pow) / pow;
    }
    // @function trim(str: String): String
    // Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
    function trim(str) {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    }
    // @function splitWords(str: String): String[]
    // Trims and splits the string on whitespace and returns the array of parts.
    function splitWords(str) {
        return trim(str).split(/\s+/);
    }
    // @function setOptions(obj: Object, options: Object): Object
    // Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
    function setOptions(obj, options) {
        if (!Object.prototype.hasOwnProperty.call(obj, "options")) obj.options = obj.options ? create$2(obj.options) : {};
        for(var i in options)obj.options[i] = options[i];
        return obj.options;
    }
    // @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
    // Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
    // translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
    // be appended at the end. If `uppercase` is `true`, the parameter names will
    // be uppercased (e.g. `'?A=foo&B=bar'`)
    function getParamString(obj, existingUrl, uppercase) {
        var params = [];
        for(var i in obj)params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + "=" + encodeURIComponent(obj[i]));
        return (!existingUrl || existingUrl.indexOf("?") === -1 ? "?" : "&") + params.join("&");
    }
    var templateRe = /\{ *([\w_ -]+) *\}/g;
    // @function template(str: String, data: Object): String
    // Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
    // and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
    // `('Hello foo, bar')`. You can also specify functions instead of strings for
    // data values — they will be evaluated passing `data` as an argument.
    function template(str, data) {
        return str.replace(templateRe, function(str, key) {
            var value = data[key];
            if (value === undefined) throw new Error("No value provided for variable " + str);
            else if (typeof value === "function") value = value(data);
            return value;
        });
    }
    // @function isArray(obj): Boolean
    // Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
    var isArray = Array.isArray || function(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    };
    // @function indexOf(array: Array, el: Object): Number
    // Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
    function indexOf(array, el) {
        for(var i = 0; i < array.length; i++){
            if (array[i] === el) return i;
        }
        return -1;
    }
    // @property emptyImageUrl: String
    // Data URI string containing a base64-encoded empty GIF image.
    // Used as a hack to free memory from unused images on WebKit-powered
    // mobile devices (by setting image `src` to this string).
    var emptyImageUrl = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    // inspired by https://paulirish.com/2011/requestanimationframe-for-smart-animating/
    function getPrefixed(name) {
        return window["webkit" + name] || window["moz" + name] || window["ms" + name];
    }
    var lastTime = 0;
    // fallback for IE 7-8
    function timeoutDefer(fn) {
        var time = +new Date(), timeToCall = Math.max(0, 16 - (time - lastTime));
        lastTime = time + timeToCall;
        return window.setTimeout(fn, timeToCall);
    }
    var requestFn = window.requestAnimationFrame || getPrefixed("RequestAnimationFrame") || timeoutDefer;
    var cancelFn = window.cancelAnimationFrame || getPrefixed("CancelAnimationFrame") || getPrefixed("CancelRequestAnimationFrame") || function(id) {
        window.clearTimeout(id);
    };
    // @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
    // Schedules `fn` to be executed when the browser repaints. `fn` is bound to
    // `context` if given. When `immediate` is set, `fn` is called immediately if
    // the browser doesn't have native support for
    // [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
    // otherwise it's delayed. Returns a request ID that can be used to cancel the request.
    function requestAnimFrame(fn, context, immediate) {
        if (immediate && requestFn === timeoutDefer) fn.call(context);
        else return requestFn.call(window, bind(fn, context));
    }
    // @function cancelAnimFrame(id: Number): undefined
    // Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
    function cancelAnimFrame(id) {
        if (id) cancelFn.call(window, id);
    }
    var Util = {
        __proto__: null,
        extend: extend,
        create: create$2,
        bind: bind,
        get lastId () {
            return lastId;
        },
        stamp: stamp,
        throttle: throttle,
        wrapNum: wrapNum,
        falseFn: falseFn,
        formatNum: formatNum,
        trim: trim,
        splitWords: splitWords,
        setOptions: setOptions,
        getParamString: getParamString,
        template: template,
        isArray: isArray,
        indexOf: indexOf,
        emptyImageUrl: emptyImageUrl,
        requestFn: requestFn,
        cancelFn: cancelFn,
        requestAnimFrame: requestAnimFrame,
        cancelAnimFrame: cancelAnimFrame
    };
    // @class Class
    // @aka L.Class
    // @section
    // @uninheritable
    // Thanks to John Resig and Dean Edwards for inspiration!
    function Class() {}
    Class.extend = function(props) {
        // @function extend(props: Object): Function
        // [Extends the current class](#class-inheritance) given the properties to be included.
        // Returns a Javascript function that is a class constructor (to be called with `new`).
        var NewClass = function() {
            setOptions(this);
            // call the constructor
            if (this.initialize) this.initialize.apply(this, arguments);
            // call all constructor hooks
            this.callInitHooks();
        };
        var parentProto = NewClass.__super__ = this.prototype;
        var proto = create$2(parentProto);
        proto.constructor = NewClass;
        NewClass.prototype = proto;
        // inherit parent's statics
        for(var i in this)if (Object.prototype.hasOwnProperty.call(this, i) && i !== "prototype" && i !== "__super__") NewClass[i] = this[i];
        // mix static properties into the class
        if (props.statics) extend(NewClass, props.statics);
        // mix includes into the prototype
        if (props.includes) {
            checkDeprecatedMixinEvents(props.includes);
            extend.apply(null, [
                proto
            ].concat(props.includes));
        }
        // mix given properties into the prototype
        extend(proto, props);
        delete proto.statics;
        delete proto.includes;
        // merge options
        if (proto.options) {
            proto.options = parentProto.options ? create$2(parentProto.options) : {};
            extend(proto.options, props.options);
        }
        proto._initHooks = [];
        // add method for calling all hooks
        proto.callInitHooks = function() {
            if (this._initHooksCalled) return;
            if (parentProto.callInitHooks) parentProto.callInitHooks.call(this);
            this._initHooksCalled = true;
            for(var i = 0, len = proto._initHooks.length; i < len; i++)proto._initHooks[i].call(this);
        };
        return NewClass;
    };
    // @function include(properties: Object): this
    // [Includes a mixin](#class-includes) into the current class.
    Class.include = function(props) {
        var parentOptions = this.prototype.options;
        extend(this.prototype, props);
        if (props.options) {
            this.prototype.options = parentOptions;
            this.mergeOptions(props.options);
        }
        return this;
    };
    // @function mergeOptions(options: Object): this
    // [Merges `options`](#class-options) into the defaults of the class.
    Class.mergeOptions = function(options) {
        extend(this.prototype.options, options);
        return this;
    };
    // @function addInitHook(fn: Function): this
    // Adds a [constructor hook](#class-constructor-hooks) to the class.
    Class.addInitHook = function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        var init = typeof fn === "function" ? fn : function() {
            this[fn].apply(this, args);
        };
        this.prototype._initHooks = this.prototype._initHooks || [];
        this.prototype._initHooks.push(init);
        return this;
    };
    function checkDeprecatedMixinEvents(includes) {
        /* global L: true */ if (typeof L === "undefined" || !L || !L.Mixin) return;
        includes = isArray(includes) ? includes : [
            includes
        ];
        for(var i = 0; i < includes.length; i++)if (includes[i] === L.Mixin.Events) console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
    }
    /*
   * @class Evented
   * @aka L.Evented
   * @inherits Class
   *
   * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
   *
   * @example
   *
   * ```js
   * map.on('click', function(e) {
   * 	alert(e.latlng);
   * } );
   * ```
   *
   * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
   *
   * ```js
   * function onClick(e) { ... }
   *
   * map.on('click', onClick);
   * map.off('click', onClick);
   * ```
   */ var Events = {
        /* @method on(type: String, fn: Function, context?: Object): this
  	 * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
  	 *
  	 * @alternative
  	 * @method on(eventMap: Object): this
  	 * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
  	 */ on: function(types, fn, context) {
            // types can be a map of types/handlers
            if (typeof types === "object") for(var type in types)// we don't process space-separated events here for performance;
            // it's a hot path since Layer uses the on(obj) syntax
            this._on(type, types[type], fn);
            else {
                // types can be a string of space-separated words
                types = splitWords(types);
                for(var i = 0, len = types.length; i < len; i++)this._on(types[i], fn, context);
            }
            return this;
        },
        /* @method off(type: String, fn?: Function, context?: Object): this
  	 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
  	 *
  	 * @alternative
  	 * @method off(eventMap: Object): this
  	 * Removes a set of type/listener pairs.
  	 *
  	 * @alternative
  	 * @method off: this
  	 * Removes all listeners to all events on the object. This includes implicitly attached events.
  	 */ off: function(types, fn, context) {
            if (!arguments.length) // clear all listeners if called without arguments
            delete this._events;
            else if (typeof types === "object") for(var type in types)this._off(type, types[type], fn);
            else {
                types = splitWords(types);
                var removeAll = arguments.length === 1;
                for(var i = 0, len = types.length; i < len; i++)if (removeAll) this._off(types[i]);
                else this._off(types[i], fn, context);
            }
            return this;
        },
        // attach listener (without syntactic sugar now)
        _on: function(type, fn, context, _once) {
            if (typeof fn !== "function") {
                console.warn("wrong listener type: " + typeof fn);
                return;
            }
            // check if fn already there
            if (this._listens(type, fn, context) !== false) return;
            if (context === this) // Less memory footprint.
            context = undefined;
            var newListener = {
                fn: fn,
                ctx: context
            };
            if (_once) newListener.once = true;
            this._events = this._events || {};
            this._events[type] = this._events[type] || [];
            this._events[type].push(newListener);
        },
        _off: function(type, fn, context) {
            var listeners, i, len;
            if (!this._events) return;
            listeners = this._events[type];
            if (!listeners) return;
            if (arguments.length === 1) {
                if (this._firingCount) // Set all removed listeners to noop
                // so they are not called if remove happens in fire
                for(i = 0, len = listeners.length; i < len; i++)listeners[i].fn = falseFn;
                // clear all listeners for a type if function isn't specified
                delete this._events[type];
                return;
            }
            if (typeof fn !== "function") {
                console.warn("wrong listener type: " + typeof fn);
                return;
            }
            // find fn and remove it
            var index = this._listens(type, fn, context);
            if (index !== false) {
                var listener = listeners[index];
                if (this._firingCount) {
                    // set the removed listener to noop so that's not called if remove happens in fire
                    listener.fn = falseFn;
                    /* copy array in case events are being fired */ this._events[type] = listeners = listeners.slice();
                }
                listeners.splice(index, 1);
            }
        },
        // @method fire(type: String, data?: Object, propagate?: Boolean): this
        // Fires an event of the specified type. You can optionally provide a data
        // object — the first argument of the listener function will contain its
        // properties. The event can optionally be propagated to event parents.
        fire: function(type, data, propagate) {
            if (!this.listens(type, propagate)) return this;
            var event = extend({}, data, {
                type: type,
                target: this,
                sourceTarget: data && data.sourceTarget || this
            });
            if (this._events) {
                var listeners = this._events[type];
                if (listeners) {
                    this._firingCount = this._firingCount + 1 || 1;
                    for(var i = 0, len = listeners.length; i < len; i++){
                        var l = listeners[i];
                        // off overwrites l.fn, so we need to copy fn to a var
                        var fn = l.fn;
                        if (l.once) this.off(type, fn, l.ctx);
                        fn.call(l.ctx || this, event);
                    }
                    this._firingCount--;
                }
            }
            if (propagate) // propagate the event to parents (set with addEventParent)
            this._propagateEvent(event);
            return this;
        },
        // @method listens(type: String, propagate?: Boolean): Boolean
        // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
        // Returns `true` if a particular event type has any listeners attached to it.
        // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
        listens: function(type, fn, context, propagate) {
            if (typeof type !== "string") console.warn('"string" type argument expected');
            // we don't overwrite the input `fn` value, because we need to use it for propagation
            var _fn = fn;
            if (typeof fn !== "function") {
                propagate = !!fn;
                _fn = undefined;
                context = undefined;
            }
            var listeners = this._events && this._events[type];
            if (listeners && listeners.length) {
                if (this._listens(type, _fn, context) !== false) return true;
            }
            if (propagate) // also check parents for listeners if event propagates
            for(var id in this._eventParents){
                if (this._eventParents[id].listens(type, fn, context, propagate)) return true;
            }
            return false;
        },
        // returns the index (number) or false
        _listens: function(type, fn, context) {
            if (!this._events) return false;
            var listeners = this._events[type] || [];
            if (!fn) return !!listeners.length;
            if (context === this) // Less memory footprint.
            context = undefined;
            for(var i = 0, len = listeners.length; i < len; i++){
                if (listeners[i].fn === fn && listeners[i].ctx === context) return i;
            }
            return false;
        },
        // @method once(…): this
        // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
        once: function(types, fn, context) {
            // types can be a map of types/handlers
            if (typeof types === "object") for(var type in types)// we don't process space-separated events here for performance;
            // it's a hot path since Layer uses the on(obj) syntax
            this._on(type, types[type], fn, true);
            else {
                // types can be a string of space-separated words
                types = splitWords(types);
                for(var i = 0, len = types.length; i < len; i++)this._on(types[i], fn, context, true);
            }
            return this;
        },
        // @method addEventParent(obj: Evented): this
        // Adds an event parent - an `Evented` that will receive propagated events
        addEventParent: function(obj) {
            this._eventParents = this._eventParents || {};
            this._eventParents[stamp(obj)] = obj;
            return this;
        },
        // @method removeEventParent(obj: Evented): this
        // Removes an event parent, so it will stop receiving propagated events
        removeEventParent: function(obj) {
            if (this._eventParents) delete this._eventParents[stamp(obj)];
            return this;
        },
        _propagateEvent: function(e) {
            for(var id in this._eventParents)this._eventParents[id].fire(e.type, extend({
                layer: e.target,
                propagatedFrom: e.target
            }, e), true);
        }
    };
    // aliases; we should ditch those eventually
    // @method addEventListener(…): this
    // Alias to [`on(…)`](#evented-on)
    Events.addEventListener = Events.on;
    // @method removeEventListener(…): this
    // Alias to [`off(…)`](#evented-off)
    // @method clearAllEventListeners(…): this
    // Alias to [`off()`](#evented-off)
    Events.removeEventListener = Events.clearAllEventListeners = Events.off;
    // @method addOneTimeEventListener(…): this
    // Alias to [`once(…)`](#evented-once)
    Events.addOneTimeEventListener = Events.once;
    // @method fireEvent(…): this
    // Alias to [`fire(…)`](#evented-fire)
    Events.fireEvent = Events.fire;
    // @method hasEventListeners(…): Boolean
    // Alias to [`listens(…)`](#evented-listens)
    Events.hasEventListeners = Events.listens;
    var Evented = Class.extend(Events);
    /*
   * @class Point
   * @aka L.Point
   *
   * Represents a point with `x` and `y` coordinates in pixels.
   *
   * @example
   *
   * ```js
   * var point = L.point(200, 300);
   * ```
   *
   * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
   *
   * ```js
   * map.panBy([200, 300]);
   * map.panBy(L.point(200, 300));
   * ```
   *
   * Note that `Point` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */ function Point(x, y, round) {
        // @property x: Number; The `x` coordinate of the point
        this.x = round ? Math.round(x) : x;
        // @property y: Number; The `y` coordinate of the point
        this.y = round ? Math.round(y) : y;
    }
    var trunc = Math.trunc || function(v) {
        return v > 0 ? Math.floor(v) : Math.ceil(v);
    };
    Point.prototype = {
        // @method clone(): Point
        // Returns a copy of the current point.
        clone: function() {
            return new Point(this.x, this.y);
        },
        // @method add(otherPoint: Point): Point
        // Returns the result of addition of the current and the given points.
        add: function(point) {
            // non-destructive, returns a new point
            return this.clone()._add(toPoint(point));
        },
        _add: function(point) {
            // destructive, used directly for performance in situations where it's safe to modify existing point
            this.x += point.x;
            this.y += point.y;
            return this;
        },
        // @method subtract(otherPoint: Point): Point
        // Returns the result of subtraction of the given point from the current.
        subtract: function(point) {
            return this.clone()._subtract(toPoint(point));
        },
        _subtract: function(point) {
            this.x -= point.x;
            this.y -= point.y;
            return this;
        },
        // @method divideBy(num: Number): Point
        // Returns the result of division of the current point by the given number.
        divideBy: function(num) {
            return this.clone()._divideBy(num);
        },
        _divideBy: function(num) {
            this.x /= num;
            this.y /= num;
            return this;
        },
        // @method multiplyBy(num: Number): Point
        // Returns the result of multiplication of the current point by the given number.
        multiplyBy: function(num) {
            return this.clone()._multiplyBy(num);
        },
        _multiplyBy: function(num) {
            this.x *= num;
            this.y *= num;
            return this;
        },
        // @method scaleBy(scale: Point): Point
        // Multiply each coordinate of the current point by each coordinate of
        // `scale`. In linear algebra terms, multiply the point by the
        // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
        // defined by `scale`.
        scaleBy: function(point) {
            return new Point(this.x * point.x, this.y * point.y);
        },
        // @method unscaleBy(scale: Point): Point
        // Inverse of `scaleBy`. Divide each coordinate of the current point by
        // each coordinate of `scale`.
        unscaleBy: function(point) {
            return new Point(this.x / point.x, this.y / point.y);
        },
        // @method round(): Point
        // Returns a copy of the current point with rounded coordinates.
        round: function() {
            return this.clone()._round();
        },
        _round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this;
        },
        // @method floor(): Point
        // Returns a copy of the current point with floored coordinates (rounded down).
        floor: function() {
            return this.clone()._floor();
        },
        _floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this;
        },
        // @method ceil(): Point
        // Returns a copy of the current point with ceiled coordinates (rounded up).
        ceil: function() {
            return this.clone()._ceil();
        },
        _ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this;
        },
        // @method trunc(): Point
        // Returns a copy of the current point with truncated coordinates (rounded towards zero).
        trunc: function() {
            return this.clone()._trunc();
        },
        _trunc: function() {
            this.x = trunc(this.x);
            this.y = trunc(this.y);
            return this;
        },
        // @method distanceTo(otherPoint: Point): Number
        // Returns the cartesian distance between the current and the given points.
        distanceTo: function(point) {
            point = toPoint(point);
            var x = point.x - this.x, y = point.y - this.y;
            return Math.sqrt(x * x + y * y);
        },
        // @method equals(otherPoint: Point): Boolean
        // Returns `true` if the given point has the same coordinates.
        equals: function(point) {
            point = toPoint(point);
            return point.x === this.x && point.y === this.y;
        },
        // @method contains(otherPoint: Point): Boolean
        // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
        contains: function(point) {
            point = toPoint(point);
            return Math.abs(point.x) <= Math.abs(this.x) && Math.abs(point.y) <= Math.abs(this.y);
        },
        // @method toString(): String
        // Returns a string representation of the point for debugging purposes.
        toString: function() {
            return "Point(" + formatNum(this.x) + ", " + formatNum(this.y) + ")";
        }
    };
    // @factory L.point(x: Number, y: Number, round?: Boolean)
    // Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.
    // @alternative
    // @factory L.point(coords: Number[])
    // Expects an array of the form `[x, y]` instead.
    // @alternative
    // @factory L.point(coords: Object)
    // Expects a plain object of the form `{x: Number, y: Number}` instead.
    function toPoint(x, y, round) {
        if (x instanceof Point) return x;
        if (isArray(x)) return new Point(x[0], x[1]);
        if (x === undefined || x === null) return x;
        if (typeof x === "object" && "x" in x && "y" in x) return new Point(x.x, x.y);
        return new Point(x, y, round);
    }
    /*
   * @class Bounds
   * @aka L.Bounds
   *
   * Represents a rectangular area in pixel coordinates.
   *
   * @example
   *
   * ```js
   * var p1 = L.point(10, 10),
   * p2 = L.point(40, 60),
   * bounds = L.bounds(p1, p2);
   * ```
   *
   * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * otherBounds.intersects([[10, 10], [40, 60]]);
   * ```
   *
   * Note that `Bounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */ function Bounds(a, b) {
        if (!a) return;
        var points = b ? [
            a,
            b
        ] : a;
        for(var i = 0, len = points.length; i < len; i++)this.extend(points[i]);
    }
    Bounds.prototype = {
        // @method extend(point: Point): this
        // Extends the bounds to contain the given point.
        // @alternative
        // @method extend(otherBounds: Bounds): this
        // Extend the bounds to contain the given bounds
        extend: function(obj) {
            var min2, max2;
            if (!obj) return this;
            if (obj instanceof Point || typeof obj[0] === "number" || "x" in obj) min2 = max2 = toPoint(obj);
            else {
                obj = toBounds(obj);
                min2 = obj.min;
                max2 = obj.max;
                if (!min2 || !max2) return this;
            }
            // @property min: Point
            // The top left corner of the rectangle.
            // @property max: Point
            // The bottom right corner of the rectangle.
            if (!this.min && !this.max) {
                this.min = min2.clone();
                this.max = max2.clone();
            } else {
                this.min.x = Math.min(min2.x, this.min.x);
                this.max.x = Math.max(max2.x, this.max.x);
                this.min.y = Math.min(min2.y, this.min.y);
                this.max.y = Math.max(max2.y, this.max.y);
            }
            return this;
        },
        // @method getCenter(round?: Boolean): Point
        // Returns the center point of the bounds.
        getCenter: function(round) {
            return toPoint((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, round);
        },
        // @method getBottomLeft(): Point
        // Returns the bottom-left point of the bounds.
        getBottomLeft: function() {
            return toPoint(this.min.x, this.max.y);
        },
        // @method getTopRight(): Point
        // Returns the top-right point of the bounds.
        getTopRight: function() {
            return toPoint(this.max.x, this.min.y);
        },
        // @method getTopLeft(): Point
        // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
        getTopLeft: function() {
            return this.min; // left, top
        },
        // @method getBottomRight(): Point
        // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
        getBottomRight: function() {
            return this.max; // right, bottom
        },
        // @method getSize(): Point
        // Returns the size of the given bounds
        getSize: function() {
            return this.max.subtract(this.min);
        },
        // @method contains(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains(point: Point): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(obj) {
            var min, max;
            if (typeof obj[0] === "number" || obj instanceof Point) obj = toPoint(obj);
            else obj = toBounds(obj);
            if (obj instanceof Bounds) {
                min = obj.min;
                max = obj.max;
            } else min = max = obj;
            return min.x >= this.min.x && max.x <= this.max.x && min.y >= this.min.y && max.y <= this.max.y;
        },
        // @method intersects(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds
        // intersect if they have at least one point in common.
        intersects: function(bounds) {
            bounds = toBounds(bounds);
            var min = this.min, max = this.max, min2 = bounds.min, max2 = bounds.max, xIntersects = max2.x >= min.x && min2.x <= max.x, yIntersects = max2.y >= min.y && min2.y <= max.y;
            return xIntersects && yIntersects;
        },
        // @method overlaps(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds
        // overlap if their intersection is an area.
        overlaps: function(bounds) {
            bounds = toBounds(bounds);
            var min = this.min, max = this.max, min2 = bounds.min, max2 = bounds.max, xOverlaps = max2.x > min.x && min2.x < max.x, yOverlaps = max2.y > min.y && min2.y < max.y;
            return xOverlaps && yOverlaps;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
            return !!(this.min && this.max);
        },
        // @method pad(bufferRatio: Number): Bounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(bufferRatio) {
            var min = this.min, max = this.max, heightBuffer = Math.abs(min.x - max.x) * bufferRatio, widthBuffer = Math.abs(min.y - max.y) * bufferRatio;
            return toBounds(toPoint(min.x - heightBuffer, min.y - widthBuffer), toPoint(max.x + heightBuffer, max.y + widthBuffer));
        },
        // @method equals(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle is equivalent to the given bounds.
        equals: function(bounds) {
            if (!bounds) return false;
            bounds = toBounds(bounds);
            return this.min.equals(bounds.getTopLeft()) && this.max.equals(bounds.getBottomRight());
        }
    };
    // @factory L.bounds(corner1: Point, corner2: Point)
    // Creates a Bounds object from two corners coordinate pairs.
    // @alternative
    // @factory L.bounds(points: Point[])
    // Creates a Bounds object from the given array of points.
    function toBounds(a, b) {
        if (!a || a instanceof Bounds) return a;
        return new Bounds(a, b);
    }
    /*
   * @class LatLngBounds
   * @aka L.LatLngBounds
   *
   * Represents a rectangular geographical area on a map.
   *
   * @example
   *
   * ```js
   * var corner1 = L.latLng(40.712, -74.227),
   * corner2 = L.latLng(40.774, -74.125),
   * bounds = L.latLngBounds(corner1, corner2);
   * ```
   *
   * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * map.fitBounds([
   * 	[40.712, -74.227],
   * 	[40.774, -74.125]
   * ]);
   * ```
   *
   * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
   *
   * Note that `LatLngBounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */ function LatLngBounds(corner1, corner2) {
        if (!corner1) return;
        var latlngs = corner2 ? [
            corner1,
            corner2
        ] : corner1;
        for(var i = 0, len = latlngs.length; i < len; i++)this.extend(latlngs[i]);
    }
    LatLngBounds.prototype = {
        // @method extend(latlng: LatLng): this
        // Extend the bounds to contain the given point
        // @alternative
        // @method extend(otherBounds: LatLngBounds): this
        // Extend the bounds to contain the given bounds
        extend: function(obj) {
            var sw = this._southWest, ne = this._northEast, sw2, ne2;
            if (obj instanceof LatLng) {
                sw2 = obj;
                ne2 = obj;
            } else if (obj instanceof LatLngBounds) {
                sw2 = obj._southWest;
                ne2 = obj._northEast;
                if (!sw2 || !ne2) return this;
            } else return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;
            if (!sw && !ne) {
                this._southWest = new LatLng(sw2.lat, sw2.lng);
                this._northEast = new LatLng(ne2.lat, ne2.lng);
            } else {
                sw.lat = Math.min(sw2.lat, sw.lat);
                sw.lng = Math.min(sw2.lng, sw.lng);
                ne.lat = Math.max(ne2.lat, ne.lat);
                ne.lng = Math.max(ne2.lng, ne.lng);
            }
            return this;
        },
        // @method pad(bufferRatio: Number): LatLngBounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(bufferRatio) {
            var sw = this._southWest, ne = this._northEast, heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio, widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;
            return new LatLngBounds(new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer), new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
        },
        // @method getCenter(): LatLng
        // Returns the center point of the bounds.
        getCenter: function() {
            return new LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
        },
        // @method getSouthWest(): LatLng
        // Returns the south-west point of the bounds.
        getSouthWest: function() {
            return this._southWest;
        },
        // @method getNorthEast(): LatLng
        // Returns the north-east point of the bounds.
        getNorthEast: function() {
            return this._northEast;
        },
        // @method getNorthWest(): LatLng
        // Returns the north-west point of the bounds.
        getNorthWest: function() {
            return new LatLng(this.getNorth(), this.getWest());
        },
        // @method getSouthEast(): LatLng
        // Returns the south-east point of the bounds.
        getSouthEast: function() {
            return new LatLng(this.getSouth(), this.getEast());
        },
        // @method getWest(): Number
        // Returns the west longitude of the bounds
        getWest: function() {
            return this._southWest.lng;
        },
        // @method getSouth(): Number
        // Returns the south latitude of the bounds
        getSouth: function() {
            return this._southWest.lat;
        },
        // @method getEast(): Number
        // Returns the east longitude of the bounds
        getEast: function() {
            return this._northEast.lng;
        },
        // @method getNorth(): Number
        // Returns the north latitude of the bounds
        getNorth: function() {
            return this._northEast.lat;
        },
        // @method contains(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains (latlng: LatLng): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(obj) {
            if (typeof obj[0] === "number" || obj instanceof LatLng || "lat" in obj) obj = toLatLng(obj);
            else obj = toLatLngBounds(obj);
            var sw = this._southWest, ne = this._northEast, sw2, ne2;
            if (obj instanceof LatLngBounds) {
                sw2 = obj.getSouthWest();
                ne2 = obj.getNorthEast();
            } else sw2 = ne2 = obj;
            return sw2.lat >= sw.lat && ne2.lat <= ne.lat && sw2.lng >= sw.lng && ne2.lng <= ne.lng;
        },
        // @method intersects(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
        intersects: function(bounds) {
            bounds = toLatLngBounds(bounds);
            var sw = this._southWest, ne = this._northEast, sw2 = bounds.getSouthWest(), ne2 = bounds.getNorthEast(), latIntersects = ne2.lat >= sw.lat && sw2.lat <= ne.lat, lngIntersects = ne2.lng >= sw.lng && sw2.lng <= ne.lng;
            return latIntersects && lngIntersects;
        },
        // @method overlaps(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
        overlaps: function(bounds) {
            bounds = toLatLngBounds(bounds);
            var sw = this._southWest, ne = this._northEast, sw2 = bounds.getSouthWest(), ne2 = bounds.getNorthEast(), latOverlaps = ne2.lat > sw.lat && sw2.lat < ne.lat, lngOverlaps = ne2.lng > sw.lng && sw2.lng < ne.lng;
            return latOverlaps && lngOverlaps;
        },
        // @method toBBoxString(): String
        // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
        toBBoxString: function() {
            return [
                this.getWest(),
                this.getSouth(),
                this.getEast(),
                this.getNorth()
            ].join(",");
        },
        // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
        // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(bounds, maxMargin) {
            if (!bounds) return false;
            bounds = toLatLngBounds(bounds);
            return this._southWest.equals(bounds.getSouthWest(), maxMargin) && this._northEast.equals(bounds.getNorthEast(), maxMargin);
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
            return !!(this._southWest && this._northEast);
        }
    };
    // TODO International date line?
    // @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
    // Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.
    // @alternative
    // @factory L.latLngBounds(latlngs: LatLng[])
    // Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
    function toLatLngBounds(a, b) {
        if (a instanceof LatLngBounds) return a;
        return new LatLngBounds(a, b);
    }
    /* @class LatLng
   * @aka L.LatLng
   *
   * Represents a geographical point with a certain latitude and longitude.
   *
   * @example
   *
   * ```
   * var latlng = L.latLng(50.5, 30.5);
   * ```
   *
   * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
   *
   * ```
   * map.panTo([50, 30]);
   * map.panTo({lon: 30, lat: 50});
   * map.panTo({lat: 50, lng: 30});
   * map.panTo(L.latLng(50, 30));
   * ```
   *
   * Note that `LatLng` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */ function LatLng(lat, lng, alt) {
        if (isNaN(lat) || isNaN(lng)) throw new Error("Invalid LatLng object: (" + lat + ", " + lng + ")");
        // @property lat: Number
        // Latitude in degrees
        this.lat = +lat;
        // @property lng: Number
        // Longitude in degrees
        this.lng = +lng;
        // @property alt: Number
        // Altitude in meters (optional)
        if (alt !== undefined) this.alt = +alt;
    }
    LatLng.prototype = {
        // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
        // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(obj, maxMargin) {
            if (!obj) return false;
            obj = toLatLng(obj);
            var margin = Math.max(Math.abs(this.lat - obj.lat), Math.abs(this.lng - obj.lng));
            return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
        },
        // @method toString(): String
        // Returns a string representation of the point (for debugging purposes).
        toString: function(precision) {
            return "LatLng(" + formatNum(this.lat, precision) + ", " + formatNum(this.lng, precision) + ")";
        },
        // @method distanceTo(otherLatLng: LatLng): Number
        // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
        distanceTo: function(other) {
            return Earth.distance(this, toLatLng(other));
        },
        // @method wrap(): LatLng
        // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
        wrap: function() {
            return Earth.wrapLatLng(this);
        },
        // @method toBounds(sizeInMeters: Number): LatLngBounds
        // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
        toBounds: function(sizeInMeters) {
            var latAccuracy = 180 * sizeInMeters / 40075017, lngAccuracy = latAccuracy / Math.cos(Math.PI / 180 * this.lat);
            return toLatLngBounds([
                this.lat - latAccuracy,
                this.lng - lngAccuracy
            ], [
                this.lat + latAccuracy,
                this.lng + lngAccuracy
            ]);
        },
        clone: function() {
            return new LatLng(this.lat, this.lng, this.alt);
        }
    };
    // @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
    // Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).
    // @alternative
    // @factory L.latLng(coords: Array): LatLng
    // Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.
    // @alternative
    // @factory L.latLng(coords: Object): LatLng
    // Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.
    function toLatLng(a, b, c) {
        if (a instanceof LatLng) return a;
        if (isArray(a) && typeof a[0] !== "object") {
            if (a.length === 3) return new LatLng(a[0], a[1], a[2]);
            if (a.length === 2) return new LatLng(a[0], a[1]);
            return null;
        }
        if (a === undefined || a === null) return a;
        if (typeof a === "object" && "lat" in a) return new LatLng(a.lat, "lng" in a ? a.lng : a.lon, a.alt);
        if (b === undefined) return null;
        return new LatLng(a, b, c);
    }
    /*
   * @namespace CRS
   * @crs L.CRS.Base
   * Object that defines coordinate reference systems for projecting
   * geographical points into pixel (screen) coordinates and back (and to
   * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
   * [spatial reference system](https://en.wikipedia.org/wiki/Spatial_reference_system).
   *
   * Leaflet defines the most usual CRSs by default. If you want to use a
   * CRS not defined by default, take a look at the
   * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
   *
   * Note that the CRS instances do not inherit from Leaflet's `Class` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the `include` function.
   */ var CRS = {
        // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
        // Projects geographical coordinates into pixel coordinates for a given zoom.
        latLngToPoint: function(latlng, zoom) {
            var projectedPoint = this.projection.project(latlng), scale = this.scale(zoom);
            return this.transformation._transform(projectedPoint, scale);
        },
        // @method pointToLatLng(point: Point, zoom: Number): LatLng
        // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
        // zoom into geographical coordinates.
        pointToLatLng: function(point, zoom) {
            var scale = this.scale(zoom), untransformedPoint = this.transformation.untransform(point, scale);
            return this.projection.unproject(untransformedPoint);
        },
        // @method project(latlng: LatLng): Point
        // Projects geographical coordinates into coordinates in units accepted for
        // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
        project: function(latlng) {
            return this.projection.project(latlng);
        },
        // @method unproject(point: Point): LatLng
        // Given a projected coordinate returns the corresponding LatLng.
        // The inverse of `project`.
        unproject: function(point) {
            return this.projection.unproject(point);
        },
        // @method scale(zoom: Number): Number
        // Returns the scale used when transforming projected coordinates into
        // pixel coordinates for a particular zoom. For example, it returns
        // `256 * 2^zoom` for Mercator-based CRS.
        scale: function(zoom) {
            return 256 * Math.pow(2, zoom);
        },
        // @method zoom(scale: Number): Number
        // Inverse of `scale()`, returns the zoom level corresponding to a scale
        // factor of `scale`.
        zoom: function(scale) {
            return Math.log(scale / 256) / Math.LN2;
        },
        // @method getProjectedBounds(zoom: Number): Bounds
        // Returns the projection's bounds scaled and transformed for the provided `zoom`.
        getProjectedBounds: function(zoom) {
            if (this.infinite) return null;
            var b = this.projection.bounds, s = this.scale(zoom), min = this.transformation.transform(b.min, s), max = this.transformation.transform(b.max, s);
            return new Bounds(min, max);
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates.
        // @property code: String
        // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
        //
        // @property wrapLng: Number[]
        // An array of two numbers defining whether the longitude (horizontal) coordinate
        // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
        // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
        //
        // @property wrapLat: Number[]
        // Like `wrapLng`, but for the latitude (vertical) axis.
        // wrapLng: [min, max],
        // wrapLat: [min, max],
        // @property infinite: Boolean
        // If true, the coordinate space will be unbounded (infinite in both axes)
        infinite: false,
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where lat and lng has been wrapped according to the
        // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
        wrapLatLng: function(latlng) {
            var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng, lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat, alt = latlng.alt;
            return new LatLng(lat, lng, alt);
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring
        // that its center is within the CRS's bounds.
        // Only accepts actual `L.LatLngBounds` instances, not arrays.
        wrapLatLngBounds: function(bounds) {
            var center = bounds.getCenter(), newCenter = this.wrapLatLng(center), latShift = center.lat - newCenter.lat, lngShift = center.lng - newCenter.lng;
            if (latShift === 0 && lngShift === 0) return bounds;
            var sw = bounds.getSouthWest(), ne = bounds.getNorthEast(), newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift), newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);
            return new LatLngBounds(newSw, newNe);
        }
    };
    /*
   * @namespace CRS
   * @crs L.CRS.Earth
   *
   * Serves as the base for CRS that are global such that they cover the earth.
   * Can only be used as the base for other CRS and cannot be used directly,
   * since it does not have a `code`, `projection` or `transformation`. `distance()` returns
   * meters.
   */ var Earth = extend({}, CRS, {
        wrapLng: [
            -180,
            180
        ],
        // Mean Earth Radius, as recommended for use by
        // the International Union of Geodesy and Geophysics,
        // see https://rosettacode.org/wiki/Haversine_formula
        R: 6371000,
        // distance between two geographical points using spherical law of cosines approximation
        distance: function(latlng1, latlng2) {
            var rad = Math.PI / 180, lat1 = latlng1.lat * rad, lat2 = latlng2.lat * rad, sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2), sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2), a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon, c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return this.R * c;
        }
    });
    /*
   * @namespace Projection
   * @projection L.Projection.SphericalMercator
   *
   * Spherical Mercator projection — the most common projection for online maps,
   * used by almost all free and commercial tile providers. Assumes that Earth is
   * a sphere. Used by the `EPSG:3857` CRS.
   */ var earthRadius = 6378137;
    var SphericalMercator = {
        R: earthRadius,
        MAX_LATITUDE: 85.0511287798,
        project: function(latlng) {
            var d = Math.PI / 180, max = this.MAX_LATITUDE, lat = Math.max(Math.min(max, latlng.lat), -max), sin = Math.sin(lat * d);
            return new Point(this.R * latlng.lng * d, this.R * Math.log((1 + sin) / (1 - sin)) / 2);
        },
        unproject: function(point) {
            var d = 180 / Math.PI;
            return new LatLng((2 * Math.atan(Math.exp(point.y / this.R)) - Math.PI / 2) * d, point.x * d / this.R);
        },
        bounds: function() {
            var d = earthRadius * Math.PI;
            return new Bounds([
                -d,
                -d
            ], [
                d,
                d
            ]);
        }()
    };
    /*
   * @class Transformation
   * @aka L.Transformation
   *
   * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
   * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
   * the reverse. Used by Leaflet in its projections code.
   *
   * @example
   *
   * ```js
   * var transformation = L.transformation(2, 5, -1, 10),
   * 	p = L.point(1, 2),
   * 	p2 = transformation.transform(p), //  L.point(7, 8)
   * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
   * ```
   */ // factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
    // Creates a `Transformation` object with the given coefficients.
    function Transformation(a, b, c, d) {
        if (isArray(a)) {
            // use array properties
            this._a = a[0];
            this._b = a[1];
            this._c = a[2];
            this._d = a[3];
            return;
        }
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
    }
    Transformation.prototype = {
        // @method transform(point: Point, scale?: Number): Point
        // Returns a transformed point, optionally multiplied by the given scale.
        // Only accepts actual `L.Point` instances, not arrays.
        transform: function(point, scale) {
            return this._transform(point.clone(), scale);
        },
        // destructive transform (faster)
        _transform: function(point, scale) {
            scale = scale || 1;
            point.x = scale * (this._a * point.x + this._b);
            point.y = scale * (this._c * point.y + this._d);
            return point;
        },
        // @method untransform(point: Point, scale?: Number): Point
        // Returns the reverse transformation of the given point, optionally divided
        // by the given scale. Only accepts actual `L.Point` instances, not arrays.
        untransform: function(point, scale) {
            scale = scale || 1;
            return new Point((point.x / scale - this._b) / this._a, (point.y / scale - this._d) / this._c);
        }
    };
    // factory L.transformation(a: Number, b: Number, c: Number, d: Number)
    // @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
    // Instantiates a Transformation object with the given coefficients.
    // @alternative
    // @factory L.transformation(coefficients: Array): Transformation
    // Expects an coefficients array of the form
    // `[a: Number, b: Number, c: Number, d: Number]`.
    function toTransformation(a, b, c, d) {
        return new Transformation(a, b, c, d);
    }
    /*
   * @namespace CRS
   * @crs L.CRS.EPSG3857
   *
   * The most common CRS for online maps, used by almost all free and commercial
   * tile providers. Uses Spherical Mercator projection. Set in by default in
   * Map's `crs` option.
   */ var EPSG3857 = extend({}, Earth, {
        code: "EPSG:3857",
        projection: SphericalMercator,
        transformation: function() {
            var scale = 0.5 / (Math.PI * SphericalMercator.R);
            return toTransformation(scale, 0.5, -scale, 0.5);
        }()
    });
    var EPSG900913 = extend({}, EPSG3857, {
        code: "EPSG:900913"
    });
    // @namespace SVG; @section
    // There are several static functions which can be called without instantiating L.SVG:
    // @function create(name: String): SVGElement
    // Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
    // corresponding to the class name passed. For example, using 'line' will return
    // an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
    function svgCreate(name) {
        return document.createElementNS("http://www.w3.org/2000/svg", name);
    }
    // @function pointsToPath(rings: Point[], closed: Boolean): String
    // Generates a SVG path string for multiple rings, with each ring turning
    // into "M..L..L.." instructions
    function pointsToPath(rings, closed) {
        var str = "", i, j, len, len2, points, p;
        for(i = 0, len = rings.length; i < len; i++){
            points = rings[i];
            for(j = 0, len2 = points.length; j < len2; j++){
                p = points[j];
                str += (j ? "L" : "M") + p.x + " " + p.y;
            }
            // closes the ring for polygons; "x" is VML syntax
            str += closed ? Browser.svg ? "z" : "x" : "";
        }
        // SVG complains about empty path strings
        return str || "M0 0";
    }
    /*
   * @namespace Browser
   * @aka L.Browser
   *
   * A namespace with static properties for browser/feature detection used by Leaflet internally.
   *
   * @example
   *
   * ```js
   * if (L.Browser.ielt9) {
   *   alert('Upgrade your browser, dude!');
   * }
   * ```
   */ var style = document.documentElement.style;
    // @property ie: Boolean; `true` for all Internet Explorer versions (not Edge).
    var ie = "ActiveXObject" in window;
    // @property ielt9: Boolean; `true` for Internet Explorer versions less than 9.
    var ielt9 = ie && !document.addEventListener;
    // @property edge: Boolean; `true` for the Edge web browser.
    var edge = "msLaunchUri" in navigator && !("documentMode" in document);
    // @property webkit: Boolean;
    // `true` for webkit-based browsers like Chrome and Safari (including mobile versions).
    var webkit = userAgentContains("webkit");
    // @property android: Boolean
    // **Deprecated.** `true` for any browser running on an Android platform.
    var android = userAgentContains("android");
    // @property android23: Boolean; **Deprecated.** `true` for browsers running on Android 2 or Android 3.
    var android23 = userAgentContains("android 2") || userAgentContains("android 3");
    /* See https://stackoverflow.com/a/17961266 for details on detecting stock Android */ var webkitVer = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10); // also matches AppleWebKit
    // @property androidStock: Boolean; **Deprecated.** `true` for the Android stock browser (i.e. not Chrome)
    var androidStock = android && userAgentContains("Google") && webkitVer < 537 && !("AudioNode" in window);
    // @property opera: Boolean; `true` for the Opera browser
    var opera = !!window.opera;
    // @property chrome: Boolean; `true` for the Chrome browser.
    var chrome = !edge && userAgentContains("chrome");
    // @property gecko: Boolean; `true` for gecko-based browsers like Firefox.
    var gecko = userAgentContains("gecko") && !webkit && !opera && !ie;
    // @property safari: Boolean; `true` for the Safari browser.
    var safari = !chrome && userAgentContains("safari");
    var phantom = userAgentContains("phantom");
    // @property opera12: Boolean
    // `true` for the Opera browser supporting CSS transforms (version 12 or later).
    var opera12 = "OTransition" in style;
    // @property win: Boolean; `true` when the browser is running in a Windows platform
    var win = navigator.platform.indexOf("Win") === 0;
    // @property ie3d: Boolean; `true` for all Internet Explorer versions supporting CSS transforms.
    var ie3d = ie && "transition" in style;
    // @property webkit3d: Boolean; `true` for webkit-based browsers supporting CSS transforms.
    var webkit3d = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !android23;
    // @property gecko3d: Boolean; `true` for gecko-based browsers supporting CSS transforms.
    var gecko3d = "MozPerspective" in style;
    // @property any3d: Boolean
    // `true` for all browsers supporting CSS transforms.
    var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom;
    // @property mobile: Boolean; `true` for all browsers running in a mobile device.
    var mobile = typeof orientation !== "undefined" || userAgentContains("mobile");
    // @property mobileWebkit: Boolean; `true` for all webkit-based browsers in a mobile device.
    var mobileWebkit = mobile && webkit;
    // @property mobileWebkit3d: Boolean
    // `true` for all webkit-based browsers in a mobile device supporting CSS transforms.
    var mobileWebkit3d = mobile && webkit3d;
    // @property msPointer: Boolean
    // `true` for browsers implementing the Microsoft touch events model (notably IE10).
    var msPointer = !window.PointerEvent && window.MSPointerEvent;
    // @property pointer: Boolean
    // `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).
    var pointer = !!(window.PointerEvent || msPointer);
    // @property touchNative: Boolean
    // `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).
    // **This does not necessarily mean** that the browser is running in a computer with
    // a touchscreen, it only means that the browser is capable of understanding
    // touch events.
    var touchNative = "ontouchstart" in window || !!window.TouchEvent;
    // @property touch: Boolean
    // `true` for all browsers supporting either [touch](#browser-touch) or [pointer](#browser-pointer) events.
    // Note: pointer events will be preferred (if available), and processed for all `touch*` listeners.
    var touch = !window.L_NO_TOUCH && (touchNative || pointer);
    // @property mobileOpera: Boolean; `true` for the Opera browser in a mobile device.
    var mobileOpera = mobile && opera;
    // @property mobileGecko: Boolean
    // `true` for gecko-based browsers running in a mobile device.
    var mobileGecko = mobile && gecko;
    // @property retina: Boolean
    // `true` for browsers on a high-resolution "retina" screen or on any screen when browser's display zoom is more than 100%.
    var retina = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1;
    // @property passiveEvents: Boolean
    // `true` for browsers that support passive events.
    var passiveEvents = function() {
        var supportsPassiveOption = false;
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function() {
                    supportsPassiveOption = true;
                }
            });
            window.addEventListener("testPassiveEventSupport", falseFn, opts);
            window.removeEventListener("testPassiveEventSupport", falseFn, opts);
        } catch (e) {
        // Errors can safely be ignored since this is only a browser support test.
        }
        return supportsPassiveOption;
    }();
    // @property canvas: Boolean
    // `true` when the browser supports [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
    var canvas$1 = function() {
        return !!document.createElement("canvas").getContext;
    }();
    // @property svg: Boolean
    // `true` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).
    var svg$1 = !!(document.createElementNS && svgCreate("svg").createSVGRect);
    var inlineSvg = !!svg$1 && function() {
        var div = document.createElement("div");
        div.innerHTML = "<svg/>";
        return (div.firstChild && div.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
    }();
    // @property vml: Boolean
    // `true` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).
    var vml = !svg$1 && function() {
        try {
            var div = document.createElement("div");
            div.innerHTML = '<v:shape adj="1"/>';
            var shape = div.firstChild;
            shape.style.behavior = "url(#default#VML)";
            return shape && typeof shape.adj === "object";
        } catch (e) {
            return false;
        }
    }();
    // @property mac: Boolean; `true` when the browser is running in a Mac platform
    var mac = navigator.platform.indexOf("Mac") === 0;
    // @property mac: Boolean; `true` when the browser is running in a Linux platform
    var linux = navigator.platform.indexOf("Linux") === 0;
    function userAgentContains(str) {
        return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
    }
    var Browser = {
        ie: ie,
        ielt9: ielt9,
        edge: edge,
        webkit: webkit,
        android: android,
        android23: android23,
        androidStock: androidStock,
        opera: opera,
        chrome: chrome,
        gecko: gecko,
        safari: safari,
        phantom: phantom,
        opera12: opera12,
        win: win,
        ie3d: ie3d,
        webkit3d: webkit3d,
        gecko3d: gecko3d,
        any3d: any3d,
        mobile: mobile,
        mobileWebkit: mobileWebkit,
        mobileWebkit3d: mobileWebkit3d,
        msPointer: msPointer,
        pointer: pointer,
        touch: touch,
        touchNative: touchNative,
        mobileOpera: mobileOpera,
        mobileGecko: mobileGecko,
        retina: retina,
        passiveEvents: passiveEvents,
        canvas: canvas$1,
        svg: svg$1,
        vml: vml,
        inlineSvg: inlineSvg,
        mac: mac,
        linux: linux
    };
    /*
   * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
   */ var POINTER_DOWN = Browser.msPointer ? "MSPointerDown" : "pointerdown";
    var POINTER_MOVE = Browser.msPointer ? "MSPointerMove" : "pointermove";
    var POINTER_UP = Browser.msPointer ? "MSPointerUp" : "pointerup";
    var POINTER_CANCEL = Browser.msPointer ? "MSPointerCancel" : "pointercancel";
    var pEvent = {
        touchstart: POINTER_DOWN,
        touchmove: POINTER_MOVE,
        touchend: POINTER_UP,
        touchcancel: POINTER_CANCEL
    };
    var handle = {
        touchstart: _onPointerStart,
        touchmove: _handlePointer,
        touchend: _handlePointer,
        touchcancel: _handlePointer
    };
    var _pointers = {};
    var _pointerDocListener = false;
    // Provides a touch events wrapper for (ms)pointer events.
    // ref https://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890
    function addPointerListener(obj, type, handler) {
        if (type === "touchstart") _addPointerDocListener();
        if (!handle[type]) {
            console.warn("wrong event specified:", type);
            return falseFn;
        }
        handler = handle[type].bind(this, handler);
        obj.addEventListener(pEvent[type], handler, false);
        return handler;
    }
    function removePointerListener(obj, type, handler) {
        if (!pEvent[type]) {
            console.warn("wrong event specified:", type);
            return;
        }
        obj.removeEventListener(pEvent[type], handler, false);
    }
    function _globalPointerDown(e) {
        _pointers[e.pointerId] = e;
    }
    function _globalPointerMove(e) {
        if (_pointers[e.pointerId]) _pointers[e.pointerId] = e;
    }
    function _globalPointerUp(e) {
        delete _pointers[e.pointerId];
    }
    function _addPointerDocListener() {
        // need to keep track of what pointers and how many are active to provide e.touches emulation
        if (!_pointerDocListener) {
            // we listen document as any drags that end by moving the touch off the screen get fired there
            document.addEventListener(POINTER_DOWN, _globalPointerDown, true);
            document.addEventListener(POINTER_MOVE, _globalPointerMove, true);
            document.addEventListener(POINTER_UP, _globalPointerUp, true);
            document.addEventListener(POINTER_CANCEL, _globalPointerUp, true);
            _pointerDocListener = true;
        }
    }
    function _handlePointer(handler, e) {
        if (e.pointerType === (e.MSPOINTER_TYPE_MOUSE || "mouse")) return;
        e.touches = [];
        for(var i in _pointers)e.touches.push(_pointers[i]);
        e.changedTouches = [
            e
        ];
        handler(e);
    }
    function _onPointerStart(handler, e) {
        // IE10 specific: MsTouch needs preventDefault. See #2000
        if (e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH) preventDefault(e);
        _handlePointer(handler, e);
    }
    /*
   * Extends the event handling code with double tap support for mobile browsers.
   *
   * Note: currently most browsers fire native dblclick, with only a few exceptions
   * (see https://github.com/Leaflet/Leaflet/issues/7012#issuecomment-595087386)
   */ function makeDblclick(event) {
        // in modern browsers `type` cannot be just overridden:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only
        var newEvent = {}, prop, i;
        for(i in event){
            prop = event[i];
            newEvent[i] = prop && prop.bind ? prop.bind(event) : prop;
        }
        event = newEvent;
        newEvent.type = "dblclick";
        newEvent.detail = 2;
        newEvent.isTrusted = false;
        newEvent._simulated = true; // for debug purposes
        return newEvent;
    }
    var delay = 200;
    function addDoubleTapListener(obj, handler) {
        // Most browsers handle double tap natively
        obj.addEventListener("dblclick", handler);
        // On some platforms the browser doesn't fire native dblclicks for touch events.
        // It seems that in all such cases `detail` property of `click` event is always `1`.
        // So here we rely on that fact to avoid excessive 'dblclick' simulation when not needed.
        var last = 0, detail;
        function simDblclick(e) {
            if (e.detail !== 1) {
                detail = e.detail; // keep in sync to avoid false dblclick in some cases
                return;
            }
            if (e.pointerType === "mouse" || e.sourceCapabilities && !e.sourceCapabilities.firesTouchEvents) return;
            // When clicking on an <input>, the browser generates a click on its
            // <label> (and vice versa) triggering two clicks in quick succession.
            // This ignores clicks on elements which are a label with a 'for'
            // attribute (or children of such a label), but not children of
            // a <input>.
            var path = getPropagationPath(e);
            if (path.some(function(el) {
                return el instanceof HTMLLabelElement && el.attributes.for;
            }) && !path.some(function(el) {
                return el instanceof HTMLInputElement || el instanceof HTMLSelectElement;
            })) return;
            var now = Date.now();
            if (now - last <= delay) {
                detail++;
                if (detail === 2) handler(makeDblclick(e));
            } else detail = 1;
            last = now;
        }
        obj.addEventListener("click", simDblclick);
        return {
            dblclick: handler,
            simDblclick: simDblclick
        };
    }
    function removeDoubleTapListener(obj, handlers) {
        obj.removeEventListener("dblclick", handlers.dblclick);
        obj.removeEventListener("click", handlers.simDblclick);
    }
    /*
   * @namespace DomUtil
   *
   * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
   * tree, used by Leaflet internally.
   *
   * Most functions expecting or returning a `HTMLElement` also work for
   * SVG elements. The only difference is that classes refer to CSS classes
   * in HTML and SVG classes in SVG.
   */ // @property TRANSFORM: String
    // Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).
    var TRANSFORM = testProp([
        "transform",
        "webkitTransform",
        "OTransform",
        "MozTransform",
        "msTransform"
    ]);
    // webkitTransition comes first because some browser versions that drop vendor prefix don't do
    // the same for the transitionend event, in particular the Android 4.1 stock browser
    // @property TRANSITION: String
    // Vendor-prefixed transition style name.
    var TRANSITION = testProp([
        "webkitTransition",
        "transition",
        "OTransition",
        "MozTransition",
        "msTransition"
    ]);
    // @property TRANSITION_END: String
    // Vendor-prefixed transitionend event name.
    var TRANSITION_END = TRANSITION === "webkitTransition" || TRANSITION === "OTransition" ? TRANSITION + "End" : "transitionend";
    // @function get(id: String|HTMLElement): HTMLElement
    // Returns an element given its DOM id, or returns the element itself
    // if it was passed directly.
    function get(id) {
        return typeof id === "string" ? document.getElementById(id) : id;
    }
    // @function getStyle(el: HTMLElement, styleAttrib: String): String
    // Returns the value for a certain style attribute on an element,
    // including computed values or values set through CSS.
    function getStyle(el, style) {
        var value = el.style[style] || el.currentStyle && el.currentStyle[style];
        if ((!value || value === "auto") && document.defaultView) {
            var css = document.defaultView.getComputedStyle(el, null);
            value = css ? css[style] : null;
        }
        return value === "auto" ? null : value;
    }
    // @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
    // Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
    function create$1(tagName, className, container) {
        var el = document.createElement(tagName);
        el.className = className || "";
        if (container) container.appendChild(el);
        return el;
    }
    // @function remove(el: HTMLElement)
    // Removes `el` from its parent element
    function remove(el) {
        var parent = el.parentNode;
        if (parent) parent.removeChild(el);
    }
    // @function empty(el: HTMLElement)
    // Removes all of `el`'s children elements from `el`
    function empty(el) {
        while(el.firstChild)el.removeChild(el.firstChild);
    }
    // @function toFront(el: HTMLElement)
    // Makes `el` the last child of its parent, so it renders in front of the other children.
    function toFront(el) {
        var parent = el.parentNode;
        if (parent && parent.lastChild !== el) parent.appendChild(el);
    }
    // @function toBack(el: HTMLElement)
    // Makes `el` the first child of its parent, so it renders behind the other children.
    function toBack(el) {
        var parent = el.parentNode;
        if (parent && parent.firstChild !== el) parent.insertBefore(el, parent.firstChild);
    }
    // @function hasClass(el: HTMLElement, name: String): Boolean
    // Returns `true` if the element's class attribute contains `name`.
    function hasClass(el, name) {
        if (el.classList !== undefined) return el.classList.contains(name);
        var className = getClass(el);
        return className.length > 0 && new RegExp("(^|\\s)" + name + "(\\s|$)").test(className);
    }
    // @function addClass(el: HTMLElement, name: String)
    // Adds `name` to the element's class attribute.
    function addClass(el, name) {
        if (el.classList !== undefined) {
            var classes = splitWords(name);
            for(var i = 0, len = classes.length; i < len; i++)el.classList.add(classes[i]);
        } else if (!hasClass(el, name)) {
            var className = getClass(el);
            setClass(el, (className ? className + " " : "") + name);
        }
    }
    // @function removeClass(el: HTMLElement, name: String)
    // Removes `name` from the element's class attribute.
    function removeClass(el, name) {
        if (el.classList !== undefined) el.classList.remove(name);
        else setClass(el, trim((" " + getClass(el) + " ").replace(" " + name + " ", " ")));
    }
    // @function setClass(el: HTMLElement, name: String)
    // Sets the element's class.
    function setClass(el, name) {
        if (el.className.baseVal === undefined) el.className = name;
        else // in case of SVG element
        el.className.baseVal = name;
    }
    // @function getClass(el: HTMLElement): String
    // Returns the element's class.
    function getClass(el) {
        // Check if the element is an SVGElementInstance and use the correspondingElement instead
        // (Required for linked SVG elements in IE11.)
        if (el.correspondingElement) el = el.correspondingElement;
        return el.className.baseVal === undefined ? el.className : el.className.baseVal;
    }
    // @function setOpacity(el: HTMLElement, opacity: Number)
    // Set the opacity of an element (including old IE support).
    // `opacity` must be a number from `0` to `1`.
    function setOpacity(el, value) {
        if ("opacity" in el.style) el.style.opacity = value;
        else if ("filter" in el.style) _setOpacityIE(el, value);
    }
    function _setOpacityIE(el, value) {
        var filter = false, filterName = "DXImageTransform.Microsoft.Alpha";
        // filters collection throws an error if we try to retrieve a filter that doesn't exist
        try {
            filter = el.filters.item(filterName);
        } catch (e) {
            // don't set opacity to 1 if we haven't already set an opacity,
            // it isn't needed and breaks transparent pngs.
            if (value === 1) return;
        }
        value = Math.round(value * 100);
        if (filter) {
            filter.Enabled = value !== 100;
            filter.Opacity = value;
        } else el.style.filter += " progid:" + filterName + "(opacity=" + value + ")";
    }
    // @function testProp(props: String[]): String|false
    // Goes through the array of style names and returns the first name
    // that is a valid style name for an element. If no such name is found,
    // it returns false. Useful for vendor-prefixed styles like `transform`.
    function testProp(props) {
        var style = document.documentElement.style;
        for(var i = 0; i < props.length; i++){
            if (props[i] in style) return props[i];
        }
        return false;
    }
    // @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
    // Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
    // and optionally scaled by `scale`. Does not have an effect if the
    // browser doesn't support 3D CSS transforms.
    function setTransform(el, offset, scale) {
        var pos = offset || new Point(0, 0);
        el.style[TRANSFORM] = (Browser.ie3d ? "translate(" + pos.x + "px," + pos.y + "px)" : "translate3d(" + pos.x + "px," + pos.y + "px,0)") + (scale ? " scale(" + scale + ")" : "");
    }
    // @function setPosition(el: HTMLElement, position: Point)
    // Sets the position of `el` to coordinates specified by `position`,
    // using CSS translate or top/left positioning depending on the browser
    // (used by Leaflet internally to position its layers).
    function setPosition(el, point) {
        /*eslint-disable */ el._leaflet_pos = point;
        /* eslint-enable */ if (Browser.any3d) setTransform(el, point);
        else {
            el.style.left = point.x + "px";
            el.style.top = point.y + "px";
        }
    }
    // @function getPosition(el: HTMLElement): Point
    // Returns the coordinates of an element previously positioned with setPosition.
    function getPosition(el) {
        // this method is only used for elements previously positioned using setPosition,
        // so it's safe to cache the position for performance
        return el._leaflet_pos || new Point(0, 0);
    }
    // @function disableTextSelection()
    // Prevents the user from generating `selectstart` DOM events, usually generated
    // when the user drags the mouse through a page with text. Used internally
    // by Leaflet to override the behaviour of any click-and-drag interaction on
    // the map. Affects drag interactions on the whole document.
    // @function enableTextSelection()
    // Cancels the effects of a previous [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection).
    var disableTextSelection;
    var enableTextSelection;
    var _userSelect;
    if ("onselectstart" in document) {
        disableTextSelection = function() {
            on(window, "selectstart", preventDefault);
        };
        enableTextSelection = function() {
            off(window, "selectstart", preventDefault);
        };
    } else {
        var userSelectProperty = testProp([
            "userSelect",
            "WebkitUserSelect",
            "OUserSelect",
            "MozUserSelect",
            "msUserSelect"
        ]);
        disableTextSelection = function() {
            if (userSelectProperty) {
                var style = document.documentElement.style;
                _userSelect = style[userSelectProperty];
                style[userSelectProperty] = "none";
            }
        };
        enableTextSelection = function() {
            if (userSelectProperty) {
                document.documentElement.style[userSelectProperty] = _userSelect;
                _userSelect = undefined;
            }
        };
    }
    // @function disableImageDrag()
    // As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
    // for `dragstart` DOM events, usually generated when the user drags an image.
    function disableImageDrag() {
        on(window, "dragstart", preventDefault);
    }
    // @function enableImageDrag()
    // Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
    function enableImageDrag() {
        off(window, "dragstart", preventDefault);
    }
    var _outlineElement, _outlineStyle;
    // @function preventOutline(el: HTMLElement)
    // Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
    // of the element `el` invisible. Used internally by Leaflet to prevent
    // focusable elements from displaying an outline when the user performs a
    // drag interaction on them.
    function preventOutline(element) {
        while(element.tabIndex === -1)element = element.parentNode;
        if (!element.style) return;
        restoreOutline();
        _outlineElement = element;
        _outlineStyle = element.style.outlineStyle;
        element.style.outlineStyle = "none";
        on(window, "keydown", restoreOutline);
    }
    // @function restoreOutline()
    // Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
    function restoreOutline() {
        if (!_outlineElement) return;
        _outlineElement.style.outlineStyle = _outlineStyle;
        _outlineElement = undefined;
        _outlineStyle = undefined;
        off(window, "keydown", restoreOutline);
    }
    // @function getSizedParentNode(el: HTMLElement): HTMLElement
    // Finds the closest parent node which size (width and height) is not null.
    function getSizedParentNode(element) {
        do element = element.parentNode;
        while ((!element.offsetWidth || !element.offsetHeight) && element !== document.body);
        return element;
    }
    // @function getScale(el: HTMLElement): Object
    // Computes the CSS scale currently applied on the element.
    // Returns an object with `x` and `y` members as horizontal and vertical scales respectively,
    // and `boundingClientRect` as the result of [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).
    function getScale(element) {
        var rect = element.getBoundingClientRect(); // Read-only in old browsers.
        return {
            x: rect.width / element.offsetWidth || 1,
            y: rect.height / element.offsetHeight || 1,
            boundingClientRect: rect
        };
    }
    var DomUtil = {
        __proto__: null,
        TRANSFORM: TRANSFORM,
        TRANSITION: TRANSITION,
        TRANSITION_END: TRANSITION_END,
        get: get,
        getStyle: getStyle,
        create: create$1,
        remove: remove,
        empty: empty,
        toFront: toFront,
        toBack: toBack,
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        setClass: setClass,
        getClass: getClass,
        setOpacity: setOpacity,
        testProp: testProp,
        setTransform: setTransform,
        setPosition: setPosition,
        getPosition: getPosition,
        get disableTextSelection () {
            return disableTextSelection;
        },
        get enableTextSelection () {
            return enableTextSelection;
        },
        disableImageDrag: disableImageDrag,
        enableImageDrag: enableImageDrag,
        preventOutline: preventOutline,
        restoreOutline: restoreOutline,
        getSizedParentNode: getSizedParentNode,
        getScale: getScale
    };
    /*
   * @namespace DomEvent
   * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
   */ // Inspired by John Resig, Dean Edwards and YUI addEvent implementations.
    // @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
    // Adds a listener function (`fn`) to a particular DOM event type of the
    // element `el`. You can optionally specify the context of the listener
    // (object the `this` keyword will point to). You can also pass several
    // space-separated types (e.g. `'click dblclick'`).
    // @alternative
    // @function on(el: HTMLElement, eventMap: Object, context?: Object): this
    // Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
    function on(obj, types, fn, context) {
        if (types && typeof types === "object") for(var type in types)addOne(obj, type, types[type], fn);
        else {
            types = splitWords(types);
            for(var i = 0, len = types.length; i < len; i++)addOne(obj, types[i], fn, context);
        }
        return this;
    }
    var eventsKey = "_leaflet_events";
    // @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
    // Removes a previously added listener function.
    // Note that if you passed a custom context to on, you must pass the same
    // context to `off` in order to remove the listener.
    // @alternative
    // @function off(el: HTMLElement, eventMap: Object, context?: Object): this
    // Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
    // @alternative
    // @function off(el: HTMLElement, types: String): this
    // Removes all previously added listeners of given types.
    // @alternative
    // @function off(el: HTMLElement): this
    // Removes all previously added listeners from given HTMLElement
    function off(obj, types, fn, context) {
        if (arguments.length === 1) {
            batchRemove(obj);
            delete obj[eventsKey];
        } else if (types && typeof types === "object") for(var type in types)removeOne(obj, type, types[type], fn);
        else {
            types = splitWords(types);
            if (arguments.length === 2) batchRemove(obj, function(type) {
                return indexOf(types, type) !== -1;
            });
            else for(var i = 0, len = types.length; i < len; i++)removeOne(obj, types[i], fn, context);
        }
        return this;
    }
    function batchRemove(obj, filterFn) {
        for(var id in obj[eventsKey]){
            var type = id.split(/\d/)[0];
            if (!filterFn || filterFn(type)) removeOne(obj, type, null, null, id);
        }
    }
    var mouseSubst = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
    };
    function addOne(obj, type, fn, context) {
        var id = type + stamp(fn) + (context ? "_" + stamp(context) : "");
        if (obj[eventsKey] && obj[eventsKey][id]) return this;
        var handler = function(e) {
            return fn.call(context || obj, e || window.event);
        };
        var originalHandler = handler;
        if (!Browser.touchNative && Browser.pointer && type.indexOf("touch") === 0) // Needs DomEvent.Pointer.js
        handler = addPointerListener(obj, type, handler);
        else if (Browser.touch && type === "dblclick") handler = addDoubleTapListener(obj, handler);
        else if ("addEventListener" in obj) {
            if (type === "touchstart" || type === "touchmove" || type === "wheel" || type === "mousewheel") obj.addEventListener(mouseSubst[type] || type, handler, Browser.passiveEvents ? {
                passive: false
            } : false);
            else if (type === "mouseenter" || type === "mouseleave") {
                handler = function(e) {
                    e = e || window.event;
                    if (isExternalTarget(obj, e)) originalHandler(e);
                };
                obj.addEventListener(mouseSubst[type], handler, false);
            } else obj.addEventListener(type, originalHandler, false);
        } else obj.attachEvent("on" + type, handler);
        obj[eventsKey] = obj[eventsKey] || {};
        obj[eventsKey][id] = handler;
    }
    function removeOne(obj, type, fn, context, id) {
        id = id || type + stamp(fn) + (context ? "_" + stamp(context) : "");
        var handler = obj[eventsKey] && obj[eventsKey][id];
        if (!handler) return this;
        if (!Browser.touchNative && Browser.pointer && type.indexOf("touch") === 0) removePointerListener(obj, type, handler);
        else if (Browser.touch && type === "dblclick") removeDoubleTapListener(obj, handler);
        else if ("removeEventListener" in obj) obj.removeEventListener(mouseSubst[type] || type, handler, false);
        else obj.detachEvent("on" + type, handler);
        obj[eventsKey][id] = null;
    }
    // @function stopPropagation(ev: DOMEvent): this
    // Stop the given event from propagation to parent elements. Used inside the listener functions:
    // ```js
    // L.DomEvent.on(div, 'click', function (ev) {
    // 	L.DomEvent.stopPropagation(ev);
    // });
    // ```
    function stopPropagation(e) {
        if (e.stopPropagation) e.stopPropagation();
        else if (e.originalEvent) e.originalEvent._stopped = true;
        else e.cancelBubble = true;
        return this;
    }
    // @function disableScrollPropagation(el: HTMLElement): this
    // Adds `stopPropagation` to the element's `'wheel'` events (plus browser variants).
    function disableScrollPropagation(el) {
        addOne(el, "wheel", stopPropagation);
        return this;
    }
    // @function disableClickPropagation(el: HTMLElement): this
    // Adds `stopPropagation` to the element's `'click'`, `'dblclick'`, `'contextmenu'`,
    // `'mousedown'` and `'touchstart'` events (plus browser variants).
    function disableClickPropagation(el) {
        on(el, "mousedown touchstart dblclick contextmenu", stopPropagation);
        el["_leaflet_disable_click"] = true;
        return this;
    }
    // @function preventDefault(ev: DOMEvent): this
    // Prevents the default action of the DOM Event `ev` from happening (such as
    // following a link in the href of the a element, or doing a POST request
    // with page reload when a `<form>` is submitted).
    // Use it inside listener functions.
    function preventDefault(e) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        return this;
    }
    // @function stop(ev: DOMEvent): this
    // Does `stopPropagation` and `preventDefault` at the same time.
    function stop(e) {
        preventDefault(e);
        stopPropagation(e);
        return this;
    }
    // @function getPropagationPath(ev: DOMEvent): Array
    // Compatibility polyfill for [`Event.composedPath()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath).
    // Returns an array containing the `HTMLElement`s that the given DOM event
    // should propagate to (if not stopped).
    function getPropagationPath(ev) {
        if (ev.composedPath) return ev.composedPath();
        var path = [];
        var el = ev.target;
        while(el){
            path.push(el);
            el = el.parentNode;
        }
        return path;
    }
    // @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
    // Gets normalized mouse position from a DOM event relative to the
    // `container` (border excluded) or to the whole page if not specified.
    function getMousePosition(e, container) {
        if (!container) return new Point(e.clientX, e.clientY);
        var scale = getScale(container), offset = scale.boundingClientRect; // left and top  values are in page scale (like the event clientX/Y)
        return new Point(// offset.left/top values are in page scale (like clientX/Y),
        // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
        (e.clientX - offset.left) / scale.x - container.clientLeft, (e.clientY - offset.top) / scale.y - container.clientTop);
    }
    //  except , Safari and
    // We need double the scroll pixels (see #7403 and #4538) for all Browsers
    // except OSX (Mac) -> 3x, Chrome running on Linux 1x
    var wheelPxFactor = Browser.linux && Browser.chrome ? window.devicePixelRatio : Browser.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
    // @function getWheelDelta(ev: DOMEvent): Number
    // Gets normalized wheel delta from a wheel DOM event, in vertical
    // pixels scrolled (negative if scrolling down).
    // Events from pointing devices without precise scrolling are mapped to
    // a best guess of 60 pixels.
    function getWheelDelta(e) {
        return Browser.edge ? e.wheelDeltaY / 2 : e.deltaY && e.deltaMode === 0 ? -e.deltaY / wheelPxFactor : e.deltaY && e.deltaMode === 1 ? -e.deltaY * 20 : e.deltaY && e.deltaMode === 2 ? -e.deltaY * 60 : e.deltaX || e.deltaZ ? 0 : e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : e.detail && Math.abs(e.detail) < 32765 ? -e.detail * 20 : e.detail ? e.detail / -32765 * 60 : 0;
    }
    // check if element really left/entered the event target (for mouseenter/mouseleave)
    function isExternalTarget(el, e) {
        var related = e.relatedTarget;
        if (!related) return true;
        try {
            while(related && related !== el)related = related.parentNode;
        } catch (err) {
            return false;
        }
        return related !== el;
    }
    var DomEvent = {
        __proto__: null,
        on: on,
        off: off,
        stopPropagation: stopPropagation,
        disableScrollPropagation: disableScrollPropagation,
        disableClickPropagation: disableClickPropagation,
        preventDefault: preventDefault,
        stop: stop,
        getPropagationPath: getPropagationPath,
        getMousePosition: getMousePosition,
        getWheelDelta: getWheelDelta,
        isExternalTarget: isExternalTarget,
        addListener: on,
        removeListener: off
    };
    /*
   * @class PosAnimation
   * @aka L.PosAnimation
   * @inherits Evented
   * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
   *
   * @example
   * ```js
   * var myPositionMarker = L.marker([48.864716, 2.294694]).addTo(map);
   *
   * myPositionMarker.on("click", function() {
   * 	var pos = map.latLngToLayerPoint(myPositionMarker.getLatLng());
   * 	pos.y -= 25;
   * 	var fx = new L.PosAnimation();
   *
   * 	fx.once('end',function() {
   * 		pos.y += 25;
   * 		fx.run(myPositionMarker._icon, pos, 0.8);
   * 	});
   *
   * 	fx.run(myPositionMarker._icon, pos, 0.3);
   * });
   *
   * ```
   *
   * @constructor L.PosAnimation()
   * Creates a `PosAnimation` object.
   *
   */ var PosAnimation = Evented.extend({
        // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
        // Run an animation of a given element to a new position, optionally setting
        // duration in seconds (`0.25` by default) and easing linearity factor (3rd
        // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
        // `0.5` by default).
        run: function(el, newPos, duration, easeLinearity) {
            this.stop();
            this._el = el;
            this._inProgress = true;
            this._duration = duration || 0.25;
            this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);
            this._startPos = getPosition(el);
            this._offset = newPos.subtract(this._startPos);
            this._startTime = +new Date();
            // @event start: Event
            // Fired when the animation starts
            this.fire("start");
            this._animate();
        },
        // @method stop()
        // Stops the animation (if currently running).
        stop: function() {
            if (!this._inProgress) return;
            this._step(true);
            this._complete();
        },
        _animate: function() {
            // animation loop
            this._animId = requestAnimFrame(this._animate, this);
            this._step();
        },
        _step: function(round) {
            var elapsed = +new Date() - this._startTime, duration = this._duration * 1000;
            if (elapsed < duration) this._runFrame(this._easeOut(elapsed / duration), round);
            else {
                this._runFrame(1);
                this._complete();
            }
        },
        _runFrame: function(progress, round) {
            var pos = this._startPos.add(this._offset.multiplyBy(progress));
            if (round) pos._round();
            setPosition(this._el, pos);
            // @event step: Event
            // Fired continuously during the animation.
            this.fire("step");
        },
        _complete: function() {
            cancelAnimFrame(this._animId);
            this._inProgress = false;
            // @event end: Event
            // Fired when the animation ends.
            this.fire("end");
        },
        _easeOut: function(t) {
            return 1 - Math.pow(1 - t, this._easeOutPower);
        }
    });
    /*
   * @class Map
   * @aka L.Map
   * @inherits Evented
   *
   * The central class of the API — it is used to create a map on a page and manipulate it.
   *
   * @example
   *
   * ```js
   * // initialize the map on the "map" div with a given center and zoom
   * var map = L.map('map', {
   * 	center: [51.505, -0.09],
   * 	zoom: 13
   * });
   * ```
   *
   */ var Map = Evented.extend({
        options: {
            // @section Map State Options
            // @option crs: CRS = L.CRS.EPSG3857
            // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
            // sure what it means.
            crs: EPSG3857,
            // @option center: LatLng = undefined
            // Initial geographic center of the map
            center: undefined,
            // @option zoom: Number = undefined
            // Initial map zoom level
            zoom: undefined,
            // @option minZoom: Number = *
            // Minimum zoom level of the map.
            // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
            // the lowest of their `minZoom` options will be used instead.
            minZoom: undefined,
            // @option maxZoom: Number = *
            // Maximum zoom level of the map.
            // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
            // the highest of their `maxZoom` options will be used instead.
            maxZoom: undefined,
            // @option layers: Layer[] = []
            // Array of layers that will be added to the map initially
            layers: [],
            // @option maxBounds: LatLngBounds = null
            // When this option is set, the map restricts the view to the given
            // geographical bounds, bouncing the user back if the user tries to pan
            // outside the view. To set the restriction dynamically, use
            // [`setMaxBounds`](#map-setmaxbounds) method.
            maxBounds: undefined,
            // @option renderer: Renderer = *
            // The default method for drawing vector layers on the map. `L.SVG`
            // or `L.Canvas` by default depending on browser support.
            renderer: undefined,
            // @section Animation Options
            // @option zoomAnimation: Boolean = true
            // Whether the map zoom animation is enabled. By default it's enabled
            // in all browsers that support CSS3 Transitions except Android.
            zoomAnimation: true,
            // @option zoomAnimationThreshold: Number = 4
            // Won't animate zoom if the zoom difference exceeds this value.
            zoomAnimationThreshold: 4,
            // @option fadeAnimation: Boolean = true
            // Whether the tile fade animation is enabled. By default it's enabled
            // in all browsers that support CSS3 Transitions except Android.
            fadeAnimation: true,
            // @option markerZoomAnimation: Boolean = true
            // Whether markers animate their zoom with the zoom animation, if disabled
            // they will disappear for the length of the animation. By default it's
            // enabled in all browsers that support CSS3 Transitions except Android.
            markerZoomAnimation: true,
            // @option transform3DLimit: Number = 2^23
            // Defines the maximum size of a CSS translation transform. The default
            // value should not be changed unless a web browser positions layers in
            // the wrong place after doing a large `panBy`.
            transform3DLimit: 8388608,
            // @section Interaction Options
            // @option zoomSnap: Number = 1
            // Forces the map's zoom level to always be a multiple of this, particularly
            // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
            // By default, the zoom level snaps to the nearest integer; lower values
            // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
            // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
            zoomSnap: 1,
            // @option zoomDelta: Number = 1
            // Controls how much the map's zoom level will change after a
            // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
            // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
            // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
            zoomDelta: 1,
            // @option trackResize: Boolean = true
            // Whether the map automatically handles browser window resize to update itself.
            trackResize: true
        },
        initialize: function(id, options) {
            options = setOptions(this, options);
            // Make sure to assign internal flags at the beginning,
            // to avoid inconsistent state in some edge cases.
            this._handlers = [];
            this._layers = {};
            this._zoomBoundLayers = {};
            this._sizeChanged = true;
            this._initContainer(id);
            this._initLayout();
            // hack for https://github.com/Leaflet/Leaflet/issues/1980
            this._onResize = bind(this._onResize, this);
            this._initEvents();
            if (options.maxBounds) this.setMaxBounds(options.maxBounds);
            if (options.zoom !== undefined) this._zoom = this._limitZoom(options.zoom);
            if (options.center && options.zoom !== undefined) this.setView(toLatLng(options.center), options.zoom, {
                reset: true
            });
            this.callInitHooks();
            // don't animate on browsers without hardware-accelerated transitions or old Android/Opera
            this._zoomAnimated = TRANSITION && Browser.any3d && !Browser.mobileOpera && this.options.zoomAnimation;
            // zoom transitions run with the same duration for all layers, so if one of transitionend events
            // happens after starting zoom animation (propagating to the map pane), we know that it ended globally
            if (this._zoomAnimated) {
                this._createAnimProxy();
                on(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);
            }
            this._addLayers(this.options.layers);
        },
        // @section Methods for modifying map state
        // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) with the given
        // animation options.
        setView: function(center, zoom, options) {
            zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
            center = this._limitCenter(toLatLng(center), zoom, this.options.maxBounds);
            options = options || {};
            this._stop();
            if (this._loaded && !options.reset && options !== true) {
                if (options.animate !== undefined) {
                    options.zoom = extend({
                        animate: options.animate
                    }, options.zoom);
                    options.pan = extend({
                        animate: options.animate,
                        duration: options.duration
                    }, options.pan);
                }
                // try animating pan or zoom
                var moved = this._zoom !== zoom ? this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) : this._tryAnimatedPan(center, options.pan);
                if (moved) {
                    // prevent resize handler call, the view will refresh after animation anyway
                    clearTimeout(this._sizeTimer);
                    return this;
                }
            }
            // animation didn't start, just reset the map view
            this._resetView(center, zoom, options.pan && options.pan.noMoveStart);
            return this;
        },
        // @method setZoom(zoom: Number, options?: Zoom/pan options): this
        // Sets the zoom of the map.
        setZoom: function(zoom, options) {
            if (!this._loaded) {
                this._zoom = zoom;
                return this;
            }
            return this.setView(this.getCenter(), zoom, {
                zoom: options
            });
        },
        // @method zoomIn(delta?: Number, options?: Zoom options): this
        // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomIn: function(delta, options) {
            delta = delta || (Browser.any3d ? this.options.zoomDelta : 1);
            return this.setZoom(this._zoom + delta, options);
        },
        // @method zoomOut(delta?: Number, options?: Zoom options): this
        // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomOut: function(delta, options) {
            delta = delta || (Browser.any3d ? this.options.zoomDelta : 1);
            return this.setZoom(this._zoom - delta, options);
        },
        // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified geographical point on the map
        // stationary (e.g. used internally for scroll zoom and double-click zoom).
        // @alternative
        // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
        setZoomAround: function(latlng, zoom, options) {
            var scale = this.getZoomScale(zoom), viewHalf = this.getSize().divideBy(2), containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng), centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale), newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));
            return this.setView(newCenter, zoom, {
                zoom: options
            });
        },
        _getBoundsCenterZoom: function(bounds, options) {
            options = options || {};
            bounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);
            var paddingTL = toPoint(options.paddingTopLeft || options.padding || [
                0,
                0
            ]), paddingBR = toPoint(options.paddingBottomRight || options.padding || [
                0,
                0
            ]), zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));
            zoom = typeof options.maxZoom === "number" ? Math.min(options.maxZoom, zoom) : zoom;
            if (zoom === Infinity) return {
                center: bounds.getCenter(),
                zoom: zoom
            };
            var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2), swPoint = this.project(bounds.getSouthWest(), zoom), nePoint = this.project(bounds.getNorthEast(), zoom), center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);
            return {
                center: center,
                zoom: zoom
            };
        },
        // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets a map view that contains the given geographical bounds with the
        // maximum zoom level possible.
        fitBounds: function(bounds, options) {
            bounds = toLatLngBounds(bounds);
            if (!bounds.isValid()) throw new Error("Bounds are not valid.");
            var target = this._getBoundsCenterZoom(bounds, options);
            return this.setView(target.center, target.zoom, options);
        },
        // @method fitWorld(options?: fitBounds options): this
        // Sets a map view that mostly contains the whole world with the maximum
        // zoom level possible.
        fitWorld: function(options) {
            return this.fitBounds([
                [
                    -90,
                    -180
                ],
                [
                    90,
                    180
                ]
            ], options);
        },
        // @method panTo(latlng: LatLng, options?: Pan options): this
        // Pans the map to a given center.
        panTo: function(center, options) {
            return this.setView(center, this._zoom, {
                pan: options
            });
        },
        // @method panBy(offset: Point, options?: Pan options): this
        // Pans the map by a given number of pixels (animated).
        panBy: function(offset, options) {
            offset = toPoint(offset).round();
            options = options || {};
            if (!offset.x && !offset.y) return this.fire("moveend");
            // If we pan too far, Chrome gets issues with tiles
            // and makes them disappear or appear in the wrong place (slightly offset) #2602
            if (options.animate !== true && !this.getSize().contains(offset)) {
                this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
                return this;
            }
            if (!this._panAnim) {
                this._panAnim = new PosAnimation();
                this._panAnim.on({
                    "step": this._onPanTransitionStep,
                    "end": this._onPanTransitionEnd
                }, this);
            }
            // don't fire movestart if animating inertia
            if (!options.noMoveStart) this.fire("movestart");
            // animate pan unless animate: false specified
            if (options.animate !== false) {
                addClass(this._mapPane, "leaflet-pan-anim");
                var newPos = this._getMapPanePos().subtract(offset).round();
                this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
            } else {
                this._rawPanBy(offset);
                this.fire("move").fire("moveend");
            }
            return this;
        },
        // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) performing a smooth
        // pan-zoom animation.
        flyTo: function(targetCenter, targetZoom, options) {
            options = options || {};
            if (options.animate === false || !Browser.any3d) return this.setView(targetCenter, targetZoom, options);
            this._stop();
            var from = this.project(this.getCenter()), to = this.project(targetCenter), size = this.getSize(), startZoom = this._zoom;
            targetCenter = toLatLng(targetCenter);
            targetZoom = targetZoom === undefined ? startZoom : targetZoom;
            var w0 = Math.max(size.x, size.y), w1 = w0 * this.getZoomScale(startZoom, targetZoom), u1 = to.distanceTo(from) || 1, rho = 1.42, rho2 = rho * rho;
            function r(i) {
                var s1 = i ? -1 : 1, s2 = i ? w1 : w0, t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1, b1 = 2 * s2 * rho2 * u1, b = t1 / b1, sq = Math.sqrt(b * b + 1) - b;
                // workaround for floating point precision bug when sq = 0, log = -Infinite,
                // thus triggering an infinite loop in flyTo
                var log = sq < 0.000000001 ? -18 : Math.log(sq);
                return log;
            }
            function sinh(n) {
                return (Math.exp(n) - Math.exp(-n)) / 2;
            }
            function cosh(n) {
                return (Math.exp(n) + Math.exp(-n)) / 2;
            }
            function tanh(n) {
                return sinh(n) / cosh(n);
            }
            var r0 = r(0);
            function w(s) {
                return w0 * (cosh(r0) / cosh(r0 + rho * s));
            }
            function u(s) {
                return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2;
            }
            function easeOut(t) {
                return 1 - Math.pow(1 - t, 1.5);
            }
            var start = Date.now(), S = (r(1) - r0) / rho, duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;
            function frame() {
                var t = (Date.now() - start) / duration, s = easeOut(t) * S;
                if (t <= 1) {
                    this._flyToFrame = requestAnimFrame(frame, this);
                    this._move(this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom), this.getScaleZoom(w0 / w(s), startZoom), {
                        flyTo: true
                    });
                } else this._move(targetCenter, targetZoom)._moveEnd(true);
            }
            this._moveStart(true, options.noMoveStart);
            frame.call(this);
            return this;
        },
        // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
        // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
        flyToBounds: function(bounds, options) {
            var target = this._getBoundsCenterZoom(bounds, options);
            return this.flyTo(target.center, target.zoom, options);
        },
        // @method setMaxBounds(bounds: LatLngBounds): this
        // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
        setMaxBounds: function(bounds) {
            bounds = toLatLngBounds(bounds);
            if (this.listens("moveend", this._panInsideMaxBounds)) this.off("moveend", this._panInsideMaxBounds);
            if (!bounds.isValid()) {
                this.options.maxBounds = null;
                return this;
            }
            this.options.maxBounds = bounds;
            if (this._loaded) this._panInsideMaxBounds();
            return this.on("moveend", this._panInsideMaxBounds);
        },
        // @method setMinZoom(zoom: Number): this
        // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
        setMinZoom: function(zoom) {
            var oldZoom = this.options.minZoom;
            this.options.minZoom = zoom;
            if (this._loaded && oldZoom !== zoom) {
                this.fire("zoomlevelschange");
                if (this.getZoom() < this.options.minZoom) return this.setZoom(zoom);
            }
            return this;
        },
        // @method setMaxZoom(zoom: Number): this
        // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
        setMaxZoom: function(zoom) {
            var oldZoom = this.options.maxZoom;
            this.options.maxZoom = zoom;
            if (this._loaded && oldZoom !== zoom) {
                this.fire("zoomlevelschange");
                if (this.getZoom() > this.options.maxZoom) return this.setZoom(zoom);
            }
            return this;
        },
        // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
        // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
        panInsideBounds: function(bounds, options) {
            this._enforcingBounds = true;
            var center = this.getCenter(), newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));
            if (!center.equals(newCenter)) this.panTo(newCenter, options);
            this._enforcingBounds = false;
            return this;
        },
        // @method panInside(latlng: LatLng, options?: padding options): this
        // Pans the map the minimum amount to make the `latlng` visible. Use
        // padding options to fit the display to more restricted bounds.
        // If `latlng` is already within the (optionally padded) display bounds,
        // the map will not be panned.
        panInside: function(latlng, options) {
            options = options || {};
            var paddingTL = toPoint(options.paddingTopLeft || options.padding || [
                0,
                0
            ]), paddingBR = toPoint(options.paddingBottomRight || options.padding || [
                0,
                0
            ]), pixelCenter = this.project(this.getCenter()), pixelPoint = this.project(latlng), pixelBounds = this.getPixelBounds(), paddedBounds = toBounds([
                pixelBounds.min.add(paddingTL),
                pixelBounds.max.subtract(paddingBR)
            ]), paddedSize = paddedBounds.getSize();
            if (!paddedBounds.contains(pixelPoint)) {
                this._enforcingBounds = true;
                var centerOffset = pixelPoint.subtract(paddedBounds.getCenter());
                var offset = paddedBounds.extend(pixelPoint).getSize().subtract(paddedSize);
                pixelCenter.x += centerOffset.x < 0 ? -offset.x : offset.x;
                pixelCenter.y += centerOffset.y < 0 ? -offset.y : offset.y;
                this.panTo(this.unproject(pixelCenter), options);
                this._enforcingBounds = false;
            }
            return this;
        },
        // @method invalidateSize(options: Zoom/pan options): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default. If `options.pan` is `false`, panning will not occur.
        // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
        // that it doesn't happen often even if the method is called many
        // times in a row.
        // @alternative
        // @method invalidateSize(animate: Boolean): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default.
        invalidateSize: function(options) {
            if (!this._loaded) return this;
            options = extend({
                animate: false,
                pan: true
            }, options === true ? {
                animate: true
            } : options);
            var oldSize = this.getSize();
            this._sizeChanged = true;
            this._lastCenter = null;
            var newSize = this.getSize(), oldCenter = oldSize.divideBy(2).round(), newCenter = newSize.divideBy(2).round(), offset = oldCenter.subtract(newCenter);
            if (!offset.x && !offset.y) return this;
            if (options.animate && options.pan) this.panBy(offset);
            else {
                if (options.pan) this._rawPanBy(offset);
                this.fire("move");
                if (options.debounceMoveend) {
                    clearTimeout(this._sizeTimer);
                    this._sizeTimer = setTimeout(bind(this.fire, this, "moveend"), 200);
                } else this.fire("moveend");
            }
            // @section Map state change events
            // @event resize: ResizeEvent
            // Fired when the map is resized.
            return this.fire("resize", {
                oldSize: oldSize,
                newSize: newSize
            });
        },
        // @section Methods for modifying map state
        // @method stop(): this
        // Stops the currently running `panTo` or `flyTo` animation, if any.
        stop: function() {
            this.setZoom(this._limitZoom(this._zoom));
            if (!this.options.zoomSnap) this.fire("viewreset");
            return this._stop();
        },
        // @section Geolocation methods
        // @method locate(options?: Locate options): this
        // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
        // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
        // and optionally sets the map view to the user's location with respect to
        // detection accuracy (or to the world view if geolocation failed).
        // Note that, if your page doesn't use HTTPS, this method will fail in
        // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
        // See `Locate options` for more details.
        locate: function(options) {
            options = this._locateOptions = extend({
                timeout: 10000,
                watch: false
            }, options);
            if (!("geolocation" in navigator)) {
                this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported."
                });
                return this;
            }
            var onResponse = bind(this._handleGeolocationResponse, this), onError = bind(this._handleGeolocationError, this);
            if (options.watch) this._locationWatchId = navigator.geolocation.watchPosition(onResponse, onError, options);
            else navigator.geolocation.getCurrentPosition(onResponse, onError, options);
            return this;
        },
        // @method stopLocate(): this
        // Stops watching location previously initiated by `map.locate({watch: true})`
        // and aborts resetting the map view if map.locate was called with
        // `{setView: true}`.
        stopLocate: function() {
            if (navigator.geolocation && navigator.geolocation.clearWatch) navigator.geolocation.clearWatch(this._locationWatchId);
            if (this._locateOptions) this._locateOptions.setView = false;
            return this;
        },
        _handleGeolocationError: function(error) {
            if (!this._container._leaflet_id) return;
            var c = error.code, message = error.message || (c === 1 ? "permission denied" : c === 2 ? "position unavailable" : "timeout");
            if (this._locateOptions.setView && !this._loaded) this.fitWorld();
            // @section Location events
            // @event locationerror: ErrorEvent
            // Fired when geolocation (using the [`locate`](#map-locate) method) failed.
            this.fire("locationerror", {
                code: c,
                message: "Geolocation error: " + message + "."
            });
        },
        _handleGeolocationResponse: function(pos) {
            if (!this._container._leaflet_id) return;
            var lat = pos.coords.latitude, lng = pos.coords.longitude, latlng = new LatLng(lat, lng), bounds = latlng.toBounds(pos.coords.accuracy * 2), options = this._locateOptions;
            if (options.setView) {
                var zoom = this.getBoundsZoom(bounds);
                this.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);
            }
            var data = {
                latlng: latlng,
                bounds: bounds,
                timestamp: pos.timestamp
            };
            for(var i in pos.coords)if (typeof pos.coords[i] === "number") data[i] = pos.coords[i];
            // @event locationfound: LocationEvent
            // Fired when geolocation (using the [`locate`](#map-locate) method)
            // went successfully.
            this.fire("locationfound", data);
        },
        // TODO Appropriate docs section?
        // @section Other Methods
        // @method addHandler(name: String, HandlerClass: Function): this
        // Adds a new `Handler` to the map, given its name and constructor function.
        addHandler: function(name, HandlerClass) {
            if (!HandlerClass) return this;
            var handler = this[name] = new HandlerClass(this);
            this._handlers.push(handler);
            if (this.options[name]) handler.enable();
            return this;
        },
        // @method remove(): this
        // Destroys the map and clears all related event listeners.
        remove: function() {
            this._initEvents(true);
            if (this.options.maxBounds) this.off("moveend", this._panInsideMaxBounds);
            if (this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
            try {
                // throws error in IE6-8
                delete this._container._leaflet_id;
                delete this._containerId;
            } catch (e) {
                /*eslint-disable */ this._container._leaflet_id = undefined;
                /* eslint-enable */ this._containerId = undefined;
            }
            if (this._locationWatchId !== undefined) this.stopLocate();
            this._stop();
            remove(this._mapPane);
            if (this._clearControlPos) this._clearControlPos();
            if (this._resizeRequest) {
                cancelAnimFrame(this._resizeRequest);
                this._resizeRequest = null;
            }
            this._clearHandlers();
            if (this._loaded) // @section Map state change events
            // @event unload: Event
            // Fired when the map is destroyed with [remove](#map-remove) method.
            this.fire("unload");
            var i;
            for(i in this._layers)this._layers[i].remove();
            for(i in this._panes)remove(this._panes[i]);
            this._layers = [];
            this._panes = [];
            delete this._mapPane;
            delete this._renderer;
            return this;
        },
        // @section Other Methods
        // @method createPane(name: String, container?: HTMLElement): HTMLElement
        // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
        // then returns it. The pane is created as a child of `container`, or
        // as a child of the main map pane if not set.
        createPane: function(name, container) {
            var className = "leaflet-pane" + (name ? " leaflet-" + name.replace("Pane", "") + "-pane" : ""), pane = create$1("div", className, container || this._mapPane);
            if (name) this._panes[name] = pane;
            return pane;
        },
        // @section Methods for Getting Map State
        // @method getCenter(): LatLng
        // Returns the geographical center of the map view
        getCenter: function() {
            this._checkIfLoaded();
            if (this._lastCenter && !this._moved()) return this._lastCenter.clone();
            return this.layerPointToLatLng(this._getCenterLayerPoint());
        },
        // @method getZoom(): Number
        // Returns the current zoom level of the map view
        getZoom: function() {
            return this._zoom;
        },
        // @method getBounds(): LatLngBounds
        // Returns the geographical bounds visible in the current map view
        getBounds: function() {
            var bounds = this.getPixelBounds(), sw = this.unproject(bounds.getBottomLeft()), ne = this.unproject(bounds.getTopRight());
            return new LatLngBounds(sw, ne);
        },
        // @method getMinZoom(): Number
        // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
        getMinZoom: function() {
            return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;
        },
        // @method getMaxZoom(): Number
        // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
        getMaxZoom: function() {
            return this.options.maxZoom === undefined ? this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom : this.options.maxZoom;
        },
        // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
        // Returns the maximum zoom level on which the given bounds fit to the map
        // view in its entirety. If `inside` (optional) is set to `true`, the method
        // instead returns the minimum zoom level on which the map view fits into
        // the given bounds in its entirety.
        getBoundsZoom: function(bounds, inside, padding) {
            bounds = toLatLngBounds(bounds);
            padding = toPoint(padding || [
                0,
                0
            ]);
            var zoom = this.getZoom() || 0, min = this.getMinZoom(), max = this.getMaxZoom(), nw = bounds.getNorthWest(), se = bounds.getSouthEast(), size = this.getSize().subtract(padding), boundsSize = toBounds(this.project(se, zoom), this.project(nw, zoom)).getSize(), snap = Browser.any3d ? this.options.zoomSnap : 1, scalex = size.x / boundsSize.x, scaley = size.y / boundsSize.y, scale = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);
            zoom = this.getScaleZoom(scale, zoom);
            if (snap) {
                zoom = Math.round(zoom / (snap / 100)) * (snap / 100); // don't jump if within 1% of a snap level
                zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;
            }
            return Math.max(min, Math.min(max, zoom));
        },
        // @method getSize(): Point
        // Returns the current size of the map container (in pixels).
        getSize: function() {
            if (!this._size || this._sizeChanged) {
                this._size = new Point(this._container.clientWidth || 0, this._container.clientHeight || 0);
                this._sizeChanged = false;
            }
            return this._size.clone();
        },
        // @method getPixelBounds(): Bounds
        // Returns the bounds of the current map view in projected pixel
        // coordinates (sometimes useful in layer and overlay implementations).
        getPixelBounds: function(center, zoom) {
            var topLeftPoint = this._getTopLeftPoint(center, zoom);
            return new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
        },
        // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
        // the map pane? "left point of the map layer" can be confusing, specially
        // since there can be negative offsets.
        // @method getPixelOrigin(): Point
        // Returns the projected pixel coordinates of the top left point of
        // the map layer (useful in custom layer and overlay implementations).
        getPixelOrigin: function() {
            this._checkIfLoaded();
            return this._pixelOrigin;
        },
        // @method getPixelWorldBounds(zoom?: Number): Bounds
        // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
        // If `zoom` is omitted, the map's current zoom level is used.
        getPixelWorldBounds: function(zoom) {
            return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);
        },
        // @section Other Methods
        // @method getPane(pane: String|HTMLElement): HTMLElement
        // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
        getPane: function(pane) {
            return typeof pane === "string" ? this._panes[pane] : pane;
        },
        // @method getPanes(): Object
        // Returns a plain object containing the names of all [panes](#map-pane) as keys and
        // the panes as values.
        getPanes: function() {
            return this._panes;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the map.
        getContainer: function() {
            return this._container;
        },
        // @section Conversion Methods
        // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
        // Returns the scale factor to be applied to a map transition from zoom level
        // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
        getZoomScale: function(toZoom, fromZoom) {
            // TODO replace with universal implementation after refactoring projections
            var crs = this.options.crs;
            fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
            return crs.scale(toZoom) / crs.scale(fromZoom);
        },
        // @method getScaleZoom(scale: Number, fromZoom: Number): Number
        // Returns the zoom level that the map would end up at, if it is at `fromZoom`
        // level and everything is scaled by a factor of `scale`. Inverse of
        // [`getZoomScale`](#map-getZoomScale).
        getScaleZoom: function(scale, fromZoom) {
            var crs = this.options.crs;
            fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
            var zoom = crs.zoom(scale * crs.scale(fromZoom));
            return isNaN(zoom) ? Infinity : zoom;
        },
        // @method project(latlng: LatLng, zoom: Number): Point
        // Projects a geographical coordinate `LatLng` according to the projection
        // of the map's CRS, then scales it according to `zoom` and the CRS's
        // `Transformation`. The result is pixel coordinate relative to
        // the CRS origin.
        project: function(latlng, zoom) {
            zoom = zoom === undefined ? this._zoom : zoom;
            return this.options.crs.latLngToPoint(toLatLng(latlng), zoom);
        },
        // @method unproject(point: Point, zoom: Number): LatLng
        // Inverse of [`project`](#map-project).
        unproject: function(point, zoom) {
            zoom = zoom === undefined ? this._zoom : zoom;
            return this.options.crs.pointToLatLng(toPoint(point), zoom);
        },
        // @method layerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding geographical coordinate (for the current zoom level).
        layerPointToLatLng: function(point) {
            var projectedPoint = toPoint(point).add(this.getPixelOrigin());
            return this.unproject(projectedPoint);
        },
        // @method latLngToLayerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the [origin pixel](#map-getpixelorigin).
        latLngToLayerPoint: function(latlng) {
            var projectedPoint = this.project(toLatLng(latlng))._round();
            return projectedPoint._subtract(this.getPixelOrigin());
        },
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
        // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
        // CRS's bounds.
        // By default this means longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees.
        wrapLatLng: function(latlng) {
            return this.options.crs.wrapLatLng(toLatLng(latlng));
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring that
        // its center is within the CRS's bounds.
        // By default this means the center longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees, and the majority of the bounds
        // overlaps the CRS's bounds.
        wrapLatLngBounds: function(latlng) {
            return this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates according to
        // the map's CRS. By default this measures distance in meters.
        distance: function(latlng1, latlng2) {
            return this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));
        },
        // @method containerPointToLayerPoint(point: Point): Point
        // Given a pixel coordinate relative to the map container, returns the corresponding
        // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
        containerPointToLayerPoint: function(point) {
            return toPoint(point).subtract(this._getMapPanePos());
        },
        // @method layerPointToContainerPoint(point: Point): Point
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding pixel coordinate relative to the map container.
        layerPointToContainerPoint: function(point) {
            return toPoint(point).add(this._getMapPanePos());
        },
        // @method containerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the map container, returns
        // the corresponding geographical coordinate (for the current zoom level).
        containerPointToLatLng: function(point) {
            var layerPoint = this.containerPointToLayerPoint(toPoint(point));
            return this.layerPointToLatLng(layerPoint);
        },
        // @method latLngToContainerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the map container.
        latLngToContainerPoint: function(latlng) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));
        },
        // @method mouseEventToContainerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to the
        // map container where the event took place.
        mouseEventToContainerPoint: function(e) {
            return getMousePosition(e, this._container);
        },
        // @method mouseEventToLayerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to
        // the [origin pixel](#map-getpixelorigin) where the event took place.
        mouseEventToLayerPoint: function(e) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
        },
        // @method mouseEventToLatLng(ev: MouseEvent): LatLng
        // Given a MouseEvent object, returns geographical coordinate where the
        // event took place.
        mouseEventToLatLng: function(e) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
        },
        // map initialization methods
        _initContainer: function(id) {
            var container = this._container = get(id);
            if (!container) throw new Error("Map container not found.");
            else if (container._leaflet_id) throw new Error("Map container is already initialized.");
            on(container, "scroll", this._onScroll, this);
            this._containerId = stamp(container);
        },
        _initLayout: function() {
            var container = this._container;
            this._fadeAnimated = this.options.fadeAnimation && Browser.any3d;
            addClass(container, "leaflet-container" + (Browser.touch ? " leaflet-touch" : "") + (Browser.retina ? " leaflet-retina" : "") + (Browser.ielt9 ? " leaflet-oldie" : "") + (Browser.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
            var position = getStyle(container, "position");
            if (position !== "absolute" && position !== "relative" && position !== "fixed" && position !== "sticky") container.style.position = "relative";
            this._initPanes();
            if (this._initControlPos) this._initControlPos();
        },
        _initPanes: function() {
            var panes = this._panes = {};
            this._paneRenderers = {};
            // @section
            //
            // Panes are DOM elements used to control the ordering of layers on the map. You
            // can access panes with [`map.getPane`](#map-getpane) or
            // [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
            // [`map.createPane`](#map-createpane) method.
            //
            // Every map has the following default panes that differ only in zIndex.
            //
            // @pane mapPane: HTMLElement = 'auto'
            // Pane that contains all other map panes
            this._mapPane = this.createPane("mapPane", this._container);
            setPosition(this._mapPane, new Point(0, 0));
            // @pane tilePane: HTMLElement = 200
            // Pane for `GridLayer`s and `TileLayer`s
            this.createPane("tilePane");
            // @pane overlayPane: HTMLElement = 400
            // Pane for vectors (`Path`s, like `Polyline`s and `Polygon`s), `ImageOverlay`s and `VideoOverlay`s
            this.createPane("overlayPane");
            // @pane shadowPane: HTMLElement = 500
            // Pane for overlay shadows (e.g. `Marker` shadows)
            this.createPane("shadowPane");
            // @pane markerPane: HTMLElement = 600
            // Pane for `Icon`s of `Marker`s
            this.createPane("markerPane");
            // @pane tooltipPane: HTMLElement = 650
            // Pane for `Tooltip`s.
            this.createPane("tooltipPane");
            // @pane popupPane: HTMLElement = 700
            // Pane for `Popup`s.
            this.createPane("popupPane");
            if (!this.options.markerZoomAnimation) {
                addClass(panes.markerPane, "leaflet-zoom-hide");
                addClass(panes.shadowPane, "leaflet-zoom-hide");
            }
        },
        // private methods that modify map state
        // @section Map state change events
        _resetView: function(center, zoom, noMoveStart) {
            setPosition(this._mapPane, new Point(0, 0));
            var loading = !this._loaded;
            this._loaded = true;
            zoom = this._limitZoom(zoom);
            this.fire("viewprereset");
            var zoomChanged = this._zoom !== zoom;
            this._moveStart(zoomChanged, noMoveStart)._move(center, zoom)._moveEnd(zoomChanged);
            // @event viewreset: Event
            // Fired when the map needs to redraw its content (this usually happens
            // on map zoom or load). Very useful for creating custom overlays.
            this.fire("viewreset");
            // @event load: Event
            // Fired when the map is initialized (when its center and zoom are set
            // for the first time).
            if (loading) this.fire("load");
        },
        _moveStart: function(zoomChanged, noMoveStart) {
            // @event zoomstart: Event
            // Fired when the map zoom is about to change (e.g. before zoom animation).
            // @event movestart: Event
            // Fired when the view of the map starts changing (e.g. user starts dragging the map).
            if (zoomChanged) this.fire("zoomstart");
            if (!noMoveStart) this.fire("movestart");
            return this;
        },
        _move: function(center, zoom, data, supressEvent) {
            if (zoom === undefined) zoom = this._zoom;
            var zoomChanged = this._zoom !== zoom;
            this._zoom = zoom;
            this._lastCenter = center;
            this._pixelOrigin = this._getNewPixelOrigin(center);
            if (!supressEvent) {
                // @event zoom: Event
                // Fired repeatedly during any change in zoom level,
                // including zoom and fly animations.
                if (zoomChanged || data && data.pinch) this.fire("zoom", data);
                // @event move: Event
                // Fired repeatedly during any movement of the map,
                // including pan and fly animations.
                this.fire("move", data);
            } else if (data && data.pinch) this.fire("zoom", data);
            return this;
        },
        _moveEnd: function(zoomChanged) {
            // @event zoomend: Event
            // Fired when the map zoom changed, after any animations.
            if (zoomChanged) this.fire("zoomend");
            // @event moveend: Event
            // Fired when the center of the map stops changing
            // (e.g. user stopped dragging the map or after non-centered zoom).
            return this.fire("moveend");
        },
        _stop: function() {
            cancelAnimFrame(this._flyToFrame);
            if (this._panAnim) this._panAnim.stop();
            return this;
        },
        _rawPanBy: function(offset) {
            setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
        },
        _getZoomSpan: function() {
            return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function() {
            if (!this._enforcingBounds) this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function() {
            if (!this._loaded) throw new Error("Set map center and zoom first.");
        },
        // DOM event handling
        // @section Interaction events
        _initEvents: function(remove) {
            this._targets = {};
            this._targets[stamp(this._container)] = this;
            var onOff = remove ? off : on;
            // @event click: MouseEvent
            // Fired when the user clicks (or taps) the map.
            // @event dblclick: MouseEvent
            // Fired when the user double-clicks (or double-taps) the map.
            // @event mousedown: MouseEvent
            // Fired when the user pushes the mouse button on the map.
            // @event mouseup: MouseEvent
            // Fired when the user releases the mouse button on the map.
            // @event mouseover: MouseEvent
            // Fired when the mouse enters the map.
            // @event mouseout: MouseEvent
            // Fired when the mouse leaves the map.
            // @event mousemove: MouseEvent
            // Fired while the mouse moves over the map.
            // @event contextmenu: MouseEvent
            // Fired when the user pushes the right mouse button on the map, prevents
            // default browser context menu from showing if there are listeners on
            // this event. Also fired on mobile when the user holds a single touch
            // for a second (also called long press).
            // @event keypress: KeyboardEvent
            // Fired when the user presses a key from the keyboard that produces a character value while the map is focused.
            // @event keydown: KeyboardEvent
            // Fired when the user presses a key from the keyboard while the map is focused. Unlike the `keypress` event,
            // the `keydown` event is fired for keys that produce a character value and for keys
            // that do not produce a character value.
            // @event keyup: KeyboardEvent
            // Fired when the user releases a key from the keyboard while the map is focused.
            onOff(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this);
            if (this.options.trackResize) onOff(window, "resize", this._onResize, this);
            if (Browser.any3d && this.options.transform3DLimit) (remove ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function() {
            cancelAnimFrame(this._resizeRequest);
            this._resizeRequest = requestAnimFrame(function() {
                this.invalidateSize({
                    debounceMoveend: true
                });
            }, this);
        },
        _onScroll: function() {
            this._container.scrollTop = 0;
            this._container.scrollLeft = 0;
        },
        _onMoveEnd: function() {
            var pos = this._getMapPanePos();
            if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) // https://bugzilla.mozilla.org/show_bug.cgi?id=1203873 but Webkit also have
            // a pixel offset on very high values, see: https://jsfiddle.net/dg6r5hhb/
            this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function(e, type) {
            var targets = [], target, isHover = type === "mouseout" || type === "mouseover", src = e.target || e.srcElement, dragging = false;
            while(src){
                target = this._targets[stamp(src)];
                if (target && (type === "click" || type === "preclick") && this._draggableMoved(target)) {
                    // Prevent firing click after you just dragged an object.
                    dragging = true;
                    break;
                }
                if (target && target.listens(type, true)) {
                    if (isHover && !isExternalTarget(src, e)) break;
                    targets.push(target);
                    if (isHover) break;
                }
                if (src === this._container) break;
                src = src.parentNode;
            }
            if (!targets.length && !dragging && !isHover && this.listens(type, true)) targets = [
                this
            ];
            return targets;
        },
        _isClickDisabled: function(el) {
            while(el && el !== this._container){
                if (el["_leaflet_disable_click"]) return true;
                el = el.parentNode;
            }
        },
        _handleDOMEvent: function(e) {
            var el = e.target || e.srcElement;
            if (!this._loaded || el["_leaflet_disable_events"] || e.type === "click" && this._isClickDisabled(el)) return;
            var type = e.type;
            if (type === "mousedown") // prevents outline when clicking on keyboard-focusable element
            preventOutline(el);
            this._fireDOMEvent(e, type);
        },
        _mouseEvents: [
            "click",
            "dblclick",
            "mouseover",
            "mouseout",
            "contextmenu"
        ],
        _fireDOMEvent: function(e, type, canvasTargets) {
            if (e.type === "click") {
                // Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
                // @event preclick: MouseEvent
                // Fired before mouse click on the map (sometimes useful when you
                // want something to happen on click before any existing click
                // handlers start running).
                var synth = extend({}, e);
                synth.type = "preclick";
                this._fireDOMEvent(synth, synth.type, canvasTargets);
            }
            // Find the layer the event is propagating from and its parents.
            var targets = this._findEventTargets(e, type);
            if (canvasTargets) {
                var filtered = []; // pick only targets with listeners
                for(var i = 0; i < canvasTargets.length; i++)if (canvasTargets[i].listens(type, true)) filtered.push(canvasTargets[i]);
                targets = filtered.concat(targets);
            }
            if (!targets.length) return;
            if (type === "contextmenu") preventDefault(e);
            var target = targets[0];
            var data = {
                originalEvent: e
            };
            if (e.type !== "keypress" && e.type !== "keydown" && e.type !== "keyup") {
                var isMarker = target.getLatLng && (!target._radius || target._radius <= 10);
                data.containerPoint = isMarker ? this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
                data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
                data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
            }
            for(i = 0; i < targets.length; i++){
                targets[i].fire(type, data, true);
                if (data.originalEvent._stopped || targets[i].options.bubblingMouseEvents === false && indexOf(this._mouseEvents, type) !== -1) return;
            }
        },
        _draggableMoved: function(obj) {
            obj = obj.dragging && obj.dragging.enabled() ? obj : this;
            return obj.dragging && obj.dragging.moved() || this.boxZoom && this.boxZoom.moved();
        },
        _clearHandlers: function() {
            for(var i = 0, len = this._handlers.length; i < len; i++)this._handlers[i].disable();
        },
        // @section Other Methods
        // @method whenReady(fn: Function, context?: Object): this
        // Runs the given function `fn` when the map gets initialized with
        // a view (center and zoom) and at least one layer, or immediately
        // if it's already initialized, optionally passing a function context.
        whenReady: function(callback, context) {
            if (this._loaded) callback.call(context || this, {
                target: this
            });
            else this.on("load", callback, context);
            return this;
        },
        // private methods for getting map state
        _getMapPanePos: function() {
            return getPosition(this._mapPane) || new Point(0, 0);
        },
        _moved: function() {
            var pos = this._getMapPanePos();
            return pos && !pos.equals([
                0,
                0
            ]);
        },
        _getTopLeftPoint: function(center, zoom) {
            var pixelOrigin = center && zoom !== undefined ? this._getNewPixelOrigin(center, zoom) : this.getPixelOrigin();
            return pixelOrigin.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function(center, zoom) {
            var viewHalf = this.getSize()._divideBy(2);
            return this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();
        },
        _latLngToNewLayerPoint: function(latlng, zoom, center) {
            var topLeft = this._getNewPixelOrigin(center, zoom);
            return this.project(latlng, zoom)._subtract(topLeft);
        },
        _latLngBoundsToNewLayerBounds: function(latLngBounds, zoom, center) {
            var topLeft = this._getNewPixelOrigin(center, zoom);
            return toBounds([
                this.project(latLngBounds.getSouthWest(), zoom)._subtract(topLeft),
                this.project(latLngBounds.getNorthWest(), zoom)._subtract(topLeft),
                this.project(latLngBounds.getSouthEast(), zoom)._subtract(topLeft),
                this.project(latLngBounds.getNorthEast(), zoom)._subtract(topLeft)
            ]);
        },
        // layer point of the current center
        _getCenterLayerPoint: function() {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        // offset of the specified place to the current center in pixels
        _getCenterOffset: function(latlng) {
            return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
        },
        // adjust center for view to get inside bounds
        _limitCenter: function(center, zoom, bounds) {
            if (!bounds) return center;
            var centerPoint = this.project(center, zoom), viewHalf = this.getSize().divideBy(2), viewBounds = new Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)), offset = this._getBoundsOffset(viewBounds, bounds, zoom);
            // If offset is less than a pixel, ignore.
            // This prevents unstable projections from getting into
            // an infinite loop of tiny offsets.
            if (Math.abs(offset.x) <= 1 && Math.abs(offset.y) <= 1) return center;
            return this.unproject(centerPoint.add(offset), zoom);
        },
        // adjust offset for view to get inside bounds
        _limitOffset: function(offset, bounds) {
            if (!bounds) return offset;
            var viewBounds = this.getPixelBounds(), newBounds = new Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));
            return offset.add(this._getBoundsOffset(newBounds, bounds));
        },
        // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
        _getBoundsOffset: function(pxBounds, maxBounds, zoom) {
            var projectedMaxBounds = toBounds(this.project(maxBounds.getNorthEast(), zoom), this.project(maxBounds.getSouthWest(), zoom)), minOffset = projectedMaxBounds.min.subtract(pxBounds.min), maxOffset = projectedMaxBounds.max.subtract(pxBounds.max), dx = this._rebound(minOffset.x, -maxOffset.x), dy = this._rebound(minOffset.y, -maxOffset.y);
            return new Point(dx, dy);
        },
        _rebound: function(left, right) {
            return left + right > 0 ? Math.round(left - right) / 2 : Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
        },
        _limitZoom: function(zoom) {
            var min = this.getMinZoom(), max = this.getMaxZoom(), snap = Browser.any3d ? this.options.zoomSnap : 1;
            if (snap) zoom = Math.round(zoom / snap) * snap;
            return Math.max(min, Math.min(max, zoom));
        },
        _onPanTransitionStep: function() {
            this.fire("move");
        },
        _onPanTransitionEnd: function() {
            removeClass(this._mapPane, "leaflet-pan-anim");
            this.fire("moveend");
        },
        _tryAnimatedPan: function(center, options) {
            // difference between the new and current centers in pixels
            var offset = this._getCenterOffset(center)._trunc();
            // don't animate too far unless animate: true specified in options
            if ((options && options.animate) !== true && !this.getSize().contains(offset)) return false;
            this.panBy(offset, options);
            return true;
        },
        _createAnimProxy: function() {
            var proxy = this._proxy = create$1("div", "leaflet-proxy leaflet-zoom-animated");
            this._panes.mapPane.appendChild(proxy);
            this.on("zoomanim", function(e) {
                var prop = TRANSFORM, transform = this._proxy.style[prop];
                setTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));
                // workaround for case when transform is the same and so transitionend event is not fired
                if (transform === this._proxy.style[prop] && this._animatingZoom) this._onZoomTransitionEnd();
            }, this);
            this.on("load moveend", this._animMoveEnd, this);
            this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
            remove(this._proxy);
            this.off("load moveend", this._animMoveEnd, this);
            delete this._proxy;
        },
        _animMoveEnd: function() {
            var c = this.getCenter(), z = this.getZoom();
            setTransform(this._proxy, this.project(c, z), this.getZoomScale(z, 1));
        },
        _catchTransitionEnd: function(e) {
            if (this._animatingZoom && e.propertyName.indexOf("transform") >= 0) this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function() {
            return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
        },
        _tryAnimatedZoom: function(center, zoom, options) {
            if (this._animatingZoom) return true;
            options = options || {};
            // don't animate if disabled, not supported or zoom difference is too large
            if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() || Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) return false;
            // offset is the pixel coords of the zoom origin relative to the current center
            var scale = this.getZoomScale(zoom), offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale);
            // don't animate if the zoom origin isn't within one screen from the current center, unless forced
            if (options.animate !== true && !this.getSize().contains(offset)) return false;
            requestAnimFrame(function() {
                this._moveStart(true, options.noMoveStart || false)._animateZoom(center, zoom, true);
            }, this);
            return true;
        },
        _animateZoom: function(center, zoom, startAnim, noUpdate) {
            if (!this._mapPane) return;
            if (startAnim) {
                this._animatingZoom = true;
                // remember what center/zoom to set after animation
                this._animateToCenter = center;
                this._animateToZoom = zoom;
                addClass(this._mapPane, "leaflet-zoom-anim");
            }
            // @section Other Events
            // @event zoomanim: ZoomAnimEvent
            // Fired at least once per zoom animation. For continuous zoom, like pinch zooming, fired once per frame during zoom.
            this.fire("zoomanim", {
                center: center,
                zoom: zoom,
                noUpdate: noUpdate
            });
            if (!this._tempFireZoomEvent) this._tempFireZoomEvent = this._zoom !== this._animateToZoom;
            this._move(this._animateToCenter, this._animateToZoom, undefined, true);
            // Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
            setTimeout(bind(this._onZoomTransitionEnd, this), 250);
        },
        _onZoomTransitionEnd: function() {
            if (!this._animatingZoom) return;
            if (this._mapPane) removeClass(this._mapPane, "leaflet-zoom-anim");
            this._animatingZoom = false;
            this._move(this._animateToCenter, this._animateToZoom, undefined, true);
            if (this._tempFireZoomEvent) this.fire("zoom");
            delete this._tempFireZoomEvent;
            this.fire("move");
            this._moveEnd(true);
        }
    });
    // @section
    // @factory L.map(id: String, options?: Map options)
    // Instantiates a map object given the DOM ID of a `<div>` element
    // and optionally an object literal with `Map options`.
    //
    // @alternative
    // @factory L.map(el: HTMLElement, options?: Map options)
    // Instantiates a map object given an instance of a `<div>` HTML element
    // and optionally an object literal with `Map options`.
    function createMap(id, options) {
        return new Map(id, options);
    }
    /*
   * @class Control
   * @aka L.Control
   * @inherits Class
   *
   * L.Control is a base class for implementing map controls. Handles positioning.
   * All other controls extend from this class.
   */ var Control = Class.extend({
        // @section
        // @aka Control Options
        options: {
            // @option position: String = 'topright'
            // The position of the control (one of the map corners). Possible values are `'topleft'`,
            // `'topright'`, `'bottomleft'` or `'bottomright'`
            position: "topright"
        },
        initialize: function(options) {
            setOptions(this, options);
        },
        /* @section
  	 * Classes extending L.Control will inherit the following methods:
  	 *
  	 * @method getPosition: string
  	 * Returns the position of the control.
  	 */ getPosition: function() {
            return this.options.position;
        },
        // @method setPosition(position: string): this
        // Sets the position of the control.
        setPosition: function(position) {
            var map = this._map;
            if (map) map.removeControl(this);
            this.options.position = position;
            if (map) map.addControl(this);
            return this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTMLElement that contains the control.
        getContainer: function() {
            return this._container;
        },
        // @method addTo(map: Map): this
        // Adds the control to the given map.
        addTo: function(map) {
            this.remove();
            this._map = map;
            var container = this._container = this.onAdd(map), pos = this.getPosition(), corner = map._controlCorners[pos];
            addClass(container, "leaflet-control");
            if (pos.indexOf("bottom") !== -1) corner.insertBefore(container, corner.firstChild);
            else corner.appendChild(container);
            this._map.on("unload", this.remove, this);
            return this;
        },
        // @method remove: this
        // Removes the control from the map it is currently active on.
        remove: function() {
            if (!this._map) return this;
            remove(this._container);
            if (this.onRemove) this.onRemove(this._map);
            this._map.off("unload", this.remove, this);
            this._map = null;
            return this;
        },
        _refocusOnMap: function(e) {
            // if map exists and event is not a keyboard event
            if (this._map && e && e.screenX > 0 && e.screenY > 0) this._map.getContainer().focus();
        }
    });
    var control = function(options) {
        return new Control(options);
    };
    /* @section Extension methods
   * @uninheritable
   *
   * Every control should extend from `L.Control` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): HTMLElement
   * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
   *
   * @method onRemove(map: Map)
   * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
   */ /* @namespace Map
   * @section Methods for Layers and Controls
   */ Map.include({
        // @method addControl(control: Control): this
        // Adds the given control to the map
        addControl: function(control) {
            control.addTo(this);
            return this;
        },
        // @method removeControl(control: Control): this
        // Removes the given control from the map
        removeControl: function(control) {
            control.remove();
            return this;
        },
        _initControlPos: function() {
            var corners = this._controlCorners = {}, l = "leaflet-", container = this._controlContainer = create$1("div", l + "control-container", this._container);
            function createCorner(vSide, hSide) {
                var className = l + vSide + " " + l + hSide;
                corners[vSide + hSide] = create$1("div", className, container);
            }
            createCorner("top", "left");
            createCorner("top", "right");
            createCorner("bottom", "left");
            createCorner("bottom", "right");
        },
        _clearControlPos: function() {
            for(var i in this._controlCorners)remove(this._controlCorners[i]);
            remove(this._controlContainer);
            delete this._controlCorners;
            delete this._controlContainer;
        }
    });
    /*
   * @class Control.Layers
   * @aka L.Control.Layers
   * @inherits Control
   *
   * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](https://leafletjs.com/examples/layers-control/)). Extends `Control`.
   *
   * @example
   *
   * ```js
   * var baseLayers = {
   * 	"Mapbox": mapbox,
   * 	"OpenStreetMap": osm
   * };
   *
   * var overlays = {
   * 	"Marker": marker,
   * 	"Roads": roadsLayer
   * };
   *
   * L.control.layers(baseLayers, overlays).addTo(map);
   * ```
   *
   * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
   *
   * ```js
   * {
   *     "<someName1>": layer1,
   *     "<someName2>": layer2
   * }
   * ```
   *
   * The layer names can contain HTML, which allows you to add additional styling to the items:
   *
   * ```js
   * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
   * ```
   */ var Layers = Control.extend({
        // @section
        // @aka Control.Layers options
        options: {
            // @option collapsed: Boolean = true
            // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
            collapsed: true,
            position: "topright",
            // @option autoZIndex: Boolean = true
            // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
            autoZIndex: true,
            // @option hideSingleBase: Boolean = false
            // If `true`, the base layers in the control will be hidden when there is only one.
            hideSingleBase: false,
            // @option sortLayers: Boolean = false
            // Whether to sort the layers. When `false`, layers will keep the order
            // in which they were added to the control.
            sortLayers: false,
            // @option sortFunction: Function = *
            // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
            // that will be used for sorting the layers, when `sortLayers` is `true`.
            // The function receives both the `L.Layer` instances and their names, as in
            // `sortFunction(layerA, layerB, nameA, nameB)`.
            // By default, it sorts layers alphabetically by their name.
            sortFunction: function(layerA, layerB, nameA, nameB) {
                return nameA < nameB ? -1 : nameB < nameA ? 1 : 0;
            }
        },
        initialize: function(baseLayers, overlays, options) {
            setOptions(this, options);
            this._layerControlInputs = [];
            this._layers = [];
            this._lastZIndex = 0;
            this._handlingClick = false;
            this._preventClick = false;
            for(var i in baseLayers)this._addLayer(baseLayers[i], i);
            for(i in overlays)this._addLayer(overlays[i], i, true);
        },
        onAdd: function(map) {
            this._initLayout();
            this._update();
            this._map = map;
            map.on("zoomend", this._checkDisabledLayers, this);
            for(var i = 0; i < this._layers.length; i++)this._layers[i].layer.on("add remove", this._onLayerChange, this);
            return this._container;
        },
        addTo: function(map) {
            Control.prototype.addTo.call(this, map);
            // Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.
            return this._expandIfNotCollapsed();
        },
        onRemove: function() {
            this._map.off("zoomend", this._checkDisabledLayers, this);
            for(var i = 0; i < this._layers.length; i++)this._layers[i].layer.off("add remove", this._onLayerChange, this);
        },
        // @method addBaseLayer(layer: Layer, name: String): this
        // Adds a base layer (radio button entry) with the given name to the control.
        addBaseLayer: function(layer, name) {
            this._addLayer(layer, name);
            return this._map ? this._update() : this;
        },
        // @method addOverlay(layer: Layer, name: String): this
        // Adds an overlay (checkbox entry) with the given name to the control.
        addOverlay: function(layer, name) {
            this._addLayer(layer, name, true);
            return this._map ? this._update() : this;
        },
        // @method removeLayer(layer: Layer): this
        // Remove the given layer from the control.
        removeLayer: function(layer) {
            layer.off("add remove", this._onLayerChange, this);
            var obj = this._getLayer(stamp(layer));
            if (obj) this._layers.splice(this._layers.indexOf(obj), 1);
            return this._map ? this._update() : this;
        },
        // @method expand(): this
        // Expand the control container if collapsed.
        expand: function() {
            addClass(this._container, "leaflet-control-layers-expanded");
            this._section.style.height = null;
            var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);
            if (acceptableHeight < this._section.clientHeight) {
                addClass(this._section, "leaflet-control-layers-scrollbar");
                this._section.style.height = acceptableHeight + "px";
            } else removeClass(this._section, "leaflet-control-layers-scrollbar");
            this._checkDisabledLayers();
            return this;
        },
        // @method collapse(): this
        // Collapse the control container if expanded.
        collapse: function() {
            removeClass(this._container, "leaflet-control-layers-expanded");
            return this;
        },
        _initLayout: function() {
            var className = "leaflet-control-layers", container = this._container = create$1("div", className), collapsed = this.options.collapsed;
            // makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
            container.setAttribute("aria-haspopup", true);
            disableClickPropagation(container);
            disableScrollPropagation(container);
            var section = this._section = create$1("section", className + "-list");
            if (collapsed) {
                this._map.on("click", this.collapse, this);
                on(container, {
                    mouseenter: this._expandSafely,
                    mouseleave: this.collapse
                }, this);
            }
            var link = this._layersLink = create$1("a", className + "-toggle", container);
            link.href = "#";
            link.title = "Layers";
            link.setAttribute("role", "button");
            on(link, {
                keydown: function(e) {
                    if (e.keyCode === 13) this._expandSafely();
                },
                // Certain screen readers intercept the key event and instead send a click event
                click: function(e) {
                    preventDefault(e);
                    this._expandSafely();
                }
            }, this);
            if (!collapsed) this.expand();
            this._baseLayersList = create$1("div", className + "-base", section);
            this._separator = create$1("div", className + "-separator", section);
            this._overlaysList = create$1("div", className + "-overlays", section);
            container.appendChild(section);
        },
        _getLayer: function(id) {
            for(var i = 0; i < this._layers.length; i++){
                if (this._layers[i] && stamp(this._layers[i].layer) === id) return this._layers[i];
            }
        },
        _addLayer: function(layer, name, overlay) {
            if (this._map) layer.on("add remove", this._onLayerChange, this);
            this._layers.push({
                layer: layer,
                name: name,
                overlay: overlay
            });
            if (this.options.sortLayers) this._layers.sort(bind(function(a, b) {
                return this.options.sortFunction(a.layer, b.layer, a.name, b.name);
            }, this));
            if (this.options.autoZIndex && layer.setZIndex) {
                this._lastZIndex++;
                layer.setZIndex(this._lastZIndex);
            }
            this._expandIfNotCollapsed();
        },
        _update: function() {
            if (!this._container) return this;
            empty(this._baseLayersList);
            empty(this._overlaysList);
            this._layerControlInputs = [];
            var baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;
            for(i = 0; i < this._layers.length; i++){
                obj = this._layers[i];
                this._addItem(obj);
                overlaysPresent = overlaysPresent || obj.overlay;
                baseLayersPresent = baseLayersPresent || !obj.overlay;
                baseLayersCount += !obj.overlay ? 1 : 0;
            }
            // Hide base layers section if there's only one layer.
            if (this.options.hideSingleBase) {
                baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
                this._baseLayersList.style.display = baseLayersPresent ? "" : "none";
            }
            this._separator.style.display = overlaysPresent && baseLayersPresent ? "" : "none";
            return this;
        },
        _onLayerChange: function(e) {
            if (!this._handlingClick) this._update();
            var obj = this._getLayer(stamp(e.target));
            // @namespace Map
            // @section Layer events
            // @event baselayerchange: LayersControlEvent
            // Fired when the base layer is changed through the [layers control](#control-layers).
            // @event overlayadd: LayersControlEvent
            // Fired when an overlay is selected through the [layers control](#control-layers).
            // @event overlayremove: LayersControlEvent
            // Fired when an overlay is deselected through the [layers control](#control-layers).
            // @namespace Control.Layers
            var type = obj.overlay ? e.type === "add" ? "overlayadd" : "overlayremove" : e.type === "add" ? "baselayerchange" : null;
            if (type) this._map.fire(type, obj);
        },
        // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
        _createRadioElement: function(name, checked) {
            var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' + name + '"' + (checked ? ' checked="checked"' : "") + "/>";
            var radioFragment = document.createElement("div");
            radioFragment.innerHTML = radioHtml;
            return radioFragment.firstChild;
        },
        _addItem: function(obj) {
            var label = document.createElement("label"), checked = this._map.hasLayer(obj.layer), input;
            if (obj.overlay) {
                input = document.createElement("input");
                input.type = "checkbox";
                input.className = "leaflet-control-layers-selector";
                input.defaultChecked = checked;
            } else input = this._createRadioElement("leaflet-base-layers_" + stamp(this), checked);
            this._layerControlInputs.push(input);
            input.layerId = stamp(obj.layer);
            on(input, "click", this._onInputClick, this);
            var name = document.createElement("span");
            name.innerHTML = " " + obj.name;
            // Helps from preventing layer control flicker when checkboxes are disabled
            // https://github.com/Leaflet/Leaflet/issues/2771
            var holder = document.createElement("span");
            label.appendChild(holder);
            holder.appendChild(input);
            holder.appendChild(name);
            var container = obj.overlay ? this._overlaysList : this._baseLayersList;
            container.appendChild(label);
            this._checkDisabledLayers();
            return label;
        },
        _onInputClick: function() {
            // expanding the control on mobile with a click can cause adding a layer - we don't want this
            if (this._preventClick) return;
            var inputs = this._layerControlInputs, input, layer;
            var addedLayers = [], removedLayers = [];
            this._handlingClick = true;
            for(var i = inputs.length - 1; i >= 0; i--){
                input = inputs[i];
                layer = this._getLayer(input.layerId).layer;
                if (input.checked) addedLayers.push(layer);
                else if (!input.checked) removedLayers.push(layer);
            }
            // Bugfix issue 2318: Should remove all old layers before readding new ones
            for(i = 0; i < removedLayers.length; i++)if (this._map.hasLayer(removedLayers[i])) this._map.removeLayer(removedLayers[i]);
            for(i = 0; i < addedLayers.length; i++)if (!this._map.hasLayer(addedLayers[i])) this._map.addLayer(addedLayers[i]);
            this._handlingClick = false;
            this._refocusOnMap();
        },
        _checkDisabledLayers: function() {
            var inputs = this._layerControlInputs, input, layer, zoom = this._map.getZoom();
            for(var i = inputs.length - 1; i >= 0; i--){
                input = inputs[i];
                layer = this._getLayer(input.layerId).layer;
                input.disabled = layer.options.minZoom !== undefined && zoom < layer.options.minZoom || layer.options.maxZoom !== undefined && zoom > layer.options.maxZoom;
            }
        },
        _expandIfNotCollapsed: function() {
            if (this._map && !this.options.collapsed) this.expand();
            return this;
        },
        _expandSafely: function() {
            var section = this._section;
            this._preventClick = true;
            on(section, "click", preventDefault);
            this.expand();
            var that = this;
            setTimeout(function() {
                off(section, "click", preventDefault);
                that._preventClick = false;
            });
        }
    });
    // @factory L.control.layers(baselayers?: Object, overlays?: Object, options?: Control.Layers options)
    // Creates a layers control with the given layers. Base layers will be switched with radio buttons, while overlays will be switched with checkboxes. Note that all base layers should be passed in the base layers object, but only one should be added to the map during map instantiation.
    var layers = function(baseLayers, overlays, options) {
        return new Layers(baseLayers, overlays, options);
    };
    /*
   * @class Control.Zoom
   * @aka L.Control.Zoom
   * @inherits Control
   *
   * A basic zoom control with two buttons (zoom in and zoom out). It is put on the map by default unless you set its [`zoomControl` option](#map-zoomcontrol) to `false`. Extends `Control`.
   */ var Zoom = Control.extend({
        // @section
        // @aka Control.Zoom options
        options: {
            position: "topleft",
            // @option zoomInText: String = '<span aria-hidden="true">+</span>'
            // The text set on the 'zoom in' button.
            zoomInText: '<span aria-hidden="true">+</span>',
            // @option zoomInTitle: String = 'Zoom in'
            // The title set on the 'zoom in' button.
            zoomInTitle: "Zoom in",
            // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
            // The text set on the 'zoom out' button.
            zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
            // @option zoomOutTitle: String = 'Zoom out'
            // The title set on the 'zoom out' button.
            zoomOutTitle: "Zoom out"
        },
        onAdd: function(map) {
            var zoomName = "leaflet-control-zoom", container = create$1("div", zoomName + " leaflet-bar"), options = this.options;
            this._zoomInButton = this._createButton(options.zoomInText, options.zoomInTitle, zoomName + "-in", container, this._zoomIn);
            this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle, zoomName + "-out", container, this._zoomOut);
            this._updateDisabled();
            map.on("zoomend zoomlevelschange", this._updateDisabled, this);
            return container;
        },
        onRemove: function(map) {
            map.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function() {
            this._disabled = true;
            this._updateDisabled();
            return this;
        },
        enable: function() {
            this._disabled = false;
            this._updateDisabled();
            return this;
        },
        _zoomIn: function(e) {
            if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
        },
        _zoomOut: function(e) {
            if (!this._disabled && this._map._zoom > this._map.getMinZoom()) this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
        },
        _createButton: function(html, title, className, container, fn) {
            var link = create$1("a", className, container);
            link.innerHTML = html;
            link.href = "#";
            link.title = title;
            /*
  		 * Will force screen readers like VoiceOver to read this as "Zoom in - button"
  		 */ link.setAttribute("role", "button");
            link.setAttribute("aria-label", title);
            disableClickPropagation(link);
            on(link, "click", stop);
            on(link, "click", fn, this);
            on(link, "click", this._refocusOnMap, this);
            return link;
        },
        _updateDisabled: function() {
            var map = this._map, className = "leaflet-disabled";
            removeClass(this._zoomInButton, className);
            removeClass(this._zoomOutButton, className);
            this._zoomInButton.setAttribute("aria-disabled", "false");
            this._zoomOutButton.setAttribute("aria-disabled", "false");
            if (this._disabled || map._zoom === map.getMinZoom()) {
                addClass(this._zoomOutButton, className);
                this._zoomOutButton.setAttribute("aria-disabled", "true");
            }
            if (this._disabled || map._zoom === map.getMaxZoom()) {
                addClass(this._zoomInButton, className);
                this._zoomInButton.setAttribute("aria-disabled", "true");
            }
        }
    });
    // @namespace Map
    // @section Control options
    // @option zoomControl: Boolean = true
    // Whether a [zoom control](#control-zoom) is added to the map by default.
    Map.mergeOptions({
        zoomControl: true
    });
    Map.addInitHook(function() {
        if (this.options.zoomControl) {
            // @section Controls
            // @property zoomControl: Control.Zoom
            // The default zoom control (only available if the
            // [`zoomControl` option](#map-zoomcontrol) was `true` when creating the map).
            this.zoomControl = new Zoom();
            this.addControl(this.zoomControl);
        }
    });
    // @namespace Control.Zoom
    // @factory L.control.zoom(options: Control.Zoom options)
    // Creates a zoom control
    var zoom = function(options) {
        return new Zoom(options);
    };
    /*
   * @class Control.Scale
   * @aka L.Control.Scale
   * @inherits Control
   *
   * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
   *
   * @example
   *
   * ```js
   * L.control.scale().addTo(map);
   * ```
   */ var Scale = Control.extend({
        // @section
        // @aka Control.Scale options
        options: {
            position: "bottomleft",
            // @option maxWidth: Number = 100
            // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
            maxWidth: 100,
            // @option metric: Boolean = True
            // Whether to show the metric scale line (m/km).
            metric: true,
            // @option imperial: Boolean = True
            // Whether to show the imperial scale line (mi/ft).
            imperial: true
        },
        onAdd: function(map) {
            var className = "leaflet-control-scale", container = create$1("div", className), options = this.options;
            this._addScales(options, className + "-line", container);
            map.on(options.updateWhenIdle ? "moveend" : "move", this._update, this);
            map.whenReady(this._update, this);
            return container;
        },
        onRemove: function(map) {
            map.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function(options, className, container) {
            if (options.metric) this._mScale = create$1("div", className, container);
            if (options.imperial) this._iScale = create$1("div", className, container);
        },
        _update: function() {
            var map = this._map, y = map.getSize().y / 2;
            var maxMeters = map.distance(map.containerPointToLatLng([
                0,
                y
            ]), map.containerPointToLatLng([
                this.options.maxWidth,
                y
            ]));
            this._updateScales(maxMeters);
        },
        _updateScales: function(maxMeters) {
            if (this.options.metric && maxMeters) this._updateMetric(maxMeters);
            if (this.options.imperial && maxMeters) this._updateImperial(maxMeters);
        },
        _updateMetric: function(maxMeters) {
            var meters = this._getRoundNum(maxMeters), label = meters < 1000 ? meters + " m" : meters / 1000 + " km";
            this._updateScale(this._mScale, label, meters / maxMeters);
        },
        _updateImperial: function(maxMeters) {
            var maxFeet = maxMeters * 3.2808399, maxMiles, miles, feet;
            if (maxFeet > 5280) {
                maxMiles = maxFeet / 5280;
                miles = this._getRoundNum(maxMiles);
                this._updateScale(this._iScale, miles + " mi", miles / maxMiles);
            } else {
                feet = this._getRoundNum(maxFeet);
                this._updateScale(this._iScale, feet + " ft", feet / maxFeet);
            }
        },
        _updateScale: function(scale, text, ratio) {
            scale.style.width = Math.round(this.options.maxWidth * ratio) + "px";
            scale.innerHTML = text;
        },
        _getRoundNum: function(num) {
            var pow10 = Math.pow(10, (Math.floor(num) + "").length - 1), d = num / pow10;
            d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1;
            return pow10 * d;
        }
    });
    // @factory L.control.scale(options?: Control.Scale options)
    // Creates an scale control with the given options.
    var scale = function(options) {
        return new Scale(options);
    };
    var ukrainianFlag = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>';
    /*
   * @class Control.Attribution
   * @aka L.Control.Attribution
   * @inherits Control
   *
   * The attribution control allows you to display attribution data in a small text box on a map. It is put on the map by default unless you set its [`attributionControl` option](#map-attributioncontrol) to `false`, and it fetches attribution texts from layers with the [`getAttribution` method](#layer-getattribution) automatically. Extends Control.
   */ var Attribution = Control.extend({
        // @section
        // @aka Control.Attribution options
        options: {
            position: "bottomright",
            // @option prefix: String|false = 'Leaflet'
            // The HTML text shown before the attributions. Pass `false` to disable.
            prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (Browser.inlineSvg ? ukrainianFlag + " " : "") + "Leaflet</a>"
        },
        initialize: function(options) {
            setOptions(this, options);
            this._attributions = {};
        },
        onAdd: function(map) {
            map.attributionControl = this;
            this._container = create$1("div", "leaflet-control-attribution");
            disableClickPropagation(this._container);
            // TODO ugly, refactor
            for(var i in map._layers)if (map._layers[i].getAttribution) this.addAttribution(map._layers[i].getAttribution());
            this._update();
            map.on("layeradd", this._addAttribution, this);
            return this._container;
        },
        onRemove: function(map) {
            map.off("layeradd", this._addAttribution, this);
        },
        _addAttribution: function(ev) {
            if (ev.layer.getAttribution) {
                this.addAttribution(ev.layer.getAttribution());
                ev.layer.once("remove", function() {
                    this.removeAttribution(ev.layer.getAttribution());
                }, this);
            }
        },
        // @method setPrefix(prefix: String|false): this
        // The HTML text shown before the attributions. Pass `false` to disable.
        setPrefix: function(prefix) {
            this.options.prefix = prefix;
            this._update();
            return this;
        },
        // @method addAttribution(text: String): this
        // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
        addAttribution: function(text) {
            if (!text) return this;
            if (!this._attributions[text]) this._attributions[text] = 0;
            this._attributions[text]++;
            this._update();
            return this;
        },
        // @method removeAttribution(text: String): this
        // Removes an attribution text.
        removeAttribution: function(text) {
            if (!text) return this;
            if (this._attributions[text]) {
                this._attributions[text]--;
                this._update();
            }
            return this;
        },
        _update: function() {
            if (!this._map) return;
            var attribs = [];
            for(var i in this._attributions)if (this._attributions[i]) attribs.push(i);
            var prefixAndAttribs = [];
            if (this.options.prefix) prefixAndAttribs.push(this.options.prefix);
            if (attribs.length) prefixAndAttribs.push(attribs.join(", "));
            this._container.innerHTML = prefixAndAttribs.join(' <span aria-hidden="true">|</span> ');
        }
    });
    // @namespace Map
    // @section Control options
    // @option attributionControl: Boolean = true
    // Whether a [attribution control](#control-attribution) is added to the map by default.
    Map.mergeOptions({
        attributionControl: true
    });
    Map.addInitHook(function() {
        if (this.options.attributionControl) new Attribution().addTo(this);
    });
    // @namespace Control.Attribution
    // @factory L.control.attribution(options: Control.Attribution options)
    // Creates an attribution control.
    var attribution = function(options) {
        return new Attribution(options);
    };
    Control.Layers = Layers;
    Control.Zoom = Zoom;
    Control.Scale = Scale;
    Control.Attribution = Attribution;
    control.layers = layers;
    control.zoom = zoom;
    control.scale = scale;
    control.attribution = attribution;
    /*
  	L.Handler is a base class for handler classes that are used internally to inject
  	interaction features like dragging to classes like Map and Marker.
  */ // @class Handler
    // @aka L.Handler
    // Abstract class for map interaction handlers
    var Handler = Class.extend({
        initialize: function(map) {
            this._map = map;
        },
        // @method enable(): this
        // Enables the handler
        enable: function() {
            if (this._enabled) return this;
            this._enabled = true;
            this.addHooks();
            return this;
        },
        // @method disable(): this
        // Disables the handler
        disable: function() {
            if (!this._enabled) return this;
            this._enabled = false;
            this.removeHooks();
            return this;
        },
        // @method enabled(): Boolean
        // Returns `true` if the handler is enabled
        enabled: function() {
            return !!this._enabled;
        }
    });
    // @section There is static function which can be called without instantiating L.Handler:
    // @function addTo(map: Map, name: String): this
    // Adds a new Handler to the given map with the given name.
    Handler.addTo = function(map, name) {
        map.addHandler(name, this);
        return this;
    };
    var Mixin = {
        Events: Events
    };
    /*
   * @class Draggable
   * @aka L.Draggable
   * @inherits Evented
   *
   * A class for making DOM elements draggable (including touch support).
   * Used internally for map and marker dragging. Only works for elements
   * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
   *
   * @example
   * ```js
   * var draggable = new L.Draggable(elementToDrag);
   * draggable.enable();
   * ```
   */ var START = Browser.touch ? "touchstart mousedown" : "mousedown";
    var Draggable = Evented.extend({
        options: {
            // @section
            // @aka Draggable options
            // @option clickTolerance: Number = 3
            // The max number of pixels a user can shift the mouse pointer during a click
            // for it to be considered a valid click (as opposed to a mouse drag).
            clickTolerance: 3
        },
        // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
        // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
        initialize: function(element, dragStartTarget, preventOutline, options) {
            setOptions(this, options);
            this._element = element;
            this._dragStartTarget = dragStartTarget || element;
            this._preventOutline = preventOutline;
        },
        // @method enable()
        // Enables the dragging ability
        enable: function() {
            if (this._enabled) return;
            on(this._dragStartTarget, START, this._onDown, this);
            this._enabled = true;
        },
        // @method disable()
        // Disables the dragging ability
        disable: function() {
            if (!this._enabled) return;
            // If we're currently dragging this draggable,
            // disabling it counts as first ending the drag.
            if (Draggable._dragging === this) this.finishDrag(true);
            off(this._dragStartTarget, START, this._onDown, this);
            this._enabled = false;
            this._moved = false;
        },
        _onDown: function(e) {
            // Ignore the event if disabled; this happens in IE11
            // under some circumstances, see #3666.
            if (!this._enabled) return;
            this._moved = false;
            if (hasClass(this._element, "leaflet-zoom-anim")) return;
            if (e.touches && e.touches.length !== 1) {
                // Finish dragging to avoid conflict with touchZoom
                if (Draggable._dragging === this) this.finishDrag();
                return;
            }
            if (Draggable._dragging || e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) return;
            Draggable._dragging = this; // Prevent dragging multiple objects at once.
            if (this._preventOutline) preventOutline(this._element);
            disableImageDrag();
            disableTextSelection();
            if (this._moving) return;
            // @event down: Event
            // Fired when a drag is about to start.
            this.fire("down");
            var first = e.touches ? e.touches[0] : e, sizedParent = getSizedParentNode(this._element);
            this._startPoint = new Point(first.clientX, first.clientY);
            this._startPos = getPosition(this._element);
            // Cache the scale, so that we can continuously compensate for it during drag (_onMove).
            this._parentScale = getScale(sizedParent);
            var mouseevent = e.type === "mousedown";
            on(document, mouseevent ? "mousemove" : "touchmove", this._onMove, this);
            on(document, mouseevent ? "mouseup" : "touchend touchcancel", this._onUp, this);
        },
        _onMove: function(e) {
            // Ignore the event if disabled; this happens in IE11
            // under some circumstances, see #3666.
            if (!this._enabled) return;
            if (e.touches && e.touches.length > 1) {
                this._moved = true;
                return;
            }
            var first = e.touches && e.touches.length === 1 ? e.touches[0] : e, offset = new Point(first.clientX, first.clientY)._subtract(this._startPoint);
            if (!offset.x && !offset.y) return;
            if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) return;
            // We assume that the parent container's position, border and scale do not change for the duration of the drag.
            // Therefore there is no need to account for the position and border (they are eliminated by the subtraction)
            // and we can use the cached value for the scale.
            offset.x /= this._parentScale.x;
            offset.y /= this._parentScale.y;
            preventDefault(e);
            if (!this._moved) {
                // @event dragstart: Event
                // Fired when a drag starts
                this.fire("dragstart");
                this._moved = true;
                addClass(document.body, "leaflet-dragging");
                this._lastTarget = e.target || e.srcElement;
                // IE and Edge do not give the <use> element, so fetch it
                // if necessary
                if (window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance) this._lastTarget = this._lastTarget.correspondingUseElement;
                addClass(this._lastTarget, "leaflet-drag-target");
            }
            this._newPos = this._startPos.add(offset);
            this._moving = true;
            this._lastEvent = e;
            this._updatePosition();
        },
        _updatePosition: function() {
            var e = {
                originalEvent: this._lastEvent
            };
            // @event predrag: Event
            // Fired continuously during dragging *before* each corresponding
            // update of the element's position.
            this.fire("predrag", e);
            setPosition(this._element, this._newPos);
            // @event drag: Event
            // Fired continuously during dragging.
            this.fire("drag", e);
        },
        _onUp: function() {
            // Ignore the event if disabled; this happens in IE11
            // under some circumstances, see #3666.
            if (!this._enabled) return;
            this.finishDrag();
        },
        finishDrag: function(noInertia) {
            removeClass(document.body, "leaflet-dragging");
            if (this._lastTarget) {
                removeClass(this._lastTarget, "leaflet-drag-target");
                this._lastTarget = null;
            }
            off(document, "mousemove touchmove", this._onMove, this);
            off(document, "mouseup touchend touchcancel", this._onUp, this);
            enableImageDrag();
            enableTextSelection();
            var fireDragend = this._moved && this._moving;
            this._moving = false;
            Draggable._dragging = false;
            if (fireDragend) // @event dragend: DragEndEvent
            // Fired when the drag ends.
            this.fire("dragend", {
                noInertia: noInertia,
                distance: this._newPos.distanceTo(this._startPos)
            });
        }
    });
    /*
   * @namespace PolyUtil
   * Various utility functions for polygon geometries.
   */ /* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
   * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
   * Used by Leaflet to only show polygon points that are on the screen or near, increasing
   * performance. Note that polygon points needs different algorithm for clipping
   * than polyline, so there's a separate method for it.
   */ function clipPolygon(points, bounds, round) {
        var clippedPoints, edges = [
            1,
            4,
            2,
            8
        ], i, j, k, a, b, len, edge, p;
        for(i = 0, len = points.length; i < len; i++)points[i]._code = _getBitCode(points[i], bounds);
        // for each edge (left, bottom, right, top)
        for(k = 0; k < 4; k++){
            edge = edges[k];
            clippedPoints = [];
            for(i = 0, len = points.length, j = len - 1; i < len; j = i++){
                a = points[i];
                b = points[j];
                // if a is inside the clip window
                if (!(a._code & edge)) {
                    // if b is outside the clip window (a->b goes out of screen)
                    if (b._code & edge) {
                        p = _getEdgeIntersection(b, a, edge, bounds, round);
                        p._code = _getBitCode(p, bounds);
                        clippedPoints.push(p);
                    }
                    clippedPoints.push(a);
                // else if b is inside the clip window (a->b enters the screen)
                } else if (!(b._code & edge)) {
                    p = _getEdgeIntersection(b, a, edge, bounds, round);
                    p._code = _getBitCode(p, bounds);
                    clippedPoints.push(p);
                }
            }
            points = clippedPoints;
        }
        return points;
    }
    /* @function polygonCenter(latlngs: LatLng[], crs: CRS): LatLng
   * Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the passed LatLngs (first ring) from a polygon.
   */ function polygonCenter(latlngs, crs) {
        var i, j, p1, p2, f, area, x, y, center;
        if (!latlngs || latlngs.length === 0) throw new Error("latlngs not passed");
        if (!isFlat(latlngs)) {
            console.warn("latlngs are not flat! Only the first ring will be used");
            latlngs = latlngs[0];
        }
        var centroidLatLng = toLatLng([
            0,
            0
        ]);
        var bounds = toLatLngBounds(latlngs);
        var areaBounds = bounds.getNorthWest().distanceTo(bounds.getSouthWest()) * bounds.getNorthEast().distanceTo(bounds.getNorthWest());
        // tests showed that below 1700 rounding errors are happening
        if (areaBounds < 1700) // getting a inexact center, to move the latlngs near to [0, 0] to prevent rounding errors
        centroidLatLng = centroid(latlngs);
        var len = latlngs.length;
        var points = [];
        for(i = 0; i < len; i++){
            var latlng = toLatLng(latlngs[i]);
            points.push(crs.project(toLatLng([
                latlng.lat - centroidLatLng.lat,
                latlng.lng - centroidLatLng.lng
            ])));
        }
        area = x = y = 0;
        // polygon centroid algorithm;
        for(i = 0, j = len - 1; i < len; j = i++){
            p1 = points[i];
            p2 = points[j];
            f = p1.y * p2.x - p2.y * p1.x;
            x += (p1.x + p2.x) * f;
            y += (p1.y + p2.y) * f;
            area += f * 3;
        }
        if (area === 0) // Polygon is so small that all points are on same pixel.
        center = points[0];
        else center = [
            x / area,
            y / area
        ];
        var latlngCenter = crs.unproject(toPoint(center));
        return toLatLng([
            latlngCenter.lat + centroidLatLng.lat,
            latlngCenter.lng + centroidLatLng.lng
        ]);
    }
    /* @function centroid(latlngs: LatLng[]): LatLng
   * Returns the 'center of mass' of the passed LatLngs.
   */ function centroid(coords) {
        var latSum = 0;
        var lngSum = 0;
        var len = 0;
        for(var i = 0; i < coords.length; i++){
            var latlng = toLatLng(coords[i]);
            latSum += latlng.lat;
            lngSum += latlng.lng;
            len++;
        }
        return toLatLng([
            latSum / len,
            lngSum / len
        ]);
    }
    var PolyUtil = {
        __proto__: null,
        clipPolygon: clipPolygon,
        polygonCenter: polygonCenter,
        centroid: centroid
    };
    /*
   * @namespace LineUtil
   *
   * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.
   */ // Simplify polyline with vertex reduction and Douglas-Peucker simplification.
    // Improves rendering performance dramatically by lessening the number of points to draw.
    // @function simplify(points: Point[], tolerance: Number): Point[]
    // Dramatically reduces the number of points in a polyline while retaining
    // its shape and returns a new array of simplified points, using the
    // [Ramer-Douglas-Peucker algorithm](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm).
    // Used for a huge performance boost when processing/displaying Leaflet polylines for
    // each zoom level and also reducing visual noise. tolerance affects the amount of
    // simplification (lesser value means higher quality but slower and with more points).
    // Also released as a separated micro-library [Simplify.js](https://mourner.github.io/simplify-js/).
    function simplify(points, tolerance) {
        if (!tolerance || !points.length) return points.slice();
        var sqTolerance = tolerance * tolerance;
        // stage 1: vertex reduction
        points = _reducePoints(points, sqTolerance);
        // stage 2: Douglas-Peucker simplification
        points = _simplifyDP(points, sqTolerance);
        return points;
    }
    // @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
    // Returns the distance between point `p` and segment `p1` to `p2`.
    function pointToSegmentDistance(p, p1, p2) {
        return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));
    }
    // @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
    // Returns the closest point from a point `p` on a segment `p1` to `p2`.
    function closestPointOnSegment(p, p1, p2) {
        return _sqClosestPointOnSegment(p, p1, p2);
    }
    // Ramer-Douglas-Peucker simplification, see https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm
    function _simplifyDP(points, sqTolerance) {
        var len = points.length, ArrayConstructor = typeof Uint8Array !== "undefined" ? Uint8Array : Array, markers = new ArrayConstructor(len);
        markers[0] = markers[len - 1] = 1;
        _simplifyDPStep(points, markers, sqTolerance, 0, len - 1);
        var i, newPoints = [];
        for(i = 0; i < len; i++)if (markers[i]) newPoints.push(points[i]);
        return newPoints;
    }
    function _simplifyDPStep(points, markers, sqTolerance, first, last) {
        var maxSqDist = 0, index, i, sqDist;
        for(i = first + 1; i <= last - 1; i++){
            sqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);
            if (sqDist > maxSqDist) {
                index = i;
                maxSqDist = sqDist;
            }
        }
        if (maxSqDist > sqTolerance) {
            markers[index] = 1;
            _simplifyDPStep(points, markers, sqTolerance, first, index);
            _simplifyDPStep(points, markers, sqTolerance, index, last);
        }
    }
    // reduce points that are too close to each other to a single point
    function _reducePoints(points, sqTolerance) {
        var reducedPoints = [
            points[0]
        ];
        for(var i = 1, prev = 0, len = points.length; i < len; i++)if (_sqDist(points[i], points[prev]) > sqTolerance) {
            reducedPoints.push(points[i]);
            prev = i;
        }
        if (prev < len - 1) reducedPoints.push(points[len - 1]);
        return reducedPoints;
    }
    var _lastCode;
    // @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
    // Clips the segment a to b by rectangular bounds with the
    // [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
    // (modifying the segment points directly!). Used by Leaflet to only show polyline
    // points that are on the screen or near, increasing performance.
    function clipSegment(a, b, bounds, useLastCode, round) {
        var codeA = useLastCode ? _lastCode : _getBitCode(a, bounds), codeB = _getBitCode(b, bounds), codeOut, p, newCode;
        // save 2nd code to avoid calculating it on the next segment
        _lastCode = codeB;
        while(true){
            // if a,b is inside the clip window (trivial accept)
            if (!(codeA | codeB)) return [
                a,
                b
            ];
            // if a,b is outside the clip window (trivial reject)
            if (codeA & codeB) return false;
            // other cases
            codeOut = codeA || codeB;
            p = _getEdgeIntersection(a, b, codeOut, bounds, round);
            newCode = _getBitCode(p, bounds);
            if (codeOut === codeA) {
                a = p;
                codeA = newCode;
            } else {
                b = p;
                codeB = newCode;
            }
        }
    }
    function _getEdgeIntersection(a, b, code, bounds, round) {
        var dx = b.x - a.x, dy = b.y - a.y, min = bounds.min, max = bounds.max, x, y;
        if (code & 8) {
            x = a.x + dx * (max.y - a.y) / dy;
            y = max.y;
        } else if (code & 4) {
            x = a.x + dx * (min.y - a.y) / dy;
            y = min.y;
        } else if (code & 2) {
            x = max.x;
            y = a.y + dy * (max.x - a.x) / dx;
        } else if (code & 1) {
            x = min.x;
            y = a.y + dy * (min.x - a.x) / dx;
        }
        return new Point(x, y, round);
    }
    function _getBitCode(p, bounds) {
        var code = 0;
        if (p.x < bounds.min.x) code |= 1;
        else if (p.x > bounds.max.x) code |= 2;
        if (p.y < bounds.min.y) code |= 4;
        else if (p.y > bounds.max.y) code |= 8;
        return code;
    }
    // square distance (to avoid unnecessary Math.sqrt calls)
    function _sqDist(p1, p2) {
        var dx = p2.x - p1.x, dy = p2.y - p1.y;
        return dx * dx + dy * dy;
    }
    // return closest point on segment or distance to that point
    function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
        var x = p1.x, y = p1.y, dx = p2.x - x, dy = p2.y - y, dot = dx * dx + dy * dy, t;
        if (dot > 0) {
            t = ((p.x - x) * dx + (p.y - y) * dy) / dot;
            if (t > 1) {
                x = p2.x;
                y = p2.y;
            } else if (t > 0) {
                x += dx * t;
                y += dy * t;
            }
        }
        dx = p.x - x;
        dy = p.y - y;
        return sqDist ? dx * dx + dy * dy : new Point(x, y);
    }
    // @function isFlat(latlngs: LatLng[]): Boolean
    // Returns true if `latlngs` is a flat array, false is nested.
    function isFlat(latlngs) {
        return !isArray(latlngs[0]) || typeof latlngs[0][0] !== "object" && typeof latlngs[0][0] !== "undefined";
    }
    function _flat(latlngs) {
        console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead.");
        return isFlat(latlngs);
    }
    /* @function polylineCenter(latlngs: LatLng[], crs: CRS): LatLng
   * Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the passed LatLngs (first ring) from a polyline.
   */ function polylineCenter(latlngs, crs) {
        var i, halfDist, segDist, dist, p1, p2, ratio, center;
        if (!latlngs || latlngs.length === 0) throw new Error("latlngs not passed");
        if (!isFlat(latlngs)) {
            console.warn("latlngs are not flat! Only the first ring will be used");
            latlngs = latlngs[0];
        }
        var centroidLatLng = toLatLng([
            0,
            0
        ]);
        var bounds = toLatLngBounds(latlngs);
        var areaBounds = bounds.getNorthWest().distanceTo(bounds.getSouthWest()) * bounds.getNorthEast().distanceTo(bounds.getNorthWest());
        // tests showed that below 1700 rounding errors are happening
        if (areaBounds < 1700) // getting a inexact center, to move the latlngs near to [0, 0] to prevent rounding errors
        centroidLatLng = centroid(latlngs);
        var len = latlngs.length;
        var points = [];
        for(i = 0; i < len; i++){
            var latlng = toLatLng(latlngs[i]);
            points.push(crs.project(toLatLng([
                latlng.lat - centroidLatLng.lat,
                latlng.lng - centroidLatLng.lng
            ])));
        }
        for(i = 0, halfDist = 0; i < len - 1; i++)halfDist += points[i].distanceTo(points[i + 1]) / 2;
        // The line is so small in the current view that all points are on the same pixel.
        if (halfDist === 0) center = points[0];
        else for(i = 0, dist = 0; i < len - 1; i++){
            p1 = points[i];
            p2 = points[i + 1];
            segDist = p1.distanceTo(p2);
            dist += segDist;
            if (dist > halfDist) {
                ratio = (dist - halfDist) / segDist;
                center = [
                    p2.x - ratio * (p2.x - p1.x),
                    p2.y - ratio * (p2.y - p1.y)
                ];
                break;
            }
        }
        var latlngCenter = crs.unproject(toPoint(center));
        return toLatLng([
            latlngCenter.lat + centroidLatLng.lat,
            latlngCenter.lng + centroidLatLng.lng
        ]);
    }
    var LineUtil = {
        __proto__: null,
        simplify: simplify,
        pointToSegmentDistance: pointToSegmentDistance,
        closestPointOnSegment: closestPointOnSegment,
        clipSegment: clipSegment,
        _getEdgeIntersection: _getEdgeIntersection,
        _getBitCode: _getBitCode,
        _sqClosestPointOnSegment: _sqClosestPointOnSegment,
        isFlat: isFlat,
        _flat: _flat,
        polylineCenter: polylineCenter
    };
    /*
   * @namespace Projection
   * @section
   * Leaflet comes with a set of already defined Projections out of the box:
   *
   * @projection L.Projection.LonLat
   *
   * Equirectangular, or Plate Carree projection — the most simple projection,
   * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
   * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
   * `EPSG:4326` and `Simple` CRS.
   */ var LonLat = {
        project: function(latlng) {
            return new Point(latlng.lng, latlng.lat);
        },
        unproject: function(point) {
            return new LatLng(point.y, point.x);
        },
        bounds: new Bounds([
            -180,
            -90
        ], [
            180,
            90
        ])
    };
    /*
   * @namespace Projection
   * @projection L.Projection.Mercator
   *
   * Elliptical Mercator projection — more complex than Spherical Mercator. Assumes that Earth is an ellipsoid. Used by the EPSG:3395 CRS.
   */ var Mercator = {
        R: 6378137,
        R_MINOR: 6356752.314245179,
        bounds: new Bounds([
            -20037508.34279,
            -15496570.73972
        ], [
            20037508.34279,
            18764656.23138
        ]),
        project: function(latlng) {
            var d = Math.PI / 180, r = this.R, y = latlng.lat * d, tmp = this.R_MINOR / r, e = Math.sqrt(1 - tmp * tmp), con = e * Math.sin(y);
            var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
            y = -r * Math.log(Math.max(ts, 1E-10));
            return new Point(latlng.lng * d * r, y);
        },
        unproject: function(point) {
            var d = 180 / Math.PI, r = this.R, tmp = this.R_MINOR / r, e = Math.sqrt(1 - tmp * tmp), ts = Math.exp(-point.y / r), phi = Math.PI / 2 - 2 * Math.atan(ts);
            for(var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++){
                con = e * Math.sin(phi);
                con = Math.pow((1 - con) / (1 + con), e / 2);
                dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
                phi += dphi;
            }
            return new LatLng(phi * d, point.x * d / r);
        }
    };
    /*
   * @class Projection

   * An object with methods for projecting geographical coordinates of the world onto
   * a flat surface (and back). See [Map projection](https://en.wikipedia.org/wiki/Map_projection).

   * @property bounds: Bounds
   * The bounds (specified in CRS units) where the projection is valid

   * @method project(latlng: LatLng): Point
   * Projects geographical coordinates into a 2D point.
   * Only accepts actual `L.LatLng` instances, not arrays.

   * @method unproject(point: Point): LatLng
   * The inverse of `project`. Projects a 2D point into a geographical location.
   * Only accepts actual `L.Point` instances, not arrays.

   * Note that the projection instances do not inherit from Leaflet's `Class` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the `include` function.

   */ var index = {
        __proto__: null,
        LonLat: LonLat,
        Mercator: Mercator,
        SphericalMercator: SphericalMercator
    };
    /*
   * @namespace CRS
   * @crs L.CRS.EPSG3395
   *
   * Rarely used by some commercial tile providers. Uses Elliptical Mercator projection.
   */ var EPSG3395 = extend({}, Earth, {
        code: "EPSG:3395",
        projection: Mercator,
        transformation: function() {
            var scale = 0.5 / (Math.PI * Mercator.R);
            return toTransformation(scale, 0.5, -scale, 0.5);
        }()
    });
    /*
   * @namespace CRS
   * @crs L.CRS.EPSG4326
   *
   * A common CRS among GIS enthusiasts. Uses simple Equirectangular projection.
   *
   * Leaflet 1.0.x complies with the [TMS coordinate scheme for EPSG:4326](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification#global-geodetic),
   * which is a breaking change from 0.7.x behaviour.  If you are using a `TileLayer`
   * with this CRS, ensure that there are two 256x256 pixel tiles covering the
   * whole earth at zoom level zero, and that the tile coordinate origin is (-180,+90),
   * or (-180,-90) for `TileLayer`s with [the `tms` option](#tilelayer-tms) set.
   */ var EPSG4326 = extend({}, Earth, {
        code: "EPSG:4326",
        projection: LonLat,
        transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)
    });
    /*
   * @namespace CRS
   * @crs L.CRS.Simple
   *
   * A simple CRS that maps longitude and latitude into `x` and `y` directly.
   * May be used for maps of flat surfaces (e.g. game maps). Note that the `y`
   * axis should still be inverted (going from bottom to top). `distance()` returns
   * simple euclidean distance.
   */ var Simple = extend({}, CRS, {
        projection: LonLat,
        transformation: toTransformation(1, 0, -1, 0),
        scale: function(zoom) {
            return Math.pow(2, zoom);
        },
        zoom: function(scale) {
            return Math.log(scale) / Math.LN2;
        },
        distance: function(latlng1, latlng2) {
            var dx = latlng2.lng - latlng1.lng, dy = latlng2.lat - latlng1.lat;
            return Math.sqrt(dx * dx + dy * dy);
        },
        infinite: true
    });
    CRS.Earth = Earth;
    CRS.EPSG3395 = EPSG3395;
    CRS.EPSG3857 = EPSG3857;
    CRS.EPSG900913 = EPSG900913;
    CRS.EPSG4326 = EPSG4326;
    CRS.Simple = Simple;
    /*
   * @class Layer
   * @inherits Evented
   * @aka L.Layer
   * @aka ILayer
   *
   * A set of methods from the Layer base class that all Leaflet layers use.
   * Inherits all methods, options and events from `L.Evented`.
   *
   * @example
   *
   * ```js
   * var layer = L.marker(latlng).addTo(map);
   * layer.addTo(map);
   * layer.remove();
   * ```
   *
   * @event add: Event
   * Fired after the layer is added to a map
   *
   * @event remove: Event
   * Fired after the layer is removed from a map
   */ var Layer = Evented.extend({
        // Classes extending `L.Layer` will inherit the following options:
        options: {
            // @option pane: String = 'overlayPane'
            // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
            pane: "overlayPane",
            // @option attribution: String = null
            // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
            attribution: null,
            bubblingMouseEvents: true
        },
        /* @section
  	 * Classes extending `L.Layer` will inherit the following methods:
  	 *
  	 * @method addTo(map: Map|LayerGroup): this
  	 * Adds the layer to the given map or layer group.
  	 */ addTo: function(map) {
            map.addLayer(this);
            return this;
        },
        // @method remove: this
        // Removes the layer from the map it is currently active on.
        remove: function() {
            return this.removeFrom(this._map || this._mapToAdd);
        },
        // @method removeFrom(map: Map): this
        // Removes the layer from the given map
        //
        // @alternative
        // @method removeFrom(group: LayerGroup): this
        // Removes the layer from the given `LayerGroup`
        removeFrom: function(obj) {
            if (obj) obj.removeLayer(this);
            return this;
        },
        // @method getPane(name? : String): HTMLElement
        // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
        getPane: function(name) {
            return this._map.getPane(name ? this.options[name] || name : this.options.pane);
        },
        addInteractiveTarget: function(targetEl) {
            this._map._targets[stamp(targetEl)] = this;
            return this;
        },
        removeInteractiveTarget: function(targetEl) {
            delete this._map._targets[stamp(targetEl)];
            return this;
        },
        // @method getAttribution: String
        // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
        getAttribution: function() {
            return this.options.attribution;
        },
        _layerAdd: function(e) {
            var map = e.target;
            // check in case layer gets added and then removed before the map is ready
            if (!map.hasLayer(this)) return;
            this._map = map;
            this._zoomAnimated = map._zoomAnimated;
            if (this.getEvents) {
                var events = this.getEvents();
                map.on(events, this);
                this.once("remove", function() {
                    map.off(events, this);
                }, this);
            }
            this.onAdd(map);
            this.fire("add");
            map.fire("layeradd", {
                layer: this
            });
        }
    });
    /* @section Extension methods
   * @uninheritable
   *
   * Every layer should extend from `L.Layer` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): this
   * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
   *
   * @method onRemove(map: Map): this
   * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
   *
   * @method getEvents(): Object
   * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
   *
   * @method getAttribution(): String
   * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
   *
   * @method beforeAdd(map: Map): this
   * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
   */ /* @namespace Map
   * @section Layer events
   *
   * @event layeradd: LayerEvent
   * Fired when a new layer is added to the map.
   *
   * @event layerremove: LayerEvent
   * Fired when some layer is removed from the map
   *
   * @section Methods for Layers and Controls
   */ Map.include({
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the map
        addLayer: function(layer) {
            if (!layer._layerAdd) throw new Error("The provided object is not a Layer.");
            var id = stamp(layer);
            if (this._layers[id]) return this;
            this._layers[id] = layer;
            layer._mapToAdd = this;
            if (layer.beforeAdd) layer.beforeAdd(this);
            this.whenReady(layer._layerAdd, layer);
            return this;
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the map.
        removeLayer: function(layer) {
            var id = stamp(layer);
            if (!this._layers[id]) return this;
            if (this._loaded) layer.onRemove(this);
            delete this._layers[id];
            if (this._loaded) {
                this.fire("layerremove", {
                    layer: layer
                });
                layer.fire("remove");
            }
            layer._map = layer._mapToAdd = null;
            return this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the map
        hasLayer: function(layer) {
            return stamp(layer) in this._layers;
        },
        /* @method eachLayer(fn: Function, context?: Object): this
  	 * Iterates over the layers of the map, optionally specifying context of the iterator function.
  	 * ```
  	 * map.eachLayer(function(layer){
  	 *     layer.bindPopup('Hello');
  	 * });
  	 * ```
  	 */ eachLayer: function(method, context) {
            for(var i in this._layers)method.call(context, this._layers[i]);
            return this;
        },
        _addLayers: function(layers) {
            layers = layers ? isArray(layers) ? layers : [
                layers
            ] : [];
            for(var i = 0, len = layers.length; i < len; i++)this.addLayer(layers[i]);
        },
        _addZoomLimit: function(layer) {
            if (!isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
                this._zoomBoundLayers[stamp(layer)] = layer;
                this._updateZoomLevels();
            }
        },
        _removeZoomLimit: function(layer) {
            var id = stamp(layer);
            if (this._zoomBoundLayers[id]) {
                delete this._zoomBoundLayers[id];
                this._updateZoomLevels();
            }
        },
        _updateZoomLevels: function() {
            var minZoom = Infinity, maxZoom = -Infinity, oldZoomSpan = this._getZoomSpan();
            for(var i in this._zoomBoundLayers){
                var options = this._zoomBoundLayers[i].options;
                minZoom = options.minZoom === undefined ? minZoom : Math.min(minZoom, options.minZoom);
                maxZoom = options.maxZoom === undefined ? maxZoom : Math.max(maxZoom, options.maxZoom);
            }
            this._layersMaxZoom = maxZoom === -Infinity ? undefined : maxZoom;
            this._layersMinZoom = minZoom === Infinity ? undefined : minZoom;
            // @section Map state change events
            // @event zoomlevelschange: Event
            // Fired when the number of zoomlevels on the map is changed due
            // to adding or removing a layer.
            if (oldZoomSpan !== this._getZoomSpan()) this.fire("zoomlevelschange");
            if (this.options.maxZoom === undefined && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom) this.setZoom(this._layersMaxZoom);
            if (this.options.minZoom === undefined && this._layersMinZoom && this.getZoom() < this._layersMinZoom) this.setZoom(this._layersMinZoom);
        }
    });
    /*
   * @class LayerGroup
   * @aka L.LayerGroup
   * @inherits Interactive layer
   *
   * Used to group several layers and handle them as one. If you add it to the map,
   * any layers added or removed from the group will be added/removed on the map as
   * well. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.layerGroup([marker1, marker2])
   * 	.addLayer(polyline)
   * 	.addTo(map);
   * ```
   */ var LayerGroup = Layer.extend({
        initialize: function(layers, options) {
            setOptions(this, options);
            this._layers = {};
            var i, len;
            if (layers) for(i = 0, len = layers.length; i < len; i++)this.addLayer(layers[i]);
        },
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the group.
        addLayer: function(layer) {
            var id = this.getLayerId(layer);
            this._layers[id] = layer;
            if (this._map) this._map.addLayer(layer);
            return this;
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the group.
        // @alternative
        // @method removeLayer(id: Number): this
        // Removes the layer with the given internal ID from the group.
        removeLayer: function(layer) {
            var id = layer in this._layers ? layer : this.getLayerId(layer);
            if (this._map && this._layers[id]) this._map.removeLayer(this._layers[id]);
            delete this._layers[id];
            return this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the group.
        // @alternative
        // @method hasLayer(id: Number): Boolean
        // Returns `true` if the given internal ID is currently added to the group.
        hasLayer: function(layer) {
            var layerId = typeof layer === "number" ? layer : this.getLayerId(layer);
            return layerId in this._layers;
        },
        // @method clearLayers(): this
        // Removes all the layers from the group.
        clearLayers: function() {
            return this.eachLayer(this.removeLayer, this);
        },
        // @method invoke(methodName: String, …): this
        // Calls `methodName` on every layer contained in this group, passing any
        // additional parameters. Has no effect if the layers contained do not
        // implement `methodName`.
        invoke: function(methodName) {
            var args = Array.prototype.slice.call(arguments, 1), i, layer;
            for(i in this._layers){
                layer = this._layers[i];
                if (layer[methodName]) layer[methodName].apply(layer, args);
            }
            return this;
        },
        onAdd: function(map) {
            this.eachLayer(map.addLayer, map);
        },
        onRemove: function(map) {
            this.eachLayer(map.removeLayer, map);
        },
        // @method eachLayer(fn: Function, context?: Object): this
        // Iterates over the layers of the group, optionally specifying context of the iterator function.
        // ```js
        // group.eachLayer(function (layer) {
        // 	layer.bindPopup('Hello');
        // });
        // ```
        eachLayer: function(method, context) {
            for(var i in this._layers)method.call(context, this._layers[i]);
            return this;
        },
        // @method getLayer(id: Number): Layer
        // Returns the layer with the given internal ID.
        getLayer: function(id) {
            return this._layers[id];
        },
        // @method getLayers(): Layer[]
        // Returns an array of all the layers added to the group.
        getLayers: function() {
            var layers = [];
            this.eachLayer(layers.push, layers);
            return layers;
        },
        // @method setZIndex(zIndex: Number): this
        // Calls `setZIndex` on every layer contained in this group, passing the z-index.
        setZIndex: function(zIndex) {
            return this.invoke("setZIndex", zIndex);
        },
        // @method getLayerId(layer: Layer): Number
        // Returns the internal ID for a layer
        getLayerId: function(layer) {
            return stamp(layer);
        }
    });
    // @factory L.layerGroup(layers?: Layer[], options?: Object)
    // Create a layer group, optionally given an initial set of layers and an `options` object.
    var layerGroup = function(layers, options) {
        return new LayerGroup(layers, options);
    };
    /*
   * @class FeatureGroup
   * @aka L.FeatureGroup
   * @inherits LayerGroup
   *
   * Extended `LayerGroup` that makes it easier to do the same thing to all its member layers:
   *  * [`bindPopup`](#layer-bindpopup) binds a popup to all of the layers at once (likewise with [`bindTooltip`](#layer-bindtooltip))
   *  * Events are propagated to the `FeatureGroup`, so if the group has an event
   * handler, it will handle events from any of the layers. This includes mouse events
   * and custom events.
   *  * Has `layeradd` and `layerremove` events
   *
   * @example
   *
   * ```js
   * L.featureGroup([marker1, marker2, polyline])
   * 	.bindPopup('Hello world!')
   * 	.on('click', function() { alert('Clicked on a member of the group!'); })
   * 	.addTo(map);
   * ```
   */ var FeatureGroup = LayerGroup.extend({
        addLayer: function(layer) {
            if (this.hasLayer(layer)) return this;
            layer.addEventParent(this);
            LayerGroup.prototype.addLayer.call(this, layer);
            // @event layeradd: LayerEvent
            // Fired when a layer is added to this `FeatureGroup`
            return this.fire("layeradd", {
                layer: layer
            });
        },
        removeLayer: function(layer) {
            if (!this.hasLayer(layer)) return this;
            if (layer in this._layers) layer = this._layers[layer];
            layer.removeEventParent(this);
            LayerGroup.prototype.removeLayer.call(this, layer);
            // @event layerremove: LayerEvent
            // Fired when a layer is removed from this `FeatureGroup`
            return this.fire("layerremove", {
                layer: layer
            });
        },
        // @method setStyle(style: Path options): this
        // Sets the given path options to each layer of the group that has a `setStyle` method.
        setStyle: function(style) {
            return this.invoke("setStyle", style);
        },
        // @method bringToFront(): this
        // Brings the layer group to the top of all other layers
        bringToFront: function() {
            return this.invoke("bringToFront");
        },
        // @method bringToBack(): this
        // Brings the layer group to the back of all other layers
        bringToBack: function() {
            return this.invoke("bringToBack");
        },
        // @method getBounds(): LatLngBounds
        // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
        getBounds: function() {
            var bounds = new LatLngBounds();
            for(var id in this._layers){
                var layer = this._layers[id];
                bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
            }
            return bounds;
        }
    });
    // @factory L.featureGroup(layers?: Layer[], options?: Object)
    // Create a feature group, optionally given an initial set of layers and an `options` object.
    var featureGroup = function(layers, options) {
        return new FeatureGroup(layers, options);
    };
    /*
   * @class Icon
   * @aka L.Icon
   *
   * Represents an icon to provide when creating a marker.
   *
   * @example
   *
   * ```js
   * var myIcon = L.icon({
   *     iconUrl: 'my-icon.png',
   *     iconRetinaUrl: 'my-icon@2x.png',
   *     iconSize: [38, 95],
   *     iconAnchor: [22, 94],
   *     popupAnchor: [-3, -76],
   *     shadowUrl: 'my-icon-shadow.png',
   *     shadowRetinaUrl: 'my-icon-shadow@2x.png',
   *     shadowSize: [68, 95],
   *     shadowAnchor: [22, 94]
   * });
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * `L.Icon.Default` extends `L.Icon` and is the blue icon Leaflet uses for markers by default.
   *
   */ var Icon = Class.extend({
        /* @section
  	 * @aka Icon options
  	 *
  	 * @option iconUrl: String = null
  	 * **(required)** The URL to the icon image (absolute or relative to your script path).
  	 *
  	 * @option iconRetinaUrl: String = null
  	 * The URL to a retina sized version of the icon image (absolute or relative to your
  	 * script path). Used for Retina screen devices.
  	 *
  	 * @option iconSize: Point = null
  	 * Size of the icon image in pixels.
  	 *
  	 * @option iconAnchor: Point = null
  	 * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
  	 * will be aligned so that this point is at the marker's geographical location. Centered
  	 * by default if size is specified, also can be set in CSS with negative margins.
  	 *
  	 * @option popupAnchor: Point = [0, 0]
  	 * The coordinates of the point from which popups will "open", relative to the icon anchor.
  	 *
  	 * @option tooltipAnchor: Point = [0, 0]
  	 * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
  	 *
  	 * @option shadowUrl: String = null
  	 * The URL to the icon shadow image. If not specified, no shadow image will be created.
  	 *
  	 * @option shadowRetinaUrl: String = null
  	 *
  	 * @option shadowSize: Point = null
  	 * Size of the shadow image in pixels.
  	 *
  	 * @option shadowAnchor: Point = null
  	 * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
  	 * as iconAnchor if not specified).
  	 *
  	 * @option className: String = ''
  	 * A custom class name to assign to both icon and shadow images. Empty by default.
  	 */ options: {
            popupAnchor: [
                0,
                0
            ],
            tooltipAnchor: [
                0,
                0
            ],
            // @option crossOrigin: Boolean|String = false
            // Whether the crossOrigin attribute will be added to the tiles.
            // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
            // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
            crossOrigin: false
        },
        initialize: function(options) {
            setOptions(this, options);
        },
        // @method createIcon(oldIcon?: HTMLElement): HTMLElement
        // Called internally when the icon has to be shown, returns a `<img>` HTML element
        // styled according to the options.
        createIcon: function(oldIcon) {
            return this._createIcon("icon", oldIcon);
        },
        // @method createShadow(oldIcon?: HTMLElement): HTMLElement
        // As `createIcon`, but for the shadow beneath it.
        createShadow: function(oldIcon) {
            return this._createIcon("shadow", oldIcon);
        },
        _createIcon: function(name, oldIcon) {
            var src = this._getIconUrl(name);
            if (!src) {
                if (name === "icon") throw new Error("iconUrl not set in Icon options (see the docs).");
                return null;
            }
            var img = this._createImg(src, oldIcon && oldIcon.tagName === "IMG" ? oldIcon : null);
            this._setIconStyles(img, name);
            if (this.options.crossOrigin || this.options.crossOrigin === "") img.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin;
            return img;
        },
        _setIconStyles: function(img, name) {
            var options = this.options;
            var sizeOption = options[name + "Size"];
            if (typeof sizeOption === "number") sizeOption = [
                sizeOption,
                sizeOption
            ];
            var size = toPoint(sizeOption), anchor = toPoint(name === "shadow" && options.shadowAnchor || options.iconAnchor || size && size.divideBy(2, true));
            img.className = "leaflet-marker-" + name + " " + (options.className || "");
            if (anchor) {
                img.style.marginLeft = -anchor.x + "px";
                img.style.marginTop = -anchor.y + "px";
            }
            if (size) {
                img.style.width = size.x + "px";
                img.style.height = size.y + "px";
            }
        },
        _createImg: function(src, el) {
            el = el || document.createElement("img");
            el.src = src;
            return el;
        },
        _getIconUrl: function(name) {
            return Browser.retina && this.options[name + "RetinaUrl"] || this.options[name + "Url"];
        }
    });
    // @factory L.icon(options: Icon options)
    // Creates an icon instance with the given options.
    function icon(options) {
        return new Icon(options);
    }
    /*
   * @miniclass Icon.Default (Icon)
   * @aka L.Icon.Default
   * @section
   *
   * A trivial subclass of `Icon`, represents the icon to use in `Marker`s when
   * no icon is specified. Points to the blue marker image distributed with Leaflet
   * releases.
   *
   * In order to customize the default icon, just change the properties of `L.Icon.Default.prototype.options`
   * (which is a set of `Icon options`).
   *
   * If you want to _completely_ replace the default icon, override the
   * `L.Marker.prototype.options.icon` with your own icon instead.
   */ var IconDefault = Icon.extend({
        options: {
            iconUrl: "marker-icon.png",
            iconRetinaUrl: "marker-icon-2x.png",
            shadowUrl: "marker-shadow.png",
            iconSize: [
                25,
                41
            ],
            iconAnchor: [
                12,
                41
            ],
            popupAnchor: [
                1,
                -34
            ],
            tooltipAnchor: [
                16,
                -28
            ],
            shadowSize: [
                41,
                41
            ]
        },
        _getIconUrl: function(name) {
            if (typeof IconDefault.imagePath !== "string") IconDefault.imagePath = this._detectIconPath();
            // @option imagePath: String
            // `Icon.Default` will try to auto-detect the location of the
            // blue icon images. If you are placing these images in a non-standard
            // way, set this option to point to the right path.
            return (this.options.imagePath || IconDefault.imagePath) + Icon.prototype._getIconUrl.call(this, name);
        },
        _stripUrl: function(path) {
            var strip = function(str, re, idx) {
                var match = re.exec(str);
                return match && match[idx];
            };
            path = strip(path, /^url\((['"])?(.+)\1\)$/, 2);
            return path && strip(path, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function() {
            var el = create$1("div", "leaflet-default-icon-path", document.body);
            var path = getStyle(el, "background-image") || getStyle(el, "backgroundImage"); // IE8
            document.body.removeChild(el);
            path = this._stripUrl(path);
            if (path) return path;
            var link = document.querySelector('link[href$="leaflet.css"]');
            if (!link) return "";
            return link.href.substring(0, link.href.length - 11 - 1);
        }
    });
    /*
   * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
   */ /* @namespace Marker
   * @section Interaction handlers
   *
   * Interaction handlers are properties of a marker instance that allow you to control interaction behavior in runtime, enabling or disabling certain features such as dragging (see `Handler` methods). Example:
   *
   * ```js
   * marker.dragging.disable();
   * ```
   *
   * @property dragging: Handler
   * Marker dragging handler (by both mouse and touch). Only valid when the marker is on the map (Otherwise set [`marker.options.draggable`](#marker-draggable)).
   */ var MarkerDrag = Handler.extend({
        initialize: function(marker) {
            this._marker = marker;
        },
        addHooks: function() {
            var icon = this._marker._icon;
            if (!this._draggable) this._draggable = new Draggable(icon, icon, true);
            this._draggable.on({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).enable();
            addClass(icon, "leaflet-marker-draggable");
        },
        removeHooks: function() {
            this._draggable.off({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).disable();
            if (this._marker._icon) removeClass(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function() {
            return this._draggable && this._draggable._moved;
        },
        _adjustPan: function(e) {
            var marker = this._marker, map = marker._map, speed = this._marker.options.autoPanSpeed, padding = this._marker.options.autoPanPadding, iconPos = getPosition(marker._icon), bounds = map.getPixelBounds(), origin = map.getPixelOrigin();
            var panBounds = toBounds(bounds.min._subtract(origin).add(padding), bounds.max._subtract(origin).subtract(padding));
            if (!panBounds.contains(iconPos)) {
                // Compute incremental movement
                var movement = toPoint((Math.max(panBounds.max.x, iconPos.x) - panBounds.max.x) / (bounds.max.x - panBounds.max.x) - (Math.min(panBounds.min.x, iconPos.x) - panBounds.min.x) / (bounds.min.x - panBounds.min.x), (Math.max(panBounds.max.y, iconPos.y) - panBounds.max.y) / (bounds.max.y - panBounds.max.y) - (Math.min(panBounds.min.y, iconPos.y) - panBounds.min.y) / (bounds.min.y - panBounds.min.y)).multiplyBy(speed);
                map.panBy(movement, {
                    animate: false
                });
                this._draggable._newPos._add(movement);
                this._draggable._startPos._add(movement);
                setPosition(marker._icon, this._draggable._newPos);
                this._onDrag(e);
                this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
            }
        },
        _onDragStart: function() {
            // @section Dragging events
            // @event dragstart: Event
            // Fired when the user starts dragging the marker.
            // @event movestart: Event
            // Fired when the marker starts moving (because of dragging).
            this._oldLatLng = this._marker.getLatLng();
            // When using ES6 imports it could not be set when `Popup` was not imported as well
            this._marker.closePopup && this._marker.closePopup();
            this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(e) {
            if (this._marker.options.autoPan) {
                cancelAnimFrame(this._panRequest);
                this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
            }
        },
        _onDrag: function(e) {
            var marker = this._marker, shadow = marker._shadow, iconPos = getPosition(marker._icon), latlng = marker._map.layerPointToLatLng(iconPos);
            // update shadow position
            if (shadow) setPosition(shadow, iconPos);
            marker._latlng = latlng;
            e.latlng = latlng;
            e.oldLatLng = this._oldLatLng;
            // @event drag: Event
            // Fired repeatedly while the user drags the marker.
            marker.fire("move", e).fire("drag", e);
        },
        _onDragEnd: function(e) {
            // @event dragend: DragEndEvent
            // Fired when the user stops dragging the marker.
            cancelAnimFrame(this._panRequest);
            // @event moveend: Event
            // Fired when the marker stops moving (because of dragging).
            delete this._oldLatLng;
            this._marker.fire("moveend").fire("dragend", e);
        }
    });
    /*
   * @class Marker
   * @inherits Interactive layer
   * @aka L.Marker
   * L.Marker is used to display clickable/draggable icons on the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.marker([50.5, 30.5]).addTo(map);
   * ```
   */ var Marker = Layer.extend({
        // @section
        // @aka Marker options
        options: {
            // @option icon: Icon = *
            // Icon instance to use for rendering the marker.
            // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
            // If not specified, a common instance of `L.Icon.Default` is used.
            icon: new IconDefault(),
            // Option inherited from "Interactive layer" abstract class
            interactive: true,
            // @option keyboard: Boolean = true
            // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
            keyboard: true,
            // @option title: String = ''
            // Text for the browser tooltip that appear on marker hover (no tooltip by default).
            // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
            title: "",
            // @option alt: String = 'Marker'
            // Text for the `alt` attribute of the icon image.
            // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
            alt: "Marker",
            // @option zIndexOffset: Number = 0
            // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
            zIndexOffset: 0,
            // @option opacity: Number = 1.0
            // The opacity of the marker.
            opacity: 1,
            // @option riseOnHover: Boolean = false
            // If `true`, the marker will get on top of others when you hover the mouse over it.
            riseOnHover: false,
            // @option riseOffset: Number = 250
            // The z-index offset used for the `riseOnHover` feature.
            riseOffset: 250,
            // @option pane: String = 'markerPane'
            // `Map pane` where the markers icon will be added.
            pane: "markerPane",
            // @option shadowPane: String = 'shadowPane'
            // `Map pane` where the markers shadow will be added.
            shadowPane: "shadowPane",
            // @option bubblingMouseEvents: Boolean = false
            // When `true`, a mouse event on this marker will trigger the same event on the map
            // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
            bubblingMouseEvents: false,
            // @option autoPanOnFocus: Boolean = true
            // When `true`, the map will pan whenever the marker is focused (via
            // e.g. pressing `tab` on the keyboard) to ensure the marker is
            // visible within the map's bounds
            autoPanOnFocus: true,
            // @section Draggable marker options
            // @option draggable: Boolean = false
            // Whether the marker is draggable with mouse/touch or not.
            draggable: false,
            // @option autoPan: Boolean = false
            // Whether to pan the map when dragging this marker near its edge or not.
            autoPan: false,
            // @option autoPanPadding: Point = Point(50, 50)
            // Distance (in pixels to the left/right and to the top/bottom) of the
            // map edge to start panning the map.
            autoPanPadding: [
                50,
                50
            ],
            // @option autoPanSpeed: Number = 10
            // Number of pixels the map should pan by.
            autoPanSpeed: 10
        },
        /* @section
  	 *
  	 * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
  	 */ initialize: function(latlng, options) {
            setOptions(this, options);
            this._latlng = toLatLng(latlng);
        },
        onAdd: function(map) {
            this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;
            if (this._zoomAnimated) map.on("zoomanim", this._animateZoom, this);
            this._initIcon();
            this.update();
        },
        onRemove: function(map) {
            if (this.dragging && this.dragging.enabled()) {
                this.options.draggable = true;
                this.dragging.removeHooks();
            }
            delete this.dragging;
            if (this._zoomAnimated) map.off("zoomanim", this._animateZoom, this);
            this._removeIcon();
            this._removeShadow();
        },
        getEvents: function() {
            return {
                zoom: this.update,
                viewreset: this.update
            };
        },
        // @method getLatLng: LatLng
        // Returns the current geographical position of the marker.
        getLatLng: function() {
            return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Changes the marker position to the given point.
        setLatLng: function(latlng) {
            var oldLatLng = this._latlng;
            this._latlng = toLatLng(latlng);
            this.update();
            // @event move: Event
            // Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
            return this.fire("move", {
                oldLatLng: oldLatLng,
                latlng: this._latlng
            });
        },
        // @method setZIndexOffset(offset: Number): this
        // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
        setZIndexOffset: function(offset) {
            this.options.zIndexOffset = offset;
            return this.update();
        },
        // @method getIcon: Icon
        // Returns the current icon used by the marker
        getIcon: function() {
            return this.options.icon;
        },
        // @method setIcon(icon: Icon): this
        // Changes the marker icon.
        setIcon: function(icon) {
            this.options.icon = icon;
            if (this._map) {
                this._initIcon();
                this.update();
            }
            if (this._popup) this.bindPopup(this._popup, this._popup.options);
            return this;
        },
        getElement: function() {
            return this._icon;
        },
        update: function() {
            if (this._icon && this._map) {
                var pos = this._map.latLngToLayerPoint(this._latlng).round();
                this._setPos(pos);
            }
            return this;
        },
        _initIcon: function() {
            var options = this.options, classToAdd = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            var icon = options.icon.createIcon(this._icon), addIcon = false;
            // if we're not reusing the icon, remove the old one and init new one
            if (icon !== this._icon) {
                if (this._icon) this._removeIcon();
                addIcon = true;
                if (options.title) icon.title = options.title;
                if (icon.tagName === "IMG") icon.alt = options.alt || "";
            }
            addClass(icon, classToAdd);
            if (options.keyboard) {
                icon.tabIndex = "0";
                icon.setAttribute("role", "button");
            }
            this._icon = icon;
            if (options.riseOnHover) this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            });
            if (this.options.autoPanOnFocus) on(icon, "focus", this._panOnFocus, this);
            var newShadow = options.icon.createShadow(this._shadow), addShadow = false;
            if (newShadow !== this._shadow) {
                this._removeShadow();
                addShadow = true;
            }
            if (newShadow) {
                addClass(newShadow, classToAdd);
                newShadow.alt = "";
            }
            this._shadow = newShadow;
            if (options.opacity < 1) this._updateOpacity();
            if (addIcon) this.getPane().appendChild(this._icon);
            this._initInteraction();
            if (newShadow && addShadow) this.getPane(options.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
            if (this.options.riseOnHover) this.off({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            });
            if (this.options.autoPanOnFocus) off(this._icon, "focus", this._panOnFocus, this);
            remove(this._icon);
            this.removeInteractiveTarget(this._icon);
            this._icon = null;
        },
        _removeShadow: function() {
            if (this._shadow) remove(this._shadow);
            this._shadow = null;
        },
        _setPos: function(pos) {
            if (this._icon) setPosition(this._icon, pos);
            if (this._shadow) setPosition(this._shadow, pos);
            this._zIndex = pos.y + this.options.zIndexOffset;
            this._resetZIndex();
        },
        _updateZIndex: function(offset) {
            if (this._icon) this._icon.style.zIndex = this._zIndex + offset;
        },
        _animateZoom: function(opt) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();
            this._setPos(pos);
        },
        _initInteraction: function() {
            if (!this.options.interactive) return;
            addClass(this._icon, "leaflet-interactive");
            this.addInteractiveTarget(this._icon);
            if (MarkerDrag) {
                var draggable = this.options.draggable;
                if (this.dragging) {
                    draggable = this.dragging.enabled();
                    this.dragging.disable();
                }
                this.dragging = new MarkerDrag(this);
                if (draggable) this.dragging.enable();
            }
        },
        // @method setOpacity(opacity: Number): this
        // Changes the opacity of the marker.
        setOpacity: function(opacity) {
            this.options.opacity = opacity;
            if (this._map) this._updateOpacity();
            return this;
        },
        _updateOpacity: function() {
            var opacity = this.options.opacity;
            if (this._icon) setOpacity(this._icon, opacity);
            if (this._shadow) setOpacity(this._shadow, opacity);
        },
        _bringToFront: function() {
            this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function() {
            this._updateZIndex(0);
        },
        _panOnFocus: function() {
            var map = this._map;
            if (!map) return;
            var iconOpts = this.options.icon.options;
            var size = iconOpts.iconSize ? toPoint(iconOpts.iconSize) : toPoint(0, 0);
            var anchor = iconOpts.iconAnchor ? toPoint(iconOpts.iconAnchor) : toPoint(0, 0);
            map.panInside(this._latlng, {
                paddingTopLeft: anchor,
                paddingBottomRight: size.subtract(anchor)
            });
        },
        _getPopupAnchor: function() {
            return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function() {
            return this.options.icon.options.tooltipAnchor;
        }
    });
    // factory L.marker(latlng: LatLng, options? : Marker options)
    // @factory L.marker(latlng: LatLng, options? : Marker options)
    // Instantiates a Marker object given a geographical point and optionally an options object.
    function marker(latlng, options) {
        return new Marker(latlng, options);
    }
    /*
   * @class Path
   * @aka L.Path
   * @inherits Interactive layer
   *
   * An abstract class that contains options and constants shared between vector
   * overlays (Polygon, Polyline, Circle). Do not use it directly. Extends `Layer`.
   */ var Path = Layer.extend({
        // @section
        // @aka Path options
        options: {
            // @option stroke: Boolean = true
            // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
            stroke: true,
            // @option color: String = '#3388ff'
            // Stroke color
            color: "#3388ff",
            // @option weight: Number = 3
            // Stroke width in pixels
            weight: 3,
            // @option opacity: Number = 1.0
            // Stroke opacity
            opacity: 1,
            // @option lineCap: String= 'round'
            // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
            lineCap: "round",
            // @option lineJoin: String = 'round'
            // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
            lineJoin: "round",
            // @option dashArray: String = null
            // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
            dashArray: null,
            // @option dashOffset: String = null
            // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
            dashOffset: null,
            // @option fill: Boolean = depends
            // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
            fill: false,
            // @option fillColor: String = *
            // Fill color. Defaults to the value of the [`color`](#path-color) option
            fillColor: null,
            // @option fillOpacity: Number = 0.2
            // Fill opacity.
            fillOpacity: 0.2,
            // @option fillRule: String = 'evenodd'
            // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
            fillRule: "evenodd",
            // className: '',
            // Option inherited from "Interactive layer" abstract class
            interactive: true,
            // @option bubblingMouseEvents: Boolean = true
            // When `true`, a mouse event on this path will trigger the same event on the map
            // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
            bubblingMouseEvents: true
        },
        beforeAdd: function(map) {
            // Renderer is set here because we need to call renderer.getEvents
            // before this.getEvents.
            this._renderer = map.getRenderer(this);
        },
        onAdd: function() {
            this._renderer._initPath(this);
            this._reset();
            this._renderer._addPath(this);
        },
        onRemove: function() {
            this._renderer._removePath(this);
        },
        // @method redraw(): this
        // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
        redraw: function() {
            if (this._map) this._renderer._updatePath(this);
            return this;
        },
        // @method setStyle(style: Path options): this
        // Changes the appearance of a Path based on the options in the `Path options` object.
        setStyle: function(style) {
            setOptions(this, style);
            if (this._renderer) {
                this._renderer._updateStyle(this);
                if (this.options.stroke && style && Object.prototype.hasOwnProperty.call(style, "weight")) this._updateBounds();
            }
            return this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all path layers.
        bringToFront: function() {
            if (this._renderer) this._renderer._bringToFront(this);
            return this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all path layers.
        bringToBack: function() {
            if (this._renderer) this._renderer._bringToBack(this);
            return this;
        },
        getElement: function() {
            return this._path;
        },
        _reset: function() {
            // defined in child classes
            this._project();
            this._update();
        },
        _clickTolerance: function() {
            // used when doing hit detection for Canvas layers
            return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
        }
    });
    /*
   * @class CircleMarker
   * @aka L.CircleMarker
   * @inherits Path
   *
   * A circle of a fixed size with radius specified in pixels. Extends `Path`.
   */ var CircleMarker = Path.extend({
        // @section
        // @aka CircleMarker options
        options: {
            fill: true,
            // @option radius: Number = 10
            // Radius of the circle marker, in pixels
            radius: 10
        },
        initialize: function(latlng, options) {
            setOptions(this, options);
            this._latlng = toLatLng(latlng);
            this._radius = this.options.radius;
        },
        // @method setLatLng(latLng: LatLng): this
        // Sets the position of a circle marker to a new location.
        setLatLng: function(latlng) {
            var oldLatLng = this._latlng;
            this._latlng = toLatLng(latlng);
            this.redraw();
            // @event move: Event
            // Fired when the marker is moved via [`setLatLng`](#circlemarker-setlatlng). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
            return this.fire("move", {
                oldLatLng: oldLatLng,
                latlng: this._latlng
            });
        },
        // @method getLatLng(): LatLng
        // Returns the current geographical position of the circle marker
        getLatLng: function() {
            return this._latlng;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle marker. Units are in pixels.
        setRadius: function(radius) {
            this.options.radius = this._radius = radius;
            return this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of the circle
        getRadius: function() {
            return this._radius;
        },
        setStyle: function(options) {
            var radius = options && options.radius || this._radius;
            Path.prototype.setStyle.call(this, options);
            this.setRadius(radius);
            return this;
        },
        _project: function() {
            this._point = this._map.latLngToLayerPoint(this._latlng);
            this._updateBounds();
        },
        _updateBounds: function() {
            var r = this._radius, r2 = this._radiusY || r, w = this._clickTolerance(), p = [
                r + w,
                r2 + w
            ];
            this._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));
        },
        _update: function() {
            if (this._map) this._updatePath();
        },
        _updatePath: function() {
            this._renderer._updateCircle(this);
        },
        _empty: function() {
            return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(p) {
            return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
        }
    });
    // @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
    // Instantiates a circle marker object given a geographical point, and an optional options object.
    function circleMarker(latlng, options) {
        return new CircleMarker(latlng, options);
    }
    /*
   * @class Circle
   * @aka L.Circle
   * @inherits CircleMarker
   *
   * A class for drawing circle overlays on a map. Extends `CircleMarker`.
   *
   * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).
   *
   * @example
   *
   * ```js
   * L.circle([50.5, 30.5], {radius: 200}).addTo(map);
   * ```
   */ var Circle = CircleMarker.extend({
        initialize: function(latlng, options, legacyOptions) {
            if (typeof options === "number") // Backwards compatibility with 0.7.x factory (latlng, radius, options?)
            options = extend({}, legacyOptions, {
                radius: options
            });
            setOptions(this, options);
            this._latlng = toLatLng(latlng);
            if (isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
            // @section
            // @aka Circle options
            // @option radius: Number; Radius of the circle, in meters.
            this._mRadius = this.options.radius;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle. Units are in meters.
        setRadius: function(radius) {
            this._mRadius = radius;
            return this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of a circle. Units are in meters.
        getRadius: function() {
            return this._mRadius;
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
            var half = [
                this._radius,
                this._radiusY || this._radius
            ];
            return new LatLngBounds(this._map.layerPointToLatLng(this._point.subtract(half)), this._map.layerPointToLatLng(this._point.add(half)));
        },
        setStyle: Path.prototype.setStyle,
        _project: function() {
            var lng = this._latlng.lng, lat = this._latlng.lat, map = this._map, crs = map.options.crs;
            if (crs.distance === Earth.distance) {
                var d = Math.PI / 180, latR = this._mRadius / Earth.R / d, top = map.project([
                    lat + latR,
                    lng
                ]), bottom = map.project([
                    lat - latR,
                    lng
                ]), p = top.add(bottom).divideBy(2), lat2 = map.unproject(p).lat, lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) / (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;
                if (isNaN(lngR) || lngR === 0) lngR = latR / Math.cos(Math.PI / 180 * lat); // Fallback for edge case, #2425
                this._point = p.subtract(map.getPixelOrigin());
                this._radius = isNaN(lngR) ? 0 : p.x - map.project([
                    lat2,
                    lng - lngR
                ]).x;
                this._radiusY = p.y - top.y;
            } else {
                var latlng2 = crs.unproject(crs.project(this._latlng).subtract([
                    this._mRadius,
                    0
                ]));
                this._point = map.latLngToLayerPoint(this._latlng);
                this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
            }
            this._updateBounds();
        }
    });
    // @factory L.circle(latlng: LatLng, options?: Circle options)
    // Instantiates a circle object given a geographical point, and an options object
    // which contains the circle radius.
    // @alternative
    // @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
    // Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
    // Do not use in new applications or plugins.
    function circle(latlng, options, legacyOptions) {
        return new Circle(latlng, options, legacyOptions);
    }
    /*
   * @class Polyline
   * @aka L.Polyline
   * @inherits Path
   *
   * A class for drawing polyline overlays on a map. Extends `Path`.
   *
   * @example
   *
   * ```js
   * // create a red polyline from an array of LatLng points
   * var latlngs = [
   * 	[45.51, -122.68],
   * 	[37.77, -122.43],
   * 	[34.04, -118.2]
   * ];
   *
   * var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polyline
   * map.fitBounds(polyline.getBounds());
   * ```
   *
   * You can also pass a multi-dimensional array to represent a `MultiPolyline` shape:
   *
   * ```js
   * // create a red polyline from an array of arrays of LatLng points
   * var latlngs = [
   * 	[[45.51, -122.68],
   * 	 [37.77, -122.43],
   * 	 [34.04, -118.2]],
   * 	[[40.78, -73.91],
   * 	 [41.83, -87.62],
   * 	 [32.76, -96.72]]
   * ];
   * ```
   */ var Polyline = Path.extend({
        // @section
        // @aka Polyline options
        options: {
            // @option smoothFactor: Number = 1.0
            // How much to simplify the polyline on each zoom level. More means
            // better performance and smoother look, and less means more accurate representation.
            smoothFactor: 1.0,
            // @option noClip: Boolean = false
            // Disable polyline clipping.
            noClip: false
        },
        initialize: function(latlngs, options) {
            setOptions(this, options);
            this._setLatLngs(latlngs);
        },
        // @method getLatLngs(): LatLng[]
        // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
        getLatLngs: function() {
            return this._latlngs;
        },
        // @method setLatLngs(latlngs: LatLng[]): this
        // Replaces all the points in the polyline with the given array of geographical points.
        setLatLngs: function(latlngs) {
            this._setLatLngs(latlngs);
            return this.redraw();
        },
        // @method isEmpty(): Boolean
        // Returns `true` if the Polyline has no LatLngs.
        isEmpty: function() {
            return !this._latlngs.length;
        },
        // @method closestLayerPoint(p: Point): Point
        // Returns the point closest to `p` on the Polyline.
        closestLayerPoint: function(p) {
            var minDistance = Infinity, minPoint = null, closest = _sqClosestPointOnSegment, p1, p2;
            for(var j = 0, jLen = this._parts.length; j < jLen; j++){
                var points = this._parts[j];
                for(var i = 1, len = points.length; i < len; i++){
                    p1 = points[i - 1];
                    p2 = points[i];
                    var sqDist = closest(p, p1, p2, true);
                    if (sqDist < minDistance) {
                        minDistance = sqDist;
                        minPoint = closest(p, p1, p2);
                    }
                }
            }
            if (minPoint) minPoint.distance = Math.sqrt(minDistance);
            return minPoint;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
        getCenter: function() {
            // throws error when not yet added to map as this center calculation requires projected coordinates
            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
            return polylineCenter(this._defaultShape(), this._map.options.crs);
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
            return this._bounds;
        },
        // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
        // Adds a given point to the polyline. By default, adds to the first ring of
        // the polyline in case of a multi-polyline, but can be overridden by passing
        // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
        addLatLng: function(latlng, latlngs) {
            latlngs = latlngs || this._defaultShape();
            latlng = toLatLng(latlng);
            latlngs.push(latlng);
            this._bounds.extend(latlng);
            return this.redraw();
        },
        _setLatLngs: function(latlngs) {
            this._bounds = new LatLngBounds();
            this._latlngs = this._convertLatLngs(latlngs);
        },
        _defaultShape: function() {
            return isFlat(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
        _convertLatLngs: function(latlngs) {
            var result = [], flat = isFlat(latlngs);
            for(var i = 0, len = latlngs.length; i < len; i++)if (flat) {
                result[i] = toLatLng(latlngs[i]);
                this._bounds.extend(result[i]);
            } else result[i] = this._convertLatLngs(latlngs[i]);
            return result;
        },
        _project: function() {
            var pxBounds = new Bounds();
            this._rings = [];
            this._projectLatlngs(this._latlngs, this._rings, pxBounds);
            if (this._bounds.isValid() && pxBounds.isValid()) {
                this._rawPxBounds = pxBounds;
                this._updateBounds();
            }
        },
        _updateBounds: function() {
            var w = this._clickTolerance(), p = new Point(w, w);
            if (!this._rawPxBounds) return;
            this._pxBounds = new Bounds([
                this._rawPxBounds.min.subtract(p),
                this._rawPxBounds.max.add(p)
            ]);
        },
        // recursively turns latlngs into a set of rings with projected coordinates
        _projectLatlngs: function(latlngs, result, projectedBounds) {
            var flat = latlngs[0] instanceof LatLng, len = latlngs.length, i, ring;
            if (flat) {
                ring = [];
                for(i = 0; i < len; i++){
                    ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
                    projectedBounds.extend(ring[i]);
                }
                result.push(ring);
            } else for(i = 0; i < len; i++)this._projectLatlngs(latlngs[i], result, projectedBounds);
        },
        // clip polyline by renderer bounds so that we have less to render for performance
        _clipPoints: function() {
            var bounds = this._renderer._bounds;
            this._parts = [];
            if (!this._pxBounds || !this._pxBounds.intersects(bounds)) return;
            if (this.options.noClip) {
                this._parts = this._rings;
                return;
            }
            var parts = this._parts, i, j, k, len, len2, segment, points;
            for(i = 0, k = 0, len = this._rings.length; i < len; i++){
                points = this._rings[i];
                for(j = 0, len2 = points.length; j < len2 - 1; j++){
                    segment = clipSegment(points[j], points[j + 1], bounds, j, true);
                    if (!segment) continue;
                    parts[k] = parts[k] || [];
                    parts[k].push(segment[0]);
                    // if segment goes out of screen, or it's the last one, it's the end of the line part
                    if (segment[1] !== points[j + 1] || j === len2 - 2) {
                        parts[k].push(segment[1]);
                        k++;
                    }
                }
            }
        },
        // simplify each clipped part of the polyline for performance
        _simplifyPoints: function() {
            var parts = this._parts, tolerance = this.options.smoothFactor;
            for(var i = 0, len = parts.length; i < len; i++)parts[i] = simplify(parts[i], tolerance);
        },
        _update: function() {
            if (!this._map) return;
            this._clipPoints();
            this._simplifyPoints();
            this._updatePath();
        },
        _updatePath: function() {
            this._renderer._updatePoly(this);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(p, closed) {
            var i, j, k, len, len2, part, w = this._clickTolerance();
            if (!this._pxBounds || !this._pxBounds.contains(p)) return false;
            // hit detection for polylines
            for(i = 0, len = this._parts.length; i < len; i++){
                part = this._parts[i];
                for(j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++){
                    if (!closed && j === 0) continue;
                    if (pointToSegmentDistance(p, part[k], part[j]) <= w) return true;
                }
            }
            return false;
        }
    });
    // @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
    // Instantiates a polyline object given an array of geographical points and
    // optionally an options object. You can create a `Polyline` object with
    // multiple separate lines (`MultiPolyline`) by passing an array of arrays
    // of geographic points.
    function polyline(latlngs, options) {
        return new Polyline(latlngs, options);
    }
    // Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.
    Polyline._flat = _flat;
    /*
   * @class Polygon
   * @aka L.Polygon
   * @inherits Polyline
   *
   * A class for drawing polygon overlays on a map. Extends `Polyline`.
   *
   * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
   *
   *
   * @example
   *
   * ```js
   * // create a red polygon from an array of LatLng points
   * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
   *
   * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polygon
   * map.fitBounds(polygon.getBounds());
   * ```
   *
   * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
   *
   * ```js
   * var latlngs = [
   *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   * ];
   * ```
   *
   * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
   *
   * ```js
   * var latlngs = [
   *   [ // first polygon
   *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   *   ],
   *   [ // second polygon
   *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
   *   ]
   * ];
   * ```
   */ var Polygon = Polyline.extend({
        options: {
            fill: true
        },
        isEmpty: function() {
            return !this._latlngs.length || !this._latlngs[0].length;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
        getCenter: function() {
            // throws error when not yet added to map as this center calculation requires projected coordinates
            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
            return polygonCenter(this._defaultShape(), this._map.options.crs);
        },
        _convertLatLngs: function(latlngs) {
            var result = Polyline.prototype._convertLatLngs.call(this, latlngs), len = result.length;
            // remove last point if it equals first one
            if (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) result.pop();
            return result;
        },
        _setLatLngs: function(latlngs) {
            Polyline.prototype._setLatLngs.call(this, latlngs);
            if (isFlat(this._latlngs)) this._latlngs = [
                this._latlngs
            ];
        },
        _defaultShape: function() {
            return isFlat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
            // polygons need a different clipping algorithm so we redefine that
            var bounds = this._renderer._bounds, w = this.options.weight, p = new Point(w, w);
            // increase clip padding by stroke width to avoid stroke on clip edges
            bounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));
            this._parts = [];
            if (!this._pxBounds || !this._pxBounds.intersects(bounds)) return;
            if (this.options.noClip) {
                this._parts = this._rings;
                return;
            }
            for(var i = 0, len = this._rings.length, clipped; i < len; i++){
                clipped = clipPolygon(this._rings[i], bounds, true);
                if (clipped.length) this._parts.push(clipped);
            }
        },
        _updatePath: function() {
            this._renderer._updatePoly(this, true);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(p) {
            var inside = false, part, p1, p2, i, j, k, len, len2;
            if (!this._pxBounds || !this._pxBounds.contains(p)) return false;
            // ray casting algorithm for detecting if point is in polygon
            for(i = 0, len = this._parts.length; i < len; i++){
                part = this._parts[i];
                for(j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++){
                    p1 = part[j];
                    p2 = part[k];
                    if (p1.y > p.y !== p2.y > p.y && p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x) inside = !inside;
                }
            }
            // also check if it's on polygon stroke
            return inside || Polyline.prototype._containsPoint.call(this, p, true);
        }
    });
    // @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
    function polygon(latlngs, options) {
        return new Polygon(latlngs, options);
    }
    /*
   * @class GeoJSON
   * @aka L.GeoJSON
   * @inherits FeatureGroup
   *
   * Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse
   * GeoJSON data and display it on the map. Extends `FeatureGroup`.
   *
   * @example
   *
   * ```js
   * L.geoJSON(data, {
   * 	style: function (feature) {
   * 		return {color: feature.properties.color};
   * 	}
   * }).bindPopup(function (layer) {
   * 	return layer.feature.properties.description;
   * }).addTo(map);
   * ```
   */ var GeoJSON = FeatureGroup.extend({
        /* @section
  	 * @aka GeoJSON options
  	 *
  	 * @option pointToLayer: Function = *
  	 * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
  	 * called when data is added, passing the GeoJSON point feature and its `LatLng`.
  	 * The default is to spawn a default `Marker`:
  	 * ```js
  	 * function(geoJsonPoint, latlng) {
  	 * 	return L.marker(latlng);
  	 * }
  	 * ```
  	 *
  	 * @option style: Function = *
  	 * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
  	 * called internally when data is added.
  	 * The default value is to not override any defaults:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return {}
  	 * }
  	 * ```
  	 *
  	 * @option onEachFeature: Function = *
  	 * A `Function` that will be called once for each created `Feature`, after it has
  	 * been created and styled. Useful for attaching events and popups to features.
  	 * The default is to do nothing with the newly created layers:
  	 * ```js
  	 * function (feature, layer) {}
  	 * ```
  	 *
  	 * @option filter: Function = *
  	 * A `Function` that will be used to decide whether to include a feature or not.
  	 * The default is to include all features:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return true;
  	 * }
  	 * ```
  	 * Note: dynamically changing the `filter` option will have effect only on newly
  	 * added data. It will _not_ re-evaluate already included features.
  	 *
  	 * @option coordsToLatLng: Function = *
  	 * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
  	 * The default is the `coordsToLatLng` static method.
  	 *
  	 * @option markersInheritOptions: Boolean = false
  	 * Whether default Markers for "Point" type Features inherit from group options.
  	 */ initialize: function(geojson, options) {
            setOptions(this, options);
            this._layers = {};
            if (geojson) this.addData(geojson);
        },
        // @method addData( <GeoJSON> data ): this
        // Adds a GeoJSON object to the layer.
        addData: function(geojson) {
            var features = isArray(geojson) ? geojson : geojson.features, i, len, feature;
            if (features) {
                for(i = 0, len = features.length; i < len; i++){
                    // only add this if geometry or geometries are set and not null
                    feature = features[i];
                    if (feature.geometries || feature.geometry || feature.features || feature.coordinates) this.addData(feature);
                }
                return this;
            }
            var options = this.options;
            if (options.filter && !options.filter(geojson)) return this;
            var layer = geometryToLayer(geojson, options);
            if (!layer) return this;
            layer.feature = asFeature(geojson);
            layer.defaultOptions = layer.options;
            this.resetStyle(layer);
            if (options.onEachFeature) options.onEachFeature(geojson, layer);
            return this.addLayer(layer);
        },
        // @method resetStyle( <Path> layer? ): this
        // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
        // If `layer` is omitted, the style of all features in the current layer is reset.
        resetStyle: function(layer) {
            if (layer === undefined) return this.eachLayer(this.resetStyle, this);
            // reset any custom styles
            layer.options = extend({}, layer.defaultOptions);
            this._setLayerStyle(layer, this.options.style);
            return this;
        },
        // @method setStyle( <Function> style ): this
        // Changes styles of GeoJSON vector layers with the given style function.
        setStyle: function(style) {
            return this.eachLayer(function(layer) {
                this._setLayerStyle(layer, style);
            }, this);
        },
        _setLayerStyle: function(layer, style) {
            if (layer.setStyle) {
                if (typeof style === "function") style = style(layer.feature);
                layer.setStyle(style);
            }
        }
    });
    // @section
    // There are several static functions which can be called without instantiating L.GeoJSON:
    // @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
    // Creates a `Layer` from a given GeoJSON feature. Can use a custom
    // [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
    // functions if provided as options.
    function geometryToLayer(geojson, options) {
        var geometry = geojson.type === "Feature" ? geojson.geometry : geojson, coords = geometry ? geometry.coordinates : null, layers = [], pointToLayer = options && options.pointToLayer, _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng, latlng, latlngs, i, len;
        if (!coords && !geometry) return null;
        switch(geometry.type){
            case "Point":
                latlng = _coordsToLatLng(coords);
                return _pointToLayer(pointToLayer, geojson, latlng, options);
            case "MultiPoint":
                for(i = 0, len = coords.length; i < len; i++){
                    latlng = _coordsToLatLng(coords[i]);
                    layers.push(_pointToLayer(pointToLayer, geojson, latlng, options));
                }
                return new FeatureGroup(layers);
            case "LineString":
            case "MultiLineString":
                latlngs = coordsToLatLngs(coords, geometry.type === "LineString" ? 0 : 1, _coordsToLatLng);
                return new Polyline(latlngs, options);
            case "Polygon":
            case "MultiPolygon":
                latlngs = coordsToLatLngs(coords, geometry.type === "Polygon" ? 1 : 2, _coordsToLatLng);
                return new Polygon(latlngs, options);
            case "GeometryCollection":
                for(i = 0, len = geometry.geometries.length; i < len; i++){
                    var geoLayer = geometryToLayer({
                        geometry: geometry.geometries[i],
                        type: "Feature",
                        properties: geojson.properties
                    }, options);
                    if (geoLayer) layers.push(geoLayer);
                }
                return new FeatureGroup(layers);
            case "FeatureCollection":
                for(i = 0, len = geometry.features.length; i < len; i++){
                    var featureLayer = geometryToLayer(geometry.features[i], options);
                    if (featureLayer) layers.push(featureLayer);
                }
                return new FeatureGroup(layers);
            default:
                throw new Error("Invalid GeoJSON object.");
        }
    }
    function _pointToLayer(pointToLayerFn, geojson, latlng, options) {
        return pointToLayerFn ? pointToLayerFn(geojson, latlng) : new Marker(latlng, options && options.markersInheritOptions && options);
    }
    // @function coordsToLatLng(coords: Array): LatLng
    // Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
    // or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
    function coordsToLatLng(coords) {
        return new LatLng(coords[1], coords[0], coords[2]);
    }
    // @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
    // Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
    // `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
    // Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.
    function coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {
        var latlngs = [];
        for(var i = 0, len = coords.length, latlng; i < len; i++){
            latlng = levelsDeep ? coordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) : (_coordsToLatLng || coordsToLatLng)(coords[i]);
            latlngs.push(latlng);
        }
        return latlngs;
    }
    // @function latLngToCoords(latlng: LatLng, precision?: Number|false): Array
    // Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)
    // Coordinates values are rounded with [`formatNum`](#util-formatnum) function.
    function latLngToCoords(latlng, precision) {
        latlng = toLatLng(latlng);
        return latlng.alt !== undefined ? [
            formatNum(latlng.lng, precision),
            formatNum(latlng.lat, precision),
            formatNum(latlng.alt, precision)
        ] : [
            formatNum(latlng.lng, precision),
            formatNum(latlng.lat, precision)
        ];
    }
    // @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean, precision?: Number|false): Array
    // Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
    // `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.
    // Coordinates values are rounded with [`formatNum`](#util-formatnum) function.
    function latLngsToCoords(latlngs, levelsDeep, closed, precision) {
        var coords = [];
        for(var i = 0, len = latlngs.length; i < len; i++)// Check for flat arrays required to ensure unbalanced arrays are correctly converted in recursion
        coords.push(levelsDeep ? latLngsToCoords(latlngs[i], isFlat(latlngs[i]) ? 0 : levelsDeep - 1, closed, precision) : latLngToCoords(latlngs[i], precision));
        if (!levelsDeep && closed && coords.length > 0) coords.push(coords[0].slice());
        return coords;
    }
    function getFeature(layer, newGeometry) {
        return layer.feature ? extend({}, layer.feature, {
            geometry: newGeometry
        }) : asFeature(newGeometry);
    }
    // @function asFeature(geojson: Object): Object
    // Normalize GeoJSON geometries/features into GeoJSON features.
    function asFeature(geojson) {
        if (geojson.type === "Feature" || geojson.type === "FeatureCollection") return geojson;
        return {
            type: "Feature",
            properties: {},
            geometry: geojson
        };
    }
    var PointToGeoJSON = {
        toGeoJSON: function(precision) {
            return getFeature(this, {
                type: "Point",
                coordinates: latLngToCoords(this.getLatLng(), precision)
            });
        }
    };
    // @namespace Marker
    // @section Other methods
    // @method toGeoJSON(precision?: Number|false): Object
    // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
    // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).
    Marker.include(PointToGeoJSON);
    // @namespace CircleMarker
    // @method toGeoJSON(precision?: Number|false): Object
    // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
    // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).
    Circle.include(PointToGeoJSON);
    CircleMarker.include(PointToGeoJSON);
    // @namespace Polyline
    // @method toGeoJSON(precision?: Number|false): Object
    // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
    // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).
    Polyline.include({
        toGeoJSON: function(precision) {
            var multi = !isFlat(this._latlngs);
            var coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);
            return getFeature(this, {
                type: (multi ? "Multi" : "") + "LineString",
                coordinates: coords
            });
        }
    });
    // @namespace Polygon
    // @method toGeoJSON(precision?: Number|false): Object
    // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
    // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).
    Polygon.include({
        toGeoJSON: function(precision) {
            var holes = !isFlat(this._latlngs), multi = holes && !isFlat(this._latlngs[0]);
            var coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);
            if (!holes) coords = [
                coords
            ];
            return getFeature(this, {
                type: (multi ? "Multi" : "") + "Polygon",
                coordinates: coords
            });
        }
    });
    // @namespace LayerGroup
    LayerGroup.include({
        toMultiPoint: function(precision) {
            var coords = [];
            this.eachLayer(function(layer) {
                coords.push(layer.toGeoJSON(precision).geometry.coordinates);
            });
            return getFeature(this, {
                type: "MultiPoint",
                coordinates: coords
            });
        },
        // @method toGeoJSON(precision?: Number|false): Object
        // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
        // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
        toGeoJSON: function(precision) {
            var type = this.feature && this.feature.geometry && this.feature.geometry.type;
            if (type === "MultiPoint") return this.toMultiPoint(precision);
            var isGeometryCollection = type === "GeometryCollection", jsons = [];
            this.eachLayer(function(layer) {
                if (layer.toGeoJSON) {
                    var json = layer.toGeoJSON(precision);
                    if (isGeometryCollection) jsons.push(json.geometry);
                    else {
                        var feature = asFeature(json);
                        // Squash nested feature collections
                        if (feature.type === "FeatureCollection") jsons.push.apply(jsons, feature.features);
                        else jsons.push(feature);
                    }
                }
            });
            if (isGeometryCollection) return getFeature(this, {
                geometries: jsons,
                type: "GeometryCollection"
            });
            return {
                type: "FeatureCollection",
                features: jsons
            };
        }
    });
    // @namespace GeoJSON
    // @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
    // Creates a GeoJSON layer. Optionally accepts an object in
    // [GeoJSON format](https://tools.ietf.org/html/rfc7946) to display on the map
    // (you can alternatively add it later with `addData` method) and an `options` object.
    function geoJSON(geojson, options) {
        return new GeoJSON(geojson, options);
    }
    // Backward compatibility.
    var geoJson = geoJSON;
    /*
   * @class ImageOverlay
   * @aka L.ImageOverlay
   * @inherits Interactive layer
   *
   * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * var imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
   * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
   * L.imageOverlay(imageUrl, imageBounds).addTo(map);
   * ```
   */ var ImageOverlay = Layer.extend({
        // @section
        // @aka ImageOverlay options
        options: {
            // @option opacity: Number = 1.0
            // The opacity of the image overlay.
            opacity: 1,
            // @option alt: String = ''
            // Text for the `alt` attribute of the image (useful for accessibility).
            alt: "",
            // @option interactive: Boolean = false
            // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
            interactive: false,
            // @option crossOrigin: Boolean|String = false
            // Whether the crossOrigin attribute will be added to the image.
            // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
            // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
            crossOrigin: false,
            // @option errorOverlayUrl: String = ''
            // URL to the overlay image to show in place of the overlay that failed to load.
            errorOverlayUrl: "",
            // @option zIndex: Number = 1
            // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
            zIndex: 1,
            // @option className: String = ''
            // A custom class name to assign to the image. Empty by default.
            className: ""
        },
        initialize: function(url, bounds, options) {
            this._url = url;
            this._bounds = toLatLngBounds(bounds);
            setOptions(this, options);
        },
        onAdd: function() {
            if (!this._image) {
                this._initImage();
                if (this.options.opacity < 1) this._updateOpacity();
            }
            if (this.options.interactive) {
                addClass(this._image, "leaflet-interactive");
                this.addInteractiveTarget(this._image);
            }
            this.getPane().appendChild(this._image);
            this._reset();
        },
        onRemove: function() {
            remove(this._image);
            if (this.options.interactive) this.removeInteractiveTarget(this._image);
        },
        // @method setOpacity(opacity: Number): this
        // Sets the opacity of the overlay.
        setOpacity: function(opacity) {
            this.options.opacity = opacity;
            if (this._image) this._updateOpacity();
            return this;
        },
        setStyle: function(styleOpts) {
            if (styleOpts.opacity) this.setOpacity(styleOpts.opacity);
            return this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all overlays.
        bringToFront: function() {
            if (this._map) toFront(this._image);
            return this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all overlays.
        bringToBack: function() {
            if (this._map) toBack(this._image);
            return this;
        },
        // @method setUrl(url: String): this
        // Changes the URL of the image.
        setUrl: function(url) {
            this._url = url;
            if (this._image) this._image.src = url;
            return this;
        },
        // @method setBounds(bounds: LatLngBounds): this
        // Update the bounds that this ImageOverlay covers
        setBounds: function(bounds) {
            this._bounds = toLatLngBounds(bounds);
            if (this._map) this._reset();
            return this;
        },
        getEvents: function() {
            var events = {
                zoom: this._reset,
                viewreset: this._reset
            };
            if (this._zoomAnimated) events.zoomanim = this._animateZoom;
            return events;
        },
        // @method setZIndex(value: Number): this
        // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
        setZIndex: function(value) {
            this.options.zIndex = value;
            this._updateZIndex();
            return this;
        },
        // @method getBounds(): LatLngBounds
        // Get the bounds that this ImageOverlay covers
        getBounds: function() {
            return this._bounds;
        },
        // @method getElement(): HTMLElement
        // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
        // used by this overlay.
        getElement: function() {
            return this._image;
        },
        _initImage: function() {
            var wasElementSupplied = this._url.tagName === "IMG";
            var img = this._image = wasElementSupplied ? this._url : create$1("img");
            addClass(img, "leaflet-image-layer");
            if (this._zoomAnimated) addClass(img, "leaflet-zoom-animated");
            if (this.options.className) addClass(img, this.options.className);
            img.onselectstart = falseFn;
            img.onmousemove = falseFn;
            // @event load: Event
            // Fired when the ImageOverlay layer has loaded its image
            img.onload = bind(this.fire, this, "load");
            img.onerror = bind(this._overlayOnError, this, "error");
            if (this.options.crossOrigin || this.options.crossOrigin === "") img.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin;
            if (this.options.zIndex) this._updateZIndex();
            if (wasElementSupplied) {
                this._url = img.src;
                return;
            }
            img.src = this._url;
            img.alt = this.options.alt;
        },
        _animateZoom: function(e) {
            var scale = this._map.getZoomScale(e.zoom), offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;
            setTransform(this._image, offset, scale);
        },
        _reset: function() {
            var image = this._image, bounds = new Bounds(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())), size = bounds.getSize();
            setPosition(image, bounds.min);
            image.style.width = size.x + "px";
            image.style.height = size.y + "px";
        },
        _updateOpacity: function() {
            setOpacity(this._image, this.options.opacity);
        },
        _updateZIndex: function() {
            if (this._image && this.options.zIndex !== undefined && this.options.zIndex !== null) this._image.style.zIndex = this.options.zIndex;
        },
        _overlayOnError: function() {
            // @event error: Event
            // Fired when the ImageOverlay layer fails to load its image
            this.fire("error");
            var errorUrl = this.options.errorOverlayUrl;
            if (errorUrl && this._url !== errorUrl) {
                this._url = errorUrl;
                this._image.src = errorUrl;
            }
        },
        // @method getCenter(): LatLng
        // Returns the center of the ImageOverlay.
        getCenter: function() {
            return this._bounds.getCenter();
        }
    });
    // @factory L.imageOverlay(imageUrl: String, bounds: LatLngBounds, options?: ImageOverlay options)
    // Instantiates an image overlay object given the URL of the image and the
    // geographical bounds it is tied to.
    var imageOverlay = function(url, bounds, options) {
        return new ImageOverlay(url, bounds, options);
    };
    /*
   * @class VideoOverlay
   * @aka L.VideoOverlay
   * @inherits ImageOverlay
   *
   * Used to load and display a video player over specific bounds of the map. Extends `ImageOverlay`.
   *
   * A video overlay uses the [`<video>`](https://developer.mozilla.org/docs/Web/HTML/Element/video)
   * HTML5 element.
   *
   * @example
   *
   * ```js
   * var videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
   * 	videoBounds = [[ 32, -130], [ 13, -100]];
   * L.videoOverlay(videoUrl, videoBounds ).addTo(map);
   * ```
   */ var VideoOverlay = ImageOverlay.extend({
        // @section
        // @aka VideoOverlay options
        options: {
            // @option autoplay: Boolean = true
            // Whether the video starts playing automatically when loaded.
            // On some browsers autoplay will only work with `muted: true`
            autoplay: true,
            // @option loop: Boolean = true
            // Whether the video will loop back to the beginning when played.
            loop: true,
            // @option keepAspectRatio: Boolean = true
            // Whether the video will save aspect ratio after the projection.
            // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
            keepAspectRatio: true,
            // @option muted: Boolean = false
            // Whether the video starts on mute when loaded.
            muted: false,
            // @option playsInline: Boolean = true
            // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
            playsInline: true
        },
        _initImage: function() {
            var wasElementSupplied = this._url.tagName === "VIDEO";
            var vid = this._image = wasElementSupplied ? this._url : create$1("video");
            addClass(vid, "leaflet-image-layer");
            if (this._zoomAnimated) addClass(vid, "leaflet-zoom-animated");
            if (this.options.className) addClass(vid, this.options.className);
            vid.onselectstart = falseFn;
            vid.onmousemove = falseFn;
            // @event load: Event
            // Fired when the video has finished loading the first frame
            vid.onloadeddata = bind(this.fire, this, "load");
            if (wasElementSupplied) {
                var sourceElements = vid.getElementsByTagName("source");
                var sources = [];
                for(var j = 0; j < sourceElements.length; j++)sources.push(sourceElements[j].src);
                this._url = sourceElements.length > 0 ? sources : [
                    vid.src
                ];
                return;
            }
            if (!isArray(this._url)) this._url = [
                this._url
            ];
            if (!this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(vid.style, "objectFit")) vid.style["objectFit"] = "fill";
            vid.autoplay = !!this.options.autoplay;
            vid.loop = !!this.options.loop;
            vid.muted = !!this.options.muted;
            vid.playsInline = !!this.options.playsInline;
            for(var i = 0; i < this._url.length; i++){
                var source = create$1("source");
                source.src = this._url[i];
                vid.appendChild(source);
            }
        }
    });
    // @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)
    // Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the
    // geographical bounds it is tied to.
    function videoOverlay(video, bounds, options) {
        return new VideoOverlay(video, bounds, options);
    }
    /*
   * @class SVGOverlay
   * @aka L.SVGOverlay
   * @inherits ImageOverlay
   *
   * Used to load, display and provide DOM access to an SVG file over specific bounds of the map. Extends `ImageOverlay`.
   *
   * An SVG overlay uses the [`<svg>`](https://developer.mozilla.org/docs/Web/SVG/Element/svg) element.
   *
   * @example
   *
   * ```js
   * var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
   * svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
   * svgElement.setAttribute('viewBox', "0 0 200 200");
   * svgElement.innerHTML = '<rect width="200" height="200"/><rect x="75" y="23" width="50" height="50" style="fill:red"/><rect x="75" y="123" width="50" height="50" style="fill:#0013ff"/>';
   * var svgElementBounds = [ [ 32, -130 ], [ 13, -100 ] ];
   * L.svgOverlay(svgElement, svgElementBounds).addTo(map);
   * ```
   */ var SVGOverlay = ImageOverlay.extend({
        _initImage: function() {
            var el = this._image = this._url;
            addClass(el, "leaflet-image-layer");
            if (this._zoomAnimated) addClass(el, "leaflet-zoom-animated");
            if (this.options.className) addClass(el, this.options.className);
            el.onselectstart = falseFn;
            el.onmousemove = falseFn;
        }
    });
    // @factory L.svgOverlay(svg: String|SVGElement, bounds: LatLngBounds, options?: SVGOverlay options)
    // Instantiates an image overlay object given an SVG element and the geographical bounds it is tied to.
    // A viewBox attribute is required on the SVG element to zoom in and out properly.
    function svgOverlay(el, bounds, options) {
        return new SVGOverlay(el, bounds, options);
    }
    /*
   * @class DivOverlay
   * @inherits Interactive layer
   * @aka L.DivOverlay
   * Base model for L.Popup and L.Tooltip. Inherit from it for custom overlays like plugins.
   */ // @namespace DivOverlay
    var DivOverlay = Layer.extend({
        // @section
        // @aka DivOverlay options
        options: {
            // @option interactive: Boolean = false
            // If true, the popup/tooltip will listen to the mouse events.
            interactive: false,
            // @option offset: Point = Point(0, 0)
            // The offset of the overlay position.
            offset: [
                0,
                0
            ],
            // @option className: String = ''
            // A custom CSS class name to assign to the overlay.
            className: "",
            // @option pane: String = undefined
            // `Map pane` where the overlay will be added.
            pane: undefined,
            // @option content: String|HTMLElement|Function = ''
            // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
            // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
            content: ""
        },
        initialize: function(options, source) {
            if (options && (options instanceof LatLng || isArray(options))) {
                this._latlng = toLatLng(options);
                setOptions(this, source);
            } else {
                setOptions(this, options);
                this._source = source;
            }
            if (this.options.content) this._content = this.options.content;
        },
        // @method openOn(map: Map): this
        // Adds the overlay to the map.
        // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
        openOn: function(map) {
            map = arguments.length ? map : this._source._map; // experimental, not the part of public api
            if (!map.hasLayer(this)) map.addLayer(this);
            return this;
        },
        // @method close(): this
        // Closes the overlay.
        // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
        // and `layer.closePopup()`/`.closeTooltip()`.
        close: function() {
            if (this._map) this._map.removeLayer(this);
            return this;
        },
        // @method toggle(layer?: Layer): this
        // Opens or closes the overlay bound to layer depending on its current state.
        // Argument may be omitted only for overlay bound to layer.
        // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
        toggle: function(layer) {
            if (this._map) this.close();
            else {
                if (arguments.length) this._source = layer;
                else layer = this._source;
                this._prepareOpen();
                // open the overlay on the map
                this.openOn(layer._map);
            }
            return this;
        },
        onAdd: function(map) {
            this._zoomAnimated = map._zoomAnimated;
            if (!this._container) this._initLayout();
            if (map._fadeAnimated) setOpacity(this._container, 0);
            clearTimeout(this._removeTimeout);
            this.getPane().appendChild(this._container);
            this.update();
            if (map._fadeAnimated) setOpacity(this._container, 1);
            this.bringToFront();
            if (this.options.interactive) {
                addClass(this._container, "leaflet-interactive");
                this.addInteractiveTarget(this._container);
            }
        },
        onRemove: function(map) {
            if (map._fadeAnimated) {
                setOpacity(this._container, 0);
                this._removeTimeout = setTimeout(bind(remove, undefined, this._container), 200);
            } else remove(this._container);
            if (this.options.interactive) {
                removeClass(this._container, "leaflet-interactive");
                this.removeInteractiveTarget(this._container);
            }
        },
        // @namespace DivOverlay
        // @method getLatLng: LatLng
        // Returns the geographical point of the overlay.
        getLatLng: function() {
            return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Sets the geographical point where the overlay will open.
        setLatLng: function(latlng) {
            this._latlng = toLatLng(latlng);
            if (this._map) {
                this._updatePosition();
                this._adjustPan();
            }
            return this;
        },
        // @method getContent: String|HTMLElement
        // Returns the content of the overlay.
        getContent: function() {
            return this._content;
        },
        // @method setContent(htmlContent: String|HTMLElement|Function): this
        // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
        // The function should return a `String` or `HTMLElement` to be used in the overlay.
        setContent: function(content) {
            this._content = content;
            this.update();
            return this;
        },
        // @method getElement: String|HTMLElement
        // Returns the HTML container of the overlay.
        getElement: function() {
            return this._container;
        },
        // @method update: null
        // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
        update: function() {
            if (!this._map) return;
            this._container.style.visibility = "hidden";
            this._updateContent();
            this._updateLayout();
            this._updatePosition();
            this._container.style.visibility = "";
            this._adjustPan();
        },
        getEvents: function() {
            var events = {
                zoom: this._updatePosition,
                viewreset: this._updatePosition
            };
            if (this._zoomAnimated) events.zoomanim = this._animateZoom;
            return events;
        },
        // @method isOpen: Boolean
        // Returns `true` when the overlay is visible on the map.
        isOpen: function() {
            return !!this._map && this._map.hasLayer(this);
        },
        // @method bringToFront: this
        // Brings this overlay in front of other overlays (in the same map pane).
        bringToFront: function() {
            if (this._map) toFront(this._container);
            return this;
        },
        // @method bringToBack: this
        // Brings this overlay to the back of other overlays (in the same map pane).
        bringToBack: function() {
            if (this._map) toBack(this._container);
            return this;
        },
        // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
        _prepareOpen: function(latlng) {
            var source = this._source;
            if (!source._map) return false;
            if (source instanceof FeatureGroup) {
                source = null;
                var layers = this._source._layers;
                for(var id in layers)if (layers[id]._map) {
                    source = layers[id];
                    break;
                }
                if (!source) return false;
                 // Unable to get source layer.
                // set overlay source to this layer
                this._source = source;
            }
            if (!latlng) {
                if (source.getCenter) latlng = source.getCenter();
                else if (source.getLatLng) latlng = source.getLatLng();
                else if (source.getBounds) latlng = source.getBounds().getCenter();
                else throw new Error("Unable to get source layer LatLng.");
            }
            this.setLatLng(latlng);
            if (this._map) // update the overlay (content, layout, etc...)
            this.update();
            return true;
        },
        _updateContent: function() {
            if (!this._content) return;
            var node = this._contentNode;
            var content = typeof this._content === "function" ? this._content(this._source || this) : this._content;
            if (typeof content === "string") node.innerHTML = content;
            else {
                while(node.hasChildNodes())node.removeChild(node.firstChild);
                node.appendChild(content);
            }
            // @namespace DivOverlay
            // @section DivOverlay events
            // @event contentupdate: Event
            // Fired when the content of the overlay is updated
            this.fire("contentupdate");
        },
        _updatePosition: function() {
            if (!this._map) return;
            var pos = this._map.latLngToLayerPoint(this._latlng), offset = toPoint(this.options.offset), anchor = this._getAnchor();
            if (this._zoomAnimated) setPosition(this._container, pos.add(anchor));
            else offset = offset.add(pos).add(anchor);
            var bottom = this._containerBottom = -offset.y, left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;
            // bottom position the overlay in case the height of the overlay changes (images loading etc)
            this._container.style.bottom = bottom + "px";
            this._container.style.left = left + "px";
        },
        _getAnchor: function() {
            return [
                0,
                0
            ];
        }
    });
    Map.include({
        _initOverlay: function(OverlayClass, content, latlng, options) {
            var overlay = content;
            if (!(overlay instanceof OverlayClass)) overlay = new OverlayClass(options).setContent(content);
            if (latlng) overlay.setLatLng(latlng);
            return overlay;
        }
    });
    Layer.include({
        _initOverlay: function(OverlayClass, old, content, options) {
            var overlay = content;
            if (overlay instanceof OverlayClass) {
                setOptions(overlay, options);
                overlay._source = this;
            } else {
                overlay = old && !options ? old : new OverlayClass(options, this);
                overlay.setContent(content);
            }
            return overlay;
        }
    });
    /*
   * @class Popup
   * @inherits DivOverlay
   * @aka L.Popup
   * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
   * open popups while making sure that only one popup is open at one time
   * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
   *
   * @example
   *
   * If you want to just bind a popup to marker click and then open it, it's really easy:
   *
   * ```js
   * marker.bindPopup(popupContent).openPopup();
   * ```
   * Path overlays like polylines also have a `bindPopup` method.
   *
   * A popup can be also standalone:
   *
   * ```js
   * var popup = L.popup()
   * 	.setLatLng(latlng)
   * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   * or
   * ```js
   * var popup = L.popup(latlng, {content: '<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   */ // @namespace Popup
    var Popup = DivOverlay.extend({
        // @section
        // @aka Popup options
        options: {
            // @option pane: String = 'popupPane'
            // `Map pane` where the popup will be added.
            pane: "popupPane",
            // @option offset: Point = Point(0, 7)
            // The offset of the popup position.
            offset: [
                0,
                7
            ],
            // @option maxWidth: Number = 300
            // Max width of the popup, in pixels.
            maxWidth: 300,
            // @option minWidth: Number = 50
            // Min width of the popup, in pixels.
            minWidth: 50,
            // @option maxHeight: Number = null
            // If set, creates a scrollable container of the given height
            // inside a popup if its content exceeds it.
            // The scrollable container can be styled using the
            // `leaflet-popup-scrolled` CSS class selector.
            maxHeight: null,
            // @option autoPan: Boolean = true
            // Set it to `false` if you don't want the map to do panning animation
            // to fit the opened popup.
            autoPan: true,
            // @option autoPanPaddingTopLeft: Point = null
            // The margin between the popup and the top left corner of the map
            // view after autopanning was performed.
            autoPanPaddingTopLeft: null,
            // @option autoPanPaddingBottomRight: Point = null
            // The margin between the popup and the bottom right corner of the map
            // view after autopanning was performed.
            autoPanPaddingBottomRight: null,
            // @option autoPanPadding: Point = Point(5, 5)
            // Equivalent of setting both top left and bottom right autopan padding to the same value.
            autoPanPadding: [
                5,
                5
            ],
            // @option keepInView: Boolean = false
            // Set it to `true` if you want to prevent users from panning the popup
            // off of the screen while it is open.
            keepInView: false,
            // @option closeButton: Boolean = true
            // Controls the presence of a close button in the popup.
            closeButton: true,
            // @option autoClose: Boolean = true
            // Set it to `false` if you want to override the default behavior of
            // the popup closing when another popup is opened.
            autoClose: true,
            // @option closeOnEscapeKey: Boolean = true
            // Set it to `false` if you want to override the default behavior of
            // the ESC key for closing of the popup.
            closeOnEscapeKey: true,
            // @option closeOnClick: Boolean = *
            // Set it if you want to override the default behavior of the popup closing when user clicks
            // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
            // @option className: String = ''
            // A custom CSS class name to assign to the popup.
            className: ""
        },
        // @namespace Popup
        // @method openOn(map: Map): this
        // Alternative to `map.openPopup(popup)`.
        // Adds the popup to the map and closes the previous one.
        openOn: function(map) {
            map = arguments.length ? map : this._source._map; // experimental, not the part of public api
            if (!map.hasLayer(this) && map._popup && map._popup.options.autoClose) map.removeLayer(map._popup);
            map._popup = this;
            return DivOverlay.prototype.openOn.call(this, map);
        },
        onAdd: function(map) {
            DivOverlay.prototype.onAdd.call(this, map);
            // @namespace Map
            // @section Popup events
            // @event popupopen: PopupEvent
            // Fired when a popup is opened in the map
            map.fire("popupopen", {
                popup: this
            });
            if (this._source) {
                // @namespace Layer
                // @section Popup events
                // @event popupopen: PopupEvent
                // Fired when a popup bound to this layer is opened
                this._source.fire("popupopen", {
                    popup: this
                }, true);
                // For non-path layers, we toggle the popup when clicking
                // again the layer, so prevent the map to reopen it.
                if (!(this._source instanceof Path)) this._source.on("preclick", stopPropagation);
            }
        },
        onRemove: function(map) {
            DivOverlay.prototype.onRemove.call(this, map);
            // @namespace Map
            // @section Popup events
            // @event popupclose: PopupEvent
            // Fired when a popup in the map is closed
            map.fire("popupclose", {
                popup: this
            });
            if (this._source) {
                // @namespace Layer
                // @section Popup events
                // @event popupclose: PopupEvent
                // Fired when a popup bound to this layer is closed
                this._source.fire("popupclose", {
                    popup: this
                }, true);
                if (!(this._source instanceof Path)) this._source.off("preclick", stopPropagation);
            }
        },
        getEvents: function() {
            var events = DivOverlay.prototype.getEvents.call(this);
            if (this.options.closeOnClick !== undefined ? this.options.closeOnClick : this._map.options.closePopupOnClick) events.preclick = this.close;
            if (this.options.keepInView) events.moveend = this._adjustPan;
            return events;
        },
        _initLayout: function() {
            var prefix = "leaflet-popup", container = this._container = create$1("div", prefix + " " + (this.options.className || "") + " leaflet-zoom-animated");
            var wrapper = this._wrapper = create$1("div", prefix + "-content-wrapper", container);
            this._contentNode = create$1("div", prefix + "-content", wrapper);
            disableClickPropagation(container);
            disableScrollPropagation(this._contentNode);
            on(container, "contextmenu", stopPropagation);
            this._tipContainer = create$1("div", prefix + "-tip-container", container);
            this._tip = create$1("div", prefix + "-tip", this._tipContainer);
            if (this.options.closeButton) {
                var closeButton = this._closeButton = create$1("a", prefix + "-close-button", container);
                closeButton.setAttribute("role", "button"); // overrides the implicit role=link of <a> elements #7399
                closeButton.setAttribute("aria-label", "Close popup");
                closeButton.href = "#close";
                closeButton.innerHTML = '<span aria-hidden="true">&#215;</span>';
                on(closeButton, "click", function(ev) {
                    preventDefault(ev);
                    this.close();
                }, this);
            }
        },
        _updateLayout: function() {
            var container = this._contentNode, style = container.style;
            style.width = "";
            style.whiteSpace = "nowrap";
            var width = container.offsetWidth;
            width = Math.min(width, this.options.maxWidth);
            width = Math.max(width, this.options.minWidth);
            style.width = width + 1 + "px";
            style.whiteSpace = "";
            style.height = "";
            var height = container.offsetHeight, maxHeight = this.options.maxHeight, scrolledClass = "leaflet-popup-scrolled";
            if (maxHeight && height > maxHeight) {
                style.height = maxHeight + "px";
                addClass(container, scrolledClass);
            } else removeClass(container, scrolledClass);
            this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function(e) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center), anchor = this._getAnchor();
            setPosition(this._container, pos.add(anchor));
        },
        _adjustPan: function() {
            if (!this.options.autoPan) return;
            if (this._map._panAnim) this._map._panAnim.stop();
            // We can endlessly recurse if keepInView is set and the view resets.
            // Let's guard against that by exiting early if we're responding to our own autopan.
            if (this._autopanning) {
                this._autopanning = false;
                return;
            }
            var map = this._map, marginBottom = parseInt(getStyle(this._container, "marginBottom"), 10) || 0, containerHeight = this._container.offsetHeight + marginBottom, containerWidth = this._containerWidth, layerPos = new Point(this._containerLeft, -containerHeight - this._containerBottom);
            layerPos._add(getPosition(this._container));
            var containerPos = map.layerPointToContainerPoint(layerPos), padding = toPoint(this.options.autoPanPadding), paddingTL = toPoint(this.options.autoPanPaddingTopLeft || padding), paddingBR = toPoint(this.options.autoPanPaddingBottomRight || padding), size = map.getSize(), dx = 0, dy = 0;
            if (containerPos.x + containerWidth + paddingBR.x > size.x) dx = containerPos.x + containerWidth - size.x + paddingBR.x;
            if (containerPos.x - dx - paddingTL.x < 0) dx = containerPos.x - paddingTL.x;
            if (containerPos.y + containerHeight + paddingBR.y > size.y) dy = containerPos.y + containerHeight - size.y + paddingBR.y;
            if (containerPos.y - dy - paddingTL.y < 0) dy = containerPos.y - paddingTL.y;
            // @namespace Map
            // @section Popup events
            // @event autopanstart: Event
            // Fired when the map starts autopanning when opening a popup.
            if (dx || dy) {
                // Track that we're autopanning, as this function will be re-ran on moveend
                if (this.options.keepInView) this._autopanning = true;
                map.fire("autopanstart").panBy([
                    dx,
                    dy
                ]);
            }
        },
        _getAnchor: function() {
            // Where should we anchor the popup on the source layer?
            return toPoint(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [
                0,
                0
            ]);
        }
    });
    // @namespace Popup
    // @factory L.popup(options?: Popup options, source?: Layer)
    // Instantiates a `Popup` object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the popup with a reference to the Layer to which it refers.
    // @alternative
    // @factory L.popup(latlng: LatLng, options?: Popup options)
    // Instantiates a `Popup` object given `latlng` where the popup will open and an optional `options` object that describes its appearance and location.
    var popup = function(options, source) {
        return new Popup(options, source);
    };
    /* @namespace Map
   * @section Interaction Options
   * @option closePopupOnClick: Boolean = true
   * Set it to `false` if you don't want popups to close when user clicks the map.
   */ Map.mergeOptions({
        closePopupOnClick: true
    });
    // @namespace Map
    // @section Methods for Layers and Controls
    Map.include({
        // @method openPopup(popup: Popup): this
        // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
        // @alternative
        // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
        // Creates a popup with the specified content and options and opens it in the given point on a map.
        openPopup: function(popup, latlng, options) {
            this._initOverlay(Popup, popup, latlng, options).openOn(this);
            return this;
        },
        // @method closePopup(popup?: Popup): this
        // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
        closePopup: function(popup) {
            popup = arguments.length ? popup : this._popup;
            if (popup) popup.close();
            return this;
        }
    });
    /*
   * @namespace Layer
   * @section Popup methods example
   *
   * All layers share a set of methods convenient for binding popups to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
   * layer.openPopup();
   * layer.closePopup();
   * ```
   *
   * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
   */ // @section Popup methods
    Layer.include({
        // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
        // Binds a popup to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindPopup: function(content, options) {
            this._popup = this._initOverlay(Popup, this._popup, content, options);
            if (!this._popupHandlersAdded) {
                this.on({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup
                });
                this._popupHandlersAdded = true;
            }
            return this;
        },
        // @method unbindPopup(): this
        // Removes the popup previously bound with `bindPopup`.
        unbindPopup: function() {
            if (this._popup) {
                this.off({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup
                });
                this._popupHandlersAdded = false;
                this._popup = null;
            }
            return this;
        },
        // @method openPopup(latlng?: LatLng): this
        // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
        openPopup: function(latlng) {
            if (this._popup) {
                if (!(this instanceof FeatureGroup)) this._popup._source = this;
                if (this._popup._prepareOpen(latlng || this._latlng)) // open the popup on the map
                this._popup.openOn(this._map);
            }
            return this;
        },
        // @method closePopup(): this
        // Closes the popup bound to this layer if it is open.
        closePopup: function() {
            if (this._popup) this._popup.close();
            return this;
        },
        // @method togglePopup(): this
        // Opens or closes the popup bound to this layer depending on its current state.
        togglePopup: function() {
            if (this._popup) this._popup.toggle(this);
            return this;
        },
        // @method isPopupOpen(): boolean
        // Returns `true` if the popup bound to this layer is currently open.
        isPopupOpen: function() {
            return this._popup ? this._popup.isOpen() : false;
        },
        // @method setPopupContent(content: String|HTMLElement|Popup): this
        // Sets the content of the popup bound to this layer.
        setPopupContent: function(content) {
            if (this._popup) this._popup.setContent(content);
            return this;
        },
        // @method getPopup(): Popup
        // Returns the popup bound to this layer.
        getPopup: function() {
            return this._popup;
        },
        _openPopup: function(e) {
            if (!this._popup || !this._map) return;
            // prevent map click
            stop(e);
            var target = e.layer || e.target;
            if (this._popup._source === target && !(target instanceof Path)) {
                // treat it like a marker and figure out
                // if we should toggle it open/closed
                if (this._map.hasLayer(this._popup)) this.closePopup();
                else this.openPopup(e.latlng);
                return;
            }
            this._popup._source = target;
            this.openPopup(e.latlng);
        },
        _movePopup: function(e) {
            this._popup.setLatLng(e.latlng);
        },
        _onKeyPress: function(e) {
            if (e.originalEvent.keyCode === 13) this._openPopup(e);
        }
    });
    /*
   * @class Tooltip
   * @inherits DivOverlay
   * @aka L.Tooltip
   * Used to display small texts on top of map layers.
   *
   * @example
   * If you want to just bind a tooltip to marker:
   *
   * ```js
   * marker.bindTooltip("my tooltip text").openTooltip();
   * ```
   * Path overlays like polylines also have a `bindTooltip` method.
   *
   * A tooltip can be also standalone:
   *
   * ```js
   * var tooltip = L.tooltip()
   * 	.setLatLng(latlng)
   * 	.setContent('Hello world!<br />This is a nice tooltip.')
   * 	.addTo(map);
   * ```
   * or
   * ```js
   * var tooltip = L.tooltip(latlng, {content: 'Hello world!<br />This is a nice tooltip.'})
   * 	.addTo(map);
   * ```
   *
   *
   * Note about tooltip offset. Leaflet takes two options in consideration
   * for computing tooltip offsetting:
   * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
   *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
   *   move it to the bottom. Negatives will move to the left and top.
   * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
   *   should adapt this value if you use a custom icon.
   */ // @namespace Tooltip
    var Tooltip = DivOverlay.extend({
        // @section
        // @aka Tooltip options
        options: {
            // @option pane: String = 'tooltipPane'
            // `Map pane` where the tooltip will be added.
            pane: "tooltipPane",
            // @option offset: Point = Point(0, 0)
            // Optional offset of the tooltip position.
            offset: [
                0,
                0
            ],
            // @option direction: String = 'auto'
            // Direction where to open the tooltip. Possible values are: `right`, `left`,
            // `top`, `bottom`, `center`, `auto`.
            // `auto` will dynamically switch between `right` and `left` according to the tooltip
            // position on the map.
            direction: "auto",
            // @option permanent: Boolean = false
            // Whether to open the tooltip permanently or only on mouseover.
            permanent: false,
            // @option sticky: Boolean = false
            // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
            sticky: false,
            // @option opacity: Number = 0.9
            // Tooltip container opacity.
            opacity: 0.9
        },
        onAdd: function(map) {
            DivOverlay.prototype.onAdd.call(this, map);
            this.setOpacity(this.options.opacity);
            // @namespace Map
            // @section Tooltip events
            // @event tooltipopen: TooltipEvent
            // Fired when a tooltip is opened in the map.
            map.fire("tooltipopen", {
                tooltip: this
            });
            if (this._source) {
                this.addEventParent(this._source);
                // @namespace Layer
                // @section Tooltip events
                // @event tooltipopen: TooltipEvent
                // Fired when a tooltip bound to this layer is opened.
                this._source.fire("tooltipopen", {
                    tooltip: this
                }, true);
            }
        },
        onRemove: function(map) {
            DivOverlay.prototype.onRemove.call(this, map);
            // @namespace Map
            // @section Tooltip events
            // @event tooltipclose: TooltipEvent
            // Fired when a tooltip in the map is closed.
            map.fire("tooltipclose", {
                tooltip: this
            });
            if (this._source) {
                this.removeEventParent(this._source);
                // @namespace Layer
                // @section Tooltip events
                // @event tooltipclose: TooltipEvent
                // Fired when a tooltip bound to this layer is closed.
                this._source.fire("tooltipclose", {
                    tooltip: this
                }, true);
            }
        },
        getEvents: function() {
            var events = DivOverlay.prototype.getEvents.call(this);
            if (!this.options.permanent) events.preclick = this.close;
            return events;
        },
        _initLayout: function() {
            var prefix = "leaflet-tooltip", className = prefix + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = create$1("div", className);
            this._container.setAttribute("role", "tooltip");
            this._container.setAttribute("id", "leaflet-tooltip-" + stamp(this));
        },
        _updateLayout: function() {},
        _adjustPan: function() {},
        _setPosition: function(pos) {
            var subX, subY, map = this._map, container = this._container, centerPoint = map.latLngToContainerPoint(map.getCenter()), tooltipPoint = map.layerPointToContainerPoint(pos), direction = this.options.direction, tooltipWidth = container.offsetWidth, tooltipHeight = container.offsetHeight, offset = toPoint(this.options.offset), anchor = this._getAnchor();
            if (direction === "top") {
                subX = tooltipWidth / 2;
                subY = tooltipHeight;
            } else if (direction === "bottom") {
                subX = tooltipWidth / 2;
                subY = 0;
            } else if (direction === "center") {
                subX = tooltipWidth / 2;
                subY = tooltipHeight / 2;
            } else if (direction === "right") {
                subX = 0;
                subY = tooltipHeight / 2;
            } else if (direction === "left") {
                subX = tooltipWidth;
                subY = tooltipHeight / 2;
            } else if (tooltipPoint.x < centerPoint.x) {
                direction = "right";
                subX = 0;
                subY = tooltipHeight / 2;
            } else {
                direction = "left";
                subX = tooltipWidth + (offset.x + anchor.x) * 2;
                subY = tooltipHeight / 2;
            }
            pos = pos.subtract(toPoint(subX, subY, true)).add(offset).add(anchor);
            removeClass(container, "leaflet-tooltip-right");
            removeClass(container, "leaflet-tooltip-left");
            removeClass(container, "leaflet-tooltip-top");
            removeClass(container, "leaflet-tooltip-bottom");
            addClass(container, "leaflet-tooltip-" + direction);
            setPosition(container, pos);
        },
        _updatePosition: function() {
            var pos = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(pos);
        },
        setOpacity: function(opacity) {
            this.options.opacity = opacity;
            if (this._container) setOpacity(this._container, opacity);
        },
        _animateZoom: function(e) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
            this._setPosition(pos);
        },
        _getAnchor: function() {
            // Where should we anchor the tooltip on the source layer?
            return toPoint(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [
                0,
                0
            ]);
        }
    });
    // @namespace Tooltip
    // @factory L.tooltip(options?: Tooltip options, source?: Layer)
    // Instantiates a `Tooltip` object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the tooltip with a reference to the Layer to which it refers.
    // @alternative
    // @factory L.tooltip(latlng: LatLng, options?: Tooltip options)
    // Instantiates a `Tooltip` object given `latlng` where the tooltip will open and an optional `options` object that describes its appearance and location.
    var tooltip = function(options, source) {
        return new Tooltip(options, source);
    };
    // @namespace Map
    // @section Methods for Layers and Controls
    Map.include({
        // @method openTooltip(tooltip: Tooltip): this
        // Opens the specified tooltip.
        // @alternative
        // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
        // Creates a tooltip with the specified content and options and open it.
        openTooltip: function(tooltip, latlng, options) {
            this._initOverlay(Tooltip, tooltip, latlng, options).openOn(this);
            return this;
        },
        // @method closeTooltip(tooltip: Tooltip): this
        // Closes the tooltip given as parameter.
        closeTooltip: function(tooltip) {
            tooltip.close();
            return this;
        }
    });
    /*
   * @namespace Layer
   * @section Tooltip methods example
   *
   * All layers share a set of methods convenient for binding tooltips to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
   * layer.openTooltip();
   * layer.closeTooltip();
   * ```
   */ // @section Tooltip methods
    Layer.include({
        // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
        // Binds a tooltip to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindTooltip: function(content, options) {
            if (this._tooltip && this.isTooltipOpen()) this.unbindTooltip();
            this._tooltip = this._initOverlay(Tooltip, this._tooltip, content, options);
            this._initTooltipInteractions();
            if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) this.openTooltip();
            return this;
        },
        // @method unbindTooltip(): this
        // Removes the tooltip previously bound with `bindTooltip`.
        unbindTooltip: function() {
            if (this._tooltip) {
                this._initTooltipInteractions(true);
                this.closeTooltip();
                this._tooltip = null;
            }
            return this;
        },
        _initTooltipInteractions: function(remove) {
            if (!remove && this._tooltipHandlersAdded) return;
            var onOff = remove ? "off" : "on", events = {
                remove: this.closeTooltip,
                move: this._moveTooltip
            };
            if (!this._tooltip.options.permanent) {
                events.mouseover = this._openTooltip;
                events.mouseout = this.closeTooltip;
                events.click = this._openTooltip;
                if (this._map) this._addFocusListeners();
                else events.add = this._addFocusListeners;
            } else events.add = this._openTooltip;
            if (this._tooltip.options.sticky) events.mousemove = this._moveTooltip;
            this[onOff](events);
            this._tooltipHandlersAdded = !remove;
        },
        // @method openTooltip(latlng?: LatLng): this
        // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
        openTooltip: function(latlng) {
            if (this._tooltip) {
                if (!(this instanceof FeatureGroup)) this._tooltip._source = this;
                if (this._tooltip._prepareOpen(latlng)) {
                    // open the tooltip on the map
                    this._tooltip.openOn(this._map);
                    if (this.getElement) this._setAriaDescribedByOnLayer(this);
                    else if (this.eachLayer) this.eachLayer(this._setAriaDescribedByOnLayer, this);
                }
            }
            return this;
        },
        // @method closeTooltip(): this
        // Closes the tooltip bound to this layer if it is open.
        closeTooltip: function() {
            if (this._tooltip) return this._tooltip.close();
        },
        // @method toggleTooltip(): this
        // Opens or closes the tooltip bound to this layer depending on its current state.
        toggleTooltip: function() {
            if (this._tooltip) this._tooltip.toggle(this);
            return this;
        },
        // @method isTooltipOpen(): boolean
        // Returns `true` if the tooltip bound to this layer is currently open.
        isTooltipOpen: function() {
            return this._tooltip.isOpen();
        },
        // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
        // Sets the content of the tooltip bound to this layer.
        setTooltipContent: function(content) {
            if (this._tooltip) this._tooltip.setContent(content);
            return this;
        },
        // @method getTooltip(): Tooltip
        // Returns the tooltip bound to this layer.
        getTooltip: function() {
            return this._tooltip;
        },
        _addFocusListeners: function() {
            if (this.getElement) this._addFocusListenersOnLayer(this);
            else if (this.eachLayer) this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function(layer) {
            var el = typeof layer.getElement === "function" && layer.getElement();
            if (el) {
                on(el, "focus", function() {
                    this._tooltip._source = layer;
                    this.openTooltip();
                }, this);
                on(el, "blur", this.closeTooltip, this);
            }
        },
        _setAriaDescribedByOnLayer: function(layer) {
            var el = typeof layer.getElement === "function" && layer.getElement();
            if (el) el.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function(e) {
            if (!this._tooltip || !this._map) return;
            // If the map is moving, we will show the tooltip after it's done.
            if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
                this._openOnceFlag = true;
                var that = this;
                this._map.once("moveend", function() {
                    that._openOnceFlag = false;
                    that._openTooltip(e);
                });
                return;
            }
            this._tooltip._source = e.layer || e.target;
            this.openTooltip(this._tooltip.options.sticky ? e.latlng : undefined);
        },
        _moveTooltip: function(e) {
            var latlng = e.latlng, containerPoint, layerPoint;
            if (this._tooltip.options.sticky && e.originalEvent) {
                containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
                layerPoint = this._map.containerPointToLayerPoint(containerPoint);
                latlng = this._map.layerPointToLatLng(layerPoint);
            }
            this._tooltip.setLatLng(latlng);
        }
    });
    /*
   * @class DivIcon
   * @aka L.DivIcon
   * @inherits Icon
   *
   * Represents a lightweight icon for markers that uses a simple `<div>`
   * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
   *
   * @example
   * ```js
   * var myIcon = L.divIcon({className: 'my-div-icon'});
   * // you can set .my-div-icon styles in CSS
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
   */ var DivIcon = Icon.extend({
        options: {
            // @section
            // @aka DivIcon options
            iconSize: [
                12,
                12
            ],
            // iconAnchor: (Point),
            // popupAnchor: (Point),
            // @option html: String|HTMLElement = ''
            // Custom HTML code to put inside the div element, empty by default. Alternatively,
            // an instance of `HTMLElement`.
            html: false,
            // @option bgPos: Point = [0, 0]
            // Optional relative position of the background, in pixels
            bgPos: null,
            className: "leaflet-div-icon"
        },
        createIcon: function(oldIcon) {
            var div = oldIcon && oldIcon.tagName === "DIV" ? oldIcon : document.createElement("div"), options = this.options;
            if (options.html instanceof Element) {
                empty(div);
                div.appendChild(options.html);
            } else div.innerHTML = options.html !== false ? options.html : "";
            if (options.bgPos) {
                var bgPos = toPoint(options.bgPos);
                div.style.backgroundPosition = -bgPos.x + "px " + -bgPos.y + "px";
            }
            this._setIconStyles(div, "icon");
            return div;
        },
        createShadow: function() {
            return null;
        }
    });
    // @factory L.divIcon(options: DivIcon options)
    // Creates a `DivIcon` instance with the given options.
    function divIcon(options) {
        return new DivIcon(options);
    }
    Icon.Default = IconDefault;
    /*
   * @class GridLayer
   * @inherits Layer
   * @aka L.GridLayer
   *
   * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
   * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
   *
   *
   * @section Synchronous usage
   * @example
   *
   * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords){
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
   *         var ctx = tile.getContext('2d');
   *
   *         // return the tile so it can be rendered on screen
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section Asynchronous usage
   * @example
   *
   * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords, done){
   *         var error;
   *
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // draw something asynchronously and pass the tile to the done() callback
   *         setTimeout(function() {
   *             done(error, tile);
   *         }, 1000);
   *
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section
   */ var GridLayer = Layer.extend({
        // @section
        // @aka GridLayer options
        options: {
            // @option tileSize: Number|Point = 256
            // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
            tileSize: 256,
            // @option opacity: Number = 1.0
            // Opacity of the tiles. Can be used in the `createTile()` function.
            opacity: 1,
            // @option updateWhenIdle: Boolean = (depends)
            // Load new tiles only when panning ends.
            // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
            // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
            // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
            updateWhenIdle: Browser.mobile,
            // @option updateWhenZooming: Boolean = true
            // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
            updateWhenZooming: true,
            // @option updateInterval: Number = 200
            // Tiles will not update more than once every `updateInterval` milliseconds when panning.
            updateInterval: 200,
            // @option zIndex: Number = 1
            // The explicit zIndex of the tile layer.
            zIndex: 1,
            // @option bounds: LatLngBounds = undefined
            // If set, tiles will only be loaded inside the set `LatLngBounds`.
            bounds: null,
            // @option minZoom: Number = 0
            // The minimum zoom level down to which this layer will be displayed (inclusive).
            minZoom: 0,
            // @option maxZoom: Number = undefined
            // The maximum zoom level up to which this layer will be displayed (inclusive).
            maxZoom: undefined,
            // @option maxNativeZoom: Number = undefined
            // Maximum zoom number the tile source has available. If it is specified,
            // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
            // from `maxNativeZoom` level and auto-scaled.
            maxNativeZoom: undefined,
            // @option minNativeZoom: Number = undefined
            // Minimum zoom number the tile source has available. If it is specified,
            // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
            // from `minNativeZoom` level and auto-scaled.
            minNativeZoom: undefined,
            // @option noWrap: Boolean = false
            // Whether the layer is wrapped around the antimeridian. If `true`, the
            // GridLayer will only be displayed once at low zoom levels. Has no
            // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
            // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
            // tiles outside the CRS limits.
            noWrap: false,
            // @option pane: String = 'tilePane'
            // `Map pane` where the grid layer will be added.
            pane: "tilePane",
            // @option className: String = ''
            // A custom class name to assign to the tile layer. Empty by default.
            className: "",
            // @option keepBuffer: Number = 2
            // When panning the map, keep this many rows and columns of tiles before unloading them.
            keepBuffer: 2
        },
        initialize: function(options) {
            setOptions(this, options);
        },
        onAdd: function() {
            this._initContainer();
            this._levels = {};
            this._tiles = {};
            this._resetView(); // implicit _update() call
        },
        beforeAdd: function(map) {
            map._addZoomLimit(this);
        },
        onRemove: function(map) {
            this._removeAllTiles();
            remove(this._container);
            map._removeZoomLimit(this);
            this._container = null;
            this._tileZoom = undefined;
        },
        // @method bringToFront: this
        // Brings the tile layer to the top of all tile layers.
        bringToFront: function() {
            if (this._map) {
                toFront(this._container);
                this._setAutoZIndex(Math.max);
            }
            return this;
        },
        // @method bringToBack: this
        // Brings the tile layer to the bottom of all tile layers.
        bringToBack: function() {
            if (this._map) {
                toBack(this._container);
                this._setAutoZIndex(Math.min);
            }
            return this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the tiles for this layer.
        getContainer: function() {
            return this._container;
        },
        // @method setOpacity(opacity: Number): this
        // Changes the [opacity](#gridlayer-opacity) of the grid layer.
        setOpacity: function(opacity) {
            this.options.opacity = opacity;
            this._updateOpacity();
            return this;
        },
        // @method setZIndex(zIndex: Number): this
        // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
        setZIndex: function(zIndex) {
            this.options.zIndex = zIndex;
            this._updateZIndex();
            return this;
        },
        // @method isLoading: Boolean
        // Returns `true` if any tile in the grid layer has not finished loading.
        isLoading: function() {
            return this._loading;
        },
        // @method redraw: this
        // Causes the layer to clear all the tiles and request them again.
        redraw: function() {
            if (this._map) {
                this._removeAllTiles();
                var tileZoom = this._clampZoom(this._map.getZoom());
                if (tileZoom !== this._tileZoom) {
                    this._tileZoom = tileZoom;
                    this._updateLevels();
                }
                this._update();
            }
            return this;
        },
        getEvents: function() {
            var events = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd
            };
            if (!this.options.updateWhenIdle) {
                // update tiles on move, but not more often than once per given interval
                if (!this._onMove) this._onMove = throttle(this._onMoveEnd, this.options.updateInterval, this);
                events.move = this._onMove;
            }
            if (this._zoomAnimated) events.zoomanim = this._animateZoom;
            return events;
        },
        // @section Extension methods
        // Layers extending `GridLayer` shall reimplement the following method.
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, must be overridden by classes extending `GridLayer`.
        // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
        // is specified, it must be called when the tile has finished loading and drawing.
        createTile: function() {
            return document.createElement("div");
        },
        // @section
        // @method getTileSize: Point
        // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
        getTileSize: function() {
            var s = this.options.tileSize;
            return s instanceof Point ? s : new Point(s, s);
        },
        _updateZIndex: function() {
            if (this._container && this.options.zIndex !== undefined && this.options.zIndex !== null) this._container.style.zIndex = this.options.zIndex;
        },
        _setAutoZIndex: function(compare) {
            // go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)
            var layers = this.getPane().children, edgeZIndex = -compare(-Infinity, Infinity); // -Infinity for max, Infinity for min
            for(var i = 0, len = layers.length, zIndex; i < len; i++){
                zIndex = layers[i].style.zIndex;
                if (layers[i] !== this._container && zIndex) edgeZIndex = compare(edgeZIndex, +zIndex);
            }
            if (isFinite(edgeZIndex)) {
                this.options.zIndex = edgeZIndex + compare(-1, 1);
                this._updateZIndex();
            }
        },
        _updateOpacity: function() {
            if (!this._map) return;
            // IE doesn't inherit filter opacity properly, so we're forced to set it on tiles
            if (Browser.ielt9) return;
            setOpacity(this._container, this.options.opacity);
            var now = +new Date(), nextFrame = false, willPrune = false;
            for(var key in this._tiles){
                var tile = this._tiles[key];
                if (!tile.current || !tile.loaded) continue;
                var fade = Math.min(1, (now - tile.loaded) / 200);
                setOpacity(tile.el, fade);
                if (fade < 1) nextFrame = true;
                else {
                    if (tile.active) willPrune = true;
                    else this._onOpaqueTile(tile);
                    tile.active = true;
                }
            }
            if (willPrune && !this._noPrune) this._pruneTiles();
            if (nextFrame) {
                cancelAnimFrame(this._fadeFrame);
                this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
            }
        },
        _onOpaqueTile: falseFn,
        _initContainer: function() {
            if (this._container) return;
            this._container = create$1("div", "leaflet-layer " + (this.options.className || ""));
            this._updateZIndex();
            if (this.options.opacity < 1) this._updateOpacity();
            this.getPane().appendChild(this._container);
        },
        _updateLevels: function() {
            var zoom = this._tileZoom, maxZoom = this.options.maxZoom;
            if (zoom === undefined) return undefined;
            for(var z in this._levels){
                z = Number(z);
                if (this._levels[z].el.children.length || z === zoom) {
                    this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);
                    this._onUpdateLevel(z);
                } else {
                    remove(this._levels[z].el);
                    this._removeTilesAtZoom(z);
                    this._onRemoveLevel(z);
                    delete this._levels[z];
                }
            }
            var level = this._levels[zoom], map = this._map;
            if (!level) {
                level = this._levels[zoom] = {};
                level.el = create$1("div", "leaflet-tile-container leaflet-zoom-animated", this._container);
                level.el.style.zIndex = maxZoom;
                level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
                level.zoom = zoom;
                this._setZoomTransform(level, map.getCenter(), map.getZoom());
                // force the browser to consider the newly added element for transition
                falseFn(level.el.offsetWidth);
                this._onCreateLevel(level);
            }
            this._level = level;
            return level;
        },
        _onUpdateLevel: falseFn,
        _onRemoveLevel: falseFn,
        _onCreateLevel: falseFn,
        _pruneTiles: function() {
            if (!this._map) return;
            var key, tile;
            var zoom = this._map.getZoom();
            if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
                this._removeAllTiles();
                return;
            }
            for(key in this._tiles){
                tile = this._tiles[key];
                tile.retain = tile.current;
            }
            for(key in this._tiles){
                tile = this._tiles[key];
                if (tile.current && !tile.active) {
                    var coords = tile.coords;
                    if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
                }
            }
            for(key in this._tiles)if (!this._tiles[key].retain) this._removeTile(key);
        },
        _removeTilesAtZoom: function(zoom) {
            for(var key in this._tiles){
                if (this._tiles[key].coords.z !== zoom) continue;
                this._removeTile(key);
            }
        },
        _removeAllTiles: function() {
            for(var key in this._tiles)this._removeTile(key);
        },
        _invalidateAll: function() {
            for(var z in this._levels){
                remove(this._levels[z].el);
                this._onRemoveLevel(Number(z));
                delete this._levels[z];
            }
            this._removeAllTiles();
            this._tileZoom = undefined;
        },
        _retainParent: function(x, y, z, minZoom) {
            var x2 = Math.floor(x / 2), y2 = Math.floor(y / 2), z2 = z - 1, coords2 = new Point(+x2, +y2);
            coords2.z = +z2;
            var key = this._tileCoordsToKey(coords2), tile = this._tiles[key];
            if (tile && tile.active) {
                tile.retain = true;
                return true;
            } else if (tile && tile.loaded) tile.retain = true;
            if (z2 > minZoom) return this._retainParent(x2, y2, z2, minZoom);
            return false;
        },
        _retainChildren: function(x, y, z, maxZoom) {
            for(var i = 2 * x; i < 2 * x + 2; i++)for(var j = 2 * y; j < 2 * y + 2; j++){
                var coords = new Point(i, j);
                coords.z = z + 1;
                var key = this._tileCoordsToKey(coords), tile = this._tiles[key];
                if (tile && tile.active) {
                    tile.retain = true;
                    continue;
                } else if (tile && tile.loaded) tile.retain = true;
                if (z + 1 < maxZoom) this._retainChildren(i, j, z + 1, maxZoom);
            }
        },
        _resetView: function(e) {
            var animating = e && (e.pinch || e.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
        },
        _animateZoom: function(e) {
            this._setView(e.center, e.zoom, true, e.noUpdate);
        },
        _clampZoom: function(zoom) {
            var options = this.options;
            if (undefined !== options.minNativeZoom && zoom < options.minNativeZoom) return options.minNativeZoom;
            if (undefined !== options.maxNativeZoom && options.maxNativeZoom < zoom) return options.maxNativeZoom;
            return zoom;
        },
        _setView: function(center, zoom, noPrune, noUpdate) {
            var tileZoom = Math.round(zoom);
            if (this.options.maxZoom !== undefined && tileZoom > this.options.maxZoom || this.options.minZoom !== undefined && tileZoom < this.options.minZoom) tileZoom = undefined;
            else tileZoom = this._clampZoom(tileZoom);
            var tileZoomChanged = this.options.updateWhenZooming && tileZoom !== this._tileZoom;
            if (!noUpdate || tileZoomChanged) {
                this._tileZoom = tileZoom;
                if (this._abortLoading) this._abortLoading();
                this._updateLevels();
                this._resetGrid();
                if (tileZoom !== undefined) this._update(center);
                if (!noPrune) this._pruneTiles();
                // Flag to prevent _updateOpacity from pruning tiles during
                // a zoom anim or a pinch gesture
                this._noPrune = !!noPrune;
            }
            this._setZoomTransforms(center, zoom);
        },
        _setZoomTransforms: function(center, zoom) {
            for(var i in this._levels)this._setZoomTransform(this._levels[i], center, zoom);
        },
        _setZoomTransform: function(level, center, zoom) {
            var scale = this._map.getZoomScale(zoom, level.zoom), translate = level.origin.multiplyBy(scale).subtract(this._map._getNewPixelOrigin(center, zoom)).round();
            if (Browser.any3d) setTransform(level.el, translate, scale);
            else setPosition(level.el, translate);
        },
        _resetGrid: function() {
            var map = this._map, crs = map.options.crs, tileSize = this._tileSize = this.getTileSize(), tileZoom = this._tileZoom;
            var bounds = this._map.getPixelWorldBounds(this._tileZoom);
            if (bounds) this._globalTileRange = this._pxBoundsToTileRange(bounds);
            this._wrapX = crs.wrapLng && !this.options.noWrap && [
                Math.floor(map.project([
                    0,
                    crs.wrapLng[0]
                ], tileZoom).x / tileSize.x),
                Math.ceil(map.project([
                    0,
                    crs.wrapLng[1]
                ], tileZoom).x / tileSize.y)
            ];
            this._wrapY = crs.wrapLat && !this.options.noWrap && [
                Math.floor(map.project([
                    crs.wrapLat[0],
                    0
                ], tileZoom).y / tileSize.x),
                Math.ceil(map.project([
                    crs.wrapLat[1],
                    0
                ], tileZoom).y / tileSize.y)
            ];
        },
        _onMoveEnd: function() {
            if (!this._map || this._map._animatingZoom) return;
            this._update();
        },
        _getTiledPixelBounds: function(center) {
            var map = this._map, mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(), scale = map.getZoomScale(mapZoom, this._tileZoom), pixelCenter = map.project(center, this._tileZoom).floor(), halfSize = map.getSize().divideBy(scale * 2);
            return new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
        },
        // Private method to load tiles in the grid's active zoom level according to map bounds
        _update: function(center) {
            var map = this._map;
            if (!map) return;
            var zoom = this._clampZoom(map.getZoom());
            if (center === undefined) center = map.getCenter();
            if (this._tileZoom === undefined) return;
             // if out of minzoom/maxzoom
            var pixelBounds = this._getTiledPixelBounds(center), tileRange = this._pxBoundsToTileRange(pixelBounds), tileCenter = tileRange.getCenter(), queue = [], margin = this.options.keepBuffer, noPruneRange = new Bounds(tileRange.getBottomLeft().subtract([
                margin,
                -margin
            ]), tileRange.getTopRight().add([
                margin,
                -margin
            ]));
            // Sanity check: panic if the tile range contains Infinity somewhere.
            if (!(isFinite(tileRange.min.x) && isFinite(tileRange.min.y) && isFinite(tileRange.max.x) && isFinite(tileRange.max.y))) throw new Error("Attempted to load an infinite number of tiles");
            for(var key in this._tiles){
                var c = this._tiles[key].coords;
                if (c.z !== this._tileZoom || !noPruneRange.contains(new Point(c.x, c.y))) this._tiles[key].current = false;
            }
            // _update just loads more tiles. If the tile zoom level differs too much
            // from the map's, let _setView reset levels and prune old tiles.
            if (Math.abs(zoom - this._tileZoom) > 1) {
                this._setView(center, zoom);
                return;
            }
            // create a queue of coordinates to load tiles from
            for(var j = tileRange.min.y; j <= tileRange.max.y; j++)for(var i = tileRange.min.x; i <= tileRange.max.x; i++){
                var coords = new Point(i, j);
                coords.z = this._tileZoom;
                if (!this._isValidTile(coords)) continue;
                var tile = this._tiles[this._tileCoordsToKey(coords)];
                if (tile) tile.current = true;
                else queue.push(coords);
            }
            // sort tile queue to load tiles in order of their distance to center
            queue.sort(function(a, b) {
                return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
            });
            if (queue.length !== 0) {
                // if it's the first batch of tiles to load
                if (!this._loading) {
                    this._loading = true;
                    // @event loading: Event
                    // Fired when the grid layer starts loading tiles.
                    this.fire("loading");
                }
                // create DOM fragment to append tiles in one batch
                var fragment = document.createDocumentFragment();
                for(i = 0; i < queue.length; i++)this._addTile(queue[i], fragment);
                this._level.el.appendChild(fragment);
            }
        },
        _isValidTile: function(coords) {
            var crs = this._map.options.crs;
            if (!crs.infinite) {
                // don't load tile if it's out of bounds and not wrapped
                var bounds = this._globalTileRange;
                if (!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x) || !crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y)) return false;
            }
            if (!this.options.bounds) return true;
            // don't load tile if it doesn't intersect the bounds in options
            var tileBounds = this._tileCoordsToBounds(coords);
            return toLatLngBounds(this.options.bounds).overlaps(tileBounds);
        },
        _keyToBounds: function(key) {
            return this._tileCoordsToBounds(this._keyToTileCoords(key));
        },
        _tileCoordsToNwSe: function(coords) {
            var map = this._map, tileSize = this.getTileSize(), nwPoint = coords.scaleBy(tileSize), sePoint = nwPoint.add(tileSize), nw = map.unproject(nwPoint, coords.z), se = map.unproject(sePoint, coords.z);
            return [
                nw,
                se
            ];
        },
        // converts tile coordinates to its geographical bounds
        _tileCoordsToBounds: function(coords) {
            var bp = this._tileCoordsToNwSe(coords), bounds = new LatLngBounds(bp[0], bp[1]);
            if (!this.options.noWrap) bounds = this._map.wrapLatLngBounds(bounds);
            return bounds;
        },
        // converts tile coordinates to key for the tile cache
        _tileCoordsToKey: function(coords) {
            return coords.x + ":" + coords.y + ":" + coords.z;
        },
        // converts tile cache key to coordinates
        _keyToTileCoords: function(key) {
            var k = key.split(":"), coords = new Point(+k[0], +k[1]);
            coords.z = +k[2];
            return coords;
        },
        _removeTile: function(key) {
            var tile = this._tiles[key];
            if (!tile) return;
            remove(tile.el);
            delete this._tiles[key];
            // @event tileunload: TileEvent
            // Fired when a tile is removed (e.g. when a tile goes off the screen).
            this.fire("tileunload", {
                tile: tile.el,
                coords: this._keyToTileCoords(key)
            });
        },
        _initTile: function(tile) {
            addClass(tile, "leaflet-tile");
            var tileSize = this.getTileSize();
            tile.style.width = tileSize.x + "px";
            tile.style.height = tileSize.y + "px";
            tile.onselectstart = falseFn;
            tile.onmousemove = falseFn;
            // update opacity on tiles in IE7-8 because of filter inheritance problems
            if (Browser.ielt9 && this.options.opacity < 1) setOpacity(tile, this.options.opacity);
        },
        _addTile: function(coords, container) {
            var tilePos = this._getTilePos(coords), key = this._tileCoordsToKey(coords);
            var tile = this.createTile(this._wrapCoords(coords), bind(this._tileReady, this, coords));
            this._initTile(tile);
            // if createTile is defined with a second argument ("done" callback),
            // we know that tile is async and will be ready later; otherwise
            if (this.createTile.length < 2) // mark tile as ready, but delay one frame for opacity animation to happen
            requestAnimFrame(bind(this._tileReady, this, coords, null, tile));
            setPosition(tile, tilePos);
            // save tile in cache
            this._tiles[key] = {
                el: tile,
                coords: coords,
                current: true
            };
            container.appendChild(tile);
            // @event tileloadstart: TileEvent
            // Fired when a tile is requested and starts loading.
            this.fire("tileloadstart", {
                tile: tile,
                coords: coords
            });
        },
        _tileReady: function(coords, err, tile) {
            if (err) // @event tileerror: TileErrorEvent
            // Fired when there is an error loading a tile.
            this.fire("tileerror", {
                error: err,
                tile: tile,
                coords: coords
            });
            var key = this._tileCoordsToKey(coords);
            tile = this._tiles[key];
            if (!tile) return;
            tile.loaded = +new Date();
            if (this._map._fadeAnimated) {
                setOpacity(tile.el, 0);
                cancelAnimFrame(this._fadeFrame);
                this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
            } else {
                tile.active = true;
                this._pruneTiles();
            }
            if (!err) {
                addClass(tile.el, "leaflet-tile-loaded");
                // @event tileload: TileEvent
                // Fired when a tile loads.
                this.fire("tileload", {
                    tile: tile.el,
                    coords: coords
                });
            }
            if (this._noTilesToLoad()) {
                this._loading = false;
                // @event load: Event
                // Fired when the grid layer loaded all visible tiles.
                this.fire("load");
                if (Browser.ielt9 || !this._map._fadeAnimated) requestAnimFrame(this._pruneTiles, this);
                else // Wait a bit more than 0.2 secs (the duration of the tile fade-in)
                // to trigger a pruning.
                setTimeout(bind(this._pruneTiles, this), 250);
            }
        },
        _getTilePos: function(coords) {
            return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(coords) {
            var newCoords = new Point(this._wrapX ? wrapNum(coords.x, this._wrapX) : coords.x, this._wrapY ? wrapNum(coords.y, this._wrapY) : coords.y);
            newCoords.z = coords.z;
            return newCoords;
        },
        _pxBoundsToTileRange: function(bounds) {
            var tileSize = this.getTileSize();
            return new Bounds(bounds.min.unscaleBy(tileSize).floor(), bounds.max.unscaleBy(tileSize).ceil().subtract([
                1,
                1
            ]));
        },
        _noTilesToLoad: function() {
            for(var key in this._tiles){
                if (!this._tiles[key].loaded) return false;
            }
            return true;
        }
    });
    // @factory L.gridLayer(options?: GridLayer options)
    // Creates a new instance of GridLayer with the supplied options.
    function gridLayer(options) {
        return new GridLayer(options);
    }
    /*
   * @class TileLayer
   * @inherits GridLayer
   * @aka L.TileLayer
   * Used to load and display tile layers on the map. Note that most tile servers require attribution, which you can set under `Layer`. Extends `GridLayer`.
   *
   * @example
   *
   * ```js
   * L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
   * ```
   *
   * @section URL template
   * @example
   *
   * A string of the following form:
   *
   * ```
   * 'https://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
   * ```
   *
   * `{s}` means one of the available subdomains (used sequentially to help with browser parallel requests per domain limitation; subdomain values are specified in options; `a`, `b` or `c` by default, can be omitted), `{z}` — zoom level, `{x}` and `{y}` — tile coordinates. `{r}` can be used to add "&commat;2x" to the URL to load retina tiles.
   *
   * You can use custom keys in the template, which will be [evaluated](#util-template) from TileLayer options, like this:
   *
   * ```
   * L.tileLayer('https://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});
   * ```
   */ var TileLayer = GridLayer.extend({
        // @section
        // @aka TileLayer options
        options: {
            // @option minZoom: Number = 0
            // The minimum zoom level down to which this layer will be displayed (inclusive).
            minZoom: 0,
            // @option maxZoom: Number = 18
            // The maximum zoom level up to which this layer will be displayed (inclusive).
            maxZoom: 18,
            // @option subdomains: String|String[] = 'abc'
            // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
            subdomains: "abc",
            // @option errorTileUrl: String = ''
            // URL to the tile image to show in place of the tile that failed to load.
            errorTileUrl: "",
            // @option zoomOffset: Number = 0
            // The zoom number used in tile URLs will be offset with this value.
            zoomOffset: 0,
            // @option tms: Boolean = false
            // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
            tms: false,
            // @option zoomReverse: Boolean = false
            // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
            zoomReverse: false,
            // @option detectRetina: Boolean = false
            // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
            detectRetina: false,
            // @option crossOrigin: Boolean|String = false
            // Whether the crossOrigin attribute will be added to the tiles.
            // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
            // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
            crossOrigin: false,
            // @option referrerPolicy: Boolean|String = false
            // Whether the referrerPolicy attribute will be added to the tiles.
            // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
            // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
            // (e.g. to validate an API token).
            // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
            referrerPolicy: false
        },
        initialize: function(url, options) {
            this._url = url;
            options = setOptions(this, options);
            // detecting retina displays, adjusting tileSize and zoom levels
            if (options.detectRetina && Browser.retina && options.maxZoom > 0) {
                options.tileSize = Math.floor(options.tileSize / 2);
                if (!options.zoomReverse) {
                    options.zoomOffset++;
                    options.maxZoom = Math.max(options.minZoom, options.maxZoom - 1);
                } else {
                    options.zoomOffset--;
                    options.minZoom = Math.min(options.maxZoom, options.minZoom + 1);
                }
                options.minZoom = Math.max(0, options.minZoom);
            } else if (!options.zoomReverse) // make sure maxZoom is gte minZoom
            options.maxZoom = Math.max(options.minZoom, options.maxZoom);
            else // make sure minZoom is lte maxZoom
            options.minZoom = Math.min(options.maxZoom, options.minZoom);
            if (typeof options.subdomains === "string") options.subdomains = options.subdomains.split("");
            this.on("tileunload", this._onTileRemove);
        },
        // @method setUrl(url: String, noRedraw?: Boolean): this
        // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
        // If the URL does not change, the layer will not be redrawn unless
        // the noRedraw parameter is set to false.
        setUrl: function(url, noRedraw) {
            if (this._url === url && noRedraw === undefined) noRedraw = true;
            this._url = url;
            if (!noRedraw) this.redraw();
            return this;
        },
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
        // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
        // callback is called when the tile has been loaded.
        createTile: function(coords, done) {
            var tile = document.createElement("img");
            on(tile, "load", bind(this._tileOnLoad, this, done, tile));
            on(tile, "error", bind(this._tileOnError, this, done, tile));
            if (this.options.crossOrigin || this.options.crossOrigin === "") tile.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin;
            // for this new option we follow the documented behavior
            // more closely by only setting the property when string
            if (typeof this.options.referrerPolicy === "string") tile.referrerPolicy = this.options.referrerPolicy;
            // The alt attribute is set to the empty string,
            // allowing screen readers to ignore the decorative image tiles.
            // https://www.w3.org/WAI/tutorials/images/decorative/
            // https://www.w3.org/TR/html-aria/#el-img-empty-alt
            tile.alt = "";
            tile.src = this.getTileUrl(coords);
            return tile;
        },
        // @section Extension methods
        // @uninheritable
        // Layers extending `TileLayer` might reimplement the following method.
        // @method getTileUrl(coords: Object): String
        // Called only internally, returns the URL for a tile given its coordinates.
        // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
        getTileUrl: function(coords) {
            var data = {
                r: Browser.retina ? "@2x" : "",
                s: this._getSubdomain(coords),
                x: coords.x,
                y: coords.y,
                z: this._getZoomForUrl()
            };
            if (this._map && !this._map.options.crs.infinite) {
                var invertedY = this._globalTileRange.max.y - coords.y;
                if (this.options.tms) data["y"] = invertedY;
                data["-y"] = invertedY;
            }
            return template(this._url, extend(data, this.options));
        },
        _tileOnLoad: function(done, tile) {
            // For https://github.com/Leaflet/Leaflet/issues/3332
            if (Browser.ielt9) setTimeout(bind(done, this, null, tile), 0);
            else done(null, tile);
        },
        _tileOnError: function(done, tile, e) {
            var errorUrl = this.options.errorTileUrl;
            if (errorUrl && tile.getAttribute("src") !== errorUrl) tile.src = errorUrl;
            done(e, tile);
        },
        _onTileRemove: function(e) {
            e.tile.onload = null;
        },
        _getZoomForUrl: function() {
            var zoom = this._tileZoom, maxZoom = this.options.maxZoom, zoomReverse = this.options.zoomReverse, zoomOffset = this.options.zoomOffset;
            if (zoomReverse) zoom = maxZoom - zoom;
            return zoom + zoomOffset;
        },
        _getSubdomain: function(tilePoint) {
            var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
            return this.options.subdomains[index];
        },
        // stops loading all tiles in the background layer
        _abortLoading: function() {
            var i, tile;
            for(i in this._tiles)if (this._tiles[i].coords.z !== this._tileZoom) {
                tile = this._tiles[i].el;
                tile.onload = falseFn;
                tile.onerror = falseFn;
                if (!tile.complete) {
                    tile.src = emptyImageUrl;
                    var coords = this._tiles[i].coords;
                    remove(tile);
                    delete this._tiles[i];
                    // @event tileabort: TileEvent
                    // Fired when a tile was loading but is now not wanted.
                    this.fire("tileabort", {
                        tile: tile,
                        coords: coords
                    });
                }
            }
        },
        _removeTile: function(key) {
            var tile = this._tiles[key];
            if (!tile) return;
            // Cancels any pending http requests associated with the tile
            tile.el.setAttribute("src", emptyImageUrl);
            return GridLayer.prototype._removeTile.call(this, key);
        },
        _tileReady: function(coords, err, tile) {
            if (!this._map || tile && tile.getAttribute("src") === emptyImageUrl) return;
            return GridLayer.prototype._tileReady.call(this, coords, err, tile);
        }
    });
    // @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
    // Instantiates a tile layer object given a `URL template` and optionally an options object.
    function tileLayer(url, options) {
        return new TileLayer(url, options);
    }
    /*
   * @class TileLayer.WMS
   * @inherits TileLayer
   * @aka L.TileLayer.WMS
   * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
   *
   * @example
   *
   * ```js
   * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
   * 	layers: 'nexrad-n0r-900913',
   * 	format: 'image/png',
   * 	transparent: true,
   * 	attribution: "Weather data © 2012 IEM Nexrad"
   * });
   * ```
   */ var TileLayerWMS = TileLayer.extend({
        // @section
        // @aka TileLayer.WMS options
        // If any custom options not documented here are used, they will be sent to the
        // WMS server as extra parameters in each request URL. This can be useful for
        // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            // @option layers: String = ''
            // **(required)** Comma-separated list of WMS layers to show.
            layers: "",
            // @option styles: String = ''
            // Comma-separated list of WMS styles.
            styles: "",
            // @option format: String = 'image/jpeg'
            // WMS image format (use `'image/png'` for layers with transparency).
            format: "image/jpeg",
            // @option transparent: Boolean = false
            // If `true`, the WMS service will return images with transparency.
            transparent: false,
            // @option version: String = '1.1.1'
            // Version of the WMS service to use
            version: "1.1.1"
        },
        options: {
            // @option crs: CRS = null
            // Coordinate Reference System to use for the WMS requests, defaults to
            // map CRS. Don't change this if you're not sure what it means.
            crs: null,
            // @option uppercase: Boolean = false
            // If `true`, WMS request parameter keys will be uppercase.
            uppercase: false
        },
        initialize: function(url, options) {
            this._url = url;
            var wmsParams = extend({}, this.defaultWmsParams);
            // all keys that are not TileLayer options go to WMS params
            for(var i in options)if (!(i in this.options)) wmsParams[i] = options[i];
            options = setOptions(this, options);
            var realRetina = options.detectRetina && Browser.retina ? 2 : 1;
            var tileSize = this.getTileSize();
            wmsParams.width = tileSize.x * realRetina;
            wmsParams.height = tileSize.y * realRetina;
            this.wmsParams = wmsParams;
        },
        onAdd: function(map) {
            this._crs = this.options.crs || map.options.crs;
            this._wmsVersion = parseFloat(this.wmsParams.version);
            var projectionKey = this._wmsVersion >= 1.3 ? "crs" : "srs";
            this.wmsParams[projectionKey] = this._crs.code;
            TileLayer.prototype.onAdd.call(this, map);
        },
        getTileUrl: function(coords) {
            var tileBounds = this._tileCoordsToNwSe(coords), crs = this._crs, bounds = toBounds(crs.project(tileBounds[0]), crs.project(tileBounds[1])), min = bounds.min, max = bounds.max, bbox = (this._wmsVersion >= 1.3 && this._crs === EPSG4326 ? [
                min.y,
                min.x,
                max.y,
                max.x
            ] : [
                min.x,
                min.y,
                max.x,
                max.y
            ]).join(","), url = TileLayer.prototype.getTileUrl.call(this, coords);
            return url + getParamString(this.wmsParams, url, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + bbox;
        },
        // @method setParams(params: Object, noRedraw?: Boolean): this
        // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
        setParams: function(params, noRedraw) {
            extend(this.wmsParams, params);
            if (!noRedraw) this.redraw();
            return this;
        }
    });
    // @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
    // Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.
    function tileLayerWMS(url, options) {
        return new TileLayerWMS(url, options);
    }
    TileLayer.WMS = TileLayerWMS;
    tileLayer.wms = tileLayerWMS;
    /*
   * @class Renderer
   * @inherits Layer
   * @aka L.Renderer
   *
   * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
   * DOM container of the renderer, its bounds, and its zoom animation.
   *
   * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
   * itself can be added or removed to the map. All paths use a renderer, which can
   * be implicit (the map will decide the type of renderer and use it automatically)
   * or explicit (using the [`renderer`](#path-renderer) option of the path).
   *
   * Do not use this class directly, use `SVG` and `Canvas` instead.
   *
   * @event update: Event
   * Fired when the renderer updates its bounds, center and zoom, for example when
   * its map has moved
   */ var Renderer = Layer.extend({
        // @section
        // @aka Renderer options
        options: {
            // @option padding: Number = 0.1
            // How much to extend the clip area around the map view (relative to its size)
            // e.g. 0.1 would be 10% of map view in each direction
            padding: 0.1
        },
        initialize: function(options) {
            setOptions(this, options);
            stamp(this);
            this._layers = this._layers || {};
        },
        onAdd: function() {
            if (!this._container) {
                this._initContainer(); // defined by renderer implementations
                // always keep transform-origin as 0 0
                addClass(this._container, "leaflet-zoom-animated");
            }
            this.getPane().appendChild(this._container);
            this._update();
            this.on("update", this._updatePaths, this);
        },
        onRemove: function() {
            this.off("update", this._updatePaths, this);
            this._destroyContainer();
        },
        getEvents: function() {
            var events = {
                viewreset: this._reset,
                zoom: this._onZoom,
                moveend: this._update,
                zoomend: this._onZoomEnd
            };
            if (this._zoomAnimated) events.zoomanim = this._onAnimZoom;
            return events;
        },
        _onAnimZoom: function(ev) {
            this._updateTransform(ev.center, ev.zoom);
        },
        _onZoom: function() {
            this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function(center, zoom) {
            var scale = this._map.getZoomScale(zoom, this._zoom), viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding), currentCenterPoint = this._map.project(this._center, zoom), topLeftOffset = viewHalf.multiplyBy(-scale).add(currentCenterPoint).subtract(this._map._getNewPixelOrigin(center, zoom));
            if (Browser.any3d) setTransform(this._container, topLeftOffset, scale);
            else setPosition(this._container, topLeftOffset);
        },
        _reset: function() {
            this._update();
            this._updateTransform(this._center, this._zoom);
            for(var id in this._layers)this._layers[id]._reset();
        },
        _onZoomEnd: function() {
            for(var id in this._layers)this._layers[id]._project();
        },
        _updatePaths: function() {
            for(var id in this._layers)this._layers[id]._update();
        },
        _update: function() {
            // Update pixel bounds of renderer container (for positioning/sizing/clipping later)
            // Subclasses are responsible of firing the 'update' event.
            var p = this.options.padding, size = this._map.getSize(), min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();
            this._bounds = new Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());
            this._center = this._map.getCenter();
            this._zoom = this._map.getZoom();
        }
    });
    /*
   * @class Canvas
   * @inherits Renderer
   * @aka L.Canvas
   *
   * Allows vector layers to be displayed with [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
   * Inherits `Renderer`.
   *
   * Due to [technical limitations](https://caniuse.com/canvas), Canvas is not
   * available in all web browsers, notably IE8, and overlapping geometries might
   * not display properly in some edge cases.
   *
   * @example
   *
   * Use Canvas by default for all paths in the map:
   *
   * ```js
   * var map = L.map('map', {
   * 	renderer: L.canvas()
   * });
   * ```
   *
   * Use a Canvas renderer with extra padding for specific vector geometries:
   *
   * ```js
   * var map = L.map('map');
   * var myRenderer = L.canvas({ padding: 0.5 });
   * var line = L.polyline( coordinates, { renderer: myRenderer } );
   * var circle = L.circle( center, { renderer: myRenderer } );
   * ```
   */ var Canvas = Renderer.extend({
        // @section
        // @aka Canvas options
        options: {
            // @option tolerance: Number = 0
            // How much to extend the click tolerance around a path/object on the map.
            tolerance: 0
        },
        getEvents: function() {
            var events = Renderer.prototype.getEvents.call(this);
            events.viewprereset = this._onViewPreReset;
            return events;
        },
        _onViewPreReset: function() {
            // Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
            this._postponeUpdatePaths = true;
        },
        onAdd: function() {
            Renderer.prototype.onAdd.call(this);
            // Redraw vectors since canvas is cleared upon removal,
            // in case of removing the renderer itself from the map.
            this._draw();
        },
        _initContainer: function() {
            var container = this._container = document.createElement("canvas");
            on(container, "mousemove", this._onMouseMove, this);
            on(container, "click dblclick mousedown mouseup contextmenu", this._onClick, this);
            on(container, "mouseout", this._handleMouseOut, this);
            container["_leaflet_disable_events"] = true;
            this._ctx = container.getContext("2d");
        },
        _destroyContainer: function() {
            cancelAnimFrame(this._redrawRequest);
            delete this._ctx;
            remove(this._container);
            off(this._container);
            delete this._container;
        },
        _updatePaths: function() {
            if (this._postponeUpdatePaths) return;
            var layer;
            this._redrawBounds = null;
            for(var id in this._layers){
                layer = this._layers[id];
                layer._update();
            }
            this._redraw();
        },
        _update: function() {
            if (this._map._animatingZoom && this._bounds) return;
            Renderer.prototype._update.call(this);
            var b = this._bounds, container = this._container, size = b.getSize(), m = Browser.retina ? 2 : 1;
            setPosition(container, b.min);
            // set canvas size (also clearing it); use double size on retina
            container.width = m * size.x;
            container.height = m * size.y;
            container.style.width = size.x + "px";
            container.style.height = size.y + "px";
            if (Browser.retina) this._ctx.scale(2, 2);
            // translate so we use the same path coordinates after canvas element moves
            this._ctx.translate(-b.min.x, -b.min.y);
            // Tell paths to redraw themselves
            this.fire("update");
        },
        _reset: function() {
            Renderer.prototype._reset.call(this);
            if (this._postponeUpdatePaths) {
                this._postponeUpdatePaths = false;
                this._updatePaths();
            }
        },
        _initPath: function(layer) {
            this._updateDashArray(layer);
            this._layers[stamp(layer)] = layer;
            var order = layer._order = {
                layer: layer,
                prev: this._drawLast,
                next: null
            };
            if (this._drawLast) this._drawLast.next = order;
            this._drawLast = order;
            this._drawFirst = this._drawFirst || this._drawLast;
        },
        _addPath: function(layer) {
            this._requestRedraw(layer);
        },
        _removePath: function(layer) {
            var order = layer._order;
            var next = order.next;
            var prev = order.prev;
            if (next) next.prev = prev;
            else this._drawLast = prev;
            if (prev) prev.next = next;
            else this._drawFirst = next;
            delete layer._order;
            delete this._layers[stamp(layer)];
            this._requestRedraw(layer);
        },
        _updatePath: function(layer) {
            // Redraw the union of the layer's old pixel
            // bounds and the new pixel bounds.
            this._extendRedrawBounds(layer);
            layer._project();
            layer._update();
            // The redraw will extend the redraw bounds
            // with the new pixel bounds.
            this._requestRedraw(layer);
        },
        _updateStyle: function(layer) {
            this._updateDashArray(layer);
            this._requestRedraw(layer);
        },
        _updateDashArray: function(layer) {
            if (typeof layer.options.dashArray === "string") {
                var parts = layer.options.dashArray.split(/[, ]+/), dashArray = [], dashValue, i;
                for(i = 0; i < parts.length; i++){
                    dashValue = Number(parts[i]);
                    // Ignore dash array containing invalid lengths
                    if (isNaN(dashValue)) return;
                    dashArray.push(dashValue);
                }
                layer.options._dashArray = dashArray;
            } else layer.options._dashArray = layer.options.dashArray;
        },
        _requestRedraw: function(layer) {
            if (!this._map) return;
            this._extendRedrawBounds(layer);
            this._redrawRequest = this._redrawRequest || requestAnimFrame(this._redraw, this);
        },
        _extendRedrawBounds: function(layer) {
            if (layer._pxBounds) {
                var padding = (layer.options.weight || 0) + 1;
                this._redrawBounds = this._redrawBounds || new Bounds();
                this._redrawBounds.extend(layer._pxBounds.min.subtract([
                    padding,
                    padding
                ]));
                this._redrawBounds.extend(layer._pxBounds.max.add([
                    padding,
                    padding
                ]));
            }
        },
        _redraw: function() {
            this._redrawRequest = null;
            if (this._redrawBounds) {
                this._redrawBounds.min._floor();
                this._redrawBounds.max._ceil();
            }
            this._clear(); // clear layers in redraw bounds
            this._draw(); // draw layers
            this._redrawBounds = null;
        },
        _clear: function() {
            var bounds = this._redrawBounds;
            if (bounds) {
                var size = bounds.getSize();
                this._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);
            } else {
                this._ctx.save();
                this._ctx.setTransform(1, 0, 0, 1, 0, 0);
                this._ctx.clearRect(0, 0, this._container.width, this._container.height);
                this._ctx.restore();
            }
        },
        _draw: function() {
            var layer, bounds = this._redrawBounds;
            this._ctx.save();
            if (bounds) {
                var size = bounds.getSize();
                this._ctx.beginPath();
                this._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);
                this._ctx.clip();
            }
            this._drawing = true;
            for(var order = this._drawFirst; order; order = order.next){
                layer = order.layer;
                if (!bounds || layer._pxBounds && layer._pxBounds.intersects(bounds)) layer._updatePath();
            }
            this._drawing = false;
            this._ctx.restore(); // Restore state before clipping.
        },
        _updatePoly: function(layer, closed) {
            if (!this._drawing) return;
            var i, j, len2, p, parts = layer._parts, len = parts.length, ctx = this._ctx;
            if (!len) return;
            ctx.beginPath();
            for(i = 0; i < len; i++){
                for(j = 0, len2 = parts[i].length; j < len2; j++){
                    p = parts[i][j];
                    ctx[j ? "lineTo" : "moveTo"](p.x, p.y);
                }
                if (closed) ctx.closePath();
            }
            this._fillStroke(ctx, layer);
        // TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
        },
        _updateCircle: function(layer) {
            if (!this._drawing || layer._empty()) return;
            var p = layer._point, ctx = this._ctx, r = Math.max(Math.round(layer._radius), 1), s = (Math.max(Math.round(layer._radiusY), 1) || r) / r;
            if (s !== 1) {
                ctx.save();
                ctx.scale(1, s);
            }
            ctx.beginPath();
            ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);
            if (s !== 1) ctx.restore();
            this._fillStroke(ctx, layer);
        },
        _fillStroke: function(ctx, layer) {
            var options = layer.options;
            if (options.fill) {
                ctx.globalAlpha = options.fillOpacity;
                ctx.fillStyle = options.fillColor || options.color;
                ctx.fill(options.fillRule || "evenodd");
            }
            if (options.stroke && options.weight !== 0) {
                if (ctx.setLineDash) ctx.setLineDash(layer.options && layer.options._dashArray || []);
                ctx.globalAlpha = options.opacity;
                ctx.lineWidth = options.weight;
                ctx.strokeStyle = options.color;
                ctx.lineCap = options.lineCap;
                ctx.lineJoin = options.lineJoin;
                ctx.stroke();
            }
        },
        // Canvas obviously doesn't have mouse events for individual drawn objects,
        // so we emulate that by calculating what's under the mouse on mousemove/click manually
        _onClick: function(e) {
            var point = this._map.mouseEventToLayerPoint(e), layer, clickedLayer;
            for(var order = this._drawFirst; order; order = order.next){
                layer = order.layer;
                if (layer.options.interactive && layer._containsPoint(point)) {
                    if (!(e.type === "click" || e.type === "preclick") || !this._map._draggableMoved(layer)) clickedLayer = layer;
                }
            }
            this._fireEvent(clickedLayer ? [
                clickedLayer
            ] : false, e);
        },
        _onMouseMove: function(e) {
            if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) return;
            var point = this._map.mouseEventToLayerPoint(e);
            this._handleMouseHover(e, point);
        },
        _handleMouseOut: function(e) {
            var layer = this._hoveredLayer;
            if (layer) {
                // if we're leaving the layer, fire mouseout
                removeClass(this._container, "leaflet-interactive");
                this._fireEvent([
                    layer
                ], e, "mouseout");
                this._hoveredLayer = null;
                this._mouseHoverThrottled = false;
            }
        },
        _handleMouseHover: function(e, point) {
            if (this._mouseHoverThrottled) return;
            var layer, candidateHoveredLayer;
            for(var order = this._drawFirst; order; order = order.next){
                layer = order.layer;
                if (layer.options.interactive && layer._containsPoint(point)) candidateHoveredLayer = layer;
            }
            if (candidateHoveredLayer !== this._hoveredLayer) {
                this._handleMouseOut(e);
                if (candidateHoveredLayer) {
                    addClass(this._container, "leaflet-interactive"); // change cursor
                    this._fireEvent([
                        candidateHoveredLayer
                    ], e, "mouseover");
                    this._hoveredLayer = candidateHoveredLayer;
                }
            }
            this._fireEvent(this._hoveredLayer ? [
                this._hoveredLayer
            ] : false, e);
            this._mouseHoverThrottled = true;
            setTimeout(bind(function() {
                this._mouseHoverThrottled = false;
            }, this), 32);
        },
        _fireEvent: function(layers, e, type) {
            this._map._fireDOMEvent(e, type || e.type, layers);
        },
        _bringToFront: function(layer) {
            var order = layer._order;
            if (!order) return;
            var next = order.next;
            var prev = order.prev;
            if (next) next.prev = prev;
            else // Already last
            return;
            if (prev) prev.next = next;
            else if (next) // Update first entry unless this is the
            // single entry
            this._drawFirst = next;
            order.prev = this._drawLast;
            this._drawLast.next = order;
            order.next = null;
            this._drawLast = order;
            this._requestRedraw(layer);
        },
        _bringToBack: function(layer) {
            var order = layer._order;
            if (!order) return;
            var next = order.next;
            var prev = order.prev;
            if (prev) prev.next = next;
            else // Already first
            return;
            if (next) next.prev = prev;
            else if (prev) // Update last entry unless this is the
            // single entry
            this._drawLast = prev;
            order.prev = null;
            order.next = this._drawFirst;
            this._drawFirst.prev = order;
            this._drawFirst = order;
            this._requestRedraw(layer);
        }
    });
    // @factory L.canvas(options?: Renderer options)
    // Creates a Canvas renderer with the given options.
    function canvas(options) {
        return Browser.canvas ? new Canvas(options) : null;
    }
    /*
   * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
   */ var vmlCreate = function() {
        try {
            document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml");
            return function(name) {
                return document.createElement("<lvml:" + name + ' class="lvml">');
            };
        } catch (e) {
        // Do not return fn from catch block so `e` can be garbage collected
        // See https://github.com/Leaflet/Leaflet/pull/7279
        }
        return function(name) {
            return document.createElement("<" + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
    }();
    /*
   * @class SVG
   *
   *
   * VML was deprecated in 2012, which means VML functionality exists only for backwards compatibility
   * with old versions of Internet Explorer.
   */ // mixin to redefine some SVG methods to handle VML syntax which is similar but with some differences
    var vmlMixin = {
        _initContainer: function() {
            this._container = create$1("div", "leaflet-vml-container");
        },
        _update: function() {
            if (this._map._animatingZoom) return;
            Renderer.prototype._update.call(this);
            this.fire("update");
        },
        _initPath: function(layer) {
            var container = layer._container = vmlCreate("shape");
            addClass(container, "leaflet-vml-shape " + (this.options.className || ""));
            container.coordsize = "1 1";
            layer._path = vmlCreate("path");
            container.appendChild(layer._path);
            this._updateStyle(layer);
            this._layers[stamp(layer)] = layer;
        },
        _addPath: function(layer) {
            var container = layer._container;
            this._container.appendChild(container);
            if (layer.options.interactive) layer.addInteractiveTarget(container);
        },
        _removePath: function(layer) {
            var container = layer._container;
            remove(container);
            layer.removeInteractiveTarget(container);
            delete this._layers[stamp(layer)];
        },
        _updateStyle: function(layer) {
            var stroke = layer._stroke, fill = layer._fill, options = layer.options, container = layer._container;
            container.stroked = !!options.stroke;
            container.filled = !!options.fill;
            if (options.stroke) {
                if (!stroke) stroke = layer._stroke = vmlCreate("stroke");
                container.appendChild(stroke);
                stroke.weight = options.weight + "px";
                stroke.color = options.color;
                stroke.opacity = options.opacity;
                if (options.dashArray) stroke.dashStyle = isArray(options.dashArray) ? options.dashArray.join(" ") : options.dashArray.replace(/( *, *)/g, " ");
                else stroke.dashStyle = "";
                stroke.endcap = options.lineCap.replace("butt", "flat");
                stroke.joinstyle = options.lineJoin;
            } else if (stroke) {
                container.removeChild(stroke);
                layer._stroke = null;
            }
            if (options.fill) {
                if (!fill) fill = layer._fill = vmlCreate("fill");
                container.appendChild(fill);
                fill.color = options.fillColor || options.color;
                fill.opacity = options.fillOpacity;
            } else if (fill) {
                container.removeChild(fill);
                layer._fill = null;
            }
        },
        _updateCircle: function(layer) {
            var p = layer._point.round(), r = Math.round(layer._radius), r2 = Math.round(layer._radiusY || r);
            this._setPath(layer, layer._empty() ? "M0 0" : "AL " + p.x + "," + p.y + " " + r + "," + r2 + " 0," + 23592600);
        },
        _setPath: function(layer, path) {
            layer._path.v = path;
        },
        _bringToFront: function(layer) {
            toFront(layer._container);
        },
        _bringToBack: function(layer) {
            toBack(layer._container);
        }
    };
    var create = Browser.vml ? vmlCreate : svgCreate;
    /*
   * @class SVG
   * @inherits Renderer
   * @aka L.SVG
   *
   * Allows vector layers to be displayed with [SVG](https://developer.mozilla.org/docs/Web/SVG).
   * Inherits `Renderer`.
   *
   * Due to [technical limitations](https://caniuse.com/svg), SVG is not
   * available in all web browsers, notably Android 2.x and 3.x.
   *
   * Although SVG is not available on IE7 and IE8, these browsers support
   * [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language)
   * (a now deprecated technology), and the SVG renderer will fall back to VML in
   * this case.
   *
   * @example
   *
   * Use SVG by default for all paths in the map:
   *
   * ```js
   * var map = L.map('map', {
   * 	renderer: L.svg()
   * });
   * ```
   *
   * Use a SVG renderer with extra padding for specific vector geometries:
   *
   * ```js
   * var map = L.map('map');
   * var myRenderer = L.svg({ padding: 0.5 });
   * var line = L.polyline( coordinates, { renderer: myRenderer } );
   * var circle = L.circle( center, { renderer: myRenderer } );
   * ```
   */ var SVG = Renderer.extend({
        _initContainer: function() {
            this._container = create("svg");
            // makes it possible to click through svg root; we'll reset it back in individual paths
            this._container.setAttribute("pointer-events", "none");
            this._rootGroup = create("g");
            this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
            remove(this._container);
            off(this._container);
            delete this._container;
            delete this._rootGroup;
            delete this._svgSize;
        },
        _update: function() {
            if (this._map._animatingZoom && this._bounds) return;
            Renderer.prototype._update.call(this);
            var b = this._bounds, size = b.getSize(), container = this._container;
            // set size of svg-container if changed
            if (!this._svgSize || !this._svgSize.equals(size)) {
                this._svgSize = size;
                container.setAttribute("width", size.x);
                container.setAttribute("height", size.y);
            }
            // movement: update container viewBox so that we don't have to change coordinates of individual layers
            setPosition(container, b.min);
            container.setAttribute("viewBox", [
                b.min.x,
                b.min.y,
                size.x,
                size.y
            ].join(" "));
            this.fire("update");
        },
        // methods below are called by vector layers implementations
        _initPath: function(layer) {
            var path = layer._path = create("path");
            // @namespace Path
            // @option className: String = null
            // Custom class name set on an element. Only for SVG renderer.
            if (layer.options.className) addClass(path, layer.options.className);
            if (layer.options.interactive) addClass(path, "leaflet-interactive");
            this._updateStyle(layer);
            this._layers[stamp(layer)] = layer;
        },
        _addPath: function(layer) {
            if (!this._rootGroup) this._initContainer();
            this._rootGroup.appendChild(layer._path);
            layer.addInteractiveTarget(layer._path);
        },
        _removePath: function(layer) {
            remove(layer._path);
            layer.removeInteractiveTarget(layer._path);
            delete this._layers[stamp(layer)];
        },
        _updatePath: function(layer) {
            layer._project();
            layer._update();
        },
        _updateStyle: function(layer) {
            var path = layer._path, options = layer.options;
            if (!path) return;
            if (options.stroke) {
                path.setAttribute("stroke", options.color);
                path.setAttribute("stroke-opacity", options.opacity);
                path.setAttribute("stroke-width", options.weight);
                path.setAttribute("stroke-linecap", options.lineCap);
                path.setAttribute("stroke-linejoin", options.lineJoin);
                if (options.dashArray) path.setAttribute("stroke-dasharray", options.dashArray);
                else path.removeAttribute("stroke-dasharray");
                if (options.dashOffset) path.setAttribute("stroke-dashoffset", options.dashOffset);
                else path.removeAttribute("stroke-dashoffset");
            } else path.setAttribute("stroke", "none");
            if (options.fill) {
                path.setAttribute("fill", options.fillColor || options.color);
                path.setAttribute("fill-opacity", options.fillOpacity);
                path.setAttribute("fill-rule", options.fillRule || "evenodd");
            } else path.setAttribute("fill", "none");
        },
        _updatePoly: function(layer, closed) {
            this._setPath(layer, pointsToPath(layer._parts, closed));
        },
        _updateCircle: function(layer) {
            var p = layer._point, r = Math.max(Math.round(layer._radius), 1), r2 = Math.max(Math.round(layer._radiusY), 1) || r, arc = "a" + r + "," + r2 + " 0 1,0 ";
            // drawing a circle with two half-arcs
            var d = layer._empty() ? "M0 0" : "M" + (p.x - r) + "," + p.y + arc + r * 2 + ",0 " + arc + -r * 2 + ",0 ";
            this._setPath(layer, d);
        },
        _setPath: function(layer, path) {
            layer._path.setAttribute("d", path);
        },
        // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
        _bringToFront: function(layer) {
            toFront(layer._path);
        },
        _bringToBack: function(layer) {
            toBack(layer._path);
        }
    });
    if (Browser.vml) SVG.include(vmlMixin);
    // @namespace SVG
    // @factory L.svg(options?: Renderer options)
    // Creates a SVG renderer with the given options.
    function svg(options) {
        return Browser.svg || Browser.vml ? new SVG(options) : null;
    }
    Map.include({
        // @namespace Map; @method getRenderer(layer: Path): Renderer
        // Returns the instance of `Renderer` that should be used to render the given
        // `Path`. It will ensure that the `renderer` options of the map and paths
        // are respected, and that the renderers do exist on the map.
        getRenderer: function(layer) {
            // @namespace Path; @option renderer: Renderer
            // Use this specific instance of `Renderer` for this path. Takes
            // precedence over the map's [default renderer](#map-renderer).
            var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;
            if (!renderer) renderer = this._renderer = this._createRenderer();
            if (!this.hasLayer(renderer)) this.addLayer(renderer);
            return renderer;
        },
        _getPaneRenderer: function(name) {
            if (name === "overlayPane" || name === undefined) return false;
            var renderer = this._paneRenderers[name];
            if (renderer === undefined) {
                renderer = this._createRenderer({
                    pane: name
                });
                this._paneRenderers[name] = renderer;
            }
            return renderer;
        },
        _createRenderer: function(options) {
            // @namespace Map; @option preferCanvas: Boolean = false
            // Whether `Path`s should be rendered on a `Canvas` renderer.
            // By default, all `Path`s are rendered in a `SVG` renderer.
            return this.options.preferCanvas && canvas(options) || svg(options);
        }
    });
    /*
   * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
   */ /*
   * @class Rectangle
   * @aka L.Rectangle
   * @inherits Polygon
   *
   * A class for drawing rectangle overlays on a map. Extends `Polygon`.
   *
   * @example
   *
   * ```js
   * // define rectangle geographical bounds
   * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
   *
   * // create an orange rectangle
   * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
   *
   * // zoom the map to the rectangle bounds
   * map.fitBounds(bounds);
   * ```
   *
   */ var Rectangle = Polygon.extend({
        initialize: function(latLngBounds, options) {
            Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
        },
        // @method setBounds(latLngBounds: LatLngBounds): this
        // Redraws the rectangle with the passed bounds.
        setBounds: function(latLngBounds) {
            return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
        },
        _boundsToLatLngs: function(latLngBounds) {
            latLngBounds = toLatLngBounds(latLngBounds);
            return [
                latLngBounds.getSouthWest(),
                latLngBounds.getNorthWest(),
                latLngBounds.getNorthEast(),
                latLngBounds.getSouthEast()
            ];
        }
    });
    // @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
    function rectangle(latLngBounds, options) {
        return new Rectangle(latLngBounds, options);
    }
    SVG.create = create;
    SVG.pointsToPath = pointsToPath;
    GeoJSON.geometryToLayer = geometryToLayer;
    GeoJSON.coordsToLatLng = coordsToLatLng;
    GeoJSON.coordsToLatLngs = coordsToLatLngs;
    GeoJSON.latLngToCoords = latLngToCoords;
    GeoJSON.latLngsToCoords = latLngsToCoords;
    GeoJSON.getFeature = getFeature;
    GeoJSON.asFeature = asFeature;
    /*
   * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
   * (zoom to a selected bounding box), enabled by default.
   */ // @namespace Map
    // @section Interaction Options
    Map.mergeOptions({
        // @option boxZoom: Boolean = true
        // Whether the map can be zoomed to a rectangular area specified by
        // dragging the mouse while pressing the shift key.
        boxZoom: true
    });
    var BoxZoom = Handler.extend({
        initialize: function(map) {
            this._map = map;
            this._container = map._container;
            this._pane = map._panes.overlayPane;
            this._resetStateTimeout = 0;
            map.on("unload", this._destroy, this);
        },
        addHooks: function() {
            on(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
            off(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function() {
            return this._moved;
        },
        _destroy: function() {
            remove(this._pane);
            delete this._pane;
        },
        _resetState: function() {
            this._resetStateTimeout = 0;
            this._moved = false;
        },
        _clearDeferredResetState: function() {
            if (this._resetStateTimeout !== 0) {
                clearTimeout(this._resetStateTimeout);
                this._resetStateTimeout = 0;
            }
        },
        _onMouseDown: function(e) {
            if (!e.shiftKey || e.which !== 1 && e.button !== 1) return false;
            // Clear the deferred resetState if it hasn't executed yet, otherwise it
            // will interrupt the interaction and orphan a box element in the container.
            this._clearDeferredResetState();
            this._resetState();
            disableTextSelection();
            disableImageDrag();
            this._startPoint = this._map.mouseEventToContainerPoint(e);
            on(document, {
                contextmenu: stop,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this);
        },
        _onMouseMove: function(e) {
            if (!this._moved) {
                this._moved = true;
                this._box = create$1("div", "leaflet-zoom-box", this._container);
                addClass(this._container, "leaflet-crosshair");
                this._map.fire("boxzoomstart");
            }
            this._point = this._map.mouseEventToContainerPoint(e);
            var bounds = new Bounds(this._point, this._startPoint), size = bounds.getSize();
            setPosition(this._box, bounds.min);
            this._box.style.width = size.x + "px";
            this._box.style.height = size.y + "px";
        },
        _finish: function() {
            if (this._moved) {
                remove(this._box);
                removeClass(this._container, "leaflet-crosshair");
            }
            enableTextSelection();
            enableImageDrag();
            off(document, {
                contextmenu: stop,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this);
        },
        _onMouseUp: function(e) {
            if (e.which !== 1 && e.button !== 1) return;
            this._finish();
            if (!this._moved) return;
            // Postpone to next JS tick so internal click event handling
            // still see it as "moved".
            this._clearDeferredResetState();
            this._resetStateTimeout = setTimeout(bind(this._resetState, this), 0);
            var bounds = new LatLngBounds(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
            this._map.fitBounds(bounds).fire("boxzoomend", {
                boxZoomBounds: bounds
            });
        },
        _onKeyDown: function(e) {
            if (e.keyCode === 27) {
                this._finish();
                this._clearDeferredResetState();
                this._resetState();
            }
        }
    });
    // @section Handlers
    // @property boxZoom: Handler
    // Box (shift-drag with mouse) zoom handler.
    Map.addInitHook("addHandler", "boxZoom", BoxZoom);
    /*
   * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
   */ // @namespace Map
    // @section Interaction Options
    Map.mergeOptions({
        // @option doubleClickZoom: Boolean|String = true
        // Whether the map can be zoomed in by double clicking on it and
        // zoomed out by double clicking while holding shift. If passed
        // `'center'`, double-click zoom will zoom to the center of the
        //  view regardless of where the mouse was.
        doubleClickZoom: true
    });
    var DoubleClickZoom = Handler.extend({
        addHooks: function() {
            this._map.on("dblclick", this._onDoubleClick, this);
        },
        removeHooks: function() {
            this._map.off("dblclick", this._onDoubleClick, this);
        },
        _onDoubleClick: function(e) {
            var map = this._map, oldZoom = map.getZoom(), delta = map.options.zoomDelta, zoom = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;
            if (map.options.doubleClickZoom === "center") map.setZoom(zoom);
            else map.setZoomAround(e.containerPoint, zoom);
        }
    });
    // @section Handlers
    //
    // Map properties include interaction handlers that allow you to control
    // interaction behavior in runtime, enabling or disabling certain features such
    // as dragging or touch zoom (see `Handler` methods). For example:
    //
    // ```js
    // map.doubleClickZoom.disable();
    // ```
    //
    // @property doubleClickZoom: Handler
    // Double click zoom handler.
    Map.addInitHook("addHandler", "doubleClickZoom", DoubleClickZoom);
    /*
   * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
   */ // @namespace Map
    // @section Interaction Options
    Map.mergeOptions({
        // @option dragging: Boolean = true
        // Whether the map is draggable with mouse/touch or not.
        dragging: true,
        // @section Panning Inertia Options
        // @option inertia: Boolean = *
        // If enabled, panning of the map will have an inertia effect where
        // the map builds momentum while dragging and continues moving in
        // the same direction for some time. Feels especially nice on touch
        // devices. Enabled by default.
        inertia: true,
        // @option inertiaDeceleration: Number = 3000
        // The rate with which the inertial movement slows down, in pixels/second².
        inertiaDeceleration: 3400,
        // @option inertiaMaxSpeed: Number = Infinity
        // Max speed of the inertial movement, in pixels/second.
        inertiaMaxSpeed: Infinity,
        // @option easeLinearity: Number = 0.2
        easeLinearity: 0.2,
        // TODO refactor, move to CRS
        // @option worldCopyJump: Boolean = false
        // With this option enabled, the map tracks when you pan to another "copy"
        // of the world and seamlessly jumps to the original one so that all overlays
        // like markers and vector layers are still visible.
        worldCopyJump: false,
        // @option maxBoundsViscosity: Number = 0.0
        // If `maxBounds` is set, this option will control how solid the bounds
        // are when dragging the map around. The default value of `0.0` allows the
        // user to drag outside the bounds at normal speed, higher values will
        // slow down map dragging outside bounds, and `1.0` makes the bounds fully
        // solid, preventing the user from dragging outside the bounds.
        maxBoundsViscosity: 0.0
    });
    var Drag = Handler.extend({
        addHooks: function() {
            if (!this._draggable) {
                var map = this._map;
                this._draggable = new Draggable(map._mapPane, map._container);
                this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this);
                this._draggable.on("predrag", this._onPreDragLimit, this);
                if (map.options.worldCopyJump) {
                    this._draggable.on("predrag", this._onPreDragWrap, this);
                    map.on("zoomend", this._onZoomEnd, this);
                    map.whenReady(this._onZoomEnd, this);
                }
            }
            addClass(this._map._container, "leaflet-grab leaflet-touch-drag");
            this._draggable.enable();
            this._positions = [];
            this._times = [];
        },
        removeHooks: function() {
            removeClass(this._map._container, "leaflet-grab");
            removeClass(this._map._container, "leaflet-touch-drag");
            this._draggable.disable();
        },
        moved: function() {
            return this._draggable && this._draggable._moved;
        },
        moving: function() {
            return this._draggable && this._draggable._moving;
        },
        _onDragStart: function() {
            var map = this._map;
            map._stop();
            if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                var bounds = toLatLngBounds(this._map.options.maxBounds);
                this._offsetLimit = toBounds(this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1).add(this._map.getSize()));
                this._viscosity = Math.min(1.0, Math.max(0.0, this._map.options.maxBoundsViscosity));
            } else this._offsetLimit = null;
            map.fire("movestart").fire("dragstart");
            if (map.options.inertia) {
                this._positions = [];
                this._times = [];
            }
        },
        _onDrag: function(e) {
            if (this._map.options.inertia) {
                var time = this._lastTime = +new Date(), pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                this._positions.push(pos);
                this._times.push(time);
                this._prunePositions(time);
            }
            this._map.fire("move", e).fire("drag", e);
        },
        _prunePositions: function(time) {
            while(this._positions.length > 1 && time - this._times[0] > 50){
                this._positions.shift();
                this._times.shift();
            }
        },
        _onZoomEnd: function() {
            var pxCenter = this._map.getSize().divideBy(2), pxWorldCenter = this._map.latLngToLayerPoint([
                0,
                0
            ]);
            this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
            this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
        },
        _viscousLimit: function(value, threshold) {
            return value - (value - threshold) * this._viscosity;
        },
        _onPreDragLimit: function() {
            if (!this._viscosity || !this._offsetLimit) return;
            var offset = this._draggable._newPos.subtract(this._draggable._startPos);
            var limit = this._offsetLimit;
            if (offset.x < limit.min.x) offset.x = this._viscousLimit(offset.x, limit.min.x);
            if (offset.y < limit.min.y) offset.y = this._viscousLimit(offset.y, limit.min.y);
            if (offset.x > limit.max.x) offset.x = this._viscousLimit(offset.x, limit.max.x);
            if (offset.y > limit.max.y) offset.y = this._viscousLimit(offset.y, limit.max.y);
            this._draggable._newPos = this._draggable._startPos.add(offset);
        },
        _onPreDragWrap: function() {
            // TODO refactor to be able to adjust map pane position after zoom
            var worldWidth = this._worldWidth, halfWidth = Math.round(worldWidth / 2), dx = this._initialWorldOffset, x = this._draggable._newPos.x, newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx, newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx, newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;
            this._draggable._absPos = this._draggable._newPos.clone();
            this._draggable._newPos.x = newX;
        },
        _onDragEnd: function(e) {
            var map = this._map, options = map.options, noInertia = !options.inertia || e.noInertia || this._times.length < 2;
            map.fire("dragend", e);
            if (noInertia) map.fire("moveend");
            else {
                this._prunePositions(+new Date());
                var direction = this._lastPos.subtract(this._positions[0]), duration = (this._lastTime - this._times[0]) / 1000, ease = options.easeLinearity, speedVector = direction.multiplyBy(ease / duration), speed = speedVector.distanceTo([
                    0,
                    0
                ]), limitedSpeed = Math.min(options.inertiaMaxSpeed, speed), limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed), decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease), offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();
                if (!offset.x && !offset.y) map.fire("moveend");
                else {
                    offset = map._limitOffset(offset, map.options.maxBounds);
                    requestAnimFrame(function() {
                        map.panBy(offset, {
                            duration: decelerationDuration,
                            easeLinearity: ease,
                            noMoveStart: true,
                            animate: true
                        });
                    });
                }
            }
        }
    });
    // @section Handlers
    // @property dragging: Handler
    // Map dragging handler (by both mouse and touch).
    Map.addInitHook("addHandler", "dragging", Drag);
    /*
   * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
   */ // @namespace Map
    // @section Keyboard Navigation Options
    Map.mergeOptions({
        // @option keyboard: Boolean = true
        // Makes the map focusable and allows users to navigate the map with keyboard
        // arrows and `+`/`-` keys.
        keyboard: true,
        // @option keyboardPanDelta: Number = 80
        // Amount of pixels to pan when pressing an arrow key.
        keyboardPanDelta: 80
    });
    var Keyboard = Handler.extend({
        keyCodes: {
            left: [
                37
            ],
            right: [
                39
            ],
            down: [
                40
            ],
            up: [
                38
            ],
            zoomIn: [
                187,
                107,
                61,
                171
            ],
            zoomOut: [
                189,
                109,
                54,
                173
            ]
        },
        initialize: function(map) {
            this._map = map;
            this._setPanDelta(map.options.keyboardPanDelta);
            this._setZoomDelta(map.options.zoomDelta);
        },
        addHooks: function() {
            var container = this._map._container;
            // make the container focusable by tabbing
            if (container.tabIndex <= 0) container.tabIndex = "0";
            on(container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this);
            this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this);
        },
        removeHooks: function() {
            this._removeHooks();
            off(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this);
            this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this);
        },
        _onMouseDown: function() {
            if (this._focused) return;
            var body = document.body, docEl = document.documentElement, top = body.scrollTop || docEl.scrollTop, left = body.scrollLeft || docEl.scrollLeft;
            this._map._container.focus();
            window.scrollTo(left, top);
        },
        _onFocus: function() {
            this._focused = true;
            this._map.fire("focus");
        },
        _onBlur: function() {
            this._focused = false;
            this._map.fire("blur");
        },
        _setPanDelta: function(panDelta) {
            var keys = this._panKeys = {}, codes = this.keyCodes, i, len;
            for(i = 0, len = codes.left.length; i < len; i++)keys[codes.left[i]] = [
                -1 * panDelta,
                0
            ];
            for(i = 0, len = codes.right.length; i < len; i++)keys[codes.right[i]] = [
                panDelta,
                0
            ];
            for(i = 0, len = codes.down.length; i < len; i++)keys[codes.down[i]] = [
                0,
                panDelta
            ];
            for(i = 0, len = codes.up.length; i < len; i++)keys[codes.up[i]] = [
                0,
                -1 * panDelta
            ];
        },
        _setZoomDelta: function(zoomDelta) {
            var keys = this._zoomKeys = {}, codes = this.keyCodes, i, len;
            for(i = 0, len = codes.zoomIn.length; i < len; i++)keys[codes.zoomIn[i]] = zoomDelta;
            for(i = 0, len = codes.zoomOut.length; i < len; i++)keys[codes.zoomOut[i]] = -zoomDelta;
        },
        _addHooks: function() {
            on(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function() {
            off(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function(e) {
            if (e.altKey || e.ctrlKey || e.metaKey) return;
            var key = e.keyCode, map = this._map, offset;
            if (key in this._panKeys) {
                if (!map._panAnim || !map._panAnim._inProgress) {
                    offset = this._panKeys[key];
                    if (e.shiftKey) offset = toPoint(offset).multiplyBy(3);
                    if (map.options.maxBounds) offset = map._limitOffset(toPoint(offset), map.options.maxBounds);
                    if (map.options.worldCopyJump) {
                        var newLatLng = map.wrapLatLng(map.unproject(map.project(map.getCenter()).add(offset)));
                        map.panTo(newLatLng);
                    } else map.panBy(offset);
                }
            } else if (key in this._zoomKeys) map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);
            else if (key === 27 && map._popup && map._popup.options.closeOnEscapeKey) map.closePopup();
            else return;
            stop(e);
        }
    });
    // @section Handlers
    // @section Handlers
    // @property keyboard: Handler
    // Keyboard navigation handler.
    Map.addInitHook("addHandler", "keyboard", Keyboard);
    /*
   * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
   */ // @namespace Map
    // @section Interaction Options
    Map.mergeOptions({
        // @section Mouse wheel options
        // @option scrollWheelZoom: Boolean|String = true
        // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
        // it will zoom to the center of the view regardless of where the mouse was.
        scrollWheelZoom: true,
        // @option wheelDebounceTime: Number = 40
        // Limits the rate at which a wheel can fire (in milliseconds). By default
        // user can't zoom via wheel more often than once per 40 ms.
        wheelDebounceTime: 40,
        // @option wheelPxPerZoomLevel: Number = 60
        // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
        // mean a change of one full zoom level. Smaller values will make wheel-zooming
        // faster (and vice versa).
        wheelPxPerZoomLevel: 60
    });
    var ScrollWheelZoom = Handler.extend({
        addHooks: function() {
            on(this._map._container, "wheel", this._onWheelScroll, this);
            this._delta = 0;
        },
        removeHooks: function() {
            off(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(e) {
            var delta = getWheelDelta(e);
            var debounce = this._map.options.wheelDebounceTime;
            this._delta += delta;
            this._lastMousePos = this._map.mouseEventToContainerPoint(e);
            if (!this._startTime) this._startTime = +new Date();
            var left = Math.max(debounce - (+new Date() - this._startTime), 0);
            clearTimeout(this._timer);
            this._timer = setTimeout(bind(this._performZoom, this), left);
            stop(e);
        },
        _performZoom: function() {
            var map = this._map, zoom = map.getZoom(), snap = this._map.options.zoomSnap || 0;
            map._stop(); // stop panning and fly animations if any
            // map the delta with a sigmoid function to -4..4 range leaning on -1..1
            var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2, d4 = snap ? Math.ceil(d3 / snap) * snap : d3, delta = map._limitZoom(zoom + (this._delta > 0 ? d4 : -d4)) - zoom;
            this._delta = 0;
            this._startTime = null;
            if (!delta) return;
            if (map.options.scrollWheelZoom === "center") map.setZoom(zoom + delta);
            else map.setZoomAround(this._lastMousePos, zoom + delta);
        }
    });
    // @section Handlers
    // @property scrollWheelZoom: Handler
    // Scroll wheel zoom handler.
    Map.addInitHook("addHandler", "scrollWheelZoom", ScrollWheelZoom);
    /*
   * L.Map.TapHold is used to simulate `contextmenu` event on long hold,
   * which otherwise is not fired by mobile Safari.
   */ var tapHoldDelay = 600;
    // @namespace Map
    // @section Interaction Options
    Map.mergeOptions({
        // @section Touch interaction options
        // @option tapHold: Boolean
        // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
        tapHold: Browser.touchNative && Browser.safari && Browser.mobile,
        // @option tapTolerance: Number = 15
        // The max number of pixels a user can shift his finger during touch
        // for it to be considered a valid tap.
        tapTolerance: 15
    });
    var TapHold = Handler.extend({
        addHooks: function() {
            on(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
            off(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(e) {
            clearTimeout(this._holdTimeout);
            if (e.touches.length !== 1) return;
            var first = e.touches[0];
            this._startPos = this._newPos = new Point(first.clientX, first.clientY);
            this._holdTimeout = setTimeout(bind(function() {
                this._cancel();
                if (!this._isTapValid()) return;
                // prevent simulated mouse events https://w3c.github.io/touch-events/#mouse-events
                on(document, "touchend", preventDefault);
                on(document, "touchend touchcancel", this._cancelClickPrevent);
                this._simulateEvent("contextmenu", first);
            }, this), tapHoldDelay);
            on(document, "touchend touchcancel contextmenu", this._cancel, this);
            on(document, "touchmove", this._onMove, this);
        },
        _cancelClickPrevent: function cancelClickPrevent() {
            off(document, "touchend", preventDefault);
            off(document, "touchend touchcancel", cancelClickPrevent);
        },
        _cancel: function() {
            clearTimeout(this._holdTimeout);
            off(document, "touchend touchcancel contextmenu", this._cancel, this);
            off(document, "touchmove", this._onMove, this);
        },
        _onMove: function(e) {
            var first = e.touches[0];
            this._newPos = new Point(first.clientX, first.clientY);
        },
        _isTapValid: function() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        },
        _simulateEvent: function(type, e) {
            var simulatedEvent = new MouseEvent(type, {
                bubbles: true,
                cancelable: true,
                view: window,
                // detail: 1,
                screenX: e.screenX,
                screenY: e.screenY,
                clientX: e.clientX,
                clientY: e.clientY
            });
            simulatedEvent._simulated = true;
            e.target.dispatchEvent(simulatedEvent);
        }
    });
    // @section Handlers
    // @property tapHold: Handler
    // Long tap handler to simulate `contextmenu` event (useful in mobile Safari).
    Map.addInitHook("addHandler", "tapHold", TapHold);
    /*
   * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
   */ // @namespace Map
    // @section Interaction Options
    Map.mergeOptions({
        // @section Touch interaction options
        // @option touchZoom: Boolean|String = *
        // Whether the map can be zoomed by touch-dragging with two fingers. If
        // passed `'center'`, it will zoom to the center of the view regardless of
        // where the touch events (fingers) were. Enabled for touch-capable web
        // browsers.
        touchZoom: Browser.touch,
        // @option bounceAtZoomLimits: Boolean = true
        // Set it to false if you don't want the map to zoom beyond min/max zoom
        // and then bounce back when pinch-zooming.
        bounceAtZoomLimits: true
    });
    var TouchZoom = Handler.extend({
        addHooks: function() {
            addClass(this._map._container, "leaflet-touch-zoom");
            on(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
            removeClass(this._map._container, "leaflet-touch-zoom");
            off(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(e) {
            var map = this._map;
            if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) return;
            var p1 = map.mouseEventToContainerPoint(e.touches[0]), p2 = map.mouseEventToContainerPoint(e.touches[1]);
            this._centerPoint = map.getSize()._divideBy(2);
            this._startLatLng = map.containerPointToLatLng(this._centerPoint);
            if (map.options.touchZoom !== "center") this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
            this._startDist = p1.distanceTo(p2);
            this._startZoom = map.getZoom();
            this._moved = false;
            this._zooming = true;
            map._stop();
            on(document, "touchmove", this._onTouchMove, this);
            on(document, "touchend touchcancel", this._onTouchEnd, this);
            preventDefault(e);
        },
        _onTouchMove: function(e) {
            if (!e.touches || e.touches.length !== 2 || !this._zooming) return;
            var map = this._map, p1 = map.mouseEventToContainerPoint(e.touches[0]), p2 = map.mouseEventToContainerPoint(e.touches[1]), scale = p1.distanceTo(p2) / this._startDist;
            this._zoom = map.getScaleZoom(scale, this._startZoom);
            if (!map.options.bounceAtZoomLimits && (this._zoom < map.getMinZoom() && scale < 1 || this._zoom > map.getMaxZoom() && scale > 1)) this._zoom = map._limitZoom(this._zoom);
            if (map.options.touchZoom === "center") {
                this._center = this._startLatLng;
                if (scale === 1) return;
            } else {
                // Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
                var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);
                if (scale === 1 && delta.x === 0 && delta.y === 0) return;
                this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
            }
            if (!this._moved) {
                map._moveStart(true, false);
                this._moved = true;
            }
            cancelAnimFrame(this._animRequest);
            var moveFn = bind(map._move, map, this._center, this._zoom, {
                pinch: true,
                round: false
            }, undefined);
            this._animRequest = requestAnimFrame(moveFn, this, true);
            preventDefault(e);
        },
        _onTouchEnd: function() {
            if (!this._moved || !this._zooming) {
                this._zooming = false;
                return;
            }
            this._zooming = false;
            cancelAnimFrame(this._animRequest);
            off(document, "touchmove", this._onTouchMove, this);
            off(document, "touchend touchcancel", this._onTouchEnd, this);
            // Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.
            if (this._map.options.zoomAnimation) this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
            else this._map._resetView(this._center, this._map._limitZoom(this._zoom));
        }
    });
    // @section Handlers
    // @property touchZoom: Handler
    // Touch zoom handler.
    Map.addInitHook("addHandler", "touchZoom", TouchZoom);
    Map.BoxZoom = BoxZoom;
    Map.DoubleClickZoom = DoubleClickZoom;
    Map.Drag = Drag;
    Map.Keyboard = Keyboard;
    Map.ScrollWheelZoom = ScrollWheelZoom;
    Map.TapHold = TapHold;
    Map.TouchZoom = TouchZoom;
    exports1.Bounds = Bounds;
    exports1.Browser = Browser;
    exports1.CRS = CRS;
    exports1.Canvas = Canvas;
    exports1.Circle = Circle;
    exports1.CircleMarker = CircleMarker;
    exports1.Class = Class;
    exports1.Control = Control;
    exports1.DivIcon = DivIcon;
    exports1.DivOverlay = DivOverlay;
    exports1.DomEvent = DomEvent;
    exports1.DomUtil = DomUtil;
    exports1.Draggable = Draggable;
    exports1.Evented = Evented;
    exports1.FeatureGroup = FeatureGroup;
    exports1.GeoJSON = GeoJSON;
    exports1.GridLayer = GridLayer;
    exports1.Handler = Handler;
    exports1.Icon = Icon;
    exports1.ImageOverlay = ImageOverlay;
    exports1.LatLng = LatLng;
    exports1.LatLngBounds = LatLngBounds;
    exports1.Layer = Layer;
    exports1.LayerGroup = LayerGroup;
    exports1.LineUtil = LineUtil;
    exports1.Map = Map;
    exports1.Marker = Marker;
    exports1.Mixin = Mixin;
    exports1.Path = Path;
    exports1.Point = Point;
    exports1.PolyUtil = PolyUtil;
    exports1.Polygon = Polygon;
    exports1.Polyline = Polyline;
    exports1.Popup = Popup;
    exports1.PosAnimation = PosAnimation;
    exports1.Projection = index;
    exports1.Rectangle = Rectangle;
    exports1.Renderer = Renderer;
    exports1.SVG = SVG;
    exports1.SVGOverlay = SVGOverlay;
    exports1.TileLayer = TileLayer;
    exports1.Tooltip = Tooltip;
    exports1.Transformation = Transformation;
    exports1.Util = Util;
    exports1.VideoOverlay = VideoOverlay;
    exports1.bind = bind;
    exports1.bounds = toBounds;
    exports1.canvas = canvas;
    exports1.circle = circle;
    exports1.circleMarker = circleMarker;
    exports1.control = control;
    exports1.divIcon = divIcon;
    exports1.extend = extend;
    exports1.featureGroup = featureGroup;
    exports1.geoJSON = geoJSON;
    exports1.geoJson = geoJson;
    exports1.gridLayer = gridLayer;
    exports1.icon = icon;
    exports1.imageOverlay = imageOverlay;
    exports1.latLng = toLatLng;
    exports1.latLngBounds = toLatLngBounds;
    exports1.layerGroup = layerGroup;
    exports1.map = createMap;
    exports1.marker = marker;
    exports1.point = toPoint;
    exports1.polygon = polygon;
    exports1.polyline = polyline;
    exports1.popup = popup;
    exports1.rectangle = rectangle;
    exports1.setOptions = setOptions;
    exports1.stamp = stamp;
    exports1.svg = svg;
    exports1.svgOverlay = svgOverlay;
    exports1.tileLayer = tileLayer;
    exports1.tooltip = tooltip;
    exports1.transformation = toTransformation;
    exports1.version = version;
    exports1.videoOverlay = videoOverlay;
    var oldL = window.L;
    exports1.noConflict = function() {
        window.L = oldL;
        return this;
    };
    // Always export us to window global (see #2364)
    window.L = exports1;
});

},{}]},["4InDC"], "4InDC", "parcelRequire11c7")

//# sourceMappingURL=index.js.map

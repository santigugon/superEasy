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
})({"i5q31":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "25154b9a5c5df29c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"c0kUG":[function(require,module,exports) {
var _helpersJs = require("./helpers.js");
var _rendersJs = require("./renders.js");
let cartProducts;
let superMarkets;
let superMarketProducts;
let productRenderCheck = {
    heb: false,
    walmart: false,
    soriana: false,
    laComer: false,
    ley: false,
    costco: false,
    bodegaAurrera: false,
    sams: false,
    chedrau: false
};
// Query selectors
const column1 = document.querySelector(".column__1");
const productsList1 = document.querySelector(".products__li__1");
const displayCart = function(btn, i, list) {
    superMarketProducts[superMarkets[i]].cartProducts.forEach((product)=>{
        product.cart = true;
    });
    (0, _rendersJs.initialPageValues)(superMarkets[i]);
    productRenderCheck[superMarkets[i]] = true;
    console.log(superMarketProducts[superMarkets[i]].cartProducts);
    (0, _rendersJs.productListRender)(list, superMarketProducts[superMarkets[i]].cartProducts, false);
    let prevPageBtn = document.querySelector(`#${superMarkets[i]}__prev`);
    let btnContainer = document.querySelector(`#${superMarkets[i]}__btn__container`);
    btnContainer.classList.remove("invisible");
    prevPageBtn.classList.add("invisible");
    // column.insertAdjacentHTML("afterbegin", html);
    btn.textContent = "Haz click aqui para ocultar todos los productos";
};
const hideCart = function(btn, i, list) {
    let pageDisp = document.querySelector(`#${superMarkets[i]}__disp`);
    let btnContainer = document.querySelector(`#${superMarkets[i]}__btn__container`);
    btnContainer.classList.add("invisible");
    pageDisp.textContent = `Page 1`;
    console.log("HOLA");
    document.querySelector(`.products__li__${i + 1}`).innerHTML = "";
    productRenderCheck[superMarkets[i]] = false;
    btn.textContent = "Haz click aqui para mostrar todos los productos";
};
const displaySubtotal = function(subTotal, i) {
    let html;
    const column = document.querySelector(`.column__${i + 1}`);
    const products__li = document.querySelector(`.products__li__${i + 1}`);
    const logoSpace = document.querySelector(`.logo__${i + 1}`);
    if (subTotal) {
        html = `
    <div class="subtotal">
    <h4>
    Tu total sera de $${subTotal};
    </h4>
    <button class="product__addbtn btn cartbtn__${i + 1}">	&plus;Haz click aqui para ver todos los productos</button>
    </div>`;
        // const botonProductos = document.querySelector(".cartbtn__1");
        logoSpace.insertAdjacentHTML("beforeend", html);
        let cartbtn = document.querySelector(`.cartbtn__${i + 1}`);
        cartbtn.addEventListener("click", function(e) {
            e.preventDefault();
            console.log(productRenderCheck);
            if (!productRenderCheck[superMarkets[i]]) {
                displayCart(cartbtn, i, products__li);
                console.log("ESTE?>");
            // productRenderCheck[superMarkets[i]] = true;
            // console.log("HOLAAAAAA");
            // productListRender(
            //   products__li,
            //   superMarketProducts[superMarkets[i]].cartProducts
            // );
            // // column.insertAdjacentHTML("afterbegin", html);
            // cartbtn.textContent = "Haz click aqui para ocultar todos los productos";
            } else hideCart(cartbtn, i, products__li);
        });
    }
};
const calculateSubTotal = function() {
    let subTotal = 0;
    for (let [index, superMarket] of superMarkets.entries()){
        // console.log(superMarket);
        // console.log(superMarkets);
        let i = 0;
        for(i; i < superMarketProducts[superMarket].cartProducts.length; i++){
            // console.log(cartProducts[i]);
            // console.log(superMarketProducts[superMarket].cartProducts[i]);
            let prices = (0, _helpersJs.giveActualPrice)(superMarketProducts[superMarket].cartProducts[i]);
            let price = parseFloat(prices);
            let quantity = parseInt(superMarketProducts[superMarket].cartProducts[i]._quantity);
            subTotal += price * quantity;
        }
        displaySubtotal(Math.trunc(subTotal * 1000) / 1000, index);
        subTotal = 0;
    }
    return subTotal;
};
const cartColumnDisplay = function() {
    if (localStorage.getItem("superMarketProducts")) superMarketProducts = JSON.parse(localStorage.getItem("superMarketProducts"));
    console.log(superMarketProducts);
    if (localStorage.getItem("superMarkets")) superMarkets = JSON.parse(localStorage.getItem("superMarkets"));
    let html;
    const container = document.querySelector(".column__container");
    const columnContainer = document.querySelector(".column-container");
    columnContainer.classList.remove("hidden");
    columnContainer.style.gridTemplateColumns = `repeat(${superMarkets.length}, 1fr)`;
    for(let i = 0; i < superMarkets.length; i++){
        html = `<div class="column column__${i + 1}" id="${superMarkets[i]}">
 
    <div class="logo__space logo__${i + 1}">
        <img class=logo__img
          src="./img/${superMarkets[i]}_logo.png"
          alt="${superMarkets[i]}"
          height="80px"
        />
      </div>
      <div class="products__li__${i + 1}" id="${superMarkets[i]}"></div>
      <div class="btn__container" id="${superMarkets[i]}__btn__container">
        <button class="prev__btn btn invisible" id="${superMarkets[i]}__prev">Previous</button>
        <p class="page__display invisible" id="${superMarkets[i]}__disp">Page 1</p>
        <button class="next__btn btn invisible" id="${superMarkets[i]}__next">Next</button>
      </div>
    </div>`;
        container.insertAdjacentHTML("beforeend", html);
    // const botonProductos = document.querySelector(".cartbtn__1");
    // window.addEventListener("click", function (e) {
    //   e.preventDefault();
    //   let products__li = this.document.querySelector(
    //     `.products__li__${i + 1}}`
    //   );
    //   let column = this.document.querySelector(`.column__${i + 1}`);
    //   if (e.target.classList.value.includes(`cartbtn__${i + 1}`)) {
    //     console.log(superMarketProducts[superMarkets[i]].cartProducts);
    //     productListRender(
    //       products__li,
    //       superMarketProducts[superMarkets[i]].cartProducts
    //     );
    //     column.insertAdjacentHTML("afterbegin", html);
    //     e.target.textContent =
    //       "Haz click aqui para ocultar todos los productos";
    //   }
    // });
    }
    calculateSubTotal();
};
cartColumnDisplay(); //CART BUTTON SYSTEM TO ADD OR DECREASE

},{"./helpers.js":"3GrP9","./renders.js":"7Ea56"}],"3GrP9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "giveActualPrice", ()=>giveActualPrice);
parcelHelpers.export(exports, "calculateDiscountPercentage", ()=>calculateDiscountPercentage);
parcelHelpers.export(exports, "removeElementByClassNameAndId", ()=>removeElementByClassNameAndId);
parcelHelpers.export(exports, "removeElementFromArray", ()=>removeElementFromArray);
// incrementButton.addEventListener("click", increment);
// decrementButton.addEventListener("click", decrement);
parcelHelpers.export(exports, "increment", ()=>increment);
parcelHelpers.export(exports, "decrement", ()=>decrement);
parcelHelpers.export(exports, "addOrUpdateProduct", ()=>addOrUpdateProduct);
const giveActualPrice = function(obj) {
    let { price } = obj;
    // console.log(price);
    let prices = price.split("$");
    prices = prices.filter((price)=>price !== "");
    prices = prices.map((price)=>{
        return price.replace(/[^0-9.]/g, "");
    });
    if (prices.length > 1) {
        for(let i = 0; i < prices.length; i++)// console.log(prices[i]);
        if (parseFloat(prices[i - 1]) > parseFloat(prices[i])) {
            prices[i - 1] = prices[i];
            prices[i] = prices[i - 1];
        }
    }
    const uniquePrices = [
        ...new Set(prices)
    ];
    // console.log(parseFloat(prices));
    return uniquePrices;
};
const calculateDiscountPercentage = function(pricesArr) {
    const [price1, price2] = pricesArr;
    // Calculate the percentage discount
    const discountPercentage = Math.round((price1 - price2) / price1 * 100);
    // Calculate the discounted price
    // Return the discounted price and discount percentage as an object
    return discountPercentage;
};
function removeElementByClassNameAndId(className, id) {
    const element = document.querySelector(`.${className}#${id}`);
    if (element) element.parentNode.removeChild(element);
}
function removeElementFromArray(array, elementToRemove) {
    const index = array.indexOf(elementToRemove);
    if (index !== -1) array.splice(index, 1);
}
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
function increment() {
    const quantityElement = document.querySelector(".quantity");
    let currentValue = parseInt(quantityElement.textContent, 10);
    currentValue++;
    quantityElement.textContent = currentValue;
}
function decrement() {
    const quantityElement = document.querySelector(".quantity");
    let currentValue = parseInt(quantityElement.textContent, 10);
    if (currentValue > 1) {
        currentValue--;
        quantityElement.textContent = currentValue;
    }
}
function addOrUpdateProduct(products, newProduct) {
    // Find the index of the existing product in the array, if any
    const productIndex = products.findIndex((product)=>product._id === newProduct._id);
    if (productIndex !== -1) {
        // If the product exists, increment the quantity property
        products[productIndex]._quantity = parseInt(products[productIndex]._quantity) + parseInt(newProduct._quantity);
        console.log(products[productIndex]._quantity);
    } else // If the product does not exist, add it to the array
    products.push(newProduct);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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

},{}],"7Ea56":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initialPageValues", ()=>initialPageValues);
parcelHelpers.export(exports, "productRender", ()=>productRender);
parcelHelpers.export(exports, "productListRender", ()=>productListRender);
parcelHelpers.export(exports, "nextPage", ()=>nextPage);
parcelHelpers.export(exports, "previousPage", ()=>previousPage);
parcelHelpers.export(exports, "gridCreator", ()=>gridCreator);
var _helpersJs = require("./helpers.js");
let pageCount = 1;
let counterOneP = 10;
let counterOneL = 0;
let pageLimit = false;
let pageDispAll = document.querySelectorAll(".page__display");
let brandSetCache;
let productsArrCache;
let caches = {
    heb: {
        brandsSet: [],
        productsArr: []
    },
    soriana: {
        brandsSet: [],
        productsArr: []
    },
    laComer: {
        brandsSet: [],
        productsArr: []
    },
    ley: {
        brandsSet: [],
        productsArr: []
    },
    walmart: {
        brandsSet: [],
        productsArr: []
    },
    sams: {
        brandsSet: [],
        productsArr: []
    },
    costco: {
        brandsSet: [],
        productsArr: []
    },
    chedraui: {
        brandsSet: [],
        productsArr: []
    },
    bodegaAurrera: {
        brandsSet: [],
        productsArr: []
    }
};
let superMarketCharac = {
    heb: {
        pageCount: 1,
        counterP: 10,
        counterL: 0,
        pageLimit: false,
        eventListener: false
    },
    soriana: {
        pageCount: 1,
        counterP: 10,
        counterL: 0,
        pageLimit: false,
        eventListener: false
    },
    walmart: {
        pageCount: 1,
        counterP: 10,
        counterL: 0,
        pageLimit: false,
        eventListener: false
    },
    laComer: {
        pageCount: 1,
        counterP: 10,
        counterL: 0,
        pageLimit: false,
        eventListener: false
    },
    costco: {
        pageCount: 1,
        counterP: 10,
        counterL: 0,
        pageLimit: false,
        eventListener: false
    },
    ley: {
        pageCount: 1,
        counterP: 10,
        counterL: 0,
        pageLimit: false,
        eventListener: false
    },
    bodegaAurrera: {
        pageCount: 1,
        counterP: 10,
        counterL: 0,
        pageLimit: false,
        eventListener: false
    },
    chedraui: {
        pageCount: 1,
        counterP: 10,
        counterL: 0,
        pageLimit: false,
        eventListener: false
    },
    sams: {
        pageCount: 1,
        counterP: 10,
        counterL: 0,
        pageLimit: false,
        eventListener: false
    }
};
const initialPageValues = function(id) {
    superMarketCharac[id].counterP = 10;
    superMarketCharac[id].counterL = 0;
    superMarketCharac[id].pageLimit = false;
    superMarketCharac[id].pageCount = 1;
    console.log("Valores reiniciados");
    console.log(superMarketCharac);
    pageDispAll.textContent = `Page ${superMarketCharac[id].pageLimit.pageCount}`;
};
const productRender = function(container, product, index) {
    // console.log(product);
    let superMarket = container.getAttribute("id");
    let { price } = product;
    let { brand } = product;
    let { imgSrc } = product;
    let { description } = product;
    let { _id } = product;
    let { cart } = product;
    let { _quantity } = product;
    let pricesArr = (0, _helpersJs.giveActualPrice)(product);
    let actualPrice;
    let oldPrice;
    let discountPercentage;
    if (pricesArr.length > 1) {
        actualPrice = pricesArr[0];
        oldPrice = pricesArr[1];
        discountPercentage = (0, _helpersJs.calculateDiscountPercentage)(pricesArr);
    }
    actualPrice = pricesArr[0];
    let html = `      <div class="product__container" id="${_id}">
  <div class="product__img">
  <img src=${imgSrc} alt="" height="100px" >
  </div>
<div class="product__details">
  
  <p class="product__description">${description}</p>
  <p class="product__description">MARCA: ${brand}</p>
  <div class="product__buy">
 `;
    if (!oldPrice) html += `   
    <h4 class="product__price">$${actualPrice}</h4>
    </div>
  `;
    if (oldPrice) html += `<h4 class="product__price"><s>$${oldPrice}</s></h4>
    </div>
    <div class="product__discount">${discountPercentage}% OFF-$${actualPrice}</div>`;
    if (cart) html += ` <div class="quantity__container">
  <button class="quantity__button" id="decrement__${index + 1}">-</button>
  <span class="quantity__${index + 1}">${_quantity}</span>
  <button class="quantity__button" id="increment__${index + 1}">+</button>
</div>
</div>
</div>`;
    if (!cart) html += `
    <div class="quantity-wrapper">
    <div class="quantity__container">
    <button class="quantity__button" id="decrement">-</button>
    <span class="quantity">${_quantity}</span>
    <button class="quantity__button" id="increment">+</button>
    </div>
     <button class="product__addbtn btn" id="${superMarket}">	&plus; Agregar</button>
     </div>
     </div>
</div>`;
    html += `</div>`;
    container.insertAdjacentHTML("beforeend", html);
    const quantityWrapper = document.querySelectorAll(".quantity-wrapper");
};
const productListRender = function(container, productsArr, cache) {
    console.log("EN RENDER LISTA", superMarketCharac);
    const currentFileName = window.location.pathname.split("/").pop();
    container.innerHTML = "";
    console.log(productsArr);
    let superMarket = container.getAttribute("id");
    initialPageValues(superMarket);
    console.log(superMarketCharac[superMarket].eventListener);
    // console.log(superMarketCharac[superMarket].counterL, "AY DIOS MIO");
    let pageDisp = document.querySelector(`#${superMarket}__disp`);
    let nextPageBtn = document.querySelector(`#${superMarket}__next`);
    let prevPageBtn = document.querySelector(`#${superMarket}__prev`);
    let tempCounterL = superMarketCharac[superMarket].counterL;
    let tempCounterP = superMarketCharac[superMarket].counterP;
    let brandsSet = new Set(productsArr.map((product)=>product.brand.toUpperCase()));
    console.log(brandsSet);
    if (!cache) {
        caches[superMarket].productsArr = productsArr;
        caches[superMarket].brandsSet = brandsSet;
    }
    if (currentFileName === "index.html") {
        const dropDownMenu = document.querySelector(`#${superMarket}__dropdown`);
        if (!cache) {
            while(dropDownMenu.firstChild)dropDownMenu.removeChild(dropDownMenu.firstChild);
            let option = document.createElement("option");
            option.value = "todas";
            option.textContent = "TODAS";
            dropDownMenu.appendChild(option);
            // dropDownMenu.innerHTML = `<option value="todas">TODAS</option>;`;
            brandsSet.forEach((brand)=>{
                let option = document.createElement("option");
                option.value = brand.toLowerCase();
                option.textContent = brand;
                if (brand != "") dropDownMenu.appendChild(option);
            //`<option value="${brand.toLowerCase()}">${brand}</option>`
            });
        }
        dropDownMenu.addEventListener("change", function(event) {
            // Get the selected option's value
            const selectedValue = event.target.value;
            if (selectedValue === "todas") {
                console.log(productsArrCache);
                productListRender(container, caches[superMarket].productsArr, true);
                initialPageValues(superMarket);
                return;
            }
            const filteredArr = productsArr.filter((product)=>product.brand.toLowerCase() == selectedValue.toLowerCase());
            initialPageValues(superMarket);
            console.log(filteredArr);
            productListRender(container, filteredArr, true);
        // Perform an action based on the selected value
        });
    }
    for(tempCounterL; tempCounterL < tempCounterP; tempCounterL++){
        if (productsArr.length === tempCounterL) {
            console.log();
            superMarketCharac[superMarket].pageLimit = true;
            break;
        } else superMarketCharac[superMarket].pageLimit = false;
        productRender(container, productsArr[tempCounterL], tempCounterL);
        superMarketCharac[superMarket].counterL = tempCounterL;
    }
    container.addEventListener("click", (event)=>{
        const target = event.target;
        if (target.classList.contains("quantity__container") || target.parentElement.classList.contains("quantity__container")) {
            const quantityContainer = target.closest(".quantity__container");
            const quantityElement = quantityContainer.querySelector(".quantity");
            let currentValue = parseInt(quantityElement.textContent);
            if (target.id === "increment") {
                //const quantityElement = target.closest(".quantity");
                let currentValue = parseInt(quantityElement.textContent);
                currentValue++;
                quantityElement.textContent = "";
                quantityElement.textContent = currentValue;
            // currentValue++;
            } else if (target.id === "decrement") {
                console.log("menos");
                if (currentValue > 1) {
                    currentValue--;
                    quantityElement.textContent = currentValue;
                }
            }
        }
    });
    // DROP DOWN EVENT LISTENER FOR THE SELECTION A BRAND
    // Functions to check whether we have reached the limit of the page and the content should dissapear
    pageDisp.classList.remove("invisible");
    if (superMarketCharac[superMarket].pageLimit) nextPageBtn.classList.add("invisible");
    else nextPageBtn.classList.remove("invisible");
    let btnArr = [
        prevPageBtn,
        pageDisp,
        nextPageBtn
    ];
    // ADDING EVENT LISTENERS FOR THE NEXT AND PREV PAGE EVENTS
    if (!superMarketCharac[superMarket].eventListener) {
        superMarketCharac[superMarket].eventListener = true;
        nextPageBtn.addEventListener("click", function(e) {
            nextPage(container, productsArr, btnArr);
            e.preventDefault();
        });
        prevPageBtn.addEventListener("click", function(e) {
            previousPage(container, productsArr, btnArr);
            e.preventDefault();
        });
    }
    console.log("Caches", caches);
};
const nextPage = function(container, productsArr, btnArr) {
    let superMarket = container.getAttribute("id");
    let prevPageBtn = btnArr[0];
    let pageDisp = btnArr[1];
    let nextPageBtn = btnArr[2];
    console.log(superMarketCharac[superMarket].counterL);
    container.innerHTML = "";
    superMarketCharac[superMarket].counterP += 10;
    superMarketCharac[superMarket].counterL += 1;
    productListRender(container, productsArr, false);
    superMarketCharac[superMarket].pageCount += 1;
    pageDisp.textContent = `Page ${superMarketCharac[superMarket].pageCount}`;
    prevPageBtn.classList.remove("invisible");
};
const previousPage = function(container, productsArr, btnArr) {
    let prevPageBtn = btnArr[0];
    let pageDisp = btnArr[1];
    let nextPageBtn = btnArr[2];
    let superMarket = container.getAttribute("id");
    let tempCounterL = superMarketCharac[superMarket].counterL;
    let tempCounterP = superMarketCharac[superMarket].counterP;
    // container.innerHTML = "";
    superMarketCharac[superMarket].counterL = tempCounterL + (tempCounterP - tempCounterL) - 20;
    superMarketCharac[superMarket].counterP -= 10;
    productListRender(container, productsArr, false);
    superMarketCharac[superMarket].pageCount -= 1;
    pageDisp.textContent = `Page ${superMarketCharac[superMarket].pageCount}`;
    if (superMarketCharac[superMarket].pageCount == 1) {
        prevPageBtn.classList.add("invisible");
        nextPageBtn.classList.remove("invisible");
    }
};
const gridCreator = function(array) {
    let welcomeContainer = document.querySelector(".welcome__container");
    let welcomeBtn = document.querySelector(".welcome__container__btn");
    let welcomeMessage = document.querySelector(".welcome__message");
    welcomeContainer.classList.add("hidden");
    welcomeBtn.classList.add("hidden");
    welcomeMessage.classList.add("hidden");
    let columnContainer = document.querySelector(".column-container");
    columnContainer.classList.remove("hidden");
    const frColumns = array.map(()=>"1fr").join(" ");
    let html = "";
    console.log("length del array ", array.length);
    columnContainer.style.gridTemplateColumns = `repeat(${array.length},1fr)`;
    array.forEach((superMarket, index)=>{
        console.log();
        html += `<div class="column column__${index + 1} " id="${superMarket}">
    <div class="logo__space">
    <img
    class="logo__img"
   src="./img/${superMarket}_logo.png"
    alt="${superMarket}"
  />
    </div>
   
  <div class="dropdown__container">
  <label for="brands" class="dropdown__marcas">Elige tu marca!:</label>
  
  <select name="brands" id="${superMarket}__dropdown">
  
 

 </select>
  </div>
    <div class="products__li__${index + 1} products__list"id="${superMarket}">

      <!-- <div class="product__container">
       <img src="https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750104000583L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" alt="" height="100px" class="product__image">
      <div class="product__details">
        
        <p class="product__description">Jamon de pavo FUD virginia 290 g</p>
        <p class="product__description">MARCA: FUD</p>
        <div class="product__buy">
          
          <h4 class="product__price">$42.00</h4>
          <button class="product__addbtn">	&plus;Agregar</button>
        </div>
      </div> 

    </div>  -->
    </div>
    <div class="btn__container">
      <button class="prev__btn btn invisible" id="${superMarket}__prev">Previous</button>
      <p class="page__display invisible" id="${superMarket}__disp">Page 1</p>
      <button class="next__btn btn invisible" id="${superMarket}__next">Next</button>
    </div>
  </div>`;
    });
    columnContainer.insertAdjacentHTML("afterbegin", html);
};

},{"./helpers.js":"3GrP9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["i5q31","c0kUG"], "c0kUG", "parcelRequireb2eb")

//# sourceMappingURL=cart.5c5df29c.js.map

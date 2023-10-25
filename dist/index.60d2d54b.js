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
})({"kzU9z":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "522f259660d2d54b";
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

},{}],"5OkMX":[function(require,module,exports) {
// import { searchBar, searchResults } from "./searchFunctions.js";
// import { scrapeProduct } from "./scrapeTest.js";
var _animationsJs = require("./animations.js");
var _productClassJs = require("./productClass.js");
var _rendersJs = require("./renders.js");
var _helpersJs = require("./helpers.js");
// import { cartColumnDisplay } from "./cartSystem.js";
// QUERY SELECTORS
// const columnOne = document.querySelector(".column__1");
// const productListOne = document.querySelector(".products__li__1");
const btnPrueba = document.querySelector(".prueba");
const nextPageBtn = document.querySelector(".next__btn");
const prevPageBtn = document.querySelector(".prev__btn");
const searchInput = document.querySelector(".search__field");
const searchForm = document.querySelector(".search");
const cartBtn = document.querySelector(".cartbtn");
const superMarketGrid = document.querySelector(".welcome__supermarket__container");
const welcomeBtn = document.querySelector(".welcome__container__btn");
// VARIABLES
let products = [];
let pageLimit;
// let cartProducts = [];
let superMarkets = [];
let superMarketProducts = {
    heb: {
        products: [],
        cartProducts: []
    },
    soriana: {
        products: [],
        cartProducts: []
    },
    walmart: {
        products: [],
        cartProducts: []
    },
    laComer: {
        products: [],
        cartProducts: []
    },
    costco: {
        products: [],
        cartProducts: []
    },
    ley: {
        products: [],
        cartProducts: []
    },
    bodegaAurrera: {
        products: [],
        cartProducts: []
    },
    chedraui: {
        products: [],
        cartProducts: []
    },
    sams: {
        products: [],
        cartProducts: []
    }
};
(0, _rendersJs.initialPageValues)("walmart");
superMarkets.forEach((spr)=>(0, _rendersJs.initialPageValues)(spr));
const src = {
    heb: "https://1000marcas.net/wp-content/uploads/2022/04/HEB-Logo.png",
    soriana: "https://upload.wikimedia.org/wikipedia/commons/6/61/LogoSorianaSVG.svg",
    bodegaAurrera: "data:image/png;base64,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",
    laComer: "http://bamf.com.mx/wp/wp-content/uploads/2016/05/nuevo-logotipo-la-comer-dos.jpg",
    walmart: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sam%27s_Club_Logo_2020.svg/2560px-Sam%27s_Club_Logo_2020.svg.png",
    costco: "https://logodownload.org/wp-content/uploads/2021/04/costco-wholesale-logo.png",
    chedraui: "https://seeklogo.com/images/C/Casa_Ley-logo-A556B3EF68-seeklogo.com.png"
};
// Event Listeners
welcomeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let searchField = document.querySelector(".search__field");
    let cartBtn = document.querySelector(".cartbtn");
    searchField.classList.toggle("hidden");
    cartBtn.classList.toggle("hidden");
    (0, _rendersJs.gridCreator)(superMarkets);
});
(0, _animationsJs.carrouselSlider)();
(0, _animationsJs.headerSlider)();
const jamon = new (0, _productClassJs.Product)(42.0, "FUD", "Jamon de pavo FUD virginia 290 g", "https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750104000583L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF");
superMarketGrid.addEventListener("click", function(e) {
    e.preventDefault();
    // console.log(e.target.parentElement.classList.value);
    if (e.target.parentElement.classList.value.includes("supermarket__logo__container")) {
        // console.log(e.target);
        let selected = document.querySelector(`.${e.target.classList.value}`);
        if (selected) {
            let superMarket = e.target.getAttribute("alt");
            let selectedId = document.querySelector(`#${superMarket}`);
            let selectedDiv = document.querySelector(`#${superMarket}__div`);
            selectedId.classList.toggle("notselected");
            selectedDiv.classList.toggle("supermarket__selected");
            if (!superMarkets.includes(superMarket) && superMarkets.length < 4) superMarkets.push(superMarket);
            else (0, _helpersJs.removeElementFromArray)(superMarkets, superMarket);
        }
    }
});
//We start by adding the event listener for the search bar
// SEARCHBARFUNCTIONS
// EVENTLISTENERS
// cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
searchForm.addEventListener("submit", function(e) {
    products = [];
    // window.location.href = "index.html";
    e.preventDefault();
    e.stopPropagation(); // Add this line to stop event propagation
    let trimmedSearch = searchInput.value.replace(/^[+\s+]+/, "");
    trimmedSearch = trimmedSearch.replace(/[+\s+]$/, "");
    console.log(trimmedSearch);
    let searchValue = trimmedSearch.replaceAll(" ", "+");
    searchResults(searchValue);
    searchInput.value = "";
    console.log(searchValue);
});
// Event listener for adding products to the cart
window.addEventListener("click", function(e) {
    e.preventDefault();
    // console.log(e.target);
    if (e.target.classList.value === "product__addbtn btn") {
        let productId = e.target.parentElement.parentElement.parentElement.getAttribute("id");
        let superMarket = e.target.getAttribute("id");
        console.log(productId, superMarket);
        let product = superMarketProducts[superMarket].products.find((prod)=>prod._id == productId);
        console.log(e.target);
        const quantityWrapper = e.target.closest(".quantity-wrapper");
        const quantityContainer = quantityWrapper.querySelector(".quantity__container");
        const quantityElement = quantityContainer.querySelector(".quantity");
        product._quantity = quantityElement.textContent;
        // superMarketProducts[superMarket].cartProducts.forEach(product=>{
        //   product._id==
        // })
        (0, _helpersJs.addOrUpdateProduct)(superMarketProducts[superMarket].cartProducts, product);
        // superMarketProducts[superMarket].cartProducts.push(product);
        console.log(superMarketProducts);
    }
});
//THE AJAX CALL TO RETRIEVE THE PRODUCTS FROM MY API
let searchResults = async function(searchWord) {
    try {
        for(let i = 0; i < superMarkets.length; i++){
            let response = await fetch(`http://127.0.0.1:3000/${superMarkets[i]}/${searchWord}`);
            let json = await response.json();
            json.forEach((product)=>product._quantity = "1");
            products.push(json);
            superMarketProducts[superMarkets[i]].products = json;
            // productListOne.innerHTML = "";
            console.log(products);
            (0, _rendersJs.initialPageValues)(superMarkets[i]);
            console.log("Debemos reiniciar ", superMarkets[i]);
            let productList = document.querySelector(`.products__li__${i + 1}`);
            (0, _rendersJs.productListRender)(productList, products[i], false);
            console.log(products);
            console.log(superMarketProducts);
        }
    } catch (err) {
        console.error(err);
    }
};
class App {
    constructor(){}
    setEventListeners() {}
}
cartBtn.addEventListener("click", function() {
    window.location.href = "cart.html";
    localStorage.setItem("superMarketProducts", JSON.stringify(superMarketProducts));
    localStorage.setItem("superMarkets", JSON.stringify(superMarkets));
}); // products = [
 //   {
 //     price: "$238.00",
 //     brand: "BACARDI",
 //     description: "Ron Carta Blanca 750 ml",
 //     imgSrc:
 //       "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/7/5/7501008660195_1-1_small.jpg",
 //   },
 //   {
 //     price: "$263.00",
 //     brand: "BACARDI",
 //     description: "Ron Raspberry 750 ml",
 //     imgSrc:
 //       "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/7/5/7501008645246_1-1_small.jpg",
 //   },
 //   {
 //     price: "$292.00",
 //     brand: "BACARDI",
 //     description: "Ron Carta Blanca 980 ml",
 //     imgSrc:
 //       "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/7/5/7501008660201_1-1_small.jpg",
 //   },
 //   {
 //     price: "$263.00",
 //     brand: "BACARDI",
 //     description: "Ron Limón 750 ml",
 //     imgSrc:
 //       "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/7/5/7501008616130_1-1_small.jpg",
 //   },
 //   {
 //     price: "$204.00",
 //     brand: "BACARDI",
 //     description: "Ron Spiced 750 ml",
 //     imgSrc:
 //       "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/4/0/403904_small.jpg",
 //   },
 //   {
 //     price: "$293.00",
 //     brand: "BACARDI",
 //     description: "Ron Añejo 980 ml",
 //     imgSrc:
 //       "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/1/3/138237_small.jpg",
 //   },
 //   {
 //     price: "$477.00",
 //     brand: "BACARDI",
 //     description: "Ron Carta Blanca 1.75 lt",
 //     imgSrc:
 //       "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/7/5/7501008660218_1-1_small.jpg",
 //   },
 //   {
 //     price: "$263.00",
 //     brand: "BACARDI",
 //     description: "Ron Mango Chile 750 ml",
 //     imgSrc:
 //       "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/8/1/814184_small.png",
 //   },
 // ];

},{"./animations.js":"8OJE4","./productClass.js":"imy7r","./renders.js":"7Ea56","./helpers.js":"3GrP9"}],"8OJE4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "headerSlider", ()=>headerSlider);
parcelHelpers.export(exports, "mouseSlide", ()=>mouseSlide);
parcelHelpers.export(exports, "carrouselSlider", ()=>carrouselSlider);
function headerSlider() {
    // HEADER SIDES VARIABLES
    const left = document.getElementById("left-side");
    const initialSideTopDistance = left.getBoundingClientRect().top;
    const trackMessage = document.querySelector(".track__message");
    const webNameImage = document.querySelector(".webname__img");
    //POINTER VARIABLES
    const pointerContainer = document.querySelector(".relative__container");
    const pointerIcon = document.querySelector(".icon");
    const initialPointerTopDistance = pointerContainer.getBoundingClientRect().top;
    window.onscroll = (e)=>{
        //SIDES SLIDER
        const sideTopDistance = left.getBoundingClientRect().top;
        let width = sideTopDistance / initialSideTopDistance * 100;
        width = Math.max(width, 10);
        left.style.width = `${width < 15 ? width - 10 : width}%`;
        if (width - 10 == 0) {
            trackMessage.classList.remove("hidden");
            trackMessage.classList.add("fade__down");
            webNameImage.classList.remove("hidden");
            webNameImage.classList.add("fade__down");
        }
        const pointerTopDistance = pointerContainer.getBoundingClientRect().top;
        //POINTER SIDE ANIMATION
        let percentage = pointerTopDistance / initialPointerTopDistance * 100;
        percentage = Math.max(percentage, 10);
        percentage = Math.min(percentage, 100);
        if (percentage < 95) {
            if (pointerIcon.firstElementChild.classList.contains("fa-arrow-pointer")) {
                pointerIcon.firstElementChild.classList.toggle("fa-arrow-pointer");
                pointerIcon.firstElementChild.classList.toggle("fa-hand-pointer");
            }
        } else if (pointerIcon.firstElementChild.classList.contains("fa-hand-pointer")) {
            pointerIcon.firstElementChild.classList.toggle("fa-arrow-pointer");
            pointerIcon.firstElementChild.classList.toggle("fa-hand-pointer");
        }
        // Animacion del mouse hacia la izquierda
        pointerIcon.animate({
            transform: `translateX(${percentage}%)`
        }, {
            duration: 1200,
            fill: "forwards"
        });
    };
}
function mouseSlide() {
    window.onscroll = (e)=>{};
}
function carrouselSlider() {
    const carrouselContainer = document.querySelector(".welcome__carrousel");
    const track = document.getElementById("image-track");
    window.onmousedown = (e)=>{
        track.dataset.mouseDownAt = e.clientX;
    };
    window.onmouseup = (e)=>{
        track.dataset.mouseDownAt = "0";
        if (e.target == carrouselContainer || carrouselContainer.contains(e.target)) track.dataset.prevPercentage = track.dataset.percentage;
    };
    window.onmousemove = (e)=>{
        if (track.dataset.mouseDownAt === "0") return;
        if (e.target == carrouselContainer || carrouselContainer.contains(e.target)) {
            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, maxDelta = window.innerWidth / 2;
            const percentage = mouseDelta / maxDelta * -100;
            let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
            nextPercentage = Math.min(nextPercentage, 0);
            nextPercentage = Math.max(nextPercentage, -100);
            track.dataset.percentage = nextPercentage;
            track.animate({
                transform: `translate(${nextPercentage}%,-50%)`
            }, {
                duration: 1200,
                fill: "forwards"
            });
            for (const image of track.getElementsByClassName("img"))image.animate({
                objectPosition: `${nextPercentage * -1}% center`
            }, {
                duration: 1200,
                fill: "forwards"
            });
        }
    };
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

},{}],"imy7r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Product", ()=>Product);
class Product {
    constructor(price, brand, description, imgSrc){
        this.price = price;
        this.brand = brand;
        this.description = description;
        this.imgSrc = imgSrc;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Ea56":[function(require,module,exports) {
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
    let brandsSet = new Set(productsArr.map((product)=>{
        if (product.brand) product.brand.toUpperCase();
    }));
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

},{"./helpers.js":"3GrP9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3GrP9":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kzU9z","5OkMX"], "5OkMX", "parcelRequireb2eb")

//# sourceMappingURL=index.60d2d54b.js.map

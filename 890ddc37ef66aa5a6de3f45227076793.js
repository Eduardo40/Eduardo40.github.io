// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      function localRequire(x) {
        return newRequire(localRequire.resolve(x));
      }

      localRequire.resolve = function (x) {
        return modules[name][1][x] || x;
      };

      var module = cache[name] = new newRequire.Module;
      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({21:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const s=exports.help={resize:function(s,e,t,d){s.innerWidth<=768?(e.classList.add("hidden"),d.classList.remove("hidden"),t.classList.remove("hidden")):s.innerWidth>=768&&(t.classList.add("hidden"),d.classList.add("hideDropdown"),d.classList.add("hidden"),e.classList.remove("hidden"))},getUserInfo:async function(s){try{const e=await fetch("https://api.github.com/users/Eduardo40/repos");return s(null,await e.json())}catch(e){return s(e,null)}}};
},{}],19:[function(require,module,exports) {
var global = (1,eval)("this");
function e(e=0,n){n.preventDefault(),window.scroll({top:e,behavior:"smooth"})}var n=(0,eval)("this"),t=require("./helper.js");const o=document.querySelector("body .dropdown-nav"),i=document.querySelector(".main-nav"),r=document.querySelector(".control"),d=document.querySelector(".dropdown-nav ul"),l=document.querySelectorAll(".nav-link");n.addEventListener("DOMContentLoaded",t.help.resize.bind(void 0,window,i,r,o)),n.addEventListener("resize",t.help.resize.bind(void 0,window,i,r,o)),r.addEventListener("click",function(){Array.from(o.classList);l.forEach(e=>{e.classList.toggle("hidden")}),d.classList.toggle("showDropDown"),d.classList.toggle("hideDropDown"),o.classList.toggle("showDropDown"),o.classList.toggle("hideDropDown")});const c=document.querySelector("#project-list");t.help.getUserInfo(function(e,n){e||n.forEach(e=>{const n=document.createElement("div");n.setAttribute("class","project"),n.innerHTML=`\n    <h3><a target="_blank" href="${e.html_url}">${e.name}</a></h3>\n    <p>${e.description}</p>\n    <br />\n    <a target="_blank" class='gray' href="${e.html_url}">See Code on <i class="fa fa-github fa-2x"></i></a>\n    ${e.homepage?"<br /><a class=\"gold\" target='_blank' href="+`${e.homepage}`+">See Live</a>":""}\n  `,c.appendChild(n)})});const a=document.querySelectorAll('a[href="#top"]'),s=document.querySelectorAll('a[href="#skills"]'),h=document.querySelectorAll('a[href="#projects"]'),u=document.querySelectorAll('a[href="#contact"]');a[0].addEventListener("click",e.bind(void 0,0)),a[1].addEventListener("click",e.bind(void 0,0)),s[0].addEventListener("click",e.bind(void 0,730)),s[1].addEventListener("click",e.bind(void 0,650)),h[0].addEventListener("click",e.bind(void 0,1300)),h[1].addEventListener("click",e.bind(void 0,2150)),u[0].addEventListener("click",e.bind(void 0,500*window.innerHeight)),u[1].addEventListener("click",e.bind(void 0,500*window.innerHeight));
},{"./helper.js":21}]},{},[19])
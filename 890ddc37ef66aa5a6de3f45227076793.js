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
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
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
})({23:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=exports.help={resize:function(e,s,t,d){e.innerWidth<=768?(s.classList.add("hidden"),d.classList.remove("hidden"),t.classList.remove("hidden")):e.innerWidth>=768&&(t.classList.add("hidden"),d.classList.add("hideDropdown"),d.classList.add("hidden"),s.classList.remove("hidden"))},getGitHubRepo:async function(e){try{const s=await fetch("https://api.github.com/users/Eduardo40/repos");return e(null,await s.json())}catch(s){return e(s,null)}}};
},{}],20:[function(require,module,exports) {
var global = (1,eval)("this");
var e=(0,eval)("this"),t=require("./helper");const n=document.querySelector("body .dropdown-nav"),o=document.querySelector(".main-nav"),r=document.querySelector(".control"),i=document.querySelector(".dropdown-nav ul"),c=document.querySelectorAll(".nav-link");e.addEventListener("DOMContentLoaded",t.help.resize.bind(void 0,window,o,r,n)),e.addEventListener("resize",t.help.resize.bind(void 0,window,o,r,n)),r.addEventListener("click",function(){Array.from(n.classList);c.forEach(e=>{e.classList.toggle("hidden")}),i.classList.toggle("showDropDown"),i.classList.toggle("hideDropDown"),n.classList.toggle("showDropDown"),n.classList.toggle("hideDropDown")});const l=document.querySelector("#project-list");t.help.getGitHubRepo(function(e,t){e||t.forEach(e=>{const t=document.createElement("div");t.setAttribute("class","project"),t.innerHTML=`\n    <h3><a target="_blank" href="${e.html_url}">${e.name}</a></h3>\n    <p>${e.description}</p>\n    <br />\n    <a target="_blank" class='gray' href="${e.html_url}">See Code on <i class="fa fa-github fa-2x"></i></a>\n    ${e.homepage?"<br /><a class=\"gold\" target='_blank' href="+`${e.homepage}`+">See Live</a>":""}\n  `,l.appendChild(t)})});const d=document.querySelectorAll('a[href="#top"]'),a=document.querySelectorAll('a[href="#skills"]'),s=document.querySelectorAll('a[href="#projects"]'),u=document.querySelectorAll('a[href="#contact"]');d[0].addEventListener("click",v.bind(void 0,"#top")),d[1].addEventListener("click",v.bind(void 0,"#top")),a[0].addEventListener("click",v.bind(void 0,"#skills")),a[1].addEventListener("click",v.bind(void 0,"#skills")),s[0].addEventListener("click",v.bind(void 0,"#projects")),s[1].addEventListener("click",v.bind(void 0,"#projects")),u[0].addEventListener("click",v.bind(void 0,"#contact")),u[1].addEventListener("click",v.bind(void 0,"#contact"));function v(e,t){t.preventDefault(),document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}
},{"./helper":23}]},{},[20])
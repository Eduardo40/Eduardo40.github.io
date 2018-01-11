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
})({14:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=exports.help={resize:function(e,s,t,d){e.innerWidth<=768?(s.classList.add("hidden"),d.classList.remove("hidden"),t.classList.remove("hidden")):e.innerWidth>=768&&(t.classList.add("hidden"),d.classList.add("hideDropdown"),d.classList.add("hidden"),s.classList.remove("hidden"))},getGitHubRepo:async function(e){try{const s=await fetch("https://api.github.com/users/Eduardo40/repos");return e(null,await s.json())}catch(s){return e(s,null)}}};
},{}],13:[function(require,module,exports) {
!function(){"use strict";function o(){function o(o,t){this.scrollLeft=o,this.scrollTop=t}function e(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function r(o,t){return"Y"===t?o.clientHeight+p<o.scrollHeight:"X"===t?o.clientWidth+p<o.scrollWidth:void 0}function i(o,l){var e=t.getComputedStyle(o,null)["overflow"+l];return"auto"===e||"scroll"===e}function s(o){var t=r(o,"Y")&&i(o,"Y"),l=r(o,"X")&&i(o,"X");return t||l}function c(o){var l,e,r,i=(d()-o.startTime)/a;s=i=i>1?1:i,l=.5*(1-Math.cos(Math.PI*s)),e=o.startX+(o.x-o.startX)*l,r=o.startY+(o.y-o.startY)*l,o.method.call(o.scrollable,e,r),e===o.x&&r===o.y||t.requestAnimationFrame(c.bind(t,o));var s}function n(e,r,i){var s,n,f,a,p=d();e===l.body?(s=t,n=t.scrollX||t.pageXOffset,f=t.scrollY||t.pageYOffset,a=v.scroll):(s=e,n=e.scrollLeft,f=e.scrollTop,a=o),c({scrollable:s,method:a,startTime:p,startX:n,startY:f,x:r,y:i})}if(!("scrollBehavior"in l.documentElement.style&&!0!==t.__forceSmoothScrollPolyfill__)){var f=t.HTMLElement||t.Element,a=468,p=(h=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(h)?1:0),v={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:f.prototype.scroll||o,scrollIntoView:f.prototype.scrollIntoView},d=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now;t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==e(arguments[0])?n.call(t,l.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):v.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(e(arguments[0])?v.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):n.call(t,l.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},f.prototype.scroll=f.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==e(arguments[0])){var o=arguments[0].left,t=arguments[0].top;n.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value couldn't be converted");v.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},f.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==e(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):v.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},f.prototype.scrollIntoView=function(){if(!0!==e(arguments[0])){var o=function(o){var t;do{t=(o=o.parentNode)===l.body}while(!1===t&&!1===s(o));return t=null,o}(this),r=o.getBoundingClientRect(),i=this.getBoundingClientRect();o!==l.body?(n.call(this,o,o.scrollLeft+i.left-r.left,o.scrollTop+i.top-r.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):t.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else v.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}var h}var t=window,l=document;"object"==typeof exports?module.exports={polyfill:o}:o()}();
},{}],10:[function(require,module,exports) {
var global = (1,eval)("this");
var e=(0,eval)("this"),t=require("./helper");window.__forceSmoothScrollPolyfill__=!0,require("./smoothscroll.min.js").Polyfill();const o=document.querySelector("body .dropdown-nav"),n=document.querySelector(".main-nav"),r=document.querySelector(".control"),l=document.querySelector(".dropdown-nav ul"),i=document.querySelectorAll(".nav-link");e.addEventListener("DOMContentLoaded",t.help.resize.bind(void 0,window,n,r,o)),e.addEventListener("resize",t.help.resize.bind(void 0,window,n,r,o)),r.addEventListener("click",function(){Array.from(o.classList);i.forEach(e=>{e.classList.toggle("hidden")}),l.classList.toggle("showDropDown"),l.classList.toggle("hideDropDown"),o.classList.toggle("showDropDown"),o.classList.toggle("hideDropDown")});const c=document.querySelector("#project-list");t.help.getGitHubRepo(function(e,t){e||t.forEach(e=>{const t=document.createElement("div");t.setAttribute("class","project"),t.innerHTML=`\n    <h3><a target="_blank" href="${e.html_url}">${e.name}</a></h3>\n    <p>${e.description}</p>\n    <br />\n    <a target="_blank" class='gray' href="${e.html_url}">See Code on <i class="fa fa-github fa-2x"></i></a>\n    ${e.homepage?"<br /><a class=\"gold\" target='_blank' href="+`${e.homepage}`+">See Live</a>":""}\n  `,c.appendChild(t)})});const d=document.querySelectorAll('a[href="#top"]'),s=document.querySelectorAll('a[href="#skills"]'),a=document.querySelectorAll('a[href="#projects"]'),u=document.querySelectorAll('a[href="#contact"]');d[0].addEventListener("click",h.bind(void 0,"#top")),d[1].addEventListener("click",h.bind(void 0,"#top")),s[0].addEventListener("click",h.bind(void 0,"#skills")),s[1].addEventListener("click",h.bind(void 0,"#skills")),a[0].addEventListener("click",h.bind(void 0,"#projects")),a[1].addEventListener("click",h.bind(void 0,"#projects")),u[0].addEventListener("click",h.bind(void 0,"#contact")),u[1].addEventListener("click",h.bind(void 0,"#contact"));function h(e,t){t.preventDefault(),document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}
},{"./helper":14,"./smoothscroll.min.js":13}]},{},[10])
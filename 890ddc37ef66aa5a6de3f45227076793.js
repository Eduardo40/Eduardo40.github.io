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
})({24:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=exports.help={resize:function(e,s,t,d){e.innerWidth<=768?(s.classList.add("hidden"),d.classList.remove("hidden"),t.classList.remove("hidden")):e.innerWidth>=768&&(t.classList.add("hidden"),d.classList.add("hideDropdown"),d.classList.add("hidden"),s.classList.remove("hidden"))},getGitHubRepo:async function(e){try{const s=await fetch("https://api.github.com/users/Eduardo40/repos");return e(null,await s.json())}catch(s){return e(s,null)}}};
},{}],21:[function(require,module,exports) {
!function(){"use strict";var o=window,t=document;function l(){if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0),s={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},c=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now;o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):s.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?s.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value couldn't be converted");s.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):s.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){var l;do{l=(o=o.parentNode)===t.body}while(!1===l&&!1===d(o));return l=null,o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else s.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function a(o,t){return"Y"===t?o.clientHeight+i<o.scrollHeight:"X"===t?o.clientWidth+i<o.scrollWidth:void 0}function p(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(o){var t=a(o,"Y")&&p(o,"Y"),l=a(o,"X")&&p(o,"X");return t||l}function v(t){var l,e,i,s=(c()-t.startTime)/r;n=s=s>1?1:s,l=.5*(1-Math.cos(Math.PI*n));var n;e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(v.bind(o,t))}function h(l,e,r){var i,f,a,p,d=c();l===t.body?(i=o,f=o.scrollX||o.pageXOffset,a=o.scrollY||o.pageYOffset,p=s.scroll):(i=l,f=l.scrollLeft,a=l.scrollTop,p=n),v({scrollable:i,method:p,startTime:d,startX:f,startY:a,x:e,y:r})}}"object"==typeof exports?module.exports={polyfill:l}:l()}();
},{}],18:[function(require,module,exports) {
var global = (1,eval)("this");
var e=(0,eval)("this"),t=require("./helper");require("./smoothscroll.js").polyfill(),window.__forceSmoothScrollPolyfill__=!0;const o=document.querySelector("body .dropdown-nav"),n=document.querySelector(".main-nav"),r=document.querySelector(".control"),l=document.querySelector(".dropdown-nav ul"),i=document.querySelectorAll(".nav-link");e.addEventListener("DOMContentLoaded",t.help.resize.bind(void 0,window,n,r,o)),e.addEventListener("resize",t.help.resize.bind(void 0,window,n,r,o)),r.addEventListener("click",function(){Array.from(o.classList);i.forEach(e=>{e.classList.toggle("hidden")}),l.classList.toggle("showDropDown"),l.classList.toggle("hideDropDown"),o.classList.toggle("showDropDown"),o.classList.toggle("hideDropDown")});const c=document.querySelector("#project-list");t.help.getGitHubRepo(function(e,t){e||t.forEach(e=>{const t=document.createElement("div");t.setAttribute("class","project"),t.innerHTML=`\n    <h3><a target="_blank" href="${e.html_url}">${e.name}</a></h3>\n    <p>${e.description}</p>\n    <br />\n    <a target="_blank" class='gray' href="${e.html_url}">See Code on <i class="fa fa-github fa-2x"></i></a>\n    ${e.homepage?"<br /><a class=\"gold\" target='_blank' href="+`${e.homepage}`+">See Live</a>":""}\n  `,c.appendChild(t)})});const d=document.querySelectorAll('a[href="#top"]'),s=document.querySelectorAll('a[href="#skills"]'),a=document.querySelectorAll('a[href="#projects"]'),u=document.querySelectorAll('a[href="#contact"]');d[0].addEventListener("click",h.bind(void 0,"#top")),d[1].addEventListener("click",h.bind(void 0,"#top")),s[0].addEventListener("click",h.bind(void 0,"#skills")),s[1].addEventListener("click",h.bind(void 0,"#skills")),a[0].addEventListener("click",h.bind(void 0,"#projects")),a[1].addEventListener("click",h.bind(void 0,"#projects")),u[0].addEventListener("click",h.bind(void 0,"#contact")),u[1].addEventListener("click",h.bind(void 0,"#contact"));function h(e,t){t.preventDefault(),document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}
},{"./helper":24,"./smoothscroll.js":21}]},{},[18])
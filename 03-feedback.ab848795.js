function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},r=t.parcelRequire4c75;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequire4c75=r);var n=r("kEUo3");const l=document.querySelector(".feedback-form"),s=document.querySelector('[name="email"]'),i=document.querySelector('[name="message"]');let u=JSON.parse(localStorage.getItem("feedback-form-state"));l.addEventListener("submit",(function(e){e.preventDefault(),u&&u.email&&u.message&&(console.log(u),localStorage.removeItem("feedback-form-state"),l.reset(),u=null)})),l.addEventListener("input",e(n).throttle((function(){const e=s.value,t=i.value,o={email:e,message:t};localStorage.setItem("feedback-form-state",JSON.stringify(o))}),500)),u&&u.email&&(s.value=u.email),u&&u.message&&(i.value=u.message);
//# sourceMappingURL=03-feedback.ab848795.js.map

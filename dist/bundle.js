!function r(e,t,n){function o(u,f){if(!t[u]){if(!e[u]){var c="function"==typeof require&&require;if(!f&&c)return c(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var l=t[u]={exports:{}};e[u][0].call(l.exports,function(r){var t=e[u][1][r];return o(t?t:r)},l,l.exports,r,e,t,n)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<n.length;u++)o(n[u]);return o}({1:[function(r,e,t){"use strict";function n(r){return"hello from "+r}t.sayHello=n},{}],2:[function(r,e,t){"use strict";function n(r,e){var t=document.getElementById(r);t.innerText=o.sayHello(e)}var o=r("./greet");n("greeting","TypeScript322")},{"./greet":1}]},{},[2]);
//# sourceMappingURL=bundle.js.map
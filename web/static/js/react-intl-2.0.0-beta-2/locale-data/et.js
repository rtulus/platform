(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.ReactIntlLocaleData || (g.ReactIntlLocaleData = {})).et = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[{locale:"et",pluralRuleFunction:function(e,t){var a=String(e).split("."),s=!a[1];return t?"other":1==e&&s?"one":"other"},fields:{year:{displayName:"aasta",relative:{0:"käesolev aasta",1:"järgmine aasta","-1":"eelmine aasta"},relativeTime:{future:{one:"{0} aasta pärast",other:"{0} aasta pärast"},past:{one:"{0} aasta eest",other:"{0} aasta eest"}}},month:{displayName:"kuu",relative:{0:"käesolev kuu",1:"järgmine kuu","-1":"eelmine kuu"},relativeTime:{future:{one:"{0} kuu pärast",other:"{0} kuu pärast"},past:{one:"{0} kuu eest",other:"{0} kuu eest"}}},day:{displayName:"päev",relative:{0:"täna",1:"homme",2:"ülehomme","-1":"eile","-2":"üleeile"},relativeTime:{future:{one:"{0} päeva pärast",other:"{0} päeva pärast"},past:{one:"{0} päeva eest",other:"{0} päeva eest"}}},hour:{displayName:"tund",relativeTime:{future:{one:"{0} tunni pärast",other:"{0} tunni pärast"},past:{one:"{0} tunni eest",other:"{0} tunni eest"}}},minute:{displayName:"minut",relativeTime:{future:{one:"{0} minuti pärast",other:"{0} minuti pärast"},past:{one:"{0} minuti eest",other:"{0} minuti eest"}}},second:{displayName:"sekund",relative:{0:"nüüd"},relativeTime:{future:{one:"{0} sekundi pärast",other:"{0} sekundi pärast"},past:{one:"{0} sekundi eest",other:"{0} sekundi eest"}}}}},{locale:"et-EE",parentLocale:"et"}];
},{}]},{},[1])(1)
});
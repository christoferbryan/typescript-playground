"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_js_1 = require("./functions.js");
console.log((0, functions_js_1.rectangle)(5, 4));
console.log((0, functions_js_1.circle)(5));
console.log((0, functions_js_1.triangle)(85, 60));
var date1 = new Date('2023-03-19');
var date2 = new Date('2023-03-21');
console.log((0, functions_js_1.dateDiff)(date1, date2));
var fullName = 'John Doe';
console.log((0, functions_js_1.initials)(fullName));
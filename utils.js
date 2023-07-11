"use strict";
/**
 * @returns ture if the input string is a palindrome
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
exports.isPalindrome = isPalindrome;
var utils_1 = require("./utils");
console.log((0, utils_1.isPalindrome)('madam'));
console.log((0, utils_1.isPalindrome)('madan'));

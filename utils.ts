/**
 * @returns ture if the input string is a palindrome
 */

export function isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
}
import {isPalindrome} from './utils';

console.log(isPalindrome('madam'))
console.log(isPalindrome('madan'))

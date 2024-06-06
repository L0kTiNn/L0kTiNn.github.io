import { fib } from "../labj3/lab3_1";

/**
 * counts decrimal part of number
 * @param {number} num 
 * @returns {number}
 */
export function getDecimal(num){
    let cringe = num - Math.floor(num)
    return cringe ? Number(cringe.toFixed(num.toString().split('.').pop().length)) : 0}


/**
 * normalizes url
 * @param {string} url in a form of 'address' or 'http://address' or 'https://address'
 * @returns {string} 'https://address'
 */
export function normalizeUrl(url){
    const f = /http:\/\/|https:\/\//.test(url)
    if (f) return url.replace('http://', 'https://')
    return "https://"+url
}


/**
 * checks if str contains 'viagra' or 'XXX'
 * @param {string} str 
 * @returns {boolean}
 */
export function checkSpam(str){
    let lowStr = str.toLowerCase()
    return /xxx|viagra/.test(lowStr)
}


/**
 * if str doesnt fit into max length cuts it off and puts … in the end
 * @param {string} str 
 * @param {number} maxlength 
 * @returns {string}
 */
export function truncate(str, maxlength){
    let s = str.slice(maxlength-1)
    if (s) return str.replace(s, "\u2026")
    return str
}


/**
 * removes '-' symbol from the str and returns it as the standrt js func name
 * @param {string} str 'var-test-text'
 * @returns {string} 'varTestText'
 */
export function camelize(str){
    let words = str.split("-")
    let newStr = words.shift()
    for(let word of words) newStr += (word.charAt(0).toUpperCase() + word.slice(1))
    return newStr
}
/**
 * returns a list of first n fib numbers
 * @param {number} n 
 * @returns {bigint[]}
 */
export function fibs(n){
    let l = []
    for(let i=0; i < n; i++) l.push(fib(i))
    return l
}

/**
 * sorts and reverses given array
 * @param {number[]} arr 
 * @returns {number[]}
 */
export function arrReverseSorted(arr){
    const arrForCopy = arr.slice();
    arrForCopy.sort((a, b) => b-a);
    return arrForCopy;
}


/**
 * removes duplicates from an array
 * @param {any[]} arr 
 * @returns {any[]}
 */
export function unique(arr){return Array.from(new Set(arr))}
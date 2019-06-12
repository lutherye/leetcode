/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let dictionary = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19, 
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26,
    };
    if (s.length === 1) return dictionary[s];
    let counter = 1;
    let total = dictionary[s[s.length - 1]];
    for (let i = s.length - 2; i >= 0; i--) {
        total += (dictionary[s[i]] * (26 ** counter));
        counter++;
    }
    return total;
};


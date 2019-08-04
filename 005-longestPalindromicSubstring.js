// Given a string s, find the longest palindromic substring in s. 
// You may assume that the maximum length of s is 1000.

var longestPalindrome = function(s) {
    // for edge cases 
    if (s.length < 1) {
        return ""
    } else if (s.length === 1) {
        return s
    }

     // use obj to do word count 
     let obj = {}; 
     let arr = s.split("")
     
     for (let i = 0; i < arr.length - 1; i++) {
         for (let j = i + 2; j < arr.length + 1; j++) {
             let currentStr = arr.slice(i, j)
             if (currentStr === currentStr.reverse()) {
                 console.log(currentStr, currentStr.reverse())
                 obj[currentStr.length] = currentStr.join("")
             }
       }
     }
     console.log(obj)
     
     const lastKey = Object.keys(obj).length - 1
     
     return obj[lastKey]
};
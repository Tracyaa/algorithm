/*
Given a list of daily temperatures T, return a list such that, 
for each day in the input, tells you how many days you would have to wait until a warmer temperature. 
If there is no future day for which this is possible, put 0 instead.

For example, 
given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], 
your output should be [1, 1, 4, 2, 1, 1, 0, 0].
*/

var dailyTemperatures = function(T) {
    let arr = []
    
    for (let i = 0; i < T.length - 1; i++) { 
        const currentDay = T[i] 
        for (let j = i+1; j < T.length; j++) {
            
            if (currentDay < T[j]) {
                arr.push(j-i)
                break;
            } else if (j === T.length - 1) {
                arr.push(0)
            } 
        }
    };

    arr.push(0)
    return arr
};

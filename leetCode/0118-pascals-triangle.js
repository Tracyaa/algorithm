// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// image address: https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

var generate = function(numRows) {
    // we need the base and it will be able to build up
    let arr = [[1], [1, 1]];

    // making a helper function to create the next row
    function nextRow(nums) {
        // the first number is always 1 
        let newArr = [1];
        
        for (let i = 0; i < nums.length - 1; i++) {
            newArr.push(nums[i]+nums[i+1]);
        };

        // the last number is always 1 
        newArr.push(1);
        return newArr;
    };


    return arr;
};
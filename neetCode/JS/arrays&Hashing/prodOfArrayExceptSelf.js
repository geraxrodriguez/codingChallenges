// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// P: 1 param, an array of numbers
 // R: return array of answers for each number
    // each answer is product of all elements in array exluding our current number 
var productExceptSelf = function(nums) {
    let answers = []
    for (let i = 0; i < nums.length; i++) {
        let prod = 1
        for (let j = 0; j < nums.length; j++) {
            if (i != j) {
                prod *= nums[j]
            }
        }
        answers.push(prod)
    }
    return answers
};

// beats 5% of users with JavaScript
var productExceptSelf = function(nums) {
    let forwardArr = [];
    let start = 1;
    for (let i = 0; i < nums.length; i++) {
        forwardArr.push(start);
        start = start * nums[i]
    }
    let res = [];
    let start2 = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res.unshift(start2 * forwardArr[i]);
        start2 = start2 * nums[i];
    }
    return res;
}

// Beats 83% of JavaScript
// O(i) time complexity
var productExceptSelf = function(nums) {
    let res = [];
    let start = 1;
    for (let i = 0; i < nums.length; i++) {
        res.push(start);
        start = start * nums[i]
    }

    let start2 = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = start2 * res[i];
        start2 = start2 * nums[i];
    }
    return res;
}


// 01. Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};



// 02. Binary Search

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};
                 


// 03. Search Insert Position

var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};



// 04. Maximum Depth of Binary Tree

var maxDepth = function(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};



// 05. Invert Binary Tree

var invertTree = function(root) {
    if (!root) return null;
    const temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    return root;
};



// 06. Product of Array Except Self

var productExceptSelf = function(nums) {
    const n = nums.length;
    const res = new Array(n);
    
    res[0] = 1;
    for (let i = 1; i < n; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i];
    }
    
    return res;
};



// 07. Rotate Array

var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;
    
    const reverse = (start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };
    
    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
};



// 08. Min Stack

var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.push = function(val) {
    this.stack.push(val);
    const currentMin = this.minStack.length === 0 
        ? val 
        : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(currentMin);
};

MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};



// 09. Continuous Subarray Sum

var checkSubarraySum = function(nums, k) {
    const map = new Map();
    map.set(0, -1);
    
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let remainder = sum % k;
        if (remainder < 0) remainder += k;
        
        if (map.has(remainder)) {
            if (i - map.get(remainder) >= 2) {
                return true;
            }
        } else {
            map.set(remainder, i);
        }
    }
    
    return false;
};



// 10. Daily Temperatures

var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const res = new Array(n).fill(0);
    const stack = [];
    
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            res[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    
    return res;
};


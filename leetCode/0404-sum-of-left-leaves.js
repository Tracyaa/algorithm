/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let sum = 0
    
    function sumLeft(node) {
        if (!node) {
            return;
        }
        
        sumLeft(node.right);  
        
        if (node.left && !node.left.left && !node.left.right) {
            sum += node.left.val;
        }
        
        sumLeft(node.left);
    };
    

    
    return sum;
};




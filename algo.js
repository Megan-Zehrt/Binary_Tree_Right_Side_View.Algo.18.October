// 199. Binary Tree Right Side View



// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.









var rightSideView = function(root) {
    let results = [];
    
    function dfs(node, count) {
        if (node === null) {
            return;
        }

        let len = results.length
        
        if(count == len){
            results.push(node.val)
        }

        dfs(node.right, count+1)
        dfs(node.left, count+1)
    }

    dfs(root, 0);
    
    return results;
};



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    const res = [];
    const q = [];

    q.push(root);

    while (q.length > 0) {
        let rightSide = null;
        const qLen = q.length;

        for (let i = 0; i < qLen; i++) {
            const node = q.shift();
            if (node) {
                rightSide = node;
                q.push(node.left);
                q.push(node.right);
            }
        }
        if (rightSide) {
            res.push(rightSide.val);
        }
    }
    return res;
};
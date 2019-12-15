function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function rebuildBinaryTree(preOrder, minOrder) {
    if (preOrder.length == 0 || minOrder.length == 0) {
        return null;
    }
    var treeNode = new TreeNode(preOrder[0]);
    for(var i=0; i<preOrder.length; i++) {
        if (minOrder[i] === preOrder[0]) {
            treeNode.left = rebuildBinaryTree(preOrder.slice(1, i+1), minOrder.slice(0, i));
            treeNode.right = rebuildBinaryTree(preOrder.slice(i+1), minOrder.slice(i+1));
        }
    }
    return treeNode;
}

var pre = [1,2,4,7,3,5,6,8];
var min = [4,7,2,1,5,3,8,6];
var tree = rebuildBinaryTree(pre, min);
function preOrder(node) {
    if(node != null) {
        console.log(node.val);
        preOrder(node.left);
        preOrder(node.right);
    }
}
preOrder(tree);
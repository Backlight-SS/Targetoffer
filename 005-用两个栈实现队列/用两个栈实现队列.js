function Stack() {
    var item = [];
    this.push = function (node) {
        item.push(node);
        // push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度
    }
    this.pop = function () {
        return item.pop();
        // pop() 方法用于删除并返回数组的最后一个元素
    }
    this.isEmpty = function () {
        return item.length === 0;
    }
}

var stack1 = new Stack();
var stack2 = new Stack();

function push(node) {
    stack1.push(node);
}

function pop() {
    if(stack1.isEmpty() && stack2.isEmpty()) {
        throw new Error("empty queue");
    }
    if(stack2.isEmpty()) {
        while (!stack1.isEmpty()) {
            stack2.push(stack1.pop())
        }
    }
    return stack2.pop();
}
function ListNode(x){
    this.val = x;
    this.next = null;
}

function printList(head) {
    var res = [];
    while (head){
        res.unshift(head.val);
        // unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度
        head = head.next;
    }
    return res;
}

var head = new ListNode(1);
var a = new ListNode(2);
head.next = a;
var b = new ListNode(3);
a.next = b;
console.log(printList(head));
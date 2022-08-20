class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    addNodeInPositionN(data, position) {
        let temp = new Node(data)
        if (position == 0) {
            temp.next = this.head
            this.head = temp
            return;
        }

        let temp2 = this.head
        for (let i = 0; i < position - 2; i++) {
            temp2 = temp2.next
        }
        temp.next = temp2.next
        temp2.next = temp

    }

    deleteNodePositionN(position) {
        if (position == 1) {
            this.head = this.head.next
        }

        let nodeTemp = this.head
        for (let i = 1; i < position - 1; i++) {
            nodeTemp = nodeTemp.next
        }
        let temp2 = nodeTemp.next
        nodeTemp.next = temp2.next
    }

    size() {
        let count = 0
        let node = this.head
        while (node) {
            node = node.next
            count++
        }
        return count
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    clear() {
        this.head = null;
    }

    getFirst() {
        return this.head;
    }

    printAllNode() {
        let node = this.head
        console.log(node)
        while (node) {
            console.log(node.data)
            node = node.next
        }
    }
}

let head = null

function reverse(node) {
    console.log(head)
    if (node.next == null) {
        console.log(head)
        head = node;
        return
    }
    reverse(node.next)
    let q = node.next
    q.next = node
    node.next = null
    console.log(head)
}

let node1 = new Node(2)
let node2 = new Node(5)
let node3 = new Node(6)
let node4 = new Node(8)

node1.next = node2
node2.next = node3
node3.next = node4

let linkedList1 = new LinkedList(node1)

// linkedList1.printAllNode()
// console.log('-------------------')
linkedList1.addNodeInPositionN(7, 1)
    // linkedList1.printAllNode()
    // console.log('-------------------')
    // linkedList1.deleteNodePositionN(3)
    // linkedList1.printAllNode()

reverse(node1)
let linkedList2 = new LinkedList(head)
linkedList2.printAllNode()
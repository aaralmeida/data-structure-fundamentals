class Node {
	constructor(data){
		this.data = data
		this.next = null
	}
}

class StackLinkedList {
	constructor(node){
		this.head = node
	}

	add(x) {
		let node = new Node(x)
		node.next = this.head
		this.head = node
	}


	pop() {
		this.head = this.head.next
	}

	printAll(){
		let node = this.head
		while(node) {
			console.log(node.data)
			node = node.next
		}
	}
}

let node = new Node(1)

let stack = new StackLinkedList(node)

stack.add(2)

stack.add(3)

stack.pop()

stack.printAll()



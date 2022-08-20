class ArrayQueue {
	constructor() {
		this.top = 0;
		this.queue = []
	}

	enqueue(element) {
		this.queue[this.top]= element
		this.top++
	}

	dequeue(element) {
		this.queue.shift()
	}

	printAll(){
		console.log(this.queue)
	}
}

let arrayQueue = new ArrayQueue()

arrayQueue.enqueue(2)
arrayQueue.enqueue(3)
arrayQueue.dequeue()
arrayQueue.printAll()


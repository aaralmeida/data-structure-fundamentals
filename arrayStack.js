class Stack {
	constructor(){
		this.top = -1
		this.stackArray = ['armando']
	}

	isEmpty(){
		return (this.top == -1) ? true : false
	}

	push(x) {
		this.top++
		this.stackArray.push(x)
	}

	pop(){
		this.top--
		this.stackArray.pop()
	}

	last(){
		return this.stackArray[this.top]
	}
}
class LinkedList {
	constructor() {
		this.listSize = 0;
		this.head = null;
	}

	append(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.listSize++;
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.listSize++;
	}

	size() {
		console.log(`LinkList size: ${this.listSize}`);
	}

	checkHead() {
		console.log(`Head value: ${this.head.value}`);
	}

	checkTail() {
		if (!this.head) return null;
		let current = this.head;
		while (current.next) {
			current = current.next;
		}
		console.log(`Tail value: ${current.value}`);
	}

	at(index) {
		let current = this.head;
		for (let i = 0; i < index; i++) {
			current = current.next;
		}
		console.log(`Value at index ${index}: ${current.value}`) ;
	}

	pop() {
		let current = this.head;
		while (current.next.next) {
			current = current.next;
		}
		current.next = null;
		this.listSize--;
	}

	contains(value) {
		while (this.head) {
			if (this.head.value === value) {
                console.log(`${value} is in the list`);
                return true};
			this.head = this.head.next;
		}
        console.log(`${value} is not in the list`);
        return false;
	}

	find(value) {
		let current = this.head;
		let index = 0;
		while (current) {
			if (current.value === value) return index;
			current = current.next;
			index++;
		}
        console.log(`Index of ${value}: ${index}`);
	}

	convertToString() {
		let current = this.head;
		let result = "";
		while (current) {
			result += ` ( ${current.value} ) -> `;
			current = current.next;
		}
		console.log(`${result} null`);
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(30);
list.convertToString();
list.size();
list.find(20);
list.at(1);
list.checkHead();
list.checkTail();
list.pop();
list.convertToString();
list.contains(20);
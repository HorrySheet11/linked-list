class HashMap {
	constructor() {
		this.loadFactor = 0.75;
		this.capacity = 16;
		this.map = new Array(this.capacity);
	}
	hash(key) {
		let hashCode = 0;
		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i);
		}
		const bucketIndex = hashCode % this.capacity;
		return bucketIndex;
	}

	set(key, value) {
		const bucketIndex = this.hash(key);
		if (bucketIndex < 0 || bucketIndex >= this.map.length) {
			throw new Error("Trying to access index out of bounds");
		}
		if (this.map[bucketIndex] === undefined) {
			this.map[bucketIndex] = [];
		}
		this.map[bucketIndex] = {key: key, value: value};
		let currentMapCount = 0;
		for(let i = 0; i < this.map.length; i++){
			if(this.map[i] !== undefined){
				currentMapCount++;
			}
		}
		if(currentMapCount > this.capacity * this.loadFactor){
			this.resize();
		}
	}
	resize(){
		this.capacity *= 2;
		const oldMap = this.map;
		this.map = new Array(this.capacity);
		for(let i = 0; i < oldMap.length; i++){
			if(oldMap[i] !== undefined){
				this.set(oldMap[i].key, oldMap[i].value);
			}
		}
	}

	get(key) {
		if (!this.map[this.hash(key)]) {
			return null;
		}
		return this.map[this.hash(key)].value;
	}

	has(key) {
		return !!this.map[this.hash(key)];
	}
	remove(key) {
		if (this.map[this.hash(key)]) {
			this.map[this.hash(key)] = null;
			return true;
		} else {
			return false;
		}
	}
	length() {
		let count = 0;
		for(let i = 0; i < this.map.length; i++){
			if(this.map[i] !== undefined){
				count++;
			}
		}
		return count;
	}
	clear() {
		this.map = new Array(16);
	}
	keys(){
		const keys = [];
		for(let i = 0; i < this.map.length; i++){
			if(this.map[i]){
				keys.push(this.map[i].key);
			}
		}
		return keys;
	}
	values(){
		const values = [];
		for(let i = 0; i < this.map.length; i++){
			if(this.map[i]){
				values.push(this.map[i].value);
			}
		}
		return values;
	}
	entries(){
		const entries = [];
		for(let i = 0; i < this.map.length; i++){
			if(this.map[i] !== undefined){
				entries.push([i, this.map[i]]);
			}
		}
		return entries;
	}
}

const test = new HashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.log(test.entries());
 console.log(`test.length: ${test.length()}`);
console.log(`test.remove('frog')`);
test.remove('frog')
console.log(test.keys());
console.log(test.values());
console.log(`get apple: ${test.get('apple')}`);
console.log(`test.length: ${test.length()}`);
console.log(test.entries());
test.set('car', 'cyan');
test.set('pencil', 'black');
test.set('melon', 'green');
test.set('notebook', 'blue');
test.set('orange', 'orange');
test.set('quartz', 'gray');
test.set('rainbow', 'rainbow');
test.set('sun', 'yellow');
test.set('tiger', 'golden');
test.set('umbrella', 'black');
test.set('vase', 'white');
console.log(`test.length: ${test.length()}`);
console.log(test.entries());


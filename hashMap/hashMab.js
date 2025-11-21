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
		const bucketIndex = hashCode % 16;
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
		this.map[bucketIndex].push(value);
	}
    get(key){
        if(!this.map[this.hash(key)]){
            return null;
        }
        return this.map[this.hash(key)]
    }
    has(key){
        return !!this.map[this.hash(key)]
    }
    remove(key){
        if(this.map[this.hash(key)]){
            this.map[this.hash(key)] = null; 
            return true;
        }
        else{return false}
    }
}

const LinkedList = () => {
    let listSize = 0;
    let head = null
    const append = (value) => {
        let newNode = new Node(value);
        if(!head) {
            head = newNode;
        } else {
            let current = head;
            while(current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        listSize++;
    }
    const prepend = (value) => {
        let newNode = new Node(value);
        newNode.next = head;
        head = newNode;
        listSize++;
    }
    const size = () => {
        return listSize;
    }
    const checkHead = () => {
        if(!head) return null;
        
        return head.value;
    }
    const checkTail = () => {    
        return list[-1];
    }
    const at = (index) => {
        return list[index];
    }
    const pop = () => {
        list.pop();
    }
    const contains = (value) => {   
        if(!value) return false; 
        return list.includes(value);
    }
    const find = (value) => {    
        return list.indexOf(value);
    }
    const convertToString = () => {    
        return list.toString();
    }
    // const insertAt = (value, index) => {

    // }
    // const removeAt = (index) => {

    // }
    return 
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
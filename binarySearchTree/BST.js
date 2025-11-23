//Driver Code Starts
// Node structure
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Custom Queue Implementation
class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        let item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    }

    isEmpty() {
        return this.tailIndex === this.headIndex;
    }

    size() {
        return this.tailIndex - this.headIndex;
    }
}

function getHeight(root, h) {
    if (root === null) return h - 1;
    return Math.max(getHeight(root.left, h + 1), getHeight(root.right, h + 1));
}

function levelOrder(root) {
    let q = new Queue();
    q.enqueue([root, 0]);

    let lastLevel = 0;

    // function to get the height of tree
    let height = getHeight(root, 0);

    // printing the level order of tree
    while (!q.isEmpty()) {
        let [node, lvl] = q.dequeue();

        if (lvl > lastLevel) {
            console.log("");
            lastLevel = lvl;
        }

        // all levels are printed
        if (lvl > height) break;

        // printing null node
        process.stdout.write((node.data === -1 ? "N" : node.data) + " ");

        // null node has no children
        if (node.data === -1) continue;

        if (node.left === null) q.enqueue([new Node(-1), lvl + 1]);
        else q.enqueue([node.left, lvl + 1]);

        if (node.right === null) q.enqueue([new Node(-1), lvl + 1]);
        else q.enqueue([node.right, lvl + 1]);
    }
}
//Driver Code Ends

// Recursive Function to Create BST
function sortedArrayToBSTRecur(arr, start, end) {
    if (start > end) return null;

    let mid = start + Math.floor((end - start) / 2);
    let root = new Node(arr[mid]);

    // Divide from middle element
    root.left = sortedArrayToBSTRecur(arr, start, mid - 1);
    root.right = sortedArrayToBSTRecur(arr, mid + 1, end);

    return root;
}

// Function which return BST
function sortedArrayToBST(arr) {
    return sortedArrayToBSTRecur(arr, 0, arr.length - 1);
}

// Driver code
//Driver Code Starts
const arr = [1, 5, 9, 14, 23, 27];
const root = sortedArrayToBST(arr);
levelOrder(root);
//Driver Code Ends
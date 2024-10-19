class Node {
    constructor(type, left = null, right = null, value = null) {
        this.type = type; // 'operator' or 'operand'
        this.left = left;
        this.right = right;
        this.value = value; // e.g., number for comparisons or logical operators
    }
}

export default Node;

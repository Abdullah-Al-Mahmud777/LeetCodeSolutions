/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // Initialize a dummy head to simplify list construction
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    // Traverse both lists until both are null and there's no remaining carry
    while (l1 !== null || l2 !== null || carry !== 0) {
        // Get values from current nodes, or 0 if the list has ended
        let val1 = (l1 !== null) ? l1.val : 0;
        let val2 = (l2 !== null) ? l2.val : 0;

        // Calculate sum and update carry
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10;

        // Create a new node with the calculated digit and move the pointer
        current.next = new ListNode(digit);
        current = current.next;

        // Move to the next nodes in l1 and l2 if they exist
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    // Return the next node of dummy head as it points to the start of the result list
    return dummyHead.next;
};
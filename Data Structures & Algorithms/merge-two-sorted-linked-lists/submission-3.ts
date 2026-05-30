/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let newListHead, newList = {val: 0, next: null};
        while(list1 && list2){
            if(list1.val < list2.val){
                newList.next = list1;
                list1 = list1.next;
            }else{
                newList.next = list2;
                list2 = list2.next;
            }
            newList = newList.next;
            if(!newListHead) newListHead = newList;
        }

        if(list1){
            newList.next = list1;
        }else{
            newList.next = list2;
        }
        if(!newListHead) newListHead = newList.next;

        return newListHead;
    }
}

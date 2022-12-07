<?php

class ListNode
{
    public $val = 0;
    public $next = null;
    function __construct($val = 0, $next = null)
    {
        $this->val = $val;
        $this->next = $next;
    }
}

class Solution
{

    /**
     * @param ListNode $head
     * @return ListNode
     */
    function swapPairs($head)
    {
        $dummy = new ListNode(0, $head);
        $cur = $head;
        $pre = $dummy;
        // $cur->next to check exist new pair or not
        while ($cur && $cur->next) {
            $second = $cur->next;
            $nextPair = $second->next;

            $pre->next = $second;
            $second->next = $cur;
            $cur->next = $nextPair;

            // Change the cur and the pre
            $pre = $cur;
            $cur = $cur->next;
        }
        return $dummy->next;
    }
}
$node4 = new ListNode(4);
$node3 = new ListNode(3, $node4);
$node2 = new ListNode(2, $node3);
$node1 = new ListNode(1, $node2);

$solution = new Solution();

echo '<pre>';
var_dump($solution->swapPairs($node1));
echo '</pre>';
die;

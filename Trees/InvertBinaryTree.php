<?php


class TreeNode
{
    public $val = null;
    public $left = null;
    public $right = null;
    function __construct($val = 0, $left = null, $right = null)
    {
        $this->val = $val;
        $this->left = $left;
        $this->right = $right;
    }
}

$node9 = new TreeNode(9);
$node6 = new TreeNode(6);
$node3 = new TreeNode(3);
$node1 = new TreeNode(1);
$node7 = new TreeNode(7, $node6, $node9);
$node2 = new TreeNode(2, $node1, $node3);
$root = new TreeNode(4, $node2, $node7);

class Solution
{

    /**
     * @param TreeNode $root
     * @return TreeNode
     */
    //Recursive solution.
    // function invertTree($root)
    // {
    //     if ($root === null) return $root;

    //     $temp = $root->left;
    //     [$root->left, $root->right] = [$root->right, $temp];
    //     $this->invertTree($root->left);
    //     $this->invertTree($root->right);

    //     return $root;
    // }

    //Iterative solution using DFS
    // function invertTree($root)
    // {
    //     $stack = [$root];

    //     while (count($stack)) {
    //         $node = array_pop($stack);
    //         if ($node !== null) {
    //             $temp = $node->left;
    //             [$node->left, $node->right] = [$node->right, $temp];
    //             array_push($stack, $node->left, $node->right);
    //         }
    //     }
    //     return $root;
    // }

    //Iterative solution using BFS
    function invertTree($root)
    {
        $queue = [$root];

        while (count($queue)) {
            $node = array_shift($queue);
            if ($node !== null) {
                $temp = $node->left;
                [$node->left, $node->right] = [$node->right, $temp];
                array_push($queue, $node->left, $node->right);
            }
        }
        return $root;
    }
}

$solution = new Solution();
echo '<pre>';
var_dump($solution->invertTree($root));
echo '</pre>';
die;

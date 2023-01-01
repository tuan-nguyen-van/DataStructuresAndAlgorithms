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

$node4 = new TreeNode(4);
$node5 = new TreeNode(5);
$node2 = new TreeNode(2, $node4, $node5);
$node3 = new TreeNode(3);
$node1 = new TreeNode(1, $node2, $node3);

class Solution
{
    /**
     * @param TreeNode $root
     * @return Integer
     */

    private $diameter = 0;

    public function diameterOfBinaryTree($root)
    {
        $this->dfs($root);

        return $this->diameter;
    }

    private function dfs($node)
    {
        if (!$node) return -1;
        $leftHeight = $this->dfs($node->left);
        $rightHeight = $this->dfs($node->right);
        $this->diameter = max($this->diameter, $leftHeight + $rightHeight + 2);
        // Return the height.
        return 1 + max($leftHeight, $rightHeight);
    }
}

$solution = new Solution();

echo '<pre>';
var_dump($solution->diameterOfBinaryTree($node1));
echo '</pre>';
die;

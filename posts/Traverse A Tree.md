---
title: "Traverse a Binary Tree"
date: "2022-11-09"
description: "To process a binary tree by “visiting” each of its nodes, each time performing a specific action such as printing the contents of the node. Any process for visiting all of the nodes in some order is called a traversal."
language: "Python"
categories: ["Python", "Tree"]
---

Pre-order, in-order, and post-order traversal visit each node in a tree by recursively visiting each node in the left and right subtrees of the root.

## In-order traversal

The left subtree is visited first, then the root and later the right sub-tree.

```python
# Return an inorder traversal of a tree.
def inorder_traversal(root):
    if root is None:
        return []
    return inorder_traversal(root.left) + [root.val] + inorder_traversal(root.right)
```

## Pre-order traversal

The root node is visited first, then the left subtree and finally the right subtree

```python
# Return a preorder traversal of a tree.
def preorder_traversal(root):
    if root is None:
        return []
    return [root.val] + preorder_traversal(root.left) + preorder_traversal(root.right)
```

## Post-order traversal

We traverse the left subtree, then the right subtree and finally the root node.

```python
# Return a post order traversal of a tree.
def postorder_traversal(root):
    if root is None:
        return []
    return postorder_traversal(root.left) + postorder_traversal(root.right) + [root.val]
```

## Example

```python
# Creates a new node with the given values.
class Node:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# Example Tree
root = Node(10)
root.left = Node(34)
root.right = Node(89)
root.left.left = Node(45)
root.left.right = Node(50)


# Return an inorder traversal of a tree.
def inorder_traversal(root):
    if root is None:
        return []
    return inorder_traversal(root.left) + [root.val] + inorder_traversal(root.right)


# Return a preorder traversal of a tree.
def preorder_traversal(root):
    if root is None:
        return []
    return [root.val] + preorder_traversal(root.left) + preorder_traversal(root.right)


# Return a postorder traversal of a tree.
def postorder_traversal(root):
    if root is None:
        return []
    return postorder_traversal(root.left) + postorder_traversal(root.right) + [root.val]


# Prints out preorder preorder postorder traversals.
print(inorder_traversal(root))
print(preorder_traversal(root))
print(postorder_traversal(root))


```

const question = {
    id: '700',
    title: "Search in a Binary Search Tree",
    tag: 'Easy',
    ques: "You are given the root of a binary search tree (BST) and an integer val.<br/> Find the node in the BST that the node 's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.",
    ex1: {
        img: 'tree1.jpg',
        input: 'root = [4,2,7,1,3], val = 2',
        output: '[2,1,3]'
    },
    ex2: {
        img: 'tree2.jpg',
        input: 'root = [4,2,7,1,3], val = 5',
        output: '[]'
    },
    constraints: [
        'The number of nodes in the tree is in the range [1, 5000].',
        '1 <= Node.val <= 107',
        'root is a binary search tree.',
        '1 <= val <= 107'
    ]
}

export default question;
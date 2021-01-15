# DP on tree general syntax
https://www.youtube.com/watch?v=d1u2t018Kjg
- Tree with recursion have following
    - base condition
    - solve sub problem
    - solve root problem based on sub problem
- General syntax based on postorder dfs
```
const recursion = (root, dp) => {
    // base case based on problem and could be more than one base condition
    if(!root) {
        return 0;
    }

    // solve sub problem
    const left = recursion(root.left, dp);
    const right = recursion(root.right, dp);

    // solve root problem in two step

    // step a. If root is not an answer
    const temp = 1 + Math.max(left, right)

    // step b. if root can be an answer
    const ans =  1 + left + right;

    // update dp
    dp[root] = Math.max(temp, ans);

    // return temp
    return temp;
}
```
# Diameter of binary tree
https://www.youtube.com/watch?v=qZ5zayHSH2g

https://www.youtube.com/watch?v=zmPj_Ee3B8c

- longest path between two leaves

# Maximum path sum from any node to any node

# Binary lifting: Dynamic Programming on Trees
https://cses.fi/problemset/task/1687

https://www.youtube.com/watch?v=FAfSArGC8KY&list=RDCMUCJZF4VOyV9zfm2SH_QdeOWw&index=6
https://www.youtube.com/watch?v=kOfa6t8WnbI
## Bruteforce
- Maintain `parent` mapping for each node
- Perform recursion to find ancestor
## Binary lifting
- For every node `u` store parent for each level
- up(u,1) - parent at one level up
- up(u,2) - parent at two level up
- up(u,4) - parent at four level up
- up(u,8) - parent at eight level up
- up(u,2^i) - parent at i level up
How to answer query ?
- Answer a query: u,k i.e. what is node which is k level above to `u`
- Write k in binary form: k = (010110) = 2^4 + 2^2 + 2^1
- Make largest jump in the power of `2`
- From `u` to jump `2^4` to `v`
- From `v` to jump `2^2` to `w`
- From `w` to jump `2^1` to `y`
## Algo
- up[root][x] = -1
- up[u][0] = u
- up[u][1] = up[u][2^0] = up[]
- up[u][x] = up( up( u , x-1) ,x-1)
# Binary tree Cameras
https://leetcode.com/problems/binary-tree-cameras/

https://www.youtube.com/watch?v=VBxiavZYfoA&list=RDCMUCJZF4VOyV9zfm2SH_QdeOWw&start_radio=1&t=1019
## Summary
- Given a binary tree
- We install cameras on nodes of the tree
- Each camera on the node monitors
    - parent
    - itself
    - immediate children
- Calculate the minimum number of cameras needed to monitor all nodes of the tree
## Approach DP
- dp(u, placeCamera, parentCamera) : Min cost required to cover subtree rooted at u
- Answer: min(dp(root, 0, 0), dp(root, 1, 0))
- dp(u, 1, 0) = 1 + min(dp(c1,1,1), dp(c1, 0, 1)) + min(dp(c2,1,1), dp(c2, 0, 1))
- dp(u, 1, 1) = 1 + min(dp(c1,1,1), dp(c1, 0, 1)) + min(dp(c2,1,1), dp(c2, 0, 1))
- dp(u, 0, 1) =  min(dp(c1,0,0), dp(c1, 1, 0)) + min(dp(c2,0,0), dp(c2, 1, 0))
- dp(u, 0, 0) =   dp(c1,1,0) + min(dp(c2, 0, 0), dp(c2, 1, 0)) + dp(c2,1,0) + min(dp(c1, 0, 0), dp(c1, 1, 0))

# Appleman and Tree
## Summary
https://codeforces.com/problemset/problem/461/B

https://www.youtube.com/watch?v=gj0zp--fBL8&list=RDCMUCJZF4VOyV9zfm2SH_QdeOWw&index=20

- Appleman has a tree with n vertices
- Some of the vertices (at least one) are colored black and other vertices are colored white.
- Consider a set consisting of k (0 ≤ k < n) edges of Appleman's tree.
- If Appleman deletes these edges from the tree, then it will split into (k + 1) parts. Note, that each part will be a tree with colored vertices.
- Now Appleman wonders, what is the number of sets splitting the tree in such a way that each resulting part will have exactly one black vertex?
## Recursion + DP

# Beauty of tree
https://codingcompetitions.withgoogle.com/kickstart/round/000000000019ff08/0000000000386edd

https://www.youtube.com/watch?v=ueLRceYVcdE

## Summary
- Amadea and Bilva are decorating a rooted tree containing N nodes, labelled from 1 to N
-  Node 1 is the root of the tree, and all other nodes have a node with a numerically smaller label as their parent.
- Amadea and Bilva's decorate the tree as follows:
    - Amadea picks a node of the tree uniformly at random and paints it. Then, she travels up the tree painting every A-th node until she reaches the root.
    - Bilva picks a node of the tree uniformly at random and paints it. Then, she travels up the tree painting every B-th node until she reaches the root.
- The beauty of the tree is equal to the number of nodes painted at least once by either Amadea or Bilva. Note that even if they both paint a node, it only counts once.
- What is the expected beauty of the tree?


# Distribute coins in binary tree
https://leetcode.com/problems/distribute-coins-in-binary-tree/



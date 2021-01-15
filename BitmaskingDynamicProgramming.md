# Reference
https://www.youtube.com/watch?v=6sEFap7hIl4&list=PLb3g_Z8nEv1icFNrtZqByO1CrWVHLlO5g

https://www.youtube.com/watch?v=QukpHtZMAtM&list=RDCMUCJZF4VOyV9zfm2SH_QdeOWw&index=2

# Summary
- Set of integers S = {1, 2, 3, ....., N}
- Let's say, you have many subsets of `S`
- Design a technique to store a subset of this set `S` in efficient way
- For example 
    - S' = {2, 5, 6}
    - S' = {10}
    - S' = {1, 2, 8, 10}
- How to store these set in memory?
    - Bruteforce way: Store in array of integers
    - Optimized way:
        - Every ith element of `S` there are two options
            - either it present in subset
            - not present in subset
        - We can repsent subset as boolean array 
            ```
            S' = {2,4}
            01010
            ```
        - Use integer to represent subset, given condition that integer has enough bit to represent subset
        - S = {2, 3, 5}
            - 10110
            - here S(i) represent set bit in binary number
            - this is equal to `22`
        - 17 = 010001
            - S = {1,5}
        - How to check if particular bit is on/off?




# Fish fighting
https://codeforces.com/contest/16/problem/E

# N workers and N jobs
https://www.youtube.com/watch?v=685x-rzOIlY
# Little Elephant and T-Shirts
## Summary
https://www.codechef.com/problems/TSHIRTS
- There are 100 different kind of T-Shirts.
- Each T-Shirt has a unique id between 1 and 100.
- No person has two T-Shirts of the same ID.
- They want to know how many arrangements are there in which no two persons wear same T-Shirt.
- One arrangement is considered different from another arrangement if there is at least one person wearing a different kind of T-Shirt in another arrangement.
- Input:
    2
    2
    3 5
    8 100
    3
    5 100 1
    2
    5 100
- Output:
    4
    4
- Explanation
    - (5, 8), (5, 3), (100, 3), (100, 8)
- DP Approach 1:
    - dp(i, mask): number of ways from Pi to Pn to wear t-shirts as per t-shirts available as per mask
        - mask is 100 digits long number
        - every bit of mask represent which t-shirt has been worn
        - As soon as a person choose t-shirt `i` to wear, we need to mark that bit as 0
    - Size of mask? 
        - pow(2, 100)
        - This is very poor
- DP Approach 2:
    - T1 : [p11, p12, ....p1n]
    - T2 : [p21, p22, ...p2n]
    - .......................
    - Tn: [pn1, pn2, ...pnn]
    - We can allocate t shirts
        - T1: [- - - - - - - ]
        - Either I take that t-shirt and assign to person who own it or simply ignore it
    - dp(i, mask) : Number of ways I could assign t-shirt deom Ti to T100 where mask represent what are the people not assigned any t-shirts
    - Initial value
        - dp(1, 11111111111.....1000times)
        - dp(100, pow(2,n)
        )
    - dp(i, mask) = dp(i+1, mask) + sum( dp(j+1, mask-jth bit) ) with valid j

# Travelling salesman problem
https://www.youtube.com/watch?v=QukpHtZMAtM&list=RDCMUCJZF4VOyV9zfm2SH_QdeOWw&index=2
## Summary
- Given a list of cities and the distance between each pair of cities
- What is the shortest possible route that visits each city only once and returns to the origin city
- Use adjacency matrix d(i,j) to represent distance between city i and j
## Brute force
- Try all possible path
- For 1st city, there are N-1 options
- For 2nd city, there are N-2 options
- For n-1 city, there are 1 options
- Time complexity: N-1 * N -2 * N -3 *......* 1 = fact(n)
## DP
- For city `1`, we can choose either of {2, 3, ....N} options
    - Let's say we choose `2`
        - From `2` there are {3,4,.....N} options
            - Choose `3`
            - From `3` there are {4, 5, ....N}
    - Let's say we choose `3`
        - From `3` there are {2,4,.....N} options
            - Choose `2`
            - From `2` there are {4, 5,....N} options
    - See the optimal substructure
- dp(i,s) : min distance need to travel given that you are at city `i` and you need to visit all the cities represented by `S` and get back to city `1`
- Answer will be dp(1,{2,3,4,....N})
- dp(i,S) = dist(i,j) + dp(j, s - {j}) min among all valid j
- Space complexity: O(n * 2^n )
- Time complexity: O(n^2 * 2^n)

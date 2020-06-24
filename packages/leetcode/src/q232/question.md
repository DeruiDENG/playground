# 232. Implement Queue using Stacks

Implement the following operations of a queue using stacks.

* push(x) -- Push element x to the back of queue.
* pop() -- Removes the element from in front of queue.
* peek() -- Get the front element.
* empty() -- Return whether the queue is empty.

Example:

```javascript
MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);  
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false
```Given an encoded string, return its decoded string.
   
   The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
   
   You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
   
   Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].
   
    
   
   Example 1:
   
   Input: s = "3[a]2[bc]"
   Output: "aaabcbc"
   Example 2:
   
   Input: s = "3[a2[c]]"
   Output: "accaccacc"
   Example 3:
   
   Input: s = "2[abc]3[cd]ef"
   Output: "abcabccdcdcdef"
   Example 4:
   
   Input: s = "abc3[cd]xyz"
   Output: "abccdcdcdxyz"
   
   来源：力扣（LeetCode）
   链接：https://leetcode-cn.com/problems/decode-string
   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

Notes:

* You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
* Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
* You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

// EXTRA 2

// 2) Create a program using different methods, which will provide the following outputs:
// Start = ['apple', 'banana', 'kiwi']

// Output = ['apple', 'banana','orange','strawberry','kiwi'] 
// Note: try to find a solution with less lines of code as you can.

var start = ["apple", "banana", "kiwi"];

start.splice(2,0,"orange", "strawberry");
console.log(start);
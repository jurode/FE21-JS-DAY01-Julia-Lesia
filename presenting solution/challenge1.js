// CHALLENGE 1

// Create a multidimensional array that will output the values "Vienna is a nice city". The values should be outputted from the array diagonally (order: top-left -> bottom-right).


// declare our array
var myArray = [ 
    ["Vienna", "bla", "bla", "bla", "bla"],
    ["bla", "is", "bla", "bla", "bla"],
    ["bla", "bla", "a", "bla", "bla"],
    ["bla", "bla", "bla", "nice", "bla"],
    ["bla", "bla", "bla", "bla", "city"],
];


// show the sentence in console
console.log(myArray[0][0] + " " + myArray[1][1] + " " + myArray[2][2] + " " + myArray[3][3] + " " + myArray[4][4] + ".");
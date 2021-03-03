
var players = ['Martin', 'Thomas', 'Peter', 'Mathias', 'Niki'];
var autos = ['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari'];


document.getElementById("box").innerHTML = "The most valuable player of the match is " + players[2];

document.getElementById("box2").innerHTML = autos.sort();


var a = 7;

var b = 14;

var c = "21";

var d = '36';

var e = 42;

document.getElementById("box4").innerHTML = a + b + Number(c) + Number(d) + e;

var f = '1';

var g = 15;

var h = 8;

var i = "1";

document.getElementById("box5").innerHTML = Number(f) * g * h * Number(i);


myArray = [ [1, 2, 1, 24], 
            [8, 11, 9, 4], 
            [7, 0, 7, 27], 
            [7, 4, 28, 14], 
            [3, 10, 25, 7], 
            [21, 4, 6, 17], 
            [3, 5, 26, 3] ];

document.getElementById("box6").innerHTML = myArray[1][1] + "<br>" + myArray[4][2] + "<br>" + myArray[5][3] + "<br>" + myArray[2][3] + "<br>" + myArray[2][1];


var text = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";

var arr = new Array();
arr = text.split('$');
document.getElementById("box7").innerHTML = arr.join(" ");
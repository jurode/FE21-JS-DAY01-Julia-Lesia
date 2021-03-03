// Challenge 2 | String Manipulation


// Structure the following sentence:
// "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up".

// The result should be:
// "Properties, a set of immutable values, are passed to a component's renderer as properties in its  HTML tag. A component cannot directly modify any properties passed to it, but can be passed callback functions that do modify values. This mechanism's promise is expressed as properties flow down; actions flow up"

// (Commas are also accepted as a division between the words.)


// declare var
var text = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";

// create new Array
var arr = new Array();

// split text into array, $ as a separator
arr = text.split('$');

// show our new array with " " between each item
console.log(arr.join(" "))
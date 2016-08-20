/**
 * Created by randy on 8/17/16.
 */

// Write a function isEven() which takes a single numberic argument and returns
// true if the number is even, and false otherwise
/*
    isEven(4); // true
    isEven(21); // false
    isEven(68); // true
    isEven(333); // false
 */

// function isEven (num) {
//     if (num % 2 !== 0) {
//         console.log(false);
//         return false;
//     }
//     console.log(true);
//     return true;
// }

function isEven(num) {
    return num % 2 === 0;
}

console.log("isEven() function run: ");
isEven(4);
isEven(21);
isEven(68);
isEven(333);


// Write a function factorial() which takes a single numeric argument and returns the factorial of that number
/*
    4! is 4x3x2x1
    6! is 6x5x4x3x2x1
    0! is 1

    factorial(5); // 120
    factorial(2); // 2
    factorial(10); // 3628800
    factorial(0); // 1
 */

// function factorial(num) {
//     if (num === 0) {
//         console.log(1);
//         return 1;
//     }
//
//     var result = (num * factorial(num - 1));
//     console.log(result);
//     return result;
// }

function factorial (num) {
//     define a result variable
    var result = 1;
//      calculate factorial and store value in result
    for (var i = 2; i <= num; i++) {
        result *= i
    }
//     return the result variable
    return result;
}
console.log("factorial() function run: ");
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));


// write a function kebabToSnake() which takes a single kebab-cased string
// argument and returns the snake_cased version, i.e., basically, replace "-"s with "_"s

/*
kebabToSnake("hello-world");    // "hello_world"
kebabToSnake("dogs-are-awesome");    // "dogs_are_awesome"
kebabToSnake("blah");    // "blah"
 */

function kebabToSnake(str) {
    // replace all dashes with underscores
    str = str.replace(/-/g, "_");
    // return str
    return str;
}
/**
 * Created by randy on 8/21/16.
 */

/*
    // printReverse()
    Write a function printReverse() that takes an array as an argument and prints
    out the elements in the array in reverse order (don't actually
    reverse the array itself)

    printReverse([1,2,3,4])
    // 4
    // 3
    // 2
    // 1
*/
console.log("printReverse():");
var pr = [10, 20, 30, 40];

function printReverse(arr) {
    for (var i = arr.length -1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printReverse(pr);

/*
    // isUniform()
    Write a function isUniform() which takes an array as an argument and
    returns true if all elements in the array are identical

    isUniform([1,1,1,1]);  // true
    isUniform([2,1,1,1]);  // false
 */
console.log("isUniform:");

function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true;
}

isUniform([1,1,1,9]);


/*
    // sumArray()
    Write a function sumArray() that accepts an array of numbers and returns
    the sum of all numbers in the array

    sumArray([1,2,3]);  // 6
    sumArray([10,3,10,4]);  // 27
 */
console.log("sumArray");
function sumArray (arr) {
    var result = 0;

    arr.forEach(function (num) {
        result += num;
    });
    console.log(result);
    return result;
}

sumArray([5,15,5]);


/*
    // max()
    Write a function max() that accepts an array of numbers and returns the
    maximum number in the array

    max([1,2,3]);   // 3
    max([101,28,39]);   // 101
 */
console.log("max()");
function max (arr) {
    var highest = arr[0];

    arr.forEach(function (item) {
        if (item > highest) {
            highest = item;
        }
    });

    console.log(highest);
    return highest;
}
max([23, 509, 345, 740]);
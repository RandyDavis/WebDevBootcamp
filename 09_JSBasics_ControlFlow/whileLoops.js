/**
 * Created by randy on 8/15/16.
 */

// Print all numbers between -10 and 19
var test1 = -10;

while (test1 < 20) {
    console.log(test1);
    test1++;
    if (test1 > 19) {
        console.log("Test 1 Completed - Print all numbers between -10 and 19");
    }
}



// Print all even numbers between 10 and 40
var test2 = 1;

while(test2 <= 40) {
    if(test2 %2 === 0) {
        console.log(test2)
    }
    test2++;
    if (test2 > 40) {
        console.log("Test 2 Completed - Print all even numbers between 10 and 40");
    }
}




// Print all odd numbers between 300 and 333
var test3 = 300;

while (test3 <= 333) {
    if (test3 % 2 === 1) {
        console.log(test3);
    }
    test3++;
    if (test3 > 333) {
        console.log("Test 3 Completed - Print all odd numbers between 300 and 333");
    }
}



// Print all numbers divisible by 5 AND 3 between 5 and 50
var test4 = 5;

while (test4 <= 50) {
    if ((test4 % 5 === 0) && (test4 % 3 === 0)) {
        console.log(test4);
    }
    test4++;
    if (test4 > 50) {
        console.log("Test 4 Completed - Print all numbers divisible by 5 AND 3 between 5 and 50");
    }
}
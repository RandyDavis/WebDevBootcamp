/**
 * Created by randy on 8/16/16.
 */
/**
 * Created by randy on 8/15/16.
 */

// Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19");
for (var i = -10; i < 20; i++) {
    console.log(i);

}

// Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
for (var j = 10; j <= 40; j++) {
    if (j % 2 === 0) {
        console.log(j);
    }
}

// Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");
for (var k = 300; k <= 333; k++) {
    if (k % 2 === 1) {
        console.log(k);
    }
}

// Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
for (var l = 5; l <= 50; l++) {
    if (l % 3 === 0 && l % 5 === 0) {
        console.log(l);
    }
}

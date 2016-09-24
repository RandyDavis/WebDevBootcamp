var faker = require("faker");
var productCount = 10;

console.log("=====================");
console.log("WELCOME TO MY SHOP!");
console.log("=====================");
for(var i = 0; i < productCount; i++) {
    console.log(faker.commerce.productName() + " - " + "$" + faker.commerce.price());
}

// var product = faker.Internet.ip();
//
// console.log(product);


/**
 * Created by randy on 8/21/16.
 */
var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["Bob", "Tina"],
    add: function (x, y) {
        return x + y;
    },
    greet: function(name) {
        return "Hello! My name is " + this.name + ".";
    }
}
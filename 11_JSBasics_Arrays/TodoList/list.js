/**
 * Created by randy on 8/20/16.
 */
var todos = [];
var task = prompt("What would you like to do?");

while (task !== "quit") {
    // handle input
    if (task === "new") {
        var newTodo = prompt("Enter a new todo?");
        todos.push(newTodo);
        task = prompt("What would you like to do?");
    } else if (task === "list") {
        console.log(todos);
        task = prompt("What would you like to do?");
    }

}
console.log('Ok, You Quit The App!');
/**
 * Created by randy on 8/20/16.
 */
var todos = [];
var task = prompt("What would you like to do?");

while (task !== "quit") {
    // handle input
    if (task === "new") {
        newTodo();
    } else if (task === "list") {
        listTodos();
    } else if (task === "delete") {
        deleteTodos();
    }

}

console.log('Ok, You Quit The App!');

function newTodo () {
    var newTodo = prompt("Enter a new todo?");
    todos.push(newTodo);
    console.log("Todo Added!");
    task = prompt("What would you like to do?");
}

function listTodos() {
    // console.log(todos);
    console.log("******************");
    todos.forEach(function (todo, index) {
        console.log(index + ": " + todo);
    });
    console.log("******************");
    task = prompt("What would you like to do?");
}

function deleteTodos () {
    var todoToRemove = prompt("Enter index of Todo to remove: ");
    todos.splice(todoToRemove, 1);
    console.log("Item Deleted!");
    task = prompt("What would you like to do?");
}


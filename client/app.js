let listOfTodosDiv = document.getElementById("listOfTodosDiv")
let todoTitleInputTextbox = document.getElementById("todoTitleInputTextbox")
let todoPriorityInputTextbox = document.getElementById("todoPriorityInputTextbox")
let addTodoButton = document.getElementById("addTodoButton")


let allTheTodos = 'http://localhost:3000/todos'

// grabs all the todos from the database
function getAllTheTodosFromDatabase(callback) {

    fetch(allTheTodos)
        .then(response => {
            return response.json()
        }).then((todos) => {
            callback(todos)
        })
}

getAllTheTodosFromDatabase(displayAllTheTodos)

// displays all the todos to the DOM
function displayAllTheTodos(todos) {

    let listOfTodos = todos.map(todo => {
        return `<div class="todoDiv">
                    <h2>${todo.todoTitle}</h2>
                    <p>Priority: ${todo.todoPriority}</p>
                    <p>Date Created: ${todo.todoDateCreated}</p>
                    <input class="checkbox" type="checkbox">
                </div>`
    })
    listOfTodosDiv.innerHTML = listOfTodos.join("")
}


addTodoButton.addEventListener("click", function () {

    let todoTitleInputText = todoTitleInputTextbox.value
    let todoPriorityInputText = todoPriorityInputTextbox.value

    fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            todoTitle: todoTitleInputText,
            todoPriority: todoPriorityInputText,
            // todoDateCreated: timeString,
            // todoDateCompleted: timeString,
            // todoIsCompleted: "false"
        })
    }).then(response => {
        return response.json()
            .then(json => {
                if (json.saved == true) {
                    getAllTheTodosFromDatabase(displayAllTheTodos)
                }
            })
    })
})


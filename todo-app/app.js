const express = require("express")
const Todo = require("./models/todo")

const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

let todos = []

app.get('/', function (req, res) {
    res.send('Sup Nick!')
})

// grabs the todos from the todos array
app.get("/todos", (req, res) => {
    res.json(todos);
});



// saves the todo to the todos array
app.post('/todos', (req, res) => {
    let todoTitle = req.body.todoTitle
    let todoPriority = req.body.todoPriority
    // let todoDateCreated = req.body.todoDateCreated
    // let todoDateCompleted = req.body.todoDateCompleted
    // let todoIsCompleted = req.body.todoIsCompleted

    let todo = new Todo(todoTitle, todoPriority)

    todos.push(todo)

    res.send({
        saved: true
    })

})


// start express node sever
app.listen(3000, () => {
    console.log("Server is running Nick...");
});
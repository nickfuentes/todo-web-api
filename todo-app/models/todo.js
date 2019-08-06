class Todo {
    construtor(todoTitle, todoPriority) {
        this.todoTitle = todoTitle
        this.todoPriority = todoPriority
        this.todoDateCreated = new Date(Date.now()).toLocaleTimeString();
        this.todoDateCompleted = "In Progress"
        this.isCompleted = false;
    }

}

module.exports = Todo
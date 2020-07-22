import { observable, action } from 'mobx'
import TodoModel from "./TodoModel";

class TodoStore {
    @observable todos = []
    lastId = 0
    @observable filter = 'All'

    @action
    addTodo(title) {
        this.todos.push(new TodoModel(this, title, false, this.lastId++))
    }

    @action
    changeFilter(filter) {
        this.filter = filter 
    }

    @action
    clearCompleted() {
        let todosCopy = [...this.todos]
        let todosCopyCopy = todosCopy.filter((todo) => {return (todo.completed === false)})
        this.todos = todosCopyCopy
    }

    @action
    clear(id) {
        let index = this.todos.findIndex((todo) => {return todo.id === id})
        this.todos.splice(index , 1)
    }
}


const todoStore = new TodoStore()
export default todoStore

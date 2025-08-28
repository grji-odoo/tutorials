import { Component, useState } from "@odoo/owl";
import { TodoItem } from "./todoitem";

export class TodoList extends Component {
    static template = "awesome_owl.TodoList";
    static components = {TodoItem}

    setup() {
        this.todos = useState([
            // { id: 3, description: " buy milk", isCompleted: false },
            // { id: 2, description: " do laundry", isCompleted: true }

        ]);
        this.nextId = 0;
    }

    addTodo(ev) {
        // Check if the 'Enter' key was pressed
        if (ev.keyCode === 13 && ev.target.value.trim() !== '') {
            // Add a new todo to the list
            this.todos.push({
                id: this.nextId++,
                description: ev.target.value.trim(),
                isCompleted: false,
            });
            // Clear the input field
            ev.target.value = '';
        }
    }

    toggleTodoState(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.isCompleted = !todo.isCompleted;
        }
    }

    removeTodo(todoId) {
        const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);
        if (todoIndex >= 0) {
            this.todos.splice(todoIndex, 1);
        }
    }
}
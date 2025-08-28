import { Component } from "@odoo/owl";

export class TodoItem extends Component {
    static template = "awesome_owl.TodoItem";

    static props = {
        todo: {
            type: Object,
            optional: false,
            // prop validation
            validate: (todo) => {
                if (typeof todo.id !== 'number' || typeof todo.description !== 'string' || typeof todo.isCompleted !== 'boolean') {
                    console.error("The 'todo' prop has an invalid structure.");
                    return false;
                }
                return true;
            },
        },
        toggleState: {
            type: Function,
            optional: false
        }
    };
}
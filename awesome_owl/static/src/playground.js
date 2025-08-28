import { Component, markup, useState } from "@odoo/owl";
import { Counter } from "./counter/counter"; // Import the Counter component
import { Card } from "./card/card";
import { TodoList } from "./todo/todolist";
export class Playground extends Component {

    static template = "awesome_owl.Playground"; 
    static components = { Counter, Card, TodoList };

    setup() {
        const normalContent = "This is a normal string with <strong>HTML</strong> tags.";
        const safeContent = markup("This is a <strong>safe string</strong> marked for HTML rendering.");
        this.cards = [
            {
                id: 1,
                title: "Normal String (Escaped)",
                content: normalContent,
            },
            {
                id: 2,
                title: "Safe String (Unescaped)",
                content: safeContent,
            },
        ];

        this.state = useState({ sum: 2 });
    }

    incrementSum() {
        this.state.sum++;
    }
}



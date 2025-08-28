import { Component, useState } from "@odoo/owl";


export class Card extends Component {
    static template = "awesome_owl.Card";
    static props = {
        title: {
            type: String,
            optional: false, // The title is required
        },
        content: {
            type: String,
            optional: true, // The content is optional
        },
    };
}
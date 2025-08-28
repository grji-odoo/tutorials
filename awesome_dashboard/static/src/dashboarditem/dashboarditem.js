import { Component, useState } from "@odoo/owl";


export class DashboardItem extends Component {
    static template = "awesome_dashboard.DashboardItem";
    static props = {
        size: {
            type: Number,
            optional: true, 
        },
        content: {
            type: String,
            optional: true, // The content is optional
        },
    };

    get itemWidth() {
        const size = this.props.size || 1;
        return `${18 * size}rem`; s
    }
}
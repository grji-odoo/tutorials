import { registry } from "@web/core/registry";
import { Component, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { useClicker } from "../clicker_hook";

export class ClickerClientAction extends Component {
    static template = "awesome_clicker.ClickerClientAction"; 
    static props = ["*"];
    setup() {
        //this.clickService = useState(useService("awesome_clicker.clicker"));
        this.clicker = useClicker();
    }
}

registry.category("actions").add("awesome_clicker.client_action", ClickerClientAction);
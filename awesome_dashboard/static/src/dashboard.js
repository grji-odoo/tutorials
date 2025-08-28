/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
import { DashboardItem } from "./dashboarditem/dashboarditem";

class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.AwesomeDashboard";
    static components = {Layout , DashboardItem};
    static props = {};


    setup() {
        this.action = useService("action");
    }
    openCustomers() {
        this.action.doAction("base.action_partner_form");
    }
}

registry.category("actions").add("awesome_dashboard.dashboard", AwesomeDashboard);



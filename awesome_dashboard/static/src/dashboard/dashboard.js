/** @odoo-module **/

import { Component, onWillStart, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
import { DashboardItem } from "./dashboarditem";
import { rpc } from "@web/core/network/rpc";
import { PieChart } from "./piechart/piechart";

class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.AwesomeDashboard";
    static components = {Layout , DashboardItem, PieChart};
    static props = {};


    setup() {
        this.action = useService("action");
        this.statistics = useState(useService("awesome_dashboard.statistics"));
        // onWillStart(async () => {
        //     //this.statistics = await rpc("/awesome_dashboard/statistics");
        //     this.statistics = await this.statistics.loadStatistics();
        // });
    }

    openCustomerView() {
        this.action.doAction("base.action_partner_form");
    }

    openLeads() {
        this.action.doAction({
            type: "ir.actions.act_window",
            name: "Leads",
            res_model: "crm.lead",
            views: [[false, "list"], [false, "form"]],
            target: "current",
        });
    }
}

//registry.category("actions").add("awesome_dashboard.dashboard", AwesomeDashboard);
registry.category("lazy_components").add("AwesomeDashboard", AwesomeDashboard);


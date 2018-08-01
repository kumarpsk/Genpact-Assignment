import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import Dashboard from "./components/dashboard";
import * as departmentAction from './actions/departmentActions';

// Create the store
const store = configureStore();

 class MyProject {
    // Initialization Method
    init(elementId) {
        window.addEventListener("load", () => { this.renderComponent(elementId); });
    }
    // Render the component
    renderComponent(elementId) {
        store.dispatch(departmentAction.loadDepartmentItems() as any);
        let targetElement = document.getElementById(elementId);
        if(targetElement) {
            render(
                <Provider store={store}>
                    <Dashboard />
                </Provider>,
                targetElement
            );
        };
    }
}

window["MyProject"] = new MyProject();
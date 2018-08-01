import ActionTypes from "./actionTypes";
import DepartmentData from "../data/DepartmentData"

// Action to load the Department items
export function loadDepartmentItems() {
    return function(dispatch) {
        return DepartmentData.getDepartmentData().then(items => {
            dispatch({
                type: ActionTypes.departMentItems,
                items
            });
        });
    }
}


// Action to Departmant change
export function departmentItemsChange(data) {
    return {
            type: ActionTypes.departMentItemsChange,
            payload : data
        };
}


// Action to Employee ID change
export function employeeChange(data) {
    return {
            type: ActionTypes.employeeChange,
            payload : data
        };
}

// Action to show the error message
export function showErrorMessage(errorMsg) {
    return {
            type: ActionTypes.showError,
            payload : {error: errorMsg}
        };
}

// Action to reset the department
export function reset(data) {
    return {
            type: ActionTypes.reset,
            payload : data
        };
}


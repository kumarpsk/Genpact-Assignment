import ActionTypes from "../actions/actionTypes"
import * as objectAssign from "object-assign";

export default function departmentReducer(state = { 
    items: [], 
    selectedDepartment: 'HR', 
    employees:[], 
    selectedEmployee: '',
    showError: false,
    errorMessage: '' }, action) {
    switch(action.type) {
            case ActionTypes.departMentItems:
				return objectAssign(
					{},
					state,
					{
                        items: action.items,
                        selectedDepartment: 'HR',
                        employees: action.items[0].EmployeeIDs,
                        selectedEmployee: ''
                    }
				);
            case ActionTypes.departMentItemsChange:
                const employees = action.payload.Department.filter(item => item.key === action.payload.selectedDepartment);
                return objectAssign(
                    {},
                    state,
                    {
                        selectedDepartment: action.payload.selectedDepartment,
                        employees:employees[0].EmployeeIDs,
                        selectedEmployee: ''
                    }
                );
            case ActionTypes.employeeChange:
                return objectAssign(                  
                    {},                    
                    state,                   
                    {
                        selectedEmployee: action.payload.selectedEmployee,
                        errorMessage: '',
                        showError: false
                    }
                );
            case ActionTypes.showError:                
                return objectAssign(                   
                    {},                   
                    state,                    
                    {
                        errorMessage: action.payload.error,
                        showError: true
                    }
                );   
            case ActionTypes.reset:
                const resetEmployees = action.payload.Department.filter(item => item.key === 'HR');
                return objectAssign(                    
                    {},                    
                    state,                   
                    {
                        items: action.payload.Department, 
                        selectedDepartment: 'HR', 
                        employees:resetEmployees[0].EmployeeIDs, 
                        selectedEmployee: '',
                        showError: false,
                        errorMessage: ''
                    }
                );    
			default:
                return state;
    }
}

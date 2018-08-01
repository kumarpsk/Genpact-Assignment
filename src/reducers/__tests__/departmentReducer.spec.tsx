import departmentReducer from '../../reducers/departmentReducer';
import {
    departmentItemsChange,
    employeeChange,
    showErrorMessage,
    reset
} from '../../actions/departmentActions';

describe('Department Reducer', () => {
  let state;
  beforeEach(() => {
    state = {
        items: [], 
        selectedDepartment: 'HR', 
        employees:[], 
        selectedEmployee: '',
        showError: false,
        errorMessage: ''
    };
  });
  it('should return the initial state', () => {
    const expectedResult = state;
    expect(departmentReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the department Items Change action correctly', () => {
    state['items'] = [
        {
            key: 'HR',
            text: "HR",
            EmployeeIDs: [
            {
                key: 1,
                text: "1"
            },
            {
                key: 2,
                text: "2"
            },
            {
                key: 3,
                text: "3"
            },
            {
                key: 4,
                text: "4"
            },
            {
                key: 5,
                text: "5"
            }]
        }];
        state['employees'] = [
            {
                key: 1,
                text: "1"
            },
            {
                key: 2,
                text: "2"
            },
            {
                key: 3,
                text: "3"
            },
            {
                key: 4,
                text: "4"
            },
            {
                key: 5,
                text: "5"
            }];
    const expectedResult = state;

    expect(departmentReducer(state, departmentItemsChange({Department:state.items,selectedDepartment: 'HR'}))).toEqual(expectedResult);
  });
  it('should handle the employee Change action correctly', () => {
    state['selectedEmployee'] = 1;
    const expectedResult = state;
    expect(departmentReducer(state, employeeChange({selectedEmployee: 1}))).toEqual(expectedResult);
  });

  it('should handle the show Error Message action correctly', () => {
    state['errorMessage'] = {error:'Error'};
    state['showError'] = true;
    const expectedResult = state;
    expect(departmentReducer(state, showErrorMessage({error: 'Error'}))).toEqual(expectedResult);
  });

  it('should handle the reset action correctly', () => {
    state['items'] = [
        {
            key: 'HR',
            text: "HR",
            EmployeeIDs: [
            {
                key: 1,
                text: "1"
            },
            {
                key: 2,
                text: "2"
            },
            {
                key: 3,
                text: "3"
            },
            {
                key: 4,
                text: "4"
            },
            {
                key: 5,
                text: "5"
            }]
        }];
        state['employees'] = [
            {
                key: 1,
                text: "1"
            },
            {
                key: 2,
                text: "2"
            },
            {
                key: 3,
                text: "3"
            },
            {
                key: 4,
                text: "4"
            },
            {
                key: 5,
                text: "5"
            }];
    const expectedResult = state;
    expect(departmentReducer(state, reset({Department:state.items}))).toEqual(expectedResult);
  });
  
});

import ActionTypes from "../actionTypes";
import {
    departmentItemsChange,
    employeeChange,
    showErrorMessage,
    reset
  } from '../departmentActions';
  
  
  describe('Department Actions', () => {  
    describe('Department Change action', () => {
      it('should return the correct type and the passed repos', () => {
        const department = {
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
        };
        const expectedResult = {
          type: ActionTypes.departMentItemsChange,
          payload : department
        };
        expect(departmentItemsChange(department)).toEqual(expectedResult);
      });
    });
    describe('Employee Change action', () => {
        it('should return the correct type and the passed repos', () => {
          const employee = {
                key: 1,
                text: "1"
            };
          const expectedResult = {
            type: ActionTypes.employeeChange,
            payload : employee
          };
          expect(employeeChange(employee)).toEqual(expectedResult);
        });
      });
    describe('show Error Message action', () => {
    it('should return the correct type and the passed repos', () => {
        const error = {
            error: 'Please select a employee id'
        };
        const expectedResult = {
            type: ActionTypes.showError,
            payload : error
        };
        expect(showErrorMessage('Please select a employee id')).toEqual(expectedResult);
    });
    });
    describe('reset Department action', () => {
    it('should return the correct type and the passed repos', () => {
        const data = {
            selectedDepartment: 'HR', 
            selectedEmployee: '',
            showError: false,
            errorMessage: ''
        };
        const expectedResult = {
            type: ActionTypes.reset,
            payload : data
        };
        expect(reset(data)).toEqual(expectedResult);
    });
    });
  });
  
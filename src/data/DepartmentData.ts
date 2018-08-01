import {Promise} from "es6-promise";

class DepartmentData {
    // Method to return Department Data
    static getDepartmentData() {
        return new Promise((resolve, reject) => {
            let requests = [];
            for (let item of Department) {
                requests.push(item);
            }
            resolve(requests);
        });
    }
}
    
export default DepartmentData;

const Department = [
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
    },
    {
        key: 'ENGINEERING',
        text: "ENGINEERING",
        EmployeeIDs: [
            {
                key: 6,
                text: "6"
            },
            {
                key: 7,
                text: "7"
            },
            {
                key: 8,
                text: "8"
            },
            {
                key: 9,
                text: "9"
            },
            {
                key: 10,
                text: "10"
            }]
    }
];
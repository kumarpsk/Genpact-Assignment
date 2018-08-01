import * as React from "react";
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as deparmentAction from "../../actions/departmentActions";
import * as userAction from '../../actions/userActions';
interface User {
    id: string,
    first_name: string,
    last_name: string,
    avatar: string
}
interface Props {
    department: Array<any>,
    employees: Array<any>,
    selectedDepartment: any
    actions: any,
    selectedEmployee: string
    isFetching: boolean,
    user: User,
    showError: boolean,
    errorMessage: string
}
/**
 * Dashboard
 */
class Dashboard extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
         // Bind the event
        this.getDetails = this.getDetails.bind(this);
        this.reset = this.reset.bind(this);
    }

    getDetails(){
        if(this.props.selectedEmployee !== ''){
            this.props.actions.getDetails(this.props.selectedEmployee);
        } else {
            this.props.actions.shwoError('Please select a employee id');
            this.props.actions.resetUser();
        }
    }
    reset(){
        this.props.actions.resetDepartment({Department:this.props.department});
        this.props.actions.resetUser();
    }
    // Render the component
    render() {
        const isLoading = this.props.isFetching ? 'show-element' : 'hide-element';
        const isEmptyUser = (this.props.user.first_name != undefined && !this.props.showError) ? 'show-element' : 'hide-element'
        const showError = (this.props.showError) ? 'error show-element' : 'error hide-element'
        return (
            <div>
                <div className="ms-Grid">
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                            <Dropdown
                                placeHolder='Select an Option'
                                label='Departments:'
                                id='Departmentsdrop'
                                ariaLabel='Departments:'
                                selectedKey={this.props.selectedDepartment}
                                options={this.props.department}
                                onChanged={this.changeDepartmentState}
                            />
                        </div>
                        <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                            <Dropdown
                                placeHolder='Select an Option'
                                label='Employee ID:'
                                id='Employeedrop'
                                ariaLabel='Employee ID:'
                                options={this.props.employees}
                                selectedKey={this.props.selectedEmployee}
                                onChanged={this.changeEmployeeState}
                            />
                        </div>
                        <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                            <PrimaryButton className="btn-style"
                                    data-automation-id="test"
                                    text="Get Details"
                                    onClick={this.getDetails}
                            />
                            <PrimaryButton className="btn-style"
                                    data-automation-id="test"
                                    text="Clear"
                                    onClick={this.reset}
                            />
                        </div>
                    </div>
                </div>
                <br />
                <div className={isLoading}>
                    <Spinner size={SpinnerSize.large} />
                </div>
                <div>
                    <p className={showError}>{this.props.errorMessage}</p>
                </div>
                <br />
                <div className={isEmptyUser}>
                    <div className="img-container">
                        <Image
                        src={this.props.user.avatar}
                        alt="No Image"
                        />
                    </div>
                    <div className="img-container">
                        <p className="user-name">ID: {this.props.user.id}</p>
                        <p className="user-name">Name: {this.props.user.first_name} {this.props.user.last_name}</p>
                    </div>
                </div>
            </div>
        );
    }

    public changeDepartmentState = (item: IDropdownOption): void => {
        this.props.actions.departmentChange({Department:this.props.department,selectedDepartment:item.key,selectedEmployee:''});
    };
    public changeEmployeeState = (item: IDropdownOption): void => {
        this.props.actions.employeeChange({selectedEmployee:item.key});
    };
}

export default connect(
    (state, ownProps) => {
        return {
            department: state.deparment.items,
            selectedDepartment: state.deparment.selectedDepartment,
            employees: state.deparment.employees,
            selectedEmployee:state.deparment.selectedEmployee,
            user: state.user.user,
            isFetching: state.user.isFetching,
            errorMessage: state.deparment.errorMessage,
            showError: state.deparment.showError
        };
    },
    (dispatch) => {
        return {
            actions: {
                departmentChange: bindActionCreators(deparmentAction.departmentItemsChange as any, dispatch),
                employeeChange: bindActionCreators(deparmentAction.employeeChange as any, dispatch),
                getDetails: bindActionCreators(userAction.fetchUserDetails as any, dispatch),
                shwoError: bindActionCreators(deparmentAction.showErrorMessage as any, dispatch),
                resetDepartment:bindActionCreators(deparmentAction.reset as any, dispatch),
                resetUser:bindActionCreators(userAction.resetUser as any, dispatch),
            }
        };
    }
)(Dashboard);

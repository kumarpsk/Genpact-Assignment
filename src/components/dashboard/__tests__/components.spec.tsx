import * as React from "react";
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'

import Dashboard from '../index';
import * as deparmentAction from "../../../actions/departmentActions";
import * as userAction from '../../../actions/userActions';

describe('should render dashboad component with initial store',()=>{
    const initialState = {
        deparment:{
            items: [], 
            selectedDepartment: 'HR', 
            employees:[], 
            selectedEmployee: '',
            showError: false,
            errorMessage: ''
        },
        user: {
            user:{
                id:undefined,
                avatar:undefined,
                first_name:undefined,
                last_name:undefined
            },
            isFetching:false,
            error:undefined
        }
    }
    const mockStore = configureStore()
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<Dashboard store={store} /> )  
    })

    it('should render the connected(dashboard) component', () => {
       expect(container.length).toEqual(1)
    });

    it('should check Prop matches with initialState', () => {
       expect(container.prop('selectedDepartment')).toEqual(initialState.deparment.selectedDepartment)
    });

});

  /*it('should render fetch the repos on mount if a username exists', () => {
    const submitSpy = jest.fn();
    mount(
      <HomePage
        username="Not Empty"
        onChangeUsername={() => {}}
        onSubmitForm={submitSpy}
      />
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not call onSubmitForm if username is an empty string', () => {
    const submitSpy = jest.fn();
    mount(<HomePage onChangeUsername={() => {}} onSubmitForm={submitSpy} />);
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmitForm if username is null', () => {
    const submitSpy = jest.fn();
    mount(
      <HomePage
        username=""
        onChangeUsername={() => {}}
        onSubmitForm={submitSpy}
      />
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeUsername', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeUsername).toBeDefined();
      });

      it('should dispatch changeUsername when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const username = 'flexdinesh';
        result.onChangeUsername({ target: { value: username } });
        expect(dispatch).toHaveBeenCalledWith(changeUsername(username));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch loadRepos when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(loadRepos());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });*/

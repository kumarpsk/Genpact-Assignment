import userReducer from '../../reducers/userReducer';
import {
    fetchUserDetails,
    resetUser
} from '../../actions/userActions';

describe('User Reducer', () => {
  let state;
  beforeEach(() => {
    state = {
        user:{
            id:undefined,
            avatar:undefined,
            first_name:undefined,
            last_name:undefined
        },
        isFetching:false,
        error:undefined
    };
  });
  it('should return the initial state', () => {
    const expectedResult = state;
    expect(userReducer(undefined, {})).toEqual(expectedResult);
  });
  

  it('should handle the reset user action correctly', () => {
    state['user'] = {
        id:undefined,
        avatar:undefined,
        first_name:undefined,
        last_name:undefined
    };
    state['isFetching'] = false;
    const expectedResult = state;
    expect(userReducer(state, resetUser())).toEqual(expectedResult);
  });
  
});

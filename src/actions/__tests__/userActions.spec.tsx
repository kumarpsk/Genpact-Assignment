import ActionTypes from "../actionTypes";
import {
    resetUser
  } from '../userActions';
  
  
  describe('User Actions', () => {  
    describe('resetUser action', () => {
      it('should return the correct type', () => {
        const expectedResult = {
          type: ActionTypes.ResetUser,
        };
        expect(resetUser()).toEqual(expectedResult);
      });
    });
  });
  
import ActionTypes from "../actions/actionTypes";

export default function userReducer(state = { user:{id:undefined,avatar:undefined,first_name:undefined,last_name:undefined}, isFetching:false, error:undefined }, action) {
    switch(action.type) {			
            case ActionTypes.userDetails:				
				return	{user:{}, isFetching: true }
			case ActionTypes.APIRequestSuccess:			
				return	{ user: action.user, isFetching: false }
			case ActionTypes.APIRequestFailur:			
				return	{user:{}, isFetching: false }
			case ActionTypes.ResetUser:			
				return	{
					user:{
						id:undefined,
						avatar:undefined,
						first_name:undefined,
						last_name:undefined
					}, 
					isFetching: false
				 }			
			default:
                return state;
    }
}

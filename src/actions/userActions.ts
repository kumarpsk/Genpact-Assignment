import ActionTypes from "./actionTypes";

// Action to fetch the user Details
export function fetchUserDetails(userID) {
    return function(dispatch) {
      // Dispatching REQUEST action, which tells our app, that we are started requesting user details.
      dispatch({
        type: ActionTypes.userDetails
      });
      return fetch('https://reqres.in/api/users/'+userID)
        .then(response => response.json().then(body => ({ response, body })))
        .then(({ response, body }) => {
          if (!response.ok) {
            // If request was failed, dispatching FAILURE action.
            dispatch({
              type: ActionTypes.APIRequestFailur,
              error: body.error
            });
          } else {
            // When everything is ok, dispatching SUCCESS action.
            dispatch({
              type: ActionTypes.APIRequestSuccess,
              user: body.data
            });
          }
        });
    }
  }

  // Action to reset user
export function resetUser() {
  return {
          type: ActionTypes.ResetUser
      };
}
import {combineReducers} from "redux";
import user from "./userReducer";
import deparment from './departmentReducer';

const rootReducer = combineReducers({
    user,
    deparment
});

export default rootReducer;

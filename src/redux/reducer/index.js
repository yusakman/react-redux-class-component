import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    dataUser: dataReducer,
    status: authReducer,
})

export default rootReducer
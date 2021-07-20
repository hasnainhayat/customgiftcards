import { combineReducers } from "redux";
import editCardReducer from "./login/editCardReducer";



const rootReducer = combineReducers({

  editCard:editCardReducer
});

export default rootReducer;
import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reduser";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sideBarReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
);

let store = createStore(reducers);
window.store = store;
export default store;
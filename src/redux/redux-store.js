import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reduser";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sideBarReducer
    }
);

let store = createStore(reducers);
window.store=store;
export default store;
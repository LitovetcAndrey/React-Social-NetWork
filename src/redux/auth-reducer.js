const SET_USER_DATA = `SET_USER_DATA`
let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    messages: [],
    fieldsErrors: [],
    isFetching: false,
}
const authReducer = (state = initialState, action) => {
    // let stateCopy;
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }
        default:
            return state;
    }
};
//reduse
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export default authReducer;
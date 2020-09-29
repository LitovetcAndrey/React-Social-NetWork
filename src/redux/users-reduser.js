const FOLLOW = `FOLLOW`;
const UN_FOLLOW = `UN-FOLLOW`;
const SET_USERS = `SET-USERS`;
const ADD_USERS = `ADD-USERS`;
const SET_CURRENT_PAGE = `SET-CURRENT-PAGE`
const SET_TOTAL_USERS_COUNT = `SET-TOTAL-USERS-COUNT`
const TOGGLE_IS_FETCHING = `TOGGLE_IS_FETCHING`

let initialState = {
    users: [ ],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case  FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: true}
                    return u;
                })
            };
        }
        case  UN_FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: false}
                    return u;
                })
            };
        }

        case  SET_USERS: {
            return {...state, users: action.users}

        }

        case  ADD_USERS: {
            return {...state, users: [...action.users, ...action.user]}

        }

        case  SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case  SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }

        case  TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        default:
            return state;
    }
}


export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UN_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const addUsers= (user) => ({type: ADD_USERS, user});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING,isFetching});

export default usersReducer
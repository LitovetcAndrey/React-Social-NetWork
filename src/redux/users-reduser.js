import {usersAPI} from "./../api/api"

const FOLLOW = `FOLLOW`;
const UNFOLLOW = `UNFOLLOW`;
const SET_USERS = `SET_USERS`;
const ADD_USERS = `ADD_USERS`;
const SET_CURRENT_PAGE = `SET_CURRENT_PAGE`
const SET_TOTAL_USERS_COUNT = `SET_TOTAL_USERS_COUNT`
const TOGGLE_IS_FETCHING = `TOGGLE_IS_FETCHING`
const TOGGLE_IS_FOLLOWING_PROGRESS = `TOGGLE_IS_FOLLOWING_PROGRESS`

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        case  UNFOLLOW: {
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
            return {...state, users: [...action.users]}
        }
        case  ADD_USERS: {
            return {...state, users: [...state.users, ...action.users]}
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
        case  TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)]
            }
        }
        default:
            return state;
    }
}

//actionCreator
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const addUsers = (user) => ({type: ADD_USERS, user});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const togleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

//thunk
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        });
    }
};

export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(togleFollowingProgress(true, userId));
        usersAPI.unFollowSuccess(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(userId));
            }
            dispatch(togleFollowingProgress(false, userId));
        });
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(togleFollowingProgress(true, userId));
        usersAPI.followSuccess(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(togleFollowingProgress(false, userId));
        });
    }
};


export default usersReducer;

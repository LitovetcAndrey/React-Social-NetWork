const FOLLOW = `FOLLOW`;
const UN_FOLLOW = `UN-FOLLOW`;
const SET_USERS = `SET-USERS`;
const ADD_USERS = `ADD-USERS`;
const SET_CURRENT_PAGE = `SET-CURRENT-PAGE`
const SET_TOTAL_USERS_COUNT = `SET-TOTAL-USERS-COUNT`

let initialState = {
    users: [
        // {
        //     id: 1,
        //     fullName: `Dima`,
        //     followed: false,
        //     status: `I am a boss`,
        //     photo: "http://www.smileexpo.ru/public/upload/news/tn_10_faktov_ob_eynshteyne_kotorih_vi_ne_znali_14458667137751_image.jpg",
        //     location: {
        //         city: "Kiev",
        //         country: "Ukraine",
        //     }
        // },
        // {
        //     id: 2,
        //     fullName: "Pety",
        //     followed: true,
        //     status: `I am a engineer`,
        //     photo: "https://kpfu.ru/portal/docs/F481714198/20160208_learned_cat_blog_Einstein.jpg",
        //     location: {
        //         city: "Dnipro",
        //         country: "Belarus",
        //     }
        // }
    ],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1
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

        default:
            return state;
    }
}


export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unFollowActionCreator = (userId) => ({type: UN_FOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export const addUsersAC = (user) => ({type: ADD_USERS, user});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});

export default usersReducer
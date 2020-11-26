const UPDATE_NEW_POST_CHANGE = `UPDATE-NEW-POST-CHANGE`;
const ADD_POST = `ADD-POST`;
const SET_USER_PROFILE = `SET-USER-PROFILE`;

let initialState = {
    posts: [
        {id: 1, message: "Hello !", likesCount: 3},
        {id: 2, message: "Hi my friend !!!", likesCount: 4},
        {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
    ],
    newPostText: "",
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ""};
            //stateCopy.posts = [...state.posts, newPost]
            //stateCopy.posts.push(newPost);
            //stateCopy.newPostText = "";
        }
        case  UPDATE_NEW_POST_CHANGE: {
            return {...state, newPostText: action.newText};
        }

        case  SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }

        default:
            return state;
    }
}

//creaters
export const addPost = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostChange = (text) => ({
    type: UPDATE_NEW_POST_CHANGE,
    newText: text
});

export default profileReducer


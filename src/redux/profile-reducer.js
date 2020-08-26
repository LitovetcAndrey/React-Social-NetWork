const UPDATE_NEW_POST_CHANGE = `UPDATE-NEW-POST-CHANGE`;
const ADD_POST = `ADD-POST`;

let initialState=  {
    posts: [
        {id: 1, message: "Hello !", likesCount: 3},
        {id: 2, message: "Hi my friend !!!", likesCount: 4},
        {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
        {id: 4, message: "Hi, it's my first post!!!", likesCount: 8},
        {id: 5, message: "Hi, it's my first post!!!", likesCount: 8},
        {id: 6, message: "Hi, it's my first post!!!", likesCount: 8},
        {id: 7, message: "Hi, it's my first post!!!", likesCount: 8},
        {id: 8, message: "Hi, it's my first post!!!", likesCount: 8},
        {id: 9, message: "Hi, it's my first post!!!", likesCount: 8},
        {id: 10, message: "Hi, it's my first post!!!", likesCount: 8},
    ],
    newPostText: "",
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case  ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy={...state};
            stateCopy.posts=[...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
           return  stateCopy;
        }

        case  UPDATE_NEW_POST_CHANGE: {
            let stateCopy={...state};
            stateCopy.newPostText = action.newText;
            return  stateCopy;
        }

        default:
            break;
    }

    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostChangeActionCreator = (text) => ({
    type: UPDATE_NEW_POST_CHANGE,
    newText: text
});

export default profileReducer


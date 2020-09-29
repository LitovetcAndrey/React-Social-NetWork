const UPDATE_NEW_POST_CHANGE = `UPDATE-NEW-POST-CHANGE`;
const ADD_POST = `ADD-POST`;

let initialState = {
    posts: [
        {id: 1, message: "Hello !", likesCount: 3},
        {id: 2, message: "Hi my friend !!!", likesCount: 4},
        {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
    ],
    newPostText: "",
}

const profileReducer = (state = initialState, action) => {
    //let stateCopy;
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
            // stateCopy.newPostText = action.newText;
            // return stateCopy;
        }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST});
export const updateNewPostChange = (text) => ({
    type: UPDATE_NEW_POST_CHANGE,
    newText: text
});

export default profileReducer


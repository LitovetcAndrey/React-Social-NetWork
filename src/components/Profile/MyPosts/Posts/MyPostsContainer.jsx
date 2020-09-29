import {addPost, updateNewPostChange} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewPostText: (text) => {
//             let action = updateNewPostChangeActionCreator(text);
//             dispatch(action);
//         },
//         addPost: () => {
//             dispatch(addPostActionCreator());
//         }
//     }
// };

const MyPostsContainer = connect(mapStateToProps, {addPost,updateNewPostChange})(MyPosts);
export default MyPostsContainer
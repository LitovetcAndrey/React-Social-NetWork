import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {updateNewPostChange, addPost} from "./../../redux/profile-reducer"

class ProfileContainer extends React.Component {
    remder() {
        debugger
        return <Profile {...this.props}/>
    }
}

export default ProfileContainer;

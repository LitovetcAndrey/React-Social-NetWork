import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "./../../redux/profile-reducer"
import {withRouter} from "react-router";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "./../../hoc/withAuthRerdirect"

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

//
// let mapStateToPropsForRedirect = (state) => ({
//     isAuth: state.auth.isAuth,
// });

//
// let mapStateToProps = (state) => ({
//     profile: state.profilePage.profile,
//     isAuth: state.auth.isAuth,
// });

// let AuthRredirectComponent=(props)=>{
//     if (!props.isAuth ) return <Redirect to={`/login`}/>
//     return <ProfileContainer {...props} />
// }
let AuthRredirectComponent=withAuthRedirect(ProfileContainer);
AuthRredirectComponent=connect(mapStateToProps)(AuthRredirectComponent);

let WithUrlDataContainerComponent = withRouter(AuthRredirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);

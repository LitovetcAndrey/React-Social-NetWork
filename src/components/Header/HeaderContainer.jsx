import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUserData} from "./../../redux/auth-reducer";
import {auth} from "./../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.auth();
    }

    render() {
        return <Header {...this.props}/>
    }
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData, auth})(HeaderContainer)
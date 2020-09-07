import {connect} from "react-redux";
import Users from "./Users";
import {
    addUsersAC,
    followActionCreator,
    setUsersActionCreator,
    unFollowActionCreator
} from "../../redux/users-reduser";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        addUsers: (user) => {
            dispatch(addUsersAC(user))
        },
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

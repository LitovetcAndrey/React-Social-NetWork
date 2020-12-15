import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "./../../hoc/withAuthRerdirect"


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogsPage,
    }
};

// let mapStateToPropsIsAuth = (state) => {
//     return {
//         isAuth: state.auth.isAuth
//     }
// };

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
};

// let AuthRredirectComponent=(props)=>{
//     if (!props.isAuth ) return <Redirect to={`/login`}/>  ;
//     return <Dialogs {...props} />;
// }
let AuthRredirectComponent = withAuthRedirect(Dialogs);
AuthRredirectComponent = connect(mapStateToProps)(AuthRredirectComponent);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRredirectComponent);

export default DialogsContainer;

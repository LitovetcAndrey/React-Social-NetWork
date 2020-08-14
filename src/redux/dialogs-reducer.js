const SEND_MESSAGE = `SEND-MESSAGE`
const UPDATE_NEW_MESSAGE_BODY = `UPDATE-NEW-MESSAGE-BODY`

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {id: 8, message: state.newMessageBody}
            state.messages.push(newMessage);
            state.newMessageBody = "";
            break
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.body;
            break
        }
        default:
            return state

    }
    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) =>
    ({
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    });

export default dialogsReducer
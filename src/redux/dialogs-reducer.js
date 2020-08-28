const SEND_MESSAGE = `SEND-MESSAGE`
const UPDATE_NEW_MESSAGE_BODY = `UPDATE-NEW-MESSAGE-BODY`
let initialState = {
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Pety"},
        {id: 3, name: "Koly"},
        {id: 4, name: "Masha"}
    ],
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are your React"},
        {id: 3, message: "Weather id good"},
        {id: 4, message: "I am working right now"},
        {id: 5, message: "I have been working for an hour"},
        {id: 6, message: "I was work"},
        {id: 7, message: "I was working"},
    ],
    newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {
   // let stateCopy;
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {id: 8, message: state.newMessageBody}
           return {...state, messages: [...state.messages, newMessage], newMessageBody: ""};
            // stateCopy.messages.push(newMessage);
            // stateCopy.newMessageBody = "";
            //return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_BODY: {
           return  {...state, newMessageBody: action.body};
            // stateCopy.newMessageBody = action.body;
            //return stateCopy;
        }
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) =>
    ({
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    });

export default dialogsReducer
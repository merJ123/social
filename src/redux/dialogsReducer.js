const ADD_MESSAGE_ELEMENT = 'ADD-MESSAGE-ELEMENT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        { id: 1, name: "Алексей" },
        { id: 2, name: "Егор" },
        { id: 3, name: "Михаил" },
    ],
    messages: [
        { id: 1, message: "hi" },
        { id: 2, message: "How is your social?" },
        { id: 3, message: "yo" },
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ADD_MESSAGE_ELEMENT:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default: 
            return state;
    }
}


export const addMessageElementActionCreator = () => ({ type: ADD_MESSAGE_ELEMENT })
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;
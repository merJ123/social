import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"


let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                { id: 0, message: "Привет мир!", likes: "12" },
                { id: 1, message: "Hello world!", likes: "30" },
                { id: 2, message: "Wow!", likes: "600" },
            ],
            newPostText: ''
        },
        sidebar: {
            friends: [
                { id: 1, firstName: 'Антон', lastName: 'Романов', img: 'https://i.imgur.com/Jn4n3xc.jpeg', url: '/friends' },
                { id: 2, firstName: 'Евгений', lastName: 'Смирнов', img: 'https://i.imgur.com/KpuyBAf.jpeg', url: '/friends' },
                { id: 3, firstName: 'Алекстандра', lastName: 'Варнава', img: 'https://i.imgur.com/6Jkce9C.jpeg', url: '/friends' },
                { id: 4, firstName: 'Михаил', lastName: 'Иванов', img: 'https://i.imgur.com/Jn4n3xc.jpeg', url: '/friends' }
            ]
        }
    },
    _callSubscriber() {
        console.log("state changed")
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}






window.store = store;

export default store;
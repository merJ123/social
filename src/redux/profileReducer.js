const ADD_POST_ELEMENT = 'ADD-POST-ELEMENT';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 0, message: "Привет мир!", likes: "12" },
        { id: 1, message: "Hello world!", likes: "30" },
        { id: 2, message: "Wow!", likes: "600" },
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST_ELEMENT:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state;
    }
}


export const addPostElementActionCreator = () => ( { type: ADD_POST_ELEMENT } )
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;
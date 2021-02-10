import { SET_CHANNEL, CLEAR_CHANNEL, SET_MESSAGE, SET_CHATROOM_USERS } from '../actions/types';

const initialState = {
    channel: null,
    users: [],
    messages: []
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHANNEL:
            return { ...state, channel: action.payload };
        case CLEAR_CHANNEL:
            return { ...initialState };
        case SET_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload] };
        case SET_CHATROOM_USERS:
            return { ...state, users: action.payload };
        default:
            return state;
    }
};

export default chatReducer;
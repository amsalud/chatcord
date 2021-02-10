import { SET_CHANNEL, CLEAR_CHANNEL, SET_MESSAGE } from '../actions/types';

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
        default:
            return state;
    }
};

export default chatReducer;
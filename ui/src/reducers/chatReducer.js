import { SET_CHANNEL } from '../actions/types';

const initialState = {
    channel: null,
    users: [],
    messages: []
};

const chatReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_CHANNEL:
            return { ...state, channel: action.payload };
        default:
            return state;
    }
};

export default chatReducer;
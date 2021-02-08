import { SET_USER, CLEAR_USER } from '../actions/types';

const initialState = {
    username: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, username: action.payload };
        case CLEAR_USER:
            return { ...initialState };
        default:
            return state
    }
};

export default userReducer;
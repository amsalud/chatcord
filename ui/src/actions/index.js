import { SET_USER, SET_CHANNEL, CLEAR_CHANNEL, CLEAR_USER } from './types'
import history from '../history';

export const joinChannel = (username, channel) => dispatch => {
    dispatch({ type: SET_USER, payload: username });
    dispatch({ type: SET_CHANNEL, payload: channel });
    history.push('/chatroom');
};

export const leaveRoom = () => dispatch => {
    dispatch({ type: CLEAR_USER });
    dispatch({ type: CLEAR_CHANNEL });
    history.push('/');
};
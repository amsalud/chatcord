import { SET_USER, SET_CHANNEL, CLEAR_CHANNEL, CLEAR_USER, SET_MESSAGE } from './types'
import history from '../history';

export const joinChannel = (username, channel) => dispatch => {
    dispatch({ type: SET_USER, payload: username });
    dispatch(setChannel(channel));
    history.push(`/chatroom/${channel}`);
};

export const leaveRoom = () => dispatch => {
    dispatch({ type: CLEAR_USER });
    dispatch({ type: CLEAR_CHANNEL });
    history.push('/');
};

export const setChannel = channel => ({ type: SET_CHANNEL, payload: channel });
export const setMessages = message => ({ type: SET_MESSAGE, payload: message });
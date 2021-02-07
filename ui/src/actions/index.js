import { SET_USER, SET_CHANNEL } from './types'
import history from '../history';

export const joinChannel = (username, channel) => dispatch => {
    dispatch({ type: SET_USER, payload: username });
    dispatch({ type: SET_CHANNEL, payload: channel });
    history.push('/chatroom');
};
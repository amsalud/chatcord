import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { joinChannel } from '../actions';

const JoinChannel = ({ joinChannel }) => {

    const [username, setUsername] = useState('');
    const [channels, setChannels] = useState([]);
    const [room, setRoom] = useState('');

    useEffect(() => {
        const channelSelections = ['Javascript', 'Python', 'PHP', 'C#', 'Ruby', 'Java']
        setChannels(channelSelections);
        setRoom(channelSelections[0]);
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        joinChannel(username, room);
    };

    return (
        <div className="join-container">
            <header className="join-header">
                <h1><i className="fas fa-smile"></i> ChatCord</h1>
            </header>
            <main className="join-main">
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Enter username..." required value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="room">Room</label>
                        <select name="room" id="room" onChange={e => setRoom(e.target.value)}>
                            {channels.map((channel, index) => <option key={index} value={channel}>{channel}</option>)}
                        </select>
                    </div>
                    <button type="submit" className="btn">Join Chat</button>
                </form>
            </main>
        </div>
    );
};

export default connect(null, { joinChannel })(JoinChannel);
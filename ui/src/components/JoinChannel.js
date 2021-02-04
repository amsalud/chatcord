import React, { useState } from 'react';

const JoinChannel = () => {

    const [username, setUsername] = useState('');
    const [channels, setChannels] = useState(['Javascript', 'Python', 'PHP', 'C#', 'Ruby', 'Java']);

    const onSubmit = e => {
        e.preventDefault();
        console.log(username);
    }

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
                        <select name="room" id="room">
                            {
                                channels.map((channel, index) => (<option key={index}>{channel}</option>))
                            }
                        </select>
                    </div>
                    <button type="submit" className="btn">Join Chat</button>
                </form>
            </main>
        </div>
    );
};

export default JoinChannel;
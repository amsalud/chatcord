import React from 'react';
import { connect } from 'react-redux';

const Chatroom = ({ channel }) => {
    return (
        <div className="chat-container">
            <header className="chat-header">
                <h1><i className="fas fa-smile"></i> ChatCord</h1>
                <a href="index.html" className="btn">Leave Room</a>
            </header>
            <main className="chat-main">
                <div className="chat-sidebar">
                    <h3><i className="fas fa-comments"></i> Channel Name:</h3>
                    <h2 id="room-name">{channel}</h2>
                    <h3><i className="fas fa-users"></i> Users</h3>
                    <ul id="users"></ul>
                </div>
                <div className="chat-messages"></div>
            </main>
            <div className="chat-form-container">
                <form id="chat-form">
                    <input
                        id="msg"
                        type="text"
                        placeholder="Enter Message"
                        required
                        autoComplete="off"
                    />
                    <button className="btn"><i className="fas fa-paper-plane"></i> Send</button>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        channel: state.chat.channel
    }
};

export default connect(mapStateToProps)(Chatroom);
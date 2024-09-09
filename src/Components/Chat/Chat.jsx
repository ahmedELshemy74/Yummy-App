

import React, { useState } from 'react';

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (inputMessage.trim() === "") return;

    // Append user's message
    setMessages([...messages, { text: inputMessage, sender: 'user' }]);

    // Clear input field
    setInputMessage("");

    // Simulate a bot response
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: 'Thanks for your message!', sender: 'bot' }
      ]);
    }, 1000);
  };

  return (
    <div className="chat">
      <button className="chat-toggle-button" onClick={toggleChat}>
        {isOpen ? 'Close Chat' : 'Chat with Us'}
      </button>

      {isOpen && (
        <div className="chat-popup">
          <div className="chat-popup-header">
            <h4>How can we help you?</h4>
          </div>

          <div className="chat-popup-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-popup-message ${msg.sender === 'bot' ? 'bot-message' : 'user-message'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-popup-footer">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="chat-input"
              placeholder="Type your message..."
            />
            <button onClick={handleSend} className="send-button">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

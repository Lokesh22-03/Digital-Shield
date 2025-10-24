import React, { useState } from 'react';

export default function Chatbot() {
  const [userMessage, setUserMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!userMessage.trim()) return;
    const response = await fetch('/api/chatbot', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ userMessage }),
    });
    const data = await response.json();
    setChat([...chat, { user: userMessage, bot: data.botMessage }]);
    setUserMessage('');
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <h2>Chatbot Support</h2>
      <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
        {chat.map((c, idx) => (
          <div key={idx} style={{ marginBottom: '10px' }}>
            <b>You:</b> {c.user}
            <br />
            <b>Bot:</b> {c.bot}
          </div>
        ))}
      </div>
      <input
        style={{ width: '80%', padding: '8px' }}
        value={userMessage}
        placeholder="Type your message..."
        onChange={e => setUserMessage(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage} style={{ padding: '8px 12px' }}>Send</button>
    </div>
  );
}

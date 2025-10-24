import React, { useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export default function ReportForm() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState('');

  const submitReport = async () => {
    if (!username.trim() || !message.trim()) {
      setAlert('Please fill in all fields.');
      return;
    }
    try {
      await addDoc(collection(db, 'reports'), {
        username,
        message,
        createdAt: Timestamp.now(),
      });
      setAlert('Report submitted successfully!');
      setUsername('');
      setMessage('');
      setTimeout(() => setAlert(''), 5000);
    } catch (error) {
      setAlert('Error submitting report. Please try again.');
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Report Online Harassment</h2>
      <input
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        placeholder="Profile Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <textarea
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        placeholder="Description"
        value={message}
        onChange={e => setMessage(e.target.value)}
        rows={4}
      />
      <button onClick={submitReport} style={{ padding: '10px 20px' }}>Submit Report</button>
      {alert && <div style={{ color: 'green', marginTop: '10px' }}>{alert}</div>}
    </div>
  );
}

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const reportRoutes = require('./routes/report');
const chatbotRoutes = require('./routes/chatbot');

app.use('/api/report', reportRoutes);
app.use('/api/chatbot', chatbotRoutes);

// Start server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});

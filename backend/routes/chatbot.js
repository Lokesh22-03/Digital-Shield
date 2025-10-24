const express = require('express');
const router = express.Router();
require('dotenv').config();

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.post('/', async (req, res) => {
  const { userMessage } = req.body;

  if (!userMessage) return res.status(400).json({ error: "No message provided" });

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo", // or "gpt-4" if you have access
      messages: [
        { role: "system", content: "You are a helpful assistant specialized in digital safety for women." },
        { role: "user", content: userMessage }
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    res.json({ botMessage: completion.data.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI error:', error.message);
    res.status(500).json({ error: "Error generating chatbot response" });
  }
});

module.exports = router;

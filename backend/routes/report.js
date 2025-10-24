const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { username, message } = req.body;
    // Here you would save report to DB or send notification
    res.json({ success: true, alert: 'Report received. Support will contact you soon.' });
});

module.exports = router;

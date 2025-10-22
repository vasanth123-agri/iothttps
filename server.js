// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/log', (req, res) => {
    console.log('Received data on Railway:', req.body);
    res.json({ status: 'success', received: req.body });
});

app.listen(port, () => {
    console.log(`Railway server running on port ${port}`);
});

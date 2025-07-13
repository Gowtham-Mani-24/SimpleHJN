const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON and serve static files
app.use(express.json());
app.use(express.static('public'));

app.post('/greet', (req, res) => {
  const name = req.body.name;
  if (!name) return res.status(400).json({ message: 'Name is required' });

  res.json({ message: `Hello, ${name}! Welcome to the Node.js app.` });
});

app.get('/data', (req, res) => {
    const users = [
      { id: 1, name: 'Leo' },
      { id: 2, name: 'Harold' },
      { id: 3, name: 'Antony' },
    ];
    res.json(users);
  });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

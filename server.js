const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Mock user data
const users = [
  { id: 1, name: 'John Doe', role: 'Administrator', remoteApproval: true },
  { id: 2, name: 'Jane Smith', role: 'Manager', remoteApproval: false },
];

app.get('/api/user/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Dummy data
let items = [
  { id: 1, name: 'Item 1', description: 'This is item 1' },
  { id: 2, name: 'Item 2', description: 'This is item 2' }
];

// Default route that listens for POST requests on root
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// CREATE: Add a new item
app.post('/items', (req, res) => {
  const { name, description } = req.body;
  const newItem = {
    id: items.length + 1,
    name,
    description
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// READ: Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// READ: Get a single item by ID
app.get('/items/:id', (req, res) => {
  const { id } = req.params;
  const item = items.find(i => i.id == id);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.json(item);
});

// UPDATE: Update an existing item
app.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  const item = items.find(i => i.id == id);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }

  item.name = name;
  item.description = description;
  res.json(item);
});

// DELETE: Delete an item
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  const index = items.findIndex(i => i.id == id);
  if (index === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }

  items.splice(index, 1);
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});

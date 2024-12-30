// index.js (Main entry point for Vercel)

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(express.json());  // Middleware to parse JSON requests

let users = [];
let todos = [];

const JWT_SECRET = 'your_secret_key';

app.get('/', (req, res) => {
    res.send('Hello, World - Todo Api!');
});

app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = { email, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully' });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });

  res.json({ message: 'Login successful', token });
});

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

app.post('/todos', authenticateToken, (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const newTodo = {
    id: todos.length + 1,
    title,
    description: description || '',
    user: req.user.email,
    completed: false
  };

  todos.push(newTodo);
  res.status(201).json({ message: 'Todo created successfully', todo: newTodo });
});

app.get('/todos', authenticateToken, (req, res) => {
  const userTodos = todos.filter(todo => todo.user === req.user.email);
  res.json(userTodos);
});

app.get('/todos/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const todo = todos.find(t => t.id == id && t.user === req.user.email);

  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  res.json(todo);
});

app.put('/todos/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const todo = todos.find(t => t.id == id && t.user === req.user.email);
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  todo.title = title || todo.title;
  todo.description = description || todo.description;
  todo.completed = completed !== undefined ? completed : todo.completed;

  res.json({ message: 'Todo updated successfully', todo });
});

app.delete('/todos/:id', authenticateToken, (req, res) => {
  const { id } = req.params;

  const index = todos.findIndex(t => t.id == id && t.user === req.user.email);
  if (index === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  todos.splice(index, 1);
  res.status(204).json({ message: 'Todo deleted successfully' });
});


app.get('/register', (req, res) => {
    res.json(users); // returns the list of users with hashed passwords
  });


  app.get('/login', (req, res) => {
    res.json(users); // returns the list of users with hashed passwords
  });

module.exports = (req, res) => {
    app(req, res);
  };
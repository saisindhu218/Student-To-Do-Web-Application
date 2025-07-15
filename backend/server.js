const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/todoapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB Error:", err));

// ====== SCHEMAS ======
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const taskSchema = new mongoose.Schema({
  title: String,
  completed: { type: Boolean, default: false },
  username: String // 🔐 Link task to a specific user
});

const User = mongoose.model('User', userSchema);
const Task = mongoose.model('Task', taskSchema);

// ====== ROUTES ======

// Register new user
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const existing = await User.findOne({ username });
  if (existing) return res.json({ message: 'Username already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ username, password: hashedPassword });
  res.json({ message: 'User registered successfully' });
});

// Login user
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.json({ success: false, message: 'User not found' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.json({ success: false, message: 'Incorrect password' });

  res.json({ success: true, message: 'Login successful' });
});

// Create task
app.post('/api/tasks', async (req, res) => {
  const { title, username } = req.body;
  const task = await Task.create({ title, username });
  res.status(201).json(task);
});

// Get all tasks for a user
app.get('/api/tasks/:username', async (req, res) => {
  const { username } = req.params;
  const tasks = await Task.find({ username });
  res.json(tasks);
});

// Delete task
app.delete('/api/tasks/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});

// Update task status
app.put('/api/tasks/:id', async (req, res) => {
  const { completed } = req.body;
  const updated = await Task.findByIdAndUpdate(req.params.id, { completed }, { new: true });
  res.json(updated);
});

// Start server
app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});

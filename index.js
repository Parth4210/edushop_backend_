
const express = require('express');
const cors = require('cors');
const products = require('./a.json');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// API Endpoint to get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// API Endpoint to get a single product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

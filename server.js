const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const deliveryRoutes = require('./routes/deliveryRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/deliverydb', {
    
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Use delivery routes
app.use('/api', deliveryRoutes);

// Basic root route
app.get('/', (req, res) => {
    res.send('Welcome to the Delivery API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

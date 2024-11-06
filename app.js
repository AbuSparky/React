const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectionDatabase = require('./config/connectdatabase');
const cors = require('cors');

// Load environment variables from config.env
dotenv.config({path : path.join(__dirname,'config','config.env') });

// for api purpose using a thunder client

const products = require('./routes/product');
const order = require('./routes/order');


connectionDatabase();

app.use(express.json()); //middleware for req listen the json data
app.use(cors());
app.use('/api/v1/',products);
app.use('/api/v1/',order);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`server listening in port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});

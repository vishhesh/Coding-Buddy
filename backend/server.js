const express = require('express');
const cors = require('cors');
const mongoose = require(mongoose);

require('dotenv').config();

const app = express();
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database Attached..');
}).then(() => {
    console.log('Database Attached..');
}).catch(() => {
    console.log('Database error');
});

app.use(cors());

app.use(express.json());

require('./routes/auth.js')(app);

app.listen(process.env.PORT || 4000, () => {
    console.log('Listining...');
});
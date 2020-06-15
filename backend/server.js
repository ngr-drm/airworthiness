// Configuration for requests.
const express  = require('express');
const bodyparser = require('body-parser');
const app = express();
const allowcors = require('./app/config/cors');
const port = 3003;

// To parser requests for content 'x-www-form-urlencoded'.
app.use(bodyparser.urlencoded({ extended: true }));
// To parser requests for content 'json'.
app.use(bodyparser.json());

app.use(allowcors);
// Assigning routes to the server
require('./app/routes/routes.config')(app);


app.listen(port, () => {
    console.log(`Server is listening on port: ${port}...`);
})

// Configuration for the database.
const mongoose = require('mongoose');
const dbConfig = require('./app/config/db.config');
mongoose.Promise = global.Promise;

// Database connection.
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Successfully connected to the database...')
}).catch(() => {
    console.log('Database connection failure...');
    process.exit();
})


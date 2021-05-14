const express = require('express');
const app = express();
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const path = require('path');


// Sets port
const PORT = process.env.PORT || 8080;

// Sets up Express
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));


// Routes
app.use('/html', htmlRoutes);
app.use('/api', apiRoutes);
app.use(express.json());
app.use(express.static('public'));

// Start server
app.listen(PORT, () => {
    console.log('App Listening At http://localhost:' + PORT);
});
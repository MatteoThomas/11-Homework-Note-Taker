const express = require('express');
const app = express();
const htmlRoutes = require("./Routes/htmlRoutes");
const apiRoutes = require("./Routes/apiRoutes");
const path = require('path');


// Sets port
const PORT = process.env.PORT || 8080;

// Sets up Express
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));


// Routes

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start server
app.listen(PORT, () => {
    console.log('App Listening At http://localhost:' + PORT);
});
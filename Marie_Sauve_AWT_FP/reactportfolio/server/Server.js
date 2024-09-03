const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 5173;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// API route for handling form submissions
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received: Name: ${name}, Email: ${email}, Message: ${message}`);

    // Here, you could add code to handle form submission, such as sending an email or saving to a database.
    console.log(`Received form submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Send a response back to the client
    res.status(200).send('Form submission received!');
});

// The "catchall" handler: for any request that doesn't match the above, send back the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

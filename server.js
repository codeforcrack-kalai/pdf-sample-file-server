const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Enable CORS for all routes and allow all origins
app.use(cors({
    origin: '*'
}));



// Serve the PDF file from the 'public' directory
app.use(express.static('public'));

// Route to serve the specific PDF file
app.get('/file', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sample.pdf'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

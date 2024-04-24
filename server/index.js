const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./db');

const allowedOrigins = ['http://127.0.0.1:5500']; // Update with your VS Code Live Server origin

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

app.use(express.json());

const PORT = process.env.PORT || 3008;

const contactusRouter = require('./routes/contactusRouter');
app.use('/contactus', contactusRouter);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

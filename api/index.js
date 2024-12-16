const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const cors = require('cors');
const bcrypt = require('bcryptjs');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

const jwtSecret = process.env.JWT_SECRET;
const bcryptSalt = bcrypt.genSaltSync(10);
const app = express();
app.use(express.json());

// Fix CORS config: Remove the leading space in the origin URL
app.use(cors({
    credentials: true, // Allow cookies to be sent
    origin: "http://localhost:5173", // Remove space before URL
}));

app.get('', (req, res) => {
    res.json('Hello World! Bye World!');
});

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
        const createdUser = await User.create({
            username: username,
            password: hashedPassword,
        });

        jwt.sign({ userId: createdUser._id, username }, jwtSecret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token, { sameSite: 'None', secure: true }).status(201).json({
                id: createdUser._id,
            });
        });
    } catch (err) {
        res.status(500).json('error');
    }
});

app.listen(4040, () => console.log("Server running on http://localhost:4040"));

const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs'); // 

const app = express();
const db = new Database('credentials.db');

app.use(cors());
app.use(express.json({ limit: '10mb' }));

//  Student login (plain text match)
app.post('/validatePassword', (req, res) => {
    const { username, password } = req.body;
    console.log('Student Login attempt:', username);

    try {
        const stmt = db.prepare('SELECT * FROM students WHERE username = ? AND password = ?');
        const row = stmt.get(username, password);

        if (row) {
            console.log('Student Login success');
            res.send({ validation: true });
        } else {
            console.log('Student Login failed');
            res.send({ validation: false });
        }
    } catch (error) {
        console.error('Database error (student):', error.message);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

//  Recruiter login (bcrypt match)
app.post('/validateRecruiterPassword', (req, res) => {
    const { username, password } = req.body;
    console.log('Recruiter Login attempt:', username);

    try {
        const stmt = db.prepare('SELECT * FROM recruiters WHERE username = ?');
        const row = stmt.get(username);

        if (row && bcrypt.compareSync(password, row.password)) {
            console.log('Recruiter Login success');
            res.send({ validation: true });
        } else {
            console.log('Recruiter Login failed');
            res.send({ validation: false });
        }
    } catch (error) {
        console.error('Database error (recruiter login):', error.message);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

//  Recruiter signup (bcrypt hash)
app.post('/signUpRecruiter', (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    try {
        const stmt = db.prepare('INSERT INTO recruiters (username, password) VALUES (?, ?)');
        stmt.run(username, hashedPassword);
        console.log('Recruiter signed up:', username);
        res.send({ success: true });
    } catch (error) {
        if (error.message.includes('UNIQUE constraint failed')) {
            res.status(400).send({ error: 'Username already exists' });
        } else {
            console.error('Error during recruiter sign-up:', error.message);
            res.status(500).send({ error: 'Internal Server Error' });
        }
    }
});

//  Start the server
app.listen(3001, () => {
    console.log(' Server is running on http://localhost:3001');
});


import mysql from "mysql";

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rule_engine_db'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL');
});

export default db;

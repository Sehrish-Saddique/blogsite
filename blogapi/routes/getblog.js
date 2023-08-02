const express=require('express'); //To require express module node js
const router=express.Router();
const {connection}=require('../database/sql')
router.get('/', (req, res) => {
    connection.query(`SELECT * FROM Blog`, (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
            res.status(500).json({ error: "Internal Server Error" });
        } else {
            console.log("Query result:", result);
            res.json(result);
        }
    });
});

module.exports = router;
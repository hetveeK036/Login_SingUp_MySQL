import express, { response } from "express";
import cors from "cors";
import mysql from "mysql2";
import bcrypt from "bcrypt";

const app = express();

app.use(express.json());

app.use(cors());

//database connectivity
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234", // Corrected the field name to 'password'
  database: "db",
});

const saltRounds = 8; // Number of salt rounds for bcrypt

app.post("/register", (req, res) => {
  const sql = "INSERT INTO user (`username`, `email`, `password`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), saltRounds, (err, hash) => {
    if (err) {
      console.error("Hashing error:", err);
      return res.status(500).json({ Error: "Hashing error" });
    }
    
    const values = [req.body.username, req.body.email, hash];
    
    db.query(sql, [values], (err, result) => {
      if (err) {
        console.error("Database error:", err); // Log the error to understand what went wrong
        return res.status(500).json({ Error: "Database error" });
      } else {
        console.log("User registered successfully:", result); // Log success
        return res.status(201).json({ Success: "User registered successfully", result });
      }
    });
  });
});

// Login route
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM user WHERE `email` = ?";
  db.query(sql, [req.body.email], (err, result) => {
    if (err) return res.json({ Error: "Error in query" });
    if (result.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        result[0].password,
        (err, response) => {
          if (err) return res.json({ Error: "Error in bcrypt comparison" });
          if (response) return res.json({ Status: "Success" });
          else return res.json({ Error: "Wrong Password" });
        }
      );
    } else {
      return res.json({ Error: "Email not found" });
    }
  });
});

const PORT = 3000; // Changed the port to avoid conflict
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

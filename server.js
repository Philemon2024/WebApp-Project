
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(__dirname));

// Homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Login page
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

// Registration page
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "register.html"));
});

// Dashboard page
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "dashboard.html"));
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`WebApp Project running at http://localhost:${PORT}`);
});


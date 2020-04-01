const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DATA ARRAYS
const tables = [
  {
    customerName: "Bob Table",
    phoneNumber: "8888888888",
    customerEmail: "bob@test.com",
    customerID: "0"
  }
];
const waitlist = [
  {
    customerName: "Bob Waitlist",
    phoneNumber: "8888888888",
    customerEmail: "bob@test.com",
    customerID: "0"
  }
];

// Route to serve index.html
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

// Route to serve reservations.html
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "views/reservations.html"));
});

// Route to serve new.html
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "views/new.html"));
});

// Route to serve JSON of the list of tables reservations

app.get("/api/tables", function(req, res) {
  res.json(tables);
});

// Route to serve JSON of the list of wait-listed reservations
app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});
// Route to add new reservation

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});

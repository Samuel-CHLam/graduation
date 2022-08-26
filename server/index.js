const express = require("express");
const app = express();
const port = 5000;
const dotenv = require("dotenv")
const mongoose = require("mongoose"); // library to connect to MongoDB
const inviteRoute = require("./routes/invites");
const codeRoute = require("./routes/codes");
const venueRoute = require("./routes/venues");

// Setup for mongodb
dotenv.config({path: __dirname+'/./../.env'});
app.use(express.json());
const mongoConnectionURL = process.env.mongodbSRV;
const databaseName = "personal-database";

console.log(mongoConnectionURL);

mongoose
  .connect(mongoConnectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: databaseName,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`Error connecting to MongoDB111: ${err}`));

// get is for specific route, use is for any routes that begin with the string.

app.use("/api/invites", inviteRoute);
app.use("/api/codes", codeRoute)
app.use("/api/venues", venueRoute)

app.get("/", (req, res) => res.send("Welcome to Samuel Lam's personal api!"));
app.get("/newEndpoint", (req, res) => res.send("newEndpoint"));

app.listen(port, () => console.log(`Example app listening on port ${port}`));
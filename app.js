const express = require("express");
const app= express()
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");
const leadsRoute=require("./routes/leads")
const compression=require("compression")
const helmet=require("helmet")
require('dotenv').config();
const port = process.env.PORT || 8000;
app.use(bodyParser.json({ limit: "50mb" }));

app.use(helmet())
app.use(compression())
app.use(cors())
app.use("/leads", leadsRoute);
app.use(
    session({
      secret: "thisIsABigSecretForEveryEntryToThebusinessdynamicserver", // Replace with your secret key
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: false, // Set to true if using HTTPS
        maxAge: 30 * 24 * 60 * 60 * 1000, // Session expiration in milliseconds (30 days)
      },
    })
  );
  const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  })

// server.js
const express = require("express");
const bodyParser = require("body-parser");
const { handleTeamsMessage } = require("./netlify/functions/messages/messages");

const app = express();
app.use(bodyParser.json());

app.post("/api/messages", async (req, res) => {
  try {
    await handleTeamsMessage(req, res);
  } catch (e) {
    console.error("Error handling message", e);
    res.status(500).send("Internal server error");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Bot is running on port ${PORT}`);
});

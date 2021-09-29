const { join } = require('path');
const app = express();
const express = require('express');

app.get("/cat/2", (req, res) => {
  res.redirect("https://cdn.discordapp.com/avatars/392087996821667841/57959611ce78d4d3cfa128dfc5bf8681.png?size=2048")
})


app.get("/hi", (req, res) => {
res.send("👋")
})

app.listen(80, () => {
  console.clear()
  console.log(`[APP] Ready!`)
})
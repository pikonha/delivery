const express = require('express')
const app = express()
const axios = require('axios')
require('dotenv').load()

// app.use(express.json())

app.get('/', async (req, res) => {
  try {
    const reciepe = await axios.get(`http://www.recipepuppy.com/api/?i=`)
    const giph = await axios.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5")
    res.send()

  } catch (err) {
    console.log(err)
  }
})


app.listen(3000, console.log("server listenning"))
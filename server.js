const express = require('express')
const app = express()
const axios = require('axios')

app.use(express.json())

app.get('/', async (req, res) => {
  try {
    const reciepe = await axios.get("http://www.recipepuppy.com/api/?i=onions,garlic")
    res.send(reciepe)
  } catch (err) {
    console.log(err)
  }
})


app.listen(3000, console.log("server listenning"))
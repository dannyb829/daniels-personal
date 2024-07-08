// import downloadButt from "./dowload"

const express = require("express")
const app = express()
const path = require('path');

const filePath = path.resolve(__dirname, 'download.html');
const resume = path.resolve(__dirname, 'DanielBritoResumeProtected.pdf');

app.get("/", function(req, res) {
  res.sendFile(filePath)
})

app.get("/download", (req,res) => {
  res.sendFile(resume)
})

app.listen(4000, () => {
  console.log("app listening on port 4000")
})

// const cors = require("cors")

// app.use(cors())
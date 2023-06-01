const express = require("express")
const app = express()
const path = require("path")

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})

app.get("/about", (req, res) => {
    res.sendFile(path.resolve('public/about.html'))
})

app.get("/contact", (req, res) => {
    res.sendFile(path.resolve('public/contact.html'))
})

app.get("/products", (req, res) => {
    res.sendFile(path.resolve('public/products.html'))
})

app.listen(5001, () => {
    console.log("listening on port 5001")
})
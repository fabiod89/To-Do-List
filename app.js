const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static("public"))

const item_list = []
app.get("/", function(req, res) {
  res.render("index", {test: item_list})
  //res.render("index", {test: object})
})

app.post("/", function(req, res) {
  const data = req.body.AddNewItem

  console.log(req.body.checked)

  item_list.push(data)
  res.redirect("/")
})

app.listen(3000, function() {
  console.log("Server started on port 3000")
})

const express = require("express")
const path = require("path")

const modelsRouter = require('./routes/models/models.routes')

var app = express()

app.use(express.static(path.join(__dirname, "public")))


app.get('/',function (req,res){
  res.send( "Hello, How Are You???")
})

app.use('/models', modelsRouter)

app.use('*', function (req,res){
  res.send("ERROR : 404")
})

app.listen(3000, () => {
	console.log("server is Running on : http://localhost:3000")
})

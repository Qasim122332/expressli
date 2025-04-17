const express = require("express")
const app = express();
const serverless = require("serverless")

app.get("/",(req,resp) =>{
    resp.send("<h1>hello from live backend</h1>")
})

module.exports = app;
module.exports.handler = serverless(app)
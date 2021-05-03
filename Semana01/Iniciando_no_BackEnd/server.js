const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false
})

server.get("/", function(req, res) {
  const about = {
    avatar_url: "https://avatars.githubusercontent.com/u/48803031?v=4",
    name: "Hilton Ribeiro",
    role: "Aluno - Rocketseat",
    description: 'Programador back-end, focado em NodeJS. Aluno da <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a>',
    link: [
      { name: "Github", url: "https://github.com/Hilton1" },
      { name: "Twitter", url: "https://twitter.com/jhiltonr1" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/jhiltonribeiro/" }
    ]
  }


  return res.render("about", { about })
})

server.get("/portfolio", function(req, res) {
  return res.render("portfolio", { items: videos })
}) 

server.listen(5000, function() {
  console.log("Server is running")
})
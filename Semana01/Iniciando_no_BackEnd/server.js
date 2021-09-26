<<<<<<< HEAD
const { response } = require('express');
const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

const videos = require("./data.js");

// Configura arquivos estáticos (css, js...)
server.use(express.static('public'));

// Configura as views
server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
});

server.get('/', (req, res) => {
  const data = {
    avatar_url: "https://avatars.githubusercontent.com/u/48803031?s=400&u=2deda9e4229d46340d3d6d01f200989d2e55088f&v=4",
    name: "Hilton Ribeiro",
    role: "Aluno Rocketseat",
    description: 'Programador full-stack, focado em estudar o máximo possível!! Estudante de cursos na <a href="https://app.rocketseat.com.br/dashboard" target="_blank">Rocketseat</a>',
    links: [
      {name: "Github", url: "https://github.com/Hilton1"},
      {name: "Twitter", url: "https://twitter.com/jhiltonr1"},
      {name: "LinkedIn", url: "https://www.linkedin.com/in/jhiltonribeiro/"}      
    ]
  }
  return res.render('about', { about: data });
});

server.get('/portfolio', (req, res) => {
  return res.render('portfolio', { items: videos });
});

server.get('/video', (req, res) => {
  const id = req.query.id;

  const video = videos.find((video) => {
    return video.id == id;
  });

  if (!video) {
    return res.send("Video is not found");
  }

  return res.render("video", { item: video });
});


server.listen(5000, () => {
  console.log('Server is running!');
});
=======
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
>>>>>>> 2257f710e5d538228cfe135063fd8b9e4d1f5d4b

const athletes = [
 {
   'id': 'berengere-schuh',
   'name': 'Bérengère Schuh',
   'country': 'fr',
   'birth': 1984,
   'image': 'berengere-schuh.jpg',
   'cover': 'berengere-schuh-cover.jpg',
   'link': 'https://fr.wikipedia.org/wiki/B%C3%A9reng%C3%A8re_Schuh',
   'medals': [
     { id: 1, year: 2003, type: 'G', event: 'France National Championship' },
     { id: 2, year: 2003, type: 'G', event: 'World Championship' },
     { id: 3, year: 2006, type: 'G', event: 'France National Championship' },
     { id: 4, year: 2007, type: 'S', event: 'World Championship' },
     { id: 5, year: 2008, type: 'G', event: 'European Championship' },
     { id: 6, year: 2009, type: 'B', event: 'World Championship' },
     { id: 7, year: 2013, type: 'B', event: 'World Cup Round' },
   ],
 },
 {
   'id': 'jean-charles-valladont',
   'name': 'Jean-Charles Valladont',
   'country': 'fr',
   'birth': 1989,
   'image': 'jean-charles-valladont.jpg',
   'cover': 'jean-charles-valladont-cover.jpg',
   'link': 'https://fr.wikipedia.org/wiki/Jean-Charles_Valladont',
   'medals': [
     { id: 1, year: 2007, type: 'G', event: 'European Championship Junior' },
     { id: 2, year: 2009, type: 'B', event: 'European Championship' },
     { id: 3, year: 2012, type: 'G', event: 'World Championship' },
     { id: 4, year: 2013, type: 'G', event: 'World Games' },
     { id: 5, year: 2014, type: 'S', event: 'World Championship' },
     { id: 6, year: 2014, type: 'B', event: 'World Cup Round (Wrowclaw)' },
     { id: 7, year: 2015, type: 'G', event: 'World Cup Round (Wroclaw)' },
     { id: 8, year: 2015, type: 'S', event: 'World Cup Round (Mexico City)' },
     { id: 9, year: 2016, type: 'B', event: 'World Championship' },
     { id: 10, year: 2016, type: 'G', event: 'European Championship' },
     { id: 11, year: 2016, type: 'S', event: 'Olympics Games (Rio de Janeiro)' },
     { id: 12, year: 2017, type: 'G', event: 'World Cup Round (Antalya)' },
   ],
 },
 {
   'id': 'sebastien-flute',
   'name': 'Sébastien Flute',
   'country': 'fr',
   'birth': 1972,
   'image': 'sebastien-flute.jpg',
   'cover': 'sebastien-flute-cover.jpg',
   'link': 'https://fr.wikipedia.org/wiki/S%C3%A9bastien_Flute',
   'medals': [
     { id: 1, year: 1989, type: 'G', event: 'European Championship Junior' },
     { id: 2, year: 1991, type: 'G', event: 'World Championship' },
     { id: 3, year: 1991, type: 'G', event: 'France National Championship' },
     { id: 4, year: 1992, type: 'G', event: 'Olympics Games (Barcelona)' },
     { id: 5, year: 1992, type: 'G', event: 'World Championship' },
     { id: 6, year: 1993, type: 'G', event: 'France National Championship' },
     { id: 7, year: 1994, type: 'S', event: 'European Championship' },
     { id: 8, year: 1995, type: 'S', event: 'World Championship' },
     { id: 9, year: 1997, type: 'B', event: 'World Championship' },
     { id: 10, year: 2011, type: 'G', event: 'France National Championship' },
   ],
 },
];
const countries = {
  fr: 'France',
  be: 'Belgium',
  de: 'Germany',
};

// BASE SETUP
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3333");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

var port = process.env.port || 8088;

// ROUTES
var router = express.Router();

router.route('/')
  .get(function(req, res) {
      res.json("Congratulations, it Works !");
  })

router.route('/athletes')
  .get(function(req, res) {
      res.json(athletes);
  });

router.route('/athletes/:id')
  .get(function(req, res) {
      res.json(athletes.filter(athlete => athlete.id === req.params.id)[0]);
  });

router.route('/country/:id')
  .get(function (req, res) {
      res.json(countries[req.params.id]);
  });

// REGISTER ROUTES
app.use('/api', router);

// START
app.listen(port);
console.log("server started on port : ", port);

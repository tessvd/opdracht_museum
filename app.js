// Express toevoegen aan Node.js
const express = require('express');
const app = express();

// bibliotheek inladen om paden naar folder te maken
const path = require('path');

// applicatiepoort instellen
const port = 5000;

// EJS configureren
app.set('view engine', 'ejs');
app.set('views',  path.resolve(__dirname, 'views'));
//public map
app.use(express.static('public'));

// databestand inladen
const artposts = require('./data/artwork.json');

// route naar "homepagina" laten werken
app.get('/', function(req,res){
  res.render('home', {
    posts: artposts.artwork
  });
});

// detailpagina van een portfoliobericht
app.get('/artwork/:postid', function(req,res){
  res.render('detail', {
    post: artposts.artwork[req.params.postid]
  });
});
//contactpagina
app.get("/contact", function(request, response){
  //response.send("Contacteer ons!");
  response.render("contact");
});
//portfoliopagina
app.get("/artwork", function(request, response){
  //response.send("Contacteer ons!");
  response.render("artwork", {
    // Array van portfolioberichten doorgeven aan de renderfunctie om op de homepagina te tonen.
    posts: artposts.artwork
  });
});


app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() { });

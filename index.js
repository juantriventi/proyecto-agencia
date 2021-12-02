const express = require ("express");
const app= express();
const port = 3030;
const path = require("path");


app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/public")));


app.get('/', function (req, res) {
    res.render("index");
  });

app.get('/about', function (req, res) {
    res.render('about');
  });


app.get('/contact', function (req, res) {
    res.render('contact');
  });






app.listen(port, () => { 
console.log("Levantando un servidor con Express en http://localhost:" + port  )
})
 








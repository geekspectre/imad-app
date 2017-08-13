var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articleone = {
  title: 'Article One | Geekspectre',
  heading: 'Article One',
  date: 'Aug 13 2017',
  content: `
            <p>
            This is the content of the article one.
            </p>
            <p>
            This is the content of the article one.
            </p>`
};

function createtemplate(data){
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmltemplate =`
    <html>
        <head>
            <title>Article One</title>
        </head>
        <body>
            <div>
                <a href="/">Home</a>
            </div>
            <hr>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            ${content}
        </body>
    </html>`;
    return htmltemplate;
}
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req,res){
  res.send(createtemplate(articleone));
});

app.get('/article-two', function (req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-two', function (req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

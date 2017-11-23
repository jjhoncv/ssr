#!/usr/bin/env nodejs
const config = require('./app/config/app.ini')[process.env.NODE_ENV];
import express from 'express';
import path from 'path';
import nib from 'nib';
import stylus from 'stylus';

// Server
const app = express();

// console.log(path.join(__dirname, 'views'))

// Declaro a pug como el motor de renderizado
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'app/views'));
app.set('view options', { basedir: path.join(__dirname, '/app')})

app.locals.basedir = path.join(__dirname, '/app'); //necesario para express reconosca basedir de pug
app.locals.url = {}
app.locals.url.base = `http://${config.host}:${config.port}`

// tell node to compile.styl-files to normal css-files
app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: (str, path)=>{
      return stylus(str)
        .set('filename', path)
        .use(nib())
    }
}))

app.use(express.static(path.join(__dirname, 'public/')));

// create routes
const index = require('./app/config/routers/index')

app.use('/', index)



// app.get('/', function(req, res) {
//     res.render('index')
// })

app.get('/about', function(req, res) {
    res.render('about')
})

app.get('/contact', function(req, res) {
    res.render('contact')
})

// var app = require('http').createServer(handler)

// function handler (req, res) {

//   var defaults = 'index.html';
//   if(req.url !== '/'){
//     defaults = req.url;
//   };
  
//   fs.readFile(__dirname + '/' + defaults, function (err, data) {
//     var contentType = 'html';
//     if (err) {
//       res.writeHead(500);
//       return res.end('Error loading index.html');
//     }
//     if(req.url.indexOf('.js')!==-1){
//       contentType = 'javascript';
//     }
//     if(req.url.indexOf('.css')!==-1){
//       contentType = 'css';
//     }

//     res.writeHead(200, {'Content-Type': 'text/' + contentType});
//     res.end(data, 'utf-8');
//   });
// }

app.listen(`${config.port}`, `${config.host}`);

console.log(`Server running at http://${config.host}:${config.port}/`)
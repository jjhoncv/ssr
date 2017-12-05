import config from './config/server.ini'
import client from './config/client.ini'

import * as express from 'express';
import * as path from 'path'
import * as nib from 'nib';
import * as stylus from 'stylus';

// Server
const app = express();

// Declaro a pug como el motor de renderizado
app.set('view engine', 'pug');
app.set('views', config.dirViews);
app.set('view options', { basedir: config.dirServer})

app.locals.basedir = config.dirServer; //necesario para express reconosca basedir de pug
app.locals.site = client;

// tell node to compile.styl-files to normal css-files
app.use(stylus.middleware({
    src: config.dirPublic,
    compile: (str, path)=>{
      return stylus(str)
        .set('filename', path)
        .use(nib())
    }
}))

app.use(express.static(`${config.dirPublic}/`));

// create routes
import RouterIndex from './routes/index'

app.use('/', RouterIndex)

app.listen(`${config.port}`, `${config.host}`);

console.log(`Server running at http://${config.host}:${config.port}/`)
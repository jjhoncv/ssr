import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import formidable from 'formidable';
const router = express.Router();

// define the home page route
router.get('/', function(req, res) {
  res.render('index')
});

// define the about route
router.post('/', function(req, res) {

  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
  	
  	const oldpath = files.demo.path;
  	const newpath = path.join(__dirname, '../') + '/public/imgs/' + files.demo.name;

  	fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      res.write('File uploaded and moved!');
      res.end();
    });

  })

});

export default router

//module.exports = router;
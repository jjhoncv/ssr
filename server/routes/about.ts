import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import formidable from 'formidable';
const router = express.Router();

// define the home page route
router.get('/', function(req, res) {
  res.render('about')
});

router.post('/', function(req, res) {});

export default router
import * as express from 'express';
import {Boxer, IBoxer} from '../models/Boxers';

let router = express.Router();

router.get('/boxer', (req, res, next) => {
  Boxer.find()
    .then((result) => {
      res.json(result);
    }).catch((e) => {
      console.log(e);
    })
})
export default router;

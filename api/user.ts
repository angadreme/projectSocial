import * as express from 'express';
import User from '../models/usermodel';

let router = express.Router();

router.get('/', (req, res) => {
  User.find().then((user) => res.json(user));
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id).then((foundUser) => res.json(foundUser));
});

router.post('/', (req, res) => {
  let newUser = new User();
  newUser.username = req.body.username;
  newUser.save()
    .then((createdUser) => res.json(createdUser));
});

router.post('/:id', (req, res) => {
  let id = req.params.id;
  User.findById(id).then((foundUser) => {
    foundUser.username = req.body.username;
    foundUser.save().then((savedUser) => res.json(savedUser));
  });
});

router.delete('/:id', (req, res) => {
  User.remove({_id: req.params.id}).then((userDeleted)=> res.json(userDeleted))
    .catch((err) => res.json(err));
});

export default router;

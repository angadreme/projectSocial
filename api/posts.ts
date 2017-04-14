import * as express from 'express';
import Post from '../models/postmodel';

let router = express.Router();

router.get('/', (req, res) => {
  Post.find().then((post) => res.json(post));
});

router.get('/:id', (req, res) => {
  Post.findById(req.params.id).then((foundPost) => res.json(foundPost));
});

router.post('/', (req, res) => {
  let newPost = new Post();
  newPost.content = req.body.content;
  newPost.userID = req.body.userID;
  newPost.save()
    .then((createdPost) => res.json(createdPost));
});

router.post('/:id', (req, res) => {
  let id = req.params.id;
  Post.findById(id).then((foundpost) => {
    foundpost.content = req.body.content;
    foundpost.save().then((savedPost) => res.json(savedPost));
  });
});

router.delete('/:id', (req, res) => {
  Post.remove({_id: req.params.id}).then((postDeleted)=> res.json(postDeleted))
    .catch((err) => res.json(err));
});

export default router;

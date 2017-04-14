import * as express from 'express';
import Comment from '../models/commentmodel';

let router = express.Router();

router.get('/', (req, res) => {
  Comment.find().then((comment) => res.json(comment));
});

router.get('/:id', (req, res) => {
  Comment.findById(req.params.id).then((foundComment) => res.json(foundComment));
});

router.post('/', (req, res) => {
  let newComment = new Comment();
  newComment.content = req.body.content;
  newComment.userID = req.body.userID;
  newComment.postID = req.body.postID;
  newComment.save()
    .then((createdcomment) => res.json(createdcomment));
});

router.post('/:id', (req, res) => {
  let id = req.params.id;
  Comment.findById(id).then((foundComment) => {
    foundComment.content = req.body.content;
    foundComment.save().then((savedComment) => res.json(savedComment));
  });
});

router.delete('/:id', (req, res) => {
  Comment.remove({_id: req.params.id}).then((commentDeleted)=> res.json(commentDeleted))
    .catch((err) => res.json(err));
});

export default router;

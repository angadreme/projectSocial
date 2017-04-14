import * as mongoose from 'mongoose';

export interface Comment extends mongoose.Document {
  content: string;
  userID: string;
  postID: string;
}

let commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  postID: {
    type: String,
    required: true
  },
  userID: {
    type: String,
    required: true
  }
});

export default mongoose.model<Comment>('Comment', commentSchema);

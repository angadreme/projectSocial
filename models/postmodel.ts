import * as mongoose from 'mongoose';

export interface Post extends mongoose.Document {
  content: string;
  userID: string;
}

let postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  userID: {
    type: String,
    required: true
  }
});

export default mongoose.model<Post>('Post', postSchema);

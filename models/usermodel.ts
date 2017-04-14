import * as mongoose from 'mongoose';

export interface User extends mongoose.Document {
  username: string;
}

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  }
});

export default mongoose.model<User>('User', userSchema);

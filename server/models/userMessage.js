import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    userName: String,
    password: String,
});

const UserMessage = mongoose.model('PostMessage', userSchema);

export default UserMessage;
